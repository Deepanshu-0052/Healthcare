(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=i(l);fetch(l.href,h)}})();function Dv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ld={exports:{}},sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function V1(){if(Fy)return sl;Fy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,h){var d=null;if(h!==void 0&&(d=""+h),l.key!==void 0&&(d=""+l.key),"key"in l){h={};for(var p in l)p!=="key"&&(h[p]=l[p])}else h=l;return l=h.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:h}}return sl.Fragment=t,sl.jsx=i,sl.jsxs=i,sl}var Yy;function k1(){return Yy||(Yy=1,ld.exports=V1()),ld.exports}var M=k1(),ud={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky;function P1(){if(Ky)return vt;Ky=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.iterator;function P(I){return I===null||typeof I!="object"?null:(I=D&&I[D]||I["@@iterator"],typeof I=="function"?I:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,st={};function et(I,Q,nt){this.props=I,this.context=Q,this.refs=st,this.updater=nt||J}et.prototype.isReactComponent={},et.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},et.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function gt(){}gt.prototype=et.prototype;function yt(I,Q,nt){this.props=I,this.context=Q,this.refs=st,this.updater=nt||J}var pt=yt.prototype=new gt;pt.constructor=yt,$(pt,et.prototype),pt.isPureReactComponent=!0;var Gt=Array.isArray,_t={H:null,A:null,T:null,S:null,V:null},Ft=Object.prototype.hasOwnProperty;function O(I,Q,nt,Z,ut,bt){return nt=bt.ref,{$$typeof:r,type:I,key:Q,ref:nt!==void 0?nt:null,props:bt}}function b(I,Q){return O(I.type,Q,void 0,void 0,void 0,I.props)}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function N(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(nt){return Q[nt]})}var x=/\/+/g;function k(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?N(""+I.key):Q.toString(36)}function w(){}function De(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(w,w):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ne(I,Q,nt,Z,ut){var bt=typeof I;(bt==="undefined"||bt==="boolean")&&(I=null);var mt=!1;if(I===null)mt=!0;else switch(bt){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(I.$$typeof){case r:case t:mt=!0;break;case A:return mt=I._init,ne(mt(I._payload),Q,nt,Z,ut)}}if(mt)return ut=ut(I),mt=Z===""?"."+k(I,0):Z,Gt(ut)?(nt="",mt!=null&&(nt=mt.replace(x,"$&/")+"/"),ne(ut,Q,nt,"",function(Yn){return Yn})):ut!=null&&(R(ut)&&(ut=b(ut,nt+(ut.key==null||I&&I.key===ut.key?"":(""+ut.key).replace(x,"$&/")+"/")+mt)),Q.push(ut)),1;mt=0;var Te=Z===""?".":Z+":";if(Gt(I))for(var Kt=0;Kt<I.length;Kt++)Z=I[Kt],bt=Te+k(Z,Kt),mt+=ne(Z,Q,nt,bt,ut);else if(Kt=P(I),typeof Kt=="function")for(I=Kt.call(I),Kt=0;!(Z=I.next()).done;)Z=Z.value,bt=Te+k(Z,Kt++),mt+=ne(Z,Q,nt,bt,ut);else if(bt==="object"){if(typeof I.then=="function")return ne(De(I),Q,nt,Z,ut);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return mt}function q(I,Q,nt){if(I==null)return I;var Z=[],ut=0;return ne(I,Z,"","",function(bt){return Q.call(nt,bt,ut++)}),Z}function tt(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(nt){(I._status===0||I._status===-1)&&(I._status=1,I._result=nt)},function(nt){(I._status===0||I._status===-1)&&(I._status=2,I._result=nt)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var ot=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Mt(){}return vt.Children={map:q,forEach:function(I,Q,nt){q(I,function(){Q.apply(this,arguments)},nt)},count:function(I){var Q=0;return q(I,function(){Q++}),Q},toArray:function(I){return q(I,function(Q){return Q})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},vt.Component=et,vt.Fragment=i,vt.Profiler=l,vt.PureComponent=yt,vt.StrictMode=a,vt.Suspense=_,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_t,vt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return _t.H.useMemoCache(I)}},vt.cache=function(I){return function(){return I.apply(null,arguments)}},vt.cloneElement=function(I,Q,nt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Z=$({},I.props),ut=I.key,bt=void 0;if(Q!=null)for(mt in Q.ref!==void 0&&(bt=void 0),Q.key!==void 0&&(ut=""+Q.key),Q)!Ft.call(Q,mt)||mt==="key"||mt==="__self"||mt==="__source"||mt==="ref"&&Q.ref===void 0||(Z[mt]=Q[mt]);var mt=arguments.length-2;if(mt===1)Z.children=nt;else if(1<mt){for(var Te=Array(mt),Kt=0;Kt<mt;Kt++)Te[Kt]=arguments[Kt+2];Z.children=Te}return O(I.type,ut,void 0,void 0,bt,Z)},vt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:h,_context:I},I},vt.createElement=function(I,Q,nt){var Z,ut={},bt=null;if(Q!=null)for(Z in Q.key!==void 0&&(bt=""+Q.key),Q)Ft.call(Q,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ut[Z]=Q[Z]);var mt=arguments.length-2;if(mt===1)ut.children=nt;else if(1<mt){for(var Te=Array(mt),Kt=0;Kt<mt;Kt++)Te[Kt]=arguments[Kt+2];ut.children=Te}if(I&&I.defaultProps)for(Z in mt=I.defaultProps,mt)ut[Z]===void 0&&(ut[Z]=mt[Z]);return O(I,bt,void 0,void 0,null,ut)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(I){return{$$typeof:p,render:I}},vt.isValidElement=R,vt.lazy=function(I){return{$$typeof:A,_payload:{_status:-1,_result:I},_init:tt}},vt.memo=function(I,Q){return{$$typeof:v,type:I,compare:Q===void 0?null:Q}},vt.startTransition=function(I){var Q=_t.T,nt={};_t.T=nt;try{var Z=I(),ut=_t.S;ut!==null&&ut(nt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(Mt,ot)}catch(bt){ot(bt)}finally{_t.T=Q}},vt.unstable_useCacheRefresh=function(){return _t.H.useCacheRefresh()},vt.use=function(I){return _t.H.use(I)},vt.useActionState=function(I,Q,nt){return _t.H.useActionState(I,Q,nt)},vt.useCallback=function(I,Q){return _t.H.useCallback(I,Q)},vt.useContext=function(I){return _t.H.useContext(I)},vt.useDebugValue=function(){},vt.useDeferredValue=function(I,Q){return _t.H.useDeferredValue(I,Q)},vt.useEffect=function(I,Q,nt){var Z=_t.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(I,Q)},vt.useId=function(){return _t.H.useId()},vt.useImperativeHandle=function(I,Q,nt){return _t.H.useImperativeHandle(I,Q,nt)},vt.useInsertionEffect=function(I,Q){return _t.H.useInsertionEffect(I,Q)},vt.useLayoutEffect=function(I,Q){return _t.H.useLayoutEffect(I,Q)},vt.useMemo=function(I,Q){return _t.H.useMemo(I,Q)},vt.useOptimistic=function(I,Q){return _t.H.useOptimistic(I,Q)},vt.useReducer=function(I,Q,nt){return _t.H.useReducer(I,Q,nt)},vt.useRef=function(I){return _t.H.useRef(I)},vt.useState=function(I){return _t.H.useState(I)},vt.useSyncExternalStore=function(I,Q,nt){return _t.H.useSyncExternalStore(I,Q,nt)},vt.useTransition=function(){return _t.H.useTransition()},vt.version="19.1.1",vt}var Qy;function Xd(){return Qy||(Qy=1,ud.exports=P1()),ud.exports}var Ce=Xd();const U1=Dv(Ce);var cd={exports:{}},al={},hd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy;function L1(){return Xy||(Xy=1,(function(r){function t(q,tt){var ot=q.length;q.push(tt);t:for(;0<ot;){var Mt=ot-1>>>1,I=q[Mt];if(0<l(I,tt))q[Mt]=tt,q[ot]=I,ot=Mt;else break t}}function i(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var tt=q[0],ot=q.pop();if(ot!==tt){q[0]=ot;t:for(var Mt=0,I=q.length,Q=I>>>1;Mt<Q;){var nt=2*(Mt+1)-1,Z=q[nt],ut=nt+1,bt=q[ut];if(0>l(Z,ot))ut<I&&0>l(bt,Z)?(q[Mt]=bt,q[ut]=ot,Mt=ut):(q[Mt]=Z,q[nt]=ot,Mt=nt);else if(ut<I&&0>l(bt,ot))q[Mt]=bt,q[ut]=ot,Mt=ut;else break t}}return tt}function l(q,tt){var ot=q.sortIndex-tt.sortIndex;return ot!==0?ot:q.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var _=[],v=[],A=1,D=null,P=3,J=!1,$=!1,st=!1,et=!1,gt=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,pt=typeof setImmediate<"u"?setImmediate:null;function Gt(q){for(var tt=i(v);tt!==null;){if(tt.callback===null)a(v);else if(tt.startTime<=q)a(v),tt.sortIndex=tt.expirationTime,t(_,tt);else break;tt=i(v)}}function _t(q){if(st=!1,Gt(q),!$)if(i(_)!==null)$=!0,Ft||(Ft=!0,k());else{var tt=i(v);tt!==null&&ne(_t,tt.startTime-q)}}var Ft=!1,O=-1,b=5,R=-1;function N(){return et?!0:!(r.unstable_now()-R<b)}function x(){if(et=!1,Ft){var q=r.unstable_now();R=q;var tt=!0;try{t:{$=!1,st&&(st=!1,yt(O),O=-1),J=!0;var ot=P;try{e:{for(Gt(q),D=i(_);D!==null&&!(D.expirationTime>q&&N());){var Mt=D.callback;if(typeof Mt=="function"){D.callback=null,P=D.priorityLevel;var I=Mt(D.expirationTime<=q);if(q=r.unstable_now(),typeof I=="function"){D.callback=I,Gt(q),tt=!0;break e}D===i(_)&&a(_),Gt(q)}else a(_);D=i(_)}if(D!==null)tt=!0;else{var Q=i(v);Q!==null&&ne(_t,Q.startTime-q),tt=!1}}break t}finally{D=null,P=ot,J=!1}tt=void 0}}finally{tt?k():Ft=!1}}}var k;if(typeof pt=="function")k=function(){pt(x)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,De=w.port2;w.port1.onmessage=x,k=function(){De.postMessage(null)}}else k=function(){gt(x,0)};function ne(q,tt){O=gt(function(){q(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_next=function(q){switch(P){case 1:case 2:case 3:var tt=3;break;default:tt=P}var ot=P;P=tt;try{return q()}finally{P=ot}},r.unstable_requestPaint=function(){et=!0},r.unstable_runWithPriority=function(q,tt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ot=P;P=q;try{return tt()}finally{P=ot}},r.unstable_scheduleCallback=function(q,tt,ot){var Mt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?Mt+ot:Mt):ot=Mt,q){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=ot+I,q={id:A++,callback:tt,priorityLevel:q,startTime:ot,expirationTime:I,sortIndex:-1},ot>Mt?(q.sortIndex=ot,t(v,q),i(_)===null&&q===i(v)&&(st?(yt(O),O=-1):st=!0,ne(_t,ot-Mt))):(q.sortIndex=I,t(_,q),$||J||($=!0,Ft||(Ft=!0,k()))),q},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(q){var tt=P;return function(){var ot=P;P=tt;try{return q.apply(this,arguments)}finally{P=ot}}}})(fd)),fd}var $y;function j1(){return $y||($y=1,hd.exports=L1()),hd.exports}var dd={exports:{}},He={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function z1(){if(Zy)return He;Zy=1;var r=Xd();function t(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)v+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(_,v,A){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:D==null?null:""+D,children:_,containerInfo:v,implementation:A}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return He.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,He.createPortal=function(_,v){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(_,v,null,A)},He.flushSync=function(_){var v=d.T,A=a.p;try{if(d.T=null,a.p=2,_)return _()}finally{d.T=v,a.p=A,a.d.f()}},He.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(_,v))},He.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},He.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var A=v.as,D=p(A,v.crossOrigin),P=typeof v.integrity=="string"?v.integrity:void 0,J=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;A==="style"?a.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:D,integrity:P,fetchPriority:J}):A==="script"&&a.d.X(_,{crossOrigin:D,integrity:P,fetchPriority:J,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},He.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var A=p(v.as,v.crossOrigin);a.d.M(_,{crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(_)},He.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var A=v.as,D=p(A,v.crossOrigin);a.d.L(_,A,{crossOrigin:D,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},He.preloadModule=function(_,v){if(typeof _=="string")if(v){var A=p(v.as,v.crossOrigin);a.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:A,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(_)},He.requestFormReset=function(_){a.d.r(_)},He.unstable_batchedUpdates=function(_,v){return _(v)},He.useFormState=function(_,v,A){return d.H.useFormState(_,v,A)},He.useFormStatus=function(){return d.H.useHostTransitionStatus()},He.version="19.1.1",He}var Jy;function B1(){if(Jy)return dd.exports;Jy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dd.exports=z1(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy;function H1(){if(Wy)return al;Wy=1;var r=j1(),t=Xd(),i=B1();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(h(e)!==e)throw Error(a(188))}function _(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var c=s.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===s)return p(c),e;if(f===o)return p(c),n;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=c,o=f;else{for(var y=!1,E=c.child;E;){if(E===s){y=!0,s=c,o=f;break}if(E===o){y=!0,o=c,s=f;break}E=E.sibling}if(!y){for(E=f.child;E;){if(E===s){y=!0,s=f,o=c;break}if(E===o){y=!0,o=f,s=c;break}E=E.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var A=Object.assign,D=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),gt=Symbol.for("react.provider"),yt=Symbol.for("react.consumer"),pt=Symbol.for("react.context"),Gt=Symbol.for("react.forward_ref"),_t=Symbol.for("react.suspense"),Ft=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case et:return"Profiler";case st:return"StrictMode";case _t:return"Suspense";case Ft:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case J:return"Portal";case pt:return(e.displayName||"Context")+".Provider";case yt:return(e._context.displayName||"Context")+".Consumer";case Gt:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:De(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return De(e(n))}catch{}}return null}var ne=Array.isArray,q=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},Mt=[],I=-1;function Q(e){return{current:e}}function nt(e){0>I||(e.current=Mt[I],Mt[I]=null,I--)}function Z(e,n){I++,Mt[I]=e.current,e.current=n}var ut=Q(null),bt=Q(null),mt=Q(null),Te=Q(null);function Kt(e,n){switch(Z(mt,n),Z(bt,e),Z(ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vy(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vy(n),e=Ey(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(ut),Z(ut,e)}function Yn(){nt(ut),nt(bt),nt(mt)}function Qi(e){e.memoizedState!==null&&Z(Te,e);var n=ut.current,s=Ey(n,e.type);n!==s&&(Z(bt,e),Z(ut,s))}function pi(e){bt.current===e&&(nt(ut),nt(bt)),Te.current===e&&(nt(Te),tl._currentValue=ot)}var Lr=Object.prototype.hasOwnProperty,jr=r.unstable_scheduleCallback,zr=r.unstable_cancelCallback,$a=r.unstable_shouldYield,Pl=r.unstable_requestPaint,yn=r.unstable_now,oh=r.unstable_getCurrentPriorityLevel,Za=r.unstable_ImmediatePriority,Ls=r.unstable_UserBlockingPriority,Br=r.unstable_NormalPriority,lh=r.unstable_LowPriority,js=r.unstable_IdlePriority,Ja=r.log,Ul=r.unstable_setDisableYieldValue,ie=null,Ut=null;function an(e){if(typeof Ja=="function"&&Ul(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(ie,e)}catch{}}var ze=Math.clz32?Math.clz32:Hr,Ll=Math.log,uh=Math.LN2;function Hr(e){return e>>>=0,e===0?32:31-(Ll(e)/uh|0)|0}var qr=256,Gr=4194304;function xn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zs(e,n,s){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?c=xn(o):(y&=E,y!==0?c=xn(y):s||(s=E&~e,s!==0&&(c=xn(s))))):(E=o&~f,E!==0?c=xn(E):y!==0?c=xn(y):s||(s=o&~e,s!==0&&(c=xn(s)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:c}function Fr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Wa(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function to(){var e=qr;return qr<<=1,(qr&4194048)===0&&(qr=256),e}function eo(){var e=Gr;return Gr<<=1,(Gr&62914560)===0&&(Gr=4194304),e}function gi(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function yi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function no(e,n,s,o,c,f){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var E=e.entanglements,S=e.expirationTimes,j=e.hiddenUpdates;for(s=y&~s;0<s;){var G=31-ze(s),Y=1<<G;E[G]=0,S[G]=-1;var z=j[G];if(z!==null)for(j[G]=null,G=0;G<z.length;G++){var B=z[G];B!==null&&(B.lane&=-536870913)}s&=~Y}o!==0&&Kn(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Kn(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ze(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function io(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-ze(s),c=1<<o;c&n|e[o]&n&&(e[o]|=n),s&=~c}}function Xi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $i(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:jy(e.type))}function jl(e,n){var s=tt.p;try{return tt.p=e,n()}finally{tt.p=s}}var Zt=Math.random().toString(36).slice(2),ge="__reactFiber$"+Zt,ce="__reactProps$"+Zt,_n="__reactContainer$"+Zt,ro="__reactEvents$"+Zt,ch="__reactListeners$"+Zt,Zi="__reactHandles$"+Zt,zl="__reactResources$"+Zt,Yr="__reactMarker$"+Zt;function Ji(e){delete e[ge],delete e[ce],delete e[ro],delete e[ch],delete e[Zi]}function _i(e){var n=e[ge];if(n)return n;for(var s=e.parentNode;s;){if(n=s[_n]||s[ge]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=Sy(e);e!==null;){if(s=e[ge])return s;e=Sy(e)}return n}e=s,s=e.parentNode}return null}function Qn(e){if(e=e[ge]||e[_n]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Qe(e){var n=e[zl];return n||(n=e[zl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function oe(e){e[Yr]=!0}var so=new Set,Hs={};function On(e,n){vi(e,n),vi(e+"Capture",n)}function vi(e,n){for(Hs[e]=n,e=0;e<n.length;e++)so.add(n[e])}var Bl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hl={},Kr={};function ql(e){return Lr.call(Kr,e)?!0:Lr.call(Hl,e)?!1:Bl.test(e)?Kr[e]=!0:(Hl[e]=!0,!1)}function Wi(e,n,s){if(ql(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function $n(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function xe(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}var Qr,Gl;function Ei(e){if(Qr===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Qr=n&&n[1]||"",Gl=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qr+e+Gl}var qs=!1;function Gs(e,n){if(!e||qs)return"";qs=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var z=B}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(B){z=B}e.call(Y.prototype)}}else{try{throw Error()}catch(B){z=B}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],E=f[1];if(y&&E){var S=y.split(`
`),j=E.split(`
`);for(c=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(o===S.length||c===j.length)for(o=S.length-1,c=j.length-1;1<=o&&0<=c&&S[o]!==j[c];)c--;for(;1<=o&&0<=c;o--,c--)if(S[o]!==j[c]){if(o!==1||c!==1)do if(o--,c--,0>c||S[o]!==j[c]){var G=`
`+S[o].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=o&&0<=c);break}}}finally{qs=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Ei(s):""}function ao(e){switch(e.tag){case 26:case 27:case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 15:return Gs(e.type,!1);case 11:return Gs(e.type.render,!1);case 1:return Gs(e.type,!0);case 31:return Ei("Activity");default:return""}}function Fs(e){try{var n="";do n+=ao(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hh(e){var n=oo(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ys(e){e._valueTracker||(e._valueTracker=hh(e))}function lo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=oo(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fh=/[\n"\\]/g;function he(e){return e.replace(fh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function on(e,n,s,o,c,f,y,E){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xe(n)):e.value!==""+Xe(n)&&(e.value=""+Xe(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?tr(e,y,Xe(n)):s!=null?tr(e,y,Xe(s)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Xe(E):e.removeAttribute("name")}function $r(e,n,s,o,c,f,y,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;s=s!=null?""+Xe(s):"",n=n!=null?""+Xe(n):s,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function tr(e,n,s){n==="number"&&Xr(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ti(e,n,s,o){if(e=e.options,n){n={};for(var c=0;c<s.length;c++)n["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=n.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Xe(s),n=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function zt(e,n,s){if(n!=null&&(n=""+Xe(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Xe(s):""}function Zr(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(ne(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=Xe(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function vn(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var Jr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fl(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||Jr.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function uo(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&s[c]!==o&&Fl(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Fl(e,f,n[f])}function co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ks(e){return mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ai=null;function En(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,Si=null;function ho(e){var n=Qn(e);if(n&&(e=n.stateNode)){var s=e[ce]||null;t:switch(e=n.stateNode,n.type){case"input":if(on(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var c=o[ce]||null;if(!c)throw Error(a(90));on(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&lo(o)}break t;case"textarea":zt(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Ti(e,!!s.multiple,n,!1)}}}var Zn=!1;function Yl(e,n,s){if(Zn)return e(n,s);Zn=!0;try{var o=e(n);return o}finally{if(Zn=!1,(bi!==null||Si!==null)&&(ju(),bi&&(n=bi,e=Si,Si=bi=null,ho(n),e)))for(n=0;n<e.length;n++)ho(e[n])}}function Wr(e,n){var s=e.stateNode;if(s===null)return null;var o=s[ce]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tn=!1;if(Mn)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){Tn=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{Tn=!1}var Jn=null,er=null,wi=null;function fo(){if(wi)return wi;var e,n=er,s=n.length,o,c="value"in Jn?Jn.value:Jn.textContent,f=c.length;for(e=0;e<s&&n[e]===c[e];e++);var y=s-e;for(o=1;o<=y&&n[s-o]===c[f-o];o++);return wi=c.slice(e,1<o?1-o:void 0)}function Wn(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function mo(){return!1}function Ae(e){function n(s,o,c,f,y){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ti:mo,this.isPropagationStopped=mo,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),n}var kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Ae(kt),es=A({},kt,{view:0,detail:0}),Kl=Ae(es),Xs,$s,ei,ns=A({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(Xs=e.screenX-ei.screenX,$s=e.screenY-ei.screenY):$s=Xs=0,ei=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),An=Ae(ns),Ql=A({},ns,{dataTransfer:0}),ph=Ae(Ql),is=A({},es,{relatedTarget:0}),Zs=Ae(is),po=A({},kt,{animationName:0,elapsedTime:0,pseudoElement:0}),Js=Ae(po),Xl=A({},kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ws=Ae(Xl),gh=A({},kt,{data:0}),go=Ae(gh),rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$l={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zl[e])?!!n[e]:!1}function ss(){return yo}var Jl=A({},es,{key:function(e){if(e.key){var n=rs[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$l[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ta=Ae(Jl),Wl=A({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_o=Ae(Wl),Ri=A({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),tu=Ae(Ri),eu=A({},kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),nu=Ae(eu),iu=A({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ea=Ae(iu),$e=A({},kt,{newState:0,oldState:0}),ru=Ae($e),su=[9,13,27,32],ni=Mn&&"CompositionEvent"in window,u=null;Mn&&"documentMode"in document&&(u=document.documentMode);var m=Mn&&"TextEvent"in window&&!u,g=Mn&&(!ni||u&&8<u&&11>=u),T=" ",U=!1;function H(e,n){switch(e){case"keyup":return su.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ct=!1;function ye(e,n){switch(e){case"compositionend":return W(n);case"keypress":return n.which!==32?null:(U=!0,T);case"textInput":return e=n.data,e===T&&U?null:e;default:return null}}function Nt(e,n){if(Ct)return e==="compositionend"||!ni&&H(e,n)?(e=fo(),wi=er=Jn=null,Ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g&&n.locale!=="ko"?null:n.data;default:return null}}var be={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _e(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!be[e.type]:n==="textarea"}function Ii(e,n,s,o){bi?Si?Si.push(o):Si=[o]:bi=o,n=Fu(n,"onChange"),0<n.length&&(s=new Qs("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var Oe=null,ii=null;function vo(e){my(e,0)}function au(e){var n=Xn(e);if(lo(n))return e}function km(e,n){if(e==="change")return n}var Pm=!1;if(Mn){var yh;if(Mn){var _h="oninput"in document;if(!_h){var Um=document.createElement("div");Um.setAttribute("oninput","return;"),_h=typeof Um.oninput=="function"}yh=_h}else yh=!1;Pm=yh&&(!document.documentMode||9<document.documentMode)}function Lm(){Oe&&(Oe.detachEvent("onpropertychange",jm),ii=Oe=null)}function jm(e){if(e.propertyName==="value"&&au(ii)){var n=[];Ii(n,ii,e,En(e)),Yl(vo,n)}}function cT(e,n,s){e==="focusin"?(Lm(),Oe=n,ii=s,Oe.attachEvent("onpropertychange",jm)):e==="focusout"&&Lm()}function hT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return au(ii)}function fT(e,n){if(e==="click")return au(n)}function dT(e,n){if(e==="input"||e==="change")return au(n)}function mT(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ln=typeof Object.is=="function"?Object.is:mT;function Eo(e,n){if(ln(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!Lr.call(n,c)||!ln(e[c],n[c]))return!1}return!0}function zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bm(e,n){var s=zm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=zm(s)}}function Hm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xr(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Xr(e.document)}return n}function vh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var pT=Mn&&"documentMode"in document&&11>=document.documentMode,na=null,Eh=null,To=null,Th=!1;function Gm(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Th||na==null||na!==Xr(o)||(o=na,"selectionStart"in o&&vh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),To&&Eo(To,o)||(To=o,o=Fu(Eh,"onSelect"),0<o.length&&(n=new Qs("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=na)))}function as(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var ia={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Ah={},Fm={};Mn&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function os(e){if(Ah[e])return Ah[e];if(!ia[e])return e;var n=ia[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Fm)return Ah[e]=n[s];return e}var Ym=os("animationend"),Km=os("animationiteration"),Qm=os("animationstart"),gT=os("transitionrun"),yT=os("transitionstart"),_T=os("transitioncancel"),Xm=os("transitionend"),$m=new Map,bh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bh.push("scrollEnd");function Vn(e,n){$m.set(e,n),On(n,[e])}var Zm=new WeakMap;function bn(e,n){if(typeof e=="object"&&e!==null){var s=Zm.get(e);return s!==void 0?s:(n={value:e,source:n,stack:Fs(n)},Zm.set(e,n),n)}return{value:e,source:n,stack:Fs(n)}}var Sn=[],ra=0,Sh=0;function ou(){for(var e=ra,n=Sh=ra=0;n<e;){var s=Sn[n];Sn[n++]=null;var o=Sn[n];Sn[n++]=null;var c=Sn[n];Sn[n++]=null;var f=Sn[n];if(Sn[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&Jm(s,c,f)}}function lu(e,n,s,o){Sn[ra++]=e,Sn[ra++]=n,Sn[ra++]=s,Sn[ra++]=o,Sh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wh(e,n,s,o){return lu(e,n,s,o),uu(e)}function sa(e,n){return lu(e,null,null,n),uu(e)}function Jm(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var c=!1,f=e.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ze(s),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=s|536870912),f):null}function uu(e){if(50<Yo)throw Yo=0,Of=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var aa={};function vT(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,s,o){return new vT(e,n,s,o)}function Rh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,n){var s=e.alternate;return s===null?(s=un(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Wm(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cu(e,n,s,o,c,f){var y=0;if(o=e,typeof e=="function")Rh(e)&&(y=1);else if(typeof e=="string")y=T1(e,s,ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=un(31,s,n,c),e.elementType=R,e.lanes=f,e;case $:return ls(s.children,c,f,n);case st:y=8,c|=24;break;case et:return e=un(12,s,n,c|2),e.elementType=et,e.lanes=f,e;case _t:return e=un(13,s,n,c),e.elementType=_t,e.lanes=f,e;case Ft:return e=un(19,s,n,c),e.elementType=Ft,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gt:case pt:y=10;break t;case yt:y=9;break t;case Gt:y=11;break t;case O:y=14;break t;case b:y=16,o=null;break t}y=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=un(y,s,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ls(e,n,s,o){return e=un(7,e,o,n),e.lanes=s,e}function Ih(e,n,s){return e=un(6,e,null,n),e.lanes=s,e}function Ch(e,n,s){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var oa=[],la=0,hu=null,fu=0,wn=[],Rn=0,us=null,Ni=1,Di="";function cs(e,n){oa[la++]=fu,oa[la++]=hu,hu=e,fu=n}function tp(e,n,s){wn[Rn++]=Ni,wn[Rn++]=Di,wn[Rn++]=us,us=e;var o=Ni;e=Di;var c=32-ze(o)-1;o&=~(1<<c),s+=1;var f=32-ze(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Ni=1<<32-ze(n)+c|s<<c|o,Di=f+e}else Ni=1<<f|s<<c|o,Di=e}function Nh(e){e.return!==null&&(cs(e,1),tp(e,1,0))}function Dh(e){for(;e===hu;)hu=oa[--la],oa[la]=null,fu=oa[--la],oa[la]=null;for(;e===us;)us=wn[--Rn],wn[Rn]=null,Di=wn[--Rn],wn[Rn]=null,Ni=wn[--Rn],wn[Rn]=null}var Ze=null,re=null,Vt=!1,hs=null,ri=!1,xh=Error(a(519));function fs(e){var n=Error(a(418,""));throw So(bn(n,e)),xh}function ep(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[ge]=e,n[ce]=o,s){case"dialog":Rt("cancel",n),Rt("close",n);break;case"iframe":case"object":case"embed":Rt("load",n);break;case"video":case"audio":for(s=0;s<Qo.length;s++)Rt(Qo[s],n);break;case"source":Rt("error",n);break;case"img":case"image":case"link":Rt("error",n),Rt("load",n);break;case"details":Rt("toggle",n);break;case"input":Rt("invalid",n),$r(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ys(n);break;case"select":Rt("invalid",n);break;case"textarea":Rt("invalid",n),Zr(n,o.value,o.defaultValue,o.children),Ys(n)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||_y(n.textContent,s)?(o.popover!=null&&(Rt("beforetoggle",n),Rt("toggle",n)),o.onScroll!=null&&Rt("scroll",n),o.onScrollEnd!=null&&Rt("scrollend",n),o.onClick!=null&&(n.onclick=Yu),n=!0):n=!1,n||fs(e)}function np(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Ze=Ze.return}}function Ao(e){if(e!==Ze)return!1;if(!Vt)return np(e),Vt=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Qf(e.type,e.memoizedProps)),s=!s),s&&re&&fs(e),np(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){re=Pn(e.nextSibling);break t}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}re=null}}else n===27?(n=re,yr(e.type)?(e=Jf,Jf=null,re=e):re=n):re=Ze?Pn(e.stateNode.nextSibling):null;return!0}function bo(){re=Ze=null,Vt=!1}function ip(){var e=hs;return e!==null&&(tn===null?tn=e:tn.push.apply(tn,e),hs=null),e}function So(e){hs===null?hs=[e]:hs.push(e)}var Oh=Q(null),ds=null,xi=null;function nr(e,n,s){Z(Oh,n._currentValue),n._currentValue=s}function Oi(e){e._currentValue=Oh.current,nt(Oh)}function Mh(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function Vh(e,n,s,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var S=0;S<n.length;S++)if(E.context===n[S]){f.lanes|=s,E=f.alternate,E!==null&&(E.lanes|=s),Mh(f.return,s,e),o||(y=null);break t}f=E.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(a(341));y.lanes|=s,f=y.alternate,f!==null&&(f.lanes|=s),Mh(y,s,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function wo(e,n,s,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var E=c.type;ln(c.pendingProps.value,y.value)||(e!==null?e.push(E):e=[E])}}else if(c===Te.current){if(y=c.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}c=c.return}e!==null&&Vh(n,e,s,o),n.flags|=262144}function du(e){for(e=e.firstContext;e!==null;){if(!ln(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ds=e,xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return rp(ds,e)}function mu(e,n){return ds===null&&ms(e),rp(e,n)}function rp(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},xi===null){if(e===null)throw Error(a(308));xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xi=xi.next=n;return s}var ET=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},TT=r.unstable_scheduleCallback,AT=r.unstable_NormalPriority,ve={$$typeof:pt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kh(){return{controller:new ET,data:new Map,refCount:0}}function Ro(e){e.refCount--,e.refCount===0&&TT(AT,function(){e.controller.abort()})}var Io=null,Ph=0,ua=0,ca=null;function bT(e,n){if(Io===null){var s=Io=[];Ph=0,ua=jf(),ca={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Ph++,n.then(sp,sp),n}function sp(){if(--Ph===0&&Io!==null){ca!==null&&(ca.status="fulfilled");var e=Io;Io=null,ua=0,ca=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ST(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<s.length;c++)(0,s[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var ap=q.S;q.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&bT(e,n),ap!==null&&ap(e,n)};var ps=Q(null);function Uh(){var e=ps.current;return e!==null?e:Qt.pooledCache}function pu(e,n){n===null?Z(ps,ps.current):Z(ps,n.pool)}function op(){var e=Uh();return e===null?null:{parent:ve._currentValue,pool:e}}var Co=Error(a(460)),lp=Error(a(474)),gu=Error(a(542)),Lh={then:function(){}};function up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yu(){}function cp(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(yu,yu),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fp(e),e;default:if(typeof n.status=="string")n.then(yu,yu);else{if(e=Qt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fp(e),e}throw No=n,Co}}var No=null;function hp(){if(No===null)throw Error(a(459));var e=No;return No=null,e}function fp(e){if(e===Co||e===gu)throw Error(a(483))}var ir=!1;function jh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sr(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=uu(e),Jm(e,null,s),n}return lu(e,o,n,s),uu(e)}function Do(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,io(e,s)}}function Bh(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,s=s.next}while(s!==null);f===null?c=f=n:f=f.next=n}else c=f=n;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Hh=!1;function xo(){if(Hh){var e=ca;if(e!==null)throw e}}function Oo(e,n,s,o){Hh=!1;var c=e.updateQueue;ir=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var S=E,j=S.next;S.next=null,y===null?f=j:y.next=j,y=S;var G=e.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==y&&(E===null?G.firstBaseUpdate=j:E.next=j,G.lastBaseUpdate=S))}if(f!==null){var Y=c.baseState;y=0,G=j=S=null,E=f;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Dt&z)===z:(o&z)===z){z!==0&&z===ua&&(Hh=!0),G!==null&&(G=G.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var dt=e,ct=E;z=n;var qt=s;switch(ct.tag){case 1:if(dt=ct.payload,typeof dt=="function"){Y=dt.call(qt,Y,z);break t}Y=dt;break t;case 3:dt.flags=dt.flags&-65537|128;case 0:if(dt=ct.payload,z=typeof dt=="function"?dt.call(qt,Y,z):dt,z==null)break t;Y=A({},Y,z);break t;case 2:ir=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(j=G=B,S=Y):G=G.next=B,y|=z;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;B=E,E=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);G===null&&(S=Y),c.baseState=S,c.firstBaseUpdate=j,c.lastBaseUpdate=G,f===null&&(c.shared.lanes=0),dr|=y,e.lanes=y,e.memoizedState=Y}}function dp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function mp(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)dp(s[e],n)}var ha=Q(null),_u=Q(0);function pp(e,n){e=ji,Z(_u,e),Z(ha,n),ji=e|n.baseLanes}function qh(){Z(_u,ji),Z(ha,ha.current)}function Gh(){ji=_u.current,nt(ha),nt(_u)}var ar=0,Tt=null,Bt=null,fe=null,vu=!1,fa=!1,gs=!1,Eu=0,Mo=0,da=null,wT=0;function le(){throw Error(a(321))}function Fh(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!ln(e[s],n[s]))return!1;return!0}function Yh(e,n,s,o,c,f){return ar=f,Tt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,q.H=e===null||e.memoizedState===null?Jp:Wp,gs=!1,f=s(o,c),gs=!1,fa&&(f=yp(n,s,o,c)),gp(e),f}function gp(e){q.H=Ru;var n=Bt!==null&&Bt.next!==null;if(ar=0,fe=Bt=Tt=null,vu=!1,Mo=0,da=null,n)throw Error(a(300));e===null||Se||(e=e.dependencies,e!==null&&du(e)&&(Se=!0))}function yp(e,n,s,o){Tt=e;var c=0;do{if(fa&&(da=null),Mo=0,fa=!1,25<=c)throw Error(a(301));if(c+=1,fe=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}q.H=OT,f=n(s,o)}while(fa);return f}function RT(){var e=q.H,n=e.useState()[0];return n=typeof n.then=="function"?Vo(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(Tt.flags|=1024),n}function Kh(){var e=Eu!==0;return Eu=0,e}function Qh(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Xh(e){if(vu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vu=!1}ar=0,fe=Bt=Tt=null,fa=!1,Mo=Eu=0,da=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?Tt.memoizedState=fe=e:fe=fe.next=e,fe}function de(){if(Bt===null){var e=Tt.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=fe===null?Tt.memoizedState:fe.next;if(n!==null)fe=n,Bt=e;else{if(e===null)throw Tt.alternate===null?Error(a(467)):Error(a(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},fe===null?Tt.memoizedState=fe=e:fe=fe.next=e}return fe}function $h(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(e){var n=Mo;return Mo+=1,da===null&&(da=[]),e=cp(da,e,n),n=Tt,(fe===null?n.memoizedState:fe.next)===null&&(n=n.alternate,q.H=n===null||n.memoizedState===null?Jp:Wp),e}function Tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vo(e);if(e.$$typeof===pt)return Be(e)}throw Error(a(438,String(e)))}function Zh(e){var n=null,s=Tt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=Tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=$h(),Tt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=N;return n.index++,s}function Mi(e,n){return typeof n=="function"?n(e):n}function Au(e){var n=de();return Jh(n,Bt,e)}function Jh(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=y=null,S=null,j=n,G=!1;do{var Y=j.lane&-536870913;if(Y!==j.lane?(Dt&Y)===Y:(ar&Y)===Y){var z=j.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Y===ua&&(G=!0);else if((ar&z)===z){j=j.next,z===ua&&(G=!0);continue}else Y={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(E=S=Y,y=f):S=S.next=Y,Tt.lanes|=z,dr|=z;Y=j.action,gs&&s(f,Y),f=j.hasEagerState?j.eagerState:s(f,Y)}else z={lane:Y,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(E=S=z,y=f):S=S.next=z,Tt.lanes|=Y,dr|=Y;j=j.next}while(j!==null&&j!==n);if(S===null?y=f:S.next=E,!ln(f,e.memoizedState)&&(Se=!0,G&&(s=ca,s!==null)))throw s;e.memoizedState=f,e.baseState=y,e.baseQueue=S,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Wh(e){var n=de(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,c=s.pending,f=n.memoizedState;if(c!==null){s.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);ln(f,n.memoizedState)||(Se=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,o]}function _p(e,n,s){var o=Tt,c=de(),f=Vt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=n();var y=!ln((Bt||c).memoizedState,s);y&&(c.memoizedState=s,Se=!0),c=c.queue;var E=Tp.bind(null,o,c,e);if(ko(2048,8,E,[e]),c.getSnapshot!==n||y||fe!==null&&fe.memoizedState.tag&1){if(o.flags|=2048,ma(9,bu(),Ep.bind(null,o,c,s,n),null),Qt===null)throw Error(a(349));f||(ar&124)!==0||vp(o,n,s)}return s}function vp(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Tt.updateQueue,n===null?(n=$h(),Tt.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Ep(e,n,s,o){n.value=s,n.getSnapshot=o,Ap(n)&&bp(e)}function Tp(e,n,s){return s(function(){Ap(n)&&bp(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!ln(e,s)}catch{return!0}}function bp(e){var n=sa(e,2);n!==null&&mn(n,e,2)}function tf(e){var n=Je();if(typeof e=="function"){var s=e;if(e=s(),gs){an(!0);try{s()}finally{an(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},n}function Sp(e,n,s,o){return e.baseState=s,Jh(e,Bt,typeof o=="function"?o:Mi)}function IT(e,n,s,o,c){if(wu(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};q.T!==null?s(!0):f.isTransition=!1,o(f),s=n.pending,s===null?(f.next=n.pending=f,wp(n,f)):(f.next=s.next,n.pending=s.next=f)}}function wp(e,n){var s=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=q.T,y={};q.T=y;try{var E=s(c,o),S=q.S;S!==null&&S(y,E),Rp(e,n,E)}catch(j){ef(e,n,j)}finally{q.T=f}}else try{f=s(c,o),Rp(e,n,f)}catch(j){ef(e,n,j)}}function Rp(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Ip(e,n,o)},function(o){return ef(e,n,o)}):Ip(e,n,s)}function Ip(e,n,s){n.status="fulfilled",n.value=s,Cp(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,wp(e,s)))}function ef(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,Cp(n),n=n.next;while(n!==o)}e.action=null}function Cp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Np(e,n){return n}function Dp(e,n){if(Vt){var s=Qt.formState;if(s!==null){t:{var o=Tt;if(Vt){if(re){e:{for(var c=re,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=Pn(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){re=Pn(c.nextSibling),o=c.data==="F!";break t}}fs(o)}o=!1}o&&(n=s[0])}}return s=Je(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},s.queue=o,s=Xp.bind(null,Tt,o),o.dispatch=s,o=tf(!1),f=of.bind(null,Tt,!1,o.queue),o=Je(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,s=IT.bind(null,Tt,c,f,s),c.dispatch=s,o.memoizedState=e,[n,s,!1]}function xp(e){var n=de();return Op(n,Bt,e)}function Op(e,n,s){if(n=Jh(e,n,Np)[0],e=Au(Mi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Vo(n)}catch(y){throw y===Co?gu:y}else o=n;n=de();var c=n.queue,f=c.dispatch;return s!==n.memoizedState&&(Tt.flags|=2048,ma(9,bu(),CT.bind(null,c,s),null)),[o,f,e]}function CT(e,n){e.action=n}function Mp(e){var n=de(),s=Bt;if(s!==null)return Op(n,s,e);de(),n=n.memoizedState,s=de();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function ma(e,n,s,o){return e={tag:e,create:s,deps:o,inst:n,next:null},n=Tt.updateQueue,n===null&&(n=$h(),Tt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function bu(){return{destroy:void 0,resource:void 0}}function Vp(){return de().memoizedState}function Su(e,n,s,o){var c=Je();o=o===void 0?null:o,Tt.flags|=e,c.memoizedState=ma(1|n,bu(),s,o)}function ko(e,n,s,o){var c=de();o=o===void 0?null:o;var f=c.memoizedState.inst;Bt!==null&&o!==null&&Fh(o,Bt.memoizedState.deps)?c.memoizedState=ma(n,f,s,o):(Tt.flags|=e,c.memoizedState=ma(1|n,f,s,o))}function kp(e,n){Su(8390656,8,e,n)}function Pp(e,n){ko(2048,8,e,n)}function Up(e,n){return ko(4,2,e,n)}function Lp(e,n){return ko(4,4,e,n)}function jp(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zp(e,n,s){s=s!=null?s.concat([e]):null,ko(4,4,jp.bind(null,n,e),s)}function nf(){}function Bp(e,n){var s=de();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Fh(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function Hp(e,n){var s=de();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Fh(n,o[1]))return o[0];if(o=e(),gs){an(!0);try{e()}finally{an(!1)}}return s.memoizedState=[o,n],o}function rf(e,n,s){return s===void 0||(ar&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=Fg(),Tt.lanes|=e,dr|=e,s)}function qp(e,n,s,o){return ln(s,n)?s:ha.current!==null?(e=rf(e,s,o),ln(e,n)||(Se=!0),e):(ar&42)===0?(Se=!0,e.memoizedState=s):(e=Fg(),Tt.lanes|=e,dr|=e,n)}function Gp(e,n,s,o,c){var f=tt.p;tt.p=f!==0&&8>f?f:8;var y=q.T,E={};q.T=E,of(e,!1,n,s);try{var S=c(),j=q.S;if(j!==null&&j(E,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var G=ST(S,o);Po(e,n,G,dn(e))}else Po(e,n,o,dn(e))}catch(Y){Po(e,n,{then:function(){},status:"rejected",reason:Y},dn())}finally{tt.p=f,q.T=y}}function NT(){}function sf(e,n,s,o){if(e.tag!==5)throw Error(a(476));var c=Fp(e).queue;Gp(e,c,n,ot,s===null?NT:function(){return Yp(e),s(o)})}function Fp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:ot},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Yp(e){var n=Fp(e).next.queue;Po(e,n,{},dn())}function af(){return Be(tl)}function Kp(){return de().memoizedState}function Qp(){return de().memoizedState}function DT(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=dn();e=rr(s);var o=sr(n,e,s);o!==null&&(mn(o,n,s),Do(o,n,s)),n={cache:kh()},e.payload=n;return}n=n.return}}function xT(e,n,s){var o=dn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},wu(e)?$p(n,s):(s=wh(e,n,s,o),s!==null&&(mn(s,e,o),Zp(s,n,o)))}function Xp(e,n,s){var o=dn();Po(e,n,s,o)}function Po(e,n,s,o){var c={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(wu(e))$p(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,E=f(y,s);if(c.hasEagerState=!0,c.eagerState=E,ln(E,y))return lu(e,n,c,0),Qt===null&&ou(),!1}catch{}finally{}if(s=wh(e,n,c,o),s!==null)return mn(s,e,o),Zp(s,n,o),!0}return!1}function of(e,n,s,o){if(o={lane:2,revertLane:jf(),action:o,hasEagerState:!1,eagerState:null,next:null},wu(e)){if(n)throw Error(a(479))}else n=wh(e,s,o,2),n!==null&&mn(n,e,2)}function wu(e){var n=e.alternate;return e===Tt||n!==null&&n===Tt}function $p(e,n){fa=vu=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Zp(e,n,s){if((s&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,io(e,s)}}var Ru={readContext:Be,use:Tu,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le,useHostTransitionStatus:le,useFormState:le,useActionState:le,useOptimistic:le,useMemoCache:le,useCacheRefresh:le},Jp={readContext:Be,use:Tu,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:kp,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,Su(4194308,4,jp.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Su(4194308,4,e,n)},useInsertionEffect:function(e,n){Su(4,2,e,n)},useMemo:function(e,n){var s=Je();n=n===void 0?null:n;var o=e();if(gs){an(!0);try{e()}finally{an(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=Je();if(s!==void 0){var c=s(n);if(gs){an(!0);try{s(n)}finally{an(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=xT.bind(null,Tt,e),[o.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,s=Xp.bind(null,Tt,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:nf,useDeferredValue:function(e,n){var s=Je();return rf(s,e,n)},useTransition:function(){var e=tf(!1);return e=Gp.bind(null,Tt,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=Tt,c=Je();if(Vt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Qt===null)throw Error(a(349));(Dt&124)!==0||vp(o,n,s)}c.memoizedState=s;var f={value:s,getSnapshot:n};return c.queue=f,kp(Tp.bind(null,o,f,e),[e]),o.flags|=2048,ma(9,bu(),Ep.bind(null,o,f,s,n),null),s},useId:function(){var e=Je(),n=Qt.identifierPrefix;if(Vt){var s=Di,o=Ni;s=(o&~(1<<32-ze(o)-1)).toString(32)+s,n="«"+n+"R"+s,s=Eu++,0<s&&(n+="H"+s.toString(32)),n+="»"}else s=wT++,n="«"+n+"r"+s.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:af,useFormState:Dp,useActionState:Dp,useOptimistic:function(e){var n=Je();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=of.bind(null,Tt,!0,s),s.dispatch=n,[e,n]},useMemoCache:Zh,useCacheRefresh:function(){return Je().memoizedState=DT.bind(null,Tt)}},Wp={readContext:Be,use:Tu,useCallback:Bp,useContext:Be,useEffect:Pp,useImperativeHandle:zp,useInsertionEffect:Up,useLayoutEffect:Lp,useMemo:Hp,useReducer:Au,useRef:Vp,useState:function(){return Au(Mi)},useDebugValue:nf,useDeferredValue:function(e,n){var s=de();return qp(s,Bt.memoizedState,e,n)},useTransition:function(){var e=Au(Mi)[0],n=de().memoizedState;return[typeof e=="boolean"?e:Vo(e),n]},useSyncExternalStore:_p,useId:Kp,useHostTransitionStatus:af,useFormState:xp,useActionState:xp,useOptimistic:function(e,n){var s=de();return Sp(s,Bt,e,n)},useMemoCache:Zh,useCacheRefresh:Qp},OT={readContext:Be,use:Tu,useCallback:Bp,useContext:Be,useEffect:Pp,useImperativeHandle:zp,useInsertionEffect:Up,useLayoutEffect:Lp,useMemo:Hp,useReducer:Wh,useRef:Vp,useState:function(){return Wh(Mi)},useDebugValue:nf,useDeferredValue:function(e,n){var s=de();return Bt===null?rf(s,e,n):qp(s,Bt.memoizedState,e,n)},useTransition:function(){var e=Wh(Mi)[0],n=de().memoizedState;return[typeof e=="boolean"?e:Vo(e),n]},useSyncExternalStore:_p,useId:Kp,useHostTransitionStatus:af,useFormState:Mp,useActionState:Mp,useOptimistic:function(e,n){var s=de();return Bt!==null?Sp(s,Bt,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Zh,useCacheRefresh:Qp},pa=null,Uo=0;function Iu(e){var n=Uo;return Uo+=1,pa===null&&(pa=[]),cp(pa,e,n)}function Lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cu(e,n){throw n.$$typeof===D?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tg(e){var n=e._init;return n(e._payload)}function eg(e){function n(V,C){if(e){var L=V.deletions;L===null?(V.deletions=[C],V.flags|=16):L.push(C)}}function s(V,C){if(!e)return null;for(;C!==null;)n(V,C),C=C.sibling;return null}function o(V){for(var C=new Map;V!==null;)V.key!==null?C.set(V.key,V):C.set(V.index,V),V=V.sibling;return C}function c(V,C){return V=Ci(V,C),V.index=0,V.sibling=null,V}function f(V,C,L){return V.index=L,e?(L=V.alternate,L!==null?(L=L.index,L<C?(V.flags|=67108866,C):L):(V.flags|=67108866,C)):(V.flags|=1048576,C)}function y(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function E(V,C,L,F){return C===null||C.tag!==6?(C=Ih(L,V.mode,F),C.return=V,C):(C=c(C,L),C.return=V,C)}function S(V,C,L,F){var it=L.type;return it===$?G(V,C,L.props.children,F,L.key):C!==null&&(C.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===b&&tg(it)===C.type)?(C=c(C,L.props),Lo(C,L),C.return=V,C):(C=cu(L.type,L.key,L.props,null,V.mode,F),Lo(C,L),C.return=V,C)}function j(V,C,L,F){return C===null||C.tag!==4||C.stateNode.containerInfo!==L.containerInfo||C.stateNode.implementation!==L.implementation?(C=Ch(L,V.mode,F),C.return=V,C):(C=c(C,L.children||[]),C.return=V,C)}function G(V,C,L,F,it){return C===null||C.tag!==7?(C=ls(L,V.mode,F,it),C.return=V,C):(C=c(C,L),C.return=V,C)}function Y(V,C,L){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Ih(""+C,V.mode,L),C.return=V,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case P:return L=cu(C.type,C.key,C.props,null,V.mode,L),Lo(L,C),L.return=V,L;case J:return C=Ch(C,V.mode,L),C.return=V,C;case b:var F=C._init;return C=F(C._payload),Y(V,C,L)}if(ne(C)||k(C))return C=ls(C,V.mode,L,null),C.return=V,C;if(typeof C.then=="function")return Y(V,Iu(C),L);if(C.$$typeof===pt)return Y(V,mu(V,C),L);Cu(V,C)}return null}function z(V,C,L,F){var it=C!==null?C.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return it!==null?null:E(V,C,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case P:return L.key===it?S(V,C,L,F):null;case J:return L.key===it?j(V,C,L,F):null;case b:return it=L._init,L=it(L._payload),z(V,C,L,F)}if(ne(L)||k(L))return it!==null?null:G(V,C,L,F,null);if(typeof L.then=="function")return z(V,C,Iu(L),F);if(L.$$typeof===pt)return z(V,C,mu(V,L),F);Cu(V,L)}return null}function B(V,C,L,F,it){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return V=V.get(L)||null,E(C,V,""+F,it);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case P:return V=V.get(F.key===null?L:F.key)||null,S(C,V,F,it);case J:return V=V.get(F.key===null?L:F.key)||null,j(C,V,F,it);case b:var St=F._init;return F=St(F._payload),B(V,C,L,F,it)}if(ne(F)||k(F))return V=V.get(L)||null,G(C,V,F,it,null);if(typeof F.then=="function")return B(V,C,L,Iu(F),it);if(F.$$typeof===pt)return B(V,C,L,mu(C,F),it);Cu(C,F)}return null}function dt(V,C,L,F){for(var it=null,St=null,at=C,ht=C=0,Re=null;at!==null&&ht<L.length;ht++){at.index>ht?(Re=at,at=null):Re=at.sibling;var Ot=z(V,at,L[ht],F);if(Ot===null){at===null&&(at=Re);break}e&&at&&Ot.alternate===null&&n(V,at),C=f(Ot,C,ht),St===null?it=Ot:St.sibling=Ot,St=Ot,at=Re}if(ht===L.length)return s(V,at),Vt&&cs(V,ht),it;if(at===null){for(;ht<L.length;ht++)at=Y(V,L[ht],F),at!==null&&(C=f(at,C,ht),St===null?it=at:St.sibling=at,St=at);return Vt&&cs(V,ht),it}for(at=o(at);ht<L.length;ht++)Re=B(at,V,ht,L[ht],F),Re!==null&&(e&&Re.alternate!==null&&at.delete(Re.key===null?ht:Re.key),C=f(Re,C,ht),St===null?it=Re:St.sibling=Re,St=Re);return e&&at.forEach(function(Ar){return n(V,Ar)}),Vt&&cs(V,ht),it}function ct(V,C,L,F){if(L==null)throw Error(a(151));for(var it=null,St=null,at=C,ht=C=0,Re=null,Ot=L.next();at!==null&&!Ot.done;ht++,Ot=L.next()){at.index>ht?(Re=at,at=null):Re=at.sibling;var Ar=z(V,at,Ot.value,F);if(Ar===null){at===null&&(at=Re);break}e&&at&&Ar.alternate===null&&n(V,at),C=f(Ar,C,ht),St===null?it=Ar:St.sibling=Ar,St=Ar,at=Re}if(Ot.done)return s(V,at),Vt&&cs(V,ht),it;if(at===null){for(;!Ot.done;ht++,Ot=L.next())Ot=Y(V,Ot.value,F),Ot!==null&&(C=f(Ot,C,ht),St===null?it=Ot:St.sibling=Ot,St=Ot);return Vt&&cs(V,ht),it}for(at=o(at);!Ot.done;ht++,Ot=L.next())Ot=B(at,V,ht,Ot.value,F),Ot!==null&&(e&&Ot.alternate!==null&&at.delete(Ot.key===null?ht:Ot.key),C=f(Ot,C,ht),St===null?it=Ot:St.sibling=Ot,St=Ot);return e&&at.forEach(function(M1){return n(V,M1)}),Vt&&cs(V,ht),it}function qt(V,C,L,F){if(typeof L=="object"&&L!==null&&L.type===$&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case P:t:{for(var it=L.key;C!==null;){if(C.key===it){if(it=L.type,it===$){if(C.tag===7){s(V,C.sibling),F=c(C,L.props.children),F.return=V,V=F;break t}}else if(C.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===b&&tg(it)===C.type){s(V,C.sibling),F=c(C,L.props),Lo(F,L),F.return=V,V=F;break t}s(V,C);break}else n(V,C);C=C.sibling}L.type===$?(F=ls(L.props.children,V.mode,F,L.key),F.return=V,V=F):(F=cu(L.type,L.key,L.props,null,V.mode,F),Lo(F,L),F.return=V,V=F)}return y(V);case J:t:{for(it=L.key;C!==null;){if(C.key===it)if(C.tag===4&&C.stateNode.containerInfo===L.containerInfo&&C.stateNode.implementation===L.implementation){s(V,C.sibling),F=c(C,L.children||[]),F.return=V,V=F;break t}else{s(V,C);break}else n(V,C);C=C.sibling}F=Ch(L,V.mode,F),F.return=V,V=F}return y(V);case b:return it=L._init,L=it(L._payload),qt(V,C,L,F)}if(ne(L))return dt(V,C,L,F);if(k(L)){if(it=k(L),typeof it!="function")throw Error(a(150));return L=it.call(L),ct(V,C,L,F)}if(typeof L.then=="function")return qt(V,C,Iu(L),F);if(L.$$typeof===pt)return qt(V,C,mu(V,L),F);Cu(V,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,C!==null&&C.tag===6?(s(V,C.sibling),F=c(C,L),F.return=V,V=F):(s(V,C),F=Ih(L,V.mode,F),F.return=V,V=F),y(V)):s(V,C)}return function(V,C,L,F){try{Uo=0;var it=qt(V,C,L,F);return pa=null,it}catch(at){if(at===Co||at===gu)throw at;var St=un(29,at,null,V.mode);return St.lanes=F,St.return=V,St}finally{}}}var ga=eg(!0),ng=eg(!1),In=Q(null),si=null;function or(e){var n=e.alternate;Z(Ee,Ee.current&1),Z(In,e),si===null&&(n===null||ha.current!==null||n.memoizedState!==null)&&(si=e)}function ig(e){if(e.tag===22){if(Z(Ee,Ee.current),Z(In,e),si===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(si=e)}}else lr()}function lr(){Z(Ee,Ee.current),Z(In,In.current)}function Vi(e){nt(In),si===e&&(si=null),nt(Ee)}var Ee=Q(0);function Nu(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Zf(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:A({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var uf={enqueueSetState:function(e,n,s){e=e._reactInternals;var o=dn(),c=rr(o);c.payload=n,s!=null&&(c.callback=s),n=sr(e,c,o),n!==null&&(mn(n,e,o),Do(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=dn(),c=rr(o);c.tag=1,c.payload=n,s!=null&&(c.callback=s),n=sr(e,c,o),n!==null&&(mn(n,e,o),Do(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=dn(),o=rr(s);o.tag=2,n!=null&&(o.callback=n),n=sr(e,o,s),n!==null&&(mn(n,e,s),Do(n,e,s))}};function rg(e,n,s,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Eo(s,o)||!Eo(c,f):!0}function sg(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function ys(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=A({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}var Du=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ag(e){Du(e)}function og(e){console.error(e)}function lg(e){Du(e)}function xu(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function cf(e,n,s){return s=rr(s),s.tag=3,s.payload={element:null},s.callback=function(){xu(e,n)},s}function cg(e){return e=rr(e),e.tag=3,e}function hg(e,n,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){ug(n,s,o)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){ug(n,s,o),typeof c!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function MT(e,n,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&wo(n,s,c,!0),s=In.current,s!==null){switch(s.tag){case 13:return si===null?Vf():s.alternate===null&&se===0&&(se=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===Lh?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),Pf(e,o,c)),!1;case 22:return s.flags|=65536,o===Lh?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),Pf(e,o,c)),!1}throw Error(a(435,s.tag))}return Pf(e,o,c),Vf(),!1}if(Vt)return n=In.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==xh&&(e=Error(a(422),{cause:o}),So(bn(e,s)))):(o!==xh&&(n=Error(a(423),{cause:o}),So(bn(n,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=bn(o,s),c=cf(e.stateNode,o,c),Bh(e,c),se!==4&&(se=2)),!1;var f=Error(a(520),{cause:o});if(f=bn(f,s),Fo===null?Fo=[f]:Fo.push(f),se!==4&&(se=2),n===null)return!0;o=bn(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=cf(s.stateNode,o,e),Bh(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mr===null||!mr.has(f))))return s.flags|=65536,c&=-c,s.lanes|=c,c=cg(c),hg(c,e,s,o),Bh(s,c),!1}s=s.return}while(s!==null);return!1}var fg=Error(a(461)),Se=!1;function Me(e,n,s,o){n.child=e===null?ng(n,null,s,o):ga(n,e.child,s,o)}function dg(e,n,s,o,c){s=s.render;var f=n.ref;if("ref"in o){var y={};for(var E in o)E!=="ref"&&(y[E]=o[E])}else y=o;return ms(n),o=Yh(e,n,s,y,f,c),E=Kh(),e!==null&&!Se?(Qh(e,n,c),ki(e,n,c)):(Vt&&E&&Nh(n),n.flags|=1,Me(e,n,o,c),n.child)}function mg(e,n,s,o,c){if(e===null){var f=s.type;return typeof f=="function"&&!Rh(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,pg(e,n,f,o,c)):(e=cu(s.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_f(e,c)){var y=f.memoizedProps;if(s=s.compare,s=s!==null?s:Eo,s(y,o)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=Ci(f,o),e.ref=n.ref,e.return=n,n.child=e}function pg(e,n,s,o,c){if(e!==null){var f=e.memoizedProps;if(Eo(f,o)&&e.ref===n.ref)if(Se=!1,n.pendingProps=o=f,_f(e,c))(e.flags&131072)!==0&&(Se=!0);else return n.lanes=e.lanes,ki(e,n,c)}return hf(e,n,s,o,c)}function gg(e,n,s){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|s:s,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return yg(e,n,o,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pu(n,f!==null?f.cachePool:null),f!==null?pp(n,f):qh(),ig(n);else return n.lanes=n.childLanes=536870912,yg(e,n,f!==null?f.baseLanes|s:s,s)}else f!==null?(pu(n,f.cachePool),pp(n,f),lr(),n.memoizedState=null):(e!==null&&pu(n,null),qh(),lr());return Me(e,n,c,s),n.child}function yg(e,n,s,o){var c=Uh();return c=c===null?null:{parent:ve._currentValue,pool:c},n.memoizedState={baseLanes:s,cachePool:c},e!==null&&pu(n,null),qh(),ig(n),e!==null&&wo(e,n,o,!0),null}function Ou(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function hf(e,n,s,o,c){return ms(n),s=Yh(e,n,s,o,void 0,c),o=Kh(),e!==null&&!Se?(Qh(e,n,c),ki(e,n,c)):(Vt&&o&&Nh(n),n.flags|=1,Me(e,n,s,c),n.child)}function _g(e,n,s,o,c,f){return ms(n),n.updateQueue=null,s=yp(n,o,s,c),gp(e),o=Kh(),e!==null&&!Se?(Qh(e,n,f),ki(e,n,f)):(Vt&&o&&Nh(n),n.flags|=1,Me(e,n,s,f),n.child)}function vg(e,n,s,o,c){if(ms(n),n.stateNode===null){var f=aa,y=s.contextType;typeof y=="object"&&y!==null&&(f=Be(y)),f=new s(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},jh(n),y=s.contextType,f.context=typeof y=="object"&&y!==null?Be(y):aa,f.state=n.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(lf(n,s,y,o),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&uf.enqueueReplaceState(f,f.state,null),Oo(n,o,f,c),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,S=ys(s,E);f.props=S;var j=f.context,G=s.contextType;y=aa,typeof G=="object"&&G!==null&&(y=Be(G));var Y=s.getDerivedStateFromProps;G=typeof Y=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,G||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||j!==y)&&sg(n,f,o,y),ir=!1;var z=n.memoizedState;f.state=z,Oo(n,o,f,c),xo(),j=n.memoizedState,E||z!==j||ir?(typeof Y=="function"&&(lf(n,s,Y,o),j=n.memoizedState),(S=ir||rg(n,s,S,o,z,j,y))?(G||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=j),f.props=o,f.state=j,f.context=y,o=S):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zh(e,n),y=n.memoizedProps,G=ys(s,y),f.props=G,Y=n.pendingProps,z=f.context,j=s.contextType,S=aa,typeof j=="object"&&j!==null&&(S=Be(j)),E=s.getDerivedStateFromProps,(j=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Y||z!==S)&&sg(n,f,o,S),ir=!1,z=n.memoizedState,f.state=z,Oo(n,o,f,c),xo();var B=n.memoizedState;y!==Y||z!==B||ir||e!==null&&e.dependencies!==null&&du(e.dependencies)?(typeof E=="function"&&(lf(n,s,E,o),B=n.memoizedState),(G=ir||rg(n,s,G,o,z,B,S)||e!==null&&e.dependencies!==null&&du(e.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,S),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,S)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=B),f.props=o,f.state=B,f.context=S,o=G):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ou(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ga(n,e.child,null,c),n.child=ga(n,null,s,c)):Me(e,n,s,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function Eg(e,n,s,o){return bo(),n.flags|=256,Me(e,n,s,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:op()}}function mf(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=Cn),e}function Tg(e,n,s){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Ee.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Vt){if(c?or(n):lr(),Vt){var E=re,S;if(S=E){t:{for(S=E,E=ri;S.nodeType!==8;){if(!E){E=null;break t}if(S=Pn(S.nextSibling),S===null){E=null;break t}}E=S}E!==null?(n.memoizedState={dehydrated:E,treeContext:us!==null?{id:Ni,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},S=un(18,null,null,0),S.stateNode=E,S.return=n,n.child=S,Ze=n,re=null,S=!0):S=!1}S||fs(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Zf(E)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return E=o.children,o=o.fallback,c?(lr(),c=n.mode,E=Mu({mode:"hidden",children:E},c),o=ls(o,c,s,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=df(s),c.childLanes=mf(e,y,s),n.memoizedState=ff,o):(or(n),pf(n,E))}if(S=e.memoizedState,S!==null&&(E=S.dehydrated,E!==null)){if(f)n.flags&256?(or(n),n.flags&=-257,n=gf(e,n,s)):n.memoizedState!==null?(lr(),n.child=e.child,n.flags|=128,n=null):(lr(),c=o.fallback,E=n.mode,o=Mu({mode:"visible",children:o.children},E),c=ls(c,E,s,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,ga(n,e.child,null,s),o=n.child,o.memoizedState=df(s),o.childLanes=mf(e,y,s),n.memoizedState=ff,n=c);else if(or(n),Zf(E)){if(y=E.nextSibling&&E.nextSibling.dataset,y)var j=y.dgst;y=j,o=Error(a(419)),o.stack="",o.digest=y,So({value:o,source:null,stack:null}),n=gf(e,n,s)}else if(Se||wo(e,n,s,!1),y=(s&e.childLanes)!==0,Se||y){if(y=Qt,y!==null&&(o=s&-s,o=(o&42)!==0?1:Xi(o),o=(o&(y.suspendedLanes|s))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,sa(e,o),mn(y,e,o),fg;E.data==="$?"||Vf(),n=gf(e,n,s)}else E.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=S.treeContext,re=Pn(E.nextSibling),Ze=n,Vt=!0,hs=null,ri=!1,e!==null&&(wn[Rn++]=Ni,wn[Rn++]=Di,wn[Rn++]=us,Ni=e.id,Di=e.overflow,us=n),n=pf(n,o.children),n.flags|=4096);return n}return c?(lr(),c=o.fallback,E=n.mode,S=e.child,j=S.sibling,o=Ci(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,j!==null?c=Ci(j,c):(c=ls(c,E,s,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=e.child.memoizedState,E===null?E=df(s):(S=E.cachePool,S!==null?(j=ve._currentValue,S=S.parent!==j?{parent:j,pool:j}:S):S=op(),E={baseLanes:E.baseLanes|s,cachePool:S}),c.memoizedState=E,c.childLanes=mf(e,y,s),n.memoizedState=ff,o):(or(n),s=e.child,e=s.sibling,s=Ci(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=s,n.memoizedState=null,s)}function pf(e,n){return n=Mu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Mu(e,n){return e=un(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,n,s){return ga(n,e.child,null,s),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ag(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mh(e.return,n,s)}function yf(e,n,s,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=s,f.tailMode=c)}function bg(e,n,s){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Me(e,n,o.children,s),o=Ee.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ag(e,s,n);else if(e.tag===19)Ag(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Z(Ee,o),c){case"forwards":for(s=n.child,c=null;s!==null;)e=s.alternate,e!==null&&Nu(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=n.child,n.child=null):(c=s.sibling,s.sibling=null),yf(n,!1,c,s,f);break;case"backwards":for(s=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Nu(e)===null){n.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}yf(n,!0,s,null,f);break;case"together":yf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),dr|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(wo(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=Ci(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Ci(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&du(e)))}function VT(e,n,s){switch(n.tag){case 3:Kt(n,n.stateNode.containerInfo),nr(n,ve,e.memoizedState.cache),bo();break;case 27:case 5:Qi(n);break;case 4:Kt(n,n.stateNode.containerInfo);break;case 10:nr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(or(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Tg(e,n,s):(or(n),e=ki(e,n,s),e!==null?e.sibling:null);or(n);break;case 19:var c=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(wo(e,n,s,!1),o=(s&n.childLanes)!==0),c){if(o)return bg(e,n,s);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Z(Ee,Ee.current),o)break;return null;case 22:case 23:return n.lanes=0,gg(e,n,s);case 24:nr(n,ve,e.memoizedState.cache)}return ki(e,n,s)}function Sg(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Se=!0;else{if(!_f(e,s)&&(n.flags&128)===0)return Se=!1,VT(e,n,s);Se=(e.flags&131072)!==0}else Se=!1,Vt&&(n.flags&1048576)!==0&&tp(n,fu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Rh(o)?(e=ys(o,e),n.tag=1,n=vg(null,n,o,e,s)):(n.tag=0,n=hf(null,n,o,e,s));else{if(o!=null){if(c=o.$$typeof,c===Gt){n.tag=11,n=dg(null,n,o,e,s);break t}else if(c===O){n.tag=14,n=mg(null,n,o,e,s);break t}}throw n=De(o)||o,Error(a(306,n,""))}}return n;case 0:return hf(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,c=ys(o,n.pendingProps),vg(e,n,o,c,s);case 3:t:{if(Kt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,zh(e,n),Oo(n,o,null,s);var y=n.memoizedState;if(o=y.cache,nr(n,ve,o),o!==f.cache&&Vh(n,[ve],s,!0),xo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Eg(e,n,o,s);break t}else if(o!==c){c=bn(Error(a(424)),n),So(c),n=Eg(e,n,o,s);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(re=Pn(e.firstChild),Ze=n,Vt=!0,hs=null,ri=!0,s=ng(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(bo(),o===c){n=ki(e,n,s);break t}Me(e,n,o,s)}n=n.child}return n;case 26:return Ou(e,n),e===null?(s=Cy(n.type,null,n.pendingProps,null))?n.memoizedState=s:Vt||(s=n.type,e=n.pendingProps,o=Ku(mt.current).createElement(s),o[ge]=n,o[ce]=e,ke(o,s,e),oe(o),n.stateNode=o):n.memoizedState=Cy(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qi(n),e===null&&Vt&&(o=n.stateNode=wy(n.type,n.pendingProps,mt.current),Ze=n,ri=!0,c=re,yr(n.type)?(Jf=c,re=Pn(o.firstChild)):re=c),Me(e,n,n.pendingProps.children,s),Ou(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Vt&&((c=o=re)&&(o=l1(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,Ze=n,re=Pn(o.firstChild),ri=!1,c=!0):c=!1),c||fs(n)),Qi(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Qf(c,f)?o=null:y!==null&&Qf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Yh(e,n,RT,null,null,s),tl._currentValue=c),Ou(e,n),Me(e,n,o,s),n.child;case 6:return e===null&&Vt&&((e=s=re)&&(s=u1(s,n.pendingProps,ri),s!==null?(n.stateNode=s,Ze=n,re=null,e=!0):e=!1),e||fs(n)),null;case 13:return Tg(e,n,s);case 4:return Kt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ga(n,null,o,s):Me(e,n,o,s),n.child;case 11:return dg(e,n,n.type,n.pendingProps,s);case 7:return Me(e,n,n.pendingProps,s),n.child;case 8:return Me(e,n,n.pendingProps.children,s),n.child;case 12:return Me(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,nr(n,n.type,o.value),Me(e,n,o.children,s),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ms(n),c=Be(c),o=o(c),n.flags|=1,Me(e,n,o,s),n.child;case 14:return mg(e,n,n.type,n.pendingProps,s);case 15:return pg(e,n,n.type,n.pendingProps,s);case 19:return bg(e,n,s);case 31:return o=n.pendingProps,s=n.mode,o={mode:o.mode,children:o.children},e===null?(s=Mu(o,s),s.ref=n.ref,n.child=s,s.return=n,n=s):(s=Ci(e.child,o),s.ref=n.ref,n.child=s,s.return=n,n=s),n;case 22:return gg(e,n,s);case 24:return ms(n),o=Be(ve),e===null?(c=Uh(),c===null&&(c=Qt,f=kh(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=s),c=f),n.memoizedState={parent:o,cache:c},jh(n),nr(n,ve,c)):((e.lanes&s)!==0&&(zh(e,n),Oo(n,null,null,s),xo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),nr(n,ve,o)):(o=f.cache,nr(n,ve,o),o!==c.cache&&Vh(n,[ve],s,!0))),Me(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Pi(e){e.flags|=4}function wg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!My(n)){if(n=In.current,n!==null&&((Dt&4194048)===Dt?si!==null:(Dt&62914560)!==Dt&&(Dt&536870912)===0||n!==si))throw No=Lh,lp;e.flags|=8192}}function Vu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?eo():536870912,e.lanes|=n,Ea|=n)}function jo(e,n){if(!Vt)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function kT(e,n,s){var o=n.pendingProps;switch(Dh(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return te(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Oi(ve),Yn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ao(n)?Pi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ip())),te(n),null;case 26:return s=n.memoizedState,e===null?(Pi(n),s!==null?(te(n),wg(n,s)):(te(n),n.flags&=-16777217)):s?s!==e.memoizedState?(Pi(n),te(n),wg(n,s)):(te(n),n.flags&=-16777217):(e.memoizedProps!==o&&Pi(n),te(n),n.flags&=-16777217),null;case 27:pi(n),s=mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Pi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return te(n),null}e=ut.current,Ao(n)?ep(n):(e=wy(c,o,s),n.stateNode=e,Pi(n))}return te(n),null;case 5:if(pi(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Pi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return te(n),null}if(e=ut.current,Ao(n))ep(n);else{switch(c=Ku(mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(s,{is:o.is}):c.createElement(s)}}e[ge]=n,e[ce]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(ke(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Pi(n)}}return te(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Pi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=mt.current,Ao(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,c=Ze,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ge]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||_y(e.nodeValue,s)),e||fs(n)}else e=Ku(e).createTextNode(o),e[ge]=n,n.stateNode=e}return te(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ao(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[ge]=n}else bo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;te(n),c=!1}else c=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),Vu(n,n.updateQueue),te(n),null;case 4:return Yn(),e===null&&qf(n.stateNode.containerInfo),te(n),null;case 10:return Oi(n.type),te(n),null;case 19:if(nt(Ee),c=n.memoizedState,c===null)return te(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)jo(c,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nu(e),f!==null){for(n.flags|=128,jo(c,!1),e=f.updateQueue,n.updateQueue=e,Vu(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)Wm(s,e),s=s.sibling;return Z(Ee,Ee.current&1|2),n.child}e=e.sibling}c.tail!==null&&yn()>Uu&&(n.flags|=128,o=!0,jo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Nu(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Vu(n,e),jo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Vt)return te(n),null}else 2*yn()-c.renderingStartTime>Uu&&s!==536870912&&(n.flags|=128,o=!0,jo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=yn(),n.sibling=null,e=Ee.current,Z(Ee,o?e&1|2:e&1),n):(te(n),null);case 22:case 23:return Vi(n),Gh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),s=n.updateQueue,s!==null&&Vu(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&nt(ps),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oi(ve),te(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function PT(e,n){switch(Dh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oi(ve),Yn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pi(n),null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));bo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(Ee),null;case 4:return Yn(),null;case 10:return Oi(n.type),null;case 22:case 23:return Vi(n),Gh(),e!==null&&nt(ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oi(ve),null;case 25:return null;default:return null}}function Rg(e,n){switch(Dh(n),n.tag){case 3:Oi(ve),Yn();break;case 26:case 27:case 5:pi(n);break;case 4:Yn();break;case 13:Vi(n);break;case 19:nt(Ee);break;case 10:Oi(n.type);break;case 22:case 23:Vi(n),Gh(),e!==null&&nt(ps);break;case 24:Oi(ve)}}function zo(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){o=void 0;var f=s.create,y=s.inst;o=f(),y.destroy=o}s=s.next}while(s!==c)}}catch(E){Yt(n,n.return,E)}}function ur(e,n,s){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,E=y.destroy;if(E!==void 0){y.destroy=void 0,c=n;var S=s,j=E;try{j()}catch(G){Yt(c,S,G)}}}o=o.next}while(o!==f)}}catch(G){Yt(n,n.return,G)}}function Ig(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{mp(n,s)}catch(o){Yt(e,e.return,o)}}}function Cg(e,n,s){s.props=ys(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Yt(e,n,o)}}function Bo(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(c){Yt(e,n,c)}}function ai(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){Yt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Yt(e,n,c)}else s.current=null}function Ng(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){Yt(e,e.return,c)}}function vf(e,n,s){try{var o=e.stateNode;i1(o,e.type,s,n),o[ce]=n}catch(c){Yt(e,e.return,c)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yr(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Yu));else if(o!==4&&(o===27&&yr(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(Tf(e,n,s),e=e.sibling;e!==null;)Tf(e,n,s),e=e.sibling}function ku(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&(o===27&&yr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ku(e,n,s),e=e.sibling;e!==null;)ku(e,n,s),e=e.sibling}function xg(e){var n=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);ke(n,o,s),n[ge]=e,n[ce]=s}catch(f){Yt(e,e.return,f)}}var Ui=!1,ue=!1,Af=!1,Og=typeof WeakSet=="function"?WeakSet:Set,we=null;function UT(e,n){if(e=e.containerInfo,Yf=Wu,e=qm(e),vh(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var y=0,E=-1,S=-1,j=0,G=0,Y=e,z=null;e:for(;;){for(var B;Y!==s||c!==0&&Y.nodeType!==3||(E=y+c),Y!==f||o!==0&&Y.nodeType!==3||(S=y+o),Y.nodeType===3&&(y+=Y.nodeValue.length),(B=Y.firstChild)!==null;)z=Y,Y=B;for(;;){if(Y===e)break e;if(z===s&&++j===c&&(E=y),z===f&&++G===o&&(S=y),(B=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=B}s=E===-1||S===-1?null:{start:E,end:S}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kf={focusedElem:e,selectionRange:s},Wu=!1,we=n;we!==null;)if(n=we,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,we=e;else for(;we!==null;){switch(n=we,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,c=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var dt=ys(s.type,c,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(dt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ct){Yt(s,s.return,ct)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)$f(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,we=e;break}we=n.return}}function Mg(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:cr(e,s),o&4&&zo(5,s);break;case 1:if(cr(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(y){Yt(s,s.return,y)}else{var c=ys(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Yt(s,s.return,y)}}o&64&&Ig(s),o&512&&Bo(s,s.return);break;case 3:if(cr(e,s),o&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{mp(e,n)}catch(y){Yt(s,s.return,y)}}break;case 27:n===null&&o&4&&xg(s);case 26:case 5:cr(e,s),n===null&&o&4&&Ng(s),o&512&&Bo(s,s.return);break;case 12:cr(e,s);break;case 13:cr(e,s),o&4&&Pg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=YT.bind(null,s),c1(e,s))));break;case 22:if(o=s.memoizedState!==null||Ui,!o){n=n!==null&&n.memoizedState!==null||ue,c=Ui;var f=ue;Ui=o,(ue=n)&&!f?hr(e,s,(s.subtreeFlags&8772)!==0):cr(e,s),Ui=c,ue=f}break;case 30:break;default:cr(e,s)}}function Vg(e){var n=e.alternate;n!==null&&(e.alternate=null,Vg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ji(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,We=!1;function Li(e,n,s){for(s=s.child;s!==null;)kg(e,n,s),s=s.sibling}function kg(e,n,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(ie,s)}catch{}switch(s.tag){case 26:ue||ai(s,n),Li(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ue||ai(s,n);var o=Jt,c=We;yr(s.type)&&(Jt=s.stateNode,We=!1),Li(e,n,s),$o(s.stateNode),Jt=o,We=c;break;case 5:ue||ai(s,n);case 6:if(o=Jt,c=We,Jt=null,Li(e,n,s),Jt=o,We=c,Jt!==null)if(We)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(s.stateNode)}catch(f){Yt(s,n,f)}else try{Jt.removeChild(s.stateNode)}catch(f){Yt(s,n,f)}break;case 18:Jt!==null&&(We?(e=Jt,by(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),rl(e)):by(Jt,s.stateNode));break;case 4:o=Jt,c=We,Jt=s.stateNode.containerInfo,We=!0,Li(e,n,s),Jt=o,We=c;break;case 0:case 11:case 14:case 15:ue||ur(2,s,n),ue||ur(4,s,n),Li(e,n,s);break;case 1:ue||(ai(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Cg(s,n,o)),Li(e,n,s);break;case 21:Li(e,n,s);break;case 22:ue=(o=ue)||s.memoizedState!==null,Li(e,n,s),ue=o;break;default:Li(e,n,s)}}function Pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rl(e)}catch(s){Yt(n,n.return,s)}}function LT(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Og),n;default:throw Error(a(435,e.tag))}}function bf(e,n){var s=LT(e);n.forEach(function(o){var c=KT.bind(null,e,o);s.has(o)||(s.add(o),o.then(c,c))})}function cn(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],f=e,y=n,E=y;t:for(;E!==null;){switch(E.tag){case 27:if(yr(E.type)){Jt=E.stateNode,We=!1;break t}break;case 5:Jt=E.stateNode,We=!1;break t;case 3:case 4:Jt=E.stateNode.containerInfo,We=!0;break t}E=E.return}if(Jt===null)throw Error(a(160));kg(f,y,c),Jt=null,We=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ug(n,e),n=n.sibling}var kn=null;function Ug(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:cn(n,e),hn(e),o&4&&(ur(3,e,e.return),zo(3,e),ur(5,e,e.return));break;case 1:cn(n,e),hn(e),o&512&&(ue||s===null||ai(s,s.return)),o&64&&Ui&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=kn;if(cn(n,e),hn(e),o&512&&(ue||s===null||ai(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Yr]||f[ge]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),ke(f,o,s),f[ge]=e,oe(f),o=f;break t;case"link":var y=xy("link","href",c).get(o+(s.href||""));if(y){for(var E=0;E<y.length;E++)if(f=y[E],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(E,1);break e}}f=c.createElement(o),ke(f,o,s),c.head.appendChild(f);break;case"meta":if(y=xy("meta","content",c).get(o+(s.content||""))){for(E=0;E<y.length;E++)if(f=y[E],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(E,1);break e}}f=c.createElement(o),ke(f,o,s),c.head.appendChild(f);break;default:throw Error(a(468,o))}f[ge]=e,oe(f),o=f}e.stateNode=o}else Oy(c,e.type,e.stateNode);else e.stateNode=Dy(c,o,e.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?Oy(c,e.type,e.stateNode):Dy(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vf(e,e.memoizedProps,s.memoizedProps)}break;case 27:cn(n,e),hn(e),o&512&&(ue||s===null||ai(s,s.return)),s!==null&&o&4&&vf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(cn(n,e),hn(e),o&512&&(ue||s===null||ai(s,s.return)),e.flags&32){c=e.stateNode;try{vn(c,"")}catch(B){Yt(e,e.return,B)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,vf(e,c,s!==null?s.memoizedProps:c)),o&1024&&(Af=!0);break;case 6:if(cn(n,e),hn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(B){Yt(e,e.return,B)}}break;case 3:if($u=null,c=kn,kn=Qu(n.containerInfo),cn(n,e),kn=c,hn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{rl(n.containerInfo)}catch(B){Yt(e,e.return,B)}Af&&(Af=!1,Lg(e));break;case 4:o=kn,kn=Qu(e.stateNode.containerInfo),cn(n,e),hn(e),kn=o;break;case 12:cn(n,e),hn(e);break;case 13:cn(n,e),hn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Nf=yn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bf(e,o)));break;case 22:c=e.memoizedState!==null;var S=s!==null&&s.memoizedState!==null,j=Ui,G=ue;if(Ui=j||c,ue=G||S,cn(n,e),ue=G,Ui=j,hn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(s===null||S||Ui||ue||_s(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){S=s=n;try{if(f=S.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{E=S.stateNode;var Y=S.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Yt(S,S.return,B)}}}else if(n.tag===6){if(s===null){S=n;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(B){Yt(S,S.return,B)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,bf(e,s))));break;case 19:cn(n,e),hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bf(e,o)));break;case 30:break;case 21:break;default:cn(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{for(var s,o=e.return;o!==null;){if(Dg(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var c=s.stateNode,f=Ef(e);ku(e,f,c);break;case 5:var y=s.stateNode;s.flags&32&&(vn(y,""),s.flags&=-33);var E=Ef(e);ku(e,E,y);break;case 3:case 4:var S=s.stateNode.containerInfo,j=Ef(e);Tf(e,j,S);break;default:throw Error(a(161))}}catch(G){Yt(e,e.return,G)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function cr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(e,n.alternate,n),n=n.sibling}function _s(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ur(4,n,n.return),_s(n);break;case 1:ai(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Cg(n,n.return,s),_s(n);break;case 27:$o(n.stateNode);case 26:case 5:ai(n,n.return),_s(n);break;case 22:n.memoizedState===null&&_s(n);break;case 30:_s(n);break;default:_s(n)}e=e.sibling}}function hr(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:hr(c,f,s),zo(4,f);break;case 1:if(hr(c,f,s),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){Yt(o,o.return,j)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)dp(S[c],E)}catch(j){Yt(o,o.return,j)}}s&&y&64&&Ig(f),Bo(f,f.return);break;case 27:xg(f);case 26:case 5:hr(c,f,s),s&&o===null&&y&4&&Ng(f),Bo(f,f.return);break;case 12:hr(c,f,s);break;case 13:hr(c,f,s),s&&y&4&&Pg(c,f);break;case 22:f.memoizedState===null&&hr(c,f,s),Bo(f,f.return);break;case 30:break;default:hr(c,f,s)}n=n.sibling}}function Sf(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ro(s))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e))}function oi(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jg(e,n,s,o),n=n.sibling}function jg(e,n,s,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:oi(e,n,s,o),c&2048&&zo(9,n);break;case 1:oi(e,n,s,o);break;case 3:oi(e,n,s,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e)));break;case 12:if(c&2048){oi(e,n,s,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,E=f.onPostCommit;typeof E=="function"&&E(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Yt(n,n.return,S)}}else oi(e,n,s,o);break;case 13:oi(e,n,s,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?oi(e,n,s,o):Ho(e,n):f._visibility&2?oi(e,n,s,o):(f._visibility|=2,ya(e,n,s,o,(n.subtreeFlags&10256)!==0)),c&2048&&Sf(y,n);break;case 24:oi(e,n,s,o),c&2048&&wf(n.alternate,n);break;default:oi(e,n,s,o)}}function ya(e,n,s,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,E=s,S=o,j=y.flags;switch(y.tag){case 0:case 11:case 15:ya(f,y,E,S,c),zo(8,y);break;case 23:break;case 22:var G=y.stateNode;y.memoizedState!==null?G._visibility&2?ya(f,y,E,S,c):Ho(f,y):(G._visibility|=2,ya(f,y,E,S,c)),c&&j&2048&&Sf(y.alternate,y);break;case 24:ya(f,y,E,S,c),c&&j&2048&&wf(y.alternate,y);break;default:ya(f,y,E,S,c)}n=n.sibling}}function Ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,c=o.flags;switch(o.tag){case 22:Ho(s,o),c&2048&&Sf(o.alternate,o);break;case 24:Ho(s,o),c&2048&&wf(o.alternate,o);break;default:Ho(s,o)}n=n.sibling}}var qo=8192;function _a(e){if(e.subtreeFlags&qo)for(e=e.child;e!==null;)zg(e),e=e.sibling}function zg(e){switch(e.tag){case 26:_a(e),e.flags&qo&&e.memoizedState!==null&&b1(kn,e.memoizedState,e.memoizedProps);break;case 5:_a(e);break;case 3:case 4:var n=kn;kn=Qu(e.stateNode.containerInfo),_a(e),kn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=qo,qo=16777216,_a(e),qo=n):_a(e));break;default:_a(e)}}function Bg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];we=o,qg(o,e)}Bg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&ur(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pu(e)):Go(e);break;default:Go(e)}}function Pu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];we=o,qg(o,e)}Bg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ur(8,n,n.return),Pu(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Pu(n));break;default:Pu(n)}e=e.sibling}}function qg(e,n){for(;we!==null;){var s=we;switch(s.tag){case 0:case 11:case 15:ur(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ro(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,we=o;else t:for(s=e;we!==null;){o=we;var c=o.sibling,f=o.return;if(Vg(o),o===s){we=null;break t}if(c!==null){c.return=f,we=c;break t}we=f}}}var jT={getCacheForType:function(e){var n=Be(ve),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},zT=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Qt=null,wt=null,Dt=0,jt=0,fn=null,fr=!1,va=!1,Rf=!1,ji=0,se=0,dr=0,vs=0,If=0,Cn=0,Ea=0,Fo=null,tn=null,Cf=!1,Nf=0,Uu=1/0,Lu=null,mr=null,Ve=0,pr=null,Ta=null,Aa=0,Df=0,xf=null,Gg=null,Yo=0,Of=null;function dn(){if((Lt&2)!==0&&Dt!==0)return Dt&-Dt;if(q.T!==null){var e=ua;return e!==0?e:jf()}return $i()}function Fg(){Cn===0&&(Cn=(Dt&536870912)===0||Vt?to():536870912);var e=In.current;return e!==null&&(e.flags|=32),Cn}function mn(e,n,s){(e===Qt&&(jt===2||jt===9)||e.cancelPendingCommit!==null)&&(ba(e,0),gr(e,Dt,Cn,!1)),yi(e,s),((Lt&2)===0||e!==Qt)&&(e===Qt&&((Lt&2)===0&&(vs|=s),se===4&&gr(e,Dt,Cn,!1)),li(e))}function Yg(e,n,s){if((Lt&6)!==0)throw Error(a(327));var o=!s&&(n&124)===0&&(n&e.expiredLanes)===0||Fr(e,n),c=o?qT(e,n):kf(e,n,!0),f=o;do{if(c===0){va&&!o&&gr(e,n,0,!1);break}else{if(s=e.current.alternate,f&&!BT(s)){c=kf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var E=e;c=Fo;var S=E.current.memoizedState.isDehydrated;if(S&&(ba(E,y).flags|=256),y=kf(E,y,!1),y!==2){if(Rf&&!S){E.errorRecoveryDisabledLanes|=f,vs|=f,c=4;break t}f=tn,tn=c,f!==null&&(tn===null?tn=f:tn.push.apply(tn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){ba(e,0),gr(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:gr(o,n,Cn,!fr);break t;case 2:tn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=Nf+300-yn(),10<c)){if(gr(o,n,Cn,!fr),zs(o,0,!0)!==0)break t;o.timeoutHandle=Ty(Kg.bind(null,o,s,tn,Lu,Cf,n,Cn,vs,Ea,fr,f,2,-0,0),c);break t}Kg(o,s,tn,Lu,Cf,n,Cn,vs,Ea,fr,f,0,-0,0)}}break}while(!0);li(e)}function Kg(e,n,s,o,c,f,y,E,S,j,G,Y,z,B){if(e.timeoutHandle=-1,Y=n.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Wo={stylesheets:null,count:0,unsuspend:A1},zg(n),Y=S1(),Y!==null)){e.cancelPendingCommit=Y(ty.bind(null,e,n,f,s,o,c,y,E,S,G,1,z,B)),gr(e,f,y,!j);return}ty(e,n,f,s,o,c,y,E,S)}function BT(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],f=c.getSnapshot;c=c.value;try{if(!ln(f(),c))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gr(e,n,s,o){n&=~If,n&=~vs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-ze(c),y=1<<f;o[f]=-1,c&=~y}s!==0&&Kn(e,s,n)}function ju(){return(Lt&6)===0?(Ko(0),!1):!0}function Mf(){if(wt!==null){if(jt===0)var e=wt.return;else e=wt,xi=ds=null,Xh(e),pa=null,Uo=0,e=wt;for(;e!==null;)Rg(e.alternate,e),e=e.return;wt=null}}function ba(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,s1(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Mf(),Qt=e,wt=s=Ci(e.current,null),Dt=n,jt=0,fn=null,fr=!1,va=Fr(e,n),Rf=!1,Ea=Cn=If=vs=dr=se=0,tn=Fo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-ze(o),f=1<<c;n|=e[c],o&=~f}return ji=n,ou(),s}function Qg(e,n){Tt=null,q.H=Ru,n===Co||n===gu?(n=hp(),jt=3):n===lp?(n=hp(),jt=4):jt=n===fg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fn=n,wt===null&&(se=1,xu(e,bn(n,e.current)))}function Xg(){var e=q.H;return q.H=Ru,e===null?Ru:e}function $g(){var e=q.A;return q.A=jT,e}function Vf(){se=4,fr||(Dt&4194048)!==Dt&&In.current!==null||(va=!0),(dr&134217727)===0&&(vs&134217727)===0||Qt===null||gr(Qt,Dt,Cn,!1)}function kf(e,n,s){var o=Lt;Lt|=2;var c=Xg(),f=$g();(Qt!==e||Dt!==n)&&(Lu=null,ba(e,n)),n=!1;var y=se;t:do try{if(jt!==0&&wt!==null){var E=wt,S=fn;switch(jt){case 8:Mf(),y=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(n=!0);var j=jt;if(jt=0,fn=null,Sa(e,E,S,j),s&&va){y=0;break t}break;default:j=jt,jt=0,fn=null,Sa(e,E,S,j)}}HT(),y=se;break}catch(G){Qg(e,G)}while(!0);return n&&e.shellSuspendCounter++,xi=ds=null,Lt=o,q.H=c,q.A=f,wt===null&&(Qt=null,Dt=0,ou()),y}function HT(){for(;wt!==null;)Zg(wt)}function qT(e,n){var s=Lt;Lt|=2;var o=Xg(),c=$g();Qt!==e||Dt!==n?(Lu=null,Uu=yn()+500,ba(e,n)):va=Fr(e,n);t:do try{if(jt!==0&&wt!==null){n=wt;var f=fn;e:switch(jt){case 1:jt=0,fn=null,Sa(e,n,f,1);break;case 2:case 9:if(up(f)){jt=0,fn=null,Jg(n);break}n=function(){jt!==2&&jt!==9||Qt!==e||(jt=7),li(e)},f.then(n,n);break t;case 3:jt=7;break t;case 4:jt=5;break t;case 7:up(f)?(jt=0,fn=null,Jg(n)):(jt=0,fn=null,Sa(e,n,f,7));break;case 5:var y=null;switch(wt.tag){case 26:y=wt.memoizedState;case 5:case 27:var E=wt;if(!y||My(y)){jt=0,fn=null;var S=E.sibling;if(S!==null)wt=S;else{var j=E.return;j!==null?(wt=j,zu(j)):wt=null}break e}}jt=0,fn=null,Sa(e,n,f,5);break;case 6:jt=0,fn=null,Sa(e,n,f,6);break;case 8:Mf(),se=6;break t;default:throw Error(a(462))}}GT();break}catch(G){Qg(e,G)}while(!0);return xi=ds=null,q.H=o,q.A=c,Lt=s,wt!==null?0:(Qt=null,Dt=0,ou(),se)}function GT(){for(;wt!==null&&!$a();)Zg(wt)}function Zg(e){var n=Sg(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?zu(e):wt=n}function Jg(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=_g(s,n,n.pendingProps,n.type,void 0,Dt);break;case 11:n=_g(s,n,n.pendingProps,n.type.render,n.ref,Dt);break;case 5:Xh(n);default:Rg(s,n),n=wt=Wm(n,ji),n=Sg(s,n,ji)}e.memoizedProps=e.pendingProps,n===null?zu(e):wt=n}function Sa(e,n,s,o){xi=ds=null,Xh(n),pa=null,Uo=0;var c=n.return;try{if(MT(e,c,n,s,Dt)){se=1,xu(e,bn(s,e.current)),wt=null;return}}catch(f){if(c!==null)throw wt=c,f;se=1,xu(e,bn(s,e.current)),wt=null;return}n.flags&32768?(Vt||o===1?e=!0:va||(Dt&536870912)!==0?e=!1:(fr=e=!0,(o===2||o===9||o===3||o===6)&&(o=In.current,o!==null&&o.tag===13&&(o.flags|=16384))),Wg(n,e)):zu(n)}function zu(e){var n=e;do{if((n.flags&32768)!==0){Wg(n,fr);return}e=n.return;var s=kT(n.alternate,n,ji);if(s!==null){wt=s;return}if(n=n.sibling,n!==null){wt=n;return}wt=n=e}while(n!==null);se===0&&(se=5)}function Wg(e,n){do{var s=PT(e.alternate,e);if(s!==null){s.flags&=32767,wt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){wt=e;return}wt=e=s}while(e!==null);se=6,wt=null}function ty(e,n,s,o,c,f,y,E,S){e.cancelPendingCommit=null;do Bu();while(Ve!==0);if((Lt&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Sh,no(e,s,f,y,E,S),e===Qt&&(wt=Qt=null,Dt=0),Ta=n,pr=e,Aa=s,Df=f,xf=c,Gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,QT(Br,function(){return sy(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=q.T,q.T=null,c=tt.p,tt.p=2,y=Lt,Lt|=4;try{UT(e,n,s)}finally{Lt=y,tt.p=c,q.T=o}}Ve=1,ey(),ny(),iy()}}function ey(){if(Ve===1){Ve=0;var e=pr,n=Ta,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=q.T,q.T=null;var o=tt.p;tt.p=2;var c=Lt;Lt|=4;try{Ug(n,e);var f=Kf,y=qm(e.containerInfo),E=f.focusedElem,S=f.selectionRange;if(y!==E&&E&&E.ownerDocument&&Hm(E.ownerDocument.documentElement,E)){if(S!==null&&vh(E)){var j=S.start,G=S.end;if(G===void 0&&(G=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(G,E.value.length);else{var Y=E.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var B=z.getSelection(),dt=E.textContent.length,ct=Math.min(S.start,dt),qt=S.end===void 0?ct:Math.min(S.end,dt);!B.extend&&ct>qt&&(y=qt,qt=ct,ct=y);var V=Bm(E,ct),C=Bm(E,qt);if(V&&C&&(B.rangeCount!==1||B.anchorNode!==V.node||B.anchorOffset!==V.offset||B.focusNode!==C.node||B.focusOffset!==C.offset)){var L=Y.createRange();L.setStart(V.node,V.offset),B.removeAllRanges(),ct>qt?(B.addRange(L),B.extend(C.node,C.offset)):(L.setEnd(C.node,C.offset),B.addRange(L))}}}}for(Y=[],B=E;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Y.length;E++){var F=Y[E];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}Wu=!!Yf,Kf=Yf=null}finally{Lt=c,tt.p=o,q.T=s}}e.current=n,Ve=2}}function ny(){if(Ve===2){Ve=0;var e=pr,n=Ta,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=q.T,q.T=null;var o=tt.p;tt.p=2;var c=Lt;Lt|=4;try{Mg(e,n.alternate,n)}finally{Lt=c,tt.p=o,q.T=s}}Ve=3}}function iy(){if(Ve===4||Ve===3){Ve=0,Pl();var e=pr,n=Ta,s=Aa,o=Gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ve=5:(Ve=0,Ta=pr=null,ry(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(mr=null),Bs(s),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(ie,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=q.T,c=tt.p,tt.p=2,q.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var E=o[y];f(E.value,{componentStack:E.stack})}}finally{q.T=n,tt.p=c}}(Aa&3)!==0&&Bu(),li(e),c=e.pendingLanes,(s&4194090)!==0&&(c&42)!==0?e===Of?Yo++:(Yo=0,Of=e):Yo=0,Ko(0)}}function ry(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ro(n)))}function Bu(e){return ey(),ny(),iy(),sy()}function sy(){if(Ve!==5)return!1;var e=pr,n=Df;Df=0;var s=Bs(Aa),o=q.T,c=tt.p;try{tt.p=32>s?32:s,q.T=null,s=xf,xf=null;var f=pr,y=Aa;if(Ve=0,Ta=pr=null,Aa=0,(Lt&6)!==0)throw Error(a(331));var E=Lt;if(Lt|=4,Hg(f.current),jg(f,f.current,y,s),Lt=E,Ko(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(ie,f)}catch{}return!0}finally{tt.p=c,q.T=o,ry(e,n)}}function ay(e,n,s){n=bn(s,n),n=cf(e.stateNode,n,2),e=sr(e,n,2),e!==null&&(yi(e,2),li(e))}function Yt(e,n,s){if(e.tag===3)ay(e,e,s);else for(;n!==null;){if(n.tag===3){ay(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(mr===null||!mr.has(o))){e=bn(s,e),s=cg(2),o=sr(n,s,2),o!==null&&(hg(s,o,n,e),yi(o,2),li(o));break}}n=n.return}}function Pf(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new zT;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(s)||(Rf=!0,c.add(s),e=FT.bind(null,e,n,s),n.then(e,e))}function FT(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Qt===e&&(Dt&s)===s&&(se===4||se===3&&(Dt&62914560)===Dt&&300>yn()-Nf?(Lt&2)===0&&ba(e,0):If|=s,Ea===Dt&&(Ea=0)),li(e)}function oy(e,n){n===0&&(n=eo()),e=sa(e,n),e!==null&&(yi(e,n),li(e))}function YT(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),oy(e,s)}function KT(e,n){var s=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),oy(e,s)}function QT(e,n){return jr(e,n)}var Hu=null,wa=null,Uf=!1,qu=!1,Lf=!1,Es=0;function li(e){e!==wa&&e.next===null&&(wa===null?Hu=wa=e:wa=wa.next=e),qu=!0,Uf||(Uf=!0,$T())}function Ko(e,n){if(!Lf&&qu){Lf=!0;do for(var s=!1,o=Hu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-ze(42|e)+1)-1,f&=c&~(y&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,hy(o,f))}else f=Dt,f=zs(o,o===Qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fr(o,f)||(s=!0,hy(o,f));o=o.next}while(s);Lf=!1}}function XT(){ly()}function ly(){qu=Uf=!1;var e=0;Es!==0&&(r1()&&(e=Es),Es=0);for(var n=yn(),s=null,o=Hu;o!==null;){var c=o.next,f=uy(o,n);f===0?(o.next=null,s===null?Hu=c:s.next=c,c===null&&(wa=s)):(s=o,(e!==0||(f&3)!==0)&&(qu=!0)),o=c}Ko(e)}function uy(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-ze(f),E=1<<y,S=c[y];S===-1?((E&s)===0||(E&o)!==0)&&(c[y]=Wa(E,n)):S<=n&&(e.expiredLanes|=E),f&=~E}if(n=Qt,s=Dt,s=zs(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===n&&(jt===2||jt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&zr(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Fr(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&zr(o),Bs(s)){case 2:case 8:s=Ls;break;case 32:s=Br;break;case 268435456:s=js;break;default:s=Br}return o=cy.bind(null,e),s=jr(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&zr(o),e.callbackPriority=2,e.callbackNode=null,2}function cy(e,n){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Bu()&&e.callbackNode!==s)return null;var o=Dt;return o=zs(e,e===Qt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Yg(e,o,n),uy(e,yn()),e.callbackNode!=null&&e.callbackNode===s?cy.bind(null,e):null)}function hy(e,n){if(Bu())return null;Yg(e,n,!0)}function $T(){a1(function(){(Lt&6)!==0?jr(Za,XT):ly()})}function jf(){return Es===0&&(Es=to()),Es}function fy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ks(""+e)}function dy(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function ZT(e,n,s,o,c){if(n==="submit"&&s&&s.stateNode===c){var f=fy((c[ce]||null).action),y=o.submitter;y&&(n=(n=y[ce]||null)?fy(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var E=new Qs("action","action",null,o,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Es!==0){var S=y?dy(c,y):new FormData(c);sf(s,{pending:!0,data:S,method:c.method,action:f},null,S)}}else typeof f=="function"&&(E.preventDefault(),S=y?dy(c,y):new FormData(c),sf(s,{pending:!0,data:S,method:c.method,action:f},f,S))},currentTarget:c}]})}}for(var zf=0;zf<bh.length;zf++){var Bf=bh[zf],JT=Bf.toLowerCase(),WT=Bf[0].toUpperCase()+Bf.slice(1);Vn(JT,"on"+WT)}Vn(Ym,"onAnimationEnd"),Vn(Km,"onAnimationIteration"),Vn(Qm,"onAnimationStart"),Vn("dblclick","onDoubleClick"),Vn("focusin","onFocus"),Vn("focusout","onBlur"),Vn(gT,"onTransitionRun"),Vn(yT,"onTransitionStart"),Vn(_T,"onTransitionCancel"),Vn(Xm,"onTransitionEnd"),vi("onMouseEnter",["mouseout","mouseover"]),vi("onMouseLeave",["mouseout","mouseover"]),vi("onPointerEnter",["pointerout","pointerover"]),vi("onPointerLeave",["pointerout","pointerover"]),On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),On("onBeforeInput",["compositionend","keypress","textInput","paste"]),On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function my(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var E=o[y],S=E.instance,j=E.currentTarget;if(E=E.listener,S!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=j;try{f(c)}catch(G){Du(G)}c.currentTarget=null,f=S}else for(y=0;y<o.length;y++){if(E=o[y],S=E.instance,j=E.currentTarget,E=E.listener,S!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=j;try{f(c)}catch(G){Du(G)}c.currentTarget=null,f=S}}}}function Rt(e,n){var s=n[ro];s===void 0&&(s=n[ro]=new Set);var o=e+"__bubble";s.has(o)||(py(n,e,2,!1),s.add(o))}function Hf(e,n,s){var o=0;n&&(o|=4),py(s,e,o,n)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[Gu]){e[Gu]=!0,so.forEach(function(s){s!=="selectionchange"&&(t1.has(s)||Hf(s,!1,e),Hf(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gu]||(n[Gu]=!0,Hf("selectionchange",!1,n))}}function py(e,n,s,o){switch(jy(n)){case 2:var c=I1;break;case 8:c=C1;break;default:c=id}s=c.bind(null,n,s,e),c=void 0,!Tn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,s,{capture:!0,passive:c}):e.addEventListener(n,s,!0):c!==void 0?e.addEventListener(n,s,{passive:c}):e.addEventListener(n,s,!1)}function Gf(e,n,s,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var E=o.stateNode.containerInfo;if(E===c)break;if(y===4)for(y=o.return;y!==null;){var S=y.tag;if((S===3||S===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;E!==null;){if(y=_i(E),y===null)return;if(S=y.tag,S===5||S===6||S===26||S===27){o=f=y;continue t}E=E.parentNode}}o=o.return}Yl(function(){var j=f,G=En(s),Y=[];t:{var z=$m.get(e);if(z!==void 0){var B=Qs,dt=e;switch(e){case"keypress":if(Wn(s)===0)break t;case"keydown":case"keyup":B=ta;break;case"focusin":dt="focus",B=Zs;break;case"focusout":dt="blur",B=Zs;break;case"beforeblur":case"afterblur":B=Zs;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=An;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=tu;break;case Ym:case Km:case Qm:B=Js;break;case Xm:B=nu;break;case"scroll":case"scrollend":B=Kl;break;case"wheel":B=ea;break;case"copy":case"cut":case"paste":B=Ws;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=_o;break;case"toggle":case"beforetoggle":B=ru}var ct=(n&4)!==0,qt=!ct&&(e==="scroll"||e==="scrollend"),V=ct?z!==null?z+"Capture":null:z;ct=[];for(var C=j,L;C!==null;){var F=C;if(L=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||L===null||V===null||(F=Wr(C,V),F!=null&&ct.push(Xo(C,F,L))),qt)break;C=C.return}0<ct.length&&(z=new B(z,dt,null,s,G),Y.push({event:z,listeners:ct}))}}if((n&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&s!==Ai&&(dt=s.relatedTarget||s.fromElement)&&(_i(dt)||dt[_n]))break t;if((B||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,B?(dt=s.relatedTarget||s.toElement,B=j,dt=dt?_i(dt):null,dt!==null&&(qt=h(dt),ct=dt.tag,dt!==qt||ct!==5&&ct!==27&&ct!==6)&&(dt=null)):(B=null,dt=j),B!==dt)){if(ct=An,F="onMouseLeave",V="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ct=_o,F="onPointerLeave",V="onPointerEnter",C="pointer"),qt=B==null?z:Xn(B),L=dt==null?z:Xn(dt),z=new ct(F,C+"leave",B,s,G),z.target=qt,z.relatedTarget=L,F=null,_i(G)===j&&(ct=new ct(V,C+"enter",dt,s,G),ct.target=L,ct.relatedTarget=qt,F=ct),qt=F,B&&dt)e:{for(ct=B,V=dt,C=0,L=ct;L;L=Ra(L))C++;for(L=0,F=V;F;F=Ra(F))L++;for(;0<C-L;)ct=Ra(ct),C--;for(;0<L-C;)V=Ra(V),L--;for(;C--;){if(ct===V||V!==null&&ct===V.alternate)break e;ct=Ra(ct),V=Ra(V)}ct=null}else ct=null;B!==null&&gy(Y,z,B,ct,!1),dt!==null&&qt!==null&&gy(Y,qt,dt,ct,!0)}}t:{if(z=j?Xn(j):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var it=km;else if(_e(z))if(Pm)it=dT;else{it=hT;var St=cT}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&co(j.elementType)&&(it=km):it=fT;if(it&&(it=it(e,j))){Ii(Y,it,s,G);break t}St&&St(e,z,j),e==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&tr(z,"number",z.value)}switch(St=j?Xn(j):window,e){case"focusin":(_e(St)||St.contentEditable==="true")&&(na=St,Eh=j,To=null);break;case"focusout":To=Eh=na=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,Gm(Y,s,G);break;case"selectionchange":if(pT)break;case"keydown":case"keyup":Gm(Y,s,G)}var at;if(ni)t:{switch(e){case"compositionstart":var ht="onCompositionStart";break t;case"compositionend":ht="onCompositionEnd";break t;case"compositionupdate":ht="onCompositionUpdate";break t}ht=void 0}else Ct?H(e,s)&&(ht="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ht="onCompositionStart");ht&&(g&&s.locale!=="ko"&&(Ct||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ct&&(at=fo()):(Jn=G,er="value"in Jn?Jn.value:Jn.textContent,Ct=!0)),St=Fu(j,ht),0<St.length&&(ht=new go(ht,e,null,s,G),Y.push({event:ht,listeners:St}),at?ht.data=at:(at=W(s),at!==null&&(ht.data=at)))),(at=m?ye(e,s):Nt(e,s))&&(ht=Fu(j,"onBeforeInput"),0<ht.length&&(St=new go("onBeforeInput","beforeinput",null,s,G),Y.push({event:St,listeners:ht}),St.data=at)),ZT(Y,e,j,s,G)}my(Y,n)})}function Xo(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Fu(e,n){for(var s=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Wr(e,s),c!=null&&o.unshift(Xo(e,c,f)),c=Wr(e,n),c!=null&&o.push(Xo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function Ra(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gy(e,n,s,o,c){for(var f=n._reactName,y=[];s!==null&&s!==o;){var E=s,S=E.alternate,j=E.stateNode;if(E=E.tag,S!==null&&S===o)break;E!==5&&E!==26&&E!==27||j===null||(S=j,c?(j=Wr(s,f),j!=null&&y.unshift(Xo(s,j,S))):c||(j=Wr(s,f),j!=null&&y.push(Xo(s,j,S)))),s=s.return}y.length!==0&&e.push({event:n,listeners:y})}var e1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function yy(e){return(typeof e=="string"?e:""+e).replace(e1,`
`).replace(n1,"")}function _y(e,n){return n=yy(n),yy(e)===n}function Yu(){}function Ht(e,n,s,o,c,f){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&vn(e,""+o);break;case"className":$n(e,"class",o);break;case"tabIndex":$n(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,s,o);break;case"style":uo(e,o,f);break;case"data":if(n!=="object"){$n(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Ks(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Ks(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Yu);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Ks(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Rt("beforetoggle",e),Rt("toggle",e),Wi(e,"popover",o);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wi(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=dh.get(s)||s,Wi(e,s,o))}}function Ff(e,n,s,o,c,f){switch(s){case"style":uo(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?vn(e,o):(typeof o=="number"||typeof o=="bigint")&&vn(e,""+o);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Yu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hs.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),n=s.slice(2,c?s.length-7:void 0),f=e[ce]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,c);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Wi(e,s,o)}}}function ke(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",e),Rt("load",e);var o=!1,c=!1,f;for(f in s)if(s.hasOwnProperty(f)){var y=s[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ht(e,n,f,y,s,null)}}c&&Ht(e,n,"srcSet",s.srcSet,s,null),o&&Ht(e,n,"src",s.src,s,null);return;case"input":Rt("invalid",e);var E=f=y=c=null,S=null,j=null;for(o in s)if(s.hasOwnProperty(o)){var G=s[o];if(G!=null)switch(o){case"name":c=G;break;case"type":y=G;break;case"checked":S=G;break;case"defaultChecked":j=G;break;case"value":f=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,n));break;default:Ht(e,n,o,G,s,null)}}$r(e,f,E,S,j,y,c,!1),Ys(e);return;case"select":Rt("invalid",e),o=y=f=null;for(c in s)if(s.hasOwnProperty(c)&&(E=s[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":y=E;break;case"multiple":o=E;default:Ht(e,n,c,E,s,null)}n=f,s=y,e.multiple=!!o,n!=null?Ti(e,!!o,n,!1):s!=null&&Ti(e,!!o,s,!0);return;case"textarea":Rt("invalid",e),f=c=o=null;for(y in s)if(s.hasOwnProperty(y)&&(E=s[y],E!=null))switch(y){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Ht(e,n,y,E,s,null)}Zr(e,o,c,f),Ys(e);return;case"option":for(S in s)if(s.hasOwnProperty(S)&&(o=s[S],o!=null))switch(S){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(e,n,S,o,s,null)}return;case"dialog":Rt("beforetoggle",e),Rt("toggle",e),Rt("cancel",e),Rt("close",e);break;case"iframe":case"object":Rt("load",e);break;case"video":case"audio":for(o=0;o<Qo.length;o++)Rt(Qo[o],e);break;case"image":Rt("error",e),Rt("load",e);break;case"details":Rt("toggle",e);break;case"embed":case"source":case"link":Rt("error",e),Rt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in s)if(s.hasOwnProperty(j)&&(o=s[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ht(e,n,j,o,s,null)}return;default:if(co(n)){for(G in s)s.hasOwnProperty(G)&&(o=s[G],o!==void 0&&Ff(e,n,G,o,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(o=s[E],o!=null&&Ht(e,n,E,o,s,null))}function i1(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,E=null,S=null,j=null,G=null;for(B in s){var Y=s[B];if(s.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=Y;default:o.hasOwnProperty(B)||Ht(e,n,B,null,o,Y)}}for(var z in o){var B=o[z];if(Y=s[z],o.hasOwnProperty(z)&&(B!=null||Y!=null))switch(z){case"type":f=B;break;case"name":c=B;break;case"checked":j=B;break;case"defaultChecked":G=B;break;case"value":y=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:B!==Y&&Ht(e,n,z,B,o,Y)}}on(e,y,E,S,j,G,f,c);return;case"select":B=y=E=z=null;for(f in s)if(S=s[f],s.hasOwnProperty(f)&&S!=null)switch(f){case"value":break;case"multiple":B=S;default:o.hasOwnProperty(f)||Ht(e,n,f,null,o,S)}for(c in o)if(f=o[c],S=s[c],o.hasOwnProperty(c)&&(f!=null||S!=null))switch(c){case"value":z=f;break;case"defaultValue":E=f;break;case"multiple":y=f;default:f!==S&&Ht(e,n,c,f,o,S)}n=E,s=y,o=B,z!=null?Ti(e,!!s,z,!1):!!o!=!!s&&(n!=null?Ti(e,!!s,n,!0):Ti(e,!!s,s?[]:"",!1));return;case"textarea":B=z=null;for(E in s)if(c=s[E],s.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ht(e,n,E,null,o,c)}for(y in o)if(c=o[y],f=s[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":z=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Ht(e,n,y,c,o,f)}zt(e,z,B);return;case"option":for(var dt in s)if(z=s[dt],s.hasOwnProperty(dt)&&z!=null&&!o.hasOwnProperty(dt))switch(dt){case"selected":e.selected=!1;break;default:Ht(e,n,dt,null,o,z)}for(S in o)if(z=o[S],B=s[S],o.hasOwnProperty(S)&&z!==B&&(z!=null||B!=null))switch(S){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ht(e,n,S,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)z=s[ct],s.hasOwnProperty(ct)&&z!=null&&!o.hasOwnProperty(ct)&&Ht(e,n,ct,null,o,z);for(j in o)if(z=o[j],B=s[j],o.hasOwnProperty(j)&&z!==B&&(z!=null||B!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(a(137,n));break;default:Ht(e,n,j,z,o,B)}return;default:if(co(n)){for(var qt in s)z=s[qt],s.hasOwnProperty(qt)&&z!==void 0&&!o.hasOwnProperty(qt)&&Ff(e,n,qt,void 0,o,z);for(G in o)z=o[G],B=s[G],!o.hasOwnProperty(G)||z===B||z===void 0&&B===void 0||Ff(e,n,G,z,o,B);return}}for(var V in s)z=s[V],s.hasOwnProperty(V)&&z!=null&&!o.hasOwnProperty(V)&&Ht(e,n,V,null,o,z);for(Y in o)z=o[Y],B=s[Y],!o.hasOwnProperty(Y)||z===B||z==null&&B==null||Ht(e,n,Y,z,o,B)}var Yf=null,Kf=null;function Ku(e){return e.nodeType===9?e:e.ownerDocument}function vy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ey(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function r1(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var Ty=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,Ay=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ay<"u"?function(e){return Ay.resolve(null).then(e).catch(o1)}:Ty;function o1(e){setTimeout(function(){throw e})}function yr(e){return e==="head"}function by(e,n){var s=n,o=0,c=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<o&&8>o){s=o;var y=e.ownerDocument;if(s&1&&$o(y.documentElement),s&2&&$o(y.body),s&4)for(s=y.head,$o(s),y=s.firstChild;y;){var E=y.nextSibling,S=y.nodeName;y[Yr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&y.rel.toLowerCase()==="stylesheet"||s.removeChild(y),y=E}}if(c===0){e.removeChild(f),rl(n);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:o=s.charCodeAt(0)-48;else o=0;s=f}while(s);rl(n)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":$f(s),Ji(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function l1(e,n,s,o){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Yr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Pn(e.nextSibling),e===null)break}return null}function u1(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Pn(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function c1(e,n){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Jf=null;function Sy(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function wy(e,n,s){switch(n=Ku(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function $o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ji(e)}var Nn=new Map,Ry=new Set;function Qu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zi=tt.d;tt.d={f:h1,r:f1,D:d1,C:m1,L:p1,m:g1,X:_1,S:y1,M:v1};function h1(){var e=zi.f(),n=ju();return e||n}function f1(e){var n=Qn(e);n!==null&&n.tag===5&&n.type==="form"?Yp(n):zi.r(e)}var Ia=typeof document>"u"?null:document;function Iy(e,n,s){var o=Ia;if(o&&typeof n=="string"&&n){var c=he(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),Ry.has(c)||(Ry.add(c),e={rel:e,crossOrigin:s,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),ke(n,"link",e),oe(n),o.head.appendChild(n)))}}function d1(e){zi.D(e),Iy("dns-prefetch",e,null)}function m1(e,n){zi.C(e,n),Iy("preconnect",e,n)}function p1(e,n,s){zi.L(e,n,s);var o=Ia;if(o&&e&&n){var c='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+he(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+he(s.imageSizes)+'"]')):c+='[href="'+he(e)+'"]';var f=c;switch(n){case"style":f=Ca(e);break;case"script":f=Na(e)}Nn.has(f)||(e=A({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Nn.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Zo(f))||n==="script"&&o.querySelector(Jo(f))||(n=o.createElement("link"),ke(n,"link",e),oe(n),o.head.appendChild(n)))}}function g1(e,n){zi.m(e,n);var s=Ia;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Na(e)}if(!Nn.has(f)&&(e=A({rel:"modulepreload",href:e},n),Nn.set(f,e),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Jo(f)))return}o=s.createElement("link"),ke(o,"link",e),oe(o),s.head.appendChild(o)}}}function y1(e,n,s){zi.S(e,n,s);var o=Ia;if(o&&e){var c=Qe(o).hoistableStyles,f=Ca(e);n=n||"default";var y=c.get(f);if(!y){var E={loading:0,preload:null};if(y=o.querySelector(Zo(f)))E.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Nn.get(f))&&Wf(e,s);var S=y=o.createElement("link");oe(S),ke(S,"link",e),S._p=new Promise(function(j,G){S.onload=j,S.onerror=G}),S.addEventListener("load",function(){E.loading|=1}),S.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Xu(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:E},c.set(f,y)}}}function _1(e,n){zi.X(e,n);var s=Ia;if(s&&e){var o=Qe(s).hoistableScripts,c=Na(e),f=o.get(c);f||(f=s.querySelector(Jo(c)),f||(e=A({src:e,async:!0},n),(n=Nn.get(c))&&td(e,n),f=s.createElement("script"),oe(f),ke(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function v1(e,n){zi.M(e,n);var s=Ia;if(s&&e){var o=Qe(s).hoistableScripts,c=Na(e),f=o.get(c);f||(f=s.querySelector(Jo(c)),f||(e=A({src:e,async:!0,type:"module"},n),(n=Nn.get(c))&&td(e,n),f=s.createElement("script"),oe(f),ke(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Cy(e,n,s,o){var c=(c=mt.current)?Qu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Ca(s.href),s=Qe(c).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ca(s.href);var f=Qe(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(Zo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Nn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Nn.set(e,s),f||E1(c,e,s,y.state))),n&&o===null)throw Error(a(528,""));return y}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Na(s),s=Qe(c).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ca(e){return'href="'+he(e)+'"'}function Zo(e){return'link[rel="stylesheet"]['+e+"]"}function Ny(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function E1(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ke(n,"link",s),oe(n),e.head.appendChild(n))}function Na(e){return'[src="'+he(e)+'"]'}function Jo(e){return"script[async]"+e}function Dy(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(s.href)+'"]');if(o)return n.instance=o,oe(o),o;var c=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),oe(o),ke(o,"style",c),Xu(o,s.precedence,e),n.instance=o;case"stylesheet":c=Ca(s.href);var f=e.querySelector(Zo(c));if(f)return n.state.loading|=4,n.instance=f,oe(f),f;o=Ny(s),(c=Nn.get(c))&&Wf(o,c),f=(e.ownerDocument||e).createElement("link"),oe(f);var y=f;return y._p=new Promise(function(E,S){y.onload=E,y.onerror=S}),ke(f,"link",o),n.state.loading|=4,Xu(f,s.precedence,e),n.instance=f;case"script":return f=Na(s.src),(c=e.querySelector(Jo(f)))?(n.instance=c,oe(c),c):(o=s,(c=Nn.get(f))&&(o=A({},s),td(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),oe(c),ke(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Xu(o,s.precedence,e));return n.instance}function Xu(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var E=o[y];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $u=null;function xy(e,n,s){if($u===null){var o=new Map,c=$u=new Map;c.set(s,o)}else c=$u,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var f=s[c];if(!(f[Yr]||f[ge]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var E=o.get(y);E?E.push(f):o.set(y,[f])}}return o}function Oy(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function T1(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function My(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wo=null;function A1(){}function b1(e,n,s){if(Wo===null)throw Error(a(475));var o=Wo;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ca(s.href),f=e.querySelector(Zo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Zu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,oe(f);return}f=e.ownerDocument||e,s=Ny(s),(c=Nn.get(c))&&Wf(s,c),f=f.createElement("link"),oe(f);var y=f;y._p=new Promise(function(E,S){y.onload=E,y.onerror=S}),ke(f,"link",s),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Zu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function S1(){if(Wo===null)throw Error(a(475));var e=Wo;return e.stylesheets&&e.count===0&&ed(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&ed(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Zu(){if(this.count--,this.count===0){if(this.stylesheets)ed(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ju=null;function ed(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ju=new Map,n.forEach(w1,e),Ju=null,Zu.call(e))}function w1(e,n){if(!(n.state.loading&4)){var s=Ju.get(e);if(s)var o=s.get(null);else{s=new Map,Ju.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),o=y)}o&&s.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=s.get(y)||o,f===o&&s.set(null,c),s.set(y,c),this.count++,o=Zu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var tl={$$typeof:pt,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function R1(e,n,s,o,c,f,y,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Vy(e,n,s,o,c,f,y,E,S,j,G,Y){return e=new R1(e,n,s,y,E,S,j,Y),n=1,f===!0&&(n|=24),f=un(3,null,null,n),e.current=f,f.stateNode=e,n=kh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:n},jh(f),e}function ky(e){return e?(e=aa,e):aa}function Py(e,n,s,o,c,f){c=ky(c),o.context===null?o.context=c:o.pendingContext=c,o=rr(n),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=sr(e,o,n),s!==null&&(mn(s,e,n),Do(s,e,n))}function Uy(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function nd(e,n){Uy(e,n),(e=e.alternate)&&Uy(e,n)}function Ly(e){if(e.tag===13){var n=sa(e,67108864);n!==null&&mn(n,e,67108864),nd(e,67108864)}}var Wu=!0;function I1(e,n,s,o){var c=q.T;q.T=null;var f=tt.p;try{tt.p=2,id(e,n,s,o)}finally{tt.p=f,q.T=c}}function C1(e,n,s,o){var c=q.T;q.T=null;var f=tt.p;try{tt.p=8,id(e,n,s,o)}finally{tt.p=f,q.T=c}}function id(e,n,s,o){if(Wu){var c=rd(o);if(c===null)Gf(e,n,o,tc,s),zy(e,o);else if(D1(c,e,n,s,o))o.stopPropagation();else if(zy(e,o),n&4&&-1<N1.indexOf(e)){for(;c!==null;){var f=Qn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=xn(f.pendingLanes);if(y!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;y;){var S=1<<31-ze(y);E.entanglements[1]|=S,y&=~S}li(f),(Lt&6)===0&&(Uu=yn()+500,Ko(0))}}break;case 13:E=sa(f,2),E!==null&&mn(E,f,2),ju(),nd(f,2)}if(f=rd(o),f===null&&Gf(e,n,o,tc,s),f===c)break;c=f}c!==null&&o.stopPropagation()}else Gf(e,n,o,null,s)}}function rd(e){return e=En(e),sd(e)}var tc=null;function sd(e){if(tc=null,e=_i(e),e!==null){var n=h(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=d(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function jy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oh()){case Za:return 2;case Ls:return 8;case Br:case lh:return 32;case js:return 268435456;default:return 32}default:return 32}}var ad=!1,_r=null,vr=null,Er=null,el=new Map,nl=new Map,Tr=[],N1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zy(e,n){switch(e){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(e,n,s,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Qn(n),n!==null&&Ly(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function D1(e,n,s,o,c){switch(n){case"focusin":return _r=il(_r,e,n,s,o,c),!0;case"dragenter":return vr=il(vr,e,n,s,o,c),!0;case"mouseover":return Er=il(Er,e,n,s,o,c),!0;case"pointerover":var f=c.pointerId;return el.set(f,il(el.get(f)||null,e,n,s,o,c)),!0;case"gotpointercapture":return f=c.pointerId,nl.set(f,il(nl.get(f)||null,e,n,s,o,c)),!0}return!1}function By(e){var n=_i(e.target);if(n!==null){var s=h(n);if(s!==null){if(n=s.tag,n===13){if(n=d(s),n!==null){e.blockedOn=n,jl(e.priority,function(){if(s.tag===13){var o=dn();o=Xi(o);var c=sa(s,o);c!==null&&mn(c,s,o),nd(s,o)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=rd(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Ai=o,s.target.dispatchEvent(o),Ai=null}else return n=Qn(s),n!==null&&Ly(n),e.blockedOn=s,!1;n.shift()}return!0}function Hy(e,n,s){ec(e)&&s.delete(n)}function x1(){ad=!1,_r!==null&&ec(_r)&&(_r=null),vr!==null&&ec(vr)&&(vr=null),Er!==null&&ec(Er)&&(Er=null),el.forEach(Hy),nl.forEach(Hy)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,ad||(ad=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,x1)))}var ic=null;function qy(e){ic!==e&&(ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(sd(o||s)===null)continue;break}var f=Qn(s);f!==null&&(e.splice(n,3),n-=3,sf(f,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function rl(e){function n(S){return nc(S,e)}_r!==null&&nc(_r,e),vr!==null&&nc(vr,e),Er!==null&&nc(Er,e),el.forEach(n),nl.forEach(n);for(var s=0;s<Tr.length;s++){var o=Tr[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Tr.length&&(s=Tr[0],s.blockedOn===null);)By(s),s.blockedOn===null&&Tr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],f=s[o+1],y=c[ce]||null;if(typeof f=="function")y||qy(s);else if(y){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[ce]||null)E=y.formAction;else if(sd(c)!==null)continue}else E=y.action;typeof E=="function"?s[o+1]=E:(s.splice(o,3),o-=3),qy(s)}}}function od(e){this._internalRoot=e}rc.prototype.render=od.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=dn();Py(s,o,e,n,null,null)},rc.prototype.unmount=od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Py(e.current,2,null,e,null,null),ju(),n[_n]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$i();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Tr.length&&n!==0&&n<Tr[s].priority;s++);Tr.splice(s,0,e),s===0&&By(e)}};var Gy=t.version;if(Gy!=="19.1.1")throw Error(a(527,Gy,"19.1.1"));tt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var O1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ie=sc.inject(O1),Ut=sc}catch{}}return al.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",c=ag,f=og,y=lg,E=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Vy(e,1,!1,null,null,s,o,c,f,y,E,null),e[_n]=n.current,qf(e),new od(n)},al.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,c="",f=ag,y=og,E=lg,S=null,j=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks),s.formState!==void 0&&(j=s.formState)),n=Vy(e,1,!0,n,s??null,o,c,f,y,E,S,j),n.context=ky(null),s=n.current,o=dn(),o=Xi(o),c=rr(o),c.callback=null,sr(s,c,o),s=o,n.current.lanes=s,yi(n,s),li(n),e[_n]=n.current,qf(e),new rc(n)},al.version="19.1.1",al}var t_;function q1(){if(t_)return cd.exports;t_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),cd.exports=H1(),cd.exports}var G1=q1();const F1=Dv(G1);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,a)=>a?a.toUpperCase():i.toLowerCase()),e_=r=>{const t=K1(r);return t.charAt(0).toUpperCase()+t.slice(1)},xv=(...r)=>r.filter((t,i,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===i).join(" ").trim(),Q1=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Ce.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:h,iconNode:d,...p},_)=>Ce.createElement("svg",{ref:_,...X1,width:t,height:t,stroke:r,strokeWidth:a?Number(i)*24/Number(t):i,className:xv("lucide",l),...!h&&!Q1(p)&&{"aria-hidden":"true"},...p},[...d.map(([v,A])=>Ce.createElement(v,A)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=(r,t)=>{const i=Ce.forwardRef(({className:a,...l},h)=>Ce.createElement($1,{ref:h,iconNode:t,className:xv(`lucide-${Y1(e_(r))}`,`lucide-${r}`,a),...l}));return i.displayName=e_(r),i};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],J1=gn("calendar-check",Z1);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Ov=gn("calendar-days",W1);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],eA=gn("facebook",tA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],iA=gn("heart-pulse",nA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],sA=gn("instagram",rA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],oA=gn("linkedin",aA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],uA=gn("mail",lA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],hA=gn("map-pin",cA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],dA=gn("phone",fA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pA=gn("shield-check",mA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],Mv=gn("stethoscope",gA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],_A=gn("twitter",yA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],EA=gn("user",vA),TA=()=>{};var n_={};/**
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
 */const Vv=function(r){const t=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},AA=function(r){const t=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=r[i++];t[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=r[i++],d=r[i++],p=r[i++],_=((l&7)<<18|(h&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(_>>10)),t[a++]=String.fromCharCode(56320+(_&1023))}else{const h=r[i++],d=r[i++];t[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|d&63)}}return t.join("")},kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const h=r[l],d=l+1<r.length,p=d?r[l+1]:0,_=l+2<r.length,v=_?r[l+2]:0,A=h>>2,D=(h&3)<<4|p>>4;let P=(p&15)<<2|v>>6,J=v&63;_||(J=64,d||(P=64)),a.push(i[A],i[D],i[P],i[J])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Vv(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):AA(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const h=i[r.charAt(l++)],p=l<r.length?i[r.charAt(l)]:0;++l;const v=l<r.length?i[r.charAt(l)]:64;++l;const D=l<r.length?i[r.charAt(l)]:64;if(++l,h==null||p==null||v==null||D==null)throw new bA;const P=h<<2|p>>4;if(a.push(P),v!==64){const J=p<<4&240|v>>2;if(a.push(J),D!==64){const $=v<<6&192|D;a.push($)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SA=function(r){const t=Vv(r);return kv.encodeByteArray(t,!0)},Ac=function(r){return SA(r).replace(/\./g,"")},Pv=function(r){try{return kv.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RA=()=>wA().__FIREBASE_DEFAULTS__,IA=()=>{if(typeof process>"u"||typeof n_>"u")return;const r=n_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},CA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Pv(r[1]);return t&&JSON.parse(t)},Gc=()=>{try{return TA()||RA()||IA()||CA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Uv=r=>Gc()?.emulatorHosts?.[r],NA=r=>{const t=Uv(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},Lv=()=>Gc()?.config,jv=r=>Gc()?.[`_${r}`];/**
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
 */class DA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zv(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function xA(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,h=r.sub||r.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ac(JSON.stringify(i)),Ac(JSON.stringify(d)),""].join(".")}const hl={};function OA(){const r={prod:[],emulator:[]};for(const t of Object.keys(hl))hl[t]?r.emulator.push(t):r.prod.push(t);return r}function MA(r){let t=document.getElementById(r),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),i=!0),{created:i,element:t}}let i_=!1;function Bv(r,t){if(typeof window>"u"||typeof document>"u"||!Ga(window.location.host)||hl[r]===t||hl[r]||i_)return;hl[r]=t;function i(P){return`__firebase__banner__${P}`}const a="__firebase__banner",h=OA().prod.length>0;function d(){const P=document.getElementById(a);P&&P.remove()}function p(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function _(P,J){P.setAttribute("width","24"),P.setAttribute("id",J),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function v(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{i_=!0,d()},P}function A(P,J){P.setAttribute("id",J),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function D(){const P=MA(a),J=i("text"),$=document.getElementById(J)||document.createElement("span"),st=i("learnmore"),et=document.getElementById(st)||document.createElement("a"),gt=i("preprendIcon"),yt=document.getElementById(gt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const pt=P.element;p(pt),A(et,st);const Gt=v();_(yt,gt),pt.append(yt,$,et,Gt),document.body.appendChild(pt)}h?($.innerText="Preview backend disconnected.",yt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(yt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",J)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",D):D()}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function kA(){const r=Gc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hv(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function UA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LA(){const r=Ke();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jA(){return!kA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qv(){try{return typeof indexedDB=="object"}catch{return!1}}function Gv(){return new Promise((r,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(i){t(i)}})}function zA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const BA="FirebaseError";class Fn extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=BA,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,h=this.errors[t],d=h?HA(h,a):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new Fn(l,p,a)}}function HA(r,t){return r.replace(qA,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const qA=/\{\$([^}]+)}/g;function GA(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Or(r,t){if(r===t)return!0;const i=Object.keys(r),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const h=r[l],d=t[l];if(r_(h)&&r_(d)){if(!Or(h,d))return!1}else if(h!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function r_(r){return r!==null&&typeof r=="object"}/**
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
 */function Rl(r){const t=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function ll(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,h]=a.split("=");t[decodeURIComponent(l)]=decodeURIComponent(h)}}),t}function ul(r){const t=r.indexOf("?");if(!t)return"";const i=r.indexOf("#",t);return r.substring(t,i>0?i:void 0)}function FA(r,t){const i=new YA(r,t);return i.subscribe.bind(i)}class YA{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");KA(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=md),l.error===void 0&&(l.error=md),l.complete===void 0&&(l.complete=md);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KA(r,t){if(typeof r!="object"||r===null)return!1;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}function md(){}/**
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
 */const QA=1e3,XA=2,$A=14400*1e3,ZA=.5;function s_(r,t=QA,i=XA){const a=t*Math.pow(i,r),l=Math.round(ZA*a*(Math.random()-.5)*2);return Math.min($A,a+l)}/**
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
 */function rn(r){return r&&r._delegate?r._delegate:r}class qn{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ts="[DEFAULT]";/**
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
 */class JA{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new DA;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tb(t))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(t=Ts){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ts){return this.instances.has(t)}getOptions(t=Ts){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&d.resolve(l)}return l}onInit(t,i){const a=this.normalizeInstanceIdentifier(i),l=this.onInitCallbacks.get(a)??new Set;l.add(t),this.onInitCallbacks.set(a,l);const h=this.instances.get(a);return h&&t(h,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:WA(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ts){return this.component?this.component.multipleInstances?t:Ts:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WA(r){return r===Ts?void 0:r}function tb(r){return r.instantiationMode==="EAGER"}/**
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
 */class eb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new JA(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var It;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(It||(It={}));const nb={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},ib=It.INFO,rb={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},sb=(r,t,...i)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=rb[t];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fc{constructor(t){this.name=t,this._logLevel=ib,this._logHandler=sb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in It))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...t),this._logHandler(this,It.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...t),this._logHandler(this,It.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,It.INFO,...t),this._logHandler(this,It.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,It.WARN,...t),this._logHandler(this,It.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...t),this._logHandler(this,It.ERROR,...t)}}const ab=(r,t)=>t.some(i=>r instanceof i);let a_,o_;function ob(){return a_||(a_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lb(){return o_||(o_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,Cd=new WeakMap,Yv=new WeakMap,pd=new WeakMap,$d=new WeakMap;function ub(r){const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",h),r.removeEventListener("error",d)},h=()=>{i(Cr(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",h),r.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&Fv.set(i,r)}).catch(()=>{}),$d.set(t,r),t}function cb(r){if(Cd.has(r))return;const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",h),r.removeEventListener("error",d),r.removeEventListener("abort",d)},h=()=>{i(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",h),r.addEventListener("error",d),r.addEventListener("abort",d)});Cd.set(r,t)}let Nd={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return Cd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Yv.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Cr(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function hb(r){Nd=r(Nd)}function fb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=r.call(gd(this),t,...i);return Yv.set(a,t.sort?t.sort():[t]),Cr(a)}:lb().includes(r)?function(...t){return r.apply(gd(this),t),Cr(Fv.get(this))}:function(...t){return Cr(r.apply(gd(this),t))}}function db(r){return typeof r=="function"?fb(r):(r instanceof IDBTransaction&&cb(r),ab(r,ob())?new Proxy(r,Nd):r)}function Cr(r){if(r instanceof IDBRequest)return ub(r);if(pd.has(r))return pd.get(r);const t=db(r);return t!==r&&(pd.set(r,t),$d.set(t,r)),t}const gd=r=>$d.get(r);function Kv(r,t,{blocked:i,upgrade:a,blocking:l,terminated:h}={}){const d=indexedDB.open(r,t),p=Cr(d);return a&&d.addEventListener("upgradeneeded",_=>{a(Cr(d.result),_.oldVersion,_.newVersion,Cr(d.transaction),_)}),i&&d.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),p.then(_=>{h&&_.addEventListener("close",()=>h()),l&&_.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const mb=["get","getKey","getAll","getAllKeys","count"],pb=["put","add","delete","clear"],yd=new Map;function l_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(yd.get(t))return yd.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=pb.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||mb.includes(i)))return;const h=async function(d,...p){const _=this.transaction(d,l?"readwrite":"readonly");let v=_.store;return a&&(v=v.index(p.shift())),(await Promise.all([v[i](...p),l&&_.done]))[0]};return yd.set(t,h),h}hb(r=>({...r,get:(t,i,a)=>l_(t,i)||r.get(t,i,a),has:(t,i)=>!!l_(t,i)||r.has(t,i)}));/**
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
 */class gb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(yb(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function yb(r){return r.getComponent()?.type==="VERSION"}const Dd="@firebase/app",u_="0.14.2";/**
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
 */const Yi=new Fc("@firebase/app"),_b="@firebase/app-compat",vb="@firebase/analytics-compat",Eb="@firebase/analytics",Tb="@firebase/app-check-compat",Ab="@firebase/app-check",bb="@firebase/auth",Sb="@firebase/auth-compat",wb="@firebase/database",Rb="@firebase/data-connect",Ib="@firebase/database-compat",Cb="@firebase/functions",Nb="@firebase/functions-compat",Db="@firebase/installations",xb="@firebase/installations-compat",Ob="@firebase/messaging",Mb="@firebase/messaging-compat",Vb="@firebase/performance",kb="@firebase/performance-compat",Pb="@firebase/remote-config",Ub="@firebase/remote-config-compat",Lb="@firebase/storage",jb="@firebase/storage-compat",zb="@firebase/firestore",Bb="@firebase/ai",Hb="@firebase/firestore-compat",qb="firebase",Gb="12.2.0";/**
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
 */const xd="[DEFAULT]",Fb={[Dd]:"fire-core",[_b]:"fire-core-compat",[Eb]:"fire-analytics",[vb]:"fire-analytics-compat",[Ab]:"fire-app-check",[Tb]:"fire-app-check-compat",[bb]:"fire-auth",[Sb]:"fire-auth-compat",[wb]:"fire-rtdb",[Rb]:"fire-data-connect",[Ib]:"fire-rtdb-compat",[Cb]:"fire-fn",[Nb]:"fire-fn-compat",[Db]:"fire-iid",[xb]:"fire-iid-compat",[Ob]:"fire-fcm",[Mb]:"fire-fcm-compat",[Vb]:"fire-perf",[kb]:"fire-perf-compat",[Pb]:"fire-rc",[Ub]:"fire-rc-compat",[Lb]:"fire-gcs",[jb]:"fire-gcs-compat",[zb]:"fire-fst",[Hb]:"fire-fst-compat",[Bb]:"fire-vertex","fire-js":"fire-js",[qb]:"fire-js-all"};/**
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
 */const bc=new Map,Yb=new Map,Od=new Map;function c_(r,t){try{r.container.addComponent(t)}catch(i){Yi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function fi(r){const t=r.name;if(Od.has(t))return Yi.debug(`There were multiple attempts to register component ${t}.`),!1;Od.set(t,r);for(const i of bc.values())c_(i,r);for(const i of Yb.values())c_(i,r);return!0}function Vs(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Ln(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Kb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Ms("app","Firebase",Kb);/**
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
 */class Qb{constructor(t,i,a){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Fa=Gb;function Qv(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const a={name:xd,automaticDataCollectionEnabled:!0,...t},l=a.name;if(typeof l!="string"||!l)throw Nr.create("bad-app-name",{appName:String(l)});if(i||(i=Lv()),!i)throw Nr.create("no-options");const h=bc.get(l);if(h){if(Or(i,h.options)&&Or(a,h.config))return h;throw Nr.create("duplicate-app",{appName:l})}const d=new eb(l);for(const _ of Od.values())d.addComponent(_);const p=new Qb(i,a,d);return bc.set(l,p),p}function Zd(r=xd){const t=bc.get(r);if(!t&&r===xd&&Lv())return Qv();if(!t)throw Nr.create("no-app",{appName:r});return t}function Dn(r,t,i){let a=Fb[r]??r;i&&(a+=`-${i}`);const l=a.match(/\s|\//),h=t.match(/\s|\//);if(l||h){const d=[`Unable to register library "${a}" with version "${t}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yi.warn(d.join(" "));return}fi(new qn(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const Xb="firebase-heartbeat-database",$b=1,vl="firebase-heartbeat-store";let _d=null;function Xv(){return _d||(_d=Kv(Xb,$b,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(vl)}catch(i){console.warn(i)}}}}).catch(r=>{throw Nr.create("idb-open",{originalErrorMessage:r.message})})),_d}async function Zb(r){try{const i=(await Xv()).transaction(vl),a=await i.objectStore(vl).get($v(r));return await i.done,a}catch(t){if(t instanceof Fn)Yi.warn(t.message);else{const i=Nr.create("idb-get",{originalErrorMessage:t?.message});Yi.warn(i.message)}}}async function h_(r,t){try{const a=(await Xv()).transaction(vl,"readwrite");await a.objectStore(vl).put(t,$v(r)),await a.done}catch(i){if(i instanceof Fn)Yi.warn(i.message);else{const a=Nr.create("idb-set",{originalErrorMessage:i?.message});Yi.warn(a.message)}}}function $v(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Jb=1024,Wb=30;class tS{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new nS(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=f_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>Wb){const l=iS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Yi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=f_(),{heartbeatsToSend:i,unsentEntries:a}=eS(this._heartbeatsCache.heartbeats),l=Ac(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Yi.warn(t),""}}}function f_(){return new Date().toISOString().substring(0,10)}function eS(r,t=Jb){const i=[];let a=r.slice();for(const l of r){const h=i.find(d=>d.agent===l.agent);if(h){if(h.dates.push(l.date),d_(i)>t){h.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),d_(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class nS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qv()?Gv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Zb(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return h_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return h_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function d_(r){return Ac(JSON.stringify({version:2,heartbeats:r})).length}function iS(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,t=a);return t}/**
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
 */function rS(r){fi(new qn("platform-logger",t=>new gb(t),"PRIVATE")),fi(new qn("heartbeat",t=>new tS(t),"PRIVATE")),Dn(Dd,u_,r),Dn(Dd,u_,"esm2020"),Dn("fire-js","")}rS("");var sS="firebase",aS="12.2.1";/**
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
 */Dn(sS,aS,"app");var m_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,b){function R(){}R.prototype=b.prototype,O.D=b.prototype,O.prototype=new R,O.prototype.constructor=O,O.C=function(N,x,k){for(var w=Array(arguments.length-2),De=2;De<arguments.length;De++)w[De-2]=arguments[De];return b.prototype[x].apply(N,w)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(O,b,R){R||(R=0);var N=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)N[x]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(x=0;16>x;++x)N[x]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=O.g[0],R=O.g[1],x=O.g[2];var k=O.g[3],w=b+(k^R&(x^k))+N[0]+3614090360&4294967295;b=R+(w<<7&4294967295|w>>>25),w=k+(x^b&(R^x))+N[1]+3905402710&4294967295,k=b+(w<<12&4294967295|w>>>20),w=x+(R^k&(b^R))+N[2]+606105819&4294967295,x=k+(w<<17&4294967295|w>>>15),w=R+(b^x&(k^b))+N[3]+3250441966&4294967295,R=x+(w<<22&4294967295|w>>>10),w=b+(k^R&(x^k))+N[4]+4118548399&4294967295,b=R+(w<<7&4294967295|w>>>25),w=k+(x^b&(R^x))+N[5]+1200080426&4294967295,k=b+(w<<12&4294967295|w>>>20),w=x+(R^k&(b^R))+N[6]+2821735955&4294967295,x=k+(w<<17&4294967295|w>>>15),w=R+(b^x&(k^b))+N[7]+4249261313&4294967295,R=x+(w<<22&4294967295|w>>>10),w=b+(k^R&(x^k))+N[8]+1770035416&4294967295,b=R+(w<<7&4294967295|w>>>25),w=k+(x^b&(R^x))+N[9]+2336552879&4294967295,k=b+(w<<12&4294967295|w>>>20),w=x+(R^k&(b^R))+N[10]+4294925233&4294967295,x=k+(w<<17&4294967295|w>>>15),w=R+(b^x&(k^b))+N[11]+2304563134&4294967295,R=x+(w<<22&4294967295|w>>>10),w=b+(k^R&(x^k))+N[12]+1804603682&4294967295,b=R+(w<<7&4294967295|w>>>25),w=k+(x^b&(R^x))+N[13]+4254626195&4294967295,k=b+(w<<12&4294967295|w>>>20),w=x+(R^k&(b^R))+N[14]+2792965006&4294967295,x=k+(w<<17&4294967295|w>>>15),w=R+(b^x&(k^b))+N[15]+1236535329&4294967295,R=x+(w<<22&4294967295|w>>>10),w=b+(x^k&(R^x))+N[1]+4129170786&4294967295,b=R+(w<<5&4294967295|w>>>27),w=k+(R^x&(b^R))+N[6]+3225465664&4294967295,k=b+(w<<9&4294967295|w>>>23),w=x+(b^R&(k^b))+N[11]+643717713&4294967295,x=k+(w<<14&4294967295|w>>>18),w=R+(k^b&(x^k))+N[0]+3921069994&4294967295,R=x+(w<<20&4294967295|w>>>12),w=b+(x^k&(R^x))+N[5]+3593408605&4294967295,b=R+(w<<5&4294967295|w>>>27),w=k+(R^x&(b^R))+N[10]+38016083&4294967295,k=b+(w<<9&4294967295|w>>>23),w=x+(b^R&(k^b))+N[15]+3634488961&4294967295,x=k+(w<<14&4294967295|w>>>18),w=R+(k^b&(x^k))+N[4]+3889429448&4294967295,R=x+(w<<20&4294967295|w>>>12),w=b+(x^k&(R^x))+N[9]+568446438&4294967295,b=R+(w<<5&4294967295|w>>>27),w=k+(R^x&(b^R))+N[14]+3275163606&4294967295,k=b+(w<<9&4294967295|w>>>23),w=x+(b^R&(k^b))+N[3]+4107603335&4294967295,x=k+(w<<14&4294967295|w>>>18),w=R+(k^b&(x^k))+N[8]+1163531501&4294967295,R=x+(w<<20&4294967295|w>>>12),w=b+(x^k&(R^x))+N[13]+2850285829&4294967295,b=R+(w<<5&4294967295|w>>>27),w=k+(R^x&(b^R))+N[2]+4243563512&4294967295,k=b+(w<<9&4294967295|w>>>23),w=x+(b^R&(k^b))+N[7]+1735328473&4294967295,x=k+(w<<14&4294967295|w>>>18),w=R+(k^b&(x^k))+N[12]+2368359562&4294967295,R=x+(w<<20&4294967295|w>>>12),w=b+(R^x^k)+N[5]+4294588738&4294967295,b=R+(w<<4&4294967295|w>>>28),w=k+(b^R^x)+N[8]+2272392833&4294967295,k=b+(w<<11&4294967295|w>>>21),w=x+(k^b^R)+N[11]+1839030562&4294967295,x=k+(w<<16&4294967295|w>>>16),w=R+(x^k^b)+N[14]+4259657740&4294967295,R=x+(w<<23&4294967295|w>>>9),w=b+(R^x^k)+N[1]+2763975236&4294967295,b=R+(w<<4&4294967295|w>>>28),w=k+(b^R^x)+N[4]+1272893353&4294967295,k=b+(w<<11&4294967295|w>>>21),w=x+(k^b^R)+N[7]+4139469664&4294967295,x=k+(w<<16&4294967295|w>>>16),w=R+(x^k^b)+N[10]+3200236656&4294967295,R=x+(w<<23&4294967295|w>>>9),w=b+(R^x^k)+N[13]+681279174&4294967295,b=R+(w<<4&4294967295|w>>>28),w=k+(b^R^x)+N[0]+3936430074&4294967295,k=b+(w<<11&4294967295|w>>>21),w=x+(k^b^R)+N[3]+3572445317&4294967295,x=k+(w<<16&4294967295|w>>>16),w=R+(x^k^b)+N[6]+76029189&4294967295,R=x+(w<<23&4294967295|w>>>9),w=b+(R^x^k)+N[9]+3654602809&4294967295,b=R+(w<<4&4294967295|w>>>28),w=k+(b^R^x)+N[12]+3873151461&4294967295,k=b+(w<<11&4294967295|w>>>21),w=x+(k^b^R)+N[15]+530742520&4294967295,x=k+(w<<16&4294967295|w>>>16),w=R+(x^k^b)+N[2]+3299628645&4294967295,R=x+(w<<23&4294967295|w>>>9),w=b+(x^(R|~k))+N[0]+4096336452&4294967295,b=R+(w<<6&4294967295|w>>>26),w=k+(R^(b|~x))+N[7]+1126891415&4294967295,k=b+(w<<10&4294967295|w>>>22),w=x+(b^(k|~R))+N[14]+2878612391&4294967295,x=k+(w<<15&4294967295|w>>>17),w=R+(k^(x|~b))+N[5]+4237533241&4294967295,R=x+(w<<21&4294967295|w>>>11),w=b+(x^(R|~k))+N[12]+1700485571&4294967295,b=R+(w<<6&4294967295|w>>>26),w=k+(R^(b|~x))+N[3]+2399980690&4294967295,k=b+(w<<10&4294967295|w>>>22),w=x+(b^(k|~R))+N[10]+4293915773&4294967295,x=k+(w<<15&4294967295|w>>>17),w=R+(k^(x|~b))+N[1]+2240044497&4294967295,R=x+(w<<21&4294967295|w>>>11),w=b+(x^(R|~k))+N[8]+1873313359&4294967295,b=R+(w<<6&4294967295|w>>>26),w=k+(R^(b|~x))+N[15]+4264355552&4294967295,k=b+(w<<10&4294967295|w>>>22),w=x+(b^(k|~R))+N[6]+2734768916&4294967295,x=k+(w<<15&4294967295|w>>>17),w=R+(k^(x|~b))+N[13]+1309151649&4294967295,R=x+(w<<21&4294967295|w>>>11),w=b+(x^(R|~k))+N[4]+4149444226&4294967295,b=R+(w<<6&4294967295|w>>>26),w=k+(R^(b|~x))+N[11]+3174756917&4294967295,k=b+(w<<10&4294967295|w>>>22),w=x+(b^(k|~R))+N[2]+718787259&4294967295,x=k+(w<<15&4294967295|w>>>17),w=R+(k^(x|~b))+N[9]+3951481745&4294967295,O.g[0]=O.g[0]+b&4294967295,O.g[1]=O.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,O.g[2]=O.g[2]+x&4294967295,O.g[3]=O.g[3]+k&4294967295}a.prototype.u=function(O,b){b===void 0&&(b=O.length);for(var R=b-this.blockSize,N=this.B,x=this.h,k=0;k<b;){if(x==0)for(;k<=R;)l(this,O,k),k+=this.blockSize;if(typeof O=="string"){for(;k<b;)if(N[x++]=O.charCodeAt(k++),x==this.blockSize){l(this,N),x=0;break}}else for(;k<b;)if(N[x++]=O[k++],x==this.blockSize){l(this,N),x=0;break}}this.h=x,this.o+=b},a.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var b=1;b<O.length-8;++b)O[b]=0;var R=8*this.o;for(b=O.length-8;b<O.length;++b)O[b]=R&255,R/=256;for(this.u(O),O=Array(16),b=R=0;4>b;++b)for(var N=0;32>N;N+=8)O[R++]=this.g[b]>>>N&255;return O};function h(O,b){var R=p;return Object.prototype.hasOwnProperty.call(R,O)?R[O]:R[O]=b(O)}function d(O,b){this.h=b;for(var R=[],N=!0,x=O.length-1;0<=x;x--){var k=O[x]|0;N&&k==b||(R[x]=k,N=!1)}this.g=R}var p={};function _(O){return-128<=O&&128>O?h(O,function(b){return new d([b|0],0>b?-1:0)}):new d([O|0],0>O?-1:0)}function v(O){if(isNaN(O)||!isFinite(O))return D;if(0>O)return et(v(-O));for(var b=[],R=1,N=0;O>=R;N++)b[N]=O/R|0,R*=4294967296;return new d(b,0)}function A(O,b){if(O.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(O.charAt(0)=="-")return et(A(O.substring(1),b));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(b,8)),N=D,x=0;x<O.length;x+=8){var k=Math.min(8,O.length-x),w=parseInt(O.substring(x,x+k),b);8>k?(k=v(Math.pow(b,k)),N=N.j(k).add(v(w))):(N=N.j(R),N=N.add(v(w)))}return N}var D=_(0),P=_(1),J=_(16777216);r=d.prototype,r.m=function(){if(st(this))return-et(this).m();for(var O=0,b=1,R=0;R<this.g.length;R++){var N=this.i(R);O+=(0<=N?N:4294967296+N)*b,b*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if($(this))return"0";if(st(this))return"-"+et(this).toString(O);for(var b=v(Math.pow(O,6)),R=this,N="";;){var x=Gt(R,b).g;R=gt(R,x.j(b));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(O);if(R=x,$(R))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function $(O){if(O.h!=0)return!1;for(var b=0;b<O.g.length;b++)if(O.g[b]!=0)return!1;return!0}function st(O){return O.h==-1}r.l=function(O){return O=gt(this,O),st(O)?-1:$(O)?0:1};function et(O){for(var b=O.g.length,R=[],N=0;N<b;N++)R[N]=~O.g[N];return new d(R,~O.h).add(P)}r.abs=function(){return st(this)?et(this):this},r.add=function(O){for(var b=Math.max(this.g.length,O.g.length),R=[],N=0,x=0;x<=b;x++){var k=N+(this.i(x)&65535)+(O.i(x)&65535),w=(k>>>16)+(this.i(x)>>>16)+(O.i(x)>>>16);N=w>>>16,k&=65535,w&=65535,R[x]=w<<16|k}return new d(R,R[R.length-1]&-2147483648?-1:0)};function gt(O,b){return O.add(et(b))}r.j=function(O){if($(this)||$(O))return D;if(st(this))return st(O)?et(this).j(et(O)):et(et(this).j(O));if(st(O))return et(this.j(et(O)));if(0>this.l(J)&&0>O.l(J))return v(this.m()*O.m());for(var b=this.g.length+O.g.length,R=[],N=0;N<2*b;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var x=0;x<O.g.length;x++){var k=this.i(N)>>>16,w=this.i(N)&65535,De=O.i(x)>>>16,ne=O.i(x)&65535;R[2*N+2*x]+=w*ne,yt(R,2*N+2*x),R[2*N+2*x+1]+=k*ne,yt(R,2*N+2*x+1),R[2*N+2*x+1]+=w*De,yt(R,2*N+2*x+1),R[2*N+2*x+2]+=k*De,yt(R,2*N+2*x+2)}for(N=0;N<b;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=b;N<2*b;N++)R[N]=0;return new d(R,0)};function yt(O,b){for(;(O[b]&65535)!=O[b];)O[b+1]+=O[b]>>>16,O[b]&=65535,b++}function pt(O,b){this.g=O,this.h=b}function Gt(O,b){if($(b))throw Error("division by zero");if($(O))return new pt(D,D);if(st(O))return b=Gt(et(O),b),new pt(et(b.g),et(b.h));if(st(b))return b=Gt(O,et(b)),new pt(et(b.g),b.h);if(30<O.g.length){if(st(O)||st(b))throw Error("slowDivide_ only works with positive integers.");for(var R=P,N=b;0>=N.l(O);)R=_t(R),N=_t(N);var x=Ft(R,1),k=Ft(N,1);for(N=Ft(N,2),R=Ft(R,2);!$(N);){var w=k.add(N);0>=w.l(O)&&(x=x.add(R),k=w),N=Ft(N,1),R=Ft(R,1)}return b=gt(O,x.j(b)),new pt(x,b)}for(x=D;0<=O.l(b);){for(R=Math.max(1,Math.floor(O.m()/b.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=v(R),w=k.j(b);st(w)||0<w.l(O);)R-=N,k=v(R),w=k.j(b);$(k)&&(k=P),x=x.add(k),O=gt(O,w)}return new pt(x,O)}r.A=function(O){return Gt(this,O).h},r.and=function(O){for(var b=Math.max(this.g.length,O.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)&O.i(N);return new d(R,this.h&O.h)},r.or=function(O){for(var b=Math.max(this.g.length,O.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)|O.i(N);return new d(R,this.h|O.h)},r.xor=function(O){for(var b=Math.max(this.g.length,O.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)^O.i(N);return new d(R,this.h^O.h)};function _t(O){for(var b=O.g.length+1,R=[],N=0;N<b;N++)R[N]=O.i(N)<<1|O.i(N-1)>>>31;return new d(R,O.h)}function Ft(O,b){var R=b>>5;b%=32;for(var N=O.g.length-R,x=[],k=0;k<N;k++)x[k]=0<b?O.i(k+R)>>>b|O.i(k+R+1)<<32-b:O.i(k+R);return new d(x,O.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=A,Jd=d}).apply(typeof m_<"u"?m_:typeof self<"u"?self:typeof window<"u"?window:{});var ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zv,cl,Jv,dc,Md,Wv,t0,e0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,g){return u==Array.prototype||u==Object.prototype||(u[m]=g.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ac=="object"&&ac];for(var m=0;m<u.length;++m){var g=u[m];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var g=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in g))break t;g=g[U]}u=u[u.length-1],T=g[u],m=m(T),m!=T&&m!=null&&t(g,u,{configurable:!0,writable:!0,value:m})}}function h(u,m){u instanceof String&&(u+="");var g=0,T=!1,U={next:function(){if(!T&&g<u.length){var H=g++;return{value:m(H,u[H]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return h(this,function(m,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function _(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function A(u,m,g){return u.call.apply(u.bind,arguments)}function D(u,m,g){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function P(u,m,g){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:D,P.apply(null,arguments)}function J(u,m){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function $(u,m){function g(){}g.prototype=m.prototype,u.aa=m.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(T,U,H){for(var W=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)W[Ct-2]=arguments[Ct];return m.prototype[U].apply(T,W)}}function st(u){const m=u.length;if(0<m){const g=Array(m);for(let T=0;T<m;T++)g[T]=u[T];return g}return[]}function et(u,m){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(_(T)){const U=u.length||0,H=T.length||0;u.length=U+H;for(let W=0;W<H;W++)u[U+W]=T[W]}else u.push(T)}}class gt{constructor(m,g){this.i=m,this.j=g,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function yt(u){return/^[\s\xa0]*$/.test(u)}function pt(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function Gt(u){return Gt[" "](u),u}Gt[" "]=function(){};var _t=pt().indexOf("Gecko")!=-1&&!(pt().toLowerCase().indexOf("webkit")!=-1&&pt().indexOf("Edge")==-1)&&!(pt().indexOf("Trident")!=-1||pt().indexOf("MSIE")!=-1)&&pt().indexOf("Edge")==-1;function Ft(u,m,g){for(const T in u)m.call(g,u[T],T,u)}function O(u,m){for(const g in u)m.call(void 0,u[g],g,u)}function b(u){const m={};for(const g in u)m[g]=u[g];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let g,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(g in T)u[g]=T[g];for(let H=0;H<R.length;H++)g=R[H],Object.prototype.hasOwnProperty.call(T,g)&&(u[g]=T[g])}}function x(u){var m=1;u=u.split(":");const g=[];for(;0<m&&u.length;)g.push(u.shift()),m--;return u.length&&g.push(u.join(":")),g}function k(u){p.setTimeout(()=>{throw u},0)}function w(){var u=Mt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class De{constructor(){this.h=this.g=null}add(m,g){const T=ne.get();T.set(m,g),this.h?this.h.next=T:this.g=T,this.h=T}}var ne=new gt(()=>new q,u=>u.reset());class q{constructor(){this.next=this.g=this.h=null}set(m,g){this.h=m,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ot=!1,Mt=new De,I=()=>{const u=p.Promise.resolve(void 0);tt=()=>{u.then(Q)}};var Q=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(g){k(g)}var m=ne;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ot=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ut=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};p.addEventListener("test",g,m),p.removeEventListener("test",g,m)}catch{}return u})();function bt(u,m){if(Z.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_t){t:{try{Gt(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else g=="mouseover"?m=u.fromElement:g=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:mt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&bt.aa.h.call(this)}}$(bt,Z);var mt={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),Kt=0;function Yn(u,m,g,T,U){this.listener=u,this.proxy=null,this.src=m,this.type=g,this.capture=!!T,this.ha=U,this.key=++Kt,this.da=this.fa=!1}function Qi(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pi(u){this.src=u,this.g={},this.h=0}pi.prototype.add=function(u,m,g,T,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var W=jr(u,m,T,U);return-1<W?(m=u[W],g||(m.fa=!1)):(m=new Yn(m,this.src,H,!!T,U),m.fa=g,u.push(m)),m};function Lr(u,m){var g=m.type;if(g in u.g){var T=u.g[g],U=Array.prototype.indexOf.call(T,m,void 0),H;(H=0<=U)&&Array.prototype.splice.call(T,U,1),H&&(Qi(m),u.g[g].length==0&&(delete u.g[g],u.h--))}}function jr(u,m,g,T){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==m&&H.capture==!!g&&H.ha==T)return U}return-1}var zr="closure_lm_"+(1e6*Math.random()|0),$a={};function Pl(u,m,g,T,U){if(Array.isArray(m)){for(var H=0;H<m.length;H++)Pl(u,m[H],g,T,U);return null}return g=Ul(g),u&&u[Te]?u.K(m,g,v(T)?!!T.capture:!1,U):yn(u,m,g,!1,T,U)}function yn(u,m,g,T,U,H){if(!m)throw Error("Invalid event type");var W=v(U)?!!U.capture:!!U,Ct=js(u);if(Ct||(u[zr]=Ct=new pi(u)),g=Ct.add(m,g,T,W,H),g.proxy)return g;if(T=oh(),g.proxy=T,T.src=u,T.listener=g,u.addEventListener)ut||(U=W),U===void 0&&(U=!1),u.addEventListener(m.toString(),T,U);else if(u.attachEvent)u.attachEvent(Br(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function oh(){function u(g){return m.call(u.src,u.listener,g)}const m=lh;return u}function Za(u,m,g,T,U){if(Array.isArray(m))for(var H=0;H<m.length;H++)Za(u,m[H],g,T,U);else T=v(T)?!!T.capture:!!T,g=Ul(g),u&&u[Te]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],g=jr(H,g,T,U),-1<g&&(Qi(H[g]),Array.prototype.splice.call(H,g,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=js(u))&&(m=u.g[m.toString()],u=-1,m&&(u=jr(m,g,T,U)),(g=-1<u?m[u]:null)&&Ls(g))}function Ls(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Te])Lr(m.i,u);else{var g=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(g,T,u.capture):m.detachEvent?m.detachEvent(Br(g),T):m.addListener&&m.removeListener&&m.removeListener(T),(g=js(m))?(Lr(g,u),g.h==0&&(g.src=null,m[zr]=null)):Qi(u)}}}function Br(u){return u in $a?$a[u]:$a[u]="on"+u}function lh(u,m){if(u.da)u=!0;else{m=new bt(m,this);var g=u.listener,T=u.ha||u.src;u.fa&&Ls(u),u=g.call(T,m)}return u}function js(u){return u=u[zr],u instanceof pi?u:null}var Ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ul(u){return typeof u=="function"?u:(u[Ja]||(u[Ja]=function(m){return u.handleEvent(m)}),u[Ja])}function ie(){nt.call(this),this.i=new pi(this),this.M=this,this.F=null}$(ie,nt),ie.prototype[Te]=!0,ie.prototype.removeEventListener=function(u,m,g,T){Za(this,u,m,g,T)};function Ut(u,m){var g,T=u.F;if(T)for(g=[];T;T=T.F)g.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new Z(m,u);else if(m instanceof Z)m.target=m.target||u;else{var U=m;m=new Z(T,u),N(m,U)}if(U=!0,g)for(var H=g.length-1;0<=H;H--){var W=m.g=g[H];U=an(W,T,!0,m)&&U}if(W=m.g=u,U=an(W,T,!0,m)&&U,U=an(W,T,!1,m)&&U,g)for(H=0;H<g.length;H++)W=m.g=g[H],U=an(W,T,!1,m)&&U}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var g=u.g[m],T=0;T<g.length;T++)Qi(g[T]);delete u.g[m],u.h--}}this.F=null},ie.prototype.K=function(u,m,g,T){return this.i.add(String(u),m,!1,g,T)},ie.prototype.L=function(u,m,g,T){return this.i.add(String(u),m,!0,g,T)};function an(u,m,g,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,H=0;H<m.length;++H){var W=m[H];if(W&&!W.da&&W.capture==g){var Ct=W.listener,ye=W.ha||W.src;W.fa&&Lr(u.i,W),U=Ct.call(ye,T)!==!1&&U}}return U&&!T.defaultPrevented}function ze(u,m,g){if(typeof u=="function")g&&(u=P(u,g));else if(u&&typeof u.handleEvent=="function")u=P(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function Ll(u){u.g=ze(()=>{u.g=null,u.i&&(u.i=!1,Ll(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class uh extends nt{constructor(m,g){super(),this.m=m,this.l=g,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ll(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(u){nt.call(this),this.h=u,this.g={}}$(Hr,nt);var qr=[];function Gr(u){Ft(u.g,function(m,g){this.g.hasOwnProperty(g)&&Ls(m)},u),u.g={}}Hr.prototype.N=function(){Hr.aa.N.call(this),Gr(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xn=p.JSON.stringify,zs=p.JSON.parse,Fr=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Wa(){}Wa.prototype.h=null;function to(u){return u.h||(u.h=u.i())}function eo(){}var gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yi(){Z.call(this,"d")}$(yi,Z);function no(){Z.call(this,"c")}$(no,Z);var Kn={},io=null;function Xi(){return io=io||new ie}Kn.La="serverreachability";function Bs(u){Z.call(this,Kn.La,u)}$(Bs,Z);function $i(u){const m=Xi();Ut(m,new Bs(m))}Kn.STAT_EVENT="statevent";function jl(u,m){Z.call(this,Kn.STAT_EVENT,u),this.stat=m}$(jl,Z);function Zt(u){const m=Xi();Ut(m,new jl(m,u))}Kn.Ma="timingevent";function ge(u,m){Z.call(this,Kn.Ma,u),this.size=m}$(ge,Z);function ce(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function ro(u,m,g,T,U,H){u.info(function(){if(u.g)if(H)for(var W="",Ct=H.split("&"),ye=0;ye<Ct.length;ye++){var Nt=Ct[ye].split("=");if(1<Nt.length){var be=Nt[0];Nt=Nt[1];var _e=be.split("_");W=2<=_e.length&&_e[1]=="type"?W+(be+"="+Nt+"&"):W+(be+"=redacted&")}}else W=null;else W=H;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+m+`
`+g+`
`+W})}function ch(u,m,g,T,U,H,W){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+m+`
`+g+`
`+H+" "+W})}function Zi(u,m,g,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Yr(u,g)+(T?" "+T:"")})}function zl(u,m){u.info(function(){return"TIMEOUT: "+m})}_n.prototype.info=function(){};function Yr(u,m){if(!u.g)return m;if(!m)return null;try{var g=JSON.parse(m);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var T=g[u];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var W=1;W<U.length;W++)U[W]=""}}}}return xn(g)}catch{return m}}var Ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qn;function Xn(){}$(Xn,Wa),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Qn=new Xn;function Qe(u,m,g,T){this.j=u,this.i=m,this.l=g,this.R=T||1,this.U=new Hr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}var so={},Hs={};function On(u,m,g){u.L=1,u.v=Zr(on(m)),u.m=g,u.P=!0,vi(u,null)}function vi(u,m){u.F=Date.now(),Kr(u),u.A=on(u.v);var g=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),ho(g.i,"t",T),u.C=0,g=u.j.J,u.h=new oe,u.g=nu(u.j,g?m:null,!u.m),0<u.O&&(u.M=new uh(P(u.Y,u,u.g),u.O)),m=u.U,g=u.g,T=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(qr[0]=U.toString()),U=qr);for(var H=0;H<U.length;H++){var W=Pl(g,U[H],T||m.handleEvent,!1,m.h||m);if(!W)break;m.g[W.key]=W}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),$i(),ro(u.i,u.u,u.A,u.l,u.R,u.m)}Qe.prototype.ca=function(u){u=u.target;const m=this.M;m&&An(u)==3?m.j():this.Y(u)},Qe.prototype.Y=function(u){try{if(u==this.g)t:{const _e=An(this.g);var m=this.g.Ba();const Ii=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||Ql(this.g)))){this.J||_e!=4||m==7||(m==8||0>=Ii?$i(3):$i(2)),Wi(this);var g=this.g.Z();this.X=g;e:if(Bl(this)){var T=Ql(this.g);u="";var U=T.length,H=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xe(this),$n(this);var W="";break e}this.h.i=new p.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(H&&m==U-1)});T.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=g==200,ch(this.i,this.u,this.A,this.l,this.R,_e,g),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,ye=this.g;if((Ct=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yt(Ct)){var Nt=Ct;break e}}Nt=null}if(g=Nt)Zi(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qr(this,g);else{this.o=!1,this.s=3,Zt(12),xe(this),$n(this);break t}}if(this.P){g=!0;let Oe;for(;!this.J&&this.C<W.length;)if(Oe=Hl(this,W),Oe==Hs){_e==4&&(this.s=4,Zt(14),g=!1),Zi(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==so){this.s=4,Zt(15),Zi(this.i,this.l,W,"[Invalid Chunk]"),g=!1;break}else Zi(this.i,this.l,Oe,null),Qr(this,Oe);if(Bl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||W.length!=0||this.h.h||(this.s=1,Zt(16),g=!1),this.o=this.o&&g,!g)Zi(this.i,this.l,W,"[Invalid Chunked Response]"),xe(this),$n(this);else if(0<W.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ss(be),be.M=!0,Zt(11))}}else Zi(this.i,this.l,W,null),Qr(this,W);_e==4&&xe(this),this.o&&!this.J&&(_e==4?Wl(this.j,this):(this.o=!1,Kr(this)))}else ph(this.g),g==400&&0<W.indexOf("Unknown SID")?(this.s=3,Zt(12)):(this.s=0,Zt(13)),xe(this),$n(this)}}}catch{}finally{}};function Bl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Hl(u,m){var g=u.C,T=m.indexOf(`
`,g);return T==-1?Hs:(g=Number(m.substring(g,T)),isNaN(g)?so:(T+=1,T+g>m.length?Hs:(m=m.slice(T,T+g),u.C=T+g,m)))}Qe.prototype.cancel=function(){this.J=!0,xe(this)};function Kr(u){u.S=Date.now()+u.I,ql(u,u.I)}function ql(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ce(P(u.ba,u),m)}function Wi(u){u.B&&(p.clearTimeout(u.B),u.B=null)}Qe.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(zl(this.i,this.A),this.L!=2&&($i(),Zt(17)),xe(this),this.s=2,$n(this)):ql(this,this.S-u)};function $n(u){u.j.G==0||u.J||Wl(u.j,u)}function xe(u){Wi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Gr(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Qr(u,m){try{var g=u.j;if(g.G!=0&&(g.g==u||ao(g.h,u))){if(!u.K&&ao(g.h,u)&&g.G==3){try{var T=g.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)ta(g),Js(g);else break t;yo(g),Zt(18)}}else g.za=U[1],0<g.za-g.T&&37500>U[2]&&g.F&&g.v==0&&!g.C&&(g.C=ce(P(g.Za,g),6e3));if(1>=Gs(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ri(g,11)}else if((u.K||g.g==u)&&ta(g),!yt(m))for(U=g.Da.g.parse(m),m=0;m<U.length;m++){let Nt=U[m];if(g.T=Nt[0],Nt=Nt[1],g.G==2)if(Nt[0]=="c"){g.K=Nt[1],g.ia=Nt[2];const be=Nt[3];be!=null&&(g.la=be,g.j.info("VER="+g.la));const _e=Nt[4];_e!=null&&(g.Aa=_e,g.j.info("SVER="+g.Aa));const Ii=Nt[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(T=1.5*Ii,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Oe=u.g;if(Oe){const ii=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var H=T.h;H.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Fs(H,H.h),H.h=null))}if(T.D){const vo=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;vo&&(T.ya=vo,zt(T.I,T.D,vo))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var W=u;if(T.qa=eu(T,T.J?T.ia:null,T.W),W.K){Xe(T.h,W);var Ct=W,ye=T.L;ye&&(Ct.I=ye),Ct.B&&(Wi(Ct),Kr(Ct)),T.g=W}else Zl(T);0<g.i.length&&Ws(g)}else Nt[0]!="stop"&&Nt[0]!="close"||Ri(g,7);else g.G==3&&(Nt[0]=="stop"||Nt[0]=="close"?Nt[0]=="stop"?Ri(g,7):po(g):Nt[0]!="noop"&&g.l&&g.l.ta(Nt),g.v=0)}}$i(4)}catch{}}var Gl=class{constructor(u,m){this.g=u,this.map=m}};function Ei(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qs(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Gs(u){return u.h?1:u.g?u.g.size:0}function ao(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Fs(u,m){u.g?u.g.add(m):u.h=m}function Xe(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ei.prototype.cancel=function(){if(this.i=oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function oo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const g of u.g.values())m=m.concat(g.D);return m}return st(u.i)}function hh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(_(u)){for(var m=[],g=u.length,T=0;T<g;T++)m.push(u[T]);return m}m=[],g=0;for(T in u)m[g++]=u[T];return m}function Ys(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(_(u)||typeof u=="string"){var m=[];u=u.length;for(var g=0;g<u;g++)m.push(g);return m}m=[],g=0;for(const T in u)m[g++]=T;return m}}}function lo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(_(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var g=Ys(u),T=hh(u),U=T.length,H=0;H<U;H++)m.call(void 0,T[H],g&&g[H],u)}var Xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fh(u,m){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var T=u[g].indexOf("="),U=null;if(0<=T){var H=u[g].substring(0,T);U=u[g].substring(T+1)}else H=u[g];m(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function he(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof he){this.h=u.h,$r(this,u.j),this.o=u.o,this.g=u.g,tr(this,u.s),this.l=u.l;var m=u.i,g=new Ai;g.i=m.i,m.g&&(g.g=new Map(m.g),g.h=m.h),Ti(this,g),this.m=u.m}else u&&(m=String(u).match(Xr))?(this.h=!1,$r(this,m[1]||"",!0),this.o=vn(m[2]||""),this.g=vn(m[3]||"",!0),tr(this,m[4]),this.l=vn(m[5]||"",!0),Ti(this,m[6]||"",!0),this.m=vn(m[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}he.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Jr(m,uo,!0),":");var g=this.g;return(g||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Jr(m,uo,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Jr(g,g.charAt(0)=="/"?dh:co,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Jr(g,Ks)),u.join("")};function on(u){return new he(u)}function $r(u,m,g){u.j=g?vn(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function tr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ti(u,m,g){m instanceof Ai?(u.i=m,Yl(u.i,u.h)):(g||(m=Jr(m,mh)),u.i=new Ai(m,u.h))}function zt(u,m,g){u.i.set(m,g)}function Zr(u){return zt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function vn(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Jr(u,m,g){return typeof u=="string"?(u=encodeURI(u).replace(m,Fl),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Fl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var uo=/[#\/\?@]/g,co=/[#\?:]/g,dh=/[#\?]/g,mh=/[#\?@]/g,Ks=/#/g;function Ai(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function En(u){u.g||(u.g=new Map,u.h=0,u.i&&fh(u.i,function(m,g){u.add(decodeURIComponent(m.replace(/\+/g," ")),g)}))}r=Ai.prototype,r.add=function(u,m){En(this),this.i=null,u=Zn(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(m),this.h+=1,this};function bi(u,m){En(u),m=Zn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Si(u,m){return En(u),m=Zn(u,m),u.g.has(m)}r.forEach=function(u,m){En(this),this.g.forEach(function(g,T){g.forEach(function(U){u.call(m,U,T,this)},this)},this)},r.na=function(){En(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),g=[];for(let T=0;T<m.length;T++){const U=u[T];for(let H=0;H<U.length;H++)g.push(m[T])}return g},r.V=function(u){En(this);let m=[];if(typeof u=="string")Si(this,u)&&(m=m.concat(this.g.get(Zn(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)m=m.concat(u[g])}return m},r.set=function(u,m){return En(this),this.i=null,u=Zn(this,u),Si(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ho(u,m,g){bi(u,m),0<g.length&&(u.i=null,u.g.set(Zn(u,m),st(g)),u.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var g=0;g<m.length;g++){var T=m[g];const H=encodeURIComponent(String(T)),W=this.V(T);for(T=0;T<W.length;T++){var U=H;W[T]!==""&&(U+="="+encodeURIComponent(String(W[T]))),u.push(U)}}return this.i=u.join("&")};function Zn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Yl(u,m){m&&!u.j&&(En(u),u.i=null,u.g.forEach(function(g,T){var U=T.toLowerCase();T!=U&&(bi(this,T),ho(this,U,g))},u)),u.j=m}function Wr(u,m){const g=new _n;if(p.Image){const T=new Image;T.onload=J(Tn,g,"TestLoadImage: loaded",!0,m,T),T.onerror=J(Tn,g,"TestLoadImage: error",!1,m,T),T.onabort=J(Tn,g,"TestLoadImage: abort",!1,m,T),T.ontimeout=J(Tn,g,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Mn(u,m){const g=new _n,T=new AbortController,U=setTimeout(()=>{T.abort(),Tn(g,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(H=>{clearTimeout(U),H.ok?Tn(g,"TestPingServer: ok",!0,m):Tn(g,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Tn(g,"TestPingServer: error",!1,m)})}function Tn(u,m,g,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(g)}catch{}}function ts(){this.g=new Fr}function Jn(u,m,g){const T=g||"";try{lo(u,function(U,H){let W=U;v(U)&&(W=xn(U)),m.push(T+H+"="+encodeURIComponent(W))})}catch(U){throw m.push(T+"type="+encodeURIComponent("_badmap")),U}}function er(u){this.l=u.Ub||null,this.j=u.eb||!1}$(er,Wa),er.prototype.g=function(){return new wi(this.l,this.j)},er.prototype.i=(function(u){return function(){return u}})({});function wi(u,m){ie.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(wi,ie),r=wi.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,ti(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function fo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Wn(this):ti(this),this.readyState==3&&fo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Wn(this))},r.Qa=function(u){this.g&&(this.response=u,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ti(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var g=m.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=m.next();return u.join(`\r
`)};function ti(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function mo(u){let m="";return Ft(u,function(g,T){m+=T,m+=":",m+=g,m+=`\r
`}),m}function Ae(u,m,g){t:{for(T in g){var T=!1;break t}T=!0}T||(g=mo(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):zt(u,m,g))}function kt(u){ie.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(kt,ie);var Qs=/^https?$/i,es=["POST","PUT"];r=kt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qn.g(),this.v=this.o?to(this.o):to(Qn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){Kl(this,H);return}if(u=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)g.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const H of T.keys())g.set(H,T.get(H));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(H=>H.toLowerCase()=="content-type"),U=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(es,m,void 0))||T||U||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,W]of g)this.g.setRequestHeader(H,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ns(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){Kl(this,H)}};function Kl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Xs(u),ei(u)}function Xs(u){u.A||(u.A=!0,Ut(u,"complete"),Ut(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ut(this,"complete"),Ut(this,"abort"),ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),kt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?$s(this):this.bb())},r.bb=function(){$s(this)};function $s(u){if(u.h&&typeof d<"u"&&(!u.v[1]||An(u)!=4||u.Z()!=2)){if(u.u&&An(u)==4)ze(u.Ea,0,u);else if(Ut(u,"readystatechange"),An(u)==4){u.h=!1;try{const W=u.Z();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var g;if(!(g=m)){var T;if(T=W===0){var U=String(u.D).match(Xr)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),T=!Qs.test(U?U.toLowerCase():"")}g=T}if(g)Ut(u,"complete"),Ut(u,"success");else{u.m=6;try{var H=2<An(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Xs(u)}}finally{ei(u)}}}}function ei(u,m){if(u.g){ns(u);const g=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ut(u,"ready");try{g.onreadystatechange=T}catch{}}}function ns(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function An(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),zs(m)}};function Ql(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ph(u){const m={};u=(u.g&&2<=An(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(yt(u[T]))continue;var g=x(u[T]);const U=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const H=m[U]||[];m[U]=H,H.push(g)}O(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(u,m,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||m}function Zs(u){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,u),this.cb=is("retryDelaySeedMs",1e4,u),this.Wa=is("forwardChannelMaxRetries",2,u),this.wa=is("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ei(u&&u.concurrentRequestLimit),this.Da=new ts,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Zs.prototype,r.la=8,r.G=1,r.connect=function(u,m,g,T){Zt(0),this.W=u,this.H=m||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=eu(this,null,this.W),Ws(this)};function po(u){if(Xl(u),u.G==3){var m=u.U++,g=on(u.I);if(zt(g,"SID",u.K),zt(g,"RID",m),zt(g,"TYPE","terminate"),rs(u,g),m=new Qe(u,u.j,m),m.L=2,m.v=Zr(on(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=m.v,g=!0),g||(m.g=nu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Kr(m)}tu(u)}function Js(u){u.g&&(ss(u),u.g.cancel(),u.g=null)}function Xl(u){Js(u),u.u&&(p.clearTimeout(u.u),u.u=null),ta(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function Ws(u){if(!qs(u.h)&&!u.s){u.s=!0;var m=u.Ga;tt||I(),ot||(tt(),ot=!0),Mt.add(m,u),u.B=0}}function gh(u,m){return Gs(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ce(P(u.Ga,u,m),_o(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Qe(this,this.j,u);let H=this.o;if(this.S&&(H?(H=b(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)t:{for(var m=0,g=0;g<this.i.length;g++){e:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=g;break t}if(m===4096||g===this.i.length-1){m=g+1;break t}}m=1e3}else m=1e3;m=$l(this,U,m),g=on(this.I),zt(g,"RID",u),zt(g,"CVER",22),this.D&&zt(g,"X-HTTP-Session-Id",this.D),rs(this,g),H&&(this.O?m="headers="+encodeURIComponent(String(mo(H)))+"&"+m:this.m&&Ae(g,this.m,H)),Fs(this.h,U),this.Ua&&zt(g,"TYPE","init"),this.P?(zt(g,"$req",m),zt(g,"SID","null"),U.T=!0,On(U,g,null)):On(U,g,m),this.G=2}}else this.G==3&&(u?go(this,u):this.i.length==0||qs(this.h)||go(this))};function go(u,m){var g;m?g=m.l:g=u.U++;const T=on(u.I);zt(T,"SID",u.K),zt(T,"RID",g),zt(T,"AID",u.T),rs(u,T),u.m&&u.o&&Ae(T,u.m,u.o),g=new Qe(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),m&&(u.i=m.D.concat(u.i)),m=$l(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Fs(u.h,g),On(g,T,m)}function rs(u,m){u.H&&Ft(u.H,function(g,T){zt(m,T,g)}),u.l&&lo({},function(g,T){zt(m,T,g)})}function $l(u,m,g){g=Math.min(u.i.length,g);var T=u.l?P(u.l.Na,u.l,u):null;t:{var U=u.i;let H=-1;for(;;){const W=["count="+g];H==-1?0<g?(H=U[0].g,W.push("ofs="+H)):H=0:W.push("ofs="+H);let Ct=!0;for(let ye=0;ye<g;ye++){let Nt=U[ye].g;const be=U[ye].map;if(Nt-=H,0>Nt)H=Math.max(0,U[ye].g-100),Ct=!1;else try{Jn(be,W,"req"+Nt+"_")}catch{T&&T(be)}}if(Ct){T=W.join("&");break t}}}return u=u.i.splice(0,g),m.D=u,T}function Zl(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;tt||I(),ot||(tt(),ot=!0),Mt.add(m,u),u.v=0}}function yo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ce(P(u.Fa,u),_o(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ce(P(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Zt(10),Js(this),Jl(this))};function ss(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Jl(u){u.g=new Qe(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);zt(m,"RID","rpc"),zt(m,"SID",u.K),zt(m,"AID",u.T),zt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&zt(m,"TO",u.ja),zt(m,"TYPE","xmlhttp"),rs(u,m),u.m&&u.o&&Ae(m,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Zr(on(m)),g.m=null,g.P=!0,vi(g,u)}r.Za=function(){this.C!=null&&(this.C=null,Js(this),yo(this),Zt(19))};function ta(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Wl(u,m){var g=null;if(u.g==m){ta(u),ss(u),u.g=null;var T=2}else if(ao(u.h,m))g=m.D,Xe(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){g=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;T=Xi(),Ut(T,new ge(T,g)),Ws(u)}else Zl(u);else if(U=m.s,U==3||U==0&&0<m.X||!(T==1&&gh(u,m)||T==2&&yo(u)))switch(g&&0<g.length&&(m=u.h,m.i=m.i.concat(g)),U){case 1:Ri(u,5);break;case 4:Ri(u,10);break;case 3:Ri(u,6);break;default:Ri(u,2)}}}function _o(u,m){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*m}function Ri(u,m){if(u.j.info("Error code "+m),m==2){var g=P(u.fb,u),T=u.Xa;const U=!T;T=new he(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||$r(T,"https"),Zr(T),U?Wr(T.toString(),g):Mn(T.toString(),g)}else Zt(2);u.G=0,u.l&&u.l.sa(m),tu(u),Xl(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Zt(2)):(this.j.info("Failed to ping google.com"),Zt(1))};function tu(u){if(u.G=0,u.ka=[],u.l){const m=oo(u.h);(m.length!=0||u.i.length!=0)&&(et(u.ka,m),et(u.ka,u.i),u.h.i.length=0,st(u.i),u.i.length=0),u.l.ra()}}function eu(u,m,g){var T=g instanceof he?on(g):new he(g);if(T.g!="")m&&(T.g=m+"."+T.g),tr(T,T.s);else{var U=p.location;T=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var H=new he(null);T&&$r(H,T),m&&(H.g=m),U&&tr(H,U),g&&(H.l=g),T=H}return g=u.D,m=u.ya,g&&m&&zt(T,g,m),zt(T,"VER",u.la),rs(u,T),T}function nu(u,m,g){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new kt(new er({eb:g})):new kt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function iu(){}r=iu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ea(){}ea.prototype.g=function(u,m){return new $e(u,m)};function $e(u,m){ie.call(this),this.g=new Zs(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!yt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!yt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ni(this)}$($e,ie),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){po(this.g)},$e.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=xn(u),u=g);m.i.push(new Gl(m.Ya++,u)),m.G==3&&Ws(m)},$e.prototype.N=function(){this.g.l=null,delete this.j,po(this.g),delete this.g,$e.aa.N.call(this)};function ru(u){yi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const g in m){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(ru,yi);function su(){no.call(this),this.status=1}$(su,no);function ni(u){this.g=u}$(ni,iu),ni.prototype.ua=function(){Ut(this.g,"a")},ni.prototype.ta=function(u){Ut(this.g,new ru(u))},ni.prototype.sa=function(u){Ut(this.g,new su)},ni.prototype.ra=function(){Ut(this.g,"b")},ea.prototype.createWebChannel=ea.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,e0=function(){return new ea},t0=function(){return Xi()},Wv=Kn,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ji.NO_ERROR=0,Ji.TIMEOUT=8,Ji.HTTP_ERROR=6,dc=Ji,_i.COMPLETE="complete",Jv=_i,eo.EventType=gi,gi.OPEN="a",gi.CLOSE="b",gi.ERROR="c",gi.MESSAGE="d",ie.prototype.listen=ie.prototype.K,cl=eo,kt.prototype.listenOnce=kt.prototype.L,kt.prototype.getLastError=kt.prototype.Ka,kt.prototype.getLastErrorCode=kt.prototype.Ba,kt.prototype.getStatus=kt.prototype.Z,kt.prototype.getResponseJson=kt.prototype.Oa,kt.prototype.getResponseText=kt.prototype.oa,kt.prototype.send=kt.prototype.ea,kt.prototype.setWithCredentials=kt.prototype.Ha,Zv=kt}).apply(typeof ac<"u"?ac:typeof self<"u"?self:typeof window<"u"?window:{});const p_="@firebase/firestore",g_="4.9.1";/**
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
 */class Ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Ya="12.2.0";/**
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
 */const Rs=new Fc("@firebase/firestore");function Da(){return Rs.logLevel}function rt(r,...t){if(Rs.logLevel<=It.DEBUG){const i=t.map(Wd);Rs.debug(`Firestore (${Ya}): ${r}`,...i)}}function Is(r,...t){if(Rs.logLevel<=It.ERROR){const i=t.map(Wd);Rs.error(`Firestore (${Ya}): ${r}`,...i)}}function Yc(r,...t){if(Rs.logLevel<=It.WARN){const i=t.map(Wd);Rs.warn(`Firestore (${Ya}): ${r}`,...i)}}function Wd(r){if(typeof r=="string")return r;try{/**
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
*/return(function(i){return JSON.stringify(i)})(r)}catch{return r}}/**
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
 */function At(r,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,n0(r,a,i)}function n0(r,t,i){let a=`FIRESTORE (${Ya}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw Is(a),new Error(a)}function ae(r,t,i,a){let l="Unexpected state";typeof i=="string"?l=i:a=i,r||n0(t,l,a)}function $t(r,t){return r}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends Fn{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ss{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}}/**
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
 */class i0{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class oS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable((()=>i(Ge.UNAUTHENTICATED)))}shutdown(){}}class lS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class uS{constructor(t){this.t=t,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){ae(this.o===void 0,42304);let a=this.i;const l=_=>this.i!==a?(a=this.i,i(_)):Promise.resolve();let h=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Ss,t.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const _=h;t.enqueueRetryable((async()=>{await _.promise,await l(this.currentUser)}))},p=_=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Ss)}}),0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ae(typeof a.accessToken=="string",31837,{l:a}),new i0(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ae(t===null||typeof t=="string",2055,{h:t}),new Ge(t)}}class cS{constructor(t,i,a){this.P=t,this.T=i,this.I=a,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hS{constructor(t,i,a){this.P=t,this.T=i,this.I=a}getToken(){return Promise.resolve(new cS(this.P,this.T,this.I))}start(t,i){t.enqueueRetryable((()=>i(Ge.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class y_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fS{constructor(t,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ln(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,i){ae(this.o===void 0,3512);const a=h=>{h.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.m;return this.m=h.token,rt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{t.enqueueRetryable((()=>a(h)))};const l=h=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((h=>l(h))),setTimeout((()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?l(h):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new y_(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((i=>i?(ae(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new y_(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dS(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class tm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=dS(40);for(let h=0;h<l.length;++h)a.length<20&&l[h]<i&&(a+=t.charAt(l[h]%62))}return a}}function Pt(r,t){return r<t?-1:r>t?1:0}function Vd(r,t){const i=Math.min(r.length,t.length);for(let a=0;a<i;a++){const l=r.charAt(a),h=t.charAt(a);if(l!==h)return vd(l)===vd(h)?Pt(l,h):vd(l)?1:-1}return Pt(r.length,t.length)}const mS=55296,pS=57343;function vd(r){const t=r.charCodeAt(0);return t>=mS&&t<=pS}function La(r,t,i){return r.length===t.length&&r.every(((a,l)=>i(a,t[l])))}/**
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
 */const __="__name__";class ui{constructor(t,i,a){i===void 0?i=0:i>t.length&&At(637,{offset:i,range:t.length}),a===void 0?a=t.length-i:a>t.length-i&&At(1746,{length:a,range:t.length-i}),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return ui.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof ui?t.forEach((a=>{i.push(a)})):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const h=ui.compareSegments(t.get(l),i.get(l));if(h!==0)return h}return Pt(t.length,i.length)}static compareSegments(t,i){const a=ui.isNumericId(t),l=ui.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ui.extractNumericId(t).compare(ui.extractNumericId(i)):Vd(t,i)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jd.fromString(t.substring(4,t.length-2))}}class ee extends ui{construct(t,i,a){return new ee(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new lt(X.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((l=>l.length>0)))}return new ee(i)}static emptyPath(){return new ee([])}}const gS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends ui{construct(t,i,a){return new Le(t,i,a)}static isValidIdentifier(t){return gS.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===__}static keyField(){return new Le([__])}static fromServerFormat(t){const i=[];let a="",l=0;const h=()=>{if(a.length===0)throw new lt(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new lt(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const _=t[l+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new lt(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=_,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(a+=p,l++):(h(),l++)}if(h(),d)throw new lt(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Le(i)}static emptyPath(){return new Le([])}}/**
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
 */class Et{constructor(t){this.path=t}static fromPath(t){return new Et(ee.fromString(t))}static fromName(t){return new Et(ee.fromString(t).popFirst(5))}static empty(){return new Et(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ee.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return ee.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Et(new ee(t.slice()))}}/**
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
 */function r0(r,t,i){if(!i)throw new lt(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function yS(r,t,i,a){if(t===!0&&a===!0)throw new lt(X.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function v_(r){if(!Et.isDocumentKey(r))throw new lt(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function E_(r){if(Et.isDocumentKey(r))throw new lt(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function s0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function em(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(a){return a.constructor?a.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":At(12329,{type:typeof r})}function a0(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new lt(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=em(r);throw new lt(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(r,t){const i={typeString:r};return t&&(i.value=t),i}function Il(r,t){if(!s0(r))throw new lt(X.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in t)if(t[a]){const l=t[a].typeString,h="value"in t[a]?{value:t[a].value}:void 0;if(!(a in r)){i=`JSON missing required field: '${a}'`;break}const d=r[a];if(l&&typeof d!==l){i=`JSON field '${a}' must be a ${l}.`;break}if(h!==void 0&&d!==h.value){i=`Expected '${a}' field to equal '${h.value}'`;break}}if(i)throw new lt(X.INVALID_ARGUMENT,i);return!0}/**
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
 */const T_=-62135596800,A_=1e6;class Xt{static now(){return Xt.fromMillis(Date.now())}static fromDate(t){return Xt.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*A_);return new Xt(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new lt(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new lt(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<T_)throw new lt(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new lt(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/A_}_compareTo(t){return this.seconds===t.seconds?Pt(this.nanoseconds,t.nanoseconds):Pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Il(t,Xt._jsonSchema))return new Xt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-T_;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xt._jsonSchemaVersion="firestore/timestamp/1.0",Xt._jsonSchema={type:pe("string",Xt._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
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
 */class Wt{static fromTimestamp(t){return new Wt(t)}static min(){return new Wt(new Xt(0,0))}static max(){return new Wt(new Xt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const El=-1;function _S(r,t){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=Wt.fromTimestamp(a===1e9?new Xt(i+1,0):new Xt(i,a));return new Mr(l,Et.empty(),t)}function vS(r){return new Mr(r.readTime,r.key,El)}class Mr{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new Mr(Wt.min(),Et.empty(),El)}static max(){return new Mr(Wt.max(),Et.empty(),El)}}function ES(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=Et.comparator(r.documentKey,t.documentKey),i!==0?i:Pt(r.largestBatchId,t.largestBatchId))}/**
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
 */const TS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function nm(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==TS)throw r;rt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&At(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new K(((a,l)=>{this.nextCallback=h=>{this.wrapSuccess(t,h).next(a,l)},this.catchCallback=h=>{this.wrapFailure(i,h).next(a,l)}}))}toPromise(){return new Promise(((t,i)=>{this.next(t,i)}))}wrapUserFunction(t){try{const i=t();return i instanceof K?i:K.resolve(i)}catch(i){return K.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction((()=>t(i))):K.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction((()=>t(i))):K.reject(i)}static resolve(t){return new K(((i,a)=>{i(t)}))}static reject(t){return new K(((i,a)=>{a(t)}))}static waitFor(t){return new K(((i,a)=>{let l=0,h=0,d=!1;t.forEach((p=>{++l,p.next((()=>{++h,d&&h===l&&i()}),(_=>a(_)))})),d=!0,h===l&&i()}))}static or(t){let i=K.resolve(!1);for(const a of t)i=i.next((l=>l?K.resolve(l):a()));return i}static forEach(t,i){const a=[];return t.forEach(((l,h)=>{a.push(i.call(this,l,h))})),this.waitFor(a)}static mapArray(t,i){return new K(((a,l)=>{const h=t.length,d=new Array(h);let p=0;for(let _=0;_<h;_++){const v=_;i(t[v]).next((A=>{d[v]=A,++p,p===h&&a(d)}),(A=>l(A)))}}))}static doWhile(t,i){return new K(((a,l)=>{const h=()=>{t()===!0?i().next((()=>{h()}),l):a()};h()}))}}function bS(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Cl(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class im{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.ae(a),this.ue=a=>i.writeSequenceNumber(a))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}im.ce=-1;/**
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
 */const rm=-1;function sm(r){return r==null}function Sc(r){return r===0&&1/r==-1/0}function SS(r){return typeof r=="number"&&Number.isInteger(r)&&!Sc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const o0="";function wS(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=b_(t)),t=RS(r.get(i),t);return b_(t)}function RS(r,t){let i=t;const a=r.length;for(let l=0;l<a;l++){const h=r.charAt(l);switch(h){case"\0":i+="";break;case o0:i+="";break;default:i+=h}}return i}function b_(r){return r+o0+""}/**
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
 */function S_(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function Ka(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function l0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class sn{constructor(t,i){this.comparator=t,this.root=i||Pe.EMPTY}insert(t,i){return new sn(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(t){return new sn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((i,a)=>(t(i,a),!1)))}toString(){const t=[];return this.inorderTraversal(((i,a)=>(t.push(`${i}:${a}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new oc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new oc(this.root,t,this.comparator,!1)}getReverseIterator(){return new oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new oc(this.root,t,this.comparator,!0)}}class oc{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!t.isEmpty();)if(h=i?a(t.key,i):1,i&&l&&(h*=-1),h<0)t=this.isReverse?t.left:t.right;else{if(h===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pe{constructor(t,i,a,l,h){this.key=t,this.value=i,this.color=a??Pe.RED,this.left=l??Pe.EMPTY,this.right=h??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,h){return new Pe(t??this.key,i??this.value,a??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const h=a(t,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(t,i,a),null):h===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Pe.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw At(43730,{key:this.key,value:this.value});if(this.right.isRed())throw At(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw At(27949);return t+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw At(57766)}get value(){throw At(16141)}get color(){throw At(16727)}get left(){throw At(29726)}get right(){throw At(36894)}copy(t,i,a,l,h){return this}insert(t,i,a){return new Pe(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(t){this.comparator=t,this.data=new sn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((i,a)=>(t(i),!1)))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new w_(this.data.getIterator())}getIteratorFrom(t){return new w_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach((a=>{i=i.add(a)})),i}isEqual(t){if(!(t instanceof je)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,h=a.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((i=>{t.push(i)})),t}toString(){const t=[];return this.forEach((i=>t.push(i))),"SortedSet("+t.toString()+")"}copy(t){const i=new je(this.comparator);return i.data=t,i}}class w_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bn{constructor(t){this.fields=t,t.sort(Le.comparator)}static empty(){return new Bn([])}unionWith(t){let i=new je(Le.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Bn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return La(this.fields,t.fields,((i,a)=>i.isEqual(a)))}}/**
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
 */class IS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class di{constructor(t){this.binaryString=t}static fromBase64String(t){const i=(function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new IS("Invalid base64 string: "+h):h}})(t);return new di(i)}static fromUint8Array(t){const i=(function(l){let h="";for(let d=0;d<l.length;++d)h+=String.fromCharCode(l[d]);return h})(t);return new di(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}di.EMPTY_BYTE_STRING=new di("");const CS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(r){if(ae(!!r,39018),typeof r=="string"){let t=0;const i=CS.exec(r);if(ae(!!i,46558,{timestamp:r}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Ue(r.seconds),nanos:Ue(r.nanos)}}function Ue(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ja(r){return typeof r=="string"?di.fromBase64String(r):di.fromUint8Array(r)}/**
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
 */const u0="server_timestamp",c0="__type__",h0="__previous_value__",f0="__local_write_time__";function am(r){return(r?.mapValue?.fields||{})[c0]?.stringValue===u0}function om(r){const t=r.mapValue.fields[h0];return am(t)?om(t):t}function wc(r){const t=Cs(r.mapValue.fields[f0].timestampValue);return new Xt(t.seconds,t.nanos)}/**
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
 */class NS{constructor(t,i,a,l,h,d,p,_,v,A){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=h,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=v,this.isUsingEmulator=A}}const Rc="(default)";class Ic{constructor(t,i){this.projectId=t,this.database=i||Rc}static empty(){return new Ic("","")}get isDefaultDatabase(){return this.database===Rc}isEqual(t){return t instanceof Ic&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const d0="__type__",DS="__max__",lc={mapValue:{}},m0="__vector__",kd="value";function Ns(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?am(r)?4:OS(r)?9007199254740991:xS(r)?10:11:At(28295,{value:r})}function mi(r,t){if(r===t)return!0;const i=Ns(r);if(i!==Ns(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return wc(r).isEqual(wc(t));case 3:return(function(l,h){if(typeof l.timestampValue=="string"&&typeof h.timestampValue=="string"&&l.timestampValue.length===h.timestampValue.length)return l.timestampValue===h.timestampValue;const d=Cs(l.timestampValue),p=Cs(h.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(l,h){return ja(l.bytesValue).isEqual(ja(h.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(l,h){return Ue(l.geoPointValue.latitude)===Ue(h.geoPointValue.latitude)&&Ue(l.geoPointValue.longitude)===Ue(h.geoPointValue.longitude)})(r,t);case 2:return(function(l,h){if("integerValue"in l&&"integerValue"in h)return Ue(l.integerValue)===Ue(h.integerValue);if("doubleValue"in l&&"doubleValue"in h){const d=Ue(l.doubleValue),p=Ue(h.doubleValue);return d===p?Sc(d)===Sc(p):isNaN(d)&&isNaN(p)}return!1})(r,t);case 9:return La(r.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return(function(l,h){const d=l.mapValue.fields||{},p=h.mapValue.fields||{};if(S_(d)!==S_(p))return!1;for(const _ in d)if(d.hasOwnProperty(_)&&(p[_]===void 0||!mi(d[_],p[_])))return!1;return!0})(r,t);default:return At(52216,{left:r})}}function Tl(r,t){return(r.values||[]).find((i=>mi(i,t)))!==void 0}function za(r,t){if(r===t)return 0;const i=Ns(r),a=Ns(t);if(i!==a)return Pt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Pt(r.booleanValue,t.booleanValue);case 2:return(function(h,d){const p=Ue(h.integerValue||h.doubleValue),_=Ue(d.integerValue||d.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(r,t);case 3:return R_(r.timestampValue,t.timestampValue);case 4:return R_(wc(r),wc(t));case 5:return Vd(r.stringValue,t.stringValue);case 6:return(function(h,d){const p=ja(h),_=ja(d);return p.compareTo(_)})(r.bytesValue,t.bytesValue);case 7:return(function(h,d){const p=h.split("/"),_=d.split("/");for(let v=0;v<p.length&&v<_.length;v++){const A=Pt(p[v],_[v]);if(A!==0)return A}return Pt(p.length,_.length)})(r.referenceValue,t.referenceValue);case 8:return(function(h,d){const p=Pt(Ue(h.latitude),Ue(d.latitude));return p!==0?p:Pt(Ue(h.longitude),Ue(d.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return I_(r.arrayValue,t.arrayValue);case 10:return(function(h,d){const p=h.fields||{},_=d.fields||{},v=p[kd]?.arrayValue,A=_[kd]?.arrayValue,D=Pt(v?.values?.length||0,A?.values?.length||0);return D!==0?D:I_(v,A)})(r.mapValue,t.mapValue);case 11:return(function(h,d){if(h===lc.mapValue&&d===lc.mapValue)return 0;if(h===lc.mapValue)return 1;if(d===lc.mapValue)return-1;const p=h.fields||{},_=Object.keys(p),v=d.fields||{},A=Object.keys(v);_.sort(),A.sort();for(let D=0;D<_.length&&D<A.length;++D){const P=Vd(_[D],A[D]);if(P!==0)return P;const J=za(p[_[D]],v[A[D]]);if(J!==0)return J}return Pt(_.length,A.length)})(r.mapValue,t.mapValue);default:throw At(23264,{he:i})}}function R_(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Pt(r,t);const i=Cs(r),a=Cs(t),l=Pt(i.seconds,a.seconds);return l!==0?l:Pt(i.nanos,a.nanos)}function I_(r,t){const i=r.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const h=za(i[l],a[l]);if(h)return h}return Pt(i.length,a.length)}function Ba(r){return Pd(r)}function Pd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(i){const a=Cs(i);return`time(${a.seconds},${a.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(i){return ja(i).toBase64()})(r.bytesValue):"referenceValue"in r?(function(i){return Et.fromName(i).toString()})(r.referenceValue):"geoPointValue"in r?(function(i){return`geo(${i.latitude},${i.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(i){let a="[",l=!0;for(const h of i.values||[])l?l=!1:a+=",",a+=Pd(h);return a+"]"})(r.arrayValue):"mapValue"in r?(function(i){const a=Object.keys(i.fields||{}).sort();let l="{",h=!0;for(const d of a)h?h=!1:l+=",",l+=`${d}:${Pd(i.fields[d])}`;return l+"}"})(r.mapValue):At(61005,{value:r})}function mc(r){switch(Ns(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=om(r);return t?16+mc(t):16;case 5:return 2*r.stringValue.length;case 6:return ja(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(a){return(a.values||[]).reduce(((l,h)=>l+mc(h)),0)})(r.arrayValue);case 10:case 11:return(function(a){let l=0;return Ka(a.fields,((h,d)=>{l+=h.length+mc(d)})),l})(r.mapValue);default:throw At(13486,{value:r})}}function Ud(r){return!!r&&"integerValue"in r}function lm(r){return!!r&&"arrayValue"in r}function pc(r){return!!r&&"mapValue"in r}function xS(r){return(r?.mapValue?.fields||{})[d0]?.stringValue===m0}function fl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Ka(r.mapValue.fields,((i,a)=>t.mapValue.fields[i]=fl(a))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=fl(r.arrayValue.values[i]);return t}return{...r}}function OS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===DS}/**
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
 */class jn{constructor(t){this.value=t}static empty(){return new jn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!pc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=fl(i)}setAll(t){let i=Le.emptyPath(),a={},l=[];t.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const _=this.getFieldsMap(i);this.applyChanges(_,a,l),a={},l=[],i=p.popLast()}d?a[p.lastSegment()]=fl(d):l.push(p.lastSegment())}));const h=this.getFieldsMap(i);this.applyChanges(h,a,l)}delete(t){const i=this.field(t.popLast());pc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return mi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];pc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){Ka(i,((l,h)=>t[l]=h));for(const l of a)delete t[l]}clone(){return new jn(fl(this.value))}}function p0(r){const t=[];return Ka(r.fields,((i,a)=>{const l=new Le([i]);if(pc(a)){const h=p0(a.mapValue).fields;if(h.length===0)t.push(l);else for(const d of h)t.push(l.child(d))}else t.push(l)})),new Bn(t)}/**
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
 */class Un{constructor(t,i,a,l,h,d,p){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=h,this.data=d,this.documentState=p}static newInvalidDocument(t){return new Un(t,0,Wt.min(),Wt.min(),Wt.min(),jn.empty(),0)}static newFoundDocument(t,i,a,l){return new Un(t,1,i,Wt.min(),a,l,0)}static newNoDocument(t,i){return new Un(t,2,i,Wt.min(),Wt.min(),jn.empty(),0)}static newUnknownDocument(t,i){return new Un(t,3,i,Wt.min(),Wt.min(),jn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Wt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Un&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cc{constructor(t,i){this.position=t,this.inclusive=i}}function C_(r,t,i){let a=0;for(let l=0;l<r.position.length;l++){const h=t[l],d=r.position[l];if(h.field.isKeyField()?a=Et.comparator(Et.fromName(d.referenceValue),i.key):a=za(d,i.data.field(h.field)),h.dir==="desc"&&(a*=-1),a!==0)break}return a}function N_(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!mi(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class Nc{constructor(t,i="asc"){this.field=t,this.dir=i}}function MS(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class g0{}class Ne extends g0{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new kS(t,i,a):i==="array-contains"?new LS(t,a):i==="in"?new jS(t,a):i==="not-in"?new zS(t,a):i==="array-contains-any"?new BS(t,a):new Ne(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new PS(t,a):new US(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(za(i,this.value)):i!==null&&Ns(this.value)===Ns(i)&&this.matchesComparison(za(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return At(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vr extends g0{constructor(t,i){super(),this.filters=t,this.op=i,this.Pe=null}static create(t,i){return new Vr(t,i)}matches(t){return y0(this)?this.filters.find((i=>!i.matches(t)))===void 0:this.filters.find((i=>i.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,i)=>t.concat(i.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function y0(r){return r.op==="and"}function _0(r){return VS(r)&&y0(r)}function VS(r){for(const t of r.filters)if(t instanceof Vr)return!1;return!0}function Ld(r){if(r instanceof Ne)return r.field.canonicalString()+r.op.toString()+Ba(r.value);if(_0(r))return r.filters.map((t=>Ld(t))).join(",");{const t=r.filters.map((i=>Ld(i))).join(",");return`${r.op}(${t})`}}function v0(r,t){return r instanceof Ne?(function(a,l){return l instanceof Ne&&a.op===l.op&&a.field.isEqual(l.field)&&mi(a.value,l.value)})(r,t):r instanceof Vr?(function(a,l){return l instanceof Vr&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce(((h,d,p)=>h&&v0(d,l.filters[p])),!0):!1})(r,t):void At(19439)}function E0(r){return r instanceof Ne?(function(i){return`${i.field.canonicalString()} ${i.op} ${Ba(i.value)}`})(r):r instanceof Vr?(function(i){return i.op.toString()+" {"+i.getFilters().map(E0).join(" ,")+"}"})(r):"Filter"}class kS extends Ne{constructor(t,i,a){super(t,i,a),this.key=Et.fromName(a.referenceValue)}matches(t){const i=Et.comparator(t.key,this.key);return this.matchesComparison(i)}}class PS extends Ne{constructor(t,i){super(t,"in",i),this.keys=T0("in",i)}matches(t){return this.keys.some((i=>i.isEqual(t.key)))}}class US extends Ne{constructor(t,i){super(t,"not-in",i),this.keys=T0("not-in",i)}matches(t){return!this.keys.some((i=>i.isEqual(t.key)))}}function T0(r,t){return(t.arrayValue?.values||[]).map((i=>Et.fromName(i.referenceValue)))}class LS extends Ne{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return lm(i)&&Tl(i.arrayValue,this.value)}}class jS extends Ne{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Tl(this.value.arrayValue,i)}}class zS extends Ne{constructor(t,i){super(t,"not-in",i)}matches(t){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&i.nullValue===void 0&&!Tl(this.value.arrayValue,i)}}class BS extends Ne{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!lm(i)||!i.arrayValue.values)&&i.arrayValue.values.some((a=>Tl(this.value.arrayValue,a)))}}/**
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
 */class HS{constructor(t,i=null,a=[],l=[],h=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=h,this.startAt=d,this.endAt=p,this.Te=null}}function D_(r,t=null,i=[],a=[],l=null,h=null,d=null){return new HS(r,t,i,a,l,h,d)}function um(r){const t=$t(r);if(t.Te===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map((a=>Ld(a))).join(","),i+="|ob:",i+=t.orderBy.map((a=>(function(h){return h.field.canonicalString()+h.dir})(a))).join(","),sm(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>Ba(a))).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>Ba(a))).join(",")),t.Te=i}return t.Te}function cm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!MS(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!v0(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!N_(r.startAt,t.startAt)&&N_(r.endAt,t.endAt)}/**
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
 */class Kc{constructor(t,i=null,a=[],l=[],h=null,d="F",p=null,_=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=h,this.limitType=d,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qS(r,t,i,a,l,h,d,p){return new Kc(r,t,i,a,l,h,d,p)}function GS(r){return new Kc(r)}function x_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function FS(r){return r.collectionGroup!==null}function dl(r){const t=$t(r);if(t.Ie===null){t.Ie=[];const i=new Set;for(const h of t.explicitOrderBy)t.Ie.push(h),i.add(h.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new je(Le.comparator);return d.filters.forEach((_=>{_.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(t).forEach((h=>{i.has(h.canonicalString())||h.isKeyField()||t.Ie.push(new Nc(h,a))})),i.has(Le.keyField().canonicalString())||t.Ie.push(new Nc(Le.keyField(),a))}return t.Ie}function ws(r){const t=$t(r);return t.Ee||(t.Ee=YS(t,dl(r))),t.Ee}function YS(r,t){if(r.limitType==="F")return D_(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((l=>{const h=l.dir==="desc"?"asc":"desc";return new Nc(l.field,h)}));const i=r.endAt?new Cc(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new Cc(r.startAt.position,r.startAt.inclusive):null;return D_(r.path,r.collectionGroup,t,r.filters,r.limit,i,a)}}function jd(r,t,i){return new Kc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function A0(r,t){return cm(ws(r),ws(t))&&r.limitType===t.limitType}function b0(r){return`${um(ws(r))}|lt:${r.limitType}`}function ol(r){return`Query(target=${(function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map((l=>E0(l))).join(", ")}]`),sm(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map((l=>Ba(l))).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map((l=>Ba(l))).join(",")),`Target(${a})`})(ws(r))}; limitType=${r.limitType})`}function hm(r,t){return t.isFoundDocument()&&(function(a,l){const h=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(h):Et.isDocumentKey(a.path)?a.path.isEqual(h):a.path.isImmediateParentOf(h)})(r,t)&&(function(a,l){for(const h of dl(a))if(!h.field.isKeyField()&&l.data.field(h.field)===null)return!1;return!0})(r,t)&&(function(a,l){for(const h of a.filters)if(!h.matches(l))return!1;return!0})(r,t)&&(function(a,l){return!(a.startAt&&!(function(d,p,_){const v=C_(d,p,_);return d.inclusive?v<=0:v<0})(a.startAt,dl(a),l)||a.endAt&&!(function(d,p,_){const v=C_(d,p,_);return d.inclusive?v>=0:v>0})(a.endAt,dl(a),l))})(r,t)}function KS(r){return(t,i)=>{let a=!1;for(const l of dl(r)){const h=QS(l,t,i);if(h!==0)return h;a=a||l.field.isKeyField()}return 0}}function QS(r,t,i){const a=r.field.isKeyField()?Et.comparator(t.key,i.key):(function(h,d,p){const _=d.data.field(h),v=p.data.field(h);return _!==null&&v!==null?za(_,v):At(42886)})(r.field,t,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return At(19790,{direction:r.dir})}}/**
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
 */class ks{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,h]of a)if(this.equalsFn(l,t))return h}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],t))return void(l[h]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Ka(this.inner,((i,a)=>{for(const[l,h]of a)t(l,h)}))}isEmpty(){return l0(this.inner)}size(){return this.innerSize}}/**
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
 */const XS=new sn(Et.comparator);function Dc(){return XS}const S0=new sn(Et.comparator);function uc(...r){let t=S0;for(const i of r)t=t.insert(i.key,i);return t}function w0(r){let t=S0;return r.forEach(((i,a)=>t=t.insert(i,a.overlayedDocument))),t}function As(){return ml()}function R0(){return ml()}function ml(){return new ks((r=>r.toString()),((r,t)=>r.isEqual(t)))}const $S=new sn(Et.comparator),ZS=new je(Et.comparator);function Fe(...r){let t=ZS;for(const i of r)t=t.add(i);return t}const JS=new je(Pt);function WS(){return JS}/**
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
 */function fm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(t)?"-0":t}}function I0(r){return{integerValue:""+r}}function tw(r,t){return SS(t)?I0(t):fm(r,t)}/**
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
 */class Qc{constructor(){this._=void 0}}function ew(r,t,i){return r instanceof xc?(function(l,h){const d={fields:{[c0]:{stringValue:u0},[f0]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return h&&am(h)&&(h=om(h)),h&&(d.fields[h0]=h),{mapValue:d}})(i,t):r instanceof Al?N0(r,t):r instanceof bl?D0(r,t):(function(l,h){const d=C0(l,h),p=O_(d)+O_(l.Ae);return Ud(d)&&Ud(l.Ae)?I0(p):fm(l.serializer,p)})(r,t)}function nw(r,t,i){return r instanceof Al?N0(r,t):r instanceof bl?D0(r,t):i}function C0(r,t){return r instanceof Oc?(function(a){return Ud(a)||(function(h){return!!h&&"doubleValue"in h})(a)})(t)?t:{integerValue:0}:null}class xc extends Qc{}class Al extends Qc{constructor(t){super(),this.elements=t}}function N0(r,t){const i=x0(t);for(const a of r.elements)i.some((l=>mi(l,a)))||i.push(a);return{arrayValue:{values:i}}}class bl extends Qc{constructor(t){super(),this.elements=t}}function D0(r,t){let i=x0(t);for(const a of r.elements)i=i.filter((l=>!mi(l,a)));return{arrayValue:{values:i}}}class Oc extends Qc{constructor(t,i){super(),this.serializer=t,this.Ae=i}}function O_(r){return Ue(r.integerValue||r.doubleValue)}function x0(r){return lm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function iw(r,t){return r.field.isEqual(t.field)&&(function(a,l){return a instanceof Al&&l instanceof Al||a instanceof bl&&l instanceof bl?La(a.elements,l.elements,mi):a instanceof Oc&&l instanceof Oc?mi(a.Ae,l.Ae):a instanceof xc&&l instanceof xc})(r.transform,t.transform)}class rw{constructor(t,i){this.version=t,this.transformResults=i}}class qi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new qi}static exists(t){return new qi(void 0,t)}static updateTime(t){return new qi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Xc{}function O0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new V0(r.key,qi.none()):new Nl(r.key,r.data,qi.none());{const i=r.data,a=jn.empty();let l=new je(Le.comparator);for(let h of t.fields)if(!l.has(h)){let d=i.field(h);d===null&&h.length>1&&(h=h.popLast(),d=i.field(h)),d===null?a.delete(h):a.set(h,d),l=l.add(h)}return new Ps(r.key,a,new Bn(l.toArray()),qi.none())}}function sw(r,t,i){r instanceof Nl?(function(l,h,d){const p=l.value.clone(),_=V_(l.fieldTransforms,h,d.transformResults);p.setAll(_),h.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(r,t,i):r instanceof Ps?(function(l,h,d){if(!gc(l.precondition,h))return void h.convertToUnknownDocument(d.version);const p=V_(l.fieldTransforms,h,d.transformResults),_=h.data;_.setAll(M0(l)),_.setAll(p),h.convertToFoundDocument(d.version,_).setHasCommittedMutations()})(r,t,i):(function(l,h,d){h.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,i)}function pl(r,t,i,a){return r instanceof Nl?(function(h,d,p,_){if(!gc(h.precondition,d))return p;const v=h.value.clone(),A=k_(h.fieldTransforms,_,d);return v.setAll(A),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null})(r,t,i,a):r instanceof Ps?(function(h,d,p,_){if(!gc(h.precondition,d))return p;const v=k_(h.fieldTransforms,_,d),A=d.data;return A.setAll(M0(h)),A.setAll(v),d.convertToFoundDocument(d.version,A).setHasLocalMutations(),p===null?null:p.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map((D=>D.field)))})(r,t,i,a):(function(h,d,p){return gc(h.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(r,t,i)}function aw(r,t){let i=null;for(const a of r.fieldTransforms){const l=t.data.field(a.field),h=C0(a.transform,l||null);h!=null&&(i===null&&(i=jn.empty()),i.set(a.field,h))}return i||null}function M_(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&La(a,l,((h,d)=>iw(h,d)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Nl extends Xc{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Ps extends Xc{constructor(t,i,a,l,h=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function M0(r){const t=new Map;return r.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const a=r.data.field(i);t.set(i,a)}})),t}function V_(r,t,i){const a=new Map;ae(r.length===i.length,32656,{Re:i.length,Ve:r.length});for(let l=0;l<i.length;l++){const h=r[l],d=h.transform,p=t.data.field(h.field);a.set(h.field,nw(d,p,i[l]))}return a}function k_(r,t,i){const a=new Map;for(const l of r){const h=l.transform,d=i.data.field(l.field);a.set(l.field,ew(h,d,t))}return a}class V0 extends Xc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ow extends Xc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lw{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(t.key)&&sw(h,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=pl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=pl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=R0();return this.mutations.forEach((l=>{const h=t.get(l.key),d=h.overlayedDocument;let p=this.applyToLocalView(d,h.mutatedFields);p=i.has(l.key)?null:p;const _=O0(d,p);_!==null&&a.set(l.key,_),d.isValidDocument()||d.convertToNoDocument(Wt.min())})),a}keys(){return this.mutations.reduce(((t,i)=>t.add(i.key)),Fe())}isEqual(t){return this.batchId===t.batchId&&La(this.mutations,t.mutations,((i,a)=>M_(i,a)))&&La(this.baseMutations,t.baseMutations,((i,a)=>M_(i,a)))}}class dm{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){ae(t.mutations.length===a.length,58842,{me:t.mutations.length,fe:a.length});let l=(function(){return $S})();const h=t.mutations;for(let d=0;d<h.length;d++)l=l.insert(h[d].key,a[d].version);return new dm(t,i,a,l)}}/**
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
 */class uw{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var me,xt;function cw(r){switch(r){case X.OK:return At(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return At(15467,{code:r})}}function hw(r){if(r===void 0)return Is("GRPC error has no .code"),X.UNKNOWN;switch(r){case me.OK:return X.OK;case me.CANCELLED:return X.CANCELLED;case me.UNKNOWN:return X.UNKNOWN;case me.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case me.INTERNAL:return X.INTERNAL;case me.UNAVAILABLE:return X.UNAVAILABLE;case me.UNAUTHENTICATED:return X.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case me.NOT_FOUND:return X.NOT_FOUND;case me.ALREADY_EXISTS:return X.ALREADY_EXISTS;case me.PERMISSION_DENIED:return X.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case me.ABORTED:return X.ABORTED;case me.OUT_OF_RANGE:return X.OUT_OF_RANGE;case me.UNIMPLEMENTED:return X.UNIMPLEMENTED;case me.DATA_LOSS:return X.DATA_LOSS;default:return At(39323,{code:r})}}(xt=me||(me={}))[xt.OK=0]="OK",xt[xt.CANCELLED=1]="CANCELLED",xt[xt.UNKNOWN=2]="UNKNOWN",xt[xt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xt[xt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xt[xt.NOT_FOUND=5]="NOT_FOUND",xt[xt.ALREADY_EXISTS=6]="ALREADY_EXISTS",xt[xt.PERMISSION_DENIED=7]="PERMISSION_DENIED",xt[xt.UNAUTHENTICATED=16]="UNAUTHENTICATED",xt[xt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xt[xt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xt[xt.ABORTED=10]="ABORTED",xt[xt.OUT_OF_RANGE=11]="OUT_OF_RANGE",xt[xt.UNIMPLEMENTED=12]="UNIMPLEMENTED",xt[xt.INTERNAL=13]="INTERNAL",xt[xt.UNAVAILABLE=14]="UNAVAILABLE",xt[xt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Jd([4294967295,4294967295],0);class fw{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function zd(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dw(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function mw(r,t){return zd(r,t.toTimestamp())}function Ma(r){return ae(!!r,49232),Wt.fromTimestamp((function(i){const a=Cs(i);return new Xt(a.seconds,a.nanos)})(r))}function k0(r,t){return Bd(r,t).canonicalString()}function Bd(r,t){const i=(function(l){return new ee(["projects",l.projectId,"databases",l.database])})(r).child("documents");return t===void 0?i:i.child(t)}function pw(r){const t=ee.fromString(r);return ae(bw(t),10190,{key:t.toString()}),t}function Hd(r,t){return k0(r.databaseId,t.path)}function gw(r){const t=pw(r);return t.length===4?ee.emptyPath():_w(t)}function yw(r){return new ee(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function _w(r){return ae(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function P_(r,t,i){return{name:Hd(r,t),fields:i.value.mapValue.fields}}function vw(r,t){let i;if(t instanceof Nl)i={update:P_(r,t.key,t.value)};else if(t instanceof V0)i={delete:Hd(r,t.key)};else if(t instanceof Ps)i={update:P_(r,t.key,t.data),updateMask:Aw(t.fieldMask)};else{if(!(t instanceof ow))return At(16599,{Vt:t.type});i={verify:Hd(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map((a=>(function(h,d){const p=d.transform;if(p instanceof xc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Al)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof bl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Oc)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw At(20930,{transform:d.transform})})(0,a)))),t.precondition.isNone||(i.currentDocument=(function(l,h){return h.updateTime!==void 0?{updateTime:mw(l,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:At(27497)})(r,t.precondition)),i}function Ew(r,t){return r&&r.length>0?(ae(t!==void 0,14353),r.map((i=>(function(l,h){let d=l.updateTime?Ma(l.updateTime):Ma(h);return d.isEqual(Wt.min())&&(d=Ma(h)),new rw(d,l.transformResults||[])})(i,t)))):[]}function Tw(r){let t=gw(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){ae(a===1,65062);const A=i.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let h=[];i.where&&(h=(function(D){const P=P0(D);return P instanceof Vr&&_0(P)?P.getFilters():[P]})(i.where));let d=[];i.orderBy&&(d=(function(D){return D.map((P=>(function($){return new Nc(xa($.field),(function(et){switch(et){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(P)))})(i.orderBy));let p=null;i.limit&&(p=(function(D){let P;return P=typeof D=="object"?D.value:D,sm(P)?null:P})(i.limit));let _=null;i.startAt&&(_=(function(D){const P=!!D.before,J=D.values||[];return new Cc(J,P)})(i.startAt));let v=null;return i.endAt&&(v=(function(D){const P=!D.before,J=D.values||[];return new Cc(J,P)})(i.endAt)),qS(t,l,d,h,p,"F",_,v)}function P0(r){return r.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=xa(i.unaryFilter.field);return Ne.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=xa(i.unaryFilter.field);return Ne.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=xa(i.unaryFilter.field);return Ne.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=xa(i.unaryFilter.field);return Ne.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return At(61313);default:return At(60726)}})(r):r.fieldFilter!==void 0?(function(i){return Ne.create(xa(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return At(58110);default:return At(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(i){return Vr.create(i.compositeFilter.filters.map((a=>P0(a))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return At(1026)}})(i.compositeFilter.op))})(r):At(30097,{filter:r})}function xa(r){return Le.fromServerFormat(r.fieldPath)}function Aw(r){const t=[];return r.fields.forEach((i=>t.push(i.canonicalString()))),{fieldPaths:t}}function bw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Sw{constructor(t){this.yt=t}}function ww(r){const t=Tw({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?jd(t,t.limit,"L"):t}/**
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
 */class Rw{constructor(){this.Cn=new Iw}addToCollectionParentIndex(t,i){return this.Cn.add(i),K.resolve()}getCollectionParents(t,i){return K.resolve(this.Cn.getEntries(i))}addFieldIndex(t,i){return K.resolve()}deleteFieldIndex(t,i){return K.resolve()}deleteAllFieldIndexes(t){return K.resolve()}createTargetIndexes(t,i){return K.resolve()}getDocumentsMatchingTarget(t,i){return K.resolve(null)}getIndexType(t,i){return K.resolve(0)}getFieldIndexes(t,i){return K.resolve([])}getNextCollectionGroupToUpdate(t){return K.resolve(null)}getMinOffset(t,i){return K.resolve(Mr.min())}getMinOffsetFromCollectionGroup(t,i){return K.resolve(Mr.min())}updateCollectionGroup(t,i,a){return K.resolve()}updateIndexEntries(t,i){return K.resolve()}}class Iw{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new je(ee.comparator),h=!l.has(a);return this.index[i]=l.add(a),h}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new je(ee.comparator)).toArray()}}/**
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
 */const U_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},U0=41943040;class en{static withCacheSize(t){return new en(t,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(U0,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class Ha{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ha(0)}static cr(){return new Ha(-1)}}/**
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
 */const L_="LruGarbageCollector",Cw=1048576;function j_([r,t],[i,a]){const l=Pt(r,i);return l===0?Pt(t,a):l}class Nw{constructor(t){this.Ir=t,this.buffer=new je(j_),this.Er=0}dr(){return++this.Er}Ar(t){const i=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();j_(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class Dw{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){rt(L_,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Cl(i)?rt(L_,"Ignoring IndexedDB error during garbage collection: ",i):await nm(i)}await this.Vr(3e5)}))}}class xw{constructor(t,i){this.mr=t,this.params=i}calculateTargetCount(t,i){return this.mr.gr(t).next((a=>Math.floor(i/100*a)))}nthSequenceNumber(t,i){if(i===0)return K.resolve(im.ce);const a=new Nw(i);return this.mr.forEachTarget(t,(l=>a.Ar(l.sequenceNumber))).next((()=>this.mr.pr(t,(l=>a.Ar(l))))).next((()=>a.maxValue))}removeTargets(t,i,a){return this.mr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.mr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(U_)):this.getCacheSize(t).next((a=>a<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),U_):this.yr(t,i)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,i){let a,l,h,d,p,_,v;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((D=>(D>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),l=this.params.maximumSequenceNumbersToCollect):l=D,d=Date.now(),this.nthSequenceNumber(t,l)))).next((D=>(a=D,p=Date.now(),this.removeTargets(t,a,i)))).next((D=>(h=D,_=Date.now(),this.removeOrphanedDocuments(t,a)))).next((D=>(v=Date.now(),Da()<=It.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-A}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${h} targets in `+(_-p)+`ms
	Removed ${D} documents in `+(v-_)+`ms
Total Duration: ${v-A}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:D}))))}}function Ow(r,t){return new xw(r,t)}/**
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
 */class Mw{constructor(){this.changes=new ks((t=>t.toString()),((t,i)=>t.isEqual(i))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,Un.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?K.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Vw{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class kw{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next((l=>(a=l,this.remoteDocumentCache.getEntry(t,i)))).next((l=>(a!==null&&pl(a.mutation,l,Bn.empty(),Xt.now()),l)))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.getLocalViewOfDocuments(t,a,Fe()).next((()=>a))))}getLocalViewOfDocuments(t,i,a=Fe()){const l=As();return this.populateOverlays(t,l,i).next((()=>this.computeViews(t,i,l,a).next((h=>{let d=uc();return h.forEach(((p,_)=>{d=d.insert(p,_.overlayedDocument)})),d}))))}getOverlayedDocuments(t,i){const a=As();return this.populateOverlays(t,a,i).next((()=>this.computeViews(t,i,a,Fe())))}populateOverlays(t,i,a){const l=[];return a.forEach((h=>{i.has(h)||l.push(h)})),this.documentOverlayCache.getOverlays(t,l).next((h=>{h.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(t,i,a,l){let h=Dc();const d=ml(),p=(function(){return ml()})();return i.forEach(((_,v)=>{const A=a.get(v.key);l.has(v.key)&&(A===void 0||A.mutation instanceof Ps)?h=h.insert(v.key,v):A!==void 0?(d.set(v.key,A.mutation.getFieldMask()),pl(A.mutation,v,A.mutation.getFieldMask(),Xt.now())):d.set(v.key,Bn.empty())})),this.recalculateAndSaveOverlays(t,h).next((_=>(_.forEach(((v,A)=>d.set(v,A))),i.forEach(((v,A)=>p.set(v,new Vw(A,d.get(v)??null)))),p)))}recalculateAndSaveOverlays(t,i){const a=ml();let l=new sn(((d,p)=>d-p)),h=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next((d=>{for(const p of d)p.keys().forEach((_=>{const v=i.get(_);if(v===null)return;let A=a.get(_)||Bn.empty();A=p.applyToLocalView(v,A),a.set(_,A);const D=(l.get(p.batchId)||Fe()).add(_);l=l.insert(p.batchId,D)}))})).next((()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),v=_.key,A=_.value,D=R0();A.forEach((P=>{if(!h.has(P)){const J=O0(i.get(P),a.get(P));J!==null&&D.set(P,J),h=h.add(P)}})),d.push(this.documentOverlayCache.saveOverlays(t,v,D))}return K.waitFor(d)})).next((()=>a))}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next((a=>this.recalculateAndSaveOverlays(t,a)))}getDocumentsMatchingQuery(t,i,a,l){return(function(d){return Et.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):FS(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next((h=>{const d=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-h.size):K.resolve(As());let p=El,_=h;return d.next((v=>K.forEach(v,((A,D)=>(p<D.largestBatchId&&(p=D.largestBatchId),h.get(A)?K.resolve():this.remoteDocumentCache.getEntry(t,A).next((P=>{_=_.insert(A,P)}))))).next((()=>this.populateOverlays(t,v,h))).next((()=>this.computeViews(t,_,v,Fe()))).next((A=>({batchId:p,changes:w0(A)})))))}))}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new Et(i)).next((a=>{let l=uc();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l}))}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const h=i.collectionGroup;let d=uc();return this.indexManager.getCollectionParents(t,h).next((p=>K.forEach(p,(_=>{const v=(function(D,P){return new Kc(P,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)})(i,_.child(h));return this.getDocumentsMatchingCollectionQuery(t,v,a,l).next((A=>{A.forEach(((D,P)=>{d=d.insert(D,P)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,i,a,l){let h;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next((d=>(h=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,h,l)))).next((d=>{h.forEach(((_,v)=>{const A=v.getKey();d.get(A)===null&&(d=d.insert(A,Un.newInvalidDocument(A)))}));let p=uc();return d.forEach(((_,v)=>{const A=h.get(_);A!==void 0&&pl(A.mutation,v,Bn.empty(),Xt.now()),hm(i,v)&&(p=p.insert(_,v))})),p}))}}/**
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
 */class Pw{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,i){return K.resolve(this.Lr.get(i))}saveBundleMetadata(t,i){return this.Lr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:Ma(l.createTime)}})(i)),K.resolve()}getNamedQuery(t,i){return K.resolve(this.kr.get(i))}saveNamedQuery(t,i){return this.kr.set(i.name,(function(l){return{name:l.name,query:ww(l.bundledQuery),readTime:Ma(l.readTime)}})(i)),K.resolve()}}/**
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
 */class Uw{constructor(){this.overlays=new sn(Et.comparator),this.qr=new Map}getOverlay(t,i){return K.resolve(this.overlays.get(i))}getOverlays(t,i){const a=As();return K.forEach(i,(l=>this.getOverlay(t,l).next((h=>{h!==null&&a.set(l,h)})))).next((()=>a))}saveOverlays(t,i,a){return a.forEach(((l,h)=>{this.St(t,i,h)})),K.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.qr.get(a);return l!==void 0&&(l.forEach((h=>this.overlays=this.overlays.remove(h))),this.qr.delete(a)),K.resolve()}getOverlaysForCollection(t,i,a){const l=As(),h=i.length+1,d=new Et(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const _=p.getNext().value,v=_.getKey();if(!i.isPrefixOf(v.path))break;v.path.length===h&&_.largestBatchId>a&&l.set(_.getKey(),_)}return K.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let h=new sn(((v,A)=>v-A));const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===i&&v.largestBatchId>a){let A=h.get(v.largestBatchId);A===null&&(A=As(),h=h.insert(v.largestBatchId,A)),A.set(v.getKey(),v)}}const p=As(),_=h.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((v,A)=>p.set(v,A))),!(p.size()>=l)););return K.resolve(p)}St(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(a.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new uw(i,a));let h=this.qr.get(i);h===void 0&&(h=Fe(),this.qr.set(i,h)),this.qr.set(i,h.add(a.key))}}/**
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
 */class Lw{constructor(){this.sessionToken=di.EMPTY_BYTE_STRING}getSessionToken(t){return K.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,K.resolve()}}/**
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
 */class mm{constructor(){this.Qr=new je(Ie.$r),this.Ur=new je(Ie.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,i){const a=new Ie(t,i);this.Qr=this.Qr.add(a),this.Ur=this.Ur.add(a)}Wr(t,i){t.forEach((a=>this.addReference(a,i)))}removeReference(t,i){this.Gr(new Ie(t,i))}zr(t,i){t.forEach((a=>this.removeReference(a,i)))}jr(t){const i=new Et(new ee([])),a=new Ie(i,t),l=new Ie(i,t+1),h=[];return this.Ur.forEachInRange([a,l],(d=>{this.Gr(d),h.push(d.key)})),h}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const i=new Et(new ee([])),a=new Ie(i,t),l=new Ie(i,t+1);let h=Fe();return this.Ur.forEachInRange([a,l],(d=>{h=h.add(d.key)})),h}containsKey(t){const i=new Ie(t,0),a=this.Qr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Ie{constructor(t,i){this.key=t,this.Yr=i}static $r(t,i){return Et.comparator(t.key,i.key)||Pt(t.Yr,i.Yr)}static Kr(t,i){return Pt(t.Yr,i.Yr)||Et.comparator(t.key,i.key)}}/**
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
 */class jw{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.tr=1,this.Zr=new je(Ie.$r)}checkEmpty(t){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const h=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new lw(h,i,a,l);this.mutationQueue.push(d);for(const p of l)this.Zr=this.Zr.add(new Ie(p.key,h)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return K.resolve(d)}lookupMutationBatch(t,i){return K.resolve(this.Xr(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.ei(a),h=l<0?0:l;return K.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?rm:this.tr-1)}getAllMutationBatches(t){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Ie(i,0),l=new Ie(i,Number.POSITIVE_INFINITY),h=[];return this.Zr.forEachInRange([a,l],(d=>{const p=this.Xr(d.Yr);h.push(p)})),K.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new je(Pt);return i.forEach((l=>{const h=new Ie(l,0),d=new Ie(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([h,d],(p=>{a=a.add(p.Yr)}))})),K.resolve(this.ti(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let h=a;Et.isDocumentKey(h)||(h=h.child(""));const d=new Ie(new Et(h),0);let p=new je(Pt);return this.Zr.forEachWhile((_=>{const v=_.key.path;return!!a.isPrefixOf(v)&&(v.length===l&&(p=p.add(_.Yr)),!0)}),d),K.resolve(this.ti(p))}ti(t){const i=[];return t.forEach((a=>{const l=this.Xr(a);l!==null&&i.push(l)})),i}removeMutationBatch(t,i){ae(this.ni(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let a=this.Zr;return K.forEach(i.mutations,(l=>{const h=new Ie(l.key,i.batchId);return a=a.delete(h),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Zr=a}))}ir(t){}containsKey(t,i){const a=new Ie(i,0),l=this.Zr.firstAfterOrEqual(a);return K.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,K.resolve()}ni(t,i){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const i=this.ei(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class zw{constructor(t){this.ri=t,this.docs=(function(){return new sn(Et.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),h=l?l.size:0,d=this.ri(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-h,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return K.resolve(a?a.document.mutableCopy():Un.newInvalidDocument(i))}getEntries(t,i){let a=Dc();return i.forEach((l=>{const h=this.docs.get(l);a=a.insert(l,h?h.document.mutableCopy():Un.newInvalidDocument(l))})),K.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let h=Dc();const d=i.path,p=new Et(d.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:v,value:{document:A}}=_.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||ES(vS(A),a)<=0||(l.has(A.key)||hm(i,A))&&(h=h.insert(A.key,A.mutableCopy()))}return K.resolve(h)}getAllFromCollectionGroup(t,i,a,l){At(9500)}ii(t,i){return K.forEach(this.docs,(a=>i(a)))}newChangeBuffer(t){return new Bw(this)}getSize(t){return K.resolve(this.size)}}class Bw extends Mw{constructor(t){super(),this.Nr=t}applyChanges(t){const i=[];return this.changes.forEach(((a,l)=>{l.isValidDocument()?i.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(a)})),K.waitFor(i)}getFromCache(t,i){return this.Nr.getEntry(t,i)}getAllFromCache(t,i){return this.Nr.getEntries(t,i)}}/**
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
 */class Hw{constructor(t){this.persistence=t,this.si=new ks((i=>um(i)),cm),this.lastRemoteSnapshotVersion=Wt.min(),this.highestTargetId=0,this.oi=0,this._i=new mm,this.targetCount=0,this.ai=Ha.ur()}forEachTarget(t,i){return this.si.forEach(((a,l)=>i(l))),K.resolve()}getLastRemoteSnapshotVersion(t){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return K.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.oi&&(this.oi=i),K.resolve()}Pr(t){this.si.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.ai=new Ha(i),this.highestTargetId=i),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,i){return this.Pr(i),this.targetCount+=1,K.resolve()}updateTargetData(t,i){return this.Pr(i),K.resolve()}removeTargetData(t,i){return this.si.delete(i.target),this._i.jr(i.targetId),this.targetCount-=1,K.resolve()}removeTargets(t,i,a){let l=0;const h=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.si.delete(d),h.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)})),K.waitFor(h).next((()=>l))}getTargetCount(t){return K.resolve(this.targetCount)}getTargetData(t,i){const a=this.si.get(i)||null;return K.resolve(a)}addMatchingKeys(t,i,a){return this._i.Wr(i,a),K.resolve()}removeMatchingKeys(t,i,a){this._i.zr(i,a);const l=this.persistence.referenceDelegate,h=[];return l&&i.forEach((d=>{h.push(l.markPotentiallyOrphaned(t,d))})),K.waitFor(h)}removeMatchingKeysForTargetId(t,i){return this._i.jr(i),K.resolve()}getMatchingKeysForTargetId(t,i){const a=this._i.Hr(i);return K.resolve(a)}containsKey(t,i){return K.resolve(this._i.containsKey(i))}}/**
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
 */class L0{constructor(t,i){this.ui={},this.overlays={},this.ci=new im(0),this.li=!1,this.li=!0,this.hi=new Lw,this.referenceDelegate=t(this),this.Pi=new Hw(this),this.indexManager=new Rw,this.remoteDocumentCache=(function(l){return new zw(l)})((a=>this.referenceDelegate.Ti(a))),this.serializer=new Sw(i),this.Ii=new Pw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new Uw,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.ui[t.toKey()];return a||(a=new jw(i,this.referenceDelegate),this.ui[t.toKey()]=a),a}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,i,a){rt("MemoryPersistence","Starting transaction:",t);const l=new qw(this.ci.next());return this.referenceDelegate.Ei(),a(l).next((h=>this.referenceDelegate.di(l).next((()=>h)))).toPromise().then((h=>(l.raiseOnCommittedEvent(),h)))}Ai(t,i){return K.or(Object.values(this.ui).map((a=>()=>a.containsKey(t,i))))}}class qw extends AS{constructor(t){super(),this.currentSequenceNumber=t}}class pm{constructor(t){this.persistence=t,this.Ri=new mm,this.Vi=null}static mi(t){return new pm(t)}get fi(){if(this.Vi)return this.Vi;throw At(60996)}addReference(t,i,a){return this.Ri.addReference(a,i),this.fi.delete(a.toString()),K.resolve()}removeReference(t,i,a){return this.Ri.removeReference(a,i),this.fi.add(a.toString()),K.resolve()}markPotentiallyOrphaned(t,i){return this.fi.add(i.toString()),K.resolve()}removeTarget(t,i){this.Ri.jr(i.targetId).forEach((l=>this.fi.add(l.toString())));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next((l=>{l.forEach((h=>this.fi.add(h.toString())))})).next((()=>a.removeTargetData(t,i)))}Ei(){this.Vi=new Set}di(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.fi,(a=>{const l=Et.fromPath(a);return this.gi(t,l).next((h=>{h||i.removeEntry(l,Wt.min())}))})).next((()=>(this.Vi=null,i.apply(t))))}updateLimboDocument(t,i){return this.gi(t,i).next((a=>{a?this.fi.delete(i.toString()):this.fi.add(i.toString())}))}Ti(t){return 0}gi(t,i){return K.or([()=>K.resolve(this.Ri.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.Ai(t,i)])}}class Mc{constructor(t,i){this.persistence=t,this.pi=new ks((a=>wS(a.path)),((a,l)=>a.isEqual(l))),this.garbageCollector=Ow(this,i)}static mi(t,i){return new Mc(t,i)}Ei(){}di(t){return K.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}gr(t){const i=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((a=>i.next((l=>a+l))))}wr(t){let i=0;return this.pr(t,(a=>{i++})).next((()=>i))}pr(t,i){return K.forEach(this.pi,((a,l)=>this.br(t,a,l).next((h=>h?K.resolve():i(l)))))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.ii(t,(d=>this.br(t,d,i).next((p=>{p||(a++,h.removeEntry(d,Wt.min()))})))).next((()=>h.apply(t))).next((()=>a))}markPotentiallyOrphaned(t,i){return this.pi.set(i,t.currentSequenceNumber),K.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),K.resolve()}removeReference(t,i,a){return this.pi.set(a,t.currentSequenceNumber),K.resolve()}updateLimboDocument(t,i){return this.pi.set(i,t.currentSequenceNumber),K.resolve()}Ti(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=mc(t.data.value)),i}br(t,i,a){return K.or([()=>this.persistence.Ai(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.pi.get(i);return K.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class gm{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Es=a,this.ds=l}static As(t,i){let a=Fe(),l=Fe();for(const h of i.docChanges)switch(h.type){case 0:a=a.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new gm(t,i.fromCache,a,l)}}/**
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
 */class Gw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Fw{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return jA()?8:bS(Ke())>0?6:4})()}initialize(t,i){this.ps=t,this.indexManager=i,this.Rs=!0}getDocumentsMatchingQuery(t,i,a,l){const h={result:null};return this.ys(t,i).next((d=>{h.result=d})).next((()=>{if(!h.result)return this.ws(t,i,l,a).next((d=>{h.result=d}))})).next((()=>{if(h.result)return;const d=new Gw;return this.Ss(t,i,d).next((p=>{if(h.result=p,this.Vs)return this.bs(t,i,d,p.size)}))})).next((()=>h.result))}bs(t,i,a,l){return a.documentReadCount<this.fs?(Da()<=It.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",ol(i),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),K.resolve()):(Da()<=It.DEBUG&&rt("QueryEngine","Query:",ol(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.gs*l?(Da()<=It.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",ol(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ws(i))):K.resolve())}ys(t,i){if(x_(i))return K.resolve(null);let a=ws(i);return this.indexManager.getIndexType(t,a).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=jd(i,null,"F"),a=ws(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next((h=>{const d=Fe(...h);return this.ps.getDocuments(t,d).next((p=>this.indexManager.getMinOffset(t,a).next((_=>{const v=this.Ds(i,p);return this.Cs(i,v,d,_.readTime)?this.ys(t,jd(i,null,"F")):this.vs(t,v,i,_)}))))})))))}ws(t,i,a,l){return x_(i)||l.isEqual(Wt.min())?K.resolve(null):this.ps.getDocuments(t,a).next((h=>{const d=this.Ds(i,h);return this.Cs(i,d,a,l)?K.resolve(null):(Da()<=It.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),ol(i)),this.vs(t,d,i,_S(l,El)).next((p=>p)))}))}Ds(t,i){let a=new je(KS(t));return i.forEach(((l,h)=>{hm(t,h)&&(a=a.add(h))})),a}Cs(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const h=t.limitType==="F"?i.last():i.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}Ss(t,i,a){return Da()<=It.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",ol(i)),this.ps.getDocumentsMatchingQuery(t,i,Mr.min(),a)}vs(t,i,a,l){return this.ps.getDocumentsMatchingQuery(t,a,l).next((h=>(i.forEach((d=>{h=h.insert(d.key,d)})),h)))}}/**
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
 */const Yw="LocalStore";class Kw{constructor(t,i,a,l){this.persistence=t,this.Fs=i,this.serializer=l,this.Ms=new sn(Pt),this.xs=new ks((h=>um(h)),cm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(a)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>t.collect(i,this.Ms)))}}function Qw(r,t,i,a){return new Kw(r,t,i,a)}async function j0(r,t){const i=$t(r);return await i.persistence.runTransaction("Handle user change","readonly",(a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next((h=>(l=h,i.Bs(t),i.mutationQueue.getAllMutationBatches(a)))).next((h=>{const d=[],p=[];let _=Fe();for(const v of l){d.push(v.batchId);for(const A of v.mutations)_=_.add(A.key)}for(const v of h){p.push(v.batchId);for(const A of v.mutations)_=_.add(A.key)}return i.localDocuments.getDocuments(a,_).next((v=>({Ls:v,removedBatchIds:d,addedBatchIds:p})))}))}))}function Xw(r,t){const i=$t(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(a=>{const l=t.batch.keys(),h=i.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,v,A){const D=v.batch,P=D.keys();let J=K.resolve();return P.forEach(($=>{J=J.next((()=>A.getEntry(_,$))).next((st=>{const et=v.docVersions.get($);ae(et!==null,48541),st.version.compareTo(et)<0&&(D.applyToRemoteDocument(st,v),st.isValidDocument()&&(st.setReadTime(v.commitVersion),A.addEntry(st)))}))})),J.next((()=>p.mutationQueue.removeMutationBatch(_,D)))})(i,a,t,h).next((()=>h.apply(a))).next((()=>i.mutationQueue.performConsistencyCheck(a))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,(function(p){let _=Fe();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(_=_.add(p.batch.mutations[v].key));return _})(t)))).next((()=>i.localDocuments.getDocuments(a,l)))}))}function $w(r){const t=$t(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>t.Pi.getLastRemoteSnapshotVersion(i)))}function Zw(r,t){const i=$t(r);return i.persistence.runTransaction("Get next mutation batch","readonly",(a=>(t===void 0&&(t=rm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t))))}class z_{constructor(){this.activeTargetIds=WS()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jw{constructor(){this.Mo=new z_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,i,a){this.xo[t]=i}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new z_,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ww{Oo(t){}shutdown(){}}/**
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
 */const B_="ConnectivityMonitor";class H_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){rt(B_,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){rt(B_,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cc=null;function qd(){return cc===null?cc=(function(){return 268435456+Math.round(2147483648*Math.random())})():cc++,"0x"+cc.toString(16)}/**
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
 */const Ed="RestConnection",tR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eR{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=i+"://"+t.host,this.Ko=`projects/${a}/databases/${l}`,this.Wo=this.databaseId.database===Rc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}Go(t,i,a,l,h){const d=qd(),p=this.zo(t,i.toUriEncodedString());rt(Ed,`Sending RPC '${t}' ${d}:`,p,a);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,l,h);const{host:v}=new URL(p),A=Ga(v);return this.Jo(t,p,_,a,A).then((D=>(rt(Ed,`Received RPC '${t}' ${d}: `,D),D)),(D=>{throw Yc(Ed,`RPC '${t}' ${d} failed with error: `,D,"url: ",p,"request:",a),D}))}Ho(t,i,a,l,h,d){return this.Go(t,i,a,l,h)}jo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ya})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,h)=>t[h]=l)),a&&a.headers.forEach(((l,h)=>t[h]=l))}zo(t,i){const a=tR[t];return`${this.Uo}/v1/${i}:${a}`}terminate(){}}/**
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
 */class nR{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const qe="WebChannelConnection";class iR extends eR{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,i,a,l,h){const d=qd();return new Promise(((p,_)=>{const v=new Zv;v.setWithCredentials(!0),v.listenOnce(Jv.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case dc.NO_ERROR:const D=v.getResponseJson();rt(qe,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(D)),p(D);break;case dc.TIMEOUT:rt(qe,`RPC '${t}' ${d} timed out`),_(new lt(X.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const P=v.getStatus();if(rt(qe,`RPC '${t}' ${d} failed with status:`,P,"response text:",v.getResponseText()),P>0){let J=v.getResponseJson();Array.isArray(J)&&(J=J[0]);const $=J?.error;if($&&$.status&&$.message){const st=(function(gt){const yt=gt.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(yt)>=0?yt:X.UNKNOWN})($.status);_(new lt(st,$.message))}else _(new lt(X.UNKNOWN,"Server responded with status "+v.getStatus()))}else _(new lt(X.UNAVAILABLE,"Connection failed."));break;default:At(9055,{l_:t,streamId:d,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{rt(qe,`RPC '${t}' ${d} completed.`)}}));const A=JSON.stringify(l);rt(qe,`RPC '${t}' ${d} sending request:`,l),v.send(i,"POST",A,a,15)}))}T_(t,i,a){const l=qd(),h=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=e0(),p=t0(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,i,a),_.encodeInitMessageHeaders=!0;const A=h.join("");rt(qe,`Creating RPC '${t}' stream ${l}: ${A}`,_);const D=d.createWebChannel(A,_);this.I_(D);let P=!1,J=!1;const $=new nR({Yo:et=>{J?rt(qe,`Not sending because RPC '${t}' stream ${l} is closed:`,et):(P||(rt(qe,`Opening RPC '${t}' stream ${l} transport.`),D.open(),P=!0),rt(qe,`RPC '${t}' stream ${l} sending:`,et),D.send(et))},Zo:()=>D.close()}),st=(et,gt,yt)=>{et.listen(gt,(pt=>{try{yt(pt)}catch(Gt){setTimeout((()=>{throw Gt}),0)}}))};return st(D,cl.EventType.OPEN,(()=>{J||(rt(qe,`RPC '${t}' stream ${l} transport opened.`),$.o_())})),st(D,cl.EventType.CLOSE,(()=>{J||(J=!0,rt(qe,`RPC '${t}' stream ${l} transport closed`),$.a_(),this.E_(D))})),st(D,cl.EventType.ERROR,(et=>{J||(J=!0,Yc(qe,`RPC '${t}' stream ${l} transport errored. Name:`,et.name,"Message:",et.message),$.a_(new lt(X.UNAVAILABLE,"The operation could not be completed")))})),st(D,cl.EventType.MESSAGE,(et=>{if(!J){const gt=et.data[0];ae(!!gt,16349);const yt=gt,pt=yt?.error||yt[0]?.error;if(pt){rt(qe,`RPC '${t}' stream ${l} received error:`,pt);const Gt=pt.status;let _t=(function(b){const R=me[b];if(R!==void 0)return hw(R)})(Gt),Ft=pt.message;_t===void 0&&(_t=X.INTERNAL,Ft="Unknown error status: "+Gt+" with message "+pt.message),J=!0,$.a_(new lt(_t,Ft)),D.close()}else rt(qe,`RPC '${t}' stream ${l} received:`,gt),$.u_(gt)}})),st(p,Wv.STAT_EVENT,(et=>{et.stat===Md.PROXY?rt(qe,`RPC '${t}' stream ${l} detected buffering proxy`):et.stat===Md.NOPROXY&&rt(qe,`RPC '${t}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((i=>i===t))}}function Td(){return typeof document<"u"?document:null}/**
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
 */function $c(r){return new fw(r,!0)}/**
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
 */class z0{constructor(t,i,a=1e3,l=1.5,h=6e4){this.Mi=t,this.timerId=i,this.d_=a,this.A_=l,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),l=Math.max(0,i-a);l>0&&rt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const q_="PersistentStream";class rR{constructor(t,i,a,l,h,d,p,_){this.Mi=t,this.S_=a,this.b_=l,this.connection=h,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new z0(t,i)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,i){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():i&&i.code===X.RESOURCE_EXHAUSTED?(Is(i.toString()),Is("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):i&&i.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(i)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),i=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([a,l])=>{this.D_===i&&this.G_(a,l)}),(a=>{t((()=>{const l=new lt(X.UNKNOWN,"Fetching auth token failed: "+a.message);return this.z_(l)}))}))}G_(t,i){const a=this.W_(this.D_);this.stream=this.j_(t,i),this.stream.Xo((()=>{a((()=>this.listener.Xo()))})),this.stream.t_((()=>{a((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{a((()=>this.z_(l)))})),this.stream.onMessage((l=>{a((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return rt(q_,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return i=>{this.Mi.enqueueAndForget((()=>this.D_===t?i():(rt(q_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sR extends rR{constructor(t,i,a,l,h,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=h}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,i){return this.connection.T_("Write",t,i)}J_(t){return ae(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ae(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ae(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const i=Ew(t.writeResults,t.commitTime),a=Ma(t.commitTime);return this.listener.na(a,i)}ra(){const t={};t.database=yw(this.serializer),this.q_(t)}ea(t){const i={streamToken:this.lastStreamToken,writes:t.map((a=>vw(this.serializer,a)))};this.q_(i)}}/**
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
 */class aR{}class oR extends aR{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new lt(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,d])=>this.connection.Go(t,Bd(i,a),l,h,d))).catch((h=>{throw h.name==="FirebaseError"?(h.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new lt(X.UNKNOWN,h.toString())}))}Ho(t,i,a,l,h){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(t,Bd(i,a),l,d,p,h))).catch((d=>{throw d.name==="FirebaseError"?(d.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new lt(X.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class lR{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Is(i),this.aa=!1):rt("OnlineStateTracker",i)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Dl="RemoteStore";class uR{constructor(t,i,a,l,h){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=h,this.Aa.Oo((d=>{a.enqueueAndForget((async()=>{Ol(this)&&(rt(Dl,"Restarting streams for network reachability change."),await(async function(_){const v=$t(_);v.Ea.add(4),await xl(v),v.Ra.set("Unknown"),v.Ea.delete(4),await Zc(v)})(this))}))})),this.Ra=new lR(a,l)}}async function Zc(r){if(Ol(r))for(const t of r.da)await t(!0)}async function xl(r){for(const t of r.da)await t(!1)}function Ol(r){return $t(r).Ea.size===0}async function B0(r,t,i){if(!Cl(t))throw t;r.Ea.add(1),await xl(r),r.Ra.set("Offline"),i||(i=()=>$w(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{rt(Dl,"Retrying IndexedDB access"),await i(),r.Ea.delete(1),await Zc(r)}))}function H0(r,t){return t().catch((i=>B0(r,i,t)))}async function Jc(r){const t=$t(r),i=kr(t);let a=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:rm;for(;cR(t);)try{const l=await Zw(t.localStore,a);if(l===null){t.Ta.length===0&&i.L_();break}a=l.batchId,hR(t,l)}catch(l){await B0(t,l)}q0(t)&&G0(t)}function cR(r){return Ol(r)&&r.Ta.length<10}function hR(r,t){r.Ta.push(t);const i=kr(r);i.O_()&&i.X_&&i.ea(t.mutations)}function q0(r){return Ol(r)&&!kr(r).x_()&&r.Ta.length>0}function G0(r){kr(r).start()}async function fR(r){kr(r).ra()}async function dR(r){const t=kr(r);for(const i of r.Ta)t.ea(i.mutations)}async function mR(r,t,i){const a=r.Ta.shift(),l=dm.from(a,t,i);await H0(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await Jc(r)}async function pR(r,t){t&&kr(r).X_&&await(async function(a,l){if((function(d){return cw(d)&&d!==X.ABORTED})(l.code)){const h=a.Ta.shift();kr(a).B_(),await H0(a,(()=>a.remoteSyncer.rejectFailedWrite(h.batchId,l))),await Jc(a)}})(r,t),q0(r)&&G0(r)}async function G_(r,t){const i=$t(r);i.asyncQueue.verifyOperationInProgress(),rt(Dl,"RemoteStore received new credentials");const a=Ol(i);i.Ea.add(3),await xl(i),a&&i.Ra.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.Ea.delete(3),await Zc(i)}async function gR(r,t){const i=$t(r);t?(i.Ea.delete(2),await Zc(i)):t||(i.Ea.add(2),await xl(i),i.Ra.set("Unknown"))}function kr(r){return r.fa||(r.fa=(function(i,a,l){const h=$t(i);return h.sa(),new sR(a,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:fR.bind(null,r),r_:pR.bind(null,r),ta:dR.bind(null,r),na:mR.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Jc(r)):(await r.fa.stop(),r.Ta.length>0&&(rt(Dl,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class ym{constructor(t,i,a,l,h){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=h,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,h){const d=Date.now()+a,p=new ym(t,i,d,l,h);return p.start(a),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F0(r,t){if(Is("AsyncQueue",`${t}: ${r}`),Cl(r))return new lt(X.UNAVAILABLE,`${t}: ${r}`);throw r}class yR{constructor(){this.queries=F_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(i,a){const l=$t(i),h=l.queries;l.queries=F_(),h.forEach(((d,p)=>{for(const _ of p.Sa)_.onError(a)}))})(this,new lt(X.ABORTED,"Firestore shutting down"))}}function F_(){return new ks((r=>b0(r)),A0)}function _R(r){r.Ca.forEach((t=>{t.next()}))}var Y_,K_;(K_=Y_||(Y_={})).Ma="default",K_.Cache="cache";const vR="SyncEngine";class ER{constructor(t,i,a,l,h,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new ks((p=>b0(p)),A0),this.Iu=new Map,this.Eu=new Set,this.du=new sn(Et.comparator),this.Au=new Map,this.Ru=new mm,this.Vu={},this.mu=new Map,this.fu=Ha.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TR(r,t,i){const a=wR(r);try{const l=await(function(d,p){const _=$t(d),v=Xt.now(),A=p.reduce(((J,$)=>J.add($.key)),Fe());let D,P;return _.persistence.runTransaction("Locally write mutations","readwrite",(J=>{let $=Dc(),st=Fe();return _.Ns.getEntries(J,A).next((et=>{$=et,$.forEach(((gt,yt)=>{yt.isValidDocument()||(st=st.add(gt))}))})).next((()=>_.localDocuments.getOverlayedDocuments(J,$))).next((et=>{D=et;const gt=[];for(const yt of p){const pt=aw(yt,D.get(yt.key).overlayedDocument);pt!=null&&gt.push(new Ps(yt.key,pt,p0(pt.value.mapValue),qi.exists(!0)))}return _.mutationQueue.addMutationBatch(J,v,gt,p)})).next((et=>{P=et;const gt=et.applyToLocalDocumentSet(D,st);return _.documentOverlayCache.saveOverlays(J,et.batchId,gt)}))})).then((()=>({batchId:P.batchId,changes:w0(D)})))})(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),(function(d,p,_){let v=d.Vu[d.currentUser.toKey()];v||(v=new sn(Pt)),v=v.insert(p,_),d.Vu[d.currentUser.toKey()]=v})(a,l.batchId,i),await Wc(a,l.changes),await Jc(a.remoteStore)}catch(l){const h=F0(l,"Failed to persist write");i.reject(h)}}function Q_(r,t,i){const a=$t(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.Tu.forEach(((h,d)=>{const p=d.view.va(t);p.snapshot&&l.push(p.snapshot)})),(function(d,p){const _=$t(d);_.onlineState=p;let v=!1;_.queries.forEach(((A,D)=>{for(const P of D.Sa)P.va(p)&&(v=!0)})),v&&_R(_)})(a.eventManager,t),l.length&&a.Pu.H_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function AR(r,t){const i=$t(r),a=t.batch.batchId;try{const l=await Xw(i.localStore,t);K0(i,a,null),Y0(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await Wc(i,l)}catch(l){await nm(l)}}async function bR(r,t,i){const a=$t(r);try{const l=await(function(d,p){const _=$t(d);return _.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let A;return _.mutationQueue.lookupMutationBatch(v,p).next((D=>(ae(D!==null,37113),A=D.keys(),_.mutationQueue.removeMutationBatch(v,D)))).next((()=>_.mutationQueue.performConsistencyCheck(v))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(v,A,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,A))).next((()=>_.localDocuments.getDocuments(v,A)))}))})(a.localStore,t);K0(a,t,i),Y0(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await Wc(a,l)}catch(l){await nm(l)}}function Y0(r,t){(r.mu.get(t)||[]).forEach((i=>{i.resolve()})),r.mu.delete(t)}function K0(r,t,i){const a=$t(r);let l=a.Vu[a.currentUser.toKey()];if(l){const h=l.get(t);h&&(i?h.reject(i):h.resolve(),l=l.remove(t)),a.Vu[a.currentUser.toKey()]=l}}async function Wc(r,t,i){const a=$t(r),l=[],h=[],d=[];a.Tu.isEmpty()||(a.Tu.forEach(((p,_)=>{d.push(a.pu(_,t,i).then((v=>{if((v||i)&&a.isPrimaryClient){const A=v?!v.fromCache:i?.targetChanges.get(_.targetId)?.current;a.sharedClientState.updateQueryState(_.targetId,A?"current":"not-current")}if(v){l.push(v);const A=gm.As(_.targetId,v);h.push(A)}})))})),await Promise.all(d),a.Pu.H_(l),await(async function(_,v){const A=$t(_);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",(D=>K.forEach(v,(P=>K.forEach(P.Es,(J=>A.persistence.referenceDelegate.addReference(D,P.targetId,J))).next((()=>K.forEach(P.ds,(J=>A.persistence.referenceDelegate.removeReference(D,P.targetId,J)))))))))}catch(D){if(!Cl(D))throw D;rt(Yw,"Failed to update sequence numbers: "+D)}for(const D of v){const P=D.targetId;if(!D.fromCache){const J=A.Ms.get(P),$=J.snapshotVersion,st=J.withLastLimboFreeSnapshotVersion($);A.Ms=A.Ms.insert(P,st)}}})(a.localStore,h))}async function SR(r,t){const i=$t(r);if(!i.currentUser.isEqual(t)){rt(vR,"User change. New user:",t.toKey());const a=await j0(i.localStore,t);i.currentUser=t,(function(h,d){h.mu.forEach((p=>{p.forEach((_=>{_.reject(new lt(X.CANCELLED,d))}))})),h.mu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Wc(i,a.Ls)}}function wR(r){const t=$t(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=AR.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bR.bind(null,t),t}class Vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$c(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,i){return null}Mu(t,i){return null}vu(t){return Qw(this.persistence,new Fw,t.initialUser,this.serializer)}Cu(t){return new L0(pm.mi,this.serializer)}Du(t){return new Jw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vc.provider={build:()=>new Vc};class RR extends Vc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,i){ae(this.persistence.referenceDelegate instanceof Mc,46915);const a=this.persistence.referenceDelegate.garbageCollector;return new Dw(a,t.asyncQueue,i)}Cu(t){const i=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new L0((a=>Mc.mi(a,i)),this.serializer)}}class Gd{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Q_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=SR.bind(null,this.syncEngine),await gR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new yR})()}createDatastore(t){const i=$c(t.databaseInfo.databaseId),a=(function(h){return new iR(h)})(t.databaseInfo);return(function(h,d,p,_){return new oR(h,d,p,_)})(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return(function(a,l,h,d,p){return new uR(a,l,h,d,p)})(this.localStore,this.datastore,t.asyncQueue,(i=>Q_(this.syncEngine,i,0)),(function(){return H_.v()?new H_:new Ww})())}createSyncEngine(t,i){return(function(l,h,d,p,_,v,A){const D=new ER(l,h,d,p,_,v);return A&&(D.gu=!0),D})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){await(async function(i){const a=$t(i);rt(Dl,"RemoteStore shutting down."),a.Ea.add(5),await xl(a),a.Aa.shutdown(),a.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Gd.provider={build:()=>new Gd};/**
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
 */const Pr="FirestoreClient";class IR{constructor(t,i,a,l,h){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=Ge.UNAUTHENTICATED,this.clientId=tm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(a,(async d=>{rt(Pr,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(a,(d=>(rt(Pr,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=F0(i,"Failed to shutdown persistence");t.reject(a)}})),t.promise}}async function Ad(r,t){r.asyncQueue.verifyOperationInProgress(),rt(Pr,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let a=i.initialUser;r.setCredentialChangeListener((async l=>{a.isEqual(l)||(await j0(t.localStore,l),a=l)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function X_(r,t){r.asyncQueue.verifyOperationInProgress();const i=await CR(r);rt(Pr,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener((a=>G_(t.remoteStore,a))),r.setAppCheckTokenChangeListener(((a,l)=>G_(t.remoteStore,l))),r._onlineComponents=t}async function CR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){rt(Pr,"Using user provided OfflineComponentProvider");try{await Ad(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!(function(l){return l.name==="FirebaseError"?l.code===X.FAILED_PRECONDITION||l.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;Yc("Error using user provided cache. Falling back to memory cache: "+i),await Ad(r,new Vc)}}else rt(Pr,"Using default OfflineComponentProvider"),await Ad(r,new RR(void 0));return r._offlineComponents}async function NR(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(rt(Pr,"Using user provided OnlineComponentProvider"),await X_(r,r._uninitializedComponentsProvider._online)):(rt(Pr,"Using default OnlineComponentProvider"),await X_(r,new Gd))),r._onlineComponents}function DR(r){return NR(r).then((t=>t.syncEngine))}/**
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
 */function Q0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const $_=new Map;/**
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
 */const X0="firestore.googleapis.com",Z_=!0;class J_{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new lt(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=X0,this.ssl=Z_}else this.host=t.host,this.ssl=t.ssl??Z_;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=U0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Cw)throw new lt(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yS("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q0(t.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(a,l){return a.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class th{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new lt(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new lt(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J_(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new oS;switch(a.type){case"firstParty":return new hS(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new lt(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=$_.get(i);a&&(rt("ComponentProvider","Removing Datastore"),$_.delete(i),a.terminate())})(this),Promise.resolve()}}function xR(r,t,i,a={}){r=a0(r,th);const l=Ga(t),h=r._getSettings(),d={...h,emulatorOptions:r._getEmulatorOptions()},p=`${t}:${i}`;l&&(zv(`https://${p}`),Bv("Firestore",!0)),h.host!==X0&&h.host!==p&&Yc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...h,host:p,ssl:l,emulatorOptions:a};if(!Or(_,d)&&(r._setSettings(_),a.mockUserToken)){let v,A;if(typeof a.mockUserToken=="string")v=a.mockUserToken,A=Ge.MOCK_USER;else{v=xA(a.mockUserToken,r._app?.options.projectId);const D=a.mockUserToken.sub||a.mockUserToken.user_id;if(!D)throw new lt(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ge(D)}r._authCredentials=new lS(new i0(v,A))}}/**
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
 */class _m{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new _m(this.firestore,t,this._query)}}class Ye{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ye(this.firestore,t,this._key)}toJSON(){return{type:Ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,i,a){if(Il(i,Ye._jsonSchema))return new Ye(t,a||null,new Et(ee.fromString(i.referencePath)))}}Ye._jsonSchemaVersion="firestore/documentReference/1.0",Ye._jsonSchema={type:pe("string",Ye._jsonSchemaVersion),referencePath:pe("string")};class Dr extends _m{constructor(t,i,a){super(t,i,GS(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ye(this.firestore,null,new Et(t))}withConverter(t){return new Dr(this.firestore,t,this._path)}}function $0(r,t,...i){if(r=rn(r),r0("collection","path",t),r instanceof th){const a=ee.fromString(t,...i);return E_(a),new Dr(r,null,a)}{if(!(r instanceof Ye||r instanceof Dr))throw new lt(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ee.fromString(t,...i));return E_(a),new Dr(r.firestore,null,a)}}function OR(r,t,...i){if(r=rn(r),arguments.length===1&&(t=tm.newId()),r0("doc","path",t),r instanceof th){const a=ee.fromString(t,...i);return v_(a),new Ye(r,null,new Et(a))}{if(!(r instanceof Ye||r instanceof Dr))throw new lt(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ee.fromString(t,...i));return v_(a),new Ye(r.firestore,r instanceof Dr?r.converter:null,new Et(a))}}/**
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
 */const W_="AsyncQueue";class tv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new z0(this,"async_queue_retry"),this._c=()=>{const a=Td();a&&rt(W_,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=t;const i=Td();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const i=Td();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Ss;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Cl(t))throw t;rt(W_,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const i=this.ac.then((()=>(this.rc=!0,t().catch((a=>{throw this.nc=a,this.rc=!1,Is("INTERNAL UNHANDLED ERROR: ",ev(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(t,i,a){this.uc(),this.oc.indexOf(t)>-1&&(i=0);const l=ym.createAndSchedule(this,t,i,a,(h=>this.hc(h)));return this.tc.push(l),l}uc(){this.nc&&At(47125,{Pc:ev(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const i of this.tc)if(i.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const i=this.tc.indexOf(t);this.tc.splice(i,1)}}function ev(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Z0 extends th{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new tv,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tv(t),this._firestoreClient=void 0,await t}}}function MR(r,t){const i=typeof r=="object"?r:Zd(),a=typeof r=="string"?r:Rc,l=Vs(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const h=NA("firestore");h&&xR(l,...h)}return l}function VR(r){if(r._terminated)throw new lt(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||kR(r),r._firestoreClient}function kR(r){const t=r._freezeSettings(),i=(function(l,h,d,p){return new NS(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Q0(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new IR(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(l){const h=l?._online.build();return{_offline:l?._offline.build(h),_online:h}})(r._componentsProvider))}/**
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
 */class zn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zn(di.fromBase64String(t))}catch(i){throw new lt(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new zn(di.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Il(t,zn._jsonSchema))return zn.fromBase64String(t.bytes)}}zn._jsonSchemaVersion="firestore/bytes/1.0",zn._jsonSchema={type:pe("string",zn._jsonSchemaVersion),bytes:pe("string")};/**
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
 */class vm{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new lt(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class J0{constructor(t){this._methodName=t}}/**
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
 */class Gi{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new lt(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new lt(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Pt(this._lat,t._lat)||Pt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gi._jsonSchemaVersion}}static fromJSON(t){if(Il(t,Gi._jsonSchema))return new Gi(t.latitude,t.longitude)}}Gi._jsonSchemaVersion="firestore/geoPoint/1.0",Gi._jsonSchema={type:pe("string",Gi._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
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
 */class Fi{constructor(t){this._values=(t||[]).map((i=>i))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(a,l){if(a.length!==l.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==l[h])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Fi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Il(t,Fi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((i=>typeof i=="number")))return new Fi(t.vectorValues);throw new lt(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fi._jsonSchemaVersion="firestore/vectorValue/1.0",Fi._jsonSchema={type:pe("string",Fi._jsonSchemaVersion),vectorValues:pe("object")};/**
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
 */const PR=/^__.*__$/;class UR{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new Ps(t,this.data,this.fieldMask,i,this.fieldTransforms):new Nl(t,this.data,i,this.fieldTransforms)}}function W0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw At(40011,{Ac:r})}}class Em{constructor(t,i,a,l,h,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,h===void 0&&this.Rc(),this.fieldTransforms=h||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Em({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.gc(t),a}yc(t){const i=this.path?.child(t),a=this.Vc({path:i,fc:!1});return a.Rc(),a}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return kc(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((i=>t.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>t.isPrefixOf(i.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(W0(this.Ac)&&PR.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class LR{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||$c(t)}Cc(t,i,a,l=!1){return new Em({Ac:t,methodName:i,Dc:a,path:Le.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jR(r){const t=r._freezeSettings(),i=$c(r._databaseId);return new LR(r._databaseId,!!t.ignoreUndefinedProperties,i)}function zR(r,t,i,a,l,h={}){const d=r.Cc(h.merge||h.mergeFields?2:0,t,i,l);iE("Data must be an object, but it was:",d,a);const p=eE(a,d);let _,v;if(h.merge)_=new Bn(d.fieldMask),v=d.fieldTransforms;else if(h.mergeFields){const A=[];for(const D of h.mergeFields){const P=BR(t,D,i);if(!d.contains(P))throw new lt(X.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);qR(A,P)||A.push(P)}_=new Bn(A),v=d.fieldTransforms.filter((D=>_.covers(D.field)))}else _=null,v=d.fieldTransforms;return new UR(new jn(p),_,v)}function tE(r,t){if(nE(r=rn(r)))return iE("Unsupported field value:",t,r),eE(r,t);if(r instanceof J0)return(function(a,l){if(!W0(l.Ac))throw l.Sc(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${a._methodName}() is not currently supported inside arrays`);const h=a._toFieldTransform(l);h&&l.fieldTransforms.push(h)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(a,l){const h=[];let d=0;for(const p of a){let _=tE(p,l.wc(d));_==null&&(_={nullValue:"NULL_VALUE"}),h.push(_),d++}return{arrayValue:{values:h}}})(r,t)}return(function(a,l){if((a=rn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return tw(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const h=Xt.fromDate(a);return{timestampValue:zd(l.serializer,h)}}if(a instanceof Xt){const h=new Xt(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:zd(l.serializer,h)}}if(a instanceof Gi)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof zn)return{bytesValue:dw(l.serializer,a._byteString)};if(a instanceof Ye){const h=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(h))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:k0(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof Fi)return(function(d,p){return{mapValue:{fields:{[d0]:{stringValue:m0},[kd]:{arrayValue:{values:d.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return fm(p.serializer,v)}))}}}}}})(a,l);throw l.Sc(`Unsupported field value: ${em(a)}`)})(r,t)}function eE(r,t){const i={};return l0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ka(r,((a,l)=>{const h=tE(l,t.mc(a));h!=null&&(i[a]=h)})),{mapValue:{fields:i}}}function nE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Xt||r instanceof Gi||r instanceof zn||r instanceof Ye||r instanceof J0||r instanceof Fi)}function iE(r,t,i){if(!nE(i)||!s0(i)){const a=em(i);throw a==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+a)}}function BR(r,t,i){if((t=rn(t))instanceof vm)return t._internalPath;if(typeof t=="string")return rE(r,t);throw kc("Field path arguments must be of type string or ",r,!1,void 0,i)}const HR=new RegExp("[~\\*/\\[\\]]");function rE(r,t,i){if(t.search(HR)>=0)throw kc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new vm(...t.split("."))._internalPath}catch{throw kc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function kc(r,t,i,a,l){const h=a&&!a.isEmpty(),d=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(h||d)&&(_+=" (found",h&&(_+=` in field ${a}`),d&&(_+=` in document ${l}`),_+=")"),new lt(X.INVALID_ARGUMENT,p+r+_)}function qR(r,t){return r.some((i=>i.isEqual(t)))}/**
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
 */class sE{constructor(t,i,a,l,h){this._firestore=t,this._userDataWriter=i,this._key=a,this._document=l,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new GR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(aE("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class GR extends sE{data(){return super.data()}}function aE(r,t){return typeof t=="string"?rE(r,t):t instanceof vm?t._internalPath:t._delegate._internalPath}/**
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
 */function FR(r,t,i){let a;return a=r?r.toFirestore(t):t,a}class hc{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Va extends sE{constructor(t,i,a,l,h,d){super(t,i,a,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=h}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const a=this._document.data.field(aE("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new lt(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,i={};return i.type=Va._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Va._jsonSchemaVersion="firestore/documentSnapshot/1.0",Va._jsonSchema={type:pe("string",Va._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class yc extends Va{data(t={}){return super.data(t)}}class gl{constructor(t,i,a,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new hc(l.hasPendingWrites,l.fromCache),this.query=a}get docs(){const t=[];return this.forEach((i=>t.push(i))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach((a=>{t.call(i,new yc(this._firestore,this._userDataWriter,a.key,a,new hc(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new lt(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,h){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((p=>{const _=new yc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new hc(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>h||p.type!==3)).map((p=>{const _=new yc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new hc(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let v=-1,A=-1;return p.type!==0&&(v=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),A=d.indexOf(p.doc.key)),{type:YR(p.type),doc:_,oldIndex:v,newIndex:A}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new lt(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=gl._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=tm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],l=[];return this.docs.forEach((h=>{h._document!==null&&(i.push(h._document),a.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),l.push(h.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function YR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return At(61501,{type:r})}}gl._jsonSchemaVersion="firestore/querySnapshot/1.0",gl._jsonSchema={type:pe("string",gl._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};function oE(r,t){const i=a0(r.firestore,Z0),a=OR(r),l=FR(r.converter,t);return KR(i,[zR(jR(r.firestore),"addDoc",a._key,l,r.converter!==null,{}).toMutation(a._key,qi.exists(!1))]).then((()=>a))}function KR(r,t){return(function(a,l){const h=new Ss;return a.asyncQueue.enqueueAndForget((async()=>TR(await DR(a),l,h))),h.promise})(VR(r),t)}(function(t,i=!0){(function(l){Ya=l})(Fa),fi(new qn("firestore",((a,{instanceIdentifier:l,options:h})=>{const d=a.getProvider("app").getImmediate(),p=new Z0(new uS(a.getProvider("auth-internal")),new fS(d,a.getProvider("app-check-internal")),(function(v,A){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new lt(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ic(v.options.projectId,A)})(d,l),d);return h={useFetchStreams:i,...h},p._setSettings(h),p}),"PUBLIC").setMultipleInstances(!0)),Dn(p_,g_,t),Dn(p_,g_,"esm2020")})();function lE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QR=lE,uE=new Ms("auth","Firebase",lE());/**
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
 */const Pc=new Fc("@firebase/auth");function XR(r,...t){Pc.logLevel<=It.WARN&&Pc.warn(`Auth (${Fa}): ${r}`,...t)}function _c(r,...t){Pc.logLevel<=It.ERROR&&Pc.error(`Auth (${Fa}): ${r}`,...t)}/**
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
 */function Gn(r,...t){throw Tm(r,...t)}function ci(r,...t){return Tm(r,...t)}function cE(r,t,i){const a={...QR(),[t]:i};return new Ms("auth","Firebase",a).create(t,{appName:r.name})}function xr(r){return cE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tm(r,...t){if(typeof r!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return uE.create(r,...t)}function ft(r,t,...i){if(!r)throw Tm(t,...i)}function Bi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw _c(t),new Error(t)}function Ki(r,t){r||Bi(t)}/**
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
 */function Fd(){return typeof self<"u"&&self.location?.href||""}function $R(){return nv()==="http:"||nv()==="https:"}function nv(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function ZR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($R()||Hv()||"connection"in navigator)?navigator.onLine:!0}function JR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ml{constructor(t,i){this.shortDelay=t,this.longDelay=i,Ki(i>t,"Short delay should be less than long delay!"),this.isMobile=VA()||UA()}get(){return ZR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Am(r,t){Ki(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class hE{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const t2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],e2=new Ml(3e4,6e4);function Us(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function Ur(r,t,i,a,l={}){return fE(r,l,async()=>{let h={},d={};a&&(t==="GET"?d=a:h={body:JSON.stringify(a)});const p=Rl({key:r.config.apiKey,...d}).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const v={method:t,headers:_,...h};return PA()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Ga(r.emulatorConfig.host)&&(v.credentials="include"),hE.fetch()(await dE(r,r.config.apiHost,i,p),v)})}async function fE(r,t,i){r._canInitEmulator=!1;const a={...WR,...t};try{const l=new i2(r),h=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw fc(r,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const p=h.ok?d.errorMessage:d.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw fc(r,"credential-already-in-use",d);if(_==="EMAIL_EXISTS")throw fc(r,"email-already-in-use",d);if(_==="USER_DISABLED")throw fc(r,"user-disabled",d);const A=a[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw cE(r,A,v);Gn(r,A)}}catch(l){if(l instanceof Fn)throw l;Gn(r,"network-request-failed",{message:String(l)})}}async function eh(r,t,i,a,l={}){const h=await Ur(r,t,i,a,l);return"mfaPendingCredential"in h&&Gn(r,"multi-factor-auth-required",{_serverResponse:h}),h}async function dE(r,t,i,a){const l=`${t}${i}?${a}`,h=r,d=h.config.emulator?Am(r.config,l):`${r.config.apiScheme}://${l}`;return t2.includes(i)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(d).toString():d}function n2(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(ci(this.auth,"network-request-failed")),e2.get())})}}function fc(r,t,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=ci(r,t,a);return l.customData._tokenResponse=i,l}function iv(r){return r!==void 0&&r.enterprise!==void 0}class r2{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return n2(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function s2(r,t){return Ur(r,"GET","/v2/recaptchaConfig",Us(r,t))}/**
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
 */async function a2(r,t){return Ur(r,"POST","/v1/accounts:delete",t)}async function Uc(r,t){return Ur(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function yl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function o2(r,t=!1){const i=rn(r),a=await i.getIdToken(t),l=bm(a);ft(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,d=h?.sign_in_provider;return{claims:l,token:a,authTime:yl(bd(l.auth_time)),issuedAtTime:yl(bd(l.iat)),expirationTime:yl(bd(l.exp)),signInProvider:d||null,signInSecondFactor:h?.sign_in_second_factor||null}}function bd(r){return Number(r)*1e3}function bm(r){const[t,i,a]=r.split(".");if(t===void 0||i===void 0||a===void 0)return _c("JWT malformed, contained fewer than 3 sections"),null;try{const l=Pv(i);return l?JSON.parse(l):(_c("Failed to decode base64 JWT payload"),null)}catch(l){return _c("Caught error parsing JWT payload as JSON",l?.toString()),null}}function rv(r){const t=bm(r);return ft(t,"internal-error"),ft(typeof t.exp<"u","internal-error"),ft(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Sl(r,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof Fn&&l2(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function l2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class u2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yd{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=yl(this.lastLoginAt),this.creationTime=yl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lc(r){const t=r.auth,i=await r.getIdToken(),a=await Sl(r,Uc(t,{idToken:i}));ft(a?.users.length,t,"internal-error");const l=a.users[0];r._notifyReloadListener(l);const h=l.providerUserInfo?.length?mE(l.providerUserInfo):[],d=h2(r.providerData,h),p=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!d?.length,v=p?_:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Yd(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(r,A)}async function c2(r){const t=rn(r);await Lc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function h2(r,t){return[...r.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function mE(r){return r.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function f2(r,t){const i=await fE(r,{},async()=>{const a=Rl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:h}=r.config,d=await dE(r,l,"/v1/token",`key=${h}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:a};return r.emulatorConfig&&Ga(r.emulatorConfig.host)&&(_.credentials="include"),hE.fetch()(d,_)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function d2(r,t){return Ur(r,"POST","/v2/accounts:revokeToken",Us(r,t))}/**
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
 */class ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ft(t.idToken,"internal-error"),ft(typeof t.idToken<"u","internal-error"),ft(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):rv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ft(t.length!==0,"internal-error");const i=rv(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ft(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:h}=await f2(t,i);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:h}=i,d=new ka;return a&&(ft(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(ft(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),h&&(ft(typeof h=="number","internal-error",{appName:t}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ka,this.toJSON())}_performRefresh(){return Bi("not implemented")}}/**
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
 */function br(r,t){ft(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Hn{constructor({uid:t,auth:i,stsTokenManager:a,...l}){this.providerId="firebase",this.proactiveRefresh=new u2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Yd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const i=await Sl(this,this.stsTokenManager.getToken(this.auth,t));return ft(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return o2(this,t)}reload(){return c2(this)}_assign(t){this!==t&&(ft(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Hn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){ft(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await Lc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(xr(this.auth));const t=await this.getIdToken();return await Sl(this,a2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const a=i.displayName??void 0,l=i.email??void 0,h=i.phoneNumber??void 0,d=i.photoURL??void 0,p=i.tenantId??void 0,_=i._redirectEventId??void 0,v=i.createdAt??void 0,A=i.lastLoginAt??void 0,{uid:D,emailVerified:P,isAnonymous:J,providerData:$,stsTokenManager:st}=i;ft(D&&st,t,"internal-error");const et=ka.fromJSON(this.name,st);ft(typeof D=="string",t,"internal-error"),br(a,t.name),br(l,t.name),ft(typeof P=="boolean",t,"internal-error"),ft(typeof J=="boolean",t,"internal-error"),br(h,t.name),br(d,t.name),br(p,t.name),br(_,t.name),br(v,t.name),br(A,t.name);const gt=new Hn({uid:D,auth:t,email:l,emailVerified:P,displayName:a,isAnonymous:J,photoURL:d,phoneNumber:h,tenantId:p,stsTokenManager:et,createdAt:v,lastLoginAt:A});return $&&Array.isArray($)&&(gt.providerData=$.map(yt=>({...yt}))),_&&(gt._redirectEventId=_),gt}static async _fromIdTokenResponse(t,i,a=!1){const l=new ka;l.updateFromServerResponse(i);const h=new Hn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await Lc(h),h}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];ft(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?mE(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!h?.length,p=new ka;p.updateFromIdToken(a);const _=new Hn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Yd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!h?.length};return Object.assign(_,v),_}}/**
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
 */const sv=new Map;function Hi(r){Ki(r instanceof Function,"Expected a class definition");let t=sv.get(r);return t?(Ki(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,sv.set(r,t),t)}/**
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
 */class pE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}pE.type="NONE";const av=pE;/**
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
 */function vc(r,t,i){return`firebase:${r}:${t}:${i}`}class Pa{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=vc(this.userKey,l.apiKey,h),this.fullPersistenceKey=vc("persistence",l.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Uc(this.auth,{idToken:t}).catch(()=>{});return i?Hn._fromGetAccountInfoResponse(this.auth,i,t):null}return Hn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Pa(Hi(av),t,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let h=l[0]||Hi(av);const d=vc(a,t.config.apiKey,t.name);let p=null;for(const v of i)try{const A=await v._get(d);if(A){let D;if(typeof A=="string"){const P=await Uc(t,{idToken:A}).catch(()=>{});if(!P)break;D=await Hn._fromGetAccountInfoResponse(t,P,A)}else D=Hn._fromJSON(t,A);v!==h&&(p=D),h=v;break}}catch{}const _=l.filter(v=>v._shouldAllowMigration);return!h._shouldAllowMigration||!_.length?new Pa(h,t,a):(h=_[0],p&&await h._set(d,p.toJSON()),await Promise.all(i.map(async v=>{if(v!==h)try{await v._remove(d)}catch{}})),new Pa(h,t,a))}}/**
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
 */function ov(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(TE(t))return"Blackberry";if(AE(t))return"Webos";if(yE(t))return"Safari";if((t.includes("chrome/")||_E(t))&&!t.includes("edge/"))return"Chrome";if(EE(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if(a?.length===2)return a[1]}return"Other"}function gE(r=Ke()){return/firefox\//i.test(r)}function yE(r=Ke()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _E(r=Ke()){return/crios\//i.test(r)}function vE(r=Ke()){return/iemobile/i.test(r)}function EE(r=Ke()){return/android/i.test(r)}function TE(r=Ke()){return/blackberry/i.test(r)}function AE(r=Ke()){return/webos/i.test(r)}function Sm(r=Ke()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function m2(r=Ke()){return Sm(r)&&!!window.navigator?.standalone}function p2(){return LA()&&document.documentMode===10}function bE(r=Ke()){return Sm(r)||EE(r)||AE(r)||TE(r)||/windows phone/i.test(r)||vE(r)}/**
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
 */function SE(r,t=[]){let i;switch(r){case"Browser":i=ov(Ke());break;case"Worker":i=`${ov(Ke())}-${r}`;break;default:i=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Fa}/${a}`}/**
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
 */class g2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=h=>new Promise((d,p)=>{try{const _=t(h);d(_)}catch(_){p(_)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
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
 */async function y2(r,t={}){return Ur(r,"GET","/v2/passwordPolicy",Us(r,t))}/**
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
 */const _2=6;class v2{constructor(t){const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??_2,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=h))}}/**
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
 */class E2{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lv(this),this.idTokenSubscription=new lv(this),this.beforeStateQueue=new g2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Hi(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pa.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Uc(this,{idToken:t}),a=await Hn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Ln(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=this.redirectUser?._redirectEventId,d=a?._redirectEventId,p=await this.tryRedirectSignIn(t);(!h||h===d)&&p?.user&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ft(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Lc(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=JR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ln(this.app))return Promise.reject(xr(this));const i=t?rn(t):null;return i&&ft(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ft(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ln(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await y2(this),i=new v2(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ms("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await d2(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Hi(t)||this._popupRedirectResolver;ft(i,this,"argument-error"),this.redirectPersistenceManager=await Pa.create(this,[Hi(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ft(p,this,"internal-error"),p.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,a,l);return()=>{d=!0,_()}}else{const _=t.addObserver(i);return()=>{d=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ft(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=SE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&XR(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Qa(r){return rn(r)}class lv{constructor(t){this.auth=t,this.observer=null,this.addObserver=FA(i=>this.observer=i)}get next(){return ft(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function T2(r){nh=r}function wE(r){return nh.loadJS(r)}function A2(){return nh.recaptchaEnterpriseScript}function b2(){return nh.gapiScript}function S2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class w2{constructor(){this.enterprise=new R2}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class R2{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const I2="recaptcha-enterprise",RE="NO_RECAPTCHA";class C2{constructor(t){this.type=I2,this.auth=Qa(t)}async verify(t="verify",i=!1){async function a(h){if(!i){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(d,p)=>{s2(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new r2(_);return h.tenantId==null?h._agentRecaptchaConfig=v:h._tenantRecaptchaConfigs[h.tenantId]=v,d(v.siteKey)}}).catch(_=>{p(_)})})}function l(h,d,p){const _=window.grecaptcha;iv(_)?_.enterprise.ready(()=>{_.enterprise.execute(h,{action:t}).then(v=>{d(v)}).catch(()=>{d(RE)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new w2().execute("siteKey",{action:"verify"}):new Promise((h,d)=>{a(this.auth).then(p=>{if(!i&&iv(window.grecaptcha))l(p,h,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let _=A2();_.length!==0&&(_+=p),wE(_).then(()=>{l(p,h,d)}).catch(v=>{d(v)})}}).catch(p=>{d(p)})})}}async function uv(r,t,i,a=!1,l=!1){const h=new C2(r);let d;if(l)d=RE;else try{d=await h.verify(i)}catch{d=await h.verify(i,!0)}const p={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:v,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function cv(r,t,i,a,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await uv(r,t,i,i==="getOobCode");return a(r,h)}else return a(r,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await uv(r,t,i,i==="getOobCode");return a(r,d)}else return Promise.reject(h)})}/**
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
 */function N2(r,t){const i=Vs(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(Or(h,t??{}))return l;Gn(l,"already-initialized")}return i.initialize({options:t})}function D2(r,t){const i=t?.persistence||[],a=(Array.isArray(i)?i:[i]).map(Hi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t?.popupRedirectResolver)}function x2(r,t,i){const a=Qa(r);ft(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,h=IE(t),{host:d,port:p}=O2(t),_=p===null?"":`:${p}`,v={url:`${h}//${d}${_}/`},A=Object.freeze({host:d,port:p,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ft(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ft(Or(v,a.config.emulator)&&Or(A,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=A,a.settings.appVerificationDisabledForTesting=!0,Ga(d)?(zv(`${h}//${d}${_}`),Bv("Auth",!0)):M2()}function IE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function O2(r){const t=IE(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:hv(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:hv(d)}}}function hv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function M2(){function r(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class wm{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Bi("not implemented")}_getIdTokenResponse(t){return Bi("not implemented")}_linkToIdToken(t,i){return Bi("not implemented")}_getReauthenticationResolver(t){return Bi("not implemented")}}async function V2(r,t){return Ur(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function k2(r,t){return eh(r,"POST","/v1/accounts:signInWithPassword",Us(r,t))}/**
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
 */async function P2(r,t){return eh(r,"POST","/v1/accounts:signInWithEmailLink",Us(r,t))}async function U2(r,t){return eh(r,"POST","/v1/accounts:signInWithEmailLink",Us(r,t))}/**
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
 */class wl extends wm{constructor(t,i,a,l=null){super("password",a),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new wl(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new wl(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cv(t,i,"signInWithPassword",k2);case"emailLink":return P2(t,{email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cv(t,a,"signUpPassword",V2);case"emailLink":return U2(t,{idToken:i,email:this._email,oobCode:this._password});default:Gn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ua(r,t){return eh(r,"POST","/v1/accounts:signInWithIdp",Us(r,t))}/**
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
 */const L2="http://localhost";class Ds extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Ds(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Gn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l,...h}=i;if(!a||!l)return null;const d=new Ds(a,l);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return Ua(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Ua(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ua(t,i)}buildRequest(){const t={requestUri:L2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Rl(i)}return t}}/**
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
 */function j2(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z2(r){const t=ll(ul(r)).link,i=t?ll(ul(t)).deep_link_id:null,a=ll(ul(r)).deep_link_id;return(a?ll(ul(a)).link:null)||a||i||t||r}class Rm{constructor(t){const i=ll(ul(t)),a=i.apiKey??null,l=i.oobCode??null,h=j2(i.mode??null);ft(a&&l&&h,"argument-error"),this.apiKey=a,this.operation=h,this.code=l,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=z2(t);try{return new Rm(i)}catch{return null}}}/**
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
 */class Xa{constructor(){this.providerId=Xa.PROVIDER_ID}static credential(t,i){return wl._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=Rm.parseLink(i);return ft(a,"argument-error"),wl._fromEmailAndCode(t,a.code,a.tenantId)}}Xa.PROVIDER_ID="password";Xa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class CE{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vl extends CE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sr extends Vl{constructor(){super("facebook.com")}static credential(t){return Ds._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sr.credentialFromTaggedObject(t)}static credentialFromError(t){return Sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Sr.credential(t.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
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
 */class wr extends Vl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Ds._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return wr.credentialFromTaggedObject(t)}static credentialFromError(t){return wr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return wr.credential(i,a)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
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
 */class Rr extends Vl{constructor(){super("github.com")}static credential(t){return Ds._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rr.credential(t.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
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
 */class Ir extends Vl{constructor(){super("twitter.com")}static credential(t,i){return Ds._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return Ir.credential(i,a)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */class qa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const h=await Hn._fromIdTokenResponse(t,a,l),d=fv(a);return new qa({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=fv(a);return new qa({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function fv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class jc extends Fn{constructor(t,i,a,l){super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,jc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new jc(t,i,a,l)}}function NE(r,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?jc._fromErrorAndOperation(r,h,t,a):h})}async function B2(r,t,i=!1){const a=await Sl(r,t._linkToIdToken(r.auth,await r.getIdToken()),i);return qa._forOperation(r,"link",a)}/**
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
 */async function H2(r,t,i=!1){const{auth:a}=r;if(Ln(a.app))return Promise.reject(xr(a));const l="reauthenticate";try{const h=await Sl(r,NE(a,l,t,r),i);ft(h.idToken,a,"internal-error");const d=bm(h.idToken);ft(d,a,"internal-error");const{sub:p}=d;return ft(r.uid===p,a,"user-mismatch"),qa._forOperation(r,l,h)}catch(h){throw h?.code==="auth/user-not-found"&&Gn(a,"user-mismatch"),h}}/**
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
 */async function DE(r,t,i=!1){if(Ln(r.app))return Promise.reject(xr(r));const a="signIn",l=await NE(r,a,t),h=await qa._fromIdTokenResponse(r,a,l);return i||await r._updateCurrentUser(h.user),h}async function q2(r,t){return DE(Qa(r),t)}/**
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
 */async function G2(r){const t=Qa(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function F2(r,t,i){return Ln(r.app)?Promise.reject(xr(r)):q2(rn(r),Xa.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&G2(r),a})}function Y2(r,t,i,a){return rn(r).onIdTokenChanged(t,i,a)}function K2(r,t,i){return rn(r).beforeAuthStateChanged(t,i)}const zc="__sak";/**
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
 */class xE{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Q2=1e3,X2=10;class OE extends xE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,p,_)=>{this.notifyListeners(d,_)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);p2()&&h!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,X2):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},Q2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}OE.type="LOCAL";const $2=OE;/**
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
 */class ME extends xE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}ME.type="SESSION";const VE=ME;/**
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
 */function Z2(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class ih{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new ih(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:h}=i.data,d=this.handlersMap[l];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const p=Array.from(d).map(async v=>v(i.origin,h)),_=await Z2(p);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ih.receivers=[];/**
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
 */function Im(r="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return r+i}/**
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
 */class J2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,d;return new Promise((p,_)=>{const v=Im("",20);l.port1.start();const A=setTimeout(()=>{_(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(D){const P=D;if(P.data.eventId===v)switch(P.data.status){case"ack":clearTimeout(A),h=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),p(P.data.response);break;default:clearTimeout(A),clearTimeout(h),_(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function hi(){return window}function W2(r){hi().location.href=r}/**
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
 */function kE(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function tI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eI(){return navigator?.serviceWorker?.controller||null}function nI(){return kE()?self:null}/**
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
 */const PE="firebaseLocalStorageDb",iI=1,Bc="firebaseLocalStorage",UE="fbase_key";class kl{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function rh(r,t){return r.transaction([Bc],t?"readwrite":"readonly").objectStore(Bc)}function rI(){const r=indexedDB.deleteDatabase(PE);return new kl(r).toPromise()}function Kd(){const r=indexedDB.open(PE,iI);return new Promise((t,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Bc,{keyPath:UE})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Bc)?t(a):(a.close(),await rI(),t(await Kd()))})})}async function dv(r,t,i){const a=rh(r,!0).put({[UE]:t,value:i});return new kl(a).toPromise()}async function sI(r,t){const i=rh(r,!1).get(t),a=await new kl(i).toPromise();return a===void 0?null:a.value}function mv(r,t){const i=rh(r,!0).delete(t);return new kl(i).toPromise()}const aI=800,oI=3;class LE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>oI)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ih._getInstance(nI()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tI(),!this.activeServiceWorker)return;this.sender=new J2(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||eI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kd();return await dv(t,zc,"1"),await mv(t,zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>dv(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>sI(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>mv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const h=rh(l,!1).getAll();return new kl(h).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:h}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}LE.type="LOCAL";const lI=LE;new Ml(3e4,6e4);/**
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
 */function uI(r,t){return t?Hi(t):(ft(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Cm extends wm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ua(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ua(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ua(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function cI(r){return DE(r.auth,new Cm(r),r.bypassAuthState)}function hI(r){const{auth:t,user:i}=r;return ft(i,t,"internal-error"),H2(i,new Cm(r),r.bypassAuthState)}async function fI(r){const{auth:t,user:i}=r;return ft(i,t,"internal-error"),B2(i,new Cm(r),r.bypassAuthState)}/**
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
 */class jE{constructor(t,i,a,l,h=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:h,error:d,type:p}=t;if(d){this.reject(d);return}const _={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:Gn(this.auth,"internal-error")}}resolve(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dI=new Ml(2e3,1e4);class Oa extends jE{constructor(t,i,a,l,h){super(t,i,l,h),this.provider=a,this.authWindow=null,this.pollId=null,Oa.currentPopupAction&&Oa.currentPopupAction.cancel(),Oa.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ft(t,this.auth,"internal-error"),t}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const t=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oa.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dI.get())};t()}}Oa.currentPopupAction=null;/**
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
 */const mI="pendingRedirect",Ec=new Map;class pI extends jE{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=Ec.get(this.auth._key());if(!t){try{const a=await gI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}Ec.set(this.auth._key(),t)}return this.bypassAuthState||Ec.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gI(r,t){const i=vI(t),a=_I(r);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function yI(r,t){Ec.set(r._key(),t)}function _I(r){return Hi(r._redirectPersistence)}function vI(r){return vc(mI,r.config.apiKey,r.name)}async function EI(r,t,i=!1){if(Ln(r.app))return Promise.reject(xr(r));const a=Qa(r),l=uI(a,t),d=await new pI(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
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
 */const TI=600*1e3;class AI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bI(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){if(t.error&&!zE(t)){const a=t.error.code?.split("auth/")[1]||"internal-error";i.onError(ci(this.auth,a))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=TI&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(t))}saveEventToCache(t){this.cachedEventUids.add(pv(t)),this.lastProcessedEventTime=Date.now()}}function pv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function zE({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function bI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(r);default:return!1}}/**
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
 */async function SI(r,t={}){return Ur(r,"GET","/v1/projects",t)}/**
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
 */const wI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RI=/^https?/;async function II(r){if(r.config.emulator)return;const{authorizedDomains:t}=await SI(r);for(const i of t)try{if(CI(i))return}catch{}Gn(r,"unauthorized-domain")}function CI(r){const t=Fd(),{protocol:i,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!RI.test(i))return!1;if(wI.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
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
 */const NI=new Ml(3e4,6e4);function gv(){const r=hi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function DI(r){return new Promise((t,i)=>{function a(){gv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gv(),i(ci(r,"network-request-failed"))},timeout:NI.get()})}if(hi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(hi().gapi?.load)a();else{const l=S2("iframefcb");return hi()[l]=()=>{gapi.load?a():i(ci(r,"network-request-failed"))},wE(`${b2()}?onload=${l}`).catch(h=>i(h))}}).catch(t=>{throw Tc=null,t})}let Tc=null;function xI(r){return Tc=Tc||DI(r),Tc}/**
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
 */const OI=new Ml(5e3,15e3),MI="__/auth/iframe",VI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(r){const t=r.config;ft(t.authDomain,r,"auth-domain-config-required");const i=t.emulator?Am(t,VI):`https://${r.config.authDomain}/${MI}`,a={apiKey:t.apiKey,appName:r.name,v:Fa},l=PI.get(r.config.apiHost);l&&(a.eid=l);const h=r._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${Rl(a).slice(1)}`}async function LI(r){const t=await xI(r),i=hi().gapi;return ft(i,r,"internal-error"),t.open({where:document.body,url:UI(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const d=ci(r,"network-request-failed"),p=hi().setTimeout(()=>{h(d)},OI.get());function _(){hi().clearTimeout(p),l(a)}a.ping(_).then(_,()=>{h(d)})}))}/**
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
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zI=500,BI=600,HI="_blank",qI="http://localhost";class yv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GI(r,t,i,a=zI,l=BI){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const _={...jI,width:a.toString(),height:l.toString(),top:h,left:d},v=Ke().toLowerCase();i&&(p=_E(v)?HI:i),gE(v)&&(t=t||qI,_.scrollbars="yes");const A=Object.entries(_).reduce((P,[J,$])=>`${P}${J}=${$},`,"");if(m2(v)&&p!=="_self")return FI(t||"",p),new yv(null);const D=window.open(t||"",p,A);ft(D,r,"popup-blocked");try{D.focus()}catch{}return new yv(D)}function FI(r,t){const i=document.createElement("a");i.href=r,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
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
 */const YI="__/auth/handler",KI="emulator/auth/handler",QI=encodeURIComponent("fac");async function _v(r,t,i,a,l,h){ft(r.config.authDomain,r,"auth-domain-config-required"),ft(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:Fa,eventId:l};if(t instanceof CE){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",GA(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,D]of Object.entries({}))d[A]=D}if(t instanceof Vl){const A=t.getScopes().filter(D=>D!=="");A.length>0&&(d.scopes=A.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const _=await r._getAppCheckToken(),v=_?`#${QI}=${encodeURIComponent(_)}`:"";return`${XI(r)}?${Rl(p).slice(1)}${v}`}function XI({config:r}){return r.emulator?Am(r,KI):`https://${r.authDomain}/${YI}`}/**
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
 */const Sd="webStorageSupport";class $I{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VE,this._completeRedirectFn=EI,this._overrideRedirectResult=yI}async _openPopup(t,i,a,l){Ki(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const h=await _v(t,i,a,Fd(),l);return GI(t,h,Im())}async _openRedirect(t,i,a,l){await this._originValidation(t);const h=await _v(t,i,a,Fd(),l);return W2(h),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:h}=this.eventManagers[i];return l?Promise.resolve(l):(Ki(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await LI(t),a=new AI(t);return i.register("authEvent",l=>(ft(l?.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Sd,{type:Sd},l=>{const h=l?.[0]?.[Sd];h!==void 0&&i(!!h),Gn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=II(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return bE()||yE()||Sm()}}const ZI=$I;var vv="@firebase/auth",Ev="1.11.0";/**
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
 */class JI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ft(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tC(r){fi(new qn("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),h=t.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=a.options;ft(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const _={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SE(r)},v=new E2(a,l,h,_);return D2(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),fi(new qn("auth-internal",t=>{const i=Qa(t.getProvider("auth").getImmediate());return(a=>new JI(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(vv,Ev,WI(r)),Dn(vv,Ev,"esm2020")}/**
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
 */const eC=300,nC=jv("authIdTokenMaxAge")||eC;let Tv=null;const iC=r=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>nC)return;const l=i?.token;Tv!==l&&(Tv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function rC(r=Zd()){const t=Vs(r,"auth");if(t.isInitialized())return t.getImmediate();const i=N2(r,{popupRedirectResolver:ZI,persistence:[lI,$2,VE]}),a=jv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=iC(h.toString());K2(i,d,()=>d(i.currentUser)),Y2(i,p=>d(p))}}const l=Uv("auth");return l&&x2(i,`http://${l}`),i}function sC(){return document.getElementsByTagName("head")?.[0]??document}T2({loadJS(r){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=l=>{const h=ci("internal-error");h.customData=l,i(h)},a.type="text/javascript",a.charset="UTF-8",sC().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tC("Browser");const BE="@firebase/installations",Nm="0.6.19";/**
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
 */const HE=1e4,qE=`w:${Nm}`,GE="FIS_v2",aC="https://firebaseinstallations.googleapis.com/v1",oC=3600*1e3,lC="installations",uC="Installations";/**
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
 */const cC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xs=new Ms(lC,uC,cC);function FE(r){return r instanceof Fn&&r.code.includes("request-failed")}/**
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
 */function YE({projectId:r}){return`${aC}/projects/${r}/installations`}function KE(r){return{token:r.token,requestStatus:2,expiresIn:fC(r.expiresIn),creationTime:Date.now()}}async function QE(r,t){const a=(await t.json()).error;return xs.create("request-failed",{requestName:r,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function XE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function hC(r,{refreshToken:t}){const i=XE(r);return i.append("Authorization",dC(t)),i}async function $E(r){const t=await r();return t.status>=500&&t.status<600?r():t}function fC(r){return Number(r.replace("s","000"))}function dC(r){return`${GE} ${r}`}/**
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
 */async function mC({appConfig:r,heartbeatServiceProvider:t},{fid:i}){const a=YE(r),l=XE(r),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={fid:i,authVersion:GE,appId:r.appId,sdkVersion:qE},p={method:"POST",headers:l,body:JSON.stringify(d)},_=await $E(()=>fetch(a,p));if(_.ok){const v=await _.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:KE(v.authToken)}}else throw await QE("Create Installation",_)}/**
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
 */function ZE(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function pC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gC=/^[cdef][\w-]{21}$/,Qd="";function yC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=_C(r);return gC.test(i)?i:Qd}catch{return Qd}}function _C(r){return pC(r).substr(0,22)}/**
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
 */function sh(r){return`${r.appName}!${r.appId}`}/**
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
 */const JE=new Map;function WE(r,t){const i=sh(r);tT(i,t),vC(i,t)}function tT(r,t){const i=JE.get(r);if(i)for(const a of i)a(t)}function vC(r,t){const i=EC();i&&i.postMessage({key:r,fid:t}),TC()}let bs=null;function EC(){return!bs&&"BroadcastChannel"in self&&(bs=new BroadcastChannel("[Firebase] FID Change"),bs.onmessage=r=>{tT(r.data.key,r.data.fid)}),bs}function TC(){JE.size===0&&bs&&(bs.close(),bs=null)}/**
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
 */const AC="firebase-installations-database",bC=1,Os="firebase-installations-store";let wd=null;function Dm(){return wd||(wd=Kv(AC,bC,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Os)}}})),wd}async function Hc(r,t){const i=sh(r),l=(await Dm()).transaction(Os,"readwrite"),h=l.objectStore(Os),d=await h.get(i);return await h.put(t,i),await l.done,(!d||d.fid!==t.fid)&&WE(r,t.fid),t}async function eT(r){const t=sh(r),a=(await Dm()).transaction(Os,"readwrite");await a.objectStore(Os).delete(t),await a.done}async function ah(r,t){const i=sh(r),l=(await Dm()).transaction(Os,"readwrite"),h=l.objectStore(Os),d=await h.get(i),p=t(d);return p===void 0?await h.delete(i):await h.put(p,i),await l.done,p&&(!d||d.fid!==p.fid)&&WE(r,p.fid),p}/**
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
 */async function xm(r){let t;const i=await ah(r.appConfig,a=>{const l=SC(a),h=wC(r,l);return t=h.registrationPromise,h.installationEntry});return i.fid===Qd?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function SC(r){const t=r||{fid:yC(),registrationStatus:0};return nT(t)}function wC(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(xs.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=RC(r,i);return{installationEntry:i,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:IC(r)}:{installationEntry:t}}async function RC(r,t){try{const i=await mC(r,t);return Hc(r.appConfig,i)}catch(i){throw FE(i)&&i.customData.serverCode===409?await eT(r.appConfig):await Hc(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function IC(r){let t=await Av(r.appConfig);for(;t.registrationStatus===1;)await ZE(100),t=await Av(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await xm(r);return a||i}return t}function Av(r){return ah(r,t=>{if(!t)throw xs.create("installation-not-found");return nT(t)})}function nT(r){return CC(r)?{fid:r.fid,registrationStatus:0}:r}function CC(r){return r.registrationStatus===1&&r.registrationTime+HE<Date.now()}/**
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
 */async function NC({appConfig:r,heartbeatServiceProvider:t},i){const a=DC(r,i),l=hC(r,i),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={installation:{sdkVersion:qE,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(d)},_=await $E(()=>fetch(a,p));if(_.ok){const v=await _.json();return KE(v)}else throw await QE("Generate Auth Token",_)}function DC(r,{fid:t}){return`${YE(r)}/${t}/authTokens:generate`}/**
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
 */async function Om(r,t=!1){let i;const a=await ah(r.appConfig,h=>{if(!iT(h))throw xs.create("not-registered");const d=h.authToken;if(!t&&MC(d))return h;if(d.requestStatus===1)return i=xC(r,t),h;{if(!navigator.onLine)throw xs.create("app-offline");const p=kC(h);return i=OC(r,p),p}});return i?await i:a.authToken}async function xC(r,t){let i=await bv(r.appConfig);for(;i.authToken.requestStatus===1;)await ZE(100),i=await bv(r.appConfig);const a=i.authToken;return a.requestStatus===0?Om(r,t):a}function bv(r){return ah(r,t=>{if(!iT(t))throw xs.create("not-registered");const i=t.authToken;return PC(i)?{...t,authToken:{requestStatus:0}}:t})}async function OC(r,t){try{const i=await NC(r,t),a={...t,authToken:i};return await Hc(r.appConfig,a),i}catch(i){if(FE(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await eT(r.appConfig);else{const a={...t,authToken:{requestStatus:0}};await Hc(r.appConfig,a)}throw i}}function iT(r){return r!==void 0&&r.registrationStatus===2}function MC(r){return r.requestStatus===2&&!VC(r)}function VC(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+oC}function kC(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function PC(r){return r.requestStatus===1&&r.requestTime+HE<Date.now()}/**
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
 */async function UC(r){const t=r,{installationEntry:i,registrationPromise:a}=await xm(t);return a?a.catch(console.error):Om(t).catch(console.error),i.fid}/**
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
 */async function LC(r,t=!1){const i=r;return await jC(i),(await Om(i,t)).token}async function jC(r){const{registrationPromise:t}=await xm(r);t&&await t}/**
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
 */function zC(r){if(!r||!r.options)throw Rd("App Configuration");if(!r.name)throw Rd("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw Rd(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Rd(r){return xs.create("missing-app-config-values",{valueName:r})}/**
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
 */const rT="installations",BC="installations-internal",HC=r=>{const t=r.getProvider("app").getImmediate(),i=zC(t),a=Vs(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},qC=r=>{const t=r.getProvider("app").getImmediate(),i=Vs(t,rT).getImmediate();return{getId:()=>UC(i),getToken:l=>LC(i,l)}};function GC(){fi(new qn(rT,HC,"PUBLIC")),fi(new qn(BC,qC,"PRIVATE"))}GC();Dn(BE,Nm);Dn(BE,Nm,"esm2020");/**
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
 */const qc="analytics",FC="firebase_id",YC="origin",KC=60*1e3,QC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mm="https://www.googletagmanager.com/gtag/js";/**
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
 */const nn=new Fc("@firebase/analytics");/**
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
 */const XC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new Ms("analytics","Analytics",XC);/**
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
 */function $C(r){if(!r.startsWith(Mm)){const t=pn.create("invalid-gtag-resource",{gtagURL:r});return nn.warn(t.message),""}return r}function sT(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function ZC(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function JC(r,t){const i=ZC("firebase-js-sdk-policy",{createScriptURL:$C}),a=document.createElement("script"),l=`${Mm}?l=${r}&id=${t}`;a.src=i?i?.createScriptURL(l):l,a.async=!0,document.head.appendChild(a)}function WC(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function tN(r,t,i,a,l,h){const d=a[l];try{if(d)await t[d];else{const _=(await sT(i)).find(v=>v.measurementId===l);_&&await t[_.appId]}}catch(p){nn.error(p)}r("config",l,h)}async function eN(r,t,i,a,l){try{let h=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const p=await sT(i);for(const _ of d){const v=p.find(D=>D.measurementId===_),A=v&&t[v.appId];if(A)h.push(A);else{h=[];break}}}h.length===0&&(h=Object.values(t)),await Promise.all(h),r("event",a,l||{})}catch(h){nn.error(h)}}function nN(r,t,i,a){async function l(h,...d){try{if(h==="event"){const[p,_]=d;await eN(r,t,i,p,_)}else if(h==="config"){const[p,_]=d;await tN(r,t,i,a,p,_)}else if(h==="consent"){const[p,_]=d;r("consent",p,_)}else if(h==="get"){const[p,_,v]=d;r("get",p,_,v)}else if(h==="set"){const[p]=d;r("set",p)}else r(h,...d)}catch(p){nn.error(p)}}return l}function iN(r,t,i,a,l){let h=function(...d){window[a].push(arguments)};return window[l]&&typeof window[l]=="function"&&(h=window[l]),window[l]=nN(h,r,t,i),{gtagCore:h,wrappedGtag:window[l]}}function rN(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(Mm)&&i.src.includes(r))return i;return null}/**
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
 */const sN=30,aN=1e3;class oN{constructor(t={},i=aN){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const aT=new oN;function lN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function uN(r){const{appId:t,apiKey:i}=r,a={method:"GET",headers:lN(i)},l=QC.replace("{app-id}",t),h=await fetch(l,a);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();p.error?.message&&(d=p.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function cN(r,t=aT,i){const{appId:a,apiKey:l,measurementId:h}=r.options;if(!a)throw pn.create("no-app-id");if(!l){if(h)return{measurementId:h,appId:a};throw pn.create("no-api-key")}const d=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new dN;return setTimeout(async()=>{p.abort()},KC),oT({appId:a,apiKey:l,measurementId:h},d,p,t)}async function oT(r,{throttleEndTimeMillis:t,backoffCount:i},a,l=aT){const{appId:h,measurementId:d}=r;try{await hN(a,t)}catch(p){if(d)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:h,measurementId:d};throw p}try{const p=await uN(r);return l.deleteThrottleMetadata(h),p}catch(p){const _=p;if(!fN(_)){if(l.deleteThrottleMetadata(h),d)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${_?.message}]`),{appId:h,measurementId:d};throw p}const v=Number(_?.customData?.httpStatus)===503?s_(i,l.intervalMillis,sN):s_(i,l.intervalMillis),A={throttleEndTimeMillis:Date.now()+v,backoffCount:i+1};return l.setThrottleMetadata(h,A),nn.debug(`Calling attemptFetch again in ${v} millis`),oT(r,A,a,l)}}function hN(r,t){return new Promise((i,a)=>{const l=Math.max(t-Date.now(),0),h=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(h),a(pn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fN(r){if(!(r instanceof Fn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class dN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function mN(r,t,i,a,l){if(l&&l.global){r("event",i,a);return}else{const h=await t,d={...a,send_to:h};r("event",i,d)}}/**
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
 */async function pN(){if(qv())try{await Gv()}catch(r){return nn.warn(pn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return nn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gN(r,t,i,a,l,h,d){const p=cN(r);p.then(P=>{i[P.measurementId]=P.appId,r.options.measurementId&&P.measurementId!==r.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>nn.error(P)),t.push(p);const _=pN().then(P=>{if(P)return a.getId()}),[v,A]=await Promise.all([p,_]);rN(h)||JC(h,v.measurementId),l("js",new Date);const D=d?.config??{};return D[YC]="firebase",D.update=!0,A!=null&&(D[FC]=A),l("config",v.measurementId,D),v.measurementId}/**
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
 */class yN{constructor(t){this.app=t}_delete(){return delete _l[this.app.options.appId],Promise.resolve()}}let _l={},Sv=[];const wv={};let Id="dataLayer",_N="gtag",Rv,lT,Iv=!1;function vN(){const r=[];if(Hv()&&r.push("This is a browser extension environment."),zA()||r.push("Cookies are not available."),r.length>0){const t=r.map((a,l)=>`(${l+1}) ${a}`).join(" "),i=pn.create("invalid-analytics-context",{errorInfo:t});nn.warn(i.message)}}function EN(r,t,i){vN();const a=r.options.appId;if(!a)throw pn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(_l[a]!=null)throw pn.create("already-exists",{id:a});if(!Iv){WC(Id);const{wrappedGtag:h,gtagCore:d}=iN(_l,Sv,wv,Id,_N);lT=h,Rv=d,Iv=!0}return _l[a]=gN(r,Sv,wv,t,Rv,Id,i),new yN(r)}function TN(r=Zd()){r=rn(r);const t=Vs(r,qc);return t.isInitialized()?t.getImmediate():AN(r)}function AN(r,t={}){const i=Vs(r,qc);if(i.isInitialized()){const l=i.getImmediate();if(Or(t,i.getOptions()))return l;throw pn.create("already-initialized")}return i.initialize({options:t})}function bN(r,t,i,a){r=rn(r),mN(lT,_l[r.app.options.appId],t,i,a).catch(l=>nn.error(l))}const Cv="@firebase/analytics",Nv="0.10.18";function SN(){fi(new qn(qc,(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return EN(a,l,i)},"PUBLIC")),fi(new qn("analytics-internal",r,"PRIVATE")),Dn(Cv,Nv),Dn(Cv,Nv,"esm2020");function r(t){try{const i=t.getProvider(qc).getImmediate();return{logEvent:(a,l,h)=>bN(i,a,l,h)}}catch(i){throw pn.create("interop-component-reg-failed",{reason:i})}}}SN();const wN={apiKey:"AIzaSyBSFBpMef8GJ9eGghgcDypDXF4H-ZRVA6E",authDomain:"healthcare-20ea3.firebaseapp.com",projectId:"healthcare-20ea3",storageBucket:"healthcare-20ea3.firebasestorage.app",messagingSenderId:"967378944368",appId:"1:967378944368:web:e4700b381c473884174fb5",measurementId:"G-SJ2DFXCZLG"},Vm=Qv(wN),uT=MR(Vm),RN=rC(Vm);TN(Vm);const IN=()=>{const[r,t]=Ce.useState(!1),[i,a]=Ce.useState(!1),[l,h]=Ce.useState(""),[d,p]=Ce.useState(""),[_,v]=Ce.useState(!1),[A,D]=Ce.useState(""),[P,J]=Ce.useState(null),$=et=>{const gt=document.getElementById(et);gt&&window.scrollTo({top:gt.offsetTop-80,behavior:"smooth"}),t(!1)},st=async et=>{et.preventDefault(),v(!0),D("");try{const gt=await F2(RN,l,d);J(gt.user),alert("Login successful ✅"),a(!1),h(""),p("")}catch(gt){console.error("Login error:",gt.message),D("Invalid email or password")}finally{v(!1)}};return M.jsxs("nav",{className:"bg-white shadow-md fixed w-full top-0 left-0 z-50",children:[M.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[M.jsxs("div",{className:"flex items-center gap-2 text-blue-600 font-bold text-xl cursor-pointer",onClick:()=>$("home"),children:[M.jsx(Mv,{className:"w-6 h-6"}),M.jsx("span",{children:"HealthCare"})]}),M.jsxs("ul",{className:"hidden md:flex gap-8 text-gray-700 font-medium",children:[M.jsx("li",{onClick:()=>$("home"),className:"hover:text-blue-600 cursor-pointer",children:"Home"}),M.jsx("li",{onClick:()=>$("about"),className:"hover:text-blue-600 cursor-pointer",children:"About"}),M.jsx("li",{onClick:()=>$("services"),className:"hover:text-blue-600 cursor-pointer",children:"Services"}),M.jsx("li",{onClick:()=>$("doctors"),className:"hover:text-blue-600 cursor-pointer",children:"Doctors"}),M.jsx("li",{onClick:()=>$("appointment"),className:"hover:text-blue-600 cursor-pointer",children:"Appointments"}),M.jsx("li",{onClick:()=>$("contact"),className:"hover:text-blue-600 cursor-pointer",children:"Contact"})]}),M.jsxs("div",{className:"hidden md:flex gap-3",children:[M.jsxs("button",{onClick:()=>$("appointment"),className:"flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition",children:[M.jsx(Ov,{className:"w-4 h-4"})," Book Now"]}),P?M.jsxs("span",{className:"text-gray-600",children:["Welcome, ",P.email]}):M.jsxs("button",{onClick:()=>a(!0),className:"flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition",children:[M.jsx(EA,{className:"w-4 h-4"})," Login"]})]})]}),i&&M.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:M.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative",children:[M.jsx("button",{onClick:()=>a(!1),className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold",children:"×"}),M.jsx("h2",{className:"text-2xl font-bold text-gray-800 text-center mb-6",children:"Login"}),M.jsxs("form",{className:"space-y-4",onSubmit:st,children:[M.jsx("input",{type:"email",placeholder:"Email",value:l,onChange:et=>h(et.target.value),required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"}),M.jsx("input",{type:"password",placeholder:"Password",value:d,onChange:et=>p(et.target.value),required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"}),A&&M.jsx("p",{className:"text-red-500 text-sm",children:A}),M.jsx("button",{type:"submit",disabled:_,className:"w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition",children:_?"Logging in...":"Login"})]})]})})]})},CN=()=>{const r=()=>{const t=document.getElementById("booking"),i=document.getElementById("navbar");if(t){const a=i?i.offsetHeight:0,h=t.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:h,behavior:"smooth"})}};return M.jsxs("header",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden",children:[M.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12",children:[M.jsxs("div",{className:"md:w-1/2 flex flex-col justify-center h-full",children:[M.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold leading-tight",children:["Book Your Doctor’s Appointment"," ",M.jsx("span",{className:"text-yellow-300",children:"Easily"})]}),M.jsx("p",{className:"mt-6 text-lg text-gray-100",children:"Connect with trusted doctors online. Fast, secure, and reliable healthcare at your fingertips."}),M.jsx("div",{className:"mt-8 flex flex-col sm:flex-row gap-4",children:M.jsxs("button",{onClick:r,className:"flex items-center gap-2 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-shadow shadow-md hover:shadow-lg",children:[M.jsx(Ov,{className:"w-5 h-5"})," Book Appointment"]})})]}),M.jsx("div",{className:"md:w-1/2 flex justify-center items-center h-full",children:M.jsx("img",{src:"/Healthcare/Images/hello.jpg",alt:"Doctor illustration",className:"w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-xl object-cover"})})]}),M.jsx("div",{className:"absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl"}),M.jsx("div",{className:"absolute -top-24 -right-24 w-72 h-72 bg-indigo-300 rounded-full opacity-20 blur-3xl"})]})},NN=()=>M.jsx("section",{className:"bg-gray-50 py-20",children:M.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12",children:[M.jsxs("div",{className:"md:w-1/2 grid grid-cols-2 gap-4",children:[M.jsx("img",{src:"/Healthcare/Images/Doctor1.jpg",alt:"Doctor 1",className:"w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"}),M.jsx("img",{src:"/Healthcare/Images/Doctor2.jpg",alt:"Doctor 2",className:"w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"}),M.jsx("img",{src:"/Healthcare/Images/Doctor3.jpg",alt:"Doctor 3",className:"w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"}),M.jsx("img",{src:"/Healthcare/Images/Doctor4.jpg",alt:"Doctor 4",className:"w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"})]}),M.jsxs("div",{className:"md:w-1/2 flex flex-col justify-center",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold text-gray-800",children:"Welcome to Healthcare"}),M.jsx("p",{className:"mt-6 text-gray-600 text-base md:text-lg leading-relaxed",children:"At Healthcare, we provide top-notch medical services with experienced doctors and advanced technology. Our mission is to make healthcare accessible, reliable, and convenient for everyone. We focus on patient care, comfort, and long-term wellness."}),M.jsxs("div",{className:"mt-6 flex flex-col sm:flex-row gap-4",children:[M.jsx("button",{className:"px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition",children:"Learn More"}),M.jsx("button",{className:"px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition",children:"Contact Us"})]})]})]})}),DN=[{icon:M.jsx(Mv,{className:"w-8 h-8 text-blue-600"}),title:"General Consultation",description:"Get expert advice from our certified doctors. Fast, reliable, and accessible medical consultations."},{icon:M.jsx(iA,{className:"w-8 h-8 text-red-600"}),title:"Cardiology Services",description:"Advanced cardiac care and diagnostics from experienced cardiologists for a healthy heart."},{icon:M.jsx(pA,{className:"w-8 h-8 text-green-600"}),title:"Preventive Care",description:"Preventive screenings and health checkups to ensure long-term wellness and early detection."},{icon:M.jsx(J1,{className:"w-8 h-8 text-yellow-500"}),title:"Appointment Scheduling",description:"Easily schedule appointments online with your preferred doctors and clinics."}],xN=()=>M.jsx("section",{className:"bg-gray-50 py-20",children:M.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold text-gray-800 text-center",children:"Our Services"}),M.jsx("p",{className:"mt-4 text-gray-600 text-center mb-12",children:"Explore the wide range of healthcare services we offer for your well-being."}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:DN.map((r,t)=>M.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl",children:[M.jsx("div",{className:"mb-4",children:r.icon}),M.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:r.title}),M.jsx("p",{className:"text-gray-600 text-sm",children:r.description})]},t))})]})}),ON=[{id:1,name:"Dr. Sarah Johnson",specialization:"Cardiologist",image:"/Healthcare/Images/Doctor1.jpg",email:"sarah.johnson@healthcare.com",education:"MD, Cardiology, Harvard Medical School",experience:"10 years in cardiac care and interventions",description:"Dr. Sarah Johnson is a leading cardiologist specializing in heart disease treatment and prevention. She focuses on patient-centered care and long-term heart health."},{id:2,name:"Dr. Michael Smith",specialization:"Dermatologist",image:"/Healthcare/Images/Doctor2.jpg",email:"michael.smith@healthcare.com",education:"MD, Dermatology, Johns Hopkins University",experience:"8 years in skin care and dermatological treatments",description:"Dr. Michael Smith is an expert dermatologist providing advanced treatments for skin disorders. He believes in holistic care for healthy and glowing skin."},{id:3,name:"Dr. Emily Davis",specialization:"Pediatrician",image:"/Healthcare/Images/Doctor3.jpg",email:"emily.davis@healthcare.com",education:"MD, Pediatrics, Stanford University",experience:"7 years caring for children from newborn to teen",description:"Dr. Emily Davis provides compassionate pediatric care, focusing on preventive health and growth monitoring. She loves creating a friendly environment for kids."},{id:4,name:"Dr. John Williams",specialization:"Orthopedic",image:"/Healthcare/Images/Doctor4.jpg",email:"john.williams@healthcare.com",education:"MD, Orthopedics, University of California",experience:"12 years in orthopedic surgery and rehabilitation",description:"Dr. John Williams is a highly skilled orthopedic surgeon specializing in bone and joint health. His goal is to restore mobility and improve quality of life."}],MN=()=>{const[r,t]=Ce.useState(null),[i,a]=Ce.useState(!1),[l,h]=Ce.useState({name:"",email:"",date:""}),d=_=>{const{name:v,value:A}=_.target;h(D=>({...D,[v]:A}))},p=_=>{_.preventDefault(),alert(`✅ Appointment booked with ${r.name}

👤 Name: ${l.name}
📧 Email: ${l.email}
📅 Date: ${l.date}`),a(!1),t(null),h({name:"",email:"",date:""})};return M.jsxs("section",{id:"booking",className:"bg-gray-50 py-20",children:[M.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold text-gray-800 text-center",children:"Meet Our Doctors"}),M.jsx("p",{className:"mt-4 text-gray-600 text-center mb-12",children:"Our experienced doctors across all specialties are here to provide top-notch care."}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:ON.map(_=>M.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer",onClick:()=>t(_),children:[M.jsx("img",{src:_.image,alt:_.name,className:"w-32 h-32 object-cover rounded-full shadow-md mb-4"}),M.jsx("h3",{className:"text-xl font-semibold text-gray-800",children:_.name}),M.jsx("p",{className:"text-gray-600 mb-4",children:_.specialization}),M.jsx("button",{className:"px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition",children:"View Details"})]},_.id))})]}),r&&!i&&M.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:M.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative",children:[M.jsx("button",{onClick:()=>t(null),className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold",children:"×"}),M.jsxs("div",{className:"flex flex-col items-center text-center",children:[M.jsx("img",{src:r.image,alt:r.name,className:"w-32 h-32 object-cover rounded-full shadow-md mb-4"}),M.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:r.name}),M.jsx("p",{className:"text-blue-600 font-semibold mb-2",children:r.specialization}),M.jsxs("p",{className:"text-gray-600 mb-1",children:[M.jsx("span",{className:"font-semibold",children:"Education:"})," ",r.education]}),M.jsxs("p",{className:"text-gray-600 mb-1",children:[M.jsx("span",{className:"font-semibold",children:"Experience:"})," ",r.experience]}),M.jsx("p",{className:"text-gray-600 mt-4",children:r.description}),M.jsx("button",{className:"mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition",onClick:()=>a(!0),children:"Book Appointment"})]})]})}),r&&i&&M.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:M.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative",children:[M.jsx("button",{onClick:()=>a(!1),className:"absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold",children:"×"}),M.jsxs("h3",{className:"text-2xl font-bold text-gray-800 mb-4 text-center",children:["Book Appointment with ",r.name]}),M.jsxs("form",{onSubmit:p,className:"space-y-4",children:[M.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:l.name,onChange:d,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",required:!0}),M.jsx("input",{type:"email",name:"email",placeholder:"Your Email",value:l.email,onChange:d,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",required:!0}),M.jsx("input",{type:"date",name:"date",value:l.date,onChange:d,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",required:!0}),M.jsx("button",{type:"submit",className:"w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition",children:"Confirm Appointment"})]})]})})]})},VN=()=>{const[r,t]=Ce.useState({name:"",email:"",phone:"",doctor:"",date:"",time:"",notes:""}),i=l=>{t({...r,[l.target.name]:l.target.value})},a=async l=>{l.preventDefault(),console.log("Saving appointment:",r);try{await oE($0(uT,"appointments"),{...r,createdAt:Xt.now()}),alert("Appointment booked successfully!"),t({name:"",email:"",phone:"",doctor:"",date:"",time:"",notes:""})}catch(h){console.error("Error saving appointment:",h),alert("Failed to book appointment. Try again.")}};return M.jsx("section",{id:"appointment",className:"bg-white py-20",children:M.jsxs("div",{className:"max-w-3xl mx-auto px-6",children:[M.jsx("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-6",children:"Book Appointment"}),M.jsx("p",{className:"text-center text-gray-600 mb-8",children:"Fill out the form below to schedule your appointment with our experts."}),M.jsxs("form",{onSubmit:a,className:"bg-gray-50 p-8 rounded-lg shadow space-y-6",children:[M.jsx("input",{type:"text",name:"name",placeholder:"Full Name",value:r.name,onChange:i,required:!0,className:"w-full px-4 py-3 border rounded-lg"}),M.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:r.email,onChange:i,required:!0,className:"w-full px-4 py-3 border rounded-lg"}),M.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:r.phone,onChange:i,required:!0,className:"w-full px-4 py-3 border rounded-lg"}),M.jsxs("select",{name:"doctor",value:r.doctor,onChange:i,required:!0,className:"w-full px-4 py-3 border rounded-lg",children:[M.jsx("option",{value:"",children:"Select Doctor"}),M.jsx("option",{value:"Dr. John Smith",children:"Dr. John Smith"}),M.jsx("option",{value:"Dr. Emily White",children:"Dr. Emily White"}),M.jsx("option",{value:"Dr. Michael Lee",children:"Dr. Michael Lee"})]}),M.jsx("input",{type:"date",name:"date",value:r.date,onChange:i,required:!0,className:"w-full px-4 py-3 border rounded-lg"}),M.jsx("input",{type:"time",name:"time",value:r.time,onChange:i,required:!0,className:"w-full px-4 py-3 border rounded-lg"}),M.jsx("textarea",{name:"notes",placeholder:"Additional Notes (optional)",rows:"4",value:r.notes,onChange:i,className:"w-full px-4 py-3 border rounded-lg"}),M.jsx("button",{type:"submit",className:"w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Book Appointment"})]})]})})},kN=()=>{const[r,t]=Ce.useState({name:"",email:"",message:""}),i=l=>t({...r,[l.target.name]:l.target.value}),a=async l=>{l.preventDefault();try{await oE($0(uT,"contacts"),{...r,createdAt:Xt.now()}),alert("Message sent successfully!"),t({name:"",email:"",message:""})}catch(h){console.error("Error saving message:",h),alert("Failed to send message. Please try again.")}};return M.jsx("section",{id:"contact",className:"bg-gray-50 py-20",children:M.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold text-gray-800 text-center",children:"Get in Touch"}),M.jsx("p",{className:"mt-4 text-gray-600 text-center mb-12",children:"Have questions or need support? Reach out to us and we'll respond promptly."}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[M.jsxs("div",{className:"space-y-6",children:[M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx(hA,{className:"w-6 h-6 text-blue-600"}),M.jsx("p",{className:"text-gray-700",children:"123 Health Street, Wellness City, Country"})]}),M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx(uA,{className:"w-6 h-6 text-blue-600"}),M.jsx("p",{className:"text-gray-700",children:"support@healthcare.com"})]}),M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx(dA,{className:"w-6 h-6 text-blue-600"}),M.jsx("p",{className:"text-gray-700",children:"+123 456 7890"})]})]}),M.jsxs("form",{className:"bg-white p-8 rounded-xl shadow-lg space-y-6",onSubmit:a,children:[M.jsx("input",{type:"text",name:"name",placeholder:"Full Name",value:r.name,onChange:i,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"}),M.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:r.email,onChange:i,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"}),M.jsx("textarea",{name:"message",placeholder:"Your Message",rows:"5",value:r.message,onChange:i,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"}),M.jsx("button",{type:"submit",className:"w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition",children:"Send Message"})]})]})]})})},PN=()=>M.jsxs("footer",{className:"bg-gray-800 text-gray-300 py-10",children:[M.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8",children:[M.jsxs("div",{children:[M.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"HealthCare"}),M.jsx("p",{children:"Your trusted healthcare partner. Providing professional care and personalized services for all your health needs."})]}),M.jsxs("div",{children:[M.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Quick Links"}),M.jsxs("ul",{className:"space-y-2",children:[M.jsx("li",{children:M.jsx("a",{href:"#home",className:"hover:text-blue-500 transition",children:"Home"})}),M.jsx("li",{children:M.jsx("a",{href:"#about",className:"hover:text-blue-500 transition",children:"About"})}),M.jsx("li",{children:M.jsx("a",{href:"#services",className:"hover:text-blue-500 transition",children:"Services"})}),M.jsx("li",{children:M.jsx("a",{href:"#doctors",className:"hover:text-blue-500 transition",children:"Doctors"})}),M.jsx("li",{children:M.jsx("a",{href:"#appointment",className:"hover:text-blue-500 transition",children:"Appointments"})}),M.jsx("li",{children:M.jsx("a",{href:"#contact",className:"hover:text-blue-500 transition",children:"Contact"})})]})]}),M.jsxs("div",{children:[M.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Follow Us"}),M.jsxs("div",{className:"flex gap-4",children:[M.jsx(eA,{className:"w-6 h-6 hover:text-blue-500 cursor-pointer"}),M.jsx(_A,{className:"w-6 h-6 hover:text-blue-500 cursor-pointer"}),M.jsx(sA,{className:"w-6 h-6 hover:text-blue-500 cursor-pointer"}),M.jsx(oA,{className:"w-6 h-6 hover:text-blue-500 cursor-pointer"})]})]})]}),M.jsxs("div",{className:"mt-10 border-t border-gray-700 pt-6 text-center text-sm",children:["© ",new Date().getFullYear()," HealthCare. All rights reserved."]})]});function UN(){return M.jsxs("div",{className:"min-h-screen bg-gray-50",children:[M.jsx(IN,{}),M.jsx("div",{id:"home",children:M.jsx(CN,{})}),M.jsx("div",{id:"about",children:M.jsx(NN,{})}),M.jsx("div",{id:"services",children:M.jsx(xN,{})}),M.jsx("div",{id:"doctors",children:M.jsx(MN,{})}),M.jsx("div",{id:"appointment",children:M.jsx(VN,{})}),M.jsx(kN,{}),M.jsx(PN,{})]})}F1.createRoot(document.getElementById("root")).render(M.jsx(U1.StrictMode,{children:M.jsx(UN,{})}));
