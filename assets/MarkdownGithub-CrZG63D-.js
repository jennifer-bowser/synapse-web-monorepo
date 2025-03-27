import{j as d}from"./jsx-runtime-Du8NFWEI.js";import"./SkeletonButton-CxjqZPxz.js";import"./SkeletonInlineBlock-IuszcGGK.js";import"./SkeletonTable-CDz9K-62.js";import{S as v}from"./SkeletonParagraph-B0g80d2Y.js";import{M as _}from"./ConfirmationDialog-Dge8deeo.js";import{u as T}from"./useQuery-6SsvXKRa.js";import{l as M,ba as W,bb as $}from"./useFiles-Dp-qtbfr.js";import"./OrientationBanner-C7CmOmBW.js";import{r as N}from"./index-Dl6G-zuu.js";import"./VerificationSubmission-BmZsZ0JS.js";import"./StringUtils-DFpF2_59.js";import{a as j,c as S,s as L,u as P}from"./styled-CVek1lbE.js";import{b as m,y as R,f,_ as q,e as O,a as V}from"./createTheme-BAeQEIuu.js";import{s as I}from"./Stack-Cg5HdmvL.js";import{B as U}from"./Box-DN73Q90z.js";const E=["className","component","disableGutters","fixed","maxWidth","classes"],B=R(),F=I("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`maxWidth${f(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),H=t=>j({props:t,name:"MuiContainer",defaultTheme:B}),z=(t,e)=>{const r=u=>V(e,u),{classes:o,fixed:n,disableGutters:i,maxWidth:a}=t,s={root:["root",a&&`maxWidth${f(String(a))}`,n&&"fixed",i&&"disableGutters"]};return S(s,r,o)};function D(t={}){const{createStyledComponent:e=F,useThemeProps:r=H,componentName:o="MuiContainer"}=t,n=e(({theme:a,ownerState:s})=>m({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:a.spacing(2),paddingRight:a.spacing(2),[a.breakpoints.up("sm")]:{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}}),({theme:a,ownerState:s})=>s.fixed&&Object.keys(a.breakpoints.values).reduce((u,p)=>{const l=p,c=a.breakpoints.values[l];return c!==0&&(u[a.breakpoints.up(l)]={maxWidth:`${c}${a.breakpoints.unit}`}),u},{}),({theme:a,ownerState:s})=>m({},s.maxWidth==="xs"&&{[a.breakpoints.up("xs")]:{maxWidth:Math.max(a.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[a.breakpoints.up(s.maxWidth)]:{maxWidth:`${a.breakpoints.values[s.maxWidth]}${a.breakpoints.unit}`}}));return N.forwardRef(function(s,u){const p=r(s),{className:l,component:c="div",disableGutters:y=!1,fixed:k=!1,maxWidth:w="lg"}=p,G=q(p,E),h=m({},p,{component:c,disableGutters:y,fixed:k,maxWidth:w}),C=z(h,o);return d.jsx(n,m({as:c,ownerState:h,className:O(C.root,l),ref:u},G))})}const K=D({createStyledComponent:L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`maxWidth${f(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),useThemeProps:t=>P({props:t,name:"MuiContainer"})}),A="https://api.github.com/repos";function Q(t,e,r){const{keyFactory:o}=M(),n=async()=>{const i=await fetch(`${A}/${t}/${e}/tags`);if(!i.ok)throw new Error(`Error fetching tags: ${i.statusText}`);const a=await i.json();if(a.length===0)throw new Error("No tags found.");return a[0].name};return T({...r,queryKey:o.getGithubLatestTagKey(t,e),queryFn:n})}function g(t){const{data:e}=W(),r=e==null?void 0:e.latestTermsOfServiceVersion;return d.jsx(b,{...t,tagName:r})}function x(t){const{repoOwner:e,repoName:r}=t,{data:o}=Q(e,r);return d.jsx(b,{...t,tagName:o})}function b({repoOwner:t,repoName:e,filePath:r,tagName:o}){const{data:n}=$(`https://cdn.jsdelivr.net/gh/${t}/${e}@${o}/${r}`,{enabled:!!o}),i=d.jsx(U,{sx:{width:"100%"},children:d.jsx(v,{rowHeight:"30px",numRows:70})});return d.jsx(K,{sx:{"> .markdown":{px:"10px"}},children:n?d.jsx(_,{markdown:n}):i})}try{g.displayName="GovernanceMarkdownGithub",g.__docgenInfo={description:"Loads the version of the Governance Github Markdown file that the Synapse backend determines is the current version",displayName:"GovernanceMarkdownGithub",props:{repoOwner:{defaultValue:null,description:"",name:"repoOwner",required:!0,type:{name:"string"}},repoName:{defaultValue:null,description:"",name:"repoName",required:!0,type:{name:"string"}},filePath:{defaultValue:null,description:"",name:"filePath",required:!0,type:{name:"string"}}}}}catch{}try{x.displayName="MarkdownGithubLatestTag",x.__docgenInfo={description:"Loads the latest tagged version of the (presumably MD) file from GitHub",displayName:"MarkdownGithubLatestTag",props:{repoOwner:{defaultValue:null,description:"",name:"repoOwner",required:!0,type:{name:"string"}},repoName:{defaultValue:null,description:"",name:"repoName",required:!0,type:{name:"string"}},filePath:{defaultValue:null,description:"",name:"filePath",required:!0,type:{name:"string"}}}}}catch{}export{g as G,x as M};
