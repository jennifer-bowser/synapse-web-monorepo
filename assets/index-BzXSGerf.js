import{j as e}from"./jsx-runtime-Du8NFWEI.js";import"./useFiles-D-hdekB1.js";import{E as o}from"./VerificationSubmission-BnFne12N.js";import"./StringUtils-CXT0ex8W.js";import"./OrientationBanner-FCMHzA9o.js";import{r as l}from"./index-Dl6G-zuu.js";import{u as g}from"./useEntity-BwB1AVEI.js";import{M as S}from"./immutable.es-DHy1u56X.js";import{E as x,R as _,a as u,b as F,F as R,c as T,d as B,e as C,B as N}from"./EntityTree-DUk0D8HP.js";import{r as b}from"./react-sizeme-C2W2PgBQ.js";import{V as I}from"./EntityChildrenDetails-B46W_lem.js";function i({parentContainerId:t,onSelect:c}){const{data:n}=g(t),[d,p]=l.useState(t),[E,y]=l.useState({items:[]}),f=l.useCallback(s=>{y({items:s})},[y]),w=(n==null?void 0:n.path.path[1].id)??void 0,m=S(),r=[o.FOLDER,o.FILE,o.LINK],h={type:x.PARENT_CONTAINER,parentContainerId:d??void 0,getProjectParams:{sort:"PROJECT_NAME"}};return e.jsx("div",{className:"EntityFileBrowser EntityFinderReflexContainer",children:e.jsx(b.SizeMe,{children:({size:s})=>e.jsxs(_,{orientation:"vertical",windowResizeAware:!0,children:[e.jsx(u,{className:"TreeViewReflexElement",flex:.24,children:e.jsx(F,{selectedEntities:m,setDetailsViewConfiguration:()=>{},showDropdown:!1,initialScope:R.CURRENT_PROJECT,projectId:w,initialContainer:t,currentContainer:d,setCurrentContainer:p,treeNodeType:T.DUAL_PANE,setBreadcrumbItems:f,selectableTypes:r,hideScopeSelector:!0,showScopeAsRootNode:!1})}),e.jsx(B,{}),e.jsxs(u,{className:"DetailsViewReflexElement",children:[e.jsx(C,{configuration:h,versionSelection:I.DISALLOWED,selected:m,isIdSelected:()=>!1,isSelectable:()=>!1,visibleTypes:r,selectableTypes:r,selectColumnType:"none",toggleSelection:a=>{Array.isArray(a)?c(a[0]):c(a)},enableSelectAll:!1,setCurrentContainer:p}),e.jsx(N,{...E})]})]},(!!s.width).toString())})})}try{i.displayName="EntityFileBrowser",i.__docgenInfo={description:`Entity File Browser.  Essentially an EntityFinder where selection will call back (to change the page to the target entity)
TODO: From EntityBadgeIcons, show unlink functionality (add onUnlink and onUnlinkError in EntityFileBrowserProps!) and showHasWiki.`,displayName:"EntityFileBrowser",props:{parentContainerId:{defaultValue:null,description:"",name:"parentContainerId",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(entity: Reference) => void"}}}}}catch{}try{i.displayName="EntityFileBrowser",i.__docgenInfo={description:`Entity File Browser.  Essentially an EntityFinder where selection will call back (to change the page to the target entity)
TODO: From EntityBadgeIcons, show unlink functionality (add onUnlink and onUnlinkError in EntityFileBrowserProps!) and showHasWiki.`,displayName:"EntityFileBrowser",props:{parentContainerId:{defaultValue:null,description:"",name:"parentContainerId",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(entity: Reference) => void"}}}}}catch{}export{i as E};
