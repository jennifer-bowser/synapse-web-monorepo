import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{r as P}from"./index-Dl6G-zuu.js";import{u as _}from"./useQuery-6SsvXKRa.js";import{u as p}from"./utils-Bx1BRerw.js";import{u as g}from"./useMutation-DjwfMZ6R.js";import{u as U}from"./useInfiniteQuery-DbpUtHH4.js";import{l as c,S as d}from"./useFiles-Dp-qtbfr.js";import"./VerificationSubmission-BmZsZ0JS.js";import"./StringUtils-DFpF2_59.js";import"./OrientationBanner-C7CmOmBW.js";import{g as V}from"./InfiniteQueryUtils-CKlRW-xB.js";import{c as B,d as A,e as N}from"./useThread-BXa2u57r.js";import{C as b,x as G}from"./ConfirmationDialog-Dge8deeo.js";import{M as W}from"./MarkdownEditor-_kr02POh.js";import{B as z}from"./Box-DN73Q90z.js";import{T as H}from"./TextField-BDNZH-7j.js";function me(e,s,r,a,t,n){const{accessToken:i,keyFactory:m}=c();return U({...n,queryKey:m.getRepliesQueryKey(e,s,r,a,t),queryFn:async l=>d.getReplies(i,e,r,l.pageParam,a,s,t),initialPageParam:void 0,getNextPageParam:V})}function ye(e,s){const{accessToken:r,keyFactory:a}=c(),t=async()=>{const n=await d.getReplyMessageUrl(e.messageKey,r);return(await fetch(n.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return _({...s,queryKey:a.getReplyQueryKey(e.threadId,e.id,e.messageKey),queryFn:t})}function J(e){const s=p(),{accessToken:r,keyFactory:a}=c();return g({...e,mutationFn:t=>d.postReply(t,r),onSuccess:async(t,n,i)=>{await s.invalidateQueries({queryKey:a.getAllRepliesQueryKey(t.threadId)}),e!=null&&e.onSuccess&&await e.onSuccess(t,n,i)}})}function L(e){const s=p(),{accessToken:r,keyFactory:a}=c();return g({...e,mutationFn:t=>d.putReply(t,r),onSuccess:async(t,n,i)=>{await s.invalidateQueries({queryKey:a.getAllRepliesQueryKey(t.threadId)}),e!=null&&e.onSuccess&&await e.onSuccess(t,n,i)}})}function pe(e){const s=p(),{accessToken:r,keyFactory:a}=c();return g({...e,mutationFn:t=>d.deleteReply(r,t.replyId),onSuccess:async(t,n,i)=>{await s.invalidateQueries({queryKey:a.getAllRepliesQueryKey(n.threadId)}),e!=null&&e.onSuccess&&await e.onSuccess(t,n,i)}})}function C(e){const{initialText:s,initialTitle:r,id:a,onClose:t,isReply:n,isDialog:i,openDialog:m}=e,[l,S]=P.useState(r??""),[y,q]=P.useState(s??""),{mutate:F,isPending:I}=B({onSuccess:()=>t()}),{mutate:k,isPending:w}=A({onSuccess:()=>t()}),{mutate:K,isPending:j}=N({onSuccess:()=>t()}),{mutate:Q,isPending:v}=J({onSuccess:()=>t()}),{mutate:E,isPending:M}=L({onSuccess:()=>t()}),D=w||v||j||I||M,f=!n&&r,h=(u,R)=>{n?s?E({replyId:a,messageMarkdown:u}):Q({threadId:a,messageMarkdown:u}):f?(F({title:R,threadId:a}),k({messageMarkdown:u,threadId:a})):K({forumId:a,title:R,messageMarkdown:u})},T=o.jsxs("div",{children:[!n&&o.jsx(H,{fullWidth:!0,sx:{my:1},placeholder:"Title",value:l,onChange:u=>S(u.target.value)}),o.jsx(W,{text:y,setText:q})]}),x=D?"Saving":"Save";return o.jsx(o.Fragment,{children:i?o.jsx(b,{maxWidth:"md",open:m,onCancel:t,title:n?"Edit Reply":f?"Edit Thread":"New Thread",content:T,onConfirm:()=>h(y,l),confirmButtonProps:{children:x}}):o.jsxs(o.Fragment,{children:[T,o.jsx(z,{display:"flex",justifyContent:"flex-end",children:o.jsx(G,{onCancel:t,onConfirm:()=>h(y,l),confirmButtonProps:{children:x}})})]})})}try{C.displayName="ForumThreadEditor",C.__docgenInfo={description:"",displayName:"ForumThreadEditor",props:{initialTitle:{defaultValue:null,description:"",name:"initialTitle",required:!1,type:{name:"string"}},initialText:{defaultValue:null,description:"",name:"initialText",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}},isDialog:{defaultValue:null,description:"",name:"isDialog",required:!0,type:{name:"boolean"}},openDialog:{defaultValue:null,description:"",name:"openDialog",required:!1,type:{name:"boolean"}}}}}catch{}export{C as F,pe as a,me as b,ye as u};
