"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5051],{8603:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var o=t(9003),n=t(4848),s=t(8453);const i={slug:"intro-terraform-proxmox",title:"Introduction \xe0 Terraform avec Proxmox",tags:["terraform","proxmox","devops","hcl","BPG"],authors:["mrvym"],hide_title:!1,date:new Date("2024-12-02T00:00:00.000Z")},l=void 0,a={authorsImageUrls:[void 0]},m=[];function u(e){const r={a:"a",br:"br",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Le but de Terraform est de d\xe9ployer une infrastructure ou une entit\xe9 de mani\xe8re ",(0,n.jsx)(r.strong,{children:"idempotente"}),". Cela signifie que l\u2019on doit pouvoir relancer le script 100 fois et obtenir le m\xeame r\xe9sultat \xe0 chaque ex\xe9cution.",(0,n.jsx)(r.br,{}),"\n","Pour cela, nous utilisons un ",(0,n.jsx)(r.strong,{children:"provider"}),", qui est essentiellement une biblioth\xe8que permettant de se connecter \xe0 notre serveur."]}),"\n",(0,n.jsxs)(r.p,{children:["Dans ce cas pratique, nous allons utiliser ",(0,n.jsx)(r.strong,{children:"Proxmox"})," et ",(0,n.jsx)(r.strong,{children:"BPG"}),". Il existe deux principaux providers pour Proxmox :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://registry.terraform.io/providers/Telmate/proxmox/latest/docs",children:"Telmate"})}),(0,n.jsx)(r.br,{}),"\n","C\u2019est une biblioth\xe8que qui permet de d\xe9ployer tr\xe8s simplement des VMs et des LXCs.",(0,n.jsx)(r.br,{}),"\n","Inconv\xe9nient : elle n\u2019impl\xe9mente pas de fonctionnalit\xe9s avanc\xe9es. Cependant, elle est fr\xe9quemment mise \xe0 jour."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://registry.terraform.io/providers/bpg/proxmox/latest/docs",children:"Bpg"})}),(0,n.jsx)(r.br,{}),"\n","Cette biblioth\xe8que est l\xe9g\xe8rement plus complexe \xe0 prendre en main, mais elle est bien plus puissante."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var o=t(6540);const n={},s=o.createContext(n);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:r},e.children)}},9003:e=>{e.exports=JSON.parse('{"permalink":"/blog/intro-terraform-proxmox","editUrl":"https://blog.marticou.com/blog/blog/2024-12-02-intro-terraform-proxmox.md","source":"@site/blog/2024-12-02-intro-terraform-proxmox.md","title":"Introduction \xe0 Terraform avec Proxmox","description":"Le but de Terraform est de d\xe9ployer une infrastructure ou une entit\xe9 de mani\xe8re idempotente. Cela signifie que l\u2019on doit pouvoir relancer le script 100 fois et obtenir le m\xeame r\xe9sultat \xe0 chaque ex\xe9cution.","date":"2024-12-02T00:00:00.000Z","tags":[{"inline":true,"label":"terraform","permalink":"/blog/tags/terraform"},{"inline":true,"label":"proxmox","permalink":"/blog/tags/proxmox"},{"inline":false,"label":"devops","permalink":"/blog/tags/devops","description":"DevOps - Tools"},{"inline":true,"label":"hcl","permalink":"/blog/tags/hcl"},{"inline":true,"label":"BPG","permalink":"/blog/tags/bpg"}],"readingTime":3.5366666666666666,"hasTruncateMarker":true,"authors":[{"name":"Vianney Marticou","title":"Mr.VyM @ EPITA","url":"https://github.com/mrvym","page":{"permalink":"/blog/authors/mrvym"},"socials":{"github":"https://github.com/mrvym"},"imageURL":"https://github.com/mrvym.png","key":"mrvym"}],"frontMatter":{"slug":"intro-terraform-proxmox","title":"Introduction \xe0 Terraform avec Proxmox","tags":["terraform","proxmox","devops","hcl","BPG"],"authors":["mrvym"],"hide_title":false,"date":"2024-12-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Tester c\'est tricher, compiler c\'est douter","permalink":"/blog/tester-cest-tricher"},"nextItem":{"title":"Disque dur : SAS, SATA, SCSI ou IDE ?","permalink":"/blog/sas-or-not-sas"}}')}}]);