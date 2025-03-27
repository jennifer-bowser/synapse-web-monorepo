import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{g as fe,a as J,A as ne,c as ve,P as de,d as xe,b as _e,T as Ve,e as Fe,f as ce,l as qe,h as Ae,i as we,M as Ce,v as Ee}from"./MuiForm-DgK-M08G.js";import{r as g}from"./index-Dl6G-zuu.js";import"./styled-CVek1lbE.js";import{l as ie,S as oe,j as Ne,i as Ie,B as Pe,N as De}from"./useFiles-Dp-qtbfr.js";import{S as Oe}from"./createSvgIcon-DGYn73cf.js";import"./VerificationSubmission-BmZsZ0JS.js";import{x as ke}from"./StringUtils-DFpF2_59.js";import"./OrientationBanner-C7CmOmBW.js";import{d as Re,o as Be}from"./useEntity-By0iecCT.js";import{u as se}from"./useQuery-6SsvXKRa.js";import{S as Le}from"./LoadingScreen-Cpeaoznz.js";import{F as $e}from"./FullWidthAlert-B22pQuiY.js";import{e as K,f as He,H as Je,g as Ke,s as Me,A as We,a as Ge,b as Ue,c as Xe,B as Ye,E as Ze,T as Qe,D as ze,d as et,h as tt,i as rt,j as at}from"./ErrorListTemplate-CnSWe8G0.js";import{G as N}from"./Grid-Bf18OTMn.js";import{I as he}from"./InputLabel-WFlJj3PA.js";import{u as nt}from"./use-deep-compare-effect.esm-COSQ_O61.js";import{d as it}from"./ToastMessage-Cdc-RPF1.js";import{T as ye}from"./Tooltip-B_hdhCmy.js";import{B as ot}from"./Button-jaxqGIs_.js";import{B as st,x as lt,C as dt}from"./ConfirmationDialog-Dge8deeo.js";import{T as ge}from"./TextField-BDNZH-7j.js";import{I as ct}from"./IconButton-B2vXFIju.js";import{C as be}from"./cloneDeep-CU8tiSOH.js";import{B as M}from"./Box-DN73Q90z.js";import{T as W}from"./Typography-Cqa7rFgc.js";import{L as ut}from"./List-C2SITC5t.js";import{L as pt}from"./ListItem-DpqsagEX.js";import{F as mt}from"./Input-DX0FyYX4.js";import{A as H}from"./Alert-Dcz6JZ5x.js";import{L as ft}from"./Link-CFsiiapl.js";import{D as ht}from"./Divider-D-s4g8h5.js";function yt(r,t){const{accessToken:a,keyFactory:n}=ie();return se({...t,queryKey:n.getEntityBoundJsonSchemaQueryKey(r),queryFn:()=>oe.getSchemaBinding(r,a)})}function zt(r,t){const{accessToken:a,keyFactory:n}=ie();return se({...t,queryKey:n.getEntitySchemaValidationResultsQueryKey(r),queryFn:()=>oe.getSchemaValidationResults(r,a)})}function gt(r,t){const{keyFactory:a}=ie();return se({...t,queryKey:a.getValidationSchemaQueryKey(r),queryFn:async()=>(await oe.getValidationSchema(r)).validationSchema})}const P=r=>e.jsx(Oe,{...r,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14 10H2V12H14V10ZM14 6H2V8H14V6ZM18 14V10H16V14H12V16H16V20H18V16H22V14H18ZM2 16H10V14H2V16Z"})});try{P.displayName="AddToList",P.__docgenInfo={description:"",displayName:"AddToList",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const Se=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,bt=["String","Integer","Float","Boolean","Datetime"];function G(r){return r.length===0?"String":r.every(t=>typeof t=="number"||t==="NaN")?r.every(t=>Number.isInteger(t))?"Integer":"Float":r.every(t=>typeof t=="boolean")?"Boolean":r.every(t=>typeof t=="string")&&r.every(t=>!!Se.exec(t))?"Datetime":"String"}function ue(r,t){switch(t){case"Integer":return r.map(a=>Number.isNaN(Number(a))?0:Math.floor(Number(a)));case"Float":return r.map(a=>{const n=parseFloat(a);return Number.isNaN(n)?"NaN":Number.isInteger(n)?n.toFixed(1):n});case"Datetime":return r.map(a=>typeof a=="string"&&Se.exec(a)?a:new Date().toISOString());case"Boolean":return r.map(a=>!!a);case"String":default:return r.map(a=>String(a))}}function U(r){switch(r){case"Datetime":return{type:"string",format:"datetime"};case"Boolean":return{type:"boolean"};case"Float":return{type:"number"};case"Integer":return{type:"integer"};case"String":default:return{type:"string"}}}function X(r){const{formData:t,onChange:a,registry:n,schema:m,name:l,onDropPropertyClick:u,idSchema:f}=r,d=f.$id,{ArrayField:h}=n.fields,{SelectWidget:p}=n.widgets,[c,y]=g.useState(G(K(t))),[o,T]=g.useState(c);g.useEffect(()=>{function i(){if(Array.isArray(t)){const S=t.length===0||t.every(v=>v==null||v==""),q=ue(t,o);(S||o!==c)&&Ne(t,q)&&y(o)}}i()},[o]),g.useEffect(()=>{function i(){if(Array.isArray(t))if(t.every(S=>S==null))u(l)(new CustomEvent("dropEmptyProperty"));else{const S=ue(t,o);y(o),a(S)}}i()},[c]);const b=U(c);return Array.isArray(t)?e.jsxs(He,{value:{dropProperty:i=>{u(l)(i)}},children:[e.jsxs(N,{item:!0,xs:2,children:[e.jsx(he,{htmlFor:`${d}-type`,children:"Type"}),e.jsx(p,{name:"Type",id:`${d}-type`,schema:{},options:{enumOptions:bt.map(i=>({label:i,value:i}))},value:c,onChange:i=>{T(i)},disabled:r.disabled,readOnly:r.readonly,required:!0,isClearable:!1,onBlur:()=>{},onFocus:()=>{},registry:n,label:"Type"})]}),e.jsx(N,{item:!0,xs:7,children:e.jsx(h,{...r,schema:{...m,items:{...b}}})}),c!==o&&e.jsx($e,{variant:"warning",title:"Data may be lost when converting types",description:`Are you sure you want to convert ${l} from ${c} to ${o}? Current values may be lost on conversion.`,primaryButtonConfig:{text:"Convert",onClick:()=>{y(o)}},secondaryButtonConfig:{text:"Cancel",onClick:()=>{T(c)}},isGlobal:!1})]}):(a(K(t)),e.jsx(e.Fragment,{}))}try{G.displayName="guessPropertyType",G.__docgenInfo={description:"",displayName:"guessPropertyType",props:{}}}catch{}try{U.displayName="getSchemaForPropertyType",U.__docgenInfo={description:"Maps a Synapse Annotation PropertyType to a JSON Schema that captures the type and format.",displayName:"getSchemaForPropertyType",props:{}}}catch{}try{X.displayName="AdditionalPropertiesSchemaField",X.__docgenInfo={description:`react-jsonschema-form SchemaField override for "additionalProperties" only. In Synapse these are "custom annotations".
Modifies the data to provide full compatibility with Synapse annotations features.

This component provides these enhancements to the SchemaField:
- Supports selecting a type, and changing the input widget appropriately
- Identifying the type on mount
- Treat all field values as arrays
- When the last array value is removed, remove the entire key from the form.`,displayName:"AdditionalPropertiesSchemaField",props:{onDropPropertyClick:{defaultValue:null,description:"",name:"onDropPropertyClick",required:!0,type:{name:"(key: string) => (event: any) => void"}}}}}catch{}function Y(r){const{description:t,disabled:a,formData:n,idSchema:m,onAddClick:l,properties:u,readonly:f,registry:d,required:h,schema:p,title:c,uiSchema:y}=r,o=fe(y),T=J("TitleFieldTemplate",d,o),b=J("DescriptionFieldTemplate",d,o),i=g.useRef(new Set);return nt(()=>{if("properties"in p&&p.properties){const S=Object.keys(p.properties),q=new Set(S.filter(v=>!p.properties[v][ne]));if(i.current!=null){const v=Array.from(i.current).filter(j=>!q.has(j)&&!!n&&n[j]!=null&&Array.isArray(n[j])&&n[j].filter(s=>s!=null).length>0);v.length>0&&it(`The following annotations are no longer specified by the schema and have been converted to custom fields: ${v.join(", ")}.`,"warning",{title:"Fields No Longer Specified By Schema"})}i.current=q}},[p.properties]),e.jsxs("fieldset",{id:m.$id,children:[(o.title||c)&&e.jsx(T,{id:`${m.$id}__title`,schema:p,title:o.title||c,required:h,uiSchema:y,registry:d}),(o.description||t)&&e.jsx(b,{id:`${m.$id}__description`,description:o.description||t,registry:d,schema:p}),u.map(S=>S.content),ve(p,y,n)&&e.jsx(ye,{title:"Add a new custom field",placement:"top",children:e.jsx(ot,{sx:{my:2},variant:"contained",className:"object-property-expand",onClick:l(p),disabled:a||f,"aria-label":"Add Custom Field",children:e.jsx(P,{})})})]})}try{Y.displayName="ObjectFieldTemplate",Y.__docgenInfo={description:`Derived from the base ObjectFieldTemplate with annotations-editor-specific changes
- Custom button for adding additional properties
- Tracks properties to show a toast message if a property is converted to an additionalProperty because it was
  dropped from the schema (e.g. in a conditional schema)

See https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/mui/src/ObjectFieldTemplate/ObjectFieldTemplate.tsx`,displayName:"ObjectFieldTemplate",props:{title:{defaultValue:null,description:"A string value containing the title for the object",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"A string value containing the description for the object",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"A boolean value stating if the object is disabled",name:"disabled",required:!1,type:{name:"boolean"}},properties:{defaultValue:null,description:"An array of objects representing the properties in the object",name:"properties",required:!0,type:{name:"ObjectFieldTemplatePropertyType[]"}},onAddClick:{defaultValue:null,description:"Returns a function that adds a new property to the object (to be used with additionalProperties)",name:"onAddClick",required:!0,type:{name:"(schema: S) => () => void"}},readonly:{defaultValue:null,description:"A boolean value stating if the object is read-only",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"A boolean value stating if the object is required",name:"required",required:!1,type:{name:"boolean"}},hideError:{defaultValue:null,description:"A boolean value stating if the field is hiding its errors",name:"hideError",required:!1,type:{name:"boolean"}},schema:{defaultValue:null,description:"The schema object for this object",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this object field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},idSchema:{defaultValue:null,description:"An object containing the id for this object & ids for its properties",name:"idSchema",required:!0,type:{name:"IdSchema<T>"}},errorSchema:{defaultValue:null,description:"The optional validation errors in the form of an `ErrorSchema`",name:"errorSchema",required:!1,type:{name:"ErrorSchema<T>"}},formData:{defaultValue:null,description:"The form data for the object",name:"formData",required:!1,type:{name:"Record<string, any> | null"}},formContext:{defaultValue:null,description:"The `formContext` object that was passed to Form",name:"formContext",required:!1,type:{name:"GenericObjectType"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function Z(r){const{fields:{ObjectField:t}}=_e();return g.useEffect(()=>{const{schema:a,formData:n,onChange:m}=r,l={...n};a[de]&&(Object.entries(a[de]).forEach(([u,f])=>{const d=l[u];f[ne]?Array.isArray(d)||(l[u]=K(d)):typeof f=="object"&&"type"in f&&f.type!=="array"&&Array.isArray(d)&&(l[u]=d.map(h=>`${h}`).join(", "))}),xe(n,l)||m(l))}),e.jsx(t,{...r})}try{Z.displayName="CustomObjectField",Z.__docgenInfo={description:"Extends the",displayName:"CustomObjectField",props:{}}}catch{}function Q(r){const{id:t,classNames:a,disabled:n,label:m,onKeyChange:l,readonly:u,required:f,schema:d,children:h,registry:p}=r,{translateString:c}=p,y=c(Ve.KeyLabel,[""]);if(!(ne in d))return e.jsx("div",{className:a,children:h});const T=({target:b})=>{b&&l(b.value)};return e.jsx("div",{className:a,children:e.jsxs(N,{container:!0,my:1,columnSpacing:2,rowSpacing:0,children:[e.jsx(N,{item:!0,xs:3,children:e.jsx(ge,{fullWidth:!0,required:f,label:y,defaultValue:m,disabled:n||u,id:`${t}-key`,name:`${t}-key`,onBlur:u?void 0:T,type:"text"})}),h]})})}try{Q.displayName="WrapIfAdditionalTemplate",Q.__docgenInfo={description:"The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are\npart of an `additionalProperties` part of a schema.",displayName:"WrapIfAdditionalTemplate",props:{children:{defaultValue:null,description:"The field or widget component instance for this field row",name:"children",required:!0,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The computed label for this field, as a string",name:"label",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"An object containing the style as defined in the `uiSchema`",name:"style",required:!1,type:{name:"StyleHTMLAttributes<any>"}},disabled:{defaultValue:null,description:"A boolean value stating if the field is disabled",name:"disabled",required:!0,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the field in the hierarchy. You can use it to render a label targeting the wrapped widget",name:"id",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"A boolean value stating if the field is required",name:"required",required:!1,type:{name:"boolean"}},classNames:{defaultValue:null,description:"A string containing the base CSS classes, merged with any custom ones defined in your uiSchema",name:"classNames",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:"A boolean value stating if the field is read-only",name:"readonly",required:!0,type:{name:"boolean"}},schema:{defaultValue:null,description:"The schema object for this field",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},onKeyChange:{defaultValue:null,description:"The key change event handler; Called when the key associated with a field is changed for an additionalProperty",name:"onKeyChange",required:!0,type:{name:"(value: string) => () => void"}},onDropPropertyClick:{defaultValue:null,description:"The property drop/removal event handler; Called when a field is removed in an additionalProperty context",name:"onDropPropertyClick",required:!0,type:{name:"(value: string) => () => void"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function z(r){const{id:t,label:a,children:n,errors:m,help:l,description:u,hidden:f,required:d,displayLabel:h,registry:p,uiSchema:c,schema:y}=r,o=fe(c),T=J("WrapIfAdditionalTemplate",p,o),[b,i]=g.useState(!1);return f?e.jsx("div",{className:"hidden",children:n}):e.jsxs(T,{...r,children:[(h||y.type==="boolean")&&e.jsxs("div",{className:"LabelContainer",children:[e.jsxs(he,{htmlFor:t,children:[a,d&&e.jsx("span",{className:"required",children:"*"})]}),e.jsx(ye,{title:"More Info",children:e.jsx(ct,{onClick:S=>{S.preventDefault(),i(!b)},"aria-expanded":b,size:"small",children:e.jsx(Je,{color:"primary",sx:{width:"16px",height:"16px"}})})})]}),n,e.jsx(N,{item:!0,xs:12,children:m}),e.jsx(be,{className:"field-description",in:b,children:u}),l]})}try{z.displayName="FieldTemplate",z.__docgenInfo={description:"",displayName:"FieldTemplate",props:{id:{defaultValue:null,description:"The id of the field in the hierarchy. You can use it to render a label targeting the wrapped widget",name:"id",required:!0,type:{name:"string"}},classNames:{defaultValue:null,description:"A string containing the base CSS classes, merged with any custom ones defined in your uiSchema",name:"classNames",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"An object containing the style as defined in the `uiSchema`",name:"style",required:!1,type:{name:"StyleHTMLAttributes<any>"}},label:{defaultValue:null,description:"The computed label for this field, as a string",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"A component instance rendering the field description, if one is defined (this will use any custom\n`DescriptionField` defined)",name:"description",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rawDescription:{defaultValue:null,description:"A string containing any `ui:description` uiSchema directive defined",name:"rawDescription",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The field or widget component instance for this field row",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},errors:{defaultValue:null,description:"A component instance listing any encountered errors for this field",name:"errors",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rawErrors:{defaultValue:null,description:"An array of strings listing all generated error messages from encountered errors for this field",name:"rawErrors",required:!1,type:{name:"string[]"}},help:{defaultValue:null,description:"A component instance rendering any `ui:help` uiSchema directive defined",name:"help",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rawHelp:{defaultValue:null,description:"A string containing any `ui:help` uiSchema directive defined. **NOTE:** `rawHelp` will be `undefined` if passed\n`ui:help` is a React component instead of a string",name:"rawHelp",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"A boolean value stating if the field should be hidden",name:"hidden",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"A boolean value stating if the field is required",name:"required",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"A boolean value stating if the field is read-only",name:"readonly",required:!0,type:{name:"boolean"}},hideError:{defaultValue:null,description:"A boolean value stating if the field is hiding its errors",name:"hideError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"A boolean value stating if the field is disabled",name:"disabled",required:!0,type:{name:"boolean"}},displayLabel:{defaultValue:null,description:`A boolean value stating if the label should be rendered or not. This is useful for nested fields in arrays where
you don't want to clutter the UI`,name:"displayLabel",required:!1,type:{name:"boolean"}},schema:{defaultValue:null,description:"The schema object for this field",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},formContext:{defaultValue:null,description:"The `formContext` object that was passed to `Form`",name:"formContext",required:!1,type:{name:"GenericObjectType"}},formData:{defaultValue:null,description:"The formData for this field",name:"formData",required:!1,type:{name:"T"}},onChange:{defaultValue:null,description:"The value change event handler; Can be called with a new value to change the value for this field",name:"onChange",required:!0,type:{name:"(newFormData: T | undefined, es?: ErrorSchema<T> | undefined, id?: string | undefined) => any"}},onKeyChange:{defaultValue:null,description:"The key change event handler; Called when the key associated with a field is changed for an additionalProperty",name:"onKeyChange",required:!0,type:{name:"(value: string) => () => void"}},onDropPropertyClick:{defaultValue:null,description:"The property drop/removal event handler; Called when a field is removed in an additionalProperty context",name:"onDropPropertyClick",required:!0,type:{name:"(value: string) => () => void"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function Te(r){if(Array.isArray(r)||typeof r=="boolean")return"unknown";const{type:t,enum:a}=r;return t==="array"&&typeof r.items=="object"?`List of ${Te(r.items)}`:a?"enumeration":Array.isArray(t)?t.reduce((n,m)=>`${n}, ${m}`,""):t||"unknown"}function ee(r){const{description:t,schema:a}=r,n=Te(a);return e.jsx(be,{className:"field-description",in:!0,children:e.jsx(M,{component:"table",className:"FieldDescriptionTable",mb:1,children:e.jsxs("tbody",{children:[t&&e.jsxs("tr",{children:[e.jsx("th",{children:"Description"}),e.jsx("td",{children:t})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("td",{children:n})]})]})})})}try{ee.displayName="FieldDescriptionTable",ee.__docgenInfo={description:"",displayName:"FieldDescriptionTable",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"ReactNode"}}}}}catch{}function te(r){const{description:t,schema:a={}}=r;return a.type==="object"?e.jsx(W,{variant:"body1",sx:{my:2},children:t}):e.jsx(ee,{schema:a,description:t})}try{te.displayName="DescriptionFieldTemplate",te.__docgenInfo={description:"",displayName:"DescriptionFieldTemplate",props:{id:{defaultValue:null,description:"The id of the field description in the hierarchy",name:"id",required:!0,type:{name:"string"}},schema:{defaultValue:null,description:"The schema object for the field being described",name:"schema",required:!0,type:{name:"RJSFSchema"}},uiSchema:{defaultValue:null,description:"The uiSchema object for this description field",name:"uiSchema",required:!1,type:{name:"UiSchema<any, RJSFSchema, any>"}},description:{defaultValue:null,description:"The description of the field being rendered",name:"description",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<any, RJSFSchema, any>"}}}}}catch{}const St=["date","datetime-local","file","time"];function re(r){const{id:t,name:a,placeholder:n,required:m,readonly:l,disabled:u,type:f,label:d,value:h,onChange:p,onChangeOverride:c,onBlur:y,onFocus:o,autofocus:T,options:b,schema:i,uiSchema:S,rawErrors:q=[],formContext:v,registry:j,InputLabelProps:s,...A}=r,w=!0,C=Fe(i,f,b),{step:D,min:O,max:V,...k}=C,R={inputProps:{step:D,min:O,max:V,...i.examples?{list:ce(t)}:void 0},...k},B=({target:{value:x}})=>p(x===""?b.emptyValue:x),F=({target:{value:x}})=>y(t,x),L=({target:{value:x}})=>o(t,x),$=St.includes(f)?{...s,shrink:!0}:s;let I;return(i.default||i.const)&&(I=JSON.stringify(i.default||i.const)+" (derived)"),e.jsxs(e.Fragment,{children:[e.jsx(ge,{id:t,name:t,placeholder:I||n,label:qe(d||void 0,w,!1),autoFocus:T,required:!1,disabled:u||l,...R,value:h||h===0?h:"",error:q.length>0,onChange:c||B,onBlur:F,onFocus:L,InputLabelProps:$,...A,inputProps:{"aria-label":t},"aria-describedby":Ae(t,!!i.examples)}),Array.isArray(i.examples)&&e.jsx("datalist",{id:ce(t),children:i.examples.concat(i.default&&!i.examples.includes(i.default)?[i.default]:[]).map(x=>e.jsx("option",{value:x},x))})]})}try{re.displayName="BaseInputTemplate",re.__docgenInfo={description:"The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the `core` theme.\nIt is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.\nIt can be customized/overridden for other themes or individual implementations as needed.",displayName:"BaseInputTemplate",props:{}}}catch{}function ae(r){const{errors:t=[],idSchema:a}=r;if(t.length===0)return null;const n=we(a);return e.jsx(ut,{dense:!0,disablePadding:!0,children:t.map((m,l)=>e.jsx(pt,{disableGutters:!0,children:e.jsx(mt,{id:n,sx:{color:"error.main"},children:m})},l))})}try{ae.displayName="FieldErrorTemplate",ae.__docgenInfo={description:"The `FieldErrorTemplate` component renders the errors local to the particular field",displayName:"FieldErrorTemplate",props:{errorSchema:{defaultValue:null,description:"The errorSchema constructed by `Form`",name:"errorSchema",required:!1,type:{name:"ErrorSchema<T>"}},errors:{defaultValue:null,description:"An array of the errors",name:"errors",required:!1,type:{name:"(string | ReactElement<any, string | JSXElementConstructor<any>>)[]"}},idSchema:{defaultValue:null,description:"The tree of unique ids for every child field",name:"idSchema",required:!0,type:{name:"IdSchema<T>"}},schema:{defaultValue:null,description:"The schema that was passed to field",name:"schema",required:!0,type:{name:"JSONSchema7"}},uiSchema:{defaultValue:null,description:"The uiSchema that was passed to field",name:"uiSchema",required:!1,type:{name:"UiSchema<T, S, F>"}},registry:{defaultValue:null,description:"The `registry` object",name:"registry",required:!0,type:{name:"Registry<T, S, F>"}}}}}catch{}function Tt(r){return r?ke[r].reduce((t,a)=>(t[`^${a}$`]={not:{}},t),{}):{}}function pe(r,t){let a=rt(r);return t&&(a=at(a)),a}function me(r){const{entityId:t,schemaId:a,validationSchema:n,liveValidate:m,onSuccess:l=()=>{},onCancel:u,formRef:f,onChange:d,hideActions:h=!1}=r,p=g.useRef(null),c=f??p,[y,o]=g.useState(void 0),[T,b]=g.useState(void 0),[i,S]=g.useState(!1),[q,v]=g.useState(!1),{data:j}=Re(t,void 0,!1,{staleTime:1/0,enabled:!!t,throwOnError:!0}),s=j==null?void 0:j.entityMetadata,A=j==null?void 0:j.annotations,[w,C]=g.useState(void 0),D=g.useMemo(()=>Tt(s==null?void 0:s.concreteType),[s==null?void 0:s.concreteType]),O=g.useCallback(Ke(s==null?void 0:s.concreteType),[s==null?void 0:s.concreteType]);g.useEffect(()=>{A&&C(A)},[A]);const{data:V,isLoading:k}=yt(t,{enabled:!!t,refetchOnWindowFocus:!1,throwOnError:!0}),{data:R,isLoading:B}=gt(a??(V==null?void 0:V.jsonSchemaVersionInfo.$id)??"",{enabled:!!a||!!V,throwOnError:!0}),F=n||R,L=k||B,{mutate:$,isPending:I}=Be({onSuccess:()=>{l()},onError:_=>{b(_),S(!0)}});function x(){$({...pe(w,!0),...s})}const le=m??Me(A,F);return e.jsx("div",{className:"JsonSchemaFormContainer",children:L?e.jsx("div",{className:"LoadingPlaceholder",children:e.jsx(Le,{size:30})}):e.jsxs(e.Fragment,{children:[s&&V&&e.jsxs(H,{severity:"info",sx:{mb:2},children:[e.jsx("b",{children:s.name})," requires scientific annotations specified by ",e.jsx("b",{children:V.jsonSchemaVersionInfo.$id}),". ",e.jsx("b",{children:e.jsx(ft,{href:`${Ie(Pe.REPO_ENDPOINT)}/repo/v1/schema/type/registered/${V.jsonSchemaVersionInfo.$id}`,target:"_blank",rel:"noopener noreferrer",children:"View required schema (JSON)"})})]}),s&&De(w)&&V===null&&e.jsx(H,{severity:"info",children:e.jsxs(M,{display:"flex",alignItems:"center",gap:.5,children:[e.jsxs(W,{variant:"smallText1",children:[e.jsx("b",{children:s.name})," has no annotations. Click the"," "]}),e.jsx(P,{}),e.jsx(W,{variant:"smallText1",children:"button to annotate."})]})}),e.jsxs(Ce,{validator:Ee,className:"JsonSchemaForm",liveValidate:le,noHtml5Validate:!0,experimental_defaultFormStateBehavior:{emptyObjectFields:"skipDefaults"},fields:{ObjectField:Z},templates:{ArrayFieldDescriptionTemplate:We,ArrayFieldItemTemplate:Ge,ArrayFieldTemplate:Ue,ArrayFieldTitleTemplate:Xe,BaseInputTemplate:re,FieldErrorTemplate:ae,FieldTemplate:z,ObjectFieldTemplate:Y,WrapIfAdditionalTemplate:Q,ButtonTemplates:Ye,DescriptionFieldTemplate:te,ErrorListTemplate:Ze},ref:c,disabled:I,schema:{...F??{},patternProperties:{...(F==null?void 0:F.patternProperties)??{},...D},additionalProperties:(F==null?void 0:F.additionalProperties)??!0},uiSchema:{"ui:globalOptions":{copyable:!1,duplicateKeySuffixSeparator:"_"},additionalProperties:{"ui:field":X}},transformErrors:O,formData:w,onChange:({formData:_})=>{d&&d(_),C(_),o(void 0)},onBlur:()=>{C(pe(w,!1))},onSubmit:({formData:_,errors:E},je)=>{je.preventDefault(),E&&E.length>0&&o(E),S(!1),C(_),x()},onError:_=>{o(_),(y||le)&&t&&v(!0)},widgets:{TextWidget:Qe,DateTimeWidget:ze,SelectWidget:st,CheckboxWidget:et},children:[T&&i&&e.jsxs(H,{severity:"error",sx:{my:2},children:["Annotations could not be updated: ",T.reason]}),!h&&e.jsxs(e.Fragment,{children:[e.jsx(ht,{sx:{my:2}}),e.jsx(M,{display:"flex",justifyContent:"space-between",sx:{gridRowStart:5},children:e.jsx(lt,{hasCancelButton:u!==void 0,onCancel:()=>{u&&u()},onConfirm:()=>{c.current.formElement.current.requestSubmit()},confirmButtonProps:{children:t?"Save":"Validate"}})})]})]}),q&&e.jsx(dt,{open:!0,onConfirm:()=>{x(),v(!1)},onCancel:()=>{v(!1)},title:"Update Annotations",content:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"The following errors exist with the annotations you entered:"}),e.jsx("div",{children:e.jsx("ul",{children:(y??[]).map((_,E)=>e.jsxs("li",{children:[e.jsx("b",{children:`${tt(_)}: `})," ",`${_.message}`]},E))})}),e.jsx("div",{children:"Are you sure you want to save the invalid annotations?"})]}),confirmButtonProps:{children:"Save"}})]})})}try{me.displayName="SchemaDrivenAnnotationEditor",me.__docgenInfo={description:`Renders a form for editing an entity's annotations. The component also supports supplying just a schema ID,
but work to support annotation flows without an entity (i.e. before creating entities) is not yet complete.`,displayName:"SchemaDrivenAnnotationEditor",props:{entityId:{defaultValue:null,description:"The entity whose annotations should be edited with the form",name:"entityId",required:!1,type:{name:"string"}},schemaId:{defaultValue:null,description:"If no entity ID is supplied, the schema to use for the form",name:"schemaId",required:!1,type:{name:"string"}},validationSchema:{defaultValue:null,description:"May be used to directly provide a JSON Schema to use for the form",name:"validationSchema",required:!1,type:{name:"JSONSchema7"}},formRef:{defaultValue:null,description:"Optionally supply a ref to the form to handle submission externally with `formRef.current.submit()`.",name:"formRef",required:!1,type:{name:"RefObject<Form<any, RJSFSchema, any>>"}},liveValidate:{defaultValue:null,description:"Provide live input validation. This can cause performance degradation. By default, liveValidate will be true if an entity with a schema and existing annotations is being edited",name:"liveValidate",required:!1,type:{name:"boolean"}},onSuccess:{defaultValue:null,description:"Invoked after a successful form submission",name:"onSuccess",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"If defined and formRef is not supplied, shows a 'Cancel' button and runs this effect on click",name:"onCancel",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"Passes new form data upon each change to the form",name:"onChange",required:!1,type:{name:"((annotations: Record<string, unknown>) => void)"}},hideActions:{defaultValue:null,description:"If true, the editor will not render its own submit UI.",name:"hideActions",required:!1,type:{name:"boolean"}}}}}catch{}export{P as A,me as S,zt as a,yt as u};
