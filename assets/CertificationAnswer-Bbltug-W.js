import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{B as l}from"./Box-DN73Q90z.js";import{T as d}from"./Typography-Cqa7rFgc.js";function r(t){const{question:e,answer:n,onClick:a,checked:o,disabled:s}=t;return i.jsxs(l,{sx:{marginBottom:"5px"},children:[i.jsx("input",{id:`${e.questionIndex}-${n.answerIndex}`,name:`${e.questionIndex}`,type:e.exclusive?"radio":"checkbox",value:n.answerIndex,onClick:a,checked:o,disabled:s}),i.jsx(d,{variant:"body1",component:"label",sx:{lineHeight:"18px"},htmlFor:`${e.questionIndex}-${n.answerIndex}`,children:n.prompt})]})}try{r.displayName="CertificationAnswer",r.__docgenInfo={description:"",displayName:"CertificationAnswer",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"MultichoiceQuestion"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"MultichoiceAnswer"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{r as C};
