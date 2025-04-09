---
slug: le-plus-petit-segfault
title: Le plus petit segfault
description: Coder le plus petit segfault du monde ! Et creusez dans le fonctionnement du 'main'.
tags:
- C 
- segv
hide_title: false
authors: [mrvym] 
---

Dans cet article, on va voir comment créer un code qui crash le plus efficacement possible.  
Cela veut dire comprendre ce qu'est un segfault, comment marche la fonction `main`, ainsi que le code exécuté avant.

Une magnifique occasion de faire de l'assembleur !

<!-- truncate --> 
### Sans plus attendre, voici notre premier exemple :

```c
main;
```

Ce code compile très bien :  
> `gcc main.c -o main`

et produit cet output :

```sh
$ ./main
[1]    20677 segmentation fault (core dumped)  ./main
```


### Un segfault

Je pense que c’est le bon moment pour répondre à cette question : c’est quoi un segfault ?  

Un **segfault** ou "segmentation fault" est une erreur de segmentation. On l’obtient lorsque notre programme essaye de lire un pointeur qui ne nous appartient pas.  
Au lancement du programme, l’OS lui attribue une certaine quantité de mémoire, et il n’a pas le droit d’en sortir.

C’est une sécurité pour empêcher des programmes d’accéder à des zones mémoire non autorisées.

Quand l’OS (ou plus précisément, le MMU) détecte que le programme tente d’accéder à une mémoire non autorisée, il génère cette "fault".


### On dump des objets

Pour mieux comprendre le fonctionnement du programme, on va aller voir le code machine.  
Le flag `-t` nous permet de récupérer juste la liste des symboles :  

```sh
$ objdump -t ./main
# <-- truncate --> 
0000000000004000  w      .data	0000000000000000              data_start
0000000000004000 g       .data	0000000000000000              __data_start
0000000000001020 g     F .text	0000000000000026              _start
0000000000004010 g       .bss	0000000000000000              __bss_start
0000000000004014 g     O .bss	0000000000000004              main
# <-- truncate --> 
0000000000001000 g     F .init	0000000000000000              .hidden _init
```

On remarque que le symbole `main` est dans le segment `.bss` et pas dans `.text`.

![Segments in ELF file](./segment-c-code.png)

#### Segment **bss** :  
> Le segment `.bss` (Block Starting Symbol) contient les variables statiques allouées.  

#### Segment **text** :  
> Le segment `.text` contient les instructions exécutables du programme.


On se rend compte que notre code ne déclare pas une fonction, mais bien une variable. La variable étant globale, le compilateur crée un symbole pour elle.  
Cela se vérifie très simplement en rajoutant une variable `test` dans notre code :  

```sh
0000000000004018 g     O .bss	0000000000000004              test
```

En effet, le nom `main` n’est pas un keyword spécifique en C. C’est juste un nom de fonction arbitraire qui est appelé au lancement du programme.


### Pour les Québécois

Pour les puristes d’entre vous, il est tout à fait possible de ne pas inclure une fonction `main` dans votre code.  
Il suffit d’écrire votre propre fonction `_start` et de demander à GCC de ne pas linker la sienne :

```c
#include <stdio.h>
#include <stdlib.h>

int principale() {
  puts("Hey là, ça marche-tu?");
  return 0;
}

void _start() {
  int ret = principale();
  exit(ret);
}
```

> `$ gcc principale.c -o principale -nostartfiles`


### Lancement du programme

Mais au fait, qui call la fonction `main` ?

Pour répondre à cette question, regardons le code assembleur de notre programme, en particulier la fonction `_start`.  
Au passage, on remarque que son symbole est bien dans le segment `.text`.

Voici une version simplifiée du code (la fonction complète est assez complexe) :

```nasm
_start: 
    xor %ebp, %ebp            
    mov (%rsp), %edi          
    lea 8(%rsp), %rsi         
    lea 16(%rsp,%rdi,8), %rdx 
    xor %eax, %eax            
    call main                 

    mov %eax, %edi    
    xor %eax, %eax   
    call _exit      
```

#### Étapes de `_start` :
- On marque la fin de la stack frame :  
    `xor %ebp, %ebp`  
- On initialise `argc` :  
    `mov (%rsp), %edi`  
- On initialise `argv` :  
    `lea 8(%rsp), %rsi`  
- On initialise `envp` :  
    `lea 16(%rsp,%rdi,8), %rdx`  
- On set un code retour initialisé à 0 (compatibilité) :  
    `xor %eax, %eax`  
- On call `main(argc, argv, envp)` :  
    `call main`  
- On call la fonction `_exit` avec le code retour :  
    `mov %eax, %edi`  
    `call _exit`

### Envp ??

Le vrai prototype de la fonction `main` a 3 arguments :  

```c
int main(int argc, char* argv[], char* envp[]);
```

> Oui, j’ai découvert le vrai prototype en analysant le reverse de `_start`.

Comme son nom l’indique, `envp` correspond aux variables d’environnement du shell.  
Si on ne vous a jamais montré ça, c’est parce que ce n’est pas portable (même si toutes les machines actuelles le supportent).


### Encore plus petit

Et oui, si vous avez bien suivi, il est maintenant possible de segfault encore plus vite. Il suffit que le segfault soit directement dans la fonction `_start`, sans passer par `main`.  

Voici un exemple minimaliste (vide) :  

```sh
$ touch main.c
/usr/bin/ld: warning: cannot find entry symbol _start; defaulting to 0000000000001000
$ gcc -o main main.c -nostartfiles
```

Nous avons certes un warning, mais ça compile.  
Un `objdump` montre qu’il n’y a presque rien dans ce fichier et que le symbole `_start` n’est pas défini :

```sh
$ objdump -t ./main
<-- truncate --> 
0000000000000000         *UND*	0000000000000000 _start
```
## Scrt1.o, ça sort d'où ?

Alors hormis le fait que j'ai lu la doc de GCC, comment est-ce que je sais que `Scrt1.o` existe ?  
Vous connaissez le `-v` ? Eh oui, on peut très bien activer le debug / verbose sur GCC.  

Personne ne le fait parce qu'il faut avoir un sacré melon pour considérer que GCC fait mal son travail (sauf moi).  

En activant ce flag, on se retrouve avec pas mal de variables d'env qui sont print, mais pas que. On trouve notamment cette ligne dans laquelle on voit l'include des fichiers `.o` :  

```sh
/usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/collect2 
    -plugin /usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/liblto_plugin.so 
    -plugin-opt=/usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/lto-wrapper 
    -plugin-opt=-fresolution=/tmp/ccEcycpv.res 
    -plugin-opt=-pass-through=-lgcc 
    -plugin-opt=-pass-through=-lgcc_s 
    -plugin-opt=-pass-through=-lc 
    -plugin-opt=-pass-through=-lgcc 
    -plugin-opt=-pass-through=-lgcc_s 
    --build-id --eh-frame-hdr --hash-style=gnu 
    -m elf_x86_64 
    -dynamic-linker /lib64/ld-linux-x86-64.so.2 
    -pie -o main 
    /usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/../../../../lib/Scrt1.o 
    /usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/../../../../lib/crti.o 
    /usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/crtbeginS.o 
    -L/usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1 
    -L/usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/../../../../lib -L/lib/../lib -L/usr/lib/../lib 
    -L/usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/../../.. /tmp/cciOyF1Z.o 
    -lgcc 
    --push-state 
    --as-needed 
    -lgcc_s --pop-state -lc -lgcc --push-state --as-needed -lgcc_s 
    --pop-state /usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/crtendS.o 
    /usr/lib/gcc/x86_64-pc-linux-gnu/14.2.1/../../../../lib/crtn.o
```

On remarque beaucoup de flags, on peut essayer d'analyser rapidement leur effet.  

- Les amateurs de CTF, vous aurez remarqué le flag `-pie`, qui permet d'activer l'Address Space Layout Randomization (ASLR).  
- `-lgcc` : eh oui, votre programme C compile avec la librairie dynamique GCC.  
  Vous pouvez éviter ça en compilant avec `-nostdlib`. Je ne vois pas bien l'intérêt, mais c'est un choix.  
- `-m elf_x86_64` : c'est ici que GCC spécifie l'architecture de la machine cible.  
  C'est possible de modifier cette machine cible, cela s'appelle la cross compilation (mais j'en ferai un article spécifique).  

On trouve aussi le fichier `Scrt1.o`, qui contient le point d'entrée (`_start`) de l'exécutable. Les fichiers `crti.o` et `crtbeginS.o`, eux, fournissent des routines nécessaires à l’initialisation des fonctions globales et statiques.  
On pourra citer les fonctions `_init` et `_fini`.  


Source : 
- [The C Runtime Initialization, crt0.o](https://www.embecosm.com/appnotes/ean9/html/ch05s02.html)
- [Linux Questions - Forums](https://www.linuxquestions.org/questions/programming-9/_start-_init-and-frame_dummy-functions-810257/)
- [Stackoverflow - _start in C](https://stackoverflow.com/questions/29694564/what-is-the-use-of-start-in-c)

### Bonus

Pour les **chads** ! Voici le code complet de la fonction `_start`.

<details>
```asm
0000000000001020 <_start>:
    1020:	f3 0f 1e fa          	endbr64
    1024:	31 ed                	xor    %ebp,%ebp
    1026:	49 89 d1             	mov    %rdx,%r9
    1029:	5e                   	pop    %rsi
    102a:	48 89 e2             	mov    %rsp,%rdx
    102d:	48 83 e4 f0          	and    $0xfffffffffffffff0,%rsp
    1031:	50                   	push   %rax
    1032:	54                   	push   %rsp
    1033:	45 31 c0             	xor    %r8d,%r8d
    1036:	31 c9                	xor    %ecx,%ecx
    1038:	48 8d 3d d5 2f 00 00 	lea    0x2fd5(%rip),%rdi        # 4014 <main>
    103f:	ff 15 7b 2f 00 00    	call   *0x2f7b(%rip)        # 3fc0 <__libc_start_main@GLIBC_2.34>
    1045:	f4                   	hlt
    1046:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
    104d:	00 00 00
    1050:	48 8d 3d b9 2f 00 00 	lea    0x2fb9(%rip),%rdi        # 4010 <__TMC_END__>
    1057:	48 8d 05 b2 2f 00 00 	lea    0x2fb2(%rip),%rax        # 4010 <__TMC_END__>
    105e:	48 39 f8             	cmp    %rdi,%rax
    1061:	74 15                	je     1078 <_start+0x58>
    1063:	48 8b 05 5e 2f 00 00 	mov    0x2f5e(%rip),%rax        # 3fc8 <_ITM_deregisterTMCloneTable@Base>
    106a:	48 85 c0             	test   %rax,%rax
    106d:	74 09                	je     1078 <_start+0x58>
    106f:	ff e0                	jmp    *%rax
    1071:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)
    1078:	c3                   	ret
    1079:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)
    1080:	48 8d 3d 89 2f 00 00 	lea    0x2f89(%rip),%rdi        # 4010 <__TMC_END__>
    1087:	48 8d 35 82 2f 00 00 	lea    0x2f82(%rip),%rsi        # 4010 <__TMC_END__>
    108e:	48 29 fe             	sub    %rdi,%rsi
    1091:	48 89 f0             	mov    %rsi,%rax
    1094:	48 c1 ee 3f          	shr    $0x3f,%rsi
    1098:	48 c1 f8 03          	sar    $0x3,%rax
    109c:	48 01 c6             	add    %rax,%rsi
    109f:	48 d1 fe             	sar    $1,%rsi
    10a2:	74 14                	je     10b8 <_start+0x98>
    10a4:	48 8b 05 2d 2f 00 00 	mov    0x2f2d(%rip),%rax        # 3fd8 <_ITM_registerTMCloneTable@Base>
    10ab:	48 85 c0             	test   %rax,%rax
    10ae:	74 08                	je     10b8 <_start+0x98>
    10b0:	ff e0                	jmp    *%rax
    10b2:	66 0f 1f 44 00 00    	nopw   0x0(%rax,%rax,1)
    10b8:	c3                   	ret
    10b9:	0f 1f 80 00 00 00 00 	nopl   0x0(%rax)
    10c0:	f3 0f 1e fa          	endbr64
    10c4:	80 3d 45 2f 00 00 00 	cmpb   $0x0,0x2f45(%rip)        # 4010 <__TMC_END__>
    10cb:	75 33                	jne    1100 <_start+0xe0>
    10cd:	55                   	push   %rbp
    10ce:	48 83 3d 0a 2f 00 00 	cmpq   $0x0,0x2f0a(%rip)        # 3fe0 <__cxa_finalize@GLIBC_2.2.5>
    10d5:	00
    10d6:	48 89 e5             	mov    %rsp,%rbp
    10d9:	74 0d                	je     10e8 <_start+0xc8>
    10db:	48 8b 3d 26 2f 00 00 	mov    0x2f26(%rip),%rdi        # 4008 <__dso_handle>
    10e2:	ff 15 f8 2e 00 00    	call   *0x2ef8(%rip)        # 3fe0 <__cxa_finalize@GLIBC_2.2.5>
    10e8:	e8 63 ff ff ff       	call   1050 <_start+0x30>
    10ed:	c6 05 1c 2f 00 00 01 	movb   $0x1,0x2f1c(%rip)        # 4010 <__TMC_END__>
    10f4:	5d                   	pop    %rbp
    10f5:	c3                   	ret
    10f6:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
    10fd:	00 00 00
    1100:	c3                   	ret
    1101:	66 66 2e 0f 1f 84 00 	data16 cs nopw 0x0(%rax,%rax,1)
    1108:	00 00 00 00
    110c:	0f 1f 40 00          	nopl   0x0(%rax)
    1110:	f3 0f 1e fa          	endbr64
    1114:	e9 67 ff ff ff       	jmp    1080 <_start+0x60>
```
</details>
