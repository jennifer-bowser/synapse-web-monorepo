import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{K as A,P as q,a as U}from"./SynapseConstants-D9O0ArTa.js";import{I}from"./IconSvg-BABzEMtP.js";import{U as D}from"./UserSearchBoxV2-4h5n4THz.js";import"./SkeletonButton-PiXzS80w.js";import"./SkeletonInlineBlock-D4fNjiAE.js";import{S as M}from"./SkeletonTable-B9cByFTb.js";import{S as T}from"./SkeletonParagraph-jKLsJPMJ.js";import{S as h}from"./Stack-CMgji9n-.js";import{S as _}from"./Skeleton-h9JRD3HJ.js";import{I as F}from"./IconSvgButton-DVNctAy5.js";import{U as Y}from"./UserOrTeamBadge-Bf0IGTpq.js";import{bb as R,am as H,bc as f}from"./useFiles-n9SbVdQm.js";import{T as X}from"./TextField-BJQecJUe.js";import{M as L}from"./MenuItem-CWmy7e8c.js";import{T as a}from"./Typography-u5-eOh5K.js";import{B as d}from"./Box-sTghsUmj.js";import{T as W}from"./ButtonBase-BN-dALdo.js";import{C as z}from"./Collapse-CmkIepef.js";import{B as G}from"./Button-mTo7xxsU.js";import{T as K}from"./Tooltip-DghXNkD2.js";import{F as J}from"./FormControlLabel-UUENBpmY.js";import{C as Q}from"./Checkbox-Dz9GUn9M.js";import{n as Z}from"./noop-DX6rZLP_.js";function $(){return e.jsxs(h,{gap:2,role:"progressbar",children:[e.jsx(_,{height:50,width:200}),e.jsx(T,{numRows:2}),e.jsx(M,{numCols:2,numRows:4,rowHeight:"30px"}),e.jsx(_,{height:50,width:100}),e.jsx(T,{numRows:2})]})}const p="CUSTOM",g="Custom";function y(i){const{currentAccessType:r,availablePermissionLevels:u,onChange:t}=i,o=R(r),c=o==null;return e.jsxs(X,{value:c?p:o,onChange:s=>{const l=H(s.target.value);t(l||r)},fullWidth:!0,select:!0,SelectProps:{renderValue:s=>s==p?g:f[s]},size:"small",children:[Object.values(u).map(s=>e.jsx(L,{value:s,children:e.jsx(a,{variant:"smallText1",noWrap:!0,children:f[s]})},s)),c&&e.jsx(L,{value:p,children:e.jsx(a,{variant:"smallText1",noWrap:!0,children:g})})]})}try{y.displayName="PermissionLevelMenu",y.__docgenInfo={description:"",displayName:"PermissionLevelMenu",props:{currentAccessType:{defaultValue:null,description:"",name:"currentAccessType",required:!0,type:{name:"ACCESS_TYPE[]"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:"PermissionLevel[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessTypes: ACCESS_TYPE[]) => void"}}}}}catch{}function v(i){const{accessType:r}=i;return f[R(r)]||"Custom"}try{v.displayName="ReadOnlyPermissionLevel",v.__docgenInfo={description:"",displayName:"ReadOnlyPermissionLevel",props:{accessType:{defaultValue:null,description:"",name:"accessType",required:!0,type:{name:"ACCESS_TYPE[]"}}}}}catch{}const ee="Remove from AR Permissions";function x(i){const{resourceAccess:r,availablePermissionLevels:u,canChangePermission:t,showDeleteButton:o,onChange:c,onRemove:s,displayedPermissionLevelOverride:l}=i;return e.jsx(e.Fragment,{children:e.jsxs(h,{direction:"row",justifyContent:"space-between",alignItems:"center",gap:"10px",py:"6px",role:"row",children:[e.jsx(a,{fontSize:"16px",lineHeight:"20px",children:e.jsx(Y,{principalId:r.principalId,openLinkInNewTab:!0})}),e.jsxs(h,{direction:"row",gap:"10px",alignItems:"center",width:"200px",flexShrink:0,children:[t?e.jsx(y,{currentAccessType:r.accessType,availablePermissionLevels:u,onChange:c}):e.jsx(a,{variant:"smallText1",flexGrow:1,children:l??e.jsx(v,{accessType:r.accessType})}),o&&e.jsx(F,{"aria-label":ee,onClick:()=>s(),icon:"delete",sx:{"&:hover":{color:"error.main"}}})]})]})})}try{x.displayName="ResourceAccessItem",x.__docgenInfo={description:"",displayName:"ResourceAccessItem",props:{canChangePermission:{defaultValue:null,description:"",name:"canChangePermission",required:!0,type:{name:"boolean"}},showDeleteButton:{defaultValue:null,description:"",name:"showDeleteButton",required:!0,type:{name:"boolean"}},resourceAccess:{defaultValue:null,description:"",name:"resourceAccess",required:!0,type:{name:"ResourceAccess"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:"PermissionLevel[]"}},displayedPermissionLevelOverride:{defaultValue:null,description:"",name:"displayedPermissionLevelOverride",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessType: ACCESS_TYPE[]) => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const ne="Add a user or team",re="Make Public",se="Remove Public Access",ie="Notify people via email";function j(i){const{resourceAccessList:r,availablePermissionLevels:u,canEdit:t,canRemoveEntry:o=t,isLoading:c=!1,emptyText:s,onAddPrincipalToAcl:l,updateResourceAccessItem:E,removeResourceAccessItem:C,showAddRemovePublicButton:w,showNotifyCheckbox:S,notifyCheckboxValue:b,onNotifyCheckboxChange:V=Z,displayedPermissionLevelOverride:P}=i;if(c)return e.jsx($,{});const B=!!r.find(n=>A.includes(n.principalId))?{startIcon:e.jsx(I,{icon:"close",wrap:!1}),children:se,onClick:()=>{A.forEach(n=>{C(n)})}}:{startIcon:e.jsx(I,{icon:"public",wrap:!1}),children:re,onClick:()=>{l(q),l(U)}};return e.jsxs(d,{children:[e.jsxs(d,{mb:"30px",children:[e.jsx(a,{variant:"headline3",mb:"10px",children:"Users and Teams with Permissions"}),r.length===0?e.jsx(a,{variant:"body1Italic",children:s}):e.jsx(W,{children:r.map(n=>{const m=typeof t=="function"?t(n):t,N=typeof o=="function"?o(n):o,O=P?P(n):void 0;return e.jsx(z,{children:e.jsx(x,{resourceAccess:n,availablePermissionLevels:u,canChangePermission:m,displayedPermissionLevelOverride:O,showDeleteButton:N,onChange:k=>E(n.principalId,k),onRemove:()=>C(n.principalId)})},n.principalId)})})]}),t&&e.jsxs(d,{children:[e.jsx(a,{variant:"headline3",mb:"10px",children:"Add More"}),e.jsx(a,{sx:{variant:"body1",lineHeight:"20px",fontStyle:"italic",color:"text.secondary"},mb:"20px",children:"Search for a username or team to add. You can search by username, first or last names, or team name."}),e.jsxs(d,{children:[e.jsx(a,{component:"label",variant:"smallText2",htmlFor:"reviewer-search",children:ne}),e.jsx(D,{value:null,inputId:"reviewer-search",placeholder:"Username, name (first and last) or team name.",onChange:n=>{const m=parseInt(n||"");m&&l(m)}})]}),e.jsxs(d,{display:"flex",justifyContent:"space-between",gap:2,children:[e.jsx(d,{children:w&&e.jsx(G,{size:"small",variant:"outlined",...B})}),S&&e.jsx(K,{title:"Select to notify newly added people that this item has been shared with them",children:e.jsx(J,{sx:{mr:0},control:e.jsx(Q,{value:b,onChange:()=>V(!b)}),label:e.jsx(a,{variant:"smallText1",children:ie})})})]})]}),!t&&e.jsx(a,{variant:"body1",children:"You do not have sufficient privileges to modify the sharing settings."})]})}try{j.displayName="AclEditor",j.__docgenInfo={description:"",displayName:"AclEditor",props:{resourceAccessList:{defaultValue:null,description:"",name:"resourceAccessList",required:!0,type:{name:"ResourceAccess[]"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:"PermissionLevel[]"}},canEdit:{defaultValue:null,description:"If true, the user can edit the ACL. If a function, it will be called with the ResourceAccess to determine if the user can edit it.",name:"canEdit",required:!0,type:{name:"boolean | ((resourceAccess: ResourceAccess) => boolean)"}},canRemoveEntry:{defaultValue:null,description:"If true, the user can remove any entry from the ACL. a function, it will be called with the ResourceAccess to determine if the user can remove it.\nIf undefined, then the behavior will fall back to the value of `canEdit`",name:"canRemoveEntry",required:!1,type:{name:"boolean | ((resourceAccess: ResourceAccess) => boolean)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:null,description:"",name:"emptyText",required:!0,type:{name:"ReactNode"}},onAddPrincipalToAcl:{defaultValue:null,description:"",name:"onAddPrincipalToAcl",required:!0,type:{name:"(id: number) => void"}},updateResourceAccessItem:{defaultValue:null,description:"",name:"updateResourceAccessItem",required:!0,type:{name:"(principalId: number, accessType: ACCESS_TYPE[]) => void"}},removeResourceAccessItem:{defaultValue:null,description:"",name:"removeResourceAccessItem",required:!0,type:{name:"(principalId: number) => void"}},showAddRemovePublicButton:{defaultValue:null,description:"If true, shows a button to add/remove AUTHENTICATED and PUBLIC groups when in edit mode",name:"showAddRemovePublicButton",required:!0,type:{name:"boolean"}},showNotifyCheckbox:{defaultValue:null,description:"If present, a checkbox to notify those added to the email will be shown.",name:"showNotifyCheckbox",required:!0,type:{name:"boolean"}},notifyCheckboxValue:{defaultValue:null,description:"",name:"notifyCheckboxValue",required:!1,type:{name:"boolean"}},onNotifyCheckboxChange:{defaultValue:null,description:"",name:"onNotifyCheckboxChange",required:!1,type:{name:"((checked: boolean) => void)"}},displayedPermissionLevelOverride:{defaultValue:null,description:`In special cases, can be used to display a permission level that is different from the typical permission levels.
For example, the PUBLIC group "Can download" an entity if they have READ access and the entity is marked as
"open data" (open data status is not captured in the ResourceAccess)`,name:"displayedPermissionLevelOverride",required:!1,type:{name:"((resourceAccess: ResourceAccess) => string)"}}}}}catch{}export{j as A,$ as a};
