var od=Object.defineProperty;var ld=(i,e,t)=>e in i?od(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Lo=(i,e,t)=>ld(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="160",ri={ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,Po=1,dd=2,Gc=1,Vc=2,pn=3,yn=0,zt=1,Gt=2,In=0,Ii=1,zi=2,Do=3,Io=4,ud=5,Yn=100,hd=101,fd=102,Uo=103,No=104,pd=200,md=201,gd=202,vd=203,wa=204,Ta=205,_d=206,yd=207,xd=208,Md=209,Sd=210,bd=211,Ed=212,wd=213,Td=214,Ad=0,Cd=1,Rd=2,fr=3,Ld=4,Pd=5,Dd=6,Id=7,Wc=0,Ud=1,Nd=2,Un=0,Fd=1,Od=2,zd=3,Xc=4,Bd=5,kd=6,$c=300,Bi=301,ki=302,Aa=303,Ca=304,Sr=306,pr=1e3,Ft=1001,Ra=1002,bt=1003,Fo=1004,Fr=1005,qt=1006,Hd=1007,us=1008,Nn=1009,Gd=1010,Vd=1011,io=1012,Yc=1013,Ln=1014,Pn=1015,hs=1016,qc=1017,jc=1018,Zn=1020,Wd=1021,Kt=1023,Xd=1024,$d=1025,Jn=1026,Hi=1027,Yd=1028,Kc=1029,qd=1030,Zc=1031,Jc=1033,Or=33776,zr=33777,Br=33778,kr=33779,Oo=35840,zo=35841,Bo=35842,ko=35843,Qc=36196,Ho=37492,Go=37496,Vo=37808,Wo=37809,Xo=37810,$o=37811,Yo=37812,qo=37813,jo=37814,Ko=37815,Zo=37816,Jo=37817,Qo=37818,el=37819,tl=37820,nl=37821,Hr=36492,il=36494,sl=36495,jd=36283,rl=36284,al=36285,ol=36286,e0=3e3,Qn=3001,Kd=3200,Zd=3201,t0=0,Jd=1,Zt="",xt="srgb",xn="srgb-linear",so="display-p3",br="display-p3-linear",mr="linear",st="srgb",gr="rec709",vr="p3",oi=7680,ll=519,Qd=512,eu=513,tu=514,n0=515,nu=516,iu=517,su=518,ru=519,La=35044,cl="300 es",Pa=1035,vn=2e3,_r=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dl=1234567;const rs=Math.PI/180,Gi=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function ro(i,e){return(i%e+e)%e}function au(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ou(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function lu(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function cu(i,e=1){return e-Math.abs(ro(i,e*2)-e)}function du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fu(i,e){return i+Math.random()*(e-i)}function pu(i){return i*(.5-Math.random())}function mu(i){i!==void 0&&(dl=i);let e=dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gu(i){return i*rs}function vu(i){return i*Gi}function Da(i){return(i&i-1)===0&&i!==0}function _u(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ao={DEG2RAD:rs,RAD2DEG:Gi,generateUUID:_n,clamp:Mt,euclideanModulo:ro,mapLinear:au,inverseLerp:ou,lerp:as,damp:lu,pingpong:cu,smoothstep:du,smootherstep:uu,randInt:hu,randFloat:fu,randFloatSpread:pu,seededRandom:mu,degToRad:gu,radToDeg:vu,isPowerOfTwo:Da,ceilPowerOfTwo:_u,floorPowerOfTwo:yr,setQuaternionFromProperEuler:yu,normalize:et,denormalize:rn};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,s,r,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],h=s[6],y=s[1],_=s[4],x=s[7],R=s[2],A=s[5],T=s[8];return r[0]=a*v+o*y+l*R,r[3]=a*m+o*_+l*A,r[6]=a*h+o*x+l*T,r[1]=c*v+d*y+u*R,r[4]=c*m+d*_+u*A,r[7]=c*h+d*x+u*T,r[2]=f*v+p*y+g*R,r[5]=f*m+p*_+g*A,r[8]=f*h+p*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,f=o*l-d*r,p=c*r-a*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new $e;function i0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){const i=fs("canvas");return i.style.display="block",i}const ul={};function os(i){i in ul||(ul[i]=!0,console.warn(i))}const hl=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fl=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[xn]:{transfer:mr,primaries:gr,toReference:i=>i,fromReference:i=>i},[xt]:{transfer:st,primaries:gr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[br]:{transfer:mr,primaries:vr,toReference:i=>i.applyMatrix3(fl),fromReference:i=>i.applyMatrix3(hl)},[so]:{transfer:st,primaries:vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fl),fromReference:i=>i.applyMatrix3(hl).convertLinearToSRGB()}},Mu=new Set([xn,br]),tt={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ts[e].toReference,s=Ts[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ts[i].primaries},getTransfer:function(i){return i===Zt?mr:Ts[i].transfer}};function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class s0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=fs("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Su=0;class r0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?s0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bu=0;class Pt extends si{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Ft,s=Ft,r=qt,a=us,o=Kt,l=Nn,c=Pt.DEFAULT_ANISOTROPY,d=Zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=_n(),this.name="",this.source=new r0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Qn?xt:Zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?Qn:e0}set encoding(e){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?xt:Zt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=$c;Pt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,R=(h+1)/2,A=(d+f)/4,T=(u+v)/4,H=(g+m)/4;return _>x&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=T/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=H/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=H/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-d)/y,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eu extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qn?xt:Zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Pt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new r0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class a0 extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wu extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||d!==g){let m=1-o;const h=l*f+c*p+d*g+u*v,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const R=Math.sqrt(_),A=Math.atan2(R,h*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const x=o*y;if(l=l*m+f*x,c=c*m+p*x,d=d*m+g*x,u=u*m+v*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*p-c*f,e[t+1]=l*g+d*f+c*u-o*p,e[t+2]=c*g+d*p+o*f-l*u,e[t+3]=d*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"YXZ":this._x=f*d*u+c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"ZXY":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u-f*p*g;break;case"ZYX":this._x=f*d*u-c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u+f*p*g;break;case"YZX":this._x=f*d*u+c*p*g,this._y=c*p*u+f*d*g,this._z=c*d*g-f*p*u,this._w=c*d*u-f*p*g;break;case"XZY":this._x=f*d*u-c*p*g,this._y=c*p*u-f*d*g,this._z=c*d*g+f*p*u,this._w=c*d*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new E,pl=new ni;class Ut{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Cs.subVectors(this.max,Yi),ci.subVectors(e.a,Yi),di.subVectors(e.b,Yi),ui.subVectors(e.c,Yi),bn.subVectors(di,ci),En.subVectors(ui,di),Gn.subVectors(ci,ui);let t=[0,-bn.z,bn.y,0,-En.z,En.y,0,-Gn.z,Gn.y,bn.z,0,-bn.x,En.z,0,-En.x,Gn.z,0,-Gn.x,-bn.y,bn.x,0,-En.y,En.x,0,-Gn.y,Gn.x,0];return!$r(t,ci,di,ui,Cs)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,ci,di,ui,Cs))?!1:(Rs.crossVectors(bn,En),t=[Rs.x,Rs.y,Rs.z],$r(t,ci,di,ui,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new E,new E,new E,new E,new E,new E,new E,new E],Jt=new E,As=new Ut,ci=new E,di=new E,ui=new E,bn=new E,En=new E,Gn=new E,Yi=new E,Cs=new E,Rs=new E,Vn=new E;function $r(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),d=n.dot(Vn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Tu=new Ut,qi=new E,Yr=new E;class ys{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(Yr)),this.expandByPoint(qi.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new E,qr=new E,Ls=new E,wn=new E,jr=new E,Ps=new E,Kr=new E;class xs{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qr.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=wn.dot(this.direction),l=-wn.dot(Ls),c=wn.lengthSq(),d=Math.abs(1-a*a);let u,f,p,g;if(d>0)if(u=a*l-o,f=a*o-l,g=r*d,u>=0)if(f>=-g)if(f<=g){const v=1/d;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qr).addScaledVector(Ls,f),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,s,r){jr.subVectors(t,e),Ps.subVectors(n,e),Kr.crossVectors(jr,Ps);let a=this.direction.dot(Kr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(Ps.crossVectors(wn,Ps));if(l<0)return null;const c=o*this.direction.dot(jr.cross(wn));if(c<0||l+c>a)return null;const d=-o*wn.dot(Kr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,s,r,a,o,l,c,d,u,f,p,g,v,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,f,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,d,u,f,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/hi.setFromMatrixColumn(e,0).length(),r=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*d,p=a*u,g=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,g=c*d,v=c*u;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,g=c*d,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*u,g=o*d,v=o*u;t[0]=l*d,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+v,t[5]=a*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Cu)}lookAt(e,t,n){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Tn.crossVectors(n,kt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Tn.crossVectors(n,kt)),Tn.normalize(),Ds.crossVectors(kt,Tn),s[0]=Tn.x,s[4]=Ds.x,s[8]=kt.x,s[1]=Tn.y,s[5]=Ds.y,s[9]=kt.y,s[2]=Tn.z,s[6]=Ds.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],h=n[14],y=n[3],_=n[7],x=n[11],R=n[15],A=s[0],T=s[4],H=s[8],S=s[12],C=s[1],z=s[5],Y=s[9],J=s[13],P=s[2],N=s[6],k=s[10],j=s[14],q=s[3],K=s[7],X=s[11],ne=s[15];return r[0]=a*A+o*C+l*P+c*q,r[4]=a*T+o*z+l*N+c*K,r[8]=a*H+o*Y+l*k+c*X,r[12]=a*S+o*J+l*j+c*ne,r[1]=d*A+u*C+f*P+p*q,r[5]=d*T+u*z+f*N+p*K,r[9]=d*H+u*Y+f*k+p*X,r[13]=d*S+u*J+f*j+p*ne,r[2]=g*A+v*C+m*P+h*q,r[6]=g*T+v*z+m*N+h*K,r[10]=g*H+v*Y+m*k+h*X,r[14]=g*S+v*J+m*j+h*ne,r[3]=y*A+_*C+x*P+R*q,r[7]=y*T+_*z+x*N+R*K,r[11]=y*H+_*Y+x*k+R*X,r[15]=y*S+_*J+x*j+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*d-r*l*d)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*d-n*c*d)+h*(-s*o*d-t*l*u+t*o*f+s*a*u-n*a*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],y=u*m*c-v*f*c+v*l*p-o*m*p-u*l*h+o*f*h,_=g*f*c-d*m*c-g*l*p+a*m*p+d*l*h-a*f*h,x=d*v*c-g*u*c+g*o*p-a*v*p-d*o*h+a*u*h,R=g*u*l-d*v*l-g*o*f+a*v*f+d*o*m-a*u*m,A=t*y+n*_+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=y*T,e[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*h-n*f*h)*T,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*h+n*l*h)*T,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*T,e[4]=_*T,e[5]=(d*m*r-g*f*r+g*s*p-t*m*p-d*s*h+t*f*h)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*h-t*l*h)*T,e[7]=(a*f*r-d*l*r+d*s*c-t*f*c-a*s*p+t*l*p)*T,e[8]=x*T,e[9]=(g*u*r-d*v*r-g*n*p+t*v*p+d*n*h-t*u*h)*T,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*h+t*o*h)*T,e[11]=(d*o*r-a*u*r-d*n*c+t*u*c+a*n*p-t*o*p)*T,e[12]=R*T,e[13]=(d*v*s-g*u*s+g*n*f-t*v*f-d*n*m+t*u*m)*T,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*T,e[15]=(a*u*s-d*o*s+d*n*l-t*u*l-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,f=r*c,p=r*d,g=r*u,v=a*d,m=a*u,h=o*u,y=l*c,_=l*d,x=l*u,R=n.x,A=n.y,T=n.z;return s[0]=(1-(v+h))*R,s[1]=(p+x)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(f+h))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+_)*T,s[9]=(m-y)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const a=hi.set(s[4],s[5],s[6]).length(),o=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);const c=1/r,d=1/a,u=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=d,Qt.elements[5]*=d,Qt.elements[6]*=d,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=vn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(o===vn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===_r)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(a-r),f=(t+e)*c,p=(n+s)*d;let g,v;if(o===vn)g=(a+r)*u,v=-2*u;else if(o===_r)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new E,Qt=new rt,Au=new E(0,0,0),Cu=new E(1,1,1),Tn=new E,Ds=new E,kt=new E,ml=new rt,gl=new ni;class Er{constructor(e=0,t=0,n=0,s=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ru=0;const vl=new E,fi=new ni,un=new rt,Is=new E,ji=new E,Lu=new E,Pu=new ni,_l=new E(1,0,0),yl=new E(0,1,0),xl=new E(0,0,1),Du={type:"added"},Iu={type:"removed"};class mt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new E,t=new Er,n=new ni,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new $e}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(ji,Is,this.up):un.lookAt(Is,ji,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(un),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Du)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new E(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new E,hn=new E,Zr=new E,fn=new E,pi=new E,mi=new E,Ml=new E,Jr=new E,Qr=new E,ea=new E;let Us=!1;class jt{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),hn.subVectors(n,t),Zr.subVectors(e,t);const a=en.dot(en),o=en.dot(hn),l=en.dot(Zr),c=hn.dot(hn),d=hn.dot(Zr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*d)*f,g=(a*d-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),hn.subVectors(e,t),en.cross(hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),en.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;pi.subVectors(s,n),mi.subVectors(r,n),Jr.subVectors(e,n);const l=pi.dot(Jr),c=mi.dot(Jr);if(l<=0&&c<=0)return t.copy(n);Qr.subVectors(e,s);const d=pi.dot(Qr),u=mi.dot(Qr);if(d>=0&&u<=d)return t.copy(s);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(pi,a);ea.subVectors(e,r);const p=pi.dot(ea),g=mi.dot(ea);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mi,o);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Ml.subVectors(r,s),o=(u-d)/(u-d+(p-g)),t.copy(s).addScaledVector(Ml,o);const h=1/(m+v+f);return a=v*h,o=f*h,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=ro(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ta(a,r,e+1/3),this.g=ta(a,r,e),this.b=ta(a,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=o0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return tt.fromWorkingColorSpace(At.copy(this),e),Math.round(Mt(At.r*255,0,255))*65536+Math.round(Mt(At.g*255,0,255))*256+Math.round(Mt(At.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=xt){tt.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Ns);const n=as(An.h,Ns.h,t),s=as(An.s,Ns.s,t),r=as(An.l,Ns.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ke;Ke.NAMES=o0;let Uu=0;class zn extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Ii,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ta,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ms extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new E,Fs=new ge;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class l0 extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class c0 extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const Yt=new rt,na=new mt,gi=new E,Ht=new Ut,Ki=new Ut,yt=new E;class it extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i0(e)?c0:l0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ht.min,Ki.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,Ki.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(Ki.min),Ht.expandByPoint(Ki.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)yt.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),yt.add(gi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let C=0;C<o;C++)c[C]=new E,d[C]=new E;const u=new E,f=new E,p=new E,g=new ge,v=new ge,m=new ge,h=new E,y=new E;function _(C,z,Y){u.fromArray(s,C*3),f.fromArray(s,z*3),p.fromArray(s,Y*3),g.fromArray(a,C*2),v.fromArray(a,z*2),m.fromArray(a,Y*2),f.sub(u),p.sub(u),v.sub(g),m.sub(g);const J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(J),y.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(J),c[C].add(h),c[z].add(h),c[Y].add(h),d[C].add(y),d[z].add(y),d[Y].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let C=0,z=x.length;C<z;++C){const Y=x[C],J=Y.start,P=Y.count;for(let N=J,k=J+P;N<k;N+=3)_(n[N+0],n[N+1],n[N+2])}const R=new E,A=new E,T=new E,H=new E;function S(C){T.fromArray(r,C*3),H.copy(T);const z=c[C];R.copy(z),R.sub(T.multiplyScalar(T.dot(z))).normalize(),A.crossVectors(H,z);const J=A.dot(d[C])<0?-1:1;l[C*4]=R.x,l[C*4+1]=R.y,l[C*4+2]=R.z,l[C*4+3]=J}for(let C=0,z=x.length;C<z;++C){const Y=x[C],J=Y.start,P=Y.count;for(let N=J,k=J+P;N<k;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,d=new E,u=new E;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let h=0;h<d;h++)f[g++]=c[p++]}return new St(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new it,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new rt,Wn=new xs,Os=new ys,bl=new E,vi=new E,_i=new E,yi=new E,ia=new E,zs=new E,Bs=new ge,ks=new ge,Hs=new ge,El=new E,wl=new E,Tl=new E,Gs=new E,Vs=new E;class Lt extends mt{constructor(e=new it,t=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(ia.fromBufferAttribute(u,e),a?zs.addScaledVector(ia,d):zs.addScaledVector(ia.sub(t),d))}t.add(zs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Os.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Os,bl)===null||Wn.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Sl.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=a[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,R=_;x<R;x+=3){const A=o.getX(x),T=o.getX(x+1),H=o.getX(x+2);s=Ws(this,h,e,n,c,d,u,A,T,H),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=Ws(this,a,e,n,c,d,u,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=a[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,R=_;x<R;x+=3){const A=x,T=x+1,H=x+2;s=Ws(this,h,e,n,c,d,u,A,T,H),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const y=m,_=m+1,x=m+2;s=Ws(this,a,e,n,c,d,u,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Fu(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===yn,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:i}}function Ws(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,vi),i.getVertexPosition(l,_i),i.getVertexPosition(c,yi);const d=Fu(i,e,t,n,vi,_i,yi,Gs);if(d){s&&(Bs.fromBufferAttribute(s,o),ks.fromBufferAttribute(s,l),Hs.fromBufferAttribute(s,c),d.uv=jt.getInterpolation(Gs,vi,_i,yi,Bs,ks,Hs,new ge)),r&&(Bs.fromBufferAttribute(r,o),ks.fromBufferAttribute(r,l),Hs.fromBufferAttribute(r,c),d.uv1=jt.getInterpolation(Gs,vi,_i,yi,Bs,ks,Hs,new ge),d.uv2=d.uv1),a&&(El.fromBufferAttribute(a,o),wl.fromBufferAttribute(a,l),Tl.fromBufferAttribute(a,c),d.normal=jt.getInterpolation(Gs,vi,_i,yi,El,wl,Tl,new E),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new E,materialIndex:0};jt.getNormal(vi,_i,yi,u.normal),d.face=u}return d}class Ss extends it{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(u,2));function g(v,m,h,y,_,x,R,A,T,H,S){const C=x/T,z=R/H,Y=x/2,J=R/2,P=A/2,N=T+1,k=H+1;let j=0,q=0;const K=new E;for(let X=0;X<k;X++){const ne=X*z-J;for(let ie=0;ie<N;ie++){const V=ie*C-Y;K[v]=V*y,K[m]=ne*_,K[h]=P,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[h]=A>0?1:-1,d.push(K.x,K.y,K.z),u.push(ie/T),u.push(1-X/H),j+=1}}for(let X=0;X<H;X++)for(let ne=0;ne<T;ne++){const ie=f+ne+N*X,V=f+ne+N*(X+1),Z=f+(ne+1)+N*(X+1),le=f+(ne+1)+N*X;l.push(ie,V,le),l.push(V,Z,le),q+=6}o.addGroup(p,q,S),p+=q,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=Vi(i[t]);for(const s in n)e[s]=n[s]}return e}function Ou(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function d0(i){return i.getRenderTarget()===null?i.outputColorSpace:tt.workingColorSpace}const zu={clone:Vi,merge:It};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class u0 extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends u0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,Mi=1;class Hu extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nt(xi,Mi,e,t);s.layers=this.layers,this.add(s);const r=new Nt(xi,Mi,e,t);r.layers=this.layers,this.add(r);const a=new Nt(xi,Mi,e,t);a.layers=this.layers,this.add(a);const o=new Nt(xi,Mi,e,t);o.layers=this.layers,this.add(o);const l=new Nt(xi,Mi,e,t);l.layers=this.layers,this.add(l);const c=new Nt(xi,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class h0 extends Pt{constructor(e,t,n,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gu extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?xt:Zt),this.texture=new h0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ss(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:In});r.uniforms.tEquirect.value=t;const a=new Lt(s,r),o=t.minFilter;return t.minFilter===us&&(t.minFilter=qt),new Hu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const sa=new E,Vu=new E,Wu=new $e;class Rn{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sa.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wu.getNormalMatrix(e),s=this.coplanarPoint(sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ys,Xs=new E;class lo{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],h=s[12],y=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-h).normalize(),n[1].setComponents(l+r,f+c,m+p,x+h).normalize(),n[2].setComponents(l+a,f+d,m+g,x+y).normalize(),n[3].setComponents(l-a,f-d,m-g,x-y).normalize(),n[4].setComponents(l-o,f-u,m-v,x-_).normalize(),t===vn)n[5].setComponents(l+o,f+u,m+v,x+_).normalize();else if(t===_r)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xs.x=s.normal.x>0?e.max.x:e.min.x,Xs.y=s.normal.y>0?e.max.y:e.min.y,Xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xu(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,d){const u=c.array,f=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,d,u){const f=d.array,p=d._updateRange,g=d.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const h=g[v];t?i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,d),u.version=c.version}}return{get:a,remove:o,update:l}}class co extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<d;h++){const y=h*f-a;for(let _=0;_<c;_++){const x=_*u-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const _=y+c*h,x=y+c*(h+1),R=y+1+c*(h+1),A=y+1+c*h;p.push(_,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.widthSegments,e.heightSegments)}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ah=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Th=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ih=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$h=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,If=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,up=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:$u,alphahash_pars_fragment:Yu,alphamap_fragment:qu,alphamap_pars_fragment:ju,alphatest_fragment:Ku,alphatest_pars_fragment:Zu,aomap_fragment:Ju,aomap_pars_fragment:Qu,batching_pars_vertex:eh,batching_vertex:th,begin_vertex:nh,beginnormal_vertex:ih,bsdfs:sh,iridescence_fragment:rh,bumpmap_pars_fragment:ah,clipping_planes_fragment:oh,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:ch,clipping_planes_vertex:dh,color_fragment:uh,color_pars_fragment:hh,color_pars_vertex:fh,color_vertex:ph,common:mh,cube_uv_reflection_fragment:gh,defaultnormal_vertex:vh,displacementmap_pars_vertex:_h,displacementmap_vertex:yh,emissivemap_fragment:xh,emissivemap_pars_fragment:Mh,colorspace_fragment:Sh,colorspace_pars_fragment:bh,envmap_fragment:Eh,envmap_common_pars_fragment:wh,envmap_pars_fragment:Th,envmap_pars_vertex:Ah,envmap_physical_pars_fragment:Bh,envmap_vertex:Ch,fog_vertex:Rh,fog_pars_vertex:Lh,fog_fragment:Ph,fog_pars_fragment:Dh,gradientmap_pars_fragment:Ih,lightmap_fragment:Uh,lightmap_pars_fragment:Nh,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:Oh,lights_pars_begin:zh,lights_toon_fragment:kh,lights_toon_pars_fragment:Hh,lights_phong_fragment:Gh,lights_phong_pars_fragment:Vh,lights_physical_fragment:Wh,lights_physical_pars_fragment:Xh,lights_fragment_begin:$h,lights_fragment_maps:Yh,lights_fragment_end:qh,logdepthbuf_fragment:jh,logdepthbuf_pars_fragment:Kh,logdepthbuf_pars_vertex:Zh,logdepthbuf_vertex:Jh,map_fragment:Qh,map_pars_fragment:ef,map_particle_fragment:tf,map_particle_pars_fragment:nf,metalnessmap_fragment:sf,metalnessmap_pars_fragment:rf,morphcolor_vertex:af,morphnormal_vertex:of,morphtarget_pars_vertex:lf,morphtarget_vertex:cf,normal_fragment_begin:df,normal_fragment_maps:uf,normal_pars_fragment:hf,normal_pars_vertex:ff,normal_vertex:pf,normalmap_pars_fragment:mf,clearcoat_normal_fragment_begin:gf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:yf,opaque_fragment:xf,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:bf,dithering_fragment:Ef,dithering_pars_fragment:wf,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:Cf,shadowmap_pars_vertex:Rf,shadowmap_vertex:Lf,shadowmask_pars_fragment:Pf,skinbase_vertex:Df,skinning_pars_vertex:If,skinning_vertex:Uf,skinnormal_vertex:Nf,specularmap_fragment:Ff,specularmap_pars_fragment:Of,tonemapping_fragment:zf,tonemapping_pars_fragment:Bf,transmission_fragment:kf,transmission_pars_fragment:Hf,uv_pars_fragment:Gf,uv_pars_vertex:Vf,uv_vertex:Wf,worldpos_vertex:Xf,background_vert:$f,background_frag:Yf,backgroundCube_vert:qf,backgroundCube_frag:jf,cube_vert:Kf,cube_frag:Zf,depth_vert:Jf,depth_frag:Qf,distanceRGBA_vert:ep,distanceRGBA_frag:tp,equirect_vert:np,equirect_frag:ip,linedashed_vert:sp,linedashed_frag:rp,meshbasic_vert:ap,meshbasic_frag:op,meshlambert_vert:lp,meshlambert_frag:cp,meshmatcap_vert:dp,meshmatcap_frag:up,meshnormal_vert:hp,meshnormal_frag:fp,meshphong_vert:pp,meshphong_frag:mp,meshphysical_vert:gp,meshphysical_frag:vp,meshtoon_vert:_p,meshtoon_frag:yp,points_vert:xp,points_frag:Mp,shadow_vert:Sp,shadow_frag:bp,sprite_vert:Ep,sprite_frag:wp},ue={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},sn={basic:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:It([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:It([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:It([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:It([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:It([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:It([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:It([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:It([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:It([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:It([ue.lights,ue.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};sn.physical={uniforms:It([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const $s={r:0,b:0,g:0};function Tp(i,e,t,n,s,r,a){const o=new Ke(0);let l=r===!0?0:1,c,d,u=null,f=0,p=null;function g(m,h){let y=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),y=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Sr)?(d===void 0&&(d=new Lt(new Ss(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Vi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=tt.getTransfer(_.colorSpace)!==st,(u!==_||f!==_.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Lt(new co(2,2),new Fn({name:"BackgroundMaterial",uniforms:Vi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=tt.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB($s,d0(i)),n.buffers.color.setClear($s.r,$s.g,$s.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Ap(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,d=!1;function u(P,N,k,j,q){let K=!1;if(a){const X=v(j,k,N);c!==X&&(c=X,p(c.object)),K=h(P,j,k,q),K&&y(P,j,k,q)}else{const X=N.wireframe===!0;(c.geometry!==j.id||c.program!==k.id||c.wireframe!==X)&&(c.geometry=j.id,c.program=k.id,c.wireframe=X,K=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(K||d)&&(d=!1,H(P,N,k,j),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,N,k){const j=k.wireframe===!0;let q=o[P.id];q===void 0&&(q={},o[P.id]=q);let K=q[N.id];K===void 0&&(K={},q[N.id]=K);let X=K[j];return X===void 0&&(X=m(f()),K[j]=X),X}function m(P){const N=[],k=[],j=[];for(let q=0;q<s;q++)N[q]=0,k[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:j,object:P,attributes:{},index:null}}function h(P,N,k,j){const q=c.attributes,K=N.attributes;let X=0;const ne=k.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const Z=q[ie];let le=K[ie];if(le===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;X++}return c.attributesNum!==X||c.index!==j}function y(P,N,k,j){const q={},K=N.attributes;let X=0;const ne=k.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let Z=K[ie];Z===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),q[ie]=le,X++}c.attributes=q,c.attributesNum=X,c.index=j}function _(){const P=c.newAttributes;for(let N=0,k=P.length;N<k;N++)P[N]=0}function x(P){R(P,0)}function R(P,N){const k=c.newAttributes,j=c.enabledAttributes,q=c.attributeDivisors;k[P]=1,j[P]===0&&(i.enableVertexAttribArray(P),j[P]=1),q[P]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),q[P]=N)}function A(){const P=c.newAttributes,N=c.enabledAttributes;for(let k=0,j=N.length;k<j;k++)N[k]!==P[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function T(P,N,k,j,q,K,X){X===!0?i.vertexAttribIPointer(P,N,k,q,K):i.vertexAttribPointer(P,N,k,j,q,K)}function H(P,N,k,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=j.attributes,K=k.getAttributes(),X=N.defaultAttributeValues;for(const ne in K){const ie=K[ne];if(ie.location>=0){let V=q[ne];if(V===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const Z=V.normalized,le=V.itemSize,ye=t.get(V);if(ye===void 0)continue;const Me=ye.buffer,Te=ye.type,O=ye.bytesPerElement,ce=n.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||V.gpuType===Yc);if(V.isInterleavedBufferAttribute){const Ie=V.data,U=Ie.stride,Re=V.offset;if(Ie.isInstancedInterleavedBuffer){for(let de=0;de<ie.locationSize;de++)R(ie.location+de,Ie.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let de=0;de<ie.locationSize;de++)x(ie.location+de);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let de=0;de<ie.locationSize;de++)T(ie.location+de,le/ie.locationSize,Te,Z,U*O,(Re+le/ie.locationSize*de)*O,ce)}else{if(V.isInstancedBufferAttribute){for(let Ie=0;Ie<ie.locationSize;Ie++)R(ie.location+Ie,V.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ie=0;Ie<ie.locationSize;Ie++)x(ie.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ie=0;Ie<ie.locationSize;Ie++)T(ie.location+Ie,le/ie.locationSize,Te,Z,le*O,le/ie.locationSize*Ie*O,ce)}}else if(X!==void 0){const Z=X[ne];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(ie.location,Z);break;case 3:i.vertexAttrib3fv(ie.location,Z);break;case 4:i.vertexAttrib4fv(ie.location,Z);break;default:i.vertexAttrib1fv(ie.location,Z)}}}}A()}function S(){Y();for(const P in o){const N=o[P];for(const k in N){const j=N[k];for(const q in j)g(j[q].object),delete j[q];delete N[k]}delete o[P]}}function C(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const k in N){const j=N[k];for(const q in j)g(j[q].object),delete j[q];delete N[k]}delete o[P.id]}function z(P){for(const N in o){const k=o[N];if(k[P.id]===void 0)continue;const j=k[P.id];for(const q in j)g(j[q].object),delete j[q];delete k[P.id]}}function Y(){J(),d=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:x,disableUnusedAttributes:A}}function Cp(i,e,t,n){const s=n.isWebGL2;let r;function a(d){r=d}function o(d,u){i.drawArrays(r,d,u),t.update(u,r,1)}function l(d,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,d,u,f),t.update(u,r,f)}function c(d,u,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(d[g],u[g]);else{p.multiDrawArraysWEBGL(r,d,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Rp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,x=a||e.has("OES_texture_float"),R=_&&x,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:R,maxSamples:A}}function Lp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Rn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const y=r?0:n,_=y*4;let x=h.clippingState||null;l.value=x,x=d(g,f,_,p);for(let R=0;R!==_;++R)x[R]=t[R];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,x=p;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Pp(i){let e=new WeakMap;function t(a,o){return o===Aa?a.mapping=Bi:o===Ca&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===Ca)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gu(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class p0 extends u0{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,Al=[.125,.215,.35,.446,.526,.582],qn=20,ra=new p0,Cl=new Ke;let aa=null,oa=0,la=0;const $n=(1+Math.sqrt(5))/2,Si=1/$n,Rl=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,$n,Si),new E(0,$n,-Si),new E(Si,0,$n),new E(-Si,0,$n),new E($n,Si,0),new E(-$n,Si,0)];class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,oa,la),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:hs,format:Kt,colorSpace:xn,depthBuffer:!1},s=Pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dp(r)),this._blurMaterial=Ip(r,e,t)}return s}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,s){const o=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Cl),d.toneMapping=Un,d.autoClear=!1;const p=new Ms({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Lt(new Ss,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Cl),v=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const _=this._cubeSize;Ys(s,y*_,h>2?_:0,_,_),d.setRenderTarget(s),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bi||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rl[(s-1)%Rl.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Lt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const h=[];let y=0;for(let T=0;T<qn;++T){const H=T/v,S=Math.exp(-H*H/2);h.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<h.length;T++)h[T]=h[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const x=this._sizeLods[s],R=3*x*(s>_-Li?s-_+Li:0),A=4*(this._cubeSize-x);Ys(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(u,ra)}}function Dp(i){const e=[],t=[],n=[];let s=i;const r=i-Li+1+Al.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Li?l=Al[a-i+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,v=3,m=2,h=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,H=A>2?0:-1,S=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];y.set(S,v*g*A),_.set(f,m*g*A);const C=[A,A,A,A,A,A];x.set(C,h*g*A)}const R=new it;R.setAttribute("position",new St(y,v)),R.setAttribute("uv",new St(_,m)),R.setAttribute("faceIndex",new St(x,h)),e.push(R),s>Li&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pl(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ip(i,e,t){const n=new Float32Array(qn),s=new E(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Dl(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Il(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Up(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Aa||l===Ca,d=l===Bi||l===ki;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ll(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||d&&u&&s(u)){t===null&&(t=new Ll(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Np(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fp(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){const R=y[_+0],A=y[_+1],T=y[_+2];f.push(R,A,A,T,T,R)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const R=_+0,A=_+1,T=_+2;f.push(R,A,A,T,T,R)}}else return;const m=new(i0(f)?c0:l0)(f,1);m.version=v;const h=r.get(u);h&&e.remove(h),r.set(u,m)}function d(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Op(i,e,t,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,h;if(s)m=i,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](r,g,o,p*l,v),t.update(g,r,v)}function f(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,v);let h=0;for(let y=0;y<v;y++)h+=g[y];t.update(h,r,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=f}function zp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bp(i,e){return i[0]-e[0]}function kp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Hp(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new at,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(d);if(m===void 0||m.count!==v){let N=function(){J.dispose(),r.delete(d),d.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),R===!0&&(S=3);let C=d.attributes.position.count*S,z=1;C>e.maxTextureSize&&(z=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Y=new Float32Array(C*z*4*v),J=new a0(Y,C,z,v);J.type=Pn,J.needsUpdate=!0;const P=S*4;for(let k=0;k<v;k++){const j=A[k],q=T[k],K=H[k],X=C*z*4*k;for(let ne=0;ne<j.count;ne++){const ie=ne*P;_===!0&&(a.fromBufferAttribute(j,ne),Y[X+ie+0]=a.x,Y[X+ie+1]=a.y,Y[X+ie+2]=a.z,Y[X+ie+3]=0),x===!0&&(a.fromBufferAttribute(q,ne),Y[X+ie+4]=a.x,Y[X+ie+5]=a.y,Y[X+ie+6]=a.z,Y[X+ie+7]=0),R===!0&&(a.fromBufferAttribute(K,ne),Y[X+ie+8]=a.x,Y[X+ie+9]=a.y,Y[X+ie+10]=a.z,Y[X+ie+11]=K.itemSize===4?a.w:1)}}m={count:v,texture:J,size:new ge(C,z)},r.set(d,m),d.addEventListener("dispose",N)}let h=0;for(let _=0;_<f.length;_++)h+=f[_];const y=d.morphTargetsRelative?1:1-h;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=n[d.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[d.id]=v}for(let x=0;x<g;x++){const R=v[x];R[0]=x,R[1]=f[x]}v.sort(kp);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Bp);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const R=o[x],A=R[0],T=R[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+x)!==m[A]&&d.setAttribute("morphTarget"+x,m[A]),h&&d.getAttribute("morphNormal"+x)!==h[A]&&d.setAttribute("morphNormal"+x,h[A]),s[x]=T,y+=T):(m&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),h&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),s[x]=0)}const _=d.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Gp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class m0 extends Pt{constructor(e,t,n,s,r,a,o,l,c,d){if(d=d!==void 0?d:Jn,d!==Jn&&d!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Jn&&(n=Ln),n===void 0&&d===Hi&&(n=Zn),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const g0=new Pt,v0=new m0(1,1);v0.compareFunction=n0;const _0=new a0,y0=new wu,x0=new h0,Ul=[],Nl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),zl=new Float32Array(4);function Xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ul[s];if(r===void 0&&(r=new Float32Array(s),Ul[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wr(i,e){let t=Nl[e];t===void 0&&(t=new Int32Array(e),Nl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Yp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),vt(t,n)}}function qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),vt(t,n)}}function jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),vt(t,n)}}function Kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function sm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?v0:g0;t.setTexture2D(e||r,s)}function rm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||y0,s)}function am(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||x0,s)}function om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_0,s)}function lm(i){switch(i){case 5126:return Vp;case 35664:return Wp;case 35665:return Xp;case 35666:return $p;case 35674:return Yp;case 35675:return qp;case 35676:return jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return Qp;case 5125:return em;case 36294:return tm;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}function cm(i,e){i.uniform1fv(this.addr,e)}function dm(i,e){const t=Xi(e,this.size,2);i.uniform2fv(this.addr,t)}function um(i,e){const t=Xi(e,this.size,3);i.uniform3fv(this.addr,t)}function hm(i,e){const t=Xi(e,this.size,4);i.uniform4fv(this.addr,t)}function fm(i,e){const t=Xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pm(i,e){const t=Xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mm(i,e){const t=Xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gm(i,e){i.uniform1iv(this.addr,e)}function vm(i,e){i.uniform2iv(this.addr,e)}function _m(i,e){i.uniform3iv(this.addr,e)}function ym(i,e){i.uniform4iv(this.addr,e)}function xm(i,e){i.uniform1uiv(this.addr,e)}function Mm(i,e){i.uniform2uiv(this.addr,e)}function Sm(i,e){i.uniform3uiv(this.addr,e)}function bm(i,e){i.uniform4uiv(this.addr,e)}function Em(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||g0,r[a])}function wm(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||y0,r[a])}function Tm(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||x0,r[a])}function Am(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_0,r[a])}function Cm(i){switch(i){case 5126:return cm;case 35664:return dm;case 35665:return um;case 35666:return hm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return vm;case 35668:case 35672:return _m;case 35669:case 35673:return ym;case 5125:return xm;case 36294:return Mm;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Am}}class Rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lm(t.type)}}class Lm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cm(t.type)}}class Pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Bl(i,e){i.seq.push(e),i.map[e.id]=e}function Dm(i,e,t){const n=i.name,s=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),a=ca.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bl(t,c===void 0?new Rm(o,i,e):new Lm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Pm(o),Bl(t,u)),t=u}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Dm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function kl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Im=37297;let Um=0;function Nm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Fm(i){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(i);let n;switch(e===t?n="":e===vr&&t===gr?n="LinearDisplayP3ToLinearSRGB":e===gr&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case xn:case br:return[n,"LinearTransferOETF"];case xt:case so:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Nm(i.getShaderSource(e),a)}else return s}function Om(i,e){const t=Fm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zm(i,e){let t;switch(e){case Fd:t="Linear";break;case Od:t="Reinhard";break;case zd:t="OptimizedCineon";break;case Xc:t="ACESFilmic";break;case kd:t="AgX";break;case Bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function Hm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pi(i){return i!==""}function Gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(Vm,Xm)}const Wm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xm(i,e){let t=He[e];if(t===void 0){const n=Wm.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(i){return i.replace($m,Ym)}function Ym(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function jm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case ki:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Km(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function Zm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ud:e="ENVMAP_BLENDING_MIX";break;case Nd:e="ENVMAP_BLENDING_ADD";break}return e}function Jm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qm(t),c=jm(t),d=Km(t),u=Zm(t),f=Jm(t),p=t.isWebGL2?"":Bm(t),g=km(t),v=Hm(r),m=s.createProgram();let h,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pi).join(`
`),h.length>0&&(h+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pi).join(`
`),y.length>0&&(y+=`
`)):(h=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),y=[p,Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?He.tonemapping_pars_fragment:"",t.toneMapping!==Un?zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Om("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),a=Ia(a),a=Gl(a,t),a=Vl(a,t),o=Ia(o),o=Gl(o,t),o=Vl(o,t),a=Wl(a),o=Wl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const x=_+h+a,R=_+y+o,A=kl(s,s.VERTEX_SHADER,x),T=kl(s,s.FRAGMENT_SHADER,R);s.attachShader(m,A),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function H(Y){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(T).trim();let k=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,T);else{const q=Hl(s,A,"vertex"),K=Hl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+q+`
`+K)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||N==="")&&(j=!1);j&&(Y.diagnostics={runnable:k,programLog:J,vertexShader:{log:P,prefix:h},fragmentShader:{log:N,prefix:y}})}s.deleteShader(A),s.deleteShader(T),S=new cr(s,m),C=Gm(s,m)}let S;this.getUniforms=function(){return S===void 0&&H(this),S};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,Im)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Um++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let eg=0;class tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ng(e),t.set(e,n)),n}}class ng{constructor(e){this.id=eg++,this.code=e,this.usedTimes=0}}function ig(i,e,t,n,s,r,a){const o=new oo,l=new tg,c=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,C,z,Y,J){const P=Y.fog,N=J.geometry,k=S.isMeshStandardMaterial?Y.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),q=j&&j.mapping===Sr?j.image.height:null,K=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const X=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=X!==void 0?X.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let V,Z,le,ye;if(K){const dt=sn[K];V=dt.vertexShader,Z=dt.fragmentShader}else V=S.vertexShader,Z=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const Me=i.getRenderTarget(),Te=J.isInstancedMesh===!0,O=J.isBatchedMesh===!0,ce=!!S.map,Ie=!!S.matcap,U=!!j,Re=!!S.aoMap,de=!!S.lightMap,me=!!S.bumpMap,he=!!S.normalMap,Ze=!!S.displacementMap,Pe=!!S.emissiveMap,w=!!S.metalnessMap,M=!!S.roughnessMap,B=S.anisotropy>0,se=S.clearcoat>0,ee=S.iridescence>0,re=S.sheen>0,be=S.transmission>0,pe=B&&!!S.anisotropyMap,Se=se&&!!S.clearcoatMap,De=se&&!!S.clearcoatNormalMap,Be=se&&!!S.clearcoatRoughnessMap,Q=ee&&!!S.iridescenceMap,Qe=ee&&!!S.iridescenceThicknessMap,Ge=re&&!!S.sheenColorMap,Fe=re&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ve=!!S.specularColorMap,L=!!S.specularIntensityMap,ae=be&&!!S.transmissionMap,Ee=be&&!!S.thicknessMap,xe=!!S.gradientMap,te=!!S.alphaMap,I=S.alphaTest>0,oe=!!S.alphaHash,fe=!!S.extensions,Ue=!!N.attributes.uv1,Le=!!N.attributes.uv2,qe=!!N.attributes.uv3;let je=Un;return S.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(je=i.toneMapping),{isWebGL2:d,shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:Z,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:O,instancing:Te,instancingColor:Te&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:xn,map:ce,matcap:Ie,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:q,aoMap:Re,lightMap:de,bumpMap:me,normalMap:he,displacementMap:f&&Ze,emissiveMap:Pe,normalMapObjectSpace:he&&S.normalMapType===Jd,normalMapTangentSpace:he&&S.normalMapType===t0,metalnessMap:w,roughnessMap:M,anisotropy:B,anisotropyMap:pe,clearcoat:se,clearcoatMap:Se,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Qe,sheen:re,sheenColorMap:Ge,sheenRoughnessMap:Fe,specularMap:Ae,specularColorMap:ve,specularIntensityMap:L,transmission:be,transmissionMap:ae,thicknessMap:Ee,gradientMap:xe,opaque:S.transparent===!1&&S.blending===Ii,alphaMap:te,alphaTest:I,alphaHash:oe,combine:S.combine,mapUv:ce&&v(S.map.channel),aoMapUv:Re&&v(S.aoMap.channel),lightMapUv:de&&v(S.lightMap.channel),bumpMapUv:me&&v(S.bumpMap.channel),normalMapUv:he&&v(S.normalMap.channel),displacementMapUv:Ze&&v(S.displacementMap.channel),emissiveMapUv:Pe&&v(S.emissiveMap.channel),metalnessMapUv:w&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:pe&&v(S.anisotropyMap.channel),clearcoatMapUv:Se&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(S.sheenRoughnessMap.channel),specularMapUv:Ae&&v(S.specularMap.channel),specularColorMapUv:ve&&v(S.specularColorMap.channel),specularIntensityMapUv:L&&v(S.specularIntensityMap.channel),transmissionMapUv:ae&&v(S.transmissionMap.channel),thicknessMapUv:Ee&&v(S.thicknessMap.channel),alphaMapUv:te&&v(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(he||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Le,vertexUv3s:qe,pointsUvs:J.isPoints===!0&&!!N.attributes.uv&&(ce||te),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gt,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)C.push(z),C.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(y(C,S),_(C,S),C.push(i.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function y(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function _(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function x(S){const C=g[S.type];let z;if(C){const Y=sn[C];z=zu.clone(Y.uniforms)}else z=S.uniforms;return z}function R(S,C){let z;for(let Y=0,J=c.length;Y<J;Y++){const P=c[Y];if(P.cacheKey===C){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Qm(i,C,S,r),c.push(z)),z}function A(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:H}}function sg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $l(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,v,m){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=v,h.group=m),e++,h}function o(u,f,p,g,v,m){const h=a(u,f,p,g,v,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(u,f,p,g,v,m){const h=a(u,f,p,g,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||rg),n.length>1&&n.sort(f||$l),s.length>1&&s.sort(f||$l)}function d(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function ag(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function og(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Ke};break;case"SpotLight":t={position:new E,direction:new E,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function lg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cg=0;function dg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ug(i,e){const t=new og,n=lg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new E);const r=new E,a=new rt,o=new rt;function l(d,u){let f=0,p=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let v=0,m=0,h=0,y=0,_=0,x=0,R=0,A=0,T=0,H=0,S=0;d.sort(dg);const C=u===!0?Math.PI:1;for(let Y=0,J=d.length;Y<J;Y++){const P=d[Y],N=P.color,k=P.intensity,j=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=N.r*k*C,p+=N.g*k*C,g+=N.b*k*C;else if(P.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(P.sh.coefficients[K],k);S++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*C),P.castShadow){const X=P.shadow,ne=n.get(P);ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,s.directionalShadow[v]=ne,s.directionalShadowMap[v]=q,s.directionalShadowMatrix[v]=P.shadow.matrix,x++}s.directional[v]=K,v++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(N).multiplyScalar(k*C),K.distance=j,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,s.spot[h]=K;const X=P.shadow;if(P.map&&(s.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&H++),s.spotLightMatrix[h]=X.matrix,P.castShadow){const ne=n.get(P);ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,s.spotShadow[h]=ne,s.spotShadowMap[h]=q,A++}h++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(N).multiplyScalar(k),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=K,y++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*C),K.distance=P.distance,K.decay=P.decay,P.castShadow){const X=P.shadow,ne=n.get(P);ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,ne.shadowCameraNear=X.camera.near,ne.shadowCameraFar=X.camera.far,s.pointShadow[m]=ne,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=P.shadow.matrix,R++}s.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(k*C),K.groundColor.copy(P.groundColor).multiplyScalar(k*C),s.hemi[_]=K,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const z=s.hash;(z.directionalLength!==v||z.pointLength!==m||z.spotLength!==h||z.rectAreaLength!==y||z.hemiLength!==_||z.numDirectionalShadows!==x||z.numPointShadows!==R||z.numSpotShadows!==A||z.numSpotMaps!==T||z.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=h,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=A+T-H,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=S,z.directionalLength=v,z.pointLength=m,z.spotLength=h,z.rectAreaLength=y,z.hemiLength=_,z.numDirectionalShadows=x,z.numPointShadows=R,z.numSpotShadows=A,z.numSpotMaps=T,z.numLightProbes=S,s.version=cg++)}function c(d,u){let f=0,p=0,g=0,v=0,m=0;const h=u.matrixWorldInverse;for(let y=0,_=d.length;y<_;y++){const x=d[y];if(x.isDirectionalLight){const R=s.directional[f];R.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(h),f++}else if(x.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(h),g++}else if(x.isRectAreaLight){const R=s.rectArea[v];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(h),o.identity(),a.copy(x.matrixWorld),a.premultiply(h),o.extractRotation(a),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const R=s.point[p];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const R=s.hemi[m];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:s}}function ql(i,e){const t=new ug(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hg(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new ql(i,e),t.set(r,[l])):a>=o.length?(l=new ql(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class fg extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pg extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vg(i,e,t){let n=new lo;const s=new ge,r=new ge,a=new at,o=new fg({depthPacking:Zd}),l=new pg,c={},d=t.maxTextureSize,u={[yn]:zt,[zt]:yn,[Gt]:Gt},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new it;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let h=this.type;this.render=function(A,T,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),C=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(In),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=h!==pn&&this.type===pn,P=h===pn&&this.type!==pn;for(let N=0,k=A.length;N<k;N++){const j=A[N],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const K=q.getFrameExtents();if(s.multiply(K),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,q.mapSize.y=r.y)),q.map===null||J===!0||P===!0){const ne=this.type!==pn?{minFilter:bt,magFilter:bt}:{};q.map!==null&&q.map.dispose(),q.map=new ti(s.x,s.y,ne),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const X=q.getViewportCount();for(let ne=0;ne<X;ne++){const ie=q.getViewport(ne);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),Y.viewport(a),q.updateMatrices(j,ne),n=q.getFrustum(),x(T,H,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===pn&&y(q,H),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,C,z)};function y(A,T){const H=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,H,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,H,p,v,null)}function _(A,T,H,S){let C=null;const z=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)C=z;else if(C=H.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Y=C.uuid,J=T.uuid;let P=c[Y];P===void 0&&(P={},c[Y]=P);let N=P[J];N===void 0&&(N=C.clone(),P[J]=N,T.addEventListener("dispose",R)),C=N}if(C.visible=T.visible,C.wireframe=T.wireframe,S===pn?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=i.properties.get(C);Y.light=H}return C}function x(A,T,H,S,C){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);const J=e.update(A),P=A.material;if(Array.isArray(P)){const N=J.groups;for(let k=0,j=N.length;k<j;k++){const q=N[k],K=P[q.materialIndex];if(K&&K.visible){const X=_(A,K,S,C);A.onBeforeShadow(i,A,T,H,J,X,q),i.renderBufferDirect(H,null,J,X,A,q),A.onAfterShadow(i,A,T,H,J,X,q)}}}else if(P.visible){const N=_(A,P,S,C);A.onBeforeShadow(i,A,T,H,J,N,null),i.renderBufferDirect(H,null,J,N,A,null),A.onAfterShadow(i,A,T,H,J,N,null)}}const Y=A.children;for(let J=0,P=Y.length;J<P;J++)x(Y[J],T,H,S,C)}function R(A){A.target.removeEventListener("dispose",R);for(const H in c){const S=c[H],C=A.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function _g(i,e,t){const n=t.isWebGL2;function s(){let I=!1;const oe=new at;let fe=null;const Ue=new at(0,0,0,0);return{setMask:function(Le){fe!==Le&&!I&&(i.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){I=Le},setClear:function(Le,qe,je,lt,dt){dt===!0&&(Le*=lt,qe*=lt,je*=lt),oe.set(Le,qe,je,lt),Ue.equals(oe)===!1&&(i.clearColor(Le,qe,je,lt),Ue.copy(oe))},reset:function(){I=!1,fe=null,Ue.set(-1,0,0,0)}}}function r(){let I=!1,oe=null,fe=null,Ue=null;return{setTest:function(Le){Le?O(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Le){oe!==Le&&!I&&(i.depthMask(Le),oe=Le)},setFunc:function(Le){if(fe!==Le){switch(Le){case Ad:i.depthFunc(i.NEVER);break;case Cd:i.depthFunc(i.ALWAYS);break;case Rd:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case Ld:i.depthFunc(i.EQUAL);break;case Pd:i.depthFunc(i.GEQUAL);break;case Dd:i.depthFunc(i.GREATER);break;case Id:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Le}},setLocked:function(Le){I=Le},setClear:function(Le){Ue!==Le&&(i.clearDepth(Le),Ue=Le)},reset:function(){I=!1,oe=null,fe=null,Ue=null}}}function a(){let I=!1,oe=null,fe=null,Ue=null,Le=null,qe=null,je=null,lt=null,dt=null;return{setTest:function(Je){I||(Je?O(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!I&&(i.stencilMask(Je),oe=Je)},setFunc:function(Je,ft,nn){(fe!==Je||Ue!==ft||Le!==nn)&&(i.stencilFunc(Je,ft,nn),fe=Je,Ue=ft,Le=nn)},setOp:function(Je,ft,nn){(qe!==Je||je!==ft||lt!==nn)&&(i.stencilOp(Je,ft,nn),qe=Je,je=ft,lt=nn)},setLocked:function(Je){I=Je},setClear:function(Je){dt!==Je&&(i.clearStencil(Je),dt=Je)},reset:function(){I=!1,oe=null,fe=null,Ue=null,Le=null,qe=null,je=null,lt=null,dt=null}}}const o=new s,l=new r,c=new a,d=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,v=[],m=null,h=!1,y=null,_=null,x=null,R=null,A=null,T=null,H=null,S=new Ke(0,0,0),C=0,z=!1,Y=null,J=null,P=null,N=null,k=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=K>=2);let ne=null,ie={};const V=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),le=new at().fromArray(V),ye=new at().fromArray(Z);function Me(I,oe,fe,Ue){const Le=new Uint8Array(4),qe=i.createTexture();i.bindTexture(I,qe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<fe;je++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(oe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return qe}const Te={};Te[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),O(i.DEPTH_TEST),l.setFunc(fr),Pe(!1),w(Po),O(i.CULL_FACE),he(In);function O(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function ce(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Ie(I,oe){return p[I]!==oe?(i.bindFramebuffer(I,oe),p[I]=oe,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function U(I,oe){let fe=v,Ue=!1;if(I)if(fe=g.get(oe),fe===void 0&&(fe=[],g.set(oe,fe)),I.isWebGLMultipleRenderTargets){const Le=I.texture;if(fe.length!==Le.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,je=Le.length;qe<je;qe++)fe[qe]=i.COLOR_ATTACHMENT0+qe;fe.length=Le.length,Ue=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,Ue=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Re(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const de={[Yn]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};if(n)de[Uo]=i.MIN,de[No]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(de[Uo]=I.MIN_EXT,de[No]=I.MAX_EXT)}const me={[pd]:i.ZERO,[md]:i.ONE,[gd]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[_d]:i.DST_ALPHA,[vd]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[Md]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Ed]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function he(I,oe,fe,Ue,Le,qe,je,lt,dt,Je){if(I===In){h===!0&&(ce(i.BLEND),h=!1);return}if(h===!1&&(O(i.BLEND),h=!0),I!==ud){if(I!==y||Je!==z){if((_!==Yn||A!==Yn)&&(i.blendEquation(i.FUNC_ADD),_=Yn,A=Yn),Je)switch(I){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,R=null,T=null,H=null,S.set(0,0,0),C=0,y=I,z=Je}return}Le=Le||oe,qe=qe||fe,je=je||Ue,(oe!==_||Le!==A)&&(i.blendEquationSeparate(de[oe],de[Le]),_=oe,A=Le),(fe!==x||Ue!==R||qe!==T||je!==H)&&(i.blendFuncSeparate(me[fe],me[Ue],me[qe],me[je]),x=fe,R=Ue,T=qe,H=je),(lt.equals(S)===!1||dt!==C)&&(i.blendColor(lt.r,lt.g,lt.b,dt),S.copy(lt),C=dt),y=I,z=!1}function Ze(I,oe){I.side===Gt?ce(i.CULL_FACE):O(i.CULL_FACE);let fe=I.side===zt;oe&&(fe=!fe),Pe(fe),I.blending===Ii&&I.transparent===!1?he(In):he(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Ue=I.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),B(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(I){Y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),Y=I)}function w(I){I!==cd?(O(i.CULL_FACE),I!==J&&(I===Po?i.cullFace(i.BACK):I===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),J=I}function M(I){I!==P&&(q&&i.lineWidth(I),P=I)}function B(I,oe,fe){I?(O(i.POLYGON_OFFSET_FILL),(N!==oe||k!==fe)&&(i.polygonOffset(oe,fe),N=oe,k=fe)):ce(i.POLYGON_OFFSET_FILL)}function se(I){I?O(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function ee(I){I===void 0&&(I=i.TEXTURE0+j-1),ne!==I&&(i.activeTexture(I),ne=I)}function re(I,oe,fe){fe===void 0&&(ne===null?fe=i.TEXTURE0+j-1:fe=ne);let Ue=ie[fe];Ue===void 0&&(Ue={type:void 0,texture:void 0},ie[fe]=Ue),(Ue.type!==I||Ue.texture!==oe)&&(ne!==fe&&(i.activeTexture(fe),ne=fe),i.bindTexture(I,oe||Te[I]),Ue.type=I,Ue.texture=oe)}function be(){const I=ie[ne];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(I){le.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),le.copy(I))}function ae(I){ye.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ye.copy(I))}function Ee(I,oe){let fe=u.get(oe);fe===void 0&&(fe=new WeakMap,u.set(oe,fe));let Ue=fe.get(I);Ue===void 0&&(Ue=i.getUniformBlockIndex(oe,I.name),fe.set(I,Ue))}function xe(I,oe){const Ue=u.get(oe).get(I);d.get(oe)!==Ue&&(i.uniformBlockBinding(oe,Ue,I.__bindingPointIndex),d.set(oe,Ue))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,ie={},p={},g=new WeakMap,v=[],m=null,h=!1,y=null,_=null,x=null,R=null,A=null,T=null,H=null,S=new Ke(0,0,0),C=0,z=!1,Y=null,J=null,P=null,N=null,k=null,le.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:O,disable:ce,bindFramebuffer:Ie,drawBuffers:U,useProgram:Re,setBlending:he,setMaterial:Ze,setFlipSided:Pe,setCullFace:w,setLineWidth:M,setPolygonOffset:B,setScissorTest:se,activeTexture:ee,bindTexture:re,unbindTexture:be,compressedTexImage2D:pe,compressedTexImage3D:Se,texImage2D:Ae,texImage3D:ve,updateUBOMapping:Ee,uniformBlockBinding:xe,texStorage2D:Ge,texStorage3D:Fe,texSubImage2D:De,texSubImage3D:Be,compressedTexSubImage2D:Q,compressedTexSubImage3D:Qe,scissor:L,viewport:ae,reset:te}}function yg(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):fs("canvas")}function v(w,M,B,se){let ee=1;if((w.width>se||w.height>se)&&(ee=se/Math.max(w.width,w.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const re=M?yr:Math.floor,be=re(ee*w.width),pe=re(ee*w.height);u===void 0&&(u=g(be,pe));const Se=B?g(be,pe):u;return Se.width=be,Se.height=pe,Se.getContext("2d").drawImage(w,0,0,be,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+be+"x"+pe+")."),Se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Da(w.width)&&Da(w.height)}function h(w){return o?!1:w.wrapS!==Ft||w.wrapT!==Ft||w.minFilter!==bt&&w.minFilter!==qt}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==bt&&w.minFilter!==qt}function _(w){i.generateMipmap(w)}function x(w,M,B,se,ee=!1){if(o===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=M;if(M===i.RED&&(B===i.FLOAT&&(re=i.R32F),B===i.HALF_FLOAT&&(re=i.R16F),B===i.UNSIGNED_BYTE&&(re=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(re=i.R8UI),B===i.UNSIGNED_SHORT&&(re=i.R16UI),B===i.UNSIGNED_INT&&(re=i.R32UI),B===i.BYTE&&(re=i.R8I),B===i.SHORT&&(re=i.R16I),B===i.INT&&(re=i.R32I)),M===i.RG&&(B===i.FLOAT&&(re=i.RG32F),B===i.HALF_FLOAT&&(re=i.RG16F),B===i.UNSIGNED_BYTE&&(re=i.RG8)),M===i.RGBA){const be=ee?mr:tt.getTransfer(se);B===i.FLOAT&&(re=i.RGBA32F),B===i.HALF_FLOAT&&(re=i.RGBA16F),B===i.UNSIGNED_BYTE&&(re=be===st?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(w,M,B){return y(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){return w===bt||w===Fo||w===Fr?i.NEAREST:i.LINEAR}function T(w){const M=w.target;M.removeEventListener("dispose",T),S(M),M.isVideoTexture&&d.delete(M)}function H(w){const M=w.target;M.removeEventListener("dispose",H),z(M)}function S(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,se=f.get(B);if(se){const ee=se[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(w),Object.keys(se).length===0&&f.delete(B)}n.remove(w)}function C(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const B=w.source,se=f.get(B);delete se[M.__cacheKey],a.memory.textures--}function z(w){const M=w.texture,B=n.get(w),se=n.get(M);if(se.__webglTexture!==void 0&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let re=0;re<B.__webglFramebuffer[ee].length;re++)i.deleteFramebuffer(B.__webglFramebuffer[ee][re]);else i.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)i.deleteFramebuffer(B.__webglFramebuffer[ee]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,re=M.length;ee<re;ee++){const be=n.get(M[ee]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(M[ee])}n.remove(M),n.remove(w)}let Y=0;function J(){Y=0}function P(){const w=Y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),Y+=1,w}function N(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function k(w,M){const B=n.get(w);if(w.isVideoTexture&&Ze(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const se=w.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,w,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function j(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){le(B,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function q(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){le(B,w,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function K(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ye(B,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const X={[pr]:i.REPEAT,[Ft]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},ne={[bt]:i.NEAREST,[Fo]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Hd]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},ie={[Qd]:i.NEVER,[ru]:i.ALWAYS,[eu]:i.LESS,[n0]:i.LEQUAL,[tu]:i.EQUAL,[su]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function V(w,M,B){if(B?(i.texParameteri(w,i.TEXTURE_WRAP_S,X[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,X[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,X[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ne[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ne[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Ft||M.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==bt&&M.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===bt||M.minFilter!==Fr&&M.minFilter!==us||M.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===hs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));const se=M.source;let ee=f.get(se);ee===void 0&&(ee={},f.set(se,ee));const re=N(M);if(re!==w.__cacheKey){ee[re]===void 0&&(ee[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[re].usedTimes++;const be=ee[w.__cacheKey];be!==void 0&&(ee[w.__cacheKey].usedTimes--,be.usedTimes===0&&C(M)),w.__cacheKey=re,w.__webglTexture=ee[re].texture}return B}function le(w,M,B){let se=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=i.TEXTURE_3D);const ee=Z(w,M),re=M.source;t.bindTexture(se,w.__webglTexture,i.TEXTURE0+B);const be=n.get(re);if(re.version!==be.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const pe=tt.getPrimaries(tt.workingColorSpace),Se=M.colorSpace===Zt?null:tt.getPrimaries(M.colorSpace),De=M.colorSpace===Zt||pe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=h(M)&&m(M.image)===!1;let Q=v(M.image,Be,!1,s.maxTextureSize);Q=Pe(M,Q);const Qe=m(Q)||o,Ge=r.convert(M.format,M.colorSpace);let Fe=r.convert(M.type),Ae=x(M.internalFormat,Ge,Fe,M.colorSpace,M.isVideoTexture);V(se,M,Qe);let ve;const L=M.mipmaps,ae=o&&M.isVideoTexture!==!0&&Ae!==Qc,Ee=be.__version===void 0||ee===!0,xe=R(M,Q,Qe);if(M.isDepthTexture)Ae=i.DEPTH_COMPONENT,o?M.type===Pn?Ae=i.DEPTH_COMPONENT32F:M.type===Ln?Ae=i.DEPTH_COMPONENT24:M.type===Zn?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:M.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Jn&&Ae===i.DEPTH_COMPONENT&&M.type!==io&&M.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ln,Fe=r.convert(M.type)),M.format===Hi&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,M.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zn,Fe=r.convert(M.type))),Ee&&(ae?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,Ge,Fe,null));else if(M.isDataTexture)if(L.length>0&&Qe){ae&&Ee&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,L[0].width,L[0].height);for(let te=0,I=L.length;te<I;te++)ve=L[te],ae?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,Ge,Fe,ve.data):t.texImage2D(i.TEXTURE_2D,te,Ae,ve.width,ve.height,0,Ge,Fe,ve.data);M.generateMipmaps=!1}else ae?(Ee&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Ge,Fe,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,Ge,Fe,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,L[0].width,L[0].height,Q.depth);for(let te=0,I=L.length;te<I;te++)ve=L[te],M.format!==Kt?Ge!==null?ae?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,Q.depth,Ge,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ae,ve.width,ve.height,Q.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,Q.depth,Ge,Fe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ae,ve.width,ve.height,Q.depth,0,Ge,Fe,ve.data)}else{ae&&Ee&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,L[0].width,L[0].height);for(let te=0,I=L.length;te<I;te++)ve=L[te],M.format!==Kt?Ge!==null?ae?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,Ge,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,Ge,Fe,ve.data):t.texImage2D(i.TEXTURE_2D,te,Ae,ve.width,ve.height,0,Ge,Fe,ve.data)}else if(M.isDataArrayTexture)ae?(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Fe,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,Ge,Fe,Q.data);else if(M.isData3DTexture)ae?(Ee&&t.texStorage3D(i.TEXTURE_3D,xe,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Fe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,Ge,Fe,Q.data);else if(M.isFramebufferTexture){if(Ee)if(ae)t.texStorage2D(i.TEXTURE_2D,xe,Ae,Q.width,Q.height);else{let te=Q.width,I=Q.height;for(let oe=0;oe<xe;oe++)t.texImage2D(i.TEXTURE_2D,oe,Ae,te,I,0,Ge,Fe,null),te>>=1,I>>=1}}else if(L.length>0&&Qe){ae&&Ee&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,L[0].width,L[0].height);for(let te=0,I=L.length;te<I;te++)ve=L[te],ae?t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ge,Fe,ve):t.texImage2D(i.TEXTURE_2D,te,Ae,Ge,Fe,ve);M.generateMipmaps=!1}else ae?(Ee&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Fe,Q)):t.texImage2D(i.TEXTURE_2D,0,Ae,Ge,Fe,Q);y(M,Qe)&&_(se),be.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ye(w,M,B){if(M.image.length!==6)return;const se=Z(w,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const re=n.get(ee);if(ee.version!==re.__version||se===!0){t.activeTexture(i.TEXTURE0+B);const be=tt.getPrimaries(tt.workingColorSpace),pe=M.colorSpace===Zt?null:tt.getPrimaries(M.colorSpace),Se=M.colorSpace===Zt||be===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!De&&!Be?Q[te]=v(M.image[te],!1,!0,s.maxCubemapSize):Q[te]=Be?M.image[te].image:M.image[te],Q[te]=Pe(M,Q[te]);const Qe=Q[0],Ge=m(Qe)||o,Fe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),ve=x(M.internalFormat,Fe,Ae,M.colorSpace),L=o&&M.isVideoTexture!==!0,ae=re.__version===void 0||se===!0;let Ee=R(M,Qe,Ge);V(i.TEXTURE_CUBE_MAP,M,Ge);let xe;if(De){L&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ve,Qe.width,Qe.height);for(let te=0;te<6;te++){xe=Q[te].mipmaps;for(let I=0;I<xe.length;I++){const oe=xe[I];M.format!==Kt?Fe!==null?L?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I,0,0,oe.width,oe.height,Fe,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I,ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I,0,0,oe.width,oe.height,Fe,Ae,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I,ve,oe.width,oe.height,0,Fe,Ae,oe.data)}}}else{xe=M.mipmaps,L&&ae&&(xe.length>0&&Ee++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ve,Q[0].width,Q[0].height));for(let te=0;te<6;te++)if(Be){L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,Fe,Ae,Q[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ve,Q[te].width,Q[te].height,0,Fe,Ae,Q[te].data);for(let I=0;I<xe.length;I++){const fe=xe[I].image[te].image;L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I+1,0,0,fe.width,fe.height,Fe,Ae,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I+1,ve,fe.width,fe.height,0,Fe,Ae,fe.data)}}else{L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,Ae,Q[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ve,Fe,Ae,Q[te]);for(let I=0;I<xe.length;I++){const oe=xe[I];L?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I+1,0,0,Fe,Ae,oe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,I+1,ve,Fe,Ae,oe.image[te])}}}y(M,Ge)&&_(i.TEXTURE_CUBE_MAP),re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Me(w,M,B,se,ee,re){const be=r.convert(B.format,B.colorSpace),pe=r.convert(B.type),Se=x(B.internalFormat,be,pe,B.colorSpace);if(!n.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>re),Q=Math.max(1,M.height>>re);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,Se,Be,Q,M.depth,0,be,pe,null):t.texImage2D(ee,re,Se,Be,Q,0,be,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),he(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ee,n.get(B).__webglTexture,0,me(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ee,n.get(B).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let se=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||he(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pn?se=i.DEPTH_COMPONENT32F:ee.type===Ln&&(se=i.DEPTH_COMPONENT24));const re=me(M);he(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,se,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,se,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,se,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const se=me(M);B&&he(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,M.width,M.height):he(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<se.length;ee++){const re=se[ee],be=r.convert(re.format,re.colorSpace),pe=r.convert(re.type),Se=x(re.internalFormat,be,pe,re.colorSpace),De=me(M);B&&he(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Se,M.width,M.height):he(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,Se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Se,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const se=n.get(M.depthTexture).__webglTexture,ee=me(M);if(M.depthTexture.format===Jn)he(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(M.depthTexture.format===Hi)he(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ce(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");O(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=i.createRenderbuffer(),Te(M.__webglDepthbuffer[se],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Te(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,M,B){const se=n.get(w);M!==void 0&&Me(se.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ce(w)}function U(w){const M=w.texture,B=n.get(w),se=n.get(M);w.addEventListener("dispose",H),w.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=M.version,a.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,re=w.isWebGLMultipleRenderTargets===!0,be=m(w)||o;if(ee){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)B.__webglFramebuffer[pe][Se]=i.createFramebuffer()}else B.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)B.__webglFramebuffer[pe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(re)if(s.drawBuffers){const pe=w.texture;for(let Se=0,De=pe.length;Se<De;Se++){const Be=n.get(pe[Se]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&he(w)===!1){const pe=re?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Se=0;Se<pe.length;Se++){const De=pe[Se];B.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Se]);const Be=r.convert(De.format,De.colorSpace),Q=r.convert(De.type),Qe=x(De.internalFormat,Be,Q,De.colorSpace,w.isXRRenderTarget===!0),Ge=me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Qe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,B.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,be);for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Me(B.__webglFramebuffer[pe][Se],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else Me(B.__webglFramebuffer[pe],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(M,be)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const pe=w.texture;for(let Se=0,De=pe.length;Se<De;Se++){const Be=pe[Se],Q=n.get(Be);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),V(i.TEXTURE_2D,Be,be),Me(B.__webglFramebuffer,w,Be,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),y(Be,be)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?pe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,se.__webglTexture),V(pe,M,be),o&&M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Me(B.__webglFramebuffer[Se],w,M,i.COLOR_ATTACHMENT0,pe,Se);else Me(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,pe,0);y(M,be)&&_(pe),t.unbindTexture()}w.depthBuffer&&ce(w)}function Re(w){const M=m(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0,ee=B.length;se<ee;se++){const re=B[se];if(y(re,M)){const be=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(re).__webglTexture;t.bindTexture(be,pe),_(be),t.unbindTexture()}}}function de(w){if(o&&w.samples>0&&he(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,se=w.height;let ee=i.COLOR_BUFFER_BIT;const re=[],be=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(w),Se=w.isWebGLMultipleRenderTargets===!0;if(Se)for(let De=0;De<M.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let De=0;De<M.length;De++){re.push(i.COLOR_ATTACHMENT0+De),w.depthBuffer&&re.push(be);const Be=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Be===!1&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),Se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[De]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),Se){const Q=n.get(M[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,B,se,0,0,B,se,ee,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let De=0;De<M.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const Be=n.get(M[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function me(w){return Math.min(s.maxSamples,w.samples)}function he(w){const M=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(w){const M=a.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}function Pe(w,M){const B=w.colorSpace,se=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Pa||B!==xn&&B!==Zt&&(tt.getTransfer(B)===st?o===!1?e.has("EXT_sRGB")===!0&&se===Kt?(w.format=Pa,w.minFilter=qt,w.generateMipmaps=!1):M=s0.sRGBToLinear(M):(se!==Kt||ee!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=Ie,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=he}function xg(i,e,t){const n=t.isWebGL2;function s(r,a=Zt){let o;const l=tt.getTransfer(a);if(r===Nn)return i.UNSIGNED_BYTE;if(r===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===jc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Gd)return i.BYTE;if(r===Vd)return i.SHORT;if(r===io)return i.UNSIGNED_SHORT;if(r===Yc)return i.INT;if(r===Ln)return i.UNSIGNED_INT;if(r===Pn)return i.FLOAT;if(r===hs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Wd)return i.ALPHA;if(r===Kt)return i.RGBA;if(r===Xd)return i.LUMINANCE;if(r===$d)return i.LUMINANCE_ALPHA;if(r===Jn)return i.DEPTH_COMPONENT;if(r===Hi)return i.DEPTH_STENCIL;if(r===Pa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Yd)return i.RED;if(r===Kc)return i.RED_INTEGER;if(r===qd)return i.RG;if(r===Zc)return i.RG_INTEGER;if(r===Jc)return i.RGBA_INTEGER;if(r===Or||r===zr||r===Br||r===kr)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Or)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Or)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Br)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oo||r===zo||r===Bo||r===ko)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Oo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ko)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ho||r===Go)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ho)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Go)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vo||r===Wo||r===Xo||r===$o||r===Yo||r===qo||r===jo||r===Ko||r===Zo||r===Jo||r===Qo||r===el||r===tl||r===nl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$o)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ko)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qo)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===el)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hr||r===il||r===sl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Hr)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===il)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jd||r===rl||r===al||r===ol)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Hr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===rl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===al)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ol)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Mg extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sg={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bg extends si{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,g=null;const v=t.getContextAttributes();let m=null,h=null;const y=[],_=[],x=new ge;let R=null;const A=new Nt;A.layers.enable(1),A.viewport=new at;const T=new Nt;T.layers.enable(2),T.viewport=new at;const H=[A,T],S=new Mg;S.layers.enable(1),S.layers.enable(2);let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=y[V];return Z===void 0&&(Z=new da,y[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=y[V];return Z===void 0&&(Z=new da,y[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=y[V];return Z===void 0&&(Z=new da,y[V]=Z),Z.getHandSpace()};function Y(V){const Z=_.indexOf(V.inputSource);if(Z===-1)return;const le=y[Z];le!==void 0&&(le.update(V.inputSource,V.frame,c||a),le.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let V=0;V<y.length;V++){const Z=_[V];Z!==null&&(_[V]=null,y[V].disconnect(Z))}C=null,z=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,h=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(x),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new ti(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,le=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?Hi:Jn,le=v.stencil?Zn:Ln);const Me={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new ti(f.textureWidth,f.textureHeight,{format:Kt,type:Nn,depthTexture:new m0(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Te=e.properties.get(h);Te.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(V){for(let Z=0;Z<V.removed.length;Z++){const le=V.removed[Z],ye=_.indexOf(le);ye>=0&&(_[ye]=null,y[ye].disconnect(le))}for(let Z=0;Z<V.added.length;Z++){const le=V.added[Z];let ye=_.indexOf(le);if(ye===-1){for(let Te=0;Te<y.length;Te++)if(Te>=_.length){_.push(le),ye=Te;break}else if(_[Te]===null){_[Te]=le,ye=Te;break}if(ye===-1)break}const Me=y[ye];Me&&Me.connect(le)}}const N=new E,k=new E;function j(V,Z,le){N.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(le.matrixWorld);const ye=N.distanceTo(k),Me=Z.projectionMatrix.elements,Te=le.projectionMatrix.elements,O=Me[14]/(Me[10]-1),ce=Me[14]/(Me[10]+1),Ie=(Me[9]+1)/Me[5],U=(Me[9]-1)/Me[5],Re=(Me[8]-1)/Me[0],de=(Te[8]+1)/Te[0],me=O*Re,he=O*de,Ze=ye/(-Re+de),Pe=Ze*-Re;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Pe),V.translateZ(Ze),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=O+Ze,M=ce+Ze,B=me-Pe,se=he+(ye-Pe),ee=Ie*ce/M*w,re=U*ce/M*w;V.projectionMatrix.makePerspective(B,se,ee,re,w,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=T.near=A.near=V.near,S.far=T.far=A.far=V.far,(C!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,z=S.far);const Z=V.parent,le=S.cameras;q(S,Z);for(let ye=0;ye<le.length;ye++)q(le[ye],Z);le.length===2?j(S,A,T):S.projectionMatrix.copy(A.projectionMatrix),K(V,S,Z)};function K(V,Z,le){le===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Gi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let X=null;function ne(V,Z){if(d=Z.getViewerPose(c||a),g=Z,d!==null){const le=d.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ye=!1;le.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let Me=0;Me<le.length;Me++){const Te=le[Me];let O=null;if(p!==null)O=p.getViewport(Te);else{const Ie=u.getViewSubImage(f,Te);O=Ie.viewport,Me===0&&(e.setRenderTargetTextures(h,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(h))}let ce=H[Me];ce===void 0&&(ce=new Nt,ce.layers.enable(Me),ce.viewport=new at,H[Me]=ce),ce.matrix.fromArray(Te.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Te.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(O.x,O.y,O.width,O.height),Me===0&&(S.matrix.copy(ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(ce)}}for(let le=0;le<y.length;le++){const ye=_[le],Me=y[le];ye!==null&&Me!==void 0&&Me.update(ye,Z,c||a)}X&&X(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ie=new f0;ie.setAnimationLoop(ne),this.setAnimationLoop=function(V){X=V},this.dispose=function(){}}}function Eg(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,d0(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,y,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,y,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===zt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===zt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=s[y.id];x===void 0&&(g(y),x=d(y),s[y.id]=x,y.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(y,R);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function d(y){const _=u();y.__bindingPointIndex=_;const x=i.createBuffer(),R=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=s[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,T=x.length;A<T;A++){const H=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,C=H.length;S<C;S++){const z=H[S];if(p(z,A,S,R)===!0){const Y=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let N=0;N<J.length;N++){const k=J[N],j=v(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,Y+P,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,_,x,R){const A=y.value,T=_+"_"+x;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const H=R[T];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return R[T]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function g(y){const _=y.uniforms;let x=0;const R=16;for(let T=0,H=_.length;T<H;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let C=0,z=S.length;C<z;C++){const Y=S[C],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,N=J.length;P<N;P++){const k=J[P],j=v(k),q=x%R;q!==0&&R-q<j.boundary&&(x+=R-q),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=j.storage}}}const A=x%R;return A>0&&(x+=R-A),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function h(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class M0{constructor(e={}){const{canvas:t=xu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const _=this;let x=!1,R=0,A=0,T=null,H=-1,S=null;const C=new at,z=new at;let Y=null;const J=new Ke(0);let P=0,N=t.width,k=t.height,j=1,q=null,K=null;const X=new at(0,0,N,k),ne=new at(0,0,N,k);let ie=!1;const V=new lo;let Z=!1,le=!1,ye=null;const Me=new rt,Te=new ge,O=new E,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return T===null?j:1}let U=n;function Re(b,F){for(let W=0;W<b.length;W++){const $=b[W],G=t.getContext($,F);if(G!==null)return G}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),U=Re(F,b),U===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,me,he,Ze,Pe,w,M,B,se,ee,re,be,pe,Se,De,Be,Q,Qe,Ge,Fe,Ae,ve,L,ae;function Ee(){de=new Np(U),me=new Rp(U,de,e),de.init(me),ve=new xg(U,de,me),he=new _g(U,de,me),Ze=new zp(U),Pe=new sg,w=new yg(U,de,he,Pe,me,ve,Ze),M=new Pp(_),B=new Up(_),se=new Xu(U,me),L=new Ap(U,de,se,me),ee=new Fp(U,se,Ze,L),re=new Gp(U,ee,se,Ze),Ge=new Hp(U,me,w),Be=new Lp(Pe),be=new ig(_,M,B,de,me,L,Be),pe=new Eg(_,Pe),Se=new ag,De=new hg(de,me),Qe=new Tp(_,M,B,he,re,f,l),Q=new vg(_,re,me),ae=new wg(U,Ze,me,he),Fe=new Cp(U,de,Ze,me),Ae=new Op(U,de,Ze,me),Ze.programs=be.programs,_.capabilities=me,_.extensions=de,_.properties=Pe,_.renderLists=Se,_.shadowMap=Q,_.state=he,_.info=Ze}Ee();const xe=new bg(_,U);this.xr=xe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(N,k,!1))},this.getSize=function(b){return b.set(N,k)},this.setSize=function(b,F,W=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,k=F,t.width=Math.floor(b*j),t.height=Math.floor(F*j),W===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(N*j,k*j).floor()},this.setDrawingBufferSize=function(b,F,W){N=b,k=F,j=W,t.width=Math.floor(b*W),t.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,F,W,$){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,F,W,$),he.viewport(C.copy(X).multiplyScalar(j).floor())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,F,W,$){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,F,W,$),he.scissor(z.copy(ne).multiplyScalar(j).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){he.setScissorTest(ie=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(b=!0,F=!0,W=!0){let $=0;if(b){let G=!1;if(T!==null){const _e=T.texture.format;G=_e===Jc||_e===Zc||_e===Kc}if(G){const _e=T.texture.type,we=_e===Nn||_e===Ln||_e===io||_e===Zn||_e===qc||_e===jc,Ne=Qe.getClearColor(),Oe=Qe.getClearAlpha(),Ve=Ne.r,ze=Ne.g,ke=Ne.b;we?(p[0]=Ve,p[1]=ze,p[2]=ke,p[3]=Oe,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Ve,g[1]=ze,g[2]=ke,g[3]=Oe,U.clearBufferiv(U.COLOR,0,g))}else $|=U.COLOR_BUFFER_BIT}F&&($|=U.DEPTH_BUFFER_BIT),W&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Se.dispose(),De.dispose(),Pe.dispose(),M.dispose(),B.dispose(),re.dispose(),L.dispose(),ae.dispose(),be.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",dt),xe.removeEventListener("sessionend",Je),ye&&(ye.dispose(),ye=null),ft.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=Ze.autoReset,F=Q.enabled,W=Q.autoUpdate,$=Q.needsUpdate,G=Q.type;Ee(),Ze.autoReset=b,Q.enabled=F,Q.autoUpdate=W,Q.needsUpdate=$,Q.type=G}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){const F=b.target;F.removeEventListener("dispose",fe),Ue(F)}function Ue(b){Le(b),Pe.remove(b)}function Le(b){const F=Pe.get(b).programs;F!==void 0&&(F.forEach(function(W){be.releaseProgram(W)}),b.isShaderMaterial&&be.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,$,G,_e){F===null&&(F=ce);const we=G.isMesh&&G.matrixWorld.determinant()<0,Ne=id(b,F,W,$,G);he.setMaterial($,we);let Oe=W.index,Ve=1;if($.wireframe===!0){if(Oe=ee.getWireframeAttribute(W),Oe===void 0)return;Ve=2}const ze=W.drawRange,ke=W.attributes.position;let ut=ze.start*Ve,Bt=(ze.start+ze.count)*Ve;_e!==null&&(ut=Math.max(ut,_e.start*Ve),Bt=Math.min(Bt,(_e.start+_e.count)*Ve)),Oe!==null?(ut=Math.max(ut,0),Bt=Math.min(Bt,Oe.count)):ke!=null&&(ut=Math.max(ut,0),Bt=Math.min(Bt,ke.count));const _t=Bt-ut;if(_t<0||_t===1/0)return;L.setup(G,$,Ne,W,Oe);let ln,ot=Fe;if(Oe!==null&&(ln=se.get(Oe),ot=Ae,ot.setIndex(ln)),G.isMesh)$.wireframe===!0?(he.setLineWidth($.wireframeLinewidth*Ie()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(G.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),he.setLineWidth(Xe*Ie()),G.isLineSegments?ot.setMode(U.LINES):G.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else G.isPoints?ot.setMode(U.POINTS):G.isSprite&&ot.setMode(U.TRIANGLES);if(G.isBatchedMesh)ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ot.renderInstances(ut,_t,G.count);else if(W.isInstancedBufferGeometry){const Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Dr=Math.min(W.instanceCount,Xe);ot.renderInstances(ut,_t,Dr)}else ot.render(ut,_t)};function qe(b,F,W){b.transparent===!0&&b.side===Gt&&b.forceSinglePass===!1?(b.side=zt,b.needsUpdate=!0,ws(b,F,W),b.side=yn,b.needsUpdate=!0,ws(b,F,W),b.side=Gt):ws(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),m=De.get(W),m.init(),y.push(m),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(_._useLegacyLights);const $=new Set;return b.traverse(function(G){const _e=G.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ne=_e[we];qe(Ne,W,G),$.add(Ne)}else qe(_e,W,G),$.add(_e)}),y.pop(),m=null,$},this.compileAsync=function(b,F,W=null){const $=this.compile(b,F,W);return new Promise(G=>{function _e(){if($.forEach(function(we){Pe.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){G(b);return}setTimeout(_e,10)}de.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let je=null;function lt(b){je&&je(b)}function dt(){ft.stop()}function Je(){ft.start()}const ft=new f0;ft.setAnimationLoop(lt),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(b){je=b,xe.setAnimationLoop(b),b===null?ft.stop():ft.start()},xe.addEventListener("sessionstart",dt),xe.addEventListener("sessionend",Je),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(F),F=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,T),m=De.get(b,y.length),m.init(),y.push(m),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(Me),le=this.localClippingEnabled,Z=Be.init(this.clippingPlanes,le),v=Se.get(b,h.length),v.init(),h.push(v),nn(b,F,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,K),this.info.render.frame++,Z===!0&&Be.beginShadows();const W=m.state.shadowsArray;if(Q.render(W,b,F),Z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(v,b),m.setupLights(_._useLegacyLights),F.isArrayCamera){const $=F.cameras;for(let G=0,_e=$.length;G<_e;G++){const we=$[G];Eo(v,b,we,we.viewport)}}else Eo(v,b,F);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,F),L.resetDefaultState(),H=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function nn(b,F,W,$){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){$&&O.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const we=re.update(b),Ne=b.material;Ne.visible&&v.push(b,we,Ne,W,O.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){const we=re.update(b),Ne=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),O.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),O.copy(we.boundingSphere.center)),O.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(Ne)){const Oe=we.groups;for(let Ve=0,ze=Oe.length;Ve<ze;Ve++){const ke=Oe[Ve],ut=Ne[ke.materialIndex];ut&&ut.visible&&v.push(b,we,ut,W,O.z,ke)}}else Ne.visible&&v.push(b,we,Ne,W,O.z,null)}}const _e=b.children;for(let we=0,Ne=_e.length;we<Ne;we++)nn(_e[we],F,W,$)}function Eo(b,F,W,$){const G=b.opaque,_e=b.transmissive,we=b.transparent;m.setupLightsView(W),Z===!0&&Be.setGlobalState(_.clippingPlanes,W),_e.length>0&&nd(G,_e,F,W),$&&he.viewport(C.copy($)),G.length>0&&Es(G,F,W),_e.length>0&&Es(_e,F,W),we.length>0&&Es(we,F,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function nd(b,F,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const _e=me.isWebGL2;ye===null&&(ye=new ti(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?hs:Nn,minFilter:us,samples:_e?4:0})),_.getDrawingBufferSize(Te),_e?ye.setSize(Te.x,Te.y):ye.setSize(yr(Te.x),yr(Te.y));const we=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(J),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Ne=_.toneMapping;_.toneMapping=Un,Es(b,W,$),w.updateMultisampleRenderTarget(ye),w.updateRenderTargetMipmap(ye);let Oe=!1;for(let Ve=0,ze=F.length;Ve<ze;Ve++){const ke=F[Ve],ut=ke.object,Bt=ke.geometry,_t=ke.material,ln=ke.group;if(_t.side===Gt&&ut.layers.test($.layers)){const ot=_t.side;_t.side=zt,_t.needsUpdate=!0,wo(ut,W,$,Bt,_t,ln),_t.side=ot,_t.needsUpdate=!0,Oe=!0}}Oe===!0&&(w.updateMultisampleRenderTarget(ye),w.updateRenderTargetMipmap(ye)),_.setRenderTarget(we),_.setClearColor(J,P),_.toneMapping=Ne}function Es(b,F,W){const $=F.isScene===!0?F.overrideMaterial:null;for(let G=0,_e=b.length;G<_e;G++){const we=b[G],Ne=we.object,Oe=we.geometry,Ve=$===null?we.material:$,ze=we.group;Ne.layers.test(W.layers)&&wo(Ne,F,W,Oe,Ve,ze)}}function wo(b,F,W,$,G,_e){b.onBeforeRender(_,F,W,$,G,_e),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(_,F,W,$,b,_e),G.transparent===!0&&G.side===Gt&&G.forceSinglePass===!1?(G.side=zt,G.needsUpdate=!0,_.renderBufferDirect(W,F,$,G,b,_e),G.side=yn,G.needsUpdate=!0,_.renderBufferDirect(W,F,$,G,b,_e),G.side=Gt):_.renderBufferDirect(W,F,$,G,b,_e),b.onAfterRender(_,F,W,$,G,_e)}function ws(b,F,W){F.isScene!==!0&&(F=ce);const $=Pe.get(b),G=m.state.lights,_e=m.state.shadowsArray,we=G.state.version,Ne=be.getParameters(b,G.state,_e,F,W),Oe=be.getProgramCacheKey(Ne);let Ve=$.programs;$.environment=b.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(b.isMeshStandardMaterial?B:M).get(b.envMap||$.environment),Ve===void 0&&(b.addEventListener("dispose",fe),Ve=new Map,$.programs=Ve);let ze=Ve.get(Oe);if(ze!==void 0){if($.currentProgram===ze&&$.lightsStateVersion===we)return Ao(b,Ne),ze}else Ne.uniforms=be.getUniforms(b),b.onBuild(W,Ne,_),b.onBeforeCompile(Ne,_),ze=be.acquireProgram(Ne,Oe),Ve.set(Oe,ze),$.uniforms=Ne.uniforms;const ke=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Be.uniform),Ao(b,Ne),$.needsLights=rd(b),$.lightsStateVersion=we,$.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=ze,$.uniformsList=null,ze}function To(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=cr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ao(b,F){const W=Pe.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function id(b,F,W,$,G){F.isScene!==!0&&(F=ce),w.resetTextureUnits();const _e=F.fog,we=$.isMeshStandardMaterial?F.environment:null,Ne=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xn,Oe=($.isMeshStandardMaterial?B:M).get($.envMap||we),Ve=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ke=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,Bt=!!W.morphAttributes.color;let _t=Un;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=_.toneMapping);const ln=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=ln!==void 0?ln.length:0,Xe=Pe.get($),Dr=m.state.lights;if(Z===!0&&(le===!0||b!==S)){const $t=b===S&&$.id===H;Be.setState($,b,$t)}let ct=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Dr.state.version||Xe.outputColorSpace!==Ne||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||Xe.envMap!==Oe||$.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==ze||Xe.morphTargets!==ke||Xe.morphNormals!==ut||Xe.morphColors!==Bt||Xe.toneMapping!==_t||me.isWebGL2===!0&&Xe.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,Xe.__version=$.version);let kn=Xe.currentProgram;ct===!0&&(kn=ws($,F,G));let Co=!1,$i=!1,Ir=!1;const wt=kn.getUniforms(),Hn=Xe.uniforms;if(he.useProgram(kn.program)&&(Co=!0,$i=!0,Ir=!0),$.id!==H&&(H=$.id,$i=!0),Co||S!==b){wt.setValue(U,"projectionMatrix",b.projectionMatrix),wt.setValue(U,"viewMatrix",b.matrixWorldInverse);const $t=wt.map.cameraPosition;$t!==void 0&&$t.setValue(U,O.setFromMatrixPosition(b.matrixWorld)),me.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&wt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,$i=!0,Ir=!0)}if(G.isSkinnedMesh){wt.setOptional(U,G,"bindMatrix"),wt.setOptional(U,G,"bindMatrixInverse");const $t=G.skeleton;$t&&(me.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),wt.setValue(U,"boneTexture",$t.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(wt.setOptional(U,G,"batchingTexture"),wt.setValue(U,"batchingTexture",G._matricesTexture,w));const Ur=W.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0&&me.isWebGL2===!0)&&Ge.update(G,W,kn),($i||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,wt.setValue(U,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Hn.envMap.value=Oe,Hn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),$i&&(wt.setValue(U,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&sd(Hn,Ir),_e&&$.fog===!0&&pe.refreshFogUniforms(Hn,_e),pe.refreshMaterialUniforms(Hn,$,j,k,ye),cr.upload(U,To(Xe),Hn,w)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(cr.upload(U,To(Xe),Hn,w),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&wt.setValue(U,"center",G.center),wt.setValue(U,"modelViewMatrix",G.modelViewMatrix),wt.setValue(U,"normalMatrix",G.normalMatrix),wt.setValue(U,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const $t=$.uniformsGroups;for(let Nr=0,ad=$t.length;Nr<ad;Nr++)if(me.isWebGL2){const Ro=$t[Nr];ae.update(Ro,kn),ae.bind(Ro,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function sd(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function rd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,F,W){Pe.get(b.texture).__webglTexture=F,Pe.get(b.depthTexture).__webglTexture=W;const $=Pe.get(b);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const W=Pe.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,W=0){T=b,R=F,A=W;let $=!0,G=null,_e=!1,we=!1;if(b){const Oe=Pe.get(b);Oe.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(U.FRAMEBUFFER,null),$=!1):Oe.__webglFramebuffer===void 0?w.setupRenderTarget(b):Oe.__hasExternalTextures&&w.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const ze=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?G=ze[F][W]:G=ze[F],_e=!0):me.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?G=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[W]:G=ze,C.copy(b.viewport),z.copy(b.scissor),Y=b.scissorTest}else C.copy(X).multiplyScalar(j).floor(),z.copy(ne).multiplyScalar(j).floor(),Y=ie;if(he.bindFramebuffer(U.FRAMEBUFFER,G)&&me.drawBuffers&&$&&he.drawBuffers(b,G),he.viewport(C),he.scissor(z),he.setScissorTest(Y),_e){const Oe=Pe.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Oe.__webglTexture,W)}else if(we){const Oe=Pe.get(b.texture),Ve=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.__webglTexture,W||0,Ve)}H=-1},this.readRenderTargetPixels=function(b,F,W,$,G,_e,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){he.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const Oe=b.texture,Ve=Oe.format,ze=Oe.type;if(Ve!==Kt&&ve.convert(Ve)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=ze===hs&&(de.has("EXT_color_buffer_half_float")||me.isWebGL2&&de.has("EXT_color_buffer_float"));if(ze!==Nn&&ve.convert(ze)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Pn&&(me.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-$&&W>=0&&W<=b.height-G&&U.readPixels(F,W,$,G,ve.convert(Ve),ve.convert(ze),_e)}finally{const Oe=T!==null?Pe.get(T).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(b,F,W=0){const $=Math.pow(2,-W),G=Math.floor(F.image.width*$),_e=Math.floor(F.image.height*$);w.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,b.x,b.y,G,_e),he.unbindTexture()},this.copyTextureToTexture=function(b,F,W,$=0){const G=F.image.width,_e=F.image.height,we=ve.convert(W.format),Ne=ve.convert(W.type);w.setTexture2D(W,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,$,b.x,b.y,G,_e,we,Ne,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,$,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,$,b.x,b.y,we,Ne,F.image),$===0&&W.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(b,F,W,$,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,Oe=ve.convert($.format),Ve=ve.convert($.type);let ze;if($.isData3DTexture)w.setTexture3D($,0),ze=U.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)w.setTexture2DArray($,0),ze=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,$.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,$.unpackAlignment);const ke=U.getParameter(U.UNPACK_ROW_LENGTH),ut=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Bt=U.getParameter(U.UNPACK_SKIP_PIXELS),_t=U.getParameter(U.UNPACK_SKIP_ROWS),ln=U.getParameter(U.UNPACK_SKIP_IMAGES),ot=W.isCompressedTexture?W.mipmaps[G]:W.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?U.texSubImage3D(ze,G,F.x,F.y,F.z,_e,we,Ne,Oe,Ve,ot.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ze,G,F.x,F.y,F.z,_e,we,Ne,Oe,ot.data)):U.texSubImage3D(ze,G,F.x,F.y,F.z,_e,we,Ne,Oe,Ve,ot),U.pixelStorei(U.UNPACK_ROW_LENGTH,ke),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,_t),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ln),G===0&&$.generateMipmaps&&U.generateMipmap(ze),he.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),he.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,he.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===so?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===br?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?Qn:e0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?xt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Tg extends M0{}Tg.prototype.isWebGL1Renderer=!0;class S0 extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ag{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new E;class xr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ho extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bi;const Zi=new E,Ei=new E,wi=new E,Ti=new ge,Ji=new ge,b0=new rt,qs=new E,Qi=new E,js=new E,jl=new ge,ua=new ge,Kl=new ge;class E0 extends mt{constructor(e=new ho){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new it;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ag(t,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new xr(n,3,0,!1)),bi.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=bi,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),b0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-wi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ks(qs.set(-.5,-.5,0),wi,a,Ei,s,r),Ks(Qi.set(.5,-.5,0),wi,a,Ei,s,r),Ks(js.set(.5,.5,0),wi,a,Ei,s,r),jl.set(0,0),ua.set(1,0),Kl.set(1,1);let o=e.ray.intersectTriangle(qs,Qi,js,!1,Zi);if(o===null&&(Ks(Qi.set(-.5,.5,0),wi,a,Ei,s,r),ua.set(0,1),o=e.ray.intersectTriangle(qs,js,Qi,!1,Zi),o===null))return;const l=e.ray.origin.distanceTo(Zi);l<e.near||l>e.far||t.push({distance:l,point:Zi.clone(),uv:jt.getInterpolation(Zi,qs,Qi,js,jl,ua,Kl,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ks(i,e,t,n,s,r){Ti.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ji.x=r*Ti.x-s*Ti.y,Ji.y=s*Ti.x+r*Ti.y):Ji.copy(Ti),i.copy(e),i.x+=Ji.x,i.y+=Ji.y,i.applyMatrix4(b0)}class Cg extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=bt,d=bt,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new E,Jl=new E,Ql=new rt,ha=new xs,Zs=new ys;class Mn extends mt{constructor(e=new it,t=new Xt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zl.fromBufferAttribute(t,s-1),Jl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;Ql.copy(s).invert(),ha.copy(e.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,d=new E,u=new E,f=new E,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const h=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=h,x=y-1;_<x;_+=p){const R=g.getX(_),A=g.getX(_+1);if(c.fromBufferAttribute(m,R),d.fromBufferAttribute(m,A),ha.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(f);H<e.near||H>e.far||t.push({distance:H,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let _=h,x=y-1;_<x;_+=p){if(c.fromBufferAttribute(m,_),d.fromBufferAttribute(m,_+1),ha.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const ec=new E,tc=new E;class Rg extends Mn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ec.fromBufferAttribute(t,s),tc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ec.distanceTo(tc);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tr extends Mn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class w0 extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nc=new rt,Ua=new xs,Js=new ys,Qs=new E;class Lg extends mt{constructor(e=new it,t=new w0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,e.ray.intersectsSphere(Js)===!1)return;nc.copy(s).invert(),Ua.copy(e.ray).applyMatrix4(nc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Qs.fromBufferAttribute(u,m),ic(Qs,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Qs.fromBufferAttribute(u,g),ic(Qs,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ic(i,e,t,n,s,r,a){const o=Ua.distanceSqToPoint(i);if(o<t){const l=new E;Ua.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class T0 extends Pt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const d=n[s],f=n[s+1]-d,p=(a-d)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,s=[],r=[],a=[],o=new E,l=new rt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class A0 extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ge,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*u+this.aX,c=f*u+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pg extends A0{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fo(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let f=(a-r)/c-(o-r)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+u)+(l-o)/u;f*=d,p*=d,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const er=new E,fa=new fo,pa=new fo,ma=new fo;class po extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),c=er);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=er),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fa.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,g,v,m),pa.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,g,v,m),ma.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),pa.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),ma.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return n.set(fa.calc(l),pa.calc(l),ma.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Dg(i,e){const t=1-i;return t*t*e}function Ig(i,e){return 2*(1-i)*i*e}function Ug(i,e){return i*i*e}function ls(i,e,t,n){return Dg(i,e)+Ig(i,t)+Ug(i,n)}function Ng(i,e){const t=1-i;return t*t*t*e}function Fg(i,e){const t=1-i;return 3*t*t*i*e}function Og(i,e){return 3*(1-i)*i*i*e}function zg(i,e){return i*i*i*e}function cs(i,e,t,n,s){return Ng(i,e)+Fg(i,t)+Og(i,n)+zg(i,s)}class Bg extends Sn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kg extends Sn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y),cs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hg extends Sn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gg extends Sn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vg extends Sn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C0 extends Sn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y),ls(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wg extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(sc(o,l.x,c.x,d.x,u.x),sc(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var Xg=Object.freeze({__proto__:null,ArcCurve:Pg,CatmullRomCurve3:po,CubicBezierCurve:Bg,CubicBezierCurve3:kg,EllipseCurve:A0,LineCurve:Hg,LineCurve3:Gg,QuadraticBezierCurve:Vg,QuadraticBezierCurve3:C0,SplineCurve:Wg});class Ar extends it{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=e;const f=(t-e)/s,p=new E,g=new ge;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const h=r+m/n*a;p.x=u*Math.cos(h),p.y=u*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let h=0;h<n;h++){const y=h+m,_=y,x=y+n+1,R=y+n+2,A=y+1;o.push(_,x,A),o.push(x,R,A)}}this.setIndex(o),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class On extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new E,f=new E,p=[],g=[],v=[],m=[];for(let h=0;h<=n;h++){const y=[],_=h/n;let x=0;h===0&&a===0?x=.5/t:h===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+x,1-_),y.push(c++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const _=d[h][y+1],x=d[h][y],R=d[h+1][y],A=d[h+1][y+1];(h!==0||a>0)&&p.push(_,x,A),(h!==n-1||l<Math.PI)&&p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mo extends it{constructor(e=new C0(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,l=new E,c=new ge;let d=new E;const u=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function v(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),y(),h()}function m(_){d=e.getPointAt(_/t,d);const x=a.normals[_],R=a.binormals[_];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,H=Math.sin(T),S=-Math.cos(T);l.x=S*x.x+H*R.x,l.y=S*x.y+H*R.y,l.z=S*x.z+H*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,u.push(o.x,o.y,o.z)}}function h(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){const R=(s+1)*(_-1)+(x-1),A=(s+1)*_+(x-1),T=(s+1)*_+x,H=(s+1)*(_-1)+x;g.push(R,A,H),g.push(A,T,H)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)c.x=_/t,c.y=x/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new mo(new Xg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ni extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t0,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const rc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $g{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const Yg=new $g;class go{constructor(e){this.manager=e!==void 0?e:Yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}go.DEFAULT_MATERIAL_NAME="__DEFAULT";class qg extends go{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=rc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=fs("img");function l(){d(),rc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class vo extends go{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,a=new qg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class _o extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ga=new rt,ac=new E,oc=new E;class R0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jg extends R0{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kg extends _o{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lc=new rt,es=new E,va=new E;class Zg extends R0{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),va.copy(n.position),va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(va),n.updateMatrixWorld(),s.makeTranslation(-es.x,-es.y,-es.z),lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc)}}class Jg extends _o{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qg extends _o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class e1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cc(){return(typeof performance>"u"?Date:performance).now()}class t1{constructor(e,t,n=0,s=1/0){this.ray=new xs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Na(e,this,n,t),n.sort(dc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Na(e[s],this,n,t);return n.sort(dc),n}}function dc(i,e){return i.distance-e.distance}function Na(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Na(s[r],e,t,!0)}}let uc=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);const gn=500,Ri=20,Ye=50,D={speedExponent:0,simulationSpeed:1,planetScale:1,sunScale:1,capMoonOrbits:!0,capMagneticFields:!0,starBrightness:.35,magnitudeLimit:6,gamma:1,showOrbits:!0,showSunOrbits:!0,showPlanetOrbits:!0,showDwarfPlanetOrbits:!0,showMoonOrbits:!0,showAxes:!1,objectInfoMode:"window",coordinateSystem:"Heliocentric",referencePlane:"Ecliptic",showZodiacs:!1,showAsterisms:!1,showZodiacSigns:!1,showHabitableZone:!1,showMagneticFields:!1,showSunMagneticFieldBasic:!1,showSunMagneticField:!1,showPlanetColors:!1,showDwarfPlanetColors:!1,showSun:!0,showPlanets:!0,showLargestMoons:!0,showMajorMoons:!1,showSmallMoons:!1,showDwarfPlanets:!1,showMissions:{voyager1:!1,voyager2:!1,pioneer10:!1,pioneer11:!1,galileo:!1,cassini:!1,newHorizons:!1,parkerSolarProbe:!1,juno:!1,rosetta:!1,ulysses:!1},date:new Date,stop:!1,music:{enabled:!1,volume:.5,playlist:[],currentTrackName:"---",shuffle:!1},debug:!1},We={log:(...i)=>{D.debug&&console.log(...i)},warn:(...i)=>{D.debug&&console.warn(...i)},error:(...i)=>{console.error(...i)},info:(...i)=>{D.debug&&console.info(...i)}};class n1{constructor(){this.queue=[],this.textureLoader=new vo,this.maxConcurrent=6,this.activeRequests=0,this.priorityBodies=["Sun","Jupiter","Saturn","Neptune","Earth"],this.registry={},this.manifest=null,this.manifestLoading=!1,this.loadManifest()}async loadManifest(){if(!this.manifestLoading){this.manifestLoading=!0;try{const e=await fetch("assets/textures.json");if(!e.ok)throw new Error("Manifest not found");const t=await e.json();this.manifest=new Set(t),We.log(`TextureManager: Loaded manifest with ${this.manifest.size} files`)}catch(e){We.warn("TextureManager: Failed to load texture manifest, falling back to trial-and-error",e),this.manifest=null}finally{this.manifestLoading=!1,this.processQueue()}}}loadTexture(e,t,n,s=!1,r=null,a="map"){let o=100;const l=this.priorityBodies.indexOf(n);l!==-1?o=l:s&&r==="largest"&&(o=10),this.registry[n]={originalPath:e,material:t,priority:o,mapType:a},this.addToQueue(e,t,0,o,a),this.addToQueue(e,t,1,o,a),this.processQueue()}loadHighRes(e){const t=this.registry[e];t&&(this.addToQueue(t.originalPath,t.material,2,t.priority,t.mapType),this.processQueue())}addToQueue(e,t,n,s,r="map"){this.queue.push({originalPath:e,material:t,stage:n,priority:s,mapType:r}),this.queue.sort((a,o)=>a.stage===2&&o.stage!==2?-1:o.stage===2&&a.stage!==2?1:a.stage!==o.stage?a.stage-o.stage:a.priority-o.priority)}processQueue(){if(this.manifestLoading||this.activeRequests>=this.maxConcurrent||this.queue.length===0)return;const e=this.queue.shift();this.activeRequests++;const t=[];e.stage===0?(t.push(this.getPathForStage(e.originalPath,"lowres","webp")),t.push(this.getPathForStage(e.originalPath,"lowres"))):e.stage===1?(t.push(this.getPathForStage(e.originalPath,"midres","webp")),t.push(this.getPathForStage(e.originalPath,"midres"))):e.stage===2?(t.push(this.getPathForStage(e.originalPath,"highres","webp")),t.push(this.getPathForStage(e.originalPath,"highres"))):t.push(e.originalPath),this.tryLoadTexture(t,e),this.processQueue()}tryLoadTexture(e,t){let n=e;if(this.manifest&&(n=e.filter(r=>{const a=r.startsWith("/")?r.slice(1):r;return this.manifest.has(a)}),n.length===0&&e.length>0&&We.log(`TextureManager: Skipped ${t.originalPath} (Stage ${t.stage}) - No valid files in manifest`)),n.length===0){this.activeRequests--,this.processQueue();return}const s=n.shift();this.textureLoader.load(s,r=>{We.log(`TextureManager: Loaded ${s} successfully`),!t.material.userData.currentStage||t.stage>=t.material.userData.currentStage?(r.wrapS=pr,r.wrapT=Ft,t.material[t.mapType]=r,t.material.color&&t.material.color.setHex(16777215),t.material.needsUpdate=!0,t.material.userData.currentStage=t.stage,We.log(`TextureManager: Applied ${s} to material`)):We.log(`TextureManager: Skipped applying ${s} (current stage ${t.material.userData.currentStage} >= ${t.stage})`),this.activeRequests--,this.processQueue()},void 0,r=>{We.warn(`TextureManager: Failed to load ${s}`,r),this.tryLoadTexture(e,t)})}getPathForStage(e,t,n=null){const s=e.lastIndexOf("/");if(s===-1)return e;const r=e.substring(0,s);let a=e.substring(s+1);if(n){const o=a.lastIndexOf(".");o!==-1&&(a=a.substring(0,o)+"."+n)}return`${r}/${t}/${a}`}}const Wi=new n1,i1=15,s1=2e3,r1=5;let Rt=null,dr=!1,L0=0;const P0=new E,D0=new E,I0=new E,U0=new E,_a=new E;function N0(i,e,t,n){window.addEventListener("dblclick",s=>{const r=s.clientX,a=s.clientY,o=o1(r,a,i,t,n);o?Fi(o,i,e):Rt&&ps(e)}),window.addEventListener("keydown",s=>{s.key==="Escape"&&Rt&&ps(e)})}function F0(i,e){const t=performance.now();if(dr){const n=t-L0,s=Math.min(n/s1,1),r=s<.5?2*s*s:1-(-2*s+2)**2/2;if(i.position.lerpVectors(P0,I0,r),e.target.lerpVectors(D0,U0,r),s>=1){dr=!1;const a=new E;Rt.mesh.getWorldPosition(a),_a.copy(a),e.enabled=!0}e.update();return}if(Rt&&!dr){if(!Rt.mesh.visible){ps(e);return}const n=Rt.mesh,s=new E;n.getWorldPosition(s);const r=new E().subVectors(s,_a);i.position.add(r),e.target.copy(s),_a.copy(s),e.update()}}function Fi(i,e,t,n=r1){var u;Rt&&Rt!==i&&O0(Rt),Rt=i,a1(Rt),(u=i.data)!=null&&u.name&&Wi.loadHighRes(i.data.name);const s=new E;i.mesh.getWorldPosition(s);const r=i.data.radius||5;let a=1;i.type==="sun"?a=D.sunScale:(i.type==="planet"||i.type==="moon")&&(a=D.planetScale);const l=r*a*n,c=Math.PI/6,d=new E(l*Math.cos(c),l*Math.sin(c),l*Math.cos(c));P0.copy(e.position),D0.copy(t.target),I0.copy(s).add(d),U0.copy(s),dr=!0,L0=performance.now(),t.enabled=!1,z0(i.data.name)}function ps(i){Rt&&(O0(Rt),Rt=null),i.enabled=!0,z0("Focus mode deactivated")}function a1(i){if(!i||!i.mesh)return;i.originalGeometry||(i.originalGeometry=i.mesh.geometry);const e=i.data.radius||5,t=new On(e,128,128);i.mesh.geometry=t}function O0(i){!i||!i.mesh||!i.originalGeometry||(i.mesh.geometry.dispose(),i.mesh.geometry=i.originalGeometry,delete i.originalGeometry)}function o1(i,e,t,n,s){let r=null,a=i1;const o=(l,c,d)=>{if(!l||!l.position)return;const u=new E;l.getWorldPosition(u);const f=u.clone().project(t),p=(f.x*.5+.5)*window.innerWidth,g=(-(f.y*.5)+.5)*window.innerHeight,v=i-p,m=e-g,h=Math.sqrt(v*v+m*m);h<a&&f.z<1&&f.z>-1&&(a=h,r={mesh:l,data:c,type:d})};return o(s,{name:"Sun",radius:5},"sun"),n.forEach(l=>{o(l.mesh,l.data,"planet"),l.moons&&l.moons.forEach(c=>{o(c.mesh,c.data,"moon")})}),r}function z0(i){let e=document.getElementById("focus-notification");e||(e=document.createElement("div"),e.id="focus-notification",e.style.cssText=`
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `,document.body.appendChild(e)),e.textContent=i,e.style.opacity="1",setTimeout(()=>{e.style.opacity="0"},2e3)}function l1(){return Rt!==null}function c1(){return Rt}const hc=Object.freeze(Object.defineProperty({__proto__:null,exitFocusMode:ps,focusOnObject:Fi,getFocusedObject:c1,isFocusModeActive:l1,setupFocusMode:N0,updateFocusMode:F0},Symbol.toStringTag,{value:"Module"}));/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const B0=173.1446326846693,d1=14959787069098932e-8,Fa=.017453292519943295,u1=365.24217,fc=new Date("2000-01-01T12:00:00Z"),tn=2*Math.PI,Cn=3600*(180/Math.PI),tr=484813681109536e-20,h1=6378.1366,f1=h1/d1,k0=81.30056,yo=.0002959122082855911,Oa=2825345909524226e-22,za=8459715185680659e-23,Ba=1292024916781969e-23,ka=1524358900784276e-23;function ya(i){if(!Number.isFinite(i))throw console.trace(),`Value is not a finite number: ${i}`;return i}function Ai(i){return i-Math.floor(i)}var Ce;(function(i){i.Sun="Sun",i.Moon="Moon",i.Mercury="Mercury",i.Venus="Venus",i.Earth="Earth",i.Mars="Mars",i.Jupiter="Jupiter",i.Saturn="Saturn",i.Uranus="Uranus",i.Neptune="Neptune",i.Pluto="Pluto",i.SSB="SSB",i.EMB="EMB",i.Star1="Star1",i.Star2="Star2",i.Star3="Star3",i.Star4="Star4",i.Star5="Star5",i.Star6="Star6",i.Star7="Star7",i.Star8="Star8"})(Ce||(Ce={}));const p1=[Ce.Star1,Ce.Star2,Ce.Star3,Ce.Star4,Ce.Star5,Ce.Star6,Ce.Star7,Ce.Star8],m1=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function g1(i){const e=p1.indexOf(i);return e>=0?m1[e]:null}function xo(i){const e=g1(i);return e&&e.dist>0?e:null}var ms;(function(i){i[i.From2000=0]="From2000",i[i.Into2000=1]="Into2000"})(ms||(ms={}));const Dn={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function v1(i){var e,t,n,s,r,a,o;const l=2e3+(i-14)/u1;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,t=e*e,n=e*t,s=t*t,r=t*n,a=n*n,10583.6-1014.41*e+33.78311*t-5.952053*n-.1798452*s+.022174192*r+.0090316521*a):l<1600?(e=(l-1e3)/100,t=e*e,n=e*t,s=t*t,r=t*n,a=n*n,1574.2-556.01*e+71.23472*t+.319781*n-.8503463*s-.005050998*r+.0083572073*a):l<1700?(e=l-1600,t=e*e,n=e*t,120-.9808*e-.01532*t+n/7129):l<1800?(e=l-1700,t=e*e,n=e*t,s=t*t,8.83+.1603*e-.0059285*t+13336e-8*n-s/1174e3):l<1860?(e=l-1800,t=e*e,n=e*t,s=t*t,r=t*n,a=n*n,o=n*s,13.72-.332447*e+.0068612*t+.0041116*n-37436e-8*s+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(e=l-1860,t=e*e,n=e*t,s=t*t,r=t*n,7.62+.5737*e-.251754*t+.01680668*n-.0004473624*s+r/233174):l<1920?(e=l-1900,t=e*e,n=e*t,s=t*t,-2.79+1.494119*e-.0598939*t+.0061966*n-197e-6*s):l<1941?(e=l-1920,t=e*e,n=e*t,21.2+.84493*e-.0761*t+.0020936*n):l<1961?(e=l-1950,t=e*e,n=e*t,29.07+.407*e-t/233+n/2547):l<1986?(e=l-1975,t=e*e,n=e*t,45.45+1.067*e-t/260-n/718):l<2005?(e=l-2e3,t=e*e,n=e*t,s=t*t,r=t*n,63.86+.3345*e-.060374*t+.0017275*n+651814e-9*s+2373599e-11*r):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let _1=v1;function pc(i){return i+_1(i)/86400}class ei{constructor(e){if(e instanceof ei){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-fc.getTime())/t,this.tt=pc(this.ut);return}if(Number.isFinite(e)){this.date=new Date(fc.getTime()+e*t),this.ut=e,this.tt=pc(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new ei(e);for(;;){const n=e-t.tt;if(Math.abs(n)<1e-12)return t;t=t.AddDays(n)}}toString(){return this.date.toISOString()}AddDays(e){return new ei(this.ut+e)}}function Bn(i){return i instanceof ei?i:new ei(i)}function y1(i){var e=i.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}function x1(i,e){const t=i*Fa,n=Math.cos(t),s=Math.sin(t);return[e[0],e[1]*n-e[2]*s,e[1]*s+e[2]*n]}function M1(i,e){return x1(y1(i),e)}function S1(i){const e=i.tt/36525;function t(U,Re){const de=[];let me;for(me=0;me<=Re-U;++me)de.push(0);return{min:U,array:de}}function n(U,Re,de,me){const he=[];for(let Ze=0;Ze<=Re-U;++Ze)he.push(t(de,me));return{min:U,array:he}}function s(U,Re,de){const me=U.array[Re-U.min];return me.array[de-me.min]}function r(U,Re,de,me){const he=U.array[Re-U.min];he.array[de-he.min]=me}let a,o,l,c,d,u,f,p,g,v,m,h,y,_,x,R,A,T,H,S,C,z,Y,J=n(-6,6,1,4),P=n(-6,6,1,4);function N(U,Re){return s(J,U,Re)}function k(U,Re){return s(P,U,Re)}function j(U,Re,de){return r(J,U,Re,de)}function q(U,Re,de){return r(P,U,Re,de)}function K(U,Re,de,me,he){he(U*de-Re*me,Re*de+U*me)}function X(U){return Math.sin(tn*U)}f=e*e,g=0,Y=0,m=0,h=3422.7;var ne=X(.19833+.05611*e),ie=X(.27869+.04508*e),V=X(.16827-.36903*e),Z=X(.34734-5.37261*e),le=X(.10498-5.37899*e),ye=X(.42681-.41855*e),Me=X(.14943-5.37511*e);for(T=.84*ne+.31*ie+14.27*V+7.26*Z+.28*le+.24*ye,H=2.94*ne+.31*ie+14.27*V+9.34*Z+1.12*le+.83*ye,S=-6.4*ne-1.89*ye,C=.21*ne+.31*ie+14.27*V-88.7*Z-15.3*le+.24*ye-1.86*Me,z=T-S,p=-3332e-9*X(.59734-5.37261*e)-539e-9*X(.35498-5.37899*e)-64e-9*X(.39943-5.37511*e),y=tn*Ai(.60643382+1336.85522467*e-313e-8*f)+T/Cn,_=tn*Ai(.37489701+1325.55240982*e+2565e-8*f)+H/Cn,x=tn*Ai(.99312619+99.99735956*e-44e-8*f)+S/Cn,R=tn*Ai(.25909118+1342.2278298*e-892e-8*f)+C/Cn,A=tn*Ai(.82736186+1236.85308708*e-397e-8*f)+z/Cn,d=1;d<=4;++d){switch(d){case 1:l=_,o=4,c=1.000002208;break;case 2:l=x,o=3,c=.997504612-.002495388*e;break;case 3:l=R,o=4,c=1.000002708+139.978*p;break;case 4:l=A,o=6,c=1;break;default:throw`Internal error: I = ${d}`}for(j(0,d,1),j(1,d,Math.cos(l)*c),q(0,d,0),q(1,d,Math.sin(l)*c),u=2;u<=o;++u)K(N(u-1,d),k(u-1,d),N(1,d),k(1,d),(U,Re)=>(j(u,d,U),q(u,d,Re)));for(u=1;u<=o;++u)j(-u,d,N(u,d)),q(-u,d,-k(u,d))}function Te(U,Re,de,me){for(var he={x:1,y:0},Ze=[0,U,Re,de,me],Pe=1;Pe<=4;++Pe)Ze[Pe]!==0&&K(he.x,he.y,N(Ze[Pe],Pe),k(Ze[Pe],Pe),(w,M)=>(he.x=w,he.y=M));return he}function O(U,Re,de,me,he,Ze,Pe,w){var M=Te(he,Ze,Pe,w);g+=U*M.y,Y+=Re*M.y,m+=de*M.x,h+=me*M.x}O(13.902,14.06,-.001,.2607,0,0,0,4),O(.403,-4.01,.394,.0023,0,0,0,3),O(2369.912,2373.36,.601,28.2333,0,0,0,2),O(-125.154,-112.79,-.725,-.9781,0,0,0,1),O(1.979,6.98,-.445,.0433,1,0,0,4),O(191.953,192.72,.029,3.0861,1,0,0,2),O(-8.466,-13.51,.455,-.1093,1,0,0,1),O(22639.5,22609.07,.079,186.5398,1,0,0,0),O(18.609,3.59,-.094,.0118,1,0,0,-1),O(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),O(3.215,5.44,.192,-.0386,1,0,0,-3),O(-38.428,-38.64,.001,.6008,1,0,0,-4),O(-.393,-1.43,-.092,.0086,1,0,0,-6),O(-.289,-1.59,.123,-.0053,0,1,0,4),O(-24.42,-25.1,.04,-.3,0,1,0,2),O(18.023,17.93,.007,.1494,0,1,0,1),O(-668.146,-126.98,-1.302,-.3997,0,1,0,0),O(.56,.32,-.001,-.0037,0,1,0,-1),O(-165.145,-165.06,.054,1.9178,0,1,0,-2),O(-1.877,-6.46,-.416,.0339,0,1,0,-4),O(.213,1.02,-.074,.0054,2,0,0,4),O(14.387,14.78,-.017,.2833,2,0,0,2),O(-.586,-1.2,.054,-.01,2,0,0,1),O(769.016,767.96,.107,10.1657,2,0,0,0),O(1.75,2.01,-.018,.0155,2,0,0,-1),O(-211.656,-152.53,5.679,-.3039,2,0,0,-2),O(1.225,.91,-.03,-.0088,2,0,0,-3),O(-30.773,-34.07,-.308,.3722,2,0,0,-4),O(-.57,-1.4,-.074,.0109,2,0,0,-6),O(-2.921,-11.75,.787,-.0484,1,1,0,2),O(1.267,1.52,-.022,.0164,1,1,0,1),O(-109.673,-115.18,.461,-.949,1,1,0,0),O(-205.962,-182.36,2.056,1.4437,1,1,0,-2),O(.233,.36,.012,-.0025,1,1,0,-3),O(-4.391,-9.66,-.471,.0673,1,1,0,-4),O(.283,1.53,-.111,.006,1,-1,0,4),O(14.577,31.7,-1.54,.2302,1,-1,0,2),O(147.687,138.76,.679,1.1528,1,-1,0,0),O(-1.089,.55,.021,0,1,-1,0,-1),O(28.475,23.59,-.443,-.2257,1,-1,0,-2),O(-.276,-.38,-.006,-.0036,1,-1,0,-3),O(.636,2.27,.146,-.0102,1,-1,0,-4),O(-.189,-1.68,.131,-.0028,0,2,0,2),O(-7.486,-.66,-.037,-.0086,0,2,0,0),O(-8.096,-16.35,-.74,.0918,0,2,0,-2),O(-5.741,-.04,0,-9e-4,0,0,2,2),O(.255,0,0,0,0,0,2,1),O(-411.608,-.2,0,-.0124,0,0,2,0),O(.584,.84,0,.0071,0,0,2,-1),O(-55.173,-52.14,0,-.1052,0,0,2,-2),O(.254,.25,0,-.0017,0,0,2,-3),O(.025,-1.67,0,.0031,0,0,2,-4),O(1.06,2.96,-.166,.0243,3,0,0,2),O(36.124,50.64,-1.3,.6215,3,0,0,0),O(-13.193,-16.4,.258,-.1187,3,0,0,-2),O(-1.187,-.74,.042,.0074,3,0,0,-4),O(-.293,-.31,-.002,.0046,3,0,0,-6),O(-.29,-1.45,.116,-.0051,2,1,0,2),O(-7.649,-10.56,.259,-.1038,2,1,0,0),O(-8.627,-7.59,.078,-.0192,2,1,0,-2),O(-2.74,-2.54,.022,.0324,2,1,0,-4),O(1.181,3.32,-.212,.0213,2,-1,0,2),O(9.703,11.67,-.151,.1268,2,-1,0,0),O(-.352,-.37,.001,-.0028,2,-1,0,-1),O(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),O(.36,.2,-.012,-.0043,2,-1,0,-4),O(-1.167,-1.25,.008,-.0106,1,2,0,0),O(-7.412,-6.12,.117,.0484,1,2,0,-2),O(-.311,-.65,-.032,.0044,1,2,0,-4),O(.757,1.82,-.105,.0112,1,-2,0,2),O(2.58,2.32,.027,.0196,1,-2,0,0),O(2.533,2.4,-.014,-.0212,1,-2,0,-2),O(-.344,-.57,-.025,.0036,0,3,0,-2),O(-.992,-.02,0,0,1,0,2,2),O(-45.099,-.02,0,-.001,1,0,2,0),O(-.179,-9.52,0,-.0833,1,0,2,-2),O(-.301,-.33,0,.0014,1,0,2,-4),O(-6.382,-3.37,0,-.0481,1,0,-2,2),O(39.528,85.13,0,-.7136,1,0,-2,0),O(9.366,.71,0,-.0112,1,0,-2,-2),O(.202,.02,0,0,1,0,-2,-4),O(.415,.1,0,.0013,0,1,2,0),O(-2.152,-2.26,0,-.0066,0,1,2,-2),O(-1.44,-1.3,0,.0014,0,1,-2,2),O(.384,-.04,0,0,0,1,-2,-2),O(1.938,3.6,-.145,.0401,4,0,0,0),O(-.952,-1.58,.052,-.013,4,0,0,-2),O(-.551,-.94,.032,-.0097,3,1,0,0),O(-.482,-.57,.005,-.0045,3,1,0,-2),O(.681,.96,-.026,.0115,3,-1,0,0),O(-.297,-.27,.002,-9e-4,2,2,0,-2),O(.254,.21,-.003,0,2,-2,0,-2),O(-.25,-.22,.004,.0014,1,3,0,-2),O(-3.996,0,0,4e-4,2,0,2,0),O(.557,-.75,0,-.009,2,0,2,-2),O(-.459,-.38,0,-.0053,2,0,-2,2),O(-1.298,.74,0,4e-4,2,0,-2,0),O(.538,1.14,0,-.0141,2,0,-2,-2),O(.263,.02,0,0,1,1,2,0),O(.426,.07,0,-6e-4,1,1,-2,-2),O(-.304,.03,0,3e-4,1,-1,2,0),O(-.372,-.19,0,-.0027,1,-1,-2,2),O(.418,0,0,0,0,0,4,0),O(-.33,-.04,0,0,3,0,2,0);function ce(U,Re,de,me,he){return U*Te(Re,de,me,he).y}v=0,v+=ce(-526.069,0,0,1,-2),v+=ce(-3.352,0,0,1,-4),v+=ce(44.297,1,0,1,-2),v+=ce(-6,1,0,1,-4),v+=ce(20.599,-1,0,1,0),v+=ce(-30.598,-1,0,1,-2),v+=ce(-24.649,-2,0,1,0),v+=ce(-2,-2,0,1,-2),v+=ce(-22.571,0,1,1,-2),v+=ce(10.985,0,-1,1,-2),g+=.82*X(.7736-62.5512*e)+.31*X(.0466-125.1025*e)+.35*X(.5785-25.1042*e)+.66*X(.4591+1335.8075*e)+.64*X(.313-91.568*e)+1.14*X(.148+1331.2898*e)+.21*X(.5918+1056.5859*e)+.44*X(.5784+1322.8595*e)+.24*X(.2275-5.7374*e)+.28*X(.2965+2.6929*e)+.33*X(.3132+6.3368*e),a=R+Y/Cn;let Ie=(1.000002708+139.978*p)*(18518.511+1.189+m)*Math.sin(a)-6.24*Math.sin(3*a)+v;return{geo_eclip_lon:tn*Ai((y+g/Cn)/tn),geo_eclip_lat:Math.PI/(180*3600)*Ie,distance_au:Cn*f1/(.999953253*h)}}function b1(i,e){return[i.rot[0][0]*e[0]+i.rot[1][0]*e[1]+i.rot[2][0]*e[2],i.rot[0][1]*e[0]+i.rot[1][1]*e[1]+i.rot[2][1]*e[2],i.rot[0][2]*e[0]+i.rot[1][2]*e[1]+i.rot[2][2]*e[2]]}function E1(i,e,t){const n=w1(e,t);return b1(n,i)}function w1(i,e){const t=i.tt/36525;let n=84381.406,s=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,r=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+n,a=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;n*=tr,s*=tr,r*=tr,a*=tr;const o=Math.sin(n),l=Math.cos(n),c=Math.sin(-s),d=Math.cos(-s),u=Math.sin(-r),f=Math.cos(-r),p=Math.sin(a),g=Math.cos(a),v=g*d-c*p*f,m=g*c*l+p*f*d*l-o*p*u,h=g*c*o+p*f*d*o+l*p*u,y=-p*d-c*g*f,_=-p*c*l+g*f*d*l-o*g*u,x=-p*c*o+g*f*d*o+l*g*u,R=c*u,A=-u*d*l-o*f,T=-u*d*o+f*l;if(e===ms.Into2000)return new Ha([[v,m,h],[y,_,x],[R,A,T]]);if(e===ms.From2000)return new Ha([[v,y,R],[m,_,A],[h,x,T]]);throw"Invalid precess direction"}class Vt{constructor(e,t,n,s){this.x=e,this.y=t,this.z=n,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class an{constructor(e,t,n,s,r,a,o){this.x=e,this.y=t,this.z=n,this.vx=s,this.vy=r,this.vz=a,this.t=o}}class T1{constructor(e,t,n){this.lat=ya(e),this.lon=ya(t),this.dist=ya(n)}}class Ha{constructor(e){this.rot=e}}function gs(i){const e=Bn(i),t=S1(e),n=t.distance_au*Math.cos(t.geo_eclip_lat),s=[n*Math.cos(t.geo_eclip_lon),n*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],r=M1(e,s),a=E1(r,e,ms.Into2000);return new Vt(a[0],a[1],a[2],e)}function H0(i){const e=Bn(i),t=1e-5,n=e.AddDays(-t),s=e.AddDays(+t),r=gs(n),a=gs(s);return new an((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,(a.x-r.x)/(2*t),(a.y-r.y)/(2*t),(a.z-r.z)/(2*t),e)}function A1(i){const e=Bn(i),t=H0(e),n=1+k0;return new an(t.x/n,t.y/n,t.z/n,t.vx/n,t.vy/n,t.vz/n,e)}function Oi(i,e,t){let n=1,s=0;for(let r of i){let a=0;for(let[l,c,d]of r)a+=l*Math.cos(c+e*d);let o=n*a;t&&(o%=tn),s+=o,n*=e}return s}function xa(i,e){let t=1,n=0,s=0,r=0;for(let a of i){let o=0,l=0;for(let[c,d,u]of a){let f=d+e*u;o+=c*u*Math.sin(f),r>0&&(l+=c*Math.cos(f))}s+=r*n*l-t*o,n=t,t*=e,++r}return s}const ns=365250,Ga=0,Va=1,Wa=2;function Xa(i){return new Ct(i[0]+44036e-11*i[1]-190919e-12*i[2],-479966e-12*i[0]+.917482137087*i[1]-.397776982902*i[2],.397776982902*i[1]+.917482137087*i[2])}function G0(i,e,t){const n=t*Math.cos(e),s=Math.cos(i),r=Math.sin(i);return[n*s,n*r,t*Math.sin(e)]}function ur(i,e){const t=e.tt/ns,n=Oi(i[Ga],t,!0),s=Oi(i[Va],t,!1),r=Oi(i[Wa],t,!1),a=G0(n,s,r);return Xa(a).ToAstroVector(e)}function $a(i,e){const t=e/ns,n=Oi(i[Ga],t,!0),s=Oi(i[Va],t,!1),r=Oi(i[Wa],t,!1),a=xa(i[Ga],t),o=xa(i[Va],t),l=xa(i[Wa],t),c=Math.cos(n),d=Math.sin(n),u=Math.cos(s),f=Math.sin(s),p=+(l*u*c)-r*f*c*o-r*u*d*a,g=+(l*u*d)-r*f*d*o+r*u*c*a,v=+(l*f)+r*u*o,m=G0(n,s,r),h=[p/ns,g/ns,v/ns],y=Xa(m),_=Xa(h);return new ii(e,y,_)}function nr(i,e,t,n){const s=n/(n+yo),r=ur(Dn[t],e);i.x+=s*r.x,i.y+=s*r.y,i.z+=s*r.z}function C1(i){const e=new Vt(0,0,0,i);return nr(e,i,Ce.Jupiter,Oa),nr(e,i,Ce.Saturn,za),nr(e,i,Ce.Uranus,Ba),nr(e,i,Ce.Neptune,ka),e}const Ya=51,R1=29200,Di=146,mn=201,Kn=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Ct{constructor(e,t,n){this.x=e,this.y=t,this.z=n}clone(){return new Ct(this.x,this.y,this.z)}ToAstroVector(e){return new Vt(this.x,this.y,this.z,e)}static zero(){return new Ct(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Ct(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Ct(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Ct(e*this.x,e*this.y,e*this.z)}div(e){return new Ct(this.x/e,this.y/e,this.z/e)}mean(e){return new Ct((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Ct(-this.x,-this.y,-this.z)}}class ii{constructor(e,t,n){this.tt=e,this.r=t,this.v=n}clone(){return new ii(this.tt,this.r,this.v)}sub(e){return new ii(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function L1(i){let[e,[t,n,s],[r,a,o]]=i;return new ii(e,new Ct(t,n,s),new Ct(r,a,o))}function ir(i,e,t,n){const s=n/(n+yo),r=$a(Dn[t],e);return i.r.incr(r.r.mul(s)),i.v.incr(r.v.mul(s)),r}function ts(i,e,t){const n=t.sub(i),s=n.quadrature();return n.mul(e/(s*Math.sqrt(s)))}class Cr{constructor(e){let t=new ii(e,new Ct(0,0,0),new Ct(0,0,0));this.Jupiter=ir(t,e,Ce.Jupiter,Oa),this.Saturn=ir(t,e,Ce.Saturn,za),this.Uranus=ir(t,e,Ce.Uranus,Ba),this.Neptune=ir(t,e,Ce.Neptune,ka),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new ii(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=ts(e,yo,this.Sun.r);return t.incr(ts(e,Oa,this.Jupiter.r)),t.incr(ts(e,za,this.Saturn.r)),t.incr(ts(e,Ba,this.Uranus.r)),t.incr(ts(e,ka,this.Neptune.r)),t}}class Rr{constructor(e,t,n,s){this.tt=e,this.r=t,this.v=n,this.a=s}clone(){return new Rr(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class V0{constructor(e,t){this.bary=e,this.grav=t}}function Mr(i,e,t,n){return new Ct(e.x+i*(t.x+i*n.x/2),e.y+i*(t.y+i*n.y/2),e.z+i*(t.z+i*n.z/2))}function mc(i,e,t){return new Ct(e.x+i*t.x,e.y+i*t.y,e.z+i*t.z)}function qa(i,e){const t=i-e.tt,n=new Cr(i),s=Mr(t,e.r,e.v,e.a),r=n.Acceleration(s).mean(e.a),a=Mr(t,e.r,e.v,r),o=e.v.add(r.mul(t)),l=n.Acceleration(a),c=new Rr(i,a,o,l);return new V0(n,c)}const P1=[];function W0(i,e){const t=Math.floor(i);return t<0?0:t>=e?e-1:t}function ja(i){const e=L1(i),t=new Cr(e.tt),n=e.r.add(t.Sun.r),s=e.v.add(t.Sun.v),r=t.Acceleration(n),a=new Rr(e.tt,n,s,r);return new V0(t,a)}function D1(i,e){const t=Kn[0][0];if(e<t||e>Kn[Ya-1][0])return null;const n=W0((e-t)/R1,Ya-1);if(!i[n]){const r=i[n]=[];r[0]=ja(Kn[n]).grav,r[mn-1]=ja(Kn[n+1]).grav;let a,o=r[0].tt;for(a=1;a<mn-1;++a)r[a]=qa(o+=Di,r[a-1]).grav;o=r[mn-1].tt;var s=[];for(s[mn-1]=r[mn-1],a=mn-2;a>0;--a)s[a]=qa(o-=Di,s[a+1]).grav;for(a=mn-2;a>0;--a){const l=a/(mn-1);r[a].r=r[a].r.mul(1-l).add(s[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(s[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(s[a].a.mul(l))}}return i[n]}function gc(i,e,t){let n=ja(i);const s=Math.ceil((e-n.grav.tt)/t);for(let r=0;r<s;++r)n=qa(r+1===s?e:n.grav.tt+t,n.grav);return n}function X0(i,e){let t,n,s;const r=D1(P1,i.tt);if(r){const a=W0((i.tt-r[0].tt)/Di,mn-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),d=Mr(i.tt-o.tt,o.r,o.v,c),u=mc(i.tt-o.tt,o.v,c),f=Mr(i.tt-l.tt,l.r,l.v,c),p=mc(i.tt-l.tt,l.v,c),g=(i.tt-o.tt)/Di;t=d.mul(1-g).add(f.mul(g)),n=u.mul(1-g).add(p.mul(g))}else{let a;i.tt<Kn[0][0]?a=gc(Kn[0],i.tt,-Di):a=gc(Kn[Ya-1],i.tt,+Di),t=a.grav.r,n=a.grav.v,s=a.bary}return s||(s=new Cr(i.tt)),t=t.sub(s.Sun.r),n=n.sub(s.Sun.v),new an(t.x,t.y,t.z,n.x,n.y,n.z,i)}const I1=new Ha([[.999432765338654,-.0336771074697641,0],[.0303959428906285,.902057912352809,.430543388542295],[-.0144994559663353,-.430299169409101,.902569881273754]]),sr=[{mu:282489428433814e-21,al:[1.446213296021224,3.5515522861824],a:[[.0028210960212903,0,0]],l:[[-.0001925258348666,4.9369589722645,.01358483658305],[-970803596076e-16,4.3188796477322,.01303413843243],[-8988174165e-14,1.9080016428617,.00305064867158],[-553101050262e-16,1.4936156681569,.01293892891155]],z:[[.0041510849668155,4.089939635545,-.01290686414666],[.0006260521444113,1.446188898627,3.5515522949802],[352747346169e-16,2.1256287034578,.00012727416567]],zeta:[[.0003142172466014,2.7964219722923,-.002315096098],[904169207946e-16,1.0477061879627,-.00056920638196]]},{mu:282483274392893e-21,al:[-.3735263437471362,1.76932271112347],a:[[.0044871037804314,0,0],[4324367498e-16,1.819645606291,1.7822295777568]],l:[[.0008576433172936,4.3188693178264,.01303413830805],[.0004549582875086,1.4936531751079,.01293892881962],[.0003248939825174,1.8196494533458,1.7822295777568],[-.0003074250079334,4.9377037005911,.01358483286724],[.0001982386144784,1.907986905476,.00305101212869],[.0001834063551804,2.1402853388529,.00145009789338],[-.0001434383188452,5.622214036663,.89111478887838],[-771939140944e-16,4.300272437235,2.6733443704266]],z:[[-.0093589104136341,4.0899396509039,-.01290686414666],[.0002988994545555,5.9097265185595,1.7693227079462],[.000213903639035,2.1256289300016,.00012727418407],[.0001980963564781,2.743516829265,.00067797343009],[.0001210388158965,5.5839943711203,320566149e-13],[837042048393e-16,1.6094538368039,-.90402165808846],[823525166369e-16,1.4461887708689,3.5515522949802]],zeta:[[.0040404917832303,1.0477063169425,-.0005692064054],[.0002200421034564,3.3368857864364,-.00012491307307],[.0001662544744719,2.4134862374711,0],[590282470983e-16,5.9719930968366,-3056160225e-14]]},{mu:282498184184723e-21,al:[.2874089391143348,.878207923589328],a:[[.0071566594572575,0,0],[1393029911e-15,1.1586745884981,2.6733443704266]],l:[[.0002310797886226,2.1402987195942,.00145009784384],[-.0001828635964118,4.3188672736968,.01303413828263],[.0001512378778204,4.9373102372298,.01358483481252],[-.0001163720969778,4.300265986149,2.6733443704266],[-955478069846e-16,1.4936612842567,.01293892879857],[815246854464e-16,5.6222137132535,.89111478887838],[-801219679602e-16,1.2995922951532,1.0034433456729],[-607017260182e-16,.64978769669238,.50172167043264]],z:[[.0014289811307319,2.1256295942739,.00012727413029],[.000771093122676,5.5836330003496,320643411e-13],[.0005925911780766,4.0899396636448,-.01290686414666],[.0002045597496146,5.2713683670372,-.12523544076106],[.0001785118648258,.28743156721063,.8782079244252],[.0001131999784893,1.4462127277818,3.5515522949802],[-65877816921e-15,2.2702423990985,-1.7951364394537],[497058888328e-16,5.9096792204858,1.7693227129285]],zeta:[[.0015932721570848,3.3368862796665,-.00012491307058],[.0008533093128905,2.4133881688166,0],[.0003513347911037,5.9720789850127,-3056101771e-14],[-.0001441929255483,1.0477061764435,-.00056920632124]]},{mu:282492144889909e-21,al:[-.3620341291375704,.376486233433828],a:[[.0125879701715314,0,0],[3595204947e-15,.64965776007116,.50172168165034],[27580210652e-16,1.808423578151,3.1750660413359]],l:[[.0005586040123824,2.1404207189815,.00145009793231],[-.0003805813868176,2.7358844897853,2972965062e-14],[.0002205152863262,.649796525964,.5017216724358],[.0001877895151158,1.8084787604005,3.1750660413359],[766916975242e-16,6.2720114319755,1.3928364636651],[747056855106e-16,1.2995916202344,1.0034433456729]],z:[[.0073755808467977,5.5836071576084,3206509914e-14],[.0002065924169942,5.9209831565786,.37648624194703],[.0001589869764021,.28744006242623,.8782079244252],[-.0001561131605348,2.1257397865089,.00012727441285],[.0001486043380971,1.4462134301023,3.5515522949802],[635073108731e-16,5.9096803285954,1.7693227129285],[599351698525e-16,4.1125517584798,-2.7985797954589],[540660842731e-16,5.5390350845569,.00286834082283],[-489596900866e-16,4.6218149483338,-.62695712529519]],zeta:[[.0038422977898495,2.4133922085557,0],[.0022453891791894,5.9721736773277,-3056125525e-14],[-.0002604479450559,3.3368746306409,-.00012491309972],[33211214323e-15,5.5604137742337,.00290037688507]]}];class U1{constructor(e,t,n,s){this.io=e,this.europa=t,this.ganymede=n,this.callisto=s}}function N1(i,e,t){const n=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=Math.sqrt(e/(n*n*n));let d,u,f,p=s+r*Math.sin(s)-a*Math.cos(s);do d=Math.cos(p),u=Math.sin(p),f=(s-p+r*u-a*d)/(1-r*d-a*u),p+=f;while(Math.abs(f)>=1e-12);d=Math.cos(p),u=Math.sin(p);const g=a*d-r*u,v=-r*d-a*u,m=1/(1+v),y=1/(1+Math.sqrt(1-r*r-a*a)),_=n*(d-r-y*a*g),x=n*(u-a+y*r*g),R=c*m*n*(-u-y*a*v),A=c*m*n*(+d+y*r*v),T=2*Math.sqrt(1-o*o-l*l),H=1-2*l*l,S=1-2*o*o,C=2*l*o;return new an(_*H+x*C,_*C+x*S,(o*x-_*l)*T,R*H+A*C,R*C+A*S,(o*A-R*l)*T,i)}function rr(i,e){const t=i.tt+18262.5,n=[0,e.al[0]+t*e.al[1],0,0,0,0];for(let[r,a,o]of e.a)n[0]+=r*Math.cos(a+t*o);for(let[r,a,o]of e.l)n[1]+=r*Math.sin(a+t*o);n[1]%=tn,n[1]<0&&(n[1]+=tn);for(let[r,a,o]of e.z){const l=a+t*o;n[2]+=r*Math.cos(l),n[3]+=r*Math.sin(l)}for(let[r,a,o]of e.zeta){const l=a+t*o;n[4]+=r*Math.cos(l),n[5]+=r*Math.sin(l)}const s=N1(i,e.mu,n);return G1(I1,s)}function Ka(i){const e=new ei(i);return new U1(rr(e,sr[0]),rr(e,sr[1]),rr(e,sr[2]),rr(e,sr[3]))}function Wt(i,e){var t=Bn(e);if(i in Dn)return ur(Dn[i],t);if(i===Ce.Pluto){const a=X0(t);return new Vt(a.x,a.y,a.z,t)}if(i===Ce.Sun)return new Vt(0,0,0,t);if(i===Ce.Moon){var n=ur(Dn.Earth,t),s=gs(t);return new Vt(n.x+s.x,n.y+s.y,n.z+s.z,t)}if(i===Ce.EMB){const a=ur(Dn.Earth,t),o=gs(t),l=1+k0;return new Vt(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,t)}if(i===Ce.SSB)return C1(t);const r=xo(i);if(r){const a=new T1(r.dec,15*r.ra,r.dist);return H1(a,t)}throw`HelioVector: Unknown body "${i}"`}function F1(i,e){let t=e,n=0;for(let s=0;s<10;++s){const r=i(t),a=r.Length()/B0;if(a>1)throw"Object is too distant for light-travel solver.";const o=e.AddDays(-a);if(n=Math.abs(o.tt-t.tt),n<1e-9)return r;t=o}throw`Light-travel time solver did not converge: dt = ${n}`}class O1{constructor(e,t,n,s){this.observerBody=e,this.targetBody=t,this.aberration=n,this.observerPos=s}Position(e){this.aberration&&(this.observerPos=Wt(this.observerBody,e));const t=Wt(this.targetBody,e);return new Vt(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function z1(i,e,t,n){const s=Bn(i);if(xo(t)){const o=Wt(t,s);{const l=k1(e,s),c=new Vt(o.x-l.x,o.y-l.y,o.z-l.z,s),d=B0/c.Length();return new Vt(c.x+l.vx/d,c.y+l.vy/d,c.z+l.vz/d,s)}}let r;r=new Vt(0,0,0,s);const a=new O1(e,t,n,r);return F1(o=>a.Position(o),s)}function vs(i,e,t){const n=Bn(e);switch(i){case Ce.Earth:return new Vt(0,0,0,n);case Ce.Moon:return gs(n);default:const s=z1(n,Ce.Earth,i,t);return s.t=n,s}}function B1(i,e){return new an(i.r.x,i.r.y,i.r.z,i.v.x,i.v.y,i.v.z,e)}function k1(i,e){const t=Bn(e);switch(i){case Ce.Sun:return new an(0,0,0,0,0,0,t);case Ce.SSB:const n=new Cr(t.tt);return new an(-n.Sun.r.x,-n.Sun.r.y,-n.Sun.r.z,-n.Sun.v.x,-n.Sun.v.y,-n.Sun.v.z,t);case Ce.Mercury:case Ce.Venus:case Ce.Earth:case Ce.Mars:case Ce.Jupiter:case Ce.Saturn:case Ce.Uranus:case Ce.Neptune:const s=$a(Dn[i],t.tt);return B1(s,t);case Ce.Pluto:return X0(t);case Ce.Moon:case Ce.EMB:const r=$a(Dn.Earth,t.tt),a=i==Ce.Moon?H0(t):A1(t);return new an(a.x+r.r.x,a.y+r.r.y,a.z+r.r.z,a.vx+r.v.x,a.vy+r.v.y,a.vz+r.v.z,t);default:if(xo(i)){const o=Wt(i,t);return new an(o.x,o.y,o.z,0,0,0,t)}throw`HelioState: Unsupported body "${i}"`}}var vc;(function(i){i[i.Pericenter=0]="Pericenter",i[i.Apocenter=1]="Apocenter"})(vc||(vc={}));function H1(i,e){e=Bn(e);const t=i.lat*Fa,n=i.lon*Fa,s=i.dist*Math.cos(t);return new Vt(s*Math.cos(n),s*Math.sin(n),i.dist*Math.sin(t),e)}function G1(i,e){return new an(i.rot[0][0]*e.x+i.rot[1][0]*e.y+i.rot[2][0]*e.z,i.rot[0][1]*e.x+i.rot[1][1]*e.y+i.rot[2][1]*e.z,i.rot[0][2]*e.x+i.rot[1][2]*e.y+i.rot[2][2]*e.z,i.rot[0][0]*e.vx+i.rot[1][0]*e.vy+i.rot[2][0]*e.vz,i.rot[0][1]*e.vx+i.rot[1][1]*e.vy+i.rot[2][1]*e.vz,i.rot[0][2]*e.vx+i.rot[1][2]*e.vy+i.rot[2][2]*e.vz,e.t)}var _c;(function(i){i.Penumbral="penumbral",i.Partial="partial",i.Annular="annular",i.Total="total"})(_c||(_c={}));var yc;(function(i){i[i.Invalid=0]="Invalid",i[i.Ascending=1]="Ascending",i[i.Descending=-1]="Descending"})(yc||(yc={}));function $0(i,e,t){const n=D.coordinateSystem,s=new E;if(n==="Geocentric"||n==="Tychonic"){const r=e.find(a=>a.data.name==="Earth");r&&s.copy(r.mesh.position)}else if(n==="Barycentric"){const r=Wt(Ce.SSB,D.date);s.set(r.x*Ye,r.z*Ye,-r.y*Ye)}else s.copy(t.position);s.applyQuaternion(i.quaternion),i.position.copy(s).negate()}function V1(i,e){let t=i;for(let n=0;n<10;n++){const s=(t-e*Math.sin(t)-i)/(1-e*Math.cos(t));if(t-=s,Math.abs(s)<1e-6)break}return t}function Lr(i,e){const n=new Date("2000-01-01T12:00:00Z").getTime(),s=(e.getTime()-n)/864e5,a=.9856076686/i.a**1.5;let o=i.M+a*s;o=o%360,o<0&&(o+=360);const l=Math.PI/180,c=i.a,d=i.e,u=i.i*l,f=i.Omega*l,p=i.w*l,g=o*l,v=V1(g,d),m=c*(Math.cos(v)-d),h=c*Math.sqrt(1-d*d)*Math.sin(v),y=Math.cos(f),_=Math.sin(f),x=Math.cos(p),R=Math.sin(p),A=Math.cos(u),T=Math.sin(u),H=m*(y*x-_*R*A)-h*(y*R+_*x*A),S=m*(_*x+y*R*A)+h*(_*R-y*x*A),C=m*(R*T)+h*(x*T);return{x:H,y:S,z:C}}const ar=new E,Ma=new E,Sa=new E;function xc(i,e,t){if(i.body){const n=Wt(Ce[i.body],e);t.set(n.x,n.y,n.z)}else if(i.elements){const n=Lr(i.elements,e);t.set(n.x,n.y,n.z)}else t.set(0,0,0);return t}function Za(i,e,t,n){const s=D.coordinateSystem;if(i.parent&&e.rotation.copy(i.parent.rotation),s==="Heliocentric"){i.visible=!0,e.visible=!1,i.children.forEach(o=>{const l=t.some(d=>d.data.type==="dwarf"&&o.name===d.data.name+"_Orbit"),c=t.some(d=>d.data.type!=="dwarf"&&o.name===d.data.name+"_Orbit");l?o.visible=D.showDwarfPlanetOrbits&&D.showDwarfPlanets:c?o.visible=D.showPlanetOrbits&&D.showPlanets:o.visible=!0});return}i.visible=!1,e.visible=!0;const r=t.map(o=>o.data),a=[...t];s==="Geocentric"||s==="Tychonic"?a.push({data:{name:"Sun",body:"Sun",color:16776960,period:365.25}}):s==="Barycentric"&&a.push({data:{name:"Sun",body:"Sun",color:16776960,period:12*365.25}}),a.forEach(o=>{const l=o.data;let c=!0;l.type==="dwarf"?c=D.showDwarfPlanetOrbits&&D.showDwarfPlanets:l.name==="Sun"?c=D.showSunOrbits&&D.showSun:c=D.showPlanetOrbits&&D.showPlanets,(s==="Geocentric"||s==="Tychonic")&&l.name==="Earth"&&(c=!1),s==="Tychonic"&&(l.name==="Sun"||(c=!1));let d=e.getObjectByName(l.name+"_Trail");if(!c){d&&(d.visible=!1);return}const u=l.period||730,f=s==="Geocentric"?5e3:500;let p=Math.ceil(u/2);p>f&&(p=f),p<360&&(p=360);const g=u/2,v=D.date.getTime()-g*24*60*60*1e3;if(!d||d.geometry.attributes.position.count<=p){d&&(d.geometry.dispose(),e.remove(d));const h=new it,y=new Float32Array((p+1)*3);h.setAttribute("position",new St(y,3));const _=l.name==="Sun",x=D.showPlanetColors,R=D.showDwarfPlanetColors,T=l.type==="dwarf"?R:x,H=_?l.color||16776960:T&&l.color||4473924,S=new Xt({color:H,transparent:!0,opacity:_||T?.8:.5});d=new Mn(h,S),d.name=l.name+"_Trail",d.frustumCulled=!1,e.add(d)}d.visible=!0,d.geometry.setDrawRange(0,p+1);const m=d.geometry.attributes.position.array;for(let h=0;h<=p;h++){const y=new Date(v+h/p*u*24*60*60*1e3);if(l.name==="Sun"?Ma.set(0,0,0):xc(l,y,Ma),s==="Geocentric"||s==="Tychonic"){const _=r.find(x=>x.name==="Earth");xc(_,y,Sa)}else{const _=Wt(Ce.SSB,y);Sa.set(_.x,_.y,_.z)}ar.subVectors(Ma,Sa),m[h*3]=ar.x*Ye,m[h*3+1]=ar.z*Ye,m[h*3+2]=-ar.y*Ye}d.geometry.attributes.position.needsUpdate=!0}),s==="Tychonic"&&(i.visible=!0,e.visible=!0)}function Ja(i,e){if(e)if(i==="Ecliptic"){const n=ao.degToRad(23.43928);e.rotation.x=-n}else e.rotation.x=0}function W1(i,e,t,n,s,r,a,o){const l=i.addFolder("Visual");l.add(D,"coordinateSystem",{"Center of Mass (Barycentric)":"Barycentric","Earth (Geocentric)":"Geocentric","Earth (Tychonic)":"Tychonic","Sun (Heliocentric)":"Heliocentric"}).name("Origin").onChange(()=>{$0(n,s,r),Za(a,o,s)}),l.add(D,"referencePlane",["Equatorial","Ecliptic"]).name("Reference Plane").onChange(f=>Ja(f,n)),Ja(D.referencePlane,n);const c=l.add(D,"starBrightness",0,1).name("Star Brightness").onChange(f=>{const p=e.value;p&&p.userData.manager&&p.userData.manager.setBrightness(f)});c.domElement.classList.add("hide-value"),c.domElement.classList.add("full-width"),l.add(D,"magnitudeLimit",2,13).name("Magnitude Limit").step(.1).onChange(f=>{const p=e.value;if(p&&p.userData.manager){const g=p.userData.manager;f>6.5&&g.loadChunk(1),f>8&&g.loadChunk(2),g.setMagnitudeLimit(f)}}).domElement.classList.add("full-width");const u=l.add(D,"gamma",.1,5).name("Gamma").onChange(f=>{t&&(t.toneMappingExposure=f)});u.domElement.classList.add("hide-value"),u.domElement.classList.add("full-width"),l.add(D,"objectInfoMode",{Tooltips:"tooltip",Window:"window",Off:"off"}).name("Object Info"),l.close()}function is(i,e,t){e.forEach(n=>{n.data.type!=="dwarf"?n.orbitLine&&(n.orbitLine.visible=D.showPlanetOrbits&&D.showPlanets):n.orbitLine&&(n.orbitLine.visible=D.showDwarfPlanetOrbits&&D.showDwarfPlanets),n.moons.forEach(s=>{if(s.data.orbitLine){let r=!1;(s.data.category==="largest"&&D.showLargestMoons||s.data.category==="major"&&D.showMajorMoons||s.data.category==="small"&&D.showSmallMoons)&&(r=!0),s.data.category||(r=!0),s.data.orbitLine.visible=D.showMoonOrbits&&r}})}),t&&(t.domElement.style.display=D.showMoonOrbits?"":"none")}function Y0(i,e,t){e.axisLine&&(e.axisLine.visible=i),t.forEach(n=>{n.data.axisLine&&(n.data.axisLine.visible=i),n.moons.forEach(s=>{s.data.axisLine&&(s.data.axisLine.visible=i)})})}function Mc(i,e){const t=D.showZodiacs,n=D.showAsterisms;if(i){i.visible=t||n;const s=t?4482696:13421772;i.children.forEach(r=>{r.material&&(r.material.color.setHex(s),r.material.opacity=t?.6:.4)})}e&&(e.visible=n)}function q0(i,e){e&&(e.visible=i)}function j0(i,e){e&&(e.visible=i)}function K0(i,e,t,n){e&&(e.visible=i,t.forEach(s=>{s.mesh.children.forEach(r=>{r.type==="Group"&&r.children.length>0&&r.children[0].type==="Line"&&(r.visible=i)}),s.moons.forEach(r=>{r.mesh.children.forEach(a=>{a.type==="Group"&&a.children.length>0&&a.children[0].type==="Line"&&(a.visible=i)})})}))}function Qa(i){const e=D.planetScale*gn;let t=1;D.capMagneticFields&&e>100&&(t=100/e),i.forEach(n=>{const s=n.mesh.getObjectByName("MagneticField");s&&s.scale.setScalar(t),n.moons.forEach(r=>{const a=r.mesh.getObjectByName("MagneticField");a&&a.scale.setScalar(t)})})}function Z0(i,e){e.visible=i}function J0(i,e){e.forEach(t=>{t.data.type!=="dwarf"&&(t.mesh.visible=i,t.data.cloudMesh&&(t.data.cloudMesh.visible=i),t.orbitLine&&(t.orbitLine.visible=i&&D.showPlanetOrbits),t.group.children.forEach(n=>{n!==t.mesh&&n!==t.orbitLinesGroup&&n.type==="Mesh"&&(n.userData.isMoon||(n.visible=i))}))})}function Q0(i,e){e.forEach(t=>{t.data.type==="dwarf"&&(t.group.visible=i,t.orbitLine&&(t.orbitLine.visible=i&&D.showDwarfPlanetOrbits))})}function hr(i,e,t){e.forEach(n=>{n.moons.forEach(s=>{s.data.category===t&&(s.mesh.visible=i,s.data.orbitLine&&(s.data.orbitLine.visible=i&&D.showMoonOrbits))})})}function X1(i,e,t){const n=[{configKey:"showSun",label:"Sun",icon:"☀️",updateFn:r=>Z0(r,t)},{configKey:"showPlanets",label:"Planets",icon:"🪐",updateFn:r=>J0(r,e)},{configKey:"showDwarfPlanets",label:"Dwarf Planets",icon:"🪨",updateFn:r=>Q0(r,e)},{configKey:"showLargestMoons",label:"Largest Moons",icon:"🌕",updateFn:r=>hr(r,e,"largest")},{configKey:"showMajorMoons",label:"Major Moons",icon:"🌖",updateFn:r=>hr(r,e,"major")},{configKey:"showSmallMoons",label:"Small Moons",icon:"🥔",updateFn:r=>hr(r,e,"small")}],s=document.createElement("div");s.className="object-list",n.forEach(r=>{const a=document.createElement("div");a.className="object-item",D[r.configKey]&&a.classList.add("active"),a.innerHTML=`
        <div class="object-icon">${r.icon}</div>
        <div class="object-label">${r.label}</div>
    `,a.addEventListener("click",()=>{D[r.configKey]=!D[r.configKey];const o=D[r.configKey];o?a.classList.add("active"):a.classList.remove("active"),r.updateFn(o)}),s.appendChild(a)}),i.appendChild(s)}function $1(i,e,t,n){const s=[{configKey:"showConstellations",label:"Asterisms (All)",icon:"✨",updateFn:()=>updateConstellationsVisibility(e,t)},{configKey:"showZodiacs",label:"Zodiacs",icon:"⁂",updateFn:()=>updateConstellationsVisibility(e,t)},{configKey:"showZodiacSigns",label:"Zodiac Signs",icon:"🦁",updateFn:a=>q0(a,n)}],r=document.createElement("div");r.className="object-list",s.forEach(a=>{const o=document.createElement("div");o.className="object-item",D[a.configKey]&&o.classList.add("active"),o.innerHTML=`
        <div class="object-icon">${a.icon}</div>
        <div class="object-label">${a.label}</div>
    `,o.addEventListener("click",()=>{D[a.configKey]=!D[a.configKey];const l=D[a.configKey];l?o.classList.add("active"):o.classList.remove("active"),a.updateFn(l)}),r.appendChild(o)}),i.appendChild(r),i.appendChild(r)}function Y1(i,e,t,n){const s=[{configKey:"showSunOrbits",label:"Sun",icon:"☀️",updateFn:()=>is(e,t,null)},{configKey:"showPlanetOrbits",label:"Planets",icon:"🪐",updateFn:()=>is(e,t,null),childToggle:{configKey:"showPlanetColors",label:"Colors",updateFn:()=>Sc(e,n,t)}},{configKey:"showDwarfPlanetOrbits",label:"Dwarf Planets",icon:"🪨",updateFn:()=>is(e,t,null),childToggle:{configKey:"showDwarfPlanetColors",label:"Colors",updateFn:()=>Sc(e,n,t)}},{configKey:"showMoonOrbits",label:"Moons",icon:"🌕",updateFn:()=>is(e,t,null),childToggle:{configKey:"capMoonOrbits",label:"Cap",updateFn:()=>{}}}],r=document.createElement("div");r.className="object-list",s.forEach(a=>{const o=document.createElement("div");o.className="object-item",D[a.configKey]&&o.classList.add("active");const l=document.createElement("div");l.style.display="flex",l.style.alignItems="center",l.style.flexGrow="1",l.innerHTML=`
        <div class="object-icon">${a.icon}</div>
        <div class="object-label">${a.label}</div>
    `,o.appendChild(l);let c=null;a.childToggle&&(c=document.createElement("div"),c.className="object-toggle",D[a.childToggle.configKey]&&c.classList.add("active"),c.textContent=a.childToggle.label,c.style.display=D[a.configKey]?"flex":"none",c.addEventListener("click",d=>{d.stopPropagation(),D[a.childToggle.configKey]=!D[a.childToggle.configKey],D[a.childToggle.configKey]?c.classList.add("active"):c.classList.remove("active"),a.childToggle.updateFn&&a.childToggle.updateFn()}),o.appendChild(c)),l.addEventListener("click",()=>{D[a.configKey]=!D[a.configKey],D[a.configKey]?(o.classList.add("active"),c&&(c.style.display="flex")):(o.classList.remove("active"),c&&(c.style.display="none")),a.updateFn()}),r.appendChild(o)}),i.appendChild(r)}function q1(i,e,t,n){const s=[{configKey:"showSunMagneticFieldBasic",label:"Sun",icon:"🔆",updateFn:()=>{if(n){const a=n.children.find(o=>o.name==="SunMagneticFieldBasic");a&&(a.visible=D.showSunMagneticFieldBasic)}}},{configKey:"showSunMagneticField",label:"Solar Wind",icon:"🌬️",updateFn:()=>{if(n){const a=n.children.find(o=>o.name==="MagneticField");a&&(a.visible=D.showSunMagneticField)}},childToggle:{configKey:"showSunMagneticFieldBasic",label:"Basic",updateFn:()=>{if(n){const a=n.children.find(o=>o.name==="SunMagneticFieldBasic");a&&(a.visible=D.showSunMagneticFieldBasic)}}}},{configKey:"showMagneticFields",label:"Planets, Moons",icon:"🧲",updateFn:()=>K0(D.showMagneticFields,e,t),childToggle:{configKey:"capMagneticFields",label:"Cap",updateFn:()=>Qa(t)}}],r=document.createElement("div");r.className="object-list",s.forEach(a=>{const o=document.createElement("div");o.className="object-item",D[a.configKey]&&o.classList.add("active");const l=document.createElement("div");l.style.display="flex",l.style.alignItems="center",l.style.flexGrow="1",l.innerHTML=`
        <div class="object-icon">${a.icon}</div>
        <div class="object-label">${a.label}</div>
    `,o.appendChild(l);let c=null;a.childToggle&&(c=document.createElement("div"),c.className="object-toggle",D[a.childToggle.configKey]&&c.classList.add("active"),c.textContent=a.childToggle.label,c.style.display=D[a.configKey]?"flex":"none",c.addEventListener("click",d=>{d.stopPropagation(),D[a.childToggle.configKey]=!D[a.childToggle.configKey],D[a.childToggle.configKey]?c.classList.add("active"):c.classList.remove("active"),a.childToggle.updateFn&&a.childToggle.updateFn()}),o.appendChild(c)),l.addEventListener("click",()=>{D[a.configKey]=!D[a.configKey],D[a.configKey]?(o.classList.add("active"),c&&(c.style.display="flex")):(o.classList.remove("active"),c&&(c.style.display="none")),a.updateFn()}),r.appendChild(o)}),i.appendChild(r)}function j1(i,e,t,n){const s=[{configKey:"showAxes",label:"Axes",icon:"📏",updateFn:a=>Y0(a,e,t)},{configKey:"showHabitableZone",label:"Habitable Zone",icon:"🟢",updateFn:a=>j0(a,n)}],r=document.createElement("div");r.className="object-list",s.forEach(a=>{const o=document.createElement("div");o.className="object-item",D[a.configKey]&&o.classList.add("active"),o.innerHTML=`
        <div class="object-icon">${a.icon}</div>
        <div class="object-label">${a.label}</div>
    `,o.addEventListener("click",()=>{D[a.configKey]=!D[a.configKey];const l=D[a.configKey];l?o.classList.add("active"):o.classList.remove("active"),a.updateFn(l)}),r.appendChild(o)}),i.appendChild(r)}function Sc(i,e,t){const n=D.showPlanetColors,s=D.showDwarfPlanetColors;i.children.forEach(r=>{const a=r.name.replace("_Orbit",""),o=t.find(l=>l.data.name===a);if(o){const c=o.data.type==="dwarf"?s:n,d=c&&o.data.color||4473924;r.material&&(r.material.color.setHex(d),r.material.opacity=c?.8:.5)}}),e.children.forEach(r=>{const a=r.name.replace("_Trail","");if(a==="Sun")return;const o=t.find(l=>l.data.name===a);if(o){const c=o.data.type==="dwarf"?s:n,d=c&&o.data.color||4473924;r.material&&(r.material.color.setHex(d),r.material.opacity=c?.8:.5)}})}function bc(i,e){if(!i)return;const t=i.children.find(s=>s.name==="SunMagneticFieldBasic");t&&t.scale.setScalar(e);const n=i.children.find(s=>s.name==="MagneticField");n&&n.scale.setScalar(1)}class K1{constructor(e,t,n,s,r,a,o,l,c,d,u,f){this.planets=e,this.sun=t,this.orbitGroup=n,this.zodiacGroup=s,this.asterismsGroup=r,this.starsRef=a,this.camera=o,this.controls=l,this.zodiacSignsGroup=c,this.habitableZone=d,this.magneticFieldsGroup=u,this.universeGroup=f}getConfig(){return D}setSpeed(e){D.simulationSpeed=e}setDate(e){const[t,n,s]=e.split("-").map(Number),r=D.date;D.date=new Date(t,n-1,s,r.getHours(),r.getMinutes(),r.getSeconds())}focus(e){const t=e.toLowerCase();if(t==="sun"){Fi({mesh:this.sun,data:{name:"Sun",radius:5},type:"sun"},this.camera,this.controls);return}for(const n of this.planets){if(n.data.name.toLowerCase()===t){Fi(n,this.camera,this.controls);return}for(const s of n.moons)if(s.data.name.toLowerCase()===t){Fi(s,this.camera,this.controls);return}}We.warn(`Object '${e}' not found.`)}exitFocus(){ps(this.controls)}rotateToDarkSide(){const e=this.controls.target,t=this.camera,n=new E(0,0,0),s=e.clone(),r=new E().subVectors(s,n).normalize(),a=t.position.distanceTo(s),o=s.clone().add(r.multiplyScalar(a));t.position.copy(o),this.controls.update()}setReferencePlane(e){if(e!=="Equatorial"&&e!=="Ecliptic"){We.warn("Invalid plane. Use 'Equatorial' or 'Ecliptic'.");return}D.referencePlane=e,Ja(e,this.universeGroup)}setStarBrightness(e){D.starBrightness=Math.max(0,Math.min(1,e));const t=this.starsRef.value;t&&t.userData.manager&&t.userData.manager.setBrightness(D.starBrightness)}toggleOrbits(e){D.showOrbits=e,is(e,this.orbitGroup,this.planets)}toggleAxes(e){D.showAxes=e,Y0(e,this.sun,this.planets)}toggleZodiacs(e){D.showZodiacs=e,Mc(this.zodiacGroup,this.asterismsGroup)}toggleAsterisms(e){D.showAsterisms=e,Mc(this.zodiacGroup,this.asterismsGroup)}toggleZodiacSigns(e){D.showZodiacSigns=e,q0(e,this.zodiacSignsGroup)}toggleHabitableZone(e){D.showHabitableZone=e,j0(e,this.habitableZone)}toggleMagneticFields(e){D.showMagneticFields=e,K0(e,this.magneticFieldsGroup,this.planets)}toggleSunMagneticFieldBasic(e){if(D.showSunMagneticFieldBasic=e,this.universeGroup){const t=this.universeGroup.children.find(n=>n.name==="SunMagneticFieldBasic");t&&(t.visible=e)}}toggleSunMagneticFieldSolarWind(e){if(D.showSunMagneticField=e,this.universeGroup){const t=this.universeGroup.children.find(n=>n.name==="MagneticField");t&&(t.visible=e)}}toggleSun(e){D.showSun=e,Z0(e,this.sun)}togglePlanets(e){D.showPlanets=e,J0(e,this.planets)}toggleDwarfPlanets(e){D.showDwarfPlanets=e,Q0(e,this.planets)}toggleMoons(e,t){if(e==="largest")D.showLargestMoons=t;else if(e==="major")D.showMajorMoons=t;else if(e==="small")D.showSmallMoons=t;else{We.warn("Invalid moon category. Use 'largest', 'major', or 'small'.");return}hr(t,this.planets,e)}}function Z1(i,e=100){const t=i.map(s=>s.pos);return new po(t).getPoints(e)}function Ec(i,e,t=null){const n=new Date(e);if(t){const a=Lr(t,n);return new E(a.x,a.z,-a.y)}const s=Ce[i];if(!s)return console.warn(`Body ${i} not found in Astronomy engine`),new E(0,0,0);const r=Wt(s,n);return new E(r.x,r.z,-r.y)}function wc(i,e){const t=i*15*(Math.PI/180),n=e*(Math.PI/180),s=Math.cos(n)*Math.cos(t),r=Math.cos(n)*Math.sin(t),a=Math.sin(n);return new E(s,a,-r)}const Tc={"67P":{a:3.46,e:.641,i:7.04,Omega:50.1,w:12.7,M:303.7},Ulysses:{a:3.37,e:.603,i:79.1,Omega:337.2,w:22.4,M:0},Arrokoth:{a:44.58,e:.042,i:2.45,Omega:293,w:323,M:0}},J1=[{id:"voyager1",color:65535,exit:{ra:17.2,dec:12.1},waypoints:[{date:"1977-09-05",body:"Earth"},{date:"1979-03-05",body:"Jupiter"},{date:"1980-11-12",body:"Saturn"},{date:"2004-12-16",dist:94,label:"Termination Shock"},{date:"2012-08-25",dist:121,label:"Heliopause"},{date:"2024-01-01",dist:162,label:"Current"}]},{id:"voyager2",color:16711935,exit:{ra:20,dec:-60},waypoints:[{date:"1977-08-20",body:"Earth"},{date:"1979-07-09",body:"Jupiter"},{date:"1981-08-25",body:"Saturn"},{date:"1986-01-24",body:"Uranus"},{date:"1989-08-25",body:"Neptune"},{date:"2007-08-30",dist:84,label:"Termination Shock"},{date:"2018-11-05",dist:119,label:"Heliopause"},{date:"2024-01-01",dist:136,label:"Current"}]},{id:"pioneer10",color:16753920,exit:{ra:5.2,dec:26},waypoints:[{date:"1972-03-02",body:"Earth"},{date:"1973-12-04",body:"Jupiter"},{date:"1976-01-01",dist:9.5,label:"Saturn Orbit"},{date:"1983-06-13",dist:30.1,label:"Neptune Orbit"},{date:"2003-01-23",dist:80,label:"End of Comms"},{date:"2024-01-01",dist:135,label:"Current"}]},{id:"pioneer11",color:65280,exit:{ra:18.8,dec:-8},waypoints:[{date:"1973-04-06",body:"Earth"},{date:"1974-12-02",body:"Jupiter"},{date:"1979-09-01",body:"Saturn"},{date:"1995-11-24",dist:44,label:"End of Comms"},{date:"2024-01-01",dist:113,label:"Current"}]},{id:"galileo",color:16766720,waypoints:[{date:"1989-10-18",body:"Earth"},{date:"1990-02-10",body:"Venus"},{date:"1990-12-08",body:"Earth"},{date:"1991-10-29",label:"Gaspra"},{date:"1992-12-08",body:"Earth"},{date:"1993-08-28",label:"Ida"},{date:"1995-12-07",body:"Jupiter"},{date:"2003-09-21",body:"Jupiter"}]},{id:"cassini",color:35071,waypoints:[{date:"1997-10-15",body:"Earth"},{date:"1998-04-26",body:"Venus"},{date:"1999-06-24",body:"Venus"},{date:"1999-08-18",body:"Earth"},{date:"2000-12-30",body:"Jupiter"},{date:"2004-07-01",body:"Saturn"},{date:"2017-09-15",body:"Saturn"}]},{id:"newHorizons",color:16777215,exit:{ra:19.9,dec:-20},waypoints:[{date:"2006-01-19",body:"Earth"},{date:"2007-02-28",body:"Jupiter"},{date:"2015-07-14",body:"Pluto"},{date:"2019-01-01",customBody:"Arrokoth"},{date:"2024-01-01",dist:58,label:"Current"}]},{id:"parkerSolarProbe",color:16729344,waypoints:[{date:"2018-08-12",body:"Earth"},{date:"2018-10-03",body:"Venus"},{date:"2018-11-06",label:"Perihelion 1",pos:new E(.16,0,0)},{date:"2019-12-26",body:"Venus"},{date:"2020-07-11",body:"Venus"},{date:"2021-02-20",body:"Venus"},{date:"2021-10-16",body:"Venus"},{date:"2023-08-21",body:"Venus"},{date:"2024-11-06",body:"Venus"},{date:"2024-12-24",label:"Closest",pos:new E(.04,0,0)}]},{id:"juno",color:16738740,waypoints:[{date:"2011-08-05",body:"Earth"},{date:"2013-10-09",body:"Earth"},{date:"2016-07-04",body:"Jupiter"},{date:"2021-06-07",body:"Jupiter",label:"Ganymede Flyby"},{date:"2022-09-29",body:"Jupiter",label:"Europa Flyby"},{date:"2023-12-30",body:"Jupiter",label:"Io Flyby"},{date:"2024-01-01",body:"Jupiter"}]},{id:"rosetta",color:9055202,waypoints:[{date:"2004-03-02",body:"Earth"},{date:"2005-03-04",body:"Earth"},{date:"2007-02-25",body:"Mars"},{date:"2007-11-13",body:"Earth"},{date:"2008-09-05",label:"Steins"},{date:"2009-11-13",body:"Earth"},{date:"2010-07-10",label:"Lutetia"},{date:"2014-08-06",customBody:"67P"},{date:"2016-09-30",customBody:"67P"}]},{id:"ulysses",color:16776960,waypoints:[{date:"1990-10-06",body:"Earth"},{date:"1992-02-08",body:"Jupiter"},{date:"1994-06-26",customBody:"Ulysses"},{date:"1995-06-19",customBody:"Ulysses"},{date:"2000-09-08",customBody:"Ulysses"},{date:"2001-08-31",customBody:"Ulysses"},{date:"2007-02-07",customBody:"Ulysses"},{date:"2008-01-14",customBody:"Ulysses"},{date:"2009-06-30",customBody:"Ulysses"}]}],ds={};function Q1(i){return J1.forEach(e=>{const t=e.waypoints.map((l,c)=>l.body?{pos:Ec(l.body,l.date),date:new Date(l.date).getTime()}:l.customBody&&Tc[l.customBody]?{pos:Ec(null,l.date,Tc[l.customBody]),date:new Date(l.date).getTime()}:l.pos?{pos:l.pos,date:new Date(l.date).getTime()}:l.dist?{type:"exit",dist:l.dist,date:new Date(l.date).getTime()}:{type:"interpolate",date:new Date(l.date).getTime()}),n=[];for(let l=0;l<t.length;l++){const c=t[l];if(c.pos)n.push({pos:c.pos,date:c.date});else if(c.type==="exit")if(e.exit){const u=wc(e.exit.ra,e.exit.dec).multiplyScalar(c.dist);n.push({pos:u,date:c.date})}else if(e.exit){const u=wc(e.exit.ra,e.exit.dec).multiplyScalar(c.dist);n.push({pos:u,date:c.date})}else n.push({pos:new E(0,0,0),date:c.date});else if(c.type==="interpolate"){const d=n[l-1];let u=null;for(let f=l+1;f<t.length;f++)if(t[f].pos){u=t[f];break}if(d&&u){const f=u.date-d.date,g=(c.date-d.date)/f,v=new E().lerpVectors(d.pos,u.pos,g);n.push({pos:v,date:c.date})}else n.push({pos:new E(0,0,0),date:c.date})}}const s=Z1(n,200),r=new it().setFromPoints(s.map(l=>l.multiplyScalar(Ye))),a=new Xt({color:e.color,linewidth:2,transparent:!0,opacity:.8}),o=new Mn(r,a);o.visible=D.showMissions[e.id],i.add(o),ds[e.id]=o}),ds}function e2(){Object.keys(ds).forEach(i=>{ds[i]&&(ds[i].visible=D.showMissions[i])})}function t2(i){const n=.95*Ye,s=1.37*Ye,r=new Ar(n,s,64),a=new Ms({color:65280,side:Gt,transparent:!0,opacity:.15,depthWrite:!1}),o=new Lt(r,a),l=23.4*(Math.PI/180);return o.rotation.x=-Math.PI/2+l,o.visible=!1,i.add(o),o}function Ac(i,e){if(!i.magneticField)return null;const{strength:t,tilt:n,color:s}=i.magneticField,r=new Et;r.name="MagneticField";const a=16,o=64,l=new Xt({color:s,transparent:!0,opacity:.3,blending:zi});for(let c=0;c<a;c++){const d=c/a*Math.PI*2;for(let u=1.5;u<=3;u+=.5){const f=[],p=u/3,g=e*t*p;for(let h=0;h<=o;h++){const y=.1+h/o*(Math.PI-.2),_=g*Math.sin(y)**2,x=_*Math.sin(y)*Math.cos(d),R=_*Math.sin(y)*Math.sin(d),A=_*Math.cos(y);f.push(new E(x,A,R))}const v=new it().setFromPoints(f),m=new Mn(v,l);r.add(m)}}if(n){const c=n*(Math.PI/180);r.rotation.z=c}return r.visible=!1,r}function n2(i){const e=new Et;e.name="SunMagneticFieldBasic";const t=5;e.userData.timeOffset=Math.random()*1e3;const n=new Ms({color:16777130,transparent:!0,opacity:.9});n.onBeforeCompile=o=>{o.uniforms.uTime={value:0},e.userData.shaderUniforms=o.uniforms,o.vertexShader=`
      uniform float uTime;
      
      // Simplex 2D noise (Exact match to planets.js)
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      ${o.vertexShader}
    `.replace("#include <begin_vertex>",`
      #include <begin_vertex>
      
      // Calculate "Sphere UV" for this vertex position
      vec3 sphereNormal = normalize(transformed);
      
      // Standard UV mapping
      float u = 0.5 + atan(sphereNormal.z, sphereNormal.x) / (2.0 * 3.14159265);
      float v = 0.5 + asin(sphereNormal.y) / 3.14159265;
      
      // Match Sun Shader Parameters
      float timeScale = uTime * 0.15;
      float noiseScale = 0.005; 
      
      // Use 2D Noise on UVs (Exact match to surface)
      float n1 = snoise(vec2(u * 25.0 + timeScale, v * 25.0 + timeScale));
      float n2 = snoise(vec2(u * 30.0 - timeScale * 0.5, v * 30.0 - timeScale * 0.5));
      
      // Apply displacement
      vec3 displacement = vec3(n1, n2, n1 * n2) * 0.5; 
      
      // Small wiggle to match boiling
      transformed += displacement * 0.1; 
      `)};const s="/assets/textures/midres/sun.jpg",r=o=>new Promise((l,c)=>{const d=new Image;d.crossOrigin="Anonymous",d.onload=()=>{const u=document.createElement("canvas");u.width=d.width,u.height=d.height;const f=u.getContext("2d");f.drawImage(d,0,0);const p=f.getImageData(0,0,d.width,d.height);We.log("Sun texture loaded for magnetic fields:",d.width,d.height),l(p)},d.onerror=u=>{We.error("Error loading sun texture:",u),c(u)},d.src=o});return(async()=>{let o;try{o=await r(s)}catch(P){We.error("Failed to load sun texture for magnetic fields:",P);return}const{width:l,height:c,data:d}=o,u=new On(t,64,64),f=.45;let p=0;const g=u.attributes.position,v=u.attributes.uv,m=g.count;We.log(`[MagneticFields] Starting generation. Vertices: ${m}, Threshold: ${f}`);const h=[];for(let P=0;P<m;P++){const N=v.getX(P),k=v.getY(P);let j=Math.floor(N*l)%l;j<0&&(j+=l);let q=Math.floor((1-k)*c);q<0&&(q=0),q>=c&&(q=c-1);const K=(q*l+j)*4,X=(d[K]+d[K+1]+d[K+2])/(3*255);X>=f&&h.push({index:P,pos:new E(g.getX(P),g.getY(P),g.getZ(P)),intensity:X,uv:{u:N,v:k}})}We.log(`[MagneticFields] Found ${h.length} valid seeds.`);for(let P=h.length-1;P>0;P--){const N=Math.floor(Math.random()*(P+1));[h[P],h[N]]=[h[N],h[P]]}const y=new Set,_=.1*t,x=P=>{const N=Math.floor(P.x/_),k=Math.floor(P.y/_),j=Math.floor(P.z/_);return`${N},${k},${j}`},R=t*.1,A=t*.5,T=200;let H=0;for(let P=0;P<h.length&&!(p>=T);P++){const N=h[P];let k=null;for(let ce=1;ce<50;ce++){const Ie=(P+ce)%h.length,U=h[Ie],Re=N.pos.distanceTo(U.pos);if(Re>R&&Re<A){k=U;break}}if(!k)continue;const j=N.pos,q=k.pos,K=j.clone().add(q).multiplyScalar(.5).normalize(),ne=j.distanceTo(q)*(.5+Math.random()*.5),ie=K.multiplyScalar(t+ne),V=[],Z=16;let le=!1;for(let ce=0;ce<=Z;ce++){const Ie=ce/Z,U=j.clone().lerp(ie,Ie),Re=ie.clone().lerp(q,Ie),de=U.lerp(Re,Ie),me=x(de);if(y.has(me)){le=!0;break}V.push(de)}if(le){H++;continue}for(const ce of V)y.add(x(ce));const ye=new po(V),Me=.008+Math.random()*.007,Te=new mo(ye,Z,Me,4,!1),O=new Lt(Te,n);e.add(O),p++}We.log(`[MagneticFields] Created ${p} loops. Rejected ${H} due to collision.`);const S=250,C=new Xt({color:16724787,transparent:!0,opacity:.6}),z=new Xt({color:3407667,transparent:!0,opacity:.6});let Y=0;const J=[...h];for(let P=J.length-1;P>0;P--){const N=Math.floor(Math.random()*(P+1));[J[P],J[N]]=[J[N],J[P]]}for(let P=0;P<J.length&&!(Y>=S);P++){const k=J[P].pos,q=Math.asin(k.y/t)*(180/Math.PI);if(!(Math.abs(q)>30)&&Math.random()<.9)continue;const ie=q>=0?z:C,V=[],Z=5+Math.random()*10,le=20,ye=.2;for(let O=0;O<=le;O++){const ce=O/le,Ie=t+ce*Z,U=Math.sin(ce*10)*.1*ce,Re=k.clone().normalize(),de=new E(0,1,0);Re.applyAxisAngle(de,ce*ye);const me=Re.multiplyScalar(Ie);me.x+=U,V.push(me)}const Me=new it().setFromPoints(V),Te=new Mn(Me,ie);e.add(Te),Y++}})(),e.visible=!1,e}function i2(i){const e=new Et;e.name="MagneticField";const t=100,n=100,s=t*n,r=new Float32Array(s*3),a=new Float32Array(s),o=new Float32Array(s);for(let m=0;m<t;m++)for(let h=0;h<n;h++){const y=m*n+h;r[y*3]=0,r[y*3+1]=0,r[y*3+2]=0,a[y]=m,o[y]=h/(n-1)}const l=new it;l.setAttribute("position",new St(r,3)),l.setAttribute("lineIndex",new St(a,1)),l.setAttribute("segmentRatio",new St(o,1));const c=new Fn({uniforms:{uTime:{value:0},uColor:{value:new Ke(16776960)},uSunRadius:{value:5}},vertexShader:`
      uniform float uTime;
      uniform float uSunRadius;
      attribute float lineIndex;
      attribute float segmentRatio;
      varying float vOpacity;

      // Simplex 3D Noise function (simplified)
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        // Basic Parker Spiral parameters
        float r = uSunRadius + segmentRatio * 2000.0; // Extend to 2000 units (40 AU)
        
        // Randomize starting angles based on lineIndex
        float phi0 = lineIndex * 123.45; 
        float theta0 = lineIndex * 67.89;
        
        // Spiral equation: phi increases with radius
        // Solar wind speed / rotation rate factor
        float spiralFactor = 0.1; 
        float phi = phi0 + (r - uSunRadius) * spiralFactor;
        
        // Convert spherical to cartesian
        // Distribute lines roughly spherically using theta0
        // We use a pseudo-random distribution for theta
        float theta = acos(2.0 * fract(theta0 * 0.1) - 1.0); // -1 to 1 mapped to 0 to PI
        
        float x = r * sin(theta) * cos(phi);
        float y = r * cos(theta); // Up axis
        float z = r * sin(theta) * sin(phi);
        
        // Add chaotic noise (turbulence)
        // Noise moves with time and varies by position
        float noiseScale = 0.05 * r; // Turbulence increases with distance
        float timeScale = uTime * 0.5;
        
        vec3 noisePos = vec3(x * 0.05, y * 0.05, z * 0.05 + timeScale);
        float nX = snoise(noisePos);
        float nY = snoise(noisePos + vec3(100.0));
        float nZ = snoise(noisePos + vec3(200.0));
        
        vec3 pos = vec3(x, y, z) + vec3(nX, nY, nZ) * noiseScale;

        // Pass opacity to fragment shader
        // Fade out at the start (near sun surface) and at the end
        float fadeStart = smoothstep(0.0, 0.1, segmentRatio);
        float fadeEnd = 1.0 - smoothstep(0.8, 1.0, segmentRatio);
        vOpacity = fadeStart * fadeEnd * 0.03; // Max opacity reduced to 0.03

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vOpacity;

      void main() {
        gl_FragColor = vec4(uColor, vOpacity);
      }
    `,transparent:!0,depthWrite:!1,blending:zi}),d=new Float32Array(t*(n-1)*2*3),u=new Float32Array(t*(n-1)*2),f=new Float32Array(t*(n-1)*2);let p=0;for(let m=0;m<t;m++)for(let h=0;h<n-1;h++)u[p]=m,f[p]=h/(n-1),p++,u[p]=m,f[p]=(h+1)/(n-1),p++;const g=new it;g.setAttribute("position",new St(d,3)),g.setAttribute("lineIndex",new St(u,1)),g.setAttribute("segmentRatio",new St(f,1));const v=new Rg(g,c);return v.frustumCulled=!1,e.add(v),e.userData.material=c,e}class s2{constructor(){this.audio=new Audio,this.tracks=[],this.currentTrackIndex=-1,this.isPlaying=!1,this.initialized=!1,this.playHistory=[],this.handleTrackEnded=this.handleTrackEnded.bind(this),this.audio.addEventListener("ended",this.handleTrackEnded)}async init(){if(!this.initialized)try{const e=await fetch("assets/music/tracks.json");this.tracks=await e.json(),this.initialized=!0,We.log("Music system initialized with tracks:",this.tracks),D.music.playlist.length===0&&(D.music.playlist=this.tracks.map(t=>t.id)),We.log("Music ready. Click play button to start.")}catch(e){We.error("Failed to initialize music system:",e)}}setEnabled(e){D.music.enabled=e,e?this.audio.paused&&(this.audio.src?(this.audio.play().catch(t=>We.warn("Audio play failed:",t)),this.isPlaying=!0):this.playNext()):(this.audio.pause(),this.isPlaying=!1)}setPlaylist(e){D.music.playlist=e,D.music.enabled&&!this.isPlaying&&e.length>0&&this.playNext()}setVolume(e){this.audio.volume=e,D.music.volume=e,e>0&&!D.music.enabled?this.setEnabled(!0):e===0&&D.music.enabled&&this.setEnabled(!1)}playNext(){var n;if(!D.music.enabled||D.music.playlist.length===0){this.audio.pause(),this.isPlaying=!1;return}const e=this.tracks.filter(s=>D.music.playlist.includes(s.id));if(e.length===0)return;let t;if(D.music.shuffle){const s=Math.floor(Math.random()*e.length);t=e[s]}else{const s=(n=this.tracks[this.currentTrackIndex])==null?void 0:n.id,r=e.findIndex(a=>a.id===s);t=e[(r+1)%e.length]}if(this.currentTrackIndex!==-1){const s=this.tracks[this.currentTrackIndex];s&&(this.playHistory.push(s.id),this.playHistory.length>50&&this.playHistory.shift())}this.currentTrackIndex=this.tracks.findIndex(s=>s.id===t.id),this.currentTrackIndex!==-1&&this.loadAndPlay(this.tracks[this.currentTrackIndex],!0)}playPrevious(){if(this.playHistory.length>0){const e=this.playHistory.pop(),t=this.tracks.findIndex(n=>n.id===e);if(t!==-1){this.currentTrackIndex=t;const n=this.tracks[this.currentTrackIndex];this.loadAndPlay(n,!0);return}}We.log("No previous track in history")}loadAndPlay(e){const t="ogg";this.audio.src=`assets/music/${t}/${encodeURIComponent(e.filename)}.${t}`,this.audio.volume=D.music.volume,D.music.currentTrackName=e.title.replace(/ \[(Lyrics|Instrumental)\]/g,""),We.log(`Now playing: ${e.title}`),this.audio.play().then(()=>{this.isPlaying=!0}).catch(n=>{We.warn("Playback failed (likely autoplay blocked):",n),this.isPlaying=!1})}handleTrackEnded(){this.playNext()}}const Ot=new s2;function r2(i){const e=new S0,t=new p0(-window.innerWidth/2,window.innerWidth/2,window.innerHeight/2,-window.innerHeight/2,.1,100);t.position.z=5;let n=null;const s={active:!0,phase:"delay",startTime:0},r={initialDelay:2,flyDuration:4,startPosition:new E(0,0,0),targetPosition:new E(0,0,0),startScale:.3,endScale:1};new vo().load("./assets/images/rabbit_spaceship.png",l=>{const c=new ho({map:l,transparent:!0,opacity:1});n=new E0(c);const d=l.image.width/l.image.height,u=200;n.scale.set(u*d,u,1),n.position.copy(r.startPosition),e.add(n),s.startTime=performance.now()/1e3},void 0,l=>{We.error("An error happened loading the spaceship:",l),s.active=!1});function o(){const l=window.innerWidth,c=window.innerHeight;if(t.left=-l/2,t.right=l/2,t.top=c/2,t.bottom=-c/2,t.updateProjectionMatrix(),r.startPosition.x=l/2+100,r.startPosition.y=c/2+100,r.targetPosition.x=-l/2-100,r.targetPosition.y=-c/2-100,n&&s.phase==="fly"){const u=performance.now()/1e3-s.startTime,f=Math.min(u/r.flyDuration,1);n.position.lerpVectors(r.startPosition,r.targetPosition,f)}}return window.addEventListener("resize",o),o(),{update:()=>{if(!s.active||!n)return;const l=performance.now()/1e3,c=l-s.startTime;if(s.phase==="delay")c>=r.initialDelay&&(s.phase="fly",s.startTime=l);else if(s.phase==="fly"){const d=Math.min(c/r.flyDuration,1),u=1-(1-d)**5;n.position.lerpVectors(r.startPosition,r.targetPosition,u);const f=ao.lerp(r.startScale,r.endScale,u),p=n.material.map.image.width/n.material.map.image.height,g=200;n.scale.set(g*p*f,g*f,1),d>=1&&(s.active=!1,e.remove(n),window.removeEventListener("resize",o))}},render:()=>{s.active&&(i.autoClear=!1,i.clearDepth(),i.render(e,t),i.autoClear=!0)}}}class a2{constructor(){this.windows=new Map,this.zIndexCounter=1e3,this.container=document.body,window.addEventListener("resize",()=>this._handleResize())}createWindow(e,t,n={}){if(this.windows.has(e))return this.windows.get(e);const s=document.createElement("div");s.id=e,s.className="ui-window",s.style.zIndex=this.zIndexCounter++;let r=n.x||100,a=n.y||100,o="none",l="none";const c=20;if(n.snap){if(n.snap.x==="right"){let u=300;n.width&&typeof n.width=="string"&&n.width.endsWith("px")&&(u=parseInt(n.width)),r=window.innerWidth-u-c,o="right"}else n.snap.x==="left"&&(r=c,o="left");if(n.snap.y==="bottom"){let u=400;n.height&&typeof n.height=="string"&&n.height.endsWith("px")&&(u=parseInt(n.height)),a=window.innerHeight-u-c,l="bottom"}else n.snap.y==="top"&&(a=c,l="top")}if(s.style.transform=`translate3d(${r}px, ${a}px, 0)`,n.width&&(s.style.width=n.width),n.height&&(s.style.height=n.height),s.innerHTML=`
      <div class="window-header">
        <span class="window-title">${t||""}</span>
        <div class="window-close">×</div>
      </div>
      <div class="window-content"></div>
    `,this.container.appendChild(s),l==="bottom"){const u=s.getBoundingClientRect();a=window.innerHeight-u.height-c,s.style.transform=`translate3d(${r}px, ${a}px, 0)`}if(o==="right"){const u=s.getBoundingClientRect();r=window.innerWidth-u.width-c,s.style.transform=`translate3d(${r}px, ${a}px, 0)`}const d={id:e,element:s,header:s.querySelector(".window-header"),content:s.querySelector(".window-content"),closeBtn:s.querySelector(".window-close"),x:r,y:a,snapState:{x:o,y:l},onClose:n.onClose};return this.windows.set(e,d),this._setupInteractions(d),d}getWindow(e){return this.windows.get(e)}toggleWindow(e){const t=this.windows.get(e);t&&(t.element.style.display==="none"?this.showWindow(e):this.hideWindow(e))}showWindow(e){const t=this.windows.get(e);t&&(t.element.style.display="flex",this.bringToFront(e))}hideWindow(e){const t=this.windows.get(e);t&&(t.element.style.display="none",t.onClose&&t.onClose())}bringToFront(e){const t=this.windows.get(e);t&&(t.element.style.zIndex=++this.zIndexCounter)}_setupInteractions(e){let t=!1,n,s,r,a;const o=d=>{d.target.closest("button")||d.target.closest("input")||d.target.closest(".control-btn")||d.target.closest(".speedometer-interaction")||d.target===e.closeBtn||(t=!0,n=d.clientX,s=d.clientY,r=e.x,a=e.y,this.bringToFront(e.id))},l=d=>{if(t){const u=d.clientX-n,f=d.clientY-s;let p=r+u,g=a+f;const v=20,m=20,h=e.element.offsetWidth,y=e.element.offsetHeight,_=window.innerWidth,x=window.innerHeight;let R="none",A="none";Math.abs(p-m)<v?(p=m,R="left"):Math.abs(p-(_-h-m))<v&&(p=_-h-m,R="right"),Math.abs(g-m)<v?(g=m,A="top"):Math.abs(g-(x-y-m))<v&&(g=x-y-m,A="bottom"),e.x=p,e.y=g,e.snapState={x:R,y:A},e.element.style.transform=`translate3d(${e.x}px, ${e.y}px, 0)`,d.preventDefault()}},c=()=>{t=!1};e.element.addEventListener("mousedown",o),document.addEventListener("mousemove",l),document.addEventListener("mouseup",c),e.closeBtn.addEventListener("click",d=>{d.stopPropagation(),this.hideWindow(e.id)}),e.element.addEventListener("mousedown",()=>{this.bringToFront(e.id)}),this._setupResizeObserver(e)}_setupResizeObserver(e){const t=new ResizeObserver(n=>{for(const s of n){const r=e.element.offsetWidth,a=e.element.offsetHeight,o=window.innerWidth,l=window.innerHeight,c=20;let d=!1;e.snapState.x==="right"&&(e.x=o-r-c,d=!0),e.snapState.y==="bottom"&&(e.y=l-a-c,d=!0),d&&(e.element.style.transform=`translate3d(${e.x}px, ${e.y}px, 0)`)}});t.observe(e.element),e.resizeObserver=t}_handleResize(){const t=window.innerWidth,n=window.innerHeight;for(const s of this.windows.values()){let r=!1;const a=s.element.offsetWidth,o=s.element.offsetHeight;s.snapState.x==="right"&&(s.x=t-a-20,r=!0),s.snapState.y==="bottom"&&(s.y=n-o-20,r=!0),s.x+a>t,r&&(s.element.style.transform=`translate3d(${s.x}px, ${s.y}px, 0)`)}}}const nt=new a2,o2=10;function l2(i,e,t,n,s,r){const a=document.getElementById("tooltip"),o=nt.createWindow("object-info","Object Info",{x:20,y:20,width:"300px",onClose:()=>{}});nt.hideWindow("object-info");const l=o.element,c=new t1,d=new ge;window.addEventListener("mousemove",u=>{d.x=u.clientX/window.innerWidth*2-1,d.y=-(u.clientY/window.innerHeight)*2+1;const f=u.clientX,p=u.clientY;if(u.target.closest(".lil-gui")||u.target.closest(".info-window")&&D.objectInfoMode==="window"){D.objectInfoMode==="tooltip"&&(a.style.display="none"),document.body.style.cursor="default";return}if(D.objectInfoMode==="off"){a.style.display="none",l.style.display="none",document.body.style.cursor="default";return}let g=null;const v=[t];e.forEach(h=>{if(v.push(h.mesh),h.moons)for(const y of h.moons)v.push(y.mesh)}),c.setFromCamera(d,i);const m=c.intersectObjects(v,!0);if(m.length>0){const h=m[0],y=c2(h.object,e,t);y&&(g=y)}if(!g){const h=y2(f,p,i,e,t);h&&(g=h)}if(!g){const h=n.value;if(h){const y=h.userData.manager,_=h.userData.starData;let x=[];y?x=y.getOctrees():h.userData.octree&&(x=[h.userData.octree]);let A=15,T=[];if(x.length>0){c.setFromCamera(d,i);const H=new rt().copy(h.matrixWorld).invert(),S=c.ray.clone().applyMatrix4(H);x.forEach(C=>{const z=C.queryRay(S,500);T.push(...z)})}else _&&(T=_.map((H,S)=>({data:H,index:S})));for(const H of T){const S=H.data;if(S.mag!==void 0&&D.magnitudeLimit!==void 0&&S.mag>D.magnitudeLimit)continue;let C;H.position?C=H.position.clone():C=new E(S.x*1e4,S.z*1e4,-S.y*1e4),C.applyMatrix4(h.matrixWorld);const z=C.clone().project(i);if(z.z<1&&z.z>-1){const Y=(z.x*.5+.5)*window.innerWidth,J=(-(z.y*.5)+.5)*window.innerHeight,P=f-Y,N=p-J,k=Math.sqrt(P*P+N*N);k<A&&(A=k,g={data:S,type:"star"})}}}}if(!g){const h=[];s!=null&&s.visible&&h.push(s),r!=null&&r.visible&&h.push(r);let y=o2;h.forEach(_=>{_.children.forEach(x=>{if(!x.isLine)return;const R=x.geometry.attributes.position,A=new E,T=new E;for(let H=0;H<R.count-1;H++){A.fromBufferAttribute(R,H),T.fromBufferAttribute(R,H+1),A.applyMatrix4(x.matrixWorld),T.applyMatrix4(x.matrixWorld);const S=A.clone().project(i),C=T.clone().project(i);if(S.z<-1||S.z>1||C.z<-1||C.z>1)continue;const z=(S.x*.5+.5)*window.innerWidth,Y=(-(S.y*.5)+.5)*window.innerHeight,J=(C.x*.5+.5)*window.innerWidth,P=(-(C.y*.5)+.5)*window.innerHeight,N=_2(f,p,z,Y,J,P);N<y*y&&(y=Math.sqrt(N),g={type:"asterism",data:x.userData})}})})}if(g){document.body.style.cursor="pointer";const h=v2(g);if(D.objectInfoMode==="tooltip"){a.innerHTML=h,a.style.display="block",l.style.display="none";const y=a.offsetWidth,_=a.offsetHeight,x=15;let R=f+x,A=p+x;R+y>window.innerWidth&&(R=f-y-x),A+_>window.innerHeight&&(A=p-_-x),R<0&&(R=x),A<0&&(A=x),a.style.left=`${R}px`,a.style.top=`${A}px`}else if(D.objectInfoMode==="window"){a.style.display="none";const y=nt.getWindow("object-info");if(!(y&&y.element.style.display!=="none"))return;o.content.innerHTML=h;let _="Object Info";g.type==="planet"||g.type==="moon"?_=g.data.name:g.type==="sun"?_="Sun":g.type==="star"?_=g.data.name||`HD ${g.data.id}`:g.type==="asterism"&&(_=g.data.id),o.header.querySelector(".window-title").textContent=_}}else a.style.display="none",D.objectInfoMode,document.body.style.cursor="default"})}function c2(i,e,t){if(i.userData&&i.userData.type==="asterism")return{type:"asterism",data:i.userData};if(i===t||i.parent===t)return{type:"sun",data:{}};for(const n of e){if(n.mesh===i||n.mesh===i.parent)return{type:"planet",data:n.data,worldPos:n.mesh.position};if(n.moons){for(const s of n.moons)if(s.mesh===i||s.mesh===i.parent)return{type:"moon",data:s.data,parentName:n.data.name}}}return null}function bs(i,e,t=null){let n='<div class="tooltip-container">';return n+=`<div class="tooltip-header">${i}</div>`,n+='<div class="tooltip-content">',e.length>0&&e.forEach(s=>{n+=`
        <div class="tooltip-row">
          <span class="tooltip-label">${s.label}</span>
          <span class="tooltip-value">${s.value}</span>
        </div>`}),t&&(n+=t),n+="</div></div>",n}function d2(i){if(!i.body||!(Ce!=null&&Ce[i.body]))return null;try{const e=D.date instanceof Date?D.date:new Date;if(Number.isNaN(e.getTime()))return{trueAnomaly:"Invalid Date",velocity:"---",distanceAU:"---",lightTime:"---"};const t=Ce[i.body],n=Wt(t,e),s=vs(t,e,!0),r=1/(24*60),a=new Date(e.getTime()-6e4),o=new Date(e.getTime()+6e4),l=Wt(t,a),c=Wt(t,o),d=(c.x-l.x)/(2*r),u=(c.y-l.y)/(2*r),f=(c.z-l.z)/(2*r),g=(Math.sqrt(d**2+u**2+f**2)*1495978707e-1/86400).toFixed(2),v=Math.sqrt(s.x**2+s.y**2+s.z**2),m=(v*499.00478/60).toFixed(2),h=new E(n.x,n.y,n.z),y=new E(d,u,f),_=new E().crossVectors(h,y),x=.0002959122082855911,R=new E().crossVectors(y,_),A=h.length(),T=R.clone().divideScalar(x),H=h.clone().divideScalar(A),S=T.sub(H),C=S.length();let z=0;if(C>1e-6){const J=S.dot(h)/(C*A),P=Math.max(-1,Math.min(1,J));z=Math.acos(P)*180/Math.PI,h.dot(y)<0&&(z=360-z)}else z=0;return{trueAnomaly:z.toFixed(1),velocity:g,distanceAU:v.toFixed(3),lightTime:m}}catch(e){return We.warn(`Error calculating live data for ${i.name}`,e),null}}function u2(){try{const i=D.date instanceof Date?D.date:new Date,e=vs(Ce.Sun,i,!0),t=Math.sqrt(e.x**2+e.y**2+e.z**2),n=(t*499.00478/60).toFixed(2);return{distanceAU:t.toFixed(3),lightTime:n}}catch(i){return We.warn("Error calculating live data for Sun",i),null}}function ed(i){let e='<div class="tooltip-live-section"><span class="tooltip-live-title">Live Data</span>';return i.trueAnomaly&&(e+=`<div class="tooltip-row"><span class="tooltip-label">True Anomaly</span><span class="tooltip-value">${i.trueAnomaly}°</span></div>`),i.velocity&&(e+=`<div class="tooltip-row"><span class="tooltip-label">Helio Velocity</span><span class="tooltip-value">${i.velocity} km/s</span></div>`),i.distanceAU&&(e+=`<div class="tooltip-row"><span class="tooltip-label">Dist to Earth</span><span class="tooltip-value">${i.distanceAU} AU</span></div>`),i.lightTime&&(e+=`<div class="tooltip-row"><span class="tooltip-label">Light Time</span><span class="tooltip-value">${i.lightTime} min</span></div>`),e+="</div>",e}function h2(){const i=[{label:"Type",value:"G-type Main Sequence Star (G2V)"},{label:"Radius",value:"696,340 km (109 x Earth)"},{label:"Mass",value:"1.989 × 10³⁰ kg (333,000 x Earth)"},{label:"Density",value:"1.41 g/cm³"},{label:"Surface Gravity",value:"28 g"},{label:"Surface Temp",value:"5,500°C"},{label:"Core Temp",value:"15,000,000°C"},{label:"Rotation",value:"~27 days (Differential)"},{label:"Age",value:"4.6 Billion Years"}],e=u2(),t=e?ed(e):null;return bs("Sun",i,t)}function eo(i,e=2){if(!i)return"0";const t=i.toExponential(e),[n,s]=t.split("e"),r=parseFloat(n),a=parseInt(s),o={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","-":"⁻","+":""},l=a.toString().split("").map(c=>o[c]||c).join("");return`${r} × 10${l}`}function ss(i){if(typeof i!="number")return i;const e=Math.abs(i);return e>=1e3?i.toLocaleString("en-US",{maximumFractionDigits:0}):e>=10?i.toLocaleString("en-US",{maximumFractionDigits:1}):i.toLocaleString("en-US",{maximumFractionDigits:3})}function td(i){return i?typeof i=="string"?i:typeof i=="number"?`${(i/9.807).toFixed(2)} g`:i:"N/A"}function f2(i){let e="Planet";i.type==="dwarf"?e="Dwarf Planet":i.category&&(e=`Planet (${i.category})`);const t=[{label:"Type",value:e}],n=i.radius*6371;let s=`${ss(n)} km`;i.name!=="Earth"&&(s+=` (${ss(i.radius)} x Earth)`);let r=i.details.mass;if(typeof i.details.mass=="number"){const c=i.details.mass/597e22;if(r=`${eo(i.details.mass)} kg`,i.name!=="Earth"){let u=`${ss(c)} x Earth`;c<.01&&(u=`${eo(c)} x Earth`),r+=` (${u})`}}i.details&&(t.push({label:"Year",value:`${ss(i.period)} days`},{label:"Radius",value:s},{label:"Mass",value:r},{label:"Density",value:i.details.density},{label:"Surface Gravity",value:td(i.details.gravity)},{label:"Albedo",value:i.details.albedo},{label:"Surface Temp",value:i.details.temp}),t.push({label:"Surface Pressure",value:i.details.pressure}),t.push({label:"Solar Day",value:i.details.solarDay},{label:"Sidereal Day",value:i.details.siderealDay},{label:"Axial Tilt",value:`${i.axialTilt}°`},{label:"Eccentricity",value:i.details.eccentricity},{label:"Inclination",value:i.details.inclination}));const a=d2(i),o=a?ed(a):null;return bs(i.name,t,o)}function p2(i,e){const t=[{label:"Type",value:"Moon"},{label:"Orbiting",value:e||"Unknown"}];if(i.diameter&&t.push({label:"Diameter",value:`${ss(i.diameter)} km`}),i.mass){const n=eo(i.mass);t.push({label:"Mass",value:`${n} kg`})}return i.gravity&&t.push({label:"Surface Gravity",value:td(i.gravity)}),i.meanTemp&&t.push({label:"Mean Temp",value:`${i.meanTemp} K`}),t.push({label:"Orbital Period",value:`${i.period.toFixed(2)} days`}),i.discoveryYear&&t.push({label:"Discovered",value:`${i.discoveryYear} (${i.discoveredBy})`}),bs(i.name,t)}function m2(i){const e=i.distance?(i.distance*3.26156).toFixed(1):"N/A",t=i.luminosity?i.luminosity.toFixed(2):"N/A";let n=i.name;n||(i.hd?n=`HD ${i.hd}`:i.hip?n=`HIP ${i.hip}`:n=`HR ${i.id}`);const s=i.spectralType||"Unknown",r=[{label:"Distance",value:`${e} LY`},{label:"Type",value:s},{label:"Luminosity",value:`${t} L☉`}];if(i.temperature&&r.push({label:"Temp",value:`${Math.round(i.temperature)} K`}),i.mass&&r.push({label:"Mass",value:`${i.mass.toFixed(2)} M☉`}),i.radius&&r.push({label:"Radius",value:`${i.radius.toFixed(2)} R☉`}),i.mag!==void 0)r.push({label:"Apparent Mag",value:i.mag.toFixed(2)});else if(i.luminosity&&i.distance){const o=4.83-2.5*Math.log10(i.luminosity)+5*(Math.log10(i.distance)-1);r.push({label:"Apparent Mag (Est)",value:o.toFixed(2)})}return i.hip&&r.push({label:"Hipparcos ID",value:i.hip}),i.hd&&r.push({label:"HD ID",value:i.hd}),!i.hip&&!i.hd&&r.push({label:"Catalog ID",value:i.id}),bs(n,r)}function g2(i){const e=i.isZodiac?"Zodiac Constellation":"Constellation";return bs(i.id,[{label:"Type",value:e}])}function v2(i){try{const e=i.data;switch(i.type){case"sun":return h2();case"planet":return f2(e);case"moon":return p2(e,i.parentName);case"star":return m2(e);case"constellation":return g2(e);default:return""}}catch(e){return We.error("Error formatting tooltip:",e),"Error loading data"}}function _2(i,e,t,n,s,r){const a=(t-s)*(t-s)+(n-r)*(n-r);if(a===0)return(i-t)*(i-t)+(e-n)*(e-n);let o=((i-t)*(s-t)+(e-n)*(r-n))/a;o=Math.max(0,Math.min(1,o));const l=t+o*(s-t),c=n+o*(r-n);return(i-l)*(i-l)+(e-c)*(e-c)}function y2(i,e,t,n,s){let r=null,a=20;const o=(l,c,d,u)=>{if(!l||!l.visible)return;const f=new E;l.getWorldPosition(f);const p=f.clone().project(t);if(p.z<-1||p.z>1)return;const g=(p.x*.5+.5)*window.innerWidth,v=(-(p.y*.5)+.5)*window.innerHeight,m=i-g,h=e-v,y=Math.sqrt(m*m+h*h);y<a&&(a=y,r={type:c,data:d,parentName:u})};return o(s,"sun",{}),n.forEach(l=>{o(l.mesh,"planet",l.data),l.moons&&l.moons.forEach(c=>{o(c.mesh,"moon",c.data,l.data.name)})}),r}const x2=[{name:"Aries",index:0},{name:"Taurus",index:1},{name:"Gemini",index:2},{name:"Cancer",index:3},{name:"Leo",index:4},{name:"Virgo",index:5},{name:"Libra",index:6},{name:"Scorpio",index:7},{name:"Sagittarius",index:8},{name:"Capricorn",index:9},{name:"Aquarius",index:10},{name:"Pisces",index:11}],M2=["Ari","Tau","Gem","Cnc","Leo","Vir","Lib","Sco","Sgr","Cap","Aqr","Psc"];function S2(i,e){const t=new Et;t.visible=D.showZodiacSigns||!1,i.add(t);const n="/assets/zodiac_signs_sheet.png";return We.log("ZodiacSigns: Loading texture from",n),e.load(n,s=>{We.log("ZodiacSigns: Texture loaded successfully"),s.colorSpace=xt;const r=5e3;x2.forEach((a,o)=>{const l=s.clone();l.needsUpdate=!0;const c=o%4,d=2-Math.floor(o/4);l.repeat.set(.25,.333),l.offset.set(c*.25,d*.333);const u=new ho({map:l,transparent:!0,opacity:.8,color:16777215,depthWrite:!1,blending:zi}),f=new E0(u);f.scale.set(r,r,1),f.visible=!1,f.userData={zodiacIndex:o,zodiacId:M2[o]},t.add(f)})},void 0,s=>{We.error("ZodiacSigns: Error loading texture",s)}),t}async function b2(i,e){if(!(!i||!e))try{const n=await(await fetch("/assets/zodiac_lines.json")).json(),s=1e4,r={};e.forEach(a=>{a.x!=null&&a.y!=null&&a.z!=null&&a.id!=null&&(r[a.id]=new E(a.x*s,a.z*s,-a.y*s))}),i.children.forEach(a=>{if(!a.isSprite)return;const o=a.userData.zodiacId,l=n[o];if(l&&l.length>0){const c=new E;let d=0;if(l.forEach(u=>{const f=r[u];f&&(c.add(f),d++)}),d>0){c.divideScalar(d),a.position.copy(c),a.visible=!0;const p=c.length()*.15;a.scale.set(p,p,1)}}}),We.log("ZodiacSigns: Aligned signs to constellations")}catch(t){We.error("ZodiacSigns: Error aligning signs",t)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class on{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),on.nextNameID=on.nextNameID||0,this.$name.id=`lil-gui-name-${++on.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class E2 extends on{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function to(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const w2={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:to,toHexString:to},_s={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},T2={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=_s.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return _s.toHexString(s)}},A2={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=_s.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return _s.toHexString(s)}},C2=[w2,_s,T2,A2];function R2(i){return C2.find(e=>e.match(i))}class L2 extends on{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=R2(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=to(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ba extends on{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class P2 extends on{constructor(e,t,n,s,r,a){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,o,l,c,d,u;const f=5,p=y=>{o=y.clientX,l=c=y.clientY,a=!0,d=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=y=>{if(a){const _=y.clientX-o,x=y.clientY-l;Math.abs(x)>f?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>f&&v()}if(!a){const _=y.clientY-c;u-=_*this._step*this._arrowKeyMultiplier(y),d+u>this._max?u=this._max-d:d+u<this._min&&(u=this._min-d),this._snapClampSetValue(d+u)}c=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(h,y,_,x,R)=>(h-y)/(_-y)*(R-x)+x,t=h=>{const y=this.$slider.getBoundingClientRect();let _=e(h,y.left,y.right,this._min,this._max);this._snapClampSetValue(_)},n=h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=h=>{t(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),a=!1},d=h=>{h.touches.length>1||(this._hasScrollBar?(o=h.touches[0].clientX,l=h.touches[0].clientY,a=!0):c(h),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=h=>{if(a){const y=h.touches[0].clientX-o,_=h.touches[0].clientY-l;Math.abs(y)>Math.abs(_)?c(h):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else h.preventDefault(),t(h.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),g=400;let v;const m=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const _=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class D2 extends on{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class I2 extends on{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const U2=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function N2(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Cc=!1;class Mo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Cc&&o&&(N2(U2),Cc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(e,t,n,s,r){if(Object(n)===n)return new D2(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new P2(this,e,t,n,s,r);case"boolean":return new E2(this,e,t);case"string":return new I2(this,e,t);case"function":return new ba(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new L2(this,e,t,n)}addFolder(e){const t=new Mo({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ba||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ba)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class F2{constructor(){this.dock=document.createElement("div"),this.dock.className="menu-dock",document.body.appendChild(this.dock),this.items=new Map}addItem(e,t,n,s){const r=document.createElement("div");r.className="dock-item",r.title=n,r.innerHTML=`<span class="dock-icon">${t}</span>`,r.addEventListener("click",()=>{s(),this.updateActiveState(e)}),this.dock.appendChild(r),this.items.set(e,r)}updateActiveState(e){}setActive(e,t){const n=this.items.get(e);n&&(t?n.classList.add("active"):n.classList.remove("active"))}}const jn=new F2;function O2(i){const e=i.addFolder("About"),t=document.createElement("div");t.style.padding="15px",t.style.textAlign="center",t.innerHTML=`
        <img src="./assets/images/WhiteRabbit.png" style="max-width: 100%; margin-bottom: 10px; border-radius: 4px;">
        <br>
        <a href="https://github.com/IraGraves/white-rabbit" target="_blank" style="color: #88ccff; text-decoration: none;">GitHub Repository</a>
    `,e.domElement.querySelector(".children").appendChild(t),e.close()}const z2=[{type:"Total",date:new Date("2020-12-14T16:00:00Z")},{type:"Total",date:new Date("2021-12-04T07:00:00Z")},{type:"Total",date:new Date("2023-04-20T04:00:00Z")},{type:"Total",date:new Date("2024-04-08T18:00:00Z")},{type:"Total",date:new Date("2026-08-12T17:00:00Z")},{type:"Total",date:new Date("2027-08-02T10:00:00Z")},{type:"Total",date:new Date("2028-07-22T02:00:00Z")},{type:"Total",date:new Date("2030-11-25T06:00:00Z")},{type:"Annular",date:new Date("2020-06-21T06:00:00Z")},{type:"Annular",date:new Date("2021-06-10T10:00:00Z")},{type:"Annular",date:new Date("2023-10-14T18:00:00Z")},{type:"Annular",date:new Date("2024-10-02T18:00:00Z")},{type:"Annular",date:new Date("2026-02-17T12:00:00Z")},{type:"Annular",date:new Date("2027-02-06T16:00:00Z")},{type:"Annular",date:new Date("2028-01-26T15:00:00Z")},{type:"Annular",date:new Date("2030-06-01T06:00:00Z")}];function B2(i,e,t,n){var s;D.date=new Date(i.date),D.simulationSpeed=1,(s=window.uiState)!=null&&s.updateSpeedometer&&window.uiState.updateSpeedometer(),setTimeout(()=>{const r=n.find(a=>a.data.name==="Earth");if(!r){We.error("Earth not found");return}Fi({...r,type:"planet"},e,t,2.5),We.log(`Navigating to event: ${i.type} - ${i.date.toISOString()}`)},100)}function or(i){const e=i.date.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return`${i.type} - ${e}`}function k2(i,e,t,n,s){const r=i.addFolder("Events");r.domElement.classList.add("events-folder");const a={selectedEvent:null},o=document.createElement("div");o.className="events-container",o.innerHTML=`
        <div class="events-input-wrapper">
            <label for="events-search">Solar Eclipse</label>
            <input type="text" id="events-search" placeholder="Search..." autocomplete="off">
        </div>
        <div class="events-actions">
            <button id="btn-go-to-event" disabled>Go To</button>
        </div>
        <div id="events-status"></div>
    `,r.domElement.querySelector(".children").appendChild(o);let l=document.getElementById("events-results-dropdown");l||(l=document.createElement("div"),l.id="events-results-dropdown",l.className="events-results",document.body.appendChild(l));const c=o.querySelector("#events-search"),d=o.querySelector("#btn-go-to-event"),u=o.querySelector("#events-status");function f(){const g=c.getBoundingClientRect();l.style.top=`${g.bottom+5}px`,l.style.left=`${g.left}px`,l.style.width=`${g.width}px`}c.addEventListener("input",g=>{const v=g.target.value.toLowerCase();if(v.length<1){l.style.display="none";return}const m=[];z2.forEach(h=>{or(h).toLowerCase().includes(v)&&m.push(h)}),m.sort((h,y)=>h.date-y.date),l.innerHTML="",m.length>0?(f(),l.style.display="block",m.forEach(h=>{const y=document.createElement("div");y.className="events-result-item";const _=h.type.includes("Total")?"total-eclipse":"annular-eclipse";y.innerHTML=`<span class="event-type ${_}">${h.type}</span><span class="event-date">${h.date.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}</span>`,y.onclick=()=>{p(h),l.style.display="none"},l.appendChild(y)})):l.style.display="none"}),window.addEventListener("resize",()=>{l.style.display==="block"&&f()}),r.domElement.closest(".lil-gui").addEventListener("scroll",()=>{l.style.display==="block"&&f()},!0);function p(g){a.selectedEvent=g,c.value=or(g),d.disabled=!1,u.textContent=`Selected: ${or(g)}`}d.onclick=()=>{a.selectedEvent&&e&&t&&(B2(a.selectedEvent,e,t,n),u.textContent=`Navigating to ${or(a.selectedEvent)}...`)},r.add({dummy:""},"dummy").name("Hidden").onChange(()=>{}).domElement.style.display="none",document.addEventListener("click",g=>{o.contains(g.target)||(l.style.display="none")}),r.close()}const H2="modulepreload",G2=function(i){return"/"+i},Rc={},Lc=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=G2(l),l in Rc)return;Rc[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":H2,c||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};function V2(i,e,t,n,s,r){const a=i.addFolder("Find");a.domElement.classList.add("find-folder");const o={selectedObject:null},l=document.createElement("div");l.className="find-container",l.innerHTML=`
        <div class="find-input-wrapper">
            <label for="find-search">Search</label>
            <input type="text" id="find-search" placeholder="Planets, stars..." autocomplete="off">
        </div>
        <div class="find-actions">
            <button id="btn-look-at" disabled>Look At</button>
            <button id="btn-go-to" disabled>Go To</button>
        </div>
        <div id="find-status"></div>
    `,a.domElement.querySelector(".children").appendChild(l);let c=document.getElementById("find-results-dropdown");c||(c=document.createElement("div"),c.id="find-results-dropdown",c.className="find-results",document.body.appendChild(c));const d=l.querySelector("#find-search"),u=l.querySelector("#btn-look-at"),f=l.querySelector("#btn-go-to"),p=l.querySelector("#find-status");function g(){const m=d.getBoundingClientRect();c.style.top=`${m.bottom+5}px`,c.style.left=`${m.left}px`,c.style.width=`${m.width}px`}d.addEventListener("input",m=>{const h=m.target.value.toLowerCase();if(h.length<2){c.style.display="none";return}const y=[];if("sun".includes(h)&&t.visible&&y.push({name:"Sun",type:"Star",object:{mesh:t,data:{name:"Sun",radius:5},type:"sun"}}),e.forEach(_=>{_.data.name.toLowerCase().includes(h)&&_.mesh.visible&&y.push({name:_.data.name,type:_.data.type==="dwarf"?"Dwarf Planet":"Planet",object:{mesh:_.mesh,data:_.data,type:"planet"}}),_.moons&&_.moons.forEach(x=>{x.data.name.toLowerCase().includes(h)&&x.mesh.visible&&y.push({name:x.data.name,type:"Moon",object:{mesh:x.mesh,data:x.data,type:"moon"}})})}),n.value&&n.value.userData.starData){const _=n.value.userData.starData;let x=0;for(let R=0;R<_.length&&x<5;R++){const A=_[R],T=A.name||`HD ${A.id}`;if(T.toLowerCase().includes(h)||A.id.toString().includes(h)){const H=n.value.geometry.attributes.position.array,S=H[R*3],C=H[R*3+1],z=H[R*3+2],Y=new Lt;Y.position.set(S,C,z),y.push({name:T,type:"Star",object:{mesh:Y,data:{name:T,radius:A.radius||1},type:"star"}}),x++}}}c.innerHTML="",y.length>0?(g(),c.style.display="block",y.slice(0,10).forEach(_=>{const x=document.createElement("div");x.className="find-result-item",x.innerHTML=`<strong>${_.name}</strong> <span style="opacity:0.7; font-size:0.8em">(${_.type})</span>`,x.onclick=()=>{v(_),c.style.display="none"},c.appendChild(x)})):c.style.display="none"}),window.addEventListener("resize",()=>{c.style.display==="block"&&g()}),a.domElement.closest(".lil-gui").addEventListener("scroll",()=>{c.style.display==="block"&&g()},!0);function v(m){o.selectedObject=m.object,d.value=m.name,u.disabled=!1,f.disabled=!1,p.textContent=`Selected: ${m.name}`}u.onclick=()=>{o.selectedObject&&s&&r&&Lc(()=>Promise.resolve().then(()=>hc),void 0).then(m=>{m.isFocusModeActive()&&m.exitFocusMode(r);const h=o.selectedObject,y=new E;h.mesh.position?h.mesh.getWorldPosition(y):y.copy(h.mesh.position),r.target.copy(y),s.lookAt(y),r.update()})},f.onclick=()=>{o.selectedObject&&s&&r&&Lc(()=>Promise.resolve().then(()=>hc),void 0).then(m=>{m.focusOnObject(o.selectedObject,s,r)})},a.add({dummy:""},"dummy").name("Hidden").onChange(()=>{}).domElement.style.display="none",document.addEventListener("click",m=>{l.contains(m.target)||(c.style.display="none")}),a.close()}function W2(i,e){const t=i.addFolder("Missions");t.add(e.showMissions,"pioneer10").name("Pioneer 10 (1972)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("pioneer10-checkbox"),t.add(e.showMissions,"pioneer11").name("Pioneer 11 (1973)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("pioneer11-checkbox"),t.add(e.showMissions,"voyager2").name("Voyager 2 (1977)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("voyager2-checkbox"),t.add(e.showMissions,"voyager1").name("Voyager 1 (1977)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("voyager1-checkbox"),t.add(e.showMissions,"galileo").name("Galileo (1989)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("galileo-checkbox"),t.add(e.showMissions,"ulysses").name("Ulysses (1990)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("ulysses-checkbox"),t.add(e.showMissions,"cassini").name("Cassini (1997)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("cassini-checkbox"),t.add(e.showMissions,"rosetta").name("Rosetta (2004)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("rosetta-checkbox"),t.add(e.showMissions,"newHorizons").name("New Horizons (2006)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("new-horizons-checkbox"),t.add(e.showMissions,"juno").name("Juno (2011)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("juno-checkbox"),t.add(e.showMissions,"parkerSolarProbe").name("Parker Solar Probe (2018)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("parker-checkbox"),t.close()}function X2(i,e){const t=i.addFolder("Navigation");t.add(e,"rotate").name("Rotate").disable(),t.add(e,"pan").name("Pan").disable(),t.add(e,"zoom").name("Zoom").disable(),t.add(e,"focusEnter").name("Focus").disable(),t.add(e,"focusExit").name("Exit Focus").disable(),t.add(e,"fullScreen").name("Full Screen").disable(),t.close()}function Pc(i,e){const t=document.createElement("div");t.className="custom-value",i.domElement.querySelector(".widget").appendChild(t);const n=()=>{t.textContent=e(i.getValue())},s=i._onChange;return i.onChange(r=>{n(),s&&s(r)}),n(),{update:n}}function $2(i,e,t,n,s){const r=i.addFolder("Scale");let a=!1;const o=r.add(e,"scalePreset",["Realistic","Artistic","Custom"]).name("Scale Preset"),l={get sunScale(){return D.sunScale*Ri},set sunScale(g){D.sunScale=g/Ri}},c=r.add(l,"sunScale",1,70).name("Sun Scale").onChange(g=>{const v=g/Ri;D.sunScale=v,n.scale.setScalar(v),bc(s,v),!a&&e.scalePreset!=="Custom"&&(e.scalePreset="Custom",o.updateDisplay())});c.domElement.classList.add("hide-value"),Pc(c,g=>g.toFixed(0)+"x");const d=g=>((g-1)/(gn*5-1))**(1/3),u=g=>1+(gn*5-1)*g**3,f={get planetT(){return d(D.planetScale*gn)},set planetT(g){const m=u(g)/gn;D.planetScale=m,t.forEach(h=>{h.mesh.scale.setScalar(m),h.moons.forEach(y=>y.mesh.scale.setScalar(m))}),Qa(t)}},p=r.add(f,"planetT",0,1).name("Planet Scale").onChange(g=>{!a&&e.scalePreset!=="Custom"&&(e.scalePreset="Custom",o.updateDisplay())});return p.domElement.classList.add("hide-value"),Pc(p,g=>u(g).toFixed(0)+"x"),o.onChange(g=>{if(a=!0,g==="Realistic")c.setValue(1),p.setValue(0);else if(g==="Artistic"){c.setValue(1*Ri);const v=(499/(gn*5-1))**(1/3);p.setValue(v)}a=!1}),r.close(),Qa(t),bc(s,D.sunScale),{setScalePreset:g=>{if(e.scalePreset=g,o.updateDisplay(),g==="Realistic")c.setValue(1),p.setValue(0);else if(g==="Artistic"){c.setValue(1*Ri);const v=(499/(gn*5-1))**(1/3);p.setValue(v)}}}}function Y2(){const i=nt.createWindow("music-window","Music",{width:"240px",x:290,y:window.innerHeight-280,snap:{y:"bottom"},onClose:()=>{}}),e=i.content;e.classList.add("music-window-content");const t=document.createElement("div");t.className="volume-container";const n=document.createElement("label");n.textContent="Volume";const s=document.createElement("input");s.type="range",s.min="0",s.max="1",s.step="0.01",s.value=D.music.volume,s.className="volume-slider",s.oninput=v=>{Ot.setVolume(parseFloat(v.target.value))},t.appendChild(n),t.appendChild(s),e.appendChild(t);const r=document.createElement("div");r.className="track-display",r.textContent=D.music.currentTrackName||"---",e.appendChild(r),i.update=()=>{r.textContent!==D.music.currentTrackName&&(r.textContent=D.music.currentTrackName)};const a=document.createElement("div");a.className="control-buttons";const o=document.createElement("div");o.className="control-btn",o.textContent="⏮",o.title="Previous Track",o.onclick=()=>Ot.playPrevious();const l=document.createElement("div");l.className="control-btn";const c=D.music.volume>0&&D.music.enabled;l.textContent=c?"⏸":"▶",l.title=c?"Pause":"Play",l.onclick=()=>{const v=!D.music.enabled;Ot.setEnabled(v),l.textContent=v?"⏸":"▶",l.title=v?"Pause":"Play"};const d=i.update;i.update=()=>{d();const v=D.music.enabled,m=v?"⏸":"▶";l.textContent!==m&&(l.textContent=m,l.title=v?"Pause":"Play")};const u=document.createElement("div");u.className="control-btn",u.textContent="⏭",u.title="Next Track",u.onclick=()=>Ot.playNext();const f=document.createElement("div");f.className="control-btn";const p=`
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;">
      <polyline points="16 3 21 3 21 8"></polyline>
      <line x1="4" y1="20" x2="21" y2="3"></line>
      <polyline points="21 16 21 21 16 21"></polyline>
      <line x1="15" y1="15" x2="21" y2="21"></line>
      <line x1="4" y1="4" x2="9" y2="9"></line>
    </svg>
  `;f.innerHTML=p,f.title=D.music.shuffle?"Shuffle: ON":"Shuffle: OFF",D.music.shuffle&&f.classList.add("active"),f.onclick=()=>{D.music.shuffle=!D.music.shuffle,D.music.shuffle?(f.classList.add("active"),f.title="Shuffle: ON"):(f.classList.remove("active"),f.title="Shuffle: OFF")};const g=document.createElement("div");g.className="control-btn",g.textContent="☰",g.title="Edit Playlist",g.onclick=()=>q2(),a.appendChild(o),a.appendChild(l),a.appendChild(u),a.appendChild(f),a.appendChild(g),e.appendChild(a),i.element.offsetHeight,i.x=290,nt.hideWindow("music-window")}function q2(){let i=document.querySelector(".playlist-modal-overlay");i||(j2(),i=document.querySelector(".playlist-modal-overlay")),Pr(),i.classList.add("active")}function j2(){const i=document.createElement("div");i.className="playlist-modal-overlay";const e=document.createElement("div");e.className="playlist-modal";const t=document.createElement("div");t.className="playlist-header",t.innerHTML="<h2>Playlist</h2>";const n=document.createElement("div");n.className="playlist-controls";const s=document.createElement("button");s.className="playlist-btn",s.textContent="All",s.onclick=()=>Dc(!0);const r=document.createElement("button");r.className="playlist-btn",r.textContent="None",r.onclick=()=>Dc(!1);const a=document.createElement("button");a.className="playlist-btn",a.textContent="Lyrics",a.onclick=()=>Ic("Lyrics");const o=document.createElement("button");o.className="playlist-btn",o.textContent="Instrumental",o.onclick=()=>Ic("Instrumental"),n.appendChild(s),n.appendChild(r),n.appendChild(a),n.appendChild(o);const l=document.createElement("div");l.className="playlist-tracks",l.id="playlist-tracks-container";const c=document.createElement("div");c.className="playlist-footer";const d=document.createElement("button");d.className="playlist-close-btn",d.textContent="Close",d.onclick=()=>{i.classList.remove("active")},c.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(c),i.appendChild(e),document.body.appendChild(i),i.addEventListener("click",u=>{u.target===i&&i.classList.remove("active")})}function Pr(){const i=document.getElementById("playlist-tracks-container");if(i){if(i.innerHTML="",!Ot.tracks||Ot.tracks.length===0){i.innerHTML='<div style="padding:10px; color:#aaa;">Loading tracks...</div>',Ot.init().then(()=>Pr());return}Ot.tracks.forEach(e=>{const t=document.createElement("div");t.className="track-item",D.music.playlist.includes(e.id)&&t.classList.add("selected");const n=document.createElement("input");n.type="checkbox",n.checked=D.music.playlist.includes(e.id),n.onchange=r=>{K2(e.id,r.target.checked),r.target.checked?t.classList.add("selected"):t.classList.remove("selected")};const s=document.createElement("span");s.className="track-label",s.textContent=e.title.replace(/ \[(Lyrics|Instrumental)\]/g,""),t.onclick=r=>{r.target!==n&&(n.checked=!n.checked,n.dispatchEvent(new Event("change")))},t.appendChild(n),t.appendChild(s),i.appendChild(t)})}}function K2(i,e){e?D.music.playlist.includes(i)||D.music.playlist.push(i):D.music.playlist=D.music.playlist.filter(t=>t!==i),Ot.setPlaylist(D.music.playlist)}function Dc(i){i?D.music.playlist=Ot.tracks.map(e=>e.id):D.music.playlist=[],Ot.setPlaylist(D.music.playlist),Pr()}function Ic(i){const t=Ot.tracks.filter(s=>s.title.includes(`[${i}]`)).map(s=>s.id);t.every(s=>D.music.playlist.includes(s))?D.music.playlist=D.music.playlist.filter(s=>!t.includes(s)):t.forEach(s=>{D.music.playlist.includes(s)||D.music.playlist.push(s)}),Ot.setPlaylist(D.music.playlist),Pr()}function Z2(i,e){const t=i.addFolder("System"),n=document.createElement("div");n.style.padding="10px",n.style.fontSize="12px",n.style.lineHeight="1.4",n.style.color="#eee",n.style.fontFamily="monospace";const s=e.getContext(),r=s.getExtension("WEBGL_debug_renderer_info"),a=r?s.getParameter(r.UNMASKED_RENDERER_WEBGL):"Unknown";r&&s.getParameter(r.UNMASKED_VENDOR_WEBGL);const o=s.getParameter(s.MAX_TEXTURE_SIZE),l=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),c=s.getExtension("EXT_texture_filter_anisotropic"),d=c?s.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):"N/A",u=navigator.hardwareConcurrency||"Unknown",f=navigator.deviceMemory?`${navigator.deviceMemory} GB`:"Unknown",p=`
    <div style="margin-bottom: 8px;">
      <strong style="color: #88ccff;">CPU:</strong> ${u} Logical Processors<br>
      <strong style="color: #88ccff;">Memory:</strong> ${f}
    </div>
    <div style="margin-bottom: 8px;">
      <strong style="color: #88ccff;">GPU:</strong><br>
      ${a}
    </div>
    <div>
      <strong style="color: #88ccff;">WebGL Limits:</strong><br>
      Max Texture Size: ${o}px<br>
      Max Cube Map Size: ${l}px<br>
      Max Anisotropy: ${d}x
    </div>
  `;n.innerHTML=p,t.domElement.querySelector(".children").appendChild(n),t.close()}class J2{constructor(e,t,n={}){this.id=e,this.tabs=[],this.activeTabId=null,this.window=nt.createWindow(e,t,{...n,onClose:()=>this.onClose()}),this.setupTabStructure(),this.setupDropZone(),nt.hideWindow(this.id)}setupTabStructure(){const e=this.window.content;e.innerHTML="",this.tabHeader=document.createElement("div"),this.tabHeader.className="tab-header",e.appendChild(this.tabHeader),this.tabList=document.createElement("div"),this.tabList.className="tab-list",this.tabHeader.appendChild(this.tabList),this.tabContentArea=document.createElement("div"),this.tabContentArea.className="tab-content-area",e.appendChild(this.tabContentArea)}addTab(e,t,n,s=""){if(this.tabs.find(c=>c.id===e))return;const r=["objects","constellations","orbits","magnetic"];n.classList.add("tab-content"),this.tabContentArea.appendChild(n);const a={id:e,title:t,contentElement:n,icon:s};let o=this.tabs.length;const l=r.indexOf(e);if(l!==-1)for(let c=0;c<this.tabs.length;c++){const d=this.tabs[c].id,u=r.indexOf(d);if(u===-1){o=c;break}else if(u>l){o=c;break}}else o=this.tabs.length;this.tabs.splice(o,0,a),this.renderTabs(),this.tabs.length===1&&this.selectTab(e)}removeTab(e){const t=this.tabs.findIndex(n=>n.id===e);if(t>-1){const n=this.tabs[t];if(n.contentElement.parentNode===this.tabContentArea&&(this.tabContentArea.removeChild(n.contentElement),n.contentElement.classList.remove("tab-content","active-content")),this.tabs.splice(t,1),this.renderTabs(),this.activeTabId===e)if(this.tabs.length>0){const s=Math.max(0,t-1);this.selectTab(this.tabs[s].id)}else this.activeTabId=null}}selectTab(e){this.tabs.find(n=>n.id===e)&&(this.activeTabId=e,this.renderTabs(),setTimeout(()=>{const n=this.tabs.findIndex(s=>s.id===e);n>-1&&this.tabList.children[n]&&this.tabList.children[n].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},0),this.tabs.forEach(n=>{n.id===e?n.contentElement.classList.add("active-content"):n.contentElement.classList.remove("active-content")}))}renderTabs(){this.tabList.innerHTML="",this.tabs.forEach(e=>{const t=document.createElement("div");t.className="tab-item",e.id===this.activeTabId&&t.classList.add("active");const n=document.createElement("span");n.className="tab-icon",n.textContent=e.icon||"";const s=document.createElement("span");s.className="tab-title",s.textContent=e.title,t.appendChild(n),t.appendChild(s),t.title=e.title,t.addEventListener("mousedown",r=>this.handleTabMouseDown(r,e)),this.tabList.appendChild(t)})}handleTabMouseDown(e,t){if(e.stopPropagation(),this.tabs.length<=1)return;const n=e.clientX,s=e.clientY;let r=!1;const a=c=>{const d=c.clientX-n,u=c.clientY-s;!r&&(Math.abs(d)>10||Math.abs(u)>10)&&(r=!0,this.detachTab(t,c.clientX,c.clientY),l())},o=()=>{r||this.selectTab(t.id),l()},l=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",o)}detachTab(e,t,n){this.removeTab(e.id);const s=`window_${e.id}`,r=nt.createWindow(s,e.title,{x:t-150,y:n-20,width:"300px",height:"auto"});r.element.classList.add("dockable-window"),r.element.dataset.tabId=e.id,r.element.dataset.tabTitle=e.title,r.element.dataset.tabIcon=e.icon||"",e.contentElement.classList.remove("tab-content","active-content"),r.content.appendChild(e.contentElement),nt.showWindow(s),nt.bringToFront(s);const a=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,view:window,clientX:t,clientY:n});r.element.dispatchEvent(a)}setupDropZone(){document.addEventListener("mouseup",e=>{const t=document.querySelectorAll(".dockable-window"),n=this.tabHeader.getBoundingClientRect();t.forEach(s=>{if(s.style.display==="none")return;const r=s.getBoundingClientRect();if(!(r.right<n.left||r.left>n.right||r.bottom<n.top||r.top>n.bottom)){const o=s.dataset.tabId,l=s.dataset.tabTitle,c=s.dataset.tabIcon,d=s.querySelector(".window-content").firstElementChild;o&&d&&(this.addTab(o,l,d,c),nt.hideWindow(s.id))}})})}onClose(){}toggle(){nt.toggleWindow(this.id)}}function Q2(i,e,t){const n=nt.createWindow("time-window","Time & Speed",{x:20,y:window.innerHeight-280,width:"250px",snap:{x:"left",y:"bottom"},onClose:()=>{}});nt.hideWindow("time-window");const s=n.content;s.classList.add("time-window-content");const r=document.createElement("div");r.className="time-display",r.textContent=e.date,s.appendChild(r),r.style.cursor="pointer",r.title="Click to change date",r.onclick=()=>{ev(t,e,p)};const a=document.createElement("div");a.className="speedometer-container",a.innerHTML=`
        <div class="gauge-arc"></div>
        <div class="gauge-needle"></div>
        <div class="digital-speed">0x</div>
        <div class="speedometer-interaction"></div>
    `,s.appendChild(a);const o=document.createElement("div");o.className="control-buttons",[{label:"<<",action:"rewind"},{label:"<",action:"reverse"},{label:"||",action:"pause"},{label:">",action:"play"},{label:">>",action:"forward"}].forEach(y=>{const _=document.createElement("div");_.className="control-btn",_.textContent=y.label,_.dataset.action=y.action,_.onclick=()=>h(y.action),o.appendChild(_)}),s.appendChild(o);const c=a.querySelector(".gauge-needle"),d=a.querySelector(".digital-speed"),u=a.querySelector(".speedometer-interaction");function f(y){if(y===0)return"PAUSED";const _=Math.abs(y);let x="";return _>=1e9?x=Math.round(_/1e9).toLocaleString()+" b":_>=1e6?x=Math.round(_/1e6).toLocaleString()+" m":_>=100?x=Math.round(_).toLocaleString()+"x":_>=10?x=_.toFixed(1)+"x":x=_.toFixed(2)+"x",x}function p(){const y=t.simulationSpeed;let _=0;if(y!==0){const x=Math.sign(y),R=Math.abs(y),A=Math.log10(R);_=Math.max(0,Math.min(10,A))/10*90*x}c.style.transform=`rotate(${_}deg)`,y===0?(d.textContent="PAUSED",d.style.color="#ffaa88"):(d.textContent=f(y),d.style.color="#aaccff"),o.querySelectorAll(".control-btn").forEach(x=>{x.classList.remove("active");const R=x.dataset.action;R==="pause"&&y===0&&x.classList.add("active"),R==="play"&&y===1&&x.classList.add("active"),R==="reverse"&&y===-1&&x.classList.add("active")}),r.textContent=e.date+" "+e.time}e.updateSpeedometer=p,p();function g(y){if(y=Math.max(-90,Math.min(90,y)),Math.abs(y)<1)t.simulationSpeed=0,e.speedFactor="0x";else{const _=Math.sign(y),R=Math.abs(y)/90*10,A=_*10**R;t.simulationSpeed=A,e.speedFactor=f(A)}p()}function v(y){const _=u.getBoundingClientRect(),x=_.left+_.width/2,R=_.bottom,A=y.clientX-x,T=R-y.clientY,S=90-Math.atan2(T,A)*180/Math.PI;g(S)}let m=!1;u.addEventListener("mousedown",y=>{m=!0,v(y)}),window.addEventListener("mousemove",y=>{m&&v(y)}),window.addEventListener("mouseup",()=>{m=!1});function h(y){const _=t.simulationSpeed,x=_===0?0:Math.log10(Math.abs(_));switch(y){case"pause":t.simulationSpeed=0;break;case"play":t.simulationSpeed=1;break;case"reverse":t.simulationSpeed=-1;break;case"forward":if(_<0){const R=Math.floor(x)-1;R<0?t.simulationSpeed=1:t.simulationSpeed=-(10**R)}else if(_===0)t.simulationSpeed=1;else{const R=Math.min(10,Math.floor(x)+1);t.simulationSpeed=10**R}break;case"rewind":if(_>0){const R=Math.floor(x)-1;R<0?t.simulationSpeed=-1:t.simulationSpeed=10**R}else if(_===0)t.simulationSpeed=-1;else{const R=Math.min(10,Math.floor(x)+1);t.simulationSpeed=-(10**R)}break}e.speedFactor=f(t.simulationSpeed),p()}return{dateCtrl:{updateDisplay:()=>{},domElement:{querySelector:()=>null}},timeCtrl:{updateDisplay:()=>{}},stardateCtrl:{updateDisplay:()=>{}},speedDisplay:{update:p}}}function ev(i,e,t){let n=document.querySelector(".date-modal-overlay");n||(tv(i,e,t),n=document.querySelector(".date-modal-overlay"));const s=n.querySelector('input[type="datetime-local"]');if(s){const r=new Date(i.date),a=r.getTimezoneOffset()*6e4,o=new Date(r-a).toISOString().slice(0,16);s.value=o}n.classList.add("active")}function tv(i,e,t){const n=document.createElement("div");n.className="date-modal-overlay";const s=document.createElement("div");s.className="date-modal";const r=document.createElement("h3");r.textContent="Set Simulation Time";const a=document.createElement("input");a.type="datetime-local";const o=document.createElement("div");o.className="date-modal-buttons";const l=document.createElement("button");l.className="date-modal-btn",l.textContent="Cancel",l.onclick=()=>{n.classList.remove("active")};const c=document.createElement("button");c.className="date-modal-btn confirm",c.textContent="Set Time",c.onclick=()=>{if(a.value){const d=new Date(a.value);i.date=d,i.simulationSpeed=0,e.speedFactor="PAUSED",t(),n.classList.remove("active")}},o.appendChild(l),o.appendChild(c),s.appendChild(r),s.appendChild(a),s.appendChild(o),n.appendChild(s),document.body.appendChild(n),n.addEventListener("click",d=>{d.target===n&&n.classList.remove("active")})}function nv(i,e,t,n,s,r,a,o,l,c,d,u,f,p){const g=new Mo({title:"Menu"});g.domElement.classList.add("main-gui"),g.close();const v={speedExponent:0,date:"",time:"",stardate:"",speedFactor:"0x",planetScaleDisplay:(1*gn).toFixed(0)+"x",sunScaleDisplay:(1*Ri).toFixed(1)+"x",rotate:"Left Click + Drag",pan:"Right Click + Drag",zoom:"Scroll",focusEnter:"Double Click Object",focusExit:"Escape Key",fullScreen:"F11",scalePreset:"Artistic",timeWindow:!1,objectInfo:!1,musicWindow:!1,dock:!0,visualWindow:!1};jn.addItem("objects","👆","Object Info",()=>{nt.toggleWindow("object-info")}),jn.addItem("time","⏱️","Time & Speed",()=>{nt.toggleWindow("time-window")}),jn.addItem("music","🎵","Music",()=>{nt.toggleWindow("music-window")}),V2(g,i,e,a,l,c);const{dateCtrl:m,timeCtrl:h,stardateCtrl:y,speedDisplay:_}=Q2(g,v,D),x=new J2("visual-tools","Visual Tools",{width:"320px",height:"auto",snap:{x:"right",y:"bottom"}}),R=(T,H,S,C)=>{let z="",Y=C;if(typeof S=="function"?(Y=S,z=""):z=S,typeof Y!="function")return;const J=document.createElement("div");J.style.width="100%",Y(J),x.addTab(T,H,J,z)};R("objects","Bodies","🪐",T=>X1(T,i,e)),R("asterisms","Asterisms","✨",T=>$1(T,s,r,d)),R("orbits","Orbits","💫",T=>Y1(T,t,i,n)),R("magnetic","Magnetism","🧲",T=>q1(T,f,i,p)),R("guides","Guides","📐",T=>j1(T,e,i,u)),jn.addItem("visuals","👁️","Visual Tools",()=>{x.toggle()}),$2(g,v,i,e,p),W1(g,a,o,p,i,e,t,n),W2(g,D),k2(g,l,c,i),X2(g,v),Y2();const A=g.addFolder("Windows");return A.add(v,"timeWindow").name("Time & Speed").listen().onChange(T=>{T?nt.showWindow("time-window"):nt.hideWindow("time-window")}),A.add(v,"objectInfo").name("Object Info").listen().onChange(T=>{T?nt.showWindow("object-info"):nt.hideWindow("object-info")}),A.add(v,"musicWindow").name("Music").listen().onChange(T=>{T?nt.showWindow("music-window"):nt.hideWindow("music-window")}),A.add(v,"dock").name("Dock").listen().onChange(T=>{jn.dock.style.display=T?"flex":"none"}),A.close(),Z2(g,o),O2(g),{uiState:v,dateCtrl:m,timeCtrl:h,stardateCtrl:y,speedDisplay:_}}function iv(i,e){const t=D.date.getFullYear(),n=String(D.date.getMonth()+1).padStart(2,"0"),s=String(D.date.getDate()).padStart(2,"0"),r=`${t}-${n}-${s}`;i.date=r,i.time=D.date.toLocaleTimeString();const a=new Date(D.date.getFullYear(),0,0),o=D.date-a,l=1e3*60*60*24,c=Math.floor(o/l);i.stardate=(D.date.getFullYear()+c/365).toFixed(2),D.simulationSpeed===0?i.speedFactor="0x":i.speedFactor=Math.round(D.simulationSpeed).toLocaleString()+"x";const d=e.dateCtrl.domElement.querySelector("input");d&&d.value!==r&&(d.value=r),e.dateCtrl.updateDisplay(),e.timeCtrl.updateDisplay(),e.stardateCtrl.updateDisplay(),e.speedDisplay&&e.speedDisplay.update();const u=nt.getWindow("time-window");u&&(i.timeWindow=u.element.style.display!=="none");const f=nt.getWindow("object-info");f&&(i.objectInfo=f.element.style.display!=="none");const p=nt.getWindow("music-window");p&&(i.musicWindow=p.element.style.display!=="none",p.update&&p.update());const g=nt.getWindow("visual-tools");g&&(i.visualWindow=g.element.style.display!=="none"),jn.dock&&(i.dock=jn.dock.style.display!=="none")}const Uc={Earth:[{name:"Moon",body:"Moon",category:"largest",radius:.27,diameter:3474.8,color:8947848,type:"real",period:27.3,texture:"/assets/textures/moon.jpg",tidallyLocked:!0,axialTilt:6.7,mass:7342e19,gravity:1.62,meanTemp:220,discoveryYear:"Prehistoric",discoveredBy:"Unknown"}],Jupiter:[{name:"Io",category:"largest",radius:.28,diameter:3643.2,color:16776960,type:"jovian",moonIndex:0,period:1.77,texture:"/assets/textures/io.png",tidallyLocked:!0,axialTilt:0,mass:8932e19,gravity:1.796,meanTemp:110,discoveryYear:1610,discoveredBy:"Galileo Galilei"},{name:"Europa",category:"largest",radius:.24,diameter:3121.6,color:16777215,type:"jovian",moonIndex:1,period:3.55,texture:"/assets/textures/europa.png",tidallyLocked:!0,axialTilt:0,mass:48e21,gravity:1.314,meanTemp:102,discoveryYear:1610,discoveredBy:"Galileo Galilei"},{name:"Ganymede",category:"largest",radius:.41,diameter:5268.2,color:14540253,type:"jovian",moonIndex:2,period:7.15,texture:"/assets/textures/ganymede.png",tidallyLocked:!0,axialTilt:0,mass:1482e20,gravity:1.428,meanTemp:110,discoveryYear:1610,discoveredBy:"Galileo Galilei",magneticField:{strength:2,tilt:176,color:65535}},{name:"Callisto",category:"largest",radius:.37,diameter:4820.6,color:11184810,type:"jovian",moonIndex:3,period:16.7,texture:"/assets/textures/callisto.png",tidallyLocked:!0,axialTilt:0,mass:1076e20,gravity:1.235,meanTemp:134,discoveryYear:1610,discoveredBy:"Galileo Galilei"}],Saturn:[{name:"Titan",category:"largest",radius:.4,diameter:5150,distance:.00816,color:16755200,type:"simple",period:15.95,texture:"/assets/textures/titan.png",tidallyLocked:!0,axialTilt:0,mass:1345e20,gravity:1.352,meanTemp:94,discoveryYear:1655,discoveredBy:"Christiaan Huygens"}],Neptune:[{name:"Triton",category:"largest",radius:.21,diameter:2706.8,color:16764108,type:"simple",distance:.00237,period:5.88,texture:"/assets/textures/triton.jpg",tidallyLocked:!0,axialTilt:0,mass:214e20,gravity:.779,meanTemp:38,discoveryYear:1846,discoveredBy:"William Lassell"}]},Nc={Mars:[{name:"Phobos",category:"major",radius:.0018,diameter:22.2,color:8947848,type:"simple",distance:627e-7,period:.319,texture:"/assets/textures/phobos.jpg",tidallyLocked:!0,axialTilt:0,mass:10659e12,gravity:.0057,meanTemp:233,discoveryYear:1877,discoveredBy:"Asaph Hall"},{name:"Deimos",category:"major",radius:98e-5,diameter:12.4,color:10066329,type:"simple",distance:157e-6,period:1.263,texture:"/assets/textures/deimos.jpg",tidallyLocked:!0,axialTilt:0,mass:14762e11,gravity:.003,meanTemp:233,discoveryYear:1877,discoveredBy:"Asaph Hall"}],Saturn:[{name:"Mimas",category:"major",radius:.031,diameter:396.4,color:13421772,type:"simple",distance:.001239,period:.942,texture:"/assets/textures/mimas.jpg",tidallyLocked:!0,axialTilt:0,mass:375e17,gravity:.064,meanTemp:64,discoveryYear:1789,discoveredBy:"William Herschel"},{name:"Enceladus",category:"major",radius:.0397,diameter:504.2,color:16777215,type:"simple",distance:.00159,period:1.37,texture:"/assets/textures/enceladus.jpg",tidallyLocked:!0,axialTilt:0,mass:108e18,gravity:.113,meanTemp:75,discoveryYear:1789,discoveredBy:"William Herschel"},{name:"Tethys",category:"major",radius:.0835,diameter:1062.2,color:14540253,type:"simple",distance:.00197,period:1.888,texture:"/assets/textures/tethys.jpg",tidallyLocked:!0,axialTilt:0,mass:618e18,gravity:.146,meanTemp:86,discoveryYear:1684,discoveredBy:"Giovanni Cassini"},{name:"Dione",category:"major",radius:.088,diameter:1122.8,color:13421772,type:"simple",distance:.00252,period:2.737,texture:"/assets/textures/dione.jpg",tidallyLocked:!0,axialTilt:0,mass:11e20,gravity:.232,meanTemp:87,discoveryYear:1684,discoveredBy:"Giovanni Cassini"},{name:"Rhea",category:"major",radius:.12,diameter:1527.6,color:12303291,type:"simple",distance:.00352,period:4.518,texture:"/assets/textures/rhea.jpg",tidallyLocked:!0,axialTilt:0,mass:231e19,gravity:.264,meanTemp:76,discoveryYear:1672,discoveredBy:"Giovanni Cassini"},{name:"Iapetus",category:"major",radius:.115,diameter:1468.6,color:8943462,type:"simple",distance:.0238,period:79.33,texture:"/assets/textures/iapetus.jpg",tidallyLocked:!0,axialTilt:0,mass:181e19,gravity:.223,meanTemp:110,discoveryYear:1671,discoveredBy:"Giovanni Cassini"}],Uranus:[{name:"Miranda",category:"major",radius:.037,diameter:471.6,color:11184810,type:"simple",distance:866e-6,period:1.413,tidallyLocked:!0,axialTilt:0,mass:659e17,gravity:.079,meanTemp:60,discoveryYear:1948,discoveredBy:"Gerard Kuiper"},{name:"Ariel",category:"major",radius:.091,diameter:1157.8,color:13421772,type:"simple",distance:.00128,period:2.52,texture:"/assets/textures/ariel.jpg",tidallyLocked:!0,axialTilt:0,mass:135e19,gravity:.269,meanTemp:60,discoveryYear:1851,discoveredBy:"William Lassell"},{name:"Umbriel",category:"major",radius:.092,diameter:1169.4,color:7829367,type:"simple",distance:.00178,period:4.144,texture:"/assets/textures/umbriel.jpg",tidallyLocked:!0,axialTilt:0,mass:117e19,gravity:.234,meanTemp:75,discoveryYear:1851,discoveredBy:"William Lassell"},{name:"Titania",category:"major",radius:.123,diameter:1577.8,color:14535867,type:"simple",distance:.00291,period:8.706,texture:"/assets/textures/titania.jpg",tidallyLocked:!0,axialTilt:0,mass:353e19,gravity:.379,meanTemp:70,discoveryYear:1787,discoveredBy:"William Herschel"},{name:"Oberon",category:"major",radius:.119,diameter:1522.8,color:13417386,type:"simple",distance:.0039,period:13.463,texture:"/assets/textures/oberon.jpg",tidallyLocked:!0,axialTilt:0,mass:301e19,gravity:.346,meanTemp:75,discoveryYear:1787,discoveredBy:"William Herschel"}],Neptune:[{name:"Proteus",category:"major",radius:.033,diameter:420,color:8947848,type:"simple",distance:787e-6,period:1.122,texture:"/assets/textures/proteus.jpg",tidallyLocked:!0,axialTilt:0,mass:44e18,gravity:.07,meanTemp:51,discoveryYear:1989,discoveredBy:"Voyager 2"}]},Fc={Jupiter:[{name:"Metis",category:"small",radius:.0034,diameter:43,color:11176038,type:"simple",distance:861e-6,period:.295,tidallyLocked:!0,axialTilt:0,mass:36e15,gravity:.005,discoveryYear:1979,discoveredBy:"Voyager 1"},{name:"Adrastea",category:"small",radius:.00129,diameter:16.4,color:11176038,type:"simple",distance:861e-6,period:.298,tidallyLocked:!0,axialTilt:0,mass:2e15,gravity:.002,discoveryYear:1979,discoveredBy:"Voyager 2"},{name:"Amalthea",category:"small",radius:.0166,diameter:167,color:14518374,type:"simple",distance:.00121,period:.498,texture:"/assets/textures/amalthea.jpg",tidallyLocked:!0,axialTilt:0,mass:208e16,gravity:.02,discoveryYear:1892,discoveredBy:"Edward Barnard"},{name:"Thebe",category:"small",radius:.0077,diameter:98.6,color:11171669,type:"simple",distance:.00148,period:.675,tidallyLocked:!0,axialTilt:0,mass:43e16,gravity:.013,discoveryYear:1979,discoveredBy:"Voyager 1"}],Saturn:[{name:"Pan",category:"small",radius:.00222,diameter:28.2,color:13421772,type:"simple",distance:894e-6,period:.575,tidallyLocked:!0,axialTilt:0,mass:495e13,gravity:.006,discoveryYear:1990,discoveredBy:"Mark Showalter"},{name:"Epimetheus",category:"small",radius:.00907,diameter:115.2,color:12303291,type:"simple",distance:.001013,period:.695,tidallyLocked:!0,axialTilt:0,mass:527e15,gravity:.018,discoveryYear:1980,discoveredBy:"John Fountain, Stephen Larson"},{name:"Janus",category:"small",radius:.014,diameter:179.8,color:12303291,type:"simple",distance:.001013,period:.695,tidallyLocked:!0,axialTilt:0,mass:19e17,gravity:.027,discoveryYear:1980,discoveredBy:"Various"},{name:"Hyperion",category:"small",radius:.0212,diameter:270,color:13413e3,type:"simple",distance:.00994,period:21.277,tidallyLocked:!1,axialTilt:0,mass:558e16,gravity:.04,discoveryYear:1848,discoveredBy:"William Bond"},{name:"Phoebe",category:"small",radius:.0168,diameter:213,color:6706500,type:"simple",distance:.0865,period:550.48,texture:"/assets/textures/phoebe.jpg",tidallyLocked:!1,axialTilt:0,mass:829e16,gravity:.039,discoveryYear:1899,discoveredBy:"William Pickering"}],Uranus:[{name:"Cordelia",category:"small",radius:.0032,diameter:40.2,color:8947848,type:"simple",distance:334e-6,period:.335,tidallyLocked:!0,axialTilt:0,mass:45e15,gravity:.008,discoveryYear:1986,discoveredBy:"Voyager 2"},{name:"Ophelia",category:"small",radius:.0034,diameter:42.8,color:8947848,type:"simple",distance:357e-6,period:.376,tidallyLocked:!0,axialTilt:0,mass:53e15,gravity:.009,discoveryYear:1986,discoveredBy:"Voyager 2"},{name:"Puck",category:"small",radius:.0127,diameter:162,color:7829367,type:"simple",distance:574e-6,period:.762,texture:"/assets/textures/puck.jpg",tidallyLocked:!0,axialTilt:0,mass:29e17,gravity:.029,discoveryYear:1985,discoveredBy:"Voyager 2"}],Neptune:[{name:"Naiad",category:"small",radius:.0052,diameter:66,color:8947848,type:"simple",distance:323e-6,period:.294,tidallyLocked:!0,axialTilt:0,mass:19e16,gravity:.011,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Thalassa",category:"small",radius:.0065,diameter:82,color:8947848,type:"simple",distance:336e-6,period:.311,tidallyLocked:!0,axialTilt:0,mass:37e16,gravity:.013,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Despina",category:"small",radius:.0118,diameter:150,color:8947848,type:"simple",distance:351e-6,period:.335,tidallyLocked:!0,axialTilt:0,mass:21e17,gravity:.023,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Galatea",category:"small",radius:.0138,diameter:176,color:8947848,type:"simple",distance:413e-6,period:.429,tidallyLocked:!0,axialTilt:0,mass:212e16,gravity:.025,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Larissa",category:"small",radius:.0153,diameter:194,color:7829367,type:"simple",distance:491e-6,period:.555,texture:"/assets/textures/larissa.jpg",tidallyLocked:!0,axialTilt:0,mass:42e17,gravity:.03,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Nereid",category:"small",radius:.0268,diameter:340,color:11184810,type:"simple",distance:.0367,period:360.14,tidallyLocked:!1,axialTilt:0,mass:31e18,gravity:.059,discoveryYear:1949,discoveredBy:"Gerard Kuiper"}]};function Ci(i){const e=[];return Uc[i]&&e.push(...Uc[i]),Nc[i]&&e.push(...Nc[i]),Fc[i]&&e.push(...Fc[i]),e}const sv=[{name:"Mercury",category:"Terrestrial",body:"Mercury",radius:.38,color:11184810,period:88,texture:"/assets/textures/mercury.jpg",rotationPeriod:1408,axialTilt:.01,details:{mass:33e22,density:"5427 kg/m³",gravity:"0.38 g",albedo:"0.12",temp:"-173°C to 427°C",pressure:"~0 bar",solarDay:"176 days",siderealDay:"58.6 days",eccentricity:"0.205",inclination:"7.0°"},magneticField:{strength:1.5,tilt:0,color:65535}},{name:"Venus",category:"Terrestrial",body:"Venus",radius:.95,color:16763904,period:225,texture:"/assets/textures/venus.jpg",rotationPeriod:5832,axialTilt:177.4,details:{mass:487e22,density:"5243 kg/m³",gravity:"0.90 g",albedo:"0.75",temp:"462°C",pressure:"92 bar",solarDay:"116.75 days",siderealDay:"243 days",eccentricity:"0.007",inclination:"3.4°"}},{name:"Earth",category:"Terrestrial",body:"Earth",radius:1,color:2241535,period:365.25,texture:"/assets/textures/earth.jpg",cloudTexture:"/assets/textures/earth_clouds.png",rotationPeriod:24,axialTilt:23.4,details:{mass:597e22,density:"5514 kg/m³",gravity:"1.0 g",albedo:"0.30",temp:"-88°C to 58°C",pressure:"1.013 bar",solarDay:"24 h",siderealDay:"23h 56m",eccentricity:"0.017",inclination:"0.0°"},moons:Ci("Earth"),magneticField:{strength:10,tilt:11.5,color:65535}},{name:"Mars",category:"Terrestrial",body:"Mars",radius:.53,color:16729088,period:687,texture:"/assets/textures/mars.jpg",rotationPeriod:24.6,axialTilt:25.2,details:{mass:642e21,density:"3933 kg/m³",gravity:"0.38 g",albedo:"0.16",temp:"-153°C to 20°C",pressure:"0.006 bar",solarDay:"24h 40m",siderealDay:"24h 37m",eccentricity:"0.094",inclination:"1.85°"},moons:Ci("Mars")},{name:"Jupiter",category:"Gas Giant",body:"Jupiter",radius:11,color:13808780,period:4333,texture:"/assets/textures/jupiter.jpg",rotationPeriod:9.9,axialTilt:3.1,details:{mass:1898e24,density:"1326 kg/m³",gravity:"2.53 g",albedo:"0.34",temp:"-108°C",pressure:"n/a",solarDay:"9h 56m",siderealDay:"9h 55m",eccentricity:"0.049",inclination:"1.3°"},moons:Ci("Jupiter"),magneticField:{strength:65,tilt:9.6,color:65535}},{name:"Saturn",category:"Gas Giant",body:"Saturn",radius:9,color:15645576,period:10759,texture:"/assets/textures/saturn.jpg",rotationPeriod:10.7,axialTilt:26.7,ring:{inner:11,outer:18,color:11176038,texture:"/assets/textures/saturn_ring.png"},details:{mass:568e24,density:"687 kg/m³",gravity:"1.07 g",albedo:"0.34",temp:"-139°C",pressure:"n/a",solarDay:"10h 33m",siderealDay:"10h 33m",eccentricity:"0.057",inclination:"2.49°"},moons:Ci("Saturn"),magneticField:{strength:20,tilt:0,color:65535}},{name:"Uranus",category:"Ice Giant",body:"Uranus",radius:4,color:5230823,period:30687,texture:"/assets/textures/uranus.jpg",rotationPeriod:17.2,axialTilt:97.8,details:{mass:868e23,density:"1271 kg/m³",gravity:"0.89 g",albedo:"0.30",temp:"-197°C",pressure:"n/a",solarDay:"17h 14m",siderealDay:"17h 14m",eccentricity:"0.046",inclination:"0.77°"},moons:Ci("Uranus"),magneticField:{strength:18,tilt:59,color:65535}},{name:"Neptune",category:"Ice Giant",body:"Neptune",radius:3.9,color:4944093,period:60190,texture:"/assets/textures/neptune.jpg",rotationPeriod:16.1,axialTilt:28.3,details:{mass:102e24,density:"1638 kg/m³",gravity:"1.14 g",albedo:"0.29",temp:"-201°C",pressure:"n/a (Gas Giant)",solarDay:"16h 6m",siderealDay:"16h 6m",eccentricity:"0.011",inclination:"1.77°"},moons:Ci("Neptune"),magneticField:{strength:24,tilt:47,color:65535}}],rv=[{name:"Ceres",type:"dwarf",radius:.07,color:11184810,period:1682,texture:"/assets/textures/ceres.jpg",rotationPeriod:9.1,axialTilt:4,elements:{a:2.767,e:.079,i:10.59,Omega:80.33,w:73.51,M:77.37},details:{mass:9e20,density:"2162 kg/m³",gravity:"0.03 g",albedo:"0.09",temp:"-105°C to -38°C",pressure:"0",solarDay:"9h 4m",siderealDay:"9h 4m",eccentricity:"0.079",inclination:"10.59°"}},{name:"Pluto",type:"dwarf",body:"Pluto",radius:.18,color:14527112,period:90560,texture:"/assets/textures/pluto.png",rotationPeriod:153.3,axialTilt:122.5,details:{mass:13e21,density:"1860 kg/m³",gravity:"0.06 g",albedo:"0.5",temp:"-240°C to -218°C",pressure:"0.00001 bar",solarDay:"6.39 days",siderealDay:"6.39 days",eccentricity:"0.248",inclination:"17.16°"}},{name:"Haumea",type:"dwarf",radius:.13,color:15658734,period:103468,texture:"/assets/textures/haumea.png",rotationPeriod:3.9,axialTilt:0,elements:{a:43.18,e:.195,i:28.21,Omega:122.16,w:238.78,M:219.87},details:{mass:4e21,density:"1885 kg/m³",gravity:"0.04 g",albedo:"0.7",temp:"-241°C",pressure:"0",solarDay:"3.9 h",siderealDay:"3.9 h",eccentricity:"0.195",inclination:"28.21°"}},{name:"Makemake",type:"dwarf",radius:.11,color:14531481,period:112897,texture:"/assets/textures/makemake.jpg",rotationPeriod:22.5,axialTilt:0,elements:{a:45.43,e:.161,i:28.98,Omega:79.62,w:294.84,M:200},details:{mass:3e21,density:"1700 kg/m³",gravity:"0.05 g",albedo:"0.7",temp:"-243°C",pressure:"0",solarDay:"22.5 h",siderealDay:"22.5 h",eccentricity:"0.161",inclination:"28.98°"}},{name:"Eris",type:"dwarf",radius:.18,color:16777215,period:203830,texture:"/assets/textures/eris.jpg",rotationPeriod:25.9,axialTilt:0,elements:{a:67.86,e:.436,i:44.04,Omega:35.95,w:151.64,M:200},details:{mass:16e21,density:"2520 kg/m³",gravity:"0.08 g",albedo:"0.96",temp:"-243°C to -217°C",pressure:"0",solarDay:"25.9 h",siderealDay:"25.9 h",eccentricity:"0.436",inclination:"44.04°"}}];function av(i){const e=new Uint8Array([255,200,0,255]),t=new Cg(e,1,1,Kt);t.needsUpdate=!0;const n=new Ms({color:16777215,map:t,side:yn});return n.onBeforeCompile=s=>{s.uniforms.uTime=i.uTime,s.fragmentShader=s.fragmentShader.replace("#include <common>",`
      #include <common>
      uniform float uTime;

      // Simplex 2D noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      `),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        // Tweak parameters for more realistic "granulation" / boiling effect
        float timeScale = uTime * 0.15; // Slower animation
        float noiseScale = 0.005; // Subtle distortion to avoid "wobble"
        
        // Check if vMapUv is available, otherwise try vUv
        vec2 uvToUse = vMapUv; 
        
        // Higher frequency for smaller details (granules)
        float n1 = snoise(uvToUse * 25.0 + timeScale);
        float n2 = snoise(uvToUse * 30.0 - timeScale * 0.5);
        
        vec2 distortedUv = uvToUse + vec2(n1, n2) * noiseScale;
        
        vec4 sampledDiffuseColor = texture2D( map, distortedUv );
        diffuseColor *= sampledDiffuseColor;
      #endif
      `)},n}function Oc(i){return!i||!i.period?null:(i.period/365.25)**(2/3)}function ov(i){const e=new On(i.radius,32,32),t=new Ni({color:i.color});i.texture&&Wi.loadTexture(i.texture,t,i.name,!0,i.category);const n=new Lt(e,t);if(n.castShadow=!0,n.receiveShadow=!0,n.userData.isMoon=!0,n.scale.setScalar(D.planetScale),i.axialTilt!==void 0&&!i.tidallyLocked){const s=i.axialTilt*Math.PI/180;n.rotation.z=s}return n}function lv(i,e){const t=e.radius*2.5,n=new it().setFromPoints([new E(0,-t,0),new E(0,t,0)]),s=new Xt({color:16777215,transparent:!0,opacity:.5}),r=new Mn(n,s);r.visible=D.showAxes,r.raycast=()=>{},i.add(r),e.axisLine=r}function So(i,e){if(!i.orbitLine)return;const t=[],n=90,s=e,r=i.period||27.3;for(let a=0;a<n;a++){const o=new Date(s.getTime()+a/n*r*24*60*60*1e3);let l,c,d;if(i.type==="jovian"){const u=Ka(o),f=[u.io,u.europa,u.ganymede,u.callisto][i.moonIndex];l=f.x,c=f.y,d=f.z}else if(i.type==="real"){const u=vs(Ce[i.body],o,!0);l=u.x,c=u.y,d=u.z}else return;t.push(new E(l*Ye,d*Ye,-c*Ye))}i.orbitLine.geometry.setFromPoints(t),i.lastOrbitUpdate=e.getTime()}function cv(i,e){const t=new it,n=new Xt({color:6710886,transparent:!0,opacity:.3}),s=new Tr(t,n);e.add(s),i.orbitLine=s,So(i,new Date)}function dv(i,e){const t=[],n=i.distance*Ye;for(let o=0;o<64;o++){const l=o/64*Math.PI*2;t.push(new E(Math.cos(l)*n,0,Math.sin(l)*n))}i._orbitBasePoints=t;const s=new it().setFromPoints(t),r=new Xt({color:6710886,transparent:!0,opacity:.3}),a=new Tr(s,r);e.add(a),i.orbitLine=a}function uv(i,e){const t=new it,n=new Xt({color:6710886,transparent:!0,opacity:.3}),s=new Tr(t,n);e.add(s),i.orbitLine=s,So(i,new Date)}function hv(i,e,t){const n=[];return i.moons&&i.moons.forEach(s=>{const r=ov(s);lv(r,s),e.add(r),i.name==="Earth"?r.layers.set(1):r.layers.set(0),s.type==="jovian"?cv(s,t):s.type==="simple"?dv(s,t):uv(s,t);let a=!1;(s.category==="largest"&&D.showLargestMoons||s.category==="major"&&D.showMajorMoons||s.category==="small"&&D.showSmallMoons)&&(a=!0),s.category||(a=!0),r.visible=a,s.orbitLine&&(s.orbitLine.visible=a),n.push({mesh:r,data:s})}),n}function fv(i,e){if(!i.moons)return;const t=D.planetScale*gn;let n=null,s=null;if(D.capMoonOrbits){n=i.data.radius*D.planetScale*1.1;let c=1/0,d=1/0;const u=Oc(i.data);if(u){e.forEach(p=>{if(p===i)return;const g=Oc(p.data);if(!g)return;const v=g-u;if(v>0)v<c&&(c=v);else{const m=Math.abs(v);m<d&&(d=m)}});const f=Math.min(c,d);f!==1/0&&(s=f/2*Ye)}n&&s&&n>s&&(s=n)}const r=[];i.moons.forEach(l=>{let c;if(l.data.type==="jovian"){const d=Ka(D.date),u=[d.io,d.europa,d.ganymede,d.callisto][l.data.moonIndex];c=Math.sqrt(u.x**2+u.y**2+u.z**2)*Ye*t}else if(l.data.type==="real"){const d=vs(Ce[l.data.body],D.date,!0);c=Math.sqrt(d.x**2+d.y**2+d.z**2)*Ye*t}else c=l.data.distance*Ye*t;r.push(c)});let a=1,o=0;if(D.capMoonOrbits&&n&&s&&r.length>0){const l=Math.min(...r),c=Math.max(...r);if(c>s||l<n){const d=c-l,u=s-n;if(d>1e-4)a=u/d,o=n-l*a;else{const f=(n+s)/2;a=0,o=f}}}i.moons.forEach(l=>{let c,d,u;if(l.data.type==="jovian"){const f=Ka(D.date),p=[f.io,f.europa,f.ganymede,f.callisto][l.data.moonIndex],g=Math.sqrt(p.x**2+p.y**2+p.z**2),h=(g*Ye*t*a+o)/(g*Ye);l.data.orbitLine&&l.data.orbitLine.scale.setScalar(h),c=p.x*Ye*h,u=-p.y*Ye*h,d=p.z*Ye*h}else if(l.data.type==="real"){const f=vs(Ce[l.data.body],D.date,!0),p=Math.sqrt(f.x**2+f.y**2+f.z**2),m=(p*Ye*t*a+o)/(p*Ye);l.data.orbitLine&&l.data.orbitLine.scale.setScalar(m),c=f.x*Ye*m,u=-f.y*Ye*m,d=f.z*Ye*m}else{const f=l.data.distance,g=f*Ye*t*a+o,v=g/(f*Ye),m=new Date(2e3,0,1).getTime(),_=(D.date.getTime()-m)/(24*60*60*1e3)*2*Math.PI/l.data.period;l.data.orbitLine&&l.data.orbitLine.scale.setScalar(v);const x=g;c=Math.cos(_)*x,u=Math.sin(_)*x,d=0}if(l.mesh.position.x=i.mesh.position.x+c,l.mesh.position.z=i.mesh.position.z+u,l.mesh.position.y=i.mesh.position.y+d,l.data.tidallyLocked&&(l.mesh.rotation.y=Math.atan2(c,u)+Math.PI),l.data.type!=="simple"&&l.data.orbitLine){const f=D.date.getTime(),p=l.data.lastOrbitUpdate||0,g=Math.abs(f-p),v=24*60*60*1e3;g>v&&So(l.data,D.date)}})}function pv(i,e){if(!i.body&&!i.elements)return null;const t=[],n=360,s=new Date,r=i.period||365;for(let g=0;g<n;g++){const v=new Date(s.getTime()+g/n*r*24*60*60*1e3);let m;i.body?m=Wt(Ce[i.body],v):i.elements&&(m=Lr(i.elements,v)),t.push(new E(m.x*Ye,m.z*Ye,-m.y*Ye))}const a=new it().setFromPoints(t),o=D.showPlanetColors,l=D.showDwarfPlanetColors,d=i.type==="dwarf"?l:o,u=d&&i.color||4473924,f=new Xt({color:u,transparent:!0,opacity:d?.8:.5}),p=new Tr(a,f);return p.name=i.name+"_Orbit",e.add(p),p}function mv(i,e){if(!i.ring)return;const t=new Ar(i.ring.inner,i.ring.outer,128),n=t.attributes.position,s=new E;for(let o=0;o<n.count;o++){s.fromBufferAttribute(n,o);const c=(s.length()-i.ring.inner)/(i.ring.outer-i.ring.inner);t.attributes.uv.setXY(o,c,0)}let r;if(i.name==="Saturn"){const o=gv();r=new Ni({map:o,side:Gt,transparent:!0,opacity:.9,roughness:.8,metalness:.2})}else i.ring.texture?(r=new Ni({side:Gt,transparent:!0,opacity:1}),Wi.loadTexture(i.ring.texture,r,i.name)):r=new Ni({color:i.ring.color,side:Gt,transparent:!0,opacity:.8});const a=new Lt(t,r);a.rotation.x=Math.PI/2,e.add(a)}function gv(){const i=document.createElement("canvas");i.width=1024,i.height=1;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,1024,0);t.addColorStop(0,"rgba(30, 30, 30, 0.0)"),t.addColorStop(.1,"rgba(30, 30, 30, 0.1)"),t.addColorStop(.15,"rgba(40, 40, 40, 0.2)"),t.addColorStop(.25,"rgba(180, 170, 150, 0.8)"),t.addColorStop(.35,"rgba(200, 190, 170, 0.9)"),t.addColorStop(.4,"rgba(210, 200, 180, 1.0)"),t.addColorStop(.45,"rgba(190, 180, 160, 0.9)"),t.addColorStop(.5,"rgba(170, 160, 140, 0.8)"),t.addColorStop(.55,"rgba(20, 20, 20, 0.1)"),t.addColorStop(.58,"rgba(20, 20, 20, 0.1)"),t.addColorStop(.6,"rgba(160, 150, 130, 0.7)"),t.addColorStop(.7,"rgba(170, 160, 140, 0.8)"),t.addColorStop(.8,"rgba(160, 150, 130, 0.7)"),t.addColorStop(.85,"rgba(20, 20, 20, 0.2)"),t.addColorStop(.86,"rgba(20, 20, 20, 0.2)"),t.addColorStop(.88,"rgba(150, 140, 120, 0.6)"),t.addColorStop(1,"rgba(140, 130, 110, 0.0)"),e.fillStyle=t,e.fillRect(0,0,1024,1);const n=new T0(i);return n.wrapS=Ft,n.wrapT=Ft,n}function vv(i){const e=new On(5,64,64),t={uTime:{value:0}},n=av(t);Wi.loadTexture("/assets/textures/sun.jpg",n,"Sun");const s=new Lt(e,n);i.add(s),s.userData.customUniforms=t;const r=5*2.5,a=new it().setFromPoints([new E(0,-r,0),new E(0,r,0)]),o=new Xt({color:16777215,transparent:!0,opacity:.5}),l=new Mn(a,o);return l.visible=D.showAxes,l.raycast=()=>{},s.add(l),s.axisLine=l,s}function _v(i,e){const t=[],n=[],s=vv(i);return[...sv,...rv].forEach(a=>{const o=new Et;i.add(o);const l=new On(a.radius,32,32),c=new Ni({color:a.color});a.texture&&Wi.loadTexture(a.texture,c,a.name);const d=new Lt(l,c);if(d.castShadow=!0,d.receiveShadow=!0,o.add(d),d.scale.setScalar(D.planetScale),a.axialTilt!==void 0){const _=a.axialTilt*Math.PI/180;d.rotation.z=_}const u=a.radius*2.5,f=new it().setFromPoints([new E(0,-u,0),new E(0,u,0)]),p=new Xt({color:16777215,transparent:!0,opacity:.5}),g=new Mn(f,p);if(g.visible=D.showAxes,g.raycast=()=>{},d.add(g),a.axisLine=g,a.name==="Earth"?d.layers.set(1):d.layers.set(0),a.name==="Earth"&&a.cloudTexture){const _=new On(a.radius*1.01,32,32),x=new Ni({transparent:!0,opacity:1,depthWrite:!1}),R=new Lt(_,x);R.visible=!1,R.layers.set(1),Wi.loadTexture(a.cloudTexture,x,"Earth Clouds",!1,null,"alphaMap"),d.add(R),a.cloudMesh=R}const v=new Et;o.add(v),mv(a,d);const m=pv(a,e),h=hv(a,o,v),y={group:o,mesh:d,data:a,moons:h,orbitLinesGroup:v,orbitLine:m};t.push(y),a.type==="dwarf"&&n.push(y)}),{planets:t,sun:s,dwarfPlanets:n}}function yv(i,e=null,t=null){if(e){const n=new Date("2000-01-01T12:00:00Z").getTime(),r=(D.date.getTime()-n)/(1e3*60*60),o=r/600*2*Math.PI;e.rotation.y=o,e.userData.customUniforms&&(e.userData.customUniforms.uTime.value=r*.1%1e4)}i.forEach(n=>{if(n.data.body){const a=Wt(Ce[n.data.body],D.date);n.mesh.position.x=a.x*Ye,n.mesh.position.z=-a.y*Ye,n.mesh.position.y=a.z*Ye}else if(n.data.elements){const a=Lr(n.data.elements,D.date);n.mesh.position.x=a.x*Ye,n.mesh.position.z=-a.y*Ye}if(n.data.name==="Earth"&&t){t.target=n.mesh;const a=n.data.radius*D.planetScale,o=n.mesh.position.length(),l=a*4,c=Math.atan(l/o);t.angle=c*1.2,t.shadow.camera.updateProjectionMatrix()}if(!D.stop&&n.data.cloudMesh){const a=new Date("2000-01-01T12:00:00Z").getTime(),d=(D.date.getTime()-a)/(1e3*60*60)/240*2*Math.PI;n.data.cloudMesh.rotation.y=d}if(n.orbitLinesGroup&&n.orbitLinesGroup.position.copy(n.mesh.position),n.data.rotationPeriod){const a=new Date("2000-01-01T12:00:00Z").getTime(),c=(D.date.getTime()-a)/(1e3*60*60)/n.data.rotationPeriod*2*Math.PI;n.mesh.rotation.y=c}const r=n.data.name==="Earth"?1:0;n.mesh.layers.mask!==1<<r&&n.mesh.layers.set(r),fv(n,i),n.moons.forEach(a=>{a.mesh.layers.mask!==1<<r&&a.mesh.layers.set(r)})})}const zc={type:"change"},Ea={type:"start"},Bc={type:"end"},lr=new xs,kc=new Rn,xv=Math.cos(70*ao.DEG2RAD);class Mv extends si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",De),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(zc),n.update(),r=s.NONE},this.update=function(){const L=new E,ae=new ni().setFromUnitVectors(e.up,new E(0,1,0)),Ee=ae.clone().invert(),xe=new E,te=new ni,I=new E,oe=2*Math.PI;return function(Ue=null){const Le=n.object.position;L.copy(Le).sub(n.target),L.applyQuaternion(ae),o.setFromVector3(L),n.autoRotate&&r===s.NONE&&Y(C(Ue)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let qe=n.minAzimuthAngle,je=n.maxAzimuthAngle;isFinite(qe)&&isFinite(je)&&(qe<-Math.PI?qe+=oe:qe>Math.PI&&(qe-=oe),je<-Math.PI?je+=oe:je>Math.PI&&(je-=oe),qe<=je?o.theta=Math.max(qe,Math.min(je,o.theta)):o.theta=o.theta>(qe+je)/2?Math.max(qe,o.theta):Math.min(je,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=X(o.radius):o.radius=X(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(Ee),Le.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let lt=!1;if(n.zoomToCursor&&A){let dt=null;if(n.object.isPerspectiveCamera){const Je=L.length();dt=X(Je*c);const ft=Je-dt;n.object.position.addScaledVector(x,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Je=new E(R.x,R.y,0);Je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),lt=!0;const ft=new E(R.x,R.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(Je),n.object.updateMatrixWorld(),dt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;dt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(dt).add(n.object.position):(lr.origin.copy(n.object.position),lr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(lr.direction))<xv?e.lookAt(n.target):(kc.setFromNormalAndCoplanarPoint(n.object.up,n.target),lr.intersectPlane(kc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),lt=!0);return c=1,A=!1,lt||xe.distanceToSquared(n.object.position)>a||8*(1-te.dot(n.object.quaternion))>a||I.distanceToSquared(n.target)>0?(n.dispatchEvent(zc),xe.copy(n.object.position),te.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qe),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",De),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new uc,l=new uc;let c=1;const d=new E,u=new ge,f=new ge,p=new ge,g=new ge,v=new ge,m=new ge,h=new ge,y=new ge,_=new ge,x=new E,R=new ge;let A=!1;const T=[],H={};let S=!1;function C(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function z(L){const ae=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*ae)}function Y(L){l.theta-=L}function J(L){l.phi-=L}const P=function(){const L=new E;return function(Ee,xe){L.setFromMatrixColumn(xe,0),L.multiplyScalar(-Ee),d.add(L)}}(),N=function(){const L=new E;return function(Ee,xe){n.screenSpacePanning===!0?L.setFromMatrixColumn(xe,1):(L.setFromMatrixColumn(xe,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Ee),d.add(L)}}(),k=function(){const L=new E;return function(Ee,xe){const te=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;L.copy(I).sub(n.target);let oe=L.length();oe*=Math.tan(n.object.fov/2*Math.PI/180),P(2*Ee*oe/te.clientHeight,n.object.matrix),N(2*xe*oe/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(Ee*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),N(xe*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L,ae){if(!n.zoomToCursor)return;A=!0;const Ee=n.domElement.getBoundingClientRect(),xe=L-Ee.left,te=ae-Ee.top,I=Ee.width,oe=Ee.height;R.x=xe/I*2-1,R.y=-(te/oe)*2+1,x.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ne(L){u.set(L.clientX,L.clientY)}function ie(L){K(L.clientX,L.clientX),h.set(L.clientX,L.clientY)}function V(L){g.set(L.clientX,L.clientY)}function Z(L){f.set(L.clientX,L.clientY),p.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ae=n.domElement;Y(2*Math.PI*p.x/ae.clientHeight),J(2*Math.PI*p.y/ae.clientHeight),u.copy(f),n.update()}function le(L){y.set(L.clientX,L.clientY),_.subVectors(y,h),_.y>0?j(z(_.y)):_.y<0&&q(z(_.y)),h.copy(y),n.update()}function ye(L){v.set(L.clientX,L.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(v),n.update()}function Me(L){K(L.clientX,L.clientY),L.deltaY<0?q(z(L.deltaY)):L.deltaY>0&&j(z(L.deltaY)),n.update()}function Te(L){let ae=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),ae=!0;break}ae&&(L.preventDefault(),n.update())}function O(L){if(T.length===1)u.set(L.pageX,L.pageY);else{const ae=ve(L),Ee=.5*(L.pageX+ae.x),xe=.5*(L.pageY+ae.y);u.set(Ee,xe)}}function ce(L){if(T.length===1)g.set(L.pageX,L.pageY);else{const ae=ve(L),Ee=.5*(L.pageX+ae.x),xe=.5*(L.pageY+ae.y);g.set(Ee,xe)}}function Ie(L){const ae=ve(L),Ee=L.pageX-ae.x,xe=L.pageY-ae.y,te=Math.sqrt(Ee*Ee+xe*xe);h.set(0,te)}function U(L){n.enableZoom&&Ie(L),n.enablePan&&ce(L)}function Re(L){n.enableZoom&&Ie(L),n.enableRotate&&O(L)}function de(L){if(T.length==1)f.set(L.pageX,L.pageY);else{const Ee=ve(L),xe=.5*(L.pageX+Ee.x),te=.5*(L.pageY+Ee.y);f.set(xe,te)}p.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ae=n.domElement;Y(2*Math.PI*p.x/ae.clientHeight),J(2*Math.PI*p.y/ae.clientHeight),u.copy(f)}function me(L){if(T.length===1)v.set(L.pageX,L.pageY);else{const ae=ve(L),Ee=.5*(L.pageX+ae.x),xe=.5*(L.pageY+ae.y);v.set(Ee,xe)}m.subVectors(v,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(v)}function he(L){const ae=ve(L),Ee=L.pageX-ae.x,xe=L.pageY-ae.y,te=Math.sqrt(Ee*Ee+xe*xe);y.set(0,te),_.set(0,Math.pow(y.y/h.y,n.zoomSpeed)),j(_.y),h.copy(y);const I=(L.pageX+ae.x)*.5,oe=(L.pageY+ae.y)*.5;K(I,oe)}function Ze(L){n.enableZoom&&he(L),n.enablePan&&me(L)}function Pe(L){n.enableZoom&&he(L),n.enableRotate&&de(L)}function w(L){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",B)),Ge(L),L.pointerType==="touch"?Be(L):se(L))}function M(L){n.enabled!==!1&&(L.pointerType==="touch"?Q(L):ee(L))}function B(L){Fe(L),T.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(Bc),r=s.NONE}function se(L){let ae;switch(L.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case ri.DOLLY:if(n.enableZoom===!1)return;ie(L),r=s.DOLLY;break;case ri.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),r=s.PAN}else{if(n.enableRotate===!1)return;ne(L),r=s.ROTATE}break;case ri.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ne(L),r=s.ROTATE}else{if(n.enablePan===!1)return;V(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ea)}function ee(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Z(L);break;case s.DOLLY:if(n.enableZoom===!1)return;le(L);break;case s.PAN:if(n.enablePan===!1)return;ye(L);break}}function re(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(Ea),Me(be(L)),n.dispatchEvent(Bc))}function be(L){const ae=L.deltaMode,Ee={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ae){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return L.ctrlKey&&!S&&(Ee.deltaY*=10),Ee}function pe(L){L.key==="Control"&&(S=!0,document.addEventListener("keyup",Se,{passive:!0,capture:!0}))}function Se(L){L.key==="Control"&&(S=!1,document.removeEventListener("keyup",Se,{passive:!0,capture:!0}))}function De(L){n.enabled===!1||n.enablePan===!1||Te(L)}function Be(L){switch(Ae(L),T.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;O(L),r=s.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;ce(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(L),r=s.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ea)}function Q(L){switch(Ae(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;me(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ze(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(L),n.update();break;default:r=s.NONE}}function Qe(L){n.enabled!==!1&&L.preventDefault()}function Ge(L){T.push(L.pointerId)}function Fe(L){delete H[L.pointerId];for(let ae=0;ae<T.length;ae++)if(T[ae]==L.pointerId){T.splice(ae,1);return}}function Ae(L){let ae=H[L.pointerId];ae===void 0&&(ae=new ge,H[L.pointerId]=ae),ae.set(L.pageX,L.pageY)}function ve(L){const ae=L.pointerId===T[0]?T[1]:T[0];return H[ae]}n.domElement.addEventListener("contextmenu",Qe),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}function Sv(){const i=new S0,e=new Nt(60,window.innerWidth/window.innerHeight,1e-5,1e12);e.position.set(0,200,400);const t=new M0({antialias:!0,logarithmicDepthBuffer:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio),t.toneMapping=Xc,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Vc,document.body.appendChild(t.domElement);const n=new Mv(e,t.domElement);n.enableDamping=!0,n.dampingFactor=.05;const s=new Qg(3355443,.5);s.layers.enable(1),i.add(s);const r=new Jg(16777215,2,0,0);r.layers.set(0);const a=new Kg(16777215,2);a.position.set(0,0,0),a.castShadow=!0,a.layers.set(1),a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.bias=-1e-5,a.shadow.camera.near=.1,a.shadow.camera.far=500,a.angle=Math.PI/8,a.penumbra=.1,a.decay=0,a.distance=1e3,e.layers.enable(0),e.layers.enable(1);const o=new Et;i.add(o);const l=new Et;return i.add(l),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),{scene:i,camera:e,renderer:t,controls:n,orbitGroup:o,zodiacGroup:l,sunLight:r,shadowLight:a}}const Hc=new Ut;class bo{constructor(e,t=64){this.bounds=e,this.capacity=t,this.points=[],this.children=null,this.divided=!1}insert(e){return this.bounds.containsPoint(e.position)?this.points.length<this.capacity&&!this.divided?(this.points.push(e),!0):(this.divided||this.subdivide(),this.children[0].insert(e)||this.children[1].insert(e)||this.children[2].insert(e)||this.children[3].insert(e)||this.children[4].insert(e)||this.children[5].insert(e)||this.children[6].insert(e)||this.children[7].insert(e)):!1}subdivide(){const e=this.bounds.min,t=this.bounds.max,n=new E().addVectors(e,t).multiplyScalar(.5),s=[new Ut(e,n),new Ut(new E(n.x,e.y,e.z),new E(t.x,n.y,n.z)),new Ut(new E(e.x,e.y,n.z),new E(n.x,n.y,t.z)),new Ut(new E(n.x,e.y,n.z),new E(t.x,n.y,t.z)),new Ut(new E(e.x,n.y,e.z),new E(n.x,t.y,n.z)),new Ut(new E(n.x,n.y,e.z),new E(t.x,t.y,n.z)),new Ut(new E(e.x,n.y,n.z),new E(n.x,t.y,t.z)),new Ut(n,t)];this.children=s.map(r=>new bo(r,this.capacity)),this.divided=!0;for(const r of this.points)for(const a of this.children)if(a.insert(r))break;this.points=[]}queryRay(e,t=0,n=[]){if(t>0){if(Hc.copy(this.bounds).expandByScalar(t),!e.intersectsBox(Hc))return n}else if(!e.intersectsBox(this.bounds))return n;if(this.points.length>0)for(const s of this.points)n.push(s);if(this.children)for(const s of this.children)s.queryRay(e,t,n);return n}}const bv=[{id:0,file:"stars_data_0.bin",meta:"stars_meta_0.json"},{id:1,file:"stars_data_1.bin",meta:"stars_meta_1.json"},{id:2,file:"stars_data_2.bin",meta:"stars_meta_2.json"}];function Ev(){const i=document.createElement("canvas");i.width=64,i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.15,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),t.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new T0(i)}class wv{constructor(e){this.scene=e,this.starsGroup=new Et,this.starsGroup.name="StarsGroup",this.starsGroup.renderOrder=-1,this.scene.add(this.starsGroup),this.chunks=new Map,this.texture=Ev(),this.allStarData=[],this.starsGroup.userData={starData:this.allStarData,manager:this},this.brightness=D.starBrightness,this.currentBrightness=this.brightness,this.currentLimit=6,this.loadingChunks=new Set}async loadChunk(e){if(this.chunks.has(e)||this.loadingChunks.has(e))return;this.loadingChunks.add(e);const t=bv[e];if(!t){this.loadingChunks.delete(e);return}try{const n=Date.now();We.log(`Loading star chunk ${e} (v=${n})...`);const[s,r]=await Promise.all([fetch(`/assets/${t.meta}?v=${n}`),fetch(`/assets/${t.file}?v=${n}`)]),a=await s.json(),o=await r.arrayBuffer(),l=new Float32Array(o),c=11,d=[],u=[],f=[],p=[],g=1e4;for(let _=0;_<a.length;_++){const x=_*c,R=l[x+0],A=l[x+1],T=l[x+2],H=l[x+3],S=l[x+4],C=l[x+5],z=l[x+6],Y=l[x+7],J=l[x+8],P=l[x+9],N=l[x+10],k=Math.sqrt(R*R+A*A+T*T),j=Math.max(k,.1),q=z/(j*j),K=Math.log(Math.max(q,1e-12));let X=1;if(K<-8)X=.8+(K+12)*.15,X<.6&&(X=.6);else{const Ie=K+8;X=1+Math.pow(Ie,1.4)*.3}X=Math.min(X,8),f.push(X);const[ne,ie,V,Z,le,ye,Me]=a[_],Te=R*g,O=T*g,ce=-A*g;d.push(Te,O,ce),u.push(H,S,C),_===0&&console.warn(`[DEBUG Chunk ${e}] First Star Pos: ${Te}, ${O}, ${ce} | RGB: ${H}, ${S}, ${C}`),le===11767&&console.warn(`[DEBUG] Polaris Found! Raw(x,y,z): [${R}, ${A}, ${T}]. Scene(x,y,z): [${Te}, ${O}, ${ce}]`),p.push({id:ne,name:ie,bayer:V,flamsteed:Z,hip:le,hd:ye,spectralType:Me||"Unknown",luminosity:z,radius:Y,mass:J,temperature:P,mag:N,distance:j,x:R,y:A,z:T})}const v=new it;v.setAttribute("position",new ht(d,3)),v.setAttribute("color",new ht(u,3)),v.setAttribute("starSize",new ht(f,1));const m=new w0({size:1,map:this.texture,vertexColors:!0,transparent:!0,depthWrite:!1,blending:zi,sizeAttenuation:!1});m.onBeforeCompile=_=>{_.vertexShader=`
                    attribute float starSize;
                    ${_.vertexShader}
                `,_.vertexShader=_.vertexShader.replace("gl_PointSize = size;","gl_PointSize = starSize * size;")};const h=new Lg(v,m);this.updateMaterial(h,this.currentBrightness),this.starsGroup.add(h);const y=this.buildOctree(p);this.chunks.set(e,{points:h,octree:y,data:p}),this.updateAllStarData(),D.magnitudeLimit!==void 0&&this.setMagnitudeLimit(D.magnitudeLimit)}catch(n){We.error(`Failed to load chunk ${e}`,n)}finally{this.loadingChunks.delete(e)}}unloadChunk(e){if(!this.chunks.has(e))return;const t=this.chunks.get(e);this.starsGroup.remove(t.points),t.points.geometry.dispose(),t.points.material.dispose(),this.chunks.delete(e),this.updateAllStarData()}buildOctree(e){const t=new E(1/0,1/0,1/0),n=new E(-1/0,-1/0,-1/0),s=1e4;e.forEach(a=>{const o=a.x*s,l=a.z*s,c=-a.y*s;t.min(new E(o,l,c)),n.max(new E(o,l,c))}),t.subScalar(100),n.addScalar(100);const r=new bo(new Ut(t,n),64);return e.forEach((a,o)=>{const l=a.x*s,c=a.z*s,d=-a.y*s;r.insert({position:new E(l,c,d),data:a,index:o})}),r}updateAllStarData(){this.allStarData.length=0,this.chunks.forEach(e=>{this.allStarData.push(...e.data)}),this.starsGroup.userData.starData=this.allStarData}getOctrees(){const e=[];return this.chunks.forEach(t=>e.push(t.octree)),e}setMagnitudeLimit(e){this.currentLimit=e,e>6.5&&this.loadChunk(1),e>8&&this.loadChunk(2),this.chunks.forEach((t,n)=>{const s=t.data;if(!s||s.length===0)return;let r=0;if(s[0].mag>e)r=0;else if(s[s.length-1].mag<e)r=s.length;else{let a=0,o=s.length-1;for(;a<=o;){const l=Math.floor((a+o)/2);s[l].mag<e?(r=l+1,a=l+1):o=l-1}}t.points&&t.points.geometry&&t.points.geometry.setDrawRange(0,r)})}setBrightness(e){this.brightness=e,this.applyBrightness(e)}applyBrightness(e){this.currentBrightness=e,this.chunks.forEach(t=>{this.updateMaterial(t.points,e)})}updateMaterial(e,t){if(!e||!e.material)return;t==null&&(t=.5);let n=0,s=0;if(t<=.5){const r=t/.5;s=.6+r*.25,n=.6+r*.6}else{const r=(t-.5)/.5;s=.85+r*.15,n=1.2+r*1.3}if(e.material.opacity=s,e.material.color.setScalar(n),t>.8){const r=(t-.8)/.2;e.material.size=1+r*.2}else e.material.size=1}}async function Tv(i){const e=new wv(i);return await e.loadChunk(0),{stars:e.starsGroup,rawData:e.allStarData,manager:e}}class Av{constructor(){Lo(this,"animate",()=>{requestAnimationFrame(this.animate);const e=this.clock.getDelta();if(!D.stop){const t=D.simulationSpeed*e;D.date.setTime(D.date.getTime()+t*1e3),this.magneticFieldTime+=e*D.simulationSpeed*25e-5}iv(this.uiControls.uiState,this.uiControls),yv(this.planets,this.sun,this.shadowLight),$0(this.universeGroup,this.planets,this.sun),Za(this.orbitGroup,this.relativeOrbitGroup,this.planets,this.sun),F0(this.camera,this.controls,this.planets,this.sun),this.rabbit.update(e),this.controls.update(),this.renderer.render(this.scene,this.camera),this.updateMagneticFieldsAnimations(),this.rabbit.render()});this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.universeGroup=null,this.planets=[],this.sun=null,this.orbitGroup=null,this.relativeOrbitGroup=null,this.zodiacGroup=null,this.starsRef={value:null},this.uiControls=null,this.rabbit=null,this.clock=new e1,this.magneticFieldTime=0,this.shadowLight=null}async init(){try{We.log("White Rabbit Version: 1.3 (Class-based Init)");const e=document.getElementById("loading");e.textContent="Initializing... (Base: /)",e.textContent="Creating Scene...";const{scene:t,camera:n,renderer:s,controls:r,orbitGroup:a,zodiacGroup:o,sunLight:l,shadowLight:c}=Sv();this.scene=t,this.camera=n,this.renderer=s,this.controls=r,this.orbitGroup=a,this.zodiacGroup=o,this.shadowLight=c,window.scene=t,this.universeGroup=new Et,t.add(this.universeGroup),this.universeGroup.add(l),this.universeGroup.add(c),this.universeGroup.add(a),this.universeGroup.add(o);const d=new Et;this.universeGroup.add(d),d.visible=D.showAsterisms,o.visible=D.showZodiacs;const u=new vo,f=S2(this.universeGroup,u),p=t2(this.universeGroup);e.textContent="Loading Planets...";const{planets:g,sun:v}=_v(this.universeGroup,a);this.planets=g,this.sun=v,this.setupMagneticFields(),this.relativeOrbitGroup=new Et,t.add(this.relativeOrbitGroup),e.textContent="Setting up GUI...",this.uiControls=nv(g,v,a,this.relativeOrbitGroup,o,d,this.starsRef,s,n,r,f,p,this.magneticFieldsGroup,this.universeGroup),l2(n,g,v,this.starsRef,o,d),N0(n,r,g,v),Q1(this.universeGroup),window.updateMissions=e2,Za(a,this.relativeOrbitGroup,g,v),window.SimulationControl=new K1(g,v,a,o,d,this.starsRef,n,r,f,p,this.magneticFieldsGroup,this.universeGroup),this.rabbit=r2(s),e.style.opacity=0,e.style.pointerEvents="none",setTimeout(()=>{Ot.init()},100),Tv(this.universeGroup).then(({stars:m,rawData:h})=>{m&&(this.starsRef.value=m,this.starsRef.value=m,createConstellations(o,constellationsGroup,h),b2(f,h))}).catch(m=>We.error("Error loading stars:",m)),this.animate()}catch(e){We.error("Initialization error:",e),document.getElementById("loading").textContent="Error loading simulation: "+e.message,document.getElementById("loading").style.color="red"}}setupMagneticFields(){this.magneticFieldsGroup=new Et,this.magneticFieldsGroup.visible=D.showMagneticFields,this.universeGroup.add(this.magneticFieldsGroup);const e=n2(this.sun);e&&(e.visible=D.showSunMagneticFieldBasic,this.universeGroup.add(e));const t=i2(this.sun);t&&(t.visible=D.showSunMagneticField,this.universeGroup.add(t)),this.planets.forEach(n=>{if(n.data.magneticField){const s=Ac(n.data,n.data.radius);s&&n.mesh.add(s)}n.moons.forEach(s=>{if(s.data.magneticField){const r=Ac(s.data,s.data.radius);r&&s.mesh.add(r)}})})}updateMagneticFieldsAnimations(){if(this.universeGroup){const e=this.universeGroup.children.find(n=>n.name==="MagneticField");e!=null&&e.visible&&e.userData.material&&(e.userData.material.uniforms.uTime.value=this.magneticFieldTime,this.sun&&(e.rotation.y=this.sun.rotation.y));const t=this.universeGroup.children.find(n=>n.name==="SunMagneticFieldBasic");if(t!=null&&t.visible){const n=this.magneticFieldTime+t.userData.timeOffset;if(t.userData.shaderUniforms){const s=new Date("2000-01-01T12:00:00Z").getTime(),a=(D.date.getTime()-s)/(1e3*60*60);t.userData.shaderUniforms.uTime.value=a,this.sun&&(t.rotation.y=this.sun.rotation.y)}t.children.forEach(s=>{if(s.userData.isPolar&&s.userData.basePoints){const r=s.geometry.attributes.position,a=s.userData.basePoints;for(let o=0;o<a.length;o++){const l=a[o],c=Math.sin(n*.3+o*.1)*.1,d=new E(c,0,c);r.setXYZ(o,l.x+d.x,l.y+d.y,l.z+d.z)}r.needsUpdate=!0}})}}}}window.onerror=function(i,e,t,n,s){const r=document.getElementById("loading");r&&(r.textContent=`Error: ${i} at ${e}:${t}`,r.style.color="red")};(async()=>await new Av().init())();
