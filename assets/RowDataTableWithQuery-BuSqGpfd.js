import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{R as c}from"./RowDataTable-qSfonCes.js";import{p as y}from"./SqlFunctions-C2xMGs4N.js";import"./StringUtils-DFpF2_59.js";import{o as f}from"./useFiles-Dp-qtbfr.js";import{g as R,h}from"./SynapseConstants-CXjze24f.js";import"./SkeletonButton-CxjqZPxz.js";import"./SkeletonInlineBlock-IuszcGGK.js";import{S as q}from"./SkeletonTable-CDz9K-62.js";import"./SkeletonParagraph-B0g80d2Y.js";const r=a=>{const{columnAliases:s,columnLinks:n,query:t,displayedColumns:l}=a,i=y(t.sql),u={partMask:R|h,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:i,query:t},{data:e,isLoading:m}=f(u),d=(e==null?void 0:e.queryResult.queryResults.rows[0].values)??[],p=(e==null?void 0:e.queryResult.queryResults.headers)??[];return m?o.jsx(q,{numRows:6,numCols:1}):o.jsx(c,{columnAliases:s,columnLinks:n,rowData:d,headers:p,displayedColumns:l})};try{r.displayName="RowDataTableWithQuery",r.__docgenInfo={description:"For the first row returned by the query, displays a table of column names and Synapse Table row data represented as key/value pairs",displayName:"RowDataTableWithQuery",props:{query:{defaultValue:null,description:"The query used to retrieve data",name:"query",required:!0,type:{name:"Query"}},displayedColumns:{defaultValue:null,description:"Optional list of column names whose data should be displayed in the table. If not provided, all columns with data will be shown.",name:"displayedColumns",required:!1,type:{name:"string[]"}},columnAliases:{defaultValue:null,description:"Optional display value overrides for column names",name:"columnAliases",required:!1,type:{name:"Record<string, string>"}},columnLinks:{defaultValue:null,description:"Optional configuration for linking columns",name:"columnLinks",required:!1,type:{name:"LabelLinkConfig"}}}}}catch{}export{r as R};
