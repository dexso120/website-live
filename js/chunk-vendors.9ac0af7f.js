/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const a="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const s=Object.assign;function l(t,e){const i={};for(const n in e){const r=e[n];i[n]=h(r)?r.map(t):t(r)}return i}const u=()=>{},h=Array.isArray;const p=/\/$/,c=t=>t.replace(p,"");function d(t,e,i="/"){let n,r={},a="",o="";const s=e.indexOf("#");let l=e.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(n=e.slice(0,l),a=e.slice(l+1,s>-1?s:e.length),r=t(a)),s>-1&&(n=n||e.slice(0,s),o=e.slice(s,e.length)),n=_(null!=n?n:e,i),{fullPath:n+(a&&"?")+a+o,path:n,query:r,hash:o}}function f(t,e){const i=e.query?t(e.query):"";return e.path+(i&&"?")+i+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function y(t,e,i){const n=e.matched.length-1,r=i.matched.length-1;return n>-1&&n===r&&m(e.matched[n],i.matched[r])&&v(e.params,i.params)&&t(e.query)===t(i.query)&&e.hash===i.hash}function m(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i in t)if(!b(t[i],e[i]))return!1;return!0}function b(t,e){return h(t)?x(t,e):h(e)?x(e,t):t===e}function x(t,e){return h(e)?t.length===e.length&&t.every(((t,i)=>t===e[i])):1===t.length&&t[0]===e}function _(t,e){if(t.startsWith("/"))return t;if(!t)return e;const i=e.split("/"),n=t.split("/");let r,a,o=i.length-1;for(r=0;r<n.length;r++)if(a=n[r],"."!==a){if(".."!==a)break;o>1&&o--}return i.slice(0,o).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var P,w;(function(t){t["pop"]="pop",t["push"]="push"})(P||(P={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(w||(w={}));function C(t){if(!t)if(a){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),c(t)}const O=/^[^#]+#/;function k(t,e){return t.replace(O,"#")+e}function T(t,e){const i=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-i.left-(e.left||0),top:n.top-i.top-(e.top||0)}}const S=()=>({left:window.pageXOffset,top:window.pageYOffset});function I(t){let e;if("el"in t){const i=t.el,n="string"===typeof i&&i.startsWith("#");0;const r="string"===typeof i?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!r)return;e=T(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function D(t,e){const i=history.state?history.state.position-e:-1;return i+t}const A=new Map;function E(t,e){A.set(t,e)}function F(t){const e=A.get(t);return A.delete(t),e}let V=()=>location.protocol+"//"+location.host;function M(t,e){const{pathname:i,search:n,hash:r}=e,a=t.indexOf("#");if(a>-1){let e=r.includes(t.slice(a))?t.slice(a).length:1,i=r.slice(e);return"/"!==i[0]&&(i="/"+i),g(i,"")}const o=g(i,t);return o+n+r}function L(t,e,i,n){let r=[],a=[],o=null;const l=({state:a})=>{const s=M(t,location),l=i.value,u=e.value;let h=0;if(a){if(i.value=s,e.value=a,o&&o===l)return void(o=null);h=u?a.position-u.position:0}else n(s);r.forEach((t=>{t(i.value,l,{delta:h,type:P.pop,direction:h?h>0?w.forward:w.back:w.unknown})}))};function u(){o=i.value}function h(t){r.push(t);const e=()=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)};return a.push(e),e}function p(){const{history:t}=window;t.state&&t.replaceState(s({},t.state,{scroll:S()}),"")}function c(){for(const t of a)t();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p),{pauseListeners:u,listen:h,destroy:c}}function j(t,e,i,n=!1,r=!1){return{back:t,current:e,forward:i,replaced:n,position:window.history.length,scroll:r?S():null}}function R(t){const{history:e,location:i}=window,n={value:M(t,i)},r={value:e.state};function a(n,a,o){const s=t.indexOf("#"),l=s>-1?(i.host&&document.querySelector("base")?t:t.slice(s))+n:V()+t+n;try{e[o?"replaceState":"pushState"](a,"",l),r.value=a}catch(u){console.error(u),i[o?"replace":"assign"](l)}}function o(t,i){const o=s({},e.state,j(r.value.back,t,r.value.forward,!0),i,{position:r.value.position});a(t,o,!0),n.value=t}function l(t,i){const o=s({},r.value,e.state,{forward:t,scroll:S()});a(o.current,o,!0);const l=s({},j(n.value,t,null),{position:o.position+1},i);a(t,l,!1),n.value=t}return r.value||a(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:n,state:r,push:l,replace:o}}function B(t){t=C(t);const e=R(t),i=L(t,e.state,e.location,e.replace);function n(t,e=!0){e||i.pauseListeners(),history.go(t)}const r=s({location:"",base:t,go:n,createHref:k.bind(null,t)},e,i);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function N(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=Symbol("");var z;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(z||(z={}));function X(t,e){return s(new Error,{type:t,[Y]:!0},e)}function K(t,e){return t instanceof Error&&Y in t&&(null==e||!!(t.type&e))}const U="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},q=/[.+*?^${}()[\]/\\]/g;function Z(t,e){const i=s({},G,e),n=[];let r=i.start?"^":"";const a=[];for(const s of t){const t=s.length?[]:[90];i.strict&&!s.length&&(r+="/");for(let e=0;e<s.length;e++){const n=s[e];let o=40+(i.sensitive?.25:0);if(0===n.type)e||(r+="/"),r+=n.value.replace(q,"\\$&"),o+=40;else if(1===n.type){const{value:t,repeatable:i,optional:l,regexp:u}=n;a.push({name:t,repeatable:i,optional:l});const h=u||U;if(h!==U){o+=10;try{new RegExp(`(${h})`)}catch(p){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+p.message)}}let c=i?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(c=l&&s.length<2?`(?:/${c})`:"/"+c),l&&(c+="?"),r+=c,o+=20,l&&(o+=-8),i&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}n.push(t)}if(i.strict&&i.end){const t=n.length-1;n[t][n[t].length-1]+=.7000000000000001}i.strict||(r+="/?"),i.end?r+="$":i.strict&&(r+="(?:/|$)");const o=new RegExp(r,i.sensitive?"":"i");function l(t){const e=t.match(o),i={};if(!e)return null;for(let n=1;n<e.length;n++){const t=e[n]||"",r=a[n-1];i[r.name]=t&&r.repeatable?t.split("/"):t}return i}function u(e){let i="",n=!1;for(const r of t){n&&i.endsWith("/")||(i+="/"),n=!1;for(const t of r)if(0===t.type)i+=t.value;else if(1===t.type){const{value:a,repeatable:o,optional:s}=t,l=a in e?e[a]:"";if(h(l)&&!o)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const u=h(l)?l.join("/"):l;if(!u){if(!s)throw new Error(`Missing required param "${a}"`);r.length<2&&(i.endsWith("/")?i=i.slice(0,-1):n=!0)}i+=u}}return i||"/"}return{re:o,score:n,keys:a,parse:l,stringify:u}}function $(t,e){let i=0;while(i<t.length&&i<e.length){const n=e[i]-t[i];if(n)return n;i++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Q(t,e){let i=0;const n=t.score,r=e.score;while(i<n.length&&i<r.length){const t=$(n[i],r[i]);if(t)return t;i++}if(1===Math.abs(r.length-n.length)){if(J(n))return 1;if(J(r))return-1}return r.length-n.length}function J(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function it(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${i})/"${u}": ${t}`)}let i=0,n=i;const r=[];let a;function o(){a&&r.push(a),a=[]}let s,l=0,u="",h="";function p(){u&&(0===i?a.push({type:0,value:u}):1===i||2===i||3===i?(a.length>1&&("*"===s||"+"===s)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:h,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):e("Invalid state to consume buffer"),u="")}function c(){u+=s}while(l<t.length)if(s=t[l++],"\\"!==s||2===i)switch(i){case 0:"/"===s?(u&&p(),o()):":"===s?(p(),i=1):c();break;case 4:c(),i=n;break;case 1:"("===s?i=2:et.test(s)?c():(p(),i=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==h[h.length-1]?h=h.slice(0,-1)+s:i=3:h+=s;break;case 3:p(),i=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,h="";break;default:e("Unknown state");break}else n=i,i=4;return 2===i&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function nt(t,e,i){const n=Z(it(t.path),i);const r=s(n,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf===!e.record.aliasOf&&e.children.push(r),r}function rt(t,e){const i=[],n=new Map;function r(t){return n.get(t)}function a(t,i,n){const r=!n,l=ot(t);l.aliasOf=n&&n.record;const p=ht(e,t),c=[l];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)c.push(s({},l,{components:n?n.record.components:l.components,path:t,aliasOf:n?n.record:l}))}let d,f;for(const e of c){const{path:s}=e;if(i&&"/"!==s[0]){const t=i.record.path,n="/"===t[t.length-1]?"":"/";e.path=i.record.path+(s&&n+s)}if(d=nt(e,i,p),n?n.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),r&&t.name&&!lt(d)&&o(t.name)),l.children){const t=l.children;for(let e=0;e<t.length;e++)a(t[e],d,n&&n.children[e])}n=n||d,h(d)}return f?()=>{o(f)}:u}function o(t){if(W(t)){const e=n.get(t);e&&(n.delete(t),i.splice(i.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=i.indexOf(t);e>-1&&(i.splice(e,1),t.record.name&&n.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function l(){return i}function h(t){let e=0;while(e<i.length&&Q(t,i[e])>=0&&(t.record.path!==i[e].record.path||!pt(t,i[e])))e++;i.splice(e,0,t),t.record.name&&!lt(t)&&n.set(t.record.name,t)}function p(t,e){let r,a,o,l={};if("name"in t&&t.name){if(r=n.get(t.name),!r)throw X(1,{location:t});0,o=r.record.name,l=s(at(e.params,r.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&at(t.params,r.keys.map((t=>t.name)))),a=r.stringify(l)}else if("path"in t)a=t.path,r=i.find((t=>t.re.test(a))),r&&(l=r.parse(a),o=r.record.name);else{if(r=e.name?n.get(e.name):i.find((t=>t.re.test(e.path))),!r)throw X(1,{location:t,currentLocation:e});o=r.record.name,l=s({},e.params,t.params),a=r.stringify(l)}const u=[];let h=r;while(h)u.unshift(h.record),h=h.parent;return{name:o,path:a,params:l,matched:u,meta:ut(u)}}return e=ht({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>a(t))),{addRoute:a,resolve:p,removeRoute:o,getRoutes:l,getRecordMatcher:r}}function at(t,e){const i={};for(const n of e)n in t&&(i[n]=t[n]);return i}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:st(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function st(t){const e={},i=t.props||!1;if("component"in t)e.default=i;else for(const n in t.components)e[n]="boolean"===typeof i?i:i[n];return e}function lt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>s(t,e.meta)),{})}function ht(t,e){const i={};for(const n in t)i[n]=n in e?e[n]:t[n];return i}function pt(t,e){return e.children.some((e=>e===t||pt(t,e)))}const ct=/#/g,dt=/&/g,ft=/\//g,gt=/=/g,yt=/\?/g,mt=/\+/g,vt=/%5B/g,bt=/%5D/g,xt=/%5E/g,_t=/%60/g,Pt=/%7B/g,wt=/%7C/g,Ct=/%7D/g,Ot=/%20/g;function kt(t){return encodeURI(""+t).replace(wt,"|").replace(vt,"[").replace(bt,"]")}function Tt(t){return kt(t).replace(Pt,"{").replace(Ct,"}").replace(xt,"^")}function St(t){return kt(t).replace(mt,"%2B").replace(Ot,"+").replace(ct,"%23").replace(dt,"%26").replace(_t,"`").replace(Pt,"{").replace(Ct,"}").replace(xt,"^")}function It(t){return St(t).replace(gt,"%3D")}function Dt(t){return kt(t).replace(ct,"%23").replace(yt,"%3F")}function At(t){return null==t?"":Dt(t).replace(ft,"%2F")}function Et(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ft(t){const e={};if(""===t||"?"===t)return e;const i="?"===t[0],n=(i?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const t=n[r].replace(mt," "),i=t.indexOf("="),a=Et(i<0?t:t.slice(0,i)),o=i<0?null:Et(t.slice(i+1));if(a in e){let t=e[a];h(t)||(t=e[a]=[t]),t.push(o)}else e[a]=o}return e}function Vt(t){let e="";for(let i in t){const n=t[i];if(i=It(i),null==n){void 0!==n&&(e+=(e.length?"&":"")+i);continue}const r=h(n)?n.map((t=>t&&St(t))):[n&&St(n)];r.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+i,null!=t&&(e+="="+t))}))}return e}function Mt(t){const e={};for(const i in t){const n=t[i];void 0!==n&&(e[i]=h(n)?n.map((t=>null==t?null:""+t)):null==n?n:""+n)}return e}const Lt=Symbol(""),jt=Symbol(""),Rt=Symbol(""),Bt=Symbol(""),Nt=Symbol("");function Wt(){let t=[];function e(e){return t.push(e),()=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)}}function i(){t=[]}return{add:e,list:()=>t,reset:i}}function Ht(t,e,i,n,r){const a=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise(((o,s)=>{const l=t=>{!1===t?s(X(4,{from:i,to:e})):t instanceof Error?s(t):N(t)?s(X(2,{from:e,to:t})):(a&&n.enterCallbacks[r]===a&&"function"===typeof t&&a.push(t),o())},u=t.call(n&&n.instances[r],e,i,l);let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch((t=>s(t)))}))}function Yt(t,e,i,n){const r=[];for(const a of t){0;for(const t in a.components){let s=a.components[t];if("beforeRouteEnter"===e||a.instances[t])if(zt(s)){const o=s.__vccOpts||s,l=o[e];l&&r.push(Ht(l,i,n,a,t))}else{let l=s();0,r.push((()=>l.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${a.path}"`));const s=o(r)?r.default:r;a.components[t]=s;const l=s.__vccOpts||s,u=l[e];return u&&Ht(u,i,n,a,t)()}))))}}}return r}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Xt(t){const e=(0,n.WQ)(Rt),i=(0,n.WQ)(Bt),a=(0,n.EW)((()=>e.resolve((0,r.R1)(t.to)))),o=(0,n.EW)((()=>{const{matched:t}=a.value,{length:e}=t,n=t[e-1],r=i.matched;if(!n||!r.length)return-1;const o=r.findIndex(m.bind(null,n));if(o>-1)return o;const s=Zt(t[e-2]);return e>1&&Zt(n)===s&&r[r.length-1].path!==s?r.findIndex(m.bind(null,t[e-2])):o})),s=(0,n.EW)((()=>o.value>-1&&qt(i.params,a.value.params))),l=(0,n.EW)((()=>o.value>-1&&o.value===i.matched.length-1&&v(i.params,a.value.params)));function h(i={}){return Gt(i)?e[(0,r.R1)(t.replace)?"replace":"push"]((0,r.R1)(t.to)).catch(u):Promise.resolve()}return{route:a,href:(0,n.EW)((()=>a.value.href)),isActive:s,isExactActive:l,navigate:h}}const Kt=(0,n.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xt,setup(t,{slots:e}){const i=(0,r.Kh)(Xt(t)),{options:a}=(0,n.WQ)(Rt),o=(0,n.EW)((()=>({[$t(t.activeClass,a.linkActiveClass,"router-link-active")]:i.isActive,[$t(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive})));return()=>{const r=e.default&&e.default(i);return t.custom?r:(0,n.h)("a",{"aria-current":i.isExactActive?t.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:o.value},r)}}}),Ut=Kt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qt(t,e){for(const i in e){const n=e[i],r=t[i];if("string"===typeof n){if(n!==r)return!1}else if(!h(r)||r.length!==n.length||n.some(((t,e)=>t!==r[e])))return!1}return!0}function Zt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $t=(t,e,i)=>null!=t?t:null!=e?e:i,Qt=(0,n.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:i}){const a=(0,n.WQ)(Nt),o=(0,n.EW)((()=>t.route||a.value)),l=(0,n.WQ)(jt,0),u=(0,n.EW)((()=>{let t=(0,r.R1)(l);const{matched:e}=o.value;let i;while((i=e[t])&&!i.components)t++;return t})),h=(0,n.EW)((()=>o.value.matched[u.value]));(0,n.Gt)(jt,(0,n.EW)((()=>u.value+1))),(0,n.Gt)(Lt,h),(0,n.Gt)(Nt,o);const p=(0,r.KR)();return(0,n.wB)((()=>[p.value,h.value,t.name]),(([t,e,i],[n,r,a])=>{e&&(e.instances[i]=t,r&&r!==e&&t&&t===n&&(e.leaveGuards.size||(e.leaveGuards=r.leaveGuards),e.updateGuards.size||(e.updateGuards=r.updateGuards))),!t||!e||r&&m(e,r)&&n||(e.enterCallbacks[i]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const r=o.value,a=t.name,l=h.value,u=l&&l.components[a];if(!u)return Jt(i.default,{Component:u,route:r});const c=l.props[a],d=c?!0===c?r.params:"function"===typeof c?c(r):c:null,f=t=>{t.component.isUnmounted&&(l.instances[a]=null)},g=(0,n.h)(u,s({},d,e,{onVnodeUnmounted:f,ref:p}));return Jt(i.default,{Component:g,route:r})||g}}});function Jt(t,e){if(!t)return null;const i=t(e);return 1===i.length?i[0]:i}const te=Qt;function ee(t){const e=rt(t.routes,t),i=t.parseQuery||Ft,o=t.stringifyQuery||Vt,p=t.history;const c=Wt(),g=Wt(),m=Wt(),v=(0,r.IJ)(H);let b=H;a&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=l.bind(null,(t=>""+t)),_=l.bind(null,At),w=l.bind(null,Et);function C(t,i){let n,r;return W(t)?(n=e.getRecordMatcher(t),r=i):r=t,e.addRoute(r,n)}function O(t){const i=e.getRecordMatcher(t);i&&e.removeRoute(i)}function k(){return e.getRoutes().map((t=>t.record))}function T(t){return!!e.getRecordMatcher(t)}function A(t,n){if(n=s({},n||v.value),"string"===typeof t){const r=d(i,t,n.path),a=e.resolve({path:r.path},n),o=p.createHref(r.fullPath);return s(r,a,{params:w(a.params),hash:Et(r.hash),redirectedFrom:void 0,href:o})}let r;if("path"in t)r=s({},t,{path:d(i,t.path,n.path).path});else{const e=s({},t.params);for(const t in e)null==e[t]&&delete e[t];r=s({},t,{params:_(t.params)}),n.params=_(n.params)}const a=e.resolve(r,n),l=t.hash||"";a.params=x(w(a.params));const u=f(o,s({},t,{hash:Tt(l),path:a.path})),h=p.createHref(u);return s({fullPath:u,hash:l,query:o===Vt?Mt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:h})}function V(t){return"string"===typeof t?d(i,t,v.value.path):s({},t)}function M(t,e){if(b!==t)return X(8,{from:e,to:t})}function L(t){return B(t)}function j(t){return L(s(V(t),{replace:!0}))}function R(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:i}=e;let n="function"===typeof i?i(t):i;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=V(n):{path:n},n.params={}),s({query:t.query,hash:t.hash,params:"path"in n?{}:t.params},n)}}function B(t,e){const i=b=A(t),n=v.value,r=t.state,a=t.force,l=!0===t.replace,u=R(i);if(u)return B(s(V(u),{state:"object"===typeof u?s({},r,u.state):r,force:a,replace:l}),e||i);const h=i;let p;return h.redirectedFrom=e,!a&&y(o,n,i)&&(p=X(16,{to:h,from:n}),it(n,n,!0,!1)),(p?Promise.resolve(p):Y(h,n)).catch((t=>K(t)?K(t,2)?t:et(t):J(t,h,n))).then((t=>{if(t){if(K(t,2))return B(s({replace:l},V(t.to),{state:"object"===typeof t.to?s({},r,t.to.state):r,force:a}),e||h)}else t=U(h,n,!0,l,r);return z(h,n,t),t}))}function N(t,e){const i=M(t,e);return i?Promise.reject(i):Promise.resolve()}function Y(t,e){let i;const[n,r,a]=ne(t,e);i=Yt(n.reverse(),"beforeRouteLeave",t,e);for(const s of n)s.leaveGuards.forEach((n=>{i.push(Ht(n,t,e))}));const o=N.bind(null,t,e);return i.push(o),ie(i).then((()=>{i=[];for(const n of c.list())i.push(Ht(n,t,e));return i.push(o),ie(i)})).then((()=>{i=Yt(r,"beforeRouteUpdate",t,e);for(const n of r)n.updateGuards.forEach((n=>{i.push(Ht(n,t,e))}));return i.push(o),ie(i)})).then((()=>{i=[];for(const n of t.matched)if(n.beforeEnter&&!e.matched.includes(n))if(h(n.beforeEnter))for(const r of n.beforeEnter)i.push(Ht(r,t,e));else i.push(Ht(n.beforeEnter,t,e));return i.push(o),ie(i)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),i=Yt(a,"beforeRouteEnter",t,e),i.push(o),ie(i)))).then((()=>{i=[];for(const n of g.list())i.push(Ht(n,t,e));return i.push(o),ie(i)})).catch((t=>K(t,8)?t:Promise.reject(t)))}function z(t,e,i){for(const n of m.list())n(t,e,i)}function U(t,e,i,n,r){const o=M(t,e);if(o)return o;const l=e===H,u=a?history.state:{};i&&(n||l?p.replace(t.fullPath,s({scroll:l&&u&&u.scroll},r)):p.push(t.fullPath,r)),v.value=t,it(t,e,i,l),et()}let G;function q(){G||(G=p.listen(((t,e,i)=>{if(!st.listening)return;const n=A(t),r=R(n);if(r)return void B(s(r,{replace:!0}),n).catch(u);b=n;const o=v.value;a&&E(D(o.fullPath,i.delta),S()),Y(n,o).catch((t=>K(t,12)?t:K(t,2)?(B(t.to,n).then((t=>{K(t,20)&&!i.delta&&i.type===P.pop&&p.go(-1,!1)})).catch(u),Promise.reject()):(i.delta&&p.go(-i.delta,!1),J(t,n,o)))).then((t=>{t=t||U(n,o,!1),t&&(i.delta&&!K(t,8)?p.go(-i.delta,!1):i.type===P.pop&&K(t,20)&&p.go(-1,!1)),z(n,o,t)})).catch(u)})))}let Z,$=Wt(),Q=Wt();function J(t,e,i){et(t);const n=Q.list();return n.length?n.forEach((n=>n(t,e,i))):console.error(t),Promise.reject(t)}function tt(){return Z&&v.value!==H?Promise.resolve():new Promise(((t,e)=>{$.add([t,e])}))}function et(t){return Z||(Z=!t,q(),$.list().forEach((([e,i])=>t?i(t):e())),$.reset()),t}function it(e,i,r,o){const{scrollBehavior:s}=t;if(!a||!s)return Promise.resolve();const l=!r&&F(D(e.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,n.dY)().then((()=>s(e,i,l))).then((t=>t&&I(t))).catch((t=>J(t,e,i)))}const nt=t=>p.go(t);let at;const ot=new Set,st={currentRoute:v,listening:!0,addRoute:C,removeRoute:O,hasRoute:T,getRoutes:k,resolve:A,options:t,push:L,replace:j,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:c.add,beforeResolve:g.add,afterEach:m.add,onError:Q.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Ut),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(v)}),a&&!at&&v.value===H&&(at=!0,L(p.location).catch((t=>{0})));const i={};for(const r in H)i[r]=(0,n.EW)((()=>v.value[r]));t.provide(Rt,e),t.provide(Bt,(0,r.Kh)(i)),t.provide(Nt,v);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(b=H,G&&G(),G=null,v.value=H,at=!1,Z=!1),o()}}};return st}function ie(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function ne(t,e){const i=[],n=[],r=[],a=Math.max(e.matched.length,t.matched.length);for(let o=0;o<a;o++){const a=e.matched[o];a&&(t.matched.find((t=>m(t,a)))?n.push(a):i.push(a));const s=t.matched[o];s&&(e.matched.find((t=>m(t,s)))||r.push(s))}return[i,n,r]}}}]);
//# sourceMappingURL=chunk-vendors.9ac0af7f.js.map