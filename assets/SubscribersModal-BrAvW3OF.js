import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{C as n}from"./ConfirmationDialog-Dge8deeo.js";import{u}from"./useSubscription-ZuW8C5kY.js";import{U as d}from"./UserBadge-0J7PaRzy.js";import{L as c}from"./Link-CFsiiapl.js";function t({id:a,objectType:l,showModal:i,handleModal:s}){const{data:e}=u({objectId:a,objectType:l});return r.jsxs("div",{className:"SubscribersModal",children:[e&&e.subscribers.length>0&&r.jsx(c,{onClick:()=>s(!0),children:`Followers (${e.subscribers.length})`}),r.jsx(n,{open:i,onCancel:()=>s(!1),title:"Followers",content:e&&e.subscribers.map(o=>r.jsx(d,{userId:o,showCardOnHover:!0},o)),onConfirm:()=>s(!1),hasCancelButton:!1})]})}try{t.displayName="SubscribersModal",t.__docgenInfo={description:"",displayName:"SubscribersModal",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},objectType:{defaultValue:null,description:"",name:"objectType",required:!0,type:{name:"enum",value:[{value:'"FORUM"'},{value:'"THREAD"'},{value:'"DATA_ACCESS_SUBMISSION"'},{value:'"DATA_ACCESS_SUBMISSION_STATUS"'}]}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},handleModal:{defaultValue:null,description:"",name:"handleModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}export{t as S};
