import{l as n}from"./index-2wK1gg-_.js";import{a as s}from"./VerificationSubmission-BmZsZ0JS.js";import"./StringUtils-DFpF2_59.js";import{i,B as u}from"./useFiles-Dp-qtbfr.js";const l=Object.values(s).reduce((e,r)=>({...e,[r]:!1}),{});function O(e={portalOrigin:i(u.PORTAL_ENDPOINT),overrides:{}}){const{portalOrigin:r,overrides:a}=e;return n.rest.get(`${r}Portal/featureflags`,(p,o,t)=>o(t.status(200),t.json({...l,...a}),t.set("Content-Type","application/json")))}export{O as g};
