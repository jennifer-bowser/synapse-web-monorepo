import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{o as w,Q as _,J as E}from"./useFiles-Dp-qtbfr.js";import{g as I,h as g}from"./SynapseConstants-CXjze24f.js";import{r as M}from"./index-Dl6G-zuu.js";import"./VerificationSubmission-BmZsZ0JS.js";import"./StringUtils-DFpF2_59.js";import{u as S}from"./useShowDesktop-CPh-208G.js";import"./OrientationBanner-C7CmOmBW.js";import{M as y}from"./ConfirmationDialog-Dge8deeo.js";import{E as b}from"./ExpandableContent-DCPzPbqI.js";function l({data:s}){const[t,a]=M.useState(0);return e.jsxs("div",{className:"control-container",children:[e.jsxs("div",{className:"button-container",children:[s==null?void 0:s.map((o,r)=>e.jsx("button",{className:t===r?"isSelected":"",onClick:()=>a(r),children:o.name},o.name)),e.jsx("button",{className:"gap-fill"})]}),e.jsx("div",{className:"content-container",children:s==null?void 0:s.map((o,r)=>{const{ownerId:n,wikiId:i}=o;return e.jsx("span",{className:t===r?"":"hide",children:e.jsx(y,{ownerId:n,wikiId:i})},n)})})]})}try{l.displayName="ResourcesDesktop",l.__docgenInfo={description:"",displayName:"ResourcesDesktop",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}}}catch{}function u({data:s}){return e.jsx("div",{className:"Resources_Mobile",children:s.map(({name:t,ownerId:a,wikiId:o})=>{const r=e.jsxs(e.Fragment,{children:[" ",t," "]}),n=e.jsx(y,{ownerId:a,wikiId:o});return e.jsx(b,{title:r,content:n},t)})})}try{u.displayName="ResourcesMobile",u.__docgenInfo={description:"",displayName:"ResourcesMobile",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}}}catch{}function x(s){var p;const{entityId:t}=s,a=S(),o={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,partMask:I|g,query:{sql:`SELECT Name, Wiki FROM ${t} ORDER BY ItemOrder`}},{data:r,error:n}=w(o),i=_("Name",r),R=_("Wiki",r),d=((p=r==null?void 0:r.queryResult)==null?void 0:p.queryResults.rows.map(N=>{const c=N.values;c.some(k=>k===null)&&console.warn("Row has null value(s) when no nulls expected");const f=c[i],m=(c[R]??"").split("/"),h=m[0],j=m[2];return{name:f,ownerId:h,wikiId:j}}))??[];return e.jsxs("div",{className:"Resources",children:[e.jsx(E,{error:n}),a?e.jsx(l,{data:d}):e.jsx(u,{data:d})]})}try{x.displayName="Resources",x.__docgenInfo={description:"",displayName:"Resources",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{x as R};
