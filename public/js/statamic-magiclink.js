(()=>{var e,t={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),s=r(26),o=r(372),i=r(327),a=r(97),c=r(109),u=r(985),l=r(61);e.exports=function(e){return new Promise((function(t,r){var d=e.data,f=e.headers;n.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(h+":"+m)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};s(t,r,o),p=null}},p.onabort=function(){p&&(r(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&n.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),d||(d=null),p.send(d)}))}},609:(e,t,r)=>{"use strict";var n=r(867),s=r(849),o=r(321),i=r(185);function a(e){var t=new o(e),r=s(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var c=a(r(655));c.Axios=o,c.create=function(e){return a(i(c.defaults,e))},c.Cancel=r(263),c.CancelToken=r(972),c.isCancel=r(502),c.all=function(e){return Promise.all(e)},c.spread=r(713),c.isAxiosError=r(268),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),s=r(327),o=r(782),i=r(572),a=r(185);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=a(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=c},782:(e,t,r)=>{"use strict";var n=r(867);function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:(e,t,r)=>{"use strict";var n=r(793),s=r(303);e.exports=function(e,t){return e&&!n(t)?s(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,s,o){var i=new Error(e);return n(i,t,r,s,o)}},572:(e,t,r)=>{"use strict";var n=r(867),s=r(527),o=r(502),i=r(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(a(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},s=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=c(void 0,e[s])):r[s]=c(e[s],t[s])}n.forEach(s,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(o,u),n.forEach(i,(function(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=c(void 0,e[s])):r[s]=c(void 0,t[s])})),n.forEach(a,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var l=s.concat(o).concat(i).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(d,u),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(155),s=r(867),o=r(16),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(c=r(448)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),s.forEach(["post","put","patch"],(function(e){u.headers[e]=s.merge(i)})),e.exports=u},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(s(t)+"="+s(e))})))})),o=i.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(s)&&a.push("path="+s),n.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&s.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),s=Object.prototype.toString;function o(e){return"[object Array]"===s.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===s.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,s=arguments.length;n<s;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,s){e[s]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},278:(e,t,r)=>{"use strict";function n(e,t,r,n,s,o,i,a){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):s&&(c=a?function(){s.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}const s=n({props:{action:String,method:{type:String,required:!0}},data:function(){return{error:null,errors:{},email:""}},computed:{hasErrors:function(){return this.error||Object.keys(this.errors).length},payload:function(){return{email:this.email}}},methods:{clearErrors:function(){this.error=null,this.errors={}},send:function(){var e=this;this.clearErrors(),this.$axios[this.method](this.action,this.payload).then((function(e){window.location=e.data.redirect})).catch((function(t){if(t.response&&422===t.response.status){var r=t.response.data,n=r.message,s=r.errors;e.error=n,e.errors=s,e.$toast.error(n)}else e.$toast.error(__("magiclink::web.unable_to_send"))}))}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("publish-fields-container",{staticClass:"p-0"},[r("form-group",{staticClass:"p-0",attrs:{handle:"email",display:e.__("magiclink::web.email_address"),errors:e.errors.email,focus:!0},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("div",{staticClass:"py-2 flex justify-between"},[r("button",{staticClass:"btn-primary w-full",attrs:{type:"submit"},on:{click:e.send}},[e._v(e._s(e.__("magiclink::web.login_magic_link")))])])],1)}),[],!1,null,null,null).exports;const o=n({props:{action:String,initialAllowedAddresses:Array,initialAllowedDomains:Array,initialExpireTime:{type:Number,required:!0},initialEnabled:{type:Boolean,required:!0},indexUrl:{type:String,required:!0},method:{type:String,required:!0}},data:function(){return{allowedAddresses:this.initialAllowedAddresses,countAddresses:this.initialAllowedAddresses.length+1,allowedDomains:this.initialAllowedDomains,countDomains:this.initialAllowedDomains.length+1,error:null,errors:{},enabled:this.initialEnabled,expireTime:this.initialExpireTime}},computed:{hasErrors:function(){return this.error||Object.keys(this.errors).length},payload:function(){return{allowedAddresses:this.allowedAddresses,allowedDomains:this.allowedDomains,enabled:this.enabled,expireTime:this.expireTime}}},methods:{clearErrors:function(){this.error=null,this.errors={}},addAddress:function(){this.countAddresses+=1},addDomain:function(){this.countDomains+=1},save:function(){var e=this;this.clearErrors(),this.$axios[this.method](this.action,this.payload).then((function(e){window.location=e.data.redirect})).catch((function(t){if(t.response&&422===t.response.status){var r=t.response.data,n=r.message,s=r.errors;e.error=n,e.errors=s,e.$toast.error(n)}else e.$toast.error(__("magiclink::cp.unable_to_save"))}))}},mounted:function(){var e=this;this.$keys.bindGlobal(["mod+s"],(function(t){t.preventDefault(),e.save()}))}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"mb-1 content"},[r("h2",{staticClass:"text-base"},[e._v("\n            "+e._s(e.__("General"))+"\n        ")])]),e._v(" "),r("publish-fields-container",{staticClass:"card p-0 mb-3 configure-section"},[r("form-group",{staticClass:"toggle-fieldtype",attrs:{fieldtype:"toggle",handle:"enabled",display:e.__("magiclink::cp.settings.ml_enabled"),instructions:e.__("magiclink::cp.settings.ml_enabled_instructions")},model:{value:e.enabled,callback:function(t){e.enabled=t},expression:"enabled"}}),e._v(" "),r("form-group",{staticClass:"border-b",attrs:{handle:"expireTime",display:e.__("magiclink::cp.settings.ml_expire_time"),errors:e.errors.expireTime,instructions:e.__("magiclink::cp.settings.ml_expire_time_instructions")},model:{value:e.expireTime,callback:function(t){e.expireTime=t},expression:"expireTime"}})],1),e._v(" "),r("div",{staticClass:"mb-1 content"},[r("h2",{staticClass:"text-base"},[e._v("\n            Protected content\n            "),r("button",{staticClass:"btn-sm",on:{click:e.addAddress}},[e._v("\n                + Add new address\n            ")])])]),e._v(" "),r("publish-fields-container",{staticClass:"card p-0 mb-3 configure-section"},e._l(e.countAddresses,(function(t,n){return r("div",[r("form-group",{staticClass:"border-b",attrs:{handle:"allowedAddresses[]",display:e.__("magiclink::cp.settings.ml_allowed_addresses"),errors:e.errors.allowedAddresses,instructions:e.__("magiclink::cp.settings.ml_allowed_addresses_instructions")},model:{value:e.allowedAddresses[n],callback:function(t){e.$set(e.allowedAddresses,n,t)},expression:"allowedAddresses[index]"}})],1)})),0),e._v(" "),r("div",{staticClass:"mb-1 content"},[r("h2",{staticClass:"text-base"},[e._v("\n            "+e._s(e.__("magiclink::cp.settings.ml_allowed_domains"))+"\n            "),r("button",{staticClass:"btn-sm",on:{click:e.addDomain}},[e._v("\n                + Add new domain\n            ")])])]),e._v(" "),r("publish-fields-container",{staticClass:"card p-0 mb-3 configure-section"},e._l(e.countDomains,(function(t,n){return r("div",[r("form-group",{staticClass:"border-b",attrs:{handle:"allowedDomains[]",display:e.__("magiclink::cp.settings.ml_allowed_domains"),errors:e.errors.allowedDomains,instructions:e.__("magiclink::cp.settings.ml_allowed_domains_instructions")},model:{value:e.allowedDomains[n],callback:function(t){e.$set(e.allowedDomains,n,t)},expression:"allowedDomains[index]"}})],1)})),0),e._v(" "),r("div",{staticClass:"py-2 mt-3 border-t flex justify-between"},[r("a",{staticClass:"btn",attrs:{href:e.indexUrl},domProps:{textContent:e._s(e.__("Cancel"))}}),e._v(" "),r("button",{staticClass:"btn-primary",attrs:{type:"submit"},on:{click:e.save}},[e._v(e._s(e.__("Save")))])])],1)}),[],!1,null,null,null).exports;const i=n({props:["initial-rows","columns"],data:function(){return{rows:this.initialRows}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("data-list",{attrs:{columns:e.columns,sort:!1,rows:e.rows},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.filteredRows;return r("div",{staticClass:"card p-0"},[r("data-list-table",{attrs:{rows:n},scopedSlots:e._u([{key:"cell-id",fn:function(t){var n=t.row;return[r("a",{attrs:{href:n.show_url}},[e._v(e._s(n.id))])]}}],null,!0)})],1)}}])})}),[],!1,null,null,null).exports;window.axios=r(669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Statamic.booting((function(){Statamic.$components.register("magiclink-settings",o),Statamic.$components.register("magiclink-send-link",s),Statamic.$components.register("magiclink-links-listing",i)}))},249:()=>{},155:e=>{var t,r,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a,c=[],u=!1,l=-1;function d(){u&&a&&(u=!1,a.length?c=a.concat(c):l=-1,c.length&&f())}function f(){if(!u){var e=i(d);u=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||u||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,s,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,s,o]=e[u],a=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(a=!1,o<i&&(i=o));a&&(e.splice(u--,1),t=s())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,s,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={252:0,774:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var s,o,[i,a,c]=r,u=0;for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(c)var l=c(n);for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0;return n.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[774],(()=>n(278)));var s=n.O(void 0,[774],(()=>n(249)));s=n.O(s)})();