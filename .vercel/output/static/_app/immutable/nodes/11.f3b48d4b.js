import{s as F,n as B}from"../chunks/scheduler.c83dfd02.js";import{S as J,i as K,g,s as b,e as z,h as w,A,c as D,a as k,f as u,z as Q,H as G,m as L,j as C,B as O,n as T,k as I,x as _,o as R}from"../chunks/index.bdcb1ddf.js";import{e as q}from"../chunks/each.e59479a4.js";import"../chunks/paths.dfdace7a.js";const U=async({fetch:i,params:t})=>({photos:await(await i("/api/visuals")).json(),title:"Visuals"}),te=Object.freeze(Object.defineProperty({__proto__:null,load:U},Symbol.toStringTag,{value:"Module"}));function M(i,t,c){const o=i.slice();return o[2]=t[c],o}function N(i){let t,c,o,r=i[2].title+"",m,h,f,d=i[2].content+"",l,e,s=new Date(Date.parse(i[2].updated)).toLocaleDateString("en-GB",i[1])+"",a,y,v,E,j,S;return{c(){t=g("div"),c=g("h4"),o=new G(!1),m=b(),h=g("div"),f=new G(!1),l=b(),e=g("div"),a=L(s),y=b(),v=g("a"),E=L("View full post"),S=b(),this.h()},l(p){t=w(p,"DIV",{class:!0});var n=C(t);c=w(n,"H4",{});var V=C(c);o=O(V,!1),V.forEach(u),m=D(n),h=w(n,"DIV",{class:!0});var x=C(h);f=O(x,!1),x.forEach(u),l=D(n),e=w(n,"DIV",{class:!0});var P=C(e);a=T(P,s),P.forEach(u),y=D(n),v=w(n,"A",{href:!0});var H=C(v);E=T(H,"View full post"),H.forEach(u),S=D(n),n.forEach(u),this.h()},h(){o.a=null,f.a=null,I(h,"class","photo--content"),I(e,"class","meta"),I(v,"href",j=i[2].link),I(t,"class","photo")},m(p,n){k(p,t,n),_(t,c),o.m(r,c),_(t,m),_(t,h),f.m(d,h),_(t,l),_(t,e),_(e,a),_(t,y),_(t,v),_(v,E),_(t,S)},p(p,n){n&1&&r!==(r=p[2].title+"")&&o.p(r),n&1&&d!==(d=p[2].content+"")&&f.p(d),n&1&&s!==(s=new Date(Date.parse(p[2].updated)).toLocaleDateString("en-GB",p[1])+"")&&R(a,s),n&1&&j!==(j=p[2].link)&&I(v,"href",j)},d(p){p&&u(t)}}}function W(i){let t,c="Everyday I try to produce some kind of art, recently this has manifested in the form of taking and editing lots and lots of photos.",o,r,m=`In the future I'll add some specific categories perhaps to showcase design work or my watercolours but for now I've just wired 
up the feed from my Pixelfed account below:`,h,f,d=q(i[0].photos),l=[];for(let e=0;e<d.length;e+=1)l[e]=N(M(i,d,e));return{c(){t=g("p"),t.textContent=c,o=b(),r=g("p"),r.textContent=m,h=b();for(let e=0;e<l.length;e+=1)l[e].c();f=z()},l(e){t=w(e,"P",{"data-svelte-h":!0}),A(t)!=="svelte-1bkakor"&&(t.textContent=c),o=D(e),r=w(e,"P",{"data-svelte-h":!0}),A(r)!=="svelte-158ubjy"&&(r.textContent=m),h=D(e);for(let s=0;s<l.length;s+=1)l[s].l(e);f=z()},m(e,s){k(e,t,s),k(e,o,s),k(e,r,s),k(e,h,s);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,s);k(e,f,s)},p(e,[s]){if(s&3){d=q(e[0].photos);let a;for(a=0;a<d.length;a+=1){const y=M(e,d,a);l[a]?l[a].p(y,s):(l[a]=N(y),l[a].c(),l[a].m(f.parentNode,f))}for(;a<l.length;a+=1)l[a].d(1);l.length=d.length}},i:B,o:B,d(e){e&&(u(t),u(o),u(r),u(h),u(f)),Q(l,e)}}}function X(i,t,c){let{data:o}=t;const r={year:"numeric",month:"long",day:"numeric"};return i.$$set=m=>{"data"in m&&c(0,o=m.data)},[o,r]}class ae extends J{constructor(t){super(),K(this,t,X,W,F,{data:0})}}export{ae as component,te as universal};
