import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as t}from"./index-Dl6G-zuu.js";import{M as f}from"./ConfirmationDialog-Dge8deeo.js";import{d as y}from"./ToastMessage-Cdc-RPF1.js";import{T as i}from"./Typography-Cqa7rFgc.js";import{B as s}from"./Box-DN73Q90z.js";import{c as m}from"./createSvgIcon-DGYn73cf.js";import{C as E}from"./IconSvg-BczDzbzX.js";import{C as A}from"./cloneDeep-CU8tiSOH.js";const h=m(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDownTwoTone"),_=m(e.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUpTwoTone"),c=l=>{const[a,T]=t.useState(!1),[n,S]=t.useState(),[d,x]=t.useState(),I=o=>{o&&(x(o.trim()),S(o.trim().split(/\s+/).length))},{textDescription:u="full text",showCopyPlainText:w,markdown:v,ownerId:C,title:p}=l;if(v==null&&C==null)return;const r={color:"grey.700",marginBottom:"-5px !important",height:"18px"};return e.jsxs("div",{className:"MarkdownCollapse",style:{display:n!=null&&n>0?"block":"none"},children:[p&&e.jsx(i,{variant:"subtitle1",sx:{margin:"20px 0px 10px 0px"},children:p}),e.jsxs(s,{sx:{display:"flex",justifyContent:"space-between",backgroundColor:"grey.200",padding:"15px"},children:[e.jsxs(i,{variant:"smallLink",onClick:()=>T(!a),"aria-controls":"collapse-text","aria-expanded":a,sx:{"&:hover":{cursor:"pointer"}},children:[a?"Hide":"View"," ",u," ",n?`(${n} words)`:"",a?e.jsx(_,{sx:r}):e.jsx(h,{sx:r})]}),w&&e.jsx(s,{children:e.jsxs(i,{variant:"smallLink",onClick:()=>{d&&navigator.clipboard.writeText(d).then(()=>{y("Successfully copied to the clipboard")}).catch(o=>{console.error(o)})},sx:{"&:hover":{cursor:"pointer"}},children:[e.jsx(E,{sx:r}),"Copy ",u," to clipboard"]})})]}),e.jsx(A,{in:a,children:e.jsx(s,{sx:{backgroundColor:"grey.100",padding:"25px"},children:e.jsx("div",{id:"collapse-text",children:e.jsx(f,{...l,onMarkdownProcessingDone:I})})})})]})};try{c.displayName="MarkdownCollapse",c.__docgenInfo={description:`Wraps a MarkdownSynapse in a Collapse area, with customizable text description.
Will pass down all properties to the MarkdownSynapse component, so this can be used in
the portal detail pages.`,displayName:"MarkdownCollapse",props:{textDescription:{defaultValue:null,description:"",name:"textDescription",required:!1,type:{name:"string"}},showCopyPlainText:{defaultValue:null,description:"",name:"showCopyPlainText",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},ownerId:{defaultValue:null,description:"",name:"ownerId",required:!1,type:{name:"string"}},wikiId:{defaultValue:null,description:"",name:"wikiId",required:!1,type:{name:"string"}},markdown:{defaultValue:null,description:"",name:"markdown",required:!1,type:{name:"string"}},renderInline:{defaultValue:null,description:"",name:"renderInline",required:!1,type:{name:"boolean"}},objectType:{defaultValue:null,description:"",name:"objectType",required:!1,type:{name:"enum",value:[{value:'"ENTITY"'},{value:'"ENTITY_CONTAINER"'},{value:'"PRINCIPAL"'},{value:'"ACTIVITY"'},{value:'"EVALUATION"'},{value:'"SUBMISSION"'},{value:'"EVALUATION_SUBMISSIONS"'},{value:'"FILE"'},{value:'"MESSAGE"'},{value:'"WIKI"'},{value:'"FAVORITE"'},{value:'"ACCESS_REQUIREMENT"'},{value:'"ACCESS_APPROVAL"'},{value:'"TEAM"'},{value:'"TABLE"'},{value:'"ACCESS_CONTROL_LIST"'},{value:'"PROJECT_SETTING"'},{value:'"VERIFICATION_SUBMISSION"'},{value:'"CERTIFIED_USER_PASSING_RECORD"'},{value:'"FORUM"'},{value:'"THREAD"'},{value:'"REPLY"'},{value:'"FORM_GROUP"'},{value:'"FORM_DATA"'},{value:'"ENTITY_VIEW"'},{value:'"USER_PROFILE"'},{value:'"DATA_ACCESS_REQUEST"'},{value:'"DATA_ACCESS_SUBMISSION"'},{value:'"DATA_ACCESS_SUBMISSION_STATUS"'},{value:'"MEMBERSHIP_INVITATION"'}]}},loadingSkeletonRowCount:{defaultValue:null,description:"",name:"loadingSkeletonRowCount",required:!1,type:{name:"number"}},onMarkdownProcessingDone:{defaultValue:null,description:"",name:"onMarkdownProcessingDone",required:!1,type:{name:"((textContent: string | null) => void)"}},showPlaceholderIfNoWikiContent:{defaultValue:null,description:"",name:"showPlaceholderIfNoWikiContent",required:!1,type:{name:"boolean"}}}}}catch{}export{c as M};
