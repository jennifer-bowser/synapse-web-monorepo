import{j as c}from"./jsx-runtime-Du8NFWEI.js";import{C as d}from"./ConfirmationDialog-Dge8deeo.js";function n(e){const{title:a,content:r,confirmButtonText:t="OK",className:l,open:o,onConfirm:i,confirmButtonColor:u="primary",onCancel:m,onConfirmCallbackArgs:s}=e;return c.jsx(d,{open:o,title:a,content:r,className:l,confirmButtonProps:{children:t,color:u},onCancel:m,onConfirm:()=>i(...s??[])})}try{n.displayName="WarningDialog",n.__docgenInfo={description:"",displayName:"WarningDialog",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string | Element"}},confirmButtonText:{defaultValue:null,description:"",name:"confirmButtonText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(...args: any[]) => unknown"}},onConfirmCallbackArgs:{defaultValue:null,description:"",name:"onConfirmCallbackArgs",required:!1,type:{name:"any[]"}},confirmButtonColor:{defaultValue:null,description:"",name:"confirmButtonColor",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"light"'},{value:'"neutral"'},{value:'"darkPrimary"'},{value:'"lightPrimary"'}]}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}}}catch{}export{n as W};
