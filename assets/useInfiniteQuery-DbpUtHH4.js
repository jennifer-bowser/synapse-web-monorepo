import{Q as g,h as d}from"./useQuery-6SsvXKRa.js";import{aw as f,ax as v,ay as x}from"./useFiles-Dp-qtbfr.js";var b=class extends g{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:f()},t)}getOptimisticResult(e){return e.behavior=f(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var c,n,u,o;const{state:s}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:P}=r,a=i&&((n=(c=s.fetchMeta)==null?void 0:c.fetchMore)==null?void 0:n.direction)==="forward",h=i&&((o=(u=s.fetchMeta)==null?void 0:u.fetchMore)==null?void 0:o.direction)==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:v(t,s.data),hasPreviousPage:x(t,s.data),isFetchingNextPage:a,isFetchingPreviousPage:h,isRefetching:P&&!a&&!h}}};function M(e,t){return d(e,b)}export{M as u};
