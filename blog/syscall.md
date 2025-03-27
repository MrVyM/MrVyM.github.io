---
draft: true
---
<!-- truncate -->
# Syscall on OpenBSD
Les versions récentes d'OpenBSD empêchent l'utilisation directe des syscalls depuis le code utilisateur, en imposant une vérification dans l'éditeur de liens dynamique (`ld.so`). 
Cela renforce la sécurité en rendant les exploits plus difficiles. 
Ce rapport explore la mise en place de cette protection, son fonctionnement, et comment la désactiver en modifiant le code source du système.

## Trouver le num d'un syscall 

Avant tout, nous devons faire un test en appelant un syscall. 
Pour trouver le numéro de syscall de `void exit(int num)`, nous allons lire le man.
```sh
$ man 9 syscall
```
Section `Code references` on trouve /sys/kern/syscall.master

Ce fichier est très important, il contient la liste des syscalls sur OpenBSD. À noter qu'à la différence de Linux, leurs déclarations sont faites dans ce fichier donc dynamique. 
Il est relativement `simple` d'ajouter un syscall sur BSD. 

## Coder le syscall

### En ASM
```asm
.global main
.section .text

main:
  movl $1, %eax;
  syscall;
  ret;
```

### En C 

```c
int main(void) {
  asm volatile ("movl $1, %eax;"
                "syscall;");
  return 0; // Unreached code 
}
```

## Result 
On remarque assez vite que le binaire que nous avons compilé, ne fonctionne pas. 
`main[10291]: pinsyscalls addr 5a288eab978 code 1, pinoff 0xffffffff (pin 330 5a4c881d000-5a4c882b66d e66d) (libcpin 331 5a5145d0000-5a514687000 b7000) error 78
Abort trap (core dumped)`

Je suppose que cela doit venir d'un process interne au kernel, qui check la validité de notre appel et qui nous SIGABRT.

## Comment fix le syscall ? 

L'idée est de trouver l'endroit qui check le linkage des syscalls dans le kernel et bypass le `if`.

Dans un premier temps, on cherche dans les `man` et non pas dans le code.
5 min de lecture peuvent nous éviter beaucoup de recherche dans une codebase.

```sh
$ apropos syscall
pinsyscalls(2) - pin system call entry to precise locations in the address space
sqlite3_vfs, sqlite3_syscall_ptr(3) - OS interface object
ktrace, ktrgenio, ktrnamei, KTRPOINT, ktrpsig, ktrsyscall, ktrsysret(9) - process tracing kernel interface
syscall(9) - system calls overview
```
Nous avons déjà lu le syscall(9) pour trouver notre numéro de syscall, mais pas encore le premier pinsyscalls(2)

### pinsyscalls(2)

On apprend que : 
- ld.so(1) cree des entry point pour chaque syscalls
- si on ne respecte pas les entry point alors SIGABRT 
- Ca correspond a notre erreur

### Trouver pinsyscall

J'en déduis que l'on cherche ou est `pinsyscall(1)`, trouver le code qui l'appelle puis le fix.

```sh
$ cd /usr/src
# Un peu de recherche sur le mode clef syscall plus tard
$ grep -r "PINSYSCALL"
#  ...
lib/libc/arch/amd64/SYS.h:	PINSYSCALL(SYS_ ## x, 97b)
```

Alors la macro pinsyscall n'est pas défini dans ce fichier (qui est machine-depend). En regardant les include du header, on voit 

```c
#include "DEFS.h" // Machine independent
#include  // Machine // independent
```

### Trouver l'utilisation du pinsyscall

Je découvre que la fonction `pinsyscall(1)` est défini dans mon fichier `DEFS.h`. C'est une macro qui génère de l'assembleur. 
Je ne me lance pas dans l'analyse de son code pour le moment, néanmoins, je garde en tête son existence. 
Pour le moment, je cherche le code qui check le fonctionnement du `pinsyscall`. 

J'ai vu que le include  existe, je vais aller voir par la.

### sys/syscall.h

```c
$ find . -name "syscall.h"
./libexec/ld.so/syscall.h
./sys/arch/riscv64/include/syscall.h
./sys/sys/syscall.h
```

Deux fichiers ont l'air intéressant celui de ld.so (cf le man que l'on a lu sur les pinsyscall).

#### Le dossier libexec/ld.so

Après un rapide grep dans le directory du syscall.h pour trouver qui l'utilise. Je trouve le fichier `resolve.c`.
Cela me permet de découvrir l'implémentation de la fonction `pinsyscall` et de la struct.
```c
# /usr/src/libexec/ld.so/resolve.c : line 782
struct pinsyscalls {
u_int offset;
u_int sysno;
}
```
#### Le dossier sys/sys

```sh
grep -r "syscall.h"
syscall.h:/*	$OpenBSD: syscall.h,v 1.282 2025/02/17 13:10:56 mpi Exp $	*/
syscall_mi.h:#include 
```

### The patch

Nous avons enfin trouvé le fichier qui contient le fameux `if` qui vérifie la condition d'appels des syscalls.
Il nous suffit maintenant de supprimer le `else` pour ne jamais set le variable `error`.

```diff
$ diff syscall_mi.h.patch syscall_mi.h -Naur > syscall.patch
--- syscall_mi.h	2025-02-20 14:13:12.237060577 +0100
+++ syscall_mi.h.patch	2025-02-20 14:17:23.279746175 +0100
@@ -94,8 +94,7 @@
; /* multiple locations, hopefully a boring operation */
else
error = ENOSYS;
-	} else
-		error = ENOSYS;
+	}
if (error == 0)
return (0);
die:
```
