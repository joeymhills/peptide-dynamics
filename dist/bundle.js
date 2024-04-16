(()=>{"use strict";function t(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const e=t=>"function"==typeof t,n={any:0,all:1};function a(a,i,{root:s,margin:r,amount:o="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};const l=t(a),c=new WeakMap,u=new IntersectionObserver((t=>{t.forEach((t=>{const n=c.get(t.target);if(t.isIntersecting!==Boolean(n))if(t.isIntersecting){const n=i(t);e(n)?c.set(t.target,n):u.unobserve(t.target)}else n&&(n(t),c.delete(t.target))}))}),{root:s,rootMargin:r,threshold:"number"==typeof o?o:n[o]});return l.forEach((t=>u.observe(t))),()=>u.disconnect()}const i={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},s=t=>1e3*t,r=t=>t/1e3,o=()=>{},l=t=>t;function c(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}const u=t=>t(),h=(t,e,n=i.duration)=>new Proxy({animations:t.map(u).filter(Boolean),duration:n,options:e},d),d={get:(t,e)=>{const n=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return r((null==n?void 0:n[e])||0);case"playbackRate":case"playState":return null==n?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(f)).catch(o)),t.finished;case"stop":return()=>{t.animations.forEach((t=>c(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==n?void 0:n[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,n)=>{switch(e){case"currentTime":n=s(n);case"playbackRate":for(let a=0;a<t.animations.length;a++)t.animations[a][e]=n;return!0}return!1}},f=t=>t.finished,m=t=>"object"==typeof t&&Boolean(t.createAnimation),y=t=>"number"==typeof t,p=t=>Array.isArray(t)&&!y(t[0]),g=(t,e,n)=>-n*t+n*e+t,v=(t,e,n)=>e-t==0?1:(n-t)/(e-t);function w(t,e){const n=t[t.length-1];for(let a=1;a<=e;a++){const i=v(0,e,a);t.push(g(n,1,i))}}const E=(t,e,n)=>Math.min(Math.max(n,t),e);const b=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,T=1e-7,S=12;function A(t,e,n,a){if(t===e&&n===a)return l;return i=>0===i||1===i?i:b(function(t,e,n,a,i){let s,r,o=0;do{r=e+(n-e)/2,s=b(r,a,i)-t,s>0?n=r:e=r}while(Math.abs(s)>T&&++o<S);return r}(i,0,1,t,n),e,a)}const D=(t,e="end")=>n=>{const a=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,i="end"===e?Math.floor(a):Math.ceil(a);return E(0,1,i/t)},O=t=>Array.isArray(t)&&y(t[0]),k={ease:A(.25,.1,.25,1),"ease-in":A(.42,0,1,1),"ease-in-out":A(.42,0,.58,1),"ease-out":A(0,0,.58,1)},M=/\((.*?)\)/;function x(t){if(e(t))return t;if(O(t))return A(...t);if(k[t])return k[t];if(t.startsWith("steps")){const e=M.exec(t);if(e){const t=e[1].split(",");return D(parseFloat(t[0]),t[1].trim())}}return l}class B{constructor(t,e=[0,1],{easing:n,duration:a=i.duration,delay:s=i.delay,endDelay:r=i.endDelay,repeat:o=i.repeat,offset:c,direction:u="normal",autoplay:h=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=l,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),n=n||i.easing,m(n)){const t=n.createAnimation(e);n=t.easing,e=t.keyframes||e,a=t.duration||a}this.repeat=o,this.easing=p(n)?l:x(n),this.updateDuration(a);const d=function(t,e=function(t){const e=[0];return w(e,t-1),e}(t.length),n=l){const a=t.length,i=a-e.length;return i>0&&w(e,i),i=>{let s=0;for(;s<a-2&&!(i<e[s+1]);s++);let r=E(0,1,v(e[s],e[s+1],i));const o=function(t,e){return p(t)?t[((t,e,n)=>{const a=e-t;return((n-t)%a+a)%a+t})(0,t.length,e)]:t}(n,s);return r=o(r),g(t[s],t[s+1],r)}}(e,c,p(n)?n.map(x):l);this.tick=e=>{var n;let a=0;a=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=a,a/=1e3,a=Math.max(a-s,0),"finished"===this.playState&&void 0===this.pauseTime&&(a=this.totalDuration);const i=a/this.duration;let o=Math.floor(i),l=i%1;!l&&i>=1&&(l=1),1===l&&o--;const c=o%2;("reverse"===u||"alternate"===u&&c||"alternate-reverse"===u&&!c)&&(l=1-l);const h=a>=this.totalDuration?1:Math.min(l,1),f=d(this.easing(h));t(f),void 0===this.pauseTime&&("finished"===this.playState||a>=this.totalDuration+r)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,f)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},h&&this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class R{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const I=new WeakMap;function P(t){return I.has(t)||I.set(t,{transforms:[],values:new Map}),I.get(t)}const j=["","X","Y","Z"],L={x:"translateX",y:"translateY",z:"translateZ"},q={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},V={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:q,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:l},skew:q},$=new Map,C=t=>`--motion-${t}`,F=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{j.forEach((e=>{F.push(t+e),$.set(C(t+e),V[t])}))}));const N=(t,e)=>F.indexOf(t)-F.indexOf(e),U=new Set(F),W=t=>U.has(t),_=t=>t.sort(N).reduce(z,"").trim(),z=(t,e)=>`${t} ${e}(var(${C(e)}))`,Y=t=>t.startsWith("--"),K=new Set,X=(t,e)=>document.createElement("div").animate(t,e),Z={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{X({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(X({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{X({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},G={},H={};for(const t in Z)H[t]=()=>(void 0===G[t]&&(G[t]=Z[t]()),G[t]);const J=(t,n)=>e(t)?H.linearEasing()?`linear(${((t,e)=>{let n="";const a=Math.round(e/.015);for(let e=0;e<a;e++)n+=t(v(0,a-1,e))+", ";return n.substring(0,n.length-2)})(t,n)})`:i.easing:O(t)?Q(t):t,Q=([t,e,n,a])=>`cubic-bezier(${t}, ${e}, ${n}, ${a})`;function tt(t){return L[t]&&(t=L[t]),W(t)?C(t):t}const et=(t,e)=>{e=tt(e);let n=Y(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=$.get(e);t&&(n=t.initialValue)}return n},nt=(t,e,n)=>{e=tt(e),Y(e)?t.style.setProperty(e,n):t.style[e]=n};function at(t,n,a,r={},u){const h=window.__MOTION_DEV_TOOLS_RECORD,d=!1!==r.record&&h;let f,{duration:g=i.duration,delay:v=i.delay,endDelay:w=i.endDelay,repeat:E=i.repeat,easing:b=i.easing,persist:T=!1,direction:S,offset:A,allowWebkitAcceleration:D=!1,autoplay:O=!0}=r;const k=P(t),M=W(n);let x=H.waapi();M&&((t,e)=>{L[e]&&(e=L[e]);const{transforms:n}=P(t);var a,i;i=e,-1===(a=n).indexOf(i)&&a.push(i),t.style.transform=_(n)})(t,n);const B=tt(n),I=function(t,e){return t.has(e)||t.set(e,new R),t.get(e)}(k.values,B),j=$.get(B);return c(I.animation,!(m(b)&&I.generator)&&!1!==r.record),()=>{const i=()=>{var e,n;return null!==(n=null!==(e=et(t,B))&&void 0!==e?e:null==j?void 0:j.initialValue)&&void 0!==n?n:0};let c=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}((t=>Array.isArray(t)?t:[t])(a),i);const k=function(t,e){var n;let a=(null==e?void 0:e.toDefaultUnit)||l;const i=t[t.length-1];if("string"==typeof i){const t=(null===(n=i.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(a=e=>e+t)}return a}(c,j);if(m(b)){const t=b.createAnimation(c,"opacity"!==n,i,B,I);b=t.easing,c=t.keyframes||c,g=t.duration||g}if(Y(B)&&(H.cssRegisterProperty()?function(t){if(!K.has(t)){K.add(t);try{const{syntax:e,initialValue:n}=$.has(t)?$.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(B):x=!1),M&&!H.linearEasing()&&(e(b)||p(b)&&b.some(e))&&(x=!1),x){j&&(c=c.map((t=>y(t)?j.toDefaultUnit(t):t))),1!==c.length||H.partialKeyframes()&&!d||c.unshift(i());const e={delay:s(v),duration:s(g),endDelay:s(w),easing:p(b)?void 0:J(b,g),direction:S,iterations:E+1,fill:"both"};f=t.animate({[B]:c,offset:A,easing:p(b)?b.map((t=>J(t,g))):void 0},e),f.finished||(f.finished=new Promise(((t,e)=>{f.onfinish=t,f.oncancel=e})));const n=c[c.length-1];f.finished.then((()=>{T||(nt(t,B,n),f.cancel())})).catch(o),D||(f.playbackRate=1.000001)}else if(u&&M)c=c.map((t=>"string"==typeof t?parseFloat(t):t)),1===c.length&&c.unshift(parseFloat(i())),f=new u((e=>{nt(t,B,k?k(e):e)}),c,Object.assign(Object.assign({},r),{duration:g,easing:b}));else{const e=c[c.length-1];nt(t,B,j&&y(e)?j.toDefaultUnit(e):e)}return d&&h(t,n,c,{duration:g,delay:v,easing:b,repeat:E,offset:A},"motion-one"),I.setAnimation(f),f&&!O&&f.pause(),f}}const it=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function st(t=.1,{start:e=0,from:n=0,easing:a}={}){return(i,s)=>{const r=y(n)?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,s),o=Math.abs(r-i);let l=t*o;if(a){const e=s*t;l=x(a)(l/e)*e}return e+l}}function rt(t,n,a){return e(t)?t(n,a):t}const ot=(lt=B,function(e,n,a={}){const i=(e=t(e)).length;Boolean(i),Boolean(n);const s=[];for(let t=0;t<i;t++){const r=e[t];for(const e in n){const o=it(a,e);o.delay=rt(o.delay,t,i);const l=at(r,e,n[e],o,lt);s.push(l)}}return h(s,a,a.duration)});var lt;function ct(t,e={}){return h([()=>{const n=new B(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function ut(t,n,a){return(e(t)?ct:ot)(t,n,a)}window.addEventListener("load",(function(){Array.from(document.getElementsByTagName("body")).forEach((function(t){t.classList.remove("preload")}))})),document.addEventListener("scroll",(function(){var t=document.querySelector(".header-main");window.scrollY>=20?t.classList.add("fade-in"):t.classList.remove("fade-in")})),Array.from(document.getElementsByClassName("nav-toggle")).forEach((function(t){t.addEventListener("click",(function(){Array.from(document.getElementsByTagName("body")).forEach((function(t){t.classList.toggle("no-scroll")})),Array.from(document.getElementsByClassName("header-main")).forEach((function(t){t.classList.toggle("active")}))}))})),document.addEventListener("touchmove",(function(t){t.preventDefault()})),a(document.getElementById("services"),(function(){ut(".stagger",{transform:"none"},{delay:st(.1),duration:.8,easing:[.22,.03,.26,1]})}),{amount:"any"}),a(document.getElementById("slide-right"),(function(){ut(".slide-right",{opacity:1,transform:"none"},{delay:.2,duration:.9,easing:[.17,.55,.55,1]})}),{amount:.5}),a(document.getElementById("slide-left"),(function(){ut(".slide-left",{opacity:1,transform:"none"},{delay:.2,duration:.9,easing:[.17,.55,.55,1]})}),{amount:.2})})();