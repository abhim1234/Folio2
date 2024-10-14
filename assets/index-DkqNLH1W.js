(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Le={},ts=[],$t=()=>{},Yy=()=>!1,ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xl=t=>t.startsWith("onUpdate:"),ft=Object.assign,Ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xy=Object.prototype.hasOwnProperty,Ie=(t,e)=>Xy.call(t,e),ce=Array.isArray,ns=t=>Ni(t)==="[object Map]",da=t=>Ni(t)==="[object Set]",qh=t=>Ni(t)==="[object Date]",pe=t=>typeof t=="function",Je=t=>typeof t=="string",pn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",gp=t=>(De(t)||pe(t))&&pe(t.then)&&pe(t.catch),_p=Object.prototype.toString,Ni=t=>_p.call(t),Zy=t=>Ni(t).slice(8,-1),yp=t=>Ni(t)==="[object Object]",Ml=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ev=/-(\w)/g,Jt=fa(t=>t.replace(ev,(e,n)=>n?n.toUpperCase():"")),tv=/\B([A-Z])/g,Fr=fa(t=>t.replace(tv,"-$1").toLowerCase()),pa=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),mc=fa(t=>t?`on${pa(t)}`:""),rr=(t,e)=>!Object.is(t,e),To=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hh;const Ep=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?iv(r):Fl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||De(t))return t}const nv=/;(?![^(]*\))/g,rv=/:([^]+)/,sv=/\/\*[^]*?\*\//g;function iv(t){const e={};return t.replace(sv,"").split(nv).forEach(n=>{if(n){const r=n.split(rv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tr(t){let e="";if(Je(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Tr(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ov="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",av=Vl(ov);function wp(t){return!!t||t===""}function cv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ma(t[r],e[r]);return n}function ma(t,e){if(t===e)return!0;let n=qh(t),r=qh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=pn(t),r=pn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?cv(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ma(t[o],e[o]))return!1}}return String(t)===String(e)}function lv(t,e){return t.findIndex(n=>ma(n,e))}const Tp=t=>!!(t&&t.__v_isRef===!0),Dt=t=>Je(t)?t:t==null?"":ce(t)||De(t)&&(t.toString===_p||!pe(t.toString))?Tp(t)?Dt(t.value):JSON.stringify(t,Ip,2):String(t),Ip=(t,e)=>Tp(e)?Ip(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gc(r,i)+" =>"]=s,n),{})}:da(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:pn(e)?gc(e):De(e)&&!ce(e)&&!yp(e)?String(e):e,gc=(t,e="")=>{var n;return pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class uv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hv(t,e=Kt){e&&e.active&&e.effects.push(t)}function dv(){return Kt}let br;class Ul{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,hv(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ar();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(fv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),cr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Yn,n=br;try{return Yn=!0,br=this,this._runnings++,Wh(this),this.fn()}finally{Kh(this),this._runnings--,br=n,Yn=e}}stop(){this.active&&(Wh(this),Kh(this),this.onStop&&this.onStop(),this.active=!1)}}function fv(t){return t.value}function Wh(t){t._trackId++,t._depsLength=0}function Kh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ap(t.deps[e],t);t.deps.length=t._depsLength}}function Ap(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Yn=!0,$c=0;const bp=[];function ar(){bp.push(Yn),Yn=!1}function cr(){const t=bp.pop();Yn=t===void 0?!0:t}function Bl(){$c++}function jl(){for($c--;!$c&&qc.length;)qc.shift()()}function Rp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ap(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const qc=[];function Sp(t,e,n){Bl();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&qc.push(r.scheduler)))}jl()}const Pp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Hc=new WeakMap,Rr=Symbol(""),Wc=Symbol("");function Pt(t,e,n){if(Yn&&br){let r=Hc.get(t);r||Hc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Pp(()=>r.delete(n))),Rp(br,s)}}function In(t,e,n,r,s,i){const o=Hc.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&ce(t)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||!pn(d)&&d>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":ce(t)?Ml(n)&&c.push(o.get("length")):(c.push(o.get(Rr)),ns(t)&&c.push(o.get(Wc)));break;case"delete":ce(t)||(c.push(o.get(Rr)),ns(t)&&c.push(o.get(Wc)));break;case"set":ns(t)&&c.push(o.get(Rr));break}Bl();for(const l of c)l&&Sp(l,4);jl()}const pv=Vl("__proto__,__v_isRef,__isVue"),Cp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pn)),zh=mv();function mv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)Pt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ar(),Bl();const r=Se(this)[e].apply(this,n);return jl(),cr(),r}}),t}function gv(t){pn(t)||(t=String(t));const e=Se(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class kp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Cv:Vp:i?Dp:Np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){if(o&&Ie(zh,n))return Reflect.get(zh,n,r);if(n==="hasOwnProperty")return gv}const c=Reflect.get(e,n,r);return(pn(n)?Cp.has(n):pv(n))||(s||Pt(e,"get",n),i)?c:Ct(c)?o&&Ml(n)?c:c.value:De(c)?s?Lp(c):_a(c):c}}class Op extends kp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Cr(i);if(!hs(r)&&!Cr(r)&&(i=Se(i),r=Se(r)),!ce(e)&&Ct(i)&&!Ct(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Ml(n)?Number(n)<e.length:Ie(e,n),c=Reflect.set(e,n,r,s);return e===Se(s)&&(o?rr(r,i)&&In(e,"set",n,r):In(e,"add",n,r)),c}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&In(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pn(n)||!Cp.has(n))&&Pt(e,"has",n),r}ownKeys(e){return Pt(e,"iterate",ce(e)?"length":Rr),Reflect.ownKeys(e)}}class _v extends kp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yv=new Op,vv=new _v,Ev=new Op(!0);const $l=t=>t,ga=t=>Reflect.getPrototypeOf(t);function lo(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(rr(e,i)&&Pt(s,"get",e),Pt(s,"get",i));const{has:o}=ga(s),c=r?$l:n?Wl:mi;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function uo(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(rr(t,s)&&Pt(r,"has",t),Pt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ho(t,e=!1){return t=t.__v_raw,!e&&Pt(Se(t),"iterate",Rr),Reflect.get(t,"size",t)}function Gh(t,e=!1){!e&&!hs(t)&&!Cr(t)&&(t=Se(t));const n=Se(this);return ga(n).has.call(n,t)||(n.add(t),In(n,"add",t,t)),this}function Qh(t,e,n=!1){!n&&!hs(e)&&!Cr(e)&&(e=Se(e));const r=Se(this),{has:s,get:i}=ga(r);let o=s.call(r,t);o||(t=Se(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?rr(e,c)&&In(r,"set",t,e):In(r,"add",t,e),this}function Jh(t){const e=Se(this),{has:n,get:r}=ga(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&In(e,"delete",t,void 0),i}function Yh(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&In(t,"clear",void 0,void 0),n}function fo(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Se(o),l=e?$l:t?Wl:mi;return!t&&Pt(c,"iterate",Rr),o.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function po(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=ns(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?$l:e?Wl:mi;return!e&&Pt(i,"iterate",l?Wc:Rr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Fn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wv(){const t={get(i){return lo(this,i)},get size(){return ho(this)},has:uo,add:Gh,set:Qh,delete:Jh,clear:Yh,forEach:fo(!1,!1)},e={get(i){return lo(this,i,!1,!0)},get size(){return ho(this)},has:uo,add(i){return Gh.call(this,i,!0)},set(i,o){return Qh.call(this,i,o,!0)},delete:Jh,clear:Yh,forEach:fo(!1,!0)},n={get(i){return lo(this,i,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:fo(!0,!1)},r={get(i){return lo(this,i,!0,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=po(i,!1,!1),n[i]=po(i,!0,!1),e[i]=po(i,!1,!0),r[i]=po(i,!0,!0)}),[t,n,e,r]}const[Tv,Iv,Av,bv]=wv();function ql(t,e){const n=e?t?bv:Av:t?Iv:Tv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const Rv={get:ql(!1,!1)},Sv={get:ql(!1,!0)},Pv={get:ql(!0,!1)};const Np=new WeakMap,Dp=new WeakMap,Vp=new WeakMap,Cv=new WeakMap;function kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ov(t){return t.__v_skip||!Object.isExtensible(t)?0:kv(Zy(t))}function _a(t){return Cr(t)?t:Hl(t,!1,yv,Rv,Np)}function xp(t){return Hl(t,!1,Ev,Sv,Dp)}function Lp(t){return Hl(t,!0,vv,Pv,Vp)}function Hl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ov(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ii(t){return Cr(t)?ii(t.__v_raw):!!(t&&t.__v_isReactive)}function Cr(t){return!!(t&&t.__v_isReadonly)}function hs(t){return!!(t&&t.__v_isShallow)}function Mp(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Nv(t){return Object.isExtensible(t)&&vp(t,"__v_skip",!0),t}const mi=t=>De(t)?_a(t):t,Wl=t=>De(t)?Lp(t):t;class Fp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ul(()=>e(this._value),()=>Io(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return(!e._cacheable||e.effect.dirty)&&rr(e._value,e._value=e.effect.run())&&Io(e,4),Up(e),e.effect._dirtyLevel>=2&&Io(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Dv(t,e,n=!1){let r,s;const i=pe(t);return i?(r=t,s=$t):(r=t.get,s=t.set),new Fp(r,s,i||!s,n)}function Up(t){var e;Yn&&br&&(t=Se(t),Rp(br,(e=t.dep)!=null?e:t.dep=Pp(()=>t.dep=void 0,t instanceof Fp?t:void 0)))}function Io(t,e=4,n,r){t=Se(t);const s=t.dep;s&&Sp(s,e)}function Ct(t){return!!(t&&t.__v_isRef===!0)}function Ze(t){return Bp(t,!1)}function Vv(t){return Bp(t,!0)}function Bp(t,e){return Ct(t)?t:new xv(t,e)}class xv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:mi(e)}get value(){return Up(this),this._value}set value(e){const n=this.__v_isShallow||hs(e)||Cr(e);e=n?e:Se(e),rr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:mi(e),Io(this,4))}}function rs(t){return Ct(t)?t.value:t}const Lv={get:(t,e,n)=>rs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jp(t){return ii(t)?t:new Proxy(t,Lv)}/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xn(t,e,n,r){try{return r?t(...r):t()}catch(s){ya(s,e,n)}}function Qt(t,e,n,r){if(pe(t)){const s=Xn(t,e,n,r);return s&&gp(s)&&s.catch(i=>{ya(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function ya(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){ar(),Xn(l,null,10,[t,o,c]),cr();return}}Mv(t,n,s,r)}function Mv(t,e,n,r=!0){console.error(t)}let gi=!1,Kc=!1;const ht=[];let an=0;const ss=[];let $n=null,Er=0;const $p=Promise.resolve();let Kl=null;function zl(t){const e=Kl||$p;return t?e.then(this?t.bind(this):t):e}function Fv(t){let e=an+1,n=ht.length;for(;e<n;){const r=e+n>>>1,s=ht[r],i=_i(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Gl(t){(!ht.length||!ht.includes(t,gi&&t.allowRecurse?an+1:an))&&(t.id==null?ht.push(t):ht.splice(Fv(t.id),0,t),qp())}function qp(){!gi&&!Kc&&(Kc=!0,Kl=$p.then(Wp))}function Uv(t){const e=ht.indexOf(t);e>an&&ht.splice(e,1)}function Bv(t){ce(t)?ss.push(...t):(!$n||!$n.includes(t,t.allowRecurse?Er+1:Er))&&ss.push(t),qp()}function Xh(t,e,n=gi?an+1:0){for(;n<ht.length;n++){const r=ht[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ht.splice(n,1),n--,r()}}}function Hp(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>_i(n)-_i(r));if(ss.length=0,$n){$n.push(...e);return}for($n=e,Er=0;Er<$n.length;Er++){const n=$n[Er];n.active!==!1&&n()}$n=null,Er=0}}const _i=t=>t.id==null?1/0:t.id,jv=(t,e)=>{const n=_i(t)-_i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wp(t){Kc=!1,gi=!0,ht.sort(jv);try{for(an=0;an<ht.length;an++){const e=ht[an];e&&e.active!==!1&&Xn(e,e.i,e.i?15:14)}}finally{an=0,ht.length=0,Hp(),gi=!1,Kl=null,(ht.length||ss.length)&&Wp()}}let Vt=null,va=null;function jo(t){const e=Vt;return Vt=t,va=t&&t.type.__scopeId||null,e}function Kp(t){va=t}function zp(){va=null}function Et(t,e=Vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ad(-1);const i=jo(e);let o;try{o=t(...s)}finally{jo(i),r._d&&ad(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wt(t,e){if(Vt===null)return t;const n=Aa(Vt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Le]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function _r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(ar(),Qt(l,n,8,[t.el,c,t,e]),cr())}}function Gp(t,e){t.shapeFlag&6&&t.component?Gp(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Qp(t,e){return pe(t)?ft({name:t.name},e,{setup:t}):t}const Ao=t=>!!t.type.__asyncLoader,Jp=t=>t.type.__isKeepAlive;function $v(t,e){Yp(t,"a",e)}function qv(t,e){Yp(t,"da",e)}function Yp(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jp(s.parent.vnode)&&Hv(r,e,n,s),s=s.parent}}function Hv(t,e,n,r){const s=Ea(e,t,r,!0);Zp(()=>{Ll(r[e],s)},n)}function Ea(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ar();const c=Di(n),l=Qt(e,n,t,o);return c(),cr(),l});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=dt)=>{(!Ia||t==="sp")&&Ea(t,(...r)=>e(...r),n)},Wv=On("bm"),Xp=On("m"),Kv=On("bu"),zv=On("u"),Gv=On("bum"),Zp=On("um"),Qv=On("sp"),Jv=On("rtg"),Yv=On("rtc");function Xv(t,e=dt){Ea("ec",t,e)}const em="components";function zc(t,e){return eE(em,t,!0,e)||t}const Zv=Symbol.for("v-ndc");function eE(t,e,n=!0,r=!1){const s=Vt||dt;if(s){const i=s.type;if(t===em){const c=WE(i,!1);if(c&&(c===e||c===Jt(e)||c===pa(Jt(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[Jt(e)]||t[pa(Jt(e))])}function tE(t,e,n,r){let s;const i=n;if(ce(t)||Je(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const Gc=t=>t?vm(t)?Aa(t):Gc(t.parent):null,oi=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gc(t.parent),$root:t=>Gc(t.root),$emit:t=>t.emit,$options:t=>Ql(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Gl(t.update)}),$nextTick:t=>t.n||(t.n=zl.bind(t.proxy)),$watch:t=>AE.bind(t)}),_c=(t,e)=>t!==Le&&!t.__isScriptSetup&&Ie(t,e),nE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_c(r,e))return o[e]=1,r[e];if(s!==Le&&Ie(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ie(u,e))return o[e]=3,i[e];if(n!==Le&&Ie(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const d=oi[e];let p,g;if(d)return e==="$attrs"&&Pt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Le&&Ie(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Ie(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _c(s,e)?(s[e]=n,!0):r!==Le&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Le&&Ie(t,o)||_c(e,o)||(c=i[0])&&Ie(c,o)||Ie(r,o)||Ie(oi,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ed(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function rE(t){const e=Ql(t),n=t.proxy,r=t.ctx;Qc=!1,e.beforeCreate&&td(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:y,updated:b,activated:R,deactivated:P,beforeDestroy:B,beforeUnmount:U,destroyed:F,unmounted:ee,render:le,renderTracked:J,renderTriggered:I,errorCaptured:v,serverPrefetch:T,expose:A,inheritAttrs:S,components:C,directives:w,filters:gt}=e;if(u&&sE(u,r,null),o)for(const ve in o){const ge=o[ve];pe(ge)&&(r[ve]=ge.bind(n))}if(s){const ve=s.call(n,n);De(ve)&&(t.data=_a(ve))}if(Qc=!0,i)for(const ve in i){const ge=i[ve],kt=pe(ge)?ge.bind(n,n):pe(ge.get)?ge.get.bind(n,n):$t,Ht=!pe(ge)&&pe(ge.set)?ge.set.bind(n):$t,Ut=zt({get:kt,set:Ht});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Fe=>Ut.value=Fe})}if(c)for(const ve in c)tm(c[ve],r,n,ve);if(l){const ve=pe(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(ge=>{bo(ge,ve[ge])})}d&&td(d,t,"c");function Ke(ve,ge){ce(ge)?ge.forEach(kt=>ve(kt.bind(n))):ge&&ve(ge.bind(n))}if(Ke(Wv,p),Ke(Xp,g),Ke(Kv,y),Ke(zv,b),Ke($v,R),Ke(qv,P),Ke(Xv,v),Ke(Yv,J),Ke(Jv,I),Ke(Gv,U),Ke(Zp,ee),Ke(Qv,T),ce(A))if(A.length){const ve=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:kt=>n[ge]=kt})})}else t.exposed||(t.exposed={});le&&t.render===$t&&(t.render=le),S!=null&&(t.inheritAttrs=S),C&&(t.components=C),w&&(t.directives=w)}function sE(t,e,n=$t){ce(t)&&(t=Jc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function td(t,e,n){Qt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tm(t,e,n,r){const s=r.includes(".")?mm(n,r):()=>n[r];if(Je(t)){const i=e[t];pe(i)&&Ro(s,i)}else if(pe(t))Ro(s,t.bind(n));else if(De(t))if(ce(t))t.forEach(i=>tm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Ro(s,i,t)}}function Ql(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>$o(l,u,o,!0)),$o(l,e,o)),De(e)&&i.set(e,l),l}function $o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$o(t,i,n,!0),s&&s.forEach(o=>$o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=iE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const iE={data:nd,props:rd,emits:rd,methods:Ys,computed:Ys,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Ys,directives:Ys,watch:aE,provide:nd,inject:oE};function nd(t,e){return e?t?function(){return ft(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function oE(t,e){return Ys(Jc(t),Jc(e))}function Jc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?ft(Object.create(null),t,e):e}function rd(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ft(Object.create(null),ed(t),ed(e??{})):e}function aE(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=vt(t[r],e[r]);return n}function nm(){return{app:null,config:{isNativeTag:Yy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cE=0;function lE(t,e){return function(r,s=null){pe(r)||(r=ft({},r)),s!=null&&!De(s)&&(s=null);const i=nm(),o=new WeakSet;let c=!1;const l=i.app={_uid:cE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zE,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&pe(u.install)?(o.add(u),u.install(l,...d)):pe(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const g=Ce(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Aa(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=is;is=l;try{return u()}finally{is=d}}};return l}}let is=null;function bo(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=dt||Vt;if(r||is){const s=is?is._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const rm={},sm=()=>Object.create(rm),im=t=>Object.getPrototypeOf(t)===rm;function uE(t,e,n,r=!1){const s={},i=sm();t.propsDefaults=Object.create(null),om(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(wa(t.emitsOptions,g))continue;const y=e[g];if(l)if(Ie(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const b=Jt(g);s[b]=Yc(l,c,b,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{om(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!Ie(e,p)&&((d=Fr(p))===p||!Ie(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Yc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],u=!0)}u&&In(t.attrs,"set","")}function om(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(si(l))continue;const u=e[l];let d;s&&Ie(s,d=Jt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:wa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=c||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Yc(s,l,p,u[p],t,!Ie(u,p))}}return o}function Yc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ie(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Di(s);r=u[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const dE=new WeakMap;function am(t,e,n=!1){const r=n?dE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const d=p=>{l=!0;const[g,y]=am(p,e,!0);ft(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return De(t)&&r.set(t,ts),ts;if(ce(i))for(let d=0;d<i.length;d++){const p=Jt(i[d]);sd(p)&&(o[p]=Le)}else if(i)for(const d in i){const p=Jt(d);if(sd(p)){const g=i[d],y=o[p]=ce(g)||pe(g)?{type:g}:ft({},g),b=y.type;let R=!1,P=!0;if(ce(b))for(let B=0;B<b.length;++B){const U=b[B],F=pe(U)&&U.name;if(F==="Boolean"){R=!0;break}else F==="String"&&(P=!1)}else R=pe(b)&&b.name==="Boolean";y[0]=R,y[1]=P,(R||Ie(y,"default"))&&c.push(p)}}const u=[o,c];return De(t)&&r.set(t,u),u}function sd(t){return t[0]!=="$"&&!si(t)}const cm=t=>t[0]==="_"||t==="$stable",Jl=t=>ce(t)?t.map(on):[on(t)],fE=(t,e,n)=>{if(e._n)return e;const r=Et((...s)=>Jl(e(...s)),n);return r._c=!1,r},lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cm(s))continue;const i=t[s];if(pe(i))e[s]=fE(s,i,r);else if(i!=null){const o=Jl(i);e[s]=()=>o}}},um=(t,e)=>{const n=Jl(e);t.slots.default=()=>n},hm=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},pE=(t,e,n)=>{const r=t.slots=sm();if(t.vnode.shapeFlag&32){const s=e._;s?(hm(r,e,n),n&&vp(r,"_",s,!0)):lm(e,r)}else e&&um(t,e)},mE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:hm(s,e,n):(i=!e.$stable,lm(e,s)),o=e}else e&&(um(t,e),o={default:1});if(i)for(const c in s)!cm(c)&&o[c]==null&&delete s[c]};function Xc(t,e,n,r,s=!1){if(ce(t)){t.forEach((g,y)=>Xc(g,e&&(ce(e)?e[y]:e),n,r,s));return}if(Ao(r)&&!s)return;const i=r.shapeFlag&4?Aa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Le?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Je(u)?(d[u]=null,Ie(p,u)&&(p[u]=null)):Ct(u)&&(u.value=null)),pe(l))Xn(l,c,12,[o,d]);else{const g=Je(l),y=Ct(l);if(g||y){const b=()=>{if(t.f){const R=g?Ie(p,l)?p[l]:d[l]:l.value;s?ce(R)&&Ll(R,i):ce(R)?R.includes(i)||R.push(i):g?(d[l]=[i],Ie(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,Ie(p,l)&&(p[l]=o)):y&&(l.value=o,t.k&&(d[t.k]=o))};o?(b.id=-1,At(b,n)):b()}}}const gE=Symbol("_vte"),_E=t=>t.__isTeleport,At=NE;function yE(t){return vE(t)}function vE(t,e){const n=Ep();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:y=$t,insertStaticContent:b}=t,R=(_,E,O,j=null,x=null,H=null,G=void 0,W=null,z=!!E.dynamicChildren)=>{if(_===E)return;_&&!zs(_,E)&&(j=L(_),Fe(_,x,H,!0),_=null),E.patchFlag===-2&&(z=!1,E.dynamicChildren=null);const{type:q,ref:Y,shapeFlag:ie}=E;switch(q){case Ta:P(_,E,O,j);break;case kr:B(_,E,O,j);break;case Ec:_==null&&U(E,O,j,G);break;case sn:C(_,E,O,j,x,H,G,W,z);break;default:ie&1?le(_,E,O,j,x,H,G,W,z):ie&6?w(_,E,O,j,x,H,G,W,z):(ie&64||ie&128)&&q.process(_,E,O,j,x,H,G,W,z,te)}Y!=null&&x&&Xc(Y,_&&_.ref,H,E||_,!E)},P=(_,E,O,j)=>{if(_==null)r(E.el=c(E.children),O,j);else{const x=E.el=_.el;E.children!==_.children&&u(x,E.children)}},B=(_,E,O,j)=>{_==null?r(E.el=l(E.children||""),O,j):E.el=_.el},U=(_,E,O,j)=>{[_.el,_.anchor]=b(_.children,E,O,j,_.el,_.anchor)},F=({el:_,anchor:E},O,j)=>{let x;for(;_&&_!==E;)x=g(_),r(_,O,j),_=x;r(E,O,j)},ee=({el:_,anchor:E})=>{let O;for(;_&&_!==E;)O=g(_),s(_),_=O;s(E)},le=(_,E,O,j,x,H,G,W,z)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),_==null?J(E,O,j,x,H,G,W,z):T(_,E,x,H,G,W,z)},J=(_,E,O,j,x,H,G,W)=>{let z,q;const{props:Y,shapeFlag:ie,transition:se,dirs:re}=_;if(z=_.el=o(_.type,H,Y&&Y.is,Y),ie&8?d(z,_.children):ie&16&&v(_.children,z,null,j,x,yc(_,H),G,W),re&&_r(_,null,j,"created"),I(z,_,_.scopeId,G,j),Y){for(const Re in Y)Re!=="value"&&!si(Re)&&i(z,Re,null,Y[Re],H,j);"value"in Y&&i(z,"value",null,Y.value,H),(q=Y.onVnodeBeforeMount)&&rn(q,j,_)}re&&_r(_,null,j,"beforeMount");const ae=EE(x,se);ae&&se.beforeEnter(z),r(z,E,O),((q=Y&&Y.onVnodeMounted)||ae||re)&&At(()=>{q&&rn(q,j,_),ae&&se.enter(z),re&&_r(_,null,j,"mounted")},x)},I=(_,E,O,j,x)=>{if(O&&y(_,O),j)for(let H=0;H<j.length;H++)y(_,j[H]);if(x){let H=x.subTree;if(E===H){const G=x.vnode;I(_,G,G.scopeId,G.slotScopeIds,x.parent)}}},v=(_,E,O,j,x,H,G,W,z=0)=>{for(let q=z;q<_.length;q++){const Y=_[q]=W?qn(_[q]):on(_[q]);R(null,Y,E,O,j,x,H,G,W)}},T=(_,E,O,j,x,H,G)=>{const W=E.el=_.el;let{patchFlag:z,dynamicChildren:q,dirs:Y}=E;z|=_.patchFlag&16;const ie=_.props||Le,se=E.props||Le;let re;if(O&&yr(O,!1),(re=se.onVnodeBeforeUpdate)&&rn(re,O,E,_),Y&&_r(E,_,O,"beforeUpdate"),O&&yr(O,!0),(ie.innerHTML&&se.innerHTML==null||ie.textContent&&se.textContent==null)&&d(W,""),q?A(_.dynamicChildren,q,W,O,j,yc(E,x),H):G||ge(_,E,W,null,O,j,yc(E,x),H,!1),z>0){if(z&16)S(W,ie,se,O,x);else if(z&2&&ie.class!==se.class&&i(W,"class",null,se.class,x),z&4&&i(W,"style",ie.style,se.style,x),z&8){const ae=E.dynamicProps;for(let Re=0;Re<ae.length;Re++){const Te=ae[Re],He=ie[Te],Ot=se[Te];(Ot!==He||Te==="value")&&i(W,Te,He,Ot,x,O)}}z&1&&_.children!==E.children&&d(W,E.children)}else!G&&q==null&&S(W,ie,se,O,x);((re=se.onVnodeUpdated)||Y)&&At(()=>{re&&rn(re,O,E,_),Y&&_r(E,_,O,"updated")},j)},A=(_,E,O,j,x,H,G)=>{for(let W=0;W<E.length;W++){const z=_[W],q=E[W],Y=z.el&&(z.type===sn||!zs(z,q)||z.shapeFlag&70)?p(z.el):O;R(z,q,Y,null,j,x,H,G,!0)}},S=(_,E,O,j,x)=>{if(E!==O){if(E!==Le)for(const H in E)!si(H)&&!(H in O)&&i(_,H,E[H],null,x,j);for(const H in O){if(si(H))continue;const G=O[H],W=E[H];G!==W&&H!=="value"&&i(_,H,W,G,x,j)}"value"in O&&i(_,"value",E.value,O.value,x)}},C=(_,E,O,j,x,H,G,W,z)=>{const q=E.el=_?_.el:c(""),Y=E.anchor=_?_.anchor:c("");let{patchFlag:ie,dynamicChildren:se,slotScopeIds:re}=E;re&&(W=W?W.concat(re):re),_==null?(r(q,O,j),r(Y,O,j),v(E.children||[],O,Y,x,H,G,W,z)):ie>0&&ie&64&&se&&_.dynamicChildren?(A(_.dynamicChildren,se,O,x,H,G,W),(E.key!=null||x&&E===x.subTree)&&dm(_,E,!0)):ge(_,E,O,Y,x,H,G,W,z)},w=(_,E,O,j,x,H,G,W,z)=>{E.slotScopeIds=W,_==null?E.shapeFlag&512?x.ctx.activate(E,O,j,G,z):gt(E,O,j,x,H,G,z):Ft(_,E,z)},gt=(_,E,O,j,x,H,G)=>{const W=_.component=BE(_,j,x);if(Jp(_)&&(W.ctx.renderer=te),jE(W,!1,G),W.asyncDep){if(x&&x.registerDep(W,Ke,G),!_.el){const z=W.subTree=Ce(kr);B(null,z,E,O)}}else Ke(W,_,E,O,x,H,G)},Ft=(_,E,O)=>{const j=E.component=_.component;if(CE(_,E,O))if(j.asyncDep&&!j.asyncResolved){ve(j,E,O);return}else j.next=E,Uv(j.update),j.effect.dirty=!0,j.update();else E.el=_.el,j.vnode=E},Ke=(_,E,O,j,x,H,G)=>{const W=()=>{if(_.isMounted){let{next:Y,bu:ie,u:se,parent:re,vnode:ae}=_;{const Bt=fm(_);if(Bt){Y&&(Y.el=ae.el,ve(_,Y,G)),Bt.asyncDep.then(()=>{_.isUnmounted||W()});return}}let Re=Y,Te;yr(_,!1),Y?(Y.el=ae.el,ve(_,Y,G)):Y=ae,ie&&To(ie),(Te=Y.props&&Y.props.onVnodeBeforeUpdate)&&rn(Te,re,Y,ae),yr(_,!0);const He=vc(_),Ot=_.subTree;_.subTree=He,R(Ot,He,p(Ot.el),L(Ot),_,x,H),Y.el=He.el,Re===null&&kE(_,He.el),se&&At(se,x),(Te=Y.props&&Y.props.onVnodeUpdated)&&At(()=>rn(Te,re,Y,ae),x)}else{let Y;const{el:ie,props:se}=E,{bm:re,m:ae,parent:Re}=_,Te=Ao(E);if(yr(_,!1),re&&To(re),!Te&&(Y=se&&se.onVnodeBeforeMount)&&rn(Y,Re,E),yr(_,!0),ie&&ke){const He=()=>{_.subTree=vc(_),ke(ie,_.subTree,_,x,null)};Te?E.type.__asyncLoader().then(()=>!_.isUnmounted&&He()):He()}else{const He=_.subTree=vc(_);R(null,He,O,j,_,x,H),E.el=He.el}if(ae&&At(ae,x),!Te&&(Y=se&&se.onVnodeMounted)){const He=E;At(()=>rn(Y,Re,He),x)}(E.shapeFlag&256||Re&&Ao(Re.vnode)&&Re.vnode.shapeFlag&256)&&_.a&&At(_.a,x),_.isMounted=!0,E=O=j=null}},z=_.effect=new Ul(W,$t,()=>Gl(q),_.scope),q=_.update=()=>{z.dirty&&z.run()};q.i=_,q.id=_.uid,yr(_,!0),q()},ve=(_,E,O)=>{E.component=_;const j=_.vnode.props;_.vnode=E,_.next=null,hE(_,E.props,j,O),mE(_,E.children,O),ar(),Xh(_),cr()},ge=(_,E,O,j,x,H,G,W,z=!1)=>{const q=_&&_.children,Y=_?_.shapeFlag:0,ie=E.children,{patchFlag:se,shapeFlag:re}=E;if(se>0){if(se&128){Ht(q,ie,O,j,x,H,G,W,z);return}else if(se&256){kt(q,ie,O,j,x,H,G,W,z);return}}re&8?(Y&16&&It(q,x,H),ie!==q&&d(O,ie)):Y&16?re&16?Ht(q,ie,O,j,x,H,G,W,z):It(q,x,H,!0):(Y&8&&d(O,""),re&16&&v(ie,O,j,x,H,G,W,z))},kt=(_,E,O,j,x,H,G,W,z)=>{_=_||ts,E=E||ts;const q=_.length,Y=E.length,ie=Math.min(q,Y);let se;for(se=0;se<ie;se++){const re=E[se]=z?qn(E[se]):on(E[se]);R(_[se],re,O,null,x,H,G,W,z)}q>Y?It(_,x,H,!0,!1,ie):v(E,O,j,x,H,G,W,z,ie)},Ht=(_,E,O,j,x,H,G,W,z)=>{let q=0;const Y=E.length;let ie=_.length-1,se=Y-1;for(;q<=ie&&q<=se;){const re=_[q],ae=E[q]=z?qn(E[q]):on(E[q]);if(zs(re,ae))R(re,ae,O,null,x,H,G,W,z);else break;q++}for(;q<=ie&&q<=se;){const re=_[ie],ae=E[se]=z?qn(E[se]):on(E[se]);if(zs(re,ae))R(re,ae,O,null,x,H,G,W,z);else break;ie--,se--}if(q>ie){if(q<=se){const re=se+1,ae=re<Y?E[re].el:j;for(;q<=se;)R(null,E[q]=z?qn(E[q]):on(E[q]),O,ae,x,H,G,W,z),q++}}else if(q>se)for(;q<=ie;)Fe(_[q],x,H,!0),q++;else{const re=q,ae=q,Re=new Map;for(q=ae;q<=se;q++){const _t=E[q]=z?qn(E[q]):on(E[q]);_t.key!=null&&Re.set(_t.key,q)}let Te,He=0;const Ot=se-ae+1;let Bt=!1,Ds=0;const Vn=new Array(Ot);for(q=0;q<Ot;q++)Vn[q]=0;for(q=re;q<=ie;q++){const _t=_[q];if(He>=Ot){Fe(_t,x,H,!0);continue}let jt;if(_t.key!=null)jt=Re.get(_t.key);else for(Te=ae;Te<=se;Te++)if(Vn[Te-ae]===0&&zs(_t,E[Te])){jt=Te;break}jt===void 0?Fe(_t,x,H,!0):(Vn[jt-ae]=q+1,jt>=Ds?Ds=jt:Bt=!0,R(_t,E[jt],O,null,x,H,G,W,z),He++)}const Hr=Bt?wE(Vn):ts;for(Te=Hr.length-1,q=Ot-1;q>=0;q--){const _t=ae+q,jt=E[_t],Wr=_t+1<Y?E[_t+1].el:j;Vn[q]===0?R(null,jt,O,Wr,x,H,G,W,z):Bt&&(Te<0||q!==Hr[Te]?Ut(jt,O,Wr,2):Te--)}}},Ut=(_,E,O,j,x=null)=>{const{el:H,type:G,transition:W,children:z,shapeFlag:q}=_;if(q&6){Ut(_.component.subTree,E,O,j);return}if(q&128){_.suspense.move(E,O,j);return}if(q&64){G.move(_,E,O,te);return}if(G===sn){r(H,E,O);for(let ie=0;ie<z.length;ie++)Ut(z[ie],E,O,j);r(_.anchor,E,O);return}if(G===Ec){F(_,E,O);return}if(j!==2&&q&1&&W)if(j===0)W.beforeEnter(H),r(H,E,O),At(()=>W.enter(H),x);else{const{leave:ie,delayLeave:se,afterLeave:re}=W,ae=()=>r(H,E,O),Re=()=>{ie(H,()=>{ae(),re&&re()})};se?se(H,ae,Re):Re()}else r(H,E,O)},Fe=(_,E,O,j=!1,x=!1)=>{const{type:H,props:G,ref:W,children:z,dynamicChildren:q,shapeFlag:Y,patchFlag:ie,dirs:se,cacheIndex:re}=_;if(ie===-2&&(x=!1),W!=null&&Xc(W,null,O,_,!0),re!=null&&(E.renderCache[re]=void 0),Y&256){E.ctx.deactivate(_);return}const ae=Y&1&&se,Re=!Ao(_);let Te;if(Re&&(Te=G&&G.onVnodeBeforeUnmount)&&rn(Te,E,_),Y&6)nn(_.component,O,j);else{if(Y&128){_.suspense.unmount(O,j);return}ae&&_r(_,null,E,"beforeUnmount"),Y&64?_.type.remove(_,E,O,te,j):q&&!q.hasOnce&&(H!==sn||ie>0&&ie&64)?It(q,E,O,!1,!0):(H===sn&&ie&384||!x&&Y&16)&&It(z,E,O),j&&Ue(_)}(Re&&(Te=G&&G.onVnodeUnmounted)||ae)&&At(()=>{Te&&rn(Te,E,_),ae&&_r(_,null,E,"unmounted")},O)},Ue=_=>{const{type:E,el:O,anchor:j,transition:x}=_;if(E===sn){Dn(O,j);return}if(E===Ec){ee(_);return}const H=()=>{s(O),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(_.shapeFlag&1&&x&&!x.persisted){const{leave:G,delayLeave:W}=x,z=()=>G(O,H);W?W(_.el,H,z):z()}else H()},Dn=(_,E)=>{let O;for(;_!==E;)O=g(_),s(_),_=O;s(E)},nn=(_,E,O)=>{const{bum:j,scope:x,update:H,subTree:G,um:W,m:z,a:q}=_;id(z),id(q),j&&To(j),x.stop(),H&&(H.active=!1,Fe(G,_,E,O)),W&&At(W,E),At(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},It=(_,E,O,j=!1,x=!1,H=0)=>{for(let G=H;G<_.length;G++)Fe(_[G],E,O,j,x)},L=_=>{if(_.shapeFlag&6)return L(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=g(_.anchor||_.el),O=E&&E[gE];return O?g(O):E};let Z=!1;const Q=(_,E,O)=>{_==null?E._vnode&&Fe(E._vnode,null,null,!0):R(E._vnode||null,_,E,null,null,null,O),E._vnode=_,Z||(Z=!0,Xh(),Hp(),Z=!1)},te={p:R,um:Fe,m:Ut,r:Ue,mt:gt,mc:v,pc:ge,pbc:A,n:L,o:t};let Ee,ke;return{render:Q,hydrate:Ee,createApp:lE(Q,Ee)}}function yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function yr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function EE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=qn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&dm(o,c)),c.type===Ta&&(c.el=o.el)}}function wE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function fm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fm(e)}function id(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const TE=Symbol.for("v-scx"),IE=()=>ln(TE),mo={};function Ro(t,e,n){return pm(t,e,n)}function pm(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Le){if(e&&i){const J=e;e=(...I)=>{J(...I),le()}}const l=dt,u=J=>r===!0?J:Wn(J,r===!1?1:void 0);let d,p=!1,g=!1;if(Ct(t)?(d=()=>t.value,p=hs(t)):ii(t)?(d=()=>u(t),p=!0):ce(t)?(g=!0,p=t.some(J=>ii(J)||hs(J)),d=()=>t.map(J=>{if(Ct(J))return J.value;if(ii(J))return u(J);if(pe(J))return Xn(J,l,2)})):pe(t)?e?d=()=>Xn(t,l,2):d=()=>(y&&y(),Qt(t,l,3,[b])):d=$t,e&&r){const J=d;d=()=>Wn(J())}let y,b=J=>{y=F.onStop=()=>{Xn(J,l,4),y=F.onStop=void 0}},R;if(Ia)if(b=$t,e?n&&Qt(e,l,3,[d(),g?[]:void 0,b]):d(),s==="sync"){const J=IE();R=J.__watcherHandles||(J.__watcherHandles=[])}else return $t;let P=g?new Array(t.length).fill(mo):mo;const B=()=>{if(!(!F.active||!F.dirty))if(e){const J=F.run();(r||p||(g?J.some((I,v)=>rr(I,P[v])):rr(J,P)))&&(y&&y(),Qt(e,l,3,[J,P===mo?void 0:g&&P[0]===mo?[]:P,b]),P=J)}else F.run()};B.allowRecurse=!!e;let U;s==="sync"?U=B:s==="post"?U=()=>At(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),U=()=>Gl(B));const F=new Ul(d,$t,U),ee=dv(),le=()=>{F.stop(),ee&&Ll(ee.effects,F)};return e?n?B():P=F.run():s==="post"?At(F.run.bind(F),l&&l.suspense):F.run(),R&&R.push(le),le}function AE(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?mm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Di(this),c=pm(s,i.bind(r),n);return o(),c}function mm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Wn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ct(t))Wn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Wn(t[r],e,n);else if(da(t)||ns(t))t.forEach(r=>{Wn(r,e,n)});else if(yp(t)){for(const r in t)Wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Wn(t[r],e,n)}return t}const bE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function RE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&bE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Je(d)?d.trim():d)),o.number&&(s=n.map(Bo)));let c,l=r[c=mc(e)]||r[c=mc(Jt(e))];!l&&i&&(l=r[c=mc(Fr(e))]),l&&Qt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qt(u,t,6,s)}}function gm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const d=gm(u,e,!0);d&&(c=!0,ft(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):ft(o,i),De(t)&&r.set(t,o),o)}function wa(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Fr(e))||Ie(t,e))}function vc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:g,setupState:y,ctx:b,inheritAttrs:R}=t,P=jo(t);let B,U;try{if(n.shapeFlag&4){const ee=s||r,le=ee;B=on(u.call(le,ee,d,p,y,g,b)),U=c}else{const ee=e;B=on(ee.length>1?ee(p,{attrs:c,slots:o,emit:l}):ee(p,null)),U=e.props?c:SE(c)}}catch(ee){ai.length=0,ya(ee,t,1),B=Ce(kr)}let F=B;if(U&&R!==!1){const ee=Object.keys(U),{shapeFlag:le}=F;ee.length&&le&7&&(i&&ee.some(xl)&&(U=PE(U,i)),F=ds(F,U,!1,!0))}return n.dirs&&(F=ds(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),B=F,jo(P),B}const SE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},PE=(t,e)=>{const n={};for(const r in t)(!xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function CE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?od(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!wa(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?od(r,o,u):!0:!!o;return!1}function od(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wa(n,i))return!0}return!1}function kE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const OE=t=>t.__isSuspense;function NE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Bv(t)}const sn=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),ai=[];let xt=null;function Be(t=!1){ai.push(xt=t?null:[])}function DE(){ai.pop(),xt=ai[ai.length-1]||null}let yi=1;function ad(t){yi+=t,t<0&&xt&&(xt.hasOnce=!0)}function _m(t){return t.dynamicChildren=yi>0?xt||ts:null,DE(),yi>0&&xt&&xt.push(t),t}function qe(t,e,n,r,s,i){return _m(V(t,e,n,r,s,i,!0))}function VE(t,e,n,r,s){return _m(Ce(t,e,n,r,s,!0))}function Zc(t){return t?t.__v_isVNode===!0:!1}function zs(t,e){return t.type===e.type&&t.key===e.key}const ym=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ct(t)||pe(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===sn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ym(e),ref:e&&So(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return c?(Yl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),yi>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const Ce=xE;function xE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zv)&&(t=kr),Zc(t)){const c=ds(t,e,!0);return n&&Yl(c,n),yi>0&&!i&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag=-2,c}if(KE(t)&&(t=t.__vccOpts),e){e=LE(e);let{class:c,style:l}=e;c&&!Je(c)&&(e.class=Tr(c)),De(l)&&(Mp(l)&&!ce(l)&&(l=ft({},l)),e.style=Fl(l))}const o=Je(t)?1:OE(t)?128:_E(t)?64:De(t)?4:pe(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function LE(t){return t?Mp(t)||im(t)?ft({},t):t:null}function ds(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?ME(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ym(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(So(e)):[i,So(e)]:So(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==sn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Gp(d,l.clone(d)),d}function ct(t=" ",e=0){return Ce(Ta,null,t,e)}function An(t="",e=!1){return e?(Be(),VE(kr,null,t)):Ce(kr,null,t)}function on(t){return t==null||typeof t=="boolean"?Ce(kr):ce(t)?Ce(sn,null,t.slice()):typeof t=="object"?qn(t):Ce(Ta,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function Yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!im(e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[ct(e)]):n=8);t.children=e,t.shapeFlag|=n}function ME(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tr([e.class,r.class]));else if(s==="style")e.style=Fl([e.style,r.style]);else if(ha(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){Qt(t,e,7,[n,r])}const FE=nm();let UE=0;function BE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||FE,i={uid:UE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new uv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:am(r,s),emitsOptions:gm(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=RE.bind(null,i),t.ce&&t.ce(i),i}let dt=null,qo,el;{const t=Ep(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),el=e("__VUE_SSR_SETTERS__",n=>Ia=n)}const Di=t=>{const e=dt;return qo(t),t.scope.on(),()=>{t.scope.off(),qo(e)}},cd=()=>{dt&&dt.scope.off(),qo(null)};function vm(t){return t.vnode.shapeFlag&4}let Ia=!1;function jE(t,e=!1,n=!1){e&&el(e);const{props:r,children:s}=t.vnode,i=vm(t);uE(t,r,i,e),pE(t,s,n);const o=i?$E(t,e):void 0;return e&&el(!1),o}function $E(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nE);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?HE(t):null,i=Di(t);ar();const o=Xn(r,t,0,[t.props,s]);if(cr(),i(),gp(o)){if(o.then(cd,cd),e)return o.then(c=>{ld(t,c,e)}).catch(c=>{ya(c,t,0)});t.asyncDep=o}else ld(t,o,e)}else Em(t,e)}function ld(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=jp(e)),Em(t,n)}let ud;function Em(t,e,n){const r=t.type;if(!t.render){if(!e&&ud&&!r.render){const s=r.template||Ql(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=ft(ft({isCustomElement:i,delimiters:c},o),l);r.render=ud(s,u)}}t.render=r.render||$t}{const s=Di(t);ar();try{rE(t)}finally{cr(),s()}}}const qE={get(t,e){return Pt(t,"get",""),t[e]}};function HE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,qE),slots:t.slots,emit:t.emit,expose:e}}function Aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jp(Nv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oi)return oi[n](t)},has(e,n){return n in e||n in oi}})):t.proxy}function WE(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function KE(t){return pe(t)&&"__vccOpts"in t}const zt=(t,e)=>Dv(t,e,Ia);function wm(t,e,n){const r=arguments.length;return r===2?De(e)&&!ce(e)?Zc(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zc(n)&&(n=[n]),Ce(t,e,n))}const zE="3.4.37";/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const GE="http://www.w3.org/2000/svg",QE="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,hd=vn&&vn.createElement("template"),JE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(GE,t):e==="mathml"?vn.createElementNS(QE,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=hd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},YE=Symbol("_vtc");function XE(t,e,n){const r=t[YE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dd=Symbol("_vod"),ZE=Symbol("_vsh"),ew=Symbol(""),tw=/(^|;)\s*display\s*:/;function nw(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Po(r,c,"")}else for(const o in e)n[o]==null&&Po(r,o,"");for(const o in n)o==="display"&&(i=!0),Po(r,o,n[o])}else if(s){if(e!==n){const o=r[ew];o&&(n+=";"+o),r.cssText=n,i=tw.test(n)}}else e&&t.removeAttribute("style");dd in t&&(t[dd]=i?r.display:"",t[ZE]&&(r.display="none"))}const fd=/\s*!important$/;function Po(t,e,n){if(ce(n))n.forEach(r=>Po(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rw(t,e);fd.test(n)?t.setProperty(Fr(r),n.replace(fd,""),"important"):t[r]=n}}const pd=["Webkit","Moz","ms"],wc={};function rw(t,e){const n=wc[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return wc[e]=r;r=pa(r);for(let s=0;s<pd.length;s++){const i=pd[s]+r;if(i in t)return wc[e]=i}return e}const md="http://www.w3.org/1999/xlink";function gd(t,e,n,r,s,i=av(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(md,e.slice(6,e.length)):t.setAttributeNS(md,e,n):n==null||i&&!wp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":pn(n)?String(n):n)}function sw(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=wp(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function wr(t,e,n,r){t.addEventListener(e,n,r)}function iw(t,e,n,r){t.removeEventListener(e,n,r)}const _d=Symbol("_vei");function ow(t,e,n,r,s=null){const i=t[_d]||(t[_d]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=aw(e);if(r){const u=i[e]=uw(r,s);wr(t,c,u,l)}else o&&(iw(t,c,o,l),i[e]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function aw(t){let e;if(yd.test(t)){e={};let r;for(;r=t.match(yd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let Tc=0;const cw=Promise.resolve(),lw=()=>Tc||(cw.then(()=>Tc=0),Tc=Date.now());function uw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(hw(r,n.value),e,5,[r])};return n.value=t,n.attached=lw(),n}function hw(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?XE(t,r,o):e==="style"?nw(t,n,r):ha(e)?xl(e)||ow(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fw(t,e,r,o))?(sw(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gd(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gd(t,e,r,o))};function fw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&vd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vd(e)&&Je(n)?!1:e in t}const Ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>To(e,n):e};function pw(t){t.target.composing=!0}function Ed(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const os=Symbol("_assign"),Gt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[os]=Ho(s);const i=r||s.props&&s.props.type==="number";wr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Bo(c)),t[os](c)}),n&&wr(t,"change",()=>{t.value=t.value.trim()}),e||(wr(t,"compositionstart",pw),wr(t,"compositionend",Ed),wr(t,"change",Ed))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[os]=Ho(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Bo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Wo={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=da(e);wr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Bo(Ko(o)):Ko(o));t[os](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,zl(()=>{t._assigning=!1})}),t[os]=Ho(r)},mounted(t,{value:e,modifiers:{number:n}}){wd(t,e)},beforeUpdate(t,e,n){t[os]=Ho(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||wd(t,e)}};function wd(t,e,n){const r=t.multiple,s=ce(e);if(!(r&&!s&&!da(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Ko(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=lv(e,l)>-1}else c.selected=e.has(l);else if(ma(Ko(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ko(t){return"_value"in t?t._value:t.value}const mw=["ctrl","shift","alt","meta"],gw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mw.some(n=>t[`${n}Key`]&&!e.includes(n))},Tm=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=gw[e[o]];if(c&&c(s,e))return}return t(s,...i)})},_w=ft({patchProp:dw},JE);let Td;function yw(){return Td||(Td=yE(_w))}const vw=(...t)=>{const e=yw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ww(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Ew(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ew(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ww(t){return Je(t)?document.querySelector(t):t}const Ur=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Tw={},Iw={class:"container"},Aw={class:"d-flex justify-content-center py-3"},bw={class:"nav nav-pills"},Rw={class:"nav-item"},Sw={class:"nav-item"},Pw={class:"nav-item"},Cw={class:"nav-item"},kw={class:"nav-item"},Ow={class:"nav-item"},Nw={class:"nav-item"},Dw={class:"nav-item"},Vw={class:"nav-item"};function xw(t,e){const n=zc("router-link");return Be(),qe("div",Iw,[V("header",Aw,[V("ul",bw,[V("li",Rw,[Ce(n,{to:"/",class:"nav-link","active-class":"active","aria-current":"page"},{default:Et(()=>[ct("Home (Week 10)")]),_:1})]),V("li",Sw,[Ce(n,{to:"/about",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("About")]),_:1})]),V("li",Pw,[Ce(n,{to:"/FireLogin",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("Firebase Login")]),_:1})]),V("li",Cw,[Ce(n,{to:"/FireRegister",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("Firebase Register")]),_:1})]),V("li",kw,[Ce(n,{to:"/addBook",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("Add Book")]),_:1})]),V("li",Ow,[Ce(n,{to:"/GetBookCount",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("Get Book Count")]),_:1})]),V("li",Nw,[Ce(n,{to:"/WeatherCheck",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("Get Weather")]),_:1})]),V("li",Dw,[Ce(n,{to:"/CountBookAPI",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("Count Book API")]),_:1})]),V("li",Vw,[Ce(n,{to:"/GetAllBookAPI",class:"nav-link","active-class":"active"},{default:Et(()=>[ct("Get All Book API")]),_:1})])])])])}const Lw=Ur(Tw,[["render",xw],["__scopeId","data-v-c198abcb"]]);function Im(t,e){return function(){return t.apply(e,arguments)}}const{toString:Mw}=Object.prototype,{getPrototypeOf:Xl}=Object,ba=(t=>e=>{const n=Mw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),tn=t=>(t=t.toLowerCase(),e=>ba(e)===t),Ra=t=>e=>typeof e===t,{isArray:As}=Array,vi=Ra("undefined");function Fw(t){return t!==null&&!vi(t)&&t.constructor!==null&&!vi(t.constructor)&&Mt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Am=tn("ArrayBuffer");function Uw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Am(t.buffer),e}const Bw=Ra("string"),Mt=Ra("function"),bm=Ra("number"),Sa=t=>t!==null&&typeof t=="object",jw=t=>t===!0||t===!1,Co=t=>{if(ba(t)!=="object")return!1;const e=Xl(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},$w=tn("Date"),qw=tn("File"),Hw=tn("Blob"),Ww=tn("FileList"),Kw=t=>Sa(t)&&Mt(t.pipe),zw=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Mt(t.append)&&((e=ba(t))==="formdata"||e==="object"&&Mt(t.toString)&&t.toString()==="[object FormData]"))},Gw=tn("URLSearchParams"),[Qw,Jw,Yw,Xw]=["ReadableStream","Request","Response","Headers"].map(tn),Zw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),As(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,t[c],c,t)}}function Rm(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Sm=t=>!vi(t)&&t!==Ir;function tl(){const{caseless:t}=Sm(this)&&this||{},e={},n=(r,s)=>{const i=t&&Rm(e,s)||s;Co(e[i])&&Co(r)?e[i]=tl(e[i],r):Co(r)?e[i]=tl({},r):As(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Vi(arguments[r],n);return e}const eT=(t,e,n,{allOwnKeys:r}={})=>(Vi(e,(s,i)=>{n&&Mt(s)?t[i]=Im(s,n):t[i]=s},{allOwnKeys:r}),t),tT=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),nT=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},rT=(t,e,n,r)=>{let s,i,o;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!c[o]&&(e[o]=t[o],c[o]=!0);t=n!==!1&&Xl(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},sT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},iT=t=>{if(!t)return null;if(As(t))return t;let e=t.length;if(!bm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},oT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Xl(Uint8Array)),aT=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},cT=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},lT=tn("HTMLFormElement"),uT=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Id=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),hT=tn("RegExp"),Pm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Vi(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},dT=t=>{Pm(t,(e,n)=>{if(Mt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Mt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},fT=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return As(t)?r(t):r(String(t).split(e)),n},pT=()=>{},mT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Ic="abcdefghijklmnopqrstuvwxyz",Ad="0123456789",Cm={DIGIT:Ad,ALPHA:Ic,ALPHA_DIGIT:Ic+Ic.toUpperCase()+Ad},gT=(t=16,e=Cm.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function _T(t){return!!(t&&Mt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const yT=t=>{const e=new Array(10),n=(r,s)=>{if(Sa(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=As(r)?[]:{};return Vi(r,(o,c)=>{const l=n(o,s+1);!vi(l)&&(i[c]=l)}),e[s]=void 0,i}}return r};return n(t,0)},vT=tn("AsyncFunction"),ET=t=>t&&(Sa(t)||Mt(t))&&Mt(t.then)&&Mt(t.catch),km=((t,e)=>t?setImmediate:e?((n,r)=>(Ir.addEventListener("message",({source:s,data:i})=>{s===Ir&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Ir.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Mt(Ir.postMessage)),wT=typeof queueMicrotask<"u"?queueMicrotask.bind(Ir):typeof process<"u"&&process.nextTick||km,D={isArray:As,isArrayBuffer:Am,isBuffer:Fw,isFormData:zw,isArrayBufferView:Uw,isString:Bw,isNumber:bm,isBoolean:jw,isObject:Sa,isPlainObject:Co,isReadableStream:Qw,isRequest:Jw,isResponse:Yw,isHeaders:Xw,isUndefined:vi,isDate:$w,isFile:qw,isBlob:Hw,isRegExp:hT,isFunction:Mt,isStream:Kw,isURLSearchParams:Gw,isTypedArray:oT,isFileList:Ww,forEach:Vi,merge:tl,extend:eT,trim:Zw,stripBOM:tT,inherits:nT,toFlatObject:rT,kindOf:ba,kindOfTest:tn,endsWith:sT,toArray:iT,forEachEntry:aT,matchAll:cT,isHTMLForm:lT,hasOwnProperty:Id,hasOwnProp:Id,reduceDescriptors:Pm,freezeMethods:dT,toObjectSet:fT,toCamelCase:uT,noop:pT,toFiniteNumber:mT,findKey:Rm,global:Ir,isContextDefined:Sm,ALPHABET:Cm,generateString:gT,isSpecCompliantForm:_T,toJSONObject:yT,isAsyncFn:vT,isThenable:ET,setImmediate:km,asap:wT};function me(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}D.inherits(me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const Om=me.prototype,Nm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Nm[t]={value:t}});Object.defineProperties(me,Nm);Object.defineProperty(Om,"isAxiosError",{value:!0});me.from=(t,e,n,r,s,i)=>{const o=Object.create(Om);return D.toFlatObject(t,o,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),me.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const TT=null;function nl(t){return D.isPlainObject(t)||D.isArray(t)}function Dm(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function bd(t,e,n){return t?t.concat(e).map(function(s,i){return s=Dm(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function IT(t){return D.isArray(t)&&!t.some(nl)}const AT=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function Pa(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,P){return!D.isUndefined(P[R])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(s))throw new TypeError("visitor must be a function");function u(b){if(b===null)return"";if(D.isDate(b))return b.toISOString();if(!l&&D.isBlob(b))throw new me("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(b)||D.isTypedArray(b)?l&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function d(b,R,P){let B=b;if(b&&!P&&typeof b=="object"){if(D.endsWith(R,"{}"))R=r?R:R.slice(0,-2),b=JSON.stringify(b);else if(D.isArray(b)&&IT(b)||(D.isFileList(b)||D.endsWith(R,"[]"))&&(B=D.toArray(b)))return R=Dm(R),B.forEach(function(F,ee){!(D.isUndefined(F)||F===null)&&e.append(o===!0?bd([R],ee,i):o===null?R:R+"[]",u(F))}),!1}return nl(b)?!0:(e.append(bd(P,R,i),u(b)),!1)}const p=[],g=Object.assign(AT,{defaultVisitor:d,convertValue:u,isVisitable:nl});function y(b,R){if(!D.isUndefined(b)){if(p.indexOf(b)!==-1)throw Error("Circular reference detected in "+R.join("."));p.push(b),D.forEach(b,function(B,U){(!(D.isUndefined(B)||B===null)&&s.call(e,B,D.isString(U)?U.trim():U,R,g))===!0&&y(B,R?R.concat(U):[U])}),p.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return y(t),e}function Rd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Zl(t,e){this._pairs=[],t&&Pa(t,this,e)}const Vm=Zl.prototype;Vm.append=function(e,n){this._pairs.push([e,n])};Vm.toString=function(e){const n=e?function(r){return e.call(this,r,Rd)}:Rd;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function bT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xm(t,e,n){if(!e)return t;const r=n&&n.encode||bT,s=n&&n.serialize;let i;if(s?i=s(e,n):i=D.isURLSearchParams(e)?e.toString():new Zl(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Sd{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Lm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},RT=typeof URLSearchParams<"u"?URLSearchParams:Zl,ST=typeof FormData<"u"?FormData:null,PT=typeof Blob<"u"?Blob:null,CT={isBrowser:!0,classes:{URLSearchParams:RT,FormData:ST,Blob:PT},protocols:["http","https","file","blob","url","data"]},eu=typeof window<"u"&&typeof document<"u",rl=typeof navigator=="object"&&navigator||void 0,kT=eu&&(!rl||["ReactNative","NativeScript","NS"].indexOf(rl.product)<0),OT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",NT=eu&&window.location.href||"http://localhost",DT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:eu,hasStandardBrowserEnv:kT,hasStandardBrowserWebWorkerEnv:OT,navigator:rl,origin:NT},Symbol.toStringTag,{value:"Module"})),Rt={...DT,...CT};function VT(t,e){return Pa(t,new Rt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Rt.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function xT(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function LT(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Mm(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=n.length;return o=!o&&D.isArray(s)?s.length:o,l?(D.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!D.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&D.isArray(s[o])&&(s[o]=LT(s[o])),!c)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(r,s)=>{e(xT(r),s,n,0)}),n}return null}function MT(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const xi={transitional:Lm,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=D.isObject(e);if(i&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return s?JSON.stringify(Mm(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return VT(e,this.formSerializer).toString();if((c=D.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Pa(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),MT(e)):e}],transformResponse:[function(e){const n=this.transitional||xi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(c){if(o)throw c.name==="SyntaxError"?me.from(c,me.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rt.classes.FormData,Blob:Rt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{xi.headers[t]={}});const FT=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),UT=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&FT[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Pd=Symbol("internals");function Gs(t){return t&&String(t).trim().toLowerCase()}function ko(t){return t===!1||t==null?t:D.isArray(t)?t.map(ko):String(t)}function BT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const jT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ac(t,e,n,r,s){if(D.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!D.isString(e)){if(D.isString(r))return e.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(e)}}function $T(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function qT(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class St{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(c,l,u){const d=Gs(l);if(!d)throw new Error("header name must be a non-empty string");const p=D.findKey(s,d);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||l]=ko(c))}const o=(c,l)=>D.forEach(c,(u,d)=>i(u,d,l));if(D.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(D.isString(e)&&(e=e.trim())&&!jT(e))o(UT(e),n);else if(D.isHeaders(e))for(const[c,l]of e.entries())i(l,c,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Gs(e),e){const r=D.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return BT(s);if(D.isFunction(n))return n.call(this,s,r);if(D.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Gs(e),e){const r=D.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ac(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Gs(o),o){const c=D.findKey(r,o);c&&(!n||Ac(r,r[c],c,n))&&(delete r[c],s=!0)}}return D.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ac(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return D.forEach(this,(s,i)=>{const o=D.findKey(r,i);if(o){n[o]=ko(s),delete n[i];return}const c=e?$T(i):String(i).trim();c!==i&&delete n[i],n[c]=ko(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Pd]=this[Pd]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=Gs(o);r[c]||(qT(s,o),r[c]=!0)}return D.isArray(e)?e.forEach(i):i(e),this}}St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(St.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});D.freezeMethods(St);function bc(t,e){const n=this||xi,r=e||n,s=St.from(r.headers);let i=r.data;return D.forEach(t,function(c){i=c.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Fm(t){return!!(t&&t.__CANCEL__)}function bs(t,e,n){me.call(this,t??"canceled",me.ERR_CANCELED,e,n),this.name="CanceledError"}D.inherits(bs,me,{__CANCEL__:!0});function Um(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function HT(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function WT(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),d=r[i];o||(o=u),n[s]=l,r[s]=u;let p=i,g=0;for(;p!==s;)g+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const y=d&&u-d;return y?Math.round(g*1e3/y):void 0}}function KT(t,e){let n=0,r=1e3/e,s,i;const o=(u,d=Date.now())=>{n=d,s=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const d=Date.now(),p=d-n;p>=r?o(u,d):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const zo=(t,e,n=3)=>{let r=0;const s=WT(50,250);return KT(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,l=o-r,u=s(l),d=o<=c;r=o;const p={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:u||void 0,estimated:u&&c&&d?(c-o)/u:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};t(p)},n)},Cd=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},kd=t=>(...e)=>D.asap(()=>t(...e)),zT=Rt.hasStandardBrowserEnv?function(){const e=Rt.navigator&&/(msie|trident)/i.test(Rt.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=D.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),GT=Rt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];D.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),D.isString(r)&&o.push("path="+r),D.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function QT(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function JT(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Bm(t,e){return t&&!QT(e)?JT(t,e):e}const Od=t=>t instanceof St?{...t}:t;function Or(t,e){e=e||{};const n={};function r(u,d,p){return D.isPlainObject(u)&&D.isPlainObject(d)?D.merge.call({caseless:p},u,d):D.isPlainObject(d)?D.merge({},d):D.isArray(d)?d.slice():d}function s(u,d,p){if(D.isUndefined(d)){if(!D.isUndefined(u))return r(void 0,u,p)}else return r(u,d,p)}function i(u,d){if(!D.isUndefined(d))return r(void 0,d)}function o(u,d){if(D.isUndefined(d)){if(!D.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function c(u,d,p){if(p in e)return r(u,d);if(p in t)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,d)=>s(Od(u),Od(d),!0)};return D.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=l[d]||s,g=p(t[d],e[d],d);D.isUndefined(g)&&p!==c||(n[d]=g)}),n}const jm=t=>{const e=Or({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=e;e.headers=o=St.from(o),e.url=xm(Bm(e.baseURL,e.url),t.params,t.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let l;if(D.isFormData(n)){if(Rt.hasStandardBrowserEnv||Rt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...d]=l?l.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Rt.hasStandardBrowserEnv&&(r&&D.isFunction(r)&&(r=r(e)),r||r!==!1&&zT(e.url))){const u=s&&i&&GT.read(i);u&&o.set(s,u)}return e},YT=typeof XMLHttpRequest<"u",XT=YT&&function(t){return new Promise(function(n,r){const s=jm(t);let i=s.data;const o=St.from(s.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:u}=s,d,p,g,y,b;function R(){y&&y(),b&&b(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let P=new XMLHttpRequest;P.open(s.method.toUpperCase(),s.url,!0),P.timeout=s.timeout;function B(){if(!P)return;const F=St.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),le={data:!c||c==="text"||c==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:F,config:t,request:P};Um(function(I){n(I),R()},function(I){r(I),R()},le),P=null}"onloadend"in P?P.onloadend=B:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(B)},P.onabort=function(){P&&(r(new me("Request aborted",me.ECONNABORTED,t,P)),P=null)},P.onerror=function(){r(new me("Network Error",me.ERR_NETWORK,t,P)),P=null},P.ontimeout=function(){let ee=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const le=s.transitional||Lm;s.timeoutErrorMessage&&(ee=s.timeoutErrorMessage),r(new me(ee,le.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,t,P)),P=null},i===void 0&&o.setContentType(null),"setRequestHeader"in P&&D.forEach(o.toJSON(),function(ee,le){P.setRequestHeader(le,ee)}),D.isUndefined(s.withCredentials)||(P.withCredentials=!!s.withCredentials),c&&c!=="json"&&(P.responseType=s.responseType),u&&([g,b]=zo(u,!0),P.addEventListener("progress",g)),l&&P.upload&&([p,y]=zo(l),P.upload.addEventListener("progress",p),P.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(d=F=>{P&&(r(!F||F.type?new bs(null,t,P):F),P.abort(),P=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const U=HT(s.url);if(U&&Rt.protocols.indexOf(U)===-1){r(new me("Unsupported protocol "+U+":",me.ERR_BAD_REQUEST,t));return}P.send(i||null)})},ZT=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,c();const d=u instanceof Error?u:this.reason;r.abort(d instanceof me?d:new bs(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,i(new me(`timeout ${e} of ms exceeded`,me.ETIMEDOUT))},e);const c=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>D.asap(c),l}},eI=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},tI=async function*(t,e){for await(const n of nI(t))yield*eI(n,e)},nI=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Nd=(t,e,n,r)=>{const s=tI(t,e);let i=0,o,c=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await s.next();if(u){c(),l.close();return}let p=d.byteLength;if(n){let g=i+=p;n(g)}l.enqueue(new Uint8Array(d))}catch(u){throw c(u),u}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},Ca=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",$m=Ca&&typeof ReadableStream=="function",rI=Ca&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),qm=(t,...e)=>{try{return!!t(...e)}catch{return!1}},sI=$m&&qm(()=>{let t=!1;const e=new Request(Rt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Dd=64*1024,sl=$m&&qm(()=>D.isReadableStream(new Response("").body)),Go={stream:sl&&(t=>t.body)};Ca&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Go[e]&&(Go[e]=D.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new me(`Response type '${e}' is not supported`,me.ERR_NOT_SUPPORT,r)})})})(new Response);const iI=async t=>{if(t==null)return 0;if(D.isBlob(t))return t.size;if(D.isSpecCompliantForm(t))return(await new Request(Rt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(D.isArrayBufferView(t)||D.isArrayBuffer(t))return t.byteLength;if(D.isURLSearchParams(t)&&(t=t+""),D.isString(t))return(await rI(t)).byteLength},oI=async(t,e)=>{const n=D.toFiniteNumber(t.getContentLength());return n??iI(e)},aI=Ca&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:c,onUploadProgress:l,responseType:u,headers:d,withCredentials:p="same-origin",fetchOptions:g}=jm(t);u=u?(u+"").toLowerCase():"text";let y=ZT([s,i&&i.toAbortSignal()],o),b;const R=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let P;try{if(l&&sI&&n!=="get"&&n!=="head"&&(P=await oI(d,r))!==0){let le=new Request(e,{method:"POST",body:r,duplex:"half"}),J;if(D.isFormData(r)&&(J=le.headers.get("content-type"))&&d.setContentType(J),le.body){const[I,v]=Cd(P,zo(kd(l)));r=Nd(le.body,Dd,I,v)}}D.isString(p)||(p=p?"include":"omit");const B="credentials"in Request.prototype;b=new Request(e,{...g,signal:y,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:B?p:void 0});let U=await fetch(b);const F=sl&&(u==="stream"||u==="response");if(sl&&(c||F&&R)){const le={};["status","statusText","headers"].forEach(T=>{le[T]=U[T]});const J=D.toFiniteNumber(U.headers.get("content-length")),[I,v]=c&&Cd(J,zo(kd(c),!0))||[];U=new Response(Nd(U.body,Dd,I,()=>{v&&v(),R&&R()}),le)}u=u||"text";let ee=await Go[D.findKey(Go,u)||"text"](U,t);return!F&&R&&R(),await new Promise((le,J)=>{Um(le,J,{data:ee,headers:St.from(U.headers),status:U.status,statusText:U.statusText,config:t,request:b})})}catch(B){throw R&&R(),B&&B.name==="TypeError"&&/fetch/i.test(B.message)?Object.assign(new me("Network Error",me.ERR_NETWORK,t,b),{cause:B.cause||B}):me.from(B,B&&B.code,t,b)}}),il={http:TT,xhr:XT,fetch:aI};D.forEach(il,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Vd=t=>`- ${t}`,cI=t=>D.isFunction(t)||t===null||t===!1,Hm={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!cI(n)&&(r=il[(o=String(n)).toLowerCase()],r===void 0))throw new me(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Vd).join(`
`):" "+Vd(i[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:il};function Rc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new bs(null,t)}function xd(t){return Rc(t),t.headers=St.from(t.headers),t.data=bc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Hm.getAdapter(t.adapter||xi.adapter)(t).then(function(r){return Rc(t),r.data=bc.call(t,t.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return Fm(r)||(Rc(t),r&&r.response&&(r.response.data=bc.call(t,t.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}const Wm="1.7.7",tu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{tu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ld={};tu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Wm+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new me(s(o," has been removed"+(n?" in "+n:"")),me.ERR_DEPRECATED);return n&&!Ld[o]&&(Ld[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,c):!0}};function lI(t,e,n){if(typeof t!="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const c=t[i],l=c===void 0||o(c,i,t);if(l!==!0)throw new me("option "+i+" must be "+l,me.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new me("Unknown option "+i,me.ERR_BAD_OPTION)}}const ol={assertOptions:lI,validators:tu},Un=ol.validators;class Sr{constructor(e){this.defaults=e,this.interceptors={request:new Sd,response:new Sd}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Or(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ol.assertOptions(r,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),s!=null&&(D.isFunction(s)?n.paramsSerializer={serialize:s}:ol.assertOptions(s,{encode:Un.function,serialize:Un.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&D.merge(i.common,i[n.method]);i&&D.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=St.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(n)===!1||(l=l&&R.synchronous,c.unshift(R.fulfilled,R.rejected))});const u=[];this.interceptors.response.forEach(function(R){u.push(R.fulfilled,R.rejected)});let d,p=0,g;if(!l){const b=[xd.bind(this),void 0];for(b.unshift.apply(b,c),b.push.apply(b,u),g=b.length,d=Promise.resolve(n);p<g;)d=d.then(b[p++],b[p++]);return d}g=c.length;let y=n;for(p=0;p<g;){const b=c[p++],R=c[p++];try{y=b(y)}catch(P){R.call(this,P);break}}try{d=xd.call(this,y)}catch(b){return Promise.reject(b)}for(p=0,g=u.length;p<g;)d=d.then(u[p++],u[p++]);return d}getUri(e){e=Or(this.defaults,e);const n=Bm(e.baseURL,e.url);return xm(n,e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(e){Sr.prototype[e]=function(n,r){return this.request(Or(r||{},{method:e,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,c){return this.request(Or(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Sr.prototype[e]=n(),Sr.prototype[e+"Form"]=n(!0)});class nu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new bs(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new nu(function(s){e=s}),cancel:e}}}function uI(t){return function(n){return t.apply(null,n)}}function hI(t){return D.isObject(t)&&t.isAxiosError===!0}const al={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(al).forEach(([t,e])=>{al[e]=t});function Km(t){const e=new Sr(t),n=Im(Sr.prototype.request,e);return D.extend(n,Sr.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Km(Or(t,s))},n}const Me=Km(xi);Me.Axios=Sr;Me.CanceledError=bs;Me.CancelToken=nu;Me.isCancel=Fm;Me.VERSION=Wm;Me.toFormData=Pa;Me.AxiosError=me;Me.Cancel=Me.CanceledError;Me.all=function(e){return Promise.all(e)};Me.spread=uI;Me.isAxiosError=hI;Me.mergeConfig=Or;Me.AxiosHeaders=St;Me.formToJSON=t=>Mm(D.isHTMLForm(t)?new FormData(t):t);Me.getAdapter=Hm.getAdapter;Me.HttpStatusCode=al;Me.default=Me;const dI={data(){return{jsondata:null,error:null}},mounted(){this.getBookCountAPI()},methods:{async getBookCountAPI(){try{const t=await Me.get("https://countbooks-2oaioi6tkq-uc.a.run.app");this.jsondata=t.data,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error=t,this.count=null}}}};function fI(t,e,n,r,s,i){return Be(),qe("pre",null,Dt(s.jsondata),1)}const zm=Ur(dI,[["render",fI]]),pI={name:"App",components:{BHeader:Lw,CountBookAPI:zm},computed:{showHeader(){return this.$route.name!=="CountBookAPI"},isActiveLink(){return t=>this.$route.path===t}},methods:{logout(){isAuthenticated.value=!1,this.$router.push("/FireLogin")}}},mI={class:"main-container"},gI={key:0,class:"navbar navbar-expand-lg navbar-light bg-light"},_I={class:"container"},yI=V("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[V("span",{class:"navbar-toggler-icon"})],-1),vI={class:"collapse navbar-collapse",id:"navbarNav"},EI={class:"navbar-nav"},wI={class:"nav-item"},TI={class:"nav-item"},II={class:"nav-item"},AI={class:"nav-item"},bI={class:"flex-grow-1 d-flex align-items-center justify-content-center"};function RI(t,e,n,r,s,i){const o=zc("router-link"),c=zc("router-view");return Be(),qe("div",mI,[i.showHeader?(Be(),qe("header",gI,[V("div",_I,[Ce(o,{class:"navbar-brand",to:"/WeatherCheck"},{default:Et(()=>[ct("My App (Week 11)")]),_:1}),yI,V("div",vI,[V("ul",EI,[V("li",wI,[Ce(o,{class:Tr(["mx-2",i.isActiveLink("/GetBookCount")?"btn btn-primary active-link":"inactive-link"]),to:"/GetBookCount"},{default:Et(()=>[ct(" GetBookCount ")]),_:1},8,["class"])]),V("li",TI,[Ce(o,{class:Tr(["mx-2",i.isActiveLink("/WeatherCheck")?"btn btn-primary active-link":"inactive-link"]),to:"/WeatherCheck"},{default:Et(()=>[ct(" GetWeather ")]),_:1},8,["class"])]),V("li",II,[Ce(o,{class:Tr(["mx-2",i.isActiveLink("/CountBookAPI")?"btn btn-primary active-link":"inactive-link"]),to:"/CountBookAPI"},{default:Et(()=>[ct(" CountBookAPI ")]),_:1},8,["class"])]),V("li",AI,[Ce(o,{class:Tr(["mx-2",i.isActiveLink("/GetAllBookAPI")?"btn btn-primary active-link":"inactive-link"]),to:"/GetAllBookAPI"},{default:Et(()=>[ct(" GetAllBookAPI ")]),_:1},8,["class"])])])])])])):An("",!0),V("main",bI,[Ce(c)])])}const SI=Ur(pI,[["render",RI]]);/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof document<"u";function PI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Sc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const ci=()=>{},Yt=Array.isArray,Gm=/#/g,CI=/&/g,kI=/\//g,OI=/=/g,NI=/\?/g,Qm=/\+/g,DI=/%5B/g,VI=/%5D/g,Jm=/%5E/g,xI=/%60/g,Ym=/%7B/g,LI=/%7C/g,Xm=/%7D/g,MI=/%20/g;function ru(t){return encodeURI(""+t).replace(LI,"|").replace(DI,"[").replace(VI,"]")}function FI(t){return ru(t).replace(Ym,"{").replace(Xm,"}").replace(Jm,"^")}function cl(t){return ru(t).replace(Qm,"%2B").replace(MI,"+").replace(Gm,"%23").replace(CI,"%26").replace(xI,"`").replace(Ym,"{").replace(Xm,"}").replace(Jm,"^")}function UI(t){return cl(t).replace(OI,"%3D")}function BI(t){return ru(t).replace(Gm,"%23").replace(NI,"%3F")}function jI(t){return t==null?"":BI(t).replace(kI,"%2F")}function Ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $I=/\/$/,qI=t=>t.replace($I,"");function Pc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ei(o)}}function HI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function WI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&Zm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KI(t[n],e[n]))return!1;return!0}function KI(t,e){return Yt(t)?Fd(t,e):Yt(e)?Fd(e,t):t===e}function Fd(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var wi;(function(t){t.pop="pop",t.push="push"})(wi||(wi={}));var li;(function(t){t.back="back",t.forward="forward",t.unknown=""})(li||(li={}));function GI(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qI(t)}const QI=/^[^#]+#/;function JI(t,e){return t.replace(QI,"#")+e}function YI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ka=()=>({left:window.scrollX,top:window.scrollY});function XI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=YI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ud(t,e){return(history.state?history.state.position-e:-1)+t}const ll=new Map;function ZI(t,e){ll.set(t,e)}function eA(t){const e=ll.get(t);return ll.delete(t),e}let tA=()=>location.protocol+"//"+location.host;function eg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Md(l,"")}return Md(n,t)+r+s}function nA(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=eg(t,location),b=n.value,R=e.value;let P=0;if(g){if(n.value=y,e.value=g,o&&o===b){o=null;return}P=R?g.position-R.position:0}else r(y);s.forEach(B=>{B(n.value,b,{delta:P,type:wi.pop,direction:P?P>0?li.forward:li.back:li.unknown})})};function l(){o=n.value}function u(g){s.push(g);const y=()=>{const b=s.indexOf(g);b>-1&&s.splice(b,1)};return i.push(y),y}function d(){const{history:g}=window;g.state&&g.replaceState(Pe({},g.state,{scroll:ka()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Bd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ka():null}}function rA(t){const{history:e,location:n}=window,r={value:eg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:tA()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[d?"replace":"assign"](g)}}function o(l,u){const d=Pe({},e.state,Bd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=Pe({},s.value,e.state,{forward:l,scroll:ka()});i(d.current,d,!0);const p=Pe({},Bd(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function sA(t){t=GI(t);const e=rA(t),n=nA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:JI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function iA(t){return typeof t=="string"||t&&typeof t=="object"}function tg(t){return typeof t=="string"||typeof t=="symbol"}const ng=Symbol("");var jd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jd||(jd={}));function ps(t,e){return Pe(new Error,{type:t,[ng]:!0},e)}function yn(t,e){return t instanceof Error&&ng in t&&(e==null||!!(t.type&e))}const $d="[^/]+?",oA={sensitive:!1,strict:!1,start:!0,end:!0},aA=/[.+*?^${}()[\]/\\]/g;function cA(t,e){const n=Pe({},oA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(aA,"\\$&"),y+=40;else if(g.type===1){const{value:b,repeatable:R,optional:P,regexp:B}=g;i.push({name:b,repeatable:R,optional:P});const U=B||$d;if(U!==$d){y+=10;try{new RegExp(`(${U})`)}catch(ee){throw new Error(`Invalid custom RegExp for param "${b}" (${U}): `+ee.message)}}let F=R?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(F=P&&u.length<2?`(?:/${F})`:"/"+F),P&&(F+="?"),s+=F,y+=20,P&&(y+=-8),R&&(y+=-20),U===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const y=d[g]||"",b=i[g-1];p[b.name]=y&&b.repeatable?y.split("/"):y}return p}function l(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of g)if(y.type===0)d+=y.value;else if(y.type===1){const{value:b,repeatable:R,optional:P}=y,B=b in u?u[b]:"";if(Yt(B)&&!R)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const U=Yt(B)?B.join("/"):B;if(!U)if(P)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);d+=U}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function lA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function rg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=lA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qd(r))return 1;if(qd(s))return-1}return s.length-r.length}function qd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uA={type:0,value:""},hA=/[a-zA-Z0-9_]/;function dA(t){if(!t)return[[]];if(t==="/")return[[uA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:hA.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function fA(t,e,n){const r=cA(dA(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pA(t,e){const n=[],r=new Map;e=Kd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,y){const b=!y,R=mA(p);R.aliasOf=y&&y.record;const P=Kd(e,p),B=[R];if("alias"in p){const ee=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of ee)B.push(Pe({},R,{components:y?y.record.components:R.components,path:le,aliasOf:y?y.record:R}))}let U,F;for(const ee of B){const{path:le}=ee;if(g&&le[0]!=="/"){const J=g.record.path,I=J[J.length-1]==="/"?"":"/";ee.path=g.record.path+(le&&I+le)}if(U=fA(ee,g,P),y?y.alias.push(U):(F=F||U,F!==U&&F.alias.push(U),b&&p.name&&!Wd(U)&&o(p.name)),sg(U)&&l(U),R.children){const J=R.children;for(let I=0;I<J.length;I++)i(J[I],U,y&&y.children[I])}y=y||U}return F?()=>{o(F)}:ci}function o(p){if(tg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=yA(p,n);n.splice(g,0,p),p.record.name&&!Wd(p)&&r.set(p.record.name,p)}function u(p,g){let y,b={},R,P;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw ps(1,{location:p});P=y.record.name,b=Pe(Hd(g.params,y.keys.filter(F=>!F.optional).concat(y.parent?y.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&Hd(p.params,y.keys.map(F=>F.name))),R=y.stringify(b)}else if(p.path!=null)R=p.path,y=n.find(F=>F.re.test(R)),y&&(b=y.parse(R),P=y.record.name);else{if(y=g.name?r.get(g.name):n.find(F=>F.re.test(g.path)),!y)throw ps(1,{location:p,currentLocation:g});P=y.record.name,b=Pe({},g.params,p.params),R=y.stringify(b)}const B=[];let U=y;for(;U;)B.unshift(U.record),U=U.parent;return{name:P,path:R,params:b,matched:B,meta:_A(B)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Hd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _A(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Kd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yA(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;rg(t,e[i])<0?r=i:n=i+1}const s=vA(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vA(t){let e=t;for(;e=e.parent;)if(sg(e)&&rg(t,e)===0)return e}function sg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function EA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qm," "),o=i.indexOf("="),c=Ei(o<0?i:i.slice(0,o)),l=o<0?null:Ei(i.slice(o+1));if(c in e){let u=e[c];Yt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function zd(t){let e="";for(let n in t){const r=t[n];if(n=UI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&cl(i)):[r&&cl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const TA=Symbol(""),Gd=Symbol(""),Oa=Symbol(""),ig=Symbol(""),ul=Symbol("");function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(ps(4,{from:n,to:e})):g instanceof Error?l(g):iA(g)?l(ps(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Cc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(IA(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Hn(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=PI(d)?d.default:d;o.components[c]=p;const y=(p.__vccOpts||p)[e];return y&&Hn(y,n,r,o,c,s)()}))}}return i}function IA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qd(t){const e=ln(Oa),n=ln(ig),r=zt(()=>{const l=rs(t.to);return e.resolve(l)}),s=zt(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(fs.bind(null,d));if(g>-1)return g;const y=Jd(l[u-2]);return u>1&&Jd(d)===y&&p[p.length-1].path!==y?p.findIndex(fs.bind(null,l[u-2])):g}),i=zt(()=>s.value>-1&&SA(n.params,r.value.params)),o=zt(()=>s.value>-1&&s.value===n.matched.length-1&&Zm(n.params,r.value.params));function c(l={}){return RA(l)?e[rs(t.replace)?"replace":"push"](rs(t.to)).catch(ci):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const AA=Qp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qd,setup(t,{slots:e}){const n=_a(Qd(t)),{options:r}=ln(Oa),s=zt(()=>({[Yd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bA=AA;function RA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yd=(t,e,n)=>t??e??n,PA=Qp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(ul),s=zt(()=>t.route||r.value),i=ln(Gd,0),o=zt(()=>{let u=rs(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=zt(()=>s.value.matched[o.value]);bo(Gd,zt(()=>o.value+1)),bo(TA,c),bo(ul,s);const l=Ze();return Ro(()=>[l.value,c.value,t.name],([u,d,p],[g,y,b])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!fs(d,y)||!g)&&(d.enterCallbacks[p]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return Xd(n.default,{Component:g,route:u});const y=p.props[d],b=y?y===!0?u.params:typeof y=="function"?y(u):y:null,P=wm(g,Pe({},b,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Xd(n.default,{Component:P,route:u})||P}}});function Xd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const CA=PA;function kA(t){const e=pA(t.routes,t),n=t.parseQuery||EA,r=t.stringifyQuery||zd,s=t.history,i=Qs(),o=Qs(),c=Qs(),l=Vv(Bn);let u=Bn;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Sc.bind(null,L=>""+L),p=Sc.bind(null,jI),g=Sc.bind(null,Ei);function y(L,Z){let Q,te;return tg(L)?(Q=e.getRecordMatcher(L),te=Z):te=L,e.addRoute(te,Q)}function b(L){const Z=e.getRecordMatcher(L);Z&&e.removeRoute(Z)}function R(){return e.getRoutes().map(L=>L.record)}function P(L){return!!e.getRecordMatcher(L)}function B(L,Z){if(Z=Pe({},Z||l.value),typeof L=="string"){const E=Pc(n,L,Z.path),O=e.resolve({path:E.path},Z),j=s.createHref(E.fullPath);return Pe(E,O,{params:g(O.params),hash:Ei(E.hash),redirectedFrom:void 0,href:j})}let Q;if(L.path!=null)Q=Pe({},L,{path:Pc(n,L.path,Z.path).path});else{const E=Pe({},L.params);for(const O in E)E[O]==null&&delete E[O];Q=Pe({},L,{params:p(E)}),Z.params=p(Z.params)}const te=e.resolve(Q,Z),Ee=L.hash||"";te.params=d(g(te.params));const ke=HI(r,Pe({},L,{hash:FI(Ee),path:te.path})),_=s.createHref(ke);return Pe({fullPath:ke,hash:Ee,query:r===zd?wA(L.query):L.query||{}},te,{redirectedFrom:void 0,href:_})}function U(L){return typeof L=="string"?Pc(n,L,l.value.path):Pe({},L)}function F(L,Z){if(u!==L)return ps(8,{from:Z,to:L})}function ee(L){return I(L)}function le(L){return ee(Pe(U(L),{replace:!0}))}function J(L){const Z=L.matched[L.matched.length-1];if(Z&&Z.redirect){const{redirect:Q}=Z;let te=typeof Q=="function"?Q(L):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=U(te):{path:te},te.params={}),Pe({query:L.query,hash:L.hash,params:te.path!=null?{}:L.params},te)}}function I(L,Z){const Q=u=B(L),te=l.value,Ee=L.state,ke=L.force,_=L.replace===!0,E=J(Q);if(E)return I(Pe(U(E),{state:typeof E=="object"?Pe({},Ee,E.state):Ee,force:ke,replace:_}),Z||Q);const O=Q;O.redirectedFrom=Z;let j;return!ke&&WI(r,te,Q)&&(j=ps(16,{to:O,from:te}),Ut(te,te,!0,!1)),(j?Promise.resolve(j):A(O,te)).catch(x=>yn(x)?yn(x,2)?x:Ht(x):ge(x,O,te)).then(x=>{if(x){if(yn(x,2))return I(Pe({replace:_},U(x.to),{state:typeof x.to=="object"?Pe({},Ee,x.to.state):Ee,force:ke}),Z||O)}else x=C(O,te,!0,_,Ee);return S(O,te,x),x})}function v(L,Z){const Q=F(L,Z);return Q?Promise.reject(Q):Promise.resolve()}function T(L){const Z=Dn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(L):L()}function A(L,Z){let Q;const[te,Ee,ke]=OA(L,Z);Q=Cc(te.reverse(),"beforeRouteLeave",L,Z);for(const E of te)E.leaveGuards.forEach(O=>{Q.push(Hn(O,L,Z))});const _=v.bind(null,L,Z);return Q.push(_),It(Q).then(()=>{Q=[];for(const E of i.list())Q.push(Hn(E,L,Z));return Q.push(_),It(Q)}).then(()=>{Q=Cc(Ee,"beforeRouteUpdate",L,Z);for(const E of Ee)E.updateGuards.forEach(O=>{Q.push(Hn(O,L,Z))});return Q.push(_),It(Q)}).then(()=>{Q=[];for(const E of ke)if(E.beforeEnter)if(Yt(E.beforeEnter))for(const O of E.beforeEnter)Q.push(Hn(O,L,Z));else Q.push(Hn(E.beforeEnter,L,Z));return Q.push(_),It(Q)}).then(()=>(L.matched.forEach(E=>E.enterCallbacks={}),Q=Cc(ke,"beforeRouteEnter",L,Z,T),Q.push(_),It(Q))).then(()=>{Q=[];for(const E of o.list())Q.push(Hn(E,L,Z));return Q.push(_),It(Q)}).catch(E=>yn(E,8)?E:Promise.reject(E))}function S(L,Z,Q){c.list().forEach(te=>T(()=>te(L,Z,Q)))}function C(L,Z,Q,te,Ee){const ke=F(L,Z);if(ke)return ke;const _=Z===Bn,E=Jr?history.state:{};Q&&(te||_?s.replace(L.fullPath,Pe({scroll:_&&E&&E.scroll},Ee)):s.push(L.fullPath,Ee)),l.value=L,Ut(L,Z,Q,_),Ht()}let w;function gt(){w||(w=s.listen((L,Z,Q)=>{if(!nn.listening)return;const te=B(L),Ee=J(te);if(Ee){I(Pe(Ee,{replace:!0}),te).catch(ci);return}u=te;const ke=l.value;Jr&&ZI(Ud(ke.fullPath,Q.delta),ka()),A(te,ke).catch(_=>yn(_,12)?_:yn(_,2)?(I(_.to,te).then(E=>{yn(E,20)&&!Q.delta&&Q.type===wi.pop&&s.go(-1,!1)}).catch(ci),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ge(_,te,ke))).then(_=>{_=_||C(te,ke,!1),_&&(Q.delta&&!yn(_,8)?s.go(-Q.delta,!1):Q.type===wi.pop&&yn(_,20)&&s.go(-1,!1)),S(te,ke,_)}).catch(ci)}))}let Ft=Qs(),Ke=Qs(),ve;function ge(L,Z,Q){Ht(L);const te=Ke.list();return te.length?te.forEach(Ee=>Ee(L,Z,Q)):console.error(L),Promise.reject(L)}function kt(){return ve&&l.value!==Bn?Promise.resolve():new Promise((L,Z)=>{Ft.add([L,Z])})}function Ht(L){return ve||(ve=!L,gt(),Ft.list().forEach(([Z,Q])=>L?Q(L):Z()),Ft.reset()),L}function Ut(L,Z,Q,te){const{scrollBehavior:Ee}=t;if(!Jr||!Ee)return Promise.resolve();const ke=!Q&&eA(Ud(L.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return zl().then(()=>Ee(L,Z,ke)).then(_=>_&&XI(_)).catch(_=>ge(_,L,Z))}const Fe=L=>s.go(L);let Ue;const Dn=new Set,nn={currentRoute:l,listening:!0,addRoute:y,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:R,resolve:B,options:t,push:ee,replace:le,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ke.add,isReady:kt,install(L){const Z=this;L.component("RouterLink",bA),L.component("RouterView",CA),L.config.globalProperties.$router=Z,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),Jr&&!Ue&&l.value===Bn&&(Ue=!0,ee(s.location).catch(Ee=>{}));const Q={};for(const Ee in Bn)Object.defineProperty(Q,Ee,{get:()=>l.value[Ee],enumerable:!0});L.provide(Oa,Z),L.provide(ig,xp(Q)),L.provide(ul,l);const te=L.unmount;Dn.add(L),L.unmount=function(){Dn.delete(L),Dn.size<1&&(u=Bn,w&&w(),w=null,l.value=Bn,Ue=!1,ve=!1),te()}}};function It(L){return L.reduce((Z,Q)=>Z.then(()=>T(Q)),Promise.resolve())}return nn}function OA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>fs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>fs(u,l))||s.push(l))}return[n,r,s]}function Na(){return ln(Oa)}var Zd={};/**
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
 */const og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},NA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(og(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new DA;const g=i<<2|c>>4;if(r.push(g),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const b=u<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VA=function(t){const e=og(t);return ag.encodeByteArray(e,!0)},Qo=function(t){return VA(t).replace(/\./g,"")},cg=function(t){try{return ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LA=()=>xA().__FIREBASE_DEFAULTS__,MA=()=>{if(typeof process>"u"||typeof Zd>"u")return;const t=Zd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cg(t[1]);return e&&JSON.parse(e)},Da=()=>{try{return LA()||MA()||FA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lg=t=>{var e,n;return(n=(e=Da())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UA=t=>{const e=lg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ug=()=>{var t;return(t=Da())===null||t===void 0?void 0:t.config},hg=t=>{var e;return(e=Da())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class BA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $A(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function qA(){var t;const e=(t=Da())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KA(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zA(){return!qA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GA(){try{return typeof indexedDB=="object"}catch{return!1}}function QA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const JA="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JA,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?YA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,c,r)}}function YA(t,e){return t.replace(XA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const XA=/\{\$([^}]+)}/g;function ZA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ef(i)&&ef(o)){if(!Jo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ef(t){return t!==null&&typeof t=="object"}/**
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
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eb(t,e){const n=new tb(t,e);return n.subscribe.bind(n)}class tb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kc),s.error===void 0&&(s.error=kc),s.complete===void 0&&(s.complete=kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class rb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ib(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sb(t){return t===vr?void 0:t}function ib(t){return t.instantiationMode==="EAGER"}/**
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
 */class ob{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const ab={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},cb=ye.INFO,lb={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},ub=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class su{constructor(e){this.name=e,this._logLevel=cb,this._logHandler=ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ab[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const hb=(t,e)=>e.some(n=>t instanceof n);let tf,nf;function db(){return tf||(tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return nf||(nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,hl=new WeakMap,fg=new WeakMap,Oc=new WeakMap,iu=new WeakMap;function pb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dg.set(n,t)}).catch(()=>{}),iu.set(e,t),e}function mb(t){if(hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gb(t){dl=t(dl)}function _b(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nc(this),e,...n);return fg.set(r,e.sort?e.sort():[e]),Zn(r)}:fb().includes(t)?function(...e){return t.apply(Nc(this),e),Zn(dg.get(this))}:function(...e){return Zn(t.apply(Nc(this),e))}}function yb(t){return typeof t=="function"?_b(t):(t instanceof IDBTransaction&&mb(t),hb(t,db())?new Proxy(t,dl):t)}function Zn(t){if(t instanceof IDBRequest)return pb(t);if(Oc.has(t))return Oc.get(t);const e=yb(t);return e!==t&&(Oc.set(t,e),iu.set(e,t)),e}const Nc=t=>iu.get(t);function vb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Eb=["get","getKey","getAll","getAllKeys","count"],wb=["put","add","delete","clear"],Dc=new Map;function rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Eb.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Dc.set(e,i),i}gb(t=>({...t,get:(e,n,r)=>rf(e,n)||t.get(e,n,r),has:(e,n)=>!!rf(e,n)||t.has(e,n)}));/**
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
 */class Tb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ib(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ib(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",sf="0.10.10";/**
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
 */const Sn=new su("@firebase/app"),Ab="@firebase/app-compat",bb="@firebase/analytics-compat",Rb="@firebase/analytics",Sb="@firebase/app-check-compat",Pb="@firebase/app-check",Cb="@firebase/auth",kb="@firebase/auth-compat",Ob="@firebase/database",Nb="@firebase/database-compat",Db="@firebase/functions",Vb="@firebase/functions-compat",xb="@firebase/installations",Lb="@firebase/installations-compat",Mb="@firebase/messaging",Fb="@firebase/messaging-compat",Ub="@firebase/performance",Bb="@firebase/performance-compat",jb="@firebase/remote-config",$b="@firebase/remote-config-compat",qb="@firebase/storage",Hb="@firebase/storage-compat",Wb="@firebase/firestore",Kb="@firebase/vertexai-preview",zb="@firebase/firestore-compat",Gb="firebase",Qb="10.13.1";/**
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
 */const pl="[DEFAULT]",Jb={[fl]:"fire-core",[Ab]:"fire-core-compat",[Rb]:"fire-analytics",[bb]:"fire-analytics-compat",[Pb]:"fire-app-check",[Sb]:"fire-app-check-compat",[Cb]:"fire-auth",[kb]:"fire-auth-compat",[Ob]:"fire-rtdb",[Nb]:"fire-rtdb-compat",[Db]:"fire-fn",[Vb]:"fire-fn-compat",[xb]:"fire-iid",[Lb]:"fire-iid-compat",[Mb]:"fire-fcm",[Fb]:"fire-fcm-compat",[Ub]:"fire-perf",[Bb]:"fire-perf-compat",[jb]:"fire-rc",[$b]:"fire-rc-compat",[qb]:"fire-gcs",[Hb]:"fire-gcs-compat",[Wb]:"fire-fst",[zb]:"fire-fst-compat",[Kb]:"fire-vertex","fire-js":"fire-js",[Gb]:"fire-js-all"};/**
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
 */const Yo=new Map,Yb=new Map,ml=new Map;function of(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(ml.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of Yo.values())of(n,t);for(const n of Yb.values())of(n,t);return!0}function ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
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
 */const Xb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Li("app","Firebase",Xb);/**
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
 */class Zb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=Qb;function pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(n||(n=ug()),!n)throw er.create("no-options");const i=Yo.get(s);if(i){if(Jo(n,i.options)&&Jo(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const o=new ob(s);for(const l of ml.values())o.addComponent(l);const c=new Zb(n,r,o);return Yo.set(s,c),c}function mg(t=pl){const e=Yo.get(t);if(!e&&t===pl&&ug())return pg();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let s=(r=Jb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(c.join(" "));return}ms(new Nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const e0="firebase-heartbeat-database",t0=1,Ti="firebase-heartbeat-store";let Vc=null;function gg(){return Vc||(Vc=vb(e0,t0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),Vc}async function n0(t){try{const n=(await gg()).transaction(Ti),r=await n.objectStore(Ti).get(_g(t));return await n.done,r}catch(e){if(e instanceof Nn)Sn.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function af(t,e){try{const r=(await gg()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,_g(t)),await r.done}catch(n){if(n instanceof Nn)Sn.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
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
 */const r0=1024,s0=30*24*60*60*1e3;class i0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=s0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cf(),{heartbeatsToSend:r,unsentEntries:s}=o0(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sn.warn(n),""}}}function cf(){return new Date().toISOString().substring(0,10)}function o0(t,e=r0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GA()?QA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function c0(t){ms(new Nr("platform-logger",e=>new Tb(e),"PRIVATE")),ms(new Nr("heartbeat",e=>new i0(e),"PRIVATE")),tr(fl,sf,t),tr(fl,sf,"esm2017"),tr("fire-js","")}c0("");function au(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l0=yg,vg=new Li("auth","Firebase",yg());/**
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
 */const Xo=new su("@firebase/auth");function u0(t,...e){Xo.logLevel<=ye.WARN&&Xo.warn(`Auth (${Rs}): ${t}`,...e)}function Oo(t,...e){Xo.logLevel<=ye.ERROR&&Xo.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw cu(t,...e)}function un(t,...e){return cu(t,...e)}function Eg(t,e,n){const r=Object.assign(Object.assign({},l0()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return Eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vg.create(t,...e)}function ue(t,e,...n){if(!t)throw cu(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function Pn(t,e){t||En(e)}/**
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
 */function gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h0(){return uf()==="http:"||uf()==="https:"}function uf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function d0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h0()||HA()||"connection"in navigator)?navigator.onLine:!0}function f0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=$A()||WA()}get(){return d0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lu(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const p0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const m0=new Fi(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ur(t,e,n,r,s={}){return Tg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wg.fetch()(Ig(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Tg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},p0),e);try{const s=new _0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw go(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Eg(t,d,u);Xt(t,d)}}catch(s){if(s instanceof Nn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function Ui(t,e,n,r,s={}){const i=await ur(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ig(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?lu(t.config,s):`${t.config.apiScheme}://${s}`}function g0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),m0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function hf(t){return t!==void 0&&t.enterprise!==void 0}class y0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return g0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function v0(t,e){return ur(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
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
 */async function E0(t,e){return ur(t,"POST","/v1/accounts:delete",e)}async function Ag(t,e){return ur(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w0(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=uu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ui(xc(s.auth_time)),issuedAtTime:ui(xc(s.iat)),expirationTime:ui(xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function uu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=cg(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(t){const e=uu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&T0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function T0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class I0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ii(t,Ag(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bg(i.providerUserInfo):[],c=b0(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function A0(t){const e=rt(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function b0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bg(t){return t.map(e=>{var{providerId:n}=e,r=au(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function R0(t,e){const n=await Tg(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ig(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function S0(t,e){return ur(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
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
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await R0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new as;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function jn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new I0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w0(this,e)}reload(){return A0(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Ii(this,E0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:ee,isAnonymous:le,providerData:J,stsTokenManager:I}=n;ue(F&&I,e,"internal-error");const v=as.fromJSON(this.name,I);ue(typeof F=="string",e,"internal-error"),jn(p,e.name),jn(g,e.name),ue(typeof ee=="boolean",e,"internal-error"),ue(typeof le=="boolean",e,"internal-error"),jn(y,e.name),jn(b,e.name),jn(R,e.name),jn(P,e.name),jn(B,e.name),jn(U,e.name);const T=new wn({uid:F,auth:e,email:g,emailVerified:ee,displayName:p,isAnonymous:le,photoURL:b,phoneNumber:y,tenantId:R,stsTokenManager:v,createdAt:B,lastLoginAt:U});return J&&Array.isArray(J)&&(T.providerData=J.map(A=>Object.assign({},A))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new as;s.updateFromServerResponse(n);const i=new wn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new as;c.updateFromIdToken(r);const l=new wn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const ff=new Map;function Tn(t){Pn(t instanceof Function,"Expected a class definition");let e=ff.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ff.set(t,e),e)}/**
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
 */class Rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rg.type="NONE";const pf=Rg;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Tn(pf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Tn(pf);const o=No(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=wn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new cs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cs(i,e,r))}}/**
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
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Dg(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||Cg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sg(t=pt()){return/firefox\//i.test(t)}function Pg(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cg(t=pt()){return/crios\//i.test(t)}function kg(t=pt()){return/iemobile/i.test(t)}function Og(t=pt()){return/android/i.test(t)}function Ng(t=pt()){return/blackberry/i.test(t)}function Dg(t=pt()){return/webos/i.test(t)}function hu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P0(t=pt()){var e;return hu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function C0(){return KA()&&document.documentMode===10}function Vg(t=pt()){return hu(t)||Og(t)||Dg(t)||Ng(t)||/windows phone/i.test(t)||kg(t)}/**
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
 */function xg(t,e=[]){let n;switch(t){case"Browser":n=mf(pt());break;case"Worker":n=`${mf(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class k0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function O0(t,e={}){return ur(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const N0=6;class D0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:N0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class V0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new k0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ag(this,{idToken:e}),r=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(bn(this));const n=e?rt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await O0(this),n=new D0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await S0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Br(t){return rt(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=eb(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x0(t){Va=t}function Lg(t){return Va.loadJS(t)}function L0(){return Va.recaptchaEnterpriseScript}function M0(){return Va.gapiScript}function F0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const U0="recaptcha-enterprise",B0="NO_RECAPTCHA";class j0{constructor(e){this.type=U0,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{v0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new y0(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;hf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(B0)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&hf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=L0();l.length!==0&&(l+=c),Lg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function _f(t,e,n,r=!1){const s=new j0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _f(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _f(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function $0(t,e){const n=ou(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Jo(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function q0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H0(t,e,n){const r=Br(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Mg(e),{host:o,port:c}=W0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),K0()}function Mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function W0(t){const e=Mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yf(o)}}}function yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function K0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function z0(t,e){return ur(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function G0(t,e){return Ui(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
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
 */async function Q0(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function J0(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
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
 */class Ai extends du{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ai(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ai(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,n,"signInWithPassword",G0);case"emailLink":return Q0(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yl(e,r,"signUpPassword",z0);case"emailLink":return J0(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ls(t,e){return Ui(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
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
 */const Y0="http://localhost";class Dr extends du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=au(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:Y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
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
 */function X0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z0(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,r=Xs(Zs(t)).deep_link_id;return(r?Xs(Zs(r)).link:null)||r||n||e||t}class fu{constructor(e){var n,r,s,i,o,c;const l=Xs(Zs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=X0((s=l.mode)!==null&&s!==void 0?s:null);ue(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Z0(e);try{return new fu(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Ai._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fu.parseLink(n);return ue(r,"argument-error"),Ai._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bi extends Fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Bi{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class zn extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Gn extends Bi{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Bi{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function eR(t,e){return Ui(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
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
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wn._fromIdTokenResponse(e,r,s),o=vf(r);return new Vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vf(r);return new Vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ea extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ea(e,n,r,s)}}function Ug(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,r):i})}async function tR(t,e,n=!1){const r=await Ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
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
 */async function nR(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(bn(r));const s="reauthenticate";try{const i=await Ii(t,Ug(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=uu(i.idToken);ue(o,r,"internal-error");const{sub:c}=o;return ue(t.uid===c,r,"user-mismatch"),Vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function Bg(t,e,n=!1){if(cn(t.app))return Promise.reject(bn(t));const r="signIn",s=await Ug(t,r,e),i=await Vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rR(t,e){return Bg(Br(t),e)}/**
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
 */async function jg(t){const e=Br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sR(t,e,n){if(cn(t.app))return Promise.reject(bn(t));const r=Br(t),o=await yl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jg(t),l}),c=await Vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function iR(t,e,n){return cn(t.app)?Promise.reject(bn(t)):rR(rt(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jg(t),r})}function oR(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function aR(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function $g(t){return rt(t).signOut()}const ta="__sak";/**
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
 */class qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cR=1e3,lR=10;class Hg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);C0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hg.type="LOCAL";const uR=Hg;/**
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
 */class Wg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wg.type="SESSION";const Kg=Wg;/**
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
 */function hR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await hR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
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
 */function pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=pu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function fR(t){hn().location.href=t}/**
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
 */function zg(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function pR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gR(){return zg()?self:null}/**
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
 */const Gg="firebaseLocalStorageDb",_R=1,na="firebaseLocalStorage",Qg="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function yR(){const t=indexedDB.deleteDatabase(Gg);return new ji(t).toPromise()}function vl(){const t=indexedDB.open(Gg,_R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(na,{keyPath:Qg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(na)?e(r):(r.close(),await yR(),e(await vl()))})})}async function Ef(t,e,n){const r=La(t,!0).put({[Qg]:e,value:n});return new ji(r).toPromise()}async function vR(t,e){const n=La(t,!1).get(e),r=await new ji(n).toPromise();return r===void 0?null:r.value}function wf(t,e){const n=La(t,!0).delete(e);return new ji(n).toPromise()}const ER=800,wR=3;class Jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(gR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pR(),!this.activeServiceWorker)return;this.sender=new dR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vl();return await Ef(e,ta,"1"),await wf(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=La(s,!1).getAll();return new ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const TR=Jg;new Fi(3e4,6e4);/**
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
 */function IR(t,e){return e?Tn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mu extends du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AR(t){return Bg(t.auth,new mu(t),t.bypassAuthState)}function bR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),nR(n,new mu(t),t.bypassAuthState)}async function RR(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),tR(n,new mu(t),t.bypassAuthState)}/**
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
 */class Yg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AR;case"linkViaPopup":case"linkViaRedirect":return RR;case"reauthViaPopup":case"reauthViaRedirect":return bR;default:Xt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SR=new Fi(2e3,1e4);class es extends Yg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SR.get())};e()}}es.currentPopupAction=null;/**
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
 */const PR="pendingRedirect",Do=new Map;class CR extends Yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await kR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kR(t,e){const n=DR(e),r=NR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OR(t,e){Do.set(t._key(),e)}function NR(t){return Tn(t._redirectPersistence)}function DR(t){return No(PR,t.config.apiKey,t.name)}async function VR(t,e,n=!1){if(cn(t.app))return Promise.reject(bn(t));const r=Br(t),s=IR(r,e),o=await new CR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xR=10*60*1e3;class LR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tf(e))}saveEventToCache(e){this.cachedEventUids.add(Tf(e)),this.lastProcessedEventTime=Date.now()}}function Tf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xg(t);default:return!1}}/**
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
 */async function FR(t,e={}){return ur(t,"GET","/v1/projects",e)}/**
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
 */const UR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BR=/^https?/;async function jR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FR(t);for(const n of e)try{if($R(n))return}catch{}Xt(t,"unauthorized-domain")}function $R(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BR.test(n))return!1;if(UR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qR=new Fi(3e4,6e4);function If(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HR(t){return new Promise((e,n)=>{var r,s,i;function o(){If(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{If(),n(un(t,"network-request-failed"))},timeout:qR.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const c=F0("iframefcb");return hn()[c]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Lg(`${M0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function WR(t){return Vo=Vo||HR(t),Vo}/**
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
 */const KR=new Fi(5e3,15e3),zR="__/auth/iframe",GR="emulator/auth/iframe",QR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YR(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lu(e,GR):`https://${t.config.authDomain}/${zR}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},s=JR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function XR(t){const e=await WR(t),n=hn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:YR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),c=hn().setTimeout(()=>{i(o)},KR.get());function l(){hn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ZR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eS=500,tS=600,nS="_blank",rS="http://localhost";class Af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sS(t,e,n,r=eS,s=tS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ZR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=pt().toLowerCase();n&&(c=Cg(u)?nS:n),Sg(u)&&(e=e||rS,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[y,b])=>`${g}${y}=${b},`,"");if(P0(u)&&c!=="_self")return iS(e||"",c),new Af(null);const p=window.open(e||"",c,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Af(p)}function iS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oS="__/auth/handler",aS="emulator/auth/handler",cS=encodeURIComponent("fac");async function bf(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:s};if(e instanceof Fg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ZA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Bi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${cS}=${encodeURIComponent(l)}`:"";return`${lS(t)}?${Mi(c).slice(1)}${u}`}function lS({config:t}){return t.emulator?lu(t,aS):`https://${t.authDomain}/${oS}`}/**
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
 */const Lc="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=VR,this._overrideRedirectResult=OR}async _openPopup(e,n,r,s){var i;Pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bf(e,n,r,gl(),s);return sS(e,o,pu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bf(e,n,r,gl(),s);return fR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XR(e),r=new LR(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Lc];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vg()||Pg()||hu()}}const hS=uS;var Rf="@firebase/auth",Sf="1.7.8";/**
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
 */class dS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pS(t){ms(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(t)},u=new V0(r,s,i,l);return q0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new Nr("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new dS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Rf,Sf,fS(t)),tr(Rf,Sf,"esm2017")}/**
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
 */const mS=5*60,gS=hg("authIdTokenMaxAge")||mS;let Pf=null;const _S=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gS)return;const s=n==null?void 0:n.token;Pf!==s&&(Pf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ps(t=mg()){const e=ou(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$0(t,{popupRedirectResolver:hS,persistence:[TR,uR,Kg]}),r=hg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=_S(i.toString());aR(n,o,()=>o(n.currentUser)),oR(n,c=>o(c))}}const s=lg("auth");return s&&H0(n,`http://${s}`),n}function yS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}x0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pS("Browser");const vS={class:"dashboard-container"},ES=V("h1",null,"Admin Dashboard",-1),wS=V("p",null,"Welcome, Admin! Here you can manage users and view admin-specific data.",-1),TS={__name:"AdminDashboard",setup(t){const e=Na(),n=Ps(),r=async()=>{try{await $g(n),e.push("/FireLogin")}catch(s){console.error("Error signing out:",s)}};return(s,i)=>(Be(),qe("div",vS,[ES,V("div",{class:"dashboard-content"},[wS,V("ul",null,[V("li",null,[V("button",{class:"btn",onClick:r},"Logout")])])])]))}},IS={class:"dashboard-container"},AS=V("h1",null,"User Dashboard",-1),bS=V("p",null,"Welcome, User! Here you can view your profile and access user-specific resources.",-1),RS={__name:"UserDashboard",setup(t){const e=Na(),n=Ps(),r=async()=>{try{await $g(n),e.push("/FireLogin")}catch(s){console.error("Error signing out:",s)}};return(s,i)=>(Be(),qe("div",IS,[AS,V("div",{class:"dashboard-content"},[bS,V("ul",null,[V("li",null,[V("button",{class:"btn",onClick:r},"Logout")])])])]))}};var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,Zg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function T(){}T.prototype=v.prototype,I.D=v.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,S,C){for(var w=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)w[gt-2]=arguments[gt];return v.prototype[S].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,T){T||(T=0);var A=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)A[S]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(S=0;16>S;++S)A[S]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=I.g[0],T=I.g[1],S=I.g[2];var C=I.g[3],w=v+(C^T&(S^C))+A[0]+3614090360&4294967295;v=T+(w<<7&4294967295|w>>>25),w=C+(S^v&(T^S))+A[1]+3905402710&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(T^C&(v^T))+A[2]+606105819&4294967295,S=C+(w<<17&4294967295|w>>>15),w=T+(v^S&(C^v))+A[3]+3250441966&4294967295,T=S+(w<<22&4294967295|w>>>10),w=v+(C^T&(S^C))+A[4]+4118548399&4294967295,v=T+(w<<7&4294967295|w>>>25),w=C+(S^v&(T^S))+A[5]+1200080426&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(T^C&(v^T))+A[6]+2821735955&4294967295,S=C+(w<<17&4294967295|w>>>15),w=T+(v^S&(C^v))+A[7]+4249261313&4294967295,T=S+(w<<22&4294967295|w>>>10),w=v+(C^T&(S^C))+A[8]+1770035416&4294967295,v=T+(w<<7&4294967295|w>>>25),w=C+(S^v&(T^S))+A[9]+2336552879&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(T^C&(v^T))+A[10]+4294925233&4294967295,S=C+(w<<17&4294967295|w>>>15),w=T+(v^S&(C^v))+A[11]+2304563134&4294967295,T=S+(w<<22&4294967295|w>>>10),w=v+(C^T&(S^C))+A[12]+1804603682&4294967295,v=T+(w<<7&4294967295|w>>>25),w=C+(S^v&(T^S))+A[13]+4254626195&4294967295,C=v+(w<<12&4294967295|w>>>20),w=S+(T^C&(v^T))+A[14]+2792965006&4294967295,S=C+(w<<17&4294967295|w>>>15),w=T+(v^S&(C^v))+A[15]+1236535329&4294967295,T=S+(w<<22&4294967295|w>>>10),w=v+(S^C&(T^S))+A[1]+4129170786&4294967295,v=T+(w<<5&4294967295|w>>>27),w=C+(T^S&(v^T))+A[6]+3225465664&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^T&(C^v))+A[11]+643717713&4294967295,S=C+(w<<14&4294967295|w>>>18),w=T+(C^v&(S^C))+A[0]+3921069994&4294967295,T=S+(w<<20&4294967295|w>>>12),w=v+(S^C&(T^S))+A[5]+3593408605&4294967295,v=T+(w<<5&4294967295|w>>>27),w=C+(T^S&(v^T))+A[10]+38016083&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^T&(C^v))+A[15]+3634488961&4294967295,S=C+(w<<14&4294967295|w>>>18),w=T+(C^v&(S^C))+A[4]+3889429448&4294967295,T=S+(w<<20&4294967295|w>>>12),w=v+(S^C&(T^S))+A[9]+568446438&4294967295,v=T+(w<<5&4294967295|w>>>27),w=C+(T^S&(v^T))+A[14]+3275163606&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^T&(C^v))+A[3]+4107603335&4294967295,S=C+(w<<14&4294967295|w>>>18),w=T+(C^v&(S^C))+A[8]+1163531501&4294967295,T=S+(w<<20&4294967295|w>>>12),w=v+(S^C&(T^S))+A[13]+2850285829&4294967295,v=T+(w<<5&4294967295|w>>>27),w=C+(T^S&(v^T))+A[2]+4243563512&4294967295,C=v+(w<<9&4294967295|w>>>23),w=S+(v^T&(C^v))+A[7]+1735328473&4294967295,S=C+(w<<14&4294967295|w>>>18),w=T+(C^v&(S^C))+A[12]+2368359562&4294967295,T=S+(w<<20&4294967295|w>>>12),w=v+(T^S^C)+A[5]+4294588738&4294967295,v=T+(w<<4&4294967295|w>>>28),w=C+(v^T^S)+A[8]+2272392833&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^T)+A[11]+1839030562&4294967295,S=C+(w<<16&4294967295|w>>>16),w=T+(S^C^v)+A[14]+4259657740&4294967295,T=S+(w<<23&4294967295|w>>>9),w=v+(T^S^C)+A[1]+2763975236&4294967295,v=T+(w<<4&4294967295|w>>>28),w=C+(v^T^S)+A[4]+1272893353&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^T)+A[7]+4139469664&4294967295,S=C+(w<<16&4294967295|w>>>16),w=T+(S^C^v)+A[10]+3200236656&4294967295,T=S+(w<<23&4294967295|w>>>9),w=v+(T^S^C)+A[13]+681279174&4294967295,v=T+(w<<4&4294967295|w>>>28),w=C+(v^T^S)+A[0]+3936430074&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^T)+A[3]+3572445317&4294967295,S=C+(w<<16&4294967295|w>>>16),w=T+(S^C^v)+A[6]+76029189&4294967295,T=S+(w<<23&4294967295|w>>>9),w=v+(T^S^C)+A[9]+3654602809&4294967295,v=T+(w<<4&4294967295|w>>>28),w=C+(v^T^S)+A[12]+3873151461&4294967295,C=v+(w<<11&4294967295|w>>>21),w=S+(C^v^T)+A[15]+530742520&4294967295,S=C+(w<<16&4294967295|w>>>16),w=T+(S^C^v)+A[2]+3299628645&4294967295,T=S+(w<<23&4294967295|w>>>9),w=v+(S^(T|~C))+A[0]+4096336452&4294967295,v=T+(w<<6&4294967295|w>>>26),w=C+(T^(v|~S))+A[7]+1126891415&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~T))+A[14]+2878612391&4294967295,S=C+(w<<15&4294967295|w>>>17),w=T+(C^(S|~v))+A[5]+4237533241&4294967295,T=S+(w<<21&4294967295|w>>>11),w=v+(S^(T|~C))+A[12]+1700485571&4294967295,v=T+(w<<6&4294967295|w>>>26),w=C+(T^(v|~S))+A[3]+2399980690&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~T))+A[10]+4293915773&4294967295,S=C+(w<<15&4294967295|w>>>17),w=T+(C^(S|~v))+A[1]+2240044497&4294967295,T=S+(w<<21&4294967295|w>>>11),w=v+(S^(T|~C))+A[8]+1873313359&4294967295,v=T+(w<<6&4294967295|w>>>26),w=C+(T^(v|~S))+A[15]+4264355552&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~T))+A[6]+2734768916&4294967295,S=C+(w<<15&4294967295|w>>>17),w=T+(C^(S|~v))+A[13]+1309151649&4294967295,T=S+(w<<21&4294967295|w>>>11),w=v+(S^(T|~C))+A[4]+4149444226&4294967295,v=T+(w<<6&4294967295|w>>>26),w=C+(T^(v|~S))+A[11]+3174756917&4294967295,C=v+(w<<10&4294967295|w>>>22),w=S+(v^(C|~T))+A[2]+718787259&4294967295,S=C+(w<<15&4294967295|w>>>17),w=T+(C^(S|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var T=v-this.blockSize,A=this.B,S=this.h,C=0;C<v;){if(S==0)for(;C<=T;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<v;)if(A[S++]=I.charCodeAt(C++),S==this.blockSize){s(this,A),S=0;break}}else for(;C<v;)if(A[S++]=I[C++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var T=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=T&255,T/=256;for(this.u(I),I=Array(16),v=T=0;4>v;++v)for(var A=0;32>A;A+=8)I[T++]=this.g[v]>>>A&255;return I};function i(I,v){var T=c;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=v(I)}function o(I,v){this.h=v;for(var T=[],A=!0,S=I.length-1;0<=S;S--){var C=I[S]|0;A&&C==v||(T[S]=C,A=!1)}this.g=T}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return P(u(-I));for(var v=[],T=1,A=0;I>=T;A++)v[A]=I/T|0,T*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return P(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(v,8)),A=p,S=0;S<I.length;S+=8){var C=Math.min(8,I.length-S),w=parseInt(I.substring(S,S+C),v);8>C?(C=u(Math.pow(v,C)),A=A.j(C).add(u(w))):(A=A.j(T),A=A.add(u(w)))}return A}var p=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();for(var I=0,v=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(R(this))return"-"+P(this).toString(I);for(var v=u(Math.pow(I,6)),T=this,A="";;){var S=ee(T,v).g;T=B(T,S.j(v));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=S,b(T))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function R(I){return I.h==-1}t.l=function(I){return I=B(this,I),R(I)?-1:b(I)?0:1};function P(I){for(var v=I.g.length,T=[],A=0;A<v;A++)T[A]=~I.g[A];return new o(T,~I.h).add(g)}t.abs=function(){return R(this)?P(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0,S=0;S<=v;S++){var C=A+(this.i(S)&65535)+(I.i(S)&65535),w=(C>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);A=w>>>16,C&=65535,w&=65535,T[S]=w<<16|C}return new o(T,T[T.length-1]&-2147483648?-1:0)};function B(I,v){return I.add(P(v))}t.j=function(I){if(b(this)||b(I))return p;if(R(this))return R(I)?P(this).j(P(I)):P(P(this).j(I));if(R(I))return P(this.j(P(I)));if(0>this.l(y)&&0>I.l(y))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,T=[],A=0;A<2*v;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<I.g.length;S++){var C=this.i(A)>>>16,w=this.i(A)&65535,gt=I.i(S)>>>16,Ft=I.i(S)&65535;T[2*A+2*S]+=w*Ft,U(T,2*A+2*S),T[2*A+2*S+1]+=C*Ft,U(T,2*A+2*S+1),T[2*A+2*S+1]+=w*gt,U(T,2*A+2*S+1),T[2*A+2*S+2]+=C*gt,U(T,2*A+2*S+2)}for(A=0;A<v;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=v;A<2*v;A++)T[A]=0;return new o(T,0)};function U(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function F(I,v){this.g=I,this.h=v}function ee(I,v){if(b(v))throw Error("division by zero");if(b(I))return new F(p,p);if(R(I))return v=ee(P(I),v),new F(P(v.g),P(v.h));if(R(v))return v=ee(I,P(v)),new F(P(v.g),v.h);if(30<I.g.length){if(R(I)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=v;0>=A.l(I);)T=le(T),A=le(A);var S=J(T,1),C=J(A,1);for(A=J(A,2),T=J(T,2);!b(A);){var w=C.add(A);0>=w.l(I)&&(S=S.add(T),C=w),A=J(A,1),T=J(T,1)}return v=B(I,S.j(v)),new F(S,v)}for(S=p;0<=I.l(v);){for(T=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(T),w=C.j(v);R(w)||0<w.l(I);)T-=A,C=u(T),w=C.j(v);b(C)&&(C=g),S=S.add(C),I=B(I,w)}return new F(S,I)}t.A=function(I){return ee(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function le(I){for(var v=I.g.length+1,T=[],A=0;A<v;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function J(I,v){var T=v>>5;v%=32;for(var A=I.g.length-T,S=[],C=0;C<A;C++)S[C]=0<v?I.i(C+T)>>>v|I.i(C+T+1)<<32-v:I.i(C+T);return new o(S,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Pr=o}).apply(typeof Cf<"u"?Cf:typeof self<"u"?self:typeof window<"u"?window:{});var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e_,t_,ei,n_,xo,El,r_,s_,i_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _o=="object"&&_o];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in f))break e;f=f[k]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,k={next:function(){if(!m&&f<a.length){var N=f++;return{value:h(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function b(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,k,N){for(var K=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)K[Oe-2]=arguments[Oe];return h.prototype[k].apply(m,K)}}function R(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const k=a.length||0,N=m.length||0;a.length=k+N;for(let K=0;K<N;K++)a[k+K]=m[K]}else a.push(m)}}class B{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function ee(a){return ee[" "](a),a}ee[" "]=function(){};var le=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function J(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(f in m)a[f]=m[f];for(let N=0;N<T.length;N++)f=T[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function S(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){c.setTimeout(()=>{throw a},0)}function w(){var a=kt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class gt{constructor(){this.h=this.g=null}add(h,f){const m=Ft.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ft=new B(()=>new Ke,a=>a.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,kt=new gt,Ht=()=>{const a=c.Promise.resolve(void 0);ve=()=>{a.then(Ut)}};var Ut=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){C(f)}var h=Ft;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ge=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Dn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function nn(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(le){e:{try{ee(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:It[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}b(nn,Ue);var It={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Q(a,h,f,m,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=k,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,h,f,m,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var K=_(a,h,m,k);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new Q(h,this.src,N,!!m,k),h.fa=f,a.push(h)),h};function ke(a,h){var f=h.type;if(f in a.g){var m=a.g[f],k=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=k)&&Array.prototype.splice.call(m,k,1),N&&(te(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function _(a,h,f,m){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==m)return k}return-1}var E="closure_lm_"+(1e6*Math.random()|0),O={};function j(a,h,f,m,k){if(Array.isArray(h)){for(var N=0;N<h.length;N++)j(a,h[N],f,m,k);return null}return f=se(f),a&&a[L]?a.K(h,f,u(m)?!!m.capture:!!m,k):x(a,h,f,!1,m,k)}function x(a,h,f,m,k,N){if(!h)throw Error("Invalid event type");var K=u(k)?!!k.capture:!!k,Oe=Y(a);if(Oe||(a[E]=Oe=new Ee(a)),f=Oe.add(h,f,m,K,N),f.proxy)return f;if(m=H(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Dn||(k=K),k===void 0&&(k=!1),a.addEventListener(h.toString(),m,k);else if(a.attachEvent)a.attachEvent(z(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function H(){function a(f){return h.call(a.src,a.listener,f)}const h=q;return a}function G(a,h,f,m,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)G(a,h[N],f,m,k);else m=u(m)?!!m.capture:!!m,f=se(f),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],f=_(N,f,m,k),-1<f&&(te(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=_(h,f,m,k)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])ke(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(z(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Y(h))?(ke(f,a),f.h==0&&(f.src=null,h[E]=null)):te(a)}}}function z(a){return a in O?O[a]:O[a]="on"+a}function q(a,h){if(a.da)a=!0;else{h=new nn(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&W(a),a=f.call(m,h)}return a}function Y(a){return a=a[E],a instanceof Ee?a:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[ie]||(a[ie]=function(h){return a.handleEvent(h)}),a[ie])}function re(){Fe.call(this),this.i=new Ee(this),this.M=this,this.F=null}b(re,Fe),re.prototype[L]=!0,re.prototype.removeEventListener=function(a,h,f,m){G(this,a,h,f,m)};function ae(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var k=h;h=new Ue(m,a),A(h,k)}if(k=!0,f)for(var N=f.length-1;0<=N;N--){var K=h.g=f[N];k=Re(K,m,!0,h)&&k}if(K=h.g=a,k=Re(K,m,!0,h)&&k,k=Re(K,m,!1,h)&&k,f)for(N=0;N<f.length;N++)K=h.g=f[N],k=Re(K,m,!1,h)&&k}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)te(f[m]);delete a.g[h],a.h--}}this.F=null},re.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},re.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Re(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,N=0;N<h.length;++N){var K=h[N];if(K&&!K.da&&K.capture==f){var Oe=K.listener,Xe=K.ha||K.src;K.fa&&ke(a.i,K),k=Oe.call(Xe,m)!==!1&&k}}return k&&!m.defaultPrevented}function Te(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function He(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,He(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ot extends Fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:He(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(a){Fe.call(this),this.h=a,this.g={}}b(Bt,Fe);var Ds=[];function Vn(a){J(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}Bt.prototype.N=function(){Bt.aa.N.call(this),Vn(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=c.JSON.stringify,_t=c.JSON.parse,jt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Wr(){}Wr.prototype.h=null;function Xu(a){return a.h||(a.h=a.i())}function Zu(){}var Vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tc(){Ue.call(this,"d")}b(tc,Ue);function nc(){Ue.call(this,"c")}b(nc,Ue);var fr={},eh=null;function Qi(){return eh=eh||new re}fr.La="serverreachability";function th(a){Ue.call(this,fr.La,a)}b(th,Ue);function xs(a){const h=Qi();ae(h,new th(h))}fr.STAT_EVENT="statevent";function nh(a,h){Ue.call(this,fr.STAT_EVENT,a),this.stat=h}b(nh,Ue);function yt(a){const h=Qi();ae(h,new nh(h,a))}fr.Ma="timingevent";function rh(a,h){Ue.call(this,fr.Ma,a),this.size=h}b(rh,Ue);function Ls(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ms(){this.g=!0}Ms.prototype.xa=function(){this.g=!1};function Py(a,h,f,m,k,N){a.info(function(){if(a.g)if(N)for(var K="",Oe=N.split("&"),Xe=0;Xe<Oe.length;Xe++){var Ae=Oe[Xe].split("=");if(1<Ae.length){var it=Ae[0];Ae=Ae[1];var ot=it.split("_");K=2<=ot.length&&ot[1]=="type"?K+(it+"="+Ae+"&"):K+(it+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+h+`
`+f+`
`+K})}function Cy(a,h,f,m,k,N,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+h+`
`+f+`
`+N+" "+K})}function Kr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Oy(a,f)+(m?" "+m:"")})}function ky(a,h){a.info(function(){return"TIMEOUT: "+h})}Ms.prototype.info=function(){};function Oy(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return Hr(f)}catch{return h}}var Ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rc;function Yi(){}b(Yi,Wr),Yi.prototype.g=function(){return new XMLHttpRequest},Yi.prototype.i=function(){return{}},rc=new Yi;function xn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new Bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ih}function ih(){this.i=null,this.g="",this.h=!1}var oh={},sc={};function ic(a,h,f){a.L=1,a.v=to(gn(h)),a.m=f,a.P=!0,ah(a,null)}function ah(a,h){a.F=Date.now(),Xi(a),a.A=gn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),wh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new ih,a.g=Uh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ot(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ds[0]=k.toString()),k=Ds);for(var N=0;N<k.length;N++){var K=j(f,k[N],m||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),xs(),Py(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=_n(this.g);var h=this.g.Ba();const Qr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Ph(this.g)))){this.J||ot!=4||h==7||(h==8||0>=Qr?xs(3):xs(2)),oc(this);var f=this.g.Z();this.X=f;t:if(ch(this)){var m=Ph(this.g);a="";var k=m.length,N=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Fs(this);var K="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(N&&h==k-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,Cy(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Xe=this.g;if((Oe=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Oe)){var Ae=Oe;break t}}Ae=null}if(f=Ae)Kr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ac(this,f);else{this.o=!1,this.s=3,yt(12),pr(this),Fs(this);break e}}if(this.P){f=!0;let Wt;for(;!this.J&&this.C<K.length;)if(Wt=Ny(this,K),Wt==sc){ot==4&&(this.s=4,yt(14),f=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==oh){this.s=4,yt(15),Kr(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Kr(this.i,this.l,Wt,null),ac(this,Wt);if(ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||K.length!=0||this.h.h||(this.s=1,yt(16),f=!1),this.o=this.o&&f,!f)Kr(this.i,this.l,K,"[Invalid Chunked Response]"),pr(this),Fs(this);else if(0<K.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),fc(it),it.M=!0,yt(11))}}else Kr(this.i,this.l,K,null),ac(this,K);ot==4&&pr(this),this.o&&!this.J&&(ot==4?xh(this.j,this):(this.o=!1,Xi(this)))}else Qy(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),pr(this),Fs(this)}}}catch{}finally{}};function ch(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ny(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?sc:(f=Number(h.substring(f,m)),isNaN(f)?oh:(m+=1,m+f>h.length?sc:(h=h.slice(m,m+f),a.C=m+f,h)))}xn.prototype.cancel=function(){this.J=!0,pr(this)};function Xi(a){a.S=Date.now()+a.I,lh(a,a.I)}function lh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ls(g(a.ba,a),h)}function oc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ky(this.i,this.A),this.L!=2&&(xs(),yt(17)),pr(this),this.s=2,Fs(this)):lh(this,this.S-a)};function Fs(a){a.j.G==0||a.J||xh(a.j,a)}function pr(a){oc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Vn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ac(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||cc(f.h,a))){if(!a.K&&cc(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)oo(f),so(f);else break e;dc(f),yt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ls(g(f.Za,f),6e3));if(1>=dh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else gr(f,11)}else if((a.K||f.g==a)&&oo(f),!U(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Ae=k[h];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const it=Ae[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=Ae[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Qr=Ae[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(m=1.5*Qr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Wt=a.g;if(Wt){const co=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(co){var N=m.h;N.g||co.indexOf("spdy")==-1&&co.indexOf("quic")==-1&&co.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(lc(N,N.h),N.h=null))}if(m.D){const pc=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(m.ya=pc,Ve(m.I,m.D,pc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var K=a;if(m.qa=Fh(m,m.J?m.ia:null,m.W),K.K){fh(m.h,K);var Oe=K,Xe=m.L;Xe&&(Oe.I=Xe),Oe.B&&(oc(Oe),Xi(Oe)),m.g=K}else Dh(m);0<f.i.length&&io(f)}else Ae[0]!="stop"&&Ae[0]!="close"||gr(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?gr(f,7):hc(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}xs(4)}catch{}}var Dy=class{constructor(a,h){this.g=a,this.map=h}};function uh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dh(a){return a.h?1:a.g?a.g.size:0}function cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lc(a,h){a.g?a.g.add(h):a.h=h}function fh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}uh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ph(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return R(a.i)}function Vy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function xy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function mh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=xy(a),m=Vy(a),k=m.length,N=0;N<k;N++)h.call(void 0,m[N],f&&f[N],a)}var gh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ly(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),k=null;if(0<=m){var N=a[f].substring(0,m);k=a[f].substring(m+1)}else N=a[f];h(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof mr){this.h=a.h,Zi(this,a.j),this.o=a.o,this.g=a.g,eo(this,a.s),this.l=a.l;var h=a.i,f=new js;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),_h(this,f),this.m=a.m}else a&&(h=String(a).match(gh))?(this.h=!1,Zi(this,h[1]||"",!0),this.o=Us(h[2]||""),this.g=Us(h[3]||"",!0),eo(this,h[4]),this.l=Us(h[5]||"",!0),_h(this,h[6]||"",!0),this.m=Us(h[7]||"")):(this.h=!1,this.i=new js(null,this.h))}mr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Bs(h,yh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Bs(h,yh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Bs(f,f.charAt(0)=="/"?Uy:Fy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Bs(f,jy)),a.join("")};function gn(a){return new mr(a)}function Zi(a,h,f){a.j=f?Us(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function eo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function _h(a,h,f){h instanceof js?(a.i=h,$y(a.i,a.h)):(f||(h=Bs(h,By)),a.i=new js(h,a.h))}function Ve(a,h,f){a.i.set(h,f)}function to(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Us(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,My),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function My(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yh=/[#\/\?@]/g,Fy=/[#\?:]/g,Uy=/[#\?]/g,By=/[#\?@]/g,jy=/#/g;function js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&Ly(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=js.prototype,t.add=function(a,h){Ln(this),this.i=null,a=zr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function vh(a,h){Ln(a),h=zr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Eh(a,h){return Ln(a),h=zr(a,h),a.g.has(h)}t.forEach=function(a,h){Ln(this),this.g.forEach(function(f,m){f.forEach(function(k){a.call(h,k,m,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const k=a[m];for(let N=0;N<k.length;N++)f.push(h[m])}return f},t.V=function(a){Ln(this);let h=[];if(typeof a=="string")Eh(this,a)&&(h=h.concat(this.g.get(zr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Ln(this),this.i=null,a=zr(this,a),Eh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function wh(a,h,f){vh(a,h),0<f.length&&(a.i=null,a.g.set(zr(a,h),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const N=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var k=N;K[m]!==""&&(k+="="+encodeURIComponent(String(K[m]))),a.push(k)}}return this.i=a.join("&")};function zr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function $y(a,h){h&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(f,m){var k=m.toLowerCase();m!=k&&(vh(this,m),wh(this,k,f))},a)),a.j=h}function qy(a,h){const f=new Ms;if(c.Image){const m=new Image;m.onload=y(Mn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=y(Mn,f,"TestLoadImage: error",!1,h,m),m.onabort=y(Mn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=y(Mn,f,"TestLoadImage: timeout",!1,h,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Hy(a,h){const f=new Ms,m=new AbortController,k=setTimeout(()=>{m.abort(),Mn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(k),N.ok?Mn(f,"TestPingServer: ok",!0,h):Mn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Mn(f,"TestPingServer: error",!1,h)})}function Mn(a,h,f,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(f)}catch{}}function Wy(){this.g=new jt}function Ky(a,h,f){const m=f||"";try{mh(a,function(k,N){let K=k;u(k)&&(K=Hr(k)),h.push(m+N+"="+encodeURIComponent(K))})}catch(k){throw h.push(m+"type="+encodeURIComponent("_badmap")),k}}function $s(a){this.l=a.Ub||null,this.j=a.eb||!1}b($s,Wr),$s.prototype.g=function(){return new no(this.l,this.j)},$s.prototype.i=function(a){return function(){return a}}({});function no(a,h){re.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(no,re),t=no.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Th(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Th(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):Hs(this),this.readyState==3&&Th(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Hs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(no.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ih(a){let h="";return J(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function uc(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Ih(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ve(a,h,f))}function $e(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b($e,re);var zy=/^https?$/i,Gy=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rc.g(),this.v=this.o?Xu(this.o):Xu(rc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Ah(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)f.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Gy,h,void 0))||m||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of f)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Ah(this,N)}};function Ah(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,bh(a),ro(a)}function bh(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ro(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Rh(this):this.bb())},t.bb=function(){Rh(this)};function Rh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)Te(a.Ea,0,a);else if(ae(a,"readystatechange"),_n(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=K===0){var k=String(a.D).match(gh)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),m=!zy.test(k?k.toLowerCase():"")}f=m}if(f)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var N=2<_n(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",bh(a)}}finally{ro(a)}}}}function ro(a,h){if(a.g){Sh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ae(a,"ready");try{f.onreadystatechange=m}catch{}}}function Sh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),_t(h)}};function Ph(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qy(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var f=S(a[m]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[k]||[];h[k]=N,N.push(f)}I(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Ch(a){this.Aa=0,this.i=[],this.j=new Ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,a),this.cb=Ws("retryDelaySeedMs",1e4,a),this.Wa=Ws("forwardChannelMaxRetries",2,a),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new uh(a&&a.concurrentRequestLimit),this.Da=new Wy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ch.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){yt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Fh(this,null,this.W),io(this)};function hc(a){if(kh(a),a.G==3){var h=a.U++,f=gn(a.I);if(Ve(f,"SID",a.K),Ve(f,"RID",h),Ve(f,"TYPE","terminate"),Ks(a,f),h=new xn(a,a.j,h),h.L=2,h.v=to(gn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Uh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Xi(h)}Mh(a)}function so(a){a.g&&(fc(a),a.g.cancel(),a.g=null)}function kh(a){so(a),a.u&&(c.clearTimeout(a.u),a.u=null),oo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function io(a){if(!hh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ve||Ht(),ge||(ve(),ge=!0),kt.add(h,a),a.B=0}}function Jy(a,h){return dh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ls(g(a.Ga,a,h),Lh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new xn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Nh(this,k,h),f=gn(this.I),Ve(f,"RID",a),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),Ks(this,f),N&&(this.O?h="headers="+encodeURIComponent(String(Ih(N)))+"&"+h:this.m&&uc(f,this.m,N)),lc(this.h,k),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",h),Ve(f,"SID","null"),k.T=!0,ic(k,f,null)):ic(k,f,h),this.G=2}}else this.G==3&&(a?Oh(this,a):this.i.length==0||hh(this.h)||Oh(this))};function Oh(a,h){var f;h?f=h.l:f=a.U++;const m=gn(a.I);Ve(m,"SID",a.K),Ve(m,"RID",f),Ve(m,"AID",a.T),Ks(a,m),a.m&&a.o&&uc(m,a.m,a.o),f=new xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Nh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),lc(a.h,f),ic(f,m,h)}function Ks(a,h){a.H&&J(a.H,function(f,m){Ve(h,m,f)}),a.l&&mh({},function(f,m){Ve(h,m,f)})}function Nh(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const K=["count="+f];N==-1?0<f?(N=k[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Oe=!0;for(let Xe=0;Xe<f;Xe++){let Ae=k[Xe].g;const it=k[Xe].map;if(Ae-=N,0>Ae)N=Math.max(0,k[Xe].g-100),Oe=!1;else try{Ky(it,K,"req"+Ae+"_")}catch{m&&m(it)}}if(Oe){m=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Dh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ve||Ht(),ge||(ve(),ge=!0),kt.add(h,a),a.v=0}}function dc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ls(g(a.Fa,a),Lh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ls(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),so(this),Vh(this))};function fc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Vh(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);Ve(h,"RID","rpc"),Ve(h,"SID",a.K),Ve(h,"AID",a.T),Ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(h,"TO",a.ja),Ve(h,"TYPE","xmlhttp"),Ks(a,h),a.m&&a.o&&uc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=to(gn(h)),f.m=null,f.P=!0,ah(f,a)}t.Za=function(){this.C!=null&&(this.C=null,so(this),dc(this),yt(19))};function oo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function xh(a,h){var f=null;if(a.g==h){oo(a),fc(a),a.g=null;var m=2}else if(cc(a.h,h))f=h.D,fh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;m=Qi(),ae(m,new rh(m,f)),io(a)}else Dh(a);else if(k=h.s,k==3||k==0&&0<h.X||!(m==1&&Jy(a,h)||m==2&&dc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:gr(a,5);break;case 4:gr(a,10);break;case 3:gr(a,6);break;default:gr(a,2)}}}function Lh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function gr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const k=!m;m=new mr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zi(m,"https"),to(m),k?qy(m.toString(),f):Hy(m.toString(),f)}else yt(2);a.G=0,a.l&&a.l.sa(h),Mh(a),kh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Mh(a){if(a.G=0,a.ka=[],a.l){const h=ph(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Fh(a,h,f){var m=f instanceof mr?gn(f):new mr(f);if(m.g!="")h&&(m.g=h+"."+m.g),eo(m,m.s);else{var k=c.location;m=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var N=new mr(null);m&&Zi(N,m),h&&(N.g=h),k&&eo(N,k),f&&(N.l=f),m=N}return f=a.D,h=a.ya,f&&h&&Ve(m,f,h),Ve(m,"VER",a.la),Ks(a,m),m}function Uh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new $s({eb:f})):new $e(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bh(){}t=Bh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ao(){}ao.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){re.call(this),this.g=new Ch(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Gr(this)}b(Nt,re),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){hc(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Hr(a),a=f);h.i.push(new Dy(h.Ya++,a)),h.G==3&&io(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,Nt.aa.N.call(this)};function jh(a){tc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(jh,tc);function $h(){nc.call(this),this.status=1}b($h,nc);function Gr(a){this.g=a}b(Gr,Bh),Gr.prototype.ua=function(){ae(this.g,"a")},Gr.prototype.ta=function(a){ae(this.g,new jh(a))},Gr.prototype.sa=function(a){ae(this.g,new $h)},Gr.prototype.ra=function(){ae(this.g,"b")},ao.prototype.createWebChannel=ao.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,i_=function(){return new ao},s_=function(){return Qi()},r_=fr,El={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ji.NO_ERROR=0,Ji.TIMEOUT=8,Ji.HTTP_ERROR=6,xo=Ji,sh.COMPLETE="complete",n_=sh,Zu.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",re.prototype.listen=re.prototype.K,ei=Zu,t_=$s,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,e_=$e}).apply(typeof _o<"u"?_o:typeof self<"u"?self:typeof window<"u"?window:{});const kf="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Cs="10.13.1";/**
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
 */const xr=new su("@firebase/firestore");function Js(){return xr.logLevel}function ne(t,...e){if(xr.logLevel<=ye.DEBUG){const n=e.map(gu);xr.debug(`Firestore (${Cs}): ${t}`,...n)}}function Cn(t,...e){if(xr.logLevel<=ye.ERROR){const n=e.map(gu);xr.error(`Firestore (${Cs}): ${t}`,...n)}}function gs(t,...e){if(xr.logLevel<=ye.WARN){const n=e.map(gu);xr.warn(`Firestore (${Cs}): ${t}`,...n)}}function gu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function Ne(t,e){t||he()}function fe(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class o_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class PS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CS{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new o_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new lt(e)}}class kS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new NS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function VS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class a_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=VS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Qe(0,0))}static max(){return new de(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bi{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends bi{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const xS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends bi{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return xS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(xe.fromString(e))}static fromName(e){return new oe(xe.fromString(e).popFirst(5))}static empty(){return new oe(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new xe(e.slice()))}}function LS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new sr(s,oe.empty(),e)}function MS(t){return new sr(t.readTime,t.key,-1)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(de.min(),oe.empty(),-1)}static max(){return new sr(de.max(),oe.empty(),-1)}}function FS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const US="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $i(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==US)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function jS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class _u{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}_u.oe=-1;function Ma(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function $S(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nf(this.data.getIterator())}getIteratorFrom(e){return new Nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class Nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new nt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class l_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new l_("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const qS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=qS.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function yu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vu(t){const e=t.mapValue.fields.__previous_value__;return yu(e)?vu(e):e}function Ri(t){const e=ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class HS{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Si{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yu(t)?4:KS(t)?9007199254740991:WS(t)?10:11:he()}function mn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ir(s.timestampValue),c=ir(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Lr(s.bytesValue).isEqual(Lr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?ra(o)===ra(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Of(o)!==Of(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!mn(o[l],c[l])))return!1;return!0}(t,e);default:return he()}}function Pi(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Df(t.timestampValue,e.timestampValue);case 4:return Df(Ri(t),Ri(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Lr(i),l=Lr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=be(c[u],l[u]);if(d!==0)return d}return be(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=be(We(i.latitude),We(o.latitude));return c!==0?c:be(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const p=i.fields||{},g=o.fields||{},y=(c=p.value)===null||c===void 0?void 0:c.arrayValue,b=(l=g.value)===null||l===void 0?void 0:l.arrayValue,R=be(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return R!==0?R:Vf(y,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===vo.mapValue&&o===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(o===vo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=be(l[p],d[p]);if(g!==0)return g;const y=ys(c[l[p]],u[d[p]]);if(y!==0)return y}return be(l.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function Df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=ir(t),r=ir(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Vf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ys(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function vs(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wl(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function xf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tl(t){return!!t&&"integerValue"in t}function Eu(t){return!!t&&"arrayValue"in t}function Lf(t){return!!t&&"nullValue"in t}function Mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lo(t){return!!t&&"mapValue"in t}function WS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=hi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(hi(this.value))}}function u_(t){const e=[];return jr(t.fields,(n,r)=>{const s=new tt([n]);if(Lo(r)){const i=u_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
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
 */class ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ut(e,0,de.min(),de.min(),de.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,de.min(),de.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,de.min(),de.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function Ff(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=ys(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ci{constructor(e,n="asc"){this.field=e,this.dir=n}}function zS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class h_{}class Ge extends h_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QS(e,n,r):n==="array-contains"?new XS(e,r):n==="in"?new ZS(e,r):n==="not-in"?new eP(e,r):n==="array-contains-any"?new tP(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JS(e,r):new YS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ys(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends h_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return d_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function d_(t){return t.op==="and"}function f_(t){return GS(t)&&d_(t)}function GS(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function Il(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(f_(t))return t.filters.map(e=>Il(e)).join(",");{const e=t.filters.map(n=>Il(n)).join(",");return`${t.op}(${e})`}}function p_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&p_(o,s.filters[c]),!0):!1}(t,e):void he()}function m_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(m_).join(" ,")+"}"}(t):"Filter"}class QS extends Ge{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class JS extends Ge{constructor(e,n){super(e,"in",n),this.keys=g_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YS extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=g_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class XS extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eu(n)&&Pi(n.arrayValue,this.value)}}class ZS extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pi(this.value.arrayValue,n)}}class eP extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pi(this.value.arrayValue,n)}}class tP extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pi(this.value.arrayValue,r))}}/**
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
 */class nP{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Bf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new nP(t,e,n,r,s,i,o)}function wu(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Il(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.ue=n}return e.ue}function Tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!p_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uf(t.startAt,e.startAt)&&Uf(t.endAt,e.endAt)}function Al(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ks{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rP(t,e,n,r,s,i,o,c){return new ks(t,e,n,r,s,i,o,c)}function Iu(t){return new ks(t)}function jf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function __(t){return t.collectionGroup!==null}function di(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new nt(tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ci(i,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Ci(tt.keyField(),r))}return e.ce}function dn(t){const e=fe(t);return e.le||(e.le=sP(e,di(t))),e.le}function sP(t,e){if(t.limitType==="F")return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ci(s.field,i)});const n=t.endAt?new sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sa(t.startAt.position,t.startAt.inclusive):null;return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bl(t,e){const n=t.filters.concat([e]);return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ia(t,e,n){return new ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return Tu(dn(t),dn(e))&&t.limitType===e.limitType}function y_(t){return`${wu(dn(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>m_(s)).join(", ")}]`),Ma(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>vs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>vs(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Ff(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,di(r),s)||r.endAt&&!function(o,c,l){const u=Ff(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,di(r),s))}(t,e)}function iP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v_(t){return(e,n)=>{let r=!1;for(const s of di(t)){const i=oP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oP(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ys(l,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return c_(this.inner)}size(){return this.innerSize}}/**
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
 */const aP=new je(oe.comparator);function kn(){return aP}const E_=new je(oe.comparator);function ti(...t){let e=E_;for(const n of t)e=e.insert(n.key,n);return e}function w_(t){let e=E_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return fi()}function T_(){return fi()}function fi(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const cP=new je(oe.comparator),lP=new nt(oe.comparator);function _e(...t){let e=lP;for(const n of t)e=e.add(n);return e}const uP=new nt(be);function hP(){return uP}/**
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
 */function Au(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function I_(t){return{integerValue:""+t}}function dP(t,e){return $S(e)?I_(e):Au(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ba{constructor(){this._=void 0}}function fP(t,e,n){return t instanceof oa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yu(i)&&(i=vu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ki?b_(t,e):t instanceof Oi?R_(t,e):function(s,i){const o=A_(s,i),c=$f(o)+$f(s.Pe);return Tl(o)&&Tl(s.Pe)?I_(c):Au(s.serializer,c)}(t,e)}function pP(t,e,n){return t instanceof ki?b_(t,e):t instanceof Oi?R_(t,e):n}function A_(t,e){return t instanceof aa?function(r){return Tl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class oa extends Ba{}class ki extends Ba{constructor(e){super(),this.elements=e}}function b_(t,e){const n=S_(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oi extends Ba{constructor(e){super(),this.elements=e}}function R_(t,e){let n=S_(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class aa extends Ba{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function $f(t){return We(t.integerValue||t.doubleValue)}function S_(t){return Eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ki&&s instanceof ki||r instanceof Oi&&s instanceof Oi?_s(r.elements,s.elements,mn):r instanceof aa&&s instanceof aa?mn(r.Pe,s.Pe):r instanceof oa&&s instanceof oa}(t.transform,e.transform)}class gP{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function P_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bu(t.key,qt.none()):new Hi(t.key,t.data,qt.none());{const n=t.data,r=bt.empty();let s=new nt(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hr(t.key,r,new Lt(s.toArray()),qt.none())}}function _P(t,e,n){t instanceof Hi?function(s,i,o){const c=s.value.clone(),l=Hf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(s,i,o){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Hf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(C_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pi(t,e,n,r){return t instanceof Hi?function(i,o,c,l){if(!Mo(i.precondition,o))return c;const u=i.value.clone(),d=Wf(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,o,c,l){if(!Mo(i.precondition,o))return c;const u=Wf(i.fieldTransforms,l,o),d=o.data;return d.setAll(C_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function yP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=A_(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function qf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_s(r,s,(i,o)=>mP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hi extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function C_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hf(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,pP(o,c,n[s]))}return r}function Wf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fP(i,o,e))}return r}class bu extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vP extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_P(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=T_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=P_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>qf(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>qf(n,r))}}class Ru{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return cP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ru(e,n,r,s)}}/**
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
 */class wP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class TP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,we;function IP(t){switch(t){default:return he();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function k_(t){if(t===void 0)return Cn("GRPC error has no .code"),M.UNKNOWN;switch(t){case ze.OK:return M.OK;case ze.CANCELLED:return M.CANCELLED;case ze.UNKNOWN:return M.UNKNOWN;case ze.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ze.INTERNAL:return M.INTERNAL;case ze.UNAVAILABLE:return M.UNAVAILABLE;case ze.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ze.NOT_FOUND:return M.NOT_FOUND;case ze.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ze.ABORTED:return M.ABORTED;case ze.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ze.DATA_LOSS:return M.DATA_LOSS;default:return he()}}(we=ze||(ze={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function AP(){return new TextEncoder}/**
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
 */const bP=new Pr([4294967295,4294967295],0);function Kf(t){const e=AP().encode(t),n=new Zg;return n.update(e),new Uint8Array(n.digest())}function zf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([s,i],0)]}class Su{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ni(`Invalid padding: ${n}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ni(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Pr.fromNumber(r)));return s.compare(bP)===1&&(s=new Pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Kf(e),[r,s]=zf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Su(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Kf(e),[r,s]=zf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(de.min(),s,new je(be),kn(),_e())}}class Wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wi(r,n,_e(),_e(),_e())}}/**
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
 */class Fo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class O_{constructor(e,n){this.targetId=e,this.me=n}}class N_{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gf{constructor(){this.fe=0,this.ge=Jf(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Wi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Jf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RP{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=Qf(),this.Qe=new je(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Al(i))if(r===0){const o=new oe(i.path);this.Ue(n,o,ut.newNoDocument(o,de.min()))}else Ne(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Lr(r).toUint8Array()}catch(l){if(l instanceof l_)return gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Su(o,s,i)}catch(l){return gs(l instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Al(c.target)){const l=new oe(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ut.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new $a(e,n,this.Qe,this.ke,r);return this.ke=kn(),this.qe=Qf(),this.Qe=new je(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Gf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Qf(){return new je(oe.comparator)}function Jf(){return new je(oe.comparator)}const SP={asc:"ASCENDING",desc:"DESCENDING"},PP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CP={and:"AND",or:"OR"};class kP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rl(t,e){return t.useProto3Json||Ma(e)?e:{value:e}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function D_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OP(t,e){return ca(t,e.toTimestamp())}function fn(t){return Ne(!!t),de.fromTimestamp(function(n){const r=ir(n);return new Qe(r.seconds,r.nanos)}(t))}function Pu(t,e){return Sl(t,e).canonicalString()}function Sl(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function V_(t){const e=xe.fromString(t);return Ne(U_(e)),e}function Pl(t,e){return Pu(t.databaseId,e.path)}function Mc(t,e){const n=V_(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(L_(n))}function x_(t,e){return Pu(t.databaseId,e)}function NP(t){const e=V_(t);return e.length===4?xe.emptyPath():L_(e)}function Cl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L_(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yf(t,e,n){return{name:Pl(t,e),fields:n.value.mapValue.fields}}function DP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string"),st.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),st.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?M.UNKNOWN:k_(u.code);return new X(d,u.message||"")}(o);n=new N_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mc(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):de.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Fo(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mc(t,r.document),i=r.readTime?fn(r.readTime):de.min(),o=ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Fo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mc(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new TP(s,i),c=r.targetId;n=new O_(c,o)}}return n}function VP(t,e){let n;if(e instanceof Hi)n={update:Yf(t,e.key,e.value)};else if(e instanceof bu)n={delete:Pl(t,e.key)};else if(e instanceof hr)n={update:Yf(t,e.key,e.data),updateMask:qP(e.fieldMask)};else{if(!(e instanceof vP))return he();n={verify:Pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Oi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof aa)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:OP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function xP(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(de.min())&&(o=fn(i)),new gP(o,s.transformResults||[])}(n,e))):[]}function LP(t,e){return{documents:[x_(t,e.path)]}}function MP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=x_(t,s);const i=function(u){if(u.length!==0)return F_(Zt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Xr(g.field),direction:BP(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Rl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function FP(t){let e=NP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=M_(p);return g instanceof Zt&&f_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(b){return new Ci(Zr(b.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ma(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,y=p.values||[];return new sa(y,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,y=p.values||[];return new sa(y,g)}(n.endAt)),rP(e,s,o,i,c,"F",l,u)}function UP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>M_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function BP(t){return SP[t]}function jP(t){return PP[t]}function $P(t){return CP[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return tt.fromServerFormat(t.fieldPath)}function F_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Mf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(Lf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(Lf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:jP(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>F_(s));return r.length===1?r[0]:{compositeFilter:{op:$P(n.op),filters:r}}}(t):he()}function qP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Jn{constructor(e,n,r,s,i=de.min(),o=de.min(),c=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HP{constructor(e){this.ct=e}}function WP(t){const e=FP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ia(e,e.limit,"L"):e}/**
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
 */class KP{constructor(){this.un=new zP}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(sr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class zP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(xe.comparator)).toArray()}}/**
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
 */class Es{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Es(0)}static kn(){return new Es(-1)}}/**
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
 */class GP{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&pi(r.mutation,s,Lt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ti();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=kn();const o=fi(),c=function(){return fi()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof hr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),pi(d.mutation,u,d.mutation.getFieldMask(),Qe.now())):o.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new QP(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=fi();let s=new je((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Lt.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=T_();d.forEach(g=>{if(!i.has(g)){const y=P_(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):__(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Ar());let c=-1,l=i;return o.next(u=>$.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(d=>({batchId:c,changes:w_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(p,g){return new ks(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ut.newInvalidDocument(d)))});let c=ti();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&pi(d.mutation,u,Lt.empty(),Qe.now()),Ua(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class YP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:WP(s.bundledQuery),readTime:fn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class XP{constructor(){this.overlays=new je(oe.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new oe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Ar(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Ar(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return $.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wP(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ZP{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Cu{constructor(){this.Tr=new nt(Ye.Er),this.dr=new nt(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new oe(new xe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new oe(new xe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return oe.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||oe.comparator(e.key,n.key)}}/**
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
 */class eC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(Ye.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(be);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new oe(i),0);let c=new nt(be);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),$.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tC{constructor(e){this.Mr=e,this.docs=function(){return new je(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,c=new oe(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||FS(MS(d),r)<=0||(s.has(d.key)||Ua(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nC(this)}getSize(e){return $.resolve(this.size)}}class nC extends GP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class rC{constructor(e){this.persistence=e,this.Nr=new Os(n=>wu(n),Tu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cu,this.targetCount=0,this.kr=Es.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class sC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new _u(0),this.Kr=!1,this.Kr=!0,this.$r=new ZP,this.referenceDelegate=e(this),this.Ur=new rC(this),this.indexManager=new KP,this.remoteDocumentCache=function(s){return new tC(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new HP(n),this.Gr=new YP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new eC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new iC(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class iC extends BS{constructor(e){super(),this.currentSequenceNumber=e}}class ku{constructor(e){this.persistence=e,this.Jr=new Cu,this.Yr=null}static Zr(e){return new ku(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=oe.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Ou{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ou(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class oC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zA()?8:jS(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new oC;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Js()<=ye.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Js()<=ye.DEBUG&&ne("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Js()<=ye.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):$.resolve())}Yi(e,n){if(jf(n))return $.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ia(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,ia(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return jf(n)||s.isEqual(de.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?$.resolve(null):(Js()<=ye.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.rs(e,o,n,LS(s,-1)).next(c=>c))})}ts(e,n){let r=new nt(v_(e));return n.forEach((s,i)=>{Ua(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Js()<=ye.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.Ji.getDocumentsMatchingQuery(e,n,sr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class cC{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(be),this._s=new Os(i=>wu(i),Tu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function lC(t,e,n,r){return new cC(t,e,n,r)}async function B_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function uC(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,g=p.keys();let y=$.resolve();return g.forEach(b=>{y=y.next(()=>d.getEntry(l,b)).next(R=>{const P=u.docVersions.get(b);Ne(P!==null),R.version.compareTo(P)<0&&(p.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),d.addEntry(R)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function j_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function hC(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(st.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(R,P,B){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,y,d)&&c.push(n.Ur.updateTargetData(i,y))});let l=kn(),u=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(dC(i,o,e.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!r.isEqual(de.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return $.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function dC(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ne("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function fC(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pC(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function kl(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qi(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Xf(t,e,n){const r=fe(t);let s=de.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=fe(l),g=p._s.get(d);return g!==void 0?$.resolve(p.os.get(g)):p.Ur.getTargetData(u,d)}(r,o,dn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:_e())).next(c=>(mC(r,iP(e),c),{documents:c,Ts:i})))}function mC(t,e,n){let r=t.us.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Zf{constructor(){this.activeTargetIds=hP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gC{constructor(){this.so=new Zf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Zf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _C{_o(e){}shutdown(){}}/**
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
 */class ep{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Eo=null;function Fc(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
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
 */const yC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const at="WebChannelConnection";class EC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Fc(),l=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(d=>(ne("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw gs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=yC[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Fc();return new Promise((o,c)=>{const l=new e_;l.setWithCredentials(!0),l.listenOnce(n_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xo.NO_ERROR:const d=l.getResponseJson();ne(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case xo.TIMEOUT:ne(at,`RPC '${e}' ${i} timed out`),c(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case xo.HTTP_ERROR:const p=l.getStatus();if(ne(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const b=function(P){const B=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(B)>=0?B:M.UNKNOWN}(y.status);c(new X(b,y.message))}else c(new X(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new X(M.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ne(at,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Fc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i_(),c=s_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new t_({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");ne(at,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,y=!1;const b=new vC({Io:P=>{y?ne(at,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(ne(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ne(at,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},To:()=>p.close()}),R=(P,B,U)=>{P.listen(B,F=>{try{U(F)}catch(ee){setTimeout(()=>{throw ee},0)}})};return R(p,ei.EventType.OPEN,()=>{y||(ne(at,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),R(p,ei.EventType.CLOSE,()=>{y||(y=!0,ne(at,`RPC '${e}' stream ${s} transport closed`),b.So())}),R(p,ei.EventType.ERROR,P=>{y||(y=!0,gs(at,`RPC '${e}' stream ${s} transport errored:`,P),b.So(new X(M.UNAVAILABLE,"The operation could not be completed")))}),R(p,ei.EventType.MESSAGE,P=>{var B;if(!y){const U=P.data[0];Ne(!!U);const F=U,ee=F.error||((B=F[0])===null||B===void 0?void 0:B.error);if(ee){ne(at,`RPC '${e}' stream ${s} received error:`,ee);const le=ee.status;let J=function(T){const A=ze[T];if(A!==void 0)return k_(A)}(le),I=ee.message;J===void 0&&(J=M.INTERNAL,I="Unknown error status: "+le+" with message "+ee.message),y=!0,b.So(new X(J,I)),p.close()}else ne(at,`RPC '${e}' stream ${s} received:`,U),b.bo(U)}}),R(c,r_.STAT_EVENT,P=>{P.stat===El.PROXY?ne(at,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===El.NOPROXY&&ne(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function Uc(){return typeof document<"u"?document:null}/**
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
 */function qa(t){return new kP(t,!0)}/**
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
 */class $_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class q_{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new X(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wC extends q_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=DP(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?fn(o.readTime):de.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Cl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Al(l)?{documents:LP(i,l)}:{query:MP(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=D_(i,o.resumeToken);const u=Rl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){c.readTime=ca(i,o.snapshotVersion.toTimestamp());const u=Rl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=UP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Cl(this.serializer),n.removeTarget=e,this.a_(n)}}class TC extends q_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=xP(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Cl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VP(this.serializer,r))};this.a_(n)}}/**
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
 */class IC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Sl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Sl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Cn(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class bC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{$r(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=fe(l);u.L_.add(4),await Ki(u),u.q_.set("Unknown"),u.L_.delete(4),await Ha(u)}(this))})}),this.q_=new AC(r,s)}}async function Ha(t){if($r(t))for(const e of t.B_)await e(!0)}async function Ki(t){for(const e of t.B_)await e(!1)}function H_(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),xu(n)?Vu(n):Ns(n).r_()&&Du(n,e))}function Nu(t,e){const n=fe(t),r=Ns(n);n.N_.delete(e),r.r_()&&W_(n,e),n.N_.size===0&&(r.r_()?r.o_():$r(n)&&n.q_.set("Unknown"))}function Du(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).A_(e)}function W_(t,e){t.Q_.xe(e),Ns(t).R_(e)}function Vu(t){t.Q_=new RP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.q_.v_()}function xu(t){return $r(t)&&!Ns(t).n_()&&t.N_.size>0}function $r(t){return fe(t).L_.size===0}function K_(t){t.Q_=void 0}async function RC(t){t.q_.set("Online")}async function SC(t){t.N_.forEach((e,n)=>{Du(t,e)})}async function PC(t,e){K_(t),xu(t)?(t.q_.M_(e),Vu(t)):t.q_.set("Unknown")}async function CC(t,e,n){if(t.q_.set("Online"),e instanceof N_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Fo?t.Q_.Ke(e):e instanceof O_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const r=await j_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(st.EMPTY_BYTE_STRING,d.snapshotVersion)),W_(i,l);const p=new Jn(d.target,l,u,d.sequenceNumber);Du(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!qi(e))throw e;t.L_.add(1),await Ki(t),t.q_.set("Offline"),n||(n=()=>j_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ha(t)})}function z_(t,e){return e().catch(n=>la(t,n,e))}async function Wa(t){const e=fe(t),n=or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;kC(e);)try{const s=await fC(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,OC(e,s)}catch(s){await la(e,s)}G_(e)&&Q_(e)}function kC(t){return $r(t)&&t.O_.length<10}function OC(t,e){t.O_.push(e);const n=or(t);n.r_()&&n.V_&&n.m_(e.mutations)}function G_(t){return $r(t)&&!or(t).n_()&&t.O_.length>0}function Q_(t){or(t).start()}async function NC(t){or(t).p_()}async function DC(t){const e=or(t);for(const n of t.O_)e.m_(n.mutations)}async function VC(t,e,n){const r=t.O_.shift(),s=Ru.from(r,e,n);await z_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wa(t)}async function xC(t,e){e&&or(t).V_&&await async function(r,s){if(function(o){return IP(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();or(r).s_(),await z_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wa(r)}}(t,e),G_(t)&&Q_(t)}async function tp(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=$r(n);n.L_.add(3),await Ki(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ha(n)}async function LC(t,e){const n=fe(t);e?(n.L_.delete(2),await Ha(n)):e||(n.L_.add(2),await Ki(n),n.q_.set("Unknown"))}function Ns(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new wC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:RC.bind(null,t),Ro:SC.bind(null,t),mo:PC.bind(null,t),d_:CC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),xu(t)?Vu(t):t.q_.set("Unknown")):(await t.K_.stop(),K_(t))})),t.K_}function or(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new TC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:NC.bind(null,t),mo:xC.bind(null,t),f_:DC.bind(null,t),g_:VC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wa(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Lu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Lu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mu(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),qi(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=ti(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class np{constructor(){this.W_=new je(oe.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ws(e,n,us.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class MC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class FC{constructor(){this.queries=rp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=rp(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new X(M.ABORTED,"Firestore shutting down"))}}function rp(){return new Os(t=>y_(t),Fa)}async function J_(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new MC,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Mu(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Fu(n)}async function Y_(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UC(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Fu(n)}function BC(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Fu(t){t.Y_.forEach(e=>{e.next()})}var Ol,sp;(sp=Ol||(Ol={})).ea="default",sp.Cache="cache";class X_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ol.Cache}}/**
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
 */class Z_{constructor(e){this.key=e}}class ey{constructor(e){this.key=e}}class jC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=v_(e),this.Ra=new us(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new np,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),y=Ua(this.query,p)?p:null,b=!!g&&this.mutatedKeys.has(g.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;g&&y?g.data.isEqual(y.data)?b!==R&&(r.track({type:3,doc:y}),P=!0):this.ga(g,y)||(r.track({type:2,doc:y}),P=!0,(l&&this.Aa(y,l)>0||u&&this.Aa(y,u)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),P=!0):g&&!y&&(r.track({type:1,doc:g}),P=!0,(l||u)&&(c=!0)),P&&(y?(o=o.add(y),i=R?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(y,b){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return R(y)-R(b)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new ws(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new np,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ey(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Z_(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ws.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class $C{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qC{constructor(e){this.key=e,this.va=!1}}class HC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Os(c=>y_(c),Fa),this.Ma=new Map,this.xa=new Set,this.Oa=new je(oe.comparator),this.Na=new Map,this.La=new Cu,this.Ba={},this.ka=new Map,this.qa=Es.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WC(t,e,n=!0){const r=oy(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ty(r,e,n,!0),s}async function KC(t,e){const n=oy(t);await ty(n,e,!0,!1)}async function ty(t,e,n,r){const s=await pC(t.localStore,dn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await zC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&H_(t.remoteStore,s),c}async function zC(t,e,n,r,s){t.Ka=(p,g,y)=>async function(R,P,B,U){let F=P.view.ma(B);F.ns&&(F=await Xf(R.localStore,P.query,!1).then(({documents:I})=>P.view.ma(I,F)));const ee=U&&U.targetChanges.get(P.targetId),le=U&&U.targetMismatches.get(P.targetId)!=null,J=P.view.applyChanges(F,R.isPrimaryClient,ee,le);return op(R,P.targetId,J.wa),J.snapshot}(t,p,g,y);const i=await Xf(t.localStore,e,!0),o=new jC(e,i.Ts),c=o.ma(i.documents),l=Wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);op(t,n,u.wa);const d=new $C(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function GC(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Fa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nu(r.remoteStore,s.targetId),Nl(r,s.targetId)}).catch($i)):(Nl(r,s.targetId),await kl(r.localStore,s.targetId,!0))}async function QC(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nu(n.remoteStore,r.targetId))}async function JC(t,e,n){const r=rk(t);try{const s=await function(o,c){const l=fe(o),u=Qe.now(),d=c.reduce((y,b)=>y.add(b.key),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=kn(),R=_e();return l.cs.getEntries(y,d).next(P=>{b=P,b.forEach((B,U)=>{U.isValidDocument()||(R=R.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,b)).next(P=>{p=P;const B=[];for(const U of c){const F=yP(U,p.get(U.key).overlayedDocument);F!=null&&B.push(new hr(U.key,F,u_(F.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,B,c)}).next(P=>{g=P;const B=P.applyToLocalDocumentSet(p,R);return l.documentOverlayCache.saveOverlays(y,P.batchId,B)})}).then(()=>({batchId:g.batchId,changes:w_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new je(be)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await zi(r,s.changes),await Wa(r.remoteStore)}catch(s){const i=Mu(s,"Failed to persist write");n.reject(i)}}async function ny(t,e){const n=fe(t);try{const r=await hC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ne(o.va):s.removedDocuments.size>0&&(Ne(o.va),o.va=!1))}),await zi(n,r,e)}catch(r){await $i(r)}}function ip(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(c)&&(u=!0)}),u&&Fu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(oe.comparator);o=o.insert(i,ut.newNoDocument(i,de.min()));const c=_e().add(i),l=new $a(de.min(),new Map,new je(be),o,c);await ny(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Uu(r)}else await kl(r.localStore,e,!1).then(()=>Nl(r,e,n)).catch($i)}async function XC(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await uC(n.localStore,e);sy(n,r,null),ry(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zi(n,s)}catch(s){await $i(s)}}async function ZC(t,e,n){const r=fe(t);try{const s=await function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ne(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);sy(r,e,n),ry(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zi(r,s)}catch(s){await $i(s)}}function ry(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function sy(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Nl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||iy(t,r)})}function iy(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Nu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Uu(t))}function op(t,e,n){for(const r of n)r instanceof Z_?(t.La.addReference(r.key,e),ek(t,r)):r instanceof ey?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||iy(t,r.key)):he()}function ek(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),Uu(t))}function Uu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new oe(xe.fromString(e)),r=t.qa.next();t.Na.set(r,new qC(n)),t.Oa=t.Oa.insert(n,r),H_(t.remoteStore,new Jn(dn(Iu(n.path)),r,"TargetPurposeLimboResolution",_u.oe))}}async function zi(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ou.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const d=fe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,g=>$.forEach(g.$i,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>$.forEach(g.Ui,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!qi(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=d.os.get(g),b=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(b);d.os=d.os.insert(g,R)}}}(r.localStore,i))}async function tk(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await B_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new X(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zi(n,r.hs)}}function nk(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function oy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.Ca.d_=UC.bind(null,e.eventManager),e.Ca.$a=BC.bind(null,e.eventManager),e}function rk(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZC.bind(null,e),e}class ap{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lC(this.persistence,new aC,e.initialUser,this.serializer)}createPersistence(e){return new sC(ku.Zr,this.serializer)}createSharedClientState(e){return new gC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ip(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tk.bind(null,this.syncEngine),await LC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FC}()}createDatastore(e){const n=qa(e.databaseInfo.databaseId),r=function(i){return new EC(i)}(e.databaseInfo);return function(i,o,c,l){return new IC(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new bC(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ip(this.syncEngine,n,0),function(){return ep.D()?new ep:new _C}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new HC(s,i,o,c,l,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);ne("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ki(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ik{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=a_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ne("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ne("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await B_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ak(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>tp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>tp(e.remoteStore,s)),t._onlineComponents=e}function ok(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ak(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ok(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new ap)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Bc(t,new ap);return t._offlineComponents}async function cy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await cp(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await cp(t,new sk))),t._onlineComponents}function ck(t){return cy(t).then(e=>e.syncEngine)}async function ly(t){const e=await cy(t),n=e.eventManager;return n.onListen=WC.bind(null,e.syncEngine),n.onUnlisten=GC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QC.bind(null,e.syncEngine),n}function lk(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new ay({next:g=>{o.enqueueAndForget(()=>Y_(i,p));const y=g.docs.has(c);!y&&g.fromCache?u.reject(new X(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?u.reject(new X(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new X_(Iu(c.path),d,{includeMetadataChanges:!0,_a:!0});return J_(i,p)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}function uk(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new ay({next:g=>{o.enqueueAndForget(()=>Y_(i,p)),g.fromCache&&l.source==="server"?u.reject(new X(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new X_(c,d,{includeMetadataChanges:!0,_a:!0});return J_(i,p)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const lp=new Map;/**
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
 */function hy(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hk(t,e,n,r){if(e===!0&&r===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function up(t){if(!oe.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hp(t){if(oe.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ka(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ka(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function dk(t,e){if(e<=0)throw new X(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class dp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class za{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SS;switch(r.type){case"firstParty":return new OS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lp.get(n);r&&(ne("ComponentProvider","Removing Datastore"),lp.delete(n),r.terminate())}(this),Promise.resolve()}}function fk(t,e,n,r={}){var s;const i=(t=en(t,za))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=lt.MOCK_USER;else{c=jA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(u)}t._authCredentials=new PS(new o_(c,l))}}/**
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
 */class dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dr(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class nr extends dr{constructor(e,n,r){super(e,n,Iu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new oe(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function fp(t,e,...n){if(t=rt(t),hy("collection","path",e),t instanceof za){const r=xe.fromString(e,...n);return hp(r),new nr(t,null,r)}{if(!(t instanceof Tt||t instanceof nr))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return hp(r),new nr(t.firestore,null,r)}}function Ts(t,e,...n){if(t=rt(t),arguments.length===1&&(e=a_.newId()),hy("doc","path",e),t instanceof za){const r=xe.fromString(e,...n);return up(r),new Tt(t,null,new oe(r))}{if(!(t instanceof Tt||t instanceof nr))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return up(r),new Tt(t.firestore,t instanceof nr?t.converter:null,new oe(r))}}/**
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
 */class pk{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new $_(this,"async_queue_retry"),this.Eu=()=>{const n=Uc();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Uc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Rn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!qi(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Lu.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&he()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class qr extends za{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new pk}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dy(this),this._firestoreClient.terminate()}}function Ga(t,e){const n=typeof t=="object"?t:mg(),r=typeof t=="string"?t:"(default)",s=ou(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=UA("firestore");i&&fk(s,...i)}return s}function Bu(t){return t._firestoreClient||dy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dy(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new HS(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,uy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ik(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(st.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ju{constructor(e){this._methodName=e}}/**
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
 */class $u{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class qu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const mk=/^__.*__$/;class gk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hi(e,this.data,n,this.fieldTransforms)}}class fy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function py(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Hu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Hu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return ua(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(py(this.wu)&&mk.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class _k{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qa(e)}Nu(e,n,r,s=!1){return new Hu({wu:e,methodName:n,Ou:r,path:tt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ja(t){const e=t._freezeSettings(),n=qa(t._databaseId);return new _k(t._databaseId,!!e.ignoreUndefinedProperties,n)}function my(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Wu("Data must be an object, but it was:",o,r);const c=gy(r,o);let l,u;if(i.merge)l=new Lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Dl(e,p,n);if(!o.contains(g))throw new X(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);yy(d,g)||d.push(g)}l=new Lt(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new gk(new bt(c),l,u)}class Ya extends ju{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ya}}function yk(t,e,n,r){const s=t.Nu(1,e,n);Wu("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();jr(r,(l,u)=>{const d=Ku(e,l,n);u=rt(u);const p=s.Cu(d);if(u instanceof Ya)i.push(d);else{const g=Gi(u,p);g!=null&&(i.push(d),o.set(d,g))}});const c=new Lt(i);return new fy(o,c,s.fieldTransforms)}function vk(t,e,n,r,s,i){const o=t.Nu(1,e,n),c=[Dl(e,r,n)],l=[s];if(i.length%2!=0)throw new X(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Dl(e,i[g])),l.push(i[g+1]);const u=[],d=bt.empty();for(let g=c.length-1;g>=0;--g)if(!yy(u,c[g])){const y=c[g];let b=l[g];b=rt(b);const R=o.Cu(y);if(b instanceof Ya)u.push(y);else{const P=Gi(b,R);P!=null&&(u.push(y),d.set(y,P))}}const p=new Lt(u);return new fy(d,p,o.fieldTransforms)}function Ek(t,e,n,r=!1){return Gi(n,t.Nu(r?4:3,e))}function Gi(t,e){if(_y(t=rt(t)))return Wu("Unsupported field value:",e,t),gy(t,e);if(t instanceof ju)return function(r,s){if(!py(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Gi(c,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:ca(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(r instanceof $u)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Is)return{bytesValue:D_(s.serializer,r._byteString)};if(r instanceof Tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return Au(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Ka(r)}`)}(t,e)}function gy(t,e){const n={};return c_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(r,s)=>{const i=Gi(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof $u||t instanceof Is||t instanceof Tt||t instanceof ju||t instanceof qu)}function Wu(t,e,n){if(!_y(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ka(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Dl(t,e,n){if((e=rt(e))instanceof Qa)return e._internalPath;if(typeof e=="string")return Ku(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const wk=new RegExp("[~\\*/\\[\\]]");function Ku(t,e,n){if(e.search(wk)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qa(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(M.INVALID_ARGUMENT,c+t+l)}function yy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tk extends vy{data(){return super.data()}}function Xa(t,e){return typeof e=="string"?Ku(t,e):e instanceof Qa?e._internalPath:e._delegate._internalPath}/**
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
 */function Ik(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zu{}class Gu extends zu{}function jc(t,e,...n){let r=[];e instanceof zu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Qu).length,c=i.filter(l=>l instanceof Za).length;if(o>1||o>0&&c>0)throw new X(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Za extends Gu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Za(e,n,r)}_apply(e){const n=this._parse(e);return Ey(e._query,n),new dr(e.firestore,e.converter,bl(e._query,n))}_parse(e){const n=Ja(e.firestore);return function(i,o,c,l,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){mp(p,d);const y=[];for(const b of p)y.push(pp(l,i,b));g={arrayValue:{values:y}}}else g=pp(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||mp(p,d),g=Ek(c,o,p,d==="in"||d==="not-in");return Ge.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ak(t,e,n){const r=e,s=Xa("where",t);return Za._create(s,r,n)}class Qu extends zu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ey(o,l),o=bl(o,l)}(e._query,n),new dr(e.firestore,e.converter,bl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ju extends Gu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ju(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ci(i,o)}(e._query,this._field,this._direction);return new dr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ks(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function bk(t,e="asc"){const n=e,r=Xa("orderBy",t);return Ju._create(r,n)}class Yu extends Gu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Yu(e,n,r)}_apply(e){return new dr(e.firestore,e.converter,ia(e._query,this._limit,this._limitType))}}function Rk(t){return dk("limit",t),Yu._create("limit",t,"F")}function pp(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new X(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!__(e)&&n.indexOf("/")!==-1)throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!oe.isDocumentKey(r))throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xf(t,new oe(r))}if(n instanceof Tt)return xf(t,n._key);throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ka(n)}.`)}function mp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ey(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Sk{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>We(o.doubleValue));return new qu(i)}convertGeoPoint(e){return new $u(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const n=ir(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Ne(U_(r));const s=new Si(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function wy(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ty extends vy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Uo extends Ty{data(e={}){return super.data(e)}}class Pk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ri(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ri(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:Ck(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ck(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function Iy(t){t=en(t,Tt);const e=en(t.firestore,qr);return lk(Bu(e),t._key).then(n=>xk(e,t,n))}class Ay extends Sk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function kk(t){t=en(t,dr);const e=en(t.firestore,qr),n=Bu(e),r=new Ay(e);return Ik(t._query),uk(n,t._query).then(s=>new Pk(e,r,t,s))}function Ok(t,e,n){t=en(t,Tt);const r=en(t.firestore,qr),s=wy(t.converter,e);return ec(r,[my(Ja(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qt.none())])}function Nk(t,e,n,...r){t=en(t,Tt);const s=en(t.firestore,qr),i=Ja(s);let o;return o=typeof(e=rt(e))=="string"||e instanceof Qa?vk(i,"updateDoc",t._key,e,n,r):yk(i,"updateDoc",t._key,e),ec(s,[o.toMutation(t._key,qt.exists(!0))])}function Dk(t){return ec(en(t.firestore,qr),[new bu(t._key,qt.none())])}function Vk(t,e){const n=en(t.firestore,qr),r=Ts(t),s=wy(t.converter,e);return ec(n,[my(Ja(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function ec(t,e){return function(r,s){const i=new Rn;return r.asyncQueue.enqueueAndForget(async()=>JC(await ck(r),s,i)),i.promise}(Bu(t),e)}function xk(t,e,n){const r=n.docs.get(e._key),s=new Ay(t);return new Ty(t,s,e._key,r,new ri(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Cs=s})(Rs),ms(new Nr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new qr(new CS(r.getProvider("auth-internal")),new DS(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),tr(kf,"4.7.1",e),tr(kf,"4.7.1","esm2017")})();const Lk={class:"register-container"},Mk=V("h1",null,"Create an Account",-1),Fk=V("option",{value:"user"},"User",-1),Uk=V("option",{value:"admin"},"Admin",-1),Bk=[Fk,Uk],jk={__name:"FirebaseRegisterView",setup(t){const e=Ze(""),n=Ze(""),r=Ze("user"),s=Na(),i=Ps(),o=Ga(),c=async()=>{try{const u=(await sR(i,e.value,n.value)).user;await Ok(Ts(o,"users",u.uid),{email:u.email,role:r.value,createdAt:new Date}),console.log("Firebase Register Successful! User data saved in Firestore."),s.push("/FireLogin")}catch(l){console.error("Error during registration:",l.code),alert("Error: "+l.message)}};return(l,u)=>(Be(),qe("div",Lk,[Mk,V("p",null,[wt(V("input",{type:"text",placeholder:"Email","onUpdate:modelValue":u[0]||(u[0]=d=>e.value=d),class:"form-control"},null,512),[[Gt,e.value]])]),V("p",null,[wt(V("input",{type:"password",placeholder:"Password","onUpdate:modelValue":u[1]||(u[1]=d=>n.value=d),class:"form-control"},null,512),[[Gt,n.value]])]),V("p",null,[wt(V("select",{"onUpdate:modelValue":u[2]||(u[2]=d=>r.value=d),class:"form-control"},Bk,512),[[Wo,r.value]])]),V("p",null,[V("button",{class:"btn",onClick:c},"Save to Firebase")])]))}},$k={class:"signin-container"},qk=V("h1",null,"Sign In",-1),Hk=V("option",{value:"user"},"User",-1),Wk=V("option",{value:"admin"},"Admin",-1),Kk=[Hk,Wk],zk={__name:"FirebaseSigninView",setup(t){const e=Ze(""),n=Ze(""),r=Ze("user"),s=Na(),i=Ps(),o=Ga(),c=async()=>{try{const u=(await iR(i,e.value,n.value)).user,d=Ts(o,"users",u.uid),p=await Iy(d);if(p.exists()){const y=p.data().role;if(console.log("Stored User role:",y),console.log("Selected Role:",r.value),r.value!==y){alert("Selected role does not match the stored role. Please check your selection.");return}y==="admin"?s.push("/admin-dashboard"):y==="user"?s.push("/user-dashboard"):s.push("/")}else console.error("No such document!"),alert("User role not found. Please contact support.");console.log("Firebase Sign-In Successful! Current user:",i.currentUser)}catch(l){console.error("Error during sign-in:",l.code),alert("Error: "+l.message)}};return(l,u)=>(Be(),qe("div",$k,[qk,V("p",null,[wt(V("input",{type:"text",placeholder:"Email","onUpdate:modelValue":u[0]||(u[0]=d=>e.value=d),class:"form-control"},null,512),[[Gt,e.value]])]),V("p",null,[wt(V("input",{type:"password",placeholder:"Password","onUpdate:modelValue":u[1]||(u[1]=d=>n.value=d),class:"form-control"},null,512),[[Gt,n.value]])]),V("p",null,[wt(V("select",{"onUpdate:modelValue":u[2]||(u[2]=d=>r.value=d),class:"form-control"},Kk,512),[[Wo,r.value]])]),V("p",null,[V("button",{class:"btn",onClick:c},"Sign in via Firebase")])]))}};var Gk="firebase",Qk="10.13.1";/**
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
 */tr(Gk,Qk,"app");const Jk={apiKey:"AIzaSyDfmdoV9Hh1BKf8qiClZW2QJ0nVvtsYWf4",authDomain:"week7-abhimanyu.firebaseapp.com",projectId:"week7-abhimanyu",storageBucket:"week7-abhimanyu.appspot.com",messagingSenderId:"1055195233032",appId:"1:1055195233032:web:c40b4aff6fa26a21c58abd"},by=pg(Jk);Ps(by);const wo=Ga(by),Yk={setup(){const t=Ze([]),e=Ze(""),n=Ze(""),r=Ze(!1),s=Ze(null),i=Ze(null),o=Ze("name"),c=Ze(null),l=Ze(""),u=()=>{i.value=null,o.value="name",c.value=null},d=async()=>{let R=fp(wo,"books");l.value==="where"&&i.value&&(R=jc(R,Ak("isbn",">",Number(i.value)))),l.value==="orderby"&&(R=jc(R,bk(o.value))),l.value==="limit"&&c.value&&(R=jc(R,Rk(Number(c.value))));const P=await kk(R),B=[];P.forEach(U=>{B.push({id:U.id,...U.data()})}),t.value=B},p=async()=>{try{const R=Number(e.value);if(isNaN(R)){alert("ISBN must be a valid number");return}await Vk(fp(wo,"books"),{isbn:R,name:n.value}),alert(`Book "${n.value}" added successfully!`),e.value="",n.value="",d()}catch(R){console.error("Error adding book:",R)}},g=R=>{e.value=R.isbn,n.value=R.name,s.value=R.id,r.value=!0},y=async()=>{try{const R=Number(e.value);if(isNaN(R)){alert("ISBN must be a valid number");return}const P=Ts(wo,"books",s.value);await Nk(P,{isbn:R,name:n.value}),alert(`Book "${n.value}" updated successfully!`),e.value="",n.value="",r.value=!1,d()}catch(R){console.error("Error updating book:",R)}},b=async(R,P)=>{try{await Dk(Ts(wo,"books",R)),alert(`Book "${P}" deleted successfully!`),d()}catch(B){console.error("Error deleting book:",B)}};return Xp(()=>{d()}),{books:t,isbn:e,name:n,addBook:p,editBook:g,updateBook:y,deleteBook:b,editMode:r,isbnFilter:i,orderByField:o,limitResults:c,filterType:l,fetchBooksWithFilters:d,resetFilters:u}}},mt=t=>(Kp("data-v-542e27b7"),t=t(),zp(),t),Xk={class:"page-container"},Zk=mt(()=>V("h1",{class:"title"},"Add, Update, or Delete Book",-1)),e1={class:"form-group"},t1=mt(()=>V("label",{for:"isbn"},"ISBN:",-1)),n1={class:"form-group"},r1=mt(()=>V("label",{for:"name"},"Name:",-1)),s1={class:"form-group form-group-button"},i1={type:"submit",class:"submit-button"},o1=mt(()=>V("br",null,null,-1)),a1=mt(()=>V("h2",{class:"book-list-title"},"Books List",-1)),c1={class:"book-list"},l1={class:"book-actions"},u1=["onClick"],h1=["onClick"],d1={class:"filter-options"},f1=mt(()=>V("h3",null,"Choose Filter Option",-1)),p1={class:"filter-form"},m1={class:"form-group"},g1=mt(()=>V("label",{for:"filter-type"},"Select Filter Type:",-1)),_1=mt(()=>V("option",{value:""},"Select...",-1)),y1=mt(()=>V("option",{value:"where"},"WHERE",-1)),v1=mt(()=>V("option",{value:"orderby"},"ORDER BY",-1)),E1=mt(()=>V("option",{value:"limit"},"LIMIT",-1)),w1=[_1,y1,v1,E1],T1={key:0,class:"form-group"},I1=mt(()=>V("label",{for:"isbn-filter"},"Filter by ISBN greater than:",-1)),A1={key:1,class:"form-group"},b1=mt(()=>V("label",{for:"order-by"},"Order By:",-1)),R1=mt(()=>V("option",{value:"name"},"Name",-1)),S1=mt(()=>V("option",{value:"isbn"},"ISBN",-1)),P1=[R1,S1],C1={key:2,class:"form-group"},k1=mt(()=>V("label",{for:"limit"},"Limit results to:",-1)),O1={class:"form-group form-group-button"};function N1(t,e,n,r,s,i){return Be(),qe("div",Xk,[Zk,V("form",{onSubmit:e[2]||(e[2]=Tm(o=>r.editMode?r.updateBook():r.addBook(),["prevent"])),class:"book-form"},[V("div",e1,[t1,wt(V("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>r.isbn=o),id:"isbn",required:""},null,512),[[Gt,r.isbn]])]),V("div",n1,[r1,wt(V("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>r.name=o),id:"name",required:""},null,512),[[Gt,r.name]])]),V("div",s1,[V("button",i1,Dt(r.editMode?"Update Book":"Add Book"),1)])],32),o1,a1,V("ul",c1,[(Be(!0),qe(sn,null,tE(r.books,o=>(Be(),qe("li",{key:o.id,class:"book-item"},[ct(Dt(o.name)+" - ISBN: "+Dt(o.isbn)+" ",1),V("div",l1,[V("button",{onClick:c=>r.editBook(o),class:"action-button"},"Edit",8,u1),V("button",{onClick:c=>r.deleteBook(o.id,o.name),class:"action-button"},"Delete",8,h1)])]))),128))]),V("div",d1,[f1,V("form",p1,[V("div",m1,[g1,wt(V("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.filterType=o),onChange:e[4]||(e[4]=(...o)=>r.resetFilters&&r.resetFilters(...o))},w1,544),[[Wo,r.filterType]])]),r.filterType==="where"?(Be(),qe("div",T1,[I1,wt(V("input",{type:"number",id:"isbn-filter","onUpdate:modelValue":e[5]||(e[5]=o=>r.isbnFilter=o),placeholder:"Enter ISBN number"},null,512),[[Gt,r.isbnFilter]])])):An("",!0),r.filterType==="orderby"?(Be(),qe("div",A1,[b1,wt(V("select",{"onUpdate:modelValue":e[6]||(e[6]=o=>r.orderByField=o)},P1,512),[[Wo,r.orderByField]])])):An("",!0),r.filterType==="limit"?(Be(),qe("div",C1,[k1,wt(V("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=o=>r.limitResults=o),placeholder:"Limit results"},null,512),[[Gt,r.limitResults]])])):An("",!0),V("div",O1,[V("button",{onClick:e[8]||(e[8]=(...o)=>r.fetchBooksWithFilters&&r.fetchBooksWithFilters(...o)),type:"button"},"Apply Filter")])])])])}const D1=Ur(Yk,[["render",N1],["__scopeId","data-v-542e27b7"]]),V1={data(){return{count:null,error:null,newBook:{isbn:"",name:""},addBookError:null}},methods:{async getBookCount(){try{const t=await Me.get("https://countbooks-2oaioi6tkq-uc.a.run.app");this.count=t.data.count,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error="Failed to fetch book count",this.count=null}},async addBook(){try{const t=await Me.post("https://addbook-2oaioi6tkq-uc.a.run.app",this.newBook);alert(`Book added successfully: ${this.newBook.name}`),this.newBook={isbn:"",name:""},this.addBookError=null}catch(t){console.error("Error adding book:",t),this.addBookError="Failed to add book"}}}},x1={id:"app"},L1=V("h1",null,"Book Counter",-1),M1=V("br",null,null,-1),F1=V("br",null,null,-1),U1=V("br",null,null,-1),B1={key:0},j1={key:1},$1=V("br",null,null,-1),q1=V("br",null,null,-1),H1=V("h2",null,"Add New Book",-1),W1=V("label",{for:"isbn"},"ISBN",-1),K1=V("label",{for:"name"},"Name",-1),z1=V("button",{type:"submit"},"Add Book",-1),G1={key:2};function Q1(t,e,n,r,s,i){return Be(),qe("div",x1,[L1,M1,V("button",{onClick:e[0]||(e[0]=(...o)=>i.getBookCount&&i.getBookCount(...o))},"Get Book Count"),F1,U1,s.count!==null?(Be(),qe("p",B1,"Total number of books: "+Dt(s.count),1)):An("",!0),s.error?(Be(),qe("p",j1,Dt(s.error),1)):An("",!0),$1,q1,H1,V("form",{onSubmit:e[3]||(e[3]=Tm((...o)=>i.addBook&&i.addBook(...o),["prevent"]))},[V("div",null,[W1,wt(V("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.newBook.isbn=o)},null,512),[[Gt,s.newBook.isbn]])]),V("div",null,[K1,wt(V("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.newBook.name=o)},null,512),[[Gt,s.newBook.name]])]),z1],32),s.addBookError?(Be(),qe("p",G1,Dt(s.addBookError),1)):An("",!0)])}const J1=Ur(V1,[["render",Q1]]),Y1={name:"App",data(){return{city:"",weatherData:null}},computed:{temperature(){return this.weatherData?this.weatherData.main.temp:null},iconUrl(){return this.weatherData?`https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:null},apiKey(){}},mounted(){this.fetchCurrentLocationWeather()},methods:{async fetchCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(async t=>{const{latitude:e,longitude:n}=t.coords,r=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=${this.apiKey}&units=metric`;await this.fetchWeatherData(r)})},async fetchWeatherData(t){try{const e=await Me.get(t);this.weatherData=e.data}catch(e){console.error("Error fetching weather data:",e)}},async searchByCity(){const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;await this.fetchWeatherData(t)}}},X1=t=>(Kp("data-v-93f91055"),t=t(),zp(),t),Z1={class:"container"},eO={class:"header"},tO=X1(()=>V("h1",null,"WEATHER APP",-1)),nO={class:"search-bar"},rO={key:0,class:"weather-info"},sO=["src"],iO={class:"temperature"},oO={class:"description"};function aO(t,e,n,r,s,i){return Be(),qe("div",Z1,[V("div",eO,[tO,V("div",nO,[wt(V("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.city=o),placeholder:"Enter city name",class:"search-input"},null,512),[[Gt,s.city]]),V("button",{onClick:e[1]||(e[1]=(...o)=>i.searchByCity&&i.searchByCity(...o)),class:"search-button"},"Search")])]),s.weatherData?(Be(),qe("main",rO,[V("h2",null,Dt(s.weatherData.name)+", "+Dt(s.weatherData.sys.country),1),V("div",null,[i.iconUrl?(Be(),qe("img",{key:0,src:i.iconUrl,alt:"Weather Icon",class:"weather-icon"},null,8,sO)):An("",!0)]),V("div",iO,Dt(i.temperature)+" °C",1),V("div",oO,Dt(s.weatherData.weather[0].description),1)])):An("",!0)])}const cO=Ur(Y1,[["render",aO],["__scopeId","data-v-93f91055"]]),lO={data(){return{allBooks:null,error:null}},mounted(){this.getAllBooks()},methods:{async getAllBooks(){try{const t=await Me.get("https://getallbooks-2oaioi6tkq-uc.a.run.app");this.allBooks=t.data,this.error=null}catch(t){console.error("Error fetching all books:",t),this.error=t}}}},uO=V("h1",null,"All Books",-1);function hO(t,e,n,r,s,i){return Be(),qe("div",null,[uO,V("pre",null,Dt(s.allBooks),1)])}const dO=Ur(lO,[["render",hO]]),fO=[{path:"/",redirect:"/WeatherCheck"},{path:"/admin-dashboard",name:"admin-dashboard",component:TS,meta:{requiresAuth:!0,role:"admin"}},{path:"/user-dashboard",name:"user-dashboard",component:RS,meta:{requiresAuth:!0,role:"user"}},{path:"/FireRegister",name:"FirebaseRegister",component:jk},{path:"/FireLogin",name:"FirebaseSignin",component:zk},{path:"/addBook",name:"AddBook",component:D1},{path:"/GetBookCount",name:"GetBookCount",component:J1},{path:"/WeatherCheck",name:"WeatherCheck",component:cO},{path:"/CountBookAPI",name:"CountBookAPI",component:zm},{path:"/GetAllBookAPI",name:"GetAllBookAPI",component:dO}],Ry=kA({history:sA(),routes:fO});Ze(!1);Ry.beforeEach(async(t,e,n)=>{const r=t.matched.some(o=>o.meta.requiresAuth),i=Ps().currentUser;if(r&&!i)n("/FireLogin");else if(r&&i)try{const o=Ga(),c=Ts(o,"users",i.uid),l=await Iy(c);if(l.exists()){const d=l.data().role;t.meta.role&&d!==t.meta.role?n("/"):n()}else console.error("No such user document in Firestore!"),n("/")}catch(o){console.error("Error fetching user role from Firestore:",o),n("/")}else n()});const Sy=vw(SI);Sy.use(Ry);Sy.mount("#app");
