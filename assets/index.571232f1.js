import{S as M,i as I,s as U,a as o4,c as d,m as E,t as m,b as p,d as h,e as r4,f as x,g as m4,h as g,j as p4,k as K,l as B,n as C,o as O,p as w,q as b,U as J,N as $4,A as R,K as _4,r as L,H as d4,E as j,W as E4,F as h4,L as g4,u as B4,v as D4,M as k4,w as C4,D as S,x as v4,y as A4,z as w4,B as z,C as P,G as b4,P as x4,R as F4,V as O4,I as L4,J as N4,O as S4,Q as P4,T as q4,X as G4,Y as W4,Z as M4,_ as I4,$ as Q,a0 as U4,a1 as K4,a2 as V4,a3 as i4,a4 as F,a5 as f4,a6 as V,a7 as N,a8 as c4,a9 as H,aa as H4,ab as T4,ac as J4,ad as R4,ae as j4,af as z4,ag as q,ah as Q4,ai as X4,aj as Y4,ak as G}from"./vendor.50af93a3.js";const Z4=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(t){if(t.ep)return;t.ep=!0;const l=n(t);fetch(t.href,l)}};Z4();function X(a){let e,n=" "+a[0].hint,u;return{c(){e=r4("span"),u=x(n),m4(e,"color","var(--text_secondary)",!1)},m(t,l){g(t,e,l),p4(e,u)},p(t,l){l&1&&n!==(n=" "+t[0].hint)&&K(u,n)},d(t){t&&B(e)}}}function y4(a){let e=a[0].name+"",n,u,t,l=a[0].hint&&X(a);return{c(){n=x(e),u=C(),l&&l.c(),t=O()},m(s,r){g(s,n,r),g(s,u,r),l&&l.m(s,r),g(s,t,r)},p(s,r){r&1&&e!==(e=s[0].name+"")&&K(n,e),s[0].hint?l?l.p(s,r):(l=X(s),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(s){s&&B(n),s&&B(u),l&&l.d(s),s&&B(t)}}}function uu(a){let e,n,u;var t=a[0].icon;function l(s){return{props:{slot:"before",fill:s[1],width:28,height:28}}}return t&&(e=new t(l(a))),{c(){e&&d(e.$$.fragment),n=O()},m(s,r){e&&E(e,s,r),g(s,n,r),u=!0},p(s,r){const c={};if(r&2&&(c.fill=s[1]),t!==(t=s[0].icon)){if(e){w();const f=e;p(f.$$.fragment,1,0,()=>{h(f,1)}),b()}t?(e=new t(l(s)),d(e.$$.fragment),m(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else t&&e.$set(c)},i(s){u||(e&&m(e.$$.fragment,s),u=!0)},o(s){e&&p(e.$$.fragment,s),u=!1},d(s){s&&B(n),e&&h(e,s)}}}function eu(a){let e,n;return e=new o4({props:{multiline:!0,description:a[0].text,href:a[0].link,target:"_blank",$$slots:{before:[uu],default:[y4]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,[t]){const l={};t&1&&(l.description=u[0].text),t&1&&(l.href=u[0].link),t&7&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function tu(a,e,n){let{item:u}=e,{fill:t=void 0}=e;return a.$$set=l=>{"item"in l&&n(0,u=l.item),"fill"in l&&n(1,t=l.fill)},[u,t]}class nu extends M{constructor(e){super();I(this,e,tu,eu,U,{item:0,fill:1})}}const W=[{name:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",color:"var(--dynamic_violet)",items:[{name:"Username",icon:J,hint:"(\u0430\u0434\u0440\u0435\u0441 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B)",text:"\u043E\u0442 5 \u0434\u043E 32 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",link:"https://vk.com/faq16629"},{name:"\u0414\u043B\u0438\u043D\u0430 \u0438\u043C\u0435\u043D\u0438 \u0438\u043B\u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u0438",icon:$4,text:"\u0434\u043E 32 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"},{name:"\u0421\u0442\u0430\u0442\u0443\u0441",icon:R,text:"\u0434\u043E 140 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"},{name:"\u041F\u0430\u0440\u043E\u043B\u044C",icon:_4,text:"\u043E\u0442 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"},{name:"\u0411\u0440\u0430\u0442\u044C\u044F, \u0441\u0435\u0441\u0442\u0440\u044B",icon:L,text:"\u0434\u043E 15 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"},{name:"\u0414\u0435\u0442\u0438 \u0438 \u0432\u043D\u0443\u043A\u0438",icon:d4,text:"\u0434\u043E 15 \u0434\u0435\u0442\u0435\u0439 \u0438 \u0434\u043E 15 \u0432\u043D\u0443\u043A\u043E\u0432"},{name:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F",icon:j,text:"\u0434\u043E 7 \u0443\u0447\u0435\u0431\u043D\u044B\u0445 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0439"},{name:"\u0412\u044B\u0441\u0448\u0435\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F",icon:j,text:"\u0434\u043E 10 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0439"},{name:"\u041A\u0430\u0440\u044C\u0435\u0440\u0430",icon:E4,text:"\u0434\u043E 7 \u043C\u0435\u0441\u0442 \u0440\u0430\u0431\u043E\u0442\u044B"},{name:"\u0412\u043E\u0435\u043D\u043D\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430",icon:h4,text:"\u0434\u043E 5 \u0432\u043E\u0438\u043D\u0441\u043A\u0438\u0445 \u0447\u0430\u0441\u0442\u0435\u0439"},{name:"\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F",icon:g4,text:"500 \u0432 \u0441\u0443\u0442\u043A\u0438"},{name:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",icon:B4,text:"\u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 3 \u043C\u0435\u0441\u044F\u0446\u0430 \u043F\u043E\u0441\u043B\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}]},{name:"\u0427\u0430\u0442\u044B",color:"var(--dynamic_blue)",items:[{name:"\u0427\u0438\u0441\u043B\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432",hint:"(\u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0447\u0430\u0442)",icon:D4,text:"\u0434\u043E 500 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"},{name:"\u0427\u0438\u0441\u043B\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432",hint:"(\u0447\u0430\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430)",icon:L,text:"\u0434\u043E 3 000 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"},{name:"\u0414\u043B\u0438\u043D\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",icon:k4,text:"\u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0434\u043E 4096 \u0431\u0430\u0439\u0442"},{name:"\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u044F",hint:"\u043A \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E",icon:C4,text:"\u0434\u043E 10 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439"}]},{name:"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438",color:"var(--dynamic_green)",items:[{name:"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B",icon:S,text:"JPG, PNG, GIF",link:"https://vk.com/dev/upload_files"},{name:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438",hint:"(\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0438\u043B\u0438 \u0447\u0430\u0442\u0430)",icon:v4,text:"200x200px",link:"https://vk.com/dev/upload_files"},{name:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",icon:A4,text:"400x400px",link:"https://vk.com/dev/upload_files_2"},{name:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",icon:w4,text:"1280x720px",link:"https://vk.com/dev/upload_files_2"},{name:"\u0421\u0443\u043C\u043C\u0430 \u0432\u044B\u0441\u043E\u0442\u044B \u0438 \u0448\u0438\u0440\u0438\u043D\u044B",icon:z,text:"\u0434\u043E 14 000 px",link:"https://vk.com/faq8209"},{name:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430",icon:P,text:"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 50 \u041C\u0411",link:"https://vk.com/dev/upload_files"},{name:"\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",icon:b4,text:"\u043D\u0435 \u043C\u0435\u043D\u0435\u0435 1:20",link:"https://vk.com/dev/upload_files"},{name:"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u0432 \u043E\u0434\u043D\u043E\u043C \u0430\u043B\u044C\u0431\u043E\u043C\u0435",icon:x4,text:"\u0434\u043E 10 000 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439",link:"https://vk.com/faq8209"},{name:"\u041E\u0442\u043C\u0435\u0442\u043A\u0438",icon:L,text:"\u0434\u043E 35 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",link:"https://vk.com/faq8209"}]},{name:"\u0418\u0441\u0442\u043E\u0440\u0438\u0438",color:"var(--dynamic_red)",items:[{name:"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B",hint:"\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438",icon:S,text:"JPG, PNG, GIF",link:"https://vk.com/dev/upload_files_3"},{name:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0432\u044B\u0441\u043E\u0442\u044B \u0438 \u0448\u0438\u0440\u0438\u043D\u044B",icon:z,text:"14 000 px",link:"https://vk.com/dev/upload_files_3"},{name:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430",icon:P,text:"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u041C\u0411",link:"https://vk.com/dev/upload_files_3"},{name:"\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",hint:"\u0432\u0438\u0434\u0435\u043E",icon:F4,text:"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 15 \u0441\u0435\u043A\u0443\u043D\u0434"},{name:"\u0412\u0438\u0434\u0435\u043E\u043A\u043E\u0434\u0435\u043A",icon:O4,text:"H.264",link:"https://vk.com/dev/upload_files_3"},{name:"\u0410\u0443\u0434\u0438\u043E\u043A\u043E\u0434\u0435\u043A",icon:L4,text:"AAC",link:"https://vk.com/dev/upload_files_3"}]},{name:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",color:"var(--dynamic_gray)",items:[{name:"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B",icon:S,text:"\u043B\u044E\u0431\u044B\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B \u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432",link:"https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2"},{name:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430",icon:P,text:"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 2048 \u041C\u0411",link:"https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2"}]},{name:"API",color:"var(--dynamic_orange)",items:[{name:"\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",icon:J,text:"3 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",link:"https://vk.com/dev/api_requests"},{name:"\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043E\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430",icon:L,text:"20 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",link:"https://vk.com/dev/api_requests"},{name:"\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043E\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430",icon:N4,text:"3 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",link:"https://vk.com/dev/api_requests"},{name:"\u0412\u044B\u0437\u043E\u0432\u044B \u043C\u0435\u0442\u043E\u0434\u043E\u0432 Execute",hint:"\u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0434\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430",icon:S4,text:"\u0434\u043E 25 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0439 \u043A \u0440\u0430\u0437\u043D\u044B\u043C \u043C\u0435\u0442\u043E\u0434\u0430\u043C",link:"https://vk.com/dev/execute"},{name:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 Execute",hint:"\u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0434\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430",icon:P4,text:"\u0434\u043E 1000 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439",link:"https://vk.com/dev/execute"},{name:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043E\u0442\u0432\u0435\u0442\u0430 Execute",icon:q4,text:"\u043D\u0435 \u0431\u043E\u043B\u0435\u0435 5 \u041C\u0411",link:"https://vk.com/dev/execute"},{name:"\u041B\u0438\u043C\u0438\u0442 \u043D\u0430 newsfeed.search",icon:G4,text:"1000 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0432 \u0441\u0443\u0442\u043A\u0438",link:"https://vk.com/dev/data_limits"},{name:"\u041B\u0438\u043C\u0438\u0442 \u043D\u0430 wall.search",icon:W4,text:"1000 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0432 \u0441\u0443\u0442\u043A\u0438",link:"https://vk.com/dev/data_limits"},{name:"\u041B\u0438\u043C\u0438\u0442 \u043D\u0430 wall.get",icon:R,text:"5000 \u0432\u044B\u0437\u043E\u0432\u043E\u0432 \u0432 \u0441\u0443\u0442\u043A\u0438",link:"https://vk.com/dev/data_limits"}]}];function Y(a,e,n){const u=a.slice();return u[9]=e[n],u}function Z(a,e,n){const u=a.slice();return u[12]=e[n],u}function y(a,e,n){const u=a.slice();return u[9]=e[n],u}function u4(a){let e,n;return e=new i4({props:{fixed:!0,maxWidth:"280px",width:"280px",$$slots:{default:[ou]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131080&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function e4(a){let e,n;return e=new V({}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function lu(a){let e=a[9].name+"",n,u;return{c(){n=x(e),u=C()},m(t,l){g(t,n,l),g(t,u,l)},p:Q4,d(t){t&&B(n),t&&B(u)}}}function t4(a){let e,n;return e=new o4({props:{href:`#${a[9].name}`,$$slots:{default:[lu]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131072&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function su(a){let e,n,u=W,t=[];for(let s=0;s<u.length;s+=1)t[s]=t4(y(a,u,s));const l=s=>p(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=O()},m(s,r){for(let c=0;c<t.length;c+=1)t[c].m(s,r);g(s,e,r),n=!0},p(s,r){if(r&0){u=W;let c;for(c=0;c<u.length;c+=1){const f=y(s,u,c);t[c]?(t[c].p(f,r),m(t[c],1)):(t[c]=t4(f),t[c].c(),m(t[c],1),t[c].m(e.parentNode,e))}for(w(),c=u.length;c<t.length;c+=1)l(c);b()}},i(s){if(!n){for(let r=0;r<u.length;r+=1)m(t[r]);n=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)p(t[r]);n=!1},d(s){H(t,s),s&&B(e)}}}function au(a){let e,n,u,t=a[3]!==F&&e4();return n=new N({props:{$$slots:{default:[su]},$$scope:{ctx:a}}}),{c(){t&&t.c(),e=C(),d(n.$$.fragment)},m(l,s){t&&t.m(l,s),g(l,e,s),E(n,l,s),u=!0},p(l,s){l[3]!==F?t?s&8&&m(t,1):(t=e4(),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(w(),p(t,1,1,()=>{t=null}),b());const r={};s&131072&&(r.$$scope={dirty:s,ctx:l}),n.$set(r)},i(l){u||(m(t),m(n.$$.fragment,l),u=!0)},o(l){p(t),p(n.$$.fragment,l),u=!1},d(l){t&&t.d(l),l&&B(e),h(n,l)}}}function ou(a){let e,n;return e=new f4({props:{$$slots:{default:[au]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131080&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function ru(a){let e;return{c(){e=x("\u041B\u0438\u043C\u0438\u0442\u044B")},m(n,u){g(n,e,u)},d(n){n&&B(e)}}}function iu(a){let e,n,u;function t(s){a[7](s)}let l={onChange:this.onChange};return a[0]!==void 0&&(l.value=a[0]),e=new H4({props:l}),T4.push(()=>J4(e,"value",t)),{c(){d(e.$$.fragment)},m(s,r){E(e,s,r),u=!0},p(s,r){const c={};!n&&r&1&&(n=!0,c.value=s[0],R4(()=>n=!1)),e.$set(c)},i(s){u||(m(e.$$.fragment,s),u=!0)},o(s){p(e.$$.fragment,s),u=!1},d(s){h(e,s)}}}function n4(a){let e,n;return e=new N({props:{$$slots:{default:[cu]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131072&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function fu(a){let e;return{c(){e=x("\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")},m(n,u){g(n,e,u)},d(n){n&&B(e)}}}function cu(a){let e,n;return e=new c4({props:{$$slots:{default:[fu]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131072&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function mu(a){let e=a[9].name+"",n;return{c(){n=x(e)},m(u,t){g(u,n,t)},p(u,t){t&2&&e!==(e=u[9].name+"")&&K(n,e)},d(u){u&&B(n)}}}function l4(a){let e,n;return e=new nu({props:{item:a[12],fill:a[9].color}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&2&&(l.item=u[12]),t&2&&(l.fill=u[9].color),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function pu(a){let e,n,u,t,l,s,r;e=new z4({props:{$$slots:{default:[mu]},$$scope:{ctx:a}}});let c=a[9].items,f=[];for(let i=0;i<c.length;i+=1)f[i]=l4(Z(a,c,i));const v=i=>p(f[i],1,1,()=>{f[i]=null});return{c(){d(e.$$.fragment),n=C(),u=r4("a"),l=C();for(let i=0;i<f.length;i+=1)f[i].c();s=O(),q(u,"id",t=a[9].name),q(u,"class","Archer svelte-a8xk6n")},m(i,o){E(e,i,o),g(i,n,o),g(i,u,o),g(i,l,o);for(let $=0;$<f.length;$+=1)f[$].m(i,o);g(i,s,o),r=!0},p(i,o){const $={};if(o&131074&&($.$$scope={dirty:o,ctx:i}),e.$set($),(!r||o&2&&t!==(t=i[9].name))&&q(u,"id",t),o&2){c=i[9].items;let _;for(_=0;_<c.length;_+=1){const k=Z(i,c,_);f[_]?(f[_].p(k,o),m(f[_],1)):(f[_]=l4(k),f[_].c(),m(f[_],1),f[_].m(s.parentNode,s))}for(w(),_=c.length;_<f.length;_+=1)v(_);b()}},i(i){if(!r){m(e.$$.fragment,i);for(let o=0;o<c.length;o+=1)m(f[o]);r=!0}},o(i){p(e.$$.fragment,i),f=f.filter(Boolean);for(let o=0;o<f.length;o+=1)p(f[o]);r=!1},d(i){h(e,i),i&&B(n),i&&B(u),i&&B(l),H(f,i),i&&B(s)}}}function s4(a){let e,n;return e=new N({props:{$$slots:{default:[pu]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131074&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function $u(a){let e;return{c(){e=x("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")},m(n,u){g(n,e,u)},d(n){n&&B(e)}}}function _u(a){let e,n;return e=new j4({props:{href:"https://github.com/SevereCloud/vk-limits/edit/master/src/data.ts",target:"_blank",$$slots:{default:[$u]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131072&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function du(a){let e,n,u,t,l,s,r;e=new V({props:{$$slots:{default:[ru]},$$scope:{ctx:a}}}),u=new N({props:{$$slots:{default:[iu]},$$scope:{ctx:a}}});let c=a[1],f=[];for(let o=0;o<c.length;o+=1)f[o]=s4(Y(a,c,o));const v=o=>p(f[o],1,1,()=>{f[o]=null});let i=null;return c.length||(i=n4(a)),s=new c4({props:{$$slots:{default:[_u]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment),n=C(),d(u.$$.fragment),t=C();for(let o=0;o<f.length;o+=1)f[o].c();i&&i.c(),l=C(),d(s.$$.fragment)},m(o,$){E(e,o,$),g(o,n,$),E(u,o,$),g(o,t,$);for(let _=0;_<f.length;_+=1)f[_].m(o,$);i&&i.m(o,$),g(o,l,$),E(s,o,$),r=!0},p(o,$){const _={};$&131072&&(_.$$scope={dirty:$,ctx:o}),e.$set(_);const k={};if($&131073&&(k.$$scope={dirty:$,ctx:o}),u.$set(k),$&2){c=o[1];let D;for(D=0;D<c.length;D+=1){const T=Y(o,c,D);f[D]?(f[D].p(T,$),m(f[D],1)):(f[D]=s4(T),f[D].c(),m(f[D],1),f[D].m(l.parentNode,l))}for(w(),D=c.length;D<f.length;D+=1)v(D);b(),!c.length&&i?i.p(o,$):c.length?i&&(w(),p(i,1,1,()=>{i=null}),b()):(i=n4(o),i.c(),m(i,1),i.m(l.parentNode,l))}const A={};$&131072&&(A.$$scope={dirty:$,ctx:o}),s.$set(A)},i(o){if(!r){m(e.$$.fragment,o),m(u.$$.fragment,o);for(let $=0;$<c.length;$+=1)m(f[$]);m(s.$$.fragment,o),r=!0}},o(o){p(e.$$.fragment,o),p(u.$$.fragment,o),f=f.filter(Boolean);for(let $=0;$<f.length;$+=1)p(f[$]);p(s.$$.fragment,o),r=!1},d(o){h(e,o),o&&B(n),h(u,o),o&&B(t),H(f,o),i&&i.d(o),o&&B(l),h(s,o)}}}function Eu(a){let e,n;return e=new f4({props:{id:"main",$$slots:{default:[du]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131075&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function hu(a){let e,n,u,t=a[2]&&u4(a);return n=new i4({props:{spaced:a[2],animate:!a[2],width:a[2]?"560px":"100%",maxWidth:a[2]?"560px":"100%",$$slots:{default:[Eu]},$$scope:{ctx:a}}}),{c(){t&&t.c(),e=C(),d(n.$$.fragment)},m(l,s){t&&t.m(l,s),g(l,e,s),E(n,l,s),u=!0},p(l,s){l[2]?t?(t.p(l,s),s&4&&m(t,1)):(t=u4(l),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(w(),p(t,1,1,()=>{t=null}),b());const r={};s&4&&(r.spaced=l[2]),s&4&&(r.animate=!l[2]),s&4&&(r.width=l[2]?"560px":"100%"),s&4&&(r.maxWidth=l[2]?"560px":"100%"),s&131075&&(r.$$scope={dirty:s,ctx:l}),n.$set(r)},i(l){u||(m(t),m(n.$$.fragment,l),u=!0)},o(l){p(t),p(n.$$.fragment,l),u=!1},d(l){t&&t.d(l),l&&B(e),h(n,l)}}}function a4(a){let e,n;return e=new V({props:{separator:!1}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function gu(a){let e,n,u=a[3]!==F&&a4();return{c(){u&&u.c(),e=O()},m(t,l){u&&u.m(t,l),g(t,e,l),n=!0},p(t,l){t[3]!==F?u?l&8&&m(u,1):(u=a4(),u.c(),m(u,1),u.m(e.parentNode,e)):u&&(w(),p(u,1,1,()=>{u=null}),b())},i(t){n||(m(u),n=!0)},o(t){p(u),n=!1},d(t){u&&u.d(t),t&&B(e)}}}function Bu(a){let e,n;return e=new V4({props:{class:"Doc",$$slots:{header:[gu],default:[hu]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,t){const l={};t&131087&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function Du(a){let e,n;return e=new M4({props:{$$slots:{default:[Bu]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,[t]){const l={};t&131087&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function ku(a,e,n){let u,t,l,s;const r=I4();Q(a,r,o=>n(6,l=o));const c=U4();Q(a,c,o=>n(3,s=o));const f=o=>{const $=[];return W.forEach(_=>{if(_.name.toLowerCase().indexOf(o)>-1)$.push(_);else{const k=[];_.items.forEach(A=>{(A.name.toLowerCase().indexOf(o)>-1||A.text.toLowerCase().indexOf(o)>-1||A.hint&&A.hint.toLowerCase().indexOf(o)>-1)&&k.push(A)}),k.length>0&&$.push({name:_.name,color:_.color,items:k})}}),$};let v="";function i(o){v=o,n(0,v)}return a.$$.update=()=>{a.$$.dirty&64&&console.log(l),a.$$.dirty&64&&n(2,u=l.viewWidth>=K4.TABLET),a.$$.dirty&1&&n(1,t=f(v.toLowerCase()))},[v,t,u,s,r,c,l,i]}class Cu extends M{constructor(e){super();I(this,e,ku,Du,U,{})}}function vu(a){let e,n;return e=new Cu({}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function Au(a){let e,n;return e=new X4({props:{platform:a[0],scheme:a[1],$$slots:{default:[vu]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},m(u,t){E(e,u,t),n=!0},p(u,[t]){const l={};t&1&&(l.platform=u[0]),t&2&&(l.scheme=u[1]),t&4&&(l.$$scope={dirty:t,ctx:u}),e.$set(l)},i(u){n||(m(e.$$.fragment,u),n=!0)},o(u){p(e.$$.fragment,u),n=!1},d(u){h(e,u)}}}function wu(a,e,n){let u,t="bright_light";return Y4(()=>{G.send("VKWebAppInit",{}),G.send("VKWebAppGetLaunchParams").then(l=>{l.vk_platform!=="desktop_web"&&n(0,u=F)}),G.subscribe(l=>{l.detail.type==="VKWebAppUpdateConfig"&&n(1,t=l.detail.data.scheme)})}),[u,t]}class bu extends M{constructor(e){super();I(this,e,wu,Au,U,{})}}new bu({target:document.getElementById("app")});
