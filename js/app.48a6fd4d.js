(function(){"use strict";var e={802:function(e,t,r){var o=r(751),n=r(641);const s={class:"min-h-screen bg-gray-100 flex flex-col"},a={class:"bg-gray-800 text-white p-4"},i={class:"container mx-auto flex justify-between items-center"},l={class:"flex space-x-4"},c={class:"flex-grow container mx-auto p-8"};function u(e,t,r,o,u,d){const f=(0,n.g2)("router-link"),p=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("header",a,[(0,n.Lk)("nav",i,[t[4]||(t[4]=(0,n.Lk)("h1",{class:"text-2xl font-bold"},"Kado Kliewer",-1)),(0,n.Lk)("ul",l,[(0,n.Lk)("li",null,[(0,n.bF)(f,{to:"/",class:"hover:text-blue-400"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Home")]))),_:1})]),(0,n.Lk)("li",null,[(0,n.bF)(f,{to:"/portfolio",class:"hover:text-blue-400"},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("Portfolio")]))),_:1})]),t[2]||(t[2]=(0,n.Lk)("li",null,[(0,n.Lk)("a",{href:"#",class:"hover:text-blue-400"},"About")],-1)),t[3]||(t[3]=(0,n.Lk)("li",null,[(0,n.Lk)("a",{href:"#",class:"hover:text-blue-400"},"Contact")],-1))])])]),(0,n.Lk)("main",c,[(0,n.bF)(p)]),t[5]||(t[5]=(0,n.Lk)("footer",{class:"bg-gray-800 text-white p-4"},[(0,n.Lk)("div",{class:"container mx-auto text-center"},[(0,n.Lk)("p",null,"© 2024 Kado Kliewer. All rights reserved.")])],-1))])}var d={name:"App"},f=r(262);const p=(0,f.A)(d,[["render",u]]);var h=p,v=r(220);const g={class:"bg-white shadow-lg rounded-lg overflow-hidden"};function b(e,t,r,o,s,a){return(0,n.uX)(),(0,n.CE)("div",g,t[0]||(t[0]=[(0,n.Fv)('<div class="md:flex"><div class="md:flex-shrink-0"><img class="h-48 w-full object-cover md:w-48" src="/src/assets/logo.png" alt="Kado Kliewer"></div><div class="p-8"><h2 class="text-3xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h2><p class="text-gray-600 mb-4"> Hello! I&#39;m Kado Kliewer, a passionate and ambitious web developer. I&#39;m currently honing my skills in modern web technologies, with a focus on Vue.js and responsive design. This portfolio website showcases my journey and growth in the field of web development. </p><p class="text-gray-600"> As I progress through my studies, I&#39;ll be adding more interactive features and showcasing my projects here. Stay tuned for updates! </p></div></div>',1)]))}var m={name:"HomeView"};const w=(0,f.A)(m,[["render",b]]);var y=w,k=r(33);const x={class:"space-y-6"},L={key:0,class:"flex justify-center items-center py-8"},_={key:1,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"},E={key:2,class:"grid gap-6 md:grid-cols-2 lg:grid-cols-3"},j={class:"text-xl font-semibold text-gray-800 mb-2"},C=["href"],O={key:0,class:"text-gray-600 mb-4"},X={class:"flex items-center space-x-4 text-sm"},K={key:0,class:"bg-gray-100 px-2 py-1 rounded"},A={class:"text-gray-500"};function F(e,t,r,o,s,a){return(0,n.uX)(),(0,n.CE)("div",x,[t[1]||(t[1]=(0,n.Lk)("h2",{class:"text-3xl font-bold text-gray-800"},"My GitHub Repositories",-1)),s.loading?((0,n.uX)(),(0,n.CE)("div",L,t[0]||(t[0]=[(0,n.Lk)("div",{class:"animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"},null,-1)]))):s.error?((0,n.uX)(),(0,n.CE)("div",_,[(0,n.Lk)("p",null,(0,k.v_)(s.error),1)])):((0,n.uX)(),(0,n.CE)("div",E,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.repositories,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"},[(0,n.Lk)("h3",j,[(0,n.Lk)("a",{href:e.html_url,target:"_blank",class:"hover:text-blue-600 transition-colors"},(0,k.v_)(e.name),9,C)]),e.description?((0,n.uX)(),(0,n.CE)("p",O,(0,k.v_)(e.description),1)):(0,n.Q3)("",!0),(0,n.Lk)("div",X,[e.language?((0,n.uX)(),(0,n.CE)("span",K,(0,k.v_)(e.language),1)):(0,n.Q3)("",!0),(0,n.Lk)("span",A," Updated: "+(0,k.v_)(new Date(e.updated_at).toLocaleDateString()),1)])])))),128))]))])}var P={name:"PortfolioView",data(){return{repositories:[],loading:!0,error:null}},async created(){try{const e=await fetch("https://api.github.com/users/kado-kliewer/repos");if(!e.ok)throw new Error("Failed to fetch repositories");this.repositories=await e.json()}catch(e){this.error="Failed to load repositories. Please try again later.",console.error("Error:",e)}finally{this.loading=!1}}};const H=(0,f.A)(P,[["render",F]]);var I=H;const V=[{path:"/",name:"HomeView",component:y},{path:"/portfolio",name:"PortfolioView",component:I}],T=(0,v.aE)({history:(0,v.LA)(),routes:V});var W=T;const D=(0,o.Ef)(h);D.use(W),D.mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,s){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],s=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,n,s]}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var u=l(r)}for(t&&t(o);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},o=self["webpackChunkportfolio_website_kado_kliewer"]=self["webpackChunkportfolio_website_kado_kliewer"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(802)}));o=r.O(o)})();
//# sourceMappingURL=app.48a6fd4d.js.map