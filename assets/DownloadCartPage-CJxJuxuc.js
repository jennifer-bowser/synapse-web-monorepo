import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{G as K,P as Q,l as O,v as X,bn as ee,bo as ae,J as ie,S as ne}from"./useFiles-D-hdekB1.js";import"./VerificationSubmission-BnFne12N.js";import"./StringUtils-CXT0ex8W.js";import{T as F,u as M,b as se,c as $,d as oe}from"./SynapseTableConstants-DxZpwr6Z.js";import{r as t}from"./index-Dl6G-zuu.js";import{F as G}from"./FullWidthAlert-CcMr282B.js";import{Z as te,_ as le,$ as re,a0 as ce,a1 as de,g as V,P as me,a2 as ue}from"./ConfirmationDialog-D8WDaezK.js";import{I as h}from"./IconSvg-DFjxuLWD.js";import"./OrientationBanner-FCMHzA9o.js";import{c as W}from"./calculateFriendlyFileSize-6vvdb7nH.js";import{f as q}from"./DateFormatter-Dyde7HgY.js";import{u as pe,g as ge,a as he,C as j,c as fe}from"./ColumnHeader-DHCJE50M.js";import{d as z}from"./dayjs.min-d18Up55D.js";import{B as xe,S as U}from"./LoadingScreen-Cpeaoznz.js";import"./SkeletonButton-CxjqZPxz.js";import"./SkeletonInlineBlock-IuszcGGK.js";import{S as ye}from"./SkeletonTable-3CagOipL.js";import"./SkeletonParagraph-B0g80d2Y.js";import{d as B}from"./ToastMessage-DSUU-S1f.js";import{U as we}from"./UserBadge-waeDB5bo.js";import{p as _}from"./pluralize-CVwSCrA2.js";import{B as b}from"./Box-DN73Q90z.js";import{T as C}from"./Tooltip-B_hdhCmy.js";import{S as je,T as be}from"./TextField-BDNZH-7j.js";import{B as k}from"./Button-jaxqGIs_.js";import{I as ve}from"./InputAdornment-DuWyrfBY.js";import{L as Se}from"./ActionRequiredCard-Bdi6i_tj.js";import{t as De}from"./times-BBjFlw2U.js";import{D as ke}from"./DeleteTwoTone-BaSxwZ9v.js";import{T as N}from"./Typography-Cqa7rFgc.js";function T(n){const{numFiles:i,numPackagableFiles:s,numBytes:a}=n,c=i-s,l=i===0,r=l?"SRC-inactive":"SRC-primary-text-color";return e.jsxs(b,{sx:{display:"flex",alignItems:"center",justifyContent:"start ",gap:"25px",fontWeight:"bold",svg:{mr:"5px"}},children:[e.jsx("span",{children:!l&&e.jsxs(e.Fragment,{children:[i.toLocaleString()," ",_("File",i)]})}),e.jsxs("span",{children:[e.jsx("span",{className:r,children:e.jsx(h,{wrap:!1,icon:"packagableFile"})}),!l&&e.jsxs(e.Fragment,{children:[s.toLocaleString()," ",_("File",s)," eligible for packaging"]})]}),a>0&&e.jsx(C,{title:"This is the total size of all files in the Download Cart that are available to download.",enterNextDelay:F,placement:"top",children:e.jsx("span",{className:"item",children:W(a)})}),c>0&&e.jsxs("span",{className:"item",children:[e.jsx("span",{className:"SRC-warning-color",children:e.jsx(h,{icon:"warningOutlined"})}),!l&&e.jsxs(e.Fragment,{children:[c.toLocaleString()," ",_("File",c)," ineligible for packaging"]})]})]})}try{T.displayName="DownloadDetails",T.__docgenInfo={description:"",displayName:"DownloadDetails",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numPackagableFiles:{defaultValue:null,description:"",name:"numPackagableFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!0,type:{name:"number"}}}}}catch{}function Ce(){const{data:n}=M({throwOnError:!0});return n?e.jsx("div",{children:e.jsx(T,{numBytes:n.sumOfFileSizesAvailableForDownload,numPackagableFiles:n.numberOfFilesAvailableForDownloadAndEligibleForPackaging,numFiles:n.numberOfFilesAvailableForDownload})}):null}const Ne="TESTING_TRASH_BTN_CLASS";function Ie(n,i){B(`${i} has been removed from your list.`,"success",{title:n})}function Fe(n){const{ctx:i}=n,{mutateAsync:s,isPending:a}=$({onSuccess:()=>B(`${i.row.original.fileName} has been removed from your list.`,"success",{title:"File Removed"})});return e.jsx(C,{title:"Remove from Download Cart",placement:"left",enterNextDelay:F,children:e.jsx("span",{className:"removeItem",children:e.jsx("button",{className:Ne,onClick:()=>{s({batchToRemove:[{fileEntityId:i.row.original.fileEntityId,versionNumber:i.row.original.versionNumber}]})},children:a?e.jsx(U,{}):e.jsx(h,{icon:"removeCircle"})})})})}const x=fe(),Pe=n=>{const{onCopySynIds:i,removeItem:s}=n;return[x.accessor("isEligibleForPackaging",{header:()=>e.jsx(e.Fragment,{}),cell:a=>e.jsxs("div",{children:[a.getValue()&&e.jsx(C,{title:"Eligible for packaging",enterNextDelay:F,placement:"right",children:e.jsx("span",{className:"eligibileIcon",children:e.jsx(h,{wrap:!1,icon:"packagableFile"})})}),!a.getValue()&&e.jsx(C,{title:"This file is ineligible for Web packaging because it is >100MB, or it is an external link, or it is not stored on Synapse native storage",enterNextDelay:F,placement:"right",children:e.jsx("span",{className:"ineligibileIcon",children:e.jsx(h,{wrap:!1,icon:"warningOutlined"})})})]}),enableResizing:!1,size:50}),x.accessor("fileName",{header:a=>e.jsx(j,{...a,title:"Name"}),cell:a=>e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:`${Q.PORTAL}Synapse:${a.row.original.fileEntityId}.${a.row.original.versionNumber}`,children:a.getValue()}),size:160}),x.accessor("fileSizeBytes",{header:a=>e.jsx(j,{...a,title:"Size"}),cell:a=>a.getValue()!=null?W(a.getValue()):e.jsx(e.Fragment,{}),size:100}),x.accessor("fileEntityId",{header:a=>e.jsx(j,{...a,title:"SynID",additionalButtons:e.jsx(te,{size:"small",onCopy:i})}),cell:a=>`${a.getValue()}.${a.row.original.versionNumber}`,size:100}),x.accessor("projectName",{header:a=>e.jsx(j,{...a,title:"Project"})}),x.accessor("addedOn",{header:a=>e.jsx(j,{...a,title:"Added On"}),cell:a=>q(z(a.getValue()))}),x.accessor("createdBy",{header:a=>e.jsx(j,{...a,title:"Created By"}),cell:a=>e.jsx(we,{userId:a.getValue()})}),x.accessor("createdOn",{header:a=>e.jsx(j,{...a,title:"Created On"}),cell:a=>q(z(a.getValue()))}),x.display({id:"actions",header:a=>e.jsx(j,{...a,title:"Actions"}),cell:a=>e.jsxs("div",{className:"actionsContainer",children:[e.jsx("span",{className:"downloadItem",children:e.jsx(le,{entityId:a.row.original.fileEntityId,entityVersionNumber:a.row.original.versionNumber,displayFileName:!1,onClickCallback:c=>{c||s({fileEntityId:a.row.original.fileEntityId,versionNumber:a.row.original.versionNumber},a.row.original.fileName,"File Downloaded")}})}),e.jsx("span",{className:"programmaticAccessItem",children:e.jsx(re,{entityId:a.row.original.fileEntityId,version:a.row.original.versionNumber})}),e.jsx(Fe,{ctx:a})]}),enableResizing:!1,size:140,meta:{textAlign:"center"}})]};function Ae(n){if(n.length===0)return;const i=n[0];let s="addedOn";return i.id==="fileName"?s="fileName":i.id==="fileSizeBytes"?s="fileSize":i.id==="fileEntityId"?s="synId":i.id==="projectName"?s="projectName":i.id==="addedOn"?s="addedOn":i.id==="createdBy"?s="createdBy":i.id==="createdOn"&&(s="createdOn"),{field:s,direction:i.desc?"DESC":"ASC"}}function _e(){const n=K(),[i,s]=t.useState(!1),[a,c]=t.useState([{desc:!0,id:"addedOn"}]),[l,r]=t.useState(void 0),{data:u,status:S,isFetchingNextPage:g,isLoading:D,hasNextPage:y,fetchNextPage:o,isError:p,error:m}=se(Ae(a),l);t.useEffect(()=>{p&&m&&n(m)},[p,m,n]);const{mutateAsync:f}=$(),v=t.useCallback(async(d,A,I)=>{await f({batchToRemove:[d]}),Ie(I,A)},[f]),w=t.useMemo(()=>(u==null?void 0:u.pages.flatMap(d=>d.page))??[],[u==null?void 0:u.pages]),Y=t.useMemo(()=>Pe({removeItem:(...d)=>{v(...d)},onCopySynIds:()=>{s(!0)}}),[v]),Z=pe({data:w,columns:Y,getCoreRowModel:ge(),manualSorting:!0,onSortingChange:c,state:{columnPinning:{right:["actions"]},sorting:a},columnResizeMode:"onChange",meta:{getRowClassNames(d){return d.original.isEligibleForPackaging?"":"ineligibleForPackaging"}}});t.useEffect(()=>{S==="success"&&!g&&y&&o&&i?o():!y&&i&&(()=>{const A=w.map(I=>`${I.fileEntityId}.${I.versionNumber}`).join(`
`);navigator.clipboard.writeText(A).then(()=>{B("Successfully copied to clipboard")}),s(!1)})()},[S,g,y,o,i,w]);const P=d=>d?d=="eligibleForPackaging"?"Only Eligible":"Only Ineligible":"All",J=[void 0,"eligibleForPackaging","ineligibleForPackaging"];return e.jsxs("div",{children:[e.jsx(xe,{show:i}),e.jsxs(b,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",alignItems:"center",py:"15px",rowGap:"15px"},children:[e.jsx(Ce,{}),e.jsxs(b,{sx:{display:"flex",gap:"10px",alignItems:"inherit",justifyContent:"end"},children:[e.jsx(b,{sx:{fontWeight:"700",fontSize:"14px"},children:"Filter Files By"}),e.jsx(b,{sx:{button:{width:"144px"}},children:e.jsx(je,{native:!0,fullWidth:!0,value:P(l),children:J.map(d=>e.jsx("option",{onClick:()=>{r(d)},children:P(d)},`${P(d)}-filter-option`))})})]})]}),w.length>0&&e.jsxs("div",{className:"DownloadListTableV2",children:[e.jsx(he,{table:Z,fullWidth:!1}),y&&e.jsx(b,{sx:{display:"flex",justifyContent:"right"},children:e.jsx(k,{variant:"contained",sx:{my:2,ml:"auto"},onClick:()=>{o()},disabled:g,startIcon:g?e.jsx(U,{}):void 0,children:g?"Loading...":"Show More"})})]}),D&&e.jsx(ye,{numCols:5,numRows:3})]})}function E(){const{accessToken:n}=O();return n?e.jsx(X,{children:e.jsx(_e,{})}):e.jsx(e.Fragment,{})}try{E.displayName="AvailableForDownloadTable",E.__docgenInfo={description:"Table of the files added to the Download Cart that are currently available for download.",displayName:"AvailableForDownloadTable",props:{}}}catch{}const Te="Please provide a package file name and try again.",R=n=>{const{accessToken:i}=O(),[s,a]=t.useState(!1),[c,l]=t.useState(""),[r,u]=t.useState(),[S,g]=t.useState(void 0),{onPackageCreation:D}=n,y=async p=>{if(p.preventDefault(),!c){u({message:Te,variant:"danger"});return}a(!0);try{const m=`${c}.zip`,f=await ee(m,i);g(f);const{resultFileHandleId:v}=f;try{window.location.href=await ae(v,i),l(""),g(void 0),D()}catch(w){console.error("Err on getFileHandleByIdURL = ",w)}}catch(m){u({message:m.reason,variant:"danger"})}finally{a(!1)}},o=p=>{l(p.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"CreatePackageV2",children:e.jsxs("div",{className:"createPackageStep",children:[e.jsx("span",{className:"createPackageTitle",children:"Create your Download Package"}),e.jsx("span",{className:"createPackageDescription",children:"Name your download package and select Download Package to get started."}),!s&&!S&&e.jsxs(b,{display:"flex",alignItems:"stretch",children:[e.jsx(be,{onChange:o,type:"text",placeholder:"PackageName",sx:{width:"233px"},InputProps:{endAdornment:e.jsx(ve,{position:"end",children:".zip"})}}),e.jsx(k,{variant:"contained",color:"primary",onClick:p=>{y(p)},sx:{marginLeft:"20px"},disabled:!c,children:"Download Package"})]}),s&&e.jsxs("div",{className:"creatingPackage",children:[e.jsx("span",{className:"spinner"}),e.jsx("span",{style:{marginLeft:5},children:"Creating package..."})]})]})}),e.jsx(G,{show:!!r,variant:r!=null&&r.variant?r.variant:"success",description:r==null?void 0:r.message,autoCloseAfterDelayInSeconds:10,onClose:()=>{u(void 0)}})]})};try{R.displayName="CreatePackageV2",R.__docgenInfo={description:"",displayName:"CreatePackageV2",props:{onPackageCreation:{defaultValue:null,description:"",name:"onPackageCreation",required:!0,type:{name:"() => void"}}}}}catch{}function L(n){const{onViewSharingSettingsClicked:i}=n,{data:s,isLoading:a}=oe({throwOnError:!0}),c=ce(s);return e.jsx(e.Fragment,{children:e.jsxs(b,{sx:{pt:5},display:"flex",flexDirection:"column",gap:3,children:[c.map((l,r)=>l?e.jsx(de,{action:l.action,count:l.count,onViewSharingSettingsClicked:i},r):!1),a&&De(3).map(l=>e.jsx(Se,{},l))]})})}try{L.displayName="DownloadListActionsRequired",L.__docgenInfo={description:"",displayName:"DownloadListActionsRequired",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}const Ee=`${ue}
dl_list_file_entities = syn.get_download_list()`,Re="synapse get-download-list";function H(n){const{accessToken:i}=O(),[s,a]=t.useState(0),[c,l]=t.useState(!1),[r,u]=t.useState(!1),[S,g]=t.useState(!1),[D,y]=t.useState(),{data:o,isLoading:p,isError:m,error:f,refetch:v}=M();if(t.useEffect(()=>{m&&f&&y(f)},[m,f]),t.useEffect(()=>{o&&o.numberOfFilesRequiringAction==0&&a(1)},[o]),D)return e.jsx(ie,{error:D});const w=async()=>{await ne.clearDownloadListV2(i),v()};return e.jsxs("div",{className:"DownloadCartPage",children:[e.jsx("div",{children:e.jsxs("div",{className:"pageHeader",children:[e.jsxs("div",{className:"grid",children:[e.jsx("h3",{className:"pageHeaderTitle",children:"Your Download Cart"}),e.jsx(C,{title:"Immediately removes all items from your download cart",enterNextDelay:300,placement:"right",children:e.jsx(k,{onClick:()=>{w()},variant:"text",color:"primary",startIcon:e.jsx(ke,{}),children:"Clear Your Download Cart"})})]}),e.jsx(N,{className:"description",variant:"body1",sx:{display:{xs:"none",md:"block"}},children:"Your added files can be found in the tabs below. Files requiring actions before download are listed in the Access Actions Required tab, while those ready for download can be found in the Download List tab."})]})}),e.jsx("div",{className:"tabs-container",children:e.jsx("div",{className:"container",children:e.jsxs("ul",{className:"nav nav-tabs",children:[e.jsx("li",{className:`nav-item ${s==0?"active":""}`,"aria-selected":s==0,children:e.jsxs("button",{onClick:()=>a(0),children:["Access Actions Required",!m&&!p&&o&&e.jsx("span",{className:"fileCount",children:o.totalNumberOfFiles-o.numberOfFilesAvailableForDownload})]})}),e.jsx("li",{className:`nav-item ${s==1?"active":""}`,"aria-selected":s==1,children:e.jsxs("button",{onClick:()=>a(1),children:["Download List",!m&&!p&&o&&e.jsx("span",{className:"fileCount",children:o.numberOfFilesAvailableForDownload})]})})]})})}),e.jsxs("div",{style:{display:s==0&&!m&&!p&&o?"block":"none"},children:[(o==null?void 0:o.numberOfFilesRequiringAction)&&o.numberOfFilesRequiringAction>0&&e.jsx("div",{children:e.jsx("div",{className:"actionsRequiredContainer container",children:e.jsx(L,{...n})})}),(o==null?void 0:o.numberOfFilesRequiringAction)===0&&e.jsx("div",{className:"placeholder",children:e.jsx("div",{children:"No actions are currently required."})})]}),s==1&&!m&&!p&&o&&e.jsxs("div",{children:[o.numberOfFilesAvailableForDownload>0&&e.jsxs("div",{className:"DownloadListTabContent",children:[e.jsx("div",{className:"subSectionOverviewContainer",children:e.jsxs("div",{className:"subSectionOverview container",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"headlineWithHelp",children:[e.jsxs(N,{variant:"headline3",sx:{mb:2},children:[e.jsx(h,{icon:"packagableFile"})," Web Download (.ZIP Packages)"]}),e.jsx(V,{markdownText:"This will allow you to create a .zip file that contains eligible files. Files greater that 100 MB, external links, or files which are not stored on Synapse native storage are ineligible. In most cases, ineligible files can be downloaded individually. External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-From-the-Synapse-UI.2004254837.html"})]}),e.jsx(N,{variant:"body1",component:"div",sx:{mb:2,display:{xs:"none",md:"block"}},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Eligible files will be added to .ZIP packages of up to 1GB in size"}),e.jsx("li",{children:"If you have more than 1GB, you can create multiple packages"}),e.jsx("li",{children:"Will only include files which are hosted on Synapse native storage"}),e.jsx("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),o.numberOfFilesAvailableForDownloadAndEligibleForPackaging>0&&e.jsx(k,{variant:"contained",onClick:()=>{l(!0)},startIcon:e.jsx(h,{icon:"download",wrap:!1}),children:"Download As .Zip Packages"}),o.numberOfFilesAvailableForDownloadAndEligibleForPackaging==0&&e.jsx(C,{title:"You cannot create a .zip package because there are no eligible files.",enterNextDelay:300,placement:"top",children:e.jsx("span",{children:e.jsx(k,{variant:"contained",disabled:!0,startIcon:e.jsx(h,{icon:"download",wrap:!1}),children:"Download As .Zip Packages"})})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"headlineWithHelp",children:[e.jsxs(N,{variant:"headline3",sx:{mb:2},children:[e.jsx(h,{icon:"code"})," Programmatic Download"]}),e.jsx(V,{markdownText:"This will provide syntax which you can enter into your programmatic client. It is suitable for large files (>100 MB), for packages > 1GB, and for files which aren’t stored on Synapse native storage (e.g. in a special AWS S3 or Google Cloud bucket).  External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-Programmatically.2003796248.html"})]}),e.jsx(N,{variant:"body1",component:"div",sx:{mb:2,display:{xs:"none",md:"block"}},children:e.jsxs("ul",{children:[e.jsx("li",{children:"Requires installation of a programmatic client (R, Python, CLI)"}),e.jsx("li",{children:"No limit to the file size or the size of the package that can be downloaded"}),e.jsx("li",{children:"Will include files which are hosted on and off Synapse native storage"}),e.jsx("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),e.jsx(k,{variant:"contained",onClick:()=>{u(!0)},startIcon:e.jsx(h,{icon:"code",wrap:!1}),children:"Create Programmatic Package"})]})]})}),e.jsxs("div",{className:"availableForDownloadTableContainer container",children:[c&&e.jsx(R,{onPackageCreation:()=>{g(!0),v()}}),e.jsx(E,{})]})]}),o.numberOfFilesAvailableForDownload===0&&e.jsx("div",{className:"placeholder",children:e.jsx("div",{children:"Your Download Cart is currently empty."})})]}),e.jsx(G,{show:S,variant:"success",title:"Package Created",description:"A package has been created with eligible files. The items contained in this .zip file have been removed from your list. If your package is over 1GB, you will need to create multiple packages.",autoCloseAfterDelayInSeconds:10,onClose:()=>{g(!1)}}),r&&e.jsx(me,{show:!0,onClose:()=>u(!1),title:"Download Programmatically",pythonCode:Ee,cliCode:Re})]})}try{H.displayName="DownloadCartPage",H.__docgenInfo={description:"Show the Download Cart page.",displayName:"DownloadCartPage",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}export{H as D};
