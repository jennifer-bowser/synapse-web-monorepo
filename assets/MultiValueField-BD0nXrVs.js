import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{f}from"./DateFormatter-Dyde7HgY.js";import{g as e,i as N,l as p}from"./VerificationSubmission-BnFne12N.js";import{d}from"./dayjs.min-d18Up55D.js";import{r as l}from"./index-Dl6G-zuu.js";import{J as D}from"./JSONArrayEditorModal-fTmDBeA-.js";import{i as _,h as o,m as T,o as v,p as A}from"./StringUtils-CXT0ex8W.js";import{T as g}from"./TextField-BDNZH-7j.js";const y=[e.JSON];function j(a,n){return Object.values(e).filter(t=>a?!y.includes(t):!0).filter(t=>{if(n)switch(t){case e.JSON:case e.STRING_LIST:case e.INTEGER_LIST:case e.BOOLEAN_LIST:case e.DATE_LIST:case e.USERID_LIST:case e.ENTITYID_LIST:return!1;default:return!0}return!0})}function J(a){switch(a){case"enumeration":return"Values";case"range":return"Range";default:return a}}function z(a){switch(a){case e.STRING:return"String";case e.DOUBLE:return"Double";case e.BOOLEAN:return"Boolean";case e.INTEGER:return"Integer";case e.DATE:return"Date";case e.FILEHANDLEID:return"File";case e.ENTITYID:return"Entity";case e.LINK:return"Link";case e.MEDIUMTEXT:return"MediumText";case e.LARGETEXT:return"LargeText";case e.USERID:return"User";case e.STRING_LIST:return"String List";case e.INTEGER_LIST:return"Integer List";case e.BOOLEAN_LIST:return"Boolean List";case e.DATE_LIST:return"Date List";case e.USERID_LIST:return"User ID List";case e.ENTITYID_LIST:return"Entity ID List";case e.EVALUATIONID:return"Evaluation";case e.SUBMISSIONID:return"Submission";case e.JSON:return"JSON";default:return a}}function X(a){switch(a){case e.STRING:case e.STRING_LIST:case e.LINK:return!0;default:return!1}}function H(a){switch(a){case e.STRING_LIST:case e.BOOLEAN_LIST:case e.DATE_LIST:case e.INTEGER_LIST:case e.ENTITYID_LIST:return!0;default:return!1}}function K(a,n){let t;switch(a){case e.INTEGER:case e.INTEGER_LIST:t=["enumeration","range"];break;case e.STRING:case e.BOOLEAN:case e.USERID:case e.ENTITYID:case e.STRING_LIST:case e.BOOLEAN_LIST:case e.ENTITYID_LIST:case e.USERID_LIST:case e.EVALUATIONID:t=["enumeration"];break;case e.DOUBLE:case e.DATE:case e.DATE_LIST:t=["range"];break;default:t=null}return t&&!n&&(t=[void 0,...t]),t}function P(a,n,t){if(n)return!1;if(t)return!1;switch(a){case e.ENTITYID:case e.ENTITYID_LIST:case e.FILEHANDLEID:case e.USERID:case e.USERID_LIST:case e.MEDIUMTEXT:case e.LARGETEXT:case e.JSON:case e.SUBMISSIONID:case e.EVALUATIONID:return!1;default:return!0}}const q=50,R=1e3,W=100;function $(a){switch(a){case e.STRING:case e.STRING_LIST:case e.LINK:return R;default:throw new Error(`Type is not known to have a max size: ${a}`)}}function Z(a,n){if(n)return!1;switch(a){case e.STRING:case e.INTEGER:case e.ENTITYID:return!0;default:return!1}}function O(a,n){return n===e.INTEGER?a.map(t=>parseInt(t)):a}function Q(a,n=[]){return a.map(t=>({...t,columnType:t.columnType,maximumSize:t.maximumSize==null?void 0:t.maximumSize.toString(),maximumListLength:t.maximumListLength==null?void 0:t.maximumListLength.toString(),isSelected:!1,isOriginallyDefaultColumn:n.some(s=>s.name===t.name),jsonSubColumns:t.jsonSubColumns?t.jsonSubColumns.map(s=>({...s,columnType:s.columnType,isSelected:!1})):void 0,defaultValue:t.defaultValue&&t.columnType.endsWith("_LIST")?JSON.parse(t.defaultValue):t.defaultValue,enumValues:t.enumValues!=null?O(t.enumValues,t.columnType):void 0}))}function ee(a){if(_(a))return{scope:a.scopeIds,viewTypeMask:a.viewTypeMask,viewEntityType:o(a.concreteType)};if(T(a)||v(a)){const n=T(a)?N:p;return{scope:(a.items??[]).map(t=>`${t.entityId}.${t.versionNumber}`),viewTypeMask:n,viewEntityType:o(a.concreteType)}}else if(A(a))return{scope:a.scopeIds,viewTypeMask:void 0,viewEntityType:o(a.concreteType)}}function M(a){switch(a){case e.STRING:case e.STRING_LIST:return{type:"string",minLength:1};case e.DOUBLE:return{type:"number"};case e.BOOLEAN:case e.BOOLEAN_LIST:return{type:"boolean"};case e.INTEGER:case e.INTEGER_LIST:return{type:"integer"};case e.DATE:case e.DATE_LIST:return{type:"string",format:"datetime"};case e.FILEHANDLEID:case e.ENTITYID:case e.ENTITYID_LIST:case e.LINK:case e.MEDIUMTEXT:case e.LARGETEXT:case e.USERID:case e.USERID_LIST:case e.SUBMISSIONID:case e.JSON:case e.EVALUATIONID:default:return{type:"string",minLength:1}}}const h=(a,n)=>a.name===n.name&&a.columnType===n.columnType,G=(a,n)=>{let t;for(const s of a)if(h(s,n)){t=s;break}return t};function F(a){const n=a!==null?parseFloat(String(a)):null;return Number.isInteger(n)?n:null}const c=(a,n)=>{const t=F(a);return n!=null&&t!=null&&t>0?t<n:!1};function V(a,n){return n?!(c(a.maximumSize,n.maximumSize)||c(a.maximumListLength,n.maximumListLength)):!0}function ae(a,n){return a.filter(t=>{const s=G(n,t);return!V(t,s)}).length}function I(a){const{columnType:n,onChange:t,value:s=[],TextFieldProps:E}=a,[S,u]=l.useState(!1),m=l.useMemo(()=>M(n),[n]),L=l.useMemo(()=>s==null?"":n===e.DATE_LIST?s.map(i=>f(d(i))).join(", "):s.join(", "),[s,n]);return r.jsxs(r.Fragment,{children:[r.jsx(D,{arrayItemDefinition:m,value:s??void 0,isShowingModal:S,onConfirm:i=>{t(i),u(!1)},onCancel:()=>u(!1)}),r.jsx(g,{...E,value:L,onClick:()=>{u(!0)}})]})}try{I.displayName="MultiValueField",I.__docgenInfo={description:"",displayName:"MultiValueField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T[] | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: T[] | null) => void"}},columnType:{defaultValue:null,description:"",name:"columnType",required:!0,type:{name:"enum",value:[{value:'"STRING"'},{value:'"DOUBLE"'},{value:'"BOOLEAN"'},{value:'"INTEGER"'},{value:'"DATE"'},{value:'"FILEHANDLEID"'},{value:'"ENTITYID"'},{value:'"LINK"'},{value:'"MEDIUMTEXT"'},{value:'"LARGETEXT"'},{value:'"USERID"'},{value:'"STRING_LIST"'},{value:'"INTEGER_LIST"'},{value:'"BOOLEAN_LIST"'},{value:'"DATE_LIST"'},{value:'"USERID_LIST"'},{value:'"ENTITYID_LIST"'},{value:'"EVALUATIONID"'},{value:'"SUBMISSIONID"'},{value:'"JSON"'}]}},TextFieldProps:{defaultValue:null,description:"",name:"TextFieldProps",required:!1,type:{name:'Omit<TextFieldProps, "value" | "onChange">'}}}}}catch{}export{q as D,I as M,F as a,H as b,X as c,K as d,j as e,G as f,ee as g,z as h,c as i,$ as j,P as k,Z as l,J as m,ae as n,R as o,W as p,Q as t};
