import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as a}from"./index-Dl6G-zuu.js";import{N as q,L}from"./chunk-K6AXKMTT-B5GX6HSq.js";import{l as W,q as U}from"./useFiles-Dp-qtbfr.js";import"./VerificationSubmission-BmZsZ0JS.js";import{v as k}from"./StringUtils-DFpF2_59.js";import"./OrientationBanner-C7CmOmBW.js";import{d as w}from"./ToastMessage-Cdc-RPF1.js";import{u as D}from"./useChangePasswordFormState-DSiDgw5g.js";import{A as f}from"./Alert-Dcz6JZ5x.js";import{T as n}from"./TextField-BDNZH-7j.js";import{B as G}from"./Button-jaxqGIs_.js";import{L as I}from"./Link-CFsiiapl.js";const g="Your password was successfully changed.";function h(u){const{redirectToRoute:l,hideReset2FA:P=!1}=u,[d,x]=a.useState(""),[o,C]=a.useState(""),[y,v]=a.useState(void 0),[i,S]=a.useState(""),[t,m]=a.useState(""),{accessToken:j}=W(),c=!!j,{data:r,isLoading:N}=U({enabled:c});a.useEffect(()=>{r&&t==""&&m(r.userName)},[t,r,r==null?void 0:r.userName]);const{promptForTwoFactorAuth:T,TwoFactorAuthPrompt:A,successfullyChangedPassword:_,isPending:b,handleChangePasswordWithCurrentPassword:E,error:p}=D({hideReset2FA:P}),F=s=>{s.preventDefault(),o!==i?w("Passwords do not match.","danger"):E(t,d,o)};return _?l?(w(g,"success"),e.jsx(q,{to:l})):e.jsx(f,{severity:"success",children:g}):e.jsxs("div",{children:[T?e.jsx(A,{}):e.jsxs("form",{onSubmit:s=>{F(s)},children:[!c&&e.jsx(n,{required:!0,fullWidth:!0,autoFocus:!0,autoComplete:"username",label:"Username or Email Address",id:"username",type:"text",value:t,onChange:s=>m(s.target.value)}),e.jsx(n,{fullWidth:!0,required:!0,margin:"normal",type:"password",id:"currentPassword",label:"Current password",onChange:s=>x(s.target.value),value:d}),e.jsx(n,{fullWidth:!0,required:!0,helperText:y,margin:"normal",type:"password",id:"newPassword",label:"New password",onChange:s=>{const R=k(s.target.value);v(R),C(s.target.value)},value:o}),e.jsx(n,{fullWidth:!0,required:!0,margin:"normal",type:"password",id:"confirmPassword",label:"Confirm password",onChange:s=>S(s.target.value),value:i}),e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx(G,{sx:{marginRight:"26px"},disabled:!d||!o||!i||!t||N||b,variant:"contained",type:"submit",children:"Change Password"}),e.jsx(I,{component:L,to:"/resetPassword",sx:{display:"block",marginTop:"1em",marginLeft:"5px"},children:"Forgot password?"})]})]}),p&&e.jsx(f,{severity:"error",sx:{my:2},children:p.reason})]})}try{h.displayName="ChangePassword",h.__docgenInfo={description:"",displayName:"ChangePassword",props:{redirectToRoute:{defaultValue:null,description:"",name:"redirectToRoute",required:!1,type:{name:"string"}},hideReset2FA:{defaultValue:null,description:"",name:"hideReset2FA",required:!1,type:{name:"boolean"}}}}}catch{}export{h as C};
