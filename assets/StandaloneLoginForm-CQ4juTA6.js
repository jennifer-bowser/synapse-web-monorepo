import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as G,S as j,bI as fe,aF as he}from"./useFiles-D-hdekB1.js";import{h as ae}from"./VerificationSubmission-BnFne12N.js";import"./StringUtils-CXT0ex8W.js";import{u as se}from"./useMutation-DjwfMZ6R.js";import{$ as ie,a0 as _e,N as Ee,Q as Re,L as Oe,a1 as ue}from"./SynapseConstants-dY7DQPl6.js";import{r as w,R as N}from"./index-Dl6G-zuu.js";import"./OrientationBanner-FCMHzA9o.js";import{b as Ae}from"./useTwoFactorEnrollment-8ux3QBSA.js";import{n as X}from"./noop-DX6rZLP_.js";import{I as ye}from"./IconSvg-DFjxuLWD.js";import{I as Te}from"./IconButton-B2vXFIju.js";import{F as we}from"./FullWidthAlert-CcMr282B.js";import{L as $}from"./LoginMethodButton-Cby1guGg.js";import{B as q}from"./Box-DN73Q90z.js";import{T as re}from"./TextField-2vWFn_hr.js";import{B as W}from"./Button-jaxqGIs_.js";import{s as Ie}from"./styled-CVek1lbE.js";import{T as Fe}from"./TextField-BDNZH-7j.js";import{L as M}from"./Link-CFsiiapl.js";import{T as K}from"./Typography-Cqa7rFgc.js";import{A as Se}from"./Alert-Dcz6JZ5x.js";const le=["VERIFICATION_CODE","RECOVERY_CODE","LOGGED_IN","DISABLE_2FA_PROMPT"];function Ce(t){const{sessionCallback:o=X,twoFaErrorResponse:u,onTwoFactorAuthRequired:s=X}=t,[c,r]=w.useState("CHOOSE_AUTH_METHOD"),[m,i]=w.useState(),[l,p]=w.useState(),A=G("/changePassword");w.useEffect(()=>{u&&p(u)},[u]),w.useEffect(()=>{const d=new URL(window.location.href),{searchParams:R}=d;if(R){const S=R.get("userId"),H=R.get("twoFaToken");S&&H&&(p({errorCode:ae.TWO_FA_REQUIRED,reason:"",userId:parseInt(S,10),twoFaToken:H,concreteType:"org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse"}),le.includes(c)||r("VERIFICATION_CODE"))}},[c]),w.useEffect(()=>{l&&(p(l),le.includes(c)||r("VERIFICATION_CODE"))},[l]),w.useEffect(()=>{l&&s(l)},[s,l]),w.useEffect(()=>{i(void 0)},[c]);async function f(d){await j.setAccessTokenCookie(d.accessToken),localStorage.setItem(ie,d.authenticationReceipt??""),r("LOGGED_IN"),o&&o()}const{mutate:I,isPending:F}=se({mutationFn:({username:d,password:R,authenticationReceipt:S})=>j.login(d,R,S),onError:d=>{i(d.reason);const{errorResponse:R}=d;R&&"errorCode"in R&&R.errorCode==ae.PASSWORD_RESET_VIA_EMAIL_REQUIRED&&window.location.assign(A.toString())},onSuccess:async d=>{d&&(fe(d)?(r("VERIFICATION_CODE"),p(d)):await f(d))}}),{mutate:T,isPending:O}=se({mutationFn:j.loginWith2fa,onError:d=>{i(d.reason),(d.reason.includes("The provided twoFaToken is invalid")||d.reason.includes("Token has expired"))&&(console.warn(d),i("Something went wrong. Refresh the page and try again."),window.location.href.includes("twoFaToken")&&window.history.replaceState({},document.title,window.location.href.replaceAll(/(twoFaToken|userId)=[^&]*&?/g,"")))},onSuccess:f}),{mutate:v,isSuccess:D,isPending:U}=Ae({onError:d=>{i(d.reason)}}),V=(d,R)=>{i(void 0);const S=localStorage.getItem(ie);I({username:d,password:R,authenticationReceipt:S})};function h(d){return d==null?(i("You did not first log in with your password or a third-party identity provider."),!1):!0}return{step:c,onStepChange:r,submitUsernameAndPassword:V,submitOneTimePassword:(d,R=c==="RECOVERY_CODE"?"RECOVERY_CODE":"TOTP")=>{if(i(void 0),h(l)){const S={userId:l.userId,twoFaToken:l.twoFaToken,otpCode:d,otpType:R};T(S)}},errorMessage:m,loginIsPending:F||O,beginTwoFactorAuthReset:d=>{if(i(void 0),h(l)){const R={userId:l.userId,twoFaToken:l.twoFaToken,twoFaResetEndpoint:d};v(R)}},twoFactorAuthResetIsPending:U,twoFactorAuthResetIsSuccess:D}}const Pe="Enter the 6-digit, time-based verification code provided by your authenticator app.",be="Enter a one-time backup code. Your backup code is a 16 digit code, with groups of 4 letters or numbers separated by hyphens.";function xe(t){switch(t){case"CHOOSE_AUTH_METHOD":return"CHOOSE_AUTH_METHOD";case"USERNAME_PASSWORD":return"CHOOSE_AUTH_METHOD";case"VERIFICATION_CODE":return"CHOOSE_AUTH_METHOD";case"RECOVERY_CODE":return"VERIFICATION_CODE";case"DISABLE_2FA_PROMPT":return"VERIFICATION_CODE";case"LOGGED_IN":return"LOGGED_IN"}}function Q(t){const{step:o,onStepChange:u,sx:s}=t;return o==="USERNAME_PASSWORD"||o==="VERIFICATION_CODE"||o==="RECOVERY_CODE"?e.jsx(Te,{className:_e,type:"button",onClick:()=>{u(xe(o))},sx:s,children:e.jsx(ye,{icon:"arrowBack",wrap:!1,sx:{height:"24px",width:"24px"}})}):null}try{Q.displayName="LoginFlowBackButton",Q.__docgenInfo={description:"",displayName:"LoginFlowBackButton",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"CHOOSE_AUTH_METHOD"'},{value:'"USERNAME_PASSWORD"'},{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"DISABLE_2FA_PROMPT"'},{value:'"LOGGED_IN"'}]}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!0,type:{name:'(step: "CHOOSE_AUTH_METHOD" | "USERNAME_PASSWORD" | ONE_TIME_PASSWORD_STEP | "LOGGED_IN") => void'}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}function z(t){const{onBeginOAuthSignIn:o,ssoRedirectUrl:u,onSelectUsernameAndPassword:s,state:c}=t;function r(m,i){o&&o(),m.preventDefault();const l=u?`${u}${i}`:`${j.getRootURL()}?provider=${i}`;j.oAuthUrlRequest(i,l,c).then(p=>{window.location=p.authorizationUrl}).catch(p=>{console.log("Error on oAuth url ",p)})}return e.jsxs(q,{children:[e.jsx($,{loginMethod:Ee,iconName:"google24",onClick:m=>{r(m,ue.GOOGLE)}}),e.jsx($,{loginMethod:Re,iconName:"orcid",onClick:m=>{r(m,ue.ORCID)}}),e.jsx($,{loginMethod:Oe,iconName:"email",onClick:s})]})}try{z.displayName="AuthenticationMethodSelection",z.__docgenInfo={description:`To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs for Synapse authentication.
This can be done by visiting https://sagebionetworks.jira.com/servicedesk/customer/portal/9 to set up a collaboration.
Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.`,displayName:"AuthenticationMethodSelection",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},onBeginOAuthSignIn:{defaultValue:null,description:"",name:"onBeginOAuthSignIn",required:!1,type:{name:"(() => void)"}},onSelectUsernameAndPassword:{defaultValue:null,description:"",name:"onSelectUsernameAndPassword",required:!0,type:{name:"() => void"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"OAuth2State"}}}}}catch{}const ve=19;function J(t){const{onSubmit:o,loginIsPending:u}=t,[s,c]=w.useState("");return e.jsxs(q,{children:[e.jsx(re,{placeholder:"Enter backup code",value:s,onChange:r=>{const m=r.target.value.toLowerCase().replace(/[^a-z0-9-]/gi,"");c(m)}}),e.jsx(W,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",sx:{height:"50px",mt:4,mb:2},disabled:s.length!==ve||u,onClick:r=>{r.preventDefault(),o(s)},children:u?"Verifying...":"Submit"})]})}try{J.displayName="RecoveryCodeForm",J.__docgenInfo={description:"",displayName:"RecoveryCodeForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(value: string) => void"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}}}}}catch{}const De=Ie(Fe)`
  input {
    text-align: center;
  }
`,Ue={TextFieldStyled:De},Ve=t=>e.jsx(Ue.TextFieldStyled,{...t}),B={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace",home:"Home",end:"End"};function ke(t,o){return t<=0?[]:Array.from({length:t},o)}function Ne(t,o,u){return t.map((s,c)=>o===c?u:s)}function de(t){return t.join("")}function ce(t,o){return[...t,o]}function Me(t,o,u){return t.reduce((s,c,r)=>{const{characters:m,restArrayMerged:i}=s;if(r<u)return{restArrayMerged:i,characters:ce(m,c)};const[l,...p]=i;return{restArrayMerged:p,characters:ce(m,l||"")}},{restArrayMerged:o,characters:[]}).characters}function qe(t){return t.split("")}function pe(t){const o=N.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return N.useInsertionEffect(()=>{o.current=t}),N.useCallback((...u)=>{var s;return(s=o.current)==null?void 0:s.call(o,...u)},[])}const Le=()=>!0,Be=N.forwardRef((t,o)=>{const{value:u="",length:s=4,autoFocus:c=!1,onChange:r,TextFieldsProps:m,onComplete:i,validateChar:l=Le,className:p,onBlur:A,...f}=t,I=N.useRef(u),F=pe(i),T=pe(n=>{const a=n.slice(0,s);return{isCompleted:a.length===s,finalValue:a}});N.useEffect(()=>{const{isCompleted:n,finalValue:a}=T(I.current);n&&F(a)},[s,F,T]);const O=ke(s,(n,a)=>({character:u[a]||"",inputRef:N.createRef()})),v=n=>O.findIndex(({inputRef:a})=>a.current===n),D=()=>O.map(({character:n})=>n),U=(n,a)=>{const g=Ne(D(),n,a);return de(g)},V=n=>{var a,g;(g=(a=O[n])==null?void 0:a.inputRef.current)==null||g.focus()},h=n=>{var a,g;(g=(a=O[n])==null?void 0:a.inputRef.current)==null||g.select()},P=n=>{n+1!==s&&(O[n+1].character?h(n+1):V(n+1))},k=(n,a)=>typeof l!="function"?!0:l(n,a),d=n=>{const a=v(n.target);if(a===0&&n.target.value.length>1){const{finalValue:x,isCompleted:L}=T(n.target.value);r==null||r(x),L&&(i==null||i(x)),h(x.length-1);return}const g=n.target.value[0]||"";let y=g;y&&!k(y,a)&&(y="");const _=U(a,y);r==null||r(_);const{isCompleted:b,finalValue:C}=T(_);b&&(i==null||i(C)),y!==""?_.length-1<a?h(_.length):P(a):g===""&&_.length<=a&&h(a-1)},R=n=>{const a=n.target,g=a.selectionStart,y=a.selectionEnd,_=v(a),b=g===0&&y===0;if(a.value===n.key)n.preventDefault(),P(_);else if(B.backspace===n.key){if(!a.value)n.preventDefault(),h(_-1);else if(b){n.preventDefault();const C=U(_,"");r==null||r(C),C.length<=_&&h(_-1)}}else B.left===n.key?(n.preventDefault(),h(_-1)):B.right===n.key?(n.preventDefault(),h(_+1)):B.home===n.key?(n.preventDefault(),h(0)):B.end===n.key&&(n.preventDefault(),h(O.length-1))},S=n=>{const a=n.clipboardData.getData("text/plain"),g=n.target,y=O.findIndex(({character:E,inputRef:Y})=>E===""||Y.current===g),_=D(),b=Me(_,qe(a),y).map((E,Y)=>k(E,Y)?E:""),C=de(b);r==null||r(C);const{isCompleted:x,finalValue:L}=T(C);x?(i==null||i(L),h(s-1)):h(C.length)},H=n=>{if(!O.some(({inputRef:a})=>a.current===n.relatedTarget)){const{isCompleted:a,finalValue:g}=T(u);A==null||A(g,a)}};return e.jsx(q,{display:"flex",gap:"20px",alignItems:"center",ref:o,className:`MuiOtpInput-Box ${p||""}`,...f,children:O.map(({character:n,inputRef:a},g)=>{const{onPaste:y,onFocus:_,onKeyDown:b,className:C,onBlur:x,...L}=typeof m=="function"?m(g)||{}:m||{};return e.jsx(Ve,{autoFocus:c?g===0:!1,autoComplete:"one-time-code",value:n,inputRef:a,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${g+1} ${C||""}`,onPaste:E=>{E.preventDefault(),S(E),y==null||y(E)},onFocus:E=>{E.preventDefault(),E.target.select(),_==null||_(E)},onChange:d,onKeyDown:E=>{R(E),b==null||b(E)},onBlur:E=>{x==null||x(E),H(E)},...L},g)})})}),me=6,je=["0","1","2","3","4","5","6","7","8","9"];function Z(t){const{onSubmit:o,loginIsPending:u}=t,[s,c]=w.useState("");return e.jsxs(q,{children:[e.jsx(Be,{autoFocus:!0,length:me,value:s,onChange:c,onComplete:o,validateChar:r=>je.includes(r)||r==="",gap:"2px",sx:{mx:"auto",maxWidth:"350px",".MuiInputBase-root":{paddingLeft:"5px",paddingRight:"5px"},".MuiFormControl-root:first-of-type > .MuiInputBase-root":{borderTopRightRadius:0,borderBottomRightRadius:0},".MuiFormControl-root:last-of-type > .MuiInputBase-root":{borderTopLeftRadius:0,borderBottomLeftRadius:0},".MuiFormControl-root:not(:first-of-type):not(:last-of-type) > .MuiInputBase-root":{borderRadius:0}}}),e.jsx(W,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",sx:{height:"50px",mt:4,mb:2},disabled:s.length!==me||u,onClick:r=>{r.preventDefault(),o(s)},children:u?"Verifying...":"Submit"})]})}try{Z.displayName="TOTPForm",Z.__docgenInfo={description:"",displayName:"TOTPForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(value: string) => void"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}}}}}catch{}const He="Use a backup code instead",Ge="Use authenticator app instead",We="Lost access to your codes?",Ye="Send Instructions",$e="Instructions to reset two-factor authentication were sent to the primary email address associated with your account.";function ee(t){const{step:o,loginIsPending:u,onSubmit:s,onClickUseBackupCode:c,onClickUseTOTP:r,hideReset2FA:m,onClickPromptReset2FA:i,onClickReset2FA:l,twoFactorAuthResetIsSuccess:p,twoFactorAuthResetIsPending:A}=t;return e.jsxs(e.Fragment,{children:[o==="VERIFICATION_CODE"&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{loginIsPending:u,onSubmit:f=>{s(f,"TOTP")}}),e.jsx(M,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{c()},children:He})]}),o==="RECOVERY_CODE"&&e.jsxs(e.Fragment,{children:[e.jsx(J,{loginIsPending:u,onSubmit:f=>{s(f,"RECOVERY_CODE")}}),e.jsx(M,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{r()},children:Ge})]}),!m&&i&&l&&o!=="DISABLE_2FA_PROMPT"&&e.jsx(M,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{i()},children:We}),o==="DISABLE_2FA_PROMPT"&&l&&e.jsxs(e.Fragment,{children:[e.jsx(K,{variant:"body1",align:"center",sx:{my:2},children:"To reset two-factor authentication on your account, an email containing instructions will be sent to the primary email address on your account."}),e.jsx(W,{fullWidth:!0,variant:"contained",onClick:l,disabled:A||p,sx:{my:2},children:Ye}),p&&e.jsx(Se,{severity:"success",sx:{my:1},children:$e}),e.jsx(M,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{r()},children:"Go back"})]})]})}try{ee.displayName="OneTimePasswordForm",ee.__docgenInfo={description:`Component that allows the user to enter a one-time password second authentication factor,
such as a timed one-time password (TOTP) generated using a shared secret, or a single-use recovery code.

The user may also use this UI to begin the process of disabling 2FA on their account.`,displayName:"OneTimePasswordForm",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"DISABLE_2FA_PROMPT"'}]}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}},onClickUseTOTP:{defaultValue:null,description:"",name:"onClickUseTOTP",required:!0,type:{name:"() => void"}},onClickUseBackupCode:{defaultValue:null,description:"",name:"onClickUseBackupCode",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(code: string, otpType: TwoFactorAuthOtpType) => void"}},hideReset2FA:{defaultValue:null,description:"",name:"hideReset2FA",required:!1,type:{name:"boolean"}},onClickPromptReset2FA:{defaultValue:null,description:"",name:"onClickPromptReset2FA",required:!1,type:{name:"(() => void)"}},onClickReset2FA:{defaultValue:null,description:"",name:"onClickReset2FA",required:!1,type:{name:"(() => void)"}},twoFactorAuthResetIsSuccess:{defaultValue:null,description:"",name:"twoFactorAuthResetIsSuccess",required:!0,type:{name:"boolean"}},twoFactorAuthResetIsPending:{defaultValue:null,description:"",name:"twoFactorAuthResetIsPending",required:!0,type:{name:"boolean"}}}}}catch{}function te(t){return e.jsx(re,{required:!0,fullWidth:!0,autoComplete:"current-password",label:"Password",id:"current-password",type:"password",...t})}try{te.displayName="PasswordField",te.__docgenInfo={description:"",displayName:"PasswordField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}function ne(t){const o=G("/resetPassword"),{resetPasswordUrl:u=o.toString(),onSubmit:s,loginIsPending:c,hideForgotPasswordButton:r}=t,[m,i]=w.useState(""),[l,p]=w.useState("");function A(f){f.preventDefault(),s(m,l)}return e.jsxs("form",{onSubmit:f=>{A(f)},children:[e.jsx(re,{required:!0,fullWidth:!0,autoFocus:!0,autoComplete:"username",label:"Username or Email Address",id:"username",type:"text",value:m,onChange:f=>i(f.target.value)}),e.jsx(te,{value:l,onChange:f=>p(f.target.value)}),!r&&e.jsx(M,{href:u,target:u.startsWith("/")?void 0:"_blank",children:"Forgot password?"}),e.jsx(W,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",disabled:c,sx:{height:"50px",mt:4,mb:2},children:c?"Logging you in...":"Sign in"})]})}try{ne.displayName="UsernamePasswordForm",ne.__docgenInfo={description:"",displayName:"UsernamePasswordForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(username: string, password: string) => void"}},resetPasswordUrl:{defaultValue:null,description:"",name:"resetPasswordUrl",required:!1,type:{name:"string"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}},hideForgotPasswordButton:{defaultValue:null,description:"",name:"hideForgotPasswordButton",required:!1,type:{name:"boolean"}}}}}catch{}function oe(t){const o=G("/register1"),u=G("/reset2FA"),{ssoRedirectUrl:s,ssoState:c,registerAccountUrl:r=o.toString(),resetPasswordUrl:m,onBeginOAuthSignIn:i,onStepChange:l,step:p,submitUsernameAndPassword:A,submitOneTimePassword:f,errorMessage:I,loginIsPending:F,beginTwoFactorAuthReset:T,hideRegisterButton:O,hideForgotPasswordButton:v,twoFactorAuthResetIsSuccess:D,twoFactorAuthResetIsPending:U,twoFactorAuthResetUri:V=he(u,"twoFAResetToken"),onPasswordLoginSelected:h=X}=t;return e.jsxs(e.Fragment,{children:[p=="CHOOSE_AUTH_METHOD"&&e.jsx(z,{onSelectUsernameAndPassword:()=>{h(),l("USERNAME_PASSWORD")},onBeginOAuthSignIn:i,ssoRedirectUrl:s,state:c}),p==="USERNAME_PASSWORD"&&e.jsx(ne,{loginIsPending:F,resetPasswordUrl:m,onSubmit:(P,k)=>{A(P,k)},hideForgotPasswordButton:v}),(p==="VERIFICATION_CODE"||p==="RECOVERY_CODE"||p==="DISABLE_2FA_PROMPT")&&e.jsx(ee,{step:p,loginIsPending:F,onSubmit:(P,k)=>{f(P,k)},onClickUseTOTP:()=>{l("VERIFICATION_CODE")},onClickUseBackupCode:()=>{l("RECOVERY_CODE")},onClickPromptReset2FA:()=>{l("DISABLE_2FA_PROMPT")},onClickReset2FA:()=>{T(V)},twoFactorAuthResetIsPending:U,twoFactorAuthResetIsSuccess:D}),!O&&(p==="CHOOSE_AUTH_METHOD"||p==="USERNAME_PASSWORD")&&e.jsx(q,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:e.jsx(M,{href:r,align:"center",children:"Don't have an account? Create one now"})}),I&&e.jsx(we,{variant:"warning",isGlobal:!1,description:I})]})}try{oe.displayName="LoginForm",oe.__docgenInfo={description:"",displayName:"LoginForm",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},registerAccountUrl:{defaultValue:null,description:"",name:"registerAccountUrl",required:!1,type:{name:"string"}},resetPasswordUrl:{defaultValue:null,description:"",name:"resetPasswordUrl",required:!1,type:{name:"string"}},onBeginOAuthSignIn:{defaultValue:null,description:"",name:"onBeginOAuthSignIn",required:!1,type:{name:"(() => void)"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"CHOOSE_AUTH_METHOD"'},{value:'"USERNAME_PASSWORD"'},{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"DISABLE_2FA_PROMPT"'},{value:'"LOGGED_IN"'}]}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!0,type:{name:'(step: "CHOOSE_AUTH_METHOD" | "USERNAME_PASSWORD" | ONE_TIME_PASSWORD_STEP | "LOGGED_IN") => void'}},twoFactorAuthenticationRequired:{defaultValue:null,description:"",name:"twoFactorAuthenticationRequired",required:!1,type:{name:"TwoFactorAuthErrorResponse"}},submitUsernameAndPassword:{defaultValue:null,description:"",name:"submitUsernameAndPassword",required:!0,type:{name:"(username: string, password: string) => void"}},submitOneTimePassword:{defaultValue:null,description:"",name:"submitOneTimePassword",required:!0,type:{name:"(code: string, otpType?: TwoFactorAuthOtpType | undefined) => void"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string | undefined"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}},beginTwoFactorAuthReset:{defaultValue:null,description:"",name:"beginTwoFactorAuthReset",required:!0,type:{name:"(twoFaResetEndpoint: string) => void"}},twoFactorAuthResetIsSuccess:{defaultValue:null,description:"",name:"twoFactorAuthResetIsSuccess",required:!0,type:{name:"boolean"}},twoFactorAuthResetIsPending:{defaultValue:null,description:"",name:"twoFactorAuthResetIsPending",required:!0,type:{name:"boolean"}},hideRegisterButton:{defaultValue:null,description:"",name:"hideRegisterButton",required:!1,type:{name:"boolean"}},hideForgotPasswordButton:{defaultValue:null,description:"",name:"hideForgotPasswordButton",required:!1,type:{name:"boolean"}},ssoState:{defaultValue:null,description:"",name:"ssoState",required:!1,type:{name:"OAuth2State"}},twoFactorAuthResetUri:{defaultValue:null,description:"",name:"twoFactorAuthResetUri",required:!1,type:{name:"string"}},onPasswordLoginSelected:{defaultValue:null,description:"",name:"onPasswordLoginSelected",required:!1,type:{name:"(() => void)"}}}}}catch{}function ge(t){const{ssoRedirectUrl:o,sessionCallback:u,registerAccountUrl:s,resetPasswordUrl:c,onBeginOAuthSignIn:r,onTwoFactorAuthRequired:m,hideRegisterButton:i,hideForgotPasswordButton:l,ssoState:p,twoFactorAuthResetUri:A,onPasswordLoginSelected:f}=t,{step:I,onStepChange:F,submitUsernameAndPassword:T,submitOneTimePassword:O,errorMessage:v,loginIsPending:D,beginTwoFactorAuthReset:U,twoFactorAuthResetIsPending:V,twoFactorAuthResetIsSuccess:h}=Ce({sessionCallback:u,twoFaErrorResponse:t.twoFactorAuthenticationRequired,onTwoFactorAuthRequired:m});return e.jsxs(q,{sx:P=>({[P.breakpoints.up("sm")]:{width:"330px"},p:0,mx:"auto",bgColor:"transparent"}),children:[e.jsx(Q,{step:I,onStepChange:F,sx:{p:0,mb:1}}),I==="VERIFICATION_CODE"&&e.jsx(K,{variant:"body1",sx:{my:2},align:"center",children:Pe}),I==="RECOVERY_CODE"&&e.jsx(K,{variant:"body1",sx:{my:2},align:"center",children:be}),e.jsx(oe,{step:I,onStepChange:F,submitUsernameAndPassword:T,submitOneTimePassword:O,errorMessage:v,ssoRedirectUrl:o,registerAccountUrl:s,resetPasswordUrl:c,onBeginOAuthSignIn:r,loginIsPending:D,beginTwoFactorAuthReset:U,hideRegisterButton:i,hideForgotPasswordButton:l,twoFactorAuthResetIsPending:V,twoFactorAuthResetIsSuccess:h,ssoState:p,twoFactorAuthResetUri:A,onPasswordLoginSelected:f})]})}try{ge.displayName="StandaloneLoginForm",ge.__docgenInfo={description:"",displayName:"StandaloneLoginForm",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}},registerAccountUrl:{defaultValue:null,description:"",name:"registerAccountUrl",required:!1,type:{name:"string"}},resetPasswordUrl:{defaultValue:null,description:"",name:"resetPasswordUrl",required:!1,type:{name:"string"}},onBeginOAuthSignIn:{defaultValue:null,description:"",name:"onBeginOAuthSignIn",required:!1,type:{name:"(() => void)"}},twoFactorAuthenticationRequired:{defaultValue:null,description:"",name:"twoFactorAuthenticationRequired",required:!1,type:{name:"TwoFactorAuthErrorResponse"}},onTwoFactorAuthRequired:{defaultValue:null,description:"",name:"onTwoFactorAuthRequired",required:!1,type:{name:'((twoFaErrorResponse: Pick<TwoFactorAuthErrorResponse, "twoFaToken" | "userId">) => void)'}},hideRegisterButton:{defaultValue:null,description:"",name:"hideRegisterButton",required:!1,type:{name:"boolean"}},hideForgotPasswordButton:{defaultValue:null,description:"",name:"hideForgotPasswordButton",required:!1,type:{name:"boolean"}},ssoState:{defaultValue:null,description:"",name:"ssoState",required:!1,type:{name:"OAuth2State"}},twoFactorAuthResetUri:{defaultValue:null,description:"",name:"twoFactorAuthResetUri",required:!1,type:{name:"string"}},onPasswordLoginSelected:{defaultValue:null,description:"",name:"onPasswordLoginSelected",required:!1,type:{name:"(() => void)"}}}}}catch{}export{ee as O,be as R,ge as S,Pe as T};
