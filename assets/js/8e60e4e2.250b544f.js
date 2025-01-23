"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8734],{116:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var i=r(6292),s=r(4848),a=r(8453);const l={slug:"define-inc-a-inc-a+1",title:"#define INC(a) INC(a+1)",tags:["define","C","macro"],hide_title:!1,authors:["mrvym"]},o="Une directive pr\xe9processeur",t={authorsImageUrls:[void 0]},c=[{value:"Mama, la macro",id:"mama-la-macro",level:2},{value:"If or not if",id:"if-or-not-if",level:2},{value:"Macros pr\xe9d\xe9finies",id:"macros-pr\xe9d\xe9finies",level:2},{value:"Vers l&#39;infini et au-del\xe0 des arguments",id:"vers-linfini-et-au-del\xe0-des-arguments",level:2},{value:"X-Macro",id:"x-macro",level:2},{value:"Les probl\xe8mes",id:"les-probl\xe8mes",level:2},{value:"Probl\xe8me n\xb01",id:"probl\xe8me-n1",level:3},{value:"Probl\xe8me n\xb02",id:"probl\xe8me-n2",level:3},{value:"Macros utiles",id:"macros-utiles",level:2},{value:"L\xe0, on s&#39;amuse",id:"l\xe0-on-samuse",level:2},{value:"Un auto free",id:"un-auto-free",level:3},{value:"Get time",id:"get-time",level:3},{value:"Define Error",id:"define-error",level:3},{value:"G\xe9n\xe9ration de tests automatis\xe9s",id:"g\xe9n\xe9ration-de-tests-automatis\xe9s",level:3},{value:"RTFM",id:"rtfm",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Le but de cet article est de vous faire d\xe9couvrir le magnifique univers des macros en C."}),"\n",(0,s.jsx)(n.p,{children:"En C, les lignes qui commencent par un # sont interpr\xe9t\xe9es par le compilateur lors de la compilation des fichiers sources. On les appelle des directives du pr\xe9processeur. Les macros en font partie."}),"\n",(0,s.jsx)(n.p,{children:"Petit point historique :"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Les macros en langage C ont \xe9t\xe9 introduites avec la premi\xe8re norme du langage C, appel\xe9e ANSI C (ou C89),\nqui a \xe9t\xe9 standardis\xe9e par l'",(0,s.jsx)(n.a,{href:"https://www.ansi.org",children:"American National Standards Institute"})," (ANSI) en 1989."]}),"\n",(0,s.jsx)(n.p,{children:"Cependant, avant cette standardisation, les macros faisaient d\xe9j\xe0 partie du langage C classique (ou K&R C) utilis\xe9 dans les ann\xe9es 1970.\nLe compilateur C original, d\xe9velopp\xe9 par Dennis Ritchie pour le syst\xe8me d'exploitation UNIX, incluait d\xe9j\xe0 une forme rudimentaire de macros via le pr\xe9processeur, permettant des d\xe9finitions avec #define."}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"define",children:"Define"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define SENS_DE_LA_VIE 3.14\n\n/* ... */\n\nprintf("%f\\n", SENS_DE_LA_VIE);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Le ",(0,s.jsx)(n.code,{children:"define"})," a un fonctionnement assez simple \xe0 comprendre : le compilateur remplace toutes les occurrences dans le code par la valeur d\xe9finie. Il fonctionne avec la syntaxe suivante ",(0,s.jsx)(n.code,{children:"#define <MACRO_NAME> <value>"}),". On a pour convention de mettre le nom en majuscule, la valeur quant \xe0 elle est optionnelle."]}),"\n",(0,s.jsx)(n.p,{children:'Un peu comme un "Ctrl-f et remplacer".'}),"\n",(0,s.jsx)(n.h2,{id:"mama-la-macro",children:"Mama, la macro"}),"\n",(0,s.jsxs)(n.p,{children:["On peut utiliser les ",(0,s.jsx)(n.code,{children:"define"})," pour d\xe9finir des fonctions que l'on pourra utiliser dans notre code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define INC(a) a++ \n#define MULTI_LINE(a,b) a = b; \\\n                        b = 0; \n\n\nINC(my_variable); \nMULTI_LINE(my_variable, foobar) \n// Je souligne le fait qu'il peut ne pas y avoir de ';' en fin de ligne \n\n// Cela donnera  \nmy_variable++;\nmy_variable = foobar;\nfoobar = 0;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"if-or-not-if",children:"If or not if"}),"\n",(0,s.jsx)(n.p,{children:"Nous pouvons d\xe9clarer des macros de mani\xe8re conditionnelle.\nSi un nom est d\xe9j\xe0 d\xe9fini alors on ex\xe9cute le bout de code suivant."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#ifdef DEBUG\n// Je souligne qu'il est rarement conseill\xe9 d'utiliser des printf() en debug\n// et que nous avons bris\xe9 la r\xe8gle du nom des macros en MAJ.\n#define return printf(\"(%s:%d)\\n\", __FUNCTION__, __LINE__);  return\n#endif /* ! DEBUG */\n\nint main(void) {\n    return 1;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Dans ce cas, j'utilise un ",(0,s.jsx)(n.code,{children:"#ifndef"}),", mais il existe aussi :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"#ifdef"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"#if"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"#else"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"#elif"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#if (X == 1)\n#define Y 2\n#elif (X == 2)\n#define Y "Ami de la bonne blague, bonjour !"\n#else\n#define Y NULL\n#endif /* ! X */\n\n/* ... */\n\nint main(void) {\n    #if (X == 1)\n    printf("%d\\n", Y);\n    #else \n    printf("%s\\n", Y);\n    #endif /* ! X */\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["On aime bien signaler avec un commentaire en bloc la fin des ",(0,s.jsx)(n.code,{children:"#if"}),". C'est une convention qui permet de mieux se rep\xe9rer dans le code."]}),"\n",(0,s.jsx)(n.h2,{id:"macros-pr\xe9d\xe9finies",children:"Macros pr\xe9d\xe9finies"}),"\n",(0,s.jsxs)(n.p,{children:["Vous avez pu voir dans l'exemple pr\xe9c\xe9dent que j'utilisais les mots-cl\xe9s ",(0,s.jsx)(n.code,{children:"__FUNCTION__"})," et ",(0,s.jsx)(n.code,{children:"__LINE__"}),".\nComme vous pouvez vous en douter, ce sont des macros que le compilateur va remplacer par la bonne valeur."]}),"\n",(0,s.jsxs)(n.p,{children:["Il existe une liste de macros pr\xe9d\xe9finies ",(0,s.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/cpp/Common-Predefined-Macros.html",children:"Common Predifined"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\xc0 noter qu'il existe des macros dites ",(0,s.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/cpp/System-specific-Predefined-Macros.html",children:"System specific"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Petite liste non exhaustive :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__DATE__"})," : Jan 14 2012"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__GNUC__"})," : Version majeure de GCC"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__TIME__"})," : 15:12:18"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__INCLUDE_LEVEL__"})," : La profondeur des includes en commen\xe7ant par 0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__BASE_FILE__"})," : Le nom du fichier actuel"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vers-linfini-et-au-del\xe0-des-arguments",children:"Vers l'infini et au-del\xe0 des arguments"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// Ici, l'op\xe9rateur ## est l'op\xe9rateur de concat\xe9nation\n#define DEBUG_PRNTF(fmt, ...) printf(\"LOG\" ## fmt, __VA_ARGS__);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Ici, on peut voir que l'on g\xe9n\xe8re des macros variadiques, surtout utiles lors de la cr\xe9ation de logs.\n(M\xeame si ce n'est pas une bonne id\xe9e de faire des logs avec des ",(0,s.jsx)(n.code,{children:"printf"}),".)"]}),"\n",(0,s.jsx)(n.h2,{id:"x-macro",children:"X-Macro"}),"\n",(0,s.jsxs)(n.p,{children:["Pour cela, nous allons devoir cr\xe9er un fichier externe, souvent nomm\xe9 en ",(0,s.jsx)(n.code,{children:"*.def"})," bien qu'il n'existe pas de convention."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// color.def\nX(NC, "\\e[0m", "No Color", 0x000000) \nX(BLACK, "\\e[0;30m", "Black", 0x000000) \nX(GRAY, "\\e[1;30m", "Gray", 0x808080) \nX(RED, "\\e[0;31m", "Red", 0xFF0000) \nX(LIGHT_RED, "\\e[1;31m", "Light Red", 0xFF8080) \nX(GREEN, "\\e[0;32m", "Green", 0x00FF00) \nX(LIGHT_GREEN, "\\e[1;32m", "Light Green", 0x80FF80) \nX(BROWN, "\\e[0;33m", "Brown", 0xA52A2A) \nX(YELLOW, "\\e[1;33m", "Yellow", 0xFFFF00) \nX(BLUE, "\\e[0;34m", "Blue", 0x0000FF) \nX(LIGHT_BLUE, "\\e[1;34m", "Light Blue", 0xADD8E6) \nX(PURPLE, "\\e[0;35m", "Purple", 0x800080) \nX(LIGHT_PURPLE, "\\e[1;35m", "Light Purple", 0xEE82EE) \nX(CYAN, "\\e[0;36m", "Cyan", 0x00FFFF) \nX(LIGHT_CYAN, "\\e[1;36m", "Light Cyan", 0xE0FFFF) \nX(LIGHT_GRAY, "\\e[0;37m", "Light Gray", 0xD3D3D3) \nX(WHITE, "\\e[1;37m", "White", 0xFFFFFF)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'typedef struct {\n    const char *name;        \n    const char *ansi_code;  \n    const char *description;\n    unsigned int rgb;      \n} Color;\n\n#define X(NAME, ANSI, DESC, RGB) { #NAME, ANSI, DESC, RGB },\nColor colors[] = {\n    #include "color.def"\n};\n#undef X\n\n#define X(NAME, ANSI, DESC, RGB) printf("%s (%s) = %s\\n", #NAME, DESC, #RGB);\nvoid print_colors() {\n    // Bien entendu, on pourrait it\xe9rer sur la structure cr\xe9\xe9e mais c\'est une illustration\n    #include "color.def"\n}\n#undef X\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ce genre de macro est extr\xeamement utile. Je dois reconna\xeetre qu'on la retrouve rarement dans un code source, mais elle permet de modifier le fonctionnement du programme sans pour autant devoir modifier le code source. Fun fact, elle est souvent utilis\xe9e dans la cr\xe9ation de kernels. Elle permet de g\xe9n\xe9rer les structures globales comme l'IDT et la GDT."}),"\n",(0,s.jsx)(n.h2,{id:"les-probl\xe8mes",children:"Les probl\xe8mes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.strong,{children:"Attention"})})," : Petite mise au point d'abord, les macros sont des outils formidables mais il faut faire attention. Vous ne devez surtout pas utiliser ce genre de macro :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define MIN(a,b) (a < b ? a : b)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Prenons un exemple : ",(0,s.jsx)(n.code,{children:"MIN(2 + 5, fibo(25))"})]}),"\n",(0,s.jsx)(n.h3,{id:"probl\xe8me-n1",children:"Probl\xe8me n\xb01"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MIN(2 + 5, fibo(25))"})," => ",(0,s.jsx)(n.code,{children:"(2 + 5 < fibo(25) ? 2 + 5 : fibo(25))"})]}),"\n",(0,s.jsx)(n.p,{children:"Ici le probl\xe8me est la priorit\xe9 de calcul. Le compilateur va d'abord effectuer la comparaison puis l'addition, donc 2 + (1). On corrige cela par l'ajout de parenth\xe8ses en utilisant les arguments des macros."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define MIN(a,b) ((a) < (b) ? (a) : (b))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Comme vous ne savez jamais ce que vos utilisateurs vont passer en param\xe8tre, mettez toujours des parenth\xe8ses sur les arguments."}),"\n",(0,s.jsx)(n.h3,{id:"probl\xe8me-n2",children:"Probl\xe8me n\xb02"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MIN(2 + 5, fibo(25))"})," => ",(0,s.jsx)(n.code,{children:"(2 + 5 < fibo(25) ? 2 + 5 : fibo(25))"})]}),"\n",(0,s.jsxs)(n.p,{children:["On remarque que le compilateur fait un remplacement b\xeate et m\xe9chant, ce qui veut dire que l'on va calculer deux fois ",(0,s.jsx)(n.code,{children:"fibo(25)"}),". Je vous laisse imaginer si c'est une impl\xe9mentation r\xe9cursive."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour fixer ce probl\xe8me, nous d\xe9clarons une variable interm\xe9diaire avant le ",(0,s.jsx)(n.code,{children:"if"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"macros-utiles",children:"Macros utiles"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define MIN(a, b)                                                              \\\n    ({                                                                         \\\n        __typeof__(a) _a = a;                                                  \\\n        __typeof__(b) _b = b;                                                  \\\n        (_a) > (_b) ? (_b) : (_a);                                             \\\n    })\n\n#define ABS(a)                                                                 \\\n    ({                                                                         \\\n        __typeof__(a) _a = a;                                                  \\\n        0 < (_a) ? (_a) : -(_a);                                               \\\n    })\n\n#define MAX(a, b)                                                              \\\n    ({                                                                         \\\n        __typeof__(a) _a = a;                                                  \\\n        __typeof__(b) _b = b;                                                  \\\n        (_a) < (_b) ? (_b) : (_a);                                             \\\n    })\n\n#define CLAMP(a, x, b) MAX(a, MIN(x, b))\n// Pour les tableaux uniquement\n#define COUNT_OF(arr) sizeof(arr) / sizeof(arr[0])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"l\xe0-on-samuse",children:"L\xe0, on s'amuse"}),"\n",(0,s.jsx)(n.p,{children:"Ici, c'est du code purement overkill juste pour le fun. Je ne vous conseille pas forc\xe9ment d'utiliser ces macros dans votre code.\nJe me fais juste plaisir (faut bien dans la vie)."}),"\n",(0,s.jsx)(n.h3,{id:"un-auto-free",children:"Un auto free"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define DEFER(free_call) __attribute__((cleanup(free_call)))\n\nvoid auto_free(void *ptr) {\n    void **p = (void **)ptr;\n    if (*p) {\n        free(*p);\n        *p = NULL;\n    }\n}\n\nint main() {\n  DEFER(auto_free) char* buffer = malloc(10);\n  return 0;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Je vous laisse tester avec un petit ",(0,s.jsx)(n.code,{children:"-fsanitize=address"}),". C'est vraiment une dinguerie. On pourrait m\xeame voir une am\xe9lioration de la fonction auto_free qui prend en param\xe8tre une cha\xeene de caract\xe8res du nom de notre structure pour faire un switch."]}),"\n",(0,s.jsx)(n.h3,{id:"get-time",children:"Get time"}),"\n",(0,s.jsx)(n.p,{children:"Fonction plus chill o\xf9 l'on calcule juste le temps d'ex\xe9cution de notre fonction. Tr\xe8s utile pour faire du benchmark."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define MEASURE_TIME(block) {                                \\\n    clock_t start_time = clock();                            \\\n    block                                                    \\\n    clock_t end_time = clock();                              \\\n    double elapsed = ((double)(end_time - start_time)) / CLOCKS_PER_SEC * 1000.0; \\\n    printf("Execution time: %.3f ms\\n", elapsed);            \\\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"define-error",children:"Define Error"}),"\n",(0,s.jsx)(n.p,{children:"Petite X-macro qui prend une macro en argument et qui l'expand."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define ERROR_LIST(X)          \\\n    X(ERROR_FILE_NOT_FOUND, "File not found")    \\\n    X(ERROR_INVALID_INPUT, "Invalid input")      \\\n    X(ERROR_OUT_OF_MEMORY, "Out of memory")      \\\n    X(ERROR_UNKNOWN, "Unknown error")\n\n#define DEFINE_ERROR_ENUM(code, message) code,\nenum ErrorCode {\n    ERROR_LIST(DEFINE_ERROR_ENUM)\n};\n\n#define DEFINE_ERROR_STRING(code, message) case code: return message;\nconst char* get_error_message(enum ErrorCode error_code) {\n    switch (error_code) {\n        ERROR_LIST(DEFINE_ERROR_STRING)\n        default: return "Unrecognized error";\n    }\n}\n\n/* ... */\nenum ErrorCode error = ERROR_OUT_OF_MEMORY;\nprintf("Error: %s\\n", get_error_message(error));\n'})}),"\n",(0,s.jsx)(n.h3,{id:"g\xe9n\xe9ration-de-tests-automatis\xe9s",children:"G\xe9n\xe9ration de tests automatis\xe9s"}),"\n",(0,s.jsxs)(n.p,{children:["Ici, on g\xe9n\xe8re carr\xe9ment des fonctions enti\xe8res avec une macro, parce que le C n'a aucune limite. Moi aussi ","\ud83d\udc40"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define GENERATE_TEST_FUNC(func, test_value, wanted_value) \\\n    void test_##func(void) { \\\n        printf("Test de " #func " avec valeur %d : ", test_value); \\\n        if (func(test_value)) { \\\n            printf("Succ\xe8s\\n"); \\\n        } else { \\\n            printf("\xc9chec\\n"); \\\n        } \\\n    }\n\n/* ... */\nGENERATE_TEST_FUNC(fibo, 10, 55);\n\ntest_fibo();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"rtfm",children:"RTFM"}),"\n",(0,s.jsxs)(n.p,{children:["Il est maintenant l'heure de conclure. Nous avons vu plein de choses tr\xe8s cool. Et si jamais vous \xeates tent\xe9s, libre \xe0 vous de d\xe9couvrir les macros par vous-m\xeame.\nDonc, conclusion : ",(0,s.jsx)(n.strong,{children:"RTFM"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"PS : Pour ce qui est du titre, les macros ne sont pas r\xe9cursives, elles ne s'expandent qu'avec une profondeur de 1."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(6540);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}},6292:e=>{e.exports=JSON.parse('{"permalink":"/define-inc-a-inc-a+1","editUrl":"https://github.com/MrVyM/blog/2024-08-17-Define-INC-a/index.md","source":"@site/blog/2024-08-17-Define-INC-a/index.md","title":"#define INC(a) INC(a+1)","description":"Le but de cet article est de vous faire d\xe9couvrir le magnifique univers des macros en C.","date":"2024-08-17T00:00:00.000Z","tags":[{"inline":true,"label":"define","permalink":"/tags/define"},{"inline":false,"label":"C Language","permalink":"/tags/c","description":"The most wonderful language"},{"inline":true,"label":"macro","permalink":"/tags/macro"}],"hasTruncateMarker":true,"authors":[{"name":"Vianney Marticou","title":"Mr.VyM @ EPITA","url":"https://github.com/mrvym","page":{"permalink":"/authors/mrvym"},"socials":{"github":"https://github.com/mrvym"},"imageURL":"https://github.com/mrvym.png","key":"mrvym"}],"frontMatter":{"slug":"define-inc-a-inc-a+1","title":"#define INC(a) INC(a+1)","tags":["define","C","macro"],"hide_title":false,"authors":["mrvym"]},"unlisted":false,"prevItem":{"title":"Disque dur : SAS, SATA, SCSI ou IDE ?","permalink":"/disque-dur-sas-sata-scsi-ide"},"nextItem":{"title":"Le Merveilleux Monde de Make","permalink":"/le-merveilleux-monde-de-make"}}')}}]);