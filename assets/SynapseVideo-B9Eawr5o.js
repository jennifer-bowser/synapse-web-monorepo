import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as a}from"./index-Dl6G-zuu.js";import{l as I,m as v,n as x}from"./useFiles-Dp-qtbfr.js";import{F as w}from"./VerificationSubmission-BmZsZ0JS.js";import{S as F}from"./SynapseConstants-CXjze24f.js";import"./StringUtils-DFpF2_59.js";import"./OrientationBanner-C7CmOmBW.js";function g({params:e}){const{accessToken:i}=I(),[d,c]=a.useState(),[u,f]=a.useState(),o=e.width??"",r=e.height??"";return a.useEffect(()=>{const m=()=>{if(e.videoId)c(`https://www.youtube.com/embed/${e.videoId}`);else if(e.vimeoId)c(`https://player.vimeo.com/video/${e.vimeoId}`);else{const n=e.oggSynapseId||e.mp4SynapseId||e.webmSynapseId;v(i,n).then(s=>{const p=[{associateObjectId:n,associateObjectType:w.FileEntity,fileHandleId:s.dataFileHandleId}];y(p,s.dataFileHandleId)})}},y=(n,s)=>{x({includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:n},i).then(l=>{const{preSignedURL:h}=l.requestedFiles.filter(S=>S.fileHandleId===s)[0];f(h)}).catch(l=>{console.error("Error on getting video ",l)})};m()},[d,e,i,r,o]),u?i?t.jsx("video",{controls:!0,src:u,width:o,height:r,"data-testid":"synapse-video-url",children:"It does not support the HTML5 Video element."}):t.jsxs("p",{children:["You will need to",t.jsx("button",{"data-testid":"video-login",className:`${F} sign-in-btn default
                `,children:"Sign in"}),"in for access to that resource."]}):d?t.jsx("iframe",{title:"video frame",src:d,width:o,height:r}):t.jsx(t.Fragment,{})}try{g.displayName="SynapseVideo",g.__docgenInfo={description:"",displayName:"SynapseVideo",props:{params:{defaultValue:null,description:"",name:"params",required:!0,type:{name:"{ width?: string | undefined; height?: string | undefined; videoId?: string | undefined; vimeoId?: string | undefined; oggSynapseId?: string | undefined; mp4SynapseId?: string | undefined; webmSynapseId?: string | undefined; }"}}}}}catch{}export{g as S};
