import{M as l}from"./useFiles-n9SbVdQm.js";import{l as h}from"./index-B8dDJfR-.js";import{T as w}from"./TwoFactorAuthEnabledRequirement-DZHPDqil.js";import"./VerificationSubmission-CWAFIXEx.js";import"./SynapseConstants-D9O0ArTa.js";import"./OrientationBanner-DVuFBraK.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-vu6SzZxt.js";import"./Alert-By3H5ehm.js";import"./createTheme-DCAEEeQ9.js";import"./index-GEGPABih.js";import"./styled-GqwmQbHR.js";import"./mergeSlotProps-D-cfru4O.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BDoLG09A.js";import"./createSvgIcon-IuIKk-AJ.js";import"./Paper-Dap2c6xL.js";import"./IconButton-xnDYVMXw.js";import"./ButtonBase-BN-dALdo.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./Stack-CMgji9n-.js";import"./Box-sTghsUmj.js";import"./AlertTitle-C14X1--E.js";import"./Typography-u5-eOh5K.js";import"./useTheme-C2nLQS7p.js";import"./Grow-BjId_ape.js";import"./index-BIzb42Jq.js";import"./utils-nOa-7XVu.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DghXNkD2.js";import"./index-pKvUPVqT.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-mTo7xxsU.js";import"./StringUtils-DBSsSsIU.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cctz1ZmX.js";import"./CheckCircleTwoTone-CDfc8b31.js";import"./calculateFriendlyFileSize-BBeMI-i_.js";import"./Skeleton-h9JRD3HJ.js";import"./inputBaseClasses-CTPjn8Z_.js";import"./Fade-Cxdmh2eZ.js";import"./utils-Bx1BRerw.js";import"./useQuery-BiN9FESP.js";import"./_initCloneObject-BAcHLPB8.js";import"./_baseTimes-M2nZWodf.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./cloneDeep-CT__oUM4.js";import"./Link-CWXcK22Y.js";import"./Collapse-CmkIepef.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-6t4vjKrJ.js";import"./_isIterateeCall-FuixZKJ7.js";import"./util-BbuHFHEZ.js";import"./useTwoFactorEnrollment-DgIftxhS.js";import"./useMutation-DjwfMZ6R.js";import"./QueryFilterUtils-rst1N2u8.js";import"./isNumber-BR1aE1rr.js";import"./TwoFactorEnrollmentForm-BNembXj5.js";import"./LeftRightPanel-DSyjiN9M.js";import"./IconSvg-BABzEMtP.js";import"./LayersTwoTone-fKfzxiPS.js";import"./ErrorOutlined-BKx_L9lY.js";import"./GetAppTwoTone-CD3TgP2w.js";import"./InfoOutlined-DpeT4h8X.js";import"./DeleteTwoTone-XAGzVgvj.js";import"./LoadingScreen-BJ8_eQQV.js";import"./Backdrop-80n8Lf7R.js";import"./LinearProgress-KBp2Y_fD.js";import"./TextField-C8k2Nz86.js";import"./InputLabel-CewkyxXc.js";import"./useFormControl-CQLCXd-P.js";import"./ownerWindow-BN2rbQ_G.js";import"./isMuiElement-DAcuSkv2.js";import"./DialogContent-EGs635ov.js";import"./Modal-BtUDilAu.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Divider-BaVRBdbx.js";import"./dividerClasses-C4eIAzo0.js";import"./RequirementItem-C_K82llp.js";import"./ConditionalWrapper-Be926PbJ.js";import"./Avatar-C5D2-eAC.js";const or={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:w,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function n(c){return[h.rest.get(`${l}/auth/v1/2fa`,async(A,u,o)=>{const d={status:c?"ENABLED":"DISABLED"};return u(o.status(200),o.json(d))})]}const t={parameters:{msw:{handlers:[n(!0)]}}},r={parameters:{msw:{handlers:[n(!1)]}}};var m,p,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var e,a,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const mr=["Enabled","Disabled"];export{r as Disabled,t as Enabled,mr as __namedExportsOrder,or as default};
