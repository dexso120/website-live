(function(){"use strict";var e={7760:function(e,t,n){var r=n(5130),o=n(6768);const a=(0,o.Lk)("link",{href:"@/style.css",rel:"stylesheet"},null,-1),i=(0,o.Lk)("div",{height:"20%"},null,-1),l={class:"navbar"},c=(0,o.eW)("Home"),u=(0,o.eW)("About"),s=(0,o.eW)("Inventory"),d=(0,o.eW)("Notes"),f=(0,o.eW)("Links"),p={id:"main_page_container"},v={id:"skill_card_space_container",class:"col-1"},h={id:"skill_card_space"},g={id:"page_content_container",class:"col-3"},b={id:"page_content",class:"box"},m=(0,o.Lk)("footer",null,"© Copyright 2024 Derrick So",-1);function y(e,t,n,r,y,k){const L=(0,o.g2)("router-link"),w=(0,o.g2)("Character"),_=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[a,i,(0,o.Lk)("div",l,[(0,o.Lk)("div",null,[(0,o.Lk)("nav",null,[(0,o.bF)(L,{to:"/"},{default:(0,o.k6)((()=>[c])),_:1}),(0,o.bF)(L,{to:"/about"},{default:(0,o.k6)((()=>[u])),_:1}),(0,o.bF)(L,{to:"/inventory"},{default:(0,o.k6)((()=>[s])),_:1}),(0,o.bF)(L,{to:"/notes"},{default:(0,o.k6)((()=>[d])),_:1}),(0,o.bF)(L,{to:"/links"},{default:(0,o.k6)((()=>[f])),_:1})])])]),(0,o.Lk)("div",p,[(0,o.Lk)("div",v,[(0,o.Lk)("div",h,[(0,o.bF)(w)])]),(0,o.Lk)("div",g,[(0,o.Lk)("div",b,[(0,o.bF)(_)])])]),m],64)}var k=n(4232);function L(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",{class:"bar",style:(0,k.Tr)({width:n.width})},[(0,o.Lk)("div",{class:"progress",style:(0,k.Tr)({background:n.color,width:n.percent+"%"})},null,4)],4)}var w={name:"Progress-bar",props:["width","color","percent","padding"]},_=n(1241);const C=(0,_.A)(w,[["render",L]]);var F=C,T=n.p+"img/profile_pic.8ceca355.jpg";const O=e=>((0,o.Qi)("data-v-2fbb936f"),e=e(),(0,o.jt)(),e),x={class:"box",id:"skill_card"},A=O((()=>(0,o.Lk)("img",{class:"icon",src:T},null,-1))),E={class:"health-bar"},P=(0,o.eW)("HP: 100 "),W=(0,o.eW)("MP: 100 "),j=O((()=>(0,o.Lk)("div",{class:"class"},[(0,o.Lk)("p",null,[(0,o.Lk)("b",null,"Class: ")]),(0,o.Lk)("p",null,"Cyber Security Red Teamer")],-1))),S={class:"level"},I=O((()=>(0,o.Lk)("p",null,[(0,o.Lk)("b",null,"Level: 2")],-1))),N=O((()=>(0,o.Lk)("div",{class:"skills"},[(0,o.Lk)("p",null,[(0,o.Lk)("b",null,"Skill Highlights:")]),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"Red Team Operation"),(0,o.Lk)("li",null,"Phishing Simluation"),(0,o.Lk)("li",null,"Payload Crafting"),(0,o.Lk)("li",null,"Penetration Testing")])],-1)));function B(e,t,n,r,a,i){const l=(0,o.g2)("Progress");return(0,o.uX)(),(0,o.CE)("div",x,[A,(0,o.Lk)("div",E,[(0,o.Lk)("p",null,[P,(0,o.bF)(l,{color:"green",percent:"100",padding:"5px",width:"100%"})]),(0,o.Lk)("p",null,[W,(0,o.bF)(l,{color:"blue",percent:"100",padding:"5px",width:"100%"})])]),j,(0,o.Lk)("div",S,[I,(0,o.bF)(l,{color:"#36A1FF",percent:"50",padding:"10px",width:"100%"})]),N])}n(8743);var M=n(9187),X=n(3695),D={name:"Intro",components:{Progress:F},mounted(){let e=M.vtF("chartdiv",X.VW);e.data=[{category:"Web Application",value:278},{category:"Phishing",value:400},{category:"Internal Testing",value:345},{category:"Mobile Testing",value:0},{category:"Network Testing",value:148},{category:"Tool Development",value:287}];let t=e.xAxes.push(new X.a);t.dataFields.category="category";let n=e.yAxes.push(new X.FL);n.renderer.gridType="polygons",n.renderer.labels.template.disabled=!0;let r=e.series.push(new X.E8);r.dataFields.valueY="value",r.dataFields.categoryX="category",r.name="Sales",r.strokeWidth=3,r.zIndex=2,r.strokeWidth=3,r.fillOpacity=.5,r.stroke=M.yWT("#9EC8B9"),r.fill=M.yWT("#1B4242a")}};const H=(0,_.A)(D,[["render",B],["__scopeId","data-v-2fbb936f"]]);var K=H,V={name:"App",components:{Progress:F,Character:K}};const Y=(0,_.A)(V,[["render",y]]);var z=Y,R=n(1387);const q={class:"home",id:"main_page"};function Q(e,t,n,r,a,i){const l=(0,o.g2)("Intro");return(0,o.uX)(),(0,o.CE)("div",q,[(0,o.bF)(l)])}const U={id:"intro"},G=(0,o.Lk)("h1",null,"Whoami?",-1),J=(0,o.Lk)("p",null,[(0,o.eW)("I am a "),(0,o.Lk)("b",null,"Cyber Security Red Teamer.")],-1),Z=(0,o.Lk)("h1",null,"What do I do?",-1),$=(0,o.Lk)("p",null,"I simulate real life cyber threat actor actions to better prepare clients' cyber security defense before getting attacked by them.",-1),ee=(0,o.Lk)("h2",null,"Skill Matrix",-1),te=(0,o.Lk)("div",{id:"chartdiv"},null,-1),ne=[G,J,Z,$,ee,te];function re(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",U,ne)}var oe={name:"Intro",components:{Progress:F},mounted(){let e=M.vtF("chartdiv",X.VW);e.data=[{category:"Web Application",value:278},{category:"Phishing",value:400},{category:"Internal Testing",value:345},{category:"Fixing Printers",value:0},{category:"Network Testing",value:148},{category:"Tool Development",value:287}];let t=e.xAxes.push(new X.a);t.dataFields.category="category";let n=e.yAxes.push(new X.FL);n.renderer.gridType="polygons",n.renderer.labels.template.disabled=!0;let r=e.series.push(new X.E8);r.dataFields.valueY="value",r.dataFields.categoryX="category",r.name="Sales",r.strokeWidth=3,r.zIndex=2,r.strokeWidth=3,r.fillOpacity=.5,r.stroke=M.yWT("#9EC8B9"),r.fill=M.yWT("#1B4242a")}};const ae=(0,_.A)(oe,[["render",re]]);var ie=ae,le={name:"HomeView",components:{Character:K,Intro:ie}};const ce=(0,_.A)(le,[["render",Q],["__scopeId","data-v-75fcc5d4"]]);var ue=ce;const se=[{path:"/",name:"home",component:ue},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,4140))},{path:"/inventory",name:"inventory",component:()=>n.e(947).then(n.bind(n,947))},{path:"/notes",name:"notes",children:[{path:"",component:()=>n.e(487).then(n.bind(n,8487))},{path:"ctfwriteup/:platform/:difficulty/:name",component:()=>n.e(800).then(n.bind(n,5800))}]},{path:"/links",name:"links",component:()=>n.e(845).then(n.bind(n,9226))}],de=(0,R.aE)({history:(0,R.LA)("/"),routes:se});var fe=de,pe=n(8950),ve=n(2353),he=n(4996),ge=n(292);pe.Yv.add(ve.KKr),pe.Yv.add(he.Vz1);const be=(0,r.Ef)(z);be.component("font-awesome-icon",ge.gc),be.use(fe),be.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({102:"xlsx",133:"pdfmake",182:"canvg",594:"about"}[e]||e)+"."+{102:"4e77a4e5",133:"0063b29a",178:"7166f9f1",182:"631b46d2",487:"907daf5c",594:"1941e3c9",800:"17179f03",822:"c5901aff",845:"6c90d4d4",883:"ea5f5b1e",947:"742c4176",952:"ae0846e7"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".c8cb7c46.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="personal_website:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var l,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var l=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,l=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+l+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=l,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=l,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),l=n.p+i;if(t(i,l))return o();e(r,l,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={845:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],l=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var s=c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7760)}));r=n.O(r)})();
//# sourceMappingURL=app.91345bed.js.map