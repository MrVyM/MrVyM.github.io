"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5425],{4694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>i});var n=r(5377),a=r(4848),u=r(8453);r(5537),r(9329);const s={title:"IDEA / TODO / SUBJECT",authors:["mrvym"],slug:"todo",date:new Date("1970-01-01T00:00:00.000Z"),unlisted:!0},l=void 0,o={authorsImageUrls:[void 0]},i=[];function c(e){const t={input:"input",li:"li",p:"p",ul:"ul",...(0,u.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Pour les curieux, en recherche d'un sujet d'exploration"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Fait"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","A faire"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,u.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9329:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var u=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},5537:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(6540),a=r(4164),u=r(5627),s=r(6347),l=r(372),o=r(604),i=r(1861),c=r(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(u),(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(a.location.search);t.set(u,e),a.replace({...a.location,search:t.toString()})}),[u,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,u=m(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[i,d]=h({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,u]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:a}),v=(()=>{const e=i??b;return p({value:e,tabValues:u})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,u]),tabValues:u}}var f=r(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,u.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(i(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:u}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...u,className:(0,a.A)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:u}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===u));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==u})))})}function T(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function k(e){const t=(0,f.A)();return(0,g.jsx)(T,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(6540);const a={},u=n.createContext(a);function s(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(u.Provider,{value:t},e.children)}},5377:e=>{e.exports=JSON.parse('{"permalink":"/todo","editUrl":"https://github.com/MrVyM/MrVyM.github.io/issues/blog/1970-01-01-TODO.mdx","source":"@site/blog/1970-01-01-TODO.mdx","title":"IDEA / TODO / SUBJECT","description":"Pour les curieux, en recherche d\'un sujet d\'exploration","date":"1970-01-01T00:00:00.000Z","tags":[],"readingTime":1.91,"hasTruncateMarker":true,"authors":[{"name":"Vianney Marticou","title":"Mr.VyM @ EPITA","url":"https://github.com/mrvym","page":{"permalink":"/authors/mrvym"},"socials":{"github":"https://github.com/mrvym"},"imageURL":"https://github.com/mrvym.png","key":"mrvym"}],"frontMatter":{"title":"IDEA / TODO / SUBJECT","authors":["mrvym"],"slug":"todo","date":"1970-01-01T00:00:00.000Z","unlisted":true},"unlisted":true}')}}]);