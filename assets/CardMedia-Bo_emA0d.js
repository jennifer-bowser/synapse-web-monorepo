import{a as M,g as f,b as c,_ as x,e as v}from"./createTheme-BAeQEIuu.js";import{r as b}from"./index-Dl6G-zuu.js";import{s as y,u as I,c as N}from"./styled-CVek1lbE.js";import{j as h}from"./jsx-runtime-Du8NFWEI.js";function E(e){return M("MuiCardMedia",e)}f("MuiCardMedia",["root","media","img"]);const O=["children","className","component","image","src","style"],R=e=>{const{classes:o,isMediaComponent:t,isImageComponent:s}=e;return N({root:["root",t&&"media",s&&"img"]},E,o)},_=y("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{isMediaComponent:s,isImageComponent:a}=t;return[o.root,s&&o.media,a&&o.img]}})(({ownerState:e})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),j=["video","audio","picture","iframe","img"],k=["picture","img"],T=b.forwardRef(function(o,t){const s=I({props:o,name:"MuiCardMedia"}),{children:a,className:p,component:i="div",image:r,src:l,style:d}=s,u=x(s,O),n=j.indexOf(i)!==-1,C=!n&&r?c({backgroundImage:`url("${r}")`},d):d,m=c({},s,{component:i,isMediaComponent:n,isImageComponent:k.indexOf(i)!==-1}),g=R(m);return h.jsx(_,c({className:v(g.root,p),as:i,role:!n&&r?"img":void 0,ref:t,style:C,ownerState:m,src:n?r||l:void 0},u,{children:a}))});export{T as C};
