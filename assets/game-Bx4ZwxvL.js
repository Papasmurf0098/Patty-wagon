(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="180",Mh=0,$a=1,yh=2,pl=1,ml=2,An=3,Zn=0,Ge=1,ke=2,qn=0,Hi=1,Ja=2,Za=3,Ka=4,Sh=5,ui=100,Eh=101,bh=102,wh=103,Th=104,Ah=200,Rh=201,Ch=202,Ph=203,wo=204,To=205,Lh=206,Ih=207,Dh=208,Uh=209,Nh=210,Fh=211,zh=212,Oh=213,Bh=214,Ao=0,Ro=1,Co=2,Xi=3,Po=4,Lo=5,Io=6,Do=7,Tr=0,kh=1,Hh=2,Yn=0,Vh=1,Gh=2,Wh=3,gl=4,Xh=5,qh=6,Yh=7,xl=300,qi=301,Yi=302,Uo=303,No=304,Ar=306,ys=1e3,di=1001,Fo=1002,je=1003,$h=1004,ks=1005,Je=1006,zr=1007,Xn=1008,xn=1009,_l=1010,vl=1011,Ss=1012,_a=1013,pi=1014,pn=1015,Us=1016,va=1017,Ma=1018,Es=1020,Ml=35902,yl=35899,Sl=1021,El=1022,Ze=1023,bs=1026,ws=1027,ya=1028,Sa=1029,bl=1030,Ea=1031,ba=1033,dr=33776,pr=33777,mr=33778,gr=33779,zo=35840,Oo=35841,Bo=35842,ko=35843,Ho=36196,Vo=37492,Go=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,$o=37812,Jo=37813,Zo=37814,Ko=37815,jo=37816,Qo=37817,ta=37818,ea=37819,na=37820,ia=37821,sa=36492,ra=36494,oa=36495,aa=36283,ca=36284,la=36285,ha=36286,Jh=3200,Zh=3201,wa=0,Kh=1,Rn="",Le="srgb",$i="srgb-linear",yr="linear",he="srgb",Mi=7680,ja=519,jh=512,Qh=513,tu=514,wl=515,eu=516,nu=517,iu=518,su=519,Qa=35044,tc=35048,ec="300 es",mn=2e3,Sr=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,ua=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function ru(i,t){return(i%t+t)%t}function Br(i,t,e){return(1-e)*i+e*t}function os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ns{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||h!==f||c!==g){let m=1-a;const p=l*d+h*f+c*g+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),R=Math.atan2(A,p*y);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const _=a*y;if(l=l*m+d*_,h=h*m+f*_,c=c*m+g*_,u=u*m+x*_,m===1-a){const A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new D,nc=new Ns;class Xt{constructor(t,e,n,s,r,o,a,l,h){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],M=s[4],_=s[7],A=s[2],R=s[5],L=s[8];return r[0]=o*x+a*y+l*A,r[3]=o*m+a*M+l*R,r[6]=o*p+a*_+l*L,r[1]=h*x+c*y+u*A,r[4]=h*m+c*M+u*R,r[7]=h*p+c*_+u*L,r[2]=d*x+f*y+g*A,r[5]=d*m+f*M+g*R,r[8]=d*p+f*_+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*h-c*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new Xt;function Tl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){const i=Er("canvas");return i.style.display="block",i}const ic={};function Ts(i){i in ic||(ic[i]=!0,console.warn(i))}function au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){const i={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$i]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:he,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const re=cu();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class lu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yi===void 0&&(yi=Er("canvas")),yi.width=t.width,yi.height=t.height;const s=yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hu=0;class Ta{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vr(s[o].image)):r.push(Vr(s[o]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uu=0;const Gr=new D;class ze extends ji{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=di,s=di,r=Je,o=Xn,a=Ze,l=xn,h=ze.DEFAULT_ANISOTROPY,c=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Qi(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gr).x}get height(){return this.source.getSize(Gr).y}get depth(){return this.source.getSize(Gr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=xl;ze.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,_=(f+1)/2,A=(p+1)/2,R=(c+d)/4,L=(u+x)/4,P=(g+m)/4;return M>_&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=L/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=R/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=L/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-c)/y,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new ze(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ta(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Al extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Vs.subVectors(this.max,as),Si.subVectors(t.a,as),Ei.subVectors(t.b,as),bi.subVectors(t.c,as),Nn.subVectors(Ei,Si),Fn.subVectors(bi,Ei),ei.subVectors(Si,bi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ei.z,ei.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ei.z,0,-ei.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ei.y,ei.x,0];return!Wr(e,Si,Ei,bi,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Wr(e,Si,Ei,bi,Vs))?!1:(Gs.crossVectors(Nn,Fn),e=[Gs.x,Gs.y,Gs.z],Wr(e,Si,Ei,bi,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yn=[new D,new D,new D,new D,new D,new D,new D,new D],on=new D,Hs=new Un,Si=new D,Ei=new D,bi=new D,Nn=new D,Fn=new D,ei=new D,as=new D,Vs=new D,Gs=new D,ni=new D;function Wr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);const a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),h=e.dot(ni),c=n.dot(ni);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const pu=new Un,cs=new D,Xr=new D;class Fs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Xr)),this.expandByPoint(cs.copy(t.center).sub(Xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Sn=new D,qr=new D,Ws=new D,zn=new D,Yr=new D,Xs=new D,$r=new D;class mu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qr.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(qr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ws),a=zn.dot(this.direction),l=-zn.dot(Ws),h=zn.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){const x=1/c;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qr).addScaledVector(Ws,d),f}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){Yr.subVectors(e,t),Xs.subVectors(n,t),$r.crossVectors(Yr,Xs);let o=this.direction.dot($r),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Xs.crossVectors(zn,Xs));if(l<0)return null;const h=a*this.direction.dot(Yr.cross(zn));if(h<0||l+h>o)return null;const c=-a*zn.dot($r);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,l,h,c,u,d,f,g,x,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,l,h,c,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-x*h,e[9]=-a*l,e[2]=x-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+x,e[1]=l*u,e[5]=x*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+x,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,xu)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),On.crossVectors(n,qe),On.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),On.crossVectors(n,qe)),On.normalize(),qs.crossVectors(qe,On),s[0]=On.x,s[4]=qs.x,s[8]=qe.x,s[1]=On.y,s[5]=qs.y,s[9]=qe.y,s[2]=On.z,s[6]=qs.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],M=n[7],_=n[11],A=n[15],R=s[0],L=s[4],P=s[8],b=s[12],S=s[1],I=s[5],z=s[9],G=s[13],J=s[2],Z=s[6],Y=s[10],nt=s[14],X=s[3],_t=s[7],ht=s[11],Et=s[15];return r[0]=o*R+a*S+l*J+h*X,r[4]=o*L+a*I+l*Z+h*_t,r[8]=o*P+a*z+l*Y+h*ht,r[12]=o*b+a*G+l*nt+h*Et,r[1]=c*R+u*S+d*J+f*X,r[5]=c*L+u*I+d*Z+f*_t,r[9]=c*P+u*z+d*Y+f*ht,r[13]=c*b+u*G+d*nt+f*Et,r[2]=g*R+x*S+m*J+p*X,r[6]=g*L+x*I+m*Z+p*_t,r[10]=g*P+x*z+m*Y+p*ht,r[14]=g*b+x*G+m*nt+p*Et,r[3]=y*R+M*S+_*J+A*X,r[7]=y*L+M*I+_*Z+A*_t,r[11]=y*P+M*z+_*Y+A*ht,r[15]=y*b+M*G+_*nt+A*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*h*u-r*a*d+n*h*d+s*a*f-n*l*f)+x*(+e*l*f-e*h*d+r*o*d-s*o*f+s*h*c-r*l*c)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-s*a*c-e*l*u+e*a*d+s*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*h-x*d*h+x*l*f-a*m*f-u*l*p+a*d*p,M=g*d*h-c*m*h-g*l*f+o*m*f+c*l*p-o*d*p,_=c*x*h-g*u*h+g*a*f-o*x*f-c*a*p+o*u*p,A=g*u*l-c*x*l-g*a*d+o*x*d+c*a*m-o*u*m,R=e*y+n*M+s*_+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=y*L,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*L,t[2]=(a*m*r-x*l*r+x*s*h-n*m*h-a*s*p+n*l*p)*L,t[3]=(u*l*r-a*d*r-u*s*h+n*d*h+a*s*f-n*l*f)*L,t[4]=M*L,t[5]=(c*m*r-g*d*r+g*s*f-e*m*f-c*s*p+e*d*p)*L,t[6]=(g*l*r-o*m*r-g*s*h+e*m*h+o*s*p-e*l*p)*L,t[7]=(o*d*r-c*l*r+c*s*h-e*d*h-o*s*f+e*l*f)*L,t[8]=_*L,t[9]=(g*u*r-c*x*r-g*n*f+e*x*f+c*n*p-e*u*p)*L,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*L,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*L,t[12]=A*L,t[13]=(c*x*s-g*u*s+g*n*d-e*x*d-c*n*m+e*u*m)*L,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*L,t[15]=(o*u*s-c*a*s+c*n*l-e*u*l-o*n*d+e*a*d)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,g=r*u,x=o*c,m=o*u,p=a*u,y=l*h,M=l*c,_=l*u,A=n.x,R=n.y,L=n.z;return s[0]=(1-(x+p))*A,s[1]=(f+_)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(f-_)*R,s[5]=(1-(d+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+M)*L,s[9]=(m-y)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const o=wi.set(s[4],s[5],s[6]).length(),a=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const h=1/r,c=1/o,u=1/a;return an.elements[0]*=h,an.elements[1]*=h,an.elements[2]*=h,an.elements[4]*=c,an.elements[5]*=c,an.elements[6]*=c,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn,l=!1){const h=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===mn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Sr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn,l=!1){const h=this.elements,c=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===mn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Sr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new D,an=new oe,gu=new D(0,0,0),xu=new D(1,1,1),On=new D,qs=new D,qe=new D,oc=new oe,ac=new Ns;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _u=0;const cc=new D,Ti=new Ns,En=new oe,Ys=new D,ls=new D,vu=new D,Mu=new Ns,lc=new D(1,0,0),hc=new D(0,1,0),uc=new D(0,0,1),fc={type:"added"},yu={type:"removed"},Ai={type:"childadded",child:null},Jr={type:"childremoved",child:null};class Ae extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new D,e=new un,n=new Ns,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Xt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ls,Ys,this.up):En.lookAt(Ys,ls,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(En),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new D(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new D,bn=new D,Zr=new D,wn=new D,Ri=new D,Ci=new D,dc=new D,Kr=new D,jr=new D,Qr=new D,to=new pe,eo=new pe,no=new pe;class hn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),bn.subVectors(n,e),Zr.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(bn),l=cn.dot(Zr),h=bn.dot(bn),c=bn.dot(Zr),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,n),no.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(to,r.x),o.addScaledVector(eo,r.y),o.addScaledVector(no,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),bn.subVectors(t,e),cn.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),cn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ri.subVectors(s,n),Ci.subVectors(r,n),Kr.subVectors(t,n);const l=Ri.dot(Kr),h=Ci.dot(Kr);if(l<=0&&h<=0)return e.copy(n);jr.subVectors(t,s);const c=Ri.dot(jr),u=Ci.dot(jr);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Ri,o);Qr.subVectors(t,r);const f=Ri.dot(Qr),g=Ci.dot(Qr);if(g>=0&&f<=g)return e.copy(r);const x=f*h-l*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Ci,a);const m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return dc.subVectors(r,s),a=(u-c)/(u-c+(f-g)),e.copy(s).addScaledVector(dc,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=ru(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=io(o,r,t+1/3),this.g=io(o,r,t),this.b=io(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return re.workingToColorSpace(Fe.copy(this),t),Math.round(jt(Fe.r*255,0,255))*65536+Math.round(jt(Fe.g*255,0,255))*256+Math.round(jt(Fe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Le){re.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL($s);const n=Br(Bn.h,$s.h,e),s=Br(Bn.s,$s.s,e),r=Br(Bn.l,$s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Gt;Gt.NAMES=Cl;let Su=0;class ts extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Hi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=To,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Rr extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,Js=new pt;let Eu=0;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}}class Pl extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ll extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bu=0;const en=new oe,so=new Ae,Pi=new D,Ye=new Un,hs=new Un,Pe=new D;class ye extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tl(t)?Ll:Pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ye.min,hs.min),Ye.expandByPoint(Pe),Pe.addVectors(Ye.max,hs.max),Ye.expandByPoint(Pe)):(Ye.expandByPoint(hs.min),Ye.expandByPoint(hs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Pe.fromBufferAttribute(a,h),l&&(Pi.fromBufferAttribute(t,h),Pe.add(Pi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const h=new D,c=new D,u=new D,d=new pt,f=new pt,g=new pt,x=new D,m=new D;function p(P,b,S){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),c.sub(h),u.sub(h),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(I),a[P].add(x),a[b].add(x),a[S].add(x),l[P].add(m),l[b].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,b=y.length;P<b;++P){const S=y[P],I=S.start,z=S.count;for(let G=I,J=I+z;G<J;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new D,_=new D,A=new D,R=new D;function L(P){A.fromBufferAttribute(s,P),R.copy(A);const b=a[P];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(R,b);const I=_.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,I)}for(let P=0,b=y.length;P<b;++P){const S=y[P],I=S.start,z=S.count;for(let G=I,J=I+z;G<J;G+=3)L(t.getX(G+0)),L(t.getX(G+1)),L(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,h=new D,c=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new Ue(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new oe,ii=new mu,Zs=new Fs,mc=new D,Ks=new D,js=new D,Qs=new D,ro=new D,tr=new D,gc=new D,er=new D;class Ke extends Ae{constructor(t=new ye,e=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){tr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(ro.fromBufferAttribute(u,t),o?tr.addScaledVector(ro,c):tr.addScaledVector(ro.sub(e),c))}e.add(tr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Zs.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Zs,mc)===null||ii.origin.distanceToSquared(mc)>(t.far-t.near)**2))&&(pc.copy(r).invert(),ii.copy(t.ray).applyMatrix4(pc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,A=M;_<A;_+=3){const R=a.getX(_),L=a.getX(_+1),P=a.getX(_+2);s=nr(this,p,t,n,h,c,u,R,L,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=nr(this,o,t,n,h,c,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,A=M;_<A;_+=3){const R=_,L=_+1,P=_+2;s=nr(this,p,t,n,h,c,u,R,L,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=m,M=m+1,_=m+2;s=nr(this,o,t,n,h,c,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wu(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Zn,a),l===null)return null;er.copy(a),er.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(er);return h<e.near||h>e.far?null:{distance:h,point:er.clone(),object:i}}function nr(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,Ks),i.getVertexPosition(l,js),i.getVertexPosition(h,Qs);const c=wu(i,t,e,n,Ks,js,Qs,gc);if(c){const u=new D;hn.getBarycoord(gc,Ks,js,Qs,u),s&&(c.uv=hn.getInterpolatedAttribute(s,a,l,h,u,new pt)),r&&(c.uv1=hn.getInterpolatedAttribute(r,a,l,h,u,new pt)),o&&(c.normal=hn.getInterpolatedAttribute(o,a,l,h,u,new D),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new D,materialIndex:0};hn.getNormal(Ks,js,Qs,d.normal),c.face=d,c.barycoord=u}return c}class _i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(u,2));function g(x,m,p,y,M,_,A,R,L,P,b){const S=_/L,I=A/P,z=_/2,G=A/2,J=R/2,Z=L+1,Y=P+1;let nt=0,X=0;const _t=new D;for(let ht=0;ht<Y;ht++){const Et=ht*I-G;for(let Bt=0;Bt<Z;Bt++){const $t=Bt*S-z;_t[x]=$t*y,_t[m]=Et*M,_t[p]=J,h.push(_t.x,_t.y,_t.z),_t[x]=0,_t[m]=0,_t[p]=R>0?1:-1,c.push(_t.x,_t.y,_t.z),u.push(Bt/L),u.push(1-ht/P),nt+=1}}for(let ht=0;ht<P;ht++)for(let Et=0;Et<L;Et++){const Bt=d+Et+Z*ht,$t=d+Et+Z*(ht+1),ee=d+(Et+1)+Z*(ht+1),qt=d+(Et+1)+Z*ht;l.push(Bt,$t,qt),l.push($t,ee,qt),X+=6}a.addGroup(f,X,b),f+=X,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function Tu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Il(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Au={clone:Ji,merge:Be};var Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Aa extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new D,xc=new pt,_c=new pt;class sn extends Aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,xc,_c),e.subVectors(_c,xc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Ii=1;class Pu extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Li,Ii,t,e);s.layers=this.layers,this.add(s);const r=new sn(Li,Ii,t,e);r.layers=this.layers,this.add(r);const o=new sn(Li,Ii,t,e);o.layers=this.layers,this.add(o);const a=new sn(Li,Ii,t,e);a.layers=this.layers,this.add(a);const l=new sn(Li,Ii,t,e);l.layers=this.layers,this.add(l);const h=new sn(Li,Ii,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dl extends ze{constructor(t=[],e=qi,n,s,r,o,a,l,h,c){super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lu extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:qn});r.uniforms.tEquirect.value=e;const o=new Ke(s,r),a=e.minFilter;return e.minFilter===Xn&&(e.minFilter=Je),new Pu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ie extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iu={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ra{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Du extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ir=new D,vc=new D;class Uu extends Ae{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,s=e.length;n<s;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ir.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(ir);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){ir.setFromMatrixPosition(t.matrixWorld),vc.setFromMatrixPosition(this.matrixWorld);const n=ir.distanceTo(vc)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),n>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class Ca extends ze{constructor(t=null,e=1,n=1,s,r,o,a,l,h=je,c=je,u,d){super(null,o,a,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new oe,yc=new oe,sr=[],Sc=new Un,Nu=new oe,us=new Ke,fs=new Fs;class Ui extends Ke{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),Sc.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(Sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),fs.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),yc.multiplyMatrices(n,Di),us.matrixWorld=yc,us.raycast(t,sr);for(let o=0,a=sr.length;o<a;o++){const l=sr[o];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ca(new Float32Array(s*this.count),s,this.count,ya,pn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ao=new D,Fu=new D,zu=new Xt;class li{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ao.subVectors(n,e).cross(Fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zu.getNormalMatrix(t),s=this.coplanarPoint(ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Fs,Ou=new pt(.5,.5),rr=new D;class Cr{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],M=r[13],_=r[14],A=r[15];if(s[0].setComponents(h-o,f-c,p-g,A-y).normalize(),s[1].setComponents(h+o,f+c,p+g,A+y).normalize(),s[2].setComponents(h+a,f+u,p+x,A+M).normalize(),s[3].setComponents(h-a,f-u,p-x,A-M).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(h-l,f-d,p-m,A-_).normalize();else if(s[4].setComponents(h-l,f-d,p-m,A-_).normalize(),e===mn)s[5].setComponents(h+l,f+d,p+m,A+_).normalize();else if(e===Sr)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);const e=Ou.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ul extends ze{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nl extends ze{constructor(t,e,n=pi,s,r,o,a=je,l=je,h,c=bs,u=1){if(c!==bs&&c!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fl extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class jn extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function y(){const _=new D,A=new D;let R=0;const L=(e-t)/n;for(let P=0;P<=r;P++){const b=[],S=P/r,I=S*(e-t)+t;for(let z=0;z<=s;z++){const G=z/s,J=G*l+a,Z=Math.sin(J),Y=Math.cos(J);A.x=I*Z,A.y=-S*n+m,A.z=I*Y,u.push(A.x,A.y,A.z),_.set(Z,L,Y).normalize(),d.push(_.x,_.y,_.z),f.push(G,1-S),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const S=x[b][P],I=x[b+1][P],z=x[b+1][P+1],G=x[b][P+1];(t>0||b!==0)&&(c.push(S,I,G),R+=3),(e>0||b!==r-1)&&(c.push(I,z,G),R+=3)}h.addGroup(p,R,0),p+=R}function M(_){const A=g,R=new pt,L=new D;let P=0;const b=_===!0?t:e,S=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let z=0;z<=s;z++){const J=z/s*l+a,Z=Math.cos(J),Y=Math.sin(J);L.x=b*Y,L.y=m*S,L.z=b*Z,u.push(L.x,L.y,L.z),d.push(0,S,0),R.x=Z*.5+.5,R.y=Y*.5*S+.5,f.push(R.x,R.y),g++}for(let z=0;z<s;z++){const G=A+z,J=I+z;_===!0?c.push(J,J+1,G):c.push(J+1,J,G),P+=3}h.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rn extends jn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new rn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pa extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new D,_=new D,A=new D;for(let R=0;R<e.length;R+=3)f(e[R+0],M),f(e[R+1],_),f(e[R+2],A),l(M,_,A,y)}function l(y,M,_,A){const R=A+1,L=[];for(let P=0;P<=R;P++){L[P]=[];const b=y.clone().lerp(_,P/R),S=M.clone().lerp(_,P/R),I=R-P;for(let z=0;z<=I;z++)z===0&&P===R?L[P][z]=b:L[P][z]=b.clone().lerp(S,z/I)}for(let P=0;P<R;P++)for(let b=0;b<2*(R-P)-1;b++){const S=Math.floor(b/2);b%2===0?(d(L[P][S+1]),d(L[P+1][S]),d(L[P][S])):(d(L[P][S+1]),d(L[P+1][S+1]),d(L[P+1][S]))}}function h(y){const M=new D;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function c(){const y=new D;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const _=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(_,1-A)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],_=o[y+2],A=o[y+4],R=Math.max(M,_,A),L=Math.min(M,_,A);R>.9&&L<.1&&(M<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){const _=y*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const y=new D,M=new D,_=new D,A=new D,R=new pt,L=new pt,P=new pt;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),R.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),A.copy(y).add(M).add(_).divideScalar(3);const I=m(A);x(R,S+0,y,I),x(L,S+2,M,I),x(P,S+4,_,I)}}function x(y,M,_,A){A<0&&y.x===1&&(o[M]=y.x-1),_.x===0&&_.z===0&&(o[M]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.vertices,t.indices,t.radius,t.details)}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,l=new oe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class La extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bu extends La{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ia(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const or=new D,co=new Ia,lo=new Ia,ho=new Ia;class Da extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),h=or);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=or),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),co.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,x,m),lo.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,x,m),ho.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(co.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),lo.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),ho.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(co.calc(l),lo.calc(l),ho.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ec(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ku(i,t){const e=1-i;return e*e*t}function Hu(i,t){return 2*(1-i)*i*t}function Vu(i,t){return i*i*t}function _s(i,t,e,n){return ku(i,t)+Hu(i,e)+Vu(i,n)}function Gu(i,t){const e=1-i;return e*e*e*t}function Wu(i,t){const e=1-i;return 3*e*e*i*t}function Xu(i,t){return 3*(1-i)*i*i*t}function qu(i,t){return i*i*i*t}function vs(i,t,e,n,s){return Gu(i,t)+Wu(i,e)+Xu(i,n)+qu(i,s)}class zl extends vn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yu extends vn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(t,s.x,r.x,o.x,a.x),vs(t,s.y,r.y,o.y,a.y),vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ol extends vn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $u extends vn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends vn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kl extends vn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(t,s.x,r.x,o.x),_s(t,s.y,r.y,o.y),_s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ec(a,l.x,h.x,c.x,u.x),Ec(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var br=Object.freeze({__proto__:null,ArcCurve:Bu,CatmullRomCurve3:Da,CubicBezierCurve:zl,CubicBezierCurve3:Yu,EllipseCurve:La,LineCurve:Ol,LineCurve3:$u,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:kl,SplineCurve:Hl});class Ju extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new br[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new br[s.type]().fromJSON(s))}return this}}class bc extends Ju{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ol(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Bl(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new zl(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new La(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class es extends bc{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new bc().fromJSON(s))}return this}}function Zu(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Vl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=ef(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let c=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>c&&(c=f),g>u&&(u=g)}h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return As(r,o,e,a,l,h,0),o}function Vl(i,t,e,n,s){let r;if(s===df(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=wc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=wc(o/n|0,i[o],i[o+1],r);return r&&Zi(r,r.next)&&(Cs(r),r=r.next),r}function gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zi(e,e.next)||_e(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function As(i,t,e,n,s,r,o){if(!i)return;!o&&r&&af(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,h=i.next;if(r?ju(i,n,s,r):Ku(i)){t.push(l.i,i.i,h.i),Cs(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Qu(gi(i),t),As(i,t,e,n,s,r,2)):o===2&&tf(i,t,e,n,s,r):As(gi(i),t,e,n,s,r,1);break}}}function Ku(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=Math.min(s,r,o),u=Math.min(a,l,h),d=Math.max(s,r,o),f=Math.max(a,l,h);let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&ms(s,a,r,l,o,h,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ju(i,t,e,n){const s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,u=r.y,d=o.y,f=Math.min(a,l,h),g=Math.min(c,u,d),x=Math.max(a,l,h),m=Math.max(c,u,d),p=fa(f,g,t,e,n),y=fa(x,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ms(a,c,l,u,h,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ms(a,c,l,u,h,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ms(a,c,l,u,h,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ms(a,c,l,u,h,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Qu(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Zi(n,s)&&Wl(n,e,e.next,s)&&Rs(n,s)&&Rs(s,n)&&(t.push(n.i,e.i,s.i),Cs(e),Cs(e.next),e=i=s),e=e.next}while(e!==i);return gi(e)}function tf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hf(o,a)){let l=Xl(o,a);o=gi(o,o.next),l=gi(l,l.next),As(o,t,e,n,s,r,0),As(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ef(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=Vl(i,a,l,n,!1);h===h.next&&(h.steiner=!0),s.push(lf(h))}s.sort(nf);for(let r=0;r<s.length;r++)e=sf(s[r],e);return e}function nf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function sf(i,t){const e=rf(i,t);if(!e)return t;const n=Xl(e,i);return gi(n,n.next),gi(e,e.next)}function rf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Zi(i,e))return e;do{if(Zi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let c=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Gl(s<h?n:r,s,l,h,s<h?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Rs(e,i)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&of(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function of(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function af(i,t,e,n){let s=i;do s.z===0&&(s.z=fa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cf(s)}function cf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function fa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gl(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ms(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Gl(i,t,e,n,s,r,o,a)}function hf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uf(i,t)&&(Rs(i,t)&&Rs(t,i)&&ff(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Zi(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zi(i,t){return i.x===t.x&&i.y===t.y}function Wl(i,t,e,n){const s=cr(_e(i,t,e)),r=cr(_e(i,t,n)),o=cr(_e(e,n,i)),a=cr(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&ar(i,e,t)||r===0&&ar(i,n,t)||o===0&&ar(e,i,n)||a===0&&ar(e,t,n))}function ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function cr(i){return i>0?1:i<0?-1:0}function uf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function ff(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xl(i,t){const e=da(i.i,i.x,i.y),n=da(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wc(i,t,e,n){const s=da(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function da(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function df(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class pf{static triangulate(t,e,n=2){return Zu(t,e,n)}}class Cn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Cn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Tc(t),Ac(n,t);let o=t.length;e.forEach(Tc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ac(n,e[l]);const a=pf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Tc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ac(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ua extends ye{constructor(t=new es([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:mf;let M,_=!1,A,R,L,P;p&&(M=p.getSpacedPoints(c),_=!0,d=!1,A=p.computeFrenetFrames(c,!1),R=new D,L=new D,P=new D),d||(m=0,f=0,g=0,x=0);const b=a.extractPoints(h);let S=b.shape;const I=b.holes;if(!Cn.isClockWise(S)){S=S.reverse();for(let N=0,O=I.length;N<O;N++){const H=I[N];Cn.isClockWise(H)&&(I[N]=H.reverse())}}function G(N){const H=10000000000000001e-36;let q=N[0];for(let ut=1;ut<=N.length;ut++){const j=ut%N.length,ot=N[j],It=ot.x-q.x,mt=ot.y-q.y,E=It*It+mt*mt,v=Math.max(Math.abs(ot.x),Math.abs(ot.y),Math.abs(q.x),Math.abs(q.y)),U=H*v*v;if(E<=U){N.splice(j,1),ut--;continue}q=ot}}G(S),I.forEach(G);const J=I.length,Z=S;for(let N=0;N<J;N++){const O=I[N];S=S.concat(O)}function Y(N,O,H){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(O,H)}const nt=S.length;function X(N,O,H){let q,ut,j;const ot=N.x-O.x,It=N.y-O.y,mt=H.x-N.x,E=H.y-N.y,v=ot*ot+It*It,U=ot*E-It*mt;if(Math.abs(U)>Number.EPSILON){const V=Math.sqrt(v),st=Math.sqrt(mt*mt+E*E),et=O.x-It/V,At=O.y+ot/V,dt=H.x-E/st,Rt=H.y+mt/st,Tt=((dt-et)*E-(Rt-At)*mt)/(ot*E-It*mt);q=et+ot*Tt-N.x,ut=At+It*Tt-N.y;const ft=q*q+ut*ut;if(ft<=2)return new pt(q,ut);j=Math.sqrt(ft/2)}else{let V=!1;ot>Number.EPSILON?mt>Number.EPSILON&&(V=!0):ot<-Number.EPSILON?mt<-Number.EPSILON&&(V=!0):Math.sign(It)===Math.sign(E)&&(V=!0),V?(q=-It,ut=ot,j=Math.sqrt(v)):(q=ot,ut=It,j=Math.sqrt(v/2))}return new pt(q/j,ut/j)}const _t=[];for(let N=0,O=Z.length,H=O-1,q=N+1;N<O;N++,H++,q++)H===O&&(H=0),q===O&&(q=0),_t[N]=X(Z[N],Z[H],Z[q]);const ht=[];let Et,Bt=_t.concat();for(let N=0,O=J;N<O;N++){const H=I[N];Et=[];for(let q=0,ut=H.length,j=ut-1,ot=q+1;q<ut;q++,j++,ot++)j===ut&&(j=0),ot===ut&&(ot=0),Et[q]=X(H[q],H[j],H[ot]);ht.push(Et),Bt=Bt.concat(Et)}let $t;if(m===0)$t=Cn.triangulateShape(Z,I);else{const N=[],O=[];for(let H=0;H<m;H++){const q=H/m,ut=f*Math.cos(q*Math.PI/2),j=g*Math.sin(q*Math.PI/2)+x;for(let ot=0,It=Z.length;ot<It;ot++){const mt=Y(Z[ot],_t[ot],j);$(mt.x,mt.y,-ut),q===0&&N.push(mt)}for(let ot=0,It=J;ot<It;ot++){const mt=I[ot];Et=ht[ot];const E=[];for(let v=0,U=mt.length;v<U;v++){const V=Y(mt[v],Et[v],j);$(V.x,V.y,-ut),q===0&&E.push(V)}q===0&&O.push(E)}}$t=Cn.triangulateShape(N,O)}const ee=$t.length,qt=g+x;for(let N=0;N<nt;N++){const O=d?Y(S[N],Bt[N],qt):S[N];_?(L.copy(A.normals[0]).multiplyScalar(O.x),R.copy(A.binormals[0]).multiplyScalar(O.y),P.copy(M[0]).add(L).add(R),$(P.x,P.y,P.z)):$(O.x,O.y,0)}for(let N=1;N<=c;N++)for(let O=0;O<nt;O++){const H=d?Y(S[O],Bt[O],qt):S[O];_?(L.copy(A.normals[N]).multiplyScalar(H.x),R.copy(A.binormals[N]).multiplyScalar(H.y),P.copy(M[N]).add(L).add(R),$(P.x,P.y,P.z)):$(H.x,H.y,u/c*N)}for(let N=m-1;N>=0;N--){const O=N/m,H=f*Math.cos(O*Math.PI/2),q=g*Math.sin(O*Math.PI/2)+x;for(let ut=0,j=Z.length;ut<j;ut++){const ot=Y(Z[ut],_t[ut],q);$(ot.x,ot.y,u+H)}for(let ut=0,j=I.length;ut<j;ut++){const ot=I[ut];Et=ht[ut];for(let It=0,mt=ot.length;It<mt;It++){const E=Y(ot[It],Et[It],q);_?$(E.x,E.y+M[c-1].y,M[c-1].x+H):$(E.x,E.y,u+H)}}}it(),ct();function it(){const N=s.length/3;if(d){let O=0,H=nt*O;for(let q=0;q<ee;q++){const ut=$t[q];K(ut[2]+H,ut[1]+H,ut[0]+H)}O=c+m*2,H=nt*O;for(let q=0;q<ee;q++){const ut=$t[q];K(ut[0]+H,ut[1]+H,ut[2]+H)}}else{for(let O=0;O<ee;O++){const H=$t[O];K(H[2],H[1],H[0])}for(let O=0;O<ee;O++){const H=$t[O];K(H[0]+nt*c,H[1]+nt*c,H[2]+nt*c)}}n.addGroup(N,s.length/3-N,0)}function ct(){const N=s.length/3;let O=0;C(Z,O),O+=Z.length;for(let H=0,q=I.length;H<q;H++){const ut=I[H];C(ut,O),O+=ut.length}n.addGroup(N,s.length/3-N,1)}function C(N,O){let H=N.length;for(;--H>=0;){const q=H;let ut=H-1;ut<0&&(ut=N.length-1);for(let j=0,ot=c+m*2;j<ot;j++){const It=nt*j,mt=nt*(j+1),E=O+q+It,v=O+ut+It,U=O+ut+mt,V=O+q+mt;rt(E,v,U,V)}}}function $(N,O,H){l.push(N),l.push(O),l.push(H)}function K(N,O,H){W(N),W(O),W(H);const q=s.length/3,ut=y.generateTopUV(n,s,q-3,q-2,q-1);w(ut[0]),w(ut[1]),w(ut[2])}function rt(N,O,H,q){W(N),W(O),W(q),W(O),W(H),W(q);const ut=s.length/3,j=y.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);w(j[0]),w(j[1]),w(j[3]),w(j[1]),w(j[2]),w(j[3])}function W(N){s.push(l[N*3+0]),s.push(l[N*3+1]),s.push(l[N*3+2])}function w(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new br[s.type]().fromJSON(s)),new Ua(n,t.options)}}const mf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],c=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(h,c)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new pt(o,1-l),new pt(h,1-u),new pt(d,1-g),new pt(x,1-p)]:[new pt(a,1-l),new pt(c,1-u),new pt(f,1-g),new pt(m,1-p)]}};function gf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ps extends Pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ps(t.radius,t.detail)}}class Na extends ye{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],c=1/e,u=new D,d=new pt,f=new D,g=new D,x=new D;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){const M=n+y*c*s,_=Math.sin(M),A=Math.cos(M);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*_,u.y=t[R].y,u.z=t[R].x*A,o.push(u.x,u.y,u.z),d.x=y/e,d.y=R/(t.length-1),a.push(d.x,d.y);const L=l[3*R+0]*_,P=l[3*R+1],b=l[3*R+0]*A;h.push(L,P,b)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const _=M+y*t.length,A=_,R=_+t.length,L=_+t.length+1,P=_+1;r.push(A,R,P),r.push(L,P,R)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.points,t.segments,t.phiStart,t.phiLength)}}class ns extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<c;p++){const y=p*d-o;for(let M=0;M<h;M++){const _=M*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+h*p,_=y+h*(p+1),A=y+1+h*(p+1),R=y+1+h*p;f.push(M,_,R),f.push(_,A,R)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.width,t.height,t.widthSegments,t.heightSegments)}}class zs extends ye{constructor(t=new es([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function h(c){const u=s.length/3,d=c.extractPoints(e);let f=d.shape;const g=d.holes;Cn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Cn.isClockWise(y)===!0&&(g[m]=y.reverse())}const x=Cn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){const y=x[m],M=y[0]+u,_=y[1]+u,A=y[2]+u;n.push(M,_,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return xf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new zs(n,t.curveSegments)}}function xf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class _n extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+_,1-M),y.push(h++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=c[p][y+1],_=c[p][y],A=c[p+1][y],R=c[p+1][y+1];(p!==0||o>0)&&f.push(M,_,R),(p!==n-1||l<Math.PI)&&f.push(_,A,R)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class is extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pr extends ye{constructor(t=new kl(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,h=new pt;let c=new D;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),p()}function m(M){c=t.getPointAt(M/e,c);const _=o.normals[M],A=o.binormals[M];for(let R=0;R<=s;R++){const L=R/s*Math.PI*2,P=Math.sin(L),b=-Math.cos(L);l.x=b*_.x+P*A.x,l.y=b*_.y+P*A.y,l.z=b*_.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const A=(s+1)*(M-1)+(_-1),R=(s+1)*M+(_-1),L=(s+1)*M+_,P=(s+1)*(M-1)+_;g.push(A,R,P),g.push(R,L,P)}}function y(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)h.x=M/e,h.y=_/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pr(new br[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Lr extends ts{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _f extends ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vf extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mf extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fa extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yf extends Fa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const uo=new oe,Rc=new D,Cc=new D;class Sf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ql extends Aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ef extends Sf{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bf extends Fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Ef}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wf extends Fa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tf extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Pc=new pt;class Lc{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function Ic(i,t,e,n){const s=Af(n);switch(e){case Sl:return i*t;case ya:return i*t/s.components*s.byteLength;case Sa:return i*t/s.components*s.byteLength;case bl:return i*t*2/s.components*s.byteLength;case Ea:return i*t*2/s.components*s.byteLength;case El:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case ba:return i*t*4/s.components*s.byteLength;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:case ko:return Math.max(i,16)*Math.max(t,8)/4;case zo:case Bo:return Math.max(i,8)*Math.max(t,8)/2;case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sa:case ra:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case aa:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case la:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Af(i){switch(i){case xn:case _l:return{byteLength:1,components:1};case Ss:case vl:case Us:return{byteLength:2,components:1};case va:case Ma:return{byteLength:2,components:4};case pi:case _a:case pn:return{byteLength:4,components:1};case Ml:case yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rf(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jf=`#define PI 3.141592653589793
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
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,Ad=`struct PhysicalMaterial {
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
}`,Rd=`
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#if defined( USE_POINTS_UV )
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
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
}`,Fp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,$p=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,Zp=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,jp=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:If,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:Nf,aomap_pars_fragment:Ff,batching_pars_vertex:zf,batching_vertex:Of,begin_vertex:Bf,beginnormal_vertex:kf,bsdfs:Hf,iridescence_fragment:Vf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:$f,color_pars_fragment:Jf,color_pars_vertex:Zf,color_vertex:Kf,common:jf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:od,envmap_fragment:ad,envmap_common_pars_fragment:cd,envmap_pars_fragment:ld,envmap_pars_vertex:hd,envmap_physical_pars_fragment:yd,envmap_vertex:ud,fog_vertex:fd,fog_pars_vertex:dd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:xd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:vd,lights_pars_begin:Md,lights_toon_fragment:Sd,lights_toon_pars_fragment:Ed,lights_phong_fragment:bd,lights_phong_pars_fragment:wd,lights_physical_fragment:Td,lights_physical_pars_fragment:Ad,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:zd,map_particle_pars_fragment:Od,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Hd,morphcolor_vertex:Vd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:$d,normal_pars_vertex:Jd,normal_vertex:Zd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:op,dithering_pars_fragment:ap,roughnessmap_fragment:cp,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:up,shadowmap_vertex:fp,shadowmask_pars_fragment:dp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:xp,specularmap_fragment:_p,specularmap_pars_fragment:vp,tonemapping_fragment:Mp,tonemapping_pars_fragment:yp,transmission_fragment:Sp,transmission_pars_fragment:Ep,uv_pars_fragment:bp,uv_pars_vertex:wp,uv_vertex:Tp,worldpos_vertex:Ap,background_vert:Rp,background_frag:Cp,backgroundCube_vert:Pp,backgroundCube_frag:Lp,cube_vert:Ip,cube_frag:Dp,depth_vert:Up,depth_frag:Np,distanceRGBA_vert:Fp,distanceRGBA_frag:zp,equirect_vert:Op,equirect_frag:Bp,linedashed_vert:kp,linedashed_frag:Hp,meshbasic_vert:Vp,meshbasic_frag:Gp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:$p,meshnormal_frag:Jp,meshphong_vert:Zp,meshphong_frag:Kp,meshphysical_vert:jp,meshphysical_frag:Qp,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:om,sprite_frag:am},yt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},dn={basic:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Be([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Be([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Be([yt.points,yt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Be([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Be([yt.common,yt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Be([yt.sprite,yt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Be([yt.common,yt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Be([yt.lights,yt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};dn.physical={uniforms:Be([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const lr={r:0,b:0,g:0},ri=new un,cm=new oe;function lm(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const A=g(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Ar)?(c===void 0&&(c=new Ke(new _i(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ji(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ri.copy(_.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(ri)),c.material.toneMapped=re.getTransfer(A.colorSpace)!==he,(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Ke(new ns(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ji(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=re.getTransfer(A.colorSpace)!==he,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,_){M.getRGB(lr,Il(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,_,o)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m,dispose:y}}function hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,I,z,G,J){let Z=!1;const Y=u(G,z,I);r!==Y&&(r=Y,h(r.object)),Z=f(S,G,z,J),Z&&g(S,G,z,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(S,I,z,G),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function c(S){return i.deleteVertexArray(S)}function u(S,I,z){const G=z.wireframe===!0;let J=n[S.id];J===void 0&&(J={},n[S.id]=J);let Z=J[I.id];Z===void 0&&(Z={},J[I.id]=Z);let Y=Z[G];return Y===void 0&&(Y=d(l()),Z[G]=Y),Y}function d(S){const I=[],z=[],G=[];for(let J=0;J<e;J++)I[J]=0,z[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,I,z,G){const J=r.attributes,Z=I.attributes;let Y=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){const ht=J[X];let Et=Z[X];if(Et===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),ht===void 0||ht.attribute!==Et||Et&&ht.data!==Et.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function g(S,I,z,G){const J={},Z=I.attributes;let Y=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){let ht=Z[X];ht===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const Et={};Et.attribute=ht,ht&&ht.data&&(Et.data=ht.data),J[X]=Et,Y++}r.attributes=J,r.attributesNum=Y,r.index=G}function x(){const S=r.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const z=r.newAttributes,G=r.enabledAttributes,J=r.attributeDivisors;z[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),J[S]!==I&&(i.vertexAttribDivisor(S,I),J[S]=I)}function y(){const S=r.newAttributes,I=r.enabledAttributes;for(let z=0,G=I.length;z<G;z++)I[z]!==S[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function M(S,I,z,G,J,Z,Y){Y===!0?i.vertexAttribIPointer(S,I,z,J,Z):i.vertexAttribPointer(S,I,z,G,J,Z)}function _(S,I,z,G){x();const J=G.attributes,Z=z.getAttributes(),Y=I.defaultAttributeValues;for(const nt in Z){const X=Z[nt];if(X.location>=0){let _t=J[nt];if(_t===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),_t!==void 0){const ht=_t.normalized,Et=_t.itemSize,Bt=t.get(_t);if(Bt===void 0)continue;const $t=Bt.buffer,ee=Bt.type,qt=Bt.bytesPerElement,it=ee===i.INT||ee===i.UNSIGNED_INT||_t.gpuType===_a;if(_t.isInterleavedBufferAttribute){const ct=_t.data,C=ct.stride,$=_t.offset;if(ct.isInstancedInterleavedBuffer){for(let K=0;K<X.locationSize;K++)p(X.location+K,ct.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let K=0;K<X.locationSize;K++)m(X.location+K);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let K=0;K<X.locationSize;K++)M(X.location+K,Et/X.locationSize,ee,ht,C*qt,($+Et/X.locationSize*K)*qt,it)}else{if(_t.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,_t.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ct=0;ct<X.locationSize;ct++)m(X.location+ct);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ct=0;ct<X.locationSize;ct++)M(X.location+ct,Et/X.locationSize,ee,ht,Et*qt,Et/X.locationSize*ct*qt,it)}}else if(Y!==void 0){const ht=Y[nt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(X.location,ht);break;case 3:i.vertexAttrib3fv(X.location,ht);break;case 4:i.vertexAttrib4fv(X.location,ht);break;default:i.vertexAttrib1fv(X.location,ht)}}}}y()}function A(){P();for(const S in n){const I=n[S];for(const z in I){const G=I[z];for(const J in G)c(G[J].object),delete G[J];delete I[z]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const z in I){const G=I[z];for(const J in G)c(G[J].object),delete G[J];delete I[z]}delete n[S.id]}function L(S){for(const I in n){const z=n[I];if(z[S.id]===void 0)continue;const G=z[S.id];for(const J in G)c(G[J].object),delete G[J];delete z[S.id]}}function P(){b(),o=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function um(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Ze&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const P=L===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==xn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==pn&&!P)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:R}}function dm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new li,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{const y=r?0:n,M=y*4;let _=p.clippingState||null;l.value=_,_=c(g,d,M,f);for(let A=0;A!==M;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function pm(i){let t=new WeakMap;function e(o,a){return a===Uo?o.mapping=qi:a===No&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uo||a===No)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Lu(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const zi=4,Dc=[.125,.215,.35,.446,.526,.582],fi=20,fo=new ql,Uc=new Gt;let po=null,mo=0,go=0,xo=!1;const hi=(1+Math.sqrt(5))/2,Ni=1/hi,Nc=[new D(-hi,Ni,0),new D(hi,Ni,0),new D(-Ni,0,hi),new D(Ni,0,hi),new D(0,hi,-Ni),new D(0,hi,Ni),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],mm=new D;class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=mm}=r;po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=xo,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Us,format:Ze,colorSpace:$i,depthBuffer:!1},s=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gm(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,fo)}_sceneToCubeUV(t,e,n,s,r){const l=new sn(90,1,e,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Uc),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new Rr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Ke(new _i,x);let p=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,p=!0):(x.color.copy(Uc),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[M],r.y,r.z)):_===1?(l.up.set(0,0,h[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[M],r.z)):(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[M]));const A=this._cubeSize;hr(s,_*A,M>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(s-r-1)%Nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ke(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),x=r/g,m=isFinite(r)?1+Math.floor(c*x):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let y=0;for(let L=0;L<fi;++L){const P=L/x,b=Math.exp(-P*P/2);p.push(b),L===0?y+=b:L<m&&(y+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[s],A=3*_*(s>M-zi?s-M+zi:0),R=4*(this._cubeSize-_);hr(e,A,R,3*_,2*_),l.setRenderTarget(e),l.render(u,fo)}}function gm(i){const t=[],e=[],n=[];let s=i;const r=i-zi+1+Dc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zi?l=Dc[o-i+zi-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let R=0;R<f;R++){const L=R%3*2/3-1,P=R>2?0:-1,b=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];y.set(b,x*g*R),M.set(d,m*g*R);const S=[R,R,R,R,R,R];_.set(S,p*g*R)}const A=new ye;A.setAttribute("position",new Ue(y,x)),A.setAttribute("uv",new Ue(M,m)),A.setAttribute("faceIndex",new Ue(_,p)),t.push(A),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zc(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xm(i,t,e){const n=new Float32Array(fi),s=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:za(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Oc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Bc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function za(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Uo||l===No,c=l===qi||l===Yi;if(h||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fc(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new Fc(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const y=f.array;x=f.version;for(let M=0,_=y.length;M<_;M+=3){const A=y[M+0],R=y[M+1],L=y[M+2];d.push(A,R,R,L,L,A)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,_=y.length/3-1;M<_;M+=3){const A=M+0,R=M+1,L=M+2;d.push(A,R,R,L,L,A)}}else return;const m=new(Tl(d)?Ll:Pl)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function ym(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Sm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Em(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*A*4*u),L=new Al(R,_,A,u);L.type=pn,L.needsUpdate=!0;const P=M*4;for(let S=0;S<u;S++){const I=m[S],z=p[S],G=y[S],J=_*A*4*S;for(let Z=0;Z<I.count;Z++){const Y=Z*P;f===!0&&(s.fromBufferAttribute(I,Z),R[J+Y+0]=s.x,R[J+Y+1]=s.y,R[J+Y+2]=s.z,R[J+Y+3]=0),g===!0&&(s.fromBufferAttribute(z,Z),R[J+Y+4]=s.x,R[J+Y+5]=s.y,R[J+Y+6]=s.z,R[J+Y+7]=0),x===!0&&(s.fromBufferAttribute(G,Z),R[J+Y+8]=s.x,R[J+Y+9]=s.y,R[J+Y+10]=s.z,R[J+Y+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new pt(_,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function bm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const $l=new ze,kc=new Nl(1,1),Jl=new Al,Zl=new du,Kl=new Dl,Hc=[],Vc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Ce(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Ce(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),Ce(e,n)}}function Im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=wl,r=kc):r=$l,e.setTexture2D(t||r,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zl,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kl,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jl,s)}function Wm(i){switch(i){case 5126:return wm;case 35664:return Tm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Im;case 35667:case 35671:return Dm;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return zm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Xm(i,t){i.uniform1fv(this.addr,t)}function qm(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Ym(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function $m(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Jm(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zm(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Km(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function Qm(i,t){i.uniform2iv(this.addr,t)}function t0(i,t){i.uniform3iv(this.addr,t)}function e0(i,t){i.uniform4iv(this.addr,t)}function n0(i,t){i.uniform1uiv(this.addr,t)}function i0(i,t){i.uniform2uiv(this.addr,t)}function s0(i,t){i.uniform3uiv(this.addr,t)}function r0(i,t){i.uniform4uiv(this.addr,t)}function o0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$l,r[o])}function a0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zl,r[o])}function c0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kl,r[o])}function l0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jl,r[o])}function h0(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return Jm;case 35675:return Zm;case 35676:return Km;case 5124:case 35670:return jm;case 35667:case 35671:return Qm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return l0}}class u0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}}class f0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h0(e.type)}}class d0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function qc(i,t){i.seq.push(t),i.map[t.id]=t}function p0(i,t,e){const n=i.name,s=n.length;for(_o.lastIndex=0;;){const r=_o.exec(n),o=_o.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){qc(e,h===void 0?new u0(a,i,t):new f0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new d0(a),qc(e,u)),e=u}}}class xr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);p0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const m0=37297;let g0=0;function x0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const $c=new Xt;function _0(i){re._getMatrix($c,re.workingColorSpace,i);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+x0(i.getShaderSource(t),a)}else return r}function v0(i,t){const e=_0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M0(i,t){let e;switch(t){case Vh:e="Linear";break;case Gh:e="Reinhard";break;case Wh:e="Cineon";break;case gl:e="ACESFilmic";break;case qh:e="AgX";break;case Yh:e="Neutral";break;case Xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ur=new D;function y0(){re.getLuminanceCoefficients(ur);const i=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function E0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function b0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function Zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(i){return i.replace(w0,A0)}const T0=new Map;function A0(i,t){let e=Jt[t];if(e===void 0){const n=T0.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pa(e)}const R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(R0,C0)}function C0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function P0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function L0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function D0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tr:t="ENVMAP_BLENDING_MULTIPLY";break;case kh:t="ENVMAP_BLENDING_MIX";break;case Hh:t="ENVMAP_BLENDING_ADD";break}return t}function U0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function N0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=P0(e),h=L0(e),c=I0(e),u=D0(e),d=U0(e),f=S0(e),g=E0(r),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?M0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,v0("linearToOutputTexel",e.outputColorSpace),y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=pa(o),o=Zc(o,e),o=Kc(o,e),a=pa(a),a=Zc(a,e),a=Kc(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,_=y+p+a,A=Yc(s,s.VERTEX_SHADER,M),R=Yc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(I){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(A)||"",J=s.getShaderInfoLog(R)||"",Z=z.trim(),Y=G.trim(),nt=J.trim();let X=!0,_t=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,R);else{const ht=Jc(s,A,"vertex"),Et=Jc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Z+`
`+ht+`
`+Et)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||nt==="")&&(_t=!1);_t&&(I.diagnostics={runnable:X,programLog:Z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(A),s.deleteShader(R),P=new xr(s,x),b=b0(s,x)}let P;this.getUniforms=function(){return P===void 0&&L(this),P};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,m0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let F0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new O0(t),e.set(t,n)),n}}class O0{constructor(t){this.id=F0++,this.code=t,this.usedTimes=0}}function B0(i,t,e,n,s,r,o){const a=new Rl,l=new z0,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,S,I,z,G){const J=z.fog,Z=G.geometry,Y=b.isMeshStandardMaterial?z.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),X=nt&&nt.mapping===Ar?nt.image.height:null,_t=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=ht!==void 0?ht.length:0;let Bt=0;Z.morphAttributes.position!==void 0&&(Bt=1),Z.morphAttributes.normal!==void 0&&(Bt=2),Z.morphAttributes.color!==void 0&&(Bt=3);let $t,ee,qt,it;if(_t){const ae=dn[_t];$t=ae.vertexShader,ee=ae.fragmentShader}else $t=b.vertexShader,ee=b.fragmentShader,l.update(b),qt=l.getVertexShaderID(b),it=l.getFragmentShaderID(b);const ct=i.getRenderTarget(),C=i.state.buffers.depth.getReversed(),$=G.isInstancedMesh===!0,K=G.isBatchedMesh===!0,rt=!!b.map,W=!!b.matcap,w=!!nt,N=!!b.aoMap,O=!!b.lightMap,H=!!b.bumpMap,q=!!b.normalMap,ut=!!b.displacementMap,j=!!b.emissiveMap,ot=!!b.metalnessMap,It=!!b.roughnessMap,mt=b.anisotropy>0,E=b.clearcoat>0,v=b.dispersion>0,U=b.iridescence>0,V=b.sheen>0,st=b.transmission>0,et=mt&&!!b.anisotropyMap,At=E&&!!b.clearcoatMap,dt=E&&!!b.clearcoatNormalMap,Rt=E&&!!b.clearcoatRoughnessMap,Tt=U&&!!b.iridescenceMap,ft=U&&!!b.iridescenceThicknessMap,wt=V&&!!b.sheenColorMap,Ht=V&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,St=!!b.specularColorMap,Yt=!!b.specularIntensityMap,F=st&&!!b.transmissionMap,vt=st&&!!b.thicknessMap,Mt=!!b.gradientMap,Pt=!!b.alphaMap,gt=b.alphaTest>0,lt=!!b.alphaHash,Dt=!!b.extensions;let Wt=Yn;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const fe={shaderID:_t,shaderType:b.type,shaderName:b.name,vertexShader:$t,fragmentShader:ee,defines:b.defines,customVertexShaderID:qt,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:K,batchingColor:K&&G._colorsTexture!==null,instancing:$,instancingColor:$&&G.instanceColor!==null,instancingMorph:$&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:$i,alphaToCoverage:!!b.alphaToCoverage,map:rt,matcap:W,envMap:w,envMapMode:w&&nt.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:O,bumpMap:H,normalMap:q,displacementMap:d&&ut,emissiveMap:j,normalMapObjectSpace:q&&b.normalMapType===Kh,normalMapTangentSpace:q&&b.normalMapType===wa,metalnessMap:ot,roughnessMap:It,anisotropy:mt,anisotropyMap:et,clearcoat:E,clearcoatMap:At,clearcoatNormalMap:dt,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:U,iridescenceMap:Tt,iridescenceThicknessMap:ft,sheen:V,sheenColorMap:wt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:St,specularIntensityMap:Yt,transmission:st,transmissionMap:F,thicknessMap:vt,gradientMap:Mt,opaque:b.transparent===!1&&b.blending===Hi&&b.alphaToCoverage===!1,alphaMap:Pt,alphaTest:gt,alphaHash:lt,combine:b.combine,mapUv:rt&&x(b.map.channel),aoMapUv:N&&x(b.aoMap.channel),lightMapUv:O&&x(b.lightMap.channel),bumpMapUv:H&&x(b.bumpMap.channel),normalMapUv:q&&x(b.normalMap.channel),displacementMapUv:ut&&x(b.displacementMap.channel),emissiveMapUv:j&&x(b.emissiveMap.channel),metalnessMapUv:ot&&x(b.metalnessMap.channel),roughnessMapUv:It&&x(b.roughnessMap.channel),anisotropyMapUv:et&&x(b.anisotropyMap.channel),clearcoatMapUv:At&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&x(b.sheenRoughnessMap.channel),specularMapUv:Ft&&x(b.specularMap.channel),specularColorMapUv:St&&x(b.specularColorMap.channel),specularIntensityMapUv:Yt&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:vt&&x(b.thicknessMap.channel),alphaMapUv:Pt&&x(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(q||mt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(rt||Pt),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:C,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:rt&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ke,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return fe.vertexUv1s=h.has(1),fe.vertexUv2s=h.has(2),fe.vertexUv3s=h.has(3),h.clear(),fe}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)S.push(I),S.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const S=g[b.type];let I;if(S){const z=dn[S];I=Au.clone(z.uniforms)}else I=b.uniforms;return I}function A(b,S){let I;for(let z=0,G=c.length;z<G;z++){const J=c[z];if(J.cacheKey===S){I=J,++I.usedTimes;break}}return I===void 0&&(I=new N0(i,S,b,r),c.push(I)),I}function R(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:R,releaseShaderCache:L,programs:c,dispose:P}}function k0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function el(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||H0),n.length>1&&n.sort(d||tl),s.length>1&&s.sort(d||tl)}function c(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function V0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new el,i.set(n,[o])):s>=r.length?(o=new el,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function G0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Gt};break;case"SpotLight":e={position:new D,direction:new D,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function W0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let X0=0;function q0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Y0(i){const t=new G0,e=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const s=new D,r=new oe,o=new oe;function a(h){let c=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,M=0,_=0,A=0,R=0,L=0;h.sort(q0);for(let b=0,S=h.length;b<S;b++){const I=h[b],z=I.color,G=I.intensity,J=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=z.r*G,u+=z.g*G,d+=z.b*G;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],G);L++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=Y,f++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(z).multiplyScalar(G),Y.distance=J,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[x]=Y;const nt=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,nt.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[x]=nt.matrix,I.castShadow){const X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Z,_++}x++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(z).multiplyScalar(G),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(G),Y.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=L,n.version=X0++)}function l(h,c){let u=0,d=0,f=0,g=0,x=0;const m=c.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const M=h[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function nl(i){const t=new Y0(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nl(i),t.set(s,[a])):r>=o.length?(a=new nl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function K0(i,t,e){let n=new Cr;const s=new pt,r=new pt,o=new pe,a=new vf({depthPacking:Zh}),l=new Mf,h={},c=e.maxTextureSize,u={[Zn]:Ge,[Ge]:Zn,[ke]:ke},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:J0,fragmentShader:Z0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let p=this.type;this.render=function(R,L,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(qn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=p!==An&&this.type===An,J=p===An&&this.type!==An;for(let Z=0,Y=R.length;Z<Y;Z++){const nt=R[Z],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const _t=X.getFrameExtents();if(s.multiply(_t),r.copy(X.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/_t.x),s.x=r.x*_t.x,X.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/_t.y),s.y=r.y*_t.y,X.mapSize.y=r.y)),X.map===null||G===!0||J===!0){const Et=this.type!==An?{minFilter:je,magFilter:je}:{};X.map!==null&&X.map.dispose(),X.map=new mi(s.x,s.y,Et),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ht=X.getViewportCount();for(let Et=0;Et<ht;Et++){const Bt=X.getViewport(Et);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(o),X.updateMatrices(nt,Et),n=X.getFrustum(),_(L,P,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===An&&y(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,I)};function y(R,L){const P=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,P,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,P,f,x,null)}function M(R,L,P,b){let S=null;const I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const z=S.uuid,G=L.uuid;let J=h[z];J===void 0&&(J={},h[z]=J);let Z=J[G];Z===void 0&&(Z=S.clone(),J[G]=Z,L.addEventListener("dispose",A)),S=Z}if(S.visible=L.visible,S.wireframe=L.wireframe,b===An?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=P}return S}function _(R,L,P,b,S){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===An)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const G=t.update(R),J=R.material;if(Array.isArray(J)){const Z=G.groups;for(let Y=0,nt=Z.length;Y<nt;Y++){const X=Z[Y],_t=J[X.materialIndex];if(_t&&_t.visible){const ht=M(R,_t,b,S);R.onBeforeShadow(i,R,L,P,G,ht,X),i.renderBufferDirect(P,null,G,ht,R,X),R.onAfterShadow(i,R,L,P,G,ht,X)}}}else if(J.visible){const Z=M(R,J,b,S);R.onBeforeShadow(i,R,L,P,G,Z,null),i.renderBufferDirect(P,null,G,Z,R,null),R.onAfterShadow(i,R,L,P,G,Z,null)}}const z=R.children;for(let G=0,J=z.length;G<J;G++)_(z[G],L,P,b,S)}function A(R){R.target.removeEventListener("dispose",A);for(const P in h){const b=h[P],S=R.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const j0={[Ao]:Ro,[Co]:Io,[Po]:Do,[Xi]:Lo,[Ro]:Ao,[Io]:Co,[Do]:Po,[Lo]:Xi};function Q0(i,t){function e(){let F=!1;const vt=new pe;let Mt=null;const Pt=new pe(0,0,0,0);return{setMask:function(gt){Mt!==gt&&!F&&(i.colorMask(gt,gt,gt,gt),Mt=gt)},setLocked:function(gt){F=gt},setClear:function(gt,lt,Dt,Wt,fe){fe===!0&&(gt*=Wt,lt*=Wt,Dt*=Wt),vt.set(gt,lt,Dt,Wt),Pt.equals(vt)===!1&&(i.clearColor(gt,lt,Dt,Wt),Pt.copy(vt))},reset:function(){F=!1,Mt=null,Pt.set(-1,0,0,0)}}}function n(){let F=!1,vt=!1,Mt=null,Pt=null,gt=null;return{setReversed:function(lt){if(vt!==lt){const Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;const Wt=gt;gt=null,this.setClear(Wt)}},getReversed:function(){return vt},setTest:function(lt){lt?ct(i.DEPTH_TEST):C(i.DEPTH_TEST)},setMask:function(lt){Mt!==lt&&!F&&(i.depthMask(lt),Mt=lt)},setFunc:function(lt){if(vt&&(lt=j0[lt]),Pt!==lt){switch(lt){case Ao:i.depthFunc(i.NEVER);break;case Ro:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Po:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Io:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=lt}},setLocked:function(lt){F=lt},setClear:function(lt){gt!==lt&&(vt&&(lt=1-lt),i.clearDepth(lt),gt=lt)},reset:function(){F=!1,Mt=null,Pt=null,gt=null,vt=!1}}}function s(){let F=!1,vt=null,Mt=null,Pt=null,gt=null,lt=null,Dt=null,Wt=null,fe=null;return{setTest:function(ae){F||(ae?ct(i.STENCIL_TEST):C(i.STENCIL_TEST))},setMask:function(ae){vt!==ae&&!F&&(i.stencilMask(ae),vt=ae)},setFunc:function(ae,Mn,fn){(Mt!==ae||Pt!==Mn||gt!==fn)&&(i.stencilFunc(ae,Mn,fn),Mt=ae,Pt=Mn,gt=fn)},setOp:function(ae,Mn,fn){(lt!==ae||Dt!==Mn||Wt!==fn)&&(i.stencilOp(ae,Mn,fn),lt=ae,Dt=Mn,Wt=fn)},setLocked:function(ae){F=ae},setClear:function(ae){fe!==ae&&(i.clearStencil(ae),fe=ae)},reset:function(){F=!1,vt=null,Mt=null,Pt=null,gt=null,lt=null,Dt=null,Wt=null,fe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,M=null,_=null,A=null,R=null,L=new Gt(0,0,0),P=0,b=!1,S=null,I=null,z=null,G=null,J=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,nt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=nt>=2);let _t=null,ht={};const Et=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),$t=new pe().fromArray(Et),ee=new pe().fromArray(Bt);function qt(F,vt,Mt,Pt){const gt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(F,lt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Mt;Dt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(vt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return lt}const it={};it[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Xi),H(!1),q($a),ct(i.CULL_FACE),N(qn);function ct(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function C(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function $(F,vt){return u[F]!==vt?(i.bindFramebuffer(F,vt),u[F]=vt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function K(F,vt){let Mt=f,Pt=!1;if(F){Mt=d.get(vt),Mt===void 0&&(Mt=[],d.set(vt,Mt));const gt=F.textures;if(Mt.length!==gt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=gt.length;lt<Dt;lt++)Mt[lt]=i.COLOR_ATTACHMENT0+lt;Mt.length=gt.length,Pt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(Mt)}function rt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const W={[ui]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};W[wh]=i.MIN,W[Th]=i.MAX;const w={[Ah]:i.ZERO,[Rh]:i.ONE,[Ch]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[To]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(F,vt,Mt,Pt,gt,lt,Dt,Wt,fe,ae){if(F===qn){x===!0&&(C(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),F!==Sh){if(F!==m||ae!==b){if((p!==ui||_!==ui)&&(i.blendEquation(i.FUNC_ADD),p=ui,_=ui),ae)switch(F){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Za:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,A=null,R=null,L.set(0,0,0),P=0,m=F,b=ae}return}gt=gt||vt,lt=lt||Mt,Dt=Dt||Pt,(vt!==p||gt!==_)&&(i.blendEquationSeparate(W[vt],W[gt]),p=vt,_=gt),(Mt!==y||Pt!==M||lt!==A||Dt!==R)&&(i.blendFuncSeparate(w[Mt],w[Pt],w[lt],w[Dt]),y=Mt,M=Pt,A=lt,R=Dt),(Wt.equals(L)===!1||fe!==P)&&(i.blendColor(Wt.r,Wt.g,Wt.b,fe),L.copy(Wt),P=fe),m=F,b=!1}function O(F,vt){F.side===ke?C(i.CULL_FACE):ct(i.CULL_FACE);let Mt=F.side===Ge;vt&&(Mt=!Mt),H(Mt),F.blending===Hi&&F.transparent===!1?N(qn):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Pt=F.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),j(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):C(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function q(F){F!==Mh?(ct(i.CULL_FACE),F!==I&&(F===$a?i.cullFace(i.BACK):F===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):C(i.CULL_FACE),I=F}function ut(F){F!==z&&(Y&&i.lineWidth(F),z=F)}function j(F,vt,Mt){F?(ct(i.POLYGON_OFFSET_FILL),(G!==vt||J!==Mt)&&(i.polygonOffset(vt,Mt),G=vt,J=Mt)):C(i.POLYGON_OFFSET_FILL)}function ot(F){F?ct(i.SCISSOR_TEST):C(i.SCISSOR_TEST)}function It(F){F===void 0&&(F=i.TEXTURE0+Z-1),_t!==F&&(i.activeTexture(F),_t=F)}function mt(F,vt,Mt){Mt===void 0&&(_t===null?Mt=i.TEXTURE0+Z-1:Mt=_t);let Pt=ht[Mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},ht[Mt]=Pt),(Pt.type!==F||Pt.texture!==vt)&&(_t!==Mt&&(i.activeTexture(Mt),_t=Mt),i.bindTexture(F,vt||it[F]),Pt.type=F,Pt.texture=vt)}function E(){const F=ht[_t];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(F){$t.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),$t.copy(F))}function Ht(F){ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ft(F,vt){let Mt=h.get(vt);Mt===void 0&&(Mt=new WeakMap,h.set(vt,Mt));let Pt=Mt.get(F);Pt===void 0&&(Pt=i.getUniformBlockIndex(vt,F.name),Mt.set(F,Pt))}function St(F,vt){const Pt=h.get(vt).get(F);l.get(vt)!==Pt&&(i.uniformBlockBinding(vt,Pt,F.__bindingPointIndex),l.set(vt,Pt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},_t=null,ht={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,M=null,_=null,A=null,R=null,L=new Gt(0,0,0),P=0,b=!1,S=null,I=null,z=null,G=null,J=null,$t.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:C,bindFramebuffer:$,drawBuffers:K,useProgram:rt,setBlending:N,setMaterial:O,setFlipSided:H,setCullFace:q,setLineWidth:ut,setPolygonOffset:j,setScissorTest:ot,activeTexture:It,bindTexture:mt,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Tt,texImage3D:ft,updateUBOMapping:Ft,uniformBlockBinding:St,texStorage2D:dt,texStorage3D:Rt,texSubImage2D:V,texSubImage3D:st,compressedTexSubImage2D:et,compressedTexSubImage3D:At,scissor:wt,viewport:Ht,reset:Yt}}function tg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Er("canvas")}function x(E,v,U){let V=1;const st=mt(E);if((st.width>U||st.height>U)&&(V=U/Math.max(st.width,st.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const et=Math.floor(V*st.width),At=Math.floor(V*st.height);u===void 0&&(u=g(et,At));const dt=v?g(et,At):u;return dt.width=et,dt.height=At,dt.getContext("2d").drawImage(E,0,0,et,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+At+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,v,U,V,st=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let et=v;if(v===i.RED&&(U===i.FLOAT&&(et=i.R32F),U===i.HALF_FLOAT&&(et=i.R16F),U===i.UNSIGNED_BYTE&&(et=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.R8UI),U===i.UNSIGNED_SHORT&&(et=i.R16UI),U===i.UNSIGNED_INT&&(et=i.R32UI),U===i.BYTE&&(et=i.R8I),U===i.SHORT&&(et=i.R16I),U===i.INT&&(et=i.R32I)),v===i.RG&&(U===i.FLOAT&&(et=i.RG32F),U===i.HALF_FLOAT&&(et=i.RG16F),U===i.UNSIGNED_BYTE&&(et=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.RG8UI),U===i.UNSIGNED_SHORT&&(et=i.RG16UI),U===i.UNSIGNED_INT&&(et=i.RG32UI),U===i.BYTE&&(et=i.RG8I),U===i.SHORT&&(et=i.RG16I),U===i.INT&&(et=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.RGB8UI),U===i.UNSIGNED_SHORT&&(et=i.RGB16UI),U===i.UNSIGNED_INT&&(et=i.RGB32UI),U===i.BYTE&&(et=i.RGB8I),U===i.SHORT&&(et=i.RGB16I),U===i.INT&&(et=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),U===i.UNSIGNED_INT&&(et=i.RGBA32UI),U===i.BYTE&&(et=i.RGBA8I),U===i.SHORT&&(et=i.RGBA16I),U===i.INT&&(et=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),v===i.RGBA){const At=st?yr:re.getTransfer(V);U===i.FLOAT&&(et=i.RGBA32F),U===i.HALF_FLOAT&&(et=i.RGBA16F),U===i.UNSIGNED_BYTE&&(et=At===he?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(E,v){let U;return E?v===null||v===pi||v===Es?U=i.DEPTH24_STENCIL8:v===pn?U=i.DEPTH32F_STENCIL8:v===Ss&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pi||v===Es?U=i.DEPTH_COMPONENT24:v===pn?U=i.DEPTH_COMPONENT32F:v===Ss&&(U=i.DEPTH_COMPONENT16),U}function A(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==je&&E.minFilter!==Je?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){const v=E.target;v.removeEventListener("dispose",R),P(v),v.isVideoTexture&&c.delete(v)}function L(E){const v=E.target;v.removeEventListener("dispose",L),S(v)}function P(E){const v=n.get(E);if(v.__webglInit===void 0)return;const U=E.source,V=d.get(U);if(V){const st=V[v.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(E),Object.keys(V).length===0&&d.delete(U)}n.remove(E)}function b(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const U=E.source,V=d.get(U);delete V[v.__cacheKey],o.memory.textures--}function S(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let st=0;st<v.__webglFramebuffer[V].length;st++)i.deleteFramebuffer(v.__webglFramebuffer[V][st]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=E.textures;for(let V=0,st=U.length;V<st;V++){const et=n.get(U[V]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(U[V])}n.remove(E)}let I=0;function z(){I=0}function G(){const E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function J(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Z(E,v){const U=n.get(E);if(E.isVideoTexture&&ot(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const V=E.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(U,E,v);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){it(U,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function nt(E,v){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){it(U,E,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function X(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ct(U,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const _t={[ys]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},ht={[je]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Et={[jh]:i.NEVER,[su]:i.ALWAYS,[Qh]:i.LESS,[wl]:i.LEQUAL,[tu]:i.EQUAL,[iu]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function Bt(E,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Je||v.magFilter===zr||v.magFilter===ks||v.magFilter===Xn||v.minFilter===Je||v.minFilter===zr||v.minFilter===ks||v.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,_t[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,_t[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,_t[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==ks&&v.minFilter!==Xn||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const V=v.source;let st=d.get(V);st===void 0&&(st={},d.set(V,st));const et=J(v);if(et!==E.__cacheKey){st[et]===void 0&&(st[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),st[et].usedTimes++;const At=st[E.__cacheKey];At!==void 0&&(st[E.__cacheKey].usedTimes--,At.usedTimes===0&&b(v)),E.__cacheKey=et,E.__webglTexture=st[et].texture}return U}function ee(E,v,U){return Math.floor(Math.floor(E/U)/v)}function qt(E,v,U,V){const et=E.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,V,v.data);else{et.sort((ft,wt)=>ft.start-wt.start);let At=0;for(let ft=1;ft<et.length;ft++){const wt=et[At],Ht=et[ft],Ft=wt.start+wt.count,St=ee(Ht.start,v.width,4),Yt=ee(wt.start,v.width,4);Ht.start<=Ft+1&&St===Yt&&ee(Ht.start+Ht.count-1,v.width,4)===St?wt.count=Math.max(wt.count,Ht.start+Ht.count-wt.start):(++At,et[At]=Ht)}et.length=At+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ft=0,wt=et.length;ft<wt;ft++){const Ht=et[ft],Ft=Math.floor(Ht.start/4),St=Math.ceil(Ht.count/4),Yt=Ft%v.width,F=Math.floor(Ft/v.width),vt=St,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Yt,F,vt,Mt,U,V,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function it(E,v,U){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);const st=$t(E,v),et=v.source;e.bindTexture(V,E.__webglTexture,i.TEXTURE0+U);const At=n.get(et);if(et.version!==At.__version||st===!0){e.activeTexture(i.TEXTURE0+U);const dt=re.getPrimaries(re.workingColorSpace),Rt=v.colorSpace===Rn?null:re.getPrimaries(v.colorSpace),Tt=v.colorSpace===Rn||dt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ft=x(v.image,!1,s.maxTextureSize);ft=It(v,ft);const wt=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type);let Ft=M(v.internalFormat,wt,Ht,v.colorSpace,v.isVideoTexture);Bt(V,v);let St;const Yt=v.mipmaps,F=v.isVideoTexture!==!0,vt=At.__version===void 0||st===!0,Mt=et.dataReady,Pt=A(v,ft);if(v.isDepthTexture)Ft=_(v.format===ws,v.type),vt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Ft,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ft.width,ft.height,0,wt,Ht,null));else if(v.isDataTexture)if(Yt.length>0){F&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ft,Yt[0].width,Yt[0].height);for(let gt=0,lt=Yt.length;gt<lt;gt++)St=Yt[gt],F?Mt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,wt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,gt,Ft,St.width,St.height,0,wt,Ht,St.data);v.generateMipmaps=!1}else F?(vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ft,ft.width,ft.height),Mt&&qt(v,ft,wt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Ft,ft.width,ft.height,0,wt,Ht,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ft,Yt[0].width,Yt[0].height,ft.depth);for(let gt=0,lt=Yt.length;gt<lt;gt++)if(St=Yt[gt],v.format!==Ze)if(wt!==null)if(F){if(Mt)if(v.layerUpdates.size>0){const Dt=Ic(St.width,St.height,v.format,v.type);for(const Wt of v.layerUpdates){const fe=St.data.subarray(Wt*Dt/St.data.BYTES_PER_ELEMENT,(Wt+1)*Dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Wt,St.width,St.height,1,wt,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,St.width,St.height,ft.depth,wt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Ft,St.width,St.height,ft.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,St.width,St.height,ft.depth,wt,Ht,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Ft,St.width,St.height,ft.depth,0,wt,Ht,St.data)}else{F&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ft,Yt[0].width,Yt[0].height);for(let gt=0,lt=Yt.length;gt<lt;gt++)St=Yt[gt],v.format!==Ze?wt!==null?F?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Mt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,wt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,gt,Ft,St.width,St.height,0,wt,Ht,St.data)}else if(v.isDataArrayTexture)if(F){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ft,ft.width,ft.height,ft.depth),Mt)if(v.layerUpdates.size>0){const gt=Ic(ft.width,ft.height,v.format,v.type);for(const lt of v.layerUpdates){const Dt=ft.data.subarray(lt*gt/ft.data.BYTES_PER_ELEMENT,(lt+1)*gt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,wt,Ht,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,wt,Ht,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ft.width,ft.height,ft.depth,0,wt,Ht,ft.data);else if(v.isData3DTexture)F?(vt&&e.texStorage3D(i.TEXTURE_3D,Pt,Ft,ft.width,ft.height,ft.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,wt,Ht,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ft.width,ft.height,ft.depth,0,wt,Ht,ft.data);else if(v.isFramebufferTexture){if(vt)if(F)e.texStorage2D(i.TEXTURE_2D,Pt,Ft,ft.width,ft.height);else{let gt=ft.width,lt=ft.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Ft,gt,lt,0,wt,Ht,null),gt>>=1,lt>>=1}}else if(Yt.length>0){if(F&&vt){const gt=mt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Ft,gt.width,gt.height)}for(let gt=0,lt=Yt.length;gt<lt;gt++)St=Yt[gt],F?Mt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,wt,Ht,St):e.texImage2D(i.TEXTURE_2D,gt,Ft,wt,Ht,St);v.generateMipmaps=!1}else if(F){if(vt){const gt=mt(ft);e.texStorage2D(i.TEXTURE_2D,Pt,Ft,gt.width,gt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ht,ft)}else e.texImage2D(i.TEXTURE_2D,0,Ft,wt,Ht,ft);m(v)&&p(V),At.__version=et.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ct(E,v,U){if(v.image.length!==6)return;const V=$t(E,v),st=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const et=n.get(st);if(st.version!==et.__version||V===!0){e.activeTexture(i.TEXTURE0+U);const At=re.getPrimaries(re.workingColorSpace),dt=v.colorSpace===Rn?null:re.getPrimaries(v.colorSpace),Rt=v.colorSpace===Rn||At===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,ft=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let lt=0;lt<6;lt++)!Tt&&!ft?wt[lt]=x(v.image[lt],!0,s.maxCubemapSize):wt[lt]=ft?v.image[lt].image:v.image[lt],wt[lt]=It(v,wt[lt]);const Ht=wt[0],Ft=r.convert(v.format,v.colorSpace),St=r.convert(v.type),Yt=M(v.internalFormat,Ft,St,v.colorSpace),F=v.isVideoTexture!==!0,vt=et.__version===void 0||V===!0,Mt=st.dataReady;let Pt=A(v,Ht);Bt(i.TEXTURE_CUBE_MAP,v);let gt;if(Tt){F&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Yt,Ht.width,Ht.height);for(let lt=0;lt<6;lt++){gt=wt[lt].mipmaps;for(let Dt=0;Dt<gt.length;Dt++){const Wt=gt[Dt];v.format!==Ze?Ft!==null?F?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Wt.width,Wt.height,Ft,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,Yt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Wt.width,Wt.height,Ft,St,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,Yt,Wt.width,Wt.height,0,Ft,St,Wt.data)}}}else{if(gt=v.mipmaps,F&&vt){gt.length>0&&Pt++;const lt=mt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,wt[lt].width,wt[lt].height,Ft,St,wt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,wt[lt].width,wt[lt].height,0,Ft,St,wt[lt].data);for(let Dt=0;Dt<gt.length;Dt++){const fe=gt[Dt].image[lt].image;F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,fe.width,fe.height,Ft,St,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,Yt,fe.width,fe.height,0,Ft,St,fe.data)}}else{F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft,St,wt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Ft,St,wt[lt]);for(let Dt=0;Dt<gt.length;Dt++){const Wt=gt[Dt];F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,Ft,St,Wt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,Yt,Ft,St,Wt.image[lt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),et.__version=st.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function C(E,v,U,V,st,et){const At=r.convert(U.format,U.colorSpace),dt=r.convert(U.type),Rt=M(U.internalFormat,At,dt,U.colorSpace),Tt=n.get(v),ft=n.get(U);if(ft.__renderTarget=v,!Tt.__hasExternalTextures){const wt=Math.max(1,v.width>>et),Ht=Math.max(1,v.height>>et);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,et,Rt,wt,Ht,v.depth,0,At,dt,null):e.texImage2D(st,et,Rt,wt,Ht,0,At,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,st,ft.__webglTexture,0,ut(v)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,st,ft.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(E,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const V=v.depthTexture,st=V&&V.isDepthTexture?V.type:null,et=_(v.stencilBuffer,st),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=ut(v);j(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,et,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,E)}else{const V=v.textures;for(let st=0;st<V.length;st++){const et=V[st],At=r.convert(et.format,et.colorSpace),dt=r.convert(et.type),Rt=M(et.internalFormat,At,dt,et.colorSpace),Tt=ut(v);U&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Rt,v.width,v.height):j(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const st=V.__webglTexture,et=ut(v);if(v.depthTexture.format===bs)j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(v.depthTexture.format===ws)j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function rt(E){const v=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const V=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const st=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",st)};V.addEventListener("dispose",st),v.__depthDisposeCallback=st}v.__boundDepthTexture=V}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const V=E.texture.mipmaps;V&&V.length>0?K(v.__webglFramebuffer[0],E):K(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),$(v.__webglDepthbuffer[V],E,!1);else{const st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}else{const V=E.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$(v.__webglDepthbuffer,E,!1);else{const st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(E,v,U){const V=n.get(E);v!==void 0&&C(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&rt(E)}function w(E){const v=E.texture,U=n.get(E),V=n.get(v);E.addEventListener("dispose",L);const st=E.textures,et=E.isWebGLCubeRenderTarget===!0,At=st.length>1;if(At||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,o.memory.textures++),et){U.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[dt]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)U.__webglFramebuffer[dt][Rt]=i.createFramebuffer()}else U.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)U.__webglFramebuffer[dt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(At)for(let dt=0,Rt=st.length;dt<Rt;dt++){const Tt=n.get(st[dt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&j(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let dt=0;dt<st.length;dt++){const Rt=st[dt];U.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[dt]);const Tt=r.convert(Rt.format,Rt.colorSpace),ft=r.convert(Rt.type),wt=M(Rt.internalFormat,Tt,ft,Rt.colorSpace,E.isXRRenderTarget===!0),Ht=ut(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,wt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,U.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),$(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)C(U.__webglFramebuffer[dt][Rt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt);else C(U.__webglFramebuffer[dt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,Rt=st.length;dt<Rt;dt++){const Tt=st[dt],ft=n.get(Tt);let wt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(wt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ft.__webglTexture),Bt(wt,Tt),C(U.__webglFramebuffer,E,Tt,i.COLOR_ATTACHMENT0+dt,wt,0),m(Tt)&&p(wt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,V.__webglTexture),Bt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)C(U.__webglFramebuffer[Rt],E,v,i.COLOR_ATTACHMENT0,dt,Rt);else C(U.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,dt,0);m(v)&&p(dt),e.unbindTexture()}E.depthBuffer&&rt(E)}function N(E){const v=E.textures;for(let U=0,V=v.length;U<V;U++){const st=v[U];if(m(st)){const et=y(E),At=n.get(st).__webglTexture;e.bindTexture(et,At),p(et),e.unbindTexture()}}}const O=[],H=[];function q(E){if(E.samples>0){if(j(E)===!1){const v=E.textures,U=E.width,V=E.height;let st=i.COLOR_BUFFER_BIT;const et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(E),dt=v.length>1;if(dt)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Rt=E.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const ft=n.get(v[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,U,V,0,0,U,V,st,i.NEAREST),l===!0&&(O.length=0,H.length=0,O.push(i.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(O.push(et),H.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const ft=n.get(v[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ut(E){return Math.min(s.maxSamples,E.samples)}function j(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(E){const v=o.render.frame;c.get(E)!==v&&(c.set(E,v),E.update())}function It(E,v){const U=E.colorSpace,V=E.format,st=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==$i&&U!==Rn&&(re.getTransfer(U)===he?(V!==Ze||st!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=W,this.setupRenderTarget=w,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=C,this.useMultisampledRTT=j}function eg(i,t){function e(n,s=Rn){let r;const o=re.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_l)return i.BYTE;if(n===vl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===El)return i.RGB;if(n===Ze)return i.RGBA;if(n===bs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===bl)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===dr||n===pr||n===mr||n===gr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===Oo||n===Bo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Vo||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ho||n===Vo)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Jo||n===Zo||n===Ko||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===ra||n===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===ca||n===la||n===ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Fl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new sg,p={},y=e.getContextAttributes();let M=null,_=null;const A=[],R=[],L=new pt;let P=null;const b=new sn;b.viewport=new pe;const S=new sn;S.viewport=new pe;const I=[b,S],z=new Tf;let G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=A[it];return ct===void 0&&(ct=new oo,A[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=A[it];return ct===void 0&&(ct=new oo,A[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=A[it];return ct===void 0&&(ct=new oo,A[it]=ct),ct.getHandSpace()};function Z(it){const ct=R.indexOf(it.inputSource);if(ct===-1)return;const C=A[ct];C!==void 0&&(C.update(it.inputSource,it.frame,h||o),C.dispatchEvent({type:it.type,data:it.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",nt);for(let it=0;it<A.length;it++){const ct=R[it];ct!==null&&(R[it]=null,A[it].disconnect(ct))}G=null,J=null,m.reset();for(const it in p)delete p[it];t.setRenderTarget(M),f=null,d=null,u=null,s=null,_=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(it){h=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let C=null,$=null,K=null;y.depth&&(K=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=y.stencil?ws:bs,$=y.stencil?Es:pi);const rt={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new mi(d.textureWidth,d.textureHeight,{format:Ze,type:xn,depthTexture:new Nl(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const C={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,C),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new mi(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(it){for(let ct=0;ct<it.removed.length;ct++){const C=it.removed[ct],$=R.indexOf(C);$>=0&&(R[$]=null,A[$].disconnect(C))}for(let ct=0;ct<it.added.length;ct++){const C=it.added[ct];let $=R.indexOf(C);if($===-1){for(let rt=0;rt<A.length;rt++)if(rt>=R.length){R.push(C),$=rt;break}else if(R[rt]===null){R[rt]=C,$=rt;break}if($===-1)break}const K=A[$];K&&K.connect(C)}}const X=new D,_t=new D;function ht(it,ct,C){X.setFromMatrixPosition(ct.matrixWorld),_t.setFromMatrixPosition(C.matrixWorld);const $=X.distanceTo(_t),K=ct.projectionMatrix.elements,rt=C.projectionMatrix.elements,W=K[14]/(K[10]-1),w=K[14]/(K[10]+1),N=(K[9]+1)/K[5],O=(K[9]-1)/K[5],H=(K[8]-1)/K[0],q=(rt[8]+1)/rt[0],ut=W*H,j=W*q,ot=$/(-H+q),It=ot*-H;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(It),it.translateZ(ot),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),K[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const mt=W+ot,E=w+ot,v=ut-It,U=j+($-It),V=N*w/E*mt,st=O*w/E*mt;it.projectionMatrix.makePerspective(v,U,V,st,mt,E),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Et(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ct=it.near,C=it.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(C=m.depthFar)),z.near=S.near=b.near=ct,z.far=S.far=b.far=C,(G!==z.near||J!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,J=z.far),z.layers.mask=it.layers.mask|6,b.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;const $=it.parent,K=z.cameras;Et(z,$);for(let rt=0;rt<K.length;rt++)Et(K[rt],$);K.length===2?ht(z,b,S):z.projectionMatrix.copy(b.projectionMatrix),Bt(it,z,$)};function Bt(it,ct,C){C===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(C.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ua*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(it){return p[it]};let $t=null;function ee(it,ct){if(c=ct.getViewerPose(h||o),g=ct,c!==null){const C=c.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let $=!1;C.length!==z.cameras.length&&(z.cameras.length=0,$=!0);for(let w=0;w<C.length;w++){const N=C[w];let O=null;if(f!==null)O=f.getViewport(N);else{const q=u.getViewSubImage(d,N);O=q.viewport,w===0&&(t.setRenderTargetTextures(_,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(_))}let H=I[w];H===void 0&&(H=new sn,H.layers.enable(w),H.viewport=new pe,I[w]=H),H.matrix.fromArray(N.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(N.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(O.x,O.y,O.width,O.height),w===0&&(z.matrix.copy(H.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),$===!0&&z.cameras.push(H)}const K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const w=u.getDepthInformation(C[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(K&&K.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let w=0;w<C.length;w++){const N=C[w].camera;if(N){let O=p[N];O||(O=new Fl,p[N]=O);const H=u.getCameraImage(N);O.sourceTexture=H}}}}for(let C=0;C<A.length;C++){const $=R[C],K=A[C];$!==null&&K!==void 0&&K.update($,ct,h||o)}$t&&$t(it,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const qt=new Yl;qt.setAnimationLoop(ee),this.setAnimationLoop=function(it){$t=it},this.dispose=function(){}}}const oi=new un,og=new oe;function ag(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Il(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,oi.copy(_),oi.x*=-1,oi.y*=-1,oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(oi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const _=M.program;n.uniformBlockBinding(y,_)}function h(y,M){let _=s[y.id];_===void 0&&(g(y),_=c(y),s[y.id]=_,y.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(y,A);const R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function c(y){const M=u();y.__bindingPointIndex=M;const _=i.createBuffer(),A=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],_=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,L=_.length;R<L;R++){const P=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,S=P.length;b<S;b++){const I=P[b];if(f(I,R,b,A)===!0){const z=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let Z=0;Z<G.length;Z++){const Y=G[Z],nt=x(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,z+J,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,J),J+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,_,A){const R=y.value,L=M+"_"+_;if(A[L]===void 0)return typeof R=="number"||typeof R=="boolean"?A[L]=R:A[L]=R.clone(),!0;{const P=A[L];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return A[L]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(y){const M=y.uniforms;let _=0;const A=16;for(let L=0,P=M.length;L<P;L++){const b=Array.isArray(M[L])?M[L]:[M[L]];for(let S=0,I=b.length;S<I;S++){const z=b[S],G=Array.isArray(z.value)?z.value:[z.value];for(let J=0,Z=G.length;J<Z;J++){const Y=G[J],nt=x(Y),X=_%A,_t=X%nt.boundary,ht=X+_t;_+=_t,ht!==0&&A-ht<nt.storage&&(_+=A-ht),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=nt.storage}}}const R=_%A;return R>0&&(_+=A-R),y.__size=_,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}class lg{constructor(t={}){const{canvas:e=ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Le;let R=0,L=0,P=null,b=-1,S=null;const I=new pe,z=new pe;let G=null;const J=new Gt(0);let Z=0,Y=e.width,nt=e.height,X=1,_t=null,ht=null;const Et=new pe(0,0,Y,nt),Bt=new pe(0,0,Y,nt);let $t=!1;const ee=new Cr;let qt=!1,it=!1;const ct=new oe,C=new D,$=new pe,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function W(){return P===null?X:1}let w=n;function N(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xa}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),w===null){const B="webgl2";if(w=N(B,T),w===null)throw N(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let O,H,q,ut,j,ot,It,mt,E,v,U,V,st,et,At,dt,Rt,Tt,ft,wt,Ht,Ft,St,Yt;function F(){O=new vm(w),O.init(),Ft=new eg(w,O),H=new fm(w,O,t,Ft),q=new Q0(w,O),H.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),ut=new Sm(w),j=new k0,ot=new tg(w,O,q,j,H,Ft,ut),It=new pm(_),mt=new _m(_),E=new Rf(w),St=new hm(w,E),v=new Mm(w,E,ut,St),U=new bm(w,v,E,ut),ft=new Em(w,H,ot),dt=new dm(j),V=new B0(_,It,mt,O,H,St,dt),st=new ag(_,j),et=new V0,At=new $0(O),Tt=new lm(_,It,mt,q,U,f,l),Rt=new K0(_,U,H),Yt=new cg(w,ut,H,q),wt=new um(w,O,ut),Ht=new ym(w,O,ut),ut.programs=V.programs,_.capabilities=H,_.extensions=O,_.properties=j,_.renderLists=et,_.shadowMap=Rt,_.state=q,_.info=ut}F();const vt=new rg(_,w);this.xr=vt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const T=O.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=O.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(Y,nt,!1))},this.getSize=function(T){return T.set(Y,nt)},this.setSize=function(T,B,Q=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,nt=B,e.width=Math.floor(T*X),e.height=Math.floor(B*X),Q===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Y*X,nt*X).floor()},this.setDrawingBufferSize=function(T,B,Q){Y=T,nt=B,X=Q,e.width=Math.floor(T*Q),e.height=Math.floor(B*Q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,B,Q,tt){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,B,Q,tt),q.viewport(I.copy(Et).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,B,Q,tt){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,B,Q,tt),q.scissor(z.copy(Bt).multiplyScalar(X).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(T){q.setScissorTest($t=T)},this.setOpaqueSort=function(T){_t=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Q=!0){let tt=0;if(T){let k=!1;if(P!==null){const xt=P.texture.format;k=xt===ba||xt===Ea||xt===Sa}if(k){const xt=P.texture.type,bt=xt===xn||xt===pi||xt===Ss||xt===Es||xt===va||xt===Ma,Lt=Tt.getClearColor(),Ct=Tt.getClearAlpha(),kt=Lt.r,Vt=Lt.g,zt=Lt.b;bt?(g[0]=kt,g[1]=Vt,g[2]=zt,g[3]=Ct,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=kt,x[1]=Vt,x[2]=zt,x[3]=Ct,w.clearBufferiv(w.COLOR,0,x))}else tt|=w.COLOR_BUFFER_BIT}B&&(tt|=w.DEPTH_BUFFER_BIT),Q&&(tt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Tt.dispose(),et.dispose(),At.dispose(),j.dispose(),It.dispose(),mt.dispose(),U.dispose(),St.dispose(),Yt.dispose(),V.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",fn),vt.removeEventListener("sessionend",Va),Qn.stop()};function Mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ut.autoReset,B=Rt.enabled,Q=Rt.autoUpdate,tt=Rt.needsUpdate,k=Rt.type;F(),ut.autoReset=T,Rt.enabled=B,Rt.autoUpdate=Q,Rt.needsUpdate=tt,Rt.type=k}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){const B=T.target;B.removeEventListener("dispose",lt),Dt(B)}function Dt(T){Wt(T),j.remove(T)}function Wt(T){const B=j.get(T).programs;B!==void 0&&(B.forEach(function(Q){V.releaseProgram(Q)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Q,tt,k,xt){B===null&&(B=K);const bt=k.isMesh&&k.matrixWorld.determinant()<0,Lt=ph(T,B,Q,tt,k);q.setMaterial(tt,bt);let Ct=Q.index,kt=1;if(tt.wireframe===!0){if(Ct=v.getWireframeAttribute(Q),Ct===void 0)return;kt=2}const Vt=Q.drawRange,zt=Q.attributes.position;let ne=Vt.start*kt,le=(Vt.start+Vt.count)*kt;xt!==null&&(ne=Math.max(ne,xt.start*kt),le=Math.min(le,(xt.start+xt.count)*kt)),Ct!==null?(ne=Math.max(ne,0),le=Math.min(le,Ct.count)):zt!=null&&(ne=Math.max(ne,0),le=Math.min(le,zt.count));const ve=le-ne;if(ve<0||ve===1/0)return;St.setup(k,tt,Lt,Q,Ct);let de,ue=wt;if(Ct!==null&&(de=E.get(Ct),ue=Ht,ue.setIndex(de)),k.isMesh)tt.wireframe===!0?(q.setLineWidth(tt.wireframeLinewidth*W()),ue.setMode(w.LINES)):ue.setMode(w.TRIANGLES);else if(k.isLine){let Ot=tt.linewidth;Ot===void 0&&(Ot=1),q.setLineWidth(Ot*W()),k.isLineSegments?ue.setMode(w.LINES):k.isLineLoop?ue.setMode(w.LINE_LOOP):ue.setMode(w.LINE_STRIP)}else k.isPoints?ue.setMode(w.POINTS):k.isSprite&&ue.setMode(w.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ot=k._multiDrawStarts,ge=k._multiDrawCounts,se=k._multiDrawCount,We=Ct?E.get(Ct).bytesPerElement:1,vi=j.get(tt).currentProgram.getUniforms();for(let Xe=0;Xe<se;Xe++)vi.setValue(w,"_gl_DrawID",Xe),ue.render(Ot[Xe]/We,ge[Xe])}else if(k.isInstancedMesh)ue.renderInstances(ne,ve,k.count);else if(Q.isInstancedBufferGeometry){const Ot=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ge=Math.min(Q.instanceCount,Ot);ue.renderInstances(ne,ve,ge)}else ue.render(ne,ve)};function fe(T,B,Q){T.transparent===!0&&T.side===ke&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,Bs(T,B,Q),T.side=Zn,T.needsUpdate=!0,Bs(T,B,Q),T.side=ke):Bs(T,B,Q)}this.compile=function(T,B,Q=null){Q===null&&(Q=T),p=At.get(Q),p.init(B),M.push(p),Q.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==Q&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const tt=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const xt=k.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){const Lt=xt[bt];fe(Lt,Q,k),tt.add(Lt)}else fe(xt,Q,k),tt.add(xt)}),p=M.pop(),tt},this.compileAsync=function(T,B,Q=null){const tt=this.compile(T,B,Q);return new Promise(k=>{function xt(){if(tt.forEach(function(bt){j.get(bt).currentProgram.isReady()&&tt.delete(bt)}),tt.size===0){k(T);return}setTimeout(xt,10)}O.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ae=null;function Mn(T){ae&&ae(T)}function fn(){Qn.stop()}function Va(){Qn.start()}const Qn=new Yl;Qn.setAnimationLoop(Mn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(T){ae=T,vt.setAnimationLoop(T),T===null?Qn.stop():Qn.start()},vt.addEventListener("sessionstart",fn),vt.addEventListener("sessionend",Va),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(B),B=vt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,P),p=At.get(T,M.length),p.init(B),M.push(p),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(ct,mn,B.reversedDepth),it=this.localClippingEnabled,qt=dt.init(this.clippingPlanes,it),m=et.get(T,y.length),m.init(),y.push(m),vt.enabled===!0&&vt.isPresenting===!0){const xt=_.xr.getDepthSensingMesh();xt!==null&&Nr(xt,B,-1/0,_.sortObjects)}Nr(T,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(_t,ht),rt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,rt&&Tt.addToRenderList(m,T),this.info.render.frame++,qt===!0&&dt.beginShadows();const Q=p.state.shadowsArray;Rt.render(Q,T,B),qt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const xt=B.cameras;if(k.length>0)for(let bt=0,Lt=xt.length;bt<Lt;bt++){const Ct=xt[bt];Wa(tt,k,T,Ct)}rt&&Tt.render(T);for(let bt=0,Lt=xt.length;bt<Lt;bt++){const Ct=xt[bt];Ga(m,T,Ct,Ct.viewport)}}else k.length>0&&Wa(tt,k,T,B),rt&&Tt.render(T),Ga(m,T,B);P!==null&&L===0&&(ot.updateMultisampleRenderTarget(P),ot.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,B),St.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],qt===!0&&dt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Nr(T,B,Q,tt){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){tt&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const bt=U.update(T),Lt=T.material;Lt.visible&&m.push(T,bt,Lt,Q,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const bt=U.update(T),Lt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$.copy(T.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),$.copy(bt.boundingSphere.center)),$.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(Lt)){const Ct=bt.groups;for(let kt=0,Vt=Ct.length;kt<Vt;kt++){const zt=Ct[kt],ne=Lt[zt.materialIndex];ne&&ne.visible&&m.push(T,bt,ne,Q,$.z,zt)}}else Lt.visible&&m.push(T,bt,Lt,Q,$.z,null)}}const xt=T.children;for(let bt=0,Lt=xt.length;bt<Lt;bt++)Nr(xt[bt],B,Q,tt)}function Ga(T,B,Q,tt){const k=T.opaque,xt=T.transmissive,bt=T.transparent;p.setupLightsView(Q),qt===!0&&dt.setGlobalState(_.clippingPlanes,Q),tt&&q.viewport(I.copy(tt)),k.length>0&&Os(k,B,Q),xt.length>0&&Os(xt,B,Q),bt.length>0&&Os(bt,B,Q),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Wa(T,B,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new mi(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?Us:xn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const xt=p.state.transmissionRenderTarget[tt.id],bt=tt.viewport||I;xt.setSize(bt.z*_.transmissionResolutionScale,bt.w*_.transmissionResolutionScale);const Lt=_.getRenderTarget(),Ct=_.getActiveCubeFace(),kt=_.getActiveMipmapLevel();_.setRenderTarget(xt),_.getClearColor(J),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),rt&&Tt.render(Q);const Vt=_.toneMapping;_.toneMapping=Yn;const zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),qt===!0&&dt.setGlobalState(_.clippingPlanes,tt),Os(T,Q,tt),ot.updateMultisampleRenderTarget(xt),ot.updateRenderTargetMipmap(xt),O.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let le=0,ve=B.length;le<ve;le++){const de=B[le],ue=de.object,Ot=de.geometry,ge=de.material,se=de.group;if(ge.side===ke&&ue.layers.test(tt.layers)){const We=ge.side;ge.side=Ge,ge.needsUpdate=!0,Xa(ue,Q,tt,Ot,ge,se),ge.side=We,ge.needsUpdate=!0,ne=!0}}ne===!0&&(ot.updateMultisampleRenderTarget(xt),ot.updateRenderTargetMipmap(xt))}_.setRenderTarget(Lt,Ct,kt),_.setClearColor(J,Z),zt!==void 0&&(tt.viewport=zt),_.toneMapping=Vt}function Os(T,B,Q){const tt=B.isScene===!0?B.overrideMaterial:null;for(let k=0,xt=T.length;k<xt;k++){const bt=T[k],Lt=bt.object,Ct=bt.geometry,kt=bt.group;let Vt=bt.material;Vt.allowOverride===!0&&tt!==null&&(Vt=tt),Lt.layers.test(Q.layers)&&Xa(Lt,B,Q,Ct,Vt,kt)}}function Xa(T,B,Q,tt,k,xt){T.onBeforeRender(_,B,Q,tt,k,xt),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,B,Q,tt,T,xt),k.transparent===!0&&k.side===ke&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,_.renderBufferDirect(Q,B,tt,k,T,xt),k.side=Zn,k.needsUpdate=!0,_.renderBufferDirect(Q,B,tt,k,T,xt),k.side=ke):_.renderBufferDirect(Q,B,tt,k,T,xt),T.onAfterRender(_,B,Q,tt,k,xt)}function Bs(T,B,Q){B.isScene!==!0&&(B=K);const tt=j.get(T),k=p.state.lights,xt=p.state.shadowsArray,bt=k.state.version,Lt=V.getParameters(T,k.state,xt,B,Q),Ct=V.getProgramCacheKey(Lt);let kt=tt.programs;tt.environment=T.isMeshStandardMaterial?B.environment:null,tt.fog=B.fog,tt.envMap=(T.isMeshStandardMaterial?mt:It).get(T.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",lt),kt=new Map,tt.programs=kt);let Vt=kt.get(Ct);if(Vt!==void 0){if(tt.currentProgram===Vt&&tt.lightsStateVersion===bt)return Ya(T,Lt),Vt}else Lt.uniforms=V.getUniforms(T),T.onBeforeCompile(Lt,_),Vt=V.acquireProgram(Lt,Ct),kt.set(Ct,Vt),tt.uniforms=Lt.uniforms;const zt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=dt.uniform),Ya(T,Lt),tt.needsLights=gh(T),tt.lightsStateVersion=bt,tt.needsLights&&(zt.ambientLightColor.value=k.state.ambient,zt.lightProbe.value=k.state.probe,zt.directionalLights.value=k.state.directional,zt.directionalLightShadows.value=k.state.directionalShadow,zt.spotLights.value=k.state.spot,zt.spotLightShadows.value=k.state.spotShadow,zt.rectAreaLights.value=k.state.rectArea,zt.ltc_1.value=k.state.rectAreaLTC1,zt.ltc_2.value=k.state.rectAreaLTC2,zt.pointLights.value=k.state.point,zt.pointLightShadows.value=k.state.pointShadow,zt.hemisphereLights.value=k.state.hemi,zt.directionalShadowMap.value=k.state.directionalShadowMap,zt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,zt.spotShadowMap.value=k.state.spotShadowMap,zt.spotLightMatrix.value=k.state.spotLightMatrix,zt.spotLightMap.value=k.state.spotLightMap,zt.pointShadowMap.value=k.state.pointShadowMap,zt.pointShadowMatrix.value=k.state.pointShadowMatrix),tt.currentProgram=Vt,tt.uniformsList=null,Vt}function qa(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=xr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ya(T,B){const Q=j.get(T);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function ph(T,B,Q,tt,k){B.isScene!==!0&&(B=K),ot.resetTextureUnits();const xt=B.fog,bt=tt.isMeshStandardMaterial?B.environment:null,Lt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:$i,Ct=(tt.isMeshStandardMaterial?mt:It).get(tt.envMap||bt),kt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Vt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),zt=!!Q.morphAttributes.position,ne=!!Q.morphAttributes.normal,le=!!Q.morphAttributes.color;let ve=Yn;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=_.toneMapping);const de=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ue=de!==void 0?de.length:0,Ot=j.get(tt),ge=p.state.lights;if(qt===!0&&(it===!0||T!==S)){const Oe=T===S&&tt.id===b;dt.setState(tt,T,Oe)}let se=!1;tt.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ge.state.version||Ot.outputColorSpace!==Lt||k.isBatchedMesh&&Ot.batching===!1||!k.isBatchedMesh&&Ot.batching===!0||k.isBatchedMesh&&Ot.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ot.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ot.instancing===!1||!k.isInstancedMesh&&Ot.instancing===!0||k.isSkinnedMesh&&Ot.skinning===!1||!k.isSkinnedMesh&&Ot.skinning===!0||k.isInstancedMesh&&Ot.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ot.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ot.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ot.instancingMorph===!1&&k.morphTexture!==null||Ot.envMap!==Ct||tt.fog===!0&&Ot.fog!==xt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==kt||Ot.vertexTangents!==Vt||Ot.morphTargets!==zt||Ot.morphNormals!==ne||Ot.morphColors!==le||Ot.toneMapping!==ve||Ot.morphTargetsCount!==ue)&&(se=!0):(se=!0,Ot.__version=tt.version);let We=Ot.currentProgram;se===!0&&(We=Bs(tt,B,k));let vi=!1,Xe=!1,rs=!1;const xe=We.getUniforms(),Qe=Ot.uniforms;if(q.useProgram(We.program)&&(vi=!0,Xe=!0,rs=!0),tt.id!==b&&(b=tt.id,Xe=!0),vi||S!==T){q.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xe.setValue(w,"projectionMatrix",T.projectionMatrix),xe.setValue(w,"viewMatrix",T.matrixWorldInverse);const He=xe.map.cameraPosition;He!==void 0&&He.setValue(w,C.setFromMatrixPosition(T.matrixWorld)),H.logarithmicDepthBuffer&&xe.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&xe.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Xe=!0,rs=!0)}if(k.isSkinnedMesh){xe.setOptional(w,k,"bindMatrix"),xe.setOptional(w,k,"bindMatrixInverse");const Oe=k.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),xe.setValue(w,"boneTexture",Oe.boneTexture,ot))}k.isBatchedMesh&&(xe.setOptional(w,k,"batchingTexture"),xe.setValue(w,"batchingTexture",k._matricesTexture,ot),xe.setOptional(w,k,"batchingIdTexture"),xe.setValue(w,"batchingIdTexture",k._indirectTexture,ot),xe.setOptional(w,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(w,"batchingColorTexture",k._colorsTexture,ot));const tn=Q.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ft.update(k,Q,We),(Xe||Ot.receiveShadow!==k.receiveShadow)&&(Ot.receiveShadow=k.receiveShadow,xe.setValue(w,"receiveShadow",k.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Qe.envMap.value=Ct,Qe.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&B.environment!==null&&(Qe.envMapIntensity.value=B.environmentIntensity),Xe&&(xe.setValue(w,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&mh(Qe,rs),xt&&tt.fog===!0&&st.refreshFogUniforms(Qe,xt),st.refreshMaterialUniforms(Qe,tt,X,nt,p.state.transmissionRenderTarget[T.id]),xr.upload(w,qa(Ot),Qe,ot)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(xr.upload(w,qa(Ot),Qe,ot),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&xe.setValue(w,"center",k.center),xe.setValue(w,"modelViewMatrix",k.modelViewMatrix),xe.setValue(w,"normalMatrix",k.normalMatrix),xe.setValue(w,"modelMatrix",k.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Oe=tt.uniformsGroups;for(let He=0,Fr=Oe.length;He<Fr;He++){const ti=Oe[He];Yt.update(ti,We),Yt.bind(ti,We)}}return We}function mh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function gh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,Q){const tt=j.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),j.get(T.texture).__webglTexture=B,j.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const Q=j.get(T);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0};const xh=w.createFramebuffer();this.setRenderTarget=function(T,B=0,Q=0){P=T,R=B,L=Q;let tt=!0,k=null,xt=!1,bt=!1;if(T){const Ct=j.get(T);if(Ct.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(w.FRAMEBUFFER,null),tt=!1;else if(Ct.__webglFramebuffer===void 0)ot.setupRenderTarget(T);else if(Ct.__hasExternalTextures)ot.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const zt=T.depthTexture;if(Ct.__boundDepthTexture!==zt){if(zt!==null&&j.has(zt)&&(T.width!==zt.image.width||T.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(T)}}const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(bt=!0);const Vt=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][Q]:k=Vt[B],xt=!0):T.samples>0&&ot.useMultisampledRTT(T)===!1?k=j.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[Q]:k=Vt,I.copy(T.viewport),z.copy(T.scissor),G=T.scissorTest}else I.copy(Et).multiplyScalar(X).floor(),z.copy(Bt).multiplyScalar(X).floor(),G=$t;if(Q!==0&&(k=xh),q.bindFramebuffer(w.FRAMEBUFFER,k)&&tt&&q.drawBuffers(T,k),q.viewport(I),q.scissor(z),q.setScissorTest(G),xt){const Ct=j.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,Q)}else if(bt){const Ct=B;for(let kt=0;kt<T.textures.length;kt++){const Vt=j.get(T.textures[kt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+kt,Vt.__webglTexture,Q,Ct)}}else if(T!==null&&Q!==0){const Ct=j.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ct.__webglTexture,Q)}b=-1},this.readRenderTargetPixels=function(T,B,Q,tt,k,xt,bt,Lt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){q.bindFramebuffer(w.FRAMEBUFFER,Ct);try{const kt=T.textures[Lt],Vt=kt.format,zt=kt.type;if(!H.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-tt&&Q>=0&&Q<=T.height-k&&(T.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Lt),w.readPixels(B,Q,tt,k,Ft.convert(Vt),Ft.convert(zt),xt))}finally{const kt=P!==null?j.get(P).__webglFramebuffer:null;q.bindFramebuffer(w.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,B,Q,tt,k,xt,bt,Lt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct)if(B>=0&&B<=T.width-tt&&Q>=0&&Q<=T.height-k){q.bindFramebuffer(w.FRAMEBUFFER,Ct);const kt=T.textures[Lt],Vt=kt.format,zt=kt.type;if(!H.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ne),w.bufferData(w.PIXEL_PACK_BUFFER,xt.byteLength,w.STREAM_READ),T.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Lt),w.readPixels(B,Q,tt,k,Ft.convert(Vt),Ft.convert(zt),0);const le=P!==null?j.get(P).__webglFramebuffer:null;q.bindFramebuffer(w.FRAMEBUFFER,le);const ve=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await au(w,ve,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ne),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,xt),w.deleteBuffer(ne),w.deleteSync(ve),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Q=0){const tt=Math.pow(2,-Q),k=Math.floor(T.image.width*tt),xt=Math.floor(T.image.height*tt),bt=B!==null?B.x:0,Lt=B!==null?B.y:0;ot.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,Q,0,0,bt,Lt,k,xt),q.unbindTexture()};const _h=w.createFramebuffer(),vh=w.createFramebuffer();this.copyTextureToTexture=function(T,B,Q=null,tt=null,k=0,xt=null){xt===null&&(k!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=k,k=0):xt=0);let bt,Lt,Ct,kt,Vt,zt,ne,le,ve;const de=T.isCompressedTexture?T.mipmaps[xt]:T.image;if(Q!==null)bt=Q.max.x-Q.min.x,Lt=Q.max.y-Q.min.y,Ct=Q.isBox3?Q.max.z-Q.min.z:1,kt=Q.min.x,Vt=Q.min.y,zt=Q.isBox3?Q.min.z:0;else{const tn=Math.pow(2,-k);bt=Math.floor(de.width*tn),Lt=Math.floor(de.height*tn),T.isDataArrayTexture?Ct=de.depth:T.isData3DTexture?Ct=Math.floor(de.depth*tn):Ct=1,kt=0,Vt=0,zt=0}tt!==null?(ne=tt.x,le=tt.y,ve=tt.z):(ne=0,le=0,ve=0);const ue=Ft.convert(B.format),Ot=Ft.convert(B.type);let ge;B.isData3DTexture?(ot.setTexture3D(B,0),ge=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ot.setTexture2DArray(B,0),ge=w.TEXTURE_2D_ARRAY):(ot.setTexture2D(B,0),ge=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);const se=w.getParameter(w.UNPACK_ROW_LENGTH),We=w.getParameter(w.UNPACK_IMAGE_HEIGHT),vi=w.getParameter(w.UNPACK_SKIP_PIXELS),Xe=w.getParameter(w.UNPACK_SKIP_ROWS),rs=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,de.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,de.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Vt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zt);const xe=T.isDataArrayTexture||T.isData3DTexture,Qe=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const tn=j.get(T),Oe=j.get(B),He=j.get(tn.__renderTarget),Fr=j.get(Oe.__renderTarget);q.bindFramebuffer(w.READ_FRAMEBUFFER,He.__webglFramebuffer),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let ti=0;ti<Ct;ti++)xe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,j.get(T).__webglTexture,k,zt+ti),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,j.get(B).__webglTexture,xt,ve+ti)),w.blitFramebuffer(kt,Vt,bt,Lt,ne,le,bt,Lt,w.DEPTH_BUFFER_BIT,w.NEAREST);q.bindFramebuffer(w.READ_FRAMEBUFFER,null),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||j.has(T)){const tn=j.get(T),Oe=j.get(B);q.bindFramebuffer(w.READ_FRAMEBUFFER,_h),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,vh);for(let He=0;He<Ct;He++)xe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,tn.__webglTexture,k,zt+He):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,tn.__webglTexture,k),Qe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Oe.__webglTexture,xt,ve+He):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Oe.__webglTexture,xt),k!==0?w.blitFramebuffer(kt,Vt,bt,Lt,ne,le,bt,Lt,w.COLOR_BUFFER_BIT,w.NEAREST):Qe?w.copyTexSubImage3D(ge,xt,ne,le,ve+He,kt,Vt,bt,Lt):w.copyTexSubImage2D(ge,xt,ne,le,kt,Vt,bt,Lt);q.bindFramebuffer(w.READ_FRAMEBUFFER,null),q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Qe?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(ge,xt,ne,le,ve,bt,Lt,Ct,ue,Ot,de.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(ge,xt,ne,le,ve,bt,Lt,Ct,ue,de.data):w.texSubImage3D(ge,xt,ne,le,ve,bt,Lt,Ct,ue,Ot,de):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,xt,ne,le,bt,Lt,ue,Ot,de.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,xt,ne,le,de.width,de.height,ue,de.data):w.texSubImage2D(w.TEXTURE_2D,xt,ne,le,bt,Lt,ue,Ot,de);w.pixelStorei(w.UNPACK_ROW_LENGTH,se),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,We),w.pixelStorei(w.UNPACK_SKIP_PIXELS,vi),w.pixelStorei(w.UNPACK_SKIP_ROWS,Xe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,rs),xt===0&&B.generateMipmaps&&w.generateMipmap(ge),q.unbindTexture()},this.initRenderTarget=function(T){j.get(T).__webglFramebuffer===void 0&&ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ot.setTextureCube(T,0):T.isData3DTexture?ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ot.setTexture2DArray(T,0):ot.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){R=0,L=0,P=null,q.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class hg{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}}class jl{constructor(){this.id=0,this.v1=new Gi,this.v2=new Gi,this.v3=new Gi,this.normalModel=new D,this.vertexNormalsModel=[new D,new D,new D],this.vertexNormalsLength=0,this.color=new Gt,this.material=null,this.uvs=[new pt,new pt,new pt],this.z=0,this.renderOrder=0}}class Gi{constructor(){this.position=new D,this.positionWorld=new D,this.positionScreen=new pe,this.visible=!0}copy(t){this.positionWorld.copy(t.positionWorld),this.positionScreen.copy(t.positionScreen)}}class Ql{constructor(){this.id=0,this.v1=new Gi,this.v2=new Gi,this.vertexColors=[new Gt,new Gt],this.material=null,this.z=0,this.renderOrder=0}}class th{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new pt,this.material=null,this.renderOrder=0}}class ug{constructor(){let t,e,n=0,s,r,o=0,a,l,h=0,c,u,d=0,f,g,x=0,m;const p={objects:[],lights:[],elements:[]},y=new D,M=new pe,_=new Un(new D(-1,-1,-1),new D(1,1,1)),A=new Un,R=new Array(3),L=new oe,P=new oe,b=new oe,S=new Cr,I=[],z=[],G=[],J=[],Z=[];function Y(){const C=[],$=[],K=[];let rt=null;const W=new Xt;function w(E){rt=E,W.getNormalMatrix(rt.matrixWorld),C.length=0,$.length=0,K.length=0}function N(E){const v=E.position,U=E.positionWorld,V=E.positionScreen;U.copy(v).applyMatrix4(m),V.copy(U).applyMatrix4(P);const st=1/V.w;V.x*=st,V.y*=st,V.z*=st,E.visible=V.x>=-1&&V.x<=1&&V.y>=-1&&V.y<=1&&V.z>=-1&&V.z<=1}function O(E,v,U){s=Bt(),s.position.set(E,v,U),N(s)}function H(E,v,U){C.push(E,v,U)}function q(E,v,U){$.push(E,v,U)}function ut(E,v){K.push(E,v)}function j(E,v,U){return E.visible===!0||v.visible===!0||U.visible===!0?!0:(R[0]=E.positionScreen,R[1]=v.positionScreen,R[2]=U.positionScreen,_.intersectsBox(A.setFromPoints(R)))}function ot(E,v,U){return(U.positionScreen.x-E.positionScreen.x)*(v.positionScreen.y-E.positionScreen.y)-(U.positionScreen.y-E.positionScreen.y)*(v.positionScreen.x-E.positionScreen.x)<0}function It(E,v){const U=z[E],V=z[v];U.positionScreen.copy(U.position).applyMatrix4(b),V.positionScreen.copy(V.position).applyMatrix4(b),ct(U.positionScreen,V.positionScreen)===!0&&(U.positionScreen.multiplyScalar(1/U.positionScreen.w),V.positionScreen.multiplyScalar(1/V.positionScreen.w),c=ee(),c.id=rt.id,c.v1.copy(U),c.v2.copy(V),c.z=Math.max(U.positionScreen.z,V.positionScreen.z),c.renderOrder=rt.renderOrder,c.material=rt.material,rt.material.vertexColors&&(c.vertexColors[0].fromArray($,E*3),c.vertexColors[1].fromArray($,v*3)),p.elements.push(c))}function mt(E,v,U,V){const st=z[E],et=z[v],At=z[U];if(j(st,et,At)!==!1&&(V.side===ke||ot(st,et,At)===!0)){a=$t(),a.id=rt.id,a.v1.copy(st),a.v2.copy(et),a.v3.copy(At),a.z=(st.positionScreen.z+et.positionScreen.z+At.positionScreen.z)/3,a.renderOrder=rt.renderOrder,y.subVectors(At.position,et.position),M.subVectors(st.position,et.position),y.cross(M),a.normalModel.copy(y),a.normalModel.applyMatrix3(W).normalize();for(let dt=0;dt<3;dt++){const Rt=a.vertexNormalsModel[dt];Rt.fromArray(C,arguments[dt]*3),Rt.applyMatrix3(W).normalize(),a.uvs[dt].fromArray(K,arguments[dt]*2)}a.vertexNormalsLength=3,a.material=V,V.vertexColors&&a.color.fromArray($,E*3),p.elements.push(a)}}return{setObject:w,projectVertex:N,checkTriangleVisibility:j,checkBackfaceCulling:ot,pushVertex:O,pushNormal:H,pushColor:q,pushUv:ut,pushLine:It,pushTriangle:mt}}const nt=new Y;function X(C){if(C.visible===!1)return;if(C.isLight)p.lights.push(C);else if(C.isMesh||C.isLine||C.isPoints){if(C.material.visible===!1||C.frustumCulled===!0&&S.intersectsObject(C)===!1)return;_t(C)}else if(C.isSprite){if(C.material.visible===!1||C.frustumCulled===!0&&S.intersectsSprite(C)===!1)return;_t(C)}const $=C.children;for(let K=0,rt=$.length;K<rt;K++)X($[K])}function _t(C){t=Et(),t.id=C.id,t.object=C,y.setFromMatrixPosition(C.matrixWorld),y.applyMatrix4(P),t.z=y.z,t.renderOrder=C.renderOrder,p.objects.push(t)}this.projectScene=function(C,$,K,rt){l=0,u=0,g=0,p.elements.length=0,C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),L.copy($.matrixWorldInverse),P.multiplyMatrices($.projectionMatrix,L),S.setFromProjectionMatrix(P),e=0,p.objects.length=0,p.lights.length=0,X(C),K===!0&&p.objects.sort(it);const W=p.objects;for(let w=0,N=W.length;w<N;w++){const O=W[w].object,H=O.geometry;if(nt.setObject(O),m=O.matrixWorld,r=0,O.isMesh){let q=O.material;const ut=Array.isArray(q),j=H.attributes,ot=H.groups;if(j.position===void 0)continue;const It=j.position.array;for(let mt=0,E=It.length;mt<E;mt+=3){let v=It[mt],U=It[mt+1],V=It[mt+2];const st=H.morphAttributes.position;if(st!==void 0){const et=H.morphTargetsRelative,At=O.morphTargetInfluences;for(let dt=0,Rt=st.length;dt<Rt;dt++){const Tt=At[dt];if(Tt===0)continue;const ft=st[dt];et?(v+=ft.getX(mt/3)*Tt,U+=ft.getY(mt/3)*Tt,V+=ft.getZ(mt/3)*Tt):(v+=(ft.getX(mt/3)-It[mt])*Tt,U+=(ft.getY(mt/3)-It[mt+1])*Tt,V+=(ft.getZ(mt/3)-It[mt+2])*Tt)}}nt.pushVertex(v,U,V)}if(j.normal!==void 0){const mt=j.normal.array;for(let E=0,v=mt.length;E<v;E+=3)nt.pushNormal(mt[E],mt[E+1],mt[E+2])}if(j.color!==void 0){const mt=j.color.array;for(let E=0,v=mt.length;E<v;E+=3)nt.pushColor(mt[E],mt[E+1],mt[E+2])}if(j.uv!==void 0){const mt=j.uv.array;for(let E=0,v=mt.length;E<v;E+=2)nt.pushUv(mt[E],mt[E+1])}if(H.index!==null){const mt=H.index.array;if(ot.length>0)for(let E=0;E<ot.length;E++){const v=ot[E];if(q=ut===!0?O.material[v.materialIndex]:O.material,q!==void 0)for(let U=v.start,V=v.start+v.count;U<V;U+=3)nt.pushTriangle(mt[U],mt[U+1],mt[U+2],q)}else for(let E=0,v=mt.length;E<v;E+=3)nt.pushTriangle(mt[E],mt[E+1],mt[E+2],q)}else if(ot.length>0)for(let mt=0;mt<ot.length;mt++){const E=ot[mt];if(q=ut===!0?O.material[E.materialIndex]:O.material,q!==void 0)for(let v=E.start,U=E.start+E.count;v<U;v+=3)nt.pushTriangle(v,v+1,v+2,q)}else for(let mt=0,E=It.length/3;mt<E;mt+=3)nt.pushTriangle(mt,mt+1,mt+2,q)}else if(O.isLine){b.multiplyMatrices(P,m);const q=H.attributes;if(q.position!==void 0){const ut=q.position.array;for(let j=0,ot=ut.length;j<ot;j+=3)nt.pushVertex(ut[j],ut[j+1],ut[j+2]);if(q.color!==void 0){const j=q.color.array;for(let ot=0,It=j.length;ot<It;ot+=3)nt.pushColor(j[ot],j[ot+1],j[ot+2])}if(H.index!==null){const j=H.index.array;for(let ot=0,It=j.length;ot<It;ot+=2)nt.pushLine(j[ot],j[ot+1])}else{const j=O.isLineSegments?2:1;for(let ot=0,It=ut.length/3-1;ot<It;ot+=j)nt.pushLine(ot,ot+1)}}}else if(O.isPoints){b.multiplyMatrices(P,m);const q=H.attributes;if(q.position!==void 0){const ut=q.position.array;for(let j=0,ot=ut.length;j<ot;j+=3)M.set(ut[j],ut[j+1],ut[j+2],1),M.applyMatrix4(b),ht(M,O,$)}}else O.isSprite&&(O.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,O.matrixWorld),M.set(m.elements[12],m.elements[13],m.elements[14],1),M.applyMatrix4(P),ht(M,O,$))}return rt===!0&&p.elements.sort(it),p};function ht(C,$,K){const rt=1/C.w;C.z*=rt,C.z>=-1&&C.z<=1&&(f=qt(),f.id=$.id,f.x=C.x*rt,f.y=C.y*rt,f.z=C.z,f.renderOrder=$.renderOrder,f.object=$,f.rotation=$.rotation,f.scale.x=$.scale.x*Math.abs(f.x-(C.x+K.projectionMatrix.elements[0])/(C.w+K.projectionMatrix.elements[12])),f.scale.y=$.scale.y*Math.abs(f.y-(C.y+K.projectionMatrix.elements[5])/(C.w+K.projectionMatrix.elements[13])),f.material=$.material,p.elements.push(f))}function Et(){if(e===n){const C=new hg;return I.push(C),n++,e++,C}return I[e++]}function Bt(){if(r===o){const C=new Gi;return z.push(C),o++,r++,C}return z[r++]}function $t(){if(l===h){const C=new jl;return G.push(C),h++,l++,C}return G[l++]}function ee(){if(u===d){const C=new Ql;return J.push(C),d++,u++,C}return J[u++]}function qt(){if(g===x){const C=new th;return Z.push(C),x++,g++,C}return Z[g++]}function it(C,$){return C.renderOrder!==$.renderOrder?C.renderOrder-$.renderOrder:C.z!==$.z?$.z-C.z:C.id!==$.id?C.id-$.id:0}function ct(C,$){let K=0,rt=1;const W=C.z+C.w,w=$.z+$.w,N=-C.z+C.w,O=-$.z+$.w;return W>=0&&w>=0&&N>=0&&O>=0?!0:W<0&&w<0||N<0&&O<0?!1:(W<0?K=Math.max(K,W/(W-w)):w<0&&(rt=Math.min(rt,W/(W-w))),N<0?K=Math.max(K,N/(N-O)):O<0&&(rt=Math.min(rt,N/(N-O))),rt<K?!1:(C.lerp($,K),$.lerp(C,1-rt),!0))}}}class fg{constructor(){let t,e,n,s,r,o,a,l,h,c,u,d=0,f=null,g=1,x,m;const p=this,y=new Lc,M=new Lc,_=new Gt,A=new Gt,R=new Gt,L=new Gt,P=new Gt,b=new Gt,S=new D,I=new D,z=new D,G=new Xt,J=new oe,Z=new oe,Y=[],nt=new ug,X=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=X,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=Le,this.info={render:{vertices:0,faces:0}},this.setQuality=function(K){switch(K){case"high":g=1;break;case"low":g=0;break}},this.setClearColor=function(K){b.set(K)},this.setPixelRatio=function(){},this.setSize=function(K,rt){s=K,r=rt,o=s/2,a=r/2,X.setAttribute("viewBox",-o+" "+-a+" "+s+" "+r),X.setAttribute("width",s),X.setAttribute("height",r),y.min.set(-o,-a),y.max.set(o,a)},this.getSize=function(){return{width:s,height:r}},this.setPrecision=function(K){f=K};function _t(){for(d=0;X.childNodes.length>0;)X.removeChild(X.childNodes[0])}function ht(K){return f!==null?K.toFixed(f):K}this.clear=function(){_t(),X.style.backgroundColor=b.getStyle(p.outputColorSpace)},this.render=function(K,rt){if(!(rt instanceof Aa)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}const W=K.background;W&&W.isColor?(_t(),X.style.backgroundColor=W.getStyle(p.outputColorSpace)):this.autoClear===!0&&this.clear(),p.info.render.vertices=0,p.info.render.faces=0,J.copy(rt.matrixWorldInverse),Z.multiplyMatrices(rt.projectionMatrix,J),t=nt.projectScene(K,rt,this.sortObjects,this.sortElements),e=t.elements,n=t.lights,G.getNormalMatrix(rt.matrixWorldInverse),Et(n),x="",m="";for(let w=0,N=e.length;w<N;w++){const O=e[w],H=O.material;if(!(H===void 0||H.opacity===0)){if(M.makeEmpty(),O instanceof th)l=O,l.x*=o,l.y*=-a,$t(l,O,H);else if(O instanceof Ql)l=O.v1,h=O.v2,l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,M.setFromPoints([l.positionScreen,h.positionScreen]),y.intersectsBox(M)===!0&&ee(l,h,H);else if(O instanceof jl){if(l=O.v1,h=O.v2,c=O.v3,l.positionScreen.z<-1||l.positionScreen.z>1||h.positionScreen.z<-1||h.positionScreen.z>1||c.positionScreen.z<-1||c.positionScreen.z>1)continue;l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,c.positionScreen.x*=o,c.positionScreen.y*=-a,this.overdraw>0&&(it(l.positionScreen,h.positionScreen,this.overdraw),it(h.positionScreen,c.positionScreen,this.overdraw),it(c.positionScreen,l.positionScreen,this.overdraw)),M.setFromPoints([l.positionScreen,h.positionScreen,c.positionScreen]),y.intersectsBox(M)===!0&&qt(l,h,c,O,H)}}}C(),K.traverseVisible(function(w){if(w.isSVGObject){if(S.setFromMatrixPosition(w.matrixWorld),S.applyMatrix4(Z),S.z<-1||S.z>1)return;const N=S.x*o,O=-S.y*a,H=w.node;H.setAttribute("transform","translate("+N+","+O+")"),X.appendChild(H)}})};function Et(K){R.setRGB(0,0,0),L.setRGB(0,0,0),P.setRGB(0,0,0);for(let rt=0,W=K.length;rt<W;rt++){const w=K[rt],N=w.color;w.isAmbientLight?(R.r+=N.r,R.g+=N.g,R.b+=N.b):w.isDirectionalLight?(L.r+=N.r,L.g+=N.g,L.b+=N.b):w.isPointLight&&(P.r+=N.r,P.g+=N.g,P.b+=N.b)}}function Bt(K,rt,W,w){for(let N=0,O=K.length;N<O;N++){const H=K[N],q=H.color;if(H.isDirectionalLight){const ut=S.setFromMatrixPosition(H.matrixWorld).normalize();let j=W.dot(ut);if(j<=0)continue;j*=H.intensity,w.r+=q.r*j,w.g+=q.g*j,w.b+=q.b*j}else if(H.isPointLight){const ut=S.setFromMatrixPosition(H.matrixWorld);let j=W.dot(S.subVectors(ut,rt).normalize());if(j<=0||(j*=H.distance==0?1:1-Math.min(rt.distanceTo(ut)/H.distance,1),j==0))continue;j*=H.intensity,w.r+=q.r*j,w.g+=q.g*j,w.b+=q.b*j}}}function $t(K,rt,W){let w=rt.scale.x*o,N=rt.scale.y*a;W.isPointsMaterial&&(w*=W.size,N*=W.size);const O="M"+ht(K.x-w*.5)+","+ht(K.y-N*.5)+"h"+ht(w)+"v"+ht(N)+"h"+ht(-w)+"z";let H="";(W.isSpriteMaterial||W.isPointsMaterial)&&(H="fill:"+W.color.getStyle(p.outputColorSpace)+";fill-opacity:"+W.opacity),ct(H,O)}function ee(K,rt,W){const w="M"+ht(K.positionScreen.x)+","+ht(K.positionScreen.y)+"L"+ht(rt.positionScreen.x)+","+ht(rt.positionScreen.y);if(W.isLineBasicMaterial){let N="fill:none;stroke:"+W.color.getStyle(p.outputColorSpace)+";stroke-opacity:"+W.opacity+";stroke-width:"+W.linewidth+";stroke-linecap:"+W.linecap;W.isLineDashedMaterial&&(N=N+";stroke-dasharray:"+W.dashSize+","+W.gapSize),ct(N,w)}}function qt(K,rt,W,w,N){p.info.render.vertices+=3,p.info.render.faces++;const O="M"+ht(K.positionScreen.x)+","+ht(K.positionScreen.y)+"L"+ht(rt.positionScreen.x)+","+ht(rt.positionScreen.y)+"L"+ht(W.positionScreen.x)+","+ht(W.positionScreen.y)+"z";let H="";N.isMeshBasicMaterial?(_.copy(N.color),N.vertexColors&&_.multiply(w.color)):N.isMeshLambertMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial?(A.copy(N.color),N.vertexColors&&A.multiply(w.color),_.copy(R),I.copy(K.positionWorld).add(rt.positionWorld).add(W.positionWorld).divideScalar(3),Bt(n,I,w.normalModel,_),_.multiply(A).add(N.emissive)):N.isMeshNormalMaterial&&(z.copy(w.normalModel).applyMatrix3(G).normalize(),_.setRGB(z.x,z.y,z.z).multiplyScalar(.5).addScalar(.5)),N.wireframe?H="fill:none;stroke:"+_.getStyle(p.outputColorSpace)+";stroke-opacity:"+N.opacity+";stroke-width:"+N.wireframeLinewidth+";stroke-linecap:"+N.wireframeLinecap+";stroke-linejoin:"+N.wireframeLinejoin:H="fill:"+_.getStyle(p.outputColorSpace)+";fill-opacity:"+N.opacity,ct(H,O)}function it(K,rt,W){let w=rt.x-K.x,N=rt.y-K.y;const O=w*w+N*N;if(O===0)return;const H=W/Math.sqrt(O);w*=H,N*=H,rt.x+=w,rt.y+=N,K.x-=w,K.y-=N}function ct(K,rt){m===K?x+=rt:(C(),m=K,x=rt)}function C(){x&&(u=$(d++),u.setAttribute("d",x),u.setAttribute("style",m),X.appendChild(u)),x="",m=""}function $(K){return Y[K]==null&&(Y[K]=document.createElementNS("http://www.w3.org/2000/svg","path"),g==0&&Y[K].setAttribute("shape-rendering","crispEdges")),Y[K]}}}function dg(i){if(!(new URLSearchParams(location.search).get("renderer")==="software"))try{const n=new lg({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});return n.setPixelRatio(Math.min(devicePixelRatio,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=ml,n.outputColorSpace=Le,n.toneMapping=gl,n.toneMappingExposure=1.1,n.setClearColor(0,0),{renderer:n,software:!1}}catch{}const e=new fg;return e.setQuality("low"),e.domElement.id="game",e.domElement.setAttribute("role","img"),e.domElement.setAttribute("aria-label","Underwater driving world"),i.replaceWith(e.domElement),{renderer:e,software:!0}}function eh(i){const t=[];i.traverse(n=>{n.isInstancedMesh&&!n.userData.softwareCopies&&t.push(n)});const e=new oe;for(const n of t){n.visible=!1;const s=[],r=new ie;r.position.copy(n.position),n.parent.add(r);for(let o=0;o<n.count;o++){const a=new Ke(n.geometry,n.material);a.renderOrder=n.renderOrder,n.getMatrixAt(o,e),e.decompose(a.position,a.quaternion,a.scale),r.add(a),s.push(a)}n.userData.softwareCopies=s}}function ai(i,t,e){e.updateMatrix(),i.setMatrixAt(t,e.matrix);const n=i.userData.softwareCopies?.[t];n&&(n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale),n.visible=e.scale.x>0)}const Dr=200411,Oa=2,gn=1800,Te=128,be=[{id:"conch",name:"Conch Street",x:-440,z:420,color:"#eec46f",accent:16032557},{id:"commons",name:"Restaurant Commons",x:-60,z:30,color:"#d6bf78",accent:14387314},{id:"fields",name:"Jellyfish Fields",x:-600,z:-180,color:"#b8c992",accent:15570889},{id:"lagoon",name:"Goo Lagoon",x:400,z:450,color:"#84c9b7",accent:7590342},{id:"wreck",name:"Wreck Cove",x:650,z:-140,color:"#c8b3a0",accent:13667944},{id:"ridge",name:"Sand Mountain",x:140,z:-650,color:"#e9bb8b",accent:15582361},{id:"neptune",name:"Neptune Terrace",x:-360,z:-630,color:"#a9c9cf",accent:8640466}],pg=[{id:"town-loop",width:24,closed:!0,points:[[-440,440],[-60,650],[400,500],[730,310],[700,-140],[450,-460],[140,-720],[-360,-710],[-700,-420],[-720,-100],[-570,210]]},{id:"conch-commons",width:20,points:[[-440,440],[-400,250],[-250,140],[-60,30]]},{id:"fields-commons",width:20,points:[[-720,-100],[-540,-130],[-310,-110],[-60,30]]},{id:"lagoon-commons",width:22,points:[[400,500],[330,300],[140,210],[-60,30]]},{id:"wreck-commons",width:22,points:[[700,-140],[490,-160],[280,-50],[-60,30]]},{id:"ridge-commons",width:20,points:[[140,-720],[210,-450],[80,-200],[-60,30]]},{id:"palace-commons",width:20,points:[[-360,-710],[-300,-460],[-180,-250],[-60,30]]}],Ls=[{id:"pineapple",type:"pineapple",x:-468,z:295,radius:21},{id:"squidward",type:"head",x:-386,z:350,radius:19},{id:"patrick",type:"rock",x:-335,z:390,radius:18},{id:"krusty",type:"krusty",x:-51,z:-85,radius:30},{id:"chum",type:"bucket",x:110,z:110,radius:25},{id:"goober",type:"goober",x:440,z:350,radius:32},{id:"wreck",type:"ship",x:765,z:-265,radius:35},{id:"castle",type:"castle",x:-400,z:-595,radius:45}],Ki=[{id:"conch-hop",x:-480,z:470,width:16,length:25,height:5,heading:0},{id:"fields-leap",x:-590,z:-255,width:20,length:34,height:9,heading:-.5},{id:"lagoon-jump",x:515,z:440,width:20,length:32,height:7,heading:-Math.PI/2},{id:"wreck-launch",x:660,z:-60,width:18,length:30,height:9,heading:Math.PI},{id:"ridge-flight",x:130,z:-595,width:22,length:38,height:13,heading:0},{id:"ridge-return",x:300,z:-630,width:20,length:36,height:11,heading:Math.PI/2},{id:"palace-rise",x:-470,z:-670,width:18,length:28,height:7,heading:Math.PI/2},{id:"commons-stunt",x:-140,z:55,width:16,length:24,height:6,heading:Math.PI/2},{id:"southern-dune",x:20,z:610,width:22,length:34,height:8,heading:-Math.PI/2}],Is=[{id:"coral-grotto",name:"The coral grotto",x:-780,z:-340},{id:"pearl-garden",name:"The pearl garden",x:550,z:640},{id:"sunken-treasure",name:"Sunken treasure",x:800,z:-320},{id:"ridge-lookout",name:"The mountain lookout",x:310,z:-780},{id:"royal-garden",name:"The royal garden",x:-560,z:-780},{id:"kelp-arch",name:"The kelp arch",x:-760,z:290},{id:"sand-circle",name:"The sand circle",x:90,z:760}];function nh(i,t){let e=be[0],n=1/0;for(const s of be){const r=(i-s.x)**2+(t-s.z)**2;r<n&&(e=s,n=r)}return e}function mg(i,t,e){const n=i-e.x,s=t-e.z,r=Math.cos(e.heading),o=Math.sin(e.heading),a=r*n-o*s,l=o*n+r*s;return Math.abs(a)<e.width/2+8&&l<e.length/2+30&&l>-e.length/2-230}function _r(i="conch"){const t=be.find(o=>o.id===i)??be[0],e={conch:[-440,435,0],commons:[-60,90,0],fields:[-600,-130,Math.PI/2],lagoon:[400,510,0],wreck:[700,-100,0],ridge:[140,-740,Math.PI],neptune:[-360,-735,Math.PI]},[n,s,r]=e[t.id];return{x:n,z:s,heading:r}}const $n=(i,t,e)=>i+(t-i)*e,Se=(i,t,e)=>Math.max(t,Math.min(e,i)),Ds=i=>i*i*(3-2*i);function Me(i,t,e=0){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(Dr+e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function vr(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=Ds(i-n),o=Ds(t-s);return $n($n(Me(n,s,e),Me(n+1,s,e),r),$n(Me(n,s+1,e),Me(n+1,s+1,e),r),o)*2-1}function wr(i,t){const e=43*Math.exp(-((i-140)**2/9e4+(t+650)**2/42e3)),n=22*Math.exp(-((i+360)**2+(t+620)**2)/85e3),s=22*Ds(Se((Math.max(Math.abs(i),Math.abs(t))-780)/120,0,1));return 3+vr(i/230,t/230)*6+vr(i/73,t/73,71)*2.5+vr(i/24,t/24,19)*.55+e+n+s}function gg(i,t,e,n,s){const r=s*s,o=r*s;return[0,1].map(a=>.5*(2*t[a]+(-i[a]+e[a])*s+(2*i[a]-5*t[a]+4*e[a]-n[a])*r+(-i[a]+3*t[a]-3*e[a]+n[a])*o))}const Pn=pg.map(i=>{const t=i.points,e=t.length,n=[],s=l=>i.closed?t[(l+e)%e]:t[Se(l,0,e-1)],r=i.closed?e:e-1;for(let l=0;l<r;l++){const h=Math.ceil(Math.hypot(s(l+1)[0]-s(l)[0],s(l+1)[1]-s(l)[1])/9);for(let c=0;c<h;c++)n.push(gg(s(l-1),s(l),s(l+1),s(l+2),c/h))}n.push(i.closed?n[0]:t[e-1]);let o=0;const a=n.map(([l,h],c)=>(c&&(o+=Math.hypot(l-n[c-1][0],h-n[c-1][1])),{x:l,z:h,y:wr(l,h),distance:o}));return{...i,nodes:a,length:o}}),Mr=new Map,Oi=64,ih=[];for(const i of Pn)for(let t=1;t<i.nodes.length;t++){const e=i.nodes[t-1],n=i.nodes[t],s={a:e,b:n,width:i.width,path:i.id};ih.push(s);for(let r=Math.floor((Math.min(e.x,n.x)-42)/Oi);r<=Math.floor((Math.max(e.x,n.x)+42)/Oi);r++)for(let o=Math.floor((Math.min(e.z,n.z)-42)/Oi);o<=Math.floor((Math.max(e.z,n.z)+42)/Oi);o++){const a=`${r},${o}`;Mr.has(a)||Mr.set(a,[]),Mr.get(a).push(s)}}function Ln(i,t,e=!1){let n={distance:1/0,x:i,z:t,y:wr(i,t),width:20,heading:0};const s=e?ih:Mr.get(`${Math.floor(i/Oi)},${Math.floor(t/Oi)}`)??[];for(const r of s){const o=r.b.x-r.a.x,a=r.b.z-r.a.z,l=o*o+a*a,h=Se(((i-r.a.x)*o+(t-r.a.z)*a)/(l||1),0,1),c=r.a.x+o*h,u=r.a.z+a*h,d=Math.hypot(c-i,u-t);d<n.distance&&(n={distance:d,x:c,z:u,y:$n(r.a.y,r.b.y,h),width:r.width,heading:Math.atan2(-o,-a)})}return n}function Bi(i,t){let e=wr(i,t);const n=Ln(i,t);n.distance<n.width/2+20&&(e=$n(n.y,e,Ds(Se((n.distance-n.width/2)/20,0,1))));for(const s of Ls){const r=Math.hypot(i-s.x,t-s.z);r<s.radius+18&&(e=$n(wr(s.x,s.z),e,Ds(Se((r-s.radius)/18,0,1))))}return e}function Zt(i,t){const e=Math.floor(i/4)*4,n=Math.floor(t/4)*4,s=(i-e)/4,r=(t-n)/4,o=Bi(e,n),a=Bi(e+4,n),l=Bi(e,n+4),h=Bi(e+4,n+4);return s+r<=1?o+(a-o)*s+(l-o)*r:h+(l-h)*(1-s)+(a-h)*(1-r)}function Ba(i,t,e){const n=i-e.x,s=t-e.z,r=Math.cos(e.heading??0),o=Math.sin(e.heading??0),a=r*n-o*s,l=o*n+r*s;return Math.abs(a)>e.width/2||Math.abs(l)>e.length/2?null:e.baseY+e.height*(.5-l/e.length)}function sh(i,t){const e=nh(i,t),n=vr(i/38,t/38,128)*.055;return{conch:[.86,.72,.43],commons:[.83,.73,.48],fields:[.64,.73,.5],lagoon:[.75,.79,.55],wreck:[.65,.65,.57],ridge:[.84,.65,.44],neptune:[.69,.76,.69]}[e.id].map(r=>Se(r+n,0,1))}function xg(i,t,e=0){return Math.abs(i)<=gn/2-e&&Math.abs(t)<=gn/2-e}const ka=[{id:"conch-yard",area:"conch",kind:"yard",x:-462,z:360,heading:0,label:"CONCH POST"},{id:"conch-corner",area:"conch",kind:"stop",x:-516,z:426,heading:.55,label:"CONCH STREET"},{id:"commons-market",area:"commons",kind:"market",x:-122,z:-43,heading:.25,label:"REEF MARKET"},{id:"commons-patio",area:"commons",kind:"patio",x:24,z:-25,heading:-.15},{id:"commons-stop",area:"commons",kind:"stop",x:-105,z:129,heading:.5,label:"RESTAURANT ROW"},{id:"fields-rest",area:"fields",kind:"patio",x:-646,z:-180,heading:.2},{id:"lagoon-patio",area:"lagoon",kind:"patio",x:461,z:408,heading:-.3},{id:"lagoon-stall",area:"lagoon",kind:"market",x:345,z:440,heading:-.1,label:"SHELL SNACKS"},{id:"lagoon-dock",area:"lagoon",kind:"dock",x:535,z:545,heading:.55,label:"LAGOON LANDING"},{id:"wreck-workshop",area:"wreck",kind:"workshop",x:641,z:-191,heading:.55,label:"BOAT REPAIR"},{id:"wreck-dock",area:"wreck",kind:"dock",x:757,z:-201,heading:.2,label:"COVE LANDING"},{id:"ridge-rest",area:"ridge",kind:"stop",x:87,z:-692,heading:-.2,label:"MOUNTAIN TRAIL"},{id:"palace-patio",area:"neptune",kind:"patio",x:-464,z:-585,heading:.2},{id:"palace-stall",area:"neptune",kind:"market",x:-305,z:-600,heading:-.2,label:"PEARL EXCHANGE"}];function rh(i){return i.kind==="dock"?17:13}const Jn=[{id:"tide-garden",name:"Tidepool Gardens",kind:"pools",x:655,z:665,radius:38,bends:[[590,495],[610,555],[640,605]],color:7917256},{id:"salvage-yard",name:"Anchor Salvage Yard",kind:"yard",x:805,z:100,radius:35,bends:[],color:14131823},{id:"shell-ruins",name:"Old Shell Sanctuary",kind:"ruins",x:-450,z:-410,radius:40,bends:[[-340,-400],[-450,-460]],color:12169180}],Ms=Jn.map(i=>{const t=Ln(i.x,i.z,!0),e=[[t.x,t.z],...i.bends,[i.x,i.z]],n=[];for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r],l=Math.ceil(Math.hypot(a[0]-o[0],a[1]-o[1])/4);for(let h=0;h<l;h++){const c=h/l,u=o[0]+(a[0]-o[0])*c,d=o[1]+(a[1]-o[1])*c;n.push({x:u,z:d,y:Zt(u,d)})}}n.push({x:i.x,z:i.z,y:Zt(i.x,i.z)});let s=0;return n.forEach((r,o)=>{o&&(s+=Math.hypot(r.x-n[o-1].x,r.z-n[o-1].z)),r.distance=s}),{id:i.id,name:i.name,width:12,nodes:n,points:e,length:s}});function oh(i,t){let e=1/0;for(const n of Ms)for(let s=1;s<n.points.length;s++){const r=n.points[s-1],o=n.points[s],a=o[0]-r[0],l=o[1]-r[1],h=Math.max(0,Math.min(1,((i-r[0])*a+(t-r[1])*l)/(a*a+l*l||1)));e=Math.min(e,Math.hypot(i-r[0]-a*h,t-r[1]-l*h))}return e}function il(i,t,e=1){const n=Math.max(0,Math.min(i.length,t));let s=1,r=i.nodes.length-1;for(;s<r;){const f=s+r>>1;i.nodes[f].distance<n?s=f+1:r=f}const o=i.nodes[s-1],a=i.nodes[s],l=(n-o.distance)/(a.distance-o.distance||1),h=a.x-o.x,c=a.z-o.z,u=Math.hypot(h,c)||1,d=(i.width/2+3)*e;return{x:o.x+h*l+c/u*d,z:o.z+c*l-h/u*d,heading:Math.atan2(h,c)}}const _g=[...Ls,...Jn,...ka.map(i=>({...i,radius:rh(i)-2}))].map(i=>({...i,road:Ln(i.x,i.z,!0)}));function vg(i,t){let e=0;for(const n of _g){const s=n.road.x-n.x,r=n.road.z-n.z,o=Se(((i-n.x)*s+(t-n.z)*r)/(s*s+r*r||1),0,1),a=Math.hypot(i-n.x-s*o,t-n.z-r*o),l=Math.hypot(i-n.x,t-n.z);e=Math.max(e,Se((5-a)/2,0,1),Se((n.radius+7-l)/4,0,1))}return e}const Mg=[.0802,.2423,.2582],vo=i=>i<=.0031308?i*12.92:1.055*i**(1/2.4)-.055;function ah(i,t){const e=sh(i,t),n=Ln(i,t),s=Se((n.width/2+1-n.distance)/2,0,1),r=.98+Me(Math.floor(i*2),Math.floor(t*2),51)*.04,o=Math.max(vg(i,t),Se((7-oh(i,t))/2,0,1)),a=Se(1-Math.abs(n.distance-n.width/2)/3,0,1),l=Number.isFinite(n.distance)?Math.sin(n.distance*1.8)*.018:0;return e.map((h,c)=>{const u=$n(h,[.63,.57,.4][c],o*.65);return $n(u,Mg[c]+l+a*.1,s)*r})}function yg(i,t,e=128,n=65){const s=new Uint8Array(n*n*4);for(let r=0;r<n;r++)for(let o=0;o<n;o++){const a=ah(i+o/(n-1)*e,t+r/(n-1)*e),l=(r*n+o)*4;s[l]=Math.round(Se(vo(a[0]),0,1)*255),s[l+1]=Math.round(Se(vo(a[1]),0,1)*255),s[l+2]=Math.round(Se(vo(a[2]),0,1)*255),s[l+3]=255}return{pixels:s,resolution:n}}const ch=[{id:"conch-water",kind:"tower",x:-550,z:360,radius:13,label:"CONCH WATER"},{id:"fields-observatory",kind:"observatory",x:-615,z:-340,radius:14,label:"JELLY WATCH"},{id:"commons-sign",kind:"billboard",x:30,z:-195,radius:12,label:"FRESH PATTIES"},{id:"lagoon-boardwalk",kind:"boardwalk",x:575,z:620,radius:33,label:"LAGOON WALK"},{id:"wreck-beacon",kind:"beacon",x:550,z:-290,radius:12,label:"COVE BEACON"},{id:"ridge-crane",kind:"crane",x:310,z:-550,radius:16,label:"SAND WORKS"},{id:"royal-fountain",kind:"fountain",x:-520,z:-565,radius:12,label:"PEARL COURT"}];function sl(i,t){return{x:(i+.15+Me(i,t,24)*.7)*18,z:(t+.15+Me(i,t,25)*.7)*18,priority:Me(i,t,26)}}function Sg(i,t){const e=sl(i,t);for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(!n&&!s)continue;const r=sl(i+n,t+s);if(r.priority<e.priority&&Math.hypot(e.x-r.x,e.z-r.z)<12)return null}return e}function rl(i,t,e=32){const n=(e+1)**2,s=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n*2),a=new Uint32Array(e*e*6),l=i*Te,h=t*Te,c=Te/e;for(let g=0;g<=e;g++)for(let x=0;x<=e;x++){const m=(g*(e+1)+x)*3,p=l+x*c,y=h+g*c;o.set([p/28,y/28],m/3*2),s.set([x*c,Bi(p,y),g*c],m),r.set(sh(p,y),m)}let u=0;for(let g=0;g<e;g++)for(let x=0;x<e;x++){const m=g*(e+1)+x,p=m+1,y=m+e+1,M=y+1;a.set([m,y,p,p,y,M],u),u+=6}const d=[];for(let g=Math.floor(l/18);g<=Math.floor((l+Te)/18);g++)for(let x=Math.floor(h/18);x<=Math.floor((h+Te)/18);x++){const m=Sg(g,x);if(!m||m.x<l||m.x>=l+Te||m.z<h||m.z>=h+Te||!xg(m.x,m.z,15))continue;const p=Ln(m.x,m.z);if(Ki.some(A=>mg(m.x,m.z,A))||Is.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<23)||ka.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<rh(A)+6)||ch.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+8)||Jn.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+7)||oh(m.x,m.z)<14||p.distance<p.width/2+9||Ls.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+8))continue;const y=nh(m.x,m.z),M=Me(g,x,39),_=y.id==="wreck"?M<.45?"rock":"coral":y.id==="fields"?M<.55?"coral":"kelp":M<.22?"rock":M<.56?"kelp":"coral";_!=="rock"&&Me(g,x,903)>=.35||d.push({id:`flora:${g}:${x}`,x:m.x,y:Zt(m.x,m.z),z:m.z,type:_,rotation:Me(g,x,40)*Math.PI*2,scale:.7+Me(g,x,41)*1.8,color:Math.floor(Me(g,x,42)*3)})}const f=yg(l,h);return{cx:i,cz:t,segments:e,positions:s,colors:r,uv:o,indices:a,props:d,paint:f.pixels,paintSize:f.resolution}}function ol(i,t=4){const e=[];for(let a=1;a<i.nodes.length;a++){const l=i.nodes[a-1],h=i.nodes[a],c=Math.ceil(Math.hypot(h.x-l.x,h.z-l.z)/t);for(let u=0;u<c;u++){const d=u/c;e.push({x:l.x+(h.x-l.x)*d,z:l.z+(h.z-l.z)*d})}}e.push(i.nodes.at(-1));const n=Math.ceil(i.width/t),s=[],r=[];e.forEach((a,l)=>{const h=e[Math.max(0,l-1)],c=e[Math.min(e.length-1,l+1)],u=c.x-h.x,d=c.z-h.z,f=Math.hypot(u,d)||1;for(let g=0;g<=n;g++){const x=(g/n-.5)*i.width,m=a.x+d/f*x,p=a.z-u/f*x;s.push(m,Zt(m,p)+.25,p)}if(l)for(let g=0;g<n;g++){const x=(l-1)*(n+1)+g,m=x+n+1;r.push(x,m,x+1,x+1,m,m+1)}});const o=new ye;return o.setAttribute("position",new te(s,3)),o.setIndex(r),o.computeVertexNormals(),o.computeBoundingSphere(),o}class al{constructor(t=48){this.size=t,this.cells=new Map}key(t,e){return`${Math.floor(t/this.size)},${Math.floor(e/this.size)}`}add(t){const e=[],n=Math.max(t.w??0,t.d??0,t.radius??0)/2;for(let s=Math.floor((t.x-n)/this.size);s<=Math.floor((t.x+n)/this.size);s++)for(let r=Math.floor((t.z-n)/this.size);r<=Math.floor((t.z+n)/this.size);r++){const o=`${s},${r}`;this.cells.has(o)||this.cells.set(o,new Set),this.cells.get(o).add(t),e.push(o)}t.hashKeys=e}remove(t){for(const e of t.hashKeys??[]){const n=this.cells.get(e);n?.delete(t),n?.size||this.cells.delete(e)}}query(t,e,n=8){const s=new Set;for(let r=Math.floor((t-n)/this.size);r<=Math.floor((t+n)/this.size);r++)for(let o=Math.floor((e-n)/this.size);o<=Math.floor((e+n)/this.size);o++)for(const a of this.cells.get(`${r},${o}`)??[])s.add(a);return s}}function ma(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ye;let h=0;for(let c=0;c<i.length;++c){const u=i[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(u)}for(const c in r){const u=cl(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[c].length;++x)f.push(o[c][x][d]);const g=cl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function cl(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new Ue(o,e,n);let l=0;for(let h=0;h<i.length;++h){const c=i[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<e;g++){const x=c.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}const Mo=new Map,yo=new Map,lh={value:0},Ie=Math.PI*2,Eg=i=>Math.min(1,Math.max(0,i)),bg=(i,t,e=0)=>{let n=Math.imul(i+e,374761393)^Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function wg(i,t,e){t=(t%1+1)%1,e=(e%1+1)%1;const n=Math.sin(Ie*(t*71+e*53))*.015,s=Math.sin(Ie*t*3)*Math.cos(Ie*e*4);let r,o;if(i==="wood"){const a=t*6,l=Math.min(a%1,1-a%1)<.023,h=Math.sin(Ie*(t*58+Math.sin(e*Ie*2)*.22)),c=Math.sin(Ie*(t*7+Math.sin(e*Ie)*.35));r=l?.15:.56+h*.045+c*.03,o=l?.48:.91+h*.045+c*.04+s*.04}else if(i==="stone"){const a=Math.floor(e*6),l=(t*5+a%2*.5)%1,h=Math.min(l,1-l)<.018||e*6%1<.035;r=h?.27:.6+s*.055+n,o=h?.68:.92+s*.08+n}else if(i==="metal"){const a=Math.sin(Ie*t*115)*Math.sin(Ie*e*3),l=Math.max(0,s-.3);r=.5+a*.012+n*.3,o=.95+a*.025-l*.13}else if(i==="bun"){const a=Math.sin(Ie*t*47)*Math.sin(Ie*e*41);r=.5+a*.038+s*.02,o=.96+s*.055+a*.018}else if(i==="rubber"){const a=Math.sin(Ie*(t*18+Math.sin(e*Ie*8)*.18));r=a>.4?.66:.39,o=a>.4?1:.75}else if(i==="cloth"){const a=Math.sin(Ie*t*90)*Math.sin(Ie*e*90);r=.5+a*.015,o=.96+a*.035+s*.02}else{const a=Math.sin(Ie*e*16+Math.sin(Ie*t*4)*1.7);r=.5+a*.12+n*.2,o=.94+a*.04+s*.02}return{height:r,shade:o}}function hh(i,t=512){const e=`${i}:${t}`;if(Mo.has(e))return Mo.get(e);const n=new Uint8Array(t*t*4),s=new Uint8Array(t*t*4),r=new Float32Array(t*t);for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=h*t+c,d=wg(i,c/t,h/t);r[u]=d.height;const f=Math.round(Eg(d.shade+(bg(c,h,57)-.5)*.045)*255);n.set([f,f,f,255],u*4)}const o=(h,c)=>r[(c+t)%t*t+(h+t)%t];for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=(o(c+1,h)-o(c-1,h))*2,d=(o(c,h+1)-o(c,h-1))*2,f=Math.hypot(u,d,1),g=(h*t+c)*4;s.set([Math.round((-u/f*.5+.5)*255),Math.round((-d/f*.5+.5)*255),Math.round((1/f*.5+.5)*255),255],g)}const a=(h,c)=>{const u=new Ca(h,t,t,Ze);return u.colorSpace=c,u.wrapS=u.wrapT=ys,u.magFilter=Je,u.minFilter=Xn,u.generateMipmaps=!0,u.anisotropy=4,u.needsUpdate=!0,u},l={color:a(n,Le),normal:a(s,Rn)};return Mo.set(e,l),l}function uh(i,t=!1){const e=i.onBeforeCompile;return i.onBeforeCompile=(n,s)=>{e.call(i,n,s),n.uniforms.waterTime=lh,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
       #include <opaque_fragment>`)},i.customProgramCacheKey=()=>`water-surface-v2:${t}`,i}function Tg(i){lh.value=i}function Qt(i,t=16777215){const e=`${i}:${t}`;if(yo.has(e))return yo.get(e);const n=hh(i),s={wood:[13,.2],stone:[5,.42],metal:[55,.16],bun:[10,.24],rubber:[4,.38],cloth:[3,.18],sand:[5,.35]}[i]??[10,.2],r=new Lr({color:t,map:n.color,normalMap:n.normal,normalScale:new pt(s[1],s[1]),shininess:s[0],specular:i==="metal"?7642265:2370342,side:ke});return r.userData.surface=i,uh(r),yo.set(e,r),r}const So=new Map;function ln(i,t=!1,e=1){const n=`${i}:${t}:${e}`;return So.has(n)||So.set(n,new(t?Rr:Lr)({color:i,transparent:e<1,opacity:e,side:ke,...t?{}:{shininess:14,specular:3161142}})),So.get(n)}const Ag=new _i(1,1,1),Rg=new _n(1,20,12),Cg=new jn(1,1,1,16);function Kt(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){const h=new Ke(t,typeof e=="number"?ln(e):e);return h.position.set(n,s,r),h.scale.set(o,a,l),h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function Ur(i,t=null){const e=new Set([11434323,8873281,14533514,8149318,10647889,13215092,9465685,6442310,8942677,10845528,10976592]),n=new Set([8890542,5270393,12437176,9214885,15259289,9021870,7639700,5468020,4812400,7970199,15262396]),s=new Set([15246664,16039003]);return i.traverse(r=>{if(!r.isMesh||!r.material.color||r.material.map||r.material.transparent)return;const o=r.material.color.getHex(),a=s.has(o)?"bun":e.has(o)?"wood":n.has(o)?"metal":[2503747,3491417,3427154].includes(o)?"rubber":t;a&&(r.material=Qt(a,o))}),i}function In(i){i.updateMatrixWorld(!0);const t=i.matrixWorld.clone().invert(),e=new Map;i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;const s=n.material.uuid;e.has(s)||e.set(s,{material:n.material,geometries:[]});const r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();r.applyMatrix4(new oe().multiplyMatrices(t,n.matrixWorld)),e.get(s).geometries.push(r)}),i.clear();for(const{material:n,geometries:s}of e.values()){const r=ma(s);s.forEach(o=>o.dispose()),r&&Kt(i,r,n)}return i}const at=(i,t,e,n,s,r,o,a)=>Kt(i,Ag,a,t,e,n,s,r,o),Ut=(i,t,e,n,s,r,o,a)=>Kt(i,Rg,a,t,e,n,s,r,o),Nt=(i,t,e,n,s,r,o)=>Kt(i,Cg,o,t,e,n,s,r,s);function me(i,t,e,n,s,r,o){return Kt(i,new is(s,r,5,20),o,t,e,n)}function Eo(i,t,e,n=1){return Kt(i,new Na(t.map(([s,r])=>new pt(s,r)),24),e,0,0,0,1,1,n)}function ki(i,t,e,n,s=.2){Ut(i,t,e,n,s,s*1.14,s*.4,16777200),Ut(i,t,e,n-s*.35,s*.48,s*.56,s*.2,1849414)}function Pg(){const i=new ie;i.name="Hamburger wagon",Eo(i,[[0,.58],[1.85,.58],[2.22,.74],[2.26,.95],[2.08,1.09],[0,1.09]],15246664,1.14),Eo(i,[[0,1.08],[2.12,1.08],[2.25,1.16],[2.21,1.39],[2.07,1.46],[0,1.46]],7814183,1.14);const t=new es;for(let c=0;c<=64;c++){const u=c/64*Math.PI*2,d=2.24+Math.sin(u*11)*.16,f=Math.cos(u)*d,g=Math.sin(u)*d*1.13;c?t.lineTo(f,g):t.moveTo(f,g)}const e=Kt(i,new zs(t),7780404,0,1.49,0);e.rotation.x=-Math.PI/2;for(let c=0;c<8;c++){const u=c*Math.PI/4;Ut(i,Math.cos(u)*2.15,1.49,Math.sin(u)*2.42,.38,.11,.33,c%2?6858802:10143043)}const n=at(i,0,1.54,0,3.62,.12,4.04,16765256);n.rotation.y=.21,Eo(i,[[2.23,1.65],[2.24,1.85],[2.12,2.18],[1.89,2.49],[1.47,2.66],[1.22,2.63],[1.18,2.4],[1.37,2.12],[1.65,1.85]],16039003,1.13);for(let c=0;c<42;c++){const u=c*2.39996,d=1.42+c%6*.125,f=2.67-(d-1.43)*.72,g=Ut(i,Math.cos(u)*d,f,Math.sin(u)*d*1.13,.095,.032,.045,16770723);g.rotation.y=u+.8}const s=[];for(const c of[-2.23,2.23])for(const u of[-1.37,1.37]){const d=new ie;d.position.set(c,.73,u),i.add(d);const f=Nt(d,0,0,0,.73,.48,2503747);f.rotation.z=Math.PI/2;const g=Nt(d,Math.sign(c)*.27,0,0,.38,.08,15262396);g.rotation.z=Math.PI/2;const x=Nt(d,Math.sign(c)*.32,0,0,.17,.1,13332795);x.rotation.z=Math.PI/2,s.push({mesh:d,front:u<0})}for(const c of[-.65,.65])at(i,c,1.77,.1,.78,.18,.9,9980728),at(i,c,2.11,.49,.78,.72,.18,11228218);const r=new ie;r.position.set(-.64,2.16,.1),i.add(r),at(r,0,.61,0,.89,.89,.39,16045896),at(r,0,.09,0,.86,.19,.41,16777215),at(r,0,-.09,0,.86,.19,.43,9528370),ki(r,-.21,.72,-.23,.18),ki(r,.21,.72,-.23,.18),Ut(r,0,.51,-.33,.09,.12,.15,16108868),at(r,0,.25,-.24,.13,.17,.04,13978937);for(const c of[-.31,.3])Ut(r,c,.25,-.2,.07,.07,.03,14255415),Ut(r,c,.89,-.2,.055,.045,.02,13216813);at(r,-.1,.38,-.22,.09,.09,.05,16777215),at(r,.1,.38,-.22,.09,.09,.05,16777215);const o=new ie;o.position.set(.61,2.09,.13),i.add(o),Ut(o,0,.31,0,.48,.54,.28,15702173),Kt(o,new rn(.32,.86,10),15702173,0,.86,0,1,1,.86),ki(o,-.11,.71,-.27,.11),ki(o,.11,.71,-.27,.11),Ut(o,-.45,.3,0,.29,.13,.17,15702173),Ut(o,.45,.3,0,.29,.13,.17,15702173),at(o,0,-.03,0,.72,.27,.47,9549910);const a=me(i,-.64,2.16,-.56,.31,.05,5719348);a.rotation.x=-.62;for(const c of[-1.45,1.45])Ut(i,c,1.24,-2.45,.28,.22,.12,16773303);Nt(i,1.54,3.02,1.68,.045,2.65,10910265);const l=at(i,1.76,4.06,1.68,.85,.34,.11,8239682);l.rotation.z=-.2;const h=new ie;h.position.set(0,1.02,2.73),i.add(h);for(let c=0;c<3;c++){const u=at(h,0,.3,0,.13,.77,.11,15065004);u.rotation.z=c*Math.PI*2/3}return Ut(h,0,0,.1,.17,.17,.14,13335616),i.userData={wheels:s,propeller:h},Ur(i)}function we(i,t,e,n,s,r=20,o="#bf4e43"){if(typeof document>"u")return;const a=document.createElement("canvas");a.width=1024,a.height=256;const l=a.getContext("2d");l.fillStyle=o,l.fillRect(0,0,1024,256),l.strokeStyle="#fff1bd",l.lineWidth=12,l.strokeRect(16,16,992,224),l.strokeStyle="#ffffff35",l.lineWidth=2,l.strokeRect(29,29,966,198),l.fillStyle="#fff3cd",l.textAlign="center",l.textBaseline="middle",l.shadowColor="#182d36",l.shadowBlur=3,l.shadowOffsetY=3,l.font="bold 84px sans-serif",l.fillText(t,512,135,932);const h=new Ul(a);h.colorSpace=Le,h.anisotropy=4;const c=new Lr({map:h,side:ke,shininess:10});Kt(i,new ns(r,r/4),c,e,n,s)}function xs(i,t,e,n,s=2.2){me(i,t,e,n,s,.3,Qt("metal",15259289));const r=Nt(i,t,e,n-.08,s-.25,.13,7127490);r.rotation.x=Math.PI/2;const o=Nt(i,t,e,n+.01,s*.56,.14,2583164);o.rotation.x=Math.PI/2,Ut(i,t-s*.25,e+s*.27,n+.1,s*.14,s*.26,.035,13300187)}function fh(i,t,e,n,s,r,o){Nt(i,t,e,n,s,r,o),me(i,t,e+r/2,n,s+.08,.17,o).rotation.x=Math.PI/2}function Lg(i){const t=new ie;if(t.name=i,i==="pineapple"){Ut(t,0,12,0,10.8,14,10.3,15309364);for(let e=0;e<9;e++)for(let n=0;n<12;n++){const s=3+e*2.45,r=n*Math.PI/6+e%2*Math.PI/12,o=10.5*Math.sqrt(Math.max(.05,1-((s-12)/14)**2)),a=at(t,Math.sin(r)*o,s,Math.cos(r)*o,1.8,.16,.21,16169547);a.rotation.y=r,a.rotation.z=(n%2?1:-1)*.6}for(let e=0;e<11;e++){const n=e*Math.PI*2/11,s=new es;s.moveTo(-1.2,0),s.quadraticCurveTo(-2.2,5,0,13),s.quadraticCurveTo(2.6,5,1.2,0),s.closePath();const r=Kt(t,new zs(s),e%2?4560204:7648843,Math.sin(n)*2,24,Math.cos(n)*2);r.rotation.y=n,r.rotation.x=.3+e%3*.18}Ut(t,0,3,10.1,2.6,3.4,.5,6066846),me(t,0,3,10.7,2.1,.28,13095594),at(t,0,3,10.8,.22,4,.12,11258311),at(t,0,3,10.8,4,.22,.12,11258311),xs(t,-5.5,11,8.8,2),xs(t,5,18,8.1,1.8),fh(t,9,17,1,.8,6,9021870);for(let e=11;e<25;e+=3)at(t,0,.15,e,7,.3,2.6,14930854)}else if(i==="head"){Ut(t,0,10,0,8.9,13,7.5,6917275),at(t,0,8,5.9,9,15,2.4,6983070);for(const e of[-3.1,3.1])Ut(t,e,15,6.7,2.5,1.65,.9,4550272),at(t,e,17.1,7.1,5.4,1.2,2.5,7708331),xs(t,e,15,7.6,1.5);at(t,0,11.4,8.2,2.3,8.8,4.6,8298925),Ut(t,0,3,7.3,2.2,3.2,.5,3561067),at(t,0,21,0,12.4,1.4,12,9416371)}else if(i==="rock")Kt(t,new _n(1,18,8,0,Math.PI*2,0,Math.PI/2),9861753,0,0,0,13,8,12),Nt(t,0,.2,0,14,.4,13614993),at(t,0,.5,14,2.5,.5,7,11112829),Ut(t,-6,.2,14,1.4,.3,1,14993541);else if(i==="krusty"){at(t,0,5,0,32,10,23,11434323);const e=Kt(t,new jn(1,1,1,18,1,!1,0,Math.PI),8873281,0,10,0,15,35,15);e.rotation.z=Math.PI/2;for(let n=-15;n<=15;n+=5)at(t,n,5,12,.8,10,.9,14533514),at(t,n,5,-12,.8,10,.9,14533514);for(const n of[-10,10])at(t,n,5.6,12.2,7.9,6.7,.2,9225915),at(t,n,5.6,12.5,.24,6.7,.22,14997158),at(t,n,5.6,12.5,7.9,.24,.22,14997158);at(t,0,3.5,12.3,4.2,7,.4,4955034),we(t,"KRUSTY KRAB",0,12.5,14,22,"#8b523d"),Nt(t,-25,12,10,.6,24,14469771),Ut(t,-25,24,10,6.7,4,1.4,14922673),we(t,"KRAB",-25,24,11.5,9,"#b76c76");for(let n=0;n<5;n++){const s=at(t,-12+n*6,18.5,6,2.6,2.4,.12,[15978586,13661023,6463166,7908492,15324585][n]);s.rotation.z=.15}}else if(i==="bucket"){Kt(t,new jn(12,10,20,20),8890542,0,10,0),Nt(t,0,.6,0,10.6,1.2,5270393);for(const n of[1,19.3])me(t,0,n,0,n<2?10.7:12.3,.6,12437176).rotation.x=Math.PI/2;const e=Kt(t,new is(14,.65,6,24,Math.PI),9214885,0,19,0);e.rotation.z=0,at(t,0,4,10.8,5.7,8,.4,3362406),we(t,"CHUM BUCKET",0,14,11.8,19,"#9c463c")}else if(i==="goober"){Ut(t,0,7,0,24,8,18,9856135),at(t,0,6,13,24,12,1,14919080);for(const n of[-8,0,8])Ut(t,n,5,14,3.2,4.7,.5,7258306);we(t,"GOOFY GOOBER",0,13,17,27,"#7e4276");const e=Kt(t,new rn(5,15,12),13803110,0,22,-2);e.rotation.z=Math.PI,Ut(t,0,31,-2,7,7,6,16105675),Ut(t,-4,29,-2,4,4,4,16049340),Ut(t,4,29,-2,4,4,4,10253400),Ut(t,0,37,-2,1.7,1.8,1.7,13849443)}else if(i==="ship"){const e=new ie;e.rotation.z=-.12,t.add(e),Ut(e,0,6,0,18,10,31,8149318),at(e,0,12,0,29,1.2,51,10647889);for(let n=-26;n<28;n+=4)at(e,0,13,n,29,.25,.4,13215092);at(e,0,21,-9,22,16,23,9465685),at(e,0,30,-9,27,1.7,28,6442310);for(const n of[-8,0,8])xs(e,n,23,3,2.7);Nt(e,0,32,-20,1.2,20,8942677),at(e,0,39,-20,18,1,1,8942677);for(const n of[-17,17])for(const s of[-17,0,17]){const r=me(e,n,8,s,3.2,.9,3427154);r.rotation.y=Math.PI/2}we(e,"THUG TUG",0,18,6,20,"#654437")}else if(i==="castle"){at(t,0,8,0,48,16,24,8502709),at(t,0,18,0,34,6,22,13099211);for(const e of[-26,26])for(const n of[-12,12]){Nt(t,e,16,n,7,32,10014660),Nt(t,e,32,n,8.2,2,14017737),Kt(t,new rn(8.5,14,8),7708604,e,40,n),Ut(t,e,48,n,1.4,1.4,1.4,16177539);for(let s=0;s<6;s++){const r=s*Math.PI/3;at(t,e+Math.cos(r)*7.2,34,n+Math.sin(r)*7.2,2.4,4,2.4,13099211)}}Ut(t,0,6,13,5,7,.5,4033428),we(t,"NEPTUNE",0,24,13,25,"#407e8f"),Nt(t,0,36,0,.45,19,14927215);for(const e of[-4,0,4])Nt(t,e,44,0,.45,7,15980416),Kt(t,new rn(.8,3,6),15980416,e,49,0);at(t,0,40,0,9,.8,.8,15980416);for(let e=0;e<4;e++)at(t,0,.6+e*.6,17-e*1.5,19,1.2,3,12438446)}return Ur(t,["head","rock","castle"].includes(i)?"stone":null),In(t)}function Ig(i=0){const t=new ie,n=[12289453,8435133,14396035,9745816][i%4];Nt(t,0,5,0,5,10,n),Ut(t,0,10,0,5.3,1.8,5.3,13290152);for(const s of[1,9])me(t,0,s,0,5.1,.2,12174243).rotation.x=Math.PI/2;return xs(t,-2,6,4.6,1.25),Ut(t,1.8,2,4.8,1.3,2.2,.25,4286583),fh(t,3,13,-1,.5,6,7639700),at(t,1.8,.18,6,3.3,.35,2.2,Qt("stone",12765605)),Ut(t,2.35,2,5.1,.1,.1,.08,Qt("metal",14469005)),we(t,String(101+i),-2.4,3.5,4.9,1.6,"#526d72"),In(Ur(t,"metal"))}function bo(i=15904375){const t=new ie;Ut(t,0,1.75,0,.6,.95,.42,i),at(t,0,.65,0,.8,.6,.5,7441290),ki(t,-.18,2.05,-.39,.18),ki(t,.18,2.05,-.39,.18),Ut(t,0,1.62,-.47,.2,.11,.13,10775917);const e=[],n=[];for(const o of[-.59,.59]){const a=new ie;a.position.set(o,1.65,0),t.add(a),Ut(a,0,-.3,0,.2,.44,.14,i),Ut(a,0,-.65,-.07,.18,.17,.13,i),e.push(a)}for(const o of[-.24,.24]){const a=new ie;a.position.set(o,.65,0),t.add(a),Nt(a,0,-.3,0,.13,.6,i),Ut(a,0,-.52,-.1,.22,.15,.36,4476517),n.push(a)}const s=new es;s.moveTo(0,0),s.lineTo(.6,.35),s.lineTo(0,.65),s.closePath();const r=Kt(t,new zs(s),i,0,1.25,.35);r.rotation.y=Math.PI/2;for(const o of[-.18,.18])at(t,o,1.12,-.42,.24,.1,.035,15656122);return at(t,0,.88,-.28,.78,.08,.05,5073259),t.userData={arms:e,legs:n},t}function Dg(i=10980025){const t=new ie;Ut(t,0,1,0,1.7,.8,2.9,i),at(t,0,1.4,0,2.5,.2,3.5,14410168),at(t,0,2.1,.3,1.7,1.1,1.5,i),at(t,0,2,-1,2.2,1.2,.13,9688274);for(const e of[-1.5,1.5])for(const n of[-1.4,1.4]){const s=Nt(t,e,.55,n,.55,.33,3491417);s.rotation.z=Math.PI/2}return t}function Ug(i=15507399){const t=new ie;Kt(t,new _n(1,10,5,0,Math.PI*2,0,Math.PI/2),ln(i,!1,.8),0,0,0,2,1.7,2),me(t,0,0,0,1.9,.09,i).rotation.x=Math.PI/2;for(let e=0;e<5;e++){const n=e*Math.PI*2/5,s=Nt(t,Math.cos(n)*1.2,-1.4,Math.sin(n)*1.2,.1,2.8,i);s.rotation.z=Math.sin(n)*.18}return t}const Ng=new is(.96,.07,5,20);function Fg(){const i=new ie;Nt(i,0,1,0,.95,2,10845528);for(const t of[.3,1.65])Kt(i,Ng,5468020,0,t,0).rotation.x=Math.PI/2;return Ur(i)}function zg(){const i=new es;return i.moveTo(-.85,0),i.lineTo(-1,1.1),i.lineTo(-.48,.72),i.lineTo(0,1.43),i.lineTo(.48,.72),i.lineTo(1,1.1),i.lineTo(.85,0),i.closePath(),new Ua(i,{depth:.24,bevelEnabled:!1})}function Og(){const i=[];for(const[s,r,o,a,l]of[[0,2.5,0,5,0],[-1,3,0,3,.7],[1.1,3.8,0,3,-.65],[0,4.1,.8,3,.2]]){const h=new jn(.38,.55,a,6);h.rotateZ(l),h.translate(s,r,o),i.push(h);const c=new _n(.42,6,4);c.translate(s-Math.sin(l)*a/2,r+Math.cos(l)*a/2,o),i.push(c)}const t=ma(i);i.forEach(s=>s.dispose());const e=[];for(let s=0;s<3;s++){const r=[];for(let a=0;a<5;a++)r.push(new D(Math.sin(a*.8+s)*.6+s*.35,a*2,Math.cos(a+s)*.3));const o=new Pr(new Da(r),10,.15,3,!1);e.push(o);for(let a=1;a<5;a++){const l=new _n(1,6,4);l.scale(.38,1.35,.13),l.rotateZ((a%2?1:-1)*.55),l.translate(r[a].x+(a%2?.45:-.45),r[a].y,r[a].z),e.push(l)}}const n=ma(e);return e.forEach(s=>s.dispose()),{coral:t,kelp:n,rock:new Ps(2.4,0)}}function ll(i=12754123,t=15,e=13){const n=new ie,s=Kt(n,new is(t/2,2.2,6,12,Math.PI),i,0,e-t/2,0);s.scale.y=e/(t/2);for(const r of[-t/2,t/2])Ut(n,r,2,0,3.7,3.5,3.7,i);return n}let Hn=null;function Bg(){if(Hn||typeof document>"u")return Hn;const i=512,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i);for(let s=0;s<i;s++)for(let r=0;r<i;r++){const o=Math.sin(s/i*Math.PI*32+Math.sin(r/i*Math.PI*4)*1.7),a=Me(r,s,43),l=Math.round(220+o*10+(a-.5)*26),h=(s*i+r)*4;n.data.set([l,l,l,255],h)}return e.putImageData(n,0,0),Hn=new Ul(t),Hn.colorSpace=Le,Hn.wrapS=Hn.wrapT=ys,Hn.anisotropy=4,Hn}function kg(i){const t=hh("sand"),e=new Lr({map:i,normalMap:t.normal,normalScale:new pt(.4,.4),shininess:5,specular:1582371});return e.onBeforeCompile=n=>{n.uniforms.seafloorDetail={value:t.color},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 seafloorUV;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
seafloorUV = (modelMatrix * vec4(position, 1.0)).xz / 12.0;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D seafloorDetail;
varying vec2 seafloorUV;`),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb *= mix(vec3(0.82), vec3(1.16), texture2D(seafloorDetail, seafloorUV).rgb);`)},uh(e,!0)}const $e=Qt("wood",12687971),nn=Qt("metal",5274749);Qt("stone",12110001);const Wi=Qt("cloth",13876613);function Fi(i,t,e,n,s=1.7){at(i,t,e+s/2,n,s,s,s,$e);for(const o of[.2,s-.2])at(i,t,e+o,n+s/2+.02,s,.15,.12,nn);const r=at(i,t,e+s/2,n+s/2+.08,.13,s*1.22,.09,$e);r.rotation.z=.7}function Hg(i,t,e){at(i,t,1.8,e,5,.26,3,$e);for(const n of[-1.8,1.8])at(i,t+n,.9,e,.2,1.8,2.4,nn),at(i,t+n,.6,e,.3,.22,4.6,$e);for(const n of[-1.8,1.8])at(i,t,1.05,e+n,5.2,.22,.8,$e);for(const n of[-.65,.65])Nt(i,t+n,2.07,e,.19,.32,Qt("metal",13295037))}function Vg(i,t,e,n){Nt(i,t,3.5,e,.09,7,nn);const s=Kt(i,new rn(4.6,1.5,12,1,!0),Qt("cloth",n),t,6.65,e);s.rotation.y=Math.PI/12,me(i,t,5.9,e,4.6,.08,Wi).rotation.x=Math.PI/2;for(const r of[0,Math.PI/2,Math.PI,Math.PI*1.5]){const o=at(i,t+Math.cos(r)*2.2,6.28,e+Math.sin(r)*2.2,4.4,.045,.055,Wi);o.rotation.y=-r,o.rotation.z=.14}}function hl(i,t,e,n=2){const s=new Da([new D(t[0],n,t[1]),new D((t[0]+e[0])/2,n-.45,(t[1]+e[1])/2),new D(e[0],n,e[1])]);Kt(i,new Pr(s,10,.065,5,!1),Wi)}const Gg={market:[16,12,8],patio:[18,13,8],yard:[12,9,6],dock:[13,24,5],workshop:[16,14,7],stop:[13,9,8]};function Wg(i,t=""){const e=new ie;if(e.name=i,i==="market"){for(const s of[-5.5,5.5])for(const r of[-3.5,3.5])Nt(e,s,3.4,r,.16,6.8,$e);const n=Kt(e,new jn(1,1,1,14,1,!0,0,Math.PI),Qt("cloth",12881265),0,6.7,0,6.8,8.4,2.1);n.rotation.z=Math.PI/2,at(e,0,2.1,0,11.7,.28,3.3,$e),at(e,0,1,1.4,11.4,2,.15,$e);for(const s of[-4,0,4]){Fi(e,s,0,-3.4,1.5);for(let r=0;r<5;r++)Ut(e,s+(r%3-1)*.55,2.55,.2+r%2*.5,.36,.3,.36,[15448933,13601142,9680796][Math.abs(s)%3])}we(e,t||"REEF MARKET",0,5.8,3.55,10,"#386e73")}else if(i==="patio"){for(const n of[-4.5,4.5])Hg(e,n,0),Vg(e,n,0,n<0?12819879:9350311);for(const n of[-8,8])Nt(e,n,.9,4,.8,1.8,Qt("stone",13942940)),Ut(e,n,1.8,4,.8,.2,.8,9148809)}else if(i==="yard"){for(const n of[-4,4])Nt(e,n,2.6,-2,.1,5.2,nn);hl(e,[-4,-2],[4,-2],4.6);for(let n=0;n<4;n++){const s=at(e,-2.7+n*1.8,3.65,-2,1.15,1.55,.04,Qt("cloth",[11964078,14272661,8302515,13342077][n]));s.rotation.z=(n%2?1:-1)*.06}Nt(e,-3.8,1.35,2,.06,2.7,nn),at(e,-3.8,2.7,2,1,.75,1.6,nn),at(e,-3.8,2.7,2.82,.8,.55,.06,Qt("metal",14336915)),Fi(e,3.7,0,2,1.2),we(e,t||"CONCH POST",0,1.4,3.5,3.4,"#587b73")}else if(i==="dock"){for(let s=0;s<17;s++)at(e,0,1.1,-10+s*1.25,9,.35,1.15,$e);for(const s of[-4.8,4.8])for(const r of[-10,-4,2,10])Nt(e,s,1.4,r,.33,3.8,$e),me(e,s,2.7,r,.35,.1,Wi).rotation.x=Math.PI/2;for(const s of[-4.8,4.8])for(let r=0;r<3;r++)hl(e,[s,-10+r*6],[s,-4+r*6],3);Fi(e,-2,1.3,-7),Fi(e,2,1.3,-8,1.3);const n=new ie;n.position.set(2.5,1.45,4),e.add(n);for(let s=0;s<5;s++)me(n,0,s*.1,0,.7+s*.04,.08,Wi).rotation.x=Math.PI/2;we(e,t||"COVE LANDING",0,3.9,-10,7,"#527d76")}else if(i==="workshop"){at(e,0,2.2,-2,10,4.4,5.5,Qt("wood",9142378)),at(e,0,4.65,-2,11,.45,6.8,Qt("metal",7182739)),at(e,0,1.8,.8,3.5,3.6,.18,Qt("metal",3428189));for(const n of[-3.7,3.7])at(e,n,2.6,.85,2.2,1.4,.15,7581360);Fi(e,-6,0,2.5),Fi(e,5,0,2.2,1.3),at(e,0,1.5,4.2,5.5,.2,1.7,$e);for(const n of[-2,2])at(e,n,.75,4.2,.16,1.5,1.4,nn);for(const n of[-1.4,0,1.4])me(e,n,1.8,4.2,.32,.1,nn).rotation.x=Math.PI/2;we(e,t||"BOAT REPAIR",0,4.7,1.6,8,"#816550")}else if(i==="stop"){for(const n of[-4.6,4.6])Nt(e,n,2.5,-2,.14,5,nn);at(e,0,5.1,-1,10.5,.3,5,Qt("metal",7642769)),at(e,0,1.2,-1,7.5,.24,1.3,$e);for(const n of[-2.7,2.7])at(e,n,.6,-1,.15,1.2,1.2,nn);at(e,0,2,-1.7,7.5,1.1,.16,$e),Nt(e,5,3,1,.1,6,nn),we(e,t||"TOWN LOOP",3.8,5.4,1.2,4,"#53777a"),Nt(e,-5,.8,2,.65,1.6,nn),me(e,-5,1.55,2,.67,.07,Wi).rotation.x=Math.PI/2}return In(e)}const Tn=Qt("wood",10717797),De=Qt("metal",6065547),ds=Qt("stone",11848633),ul=Qt("cloth",14076058);function Xg(i){const t=new ie,e=[],n=(s,r,o,a,l,h=0)=>e.push({x:s,z:r,w:o,d:a,height:l,y:h});switch(i.kind){case"tower":for(const s of[-4,4])for(const r of[-4,4]){Nt(t,s,8,r,.35,16,De),n(s,r,.7,.7,16);const o=at(t,s,8,0,.2,10,.2,De);o.rotation.x=s<0?.8:-.8}Nt(t,0,18,0,6,7,De),n(0,0,12,12,7,14.5),Kt(t,new rn(6.6,3,20),Tn,0,23,0);for(let s=1;s<16;s+=1)at(t,5,s,0,.8,.13,.13,De);for(const s of[4.6,5.4])Nt(t,s,8,0,.07,16,De);we(t,i.label,0,18.5,6.05,10,"#476f79");break;case"observatory":at(t,0,1,0,16,2,12,Tn),n(0,0,16,12,2);for(const s of[-6,6])for(const r of[-4,4])Nt(t,s,5,r,.2,8,Tn);Kt(t,new rn(11,4,4),Qt("cloth",9999542),0,10,0).rotation.y=Math.PI/4;for(const s of[-4,4]){Nt(t,s,3.6,0,.12,3.2,De);const r=Nt(t,s,5.4,-.8,.5,2.7,De);r.rotation.x=Math.PI/2-.35,Ut(t,s,5.85,-1.8,.53,.53,.12,9559508)}we(t,i.label,0,7,4.3,11,"#66557f");break;case"billboard":for(const s of[-5,5])Nt(t,s,5,0,.28,10,Tn),n(s,0,.6,.6,10);at(t,0,10,0,16,6,.6,Tn),n(0,0,16,.6,6,7),we(t,i.label,0,10,.34,15,"#ad6b52");for(const s of[-6,0,6])at(t,s,13.7,.7,.18,1,1.2,De),Ut(t,s,13.3,1.2,.4,.2,.4,16113581);break;case"boardwalk":for(let s=0;s<25;s++)at(t,0,.6,-18+s*1.5,10,1.2,1.38,Tn);for(const s of[-5.5,5.5])for(let r=-18;r<=18;r+=6)Nt(t,s,1.6,r,.24,3.2,Tn),n(s,r,.5,.5,3.2),me(t,s,2.6,r,.28,.08,ul).rotation.x=Math.PI/2;we(t,i.label,0,5,-17,9,"#507f79");break;case"beacon":Nt(t,0,10,0,5,20,ds),n(0,0,10,10,20);for(const s of[5,12,19])me(t,0,s,0,5.08,.22,De).rotation.x=Math.PI/2;Nt(t,0,21,0,6,.5,De);for(let s=0;s<8;s++){const r=s*Math.PI/4;Nt(t,Math.cos(r)*4.8,23,Math.sin(r)*4.8,.14,4,De)}Ut(t,0,23,0,2,2,2,16771234),Kt(t,new rn(6.5,3,16),Tn,0,26,0),at(t,0,2,5,2,4,.2,De),we(t,i.label,0,8,5.1,7,"#547577");break;case"crane":{at(t,0,1.2,0,10,2.4,10,ds),n(0,0,10,10,2.4);for(const s of[-3,3])at(t,s,8,0,.45,16,.45,De),n(s,0,.5,.5,16);for(let s=3;s<16;s+=3){at(t,0,s,0,6,.24,.24,De);const r=at(t,0,s+1.5,0,6.6,.18,.18,De);r.rotation.z=.46}at(t,6,16.5,0,21,.6,1.5,De),n(6,0,21,1.5,.6,16.2),Nt(t,14,10,0,.09,13,ul),me(t,14,3.5,0,.65,.16,De);for(const s of[-7,7])at(t,s,.7,6,3,1.4,3,Tn);we(t,i.label,0,6,.5,6,"#8c7057");break}case"fountain":Nt(t,0,.5,0,8,1,ds),n(0,0,16,16,1),me(t,0,1.2,0,7.2,.6,ds).rotation.x=Math.PI/2,Nt(t,0,1.08,0,6.6,.1,6928571),Nt(t,0,3,0,.7,4,ds),n(0,0,1.4,1.4,5),Kt(t,new _n(2.8,16,8,0,Math.PI*2,0,Math.PI/2),Qt("stone",14864048),0,5,0),Ut(t,0,6,0,1.2,1.2,1.2,15523743);for(let s=0;s<12;s++){const r=s*Math.PI/6;Ut(t,Math.cos(r)*7.5,1.4,Math.sin(r)*7.5,.35,.35,.35,14276529)}break}return In(t),t.name=i.id,{group:t,solids:e}}const qg=[{id:"neighborhood",name:"Neighborhood cruise",path:"conch-commons",color:15976552},{id:"coast",name:"Lagoon promenade",path:"lagoon-commons",color:8182733},{id:"mountain",name:"Mountain descent",path:"ridge-commons",color:15313593}],xi=qg.map(i=>{const t=Pn.find(n=>n.id===i.path),e=[.08,.24,.4,.56,.72,.9].map(n=>{const s=t.nodes.findIndex(a=>a.distance>=t.length*n),r=t.nodes[s],o=t.nodes[Math.min(s+1,t.nodes.length-1)];return{x:r.x,z:r.z,y:Zt(r.x,r.z),width:t.width,heading:Math.atan2(o.x-r.x,o.z-r.z)}});return{...i,gates:e}});function Yg(i,t,e,n){const s=t.x-i.x,r=t.z-i.z,o=s*s+r*r,a=o?Math.max(0,Math.min(1,((e.x-i.x)*s+(e.z-i.z)*r)/o)):0,l=i.y+(t.y-i.y)*a;return Math.hypot(i.x+s*a-e.x,i.z+r*a-e.z)<n&&Math.abs(l-e.y)<5}class $g{constructor(t){this.save=t,t.trails??={},this.previous=null}resetPosition(){this.previous=null}update(t,e){const n=this.previous??t;if(this.previous={x:t.x,y:t.y,z:t.z},!(Math.hypot(t.x-n.x,t.z-n.z)>20))for(const s of xi){const r=this.save.trails[s.id]??0;if(!(r>=s.gates.length)&&Yg(n,t,s.gates[r],s.gates[r].width/2+2)){this.save.trails[s.id]=r+1;const o=r+1===s.gates.length;o&&!this.save.activities.includes(`trail:${s.id}`)&&this.save.activities.push(`trail:${s.id}`),e(s,r+1,o)}}}}const Vn=Qt("stone",12044217),Gn=Qt("wood",9925718),ps=Qt("metal",9214866),fr=Qt("metal",11566172);function Jg(i){const t=new ie,e=[],n=(s,r,o)=>{const a=new ie,l=Zt(i.x+s,i.z+r);a.position.set(s,l,r),t.add(a),o(a,(h,c,u,d,f,g=0)=>e.push({x:i.x+s+h,z:i.z+r+c,w:u,d,height:f,y:l+g}))};if(i.kind==="pools"){for(const[s,r,o]of[[-17,-10,9],[18,10,10],[-15,20,7]])n(s,r,(a,l)=>{Nt(a,0,.18,0,o,.36,6732982);for(let h=0;h<10;h++){const c=h*Math.PI/5,u=Math.cos(c)*o,d=Math.sin(c)*o;Ut(a,u,.55,d,1.4,.8,1.4,Vn),l(u,d,2.5,2.5,1.4)}for(let h=0;h<3;h++){const c=-2+h*2;Ut(a,c,.65,1,.7,.3,.7,15585185),me(a,c,.8,1,.38,.1,14067125).rotation.x=Math.PI/2}});for(const s of[-29,29])n(s,-23,(r,o)=>{Nt(r,0,3,0,.16,6,ps),o(0,0,.4,.4,6),Ut(r,0,6.2,0,.7,.9,.7,16769445),at(r,0,1.1,2.5,5,.3,1.5,Gn);for(const a of[-1.8,1.8])at(r,a,.55,2.5,.2,1.1,1.3,ps)})}else if(i.kind==="yard"){n(-17,20,(s,r)=>{const o=Gn.clone();o.side=ke,Kt(s,new _n(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),o,0,2,0,6,3,10);const a=me(s,0,2,0,1,.06,Gn);a.rotation.x=Math.PI/2,a.scale.set(6,10,6);for(const l of[-6,-3,0,3,6]){const h=10*Math.sqrt(1-(l/11)**2);at(s,0,1.45,l,h,.18,.45,Gn);for(const c of[-h/2,h/2])at(s,c,.8,l,.17,2.1,.2,Gn).rotation.z=-c*.07}for(const l of[-4,4])at(s,0,2.15,l,9,.2,1.6,Qt("wood",11903097));for(const l of[-4,4])Nt(s,l,.5,0,.38,1,ps);r(0,0,12,20,3)});for(const s of[-26,26])n(12,s,(r,o)=>{for(let a=0;a<3;a++){const l=-7+a*7;at(r,l,1.7,0,5,3.4,5,Gn),o(l,0,5,5,3.4);for(const h of[.4,3])at(r,l,h,2.55,5,.16,.1,fr)}});for(const[s,r]of[[-6,-23],[9,0],[23,22]])n(s,r,(o,a)=>{Nt(o,0,2,0,.3,4,fr),at(o,0,1,0,5.5,.35,.45,fr),me(o,0,4.2,0,.75,.18,ps);for(const l of[-2.5,2.5]){const h=at(o,l,.8,0,1.4,1.8,.3,fr);h.rotation.z=l<0?-.6:.6}a(0,0,6,2,5)});n(24,-4,(s,r)=>{for(let a=0;a<4;a++)at(s,0,.5+a*.6,0,4,.45,14,Gn);r(0,0,4,14,2.8);const o=Nt(s,-5,2.2,0,1.4,3,ps);o.rotation.z=Math.PI/2,r(-5,0,3,3,3.6)})}else{for(let s=0;s<16;s++){const r=s*Math.PI/8;n(Math.cos(r)*8,Math.sin(r)*8,o=>{const a=at(o,0,.1,0,2.6,.2,2.6,Qt("stone",s%2?12106933:13811605));a.rotation.y=-r})}for(const s of[-22,22])for(const r of[-24,0,24])n(s,r,(o,a)=>{const l=r===0?8:12;Nt(o,0,.5,0,3.2,1,Vn),Nt(o,0,l/2,0,1.4,l,Vn),a(0,0,4,4,l);for(const h of[1.5,l-.5])me(o,0,h,0,1.5,.18,Vn).rotation.x=Math.PI/2;for(let h=0;h<8;h++){const c=h*Math.PI/4;Nt(o,Math.cos(c)*1.38,l/2,Math.sin(c)*1.38,.07,l-2,12900034)}r!==0&&at(o,0,l+.5,0,6,1,6,Vn)});n(0,26,(s,r)=>{for(const o of[-11,11])Nt(s,o,7,0,1.5,14,Vn),r(o,0,3,3,14);at(s,0,14.5,0,26,1.3,4,Vn),r(0,0,26,4,1.3,13.8),Ut(s,0,16,0,2.8,1.5,.7,14731417)});for(const s of[-31,31])n(s,11,(r,o)=>{const a=at(r,0,1.3,0,3,2.6,10,Vn);a.rotation.y=s*.03,o(0,0,5,11,3)})}return n(0,-i.radius+5,(s,r)=>{for(const o of[-16,16])Nt(s,o,2.8,0,.2,5.6,Gn),r(o,0,.5,.5,6);we(s,i.name.toUpperCase(),0,5.4,0,29,"#577d7b")}),In(t),t.position.set(i.x,0,i.z),t.name=i.id,{group:t,solids:e}}const Ha=Ki.map(i=>{const t=i.length/2+20;return{id:i.id,heading:i.heading,radius:6.5,x:i.x-Math.sin(i.heading)*t,z:i.z-Math.cos(i.heading)*t,y:Zt(i.x,i.z)+i.height+5.2}});function Zg(i,t,e){const n=Math.sin(e.heading),s=Math.cos(e.heading),r=f=>(f.x-e.x)*n+(f.z-e.z)*s,o=r(i),a=r(t);if(o<=0||a>0||o===a)return!1;const l=o/(o-a),h=i.x+(t.x-i.x)*l,c=i.z+(t.z-i.z)*l,u=i.y+(t.y-i.y)*l+1.6,d=(h-e.x)*s-(c-e.z)*n;return Math.hypot(d,u-e.y)<=e.radius-1}class Kg{constructor(t){this.save=t,t.bestStunts??={},this.reset()}reset(){this.flight=null,this.previous=null}step(t,e,n){const s=this.previous??t;if(this.previous={x:t.x,y:t.y,z:t.z},Math.hypot(t.x-s.x,t.z-s.z)>20){this.flight=null;return}if(e.launched){const o=Ki.find(a=>{const l=t.x-a.x,h=t.z-a.z,c=Math.cos(a.heading),u=Math.sin(a.heading),d=c*l-u*h,f=u*l+c*h;return Math.abs(d)<a.width/2+2&&f<-a.length/2+3&&f>-a.length/2-9});this.flight=o?{id:o.id,x:t.x,z:t.z,passed:!1}:null}if(!this.flight)return;if(e.impacts){this.flight=null;return}const r=Ha.find(o=>o.id===this.flight.id);if(this.flight.passed||=Zg(s,t,r),e.landed){const o=Math.hypot(t.x-this.flight.x,t.z-this.flight.z),a=`stunt:${this.flight.id}`;if(this.flight.passed&&o>=25){const l=!this.save.activities.includes(a);l&&this.save.activities.push(a);const h=this.save.bestStunts[this.flight.id]??0;o>h&&(this.save.bestStunts[this.flight.id]=Math.round(o*10)/10,n(r,o,l))}this.flight=null}}}const ce=new Ae,jg=new Rr({color:2311242,transparent:!0,opacity:.1,depthWrite:!1,side:ke});class Qg{constructor(t,e,{software:n=!1,worker:s=!0}={}){if(this.scene=t,this.save=e,this.software=n,this.boundary=gn/2-8,this.ramps=Ki.map(r=>({...r,baseY:Zt(r.x,r.z)})),this.solids=[],this.colliderHash=new al,this.interactionHash=new al,this.coins=[],this.breakables=[],this.traffic=[],this.people=[],this.jellies=[],this.decor=[],this.landmarkObjects=[],this.activitySites=[],this.districtObjects=[],this.scenicGates=[],this.platforms=[],this.discoveryObjects=[],this.stuntRings=[],this.collected=e.coins.length+(e.legacy?.coins??0),this.collectedIds=new Set(e.coins),this.brokenIds=new Set(e.broken),this.chunks=new Map,this.pending=new Map,this.ready=[],this.queue=[],this.wanted=new Map,this.stamp=0,this.lastCell="",this.flora=Og(),this.crownGeo=zg(),this.crownMat=ln(16766570),this.terrainMat=new _f({vertexColors:!0,map:Bg()}),s&&typeof Worker<"u")try{this.worker=new Worker(new URL(""+new URL("TerrainWorker-Dj-VFO8q.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=({data:r})=>{this.pending.delete(r.key),this.ready.push(r)},this.worker.onerror=()=>{this.worker.terminate(),this.worker=null;for(const r of this.pending.values())this.queue.push(r);this.pending.clear()}}catch{}this.makeGround(),this.makeRoads(),this.makeLandmarks(),this.makeStreetDetails(),this.makeLivingSites(),this.makeSetPieces(),this.makeDistrictDetails(),this.makeScenicGates(),this.makeDiscoveries(),this.makeStuntRings(),this.makeExploration(),this.makeResidents(),this.makeAtmosphere()}heightAt(t,e){let n=Zt(t,e);for(const s of this.platforms??[])if(Math.abs(t-s.x)<=s.w/2&&Math.abs(e-s.z)<=s.d/2+s.approach){const r=Se((s.d/2+s.approach-Math.abs(e-s.z))/s.approach,0,1);n=Math.max(n,n+(s.y-n)*r)}for(const s of this.ramps){const r=Ba(t,e,s);r!==null&&(n=Math.max(n,r))}return n}nearbySolids(t,e,n=8){return this.colliderHash.query(t,e,n)}addSolid(t,e,n,s,r,o=Zt(t,e)){const a={x:t,z:e,w:n,d:s,height:r,y:o};return this.solids.push(a),this.colliderHash.add(a),a}makeGround(){const t=new ns(gn,gn,60,60);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){const r=e.getX(s),o=e.getZ(s);e.setY(s,Bi(r,o)-3),n.set(ah(r,o),s*3),t.attributes.uv.setXY(s,r/28,o/28)}t.setAttribute("color",new Ue(n,3)),t.computeVertexNormals(),this.floor=Kt(this.scene,t,this.terrainMat),this.floor.castShadow=!1,this.floor.renderOrder=-60}makeRoads(){const t=[];for(const n of Pn)if(n.nodes.forEach((s,r)=>{const o=n.nodes[Math.max(0,r-1)],a=n.nodes[Math.min(n.nodes.length-1,r+1)];r%3===0&&t.push({x:s.x,y:Zt(s.x,s.z)+.34,z:s.z,a:Math.atan2(a.x-o.x,a.z-o.z)})}),this.software){const s=Kt(this.scene,ol(n,24),5277579);s.castShadow=!1,s.renderOrder=-30}const e=new Ui(new _i(.45,.025,4),ln(15128224),t.length);t.forEach((n,s)=>{ce.position.set(n.x,n.y,n.z),ce.rotation.set(0,n.a,0),ce.scale.setScalar(1),ai(e,s,ce)}),e.computeBoundingSphere(),e.renderOrder=-29,this.scene.add(e)}makeLandmarks(){const t={pineapple:[21,21,35],head:[18,16,25],rock:[23,23,8],krusty:[34,26,23],bucket:[24,24,35],goober:[45,32,41],ship:[36,62,40],castle:[66,43,49]};for(const n of Ls){const s=new Uu,r=Lg(n.type),o=new ie,[a,l,h]=t[n.type];if(n.type==="pineapple"){Ut(o,0,12,0,10,14,10,15309364);for(const c of[-3,0,3])Kt(o,new rn(3,13,5),6595655,c,29,0)}else if(n.type==="castle"){at(o,0,12,0,48,24,24,9553852);for(const c of[-27,27])Nt(o,c,18,0,7,36,10540747),Kt(o,new rn(8,15,7),8367296,c,43,0)}else n.type==="ship"?(Ut(o,0,8,0,18,10,30,9003336),at(o,0,24,-7,24,20,24,9335128)):Ut(o,0,h*.43,0,a*.48,h*.48,l*.48,n.type==="head"?7574434:n.type==="rock"?9928319:12037523);s.addLevel(r,0),s.addLevel(o,this.software?190:300,.08),s.position.set(n.x,Zt(n.x,n.z),n.z),this.scene.add(s),this.landmarkObjects.push(s),this.addSolid(n.x,n.z,a,l,h),this.makeContactShadow(n.x,n.z,a*.6,l*.6)}let e=0;for(const n of[be[0],be[1],be[3],be[4]])for(let s=0;s<9;s++){const r=s*2.4,o=85+s%3*27,a=n.x+Math.cos(r)*o,l=n.z+Math.sin(r)*o,h=Ln(a,l);if(h.distance<h.width/2+21||Ls.some(u=>Math.hypot(a-u.x,l-u.z)<u.radius+18)||this.solids.some(u=>Math.hypot(a-u.x,l-u.z)<Math.max(u.w,u.d)/2+15))continue;const c=Ig(e++);c.position.set(a,Zt(a,l),l),c.rotation.y=s*.7,this.scene.add(c),this.decor.push(c),this.addSolid(a,l,10,10,16),this.makeContactShadow(a,l,6.3,6.3)}}makeStreetDetails(){for(const t of be.filter(e=>["conch","commons","lagoon","neptune"].includes(e.id))){const e=Pn.find(n=>n.id===(t.id==="conch"?"conch-commons":t.id==="lagoon"?"lagoon-commons":t.id==="neptune"?"palace-commons":"wreck-commons"));for(let n=5;n<e.nodes.length-1;n+=9){const s=e.nodes[n],r=e.nodes[n+1];if(Math.hypot(s.x-t.x,s.z-t.z)>230)continue;const o=Math.atan2(r.x-s.x,r.z-s.z),a=n%2?1:-1,l=s.x+Math.cos(o)*(e.width/2+7)*a,h=s.z-Math.sin(o)*(e.width/2+7)*a,c=Ln(l,h);if(c.distance<c.width/2+4||this.solids.some(d=>Math.hypot(l-d.x,h-d.z)<Math.max(d.w,d.d)/2+8))continue;const u=new ie;u.position.set(l,Zt(l,h),h),u.rotation.y=o,Nt(u,0,3.9,0,.18,7.8,Qt("metal",4812400)),me(u,0,7.7,0,.9,.1,7970199).rotation.x=Math.PI/2,Ut(u,0,7.7,0,.65,.8,.65,15128995);for(let d=0;d<4;d++)at(u,2.8,1.1,-.6+d*.4,3.4,.16,.3,Qt("wood",10976592));for(const d of[1.6,4])at(u,d,.55,0,.18,1.1,1.5,5075827);for(const d of[1.7,2.1])at(u,2.8,d,.8,3.4,.25,.16,10976592);this.scene.add(u),this.decor.push(u),this.addSolid(l,h,.7,.7,8)}}}makeLivingSites(){for(const t of ka){const e=Wg(t.kind,t.label),[n,s,r]=Gg[t.kind],o=Math.cos(t.heading),a=Math.sin(t.heading),l=Math.abs(o)*n+Math.abs(a)*s,h=Math.abs(o)*s+Math.abs(a)*n;let c=Zt(t.x,t.z);for(const d of[-l/2,l/2])for(const f of[-h/2,h/2])c=Math.max(c,Zt(t.x+d,t.z+f));const u=at(e,0,-1,0,n,2,s,Qt("stone",11581339));u.receiveShadow=!0,e.position.set(t.x,c,t.z),e.rotation.y=t.heading,this.scene.add(e),this.decor.push(e),this.activitySites.push({...t,group:e,base:c,width:l,depth:h}),this.addSolid(t.x,t.z,l,h,r,c).siteId=t.id,this.makeContactShadow(t.x,t.z,l*.6,h*.6)}}makeContactShadow(t,e,n,s){const r=[t,Zt(t,e)+.1,e],o=[];for(let h=0;h<=24;h++){const c=h/24*Math.PI*2,u=t+Math.cos(c)*n,d=e+Math.sin(c)*s;r.push(u,Zt(u,d)+.1,d),h&&o.push(0,h+1,h)}const a=new ye;a.setAttribute("position",new te(r,3)),a.setIndex(o);const l=Kt(this.scene,a,jg);return l.castShadow=!1,l.receiveShadow=!1,l.renderOrder=-20,l}makeDistrictDetails(){for(const t of ch){const{group:e,solids:n}=Xg(t);let s=Zt(t.x,t.z);for(const r of t.kind==="boardwalk"?[-5,5]:[-t.radius,t.radius])for(const o of t.kind==="boardwalk"?[-18.75,18.75]:[-t.radius,t.radius])s=Math.max(s,Zt(t.x+r,t.z+o));e.position.set(t.x,s,t.z),this.scene.add(e),this.decor.push(e),this.districtObjects.push({...t,group:e,base:s});for(const r of n)this.addSolid(t.x+r.x,t.z+r.z,r.w,r.d,r.height,s+r.y).siteId=t.id;if(t.kind==="boardwalk"){const r={x:t.x,z:t.z,w:10,d:37.5,y:s+1.2,approach:12};this.platforms.push(r);for(const o of[-1,1]){const a=[],l=[],h=[];for(let u=0;u<=4;u++)for(let d=0;d<=2;d++){const f=-5+d*5,g=o*(18.75+u*3);a.push(f,this.heightAt(t.x+f,t.z+g)-s,g),l.push(d,u/2)}for(let u=0;u<4;u++)for(let d=0;d<2;d++){const f=u*3+d;h.push(...o===1?[f,f+3,f+1,f+1,f+3,f+4]:[f,f+1,f+3,f+1,f+4,f+3])}const c=new ye;c.setAttribute("position",new te(a,3)),c.setAttribute("uv",new te(l,2)),c.setIndex(h),c.computeVertexNormals(),Kt(e,c,Qt("wood",10717797))}}for(const r of[-t.radius*.3,t.radius*.3]){const o=Zt(t.x+r,t.z);s>o+.1&&at(e,r,-(s-o)/2,0,1.2,s-o,1.2,Qt("stone",11581339))}In(e),this.makeContactShadow(t.x,t.z,t.radius*.65,t.radius*.65)}}makeScenicGates(){for(const t of xi)t.gates.forEach((e,n)=>{const s=new ie,r=ln(t.color).clone();s.position.set(e.x,e.y,e.z),s.rotation.y=e.heading;const o=e.width/2+3;for(const a of[-o,o]){Nt(s,a,5.5,0,.24,11,Qt("metal",5406078));for(const c of[1.5,4,9])me(s,a,c,0,.35,.13,r).rotation.x=Math.PI/2;Ut(s,a,11,0,.7,.7,.7,r);const l=e.x+Math.cos(e.heading)*a,h=e.z-Math.sin(e.heading)*a;this.addSolid(l,h,.6,.6,11,Zt(l,h)).siteId=`gate:${t.id}:${n}`}at(s,0,11,0,o*2,.16,.16,r),we(s,`${t.name.toUpperCase()} ${n+1}/6`,0,10,.1,Math.min(e.width,20),"#40767a"),In(s),this.scene.add(s),this.decor.push(s),this.scenicGates.push({routeId:t.id,index:n,group:s,color:r,x:e.x,z:e.z})})}makeDiscoveries(){for(const t of Jn){const{group:e,solids:n}=Jg(t);this.scene.add(e),this.decor.push(e),this.discoveryObjects.push({...t,group:e});for(const s of n)this.addSolid(s.x,s.z,s.w,s.d,s.height,s.y).siteId=t.id}if(this.software)for(const t of Ms){const e=Kt(this.scene,ol(t,4),12434067);e.castShadow=!1,e.renderOrder=-28}for(const t of Ms){const e=new ie;for(let n=5;n<t.nodes.length-1;n+=9){const s=t.nodes[n],r=t.nodes[n+1],o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;for(const h of[-1,1]){const c=s.x+a/l*8*h,u=s.z-o/l*8*h;if([...this.nearbySolids(c,u)].some(f=>Math.abs(c-f.x)<f.w/2+2&&Math.abs(u-f.z)<f.d/2+2))continue;const d=Zt(c,u);Nt(e,c,d+.65,u,.18,1.3,Qt("wood",11836022)),Ut(e,c,d+1.4,u,.26,.18,.26,14146740)}}In(e),e.position.set(0,0,0),this.scene.add(e)}}makeStuntRings(){for(const t of Ha){const e=new ie,n=ln(16766074).clone();me(e,0,0,0,t.radius,.3,n);for(let s=0;s<8;s++){const r=s*Math.PI/4;Ut(e,Math.cos(r)*t.radius,Math.sin(r)*t.radius,0,.38,.38,.38,n)}In(e),e.position.set(t.x,t.y,t.z),e.rotation.y=t.heading,this.scene.add(e),this.decor.push(e),this.stuntRings.push({...t,group:e,color:n})}}makeSetPieces(){for(const c of this.ramps){const u=new ie;u.position.set(c.x,c.baseY,c.z),u.rotation.y=c.heading;const d=new ye;d.setAttribute("position",new te([-c.width/2,0,c.length/2,c.width/2,0,c.length/2,-c.width/2,c.height,-c.length/2,c.width/2,c.height,-c.length/2],3)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals(),d.setAttribute("uv",new te([0,0,1,0,0,1,1,1],2)),Kt(u,d,Qt("wood",13144416),0,.08,0);for(const f of[-c.width/2,c.width/2]){at(u,f,c.height/2,-c.length/2,.5,c.height,.5,14137735);const g=at(u,f,c.height/2+.8,0,.25,.25,Math.hypot(c.length,c.height),15784352);g.rotation.x=Math.atan2(c.height,c.length)}for(let f=0;f<3;f++){const g=8-f*7,x=c.height*(.5-g/c.length)+.12;at(u,0,x,g,c.width*.75,.08,1.2,15978345)}this.scene.add(u)}for(const c of Is){const u=new ie;u.position.set(c.x,Zt(c.x,c.z),c.z);const d=ll(c.id==="coral-grotto"?10782637:8762800,20,14);u.add(d),Ut(u,0,3,-9,2.4,2.4,2.4,14348479);for(const f of[-13,13])this.addSolid(c.x+f,c.z,5,7,12);for(let f=0;f<8;f++){const g=f*Math.PI/4;Ut(u,Math.cos(g)*13,.5,-9+Math.sin(g)*13,2,1.4,2,8958630)}this.scene.add(u),this.decor.push(u)}const t=[],e=[],n=500,s=560;t.push(n,Zt(n,s)+.18,s);for(let c=0;c<=48;c++){const u=c/48*Math.PI*2,d=n+Math.cos(u)*77,f=s+Math.sin(u)*51;t.push(d,Zt(d,f)+.18,f),c&&e.push(0,c,c+1)}const r=new ye;r.setAttribute("position",new te(t,3)),r.setIndex(e),r.computeVertexNormals(),Kt(this.scene,r,ln(5154459,!1,.86));const o=ll(14004622,34,22);o.position.set(212,Zt(212,-505),-505),this.scene.add(o);for(const c of[194,230])this.addSolid(c,-505,8,10,22);const a=new Ps(1,1),l=new Ui(a,ln(8827051),88);let h=0;for(let c=0;c<22;c++)for(const u of[0,1,2,3]){const d=-880+c*84,f=u<2?u?884:-884:d,g=u<2?d:u===2?884:-884,x=13+Me(c,u,84)*10;ce.position.set(f,Zt(f,g)+x*.6,g),ce.rotation.set(0,Me(c,u)*6,0),ce.scale.set(x,x*1.5,x),ai(l,h++,ce),this.addSolid(f,g,x*1.8,x*1.8,x*2.1)}l.computeBoundingSphere(),this.scene.add(l)}makeExploration(){for(const t of Pn){let e=0,n=12;for(const s of t.nodes){if(s.distance<n)continue;n+=22;const r=t.nodes[Math.max(0,t.nodes.indexOf(s)-1)],o=s.x-r.x,a=s.z-r.z,l=Math.hypot(o,a)||1,h=e%2?3.5:-3.5,c=s.x+a/l*h,u=s.z-o/l*h;this.addCrown(`crown:${t.id}:${e++}`,c,u,Zt(c,u)+2)}}for(const t of be)for(let e=0;e<14;e++){const n=e/14*Math.PI*2;let s=t.x+Math.cos(n)*(44+e%3*7),r=t.z+Math.sin(n)*(44+e%3*7);if(!this.solids.some(o=>!o.siteId&&Math.abs(s-o.x)<o.w/2+3&&Math.abs(r-o.z)<o.d/2+3)){for(const o of this.solids.filter(a=>a.siteId))Math.abs(s-o.x)<o.w/2+4&&Math.abs(r-o.z)<o.d/2+4&&(s=o.x+(s>=o.x?1:-1)*(o.w/2+5));this.addCrown(`crown:${t.id}:${e}`,s,r,Zt(s,r)+2)}}for(const t of Is)for(let e=0;e<8;e++){const n=e*Math.PI/4,s=t.x+Math.cos(n)*8,r=t.z-9+Math.sin(n)*8;this.addCrown(`crown:secret-${t.id}:${e}`,s,r,Zt(s,r)+2.2)}for(const t of this.ramps)for(let e=0;e<6;e++){const n=t.length/2-e*t.length/5,s=t.x+Math.sin(t.heading)*n,r=t.z+Math.cos(t.heading)*n;this.addCrown(`crown:${t.id}:${e}`,s,r,this.heightAt(s,r)+2.3)}for(const t of be)for(let e=0;e<18;e++){const n=e*2.3,s=t.x+Math.cos(n)*(22+e%4*15),r=t.z+Math.sin(n)*(22+e%4*15);if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+3&&Math.abs(r-a.z)<a.d/2+3))continue;const o={id:`prop:${t.id}:${e}`,x:s,z:r,y:Zt(s,r),kind:"barrel"};this.breakables.push(o),this.interactionHash.add(o)}this.objectsByChunk=new Map;for(const t of[...this.coins,...this.breakables]){const e=this.chunkKey(t.x,t.z);this.objectsByChunk.has(e)||this.objectsByChunk.set(e,[]),this.objectsByChunk.get(e).push(t)}}addCrown(t,e,n,s){const r={id:t,x:e,z:n,y:s,kind:"crown",phase:Me(Math.floor(e),Math.floor(n),16)*6};this.coins.push(r),this.interactionHash.add(r)}chunkKey(t,e){return`${Math.floor(t/Te)},${Math.floor(e/Te)}`}makeResidents(){for(const t of Ms)for(let e=0;e<4;e++){const n=bo([13611146,11580374,9748658,13738428][e]);this.scene.add(n);const s=il(t,t.length*(.3+e*.15),e%2?1:-1);this.people.push({mesh:n,...s,phase:e*1.7,pathRoute:t,side:e%2?1:-1,offset:t.length*(.3+e*.15)})}for(const t of be)for(let e=0;e<6;e++){const n=e*2.1,s=t.x+Math.cos(n)*35,r=t.z+Math.sin(n)*35;if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+4&&Math.abs(r-a.z)<a.d/2+4))continue;const o=bo([15117949,9684144,12426184,14661238][e%4]);this.scene.add(o),this.people.push({mesh:o,x:s,z:r,phase:e+t.x*.01})}for(const t of this.activitySites){const e=Math.cos(t.heading),n=Math.sin(t.heading);for(let s=0;s<2;s++){const r=t.depth/2+7,o=t.x+e*(-4+s*8)+n*r,a=t.z-n*(-4+s*8)+e*r;if([...this.nearbySolids(o,a)].some(h=>Math.abs(o-h.x)<h.w/2+3&&Math.abs(a-h.z)<h.d/2+3))continue;const l=bo([13019068,10467493][s]);this.scene.add(l),this.people.push({mesh:l,x:o,z:a,phase:t.x*.01+s,heading:t.heading,path:!0})}}for(let t=0;t<9;t++){const e=Dg([10786240,14790523,8566201][t%3]);this.scene.add(e),this.traffic.push({mesh:e,phase:t/9,speed:8+t%3*2,solid:{x:0,z:0,w:5,d:8,height:3,y:0}})}for(const t of be)for(let e=0;e<(t.id==="fields"?14:4);e++){const n=e*2.3,s=t.x+Math.cos(n)*(60+e%4*22),r=t.z+Math.sin(n)*(60+e%4*22),o=Zt(s,r)+8+e%3*3,a=Ug(e%2?15308734:11705307);this.scene.add(a),this.jellies.push({mesh:a,x:s,y:o,z:r,phase:e})}}makeAtmosphere(){this.vehicleShadow=this.makeContactShadow(0,0,2.8,3.2),this.vehicleShadow.geometry.attributes.position.setUsage(tc),this.bubbles=[];const t=new Ui(new _n(.13,5,3),ln(13236451,!1,.36),42);t.frustumCulled=!1,this.scene.add(t),this.bubbleMesh=t,this.particles=[],this.particleMesh=new Ui(new Ps(.16),ln(16767100),80),this.particleMesh.frustumCulled=!1,this.scene.add(this.particleMesh),this.software&&(t.visible=!1,this.particleMesh.visible=!1)}createChunk(t){const e=`${t.cx},${t.cz}`,n=this.chunks.get(e);n&&this.disposeChunk(n);const s=new ie;s.position.set(t.cx*Te,0,t.cz*Te);const r=new ye;r.setAttribute("position",new Ue(t.positions,3)),r.setAttribute("color",new Ue(t.colors,3)),r.setAttribute("uv",new Ue(t.uv,2)),r.setIndex(new Ue(t.indices,1)),r.computeVertexNormals(),r.computeBoundingSphere();let o=this.terrainMat;if(!this.software){const x=new Ca(t.paint,t.paintSize,t.paintSize,Ze);x.colorSpace=Le,x.magFilter=Je,x.minFilter=Je,x.needsUpdate=!0,o=kg(x);for(let m=0;m<r.attributes.uv.count;m++)r.attributes.uv.setXY(m,r.attributes.position.getX(m)/Te,r.attributes.position.getZ(m)/Te)}const a=Kt(s,r,o);a.castShadow=!1,a.renderOrder=-50;const l=[],h=[];for(const x of["rock","coral","kelp"])for(let m=0;m<3;m++){let p=t.props.filter(_=>_.type===x&&_.color===m&&(x!=="rock"||!this.coins.some(A=>Math.hypot(A.x-_.x,A.z-_.z)<2.4*_.scale+4)));if(this.software&&(p=p.filter(_=>Me(Math.floor(_.x),Math.floor(_.z),62)<.3)),!p.length)continue;const y={rock:[10005921,12170400,10267066],coral:[13536174,14852480,10852297],kelp:[4558712,6924158,8957029]},M=new Ui(this.flora[x],ln(y[x][m]),p.length);M.castShadow=!1,M.receiveShadow=!0,p.forEach((_,A)=>{if(ce.position.set(_.x-s.position.x,_.y,_.z-s.position.z),ce.rotation.set(0,_.rotation,0),ce.scale.setScalar(_.scale),ai(M,A,ce),x==="rock"){const R={x:_.x,z:_.z,w:4.8*_.scale,d:4.8*_.scale,height:4.8*_.scale,y:_.y-2.4*_.scale};this.colliderHash.add(R),h.push(R)}}),M.computeBoundingSphere(),s.add(M),l.push({batch:M,props:p})}const c=this.objectsByChunk.get(e)??[],u=c.filter(x=>x.kind==="crown");let d=null;u.length&&(d=new Ui(this.crownGeo,this.crownMat,u.length),d.instanceMatrix.setUsage(tc),d.frustumCulled=!1,s.add(d),u.forEach((x,m)=>{x.slot=m,ce.position.set(x.x-s.position.x,x.y,x.z-s.position.z),ce.rotation.set(0,0,0),ce.scale.setScalar(this.collectedIds.has(x.id)?0:1),ai(d,m,ce)}));const f=[];for(const x of c.filter(m=>m.kind==="barrel")){if(this.brokenIds.has(x.id))continue;const m=Fg();m.position.set(x.x-s.position.x,x.y,x.z-s.position.z),s.add(m),f.push({item:x,mesh:m})}const g={key:e,group:s,terrain:a,segments:t.segments,flora:l,rockSolids:h,coins:u,crownBatch:d,barrels:f,used:++this.stamp};this.chunks.set(e,g),this.scene.add(s),this.software&&eh(s),this.updateChunkCoins(g,0)}ensureAround(t,e,n=0,s=!1){const r=Math.floor(t/Te),o=Math.floor(e/Te),a=`${r},${o}`;if(a===this.lastCell&&!s)return;this.lastCell=a,this.wanted.clear();const l=this.software?1:2,h=[];for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){const d=r+u,f=o+c;if(d*Te>900||f*Te>900||(d+1)*Te<-900||(f+1)*Te<-900)continue;const g=this.software?8:Math.max(Math.abs(u),Math.abs(c))<=1?32:8,x=`${d},${f}`;this.wanted.set(x,g);const m=this.chunks.get(x);if(m&&m.segments===g){m.group.visible=!0,m.used=++this.stamp;continue}this.pending.has(x)||h.push({key:x,cx:d,cz:f,segments:g,priority:u*u+c*c})}h.sort((c,u)=>c.priority-u.priority);for(const c of this.chunks.values())c.group.visible=this.wanted.has(c.key);if(this.queue=h,s){const c=Math.min(3,this.queue.length);for(let u=0;u<c;u++){const d=this.queue.shift();this.createChunk(rl(d.cx,d.cz,d.segments))}}}stream(){if(this.ready.length){const t=this.ready.shift(),e=`${t.cx},${t.cz}`,n=this.wanted.get(e);n===t.segments?this.createChunk(t):n&&!this.pending.has(e)&&this.queue.push({key:e,cx:t.cx,cz:t.cz,segments:n})}if(this.queue=this.queue.filter(t=>this.wanted.get(t.key)===t.segments&&this.chunks.get(t.key)?.segments!==t.segments&&!this.pending.has(t.key)),this.queue.length&&this.pending.size<3){const t=this.queue.shift();this.worker?(this.pending.set(t.key,t),this.worker.postMessage(t)):this.createChunk(rl(t.cx,t.cz,t.segments))}for(;this.chunks.size>55;){const e=[...this.chunks.values()].filter(n=>!n.group.visible).sort((n,s)=>n.used-s.used)[0];if(e)this.disposeChunk(e),this.chunks.delete(e.key);else break}}updateChunkCoins(t,e){t.crownBatch&&(t.coins.forEach((n,s)=>{ce.position.set(n.x-t.group.position.x,n.y+Math.sin(e*2+n.phase)*.2,n.z-t.group.position.z),ce.rotation.set(0,e*1.1+n.phase,0),ce.scale.setScalar(this.collectedIds.has(n.id)?0:1),ai(t.crownBatch,s,ce)}),t.crownBatch.instanceMatrix.needsUpdate=!0)}burst(t,e,n){if(!this.software)for(let s=0;s<12;s++)this.particles.length>=80&&this.particles.shift(),this.particles.push({x:t,y:e,z:n,vx:(Math.random()-.5)*7,vy:3+Math.random()*4,vz:(Math.random()-.5)*7,life:1})}update(t,e,n,s,r){Tg(t);for(const c of this.stuntRings){const u=this.save.activities.includes(`stunt:${c.id}`);c.color.color.setHex(u?9032371:16766074)}for(const c of this.scenicGates){const u=this.save.trails?.[c.routeId]??0;c.color.color.setHex(xi.find(d=>d.id===c.routeId).color),c.color.color.multiplyScalar(c.index===u?1:c.index<u?.55:.75)}const o=this.vehicleShadow.geometry.attributes.position,a=Math.max(0,n.y-Zt(n.x,n.z)),l=1+Math.min(a,18)*.045;for(let c=0;c<o.count;c++){const u=(c-1)/24*Math.PI*2,d=n.x+(c?Math.cos(u)*2.8*l:0),f=n.z+(c?Math.sin(u)*3.2*l:0);o.setXYZ(c,d,Zt(d,f)+.12,f)}o.needsUpdate=!0,this.vehicleShadow.geometry.computeBoundingSphere(),this.ensureAround(n.x,n.z,n.heading),this.stream();for(const c of this.interactionHash.query(n.x,n.z,5))Math.hypot(c.x-n.x,c.z-n.z)>3.9||Math.abs(c.y-n.y-1.6)>3.1||(c.kind==="crown"&&!this.collectedIds.has(c.id)&&(this.collectedIds.add(c.id),this.collected++,this.burst(c.x,c.y,c.z),s(c.id)),c.kind==="barrel"&&!this.brokenIds.has(c.id)&&Math.abs(n.speed)>4&&(this.brokenIds.add(c.id),this.burst(c.x,c.y+1,c.z),r(c.id)));for(const c of this.chunks.values())if(c.group.visible){this.updateChunkCoins(c,t);for(const u of c.barrels)u.mesh.visible=!this.brokenIds.has(u.item.id);if(this.software)for(const{batch:u,props:d}of c.flora)u.userData.softwareCopies?.forEach((f,g)=>f.visible=Math.hypot(d[g].x-n.x,d[g].z-n.z)<95)}for(const c of this.landmarkObjects)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?600:1050);for(const c of this.decor)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?230:400);const h=Pn[0];for(const c of this.traffic){const u=(t*c.speed+c.phase*h.length)%h.length;let d=0,f=h.nodes.length-1;for(;d<f;){const b=d+f>>1;h.nodes[b].distance<u?d=b+1:f=b}const g=h.nodes[Math.max(0,d-1)],x=h.nodes[d],m=Se((u-g.distance)/(x.distance-g.distance||1),0,1),p=x.x-g.x,y=x.z-g.z,M=Math.hypot(p,y)||1,_=g.x+p*m+y/M*5,A=g.z+y*m-p/M*5,R=c.solid;this.colliderHash.remove(R);const L=Math.abs(p/M),P=Math.abs(y/M);Object.assign(R,{x:_,z:A,y:Zt(_,A),w:5*P+8*L,d:8*P+5*L}),c.mesh.visible=Math.hypot(_-n.x,A-n.z)<(this.software?125:250),c.mesh.visible&&(this.colliderHash.add(R),c.mesh.position.set(_,Zt(_,A),A),c.mesh.rotation.y=Math.atan2(-p,-y))}for(const c of this.people){if(c.pathRoute){const x=c.pathRoute,m=(t*1.35+c.offset)%(x.length*2),p=m>x.length,y=il(x,p?x.length*2-m:m,c.side),M=Ln(y.x,y.z);if(M.distance<M.width/2+3){c.mesh.visible=!1;continue}[...this.nearbySolids(y.x,y.z)].some(A=>Math.abs(y.x-A.x)<A.w/2+1.2&&Math.abs(y.z-A.z)<A.d/2+1.2&&Zt(y.x,y.z)<A.y+A.height)||(c.x=y.x,c.z=y.z),c.heading=y.heading+(p?0:Math.PI)}if(c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?90:180),!c.mesh.visible)continue;const u=Math.hypot(c.x-n.x,c.z-n.z)<10;let d=c.x+Math.sin(t*.4+c.phase)*3+(u?Math.sign(c.x-n.x)*4:0),f=c.z+Math.cos(t*.3+c.phase)*3;if(c.path){const x=Math.sin(t*.2+c.phase)*3.5;d=c.x+Math.cos(c.heading)*x,f=c.z-Math.sin(c.heading)*x}c.pathRoute&&(d=c.x,f=c.z),[...this.nearbySolids(d,f)].some(x=>Math.abs(d-x.x)<x.w/2+1&&Math.abs(f-x.z)<x.d/2+1)&&(d=c.x,f=c.z),c.mesh.position.set(d,Zt(d,f)+Math.abs(Math.sin(t*4+c.phase))*.06,f),c.mesh.rotation.y=c.pathRoute?c.heading:c.path?c.heading+(Math.cos(t*.2+c.phase)>0?-Math.PI/2:Math.PI/2):c.phase+Math.sin(t*.2)*.3,c.mesh.rotation.z=Math.sin(t*4+c.phase)*.035;const g=Math.sin(t*3.5+c.phase)*.25;c.mesh.userData.legs?.forEach((x,m)=>x.rotation.x=g*(m?1:-1)),c.mesh.userData.arms?.forEach((x,m)=>x.rotation.x=g*(m?-1:1))}for(const c of this.jellies)c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?140:270),c.mesh.visible&&(c.mesh.position.set(c.x+Math.sin(t*.2+c.phase)*5,c.y+Math.sin(t+c.phase)*1.1,c.z),c.mesh.scale.setScalar(1+Math.sin(t*2+c.phase)*.045));if(!this.software){for(let c=0;c<42;c++){const u=n.x+(Me(c,0,62)-.5)*120,d=n.z+(Me(c,1,62)-.5)*120,f=n.y+(t*.8+Me(c,2,62)*30)%30;ce.position.set(u,f,d),ce.rotation.set(0,0,0),ce.scale.setScalar(.4+Me(c,3,62)*1.1),ai(this.bubbleMesh,c,ce)}this.bubbleMesh.instanceMatrix.needsUpdate=!0,this.particles=this.particles.filter(c=>c.life>0);for(let c=0;c<80;c++){const u=this.particles[c];u?(u.life-=e,u.vy-=9*e,u.x+=u.vx*e,u.y+=u.vy*e,u.z+=u.vz*e,ce.position.set(u.x,u.y,u.z),ce.scale.setScalar(Math.max(0,u.life))):ce.scale.setScalar(0),ce.rotation.set(0,0,0),ai(this.particleMesh,c,ce)}this.particleMesh.instanceMatrix.needsUpdate=!0}}recover(t,e){const n=Ln(t,e,!0);return{x:n.x,z:n.z,heading:n.heading}}disposeChunk(t){this.scene.remove(t.group);for(const e of t.rockSolids??[])this.colliderHash.remove(e);t.group.traverse(e=>{e.isInstancedMesh&&e.dispose()}),t.terrain.geometry.dispose(),this.software||(t.terrain.material.map.dispose(),t.terrain.material.dispose())}dispose(){this.worker?.terminate(),this.worker=null,this.pending.clear(),this.ready.length=0,this.queue.length=0;for(const t of this.chunks.values())this.disposeChunk(t);this.chunks.clear();for(const t of this.traffic)this.colliderHash.remove(t.solid)}}class tx{constructor(){this.keys=new Set,this.pointers=new Map;const t=/^(Arrow|Key[WASDR]|Space|Shift|Escape)/;addEventListener("keydown",e=>{t.test(e.code)&&(e.preventDefault(),this.keys.add(e.code))}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.clear());for(const e of document.querySelectorAll("[data-key]")){e.addEventListener("pointerdown",s=>{s.preventDefault(),e.setPointerCapture(s.pointerId),this.pointers.set(s.pointerId,e.dataset.key),this.keys.add(e.dataset.key)});const n=s=>{const r=this.pointers.get(s.pointerId);this.pointers.delete(s.pointerId),[...this.pointers.values()].includes(r)||this.keys.delete(r)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("lostpointercapture",n)}}has(...t){return t.some(e=>this.keys.has(e))}clear(){this.keys.clear(),this.pointers.clear()}}class ex{constructor(){this.enabled=!1,this.ctx=null}toggle(){return this.enabled=!this.enabled,this.enabled&&(this.ctx??=new AudioContext,this.ctx.resume()),this.enabled}tone(t=650,e=.12){if(!this.enabled||!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.value=t,s.gain.setValueAtTime(.06,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),n.connect(s).connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+e)}}const dh=`patty-wagon-underwater-v${Oa}-${Dr}`,nx="patty-wagon-free-roam-v1",Wn=(i,t)=>Array.isArray(i)?[...new Set(i.filter(t))]:[],fl=i=>t=>typeof t=="string"&&new RegExp(`^${i}:[a-z0-9:-]{1,90}$`).test(t);function dl(i=null){return{version:Oa,seed:Dr,coins:[],broken:[],activities:[],trails:{},bestStunts:{},discoveries:[],visited:[],secrets:[],position:null,legacy:i}}function ix(i){try{i??=globalThis.localStorage;const t=JSON.parse(i.getItem(dh)),e=JSON.parse(i.getItem(nx)),n=t?.legacy??(e?{coins:Wn(e.coins,r=>Number.isInteger(r)&&r>=0&&r<96).length,broken:Wn(e.broken,r=>Number.isInteger(r)&&r>=0&&r<42).length}:null),s=dl(n);if(t?.version!==Oa||t?.seed!==Dr)return s;s.coins=Wn(t.coins,fl("crown")),s.broken=Wn(t.broken,fl("prop")),s.activities=Wn(t.activities,r=>["jump","smash","explorer",...xi.map(o=>`trail:${o.id}`),...Ki.map(o=>`stunt:${o.id}`)].includes(r));for(const r of xi){const o=t.trails?.[r.id];s.trails[r.id]=s.activities.includes(`trail:${r.id}`)?r.gates.length:Number.isInteger(o)?Math.max(0,Math.min(r.gates.length,o)):0}s.discoveries=Wn(t.discoveries,r=>Jn.some(o=>o.id===r));for(const r of Ki){const o=t.bestStunts?.[r.id];Number.isFinite(o)&&o>=25&&o<2e3&&(s.bestStunts[r.id]=Math.round(o*10)/10)}return s.visited=Wn(t.visited,r=>be.some(o=>o.id===r)),s.secrets=Wn(t.secrets,r=>Is.some(o=>o.id===r)),t.position&&["x","z","heading"].every(r=>Number.isFinite(t.position[r]))&&Math.max(Math.abs(t.position.x),Math.abs(t.position.z))<875&&(s.position={x:t.position.x,z:t.position.z,heading:t.position.heading}),n&&(s.legacy={coins:Math.max(0,Math.min(96,Number(n.coins)||0)),broken:Math.max(0,Math.min(42,Number(n.broken)||0))}),s}catch{return dl()}}function sx(i,t){try{return t??=globalThis.localStorage,t.setItem(dh,JSON.stringify(i)),!0}catch{return!1}}function rx(i,t,e,n){let s=i.x,r=i.z,o=0;const a=[...n].filter(l=>i.y<(l.y??0)+l.height&&i.y+2.6>(l.y??0));for(let l=0;l<3;l++){let h=null;for(const f of a){const g=f.x-f.w/2-2,x=f.x+f.w/2+2,m=f.z-f.d/2-2.1,p=f.z+f.d/2+2.1;if(s>g&&s<x&&r>m&&r<p){const L=[[s-g,-1,0],[x-s,1,0],[r-m,0,-1],[p-r,0,1]];L.sort((I,z)=>I[0]-z[0]);const[P,b,S]=L[0];s+=b*(P+.002),r+=S*(P+.002)}let y=-1/0,M=1/0,_=0,A=0,R=!1;for(const[L,P,b,S,I]of[[s,t,g,x,0],[r,e,m,p,1]]){if(Math.abs(P)<1e-9){(L<b||L>S)&&(R=!0);continue}const z=(b-L)/P,G=(S-L)/P,J=Math.min(z,G),Z=Math.max(z,G);J>y&&(y=J,_=I===0?-Math.sign(P):0,A=I===1?-Math.sign(P):0),M=Math.min(M,Z)}!R&&y>=0&&y<=1&&y<=M&&(!h||y<h.t)&&(h={t:y,nx:_,nz:A})}if(!h){s+=t,r+=e;break}const c=Math.max(0,h.t-.001/(Math.hypot(t,e)||1));s+=t*c,r+=e*c,t*=1-c,e*=1-c;const u=t*h.nx+e*h.nz;u<0&&(t-=u*h.nx,e-=u*h.nz);const d=i.vx*h.nx+i.vz*h.nz;d<0&&(i.vx-=d*h.nx,i.vz-=d*h.nz),o++}return i.x=s,i.z=r,o&&(i.speed=Math.sign(i.speed)*Math.min(Math.abs(i.speed),Math.hypot(i.vx,i.vz))),o}const ox=18;function ax(i,t,e=[],n=()=>0){let s=n(i,t);for(const r of e){const o=Ba(i,t,{baseY:0,...r});o!==null&&(s=Math.max(s,o))}return s}function ci(i,t,e){return i.heightAt?i.heightAt(t,e):ax(t,e,i.ramps??[])}function cx(i,t,e,n){e=Math.min(Math.max(e,0),.05);const s=ci(n,i.x,i.z),r=i.y<=s+.18&&i.vy<=0,o=t.boost&&t.throttle>0&&i.energy>1,a=n.collected>=80?2:n.collected>=30?1:0;i.energy=Se(i.energy+(o?-26:16)*e,0,100),i.speed+=t.throttle*(o?43:29)*e,i.speed*=Math.exp(-(t.brake?2.6:t.throttle?.25:.8)*e),i.speed=Se(i.speed,-16,(o?58:38)+a*4),i.heading-=t.steer*(t.brake?2.15:1.42)*Se(i.speed/25,-1,1.15)*e*(r?1:.38);const l=1-Math.exp(-(r?t.brake?1.35:5.5+a*.4:.65)*e);i.vx+=(-Math.sin(i.heading)*i.speed-i.vx)*l,i.vz+=(-Math.cos(i.heading)*i.speed-i.vz)*l;const h=i.x,c=i.z,u=n.nearbySolids?n.nearbySolids(i.x+i.vx*e/2,i.z+i.vz*e/2,Math.hypot(i.vx,i.vz)*e/2+4):n.solids??[],d=rx(i,i.vx*e,i.vz*e,u),f=n.boundary??gn/2-8;(Math.abs(i.x)>f||Math.abs(i.z)>f)&&(i.x=Se(i.x,-f,f),i.z=Se(i.z,-f,f),i.speed*=-.2,i.vx*=-.2,i.vz*=-.2);const g=ci(n,i.x,i.z),x=n.ramps?.some(R=>Ba(h,c,{baseY:0,...R})!==null);let m=!1,p=!1;r&&s-g>.65&&Math.abs(i.speed)>8&&(i.vy=((x?8:2)+Math.abs(i.speed)*(x?.22:.1))*.9,m=!0),r&&!m?(p=!i.grounded,i.y=g,i.vy=0):(i.vy-=ox*e,i.y+=i.vy*e,i.y<=g&&(i.y=g,i.vy=0,p=!0)),["x","z","y","heading","speed","vx","vz","vy"].every(R=>Number.isFinite(i[R]))||Object.assign(i,ga()),i.grounded=i.y<=ci(n,i.x,i.z)+.001&&i.vy<=0;const y=-Math.sin(i.heading),M=-Math.cos(i.heading),_=Math.cos(i.heading),A=-Math.sin(i.heading);if(i.grounded){const R=ci(n,i.x+y*1.5,i.z+M*1.5),L=ci(n,i.x-y*1.5,i.z-M*1.5),P=ci(n,i.x-_*1.8,i.z-A*1.8),b=ci(n,i.x+_*1.8,i.z+A*1.8);i.pitch+=(Math.atan2(R-L,3)-i.pitch)*(1-Math.exp(-10*e)),i.roll+=(Math.atan2(b-P,3.6)-i.roll)*(1-Math.exp(-10*e))}else i.pitch*=Math.exp(-2*e),i.roll*=Math.exp(-2*e);return{boost:o,landed:p,launched:m,impacts:d}}function ga(i=_r(),t=Zt){return{x:i.x,y:t(i.x,i.z),z:i.z,heading:i.heading??0,speed:0,vx:0,vz:0,vy:0,energy:100,pitch:0,roll:0,grounded:!0}}try{let Y=function(C){S.textContent=C,S.classList.add("visible"),M=x+3},nt=function(){a.position={x:g.x,z:g.z,heading:g.heading},sx(a)||Y("This browser could not save your progress.")},X=function(C,$){a.activities.includes(C)||(a.activities.push(C),nt(),c.tone(950,.3),Y($))},_t=function(){return`${a.coins.length} / ${l.coins.length} crowns · ${a.visited.length} / 7 areas explored · ${a.secrets.length} / 7 secrets · ${a.broken.length} props smashed · ${xi.filter(C=>a.trails[C.id]===C.gates.length).length} / 3 scenic routes · ${a.activities.filter(C=>C.startsWith("stunt:")).length} / 9 stunt rings · ${a.discoveries.length} / 3 destinations`},ht=function(C){y=C,h.clear(),C?(i("#progress").textContent=_t(),i("#legacy").textContent=a.legacy?`Previous town archived: ${a.legacy.coins} discoveries. Your wagon keeps that upgrade credit.`:"",P.open||P.showModal()):(P.open&&P.close(),b.open&&b.close()),m=performance.now()},Et=function(C,$){g=ga(C,l.heightAt.bind(l)),d.resetPosition(),f.reset(),_=null,r.position.set(g.x+Math.sin(g.heading)*18,g.y+9,g.z+Math.cos(g.heading)*18),l.ensureAround(g.x,g.z,g.heading,!0),nt(),$&&Y($)},Bt=function(C,$,K=!0){C.clearRect(0,0,$,$),C.fillStyle="#134c59",C.fillRect(0,0,$,$);const rt=(W,w)=>[(W/gn+.5)*$,(w/gn+.5)*$];for(const W of be){const[w,N]=rt(W.x,W.z),O=C.createRadialGradient(w,N,0,w,N,$*.19);O.addColorStop(0,W.color+"44"),O.addColorStop(1,W.color+"00"),C.fillStyle=O,C.beginPath(),C.arc(w,N,$*.19,0,Math.PI*2),C.fill()}C.lineCap="round",C.lineJoin="round",C.strokeStyle="#afddd0",C.lineWidth=$>300?3:1.5;for(const W of Pn)C.beginPath(),W.nodes.forEach((w,N)=>{const[O,H]=rt(w.x,w.z);N?C.lineTo(O,H):C.moveTo(O,H)}),C.stroke();C.strokeStyle="#c4c393",C.lineWidth=$>300?2:1;for(const W of Ms)C.beginPath(),W.nodes.forEach((w,N)=>{const[O,H]=rt(w.x,w.z);N?C.lineTo(O,H):C.moveTo(O,H)}),C.stroke();for(const W of Jn){const[w,N]=rt(W.x,W.z);C.fillStyle=a.discoveries.includes(W.id)?"#83d8c7":"#c9bccf",C.fillRect(w-3,N-3,6,6),$>300&&(C.font="11px system-ui",C.textAlign="center",C.fillText(W.name,w,N-9))}for(const W of Ha){const[w,N]=rt(W.x,W.z);C.strokeStyle=a.activities.includes(`stunt:${W.id}`)?"#89d2b3":"#f4c477",C.beginPath(),C.arc(w,N,$>300?3:1.6,0,Math.PI*2),C.stroke()}for(const W of be){const[w,N]=rt(W.x,W.z);C.fillStyle=a.visited.includes(W.id)?"#ffd56d":"#d9e9d8",C.beginPath(),C.arc(w,N,$>300?5:2.2,0,Math.PI*2),C.fill(),$>300&&(C.font="600 12px system-ui",C.textAlign="center",C.fillText(W.name,w,N-12))}if(K){const[W,w]=rt(g.x,g.z);C.save(),C.translate(W,w),C.rotate(-g.heading),C.fillStyle="#fff2bb",C.strokeStyle="#155968",C.lineWidth=2,C.beginPath(),C.moveTo(0,-7),C.lineTo(5,6),C.lineTo(0,3),C.lineTo(-5,6),C.closePath(),C.fill(),C.stroke(),C.restore()}for(const W of xi){const w=W.gates[a.trails[W.id]??0];if(!w)continue;const[N,O]=rt(w.x,w.z);C.strokeStyle="#ffe292",C.lineWidth=$>300?2:1,C.strokeRect(N-3,O-3,6,6),$>300&&(C.fillStyle="#fff1c5",C.font="11px system-ui",C.textAlign="center",C.fillText(`${W.name} ${(a.trails[W.id]??0)+1}/6`,N,O+17))}},qt=function(){h.clear(),y=!0,P.open&&P.close(),b.open||b.showModal(),Bt(i("#town-map").getContext("2d"),600),i("#map-progress").textContent=_t()},it=function(){e.setSize(innerWidth,innerHeight),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix()},ct=function(C){requestAnimationFrame(ct);const $=Math.min((C-m)/1e3,.12);if(m=C,y)return;x+=$,Z.frames++,Z.totalTime+=$,Z.frameMs=Z.frameMs*.95+$*1e3*.05,Z.totalTime>1&&(Z.fps=Math.round(Z.frames/Z.totalTime),Z.frames=0,Z.totalTime=0);const K={throttle:Number(h.has("KeyW","ArrowUp"))-Number(h.has("KeyS","ArrowDown")),steer:Number(h.has("KeyD","ArrowRight"))-Number(h.has("KeyA","ArrowLeft")),brake:h.has("Space"),boost:h.has("ShiftLeft","ShiftRight")},rt=Math.max(1,Math.ceil($/(1/60)));for(let W=0;W<rt;W++){const w=cx(g,K,$/rt,l);if(f.step(g,w,(N,O,H)=>{nt(),c.tone(H?1200:900,.22),Y(`${H?"Stunt badge":"New stunt best"} · ${N.id.replaceAll("-"," ")} · ${Math.round(O)} m`)}),w.launched&&!_&&(_={x:g.x,z:g.z}),w.landed&&_){const N=Math.hypot(g.x-_.x,g.z-_.z);A=Math.max(A,N),N>35&&X("jump","Long jump · 35 meters cleared"),_=null}}l.update(x,$,g,W=>{a.coins.push(W),c.tone(600+a.coins.length%7*70),(l.collected===30||l.collected===80)&&Y("Wagon upgraded · more speed and sharper handling"),nt()},W=>{a.broken.push(W),c.tone(120,.1),a.broken.length>=20&&X("smash","Smash trail · 20 props broken"),nt()}),d.update(g,(W,w,N)=>{nt(),c.tone(N?1100:780,.15),Y(N?`${W.name} complete`:`${W.name} · ${w}/6 gates`)});for(const W of Jn)Math.hypot(g.x-W.x,g.z-W.z)<25&&!a.discoveries.includes(W.id)&&(a.discoveries.push(W.id),nt(),c.tone(1050,.2),Y(`Discovered · ${W.name}`));for(const W of be)Math.hypot(g.x-W.x,g.z-W.z)<155&&!a.visited.includes(W.id)&&(a.visited.push(W.id),nt(),a.visited.length===7&&X("explorer","Town explorer · all seven areas discovered"));for(const W of Is)Math.hypot(g.x-W.x,g.z-W.z)<15&&!a.secrets.includes(W.id)&&(a.secrets.push(W.id),nt(),c.tone(1150,.3),Y(`Secret discovered · ${W.name}`));u.position.set(g.x,g.y,g.z),u.rotation.order="YXZ",u.rotation.set(g.pitch,g.heading,g.roll+K.steer*Math.min(Math.abs(g.speed)*.0025,.08));for(const W of u.userData.wheels)W.mesh.rotation.x+=g.speed*$/.73,W.mesh.rotation.y=W.front?-K.steer*.32:0;u.userData.propeller.rotation.z+=g.speed*$*.4,J.set(g.x,g.y+2.2,g.z),G.set(g.x+Math.sin(g.heading)*17,g.y+9,g.z+Math.cos(g.heading)*17),G.y=Math.max(G.y,l.heightAt(G.x,G.z)+3.8);for(let W=1;W<=8;W++){const w=W/8,N=J.x+(G.x-J.x)*w,O=J.y+(G.y-J.y)*w,H=J.z+(G.z-J.z)*w;if([...l.nearbySolids(N,H)].some(q=>O>q.y&&O<q.y+q.height&&Math.abs(N-q.x)<q.w/2+.5&&Math.abs(H-q.z)<q.d/2+.5)){G.lerp(J,1-w+.08);break}}if(r.position.lerp(G,1-Math.exp(-6*$)),r.lookAt(g.x-Math.sin(g.heading)*5,g.y+1.8,g.z-Math.cos(g.heading)*5),o.position.set(g.x-90,g.y+150,g.z+90),o.target.position.set(g.x,g.y,g.z),x-L>.14){i("#score").textContent=a.coins.length,i("#speed-value").textContent=Math.round(Math.abs(g.speed)*3.6),i("#boost").value=g.energy,i("#upgrade").textContent=l.collected>=80?"Boost III":l.collected>=30?"Boost II":"Boost",i("#district").textContent=be.reduce((w,N)=>Math.hypot(g.x-w.x,g.z-w.z)<Math.hypot(g.x-N.x,g.z-N.z)?w:N).name,Bt(z,168),L=x;const W=e.domElement;W.dataset.renderer=n?"software":"webgl",W.dataset.worldSize=gn,W.dataset.activeChunks=[...l.chunks.values()].filter(w=>w.group.visible).length,W.dataset.frameMs=Z.frameMs.toFixed(1),W.dataset.crowns=a.coins.length,W.dataset.position=`${g.x.toFixed(1)},${g.y.toFixed(1)},${g.z.toFixed(1)}`,W.dataset.grounded=g.grounded}x-R>10&&(nt(),R=x),x>M&&S.classList.remove("visible"),(!n||C-p>100)&&(e.render(s,r),n&&(e.domElement.style.background="transparent"),p=C)};const i=C=>document.querySelector(C),t=i("#game"),{renderer:e,software:n}=dg(t),s=new Du;s.fog=new Ra(6670015,n?230:350,n?630:1050);const r=new sn(58,innerWidth/innerHeight,.2,n?650:1250);s.add(new yf(12970472,5401705,n?2:1.45)),n&&s.add(new wf(14282973,.75));const o=new bf(16772545,n?.55:2);o.position.set(-90,150,90),o.castShadow=!n,o.shadow.mapSize.set(1024,1024),o.shadow.camera.left=-60,o.shadow.camera.right=60,o.shadow.camera.top=60,o.shadow.camera.bottom=-60,o.shadow.camera.far=400,o.shadow.bias=-.001,o.shadow.normalBias=.06,s.add(o),s.add(o.target);const a=ix(),l=new Qg(s,a,{software:n}),h=new tx,c=new ex,u=Pg(),d=new $g(a),f=new Kg(a);if(s.add(u),n&&u.traverse(C=>{C.isMesh&&(C.renderOrder=5)}),n){const C=[l.particleMesh,l.bubbleMesh];for(const $ of C)s.remove($);eh(s);for(const $ of C)s.add($),$.visible=!1}let g=ga(a.position??_r(),l.heightAt.bind(l)),x=0,m=performance.now(),p=0,y=!1,M=0,_=null,A=0,R=0,L=0;const P=i("#menu"),b=i("#atlas"),S=i("#toast"),I=i("#minimap"),z=I.getContext("2d"),G=new D,J=new D,Z={fps:0,frameMs:0,frames:0,totalTime:0};i("#total").textContent=l.coins.length,P.addEventListener("cancel",C=>{C.preventDefault(),ht(!1)}),P.addEventListener("close",()=>{b.open||(y=!1,m=performance.now())}),b.addEventListener("cancel",C=>{C.preventDefault(),ht(!1)}),b.addEventListener("close",()=>{P.open||(y=!1,m=performance.now())}),i("#pause").onclick=()=>ht(!0),i("#help").onclick=()=>ht(!0),i("#resume").onclick=()=>ht(!1),i("#close-map").onclick=()=>ht(!1),i("#reset").onclick=()=>Et(l.recover(g.x,g.z),"Back on the nearest road."),i("#sound").onclick=C=>{C.target.textContent=c.toggle()?"Sound on":"Sound off"};const $t=["The three houses & kelp arch","Restaurant landmarks & smash trail","Jellyfish trails & coral grotto","Goofy Goober & pearl garden","Thug Tug & sunken treasure","Dune jumps & mountain lookout","Neptune’s castle & royal garden"],ee=i("#area-list");be.forEach((C,$)=>{const K=document.createElement("button");K.className="area",K.dataset.area=C.id;const rt=document.createElement("strong");rt.textContent=C.name;const W=document.createElement("small");W.textContent=$t[$],K.append(rt,W),K.onclick=()=>{ht(!1),Et(_r(C.id),C.name)},ee.append(K)});for(const C of Jn){const $=document.createElement("button");$.className="area";const K=document.createElement("strong"),rt=document.createElement("small");K.textContent=C.name,rt.textContent="Side path & open exploration",$.append(K,rt),$.onclick=()=>{ht(!1),Et({x:C.x,z:C.z-20,heading:Math.PI},C.name)},ee.append($)}i("#map").onclick=qt,i("#minimap").onclick=qt,addEventListener("keydown",C=>{C.repeat||(C.code==="Escape"&&(C.preventDefault(),ht(!y)),C.code==="KeyR"&&i("#reset").click(),C.code==="KeyM"&&(C.preventDefault(),b.open?ht(!1):qt()))}),addEventListener("blur",()=>{y||ht(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(nt(),ht(!0))}),addEventListener("pagehide",nt),n||(t.addEventListener("webglcontextlost",C=>{C.preventDefault(),nt(),ht(!0);const $=i("#error");$.hidden=!1,$.textContent="Graphics paused. Waiting for the browser to restore the game…"}),t.addEventListener("webglcontextrestored",()=>{i("#error").hidden=!0,Y("Graphics restored · choose Resume to continue")})),addEventListener("resize",it),it(),Et(a.position??_r()),window.__pattyWagon={get state(){return{...g}},get progress(){return structuredClone(a)},get diagnostics(){return{renderer:n?"software":"webgl",worldSize:gn,roadLength:Math.round(Pn.reduce((C,$)=>C+$.length,0)),loopLength:Math.round(Pn[0].length),crowns:l.coins.length,breakables:l.breakables.length,ramps:l.ramps.length,districts:be.length,activeChunks:[...l.chunks.values()].filter(C=>C.group.visible).length,cachedChunks:l.chunks.size,drawCalls:e.info.render.calls??e.info.render.faces,fps:Z.fps,bestJump:A,districtDetails:l.districtObjects.length,scenicGates:l.scenicGates.length,destinations:l.discoveryObjects.length,stuntRings:l.stuntRings.length}}},Y("WASD / arrows · drive   Shift · boost   M · town map"),requestAnimationFrame(ct)}catch(i){const t=document.querySelector("#error");t.hidden=!1,t.textContent=`The underwater town could not start. Refresh the page to try again. ${i.message}`,console.error(i)}
