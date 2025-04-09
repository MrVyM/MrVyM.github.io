"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4332],{2503:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>d});var n=l(1675),i=l(4848),r=l(8453);const c={slug:"syscall-on-openbsd",title:"Syscall on OpenBSD",tags:["openbsd","syscall","kernel"],unlisted:!0,authors:"mrvym",hide_title:!1,date:"01/01/1970"},a="Syscall on OpenBSD",t={authorsImageUrls:[void 0]},d=[{value:"Trouver le num d&#39;un syscall",id:"trouver-le-num-dun-syscall",level:2},{value:"Coder le syscall",id:"coder-le-syscall",level:2},{value:"En ASM",id:"en-asm",level:3},{value:"En C",id:"en-c",level:3},{value:"Result",id:"result",level:2},{value:"Comment fix le syscall ?",id:"comment-fix-le-syscall-",level:2},{value:"pinsyscalls(2)",id:"pinsyscalls2",level:3},{value:"Trouver pinsyscall",id:"trouver-pinsyscall",level:3},{value:"Trouver l&#39;utilisation du pinsyscall",id:"trouver-lutilisation-du-pinsyscall",level:3},{value:"sys/syscall.h",id:"syssyscallh",level:3},{value:"Le dossier libexec/ld.so",id:"le-dossier-libexecldso",level:4},{value:"Le dossier sys/sys",id:"le-dossier-syssys",level:4},{value:"The patch",id:"the-patch",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Les versions r\xe9centes d'OpenBSD emp\xeachent l'utilisation directe des syscalls depuis le code utilisateur, en imposant une v\xe9rification dans le linker (",(0,i.jsx)(s.code,{children:"ld.so"}),").\nCela renforce la s\xe9curit\xe9 en rendant les exploits plus difficiles. Cet article explore la mise en place de cette protection, son fonctionnement, et comment la d\xe9sactiver en modifiant le code source du kernel."]}),"\n",(0,i.jsx)(s.h2,{id:"trouver-le-num-dun-syscall",children:"Trouver le num d'un syscall"}),"\n",(0,i.jsxs)(s.p,{children:["Avant tout, nous devons faire un test en appelant un syscall.\nPour trouver le num\xe9ro de syscall de ",(0,i.jsx)(s.code,{children:"void exit(int num)"}),", nous allons lire le man."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"$ man 9 syscall\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Section ",(0,i.jsx)(s.code,{children:"Code references"})," on trouve /sys/kern/syscall.master"]}),"\n",(0,i.jsxs)(s.p,{children:["Ce fichier est tr\xe8s important, il contient la liste des syscalls sur OpenBSD. \xc0 noter qu'\xe0 la diff\xe9rence de Linux, leurs d\xe9clarations sont faites dans ce fichier donc dynamique.\nIl est relativement ",(0,i.jsx)(s.code,{children:"simple"})," d'ajouter un syscall sur BSD."]}),"\n",(0,i.jsx)(s.h2,{id:"coder-le-syscall",children:"Coder le syscall"}),"\n",(0,i.jsx)(s.h3,{id:"en-asm",children:"En ASM"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-asm",children:".global main\n.section .text\n\nmain:\n  movl $1, %eax;\n  syscall;\n  ret;\n"})}),"\n",(0,i.jsx)(s.h3,{id:"en-c",children:"En C"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'int main(void) {\n  asm volatile ("movl $1, %eax;"\n                "syscall;");\n  return 0; // Unreached code \n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"result",children:"Result"}),"\n",(0,i.jsxs)(s.p,{children:["On remarque assez vite que le binaire que nous avons compil\xe9, ne fonctionne pas.\n",(0,i.jsx)(s.code,{children:"main[10291]: pinsyscalls addr 5a288eab978 code 1, pinoff 0xffffffff (pin 330 5a4c881d000-5a4c882b66d e66d) (libcpin 331 5a5145d0000-5a514687000 b7000) error 78 Abort trap (core dumped)"})]}),"\n",(0,i.jsx)(s.p,{children:"Je suppose que cela doit venir d'un process interne au kernel, qui check la validit\xe9 de notre appel et qui nous SIGABRT."}),"\n",(0,i.jsx)(s.h2,{id:"comment-fix-le-syscall-",children:"Comment fix le syscall ?"}),"\n",(0,i.jsxs)(s.p,{children:["L'id\xe9e est de trouver l'endroit qui check le linkage des syscalls dans le kernel et bypass le ",(0,i.jsx)(s.code,{children:"if"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Dans un premier temps, on cherche dans les ",(0,i.jsx)(s.code,{children:"man"})," et non pas dans le code.\n5 min de lecture peuvent nous \xe9viter beaucoup de recherche dans une codebase."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"$ apropos syscall\npinsyscalls(2) - pin system call entry to precise locations in the address space\nsqlite3_vfs, sqlite3_syscall_ptr(3) - OS interface object\nktrace, ktrgenio, ktrnamei, KTRPOINT, ktrpsig, ktrsyscall, ktrsysret(9) - process tracing kernel interface\nsyscall(9) - system calls overview\n"})}),"\n",(0,i.jsx)(s.p,{children:"Nous avons d\xe9j\xe0 lu le syscall(9) pour trouver notre num\xe9ro de syscall, mais pas encore le premier pinsyscalls(2)"}),"\n",(0,i.jsx)(s.h3,{id:"pinsyscalls2",children:"pinsyscalls(2)"}),"\n",(0,i.jsx)(s.p,{children:"On apprend que :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"ld.so(1) cree des entry point pour chaque syscalls"}),"\n",(0,i.jsx)(s.li,{children:"si on ne respecte pas les entry point alors SIGABRT"}),"\n",(0,i.jsx)(s.li,{children:"Ca correspond a notre erreur"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"trouver-pinsyscall",children:"Trouver pinsyscall"}),"\n",(0,i.jsxs)(s.p,{children:["J'en d\xe9duis que l'on cherche ou est ",(0,i.jsx)(s.code,{children:"pinsyscall(1)"}),", trouver le code qui l'appelle puis le fix."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:'$ cd /usr/src\n# Un peu de recherche sur le mode clef syscall plus tard\n$ grep -r "PINSYSCALL"\n#  ...\nlib/libc/arch/amd64/SYS.h:\tPINSYSCALL(SYS_ ## x, 97b)\n'})}),"\n",(0,i.jsx)(s.p,{children:"Alors la macro pinsyscall n'est pas d\xe9fini dans ce fichier (qui est machine-depend). En regardant les include du header, on voit"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'#include "DEFS.h" // Machine independent\n#include  // Machine // independent\n'})}),"\n",(0,i.jsx)(s.h3,{id:"trouver-lutilisation-du-pinsyscall",children:"Trouver l'utilisation du pinsyscall"}),"\n",(0,i.jsxs)(s.p,{children:["Je d\xe9couvre que la fonction ",(0,i.jsx)(s.code,{children:"pinsyscall(1)"})," est d\xe9fini dans mon fichier ",(0,i.jsx)(s.code,{children:"DEFS.h"}),". C'est une macro qui g\xe9n\xe8re de l'assembleur.\nJe ne me lance pas dans l'analyse de son code pour le moment, n\xe9anmoins, je garde en t\xeate son existence.\nPour le moment, je cherche le code qui check le fonctionnement du ",(0,i.jsx)(s.code,{children:"pinsyscall"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"J'ai vu que le include  existe, je vais aller voir par la."}),"\n",(0,i.jsx)(s.h3,{id:"syssyscallh",children:"sys/syscall.h"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:'$ find . -name "syscall.h"\n./libexec/ld.so/syscall.h\n./sys/arch/riscv64/include/syscall.h\n./sys/sys/syscall.h\n'})}),"\n",(0,i.jsx)(s.p,{children:"Deux fichiers ont l'air int\xe9ressant celui de ld.so (cf le man que l'on a lu sur les pinsyscall)."}),"\n",(0,i.jsx)(s.h4,{id:"le-dossier-libexecldso",children:"Le dossier libexec/ld.so"}),"\n",(0,i.jsxs)(s.p,{children:["Apr\xe8s un rapide grep dans le directory du syscall.h pour trouver qui l'utilise. Je trouve le fichier ",(0,i.jsx)(s.code,{children:"resolve.c"}),".\nCela me permet de d\xe9couvrir l'impl\xe9mentation de la fonction ",(0,i.jsx)(s.code,{children:"pinsyscall"})," et de la struct."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="/usr/src/libexec/ld.so/resolve.c "',children:"# line 782\nstruct pinsyscalls {\n  u_int offset;\n  u_int sysno;\n}\n"})}),"\n",(0,i.jsx)(s.h4,{id:"le-dossier-syssys",children:"Le dossier sys/sys"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:'grep -r "syscall.h"\nsyscall.h:/*\t$OpenBSD: syscall.h,v 1.282 2025/02/17 13:10:56 mpi Exp $\t*/\nsyscall_mi.h:#include \n'})}),"\n",(0,i.jsx)(s.h3,{id:"the-patch",children:"The patch"}),"\n",(0,i.jsxs)(s.p,{children:["Nous avons enfin trouv\xe9 le fichier qui contient le fameux ",(0,i.jsx)(s.code,{children:"if"})," qui v\xe9rifie la condition d'appels des syscalls.\nIl nous suffit maintenant de supprimer le ",(0,i.jsx)(s.code,{children:"else"})," pour ne jamais set le variable ",(0,i.jsx)(s.code,{children:"error"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:"$ diff syscall_mi.h.patch syscall_mi.h -Naur > syscall.patch\n--- syscall_mi.h\t2025-02-20 14:13:12.237060577 +0100\n+++ syscall_mi.h.patch\t2025-02-20 14:17:23.279746175 +0100\n@@ -94,8 +94,7 @@\n; /* multiple locations, hopefully a boring operation */\nelse\nerror = ENOSYS;\n-\t} else\n-\t\terror = ENOSYS;\n+\t}\nif (error == 0)\nreturn (0);\ndie:\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,l)=>{l.d(s,{R:()=>c,x:()=>a});var n=l(6540);const i={},r=n.createContext(i);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:s},e.children)}},1675:e=>{e.exports=JSON.parse('{"permalink":"/syscall-on-openbsd","editUrl":"https://github.com/MrVyM/MrVyM.github.io/issues/blog/syscall.md","source":"@site/blog/syscall.md","title":"Syscall on OpenBSD","description":"Les versions r\xe9centes d\'OpenBSD emp\xeachent l\'utilisation directe des syscalls depuis le code utilisateur, en imposant une v\xe9rification dans le linker (ld.so).","date":"1970-01-01T00:00:00.000Z","tags":[{"inline":true,"label":"openbsd","permalink":"/tags/openbsd"},{"inline":true,"label":"syscall","permalink":"/tags/syscall"},{"inline":true,"label":"kernel","permalink":"/tags/kernel"}],"readingTime":3.0933333333333333,"hasTruncateMarker":true,"authors":[{"name":"Vianney Marticou","title":"Mr.VyM @ EPITA","url":"https://github.com/mrvym","page":{"permalink":"/authors/mrvym"},"socials":{"github":"https://github.com/mrvym"},"imageURL":"https://github.com/mrvym.png","key":"mrvym"}],"frontMatter":{"slug":"syscall-on-openbsd","title":"Syscall on OpenBSD","tags":["openbsd","syscall","kernel"],"unlisted":true,"authors":"mrvym","hide_title":false,"date":"01/01/1970"},"unlisted":true}')}}]);