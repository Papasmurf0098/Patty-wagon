(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="180",yh=0,Ja=1,Sh=2,ml=1,gl=2,Cn=3,Zn=0,Ge=1,ke=2,Yn=0,Hi=1,Za=2,Ka=3,ja=4,Eh=5,ui=100,bh=101,wh=102,Th=103,Ah=104,Rh=200,Ch=201,Ph=202,Lh=203,To=204,Ao=205,Ih=206,Dh=207,Uh=208,Nh=209,Fh=210,zh=211,Oh=212,Bh=213,kh=214,Ro=0,Co=1,Po=2,Xi=3,Lo=4,Io=5,Do=6,Uo=7,Ar=0,Hh=1,Vh=2,$n=0,Gh=1,Wh=2,Xh=3,xl=4,qh=5,Yh=6,$h=7,_l=300,qi=301,Yi=302,No=303,Fo=304,Rr=306,ys=1e3,di=1001,zo=1002,je=1003,Jh=1004,Hs=1005,Je=1006,Or=1007,qn=1008,_n=1009,vl=1010,Ml=1011,Ss=1012,va=1013,pi=1014,pn=1015,Ns=1016,Ma=1017,ya=1018,Es=1020,yl=35902,Sl=35899,El=1021,bl=1022,Ze=1023,bs=1026,ws=1027,Sa=1028,Ea=1029,wl=1030,ba=1031,wa=1033,pr=33776,mr=33777,gr=33778,xr=33779,Oo=35840,Bo=35841,ko=35842,Ho=35843,Vo=36196,Go=37492,Wo=37496,Xo=37808,qo=37809,Yo=37810,$o=37811,Jo=37812,Zo=37813,Ko=37814,jo=37815,Qo=37816,ta=37817,ea=37818,na=37819,ia=37820,sa=37821,ra=36492,oa=36494,aa=36495,ca=36283,la=36284,ha=36285,ua=36286,Zh=3200,Kh=3201,Ta=0,jh=1,Pn="",Le="srgb",$i="srgb-linear",Sr="linear",he="srgb",Mi=7680,Qa=519,Qh=512,tu=513,eu=514,Tl=515,nu=516,iu=517,su=518,ru=519,tc=35044,ec=35048,nc="300 es",mn=2e3,Er=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,fa=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function ou(i,t){return(i%t+t)%t}function kr(i,t,e){return(1-e)*i+e*t}function os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],x=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=g;return}if(u!==g||l!==d||h!==f||c!==x){let m=1-a;const p=l*d+h*f+c*x+u*g,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),R=Math.atan2(A,p*S);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const _=a*S;if(l=l*m+d*_,h=h*m+f*_,c=c*m+x*_,u=u*m+g*_,m===1-a){const A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+c*u+l*f-h*d,t[e+1]=l*x+c*d+h*u-a*f,t[e+2]=h*x+c*f+a*d-l*u,t[e+3]=c*x-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*x,this._y=h*f*u-d*c*x,this._z=h*c*x+d*f*u,this._w=h*c*u-d*f*x;break;case"YXZ":this._x=d*c*u+h*f*x,this._y=h*f*u-d*c*x,this._z=h*c*x-d*f*u,this._w=h*c*u+d*f*x;break;case"ZXY":this._x=d*c*u-h*f*x,this._y=h*f*u+d*c*x,this._z=h*c*x+d*f*u,this._w=h*c*u-d*f*x;break;case"ZYX":this._x=d*c*u-h*f*x,this._y=h*f*u+d*c*x,this._z=h*c*x-d*f*u,this._w=h*c*u+d*f*x;break;case"YZX":this._x=d*c*u+h*f*x,this._y=h*f*u+d*c*x,this._z=h*c*x-d*f*u,this._w=h*c*u-d*f*x;break;case"XZY":this._x=d*c*u-h*f*x,this._y=h*f*u-d*c*x,this._z=h*c*x+d*f*u,this._w=h*c*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new D,ic=new Fs;class Xt{constructor(t,e,n,s,r,o,a,l,h){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],x=n[8],g=s[0],m=s[3],p=s[6],S=s[1],M=s[4],_=s[7],A=s[2],R=s[5],C=s[8];return r[0]=o*g+a*S+l*A,r[3]=o*m+a*M+l*R,r[6]=o*p+a*_+l*C,r[1]=h*g+c*S+u*A,r[4]=h*m+c*M+u*R,r[7]=h*p+c*_+u*C,r[2]=d*g+f*S+x*A,r[5]=d*m+f*M+x*R,r[8]=d*p+f*_+x*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,x=e*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=u*g,t[1]=(s*h-c*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(c*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-h*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Xt;function Al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){const i=br("canvas");return i.style.display="block",i}const sc={};function Ts(i){i in sc||(sc[i]=!0,console.warn(i))}function cu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const rc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lu(){const i={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$i]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:rc,fromXYZ:oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:he,toXYZ:rc,fromXYZ:oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const re=lu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class hu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yi===void 0&&(yi=br("canvas")),yi.width=t.width,yi.height=t.height;const s=yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uu=0;class Aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gr(s[o].image)):r.push(Gr(s[o]))}else r=Gr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0;const Wr=new D;class ze extends ji{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=di,s=di,r=Je,o=qn,a=Ze,l=_n,h=ze.DEFAULT_ANISOTROPY,c=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Qi(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wr).x}get height(){return this.source.getSize(Wr).y}get depth(){return this.source.getSize(Wr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=_l;ze.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,_=(f+1)/2,A=(p+1)/2,R=(c+d)/4,C=(u+g)/4,P=(x+m)/4;return M>_&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=C/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=R/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(u-g)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class du extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new ze(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Aa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rl extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pu extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Gs.subVectors(this.max,as),Si.subVectors(t.a,as),Ei.subVectors(t.b,as),bi.subVectors(t.c,as),zn.subVectors(Ei,Si),On.subVectors(bi,Ei),ei.subVectors(Si,bi);let e=[0,-zn.z,zn.y,0,-On.z,On.y,0,-ei.z,ei.y,zn.z,0,-zn.x,On.z,0,-On.x,ei.z,0,-ei.x,-zn.y,zn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!Xr(e,Si,Ei,bi,Gs)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,Si,Ei,bi,Gs))?!1:(Ws.crossVectors(zn,On),e=[Ws.x,Ws.y,Ws.z],Xr(e,Si,Ei,bi,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sn=[new D,new D,new D,new D,new D,new D,new D,new D],on=new D,Vs=new Fn,Si=new D,Ei=new D,bi=new D,zn=new D,On=new D,ei=new D,as=new D,Gs=new D,Ws=new D,ni=new D;function Xr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);const a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),h=e.dot(ni),c=n.dot(ni);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const mu=new Fn,cs=new D,qr=new D;class zs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(qr)),this.expandByPoint(cs.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const En=new D,Yr=new D,Xs=new D,Bn=new D,$r=new D,qs=new D,Jr=new D;class gu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yr.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Yr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Xs),a=Bn.dot(this.direction),l=-Bn.dot(Xs),h=Bn.lengthSq(),c=Math.abs(1-o*o);let u,d,f,x;if(c>0)if(u=o*l-a,d=o*a-l,x=r*c,u>=0)if(d>=-x)if(d<=x){const g=1/c;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yr).addScaledVector(Xs,d),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){$r.subVectors(e,t),qs.subVectors(n,t),Jr.crossVectors($r,qs);let o=this.direction.dot(Jr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const l=a*this.direction.dot(qs.crossVectors(Bn,qs));if(l<0)return null;const h=a*this.direction.dot($r.cross(Bn));if(h<0||l+h>o)return null;const c=-a*Bn.dot(Jr);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,l,h,c,u,d,f,x,g,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,u,d,f,x,g,m)}set(t,e,n,s,r,o,a,l,h,c,u,d,f,x,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*c,f=o*u,x=a*c,g=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+x*h,e[5]=d-g*h,e[9]=-a*l,e[2]=g-d*h,e[6]=x+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,x=h*c,g=h*u;e[0]=d+g*a,e[4]=x*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-x,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,x=h*c,g=h*u;e[0]=d-g*a,e[4]=-o*u,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*c,e[9]=g-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,x=a*c,g=a*u;e[0]=l*c,e[4]=x*h-f,e[8]=d*h+g,e[1]=l*u,e[5]=g*h+d,e[9]=f*h-x,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,x=a*l,g=a*h;e[0]=l*c,e[4]=g-d*u,e[8]=x*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+x,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,f=o*h,x=a*l,g=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+g,e[5]=o*c,e[9]=f*u-x,e[2]=x*u-f,e[6]=a*c,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,_u)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),kn.crossVectors(n,qe),kn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),kn.crossVectors(n,qe)),kn.normalize(),Ys.crossVectors(qe,kn),s[0]=kn.x,s[4]=Ys.x,s[8]=qe.x,s[1]=kn.y,s[5]=Ys.y,s[9]=qe.y,s[2]=kn.z,s[6]=Ys.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],S=n[3],M=n[7],_=n[11],A=n[15],R=s[0],C=s[4],P=s[8],b=s[12],E=s[1],L=s[5],B=s[9],$=s[13],Y=s[2],K=s[6],q=s[10],nt=s[14],W=s[3],_t=s[7],pt=s[11],Mt=s[15];return r[0]=o*R+a*E+l*Y+h*W,r[4]=o*C+a*L+l*K+h*_t,r[8]=o*P+a*B+l*q+h*pt,r[12]=o*b+a*$+l*nt+h*Mt,r[1]=c*R+u*E+d*Y+f*W,r[5]=c*C+u*L+d*K+f*_t,r[9]=c*P+u*B+d*q+f*pt,r[13]=c*b+u*$+d*nt+f*Mt,r[2]=x*R+g*E+m*Y+p*W,r[6]=x*C+g*L+m*K+p*_t,r[10]=x*P+g*B+m*q+p*pt,r[14]=x*b+g*$+m*nt+p*Mt,r[3]=S*R+M*E+_*Y+A*W,r[7]=S*C+M*L+_*K+A*_t,r[11]=S*P+M*B+_*q+A*pt,r[15]=S*b+M*$+_*nt+A*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],x=t[3],g=t[7],m=t[11],p=t[15];return x*(+r*l*u-s*h*u-r*a*d+n*h*d+s*a*f-n*l*f)+g*(+e*l*f-e*h*d+r*o*d-s*o*f+s*h*c-r*l*c)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-s*a*c-e*l*u+e*a*d+s*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],x=t[12],g=t[13],m=t[14],p=t[15],S=u*m*h-g*d*h+g*l*f-a*m*f-u*l*p+a*d*p,M=x*d*h-c*m*h-x*l*f+o*m*f+c*l*p-o*d*p,_=c*g*h-x*u*h+x*a*f-o*g*f-c*a*p+o*u*p,A=x*u*l-c*g*l-x*a*d+o*g*d+c*a*m-o*u*m,R=e*S+n*M+s*_+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=S*C,t[1]=(g*d*r-u*m*r-g*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(a*m*r-g*l*r+g*s*h-n*m*h-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*d*r-u*s*h+n*d*h+a*s*f-n*l*f)*C,t[4]=M*C,t[5]=(c*m*r-x*d*r+x*s*f-e*m*f-c*s*p+e*d*p)*C,t[6]=(x*l*r-o*m*r-x*s*h+e*m*h+o*s*p-e*l*p)*C,t[7]=(o*d*r-c*l*r+c*s*h-e*d*h-o*s*f+e*l*f)*C,t[8]=_*C,t[9]=(x*u*r-c*g*r-x*n*f+e*g*f+c*n*p-e*u*p)*C,t[10]=(o*g*r-x*a*r+x*n*h-e*g*h-o*n*p+e*a*p)*C,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*C,t[12]=A*C,t[13]=(c*g*s-x*u*s+x*n*d-e*g*d-c*n*m+e*u*m)*C,t[14]=(x*a*s-o*g*s-x*n*l+e*g*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-c*a*s+c*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,x=r*u,g=o*c,m=o*u,p=a*u,S=l*h,M=l*c,_=l*u,A=n.x,R=n.y,C=n.z;return s[0]=(1-(g+p))*A,s[1]=(f+_)*A,s[2]=(x-M)*A,s[3]=0,s[4]=(f-_)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(x+M)*C,s[9]=(m-S)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const o=wi.set(s[4],s[5],s[6]).length(),a=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const h=1/r,c=1/o,u=1/a;return an.elements[0]*=h,an.elements[1]*=h,an.elements[2]*=h,an.elements[4]*=c,an.elements[5]*=c,an.elements[6]*=c,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn,l=!1){const h=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let x,g;if(l)x=r/(o-r),g=o*r/(o-r);else if(a===mn)x=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Er)x=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn,l=!1){const h=this.elements,c=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let x,g;if(l)x=1/(o-r),g=o/(o-r);else if(a===mn)x=-2/(o-r),g=-(o+r)/(o-r);else if(a===Er)x=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=x,h[14]=g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new D,an=new oe,xu=new D(0,0,0),_u=new D(1,1,1),kn=new D,Ys=new D,qe=new D,ac=new oe,cc=new Fs;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const lc=new D,Ti=new Fs,bn=new oe,$s=new D,ls=new D,Mu=new D,yu=new Fs,hc=new D(1,0,0),uc=new D(0,1,0),fc=new D(0,0,1),dc={type:"added"},Su={type:"removed"},Ai={type:"childadded",child:null},Zr={type:"childremoved",child:null};class Ae extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new D,e=new un,n=new Fs,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Xt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$s.copy(t):$s.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ls,$s,this.up):bn.lookAt($s,ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(bn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new D(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new D,wn=new D,Kr=new D,Tn=new D,Ri=new D,Ci=new D,pc=new D,jr=new D,Qr=new D,to=new D,eo=new me,no=new me,io=new me;class hn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),wn.subVectors(n,e),Kr.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(wn),l=cn.dot(Kr),h=wn.dot(wn),c=wn.dot(Kr),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-a*c)*d,x=(o*c-a*l)*d;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(eo,r.x),o.addScaledVector(no,r.y),o.addScaledVector(io,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),wn.subVectors(t,e),cn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),cn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ri.subVectors(s,n),Ci.subVectors(r,n),jr.subVectors(t,n);const l=Ri.dot(jr),h=Ci.dot(jr);if(l<=0&&h<=0)return e.copy(n);Qr.subVectors(t,s);const c=Ri.dot(Qr),u=Ci.dot(Qr);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Ri,o);to.subVectors(t,r);const f=Ri.dot(to),x=Ci.dot(to);if(x>=0&&f<=x)return e.copy(r);const g=f*h-l*x;if(g<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(n).addScaledVector(Ci,a);const m=c*x-f*u;if(m<=0&&u-c>=0&&f-x>=0)return pc.subVectors(r,s),a=(u-c)/(u-c+(f-x)),e.copy(s).addScaledVector(pc,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=ou(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=so(o,r,t+1/3),this.g=so(o,r,t),this.b=so(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return re.workingToColorSpace(Fe.copy(this),t),Math.round(jt(Fe.r*255,0,255))*65536+Math.round(jt(Fe.g*255,0,255))*256+Math.round(jt(Fe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Le){re.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Js);const n=kr(Hn.h,Js.h,e),s=kr(Hn.s,Js.s,e),r=kr(Hn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Gt;Gt.NAMES=Pl;let Eu=0;class ts extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Hi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cr extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,Zs=new ft;let bu=0;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zs.fromBufferAttribute(this,e),Zs.applyMatrix3(t),this.setXY(e,Zs.x,Zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class Ll extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Il extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wu=0;const en=new oe,ro=new Ae,Pi=new D,Ye=new Fn,hs=new Fn,Pe=new D;class ye extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Al(t)?Il:Ll)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ye.min,hs.min),Ye.expandByPoint(Pe),Pe.addVectors(Ye.max,hs.max),Ye.expandByPoint(Pe)):(Ye.expandByPoint(hs.min),Ye.expandByPoint(hs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Pe.fromBufferAttribute(a,h),l&&(Pi.fromBufferAttribute(t,h),Pe.add(Pi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const h=new D,c=new D,u=new D,d=new ft,f=new ft,x=new ft,g=new D,m=new D;function p(P,b,E){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,E),c.sub(h),u.sub(h),f.sub(d),x.sub(d);const L=1/(f.x*x.y-x.x*f.y);isFinite(L)&&(g.copy(c).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-x.x).multiplyScalar(L),a[P].add(g),a[b].add(g),a[E].add(g),l[P].add(m),l[b].add(m),l[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,b=S.length;P<b;++P){const E=S[P],L=E.start,B=E.count;for(let $=L,Y=L+B;$<Y;$+=3)p(t.getX($+0),t.getX($+1),t.getX($+2))}const M=new D,_=new D,A=new D,R=new D;function C(P){A.fromBufferAttribute(s,P),R.copy(A);const b=a[P];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(R,b);const L=_.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,b=S.length;P<b;++P){const E=S[P],L=E.start,B=E.count;for(let $=L,Y=L+B;$<Y;$+=3)C(t.getX($+0)),C(t.getX($+1)),C(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,h=new D,c=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const x=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let f=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*c;for(let p=0;p<c;p++)d[x++]=h[f++]}return new Ue(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new oe,ii=new gu,Ks=new zs,gc=new D,js=new D,Qs=new D,tr=new D,oo=new D,er=new D,xc=new D,nr=new D;class Ke extends Ae{constructor(t=new ye,e=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(oo.fromBufferAttribute(u,t),o?er.addScaledVector(oo,c):er.addScaledVector(oo.sub(e),c))}e.add(er)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Ks.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ks,gc)===null||ii.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),ii.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,A=M;_<A;_+=3){const R=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=ir(this,p,t,n,h,c,u,R,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=ir(this,o,t,n,h,c,u,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,A=M;_<A;_+=3){const R=_,C=_+1,P=_+2;s=ir(this,p,t,n,h,c,u,R,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const S=m,M=m+1,_=m+2;s=ir(this,o,t,n,h,c,u,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Tu(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Zn,a),l===null)return null;nr.copy(a),nr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(nr);return h<e.near||h>e.far?null:{distance:h,point:nr.clone(),object:i}}function ir(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,js),i.getVertexPosition(l,Qs),i.getVertexPosition(h,tr);const c=Tu(i,t,e,n,js,Qs,tr,xc);if(c){const u=new D;hn.getBarycoord(xc,js,Qs,tr,u),s&&(c.uv=hn.getInterpolatedAttribute(s,a,l,h,u,new ft)),r&&(c.uv1=hn.getInterpolatedAttribute(r,a,l,h,u,new ft)),o&&(c.normal=hn.getInterpolatedAttribute(o,a,l,h,u,new D),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new D,materialIndex:0};hn.getNormal(js,Qs,tr,d.normal),c.face=d,c.barycoord=u}return c}class _i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(u,2));function x(g,m,p,S,M,_,A,R,C,P,b){const E=_/C,L=A/P,B=_/2,$=A/2,Y=R/2,K=C+1,q=P+1;let nt=0,W=0;const _t=new D;for(let pt=0;pt<q;pt++){const Mt=pt*L-$;for(let Ot=0;Ot<K;Ot++){const qt=Ot*E-B;_t[g]=qt*S,_t[m]=Mt*M,_t[p]=Y,h.push(_t.x,_t.y,_t.z),_t[g]=0,_t[m]=0,_t[p]=R>0?1:-1,c.push(_t.x,_t.y,_t.z),u.push(Ot/C),u.push(1-pt/P),nt+=1}}for(let pt=0;pt<P;pt++)for(let Mt=0;Mt<C;Mt++){const Ot=d+Mt+K*pt,qt=d+Mt+K*(pt+1),ne=d+(Mt+1)+K*(pt+1),Jt=d+(Mt+1)+K*pt;l.push(Ot,qt,Jt),l.push(qt,ne,Jt),W+=6}a.addGroup(f,W,b),f+=W,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function Au(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Ru={clone:Ji,merge:Be};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ra extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new D,_c=new ft,vc=new ft;class sn extends Ra{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,vc),e.subVectors(vc,_c)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Ii=1;class Lu extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Li,Ii,t,e);s.layers=this.layers,this.add(s);const r=new sn(Li,Ii,t,e);r.layers=this.layers,this.add(r);const o=new sn(Li,Ii,t,e);o.layers=this.layers,this.add(o);const a=new sn(Li,Ii,t,e);a.layers=this.layers,this.add(a);const l=new sn(Li,Ii,t,e);l.layers=this.layers,this.add(l);const h=new sn(Li,Ii,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ul extends ze{constructor(t=[],e=qi,n,s,r,o,a,l,h,c){super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iu extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ul(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Yn});r.uniforms.tEquirect.value=e;const o=new Ke(s,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=Je),new Lu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ie extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Du={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,x=.005;h.inputState.pinching&&d>f+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Du)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ca{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uu extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const sr=new D,Mc=new D;class Nu extends Ae{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,s=e.length;n<s;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){sr.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(sr);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){sr.setFromMatrixPosition(t.matrixWorld),Mc.setFromMatrixPosition(this.matrixWorld);const n=sr.distanceTo(Mc)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),n>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class Pa extends ze{constructor(t=null,e=1,n=1,s,r,o,a,l,h=je,c=je,u,d){super(null,o,a,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yc extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new oe,Sc=new oe,rr=[],Ec=new Fn,Fu=new oe,us=new Ke,fs=new zs;class Ui extends Ke{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),Ec.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(Ec)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),fs.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),Sc.multiplyMatrices(n,Di),us.matrixWorld=Sc,us.raycast(t,rr);for(let o=0,a=rr.length;o<a;o++){const l=rr[o];l.instanceId=r,l.object=this,e.push(l)}rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pa(new Float32Array(s*this.count),s,this.count,Sa,pn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const co=new D,zu=new D,Ou=new Xt;class li{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=co.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ou.getNormalMatrix(t),s=this.coplanarPoint(co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new zs,Bu=new ft(.5,.5),or=new D;class Pr{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],u=r[5],d=r[6],f=r[7],x=r[8],g=r[9],m=r[10],p=r[11],S=r[12],M=r[13],_=r[14],A=r[15];if(s[0].setComponents(h-o,f-c,p-x,A-S).normalize(),s[1].setComponents(h+o,f+c,p+x,A+S).normalize(),s[2].setComponents(h+a,f+u,p+g,A+M).normalize(),s[3].setComponents(h-a,f-u,p-g,A-M).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(h-l,f-d,p-m,A-_).normalize();else if(s[4].setComponents(h-l,f-d,p-m,A-_).normalize(),e===mn)s[5].setComponents(h+l,f+d,p+m,A+_).normalize();else if(e===Er)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);const e=Bu.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nl extends ze{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fl extends ze{constructor(t,e,n=pi,s,r,o,a=je,l=je,h,c=bs,u=1){if(c!==bs&&c!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Aa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zl extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class jn extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],f=[];let x=0;const g=[],m=n/2;let p=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function S(){const _=new D,A=new D;let R=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const b=[],E=P/r,L=E*(e-t)+t;for(let B=0;B<=s;B++){const $=B/s,Y=$*l+a,K=Math.sin(Y),q=Math.cos(Y);A.x=L*K,A.y=-E*n+m,A.z=L*q,u.push(A.x,A.y,A.z),_.set(K,C,q).normalize(),d.push(_.x,_.y,_.z),f.push($,1-E),b.push(x++)}g.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const E=g[b][P],L=g[b+1][P],B=g[b+1][P+1],$=g[b][P+1];(t>0||b!==0)&&(c.push(E,L,$),R+=3),(e>0||b!==r-1)&&(c.push(L,B,$),R+=3)}h.addGroup(p,R,0),p+=R}function M(_){const A=x,R=new ft,C=new D;let P=0;const b=_===!0?t:e,E=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),x++;const L=x;for(let B=0;B<=s;B++){const Y=B/s*l+a,K=Math.cos(Y),q=Math.sin(Y);C.x=b*q,C.y=m*E,C.z=b*K,u.push(C.x,C.y,C.z),d.push(0,E,0),R.x=K*.5+.5,R.y=q*.5*E+.5,f.push(R.x,R.y),x++}for(let B=0;B<s;B++){const $=A+B,Y=L+B;_===!0?c.push(Y,Y+1,$):c.push(Y+1,Y,$),P+=3}h.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rn extends jn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new rn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class La extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new D,_=new D,A=new D;for(let R=0;R<e.length;R+=3)f(e[R+0],M),f(e[R+1],_),f(e[R+2],A),l(M,_,A,S)}function l(S,M,_,A){const R=A+1,C=[];for(let P=0;P<=R;P++){C[P]=[];const b=S.clone().lerp(_,P/R),E=M.clone().lerp(_,P/R),L=R-P;for(let B=0;B<=L;B++)B===0&&P===R?C[P][B]=b:C[P][B]=b.clone().lerp(E,B/L)}for(let P=0;P<R;P++)for(let b=0;b<2*(R-P)-1;b++){const E=Math.floor(b/2);b%2===0?(d(C[P][E+1]),d(C[P+1][E]),d(C[P][E])):(d(C[P][E+1]),d(C[P+1][E+1]),d(C[P+1][E]))}}function h(S){const M=new D;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(S),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function c(){const S=new D;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const _=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(_,1-A)}x(),u()}function u(){for(let S=0;S<o.length;S+=6){const M=o[S+0],_=o[S+2],A=o[S+4],R=Math.max(M,_,A),C=Math.min(M,_,A);R>.9&&C<.1&&(M<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,M){const _=S*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function x(){const S=new D,M=new D,_=new D,A=new D,R=new ft,C=new ft,P=new ft;for(let b=0,E=0;b<r.length;b+=9,E+=6){S.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),R.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),A.copy(S).add(M).add(_).divideScalar(3);const L=m(A);g(R,E+0,S,L),g(C,E+2,M,L),g(P,E+4,_,L)}}function g(S,M,_,A){A<0&&S.x===1&&(o[M]=S.x-1),_.x===0&&_.z===0&&(o[M]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.vertices,t.indices,t.radius,t.details)}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,l=new oe;for(let f=0;f<=t;f++){const x=f/t;s[f]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ia extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ku extends Ia{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ar=new D,lo=new Da,ho=new Da,uo=new Da;class Ua extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(ar.subVectors(s[0],s[1]).add(s[0]),h=ar);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=ar),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),lo.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,x,g,m),ho.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,x,g,m),uo.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,x,g,m)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),ho.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),uo.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(lo.calc(l),ho.calc(l),uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Hu(i,t){const e=1-i;return e*e*t}function Vu(i,t){return 2*(1-i)*i*t}function Gu(i,t){return i*i*t}function _s(i,t,e,n){return Hu(i,t)+Vu(i,e)+Gu(i,n)}function Wu(i,t){const e=1-i;return e*e*e*t}function Xu(i,t){const e=1-i;return 3*e*e*i*t}function qu(i,t){return 3*(1-i)*i*i*t}function Yu(i,t){return i*i*i*t}function vs(i,t,e,n,s){return Wu(i,t)+Xu(i,e)+qu(i,n)+Yu(i,s)}class Ol extends Mn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $u extends Mn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y),vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bl extends Mn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends Mn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kl extends Mn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends Mn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y),_s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vl extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(bc(a,l.x,h.x,c.x,u.x),bc(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var wr=Object.freeze({__proto__:null,ArcCurve:ku,CatmullRomCurve3:Ua,CubicBezierCurve:Ol,CubicBezierCurve3:$u,EllipseCurve:Ia,LineCurve:Bl,LineCurve3:Ju,QuadraticBezierCurve:kl,QuadraticBezierCurve3:Hl,SplineCurve:Vl});class Zu extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new wr[s.type]().fromJSON(s))}return this}}class wc extends Zu{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bl(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new kl(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ol(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new Ia(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class es extends wc{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wc().fromJSON(s))}return this}}function Ku(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Gl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=nf(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let c=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],x=i[d+1];f<a&&(a=f),x<l&&(l=x),f>c&&(c=f),x>u&&(u=x)}h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return As(r,o,e,a,l,h,0),o}function Gl(i,t,e,n,s){let r;if(s===pf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Tc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Tc(o/n|0,i[o],i[o+1],r);return r&&Zi(r,r.next)&&(Cs(r),r=r.next),r}function gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zi(e,e.next)||_e(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function As(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,h=i.next;if(r?Qu(i,n,s,r):ju(i)){t.push(l.i,i.i,h.i),Cs(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=tf(gi(i),t),As(i,t,e,n,s,r,2)):o===2&&ef(i,t,e,n,s,r):As(gi(i),t,e,n,s,r,1);break}}}function ju(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=Math.min(s,r,o),u=Math.min(a,l,h),d=Math.max(s,r,o),f=Math.max(a,l,h);let x=n.next;for(;x!==t;){if(x.x>=c&&x.x<=d&&x.y>=u&&x.y<=f&&ms(s,a,r,l,o,h,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Qu(i,t,e,n){const s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,u=r.y,d=o.y,f=Math.min(a,l,h),x=Math.min(c,u,d),g=Math.max(a,l,h),m=Math.max(c,u,d),p=da(f,x,t,e,n),S=da(g,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=S;){if(M.x>=f&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&ms(a,c,l,u,h,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&ms(a,c,l,u,h,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&ms(a,c,l,u,h,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=g&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&ms(a,c,l,u,h,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function tf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Zi(n,s)&&Xl(n,e,e.next,s)&&Rs(n,s)&&Rs(s,n)&&(t.push(n.i,e.i,s.i),Cs(e),Cs(e.next),e=i=s),e=e.next}while(e!==i);return gi(e)}function ef(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uf(o,a)){let l=ql(o,a);o=gi(o,o.next),l=gi(l,l.next),As(o,t,e,n,s,r,0),As(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=Gl(i,a,l,n,!1);h===h.next&&(h.steiner=!0),s.push(hf(h))}s.sort(sf);for(let r=0;r<s.length;r++)e=rf(s[r],e);return e}function sf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function rf(i,t){const e=of(i,t);if(!e)return t;const n=ql(e,i);return gi(n,n.next),gi(e,e.next)}function of(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Zi(i,e))return e;do{if(Zi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let c=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wl(s<h?n:r,s,l,h,s<h?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Rs(e,i)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&af(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function af(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function cf(i,t,e,n){let s=i;do s.z===0&&(s.z=da(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lf(s)}function lf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function da(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wl(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ms(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Wl(i,t,e,n,s,r,o,a)}function uf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ff(i,t)&&(Rs(i,t)&&Rs(t,i)&&df(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Zi(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zi(i,t){return i.x===t.x&&i.y===t.y}function Xl(i,t,e,n){const s=lr(_e(i,t,e)),r=lr(_e(i,t,n)),o=lr(_e(e,n,i)),a=lr(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&cr(i,e,t)||r===0&&cr(i,n,t)||o===0&&cr(e,i,n)||a===0&&cr(e,t,n))}function cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lr(i){return i>0?1:i<0?-1:0}function ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function df(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ql(i,t){const e=pa(i.i,i.x,i.y),n=pa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Tc(i,t,e,n){const s=pa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class mf{static triangulate(t,e,n=2){return Ku(t,e,n)}}class Ln{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ln.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ac(t),Rc(n,t);let o=t.length;e.forEach(Ac);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Rc(n,e[l]);const a=mf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ac(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Na extends ye{constructor(t=new es([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:gf;let M,_=!1,A,R,C,P;p&&(M=p.getSpacedPoints(c),_=!0,d=!1,A=p.computeFrenetFrames(c,!1),R=new D,C=new D,P=new D),d||(m=0,f=0,x=0,g=0);const b=a.extractPoints(h);let E=b.shape;const L=b.holes;if(!Ln.isClockWise(E)){E=E.reverse();for(let U=0,F=L.length;U<F;U++){const k=L[U];Ln.isClockWise(k)&&(L[U]=k.reverse())}}function $(U){const k=10000000000000001e-36;let X=U[0];for(let at=1;at<=U.length;at++){const Z=at%U.length,ot=U[Z],Dt=ot.x-X.x,dt=ot.y-X.y,w=Dt*Dt+dt*dt,v=Math.max(Math.abs(ot.x),Math.abs(ot.y),Math.abs(X.x),Math.abs(X.y)),N=k*v*v;if(w<=N){U.splice(Z,1),at--;continue}X=ot}}$(E),L.forEach($);const Y=L.length,K=E;for(let U=0;U<Y;U++){const F=L[U];E=E.concat(F)}function q(U,F,k){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(F,k)}const nt=E.length;function W(U,F,k){let X,at,Z;const ot=U.x-F.x,Dt=U.y-F.y,dt=k.x-U.x,w=k.y-U.y,v=ot*ot+Dt*Dt,N=ot*w-Dt*dt;if(Math.abs(N)>Number.EPSILON){const G=Math.sqrt(v),it=Math.sqrt(dt*dt+w*w),tt=F.x-Dt/G,At=F.y+ot/G,ut=k.x-w/it,Rt=k.y+dt/it,Tt=((ut-tt)*w-(Rt-At)*dt)/(ot*w-Dt*dt);X=tt+ot*Tt-U.x,at=At+Dt*Tt-U.y;const ht=X*X+at*at;if(ht<=2)return new ft(X,at);Z=Math.sqrt(ht/2)}else{let G=!1;ot>Number.EPSILON?dt>Number.EPSILON&&(G=!0):ot<-Number.EPSILON?dt<-Number.EPSILON&&(G=!0):Math.sign(Dt)===Math.sign(w)&&(G=!0),G?(X=-Dt,at=ot,Z=Math.sqrt(v)):(X=ot,at=Dt,Z=Math.sqrt(v/2))}return new ft(X/Z,at/Z)}const _t=[];for(let U=0,F=K.length,k=F-1,X=U+1;U<F;U++,k++,X++)k===F&&(k=0),X===F&&(X=0),_t[U]=W(K[U],K[k],K[X]);const pt=[];let Mt,Ot=_t.concat();for(let U=0,F=Y;U<F;U++){const k=L[U];Mt=[];for(let X=0,at=k.length,Z=at-1,ot=X+1;X<at;X++,Z++,ot++)Z===at&&(Z=0),ot===at&&(ot=0),Mt[X]=W(k[X],k[Z],k[ot]);pt.push(Mt),Ot=Ot.concat(Mt)}let qt;if(m===0)qt=Ln.triangulateShape(K,L);else{const U=[],F=[];for(let k=0;k<m;k++){const X=k/m,at=f*Math.cos(X*Math.PI/2),Z=x*Math.sin(X*Math.PI/2)+g;for(let ot=0,Dt=K.length;ot<Dt;ot++){const dt=q(K[ot],_t[ot],Z);I(dt.x,dt.y,-at),X===0&&U.push(dt)}for(let ot=0,Dt=Y;ot<Dt;ot++){const dt=L[ot];Mt=pt[ot];const w=[];for(let v=0,N=dt.length;v<N;v++){const G=q(dt[v],Mt[v],Z);I(G.x,G.y,-at),X===0&&w.push(G)}X===0&&F.push(w)}}qt=Ln.triangulateShape(U,F)}const ne=qt.length,Jt=x+g;for(let U=0;U<nt;U++){const F=d?q(E[U],Ot[U],Jt):E[U];_?(C.copy(A.normals[0]).multiplyScalar(F.x),R.copy(A.binormals[0]).multiplyScalar(F.y),P.copy(M[0]).add(C).add(R),I(P.x,P.y,P.z)):I(F.x,F.y,0)}for(let U=1;U<=c;U++)for(let F=0;F<nt;F++){const k=d?q(E[F],Ot[F],Jt):E[F];_?(C.copy(A.normals[U]).multiplyScalar(k.x),R.copy(A.binormals[U]).multiplyScalar(k.y),P.copy(M[U]).add(C).add(R),I(P.x,P.y,P.z)):I(k.x,k.y,u/c*U)}for(let U=m-1;U>=0;U--){const F=U/m,k=f*Math.cos(F*Math.PI/2),X=x*Math.sin(F*Math.PI/2)+g;for(let at=0,Z=K.length;at<Z;at++){const ot=q(K[at],_t[at],X);I(ot.x,ot.y,u+k)}for(let at=0,Z=L.length;at<Z;at++){const ot=L[at];Mt=pt[at];for(let Dt=0,dt=ot.length;Dt<dt;Dt++){const w=q(ot[Dt],Mt[Dt],X);_?I(w.x,w.y+M[c-1].y,M[c-1].x+k):I(w.x,w.y,u+k)}}}et(),ct();function et(){const U=s.length/3;if(d){let F=0,k=nt*F;for(let X=0;X<ne;X++){const at=qt[X];O(at[2]+k,at[1]+k,at[0]+k)}F=c+m*2,k=nt*F;for(let X=0;X<ne;X++){const at=qt[X];O(at[0]+k,at[1]+k,at[2]+k)}}else{for(let F=0;F<ne;F++){const k=qt[F];O(k[2],k[1],k[0])}for(let F=0;F<ne;F++){const k=qt[F];O(k[0]+nt*c,k[1]+nt*c,k[2]+nt*c)}}n.addGroup(U,s.length/3-U,0)}function ct(){const U=s.length/3;let F=0;J(K,F),F+=K.length;for(let k=0,X=L.length;k<X;k++){const at=L[k];J(at,F),F+=at.length}n.addGroup(U,s.length/3-U,1)}function J(U,F){let k=U.length;for(;--k>=0;){const X=k;let at=k-1;at<0&&(at=U.length-1);for(let Z=0,ot=c+m*2;Z<ot;Z++){const Dt=nt*Z,dt=nt*(Z+1),w=F+X+Dt,v=F+at+Dt,N=F+at+dt,G=F+X+dt;rt(w,v,N,G)}}}function I(U,F,k){l.push(U),l.push(F),l.push(k)}function O(U,F,k){mt(U),mt(F),mt(k);const X=s.length/3,at=S.generateTopUV(n,s,X-3,X-2,X-1);y(at[0]),y(at[1]),y(at[2])}function rt(U,F,k,X){mt(U),mt(F),mt(X),mt(F),mt(k),mt(X);const at=s.length/3,Z=S.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);y(Z[0]),y(Z[1]),y(Z[3]),y(Z[1]),y(Z[2]),y(Z[3])}function mt(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function y(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wr[s.type]().fromJSON(s)),new Na(n,t.options)}}const gf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],c=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(h,c)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],x=t[s*3+2],g=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new ft(o,1-l),new ft(h,1-u),new ft(d,1-x),new ft(g,1-p)]:[new ft(a,1-l),new ft(c,1-u),new ft(f,1-x),new ft(m,1-p)]}};function xf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ps extends La{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ps(t.radius,t.detail)}}class Fa extends ye{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],c=1/e,u=new D,d=new ft,f=new D,x=new D,g=new D;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(x)}for(let S=0;S<=e;S++){const M=n+S*c*s,_=Math.sin(M),A=Math.cos(M);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*_,u.y=t[R].y,u.z=t[R].x*A,o.push(u.x,u.y,u.z),d.x=S/e,d.y=R/(t.length-1),a.push(d.x,d.y);const C=l[3*R+0]*_,P=l[3*R+1],b=l[3*R+0]*A;h.push(C,P,b)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const _=M+S*t.length,A=_,R=_+t.length,C=_+t.length+1,P=_+1;r.push(A,R,P),r.push(C,P,R)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.points,t.segments,t.phiStart,t.phiLength)}}class ns extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=t/a,d=e/l,f=[],x=[],g=[],m=[];for(let p=0;p<c;p++){const S=p*d-o;for(let M=0;M<h;M++){const _=M*u-r;x.push(_,-S,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const M=S+h*p,_=S+h*(p+1),A=S+1+h*(p+1),R=S+1+h*p;f.push(M,_,R),f.push(_,A,R)}this.setIndex(f),this.setAttribute("position",new te(x,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.width,t.height,t.widthSegments,t.heightSegments)}}class Os extends ye{constructor(t=new es([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function h(c){const u=s.length/3,d=c.extractPoints(e);let f=d.shape;const x=d.holes;Ln.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=x.length;m<p;m++){const S=x[m];Ln.isClockWise(S)===!0&&(x[m]=S.reverse())}const g=Ln.triangulateShape(f,x);for(let m=0,p=x.length;m<p;m++){const S=x[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){const S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=g.length;m<p;m++){const S=g[m],M=S[0]+u,_=S[1]+u,A=S[2]+u;n.push(M,_,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return _f(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Os(n,t.curveSegments)}}function _f(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class vn extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new D,d=new D,f=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(R+_,1-M),S.push(h++)}c.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const M=c[p][S+1],_=c[p][S],A=c[p+1][S],R=c[p+1][S+1];(p!==0||o>0)&&f.push(M,_,R),(p!==n-1||l<Math.PI)&&f.push(_,A,R)}this.setIndex(f),this.setAttribute("position",new te(x,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class is extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){const g=x/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(g),c.y=t*Math.sin(g),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(x/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){const g=(s+1)*f+x-1,m=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,S=(s+1)*f+x;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lr extends ye{constructor(t=new Hl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,h=new ft;let c=new D;const u=[],d=[],f=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function g(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),S(),p()}function m(M){c=t.getPointAt(M/e,c);const _=o.normals[M],A=o.binormals[M];for(let R=0;R<=s;R++){const C=R/s*Math.PI*2,P=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+P*A.x,l.y=b*_.y+P*A.y,l.z=b*_.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const A=(s+1)*(M-1)+(_-1),R=(s+1)*M+(_-1),C=(s+1)*M+_,P=(s+1)*(M-1)+_;x.push(A,R,P),x.push(R,C,P)}}function S(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)h.x=M/e,h.y=_/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lr(new wr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ir extends ts{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vf extends ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mf extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yf extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class za extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sf extends za{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fo=new oe,Cc=new D,Pc=new D;class Ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yl extends Ra{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bf extends Ef{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wf extends za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new bf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tf extends za{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Af extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Lc=new ft;class Ic{constructor(t=new ft(1/0,1/0),e=new ft(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Lc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Lc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function Dc(i,t,e,n){const s=Rf(n);switch(e){case El:return i*t;case Sa:return i*t/s.components*s.byteLength;case Ea:return i*t/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case ba:return i*t*2/s.components*s.byteLength;case bl:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case wa:return i*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case Ho:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case ko:return Math.max(i,8)*Math.max(t,8)/2;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ra:case oa:case aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ca:case la:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rf(i){switch(i){case _n:case vl:return{byteLength:1,components:1};case Ss:case Ml:case Ns:return{byteLength:2,components:1};case Ma:case ya:return{byteLength:2,components:4};case pi:case va:case pn:return{byteLength:4,components:1};case yl:case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $l(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cf(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,c);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){const x=u[d],g=u[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){const g=u[f];i.bufferSubData(h,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Sd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ad=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Cd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Op=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Wp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Xp=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,qp=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Yp=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,$p=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jp=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Zp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kp=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,jp=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qp=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,tm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,em=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,nm=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,im=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,sm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,om=`uniform vec3 color;
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
}`,am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,cm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Zt={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:If,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Ff,aomap_pars_fragment:zf,batching_pars_vertex:Of,batching_vertex:Bf,begin_vertex:kf,beginnormal_vertex:Hf,bsdfs:Vf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:$f,color_fragment:Jf,color_pars_fragment:Zf,color_pars_vertex:Kf,color_vertex:jf,common:Qf,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:od,colorspace_pars_fragment:ad,envmap_fragment:cd,envmap_common_pars_fragment:ld,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:Sd,envmap_vertex:fd,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:xd,lightmap_pars_fragment:_d,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Md,lights_pars_begin:yd,lights_toon_fragment:Ed,lights_toon_pars_fragment:bd,lights_phong_fragment:wd,lights_phong_pars_fragment:Td,lights_physical_fragment:Ad,lights_physical_pars_fragment:Rd,lights_fragment_begin:Cd,lights_fragment_maps:Pd,lights_fragment_end:Ld,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:zd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:Vd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:Yd,normal_fragment_maps:$d,normal_pars_fragment:Jd,normal_pars_vertex:Zd,normal_vertex:Kd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:op,dithering_fragment:ap,dithering_pars_fragment:cp,roughnessmap_fragment:lp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:fp,shadowmap_vertex:dp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:xp,skinnormal_vertex:_p,specularmap_fragment:vp,specularmap_pars_fragment:Mp,tonemapping_fragment:yp,tonemapping_pars_fragment:Sp,transmission_fragment:Ep,transmission_pars_fragment:bp,uv_pars_fragment:wp,uv_pars_vertex:Tp,uv_vertex:Ap,worldpos_vertex:Rp,background_vert:Cp,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Ip,cube_vert:Dp,cube_frag:Up,depth_vert:Np,depth_frag:Fp,distanceRGBA_vert:zp,distanceRGBA_frag:Op,equirect_vert:Bp,equirect_frag:kp,linedashed_vert:Hp,linedashed_frag:Vp,meshbasic_vert:Gp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:$p,meshnormal_vert:Jp,meshnormal_frag:Zp,meshphong_vert:Kp,meshphong_frag:jp,meshphysical_vert:Qp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:om,sprite_vert:am,sprite_frag:cm},St={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},dn={basic:{uniforms:Be([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Be([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Be([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Be([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Be([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Be([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Be([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Be([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Be([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Be([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Be([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Be([St.common,St.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Be([St.lights,St.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};dn.physical={uniforms:Be([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const hr={r:0,b:0,g:0},ri=new un,lm=new oe;function hm(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,h,c,u=null,d=0,f=null;function x(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1;const A=x(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const A=x(_);A&&(A.isCubeTexture||A.mapping===Rr)?(c===void 0&&(c=new Ke(new _i(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ji(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ri.copy(_.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(ri)),c.material.toneMapped=re.getTransfer(A.colorSpace)!==he,(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Ke(new ns(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ji(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=re.getTransfer(A.colorSpace)!==he,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,_){M.getRGB(hr,Dl(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,_,o)}function S(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m,dispose:S}}function um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,L,B,$,Y){let K=!1;const q=u($,B,L);r!==q&&(r=q,h(r.object)),K=f(E,$,B,Y),K&&x(E,$,B,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(E,L,B,$),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function h(E){return i.bindVertexArray(E)}function c(E){return i.deleteVertexArray(E)}function u(E,L,B){const $=B.wireframe===!0;let Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let K=Y[L.id];K===void 0&&(K={},Y[L.id]=K);let q=K[$];return q===void 0&&(q=d(l()),K[$]=q),q}function d(E){const L=[],B=[],$=[];for(let Y=0;Y<e;Y++)L[Y]=0,B[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:$,object:E,attributes:{},index:null}}function f(E,L,B,$){const Y=r.attributes,K=L.attributes;let q=0;const nt=B.getAttributes();for(const W in nt)if(nt[W].location>=0){const pt=Y[W];let Mt=K[W];if(Mt===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(Mt=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(Mt=E.instanceColor)),pt===void 0||pt.attribute!==Mt||Mt&&pt.data!==Mt.data)return!0;q++}return r.attributesNum!==q||r.index!==$}function x(E,L,B,$){const Y={},K=L.attributes;let q=0;const nt=B.getAttributes();for(const W in nt)if(nt[W].location>=0){let pt=K[W];pt===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor));const Mt={};Mt.attribute=pt,pt&&pt.data&&(Mt.data=pt.data),Y[W]=Mt,q++}r.attributes=Y,r.attributesNum=q,r.index=$}function g(){const E=r.newAttributes;for(let L=0,B=E.length;L<B;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){const B=r.newAttributes,$=r.enabledAttributes,Y=r.attributeDivisors;B[E]=1,$[E]===0&&(i.enableVertexAttribArray(E),$[E]=1),Y[E]!==L&&(i.vertexAttribDivisor(E,L),Y[E]=L)}function S(){const E=r.newAttributes,L=r.enabledAttributes;for(let B=0,$=L.length;B<$;B++)L[B]!==E[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function M(E,L,B,$,Y,K,q){q===!0?i.vertexAttribIPointer(E,L,B,Y,K):i.vertexAttribPointer(E,L,B,$,Y,K)}function _(E,L,B,$){g();const Y=$.attributes,K=B.getAttributes(),q=L.defaultAttributeValues;for(const nt in K){const W=K[nt];if(W.location>=0){let _t=Y[nt];if(_t===void 0&&(nt==="instanceMatrix"&&E.instanceMatrix&&(_t=E.instanceMatrix),nt==="instanceColor"&&E.instanceColor&&(_t=E.instanceColor)),_t!==void 0){const pt=_t.normalized,Mt=_t.itemSize,Ot=t.get(_t);if(Ot===void 0)continue;const qt=Ot.buffer,ne=Ot.type,Jt=Ot.bytesPerElement,et=ne===i.INT||ne===i.UNSIGNED_INT||_t.gpuType===va;if(_t.isInterleavedBufferAttribute){const ct=_t.data,J=ct.stride,I=_t.offset;if(ct.isInstancedInterleavedBuffer){for(let O=0;O<W.locationSize;O++)p(W.location+O,ct.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let O=0;O<W.locationSize;O++)m(W.location+O);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let O=0;O<W.locationSize;O++)M(W.location+O,Mt/W.locationSize,ne,pt,J*Jt,(I+Mt/W.locationSize*O)*Jt,et)}else{if(_t.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)p(W.location+ct,_t.meshPerAttribute);E.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ct=0;ct<W.locationSize;ct++)m(W.location+ct);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ct=0;ct<W.locationSize;ct++)M(W.location+ct,Mt/W.locationSize,ne,pt,Mt*Jt,Mt/W.locationSize*ct*Jt,et)}}else if(q!==void 0){const pt=q[nt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}S()}function A(){P();for(const E in n){const L=n[E];for(const B in L){const $=L[B];for(const Y in $)c($[Y].object),delete $[Y];delete L[B]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const L=n[E.id];for(const B in L){const $=L[B];for(const Y in $)c($[Y].object),delete $[Y];delete L[B]}delete n[E.id]}function C(E){for(const L in n){const B=n[L];if(B[E.id]===void 0)continue;const $=B[E.id];for(const Y in $)c($[Y].object),delete $[Y];delete B[E.id]}}function P(){b(),o=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function fm(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let x=0;x<u;x++)f+=c[x];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<h.length;x++)o(h[x],c[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=c[g]*d[g];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ze&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:R}}function pm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new li,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?c(null):h();else{const S=r?0:n,M=S*4;let _=p.clippingState||null;l.value=_,_=c(x,d,M,f);for(let A=0;A!==M;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const p=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==g;++M,_+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function mm(i){let t=new WeakMap;function e(o,a){return a===No?o.mapping=qi:a===Fo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===No||a===Fo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Iu(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const zi=4,Uc=[.125,.215,.35,.446,.526,.582],fi=20,po=new Yl,Nc=new Gt;let mo=null,go=0,xo=0,_o=!1;const hi=(1+Math.sqrt(5))/2,Ni=1/hi,Fc=[new D(-hi,Ni,0),new D(hi,Ni,0),new D(-Ni,0,hi),new D(Ni,0,hi),new D(0,hi,-Ni),new D(0,hi,Ni),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],gm=new D;class zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=gm}=r;mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,xo),this._renderer.xr.enabled=_o,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Ns,format:Ze,colorSpace:$i,depthBuffer:!1},s=Oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(r)),this._blurMaterial=_m(r,t,e)}return s}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,n,s,r){const l=new sn(90,1,e,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nc),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const g=new Cr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Ke(new _i,g);let p=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(Nc),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[M],r.y,r.z)):_===1?(l.up.set(0,0,h[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[M],r.z)):(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[M]));const A=this._cubeSize;ur(s,_*A,M>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(s-r-1)%Fc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ke(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),g=r/x,m=isFinite(r)?1+Math.floor(c*g):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let S=0;for(let C=0;C<fi;++C){const P=C/g,b=Math.exp(-P*P/2);p.push(b),C===0?S+=b:C<m&&(S+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-n;const _=this._sizeLods[s],A=3*_*(s>M-zi?s-M+zi:0),R=4*(this._cubeSize-_);ur(e,A,R,3*_,2*_),l.setRenderTarget(e),l.render(u,po)}}function xm(i){const t=[],e=[],n=[];let s=i;const r=i-zi+1+Uc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zi?l=Uc[o-i+zi-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,x=6,g=3,m=2,p=1,S=new Float32Array(g*x*f),M=new Float32Array(m*x*f),_=new Float32Array(p*x*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,P=R>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(b,g*x*R),M.set(d,m*x*R);const E=[R,R,R,R,R,R];_.set(E,p*x*R)}const A=new ye;A.setAttribute("position",new Ue(S,g)),A.setAttribute("uv",new Ue(M,m)),A.setAttribute("faceIndex",new Ue(_,p)),t.push(A),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oc(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _m(i,t,e){const n=new Float32Array(fi),s=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Bc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function kc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===No||l===Fo,c=l===qi||l===Yi;if(h||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new zc(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new zc(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Mm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,x=u.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let M=0,_=S.length;M<_;M+=3){const A=S[M+0],R=S[M+1],C=S[M+2];d.push(A,R,R,C,C,A)}}else if(x!==void 0){const S=x.array;g=x.version;for(let M=0,_=S.length/3-1;M<_;M+=3){const A=M+0,R=M+1,C=M+2;d.push(A,R,R,C,C,A)}}else return;const m=new(Al(d)?Il:Ll)(d,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function Sm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*o,x),e.update(f,n,x))}function c(d,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];e.update(m,n,1)}function u(d,f,x,g){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,x);let p=0;for(let S=0;S<x;S++)p+=f[S]*g[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Em(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let _=a.attributes.position.count*M,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*A*4*u),C=new Rl(R,_,A,u);C.type=pn,C.needsUpdate=!0;const P=M*4;for(let E=0;E<u;E++){const L=m[E],B=p[E],$=S[E],Y=_*A*4*E;for(let K=0;K<L.count;K++){const q=K*P;f===!0&&(s.fromBufferAttribute(L,K),R[Y+q+0]=s.x,R[Y+q+1]=s.y,R[Y+q+2]=s.z,R[Y+q+3]=0),x===!0&&(s.fromBufferAttribute(B,K),R[Y+q+4]=s.x,R[Y+q+5]=s.y,R[Y+q+6]=s.z,R[Y+q+7]=0),g===!0&&(s.fromBufferAttribute($,K),R[Y+q+8]=s.x,R[Y+q+9]=s.y,R[Y+q+10]=s.z,R[Y+q+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ft(_,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<h.length;g++)f+=h[g];const x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function wm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const Jl=new ze,Hc=new Fl(1,1),Zl=new Rl,Kl=new pu,jl=new Ul,Vc=[],Gc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;qc.set(n),i.uniformMatrix2fv(this.addr,!1,qc),Ce(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),Ce(e,n)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),Ce(e,n)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hc.compareFunction=Tl,r=Hc):r=Jl,e.setTexture2D(t||r,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kl,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jl,s)}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zl,s)}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Lm;case 35676:return Im;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return zm;case 36294:return Om;case 36295:return Bm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}function qm(i,t){i.uniform1fv(this.addr,t)}function Ym(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function $m(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Zm(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Km(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jm(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function t0(i,t){i.uniform2iv(this.addr,t)}function e0(i,t){i.uniform3iv(this.addr,t)}function n0(i,t){i.uniform4iv(this.addr,t)}function i0(i,t){i.uniform1uiv(this.addr,t)}function s0(i,t){i.uniform2uiv(this.addr,t)}function r0(i,t){i.uniform3uiv(this.addr,t)}function o0(i,t){i.uniform4uiv(this.addr,t)}function a0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jl,r[o])}function c0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kl,r[o])}function l0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jl,r[o])}function h0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zl,r[o])}function u0(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return $m;case 35666:return Jm;case 35674:return Zm;case 35675:return Km;case 35676:return jm;case 5124:case 35670:return Qm;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return h0}}class f0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xm(e.type)}}class d0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u0(e.type)}}class p0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Yc(i,t){i.seq.push(t),i.map[t.id]=t}function m0(i,t,e){const n=i.name,s=n.length;for(vo.lastIndex=0;;){const r=vo.exec(n),o=vo.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Yc(e,h===void 0?new f0(a,i,t):new d0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new p0(a),Yc(e,u)),e=u}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);m0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function $c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const g0=37297;let x0=0;function _0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Jc=new Xt;function v0(i){re._getMatrix(Jc,re.workingColorSpace,i);const t=`mat3( ${Jc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_0(i.getShaderSource(t),a)}else return r}function M0(i,t){const e=v0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function y0(i,t){let e;switch(t){case Gh:e="Linear";break;case Wh:e="Reinhard";break;case Xh:e="Cineon";break;case xl:e="ACESFilmic";break;case Yh:e="AgX";break;case $h:e="Neutral";break;case qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fr=new D;function S0(){re.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function b0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function w0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function Kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(T0,R0)}const A0=new Map;function R0(i,t){let e=Zt[t];if(e===void 0){const n=A0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(C0,P0)}function P0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function I0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function U0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ar:t="ENVMAP_BLENDING_MULTIPLY";break;case Hh:t="ENVMAP_BLENDING_MIX";break;case Vh:t="ENVMAP_BLENDING_ADD";break}return t}function N0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function F0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=L0(e),h=I0(e),c=D0(e),u=U0(e),d=N0(e),f=E0(e),x=b0(r),g=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Zt.tonemapping_pars_fragment:"",e.toneMapping!==$n?y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,M0("linearToOutputTexel",e.outputColorSpace),S0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=ma(o),o=Kc(o,e),o=jc(o,e),a=ma(a),a=Kc(a,e),a=jc(a,e),o=Qc(o),a=Qc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,_=S+p+a,A=$c(s,s.VERTEX_SHADER,M),R=$c(s,s.FRAGMENT_SHADER,_);s.attachShader(g,A),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(g)||"",$=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(R)||"",K=B.trim(),q=$.trim(),nt=Y.trim();let W=!0,_t=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,R);else{const pt=Zc(s,A,"vertex"),Mt=Zc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+pt+`
`+Mt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||nt==="")&&(_t=!1);_t&&(L.diagnostics={runnable:W,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(A),s.deleteShader(R),P=new _r(s,g),b=w0(s,g)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(g,g0)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let z0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new B0(t),e.set(t,n)),n}}class B0{constructor(t){this.id=z0++,this.code=t,this.usedTimes=0}}function k0(i,t,e,n,s,r,o){const a=new Cl,l=new O0,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,E,L,B,$){const Y=B.fog,K=$.geometry,q=b.isMeshStandardMaterial?B.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),W=nt&&nt.mapping===Rr?nt.image.height:null,_t=x[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=pt!==void 0?pt.length:0;let Ot=0;K.morphAttributes.position!==void 0&&(Ot=1),K.morphAttributes.normal!==void 0&&(Ot=2),K.morphAttributes.color!==void 0&&(Ot=3);let qt,ne,Jt,et;if(_t){const ae=dn[_t];qt=ae.vertexShader,ne=ae.fragmentShader}else qt=b.vertexShader,ne=b.fragmentShader,l.update(b),Jt=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);const ct=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),I=$.isInstancedMesh===!0,O=$.isBatchedMesh===!0,rt=!!b.map,mt=!!b.matcap,y=!!nt,U=!!b.aoMap,F=!!b.lightMap,k=!!b.bumpMap,X=!!b.normalMap,at=!!b.displacementMap,Z=!!b.emissiveMap,ot=!!b.metalnessMap,Dt=!!b.roughnessMap,dt=b.anisotropy>0,w=b.clearcoat>0,v=b.dispersion>0,N=b.iridescence>0,G=b.sheen>0,it=b.transmission>0,tt=dt&&!!b.anisotropyMap,At=w&&!!b.clearcoatMap,ut=w&&!!b.clearcoatNormalMap,Rt=w&&!!b.clearcoatRoughnessMap,Tt=N&&!!b.iridescenceMap,ht=N&&!!b.iridescenceThicknessMap,wt=G&&!!b.sheenColorMap,Ht=G&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,Et=!!b.specularColorMap,Yt=!!b.specularIntensityMap,z=it&&!!b.transmissionMap,vt=it&&!!b.thicknessMap,yt=!!b.gradientMap,Pt=!!b.alphaMap,gt=b.alphaTest>0,lt=!!b.alphaHash,Ut=!!b.extensions;let Wt=$n;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const fe={shaderID:_t,shaderType:b.type,shaderName:b.name,vertexShader:qt,fragmentShader:ne,defines:b.defines,customVertexShaderID:Jt,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:O,batchingColor:O&&$._colorsTexture!==null,instancing:I,instancingColor:I&&$.instanceColor!==null,instancingMorph:I&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:$i,alphaToCoverage:!!b.alphaToCoverage,map:rt,matcap:mt,envMap:y,envMapMode:y&&nt.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:F,bumpMap:k,normalMap:X,displacementMap:d&&at,emissiveMap:Z,normalMapObjectSpace:X&&b.normalMapType===jh,normalMapTangentSpace:X&&b.normalMapType===Ta,metalnessMap:ot,roughnessMap:Dt,anisotropy:dt,anisotropyMap:tt,clearcoat:w,clearcoatMap:At,clearcoatNormalMap:ut,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:N,iridescenceMap:Tt,iridescenceThicknessMap:ht,sheen:G,sheenColorMap:wt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Et,specularIntensityMap:Yt,transmission:it,transmissionMap:z,thicknessMap:vt,gradientMap:yt,opaque:b.transparent===!1&&b.blending===Hi&&b.alphaToCoverage===!1,alphaMap:Pt,alphaTest:gt,alphaHash:lt,combine:b.combine,mapUv:rt&&g(b.map.channel),aoMapUv:U&&g(b.aoMap.channel),lightMapUv:F&&g(b.lightMap.channel),bumpMapUv:k&&g(b.bumpMap.channel),normalMapUv:X&&g(b.normalMap.channel),displacementMapUv:at&&g(b.displacementMap.channel),emissiveMapUv:Z&&g(b.emissiveMap.channel),metalnessMapUv:ot&&g(b.metalnessMap.channel),roughnessMapUv:Dt&&g(b.roughnessMap.channel),anisotropyMapUv:tt&&g(b.anisotropyMap.channel),clearcoatMapUv:At&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&g(b.sheenRoughnessMap.channel),specularMapUv:Ft&&g(b.specularMap.channel),specularColorMapUv:Et&&g(b.specularColorMap.channel),specularIntensityMapUv:Yt&&g(b.specularIntensityMap.channel),transmissionMapUv:z&&g(b.transmissionMap.channel),thicknessMapUv:vt&&g(b.thicknessMap.channel),alphaMapUv:Pt&&g(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(X||dt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!K.attributes.uv&&(rt||Pt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:$.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:rt&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:Z&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ke,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return fe.vertexUv1s=h.has(1),fe.vertexUv2s=h.has(2),fe.vertexUv3s=h.has(3),h.clear(),fe}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)E.push(L),E.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(E,b),M(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function S(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function M(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const E=x[b.type];let L;if(E){const B=dn[E];L=Ru.clone(B.uniforms)}else L=b.uniforms;return L}function A(b,E){let L;for(let B=0,$=c.length;B<$;B++){const Y=c[B];if(Y.cacheKey===E){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new F0(i,E,b,r),c.push(L)),L}function R(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:P}}function H0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function el(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,x,g,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,x,g,m){const p=o(u,d,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,x,g,m){const p=o(u,d,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||V0),n.length>1&&n.sort(d||el),s.length>1&&s.sort(d||el)}function c(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function G0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new nl,i.set(n,[o])):s>=r.length?(o=new nl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function W0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Gt};break;case"SpotLight":e={position:new D,direction:new D,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function X0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let q0=0;function Y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $0(i){const t=new W0,e=X0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const s=new D,r=new oe,o=new oe;function a(h){let c=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,S=0,M=0,_=0,A=0,R=0,C=0;h.sort(Y0);for(let b=0,E=h.length;b<E;b++){const L=h[b],B=L.color,$=L.intensity,Y=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=B.r*$,u+=B.g*$,d+=B.b*$;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],$);C++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,W=e.get(L);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar($),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[g]=q;const nt=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,nt.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[g]=nt.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=K,_++}g++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(B).multiplyScalar($),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const nt=L.shadow,W=e.get(L);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=L.shadow.matrix,M++}n.point[x]=q,x++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar($),q.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,P.directionalLength=f,P.pointLength=x,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=C,n.version=q0++)}function l(h,c){let u=0,d=0,f=0,x=0,g=0;const m=c.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){const M=h[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[x];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function il(i){const t=new $0(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new il(i),t.set(s,[a])):r>=o.length?(a=new il(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`;function j0(i,t,e){let n=new Pr;const s=new ft,r=new ft,o=new me,a=new Mf({depthPacking:Kh}),l=new yf,h={},c=e.maxTextureSize,u={[Zn]:Ge,[Ge]:Zn,[ke]:ke},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Z0,fragmentShader:K0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new ye;x.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let p=this.type;this.render=function(R,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Yn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=p!==Cn&&this.type===Cn,Y=p===Cn&&this.type!==Cn;for(let K=0,q=R.length;K<q;K++){const nt=R[K],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const _t=W.getFrameExtents();if(s.multiply(_t),r.copy(W.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/_t.x),s.x=r.x*_t.x,W.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/_t.y),s.y=r.y*_t.y,W.mapSize.y=r.y)),W.map===null||$===!0||Y===!0){const Mt=this.type!==Cn?{minFilter:je,magFilter:je}:{};W.map!==null&&W.map.dispose(),W.map=new mi(s.x,s.y,Mt),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pt=W.getViewportCount();for(let Mt=0;Mt<pt;Mt++){const Ot=W.getViewport(Mt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),B.viewport(o),W.updateMatrices(nt,Mt),n=W.getFrustum(),_(C,P,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&S(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,L)};function S(R,C){const P=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,g,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,P,f,g,null)}function M(R,C,P,b){let E=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)E=L;else if(E=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=E.uuid,$=C.uuid;let Y=h[B];Y===void 0&&(Y={},h[B]=Y);let K=Y[$];K===void 0&&(K=E.clone(),Y[$]=K,C.addEventListener("dispose",A)),E=K}if(E.visible=C.visible,E.wireframe=C.wireframe,b===Cn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=i.properties.get(E);B.light=P}return E}function _(R,C,P,b,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const $=t.update(R),Y=R.material;if(Array.isArray(Y)){const K=$.groups;for(let q=0,nt=K.length;q<nt;q++){const W=K[q],_t=Y[W.materialIndex];if(_t&&_t.visible){const pt=M(R,_t,b,E);R.onBeforeShadow(i,R,C,P,$,pt,W),i.renderBufferDirect(P,null,$,pt,R,W),R.onAfterShadow(i,R,C,P,$,pt,W)}}}else if(Y.visible){const K=M(R,Y,b,E);R.onBeforeShadow(i,R,C,P,$,K,null),i.renderBufferDirect(P,null,$,K,R,null),R.onAfterShadow(i,R,C,P,$,K,null)}}const B=R.children;for(let $=0,Y=B.length;$<Y;$++)_(B[$],C,P,b,E)}function A(R){R.target.removeEventListener("dispose",A);for(const P in h){const b=h[P],E=R.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const Q0={[Ro]:Co,[Po]:Do,[Lo]:Uo,[Xi]:Io,[Co]:Ro,[Do]:Po,[Uo]:Lo,[Io]:Xi};function tg(i,t){function e(){let z=!1;const vt=new me;let yt=null;const Pt=new me(0,0,0,0);return{setMask:function(gt){yt!==gt&&!z&&(i.colorMask(gt,gt,gt,gt),yt=gt)},setLocked:function(gt){z=gt},setClear:function(gt,lt,Ut,Wt,fe){fe===!0&&(gt*=Wt,lt*=Wt,Ut*=Wt),vt.set(gt,lt,Ut,Wt),Pt.equals(vt)===!1&&(i.clearColor(gt,lt,Ut,Wt),Pt.copy(vt))},reset:function(){z=!1,yt=null,Pt.set(-1,0,0,0)}}}function n(){let z=!1,vt=!1,yt=null,Pt=null,gt=null;return{setReversed:function(lt){if(vt!==lt){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;const Wt=gt;gt=null,this.setClear(Wt)}},getReversed:function(){return vt},setTest:function(lt){lt?ct(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(lt){yt!==lt&&!z&&(i.depthMask(lt),yt=lt)},setFunc:function(lt){if(vt&&(lt=Q0[lt]),Pt!==lt){switch(lt){case Ro:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Lo:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=lt}},setLocked:function(lt){z=lt},setClear:function(lt){gt!==lt&&(vt&&(lt=1-lt),i.clearDepth(lt),gt=lt)},reset:function(){z=!1,yt=null,Pt=null,gt=null,vt=!1}}}function s(){let z=!1,vt=null,yt=null,Pt=null,gt=null,lt=null,Ut=null,Wt=null,fe=null;return{setTest:function(ae){z||(ae?ct(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(ae){vt!==ae&&!z&&(i.stencilMask(ae),vt=ae)},setFunc:function(ae,yn,fn){(yt!==ae||Pt!==yn||gt!==fn)&&(i.stencilFunc(ae,yn,fn),yt=ae,Pt=yn,gt=fn)},setOp:function(ae,yn,fn){(lt!==ae||Ut!==yn||Wt!==fn)&&(i.stencilOp(ae,yn,fn),lt=ae,Ut=yn,Wt=fn)},setLocked:function(ae){z=ae},setClear:function(ae){fe!==ae&&(i.clearStencil(ae),fe=ae)},reset:function(){z=!1,vt=null,yt=null,Pt=null,gt=null,lt=null,Ut=null,Wt=null,fe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,M=null,_=null,A=null,R=null,C=new Gt(0,0,0),P=0,b=!1,E=null,L=null,B=null,$=null,Y=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,nt=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=nt>=2);let _t=null,pt={};const Mt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),qt=new me().fromArray(Mt),ne=new me().fromArray(Ot);function Jt(z,vt,yt,Pt){const gt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(z,lt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<yt;Ut++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(vt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return lt}const et={};et[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Xi),k(!1),X(Ja),ct(i.CULL_FACE),U(Yn);function ct(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function J(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function I(z,vt){return u[z]!==vt?(i.bindFramebuffer(z,vt),u[z]=vt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function O(z,vt){let yt=f,Pt=!1;if(z){yt=d.get(vt),yt===void 0&&(yt=[],d.set(vt,yt));const gt=z.textures;if(yt.length!==gt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ut=gt.length;lt<Ut;lt++)yt[lt]=i.COLOR_ATTACHMENT0+lt;yt.length=gt.length,Pt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(yt)}function rt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}const mt={[ui]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};mt[Th]=i.MIN,mt[Ah]=i.MAX;const y={[Rh]:i.ZERO,[Ch]:i.ONE,[Ph]:i.SRC_COLOR,[To]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Uh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[Nh]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[Bh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(z,vt,yt,Pt,gt,lt,Ut,Wt,fe,ae){if(z===Yn){g===!0&&(J(i.BLEND),g=!1);return}if(g===!1&&(ct(i.BLEND),g=!0),z!==Eh){if(z!==m||ae!==b){if((p!==ui||_!==ui)&&(i.blendEquation(i.FUNC_ADD),p=ui,_=ui),ae)switch(z){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ka:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ja:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,M=null,A=null,R=null,C.set(0,0,0),P=0,m=z,b=ae}return}gt=gt||vt,lt=lt||yt,Ut=Ut||Pt,(vt!==p||gt!==_)&&(i.blendEquationSeparate(mt[vt],mt[gt]),p=vt,_=gt),(yt!==S||Pt!==M||lt!==A||Ut!==R)&&(i.blendFuncSeparate(y[yt],y[Pt],y[lt],y[Ut]),S=yt,M=Pt,A=lt,R=Ut),(Wt.equals(C)===!1||fe!==P)&&(i.blendColor(Wt.r,Wt.g,Wt.b,fe),C.copy(Wt),P=fe),m=z,b=!1}function F(z,vt){z.side===ke?J(i.CULL_FACE):ct(i.CULL_FACE);let yt=z.side===Ge;vt&&(yt=!yt),k(yt),z.blending===Hi&&z.transparent===!1?U(Yn):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Pt=z.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Z(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function k(z){E!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),E=z)}function X(z){z!==yh?(ct(i.CULL_FACE),z!==L&&(z===Ja?i.cullFace(i.BACK):z===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),L=z}function at(z){z!==B&&(q&&i.lineWidth(z),B=z)}function Z(z,vt,yt){z?(ct(i.POLYGON_OFFSET_FILL),($!==vt||Y!==yt)&&(i.polygonOffset(vt,yt),$=vt,Y=yt)):J(i.POLYGON_OFFSET_FILL)}function ot(z){z?ct(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function Dt(z){z===void 0&&(z=i.TEXTURE0+K-1),_t!==z&&(i.activeTexture(z),_t=z)}function dt(z,vt,yt){yt===void 0&&(_t===null?yt=i.TEXTURE0+K-1:yt=_t);let Pt=pt[yt];Pt===void 0&&(Pt={type:void 0,texture:void 0},pt[yt]=Pt),(Pt.type!==z||Pt.texture!==vt)&&(_t!==yt&&(i.activeTexture(yt),_t=yt),i.bindTexture(z,vt||et[z]),Pt.type=z,Pt.texture=vt)}function w(){const z=pt[_t];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(z){qt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),qt.copy(z))}function Ht(z){ne.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ne.copy(z))}function Ft(z,vt){let yt=h.get(vt);yt===void 0&&(yt=new WeakMap,h.set(vt,yt));let Pt=yt.get(z);Pt===void 0&&(Pt=i.getUniformBlockIndex(vt,z.name),yt.set(z,Pt))}function Et(z,vt){const Pt=h.get(vt).get(z);l.get(vt)!==Pt&&(i.uniformBlockBinding(vt,Pt,z.__bindingPointIndex),l.set(vt,Pt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},_t=null,pt={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,M=null,_=null,A=null,R=null,C=new Gt(0,0,0),P=0,b=!1,E=null,L=null,B=null,$=null,Y=null,qt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:J,bindFramebuffer:I,drawBuffers:O,useProgram:rt,setBlending:U,setMaterial:F,setFlipSided:k,setCullFace:X,setLineWidth:at,setPolygonOffset:Z,setScissorTest:ot,activeTexture:Dt,bindTexture:dt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Tt,texImage3D:ht,updateUBOMapping:Ft,uniformBlockBinding:Et,texStorage2D:ut,texStorage3D:Rt,texSubImage2D:G,texSubImage3D:it,compressedTexSubImage2D:tt,compressedTexSubImage3D:At,scissor:wt,viewport:Ht,reset:Yt}}function eg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,v){return f?new OffscreenCanvas(w,v):br("canvas")}function g(w,v,N){let G=1;const it=dt(w);if((it.width>N||it.height>N)&&(G=N/Math.max(it.width,it.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(G*it.width),At=Math.floor(G*it.height);u===void 0&&(u=x(tt,At));const ut=v?x(tt,At):u;return ut.width=tt,ut.height=At,ut.getContext("2d").drawImage(w,0,0,tt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+At+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,v,N,G,it=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=v;if(v===i.RED&&(N===i.FLOAT&&(tt=i.R32F),N===i.HALF_FLOAT&&(tt=i.R16F),N===i.UNSIGNED_BYTE&&(tt=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(tt=i.R8UI),N===i.UNSIGNED_SHORT&&(tt=i.R16UI),N===i.UNSIGNED_INT&&(tt=i.R32UI),N===i.BYTE&&(tt=i.R8I),N===i.SHORT&&(tt=i.R16I),N===i.INT&&(tt=i.R32I)),v===i.RG&&(N===i.FLOAT&&(tt=i.RG32F),N===i.HALF_FLOAT&&(tt=i.RG16F),N===i.UNSIGNED_BYTE&&(tt=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(tt=i.RG8UI),N===i.UNSIGNED_SHORT&&(tt=i.RG16UI),N===i.UNSIGNED_INT&&(tt=i.RG32UI),N===i.BYTE&&(tt=i.RG8I),N===i.SHORT&&(tt=i.RG16I),N===i.INT&&(tt=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),N===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),N===i.UNSIGNED_INT&&(tt=i.RGB32UI),N===i.BYTE&&(tt=i.RGB8I),N===i.SHORT&&(tt=i.RGB16I),N===i.INT&&(tt=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),N===i.UNSIGNED_INT&&(tt=i.RGBA32UI),N===i.BYTE&&(tt=i.RGBA8I),N===i.SHORT&&(tt=i.RGBA16I),N===i.INT&&(tt=i.RGBA32I)),v===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),v===i.RGBA){const At=it?Sr:re.getTransfer(G);N===i.FLOAT&&(tt=i.RGBA32F),N===i.HALF_FLOAT&&(tt=i.RGBA16F),N===i.UNSIGNED_BYTE&&(tt=At===he?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(w,v){let N;return w?v===null||v===pi||v===Es?N=i.DEPTH24_STENCIL8:v===pn?N=i.DEPTH32F_STENCIL8:v===Ss&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pi||v===Es?N=i.DEPTH_COMPONENT24:v===pn?N=i.DEPTH_COMPONENT32F:v===Ss&&(N=i.DEPTH_COMPONENT16),N}function A(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==je&&w.minFilter!==Je?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function R(w){const v=w.target;v.removeEventListener("dispose",R),P(v),v.isVideoTexture&&c.delete(v)}function C(w){const v=w.target;v.removeEventListener("dispose",C),E(v)}function P(w){const v=n.get(w);if(v.__webglInit===void 0)return;const N=w.source,G=d.get(N);if(G){const it=G[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(w),Object.keys(G).length===0&&d.delete(N)}n.remove(w)}function b(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const N=w.source,G=d.get(N);delete G[v.__cacheKey],o.memory.textures--}function E(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let it=0;it<v.__webglFramebuffer[G].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[G][it]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=w.textures;for(let G=0,it=N.length;G<it;G++){const tt=n.get(N[G]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(N[G])}n.remove(w)}let L=0;function B(){L=0}function $(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function Y(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function K(w,v){const N=n.get(w);if(w.isVideoTexture&&ot(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(N,w,v);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function q(w,v){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){et(N,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function nt(w,v){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){et(N,w,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function W(w,v){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ct(N,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const _t={[ys]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[zo]:i.MIRRORED_REPEAT},pt={[je]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Qh]:i.NEVER,[ru]:i.ALWAYS,[tu]:i.LESS,[Tl]:i.LEQUAL,[eu]:i.EQUAL,[su]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function Ot(w,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Je||v.magFilter===Or||v.magFilter===Hs||v.magFilter===qn||v.minFilter===Je||v.minFilter===Or||v.minFilter===Hs||v.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_t[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_t[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_t[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,pt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Hs&&v.minFilter!==qn||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qt(w,v){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",R));const G=v.source;let it=d.get(G);it===void 0&&(it={},d.set(G,it));const tt=Y(v);if(tt!==w.__cacheKey){it[tt]===void 0&&(it[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),it[tt].usedTimes++;const At=it[w.__cacheKey];At!==void 0&&(it[w.__cacheKey].usedTimes--,At.usedTimes===0&&b(v)),w.__cacheKey=tt,w.__webglTexture=it[tt].texture}return N}function ne(w,v,N){return Math.floor(Math.floor(w/N)/v)}function Jt(w,v,N,G){const tt=w.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,N,G,v.data);else{tt.sort((ht,wt)=>ht.start-wt.start);let At=0;for(let ht=1;ht<tt.length;ht++){const wt=tt[At],Ht=tt[ht],Ft=wt.start+wt.count,Et=ne(Ht.start,v.width,4),Yt=ne(wt.start,v.width,4);Ht.start<=Ft+1&&Et===Yt&&ne(Ht.start+Ht.count-1,v.width,4)===Et?wt.count=Math.max(wt.count,Ht.start+Ht.count-wt.start):(++At,tt[At]=Ht)}tt.length=At+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ht=0,wt=tt.length;ht<wt;ht++){const Ht=tt[ht],Ft=Math.floor(Ht.start/4),Et=Math.ceil(Ht.count/4),Yt=Ft%v.width,z=Math.floor(Ft/v.width),vt=Et,yt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Yt,z,vt,yt,N,G,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function et(w,v,N){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);const it=qt(w,v),tt=v.source;e.bindTexture(G,w.__webglTexture,i.TEXTURE0+N);const At=n.get(tt);if(tt.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+N);const ut=re.getPrimaries(re.workingColorSpace),Rt=v.colorSpace===Pn?null:re.getPrimaries(v.colorSpace),Tt=v.colorSpace===Pn||ut===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ht=g(v.image,!1,s.maxTextureSize);ht=Dt(v,ht);const wt=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type);let Ft=M(v.internalFormat,wt,Ht,v.colorSpace,v.isVideoTexture);Ot(G,v);let Et;const Yt=v.mipmaps,z=v.isVideoTexture!==!0,vt=At.__version===void 0||it===!0,yt=tt.dataReady,Pt=A(v,ht);if(v.isDepthTexture)Ft=_(v.format===ws,v.type),vt&&(z?e.texStorage2D(i.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,wt,Ht,null));else if(v.isDataTexture)if(Yt.length>0){z&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ft,Yt[0].width,Yt[0].height);for(let gt=0,lt=Yt.length;gt<lt;gt++)Et=Yt[gt],z?yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,wt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,gt,Ft,Et.width,Et.height,0,wt,Ht,Et.data);v.generateMipmaps=!1}else z?(vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ft,ht.width,ht.height),yt&&Jt(v,ht,wt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,wt,Ht,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){z&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ft,Yt[0].width,Yt[0].height,ht.depth);for(let gt=0,lt=Yt.length;gt<lt;gt++)if(Et=Yt[gt],v.format!==Ze)if(wt!==null)if(z){if(yt)if(v.layerUpdates.size>0){const Ut=Dc(Et.width,Et.height,v.format,v.type);for(const Wt of v.layerUpdates){const fe=Et.data.subarray(Wt*Ut/Et.data.BYTES_PER_ELEMENT,(Wt+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Wt,Et.width,Et.height,1,wt,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,ht.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Ft,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,ht.depth,wt,Ht,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Ft,Et.width,Et.height,ht.depth,0,wt,Ht,Et.data)}else{z&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ft,Yt[0].width,Yt[0].height);for(let gt=0,lt=Yt.length;gt<lt;gt++)Et=Yt[gt],v.format!==Ze?wt!==null?z?yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,wt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,gt,Ft,Et.width,Et.height,0,wt,Ht,Et.data)}else if(v.isDataArrayTexture)if(z){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ft,ht.width,ht.height,ht.depth),yt)if(v.layerUpdates.size>0){const gt=Dc(ht.width,ht.height,v.format,v.type);for(const lt of v.layerUpdates){const Ut=ht.data.subarray(lt*gt/ht.data.BYTES_PER_ELEMENT,(lt+1)*gt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ht.width,ht.height,1,wt,Ht,Ut)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,wt,Ht,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,wt,Ht,ht.data);else if(v.isData3DTexture)z?(vt&&e.texStorage3D(i.TEXTURE_3D,Pt,Ft,ht.width,ht.height,ht.depth),yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,wt,Ht,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,wt,Ht,ht.data);else if(v.isFramebufferTexture){if(vt)if(z)e.texStorage2D(i.TEXTURE_2D,Pt,Ft,ht.width,ht.height);else{let gt=ht.width,lt=ht.height;for(let Ut=0;Ut<Pt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Ft,gt,lt,0,wt,Ht,null),gt>>=1,lt>>=1}}else if(Yt.length>0){if(z&&vt){const gt=dt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Ft,gt.width,gt.height)}for(let gt=0,lt=Yt.length;gt<lt;gt++)Et=Yt[gt],z?yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,wt,Ht,Et):e.texImage2D(i.TEXTURE_2D,gt,Ft,wt,Ht,Et);v.generateMipmaps=!1}else if(z){if(vt){const gt=dt(ht);e.texStorage2D(i.TEXTURE_2D,Pt,Ft,gt.width,gt.height)}yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ht,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ft,wt,Ht,ht);m(v)&&p(G),At.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ct(w,v,N){if(v.image.length!==6)return;const G=qt(w,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const tt=n.get(it);if(it.version!==tt.__version||G===!0){e.activeTexture(i.TEXTURE0+N);const At=re.getPrimaries(re.workingColorSpace),ut=v.colorSpace===Pn?null:re.getPrimaries(v.colorSpace),Rt=v.colorSpace===Pn||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let lt=0;lt<6;lt++)!Tt&&!ht?wt[lt]=g(v.image[lt],!0,s.maxCubemapSize):wt[lt]=ht?v.image[lt].image:v.image[lt],wt[lt]=Dt(v,wt[lt]);const Ht=wt[0],Ft=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),Yt=M(v.internalFormat,Ft,Et,v.colorSpace),z=v.isVideoTexture!==!0,vt=tt.__version===void 0||G===!0,yt=it.dataReady;let Pt=A(v,Ht);Ot(i.TEXTURE_CUBE_MAP,v);let gt;if(Tt){z&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Yt,Ht.width,Ht.height);for(let lt=0;lt<6;lt++){gt=wt[lt].mipmaps;for(let Ut=0;Ut<gt.length;Ut++){const Wt=gt[Ut];v.format!==Ze?Ft!==null?z?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Wt.width,Wt.height,Ft,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Yt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Wt.width,Wt.height,Ft,Et,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Yt,Wt.width,Wt.height,0,Ft,Et,Wt.data)}}}else{if(gt=v.mipmaps,z&&vt){gt.length>0&&Pt++;const lt=dt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ht){z?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,wt[lt].width,wt[lt].height,Ft,Et,wt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,wt[lt].width,wt[lt].height,0,Ft,Et,wt[lt].data);for(let Ut=0;Ut<gt.length;Ut++){const fe=gt[Ut].image[lt].image;z?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,fe.width,fe.height,Ft,Et,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Yt,fe.width,fe.height,0,Ft,Et,fe.data)}}else{z?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft,Et,wt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Ft,Et,wt[lt]);for(let Ut=0;Ut<gt.length;Ut++){const Wt=gt[Ut];z?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,Ft,Et,Wt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Yt,Ft,Et,Wt.image[lt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),tt.__version=it.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function J(w,v,N,G,it,tt){const At=r.convert(N.format,N.colorSpace),ut=r.convert(N.type),Rt=M(N.internalFormat,At,ut,N.colorSpace),Tt=n.get(v),ht=n.get(N);if(ht.__renderTarget=v,!Tt.__hasExternalTextures){const wt=Math.max(1,v.width>>tt),Ht=Math.max(1,v.height>>tt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,Rt,wt,Ht,v.depth,0,At,ut,null):e.texImage2D(it,tt,Rt,wt,Ht,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Z(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,it,ht.__webglTexture,0,at(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,it,ht.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(w,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const G=v.depthTexture,it=G&&G.isDepthTexture?G.type:null,tt=_(v.stencilBuffer,it),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=at(v);Z(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,tt,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,tt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,w)}else{const G=v.textures;for(let it=0;it<G.length;it++){const tt=G[it],At=r.convert(tt.format,tt.colorSpace),ut=r.convert(tt.type),Rt=M(tt.internalFormat,At,ut,tt.colorSpace),Tt=at(v);N&&Z(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Rt,v.width,v.height):Z(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const it=G.__webglTexture,tt=at(v);if(v.depthTexture.format===bs)Z(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===ws)Z(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function rt(w){const v=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",it)};G.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=G}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const G=w.texture.mipmaps;G&&G.length>0?O(v.__webglFramebuffer[0],w):O(v.__webglFramebuffer,w)}else if(N){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),I(v.__webglDepthbuffer[G],w,!1);else{const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),I(v.__webglDepthbuffer,w,!1);else{const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(w,v,N){const G=n.get(w);v!==void 0&&J(G.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&rt(w)}function y(w){const v=w.texture,N=n.get(w),G=n.get(v);w.addEventListener("dispose",C);const it=w.textures,tt=w.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,o.memory.textures++),tt){N.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ut]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)N.__webglFramebuffer[ut][Rt]=i.createFramebuffer()}else N.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)N.__webglFramebuffer[ut]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,Rt=it.length;ut<Rt;ut++){const Tt=n.get(it[ut]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Z(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const Rt=it[ut];N.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ut]);const Tt=r.convert(Rt.format,Rt.colorSpace),ht=r.convert(Rt.type),wt=M(Rt.internalFormat,Tt,ht,Rt.colorSpace,w.isXRRenderTarget===!0),Ht=at(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,wt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,N.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),I(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)J(N.__webglFramebuffer[ut][Rt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Rt);else J(N.__webglFramebuffer[ut],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,Rt=it.length;ut<Rt;ut++){const Tt=it[ut],ht=n.get(Tt);let wt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(wt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ht.__webglTexture),Ot(wt,Tt),J(N.__webglFramebuffer,w,Tt,i.COLOR_ATTACHMENT0+ut,wt,0),m(Tt)&&p(wt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,G.__webglTexture),Ot(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)J(N.__webglFramebuffer[Rt],w,v,i.COLOR_ATTACHMENT0,ut,Rt);else J(N.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ut,0);m(v)&&p(ut),e.unbindTexture()}w.depthBuffer&&rt(w)}function U(w){const v=w.textures;for(let N=0,G=v.length;N<G;N++){const it=v[N];if(m(it)){const tt=S(w),At=n.get(it).__webglTexture;e.bindTexture(tt,At),p(tt),e.unbindTexture()}}}const F=[],k=[];function X(w){if(w.samples>0){if(Z(w)===!1){const v=w.textures,N=w.width,G=w.height;let it=i.COLOR_BUFFER_BIT;const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(w),ut=v.length>1;if(ut)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Rt=w.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const ht=n.get(v[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,N,G,0,0,N,G,it,i.NEAREST),l===!0&&(F.length=0,k.length=0,F.push(i.COLOR_ATTACHMENT0+Tt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(F.push(tt),k.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const ht=n.get(v[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function at(w){return Math.min(s.maxSamples,w.samples)}function Z(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(w){const v=o.render.frame;c.get(w)!==v&&(c.set(w,v),w.update())}function Dt(w,v){const N=w.colorSpace,G=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==$i&&N!==Pn&&(re.getTransfer(N)===he?(G!==Ze||it!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=mt,this.setupRenderTarget=y,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Z}function ng(i,t){function e(n,s=Pn){let r;const o=re.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vl)return i.BYTE;if(n===Ml)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===El)return i.ALPHA;if(n===bl)return i.RGB;if(n===Ze)return i.RGBA;if(n===bs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Sa)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===wl)return i.RG;if(n===ba)return i.RG_INTEGER;if(n===wa)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===xr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===ko||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Go)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xo||n===qo||n===Yo||n===$o||n===Jo||n===Zo||n===Ko||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===oa||n===aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ca||n===la||n===ha||n===ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new zl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:ig,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",m=new rg,p={},S=e.getContextAttributes();let M=null,_=null;const A=[],R=[],C=new ft;let P=null;const b=new sn;b.viewport=new me;const E=new sn;E.viewport=new me;const L=[b,E],B=new Af;let $=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=A[et];return ct===void 0&&(ct=new ao,A[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=A[et];return ct===void 0&&(ct=new ao,A[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=A[et];return ct===void 0&&(ct=new ao,A[et]=ct),ct.getHandSpace()};function K(et){const ct=R.indexOf(et.inputSource);if(ct===-1)return;const J=A[ct];J!==void 0&&(J.update(et.inputSource,et.frame,h||o),J.dispatchEvent({type:et.type,data:et.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let et=0;et<A.length;et++){const ct=R[et];ct!==null&&(R[et]=null,A[et].disconnect(ct))}$=null,Y=null,m.reset();for(const et in p)delete p[et];t.setRenderTarget(M),f=null,d=null,u=null,s=null,_=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),S.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,I=null,O=null;S.depth&&(O=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=S.stencil?ws:bs,I=S.stencil?Es:pi);const rt={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new mi(d.textureWidth,d.textureHeight,{format:Ze,type:_n,depthTexture:new Fl(d.textureWidth,d.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const J={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new mi(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(et){for(let ct=0;ct<et.removed.length;ct++){const J=et.removed[ct],I=R.indexOf(J);I>=0&&(R[I]=null,A[I].disconnect(J))}for(let ct=0;ct<et.added.length;ct++){const J=et.added[ct];let I=R.indexOf(J);if(I===-1){for(let rt=0;rt<A.length;rt++)if(rt>=R.length){R.push(J),I=rt;break}else if(R[rt]===null){R[rt]=J,I=rt;break}if(I===-1)break}const O=A[I];O&&O.connect(J)}}const W=new D,_t=new D;function pt(et,ct,J){W.setFromMatrixPosition(ct.matrixWorld),_t.setFromMatrixPosition(J.matrixWorld);const I=W.distanceTo(_t),O=ct.projectionMatrix.elements,rt=J.projectionMatrix.elements,mt=O[14]/(O[10]-1),y=O[14]/(O[10]+1),U=(O[9]+1)/O[5],F=(O[9]-1)/O[5],k=(O[8]-1)/O[0],X=(rt[8]+1)/rt[0],at=mt*k,Z=mt*X,ot=I/(-k+X),Dt=ot*-k;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Dt),et.translateZ(ot),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),O[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const dt=mt+ot,w=y+ot,v=at-Dt,N=Z+(I-Dt),G=U*y/w*dt,it=F*y/w*dt;et.projectionMatrix.makePerspective(v,N,G,it,dt,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Mt(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ct=et.near,J=et.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(J=m.depthFar)),B.near=E.near=b.near=ct,B.far=E.far=b.far=J,($!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),$=B.near,Y=B.far),B.layers.mask=et.layers.mask|6,b.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const I=et.parent,O=B.cameras;Mt(B,I);for(let rt=0;rt<O.length;rt++)Mt(O[rt],I);O.length===2?pt(B,b,E):B.projectionMatrix.copy(b.projectionMatrix),Ot(et,B,I)};function Ot(et,ct,J){J===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(J.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=fa*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(et){return p[et]};let qt=null;function ne(et,ct){if(c=ct.getViewerPose(h||o),x=ct,c!==null){const J=c.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let I=!1;J.length!==B.cameras.length&&(B.cameras.length=0,I=!0);for(let y=0;y<J.length;y++){const U=J[y];let F=null;if(f!==null)F=f.getViewport(U);else{const X=u.getViewSubImage(d,U);F=X.viewport,y===0&&(t.setRenderTargetTextures(_,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(_))}let k=L[y];k===void 0&&(k=new sn,k.layers.enable(y),k.viewport=new me,L[y]=k),k.matrix.fromArray(U.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(U.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(F.x,F.y,F.width,F.height),y===0&&(B.matrix.copy(k.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),I===!0&&B.cameras.push(k)}const O=s.enabledFeatures;if(O&&O.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const y=u.getDepthInformation(J[0]);y&&y.isValid&&y.texture&&m.init(y,s.renderState)}if(O&&O.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let y=0;y<J.length;y++){const U=J[y].camera;if(U){let F=p[U];F||(F=new zl,p[U]=F);const k=u.getCameraImage(U);F.sourceTexture=k}}}}for(let J=0;J<A.length;J++){const I=R[J],O=A[J];I!==null&&O!==void 0&&O.update(I,ct,h||o)}qt&&qt(et,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),x=null}const Jt=new $l;Jt.setAnimationLoop(ne),this.setAnimationLoop=function(et){qt=et},this.dispose=function(){}}}const oi=new un,ag=new oe;function cg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,_=S.envMapRotation;M&&(m.envMap.value=M,oi.copy(_),oi.x*=-1,oi.y*=-1,oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(oi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const _=M.program;n.uniformBlockBinding(S,_)}function h(S,M){let _=s[S.id];_===void 0&&(x(S),_=c(S),s[S.id]=_,S.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(S,A);const R=t.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function c(S){const M=u();S.__bindingPointIndex=M;const _=i.createBuffer(),A=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],_=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,C=_.length;R<C;R++){const P=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,E=P.length;b<E;b++){const L=P[b];if(f(L,R,b,A)===!0){const B=L.__offset,$=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let K=0;K<$.length;K++){const q=$[K],nt=g(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,B+Y,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,Y),Y+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,_,A){const R=S.value,C=M+"_"+_;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const P=A[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return A[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function x(S){const M=S.uniforms;let _=0;const A=16;for(let C=0,P=M.length;C<P;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,L=b.length;E<L;E++){const B=b[E],$=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,K=$.length;Y<K;Y++){const q=$[Y],nt=g(q),W=_%A,_t=W%nt.boundary,pt=W+_t;_+=_t,pt!==0&&A-pt<nt.storage&&(_+=A-pt),B.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=nt.storage}}}const R=_%A;return R>0&&(_+=A-R),S.__size=_,S.__cache={},this}function g(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}class hg{constructor(t={}){const{canvas:e=au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const x=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Le;let R=0,C=0,P=null,b=-1,E=null;const L=new me,B=new me;let $=null;const Y=new Gt(0);let K=0,q=e.width,nt=e.height,W=1,_t=null,pt=null;const Mt=new me(0,0,q,nt),Ot=new me(0,0,q,nt);let qt=!1;const ne=new Pr;let Jt=!1,et=!1;const ct=new oe,J=new D,I=new me,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function mt(){return P===null?W:1}let y=n;function U(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),y===null){const H="webgl2";if(y=U(H,T),y===null)throw U(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let F,k,X,at,Z,ot,Dt,dt,w,v,N,G,it,tt,At,ut,Rt,Tt,ht,wt,Ht,Ft,Et,Yt;function z(){F=new Mm(y),F.init(),Ft=new ng(y,F),k=new dm(y,F,t,Ft),X=new tg(y,F),k.reversedDepthBuffer&&d&&X.buffers.depth.setReversed(!0),at=new Em(y),Z=new H0,ot=new eg(y,F,X,Z,k,Ft,at),Dt=new mm(_),dt=new vm(_),w=new Cf(y),Et=new um(y,w),v=new ym(y,w,at,Et),N=new wm(y,v,w,at),ht=new bm(y,k,ot),ut=new pm(Z),G=new k0(_,Dt,dt,F,k,Et,ut),it=new cg(_,Z),tt=new G0,At=new J0(F),Tt=new hm(_,Dt,dt,X,N,f,l),Rt=new j0(_,N,k),Yt=new lg(y,at,k,X),wt=new fm(y,F,at),Ht=new Sm(y,F,at),at.programs=G.programs,_.capabilities=k,_.extensions=F,_.properties=Z,_.renderLists=tt,_.shadowMap=Rt,_.state=X,_.info=at}z();const vt=new og(_,y);this.xr=vt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=F.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=F.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(q,nt,!1))},this.getSize=function(T){return T.set(q,nt)},this.setSize=function(T,H,j=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,nt=H,e.width=Math.floor(T*W),e.height=Math.floor(H*W),j===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(q*W,nt*W).floor()},this.setDrawingBufferSize=function(T,H,j){q=T,nt=H,W=j,e.width=Math.floor(T*j),e.height=Math.floor(H*j),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Mt)},this.setViewport=function(T,H,j,Q){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,H,j,Q),X.viewport(L.copy(Mt).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Ot)},this.setScissor=function(T,H,j,Q){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,H,j,Q),X.scissor(B.copy(Ot).multiplyScalar(W).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(T){X.setScissorTest(qt=T)},this.setOpaqueSort=function(T){_t=T},this.setTransparentSort=function(T){pt=T},this.getClearColor=function(T){return T.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,j=!0){let Q=0;if(T){let V=!1;if(P!==null){const xt=P.texture.format;V=xt===wa||xt===ba||xt===Ea}if(V){const xt=P.texture.type,bt=xt===_n||xt===pi||xt===Ss||xt===Es||xt===Ma||xt===ya,It=Tt.getClearColor(),Ct=Tt.getClearAlpha(),kt=It.r,Vt=It.g,zt=It.b;bt?(x[0]=kt,x[1]=Vt,x[2]=zt,x[3]=Ct,y.clearBufferuiv(y.COLOR,0,x)):(g[0]=kt,g[1]=Vt,g[2]=zt,g[3]=Ct,y.clearBufferiv(y.COLOR,0,g))}else Q|=y.COLOR_BUFFER_BIT}H&&(Q|=y.DEPTH_BUFFER_BIT),j&&(Q|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Tt.dispose(),tt.dispose(),At.dispose(),Z.dispose(),Dt.dispose(),dt.dispose(),N.dispose(),Et.dispose(),Yt.dispose(),G.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",fn),vt.removeEventListener("sessionend",Ga),Qn.stop()};function yt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=at.autoReset,H=Rt.enabled,j=Rt.autoUpdate,Q=Rt.needsUpdate,V=Rt.type;z(),at.autoReset=T,Rt.enabled=H,Rt.autoUpdate=j,Rt.needsUpdate=Q,Rt.type=V}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){const H=T.target;H.removeEventListener("dispose",lt),Ut(H)}function Ut(T){Wt(T),Z.remove(T)}function Wt(T){const H=Z.get(T).programs;H!==void 0&&(H.forEach(function(j){G.releaseProgram(j)}),T.isShaderMaterial&&G.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,j,Q,V,xt){H===null&&(H=O);const bt=V.isMesh&&V.matrixWorld.determinant()<0,It=mh(T,H,j,Q,V);X.setMaterial(Q,bt);let Ct=j.index,kt=1;if(Q.wireframe===!0){if(Ct=v.getWireframeAttribute(j),Ct===void 0)return;kt=2}const Vt=j.drawRange,zt=j.attributes.position;let ee=Vt.start*kt,le=(Vt.start+Vt.count)*kt;xt!==null&&(ee=Math.max(ee,xt.start*kt),le=Math.min(le,(xt.start+xt.count)*kt)),Ct!==null?(ee=Math.max(ee,0),le=Math.min(le,Ct.count)):zt!=null&&(ee=Math.max(ee,0),le=Math.min(le,zt.count));const ve=le-ee;if(ve<0||ve===1/0)return;Et.setup(V,Q,It,j,Ct);let de,ue=wt;if(Ct!==null&&(de=w.get(Ct),ue=Ht,ue.setIndex(de)),V.isMesh)Q.wireframe===!0?(X.setLineWidth(Q.wireframeLinewidth*mt()),ue.setMode(y.LINES)):ue.setMode(y.TRIANGLES);else if(V.isLine){let Bt=Q.linewidth;Bt===void 0&&(Bt=1),X.setLineWidth(Bt*mt()),V.isLineSegments?ue.setMode(y.LINES):V.isLineLoop?ue.setMode(y.LINE_LOOP):ue.setMode(y.LINE_STRIP)}else V.isPoints?ue.setMode(y.POINTS):V.isSprite&&ue.setMode(y.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,ge=V._multiDrawCounts,se=V._multiDrawCount,We=Ct?w.get(Ct).bytesPerElement:1,vi=Z.get(Q).currentProgram.getUniforms();for(let Xe=0;Xe<se;Xe++)vi.setValue(y,"_gl_DrawID",Xe),ue.render(Bt[Xe]/We,ge[Xe])}else if(V.isInstancedMesh)ue.renderInstances(ee,ve,V.count);else if(j.isInstancedBufferGeometry){const Bt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ge=Math.min(j.instanceCount,Bt);ue.renderInstances(ee,ve,ge)}else ue.render(ee,ve)};function fe(T,H,j){T.transparent===!0&&T.side===ke&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,ks(T,H,j),T.side=Zn,T.needsUpdate=!0,ks(T,H,j),T.side=ke):ks(T,H,j)}this.compile=function(T,H,j=null){j===null&&(j=T),p=At.get(j),p.init(H),M.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==j&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Q=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xt=V.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){const It=xt[bt];fe(It,j,V),Q.add(It)}else fe(xt,j,V),Q.add(xt)}),p=M.pop(),Q},this.compileAsync=function(T,H,j=null){const Q=this.compile(T,H,j);return new Promise(V=>{function xt(){if(Q.forEach(function(bt){Z.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){V(T);return}setTimeout(xt,10)}F.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ae=null;function yn(T){ae&&ae(T)}function fn(){Qn.stop()}function Ga(){Qn.start()}const Qn=new $l;Qn.setAnimationLoop(yn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(T){ae=T,vt.setAnimationLoop(T),T===null?Qn.stop():Qn.start()},vt.addEventListener("sessionstart",fn),vt.addEventListener("sessionend",Ga),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(H),H=vt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,H,P),p=At.get(T,M.length),p.init(H),M.push(p),ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ne.setFromProjectionMatrix(ct,mn,H.reversedDepth),et=this.localClippingEnabled,Jt=ut.init(this.clippingPlanes,et),m=tt.get(T,S.length),m.init(),S.push(m),vt.enabled===!0&&vt.isPresenting===!0){const xt=_.xr.getDepthSensingMesh();xt!==null&&Fr(xt,H,-1/0,_.sortObjects)}Fr(T,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(_t,pt),rt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,rt&&Tt.addToRenderList(m,T),this.info.render.frame++,Jt===!0&&ut.beginShadows();const j=p.state.shadowsArray;Rt.render(j,T,H),Jt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const xt=H.cameras;if(V.length>0)for(let bt=0,It=xt.length;bt<It;bt++){const Ct=xt[bt];Xa(Q,V,T,Ct)}rt&&Tt.render(T);for(let bt=0,It=xt.length;bt<It;bt++){const Ct=xt[bt];Wa(m,T,Ct,Ct.viewport)}}else V.length>0&&Xa(Q,V,T,H),rt&&Tt.render(T),Wa(m,T,H);P!==null&&C===0&&(ot.updateMultisampleRenderTarget(P),ot.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,H),Et.resetDefaultState(),b=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],Jt===!0&&ut.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Fr(T,H,j,Q){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){Q&&I.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const bt=N.update(T),It=T.material;It.visible&&m.push(T,bt,It,j,I.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const bt=N.update(T),It=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),I.copy(T.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),I.copy(bt.boundingSphere.center)),I.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(It)){const Ct=bt.groups;for(let kt=0,Vt=Ct.length;kt<Vt;kt++){const zt=Ct[kt],ee=It[zt.materialIndex];ee&&ee.visible&&m.push(T,bt,ee,j,I.z,zt)}}else It.visible&&m.push(T,bt,It,j,I.z,null)}}const xt=T.children;for(let bt=0,It=xt.length;bt<It;bt++)Fr(xt[bt],H,j,Q)}function Wa(T,H,j,Q){const V=T.opaque,xt=T.transmissive,bt=T.transparent;p.setupLightsView(j),Jt===!0&&ut.setGlobalState(_.clippingPlanes,j),Q&&X.viewport(L.copy(Q)),V.length>0&&Bs(V,H,j),xt.length>0&&Bs(xt,H,j),bt.length>0&&Bs(bt,H,j),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Xa(T,H,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new mi(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Ns:_n,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const xt=p.state.transmissionRenderTarget[Q.id],bt=Q.viewport||L;xt.setSize(bt.z*_.transmissionResolutionScale,bt.w*_.transmissionResolutionScale);const It=_.getRenderTarget(),Ct=_.getActiveCubeFace(),kt=_.getActiveMipmapLevel();_.setRenderTarget(xt),_.getClearColor(Y),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),rt&&Tt.render(j);const Vt=_.toneMapping;_.toneMapping=$n;const zt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Jt===!0&&ut.setGlobalState(_.clippingPlanes,Q),Bs(T,j,Q),ot.updateMultisampleRenderTarget(xt),ot.updateRenderTargetMipmap(xt),F.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let le=0,ve=H.length;le<ve;le++){const de=H[le],ue=de.object,Bt=de.geometry,ge=de.material,se=de.group;if(ge.side===ke&&ue.layers.test(Q.layers)){const We=ge.side;ge.side=Ge,ge.needsUpdate=!0,qa(ue,j,Q,Bt,ge,se),ge.side=We,ge.needsUpdate=!0,ee=!0}}ee===!0&&(ot.updateMultisampleRenderTarget(xt),ot.updateRenderTargetMipmap(xt))}_.setRenderTarget(It,Ct,kt),_.setClearColor(Y,K),zt!==void 0&&(Q.viewport=zt),_.toneMapping=Vt}function Bs(T,H,j){const Q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,xt=T.length;V<xt;V++){const bt=T[V],It=bt.object,Ct=bt.geometry,kt=bt.group;let Vt=bt.material;Vt.allowOverride===!0&&Q!==null&&(Vt=Q),It.layers.test(j.layers)&&qa(It,H,j,Ct,Vt,kt)}}function qa(T,H,j,Q,V,xt){T.onBeforeRender(_,H,j,Q,V,xt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(_,H,j,Q,T,xt),V.transparent===!0&&V.side===ke&&V.forceSinglePass===!1?(V.side=Ge,V.needsUpdate=!0,_.renderBufferDirect(j,H,Q,V,T,xt),V.side=Zn,V.needsUpdate=!0,_.renderBufferDirect(j,H,Q,V,T,xt),V.side=ke):_.renderBufferDirect(j,H,Q,V,T,xt),T.onAfterRender(_,H,j,Q,V,xt)}function ks(T,H,j){H.isScene!==!0&&(H=O);const Q=Z.get(T),V=p.state.lights,xt=p.state.shadowsArray,bt=V.state.version,It=G.getParameters(T,V.state,xt,H,j),Ct=G.getProgramCacheKey(It);let kt=Q.programs;Q.environment=T.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(T.isMeshStandardMaterial?dt:Dt).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",lt),kt=new Map,Q.programs=kt);let Vt=kt.get(Ct);if(Vt!==void 0){if(Q.currentProgram===Vt&&Q.lightsStateVersion===bt)return $a(T,It),Vt}else It.uniforms=G.getUniforms(T),T.onBeforeCompile(It,_),Vt=G.acquireProgram(It,Ct),kt.set(Ct,Vt),Q.uniforms=It.uniforms;const zt=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=ut.uniform),$a(T,It),Q.needsLights=xh(T),Q.lightsStateVersion=bt,Q.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=Vt,Q.uniformsList=null,Vt}function Ya(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=_r.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function $a(T,H){const j=Z.get(T);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function mh(T,H,j,Q,V){H.isScene!==!0&&(H=O),ot.resetTextureUnits();const xt=H.fog,bt=Q.isMeshStandardMaterial?H.environment:null,It=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:$i,Ct=(Q.isMeshStandardMaterial?dt:Dt).get(Q.envMap||bt),kt=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Vt=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),zt=!!j.morphAttributes.position,ee=!!j.morphAttributes.normal,le=!!j.morphAttributes.color;let ve=$n;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=_.toneMapping);const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=de!==void 0?de.length:0,Bt=Z.get(Q),ge=p.state.lights;if(Jt===!0&&(et===!0||T!==E)){const Oe=T===E&&Q.id===b;ut.setState(Q,T,Oe)}let se=!1;Q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ge.state.version||Bt.outputColorSpace!==It||V.isBatchedMesh&&Bt.batching===!1||!V.isBatchedMesh&&Bt.batching===!0||V.isBatchedMesh&&Bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Bt.instancing===!1||!V.isInstancedMesh&&Bt.instancing===!0||V.isSkinnedMesh&&Bt.skinning===!1||!V.isSkinnedMesh&&Bt.skinning===!0||V.isInstancedMesh&&Bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Bt.instancingMorph===!1&&V.morphTexture!==null||Bt.envMap!==Ct||Q.fog===!0&&Bt.fog!==xt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ut.numPlanes||Bt.numIntersection!==ut.numIntersection)||Bt.vertexAlphas!==kt||Bt.vertexTangents!==Vt||Bt.morphTargets!==zt||Bt.morphNormals!==ee||Bt.morphColors!==le||Bt.toneMapping!==ve||Bt.morphTargetsCount!==ue)&&(se=!0):(se=!0,Bt.__version=Q.version);let We=Bt.currentProgram;se===!0&&(We=ks(Q,H,V));let vi=!1,Xe=!1,rs=!1;const xe=We.getUniforms(),Qe=Bt.uniforms;if(X.useProgram(We.program)&&(vi=!0,Xe=!0,rs=!0),Q.id!==b&&(b=Q.id,Xe=!0),vi||E!==T){X.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xe.setValue(y,"projectionMatrix",T.projectionMatrix),xe.setValue(y,"viewMatrix",T.matrixWorldInverse);const He=xe.map.cameraPosition;He!==void 0&&He.setValue(y,J.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&xe.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Xe=!0,rs=!0)}if(V.isSkinnedMesh){xe.setOptional(y,V,"bindMatrix"),xe.setOptional(y,V,"bindMatrixInverse");const Oe=V.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),xe.setValue(y,"boneTexture",Oe.boneTexture,ot))}V.isBatchedMesh&&(xe.setOptional(y,V,"batchingTexture"),xe.setValue(y,"batchingTexture",V._matricesTexture,ot),xe.setOptional(y,V,"batchingIdTexture"),xe.setValue(y,"batchingIdTexture",V._indirectTexture,ot),xe.setOptional(y,V,"batchingColorTexture"),V._colorsTexture!==null&&xe.setValue(y,"batchingColorTexture",V._colorsTexture,ot));const tn=j.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ht.update(V,j,We),(Xe||Bt.receiveShadow!==V.receiveShadow)&&(Bt.receiveShadow=V.receiveShadow,xe.setValue(y,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Qe.envMap.value=Ct,Qe.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(Qe.envMapIntensity.value=H.environmentIntensity),Xe&&(xe.setValue(y,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&gh(Qe,rs),xt&&Q.fog===!0&&it.refreshFogUniforms(Qe,xt),it.refreshMaterialUniforms(Qe,Q,W,nt,p.state.transmissionRenderTarget[T.id]),_r.upload(y,Ya(Bt),Qe,ot)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(_r.upload(y,Ya(Bt),Qe,ot),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue(y,"center",V.center),xe.setValue(y,"modelViewMatrix",V.modelViewMatrix),xe.setValue(y,"normalMatrix",V.normalMatrix),xe.setValue(y,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Oe=Q.uniformsGroups;for(let He=0,zr=Oe.length;He<zr;He++){const ti=Oe[He];Yt.update(ti,We),Yt.bind(ti,We)}}return We}function gh(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function xh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,H,j){const Q=Z.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Z.get(T.texture).__webglTexture=H,Z.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:j,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const j=Z.get(T);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};const _h=y.createFramebuffer();this.setRenderTarget=function(T,H=0,j=0){P=T,R=H,C=j;let Q=!0,V=null,xt=!1,bt=!1;if(T){const Ct=Z.get(T);if(Ct.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(y.FRAMEBUFFER,null),Q=!1;else if(Ct.__webglFramebuffer===void 0)ot.setupRenderTarget(T);else if(Ct.__hasExternalTextures)ot.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const zt=T.depthTexture;if(Ct.__boundDepthTexture!==zt){if(zt!==null&&Z.has(zt)&&(T.width!==zt.image.width||T.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(T)}}const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(bt=!0);const Vt=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?V=Vt[H][j]:V=Vt[H],xt=!0):T.samples>0&&ot.useMultisampledRTT(T)===!1?V=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[j]:V=Vt,L.copy(T.viewport),B.copy(T.scissor),$=T.scissorTest}else L.copy(Mt).multiplyScalar(W).floor(),B.copy(Ot).multiplyScalar(W).floor(),$=qt;if(j!==0&&(V=_h),X.bindFramebuffer(y.FRAMEBUFFER,V)&&Q&&X.drawBuffers(T,V),X.viewport(L),X.scissor(B),X.setScissorTest($),xt){const Ct=Z.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ct.__webglTexture,j)}else if(bt){const Ct=H;for(let kt=0;kt<T.textures.length;kt++){const Vt=Z.get(T.textures[kt]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+kt,Vt.__webglTexture,j,Ct)}}else if(T!==null&&j!==0){const Ct=Z.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ct.__webglTexture,j)}b=-1},this.readRenderTargetPixels=function(T,H,j,Q,V,xt,bt,It=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){X.bindFramebuffer(y.FRAMEBUFFER,Ct);try{const kt=T.textures[It],Vt=kt.format,zt=kt.type;if(!k.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Q&&j>=0&&j<=T.height-V&&(T.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+It),y.readPixels(H,j,Q,V,Ft.convert(Vt),Ft.convert(zt),xt))}finally{const kt=P!==null?Z.get(P).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,H,j,Q,V,xt,bt,It=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct)if(H>=0&&H<=T.width-Q&&j>=0&&j<=T.height-V){X.bindFramebuffer(y.FRAMEBUFFER,Ct);const kt=T.textures[It],Vt=kt.format,zt=kt.type;if(!k.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,ee),y.bufferData(y.PIXEL_PACK_BUFFER,xt.byteLength,y.STREAM_READ),T.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+It),y.readPixels(H,j,Q,V,Ft.convert(Vt),Ft.convert(zt),0);const le=P!==null?Z.get(P).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,le);const ve=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await cu(y,ve,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,ee),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,xt),y.deleteBuffer(ee),y.deleteSync(ve),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,j=0){const Q=Math.pow(2,-j),V=Math.floor(T.image.width*Q),xt=Math.floor(T.image.height*Q),bt=H!==null?H.x:0,It=H!==null?H.y:0;ot.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,j,0,0,bt,It,V,xt),X.unbindTexture()};const vh=y.createFramebuffer(),Mh=y.createFramebuffer();this.copyTextureToTexture=function(T,H,j=null,Q=null,V=0,xt=null){xt===null&&(V!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=V,V=0):xt=0);let bt,It,Ct,kt,Vt,zt,ee,le,ve;const de=T.isCompressedTexture?T.mipmaps[xt]:T.image;if(j!==null)bt=j.max.x-j.min.x,It=j.max.y-j.min.y,Ct=j.isBox3?j.max.z-j.min.z:1,kt=j.min.x,Vt=j.min.y,zt=j.isBox3?j.min.z:0;else{const tn=Math.pow(2,-V);bt=Math.floor(de.width*tn),It=Math.floor(de.height*tn),T.isDataArrayTexture?Ct=de.depth:T.isData3DTexture?Ct=Math.floor(de.depth*tn):Ct=1,kt=0,Vt=0,zt=0}Q!==null?(ee=Q.x,le=Q.y,ve=Q.z):(ee=0,le=0,ve=0);const ue=Ft.convert(H.format),Bt=Ft.convert(H.type);let ge;H.isData3DTexture?(ot.setTexture3D(H,0),ge=y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ot.setTexture2DArray(H,0),ge=y.TEXTURE_2D_ARRAY):(ot.setTexture2D(H,0),ge=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,H.unpackAlignment);const se=y.getParameter(y.UNPACK_ROW_LENGTH),We=y.getParameter(y.UNPACK_IMAGE_HEIGHT),vi=y.getParameter(y.UNPACK_SKIP_PIXELS),Xe=y.getParameter(y.UNPACK_SKIP_ROWS),rs=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,de.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,de.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,kt),y.pixelStorei(y.UNPACK_SKIP_ROWS,Vt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,zt);const xe=T.isDataArrayTexture||T.isData3DTexture,Qe=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const tn=Z.get(T),Oe=Z.get(H),He=Z.get(tn.__renderTarget),zr=Z.get(Oe.__renderTarget);X.bindFramebuffer(y.READ_FRAMEBUFFER,He.__webglFramebuffer),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let ti=0;ti<Ct;ti++)xe&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,V,zt+ti),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,xt,ve+ti)),y.blitFramebuffer(kt,Vt,bt,It,ee,le,bt,It,y.DEPTH_BUFFER_BIT,y.NEAREST);X.bindFramebuffer(y.READ_FRAMEBUFFER,null),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Z.has(T)){const tn=Z.get(T),Oe=Z.get(H);X.bindFramebuffer(y.READ_FRAMEBUFFER,vh),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,Mh);for(let He=0;He<Ct;He++)xe?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,tn.__webglTexture,V,zt+He):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,tn.__webglTexture,V),Qe?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Oe.__webglTexture,xt,ve+He):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Oe.__webglTexture,xt),V!==0?y.blitFramebuffer(kt,Vt,bt,It,ee,le,bt,It,y.COLOR_BUFFER_BIT,y.NEAREST):Qe?y.copyTexSubImage3D(ge,xt,ee,le,ve+He,kt,Vt,bt,It):y.copyTexSubImage2D(ge,xt,ee,le,kt,Vt,bt,It);X.bindFramebuffer(y.READ_FRAMEBUFFER,null),X.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Qe?T.isDataTexture||T.isData3DTexture?y.texSubImage3D(ge,xt,ee,le,ve,bt,It,Ct,ue,Bt,de.data):H.isCompressedArrayTexture?y.compressedTexSubImage3D(ge,xt,ee,le,ve,bt,It,Ct,ue,de.data):y.texSubImage3D(ge,xt,ee,le,ve,bt,It,Ct,ue,Bt,de):T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,xt,ee,le,bt,It,ue,Bt,de.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,xt,ee,le,de.width,de.height,ue,de.data):y.texSubImage2D(y.TEXTURE_2D,xt,ee,le,bt,It,ue,Bt,de);y.pixelStorei(y.UNPACK_ROW_LENGTH,se),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,We),y.pixelStorei(y.UNPACK_SKIP_PIXELS,vi),y.pixelStorei(y.UNPACK_SKIP_ROWS,Xe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,rs),xt===0&&H.generateMipmaps&&y.generateMipmap(ge),X.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ot.setTextureCube(T,0):T.isData3DTexture?ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ot.setTexture2DArray(T,0):ot.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,X.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class ug{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}}class Ql{constructor(){this.id=0,this.v1=new Gi,this.v2=new Gi,this.v3=new Gi,this.normalModel=new D,this.vertexNormalsModel=[new D,new D,new D],this.vertexNormalsLength=0,this.color=new Gt,this.material=null,this.uvs=[new ft,new ft,new ft],this.z=0,this.renderOrder=0}}class Gi{constructor(){this.position=new D,this.positionWorld=new D,this.positionScreen=new me,this.visible=!0}copy(t){this.positionWorld.copy(t.positionWorld),this.positionScreen.copy(t.positionScreen)}}class th{constructor(){this.id=0,this.v1=new Gi,this.v2=new Gi,this.vertexColors=[new Gt,new Gt],this.material=null,this.z=0,this.renderOrder=0}}class eh{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new ft,this.material=null,this.renderOrder=0}}class fg{constructor(){let t,e,n=0,s,r,o=0,a,l,h=0,c,u,d=0,f,x,g=0,m;const p={objects:[],lights:[],elements:[]},S=new D,M=new me,_=new Fn(new D(-1,-1,-1),new D(1,1,1)),A=new Fn,R=new Array(3),C=new oe,P=new oe,b=new oe,E=new Pr,L=[],B=[],$=[],Y=[],K=[];function q(){const J=[],I=[],O=[];let rt=null;const mt=new Xt;function y(w){rt=w,mt.getNormalMatrix(rt.matrixWorld),J.length=0,I.length=0,O.length=0}function U(w){const v=w.position,N=w.positionWorld,G=w.positionScreen;N.copy(v).applyMatrix4(m),G.copy(N).applyMatrix4(P);const it=1/G.w;G.x*=it,G.y*=it,G.z*=it,w.visible=G.x>=-1&&G.x<=1&&G.y>=-1&&G.y<=1&&G.z>=-1&&G.z<=1}function F(w,v,N){s=Ot(),s.position.set(w,v,N),U(s)}function k(w,v,N){J.push(w,v,N)}function X(w,v,N){I.push(w,v,N)}function at(w,v){O.push(w,v)}function Z(w,v,N){return w.visible===!0||v.visible===!0||N.visible===!0?!0:(R[0]=w.positionScreen,R[1]=v.positionScreen,R[2]=N.positionScreen,_.intersectsBox(A.setFromPoints(R)))}function ot(w,v,N){return(N.positionScreen.x-w.positionScreen.x)*(v.positionScreen.y-w.positionScreen.y)-(N.positionScreen.y-w.positionScreen.y)*(v.positionScreen.x-w.positionScreen.x)<0}function Dt(w,v){const N=B[w],G=B[v];N.positionScreen.copy(N.position).applyMatrix4(b),G.positionScreen.copy(G.position).applyMatrix4(b),ct(N.positionScreen,G.positionScreen)===!0&&(N.positionScreen.multiplyScalar(1/N.positionScreen.w),G.positionScreen.multiplyScalar(1/G.positionScreen.w),c=ne(),c.id=rt.id,c.v1.copy(N),c.v2.copy(G),c.z=Math.max(N.positionScreen.z,G.positionScreen.z),c.renderOrder=rt.renderOrder,c.material=rt.material,rt.material.vertexColors&&(c.vertexColors[0].fromArray(I,w*3),c.vertexColors[1].fromArray(I,v*3)),p.elements.push(c))}function dt(w,v,N,G){const it=B[w],tt=B[v],At=B[N];if(Z(it,tt,At)!==!1&&(G.side===ke||ot(it,tt,At)===!0)){a=qt(),a.id=rt.id,a.v1.copy(it),a.v2.copy(tt),a.v3.copy(At),a.z=(it.positionScreen.z+tt.positionScreen.z+At.positionScreen.z)/3,a.renderOrder=rt.renderOrder,S.subVectors(At.position,tt.position),M.subVectors(it.position,tt.position),S.cross(M),a.normalModel.copy(S),a.normalModel.applyMatrix3(mt).normalize();for(let ut=0;ut<3;ut++){const Rt=a.vertexNormalsModel[ut];Rt.fromArray(J,arguments[ut]*3),Rt.applyMatrix3(mt).normalize(),a.uvs[ut].fromArray(O,arguments[ut]*2)}a.vertexNormalsLength=3,a.material=G,G.vertexColors&&a.color.fromArray(I,w*3),p.elements.push(a)}}return{setObject:y,projectVertex:U,checkTriangleVisibility:Z,checkBackfaceCulling:ot,pushVertex:F,pushNormal:k,pushColor:X,pushUv:at,pushLine:Dt,pushTriangle:dt}}const nt=new q;function W(J){if(J.visible===!1)return;if(J.isLight)p.lights.push(J);else if(J.isMesh||J.isLine||J.isPoints){if(J.material.visible===!1||J.frustumCulled===!0&&E.intersectsObject(J)===!1)return;_t(J)}else if(J.isSprite){if(J.material.visible===!1||J.frustumCulled===!0&&E.intersectsSprite(J)===!1)return;_t(J)}const I=J.children;for(let O=0,rt=I.length;O<rt;O++)W(I[O])}function _t(J){t=Mt(),t.id=J.id,t.object=J,S.setFromMatrixPosition(J.matrixWorld),S.applyMatrix4(P),t.z=S.z,t.renderOrder=J.renderOrder,p.objects.push(t)}this.projectScene=function(J,I,O,rt){l=0,u=0,x=0,p.elements.length=0,J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),C.copy(I.matrixWorldInverse),P.multiplyMatrices(I.projectionMatrix,C),E.setFromProjectionMatrix(P),e=0,p.objects.length=0,p.lights.length=0,W(J),O===!0&&p.objects.sort(et);const mt=p.objects;for(let y=0,U=mt.length;y<U;y++){const F=mt[y].object,k=F.geometry;if(nt.setObject(F),m=F.matrixWorld,r=0,F.isMesh){let X=F.material;const at=Array.isArray(X),Z=k.attributes,ot=k.groups;if(Z.position===void 0)continue;const Dt=Z.position.array;for(let dt=0,w=Dt.length;dt<w;dt+=3){let v=Dt[dt],N=Dt[dt+1],G=Dt[dt+2];const it=k.morphAttributes.position;if(it!==void 0){const tt=k.morphTargetsRelative,At=F.morphTargetInfluences;for(let ut=0,Rt=it.length;ut<Rt;ut++){const Tt=At[ut];if(Tt===0)continue;const ht=it[ut];tt?(v+=ht.getX(dt/3)*Tt,N+=ht.getY(dt/3)*Tt,G+=ht.getZ(dt/3)*Tt):(v+=(ht.getX(dt/3)-Dt[dt])*Tt,N+=(ht.getY(dt/3)-Dt[dt+1])*Tt,G+=(ht.getZ(dt/3)-Dt[dt+2])*Tt)}}nt.pushVertex(v,N,G)}if(Z.normal!==void 0){const dt=Z.normal.array;for(let w=0,v=dt.length;w<v;w+=3)nt.pushNormal(dt[w],dt[w+1],dt[w+2])}if(Z.color!==void 0){const dt=Z.color.array;for(let w=0,v=dt.length;w<v;w+=3)nt.pushColor(dt[w],dt[w+1],dt[w+2])}if(Z.uv!==void 0){const dt=Z.uv.array;for(let w=0,v=dt.length;w<v;w+=2)nt.pushUv(dt[w],dt[w+1])}if(k.index!==null){const dt=k.index.array;if(ot.length>0)for(let w=0;w<ot.length;w++){const v=ot[w];if(X=at===!0?F.material[v.materialIndex]:F.material,X!==void 0)for(let N=v.start,G=v.start+v.count;N<G;N+=3)nt.pushTriangle(dt[N],dt[N+1],dt[N+2],X)}else for(let w=0,v=dt.length;w<v;w+=3)nt.pushTriangle(dt[w],dt[w+1],dt[w+2],X)}else if(ot.length>0)for(let dt=0;dt<ot.length;dt++){const w=ot[dt];if(X=at===!0?F.material[w.materialIndex]:F.material,X!==void 0)for(let v=w.start,N=w.start+w.count;v<N;v+=3)nt.pushTriangle(v,v+1,v+2,X)}else for(let dt=0,w=Dt.length/3;dt<w;dt+=3)nt.pushTriangle(dt,dt+1,dt+2,X)}else if(F.isLine){b.multiplyMatrices(P,m);const X=k.attributes;if(X.position!==void 0){const at=X.position.array;for(let Z=0,ot=at.length;Z<ot;Z+=3)nt.pushVertex(at[Z],at[Z+1],at[Z+2]);if(X.color!==void 0){const Z=X.color.array;for(let ot=0,Dt=Z.length;ot<Dt;ot+=3)nt.pushColor(Z[ot],Z[ot+1],Z[ot+2])}if(k.index!==null){const Z=k.index.array;for(let ot=0,Dt=Z.length;ot<Dt;ot+=2)nt.pushLine(Z[ot],Z[ot+1])}else{const Z=F.isLineSegments?2:1;for(let ot=0,Dt=at.length/3-1;ot<Dt;ot+=Z)nt.pushLine(ot,ot+1)}}}else if(F.isPoints){b.multiplyMatrices(P,m);const X=k.attributes;if(X.position!==void 0){const at=X.position.array;for(let Z=0,ot=at.length;Z<ot;Z+=3)M.set(at[Z],at[Z+1],at[Z+2],1),M.applyMatrix4(b),pt(M,F,I)}}else F.isSprite&&(F.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,F.matrixWorld),M.set(m.elements[12],m.elements[13],m.elements[14],1),M.applyMatrix4(P),pt(M,F,I))}return rt===!0&&p.elements.sort(et),p};function pt(J,I,O){const rt=1/J.w;J.z*=rt,J.z>=-1&&J.z<=1&&(f=Jt(),f.id=I.id,f.x=J.x*rt,f.y=J.y*rt,f.z=J.z,f.renderOrder=I.renderOrder,f.object=I,f.rotation=I.rotation,f.scale.x=I.scale.x*Math.abs(f.x-(J.x+O.projectionMatrix.elements[0])/(J.w+O.projectionMatrix.elements[12])),f.scale.y=I.scale.y*Math.abs(f.y-(J.y+O.projectionMatrix.elements[5])/(J.w+O.projectionMatrix.elements[13])),f.material=I.material,p.elements.push(f))}function Mt(){if(e===n){const J=new ug;return L.push(J),n++,e++,J}return L[e++]}function Ot(){if(r===o){const J=new Gi;return B.push(J),o++,r++,J}return B[r++]}function qt(){if(l===h){const J=new Ql;return $.push(J),h++,l++,J}return $[l++]}function ne(){if(u===d){const J=new th;return Y.push(J),d++,u++,J}return Y[u++]}function Jt(){if(x===g){const J=new eh;return K.push(J),g++,x++,J}return K[x++]}function et(J,I){return J.renderOrder!==I.renderOrder?J.renderOrder-I.renderOrder:J.z!==I.z?I.z-J.z:J.id!==I.id?J.id-I.id:0}function ct(J,I){let O=0,rt=1;const mt=J.z+J.w,y=I.z+I.w,U=-J.z+J.w,F=-I.z+I.w;return mt>=0&&y>=0&&U>=0&&F>=0?!0:mt<0&&y<0||U<0&&F<0?!1:(mt<0?O=Math.max(O,mt/(mt-y)):y<0&&(rt=Math.min(rt,mt/(mt-y))),U<0?O=Math.max(O,U/(U-F)):F<0&&(rt=Math.min(rt,U/(U-F))),rt<O?!1:(J.lerp(I,O),I.lerp(J,1-rt),!0))}}}class dg{constructor(){let t,e,n,s,r,o,a,l,h,c,u,d=0,f=null,x=1,g,m;const p=this,S=new Ic,M=new Ic,_=new Gt,A=new Gt,R=new Gt,C=new Gt,P=new Gt,b=new Gt,E=new D,L=new D,B=new D,$=new Xt,Y=new oe,K=new oe,q=[],nt=new fg,W=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=W,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=Le,this.info={render:{vertices:0,faces:0}},this.setQuality=function(O){switch(O){case"high":x=1;break;case"low":x=0;break}},this.setClearColor=function(O){b.set(O)},this.setPixelRatio=function(){},this.setSize=function(O,rt){s=O,r=rt,o=s/2,a=r/2,W.setAttribute("viewBox",-o+" "+-a+" "+s+" "+r),W.setAttribute("width",s),W.setAttribute("height",r),S.min.set(-o,-a),S.max.set(o,a)},this.getSize=function(){return{width:s,height:r}},this.setPrecision=function(O){f=O};function _t(){for(d=0;W.childNodes.length>0;)W.removeChild(W.childNodes[0])}function pt(O){return f!==null?O.toFixed(f):O}this.clear=function(){_t(),W.style.backgroundColor=b.getStyle(p.outputColorSpace)},this.render=function(O,rt){if(!(rt instanceof Ra)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}const mt=O.background;mt&&mt.isColor?(_t(),W.style.backgroundColor=mt.getStyle(p.outputColorSpace)):this.autoClear===!0&&this.clear(),p.info.render.vertices=0,p.info.render.faces=0,Y.copy(rt.matrixWorldInverse),K.multiplyMatrices(rt.projectionMatrix,Y),t=nt.projectScene(O,rt,this.sortObjects,this.sortElements),e=t.elements,n=t.lights,$.getNormalMatrix(rt.matrixWorldInverse),Mt(n),g="",m="";for(let y=0,U=e.length;y<U;y++){const F=e[y],k=F.material;if(!(k===void 0||k.opacity===0)){if(M.makeEmpty(),F instanceof eh)l=F,l.x*=o,l.y*=-a,qt(l,F,k);else if(F instanceof th)l=F.v1,h=F.v2,l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,M.setFromPoints([l.positionScreen,h.positionScreen]),S.intersectsBox(M)===!0&&ne(l,h,k);else if(F instanceof Ql){if(l=F.v1,h=F.v2,c=F.v3,l.positionScreen.z<-1||l.positionScreen.z>1||h.positionScreen.z<-1||h.positionScreen.z>1||c.positionScreen.z<-1||c.positionScreen.z>1)continue;l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,c.positionScreen.x*=o,c.positionScreen.y*=-a,this.overdraw>0&&(et(l.positionScreen,h.positionScreen,this.overdraw),et(h.positionScreen,c.positionScreen,this.overdraw),et(c.positionScreen,l.positionScreen,this.overdraw)),M.setFromPoints([l.positionScreen,h.positionScreen,c.positionScreen]),S.intersectsBox(M)===!0&&Jt(l,h,c,F,k)}}}J(),O.traverseVisible(function(y){if(y.isSVGObject){if(E.setFromMatrixPosition(y.matrixWorld),E.applyMatrix4(K),E.z<-1||E.z>1)return;const U=E.x*o,F=-E.y*a,k=y.node;k.setAttribute("transform","translate("+U+","+F+")"),W.appendChild(k)}})};function Mt(O){R.setRGB(0,0,0),C.setRGB(0,0,0),P.setRGB(0,0,0);for(let rt=0,mt=O.length;rt<mt;rt++){const y=O[rt],U=y.color;y.isAmbientLight?(R.r+=U.r,R.g+=U.g,R.b+=U.b):y.isDirectionalLight?(C.r+=U.r,C.g+=U.g,C.b+=U.b):y.isPointLight&&(P.r+=U.r,P.g+=U.g,P.b+=U.b)}}function Ot(O,rt,mt,y){for(let U=0,F=O.length;U<F;U++){const k=O[U],X=k.color;if(k.isDirectionalLight){const at=E.setFromMatrixPosition(k.matrixWorld).normalize();let Z=mt.dot(at);if(Z<=0)continue;Z*=k.intensity,y.r+=X.r*Z,y.g+=X.g*Z,y.b+=X.b*Z}else if(k.isPointLight){const at=E.setFromMatrixPosition(k.matrixWorld);let Z=mt.dot(E.subVectors(at,rt).normalize());if(Z<=0||(Z*=k.distance==0?1:1-Math.min(rt.distanceTo(at)/k.distance,1),Z==0))continue;Z*=k.intensity,y.r+=X.r*Z,y.g+=X.g*Z,y.b+=X.b*Z}}}function qt(O,rt,mt){let y=rt.scale.x*o,U=rt.scale.y*a;mt.isPointsMaterial&&(y*=mt.size,U*=mt.size);const F="M"+pt(O.x-y*.5)+","+pt(O.y-U*.5)+"h"+pt(y)+"v"+pt(U)+"h"+pt(-y)+"z";let k="";(mt.isSpriteMaterial||mt.isPointsMaterial)&&(k="fill:"+mt.color.getStyle(p.outputColorSpace)+";fill-opacity:"+mt.opacity),ct(k,F)}function ne(O,rt,mt){const y="M"+pt(O.positionScreen.x)+","+pt(O.positionScreen.y)+"L"+pt(rt.positionScreen.x)+","+pt(rt.positionScreen.y);if(mt.isLineBasicMaterial){let U="fill:none;stroke:"+mt.color.getStyle(p.outputColorSpace)+";stroke-opacity:"+mt.opacity+";stroke-width:"+mt.linewidth+";stroke-linecap:"+mt.linecap;mt.isLineDashedMaterial&&(U=U+";stroke-dasharray:"+mt.dashSize+","+mt.gapSize),ct(U,y)}}function Jt(O,rt,mt,y,U){p.info.render.vertices+=3,p.info.render.faces++;const F="M"+pt(O.positionScreen.x)+","+pt(O.positionScreen.y)+"L"+pt(rt.positionScreen.x)+","+pt(rt.positionScreen.y)+"L"+pt(mt.positionScreen.x)+","+pt(mt.positionScreen.y)+"z";let k="";U.isMeshBasicMaterial?(_.copy(U.color),U.vertexColors&&_.multiply(y.color)):U.isMeshLambertMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial?(A.copy(U.color),U.vertexColors&&A.multiply(y.color),_.copy(R),L.copy(O.positionWorld).add(rt.positionWorld).add(mt.positionWorld).divideScalar(3),Ot(n,L,y.normalModel,_),_.multiply(A).add(U.emissive)):U.isMeshNormalMaterial&&(B.copy(y.normalModel).applyMatrix3($).normalize(),_.setRGB(B.x,B.y,B.z).multiplyScalar(.5).addScalar(.5)),U.wireframe?k="fill:none;stroke:"+_.getStyle(p.outputColorSpace)+";stroke-opacity:"+U.opacity+";stroke-width:"+U.wireframeLinewidth+";stroke-linecap:"+U.wireframeLinecap+";stroke-linejoin:"+U.wireframeLinejoin:k="fill:"+_.getStyle(p.outputColorSpace)+";fill-opacity:"+U.opacity,ct(k,F)}function et(O,rt,mt){let y=rt.x-O.x,U=rt.y-O.y;const F=y*y+U*U;if(F===0)return;const k=mt/Math.sqrt(F);y*=k,U*=k,rt.x+=y,rt.y+=U,O.x-=y,O.y-=U}function ct(O,rt){m===O?g+=rt:(J(),m=O,g=rt)}function J(){g&&(u=I(d++),u.setAttribute("d",g),u.setAttribute("style",m),W.appendChild(u)),g="",m=""}function I(O){return q[O]==null&&(q[O]=document.createElementNS("http://www.w3.org/2000/svg","path"),x==0&&q[O].setAttribute("shape-rendering","crispEdges")),q[O]}}}function pg(i){if(!(new URLSearchParams(location.search).get("renderer")==="software"))try{const n=new hg({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});return n.setPixelRatio(Math.min(devicePixelRatio,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=gl,n.outputColorSpace=Le,n.toneMapping=xl,n.toneMappingExposure=1.1,n.setClearColor(0,0),{renderer:n,software:!1}}catch{}const e=new dg;return e.setQuality("low"),e.domElement.id="game",e.domElement.setAttribute("role","img"),e.domElement.setAttribute("aria-label","Underwater driving world"),i.replaceWith(e.domElement),{renderer:e,software:!0}}function nh(i){const t=[];i.traverse(n=>{n.isInstancedMesh&&!n.userData.softwareCopies&&t.push(n)});const e=new oe;for(const n of t){n.visible=!1;const s=[],r=new ie;r.position.copy(n.position),n.parent.add(r);for(let o=0;o<n.count;o++){const a=new Ke(n.geometry,n.material);a.renderOrder=n.renderOrder,n.getMatrixAt(o,e),e.decompose(a.position,a.quaternion,a.scale),r.add(a),s.push(a)}n.userData.softwareCopies=s}}function ai(i,t,e){e.updateMatrix(),i.setMatrixAt(t,e.matrix);const n=i.userData.softwareCopies?.[t];n&&(n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale),n.visible=e.scale.x>0)}const Ur=200411,Ba=2,gn=1800,Te=128,be=[{id:"conch",name:"Conch Street",x:-440,z:420,color:"#eec46f",accent:16032557},{id:"commons",name:"Restaurant Commons",x:-60,z:30,color:"#d6bf78",accent:14387314},{id:"fields",name:"Jellyfish Fields",x:-600,z:-180,color:"#b8c992",accent:15570889},{id:"lagoon",name:"Goo Lagoon",x:400,z:450,color:"#84c9b7",accent:7590342},{id:"wreck",name:"Wreck Cove",x:650,z:-140,color:"#c8b3a0",accent:13667944},{id:"ridge",name:"Sand Mountain",x:140,z:-650,color:"#e9bb8b",accent:15582361},{id:"neptune",name:"Neptune Terrace",x:-360,z:-630,color:"#a9c9cf",accent:8640466}],mg=[{id:"town-loop",width:24,closed:!0,points:[[-440,440],[-60,650],[400,500],[730,310],[700,-140],[450,-460],[140,-720],[-360,-710],[-700,-420],[-720,-100],[-570,210]]},{id:"conch-commons",width:20,points:[[-440,440],[-400,250],[-250,140],[-60,30]]},{id:"fields-commons",width:20,points:[[-720,-100],[-540,-130],[-310,-110],[-60,30]]},{id:"lagoon-commons",width:22,points:[[400,500],[330,300],[140,210],[-60,30]]},{id:"wreck-commons",width:22,points:[[700,-140],[490,-160],[280,-50],[-60,30]]},{id:"ridge-commons",width:20,points:[[140,-720],[210,-450],[80,-200],[-60,30]]},{id:"palace-commons",width:20,points:[[-360,-710],[-300,-460],[-180,-250],[-60,30]]}],Ls=[{id:"pineapple",type:"pineapple",x:-468,z:295,radius:21},{id:"squidward",type:"head",x:-386,z:350,radius:19},{id:"patrick",type:"rock",x:-335,z:390,radius:18},{id:"krusty",type:"krusty",x:-51,z:-85,radius:30},{id:"chum",type:"bucket",x:110,z:110,radius:25},{id:"goober",type:"goober",x:440,z:350,radius:32},{id:"wreck",type:"ship",x:765,z:-265,radius:35},{id:"castle",type:"castle",x:-400,z:-595,radius:45}],Ki=[{id:"conch-hop",x:-480,z:470,width:16,length:25,height:5,heading:.15},{id:"fields-leap",x:-590,z:-255,width:20,length:34,height:9,heading:-.5},{id:"lagoon-jump",x:515,z:440,width:20,length:32,height:7,heading:-Math.PI/2},{id:"wreck-launch",x:660,z:-60,width:18,length:30,height:9,heading:Math.PI},{id:"ridge-flight",x:130,z:-595,width:22,length:38,height:13,heading:0},{id:"ridge-return",x:300,z:-630,width:20,length:36,height:11,heading:Math.PI/2},{id:"palace-rise",x:-470,z:-670,width:18,length:28,height:7,heading:Math.PI/2},{id:"commons-stunt",x:-140,z:55,width:16,length:24,height:6,heading:Math.PI/2},{id:"southern-dune",x:20,z:610,width:22,length:34,height:8,heading:-Math.PI/2}],Is=[{id:"coral-grotto",name:"The coral grotto",x:-780,z:-340},{id:"pearl-garden",name:"The pearl garden",x:550,z:640},{id:"sunken-treasure",name:"Sunken treasure",x:800,z:-320},{id:"ridge-lookout",name:"The mountain lookout",x:310,z:-780},{id:"royal-garden",name:"The royal garden",x:-560,z:-780},{id:"kelp-arch",name:"The kelp arch",x:-760,z:290},{id:"sand-circle",name:"The sand circle",x:90,z:760}];function ih(i,t){let e=be[0],n=1/0;for(const s of be){const r=(i-s.x)**2+(t-s.z)**2;r<n&&(e=s,n=r)}return e}function gg(i,t,e){const n=i-e.x,s=t-e.z,r=Math.cos(e.heading),o=Math.sin(e.heading),a=r*n-o*s,l=o*n+r*s;return Math.abs(a)<e.width/2+8&&l<e.length/2+30&&l>-e.length/2-230}function vr(i="conch"){const t=be.find(o=>o.id===i)??be[0],e={conch:[-440,435,0],commons:[-60,90,0],fields:[-600,-130,Math.PI/2],lagoon:[400,510,0],wreck:[700,-100,0],ridge:[140,-740,Math.PI],neptune:[-360,-735,Math.PI]},[n,s,r]=e[t.id];return{x:n,z:s,heading:r}}const Jn=(i,t,e)=>i+(t-i)*e,Se=(i,t,e)=>Math.max(t,Math.min(e,i)),Ds=i=>i*i*(3-2*i);function Me(i,t,e=0){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(Ur+e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Mr(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=Ds(i-n),o=Ds(t-s);return Jn(Jn(Me(n,s,e),Me(n+1,s,e),r),Jn(Me(n,s+1,e),Me(n+1,s+1,e),r),o)*2-1}function Tr(i,t){const e=43*Math.exp(-((i-140)**2/9e4+(t+650)**2/42e3)),n=22*Math.exp(-((i+360)**2+(t+620)**2)/85e3),s=22*Ds(Se((Math.max(Math.abs(i),Math.abs(t))-780)/120,0,1));return 3+Mr(i/230,t/230)*6+Mr(i/73,t/73,71)*2.5+Mr(i/24,t/24,19)*.55+e+n+s}function xg(i,t,e,n,s){const r=s*s,o=r*s;return[0,1].map(a=>.5*(2*t[a]+(-i[a]+e[a])*s+(2*i[a]-5*t[a]+4*e[a]-n[a])*r+(-i[a]+3*t[a]-3*e[a]+n[a])*o))}const In=mg.map(i=>{const t=i.points,e=t.length,n=[],s=l=>i.closed?t[(l+e)%e]:t[Se(l,0,e-1)],r=i.closed?e:e-1;for(let l=0;l<r;l++){const h=Math.ceil(Math.hypot(s(l+1)[0]-s(l)[0],s(l+1)[1]-s(l)[1])/9);for(let c=0;c<h;c++)n.push(xg(s(l-1),s(l),s(l+1),s(l+2),c/h))}n.push(i.closed?n[0]:t[e-1]);let o=0;const a=n.map(([l,h],c)=>(c&&(o+=Math.hypot(l-n[c-1][0],h-n[c-1][1])),{x:l,z:h,y:Tr(l,h),distance:o}));return{...i,nodes:a,length:o}}),yr=new Map,Oi=64,sh=[];for(const i of In)for(let t=1;t<i.nodes.length;t++){const e=i.nodes[t-1],n=i.nodes[t],s={a:e,b:n,width:i.width,path:i.id};sh.push(s);for(let r=Math.floor((Math.min(e.x,n.x)-42)/Oi);r<=Math.floor((Math.max(e.x,n.x)+42)/Oi);r++)for(let o=Math.floor((Math.min(e.z,n.z)-42)/Oi);o<=Math.floor((Math.max(e.z,n.z)+42)/Oi);o++){const a=`${r},${o}`;yr.has(a)||yr.set(a,[]),yr.get(a).push(s)}}function Dn(i,t,e=!1){let n={distance:1/0,x:i,z:t,y:Tr(i,t),width:20,heading:0};const s=e?sh:yr.get(`${Math.floor(i/Oi)},${Math.floor(t/Oi)}`)??[];for(const r of s){const o=r.b.x-r.a.x,a=r.b.z-r.a.z,l=o*o+a*a,h=Se(((i-r.a.x)*o+(t-r.a.z)*a)/(l||1),0,1),c=r.a.x+o*h,u=r.a.z+a*h,d=Math.hypot(c-i,u-t);d<n.distance&&(n={distance:d,x:c,z:u,y:Jn(r.a.y,r.b.y,h),width:r.width,heading:Math.atan2(-o,-a)})}return n}function Bi(i,t){let e=Tr(i,t);const n=Dn(i,t);n.distance<n.width/2+20&&(e=Jn(n.y,e,Ds(Se((n.distance-n.width/2)/20,0,1))));for(const s of Ls){const r=Math.hypot(i-s.x,t-s.z);r<s.radius+18&&(e=Jn(Tr(s.x,s.z),e,Ds(Se((r-s.radius)/18,0,1))))}return e}function $t(i,t){const e=Math.floor(i/4)*4,n=Math.floor(t/4)*4,s=(i-e)/4,r=(t-n)/4,o=Bi(e,n),a=Bi(e+4,n),l=Bi(e,n+4),h=Bi(e+4,n+4);return s+r<=1?o+(a-o)*s+(l-o)*r:h+(l-h)*(1-s)+(a-h)*(1-r)}function ka(i,t,e){const n=i-e.x,s=t-e.z,r=Math.cos(e.heading??0),o=Math.sin(e.heading??0),a=r*n-o*s,l=o*n+r*s;return Math.abs(a)>e.width/2||Math.abs(l)>e.length/2?null:e.baseY+e.height*(.5-l/e.length)}function rh(i,t){const e=ih(i,t),n=Mr(i/38,t/38,128)*.055;return{conch:[.86,.72,.43],commons:[.83,.73,.48],fields:[.64,.73,.5],lagoon:[.75,.79,.55],wreck:[.65,.65,.57],ridge:[.84,.65,.44],neptune:[.69,.76,.69]}[e.id].map(r=>Se(r+n,0,1))}function _g(i,t,e=0){return Math.abs(i)<=gn/2-e&&Math.abs(t)<=gn/2-e}const Ha=[{id:"conch-yard",area:"conch",kind:"yard",x:-462,z:360,heading:0,label:"CONCH POST"},{id:"conch-corner",area:"conch",kind:"stop",x:-516,z:426,heading:.55,label:"CONCH STREET"},{id:"commons-market",area:"commons",kind:"market",x:-122,z:-43,heading:.25,label:"REEF MARKET"},{id:"commons-patio",area:"commons",kind:"patio",x:24,z:-25,heading:-.15},{id:"commons-stop",area:"commons",kind:"stop",x:-105,z:129,heading:.5,label:"RESTAURANT ROW"},{id:"fields-rest",area:"fields",kind:"patio",x:-646,z:-180,heading:.2},{id:"lagoon-patio",area:"lagoon",kind:"patio",x:461,z:408,heading:-.3},{id:"lagoon-stall",area:"lagoon",kind:"market",x:345,z:440,heading:-.1,label:"SHELL SNACKS"},{id:"lagoon-dock",area:"lagoon",kind:"dock",x:535,z:545,heading:.55,label:"LAGOON LANDING"},{id:"wreck-workshop",area:"wreck",kind:"workshop",x:641,z:-191,heading:.55,label:"BOAT REPAIR"},{id:"wreck-dock",area:"wreck",kind:"dock",x:757,z:-201,heading:.2,label:"COVE LANDING"},{id:"ridge-rest",area:"ridge",kind:"stop",x:87,z:-692,heading:-.2,label:"MOUNTAIN TRAIL"},{id:"palace-patio",area:"neptune",kind:"patio",x:-464,z:-585,heading:.2},{id:"palace-stall",area:"neptune",kind:"market",x:-305,z:-600,heading:-.2,label:"PEARL EXCHANGE"}];function oh(i){return i.kind==="dock"?17:13}const Nn=[{id:"tide-garden",name:"Tidepool Gardens",kind:"pools",x:655,z:665,radius:38,bends:[[590,495],[610,555],[640,605]],color:7917256},{id:"salvage-yard",name:"Anchor Salvage Yard",kind:"yard",x:805,z:100,radius:35,bends:[],color:14131823},{id:"shell-ruins",name:"Old Shell Sanctuary",kind:"ruins",x:-450,z:-410,radius:40,bends:[[-340,-400],[-450,-460]],color:12169180}],Ms=Nn.map(i=>{const t=Dn(i.x,i.z,!0),e=[[t.x,t.z],...i.bends,[i.x,i.z]],n=[];for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r],l=Math.ceil(Math.hypot(a[0]-o[0],a[1]-o[1])/4);for(let h=0;h<l;h++){const c=h/l,u=o[0]+(a[0]-o[0])*c,d=o[1]+(a[1]-o[1])*c;n.push({x:u,z:d,y:$t(u,d)})}}n.push({x:i.x,z:i.z,y:$t(i.x,i.z)});let s=0;return n.forEach((r,o)=>{o&&(s+=Math.hypot(r.x-n[o-1].x,r.z-n[o-1].z)),r.distance=s}),{id:i.id,name:i.name,width:12,nodes:n,points:e,length:s}});function ah(i,t){let e=1/0;for(const n of Ms)for(let s=1;s<n.points.length;s++){const r=n.points[s-1],o=n.points[s],a=o[0]-r[0],l=o[1]-r[1],h=Math.max(0,Math.min(1,((i-r[0])*a+(t-r[1])*l)/(a*a+l*l||1)));e=Math.min(e,Math.hypot(i-r[0]-a*h,t-r[1]-l*h))}return e}function sl(i,t,e=1){const n=Math.max(0,Math.min(i.length,t));let s=1,r=i.nodes.length-1;for(;s<r;){const f=s+r>>1;i.nodes[f].distance<n?s=f+1:r=f}const o=i.nodes[s-1],a=i.nodes[s],l=(n-o.distance)/(a.distance-o.distance||1),h=a.x-o.x,c=a.z-o.z,u=Math.hypot(h,c)||1,d=(i.width/2+3)*e;return{x:o.x+h*l+c/u*d,z:o.z+c*l-h/u*d,heading:Math.atan2(h,c)}}const vg=[...Ls,...Nn,...Ha.map(i=>({...i,radius:oh(i)-2}))].map(i=>({...i,road:Dn(i.x,i.z,!0)}));function Mg(i,t){let e=0;for(const n of vg){const s=n.road.x-n.x,r=n.road.z-n.z,o=Se(((i-n.x)*s+(t-n.z)*r)/(s*s+r*r||1),0,1),a=Math.hypot(i-n.x-s*o,t-n.z-r*o),l=Math.hypot(i-n.x,t-n.z);e=Math.max(e,Se((5-a)/2,0,1),Se((n.radius+7-l)/4,0,1))}return e}const yg=[.0802,.2423,.2582],Mo=i=>i<=.0031308?i*12.92:1.055*i**(1/2.4)-.055;function ch(i,t){const e=rh(i,t),n=Dn(i,t),s=Se((n.width/2+1-n.distance)/2,0,1),r=.98+Me(Math.floor(i*2),Math.floor(t*2),51)*.04,o=Math.max(Mg(i,t),Se((7-ah(i,t))/2,0,1)),a=Se(1-Math.abs(n.distance-n.width/2)/3,0,1),l=Number.isFinite(n.distance)?Math.sin(n.distance*1.8)*.018:0;return e.map((h,c)=>{const u=Jn(h,[.63,.57,.4][c],o*.65);return Jn(u,yg[c]+l+a*.1,s)*r})}function Sg(i,t,e=128,n=65){const s=new Uint8Array(n*n*4);for(let r=0;r<n;r++)for(let o=0;o<n;o++){const a=ch(i+o/(n-1)*e,t+r/(n-1)*e),l=(r*n+o)*4;s[l]=Math.round(Se(Mo(a[0]),0,1)*255),s[l+1]=Math.round(Se(Mo(a[1]),0,1)*255),s[l+2]=Math.round(Se(Mo(a[2]),0,1)*255),s[l+3]=255}return{pixels:s,resolution:n}}const lh=[{id:"conch-water",kind:"tower",x:-550,z:360,radius:13,label:"CONCH WATER"},{id:"fields-observatory",kind:"observatory",x:-615,z:-340,radius:14,label:"JELLY WATCH"},{id:"commons-sign",kind:"billboard",x:30,z:-195,radius:12,label:"FRESH PATTIES"},{id:"lagoon-boardwalk",kind:"boardwalk",x:575,z:620,radius:33,label:"LAGOON WALK"},{id:"wreck-beacon",kind:"beacon",x:550,z:-290,radius:12,label:"COVE BEACON"},{id:"ridge-crane",kind:"crane",x:310,z:-550,radius:16,label:"SAND WORKS"},{id:"royal-fountain",kind:"fountain",x:-520,z:-565,radius:12,label:"PEARL COURT"}];function rl(i,t){return{x:(i+.15+Me(i,t,24)*.7)*18,z:(t+.15+Me(i,t,25)*.7)*18,priority:Me(i,t,26)}}function Eg(i,t){const e=rl(i,t);for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(!n&&!s)continue;const r=rl(i+n,t+s);if(r.priority<e.priority&&Math.hypot(e.x-r.x,e.z-r.z)<12)return null}return e}function ol(i,t,e=32){const n=(e+1)**2,s=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n*2),a=new Uint32Array(e*e*6),l=i*Te,h=t*Te,c=Te/e;for(let x=0;x<=e;x++)for(let g=0;g<=e;g++){const m=(x*(e+1)+g)*3,p=l+g*c,S=h+x*c;o.set([p/28,S/28],m/3*2),s.set([g*c,Bi(p,S),x*c],m),r.set(rh(p,S),m)}let u=0;for(let x=0;x<e;x++)for(let g=0;g<e;g++){const m=x*(e+1)+g,p=m+1,S=m+e+1,M=S+1;a.set([m,S,p,p,S,M],u),u+=6}const d=[];for(let x=Math.floor(l/18);x<=Math.floor((l+Te)/18);x++)for(let g=Math.floor(h/18);g<=Math.floor((h+Te)/18);g++){const m=Eg(x,g);if(!m||m.x<l||m.x>=l+Te||m.z<h||m.z>=h+Te||!_g(m.x,m.z,15))continue;const p=Dn(m.x,m.z);if(Ki.some(A=>gg(m.x,m.z,A))||Is.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<23)||Ha.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<oh(A)+6)||lh.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+8)||Nn.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+7)||ah(m.x,m.z)<14||p.distance<p.width/2+9||Ls.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+8))continue;const S=ih(m.x,m.z),M=Me(x,g,39),_=S.id==="wreck"?M<.45?"rock":"coral":S.id==="fields"?M<.55?"coral":"kelp":M<.22?"rock":M<.56?"kelp":"coral";_!=="rock"&&Me(x,g,903)>=.35||d.push({id:`flora:${x}:${g}`,x:m.x,y:$t(m.x,m.z),z:m.z,type:_,rotation:Me(x,g,40)*Math.PI*2,scale:.7+Me(x,g,41)*1.8,color:Math.floor(Me(x,g,42)*3)})}const f=Sg(l,h);return{cx:i,cz:t,segments:e,positions:s,colors:r,uv:o,indices:a,props:d,paint:f.pixels,paintSize:f.resolution}}function al(i,t=4){const e=[];for(let a=1;a<i.nodes.length;a++){const l=i.nodes[a-1],h=i.nodes[a],c=Math.ceil(Math.hypot(h.x-l.x,h.z-l.z)/t);for(let u=0;u<c;u++){const d=u/c;e.push({x:l.x+(h.x-l.x)*d,z:l.z+(h.z-l.z)*d})}}e.push(i.nodes.at(-1));const n=Math.ceil(i.width/t),s=[],r=[];e.forEach((a,l)=>{const h=e[Math.max(0,l-1)],c=e[Math.min(e.length-1,l+1)],u=c.x-h.x,d=c.z-h.z,f=Math.hypot(u,d)||1;for(let x=0;x<=n;x++){const g=(x/n-.5)*i.width,m=a.x+d/f*g,p=a.z-u/f*g;s.push(m,$t(m,p)+.25,p)}if(l)for(let x=0;x<n;x++){const g=(l-1)*(n+1)+x,m=g+n+1;r.push(g,m,g+1,g+1,m,m+1)}});const o=new ye;return o.setAttribute("position",new te(s,3)),o.setIndex(r),o.computeVertexNormals(),o.computeBoundingSphere(),o}class cl{constructor(t=48){this.size=t,this.cells=new Map}key(t,e){return`${Math.floor(t/this.size)},${Math.floor(e/this.size)}`}add(t){const e=[],n=Math.max(t.w??0,t.d??0,t.radius??0)/2;for(let s=Math.floor((t.x-n)/this.size);s<=Math.floor((t.x+n)/this.size);s++)for(let r=Math.floor((t.z-n)/this.size);r<=Math.floor((t.z+n)/this.size);r++){const o=`${s},${r}`;this.cells.has(o)||this.cells.set(o,new Set),this.cells.get(o).add(t),e.push(o)}t.hashKeys=e}remove(t){for(const e of t.hashKeys??[]){const n=this.cells.get(e);n?.delete(t),n?.size||this.cells.delete(e)}}query(t,e,n=8){const s=new Set;for(let r=Math.floor((t-n)/this.size);r<=Math.floor((t+n)/this.size);r++)for(let o=Math.floor((e-n)/this.size);o<=Math.floor((e+n)/this.size);o++)for(const a of this.cells.get(`${r},${o}`)??[])s.add(a);return s}}function ga(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ye;let h=0;for(let c=0;c<i.length;++c){const u=i[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+c);c+=i[d].attributes.position.count}l.setIndex(u)}for(const c in r){const u=ll(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<o[c].length;++g)f.push(o[c][g][d]);const x=ll(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(x)}}return l}function ll(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new Ue(o,e,n);let l=0;for(let h=0;h<i.length;++h){const c=i[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=c.count;d<f;d++)for(let x=0;x<e;x++){const g=c.getComponent(d,x);a.setComponent(d+u,x,g)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}const yo=new Map,So=new Map,hh={value:0},Ie=Math.PI*2,bg=i=>Math.min(1,Math.max(0,i)),wg=(i,t,e=0)=>{let n=Math.imul(i+e,374761393)^Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function Tg(i,t,e){t=(t%1+1)%1,e=(e%1+1)%1;const n=Math.sin(Ie*(t*71+e*53))*.015,s=Math.sin(Ie*t*3)*Math.cos(Ie*e*4);let r,o;if(i==="wood"){const a=t*6,l=Math.min(a%1,1-a%1)<.023,h=Math.sin(Ie*(t*58+Math.sin(e*Ie*2)*.22)),c=Math.sin(Ie*(t*7+Math.sin(e*Ie)*.35));r=l?.15:.56+h*.045+c*.03,o=l?.48:.91+h*.045+c*.04+s*.04}else if(i==="stone"){const a=Math.floor(e*6),l=(t*5+a%2*.5)%1,h=Math.min(l,1-l)<.018||e*6%1<.035;r=h?.27:.6+s*.055+n,o=h?.68:.92+s*.08+n}else if(i==="metal"){const a=Math.sin(Ie*t*115)*Math.sin(Ie*e*3),l=Math.max(0,s-.3);r=.5+a*.012+n*.3,o=.95+a*.025-l*.13}else if(i==="bun"){const a=Math.sin(Ie*t*47)*Math.sin(Ie*e*41);r=.5+a*.038+s*.02,o=.96+s*.055+a*.018}else if(i==="rubber"){const a=Math.sin(Ie*(t*18+Math.sin(e*Ie*8)*.18));r=a>.4?.66:.39,o=a>.4?1:.75}else if(i==="cloth"){const a=Math.sin(Ie*t*90)*Math.sin(Ie*e*90);r=.5+a*.015,o=.96+a*.035+s*.02}else{const a=Math.sin(Ie*e*16+Math.sin(Ie*t*4)*1.7);r=.5+a*.12+n*.2,o=.94+a*.04+s*.02}return{height:r,shade:o}}function uh(i,t=512){const e=`${i}:${t}`;if(yo.has(e))return yo.get(e);const n=new Uint8Array(t*t*4),s=new Uint8Array(t*t*4),r=new Float32Array(t*t);for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=h*t+c,d=Tg(i,c/t,h/t);r[u]=d.height;const f=Math.round(bg(d.shade+(wg(c,h,57)-.5)*.045)*255);n.set([f,f,f,255],u*4)}const o=(h,c)=>r[(c+t)%t*t+(h+t)%t];for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=(o(c+1,h)-o(c-1,h))*2,d=(o(c,h+1)-o(c,h-1))*2,f=Math.hypot(u,d,1),x=(h*t+c)*4;s.set([Math.round((-u/f*.5+.5)*255),Math.round((-d/f*.5+.5)*255),Math.round((1/f*.5+.5)*255),255],x)}const a=(h,c)=>{const u=new Pa(h,t,t,Ze);return u.colorSpace=c,u.wrapS=u.wrapT=ys,u.magFilter=Je,u.minFilter=qn,u.generateMipmaps=!0,u.anisotropy=4,u.needsUpdate=!0,u},l={color:a(n,Le),normal:a(s,Pn)};return yo.set(e,l),l}function fh(i,t=!1){const e=i.onBeforeCompile;return i.onBeforeCompile=(n,s)=>{e.call(i,n,s),n.uniforms.waterTime=hh,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 waterPosition;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
waterPosition = (modelMatrix * vec4(position, 1.0)).xyz;`),t&&(n.vertexShader=n.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_NORMALMAP
 vNormalMapUv = (modelMatrix * vec4(position,1.0)).xz / 12.0;
#endif`)),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float waterTime;
varying vec3 waterPosition;`),n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`float waterA = sin(waterPosition.x * 0.72 + sin(waterPosition.z * 0.58 + waterTime * 0.33));
       float waterB = sin(waterPosition.z * 0.86 - sin(waterPosition.x * 0.51 - waterTime * 0.26));
       float waterLines = pow(clamp(1.0 - abs(waterA + waterB) * 0.5, 0.0, 1.0), 12.0);
       outgoingLight *= 0.98 + waterLines * 0.11;
       #include <opaque_fragment>`)},i.customProgramCacheKey=()=>`water-surface-v2:${t}`,i}function Ag(i){hh.value=i}function Qt(i,t=16777215){const e=`${i}:${t}`;if(So.has(e))return So.get(e);const n=uh(i),s={wood:[13,.2],stone:[5,.42],metal:[55,.16],bun:[10,.24],rubber:[4,.38],cloth:[3,.18],sand:[5,.35]}[i]??[10,.2],r=new Ir({color:t,map:n.color,normalMap:n.normal,normalScale:new ft(s[1],s[1]),shininess:s[0],specular:i==="metal"?7642265:2370342,side:ke});return r.userData.surface=i,fh(r),So.set(e,r),r}const Eo=new Map;function ln(i,t=!1,e=1){const n=`${i}:${t}:${e}`;return Eo.has(n)||Eo.set(n,new(t?Cr:Ir)({color:i,transparent:e<1,opacity:e,side:ke,...t?{}:{shininess:14,specular:3161142}})),Eo.get(n)}const Rg=new _i(1,1,1),Cg=new vn(1,20,12),Pg=new jn(1,1,1,16);function Kt(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){const h=new Ke(t,typeof e=="number"?ln(e):e);return h.position.set(n,s,r),h.scale.set(o,a,l),h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function Nr(i,t=null){const e=new Set([11434323,8873281,14533514,8149318,10647889,13215092,9465685,6442310,8942677,10845528,10976592]),n=new Set([8890542,5270393,12437176,9214885,15259289,9021870,7639700,5468020,4812400,7970199,15262396]),s=new Set([15246664,16039003]);return i.traverse(r=>{if(!r.isMesh||!r.material.color||r.material.map||r.material.transparent)return;const o=r.material.color.getHex(),a=s.has(o)?"bun":e.has(o)?"wood":n.has(o)?"metal":[2503747,3491417,3427154].includes(o)?"rubber":t;a&&(r.material=Qt(a,o))}),i}function xn(i){i.updateMatrixWorld(!0);const t=i.matrixWorld.clone().invert(),e=new Map;i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;const s=n.material.uuid;e.has(s)||e.set(s,{material:n.material,geometries:[]});const r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();r.applyMatrix4(new oe().multiplyMatrices(t,n.matrixWorld)),e.get(s).geometries.push(r)}),i.clear();for(const{material:n,geometries:s}of e.values()){const r=ga(s);s.forEach(o=>o.dispose()),r&&Kt(i,r,n)}return i}const st=(i,t,e,n,s,r,o,a)=>Kt(i,Rg,a,t,e,n,s,r,o),Lt=(i,t,e,n,s,r,o,a)=>Kt(i,Cg,a,t,e,n,s,r,o),Nt=(i,t,e,n,s,r,o)=>Kt(i,Pg,o,t,e,n,s,r,s);function pe(i,t,e,n,s,r,o){return Kt(i,new is(s,r,5,20),o,t,e,n)}function bo(i,t,e,n=1){return Kt(i,new Fa(t.map(([s,r])=>new ft(s,r)),24),e,0,0,0,1,1,n)}function ki(i,t,e,n,s=.2){Lt(i,t,e,n,s,s*1.14,s*.4,16777200),Lt(i,t,e,n-s*.35,s*.48,s*.56,s*.2,1849414)}function Lg(){const i=new ie;i.name="Hamburger wagon",bo(i,[[0,.58],[1.85,.58],[2.22,.74],[2.26,.95],[2.08,1.09],[0,1.09]],15246664,1.14),bo(i,[[0,1.08],[2.12,1.08],[2.25,1.16],[2.21,1.39],[2.07,1.46],[0,1.46]],7814183,1.14);const t=new es;for(let c=0;c<=64;c++){const u=c/64*Math.PI*2,d=2.24+Math.sin(u*11)*.16,f=Math.cos(u)*d,x=Math.sin(u)*d*1.13;c?t.lineTo(f,x):t.moveTo(f,x)}const e=Kt(i,new Os(t),7780404,0,1.49,0);e.rotation.x=-Math.PI/2;for(let c=0;c<8;c++){const u=c*Math.PI/4;Lt(i,Math.cos(u)*2.15,1.49,Math.sin(u)*2.42,.38,.11,.33,c%2?6858802:10143043)}const n=st(i,0,1.54,0,3.62,.12,4.04,16765256);n.rotation.y=.21,bo(i,[[2.23,1.65],[2.24,1.85],[2.12,2.18],[1.89,2.49],[1.47,2.66],[1.22,2.63],[1.18,2.4],[1.37,2.12],[1.65,1.85]],16039003,1.13);for(let c=0;c<42;c++){const u=c*2.39996,d=1.42+c%6*.125,f=2.67-(d-1.43)*.72,x=Lt(i,Math.cos(u)*d,f,Math.sin(u)*d*1.13,.095,.032,.045,16770723);x.rotation.y=u+.8}const s=[];for(const c of[-2.23,2.23])for(const u of[-1.37,1.37]){const d=new ie;d.position.set(c,.73,u),i.add(d);const f=Nt(d,0,0,0,.73,.48,2503747);f.rotation.z=Math.PI/2;const x=Nt(d,Math.sign(c)*.27,0,0,.38,.08,15262396);x.rotation.z=Math.PI/2;const g=Nt(d,Math.sign(c)*.32,0,0,.17,.1,13332795);g.rotation.z=Math.PI/2,s.push({mesh:d,front:u<0})}for(const c of[-.65,.65])st(i,c,1.77,.1,.78,.18,.9,9980728),st(i,c,2.11,.49,.78,.72,.18,11228218);const r=new ie;r.position.set(-.64,2.16,.1),i.add(r),st(r,0,.61,0,.89,.89,.39,16045896),st(r,0,.09,0,.86,.19,.41,16777215),st(r,0,-.09,0,.86,.19,.43,9528370),ki(r,-.21,.72,-.23,.18),ki(r,.21,.72,-.23,.18),Lt(r,0,.51,-.33,.09,.12,.15,16108868),st(r,0,.25,-.24,.13,.17,.04,13978937);for(const c of[-.31,.3])Lt(r,c,.25,-.2,.07,.07,.03,14255415),Lt(r,c,.89,-.2,.055,.045,.02,13216813);st(r,-.1,.38,-.22,.09,.09,.05,16777215),st(r,.1,.38,-.22,.09,.09,.05,16777215);const o=new ie;o.position.set(.61,2.09,.13),i.add(o),Lt(o,0,.31,0,.48,.54,.28,15702173),Kt(o,new rn(.32,.86,10),15702173,0,.86,0,1,1,.86),ki(o,-.11,.71,-.27,.11),ki(o,.11,.71,-.27,.11),Lt(o,-.45,.3,0,.29,.13,.17,15702173),Lt(o,.45,.3,0,.29,.13,.17,15702173),st(o,0,-.03,0,.72,.27,.47,9549910);const a=pe(i,-.64,2.16,-.56,.31,.05,5719348);a.rotation.x=-.62;for(const c of[-1.45,1.45])Lt(i,c,1.24,-2.45,.28,.22,.12,16773303);Nt(i,1.54,3.02,1.68,.045,2.65,10910265);const l=st(i,1.76,4.06,1.68,.85,.34,.11,8239682);l.rotation.z=-.2;const h=new ie;h.position.set(0,1.02,2.73),i.add(h);for(let c=0;c<3;c++){const u=st(h,0,.3,0,.13,.77,.11,15065004);u.rotation.z=c*Math.PI*2/3}return Lt(h,0,0,.1,.17,.17,.14,13335616),i.userData={wheels:s,propeller:h},Nr(i)}function we(i,t,e,n,s,r=20,o="#bf4e43"){if(typeof document>"u")return;const a=document.createElement("canvas");a.width=1024,a.height=256;const l=a.getContext("2d");l.fillStyle=o,l.fillRect(0,0,1024,256),l.strokeStyle="#fff1bd",l.lineWidth=12,l.strokeRect(16,16,992,224),l.strokeStyle="#ffffff35",l.lineWidth=2,l.strokeRect(29,29,966,198),l.fillStyle="#fff3cd",l.textAlign="center",l.textBaseline="middle",l.shadowColor="#182d36",l.shadowBlur=3,l.shadowOffsetY=3,l.font="bold 84px sans-serif",l.fillText(t,512,135,932);const h=new Nl(a);h.colorSpace=Le,h.anisotropy=4;const c=new Ir({map:h,side:ke,shininess:10});Kt(i,new ns(r,r/4),c,e,n,s)}function xs(i,t,e,n,s=2.2){pe(i,t,e,n,s,.3,Qt("metal",15259289));const r=Nt(i,t,e,n-.08,s-.25,.13,7127490);r.rotation.x=Math.PI/2;const o=Nt(i,t,e,n+.01,s*.56,.14,2583164);o.rotation.x=Math.PI/2,Lt(i,t-s*.25,e+s*.27,n+.1,s*.14,s*.26,.035,13300187)}function dh(i,t,e,n,s,r,o){Nt(i,t,e,n,s,r,o),pe(i,t,e+r/2,n,s+.08,.17,o).rotation.x=Math.PI/2}function Ig(i){const t=new ie;if(t.name=i,i==="pineapple"){Lt(t,0,12,0,10.8,14,10.3,15309364);for(let e=0;e<9;e++)for(let n=0;n<12;n++){const s=3+e*2.45,r=n*Math.PI/6+e%2*Math.PI/12,o=10.5*Math.sqrt(Math.max(.05,1-((s-12)/14)**2)),a=st(t,Math.sin(r)*o,s,Math.cos(r)*o,1.8,.16,.21,16169547);a.rotation.y=r,a.rotation.z=(n%2?1:-1)*.6}for(let e=0;e<11;e++){const n=e*Math.PI*2/11,s=new es;s.moveTo(-1.2,0),s.quadraticCurveTo(-2.2,5,0,13),s.quadraticCurveTo(2.6,5,1.2,0),s.closePath();const r=Kt(t,new Os(s),e%2?4560204:7648843,Math.sin(n)*2,24,Math.cos(n)*2);r.rotation.y=n,r.rotation.x=.3+e%3*.18}Lt(t,0,3,10.1,2.6,3.4,.5,6066846),pe(t,0,3,10.7,2.1,.28,13095594),st(t,0,3,10.8,.22,4,.12,11258311),st(t,0,3,10.8,4,.22,.12,11258311),xs(t,-5.5,11,8.8,2),xs(t,5,18,8.1,1.8),dh(t,9,17,1,.8,6,9021870);for(let e=11;e<25;e+=3)st(t,0,.15,e,7,.3,2.6,14930854)}else if(i==="head"){Lt(t,0,10,0,8.9,13,7.5,6917275),st(t,0,8,5.9,9,15,2.4,6983070);for(const e of[-3.1,3.1])Lt(t,e,15,6.7,2.5,1.65,.9,4550272),st(t,e,17.1,7.1,5.4,1.2,2.5,7708331),xs(t,e,15,7.6,1.5);st(t,0,11.4,8.2,2.3,8.8,4.6,8298925),Lt(t,0,3,7.3,2.2,3.2,.5,3561067),st(t,0,21,0,12.4,1.4,12,9416371)}else if(i==="rock")Kt(t,new vn(1,18,8,0,Math.PI*2,0,Math.PI/2),9861753,0,0,0,13,8,12),Nt(t,0,.2,0,14,.4,13614993),st(t,0,.5,14,2.5,.5,7,11112829),Lt(t,-6,.2,14,1.4,.3,1,14993541);else if(i==="krusty"){st(t,0,5,0,32,10,23,11434323);const e=Kt(t,new jn(1,1,1,18,1,!1,0,Math.PI),8873281,0,10,0,15,35,15);e.rotation.z=Math.PI/2;for(let n=-15;n<=15;n+=5)st(t,n,5,12,.8,10,.9,14533514),st(t,n,5,-12,.8,10,.9,14533514);for(const n of[-10,10])st(t,n,5.6,12.2,7.9,6.7,.2,9225915),st(t,n,5.6,12.5,.24,6.7,.22,14997158),st(t,n,5.6,12.5,7.9,.24,.22,14997158);st(t,0,3.5,12.3,4.2,7,.4,4955034),we(t,"KRUSTY KRAB",0,12.5,14,22,"#8b523d"),Nt(t,-25,12,10,.6,24,14469771),Lt(t,-25,24,10,6.7,4,1.4,14922673),we(t,"KRAB",-25,24,11.5,9,"#b76c76");for(let n=0;n<5;n++){const s=st(t,-12+n*6,18.5,6,2.6,2.4,.12,[15978586,13661023,6463166,7908492,15324585][n]);s.rotation.z=.15}}else if(i==="bucket"){Kt(t,new jn(12,10,20,20),8890542,0,10,0),Nt(t,0,.6,0,10.6,1.2,5270393);for(const n of[1,19.3])pe(t,0,n,0,n<2?10.7:12.3,.6,12437176).rotation.x=Math.PI/2;const e=Kt(t,new is(14,.65,6,24,Math.PI),9214885,0,19,0);e.rotation.z=0,st(t,0,4,10.8,5.7,8,.4,3362406),we(t,"CHUM BUCKET",0,14,11.8,19,"#9c463c")}else if(i==="goober"){Lt(t,0,7,0,24,8,18,9856135),st(t,0,6,13,24,12,1,14919080);for(const n of[-8,0,8])Lt(t,n,5,14,3.2,4.7,.5,7258306);we(t,"GOOFY GOOBER",0,13,17,27,"#7e4276");const e=Kt(t,new rn(5,15,12),13803110,0,22,-2);e.rotation.z=Math.PI,Lt(t,0,31,-2,7,7,6,16105675),Lt(t,-4,29,-2,4,4,4,16049340),Lt(t,4,29,-2,4,4,4,10253400),Lt(t,0,37,-2,1.7,1.8,1.7,13849443)}else if(i==="ship"){const e=new ie;e.rotation.z=-.12,t.add(e),Lt(e,0,6,0,18,10,31,8149318),st(e,0,12,0,29,1.2,51,10647889);for(let n=-26;n<28;n+=4)st(e,0,13,n,29,.25,.4,13215092);st(e,0,21,-9,22,16,23,9465685),st(e,0,30,-9,27,1.7,28,6442310);for(const n of[-8,0,8])xs(e,n,23,3,2.7);Nt(e,0,32,-20,1.2,20,8942677),st(e,0,39,-20,18,1,1,8942677);for(const n of[-17,17])for(const s of[-17,0,17]){const r=pe(e,n,8,s,3.2,.9,3427154);r.rotation.y=Math.PI/2}we(e,"THUG TUG",0,18,6,20,"#654437")}else if(i==="castle"){st(t,0,8,0,48,16,24,8502709),st(t,0,18,0,34,6,22,13099211);for(const e of[-26,26])for(const n of[-12,12]){Nt(t,e,16,n,7,32,10014660),Nt(t,e,32,n,8.2,2,14017737),Kt(t,new rn(8.5,14,8),7708604,e,40,n),Lt(t,e,48,n,1.4,1.4,1.4,16177539);for(let s=0;s<6;s++){const r=s*Math.PI/3;st(t,e+Math.cos(r)*7.2,34,n+Math.sin(r)*7.2,2.4,4,2.4,13099211)}}Lt(t,0,6,13,5,7,.5,4033428),we(t,"NEPTUNE",0,24,13,25,"#407e8f"),Nt(t,0,36,0,.45,19,14927215);for(const e of[-4,0,4])Nt(t,e,44,0,.45,7,15980416),Kt(t,new rn(.8,3,6),15980416,e,49,0);st(t,0,40,0,9,.8,.8,15980416);for(let e=0;e<4;e++)st(t,0,.6+e*.6,17-e*1.5,19,1.2,3,12438446)}return Nr(t,["head","rock","castle"].includes(i)?"stone":null),xn(t)}function Dg(i=0){const t=new ie,n=[12289453,8435133,14396035,9745816][i%4];Nt(t,0,5,0,5,10,n),Lt(t,0,10,0,5.3,1.8,5.3,13290152);for(const s of[1,9])pe(t,0,s,0,5.1,.2,12174243).rotation.x=Math.PI/2;return xs(t,-2,6,4.6,1.25),Lt(t,1.8,2,4.8,1.3,2.2,.25,4286583),dh(t,3,13,-1,.5,6,7639700),st(t,1.8,.18,6,3.3,.35,2.2,Qt("stone",12765605)),Lt(t,2.35,2,5.1,.1,.1,.08,Qt("metal",14469005)),we(t,String(101+i),-2.4,3.5,4.9,1.6,"#526d72"),xn(Nr(t,"metal"))}function wo(i=15904375){const t=new ie;Lt(t,0,1.75,0,.6,.95,.42,i),st(t,0,.65,0,.8,.6,.5,7441290),ki(t,-.18,2.05,-.39,.18),ki(t,.18,2.05,-.39,.18),Lt(t,0,1.62,-.47,.2,.11,.13,10775917);const e=[],n=[];for(const o of[-.59,.59]){const a=new ie;a.position.set(o,1.65,0),t.add(a),Lt(a,0,-.3,0,.2,.44,.14,i),Lt(a,0,-.65,-.07,.18,.17,.13,i),e.push(a)}for(const o of[-.24,.24]){const a=new ie;a.position.set(o,.65,0),t.add(a),Nt(a,0,-.3,0,.13,.6,i),Lt(a,0,-.52,-.1,.22,.15,.36,4476517),n.push(a)}const s=new es;s.moveTo(0,0),s.lineTo(.6,.35),s.lineTo(0,.65),s.closePath();const r=Kt(t,new Os(s),i,0,1.25,.35);r.rotation.y=Math.PI/2;for(const o of[-.18,.18])st(t,o,1.12,-.42,.24,.1,.035,15656122);return st(t,0,.88,-.28,.78,.08,.05,5073259),t.userData={arms:e,legs:n},t}function Ug(i=10980025){const t=new ie;Lt(t,0,1,0,1.7,.8,2.9,i),st(t,0,1.4,0,2.5,.2,3.5,14410168),st(t,0,2.1,.3,1.7,1.1,1.5,i),st(t,0,2,-1,2.2,1.2,.13,9688274);for(const e of[-1.5,1.5])for(const n of[-1.4,1.4]){const s=Nt(t,e,.55,n,.55,.33,3491417);s.rotation.z=Math.PI/2}return t}function Ng(i=15507399){const t=new ie;Kt(t,new vn(1,10,5,0,Math.PI*2,0,Math.PI/2),ln(i,!1,.8),0,0,0,2,1.7,2),pe(t,0,0,0,1.9,.09,i).rotation.x=Math.PI/2;for(let e=0;e<5;e++){const n=e*Math.PI*2/5,s=Nt(t,Math.cos(n)*1.2,-1.4,Math.sin(n)*1.2,.1,2.8,i);s.rotation.z=Math.sin(n)*.18}return t}const Fg=new is(.96,.07,5,20);function zg(){const i=new ie;Nt(i,0,1,0,.95,2,10845528);for(const t of[.3,1.65])Kt(i,Fg,5468020,0,t,0).rotation.x=Math.PI/2;return Nr(i)}function Og(){const i=new es;return i.moveTo(-.85,0),i.lineTo(-1,1.1),i.lineTo(-.48,.72),i.lineTo(0,1.43),i.lineTo(.48,.72),i.lineTo(1,1.1),i.lineTo(.85,0),i.closePath(),new Na(i,{depth:.24,bevelEnabled:!1})}function Bg(){const i=[];for(const[s,r,o,a,l]of[[0,2.5,0,5,0],[-1,3,0,3,.7],[1.1,3.8,0,3,-.65],[0,4.1,.8,3,.2]]){const h=new jn(.38,.55,a,6);h.rotateZ(l),h.translate(s,r,o),i.push(h);const c=new vn(.42,6,4);c.translate(s-Math.sin(l)*a/2,r+Math.cos(l)*a/2,o),i.push(c)}const t=ga(i);i.forEach(s=>s.dispose());const e=[];for(let s=0;s<3;s++){const r=[];for(let a=0;a<5;a++)r.push(new D(Math.sin(a*.8+s)*.6+s*.35,a*2,Math.cos(a+s)*.3));const o=new Lr(new Ua(r),10,.15,3,!1);e.push(o);for(let a=1;a<5;a++){const l=new vn(1,6,4);l.scale(.38,1.35,.13),l.rotateZ((a%2?1:-1)*.55),l.translate(r[a].x+(a%2?.45:-.45),r[a].y,r[a].z),e.push(l)}}const n=ga(e);return e.forEach(s=>s.dispose()),{coral:t,kelp:n,rock:new Ps(2.4,0)}}function hl(i=12754123,t=15,e=13){const n=new ie,s=Kt(n,new is(t/2,2.2,6,12,Math.PI),i,0,e-t/2,0);s.scale.y=e/(t/2);for(const r of[-t/2,t/2])Lt(n,r,2,0,3.7,3.5,3.7,i);return n}let Gn=null;function kg(){if(Gn||typeof document>"u")return Gn;const i=512,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i);for(let s=0;s<i;s++)for(let r=0;r<i;r++){const o=Math.sin(s/i*Math.PI*32+Math.sin(r/i*Math.PI*4)*1.7),a=Me(r,s,43),l=Math.round(220+o*10+(a-.5)*26),h=(s*i+r)*4;n.data.set([l,l,l,255],h)}return e.putImageData(n,0,0),Gn=new Nl(t),Gn.colorSpace=Le,Gn.wrapS=Gn.wrapT=ys,Gn.anisotropy=4,Gn}function Hg(i){const t=uh("sand"),e=new Ir({map:i,normalMap:t.normal,normalScale:new ft(.4,.4),shininess:5,specular:1582371});return e.onBeforeCompile=n=>{n.uniforms.seafloorDetail={value:t.color},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 seafloorUV;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
seafloorUV = (modelMatrix * vec4(position, 1.0)).xz / 12.0;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D seafloorDetail;
varying vec2 seafloorUV;`),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb *= mix(vec3(0.82), vec3(1.16), texture2D(seafloorDetail, seafloorUV).rgb);`)},fh(e,!0)}const $e=Qt("wood",12687971),nn=Qt("metal",5274749);Qt("stone",12110001);const Wi=Qt("cloth",13876613);function Fi(i,t,e,n,s=1.7){st(i,t,e+s/2,n,s,s,s,$e);for(const o of[.2,s-.2])st(i,t,e+o,n+s/2+.02,s,.15,.12,nn);const r=st(i,t,e+s/2,n+s/2+.08,.13,s*1.22,.09,$e);r.rotation.z=.7}function Vg(i,t,e){st(i,t,1.8,e,5,.26,3,$e);for(const n of[-1.8,1.8])st(i,t+n,.9,e,.2,1.8,2.4,nn),st(i,t+n,.6,e,.3,.22,4.6,$e);for(const n of[-1.8,1.8])st(i,t,1.05,e+n,5.2,.22,.8,$e);for(const n of[-.65,.65])Nt(i,t+n,2.07,e,.19,.32,Qt("metal",13295037))}function Gg(i,t,e,n){Nt(i,t,3.5,e,.09,7,nn);const s=Kt(i,new rn(4.6,1.5,12,1,!0),Qt("cloth",n),t,6.65,e);s.rotation.y=Math.PI/12,pe(i,t,5.9,e,4.6,.08,Wi).rotation.x=Math.PI/2;for(const r of[0,Math.PI/2,Math.PI,Math.PI*1.5]){const o=st(i,t+Math.cos(r)*2.2,6.28,e+Math.sin(r)*2.2,4.4,.045,.055,Wi);o.rotation.y=-r,o.rotation.z=.14}}function ul(i,t,e,n=2){const s=new Ua([new D(t[0],n,t[1]),new D((t[0]+e[0])/2,n-.45,(t[1]+e[1])/2),new D(e[0],n,e[1])]);Kt(i,new Lr(s,10,.065,5,!1),Wi)}const Wg={market:[16,12,8],patio:[18,13,8],yard:[12,9,6],dock:[13,24,5],workshop:[16,14,7],stop:[13,9,8]};function Xg(i,t=""){const e=new ie;if(e.name=i,i==="market"){for(const s of[-5.5,5.5])for(const r of[-3.5,3.5])Nt(e,s,3.4,r,.16,6.8,$e);const n=Kt(e,new jn(1,1,1,14,1,!0,0,Math.PI),Qt("cloth",12881265),0,6.7,0,6.8,8.4,2.1);n.rotation.z=Math.PI/2,st(e,0,2.1,0,11.7,.28,3.3,$e),st(e,0,1,1.4,11.4,2,.15,$e);for(const s of[-4,0,4]){Fi(e,s,0,-3.4,1.5);for(let r=0;r<5;r++)Lt(e,s+(r%3-1)*.55,2.55,.2+r%2*.5,.36,.3,.36,[15448933,13601142,9680796][Math.abs(s)%3])}we(e,t||"REEF MARKET",0,5.8,3.55,10,"#386e73")}else if(i==="patio"){for(const n of[-4.5,4.5])Vg(e,n,0),Gg(e,n,0,n<0?12819879:9350311);for(const n of[-8,8])Nt(e,n,.9,4,.8,1.8,Qt("stone",13942940)),Lt(e,n,1.8,4,.8,.2,.8,9148809)}else if(i==="yard"){for(const n of[-4,4])Nt(e,n,2.6,-2,.1,5.2,nn);ul(e,[-4,-2],[4,-2],4.6);for(let n=0;n<4;n++){const s=st(e,-2.7+n*1.8,3.65,-2,1.15,1.55,.04,Qt("cloth",[11964078,14272661,8302515,13342077][n]));s.rotation.z=(n%2?1:-1)*.06}Nt(e,-3.8,1.35,2,.06,2.7,nn),st(e,-3.8,2.7,2,1,.75,1.6,nn),st(e,-3.8,2.7,2.82,.8,.55,.06,Qt("metal",14336915)),Fi(e,3.7,0,2,1.2),we(e,t||"CONCH POST",0,1.4,3.5,3.4,"#587b73")}else if(i==="dock"){for(let s=0;s<17;s++)st(e,0,1.1,-10+s*1.25,9,.35,1.15,$e);for(const s of[-4.8,4.8])for(const r of[-10,-4,2,10])Nt(e,s,1.4,r,.33,3.8,$e),pe(e,s,2.7,r,.35,.1,Wi).rotation.x=Math.PI/2;for(const s of[-4.8,4.8])for(let r=0;r<3;r++)ul(e,[s,-10+r*6],[s,-4+r*6],3);Fi(e,-2,1.3,-7),Fi(e,2,1.3,-8,1.3);const n=new ie;n.position.set(2.5,1.45,4),e.add(n);for(let s=0;s<5;s++)pe(n,0,s*.1,0,.7+s*.04,.08,Wi).rotation.x=Math.PI/2;we(e,t||"COVE LANDING",0,3.9,-10,7,"#527d76")}else if(i==="workshop"){st(e,0,2.2,-2,10,4.4,5.5,Qt("wood",9142378)),st(e,0,4.65,-2,11,.45,6.8,Qt("metal",7182739)),st(e,0,1.8,.8,3.5,3.6,.18,Qt("metal",3428189));for(const n of[-3.7,3.7])st(e,n,2.6,.85,2.2,1.4,.15,7581360);Fi(e,-6,0,2.5),Fi(e,5,0,2.2,1.3),st(e,0,1.5,4.2,5.5,.2,1.7,$e);for(const n of[-2,2])st(e,n,.75,4.2,.16,1.5,1.4,nn);for(const n of[-1.4,0,1.4])pe(e,n,1.8,4.2,.32,.1,nn).rotation.x=Math.PI/2;we(e,t||"BOAT REPAIR",0,4.7,1.6,8,"#816550")}else if(i==="stop"){for(const n of[-4.6,4.6])Nt(e,n,2.5,-2,.14,5,nn);st(e,0,5.1,-1,10.5,.3,5,Qt("metal",7642769)),st(e,0,1.2,-1,7.5,.24,1.3,$e);for(const n of[-2.7,2.7])st(e,n,.6,-1,.15,1.2,1.2,nn);st(e,0,2,-1.7,7.5,1.1,.16,$e),Nt(e,5,3,1,.1,6,nn),we(e,t||"TOWN LOOP",3.8,5.4,1.2,4,"#53777a"),Nt(e,-5,.8,2,.65,1.6,nn),pe(e,-5,1.55,2,.67,.07,Wi).rotation.x=Math.PI/2}return xn(e)}const An=Qt("wood",10717797),De=Qt("metal",6065547),ds=Qt("stone",11848633),fl=Qt("cloth",14076058);function qg(i){const t=new ie,e=[],n=(s,r,o,a,l,h=0)=>e.push({x:s,z:r,w:o,d:a,height:l,y:h});switch(i.kind){case"tower":for(const s of[-4,4])for(const r of[-4,4]){Nt(t,s,8,r,.35,16,De),n(s,r,.7,.7,16);const o=st(t,s,8,0,.2,10,.2,De);o.rotation.x=s<0?.8:-.8}Nt(t,0,18,0,6,7,De),n(0,0,12,12,7,14.5),Kt(t,new rn(6.6,3,20),An,0,23,0);for(let s=1;s<16;s+=1)st(t,5,s,0,.8,.13,.13,De);for(const s of[4.6,5.4])Nt(t,s,8,0,.07,16,De);we(t,i.label,0,18.5,6.05,10,"#476f79");break;case"observatory":st(t,0,1,0,16,2,12,An),n(0,0,16,12,2);for(const s of[-6,6])for(const r of[-4,4])Nt(t,s,5,r,.2,8,An);Kt(t,new rn(11,4,4),Qt("cloth",9999542),0,10,0).rotation.y=Math.PI/4;for(const s of[-4,4]){Nt(t,s,3.6,0,.12,3.2,De);const r=Nt(t,s,5.4,-.8,.5,2.7,De);r.rotation.x=Math.PI/2-.35,Lt(t,s,5.85,-1.8,.53,.53,.12,9559508)}we(t,i.label,0,7,4.3,11,"#66557f");break;case"billboard":for(const s of[-5,5])Nt(t,s,5,0,.28,10,An),n(s,0,.6,.6,10);st(t,0,10,0,16,6,.6,An),n(0,0,16,.6,6,7),we(t,i.label,0,10,.34,15,"#ad6b52");for(const s of[-6,0,6])st(t,s,13.7,.7,.18,1,1.2,De),Lt(t,s,13.3,1.2,.4,.2,.4,16113581);break;case"boardwalk":for(let s=0;s<25;s++)st(t,0,.6,-18+s*1.5,10,1.2,1.38,An);for(const s of[-5.5,5.5])for(let r=-18;r<=18;r+=6)Nt(t,s,1.6,r,.24,3.2,An),n(s,r,.5,.5,3.2),pe(t,s,2.6,r,.28,.08,fl).rotation.x=Math.PI/2;we(t,i.label,0,5,-17,9,"#507f79");break;case"beacon":Nt(t,0,10,0,5,20,ds),n(0,0,10,10,20);for(const s of[5,12,19])pe(t,0,s,0,5.08,.22,De).rotation.x=Math.PI/2;Nt(t,0,21,0,6,.5,De);for(let s=0;s<8;s++){const r=s*Math.PI/4;Nt(t,Math.cos(r)*4.8,23,Math.sin(r)*4.8,.14,4,De)}Lt(t,0,23,0,2,2,2,16771234),Kt(t,new rn(6.5,3,16),An,0,26,0),st(t,0,2,5,2,4,.2,De),we(t,i.label,0,8,5.1,7,"#547577");break;case"crane":{st(t,0,1.2,0,10,2.4,10,ds),n(0,0,10,10,2.4);for(const s of[-3,3])st(t,s,8,0,.45,16,.45,De),n(s,0,.5,.5,16);for(let s=3;s<16;s+=3){st(t,0,s,0,6,.24,.24,De);const r=st(t,0,s+1.5,0,6.6,.18,.18,De);r.rotation.z=.46}st(t,6,16.5,0,21,.6,1.5,De),n(6,0,21,1.5,.6,16.2),Nt(t,14,10,0,.09,13,fl),pe(t,14,3.5,0,.65,.16,De);for(const s of[-7,7])st(t,s,.7,6,3,1.4,3,An);we(t,i.label,0,6,.5,6,"#8c7057");break}case"fountain":Nt(t,0,.5,0,8,1,ds),n(0,0,16,16,1),pe(t,0,1.2,0,7.2,.6,ds).rotation.x=Math.PI/2,Nt(t,0,1.08,0,6.6,.1,6928571),Nt(t,0,3,0,.7,4,ds),n(0,0,1.4,1.4,5),Kt(t,new vn(2.8,16,8,0,Math.PI*2,0,Math.PI/2),Qt("stone",14864048),0,5,0),Lt(t,0,6,0,1.2,1.2,1.2,15523743);for(let s=0;s<12;s++){const r=s*Math.PI/6;Lt(t,Math.cos(r)*7.5,1.4,Math.sin(r)*7.5,.35,.35,.35,14276529)}break}return xn(t),t.name=i.id,{group:t,solids:e}}const Yg=[{id:"neighborhood",name:"Neighborhood cruise",path:"conch-commons",color:15976552},{id:"coast",name:"Lagoon promenade",path:"lagoon-commons",color:8182733},{id:"mountain",name:"Mountain descent",path:"ridge-commons",color:15313593}],xi=Yg.map(i=>{const t=In.find(n=>n.id===i.path),e=[.08,.24,.4,.56,.72,.9].map(n=>{const s=t.nodes.findIndex(a=>a.distance>=t.length*n),r=t.nodes[s],o=t.nodes[Math.min(s+1,t.nodes.length-1)];return{x:r.x,z:r.z,y:$t(r.x,r.z),width:t.width,heading:Math.atan2(o.x-r.x,o.z-r.z)}});return{...i,gates:e}});function $g(i,t,e,n){const s=t.x-i.x,r=t.z-i.z,o=s*s+r*r,a=o?Math.max(0,Math.min(1,((e.x-i.x)*s+(e.z-i.z)*r)/o)):0,l=i.y+(t.y-i.y)*a;return Math.hypot(i.x+s*a-e.x,i.z+r*a-e.z)<n&&Math.abs(l-e.y)<5}class Jg{constructor(t){this.save=t,t.trails??={},this.previous=null}resetPosition(){this.previous=null}update(t,e){const n=this.previous;if(this.previous={x:t.x,y:t.y,z:t.z},!!n&&!(Math.hypot(t.x-n.x,t.z-n.z)<.01)&&!(Math.hypot(t.x-n.x,t.z-n.z)>20))for(const s of xi){const r=this.save.trails[s.id]??0;if(!(r>=s.gates.length)&&$g(n,t,s.gates[r],s.gates[r].width/2+2)){this.save.trails[s.id]=r+1;const o=r+1===s.gates.length;o&&!this.save.activities.includes(`trail:${s.id}`)&&this.save.activities.push(`trail:${s.id}`),e(s,r+1,o)}}}}const Wn=Qt("stone",12044217),Xn=Qt("wood",9925718),ps=Qt("metal",9214866),dr=Qt("metal",11566172);function Zg(i){const t=new ie,e=[],n=(s,r,o)=>{const a=new ie,l=$t(i.x+s,i.z+r);a.position.set(s,l,r),t.add(a),o(a,(h,c,u,d,f,x=0)=>e.push({x:i.x+s+h,z:i.z+r+c,w:u,d,height:f,y:l+x}))};if(i.kind==="pools"){for(const[s,r,o]of[[-17,-10,9],[18,10,10],[-15,20,7]])n(s,r,(a,l)=>{Nt(a,0,.18,0,o,.36,6732982);for(let h=0;h<10;h++){const c=h*Math.PI/5,u=Math.cos(c)*o,d=Math.sin(c)*o;Lt(a,u,.55,d,1.4,.8,1.4,Wn),l(u,d,2.5,2.5,1.4)}for(let h=0;h<3;h++){const c=-2+h*2;Lt(a,c,.65,1,.7,.3,.7,15585185),pe(a,c,.8,1,.38,.1,14067125).rotation.x=Math.PI/2}});for(const s of[-29,29])n(s,-23,(r,o)=>{Nt(r,0,3,0,.16,6,ps),o(0,0,.4,.4,6),Lt(r,0,6.2,0,.7,.9,.7,16769445),st(r,0,1.1,2.5,5,.3,1.5,Xn);for(const a of[-1.8,1.8])st(r,a,.55,2.5,.2,1.1,1.3,ps)})}else if(i.kind==="yard"){n(-17,20,(s,r)=>{const o=Xn.clone();o.side=ke,Kt(s,new vn(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),o,0,2,0,6,3,10);const a=pe(s,0,2,0,1,.06,Xn);a.rotation.x=Math.PI/2,a.scale.set(6,10,6);for(const l of[-6,-3,0,3,6]){const h=10*Math.sqrt(1-(l/11)**2);st(s,0,1.45,l,h,.18,.45,Xn);for(const c of[-h/2,h/2])st(s,c,.8,l,.17,2.1,.2,Xn).rotation.z=-c*.07}for(const l of[-4,4])st(s,0,2.15,l,9,.2,1.6,Qt("wood",11903097));for(const l of[-4,4])Nt(s,l,.5,0,.38,1,ps);r(0,0,12,20,3)});for(const s of[-26,26])n(12,s,(r,o)=>{for(let a=0;a<3;a++){const l=-7+a*7;st(r,l,1.7,0,5,3.4,5,Xn),o(l,0,5,5,3.4);for(const h of[.4,3])st(r,l,h,2.55,5,.16,.1,dr)}});for(const[s,r]of[[-6,-23],[9,0],[23,22]])n(s,r,(o,a)=>{Nt(o,0,2,0,.3,4,dr),st(o,0,1,0,5.5,.35,.45,dr),pe(o,0,4.2,0,.75,.18,ps);for(const l of[-2.5,2.5]){const h=st(o,l,.8,0,1.4,1.8,.3,dr);h.rotation.z=l<0?-.6:.6}a(0,0,6,2,5)});n(24,-4,(s,r)=>{for(let a=0;a<4;a++)st(s,0,.5+a*.6,0,4,.45,14,Xn);r(0,0,4,14,2.8);const o=Nt(s,-5,2.2,0,1.4,3,ps);o.rotation.z=Math.PI/2,r(-5,0,3,3,3.6)})}else{for(let s=0;s<16;s++){const r=s*Math.PI/8;n(Math.cos(r)*8,Math.sin(r)*8,o=>{const a=st(o,0,.1,0,2.6,.2,2.6,Qt("stone",s%2?12106933:13811605));a.rotation.y=-r})}for(const s of[-22,22])for(const r of[-24,0,24])n(s,r,(o,a)=>{const l=r===0?8:12;Nt(o,0,.5,0,3.2,1,Wn),Nt(o,0,l/2,0,1.4,l,Wn),a(0,0,4,4,l);for(const h of[1.5,l-.5])pe(o,0,h,0,1.5,.18,Wn).rotation.x=Math.PI/2;for(let h=0;h<8;h++){const c=h*Math.PI/4;Nt(o,Math.cos(c)*1.38,l/2,Math.sin(c)*1.38,.07,l-2,12900034)}r!==0&&st(o,0,l+.5,0,6,1,6,Wn)});n(0,26,(s,r)=>{for(const o of[-11,11])Nt(s,o,7,0,1.5,14,Wn),r(o,0,3,3,14);st(s,0,14.5,0,26,1.3,4,Wn),r(0,0,26,4,1.3,13.8),Lt(s,0,16,0,2.8,1.5,.7,14731417)});for(const s of[-31,31])n(s,11,(r,o)=>{const a=st(r,0,1.3,0,3,2.6,10,Wn);a.rotation.y=s*.03,o(0,0,5,11,3)})}return n(0,-i.radius+5,(s,r)=>{for(const o of[-16,16])Nt(s,o,2.8,0,.2,5.6,Xn),r(o,0,.5,.5,6);we(s,i.name.toUpperCase(),0,5.4,0,29,"#577d7b")}),xn(t),t.position.set(i.x,0,i.z),t.name=i.id,{group:t,solids:e}}const Va=Ki.map(i=>{const t=i.length/2+20;return{id:i.id,heading:i.heading,radius:6.5,x:i.x-Math.sin(i.heading)*t,z:i.z-Math.cos(i.heading)*t,y:$t(i.x,i.z)+i.height+5.2}});function Kg(i,t,e){const n=Math.sin(e.heading),s=Math.cos(e.heading),r=f=>(f.x-e.x)*n+(f.z-e.z)*s,o=r(i),a=r(t);if(o<=0||a>0||o===a)return!1;const l=o/(o-a),h=i.x+(t.x-i.x)*l,c=i.z+(t.z-i.z)*l,u=i.y+(t.y-i.y)*l+1.6,d=(h-e.x)*s-(c-e.z)*n;return Math.hypot(d,u-e.y)<=e.radius-1}class jg{constructor(t){this.save=t,t.bestStunts??={},this.reset()}reset(){this.flight=null,this.previous=null}step(t,e,n){const s=this.previous??t;if(this.previous={x:t.x,y:t.y,z:t.z},Math.hypot(t.x-s.x,t.z-s.z)>20){this.flight=null;return}if(e.launched){const o=Ki.find(a=>{const l=t.x-a.x,h=t.z-a.z,c=Math.cos(a.heading),u=Math.sin(a.heading),d=c*l-u*h,f=u*l+c*h;return Math.abs(d)<a.width/2+2&&f<-a.length/2+3&&f>-a.length/2-9});this.flight=o?{id:o.id,x:t.x,z:t.z,passed:!1}:null}if(!this.flight)return;if(e.impacts){this.flight=null;return}const r=Va.find(o=>o.id===this.flight.id);if(this.flight.passed||=Kg(s,t,r),e.landed){const o=Math.hypot(t.x-this.flight.x,t.z-this.flight.z),a=`stunt:${this.flight.id}`;if(this.flight.passed&&o>=25){const l=!this.save.activities.includes(a);l&&this.save.activities.push(a);const h=this.save.bestStunts[this.flight.id]??0;o>h&&(this.save.bestStunts[this.flight.id]=Math.round(o*10)/10,n(r,o,l))}this.flight=null}}}const Qg=[{name:"Tidepool pearls",item:"Pearl",kind:"pearl",color:16044004},{name:"Salvage sweep",item:"Cog",kind:"cog",color:15250542},{name:"Sanctuary echoes",item:"Echo shell",kind:"shell",color:10872030}],Us=Nn.map((i,t)=>({...Qg[t],id:i.id,siteName:i.name,items:[-12,0,12].map((e,n)=>({id:`${i.id}:${n}`,x:i.x,z:i.z+e,y:$t(i.x,i.z+e)}))}));class tx{constructor(t){this.save=t,t.keepsakes??=[],this.previous=null}reset(){this.previous=null}step(t,e){const n=this.previous;if(this.previous={x:t.x,y:t.y,z:t.z},!n||!t.grounded)return;const s=t.x-n.x,r=t.z-n.z,o=s*s+r*r;if(!(o<1e-4||o>400))for(const a of Us)for(const l of a.items){if(this.save.keepsakes.includes(l.id))continue;const h=Math.max(0,Math.min(1,((l.x-n.x)*s+(l.z-n.z)*r)/o)),c=n.y+(t.y-n.y)*h;if(Math.hypot(n.x+s*h-l.x,n.z+r*h-l.z)>3.3||Math.abs(c-l.y)>2)continue;this.save.keepsakes.push(l.id);const u=a.items.filter(f=>this.save.keepsakes.includes(f.id)).length,d=u===a.items.length;d&&!this.save.activities.includes(`collection:${a.id}`)&&this.save.activities.push(`collection:${a.id}`),e(a,u,d)}}}function ex(i,t){const e=new ie;if(i==="pearl"){for(const n of[-1,1]){const s=Lt(e,n*.8,-.45,0,1.1,.25,1,12881070);s.rotation.z=n*.35}Lt(e,0,.25,0,.85,.85,.85,t)}else if(i==="cog"){pe(e,0,0,0,.8,.28,t);for(let n=0;n<8;n++){const s=n*Math.PI/4,r=st(e,Math.sin(s)*1.05,Math.cos(s)*1.05,0,.4,.55,.5,t);r.rotation.z=-s}}else{for(let n=0;n<7;n++){const s=(n-3)*.23,r=Lt(e,Math.sin(s)*.7,Math.cos(s)*.6,0,.23,1.05,.3,t);r.rotation.z=-s}Lt(e,0,-.45,0,.45,.3,.35,14866096)}return xn(e),e}const ce=new Ae,nx=new Cr({color:2311242,transparent:!0,opacity:.1,depthWrite:!1,side:ke});class ix{constructor(t,e,{software:n=!1,worker:s=!0}={}){if(this.scene=t,this.save=e,this.software=n,this.boundary=gn/2-8,this.ramps=Ki.map(r=>({...r,baseY:$t(r.x,r.z)})),this.solids=[],this.colliderHash=new cl,this.interactionHash=new cl,this.coins=[],this.breakables=[],this.traffic=[],this.people=[],this.jellies=[],this.decor=[],this.landmarkObjects=[],this.activitySites=[],this.districtObjects=[],this.scenicGates=[],this.platforms=[],this.discoveryObjects=[],this.destinationTokens=[],this.stuntRings=[],this.collected=e.coins.length+(e.legacy?.coins??0),this.collectedIds=new Set(e.coins),this.brokenIds=new Set(e.broken),this.chunks=new Map,this.pending=new Map,this.ready=[],this.queue=[],this.wanted=new Map,this.stamp=0,this.lastCell="",this.flora=Bg(),this.crownGeo=Og(),this.crownMat=ln(16766570),this.terrainMat=new vf({vertexColors:!0,map:kg()}),s&&typeof Worker<"u")try{this.worker=new Worker(new URL(""+new URL("TerrainWorker-C9C32GAi.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=({data:r})=>{this.pending.delete(r.key),this.ready.push(r)},this.worker.onerror=()=>{this.worker.terminate(),this.worker=null;for(const r of this.pending.values())this.queue.push(r);this.pending.clear()}}catch{}this.makeGround(),this.makeRoads(),this.makeLandmarks(),this.makeStreetDetails(),this.makeLivingSites(),this.makeSetPieces(),this.makeDistrictDetails(),this.makeScenicGates(),this.makeDiscoveries(),this.makeStuntRings(),this.makeExploration(),this.makeResidents(),this.makeAtmosphere()}heightAt(t,e){let n=$t(t,e);for(const s of this.platforms??[])if(Math.abs(t-s.x)<=s.w/2&&Math.abs(e-s.z)<=s.d/2+s.approach){const r=Se((s.d/2+s.approach-Math.abs(e-s.z))/s.approach,0,1);n=Math.max(n,n+(s.y-n)*r)}for(const s of this.ramps){const r=ka(t,e,s);r!==null&&(n=Math.max(n,r))}return n}nearbySolids(t,e,n=8){return this.colliderHash.query(t,e,n)}addSolid(t,e,n,s,r,o=$t(t,e)){const a={x:t,z:e,w:n,d:s,height:r,y:o};return this.solids.push(a),this.colliderHash.add(a),a}makeGround(){const t=new ns(gn,gn,60,60);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){const r=e.getX(s),o=e.getZ(s);e.setY(s,Bi(r,o)-3),n.set(ch(r,o),s*3),t.attributes.uv.setXY(s,r/28,o/28)}t.setAttribute("color",new Ue(n,3)),t.computeVertexNormals(),this.floor=Kt(this.scene,t,this.terrainMat),this.floor.castShadow=!1,this.floor.renderOrder=-60}makeRoads(){const t=[];for(const n of In)if(n.nodes.forEach((s,r)=>{const o=n.nodes[Math.max(0,r-1)],a=n.nodes[Math.min(n.nodes.length-1,r+1)];r%3===0&&t.push({x:s.x,y:$t(s.x,s.z)+.34,z:s.z,a:Math.atan2(a.x-o.x,a.z-o.z)})}),this.software){const s=Kt(this.scene,al(n,24),5277579);s.castShadow=!1,s.renderOrder=-30}const e=new Ui(new _i(.45,.025,4),ln(15128224),t.length);t.forEach((n,s)=>{ce.position.set(n.x,n.y,n.z),ce.rotation.set(0,n.a,0),ce.scale.setScalar(1),ai(e,s,ce)}),e.computeBoundingSphere(),e.renderOrder=-29,this.scene.add(e)}makeLandmarks(){const t={pineapple:[21,21,35],head:[18,16,25],rock:[23,23,8],krusty:[34,26,23],bucket:[24,24,35],goober:[45,32,41],ship:[36,62,40],castle:[66,43,49]};for(const n of Ls){const s=new Nu,r=Ig(n.type),o=new ie,[a,l,h]=t[n.type];if(n.type==="pineapple"){Lt(o,0,12,0,10,14,10,15309364);for(const c of[-3,0,3])Kt(o,new rn(3,13,5),6595655,c,29,0)}else if(n.type==="castle"){st(o,0,12,0,48,24,24,9553852);for(const c of[-27,27])Nt(o,c,18,0,7,36,10540747),Kt(o,new rn(8,15,7),8367296,c,43,0)}else n.type==="ship"?(Lt(o,0,8,0,18,10,30,9003336),st(o,0,24,-7,24,20,24,9335128)):Lt(o,0,h*.43,0,a*.48,h*.48,l*.48,n.type==="head"?7574434:n.type==="rock"?9928319:12037523);s.addLevel(r,0),s.addLevel(o,this.software?190:300,.08),s.position.set(n.x,$t(n.x,n.z),n.z),this.scene.add(s),this.landmarkObjects.push(s),this.addSolid(n.x,n.z,a,l,h),this.makeContactShadow(n.x,n.z,a*.6,l*.6)}let e=0;for(const n of[be[0],be[1],be[3],be[4]])for(let s=0;s<9;s++){const r=s*2.4,o=85+s%3*27,a=n.x+Math.cos(r)*o,l=n.z+Math.sin(r)*o,h=Dn(a,l);if(h.distance<h.width/2+21||Ls.some(u=>Math.hypot(a-u.x,l-u.z)<u.radius+18)||this.solids.some(u=>Math.hypot(a-u.x,l-u.z)<Math.max(u.w,u.d)/2+15))continue;const c=Dg(e++);c.position.set(a,$t(a,l),l),c.rotation.y=s*.7,this.scene.add(c),this.decor.push(c),this.addSolid(a,l,10,10,16),this.makeContactShadow(a,l,6.3,6.3)}}makeStreetDetails(){for(const t of be.filter(e=>["conch","commons","lagoon","neptune"].includes(e.id))){const e=In.find(n=>n.id===(t.id==="conch"?"conch-commons":t.id==="lagoon"?"lagoon-commons":t.id==="neptune"?"palace-commons":"wreck-commons"));for(let n=5;n<e.nodes.length-1;n+=9){const s=e.nodes[n],r=e.nodes[n+1];if(Math.hypot(s.x-t.x,s.z-t.z)>230)continue;const o=Math.atan2(r.x-s.x,r.z-s.z),a=n%2?1:-1,l=s.x+Math.cos(o)*(e.width/2+7)*a,h=s.z-Math.sin(o)*(e.width/2+7)*a,c=Dn(l,h);if(c.distance<c.width/2+4||this.solids.some(d=>Math.hypot(l-d.x,h-d.z)<Math.max(d.w,d.d)/2+8))continue;const u=new ie;u.position.set(l,$t(l,h),h),u.rotation.y=o,Nt(u,0,3.9,0,.18,7.8,Qt("metal",4812400)),pe(u,0,7.7,0,.9,.1,7970199).rotation.x=Math.PI/2,Lt(u,0,7.7,0,.65,.8,.65,15128995);for(let d=0;d<4;d++)st(u,2.8,1.1,-.6+d*.4,3.4,.16,.3,Qt("wood",10976592));for(const d of[1.6,4])st(u,d,.55,0,.18,1.1,1.5,5075827);for(const d of[1.7,2.1])st(u,2.8,d,.8,3.4,.25,.16,10976592);this.scene.add(u),this.decor.push(u),this.addSolid(l,h,.7,.7,8)}}}makeLivingSites(){for(const t of Ha){const e=Xg(t.kind,t.label),[n,s,r]=Wg[t.kind],o=Math.cos(t.heading),a=Math.sin(t.heading),l=Math.abs(o)*n+Math.abs(a)*s,h=Math.abs(o)*s+Math.abs(a)*n;let c=$t(t.x,t.z);for(const d of[-l/2,l/2])for(const f of[-h/2,h/2])c=Math.max(c,$t(t.x+d,t.z+f));const u=st(e,0,-1,0,n,2,s,Qt("stone",11581339));u.receiveShadow=!0,e.position.set(t.x,c,t.z),e.rotation.y=t.heading,this.scene.add(e),this.decor.push(e),this.activitySites.push({...t,group:e,base:c,width:l,depth:h}),this.addSolid(t.x,t.z,l,h,r,c).siteId=t.id,this.makeContactShadow(t.x,t.z,l*.6,h*.6)}}makeContactShadow(t,e,n,s){const r=[t,$t(t,e)+.1,e],o=[];for(let h=0;h<=24;h++){const c=h/24*Math.PI*2,u=t+Math.cos(c)*n,d=e+Math.sin(c)*s;r.push(u,$t(u,d)+.1,d),h&&o.push(0,h+1,h)}const a=new ye;a.setAttribute("position",new te(r,3)),a.setIndex(o);const l=Kt(this.scene,a,nx);return l.castShadow=!1,l.receiveShadow=!1,l.renderOrder=-20,l}makeDistrictDetails(){for(const t of lh){const{group:e,solids:n}=qg(t);let s=$t(t.x,t.z);for(const r of t.kind==="boardwalk"?[-5,5]:[-t.radius,t.radius])for(const o of t.kind==="boardwalk"?[-18.75,18.75]:[-t.radius,t.radius])s=Math.max(s,$t(t.x+r,t.z+o));e.position.set(t.x,s,t.z),this.scene.add(e),this.decor.push(e),this.districtObjects.push({...t,group:e,base:s});for(const r of n)this.addSolid(t.x+r.x,t.z+r.z,r.w,r.d,r.height,s+r.y).siteId=t.id;if(t.kind==="boardwalk"){const r={x:t.x,z:t.z,w:10,d:37.5,y:s+1.2,approach:12};this.platforms.push(r);for(const o of[-1,1]){const a=[],l=[],h=[];for(let u=0;u<=4;u++)for(let d=0;d<=2;d++){const f=-5+d*5,x=o*(18.75+u*3);a.push(f,this.heightAt(t.x+f,t.z+x)-s,x),l.push(d,u/2)}for(let u=0;u<4;u++)for(let d=0;d<2;d++){const f=u*3+d;h.push(...o===1?[f,f+3,f+1,f+1,f+3,f+4]:[f,f+1,f+3,f+1,f+4,f+3])}const c=new ye;c.setAttribute("position",new te(a,3)),c.setAttribute("uv",new te(l,2)),c.setIndex(h),c.computeVertexNormals(),Kt(e,c,Qt("wood",10717797))}}for(const r of[-t.radius*.3,t.radius*.3]){const o=$t(t.x+r,t.z);s>o+.1&&st(e,r,-(s-o)/2,0,1.2,s-o,1.2,Qt("stone",11581339))}xn(e),this.makeContactShadow(t.x,t.z,t.radius*.65,t.radius*.65)}}makeScenicGates(){for(const t of xi)t.gates.forEach((e,n)=>{const s=new ie,r=ln(t.color).clone();s.position.set(e.x,e.y,e.z),s.rotation.y=e.heading;const o=e.width/2+3;for(const a of[-o,o]){Nt(s,a,5.5,0,.24,11,Qt("metal",5406078));for(const c of[1.5,4,9])pe(s,a,c,0,.35,.13,r).rotation.x=Math.PI/2;Lt(s,a,11,0,.7,.7,.7,r);const l=e.x+Math.cos(e.heading)*a,h=e.z-Math.sin(e.heading)*a;this.addSolid(l,h,.6,.6,11,$t(l,h)).siteId=`gate:${t.id}:${n}`}st(s,0,11,0,o*2,.16,.16,r),we(s,`${t.name.toUpperCase()} ${n+1}/6`,0,10,.1,Math.min(e.width,20),"#40767a"),xn(s),this.scene.add(s),this.decor.push(s),this.scenicGates.push({routeId:t.id,index:n,group:s,color:r,x:e.x,z:e.z})})}makeDiscoveries(){for(const t of Us)for(const e of t.items){const n=ex(t.kind,t.color);n.position.set(e.x,e.y+2.5,e.z),n.visible=!this.save.keepsakes.includes(e.id),this.scene.add(n),this.destinationTokens.push({...e,group:n})}for(const t of Nn){const{group:e,solids:n}=Zg(t);this.scene.add(e),this.decor.push(e),this.discoveryObjects.push({...t,group:e});for(const s of n)this.addSolid(s.x,s.z,s.w,s.d,s.height,s.y).siteId=t.id}if(this.software)for(const t of Ms){const e=Kt(this.scene,al(t,4),12434067);e.castShadow=!1,e.renderOrder=-28}for(const t of Ms){const e=new ie;for(let n=5;n<t.nodes.length-1;n+=9){const s=t.nodes[n],r=t.nodes[n+1],o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;for(const h of[-1,1]){const c=s.x+a/l*8*h,u=s.z-o/l*8*h;if([...this.nearbySolids(c,u)].some(f=>Math.abs(c-f.x)<f.w/2+2&&Math.abs(u-f.z)<f.d/2+2))continue;const d=$t(c,u);Nt(e,c,d+.65,u,.18,1.3,Qt("wood",11836022)),Lt(e,c,d+1.4,u,.26,.18,.26,14146740)}}xn(e),e.position.set(0,0,0),this.scene.add(e)}}makeStuntRings(){for(const t of Va){const e=new ie,n=ln(16766074).clone();pe(e,0,0,0,t.radius,.3,n);for(let s=0;s<8;s++){const r=s*Math.PI/4;Lt(e,Math.cos(r)*t.radius,Math.sin(r)*t.radius,0,.38,.38,.38,n)}xn(e),e.position.set(t.x,t.y,t.z),e.rotation.y=t.heading,this.scene.add(e),this.decor.push(e),this.stuntRings.push({...t,group:e,color:n})}}makeSetPieces(){for(const c of this.ramps){const u=new ie;u.position.set(c.x,c.baseY,c.z),u.rotation.y=c.heading;const d=new ye;d.setAttribute("position",new te([-c.width/2,0,c.length/2,c.width/2,0,c.length/2,-c.width/2,c.height,-c.length/2,c.width/2,c.height,-c.length/2],3)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals(),d.setAttribute("uv",new te([0,0,1,0,0,1,1,1],2)),Kt(u,d,Qt("wood",13144416),0,.08,0);for(const f of[-c.width/2,c.width/2]){st(u,f,c.height/2,-c.length/2,.5,c.height,.5,14137735);const x=st(u,f,c.height/2+.8,0,.25,.25,Math.hypot(c.length,c.height),15784352);x.rotation.x=Math.atan2(c.height,c.length)}for(let f=0;f<3;f++){const x=8-f*7,g=c.height*(.5-x/c.length)+.12;st(u,0,g,x,c.width*.75,.08,1.2,15978345)}this.scene.add(u)}for(const c of Is){const u=new ie;u.position.set(c.x,$t(c.x,c.z),c.z);const d=hl(c.id==="coral-grotto"?10782637:8762800,20,14);u.add(d),Lt(u,0,3,-9,2.4,2.4,2.4,14348479);for(const f of[-13,13])this.addSolid(c.x+f,c.z,5,7,12);for(let f=0;f<8;f++){const x=f*Math.PI/4;Lt(u,Math.cos(x)*13,.5,-9+Math.sin(x)*13,2,1.4,2,8958630)}this.scene.add(u),this.decor.push(u)}const t=[],e=[],n=500,s=560;t.push(n,$t(n,s)+.18,s);for(let c=0;c<=48;c++){const u=c/48*Math.PI*2,d=n+Math.cos(u)*77,f=s+Math.sin(u)*51;t.push(d,$t(d,f)+.18,f),c&&e.push(0,c,c+1)}const r=new ye;r.setAttribute("position",new te(t,3)),r.setIndex(e),r.computeVertexNormals(),Kt(this.scene,r,ln(5154459,!1,.86));const o=hl(14004622,34,22);o.position.set(212,$t(212,-505),-505),this.scene.add(o);for(const c of[194,230])this.addSolid(c,-505,8,10,22);const a=new Ps(1,1),l=new Ui(a,ln(8827051),88);let h=0;for(let c=0;c<22;c++)for(const u of[0,1,2,3]){const d=-880+c*84,f=u<2?u?884:-884:d,x=u<2?d:u===2?884:-884,g=13+Me(c,u,84)*10;ce.position.set(f,$t(f,x)+g*.6,x),ce.rotation.set(0,Me(c,u)*6,0),ce.scale.set(g,g*1.5,g),ai(l,h++,ce),this.addSolid(f,x,g*1.8,g*1.8,g*2.1)}l.computeBoundingSphere(),this.scene.add(l)}makeExploration(){for(const t of In){let e=0,n=12;for(const s of t.nodes){if(s.distance<n)continue;n+=22;const r=t.nodes[Math.max(0,t.nodes.indexOf(s)-1)],o=s.x-r.x,a=s.z-r.z,l=Math.hypot(o,a)||1,h=e%2?3.5:-3.5,c=s.x+a/l*h,u=s.z-o/l*h;this.addCrown(`crown:${t.id}:${e++}`,c,u,$t(c,u)+2)}}for(const t of be)for(let e=0;e<14;e++){const n=e/14*Math.PI*2;let s=t.x+Math.cos(n)*(44+e%3*7),r=t.z+Math.sin(n)*(44+e%3*7);if(!this.solids.some(o=>!o.siteId&&Math.abs(s-o.x)<o.w/2+3&&Math.abs(r-o.z)<o.d/2+3)){for(const o of this.solids.filter(a=>a.siteId))Math.abs(s-o.x)<o.w/2+4&&Math.abs(r-o.z)<o.d/2+4&&(s=o.x+(s>=o.x?1:-1)*(o.w/2+5));this.addCrown(`crown:${t.id}:${e}`,s,r,$t(s,r)+2)}}for(const t of Is)for(let e=0;e<8;e++){const n=e*Math.PI/4,s=t.x+Math.cos(n)*8,r=t.z-9+Math.sin(n)*8;this.addCrown(`crown:secret-${t.id}:${e}`,s,r,$t(s,r)+2.2)}for(const t of this.ramps)for(let e=0;e<6;e++){const n=t.length/2-e*t.length/5,s=t.x+Math.sin(t.heading)*n,r=t.z+Math.cos(t.heading)*n;this.addCrown(`crown:${t.id}:${e}`,s,r,this.heightAt(s,r)+2.3)}for(const t of be)for(let e=0;e<18;e++){const n=e*2.3,s=t.x+Math.cos(n)*(22+e%4*15),r=t.z+Math.sin(n)*(22+e%4*15);if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+3&&Math.abs(r-a.z)<a.d/2+3))continue;const o={id:`prop:${t.id}:${e}`,x:s,z:r,y:$t(s,r),kind:"barrel"};this.breakables.push(o),this.interactionHash.add(o)}this.objectsByChunk=new Map;for(const t of[...this.coins,...this.breakables]){const e=this.chunkKey(t.x,t.z);this.objectsByChunk.has(e)||this.objectsByChunk.set(e,[]),this.objectsByChunk.get(e).push(t)}}addCrown(t,e,n,s){const r={id:t,x:e,z:n,y:s,kind:"crown",phase:Me(Math.floor(e),Math.floor(n),16)*6};this.coins.push(r),this.interactionHash.add(r)}chunkKey(t,e){return`${Math.floor(t/Te)},${Math.floor(e/Te)}`}makeResidents(){for(const t of Ms)for(let e=0;e<4;e++){const n=wo([13611146,11580374,9748658,13738428][e]);this.scene.add(n);const s=sl(t,t.length*(.3+e*.15),e%2?1:-1);this.people.push({mesh:n,...s,phase:e*1.7,pathRoute:t,side:e%2?1:-1,offset:t.length*(.3+e*.15)})}for(const t of be)for(let e=0;e<6;e++){const n=e*2.1,s=t.x+Math.cos(n)*35,r=t.z+Math.sin(n)*35;if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+4&&Math.abs(r-a.z)<a.d/2+4))continue;const o=wo([15117949,9684144,12426184,14661238][e%4]);this.scene.add(o),this.people.push({mesh:o,x:s,z:r,phase:e+t.x*.01})}for(const t of this.activitySites){const e=Math.cos(t.heading),n=Math.sin(t.heading);for(let s=0;s<2;s++){const r=t.depth/2+7,o=t.x+e*(-4+s*8)+n*r,a=t.z-n*(-4+s*8)+e*r;if([...this.nearbySolids(o,a)].some(h=>Math.abs(o-h.x)<h.w/2+3&&Math.abs(a-h.z)<h.d/2+3))continue;const l=wo([13019068,10467493][s]);this.scene.add(l),this.people.push({mesh:l,x:o,z:a,phase:t.x*.01+s,heading:t.heading,path:!0})}}for(let t=0;t<9;t++){const e=Ug([10786240,14790523,8566201][t%3]);this.scene.add(e),this.traffic.push({mesh:e,phase:t/9,speed:8+t%3*2,solid:{x:0,z:0,w:5,d:8,height:3,y:0}})}for(const t of be)for(let e=0;e<(t.id==="fields"?14:4);e++){const n=e*2.3,s=t.x+Math.cos(n)*(60+e%4*22),r=t.z+Math.sin(n)*(60+e%4*22),o=$t(s,r)+8+e%3*3,a=Ng(e%2?15308734:11705307);this.scene.add(a),this.jellies.push({mesh:a,x:s,y:o,z:r,phase:e})}}makeAtmosphere(){this.vehicleShadow=this.makeContactShadow(0,0,2.8,3.2),this.vehicleShadow.geometry.attributes.position.setUsage(ec),this.bubbles=[];const t=new Ui(new vn(.13,5,3),ln(13236451,!1,.36),42);t.frustumCulled=!1,this.scene.add(t),this.bubbleMesh=t,this.particles=[],this.particleMesh=new Ui(new Ps(.16),ln(16767100),80),this.particleMesh.frustumCulled=!1,this.scene.add(this.particleMesh),this.software&&(t.visible=!1,this.particleMesh.visible=!1)}createChunk(t){const e=`${t.cx},${t.cz}`,n=this.chunks.get(e);n&&this.disposeChunk(n);const s=new ie;s.position.set(t.cx*Te,0,t.cz*Te);const r=new ye;r.setAttribute("position",new Ue(t.positions,3)),r.setAttribute("color",new Ue(t.colors,3)),r.setAttribute("uv",new Ue(t.uv,2)),r.setIndex(new Ue(t.indices,1)),r.computeVertexNormals(),r.computeBoundingSphere();let o=this.terrainMat;if(!this.software){const g=new Pa(t.paint,t.paintSize,t.paintSize,Ze);g.colorSpace=Le,g.magFilter=Je,g.minFilter=Je,g.needsUpdate=!0,o=Hg(g);for(let m=0;m<r.attributes.uv.count;m++)r.attributes.uv.setXY(m,r.attributes.position.getX(m)/Te,r.attributes.position.getZ(m)/Te)}const a=Kt(s,r,o);a.castShadow=!1,a.renderOrder=-50;const l=[],h=[];for(const g of["rock","coral","kelp"])for(let m=0;m<3;m++){let p=t.props.filter(_=>_.type===g&&_.color===m&&(g!=="rock"||!this.coins.some(A=>Math.hypot(A.x-_.x,A.z-_.z)<2.4*_.scale+4)));if(this.software&&(p=p.filter(_=>Me(Math.floor(_.x),Math.floor(_.z),62)<.3)),!p.length)continue;const S={rock:[10005921,12170400,10267066],coral:[13536174,14852480,10852297],kelp:[4558712,6924158,8957029]},M=new Ui(this.flora[g],ln(S[g][m]),p.length);M.castShadow=!1,M.receiveShadow=!0,p.forEach((_,A)=>{if(ce.position.set(_.x-s.position.x,_.y,_.z-s.position.z),ce.rotation.set(0,_.rotation,0),ce.scale.setScalar(_.scale),ai(M,A,ce),g==="rock"){const R={x:_.x,z:_.z,w:4.8*_.scale,d:4.8*_.scale,height:4.8*_.scale,y:_.y-2.4*_.scale};this.colliderHash.add(R),h.push(R)}}),M.computeBoundingSphere(),s.add(M),l.push({batch:M,props:p})}const c=this.objectsByChunk.get(e)??[],u=c.filter(g=>g.kind==="crown");let d=null;u.length&&(d=new Ui(this.crownGeo,this.crownMat,u.length),d.instanceMatrix.setUsage(ec),d.frustumCulled=!1,s.add(d),u.forEach((g,m)=>{g.slot=m,ce.position.set(g.x-s.position.x,g.y,g.z-s.position.z),ce.rotation.set(0,0,0),ce.scale.setScalar(this.collectedIds.has(g.id)?0:1),ai(d,m,ce)}));const f=[];for(const g of c.filter(m=>m.kind==="barrel")){if(this.brokenIds.has(g.id))continue;const m=zg();m.position.set(g.x-s.position.x,g.y,g.z-s.position.z),s.add(m),f.push({item:g,mesh:m})}const x={key:e,group:s,terrain:a,segments:t.segments,flora:l,rockSolids:h,coins:u,crownBatch:d,barrels:f,used:++this.stamp};this.chunks.set(e,x),this.scene.add(s),this.software&&nh(s),this.updateChunkCoins(x,0)}ensureAround(t,e,n=0,s=!1){const r=Math.floor(t/Te),o=Math.floor(e/Te),a=`${r},${o}`;if(a===this.lastCell&&!s)return;this.lastCell=a,this.wanted.clear();const l=this.software?1:2,h=[];for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){const d=r+u,f=o+c;if(d*Te>900||f*Te>900||(d+1)*Te<-900||(f+1)*Te<-900)continue;const x=this.software?8:Math.max(Math.abs(u),Math.abs(c))<=1?32:8,g=`${d},${f}`;this.wanted.set(g,x);const m=this.chunks.get(g);if(m&&m.segments===x){m.group.visible=!0,m.used=++this.stamp;continue}this.pending.has(g)||h.push({key:g,cx:d,cz:f,segments:x,priority:u*u+c*c})}h.sort((c,u)=>c.priority-u.priority);for(const c of this.chunks.values())c.group.visible=this.wanted.has(c.key);if(this.queue=h,s){const c=Math.min(3,this.queue.length);for(let u=0;u<c;u++){const d=this.queue.shift();this.createChunk(ol(d.cx,d.cz,d.segments))}}}stream(){if(this.ready.length){const t=this.ready.shift(),e=`${t.cx},${t.cz}`,n=this.wanted.get(e);n===t.segments?this.createChunk(t):n&&!this.pending.has(e)&&this.queue.push({key:e,cx:t.cx,cz:t.cz,segments:n})}if(this.queue=this.queue.filter(t=>this.wanted.get(t.key)===t.segments&&this.chunks.get(t.key)?.segments!==t.segments&&!this.pending.has(t.key)),this.queue.length&&this.pending.size<3){const t=this.queue.shift();this.worker?(this.pending.set(t.key,t),this.worker.postMessage(t)):this.createChunk(ol(t.cx,t.cz,t.segments))}for(;this.chunks.size>55;){const e=[...this.chunks.values()].filter(n=>!n.group.visible).sort((n,s)=>n.used-s.used)[0];if(e)this.disposeChunk(e),this.chunks.delete(e.key);else break}}updateChunkCoins(t,e){t.crownBatch&&(t.coins.forEach((n,s)=>{ce.position.set(n.x-t.group.position.x,n.y+Math.sin(e*2+n.phase)*.2,n.z-t.group.position.z),ce.rotation.set(0,e*1.1+n.phase,0),ce.scale.setScalar(this.collectedIds.has(n.id)?0:1),ai(t.crownBatch,s,ce)}),t.crownBatch.instanceMatrix.needsUpdate=!0)}burst(t,e,n){if(!this.software)for(let s=0;s<12;s++)this.particles.length>=80&&this.particles.shift(),this.particles.push({x:t,y:e,z:n,vx:(Math.random()-.5)*7,vy:3+Math.random()*4,vz:(Math.random()-.5)*7,life:1})}update(t,e,n,s,r){Ag(t);for(const c of this.destinationTokens)c.group.visible=!this.save.keepsakes.includes(c.id)&&Math.hypot(c.x-n.x,c.z-n.z)<300,c.group.visible&&(c.group.rotation.y=t*.8,c.group.position.y=c.y+2.5+Math.sin(t*2+c.z)*.25);for(const c of this.stuntRings){const u=this.save.activities.includes(`stunt:${c.id}`);c.color.color.setHex(u?9032371:16766074)}for(const c of this.scenicGates){const u=this.save.trails?.[c.routeId]??0;c.color.color.setHex(xi.find(d=>d.id===c.routeId).color),c.color.color.multiplyScalar(c.index===u?1:c.index<u?.55:.75)}const o=this.vehicleShadow.geometry.attributes.position,a=Math.max(0,n.y-$t(n.x,n.z)),l=1+Math.min(a,18)*.045;for(let c=0;c<o.count;c++){const u=(c-1)/24*Math.PI*2,d=n.x+(c?Math.cos(u)*2.8*l:0),f=n.z+(c?Math.sin(u)*3.2*l:0);o.setXYZ(c,d,$t(d,f)+.12,f)}o.needsUpdate=!0,this.vehicleShadow.geometry.computeBoundingSphere(),this.ensureAround(n.x,n.z,n.heading),this.stream();for(const c of this.interactionHash.query(n.x,n.z,5))Math.hypot(c.x-n.x,c.z-n.z)>3.9||Math.abs(c.y-n.y-1.6)>3.1||(c.kind==="crown"&&!this.collectedIds.has(c.id)&&(this.collectedIds.add(c.id),this.collected++,this.burst(c.x,c.y,c.z),s(c.id)),c.kind==="barrel"&&!this.brokenIds.has(c.id)&&Math.abs(n.speed)>4&&(this.brokenIds.add(c.id),this.burst(c.x,c.y+1,c.z),r(c.id)));for(const c of this.chunks.values())if(c.group.visible){this.updateChunkCoins(c,t);for(const u of c.barrels)u.mesh.visible=!this.brokenIds.has(u.item.id);if(this.software)for(const{batch:u,props:d}of c.flora)u.userData.softwareCopies?.forEach((f,x)=>f.visible=Math.hypot(d[x].x-n.x,d[x].z-n.z)<95)}for(const c of this.landmarkObjects)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?600:1050);for(const c of this.decor)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?230:400);const h=In[0];for(const c of this.traffic){const u=(t*c.speed+c.phase*h.length)%h.length;let d=0,f=h.nodes.length-1;for(;d<f;){const b=d+f>>1;h.nodes[b].distance<u?d=b+1:f=b}const x=h.nodes[Math.max(0,d-1)],g=h.nodes[d],m=Se((u-x.distance)/(g.distance-x.distance||1),0,1),p=g.x-x.x,S=g.z-x.z,M=Math.hypot(p,S)||1,_=x.x+p*m+S/M*5,A=x.z+S*m-p/M*5,R=c.solid;this.colliderHash.remove(R);const C=Math.abs(p/M),P=Math.abs(S/M);Object.assign(R,{x:_,z:A,y:$t(_,A),w:5*P+8*C,d:8*P+5*C}),c.mesh.visible=Math.hypot(_-n.x,A-n.z)<(this.software?125:250),c.mesh.visible&&(this.colliderHash.add(R),c.mesh.position.set(_,$t(_,A),A),c.mesh.rotation.y=Math.atan2(-p,-S))}for(const c of this.people){if(c.pathRoute){const g=c.pathRoute,m=(t*1.35+c.offset)%(g.length*2),p=m>g.length,S=sl(g,p?g.length*2-m:m,c.side),M=Dn(S.x,S.z);if(M.distance<M.width/2+3){c.mesh.visible=!1;continue}[...this.nearbySolids(S.x,S.z)].some(A=>Math.abs(S.x-A.x)<A.w/2+1.2&&Math.abs(S.z-A.z)<A.d/2+1.2&&$t(S.x,S.z)<A.y+A.height)||(c.x=S.x,c.z=S.z),c.heading=S.heading+(p?0:Math.PI)}if(c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?90:180),!c.mesh.visible)continue;const u=Math.hypot(c.x-n.x,c.z-n.z)<10;let d=c.x+Math.sin(t*.4+c.phase)*3+(u?Math.sign(c.x-n.x)*4:0),f=c.z+Math.cos(t*.3+c.phase)*3;if(c.path){const g=Math.sin(t*.2+c.phase)*3.5;d=c.x+Math.cos(c.heading)*g,f=c.z-Math.sin(c.heading)*g}c.pathRoute&&(d=c.x,f=c.z),[...this.nearbySolids(d,f)].some(g=>Math.abs(d-g.x)<g.w/2+1&&Math.abs(f-g.z)<g.d/2+1)&&(d=c.x,f=c.z),c.mesh.position.set(d,$t(d,f)+Math.abs(Math.sin(t*4+c.phase))*.06,f),c.mesh.rotation.y=c.pathRoute?c.heading:c.path?c.heading+(Math.cos(t*.2+c.phase)>0?-Math.PI/2:Math.PI/2):c.phase+Math.sin(t*.2)*.3,c.mesh.rotation.z=Math.sin(t*4+c.phase)*.035;const x=Math.sin(t*3.5+c.phase)*.25;c.mesh.userData.legs?.forEach((g,m)=>g.rotation.x=x*(m?1:-1)),c.mesh.userData.arms?.forEach((g,m)=>g.rotation.x=x*(m?-1:1))}for(const c of this.jellies)c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?140:270),c.mesh.visible&&(c.mesh.position.set(c.x+Math.sin(t*.2+c.phase)*5,c.y+Math.sin(t+c.phase)*1.1,c.z),c.mesh.scale.setScalar(1+Math.sin(t*2+c.phase)*.045));if(!this.software){for(let c=0;c<42;c++){const u=n.x+(Me(c,0,62)-.5)*120,d=n.z+(Me(c,1,62)-.5)*120,f=n.y+(t*.8+Me(c,2,62)*30)%30;ce.position.set(u,f,d),ce.rotation.set(0,0,0),ce.scale.setScalar(.4+Me(c,3,62)*1.1),ai(this.bubbleMesh,c,ce)}this.bubbleMesh.instanceMatrix.needsUpdate=!0,this.particles=this.particles.filter(c=>c.life>0);for(let c=0;c<80;c++){const u=this.particles[c];u?(u.life-=e,u.vy-=9*e,u.x+=u.vx*e,u.y+=u.vy*e,u.z+=u.vz*e,ce.position.set(u.x,u.y,u.z),ce.scale.setScalar(Math.max(0,u.life))):ce.scale.setScalar(0),ce.rotation.set(0,0,0),ai(this.particleMesh,c,ce)}this.particleMesh.instanceMatrix.needsUpdate=!0}}recover(t,e){const n=Dn(t,e,!0);return{x:n.x,z:n.z,heading:n.heading}}disposeChunk(t){this.scene.remove(t.group);for(const e of t.rockSolids??[])this.colliderHash.remove(e);t.group.traverse(e=>{e.isInstancedMesh&&e.dispose()}),t.terrain.geometry.dispose(),this.software||(t.terrain.material.map.dispose(),t.terrain.material.dispose())}dispose(){this.worker?.terminate(),this.worker=null,this.pending.clear(),this.ready.length=0,this.queue.length=0;for(const t of this.chunks.values())this.disposeChunk(t);this.chunks.clear();for(const t of this.traffic)this.colliderHash.remove(t.solid)}}class sx{constructor(){this.keys=new Set,this.pointers=new Map;const t=/^(Arrow|Key[WASDR]|Space|Shift|Escape)/;addEventListener("keydown",e=>{t.test(e.code)&&(e.preventDefault(),this.keys.add(e.code))}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.clear());for(const e of document.querySelectorAll("[data-key]")){e.addEventListener("pointerdown",s=>{s.preventDefault(),e.setPointerCapture(s.pointerId),this.pointers.set(s.pointerId,e.dataset.key),this.keys.add(e.dataset.key)});const n=s=>{const r=this.pointers.get(s.pointerId);this.pointers.delete(s.pointerId),[...this.pointers.values()].includes(r)||this.keys.delete(r)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("lostpointercapture",n)}}has(...t){return t.some(e=>this.keys.has(e))}clear(){this.keys.clear(),this.pointers.clear()}}class rx{constructor(){this.enabled=!1,this.ctx=null}toggle(){return this.enabled=!this.enabled,this.enabled&&(this.ctx??=new AudioContext,this.ctx.resume()),this.enabled}tone(t=650,e=.12){if(!this.enabled||!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.value=t,s.gain.setValueAtTime(.06,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),n.connect(s).connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+e)}}const ph=`patty-wagon-underwater-v${Ba}-${Ur}`,ox="patty-wagon-free-roam-v1",Rn=(i,t)=>Array.isArray(i)?[...new Set(i.filter(t))]:[],dl=i=>t=>typeof t=="string"&&new RegExp(`^${i}:[a-z0-9:-]{1,90}$`).test(t);function pl(i=null){return{version:Ba,seed:Ur,coins:[],broken:[],activities:[],trails:{},bestStunts:{},discoveries:[],keepsakes:[],visited:[],secrets:[],position:null,legacy:i}}function ax(i){try{i??=globalThis.localStorage;const t=JSON.parse(i.getItem(ph)),e=JSON.parse(i.getItem(ox)),n=t?.legacy??(e?{coins:Rn(e.coins,r=>Number.isInteger(r)&&r>=0&&r<96).length,broken:Rn(e.broken,r=>Number.isInteger(r)&&r>=0&&r<42).length}:null),s=pl(n);if(t?.version!==Ba||t?.seed!==Ur)return s;s.coins=Rn(t.coins,dl("crown")),s.broken=Rn(t.broken,dl("prop")),s.activities=Rn(t.activities,r=>["jump","smash","explorer",...xi.map(o=>`trail:${o.id}`),...Ki.map(o=>`stunt:${o.id}`)].includes(r));for(const r of xi){const o=t.trails?.[r.id];s.trails[r.id]=s.activities.includes(`trail:${r.id}`)?r.gates.length:Number.isInteger(o)?Math.max(0,Math.min(r.gates.length,o)):0}s.keepsakes=Rn(t.keepsakes,r=>Us.some(o=>o.items.some(a=>a.id===r)));for(const r of Us)r.items.every(o=>s.keepsakes.includes(o.id))&&s.activities.push(`collection:${r.id}`);s.discoveries=Rn(t.discoveries,r=>Nn.some(o=>o.id===r));for(const r of Ki){const o=t.bestStunts?.[r.id];Number.isFinite(o)&&o>=25&&o<2e3&&(s.bestStunts[r.id]=Math.round(o*10)/10)}return s.visited=Rn(t.visited,r=>be.some(o=>o.id===r)),s.secrets=Rn(t.secrets,r=>Is.some(o=>o.id===r)),t.position&&["x","z","heading"].every(r=>Number.isFinite(t.position[r]))&&Math.max(Math.abs(t.position.x),Math.abs(t.position.z))<875&&(s.position={x:t.position.x,z:t.position.z,heading:t.position.heading}),n&&(s.legacy={coins:Math.max(0,Math.min(96,Number(n.coins)||0)),broken:Math.max(0,Math.min(42,Number(n.broken)||0))}),s}catch{return pl()}}function cx(i,t){try{return t??=globalThis.localStorage,t.setItem(ph,JSON.stringify(i)),!0}catch{return!1}}function lx(i,t,e,n){let s=i.x,r=i.z,o=0;const a=[...n].filter(l=>i.y<(l.y??0)+l.height&&i.y+2.6>(l.y??0));for(let l=0;l<3;l++){let h=null;for(const f of a){const x=f.x-f.w/2-2,g=f.x+f.w/2+2,m=f.z-f.d/2-2.1,p=f.z+f.d/2+2.1;if(s>x&&s<g&&r>m&&r<p){const C=[[s-x,-1,0],[g-s,1,0],[r-m,0,-1],[p-r,0,1]];C.sort((L,B)=>L[0]-B[0]);const[P,b,E]=C[0];s+=b*(P+.002),r+=E*(P+.002)}let S=-1/0,M=1/0,_=0,A=0,R=!1;for(const[C,P,b,E,L]of[[s,t,x,g,0],[r,e,m,p,1]]){if(Math.abs(P)<1e-9){(C<b||C>E)&&(R=!0);continue}const B=(b-C)/P,$=(E-C)/P,Y=Math.min(B,$),K=Math.max(B,$);Y>S&&(S=Y,_=L===0?-Math.sign(P):0,A=L===1?-Math.sign(P):0),M=Math.min(M,K)}!R&&S>=0&&S<=1&&S<=M&&(!h||S<h.t)&&(h={t:S,nx:_,nz:A})}if(!h){s+=t,r+=e;break}const c=Math.max(0,h.t-.001/(Math.hypot(t,e)||1));s+=t*c,r+=e*c,t*=1-c,e*=1-c;const u=t*h.nx+e*h.nz;u<0&&(t-=u*h.nx,e-=u*h.nz);const d=i.vx*h.nx+i.vz*h.nz;d<0&&(i.vx-=d*h.nx,i.vz-=d*h.nz),o++}return i.x=s,i.z=r,o&&(i.speed=Math.sign(i.speed)*Math.min(Math.abs(i.speed),Math.hypot(i.vx,i.vz))),o}const hx=18;function ux(i,t,e=[],n=()=>0){let s=n(i,t);for(const r of e){const o=ka(i,t,{baseY:0,...r});o!==null&&(s=Math.max(s,o))}return s}function ci(i,t,e){return i.heightAt?i.heightAt(t,e):ux(t,e,i.ramps??[])}function fx(i,t,e,n){e=Math.min(Math.max(e,0),.05);const s=ci(n,i.x,i.z),r=i.y<=s+.18&&i.vy<=0,o=t.boost&&t.throttle>0&&i.energy>1,a=n.collected>=80?2:n.collected>=30?1:0;i.energy=Se(i.energy+(o?-26:16)*e,0,100),i.speed+=t.throttle*(o?43:29)*e,i.speed*=Math.exp(-(t.brake?2.6:t.throttle?.25:.8)*e),i.speed=Se(i.speed,-16,(o?58:38)+a*4),i.heading-=t.steer*(t.brake?2.15:1.42)*Se(i.speed/25,-1,1.15)*e*(r?1:.38);const l=1-Math.exp(-(r?t.brake?1.35:5.5+a*.4:.65)*e);i.vx+=(-Math.sin(i.heading)*i.speed-i.vx)*l,i.vz+=(-Math.cos(i.heading)*i.speed-i.vz)*l;const h=i.x,c=i.z,u=n.nearbySolids?n.nearbySolids(i.x+i.vx*e/2,i.z+i.vz*e/2,Math.hypot(i.vx,i.vz)*e/2+4):n.solids??[],d=lx(i,i.vx*e,i.vz*e,u),f=n.boundary??gn/2-8;(Math.abs(i.x)>f||Math.abs(i.z)>f)&&(i.x=Se(i.x,-f,f),i.z=Se(i.z,-f,f),i.speed*=-.2,i.vx*=-.2,i.vz*=-.2);const x=ci(n,i.x,i.z),g=n.ramps?.some(R=>ka(h,c,{baseY:0,...R})!==null);let m=!1,p=!1;r&&s-x>.65&&Math.abs(i.speed)>8&&(i.vy=((g?8:2)+Math.abs(i.speed)*(g?.22:.1))*.9,m=!0),r&&!m?(p=!i.grounded,i.y=x,i.vy=0):(i.vy-=hx*e,i.y+=i.vy*e,i.y<=x&&(i.y=x,i.vy=0,p=!0)),["x","z","y","heading","speed","vx","vz","vy"].every(R=>Number.isFinite(i[R]))||Object.assign(i,xa()),i.grounded=i.y<=ci(n,i.x,i.z)+.001&&i.vy<=0;const S=-Math.sin(i.heading),M=-Math.cos(i.heading),_=Math.cos(i.heading),A=-Math.sin(i.heading);if(i.grounded){const R=ci(n,i.x+S*1.5,i.z+M*1.5),C=ci(n,i.x-S*1.5,i.z-M*1.5),P=ci(n,i.x-_*1.8,i.z-A*1.8),b=ci(n,i.x+_*1.8,i.z+A*1.8);i.pitch+=(Math.atan2(R-C,3)-i.pitch)*(1-Math.exp(-10*e)),i.roll+=(Math.atan2(b-P,3.6)-i.roll)*(1-Math.exp(-10*e))}else i.pitch*=Math.exp(-2*e),i.roll*=Math.exp(-2*e);return{boost:o,landed:p,launched:m,impacts:d}}function xa(i=vr(),t=$t){return{x:i.x,y:t(i.x,i.z),z:i.z,heading:i.heading??0,speed:0,vx:0,vz:0,vy:0,energy:100,pitch:0,roll:0,grounded:!0}}try{let nt=function(I){L.textContent=I,L.classList.add("visible"),_=m+3},W=function(){a.position={x:g.x,z:g.z,heading:g.heading},cx(a)||nt("This browser could not save your progress.")},_t=function(I,O){a.activities.includes(I)||(a.activities.push(I),W(),c.tone(950,.3),nt(O))},pt=function(){return`${a.coins.length} / ${l.coins.length} crowns · ${a.visited.length} / 7 areas explored · ${a.secrets.length} / 7 secrets · ${a.broken.length} props smashed · ${xi.filter(I=>a.trails[I.id]===I.gates.length).length} / 3 scenic routes · ${a.activities.filter(I=>I.startsWith("stunt:")).length} / 9 stunt rings · ${a.discoveries.length} / 3 destinations · ${a.keepsakes.length} / 9 keepsakes`},Mt=function(I){M=I,h.clear(),I?(i("#progress").textContent=pt(),i("#legacy").textContent=a.legacy?`Previous town archived: ${a.legacy.coins} discoveries. Your wagon keeps that upgrade credit.`:"",b.open||b.showModal()):(b.open&&b.close(),E.open&&E.close()),p=performance.now()},Ot=function(I,O){g=xa(I,l.heightAt.bind(l)),d.resetPosition(),f.reset(),x.reset(),A=null,r.position.set(g.x+Math.sin(g.heading)*18,g.y+9,g.z+Math.cos(g.heading)*18),l.ensureAround(g.x,g.z,g.heading,!0),W(),O&&nt(O)},qt=function(I,O,rt=!0){I.clearRect(0,0,O,O),I.fillStyle="#134c59",I.fillRect(0,0,O,O);const mt=(y,U)=>[(y/gn+.5)*O,(U/gn+.5)*O];for(const y of be){const[U,F]=mt(y.x,y.z),k=I.createRadialGradient(U,F,0,U,F,O*.19);k.addColorStop(0,y.color+"44"),k.addColorStop(1,y.color+"00"),I.fillStyle=k,I.beginPath(),I.arc(U,F,O*.19,0,Math.PI*2),I.fill()}I.lineCap="round",I.lineJoin="round",I.strokeStyle="#afddd0",I.lineWidth=O>300?3:1.5;for(const y of In)I.beginPath(),y.nodes.forEach((U,F)=>{const[k,X]=mt(U.x,U.z);F?I.lineTo(k,X):I.moveTo(k,X)}),I.stroke();I.strokeStyle="#c4c393",I.lineWidth=O>300?2:1;for(const y of Ms)I.beginPath(),y.nodes.forEach((U,F)=>{const[k,X]=mt(U.x,U.z);F?I.lineTo(k,X):I.moveTo(k,X)}),I.stroke();for(const y of Nn){const[U,F]=mt(y.x,y.z);I.fillStyle=a.discoveries.includes(y.id)?"#83d8c7":"#c9bccf",I.fillRect(U-3,F-3,6,6),O>300&&(I.font="11px system-ui",I.textAlign="center",I.fillText(y.name,U,F-9))}for(const y of Va){const[U,F]=mt(y.x,y.z);I.strokeStyle=a.activities.includes(`stunt:${y.id}`)?"#89d2b3":"#f4c477",I.beginPath(),I.arc(U,F,O>300?3:1.6,0,Math.PI*2),I.stroke()}for(const y of be){const[U,F]=mt(y.x,y.z);I.fillStyle=a.visited.includes(y.id)?"#ffd56d":"#d9e9d8",I.beginPath(),I.arc(U,F,O>300?5:2.2,0,Math.PI*2),I.fill(),O>300&&(I.font="600 12px system-ui",I.textAlign="center",I.fillText(y.name,U,F-12))}if(rt){const[y,U]=mt(g.x,g.z);I.save(),I.translate(y,U),I.rotate(-g.heading),I.fillStyle="#fff2bb",I.strokeStyle="#155968",I.lineWidth=2,I.beginPath(),I.moveTo(0,-7),I.lineTo(5,6),I.lineTo(0,3),I.lineTo(-5,6),I.closePath(),I.fill(),I.stroke(),I.restore()}for(const y of xi){const U=y.gates[a.trails[y.id]??0];if(!U)continue;const[F,k]=mt(U.x,U.z);I.strokeStyle="#ffe292",I.lineWidth=O>300?2:1,I.strokeRect(F-3,k-3,6,6),O>300&&(I.fillStyle="#fff1c5",I.font="11px system-ui",I.textAlign="center",I.fillText(`${y.name} ${(a.trails[y.id]??0)+1}/6`,F,k+17))}},et=function(){h.clear(),M=!0,b.open&&b.close(),E.open||E.showModal(),qt(i("#town-map").getContext("2d"),600),i("#map-progress").textContent=pt();for(const I of Us){const O=I.items.filter(rt=>a.keepsakes.includes(rt.id)).length;document.querySelector(`[data-collection="${I.id}"]`).textContent=`${I.name} · ${O}/3${O===3?" · Complete":" · Drive through keepsakes"}`}},ct=function(){e.setSize(innerWidth,innerHeight),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix()},J=function(I){requestAnimationFrame(J);const O=Math.min((I-p)/1e3,.12);if(p=I,M)return;m+=O,q.frames++,q.totalTime+=O,q.frameMs=q.frameMs*.95+O*1e3*.05,q.totalTime>1&&(q.fps=Math.round(q.frames/q.totalTime),q.frames=0,q.totalTime=0);const rt={throttle:Number(h.has("KeyW","ArrowUp"))-Number(h.has("KeyS","ArrowDown")),steer:Number(h.has("KeyD","ArrowRight"))-Number(h.has("KeyA","ArrowLeft")),brake:h.has("Space"),boost:h.has("ShiftLeft","ShiftRight")},mt=Math.max(1,Math.ceil(O/(1/60)));for(let y=0;y<mt;y++){const U=fx(g,rt,O/mt,l);if(x.step(g,(F,k,X)=>{W(),c.tone(X?1250:850,.18),nt(X?`${F.name} · collection complete`:`${F.item} found · ${k}/3`)}),f.step(g,U,(F,k,X)=>{W(),c.tone(X?1200:900,.22),nt(`${X?"Stunt badge":"New stunt best"} · ${F.id.replaceAll("-"," ")} · ${Math.round(k)} m`)}),U.launched&&!A&&(A={x:g.x,z:g.z}),U.landed&&A){const F=Math.hypot(g.x-A.x,g.z-A.z);R=Math.max(R,F),F>35&&_t("jump","Long jump · 35 meters cleared"),A=null}}l.update(m,O,g,y=>{a.coins.push(y),c.tone(600+a.coins.length%7*70),(l.collected===30||l.collected===80)&&nt("Wagon upgraded · more speed and sharper handling"),W()},y=>{a.broken.push(y),c.tone(120,.1),a.broken.length>=20&&_t("smash","Smash trail · 20 props broken"),W()}),d.update(g,(y,U,F)=>{W(),c.tone(F?1100:780,.15),nt(F?`${y.name} complete`:`${y.name} · ${U}/6 gates`)});for(const y of Nn)Math.hypot(g.x-y.x,g.z-y.z)<25&&!a.discoveries.includes(y.id)&&(a.discoveries.push(y.id),W(),c.tone(1050,.2),nt(`Discovered · ${y.name}`));for(const y of be)Math.hypot(g.x-y.x,g.z-y.z)<155&&!a.visited.includes(y.id)&&(a.visited.push(y.id),W(),a.visited.length===7&&_t("explorer","Town explorer · all seven areas discovered"));for(const y of Is)Math.hypot(g.x-y.x,g.z-y.z)<15&&!a.secrets.includes(y.id)&&(a.secrets.push(y.id),W(),c.tone(1150,.3),nt(`Secret discovered · ${y.name}`));u.position.set(g.x,g.y,g.z),u.rotation.order="YXZ",u.rotation.set(g.pitch,g.heading,g.roll+rt.steer*Math.min(Math.abs(g.speed)*.0025,.08));for(const y of u.userData.wheels)y.mesh.rotation.x+=g.speed*O/.73,y.mesh.rotation.y=y.front?-rt.steer*.32:0;u.userData.propeller.rotation.z+=g.speed*O*.4,K.set(g.x,g.y+2.2,g.z),Y.set(g.x+Math.sin(g.heading)*17,g.y+9,g.z+Math.cos(g.heading)*17),Y.y=Math.max(Y.y,l.heightAt(Y.x,Y.z)+3.8);for(let y=1;y<=8;y++){const U=y/8,F=K.x+(Y.x-K.x)*U,k=K.y+(Y.y-K.y)*U,X=K.z+(Y.z-K.z)*U;if([...l.nearbySolids(F,X)].some(at=>k>at.y&&k<at.y+at.height&&Math.abs(F-at.x)<at.w/2+.5&&Math.abs(X-at.z)<at.d/2+.5)){Y.lerp(K,1-U+.08);break}}if(r.position.lerp(Y,1-Math.exp(-6*O)),r.lookAt(g.x-Math.sin(g.heading)*5,g.y+1.8,g.z-Math.cos(g.heading)*5),o.position.set(g.x-90,g.y+150,g.z+90),o.target.position.set(g.x,g.y,g.z),m-P>.14){i("#score").textContent=a.coins.length,i("#speed-value").textContent=Math.round(Math.abs(g.speed)*3.6),i("#boost").value=g.energy,i("#upgrade").textContent=l.collected>=80?"Boost III":l.collected>=30?"Boost II":"Boost",i("#district").textContent=be.reduce((U,F)=>Math.hypot(g.x-U.x,g.z-U.z)<Math.hypot(g.x-F.x,g.z-F.z)?U:F).name,qt($,168),P=m;const y=e.domElement;y.dataset.renderer=n?"software":"webgl",y.dataset.worldSize=gn,y.dataset.activeChunks=[...l.chunks.values()].filter(U=>U.group.visible).length,y.dataset.frameMs=q.frameMs.toFixed(1),y.dataset.crowns=a.coins.length,y.dataset.position=`${g.x.toFixed(1)},${g.y.toFixed(1)},${g.z.toFixed(1)}`,y.dataset.grounded=g.grounded}m-C>10&&(W(),C=m),m>_&&L.classList.remove("visible"),(!n||I-S>100)&&(e.render(s,r),n&&(e.domElement.style.background="transparent"),S=I)};const i=I=>document.querySelector(I),t=i("#game"),{renderer:e,software:n}=pg(t),s=new Uu;s.fog=new Ca(6670015,n?230:350,n?630:1050);const r=new sn(58,innerWidth/innerHeight,.2,n?650:1250);s.add(new Sf(12970472,5401705,n?2:1.45)),n&&s.add(new Tf(14282973,.75));const o=new wf(16772545,n?.55:2);o.position.set(-90,150,90),o.castShadow=!n,o.shadow.mapSize.set(1024,1024),o.shadow.camera.left=-60,o.shadow.camera.right=60,o.shadow.camera.top=60,o.shadow.camera.bottom=-60,o.shadow.camera.far=400,o.shadow.bias=-.001,o.shadow.normalBias=.06,s.add(o),s.add(o.target);const a=ax(),l=new ix(s,a,{software:n}),h=new sx,c=new rx,u=Lg(),d=new Jg(a),f=new jg(a),x=new tx(a);if(s.add(u),n&&u.traverse(I=>{I.isMesh&&(I.renderOrder=5)}),n){const I=[l.particleMesh,l.bubbleMesh];for(const O of I)s.remove(O);nh(s);for(const O of I)s.add(O),O.visible=!1}let g=xa(a.position??vr(),l.heightAt.bind(l)),m=0,p=performance.now(),S=0,M=!1,_=0,A=null,R=0,C=0,P=0;const b=i("#menu"),E=i("#atlas"),L=i("#toast"),B=i("#minimap"),$=B.getContext("2d"),Y=new D,K=new D,q={fps:0,frameMs:0,frames:0,totalTime:0};i("#total").textContent=l.coins.length,b.addEventListener("cancel",I=>{I.preventDefault(),Mt(!1)}),b.addEventListener("close",()=>{E.open||(M=!1,p=performance.now())}),E.addEventListener("cancel",I=>{I.preventDefault(),Mt(!1)}),E.addEventListener("close",()=>{b.open||(M=!1,p=performance.now())}),i("#pause").onclick=()=>Mt(!0),i("#help").onclick=()=>Mt(!0),i("#resume").onclick=()=>Mt(!1),i("#close-map").onclick=()=>Mt(!1),i("#reset").onclick=()=>Ot(l.recover(g.x,g.z),"Back on the nearest road."),i("#sound").onclick=I=>{I.target.textContent=c.toggle()?"Sound on":"Sound off"};const ne=["The three houses & kelp arch","Restaurant landmarks & smash trail","Jellyfish trails & coral grotto","Goofy Goober & pearl garden","Thug Tug & sunken treasure","Dune jumps & mountain lookout","Neptune’s castle & royal garden"],Jt=i("#area-list");be.forEach((I,O)=>{const rt=document.createElement("button");rt.className="area",rt.dataset.area=I.id;const mt=document.createElement("strong");mt.textContent=I.name;const y=document.createElement("small");y.textContent=ne[O],rt.append(mt,y),rt.onclick=()=>{Mt(!1),Ot(vr(I.id),I.name)},Jt.append(rt)});for(const I of Nn){const O=document.createElement("button");O.className="area";const rt=document.createElement("strong"),mt=document.createElement("small");rt.textContent=I.name,mt.dataset.collection=I.id,mt.textContent="Drive through the floating keepsakes",O.append(rt,mt),O.onclick=()=>{Mt(!1),Ot({x:I.x,z:I.z-20,heading:Math.PI},I.name)},Jt.append(O)}i("#map").onclick=et,i("#minimap").onclick=et,addEventListener("keydown",I=>{I.repeat||(I.code==="Escape"&&(I.preventDefault(),Mt(!M)),I.code==="KeyR"&&i("#reset").click(),I.code==="KeyM"&&(I.preventDefault(),E.open?Mt(!1):et()))}),addEventListener("blur",()=>{M||Mt(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(W(),Mt(!0))}),addEventListener("pagehide",W),n||(t.addEventListener("webglcontextlost",I=>{I.preventDefault(),W(),Mt(!0);const O=i("#error");O.hidden=!1,O.textContent="Graphics paused. Waiting for the browser to restore the game…"}),t.addEventListener("webglcontextrestored",()=>{i("#error").hidden=!0,nt("Graphics restored · choose Resume to continue")})),addEventListener("resize",ct),ct(),Ot(a.position??vr()),window.__pattyWagon={get state(){return{...g}},get progress(){return structuredClone(a)},get diagnostics(){return{renderer:n?"software":"webgl",worldSize:gn,roadLength:Math.round(In.reduce((I,O)=>I+O.length,0)),loopLength:Math.round(In[0].length),crowns:l.coins.length,breakables:l.breakables.length,ramps:l.ramps.length,districts:be.length,activeChunks:[...l.chunks.values()].filter(I=>I.group.visible).length,cachedChunks:l.chunks.size,drawCalls:e.info.render.calls??e.info.render.faces,fps:q.fps,bestJump:R,districtDetails:l.districtObjects.length,scenicGates:l.scenicGates.length,destinations:l.discoveryObjects.length,stuntRings:l.stuntRings.length}}},nt("WASD / arrows · drive   Shift · boost   M · town map"),requestAnimationFrame(J)}catch(i){const t=document.querySelector("#error");t.hidden=!1,t.textContent=`The underwater town could not start. Refresh the page to try again. ${i.message}`,console.error(i)}
