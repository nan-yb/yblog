(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6911:function(e,r,t){Promise.resolve().then(t.t.bind(t,8326,23)),Promise.resolve().then(t.bind(t,4906))},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=t(2265),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,t){var s,l={},u=null,d=null;for(s in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,s)&&!o.hasOwnProperty(s)&&(l[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===l[s]&&(l[s]=r[s]);return{$$typeof:n,type:e,key:u,ref:d,props:l,_owner:i.current}}r.Fragment=l,r.jsx=q,r.jsxs=q},7437:function(e,r,t){"use strict";e.exports=t(622)},4906:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return NewsletterForm_default}});var s=t(2265),n=t(7437),__async=(e,r,t)=>new Promise((s,n)=>{var fulfilled=e=>{try{step(t.next(e))}catch(e){n(e)}},rejected=e=>{try{step(t.throw(e))}catch(e){n(e)}},step=e=>e.done?s(e.value):Promise.resolve(e.value).then(fulfilled,rejected);step((t=t.apply(e,r)).next())}),NewsletterForm_default=({title:e="Subscribe to the newsletter",apiUrl:r="/api/newsletter"})=>{let t=(0,s.useRef)(null),[l,a]=(0,s.useState)(!1),[i,o]=(0,s.useState)(""),[u,d]=(0,s.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:e}),(0,n.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>__async(void 0,null,function*(){e.preventDefault();let s=yield fetch(r,{body:JSON.stringify({email:t.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:n}=yield s.json();if(n){a(!0),o("Your e-mail address is invalid or you are already subscribed!");return}t.current.value="",a(!1),d(!0)}),children:[(0,n.jsx)("div",{children:(0,n.jsxs)("label",{htmlFor:"email-input",children:[(0,n.jsx)("span",{className:"sr-only",children:"Email address"}),(0,n.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:u?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:t,required:!0,type:"email",disabled:u})]})}),(0,n.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,n.jsx)("button",{className:`bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${u?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"} focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`,type:"submit",disabled:u,children:u?"Thank you!":"Sign up"})})]}),l&&(0,n.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:i})]})}}},function(e){e.O(0,[326,971,158,744],function(){return e(e.s=6911)}),_N_E=e.O()}]);