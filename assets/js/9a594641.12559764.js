"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8432],{1486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var s=t(4654),i=t(4848),r=t(8453);const a={title:"Tester c'est tricher, compiler c'est douter",slug:"tester-cest-tricher-compiler-c-est-douter",tags:["git","CI","C"],hide_title:!1,date:new Date("2025-01-10T00:00:00.000Z"),authors:["mrvym"]},l="Tester c'est tricher, compiler c'est douter",o={authorsImageUrls:[void 0]},c=[{value:"Histoire",id:"histoire",level:2},{value:"Mais why ?",id:"mais-why-",level:2},{value:"Avantages",id:"avantages",level:3},{value:"Inconv\xe9nients",id:"inconv\xe9nients",level:3},{value:"Fonctionnement",id:"fonctionnement",level:2},{value:"Tr\xeave de blabla",id:"tr\xeave-de-blabla",level:2},{value:"Basique, simple, simple, basique",id:"basique-simple-simple-basique",level:3},{value:"Les flags",id:"les-flags",level:3},{value:"Tests avec Criterion et flags",id:"tests-avec-criterion-et-flags",level:3},{value:"O\xf9 est pass\xe9 Criterion ?",id:"o\xf9-est-pass\xe9-criterion-",level:4},{value:"Multistaging",id:"multistaging",level:4},{value:"Tu t&#39;es fait clang ?",id:"tu-tes-fait-clang-",level:3},{value:"Cache",id:"cache",level:3},{value:"Artefacts",id:"artefacts",level:3},{value:"Coverage de tests",id:"coverage-de-tests",level:3},{value:"Rapporteur",id:"rapporteur",level:4},{value:"Environnement custom",id:"environnement-custom",level:3},{value:"Petit Bonus",id:"petit-bonus",level:3},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Dans cet article, nous allons voir le concept de Continuous Integration (CI), son int\xe9r\xeat et ses inconv\xe9nients et une d\xe9monstration."}),"\n",(0,i.jsx)(n.h2,{id:"histoire",children:"Histoire"}),"\n",(0,i.jsx)(n.p,{children:"Mais d'abord, comme \xe0 mon habitude, un petit point histoire."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"En 1999, Kent Beck a approfondi le sujet dans son premier livre sur l'Extreme Programming. En 2001, CruiseControl, l'un des premiers outils open-source de CI, a vu le jour."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mais-why-",children:"Mais why ?"}),"\n",(0,i.jsx)(n.p,{children:"Le but d'une CI est de faire des tests automatis\xe9s \xe0 chaque commit. Cela garantit que le code reste fonctionnel en permanence. On appelle cela une Continuous Integration car, \xe0 chaque modification, le code est v\xe9rifi\xe9 pour s'assurer qu'il n'y a pas de r\xe9gressions."}),"\n",(0,i.jsx)(n.h3,{id:"avantages",children:"Avantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"D\xe9tection pr\xe9coce des erreurs"})," : Les probl\xe8mes sont identifi\xe9s rapidement, ce qui permet de r\xe9agir sans attendre."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Am\xe9lioration de la qualit\xe9"})," : En testant syst\xe9matiquement, on garantit un code plus robuste."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gain de temps"})," : Les pipelines automatis\xe9s r\xe9duisent la n\xe9cessit\xe9 de tests manuels r\xe9p\xe9titifs."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"inconv\xe9nients",children:"Inconv\xe9nients"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Co\xfbt initial"})," : Mettre en place une CI peut demander des efforts et des comp\xe9tences initiales importantes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Temps d\u2019ex\xe9cution"})," : Les pipelines complexes peuvent rallonger le temps avant qu'un d\xe9veloppeur puisse valider son code."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fonctionnement",children:"Fonctionnement"}),"\n",(0,i.jsx)(n.p,{children:"Avant de voir le fonctionnement, un petit lexique :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Jobs"})," : Une instance d'un conteneur (souvent Docker) qui ex\xe9cute un script. Cela peut inclure des commandes, des tests ou des actions simples comme un ",(0,i.jsx)(n.code,{children:"echo"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pipeline"})," : Une s\xe9rie de jobs organis\xe9s de mani\xe8re s\xe9quentielle ou parall\xe8le. Chaque commit d\xe9clenche cette s\xe9rie pour valider les changements."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Le principe est simple : chaque job retourne un code de statut (succ\xe8s ou \xe9chec). Si un job \xe9choue, la pipeline s\u2019arr\xeate ou ignore les \xe9tapes suivantes selon la configuration."}),"\n",(0,i.jsx)(n.h2,{id:"tr\xeave-de-blabla",children:"Tr\xeave de blabla"}),"\n",(0,i.jsxs)(n.p,{children:["Nous allons utiliser un exemple bas\xe9 sur GitLab CI. On la configure via un fichier ",(0,i.jsx)(n.code,{children:".gitlab-ci.yml"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"basique-simple-simple-basique",children:"Basique, simple, simple, basique"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"image: bookworm-slim:latest\n\nmyjobname:\n  script:\n    - make\n"})}),"\n",(0,i.jsx)(n.h3,{id:"les-flags",children:"Les flags"}),"\n",(0,i.jsx)(n.p,{children:"Pour ajouter des flags de compilation, deux approches sont possibles :"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Via une r\xe8gle dans le Makefile."}),"\n",(0,i.jsx)(n.li,{children:"En passant les flags directement dans la commande CI."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'myjobname_hard:\n  script:\n    - CFLAGS="-Wall -Werror" make\n    # ou\n    - make compile_flags\n'})}),"\n",(0,i.jsx)(n.h3,{id:"tests-avec-criterion-et-flags",children:"Tests avec Criterion et flags"}),"\n",(0,i.jsx)(n.p,{children:"Criterion est une biblioth\xe8que de tests unitaires en C."}),"\n",(0,i.jsx)(n.h4,{id:"o\xf9-est-pass\xe9-criterion-",children:"O\xf9 est pass\xe9 Criterion ?"}),"\n",(0,i.jsx)(n.p,{children:"Avant d\u2019ex\xe9cuter des tests avec Criterion, il est souvent n\xe9cessaire d'installer Criterion, eh oui !"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"before_script:\n  - apt-get update && apt-get install -y libcriterion-dev\nscript:\n  - ./configure\n  - make test\n"})}),"\n",(0,i.jsx)(n.h4,{id:"multistaging",children:"Multistaging"}),"\n",(0,i.jsx)(n.p,{children:"Diviser les tests unitaires et fonctionnels en plusieurs stages garantit :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"une bonne organisation"}),"\n",(0,i.jsx)(n.li,{children:"une meilleure visibilit\xe9 des r\xe9sultats"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"stages:\n  - build\n  - test\n\nbuild:\n  stage: build\n  script:\n    - make all\n\ntest-unit:\n  stage: test\n  script:\n    - make unit-test\n\ntest-functional:\n  stage: test\n  script:\n    - make functional-test\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tu-tes-fait-clang-",children:"Tu t'es fait clang ?"}),"\n",(0,i.jsx)(n.p,{children:"Le formatage du code est super important pour maintenir une base de code propre."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'clang_format:\n  stage: format\n  before_script:\n    - apt-get -qq update && apt-get -qq install -y clang-format autotools-dev autoconf-archive gcovr libcriterion-dev\n  script:\n    - clang-format -i $(find src/ -type f -name "*.c") --dry-run --Werror\n'})}),"\n",(0,i.jsx)(n.h3,{id:"cache",children:"Cache"}),"\n",(0,i.jsxs)(n.p,{children:["Dans certains cas, c'est utile de mettre en cache des fichiers ou dossiers pour \xe9viter de les recharger \xe0 chaque pipeline.",(0,i.jsx)(n.br,{}),"\n","Un exemple courant est le dossier ",(0,i.jsx)(n.code,{children:"node_modules/"})," en JavaScript."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"cache:\n  paths:\n    - node_modules/\n\ninstall:\n  script:\n    - npm install\n"})}),"\n",(0,i.jsx)(n.p,{children:"Bien entendu, vous pouvez nettoyer le cache au besoin avec une option suppl\xe9mentaire dans la configuration de pipeline."}),"\n",(0,i.jsx)(n.h3,{id:"artefacts",children:"Artefacts"}),"\n",(0,i.jsxs)(n.p,{children:["Les artefacts sont les fichiers g\xe9n\xe9r\xe9s par la CI qui peuvent \xeatre partag\xe9s entre jobs ou t\xe9l\xe9charg\xe9s.",(0,i.jsx)(n.br,{}),"\n","Par exemple, les rapports de tests ou de couverture."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"artifacts:\n  paths:\n    - build/\n    - reports/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"coverage-de-tests",children:"Coverage de tests"}),"\n",(0,i.jsx)(n.p,{children:"On peut mesurer la couverture de tests en int\xe9grant des outils comme gcovr ou Cobertura dans votre pipeline CI."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"test-coverage:\n  stage: test\n  script:\n    - gcovr --html --html-details -o coverage.html\n  artifacts:\n    paths:\n      - coverage.html\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rapporteur",children:"Rapporteur"}),"\n",(0,i.jsx)(n.p,{children:"Ce bloc vous permet d'int\xe9grer le coverage report dans votre Merge Request, vous pourrez ainsi voir le code qui n'est pas couvert mais aussi votre pourcentage de coverage."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"coverage-report:\n  script:\n    # do coverage\n  coverage: /^TOTAL.*\\s+(\\d+\\%)$/\n  artifacts:\n    name: coverage.xml\n    expire_in: 2 days\n    reports:\n      coverage_report:\n        coverage_format: cobertura\n        path: coverage.xml\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"environnement-custom",children:"Environnement custom"}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez pr\xe9ciser l\u2019environnement de base pour votre CI en s\xe9lectionnant une image Docker sp\xe9cifique."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"image: gcc:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"En utilisant un peu ce que l'on vient de voir, \xe7a donnerait quelque chose comme \xe7a :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'image: gcc\n\nstages:\n  - format\n  - build\n  - test\n  - clean\n\nclang-format:\n  stage: format\n  script:\n    - clang-format -i $(find src/ -type f -name "*.c") --dry-run --Werror\n\nbuild:\n  stage: build\n  script:\n    - autoreconf --install\n    - ./configure\n    - make all\n\ntest-unit:\n  stage: test\n  script:\n    - autoreconf --install\n    - ./configure\n    - make unit-test\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Attention aux ",(0,i.jsx)(n.code,{children:".h"})," et il manque des ",(0,i.jsx)(n.code,{children:"before_script"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"petit-bonus",children:"Petit Bonus"}),"\n",(0,i.jsxs)(n.p,{children:["On peut aussi v\xe9rifier les trash-files pour s\u2019assurer que le ",(0,i.jsx)(n.code,{children:"make clean"})," fait bien son travail."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"trash-file:\n  stage: clean\n  needs: []\n  before_script:\n    - apt-get -qq update && apt-get -qq install -y tree\n  script:\n    - tree > /tmp/REF\n    - make && make clean\n    - tree > /tmp/TEST\n    - diff /tmp/REF /tmp/TEST\n"})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"La Continuous Integration est un outil extr\xeamement puissant. Il peut parfois \xeatre difficile \xe0 mettre en place, mais les gains sont immenses."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}},4654:e=>{e.exports=JSON.parse('{"permalink":"/tester-cest-tricher-compiler-c-est-douter","editUrl":"https://github.com/MrVyM/MrVyM.github.io/issues/blog/2025-01-10-Tester-cest-tricher/index.md","source":"@site/blog/2025-01-10-Tester-cest-tricher/index.md","title":"Tester c\'est tricher, compiler c\'est douter","description":"Dans cet article, nous allons voir le concept de Continuous Integration (CI), son int\xe9r\xeat et ses inconv\xe9nients et une d\xe9monstration.","date":"2025-01-10T00:00:00.000Z","tags":[{"inline":true,"label":"git","permalink":"/tags/git"},{"inline":true,"label":"CI","permalink":"/tags/ci"},{"inline":false,"label":"C Language","permalink":"/tags/c","description":"The most wonderful language"}],"readingTime":3.786666666666666,"hasTruncateMarker":true,"authors":[{"name":"Vianney Marticou","title":"Mr.VyM @ EPITA","url":"https://github.com/mrvym","page":{"permalink":"/authors/mrvym"},"socials":{"github":"https://github.com/mrvym"},"imageURL":"https://github.com/mrvym.png","key":"mrvym"}],"frontMatter":{"title":"Tester c\'est tricher, compiler c\'est douter","slug":"tester-cest-tricher-compiler-c-est-douter","tags":["git","CI","C"],"hide_title":false,"date":"2025-01-10T00:00:00.000Z","authors":["mrvym"]},"unlisted":false,"prevItem":{"title":"Le plus petit segfault","permalink":"/le-plus-petit-segfault"},"nextItem":{"title":"Introduction \xe0 Terraform avec Proxmox","permalink":"/intro-terraform-proxmox"}}')}}]);