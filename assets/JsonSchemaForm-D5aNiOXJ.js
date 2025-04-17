import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{a as X,b as S,A as Ae,e as je,f as Q,l as Ve,h as Fe,T as x,i as Ce,M as we,v as Ie}from"./MuiForm-DonF0QSo.js";import{r as j}from"./index-Dl6G-zuu.js";import"./styled-GqwmQbHR.js";import{G as q}from"./Grid-BA58v7GB.js";import{B as $}from"./Box-sTghsUmj.js";import{ac as Ne,ad as Re}from"./ConfirmationDialog-DQiaFQl5.js";import{C as ae}from"./Collapse-CmkIepef.js";import{T as Ee}from"./Tooltip-DghXNkD2.js";import{I as ne}from"./IconButton-xnDYVMXw.js";import{c as z}from"./createSvgIcon-IuIKk-AJ.js";import{H as De}from"./ColumnHeader-CX5fz7Qs.js";import{i as ie}from"./useQuery-BiN9FESP.js";import{B as oe}from"./Button-mTo7xxsU.js";import{I as le}from"./InputLabel-CewkyxXc.js";import{T as ke}from"./TextField-BJQecJUe.js";import{d as Be}from"./ContentCopy-Brkz2Tow.js";import{C as Pe}from"./Close-COozyF2X.js";import{A as Le}from"./ArrowUpward-BCH28Kj_.js";import{T as Z}from"./Typography-u5-eOh5K.js";import{x as Je}from"./StringUtils-DBSsSsIU.js";import{g as Oe,f as Ue}from"./ThemesPlot-CfTX7Dfp.js";import{A as Me}from"./Alert-By3H5ehm.js";import{L as We}from"./List-DXimupJH.js";import{L as He}from"./ListItem-CtDr7Rpr.js";import{F as Xe}from"./Input-DLiaXUdI.js";import{d as $e}from"./dayjs.min-d18Up55D.js";import{D as ze}from"./DateTimePicker-CHpmEe_4.js";const Ge=z(t.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),Ke=z(t.jsx("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward"),Ye=z(t.jsx("path",{d:"M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"}),"HelpOutline");function C(e){const{idSchema:r,description:n,registry:a,schema:i,uiSchema:s}=e,o=X(s,a.globalUiOptions),{label:l}=o;if(l===!1)return null;const d=S("DescriptionFieldTemplate",a,o),y=`${r.$id}__description`;return t.jsx(d,{id:y,description:n??"",schema:i,uiSchema:s,registry:a})}try{C.displayName="ArrayFieldDescriptionTemplate",C.__docgenInfo={description:"The `ArrayFieldDescriptionTemplate` component renders a `DescriptionFieldTemplate` with an `id` derived from\nthe `idSchema`.\n\nIdentical to",displayName:"ArrayFieldDescriptionTemplate",props:{schema:{defaultValue:null,description:"The schema object for the field being described",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this description field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}},description:{defaultValue:null,description:"The description of the field being rendered",name:"description",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},idSchema:{defaultValue:null,description:"The idSchema of the field in the hierarchy",name:"idSchema",required:!0,type:{name:"FieldId | (FieldId & { [key in keyof T]?: IdSchema<T[key]> | undefined; })"}}}}}catch{}function w(e){const{children:r,disabled:n,hasToolbar:a,hasCopy:i,hasMoveDown:s,hasMoveUp:o,hasRemove:l,index:d,onCopyIndexClick:y,onDropIndexClick:f,onReorderClick:c,readonly:m,uiSchema:h,registry:p,onAddIndexClick:b}=e,{CopyButton:T,MoveDownButton:v,MoveUpButton:u,RemoveButton:G,AddButton:F}=p.templates.ButtonTemplates;return t.jsxs(q,{container:!0,gap:2,justifyContent:"space-between",className:"array-item",children:[t.jsx(q,{item:!0,xs:!0,children:t.jsx($,{mb:2,children:r})}),a&&t.jsxs(q,{item:!0,sx:{alignSelf:"start",my:1},display:"flex",flexDirection:"row",gap:1,justifyContent:"flex-start",children:[(o||s)&&t.jsx(u,{disabled:n||m||!o,onClick:c(d,d-1),uiSchema:h,registry:p}),(o||s)&&t.jsx(v,{disabled:n||m||!s,onClick:c(d,d+1),uiSchema:h,registry:p}),i&&t.jsx(T,{disabled:n||m,onClick:y(d),uiSchema:h,registry:p}),l&&t.jsx(G,{"aria-label":"Remove",disabled:n||m,onClick:f(d),uiSchema:h,registry:p}),t.jsx(F,{disabled:n||m,uiSchema:h,registry:p,"aria-label":"Add Item",onClick:b(d+1)})]})]})}try{w.displayName="ArrayFieldItemTemplate",w.__docgenInfo={description:"The `ArrayFieldItemTemplate` component is the template used to render an items of an array.",displayName:"ArrayFieldItemTemplate",props:{children:{defaultValue:null,description:"The html for the item's content",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"The className string",name:"className",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"A boolean value stating if the array item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},canAdd:{defaultValue:null,description:"A boolean value stating whether new items can be added to the array",name:"canAdd",required:!0,type:{name:"boolean"}},hasCopy:{defaultValue:null,description:"A boolean value stating whether the array item can be copied, assumed false if missing",name:"hasCopy",required:!0,type:{name:"boolean"}},hasMoveDown:{defaultValue:null,description:"A boolean value stating whether the array item can be moved down",name:"hasMoveDown",required:!0,type:{name:"boolean"}},hasMoveUp:{defaultValue:null,description:"A boolean value stating whether the array item can be moved up",name:"hasMoveUp",required:!0,type:{name:"boolean"}},hasRemove:{defaultValue:null,description:"A boolean value stating whether the array item can be removed",name:"hasRemove",required:!0,type:{name:"boolean"}},hasToolbar:{defaultValue:null,description:"A boolean value stating whether the array item has a toolbar",name:"hasToolbar",required:!0,type:{name:"boolean"}},index:{defaultValue:null,description:"A number stating the index the array item occurs in `items`",name:"index",required:!0,type:{name:"number"}},totalItems:{defaultValue:null,description:"A number stating the total number `items` in the array",name:"totalItems",required:!0,type:{name:"number"}},onAddIndexClick:{defaultValue:null,description:"Returns a function that adds a new item at `index`",name:"onAddIndexClick",required:!0,type:{name:"(index: number) => (event?: any) => void"}},onCopyIndexClick:{defaultValue:null,description:"Returns a function that copies the item at `index` into the position at `index + 1`",name:"onCopyIndexClick",required:!0,type:{name:"(index: number) => (event?: any) => void"}},onDropIndexClick:{defaultValue:null,description:"Returns a function that removes the item at `index`",name:"onDropIndexClick",required:!0,type:{name:"(index: number) => (event?: any) => void"}},onReorderClick:{defaultValue:null,description:"Returns a function that swaps the items at `index` with `newIndex`",name:"onReorderClick",required:!0,type:{name:"(index: number, newIndex: number) => (event?: any) => void"}},readonly:{defaultValue:null,description:"A boolean value stating if the array item is read-only",name:"readonly",required:!1,type:{name:"boolean"}},key:{defaultValue:null,description:"A stable, unique key for the array item",name:"key",required:!0,type:{name:"string"}},schema:{defaultValue:null,description:"The schema object for this array item",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this array item",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function A(e){const{hideLabel:r=!1,fieldLabel:n,description:a,registry:i,children:s}=e,o=i.formContext.descriptionVariant||"popover",[l,d]=j.useState(!1),y=t.jsx(Ee,{title:"More Info",children:t.jsx(ne,{onClick:c=>{c.preventDefault(),d(!l)},"aria-expanded":l,size:"small",children:t.jsx(Ye,{color:"primary",sx:{width:"16px",height:"16px"}})})}),f=t.jsx(Ne,{popoverContent:a,maxWidth:"350px",children:t.jsx(De,{className:"HelpButton"})});return t.jsxs(t.Fragment,{children:[!r&&t.jsxs("div",{className:"LabelContainer",children:[n,a&&o==="popover"&&f,a&&o==="expand"&&y]}),s,!r&&o==="expand"&&t.jsx(ae,{className:"field-description",in:l,children:a})]})}try{A.displayName="RJSFInputLabelWrapper",A.__docgenInfo={description:"Component that handles rendering our custom input label and description fields for RJSF.",displayName:"RJSFInputLabelWrapper",props:{hideLabel:{defaultValue:{value:"false"},description:"If true, the label will not be shown",name:"hideLabel",required:!1,type:{name:"boolean"}},fieldLabel:{defaultValue:null,description:"The rendered label of the field",name:"fieldLabel",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"The rendered description of the field",name:"description",required:!0,type:{name:"ReactNode"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}const _=j.createContext(void 0);function ee(e){return t.jsx(_.Provider,{value:e.value,children:e.children})}const te=_.Consumer;function Qe(){return j.useContext(_)}try{ee.displayName="AdditionalPropertyContextProvider",ee.__docgenInfo={description:"",displayName:"AdditionalPropertyContextProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"AdditionalPropertyContextType"}}}}}catch{}try{_.displayName="AdditionalPropertyContext",_.__docgenInfo={description:"The `AdditionalPropertyContext` is a custom context object used to pass the `dropProperty` handler to the items within\na particular additional property.\n\nIn RJSF, dropping an entire additional property is handled at the `object` level. In the Synapse Annotations UI,\nwe treat all additional properties (a.k.a. custom annotations) as arrays, and render the delete control at the `array`\nlevel. RJSF does not normally provide the drop property handler at the `array` level, so we capture it and pass it\nalong using this context.",displayName:"AdditionalPropertyContext",props:{}}}catch{}try{te.displayName="AdditionalPropertyContextConsumer",te.__docgenInfo={description:"",displayName:"AdditionalPropertyContextConsumer",props:{}}}catch{}function I(e){const{idSchema:r,uiSchema:n,items:a,registry:i,schema:s,formContext:o}=e,l=X(n),d=S("ArrayFieldTitleTemplate",i,l),y=S("ArrayFieldDescriptionTemplate",i,l),f=S("ArrayFieldItemTemplate",i,l),c=!!e.schema[Ae],m=Qe();return j.useEffect(()=>{e.items.length===0&&!(o!=null&&o.allowRemovingLastItemInArray)&&e.onAddClick()},[e,o==null?void 0:o.allowRemovingLastItemInArray]),t.jsx($,{id:r.$id,className:e.className,children:t.jsxs(A,{fieldLabel:t.jsx(d,{...e}),description:t.jsx(y,{idSchema:r,schema:s,description:(l.description||s.description)??"",uiSchema:n,registry:i}),registry:i,children:[(!a||ie(a))&&t.jsx(oe,{variant:"outlined",onClick:e.onAddClick,children:"Add item"}),a&&t.jsx(t.Fragment,{children:a.map(({key:h,index:p,...b})=>t.jsx(f,{index:p,...b,hasRemove:c||a.length>1||!!(o!=null&&o.allowRemovingLastItemInArray),onDropIndexClick:c&&a.length==1&&m?()=>T=>{m.dropProperty(T)}:b.onDropIndexClick},h))})]})})}try{I.displayName="ArrayFieldTemplate",I.__docgenInfo={description:"The `ArrayFieldTemplate` component is the template used to render all items in an array.",displayName:"ArrayFieldTemplate",props:{canAdd:{defaultValue:null,description:"A boolean value stating whether new elements can be added to the array",name:"canAdd",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The className string",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"A boolean value stating if the array is disabled",name:"disabled",required:!1,type:{name:"boolean"}},idSchema:{defaultValue:null,description:"An object containing the id for this object & ids for its properties",name:"idSchema",required:!0,type:{name:"FieldId | (FieldId & { [key in keyof T]?: IdSchema<T[key]> | undefined; })"}},items:{defaultValue:null,description:"An array of objects representing the items in the array",name:"items",required:!0,type:{name:"ArrayFieldTemplateItemType<T, S, F>[]"}},onAddClick:{defaultValue:null,description:"A function that adds a new item to the array",name:"onAddClick",required:!0,type:{name:"(event?: any) => void"}},readonly:{defaultValue:null,description:"A boolean value stating if the array is read-only",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"A boolean value stating if the array is required",name:"required",required:!1,type:{name:"boolean"}},hideError:{defaultValue:null,description:"A boolean value stating if the field is hiding its errors",name:"hideError",required:!1,type:{name:"boolean"}},schema:{defaultValue:null,description:"The schema object for this array",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this array field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},title:{defaultValue:null,description:"A string value containing the title for the array",name:"title",required:!0,type:{name:"string"}},formContext:{defaultValue:null,description:"The `formContext` object that was passed to Form",name:"formContext",required:!1,type:{name:"CustomFormContext"}},formData:{defaultValue:null,description:"The formData for this array",name:"formData",required:!1,type:{name:"T"}},errorSchema:{defaultValue:null,description:"The tree of errors for this field and its children",name:"errorSchema",required:!1,type:{name:"ErrorSchema<T>"}},rawErrors:{defaultValue:null,description:"An array of strings listing all generated error messages from encountered errors for this widget",name:"rawErrors",required:!1,type:{name:"string[]"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function N(e){const{title:r,required:n}=e;return t.jsxs(le,{children:[r,n&&t.jsx("span",{className:"required",children:"*"})]})}try{N.displayName="ArrayFieldTitleTemplate",N.__docgenInfo={description:"Custom title template for array fields.",displayName:"ArrayFieldTitleTemplate",props:{required:{defaultValue:null,description:"A boolean value stating if the field is required",name:"required",required:!1,type:{name:"boolean"}},schema:{defaultValue:null,description:"The schema object for the field being titled",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this title field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}},title:{defaultValue:null,description:"The title for the field being rendered",name:"title",required:!1,type:{name:"string"}},idSchema:{defaultValue:null,description:"The idSchema of the field in the hierarchy",name:"idSchema",required:!0,type:{name:"FieldId | (FieldId & { [key in keyof T]?: IdSchema<T[key]> | undefined; })"}}}}}catch{}const Ze=["date","datetime-local","file","time"];function R(e){const{id:r,name:n,placeholder:a,required:i,readonly:s,disabled:o,type:l,label:d,hideLabel:y,hideError:f,value:c,onChange:m,onChangeOverride:h,onBlur:p,onFocus:b,autofocus:T,options:v,schema:u,uiSchema:G,rawErrors:F=[],formContext:rt,registry:ce,InputLabelProps:K,...me}=e,pe=!0,he=je(u,l,v),{step:ye,min:fe,max:ge,...be}=he,Te={inputProps:{step:ye,min:fe,max:ge,...u.examples?{list:Q(r)}:void 0},...be},Se=({target:{value:g}})=>m(g===""?v.emptyValue:g),_e=({target:{value:g}})=>p(r,g),xe=({target:{value:g}})=>b(r,g),ve=Ze.includes(l)?{...K,shrink:!0}:K;let Y;(u.default||u.const)&&(Y=JSON.stringify(u.default||u.const)+" (derived)");const qe=ce.formContext.showDerivedAnnotationPlaceholder&&Y||a;return t.jsxs(t.Fragment,{children:[t.jsx(ke,{id:r,name:r,placeholder:qe,label:Ve(d||void 0,pe,!1),autoFocus:T,required:!1,disabled:o||s,...Te,value:c||c===0?c:"",error:F.length>0,onChange:h||Se,onBlur:_e,onFocus:xe,InputLabelProps:ve,...me,inputProps:{"aria-label":r},"aria-describedby":Fe(r,!!u.examples)}),Array.isArray(u.examples)&&t.jsx("datalist",{id:Q(r),children:u.examples.concat(u.default&&!u.examples.includes(u.default)?[u.default]:[]).map(g=>t.jsx("option",{value:g},g))})]})}try{R.displayName="BaseInputTemplate",R.__docgenInfo={description:"The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the `core` theme.\nIt is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.\nIt can be customized/overridden for other themes or individual implementations as needed.",displayName:"BaseInputTemplate",props:{}}}catch{}const se={minWidth:"unset",width:"40px",height:"40px"};function E({uiSchema:e,registry:r,...n}){const{translateString:a}=r;return t.jsx(oe,{title:a(x.AddItemButton),...n,color:"primary",variant:"contained",sx:se,children:t.jsx(Ge,{})})}function et(e){switch(e){case"copy":return t.jsx(Be,{fontSize:"inherit"});case"moveUp":return t.jsx(Le,{fontSize:"inherit"});case"moveDown":return t.jsx(Ke,{fontSize:"inherit"});case"remove":return t.jsx(Pe,{fontSize:"inherit"});default:throw new Error(`Unexpected iconType ${e}`)}}function V(e){const{iconType:r,buttonType:n,uiSchema:a,...i}=e;return t.jsx(ne,{...i,color:"default",sx:se,children:et(n)})}function D(e){const{registry:{translateString:r}}=e;return t.jsx(V,{title:r(x.RemoveButton),...e,buttonType:"remove"})}function k(e){const{registry:{translateString:r}}=e;return t.jsx(V,{title:r(x.CopyButton),...e,buttonType:"copy"})}function B(e){const{registry:{translateString:r}}=e;return t.jsx(V,{title:r(x.MoveUpButton),...e,buttonType:"moveUp"})}function P(e){const{registry:{translateString:r}}=e;return t.jsx(V,{title:r(x.MoveDownButton),...e,buttonType:"moveDown"})}const tt={AddButton:E,RemoveButton:D,MoveUpButton:B,MoveDownButton:P,CopyButton:k};try{E.displayName="AddButton",E.__docgenInfo={description:"",displayName:"AddButton",props:{iconType:{defaultValue:null,description:"An alternative specification for the type of the icon button",name:"iconType",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The name representation or actual react element implementation for the icon",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},uiSchema:{defaultValue:null,description:"The uiSchema for this widget",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}try{D.displayName="RemoveButton",D.__docgenInfo={description:"",displayName:"RemoveButton",props:{iconType:{defaultValue:null,description:"An alternative specification for the type of the icon button",name:"iconType",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The name representation or actual react element implementation for the icon",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},uiSchema:{defaultValue:null,description:"The uiSchema for this widget",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}try{k.displayName="CopyButton",k.__docgenInfo={description:"",displayName:"CopyButton",props:{iconType:{defaultValue:null,description:"An alternative specification for the type of the icon button",name:"iconType",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The name representation or actual react element implementation for the icon",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},uiSchema:{defaultValue:null,description:"The uiSchema for this widget",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}try{B.displayName="MoveUpButton",B.__docgenInfo={description:"",displayName:"MoveUpButton",props:{iconType:{defaultValue:null,description:"An alternative specification for the type of the icon button",name:"iconType",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The name representation or actual react element implementation for the icon",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},uiSchema:{defaultValue:null,description:"The uiSchema for this widget",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}try{P.displayName="MoveDownButton",P.__docgenInfo={description:"",displayName:"MoveDownButton",props:{iconType:{defaultValue:null,description:"An alternative specification for the type of the icon button",name:"iconType",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The name representation or actual react element implementation for the icon",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},uiSchema:{defaultValue:null,description:"The uiSchema for this widget",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function de(e){if(Array.isArray(e)||typeof e=="boolean")return"unknown";const{type:r,enum:n}=e;return r==="array"&&typeof e.items=="object"?`List of ${de(e.items)}`:n?"enumeration":Array.isArray(r)?r.reduce((a,i)=>`${a}, ${i}`,""):r||"unknown"}function L(e){const{description:r,schema:n}=e,a=de(n);return t.jsx(ae,{className:"field-description",in:!0,children:t.jsx($,{component:"table",className:"FieldDescriptionTable",mb:1,children:t.jsxs("tbody",{children:[r&&t.jsxs("tr",{children:[t.jsx("th",{children:"Description"}),t.jsx("td",{children:r})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"Type"}),t.jsx("td",{children:a})]})]})})})}try{L.displayName="FieldDescriptionTable",L.__docgenInfo={description:"",displayName:"FieldDescriptionTable",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}}}}}catch{}function J(e){const{description:r,schema:n={},registry:a}=e,i=a.formContext.descriptionFormat||"string";return n.type==="object"?t.jsx(Z,{variant:"body1",sx:{my:2},children:r}):i==="string"?t.jsx(Z,{variant:"body1",children:r}):t.jsx(L,{schema:n,description:r})}try{J.displayName="DescriptionFieldTemplate",J.__docgenInfo={description:"",displayName:"DescriptionFieldTemplate",props:{id:{defaultValue:null,description:"The id of the field description in the hierarchy",name:"id",required:!0,type:{name:"string"}},schema:{defaultValue:null,description:"The schema object for the field being described",name:"schema",required:!0,type:{name:"RJSFSchema"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this description field",name:"uiSchema",required:!1,type:{name:"UiSchema<any, RJSFSchema, any>"}},description:{defaultValue:null,description:"The description of the field being rendered",name:"description",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<any, RJSFSchema, any>"}}}}}catch{}function It(e){const r={};return Object.keys(e).forEach(n=>{let a=e[n];Array.isArray(a)?(a=a.filter(i=>i!=null),ie(a)||(r[n]=a)):r[n]=a}),r}function Nt(e={}){return Object.keys(e).reduce((r,n)=>(e[n]!==null&&(r[n]=e[n]),r),{})}function ue(e){var r,n;return(r=e.property)!=null&&r.startsWith("[")?e.property.substring(2,e.property.length-2):(n=e.property)!=null&&n.startsWith(".")?e.property.substring(1):e.property||""}function Rt(e){return r=>{const n=Oe(r,a=>a.property);return Object.keys(n).map(a=>{const i=n[a];i.some(l=>l.message==="should match some schema in anyOf")&&i.every(l=>l.message==="should be string"||l.message==="should be equal to constant"?!0:l.message==="should match some schema in anyOf")&&i.length>0&&(i[0].message="should be equal to one of the allowed values",n[a]=[i[0]])}),r=Ue(n),e&&(r=r.map(a=>{const i=ue(a);return i&&Je[e].includes(i)&&(a.message=`"${i}" is a reserved internal key and cannot be used.`),a})),r}}function Et(e){return Array.isArray(e)?e:typeof e=="string"?e.split(",").map(r=>r.trim()):[e]}function Dt(e,r){return!!(e&&Object.keys(e).length>0&&r)}function O(e){const{errors:r}=e;return t.jsxs(Me,{severity:"error",sx:{my:2},children:[t.jsx("b",{children:"Validation errors found:"}),t.jsx("ul",{children:r.map((n,a)=>t.jsxs("li",{children:[t.jsx("b",{children:`${ue(n)}: `})," ",`${n.message}`]},a))})]})}try{O.displayName="ErrorListTemplate",O.__docgenInfo={description:"",displayName:"ErrorListTemplate",props:{errorSchema:{defaultValue:null,description:"The errorSchema constructed by `Form`",name:"errorSchema",required:!0,type:{name:"ErrorSchema<T>"}},errors:{defaultValue:null,description:"An array of the errors",name:"errors",required:!0,type:{name:"RJSFValidationError[]"}},formContext:{defaultValue:null,description:"The `formContext` object that was passed to `Form`",name:"formContext",required:!1,type:{name:"GenericObjectType"}},schema:{defaultValue:null,description:"The schema that was passed to `Form`",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema that was passed to `Form`",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function U(e){const{errors:r=[],idSchema:n}=e;if(r.length===0)return null;const a=Ce(n);return t.jsx(We,{dense:!0,disablePadding:!0,children:r.map((i,s)=>t.jsx(He,{disableGutters:!0,children:t.jsx(Xe,{id:a,sx:{color:"error.main"},children:i})},s))})}try{U.displayName="FieldErrorTemplate",U.__docgenInfo={description:"The `FieldErrorTemplate` component renders the errors local to the particular field",displayName:"FieldErrorTemplate",props:{errorSchema:{defaultValue:null,description:"The errorSchema constructed by `Form`",name:"errorSchema",required:!1,type:{name:"ErrorSchema<T>"}},errors:{defaultValue:null,description:"An array of the errors",name:"errors",required:!1,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},idSchema:{defaultValue:null,description:"The tree of unique ids for every child field",name:"idSchema",required:!0,type:{name:"FieldId | (FieldId & { [key in keyof T]?: IdSchema<T[key]> | undefined; })"}},schema:{defaultValue:null,description:"The schema that was passed to field",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema that was passed to field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function M(e){const{id:r,label:n,children:a,errors:i,help:s,description:o,hidden:l,required:d,displayLabel:y,registry:f,uiSchema:c,schema:m}=e,h=X(c),p=S("WrapIfAdditionalTemplate",f,h);return l?t.jsx("div",{className:"hidden",children:a}):t.jsxs(p,{...e,children:[t.jsxs(A,{hideLabel:!(y||m.type==="boolean"),fieldLabel:t.jsxs(le,{htmlFor:r,children:[n,d&&t.jsx("span",{className:"required",children:"*"})]}),description:o,registry:f,children:[a,t.jsx(q,{item:!0,xs:12,children:i})]}),s]})}try{M.displayName="FieldTemplate",M.__docgenInfo={description:"",displayName:"FieldTemplate",props:{id:{defaultValue:null,description:"The id of the field in the hierarchy. You can use it to render a label targeting the wrapped widget",name:"id",required:!0,type:{name:"string"}},classNames:{defaultValue:null,description:"A string containing the base CSS classes, merged with any custom ones defined in your uiSchema",name:"classNames",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"An object containing the style as defined in the `uiSchema`",name:"style",required:!1,type:{name:"StyleHTMLAttributes<any>"}},label:{defaultValue:null,description:"The computed label for this field, as a string",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"A component instance rendering the field description, if one is defined (this will use any custom\n`DescriptionField` defined)",name:"description",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rawDescription:{defaultValue:null,description:"A string containing any `ui:description` uiSchema directive defined",name:"rawDescription",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The field or widget component instance for this field row",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},errors:{defaultValue:null,description:"A component instance listing any encountered errors for this field",name:"errors",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rawErrors:{defaultValue:null,description:"An array of strings listing all generated error messages from encountered errors for this field",name:"rawErrors",required:!1,type:{name:"string[]"}},help:{defaultValue:null,description:"A component instance rendering any `ui:help` uiSchema directive defined",name:"help",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rawHelp:{defaultValue:null,description:"A string containing any `ui:help` uiSchema directive defined. **NOTE:** `rawHelp` will be `undefined` if passed\n`ui:help` is a React component instead of a string",name:"rawHelp",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"A boolean value stating if the field should be hidden",name:"hidden",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"A boolean value stating if the field is required",name:"required",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"A boolean value stating if the field is read-only",name:"readonly",required:!0,type:{name:"boolean"}},hideError:{defaultValue:null,description:"A boolean value stating if the field is hiding its errors",name:"hideError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"A boolean value stating if the field is disabled",name:"disabled",required:!0,type:{name:"boolean"}},displayLabel:{defaultValue:null,description:`A boolean value stating if the label should be rendered or not. This is useful for nested fields in arrays where
you don't want to clutter the UI`,name:"displayLabel",required:!1,type:{name:"boolean"}},schema:{defaultValue:null,description:"The schema object for this field",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},formContext:{defaultValue:null,description:"The `formContext` object that was passed to `Form`",name:"formContext",required:!1,type:{name:"GenericObjectType"}},formData:{defaultValue:null,description:"The formData for this field",name:"formData",required:!1,type:{name:"T"}},onChange:{defaultValue:null,description:"The value change event handler; Can be called with a new value to change the value for this field",name:"onChange",required:!0,type:{name:"(newFormData: T | undefined, es?: ErrorSchema<T> | undefined, id?: string | undefined) => any"}},onKeyChange:{defaultValue:null,description:"The key change event handler; Called when the key associated with a field is changed for an additionalProperty",name:"onKeyChange",required:!0,type:{name:"(value: string) => () => void"}},onDropPropertyClick:{defaultValue:null,description:"The property drop/removal event handler; Called when a field is removed in an additionalProperty context",name:"onDropPropertyClick",required:!0,type:{name:"(value: string) => () => void"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}const W=e=>{const{SelectWidget:r}=e.registry.widgets,n={enumOptions:[{value:!0,label:"true"},{value:!1,label:"false"}]};return t.jsx(r,{...e,options:n})};try{W.displayName="BooleanWidget",W.__docgenInfo={description:"Select widget compatible with react-jsonschema-form booleans",displayName:"BooleanWidget",props:{}}}catch{}const H=({disabled:e,value:r,onChange:n})=>t.jsx(ze,{disabled:e,value:r?$e(r):null,onChange:a=>{a==null||typeof a=="string"?n(a):n(a.toISOString())}});try{H.displayName="DateTimeWidget",H.__docgenInfo={description:"DateTime picker widget compatible with react-jsonschema-form and Synapse Datetime annotations.",displayName:"DateTimeWidget",props:{}}}catch{}function re(e){return t.jsx(we,{ref:e.formRef,validator:Ie,className:"JsonSchemaForm",...e,templates:{ArrayFieldDescriptionTemplate:C,ArrayFieldItemTemplate:w,ArrayFieldTemplate:I,ArrayFieldTitleTemplate:N,BaseInputTemplate:R,FieldErrorTemplate:U,FieldTemplate:M,ButtonTemplates:tt,DescriptionFieldTemplate:J,ErrorListTemplate:O,...e.templates},widgets:{DateTimeWidget:H,CheckboxWidget:W,SelectWidget:Re,...e.widgets}})}try{re.displayName="JsonSchemaForm",re.__docgenInfo={description:`Wrapper around react-jsonschema-form that supplies default styling/templates/widgets for
Synapse/Portals`,displayName:"JsonSchemaForm",props:{formRef:{defaultValue:null,description:"",name:"formRef",required:!1,type:{name:"Ref<Form<T, RJSFSchema, GenericObjectType>>"}}}}}catch{}export{ee as A,re as J,ue as a,It as b,Et as c,Nt as d,Rt as g,Dt as s};
