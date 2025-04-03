import{j as $}from"./jsx-runtime-Du8NFWEI.js";import{I as fe}from"./index-C1_KPTmG.js";import{s as pe}from"./spreadSx-CwcO6WA9.js";import{r as C,R as he}from"./index-Dl6G-zuu.js";import{F as ge}from"./FullWidthAlert-CcMr282B.js";const w={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"};let ve=0;function _e(e,t){const o=`atom${++ve}`,c={toString:()=>o};return typeof e=="function"?c.read=e:(c.init=e,c.read=we,c.write=me),t&&(c.write=t),c}function we(e){return e(this)}function me(e,t,o){return t(this,typeof o=="function"?o(e(this)):o)}const L=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,U=e=>"init"in e,K=e=>!!e.write,N=new WeakMap,ye=(e,t)=>{N.set(e,t),e.catch(()=>{}).finally(()=>N.delete(e))},G=(e,t)=>{const o=N.get(e);o&&(N.delete(e),o(t))},X=(e,t)=>{e.status="fulfilled",e.value=t},Z=(e,t)=>{e.status="rejected",e.reason=t},Se=e=>typeof(e==null?void 0:e.then)=="function",P=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),Q=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),k=e=>!!e&&"v"in e&&e.v instanceof Promise,Ee=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,D=e=>{if("e"in e)throw e.e;return e.v},oe=()=>{const e=new WeakMap,t=new WeakMap,o=[],c=new WeakMap;let h,m;(w?"production":void 0)!=="production"&&(h=new Set,m=new Set);const f=n=>e.get(n),_=(n,i)=>{i.d.forEach((l,a)=>{var s;if(!c.has(a)){const u=f(a);(s=o[o.length-1])==null||s.add(a),c.set(a,[u,new Set]),u&&_(a,u)}c.get(a)[1].add(n)})},E=(n,i)=>{var l;(w?"production":void 0)!=="production"&&Object.freeze(i);const a=f(n);if(e.set(n,i),c.has(n)||((l=o[o.length-1])==null||l.add(n),c.set(n,[a,new Set]),_(n,i)),k(a)){const s="v"in i?i.v instanceof Promise?i.v:Promise.resolve(i.v):Promise.reject(i.e);a.v!==s&&G(a.v,s)}},y=(n,i,l,a)=>{const s=new Map(a?i.d:null);let u=!1;l.forEach((r,d)=>{!r&&L(n,d)&&(r=i),r?(s.set(d,r),i.d.get(d)!==r&&(u=!0)):(w?"production":void 0)!=="production"&&console.warn("[Bug] atom state not found")}),(u||i.d.size!==s.size)&&(i.d=s)},S=(n,i,l,a)=>{const s=f(n),u={d:(s==null?void 0:s.d)||new Map,v:i};if(l&&y(n,u,l,a),P(s,u)&&s.d===u.d)return s;if(k(s)&&k(u)&&Ee(s,u)){if(s.d===u.d)return s;u.v=s.v}return E(n,u),u},T=(n,i,l,a)=>{if(Se(i)){let s;const u=()=>{const d=f(n);if(!k(d)||d.v!==r)return;const v=S(n,r,l);t.has(n)&&d.d!==v.d&&H(n,v,d.d)},r=new Promise((d,v)=>{let p=!1;i.then(g=>{p||(p=!0,X(r,g),d(g),u())},g=>{p||(p=!0,Z(r,g),v(g),u())}),s=g=>{p||(p=!0,g.then(A=>X(r,A),A=>Z(r,A)),d(g))}});return r.orig=i,r.status="pending",ye(r,d=>{d&&s(d),a==null||a()}),S(n,r,l,!0)}return S(n,i,l)},I=(n,i,l)=>{const a=f(n),s={d:(a==null?void 0:a.d)||new Map,e:i};return l&&y(n,s,l),Q(a,s)&&a.d===s.d?a:(E(n,s),s)},O=(n,i)=>{const l=f(n);if(!i&&l&&(t.has(n)||Array.from(l.d).every(([p,g])=>{if(p===n)return!0;const A=O(p);return A===g||P(A,g)})))return l;const a=new Map;let s=!0;const u=p=>{if(L(n,p)){const A=f(p);if(A)return a.set(p,A),D(A);if(U(p))return a.set(p,void 0),p.init;throw new Error("no atom init")}const g=O(p);return a.set(p,g),D(g)};let r,d;const v={get signal(){return r||(r=new AbortController),r.signal},get setSelf(){return(w?"production":void 0)!=="production"&&!K(n)&&console.warn("setSelf function cannot be used with read-only atom"),!d&&K(n)&&(d=(...p)=>{if((w?"production":void 0)!=="production"&&s&&console.warn("setSelf function cannot be called in sync"),!s)return x(n,...p)}),d}};try{const p=n.read(u,v);return T(n,p,a,()=>r==null?void 0:r.abort())}catch(p){return I(n,p,a)}finally{s=!1}},W=n=>D(O(n)),le=n=>{let i=t.get(n);return i||(i=j(n)),i},V=(n,i)=>!i.l.size&&(!i.t.size||i.t.size===1&&i.t.has(n)),de=n=>{const i=t.get(n);i&&V(n,i)&&F(n)},z=n=>{const i=r=>{var d,v;const p=new Set((d=t.get(r))==null?void 0:d.t);return(v=c.get(r))==null||v[1].forEach(g=>{p.add(g)}),p},l=new Array,a=new Set,s=r=>{if(!a.has(r)){a.add(r);for(const d of i(r))r!==d&&s(d);l.push(r)}};s(n);const u=new Set([n]);for(let r=l.length-1;r>=0;--r){const d=l[r],v=f(d);if(!v)continue;let p=!1;for(const g of v.d.keys())if(g!==d&&u.has(g)){p=!0;break}if(p){const g=O(d,!0);P(v,g)||u.add(d)}}},J=(n,...i)=>{let l=!0;const a=r=>D(O(r)),s=(r,...d)=>{let v;if(L(n,r)){if(!U(r))throw new Error("atom not writable");const p=f(r),g=T(r,d[0]);P(p,g)||z(r)}else v=J(r,...d);if(!l){const p=B([r]);(w?"production":void 0)!=="production"&&h.forEach(g=>g({type:"async-write",flushed:p}))}return v},u=n.write(a,s,...i);return l=!1,u},x=(n,...i)=>{o.push(new Set([n]));const l=J(n,...i),a=B(o.pop());return(w?"production":void 0)!=="production"&&h.forEach(s=>s({type:"write",flushed:a})),l},j=(n,i,l)=>{var a;const s=l||[];(a=f(n))==null||a.d.forEach((r,d)=>{const v=t.get(d);v?v.t.add(n):d!==n&&j(d,n,s)}),O(n);const u={t:new Set(i&&[i]),l:new Set};if(t.set(n,u),(w?"production":void 0)!=="production"&&m.add(n),K(n)&&n.onMount){const{onMount:r}=n;s.push(()=>{const d=r((...v)=>x(n,...v));d&&(u.u=d)})}return l||s.forEach(r=>r()),u},F=n=>{var i;const l=(i=t.get(n))==null?void 0:i.u;l&&l(),t.delete(n),(w?"production":void 0)!=="production"&&m.delete(n);const a=f(n);a?(k(a)&&G(a.v),a.d.forEach((s,u)=>{if(u!==n){const r=t.get(u);r&&(r.t.delete(n),V(u,r)&&F(u))}})):(w?"production":void 0)!=="production"&&console.warn("[Bug] could not find atom state to unmount",n)},H=(n,i,l)=>{const a=new Set(i.d.keys()),s=new Set;l==null||l.forEach((u,r)=>{if(a.has(r)){a.delete(r);return}s.add(r);const d=t.get(r);d&&d.t.delete(n)}),a.forEach(u=>{const r=t.get(u);r?r.t.add(n):t.has(n)&&j(u,n)}),s.forEach(u=>{const r=t.get(u);r&&V(u,r)&&F(u)})},B=n=>{let i;(w?"production":void 0)!=="production"&&(i=new Set);const l=[],a=s=>{var u;if(!c.has(s))return;const[r,d]=c.get(s);c.delete(s),l.push([s,r]),d.forEach(a),(u=f(s))==null||u.d.forEach((v,p)=>a(p))};if(n.forEach(a),l.forEach(([s,u])=>{const r=f(s);if(!r){(w?"production":void 0)!=="production"&&console.warn("[Bug] no atom state to flush");return}if(r!==u){const d=t.get(s);d&&r.d!==(u==null?void 0:u.d)&&H(s,r,u==null?void 0:u.d),d&&!(!k(u)&&(P(u,r)||Q(u,r)))&&(d.l.forEach(v=>v()),(w?"production":void 0)!=="production"&&i.add(s))}}),(w?"production":void 0)!=="production")return i},Y=(n,i)=>{const l=le(n),a=B([n]),s=l.l;return s.add(i),(w?"production":void 0)!=="production"&&h.forEach(u=>u({type:"sub",flushed:a})),()=>{s.delete(i),de(n),(w?"production":void 0)!=="production"&&h.forEach(u=>u({type:"unsub"}))}};return(w?"production":void 0)!=="production"?{get:W,set:x,sub:Y,dev_subscribe_store:(n,i)=>{if(i!==2)throw new Error("The current StoreListener revision is 2.");return h.add(n),()=>{h.delete(n)}},dev_get_mounted_atoms:()=>m.values(),dev_get_atom_state:n=>e.get(n),dev_get_mounted:n=>t.get(n),dev_restore_atoms:n=>{o.push(new Set);for(const[l,a]of n)U(l)&&(T(l,a),z(l));const i=B(o.pop());h.forEach(l=>l({type:"restore",flushed:i}))}}:{get:W,set:x,sub:Y}};let q;(w?"production":void 0)!=="production"&&(typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__=="number"?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1);const Ae=()=>(q||((w?"production":void 0)!=="production"&&globalThis.__NUMBER_OF_JOTAI_INSTANCES__!==1&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),q=oe()),q),Ce={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"},re=C.createContext(void 0),ie=e=>C.useContext(re)||Ae(),Ge=({children:e,store:t})=>{const o=C.useRef();return!t&&!o.current&&(o.current=oe()),C.createElement(re.Provider,{value:t||o.current},e)},Oe=e=>typeof(e==null?void 0:e.then)=="function",be=he.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)});function ke(e,t){const o=ie(),[[c,h,m],f]=C.useReducer(y=>{const S=o.get(e);return Object.is(y[0],S)&&y[1]===o&&y[2]===e?y:[S,o,e]},void 0,()=>[o.get(e),o,e]);let _=c;return(h!==o||m!==e)&&(f(),_=o.get(e)),C.useEffect(()=>{const y=o.sub(e,()=>{f()});return f(),y},[o,e,void 0]),C.useDebugValue(_),Oe(_)?be(_):_}function Te(e,t){const o=ie();return C.useCallback((...h)=>{if((Ce?"production":void 0)!=="production"&&!("write"in e))throw new Error("not writable atom");return o.set(e,...h)},[o,e])}function Pe(e,t){return[ke(e),Te(e)]}var se={};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ce=se.parse=De,ee=se.serialize=Me,xe=decodeURIComponent,Be=encodeURIComponent,M=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function De(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var o={},c=t||{},h=e.split(";"),m=c.decode||xe,f=0;f<h.length;f++){var _=h[f],E=_.indexOf("=");if(!(E<0)){var y=_.substring(0,E).trim();if(o[y]==null){var S=_.substring(E+1,_.length).trim();S[0]==='"'&&(S=S.slice(1,-1)),o[y]=Ne(S,m)}}}return o}function Me(e,t,o){var c=o||{},h=c.encode||Be;if(typeof h!="function")throw new TypeError("option encode is invalid");if(!M.test(e))throw new TypeError("argument name is invalid");var m=h(t);if(m&&!M.test(m))throw new TypeError("argument val is invalid");var f=e+"="+m;if(c.maxAge!=null){var _=c.maxAge-0;if(isNaN(_)||!isFinite(_))throw new TypeError("option maxAge is invalid");f+="; Max-Age="+Math.floor(_)}if(c.domain){if(!M.test(c.domain))throw new TypeError("option domain is invalid");f+="; Domain="+c.domain}if(c.path){if(!M.test(c.path))throw new TypeError("option path is invalid");f+="; Path="+c.path}if(c.expires){if(typeof c.expires.toUTCString!="function")throw new TypeError("option expires is invalid");f+="; Expires="+c.expires.toUTCString()}if(c.httpOnly&&(f+="; HttpOnly"),c.secure&&(f+="; Secure"),c.sameSite){var E=typeof c.sameSite=="string"?c.sameSite.toLowerCase():c.sameSite;switch(E){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return f}function Ne(e,t){try{return t(e)}catch{return e}}function Re(){return typeof document=="object"&&typeof document.cookie=="string"}function Ie(e,t){return typeof e=="string"?ce(e,t):typeof e=="object"&&e!==null?e:{}}function Ve(e,t){return typeof t>"u"&&(t=!e||e[0]!=="{"&&e[0]!=="["&&e[0]!=='"'),!t}function te(e,t){t===void 0&&(t={});var o=je(e);if(Ve(o,t.doNotParse))try{return JSON.parse(o)}catch{}return e}function je(e){return e&&e[0]==="j"&&e[1]===":"?e.substr(2):e}var b=function(){return b=Object.assign||function(e){for(var t,o=1,c=arguments.length;o<c;o++){t=arguments[o];for(var h in t)Object.prototype.hasOwnProperty.call(t,h)&&(e[h]=t[h])}return e},b.apply(this,arguments)},Fe=function(){function e(t,o){var c=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=Ie(t,o),new Promise(function(){c.HAS_DOCUMENT_COOKIE=Re()}).catch(function(){})}return e.prototype._updateBrowserValues=function(t){this.HAS_DOCUMENT_COOKIE&&(this.cookies=ce(document.cookie,t))},e.prototype._emitChange=function(t){for(var o=0;o<this.changeListeners.length;++o)this.changeListeners[o](t)},e.prototype.get=function(t,o,c){return o===void 0&&(o={}),this._updateBrowserValues(c),te(this.cookies[t],o)},e.prototype.getAll=function(t,o){t===void 0&&(t={}),this._updateBrowserValues(o);var c={};for(var h in this.cookies)c[h]=te(this.cookies[h],t);return c},e.prototype.set=function(t,o,c){var h;typeof o=="object"&&(o=JSON.stringify(o)),this.cookies=b(b({},this.cookies),(h={},h[t]=o,h)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=ee(t,o,c)),this._emitChange({name:t,value:o,options:c})},e.prototype.remove=function(t,o){var c=o=b(b({},o),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=b({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=ee(t,"",c)),this._emitChange({name:t,value:void 0,options:o})},e.prototype.addChangeListener=function(t){this.changeListeners.push(t)},e.prototype.removeChangeListener=function(t){var o=this.changeListeners.indexOf(t);o>=0&&this.changeListeners.splice(o,1)},e}();const ue=new Fe,Xe={functionalAllowed:!0,analyticsAllowed:!0},Le={functionalAllowed:!1,analyticsAllowed:!1},Ue=()=>{const e=ue.get(ae,{doNotParse:!0});let t=Le;try{e!=null&&(t=JSON.parse(e))}catch{console.error(`Failed to parse CookiePreference from value, falling back to allow none. value=${e}`)}return t},ae="org.sagebionetworks.security.cookies.portal.preference",Ke=_e(Ue()),qe=()=>{const[e,t]=Pe(Ke),o=C.useCallback(c=>{c.functionalAllowed||(localStorage.clear(),sessionStorage.clear());const h=new Date,m=new Date;m.setFullYear(h.getFullYear()+1);const f=window.location.hostname.toLowerCase();ue.set(ae,c,{path:"/",expires:m,domain:f.endsWith(".synapse.org")?"synapse.org":void 0}),t(c)},[t]);return[e,o]},We=["Challenges","CohortBuilder","DataAccessManagement","Datasets","Discussions","Docker","Favorites","Files","Following","Projects","Tables","Teams","TrashCan","Wikis","Donate"];function R(e){return"orientation_banner_"+e.toLowerCase()+"_dismissed"}We.map(e=>R(e));function ne(e){const{name:t,title:o,text:c,primaryButtonConfig:h,secondaryButtonConfig:m,sx:f}=e,[_]=qe(),E=R(t),[y,S]=C.useState(localStorage.getItem(E)===null),T=O=>({[O.breakpoints.down("md")]:{display:"none"},backgroundColor:"#F9FAFB",border:"none",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.05)",minHeight:"152px",mt:0,paddingLeft:4,".MuiAlert-icon":{mr:5},".MuiAlertTitle-root":{color:O.palette.grey[1e3]}}),I=fe[t];return $.jsx(ge,{show:y,isGlobal:!1,title:o,description:c,primaryButtonConfig:h,secondaryButtonConfig:m,icon:$.jsx(I,{}),onClose:()=>{_.functionalAllowed&&localStorage.setItem(E,"true"),S(!1)},sx:pe(T,f)})}try{R.displayName="getOrientationBannerKey",R.__docgenInfo={description:"",displayName:"getOrientationBannerKey",props:{}}}catch{}try{ne.displayName="OrientationBanner",ne.__docgenInfo={description:"",displayName:"OrientationBanner",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"Challenges"'},{value:'"CohortBuilder"'},{value:'"DataAccessManagement"'},{value:'"Datasets"'},{value:'"Discussions"'},{value:'"Docker"'},{value:'"Favorites"'},{value:'"Files"'},{value:'"Following"'},{value:'"Projects"'},{value:'"Tables"'},{value:'"Teams"'},{value:'"TrashCan"'},{value:'"Wikis"'},{value:'"Donate"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},primaryButtonConfig:{defaultValue:null,description:"",name:"primaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},secondaryButtonConfig:{defaultValue:null,description:"",name:"secondaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}export{Fe as C,ne as O,Ge as P,ae as a,Xe as b,Le as c,se as d,_e as e,Te as f,R as g,ke as h,Pe as i,qe as u};
