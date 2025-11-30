(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="160",ni={ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},j0=0,Ro=1,Z0=2,Ic=1,Nc=2,hn=3,_n=0,Ot=1,Ht=2,Ln=0,Li=1,Ni=2,Lo=3,Po=4,K0=5,Xn=100,J0=101,Q0=102,Do=103,Uo=104,ed=200,td=201,nd=202,id=203,ya=204,Ma=205,sd=206,rd=207,ad=208,od=209,ld=210,cd=211,dd=212,ud=213,hd=214,fd=0,pd=1,md=2,ar=3,gd=4,_d=5,vd=6,xd=7,Fc=0,yd=1,Md=2,Pn=0,Sd=1,Ed=2,bd=3,Oc=4,wd=5,Td=6,zc=300,Fi=301,Oi=302,Sa=303,Ea=304,_r=306,or=1e3,It=1001,ba=1002,Mt=1003,Io=1004,Lr=1005,Wt=1006,Ad=1007,rs=1008,Dn=1009,Cd=1010,Rd=1011,no=1012,Bc=1013,An=1014,Cn=1015,as=1016,kc=1017,Hc=1018,qn=1020,Ld=1021,Yt=1023,Pd=1024,Dd=1025,jn=1026,zi=1027,Ud=1028,Gc=1029,Id=1030,Vc=1031,Wc=1033,Pr=33776,Dr=33777,Ur=33778,Ir=33779,No=35840,Fo=35841,Oo=35842,zo=35843,Xc=36196,Bo=37492,ko=37496,Ho=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,Yo=37813,$o=37814,qo=37815,jo=37816,Zo=37817,Ko=37818,Jo=37819,Qo=37820,el=37821,Nr=36492,tl=36494,nl=36495,Nd=36283,il=36284,sl=36285,rl=36286,Yc=3e3,Zn=3001,Fd=3200,Od=3201,$c=0,zd=1,$t="",vt="srgb",vn="srgb-linear",io="display-p3",vr="display-p3-linear",lr="linear",nt="srgb",cr="rec709",dr="p3",si=7680,al=519,Bd=512,kd=513,Hd=514,qc=515,Gd=516,Vd=517,Wd=518,Xd=519,wa=35044,ol="300 es",Ta=1035,mn=2e3,ur=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Qi=Math.PI/180,Bi=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function so(i,e){return(i%e+e)%e}function Yd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $d(i,e,t){return i!==e?(t-i)/(e-i):0}function es(i,e,t){return(1-t)*i+t*e}function qd(i,e,t,n){return es(i,e,1-Math.exp(-t*n))}function jd(i,e=1){return e-Math.abs(so(i,e*2)-e)}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qd(i,e){return i+Math.random()*(e-i)}function eu(i){return i*(.5-Math.random())}function tu(i){i!==void 0&&(ll=i);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nu(i){return i*Qi}function iu(i){return i*Bi}function Aa(i){return(i&i-1)===0&&i!==0}function su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ru(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*d,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ro={DEG2RAD:Qi,RAD2DEG:Bi,generateUUID:gn,clamp:xt,euclideanModulo:so,mapLinear:Yd,inverseLerp:$d,lerp:es,damp:qd,pingpong:jd,smoothstep:Zd,smootherstep:Kd,randInt:Jd,randFloat:Qd,randFloatSpread:eu,seededRandom:tu,degToRad:nu,radToDeg:iu,isPowerOfTwo:Aa,ceilPowerOfTwo:su,floorPowerOfTwo:hr,setQuaternionFromProperEuler:ru,normalize:Qe,denormalize:tn};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],x=s[1],v=s[4],E=s[7],L=s[2],C=s[5],A=s[8];return r[0]=o*_+a*x+l*L,r[3]=o*p+a*v+l*C,r[6]=o*h+a*E+l*A,r[1]=c*_+d*x+u*L,r[4]=c*p+d*v+u*C,r[7]=c*h+d*E+u*A,r[2]=f*_+m*x+g*L,r[5]=f*p+m*v+g*C,r[8]=f*h+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*r,m=c*r-o*l,g=t*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-d*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Xe;function jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){const i=os("canvas");return i.style.display="block",i}const cl={};function ts(i){i in cl||(cl[i]=!0,console.warn(i))}const dl=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[vn]:{transfer:lr,primaries:cr,toReference:i=>i,fromReference:i=>i},[vt]:{transfer:nt,primaries:cr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vr]:{transfer:lr,primaries:dr,toReference:i=>i.applyMatrix3(ul),fromReference:i=>i.applyMatrix3(dl)},[io]:{transfer:nt,primaries:dr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ul),fromReference:i=>i.applyMatrix3(dl).convertLinearToSRGB()}},ou=new Set([vn,vr]),et={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ou.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ys[e].toReference,s=ys[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ys[i].primaries},getTransfer:function(i){return i===$t?lr:ys[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=os("canvas")),ri.width=e.width,ri.height=e.height;const n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lu=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zr(s[o].image)):r.push(zr(s[o]))}else r=zr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cu=0;class Rt extends ti{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=It,s=It,r=Wt,o=rs,a=Yt,l=Dn,c=Rt.DEFAULT_ANISOTROPY,d=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=gn(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Zn?vt:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Zn:Yc}set encoding(e){ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?vt:$t}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=zc;Rt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,L=(h+1)/2,C=(d+f)/4,A=(u+_)/4,F=(g+p)/4;return v>E&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=C/n,r=A/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=F/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=F/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(f-d)/x,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class du extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?vt:$t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||d!==g){let p=1-a;const h=l*f+c*m+d*g+u*_,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const L=Math.sqrt(v),C=Math.atan2(L,h*x);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const E=a*x;if(l=l*p+f*E,c=c*p+m*E,d=d*p+g*E,u=u*p+_*E,p===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=L,c*=L,d*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*m-c*f,e[t+1]=l*g+d*f+c*u-a*m,e[t+2]=c*g+d*m+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"YXZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"ZXY":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"ZYX":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"YZX":this._x=f*d*u+c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u-f*m*g;break;case"XZY":this._x=f*d*u-c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,n=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new M,hl=new Qn;class hs{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(r,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),Ss.subVectors(this.max,Vi),ai.subVectors(e.a,Vi),oi.subVectors(e.b,Vi),li.subVectors(e.c,Vi),yn.subVectors(oi,ai),Mn.subVectors(li,oi),Bn.subVectors(ai,li);let t=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Bn.z,Bn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Bn.z,0,-Bn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Bn.y,Bn.x,0];return!kr(t,ai,oi,li,Ss)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,ai,oi,li,Ss))?!1:(Es.crossVectors(yn,Mn),t=[Es.x,Es.y,Es.z],kr(t,ai,oi,li,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new M,new M,new M,new M,new M,new M,new M,new M],jt=new M,Ms=new hs,ai=new M,oi=new M,li=new M,yn=new M,Mn=new M,Bn=new M,Vi=new M,Ss=new M,Es=new M,kn=new M;function kr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){kn.fromArray(i,r);const a=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),d=n.dot(kn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const hu=new hs,Wi=new M,Hr=new M;class fs{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Hr)),this.expandByPoint(Wi.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new M,Gr=new M,bs=new M,Sn=new M,Vr=new M,ws=new M,Wr=new M;class ps{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gr.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Gr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=Sn.dot(this.direction),l=-Sn.dot(bs),c=Sn.lengthSq(),d=Math.abs(1-o*o);let u,f,m,g;if(d>0)if(u=o*l-a,f=o*a-l,g=r*d,u>=0)if(f>=-g)if(f<=g){const _=1/d;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gr).addScaledVector(bs,f),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,s,r){Vr.subVectors(t,e),ws.subVectors(n,e),Wr.crossVectors(Vr,ws);let o=this.direction.dot(Wr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);const l=a*this.direction.dot(ws.crossVectors(Sn,ws));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(Sn));if(c<0||l+c>o)return null;const d=-a*Sn.dot(Wr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,o,a,l,c,d,u,f,m,g,_,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,f,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,d,u,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*d,m=o*u,g=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*u,g=c*d,_=c*u;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*u,g=c*d,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*u,g=a*d,_=a*u;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+_,t[5]=o*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fu,e,pu)}lookAt(e,t,n){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),En.crossVectors(n,Bt),En.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),En.crossVectors(n,Bt)),En.normalize(),Ts.crossVectors(Bt,En),s[0]=En.x,s[4]=Ts.x,s[8]=Bt.x,s[1]=En.y,s[5]=Ts.y,s[9]=Bt.y,s[2]=En.z,s[6]=Ts.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],x=n[3],v=n[7],E=n[11],L=n[15],C=s[0],A=s[4],F=s[8],y=s[12],b=s[1],N=s[5],B=s[9],K=s[13],P=s[2],O=s[6],G=s[10],j=s[14],q=s[3],Z=s[7],$=s[11],ne=s[15];return r[0]=o*C+a*b+l*P+c*q,r[4]=o*A+a*N+l*O+c*Z,r[8]=o*F+a*B+l*G+c*$,r[12]=o*y+a*K+l*j+c*ne,r[1]=d*C+u*b+f*P+m*q,r[5]=d*A+u*N+f*O+m*Z,r[9]=d*F+u*B+f*G+m*$,r[13]=d*y+u*K+f*j+m*ne,r[2]=g*C+_*b+p*P+h*q,r[6]=g*A+_*N+p*O+h*Z,r[10]=g*F+_*B+p*G+h*$,r[14]=g*y+_*K+p*j+h*ne,r[3]=x*C+v*b+E*P+L*q,r[7]=x*A+v*N+E*O+L*Z,r[11]=x*F+v*B+E*G+L*$,r[15]=x*y+v*K+E*j+L*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*d-r*l*d)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*d-n*c*d)+h*(-s*a*d-t*l*u+t*a*f+s*o*u-n*o*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],x=u*p*c-_*f*c+_*l*m-a*p*m-u*l*h+a*f*h,v=g*f*c-d*p*c-g*l*m+o*p*m+d*l*h-o*f*h,E=d*_*c-g*u*c+g*a*m-o*_*m-d*a*h+o*u*h,L=g*u*l-d*_*l-g*a*f+o*_*f+d*a*p-o*u*p,C=t*x+n*v+s*E+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=x*A,e[1]=(_*f*r-u*p*r-_*s*m+n*p*m+u*s*h-n*f*h)*A,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*h+n*l*h)*A,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*m-n*l*m)*A,e[4]=v*A,e[5]=(d*p*r-g*f*r+g*s*m-t*p*m-d*s*h+t*f*h)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*h-t*l*h)*A,e[7]=(o*f*r-d*l*r+d*s*c-t*f*c-o*s*m+t*l*m)*A,e[8]=E*A,e[9]=(g*u*r-d*_*r-g*n*m+t*_*m+d*n*h-t*u*h)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*h+t*a*h)*A,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*m-t*a*m)*A,e[12]=L*A,e[13]=(d*_*s-g*u*s+g*n*f-t*_*f-d*n*p+t*u*p)*A,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*A,e[15]=(o*u*s-d*a*s+d*n*l-t*u*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,f=r*c,m=r*d,g=r*u,_=o*d,p=o*u,h=a*u,x=l*c,v=l*d,E=l*u,L=n.x,C=n.y,A=n.z;return s[0]=(1-(_+h))*L,s[1]=(m+E)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(m-E)*C,s[5]=(1-(f+h))*C,s[6]=(p+x)*C,s[7]=0,s[8]=(g+v)*A,s[9]=(p-x)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const o=ci.set(s[4],s[5],s[6]).length(),a=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);const c=1/r,d=1/o,u=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=d,Zt.elements[5]*=d,Zt.elements[6]*=d,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(a===mn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ur)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mn){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(o-r),f=(t+e)*c,m=(n+s)*d;let g,_;if(a===mn)g=(o+r)*u,_=-2*u;else if(a===ur)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new M,Zt=new st,fu=new M(0,0,0),pu=new M(1,1,1),En=new M,Ts=new M,Bt=new M,fl=new st,pl=new Qn;class xr{constructor(e=0,t=0,n=0,s=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mu=0;const ml=new M,di=new Qn,cn=new st,As=new M,Xi=new M,gu=new M,_u=new Qn,gl=new M(1,0,0),_l=new M(0,1,0),vl=new M(0,0,1),vu={type:"added"},xu={type:"removed"};class ft extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new M,t=new xr,n=new Qn,s=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Xe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Xi,As,this.up):cn.lookAt(As,Xi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(cn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,_u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new M(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new M,dn=new M,Xr=new M,un=new M,ui=new M,hi=new M,xl=new M,Yr=new M,$r=new M,qr=new M;let Cs=!1;class Xt{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kt.subVectors(e,t),s.cross(Kt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kt.subVectors(s,t),dn.subVectors(n,t),Xr.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(dn),l=Kt.dot(Xr),c=dn.dot(dn),d=dn.dot(Xr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*d)*f,g=(o*d-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,n,s,r,o,a,l){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static isFrontFacing(e,t,n,s){return Kt.subVectors(n,t),dn.subVectors(e,t),Kt.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Kt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ui.subVectors(s,n),hi.subVectors(r,n),Yr.subVectors(e,n);const l=ui.dot(Yr),c=hi.dot(Yr);if(l<=0&&c<=0)return t.copy(n);$r.subVectors(e,s);const d=ui.dot($r),u=hi.dot($r);if(d>=0&&u<=d)return t.copy(s);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ui,o);qr.subVectors(e,r);const m=ui.dot(qr),g=hi.dot(qr);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hi,a);const p=d*g-m*u;if(p<=0&&u-d>=0&&m-g>=0)return xl.subVectors(r,s),a=(u-d)/(u-d+(m-g)),t.copy(s).addScaledVector(xl,a);const h=1/(p+_+f);return o=_*h,a=f*h,t.copy(n).addScaledVector(ui,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=so(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jr(o,r,e+1/3),this.g=jr(o,r,e),this.b=jr(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return et.fromWorkingColorSpace(bt.copy(this),e),Math.round(xt(bt.r*255,0,255))*65536+Math.round(xt(bt.g*255,0,255))*256+Math.round(xt(bt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,s=bt.g,r=bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=vt){et.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,s=bt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Rs);const n=es(bn.h,Rs.h,t),s=es(bn.s,Rs.s,t),r=es(bn.l,Rs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new je;je.NAMES=Qc;let yu=0;class Nn extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Li,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Ma,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ms extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new M,Ls=new ge;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),e}}class e0 extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class t0 extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mu=0;const Vt=new st,Zr=new ft,fi=new M,kt=new hs,Yi=new hs,_t=new M;class tt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?t0:e0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Yi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(kt.min,Yi.min),kt.expandByPoint(_t),_t.addVectors(kt.max,Yi.max),kt.expandByPoint(_t)):(kt.expandByPoint(Yi.min),kt.expandByPoint(Yi.max))}kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)_t.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(e,c),_t.add(fi)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<a;b++)c[b]=new M,d[b]=new M;const u=new M,f=new M,m=new M,g=new ge,_=new ge,p=new ge,h=new M,x=new M;function v(b,N,B){u.fromArray(s,b*3),f.fromArray(s,N*3),m.fromArray(s,B*3),g.fromArray(o,b*2),_.fromArray(o,N*2),p.fromArray(o,B*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const K=1/(_.x*p.y-p.x*_.y);isFinite(K)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(K),x.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(K),c[b].add(h),c[N].add(h),c[B].add(h),d[b].add(x),d[N].add(x),d[B].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,N=E.length;b<N;++b){const B=E[b],K=B.start,P=B.count;for(let O=K,G=K+P;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const L=new M,C=new M,A=new M,F=new M;function y(b){A.fromArray(r,b*3),F.copy(A);const N=c[b];L.copy(N),L.sub(A.multiplyScalar(A.dot(N))).normalize(),C.crossVectors(F,N);const K=C.dot(d[b])<0?-1:1;l[b*4]=L.x,l[b*4+1]=L.y,l[b*4+2]=L.z,l[b*4+3]=K}for(let b=0,N=E.length;b<N;++b){const B=E[b],K=B.start,P=B.count;for(let O=K,G=K+P;O<G;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,d=new M,u=new M;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let h=0;h<d;h++)f[g++]=c[m++]}return new yt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new st,Hn=new ps,Ps=new fs,Ml=new M,pi=new M,mi=new M,gi=new M,Kr=new M,Ds=new M,Us=new ge,Is=new ge,Ns=new ge,Sl=new M,El=new M,bl=new M,Fs=new M,Os=new M;class At extends ft{constructor(e=new tt,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(Kr.fromBufferAttribute(u,e),o?Ds.addScaledVector(Kr,d):Ds.addScaledVector(Kr.sub(t),d))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(Ps.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Ps,Ml)===null||Hn.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(yl.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,L=v;E<L;E+=3){const C=a.getX(E),A=a.getX(E+1),F=a.getX(E+2);s=zs(this,h,e,n,c,d,u,C,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const x=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=zs(this,o,e,n,c,d,u,x,v,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],x=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=x,L=v;E<L;E+=3){const C=E,A=E+1,F=E+2;s=zs(this,h,e,n,c,d,u,C,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const x=p,v=p+1,E=p+2;s=zs(this,o,e,n,c,d,u,x,v,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Su(i,e,t,n,s,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===_n,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:i}}function zs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,pi),i.getVertexPosition(l,mi),i.getVertexPosition(c,gi);const d=Su(i,e,t,n,pi,mi,gi,Fs);if(d){s&&(Us.fromBufferAttribute(s,a),Is.fromBufferAttribute(s,l),Ns.fromBufferAttribute(s,c),d.uv=Xt.getInterpolation(Fs,pi,mi,gi,Us,Is,Ns,new ge)),r&&(Us.fromBufferAttribute(r,a),Is.fromBufferAttribute(r,l),Ns.fromBufferAttribute(r,c),d.uv1=Xt.getInterpolation(Fs,pi,mi,gi,Us,Is,Ns,new ge),d.uv2=d.uv1),o&&(Sl.fromBufferAttribute(o,a),El.fromBufferAttribute(o,l),bl.fromBufferAttribute(o,c),d.normal=Xt.getInterpolation(Fs,pi,mi,gi,Sl,El,bl,new M),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new M,materialIndex:0};Xt.getNormal(pi,mi,gi,u.normal),d.face=u}return d}class gs extends tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function g(_,p,h,x,v,E,L,C,A,F,y){const b=E/A,N=L/F,B=E/2,K=L/2,P=C/2,O=A+1,G=F+1;let j=0,q=0;const Z=new M;for(let $=0;$<G;$++){const ne=$*N-K;for(let re=0;re<O;re++){const X=re*b-B;Z[_]=X*x,Z[p]=ne*v,Z[h]=P,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[h]=C>0?1:-1,d.push(Z.x,Z.y,Z.z),u.push(re/A),u.push(1-$/F),j+=1}}for(let $=0;$<F;$++)for(let ne=0;ne<A;ne++){const re=f+ne+O*$,X=f+ne+O*($+1),J=f+(ne+1)+O*($+1),le=f+(ne+1)+O*$;l.push(re,X,le),l.push(X,J,le),q+=6}a.addGroup(m,q,y),m+=q,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=ki(i[t]);for(const s in n)e[s]=n[s]}return e}function Eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function n0(i){return i.getRenderTarget()===null?i.outputColorSpace:et.workingColorSpace}const bu={clone:ki,merge:Pt};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class i0 extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends i0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class Au extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(_i,vi,e,t);s.layers=this.layers,this.add(s);const r=new Ut(_i,vi,e,t);r.layers=this.layers,this.add(r);const o=new Ut(_i,vi,e,t);o.layers=this.layers,this.add(o);const a=new Ut(_i,vi,e,t);a.layers=this.layers,this.add(a);const l=new Ut(_i,vi,e,t);l.layers=this.layers,this.add(l);const c=new Ut(_i,vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class s0 extends Rt{constructor(e,t,n,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cu extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?vt:$t),this.texture=new s0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gs(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Ln});r.uniforms.tEquirect.value=t;const o=new At(s,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=Wt),new Au(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Jr=new M,Ru=new M,Lu=new Xe;class Tn{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Jr.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lu.getNormalMatrix(e),s=this.coplanarPoint(Jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new fs,Bs=new M;class oo{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],x=s[13],v=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,p-m,E-h).normalize(),n[1].setComponents(l+r,f+c,p+m,E+h).normalize(),n[2].setComponents(l+o,f+d,p+g,E+x).normalize(),n[3].setComponents(l-o,f-d,p-g,E-x).normalize(),n[4].setComponents(l-a,f-u,p-_,E-v).normalize(),t===mn)n[5].setComponents(l+a,f+u,p+_,E+v).normalize();else if(t===ur)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Bs.x=s.normal.x>0?e.max.x:e.min.x,Bs.y=s.normal.y>0?e.max.y:e.min.y,Bs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pu(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,d){const u=c.array,f=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,d,u){const f=d.array,m=d._updateRange,g=d.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const h=g[_];t?i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,d),u.version=c.version}}return{get:o,remove:a,update:l}}class lo extends tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<d;h++){const x=h*f-o;for(let v=0;v<c;v++){const E=v*u-r;g.push(E,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+c*h,E=x+c*(h+1),L=x+1+c*(h+1),C=x+1+c*h;m.push(v,E,C),m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,th=`#define PI 3.141592653589793
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
} // validated`,nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ih=`vec3 transformedNormal = objectNormal;
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
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`
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
}`,dh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
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
}`,yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bh=`uniform bool receiveShadow;
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
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
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
#endif`,Ph=`struct PhysicalMaterial {
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
}`,Dh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
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
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,qh=`#ifdef USE_MORPHTARGETS
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
#endif`,jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,kf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,$f=`uniform vec3 diffuse;
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
}`,qf=`#define LAMBERT
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
}`,jf=`#define LAMBERT
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
}`,Zf=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,rp=`#define TOON
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
}`,ap=`uniform float size;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 color;
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
}`,dp=`uniform float rotation;
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
}`,up=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Du,alphahash_pars_fragment:Uu,alphamap_fragment:Iu,alphamap_pars_fragment:Nu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:zu,aomap_pars_fragment:Bu,batching_pars_vertex:ku,batching_vertex:Hu,begin_vertex:Gu,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Zu,color_fragment:Ku,color_pars_fragment:Ju,color_pars_vertex:Qu,color_vertex:eh,common:th,cube_uv_reflection_fragment:nh,defaultnormal_vertex:ih,displacementmap_pars_vertex:sh,displacementmap_vertex:rh,emissivemap_fragment:ah,emissivemap_pars_fragment:oh,colorspace_fragment:lh,colorspace_pars_fragment:ch,envmap_fragment:dh,envmap_common_pars_fragment:uh,envmap_pars_fragment:hh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:wh,envmap_vertex:ph,fog_vertex:mh,fog_pars_vertex:gh,fog_fragment:_h,fog_pars_fragment:vh,gradientmap_pars_fragment:xh,lightmap_fragment:yh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Eh,lights_pars_begin:bh,lights_toon_fragment:Th,lights_toon_pars_fragment:Ah,lights_phong_fragment:Ch,lights_phong_pars_fragment:Rh,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Dh,lights_fragment_maps:Uh,lights_fragment_end:Ih,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:zh,map_fragment:Bh,map_pars_fragment:kh,map_particle_fragment:Hh,map_particle_pars_fragment:Gh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphcolor_vertex:Xh,morphnormal_vertex:Yh,morphtarget_pars_vertex:$h,morphtarget_vertex:qh,normal_fragment_begin:jh,normal_fragment_maps:Zh,normal_pars_fragment:Kh,normal_pars_vertex:Jh,normal_vertex:Qh,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,opaque_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:df,dithering_pars_fragment:uf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:_f,skinbase_vertex:vf,skinning_pars_vertex:xf,skinning_vertex:yf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:Ef,tonemapping_fragment:bf,tonemapping_pars_fragment:wf,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:Cf,uv_pars_vertex:Rf,uv_vertex:Lf,worldpos_vertex:Pf,background_vert:Df,background_frag:Uf,backgroundCube_vert:If,backgroundCube_frag:Nf,cube_vert:Ff,cube_frag:Of,depth_vert:zf,depth_frag:Bf,distanceRGBA_vert:kf,distanceRGBA_frag:Hf,equirect_vert:Gf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:Yf,meshbasic_frag:$f,meshlambert_vert:qf,meshlambert_frag:jf,meshmatcap_vert:Zf,meshmatcap_frag:Kf,meshnormal_vert:Jf,meshnormal_frag:Qf,meshphong_vert:ep,meshphong_frag:tp,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:cp,sprite_vert:dp,sprite_frag:up},de={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},en={basic:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Pt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Pt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Pt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Pt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Pt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Pt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Pt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Pt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Pt([de.common,de.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Pt([de.lights,de.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};en.physical={uniforms:Pt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ks={r:0,b:0,g:0};function hp(i,e,t,n,s,r,o){const a=new je(0);let l=r===!0?0:1,c,d,u=null,f=0,m=null;function g(p,h){let x=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_r)?(d===void 0&&(d=new At(new gs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ki(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=et.getTransfer(v.colorSpace)!==nt,(u!==v||f!==v.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new At(new lo(2,2),new Un({name:"BackgroundMaterial",uniforms:ki(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(ks,n0(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function fp(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,d=!1;function u(P,O,G,j,q){let Z=!1;if(o){const $=_(j,G,O);c!==$&&(c=$,m(c.object)),Z=h(P,j,G,q),Z&&x(P,j,G,q)}else{const $=O.wireframe===!0;(c.geometry!==j.id||c.program!==G.id||c.wireframe!==$)&&(c.geometry=j.id,c.program=G.id,c.wireframe=$,Z=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,F(P,O,G,j),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,O,G){const j=G.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let Z=q[O.id];Z===void 0&&(Z={},q[O.id]=Z);let $=Z[j];return $===void 0&&($=p(f()),Z[j]=$),$}function p(P){const O=[],G=[],j=[];for(let q=0;q<s;q++)O[q]=0,G[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:j,object:P,attributes:{},index:null}}function h(P,O,G,j){const q=c.attributes,Z=O.attributes;let $=0;const ne=G.getAttributes();for(const re in ne)if(ne[re].location>=0){const J=q[re];let le=Z[re];if(le===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;$++}return c.attributesNum!==$||c.index!==j}function x(P,O,G,j){const q={},Z=O.attributes;let $=0;const ne=G.getAttributes();for(const re in ne)if(ne[re].location>=0){let J=Z[re];J===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),q[re]=le,$++}c.attributes=q,c.attributesNum=$,c.index=j}function v(){const P=c.newAttributes;for(let O=0,G=P.length;O<G;O++)P[O]=0}function E(P){L(P,0)}function L(P,O){const G=c.newAttributes,j=c.enabledAttributes,q=c.attributeDivisors;G[P]=1,j[P]===0&&(i.enableVertexAttribArray(P),j[P]=1),q[P]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),q[P]=O)}function C(){const P=c.newAttributes,O=c.enabledAttributes;for(let G=0,j=O.length;G<j;G++)O[G]!==P[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function A(P,O,G,j,q,Z,$){$===!0?i.vertexAttribIPointer(P,O,G,q,Z):i.vertexAttribPointer(P,O,G,j,q,Z)}function F(P,O,G,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=j.attributes,Z=G.getAttributes(),$=O.defaultAttributeValues;for(const ne in Z){const re=Z[ne];if(re.location>=0){let X=q[ne];if(X===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const J=X.normalized,le=X.itemSize,ye=t.get(X);if(ye===void 0)continue;const Se=ye.buffer,De=ye.type,k=ye.bytesPerElement,he=n.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||X.gpuType===Bc);if(X.isInterleavedBufferAttribute){const Ne=X.data,I=Ne.stride,Ae=X.offset;if(Ne.isInstancedInterleavedBuffer){for(let ce=0;ce<re.locationSize;ce++)L(re.location+ce,Ne.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let ce=0;ce<re.locationSize;ce++)E(re.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ce=0;ce<re.locationSize;ce++)A(re.location+ce,le/re.locationSize,De,J,I*k,(Ae+le/re.locationSize*ce)*k,he)}else{if(X.isInstancedBufferAttribute){for(let Ne=0;Ne<re.locationSize;Ne++)L(re.location+Ne,X.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ne=0;Ne<re.locationSize;Ne++)E(re.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ne=0;Ne<re.locationSize;Ne++)A(re.location+Ne,le/re.locationSize,De,J,le*k,le/re.locationSize*Ne*k,he)}}else if($!==void 0){const J=$[ne];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(re.location,J);break;case 3:i.vertexAttrib3fv(re.location,J);break;case 4:i.vertexAttrib4fv(re.location,J);break;default:i.vertexAttrib1fv(re.location,J)}}}}C()}function y(){B();for(const P in a){const O=a[P];for(const G in O){const j=O[G];for(const q in j)g(j[q].object),delete j[q];delete O[G]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const G in O){const j=O[G];for(const q in j)g(j[q].object),delete j[q];delete O[G]}delete a[P.id]}function N(P){for(const O in a){const G=a[O];if(G[P.id]===void 0)continue;const j=G[P.id];for(const q in j)g(j[q].object),delete j[q];delete G[P.id]}}function B(){K(),d=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:K,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:E,disableUnusedAttributes:C}}function pp(i,e,t,n){const s=n.isWebGL2;let r;function o(d){r=d}function a(d,u){i.drawArrays(r,d,u),t.update(u,r,1)}function l(d,u,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,d,u,f),t.update(u,r,f)}function c(d,u,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(d[g],u[g]);else{m.multiDrawArraysWEBGL(r,d,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function mp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||e.has("OES_texture_float"),L=v&&E,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:C}}function gp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Tn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,h=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{const x=r?0:n,v=x*4;let E=h.clippingState||null;l.value=E,E=d(g,f,v,m);for(let L=0;L!==v;++L)E[L]=t[L];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,E=m;v!==_;++v,E+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function _p(i){let e=new WeakMap;function t(o,a){return a===Sa?o.mapping=Fi:a===Ea&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sa||a===Ea)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cu(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class a0 extends i0{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,wl=[.125,.215,.35,.446,.526,.582],Yn=20,Qr=new a0,Tl=new je;let ea=null,ta=0,na=0;const Vn=(1+Math.sqrt(5))/2,xi=1/Vn,Al=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Vn,xi),new M(0,Vn,-xi),new M(xi,0,Vn),new M(-xi,0,Vn),new M(Vn,xi,0),new M(-Vn,xi,0)];class Cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,na),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:as,format:Yt,colorSpace:vn,depthBuffer:!1},s=Rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vp(r)),this._blurMaterial=xp(r,e,t)}return s}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,s){const a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Tl),d.toneMapping=Pn,d.autoClear=!1;const m=new ms({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new At(new gs,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Tl),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Hs(s,x*v,h>2?v:0,v,v),d.setRenderTarget(s),_&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fi||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Al[(s-1)%Al.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new At(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),_=r/g,p=isFinite(r)?1+Math.floor(d*_):Yn;p>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);const h=[];let x=0;for(let A=0;A<Yn;++A){const F=A/_,y=Math.exp(-F*F/2);h.push(y),A===0?x+=y:A<p&&(x+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const E=this._sizeLods[s],L=3*E*(s>v-Ai?s-v+Ai:0),C=4*(this._cubeSize-E);Hs(t,L,C,3*E,2*E),l.setRenderTarget(t),l.render(u,Qr)}}function vp(i){const e=[],t=[],n=[];let s=i;const r=i-Ai+1+wl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ai?l=wl[o-i+Ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,_=3,p=2,h=1,x=new Float32Array(_*g*m),v=new Float32Array(p*g*m),E=new Float32Array(h*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,F=C>2?0:-1,y=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];x.set(y,_*g*C),v.set(f,p*g*C);const b=[C,C,C,C,C,C];E.set(b,h*g*C)}const L=new tt;L.setAttribute("position",new yt(x,_)),L.setAttribute("uv",new yt(v,p)),L.setAttribute("faceIndex",new yt(E,h)),e.push(L),s>Ai&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rl(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xp(i,e,t){const n=new Float32Array(Yn),s=new M(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:co(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ll(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Pl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function yp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sa||l===Ea,d=l===Fi||l===Oi;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Cl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||d&&u&&s(u)){t===null&&(t=new Cl(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sp(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,E=x.length;v<E;v+=3){const L=x[v+0],C=x[v+1],A=x[v+2];f.push(L,C,C,A,A,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const L=v+0,C=v+1,A=v+2;f.push(L,C,C,A,A,L)}}else return;const p=new(jc(f)?t0:e0)(f,1);p.version=_;const h=r.get(u);h&&e.remove(h),r.set(u,p)}function d(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Ep(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,h;if(s)p=i,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,g,a,m*l,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/l,g[h]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let h=0;for(let x=0;x<_;x++)h+=g[x];t.update(h,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=f}function bp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wp(i,e){return i[0]-e[0]}function Tp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ap(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new it,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(d);if(p===void 0||p.count!==_){let O=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,L=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let y=0;v===!0&&(y=1),E===!0&&(y=2),L===!0&&(y=3);let b=d.attributes.position.count*y,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*N*4*_),K=new Jc(B,b,N,_);K.type=Cn,K.needsUpdate=!0;const P=y*4;for(let G=0;G<_;G++){const j=C[G],q=A[G],Z=F[G],$=b*N*4*G;for(let ne=0;ne<j.count;ne++){const re=ne*P;v===!0&&(o.fromBufferAttribute(j,ne),B[$+re+0]=o.x,B[$+re+1]=o.y,B[$+re+2]=o.z,B[$+re+3]=0),E===!0&&(o.fromBufferAttribute(q,ne),B[$+re+4]=o.x,B[$+re+5]=o.y,B[$+re+6]=o.z,B[$+re+7]=0),L===!0&&(o.fromBufferAttribute(Z,ne),B[$+re+8]=o.x,B[$+re+9]=o.y,B[$+re+10]=o.z,B[$+re+11]=Z.itemSize===4?o.w:1)}}p={count:_,texture:K,size:new ge(b,N)},r.set(d,p),d.addEventListener("dispose",O)}let h=0;for(let v=0;v<f.length;v++)h+=f[v];const x=d.morphTargetsRelative?1:1-h;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[d.id]=_}for(let E=0;E<g;E++){const L=_[E];L[0]=E,L[1]=f[E]}_.sort(Tp);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(wp);const p=d.morphAttributes.position,h=d.morphAttributes.normal;let x=0;for(let E=0;E<8;E++){const L=a[E],C=L[0],A=L[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&d.getAttribute("morphTarget"+E)!==p[C]&&d.setAttribute("morphTarget"+E,p[C]),h&&d.getAttribute("morphNormal"+E)!==h[C]&&d.setAttribute("morphNormal"+E,h[C]),s[E]=A,x+=A):(p&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),h&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),s[E]=0)}const v=d.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Cp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class o0 extends Rt{constructor(e,t,n,s,r,o,a,l,c,d){if(d=d!==void 0?d:jn,d!==jn&&d!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===jn&&(n=An),n===void 0&&d===zi&&(n=qn),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const l0=new Rt,c0=new o0(1,1);c0.compareFunction=qc;const d0=new Jc,u0=new uu,h0=new s0,Dl=[],Ul=[],Il=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Dl[s];if(r===void 0&&(r=new Float32Array(s),Dl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yr(i,e){let t=Ul[e];t===void 0&&(t=new Int32Array(e),Ul[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Up(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Fl.set(n),i.uniformMatrix2fv(this.addr,!1,Fl),mt(t,n)}}function Ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),mt(t,n)}}function Np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),mt(t,n)}}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Wp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?c0:l0;t.setTexture2D(e||r,s)}function Xp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||u0,s)}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||h0,s)}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||d0,s)}function qp(i){switch(i){case 5126:return Rp;case 35664:return Lp;case 35665:return Pp;case 35666:return Dp;case 35674:return Up;case 35675:return Ip;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return zp;case 35669:case 35673:return Bp;case 5125:return kp;case 36294:return Hp;case 36295:return Gp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return $p}}function jp(i,e){i.uniform1fv(this.addr,e)}function Zp(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Kp(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jp(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Qp(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function em(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tm(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nm(i,e){i.uniform1iv(this.addr,e)}function im(i,e){i.uniform2iv(this.addr,e)}function sm(i,e){i.uniform3iv(this.addr,e)}function rm(i,e){i.uniform4iv(this.addr,e)}function am(i,e){i.uniform1uiv(this.addr,e)}function om(i,e){i.uniform2uiv(this.addr,e)}function lm(i,e){i.uniform3uiv(this.addr,e)}function cm(i,e){i.uniform4uiv(this.addr,e)}function dm(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||l0,r[o])}function um(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||u0,r[o])}function hm(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||h0,r[o])}function fm(i,e,t){const n=this.cache,s=e.length,r=yr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||d0,r[o])}function pm(i){switch(i){case 5126:return jp;case 35664:return Zp;case 35665:return Kp;case 35666:return Jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qp(t.type)}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class _m{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ol(i,e){i.seq.push(e),i.map[e.id]=e}function vm(i,e,t){const n=i.name,s=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),o=ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ol(t,c===void 0?new mm(a,i,e):new gm(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new _m(a),Ol(t,u)),t=u}}}class ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xm=37297;let ym=0;function Mm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Sm(i){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(i);let n;switch(e===t?n="":e===dr&&t===cr?n="LinearDisplayP3ToLinearSRGB":e===cr&&t===dr&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case vr:return[n,"LinearTransferOETF"];case vt:case io:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mm(i.getShaderSource(e),o)}else return s}function Em(i,e){const t=Sm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bm(i,e){let t;switch(e){case Sd:t="Linear";break;case Ed:t="Reinhard";break;case bd:t="OptimizedCineon";break;case Oc:t="ACESFilmic";break;case Td:t="AgX";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ci).join(`
`)}function Am(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ci(i){return i!==""}function kl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(i){return i.replace(Rm,Pm)}const Lm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pm(i,e){let t=He[e];if(t===void 0){const n=Lm.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ca(t)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(Dm,Um)}function Um(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Im(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case _r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Om(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fc:e="ENVMAP_BLENDING_MULTIPLY";break;case yd:e="ENVMAP_BLENDING_MIX";break;case Md:e="ENVMAP_BLENDING_ADD";break}return e}function zm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Im(t),c=Nm(t),d=Fm(t),u=Om(t),f=zm(t),m=t.isWebGL2?"":wm(t),g=Tm(t),_=Am(r),p=s.createProgram();let h,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ci).join(`
`),h.length>0&&(h+=`
`),x=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ci).join(`
`),x.length>0&&(x+=`
`)):(h=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),x=[m,Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?He.tonemapping_pars_fragment:"",t.toneMapping!==Pn?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),o=Ca(o),o=kl(o,t),o=Hl(o,t),a=Ca(a),a=kl(a,t),a=Hl(a,t),o=Gl(o),a=Gl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=v+h+o,L=v+x+a,C=zl(s,s.VERTEX_SHADER,E),A=zl(s,s.FRAGMENT_SHADER,L);s.attachShader(p,C),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function F(B){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(C).trim(),O=s.getShaderInfoLog(A).trim();let G=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,C,A);else{const q=Bl(s,C,"vertex"),Z=Bl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+q+`
`+Z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||O==="")&&(j=!1);j&&(B.diagnostics={runnable:G,programLog:K,vertexShader:{log:P,prefix:h},fragmentShader:{log:O,prefix:x}})}s.deleteShader(C),s.deleteShader(A),y=new ir(s,p),b=Cm(s,p)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,xm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let km=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gm(e),t.set(e,n)),n}}class Gm{constructor(e){this.id=km++,this.code=e,this.usedTimes=0}}function Vm(i,e,t,n,s,r,o){const a=new ao,l=new Hm,c=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,b,N,B,K){const P=B.fog,O=K.geometry,G=y.isMeshStandardMaterial?B.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),q=j&&j.mapping===_r?j.image.height:null,Z=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=$!==void 0?$.length:0;let re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let X,J,le,ye;if(Z){const lt=en[Z];X=lt.vertexShader,J=lt.fragmentShader}else X=y.vertexShader,J=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const Se=i.getRenderTarget(),De=K.isInstancedMesh===!0,k=K.isBatchedMesh===!0,he=!!y.map,Ne=!!y.matcap,I=!!j,Ae=!!y.aoMap,ce=!!y.lightMap,me=!!y.bumpMap,ue=!!y.normalMap,Ze=!!y.displacementMap,Le=!!y.emissiveMap,T=!!y.metalnessMap,S=!!y.roughnessMap,H=y.anisotropy>0,ie=y.clearcoat>0,ee=y.iridescence>0,se=y.sheen>0,Ee=y.transmission>0,pe=H&&!!y.anisotropyMap,Me=ie&&!!y.clearcoatMap,Pe=ie&&!!y.clearcoatNormalMap,Be=ie&&!!y.clearcoatRoughnessMap,Q=ee&&!!y.iridescenceMap,Je=ee&&!!y.iridescenceThicknessMap,Ge=se&&!!y.sheenColorMap,Fe=se&&!!y.sheenRoughnessMap,Te=!!y.specularMap,_e=!!y.specularColorMap,R=!!y.specularIntensityMap,ae=Ee&&!!y.transmissionMap,be=Ee&&!!y.thicknessMap,xe=!!y.gradientMap,te=!!y.alphaMap,D=y.alphaTest>0,oe=!!y.alphaHash,fe=!!y.extensions,Ue=!!O.attributes.uv1,Ce=!!O.attributes.uv2,$e=!!O.attributes.uv3;let qe=Pn;return y.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(qe=i.toneMapping),{isWebGL2:d,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:J,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:k,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:vn,map:he,matcap:Ne,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:q,aoMap:Ae,lightMap:ce,bumpMap:me,normalMap:ue,displacementMap:f&&Ze,emissiveMap:Le,normalMapObjectSpace:ue&&y.normalMapType===zd,normalMapTangentSpace:ue&&y.normalMapType===$c,metalnessMap:T,roughnessMap:S,anisotropy:H,anisotropyMap:pe,clearcoat:ie,clearcoatMap:Me,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Be,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Je,sheen:se,sheenColorMap:Ge,sheenRoughnessMap:Fe,specularMap:Te,specularColorMap:_e,specularIntensityMap:R,transmission:Ee,transmissionMap:ae,thicknessMap:be,gradientMap:xe,opaque:y.transparent===!1&&y.blending===Li,alphaMap:te,alphaTest:D,alphaHash:oe,combine:y.combine,mapUv:he&&_(y.map.channel),aoMapUv:Ae&&_(y.aoMap.channel),lightMapUv:ce&&_(y.lightMap.channel),bumpMapUv:me&&_(y.bumpMap.channel),normalMapUv:ue&&_(y.normalMap.channel),displacementMapUv:Ze&&_(y.displacementMap.channel),emissiveMapUv:Le&&_(y.emissiveMap.channel),metalnessMapUv:T&&_(y.metalnessMap.channel),roughnessMapUv:S&&_(y.roughnessMap.channel),anisotropyMapUv:pe&&_(y.anisotropyMap.channel),clearcoatMapUv:Me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(y.sheenRoughnessMap.channel),specularMapUv:Te&&_(y.specularMap.channel),specularColorMapUv:_e&&_(y.specularColorMap.channel),specularIntensityMapUv:R&&_(y.specularIntensityMap.channel),transmissionMapUv:ae&&_(y.transmissionMap.channel),thicknessMapUv:be&&_(y.thicknessMap.channel),alphaMapUv:te&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ue||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Ce,vertexUv3s:$e,pointsUvs:K.isPoints===!0&&!!O.attributes.uv&&(he||te),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:he&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ht,flipSided:y.side===Ot,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:fe&&y.extensions.derivatives===!0,extensionFragDepth:fe&&y.extensions.fragDepth===!0,extensionDrawBuffers:fe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(x(b,y),v(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){const b=g[y.type];let N;if(b){const B=en[b];N=bu.clone(B.uniforms)}else N=y.uniforms;return N}function L(y,b){let N;for(let B=0,K=c.length;B<K;B++){const P=c[B];if(P.cacheKey===b){N=P,++N.usedTimes;break}}return N===void 0&&(N=new Bm(i,b,y,r),c.push(N)),N}function C(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:F}}function Wm(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,m,g,_,p){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=_,h.group=p),e++,h}function a(u,f,m,g,_,p){const h=o(u,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(u,f,m,g,_,p){const h=o(u,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||Xm),n.length>1&&n.sort(f||Wl),s.length>1&&s.sort(f||Wl)}function d(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function Ym(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Xl,i.set(n,[o])):s>=r.length?(o=new Xl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new je};break;case"SpotLight":t={position:new M,direction:new M,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new M,halfWidth:new M,halfHeight:new M};break}return i[e.id]=t,t}}}function qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jm=0;function Zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Km(i,e){const t=new $m,n=qm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new M);const r=new M,o=new st,a=new st;function l(d,u){let f=0,m=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let _=0,p=0,h=0,x=0,v=0,E=0,L=0,C=0,A=0,F=0,y=0;d.sort(Zm);const b=u===!0?Math.PI:1;for(let B=0,K=d.length;B<K;B++){const P=d[B],O=P.color,G=P.intensity,j=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*G*b,m+=O.g*G*b,g+=O.b*G*b;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(P.sh.coefficients[Z],G);y++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const $=P.shadow,ne=n.get(P);ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,s.directionalShadow[_]=ne,s.directionalShadowMap[_]=q,s.directionalShadowMatrix[_]=P.shadow.matrix,E++}s.directional[_]=Z,_++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(G*b),Z.distance=j,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,s.spot[h]=Z;const $=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&F++),s.spotLightMatrix[h]=$.matrix,P.castShadow){const ne=n.get(P);ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,s.spotShadow[h]=ne,s.spotShadowMap[h]=q,C++}h++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(O).multiplyScalar(G),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=Z,x++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*b),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const $=P.shadow,ne=n.get(P);ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,ne.shadowCameraNear=$.camera.near,ne.shadowCameraFar=$.camera.far,s.pointShadow[p]=ne,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=P.shadow.matrix,L++}s.point[p]=Z,p++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(G*b),Z.groundColor.copy(P.groundColor).multiplyScalar(G*b),s.hemi[v]=Z,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==_||N.pointLength!==p||N.spotLength!==h||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==E||N.numPointShadows!==L||N.numSpotShadows!==C||N.numSpotMaps!==A||N.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=h,s.rectArea.length=x,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+A-F,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=y,N.directionalLength=_,N.pointLength=p,N.spotLength=h,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=E,N.numPointShadows=L,N.numSpotShadows=C,N.numSpotMaps=A,N.numLightProbes=y,s.version=jm++)}function c(d,u){let f=0,m=0,g=0,_=0,p=0;const h=u.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){const E=d[x];if(E.isDirectionalLight){const L=s.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(h),f++}else if(E.isSpotLight){const L=s.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(h),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(h),g++}else if(E.isRectAreaLight){const L=s.rectArea[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(h),a.identity(),o.copy(E.matrixWorld),o.premultiply(h),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const L=s.point[m];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(h),m++}else if(E.isHemisphereLight){const L=s.hemi[p];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function Yl(i,e){const t=new Km(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jm(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Yl(i,e),t.set(r,[l])):o>=a.length?(l=new Yl(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Qm extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
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
}`;function i1(i,e,t){let n=new oo;const s=new ge,r=new ge,o=new it,a=new Qm({depthPacking:Od}),l=new e1,c={},d=t.maxTextureSize,u={[_n]:Ot,[Ot]:_n,[Ht]:Ht},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:t1,fragmentShader:n1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new tt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let h=this.type;this.render=function(C,A,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ln),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=h!==hn&&this.type===hn,P=h===hn&&this.type!==hn;for(let O=0,G=C.length;O<G;O++){const j=C[O],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Z=q.getFrameExtents();if(s.multiply(Z),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,q.mapSize.y=r.y)),q.map===null||K===!0||P===!0){const ne=this.type!==hn?{minFilter:Mt,magFilter:Mt}:{};q.map!==null&&q.map.dispose(),q.map=new Jn(s.x,s.y,ne),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const $=q.getViewportCount();for(let ne=0;ne<$;ne++){const re=q.getViewport(ne);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),B.viewport(o),q.updateMatrices(j,ne),n=q.getFrustum(),E(A,F,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===hn&&x(q,F),q.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(y,b,N)};function x(C,A){const F=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,F,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,F,m,_,null)}function v(C,A,F,y){let b=null;const N=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)b=N;else if(b=F.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=b.uuid,K=A.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let O=P[K];O===void 0&&(O=b.clone(),P[K]=O,A.addEventListener("dispose",L)),b=O}if(b.visible=A.visible,b.wireframe=A.wireframe,y===hn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=F}return b}function E(C,A,F,y,b){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===hn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const K=e.update(C),P=C.material;if(Array.isArray(P)){const O=K.groups;for(let G=0,j=O.length;G<j;G++){const q=O[G],Z=P[q.materialIndex];if(Z&&Z.visible){const $=v(C,Z,y,b);C.onBeforeShadow(i,C,A,F,K,$,q),i.renderBufferDirect(F,null,K,$,C,q),C.onAfterShadow(i,C,A,F,K,$,q)}}}else if(P.visible){const O=v(C,P,y,b);C.onBeforeShadow(i,C,A,F,K,O,null),i.renderBufferDirect(F,null,K,O,C,null),C.onAfterShadow(i,C,A,F,K,O,null)}}const B=C.children;for(let K=0,P=B.length;K<P;K++)E(B[K],A,F,y,b)}function L(C){C.target.removeEventListener("dispose",L);for(const F in c){const y=c[F],b=C.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function s1(i,e,t){const n=t.isWebGL2;function s(){let D=!1;const oe=new it;let fe=null;const Ue=new it(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!D&&(i.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,$e,qe,at,lt){lt===!0&&(Ce*=at,$e*=at,qe*=at),oe.set(Ce,$e,qe,at),Ue.equals(oe)===!1&&(i.clearColor(Ce,$e,qe,at),Ue.copy(oe))},reset:function(){D=!1,fe=null,Ue.set(-1,0,0,0)}}}function r(){let D=!1,oe=null,fe=null,Ue=null;return{setTest:function(Ce){Ce?k(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Ce){oe!==Ce&&!D&&(i.depthMask(Ce),oe=Ce)},setFunc:function(Ce){if(fe!==Ce){switch(Ce){case fd:i.depthFunc(i.NEVER);break;case pd:i.depthFunc(i.ALWAYS);break;case md:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case gd:i.depthFunc(i.EQUAL);break;case _d:i.depthFunc(i.GEQUAL);break;case vd:i.depthFunc(i.GREATER);break;case xd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){Ue!==Ce&&(i.clearDepth(Ce),Ue=Ce)},reset:function(){D=!1,oe=null,fe=null,Ue=null}}}function o(){let D=!1,oe=null,fe=null,Ue=null,Ce=null,$e=null,qe=null,at=null,lt=null;return{setTest:function(Ke){D||(Ke?k(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!D&&(i.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,ut,Qt){(fe!==Ke||Ue!==ut||Ce!==Qt)&&(i.stencilFunc(Ke,ut,Qt),fe=Ke,Ue=ut,Ce=Qt)},setOp:function(Ke,ut,Qt){($e!==Ke||qe!==ut||at!==Qt)&&(i.stencilOp(Ke,ut,Qt),$e=Ke,qe=ut,at=Qt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){lt!==Ke&&(i.clearStencil(Ke),lt=Ke)},reset:function(){D=!1,oe=null,fe=null,Ue=null,Ce=null,$e=null,qe=null,at=null,lt=null}}}const a=new s,l=new r,c=new o,d=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,h=!1,x=null,v=null,E=null,L=null,C=null,A=null,F=null,y=new je(0,0,0),b=0,N=!1,B=null,K=null,P=null,O=null,G=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),q=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=Z>=2);let ne=null,re={};const X=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),le=new it().fromArray(X),ye=new it().fromArray(J);function Se(D,oe,fe,Ue){const Ce=new Uint8Array(4),$e=i.createTexture();i.bindTexture(D,$e),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<fe;qe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(oe+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return $e}const De={};De[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(i.DEPTH_TEST),l.setFunc(ar),Le(!1),T(Ro),k(i.CULL_FACE),ue(Ln);function k(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function he(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Ne(D,oe){return m[D]!==oe?(i.bindFramebuffer(D,oe),m[D]=oe,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function I(D,oe){let fe=_,Ue=!1;if(D)if(fe=g.get(oe),fe===void 0&&(fe=[],g.set(oe,fe)),D.isWebGLMultipleRenderTargets){const Ce=D.texture;if(fe.length!==Ce.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,qe=Ce.length;$e<qe;$e++)fe[$e]=i.COLOR_ATTACHMENT0+$e;fe.length=Ce.length,Ue=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,Ue=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Ae(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const ce={[Xn]:i.FUNC_ADD,[J0]:i.FUNC_SUBTRACT,[Q0]:i.FUNC_REVERSE_SUBTRACT};if(n)ce[Do]=i.MIN,ce[Uo]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ce[Do]=D.MIN_EXT,ce[Uo]=D.MAX_EXT)}const me={[ed]:i.ZERO,[td]:i.ONE,[nd]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[sd]:i.DST_ALPHA,[id]:i.ONE_MINUS_SRC_COLOR,[Ma]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[rd]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[ud]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(D,oe,fe,Ue,Ce,$e,qe,at,lt,Ke){if(D===Ln){h===!0&&(he(i.BLEND),h=!1);return}if(h===!1&&(k(i.BLEND),h=!0),D!==K0){if(D!==x||Ke!==N){if((v!==Xn||C!==Xn)&&(i.blendEquation(i.FUNC_ADD),v=Xn,C=Xn),Ke)switch(D){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,L=null,A=null,F=null,y.set(0,0,0),b=0,x=D,N=Ke}return}Ce=Ce||oe,$e=$e||fe,qe=qe||Ue,(oe!==v||Ce!==C)&&(i.blendEquationSeparate(ce[oe],ce[Ce]),v=oe,C=Ce),(fe!==E||Ue!==L||$e!==A||qe!==F)&&(i.blendFuncSeparate(me[fe],me[Ue],me[$e],me[qe]),E=fe,L=Ue,A=$e,F=qe),(at.equals(y)===!1||lt!==b)&&(i.blendColor(at.r,at.g,at.b,lt),y.copy(at),b=lt),x=D,N=!1}function Ze(D,oe){D.side===Ht?he(i.CULL_FACE):k(i.CULL_FACE);let fe=D.side===Ot;oe&&(fe=!fe),Le(fe),D.blending===Li&&D.transparent===!1?ue(Ln):ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ue=D.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function T(D){D!==j0?(k(i.CULL_FACE),D!==K&&(D===Ro?i.cullFace(i.BACK):D===Z0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),K=D}function S(D){D!==P&&(q&&i.lineWidth(D),P=D)}function H(D,oe,fe){D?(k(i.POLYGON_OFFSET_FILL),(O!==oe||G!==fe)&&(i.polygonOffset(oe,fe),O=oe,G=fe)):he(i.POLYGON_OFFSET_FILL)}function ie(D){D?k(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function ee(D){D===void 0&&(D=i.TEXTURE0+j-1),ne!==D&&(i.activeTexture(D),ne=D)}function se(D,oe,fe){fe===void 0&&(ne===null?fe=i.TEXTURE0+j-1:fe=ne);let Ue=re[fe];Ue===void 0&&(Ue={type:void 0,texture:void 0},re[fe]=Ue),(Ue.type!==D||Ue.texture!==oe)&&(ne!==fe&&(i.activeTexture(fe),ne=fe),i.bindTexture(D,oe||De[D]),Ue.type=D,Ue.texture=oe)}function Ee(){const D=re[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(D){le.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),le.copy(D))}function ae(D){ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function be(D,oe){let fe=u.get(oe);fe===void 0&&(fe=new WeakMap,u.set(oe,fe));let Ue=fe.get(D);Ue===void 0&&(Ue=i.getUniformBlockIndex(oe,D.name),fe.set(D,Ue))}function xe(D,oe){const Ue=u.get(oe).get(D);d.get(oe)!==Ue&&(i.uniformBlockBinding(oe,Ue,D.__bindingPointIndex),d.set(oe,Ue))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,re={},m={},g=new WeakMap,_=[],p=null,h=!1,x=null,v=null,E=null,L=null,C=null,A=null,F=null,y=new je(0,0,0),b=0,N=!1,B=null,K=null,P=null,O=null,G=null,le.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:k,disable:he,bindFramebuffer:Ne,drawBuffers:I,useProgram:Ae,setBlending:ue,setMaterial:Ze,setFlipSided:Le,setCullFace:T,setLineWidth:S,setPolygonOffset:H,setScissorTest:ie,activeTexture:ee,bindTexture:se,unbindTexture:Ee,compressedTexImage2D:pe,compressedTexImage3D:Me,texImage2D:Te,texImage3D:_e,updateUBOMapping:be,uniformBlockBinding:xe,texStorage2D:Ge,texStorage3D:Fe,texSubImage2D:Pe,texSubImage3D:Be,compressedTexSubImage2D:Q,compressedTexSubImage3D:Je,scissor:R,viewport:ae,reset:te}}function r1(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return m?new OffscreenCanvas(T,S):os("canvas")}function _(T,S,H,ie){let ee=1;if((T.width>ie||T.height>ie)&&(ee=ie/Math.max(T.width,T.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=S?hr:Math.floor,Ee=se(ee*T.width),pe=se(ee*T.height);u===void 0&&(u=g(Ee,pe));const Me=H?g(Ee,pe):u;return Me.width=Ee,Me.height=pe,Me.getContext("2d").drawImage(T,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ee+"x"+pe+")."),Me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Aa(T.width)&&Aa(T.height)}function h(T){return a?!1:T.wrapS!==It||T.wrapT!==It||T.minFilter!==Mt&&T.minFilter!==Wt}function x(T,S){return T.generateMipmaps&&S&&T.minFilter!==Mt&&T.minFilter!==Wt}function v(T){i.generateMipmap(T)}function E(T,S,H,ie,ee=!1){if(a===!1)return S;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=S;if(S===i.RED&&(H===i.FLOAT&&(se=i.R32F),H===i.HALF_FLOAT&&(se=i.R16F),H===i.UNSIGNED_BYTE&&(se=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(se=i.R8UI),H===i.UNSIGNED_SHORT&&(se=i.R16UI),H===i.UNSIGNED_INT&&(se=i.R32UI),H===i.BYTE&&(se=i.R8I),H===i.SHORT&&(se=i.R16I),H===i.INT&&(se=i.R32I)),S===i.RG&&(H===i.FLOAT&&(se=i.RG32F),H===i.HALF_FLOAT&&(se=i.RG16F),H===i.UNSIGNED_BYTE&&(se=i.RG8)),S===i.RGBA){const Ee=ee?lr:et.getTransfer(ie);H===i.FLOAT&&(se=i.RGBA32F),H===i.HALF_FLOAT&&(se=i.RGBA16F),H===i.UNSIGNED_BYTE&&(se=Ee===nt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function L(T,S,H){return x(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Mt&&T.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function C(T){return T===Mt||T===Io||T===Lr?i.NEAREST:i.LINEAR}function A(T){const S=T.target;S.removeEventListener("dispose",A),y(S),S.isVideoTexture&&d.delete(S)}function F(T){const S=T.target;S.removeEventListener("dispose",F),N(S)}function y(T){const S=n.get(T);if(S.__webglInit===void 0)return;const H=T.source,ie=f.get(H);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(T),Object.keys(ie).length===0&&f.delete(H)}n.remove(T)}function b(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const H=T.source,ie=f.get(H);delete ie[S.__cacheKey],o.memory.textures--}function N(T){const S=T.texture,H=n.get(T),ie=n.get(S);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let se=0;se<H.__webglFramebuffer[ee].length;se++)i.deleteFramebuffer(H.__webglFramebuffer[ee][se]);else i.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)i.deleteFramebuffer(H.__webglFramebuffer[ee]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,se=S.length;ee<se;ee++){const Ee=n.get(S[ee]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(S[ee])}n.remove(S),n.remove(T)}let B=0;function K(){B=0}function P(){const T=B;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function O(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function G(T,S){const H=n.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,T,S);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function j(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){le(H,T,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function q(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){le(H,T,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function Z(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ye(H,T,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const $={[or]:i.REPEAT,[It]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},ne={[Mt]:i.NEAREST,[Io]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Ad]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},re={[Bd]:i.NEVER,[Xd]:i.ALWAYS,[kd]:i.LESS,[qc]:i.LEQUAL,[Hd]:i.EQUAL,[Wd]:i.GEQUAL,[Gd]:i.GREATER,[Vd]:i.NOTEQUAL};function X(T,S,H){if(H?(i.texParameteri(T,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[S.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==It||S.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,C(S.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==Mt&&S.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Mt||S.minFilter!==Lr&&S.minFilter!==rs||S.type===Cn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function J(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));const ie=S.source;let ee=f.get(ie);ee===void 0&&(ee={},f.set(ie,ee));const se=O(S);if(se!==T.__cacheKey){ee[se]===void 0&&(ee[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[se].usedTimes++;const Ee=ee[T.__cacheKey];Ee!==void 0&&(ee[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(S)),T.__cacheKey=se,T.__webglTexture=ee[se].texture}return H}function le(T,S,H){let ie=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=i.TEXTURE_3D);const ee=J(T,S),se=S.source;t.bindTexture(ie,T.__webglTexture,i.TEXTURE0+H);const Ee=n.get(se);if(se.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);const pe=et.getPrimaries(et.workingColorSpace),Me=S.colorSpace===$t?null:et.getPrimaries(S.colorSpace),Pe=S.colorSpace===$t||pe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Be=h(S)&&p(S.image)===!1;let Q=_(S.image,Be,!1,s.maxTextureSize);Q=Le(S,Q);const Je=p(Q)||a,Ge=r.convert(S.format,S.colorSpace);let Fe=r.convert(S.type),Te=E(S.internalFormat,Ge,Fe,S.colorSpace,S.isVideoTexture);X(ie,S,Je);let _e;const R=S.mipmaps,ae=a&&S.isVideoTexture!==!0&&Te!==Xc,be=Ee.__version===void 0||ee===!0,xe=L(S,Q,Je);if(S.isDepthTexture)Te=i.DEPTH_COMPONENT,a?S.type===Cn?Te=i.DEPTH_COMPONENT32F:S.type===An?Te=i.DEPTH_COMPONENT24:S.type===qn?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:S.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===jn&&Te===i.DEPTH_COMPONENT&&S.type!==no&&S.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=An,Fe=r.convert(S.type)),S.format===zi&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,S.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=qn,Fe=r.convert(S.type))),be&&(ae?t.texStorage2D(i.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,Ge,Fe,null));else if(S.isDataTexture)if(R.length>0&&Je){ae&&be&&t.texStorage2D(i.TEXTURE_2D,xe,Te,R[0].width,R[0].height);for(let te=0,D=R.length;te<D;te++)_e=R[te],ae?t.texSubImage2D(i.TEXTURE_2D,te,0,0,_e.width,_e.height,Ge,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,te,Te,_e.width,_e.height,0,Ge,Fe,_e.data);S.generateMipmaps=!1}else ae?(be&&t.texStorage2D(i.TEXTURE_2D,xe,Te,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Ge,Fe,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,Ge,Fe,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Te,R[0].width,R[0].height,Q.depth);for(let te=0,D=R.length;te<D;te++)_e=R[te],S.format!==Yt?Ge!==null?ae?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,Q.depth,Ge,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Te,_e.width,_e.height,Q.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,Q.depth,Ge,Fe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Te,_e.width,_e.height,Q.depth,0,Ge,Fe,_e.data)}else{ae&&be&&t.texStorage2D(i.TEXTURE_2D,xe,Te,R[0].width,R[0].height);for(let te=0,D=R.length;te<D;te++)_e=R[te],S.format!==Yt?Ge!==null?ae?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,_e.width,_e.height,Ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(i.TEXTURE_2D,te,0,0,_e.width,_e.height,Ge,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,te,Te,_e.width,_e.height,0,Ge,Fe,_e.data)}else if(S.isDataArrayTexture)ae?(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Te,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Fe,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,Ge,Fe,Q.data);else if(S.isData3DTexture)ae?(be&&t.texStorage3D(i.TEXTURE_3D,xe,Te,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Fe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,Ge,Fe,Q.data);else if(S.isFramebufferTexture){if(be)if(ae)t.texStorage2D(i.TEXTURE_2D,xe,Te,Q.width,Q.height);else{let te=Q.width,D=Q.height;for(let oe=0;oe<xe;oe++)t.texImage2D(i.TEXTURE_2D,oe,Te,te,D,0,Ge,Fe,null),te>>=1,D>>=1}}else if(R.length>0&&Je){ae&&be&&t.texStorage2D(i.TEXTURE_2D,xe,Te,R[0].width,R[0].height);for(let te=0,D=R.length;te<D;te++)_e=R[te],ae?t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ge,Fe,_e):t.texImage2D(i.TEXTURE_2D,te,Te,Ge,Fe,_e);S.generateMipmaps=!1}else ae?(be&&t.texStorage2D(i.TEXTURE_2D,xe,Te,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Fe,Q)):t.texImage2D(i.TEXTURE_2D,0,Te,Ge,Fe,Q);x(S,Je)&&v(ie),Ee.__version=se.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ye(T,S,H){if(S.image.length!==6)return;const ie=J(T,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);const se=n.get(ee);if(ee.version!==se.__version||ie===!0){t.activeTexture(i.TEXTURE0+H);const Ee=et.getPrimaries(et.workingColorSpace),pe=S.colorSpace===$t?null:et.getPrimaries(S.colorSpace),Me=S.colorSpace===$t||Ee===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!Pe&&!Be?Q[te]=_(S.image[te],!1,!0,s.maxCubemapSize):Q[te]=Be?S.image[te].image:S.image[te],Q[te]=Le(S,Q[te]);const Je=Q[0],Ge=p(Je)||a,Fe=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),_e=E(S.internalFormat,Fe,Te,S.colorSpace),R=a&&S.isVideoTexture!==!0,ae=se.__version===void 0||ie===!0;let be=L(S,Je,Ge);X(i.TEXTURE_CUBE_MAP,S,Ge);let xe;if(Pe){R&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,_e,Je.width,Je.height);for(let te=0;te<6;te++){xe=Q[te].mipmaps;for(let D=0;D<xe.length;D++){const oe=xe[D];S.format!==Yt?Fe!==null?R?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D,0,0,oe.width,oe.height,Fe,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D,_e,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D,0,0,oe.width,oe.height,Fe,Te,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D,_e,oe.width,oe.height,0,Fe,Te,oe.data)}}}else{xe=S.mipmaps,R&&ae&&(xe.length>0&&be++,t.texStorage2D(i.TEXTURE_CUBE_MAP,be,_e,Q[0].width,Q[0].height));for(let te=0;te<6;te++)if(Be){R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,Fe,Te,Q[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,_e,Q[te].width,Q[te].height,0,Fe,Te,Q[te].data);for(let D=0;D<xe.length;D++){const fe=xe[D].image[te].image;R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D+1,0,0,fe.width,fe.height,Fe,Te,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D+1,_e,fe.width,fe.height,0,Fe,Te,fe.data)}}else{R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,Te,Q[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,_e,Fe,Te,Q[te]);for(let D=0;D<xe.length;D++){const oe=xe[D];R?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D+1,0,0,Fe,Te,oe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,D+1,_e,Fe,Te,oe.image[te])}}}x(S,Ge)&&v(i.TEXTURE_CUBE_MAP),se.__version=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Se(T,S,H,ie,ee,se){const Ee=r.convert(H.format,H.colorSpace),pe=r.convert(H.type),Me=E(H.internalFormat,Ee,pe,H.colorSpace);if(!n.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>se),Q=Math.max(1,S.height>>se);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,se,Me,Be,Q,S.depth,0,Ee,pe,null):t.texImage2D(ee,se,Me,Be,Q,0,Ee,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ue(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,n.get(H).__webglTexture,0,me(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,n.get(H).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||ue(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Cn?ie=i.DEPTH_COMPONENT32F:ee.type===An&&(ie=i.DEPTH_COMPONENT24));const se=me(S);ue(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ie,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ie,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const ie=me(S);H&&ue(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,S.width,S.height):ue(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const se=ie[ee],Ee=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),Me=E(se.internalFormat,Ee,pe,se.colorSpace),Pe=me(S);H&&ue(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Me,S.width,S.height):ue(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ie=n.get(S.depthTexture).__webglTexture,ee=me(S);if(S.depthTexture.format===jn)ue(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===zi)ue(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function he(T){const S=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");k(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=i.createRenderbuffer(),De(S.__webglDepthbuffer[ie],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),De(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(T,S,H){const ie=n.get(T);S!==void 0&&Se(ie.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&he(T)}function I(T){const S=T.texture,H=n.get(T),ie=n.get(S);T.addEventListener("dispose",F),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,Ee=p(T)||a;if(ee){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let Me=0;Me<S.mipmaps.length;Me++)H.__webglFramebuffer[pe][Me]=i.createFramebuffer()}else H.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)H.__webglFramebuffer[pe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){const pe=T.texture;for(let Me=0,Pe=pe.length;Me<Pe;Me++){const Be=n.get(pe[Me]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ue(T)===!1){const pe=se?S:[S];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Me=0;Me<pe.length;Me++){const Pe=pe[Me];H.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Me]);const Be=r.convert(Pe.format,Pe.colorSpace),Q=r.convert(Pe.type),Je=E(Pe.internalFormat,Be,Q,Pe.colorSpace,T.isXRRenderTarget===!0),Ge=me(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Je,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,H.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),De(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),X(i.TEXTURE_CUBE_MAP,S,Ee);for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Se(H.__webglFramebuffer[pe][Me],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else Se(H.__webglFramebuffer[pe],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(S,Ee)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const pe=T.texture;for(let Me=0,Pe=pe.length;Me<Pe;Me++){const Be=pe[Me],Q=n.get(Be);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),X(i.TEXTURE_2D,Be,Ee),Se(H.__webglFramebuffer,T,Be,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),x(Be,Ee)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ie.__webglTexture),X(pe,S,Ee),a&&S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Se(H.__webglFramebuffer[Me],T,S,i.COLOR_ATTACHMENT0,pe,Me);else Se(H.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,pe,0);x(S,Ee)&&v(pe),t.unbindTexture()}T.depthBuffer&&he(T)}function Ae(T){const S=p(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,ee=H.length;ie<ee;ie++){const se=H[ie];if(x(se,S)){const Ee=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(se).__webglTexture;t.bindTexture(Ee,pe),v(Ee),t.unbindTexture()}}}function ce(T){if(a&&T.samples>0&&ue(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,ie=T.height;let ee=i.COLOR_BUFFER_BIT;const se=[],Ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(T),Me=T.isWebGLMultipleRenderTargets===!0;if(Me)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){se.push(i.COLOR_ATTACHMENT0+Pe),T.depthBuffer&&se.push(Ee);const Be=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Be===!1&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),Me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),Me){const Q=n.get(S[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,H,ie,0,0,H,ie,ee,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]);const Be=n.get(S[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function me(T){return Math.min(s.maxSamples,T.samples)}function ue(T){const S=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(T){const S=o.render.frame;d.get(T)!==S&&(d.set(T,S),T.update())}function Le(T,S){const H=T.colorSpace,ie=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ta||H!==vn&&H!==$t&&(et.getTransfer(H)===nt?a===!1?e.has("EXT_sRGB")===!0&&ie===Yt?(T.format=Ta,T.minFilter=Wt,T.generateMipmaps=!1):S=Zc.sRGBToLinear(S):(ie!==Yt||ee!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=Ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ue}function a1(i,e,t){const n=t.isWebGL2;function s(r,o=$t){let a;const l=et.getTransfer(o);if(r===Dn)return i.UNSIGNED_BYTE;if(r===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Cd)return i.BYTE;if(r===Rd)return i.SHORT;if(r===no)return i.UNSIGNED_SHORT;if(r===Bc)return i.INT;if(r===An)return i.UNSIGNED_INT;if(r===Cn)return i.FLOAT;if(r===as)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ld)return i.ALPHA;if(r===Yt)return i.RGBA;if(r===Pd)return i.LUMINANCE;if(r===Dd)return i.LUMINANCE_ALPHA;if(r===jn)return i.DEPTH_COMPONENT;if(r===zi)return i.DEPTH_STENCIL;if(r===Ta)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ud)return i.RED;if(r===Gc)return i.RED_INTEGER;if(r===Id)return i.RG;if(r===Vc)return i.RG_INTEGER;if(r===Wc)return i.RGBA_INTEGER;if(r===Pr||r===Dr||r===Ur||r===Ir)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ur)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===No||r===Fo||r===Oo||r===zo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===No)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bo||r===ko)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bo)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ko)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ho||r===Go||r===Vo||r===Wo||r===Xo||r===Yo||r===$o||r===qo||r===jo||r===Zo||r===Ko||r===Jo||r===Qo||r===el)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ho)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Go)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$o)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ko)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===el)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nr||r===tl||r===nl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Nr)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nd||r===il||r===sl||r===rl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Nr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===il)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class o1 extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ct extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l1={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class c1 extends ti{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const x=[],v=[],E=new ge;let L=null;const C=new Ut;C.layers.enable(1),C.viewport=new it;const A=new Ut;A.layers.enable(2),A.viewport=new it;const F=[C,A],y=new o1;y.layers.enable(1),y.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=x[X];return J===void 0&&(J=new sa,x[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=x[X];return J===void 0&&(J=new sa,x[X]=J),J.getGripSpace()},this.getHand=function(X){let J=x[X];return J===void 0&&(J=new sa,x[X]=J),J.getHandSpace()};function B(X){const J=v.indexOf(X.inputSource);if(J===-1)return;const le=x[J];le!==void 0&&(le.update(X.inputSource,X.frame,c||o),le.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",P);for(let X=0;X<x.length;X++){const J=v[X];J!==null&&(v[X]=null,x[X].disconnect(J))}b=null,N=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,h=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",K),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Jn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,le=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?zi:jn,le=_.stencil?qn:An);const Se={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Jn(f.textureWidth,f.textureHeight,{format:Yt,type:Dn,depthTexture:new o0(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(X){for(let J=0;J<X.removed.length;J++){const le=X.removed[J],ye=v.indexOf(le);ye>=0&&(v[ye]=null,x[ye].disconnect(le))}for(let J=0;J<X.added.length;J++){const le=X.added[J];let ye=v.indexOf(le);if(ye===-1){for(let De=0;De<x.length;De++)if(De>=v.length){v.push(le),ye=De;break}else if(v[De]===null){v[De]=le,ye=De;break}if(ye===-1)break}const Se=x[ye];Se&&Se.connect(le)}}const O=new M,G=new M;function j(X,J,le){O.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(le.matrixWorld);const ye=O.distanceTo(G),Se=J.projectionMatrix.elements,De=le.projectionMatrix.elements,k=Se[14]/(Se[10]-1),he=Se[14]/(Se[10]+1),Ne=(Se[9]+1)/Se[5],I=(Se[9]-1)/Se[5],Ae=(Se[8]-1)/Se[0],ce=(De[8]+1)/De[0],me=k*Ae,ue=k*ce,Ze=ye/(-Ae+ce),Le=Ze*-Ae;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(Ze),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=k+Ze,S=he+Ze,H=me-Le,ie=ue+(ye-Le),ee=Ne*he/S*T,se=I*he/S*T;X.projectionMatrix.makePerspective(H,ie,ee,se,T,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;y.near=A.near=C.near=X.near,y.far=A.far=C.far=X.far,(b!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,N=y.far);const J=X.parent,le=y.cameras;q(y,J);for(let ye=0;ye<le.length;ye++)q(le[ye],J);le.length===2?j(y,C,A):y.projectionMatrix.copy(C.projectionMatrix),Z(X,y,J)};function Z(X,J,le){le===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Bi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let $=null;function ne(X,J){if(d=J.getViewerPose(c||o),g=J,d!==null){const le=d.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ye=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let Se=0;Se<le.length;Se++){const De=le[Se];let k=null;if(m!==null)k=m.getViewport(De);else{const Ne=u.getViewSubImage(f,De);k=Ne.viewport,Se===0&&(e.setRenderTargetTextures(h,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(h))}let he=F[Se];he===void 0&&(he=new Ut,he.layers.enable(Se),he.viewport=new it,F[Se]=he),he.matrix.fromArray(De.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(De.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(k.x,k.y,k.width,k.height),Se===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(he)}}for(let le=0;le<x.length;le++){const ye=v[le],Se=x[le];ye!==null&&Se!==void 0&&Se.update(ye,J,c||o)}$&&$(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const re=new r0;re.setAnimationLoop(ne),this.setAnimationLoop=function(X){$=X},this.dispose=function(){}}}function d1(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,n0(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,x,v,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),d(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,x,v):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ot&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ot&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*v,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,x,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*x,p.scale.value=v*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,x){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const x=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u1(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const E=v.program;n.uniformBlockBinding(x,E)}function c(x,v){let E=s[x.id];E===void 0&&(g(x),E=d(x),s[x.id]=E,x.addEventListener("dispose",p));const L=v.program;n.updateUBOMapping(x,L);const C=e.render.frame;r[x.id]!==C&&(f(x),r[x.id]=C)}function d(x){const v=u();x.__bindingPointIndex=v;const E=i.createBuffer(),L=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=s[x.id],E=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,A=E.length;C<A;C++){const F=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,b=F.length;y<b;y++){const N=F[y];if(m(N,C,y,L)===!0){const B=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let O=0;O<K.length;O++){const G=K[O],j=_(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+P,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,v,E,L){const C=x.value,A=v+"_"+E;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const F=L[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(x){const v=x.uniforms;let E=0;const L=16;for(let A=0,F=v.length;A<F;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,N=y.length;b<N;b++){const B=y[b],K=Array.isArray(B.value)?B.value:[B.value];for(let P=0,O=K.length;P<O;P++){const G=K[P],j=_(G),q=E%L;q!==0&&L-q<j.boundary&&(E+=L-q),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=j.storage}}}const C=E%L;return C>0&&(E+=L-C),x.__size=E,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class f0{constructor(e={}){const{canvas:t=au(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const v=this;let E=!1,L=0,C=0,A=null,F=-1,y=null;const b=new it,N=new it;let B=null;const K=new je(0);let P=0,O=t.width,G=t.height,j=1,q=null,Z=null;const $=new it(0,0,O,G),ne=new it(0,0,O,G);let re=!1;const X=new oo;let J=!1,le=!1,ye=null;const Se=new st,De=new ge,k=new M,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return A===null?j:1}let I=n;function Ae(w,z){for(let W=0;W<w.length;W++){const Y=w[W],V=t.getContext(Y,z);if(V!==null)return V}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${to}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),I=Ae(z,w),I===null)throw Ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ce,me,ue,Ze,Le,T,S,H,ie,ee,se,Ee,pe,Me,Pe,Be,Q,Je,Ge,Fe,Te,_e,R,ae;function be(){ce=new Mp(I),me=new mp(I,ce,e),ce.init(me),_e=new a1(I,ce,me),ue=new s1(I,ce,me),Ze=new bp(I),Le=new Wm,T=new r1(I,ce,ue,Le,me,_e,Ze),S=new _p(v),H=new yp(v),ie=new Pu(I,me),R=new fp(I,ce,ie,me),ee=new Sp(I,ie,Ze,R),se=new Cp(I,ee,ie,Ze),Ge=new Ap(I,me,T),Be=new gp(Le),Ee=new Vm(v,S,H,ce,me,R,Be),pe=new d1(v,Le),Me=new Ym,Pe=new Jm(ce,me),Je=new hp(v,S,H,ue,se,f,l),Q=new i1(v,se,me),ae=new u1(I,Ze,me,ue),Fe=new pp(I,ce,Ze,me),Te=new Ep(I,ce,Ze,me),Ze.programs=Ee.programs,v.capabilities=me,v.extensions=ce,v.properties=Le,v.renderLists=Me,v.shadowMap=Q,v.state=ue,v.info=Ze}be();const xe=new c1(v,I);this.xr=xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(O,G,!1))},this.getSize=function(w){return w.set(O,G)},this.setSize=function(w,z,W=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,G=z,t.width=Math.floor(w*j),t.height=Math.floor(z*j),W===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(O*j,G*j).floor()},this.setDrawingBufferSize=function(w,z,W){O=w,G=z,j=W,t.width=Math.floor(w*W),t.height=Math.floor(z*W),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,z,W,Y){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,z,W,Y),ue.viewport(b.copy($).multiplyScalar(j).floor())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,z,W,Y){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,z,W,Y),ue.scissor(N.copy(ne).multiplyScalar(j).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){ue.setScissorTest(re=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(w=!0,z=!0,W=!0){let Y=0;if(w){let V=!1;if(A!==null){const ve=A.texture.format;V=ve===Wc||ve===Vc||ve===Gc}if(V){const ve=A.texture.type,we=ve===Dn||ve===An||ve===no||ve===qn||ve===kc||ve===Hc,Ie=Je.getClearColor(),Oe=Je.getClearAlpha(),Ve=Ie.r,ze=Ie.g,ke=Ie.b;we?(m[0]=Ve,m[1]=ze,m[2]=ke,m[3]=Oe,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ve,g[1]=ze,g[2]=ke,g[3]=Oe,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT),W&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Me.dispose(),Pe.dispose(),Le.dispose(),S.dispose(),H.dispose(),se.dispose(),R.dispose(),ae.dispose(),Ee.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",lt),xe.removeEventListener("sessionend",Ke),ye&&(ye.dispose(),ye=null),ut.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Ze.autoReset,z=Q.enabled,W=Q.autoUpdate,Y=Q.needsUpdate,V=Q.type;be(),Ze.autoReset=w,Q.enabled=z,Q.autoUpdate=W,Q.needsUpdate=Y,Q.type=V}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const z=w.target;z.removeEventListener("dispose",fe),Ue(z)}function Ue(w){Ce(w),Le.remove(w)}function Ce(w){const z=Le.get(w).programs;z!==void 0&&(z.forEach(function(W){Ee.releaseProgram(W)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,W,Y,V,ve){z===null&&(z=he);const we=V.isMesh&&V.matrixWorld.determinant()<0,Ie=X0(w,z,W,Y,V);ue.setMaterial(Y,we);let Oe=W.index,Ve=1;if(Y.wireframe===!0){if(Oe=ee.getWireframeAttribute(W),Oe===void 0)return;Ve=2}const ze=W.drawRange,ke=W.attributes.position;let ct=ze.start*Ve,zt=(ze.start+ze.count)*Ve;ve!==null&&(ct=Math.max(ct,ve.start*Ve),zt=Math.min(zt,(ve.start+ve.count)*Ve)),Oe!==null?(ct=Math.max(ct,0),zt=Math.min(zt,Oe.count)):ke!=null&&(ct=Math.max(ct,0),zt=Math.min(zt,ke.count));const gt=zt-ct;if(gt<0||gt===1/0)return;R.setup(V,Y,Ie,W,Oe);let an,rt=Fe;if(Oe!==null&&(an=ie.get(Oe),rt=Te,rt.setIndex(an)),V.isMesh)Y.wireframe===!0?(ue.setLineWidth(Y.wireframeLinewidth*Ne()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(V.isLine){let We=Y.linewidth;We===void 0&&(We=1),ue.setLineWidth(We*Ne()),V.isLineSegments?rt.setMode(I.LINES):V.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else V.isPoints?rt.setMode(I.POINTS):V.isSprite&&rt.setMode(I.TRIANGLES);if(V.isBatchedMesh)rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)rt.renderInstances(ct,gt,V.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tr=Math.min(W.instanceCount,We);rt.renderInstances(ct,gt,Tr)}else rt.render(ct,gt)};function $e(w,z,W){w.transparent===!0&&w.side===Ht&&w.forceSinglePass===!1?(w.side=Ot,w.needsUpdate=!0,xs(w,z,W),w.side=_n,w.needsUpdate=!0,xs(w,z,W),w.side=Ht):xs(w,z,W)}this.compile=function(w,z,W=null){W===null&&(W=w),p=Pe.get(W),p.init(),x.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(v._useLegacyLights);const Y=new Set;return w.traverse(function(V){const ve=V.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const Ie=ve[we];$e(Ie,W,V),Y.add(Ie)}else $e(ve,W,V),Y.add(ve)}),x.pop(),p=null,Y},this.compileAsync=function(w,z,W=null){const Y=this.compile(w,z,W);return new Promise(V=>{function ve(){if(Y.forEach(function(we){Le.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){V(w);return}setTimeout(ve,10)}ce.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let qe=null;function at(w){qe&&qe(w)}function lt(){ut.stop()}function Ke(){ut.start()}const ut=new r0;ut.setAnimationLoop(at),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(w){qe=w,xe.setAnimationLoop(w),w===null?ut.stop():ut.start()},xe.addEventListener("sessionstart",lt),xe.addEventListener("sessionend",Ke),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(z),z=xe.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,A),p=Pe.get(w,x.length),p.init(),x.push(p),Se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(Se),le=this.localClippingEnabled,J=Be.init(this.clippingPlanes,le),_=Me.get(w,h.length),_.init(),h.push(_),Qt(w,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,Z),this.info.render.frame++,J===!0&&Be.beginShadows();const W=p.state.shadowsArray;if(Q.render(W,w,z),J===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(_,w),p.setupLights(v._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let V=0,ve=Y.length;V<ve;V++){const we=Y[V];Eo(_,w,we,we.viewport)}}else Eo(_,w,z);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,z),R.resetDefaultState(),F=-1,y=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Qt(w,z,W,Y){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){Y&&k.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);const we=se.update(w),Ie=w.material;Ie.visible&&_.push(w,we,Ie,W,k.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const we=se.update(w),Ie=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),k.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),k.copy(we.boundingSphere.center)),k.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(Ie)){const Oe=we.groups;for(let Ve=0,ze=Oe.length;Ve<ze;Ve++){const ke=Oe[Ve],ct=Ie[ke.materialIndex];ct&&ct.visible&&_.push(w,we,ct,W,k.z,ke)}}else Ie.visible&&_.push(w,we,Ie,W,k.z,null)}}const ve=w.children;for(let we=0,Ie=ve.length;we<Ie;we++)Qt(ve[we],z,W,Y)}function Eo(w,z,W,Y){const V=w.opaque,ve=w.transmissive,we=w.transparent;p.setupLightsView(W),J===!0&&Be.setGlobalState(v.clippingPlanes,W),ve.length>0&&W0(V,ve,z,W),Y&&ue.viewport(b.copy(Y)),V.length>0&&vs(V,z,W),ve.length>0&&vs(ve,z,W),we.length>0&&vs(we,z,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function W0(w,z,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ve=me.isWebGL2;ye===null&&(ye=new Jn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?as:Dn,minFilter:rs,samples:ve?4:0})),v.getDrawingBufferSize(De),ve?ye.setSize(De.x,De.y):ye.setSize(hr(De.x),hr(De.y));const we=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(K),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ie=v.toneMapping;v.toneMapping=Pn,vs(w,W,Y),T.updateMultisampleRenderTarget(ye),T.updateRenderTargetMipmap(ye);let Oe=!1;for(let Ve=0,ze=z.length;Ve<ze;Ve++){const ke=z[Ve],ct=ke.object,zt=ke.geometry,gt=ke.material,an=ke.group;if(gt.side===Ht&&ct.layers.test(Y.layers)){const rt=gt.side;gt.side=Ot,gt.needsUpdate=!0,bo(ct,W,Y,zt,gt,an),gt.side=rt,gt.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(ye),T.updateRenderTargetMipmap(ye)),v.setRenderTarget(we),v.setClearColor(K,P),v.toneMapping=Ie}function vs(w,z,W){const Y=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ve=w.length;V<ve;V++){const we=w[V],Ie=we.object,Oe=we.geometry,Ve=Y===null?we.material:Y,ze=we.group;Ie.layers.test(W.layers)&&bo(Ie,z,W,Oe,Ve,ze)}}function bo(w,z,W,Y,V,ve){w.onBeforeRender(v,z,W,Y,V,ve),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(v,z,W,Y,w,ve),V.transparent===!0&&V.side===Ht&&V.forceSinglePass===!1?(V.side=Ot,V.needsUpdate=!0,v.renderBufferDirect(W,z,Y,V,w,ve),V.side=_n,V.needsUpdate=!0,v.renderBufferDirect(W,z,Y,V,w,ve),V.side=Ht):v.renderBufferDirect(W,z,Y,V,w,ve),w.onAfterRender(v,z,W,Y,V,ve)}function xs(w,z,W){z.isScene!==!0&&(z=he);const Y=Le.get(w),V=p.state.lights,ve=p.state.shadowsArray,we=V.state.version,Ie=Ee.getParameters(w,V.state,ve,z,W),Oe=Ee.getProgramCacheKey(Ie);let Ve=Y.programs;Y.environment=w.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(w.isMeshStandardMaterial?H:S).get(w.envMap||Y.environment),Ve===void 0&&(w.addEventListener("dispose",fe),Ve=new Map,Y.programs=Ve);let ze=Ve.get(Oe);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===we)return To(w,Ie),ze}else Ie.uniforms=Ee.getUniforms(w),w.onBuild(W,Ie,v),w.onBeforeCompile(Ie,v),ze=Ee.acquireProgram(Ie,Oe),Ve.set(Oe,ze),Y.uniforms=Ie.uniforms;const ke=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=Be.uniform),To(w,Ie),Y.needsLights=$0(w),Y.lightsStateVersion=we,Y.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.directionalShadowMap.value=V.state.directionalShadowMap,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotShadowMap.value=V.state.spotShadowMap,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMap.value=V.state.pointShadowMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function wo(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function To(w,z){const W=Le.get(w);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function X0(w,z,W,Y,V){z.isScene!==!0&&(z=he),T.resetTextureUnits();const ve=z.fog,we=Y.isMeshStandardMaterial?z.environment:null,Ie=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vn,Oe=(Y.isMeshStandardMaterial?H:S).get(Y.envMap||we),Ve=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,zt=!!W.morphAttributes.color;let gt=Pn;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=v.toneMapping);const an=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=an!==void 0?an.length:0,We=Le.get(Y),Tr=p.state.lights;if(J===!0&&(le===!0||w!==y)){const Gt=w===y&&Y.id===F;Be.setState(Y,w,Gt)}let ot=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Tr.state.version||We.outputColorSpace!==Ie||V.isBatchedMesh&&We.batching===!1||!V.isBatchedMesh&&We.batching===!0||V.isInstancedMesh&&We.instancing===!1||!V.isInstancedMesh&&We.instancing===!0||V.isSkinnedMesh&&We.skinning===!1||!V.isSkinnedMesh&&We.skinning===!0||V.isInstancedMesh&&We.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&We.instancingColor===!1&&V.instanceColor!==null||We.envMap!==Oe||Y.fog===!0&&We.fog!==ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Be.numPlanes||We.numIntersection!==Be.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==ze||We.morphTargets!==ke||We.morphNormals!==ct||We.morphColors!==zt||We.toneMapping!==gt||me.isWebGL2===!0&&We.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,We.__version=Y.version);let On=We.currentProgram;ot===!0&&(On=xs(Y,z,V));let Ao=!1,Gi=!1,Ar=!1;const St=On.getUniforms(),zn=We.uniforms;if(ue.useProgram(On.program)&&(Ao=!0,Gi=!0,Ar=!0),Y.id!==F&&(F=Y.id,Gi=!0),Ao||y!==w){St.setValue(I,"projectionMatrix",w.projectionMatrix),St.setValue(I,"viewMatrix",w.matrixWorldInverse);const Gt=St.map.cameraPosition;Gt!==void 0&&Gt.setValue(I,k.setFromMatrixPosition(w.matrixWorld)),me.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Gi=!0,Ar=!0)}if(V.isSkinnedMesh){St.setOptional(I,V,"bindMatrix"),St.setOptional(I,V,"bindMatrixInverse");const Gt=V.skeleton;Gt&&(me.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),St.setValue(I,"boneTexture",Gt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(St.setOptional(I,V,"batchingTexture"),St.setValue(I,"batchingTexture",V._matricesTexture,T));const Cr=W.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0&&me.isWebGL2===!0)&&Ge.update(V,W,On),(Gi||We.receiveShadow!==V.receiveShadow)&&(We.receiveShadow=V.receiveShadow,St.setValue(I,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zn.envMap.value=Oe,zn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Gi&&(St.setValue(I,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Y0(zn,Ar),ve&&Y.fog===!0&&pe.refreshFogUniforms(zn,ve),pe.refreshMaterialUniforms(zn,Y,j,G,ye),ir.upload(I,wo(We),zn,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ir.upload(I,wo(We),zn,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(I,"center",V.center),St.setValue(I,"modelViewMatrix",V.modelViewMatrix),St.setValue(I,"normalMatrix",V.normalMatrix),St.setValue(I,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gt=Y.uniformsGroups;for(let Rr=0,q0=Gt.length;Rr<q0;Rr++)if(me.isWebGL2){const Co=Gt[Rr];ae.update(Co,On),ae.bind(Co,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function Y0(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function $0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,z,W){Le.get(w.texture).__webglTexture=z,Le.get(w.depthTexture).__webglTexture=W;const Y=Le.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){const W=Le.get(w);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,W=0){A=w,L=z,C=W;let Y=!0,V=null,ve=!1,we=!1;if(w){const Oe=Le.get(w);Oe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1):Oe.__webglFramebuffer===void 0?T.setupRenderTarget(w):Oe.__hasExternalTextures&&T.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const ze=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?V=ze[z][W]:V=ze[z],ve=!0):me.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?V=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[W]:V=ze,b.copy(w.viewport),N.copy(w.scissor),B=w.scissorTest}else b.copy($).multiplyScalar(j).floor(),N.copy(ne).multiplyScalar(j).floor(),B=re;if(ue.bindFramebuffer(I.FRAMEBUFFER,V)&&me.drawBuffers&&Y&&ue.drawBuffers(w,V),ue.viewport(b),ue.scissor(N),ue.setScissorTest(B),ve){const Oe=Le.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Oe.__webglTexture,W)}else if(we){const Oe=Le.get(w.texture),Ve=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oe.__webglTexture,W||0,Ve)}F=-1},this.readRenderTargetPixels=function(w,z,W,Y,V,ve,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){ue.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Oe=w.texture,Ve=Oe.format,ze=Oe.type;if(Ve!==Yt&&_e.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=ze===as&&(ce.has("EXT_color_buffer_half_float")||me.isWebGL2&&ce.has("EXT_color_buffer_float"));if(ze!==Dn&&_e.convert(ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Cn&&(me.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Y&&W>=0&&W<=w.height-V&&I.readPixels(z,W,Y,V,_e.convert(Ve),_e.convert(ze),ve)}finally{const Oe=A!==null?Le.get(A).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(w,z,W=0){const Y=Math.pow(2,-W),V=Math.floor(z.image.width*Y),ve=Math.floor(z.image.height*Y);T.setTexture2D(z,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,w.x,w.y,V,ve),ue.unbindTexture()},this.copyTextureToTexture=function(w,z,W,Y=0){const V=z.image.width,ve=z.image.height,we=_e.convert(W.format),Ie=_e.convert(W.type);T.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Y,w.x,w.y,V,ve,we,Ie,z.image.data):z.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Y,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Y,w.x,w.y,we,Ie,z.image),Y===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,z,W,Y,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Ie=w.max.z-w.min.z+1,Oe=_e.convert(Y.format),Ve=_e.convert(Y.type);let ze;if(Y.isData3DTexture)T.setTexture3D(Y,0),ze=I.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)T.setTexture2DArray(Y,0),ze=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const ke=I.getParameter(I.UNPACK_ROW_LENGTH),ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zt=I.getParameter(I.UNPACK_SKIP_PIXELS),gt=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES),rt=W.isCompressedTexture?W.mipmaps[V]:W.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(ze,V,z.x,z.y,z.z,ve,we,Ie,Oe,Ve,rt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(ze,V,z.x,z.y,z.z,ve,we,Ie,Oe,rt.data)):I.texSubImage3D(ze,V,z.x,z.y,z.z,ve,we,Ie,Oe,Ve,rt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),V===0&&Y.generateMipmaps&&I.generateMipmap(ze),ue.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,ue.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===io?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Zn:Yc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?vt:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class h1 extends f0{}h1.prototype.isWebGL1Renderer=!0;class p0 extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class f1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new M;class fr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uo extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yi;const $i=new M,Mi=new M,Si=new M,Ei=new ge,qi=new ge,m0=new st,Gs=new M,ji=new M,Vs=new M,$l=new ge,ra=new ge,ql=new ge;class g0 extends ft{constructor(e=new uo){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new f1(t,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new fr(n,3,0,!1)),yi.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=yi,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),m0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ws(Gs.set(-.5,-.5,0),Si,o,Mi,s,r),Ws(ji.set(.5,-.5,0),Si,o,Mi,s,r),Ws(Vs.set(.5,.5,0),Si,o,Mi,s,r),$l.set(0,0),ra.set(1,0),ql.set(1,1);let a=e.ray.intersectTriangle(Gs,ji,Vs,!1,$i);if(a===null&&(Ws(ji.set(-.5,.5,0),Si,o,Mi,s,r),ra.set(0,1),a=e.ray.intersectTriangle(Gs,Vs,ji,!1,$i),a===null))return;const l=e.ray.origin.distanceTo($i);l<e.near||l>e.far||t.push({distance:l,point:$i.clone(),uv:Xt.getInterpolation($i,Gs,ji,Vs,$l,ra,ql,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ws(i,e,t,n,s,r){Ei.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qi.x=r*Ei.x-s*Ei.y,qi.y=s*Ei.x+r*Ei.y):qi.copy(Ei),i.copy(e),i.x+=qi.x,i.y+=qi.y,i.applyMatrix4(m0)}class p1 extends Rt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Mt,d=Mt,u,f){super(null,o,a,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dt extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new M,Zl=new M,Kl=new st,aa=new ps,Xs=new fs;class rn extends ft{constructor(e=new tt,t=new Dt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)jl.fromBufferAttribute(t,s-1),Zl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=jl.distanceTo(Zl);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,e.ray.intersectsSphere(Xs)===!1)return;Kl.copy(s).invert(),aa.copy(e.ray).applyMatrix4(Kl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new M,d=new M,u=new M,f=new M,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const h=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=h,E=x-1;v<E;v+=m){const L=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(p,L),d.fromBufferAttribute(p,C),aa.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=h,E=x-1;v<E;v+=m){if(c.fromBufferAttribute(p,v),d.fromBufferAttribute(p,v+1),aa.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Jl=new M,Ql=new M;class m1 extends rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Jl.fromBufferAttribute(t,s),Ql.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jl.distanceTo(Ql);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mr extends rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _0 extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ec=new st,Ra=new ps,Ys=new fs,$s=new M;class g1 extends ft{constructor(e=new tt,t=new _0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;ec.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);$s.fromBufferAttribute(u,p),tc($s,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)$s.fromBufferAttribute(u,g),tc($s,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tc(i,e,t,n,s,r,o){const a=Ra.distanceSqToPoint(i);if(a<t){const l=new M;Ra.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class v0 extends Rt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const d=n[s],f=n[s+1]-d,m=(o-d)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ge:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new M,s=[],r=[],o=[],a=new M,l=new st;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(xt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class x0 extends xn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ge,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*d-m*u+this.aX,c=f*u+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _1 extends x0{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ho(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let f=(o-r)/c-(a-r)/(c+d)+(a-o)/d,m=(a-o)/d-(l-o)/(d+u)+(l-a)/u;f*=d,m*=d,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const qs=new M,oa=new ho,la=new ho,ca=new ho;class fo extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new M){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),c=qs);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(d),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),oa.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,g,_,p),la.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,g,_,p),ca.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,g,_,p)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),la.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),ca.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return n.set(oa.calc(l),la.calc(l),ca.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function v1(i,e){const t=1-i;return t*t*e}function x1(i,e){return 2*(1-i)*i*e}function y1(i,e){return i*i*e}function ns(i,e,t,n){return v1(i,e)+x1(i,t)+y1(i,n)}function M1(i,e){const t=1-i;return t*t*t*e}function S1(i,e){const t=1-i;return 3*t*t*i*e}function E1(i,e){return 3*(1-i)*i*i*e}function b1(i,e){return i*i*i*e}function is(i,e,t,n,s){return M1(i,e)+S1(i,t)+E1(i,n)+b1(i,s)}class w1 extends xn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(is(e,s.x,r.x,o.x,a.x),is(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T1 extends xn{constructor(e=new M,t=new M,n=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new M){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(is(e,s.x,r.x,o.x,a.x),is(e,s.y,r.y,o.y,a.y),is(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A1 extends xn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C1 extends xn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R1 extends xn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ns(e,s.x,r.x,o.x),ns(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y0 extends xn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ns(e,s.x,r.x,o.x),ns(e,s.y,r.y,o.y),ns(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L1 extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(nc(a,l.x,c.x,d.x,u.x),nc(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var P1=Object.freeze({__proto__:null,ArcCurve:_1,CatmullRomCurve3:fo,CubicBezierCurve:w1,CubicBezierCurve3:T1,EllipseCurve:x0,LineCurve:A1,LineCurve3:C1,QuadraticBezierCurve:R1,QuadraticBezierCurve3:y0,SplineCurve:L1});class Sr extends tt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let u=e;const f=(t-e)/s,m=new M,g=new ge;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const h=r+p/n*o;m.x=u*Math.cos(h),m.y=u*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,d.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const p=_*(n+1);for(let h=0;h<n;h++){const x=h+p,v=x,E=x+n+1,L=x+n+2,C=x+1;a.push(v,E,C),a.push(E,L,C)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class In extends tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new M,f=new M,m=[],g=[],_=[],p=[];for(let h=0;h<=n;h++){const x=[],v=h/n;let E=0;h===0&&o===0?E=.5/t:h===n&&l===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(C+E,1-v),x.push(c++)}d.push(x)}for(let h=0;h<n;h++)for(let x=0;x<t;x++){const v=d[h][x+1],E=d[h][x],L=d[h+1][x],C=d[h+1][x+1];(h!==0||o>0)&&m.push(v,E,C),(h!==n-1||l<Math.PI)&&m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class po extends tt{constructor(e=new y0(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new M,l=new M,c=new ge;let d=new M;const u=[],f=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function _(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),x(),h()}function p(v){d=e.getPointAt(v/t,d);const E=o.normals[v],L=o.binormals[v];for(let C=0;C<=s;C++){const A=C/s*Math.PI*2,F=Math.sin(A),y=-Math.cos(A);l.x=y*E.x+F*L.x,l.y=y*E.y+F*L.y,l.z=y*E.z+F*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,u.push(a.x,a.y,a.z)}}function h(){for(let v=1;v<=t;v++)for(let E=1;E<=s;E++){const L=(s+1)*(v-1)+(E-1),C=(s+1)*v+(E-1),A=(s+1)*v+E,F=(s+1)*(v-1)+E;g.push(L,C,F),g.push(C,A,F)}}function x(){for(let v=0;v<=t;v++)for(let E=0;E<=s;E++)c.x=v/t,c.y=E/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new po(new P1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Di extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ic={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class D1{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const U1=new D1;class mo{constructor(e){this.manager=e!==void 0?e:U1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mo.DEFAULT_MATERIAL_NAME="__DEFAULT";class I1 extends mo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ic.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=os("img");function l(){d(),ic.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class go extends mo{constructor(e){super(e)}load(e,t,n,s){const r=new Rt,o=new I1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class _o extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const da=new st,sc=new M,rc=new M;class M0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rc),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N1 extends M0{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class F1 extends _o{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new N1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ac=new st,Zi=new M,ua=new M;class O1 extends M0{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zi),ua.copy(n.position),ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ua),n.updateMatrixWorld(),s.makeTranslation(-Zi.x,-Zi.y,-Zi.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac)}}class z1 extends _o{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class B1 extends _o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class k1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oc(){return(typeof performance>"u"?Date:performance).now()}class H1{constructor(e,t,n=0,s=1/0){this.ray=new ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return La(e,this,n,t),n.sort(lc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)La(e[s],this,n,t);return n.sort(lc),n}}function lc(i,e){return i.distance-e.distance}function La(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)La(s[r],e,t,!0)}}let cc=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);const pn=500,Ti=20,Ye=50,U={speedExponent:0,simulationSpeed:1,planetScale:1,sunScale:1,capMoonOrbits:!0,capMagneticFields:!0,starBrightness:.35,gamma:1,showOrbits:!0,showAxes:!1,showTooltips:!0,coordinateSystem:"Heliocentric",referencePlane:"Ecliptic",showZodiacs:!1,showConstellations:!1,showZodiacSigns:!1,showHabitableZone:!1,showMagneticFields:!1,showSunMagneticFieldBasic:!1,showSunMagneticField:!1,showPlanetColors:!1,showDwarfPlanetColors:!1,showSun:!0,showPlanets:!0,showLargestMoons:!0,showMajorMoons:!1,showSmallMoons:!1,showDwarfPlanets:!1,showMissions:{voyager1:!1,voyager2:!1,pioneer10:!1,pioneer11:!1,galileo:!1,cassini:!1,newHorizons:!1,parkerSolarProbe:!1,juno:!1,rosetta:!1,ulysses:!1},date:new Date,stop:!1,music:{enabled:!1,volume:.5,playlist:[],currentTrackName:"None",shuffle:!1}},G1=15,V1=2e3,W1=5;let Tt=null,sr=!1,S0=0;const E0=new M,b0=new M,w0=new M,T0=new M,ha=new M;function A0(i,e,t,n){window.addEventListener("dblclick",s=>{const r=s.clientX,o=s.clientY,a=Y1(r,o,i,t,n);a?Ui(a,i,e):Tt&&ls(e)}),window.addEventListener("keydown",s=>{s.key==="Escape"&&Tt&&ls(e)})}function C0(i,e){const t=performance.now();if(sr){const n=t-S0,s=Math.min(n/V1,1),r=s<.5?2*s*s:1-(-2*s+2)**2/2;if(i.position.lerpVectors(E0,w0,r),e.target.lerpVectors(b0,T0,r),s>=1){sr=!1;const o=new M;Tt.mesh.getWorldPosition(o),ha.copy(o),e.enabled=!0}e.update();return}if(Tt&&!sr){if(!Tt.mesh.visible){ls(e);return}const n=Tt.mesh,s=new M;n.getWorldPosition(s);const r=new M().subVectors(s,ha);i.position.add(r),e.target.copy(s),ha.copy(s),e.update()}}function Ui(i,e,t,n=W1){Tt&&Tt!==i&&R0(Tt),Tt=i,X1(Tt);const s=new M;i.mesh.getWorldPosition(s);const r=i.data.radius||5;let o=1;i.type==="sun"?o=U.sunScale:(i.type==="planet"||i.type==="moon")&&(o=U.planetScale);const l=r*o*n,c=Math.PI/6,d=new M(l*Math.cos(c),l*Math.sin(c),l*Math.cos(c));E0.copy(e.position),b0.copy(t.target),w0.copy(s).add(d),T0.copy(s),sr=!0,S0=performance.now(),t.enabled=!1,L0(i.data.name)}function ls(i){Tt&&(R0(Tt),Tt=null),i.enabled=!0,L0("Focus mode deactivated")}function X1(i){if(!i||!i.mesh)return;i.originalGeometry||(i.originalGeometry=i.mesh.geometry);const e=i.data.radius||5,t=new In(e,128,128);i.mesh.geometry=t}function R0(i){!i||!i.mesh||!i.originalGeometry||(i.mesh.geometry.dispose(),i.mesh.geometry=i.originalGeometry,delete i.originalGeometry)}function Y1(i,e,t,n,s){let r=null,o=G1;const a=(l,c,d)=>{if(!l||!l.position)return;const u=new M;l.getWorldPosition(u);const f=u.clone().project(t),m=(f.x*.5+.5)*window.innerWidth,g=(-(f.y*.5)+.5)*window.innerHeight,_=i-m,p=e-g,h=Math.sqrt(_*_+p*p);h<o&&f.z<1&&f.z>-1&&(o=h,r={mesh:l,data:c,type:d})};return a(s,{name:"Sun",radius:5},"sun"),n.forEach(l=>{a(l.mesh,l.data,"planet"),l.moons&&l.moons.forEach(c=>{a(c.mesh,c.data,"moon")})}),r}function L0(i){let e=document.getElementById("focus-notification");e||(e=document.createElement("div"),e.id="focus-notification",e.style.cssText=`
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
        `,document.body.appendChild(e)),e.textContent=i,e.style.opacity="1",setTimeout(()=>{e.style.opacity="0"},2e3)}function $1(){return Tt!==null}function q1(){return Tt}const dc=Object.freeze(Object.defineProperty({__proto__:null,exitFocusMode:ls,focusOnObject:Ui,getFocusedObject:q1,isFocusModeActive:$1,setupFocusMode:A0,updateFocusMode:C0},Symbol.toStringTag,{value:"Module"}));/**
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
 */const P0=173.1446326846693,j1=14959787069098932e-8,Pa=.017453292519943295,Z1=365.24217,uc=new Date("2000-01-01T12:00:00Z"),Jt=2*Math.PI,wn=3600*(180/Math.PI),js=484813681109536e-20,K1=6378.1366,J1=K1/j1,D0=81.30056,vo=.0002959122082855911,Da=2825345909524226e-22,Ua=8459715185680659e-23,Ia=1292024916781969e-23,Na=1524358900784276e-23;function U0(i){if(i!==!0&&i!==!1)throw console.trace(),`Value is not boolean: ${i}`;return i}function fa(i){if(!Number.isFinite(i))throw console.trace(),`Value is not a finite number: ${i}`;return i}function bi(i){return i-Math.floor(i)}var Re;(function(i){i.Sun="Sun",i.Moon="Moon",i.Mercury="Mercury",i.Venus="Venus",i.Earth="Earth",i.Mars="Mars",i.Jupiter="Jupiter",i.Saturn="Saturn",i.Uranus="Uranus",i.Neptune="Neptune",i.Pluto="Pluto",i.SSB="SSB",i.EMB="EMB",i.Star1="Star1",i.Star2="Star2",i.Star3="Star3",i.Star4="Star4",i.Star5="Star5",i.Star6="Star6",i.Star7="Star7",i.Star8="Star8"})(Re||(Re={}));const Q1=[Re.Star1,Re.Star2,Re.Star3,Re.Star4,Re.Star5,Re.Star6,Re.Star7,Re.Star8],eg=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function tg(i){const e=Q1.indexOf(i);return e>=0?eg[e]:null}function xo(i){const e=tg(i);return e&&e.dist>0?e:null}var cs;(function(i){i[i.From2000=0]="From2000",i[i.Into2000=1]="Into2000"})(cs||(cs={}));const Rn={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function ng(i){var e,t,n,s,r,o,a;const l=2e3+(i-14)/Z1;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,t=e*e,n=e*t,s=t*t,r=t*n,o=n*n,10583.6-1014.41*e+33.78311*t-5.952053*n-.1798452*s+.022174192*r+.0090316521*o):l<1600?(e=(l-1e3)/100,t=e*e,n=e*t,s=t*t,r=t*n,o=n*n,1574.2-556.01*e+71.23472*t+.319781*n-.8503463*s-.005050998*r+.0083572073*o):l<1700?(e=l-1600,t=e*e,n=e*t,120-.9808*e-.01532*t+n/7129):l<1800?(e=l-1700,t=e*e,n=e*t,s=t*t,8.83+.1603*e-.0059285*t+13336e-8*n-s/1174e3):l<1860?(e=l-1800,t=e*e,n=e*t,s=t*t,r=t*n,o=n*n,a=n*s,13.72-.332447*e+.0068612*t+.0041116*n-37436e-8*s+121272e-10*r-1699e-10*o+875e-12*a):l<1900?(e=l-1860,t=e*e,n=e*t,s=t*t,r=t*n,7.62+.5737*e-.251754*t+.01680668*n-.0004473624*s+r/233174):l<1920?(e=l-1900,t=e*e,n=e*t,s=t*t,-2.79+1.494119*e-.0598939*t+.0061966*n-197e-6*s):l<1941?(e=l-1920,t=e*e,n=e*t,21.2+.84493*e-.0761*t+.0020936*n):l<1961?(e=l-1950,t=e*e,n=e*t,29.07+.407*e-t/233+n/2547):l<1986?(e=l-1975,t=e*e,n=e*t,45.45+1.067*e-t/260-n/718):l<2005?(e=l-2e3,t=e*e,n=e*t,s=t*t,r=t*n,63.86+.3345*e-.060374*t+.0017275*n+651814e-9*s+2373599e-11*r):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let ig=ng;function hc(i){return i+ig(i)/86400}class Kn{constructor(e){if(e instanceof Kn){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const t=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-uc.getTime())/t,this.tt=hc(this.ut);return}if(Number.isFinite(e)){this.date=new Date(uc.getTime()+e*t),this.ut=e,this.tt=hc(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let t=new Kn(e);for(;;){const n=e-t.tt;if(Math.abs(n)<1e-12)return t;t=t.AddDays(n)}}toString(){return this.date.toISOString()}AddDays(e){return new Kn(this.ut+e)}}function Fn(i){return i instanceof Kn?i:new Kn(i)}function sg(i){var e=i.tt/36525,t=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return t/3600}function rg(i,e){const t=i*Pa,n=Math.cos(t),s=Math.sin(t);return[e[0],e[1]*n-e[2]*s,e[1]*s+e[2]*n]}function ag(i,e){return rg(sg(i),e)}function og(i){const e=i.tt/36525;function t(I,Ae){const ce=[];let me;for(me=0;me<=Ae-I;++me)ce.push(0);return{min:I,array:ce}}function n(I,Ae,ce,me){const ue=[];for(let Ze=0;Ze<=Ae-I;++Ze)ue.push(t(ce,me));return{min:I,array:ue}}function s(I,Ae,ce){const me=I.array[Ae-I.min];return me.array[ce-me.min]}function r(I,Ae,ce,me){const ue=I.array[Ae-I.min];ue.array[ce-ue.min]=me}let o,a,l,c,d,u,f,m,g,_,p,h,x,v,E,L,C,A,F,y,b,N,B,K=n(-6,6,1,4),P=n(-6,6,1,4);function O(I,Ae){return s(K,I,Ae)}function G(I,Ae){return s(P,I,Ae)}function j(I,Ae,ce){return r(K,I,Ae,ce)}function q(I,Ae,ce){return r(P,I,Ae,ce)}function Z(I,Ae,ce,me,ue){ue(I*ce-Ae*me,Ae*ce+I*me)}function $(I){return Math.sin(Jt*I)}f=e*e,g=0,B=0,p=0,h=3422.7;var ne=$(.19833+.05611*e),re=$(.27869+.04508*e),X=$(.16827-.36903*e),J=$(.34734-5.37261*e),le=$(.10498-5.37899*e),ye=$(.42681-.41855*e),Se=$(.14943-5.37511*e);for(A=.84*ne+.31*re+14.27*X+7.26*J+.28*le+.24*ye,F=2.94*ne+.31*re+14.27*X+9.34*J+1.12*le+.83*ye,y=-6.4*ne-1.89*ye,b=.21*ne+.31*re+14.27*X-88.7*J-15.3*le+.24*ye-1.86*Se,N=A-y,m=-3332e-9*$(.59734-5.37261*e)-539e-9*$(.35498-5.37899*e)-64e-9*$(.39943-5.37511*e),x=Jt*bi(.60643382+1336.85522467*e-313e-8*f)+A/wn,v=Jt*bi(.37489701+1325.55240982*e+2565e-8*f)+F/wn,E=Jt*bi(.99312619+99.99735956*e-44e-8*f)+y/wn,L=Jt*bi(.25909118+1342.2278298*e-892e-8*f)+b/wn,C=Jt*bi(.82736186+1236.85308708*e-397e-8*f)+N/wn,d=1;d<=4;++d){switch(d){case 1:l=v,a=4,c=1.000002208;break;case 2:l=E,a=3,c=.997504612-.002495388*e;break;case 3:l=L,a=4,c=1.000002708+139.978*m;break;case 4:l=C,a=6,c=1;break;default:throw`Internal error: I = ${d}`}for(j(0,d,1),j(1,d,Math.cos(l)*c),q(0,d,0),q(1,d,Math.sin(l)*c),u=2;u<=a;++u)Z(O(u-1,d),G(u-1,d),O(1,d),G(1,d),(I,Ae)=>(j(u,d,I),q(u,d,Ae)));for(u=1;u<=a;++u)j(-u,d,O(u,d)),q(-u,d,-G(u,d))}function De(I,Ae,ce,me){for(var ue={x:1,y:0},Ze=[0,I,Ae,ce,me],Le=1;Le<=4;++Le)Ze[Le]!==0&&Z(ue.x,ue.y,O(Ze[Le],Le),G(Ze[Le],Le),(T,S)=>(ue.x=T,ue.y=S));return ue}function k(I,Ae,ce,me,ue,Ze,Le,T){var S=De(ue,Ze,Le,T);g+=I*S.y,B+=Ae*S.y,p+=ce*S.x,h+=me*S.x}k(13.902,14.06,-.001,.2607,0,0,0,4),k(.403,-4.01,.394,.0023,0,0,0,3),k(2369.912,2373.36,.601,28.2333,0,0,0,2),k(-125.154,-112.79,-.725,-.9781,0,0,0,1),k(1.979,6.98,-.445,.0433,1,0,0,4),k(191.953,192.72,.029,3.0861,1,0,0,2),k(-8.466,-13.51,.455,-.1093,1,0,0,1),k(22639.5,22609.07,.079,186.5398,1,0,0,0),k(18.609,3.59,-.094,.0118,1,0,0,-1),k(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),k(3.215,5.44,.192,-.0386,1,0,0,-3),k(-38.428,-38.64,.001,.6008,1,0,0,-4),k(-.393,-1.43,-.092,.0086,1,0,0,-6),k(-.289,-1.59,.123,-.0053,0,1,0,4),k(-24.42,-25.1,.04,-.3,0,1,0,2),k(18.023,17.93,.007,.1494,0,1,0,1),k(-668.146,-126.98,-1.302,-.3997,0,1,0,0),k(.56,.32,-.001,-.0037,0,1,0,-1),k(-165.145,-165.06,.054,1.9178,0,1,0,-2),k(-1.877,-6.46,-.416,.0339,0,1,0,-4),k(.213,1.02,-.074,.0054,2,0,0,4),k(14.387,14.78,-.017,.2833,2,0,0,2),k(-.586,-1.2,.054,-.01,2,0,0,1),k(769.016,767.96,.107,10.1657,2,0,0,0),k(1.75,2.01,-.018,.0155,2,0,0,-1),k(-211.656,-152.53,5.679,-.3039,2,0,0,-2),k(1.225,.91,-.03,-.0088,2,0,0,-3),k(-30.773,-34.07,-.308,.3722,2,0,0,-4),k(-.57,-1.4,-.074,.0109,2,0,0,-6),k(-2.921,-11.75,.787,-.0484,1,1,0,2),k(1.267,1.52,-.022,.0164,1,1,0,1),k(-109.673,-115.18,.461,-.949,1,1,0,0),k(-205.962,-182.36,2.056,1.4437,1,1,0,-2),k(.233,.36,.012,-.0025,1,1,0,-3),k(-4.391,-9.66,-.471,.0673,1,1,0,-4),k(.283,1.53,-.111,.006,1,-1,0,4),k(14.577,31.7,-1.54,.2302,1,-1,0,2),k(147.687,138.76,.679,1.1528,1,-1,0,0),k(-1.089,.55,.021,0,1,-1,0,-1),k(28.475,23.59,-.443,-.2257,1,-1,0,-2),k(-.276,-.38,-.006,-.0036,1,-1,0,-3),k(.636,2.27,.146,-.0102,1,-1,0,-4),k(-.189,-1.68,.131,-.0028,0,2,0,2),k(-7.486,-.66,-.037,-.0086,0,2,0,0),k(-8.096,-16.35,-.74,.0918,0,2,0,-2),k(-5.741,-.04,0,-9e-4,0,0,2,2),k(.255,0,0,0,0,0,2,1),k(-411.608,-.2,0,-.0124,0,0,2,0),k(.584,.84,0,.0071,0,0,2,-1),k(-55.173,-52.14,0,-.1052,0,0,2,-2),k(.254,.25,0,-.0017,0,0,2,-3),k(.025,-1.67,0,.0031,0,0,2,-4),k(1.06,2.96,-.166,.0243,3,0,0,2),k(36.124,50.64,-1.3,.6215,3,0,0,0),k(-13.193,-16.4,.258,-.1187,3,0,0,-2),k(-1.187,-.74,.042,.0074,3,0,0,-4),k(-.293,-.31,-.002,.0046,3,0,0,-6),k(-.29,-1.45,.116,-.0051,2,1,0,2),k(-7.649,-10.56,.259,-.1038,2,1,0,0),k(-8.627,-7.59,.078,-.0192,2,1,0,-2),k(-2.74,-2.54,.022,.0324,2,1,0,-4),k(1.181,3.32,-.212,.0213,2,-1,0,2),k(9.703,11.67,-.151,.1268,2,-1,0,0),k(-.352,-.37,.001,-.0028,2,-1,0,-1),k(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),k(.36,.2,-.012,-.0043,2,-1,0,-4),k(-1.167,-1.25,.008,-.0106,1,2,0,0),k(-7.412,-6.12,.117,.0484,1,2,0,-2),k(-.311,-.65,-.032,.0044,1,2,0,-4),k(.757,1.82,-.105,.0112,1,-2,0,2),k(2.58,2.32,.027,.0196,1,-2,0,0),k(2.533,2.4,-.014,-.0212,1,-2,0,-2),k(-.344,-.57,-.025,.0036,0,3,0,-2),k(-.992,-.02,0,0,1,0,2,2),k(-45.099,-.02,0,-.001,1,0,2,0),k(-.179,-9.52,0,-.0833,1,0,2,-2),k(-.301,-.33,0,.0014,1,0,2,-4),k(-6.382,-3.37,0,-.0481,1,0,-2,2),k(39.528,85.13,0,-.7136,1,0,-2,0),k(9.366,.71,0,-.0112,1,0,-2,-2),k(.202,.02,0,0,1,0,-2,-4),k(.415,.1,0,.0013,0,1,2,0),k(-2.152,-2.26,0,-.0066,0,1,2,-2),k(-1.44,-1.3,0,.0014,0,1,-2,2),k(.384,-.04,0,0,0,1,-2,-2),k(1.938,3.6,-.145,.0401,4,0,0,0),k(-.952,-1.58,.052,-.013,4,0,0,-2),k(-.551,-.94,.032,-.0097,3,1,0,0),k(-.482,-.57,.005,-.0045,3,1,0,-2),k(.681,.96,-.026,.0115,3,-1,0,0),k(-.297,-.27,.002,-9e-4,2,2,0,-2),k(.254,.21,-.003,0,2,-2,0,-2),k(-.25,-.22,.004,.0014,1,3,0,-2),k(-3.996,0,0,4e-4,2,0,2,0),k(.557,-.75,0,-.009,2,0,2,-2),k(-.459,-.38,0,-.0053,2,0,-2,2),k(-1.298,.74,0,4e-4,2,0,-2,0),k(.538,1.14,0,-.0141,2,0,-2,-2),k(.263,.02,0,0,1,1,2,0),k(.426,.07,0,-6e-4,1,1,-2,-2),k(-.304,.03,0,3e-4,1,-1,2,0),k(-.372,-.19,0,-.0027,1,-1,-2,2),k(.418,0,0,0,0,0,4,0),k(-.33,-.04,0,0,3,0,2,0);function he(I,Ae,ce,me,ue){return I*De(Ae,ce,me,ue).y}_=0,_+=he(-526.069,0,0,1,-2),_+=he(-3.352,0,0,1,-4),_+=he(44.297,1,0,1,-2),_+=he(-6,1,0,1,-4),_+=he(20.599,-1,0,1,0),_+=he(-30.598,-1,0,1,-2),_+=he(-24.649,-2,0,1,0),_+=he(-2,-2,0,1,-2),_+=he(-22.571,0,1,1,-2),_+=he(10.985,0,-1,1,-2),g+=.82*$(.7736-62.5512*e)+.31*$(.0466-125.1025*e)+.35*$(.5785-25.1042*e)+.66*$(.4591+1335.8075*e)+.64*$(.313-91.568*e)+1.14*$(.148+1331.2898*e)+.21*$(.5918+1056.5859*e)+.44*$(.5784+1322.8595*e)+.24*$(.2275-5.7374*e)+.28*$(.2965+2.6929*e)+.33*$(.3132+6.3368*e),o=L+B/wn;let Ne=(1.000002708+139.978*m)*(18518.511+1.189+p)*Math.sin(o)-6.24*Math.sin(3*o)+_;return{geo_eclip_lon:Jt*bi((x+g/wn)/Jt),geo_eclip_lat:Math.PI/(180*3600)*Ne,distance_au:wn*J1/(.999953253*h)}}function lg(i,e){return[i.rot[0][0]*e[0]+i.rot[1][0]*e[1]+i.rot[2][0]*e[2],i.rot[0][1]*e[0]+i.rot[1][1]*e[1]+i.rot[2][1]*e[2],i.rot[0][2]*e[0]+i.rot[1][2]*e[1]+i.rot[2][2]*e[2]]}function cg(i,e,t){const n=dg(e,t);return lg(n,i)}function dg(i,e){const t=i.tt/36525;let n=84381.406,s=((((-951e-10*t+132851e-9)*t-.00114045)*t-1.0790069)*t+5038.481507)*t,r=((((3337e-10*t-467e-9)*t-.00772503)*t+.0512623)*t-.025754)*t+n,o=((((-56e-9*t+170663e-9)*t-.00121197)*t-2.3814292)*t+10.556403)*t;n*=js,s*=js,r*=js,o*=js;const a=Math.sin(n),l=Math.cos(n),c=Math.sin(-s),d=Math.cos(-s),u=Math.sin(-r),f=Math.cos(-r),m=Math.sin(o),g=Math.cos(o),_=g*d-c*m*f,p=g*c*l+m*f*d*l-a*m*u,h=g*c*a+m*f*d*a+l*m*u,x=-m*d-c*g*f,v=-m*c*l+g*f*d*l-a*g*u,E=-m*c*a+g*f*d*a+l*g*u,L=c*u,C=-u*d*l-a*f,A=-u*d*a+f*l;if(e===cs.Into2000)return new Fa([[_,p,h],[x,v,E],[L,C,A]]);if(e===cs.From2000)return new Fa([[_,x,L],[p,v,C],[h,E,A]]);throw"Invalid precess direction"}class Nt{constructor(e,t,n,s){this.x=e,this.y=t,this.z=n,this.t=s}Length(){return Math.hypot(this.x,this.y,this.z)}}class nn{constructor(e,t,n,s,r,o,a){this.x=e,this.y=t,this.z=n,this.vx=s,this.vy=r,this.vz=o,this.t=a}}class ug{constructor(e,t,n){this.lat=fa(e),this.lon=fa(t),this.dist=fa(n)}}class Fa{constructor(e){this.rot=e}}function ds(i){const e=Fn(i),t=og(e),n=t.distance_au*Math.cos(t.geo_eclip_lat),s=[n*Math.cos(t.geo_eclip_lon),n*Math.sin(t.geo_eclip_lon),t.distance_au*Math.sin(t.geo_eclip_lat)],r=ag(e,s),o=cg(r,e,cs.Into2000);return new Nt(o[0],o[1],o[2],e)}function I0(i){const e=Fn(i),t=1e-5,n=e.AddDays(-t),s=e.AddDays(+t),r=ds(n),o=ds(s);return new nn((r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,(o.x-r.x)/(2*t),(o.y-r.y)/(2*t),(o.z-r.z)/(2*t),e)}function hg(i){const e=Fn(i),t=I0(e),n=1+D0;return new nn(t.x/n,t.y/n,t.z/n,t.vx/n,t.vy/n,t.vz/n,e)}function Ii(i,e,t){let n=1,s=0;for(let r of i){let o=0;for(let[l,c,d]of r)o+=l*Math.cos(c+e*d);let a=n*o;t&&(a%=Jt),s+=a,n*=e}return s}function pa(i,e){let t=1,n=0,s=0,r=0;for(let o of i){let a=0,l=0;for(let[c,d,u]of o){let f=d+e*u;a+=c*u*Math.sin(f),r>0&&(l+=c*Math.cos(f))}s+=r*n*l-t*a,n=t,t*=e,++r}return s}const Ji=365250,Oa=0,za=1,Ba=2;function ka(i){return new wt(i[0]+44036e-11*i[1]-190919e-12*i[2],-479966e-12*i[0]+.917482137087*i[1]-.397776982902*i[2],.397776982902*i[1]+.917482137087*i[2])}function N0(i,e,t){const n=t*Math.cos(e),s=Math.cos(i),r=Math.sin(i);return[n*s,n*r,t*Math.sin(e)]}function rr(i,e){const t=e.tt/Ji,n=Ii(i[Oa],t,!0),s=Ii(i[za],t,!1),r=Ii(i[Ba],t,!1),o=N0(n,s,r);return ka(o).ToAstroVector(e)}function Ha(i,e){const t=e/Ji,n=Ii(i[Oa],t,!0),s=Ii(i[za],t,!1),r=Ii(i[Ba],t,!1),o=pa(i[Oa],t),a=pa(i[za],t),l=pa(i[Ba],t),c=Math.cos(n),d=Math.sin(n),u=Math.cos(s),f=Math.sin(s),m=+(l*u*c)-r*f*c*a-r*u*d*o,g=+(l*u*d)-r*f*d*a+r*u*c*o,_=+(l*f)+r*u*a,p=N0(n,s,r),h=[m/Ji,g/Ji,_/Ji],x=ka(p),v=ka(h);return new ei(e,x,v)}function Zs(i,e,t,n){const s=n/(n+vo),r=rr(Rn[t],e);i.x+=s*r.x,i.y+=s*r.y,i.z+=s*r.z}function fg(i){const e=new Nt(0,0,0,i);return Zs(e,i,Re.Jupiter,Da),Zs(e,i,Re.Saturn,Ua),Zs(e,i,Re.Uranus,Ia),Zs(e,i,Re.Neptune,Na),e}const Ga=51,pg=29200,Ri=146,fn=201,$n=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class wt{constructor(e,t,n){this.x=e,this.y=t,this.z=n}clone(){return new wt(this.x,this.y,this.z)}ToAstroVector(e){return new Nt(this.x,this.y,this.z,e)}static zero(){return new wt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new wt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new wt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new wt(e*this.x,e*this.y,e*this.z)}div(e){return new wt(this.x/e,this.y/e,this.z/e)}mean(e){return new wt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new wt(-this.x,-this.y,-this.z)}}class ei{constructor(e,t,n){this.tt=e,this.r=t,this.v=n}clone(){return new ei(this.tt,this.r,this.v)}sub(e){return new ei(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function mg(i){let[e,[t,n,s],[r,o,a]]=i;return new ei(e,new wt(t,n,s),new wt(r,o,a))}function Ks(i,e,t,n){const s=n/(n+vo),r=Ha(Rn[t],e);return i.r.incr(r.r.mul(s)),i.v.incr(r.v.mul(s)),r}function Ki(i,e,t){const n=t.sub(i),s=n.quadrature();return n.mul(e/(s*Math.sqrt(s)))}class Er{constructor(e){let t=new ei(e,new wt(0,0,0),new wt(0,0,0));this.Jupiter=Ks(t,e,Re.Jupiter,Da),this.Saturn=Ks(t,e,Re.Saturn,Ua),this.Uranus=Ks(t,e,Re.Uranus,Ia),this.Neptune=Ks(t,e,Re.Neptune,Na),this.Jupiter.r.decr(t.r),this.Jupiter.v.decr(t.v),this.Saturn.r.decr(t.r),this.Saturn.v.decr(t.v),this.Uranus.r.decr(t.r),this.Uranus.v.decr(t.v),this.Neptune.r.decr(t.r),this.Neptune.v.decr(t.v),this.Sun=new ei(e,t.r.mul(-1),t.v.mul(-1))}Acceleration(e){let t=Ki(e,vo,this.Sun.r);return t.incr(Ki(e,Da,this.Jupiter.r)),t.incr(Ki(e,Ua,this.Saturn.r)),t.incr(Ki(e,Ia,this.Uranus.r)),t.incr(Ki(e,Na,this.Neptune.r)),t}}class br{constructor(e,t,n,s){this.tt=e,this.r=t,this.v=n,this.a=s}clone(){return new br(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class F0{constructor(e,t){this.bary=e,this.grav=t}}function pr(i,e,t,n){return new wt(e.x+i*(t.x+i*n.x/2),e.y+i*(t.y+i*n.y/2),e.z+i*(t.z+i*n.z/2))}function fc(i,e,t){return new wt(e.x+i*t.x,e.y+i*t.y,e.z+i*t.z)}function Va(i,e){const t=i-e.tt,n=new Er(i),s=pr(t,e.r,e.v,e.a),r=n.Acceleration(s).mean(e.a),o=pr(t,e.r,e.v,r),a=e.v.add(r.mul(t)),l=n.Acceleration(o),c=new br(i,o,a,l);return new F0(n,c)}const gg=[];function O0(i,e){const t=Math.floor(i);return t<0?0:t>=e?e-1:t}function Wa(i){const e=mg(i),t=new Er(e.tt),n=e.r.add(t.Sun.r),s=e.v.add(t.Sun.v),r=t.Acceleration(n),o=new br(e.tt,n,s,r);return new F0(t,o)}function _g(i,e){const t=$n[0][0];if(e<t||e>$n[Ga-1][0])return null;const n=O0((e-t)/pg,Ga-1);if(!i[n]){const r=i[n]=[];r[0]=Wa($n[n]).grav,r[fn-1]=Wa($n[n+1]).grav;let o,a=r[0].tt;for(o=1;o<fn-1;++o)r[o]=Va(a+=Ri,r[o-1]).grav;a=r[fn-1].tt;var s=[];for(s[fn-1]=r[fn-1],o=fn-2;o>0;--o)s[o]=Va(a-=Ri,s[o+1]).grav;for(o=fn-2;o>0;--o){const l=o/(fn-1);r[o].r=r[o].r.mul(1-l).add(s[o].r.mul(l)),r[o].v=r[o].v.mul(1-l).add(s[o].v.mul(l)),r[o].a=r[o].a.mul(1-l).add(s[o].a.mul(l))}}return i[n]}function pc(i,e,t){let n=Wa(i);const s=Math.ceil((e-n.grav.tt)/t);for(let r=0;r<s;++r)n=Va(r+1===s?e:n.grav.tt+t,n.grav);return n}function z0(i,e){let t,n,s;const r=_g(gg,i.tt);if(r){const o=O0((i.tt-r[0].tt)/Ri,fn-1),a=r[o],l=r[o+1],c=a.a.mean(l.a),d=pr(i.tt-a.tt,a.r,a.v,c),u=fc(i.tt-a.tt,a.v,c),f=pr(i.tt-l.tt,l.r,l.v,c),m=fc(i.tt-l.tt,l.v,c),g=(i.tt-a.tt)/Ri;t=d.mul(1-g).add(f.mul(g)),n=u.mul(1-g).add(m.mul(g))}else{let o;i.tt<$n[0][0]?o=pc($n[0],i.tt,-Ri):o=pc($n[Ga-1],i.tt,+Ri),t=o.grav.r,n=o.grav.v,s=o.bary}return s||(s=new Er(i.tt)),t=t.sub(s.Sun.r),n=n.sub(s.Sun.v),new nn(t.x,t.y,t.z,n.x,n.y,n.z,i)}const vg=new Fa([[.999432765338654,-.0336771074697641,0],[.0303959428906285,.902057912352809,.430543388542295],[-.0144994559663353,-.430299169409101,.902569881273754]]),Js=[{mu:282489428433814e-21,al:[1.446213296021224,3.5515522861824],a:[[.0028210960212903,0,0]],l:[[-.0001925258348666,4.9369589722645,.01358483658305],[-970803596076e-16,4.3188796477322,.01303413843243],[-8988174165e-14,1.9080016428617,.00305064867158],[-553101050262e-16,1.4936156681569,.01293892891155]],z:[[.0041510849668155,4.089939635545,-.01290686414666],[.0006260521444113,1.446188898627,3.5515522949802],[352747346169e-16,2.1256287034578,.00012727416567]],zeta:[[.0003142172466014,2.7964219722923,-.002315096098],[904169207946e-16,1.0477061879627,-.00056920638196]]},{mu:282483274392893e-21,al:[-.3735263437471362,1.76932271112347],a:[[.0044871037804314,0,0],[4324367498e-16,1.819645606291,1.7822295777568]],l:[[.0008576433172936,4.3188693178264,.01303413830805],[.0004549582875086,1.4936531751079,.01293892881962],[.0003248939825174,1.8196494533458,1.7822295777568],[-.0003074250079334,4.9377037005911,.01358483286724],[.0001982386144784,1.907986905476,.00305101212869],[.0001834063551804,2.1402853388529,.00145009789338],[-.0001434383188452,5.622214036663,.89111478887838],[-771939140944e-16,4.300272437235,2.6733443704266]],z:[[-.0093589104136341,4.0899396509039,-.01290686414666],[.0002988994545555,5.9097265185595,1.7693227079462],[.000213903639035,2.1256289300016,.00012727418407],[.0001980963564781,2.743516829265,.00067797343009],[.0001210388158965,5.5839943711203,320566149e-13],[837042048393e-16,1.6094538368039,-.90402165808846],[823525166369e-16,1.4461887708689,3.5515522949802]],zeta:[[.0040404917832303,1.0477063169425,-.0005692064054],[.0002200421034564,3.3368857864364,-.00012491307307],[.0001662544744719,2.4134862374711,0],[590282470983e-16,5.9719930968366,-3056160225e-14]]},{mu:282498184184723e-21,al:[.2874089391143348,.878207923589328],a:[[.0071566594572575,0,0],[1393029911e-15,1.1586745884981,2.6733443704266]],l:[[.0002310797886226,2.1402987195942,.00145009784384],[-.0001828635964118,4.3188672736968,.01303413828263],[.0001512378778204,4.9373102372298,.01358483481252],[-.0001163720969778,4.300265986149,2.6733443704266],[-955478069846e-16,1.4936612842567,.01293892879857],[815246854464e-16,5.6222137132535,.89111478887838],[-801219679602e-16,1.2995922951532,1.0034433456729],[-607017260182e-16,.64978769669238,.50172167043264]],z:[[.0014289811307319,2.1256295942739,.00012727413029],[.000771093122676,5.5836330003496,320643411e-13],[.0005925911780766,4.0899396636448,-.01290686414666],[.0002045597496146,5.2713683670372,-.12523544076106],[.0001785118648258,.28743156721063,.8782079244252],[.0001131999784893,1.4462127277818,3.5515522949802],[-65877816921e-15,2.2702423990985,-1.7951364394537],[497058888328e-16,5.9096792204858,1.7693227129285]],zeta:[[.0015932721570848,3.3368862796665,-.00012491307058],[.0008533093128905,2.4133881688166,0],[.0003513347911037,5.9720789850127,-3056101771e-14],[-.0001441929255483,1.0477061764435,-.00056920632124]]},{mu:282492144889909e-21,al:[-.3620341291375704,.376486233433828],a:[[.0125879701715314,0,0],[3595204947e-15,.64965776007116,.50172168165034],[27580210652e-16,1.808423578151,3.1750660413359]],l:[[.0005586040123824,2.1404207189815,.00145009793231],[-.0003805813868176,2.7358844897853,2972965062e-14],[.0002205152863262,.649796525964,.5017216724358],[.0001877895151158,1.8084787604005,3.1750660413359],[766916975242e-16,6.2720114319755,1.3928364636651],[747056855106e-16,1.2995916202344,1.0034433456729]],z:[[.0073755808467977,5.5836071576084,3206509914e-14],[.0002065924169942,5.9209831565786,.37648624194703],[.0001589869764021,.28744006242623,.8782079244252],[-.0001561131605348,2.1257397865089,.00012727441285],[.0001486043380971,1.4462134301023,3.5515522949802],[635073108731e-16,5.9096803285954,1.7693227129285],[599351698525e-16,4.1125517584798,-2.7985797954589],[540660842731e-16,5.5390350845569,.00286834082283],[-489596900866e-16,4.6218149483338,-.62695712529519]],zeta:[[.0038422977898495,2.4133922085557,0],[.0022453891791894,5.9721736773277,-3056125525e-14],[-.0002604479450559,3.3368746306409,-.00012491309972],[33211214323e-15,5.5604137742337,.00290037688507]]}];class xg{constructor(e,t,n,s){this.io=e,this.europa=t,this.ganymede=n,this.callisto=s}}function yg(i,e,t){const n=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5],c=Math.sqrt(e/(n*n*n));let d,u,f,m=s+r*Math.sin(s)-o*Math.cos(s);do d=Math.cos(m),u=Math.sin(m),f=(s-m+r*u-o*d)/(1-r*d-o*u),m+=f;while(Math.abs(f)>=1e-12);d=Math.cos(m),u=Math.sin(m);const g=o*d-r*u,_=-r*d-o*u,p=1/(1+_),x=1/(1+Math.sqrt(1-r*r-o*o)),v=n*(d-r-x*o*g),E=n*(u-o+x*r*g),L=c*p*n*(-u-x*o*_),C=c*p*n*(+d+x*r*_),A=2*Math.sqrt(1-a*a-l*l),F=1-2*l*l,y=1-2*a*a,b=2*l*a;return new nn(v*F+E*b,v*b+E*y,(a*E-v*l)*A,L*F+C*b,L*b+C*y,(a*C-L*l)*A,i)}function Qs(i,e){const t=i.tt+18262.5,n=[0,e.al[0]+t*e.al[1],0,0,0,0];for(let[r,o,a]of e.a)n[0]+=r*Math.cos(o+t*a);for(let[r,o,a]of e.l)n[1]+=r*Math.sin(o+t*a);n[1]%=Jt,n[1]<0&&(n[1]+=Jt);for(let[r,o,a]of e.z){const l=o+t*a;n[2]+=r*Math.cos(l),n[3]+=r*Math.sin(l)}for(let[r,o,a]of e.zeta){const l=o+t*a;n[4]+=r*Math.cos(l),n[5]+=r*Math.sin(l)}const s=yg(i,e.mu,n);return Ag(vg,s)}function Xa(i){const e=new Kn(i);return new xg(Qs(e,Js[0]),Qs(e,Js[1]),Qs(e,Js[2]),Qs(e,Js[3]))}function qt(i,e){var t=Fn(e);if(i in Rn)return rr(Rn[i],t);if(i===Re.Pluto){const o=z0(t);return new Nt(o.x,o.y,o.z,t)}if(i===Re.Sun)return new Nt(0,0,0,t);if(i===Re.Moon){var n=rr(Rn.Earth,t),s=ds(t);return new Nt(n.x+s.x,n.y+s.y,n.z+s.z,t)}if(i===Re.EMB){const o=rr(Rn.Earth,t),a=ds(t),l=1+D0;return new Nt(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,t)}if(i===Re.SSB)return fg(t);const r=xo(i);if(r){const o=new ug(r.dec,15*r.ra,r.dist);return Tg(o,t)}throw`HelioVector: Unknown body "${i}"`}function Mg(i,e){let t=e,n=0;for(let s=0;s<10;++s){const r=i(t),o=r.Length()/P0;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(n=Math.abs(a.tt-t.tt),n<1e-9)return r;t=a}throw`Light-travel time solver did not converge: dt = ${n}`}class Sg{constructor(e,t,n,s){this.observerBody=e,this.targetBody=t,this.aberration=n,this.observerPos=s}Position(e){this.aberration&&(this.observerPos=qt(this.observerBody,e));const t=qt(this.targetBody,e);return new Nt(t.x-this.observerPos.x,t.y-this.observerPos.y,t.z-this.observerPos.z,e)}}function Eg(i,e,t,n){U0(n);const s=Fn(i);if(xo(t)){const a=qt(t,s);if(n){const c=wg(e,s),d=new Nt(a.x-c.x,a.y-c.y,a.z-c.z,s),u=P0/d.Length();return new Nt(d.x+c.vx/u,d.y+c.vy/u,d.z+c.vz/u,s)}const l=qt(e,s);return new Nt(a.x-l.x,a.y-l.y,a.z-l.z,s)}let r;n?r=new Nt(0,0,0,s):r=qt(e,s);const o=new Sg(e,t,n,r);return Mg(a=>o.Position(a),s)}function mr(i,e,t){U0(t);const n=Fn(e);switch(i){case Re.Earth:return new Nt(0,0,0,n);case Re.Moon:return ds(n);default:const s=Eg(n,Re.Earth,i,t);return s.t=n,s}}function bg(i,e){return new nn(i.r.x,i.r.y,i.r.z,i.v.x,i.v.y,i.v.z,e)}function wg(i,e){const t=Fn(e);switch(i){case Re.Sun:return new nn(0,0,0,0,0,0,t);case Re.SSB:const n=new Er(t.tt);return new nn(-n.Sun.r.x,-n.Sun.r.y,-n.Sun.r.z,-n.Sun.v.x,-n.Sun.v.y,-n.Sun.v.z,t);case Re.Mercury:case Re.Venus:case Re.Earth:case Re.Mars:case Re.Jupiter:case Re.Saturn:case Re.Uranus:case Re.Neptune:const s=Ha(Rn[i],t.tt);return bg(s,t);case Re.Pluto:return z0(t);case Re.Moon:case Re.EMB:const r=Ha(Rn.Earth,t.tt),o=i==Re.Moon?I0(t):hg(t);return new nn(o.x+r.r.x,o.y+r.r.y,o.z+r.r.z,o.vx+r.v.x,o.vy+r.v.y,o.vz+r.v.z,t);default:if(xo(i)){const a=qt(i,t);return new nn(a.x,a.y,a.z,0,0,0,t)}throw`HelioState: Unsupported body "${i}"`}}var mc;(function(i){i[i.Pericenter=0]="Pericenter",i[i.Apocenter=1]="Apocenter"})(mc||(mc={}));function Tg(i,e){e=Fn(e);const t=i.lat*Pa,n=i.lon*Pa,s=i.dist*Math.cos(t);return new Nt(s*Math.cos(n),s*Math.sin(n),i.dist*Math.sin(t),e)}function Ag(i,e){return new nn(i.rot[0][0]*e.x+i.rot[1][0]*e.y+i.rot[2][0]*e.z,i.rot[0][1]*e.x+i.rot[1][1]*e.y+i.rot[2][1]*e.z,i.rot[0][2]*e.x+i.rot[1][2]*e.y+i.rot[2][2]*e.z,i.rot[0][0]*e.vx+i.rot[1][0]*e.vy+i.rot[2][0]*e.vz,i.rot[0][1]*e.vx+i.rot[1][1]*e.vy+i.rot[2][1]*e.vz,i.rot[0][2]*e.vx+i.rot[1][2]*e.vy+i.rot[2][2]*e.vz,e.t)}var gc;(function(i){i.Penumbral="penumbral",i.Partial="partial",i.Annular="annular",i.Total="total"})(gc||(gc={}));var _c;(function(i){i[i.Invalid=0]="Invalid",i[i.Ascending=1]="Ascending",i[i.Descending=-1]="Descending"})(_c||(_c={}));function B0(i,e,t){const n=U.coordinateSystem,s=new M;if(n==="Geocentric"||n==="Tychonic"){const r=e.find(o=>o.data.name==="Earth");r&&s.copy(r.mesh.position)}else if(n==="Barycentric"){const r=qt(Re.SSB,U.date);s.set(r.x*Ye,r.z*Ye,-r.y*Ye)}else s.copy(t.position);s.applyQuaternion(i.quaternion),i.position.copy(s).negate()}function Cg(i,e){let t=i;for(let n=0;n<10;n++){const s=(t-e*Math.sin(t)-i)/(1-e*Math.cos(t));if(t-=s,Math.abs(s)<1e-6)break}return t}function yo(i,e){const n=new Date("2000-01-01T12:00:00Z").getTime(),s=(e.getTime()-n)/864e5,o=.9856076686/i.a**1.5;let a=i.M+o*s;a=a%360,a<0&&(a+=360);const l=Math.PI/180,c=i.a,d=i.e,u=i.i*l,f=i.Omega*l,m=i.w*l,g=a*l,_=Cg(g,d),p=c*(Math.cos(_)-d),h=c*Math.sqrt(1-d*d)*Math.sin(_),x=Math.cos(f),v=Math.sin(f),E=Math.cos(m),L=Math.sin(m),C=Math.cos(u),A=Math.sin(u),F=p*(x*E-v*L*C)-h*(x*L+v*E*C),y=p*(v*E+x*L*C)+h*(v*L-x*E*C),b=p*(L*A)+h*(E*A);return{x:F,y,z:b}}const er=new M,ma=new M,ga=new M;function vc(i,e,t){if(i.body){const n=qt(Re[i.body],e);t.set(n.x,n.y,n.z)}else if(i.elements){const n=yo(i.elements,e);t.set(n.x,n.y,n.z)}else t.set(0,0,0);return t}function Ya(i,e,t,n){const s=U.coordinateSystem;if(s==="Heliocentric"){i.visible=U.showOrbits,e.visible=!1,i.children.forEach(a=>{const l=t.some(d=>d.data.type==="dwarf"&&a.name===d.data.name+"_Orbit"),c=t.some(d=>d.data.type!=="dwarf"&&a.name===d.data.name+"_Orbit");l?a.visible=U.showDwarfPlanets:c?a.visible=U.showPlanets:a.visible=!0});return}else if(s==="Tychonic"){i.visible=U.showOrbits,e.visible=U.showOrbits;const a=i.getObjectByName("Earth_Orbit");a&&(a.visible=!1),i.children.forEach(l=>{if(l.name!=="Earth_Orbit"){const c=t.some(u=>u.data.type==="dwarf"&&l.name===u.data.name+"_Orbit"),d=t.some(u=>u.data.type!=="dwarf"&&l.name===u.data.name+"_Orbit");c?l.visible=U.showDwarfPlanets:d?l.visible=U.showPlanets:l.visible=!0}})}else i.visible=!1,e.visible=U.showOrbits;if(n&&n.parent&&e.quaternion.copy(n.parent.quaternion),!U.showOrbits)return;const r=t.map(a=>a.data),o=[...t];s==="Geocentric"||s==="Tychonic"?o.push({data:{name:"Sun",body:"Sun",color:16776960,period:365.25}}):s==="Barycentric"&&o.push({data:{name:"Sun",body:"Sun",color:16776960,period:12*365.25}}),o.forEach(a=>{const l=a.data;let c=!0;l.type==="dwarf"?c=U.showDwarfPlanets:l.name!=="Sun"&&(c=U.showPlanets),(s==="Geocentric"||s==="Tychonic")&&l.name==="Earth"&&(c=!1),s==="Tychonic"&&l.name!=="Sun"&&(c=!1);let d=e.getObjectByName(l.name+"_Trail");if(!c){d&&(d.visible=!1);return}const u=l.period||730,f=s==="Geocentric"?5e3:500;let m=Math.ceil(u/2);m>f&&(m=f),m<360&&(m=360);const g=u/2,_=U.date.getTime()-g*24*60*60*1e3;if(!d||d.geometry.attributes.position.count<=m){d&&(d.geometry.dispose(),e.remove(d));const h=new tt,x=new Float32Array((m+1)*3);h.setAttribute("position",new yt(x,3));const v=l.name==="Sun",E=U.showPlanetColors,L=U.showDwarfPlanetColors,A=l.type==="dwarf"?L:E,F=v?l.color||16776960:A&&l.color||4473924,y=new Dt({color:F,transparent:!0,opacity:v||A?.8:.5});d=new rn(h,y),d.name=l.name+"_Trail",d.frustumCulled=!1,e.add(d)}d.visible=!0,d.geometry.setDrawRange(0,m+1);const p=d.geometry.attributes.position.array;for(let h=0;h<=m;h++){const x=new Date(_+h/m*u*24*60*60*1e3);if(l.name==="Sun"?ma.set(0,0,0):vc(l,x,ma),s==="Geocentric"||s==="Tychonic"){const v=r.find(E=>E.name==="Earth");vc(v,x,ga)}else{const v=qt(Re.SSB,x);ga.set(v.x,v.y,v.z)}er.subVectors(ma,ga),p[h*3]=er.x*Ye,p[h*3+1]=er.z*Ye,p[h*3+2]=-er.y*Ye}d.geometry.attributes.position.needsUpdate=!0})}function $a(i,e){if(e)if(i==="Ecliptic"){const n=ro.degToRad(23.43928);e.rotation.x=-n}else e.rotation.x=0}function qa(i,e){const t=e.value;if(t&&t.material){let n=1,s=1;if(i<=.6?n=i/.6*.3:i<=.8?n=.3+(i-.6)/.2*.7:(n=1,s=1+((i-.8)/.2)**3*99),t.material.opacity=n,t.material.color.setScalar(s),i>.8){const r=(i-.8)/.2;t.material.size=1+r*.2}else t.material.size=1}}function Rg(i,e,t,n,s,r,o,a){const l=i.addFolder("Visual");l.add(U,"coordinateSystem",{"Center of Mass (Barycentric)":"Barycentric","Earth (Geocentric)":"Geocentric","Earth (Tychonic)":"Tychonic","Sun (Heliocentric)":"Heliocentric"}).name("Origin").onChange(()=>{B0(n,s,r),Ya(o,a,s,r)}),l.add(U,"referencePlane",["Equatorial","Ecliptic"]).name("Reference Plane").onChange(f=>$a(f,n)),$a(U.referencePlane,n);const c=l.add(U,"starBrightness",0,1).name("Star Brightness").onChange(f=>qa(f,e));c.domElement.classList.add("hide-value"),c.domElement.classList.add("full-width"),qa(U.starBrightness,e);const d=l.add(U,"gamma",.1,5).name("Gamma").onChange(f=>{t&&(t.toneMappingExposure=f)});d.domElement.classList.add("hide-value"),d.domElement.classList.add("full-width"),l.add(U,"showTooltips").name("Tooltips").domElement.classList.add("checkbox-left"),l.close()}function ja(i,e,t,n){e.visible=i,t.forEach(s=>{s.moons.forEach(r=>{if(r.data.orbitLine)if(!i)r.data.orbitLine.visible=!1;else{let o=!1;(r.data.category==="largest"&&U.showLargestMoons||r.data.category==="major"&&U.showMajorMoons||r.data.category==="small"&&U.showSmallMoons)&&(o=!0),r.data.category||(o=!0),r.data.orbitLine.visible=o}})})}function k0(i,e,t){e.axisLine&&(e.axisLine.visible=i),t.forEach(n=>{n.data.axisLine&&(n.data.axisLine.visible=i),n.moons.forEach(s=>{s.data.axisLine&&(s.data.axisLine.visible=i)})})}function gr(i,e){const t=U.showZodiacs,n=U.showConstellations;if(i){i.visible=t||n;const s=t?4482696:13421772;i.children.forEach(r=>{r.material&&(r.material.color.setHex(s),r.material.opacity=t?.6:.4)})}e&&(e.visible=n)}function H0(i,e){e&&(e.visible=i)}function G0(i,e){e&&(e.visible=i)}function Za(i,e,t,n){e&&(e.visible=i,t.forEach(s=>{s.mesh.children.forEach(r=>{r.type==="Group"&&r.children.length>0&&r.children[0].type==="Line"&&(r.visible=i)}),s.moons.forEach(r=>{r.mesh.children.forEach(o=>{o.type==="Group"&&o.children.length>0&&o.children[0].type==="Line"&&(o.visible=i)})})})),n&&(i?n.show():n.hide())}function Ka(i){const e=U.planetScale*pn;let t=1;U.capMagneticFields&&e>100&&(t=100/e),i.forEach(n=>{const s=n.mesh.getObjectByName("MagneticField");s&&s.scale.setScalar(t),n.moons.forEach(r=>{const o=r.mesh.getObjectByName("MagneticField");o&&o.scale.setScalar(t)})})}function Lg(i,e,t,n,s,r,o,a,l,c,d){const u=i.addFolder("Overlays"),f=u.addFolder("Constellations");f.domElement.classList.add("constellations-folder"),f.close(),f.add(U,"showConstellations").name("Constellations (All)").onChange(()=>gr(t,n)).domElement.classList.add("checkbox-left"),f.add(U,"showZodiacs").name("Zodiacs").onChange(()=>gr(t,n)).domElement.classList.add("checkbox-left"),f.add(U,"showZodiacSigns").name("Zodiac Signs").onChange(B=>H0(B,o)).domElement.classList.add("checkbox-left");const p=u.addFolder("Orbits");p.domElement.classList.add("orbits-folder"),p.close();const h=p.add(U,"showOrbits").name("Show");h.domElement.classList.add("checkbox-left"),p.add(U,"capMoonOrbits").name("Cap Moon Orbits When Scaling").onChange(()=>{}).domElement.classList.add("checkbox-left"),ja(U.showOrbits,e,s),p.add(U,"showPlanetColors").name("Planet Colors").onChange(()=>{xc(e,c,s)}).domElement.classList.add("checkbox-left"),p.add(U,"showDwarfPlanetColors").name("Dwarf Planet Colors").onChange(()=>{xc(e,c,s)}).domElement.classList.add("checkbox-left"),h.onChange(B=>{ja(B,e,s)});const L=u.addFolder("Magnetic Fields");L.domElement.classList.add("magnetic-fields-folder"),L.close(),L.add(U,"showSunMagneticFieldBasic").name("Sun").onChange(B=>{if(d){const K=d.children.find(P=>P.name==="SunMagneticFieldBasic");K&&(K.visible=B)}A&&(B?A.show():A.hide())}).domElement.classList.add("checkbox-left");const A=L.add(U,"showSunMagneticField").name("Solar Wind").onChange(B=>{if(d){const K=d.children.find(P=>P.name==="MagneticField");K&&(K.visible=B)}});A.domElement.classList.add("checkbox-left"),A.domElement.classList.add("child-control"),U.showSunMagneticFieldBasic?A.show():A.hide(),L.add(U,"showMagneticFields").name("Planets, Moons").onChange(B=>Za(B,l,s,y)).domElement.classList.add("checkbox-left");const y=L.add(U,"capMagneticFields").name("Cap When Scaling").onChange(()=>{Ka(s)});y.domElement.classList.add("checkbox-left"),y.domElement.classList.add("child-control"),Za(U.showMagneticFields,l,s,y),u.add(U,"showAxes").name("Axes").onChange(B=>k0(B,r,s)).domElement.classList.add("checkbox-left"),u.add(U,"showHabitableZone").name("Habitable Zone").onChange(B=>G0(B,a)).domElement.classList.add("checkbox-left"),u.close()}function V0(i,e){e.visible=i}function Ja(i,e){e.forEach(t=>{t.data.type!=="dwarf"&&(t.mesh.visible=i,t.data.cloudMesh&&(t.data.cloudMesh.visible=i),t.orbitLine&&(t.orbitLine.visible=i),t.group.children.forEach(n=>{n!==t.mesh&&n!==t.orbitLinesGroup&&n.type==="Mesh"&&(n.userData.isMoon||(n.visible=i))}))})}function Qa(i,e){e.forEach(t=>{t.data.type==="dwarf"&&(t.group.visible=i,t.orbitLine&&(t.orbitLine.visible=i))})}function Wn(i,e,t){e.forEach(n=>{n.moons.forEach(s=>{s.data.category===t&&(s.mesh.visible=i,s.data.orbitLine&&(s.data.orbitLine.visible=i))})})}function Pg(i,e,t){const n=i.addFolder("Objects");n.add(U,"showSun").name("Sun").onChange(d=>V0(d,t)).domElement.classList.add("checkbox-left"),n.add(U,"showPlanets").name("Planets").onChange(d=>Ja(d,e)).domElement.classList.add("checkbox-left"),Ja(U.showPlanets,e),n.add(U,"showDwarfPlanets").name("Dwarf Planets").onChange(d=>Qa(d,e)).domElement.classList.add("checkbox-left"),Qa(U.showDwarfPlanets,e),n.add(U,"showLargestMoons").name("Largest Moons").onChange(d=>Wn(d,e,"largest")).domElement.classList.add("checkbox-left"),Wn(U.showLargestMoons,e,"largest"),n.add(U,"showMajorMoons").name("Major Moons").onChange(d=>Wn(d,e,"major")).domElement.classList.add("checkbox-left"),Wn(U.showMajorMoons,e,"major"),n.add(U,"showSmallMoons").name("Small Moons").onChange(d=>Wn(d,e,"small")).domElement.classList.add("checkbox-left"),Wn(U.showSmallMoons,e,"small"),n.close()}function xc(i,e,t){const n=U.showPlanetColors,s=U.showDwarfPlanetColors;console.log("updateOrbitColors called. showColors:",n,"showDwarfColors:",s),i.children.forEach(r=>{const o=r.name.replace("_Orbit",""),a=t.find(l=>l.data.name===o);if(a){const c=a.data.type==="dwarf"?s:n,d=c&&a.data.color||4473924;r.material&&(r.material.color.setHex(d),r.material.opacity=c?.8:.5)}}),e.children.forEach(r=>{const o=r.name.replace("_Trail","");if(o==="Sun")return;const a=t.find(l=>l.data.name===o);if(a){const c=a.data.type==="dwarf"?s:n,d=c&&a.data.color||4473924;r.material&&(r.material.color.setHex(d),r.material.opacity=c?.8:.5)}})}function yc(i,e){if(!i)return;const t=i.children.find(s=>s.name==="SunMagneticFieldBasic");t&&t.scale.setScalar(e);const n=i.children.find(s=>s.name==="MagneticField");n&&n.scale.setScalar(e)}class Dg{constructor(e,t,n,s,r,o,a,l,c,d,u,f){this.planets=e,this.sun=t,this.orbitGroup=n,this.zodiacGroup=s,this.constellationsGroup=r,this.starsRef=o,this.camera=a,this.controls=l,this.zodiacSignsGroup=c,this.habitableZone=d,this.magneticFieldsGroup=u,this.universeGroup=f}getConfig(){return U}setSpeed(e){U.simulationSpeed=e}setDate(e){const[t,n,s]=e.split("-").map(Number),r=U.date;U.date=new Date(t,n-1,s,r.getHours(),r.getMinutes(),r.getSeconds())}focus(e){const t=e.toLowerCase();if(t==="sun"){Ui({mesh:this.sun,data:{name:"Sun",radius:5},type:"sun"},this.camera,this.controls);return}for(const n of this.planets){if(n.data.name.toLowerCase()===t){Ui(n,this.camera,this.controls);return}for(const s of n.moons)if(s.data.name.toLowerCase()===t){Ui(s,this.camera,this.controls);return}}console.warn(`Object '${e}' not found.`)}exitFocus(){ls(this.controls)}rotateToDarkSide(){const e=this.controls.target,t=this.camera,n=new M(0,0,0),s=e.clone(),r=new M().subVectors(s,n).normalize(),o=t.position.distanceTo(s),a=s.clone().add(r.multiplyScalar(o));t.position.copy(a),this.controls.update()}setReferencePlane(e){if(e!=="Equatorial"&&e!=="Ecliptic"){console.warn("Invalid plane. Use 'Equatorial' or 'Ecliptic'.");return}U.referencePlane=e,$a(e,this.universeGroup)}setStarBrightness(e){U.starBrightness=Math.max(0,Math.min(1,e)),qa(U.starBrightness,this.starsRef)}toggleOrbits(e){U.showOrbits=e,ja(e,this.orbitGroup,this.planets)}toggleAxes(e){U.showAxes=e,k0(e,this.sun,this.planets)}toggleZodiacs(e){U.showZodiacs=e,gr(this.zodiacGroup,this.constellationsGroup)}toggleConstellations(e){U.showConstellations=e,gr(this.zodiacGroup,this.constellationsGroup)}toggleZodiacSigns(e){U.showZodiacSigns=e,H0(e,this.zodiacSignsGroup)}toggleHabitableZone(e){U.showHabitableZone=e,G0(e,this.habitableZone)}toggleMagneticFields(e){U.showMagneticFields=e,Za(e,this.magneticFieldsGroup,this.planets,null)}toggleSunMagneticFieldBasic(e){if(U.showSunMagneticFieldBasic=e,this.universeGroup){const t=this.universeGroup.children.find(n=>n.name==="SunMagneticFieldBasic");t&&(t.visible=e)}}toggleSunMagneticFieldSolarWind(e){if(U.showSunMagneticField=e,this.universeGroup){const t=this.universeGroup.children.find(n=>n.name==="MagneticField");t&&(t.visible=e)}}toggleSun(e){U.showSun=e,V0(e,this.sun)}togglePlanets(e){U.showPlanets=e,Ja(e,this.planets)}toggleDwarfPlanets(e){U.showDwarfPlanets=e,Qa(e,this.planets)}toggleMoons(e,t){if(e==="largest")U.showLargestMoons=t;else if(e==="major")U.showMajorMoons=t;else if(e==="small")U.showSmallMoons=t;else{console.warn("Invalid moon category. Use 'largest', 'major', or 'small'.");return}Wn(t,this.planets,e)}}const Ug=10;function Ig(i,e,t,n,s,r){const o=document.getElementById("tooltip"),a=new H1,l=new ge;window.addEventListener("mousemove",c=>{l.x=c.clientX/window.innerWidth*2-1,l.y=-(c.clientY/window.innerHeight)*2+1;const d=c.clientX,u=c.clientY;if(c.target.closest(".lil-gui")){o.style.display="none",document.body.style.cursor="default";return}if(!U.showTooltips){o.style.display="none",document.body.style.cursor="default";return}let f=null;const m=[t];e.forEach(_=>{m.push(_.mesh),_.moons&&_.moons.forEach(p=>m.push(p.mesh))}),a.setFromCamera(l,i);const g=a.intersectObjects(m,!0);if(g.length>0){const _=g[0],p=Ng(_.object,e,t);p&&(f=p)}if(!f){const _=n.value;if(_){const p=_.geometry.attributes.position.array,h=_.userData.starData;let v=15;for(let E=0;E<h.length;E++){const L=p[E*3],C=p[E*3+1],A=p[E*3+2],F=new M(L,C,A);F.applyMatrix4(_.matrixWorld);const y=F.clone().project(i);if(y.z<1&&y.z>-1){const b=(y.x*.5+.5)*window.innerWidth,N=(-(y.y*.5)+.5)*window.innerHeight,B=d-b,K=u-N,P=Math.sqrt(B*B+K*K);P<v&&(v=P,f={data:h[E],type:"star"})}}}}if(!f){const _=[];s&&s.visible&&_.push(s),r&&r.visible&&_.push(r);let p=Ug;_.forEach(h=>{h.children.forEach(x=>{if(!x.isLine)return;const v=x.geometry.attributes.position,E=new M,L=new M;for(let C=0;C<v.count-1;C++){E.fromBufferAttribute(v,C),L.fromBufferAttribute(v,C+1),E.applyMatrix4(x.matrixWorld),L.applyMatrix4(x.matrixWorld);const A=E.clone().project(i),F=L.clone().project(i);if(A.z<-1||A.z>1||F.z<-1||F.z>1)continue;const y=(A.x*.5+.5)*window.innerWidth,b=(-(A.y*.5)+.5)*window.innerHeight,N=(F.x*.5+.5)*window.innerWidth,B=(-(F.y*.5)+.5)*window.innerHeight,K=Wg(d,u,y,b,N,B);K<p*p&&(p=Math.sqrt(K),f={type:"constellation",data:x.userData})}})})}if(f){o.innerHTML=Vg(f),o.style.display="block",document.body.style.cursor="pointer";const _=o.offsetWidth,p=o.offsetHeight,h=15;let x=d+h,v=u+h;x+_>window.innerWidth&&(x=d-_-h),v+p>window.innerHeight&&(v=u-p-h),x<0&&(x=h),v<0&&(v=h),o.style.left=`${x}px`,o.style.top=`${v}px`}else o.style.display="none",document.body.style.cursor="default"})}function Ng(i,e,t){if(i.userData&&i.userData.type==="constellation")return{type:"constellation",data:i.userData};if(i===t||i.parent===t)return{type:"sun",data:{}};for(const n of e){if(n.mesh===i||n.mesh===i.parent)return{type:"planet",data:n.data,worldPos:n.mesh.position};if(n.moons){for(const s of n.moons)if(s.mesh===i||s.mesh===i.parent)return{type:"moon",data:s.data}}}return null}function _s(i,e,t=null){let n='<div style="min-width: 200px;">';return n+=`<strong style="font-size: 1.1em;">${i}</strong><br>`,e.length>0&&(n+='<hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.2); margin: 5px 0;">',e.forEach(s=>{n+=`<strong>${s.label}:</strong> ${s.value}<br>`})),t&&(n+=t),n+="</div>",n}function Fg(i){if(!i.body||!(Re!=null&&Re[i.body]))return null;try{const e=U.date instanceof Date?U.date:new Date,t=Re[i.body],n=(void 0)(t,e),s=qt(t,e),r=mr(t,e),o=n.nu.toFixed(1),l=(Math.sqrt(s.vx**2+s.vy**2+s.vz**2)*1495978707e-1/86400).toFixed(2),c=Math.sqrt(r.x**2+r.y**2+r.z**2),d=(c*499.00478/60).toFixed(2);return{trueAnomaly:o,velocity:l,distanceAU:c.toFixed(3),lightTime:d}}catch(e){return console.warn(`Error calculating live data for ${i.name}`,e),null}}function Og(i){return`
        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.05); padding: 5px; border-radius: 4px;">
            <strong style="color: #aaf;">LIVE DATA</strong><br>
            <strong>True Anomaly:</strong> ${i.trueAnomaly}°<br>
            <strong>Heliocentric Velocity:</strong> ${i.velocity} km/s<br>
            <strong>Distance to Earth:</strong> ${i.distanceAU} AU<br>
            <strong>Light Time:</strong> ${i.lightTime} min<br>
        </div>
    `}function zg(){return _s("Sun",[{label:"Type",value:"G-type Main Sequence Star (G2V)"},{label:"Radius",value:"696,340 km (109 x Earth)"},{label:"Mass",value:"1.989 × 10³⁰ kg (333,000 x Earth)"},{label:"Density",value:"1.41 g/cm³"},{label:"Surface Gravity",value:"274 m/s² (28 g)"},{label:"Surface Temp",value:"5,500°C"},{label:"Core Temp",value:"15,000,000°C"},{label:"Rotation",value:"~27 days (Differential)"},{label:"Age",value:"4.6 Billion Years"}])}function Bg(i){const e=[{label:"Type",value:i.type==="dwarf"?"Dwarf Planet":"Planet"}];i.details&&e.push({label:"Year",value:`${i.period.toFixed(1)} days`},{label:"Radius",value:`${i.radius} Earths`},{label:"Mass",value:i.details.mass},{label:"Density",value:i.details.density},{label:"Gravity",value:i.details.gravity},{label:"Albedo",value:i.details.albedo},{label:"Surface Temp",value:i.details.temp},{label:"Surface Pressure",value:i.details.pressure},{label:"Solar Day",value:i.details.solarDay},{label:"Sidereal Day",value:i.details.siderealDay},{label:"Axial Tilt",value:`${i.axialTilt}°`},{label:"Eccentricity",value:i.details.eccentricity},{label:"Inclination",value:i.details.inclination});const t=Fg(i),n=t?Og(t):null;return _s(i.name,e,n)}function kg(i){return _s(i.name,[{label:"Type",value:"Moon"},{label:"Orbital Period",value:`${i.period.toFixed(1)} days`}])}function Hg(i){const e=i.distance?(i.distance*3.26156).toFixed(1):"N/A",t=i.radius?i.radius.toFixed(1):"N/A",n=i.name||`HD ${i.id}`,s=i.spectralType||"Unknown";return _s(n,[{label:"Distance",value:`${e} LY`},{label:"Type",value:s},{label:"Luminosity",value:t},{label:"Catalog ID",value:i.id}])}function Gg(i){const e=i.isZodiac?"Zodiac Constellation":"Constellation";return _s(i.id,[{label:"Type",value:e}])}function Vg(i){try{const e=i.data;switch(i.type){case"sun":return zg();case"planet":return Bg(e);case"moon":return kg(e);case"star":return Hg(e);case"constellation":return Gg(e);default:return""}}catch(e){return console.error("Error formatting tooltip:",e),"Error loading data"}}function Wg(i,e,t,n,s,r){const o=(t-s)*(t-s)+(n-r)*(n-r);if(o===0)return(i-t)*(i-t)+(e-n)*(e-n);let a=((i-t)*(s-t)+(e-n)*(r-n))/o;a=Math.max(0,Math.min(1,a));const l=t+a*(s-t),c=n+a*(r-n);return(i-l)*(i-l)+(e-c)*(e-c)}const Mc={Earth:[{name:"Moon",body:"Moon",category:"largest",radius:.27,diameter:3474.8,color:8947848,type:"real",period:27.3,texture:"/assets/textures/moon.jpg",tidallyLocked:!0,axialTilt:6.7,mass:7342e19,gravity:1.62,meanTemp:220,discoveryYear:"Prehistoric",discoveredBy:"Unknown"}],Jupiter:[{name:"Io",category:"largest",radius:.28,diameter:3643.2,color:16776960,type:"jovian",moonIndex:0,period:1.77,texture:"/assets/textures/io.png",tidallyLocked:!0,axialTilt:0,mass:8932e19,gravity:1.796,meanTemp:110,discoveryYear:1610,discoveredBy:"Galileo Galilei"},{name:"Europa",category:"largest",radius:.24,diameter:3121.6,color:16777215,type:"jovian",moonIndex:1,period:3.55,texture:"/assets/textures/europa.png",tidallyLocked:!0,axialTilt:0,mass:48e21,gravity:1.314,meanTemp:102,discoveryYear:1610,discoveredBy:"Galileo Galilei"},{name:"Ganymede",category:"largest",radius:.41,diameter:5268.2,color:14540253,type:"jovian",moonIndex:2,period:7.15,texture:"/assets/textures/ganymede.png",tidallyLocked:!0,axialTilt:0,mass:1482e20,gravity:1.428,meanTemp:110,discoveryYear:1610,discoveredBy:"Galileo Galilei",magneticField:{strength:2,tilt:176,color:65535}},{name:"Callisto",category:"largest",radius:.37,diameter:4820.6,color:11184810,type:"jovian",moonIndex:3,period:16.7,texture:"/assets/textures/callisto.png",tidallyLocked:!0,axialTilt:0,mass:1076e20,gravity:1.235,meanTemp:134,discoveryYear:1610,discoveredBy:"Galileo Galilei"}],Saturn:[{name:"Titan",category:"largest",radius:.4,diameter:5150,distance:.00816,color:16755200,type:"simple",period:15.95,texture:"/assets/textures/titan.png",tidallyLocked:!0,axialTilt:0,mass:1345e20,gravity:1.352,meanTemp:94,discoveryYear:1655,discoveredBy:"Christiaan Huygens"}],Neptune:[{name:"Triton",category:"largest",radius:.21,diameter:2706.8,color:16764108,type:"simple",distance:.00237,period:5.88,texture:"/assets/textures/triton.jpg",tidallyLocked:!0,axialTilt:0,mass:214e20,gravity:.779,meanTemp:38,discoveryYear:1846,discoveredBy:"William Lassell"}]},Sc={Mars:[{name:"Phobos",category:"major",radius:.0018,diameter:22.2,color:8947848,type:"simple",distance:627e-7,period:.319,texture:"/assets/textures/phobos.jpg",tidallyLocked:!0,axialTilt:0,mass:10659e12,gravity:.0057,meanTemp:233,discoveryYear:1877,discoveredBy:"Asaph Hall"},{name:"Deimos",category:"major",radius:98e-5,diameter:12.4,color:10066329,type:"simple",distance:157e-6,period:1.263,texture:"/assets/textures/deimos.jpg",tidallyLocked:!0,axialTilt:0,mass:14762e11,gravity:.003,meanTemp:233,discoveryYear:1877,discoveredBy:"Asaph Hall"}],Saturn:[{name:"Mimas",category:"major",radius:.031,diameter:396.4,color:13421772,type:"simple",distance:.001239,period:.942,texture:"/assets/textures/mimas.jpg",tidallyLocked:!0,axialTilt:0,mass:375e17,gravity:.064,meanTemp:64,discoveryYear:1789,discoveredBy:"William Herschel"},{name:"Enceladus",category:"major",radius:.0397,diameter:504.2,color:16777215,type:"simple",distance:.00159,period:1.37,texture:"/assets/textures/enceladus.jpg",tidallyLocked:!0,axialTilt:0,mass:108e18,gravity:.113,meanTemp:75,discoveryYear:1789,discoveredBy:"William Herschel"},{name:"Tethys",category:"major",radius:.0835,diameter:1062.2,color:14540253,type:"simple",distance:.00197,period:1.888,texture:"/assets/textures/tethys.jpg",tidallyLocked:!0,axialTilt:0,mass:618e18,gravity:.146,meanTemp:86,discoveryYear:1684,discoveredBy:"Giovanni Cassini"},{name:"Dione",category:"major",radius:.088,diameter:1122.8,color:13421772,type:"simple",distance:.00252,period:2.737,texture:"/assets/textures/dione.jpg",tidallyLocked:!0,axialTilt:0,mass:11e20,gravity:.232,meanTemp:87,discoveryYear:1684,discoveredBy:"Giovanni Cassini"},{name:"Rhea",category:"major",radius:.12,diameter:1527.6,color:12303291,type:"simple",distance:.00352,period:4.518,texture:"/assets/textures/rhea.jpg",tidallyLocked:!0,axialTilt:0,mass:231e19,gravity:.264,meanTemp:76,discoveryYear:1672,discoveredBy:"Giovanni Cassini"},{name:"Iapetus",category:"major",radius:.115,diameter:1468.6,color:8943462,type:"simple",distance:.0238,period:79.33,texture:"/assets/textures/iapetus.jpg",tidallyLocked:!0,axialTilt:0,mass:181e19,gravity:.223,meanTemp:110,discoveryYear:1671,discoveredBy:"Giovanni Cassini"}],Uranus:[{name:"Miranda",category:"major",radius:.037,diameter:471.6,color:11184810,type:"simple",distance:866e-6,period:1.413,tidallyLocked:!0,axialTilt:0,mass:659e17,gravity:.079,meanTemp:60,discoveryYear:1948,discoveredBy:"Gerard Kuiper"},{name:"Ariel",category:"major",radius:.091,diameter:1157.8,color:13421772,type:"simple",distance:.00128,period:2.52,texture:"/assets/textures/ariel.jpg",tidallyLocked:!0,axialTilt:0,mass:135e19,gravity:.269,meanTemp:60,discoveryYear:1851,discoveredBy:"William Lassell"},{name:"Umbriel",category:"major",radius:.092,diameter:1169.4,color:7829367,type:"simple",distance:.00178,period:4.144,texture:"/assets/textures/umbriel.jpg",tidallyLocked:!0,axialTilt:0,mass:117e19,gravity:.234,meanTemp:75,discoveryYear:1851,discoveredBy:"William Lassell"},{name:"Titania",category:"major",radius:.123,diameter:1577.8,color:14535867,type:"simple",distance:.00291,period:8.706,texture:"/assets/textures/titania.jpg",tidallyLocked:!0,axialTilt:0,mass:353e19,gravity:.379,meanTemp:70,discoveryYear:1787,discoveredBy:"William Herschel"},{name:"Oberon",category:"major",radius:.119,diameter:1522.8,color:13417386,type:"simple",distance:.0039,period:13.463,texture:"/assets/textures/oberon.jpg",tidallyLocked:!0,axialTilt:0,mass:301e19,gravity:.346,meanTemp:75,discoveryYear:1787,discoveredBy:"William Herschel"}],Neptune:[{name:"Proteus",category:"major",radius:.033,diameter:420,color:8947848,type:"simple",distance:787e-6,period:1.122,texture:"/assets/textures/proteus.jpg",tidallyLocked:!0,axialTilt:0,mass:44e18,gravity:.07,meanTemp:51,discoveryYear:1989,discoveredBy:"Voyager 2"}]},Ec={Jupiter:[{name:"Metis",category:"small",radius:.0034,diameter:43,color:11176038,type:"simple",distance:861e-6,period:.295,tidallyLocked:!0,axialTilt:0,mass:36e15,gravity:.005,discoveryYear:1979,discoveredBy:"Voyager 1"},{name:"Adrastea",category:"small",radius:.00129,diameter:16.4,color:11176038,type:"simple",distance:861e-6,period:.298,tidallyLocked:!0,axialTilt:0,mass:2e15,gravity:.002,discoveryYear:1979,discoveredBy:"Voyager 2"},{name:"Amalthea",category:"small",radius:.0166,diameter:167,color:14518374,type:"simple",distance:.00121,period:.498,texture:"/assets/textures/amalthea.jpg",tidallyLocked:!0,axialTilt:0,mass:208e16,gravity:.02,discoveryYear:1892,discoveredBy:"Edward Barnard"},{name:"Thebe",category:"small",radius:.0077,diameter:98.6,color:11171669,type:"simple",distance:.00148,period:.675,tidallyLocked:!0,axialTilt:0,mass:43e16,gravity:.013,discoveryYear:1979,discoveredBy:"Voyager 1"}],Saturn:[{name:"Pan",category:"small",radius:.00222,diameter:28.2,color:13421772,type:"simple",distance:894e-6,period:.575,tidallyLocked:!0,axialTilt:0,mass:495e13,gravity:.006,discoveryYear:1990,discoveredBy:"Mark Showalter"},{name:"Epimetheus",category:"small",radius:.00907,diameter:115.2,color:12303291,type:"simple",distance:.001013,period:.695,tidallyLocked:!0,axialTilt:0,mass:527e15,gravity:.018,discoveryYear:1980,discoveredBy:"John Fountain, Stephen Larson"},{name:"Janus",category:"small",radius:.014,diameter:179.8,color:12303291,type:"simple",distance:.001013,period:.695,tidallyLocked:!0,axialTilt:0,mass:19e17,gravity:.027,discoveryYear:1980,discoveredBy:"Various"},{name:"Hyperion",category:"small",radius:.0212,diameter:270,color:13413e3,type:"simple",distance:.00994,period:21.277,tidallyLocked:!1,axialTilt:0,mass:558e16,gravity:.04,discoveryYear:1848,discoveredBy:"William Bond"},{name:"Phoebe",category:"small",radius:.0168,diameter:213,color:6706500,type:"simple",distance:.0865,period:550.48,texture:"/assets/textures/phoebe.jpg",tidallyLocked:!1,axialTilt:0,mass:829e16,gravity:.039,discoveryYear:1899,discoveredBy:"William Pickering"}],Uranus:[{name:"Cordelia",category:"small",radius:.0032,diameter:40.2,color:8947848,type:"simple",distance:334e-6,period:.335,tidallyLocked:!0,axialTilt:0,mass:45e15,gravity:.008,discoveryYear:1986,discoveredBy:"Voyager 2"},{name:"Ophelia",category:"small",radius:.0034,diameter:42.8,color:8947848,type:"simple",distance:357e-6,period:.376,tidallyLocked:!0,axialTilt:0,mass:53e15,gravity:.009,discoveryYear:1986,discoveredBy:"Voyager 2"},{name:"Puck",category:"small",radius:.0127,diameter:162,color:7829367,type:"simple",distance:574e-6,period:.762,texture:"/assets/textures/puck.jpg",tidallyLocked:!0,axialTilt:0,mass:29e17,gravity:.029,discoveryYear:1985,discoveredBy:"Voyager 2"}],Neptune:[{name:"Naiad",category:"small",radius:.0052,diameter:66,color:8947848,type:"simple",distance:323e-6,period:.294,tidallyLocked:!0,axialTilt:0,mass:19e16,gravity:.011,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Thalassa",category:"small",radius:.0065,diameter:82,color:8947848,type:"simple",distance:336e-6,period:.311,tidallyLocked:!0,axialTilt:0,mass:37e16,gravity:.013,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Despina",category:"small",radius:.0118,diameter:150,color:8947848,type:"simple",distance:351e-6,period:.335,tidallyLocked:!0,axialTilt:0,mass:21e17,gravity:.023,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Galatea",category:"small",radius:.0138,diameter:176,color:8947848,type:"simple",distance:413e-6,period:.429,tidallyLocked:!0,axialTilt:0,mass:212e16,gravity:.025,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Larissa",category:"small",radius:.0153,diameter:194,color:7829367,type:"simple",distance:491e-6,period:.555,texture:"/assets/textures/larissa.jpg",tidallyLocked:!0,axialTilt:0,mass:42e17,gravity:.03,discoveryYear:1989,discoveredBy:"Voyager 2"},{name:"Nereid",category:"small",radius:.0268,diameter:340,color:11184810,type:"simple",distance:.0367,period:360.14,tidallyLocked:!1,axialTilt:0,mass:31e18,gravity:.059,discoveryYear:1949,discoveredBy:"Gerard Kuiper"}]};function wi(i){const e=[];return Mc[i]&&e.push(...Mc[i]),Sc[i]&&e.push(...Sc[i]),Ec[i]&&e.push(...Ec[i]),e}const Xg=[{name:"Mercury",body:"Mercury",radius:.38,color:11184810,period:88,texture:"/assets/textures/mercury.jpg",rotationPeriod:1408,axialTilt:.01,details:{mass:"0.330 × 10²⁴ kg",density:"5427 kg/m³",gravity:"0.38 g",albedo:"0.12",temp:"-173°C to 427°C",pressure:"~0 bar",solarDay:"176 days",siderealDay:"58.6 days",eccentricity:"0.205",inclination:"7.0°"},magneticField:{strength:1.5,tilt:0,color:65535}},{name:"Venus",body:"Venus",radius:.95,color:16763904,period:225,texture:"/assets/textures/venus.jpg",rotationPeriod:5832,axialTilt:177.4,details:{mass:"4.87 × 10²⁴ kg",density:"5243 kg/m³",gravity:"0.90 g",albedo:"0.75",temp:"462°C",pressure:"92 bar",solarDay:"116.75 days",siderealDay:"243 days",eccentricity:"0.007",inclination:"3.4°"}},{name:"Earth",body:"Earth",radius:1,color:2241535,period:365.25,texture:"/assets/textures/earth.jpg",cloudTexture:"/assets/textures/earth_clouds.png",rotationPeriod:24,axialTilt:23.4,details:{mass:"5.97 × 10²⁴ kg",density:"5514 kg/m³",gravity:"1.0 g",albedo:"0.30",temp:"-88°C to 58°C",pressure:"1.013 bar",solarDay:"24 h",siderealDay:"23h 56m",eccentricity:"0.017",inclination:"0.0°"},moons:wi("Earth"),magneticField:{strength:10,tilt:11.5,color:65535}},{name:"Mars",body:"Mars",radius:.53,color:16729088,period:687,texture:"/assets/textures/mars.jpg",rotationPeriod:24.6,axialTilt:25.2,details:{mass:"0.642 × 10²⁴ kg",density:"3933 kg/m³",gravity:"0.38 g",albedo:"0.16",temp:"-153°C to 20°C",pressure:"0.006 bar",solarDay:"24h 40m",siderealDay:"24h 37m",eccentricity:"0.094",inclination:"1.85°"},moons:wi("Mars")},{name:"Jupiter",body:"Jupiter",radius:11,color:13808780,period:4333,texture:"/assets/textures/jupiter.jpg",rotationPeriod:9.9,axialTilt:3.1,details:{mass:"1898 × 10²⁴ kg",density:"1326 kg/m³",gravity:"2.53 g",albedo:"0.34",temp:"-108°C (1 bar)",pressure:"Unknown",solarDay:"9h 56m",siderealDay:"9h 55m",eccentricity:"0.049",inclination:"1.3°"},moons:wi("Jupiter"),magneticField:{strength:65,tilt:9.6,color:65535}},{name:"Saturn",body:"Saturn",radius:9,color:15645576,period:10759,texture:"/assets/textures/saturn.jpg",rotationPeriod:10.7,axialTilt:26.7,ring:{inner:11,outer:18,color:11176038,texture:"/assets/textures/saturn_ring.png"},details:{mass:"568 × 10²⁴ kg",density:"687 kg/m³",gravity:"1.07 g",albedo:"0.34",temp:"-139°C (1 bar)",pressure:"Unknown",solarDay:"10h 33m",siderealDay:"10h 33m",eccentricity:"0.057",inclination:"2.49°"},moons:wi("Saturn"),magneticField:{strength:20,tilt:0,color:65535}},{name:"Uranus",body:"Uranus",radius:4,color:5230823,period:30687,texture:"/assets/textures/uranus.jpg",rotationPeriod:17.2,axialTilt:97.8,details:{mass:"86.8 × 10²⁴ kg",density:"1271 kg/m³",gravity:"0.89 g",albedo:"0.30",temp:"-197°C",pressure:"Unknown",solarDay:"17h 14m",siderealDay:"17h 14m",eccentricity:"0.046",inclination:"0.77°"},moons:wi("Uranus"),magneticField:{strength:18,tilt:59,color:65535}},{name:"Neptune",body:"Neptune",radius:3.9,color:4944093,period:60190,texture:"/assets/textures/neptune.jpg",rotationPeriod:16.1,axialTilt:28.3,details:{mass:"102 × 10²⁴ kg",density:"1638 kg/m³",gravity:"1.14 g",albedo:"0.29",temp:"-201°C",pressure:"Unknown",solarDay:"16h 6m",siderealDay:"16h 6m",eccentricity:"0.011",inclination:"1.77°"},moons:wi("Neptune"),magneticField:{strength:24,tilt:47,color:65535}}],Yg=[{name:"Ceres",type:"dwarf",radius:.07,color:11184810,period:1682,texture:"/assets/textures/ceres.jpg",rotationPeriod:9.1,axialTilt:4,elements:{a:2.767,e:.079,i:10.59,Omega:80.33,w:73.51,M:77.37},details:{mass:"0.0009 × 10²⁴ kg",density:"2162 kg/m³",gravity:"0.03 g",albedo:"0.09",temp:"-105°C to -38°C",pressure:"0",solarDay:"9h 4m",siderealDay:"9h 4m",eccentricity:"0.079",inclination:"10.59°"}},{name:"Pluto",type:"dwarf",body:"Pluto",radius:.18,color:14527112,period:90560,texture:"/assets/textures/pluto.png",rotationPeriod:153.3,axialTilt:122.5,details:{mass:"0.013 × 10²⁴ kg",density:"1860 kg/m³",gravity:"0.06 g",albedo:"0.5",temp:"-240°C to -218°C",pressure:"0.00001 bar",solarDay:"6.39 days",siderealDay:"6.39 days",eccentricity:"0.248",inclination:"17.16°"}},{name:"Haumea",type:"dwarf",radius:.13,color:15658734,period:103468,texture:"/assets/textures/haumea.png",rotationPeriod:3.9,axialTilt:0,elements:{a:43.18,e:.195,i:28.21,Omega:122.16,w:238.78,M:219.87},details:{mass:"0.004 × 10²⁴ kg",density:"1885 kg/m³",gravity:"0.04 g",albedo:"0.7",temp:"-241°C",pressure:"0",solarDay:"3.9 h",siderealDay:"3.9 h",eccentricity:"0.195",inclination:"28.21°"}},{name:"Makemake",type:"dwarf",radius:.11,color:14531481,period:112897,texture:"/assets/textures/makemake.jpg",rotationPeriod:22.5,axialTilt:0,elements:{a:45.43,e:.161,i:28.98,Omega:79.62,w:294.84,M:200},details:{mass:"0.003 × 10²⁴ kg",density:"1700 kg/m³",gravity:"0.05 g",albedo:"0.7",temp:"-243°C",pressure:"0",solarDay:"22.5 h",siderealDay:"22.5 h",eccentricity:"0.161",inclination:"28.98°"}},{name:"Eris",type:"dwarf",radius:.18,color:16777215,period:203830,texture:"/assets/textures/eris.jpg",rotationPeriod:25.9,axialTilt:0,elements:{a:67.86,e:.436,i:44.04,Omega:35.95,w:151.64,M:200},details:{mass:"0.016 × 10²⁴ kg",density:"2520 kg/m³",gravity:"0.08 g",albedo:"0.96",temp:"-243°C to -217°C",pressure:"0",solarDay:"25.9 h",siderealDay:"25.9 h",eccentricity:"0.436",inclination:"44.04°"}}];function _a(i){return!i||!i.period?null:(i.period/365.25)**(2/3)}function $g(i,e){const t=new In(i.radius,32,32),n=new Di({color:i.color});i.texture&&e.load(i.texture,r=>{n.map=r,n.color.setHex(16777215),n.needsUpdate=!0},void 0,r=>{console.error(`Error loading texture for moon ${i.name}:`,r)});const s=new At(t,n);if(s.castShadow=!0,s.receiveShadow=!0,s.userData.isMoon=!0,s.scale.setScalar(U.planetScale),i.axialTilt!==void 0&&!i.tidallyLocked){const r=i.axialTilt*Math.PI/180;s.rotation.z=r}return s}function qg(i,e){const t=e.radius*2.5,n=new tt().setFromPoints([new M(0,-t,0),new M(0,t,0)]),s=new Dt({color:16777215,transparent:!0,opacity:.5}),r=new rn(n,s);r.visible=U.showAxes,i.add(r),e.axisLine=r}function Mo(i,e){if(!i.orbitLine)return;const t=[],n=90,s=e,r=i.period||27.3;for(let o=0;o<n;o++){const a=new Date(s.getTime()+o/n*r*24*60*60*1e3);let l,c,d;if(i.type==="jovian"){const u=Xa(a),f=[u.io,u.europa,u.ganymede,u.callisto][i.moonIndex];l=f.x,c=f.y,d=f.z}else if(i.type==="real"){const u=mr(Re[i.body],a,!0);l=u.x,c=u.y,d=u.z}else return;t.push(new M(l*Ye,d*Ye,-c*Ye))}i.orbitLine.geometry.setFromPoints(t),i.lastOrbitUpdate=e.getTime()}function jg(i,e){const t=new tt,n=new Dt({color:6710886,transparent:!0,opacity:.3}),s=new Mr(t,n);e.add(s),i.orbitLine=s,Mo(i,new Date)}function Zg(i,e){const t=[],n=i.distance*Ye;for(let a=0;a<64;a++){const l=a/64*Math.PI*2;t.push(new M(Math.cos(l)*n,0,Math.sin(l)*n))}i._orbitBasePoints=t;const s=new tt().setFromPoints(t),r=new Dt({color:6710886,transparent:!0,opacity:.3}),o=new Mr(s,r);e.add(o),i.orbitLine=o}function Kg(i,e){const t=new tt,n=new Dt({color:6710886,transparent:!0,opacity:.3}),s=new Mr(t,n);e.add(s),i.orbitLine=s,Mo(i,new Date)}function Jg(i,e,t,n){const s=[];return i.moons&&i.moons.forEach(r=>{const o=$g(r,n);qg(o,r),e.add(o),i.name==="Earth"?o.layers.set(1):o.layers.set(0),r.type==="jovian"?jg(r,t):r.type==="simple"?Zg(r,t):Kg(r,t);let a=!1;(r.category==="largest"&&U.showLargestMoons||r.category==="major"&&U.showMajorMoons||r.category==="small"&&U.showSmallMoons)&&(a=!0),r.category||(a=!0),o.visible=a,r.orbitLine&&(r.orbitLine.visible=a),s.push({mesh:o,data:r})}),s}function Qg(i,e,t){if(!i.moons)return;const n=U.planetScale*pn;let s=null,r=null;if(U.capMoonOrbits){s=i.data.radius*U.planetScale*1.1;let d=1/0,u=1/0;const f=_a(i.data);if(f){if(e<t.length-1){const g=t[e+1],_=_a(g.data);_&&(d=_-f)}if(e>0){const g=t[e-1],_=_a(g.data);_&&(u=f-_)}const m=Math.min(d,u);m!==1/0&&(r=m/2*Ye)}s&&r&&s>r&&(r=s)}const o=[];i.moons.forEach(c=>{let d;if(c.data.type==="jovian"){const u=Xa(U.date),f=[u.io,u.europa,u.ganymede,u.callisto][c.data.moonIndex];d=Math.sqrt(f.x**2+f.y**2+f.z**2)*Ye*n}else if(c.data.type==="real"){const u=mr(Re[c.data.body],U.date,!0);d=Math.sqrt(u.x**2+u.y**2+u.z**2)*Ye*n}else d=c.data.distance*Ye*n;o.push(d)});let a=1,l=0;if(U.capMoonOrbits&&s&&r&&o.length>0){const c=Math.min(...o),d=Math.max(...o);if(d>r||c<s){const u=d-c,f=r-s;if(u>1e-4)a=f/u,l=s-c*a;else{const m=(s+r)/2;a=0,l=m}}}i.moons.forEach(c=>{let d,u,f;if(c.data.type==="jovian"){const m=Xa(U.date),g=[m.io,m.europa,m.ganymede,m.callisto][c.data.moonIndex],_=Math.sqrt(g.x**2+g.y**2+g.z**2),x=(_*Ye*n*a+l)/(_*Ye);c.data.orbitLine&&c.data.orbitLine.scale.setScalar(x),d=g.x*Ye*x,f=-g.y*Ye*x,u=g.z*Ye*x}else if(c.data.type==="real"){const m=mr(Re[c.data.body],U.date,!0),g=Math.sqrt(m.x**2+m.y**2+m.z**2),h=(g*Ye*n*a+l)/(g*Ye);c.data.orbitLine&&c.data.orbitLine.scale.setScalar(h),d=m.x*Ye*h,f=-m.y*Ye*h,u=m.z*Ye*h}else{const m=c.data.distance,_=m*Ye*n*a+l,p=_/(m*Ye),h=new Date(2e3,0,1).getTime(),E=(U.date.getTime()-h)/(24*60*60*1e3)*2*Math.PI/c.data.period;c.data.orbitLine&&c.data.orbitLine.scale.setScalar(p);const L=_;d=Math.cos(E)*L,f=Math.sin(E)*L,u=0}if(c.mesh.position.x=i.mesh.position.x+d,c.mesh.position.z=i.mesh.position.z+f,c.mesh.position.y=i.mesh.position.y+u,c.data.tidallyLocked&&(c.mesh.rotation.y=Math.atan2(d,f)+Math.PI),c.data.type!=="simple"&&c.data.orbitLine){const m=U.date.getTime(),g=c.data.lastOrbitUpdate||0,_=Math.abs(m-g),p=24*60*60*1e3;_>p&&Mo(c.data,U.date)}})}function e2(i,e){if(!i.body&&!i.elements)return null;const t=[],n=360,s=new Date,r=i.period||365;for(let g=0;g<n;g++){const _=new Date(s.getTime()+g/n*r*24*60*60*1e3);let p;i.body?p=qt(Re[i.body],_):i.elements&&(p=yo(i.elements,_)),t.push(new M(p.x*Ye,p.z*Ye,-p.y*Ye))}const o=new tt().setFromPoints(t),a=U.showPlanetColors,l=U.showDwarfPlanetColors,d=i.type==="dwarf"?l:a,u=d&&i.color||4473924,f=new Dt({color:u,transparent:!0,opacity:d?.8:.5}),m=new Mr(o,f);return m.name=i.name+"_Orbit",e.add(m),m}function t2(i,e,t){if(!i.ring)return;const n=new Sr(i.ring.inner,i.ring.outer,128),s=n.attributes.position,r=new M;for(let l=0;l<s.count;l++){r.fromBufferAttribute(s,l);const d=(r.length()-i.ring.inner)/(i.ring.outer-i.ring.inner);n.attributes.uv.setXY(l,d,0)}let o;if(i.name==="Saturn"){const l=n2();o=new Di({map:l,side:Ht,transparent:!0,opacity:.9,roughness:.8,metalness:.2})}else if(i.ring.texture){const l=t.load(i.ring.texture);o=new Di({map:l,side:Ht,transparent:!0,opacity:1})}else o=new Di({color:i.ring.color,side:Ht,transparent:!0,opacity:.8});const a=new At(n,o);a.rotation.x=Math.PI/2,e.add(a)}function n2(){const i=document.createElement("canvas");i.width=1024,i.height=1;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,1024,0);t.addColorStop(0,"rgba(30, 30, 30, 0.0)"),t.addColorStop(.1,"rgba(30, 30, 30, 0.1)"),t.addColorStop(.15,"rgba(40, 40, 40, 0.2)"),t.addColorStop(.25,"rgba(180, 170, 150, 0.8)"),t.addColorStop(.35,"rgba(200, 190, 170, 0.9)"),t.addColorStop(.4,"rgba(210, 200, 180, 1.0)"),t.addColorStop(.45,"rgba(190, 180, 160, 0.9)"),t.addColorStop(.5,"rgba(170, 160, 140, 0.8)"),t.addColorStop(.55,"rgba(20, 20, 20, 0.1)"),t.addColorStop(.58,"rgba(20, 20, 20, 0.1)"),t.addColorStop(.6,"rgba(160, 150, 130, 0.7)"),t.addColorStop(.7,"rgba(170, 160, 140, 0.8)"),t.addColorStop(.8,"rgba(160, 150, 130, 0.7)"),t.addColorStop(.85,"rgba(20, 20, 20, 0.2)"),t.addColorStop(.86,"rgba(20, 20, 20, 0.2)"),t.addColorStop(.88,"rgba(150, 140, 120, 0.6)"),t.addColorStop(1,"rgba(140, 130, 110, 0.0)"),e.fillStyle=t,e.fillRect(0,0,1024,1);const n=new v0(i);return n.wrapS=It,n.wrapT=It,n}function i2(i,e){const t=new In(5,64,64),n=new Uint8Array([255,200,0,255]),s=new p1(n,1,1,Yt);s.needsUpdate=!0;const r=new ms({color:16777215,map:s,side:_n}),o={uTime:{value:0}};r.onBeforeCompile=f=>{f.uniforms.uTime=o.uTime,f.fragmentShader=f.fragmentShader.replace("#include <common>",`
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
      `),f.fragmentShader=f.fragmentShader.replace("#include <map_fragment>",`
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
      `)},e.load("/assets/textures/sun.jpg",f=>{f.wrapS=or,f.wrapT=It,r.map=f,r.needsUpdate=!0});const a=new At(t,r);i.add(a),a.userData.customUniforms=o;const l=5*2.5,c=new tt().setFromPoints([new M(0,-l,0),new M(0,l,0)]),d=new Dt({color:16777215,transparent:!0,opacity:.5}),u=new rn(c,d);return u.visible=U.showAxes,a.add(u),a.axisLine=u,a}function s2(i,e){const t=[],n=[],s=new go,r=i2(i,s);return[...Xg,...Yg].forEach(a=>{const l=new Ct;i.add(l);const c=new In(a.radius,32,32),d=new Di({color:a.color});a.texture&&s.load(a.texture,E=>{d.map=E,d.color.setHex(16777215),d.needsUpdate=!0},void 0,E=>{console.error(`Error loading texture for ${a.name}:`,E)});const u=new At(c,d);if(u.castShadow=!0,u.receiveShadow=!0,console.log(`Creating planet: ${a.name}`),l.add(u),u.scale.setScalar(U.planetScale),a.axialTilt!==void 0){const E=a.axialTilt*Math.PI/180;u.rotation.z=E}const f=a.radius*2.5,m=new tt().setFromPoints([new M(0,-f,0),new M(0,f,0)]),g=new Dt({color:16777215,transparent:!0,opacity:.5}),_=new rn(m,g);if(_.visible=U.showAxes,u.add(_),a.axisLine=_,a.name==="Earth"?u.layers.set(1):u.layers.set(0),a.name==="Earth"&&a.cloudTexture){const E=new In(a.radius*1.01,32,32),L=new Di({transparent:!0,opacity:1,depthWrite:!1}),C=new At(E,L);C.visible=!1,C.layers.set(1),s.load(a.cloudTexture,A=>{L.map=A,L.alphaMap=A,L.needsUpdate=!0,C.visible=!0},void 0,A=>{console.error(`Error loading cloud texture for ${a.name}:`,A)}),u.add(C),a.cloudMesh=C}const p=new Ct;l.add(p),t2(a,u,s);const h=e2(a,e),x=Jg(a,l,p,s),v={group:l,mesh:u,data:a,moons:x,orbitLinesGroup:p,orbitLine:h};t.push(v),a.type==="dwarf"&&n.push(v)}),{planets:t,sun:r,dwarfPlanets:n}}function r2(i,e=null,t=null){if(e){const n=new Date("2000-01-01T12:00:00Z").getTime(),r=(U.date.getTime()-n)/(1e3*60*60),a=r/600*2*Math.PI;e.rotation.y=a,e.userData.customUniforms&&(e.userData.customUniforms.uTime.value=r*.1%1e4)}i.forEach(n=>{if(n.data.body){const a=qt(Re[n.data.body],U.date);n.mesh.position.x=a.x*Ye,n.mesh.position.z=-a.y*Ye,n.mesh.position.y=a.z*Ye}else if(n.data.elements){const a=yo(n.data.elements,U.date);n.mesh.position.x=a.x*Ye,n.mesh.position.z=-a.y*Ye}if(n.data.name==="Earth"&&t){t.target=n.mesh;const a=n.data.radius*U.planetScale,l=n.mesh.position.length(),c=a*4,d=Math.atan(c/l);t.angle=d*1.2,t.shadow.camera.updateProjectionMatrix()}if(!U.stop&&n.data.cloudMesh){const a=new Date("2000-01-01T12:00:00Z").getTime(),u=(U.date.getTime()-a)/(1e3*60*60)/240*2*Math.PI;n.data.cloudMesh.rotation.y=u}if(n.orbitLinesGroup&&n.orbitLinesGroup.position.copy(n.mesh.position),n.data.rotationPeriod){const a=new Date("2000-01-01T12:00:00Z").getTime(),d=(U.date.getTime()-a)/(1e3*60*60)/n.data.rotationPeriod*2*Math.PI;n.mesh.rotation.y=d}const r=n.data.name==="Earth"?1:0;n.mesh.layers.mask!==1<<r&&n.mesh.layers.set(r);const o=i.indexOf(n);Qg(n,o,i),n.moons.forEach(a=>{a.mesh.layers.mask!==1<<r&&a.mesh.layers.set(r)})})}const bc={type:"change"},va={type:"start"},wc={type:"end"},tr=new ps,Tc=new Tn,a2=Math.cos(70*ro.DEG2RAD);class o2 extends ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Pe),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bc),n.update(),r=s.NONE},this.update=function(){const R=new M,ae=new Qn().setFromUnitVectors(e.up,new M(0,1,0)),be=ae.clone().invert(),xe=new M,te=new Qn,D=new M,oe=2*Math.PI;return function(Ue=null){const Ce=n.object.position;R.copy(Ce).sub(n.target),R.applyQuaternion(ae),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&B(b(Ue)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let $e=n.minAzimuthAngle,qe=n.maxAzimuthAngle;isFinite($e)&&isFinite(qe)&&($e<-Math.PI?$e+=oe:$e>Math.PI&&($e-=oe),qe<-Math.PI?qe+=oe:qe>Math.PI&&(qe-=oe),$e<=qe?a.theta=Math.max($e,Math.min(qe,a.theta)):a.theta=a.theta>($e+qe)/2?Math.max($e,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(be),Ce.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let at=!1;if(n.zoomToCursor&&C){let lt=null;if(n.object.isPerspectiveCamera){const Ke=R.length();lt=$(Ke*c);const ut=Ke-lt;n.object.position.addScaledVector(E,ut),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ke=new M(L.x,L.y,0);Ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),at=!0;const ut=new M(L.x,L.y,0);ut.unproject(n.object),n.object.position.sub(ut).add(Ke),n.object.updateMatrixWorld(),lt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(tr.origin.copy(n.object.position),tr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(tr.direction))<a2?e.lookAt(n.target):(Tc.setFromNormalAndCoplanarPoint(n.object.up,n.target),tr.intersectPlane(Tc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),at=!0);return c=1,C=!1,at||xe.distanceToSquared(n.object.position)>o||8*(1-te.dot(n.object.quaternion))>o||D.distanceToSquared(n.target)>0?(n.dispatchEvent(bc),xe.copy(n.object.position),te.copy(n.object.quaternion),D.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Je),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",H),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pe),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new cc,l=new cc;let c=1;const d=new M,u=new ge,f=new ge,m=new ge,g=new ge,_=new ge,p=new ge,h=new ge,x=new ge,v=new ge,E=new M,L=new ge;let C=!1;const A=[],F={};let y=!1;function b(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function N(R){const ae=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*ae)}function B(R){l.theta-=R}function K(R){l.phi-=R}const P=function(){const R=new M;return function(be,xe){R.setFromMatrixColumn(xe,0),R.multiplyScalar(-be),d.add(R)}}(),O=function(){const R=new M;return function(be,xe){n.screenSpacePanning===!0?R.setFromMatrixColumn(xe,1):(R.setFromMatrixColumn(xe,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(be),d.add(R)}}(),G=function(){const R=new M;return function(be,xe){const te=n.domElement;if(n.object.isPerspectiveCamera){const D=n.object.position;R.copy(D).sub(n.target);let oe=R.length();oe*=Math.tan(n.object.fov/2*Math.PI/180),P(2*be*oe/te.clientHeight,n.object.matrix),O(2*xe*oe/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(be*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),O(xe*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(R,ae){if(!n.zoomToCursor)return;C=!0;const be=n.domElement.getBoundingClientRect(),xe=R-be.left,te=ae-be.top,D=be.width,oe=be.height;L.x=xe/D*2-1,L.y=-(te/oe)*2+1,E.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function $(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function ne(R){u.set(R.clientX,R.clientY)}function re(R){Z(R.clientX,R.clientX),h.set(R.clientX,R.clientY)}function X(R){g.set(R.clientX,R.clientY)}function J(R){f.set(R.clientX,R.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ae=n.domElement;B(2*Math.PI*m.x/ae.clientHeight),K(2*Math.PI*m.y/ae.clientHeight),u.copy(f),n.update()}function le(R){x.set(R.clientX,R.clientY),v.subVectors(x,h),v.y>0?j(N(v.y)):v.y<0&&q(N(v.y)),h.copy(x),n.update()}function ye(R){_.set(R.clientX,R.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(_),n.update()}function Se(R){Z(R.clientX,R.clientY),R.deltaY<0?q(N(R.deltaY)):R.deltaY>0&&j(N(R.deltaY)),n.update()}function De(R){let ae=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),ae=!0;break}ae&&(R.preventDefault(),n.update())}function k(R){if(A.length===1)u.set(R.pageX,R.pageY);else{const ae=_e(R),be=.5*(R.pageX+ae.x),xe=.5*(R.pageY+ae.y);u.set(be,xe)}}function he(R){if(A.length===1)g.set(R.pageX,R.pageY);else{const ae=_e(R),be=.5*(R.pageX+ae.x),xe=.5*(R.pageY+ae.y);g.set(be,xe)}}function Ne(R){const ae=_e(R),be=R.pageX-ae.x,xe=R.pageY-ae.y,te=Math.sqrt(be*be+xe*xe);h.set(0,te)}function I(R){n.enableZoom&&Ne(R),n.enablePan&&he(R)}function Ae(R){n.enableZoom&&Ne(R),n.enableRotate&&k(R)}function ce(R){if(A.length==1)f.set(R.pageX,R.pageY);else{const be=_e(R),xe=.5*(R.pageX+be.x),te=.5*(R.pageY+be.y);f.set(xe,te)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const ae=n.domElement;B(2*Math.PI*m.x/ae.clientHeight),K(2*Math.PI*m.y/ae.clientHeight),u.copy(f)}function me(R){if(A.length===1)_.set(R.pageX,R.pageY);else{const ae=_e(R),be=.5*(R.pageX+ae.x),xe=.5*(R.pageY+ae.y);_.set(be,xe)}p.subVectors(_,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(_)}function ue(R){const ae=_e(R),be=R.pageX-ae.x,xe=R.pageY-ae.y,te=Math.sqrt(be*be+xe*xe);x.set(0,te),v.set(0,Math.pow(x.y/h.y,n.zoomSpeed)),j(v.y),h.copy(x);const D=(R.pageX+ae.x)*.5,oe=(R.pageY+ae.y)*.5;Z(D,oe)}function Ze(R){n.enableZoom&&ue(R),n.enablePan&&me(R)}function Le(R){n.enableZoom&&ue(R),n.enableRotate&&ce(R)}function T(R){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",H)),Ge(R),R.pointerType==="touch"?Be(R):ie(R))}function S(R){n.enabled!==!1&&(R.pointerType==="touch"?Q(R):ee(R))}function H(R){Fe(R),A.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",H)),n.dispatchEvent(wc),r=s.NONE}function ie(R){let ae;switch(R.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case ni.DOLLY:if(n.enableZoom===!1)return;re(R),r=s.DOLLY;break;case ni.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;X(R),r=s.PAN}else{if(n.enableRotate===!1)return;ne(R),r=s.ROTATE}break;case ni.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ne(R),r=s.ROTATE}else{if(n.enablePan===!1)return;X(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(va)}function ee(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;J(R);break;case s.DOLLY:if(n.enableZoom===!1)return;le(R);break;case s.PAN:if(n.enablePan===!1)return;ye(R);break}}function se(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(va),Se(Ee(R)),n.dispatchEvent(wc))}function Ee(R){const ae=R.deltaMode,be={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ae){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return R.ctrlKey&&!y&&(be.deltaY*=10),be}function pe(R){R.key==="Control"&&(y=!0,document.addEventListener("keyup",Me,{passive:!0,capture:!0}))}function Me(R){R.key==="Control"&&(y=!1,document.removeEventListener("keyup",Me,{passive:!0,capture:!0}))}function Pe(R){n.enabled===!1||n.enablePan===!1||De(R)}function Be(R){switch(Te(R),A.length){case 1:switch(n.touches.ONE){case ii.ROTATE:if(n.enableRotate===!1)return;k(R),r=s.TOUCH_ROTATE;break;case ii.PAN:if(n.enablePan===!1)return;he(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ii.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(R),r=s.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(va)}function Q(R){switch(Te(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;me(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ze(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(R),n.update();break;default:r=s.NONE}}function Je(R){n.enabled!==!1&&R.preventDefault()}function Ge(R){A.push(R.pointerId)}function Fe(R){delete F[R.pointerId];for(let ae=0;ae<A.length;ae++)if(A[ae]==R.pointerId){A.splice(ae,1);return}}function Te(R){let ae=F[R.pointerId];ae===void 0&&(ae=new ge,F[R.pointerId]=ae),ae.set(R.pageX,R.pageY)}function _e(R){const ae=R.pointerId===A[0]?A[1]:A[0];return F[ae]}n.domElement.addEventListener("contextmenu",Je),n.domElement.addEventListener("pointerdown",T),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",se,{passive:!1}),document.addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}function l2(){const i=new p0,e=new Ut(60,window.innerWidth/window.innerHeight,1e-5,1e12);e.position.set(0,200,400);const t=new f0({antialias:!0,logarithmicDepthBuffer:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio),t.toneMapping=Oc,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Nc,document.body.appendChild(t.domElement);const n=new o2(e,t.domElement);n.enableDamping=!0,n.dampingFactor=.05;const s=new B1(3355443,.5);s.layers.enable(1),i.add(s);const r=new z1(16777215,2,0,0);r.layers.set(0);const o=new F1(16777215,2);o.position.set(0,0,0),o.castShadow=!0,o.layers.set(1),o.shadow.mapSize.width=2048,o.shadow.mapSize.height=2048,o.shadow.bias=-1e-5,o.shadow.camera.near=.1,o.shadow.camera.far=500,o.angle=Math.PI/8,o.penumbra=.1,o.decay=0,o.distance=1e3,e.layers.enable(0),e.layers.enable(1);const a=new Ct;i.add(a);const l=new Ct;return i.add(l),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),{scene:i,camera:e,renderer:t,controls:n,orbitGroup:a,zodiacGroup:l,sunLight:r,shadowLight:o}}const c2=["Ari","Tau","Gem","Cnc","Leo","Vir","Lib","Sco","Sgr","Cap","Aqr","Psc"];function d2(){const i=document.createElement("canvas");i.width=32,i.height=32;const e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255, 255, 255, 1)"),t.addColorStop(.4,"rgba(255, 255, 255, 1)"),t.addColorStop(.6,"rgba(255, 255, 255, 0.8)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new v0(i)}function u2(i,e,t){return t>i*1.2&&t>e?"O-Type (Blue)":t>i*1.1&&t>e?"B-Type (Blue-White)":t>.9&&e>.9&&i>.9?"A-Type (White)":e>t&&i>t&&e>.9?"F-Type (Yellow-White)":i>.9&&e>.8&&t<.7?"G-Type (Yellow)":i>.9&&e>.6&&t<.4?"K-Type (Orange)":i>.9&&e<.6?"M-Type (Red)":"Unknown"}async function h2(i){try{const e=fetch("/assets/stars_names.json").then(u=>u.json()),n=await(await fetch("/assets/stars_3d.json")).json(),s=new tt,r=[],o=[],a=[],l=[];n.forEach(u=>{if(u.x==null||u.y==null||u.z==null||u.p==null)return;const f=1e4,m=u.z*f,g=u.x*f,_=u.y*f;r.push(m,g,_);let p=1,h=1,x=1;if(u.K){const y=Math.max(u.K.r,u.K.g,u.K.b,.001);p=u.K.r/y,h=u.K.g/y,x=u.K.b/y,o.push(p,h,x)}else o.push(1,1,1);const v=Math.max(u.p||1,.1),L=(u.N||0)/(v*v),C=Math.log(Math.max(L,1e-9)),A=Math.max(1.5,1.5+(C+8)*.6);a.push(A);const F=u.n;l.push({id:u.i,name:F,distance:u.p,radius:u.N,colorIndex:"N/A",mag:"N/A",spectralType:u2(p,h,x)})}),s.setAttribute("position",new dt(r,3)),s.setAttribute("color",new dt(o,3)),s.setAttribute("starSize",new dt(a,1));const c=new _0({vertexColors:!0,size:1,sizeAttenuation:!1,map:d2(),transparent:!0,depthWrite:!1,blending:Ni});c.onBeforeCompile=u=>{u.vertexShader=`
                attribute float starSize;
                ${u.vertexShader}
            `,u.vertexShader=u.vertexShader.replace("gl_PointSize = size;","gl_PointSize = starSize * size;")};const d=new g1(s,c);return d.userData={starData:l},d.renderOrder=-1,i.add(d),e.then(u=>{console.log("Star names loaded. Updating...");const f={};u.forEach(m=>{f[m.i]=m.n}),d.userData.starData.forEach(m=>{const g=f[m.id];if(g&&Array.isArray(g)){const _=g.find(p=>p.startsWith("NAME "));_&&(m.name=_.replace("NAME ",""))}}),console.log("Star names updated.")}).catch(u=>console.error("Error loading star names:",u)),{stars:d,rawData:n}}catch(e){return console.error("Error loading stars:",e),null}}async function f2(i,e,t){try{const s=await(await fetch("/assets/constellations_lines_all.json")).json(),r=1e4,o={};t.forEach(u=>{u.x!=null&&u.y!=null&&u.z!=null&&u.i!=null&&(o[u.i]=new M(u.z*r,u.x*r,u.y*r))});const a=new Dt({color:4482696,transparent:!0,opacity:.6}),l=new Dt({color:13421772,transparent:!0,opacity:.4});let c=0,d=0;for(const[u,f]of Object.entries(s)){const m=c2.includes(u),g=m?i:e,_=m?a:l;for(const p of f){const h=[];for(const x of p){const v=o[x];v&&h.push(v)}if(h.length>=2){const x=new tt().setFromPoints(h),v=new rn(x,_);v.userData={type:"constellation",id:u,isZodiac:m},g.add(v)}}m?c++:d++}console.log(`Created ${c} zodiacs and ${d} other constellations.`)}catch(n){console.error("Error loading constellations:",n)}}function p2(i,e=100){const t=i.map(s=>s.pos);return new fo(t).getPoints(e)}const m2=[{pos:new M(1,0,0),date:"1977-09-05"},{pos:new M(4.5,.3,.5),date:"1979-01-01"},{pos:new M(5.2,0,.8),date:"1979-03-05"},{pos:new M(7,-.5,1),date:"1980-01-01"},{pos:new M(9.5,0,1.2),date:"1980-11-12"},{pos:new M(15,1.5,2.5),date:"1985-01-01"},{pos:new M(25,3.5,5),date:"1995-01-01"},{pos:new M(40,6,8.5),date:"2010-01-01"},{pos:new M(160,24,34),date:"2024-01-01"}],g2=[{pos:new M(1,0,-.1),date:"1977-08-20"},{pos:new M(4.2,-.2,.3),date:"1979-04-01"},{pos:new M(5.2,0,.5),date:"1979-07-09"},{pos:new M(7.5,.5,.7),date:"1980-06-01"},{pos:new M(9.5,0,.9),date:"1981-08-25"},{pos:new M(15,-1,.5),date:"1984-01-01"},{pos:new M(19.2,0,.3),date:"1986-01-24"},{pos:new M(25,.5,-.5),date:"1988-01-01"},{pos:new M(30.1,0,-1),date:"1989-08-25"},{pos:new M(40,-2,-3),date:"2000-01-01"},{pos:new M(133,-6.6,-10),date:"2024-01-01"}],_2=[{pos:new M(1,0,.05),date:"1972-03-02"},{pos:new M(3.5,.2,.4),date:"1973-06-01"},{pos:new M(5.2,0,.6),date:"1973-12-04"},{pos:new M(10,1,1.5),date:"1976-01-01"},{pos:new M(20,2.5,3),date:"1983-01-01"},{pos:new M(35,4.5,5.5),date:"1995-01-01"},{pos:new M(130,16,20),date:"2024-01-01"}],v2=[{pos:new M(1,0,-.05),date:"1973-04-06"},{pos:new M(4,-.3,.3),date:"1974-06-01"},{pos:new M(5.2,0,.4),date:"1974-12-02"},{pos:new M(7,.4,.6),date:"1977-01-01"},{pos:new M(9.5,0,.8),date:"1979-09-01"},{pos:new M(15,-1.5,1.5),date:"1985-01-01"},{pos:new M(110,-11,11),date:"2024-01-01"}],x2=[{pos:new M(1,0,0),date:"1989-10-18"},{pos:new M(.7,-.1,-.05),date:"1990-02-10"},{pos:new M(1,.05,.1),date:"1990-12-08"},{pos:new M(2,.2,.2),date:"1991-10-29"},{pos:new M(1,-.05,.15),date:"1992-12-08"},{pos:new M(3.5,.3,.4),date:"1994-01-01"},{pos:new M(5.2,0,.5),date:"1995-12-07"},{pos:new M(5.3,.1,.5),date:"1996-06-01"},{pos:new M(5.2,0,.6),date:"1997-01-01"},{pos:new M(5.1,-.1,.5),date:"1998-01-01"},{pos:new M(5.2,0,.4),date:"2003-09-21"}],y2=[{pos:new M(1,0,0),date:"1997-10-15"},{pos:new M(.7,.1,0),date:"1998-04-26"},{pos:new M(.7,-.1,.05),date:"1999-06-24"},{pos:new M(1,-.2,.1),date:"1999-08-18"},{pos:new M(5.2,0,.5),date:"2000-12-30"},{pos:new M(9.5,0,1),date:"2004-07-01"},{pos:new M(9.6,.2,1.1),date:"2005-01-01"},{pos:new M(9.4,-.2,.9),date:"2008-01-01"},{pos:new M(9.5,0,1),date:"2017-09-15"}],M2=[{pos:new M(1,0,0),date:"2006-01-19"},{pos:new M(5.2,0,.2),date:"2007-02-28"},{pos:new M(20,.5,1),date:"2011-01-01"},{pos:new M(30,1,1.5),date:"2014-08-01"},{pos:new M(32.9,1.5,1.8),date:"2015-07-14"},{pos:new M(43,2,2.2),date:"2019-01-01"},{pos:new M(58,3,3),date:"2024-01-01"}],S2=[{pos:new M(1,0,0),date:"2018-08-12"},{pos:new M(.7,0,0),date:"2018-10-03"},{pos:new M(.2,0,.05),date:"2018-11-06"},{pos:new M(.7,.1,0),date:"2019-12-26"},{pos:new M(.1,0,.02),date:"2021-01-01"},{pos:new M(.7,-.1,0),date:"2023-08-21"},{pos:new M(.04,0,.01),date:"2024-12-24"}],E2=[{pos:new M(1,0,0),date:"2011-08-05"},{pos:new M(1.5,.1,0),date:"2012-08-01"},{pos:new M(1,0,.1),date:"2013-10-09"},{pos:new M(5.2,0,.5),date:"2016-07-04"},{pos:new M(5.2,1,.5),date:"2017-01-01"},{pos:new M(5.2,-1,.5),date:"2018-01-01"},{pos:new M(5.2,.5,.5),date:"2024-01-01"}],b2=[{pos:new M(1,0,0),date:"2004-03-02"},{pos:new M(1,.1,0),date:"2005-03-04"},{pos:new M(1.5,.2,.1),date:"2007-02-25"},{pos:new M(1,-.1,0),date:"2007-11-13"},{pos:new M(2.3,.3,.2),date:"2008-09-05"},{pos:new M(1,0,.1),date:"2009-11-13"},{pos:new M(3,.5,.4),date:"2010-07-10"},{pos:new M(3.5,.8,.6),date:"2014-08-06"},{pos:new M(1.2,.2,.1),date:"2015-08-13"},{pos:new M(5.2,1,1),date:"2016-09-30"}],w2=[{pos:new M(1,0,0),date:"1990-10-06"},{pos:new M(5.2,0,.5),date:"1992-02-08"},{pos:new M(2,2,0),date:"1994-06-01"},{pos:new M(2,-2,0),date:"1995-06-01"},{pos:new M(5.2,0,.5),date:"1998-01-01"},{pos:new M(2,2,0),date:"2000-09-01"},{pos:new M(2,-2,0),date:"2001-09-01"},{pos:new M(5.4,0,.6),date:"2009-06-30"}],ss={};function T2(i){return[{id:"voyager1",waypoints:m2,color:65535},{id:"voyager2",waypoints:g2,color:16711935},{id:"pioneer10",waypoints:_2,color:16753920},{id:"pioneer11",waypoints:v2,color:65280},{id:"galileo",waypoints:x2,color:16766720},{id:"cassini",waypoints:y2,color:35071},{id:"newHorizons",waypoints:M2,color:16777215},{id:"parkerSolarProbe",waypoints:S2,color:16729344},{id:"juno",waypoints:E2,color:16738740},{id:"rosetta",waypoints:b2,color:9055202},{id:"ulysses",waypoints:w2,color:16776960}].forEach(t=>{const n=p2(t.waypoints,200),s=new tt().setFromPoints(n.map(a=>a.multiplyScalar(Ye))),r=new Dt({color:t.color,linewidth:2,transparent:!0,opacity:.8}),o=new rn(s,r);o.visible=U.showMissions[t.id],i.add(o),ss[t.id]=o}),ss}function A2(){Object.keys(ss).forEach(i=>{ss[i]&&(ss[i].visible=U.showMissions[i])})}function C2(i){const n=.95*Ye,s=1.37*Ye,r=new Sr(n,s,64),o=new ms({color:65280,side:Ht,transparent:!0,opacity:.15,depthWrite:!1}),a=new At(r,o),l=23.4*(Math.PI/180);return a.rotation.x=-Math.PI/2+l,a.visible=!1,i.add(a),a}function Ac(i,e){if(!i.magneticField)return null;const{strength:t,tilt:n,color:s}=i.magneticField,r=new Ct;r.name="MagneticField";const o=16,a=64,l=new Dt({color:s,transparent:!0,opacity:.3,blending:Ni});for(let c=0;c<o;c++){const d=c/o*Math.PI*2;for(let u=1.5;u<=3;u+=.5){const f=[],m=u/3,g=e*t*m;for(let h=0;h<=a;h++){const x=.1+h/a*(Math.PI-.2),v=g*Math.sin(x)**2,E=v*Math.sin(x)*Math.cos(d),L=v*Math.sin(x)*Math.sin(d),C=v*Math.cos(x);f.push(new M(E,C,L))}const _=new tt().setFromPoints(f),p=new rn(_,l);r.add(p)}}if(n){const c=n*(Math.PI/180);r.rotation.z=c}return r.visible=!1,r}function R2(i){const e=new Ct;e.name="SunMagneticFieldBasic";const t=5;e.userData.timeOffset=Math.random()*1e3;const n=new ms({color:16777130,transparent:!0,opacity:.9});n.onBeforeCompile=a=>{a.uniforms.uTime={value:0},e.userData.shaderUniforms=a.uniforms,a.vertexShader=`
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
      
      ${a.vertexShader}
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
      `)};const s="assets/textures/sun.jpg",r=a=>new Promise((l,c)=>{const d=new Image;d.crossOrigin="Anonymous",d.onload=()=>{const u=document.createElement("canvas");u.width=d.width,u.height=d.height;const f=u.getContext("2d");f.drawImage(d,0,0);const m=f.getImageData(0,0,d.width,d.height);console.log("Sun texture loaded for magnetic fields:",d.width,d.height),l(m)},d.onerror=u=>{console.error("Error loading sun texture:",u),c(u)},d.src=a});return(async()=>{let a;try{a=await r(s)}catch(P){console.error("Failed to load sun texture for magnetic fields:",P);return}const{width:l,height:c,data:d}=a,u=new In(t,64,64),f=.45;let m=0;const g=u.attributes.position,_=u.attributes.uv,p=g.count;console.log(`[MagneticFields] Starting generation. Vertices: ${p}, Threshold: ${f}`);const h=[];for(let P=0;P<p;P++){const O=_.getX(P),G=_.getY(P);let j=Math.floor(O*l)%l;j<0&&(j+=l);let q=Math.floor((1-G)*c);q<0&&(q=0),q>=c&&(q=c-1);const Z=(q*l+j)*4,$=(d[Z]+d[Z+1]+d[Z+2])/(3*255);$>=f&&h.push({index:P,pos:new M(g.getX(P),g.getY(P),g.getZ(P)),intensity:$,uv:{u:O,v:G}})}console.log(`[MagneticFields] Found ${h.length} valid seeds.`);for(let P=h.length-1;P>0;P--){const O=Math.floor(Math.random()*(P+1));[h[P],h[O]]=[h[O],h[P]]}const x=new Set,v=.1*t,E=P=>{const O=Math.floor(P.x/v),G=Math.floor(P.y/v),j=Math.floor(P.z/v);return`${O},${G},${j}`},L=t*.1,C=t*.5,A=200;let F=0;for(let P=0;P<h.length&&!(m>=A);P++){const O=h[P];let G=null;for(let he=1;he<50;he++){const Ne=(P+he)%h.length,I=h[Ne],Ae=O.pos.distanceTo(I.pos);if(Ae>L&&Ae<C){G=I;break}}if(!G)continue;const j=O.pos,q=G.pos,Z=j.clone().add(q).multiplyScalar(.5).normalize(),ne=j.distanceTo(q)*(.5+Math.random()*.5),re=Z.multiplyScalar(t+ne),X=[],J=16;let le=!1;for(let he=0;he<=J;he++){const Ne=he/J,I=j.clone().lerp(re,Ne),Ae=re.clone().lerp(q,Ne),ce=I.lerp(Ae,Ne),me=E(ce);if(x.has(me)){le=!0;break}X.push(ce)}if(le){F++;continue}for(const he of X)x.add(E(he));const ye=new fo(X),Se=.008+Math.random()*.007,De=new po(ye,J,Se,4,!1),k=new At(De,n);e.add(k),m++}console.log(`[MagneticFields] Created ${m} loops. Rejected ${F} due to collision.`);const y=250,b=new Dt({color:16724787,transparent:!0,opacity:.6}),N=new Dt({color:3407667,transparent:!0,opacity:.6});let B=0;const K=[...h];for(let P=K.length-1;P>0;P--){const O=Math.floor(Math.random()*(P+1));[K[P],K[O]]=[K[O],K[P]]}for(let P=0;P<K.length&&!(B>=y);P++){const G=K[P].pos,q=Math.asin(G.y/t)*(180/Math.PI);if(!(Math.abs(q)>30)&&Math.random()<.9)continue;const re=q>=0?N:b,X=[],J=5+Math.random()*10,le=20,ye=.2;for(let k=0;k<=le;k++){const he=k/le,Ne=t+he*J,I=Math.sin(he*10)*.1*he,Ae=G.clone().normalize(),ce=new M(0,1,0);Ae.applyAxisAngle(ce,he*ye);const me=Ae.multiplyScalar(Ne);me.x+=I,X.push(me)}const Se=new tt().setFromPoints(X),De=new rn(Se,re);e.add(De),B++}})(),e.visible=!1,e}function L2(i){const e=new Ct;e.name="MagneticField";const t=100,n=100,s=t*n,r=new Float32Array(s*3),o=new Float32Array(s),a=new Float32Array(s);for(let p=0;p<t;p++)for(let h=0;h<n;h++){const x=p*n+h;r[x*3]=0,r[x*3+1]=0,r[x*3+2]=0,o[x]=p,a[x]=h/(n-1)}const l=new tt;l.setAttribute("position",new yt(r,3)),l.setAttribute("lineIndex",new yt(o,1)),l.setAttribute("segmentRatio",new yt(a,1));const c=new Un({uniforms:{uTime:{value:0},uColor:{value:new je(16776960)},uSunRadius:{value:5}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Ni}),d=new Float32Array(t*(n-1)*2*3),u=new Float32Array(t*(n-1)*2),f=new Float32Array(t*(n-1)*2);let m=0;for(let p=0;p<t;p++)for(let h=0;h<n-1;h++)u[m]=p,f[m]=h/(n-1),m++,u[m]=p,f[m]=(h+1)/(n-1),m++;const g=new tt;g.setAttribute("position",new yt(d,3)),g.setAttribute("lineIndex",new yt(u,1)),g.setAttribute("segmentRatio",new yt(f,1));const _=new m1(g,c);return _.frustumCulled=!1,e.add(_),e.userData.material=c,e}function P2(i){const e=new p0,t=new a0(-window.innerWidth/2,window.innerWidth/2,window.innerHeight/2,-window.innerHeight/2,.1,100);t.position.z=5;let n=null;const s={active:!0,phase:"delay",startTime:0},r={initialDelay:2,flyDuration:4,startPosition:new M(0,0,0),targetPosition:new M(0,0,0),startScale:.3,endScale:1};new go().load("./assets/images/rabbit_spaceship.png",l=>{const c=new uo({map:l,transparent:!0,opacity:1});n=new g0(c);const d=l.image.width/l.image.height,u=200;n.scale.set(u*d,u,1),n.position.copy(r.startPosition),e.add(n),s.startTime=performance.now()/1e3},void 0,l=>{console.error("An error happened loading the spaceship:",l),s.active=!1});function a(){const l=window.innerWidth,c=window.innerHeight;if(t.left=-l/2,t.right=l/2,t.top=c/2,t.bottom=-c/2,t.updateProjectionMatrix(),r.startPosition.x=l/2+100,r.startPosition.y=c/2+100,r.targetPosition.x=-l/2-100,r.targetPosition.y=-c/2-100,n&&s.phase==="fly"){const u=performance.now()/1e3-s.startTime,f=Math.min(u/r.flyDuration,1);n.position.lerpVectors(r.startPosition,r.targetPosition,f)}}return window.addEventListener("resize",a),a(),{update:()=>{if(!s.active||!n)return;const l=performance.now()/1e3,c=l-s.startTime;if(s.phase==="delay")c>=r.initialDelay&&(s.phase="fly",s.startTime=l);else if(s.phase==="fly"){const d=Math.min(c/r.flyDuration,1),u=1-(1-d)**5;n.position.lerpVectors(r.startPosition,r.targetPosition,u);const f=ro.lerp(r.startScale,r.endScale,u),m=n.material.map.image.width/n.material.map.image.height,g=200;n.scale.set(g*m*f,g*f,1),d>=1&&(s.active=!1,e.remove(n),window.removeEventListener("resize",a))}},render:()=>{s.active&&(i.autoClear=!1,i.clearDepth(),i.render(e,t),i.autoClear=!0)}}}const D2=[{name:"Aries",index:0},{name:"Taurus",index:1},{name:"Gemini",index:2},{name:"Cancer",index:3},{name:"Leo",index:4},{name:"Virgo",index:5},{name:"Libra",index:6},{name:"Scorpio",index:7},{name:"Sagittarius",index:8},{name:"Capricorn",index:9},{name:"Aquarius",index:10},{name:"Pisces",index:11}],U2=["Ari","Tau","Gem","Cnc","Leo","Vir","Lib","Sco","Sgr","Cap","Aqr","Psc"];function I2(i,e){const t=new Ct;t.visible=U.showZodiacSigns||!1,i.add(t);const n="/assets/zodiac_signs_sheet.png";return console.log("ZodiacSigns: Loading texture from",n),e.load(n,s=>{console.log("ZodiacSigns: Texture loaded successfully"),s.colorSpace=vt;const r=5e3;D2.forEach((o,a)=>{const l=s.clone();l.needsUpdate=!0;const c=a%4,d=2-Math.floor(a/4);l.repeat.set(.25,.333),l.offset.set(c*.25,d*.333);const u=new uo({map:l,transparent:!0,opacity:.8,color:16777215,depthWrite:!1,blending:Ni}),f=new g0(u);f.scale.set(r,r,1),f.visible=!1,f.userData={zodiacIndex:a,zodiacId:U2[a]},t.add(f)})},void 0,s=>{console.error("ZodiacSigns: Error loading texture",s)}),t}async function N2(i,e){if(!(!i||!e))try{const n=await(await fetch("/assets/zodiac_lines.json")).json(),s=1e4,r={};e.forEach(o=>{o.x!=null&&o.y!=null&&o.z!=null&&o.i!=null&&(r[o.i]=new M(o.z*s,o.x*s,o.y*s))}),i.children.forEach(o=>{if(!o.isSprite)return;const a=o.userData.zodiacId,l=n[a];if(l&&l.length>0){const c=new M;let d=0;if(l.forEach(u=>{const f=r[u];f&&(c.add(f),d++)}),d>0){c.divideScalar(d),o.position.copy(c),o.visible=!0;const m=c.length()*.15;o.scale.set(m,m,1)}}}),console.log("ZodiacSigns: Aligned signs to constellations")}catch(t){console.error("ZodiacSigns: Error aligning signs",t)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class sn{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),sn.nextNameID=sn.nextNameID||0,this.$name.id=`lil-gui-name-${++sn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class F2 extends sn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function eo(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const O2={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:eo,toHexString:eo},us={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},z2={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=us.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return us.toHexString(s)}},B2={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=us.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return us.toHexString(s)}},k2=[O2,us,z2,B2];function H2(i){return k2.find(e=>e.match(i))}class G2 extends sn{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=H2(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=eo(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xa extends sn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class V2 extends sn{constructor(e,t,n,s,r,o){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},s=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,d,u;const f=5,m=x=>{a=x.clientX,l=c=x.clientY,o=!0,d=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const v=x.clientX-a,E=x.clientY-l;Math.abs(E)>f?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>f&&_()}if(!o){const v=x.clientY-c;u-=v*this._step*this._arrowKeyMultiplier(x),d+u>this._max?u=this._max-d:d+u<this._min&&(u=this._min-d),this._snapClampSetValue(d+u)}c=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(h,x,v,E,L)=>(h-x)/(v-x)*(L-E)+E,t=h=>{const x=this.$slider.getBoundingClientRect();let v=e(h,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=h=>{t(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),o=!1},d=h=>{h.touches.length>1||(this._hasScrollBar?(a=h.touches[0].clientX,l=h.touches[0].clientY,o=!0):c(h),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=h=>{if(o){const x=h.touches[0].clientX-a,v=h.touches[0].clientY-l;Math.abs(x)>Math.abs(v)?c(h):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else h.preventDefault(),t(h.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),g=400;let _;const p=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const v=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class W2 extends sn{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class X2 extends sn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Y2=`.lil-gui {
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
}`;function $2(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Cc=!1;class So{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Cc&&a&&($2(Y2),Cc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,n,s,r){if(Object(n)===n)return new W2(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new V2(this,e,t,n,s,r);case"boolean":return new F2(this,e,t);case"string":return new X2(this,e,t);case"function":return new xa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new G2(this,e,t,n)}addFolder(e){const t=new So({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof xa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof xa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function q2(i){const e=i.addFolder("About"),t=document.createElement("div");t.style.padding="15px",t.style.textAlign="center",t.innerHTML=`
        <img src="./assets/images/WhiteRabbit.png" style="max-width: 100%; margin-bottom: 10px; border-radius: 4px;">
        <br>
        <a href="https://github.com/IraGraves/white-rabbit" target="_blank" style="color: #88ccff; text-decoration: none;">GitHub Repository</a>
    `,e.domElement.querySelector(".children").appendChild(t),e.close()}const j2=[{type:"Total",date:new Date("2020-12-14T16:00:00Z")},{type:"Total",date:new Date("2021-12-04T07:00:00Z")},{type:"Total",date:new Date("2023-04-20T04:00:00Z")},{type:"Total",date:new Date("2024-04-08T18:00:00Z")},{type:"Total",date:new Date("2026-08-12T17:00:00Z")},{type:"Total",date:new Date("2027-08-02T10:00:00Z")},{type:"Total",date:new Date("2028-07-22T02:00:00Z")},{type:"Total",date:new Date("2030-11-25T06:00:00Z")},{type:"Annular",date:new Date("2020-06-21T06:00:00Z")},{type:"Annular",date:new Date("2021-06-10T10:00:00Z")},{type:"Annular",date:new Date("2023-10-14T18:00:00Z")},{type:"Annular",date:new Date("2024-10-02T18:00:00Z")},{type:"Annular",date:new Date("2026-02-17T12:00:00Z")},{type:"Annular",date:new Date("2027-02-06T16:00:00Z")},{type:"Annular",date:new Date("2028-01-26T15:00:00Z")},{type:"Annular",date:new Date("2030-06-01T06:00:00Z")}];function Z2(i,e,t,n){var s;U.date=new Date(i.date),U.simulationSpeed=1,(s=window.uiState)!=null&&s.updateSpeedometer&&window.uiState.updateSpeedometer(),setTimeout(()=>{const r=n.find(o=>o.data.name==="Earth");if(!r){console.error("Earth not found");return}Ui({...r,type:"planet"},e,t,2.5),console.log(`Navigating to event: ${i.type} - ${i.date.toISOString()}`)},100)}function nr(i){const e=i.date.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return`${i.type} - ${e}`}function K2(i,e,t,n,s){const r=i.addFolder("Events");r.domElement.classList.add("events-folder");const o={selectedEvent:null},a=document.createElement("div");a.className="events-container",a.innerHTML=`
        <div class="events-input-wrapper">
            <label for="events-search">Solar Eclipse</label>
            <input type="text" id="events-search" placeholder="Search..." autocomplete="off">
        </div>
        <div class="events-actions">
            <button id="btn-go-to-event" disabled>Go To</button>
        </div>
        <div id="events-status"></div>
    `,r.domElement.querySelector(".children").appendChild(a);let l=document.getElementById("events-results-dropdown");l||(l=document.createElement("div"),l.id="events-results-dropdown",l.className="events-results",document.body.appendChild(l));const c=a.querySelector("#events-search"),d=a.querySelector("#btn-go-to-event"),u=a.querySelector("#events-status");function f(){const g=c.getBoundingClientRect();l.style.top=`${g.bottom+5}px`,l.style.left=`${g.left}px`,l.style.width=`${g.width}px`}c.addEventListener("input",g=>{const _=g.target.value.toLowerCase();if(_.length<1){l.style.display="none";return}const p=[];j2.forEach(h=>{nr(h).toLowerCase().includes(_)&&p.push(h)}),p.sort((h,x)=>h.date-x.date),l.innerHTML="",p.length>0?(f(),l.style.display="block",p.forEach(h=>{const x=document.createElement("div");x.className="events-result-item";const v=h.type.includes("Total")?"total-eclipse":"annular-eclipse";x.innerHTML=`<span class="event-type ${v}">${h.type}</span><span class="event-date">${h.date.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}</span>`,x.onclick=()=>{m(h),l.style.display="none"},l.appendChild(x)})):l.style.display="none"}),window.addEventListener("resize",()=>{l.style.display==="block"&&f()}),r.domElement.closest(".lil-gui").addEventListener("scroll",()=>{l.style.display==="block"&&f()},!0);function m(g){o.selectedEvent=g,c.value=nr(g),d.disabled=!1,u.textContent=`Selected: ${nr(g)}`}d.onclick=()=>{o.selectedEvent&&e&&t&&(Z2(o.selectedEvent,e,t,n),u.textContent=`Navigating to ${nr(o.selectedEvent)}...`)},r.add({dummy:""},"dummy").name("Hidden").onChange(()=>{}).domElement.style.display="none",document.addEventListener("click",g=>{a.contains(g.target)||(l.style.display="none")}),r.close()}const J2="modulepreload",Q2=function(i){return"/"+i},Rc={},Lc=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Q2(l),l in Rc)return;Rc[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":J2,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function e_(i,e,t,n,s,r){const o=i.addFolder("Find");o.domElement.classList.add("find-folder");const a={selectedObject:null},l=document.createElement("div");l.className="find-container",l.innerHTML=`
        <div class="find-input-wrapper">
            <label for="find-search">Search</label>
            <input type="text" id="find-search" placeholder="Planets, stars..." autocomplete="off">
        </div>
        <div class="find-actions">
            <button id="btn-look-at" disabled>Look At</button>
            <button id="btn-go-to" disabled>Go To</button>
        </div>
        <div id="find-status"></div>
    `,o.domElement.querySelector(".children").appendChild(l);let c=document.getElementById("find-results-dropdown");c||(c=document.createElement("div"),c.id="find-results-dropdown",c.className="find-results",document.body.appendChild(c));const d=l.querySelector("#find-search"),u=l.querySelector("#btn-look-at"),f=l.querySelector("#btn-go-to"),m=l.querySelector("#find-status");function g(){const p=d.getBoundingClientRect();c.style.top=`${p.bottom+5}px`,c.style.left=`${p.left}px`,c.style.width=`${p.width}px`}d.addEventListener("input",p=>{const h=p.target.value.toLowerCase();if(h.length<2){c.style.display="none";return}const x=[];if("sun".includes(h)&&t.visible&&x.push({name:"Sun",type:"Star",object:{mesh:t,data:{name:"Sun",radius:5},type:"sun"}}),e.forEach(v=>{v.data.name.toLowerCase().includes(h)&&v.mesh.visible&&x.push({name:v.data.name,type:v.data.type==="dwarf"?"Dwarf Planet":"Planet",object:{mesh:v.mesh,data:v.data,type:"planet"}}),v.moons&&v.moons.forEach(E=>{E.data.name.toLowerCase().includes(h)&&E.mesh.visible&&x.push({name:E.data.name,type:"Moon",object:{mesh:E.mesh,data:E.data,type:"moon"}})})}),n.value&&n.value.userData.starData){const v=n.value.userData.starData;let E=0;for(let L=0;L<v.length&&E<5;L++){const C=v[L],A=C.name||`HD ${C.id}`;if(A.toLowerCase().includes(h)||C.id.toString().includes(h)){const F=n.value.geometry.attributes.position.array,y=F[L*3],b=F[L*3+1],N=F[L*3+2],B=new At;B.position.set(y,b,N),x.push({name:A,type:"Star",object:{mesh:B,data:{name:A,radius:C.radius||1},type:"star"}}),E++}}}c.innerHTML="",x.length>0?(g(),c.style.display="block",x.slice(0,10).forEach(v=>{const E=document.createElement("div");E.className="find-result-item",E.innerHTML=`<strong>${v.name}</strong> <span style="opacity:0.7; font-size:0.8em">(${v.type})</span>`,E.onclick=()=>{_(v),c.style.display="none"},c.appendChild(E)})):c.style.display="none"}),window.addEventListener("resize",()=>{c.style.display==="block"&&g()}),o.domElement.closest(".lil-gui").addEventListener("scroll",()=>{c.style.display==="block"&&g()},!0);function _(p){a.selectedObject=p.object,d.value=p.name,u.disabled=!1,f.disabled=!1,m.textContent=`Selected: ${p.name}`}u.onclick=()=>{a.selectedObject&&s&&r&&Lc(()=>Promise.resolve().then(()=>dc),void 0).then(p=>{p.isFocusModeActive()&&p.exitFocusMode(r);const h=a.selectedObject,x=new M;h.mesh.position?h.mesh.getWorldPosition(x):x.copy(h.mesh.position),r.target.copy(x),s.lookAt(x),r.update()})},f.onclick=()=>{a.selectedObject&&s&&r&&Lc(()=>Promise.resolve().then(()=>dc),void 0).then(p=>{p.focusOnObject(a.selectedObject,s,r)})},o.add({dummy:""},"dummy").name("Hidden").onChange(()=>{}).domElement.style.display="none",document.addEventListener("click",p=>{l.contains(p.target)||(c.style.display="none")}),o.close()}function t_(i,e){const t=i.addFolder("Missions");t.add(e.showMissions,"pioneer10").name("Pioneer 10 (1972)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("pioneer10-checkbox"),t.add(e.showMissions,"pioneer11").name("Pioneer 11 (1973)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("pioneer11-checkbox"),t.add(e.showMissions,"voyager2").name("Voyager 2 (1977)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("voyager2-checkbox"),t.add(e.showMissions,"voyager1").name("Voyager 1 (1977)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("voyager1-checkbox"),t.add(e.showMissions,"galileo").name("Galileo (1989)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("galileo-checkbox"),t.add(e.showMissions,"ulysses").name("Ulysses (1990)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("ulysses-checkbox"),t.add(e.showMissions,"cassini").name("Cassini (1997)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("cassini-checkbox"),t.add(e.showMissions,"rosetta").name("Rosetta (2004)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("rosetta-checkbox"),t.add(e.showMissions,"newHorizons").name("New Horizons (2006)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("new-horizons-checkbox"),t.add(e.showMissions,"juno").name("Juno (2011)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("juno-checkbox"),t.add(e.showMissions,"parkerSolarProbe").name("Parker Solar Probe (2018)").onChange(()=>{window.updateMissions&&window.updateMissions()}).domElement.classList.add("parker-checkbox"),t.close()}function n_(i,e){const t=i.addFolder("Navigation");t.add(e,"rotate").name("Rotate").disable(),t.add(e,"pan").name("Pan").disable(),t.add(e,"zoom").name("Zoom").disable(),t.add(e,"focusEnter").name("Focus").disable(),t.add(e,"focusExit").name("Exit Focus").disable(),t.add(e,"fullScreen").name("Full Screen").disable(),t.close()}function Pc(i,e){const t=document.createElement("div");t.className="custom-value",i.domElement.querySelector(".widget").appendChild(t);const n=()=>{t.textContent=e(i.getValue())},s=i._onChange;return i.onChange(r=>{n(),s&&s(r)}),n(),{update:n}}function i_(i,e,t,n,s){const r=i.addFolder("Scale");let o=!1;const a=r.add(e,"scalePreset",["Realistic","Artistic","Custom"]).name("Scale Preset"),l={get sunScale(){return U.sunScale*Ti},set sunScale(g){U.sunScale=g/Ti}},c=r.add(l,"sunScale",1,70).name("Sun Scale").onChange(g=>{const _=g/Ti;U.sunScale=_,n.scale.setScalar(_),yc(s,_),!o&&e.scalePreset!=="Custom"&&(e.scalePreset="Custom",a.updateDisplay())});c.domElement.classList.add("hide-value"),Pc(c,g=>g.toFixed(0)+"x");const d=g=>((g-1)/(pn*5-1))**(1/3),u=g=>1+(pn*5-1)*g**3,f={get planetT(){return d(U.planetScale*pn)},set planetT(g){const p=u(g)/pn;U.planetScale=p,t.forEach(h=>{h.mesh.scale.setScalar(p),h.moons.forEach(x=>x.mesh.scale.setScalar(p))}),Ka(t)}},m=r.add(f,"planetT",0,1).name("Planet Scale").onChange(g=>{!o&&e.scalePreset!=="Custom"&&(e.scalePreset="Custom",a.updateDisplay())});return m.domElement.classList.add("hide-value"),Pc(m,g=>u(g).toFixed(0)+"x"),a.onChange(g=>{if(o=!0,g==="Realistic")c.setValue(1),m.setValue(0);else if(g==="Artistic"){c.setValue(1*Ti);const _=(499/(pn*5-1))**(1/3);m.setValue(_)}o=!1}),r.close(),Ka(t),yc(s,U.sunScale),{setScalePreset:g=>{if(e.scalePreset=g,a.updateDisplay(),g==="Realistic")c.setValue(1),m.setValue(0);else if(g==="Artistic"){c.setValue(1*Ti);const _=(499/(pn*5-1))**(1/3);m.setValue(_)}}}}function s_(i,e,t){const n=i.addFolder("Time & Speed");n.domElement.classList.add("time-folder");const s=n.add(e,"date").name("Date").onChange(F=>{const[y,b,N]=F.split("-").map(Number),B=t.date;t.date=new Date(y,b-1,N,B.getHours(),B.getMinutes(),B.getSeconds())});s.domElement.classList.add("compact-ctrl");const r=s.domElement.querySelector("input");r.type="date";const o=n.add(e,"time").name("Time");o.disable(),o.domElement.classList.add("compact-ctrl");const a=n.add(e,"stardate").name("Stardate");a.disable(),e.setNow=()=>{t.date=new Date},n.add(e,"setNow").name("NOW").domElement.classList.add("set-now-btn");const c={speed:""},d=n.add(c,"speed").name("Speed");d.domElement.querySelector("input").style.display="none",d.domElement.classList.add("speed-label-row");const u=document.createElement("div");u.className="speedometer-container",u.innerHTML=`
        <div class="gauge-arc"></div>
        <div class="gauge-needle"></div>
        <div class="digital-speed">0x</div>
        <div class="speedometer-interaction"></div>
    `;const f=document.createElement("div");f.className="control-buttons",[{label:"<<",action:"rewind"},{label:"<",action:"reverse"},{label:"||",action:"pause"},{label:">",action:"play"},{label:">>",action:"forward"}].forEach(F=>{const y=document.createElement("div");y.className="control-btn",y.textContent=F.label,y.dataset.action=F.action,y.onclick=()=>A(F.action),f.appendChild(y)});const g=n.domElement.querySelector(".children");g.appendChild(u),g.appendChild(f);const _=u.querySelector(".gauge-needle"),p=u.querySelector(".digital-speed"),h=u.querySelector(".speedometer-interaction");function x(F){if(F===0)return"PAUSED";const y=Math.abs(F);let b="";return y>=1e9?b=Math.round(y/1e9).toLocaleString()+" b":y>=1e6?b=Math.round(y/1e6).toLocaleString()+" m":y>=100?b=Math.round(y).toLocaleString()+"x":y>=10?b=y.toFixed(1)+"x":b=y.toFixed(2)+"x",b}function v(){const F=t.simulationSpeed;let y=0;if(F!==0){const b=Math.sign(F),N=Math.abs(F),B=Math.log10(N);y=Math.max(0,Math.min(11,B))/11*90*b}_.style.transform=`rotate(${y}deg)`,F===0?(p.textContent="PAUSED",p.style.color="#ffaa88"):(p.textContent=x(F),p.style.color="#aaccff"),f.querySelectorAll(".control-btn").forEach(b=>{b.classList.remove("active");const N=b.dataset.action;N==="pause"&&F===0&&b.classList.add("active"),N==="play"&&F===1&&b.classList.add("active"),N==="reverse"&&F===-1&&b.classList.add("active")})}e.updateSpeedometer=v,v();function E(F){if(F=Math.max(-90,Math.min(90,F)),Math.abs(F)<5)t.simulationSpeed=0,e.speedFactor="0x";else{const y=Math.sign(F),N=Math.abs(F)/90*11,B=y*10**N;t.simulationSpeed=B,e.speedFactor=x(B)}v()}function L(F){const y=h.getBoundingClientRect(),b=y.left+y.width/2,N=y.bottom,B=F.clientX-b,K=N-F.clientY,O=90-Math.atan2(K,B)*180/Math.PI;E(O)}let C=!1;h.addEventListener("mousedown",F=>{C=!0,L(F)}),window.addEventListener("mousemove",F=>{C&&L(F)}),window.addEventListener("mouseup",()=>{C=!1});function A(F){const y=t.simulationSpeed,b=y===0?0:Math.log10(Math.abs(y));switch(F){case"pause":t.simulationSpeed=0;break;case"play":t.simulationSpeed=1;break;case"reverse":t.simulationSpeed=-1;break;case"forward":if(y<0){const N=Math.floor(b)-1;N<0?t.simulationSpeed=1:t.simulationSpeed=-(10**N)}else if(y===0)t.simulationSpeed=1;else{const N=Math.floor(b)+1;t.simulationSpeed=10**N}break;case"rewind":if(y>0){const N=Math.floor(b)-1;N<0?t.simulationSpeed=-1:t.simulationSpeed=10**N}else if(y===0)t.simulationSpeed=-1;else{const N=Math.floor(b)+1;t.simulationSpeed=-(10**N)}break}e.speedFactor=x(t.simulationSpeed),v()}return n.close(),{dateCtrl:s,timeCtrl:o,stardateCtrl:a,speedDisplay:{update:v}}}class r_{constructor(){this.audio=new Audio,this.tracks=[],this.currentTrackIndex=-1,this.isPlaying=!1,this.initialized=!1,this.playHistory=[],this.handleTrackEnded=this.handleTrackEnded.bind(this),this.audio.addEventListener("ended",this.handleTrackEnded)}async init(){if(!this.initialized)try{const e=await fetch("assets/music/tracks.json");this.tracks=await e.json(),this.initialized=!0,console.log("Music system initialized with tracks:",this.tracks),U.music.playlist.length===0&&(U.music.playlist=this.tracks.map(t=>t.id)),console.log("Music ready. Click play button to start.")}catch(e){console.error("Failed to initialize music system:",e)}}setEnabled(e){U.music.enabled=e,e?this.audio.paused&&(this.audio.src?(this.audio.play().catch(t=>console.warn("Audio play failed:",t)),this.isPlaying=!0):this.playNext()):(this.audio.pause(),this.isPlaying=!1)}setPlaylist(e){U.music.playlist=e,U.music.enabled&&!this.isPlaying&&e.length>0&&this.playNext()}setVolume(e){this.audio.volume=e,U.music.volume=e,e>0&&!U.music.enabled?this.setEnabled(!0):e===0&&U.music.enabled&&this.setEnabled(!1)}playNext(){var n;if(!U.music.enabled||U.music.playlist.length===0){this.audio.pause(),this.isPlaying=!1;return}const e=this.tracks.filter(s=>U.music.playlist.includes(s.id));if(e.length===0)return;let t;if(U.music.shuffle){const s=Math.floor(Math.random()*e.length);t=e[s]}else{const s=(n=this.tracks[this.currentTrackIndex])==null?void 0:n.id,r=e.findIndex(o=>o.id===s);t=e[(r+1)%e.length]}if(this.currentTrackIndex!==-1){const s=this.tracks[this.currentTrackIndex];s&&(this.playHistory.push(s.id),this.playHistory.length>50&&this.playHistory.shift())}this.currentTrackIndex=this.tracks.findIndex(s=>s.id===t.id),this.currentTrackIndex!==-1&&this.loadAndPlay(this.tracks[this.currentTrackIndex],!0)}playPrevious(){if(this.playHistory.length>0){const e=this.playHistory.pop(),t=this.tracks.findIndex(n=>n.id===e);if(t!==-1){this.currentTrackIndex=t;const n=this.tracks[this.currentTrackIndex];this.loadAndPlay(n,!0);return}}console.log("No previous track in history")}loadAndPlay(e){const n=this.audio.canPlayType('audio/ogg; codecs="vorbis"')?"ogg":"m4a";this.audio.src=`assets/music/${n}/${encodeURIComponent(e.filename)}.${n}`,this.audio.volume=U.music.volume,U.music.currentTrackName=e.title.replace(/ \[(Lyrics|Instrumental)\]/g,""),console.log(`Now playing: ${e.title}`),this.audio.play().then(()=>{this.isPlaying=!0}).catch(s=>{console.warn("Playback failed (likely autoplay blocked):",s),this.isPlaying=!1})}handleTrackEnded(){this.playNext()}}const Ft=new r_;function a_(i){const e=i.addFolder("Sound"),t=e.add(U.music,"volume",0,1).name("Music Volume").onChange(g=>{Ft.setVolume(g)});t&&(t.domElement.classList.add("hide-value"),t.domElement.classList.add("full-width"));const n=e.add(U.music,"currentTrackName").name("Currently Playing").listen().disable();n&&n.domElement.classList.add("full-width");const s=document.createElement("div");s.className="control-buttons",s.style.marginTop="4px";const r=document.createElement("div");r.className="control-btn",r.textContent="⏮",r.title="Previous Track",r.onclick=()=>{Ft.playPrevious()};const o=document.createElement("div");o.className="control-btn";const a=U.music.volume>0;o.textContent=a?"⏸":"▶",o.title=a?"Pause":"Play",o.onclick=()=>{const g=!U.music.enabled;Ft.setEnabled(g),o.textContent=g?"⏸":"▶",o.title=g?"Pause":"Play"};const l=document.createElement("div");l.className="control-btn",l.textContent="⏭",l.title="Next Track",l.onclick=()=>{Ft.playNext()};const c=document.createElement("div");c.className="control-btn",c.textContent=(U.music.shuffle,"🔀"),c.title=U.music.shuffle?"Shuffle: ON":"Shuffle: OFF",U.music.shuffle?c.classList.add("active"):c.style.opacity="0.4",c.onclick=()=>{U.music.shuffle=!U.music.shuffle,U.music.shuffle?(c.classList.add("active"),c.style.opacity="1",c.title="Shuffle: ON"):(c.classList.remove("active"),c.style.opacity="0.4",c.title="Shuffle: OFF")},s.appendChild(r),s.appendChild(o),s.appendChild(l),s.appendChild(c);const d={controls:""},u=e.add(d,"controls").name(" ");u.domElement.classList.add("full-width");const f=u.domElement.querySelector(".widget");f.innerHTML="",f.appendChild(s),u.domElement.style.gridTemplateColumns="1fr",u.domElement.querySelector(".name").style.display="none";const m={editPlaylist:()=>{o_()}};e.add(m,"editPlaylist").name("Edit Playlist..."),e.close()}function o_(){let i=document.querySelector(".playlist-modal-overlay");i||(l_(),i=document.querySelector(".playlist-modal-overlay")),wr(),i.classList.add("active")}function l_(){const i=document.createElement("div");i.className="playlist-modal-overlay";const e=document.createElement("div");e.className="playlist-modal";const t=document.createElement("div");t.className="playlist-header",t.innerHTML="<h2>Playlist</h2>";const n=document.createElement("div");n.className="playlist-controls";const s=document.createElement("button");s.className="playlist-btn",s.textContent="All",s.onclick=()=>Dc(!0);const r=document.createElement("button");r.className="playlist-btn",r.textContent="None",r.onclick=()=>Dc(!1);const o=document.createElement("button");o.className="playlist-btn",o.textContent="Lyrics",o.onclick=()=>Uc("Lyrics");const a=document.createElement("button");a.className="playlist-btn",a.textContent="Instrumental",a.onclick=()=>Uc("Instrumental"),n.appendChild(s),n.appendChild(r),n.appendChild(o),n.appendChild(a);const l=document.createElement("div");l.className="playlist-tracks",l.id="playlist-tracks-container";const c=document.createElement("div");c.className="playlist-footer";const d=document.createElement("button");d.className="playlist-close-btn",d.textContent="Close",d.onclick=()=>{i.classList.remove("active")},c.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(c),i.appendChild(e),document.body.appendChild(i),i.addEventListener("click",u=>{u.target===i&&i.classList.remove("active")})}function wr(){const i=document.getElementById("playlist-tracks-container");if(i){if(i.innerHTML="",!Ft.tracks||Ft.tracks.length===0){i.innerHTML='<div style="padding:10px; color:#aaa;">Loading tracks...</div>',Ft.init().then(()=>wr());return}Ft.tracks.forEach(e=>{const t=document.createElement("div");t.className="track-item",U.music.playlist.includes(e.id)&&t.classList.add("selected");const n=document.createElement("input");n.type="checkbox",n.checked=U.music.playlist.includes(e.id),n.onchange=r=>{c_(e.id,r.target.checked),r.target.checked?t.classList.add("selected"):t.classList.remove("selected")};const s=document.createElement("span");s.className="track-label",s.textContent=e.title.replace(/ \[(Lyrics|Instrumental)\]/g,""),t.onclick=r=>{r.target!==n&&(n.checked=!n.checked,n.dispatchEvent(new Event("change")))},t.appendChild(n),t.appendChild(s),i.appendChild(t)})}}function c_(i,e){e?U.music.playlist.includes(i)||U.music.playlist.push(i):U.music.playlist=U.music.playlist.filter(t=>t!==i),Ft.setPlaylist(U.music.playlist)}function Dc(i){i?U.music.playlist=Ft.tracks.map(e=>e.id):U.music.playlist=[],Ft.setPlaylist(U.music.playlist),wr()}function Uc(i){const t=Ft.tracks.filter(s=>s.title.includes(`[${i}]`)).map(s=>s.id);t.every(s=>U.music.playlist.includes(s))?U.music.playlist=U.music.playlist.filter(s=>!t.includes(s)):t.forEach(s=>{U.music.playlist.includes(s)||U.music.playlist.push(s)}),Ft.setPlaylist(U.music.playlist),wr()}function d_(i,e,t,n,s,r,o,a,l,c,d,u,f,m){const g=new So({title:"Menu"});g.domElement.classList.add("main-gui");const _={speedExponent:0,date:"",time:"",stardate:"",speedFactor:"0x",planetScaleDisplay:(1*pn).toFixed(0)+"x",sunScaleDisplay:(1*Ti).toFixed(1)+"x",rotate:"Left Click + Drag",pan:"Right Click + Drag",zoom:"Scroll",focusEnter:"Double Click Object",focusExit:"Escape Key",fullScreen:"F11",scalePreset:"Artistic"};e_(g,i,e,o,l,c);const{dateCtrl:p,timeCtrl:h,stardateCtrl:x,speedDisplay:v}=s_(g,_,U);return Pg(g,i,e),Lg(g,t,s,r,i,e,d,u,f,n,m),i_(g,_,i,e,m),Rg(g,o,a,m,i,e,t,n),t_(g,U),K2(g,l,c,i),n_(g,_),a_(g),q2(g),g.close(),{uiState:_,dateCtrl:p,timeCtrl:h,stardateCtrl:x,speedDisplay:v}}function u_(i,e){const t=U.date.getFullYear(),n=String(U.date.getMonth()+1).padStart(2,"0"),s=String(U.date.getDate()).padStart(2,"0"),r=`${t}-${n}-${s}`;i.date=r,i.time=U.date.toLocaleTimeString();const o=new Date(U.date.getFullYear(),0,0),a=U.date-o,l=1e3*60*60*24,c=Math.floor(a/l);i.stardate=(U.date.getFullYear()+c/365).toFixed(2),U.simulationSpeed===0?i.speedFactor="0x":i.speedFactor=Math.round(U.simulationSpeed).toLocaleString()+"x";const d=e.dateCtrl.domElement.querySelector("input");d&&d.value!==r&&(d.value=r),e.dateCtrl.updateDisplay(),e.timeCtrl.updateDisplay(),e.stardateCtrl.updateDisplay(),e.speedDisplay&&e.speedDisplay.update()}(async()=>{try{let i=function(){requestAnimationFrame(i);const b=F.getDelta();if(!U.stop){const N=U.simulationSpeed*b;U.date.setTime(U.date.getTime()+N*1e3),y+=b*U.simulationSpeed*25e-5}if(u_(C.uiState,C),r2(_,p,c),B0(d,_,p),Ya(o,E,_,p),C0(n,r,_,p),A.update(b),r.update(),s.render(t,n),d){const N=d.children.find(K=>K.name==="MagneticField");N&&N.visible&&N.userData.material&&(N.userData.material.uniforms.uTime.value=y,p&&(N.rotation.y=p.rotation.y));const B=d.children.find(K=>K.name==="SunMagneticFieldBasic");if(B&&B.visible){const K=y+B.userData.timeOffset;if(B.userData.shaderUniforms){const P=new Date("2000-01-01T12:00:00Z").getTime(),G=(U.date.getTime()-P)/(1e3*60*60);B.userData.shaderUniforms.uTime.value=G,p&&(B.rotation.y=p.rotation.y)}B.children.forEach(P=>{if(P.userData.isPolar&&P.userData.basePoints){const O=P.geometry.attributes.position,G=P.userData.basePoints;for(let j=0;j<G.length;j++){const q=G[j],Z=Math.sin(K*.3+j*.1)*.1,$=new M(Z,0,Z);O.setXYZ(j,q.x+$.x,q.y+$.y,q.z+$.z)}O.needsUpdate=!0}})}}A.render()};console.log("White Rabbit Version: 1.3 (Instant Start)");const e=document.getElementById("loading");e.textContent="Initializing... (Base: /)",e.textContent="Creating Scene...";const{scene:t,camera:n,renderer:s,controls:r,orbitGroup:o,zodiacGroup:a,sunLight:l,shadowLight:c}=l2();window.scene=t;const d=new Ct;t.add(d),d.add(l),d.add(c),d.add(o),d.add(a);const u=new Ct;d.add(u),u.visible=U.showConstellations,a.visible=U.showZodiacs;const f=new go,m=I2(d,f),g=C2(d);e.textContent="Loading Planets...";const{planets:_,sun:p}=s2(d,o),h=new Ct;h.visible=U.showMagneticFields,d.add(h);const x=R2(p);x&&(x.visible=U.showSunMagneticFieldBasic,d.add(x));const v=L2(p);v&&(v.visible=U.showSunMagneticField,d.add(v)),_.forEach(b=>{if(b.data.magneticField){const N=Ac(b.data,b.data.radius);N&&b.mesh.add(N)}b.moons.forEach(N=>{if(N.data.magneticField){const B=Ac(N.data,N.data.radius);B&&N.mesh.add(B)}})});const E=new Ct;t.add(E),e.textContent="Setting up GUI...";const L={value:null},C=d_(_,p,o,E,a,u,L,s,n,r,m,g,h,d);Ig(n,_,p,L,a,u),A0(n,r,_,p),T2(d),window.updateMissions=A2,Ya(o,E,_,p),window.SimulationControl=new Dg(_,p,o,a,u,L,n,r,m,g,h,d);const A=P2(s);Ft.init(),e.style.opacity=0,e.style.pointerEvents="none";const F=new k1;let y=0;i(),h2(d).then(({stars:b,rawData:N})=>{b&&(L.value=b,b.material.opacity=U.starBrightness/.6*.3,f2(a,u,N),N2(m,N))}).catch(b=>console.error("Error loading stars:",b))}catch(i){console.error("Initialization error:",i),document.getElementById("loading").textContent="Error loading simulation: "+i.message,document.getElementById("loading").style.color="red"}})();
