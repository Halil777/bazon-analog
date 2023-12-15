(this["webpackJsonplightence-admin"]=this["webpackJsonplightence-admin"]||[]).push([[13],{2248:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a=t(7),r=t(10),c=t(16),i=(t(0),t(60)),o=t(2258),s=t(292),d=t(293),l=t(294),u=t(2),b=["form","isFieldsChanged","setFieldsChanged","footer","loading","children"],j=function(e){var n=e.form,t=e.isFieldsChanged,s=e.setFieldsChanged,d=e.footer,l=e.loading,j=void 0!==l&&l,m=e.children,p=Object(c.a)(e,b),O=i.a.useForm(),f=Object(r.a)(O,1)[0],h=n||f;return Object(u.jsxs)(i.a,Object(a.a)(Object(a.a)({form:h},p),{},{children:[m,t&&(d||Object(u.jsx)(o.a,{loading:j,onCancel:function(){null===h||void 0===h||h.resetFields(),s&&s(!1)}}))]}))};j.Title=s.a,j.Item=d.a,j.List=l.a,j.useForm=i.a.useForm,j.Provider=i.a.Provider},2258:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(7),r=t(16),c=(t(0),t(41)),i=t(2200),o=t(27),s=t(18),d=t(2),l=["className","onCancel","loading"],u=function(e){var n=e.className,t=e.onCancel,u=e.loading,b=Object(r.a)(e,l),j=Object(i.a)().t;return Object(d.jsxs)(o.a,{className:n,gutter:[10,10],wrap:!1,children:[Object(d.jsx)(s.a,{span:12,children:Object(d.jsx)(c.a,Object(a.a)(Object(a.a)({block:!0,type:"ghost",onClick:t},b),{},{children:j("common.cancel")}))}),Object(d.jsx)(s.a,{span:12,children:Object(d.jsx)(c.a,Object(a.a)(Object(a.a)({block:!0,type:"primary",loading:u,htmlType:"submit"},b),{},{children:j("common.save")}))})]})}},2290:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t(0);var a,r=t(12),c=t(13),i=t(11),o=t(2317),s=Object(c.c)(o.a)(a||(a=Object(r.a)(["\n  padding: 0.375rem 0;\n  min-width: 7.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n\n  @media only screen and "," {\n    min-width: 6.5rem;\n  }\n"])),i.h.md),d=t(2),l=function(e){var n=e.color,t=e.text;return Object(d.jsx)(s,{color:n,children:t})}},2298:function(e,n,t){"use strict";var a=t(2318);t.d(n,"a",(function(){return a.a}))},2457:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,s,d,l,u,b,j,m,p,O,f,h,x,g,y=t(0),v=t(2200),k=t(87),F=t(10),C=t(60),I=t(86),_=t(23),w=t(193),M=[{id:1,name:"profile.nav.payments.status.paid",priority:w.a.LOW},{id:2,name:"profile.nav.payments.status.scheduled",priority:w.a.INFO},{id:3,name:"profile.nav.payments.status.pending",priority:w.a.MEDIUM},{id:4,name:"profile.nav.payments.status.failed",priority:w.a.HIGH}],T=t(46),z=t(2290),D=t(12),A=t(29),N=t(13),S=N.c.div(a||(a=Object(D.a)(["\n  padding: 1.5rem 3.5rem;\n  display: flex;\n  align-items: center;\n\n  background-color: var(--secondary-background-color);\n"]))),U=N.c.div(r||(r=Object(D.a)(["\n  width: 2rem;\n  margin-right: 1.25rem;\n"]))),E=Object(N.c)(A.a.Text)(c||(c=Object(D.a)(["\n  font-weight: 600;\n"]))),q=N.c.div(i||(i=Object(D.a)(["\n  padding: 1rem 2rem;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n\n    background-color: 1px solid rgba(var(--primary-rgb-color), 0.3);\n  }\n"]))),H=N.c.div(o||(o=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n\n  &:nth-last-of-type(1) {\n    margin-bottom: 0;\n  }\n"]))),L=Object(N.c)(A.a.Text)(s||(s=Object(D.a)(["\n  font-weight: 500;\n  font-size: 0.75rem;\n\n  color: var(--primary-color);\n"]))),V=N.c.div(d||(d=Object(D.a)(["\n  padding: 0.8rem;\n  text-align: center;\n"]))),R=t(41),P=t(82),$=t(2),B=function(e){var n=e.src,t=e.recipient,a=e.date,r=e.status,c=e.price,i=e.currency,o=Object(v.a)().t,s=Object(y.useMemo)((function(){return M.find((function(e){return e.id===r}))}),[r]);return s?Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(S,{children:[Object($.jsx)(U,{children:Object($.jsx)(P.a,{src:n,alt:t,shape:"circle"})}),Object($.jsx)(E,{children:t})]}),Object($.jsxs)(q,{children:[Object($.jsxs)(H,{children:[Object($.jsx)(L,{children:o("profile.nav.payments.date")}),Object($.jsx)(E,{children:T.a.format(a,"LL")})]}),Object($.jsxs)(H,{children:[Object($.jsx)(L,{children:o("profile.nav.payments.status.title")}),Object($.jsx)(z.a,{color:Object(_.c)(s.priority),text:o(s.name)})]}),Object($.jsxs)(H,{children:[Object($.jsx)(L,{children:o("profile.nav.payments.date")}),Object($.jsx)(E,{children:Object(_.f)(c,i)})]})]}),Object($.jsx)(V,{children:Object($.jsx)(R.a,{type:"link",children:o("profile.nav.payments.details")})})]}):null},J=t(298),Q=Object(N.c)(J.a)(l||(l=Object(D.a)(["\n  .ant-table-thead > tr > th {\n    border-top: 1px solid rgba(var(--primary-rgb-color), 0.3);\n\n    border-bottom: 1px solid rgba(var(--primary-rgb-color), 0.3);\n\n    color: var(--primary-color);\n\n    text-align: center;\n\n    &::before {\n      display: none;\n    }\n  }\n\n  .ant-table-tbody > tr > td {\n    border-bottom: 1px solid rgba(var(--primary--rgb-color), 0.3);\n\n    font-weight: 600;\n    font-size: 1rem;\n  }\n"]))),Y=N.c.div(u||(u=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  text-align: left;\n\n  & > span:first-of-type {\n    margin-right: 0.5rem;\n  }\n"]))),G=function(e){var n=e.payments,t=Object(v.a)().t,a=Object(y.useMemo)((function(){return[{title:t("profile.nav.payments.recipient"),dataIndex:"recipient",key:"recipient",render:function(e){return Object($.jsxs)(Y,{children:[Object($.jsx)(P.a,{src:e.img,alt:e.name}),e.name]})},align:"center"},{title:t("profile.nav.payments.date"),dataIndex:"date",key:"date",render:function(e){return T.a.format(e,"LL")},sorter:function(e,n){return e.date-n.date},align:"center"},{title:t("profile.nav.payments.status.title"),dataIndex:"status",key:"status",render:function(e){return Object($.jsx)(z.a,{color:Object(_.c)(e.priority),text:t(e.name).toUpperCase()})},align:"center"},{title:t("profile.nav.payments.totalAmount"),dataIndex:"totalAmount",key:"totalAmount",align:"center"},{title:"",dataIndex:"details",key:"details",align:"center",render:function(){return Object($.jsx)(R.a,{type:"link",children:t("profile.nav.payments.details")})}}]}),[t]),r=Object(y.useMemo)((function(){return n.map((function(e,n){return{key:n,recipient:{name:e.recipient,img:e.imgUrl},date:e.date,status:M.find((function(n){return n.id===e.status})),totalAmount:Object(_.f)(e.amount,e.currency),details:e}}))}),[n]);return Object($.jsx)(Q,{size:"middle",columns:a,dataSource:r,pagination:!1})},W=t(39),X=t(70),K=t(248),Z=t(11),ee=N.c.div(b||(b=Object(D.a)(["\n  ",";\n\n  @media only screen and "," {\n    ",";\n  }\n\n  @media only screen and "," {\n    margin: 0;\n  }\n"])),(function(e){return!e.isEmptyHistory&&"margin: 0 -".concat(K.a.mobile[1],"px -").concat(K.a.mobile[0],"px -").concat(K.a.mobile[1],"px")}),Z.h.md,(function(e){return!e.isEmptyHistory&&"margin: 0 -".concat(K.a.tablet[1],"px -").concat(K.a.tablet[0],"px -").concat(K.a.tablet[1],"px")}),Z.h.xl),ne=Object(N.c)(A.a.Text)(j||(j=Object(D.a)(["\n  @media only screen and "," {\n    font-size: 1rem;\n  }\n"])),Z.h.md),te=t(27),ae=t(18),re=function(){var e=Object(y.useState)([]),n=Object(F.a)(e,2),t=n[0],a=n[1],r=Object(W.a)(),c=r.mobileOnly,i=r.isTablet,o=Object(v.a)().t,s=Object(y.useMemo)((function(){return t.map((function(e){return Object($.jsx)(B,{src:e.imgUrl,recipient:e.recipient,date:e.date,status:e.status,price:e.amount,currency:e.currency},e.id)}))}),[t]);Object(y.useEffect)((function(){new Promise((function(e){setTimeout((function(){e([{id:1,recipient:"IBM Transactions",date:16260372e5,status:1,amount:500,currency:X.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png"},{id:2,recipient:"Citigroup",date:16304436e5,status:2,amount:40,currency:X.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988456/Ellipse_73_zanfs3.png"},{id:3,recipient:"Netflix",date:162837e7,status:3,amount:1200,currency:X.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png"},{id:4,recipient:"IBM Transactions",date:16226676e5,status:4,amount:190,currency:X.a.USD,imgUrl:"https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png"}])}),0)})).then((function(e){return a(e)}))}),[]);var d=Object(y.useMemo)((function(){return Object($.jsxs)(te.a,{gutter:[32,32],children:[Object($.jsx)(ae.a,{span:24,children:Object($.jsx)(C.a.Title,{children:o("profile.nav.payments.paymentHistory")})}),Object($.jsx)(ae.a,{span:24,children:Object($.jsxs)(ee,{isEmptyHistory:0===t.length,children:[c&&(t.length>0?s:Object($.jsx)(ne,{children:o("profile.nav.payments.noHistory")})),i&&Object($.jsx)(G,{payments:t})]})})]})}),[i,t,s,c,o]);return i?d:Object($.jsx)(I.a,{children:d})},ce=t(15),ie=t(7),oe=t(2377),se=(t(2382),N.c.div(m||(m=Object(D.a)(["\n  & > .rccs > .rccs__card--unknown > div {\n    background: ",";\n    background-size: cover;\n    transition: all 0.5s ease;\n  }\n\n  & > .rccs > .rccs__card {\n    & .rccs__card--front,\n    & .rccs__card--back {\n      box-shadow: none;\n    }\n\n    & > .rccs__card--front .rccs__issuer {\n      right: unset;\n      left: 10%;\n      background-position: left;\n    }\n\n    & > div {\n      color: var(--text-secondary-color);\n\n      & > .rccs__chip {\n        display: none;\n      }\n\n      & > div:first-of-type {\n        background: ",";\n        background-size: cover;\n        transition: all 0.5s ease;\n      }\n    }\n  }\n"])),(function(e){return"url(".concat(e.$background,")")}),(function(e){return"url(".concat(e.$background,")")}))),de=function(e){var n=e.className,t=e.cardData,a=e.children;return Object($.jsxs)(se,{className:n,$background:t.background,children:[Object($.jsx)(oe.a,Object(ie.a)({},t)),a]})},le=t(2347),ue=N.c.div(p||(p=Object(D.a)(["\n  display: flex;\n  position: absolute;\n  column-gap: 1rem;\n  top: 13%;\n  right: 7%;\n\n  & > button {\n    padding: 0;\n    width: unset;\n    height: unset;\n\n    color: var(--text-secondary-color);\n  }\n"]))),be=t(2298),je=function(e){var n=e.onRemove,t=Object(v.a)().t;return Object($.jsx)(ue,{children:Object($.jsx)(be.a,{title:t("common.deleteQuestion"),onConfirm:n,children:Object($.jsx)(R.a,{type:"link",icon:Object($.jsx)(le.a,{})})})})},me=Object(N.c)(R.a)(O||(O=Object(D.a)(["\n  width: 290px;\n  height: 182.86px;\n  font-size: 2rem;\n  border-radius: 14.5px;\n"]))),pe=t(143),Oe=t(8),fe=t(2248),he=t(2258),xe=t(2312),ge=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object($.jsx)(fe.a.Item,{name:"number",label:a("profile.nav.payments.cardNumber"),rules:[{required:!0,message:a("common.requiredField")}],children:Object($.jsx)(xe.a,{placeholder:a("profile.nav.payments.yourCardNumber"),name:"number",mask:"0000 0000 0000 0000",onFocus:t,disabled:n})})},ye=t(165),ve=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object($.jsx)(fe.a.Item,{name:"name",label:a("profile.nav.payments.cardholderName"),rules:[{required:!0,message:a("common.requiredField")}],children:Object($.jsx)(ye.a,{name:"name",placeholder:a("profile.nav.payments.yourName"),onFocus:t,disabled:n})})},ke=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object($.jsx)(fe.a.Item,{name:"expiry",label:a("profile.nav.payments.expDate"),rules:[{required:!0,message:a("common.requiredField")}],children:Object($.jsx)(xe.a,{placeholder:"MM/YY",mask:"00/00",name:"expiry",onFocus:t,disabled:n})})},Fe=function(e){var n=e.disabled,t=e.handleInputFocus,a=Object(v.a)().t;return Object($.jsx)(fe.a.Item,{name:"cvc",label:a("profile.nav.payments.CVV"),rules:[{required:!0,message:a("common.requiredField")}],children:Object($.jsx)(xe.a,{placeholder:"***",mask:"000",name:"cvc",onFocus:t,disabled:n})})},Ce=t(200),Ie=N.c.div(f||(f=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 3.125rem;\n  height: 3.125rem;\n  margin: 0 auto;\n  transition: all 0.5s ease;\n\n  border-radius: ",";\n\n  ",";\n  background-size: cover;\n\n  & > div {\n    background: ",";\n    background-size: cover;\n  }\n\n  &:hover {\n    opacity: 0.7;\n\n    ",";\n    background-size: cover;\n  }\n"])),Z.b,(function(e){return e.isActive&&"background: url(".concat(e.background,")")}),(function(e){return"url(".concat(e.background,")")}),(function(e){return"background: url(".concat(e.background,")")})),_e=N.c.div(h||(h=Object(D.a)(["\n  width: calc(100% - 0.4rem);\n  height: calc(100% - 0.4rem);\n  margin: 0.2rem;\n\n  border: 5px solid var(--background-color);\n\n  border-radius: ",";\n"])),Z.b),we=function(e){var n=e.cardData,t=e.setCardData,a=Object(v.a)().t,r=Object(y.useCallback)((function(e){return function(){t(Object(ie.a)(Object(ie.a)({},n),{},{background:e.background}))}}),[t,n]),c=Object(y.useMemo)((function(){return Ce.a.map((function(e){return Object($.jsx)(ae.a,{xs:8,md:4,children:Object($.jsx)(Ie,{background:e.background,isActive:n.background===e.background,children:Object($.jsx)(_e,{tabIndex:0,onClick:r(e)})})},e.id)}))}),[n,r]);return Object($.jsx)(fe.a.Item,{label:a("profile.nav.payments.cardTheme"),children:Object($.jsx)(te.a,{gutter:[10,10],children:c})})},Me=Object(N.c)(de)(x||(x=Object(D.a)(["\n  position: absolute;\n  top: -5rem;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),Te=N.c.div(g||(g=Object(D.a)(["\n  padding-top: 7.5rem;\n"]))),ze={name:"",cvc:"",expiry:"",number:"",focused:"",background:Ce.a[0].background,isEdit:!1},De=function(e){var n=e.closeModal,t=e.onFormFinish,a=Object(y.useState)(ze),r=Object(F.a)(a,2),c=r[0],i=r[1],o=Object(y.useState)(!1),s=Object(F.a)(o,2),d=s[0],l=s[1],u=Object(y.useState)(!1),b=Object(F.a)(u,2),j=b[0],m=b[1],p=C.a.useForm(),O=Object(F.a)(p,1)[0],f=Object(y.useCallback)((function(e){i(Object(ie.a)(Object(ie.a)({},c),{},{focused:e.target.name}))}),[i,c]),h=Object(y.useCallback)((function(e){l(!0),setTimeout((function(){l(!1),m(!1);var a=Object(ie.a)(Object(ie.a)({},e),{},{background:c.background});t(a),i(ze),n(),O.setFieldsValue(ze)}),1e3)}),[c.background,n,O,t]);return Object($.jsxs)(fe.a,{form:O,requiredMark:"optional",name:"paymentCard",onFinish:h,footer:Object($.jsx)(he.a,{loading:d,onCancel:n}),initialValues:ze,onValuesChange:function(e){var n=Object.entries(e)[0];i(Object(ie.a)(Object(ie.a)({},c),{},Object(Oe.a)({},n[0],n[1])))},isFieldsChanged:j,onFieldsChange:function(){return m(!0)},children:[Object($.jsx)(Me,{cardData:c}),Object($.jsxs)(Te,{children:[Object($.jsx)(ge,{handleInputFocus:f}),Object($.jsx)(ve,{handleInputFocus:f}),Object($.jsxs)(te.a,{gutter:[20,0],children:[Object($.jsx)(ae.a,{span:12,children:Object($.jsx)(ke,{handleInputFocus:f})}),Object($.jsx)(ae.a,{span:12,children:Object($.jsx)(Fe,{handleInputFocus:f})})]}),Object($.jsx)(we,{cardData:c,setCardData:i})]})]})},Ae=function(e){var n=e.isModalOpen,t=e.closeModal,a=e.onCardAdd;return Object($.jsx)(pe.a,{destroyOnClose:!0,size:"small",open:n,onCancel:t,footer:null,closable:!1,children:Object($.jsx)(De,{closeModal:t,onFormFinish:a})})},Ne=function(e){var n=e.onCardAdd,t=Object(y.useState)(!1),a=Object(F.a)(t,2),r=a[0],c=a[1],i=Object(v.a)().t;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(me,{type:"ghost",onClick:function(){return c(!0)},children:i("profile.nav.payments.addNewCard")}),Object($.jsx)(Ae,{isModalOpen:r,closeModal:function(){return c(!1)},onCardAdd:n})]})},Se=function(e){var n=e.cards,t=e.onCardRemove,a=e.onCardAdd,r=(0,Object(W.a)().useMediaQuery)({query:"(min-width: ".concat(659.98,"px)")})?"start":"space-around";return Object($.jsxs)(te.a,{justify:r,gutter:[16,16],children:[n.map((function(e){return Object($.jsx)(ae.a,{children:Object($.jsx)(de,{cardData:e,children:Object($.jsx)(je,{onRemove:function(){return t(e.number)}})})},e.number)})),Object($.jsx)(ae.a,{children:Object($.jsx)(Ne,{onCardAdd:a})})]})},Ue=t(144),Ee=t(34),qe=t(342),He=function(){var e=Object(v.a)().t,n=Object(y.useState)([]),t=Object(F.a)(n,2),a=t[0],r=t[1],c=Object(y.useState)(!1),i=Object(F.a)(c,2),o=i[0],s=i[1],d=Object(Ee.b)((function(e){var n,t;return null===(n=e.user)||void 0===n||null===(t=n.user)||void 0===t?void 0:t.id}));Object(y.useEffect)((function(){d&&(s(!0),Object(qe.a)(d).then((function(e){return r(e)})).finally((function(){return s(!1)})))}),[d]);var l=Object(W.a)().isTablet,u=Object($.jsxs)(te.a,{gutter:[32,32],children:[Object($.jsx)(ae.a,{span:24,children:Object($.jsx)(C.a.Title,{children:e("profile.nav.payments.paymentMethod")})}),Object($.jsx)(ae.a,{span:24,children:Object($.jsx)(Ue.a,{spinning:o,children:Object($.jsx)(Se,{cards:a,onCardRemove:function(e){return r(a.filter((function(n){return n.number!==e})))},onCardAdd:function(e){r([].concat(Object(ce.a)(a),[e]))}})})})]});return l?u:Object($.jsx)(I.a,{children:u})},Le=function(){var e=Object(W.a)().isTablet,n=Object(y.useMemo)((function(){return Object($.jsxs)(te.a,{gutter:[0,30],children:[Object($.jsx)(ae.a,{span:24,children:Object($.jsx)(He,{})}),Object($.jsx)(ae.a,{span:24,children:Object($.jsx)(re,{})})]})}),[]);return e?Object($.jsx)(I.a,{children:n}):n};n.default=function(){var e=Object(v.a)().t;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(k.a,{children:e("profile.nav.payments.title")}),Object($.jsx)(Le,{})]})}}}]);
//# sourceMappingURL=13.06656614.chunk.js.map