import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{C as d,u as T,a as b,c as w,g as R,b as E,d as M,e as N,f as C}from"./StyledTanStackTable-DhqbhNGG.js";import{r as i}from"./index-Dl6G-zuu.js";import{N as I}from"./NoSearchResults-DjZW1FpE.js";import{c as P}from"./useFavorites-BIDU-Bmz.js";import{P as z,l as O,J as A}from"./useFiles-Dp-qtbfr.js";import{h as g,e as f}from"./StringUtils-DFpF2_59.js";import{E as D}from"./EntityIcon-CaDbBey8.js";import{I as G}from"./IconSvg-BczDzbzX.js";import{S as _}from"./LoadingScreen-Cpeaoznz.js";import{F as k}from"./FavoriteButton-BqMDQeTT.js";import{T as H}from"./TextField-BDNZH-7j.js";import{I as U}from"./InputAdornment-DuWyrfBY.js";import{S as V}from"./Stack-Cg5HdmvL.js";import"./EnumFacetFilterUI-Cyd6JYxa.js";import"./IconButton-B2vXFIju.js";import"./createTheme-BAeQEIuu.js";import"./index-GEGPABih.js";import"./styled-CVek1lbE.js";import"./ButtonBase-CJOJSfnP.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useForkRef-CEBgoE3Z.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Box-DN73Q90z.js";import"./FormControlLabel-DnTLgYas.js";import"./useFormControl-CQLCXd-P.js";import"./useControlled-1Y2rT-1r.js";import"./Typography-Cqa7rFgc.js";import"./Checkbox-DdbW-GT9.js";import"./createSvgIcon-DGYn73cf.js";import"./Radio-CE-oWTfw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuItem-2Gk2X7W7.js";import"./List-C2SITC5t.js";import"./dividerClasses-Cy1O_LBt.js";import"./Tooltip-B_hdhCmy.js";import"./index-OQIcOgx6.js";import"./useTheme-DGffmoS1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DPWvTaVu.js";import"./mergeSlotProps-D1doMhlu.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BIzb42Jq.js";import"./utils-Cn9x6_1Z.js";import"./useId-BkqTTtmk.js";import"./Menu-I6c2rK6i.js";import"./Popover-DVT6tR4z.js";import"./Modal-CE0HKq0N.js";import"./Backdrop-CB6sMj4E.js";import"./Fade-BK4f5_SW.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerWindow-BN2rbQ_G.js";import"./Paper-BMFCclTH.js";import"./MenuList-BD4KnLC5.js";import"./cloneDeep-CU8tiSOH.js";import"./_initCloneObject-BtS9Lr92.js";import"./isArrayLike-DBJ5VOVB.js";import"./isObjectLike-Cu7zvyZq.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-Dxzbedgu.js";import"./noop-DX6rZLP_.js";import"./merge-CvkBQyYg.js";import"./identity-DKeuBCMA.js";import"./_isIterateeCall-DxE_HXvA.js";import"./Skeleton-DmAZtRms.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./useMutation-DjwfMZ6R.js";import"./useInfiniteQuery-DbpUtHH4.js";import"./VerificationSubmission-BmZsZ0JS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./OrientationBanner-C7CmOmBW.js";import"./index-C1_KPTmG.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-B22pQuiY.js";import"./Alert-Dcz6JZ5x.js";import"./AlertTitle-D21D8EIu.js";import"./ClickAwayListener-D7YV5tOA.js";import"./Button-jaxqGIs_.js";import"./SynapseConstants-CXjze24f.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-WscWG_aD.js";import"./CheckCircleTwoTone-ChmDaZaB.js";import"./calculateFriendlyFileSize-6vvdb7nH.js";import"./inputBaseClasses-BQMLzgta.js";import"./Link-CFsiiapl.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./LayersTwoTone-hfVo2OcY.js";import"./ErrorOutlined-Cv1ApGtt.js";import"./GetAppTwoTone-2-W2Mxbb.js";import"./InfoOutlined-BOPmYxHD.js";import"./DeleteTwoTone-BaSxwZ9v.js";import"./LinearProgress-Db_UF_B3.js";import"./ConditionalWrapper-Be926PbJ.js";import"./InputLabel-WFlJj3PA.js";import"./isMuiElement-DAcuSkv2.js";import"./Input-DX0FyYX4.js";const p=w(),W=[p.display({id:"removeFavorite",cell:r=>e.jsx(k,{entityId:r.row.original.id}),size:60,enableResizing:!1,meta:{textAlign:"center"}}),p.accessor("name",{cell:r=>e.jsx("a",{rel:"noopener noreferrer",href:`${z.PORTAL}Synapse:${r.row.original.id}`,children:r.row.original.name}),enableGlobalFilter:!0,header:r=>e.jsx(d,{...r,title:"Name"}),size:400,enableColumnFilter:!1,sortingFn:"alphanumeric",enableSorting:!0}),p.accessor("type",{cell:r=>{const o=g(r.row.original.type);return e.jsxs(e.Fragment,{children:[e.jsx(D,{type:o,style:{marginRight:"5px"}}),f(o)]})},header:r=>e.jsx(d,{...r,title:"Type"}),size:160,enableGlobalFilter:!1,sortingFn:"alphanumeric",filterFn:"arrIncludes",meta:{enableMultipleSelect:!0,filterVariant:"enumeration",getDisplayText:r=>f(g(r))},enableSorting:!0})];function q(){const{accessToken:r}=O(),[o,y]=i.useState(""),[n,m]=i.useState(),{data:t,isLoading:l,isError:c,error:a}=P(),v=i.useMemo(()=>(t==null?void 0:t.results)??[],[t==null?void 0:t.results]),u=T({data:v,columns:W,getCoreRowModel:R(),getFilteredRowModel:E(),getSortedRowModel:M(),getFacetedRowModel:N(),getFacetedUniqueValues:C(),globalFilterFn:"includesString",state:{globalFilter:o},columnResizeMode:"onChange"});if(i.useEffect(()=>{c&&a&&m(a)},[c,a]),i.useEffect(()=>{m(r?void 0:new Error("Please sign in to access your favorites."))},[r]),n)return e.jsx(A,{error:n});const S=u.getRowModel().rows.length>0;return e.jsxs("div",{className:"FavoritesPage",children:[e.jsx(H,{InputProps:{startAdornment:e.jsx(U,{position:"start",children:e.jsx(G,{icon:"search",wrap:!1})})},type:"search",placeholder:"Favorite Name",value:o,onChange:j=>{y(j.target.value)},fullWidth:!0,sx:{mb:4,maxWidth:"800px"}}),e.jsx(b,{table:u,fullWidth:!1}),!S&&!l&&e.jsxs(V,{sx:{textAlign:"center"},my:2,gap:1,children:[e.jsx(I,{height:"150px"}),(t==null?void 0:t.results.length)==0?e.jsx("p",{children:"You currently have no favorites"}):e.jsx("p",{children:"No matching favorites found"})]}),l&&e.jsx("div",{className:"placeholder",children:e.jsx(_,{size:30})})]})}const Ar={title:"Synapse/FavoritesPage",component:q},s={};var h,x,F;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const Dr=["Demo"];export{s as Demo,Dr as __namedExportsOrder,Ar as default};
