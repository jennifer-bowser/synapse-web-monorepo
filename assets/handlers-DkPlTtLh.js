import{by as y,bz as j,bA as C,bB as T,bC as N,bD as P,g as D,B as S}from"./useFiles-D-hdekB1.js";import{l as i}from"./index-1859C49g.js";import{M as _}from"./mockAnnotationColumns-CuHU5xpS.js";import{g as M}from"./accessRequirementAclHandlers-DSw1SQ7F.js";import{c as B}from"./accessRequirementHandlers-Bpw5SArE.js";import{g as F,a as U}from"./teamHandlers-DB7qgpzC.js";import{g as k}from"./dataAccessRequestHandlers-CLbQC_Lb.js";import{s as p,q as $}from"./VerificationSubmission-BnFne12N.js";import{m as A,a as H}from"./mock_discussion-Be0MYLav.js";import{m as O}from"./mockProject-B3QRG6UU.js";import{M as d}from"./mock_user_profile-CyZOyNQ0.js";import{B as h}from"./BasicMockedCrudService-DeSDZ0UD.js";import{g as L}from"./entityHandlers-Cg3-WRJ1.js";import{a as b}from"./mockEvaluationQueue-CtEq792Z.js";import{g as W}from"./featureFlagHandlers-JY6PWtjq.js";import{g as q}from"./fileHandlers-Ba_BldWY.js";import{g as V}from"./personalAccessTokenHandlers-BafiDycA.js";import{g as G}from"./researchProjectHandlers-D3JHq_xO.js";import{g as K}from"./resetTwoFactorAuthHandlers-Jk0KWEJ4.js";import{f as v}from"./fakerUtils-bF6LKVwK.js";import{c as Y,b as X,a as z,g as Q}from"./tableQueryHandlers-C0cY4dF-.js";import{g as J,a as Z}from"./userProfileHandlers-BrHRt7zr.js";import{W as g}from"./WebhookVerificationStatus-CaCjD9x8.js";import{b as x}from"./wikiHandlers-BJj255tg.js";const tt=new h({initialData:A,idField:"id",autoGenerateId:!0}),w=new h({initialData:H,idField:"id",autoGenerateId:!0});function et(e,o){return w.getMany(r=>r.forumId===e).filter(r=>{switch(o){case p.NO_FILTER:return!0;case p.DELETED_ONLY:return r.isDeleted;case p.EXCLUDE_DELETED:return!r.isDeleted}})}function st(e){return[i.rest.get(`${e}${y}/:id`,async(o,r,t)=>{let s=404,a={reason:`MSW could not find a mock forum object with ID ${o.params.id}`};const n=tt.getOneById(o.params.id);return n&&(s=200,a=n),r(t.status(s),t.json(a))}),i.rest.get(`${e}${j}/:id`,async(o,r,t)=>{let s=404,a={reason:`MSW could not find a mock discussion thread bundle object with ID ${o.params.id}`};o.params.id==="messageUrl"&&(a={reason:"GET /thread/messageUrl is not yet implemented"});const n=w.getOneById(o.params.id);return n&&(s=200,a=n),r(t.status(s),t.json(a))}),i.rest.post(`${e}${j}`,async(o,r,t)=>{const s=await o.json(),a=w.create({forumId:s.forumId,projectId:O.id,title:s.title,createdOn:new Date().toISOString(),createdBy:String(d),modifiedOn:new Date().toISOString(),etag:"etag",messageKey:"todo key",numberOfViews:0,numberOfReplies:0,lastActivity:new Date().toISOString(),activeAuthors:[String(d)],isEdited:!1,isDeleted:!1,isPinned:!1});return r(t.status(201),t.json(a))}),i.rest.get(`${e}${C(":forumId")}`,async(o,r,t)=>{const s=o.url.searchParams.get("offset"),a=s?parseInt(s):0,n=o.url.searchParams.get("limit"),u=n?parseInt(n):10,l=o.params.filter??p.EXCLUDE_DELETED,m=et(o.params.forumId,l),I={results:m.slice(a,a+u),totalNumberOfResults:m.length};return r(t.status(200),t.json(I))}),i.rest.get(`${e}${y}/:id/moderators`,async(o,r,t)=>{const s={results:[String(d)],totalNumberOfResults:1};return r(t.status(200),t.json(s))})]}const ot={creators:[{creatorName:"Farnsworth, Hubert"},{creatorName:"Wong, Amy"}],titles:[{title:"Mathematics of quantum neutrino fields"}],publicationYear:3024};function rt(e,o=ot){return[i.rest.get(`${e}${T}/doi`,async(r,t,s)=>t(s.status(201),s.json(o)))]}function at(e){return[i.rest.get(`${e}${N(":evaluationId")}`,async(o,r,t)=>{let s=404,a={reason:`Mock Service worker could not find a mock evaluation queue with ID ${o.params.evaluationId}`};const n=b.find(u=>u.id===o.params.entityId);return n&&(a=n,s=200),r(t.status(s),t.json(a))}),i.rest.get(`${e}${P}`,async(o,r,t)=>{const a={results:b,totalNumberOfResults:b.length};return r(t.status(200),t.json(a))})]}function nt(e){return[i.rest.post(`${e}${T}/message`,async(o,r,t)=>{const s=await o.json();return r(t.status(201),t.json(s))})]}const it="https://short.io/abc123",ut=(e,o)=>({id:"123456",originalURL:e,shortURL:it,domain:o}),ct=()=>[i.rest.post("https://api.short.io/links/public",async(e,o,r)=>{const t=await e.json();return o(r.status(200),r.json(ut(t.originalURL,t.domain)))})];function R(e){return{subscriptionId:String(v.number.int({min:1e3,max:9999})),subscriberId:String(d),createdOn:v.date.anytime().toISOString(),...e}}const lt=A.map(e=>R({objectId:e.id,objectType:$.FORUM})),mt=H.map(e=>R({objectType:$.THREAD,objectId:e.id})),f=new h({initialData:[...lt,...mt],idField:"subscriptionId",autoGenerateId:!0});function E(e,o="ASC",r=0,t=10,s){const a=f.getAll().filter(u=>e?u.objectType===e:!0).filter(u=>s?s.includes(u.objectId):!0).sort((u,l)=>{const m=new Date(l.createdOn).getTime()-new Date(u.createdOn).getTime();return o==="ASC"?m:-1*m}),n=a.length;return{results:a.slice(r,r+t),totalNumberOfResults:n}}function dt(e){return[i.rest.get(`${e}/repo/v1/subscription/all`,async(o,r,t)=>{const s=o.url.searchParams.get("objectType")??void 0,a=o.url.searchParams.get("sortDirection")??void 0,n=o.url.searchParams.get("offset"),u=n?parseInt(n):void 0,l=o.url.searchParams.get("limit"),m=l?parseInt(l):void 0,I=E(s??void 0,a,u,m);return r(t.status(200),t.json(I))}),i.rest.post(`${e}/repo/v1/subscription/list`,async(o,r,t)=>{const s=await o.json(),a=E(s.objectType,s.sortDirection,void 0,void 0,s.idList);return r(t.status(200),t.json(a))}),i.rest.post(`${e}/repo/v1/subscription`,async(o,r,t)=>{const s=await o.json(),a=f.create({subscriberId:String(d),objectId:s.objectId,objectType:s.objectType,createdOn:new Date().toISOString()});return r(t.status(201),t.json(a))}),i.rest.delete(`${e}/repo/v1/subscription/:id`,async(o,r,t)=>{const s=o.params.id;return f.delete(s),r(t.status(200),t.body(""))}),i.rest.post(`${e}/repo/v1/subscription/subscribers`,async(o,r,t)=>{const s=await o.json(),n={subscribers:f.getMany(u=>u.objectType===s.objectType&&u.objectId===s.objectId).map(u=>u.subscriberId)};return r(t.status(200),t.json(n))})]}const c=new h({initialData:[],idField:"id",autoGenerateId:!0});function pt(e){return[i.rest.get(`${e}/repo/v1/webhook/:webhookId`,async(o,r,t)=>{const s=o.params.webhookId,a=c.getOneById(s);return a?r(t.status(200),t.json(a)):r(t.status(404),t.json({reason:`Webhook with ID ${s} not found`}))}),i.rest.post(`${e}/repo/v1/webhook/list`,async(o,r,t)=>{const s={page:c.getAll()};return r(t.status(200),t.json(s))}),i.rest.post(`${e}/repo/v1/webhook`,async(o,r,t)=>{const s=await o.json(),a=c.create({...s,verificationStatus:g.CODE_SENT});return r(t.status(201),t.json(a))}),i.rest.put(`${e}/repo/v1/webhook/:webhookId`,async(o,r,t)=>{const s=o.params.webhookId,a=await o.json(),n=c.getOneById(s);if(!n)return r(t.status(404),t.json({reason:`Webhook with ID ${s} not found`}));let u=n==null?void 0:n.verificationStatus;n&&n.invokeEndpoint!==a.invokeEndpoint&&(u=g.CODE_SENT);const l=c.update(s,{...a,verificationStatus:u});return r(t.status(201),t.json(l))}),i.rest.post(`${e}/repo/v1/webhook/:webhookId/verify`,async(o,r,t)=>{const s=o.params.webhookId,a=c.getOneById(s);if(!a)return r(t.status(404),t.json({reason:`Webhook with ID ${s} not found`}));const n=c.update(s,{...a,verificationStatus:g.VERIFIED});return r(t.status(201),t.json(n))}),i.rest.put(`${e}/repo/v1/webhook/:webhookId/verificationCode`,async(o,r,t)=>{const s=o.params.webhookId,a=c.getOneById(s);return a?r(t.status(201),t.json(a)):r(t.status(404),t.json({reason:`Webhook with ID ${s} not found`}))}),i.rest.delete(`${e}/repo/v1/webhook/:webhookId`,async(o,r,t)=>{const s=o.params.webhookId;return c.delete(s),r(t.status(200),t.body(""))})]}const ft=(e,o)=>[i.rest.options("*",async(r,t,s)=>t(s.status(200))),i.rest.get(`${e}/auth/v1/authenticatedOn`,async(r,t,s)=>t(s.status(200),s.json({authenticatedOn:new Date().toISOString()}))),...L(e),...J(e),Z(e,!0,!0),...x(e),...B(e),...M(e),...k(e),...G(e),...q(e),...st(e),...dt(e),...at(e),Y(e),...X(_,e),...z(e),...V(e),...F(e),...U(e),...K(e),...nt(e),W({portalOrigin:o}),...Q(e),...rt(e),...ct(),...pt(e)];ft(D(S.REPO_ENDPOINT),D(S.PORTAL_ENDPOINT));export{ft as g};
