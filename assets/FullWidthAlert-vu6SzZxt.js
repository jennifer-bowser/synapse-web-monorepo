import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{s as J}from"./spreadSx-CwcO6WA9.js";import{r as C}from"./index-Dl6G-zuu.js";import{A as Q}from"./Alert-By3H5ehm.js";import{S as L}from"./Stack-CMgji9n-.js";import{B as Y}from"./Box-sTghsUmj.js";import{A as Z}from"./AlertTitle-C14X1--E.js";import{b as d,a as N,g as _,F as ee,_ as j,e as ne,h as k}from"./createTheme-DCAEEeQ9.js";import{s as w,u as F,c as q}from"./styled-GqwmQbHR.js";import{u as te}from"./useTheme-C2nLQS7p.js";import{e as P}from"./mergeSlotProps-D-cfru4O.js";import{u as oe}from"./useTimeout-DgmtfV4_.js";import{u as R}from"./TransitionGroupContext-DetLSwnr.js";import{u as re,G as ae}from"./Grow-BjId_ape.js";import{P as ie}from"./Paper-Dap2c6xL.js";import{C as se}from"./ClickAwayListener-DMjw0JVT.js";import{T as le}from"./Tooltip-DghXNkD2.js";import{B as ce}from"./Button-mTo7xxsU.js";function ue(n={}){const{autoHideDuration:e=null,disableWindowBlurListener:a=!1,onClose:t,open:s,resumeHideDuration:p}=n,f=oe();C.useEffect(()=>{if(!s)return;function o(r){r.defaultPrevented||(r.key==="Escape"||r.key==="Esc")&&(t==null||t(r,"escapeKeyDown"))}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[s,t]);const m=R((o,r)=>{t==null||t(o,r)}),u=R(o=>{!t||o==null||f.start(o,()=>{m(null,"timeout")})});C.useEffect(()=>(s&&u(e),f.clear),[s,e,u,f]);const g=o=>{t==null||t(o,"clickaway")},l=f.clear,x=C.useCallback(()=>{e!=null&&u(p??e*.5)},[e,p,u]),y=o=>r=>{const c=o.onBlur;c==null||c(r),x()},v=o=>r=>{const c=o.onFocus;c==null||c(r),l()},b=o=>r=>{const c=o.onMouseEnter;c==null||c(r),l()},h=o=>r=>{const c=o.onMouseLeave;c==null||c(r),x()};return C.useEffect(()=>{if(!a&&s)return window.addEventListener("focus",x),window.addEventListener("blur",l),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",l)}},[a,s,x,l]),{getRootProps:(o={})=>{const r=d({},P(n),P(o));return d({role:"presentation"},o,r,{onBlur:y(r),onFocus:v(r),onMouseEnter:b(r),onMouseLeave:h(r)})},onClickAway:g}}function de(n){return N("MuiSnackbarContent",n)}_("MuiSnackbarContent",["root","message","action"]);const pe=["action","className","message","role"],fe=n=>{const{classes:e}=n;return q({root:["root"],action:["action"],message:["message"]},de,e)},me=w(ie,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,e)=>e.root})(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98,a=ee(n.palette.background.default,e);return d({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(a),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),ge=w("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,e)=>e.message})({padding:"8px 0"}),xe=w("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),he=C.forwardRef(function(e,a){const t=F({props:e,name:"MuiSnackbarContent"}),{action:s,className:p,message:f,role:m="alert"}=t,u=j(t,pe),g=t,l=fe(g);return i.jsxs(me,d({role:m,square:!0,elevation:6,className:ne(l.root,p),ownerState:g,ref:a},u,{children:[i.jsx(ge,{className:l.message,ownerState:g,children:f}),s?i.jsx(xe,{className:l.action,ownerState:g,children:s}):null]}))});function Ce(n){return N("MuiSnackbar",n)}_("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const be=["onEnter","onExited"],ye=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],ve=n=>{const{classes:e,anchorOrigin:a}=n,t={root:["root",`anchorOrigin${k(a.vertical)}${k(a.horizontal)}`]};return q(t,Ce,e)},O=w("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:a}=n;return[e.root,e[`anchorOrigin${k(a.anchorOrigin.vertical)}${k(a.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:e})=>{const a={left:"50%",right:"auto",transform:"translateX(-50%)"};return d({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},e.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},e.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},e.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:d({},e.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},e.anchorOrigin.horizontal==="center"&&a,e.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},e.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),ke=C.forwardRef(function(e,a){const t=F({props:e,name:"MuiSnackbar"}),s=te(),p={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{action:f,anchorOrigin:{vertical:m,horizontal:u}={vertical:"bottom",horizontal:"left"},autoHideDuration:g=null,children:l,className:x,ClickAwayListenerProps:y,ContentProps:v,disableWindowBlurListener:b=!1,message:h,open:S,TransitionComponent:o=ae,transitionDuration:r=p,TransitionProps:{onEnter:c,onExited:T}={}}=t,z=j(t.TransitionProps,be),V=j(t,ye),A=d({},t,{anchorOrigin:{vertical:m,horizontal:u},autoHideDuration:g,disableWindowBlurListener:b,TransitionComponent:o,transitionDuration:r}),W=ve(A),{getRootProps:I,onClickAway:G}=ue(d({},A)),[H,M]=C.useState(!0),U=re({elementType:O,getSlotProps:I,externalForwardedProps:V,ownerState:A,additionalProps:{ref:a},className:[W.root,x]}),$=B=>{M(!0),T&&T(B)},K=(B,X)=>{M(!1),c&&c(B,X)};return!S&&H?null:i.jsx(se,d({onClickAway:G},y,{children:i.jsx(O,d({},U,{children:i.jsx(o,d({appear:!0,in:S,timeout:r,direction:m==="top"?"down":"up",onEnter:K,onExited:$},z,{children:l||i.jsx(he,d({message:h,action:f},v))}))}))}))});function we(n){return n==="danger"?"error":n}function E(n){const{config:e,variant:a}=n;return e&&("onClick"in e||"href"in e)?i.jsx(le,{title:e.tooltipText??"",enterNextDelay:300,children:i.jsx("span",{"data-tip-disable":!1,children:i.jsx(ce,{variant:a,sx:{width:{xs:"100%",md:"initial"}},color:"primary",disabled:e.isDisabled,onClick:t=>{"onClick"in e?(t.preventDefault(),e.onClick(t)):"href"in e&&(t.preventDefault(),window.open(e.href,"_blank","noopener"))},children:e.text})})}):null}function D(n){const{title:e,description:a,primaryButtonConfig:t,secondaryButtonConfig:s,tertiaryButtonConfig:p,show:f=!0,onClose:m,autoCloseAfterDelayInSeconds:u,variant:g="info",isGlobal:l=!0,icon:x,sx:y,globalAlertSx:v}=n;C.useEffect(()=>{let h;return m&&u&&(h=setTimeout(m,u*1e3)),()=>{h&&clearTimeout(h)}},[m,u]);const b=i.jsx(Q,{severity:we(g),sx:J({width:"100%",my:"10px",".MuiAlert-message":{flexGrow:1},".MuiAlert-icon":{display:{xs:"none",sm:"flex"}}},y),className:"FullWidthAlert",onClose:m,icon:x,children:i.jsxs(L,{direction:{xs:"column",sm:"row"},alignItems:{xs:"start",sm:"center"},spacing:{xs:1,sm:2},gap:{xs:"8px",sm:"initial"},display:"flex",justifyContent:"space-between",children:[i.jsxs(Y,{children:[e&&i.jsx(Z,{children:e}),a]}),(t||s||p)&&i.jsxs(L,{spacing:{xs:1,lg:2},direction:{xs:"row",sm:"column",lg:"row"},alignItems:"center",display:"flex",flexShrink:0,sx:h=>({gap:{xs:"8px",sm:"initial"},flexWrap:{xs:"wrap",sm:"nowrap"},width:{xs:"100%",sm:"initial"},[h.breakpoints.down("sm")]:{"& > *":{flexGrow:1}}}),children:[p&&i.jsx(E,{config:p,variant:"text"}),s&&i.jsx(E,{config:s,variant:"text"}),t&&i.jsx(E,{config:t,variant:"contained"})]})]})});return i.jsx(i.Fragment,{children:l?i.jsx(ke,{open:f,className:l?"FullWidthAlertGlobal":void 0,sx:{width:"96%",filter:"drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05))",...v},anchorOrigin:{vertical:"bottom",horizontal:"center"},TransitionProps:{appear:!1},children:b}):f&&b})}try{D.displayName="FullWidthAlert",D.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"FullWidthAlert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"danger"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},primaryButtonConfig:{defaultValue:null,description:"",name:"primaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},secondaryButtonConfig:{defaultValue:null,description:"",name:"secondaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},tertiaryButtonConfig:{defaultValue:null,description:"",name:"tertiaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},autoCloseAfterDelayInSeconds:{defaultValue:null,description:"",name:"autoCloseAfterDelayInSeconds",required:!1,type:{name:"number"}},isGlobal:{defaultValue:null,description:"",name:"isGlobal",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},globalAlertSx:{defaultValue:null,description:"",name:"globalAlertSx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}export{D as F};
