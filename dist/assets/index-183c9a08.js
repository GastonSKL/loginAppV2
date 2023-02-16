(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ci(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function li(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Zl(r):li(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(he(t))return t;if(ae(t))return t}}const Yl=/;(?![^(]*\))/g,Xl=/:([^]+)/,Ql=/\/\*.*?\*\//gs;function Zl(t){const e={};return t.replace(Ql,"").split(Yl).forEach(n=>{if(n){const r=n.split(Xl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ui(t){let e="";if(he(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=ui(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const eu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tu=ci(eu);function Ta(t){return!!t||t===""}const Mt=t=>he(t)?t:t==null?"":$(t)||ae(t)&&(t.toString===Ca||!W(t.toString))?JSON.stringify(t,Sa,2):String(t),Sa=(t,e)=>e&&e.__v_isRef?Sa(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ra(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!$(e)&&!Oa(e)?String(e):e,oe={},Zt=[],We=()=>{},nu=()=>!1,ru=/^on[^a-z]/,$r=t=>ru.test(t),fi=t=>t.startsWith("onUpdate:"),Ee=Object.assign,di=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},su=Object.prototype.hasOwnProperty,J=(t,e)=>su.call(t,e),$=Array.isArray,en=t=>Hr(t)==="[object Map]",Ra=t=>Hr(t)==="[object Set]",W=t=>typeof t=="function",he=t=>typeof t=="string",hi=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Aa=t=>ae(t)&&W(t.then)&&W(t.catch),Ca=Object.prototype.toString,Hr=t=>Ca.call(t),iu=t=>Hr(t).slice(8,-1),Oa=t=>Hr(t)==="[object Object]",pi=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mr=ci(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ou=/-(\w)/g,an=jr(t=>t.replace(ou,(e,n)=>n?n.toUpperCase():"")),au=/\B([A-Z])/g,pn=jr(t=>t.replace(au,"-$1").toLowerCase()),Pa=jr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ls=jr(t=>t?`on${Pa(t)}`:""),Un=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xi;const cu=()=>Xi||(Xi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Be;class lu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function uu(t,e=Be){e&&e.active&&e.effects.push(t)}function fu(){return Be}const mi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ka=t=>(t.w&At)>0,Na=t=>(t.n&At)>0,du=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},hu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ka(s)&&!Na(s)?s.delete(t):e[n++]=s,s.w&=~At,s.n&=~At}e.length=n}},Ns=new WeakMap;let An=0,At=1;const xs=30;let $e;const jt=Symbol(""),Ds=Symbol("");class gi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uu(this,r)}run(){if(!this.active)return this.fn();let e=$e,n=It;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$e,$e=this,It=!0,At=1<<++An,An<=xs?du(this):Qi(this),this.fn()}finally{An<=xs&&hu(this),At=1<<--An,$e=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(Qi(this),this.onStop&&this.onStop(),this.active=!1)}}function Qi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let It=!0;const xa=[];function mn(){xa.push(It),It=!1}function gn(){const t=xa.pop();It=t===void 0?!0:t}function Re(t,e,n){if(It&&$e){let r=Ns.get(t);r||Ns.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=mi()),Da(s)}}function Da(t,e){let n=!1;An<=xs?Na(t)||(t.n|=At,n=!ka(t)):n=!t.has($e),n&&(t.add($e),$e.deps.push(t))}function lt(t,e,n,r,s,i){const o=Ns.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?pi(n)&&a.push(o.get("length")):(a.push(o.get(jt)),en(t)&&a.push(o.get(Ds)));break;case"delete":$(t)||(a.push(o.get(jt)),en(t)&&a.push(o.get(Ds)));break;case"set":en(t)&&a.push(o.get(jt));break}if(a.length===1)a[0]&&Ls(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ls(mi(c))}}function Ls(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&Zi(r);for(const r of n)r.computed||Zi(r)}function Zi(t,e){(t!==$e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const pu=ci("__proto__,__v_isRef,__isVue"),La=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hi)),mu=_i(),gu=_i(!1,!0),_u=_i(!0),eo=yu();function yu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Re(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mn();const r=Y(this)[e].apply(this,n);return gn(),r}}),t}function bu(t){const e=Y(this);return Re(e,"has",t),e.hasOwnProperty(t)}function _i(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Lu:$a:e?Ba:Fa).get(r))return r;const o=$(r);if(!t){if(o&&J(eo,s))return Reflect.get(eo,s,i);if(s==="hasOwnProperty")return bu}const a=Reflect.get(r,s,i);return(hi(s)?La.has(s):pu(s))||(t||Re(r,"get",s),e)?a:be(a)?o&&pi(s)?a:a.value:ae(a)?t?Ha(a):Yn(a):a}}const vu=Ma(),Eu=Ma(!0);function Ma(t=!1){return function(n,r,s,i){let o=n[r];if(cn(o)&&be(o)&&!be(s))return!1;if(!t&&(!Or(s)&&!cn(s)&&(o=Y(o),s=Y(s)),!$(n)&&be(o)&&!be(s)))return o.value=s,!0;const a=$(n)&&pi(r)?Number(r)<n.length:J(n,r),c=Reflect.set(n,r,s,i);return n===Y(i)&&(a?Un(s,o)&&lt(n,"set",r,s):lt(n,"add",r,s)),c}}function wu(t,e){const n=J(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&lt(t,"delete",e,void 0),r}function Iu(t,e){const n=Reflect.has(t,e);return(!hi(e)||!La.has(e))&&Re(t,"has",e),n}function Tu(t){return Re(t,"iterate",$(t)?"length":jt),Reflect.ownKeys(t)}const Ua={get:mu,set:vu,deleteProperty:wu,has:Iu,ownKeys:Tu},Su={get:_u,set(t,e){return!0},deleteProperty(t,e){return!0}},Ru=Ee({},Ua,{get:gu,set:Eu}),yi=t=>t,Wr=t=>Reflect.getPrototypeOf(t);function cr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);n||(e!==i&&Re(s,"get",e),Re(s,"get",i));const{has:o}=Wr(s),a=r?yi:n?Ei:Fn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function lr(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return e||(t!==s&&Re(r,"has",t),Re(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ur(t,e=!1){return t=t.__v_raw,!e&&Re(Y(t),"iterate",jt),Reflect.get(t,"size",t)}function to(t){t=Y(t);const e=Y(this);return Wr(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function no(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=Wr(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Un(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function ro(t){const e=Y(this),{has:n,get:r}=Wr(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&lt(e,"delete",t,void 0),i}function so(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function fr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Y(o),c=e?yi:t?Ei:Fn;return!t&&Re(a,"iterate",jt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function dr(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=en(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?yi:e?Ei:Fn;return!e&&Re(i,"iterate",c?Ds:jt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:this}}function Au(){const t={get(i){return cr(this,i)},get size(){return ur(this)},has:lr,add:to,set:no,delete:ro,clear:so,forEach:fr(!1,!1)},e={get(i){return cr(this,i,!1,!0)},get size(){return ur(this)},has:lr,add:to,set:no,delete:ro,clear:so,forEach:fr(!1,!0)},n={get(i){return cr(this,i,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:fr(!0,!1)},r={get(i){return cr(this,i,!0,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=dr(i,!1,!1),n[i]=dr(i,!0,!1),e[i]=dr(i,!1,!0),r[i]=dr(i,!0,!0)}),[t,n,e,r]}const[Cu,Ou,Pu,ku]=Au();function bi(t,e){const n=e?t?ku:Pu:t?Ou:Cu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(J(n,s)&&s in r?n:r,s,i)}const Nu={get:bi(!1,!1)},xu={get:bi(!1,!0)},Du={get:bi(!0,!1)},Fa=new WeakMap,Ba=new WeakMap,$a=new WeakMap,Lu=new WeakMap;function Mu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uu(t){return t.__v_skip||!Object.isExtensible(t)?0:Mu(iu(t))}function Yn(t){return cn(t)?t:vi(t,!1,Ua,Nu,Fa)}function Fu(t){return vi(t,!1,Ru,xu,Ba)}function Ha(t){return vi(t,!0,Su,Du,$a)}function vi(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Uu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tn(t){return cn(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function Or(t){return!!(t&&t.__v_isShallow)}function ja(t){return tn(t)||cn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Wa(t){return Cr(t,"__v_skip",!0),t}const Fn=t=>ae(t)?Yn(t):t,Ei=t=>ae(t)?Ha(t):t;function Va(t){It&&$e&&(t=Y(t),Da(t.dep||(t.dep=mi())))}function za(t,e){t=Y(t);const n=t.dep;n&&Ls(n)}function be(t){return!!(t&&t.__v_isRef===!0)}function st(t){return Ka(t,!1)}function Bu(t){return Ka(t,!0)}function Ka(t,e){return be(t)?t:new $u(t,e)}class $u{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Fn(e)}get value(){return Va(this),this._value}set value(e){const n=this.__v_isShallow||Or(e)||cn(e);e=n?e:Y(e),Un(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Fn(e),za(this))}}function at(t){return be(t)?t.value:t}const Hu={get:(t,e,n)=>at(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qa(t){return tn(t)?t:new Proxy(t,Hu)}var Ja;class ju{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ja]=!1,this._dirty=!0,this.effect=new gi(e,()=>{this._dirty||(this._dirty=!0,za(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return Va(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ja="__v_isReadonly";function Wu(t,e,n=!1){let r,s;const i=W(t);return i?(r=t,s=We):(r=t.get,s=t.set),new ju(r,s,i||!s,n)}function Tt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Vr(i,e,n)}return s}function xe(t,e,n,r){if(W(t)){const i=Tt(t,e,n,r);return i&&Aa(i)&&i.catch(o=>{Vr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(xe(t[i],e,n,r));return s}function Vr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Tt(c,null,10,[t,o,a]);return}}Vu(t,n,s,r)}function Vu(t,e,n,r=!0){console.error(t)}let Bn=!1,Ms=!1;const ye=[];let Ge=0;const nn=[];let nt=null,Ut=0;const Ga=Promise.resolve();let wi=null;function Ya(t){const e=wi||Ga;return t?e.then(this?t.bind(this):t):e}function zu(t){let e=Ge+1,n=ye.length;for(;e<n;){const r=e+n>>>1;$n(ye[r])<t?e=r+1:n=r}return e}function Ii(t){(!ye.length||!ye.includes(t,Bn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?ye.push(t):ye.splice(zu(t.id),0,t),Xa())}function Xa(){!Bn&&!Ms&&(Ms=!0,wi=Ga.then(Za))}function Ku(t){const e=ye.indexOf(t);e>Ge&&ye.splice(e,1)}function qu(t){$(t)?nn.push(...t):(!nt||!nt.includes(t,t.allowRecurse?Ut+1:Ut))&&nn.push(t),Xa()}function io(t,e=Bn?Ge+1:0){for(;e<ye.length;e++){const n=ye[e];n&&n.pre&&(ye.splice(e,1),e--,n())}}function Qa(t){if(nn.length){const e=[...new Set(nn)];if(nn.length=0,nt){nt.push(...e);return}for(nt=e,nt.sort((n,r)=>$n(n)-$n(r)),Ut=0;Ut<nt.length;Ut++)nt[Ut]();nt=null,Ut=0}}const $n=t=>t.id==null?1/0:t.id,Ju=(t,e)=>{const n=$n(t)-$n(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Za(t){Ms=!1,Bn=!0,ye.sort(Ju);const e=We;try{for(Ge=0;Ge<ye.length;Ge++){const n=ye[Ge];n&&n.active!==!1&&Tt(n,null,14)}}finally{Ge=0,ye.length=0,Qa(),Bn=!1,wi=null,(ye.length||nn.length)&&Za()}}function Gu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||oe;p&&(s=n.map(m=>he(m)?m.trim():m)),d&&(s=n.map(ks))}let a,c=r[a=ls(e)]||r[a=ls(an(e))];!c&&i&&(c=r[a=ls(pn(e))]),c&&xe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xe(l,t,6,s)}}function ec(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=ec(l,e,!0);u&&(a=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ae(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):Ee(o,i),ae(t)&&r.set(t,o),o)}function zr(t,e){return!t||!$r(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,pn(e))||J(t,e))}let Ne=null,Kr=null;function Pr(t){const e=Ne;return Ne=t,Kr=t&&t.type.__scopeId||null,e}function _n(t){Kr=t}function yn(){Kr=null}function Yu(t,e=Ne,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mo(-1);const i=Pr(e);let o;try{o=t(...s)}finally{Pr(i),r._d&&mo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function us(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:v}=t;let x,A;const D=Pr(t);try{if(n.shapeFlag&4){const V=s||r;x=Je(u.call(V,V,d,i,m,p,g)),A=c}else{const V=e;x=Je(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),A=e.props?c:Xu(c)}}catch(V){xn.length=0,Vr(V,t,1),x=ve(Ve)}let k=x;if(A&&v!==!1){const V=Object.keys(A),{shapeFlag:ee}=k;V.length&&ee&7&&(o&&V.some(fi)&&(A=Qu(A,o)),k=Ct(k,A))}return n.dirs&&(k=Ct(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),x=k,Pr(D),x}const Xu=t=>{let e;for(const n in t)(n==="class"||n==="style"||$r(n))&&((e||(e={}))[n]=t[n]);return e},Qu=(t,e)=>{const n={};for(const r in t)(!fi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!zr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?oo(r,o,l):!0:!!o;return!1}function oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!zr(n,i))return!0}return!1}function ef({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tf=t=>t.__isSuspense;function nf(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):qu(t)}function _r(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function Xe(t,e,n=!1){const r=de||Ne;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r.proxy):e}}const hr={};function kn(t,e,n){return tc(t,e,n)}function tc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=oe){const a=fu()===(de==null?void 0:de.scope)?de:null;let c,l=!1,u=!1;if(be(t)?(c=()=>t.value,l=Or(t)):tn(t)?(c=()=>t,r=!0):$(t)?(u=!0,l=t.some(k=>tn(k)||Or(k)),c=()=>t.map(k=>{if(be(k))return k.value;if(tn(k))return $t(k);if(W(k))return Tt(k,a,2)})):W(t)?e?c=()=>Tt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),xe(t,a,3,[p])}:c=We,e&&r){const k=c;c=()=>$t(k())}let d,p=k=>{d=A.onStop=()=>{Tt(k,a,4)}},m;if(jn)if(p=We,e?n&&xe(e,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const k=Qf();m=k.__watcherHandles||(k.__watcherHandles=[])}else return We;let g=u?new Array(t.length).fill(hr):hr;const v=()=>{if(A.active)if(e){const k=A.run();(r||l||(u?k.some((V,ee)=>Un(V,g[ee])):Un(k,g)))&&(d&&d(),xe(e,a,3,[k,g===hr?void 0:u&&g[0]===hr?[]:g,p]),g=k)}else A.run()};v.allowRecurse=!!e;let x;s==="sync"?x=v:s==="post"?x=()=>Se(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),x=()=>Ii(v));const A=new gi(c,x);e?n?v():g=A.run():s==="post"?Se(A.run.bind(A),a&&a.suspense):A.run();const D=()=>{A.stop(),a&&a.scope&&di(a.scope.effects,A)};return m&&m.push(D),D}function rf(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?nc(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=de;ln(this);const a=tc(s,i.bind(r),n);return o?ln(o):Wt(),a}function nc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function $t(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))$t(t.value,e);else if($(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(Ra(t)||en(t))t.forEach(n=>{$t(n,e)});else if(Oa(t))for(const n in t)$t(t[n],e);return t}function sf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gr(()=>{t.isMounted=!0}),ac(()=>{t.isUnmounting=!0}),t}const Oe=[Function,Array],of={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},setup(t,{slots:e}){const n=zf(),r=sf();let s;return()=>{const i=e.default&&sc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Ve){o=v;break}}const a=Y(t),{mode:c}=a;if(r.isLeaving)return fs(o);const l=ao(o);if(!l)return fs(o);const u=Us(l,a,r,n);Fs(l,u);const d=n.subTree,p=d&&ao(d);let m=!1;const{getTransitionKey:g}=l.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,m=!0)}if(p&&p.type!==Ve&&(!Ft(l,p)||m)){const v=Us(p,a,r,n);if(Fs(p,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},fs(o);c==="in-out"&&l.type!==Ve&&(v.delayLeave=(x,A,D)=>{const k=rc(r,p);k[String(p.key)]=p,x._leaveCb=()=>{A(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},af=of;function rc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Us(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:x,onAfterAppear:A,onAppearCancelled:D}=e,k=String(t.key),V=rc(n,t),ee=(H,ie)=>{H&&xe(H,r,9,ie)},le=(H,ie)=>{const te=ie[1];ee(H,ie),$(H)?H.every(ge=>ge.length<=1)&&te():H.length<=1&&te()},me={mode:i,persisted:o,beforeEnter(H){let ie=a;if(!n.isMounted)if(s)ie=v||a;else return;H._leaveCb&&H._leaveCb(!0);const te=V[k];te&&Ft(t,te)&&te.el._leaveCb&&te.el._leaveCb(),ee(ie,[H])},enter(H){let ie=c,te=l,ge=u;if(!n.isMounted)if(s)ie=x||c,te=A||l,ge=D||u;else return;let _e=!1;const Le=H._enterCb=et=>{_e||(_e=!0,et?ee(ge,[H]):ee(te,[H]),me.delayedLeave&&me.delayedLeave(),H._enterCb=void 0)};ie?le(ie,[H,Le]):Le()},leave(H,ie){const te=String(t.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return ie();ee(d,[H]);let ge=!1;const _e=H._leaveCb=Le=>{ge||(ge=!0,ie(),Le?ee(g,[H]):ee(m,[H]),H._leaveCb=void 0,V[te]===t&&delete V[te])};V[te]=t,p?le(p,[H,_e]):_e()},clone(H){return Us(H,e,n,r)}};return me}function fs(t){if(qr(t))return t=Ct(t),t.children=null,t}function ao(t){return qr(t)?t.children?t.children[0]:void 0:t}function Fs(t,e){t.shapeFlag&6&&t.component?Fs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Pe?(o.patchFlag&128&&s++,r=r.concat(sc(o.children,e,a))):(e||o.type!==Ve)&&r.push(a!=null?Ct(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ic(t){return W(t)?{setup:t,name:t.name}:t}const yr=t=>!!t.type.__asyncLoader,qr=t=>t.type.__isKeepAlive;function cf(t,e){oc(t,"a",e)}function lf(t,e){oc(t,"da",e)}function oc(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qr(s.parent.vnode)&&uf(r,e,n,s),s=s.parent}}function uf(t,e,n,r){const s=Jr(e,t,r,!0);cc(()=>{di(r[e],s)},n)}function Jr(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mn(),ln(n);const a=xe(e,n,t,o);return Wt(),gn(),a});return r?s.unshift(i):s.push(i),i}}const ft=t=>(e,n=de)=>(!jn||t==="sp")&&Jr(t,(...r)=>e(...r),n),ff=ft("bm"),Gr=ft("m"),df=ft("bu"),hf=ft("u"),ac=ft("bum"),cc=ft("um"),pf=ft("sp"),mf=ft("rtg"),gf=ft("rtc");function _f(t,e=de){Jr("ec",t,e)}function Bs(t,e){const n=Ne;if(n===null)return t;const r=Qr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=oe]=e[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&$t(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(mn(),xe(c,n,8,[t.el,a,t,e]),gn())}}const yf=Symbol();function bf(t,e,n,r){let s;const i=n&&n[r];if($(t)||he(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const $s=t=>t?vc(t)?Qr(t)||t.proxy:$s(t.parent):null,Nn=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$s(t.parent),$root:t=>$s(t.root),$emit:t=>t.emit,$options:t=>Ti(t),$forceUpdate:t=>t.f||(t.f=()=>Ii(t.update)),$nextTick:t=>t.n||(t.n=Ya.bind(t.proxy)),$watch:t=>rf.bind(t)}),ds=(t,e)=>t!==oe&&!t.__isScriptSetup&&J(t,e),vf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ds(r,e))return o[e]=1,r[e];if(s!==oe&&J(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==oe&&J(n,e))return o[e]=4,n[e];Hs&&(o[e]=0)}}const u=Nn[e];let d,p;if(u)return e==="$attrs"&&Re(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==oe&&J(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ds(s,e)?(s[e]=n,!0):r!==oe&&J(r,e)?(r[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&J(t,o)||ds(e,o)||(a=i[0])&&J(a,o)||J(r,o)||J(Nn,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Hs=!0;function Ef(t){const e=Ti(t),n=t.proxy,r=t.ctx;Hs=!1,e.beforeCreate&&co(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:x,beforeDestroy:A,beforeUnmount:D,destroyed:k,unmounted:V,render:ee,renderTracked:le,renderTriggered:me,errorCaptured:H,serverPrefetch:ie,expose:te,inheritAttrs:ge,components:_e,directives:Le,filters:et}=e;if(l&&wf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Q=o[ne];W(Q)&&(r[ne]=Q.bind(n))}if(s){const ne=s.call(n,n);ae(ne)&&(t.data=Yn(ne))}if(Hs=!0,i)for(const ne in i){const Q=i[ne],Me=W(Q)?Q.bind(n,n):W(Q.get)?Q.get.bind(n,n):We,kt=!W(Q)&&W(Q.set)?Q.set.bind(n):We,Ue=ke({get:Me,set:kt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Te=>Ue.value=Te})}if(a)for(const ne in a)lc(a[ne],r,n,ne);if(c){const ne=W(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Q=>{_r(Q,ne[Q])})}u&&co(u,t,"c");function ue(ne,Q){$(Q)?Q.forEach(Me=>ne(Me.bind(n))):Q&&ne(Q.bind(n))}if(ue(ff,d),ue(Gr,p),ue(df,m),ue(hf,g),ue(cf,v),ue(lf,x),ue(_f,H),ue(gf,le),ue(mf,me),ue(ac,D),ue(cc,V),ue(pf,ie),$(te))if(te.length){const ne=t.exposed||(t.exposed={});te.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:Me=>n[Q]=Me})})}else t.exposed||(t.exposed={});ee&&t.render===We&&(t.render=ee),ge!=null&&(t.inheritAttrs=ge),_e&&(t.components=_e),Le&&(t.directives=Le)}function wf(t,e,n=We,r=!1){$(t)&&(t=js(t));for(const s in t){const i=t[s];let o;ae(i)?"default"in i?o=Xe(i.from||s,i.default,!0):o=Xe(i.from||s):o=Xe(i),be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function co(t,e,n){xe($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lc(t,e,n,r){const s=r.includes(".")?nc(n,r):()=>n[r];if(he(t)){const i=e[t];W(i)&&kn(s,i)}else if(W(t))kn(s,t.bind(n));else if(ae(t))if($(t))t.forEach(i=>lc(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&kn(s,i,t)}}function Ti(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>kr(c,l,o,!0)),kr(c,e,o)),ae(e)&&i.set(e,c),c}function kr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&kr(t,i,n,!0),s&&s.forEach(o=>kr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=If[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const If={data:lo,props:Dt,emits:Dt,methods:Dt,computed:Dt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Dt,directives:Dt,watch:Sf,provide:lo,inject:Tf};function lo(t,e){return e?t?function(){return Ee(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Tf(t,e){return Dt(js(t),js(e))}function js(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Dt(t,e){return t?Ee(Ee(Object.create(null),t),e):e}function Sf(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function Rf(t,e,n,r=!1){const s={},i={};Cr(i,Xr,1),t.propsDefaults=Object.create(null),uc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Af(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(zr(t.emitsOptions,p))continue;const m=e[p];if(c)if(J(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const g=an(p);s[g]=Ws(c,a,g,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{uc(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!J(e,d)&&((u=pn(d))===d||!J(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Ws(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!J(e,d))&&(delete i[d],l=!0)}l&&lt(t,"set","$attrs")}function uc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mr(c))continue;const l=e[c];let u;s&&J(s,u=an(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:zr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||oe;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ws(s,c,d,l[d],t,!J(l,d))}}return o}function Ws(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ln(s),r=l[n]=c.call(null,e),Wt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===pn(n))&&(r=!0))}return r}function fc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=d=>{c=!0;const[p,m]=fc(d,e,!0);Ee(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ae(t)&&r.set(t,Zt),Zt;if($(i))for(let u=0;u<i.length;u++){const d=an(i[u]);uo(d)&&(o[d]=oe)}else if(i)for(const u in i){const d=an(u);if(uo(d)){const p=i[u],m=o[d]=$(p)||W(p)?{type:p}:Object.assign({},p);if(m){const g=po(Boolean,m.type),v=po(String,m.type);m[0]=g>-1,m[1]=v<0||g<v,(g>-1||J(m,"default"))&&a.push(d)}}}const l=[o,a];return ae(t)&&r.set(t,l),l}function uo(t){return t[0]!=="$"}function fo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ho(t,e){return fo(t)===fo(e)}function po(t,e){return $(e)?e.findIndex(n=>ho(n,t)):W(e)&&ho(e,t)?0:-1}const dc=t=>t[0]==="_"||t==="$stable",Si=t=>$(t)?t.map(Je):[Je(t)],Cf=(t,e,n)=>{if(e._n)return e;const r=Yu((...s)=>Si(e(...s)),n);return r._c=!1,r},hc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dc(s))continue;const i=t[s];if(W(i))e[s]=Cf(s,i,r);else if(i!=null){const o=Si(i);e[s]=()=>o}}},pc=(t,e)=>{const n=Si(e);t.slots.default=()=>n},Of=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Cr(e,"_",n)):hc(e,t.slots={})}else t.slots={},e&&pc(t,e);Cr(t.slots,Xr,1)},Pf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ee(s,e),!n&&a===1&&delete s._):(i=!e.$stable,hc(e,s)),o=e}else e&&(pc(t,e),o={default:1});if(i)for(const a in s)!dc(a)&&!(a in o)&&delete s[a]};function mc(){return{app:null,config:{isNativeTag:nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kf=0;function Nf(t,e){return function(r,s=null){W(r)||(r=Object.assign({},r)),s!=null&&!ae(s)&&(s=null);const i=mc(),o=new Set;let a=!1;const c=i.app={_uid:kf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=ve(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,Qr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Vs(t,e,n,r,s=!1){if($(t)){t.forEach((p,m)=>Vs(p,e&&($(e)?e[m]:e),n,r,s));return}if(yr(r)&&!s)return;const i=r.shapeFlag&4?Qr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(he(l)?(u[l]=null,J(d,l)&&(d[l]=null)):be(l)&&(l.value=null)),W(c))Tt(c,a,12,[o,u]);else{const p=he(c),m=be(c);if(p||m){const g=()=>{if(t.f){const v=p?J(d,c)?d[c]:u[c]:c.value;s?$(v)&&di(v,i):$(v)?v.includes(i)||v.push(i):p?(u[c]=[i],J(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,J(d,c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Se(g,n)):g()}}}const Se=nf;function xf(t){return Df(t)}function Df(t,e){const n=cu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=We,insertStaticContent:g}=t,v=(f,h,_,b=null,w=null,S=null,O=!1,T=null,R=!!h.dynamicChildren)=>{if(f===h)return;f&&!Ft(f,h)&&(b=C(f),Te(f,w,S,!0),f=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:I,ref:M,shapeFlag:N}=h;switch(I){case Yr:x(f,h,_,b);break;case Ve:A(f,h,_,b);break;case hs:f==null&&D(h,_,b,O);break;case Pe:_e(f,h,_,b,w,S,O,T,R);break;default:N&1?ee(f,h,_,b,w,S,O,T,R):N&6?Le(f,h,_,b,w,S,O,T,R):(N&64||N&128)&&I.process(f,h,_,b,w,S,O,T,R,q)}M!=null&&w&&Vs(M,f&&f.ref,S,h||f,!h)},x=(f,h,_,b)=>{if(f==null)r(h.el=a(h.children),_,b);else{const w=h.el=f.el;h.children!==f.children&&l(w,h.children)}},A=(f,h,_,b)=>{f==null?r(h.el=c(h.children||""),_,b):h.el=f.el},D=(f,h,_,b)=>{[f.el,f.anchor]=g(f.children,h,_,b,f.el,f.anchor)},k=({el:f,anchor:h},_,b)=>{let w;for(;f&&f!==h;)w=p(f),r(f,_,b),f=w;r(h,_,b)},V=({el:f,anchor:h})=>{let _;for(;f&&f!==h;)_=p(f),s(f),f=_;s(h)},ee=(f,h,_,b,w,S,O,T,R)=>{O=O||h.type==="svg",f==null?le(h,_,b,w,S,O,T,R):ie(f,h,w,S,O,T,R)},le=(f,h,_,b,w,S,O,T)=>{let R,I;const{type:M,props:N,shapeFlag:U,transition:B,dirs:K}=f;if(R=f.el=o(f.type,S,N&&N.is,N),U&8?u(R,f.children):U&16&&H(f.children,R,null,b,w,S&&M!=="foreignObject",O,T),K&&Nt(f,null,b,"created"),me(R,f,f.scopeId,O,b),N){for(const Z in N)Z!=="value"&&!mr(Z)&&i(R,Z,null,N[Z],S,f.children,b,w,P);"value"in N&&i(R,"value",null,N.value),(I=N.onVnodeBeforeMount)&&qe(I,b,f)}K&&Nt(f,null,b,"beforeMount");const re=(!w||w&&!w.pendingBranch)&&B&&!B.persisted;re&&B.beforeEnter(R),r(R,h,_),((I=N&&N.onVnodeMounted)||re||K)&&Se(()=>{I&&qe(I,b,f),re&&B.enter(R),K&&Nt(f,null,b,"mounted")},w)},me=(f,h,_,b,w)=>{if(_&&m(f,_),b)for(let S=0;S<b.length;S++)m(f,b[S]);if(w){let S=w.subTree;if(h===S){const O=w.vnode;me(f,O,O.scopeId,O.slotScopeIds,w.parent)}}},H=(f,h,_,b,w,S,O,T,R=0)=>{for(let I=R;I<f.length;I++){const M=f[I]=T?yt(f[I]):Je(f[I]);v(null,M,h,_,b,w,S,O,T)}},ie=(f,h,_,b,w,S,O)=>{const T=h.el=f.el;let{patchFlag:R,dynamicChildren:I,dirs:M}=h;R|=f.patchFlag&16;const N=f.props||oe,U=h.props||oe;let B;_&&xt(_,!1),(B=U.onVnodeBeforeUpdate)&&qe(B,_,h,f),M&&Nt(h,f,_,"beforeUpdate"),_&&xt(_,!0);const K=w&&h.type!=="foreignObject";if(I?te(f.dynamicChildren,I,T,_,b,K,S):O||Q(f,h,T,null,_,b,K,S,!1),R>0){if(R&16)ge(T,h,N,U,_,b,w);else if(R&2&&N.class!==U.class&&i(T,"class",null,U.class,w),R&4&&i(T,"style",N.style,U.style,w),R&8){const re=h.dynamicProps;for(let Z=0;Z<re.length;Z++){const fe=re[Z],Fe=N[fe],Gt=U[fe];(Gt!==Fe||fe==="value")&&i(T,fe,Fe,Gt,w,f.children,_,b,P)}}R&1&&f.children!==h.children&&u(T,h.children)}else!O&&I==null&&ge(T,h,N,U,_,b,w);((B=U.onVnodeUpdated)||M)&&Se(()=>{B&&qe(B,_,h,f),M&&Nt(h,f,_,"updated")},b)},te=(f,h,_,b,w,S,O)=>{for(let T=0;T<h.length;T++){const R=f[T],I=h[T],M=R.el&&(R.type===Pe||!Ft(R,I)||R.shapeFlag&70)?d(R.el):_;v(R,I,M,null,b,w,S,O,!0)}},ge=(f,h,_,b,w,S,O)=>{if(_!==b){if(_!==oe)for(const T in _)!mr(T)&&!(T in b)&&i(f,T,_[T],null,O,h.children,w,S,P);for(const T in b){if(mr(T))continue;const R=b[T],I=_[T];R!==I&&T!=="value"&&i(f,T,I,R,O,h.children,w,S,P)}"value"in b&&i(f,"value",_.value,b.value)}},_e=(f,h,_,b,w,S,O,T,R)=>{const I=h.el=f?f.el:a(""),M=h.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:B}=h;B&&(T=T?T.concat(B):B),f==null?(r(I,_,b),r(M,_,b),H(h.children,_,M,w,S,O,T,R)):N>0&&N&64&&U&&f.dynamicChildren?(te(f.dynamicChildren,U,_,w,S,O,T),(h.key!=null||w&&h===w.subTree)&&gc(f,h,!0)):Q(f,h,_,M,w,S,O,T,R)},Le=(f,h,_,b,w,S,O,T,R)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?w.ctx.activate(h,_,b,O,R):et(h,_,b,w,S,O,R):In(f,h,R)},et=(f,h,_,b,w,S,O)=>{const T=f.component=Vf(f,b,w);if(qr(f)&&(T.ctx.renderer=q),Kf(T),T.asyncDep){if(w&&w.registerDep(T,ue),!f.el){const R=T.subTree=ve(Ve);A(null,R,h,_)}return}ue(T,f,h,_,w,S,O)},In=(f,h,_)=>{const b=h.component=f.component;if(Zu(f,h,_))if(b.asyncDep&&!b.asyncResolved){ne(b,h,_);return}else b.next=h,Ku(b.update),b.update();else h.el=f.el,b.vnode=h},ue=(f,h,_,b,w,S,O)=>{const T=()=>{if(f.isMounted){let{next:M,bu:N,u:U,parent:B,vnode:K}=f,re=M,Z;xt(f,!1),M?(M.el=K.el,ne(f,M,O)):M=K,N&&gr(N),(Z=M.props&&M.props.onVnodeBeforeUpdate)&&qe(Z,B,M,K),xt(f,!0);const fe=us(f),Fe=f.subTree;f.subTree=fe,v(Fe,fe,d(Fe.el),C(Fe),f,w,S),M.el=fe.el,re===null&&ef(f,fe.el),U&&Se(U,w),(Z=M.props&&M.props.onVnodeUpdated)&&Se(()=>qe(Z,B,M,K),w)}else{let M;const{el:N,props:U}=h,{bm:B,m:K,parent:re}=f,Z=yr(h);if(xt(f,!1),B&&gr(B),!Z&&(M=U&&U.onVnodeBeforeMount)&&qe(M,re,h),xt(f,!0),N&&z){const fe=()=>{f.subTree=us(f),z(N,f.subTree,f,w,null)};Z?h.type.__asyncLoader().then(()=>!f.isUnmounted&&fe()):fe()}else{const fe=f.subTree=us(f);v(null,fe,_,b,f,w,S),h.el=fe.el}if(K&&Se(K,w),!Z&&(M=U&&U.onVnodeMounted)){const fe=h;Se(()=>qe(M,re,fe),w)}(h.shapeFlag&256||re&&yr(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&Se(f.a,w),f.isMounted=!0,h=_=b=null}},R=f.effect=new gi(T,()=>Ii(I),f.scope),I=f.update=()=>R.run();I.id=f.uid,xt(f,!0),I()},ne=(f,h,_)=>{h.component=f;const b=f.vnode.props;f.vnode=h,f.next=null,Af(f,h.props,b,_),Pf(f,h.children,_),mn(),io(),gn()},Q=(f,h,_,b,w,S,O,T,R=!1)=>{const I=f&&f.children,M=f?f.shapeFlag:0,N=h.children,{patchFlag:U,shapeFlag:B}=h;if(U>0){if(U&128){kt(I,N,_,b,w,S,O,T,R);return}else if(U&256){Me(I,N,_,b,w,S,O,T,R);return}}B&8?(M&16&&P(I,w,S),N!==I&&u(_,N)):M&16?B&16?kt(I,N,_,b,w,S,O,T,R):P(I,w,S,!0):(M&8&&u(_,""),B&16&&H(N,_,b,w,S,O,T,R))},Me=(f,h,_,b,w,S,O,T,R)=>{f=f||Zt,h=h||Zt;const I=f.length,M=h.length,N=Math.min(I,M);let U;for(U=0;U<N;U++){const B=h[U]=R?yt(h[U]):Je(h[U]);v(f[U],B,_,null,w,S,O,T,R)}I>M?P(f,w,S,!0,!1,N):H(h,_,b,w,S,O,T,R,N)},kt=(f,h,_,b,w,S,O,T,R)=>{let I=0;const M=h.length;let N=f.length-1,U=M-1;for(;I<=N&&I<=U;){const B=f[I],K=h[I]=R?yt(h[I]):Je(h[I]);if(Ft(B,K))v(B,K,_,null,w,S,O,T,R);else break;I++}for(;I<=N&&I<=U;){const B=f[N],K=h[U]=R?yt(h[U]):Je(h[U]);if(Ft(B,K))v(B,K,_,null,w,S,O,T,R);else break;N--,U--}if(I>N){if(I<=U){const B=U+1,K=B<M?h[B].el:b;for(;I<=U;)v(null,h[I]=R?yt(h[I]):Je(h[I]),_,K,w,S,O,T,R),I++}}else if(I>U)for(;I<=N;)Te(f[I],w,S,!0),I++;else{const B=I,K=I,re=new Map;for(I=K;I<=U;I++){const Ae=h[I]=R?yt(h[I]):Je(h[I]);Ae.key!=null&&re.set(Ae.key,I)}let Z,fe=0;const Fe=U-K+1;let Gt=!1,Ji=0;const Tn=new Array(Fe);for(I=0;I<Fe;I++)Tn[I]=0;for(I=B;I<=N;I++){const Ae=f[I];if(fe>=Fe){Te(Ae,w,S,!0);continue}let Ke;if(Ae.key!=null)Ke=re.get(Ae.key);else for(Z=K;Z<=U;Z++)if(Tn[Z-K]===0&&Ft(Ae,h[Z])){Ke=Z;break}Ke===void 0?Te(Ae,w,S,!0):(Tn[Ke-K]=I+1,Ke>=Ji?Ji=Ke:Gt=!0,v(Ae,h[Ke],_,null,w,S,O,T,R),fe++)}const Gi=Gt?Lf(Tn):Zt;for(Z=Gi.length-1,I=Fe-1;I>=0;I--){const Ae=K+I,Ke=h[Ae],Yi=Ae+1<M?h[Ae+1].el:b;Tn[I]===0?v(null,Ke,_,Yi,w,S,O,T,R):Gt&&(Z<0||I!==Gi[Z]?Ue(Ke,_,Yi,2):Z--)}}},Ue=(f,h,_,b,w=null)=>{const{el:S,type:O,transition:T,children:R,shapeFlag:I}=f;if(I&6){Ue(f.component.subTree,h,_,b);return}if(I&128){f.suspense.move(h,_,b);return}if(I&64){O.move(f,h,_,q);return}if(O===Pe){r(S,h,_);for(let N=0;N<R.length;N++)Ue(R[N],h,_,b);r(f.anchor,h,_);return}if(O===hs){k(f,h,_);return}if(b!==2&&I&1&&T)if(b===0)T.beforeEnter(S),r(S,h,_),Se(()=>T.enter(S),w);else{const{leave:N,delayLeave:U,afterLeave:B}=T,K=()=>r(S,h,_),re=()=>{N(S,()=>{K(),B&&B()})};U?U(S,K,re):re()}else r(S,h,_)},Te=(f,h,_,b=!1,w=!1)=>{const{type:S,props:O,ref:T,children:R,dynamicChildren:I,shapeFlag:M,patchFlag:N,dirs:U}=f;if(T!=null&&Vs(T,null,_,f,!0),M&256){h.ctx.deactivate(f);return}const B=M&1&&U,K=!yr(f);let re;if(K&&(re=O&&O.onVnodeBeforeUnmount)&&qe(re,h,f),M&6)E(f.component,_,b);else{if(M&128){f.suspense.unmount(_,b);return}B&&Nt(f,null,h,"beforeUnmount"),M&64?f.type.remove(f,h,_,w,q,b):I&&(S!==Pe||N>0&&N&64)?P(I,h,_,!1,!0):(S===Pe&&N&384||!w&&M&16)&&P(R,h,_),b&&Jt(f)}(K&&(re=O&&O.onVnodeUnmounted)||B)&&Se(()=>{re&&qe(re,h,f),B&&Nt(f,null,h,"unmounted")},_)},Jt=f=>{const{type:h,el:_,anchor:b,transition:w}=f;if(h===Pe){ar(_,b);return}if(h===hs){V(f);return}const S=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:T}=w,R=()=>O(_,S);T?T(f.el,S,R):R()}else S()},ar=(f,h)=>{let _;for(;f!==h;)_=p(f),s(f),f=_;s(h)},E=(f,h,_)=>{const{bum:b,scope:w,update:S,subTree:O,um:T}=f;b&&gr(b),w.stop(),S&&(S.active=!1,Te(O,f,h,_)),T&&Se(T,h),Se(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},P=(f,h,_,b=!1,w=!1,S=0)=>{for(let O=S;O<f.length;O++)Te(f[O],h,_,b,w)},C=f=>f.shapeFlag&6?C(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),L=(f,h,_)=>{f==null?h._vnode&&Te(h._vnode,null,null,!0):v(h._vnode||null,f,h,null,null,null,_),io(),Qa(),h._vnode=f},q={p:v,um:Te,m:Ue,r:Jt,mt:et,mc:H,pc:Q,pbc:te,n:C,o:t};let ce,z;return e&&([ce,z]=e(q)),{render:L,hydrate:ce,createApp:Nf(L,ce)}}function xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gc(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yt(s[i]),a.el=o.el),n||gc(o,a)),a.type===Yr&&(a.el=o.el)}}function Lf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Mf=t=>t.__isTeleport,Pe=Symbol(void 0),Yr=Symbol(void 0),Ve=Symbol(void 0),hs=Symbol(void 0),xn=[];let He=null;function Ce(t=!1){xn.push(He=t?null:[])}function Uf(){xn.pop(),He=xn[xn.length-1]||null}let Hn=1;function mo(t){Hn+=t}function _c(t){return t.dynamicChildren=Hn>0?He||Zt:null,Uf(),Hn>0&&He&&He.push(t),t}function je(t,e,n,r,s,i){return _c(j(t,e,n,r,s,i,!0))}function yc(t,e,n,r,s){return _c(ve(t,e,n,r,s,!0))}function zs(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return t.type===e.type&&t.key===e.key}const Xr="__vInternal",bc=({key:t})=>t??null,br=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||be(t)||W(t)?{i:Ne,r:t,k:e,f:!!n}:t:null;function j(t,e=null,n=null,r=0,s=null,i=t===Pe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bc(e),ref:e&&br(e),scopeId:Kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return a?(Ri(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),Hn>0&&!o&&He&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&He.push(c),c}const ve=Ff;function Ff(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yf)&&(t=Ve),zs(t)){const a=Ct(t,e,!0);return n&&Ri(a,n),Hn>0&&!i&&He&&(a.shapeFlag&6?He[He.indexOf(t)]=a:He.push(a)),a.patchFlag|=-2,a}if(Yf(t)&&(t=t.__vccOpts),e){e=Bf(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=ui(a)),ae(c)&&(ja(c)&&!$(c)&&(c=Ee({},c)),e.style=li(c))}const o=he(t)?1:tf(t)?128:Mf(t)?64:ae(t)?4:W(t)?2:0;return j(t,e,n,r,s,o,i,!0)}function Bf(t){return t?ja(t)||Xr in t?Ee({},t):t:null}function Ct(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Hf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&bc(a),ref:e&&e.ref?n&&s?$(s)?s.concat(br(e)):[s,br(e)]:br(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ct(t.ssContent),ssFallback:t.ssFallback&&Ct(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function $f(t=" ",e=0){return ve(Yr,null,t,e)}function ps(t="",e=!1){return e?(Ce(),yc(Ve,null,t)):ve(Ve,null,t)}function Je(t){return t==null||typeof t=="boolean"?ve(Ve):$(t)?ve(Pe,null,t.slice()):typeof t=="object"?yt(t):ve(Yr,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ct(t)}function Ri(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ri(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Xr in e)?e._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),r&64?(n=16,e=[$f(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ui([e.class,r.class]));else if(s==="style")e.style=li([e.style,r.style]);else if($r(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qe(t,e,n,r=null){xe(t,e,7,[n,r])}const jf=mc();let Wf=0;function Vf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jf,i={uid:Wf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new lu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fc(r,s),emitsOptions:ec(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gu.bind(null,i),t.ce&&t.ce(i),i}let de=null;const zf=()=>de||Ne,ln=t=>{de=t,t.scope.on()},Wt=()=>{de&&de.scope.off(),de=null};function vc(t){return t.vnode.shapeFlag&4}let jn=!1;function Kf(t,e=!1){jn=e;const{props:n,children:r}=t.vnode,s=vc(t);Rf(t,n,s,e),Of(t,r);const i=s?qf(t,e):void 0;return jn=!1,i}function qf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wa(new Proxy(t.ctx,vf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Gf(t):null;ln(t),mn();const i=Tt(r,t,0,[t.props,s]);if(gn(),Wt(),Aa(i)){if(i.then(Wt,Wt),e)return i.then(o=>{go(t,o,e)}).catch(o=>{Vr(o,t,0)});t.asyncDep=i}else go(t,i,e)}else Ec(t,e)}function go(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=qa(e)),Ec(t,n)}let _o;function Ec(t,e,n){const r=t.type;if(!t.render){if(!e&&_o&&!r.render){const s=r.template||Ti(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ee(Ee({isCustomElement:i,delimiters:a},o),c);r.render=_o(s,l)}}t.render=r.render||We}ln(t),mn(),Ef(t),gn(),Wt()}function Jf(t){return new Proxy(t.attrs,{get(e,n){return Re(t,"get","$attrs"),e[n]}})}function Gf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Jf(t))},slots:t.slots,emit:t.emit,expose:e}}function Qr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qa(Wa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Nn)return Nn[n](t)},has(e,n){return n in e||n in Nn}}))}function Yf(t){return W(t)&&"__vccOpts"in t}const ke=(t,e)=>Wu(t,e,jn);function wc(t,e,n){const r=arguments.length;return r===2?ae(e)&&!$(e)?zs(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zs(n)&&(n=[n]),ve(t,e,n))}const Xf=Symbol(""),Qf=()=>Xe(Xf),Zf="3.2.47",ed="http://www.w3.org/2000/svg",Bt=typeof document<"u"?document:null,yo=Bt&&Bt.createElement("template"),td={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Bt.createElementNS(ed,t):Bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yo.innerHTML=r?`<svg>${t}</svg>`:t;const a=yo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nd(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rd(t,e,n){const r=t.style,s=he(n);if(n&&!s){if(e&&!he(e))for(const i in e)n[i]==null&&Ks(r,i,"");for(const i in n)Ks(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const bo=/\s*!important$/;function Ks(t,e,n){if($(n))n.forEach(r=>Ks(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sd(t,e);bo.test(n)?t.setProperty(pn(r),n.replace(bo,""),"important"):t[r]=n}}const vo=["Webkit","Moz","ms"],ms={};function sd(t,e){const n=ms[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return ms[e]=r;r=Pa(r);for(let s=0;s<vo.length;s++){const i=vo[s]+r;if(i in t)return ms[e]=i}return e}const Eo="http://www.w3.org/1999/xlink";function id(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eo,e.slice(6,e.length)):t.setAttributeNS(Eo,e,n);else{const i=tu(e);n==null||i&&!Ta(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function od(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ta(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Xt(t,e,n,r){t.addEventListener(e,n,r)}function ad(t,e,n,r){t.removeEventListener(e,n,r)}function cd(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=ld(e);if(r){const l=i[e]=dd(r,s);Xt(t,a,l,c)}else o&&(ad(t,a,o,c),i[e]=void 0)}}const wo=/(?:Once|Passive|Capture)$/;function ld(t){let e;if(wo.test(t)){e={};let r;for(;r=t.match(wo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pn(t.slice(2)),e]}let gs=0;const ud=Promise.resolve(),fd=()=>gs||(ud.then(()=>gs=0),gs=Date.now());function dd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(hd(r,n.value),e,5,[r])};return n.value=t,n.attached=fd(),n}function hd(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Io=/^on[a-z]/,pd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?nd(t,r,s):e==="style"?rd(t,n,r):$r(e)?fi(e)||cd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):md(t,e,r,s))?od(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),id(t,e,r,s))};function md(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Io.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Io.test(e)&&he(n)?!1:e in t}const gd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};af.props;const To=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>gr(e,n):e};function _d(t){t.target.composing=!0}function So(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qs={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=To(s);const i=r||s.props&&s.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ks(a)),t._assign(a)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",_d),Xt(t,"compositionend",So),Xt(t,"change",So))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=To(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ks(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yd=Ee({patchProp:pd},td);let Ro;function bd(){return Ro||(Ro=xf(yd))}const vd=(...t)=>{const e=bd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ed(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ed(t){return he(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ic(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const g=l<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Id=function(t){const e=Ic(t);return Tc.encodeByteArray(e,!0)},Sc=function(t){return Id(t).replace(/\./g,"")},Rc=function(t){try{return Tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=()=>Td().__FIREBASE_DEFAULTS__,Rd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ad=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rc(t[1]);return e&&JSON.parse(e)},Ai=()=>{try{return Sd()||Rd()||Ad()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cd=t=>{var e,n;return(n=(e=Ai())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Od=()=>{var t;return(t=Ai())===null||t===void 0?void 0:t.config},Ac=t=>{var e;return(e=Ai())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Nd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dd(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ld(){try{return typeof indexedDB=="object"}catch{return!1}}function Md(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="FirebaseError";class Pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ud,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Fd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,a,r)}}function Fd(t,e){return t.replace(Bd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bd=/\{\$([^}]+)}/g;function $d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ao(i)&&Ao(o)){if(!Nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ao(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function On(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hd(t,e){const n=new jd(t,e);return n.subscribe.bind(n)}class jd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_s),s.error===void 0&&(s.error=_s),s.complete===void 0&&(s.complete=_s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _s(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kd(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zd(t){return t===Lt?void 0:t}function Kd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Jd={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Gd=se.INFO,Yd={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Xd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Yd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=Gd,this._logHandler=Xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Qd=(t,e)=>e.some(n=>t instanceof n);let Co,Oo;function Zd(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eh(){return Oo||(Oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oc=new WeakMap,Js=new WeakMap,Pc=new WeakMap,ys=new WeakMap,Ci=new WeakMap;function th(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oc.set(n,t)}).catch(()=>{}),Ci.set(e,t),e}function nh(t){if(Js.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Js.set(t,e)}let Gs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Js.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rh(t){Gs=t(Gs)}function sh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bs(this),e,...n);return Pc.set(r,e.sort?e.sort():[e]),St(r)}:eh().includes(t)?function(...e){return t.apply(bs(this),e),St(Oc.get(this))}:function(...e){return St(t.apply(bs(this),e))}}function ih(t){return typeof t=="function"?sh(t):(t instanceof IDBTransaction&&nh(t),Qd(t,Zd())?new Proxy(t,Gs):t)}function St(t){if(t instanceof IDBRequest)return th(t);if(ys.has(t))return ys.get(t);const e=ih(t);return e!==t&&(ys.set(t,e),Ci.set(e,t)),e}const bs=t=>Ci.get(t);function oh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ah=["get","getKey","getAll","getAllKeys","count"],ch=["put","add","delete","clear"],vs=new Map;function Po(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vs.get(e))return vs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ch.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ah.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return vs.set(e,i),i}rh(t=>({...t,get:(e,n,r)=>Po(e,n)||t.get(e,n,r),has:(e,n)=>!!Po(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ys="@firebase/app",ko="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Cc("@firebase/app"),fh="@firebase/app-compat",dh="@firebase/analytics-compat",hh="@firebase/analytics",ph="@firebase/app-check-compat",mh="@firebase/app-check",gh="@firebase/auth",_h="@firebase/auth-compat",yh="@firebase/database",bh="@firebase/database-compat",vh="@firebase/functions",Eh="@firebase/functions-compat",wh="@firebase/installations",Ih="@firebase/installations-compat",Th="@firebase/messaging",Sh="@firebase/messaging-compat",Rh="@firebase/performance",Ah="@firebase/performance-compat",Ch="@firebase/remote-config",Oh="@firebase/remote-config-compat",Ph="@firebase/storage",kh="@firebase/storage-compat",Nh="@firebase/firestore",xh="@firebase/firestore-compat",Dh="firebase",Lh="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="[DEFAULT]",Mh={[Ys]:"fire-core",[fh]:"fire-core-compat",[hh]:"fire-analytics",[dh]:"fire-analytics-compat",[mh]:"fire-app-check",[ph]:"fire-app-check-compat",[gh]:"fire-auth",[_h]:"fire-auth-compat",[yh]:"fire-rtdb",[bh]:"fire-rtdb-compat",[vh]:"fire-fn",[Eh]:"fire-fn-compat",[wh]:"fire-iid",[Ih]:"fire-iid-compat",[Th]:"fire-fcm",[Sh]:"fire-fcm-compat",[Rh]:"fire-perf",[Ah]:"fire-perf-compat",[Ch]:"fire-rc",[Oh]:"fire-rc-compat",[Ph]:"fire-gcs",[kh]:"fire-gcs-compat",[Nh]:"fire-fst",[xh]:"fire-fst-compat","fire-js":"fire-js",[Dh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Map,Qs=new Map;function Uh(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Qs.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Qs.set(e,t);for(const n of xr.values())Uh(n,t);return!0}function kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new Xn("app","Firebase",Fh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=Lh;function Nc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(n||(n=Od()),!n)throw Rt.create("no-options");const i=xr.get(s);if(i){if(Nr(n,i.options)&&Nr(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const o=new qd(s);for(const c of Qs.values())o.addComponent(c);const a=new Bh(n,r,o);return xr.set(s,a),a}function $h(t=Xs){const e=xr.get(t);if(!e&&t===Xs)return Nc();if(!e)throw Rt.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=Mh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Wn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="firebase-heartbeat-database",jh=1,Vn="firebase-heartbeat-store";let Es=null;function xc(){return Es||(Es=oh(Hh,jh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vn)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),Es}async function Wh(t){try{return(await xc()).transaction(Vn).objectStore(Vn).get(Dc(t))}catch(e){if(e instanceof Pt)zt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function No(t,e){try{const r=(await xc()).transaction(Vn,"readwrite");return await r.objectStore(Vn).put(e,Dc(t)),r.done}catch(n){if(n instanceof Pt)zt.warn(n.message);else{const r=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function Dc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=1024,zh=30*24*60*60*1e3;class Kh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=zh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xo(),{heartbeatsToSend:n,unsentEntries:r}=qh(this._heartbeatsCache.heartbeats),s=Sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xo(){return new Date().toISOString().substring(0,10)}function qh(t,e=Vh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Do(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Do(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ld()?Md().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Wh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return No(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return No(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Do(t){return Sc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){Wn(new un("platform-logger",e=>new lh(e),"PRIVATE")),Wn(new un("heartbeat",e=>new Kh(e),"PRIVATE")),rn(Ys,ko,t),rn(Ys,ko,"esm2017"),rn("fire-js","")}Gh("");var Yh="firebase",Xh="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(Yh,Xh,"app");/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof window<"u";function Qh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function ws(t,e){const n={};for(const r in e){const s=e[r];n[r]=ze(s)?s.map(t):t(s)}return n}const Dn=()=>{},ze=Array.isArray,Zh=/\/$/,ep=t=>t.replace(Zh,"");function Is(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sp(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function tp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function np(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fn(e.matched[r],n.matched[s])&&Lc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rp(t[n],e[n]))return!1;return!0}function rp(t,e){return ze(t)?Mo(t,e):ze(e)?Mo(e,t):t===e}function Mo(t,e){return ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Ln;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ln||(Ln={}));function ip(t){if(!t)if(Qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ep(t)}const op=/^[^#]+#/;function ap(t,e){return t.replace(op,"#")+e}function cp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const es=()=>({left:window.pageXOffset,top:window.pageYOffset});function lp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Uo(t,e){return(history.state?history.state.position-e:-1)+t}const Zs=new Map;function up(t,e){Zs.set(t,e)}function fp(t){const e=Zs.get(t);return Zs.delete(t),e}let dp=()=>location.protocol+"//"+location.host;function Mc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Lo(c,"")}return Lo(n,t)+r+s}function hp(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Mc(t,location),g=n.value,v=e.value;let x=0;if(p){if(n.value=m,e.value=p,o&&o===g){o=null;return}x=v?p.position-v.position:0}else r(m);s.forEach(A=>{A(n.value,g,{delta:x,type:zn.pop,direction:x?x>0?Ln.forward:Ln.back:Ln.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:es()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function Fo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?es():null}}function pp(t){const{history:e,location:n}=window,r={value:Mc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:dp()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=X({},e.state,Fo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=X({},s.value,e.state,{forward:c,scroll:es()});i(u.current,u,!0);const d=X({},Fo(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function mp(t){t=ip(t);const e=pp(t),n=hp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:ap.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gp(t){return typeof t=="string"||t&&typeof t=="object"}function Uc(t){return typeof t=="string"||typeof t=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fc=Symbol("");var Bo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bo||(Bo={}));function dn(t,e){return X(new Error,{type:t,[Fc]:!0},e)}function tt(t,e){return t instanceof Error&&Fc in t&&(e==null||!!(t.type&e))}const $o="[^/]+?",_p={sensitive:!1,strict:!1,start:!0,end:!0},yp=/[.+*?^${}()[\]/\\]/g;function bp(t,e){const n=X({},_p,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(yp,"\\$&"),m+=40;else if(p.type===1){const{value:g,repeatable:v,optional:x,regexp:A}=p;i.push({name:g,repeatable:v,optional:x});const D=A||$o;if(D!==$o){m+=10;try{new RegExp(`(${D})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${g}" (${D}): `+V.message)}}let k=v?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(k=x&&l.length<2?`(?:/${k})`:"/"+k),x&&(k+="?"),s+=k,m+=20,x&&(m+=-8),v&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",g=i[p-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:v,optional:x}=m,A=g in l?l[g]:"";if(ze(A)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const D=ze(A)?A.join("/"):A;if(!D)if(x)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function vp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ep(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ho(r))return 1;if(Ho(s))return-1}return s.length-r.length}function Ho(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wp={type:0,value:""},Ip=/[a-zA-Z0-9_]/;function Tp(t){if(!t)return[[]];if(t==="/")return[[wp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ip.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Sp(t,e,n){const r=bp(Tp(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Rp(t,e){const n=[],r=new Map;e=Vo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,p){const m=!p,g=Ap(u);g.aliasOf=p&&p.record;const v=Vo(e,u),x=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of k)x.push(X({},g,{components:p?p.record.components:g.components,path:V,aliasOf:p?p.record:g}))}let A,D;for(const k of x){const{path:V}=k;if(d&&V[0]!=="/"){const ee=d.record.path,le=ee[ee.length-1]==="/"?"":"/";k.path=d.record.path+(V&&le+V)}if(A=Sp(k,d,v),p?p.alias.push(A):(D=D||A,D!==A&&D.alias.push(A),m&&u.name&&!Wo(A)&&o(u.name)),g.children){const ee=g.children;for(let le=0;le<ee.length;le++)i(ee[le],A,p&&p.children[le])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return D?()=>{o(D)}:Dn}function o(u){if(Uc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Ep(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Bc(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Wo(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},g,v;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw dn(1,{location:u});v=p.record.name,m=X(jo(d.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&jo(u.params,p.keys.map(D=>D.name))),g=p.stringify(m)}else if("path"in u)g=u.path,p=n.find(D=>D.re.test(g)),p&&(m=p.parse(g),v=p.record.name);else{if(p=d.name?r.get(d.name):n.find(D=>D.re.test(d.path)),!p)throw dn(1,{location:u,currentLocation:d});v=p.record.name,m=X({},d.params,u.params),g=p.stringify(m)}const x=[];let A=p;for(;A;)x.unshift(A.record),A=A.parent;return{name:v,path:g,params:m,matched:x,meta:Op(x)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function jo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ap(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Cp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Cp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Wo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Op(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Vo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Bc(t,e){return e.children.some(n=>n===t||Bc(t,n))}const $c=/#/g,Pp=/&/g,kp=/\//g,Np=/=/g,xp=/\?/g,Hc=/\+/g,Dp=/%5B/g,Lp=/%5D/g,jc=/%5E/g,Mp=/%60/g,Wc=/%7B/g,Up=/%7C/g,Vc=/%7D/g,Fp=/%20/g;function Oi(t){return encodeURI(""+t).replace(Up,"|").replace(Dp,"[").replace(Lp,"]")}function Bp(t){return Oi(t).replace(Wc,"{").replace(Vc,"}").replace(jc,"^")}function ei(t){return Oi(t).replace(Hc,"%2B").replace(Fp,"+").replace($c,"%23").replace(Pp,"%26").replace(Mp,"`").replace(Wc,"{").replace(Vc,"}").replace(jc,"^")}function $p(t){return ei(t).replace(Np,"%3D")}function Hp(t){return Oi(t).replace($c,"%23").replace(xp,"%3F")}function jp(t){return t==null?"":Hp(t).replace(kp,"%2F")}function Dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Wp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Hc," "),o=i.indexOf("="),a=Dr(o<0?i:i.slice(0,o)),c=o<0?null:Dr(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function zo(t){let e="";for(let n in t){const r=t[n];if(n=$p(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&ei(i)):[r&&ei(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zp=Symbol(""),Ko=Symbol(""),ts=Symbol(""),zc=Symbol(""),ti=Symbol("");function Sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(dn(4,{from:n,to:e})):d instanceof Error?a(d):gp(d)?a(dn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Ts(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Kp(a)){const l=(a.__vccOpts||a)[e];l&&s.push(bt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Qh(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&bt(p,n,r,i,o)()}))}}return s}function Kp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qo(t){const e=Xe(ts),n=Xe(zc),r=ke(()=>e.resolve(at(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(fn.bind(null,u));if(p>-1)return p;const m=Jo(c[l-2]);return l>1&&Jo(u)===m&&d[d.length-1].path!==m?d.findIndex(fn.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&Yp(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Lc(n.params,r.value.params));function a(c={}){return Gp(c)?e[at(t.replace)?"replace":"push"](at(t.to)).catch(Dn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const qp=ic({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qo,setup(t,{slots:e}){const n=Yn(qo(t)),{options:r}=Xe(ts),s=ke(()=>({[Go(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Go(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Jp=qp;function Gp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Go=(t,e,n)=>t??e??n,Xp=ic({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xe(ti),s=ke(()=>t.route||r.value),i=Xe(Ko,0),o=ke(()=>{let l=at(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);_r(Ko,ke(()=>o.value+1)),_r(zp,a),_r(ti,s);const c=st();return kn(()=>[c.value,a.value,t.name],([l,u,d],[p,m,g])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!fn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return Yo(n.default,{Component:p,route:l});const m=d.props[u],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,x=wc(p,X({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Yo(n.default,{Component:x,route:l})||x}}});function Yo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kc=Xp;function Qp(t){const e=Rp(t.routes,t),n=t.parseQuery||Wp,r=t.stringifyQuery||zo,s=t.history,i=Sn(),o=Sn(),a=Sn(),c=Bu(mt);let l=mt;Qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ws.bind(null,E=>""+E),d=ws.bind(null,jp),p=ws.bind(null,Dr);function m(E,P){let C,L;return Uc(E)?(C=e.getRecordMatcher(E),L=P):L=E,e.addRoute(L,C)}function g(E){const P=e.getRecordMatcher(E);P&&e.removeRoute(P)}function v(){return e.getRoutes().map(E=>E.record)}function x(E){return!!e.getRecordMatcher(E)}function A(E,P){if(P=X({},P||c.value),typeof E=="string"){const f=Is(n,E,P.path),h=e.resolve({path:f.path},P),_=s.createHref(f.fullPath);return X(f,h,{params:p(h.params),hash:Dr(f.hash),redirectedFrom:void 0,href:_})}let C;if("path"in E)C=X({},E,{path:Is(n,E.path,P.path).path});else{const f=X({},E.params);for(const h in f)f[h]==null&&delete f[h];C=X({},E,{params:d(E.params)}),P.params=d(P.params)}const L=e.resolve(C,P),q=E.hash||"";L.params=u(p(L.params));const ce=tp(r,X({},E,{hash:Bp(q),path:L.path})),z=s.createHref(ce);return X({fullPath:ce,hash:q,query:r===zo?Vp(E.query):E.query||{}},L,{redirectedFrom:void 0,href:z})}function D(E){return typeof E=="string"?Is(n,E,c.value.path):X({},E)}function k(E,P){if(l!==E)return dn(8,{from:P,to:E})}function V(E){return me(E)}function ee(E){return V(X(D(E),{replace:!0}))}function le(E){const P=E.matched[E.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let L=typeof C=="function"?C(E):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=D(L):{path:L},L.params={}),X({query:E.query,hash:E.hash,params:"path"in L?{}:E.params},L)}}function me(E,P){const C=l=A(E),L=c.value,q=E.state,ce=E.force,z=E.replace===!0,f=le(C);if(f)return me(X(D(f),{state:typeof f=="object"?X({},q,f.state):q,force:ce,replace:z}),P||C);const h=C;h.redirectedFrom=P;let _;return!ce&&np(r,L,C)&&(_=dn(16,{to:h,from:L}),kt(L,L,!0,!1)),(_?Promise.resolve(_):ie(h,L)).catch(b=>tt(b)?tt(b,2)?b:Me(b):ne(b,h,L)).then(b=>{if(b){if(tt(b,2))return me(X({replace:z},D(b.to),{state:typeof b.to=="object"?X({},q,b.to.state):q,force:ce}),P||h)}else b=ge(h,L,!0,z,q);return te(h,L,b),b})}function H(E,P){const C=k(E,P);return C?Promise.reject(C):Promise.resolve()}function ie(E,P){let C;const[L,q,ce]=Zp(E,P);C=Ts(L.reverse(),"beforeRouteLeave",E,P);for(const f of L)f.leaveGuards.forEach(h=>{C.push(bt(h,E,P))});const z=H.bind(null,E,P);return C.push(z),Yt(C).then(()=>{C=[];for(const f of i.list())C.push(bt(f,E,P));return C.push(z),Yt(C)}).then(()=>{C=Ts(q,"beforeRouteUpdate",E,P);for(const f of q)f.updateGuards.forEach(h=>{C.push(bt(h,E,P))});return C.push(z),Yt(C)}).then(()=>{C=[];for(const f of E.matched)if(f.beforeEnter&&!P.matched.includes(f))if(ze(f.beforeEnter))for(const h of f.beforeEnter)C.push(bt(h,E,P));else C.push(bt(f.beforeEnter,E,P));return C.push(z),Yt(C)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),C=Ts(ce,"beforeRouteEnter",E,P),C.push(z),Yt(C))).then(()=>{C=[];for(const f of o.list())C.push(bt(f,E,P));return C.push(z),Yt(C)}).catch(f=>tt(f,8)?f:Promise.reject(f))}function te(E,P,C){for(const L of a.list())L(E,P,C)}function ge(E,P,C,L,q){const ce=k(E,P);if(ce)return ce;const z=P===mt,f=Qt?history.state:{};C&&(L||z?s.replace(E.fullPath,X({scroll:z&&f&&f.scroll},q)):s.push(E.fullPath,q)),c.value=E,kt(E,P,C,z),Me()}let _e;function Le(){_e||(_e=s.listen((E,P,C)=>{if(!ar.listening)return;const L=A(E),q=le(L);if(q){me(X(q,{replace:!0}),L).catch(Dn);return}l=L;const ce=c.value;Qt&&up(Uo(ce.fullPath,C.delta),es()),ie(L,ce).catch(z=>tt(z,12)?z:tt(z,2)?(me(z.to,L).then(f=>{tt(f,20)&&!C.delta&&C.type===zn.pop&&s.go(-1,!1)}).catch(Dn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),ne(z,L,ce))).then(z=>{z=z||ge(L,ce,!1),z&&(C.delta&&!tt(z,8)?s.go(-C.delta,!1):C.type===zn.pop&&tt(z,20)&&s.go(-1,!1)),te(L,ce,z)}).catch(Dn)}))}let et=Sn(),In=Sn(),ue;function ne(E,P,C){Me(E);const L=In.list();return L.length?L.forEach(q=>q(E,P,C)):console.error(E),Promise.reject(E)}function Q(){return ue&&c.value!==mt?Promise.resolve():new Promise((E,P)=>{et.add([E,P])})}function Me(E){return ue||(ue=!E,Le(),et.list().forEach(([P,C])=>E?C(E):P()),et.reset()),E}function kt(E,P,C,L){const{scrollBehavior:q}=t;if(!Qt||!q)return Promise.resolve();const ce=!C&&fp(Uo(E.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Ya().then(()=>q(E,P,ce)).then(z=>z&&lp(z)).catch(z=>ne(z,E,P))}const Ue=E=>s.go(E);let Te;const Jt=new Set,ar={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:x,getRoutes:v,resolve:A,options:t,push:V,replace:ee,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:In.add,isReady:Q,install(E){const P=this;E.component("RouterLink",Jp),E.component("RouterView",Kc),E.config.globalProperties.$router=P,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>at(c)}),Qt&&!Te&&c.value===mt&&(Te=!0,V(s.location).catch(q=>{}));const C={};for(const q in mt)C[q]=ke(()=>c.value[q]);E.provide(ts,P),E.provide(zc,Yn(C)),E.provide(ti,c);const L=E.unmount;Jt.add(E),E.unmount=function(){Jt.delete(E),Jt.size<1&&(l=mt,_e&&_e(),_e=null,c.value=mt,Te=!1,ue=!1),L()}}};return ar}function Yt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Zp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>fn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>fn(l,c))||s.push(c))}return[n,r,s]}function Pi(){return Xe(ts)}const bn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qc=t=>(_n("data-v-41e2d435"),t=t(),yn(),t),em=qc(()=>j("h1",null,"Welcome!",-1)),tm=qc(()=>j("p",null,"to get started, sing up with your account or create a new one...",-1)),nm={class:"btn-container"},rm={__name:"Home",setup(t){const e=Pi();return(n,r)=>(Ce(),je("main",null,[em,tm,j("div",nm,[j("button",{class:"btn btn-success",onClick:r[0]||(r[0]=s=>at(e).push("/login"))},"Login"),j("button",{class:"btn btn-primary",onClick:r[1]||(r[1]=s=>at(e).push("/register"))},"Register")])]))}},sm=bn(rm,[["__scopeId","data-v-41e2d435"]]),im={__name:"App",setup(t){return(e,n)=>(Ce(),yc(at(Kc)))}};function ki(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const om=Jc,Gc=new Xn("auth","Firebase",Jc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Cc("@firebase/auth");function vr(t,...e){Xo.logLevel<=se.ERROR&&Xo.error(`Auth (${Zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,...e){throw Ni(t,...e)}function Qe(t,...e){return Ni(t,...e)}function Yc(t,e,n){const r=Object.assign(Object.assign({},om()),{[e]:n});return new Xn("auth","Firebase",r).create(e,{appName:t.name})}function am(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&De(t,"argument-error"),Yc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ni(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gc.create(t,...e)}function F(t,e,...n){if(!t)throw Ni(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vr(e),new Error(e)}function ut(t,e){t||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Map;function ot(t){ut(t instanceof Function,"Expected a class definition");let e=Qo.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t,e){const n=kc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Nr(i,e??{}))return s;De(s,"already-initialized")}return n.initialize({options:e})}function lm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function um(){return Zo()==="http:"||Zo()==="https:"}function Zo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(um()||Nd()||"connection"in navigator)?navigator.onLine:!0}function dm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=kd()||xd()}get(){return fm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new Zn(3e4,6e4);function er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,s={}){return Qc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Qn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Xc.fetch()(Zc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Qc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hm),e);try{const s=new mm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yc(t,u,l);De(t,u)}}catch(s){if(s instanceof Pt)throw s;De(t,"network-request-failed")}}async function nr(t,e,n,r,s={}){const i=await tr(t,e,n,r,s);return"mfaPendingCredential"in i&&De(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xi(t.config,s):`${t.config.apiScheme}://${s}`}class mm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),pm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function _m(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ym(t,e=!1){const n=dt(t),r=await n.getIdToken(e),s=Di(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(Ss(s.auth_time)),issuedAtTime:Mn(Ss(s.iat)),expirationTime:Mn(Ss(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ss(t){return Number(t)*1e3}function Di(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rc(n);return s?JSON.parse(s):(vr("Failed to decode base64 JWT payload"),null)}catch(s){return vr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bm(t){const e=Di(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pt&&vm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Kn(t,_m(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tm(i.providerUserInfo):[],a=Im(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new el(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function wm(t){const e=dt(t);await Lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Im(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tm(t){return t.map(e=>{var{providerId:n}=e,r=ki(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(t,e){const n=await Qc(t,{},async()=>{const r=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Sm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Em(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new el(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ym(this,e)}reload(){return wm(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kn(this,gm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:V,isAnonymous:ee,providerData:le,stsTokenManager:me}=n;F(k&&me,e,"internal-error");const H=qn.fromJSON(this.name,me);F(typeof k=="string",e,"internal-error"),gt(d,e.name),gt(p,e.name),F(typeof V=="boolean",e,"internal-error"),F(typeof ee=="boolean",e,"internal-error"),gt(m,e.name),gt(g,e.name),gt(v,e.name),gt(x,e.name),gt(A,e.name),gt(D,e.name);const ie=new Vt({uid:k,auth:e,email:p,emailVerified:V,displayName:d,isAnonymous:ee,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:H,createdAt:A,lastLoginAt:D});return le&&Array.isArray(le)&&(ie.providerData=le.map(te=>Object.assign({},te))),x&&(ie._redirectEventId=x),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new qn;s.updateFromServerResponse(n);const i=new Vt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tl.type="NONE";const ea=tl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Er(this.userKey,s.apiKey,i),this.fullPersistenceKey=Er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(ot(ea),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ot(ea);const o=Er(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Vt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ol(e))return"Blackberry";if(al(e))return"Webos";if(Li(e))return"Safari";if((e.includes("chrome/")||rl(e))&&!e.includes("edge/"))return"Chrome";if(il(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nl(t=we()){return/firefox\//i.test(t)}function Li(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rl(t=we()){return/crios\//i.test(t)}function sl(t=we()){return/iemobile/i.test(t)}function il(t=we()){return/android/i.test(t)}function ol(t=we()){return/blackberry/i.test(t)}function al(t=we()){return/webos/i.test(t)}function ns(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rm(t=we()){var e;return ns(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Am(){return Dd()&&document.documentMode===10}function cl(t=we()){return ns(t)||il(t)||al(t)||ol(t)||/windows phone/i.test(t)||sl(t)}function Cm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e=[]){let n;switch(t){case"Browser":n=ta(we());break;case"Worker":n=`${ta(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new na(this),this.idTokenSubscription=new na(this),this.beforeStateQueue=new Om(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ll(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function vn(t){return dt(t)}class na{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hd(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function km(t,e,n){const r=vn(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ul(e),{host:o,port:a}=Nm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xm()}function ul(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nm(t){const e=ul(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ra(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ra(o)}}}function ra(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function Dm(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(t,e){return nr(t,"POST","/v1/accounts:signInWithPassword",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t,e){return nr(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}async function Um(t,e){return nr(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Mi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Jn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Lm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mm(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Dm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Um(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t,e){return nr(t,"POST","/v1/accounts:signInWithIdp",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="http://localhost";class Kt extends Mi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ki(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:Fm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $m(t){const e=Cn(On(t)).link,n=e?Cn(On(e)).deep_link_id:null,r=Cn(On(t)).deep_link_id;return(r?Cn(On(r)).link:null)||r||n||e||t}class Ui{constructor(e){var n,r,s,i,o,a;const c=Cn(On(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Bm((s=c.mode)!==null&&s!==void 0?s:null);F(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$m(e);try{return new Ui(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.providerId=En.PROVIDER_ID}static credential(e,n){return Jn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ui.parseLink(n);return F(r,"argument-error"),Jn._fromEmailAndCode(e,r.code,r.tenantId)}}En.PROVIDER_ID="password";En.EMAIL_PASSWORD_SIGN_IN_METHOD="password";En.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends rr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends rr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends rr{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,e){return nr(t,"POST","/v1/accounts:signUp",er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vt._fromIdTokenResponse(e,r,s),o=sa(r);return new qt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sa(r);return new qt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Pt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Mr(e,n,r,s)}}function fl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(t,i,e,r):i})}async function jm(t,e,n=!1){const r=await Kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Kn(t,fl(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Di(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),qt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&De(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t,e,n=!1){const r="signIn",s=await fl(t,r,e),i=await qt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Vm(t,e){return dl(vn(t),e)}async function zm(t,e,n){const r=vn(t),s=await Hm(r,{returnSecureToken:!0,email:e,password:n}),i=await qt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Km(t,e,n){return Vm(dt(t),En.credential(e,n))}function qm(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function Jm(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function hl(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function Gm(t){return dt(t).signOut()}const Ur="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ur,"1"),this.storage.removeItem(Ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(){const t=we();return Li(t)||ns(t)}const Xm=1e3,Qm=10;class ml extends pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ym()&&Cm(),this.fallbackToPolling=cl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Am()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Qm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ml.type="LOCAL";const Zm=ml;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gl.type="SESSION";const _l=gl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await eg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Bi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function ng(t){Ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function rg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ig(){return yl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="firebaseLocalStorageDb",og=1,Fr="firebaseLocalStorage",vl="fbase_key";class sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ss(t,e){return t.transaction([Fr],e?"readwrite":"readonly").objectStore(Fr)}function ag(){const t=indexedDB.deleteDatabase(bl);return new sr(t).toPromise()}function ri(){const t=indexedDB.open(bl,og);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fr,{keyPath:vl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fr)?e(r):(r.close(),await ag(),e(await ri()))})})}async function ia(t,e,n){const r=ss(t,!0).put({[vl]:e,value:n});return new sr(r).toPromise()}async function cg(t,e){const n=ss(t,!1).get(e),r=await new sr(n).toPromise();return r===void 0?null:r.value}function oa(t,e){const n=ss(t,!0).delete(e);return new sr(n).toPromise()}const lg=800,ug=3;class El{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ri(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ug)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rs._getInstance(ig()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rg(),!this.activeServiceWorker)return;this.sender=new tg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ri();return await ia(e,Ur,"1"),await oa(e,Ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ia(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ss(s,!1).getAll();return new sr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}El.type="LOCAL";const fg=El;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dg().appendChild(r)})}function pg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Zn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t,e){return e?ot(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Mi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mg(t){return dl(t.auth,new $i(t),t.bypassAuthState)}function gg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Wm(n,new $i(t),t.bypassAuthState)}async function _g(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),jm(n,new $i(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mg;case"linkViaPopup":case"linkViaRedirect":return _g;case"reauthViaPopup":case"reauthViaRedirect":return gg;default:De(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=new Zn(2e3,1e4);async function bg(t,e,n){const r=vn(t);am(t,e,Fi);const s=wl(r,n);return new Ht(r,"signInViaPopup",e,s).executeNotNull()}class Ht extends Il{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,yg.get())};e()}}Ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="pendingRedirect",wr=new Map;class Eg extends Il{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wr.get(this.auth._key());if(!e){try{const r=await wg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wr.set(this.auth._key(),e)}return this.bypassAuthState||wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wg(t,e){const n=Sg(e),r=Tg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ig(t,e){wr.set(t._key(),e)}function Tg(t){return ot(t._redirectPersistence)}function Sg(t){return Er(vg,t.config.apiKey,t.name)}async function Rg(t,e,n=!1){const r=vn(t),s=wl(r,e),o=await new Eg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=10*60*1e3;class Cg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Og(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ag&&this.cachedEventUids.clear(),this.cachedEventUids.has(aa(e))}saveEventToCache(e){this.cachedEventUids.add(aa(e)),this.lastProcessedEventTime=Date.now()}}function aa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Og(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ng=/^https?/;async function xg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pg(t);for(const n of e)try{if(Dg(n))return}catch{}De(t,"unauthorized-domain")}function Dg(t){const e=ni(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ng.test(n))return!1;if(kg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Zn(3e4,6e4);function ca(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mg(t){return new Promise((e,n)=>{var r,s,i;function o(){ca(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ca(),n(Qe(t,"network-request-failed"))},timeout:Lg.get()})}if(!((s=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=pg("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},hg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ir=null,e})}let Ir=null;function Ug(t){return Ir=Ir||Mg(t),Ir}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Zn(5e3,15e3),Bg="__/auth/iframe",$g="emulator/auth/iframe",Hg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wg(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xi(e,$g):`https://${t.config.authDomain}/${Bg}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},s=jg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qn(r).slice(1)}`}async function Vg(t){const e=await Ug(t),n=Ze().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Wg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},Fg.get());function c(){Ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kg=500,qg=600,Jg="_blank",Gg="http://localhost";class la{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yg(t,e,n,r=Kg,s=qg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=we().toLowerCase();n&&(a=rl(l)?Jg:n),nl(l)&&(e=e||Gg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,g])=>`${p}${m}=${g},`,"");if(Rm(l)&&a!=="_self")return Xg(e||"",a),new la(null);const d=window.open(e||"",a,u);F(d,t,"popup-blocked");try{d.focus()}catch{}return new la(d)}function Xg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="__/auth/handler",Zg="emulator/auth/handler";function ua(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:s};if(e instanceof Fi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$d(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof rr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${e_(t)}?${Qn(a).slice(1)}`}function e_({config:t}){return t.emulator?xi(t,Zg):`https://${t.authDomain}/${Qg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="webStorageSupport";class t_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_l,this._completeRedirectFn=Rg,this._overrideRedirectResult=Ig}async _openPopup(e,n,r,s){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ua(e,n,r,ni(),s);return Yg(e,o,Bi())}async _openRedirect(e,n,r,s){return await this._originValidation(e),ng(ua(e,n,r,ni(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Vg(e),r=new Cg(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rs,{type:Rs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rs];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cl()||Li()||ns()}}const n_=t_;var fa="@firebase/auth",da="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function i_(t){Wn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ll(t)},u=new Pm(a,c,l);return lm(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new un("auth-internal",e=>{const n=vn(e.getProvider("auth").getImmediate());return(r=>new r_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(fa,da,s_(t)),rn(fa,da,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=5*60,a_=Ac("authIdTokenMaxAge")||o_;let ha=null;const c_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>a_)return;const s=n==null?void 0:n.token;ha!==s&&(ha=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pn(t=$h()){const e=kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cm(t,{popupRedirectResolver:n_,persistence:[fg,Zm,_l]}),r=Ac("authTokenSyncURL");if(r){const i=c_(r);Jm(n,i,()=>i(n.currentUser)),qm(n,o=>i(o))}const s=Cd("auth");return s&&km(n,`http://${s}`),n}i_("Browser");const Sl=t=>(_n("data-v-9e9c95af"),t=t(),yn(),t),l_={class:"form-container"},u_={class:"form-group"},f_=Sl(()=>j("label",{for:"email"},"Email",-1)),d_={class:"form-group"},h_=Sl(()=>j("label",{for:"psw"},"Password",-1)),p_={key:0},m_={class:"btn-container"},g_={__name:"Form",props:["number","functionality"],setup(t){const{functionality:e}=t,n=st(""),r=st(""),s=st(""),i=st(!1);let o;Gr(()=>{o=Pn(),hl(o,m=>{m?i.value=!0:i.value=!1})});const a=()=>{zm(Pn(),n.value,r.value).then(m=>{console.log("Succesfully registered!"),d.push("/feed")}).catch(m=>{switch(console.log(m.code),m.code){case"auth/invalid-email":s.value="Invalid email";break;case"auth/user-not-found":s.value="No account with that email was found";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or password was incorrect";break}})},c=()=>{Km(Pn(),n.value,r.value).then(m=>{console.log("Succesfully signed in!"),d.push("/feed")}).catch(m=>{switch(console.log(m.code),m.code){case"auth/invalid-email":s.value="Invalid email";break;case"auth/user-not-found":s.value="No account with that email was found";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or password was incorrect";break}})},l=()=>{const m=new rt;bg(Pn(),m).then(g=>{console.log(g.user),d.push("/feed")}).catch(g=>{console.log(g.message)})},u=()=>{Gm(o).then(()=>{d.push("/")})},d=Pi(),p=()=>{e==="login"?c():e==="register"?a():d.push("/")};return(m,g)=>(Ce(),je("div",l_,[j("div",u_,[f_,Bs(j("input",{type:"email",class:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter your email here","onUpdate:modelValue":g[0]||(g[0]=v=>n.value=v)},null,512),[[qs,n.value]])]),j("div",d_,[h_,Bs(j("input",{type:"password",class:"form-control",id:"psw",placeholder:"Enter your pasword here","onUpdate:modelValue":g[1]||(g[1]=v=>r.value=v)},null,512),[[qs,r.value]]),s.value?(Ce(),je("span",p_,Mt(s.value),1)):ps("",!0)]),j("div",m_,[i.value?ps("",!0):(Ce(),je("button",{key:0,type:"submit",class:"btn btn-success",onClick:g[2]||(g[2]=v=>p())},Mt(t.functionality),1)),j("button",{type:"submit",class:"btn btn-primary",onClick:g[3]||(g[3]=v=>l())},"Google"),i.value?(Ce(),je("button",{key:1,type:"submit",class:"btn btn-danger",onClick:g[4]||(g[4]=v=>u())},"Log out")):ps("",!0)])]))}},Rl=bn(g_,[["__scopeId","data-v-9e9c95af"]]);const __=t=>(_n("data-v-ca9257ed"),t=t(),yn(),t),y_={class:"container"},b_=__(()=>j("h1",null,"Sign up!",-1)),v_={__name:"Login",setup(t){const e=st("login");return(n,r)=>(Ce(),je("main",null,[j("div",y_,[b_,ve(Rl,{functionality:e.value},null,8,["functionality"])])]))}},E_=bn(v_,[["__scopeId","data-v-ca9257ed"]]);const w_=t=>(_n("data-v-98d21d20"),t=t(),yn(),t),I_={class:"container"},T_=w_(()=>j("h1",null,"Create a new account",-1)),S_={__name:"Register",setup(t){const e=st("register");return(n,r)=>(Ce(),je("main",null,[j("div",I_,[T_,ve(Rl,{functionality:e.value},null,8,["functionality"])])]))}},R_=bn(S_,[["__scopeId","data-v-98d21d20"]]);function Al(t,e){return function(){return t.apply(e,arguments)}}const{toString:Cl}=Object.prototype,{getPrototypeOf:Hi}=Object,ji=(t=>e=>{const n=Cl.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ht=t=>(t=t.toLowerCase(),e=>ji(e)===t),is=t=>e=>typeof e===t,{isArray:wn}=Array,Gn=is("undefined");function A_(t){return t!==null&&!Gn(t)&&t.constructor!==null&&!Gn(t.constructor)&&Ot(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ol=ht("ArrayBuffer");function C_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ol(t.buffer),e}const O_=is("string"),Ot=is("function"),Pl=is("number"),Wi=t=>t!==null&&typeof t=="object",P_=t=>t===!0||t===!1,Tr=t=>{if(ji(t)!=="object")return!1;const e=Hi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},k_=ht("Date"),N_=ht("File"),x_=ht("Blob"),D_=ht("FileList"),L_=t=>Wi(t)&&Ot(t.pipe),M_=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Cl.call(t)===e||Ot(t.toString)&&t.toString()===e)},U_=ht("URLSearchParams"),F_=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ir(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),wn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function kl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Nl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xl=t=>!Gn(t)&&t!==Nl;function si(){const{caseless:t}=xl(this)&&this||{},e={},n=(r,s)=>{const i=t&&kl(e,s)||s;Tr(e[i])&&Tr(r)?e[i]=si(e[i],r):Tr(r)?e[i]=si({},r):wn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ir(arguments[r],n);return e}const B_=(t,e,n,{allOwnKeys:r}={})=>(ir(e,(s,i)=>{n&&Ot(s)?t[i]=Al(s,n):t[i]=s},{allOwnKeys:r}),t),$_=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),H_=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},j_=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Hi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},W_=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},V_=t=>{if(!t)return null;if(wn(t))return t;let e=t.length;if(!Pl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},z_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Hi(Uint8Array)),K_=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},q_=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},J_=ht("HTMLFormElement"),G_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),pa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Y_=ht("RegExp"),Dl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ir(n,(s,i)=>{e(s,i,t)!==!1&&(r[i]=s)}),Object.defineProperties(t,r)},X_=t=>{Dl(t,(e,n)=>{if(Ot(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ot(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Q_=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return wn(t)?r(t):r(String(t).split(e)),n},Z_=()=>{},ey=(t,e)=>(t=+t,Number.isFinite(t)?t:e),As="abcdefghijklmnopqrstuvwxyz",ma="0123456789",Ll={DIGIT:ma,ALPHA:As,ALPHA_DIGIT:As+As.toUpperCase()+ma},ty=(t=16,e=Ll.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function ny(t){return!!(t&&Ot(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ry=t=>{const e=new Array(10),n=(r,s)=>{if(Wi(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=wn(r)?[]:{};return ir(r,(o,a)=>{const c=n(o,s+1);!Gn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},y={isArray:wn,isArrayBuffer:Ol,isBuffer:A_,isFormData:M_,isArrayBufferView:C_,isString:O_,isNumber:Pl,isBoolean:P_,isObject:Wi,isPlainObject:Tr,isUndefined:Gn,isDate:k_,isFile:N_,isBlob:x_,isRegExp:Y_,isFunction:Ot,isStream:L_,isURLSearchParams:U_,isTypedArray:z_,isFileList:D_,forEach:ir,merge:si,extend:B_,trim:F_,stripBOM:$_,inherits:H_,toFlatObject:j_,kindOf:ji,kindOfTest:ht,endsWith:W_,toArray:V_,forEachEntry:K_,matchAll:q_,isHTMLForm:J_,hasOwnProperty:pa,hasOwnProp:pa,reduceDescriptors:Dl,freezeMethods:X_,toObjectSet:Q_,toCamelCase:G_,noop:Z_,toFiniteNumber:ey,findKey:kl,global:Nl,isContextDefined:xl,ALPHABET:Ll,generateString:ty,isSpecCompliantForm:ny,toJSONObject:ry};function G(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}y.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ml=G.prototype,Ul={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ul[t]={value:t}});Object.defineProperties(G,Ul);Object.defineProperty(Ml,"isAxiosError",{value:!0});G.from=(t,e,n,r,s,i)=>{const o=Object.create(Ml);return y.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),G.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const sy=null;function ii(t){return y.isPlainObject(t)||y.isArray(t)}function Fl(t){return y.endsWith(t,"[]")?t.slice(0,-2):t}function ga(t,e,n){return t?t.concat(e).map(function(s,i){return s=Fl(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function iy(t){return y.isArray(t)&&!t.some(ii)}const oy=y.toFlatObject(y,{},null,function(e){return/^is[A-Z]/.test(e)});function os(t,e,n){if(!y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,x){return!y.isUndefined(x[v])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(e);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(y.isDate(g))return g.toISOString();if(!c&&y.isBlob(g))throw new G("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(g)||y.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,x){let A=g;if(g&&!x&&typeof g=="object"){if(y.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(y.isArray(g)&&iy(g)||(y.isFileList(g)||y.endsWith(v,"[]"))&&(A=y.toArray(g)))return v=Fl(v),A.forEach(function(k,V){!(y.isUndefined(k)||k===null)&&e.append(o===!0?ga([v],V,i):o===null?v:v+"[]",l(k))}),!1}return ii(g)?!0:(e.append(ga(x,v,i),l(g)),!1)}const d=[],p=Object.assign(oy,{defaultVisitor:u,convertValue:l,isVisitable:ii});function m(g,v){if(!y.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),y.forEach(g,function(A,D){(!(y.isUndefined(A)||A===null)&&s.call(e,A,y.isString(D)?D.trim():D,v,p))===!0&&m(A,v?v.concat(D):[D])}),d.pop()}}if(!y.isObject(t))throw new TypeError("data must be an object");return m(t),e}function _a(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Vi(t,e){this._pairs=[],t&&os(t,this,e)}const Bl=Vi.prototype;Bl.append=function(e,n){this._pairs.push([e,n])};Bl.toString=function(e){const n=e?function(r){return e.call(this,r,_a)}:_a;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ay(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $l(t,e,n){if(!e)return t;const r=n&&n.encode||ay,s=n&&n.serialize;let i;if(s?i=s(e,n):i=y.isURLSearchParams(e)?e.toString():new Vi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class cy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){y.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ya=cy,Hl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ly=typeof URLSearchParams<"u"?URLSearchParams:Vi,uy=typeof FormData<"u"?FormData:null,fy=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),dy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ye={isBrowser:!0,classes:{URLSearchParams:ly,FormData:uy,Blob},isStandardBrowserEnv:fy,isStandardBrowserWebWorkerEnv:dy,protocols:["http","https","file","blob","url","data"]};function hy(t,e){return os(t,new Ye.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ye.isNode&&y.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function py(t){return y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function my(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function jl(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&y.isArray(s)?s.length:o,c?(y.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!y.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&y.isArray(s[o])&&(s[o]=my(s[o])),!a)}if(y.isFormData(t)&&y.isFunction(t.entries)){const n={};return y.forEachEntry(t,(r,s)=>{e(py(r),s,n,0)}),n}return null}const gy={"Content-Type":void 0};function _y(t,e,n){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const as={transitional:Hl,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=y.isObject(e);if(i&&y.isHTMLForm(e)&&(e=new FormData(e)),y.isFormData(e))return s&&s?JSON.stringify(jl(e)):e;if(y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hy(e,this.formSerializer).toString();if((a=y.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return os(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),_y(e)):e}],transformResponse:[function(e){const n=this.transitional||as.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&y.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?G.from(a,G.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ye.classes.FormData,Blob:Ye.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};y.forEach(["delete","get","head"],function(e){as.headers[e]={}});y.forEach(["post","put","patch"],function(e){as.headers[e]=y.merge(gy)});const zi=as,yy=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),by=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&yy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},ba=Symbol("internals");function Rn(t){return t&&String(t).trim().toLowerCase()}function Sr(t){return t===!1||t==null?t:y.isArray(t)?t.map(Sr):String(t)}function vy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function Ey(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Cs(t,e,n,r,s){if(y.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!y.isString(e)){if(y.isString(r))return e.indexOf(r)!==-1;if(y.isRegExp(r))return r.test(e)}}function wy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Iy(t,e){const n=y.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class cs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Rn(c);if(!u)throw new Error("header name must be a non-empty string");const d=y.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Sr(a))}const o=(a,c)=>y.forEach(a,(l,u)=>i(l,u,c));return y.isPlainObject(e)||e instanceof this.constructor?o(e,n):y.isString(e)&&(e=e.trim())&&!Ey(e)?o(by(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Rn(e),e){const r=y.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return vy(s);if(y.isFunction(n))return n.call(this,s,r);if(y.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Rn(e),e){const r=y.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Cs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Rn(o),o){const a=y.findKey(r,o);a&&(!n||Cs(r,r[a],a,n))&&(delete r[a],s=!0)}}return y.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Cs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return y.forEach(this,(s,i)=>{const o=y.findKey(r,i);if(o){n[o]=Sr(s),delete n[i];return}const a=e?wy(i):String(i).trim();a!==i&&delete n[i],n[a]=Sr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return y.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&y.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[ba]=this[ba]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Rn(o);r[a]||(Iy(s,o),r[a]=!0)}return y.isArray(e)?e.forEach(i):i(e),this}}cs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.freezeMethods(cs.prototype);y.freezeMethods(cs);const ct=cs;function Os(t,e){const n=this||zi,r=e||n,s=ct.from(r.headers);let i=r.data;return y.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Wl(t){return!!(t&&t.__CANCEL__)}function or(t,e,n){G.call(this,t??"canceled",G.ERR_CANCELED,e,n),this.name="CanceledError"}y.inherits(or,G,{__CANCEL__:!0});function Ty(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Sy=Ye.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),y.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),y.isString(i)&&c.push("path="+i),y.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ry(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ay(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Vl(t,e){return t&&!Ry(e)?Ay(t,e):e}const Cy=Ye.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=y.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Oy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Py(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(p*1e3/m):void 0}}function va(t,e){let n=0;const r=Py(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const ky=typeof XMLHttpRequest<"u",Ny=ky&&function(t){return new Promise(function(n,r){let s=t.data;const i=ct.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}y.isFormData(s)&&(Ye.isStandardBrowserEnv||Ye.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+g))}const u=Vl(t.baseURL,t.url);l.open(t.method.toUpperCase(),$l(u,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function d(){if(!l)return;const m=ct.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:t,request:l};Ty(function(A){n(A),c()},function(A){r(A),c()},v),l=null}if("onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(d)},l.onabort=function(){l&&(r(new G("Request aborted",G.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new G("Network Error",G.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||Hl;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),r(new G(g,v.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,l)),l=null},Ye.isStandardBrowserEnv){const m=(t.withCredentials||Cy(u))&&t.xsrfCookieName&&Sy.read(t.xsrfCookieName);m&&i.set(t.xsrfHeaderName,m)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&y.forEach(i.toJSON(),function(g,v){l.setRequestHeader(v,g)}),y.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",va(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",va(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=m=>{l&&(r(!m||m.type?new or(null,t,l):m),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const p=Oy(u);if(p&&Ye.protocols.indexOf(p)===-1){r(new G("Unsupported protocol "+p+":",G.ERR_BAD_REQUEST,t));return}l.send(s||null)})},Rr={http:sy,xhr:Ny};y.forEach(Rr,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const xy={getAdapter:t=>{t=y.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=y.isString(n)?Rr[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new G(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(y.hasOwnProp(Rr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!y.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Rr};function Ps(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new or(null,t)}function Ea(t){return Ps(t),t.headers=ct.from(t.headers),t.data=Os.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),xy.getAdapter(t.adapter||zi.adapter)(t).then(function(r){return Ps(t),r.data=Os.call(t,t.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return Wl(r)||(Ps(t),r&&r.response&&(r.response.data=Os.call(t,t.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const wa=t=>t instanceof ct?t.toJSON():t;function hn(t,e){e=e||{};const n={};function r(l,u,d){return y.isPlainObject(l)&&y.isPlainObject(u)?y.merge.call({caseless:d},l,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(l,u,d){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function i(l,u){if(!y.isUndefined(u))return r(void 0,u)}function o(l,u){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,d){if(d in e)return r(l,u);if(d in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(wa(l),wa(u),!0)};return y.forEach(Object.keys(t).concat(Object.keys(e)),function(u){const d=c[u]||s,p=d(t[u],e[u],u);y.isUndefined(p)&&d!==a||(n[u]=p)}),n}const zl="1.3.3",Ki={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ki[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ia={};Ki.transitional=function(e,n,r){function s(i,o){return"[Axios v"+zl+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new G(s(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!Ia[o]&&(Ia[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Dy(t,e,n){if(typeof t!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new G("option "+i+" must be "+c,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const oi={assertOptions:Dy,validators:Ki},_t=oi.validators;class Br{constructor(e){this.defaults=e,this.interceptors={request:new ya,response:new ya}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=hn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&oi.assertOptions(r,{silentJSONParsing:_t.transitional(_t.boolean),forcedJSONParsing:_t.transitional(_t.boolean),clarifyTimeoutError:_t.transitional(_t.boolean)},!1),s!==void 0&&oi.assertOptions(s,{encode:_t.function,serialize:_t.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&y.merge(i.common,i[n.method]),o&&y.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ct.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let u,d=0,p;if(!c){const g=[Ea.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),p=g.length,u=Promise.resolve(n);d<p;)u=u.then(g[d++],g[d++]);return u}p=a.length;let m=n;for(d=0;d<p;){const g=a[d++],v=a[d++];try{m=g(m)}catch(x){v.call(this,x);break}}try{u=Ea.call(this,m)}catch(g){return Promise.reject(g)}for(d=0,p=l.length;d<p;)u=u.then(l[d++],l[d++]);return u}getUri(e){e=hn(this.defaults,e);const n=Vl(e.baseURL,e.url);return $l(n,e.params,e.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(e){Br.prototype[e]=function(n,r){return this.request(hn(r||{},{method:e,url:n,data:(r||{}).data}))}});y.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(hn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Br.prototype[e]=n(),Br.prototype[e+"Form"]=n(!0)});const Ar=Br;class qi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new or(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new qi(function(s){e=s}),cancel:e}}}const Ly=qi;function My(t){return function(n){return t.apply(null,n)}}function Uy(t){return y.isObject(t)&&t.isAxiosError===!0}const ai={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ai).forEach(([t,e])=>{ai[e]=t});const Fy=ai;function Kl(t){const e=new Ar(t),n=Al(Ar.prototype.request,e);return y.extend(n,Ar.prototype,e,{allOwnKeys:!0}),y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Kl(hn(t,s))},n}const pe=Kl(zi);pe.Axios=Ar;pe.CanceledError=or;pe.CancelToken=Ly;pe.isCancel=Wl;pe.VERSION=zl;pe.toFormData=os;pe.AxiosError=G;pe.Cancel=pe.CanceledError;pe.all=function(e){return Promise.all(e)};pe.spread=My;pe.isAxiosError=Uy;pe.mergeConfig=hn;pe.AxiosHeaders=ct;pe.formToJSON=t=>jl(y.isHTMLForm(t)?new FormData(t):t);pe.HttpStatusCode=Fy;pe.default=pe;const By=pe;const ql=t=>(_n("data-v-68853a02"),t=t(),yn(),t),$y={class:"search"},Hy=ql(()=>j("p",null,"Input the name that you want to find here",-1)),jy={class:"table table-hover table-bordered"},Wy=ql(()=>j("thead",null,[j("tr",null,[j("th",{scope:"col"}),j("th",{scope:"col"},"Name"),j("th",{scope:"col"},"Lastname"),j("th",{scope:"col"},"City"),j("th",{scope:"col"},"Country"),j("th",{scope:"col"},"Timezone")])],-1)),Vy={class:"container-img"},zy=["src"],Ky={__name:"Table",setup(t){Pi();const e=st([]),n=st("");kn(n,()=>{e.value=e.value.filter(s=>s.name.first.toLocaleLowerCase().includes(n.value.toLocaleLowerCase()))});const r=()=>{let s="https://randomuser.me/api/?results=50";By.get(s).then(i=>e.value=i.data.results)};return Gr(()=>(r(),console.log(e))),(s,i)=>(Ce(),je(Pe,null,[j("div",$y,[Hy,Bs(j("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o),class:"form-control"},null,512),[[qs,n.value,void 0,{trim:!0}]])]),j("table",jy,[Wy,j("tbody",null,[(Ce(!0),je(Pe,null,bf(e.value,o=>(Ce(),je("tr",null,[j("td",Vy,[j("img",{src:o.picture.thumbnail,class:"thumnail"},null,8,zy)]),j("th",null,Mt(o.name.first),1),j("td",null,Mt(o.name.last),1),j("td",null,Mt(o.location.city),1),j("td",null,Mt(o.location.country),1),j("td",null,Mt(o.location.timezone.offset),1)]))),256))])])],64))}},qy=bn(Ky,[["__scopeId","data-v-68853a02"]]);const Jy=t=>(_n("data-v-5b8d5897"),t=t(),yn(),t),Gy=Jy(()=>j("h1",null,"User data",-1)),Yy={__name:"Feed",setup(t){return(e,n)=>(Ce(),je("main",null,[Gy,ve(qy)]))}},Xy=bn(Yy,[["__scopeId","data-v-5b8d5897"]]),Qy=()=>new Promise((t,e)=>{const n=hl(Pn(),r=>{n(),t(r)},e)}),Jl=Qp({history:mp(),routes:[{path:"/",component:sm},{path:"/login",component:E_},{path:"/register",component:R_},{path:"/feed",component:Xy,meta:{requiresAuth:!0}}]});Jl.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Qy()?n():(alert("You dont have access!"),n("/")):n()});const Zy={apiKey:"AIzaSyDzT6IOP93oxcRFaYadsmLyUudegWRK3fg",authDomain:"authentication-login-project.firebaseapp.com",projectId:"authentication-login-project",storageBucket:"authentication-login-project.appspot.com",messagingSenderId:"963983745261",appId:"1:963983745261:web:aeafc658630ec26ad2ece4"};Nc(Zy);const Gl=vd(im);Gl.use(Jl);Gl.mount("#app");
