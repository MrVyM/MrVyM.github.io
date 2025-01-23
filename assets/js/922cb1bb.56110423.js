"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8804],{5545:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var s=r(9003),t=r(4848),i=r(8453);const o={slug:"intro-terraform-proxmox",title:"Introduction \xe0 Terraform avec Proxmox",tags:["terraform","proxmox","devops","hcl","BPG"],authors:["mrvym"],hide_title:!1,date:new Date("2024-12-02T00:00:00.000Z")},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Organisation et Structure d&#39;un Projet Terraform",id:"organisation-et-structure-dun-projet-terraform",level:2},{value:"Petit point Vocabulaire",id:"petit-point-vocabulaire",level:3},{value:"Choisir et Configurer un Provider Proxmox",id:"choisir-et-configurer-un-provider-proxmox",level:2},{value:"Les Variables dans Terraform",id:"les-variables-dans-terraform",level:2},{value:"Les Images et les Templates",id:"les-images-et-les-templates",level:2},{value:"On cr\xe9e un R\xe9seau Virtuel",id:"on-cr\xe9e-un-r\xe9seau-virtuel",level:2},{value:"Votre premier Container",id:"votre-premier-container",level:2},{value:"Et maintenant une VM",id:"et-maintenant-une-vm",level:2},{value:"On check et ca part en Prod",id:"on-check-et-ca-part-en-prod",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Le but de Terraform est de d\xe9ployer une infrastructure ou une entit\xe9 de mani\xe8re ",(0,t.jsx)(n.strong,{children:"idempotente"}),". Cela signifie que l\u2019on doit pouvoir relancer le script 100 fois et obtenir le m\xeame r\xe9sultat \xe0 chaque ex\xe9cution.",(0,t.jsx)(n.br,{}),"\n","Pour cela, nous utilisons un ",(0,t.jsx)(n.strong,{children:"provider"}),", qui est essentiellement une biblioth\xe8que permettant de se connecter \xe0 notre serveur."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ce cas pratique, nous allons utiliser ",(0,t.jsx)(n.strong,{children:"Proxmox"})," et ",(0,t.jsx)(n.strong,{children:"BPG"}),". Il existe deux principaux providers pour Proxmox :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://registry.terraform.io/providers/Telmate/proxmox/latest/docs",children:"Telmate"})}),(0,t.jsx)(n.br,{}),"\n","C\u2019est une biblioth\xe8que qui permet de d\xe9ployer tr\xe8s simplement des VMs et des LXCs.",(0,t.jsx)(n.br,{}),"\n","Inconv\xe9nient : elle n\u2019impl\xe9mente pas de fonctionnalit\xe9s avanc\xe9es. Cependant, elle est fr\xe9quemment mise \xe0 jour."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://registry.terraform.io/providers/bpg/proxmox/latest/docs",children:"Bpg"})}),(0,t.jsx)(n.br,{}),"\n","Cette biblioth\xe8que est l\xe9g\xe8rement plus complexe \xe0 prendre en main, mais elle est bien plus puissante."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"organisation-et-structure-dun-projet-terraform",children:"Organisation et Structure d'un Projet Terraform"}),"\n",(0,t.jsx)(n.p,{children:"Afin que vous puissiez mieux comprendre le projet, voici son architecture\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"\u251c\u2500\u2500 main.tf\n\u251c\u2500\u2500 provider.tf\n\u251c\u2500\u2500 variable.tf\n\u2514\u2500\u2500 terraform.auto.tfvars\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez ajouter ou segmenter le projet en autant de fichiers ",(0,t.jsx)(n.code,{children:".tf"})," que n\xe9cessaire. Par exemple, nous aurions pu avoir un fichier pour les VMs et un autre pour les LXCs."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Les fichiers se terminant par ",(0,t.jsx)(n.code,{children:".tfvars"})," servent \xe0 d\xe9finir des variables. Lorsqu\u2019ils commencent par ",(0,t.jsx)(n.code,{children:"auto"}),", ils sont automatiquement charg\xe9s par Terraform."]}),"\n",(0,t.jsxs)(n.li,{children:["Le fichier ",(0,t.jsx)(n.code,{children:"variable.tf"})," permet de cr\xe9er des variables sans les instancier."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"petit-point-vocabulaire",children:"Petit point Vocabulaire"}),"\n",(0,t.jsx)(n.p,{children:"Dans cette article, nous allons utiliser le terme de LXC et de VM. Je vais faire un petit point dessus."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"LXC"})})," ou ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"LinuX Container"})})," : ce sont des environnements virtualis\xe9s qui tourne sur le ",(0,t.jsx)(n.code,{children:"kernel"})," de l'h\xf4te mais qui ne peuvent pas discuter ensemble. Cela permet de segmenter nos services sans trop perde en performance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"VM"})})," ou ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Virtual Machine"})})," : comme son nom l'indique, on simule l'int\xe9gralit\xe9 d'une machine. On perd en performance mais on gagne en s\xe9curit\xe9 et en fonctionnalit\xe9 car un LXC n'a pas tout les privil\xe8ges."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"choisir-et-configurer-un-provider-proxmox",children:"Choisir et Configurer un Provider Proxmox"}),"\n",(0,t.jsxs)(n.p,{children:["Avant tout, nous devons installer le ",(0,t.jsx)(n.strong,{children:"provider"})," (la biblioth\xe8que). Bien entendu, nous fixons une version minimale :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'terraform {\n  required_providers {\n    proxmox = {\n      source  = "bpg/proxmox"\n      version = ">= 0.3.0"\n    }\n  }\n  required_version = ">= 0.14"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'Une fois la biblioth\xe8que ajout\xe9e, nous d\xe9clarons un provider nomm\xe9 "proxmox", en fournissant les informations n\xe9cessaires :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'provider "proxmox" {\n  endpoint = "https://${var.proxmox_endpoint}:8006"\n  api_token = var.api_token_secret\n\n  insecure = true # car un certificat TLS auto-sign\xe9 est utilis\xe9\n  ssh {\n    agent = true\n    username = terraform\n  }\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"les-variables-dans-terraform",children:"Les Variables dans Terraform"}),"\n",(0,t.jsxs)(n.p,{children:["Si vous \xeates attentif, vous avez remarqu\xe9 que nous utilisons l\u2019objet ",(0,t.jsx)(n.code,{children:"var.api_token_secret"})," dans le bloc du provider. Cette cha\xeene de caract\xe8res est d\xe9finie dans le fichier ",(0,t.jsx)(n.code,{children:"terraform.auto.tfvars"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\xc0 la mani\xe8re d\u2019un fichier ",(0,t.jsx)(n.code,{children:".env"}),", ce fichier contient des valeurs sensibles et ",(0,t.jsx)(n.strong,{children:"ne doit pas \xeatre pouss\xe9 sur le d\xe9p\xf4t git"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'# terraform.auto.tfvars\napi_token_secret = "terraform-prov@pve!terraform=TOKEN"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Dans le fichier ",(0,t.jsx)(n.code,{children:"variable.tf"}),", nous d\xe9finissons les variables et leur type.",(0,t.jsx)(n.br,{}),"\n","Voici les principaux types disponibles :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"number"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"string"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"list()"})," (ex. : ",(0,t.jsx)(n.code,{children:"list(string)"}),")"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"object"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"map"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Exemple\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'# variable.tf\n\nvariable "api_token_secret" {\n  description = "Secret token to connect Proxmox API"\n  type        = string\n}\n\nvariable "proxmox_endpoint" {\n  description = "The domain name of the Proxmox instance"\n  type        = string\n  default     = "proxmox.mysite.fr"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"les-images-et-les-templates",children:"Les Images et les Templates"}),"\n",(0,t.jsxs)(n.p,{children:["Pour d\xe9marrer nos entit\xe9s, nous devons leur fournir un syst\xe8me d\u2019exploitation.",(0,t.jsx)(n.br,{}),"\n","Nous t\xe9l\xe9chargeons automatiquement un fichier de template pour le LXC et un ISO avec ",(0,t.jsx)(n.strong,{children:"cloud-init"})," pour la VM."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Si vous ne connaissez pas ",(0,t.jsx)(n.strong,{children:"cloud-init"}),", c\u2019est une m\xe9thode permettant d\u2019instancier des machines sans passer par l\u2019installateur de l\u2019OS."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'resource "proxmox_virtual_environment_download_file" "ubuntu_22-04_lxc" {\n  content_type = "vztmpl"\n  datastore_id = "local"\n  node_name    = var.target_node\n  url          = "http://download.proxmox.com/images/system/ubuntu-22.04-standard_22.04-1_amd64.tar.zst"\n}\n\nresource "proxmox_virtual_environment_download_file" "ubuntu_22-04_img" {\n  content_type = "iso"\n  datastore_id = "local"\n  node_name    = var.target_node\n  url          = "https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-amd64.img"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"on-cr\xe9e-un-r\xe9seau-virtuel",children:"On cr\xe9e un R\xe9seau Virtuel"}),"\n",(0,t.jsx)(n.p,{children:"Si nous avons envie que nos ressources discutent entre elles, il nous faut un r\xe9seau."}),"\n",(0,t.jsxs)(n.p,{children:["Pour cr\xe9er un adaptateur virtuel, il suffit d\u2019appeler la ressource ",(0,t.jsx)(n.code,{children:"proxmox_virtual_environment_network_linux_bridge"})," et de lui donner un nom :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'resource "proxmox_virtual_environment_network_linux_bridge" "internal_network" {\n  node_name = var.target_node\n  name      = "vmbr5"\n  comment   = "Internal Network"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"votre-premier-container",children:"Votre premier Container"}),"\n",(0,t.jsxs)(n.p,{children:["Passons aux choses concr\xe8tes en instanciant un ",(0,t.jsx)(n.strong,{children:"LXC"}),". Pour cela, nous cr\xe9ons une ressource ",(0,t.jsx)(n.code,{children:"proxmox_virtual_environment_container"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Avec l\u2019IaC, tout peut \xeatre configur\xe9 : le disque, la RAM, le serveur DNS, etc."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'resource "proxmox_virtual_environment_container" "first_lxc" {\n  description   = "Managed by Terraform - Mr.VyM"\n  node_name     = var.target_node\n  start_on_boot = true\n  started       = true\n\n  vm_id = 101\n\n  cpu {\n    architecture = "amd64"\n    cores        = var.core_nb\n  }\n\n  disk {\n    datastore_id = "storage"\n    size         = var.disk_size\n  }\n\n  memory {\n    dedicated = var.memory_size\n    swap      = 0\n  }\n\n  operating_system {\n    template_file_id = proxmox_virtual_environment_download_file.ubuntu_22-04_lxc.id\n    type             = "ubuntu"\n  }\n\n  initialization {\n    hostname = "mycontainer"\n\n    dns {\n      servers = ["1.1.1.1", "1.0.0.1"]\n    }\n\n    ip_config {\n      ipv4 {\n        address = "192.168.10.2/24"\n        gateway = "192.168.10.1"\n      }\n    }\n\n    user_account {\n      keys     = ["keys 1", "keys 2"]\n      password = var.lxc_password\n    }\n  }\n\n  network_interface {\n    bridge = proxmox_virtual_environment_network_linux_bridge.internal_network.name\n    name   = "eth0"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"et-maintenant-une-vm",children:"Et maintenant une VM"}),"\n",(0,t.jsx)(n.p,{children:"Cr\xe9er une VM suit le m\xeame pattern que pour un LXC, avec quelques diff\xe9rences :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'resource "proxmox_virtual_environment_vm" "vm_template" {\n  description = "Managed by Terraform - Mr.VyM"\n  node_name   = var.target_node\n\n  name        = "MyDummyVM"\n  vm_id       = 102\n\n  cpu {\n    cores = var.core_nb\n    type  = "x86-64-v2-AES"  # recommand\xe9 pour les CPU modernes\n  }\n\n  memory {\n    dedicated = var.memory_size\n    floating  = var.memory_size # active le ballooning\n  }\n\n  disk {\n    datastore_id = "local"\n    file_id      = proxmox_virtual_environment_download_file.ubuntu_22-04_img.id\n    interface    = "scsi0"\n    size         = var.disk_size\n  }\n\n  initialization {\n    ip_config {\n      ipv4 {\n        address = "${var.base_subnet}.3/24"\n        gateway = "${var.base_subnet}.1"\n      }\n    }\n\n    user_account {\n      keys     = ["keys 1", "keys 2"]\n      password = var.vm_password \n      username = "mrvym"\n    }\n\n    datastore_id = "local"\n  }\n\n  network_device {\n    bridge = proxmox_virtual_environment_network_linux_bridge.internal_network.name\n  }\n\n  operating_system {\n    type = "l26" # Linux Kernel\n  }\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"on-check-et-ca-part-en-prod",children:"On check et ca part en Prod"}),"\n",(0,t.jsx)(n.p,{children:"Enfin, nous d\xe9ployons le tout avec les commandes suivantes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"terraform init"})}),(0,t.jsx)(n.br,{}),"\n","Initialise Terraform, t\xe9l\xe9charge les providers et cr\xe9e les fichiers ",(0,t.jsx)(n.code,{children:"terraform.state"})," et ",(0,t.jsx)(n.code,{children:"terraform.lock"}),". Ces fichiers stockent l\u2019\xe9tat des entit\xe9s sur le serveur.",(0,t.jsx)(n.br,{}),"\n","Si ces fichiers sont absents, Terraform recr\xe9e les ressources, ce qui pourrait entra\xeener leur suppression et recr\xe9ation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"terraform fmt"})}),(0,t.jsx)(n.br,{}),"\n","Formate le code pour garantir sa propret\xe9."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"terraform plan"})}),(0,t.jsx)(n.br,{}),"\n","V\xe9rifie les actions que Terraform s\u2019appr\xeate \xe0 ex\xe9cuter."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"terraform apply"})}),(0,t.jsx)(n.br,{}),"\n","Applique les modifications."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ecrit pour l'",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Avent of Tech"})})," de la ",(0,t.jsx)(n.a,{href:"https://dev.to/ject",children:"JECT"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},9003:e=>{e.exports=JSON.parse('{"permalink":"/intro-terraform-proxmox","editUrl":"https://github.com/MrVyM/blog/2024-12-02-intro-terraform-proxmox.md","source":"@site/blog/2024-12-02-intro-terraform-proxmox.md","title":"Introduction \xe0 Terraform avec Proxmox","description":"Le but de Terraform est de d\xe9ployer une infrastructure ou une entit\xe9 de mani\xe8re idempotente. Cela signifie que l\u2019on doit pouvoir relancer le script 100 fois et obtenir le m\xeame r\xe9sultat \xe0 chaque ex\xe9cution.","date":"2024-12-02T00:00:00.000Z","tags":[{"inline":true,"label":"terraform","permalink":"/tags/terraform"},{"inline":true,"label":"proxmox","permalink":"/tags/proxmox"},{"inline":false,"label":"devops","permalink":"/tags/devops","description":"DevOps - Tools"},{"inline":true,"label":"hcl","permalink":"/tags/hcl"},{"inline":true,"label":"BPG","permalink":"/tags/bpg"}],"hasTruncateMarker":true,"authors":[{"name":"Vianney Marticou","title":"Mr.VyM @ EPITA","url":"https://github.com/mrvym","page":{"permalink":"/authors/mrvym"},"socials":{"github":"https://github.com/mrvym"},"imageURL":"https://github.com/mrvym.png","key":"mrvym"}],"frontMatter":{"slug":"intro-terraform-proxmox","title":"Introduction \xe0 Terraform avec Proxmox","tags":["terraform","proxmox","devops","hcl","BPG"],"authors":["mrvym"],"hide_title":false,"date":"2024-12-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Tester c\'est tricher, compiler c\'est douter","permalink":"/tester-cest-tricher-compiler-c-est-douter"},"nextItem":{"title":"Disque dur : SAS, SATA, SCSI ou IDE ?","permalink":"/disque-dur-sas-sata-scsi-ide"}}')}}]);