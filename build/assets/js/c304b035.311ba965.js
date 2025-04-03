"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5335],{8317:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var t=l(1688),o=l(4848),s=l(8453);const i={unlisted:!0,date:new Date("2029-01-01T00:00:00.000Z"),title:"Sleep from Python to Electronics",description:"sleep",slug:"sleep-from-python-to-electronics",tags:["hardware","C","Python"],hide_title:!1},r="Sleep from Python to Electronics",c={authorsImageUrls:[]},a=[{value:"Python",id:"python",level:2},{value:"C",id:"c",level:2},{value:"Coreutils",id:"coreutils",level:2},{value:"ASM",id:"asm",level:2},{value:"Syscall SYS_Nanosleep",id:"syscall-sys_nanosleep",level:3},{value:"STM32",id:"stm32",level:2},{value:"Blocking",id:"blocking",level:3},{value:"No Blocking",id:"no-blocking",level:3},{value:"Elec",id:"elec",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"import time\n# Here the time is in seconds\ntime.sleep(2)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"c",children:"C"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"#include <unistd.h>\n\nint main(void) {\n  sleep(10);\n  return 0;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"coreutils",children:"Coreutils"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"sleep 2\n# or \nsleep inf\n"})}),"\n",(0,o.jsx)(n.h2,{id:"asm",children:"ASM"}),"\n",(0,o.jsx)(n.h3,{id:"syscall-sys_nanosleep",children:"Syscall SYS_Nanosleep"}),"\n",(0,o.jsx)(n.h2,{id:"stm32",children:"STM32"}),"\n",(0,o.jsx)(n.h3,{id:"blocking",children:"Blocking"}),"\n",(0,o.jsx)(n.p,{children:"HAL_Sleep(2)"}),"\n",(0,o.jsx)(n.h3,{id:"no-blocking",children:"No Blocking"}),"\n",(0,o.jsx)(n.p,{children:"while"}),"\n",(0,o.jsx)(n.h2,{id:"elec",children:"Elec"}),"\n",(0,o.jsx)(n.p,{children:"Goes bruh"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>r});var t=l(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},1688:e=>{e.exports=JSON.parse('{"permalink":"/sleep-from-python-to-electronics","editUrl":"https://github.com/MrVyM/MrVyM.github.io/issues/blog/SleepPythonToElec/SleepPythonToElec.md","source":"@site/blog/SleepPythonToElec/SleepPythonToElec.md","title":"Sleep from Python to Electronics","description":"sleep","date":"2029-01-01T00:00:00.000Z","tags":[{"inline":true,"label":"hardware","permalink":"/tags/hardware"},{"inline":false,"label":"C Language","permalink":"/tags/c","description":"The most wonderful language"},{"inline":true,"label":"Python","permalink":"/tags/python"}],"readingTime":0.29666666666666663,"hasTruncateMarker":true,"authors":[],"frontMatter":{"unlisted":true,"date":"2029-01-01T00:00:00.000Z","title":"Sleep from Python to Electronics","description":"sleep","slug":"sleep-from-python-to-electronics","tags":["hardware","C","Python"],"hide_title":false},"unlisted":true}')}}]);