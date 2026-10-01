(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="180",hh=0,Ba=1,uh=2,sl=1,rl=2,Tn=3,Wn=0,Ge=1,Ve=2,Hn=0,Oi=1,ka=2,Ha=3,Va=4,fh=5,oi=100,dh=101,ph=102,mh=103,gh=104,xh=200,_h=201,vh=202,Mh=203,xo=204,_o=205,yh=206,Sh=207,Eh=208,bh=209,wh=210,Th=211,Ah=212,Rh=213,Ch=214,vo=0,Mo=1,yo=2,Hi=3,So=4,Eo=5,bo=6,wo=7,vr=0,Ph=1,Lh=2,Vn=0,Ih=1,Dh=2,Uh=3,ol=4,Nh=5,Fh=6,Oh=7,al=300,Vi=301,Gi=302,To=303,Ao=304,Mr=306,ms=1e3,ci=1001,Ro=1002,je=1003,zh=1004,Us=1005,Je=1006,Pr=1007,kn=1008,xn=1009,cl=1010,ll=1011,gs=1012,ha=1013,hi=1014,pn=1015,Rs=1016,ua=1017,fa=1018,xs=1020,hl=35902,ul=35899,fl=1021,dl=1022,Ze=1023,_s=1026,vs=1027,da=1028,pa=1029,pl=1030,ma=1031,ga=1033,or=33776,ar=33777,cr=33778,lr=33779,Co=35840,Po=35841,Lo=35842,Io=35843,Do=36196,Uo=37492,No=37496,Fo=37808,Oo=37809,zo=37810,Bo=37811,ko=37812,Ho=37813,Vo=37814,Go=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,$o=37820,Jo=37821,Zo=36492,Ko=36494,jo=36495,Qo=36283,ta=36284,ea=36285,na=36286,Bh=3200,kh=3201,xa=0,Hh=1,An="",Le="srgb",Wi="srgb-linear",pr="linear",he="srgb",gi=7680,Ga=519,Vh=512,Gh=513,Wh=514,ml=515,Xh=516,qh=517,Yh=518,$h=519,Wa=35044,Xa=35048,qa="300 es",mn=2e3,mr=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,ia=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Jh(i,t){return(i%t+t)%t}function Ir(i,t,e){return(1-e)*i+e*t}function ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||h!==f||c!==g){let m=1-a;const p=l*d+h*f+c*g+u*x,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,p*S);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const _=a*S;if(l=l*m+d*_,h=h*m+f*_,c=c*m+g*_,u=u*m+x*_,m===1-a){const R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new I,Ya=new Cs;class Xt{constructor(t,e,n,s,r,o,a,l,h){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],M=s[4],_=s[7],R=s[2],A=s[5],C=s[8];return r[0]=o*x+a*S+l*R,r[3]=o*m+a*M+l*A,r[6]=o*p+a*_+l*C,r[1]=h*x+c*S+u*R,r[4]=h*m+c*M+u*A,r[7]=h*p+c*_+u*C,r[2]=d*x+f*S+g*R,r[5]=d*m+f*M+g*A,r[8]=d*p+f*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*h-c*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Xt;function gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){const i=gr("canvas");return i.style.display="block",i}const $a={};function Ms(i){i in $a||($a[i]=!0,console.warn(i))}function Kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ja=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Za=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){const i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:Ja,fromXYZ:Za,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Ja,fromXYZ:Za,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const ie=jh();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class Qh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xi===void 0&&(xi=gr("canvas")),xi.width=t.width,xi.height=t.height;const s=xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tu=0;class _a{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nr(s[o].image)):r.push(Nr(s[o]))}else r=Nr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;const Fr=new I;class Oe extends $i{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=ci,s=ci,r=Je,o=kn,a=Ze,l=xn,h=Oe.DEFAULT_ANISOTROPY,c=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ji(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=al;Oe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,_=(f+1)/2,R=(p+1)/2,A=(c+d)/4,C=(u+x)/4,P=(g+m)/4;return M>_&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=C/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Oe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _a(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xl extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Fs.subVectors(this.max,is),_i.subVectors(t.a,is),vi.subVectors(t.b,is),Mi.subVectors(t.c,is),Dn.subVectors(vi,_i),Un.subVectors(Mi,vi),Jn.subVectors(_i,Mi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Jn.z,Jn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Jn.z,0,-Jn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Jn.y,Jn.x,0];return!Or(e,_i,vi,Mi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,_i,vi,Mi,Fs))?!1:(Os.crossVectors(Dn,Un),e=[Os.x,Os.y,Os.z],Or(e,_i,vi,Mi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,Ns=new Ln,_i=new I,vi=new I,Mi=new I,Dn=new I,Un=new I,Jn=new I,is=new I,Fs=new I,Os=new I,Zn=new I;function Or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zn.fromArray(i,r);const a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),h=e.dot(Zn),c=n.dot(Zn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const su=new Ln,ss=new I,zr=new I;class Ps{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(zr)),this.expandByPoint(ss.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const yn=new I,Br=new I,zs=new I,Nn=new I,kr=new I,Bs=new I,Hr=new I;class ru{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Br.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=Nn.dot(this.direction),l=-Nn.dot(zs),h=Nn.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){const x=1/c;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Br).addScaledVector(zs,d),f}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){kr.subVectors(e,t),Bs.subVectors(n,t),Hr.crossVectors(kr,Bs);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(Bs.crossVectors(Nn,Bs));if(l<0)return null;const h=a*this.direction.dot(kr.cross(Nn));if(h<0||l+h>o)return null;const c=-a*Nn.dot(Hr);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,l,h,c,u,d,f,g,x,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,l,h,c,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-x*h,e[9]=-a*l,e[2]=x-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+x,e[1]=l*u,e[5]=x*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+x,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ou,t,au)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Fn.crossVectors(n,qe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Fn.crossVectors(n,qe)),Fn.normalize(),ks.crossVectors(qe,Fn),s[0]=Fn.x,s[4]=ks.x,s[8]=qe.x,s[1]=Fn.y,s[5]=ks.y,s[9]=qe.y,s[2]=Fn.z,s[6]=ks.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],M=n[7],_=n[11],R=n[15],A=s[0],C=s[4],P=s[8],b=s[12],y=s[1],L=s[5],F=s[9],X=s[13],q=s[2],Z=s[6],Y=s[10],st=s[14],$=s[3],ht=s[7],gt=s[11],wt=s[15];return r[0]=o*A+a*y+l*q+h*$,r[4]=o*C+a*L+l*Z+h*ht,r[8]=o*P+a*F+l*Y+h*gt,r[12]=o*b+a*X+l*st+h*wt,r[1]=c*A+u*y+d*q+f*$,r[5]=c*C+u*L+d*Z+f*ht,r[9]=c*P+u*F+d*Y+f*gt,r[13]=c*b+u*X+d*st+f*wt,r[2]=g*A+x*y+m*q+p*$,r[6]=g*C+x*L+m*Z+p*ht,r[10]=g*P+x*F+m*Y+p*gt,r[14]=g*b+x*X+m*st+p*wt,r[3]=S*A+M*y+_*q+R*$,r[7]=S*C+M*L+_*Z+R*ht,r[11]=S*P+M*F+_*Y+R*gt,r[15]=S*b+M*X+_*st+R*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*h*u-r*a*d+n*h*d+s*a*f-n*l*f)+x*(+e*l*f-e*h*d+r*o*d-s*o*f+s*h*c-r*l*c)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-s*a*c-e*l*u+e*a*d+s*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=u*m*h-x*d*h+x*l*f-a*m*f-u*l*p+a*d*p,M=g*d*h-c*m*h-g*l*f+o*m*f+c*l*p-o*d*p,_=c*x*h-g*u*h+g*a*f-o*x*f-c*a*p+o*u*p,R=g*u*l-c*x*l-g*a*d+o*x*d+c*a*m-o*u*m,A=e*S+n*M+s*_+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(a*m*r-x*l*r+x*s*h-n*m*h-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*d*r-u*s*h+n*d*h+a*s*f-n*l*f)*C,t[4]=M*C,t[5]=(c*m*r-g*d*r+g*s*f-e*m*f-c*s*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*s*h+e*m*h+o*s*p-e*l*p)*C,t[7]=(o*d*r-c*l*r+c*s*h-e*d*h-o*s*f+e*l*f)*C,t[8]=_*C,t[9]=(g*u*r-c*x*r-g*n*f+e*x*f+c*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*C,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*C,t[12]=R*C,t[13]=(c*x*s-g*u*s+g*n*d-e*x*d-c*n*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-c*a*s+c*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,g=r*u,x=o*c,m=o*u,p=a*u,S=l*h,M=l*c,_=l*u,R=n.x,A=n.y,C=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+_)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+M)*C,s[9]=(m-S)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const h=1/r,c=1/o,u=1/a;return an.elements[0]*=h,an.elements[1]*=h,an.elements[2]*=h,an.elements[4]*=c,an.elements[5]*=c,an.elements[6]*=c,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn,l=!1){const h=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===mn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===mr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn,l=!1){const h=this.elements,c=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===mn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===mr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new I,an=new se,ou=new I(0,0,0),au=new I(1,1,1),Fn=new I,ks=new I,qe=new I,Ka=new se,ja=new Cs;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ka.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ka,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ja.setFromEuler(this),this.setFromQuaternion(ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cu=0;const Qa=new I,Si=new Cs,Sn=new se,Hs=new I,rs=new I,lu=new I,hu=new Cs,tc=new I(1,0,0),ec=new I(0,1,0),nc=new I(0,0,1),ic={type:"added"},uu={type:"removed"},Ei={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Ae extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new hn,n=new Cs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Xt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Qa.copy(t).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(rs,Hs,this.up):Sn.lookAt(Hs,rs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Sn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,En=new I,Gr=new I,bn=new I,bi=new I,wi=new I,sc=new I,Wr=new I,Xr=new I,qr=new I,Yr=new pe,$r=new pe,Jr=new pe;class ln{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),En.subVectors(n,e),Gr.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(En),l=cn.dot(Gr),h=En.dot(En),c=En.dot(Gr),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Yr.setScalar(0),$r.setScalar(0),Jr.setScalar(0),Yr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yr,r.x),o.addScaledVector($r,r.y),o.addScaledVector(Jr,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),En.subVectors(t,e),cn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),cn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;bi.subVectors(s,n),wi.subVectors(r,n),Wr.subVectors(t,n);const l=bi.dot(Wr),h=wi.dot(Wr);if(l<=0&&h<=0)return e.copy(n);Xr.subVectors(t,s);const c=bi.dot(Xr),u=wi.dot(Xr);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(bi,o);qr.subVectors(t,r);const f=bi.dot(qr),g=wi.dot(qr);if(g>=0&&f<=g)return e.copy(r);const x=f*h-l*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(wi,a);const m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return sc.subVectors(r,s),a=(u-c)/(u-c+(f-g)),e.copy(s).addScaledVector(sc,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(bi,o).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Jh(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zr(o,r,t+1/3),this.g=Zr(o,r,t),this.b=Zr(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=vl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ie.workingToColorSpace(Fe.copy(this),t),Math.round(Zt(Fe.r*255,0,255))*65536+Math.round(Zt(Fe.g*255,0,255))*256+Math.round(Zt(Fe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Le){ie.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Vs);const n=Ir(On.h,Vs.h,e),s=Ir(On.s,Vs.s,e),r=Ir(On.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Gt;Gt.NAMES=vl;let fu=0;class Zi extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Oi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=_o,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yr extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new I,Gs=new pt;let du=0;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),t}}class Ml extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yl extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pu=0;const en=new se,Kr=new Ae,Ti=new I,Ye=new Ln,os=new Ln,Pe=new I;class Me extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gl(t)?yl:Ml)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ye.min,os.min),Ye.expandByPoint(Pe),Pe.addVectors(Ye.max,os.max),Ye.expandByPoint(Pe)):(Ye.expandByPoint(os.min),Ye.expandByPoint(os.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Pe.fromBufferAttribute(a,h),l&&(Ti.fromBufferAttribute(t,h),Pe.add(Ti)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const h=new I,c=new I,u=new I,d=new pt,f=new pt,g=new pt,x=new I,m=new I;function p(P,b,y){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),c.sub(h),u.sub(h),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(L),a[P].add(x),a[b].add(x),a[y].add(x),l[P].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,b=S.length;P<b;++P){const y=S[P],L=y.start,F=y.count;for(let X=L,q=L+F;X<q;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const M=new I,_=new I,R=new I,A=new I;function C(P){R.fromBufferAttribute(s,P),A.copy(R);const b=a[P];M.copy(b),M.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(A,b);const L=_.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,b=S.length;P<b;++P){const y=S[P],L=y.start,F=y.count;for(let X=L,q=L+F;X<q;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,h=new I,c=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new Ue(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new se,Kn=new ru,Ws=new Ps,oc=new I,Xs=new I,qs=new I,Ys=new I,jr=new I,$s=new I,ac=new I,Js=new I;class Ke extends Ae{constructor(t=new Me,e=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(jr.fromBufferAttribute(u,t),o?$s.addScaledVector(jr,c):$s.addScaledVector(jr.sub(e),c))}e.add($s)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Ws.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ws,oc)===null||Kn.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(rc.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,R=M;_<R;_+=3){const A=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=Zs(this,p,t,n,h,c,u,A,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Zs(this,o,t,n,h,c,u,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,R=M;_<R;_+=3){const A=_,C=_+1,P=_+2;s=Zs(this,p,t,n,h,c,u,A,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,M=m+1,_=m+2;s=Zs(this,o,t,n,h,c,u,S,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mu(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Wn,a),l===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Js);return h<e.near||h>e.far?null:{distance:h,point:Js.clone(),object:i}}function Zs(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(h,Ys);const c=mu(i,t,e,n,Xs,qs,Ys,ac);if(c){const u=new I;ln.getBarycoord(ac,Xs,qs,Ys,u),s&&(c.uv=ln.getInterpolatedAttribute(s,a,l,h,u,new pt)),r&&(c.uv1=ln.getInterpolatedAttribute(r,a,l,h,u,new pt)),o&&(c.normal=ln.getInterpolatedAttribute(o,a,l,h,u,new I),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new I,materialIndex:0};ln.getNormal(Xs,qs,Ys,d.normal),c.face=d,c.barycoord=u}return c}class pi extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2));function g(x,m,p,S,M,_,R,A,C,P,b){const y=_/C,L=R/P,F=_/2,X=R/2,q=A/2,Z=C+1,Y=P+1;let st=0,$=0;const ht=new I;for(let gt=0;gt<Y;gt++){const wt=gt*L-X;for(let Bt=0;Bt<Z;Bt++){const Yt=Bt*y-F;ht[x]=Yt*S,ht[m]=wt*M,ht[p]=q,h.push(ht.x,ht.y,ht.z),ht[x]=0,ht[m]=0,ht[p]=A>0?1:-1,c.push(ht.x,ht.y,ht.z),u.push(Bt/C),u.push(1-gt/P),st+=1}}for(let gt=0;gt<P;gt++)for(let wt=0;wt<C;wt++){const Bt=d+wt+Z*gt,Yt=d+wt+Z*(gt+1),Kt=d+(wt+1)+Z*(gt+1),$t=d+(wt+1)+Z*gt;l.push(Bt,Yt,$t),l.push(Yt,Kt,$t),$+=6}a.addGroup(f,$,b),f+=$,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function gu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const xu={clone:Xi,merge:Be};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class va extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new I,cc=new pt,lc=new pt;class sn extends va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,cc,lc),e.subVectors(lc,cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class Mu extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Ai,Ri,t,e);s.layers=this.layers,this.add(s);const r=new sn(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const o=new sn(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const a=new sn(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const l=new sn(Ai,Ri,t,e);l.layers=this.layers,this.add(l);const h=new sn(Ai,Ri,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class El extends Oe{constructor(t=[],e=Vi,n,s,r,o,a,l,h,c){super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new El(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pi(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Hn});r.uniforms.tEquirect.value=e;const o=new Ke(s,r),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=Je),new Mu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ce extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Su={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Su)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ma{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eu extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ks=new I,hc=new I;class bu extends Ae{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,s=e.length;n<s;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Ks.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(Ks);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Ks.setFromMatrixPosition(t.matrixWorld),hc.setFromMatrixPosition(this.matrixWorld);const n=Ks.distanceTo(hc)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),n>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class ya extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,h=je,c=je,u,d){super(null,o,a,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ci=new se,fc=new se,js=[],dc=new Ln,wu=new se,as=new Ke,cs=new Ps;class Pi extends Ke{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),dc.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),cs.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),t.ray.intersectsSphere(cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),fc.multiplyMatrices(n,Ci),as.matrixWorld=fc,as.raycast(t,js);for(let o=0,a=js.length;o<a;o++){const l=js[o];l.instanceId=r,l.object=this,e.push(l)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ya(new Float32Array(s*this.count),s,this.count,da,pn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const to=new I,Tu=new I,Au=new Xt;class si{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=to.subVectors(n,e).cross(Tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(to),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Au.getNormalMatrix(t),s=this.coplanarPoint(to).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Ps,Ru=new pt(.5,.5),Qs=new I;class Sr{constructor(t=new si,e=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],M=r[13],_=r[14],R=r[15];if(s[0].setComponents(h-o,f-c,p-g,R-S).normalize(),s[1].setComponents(h+o,f+c,p+g,R+S).normalize(),s[2].setComponents(h+a,f+u,p+x,R+M).normalize(),s[3].setComponents(h-a,f-u,p-x,R-M).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(h-l,f-d,p-m,R-_).normalize();else if(s[4].setComponents(h-l,f-d,p-m,R-_).normalize(),e===mn)s[5].setComponents(h+l,f+d,p+m,R+_).normalize();else if(e===mr)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);const e=Ru.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bl extends Oe{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wl extends Oe{constructor(t,e,n=hi,s,r,o,a=je,l=je,h,c=_s,u=1){if(c!==_s&&c!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tl extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qn extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function S(){const _=new I,R=new I;let A=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const b=[],y=P/r,L=y*(e-t)+t;for(let F=0;F<=s;F++){const X=F/s,q=X*l+a,Z=Math.sin(q),Y=Math.cos(q);R.x=L*Z,R.y=-y*n+m,R.z=L*Y,u.push(R.x,R.y,R.z),_.set(Z,C,Y).normalize(),d.push(_.x,_.y,_.z),f.push(X,1-y),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const y=x[b][P],L=x[b+1][P],F=x[b+1][P+1],X=x[b][P+1];(t>0||b!==0)&&(c.push(y,L,X),A+=3),(e>0||b!==r-1)&&(c.push(L,F,X),A+=3)}h.addGroup(p,A,0),p+=A}function M(_){const R=g,A=new pt,C=new I;let P=0;const b=_===!0?t:e,y=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const q=F/s*l+a,Z=Math.cos(q),Y=Math.sin(q);C.x=b*Y,C.y=m*y,C.z=b*Z,u.push(C.x,C.y,C.z),d.push(0,y,0),A.x=Z*.5+.5,A.y=Y*.5*y+.5,f.push(A.x,A.y),g++}for(let F=0;F<s;F++){const X=R+F,q=L+F;_===!0?c.push(q,q+1,X):c.push(q+1,q,X),P+=3}h.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rn extends qn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new rn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sa extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new I,_=new I,R=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],_),f(e[A+2],R),l(M,_,R,S)}function l(S,M,_,R){const A=R+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const b=S.clone().lerp(_,P/A),y=M.clone().lerp(_,P/A),L=A-P;for(let F=0;F<=L;F++)F===0&&P===A?C[P][F]=b:C[P][F]=b.clone().lerp(y,F/L)}for(let P=0;P<A;P++)for(let b=0;b<2*(A-P)-1;b++){const y=Math.floor(b/2);b%2===0?(d(C[P][y+1]),d(C[P+1][y]),d(C[P][y])):(d(C[P][y+1]),d(C[P+1][y+1]),d(C[P+1][y]))}}function h(S){const M=new I;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(S),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function c(){const S=new I;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const _=m(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;o.push(_,1-R)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const M=o[S+0],_=o[S+2],R=o[S+4],A=Math.max(M,_,R),C=Math.min(M,_,R);A>.9&&C<.1&&(M<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,M){const _=S*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const S=new I,M=new I,_=new I,R=new I,A=new pt,C=new pt,P=new pt;for(let b=0,y=0;b<r.length;b+=9,y+=6){S.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),A.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),R.copy(S).add(M).add(_).divideScalar(3);const L=m(R);x(A,y+0,S,L),x(C,y+2,M,L),x(P,y+4,_,L)}}function x(S,M,_,R){R<0&&S.x===1&&(o[M]=S.x-1),_.x===0&&_.z===0&&(o[M]=R/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.vertices,t.indices,t.radius,t.details)}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new se;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends _n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cu extends Ea{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const tr=new I,eo=new ba,no=new ba,io=new ba;class wa extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(tr.subVectors(s[0],s[1]).add(s[0]),h=tr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=tr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),eo.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,x,m),no.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,x,m),io.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),no.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),io.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(eo.calc(l),no.calc(l),io.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Pu(i,t){const e=1-i;return e*e*t}function Lu(i,t){return 2*(1-i)*i*t}function Iu(i,t){return i*i*t}function ds(i,t,e,n){return Pu(i,t)+Lu(i,e)+Iu(i,n)}function Du(i,t){const e=1-i;return e*e*e*t}function Uu(i,t){const e=1-i;return 3*e*e*i*t}function Nu(i,t){return 3*(1-i)*i*i*t}function Fu(i,t){return i*i*i*t}function ps(i,t,e,n,s){return Du(i,t)+Uu(i,e)+Nu(i,n)+Fu(i,s)}class Al extends _n{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,s.x,r.x,o.x,a.x),ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ou extends _n{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,s.x,r.x,o.x,a.x),ps(t,s.y,r.y,o.y,a.y),ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rl extends _n{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends _n{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cl extends _n{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pl extends _n{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ds(t,s.x,r.x,o.x),ds(t,s.y,r.y,o.y),ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ll extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(pc(a,l.x,h.x,c.x,u.x),pc(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var xr=Object.freeze({__proto__:null,ArcCurve:Cu,CatmullRomCurve3:wa,CubicBezierCurve:Al,CubicBezierCurve3:Ou,EllipseCurve:Ea,LineCurve:Rl,LineCurve3:zu,QuadraticBezierCurve:Cl,QuadraticBezierCurve3:Pl,SplineCurve:Ll});class Bu extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xr[s.type]().fromJSON(s))}return this}}class mc extends Bu{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rl(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Cl(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Al(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ll(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new Ea(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ki extends mc{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new mc().fromJSON(s))}return this}}function ku(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Il(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=Xu(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let c=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>c&&(c=f),g>u&&(u=g)}h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return ys(r,o,e,a,l,h,0),o}function Il(i,t,e,n,s){let r;if(s===nf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=gc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=gc(o/n|0,i[o],i[o+1],r);return r&&qi(r,r.next)&&(Es(r),r=r.next),r}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qi(e,e.next)||xe(e.prev,e,e.next)===0)){if(Es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Zu(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,h=i.next;if(r?Vu(i,n,s,r):Hu(i)){t.push(l.i,i.i,h.i),Es(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Gu(fi(i),t),ys(i,t,e,n,s,r,2)):o===2&&Wu(i,t,e,n,s,r):ys(fi(i),t,e,n,s,r,1);break}}}function Hu(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=Math.min(s,r,o),u=Math.min(a,l,h),d=Math.max(s,r,o),f=Math.max(a,l,h);let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&hs(s,a,r,l,o,h,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vu(i,t,e,n){const s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,u=r.y,d=o.y,f=Math.min(a,l,h),g=Math.min(c,u,d),x=Math.max(a,l,h),m=Math.max(c,u,d),p=sa(f,g,t,e,n),S=sa(x,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=S;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&hs(a,c,l,u,h,d,M.x,M.y)&&xe(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&hs(a,c,l,u,h,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&hs(a,c,l,u,h,d,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&hs(a,c,l,u,h,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Gu(i,t){let e=i;do{const n=e.prev,s=e.next.next;!qi(n,s)&&Ul(n,e,e.next,s)&&Ss(n,s)&&Ss(s,n)&&(t.push(n.i,e.i,s.i),Es(e),Es(e.next),e=i=s),e=e.next}while(e!==i);return fi(e)}function Wu(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qu(o,a)){let l=Nl(o,a);o=fi(o,o.next),l=fi(l,l.next),ys(o,t,e,n,s,r,0),ys(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xu(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=Il(i,a,l,n,!1);h===h.next&&(h.steiner=!0),s.push(ju(h))}s.sort(qu);for(let r=0;r<s.length;r++)e=Yu(s[r],e);return e}function qu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Yu(i,t){const e=$u(i,t);if(!e)return t;const n=Nl(e,i);return fi(n,n.next),fi(e,e.next)}function $u(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(qi(i,e))return e;do{if(qi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let c=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Dl(s<h?n:r,s,l,h,s<h?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Ss(e,i)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&Ju(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function Ju(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Zu(i,t,e,n){let s=i;do s.z===0&&(s.z=sa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ku(s)}function Ku(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function sa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ju(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Dl(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Dl(i,t,e,n,s,r,o,a)}function Qu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tf(i,t)&&(Ss(i,t)&&Ss(t,i)&&ef(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||qi(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qi(i,t){return i.x===t.x&&i.y===t.y}function Ul(i,t,e,n){const s=nr(xe(i,t,e)),r=nr(xe(i,t,n)),o=nr(xe(e,n,i)),a=nr(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&er(i,e,t)||r===0&&er(i,n,t)||o===0&&er(e,i,n)||a===0&&er(e,t,n))}function er(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function nr(i){return i>0?1:i<0?-1:0}function tf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ul(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ss(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function ef(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nl(i,t){const e=ra(i.i,i.x,i.y),n=ra(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gc(i,t,e,n){const s=ra(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ra(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class sf{static triangulate(t,e,n=2){return ku(t,e,n)}}class Rn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Rn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xc(t),_c(n,t);let o=t.length;e.forEach(xc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,_c(n,e[l]);const a=sf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function xc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _c(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ta extends Me{constructor(t=new Ki([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:rf;let M,_=!1,R,A,C,P;p&&(M=p.getSpacedPoints(c),_=!0,d=!1,R=p.computeFrenetFrames(c,!1),A=new I,C=new I,P=new I),d||(m=0,f=0,g=0,x=0);const b=a.extractPoints(h);let y=b.shape;const L=b.holes;if(!Rn.isClockWise(y)){y=y.reverse();for(let z=0,H=L.length;z<H;z++){const V=L[z];Rn.isClockWise(V)&&(L[z]=V.reverse())}}function X(z){const V=10000000000000001e-36;let K=z[0];for(let lt=1;lt<=z.length;lt++){const J=lt%z.length,rt=z[J],It=rt.x-K.x,mt=rt.y-K.y,E=It*It+mt*mt,v=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(K.x),Math.abs(K.y)),U=V*v*v;if(E<=U){z.splice(J,1),lt--;continue}K=rt}}X(y),L.forEach(X);const q=L.length,Z=y;for(let z=0;z<q;z++){const H=L[z];y=y.concat(H)}function Y(z,H,V){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(H,V)}const st=y.length;function $(z,H,V){let K,lt,J;const rt=z.x-H.x,It=z.y-H.y,mt=V.x-z.x,E=V.y-z.y,v=rt*rt+It*It,U=rt*E-It*mt;if(Math.abs(U)>Number.EPSILON){const G=Math.sqrt(v),it=Math.sqrt(mt*mt+E*E),et=H.x-It/G,At=H.y+rt/G,ft=V.x-E/it,Rt=V.y+mt/it,Tt=((ft-et)*E-(Rt-At)*mt)/(rt*E-It*mt);K=et+rt*Tt-z.x,lt=At+It*Tt-z.y;const ut=K*K+lt*lt;if(ut<=2)return new pt(K,lt);J=Math.sqrt(ut/2)}else{let G=!1;rt>Number.EPSILON?mt>Number.EPSILON&&(G=!0):rt<-Number.EPSILON?mt<-Number.EPSILON&&(G=!0):Math.sign(It)===Math.sign(E)&&(G=!0),G?(K=-It,lt=rt,J=Math.sqrt(v)):(K=rt,lt=It,J=Math.sqrt(v/2))}return new pt(K/J,lt/J)}const ht=[];for(let z=0,H=Z.length,V=H-1,K=z+1;z<H;z++,V++,K++)V===H&&(V=0),K===H&&(K=0),ht[z]=$(Z[z],Z[V],Z[K]);const gt=[];let wt,Bt=ht.concat();for(let z=0,H=q;z<H;z++){const V=L[z];wt=[];for(let K=0,lt=V.length,J=lt-1,rt=K+1;K<lt;K++,J++,rt++)J===lt&&(J=0),rt===lt&&(rt=0),wt[K]=$(V[K],V[J],V[rt]);gt.push(wt),Bt=Bt.concat(wt)}let Yt;if(m===0)Yt=Rn.triangulateShape(Z,L);else{const z=[],H=[];for(let V=0;V<m;V++){const K=V/m,lt=f*Math.cos(K*Math.PI/2),J=g*Math.sin(K*Math.PI/2)+x;for(let rt=0,It=Z.length;rt<It;rt++){const mt=Y(Z[rt],ht[rt],J);ot(mt.x,mt.y,-lt),K===0&&z.push(mt)}for(let rt=0,It=q;rt<It;rt++){const mt=L[rt];wt=gt[rt];const E=[];for(let v=0,U=mt.length;v<U;v++){const G=Y(mt[v],wt[v],J);ot(G.x,G.y,-lt),K===0&&E.push(G)}K===0&&H.push(E)}}Yt=Rn.triangulateShape(z,H)}const Kt=Yt.length,$t=g+x;for(let z=0;z<st;z++){const H=d?Y(y[z],Bt[z],$t):y[z];_?(C.copy(R.normals[0]).multiplyScalar(H.x),A.copy(R.binormals[0]).multiplyScalar(H.y),P.copy(M[0]).add(C).add(A),ot(P.x,P.y,P.z)):ot(H.x,H.y,0)}for(let z=1;z<=c;z++)for(let H=0;H<st;H++){const V=d?Y(y[H],Bt[H],$t):y[H];_?(C.copy(R.normals[z]).multiplyScalar(V.x),A.copy(R.binormals[z]).multiplyScalar(V.y),P.copy(M[z]).add(C).add(A),ot(P.x,P.y,P.z)):ot(V.x,V.y,u/c*z)}for(let z=m-1;z>=0;z--){const H=z/m,V=f*Math.cos(H*Math.PI/2),K=g*Math.sin(H*Math.PI/2)+x;for(let lt=0,J=Z.length;lt<J;lt++){const rt=Y(Z[lt],ht[lt],K);ot(rt.x,rt.y,u+V)}for(let lt=0,J=L.length;lt<J;lt++){const rt=L[lt];wt=gt[lt];for(let It=0,mt=rt.length;It<mt;It++){const E=Y(rt[It],wt[It],K);_?ot(E.x,E.y+M[c-1].y,M[c-1].x+V):ot(E.x,E.y,u+V)}}}nt(),D();function nt(){const z=s.length/3;if(d){let H=0,V=st*H;for(let K=0;K<Kt;K++){const lt=Yt[K];Q(lt[2]+V,lt[1]+V,lt[0]+V)}H=c+m*2,V=st*H;for(let K=0;K<Kt;K++){const lt=Yt[K];Q(lt[0]+V,lt[1]+V,lt[2]+V)}}else{for(let H=0;H<Kt;H++){const V=Yt[H];Q(V[2],V[1],V[0])}for(let H=0;H<Kt;H++){const V=Yt[H];Q(V[0]+st*c,V[1]+st*c,V[2]+st*c)}}n.addGroup(z,s.length/3-z,0)}function D(){const z=s.length/3;let H=0;O(Z,H),H+=Z.length;for(let V=0,K=L.length;V<K;V++){const lt=L[V];O(lt,H),H+=lt.length}n.addGroup(z,s.length/3-z,1)}function O(z,H){let V=z.length;for(;--V>=0;){const K=V;let lt=V-1;lt<0&&(lt=z.length-1);for(let J=0,rt=c+m*2;J<rt;J++){const It=st*J,mt=st*(J+1),E=H+K+It,v=H+lt+It,U=H+lt+mt,G=H+K+mt;W(E,v,U,G)}}}function ot(z,H,V){l.push(z),l.push(H),l.push(V)}function Q(z,H,V){ct(z),ct(H),ct(V);const K=s.length/3,lt=S.generateTopUV(n,s,K-3,K-2,K-1);T(lt[0]),T(lt[1]),T(lt[2])}function W(z,H,V,K){ct(z),ct(H),ct(K),ct(H),ct(V),ct(K);const lt=s.length/3,J=S.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);T(J[0]),T(J[1]),T(J[3]),T(J[1]),T(J[2]),T(J[3])}function ct(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function T(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return of(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xr[s.type]().fromJSON(s)),new Ta(n,t.options)}}const rf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],c=t[s*3+1];return[new pt(r,o),new pt(a,l),new pt(h,c)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new pt(o,1-l),new pt(h,1-u),new pt(d,1-g),new pt(x,1-p)]:[new pt(a,1-l),new pt(c,1-u),new pt(f,1-g),new pt(m,1-p)]}};function of(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bs extends Sa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bs(t.radius,t.detail)}}class Aa extends Me{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Zt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],c=1/e,u=new I,d=new pt,f=new I,g=new I,x=new I;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=e;S++){const M=n+S*c*s,_=Math.sin(M),R=Math.cos(M);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*_,u.y=t[A].y,u.z=t[A].x*R,o.push(u.x,u.y,u.z),d.x=S/e,d.y=A/(t.length-1),a.push(d.x,d.y);const C=l[3*A+0]*_,P=l[3*A+1],b=l[3*A+0]*R;h.push(C,P,b)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const _=M+S*t.length,R=_,A=_+t.length,C=_+t.length+1,P=_+1;r.push(R,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.points,t.segments,t.phiStart,t.phiLength)}}class ji extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<c;p++){const S=p*d-o;for(let M=0;M<h;M++){const _=M*u-r;g.push(_,-S,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const M=S+h*p,_=S+h*(p+1),R=S+1+h*(p+1),A=S+1+h*p;f.push(M,_,A),f.push(_,R,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ls extends Me{constructor(t=new Ki([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function h(c){const u=s.length/3,d=c.extractPoints(e);let f=d.shape;const g=d.holes;Rn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Rn.isClockWise(S)===!0&&(g[m]=S.reverse())}const x=Rn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){const S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){const S=x[m],M=S[0]+u,_=S[1]+u,R=S[2]+u;n.push(M,_,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return af(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ls(n,t.curveSegments)}}function af(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class In extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+_,1-M),S.push(h++)}c.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const M=c[p][S+1],_=c[p][S],R=c[p+1][S],A=c[p+1][S+1];(p!==0||o>0)&&f.push(M,_,A),(p!==n-1||l<Math.PI)&&f.push(_,R,A)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qi extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Er extends Me{constructor(t=new Pl(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,h=new pt;let c=new I;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),S(),p()}function m(M){c=t.getPointAt(M/e,c);const _=o.normals[M],R=o.binormals[M];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,P=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+P*R.x,l.y=b*_.y+P*R.y,l.z=b*_.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const R=(s+1)*(M-1)+(_-1),A=(s+1)*M+(_-1),C=(s+1)*M+_,P=(s+1)*(M-1)+_;g.push(R,A,P),g.push(A,C,P)}}function S(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)h.x=M/e,h.y=_/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Er(new xr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class br extends Zi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cf extends Zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lf extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hf extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ra extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class uf extends Ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const so=new se,vc=new I,Mc=new I;class ff{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fl extends va{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class df extends ff{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pf extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new df}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mf extends Ra{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gf extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const yc=new pt;class Sc{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function Ec(i,t,e,n){const s=xf(n);switch(e){case fl:return i*t;case da:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case dl:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case or:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:case Io:return Math.max(i,16)*Math.max(t,8)/4;case Co:case Lo:return Math.max(i,8)*Math.max(t,8)/2;case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xf(i){switch(i){case xn:case cl:return{byteLength:1,components:1};case gs:case ll:case Rs:return{byteLength:2,components:1};case ua:case fa:return{byteLength:2,components:4};case hi:case ha:case pn:return{byteLength:4,components:1};case hl:case ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ol(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _f(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vf=`#define PI 3.141592653589793
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
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
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
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
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
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
#endif`,xd=`struct PhysicalMaterial {
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
}`,_d=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rd=`#if defined( USE_POINTS_UV )
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
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Id=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,Bp=`#define NORMAL
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
}`,kp=`#define PHONG
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
}`,Hp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,Gp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Jp=`uniform vec3 color;
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
}`,Zp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:vf,alphahash_pars_fragment:Mf,alphamap_fragment:yf,alphamap_pars_fragment:Sf,alphatest_fragment:Ef,alphatest_pars_fragment:bf,aomap_fragment:wf,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:If,bumpmap_pars_fragment:Df,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:zf,color_pars_fragment:Bf,color_pars_vertex:kf,color_vertex:Hf,common:Vf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:qf,emissivemap_fragment:Yf,emissivemap_pars_fragment:$f,colorspace_fragment:Jf,colorspace_pars_fragment:Zf,envmap_fragment:Kf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Qf,envmap_pars_vertex:td,envmap_physical_pars_fragment:ud,envmap_vertex:ed,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:od,lightmap_pars_fragment:ad,lights_lambert_fragment:cd,lights_lambert_pars_fragment:ld,lights_pars_begin:hd,lights_toon_fragment:fd,lights_toon_pars_fragment:dd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:xd,lights_fragment_begin:_d,lights_fragment_maps:vd,lights_fragment_end:Md,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:bd,map_fragment:wd,map_pars_fragment:Td,map_particle_fragment:Ad,map_particle_pars_fragment:Rd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Id,morphnormal_vertex:Dd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:Fd,normal_fragment_maps:Od,normal_pars_fragment:zd,normal_pars_vertex:Bd,normal_vertex:kd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:$d,project_vertex:Jd,dithering_fragment:Zd,dithering_pars_fragment:Kd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:ep,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:op,skinnormal_vertex:ap,specularmap_fragment:cp,specularmap_pars_fragment:lp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:fp,transmission_pars_fragment:dp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:xp,background_vert:_p,background_frag:vp,backgroundCube_vert:Mp,backgroundCube_frag:yp,cube_vert:Sp,cube_frag:Ep,depth_vert:bp,depth_frag:wp,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Ip,meshbasic_frag:Dp,meshlambert_vert:Up,meshlambert_frag:Np,meshmatcap_vert:Fp,meshmatcap_frag:Op,meshnormal_vert:zp,meshnormal_frag:Bp,meshphong_vert:kp,meshphong_frag:Hp,meshphysical_vert:Vp,meshphysical_frag:Gp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:$p,shadow_frag:Jp,sprite_vert:Zp,sprite_frag:Kp},yt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},dn={basic:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Be([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Be([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Be([yt.points,yt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Be([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Be([yt.common,yt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Be([yt.sprite,yt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Be([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Be([yt.lights,yt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};dn.physical={uniforms:Be([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ir={r:0,b:0,g:0},Qn=new hn,jp=new se;function Qp(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const R=g(M);R===null?p(a,l):R&&R.isColor&&(p(R,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===Mr)?(c===void 0&&(c=new Ke(new pi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Xi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Qn.copy(_.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(Qn)),c.material.toneMapped=ie.getTransfer(R.colorSpace)!==he,(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Ke(new ji(2,2),new Xn({name:"BackgroundMaterial",uniforms:Xi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=ie.getTransfer(R.colorSpace)!==he,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,_){M.getRGB(ir,Sl(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,_,o)}function S(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m,dispose:S}}function tm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,L,F,X,q){let Z=!1;const Y=u(X,F,L);r!==Y&&(r=Y,h(r.object)),Z=f(y,X,F,q),Z&&g(y,X,F,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(y,L,F,X),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function c(y){return i.deleteVertexArray(y)}function u(y,L,F){const X=F.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let Z=q[L.id];Z===void 0&&(Z={},q[L.id]=Z);let Y=Z[X];return Y===void 0&&(Y=d(l()),Z[X]=Y),Y}function d(y){const L=[],F=[],X=[];for(let q=0;q<e;q++)L[q]=0,F[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:X,object:y,attributes:{},index:null}}function f(y,L,F,X){const q=r.attributes,Z=L.attributes;let Y=0;const st=F.getAttributes();for(const $ in st)if(st[$].location>=0){const gt=q[$];let wt=Z[$];if(wt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),gt===void 0||gt.attribute!==wt||wt&&gt.data!==wt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==X}function g(y,L,F,X){const q={},Z=L.attributes;let Y=0;const st=F.getAttributes();for(const $ in st)if(st[$].location>=0){let gt=Z[$];gt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor));const wt={};wt.attribute=gt,gt&&gt.data&&(wt.data=gt.data),q[$]=wt,Y++}r.attributes=q,r.attributesNum=Y,r.index=X}function x(){const y=r.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const F=r.newAttributes,X=r.enabledAttributes,q=r.attributeDivisors;F[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),q[y]!==L&&(i.vertexAttribDivisor(y,L),q[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let F=0,X=L.length;F<X;F++)L[F]!==y[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(y,L,F,X,q,Z,Y){Y===!0?i.vertexAttribIPointer(y,L,F,q,Z):i.vertexAttribPointer(y,L,F,X,q,Z)}function _(y,L,F,X){x();const q=X.attributes,Z=F.getAttributes(),Y=L.defaultAttributeValues;for(const st in Z){const $=Z[st];if($.location>=0){let ht=q[st];if(ht===void 0&&(st==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),st==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const gt=ht.normalized,wt=ht.itemSize,Bt=t.get(ht);if(Bt===void 0)continue;const Yt=Bt.buffer,Kt=Bt.type,$t=Bt.bytesPerElement,nt=Kt===i.INT||Kt===i.UNSIGNED_INT||ht.gpuType===ha;if(ht.isInterleavedBufferAttribute){const D=ht.data,O=D.stride,ot=ht.offset;if(D.isInstancedInterleavedBuffer){for(let Q=0;Q<$.locationSize;Q++)p($.location+Q,D.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Q=0;Q<$.locationSize;Q++)M($.location+Q,wt/$.locationSize,Kt,gt,O*$t,(ot+wt/$.locationSize*Q)*$t,nt)}else{if(ht.isInstancedBufferAttribute){for(let D=0;D<$.locationSize;D++)p($.location+D,ht.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let D=0;D<$.locationSize;D++)m($.location+D);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let D=0;D<$.locationSize;D++)M($.location+D,wt/$.locationSize,Kt,gt,wt*$t,wt/$.locationSize*D*$t,nt)}}else if(Y!==void 0){const gt=Y[st];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv($.location,gt);break;case 3:i.vertexAttrib3fv($.location,gt);break;case 4:i.vertexAttrib4fv($.location,gt);break;default:i.vertexAttrib1fv($.location,gt)}}}}S()}function R(){P();for(const y in n){const L=n[y];for(const F in L){const X=L[F];for(const q in X)c(X[q].object),delete X[q];delete L[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const F in L){const X=L[F];for(const q in X)c(X[q].object),delete X[q];delete L[F]}delete n[y.id]}function C(y){for(const L in n){const F=n[L];if(F[y.id]===void 0)continue;const X=F[y.id];for(const q in X)c(X[q].object),delete X[q];delete F[y.id]}}function P(){b(),o=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function em(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ze&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:R,maxSamples:A}}function im(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new si,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{const S=r?0:n,M=S*4;let _=p.clippingState||null;l.value=_,_=c(g,d,M,f);for(let R=0;R!==M;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function sm(i){let t=new WeakMap;function e(o,a){return a===To?o.mapping=Vi:a===Ao&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===To||a===Ao)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new yu(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Di=4,bc=[.125,.215,.35,.446,.526,.582],ai=20,ro=new Fl,wc=new Gt;let oo=null,ao=0,co=0,lo=!1;const ri=(1+Math.sqrt(5))/2,Li=1/ri,Tc=[new I(-ri,Li,0),new I(ri,Li,0),new I(-Li,0,ri),new I(Li,0,ri),new I(0,ri,-Li),new I(0,ri,Li),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],rm=new I;class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=rm}=r;oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,ao,co),this._renderer.xr.enabled=lo,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Rs,format:Ze,colorSpace:Wi,depthBuffer:!1},s=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=om(r)),this._blurMaterial=am(r,t,e)}return s}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,s,r){const l=new sn(90,1,e,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wc),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new yr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Ke(new pi,x);let p=!1;const S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,p=!0):(x.color.copy(wc),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[M],r.y,r.z)):_===1?(l.up.set(0,0,h[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[M],r.z)):(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[M]));const R=this._cubeSize;sr(s,_*R,M>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ro)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tc[(s-r-1)%Tc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ke(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ai-1),x=r/g,m=isFinite(r)?1+Math.floor(c*x):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let S=0;for(let C=0;C<ai;++C){const P=C/x,b=Math.exp(-P*P/2);p.push(b),C===0?S+=b:C<m&&(S+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[s],R=3*_*(s>M-Di?s-M+Di:0),A=4*(this._cubeSize-_);sr(e,R,A,3*_,2*_),l.setRenderTarget(e),l.render(u,ro)}}function om(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Di?l=bc[o-i+Di-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(b,x*g*A),M.set(d,m*g*A);const y=[A,A,A,A,A,A];_.set(y,p*g*A)}const R=new Me;R.setAttribute("position",new Ue(S,x)),R.setAttribute("uv",new Ue(M,m)),R.setAttribute("faceIndex",new Ue(_,p)),t.push(R),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function am(i,t,e){const n=new Float32Array(ai),s=new I(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Cc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Pc(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===To||l===Ao,c=l===Vi||l===Gi;if(h||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ac(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new Ac(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let M=0,_=S.length;M<_;M+=3){const R=S[M+0],A=S[M+1],C=S[M+2];d.push(R,A,A,C,C,R)}}else if(g!==void 0){const S=g.array;x=g.version;for(let M=0,_=S.length/3-1;M<_;M+=3){const R=M+0,A=M+1,C=M+2;d.push(R,A,A,C,C,R)}}else return;const m=new(gl(d)?yl:Ml)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function um(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function fm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const A=new Float32Array(_*R*4*u),C=new xl(A,_,R,u);C.type=pn,C.needsUpdate=!0;const P=M*4;for(let y=0;y<u;y++){const L=m[y],F=p[y],X=S[y],q=_*R*4*y;for(let Z=0;Z<L.count;Z++){const Y=Z*P;f===!0&&(s.fromBufferAttribute(L,Z),A[q+Y+0]=s.x,A[q+Y+1]=s.y,A[q+Y+2]=s.z,A[q+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,Z),A[q+Y+4]=s.x,A[q+Y+5]=s.y,A[q+Y+6]=s.z,A[q+Y+7]=0),x===!0&&(s.fromBufferAttribute(X,Z),A[q+Y+8]=s.x,A[q+Y+9]=s.y,A[q+Y+10]=s.z,A[q+Y+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new pt(_,R)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function pm(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const zl=new Oe,Lc=new wl(1,1),Bl=new xl,kl=new iu,Hl=new El,Ic=[],Dc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ic[s];if(r===void 0&&(r=new Float32Array(s),Ic[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),Ce(e,n)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),Ce(e,n)}}function ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),Ce(e,n)}}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lc.compareFunction=ml,r=Lc):r=zl,e.setTexture2D(t||r,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kl,s)}function Im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hl,s)}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bl,s)}function Um(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return xm;case 35666:return _m;case 35674:return vm;case 35675:return Mm;case 35676:return ym;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return bm;case 35669:case 35673:return wm;case 5125:return Tm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Dm}}function Nm(i,t){i.uniform1fv(this.addr,t)}function Fm(i,t){const e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Om(i,t){const e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function zm(i,t){const e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Bm(i,t){const e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function km(i,t){const e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hm(i,t){const e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vm(i,t){i.uniform1iv(this.addr,t)}function Gm(i,t){i.uniform2iv(this.addr,t)}function Wm(i,t){i.uniform3iv(this.addr,t)}function Xm(i,t){i.uniform4iv(this.addr,t)}function qm(i,t){i.uniform1uiv(this.addr,t)}function Ym(i,t){i.uniform2uiv(this.addr,t)}function $m(i,t){i.uniform3uiv(this.addr,t)}function Jm(i,t){i.uniform4uiv(this.addr,t)}function Zm(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zl,r[o])}function Km(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kl,r[o])}function jm(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hl,r[o])}function Qm(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bl,r[o])}function t0(i){switch(i){case 5126:return Nm;case 35664:return Fm;case 35665:return Om;case 35666:return zm;case 35674:return Bm;case 35675:return km;case 35676:return Hm;case 5124:case 35670:return Vm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return $m;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Qm}}class e0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Um(e.type)}}class n0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t0(e.type)}}class i0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Oc(i,t){i.seq.push(t),i.map[t.id]=t}function s0(i,t,e){const n=i.name,s=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Oc(e,h===void 0?new e0(a,i,t):new n0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new i0(a),Oc(e,u)),e=u}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);s0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function zc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const r0=37297;let o0=0;function a0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Bc=new Xt;function c0(i){ie._getMatrix(Bc,ie.workingColorSpace,i);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+a0(i.getShaderSource(t),a)}else return r}function l0(i,t){const e=c0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function h0(i,t){let e;switch(t){case Ih:e="Linear";break;case Dh:e="Reinhard";break;case Uh:e="Cineon";break;case ol:e="ACESFilmic";break;case Fh:e="AgX";break;case Oh:e="Neutral";break;case Nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new I;function u0(){ie.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function d0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function us(i){return i!==""}function Hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(i){return i.replace(m0,x0)}const g0=new Map;function x0(i,t){let e=Jt[t];if(e===void 0){const n=g0.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(_0,v0)}function v0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function M0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function y0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Gi:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function E0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vr:t="ENVMAP_BLENDING_MULTIPLY";break;case Ph:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function b0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function w0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=M0(e),h=y0(e),c=S0(e),u=E0(e),d=b0(e),f=f0(e),g=d0(r),x=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?h0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,l0("linearToOutputTexel",e.outputColorSpace),u0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),o=oa(o),o=Hc(o,e),o=Vc(o,e),a=oa(a),a=Hc(a,e),a=Vc(a,e),o=Gc(o),a=Gc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,_=S+p+a,R=zc(s,s.VERTEX_SHADER,M),A=zc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(A)||"",Z=F.trim(),Y=X.trim(),st=q.trim();let $=!0,ht=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,A);else{const gt=kc(s,R,"vertex"),wt=kc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Z+`
`+gt+`
`+wt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||st==="")&&(ht=!1);ht&&(L.diagnostics={runnable:$,programLog:Z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:st,prefix:p}})}s.deleteShader(R),s.deleteShader(A),P=new hr(s,x),b=p0(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,r0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let T0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new R0(t),e.set(t,n)),n}}class R0{constructor(t){this.id=T0++,this.code=t,this.usedTimes=0}}function C0(i,t,e,n,s,r,o){const a=new _l,l=new A0,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,F,X){const q=F.fog,Z=X.geometry,Y=b.isMeshStandardMaterial?F.environment:null,st=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),$=st&&st.mapping===Mr?st.image.height:null,ht=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const gt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wt=gt!==void 0?gt.length:0;let Bt=0;Z.morphAttributes.position!==void 0&&(Bt=1),Z.morphAttributes.normal!==void 0&&(Bt=2),Z.morphAttributes.color!==void 0&&(Bt=3);let Yt,Kt,$t,nt;if(ht){const oe=dn[ht];Yt=oe.vertexShader,Kt=oe.fragmentShader}else Yt=b.vertexShader,Kt=b.fragmentShader,l.update(b),$t=l.getVertexShaderID(b),nt=l.getFragmentShaderID(b);const D=i.getRenderTarget(),O=i.state.buffers.depth.getReversed(),ot=X.isInstancedMesh===!0,Q=X.isBatchedMesh===!0,W=!!b.map,ct=!!b.matcap,T=!!st,z=!!b.aoMap,H=!!b.lightMap,V=!!b.bumpMap,K=!!b.normalMap,lt=!!b.displacementMap,J=!!b.emissiveMap,rt=!!b.metalnessMap,It=!!b.roughnessMap,mt=b.anisotropy>0,E=b.clearcoat>0,v=b.dispersion>0,U=b.iridescence>0,G=b.sheen>0,it=b.transmission>0,et=mt&&!!b.anisotropyMap,At=E&&!!b.clearcoatMap,ft=E&&!!b.clearcoatNormalMap,Rt=E&&!!b.clearcoatRoughnessMap,Tt=U&&!!b.iridescenceMap,ut=U&&!!b.iridescenceThicknessMap,bt=G&&!!b.sheenColorMap,kt=G&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,St=!!b.specularColorMap,qt=!!b.specularIntensityMap,N=it&&!!b.transmissionMap,vt=it&&!!b.thicknessMap,Mt=!!b.gradientMap,Pt=!!b.alphaMap,xt=b.alphaTest>0,at=!!b.alphaHash,Dt=!!b.extensions;let Wt=Vn;b.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const fe={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:Kt,defines:b.defines,customVertexShaderID:$t,customFragmentShaderID:nt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Q,batchingColor:Q&&X._colorsTexture!==null,instancing:ot,instancingColor:ot&&X.instanceColor!==null,instancingMorph:ot&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?i.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Wi,alphaToCoverage:!!b.alphaToCoverage,map:W,matcap:ct,envMap:T,envMapMode:T&&st.mapping,envMapCubeUVHeight:$,aoMap:z,lightMap:H,bumpMap:V,normalMap:K,displacementMap:d&&lt,emissiveMap:J,normalMapObjectSpace:K&&b.normalMapType===Hh,normalMapTangentSpace:K&&b.normalMapType===xa,metalnessMap:rt,roughnessMap:It,anisotropy:mt,anisotropyMap:et,clearcoat:E,clearcoatMap:At,clearcoatNormalMap:ft,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:U,iridescenceMap:Tt,iridescenceThicknessMap:ut,sheen:G,sheenColorMap:bt,sheenRoughnessMap:kt,specularMap:Ut,specularColorMap:St,specularIntensityMap:qt,transmission:it,transmissionMap:N,thicknessMap:vt,gradientMap:Mt,opaque:b.transparent===!1&&b.blending===Oi&&b.alphaToCoverage===!1,alphaMap:Pt,alphaTest:xt,alphaHash:at,combine:b.combine,mapUv:W&&x(b.map.channel),aoMapUv:z&&x(b.aoMap.channel),lightMapUv:H&&x(b.lightMap.channel),bumpMapUv:V&&x(b.bumpMap.channel),normalMapUv:K&&x(b.normalMap.channel),displacementMapUv:lt&&x(b.displacementMap.channel),emissiveMapUv:J&&x(b.emissiveMap.channel),metalnessMapUv:rt&&x(b.metalnessMap.channel),roughnessMapUv:It&&x(b.roughnessMap.channel),anisotropyMapUv:et&&x(b.anisotropyMap.channel),clearcoatMapUv:At&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(b.sheenRoughnessMap.channel),specularMapUv:Ut&&x(b.specularMap.channel),specularColorMapUv:St&&x(b.specularColorMap.channel),specularIntensityMapUv:qt&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:vt&&x(b.thicknessMap.channel),alphaMapUv:Pt&&x(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(K||mt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Z.attributes.uv&&(W||Pt),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:O,skinning:X.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:W&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:J&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return fe.vertexUv1s=h.has(1),fe.vertexUv2s=h.has(2),fe.vertexUv3s=h.has(3),h.clear(),fe}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const y=g[b.type];let L;if(y){const F=dn[y];L=xu.clone(F.uniforms)}else L=b.uniforms;return L}function R(b,y){let L;for(let F=0,X=c.length;F<X;F++){const q=c[F];if(q.cacheKey===y){L=q,++L.usedTimes;break}}return L===void 0&&(L=new w0(i,y,b,r),c.push(L)),L}function A(b){if(--b.usedTimes===0){const y=c.indexOf(b);c[y]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:P}}function P0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function L0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||L0),n.length>1&&n.sort(d||Xc),s.length>1&&s.sort(d||Xc)}function c(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function I0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new qc,i.set(n,[o])):s>=r.length?(o=new qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function D0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function U0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let N0=0;function F0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function O0(i){const t=new D0,e=U0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,r=new se,o=new se;function a(h){let c=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,M=0,_=0,R=0,A=0,C=0;h.sort(F0);for(let b=0,y=h.length;b<y;b++){const L=h[b],F=L.color,X=L.intensity,q=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=F.r*X,u+=F.g*X,d+=F.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],X);C++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const st=L.shadow,$=e.get(L);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=Y,f++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(X),Y.distance=q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[x]=Y;const st=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,st.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=st.matrix,L.castShadow){const $=e.get(L);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=Z,_++}x++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(F).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const st=L.shadow,$=e.get(L);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,$.shadowCameraNear=st.camera.near,$.shadowCameraFar=st.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=C,n.version=N0++)}function l(h,c){let u=0,d=0,f=0,g=0,x=0;const m=c.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){const M=h[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Yc(i){const t=new O0(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function z0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Yc(i),t.set(s,[a])):r>=o.length?(a=new Yc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function H0(i,t,e){let n=new Sr;const s=new pt,r=new pt,o=new pe,a=new lf({depthPacking:kh}),l=new hf,h={},c=e.maxTextureSize,u={[Wn]:Ge,[Ge]:Wn,[Ve]:Ve},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:B0,fragmentShader:k0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Hn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=p!==Tn&&this.type===Tn,q=p===Tn&&this.type!==Tn;for(let Z=0,Y=A.length;Z<Y;Z++){const st=A[Z],$=st.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ht=$.getFrameExtents();if(s.multiply(ht),r.copy($.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ht.x),s.x=r.x*ht.x,$.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ht.y),s.y=r.y*ht.y,$.mapSize.y=r.y)),$.map===null||X===!0||q===!0){const wt=this.type!==Tn?{minFilter:je,magFilter:je}:{};$.map!==null&&$.map.dispose(),$.map=new ui(s.x,s.y,wt),$.map.texture.name=st.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const gt=$.getViewportCount();for(let wt=0;wt<gt;wt++){const Bt=$.getViewport(wt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),F.viewport(o),$.updateMatrices(st,wt),n=$.getFrustum(),_(C,P,$.camera,st,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&S($,P),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,L)};function S(A,C){const P=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,f,x,null)}function M(A,C,P,b){let y=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=y.uuid,X=C.uuid;let q=h[F];q===void 0&&(q={},h[F]=q);let Z=q[X];Z===void 0&&(Z=y.clone(),q[X]=Z,C.addEventListener("dispose",R)),y=Z}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Tn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=P}return y}function _(A,C,P,b,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const X=t.update(A),q=A.material;if(Array.isArray(q)){const Z=X.groups;for(let Y=0,st=Z.length;Y<st;Y++){const $=Z[Y],ht=q[$.materialIndex];if(ht&&ht.visible){const gt=M(A,ht,b,y);A.onBeforeShadow(i,A,C,P,X,gt,$),i.renderBufferDirect(P,null,X,gt,A,$),A.onAfterShadow(i,A,C,P,X,gt,$)}}}else if(q.visible){const Z=M(A,q,b,y);A.onBeforeShadow(i,A,C,P,X,Z,null),i.renderBufferDirect(P,null,X,Z,A,null),A.onAfterShadow(i,A,C,P,X,Z,null)}}const F=A.children;for(let X=0,q=F.length;X<q;X++)_(F[X],C,P,b,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in h){const b=h[P],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const V0={[vo]:Mo,[yo]:bo,[So]:wo,[Hi]:Eo,[Mo]:vo,[bo]:yo,[wo]:So,[Eo]:Hi};function G0(i,t){function e(){let N=!1;const vt=new pe;let Mt=null;const Pt=new pe(0,0,0,0);return{setMask:function(xt){Mt!==xt&&!N&&(i.colorMask(xt,xt,xt,xt),Mt=xt)},setLocked:function(xt){N=xt},setClear:function(xt,at,Dt,Wt,fe){fe===!0&&(xt*=Wt,at*=Wt,Dt*=Wt),vt.set(xt,at,Dt,Wt),Pt.equals(vt)===!1&&(i.clearColor(xt,at,Dt,Wt),Pt.copy(vt))},reset:function(){N=!1,Mt=null,Pt.set(-1,0,0,0)}}}function n(){let N=!1,vt=!1,Mt=null,Pt=null,xt=null;return{setReversed:function(at){if(vt!==at){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),vt=at;const Wt=xt;xt=null,this.setClear(Wt)}},getReversed:function(){return vt},setTest:function(at){at?D(i.DEPTH_TEST):O(i.DEPTH_TEST)},setMask:function(at){Mt!==at&&!N&&(i.depthMask(at),Mt=at)},setFunc:function(at){if(vt&&(at=V0[at]),Pt!==at){switch(at){case vo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case Eo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=at}},setLocked:function(at){N=at},setClear:function(at){xt!==at&&(vt&&(at=1-at),i.clearDepth(at),xt=at)},reset:function(){N=!1,Mt=null,Pt=null,xt=null,vt=!1}}}function s(){let N=!1,vt=null,Mt=null,Pt=null,xt=null,at=null,Dt=null,Wt=null,fe=null;return{setTest:function(oe){N||(oe?D(i.STENCIL_TEST):O(i.STENCIL_TEST))},setMask:function(oe){vt!==oe&&!N&&(i.stencilMask(oe),vt=oe)},setFunc:function(oe,vn,un){(Mt!==oe||Pt!==vn||xt!==un)&&(i.stencilFunc(oe,vn,un),Mt=oe,Pt=vn,xt=un)},setOp:function(oe,vn,un){(at!==oe||Dt!==vn||Wt!==un)&&(i.stencilOp(oe,vn,un),at=oe,Dt=vn,Wt=un)},setLocked:function(oe){N=oe},setClear:function(oe){fe!==oe&&(i.clearStencil(oe),fe=oe)},reset:function(){N=!1,vt=null,Mt=null,Pt=null,xt=null,at=null,Dt=null,Wt=null,fe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,M=null,_=null,R=null,A=null,C=new Gt(0,0,0),P=0,b=!1,y=null,L=null,F=null,X=null,q=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,st=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=st>=1):$.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=st>=2);let ht=null,gt={};const wt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Yt=new pe().fromArray(wt),Kt=new pe().fromArray(Bt);function $t(N,vt,Mt,Pt){const xt=new Uint8Array(4),at=i.createTexture();i.bindTexture(N,at),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Mt;Dt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(vt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return at}const nt={};nt[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(i.DEPTH_TEST),o.setFunc(Hi),V(!1),K(Ba),D(i.CULL_FACE),z(Hn);function D(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function O(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function ot(N,vt){return u[N]!==vt?(i.bindFramebuffer(N,vt),u[N]=vt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Q(N,vt){let Mt=f,Pt=!1;if(N){Mt=d.get(vt),Mt===void 0&&(Mt=[],d.set(vt,Mt));const xt=N.textures;if(Mt.length!==xt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Dt=xt.length;at<Dt;at++)Mt[at]=i.COLOR_ATTACHMENT0+at;Mt.length=xt.length,Pt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(Mt)}function W(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ct={[oi]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[ph]:i.FUNC_REVERSE_SUBTRACT};ct[mh]=i.MIN,ct[gh]=i.MAX;const T={[xh]:i.ZERO,[_h]:i.ONE,[vh]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[wh]:i.SRC_ALPHA_SATURATE,[Eh]:i.DST_COLOR,[yh]:i.DST_ALPHA,[Mh]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[Sh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function z(N,vt,Mt,Pt,xt,at,Dt,Wt,fe,oe){if(N===Hn){x===!0&&(O(i.BLEND),x=!1);return}if(x===!1&&(D(i.BLEND),x=!0),N!==fh){if(N!==m||oe!==b){if((p!==oi||_!==oi)&&(i.blendEquation(i.FUNC_ADD),p=oi,_=oi),oe)switch(N){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Va:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ha:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Va:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,M=null,R=null,A=null,C.set(0,0,0),P=0,m=N,b=oe}return}xt=xt||vt,at=at||Mt,Dt=Dt||Pt,(vt!==p||xt!==_)&&(i.blendEquationSeparate(ct[vt],ct[xt]),p=vt,_=xt),(Mt!==S||Pt!==M||at!==R||Dt!==A)&&(i.blendFuncSeparate(T[Mt],T[Pt],T[at],T[Dt]),S=Mt,M=Pt,R=at,A=Dt),(Wt.equals(C)===!1||fe!==P)&&(i.blendColor(Wt.r,Wt.g,Wt.b,fe),C.copy(Wt),P=fe),m=N,b=!1}function H(N,vt){N.side===Ve?O(i.CULL_FACE):D(i.CULL_FACE);let Mt=N.side===Ge;vt&&(Mt=!Mt),V(Mt),N.blending===Oi&&N.transparent===!1?z(Hn):z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Pt=N.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),J(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):O(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function K(N){N!==hh?(D(i.CULL_FACE),N!==L&&(N===Ba?i.cullFace(i.BACK):N===uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):O(i.CULL_FACE),L=N}function lt(N){N!==F&&(Y&&i.lineWidth(N),F=N)}function J(N,vt,Mt){N?(D(i.POLYGON_OFFSET_FILL),(X!==vt||q!==Mt)&&(i.polygonOffset(vt,Mt),X=vt,q=Mt)):O(i.POLYGON_OFFSET_FILL)}function rt(N){N?D(i.SCISSOR_TEST):O(i.SCISSOR_TEST)}function It(N){N===void 0&&(N=i.TEXTURE0+Z-1),ht!==N&&(i.activeTexture(N),ht=N)}function mt(N,vt,Mt){Mt===void 0&&(ht===null?Mt=i.TEXTURE0+Z-1:Mt=ht);let Pt=gt[Mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},gt[Mt]=Pt),(Pt.type!==N||Pt.texture!==vt)&&(ht!==Mt&&(i.activeTexture(Mt),ht=Mt),i.bindTexture(N,vt||nt[N]),Pt.type=N,Pt.texture=vt)}function E(){const N=gt[ht];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(N){Yt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Yt.copy(N))}function kt(N){Kt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Kt.copy(N))}function Ut(N,vt){let Mt=h.get(vt);Mt===void 0&&(Mt=new WeakMap,h.set(vt,Mt));let Pt=Mt.get(N);Pt===void 0&&(Pt=i.getUniformBlockIndex(vt,N.name),Mt.set(N,Pt))}function St(N,vt){const Pt=h.get(vt).get(N);l.get(vt)!==Pt&&(i.uniformBlockBinding(vt,Pt,N.__bindingPointIndex),l.set(vt,Pt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ht=null,gt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,M=null,_=null,R=null,A=null,C=new Gt(0,0,0),P=0,b=!1,y=null,L=null,F=null,X=null,q=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:O,bindFramebuffer:ot,drawBuffers:Q,useProgram:W,setBlending:z,setMaterial:H,setFlipSided:V,setCullFace:K,setLineWidth:lt,setPolygonOffset:J,setScissorTest:rt,activeTexture:It,bindTexture:mt,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Tt,texImage3D:ut,updateUBOMapping:Ut,uniformBlockBinding:St,texStorage2D:ft,texStorage3D:Rt,texSubImage2D:G,texSubImage3D:it,compressedTexSubImage2D:et,compressedTexSubImage3D:At,scissor:bt,viewport:kt,reset:qt}}function W0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):gr("canvas")}function x(E,v,U){let G=1;const it=mt(E);if((it.width>U||it.height>U)&&(G=U/Math.max(it.width,it.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const et=Math.floor(G*it.width),At=Math.floor(G*it.height);u===void 0&&(u=g(et,At));const ft=v?g(et,At):u;return ft.width=et,ft.height=At,ft.getContext("2d").drawImage(E,0,0,et,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+et+"x"+At+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,v,U,G,it=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let et=v;if(v===i.RED&&(U===i.FLOAT&&(et=i.R32F),U===i.HALF_FLOAT&&(et=i.R16F),U===i.UNSIGNED_BYTE&&(et=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.R8UI),U===i.UNSIGNED_SHORT&&(et=i.R16UI),U===i.UNSIGNED_INT&&(et=i.R32UI),U===i.BYTE&&(et=i.R8I),U===i.SHORT&&(et=i.R16I),U===i.INT&&(et=i.R32I)),v===i.RG&&(U===i.FLOAT&&(et=i.RG32F),U===i.HALF_FLOAT&&(et=i.RG16F),U===i.UNSIGNED_BYTE&&(et=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.RG8UI),U===i.UNSIGNED_SHORT&&(et=i.RG16UI),U===i.UNSIGNED_INT&&(et=i.RG32UI),U===i.BYTE&&(et=i.RG8I),U===i.SHORT&&(et=i.RG16I),U===i.INT&&(et=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.RGB8UI),U===i.UNSIGNED_SHORT&&(et=i.RGB16UI),U===i.UNSIGNED_INT&&(et=i.RGB32UI),U===i.BYTE&&(et=i.RGB8I),U===i.SHORT&&(et=i.RGB16I),U===i.INT&&(et=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),U===i.UNSIGNED_INT&&(et=i.RGBA32UI),U===i.BYTE&&(et=i.RGBA8I),U===i.SHORT&&(et=i.RGBA16I),U===i.INT&&(et=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),v===i.RGBA){const At=it?pr:ie.getTransfer(G);U===i.FLOAT&&(et=i.RGBA32F),U===i.HALF_FLOAT&&(et=i.RGBA16F),U===i.UNSIGNED_BYTE&&(et=At===he?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(E,v){let U;return E?v===null||v===hi||v===xs?U=i.DEPTH24_STENCIL8:v===pn?U=i.DEPTH32F_STENCIL8:v===gs&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===xs?U=i.DEPTH_COMPONENT24:v===pn?U=i.DEPTH_COMPONENT32F:v===gs&&(U=i.DEPTH_COMPONENT16),U}function R(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==je&&E.minFilter!==Je?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&c.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),y(v)}function P(E){const v=n.get(E);if(v.__webglInit===void 0)return;const U=E.source,G=d.get(U);if(G){const it=G[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(E),Object.keys(G).length===0&&d.delete(U)}n.remove(E)}function b(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const U=E.source,G=d.get(U);delete G[v.__cacheKey],o.memory.textures--}function y(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let it=0;it<v.__webglFramebuffer[G].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[G][it]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=E.textures;for(let G=0,it=U.length;G<it;G++){const et=n.get(U[G]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(U[G])}n.remove(E)}let L=0;function F(){L=0}function X(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function q(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Z(E,v){const U=n.get(E);if(E.isVideoTexture&&rt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(U,E,v);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){nt(U,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function st(E,v){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){nt(U,E,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function $(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){D(U,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const ht={[ms]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},gt={[je]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},wt={[Vh]:i.NEVER,[$h]:i.ALWAYS,[Gh]:i.LESS,[ml]:i.LEQUAL,[Wh]:i.EQUAL,[Yh]:i.GEQUAL,[Xh]:i.GREATER,[qh]:i.NOTEQUAL};function Bt(E,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Je||v.magFilter===Pr||v.magFilter===Us||v.magFilter===kn||v.minFilter===Je||v.minFilter===Pr||v.minFilter===Us||v.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ht[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ht[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ht[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,gt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Us&&v.minFilter!==kn||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const G=v.source;let it=d.get(G);it===void 0&&(it={},d.set(G,it));const et=q(v);if(et!==E.__cacheKey){it[et]===void 0&&(it[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),it[et].usedTimes++;const At=it[E.__cacheKey];At!==void 0&&(it[E.__cacheKey].usedTimes--,At.usedTimes===0&&b(v)),E.__cacheKey=et,E.__webglTexture=it[et].texture}return U}function Kt(E,v,U){return Math.floor(Math.floor(E/U)/v)}function $t(E,v,U,G){const et=E.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,G,v.data);else{et.sort((ut,bt)=>ut.start-bt.start);let At=0;for(let ut=1;ut<et.length;ut++){const bt=et[At],kt=et[ut],Ut=bt.start+bt.count,St=Kt(kt.start,v.width,4),qt=Kt(bt.start,v.width,4);kt.start<=Ut+1&&St===qt&&Kt(kt.start+kt.count-1,v.width,4)===St?bt.count=Math.max(bt.count,kt.start+kt.count-bt.start):(++At,et[At]=kt)}et.length=At+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ut=0,bt=et.length;ut<bt;ut++){const kt=et[ut],Ut=Math.floor(kt.start/4),St=Math.ceil(kt.count/4),qt=Ut%v.width,N=Math.floor(Ut/v.width),vt=St,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,qt,N,vt,Mt,U,G,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function nt(E,v,U){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);const it=Yt(E,v),et=v.source;e.bindTexture(G,E.__webglTexture,i.TEXTURE0+U);const At=n.get(et);if(et.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+U);const ft=ie.getPrimaries(ie.workingColorSpace),Rt=v.colorSpace===An?null:ie.getPrimaries(v.colorSpace),Tt=v.colorSpace===An||ft===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ut=x(v.image,!1,s.maxTextureSize);ut=It(v,ut);const bt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type);let Ut=M(v.internalFormat,bt,kt,v.colorSpace,v.isVideoTexture);Bt(G,v);let St;const qt=v.mipmaps,N=v.isVideoTexture!==!0,vt=At.__version===void 0||it===!0,Mt=et.dataReady,Pt=R(v,ut);if(v.isDepthTexture)Ut=_(v.format===vs,v.type),vt&&(N?e.texStorage2D(i.TEXTURE_2D,1,Ut,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,bt,kt,null));else if(v.isDataTexture)if(qt.length>0){N&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ut,qt[0].width,qt[0].height);for(let xt=0,at=qt.length;xt<at;xt++)St=qt[xt],N?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,bt,kt,St.data):e.texImage2D(i.TEXTURE_2D,xt,Ut,St.width,St.height,0,bt,kt,St.data);v.generateMipmaps=!1}else N?(vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ut,ut.width,ut.height),Mt&&$t(v,ut,bt,kt)):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,bt,kt,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ut,qt[0].width,qt[0].height,ut.depth);for(let xt=0,at=qt.length;xt<at;xt++)if(St=qt[xt],v.format!==Ze)if(bt!==null)if(N){if(Mt)if(v.layerUpdates.size>0){const Dt=Ec(St.width,St.height,v.format,v.type);for(const Wt of v.layerUpdates){const fe=St.data.subarray(Wt*Dt/St.data.BYTES_PER_ELEMENT,(Wt+1)*Dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Wt,St.width,St.height,1,bt,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,ut.depth,bt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Ut,St.width,St.height,ut.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,ut.depth,bt,kt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Ut,St.width,St.height,ut.depth,0,bt,kt,St.data)}else{N&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,Ut,qt[0].width,qt[0].height);for(let xt=0,at=qt.length;xt<at;xt++)St=qt[xt],v.format!==Ze?bt!==null?N?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,bt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Ut,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,bt,kt,St.data):e.texImage2D(i.TEXTURE_2D,xt,Ut,St.width,St.height,0,bt,kt,St.data)}else if(v.isDataArrayTexture)if(N){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ut,ut.width,ut.height,ut.depth),Mt)if(v.layerUpdates.size>0){const xt=Ec(ut.width,ut.height,v.format,v.type);for(const at of v.layerUpdates){const Dt=ut.data.subarray(at*xt/ut.data.BYTES_PER_ELEMENT,(at+1)*xt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ut.width,ut.height,1,bt,kt,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,kt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ut.width,ut.height,ut.depth,0,bt,kt,ut.data);else if(v.isData3DTexture)N?(vt&&e.texStorage3D(i.TEXTURE_3D,Pt,Ut,ut.width,ut.height,ut.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ut.width,ut.height,ut.depth,0,bt,kt,ut.data);else if(v.isFramebufferTexture){if(vt)if(N)e.texStorage2D(i.TEXTURE_2D,Pt,Ut,ut.width,ut.height);else{let xt=ut.width,at=ut.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Ut,xt,at,0,bt,kt,null),xt>>=1,at>>=1}}else if(qt.length>0){if(N&&vt){const xt=mt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Ut,xt.width,xt.height)}for(let xt=0,at=qt.length;xt<at;xt++)St=qt[xt],N?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,bt,kt,St):e.texImage2D(i.TEXTURE_2D,xt,Ut,bt,kt,St);v.generateMipmaps=!1}else if(N){if(vt){const xt=mt(ut);e.texStorage2D(i.TEXTURE_2D,Pt,Ut,xt.width,xt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ut,bt,kt,ut);m(v)&&p(G),At.__version=et.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function D(E,v,U){if(v.image.length!==6)return;const G=Yt(E,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const et=n.get(it);if(it.version!==et.__version||G===!0){e.activeTexture(i.TEXTURE0+U);const At=ie.getPrimaries(ie.workingColorSpace),ft=v.colorSpace===An?null:ie.getPrimaries(v.colorSpace),Rt=v.colorSpace===An||At===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,ut=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let at=0;at<6;at++)!Tt&&!ut?bt[at]=x(v.image[at],!0,s.maxCubemapSize):bt[at]=ut?v.image[at].image:v.image[at],bt[at]=It(v,bt[at]);const kt=bt[0],Ut=r.convert(v.format,v.colorSpace),St=r.convert(v.type),qt=M(v.internalFormat,Ut,St,v.colorSpace),N=v.isVideoTexture!==!0,vt=et.__version===void 0||G===!0,Mt=it.dataReady;let Pt=R(v,kt);Bt(i.TEXTURE_CUBE_MAP,v);let xt;if(Tt){N&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,qt,kt.width,kt.height);for(let at=0;at<6;at++){xt=bt[at].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){const Wt=xt[Dt];v.format!==Ze?Ut!==null?N?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,0,0,Wt.width,Wt.height,Ut,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,qt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,0,0,Wt.width,Wt.height,Ut,St,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt,qt,Wt.width,Wt.height,0,Ut,St,Wt.data)}}}else{if(xt=v.mipmaps,N&&vt){xt.length>0&&Pt++;const at=mt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,qt,at.width,at.height)}for(let at=0;at<6;at++)if(ut){N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,bt[at].width,bt[at].height,Ut,St,bt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,qt,bt[at].width,bt[at].height,0,Ut,St,bt[at].data);for(let Dt=0;Dt<xt.length;Dt++){const fe=xt[Dt].image[at].image;N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,0,0,fe.width,fe.height,Ut,St,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,qt,fe.width,fe.height,0,Ut,St,fe.data)}}else{N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ut,St,bt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,qt,Ut,St,bt[at]);for(let Dt=0;Dt<xt.length;Dt++){const Wt=xt[Dt];N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,0,0,Ut,St,Wt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Dt+1,qt,Ut,St,Wt.image[at])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),et.__version=it.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function O(E,v,U,G,it,et){const At=r.convert(U.format,U.colorSpace),ft=r.convert(U.type),Rt=M(U.internalFormat,At,ft,U.colorSpace),Tt=n.get(v),ut=n.get(U);if(ut.__renderTarget=v,!Tt.__hasExternalTextures){const bt=Math.max(1,v.width>>et),kt=Math.max(1,v.height>>et);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,et,Rt,bt,kt,v.depth,0,At,ft,null):e.texImage2D(it,et,Rt,bt,kt,0,At,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),J(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,it,ut.__webglTexture,0,lt(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,it,ut.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(E,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const G=v.depthTexture,it=G&&G.isDepthTexture?G.type:null,et=_(v.stencilBuffer,it),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=lt(v);J(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,et,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,E)}else{const G=v.textures;for(let it=0;it<G.length;it++){const et=G[it],At=r.convert(et.format,et.colorSpace),ft=r.convert(et.type),Rt=M(et.internalFormat,At,ft,et.colorSpace),Tt=lt(v);U&&J(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Rt,v.width,v.height):J(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const it=G.__webglTexture,et=lt(v);if(v.depthTexture.format===_s)J(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===vs)J(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function W(E){const v=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",it)};G.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=G}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const G=E.texture.mipmaps;G&&G.length>0?Q(v.__webglFramebuffer[0],E):Q(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),ot(v.__webglDepthbuffer[G],E,!1);else{const it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,et)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ot(v.__webglDepthbuffer,E,!1);else{const it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(E,v,U){const G=n.get(E);v!==void 0&&O(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&W(E)}function T(E){const v=E.texture,U=n.get(E),G=n.get(v);E.addEventListener("dispose",C);const it=E.textures,et=E.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,o.memory.textures++),et){U.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ft]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)U.__webglFramebuffer[ft][Rt]=i.createFramebuffer()}else U.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)U.__webglFramebuffer[ft]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(At)for(let ft=0,Rt=it.length;ft<Rt;ft++){const Tt=n.get(it[ft]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&J(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){const Rt=it[ft];U.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ft]);const Tt=r.convert(Rt.format,Rt.colorSpace),ut=r.convert(Rt.type),bt=M(Rt.internalFormat,Tt,ut,Rt.colorSpace,E.isXRRenderTarget===!0),kt=lt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,U.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)O(U.__webglFramebuffer[ft][Rt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt);else O(U.__webglFramebuffer[ft],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,Rt=it.length;ft<Rt;ft++){const Tt=it[ft],ut=n.get(Tt);let bt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(bt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,ut.__webglTexture),Bt(bt,Tt),O(U.__webglFramebuffer,E,Tt,i.COLOR_ATTACHMENT0+ft,bt,0),m(Tt)&&p(bt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,G.__webglTexture),Bt(ft,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)O(U.__webglFramebuffer[Rt],E,v,i.COLOR_ATTACHMENT0,ft,Rt);else O(U.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ft,0);m(v)&&p(ft),e.unbindTexture()}E.depthBuffer&&W(E)}function z(E){const v=E.textures;for(let U=0,G=v.length;U<G;U++){const it=v[U];if(m(it)){const et=S(E),At=n.get(it).__webglTexture;e.bindTexture(et,At),p(et),e.unbindTexture()}}}const H=[],V=[];function K(E){if(E.samples>0){if(J(E)===!1){const v=E.textures,U=E.width,G=E.height;let it=i.COLOR_BUFFER_BIT;const et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(E),ft=v.length>1;if(ft)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Rt=E.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const ut=n.get(v[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,U,G,0,0,U,G,it,i.NEAREST),l===!0&&(H.length=0,V.length=0,H.push(i.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(H.push(et),V.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const ut=n.get(v[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function lt(E){return Math.min(s.maxSamples,E.samples)}function J(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(E){const v=o.render.frame;c.get(E)!==v&&(c.set(E,v),E.update())}function It(E,v){const U=E.colorSpace,G=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Wi&&U!==An&&(ie.getTransfer(U)===he?(G!==Ze||it!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=st,this.setTextureCube=$,this.rebindTextures=ct,this.setupRenderTarget=T,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=O,this.useMultisampledRTT=J}function X0(i,t){function e(n,s=An){let r;const o=ie.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cl)return i.BYTE;if(n===ll)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===dl)return i.RGB;if(n===Ze)return i.RGBA;if(n===_s)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===da)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===pl)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===or||n===ar||n===cr||n===lr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Lo||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Do||n===Uo)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===zo||n===Bo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
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

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Tl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J0 extends $i{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new $0,p={},S=e.getContextAttributes();let M=null,_=null;const R=[],A=[],C=new pt;let P=null;const b=new sn;b.viewport=new pe;const y=new sn;y.viewport=new pe;const L=[b,y],F=new gf;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let D=R[nt];return D===void 0&&(D=new Qr,R[nt]=D),D.getTargetRaySpace()},this.getControllerGrip=function(nt){let D=R[nt];return D===void 0&&(D=new Qr,R[nt]=D),D.getGripSpace()},this.getHand=function(nt){let D=R[nt];return D===void 0&&(D=new Qr,R[nt]=D),D.getHandSpace()};function Z(nt){const D=A.indexOf(nt.inputSource);if(D===-1)return;const O=R[D];O!==void 0&&(O.update(nt.inputSource,nt.frame,h||o),O.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Y(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",st);for(let nt=0;nt<R.length;nt++){const D=A[nt];D!==null&&(A[nt]=null,R[nt].disconnect(D))}X=null,q=null,m.reset();for(const nt in p)delete p[nt];t.setRenderTarget(M),f=null,d=null,u=null,s=null,_=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",st),S.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,ot=null,Q=null;S.depth&&(Q=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=S.stencil?vs:_s,ot=S.stencil?xs:hi);const W={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(W),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new ui(d.textureWidth,d.textureHeight,{format:Ze,type:xn,depthTexture:new wl(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const O={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,O),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ui(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(nt){for(let D=0;D<nt.removed.length;D++){const O=nt.removed[D],ot=A.indexOf(O);ot>=0&&(A[ot]=null,R[ot].disconnect(O))}for(let D=0;D<nt.added.length;D++){const O=nt.added[D];let ot=A.indexOf(O);if(ot===-1){for(let W=0;W<R.length;W++)if(W>=A.length){A.push(O),ot=W;break}else if(A[W]===null){A[W]=O,ot=W;break}if(ot===-1)break}const Q=R[ot];Q&&Q.connect(O)}}const $=new I,ht=new I;function gt(nt,D,O){$.setFromMatrixPosition(D.matrixWorld),ht.setFromMatrixPosition(O.matrixWorld);const ot=$.distanceTo(ht),Q=D.projectionMatrix.elements,W=O.projectionMatrix.elements,ct=Q[14]/(Q[10]-1),T=Q[14]/(Q[10]+1),z=(Q[9]+1)/Q[5],H=(Q[9]-1)/Q[5],V=(Q[8]-1)/Q[0],K=(W[8]+1)/W[0],lt=ct*V,J=ct*K,rt=ot/(-V+K),It=rt*-V;if(D.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(It),nt.translateZ(rt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Q[10]===-1)nt.projectionMatrix.copy(D.projectionMatrix),nt.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const mt=ct+rt,E=T+rt,v=lt-It,U=J+(ot-It),G=z*T/E*mt,it=H*T/E*mt;nt.projectionMatrix.makePerspective(v,U,G,it,mt,E),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function wt(nt,D){D===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(D.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let D=nt.near,O=nt.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&(O=m.depthFar)),F.near=y.near=b.near=D,F.far=y.far=b.far=O,(X!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,q=F.far),F.layers.mask=nt.layers.mask|6,b.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const ot=nt.parent,Q=F.cameras;wt(F,ot);for(let W=0;W<Q.length;W++)wt(Q[W],ot);Q.length===2?gt(F,b,y):F.projectionMatrix.copy(b.projectionMatrix),Bt(nt,F,ot)};function Bt(nt,D,O){O===null?nt.matrix.copy(D.matrixWorld):(nt.matrix.copy(O.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(D.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(D.projectionMatrix),nt.projectionMatrixInverse.copy(D.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=ia*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(nt){return p[nt]};let Yt=null;function Kt(nt,D){if(c=D.getViewerPose(h||o),g=D,c!==null){const O=c.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ot=!1;O.length!==F.cameras.length&&(F.cameras.length=0,ot=!0);for(let T=0;T<O.length;T++){const z=O[T];let H=null;if(f!==null)H=f.getViewport(z);else{const K=u.getViewSubImage(d,z);H=K.viewport,T===0&&(t.setRenderTargetTextures(_,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(_))}let V=L[T];V===void 0&&(V=new sn,V.layers.enable(T),V.viewport=new pe,L[T]=V),V.matrix.fromArray(z.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(z.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(H.x,H.y,H.width,H.height),T===0&&(F.matrix.copy(V.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ot===!0&&F.cameras.push(V)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const T=u.getDepthInformation(O[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(Q&&Q.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let T=0;T<O.length;T++){const z=O[T].camera;if(z){let H=p[z];H||(H=new Tl,p[z]=H);const V=u.getCameraImage(z);H.sourceTexture=V}}}}for(let O=0;O<R.length;O++){const ot=A[O],Q=R[O];ot!==null&&Q!==void 0&&Q.update(ot,D,h||o)}Yt&&Yt(nt,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}const $t=new Ol;$t.setAnimationLoop(Kt),this.setAnimationLoop=function(nt){Yt=nt},this.dispose=function(){}}}const ti=new hn,Z0=new se;function K0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,_=S.envMapRotation;M&&(m.envMap.value=M,ti.copy(_),ti.x*=-1,ti.y*=-1,ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const _=M.program;n.uniformBlockBinding(S,_)}function h(S,M){let _=s[S.id];_===void 0&&(g(S),_=c(S),s[S.id]=_,S.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(S,R);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function c(S){const M=u();S.__bindingPointIndex=M;const _=i.createBuffer(),R=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],_=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,C=_.length;A<C;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,y=P.length;b<y;b++){const L=P[b];if(f(L,A,b,R)===!0){const F=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let Z=0;Z<X.length;Z++){const Y=X[Z],st=x(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+q,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,q),q+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,_,R){const A=S.value,C=M+"_"+_;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const P=R[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(S){const M=S.uniforms;let _=0;const R=16;for(let C=0,P=M.length;C<P;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,L=b.length;y<L;y++){const F=b[y],X=Array.isArray(F.value)?F.value:[F.value];for(let q=0,Z=X.length;q<Z;q++){const Y=X[q],st=x(Y),$=_%R,ht=$%st.boundary,gt=$+ht;_+=ht,gt!==0&&R-gt<st.storage&&(_+=R-gt),F.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=st.storage}}}const A=_%R;return A>0&&(_+=R-A),S.__size=_,S.__cache={},this}function x(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}class Q0{constructor(t={}){const{canvas:e=Zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let R=!1;this._outputColorSpace=Le;let A=0,C=0,P=null,b=-1,y=null;const L=new pe,F=new pe;let X=null;const q=new Gt(0);let Z=0,Y=e.width,st=e.height,$=1,ht=null,gt=null;const wt=new pe(0,0,Y,st),Bt=new pe(0,0,Y,st);let Yt=!1;const Kt=new Sr;let $t=!1,nt=!1;const D=new se,O=new I,ot=new pe,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let W=!1;function ct(){return P===null?$:1}let T=n;function z(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),T===null){const B="webgl2";if(T=z(B,w),T===null)throw z(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let H,V,K,lt,J,rt,It,mt,E,v,U,G,it,et,At,ft,Rt,Tt,ut,bt,kt,Ut,St,qt;function N(){H=new lm(T),H.init(),Ut=new X0(T,H),V=new nm(T,H,t,Ut),K=new G0(T,H),V.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),lt=new fm(T),J=new P0,rt=new W0(T,H,K,J,V,Ut,lt),It=new sm(_),mt=new cm(_),E=new _f(T),St=new tm(T,E),v=new hm(T,E,lt,St),U=new pm(T,v,E,lt),ut=new dm(T,V,rt),ft=new im(J),G=new C0(_,It,mt,H,V,St,ft),it=new K0(_,J),et=new I0,At=new z0(H),Tt=new Qp(_,It,mt,K,U,f,l),Rt=new H0(_,U,V),qt=new j0(T,lt,V,K),bt=new em(T,H,lt),kt=new um(T,H,lt),lt.programs=G.programs,_.capabilities=V,_.extensions=H,_.properties=J,_.renderLists=et,_.shadowMap=Rt,_.state=K,_.info=lt}N();const vt=new J0(_,T);this.xr=vt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=H.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=H.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(Y,st,!1))},this.getSize=function(w){return w.set(Y,st)},this.setSize=function(w,B,j=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,st=B,e.width=Math.floor(w*$),e.height=Math.floor(B*$),j===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Y*$,st*$).floor()},this.setDrawingBufferSize=function(w,B,j){Y=w,st=B,$=j,e.width=Math.floor(w*j),e.height=Math.floor(B*j),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,B,j,tt){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,B,j,tt),K.viewport(L.copy(wt).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,B,j,tt){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,B,j,tt),K.scissor(F.copy(Bt).multiplyScalar($).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){K.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){ht=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,j=!0){let tt=0;if(w){let k=!1;if(P!==null){const _t=P.texture.format;k=_t===ga||_t===ma||_t===pa}if(k){const _t=P.texture.type,Et=_t===xn||_t===hi||_t===gs||_t===xs||_t===ua||_t===fa,Lt=Tt.getClearColor(),Ct=Tt.getClearAlpha(),zt=Lt.r,Vt=Lt.g,Nt=Lt.b;Et?(g[0]=zt,g[1]=Vt,g[2]=Nt,g[3]=Ct,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=zt,x[1]=Vt,x[2]=Nt,x[3]=Ct,T.clearBufferiv(T.COLOR,0,x))}else tt|=T.COLOR_BUFFER_BIT}B&&(tt|=T.DEPTH_BUFFER_BIT),j&&(tt|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Tt.dispose(),et.dispose(),At.dispose(),J.dispose(),It.dispose(),mt.dispose(),U.dispose(),St.dispose(),qt.dispose(),G.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",un),vt.removeEventListener("sessionend",Da),Yn.stop()};function Mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=lt.autoReset,B=Rt.enabled,j=Rt.autoUpdate,tt=Rt.needsUpdate,k=Rt.type;N(),lt.autoReset=w,Rt.enabled=B,Rt.autoUpdate=j,Rt.needsUpdate=tt,Rt.type=k}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const B=w.target;B.removeEventListener("dispose",at),Dt(B)}function Dt(w){Wt(w),J.remove(w)}function Wt(w){const B=J.get(w).programs;B!==void 0&&(B.forEach(function(j){G.releaseProgram(j)}),w.isShaderMaterial&&G.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,j,tt,k,_t){B===null&&(B=Q);const Et=k.isMesh&&k.matrixWorld.determinant()<0,Lt=sh(w,B,j,tt,k);K.setMaterial(tt,Et);let Ct=j.index,zt=1;if(tt.wireframe===!0){if(Ct=v.getWireframeAttribute(j),Ct===void 0)return;zt=2}const Vt=j.drawRange,Nt=j.attributes.position;let te=Vt.start*zt,le=(Vt.start+Vt.count)*zt;_t!==null&&(te=Math.max(te,_t.start*zt),le=Math.min(le,(_t.start+_t.count)*zt)),Ct!==null?(te=Math.max(te,0),le=Math.min(le,Ct.count)):Nt!=null&&(te=Math.max(te,0),le=Math.min(le,Nt.count));const _e=le-te;if(_e<0||_e===1/0)return;St.setup(k,tt,Lt,j,Ct);let de,ue=bt;if(Ct!==null&&(de=E.get(Ct),ue=kt,ue.setIndex(de)),k.isMesh)tt.wireframe===!0?(K.setLineWidth(tt.wireframeLinewidth*ct()),ue.setMode(T.LINES)):ue.setMode(T.TRIANGLES);else if(k.isLine){let Ot=tt.linewidth;Ot===void 0&&(Ot=1),K.setLineWidth(Ot*ct()),k.isLineSegments?ue.setMode(T.LINES):k.isLineLoop?ue.setMode(T.LINE_LOOP):ue.setMode(T.LINE_STRIP)}else k.isPoints?ue.setMode(T.POINTS):k.isSprite&&ue.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ot=k._multiDrawStarts,me=k._multiDrawCounts,ne=k._multiDrawCount,We=Ct?E.get(Ct).bytesPerElement:1,mi=J.get(tt).currentProgram.getUniforms();for(let Xe=0;Xe<ne;Xe++)mi.setValue(T,"_gl_DrawID",Xe),ue.render(Ot[Xe]/We,me[Xe])}else if(k.isInstancedMesh)ue.renderInstances(te,_e,k.count);else if(j.isInstancedBufferGeometry){const Ot=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,me=Math.min(j.instanceCount,Ot);ue.renderInstances(te,_e,me)}else ue.render(te,_e)};function fe(w,B,j){w.transparent===!0&&w.side===Ve&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,Ds(w,B,j),w.side=Wn,w.needsUpdate=!0,Ds(w,B,j),w.side=Ve):Ds(w,B,j)}this.compile=function(w,B,j=null){j===null&&(j=w),p=At.get(j),p.init(B),M.push(p),j.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==j&&w.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const tt=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _t=k.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){const Lt=_t[Et];fe(Lt,j,k),tt.add(Lt)}else fe(_t,j,k),tt.add(_t)}),p=M.pop(),tt},this.compileAsync=function(w,B,j=null){const tt=this.compile(w,B,j);return new Promise(k=>{function _t(){if(tt.forEach(function(Et){J.get(Et).currentProgram.isReady()&&tt.delete(Et)}),tt.size===0){k(w);return}setTimeout(_t,10)}H.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let oe=null;function vn(w){oe&&oe(w)}function un(){Yn.stop()}function Da(){Yn.start()}const Yn=new Ol;Yn.setAnimationLoop(vn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(w){oe=w,vt.setAnimationLoop(w),w===null?Yn.stop():Yn.start()},vt.addEventListener("sessionstart",un),vt.addEventListener("sessionend",Da),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(B),B=vt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,B,P),p=At.get(w,M.length),p.init(B),M.push(p),D.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Kt.setFromProjectionMatrix(D,mn,B.reversedDepth),nt=this.localClippingEnabled,$t=ft.init(this.clippingPlanes,nt),m=et.get(w,S.length),m.init(),S.push(m),vt.enabled===!0&&vt.isPresenting===!0){const _t=_.xr.getDepthSensingMesh();_t!==null&&Rr(_t,B,-1/0,_.sortObjects)}Rr(w,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ht,gt),W=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,W&&Tt.addToRenderList(m,w),this.info.render.frame++,$t===!0&&ft.beginShadows();const j=p.state.shadowsArray;Rt.render(j,w,B),$t===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const _t=B.cameras;if(k.length>0)for(let Et=0,Lt=_t.length;Et<Lt;Et++){const Ct=_t[Et];Na(tt,k,w,Ct)}W&&Tt.render(w);for(let Et=0,Lt=_t.length;Et<Lt;Et++){const Ct=_t[Et];Ua(m,w,Ct,Ct.viewport)}}else k.length>0&&Na(tt,k,w,B),W&&Tt.render(w),Ua(m,w,B);P!==null&&C===0&&(rt.updateMultisampleRenderTarget(P),rt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,B),St.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],$t===!0&&ft.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Rr(w,B,j,tt){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Kt.intersectsSprite(w)){tt&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(D);const Et=U.update(w),Lt=w.material;Lt.visible&&m.push(w,Et,Lt,j,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Kt.intersectsObject(w))){const Et=U.update(w),Lt=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ot.copy(Et.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(D)),Array.isArray(Lt)){const Ct=Et.groups;for(let zt=0,Vt=Ct.length;zt<Vt;zt++){const Nt=Ct[zt],te=Lt[Nt.materialIndex];te&&te.visible&&m.push(w,Et,te,j,ot.z,Nt)}}else Lt.visible&&m.push(w,Et,Lt,j,ot.z,null)}}const _t=w.children;for(let Et=0,Lt=_t.length;Et<Lt;Et++)Rr(_t[Et],B,j,tt)}function Ua(w,B,j,tt){const k=w.opaque,_t=w.transmissive,Et=w.transparent;p.setupLightsView(j),$t===!0&&ft.setGlobalState(_.clippingPlanes,j),tt&&K.viewport(L.copy(tt)),k.length>0&&Is(k,B,j),_t.length>0&&Is(_t,B,j),Et.length>0&&Is(Et,B,j),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Na(w,B,j,tt){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new ui(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?Rs:xn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const _t=p.state.transmissionRenderTarget[tt.id],Et=tt.viewport||L;_t.setSize(Et.z*_.transmissionResolutionScale,Et.w*_.transmissionResolutionScale);const Lt=_.getRenderTarget(),Ct=_.getActiveCubeFace(),zt=_.getActiveMipmapLevel();_.setRenderTarget(_t),_.getClearColor(q),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),W&&Tt.render(j);const Vt=_.toneMapping;_.toneMapping=Vn;const Nt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),$t===!0&&ft.setGlobalState(_.clippingPlanes,tt),Is(w,j,tt),rt.updateMultisampleRenderTarget(_t),rt.updateRenderTargetMipmap(_t),H.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let le=0,_e=B.length;le<_e;le++){const de=B[le],ue=de.object,Ot=de.geometry,me=de.material,ne=de.group;if(me.side===Ve&&ue.layers.test(tt.layers)){const We=me.side;me.side=Ge,me.needsUpdate=!0,Fa(ue,j,tt,Ot,me,ne),me.side=We,me.needsUpdate=!0,te=!0}}te===!0&&(rt.updateMultisampleRenderTarget(_t),rt.updateRenderTargetMipmap(_t))}_.setRenderTarget(Lt,Ct,zt),_.setClearColor(q,Z),Nt!==void 0&&(tt.viewport=Nt),_.toneMapping=Vt}function Is(w,B,j){const tt=B.isScene===!0?B.overrideMaterial:null;for(let k=0,_t=w.length;k<_t;k++){const Et=w[k],Lt=Et.object,Ct=Et.geometry,zt=Et.group;let Vt=Et.material;Vt.allowOverride===!0&&tt!==null&&(Vt=tt),Lt.layers.test(j.layers)&&Fa(Lt,B,j,Ct,Vt,zt)}}function Fa(w,B,j,tt,k,_t){w.onBeforeRender(_,B,j,tt,k,_t),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,B,j,tt,w,_t),k.transparent===!0&&k.side===Ve&&k.forceSinglePass===!1?(k.side=Ge,k.needsUpdate=!0,_.renderBufferDirect(j,B,tt,k,w,_t),k.side=Wn,k.needsUpdate=!0,_.renderBufferDirect(j,B,tt,k,w,_t),k.side=Ve):_.renderBufferDirect(j,B,tt,k,w,_t),w.onAfterRender(_,B,j,tt,k,_t)}function Ds(w,B,j){B.isScene!==!0&&(B=Q);const tt=J.get(w),k=p.state.lights,_t=p.state.shadowsArray,Et=k.state.version,Lt=G.getParameters(w,k.state,_t,B,j),Ct=G.getProgramCacheKey(Lt);let zt=tt.programs;tt.environment=w.isMeshStandardMaterial?B.environment:null,tt.fog=B.fog,tt.envMap=(w.isMeshStandardMaterial?mt:It).get(w.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",at),zt=new Map,tt.programs=zt);let Vt=zt.get(Ct);if(Vt!==void 0){if(tt.currentProgram===Vt&&tt.lightsStateVersion===Et)return za(w,Lt),Vt}else Lt.uniforms=G.getUniforms(w),w.onBeforeCompile(Lt,_),Vt=G.acquireProgram(Lt,Ct),zt.set(Ct,Vt),tt.uniforms=Lt.uniforms;const Nt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=ft.uniform),za(w,Lt),tt.needsLights=oh(w),tt.lightsStateVersion=Et,tt.needsLights&&(Nt.ambientLightColor.value=k.state.ambient,Nt.lightProbe.value=k.state.probe,Nt.directionalLights.value=k.state.directional,Nt.directionalLightShadows.value=k.state.directionalShadow,Nt.spotLights.value=k.state.spot,Nt.spotLightShadows.value=k.state.spotShadow,Nt.rectAreaLights.value=k.state.rectArea,Nt.ltc_1.value=k.state.rectAreaLTC1,Nt.ltc_2.value=k.state.rectAreaLTC2,Nt.pointLights.value=k.state.point,Nt.pointLightShadows.value=k.state.pointShadow,Nt.hemisphereLights.value=k.state.hemi,Nt.directionalShadowMap.value=k.state.directionalShadowMap,Nt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Nt.spotShadowMap.value=k.state.spotShadowMap,Nt.spotLightMatrix.value=k.state.spotLightMatrix,Nt.spotLightMap.value=k.state.spotLightMap,Nt.pointShadowMap.value=k.state.pointShadowMap,Nt.pointShadowMatrix.value=k.state.pointShadowMatrix),tt.currentProgram=Vt,tt.uniformsList=null,Vt}function Oa(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=hr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function za(w,B){const j=J.get(w);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function sh(w,B,j,tt,k){B.isScene!==!0&&(B=Q),rt.resetTextureUnits();const _t=B.fog,Et=tt.isMeshStandardMaterial?B.environment:null,Lt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Wi,Ct=(tt.isMeshStandardMaterial?mt:It).get(tt.envMap||Et),zt=tt.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Vt=!!j.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Nt=!!j.morphAttributes.position,te=!!j.morphAttributes.normal,le=!!j.morphAttributes.color;let _e=Vn;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=_.toneMapping);const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=de!==void 0?de.length:0,Ot=J.get(tt),me=p.state.lights;if($t===!0&&(nt===!0||w!==y)){const ze=w===y&&tt.id===b;ft.setState(tt,w,ze)}let ne=!1;tt.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==me.state.version||Ot.outputColorSpace!==Lt||k.isBatchedMesh&&Ot.batching===!1||!k.isBatchedMesh&&Ot.batching===!0||k.isBatchedMesh&&Ot.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ot.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ot.instancing===!1||!k.isInstancedMesh&&Ot.instancing===!0||k.isSkinnedMesh&&Ot.skinning===!1||!k.isSkinnedMesh&&Ot.skinning===!0||k.isInstancedMesh&&Ot.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ot.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ot.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ot.instancingMorph===!1&&k.morphTexture!==null||Ot.envMap!==Ct||tt.fog===!0&&Ot.fog!==_t||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ft.numPlanes||Ot.numIntersection!==ft.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Vt||Ot.morphTargets!==Nt||Ot.morphNormals!==te||Ot.morphColors!==le||Ot.toneMapping!==_e||Ot.morphTargetsCount!==ue)&&(ne=!0):(ne=!0,Ot.__version=tt.version);let We=Ot.currentProgram;ne===!0&&(We=Ds(tt,B,k));let mi=!1,Xe=!1,es=!1;const ge=We.getUniforms(),Qe=Ot.uniforms;if(K.useProgram(We.program)&&(mi=!0,Xe=!0,es=!0),tt.id!==b&&(b=tt.id,Xe=!0),mi||y!==w){K.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(T,"projectionMatrix",w.projectionMatrix),ge.setValue(T,"viewMatrix",w.matrixWorldInverse);const ke=ge.map.cameraPosition;ke!==void 0&&ke.setValue(T,O.setFromMatrixPosition(w.matrixWorld)),V.logarithmicDepthBuffer&&ge.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ge.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Xe=!0,es=!0)}if(k.isSkinnedMesh){ge.setOptional(T,k,"bindMatrix"),ge.setOptional(T,k,"bindMatrixInverse");const ze=k.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ge.setValue(T,"boneTexture",ze.boneTexture,rt))}k.isBatchedMesh&&(ge.setOptional(T,k,"batchingTexture"),ge.setValue(T,"batchingTexture",k._matricesTexture,rt),ge.setOptional(T,k,"batchingIdTexture"),ge.setValue(T,"batchingIdTexture",k._indirectTexture,rt),ge.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(T,"batchingColorTexture",k._colorsTexture,rt));const tn=j.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ut.update(k,j,We),(Xe||Ot.receiveShadow!==k.receiveShadow)&&(Ot.receiveShadow=k.receiveShadow,ge.setValue(T,"receiveShadow",k.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Qe.envMap.value=Ct,Qe.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&B.environment!==null&&(Qe.envMapIntensity.value=B.environmentIntensity),Xe&&(ge.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&rh(Qe,es),_t&&tt.fog===!0&&it.refreshFogUniforms(Qe,_t),it.refreshMaterialUniforms(Qe,tt,$,st,p.state.transmissionRenderTarget[w.id]),hr.upload(T,Oa(Ot),Qe,rt)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(hr.upload(T,Oa(Ot),Qe,rt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ge.setValue(T,"center",k.center),ge.setValue(T,"modelViewMatrix",k.modelViewMatrix),ge.setValue(T,"normalMatrix",k.normalMatrix),ge.setValue(T,"modelMatrix",k.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const ze=tt.uniformsGroups;for(let ke=0,Cr=ze.length;ke<Cr;ke++){const $n=ze[ke];qt.update($n,We),qt.bind($n,We)}}return We}function rh(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function oh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,j){const tt=J.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=B,J.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:j,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const j=J.get(w);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0};const ah=T.createFramebuffer();this.setRenderTarget=function(w,B=0,j=0){P=w,A=B,C=j;let tt=!0,k=null,_t=!1,Et=!1;if(w){const Ct=J.get(w);if(Ct.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(T.FRAMEBUFFER,null),tt=!1;else if(Ct.__webglFramebuffer===void 0)rt.setupRenderTarget(w);else if(Ct.__hasExternalTextures)rt.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(Ct.__boundDepthTexture!==Nt){if(Nt!==null&&J.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(w)}}const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);const Vt=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][j]:k=Vt[B],_t=!0):w.samples>0&&rt.useMultisampledRTT(w)===!1?k=J.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[j]:k=Vt,L.copy(w.viewport),F.copy(w.scissor),X=w.scissorTest}else L.copy(wt).multiplyScalar($).floor(),F.copy(Bt).multiplyScalar($).floor(),X=Yt;if(j!==0&&(k=ah),K.bindFramebuffer(T.FRAMEBUFFER,k)&&tt&&K.drawBuffers(w,k),K.viewport(L),K.scissor(F),K.setScissorTest(X),_t){const Ct=J.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,j)}else if(Et){const Ct=B;for(let zt=0;zt<w.textures.length;zt++){const Vt=J.get(w.textures[zt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+zt,Vt.__webglTexture,j,Ct)}}else if(w!==null&&j!==0){const Ct=J.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ct.__webglTexture,j)}b=-1},this.readRenderTargetPixels=function(w,B,j,tt,k,_t,Et,Lt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){K.bindFramebuffer(T.FRAMEBUFFER,Ct);try{const zt=w.textures[Lt],Vt=zt.format,Nt=zt.type;if(!V.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-tt&&j>=0&&j<=w.height-k&&(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Lt),T.readPixels(B,j,tt,k,Ut.convert(Vt),Ut.convert(Nt),_t))}finally{const zt=P!==null?J.get(P).__webglFramebuffer:null;K.bindFramebuffer(T.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(w,B,j,tt,k,_t,Et,Lt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(B>=0&&B<=w.width-tt&&j>=0&&j<=w.height-k){K.bindFramebuffer(T.FRAMEBUFFER,Ct);const zt=w.textures[Lt],Vt=zt.format,Nt=zt.type;if(!V.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,te),T.bufferData(T.PIXEL_PACK_BUFFER,_t.byteLength,T.STREAM_READ),w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Lt),T.readPixels(B,j,tt,k,Ut.convert(Vt),Ut.convert(Nt),0);const le=P!==null?J.get(P).__webglFramebuffer:null;K.bindFramebuffer(T.FRAMEBUFFER,le);const _e=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Kh(T,_e,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,te),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,_t),T.deleteBuffer(te),T.deleteSync(_e),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,j=0){const tt=Math.pow(2,-j),k=Math.floor(w.image.width*tt),_t=Math.floor(w.image.height*tt),Et=B!==null?B.x:0,Lt=B!==null?B.y:0;rt.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,j,0,0,Et,Lt,k,_t),K.unbindTexture()};const ch=T.createFramebuffer(),lh=T.createFramebuffer();this.copyTextureToTexture=function(w,B,j=null,tt=null,k=0,_t=null){_t===null&&(k!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=k,k=0):_t=0);let Et,Lt,Ct,zt,Vt,Nt,te,le,_e;const de=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(j!==null)Et=j.max.x-j.min.x,Lt=j.max.y-j.min.y,Ct=j.isBox3?j.max.z-j.min.z:1,zt=j.min.x,Vt=j.min.y,Nt=j.isBox3?j.min.z:0;else{const tn=Math.pow(2,-k);Et=Math.floor(de.width*tn),Lt=Math.floor(de.height*tn),w.isDataArrayTexture?Ct=de.depth:w.isData3DTexture?Ct=Math.floor(de.depth*tn):Ct=1,zt=0,Vt=0,Nt=0}tt!==null?(te=tt.x,le=tt.y,_e=tt.z):(te=0,le=0,_e=0);const ue=Ut.convert(B.format),Ot=Ut.convert(B.type);let me;B.isData3DTexture?(rt.setTexture3D(B,0),me=T.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(rt.setTexture2DArray(B,0),me=T.TEXTURE_2D_ARRAY):(rt.setTexture2D(B,0),me=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,B.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,B.unpackAlignment);const ne=T.getParameter(T.UNPACK_ROW_LENGTH),We=T.getParameter(T.UNPACK_IMAGE_HEIGHT),mi=T.getParameter(T.UNPACK_SKIP_PIXELS),Xe=T.getParameter(T.UNPACK_SKIP_ROWS),es=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,de.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,de.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,zt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Nt);const ge=w.isDataArrayTexture||w.isData3DTexture,Qe=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const tn=J.get(w),ze=J.get(B),ke=J.get(tn.__renderTarget),Cr=J.get(ze.__renderTarget);K.bindFramebuffer(T.READ_FRAMEBUFFER,ke.__webglFramebuffer),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let $n=0;$n<Ct;$n++)ge&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,J.get(w).__webglTexture,k,Nt+$n),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,J.get(B).__webglTexture,_t,_e+$n)),T.blitFramebuffer(zt,Vt,Et,Lt,te,le,Et,Lt,T.DEPTH_BUFFER_BIT,T.NEAREST);K.bindFramebuffer(T.READ_FRAMEBUFFER,null),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||J.has(w)){const tn=J.get(w),ze=J.get(B);K.bindFramebuffer(T.READ_FRAMEBUFFER,ch),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,lh);for(let ke=0;ke<Ct;ke++)ge?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,tn.__webglTexture,k,Nt+ke):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,tn.__webglTexture,k),Qe?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.__webglTexture,_t,_e+ke):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ze.__webglTexture,_t),k!==0?T.blitFramebuffer(zt,Vt,Et,Lt,te,le,Et,Lt,T.COLOR_BUFFER_BIT,T.NEAREST):Qe?T.copyTexSubImage3D(me,_t,te,le,_e+ke,zt,Vt,Et,Lt):T.copyTexSubImage2D(me,_t,te,le,zt,Vt,Et,Lt);K.bindFramebuffer(T.READ_FRAMEBUFFER,null),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Qe?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(me,_t,te,le,_e,Et,Lt,Ct,ue,Ot,de.data):B.isCompressedArrayTexture?T.compressedTexSubImage3D(me,_t,te,le,_e,Et,Lt,Ct,ue,de.data):T.texSubImage3D(me,_t,te,le,_e,Et,Lt,Ct,ue,Ot,de):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,_t,te,le,Et,Lt,ue,Ot,de.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,_t,te,le,de.width,de.height,ue,de.data):T.texSubImage2D(T.TEXTURE_2D,_t,te,le,Et,Lt,ue,Ot,de);T.pixelStorei(T.UNPACK_ROW_LENGTH,ne),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,We),T.pixelStorei(T.UNPACK_SKIP_PIXELS,mi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,es),_t===0&&B.generateMipmaps&&T.generateMipmap(me),K.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&rt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?rt.setTextureCube(w,0):w.isData3DTexture?rt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?rt.setTexture2DArray(w,0):rt.setTexture2D(w,0),K.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,K.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class tg{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}}class Vl{constructor(){this.id=0,this.v1=new Bi,this.v2=new Bi,this.v3=new Bi,this.normalModel=new I,this.vertexNormalsModel=[new I,new I,new I],this.vertexNormalsLength=0,this.color=new Gt,this.material=null,this.uvs=[new pt,new pt,new pt],this.z=0,this.renderOrder=0}}class Bi{constructor(){this.position=new I,this.positionWorld=new I,this.positionScreen=new pe,this.visible=!0}copy(t){this.positionWorld.copy(t.positionWorld),this.positionScreen.copy(t.positionScreen)}}class Gl{constructor(){this.id=0,this.v1=new Bi,this.v2=new Bi,this.vertexColors=[new Gt,new Gt],this.material=null,this.z=0,this.renderOrder=0}}class Wl{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new pt,this.material=null,this.renderOrder=0}}class eg{constructor(){let t,e,n=0,s,r,o=0,a,l,h=0,c,u,d=0,f,g,x=0,m;const p={objects:[],lights:[],elements:[]},S=new I,M=new pe,_=new Ln(new I(-1,-1,-1),new I(1,1,1)),R=new Ln,A=new Array(3),C=new se,P=new se,b=new se,y=new Sr,L=[],F=[],X=[],q=[],Z=[];function Y(){const O=[],ot=[],Q=[];let W=null;const ct=new Xt;function T(E){W=E,ct.getNormalMatrix(W.matrixWorld),O.length=0,ot.length=0,Q.length=0}function z(E){const v=E.position,U=E.positionWorld,G=E.positionScreen;U.copy(v).applyMatrix4(m),G.copy(U).applyMatrix4(P);const it=1/G.w;G.x*=it,G.y*=it,G.z*=it,E.visible=G.x>=-1&&G.x<=1&&G.y>=-1&&G.y<=1&&G.z>=-1&&G.z<=1}function H(E,v,U){s=Bt(),s.position.set(E,v,U),z(s)}function V(E,v,U){O.push(E,v,U)}function K(E,v,U){ot.push(E,v,U)}function lt(E,v){Q.push(E,v)}function J(E,v,U){return E.visible===!0||v.visible===!0||U.visible===!0?!0:(A[0]=E.positionScreen,A[1]=v.positionScreen,A[2]=U.positionScreen,_.intersectsBox(R.setFromPoints(A)))}function rt(E,v,U){return(U.positionScreen.x-E.positionScreen.x)*(v.positionScreen.y-E.positionScreen.y)-(U.positionScreen.y-E.positionScreen.y)*(v.positionScreen.x-E.positionScreen.x)<0}function It(E,v){const U=F[E],G=F[v];U.positionScreen.copy(U.position).applyMatrix4(b),G.positionScreen.copy(G.position).applyMatrix4(b),D(U.positionScreen,G.positionScreen)===!0&&(U.positionScreen.multiplyScalar(1/U.positionScreen.w),G.positionScreen.multiplyScalar(1/G.positionScreen.w),c=Kt(),c.id=W.id,c.v1.copy(U),c.v2.copy(G),c.z=Math.max(U.positionScreen.z,G.positionScreen.z),c.renderOrder=W.renderOrder,c.material=W.material,W.material.vertexColors&&(c.vertexColors[0].fromArray(ot,E*3),c.vertexColors[1].fromArray(ot,v*3)),p.elements.push(c))}function mt(E,v,U,G){const it=F[E],et=F[v],At=F[U];if(J(it,et,At)!==!1&&(G.side===Ve||rt(it,et,At)===!0)){a=Yt(),a.id=W.id,a.v1.copy(it),a.v2.copy(et),a.v3.copy(At),a.z=(it.positionScreen.z+et.positionScreen.z+At.positionScreen.z)/3,a.renderOrder=W.renderOrder,S.subVectors(At.position,et.position),M.subVectors(it.position,et.position),S.cross(M),a.normalModel.copy(S),a.normalModel.applyMatrix3(ct).normalize();for(let ft=0;ft<3;ft++){const Rt=a.vertexNormalsModel[ft];Rt.fromArray(O,arguments[ft]*3),Rt.applyMatrix3(ct).normalize(),a.uvs[ft].fromArray(Q,arguments[ft]*2)}a.vertexNormalsLength=3,a.material=G,G.vertexColors&&a.color.fromArray(ot,E*3),p.elements.push(a)}}return{setObject:T,projectVertex:z,checkTriangleVisibility:J,checkBackfaceCulling:rt,pushVertex:H,pushNormal:V,pushColor:K,pushUv:lt,pushLine:It,pushTriangle:mt}}const st=new Y;function $(O){if(O.visible===!1)return;if(O.isLight)p.lights.push(O);else if(O.isMesh||O.isLine||O.isPoints){if(O.material.visible===!1||O.frustumCulled===!0&&y.intersectsObject(O)===!1)return;ht(O)}else if(O.isSprite){if(O.material.visible===!1||O.frustumCulled===!0&&y.intersectsSprite(O)===!1)return;ht(O)}const ot=O.children;for(let Q=0,W=ot.length;Q<W;Q++)$(ot[Q])}function ht(O){t=wt(),t.id=O.id,t.object=O,S.setFromMatrixPosition(O.matrixWorld),S.applyMatrix4(P),t.z=S.z,t.renderOrder=O.renderOrder,p.objects.push(t)}this.projectScene=function(O,ot,Q,W){l=0,u=0,g=0,p.elements.length=0,O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),C.copy(ot.matrixWorldInverse),P.multiplyMatrices(ot.projectionMatrix,C),y.setFromProjectionMatrix(P),e=0,p.objects.length=0,p.lights.length=0,$(O),Q===!0&&p.objects.sort(nt);const ct=p.objects;for(let T=0,z=ct.length;T<z;T++){const H=ct[T].object,V=H.geometry;if(st.setObject(H),m=H.matrixWorld,r=0,H.isMesh){let K=H.material;const lt=Array.isArray(K),J=V.attributes,rt=V.groups;if(J.position===void 0)continue;const It=J.position.array;for(let mt=0,E=It.length;mt<E;mt+=3){let v=It[mt],U=It[mt+1],G=It[mt+2];const it=V.morphAttributes.position;if(it!==void 0){const et=V.morphTargetsRelative,At=H.morphTargetInfluences;for(let ft=0,Rt=it.length;ft<Rt;ft++){const Tt=At[ft];if(Tt===0)continue;const ut=it[ft];et?(v+=ut.getX(mt/3)*Tt,U+=ut.getY(mt/3)*Tt,G+=ut.getZ(mt/3)*Tt):(v+=(ut.getX(mt/3)-It[mt])*Tt,U+=(ut.getY(mt/3)-It[mt+1])*Tt,G+=(ut.getZ(mt/3)-It[mt+2])*Tt)}}st.pushVertex(v,U,G)}if(J.normal!==void 0){const mt=J.normal.array;for(let E=0,v=mt.length;E<v;E+=3)st.pushNormal(mt[E],mt[E+1],mt[E+2])}if(J.color!==void 0){const mt=J.color.array;for(let E=0,v=mt.length;E<v;E+=3)st.pushColor(mt[E],mt[E+1],mt[E+2])}if(J.uv!==void 0){const mt=J.uv.array;for(let E=0,v=mt.length;E<v;E+=2)st.pushUv(mt[E],mt[E+1])}if(V.index!==null){const mt=V.index.array;if(rt.length>0)for(let E=0;E<rt.length;E++){const v=rt[E];if(K=lt===!0?H.material[v.materialIndex]:H.material,K!==void 0)for(let U=v.start,G=v.start+v.count;U<G;U+=3)st.pushTriangle(mt[U],mt[U+1],mt[U+2],K)}else for(let E=0,v=mt.length;E<v;E+=3)st.pushTriangle(mt[E],mt[E+1],mt[E+2],K)}else if(rt.length>0)for(let mt=0;mt<rt.length;mt++){const E=rt[mt];if(K=lt===!0?H.material[E.materialIndex]:H.material,K!==void 0)for(let v=E.start,U=E.start+E.count;v<U;v+=3)st.pushTriangle(v,v+1,v+2,K)}else for(let mt=0,E=It.length/3;mt<E;mt+=3)st.pushTriangle(mt,mt+1,mt+2,K)}else if(H.isLine){b.multiplyMatrices(P,m);const K=V.attributes;if(K.position!==void 0){const lt=K.position.array;for(let J=0,rt=lt.length;J<rt;J+=3)st.pushVertex(lt[J],lt[J+1],lt[J+2]);if(K.color!==void 0){const J=K.color.array;for(let rt=0,It=J.length;rt<It;rt+=3)st.pushColor(J[rt],J[rt+1],J[rt+2])}if(V.index!==null){const J=V.index.array;for(let rt=0,It=J.length;rt<It;rt+=2)st.pushLine(J[rt],J[rt+1])}else{const J=H.isLineSegments?2:1;for(let rt=0,It=lt.length/3-1;rt<It;rt+=J)st.pushLine(rt,rt+1)}}}else if(H.isPoints){b.multiplyMatrices(P,m);const K=V.attributes;if(K.position!==void 0){const lt=K.position.array;for(let J=0,rt=lt.length;J<rt;J+=3)M.set(lt[J],lt[J+1],lt[J+2],1),M.applyMatrix4(b),gt(M,H,ot)}}else H.isSprite&&(H.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,H.matrixWorld),M.set(m.elements[12],m.elements[13],m.elements[14],1),M.applyMatrix4(P),gt(M,H,ot))}return W===!0&&p.elements.sort(nt),p};function gt(O,ot,Q){const W=1/O.w;O.z*=W,O.z>=-1&&O.z<=1&&(f=$t(),f.id=ot.id,f.x=O.x*W,f.y=O.y*W,f.z=O.z,f.renderOrder=ot.renderOrder,f.object=ot,f.rotation=ot.rotation,f.scale.x=ot.scale.x*Math.abs(f.x-(O.x+Q.projectionMatrix.elements[0])/(O.w+Q.projectionMatrix.elements[12])),f.scale.y=ot.scale.y*Math.abs(f.y-(O.y+Q.projectionMatrix.elements[5])/(O.w+Q.projectionMatrix.elements[13])),f.material=ot.material,p.elements.push(f))}function wt(){if(e===n){const O=new tg;return L.push(O),n++,e++,O}return L[e++]}function Bt(){if(r===o){const O=new Bi;return F.push(O),o++,r++,O}return F[r++]}function Yt(){if(l===h){const O=new Vl;return X.push(O),h++,l++,O}return X[l++]}function Kt(){if(u===d){const O=new Gl;return q.push(O),d++,u++,O}return q[u++]}function $t(){if(g===x){const O=new Wl;return Z.push(O),x++,g++,O}return Z[g++]}function nt(O,ot){return O.renderOrder!==ot.renderOrder?O.renderOrder-ot.renderOrder:O.z!==ot.z?ot.z-O.z:O.id!==ot.id?O.id-ot.id:0}function D(O,ot){let Q=0,W=1;const ct=O.z+O.w,T=ot.z+ot.w,z=-O.z+O.w,H=-ot.z+ot.w;return ct>=0&&T>=0&&z>=0&&H>=0?!0:ct<0&&T<0||z<0&&H<0?!1:(ct<0?Q=Math.max(Q,ct/(ct-T)):T<0&&(W=Math.min(W,ct/(ct-T))),z<0?Q=Math.max(Q,z/(z-H)):H<0&&(W=Math.min(W,z/(z-H))),W<Q?!1:(O.lerp(ot,Q),ot.lerp(O,1-W),!0))}}}class ng{constructor(){let t,e,n,s,r,o,a,l,h,c,u,d=0,f=null,g=1,x,m;const p=this,S=new Sc,M=new Sc,_=new Gt,R=new Gt,A=new Gt,C=new Gt,P=new Gt,b=new Gt,y=new I,L=new I,F=new I,X=new Xt,q=new se,Z=new se,Y=[],st=new eg,$=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=$,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=Le,this.info={render:{vertices:0,faces:0}},this.setQuality=function(Q){switch(Q){case"high":g=1;break;case"low":g=0;break}},this.setClearColor=function(Q){b.set(Q)},this.setPixelRatio=function(){},this.setSize=function(Q,W){s=Q,r=W,o=s/2,a=r/2,$.setAttribute("viewBox",-o+" "+-a+" "+s+" "+r),$.setAttribute("width",s),$.setAttribute("height",r),S.min.set(-o,-a),S.max.set(o,a)},this.getSize=function(){return{width:s,height:r}},this.setPrecision=function(Q){f=Q};function ht(){for(d=0;$.childNodes.length>0;)$.removeChild($.childNodes[0])}function gt(Q){return f!==null?Q.toFixed(f):Q}this.clear=function(){ht(),$.style.backgroundColor=b.getStyle(p.outputColorSpace)},this.render=function(Q,W){if(!(W instanceof va)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}const ct=Q.background;ct&&ct.isColor?(ht(),$.style.backgroundColor=ct.getStyle(p.outputColorSpace)):this.autoClear===!0&&this.clear(),p.info.render.vertices=0,p.info.render.faces=0,q.copy(W.matrixWorldInverse),Z.multiplyMatrices(W.projectionMatrix,q),t=st.projectScene(Q,W,this.sortObjects,this.sortElements),e=t.elements,n=t.lights,X.getNormalMatrix(W.matrixWorldInverse),wt(n),x="",m="";for(let T=0,z=e.length;T<z;T++){const H=e[T],V=H.material;if(!(V===void 0||V.opacity===0)){if(M.makeEmpty(),H instanceof Wl)l=H,l.x*=o,l.y*=-a,Yt(l,H,V);else if(H instanceof Gl)l=H.v1,h=H.v2,l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,M.setFromPoints([l.positionScreen,h.positionScreen]),S.intersectsBox(M)===!0&&Kt(l,h,V);else if(H instanceof Vl){if(l=H.v1,h=H.v2,c=H.v3,l.positionScreen.z<-1||l.positionScreen.z>1||h.positionScreen.z<-1||h.positionScreen.z>1||c.positionScreen.z<-1||c.positionScreen.z>1)continue;l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,c.positionScreen.x*=o,c.positionScreen.y*=-a,this.overdraw>0&&(nt(l.positionScreen,h.positionScreen,this.overdraw),nt(h.positionScreen,c.positionScreen,this.overdraw),nt(c.positionScreen,l.positionScreen,this.overdraw)),M.setFromPoints([l.positionScreen,h.positionScreen,c.positionScreen]),S.intersectsBox(M)===!0&&$t(l,h,c,H,V)}}}O(),Q.traverseVisible(function(T){if(T.isSVGObject){if(y.setFromMatrixPosition(T.matrixWorld),y.applyMatrix4(Z),y.z<-1||y.z>1)return;const z=y.x*o,H=-y.y*a,V=T.node;V.setAttribute("transform","translate("+z+","+H+")"),$.appendChild(V)}})};function wt(Q){A.setRGB(0,0,0),C.setRGB(0,0,0),P.setRGB(0,0,0);for(let W=0,ct=Q.length;W<ct;W++){const T=Q[W],z=T.color;T.isAmbientLight?(A.r+=z.r,A.g+=z.g,A.b+=z.b):T.isDirectionalLight?(C.r+=z.r,C.g+=z.g,C.b+=z.b):T.isPointLight&&(P.r+=z.r,P.g+=z.g,P.b+=z.b)}}function Bt(Q,W,ct,T){for(let z=0,H=Q.length;z<H;z++){const V=Q[z],K=V.color;if(V.isDirectionalLight){const lt=y.setFromMatrixPosition(V.matrixWorld).normalize();let J=ct.dot(lt);if(J<=0)continue;J*=V.intensity,T.r+=K.r*J,T.g+=K.g*J,T.b+=K.b*J}else if(V.isPointLight){const lt=y.setFromMatrixPosition(V.matrixWorld);let J=ct.dot(y.subVectors(lt,W).normalize());if(J<=0||(J*=V.distance==0?1:1-Math.min(W.distanceTo(lt)/V.distance,1),J==0))continue;J*=V.intensity,T.r+=K.r*J,T.g+=K.g*J,T.b+=K.b*J}}}function Yt(Q,W,ct){let T=W.scale.x*o,z=W.scale.y*a;ct.isPointsMaterial&&(T*=ct.size,z*=ct.size);const H="M"+gt(Q.x-T*.5)+","+gt(Q.y-z*.5)+"h"+gt(T)+"v"+gt(z)+"h"+gt(-T)+"z";let V="";(ct.isSpriteMaterial||ct.isPointsMaterial)&&(V="fill:"+ct.color.getStyle(p.outputColorSpace)+";fill-opacity:"+ct.opacity),D(V,H)}function Kt(Q,W,ct){const T="M"+gt(Q.positionScreen.x)+","+gt(Q.positionScreen.y)+"L"+gt(W.positionScreen.x)+","+gt(W.positionScreen.y);if(ct.isLineBasicMaterial){let z="fill:none;stroke:"+ct.color.getStyle(p.outputColorSpace)+";stroke-opacity:"+ct.opacity+";stroke-width:"+ct.linewidth+";stroke-linecap:"+ct.linecap;ct.isLineDashedMaterial&&(z=z+";stroke-dasharray:"+ct.dashSize+","+ct.gapSize),D(z,T)}}function $t(Q,W,ct,T,z){p.info.render.vertices+=3,p.info.render.faces++;const H="M"+gt(Q.positionScreen.x)+","+gt(Q.positionScreen.y)+"L"+gt(W.positionScreen.x)+","+gt(W.positionScreen.y)+"L"+gt(ct.positionScreen.x)+","+gt(ct.positionScreen.y)+"z";let V="";z.isMeshBasicMaterial?(_.copy(z.color),z.vertexColors&&_.multiply(T.color)):z.isMeshLambertMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial?(R.copy(z.color),z.vertexColors&&R.multiply(T.color),_.copy(A),L.copy(Q.positionWorld).add(W.positionWorld).add(ct.positionWorld).divideScalar(3),Bt(n,L,T.normalModel,_),_.multiply(R).add(z.emissive)):z.isMeshNormalMaterial&&(F.copy(T.normalModel).applyMatrix3(X).normalize(),_.setRGB(F.x,F.y,F.z).multiplyScalar(.5).addScalar(.5)),z.wireframe?V="fill:none;stroke:"+_.getStyle(p.outputColorSpace)+";stroke-opacity:"+z.opacity+";stroke-width:"+z.wireframeLinewidth+";stroke-linecap:"+z.wireframeLinecap+";stroke-linejoin:"+z.wireframeLinejoin:V="fill:"+_.getStyle(p.outputColorSpace)+";fill-opacity:"+z.opacity,D(V,H)}function nt(Q,W,ct){let T=W.x-Q.x,z=W.y-Q.y;const H=T*T+z*z;if(H===0)return;const V=ct/Math.sqrt(H);T*=V,z*=V,W.x+=T,W.y+=z,Q.x-=T,Q.y-=z}function D(Q,W){m===Q?x+=W:(O(),m=Q,x=W)}function O(){x&&(u=ot(d++),u.setAttribute("d",x),u.setAttribute("style",m),$.appendChild(u)),x="",m=""}function ot(Q){return Y[Q]==null&&(Y[Q]=document.createElementNS("http://www.w3.org/2000/svg","path"),g==0&&Y[Q].setAttribute("shape-rendering","crispEdges")),Y[Q]}}}function ig(i){if(!(new URLSearchParams(location.search).get("renderer")==="software"))try{const n=new Q0({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});return n.setPixelRatio(Math.min(devicePixelRatio,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=rl,n.outputColorSpace=Le,n.toneMapping=ol,n.toneMappingExposure=1.1,n.setClearColor(0,0),{renderer:n,software:!1}}catch{}const e=new ng;return e.setQuality("low"),e.domElement.id="game",e.domElement.setAttribute("role","img"),e.domElement.setAttribute("aria-label","Underwater driving world"),i.replaceWith(e.domElement),{renderer:e,software:!0}}function Xl(i){const t=[];i.traverse(n=>{n.isInstancedMesh&&!n.userData.softwareCopies&&t.push(n)});const e=new se;for(const n of t){n.visible=!1;const s=[],r=new ce;r.position.copy(n.position),n.parent.add(r);for(let o=0;o<n.count;o++){const a=new Ke(n.geometry,n.material);a.renderOrder=n.renderOrder,n.getMatrixAt(o,e),e.decompose(a.position,a.quaternion,a.scale),r.add(a),s.push(a)}n.userData.softwareCopies=s}}function ei(i,t,e){e.updateMatrix(),i.setMatrixAt(t,e.matrix);const n=i.userData.softwareCopies?.[t];n&&(n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale),n.visible=e.scale.x>0)}const Tr=200411,Pa=2,gn=1800,be=128,Ee=[{id:"conch",name:"Conch Street",x:-440,z:420,color:"#eec46f",accent:16032557},{id:"commons",name:"Restaurant Commons",x:-60,z:30,color:"#d6bf78",accent:14387314},{id:"fields",name:"Jellyfish Fields",x:-600,z:-180,color:"#b8c992",accent:15570889},{id:"lagoon",name:"Goo Lagoon",x:400,z:450,color:"#84c9b7",accent:7590342},{id:"wreck",name:"Wreck Cove",x:650,z:-140,color:"#c8b3a0",accent:13667944},{id:"ridge",name:"Sand Mountain",x:140,z:-650,color:"#e9bb8b",accent:15582361},{id:"neptune",name:"Neptune Terrace",x:-360,z:-630,color:"#a9c9cf",accent:8640466}],sg=[{id:"town-loop",width:24,closed:!0,points:[[-440,440],[-60,650],[400,500],[730,310],[700,-140],[450,-460],[140,-720],[-360,-710],[-700,-420],[-720,-100],[-570,210]]},{id:"conch-commons",width:20,points:[[-440,440],[-400,250],[-250,140],[-60,30]]},{id:"fields-commons",width:20,points:[[-720,-100],[-540,-130],[-310,-110],[-60,30]]},{id:"lagoon-commons",width:22,points:[[400,500],[330,300],[140,210],[-60,30]]},{id:"wreck-commons",width:22,points:[[700,-140],[490,-160],[280,-50],[-60,30]]},{id:"ridge-commons",width:20,points:[[140,-720],[210,-450],[80,-200],[-60,30]]},{id:"palace-commons",width:20,points:[[-360,-710],[-300,-460],[-180,-250],[-60,30]]}],ws=[{id:"pineapple",type:"pineapple",x:-468,z:295,radius:21},{id:"squidward",type:"head",x:-386,z:350,radius:19},{id:"patrick",type:"rock",x:-335,z:390,radius:18},{id:"krusty",type:"krusty",x:-51,z:-85,radius:30},{id:"chum",type:"bucket",x:110,z:110,radius:25},{id:"goober",type:"goober",x:440,z:350,radius:32},{id:"wreck",type:"ship",x:765,z:-265,radius:35},{id:"castle",type:"castle",x:-400,z:-595,radius:45}],ql=[{id:"conch-hop",x:-480,z:470,width:16,length:25,height:5,heading:0},{id:"fields-leap",x:-590,z:-255,width:20,length:34,height:9,heading:-.5},{id:"lagoon-jump",x:515,z:440,width:20,length:32,height:7,heading:-Math.PI/2},{id:"wreck-launch",x:660,z:-60,width:18,length:30,height:9,heading:Math.PI},{id:"ridge-flight",x:130,z:-595,width:22,length:38,height:13,heading:0},{id:"ridge-return",x:300,z:-630,width:20,length:36,height:11,heading:Math.PI/2},{id:"palace-rise",x:-470,z:-670,width:18,length:28,height:7,heading:Math.PI/2},{id:"commons-stunt",x:-140,z:55,width:16,length:24,height:6,heading:Math.PI/2},{id:"southern-dune",x:20,z:610,width:22,length:34,height:8,heading:-Math.PI/2}],Ts=[{id:"coral-grotto",name:"The coral grotto",x:-780,z:-340},{id:"pearl-garden",name:"The pearl garden",x:550,z:640},{id:"sunken-treasure",name:"Sunken treasure",x:800,z:-320},{id:"ridge-lookout",name:"The mountain lookout",x:310,z:-780},{id:"royal-garden",name:"The royal garden",x:-560,z:-780},{id:"kelp-arch",name:"The kelp arch",x:-760,z:290},{id:"sand-circle",name:"The sand circle",x:90,z:760}];function Yl(i,t){let e=Ee[0],n=1/0;for(const s of Ee){const r=(i-s.x)**2+(t-s.z)**2;r<n&&(e=s,n=r)}return e}function ur(i="conch"){const t=Ee.find(o=>o.id===i)??Ee[0],e={conch:[-440,435,0],commons:[-60,90,0],fields:[-600,-130,Math.PI/2],lagoon:[400,510,0],wreck:[700,-100,0],ridge:[140,-740,Math.PI],neptune:[-360,-735,Math.PI]},[n,s,r]=e[t.id];return{x:n,z:s,heading:r}}const Gn=(i,t,e)=>i+(t-i)*e,ye=(i,t,e)=>Math.max(t,Math.min(e,i)),As=i=>i*i*(3-2*i);function ve(i,t,e=0){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(Tr+e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function fr(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=As(i-n),o=As(t-s);return Gn(Gn(ve(n,s,e),ve(n+1,s,e),r),Gn(ve(n,s+1,e),ve(n+1,s+1,e),r),o)*2-1}function _r(i,t){const e=43*Math.exp(-((i-140)**2/9e4+(t+650)**2/42e3)),n=22*Math.exp(-((i+360)**2+(t+620)**2)/85e3),s=22*As(ye((Math.max(Math.abs(i),Math.abs(t))-780)/120,0,1));return 3+fr(i/230,t/230)*6+fr(i/73,t/73,71)*2.5+fr(i/24,t/24,19)*.55+e+n+s}function rg(i,t,e,n,s){const r=s*s,o=r*s;return[0,1].map(a=>.5*(2*t[a]+(-i[a]+e[a])*s+(2*i[a]-5*t[a]+4*e[a]-n[a])*r+(-i[a]+3*t[a]-3*e[a]+n[a])*o))}const Cn=sg.map(i=>{const t=i.points,e=t.length,n=[],s=l=>i.closed?t[(l+e)%e]:t[ye(l,0,e-1)],r=i.closed?e:e-1;for(let l=0;l<r;l++){const h=Math.ceil(Math.hypot(s(l+1)[0]-s(l)[0],s(l+1)[1]-s(l)[1])/9);for(let c=0;c<h;c++)n.push(rg(s(l-1),s(l),s(l+1),s(l+2),c/h))}n.push(i.closed?n[0]:t[e-1]);let o=0;const a=n.map(([l,h],c)=>(c&&(o+=Math.hypot(l-n[c-1][0],h-n[c-1][1])),{x:l,z:h,y:_r(l,h),distance:o}));return{...i,nodes:a,length:o}}),dr=new Map,Ui=64,$l=[];for(const i of Cn)for(let t=1;t<i.nodes.length;t++){const e=i.nodes[t-1],n=i.nodes[t],s={a:e,b:n,width:i.width,path:i.id};$l.push(s);for(let r=Math.floor((Math.min(e.x,n.x)-42)/Ui);r<=Math.floor((Math.max(e.x,n.x)+42)/Ui);r++)for(let o=Math.floor((Math.min(e.z,n.z)-42)/Ui);o<=Math.floor((Math.max(e.z,n.z)+42)/Ui);o++){const a=`${r},${o}`;dr.has(a)||dr.set(a,[]),dr.get(a).push(s)}}function li(i,t,e=!1){let n={distance:1/0,x:i,z:t,y:_r(i,t),width:20,heading:0};const s=e?$l:dr.get(`${Math.floor(i/Ui)},${Math.floor(t/Ui)}`)??[];for(const r of s){const o=r.b.x-r.a.x,a=r.b.z-r.a.z,l=o*o+a*a,h=ye(((i-r.a.x)*o+(t-r.a.z)*a)/(l||1),0,1),c=r.a.x+o*h,u=r.a.z+a*h,d=Math.hypot(c-i,u-t);d<n.distance&&(n={distance:d,x:c,z:u,y:Gn(r.a.y,r.b.y,h),width:r.width,heading:Math.atan2(-o,-a)})}return n}function Ni(i,t){let e=_r(i,t);const n=li(i,t);n.distance<n.width/2+20&&(e=Gn(n.y,e,As(ye((n.distance-n.width/2)/20,0,1))));for(const s of ws){const r=Math.hypot(i-s.x,t-s.z);r<s.radius+18&&(e=Gn(_r(s.x,s.z),e,As(ye((r-s.radius)/18,0,1))))}return e}function ee(i,t){const e=Math.floor(i/4)*4,n=Math.floor(t/4)*4,s=(i-e)/4,r=(t-n)/4,o=Ni(e,n),a=Ni(e+4,n),l=Ni(e,n+4),h=Ni(e+4,n+4);return s+r<=1?o+(a-o)*s+(l-o)*r:h+(l-h)*(1-s)+(a-h)*(1-r)}function La(i,t,e){const n=i-e.x,s=t-e.z,r=Math.cos(e.heading??0),o=Math.sin(e.heading??0),a=r*n-o*s,l=o*n+r*s;return Math.abs(a)>e.width/2||Math.abs(l)>e.length/2?null:e.baseY+e.height*(.5-l/e.length)}function Jl(i,t){const e=Yl(i,t),n=fr(i/38,t/38,128)*.055;return{conch:[.86,.72,.43],commons:[.83,.73,.48],fields:[.64,.73,.5],lagoon:[.75,.79,.55],wreck:[.65,.65,.57],ridge:[.84,.65,.44],neptune:[.69,.76,.69]}[e.id].map(r=>ye(r+n,0,1))}function og(i,t,e=0){return Math.abs(i)<=gn/2-e&&Math.abs(t)<=gn/2-e}const Ia=[{id:"conch-yard",area:"conch",kind:"yard",x:-462,z:360,heading:0,label:"CONCH POST"},{id:"conch-corner",area:"conch",kind:"stop",x:-516,z:426,heading:.55,label:"CONCH STREET"},{id:"commons-market",area:"commons",kind:"market",x:-122,z:-43,heading:.25,label:"REEF MARKET"},{id:"commons-patio",area:"commons",kind:"patio",x:24,z:-25,heading:-.15},{id:"commons-stop",area:"commons",kind:"stop",x:-105,z:129,heading:.5,label:"RESTAURANT ROW"},{id:"fields-rest",area:"fields",kind:"patio",x:-646,z:-180,heading:.2},{id:"lagoon-patio",area:"lagoon",kind:"patio",x:461,z:408,heading:-.3},{id:"lagoon-stall",area:"lagoon",kind:"market",x:345,z:440,heading:-.1,label:"SHELL SNACKS"},{id:"lagoon-dock",area:"lagoon",kind:"dock",x:535,z:545,heading:.55,label:"LAGOON LANDING"},{id:"wreck-workshop",area:"wreck",kind:"workshop",x:641,z:-191,heading:.55,label:"BOAT REPAIR"},{id:"wreck-dock",area:"wreck",kind:"dock",x:757,z:-201,heading:.2,label:"COVE LANDING"},{id:"ridge-rest",area:"ridge",kind:"stop",x:87,z:-692,heading:-.2,label:"MOUNTAIN TRAIL"},{id:"palace-patio",area:"neptune",kind:"patio",x:-464,z:-585,heading:.2},{id:"palace-stall",area:"neptune",kind:"market",x:-305,z:-600,heading:-.2,label:"PEARL EXCHANGE"}];function Zl(i){return i.kind==="dock"?17:13}const ag=[...ws,...Ia.map(i=>({...i,radius:Zl(i)-2}))].map(i=>({...i,road:li(i.x,i.z,!0)}));function cg(i,t){let e=0;for(const n of ag){const s=n.road.x-n.x,r=n.road.z-n.z,o=ye(((i-n.x)*s+(t-n.z)*r)/(s*s+r*r||1),0,1),a=Math.hypot(i-n.x-s*o,t-n.z-r*o),l=Math.hypot(i-n.x,t-n.z);e=Math.max(e,ye((5-a)/2,0,1),ye((n.radius+7-l)/4,0,1))}return e}const lg=[.0802,.2423,.2582],uo=i=>i<=.0031308?i*12.92:1.055*i**(1/2.4)-.055;function Kl(i,t){const e=Jl(i,t),n=li(i,t),s=ye((n.width/2+1-n.distance)/2,0,1),r=.98+ve(Math.floor(i*2),Math.floor(t*2),51)*.04,o=cg(i,t),a=ye(1-Math.abs(n.distance-n.width/2)/3,0,1),l=Number.isFinite(n.distance)?Math.sin(n.distance*1.8)*.018:0;return e.map((h,c)=>{const u=Gn(h,[.63,.57,.4][c],o*.65);return Gn(u,lg[c]+l+a*.1,s)*r})}function hg(i,t,e=128,n=65){const s=new Uint8Array(n*n*4);for(let r=0;r<n;r++)for(let o=0;o<n;o++){const a=Kl(i+o/(n-1)*e,t+r/(n-1)*e),l=(r*n+o)*4;s[l]=Math.round(ye(uo(a[0]),0,1)*255),s[l+1]=Math.round(ye(uo(a[1]),0,1)*255),s[l+2]=Math.round(ye(uo(a[2]),0,1)*255),s[l+3]=255}return{pixels:s,resolution:n}}const jl=[{id:"conch-water",kind:"tower",x:-550,z:360,radius:13,label:"CONCH WATER"},{id:"fields-observatory",kind:"observatory",x:-615,z:-340,radius:14,label:"JELLY WATCH"},{id:"commons-sign",kind:"billboard",x:30,z:-195,radius:12,label:"FRESH PATTIES"},{id:"lagoon-boardwalk",kind:"boardwalk",x:575,z:620,radius:33,label:"LAGOON WALK"},{id:"wreck-beacon",kind:"beacon",x:550,z:-290,radius:12,label:"COVE BEACON"},{id:"ridge-crane",kind:"crane",x:310,z:-550,radius:16,label:"SAND WORKS"},{id:"royal-fountain",kind:"fountain",x:-520,z:-565,radius:12,label:"PEARL COURT"}];function $c(i,t){return{x:(i+.15+ve(i,t,24)*.7)*18,z:(t+.15+ve(i,t,25)*.7)*18,priority:ve(i,t,26)}}function ug(i,t){const e=$c(i,t);for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(!n&&!s)continue;const r=$c(i+n,t+s);if(r.priority<e.priority&&Math.hypot(e.x-r.x,e.z-r.z)<12)return null}return e}function Jc(i,t,e=32){const n=(e+1)**2,s=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n*2),a=new Uint32Array(e*e*6),l=i*be,h=t*be,c=be/e;for(let g=0;g<=e;g++)for(let x=0;x<=e;x++){const m=(g*(e+1)+x)*3,p=l+x*c,S=h+g*c;o.set([p/28,S/28],m/3*2),s.set([x*c,Ni(p,S),g*c],m),r.set(Jl(p,S),m)}let u=0;for(let g=0;g<e;g++)for(let x=0;x<e;x++){const m=g*(e+1)+x,p=m+1,S=m+e+1,M=S+1;a.set([m,S,p,p,S,M],u),u+=6}const d=[];for(let g=Math.floor(l/18);g<=Math.floor((l+be)/18);g++)for(let x=Math.floor(h/18);x<=Math.floor((h+be)/18);x++){const m=ug(g,x);if(!m||m.x<l||m.x>=l+be||m.z<h||m.z>=h+be||!og(m.x,m.z,15))continue;const p=li(m.x,m.z);if(ql.some(R=>Math.hypot(m.x-R.x,m.z-R.z)<R.length/2+16)||Ts.some(R=>Math.hypot(m.x-R.x,m.z-R.z)<23)||Ia.some(R=>Math.hypot(m.x-R.x,m.z-R.z)<Zl(R)+6)||jl.some(R=>Math.hypot(m.x-R.x,m.z-R.z)<R.radius+8)||p.distance<p.width/2+9||ws.some(R=>Math.hypot(m.x-R.x,m.z-R.z)<R.radius+8))continue;const S=Yl(m.x,m.z),M=ve(g,x,39),_=S.id==="wreck"?M<.45?"rock":"coral":S.id==="fields"?M<.55?"coral":"kelp":M<.22?"rock":M<.56?"kelp":"coral";_!=="rock"&&ve(g,x,903)>=.35||d.push({id:`flora:${g}:${x}`,x:m.x,y:ee(m.x,m.z),z:m.z,type:_,rotation:ve(g,x,40)*Math.PI*2,scale:.7+ve(g,x,41)*1.8,color:Math.floor(ve(g,x,42)*3)})}const f=hg(l,h);return{cx:i,cz:t,segments:e,positions:s,colors:r,uv:o,indices:a,props:d,paint:f.pixels,paintSize:f.resolution}}function fg(i,t=4){const e=[];for(let a=1;a<i.nodes.length;a++){const l=i.nodes[a-1],h=i.nodes[a],c=Math.ceil(Math.hypot(h.x-l.x,h.z-l.z)/t);for(let u=0;u<c;u++){const d=u/c;e.push({x:l.x+(h.x-l.x)*d,z:l.z+(h.z-l.z)*d})}}e.push(i.nodes.at(-1));const n=Math.ceil(i.width/t),s=[],r=[];e.forEach((a,l)=>{const h=e[Math.max(0,l-1)],c=e[Math.min(e.length-1,l+1)],u=c.x-h.x,d=c.z-h.z,f=Math.hypot(u,d)||1;for(let g=0;g<=n;g++){const x=(g/n-.5)*i.width,m=a.x+d/f*x,p=a.z-u/f*x;s.push(m,ee(m,p)+.25,p)}if(l)for(let g=0;g<n;g++){const x=(l-1)*(n+1)+g,m=x+n+1;r.push(x,m,x+1,x+1,m,m+1)}});const o=new Me;return o.setAttribute("position",new Qt(s,3)),o.setIndex(r),o.computeVertexNormals(),o.computeBoundingSphere(),o}class Zc{constructor(t=48){this.size=t,this.cells=new Map}key(t,e){return`${Math.floor(t/this.size)},${Math.floor(e/this.size)}`}add(t){const e=[],n=Math.max(t.w??0,t.d??0,t.radius??0)/2;for(let s=Math.floor((t.x-n)/this.size);s<=Math.floor((t.x+n)/this.size);s++)for(let r=Math.floor((t.z-n)/this.size);r<=Math.floor((t.z+n)/this.size);r++){const o=`${s},${r}`;this.cells.has(o)||this.cells.set(o,new Set),this.cells.get(o).add(t),e.push(o)}t.hashKeys=e}remove(t){for(const e of t.hashKeys??[]){const n=this.cells.get(e);n?.delete(t),n?.size||this.cells.delete(e)}}query(t,e,n=8){const s=new Set;for(let r=Math.floor((t-n)/this.size);r<=Math.floor((t+n)/this.size);r++)for(let o=Math.floor((e-n)/this.size);o<=Math.floor((e+n)/this.size);o++)for(const a of this.cells.get(`${r},${o}`)??[])s.add(a);return s}}function aa(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Me;let h=0;for(let c=0;c<i.length;++c){const u=i[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(u)}for(const c in r){const u=Kc(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[c].length;++x)f.push(o[c][x][d]);const g=Kc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Kc(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new Ue(o,e,n);let l=0;for(let h=0;h<i.length;++h){const c=i[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<e;g++){const x=c.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}const fo=new Map,po=new Map,Ql={value:0},Ie=Math.PI*2,dg=i=>Math.min(1,Math.max(0,i)),pg=(i,t,e=0)=>{let n=Math.imul(i+e,374761393)^Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function mg(i,t,e){t=(t%1+1)%1,e=(e%1+1)%1;const n=Math.sin(Ie*(t*71+e*53))*.015,s=Math.sin(Ie*t*3)*Math.cos(Ie*e*4);let r,o;if(i==="wood"){const a=t*6,l=Math.min(a%1,1-a%1)<.023,h=Math.sin(Ie*(t*58+Math.sin(e*Ie*2)*.22)),c=Math.sin(Ie*(t*7+Math.sin(e*Ie)*.35));r=l?.15:.56+h*.045+c*.03,o=l?.48:.91+h*.045+c*.04+s*.04}else if(i==="stone"){const a=Math.floor(e*6),l=(t*5+a%2*.5)%1,h=Math.min(l,1-l)<.018||e*6%1<.035;r=h?.27:.6+s*.055+n,o=h?.68:.92+s*.08+n}else if(i==="metal"){const a=Math.sin(Ie*t*115)*Math.sin(Ie*e*3),l=Math.max(0,s-.3);r=.5+a*.012+n*.3,o=.95+a*.025-l*.13}else if(i==="bun"){const a=Math.sin(Ie*t*47)*Math.sin(Ie*e*41);r=.5+a*.038+s*.02,o=.96+s*.055+a*.018}else if(i==="rubber"){const a=Math.sin(Ie*(t*18+Math.sin(e*Ie*8)*.18));r=a>.4?.66:.39,o=a>.4?1:.75}else if(i==="cloth"){const a=Math.sin(Ie*t*90)*Math.sin(Ie*e*90);r=.5+a*.015,o=.96+a*.035+s*.02}else{const a=Math.sin(Ie*e*16+Math.sin(Ie*t*4)*1.7);r=.5+a*.12+n*.2,o=.94+a*.04+s*.02}return{height:r,shade:o}}function th(i,t=512){const e=`${i}:${t}`;if(fo.has(e))return fo.get(e);const n=new Uint8Array(t*t*4),s=new Uint8Array(t*t*4),r=new Float32Array(t*t);for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=h*t+c,d=mg(i,c/t,h/t);r[u]=d.height;const f=Math.round(dg(d.shade+(pg(c,h,57)-.5)*.045)*255);n.set([f,f,f,255],u*4)}const o=(h,c)=>r[(c+t)%t*t+(h+t)%t];for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=(o(c+1,h)-o(c-1,h))*2,d=(o(c,h+1)-o(c,h-1))*2,f=Math.hypot(u,d,1),g=(h*t+c)*4;s.set([Math.round((-u/f*.5+.5)*255),Math.round((-d/f*.5+.5)*255),Math.round((1/f*.5+.5)*255),255],g)}const a=(h,c)=>{const u=new ya(h,t,t,Ze);return u.colorSpace=c,u.wrapS=u.wrapT=ms,u.magFilter=Je,u.minFilter=kn,u.generateMipmaps=!0,u.anisotropy=4,u.needsUpdate=!0,u},l={color:a(n,Le),normal:a(s,An)};return fo.set(e,l),l}function eh(i,t=!1){const e=i.onBeforeCompile;return i.onBeforeCompile=(n,s)=>{e.call(i,n,s),n.uniforms.waterTime=Ql,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
       #include <opaque_fragment>`)},i.customProgramCacheKey=()=>`water-surface-v2:${t}`,i}function gg(i){Ql.value=i}function re(i,t=16777215){const e=`${i}:${t}`;if(po.has(e))return po.get(e);const n=th(i),s={wood:[13,.2],stone:[5,.42],metal:[55,.16],bun:[10,.24],rubber:[4,.38],cloth:[3,.18],sand:[5,.35]}[i]??[10,.2],r=new br({color:t,map:n.color,normalMap:n.normal,normalScale:new pt(s[1],s[1]),shininess:s[0],specular:i==="metal"?7642265:2370342,side:Ve});return r.userData.surface=i,eh(r),po.set(e,r),r}const mo=new Map;function fn(i,t=!1,e=1){const n=`${i}:${t}:${e}`;return mo.has(n)||mo.set(n,new(t?yr:br)({color:i,transparent:e<1,opacity:e,side:Ve,...t?{}:{shininess:14,specular:3161142}})),mo.get(n)}const xg=new pi(1,1,1),_g=new In(1,20,12),vg=new qn(1,1,1,16);function jt(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){const h=new Ke(t,typeof e=="number"?fn(e):e);return h.position.set(n,s,r),h.scale.set(o,a,l),h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function Ar(i,t=null){const e=new Set([11434323,8873281,14533514,8149318,10647889,13215092,9465685,6442310,8942677,10845528,10976592]),n=new Set([8890542,5270393,12437176,9214885,15259289,9021870,7639700,5468020,4812400,7970199,15262396]),s=new Set([15246664,16039003]);return i.traverse(r=>{if(!r.isMesh||!r.material.color||r.material.map||r.material.transparent)return;const o=r.material.color.getHex(),a=s.has(o)?"bun":e.has(o)?"wood":n.has(o)?"metal":[2503747,3491417,3427154].includes(o)?"rubber":t;a&&(r.material=re(a,o))}),i}function Yi(i){i.updateMatrixWorld(!0);const t=i.matrixWorld.clone().invert(),e=new Map;i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;const s=n.material.uuid;e.has(s)||e.set(s,{material:n.material,geometries:[]});const r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();r.applyMatrix4(new se().multiplyMatrices(t,n.matrixWorld)),e.get(s).geometries.push(r)}),i.clear();for(const{material:n,geometries:s}of e.values()){const r=aa(s);s.forEach(o=>o.dispose()),r&&jt(i,r,n)}return i}const dt=(i,t,e,n,s,r,o,a)=>jt(i,xg,a,t,e,n,s,r,o),Ft=(i,t,e,n,s,r,o,a)=>jt(i,_g,a,t,e,n,s,r,o),Ht=(i,t,e,n,s,r,o)=>jt(i,vg,o,t,e,n,s,r,s);function Te(i,t,e,n,s,r,o){return jt(i,new Qi(s,r,5,20),o,t,e,n)}function go(i,t,e,n=1){return jt(i,new Aa(t.map(([s,r])=>new pt(s,r)),24),e,0,0,0,1,1,n)}function Fi(i,t,e,n,s=.2){Ft(i,t,e,n,s,s*1.14,s*.4,16777200),Ft(i,t,e,n-s*.35,s*.48,s*.56,s*.2,1849414)}function Mg(){const i=new ce;i.name="Hamburger wagon",go(i,[[0,.58],[1.85,.58],[2.22,.74],[2.26,.95],[2.08,1.09],[0,1.09]],15246664,1.14),go(i,[[0,1.08],[2.12,1.08],[2.25,1.16],[2.21,1.39],[2.07,1.46],[0,1.46]],7814183,1.14);const t=new Ki;for(let c=0;c<=64;c++){const u=c/64*Math.PI*2,d=2.24+Math.sin(u*11)*.16,f=Math.cos(u)*d,g=Math.sin(u)*d*1.13;c?t.lineTo(f,g):t.moveTo(f,g)}const e=jt(i,new Ls(t),7780404,0,1.49,0);e.rotation.x=-Math.PI/2;for(let c=0;c<8;c++){const u=c*Math.PI/4;Ft(i,Math.cos(u)*2.15,1.49,Math.sin(u)*2.42,.38,.11,.33,c%2?6858802:10143043)}const n=dt(i,0,1.54,0,3.62,.12,4.04,16765256);n.rotation.y=.21,go(i,[[2.23,1.65],[2.24,1.85],[2.12,2.18],[1.89,2.49],[1.47,2.66],[1.22,2.63],[1.18,2.4],[1.37,2.12],[1.65,1.85]],16039003,1.13);for(let c=0;c<42;c++){const u=c*2.39996,d=1.42+c%6*.125,f=2.67-(d-1.43)*.72,g=Ft(i,Math.cos(u)*d,f,Math.sin(u)*d*1.13,.095,.032,.045,16770723);g.rotation.y=u+.8}const s=[];for(const c of[-2.23,2.23])for(const u of[-1.37,1.37]){const d=new ce;d.position.set(c,.73,u),i.add(d);const f=Ht(d,0,0,0,.73,.48,2503747);f.rotation.z=Math.PI/2;const g=Ht(d,Math.sign(c)*.27,0,0,.38,.08,15262396);g.rotation.z=Math.PI/2;const x=Ht(d,Math.sign(c)*.32,0,0,.17,.1,13332795);x.rotation.z=Math.PI/2,s.push({mesh:d,front:u<0})}for(const c of[-.65,.65])dt(i,c,1.77,.1,.78,.18,.9,9980728),dt(i,c,2.11,.49,.78,.72,.18,11228218);const r=new ce;r.position.set(-.64,2.16,.1),i.add(r),dt(r,0,.61,0,.89,.89,.39,16045896),dt(r,0,.09,0,.86,.19,.41,16777215),dt(r,0,-.09,0,.86,.19,.43,9528370),Fi(r,-.21,.72,-.23,.18),Fi(r,.21,.72,-.23,.18),Ft(r,0,.51,-.33,.09,.12,.15,16108868),dt(r,0,.25,-.24,.13,.17,.04,13978937);for(const c of[-.31,.3])Ft(r,c,.25,-.2,.07,.07,.03,14255415),Ft(r,c,.89,-.2,.055,.045,.02,13216813);dt(r,-.1,.38,-.22,.09,.09,.05,16777215),dt(r,.1,.38,-.22,.09,.09,.05,16777215);const o=new ce;o.position.set(.61,2.09,.13),i.add(o),Ft(o,0,.31,0,.48,.54,.28,15702173),jt(o,new rn(.32,.86,10),15702173,0,.86,0,1,1,.86),Fi(o,-.11,.71,-.27,.11),Fi(o,.11,.71,-.27,.11),Ft(o,-.45,.3,0,.29,.13,.17,15702173),Ft(o,.45,.3,0,.29,.13,.17,15702173),dt(o,0,-.03,0,.72,.27,.47,9549910);const a=Te(i,-.64,2.16,-.56,.31,.05,5719348);a.rotation.x=-.62;for(const c of[-1.45,1.45])Ft(i,c,1.24,-2.45,.28,.22,.12,16773303);Ht(i,1.54,3.02,1.68,.045,2.65,10910265);const l=dt(i,1.76,4.06,1.68,.85,.34,.11,8239682);l.rotation.z=-.2;const h=new ce;h.position.set(0,1.02,2.73),i.add(h);for(let c=0;c<3;c++){const u=dt(h,0,.3,0,.13,.77,.11,15065004);u.rotation.z=c*Math.PI*2/3}return Ft(h,0,0,.1,.17,.17,.14,13335616),i.userData={wheels:s,propeller:h},Ar(i)}function we(i,t,e,n,s,r=20,o="#bf4e43"){if(typeof document>"u")return;const a=document.createElement("canvas");a.width=1024,a.height=256;const l=a.getContext("2d");l.fillStyle=o,l.fillRect(0,0,1024,256),l.strokeStyle="#fff1bd",l.lineWidth=12,l.strokeRect(16,16,992,224),l.strokeStyle="#ffffff35",l.lineWidth=2,l.strokeRect(29,29,966,198),l.fillStyle="#fff3cd",l.textAlign="center",l.textBaseline="middle",l.shadowColor="#182d36",l.shadowBlur=3,l.shadowOffsetY=3,l.font="bold 84px sans-serif",l.fillText(t,512,135,932);const h=new bl(a);h.colorSpace=Le,h.anisotropy=4;const c=new br({map:h,side:Ve,shininess:10});jt(i,new ji(r,r/4),c,e,n,s)}function fs(i,t,e,n,s=2.2){Te(i,t,e,n,s,.3,re("metal",15259289));const r=Ht(i,t,e,n-.08,s-.25,.13,7127490);r.rotation.x=Math.PI/2;const o=Ht(i,t,e,n+.01,s*.56,.14,2583164);o.rotation.x=Math.PI/2,Ft(i,t-s*.25,e+s*.27,n+.1,s*.14,s*.26,.035,13300187)}function nh(i,t,e,n,s,r,o){Ht(i,t,e,n,s,r,o),Te(i,t,e+r/2,n,s+.08,.17,o).rotation.x=Math.PI/2}function yg(i){const t=new ce;if(t.name=i,i==="pineapple"){Ft(t,0,12,0,10.8,14,10.3,15309364);for(let e=0;e<9;e++)for(let n=0;n<12;n++){const s=3+e*2.45,r=n*Math.PI/6+e%2*Math.PI/12,o=10.5*Math.sqrt(Math.max(.05,1-((s-12)/14)**2)),a=dt(t,Math.sin(r)*o,s,Math.cos(r)*o,1.8,.16,.21,16169547);a.rotation.y=r,a.rotation.z=(n%2?1:-1)*.6}for(let e=0;e<11;e++){const n=e*Math.PI*2/11,s=new Ki;s.moveTo(-1.2,0),s.quadraticCurveTo(-2.2,5,0,13),s.quadraticCurveTo(2.6,5,1.2,0),s.closePath();const r=jt(t,new Ls(s),e%2?4560204:7648843,Math.sin(n)*2,24,Math.cos(n)*2);r.rotation.y=n,r.rotation.x=.3+e%3*.18}Ft(t,0,3,10.1,2.6,3.4,.5,6066846),Te(t,0,3,10.7,2.1,.28,13095594),dt(t,0,3,10.8,.22,4,.12,11258311),dt(t,0,3,10.8,4,.22,.12,11258311),fs(t,-5.5,11,8.8,2),fs(t,5,18,8.1,1.8),nh(t,9,17,1,.8,6,9021870);for(let e=11;e<25;e+=3)dt(t,0,.15,e,7,.3,2.6,14930854)}else if(i==="head"){Ft(t,0,10,0,8.9,13,7.5,6917275),dt(t,0,8,5.9,9,15,2.4,6983070);for(const e of[-3.1,3.1])Ft(t,e,15,6.7,2.5,1.65,.9,4550272),dt(t,e,17.1,7.1,5.4,1.2,2.5,7708331),fs(t,e,15,7.6,1.5);dt(t,0,11.4,8.2,2.3,8.8,4.6,8298925),Ft(t,0,3,7.3,2.2,3.2,.5,3561067),dt(t,0,21,0,12.4,1.4,12,9416371)}else if(i==="rock")jt(t,new In(1,18,8,0,Math.PI*2,0,Math.PI/2),9861753,0,0,0,13,8,12),Ht(t,0,.2,0,14,.4,13614993),dt(t,0,.5,14,2.5,.5,7,11112829),Ft(t,-6,.2,14,1.4,.3,1,14993541);else if(i==="krusty"){dt(t,0,5,0,32,10,23,11434323);const e=jt(t,new qn(1,1,1,18,1,!1,0,Math.PI),8873281,0,10,0,15,35,15);e.rotation.z=Math.PI/2;for(let n=-15;n<=15;n+=5)dt(t,n,5,12,.8,10,.9,14533514),dt(t,n,5,-12,.8,10,.9,14533514);for(const n of[-10,10])dt(t,n,5.6,12.2,7.9,6.7,.2,9225915),dt(t,n,5.6,12.5,.24,6.7,.22,14997158),dt(t,n,5.6,12.5,7.9,.24,.22,14997158);dt(t,0,3.5,12.3,4.2,7,.4,4955034),we(t,"KRUSTY KRAB",0,12.5,14,22,"#8b523d"),Ht(t,-25,12,10,.6,24,14469771),Ft(t,-25,24,10,6.7,4,1.4,14922673),we(t,"KRAB",-25,24,11.5,9,"#b76c76");for(let n=0;n<5;n++){const s=dt(t,-12+n*6,18.5,6,2.6,2.4,.12,[15978586,13661023,6463166,7908492,15324585][n]);s.rotation.z=.15}}else if(i==="bucket"){jt(t,new qn(12,10,20,20),8890542,0,10,0),Ht(t,0,.6,0,10.6,1.2,5270393);for(const n of[1,19.3])Te(t,0,n,0,n<2?10.7:12.3,.6,12437176).rotation.x=Math.PI/2;const e=jt(t,new Qi(14,.65,6,24,Math.PI),9214885,0,19,0);e.rotation.z=0,dt(t,0,4,10.8,5.7,8,.4,3362406),we(t,"CHUM BUCKET",0,14,11.8,19,"#9c463c")}else if(i==="goober"){Ft(t,0,7,0,24,8,18,9856135),dt(t,0,6,13,24,12,1,14919080);for(const n of[-8,0,8])Ft(t,n,5,14,3.2,4.7,.5,7258306);we(t,"GOOFY GOOBER",0,13,17,27,"#7e4276");const e=jt(t,new rn(5,15,12),13803110,0,22,-2);e.rotation.z=Math.PI,Ft(t,0,31,-2,7,7,6,16105675),Ft(t,-4,29,-2,4,4,4,16049340),Ft(t,4,29,-2,4,4,4,10253400),Ft(t,0,37,-2,1.7,1.8,1.7,13849443)}else if(i==="ship"){const e=new ce;e.rotation.z=-.12,t.add(e),Ft(e,0,6,0,18,10,31,8149318),dt(e,0,12,0,29,1.2,51,10647889);for(let n=-26;n<28;n+=4)dt(e,0,13,n,29,.25,.4,13215092);dt(e,0,21,-9,22,16,23,9465685),dt(e,0,30,-9,27,1.7,28,6442310);for(const n of[-8,0,8])fs(e,n,23,3,2.7);Ht(e,0,32,-20,1.2,20,8942677),dt(e,0,39,-20,18,1,1,8942677);for(const n of[-17,17])for(const s of[-17,0,17]){const r=Te(e,n,8,s,3.2,.9,3427154);r.rotation.y=Math.PI/2}we(e,"THUG TUG",0,18,6,20,"#654437")}else if(i==="castle"){dt(t,0,8,0,48,16,24,8502709),dt(t,0,18,0,34,6,22,13099211);for(const e of[-26,26])for(const n of[-12,12]){Ht(t,e,16,n,7,32,10014660),Ht(t,e,32,n,8.2,2,14017737),jt(t,new rn(8.5,14,8),7708604,e,40,n),Ft(t,e,48,n,1.4,1.4,1.4,16177539);for(let s=0;s<6;s++){const r=s*Math.PI/3;dt(t,e+Math.cos(r)*7.2,34,n+Math.sin(r)*7.2,2.4,4,2.4,13099211)}}Ft(t,0,6,13,5,7,.5,4033428),we(t,"NEPTUNE",0,24,13,25,"#407e8f"),Ht(t,0,36,0,.45,19,14927215);for(const e of[-4,0,4])Ht(t,e,44,0,.45,7,15980416),jt(t,new rn(.8,3,6),15980416,e,49,0);dt(t,0,40,0,9,.8,.8,15980416);for(let e=0;e<4;e++)dt(t,0,.6+e*.6,17-e*1.5,19,1.2,3,12438446)}return Ar(t,["head","rock","castle"].includes(i)?"stone":null),Yi(t)}function Sg(i=0){const t=new ce,n=[12289453,8435133,14396035,9745816][i%4];Ht(t,0,5,0,5,10,n),Ft(t,0,10,0,5.3,1.8,5.3,13290152);for(const s of[1,9])Te(t,0,s,0,5.1,.2,12174243).rotation.x=Math.PI/2;return fs(t,-2,6,4.6,1.25),Ft(t,1.8,2,4.8,1.3,2.2,.25,4286583),nh(t,3,13,-1,.5,6,7639700),dt(t,1.8,.18,6,3.3,.35,2.2,re("stone",12765605)),Ft(t,2.35,2,5.1,.1,.1,.08,re("metal",14469005)),we(t,String(101+i),-2.4,3.5,4.9,1.6,"#526d72"),Yi(Ar(t,"metal"))}function jc(i=15904375){const t=new ce;Ft(t,0,1.75,0,.6,.95,.42,i),dt(t,0,.65,0,.8,.6,.5,7441290),Fi(t,-.18,2.05,-.39,.18),Fi(t,.18,2.05,-.39,.18),Ft(t,0,1.62,-.47,.2,.11,.13,10775917);const e=[],n=[];for(const o of[-.59,.59]){const a=new ce;a.position.set(o,1.65,0),t.add(a),Ft(a,0,-.3,0,.2,.44,.14,i),Ft(a,0,-.65,-.07,.18,.17,.13,i),e.push(a)}for(const o of[-.24,.24]){const a=new ce;a.position.set(o,.65,0),t.add(a),Ht(a,0,-.3,0,.13,.6,i),Ft(a,0,-.52,-.1,.22,.15,.36,4476517),n.push(a)}const s=new Ki;s.moveTo(0,0),s.lineTo(.6,.35),s.lineTo(0,.65),s.closePath();const r=jt(t,new Ls(s),i,0,1.25,.35);r.rotation.y=Math.PI/2;for(const o of[-.18,.18])dt(t,o,1.12,-.42,.24,.1,.035,15656122);return dt(t,0,.88,-.28,.78,.08,.05,5073259),t.userData={arms:e,legs:n},t}function Eg(i=10980025){const t=new ce;Ft(t,0,1,0,1.7,.8,2.9,i),dt(t,0,1.4,0,2.5,.2,3.5,14410168),dt(t,0,2.1,.3,1.7,1.1,1.5,i),dt(t,0,2,-1,2.2,1.2,.13,9688274);for(const e of[-1.5,1.5])for(const n of[-1.4,1.4]){const s=Ht(t,e,.55,n,.55,.33,3491417);s.rotation.z=Math.PI/2}return t}function bg(i=15507399){const t=new ce;jt(t,new In(1,10,5,0,Math.PI*2,0,Math.PI/2),fn(i,!1,.8),0,0,0,2,1.7,2),Te(t,0,0,0,1.9,.09,i).rotation.x=Math.PI/2;for(let e=0;e<5;e++){const n=e*Math.PI*2/5,s=Ht(t,Math.cos(n)*1.2,-1.4,Math.sin(n)*1.2,.1,2.8,i);s.rotation.z=Math.sin(n)*.18}return t}const wg=new Qi(.96,.07,5,20);function Tg(){const i=new ce;Ht(i,0,1,0,.95,2,10845528);for(const t of[.3,1.65])jt(i,wg,5468020,0,t,0).rotation.x=Math.PI/2;return Ar(i)}function Ag(){const i=new Ki;return i.moveTo(-.85,0),i.lineTo(-1,1.1),i.lineTo(-.48,.72),i.lineTo(0,1.43),i.lineTo(.48,.72),i.lineTo(1,1.1),i.lineTo(.85,0),i.closePath(),new Ta(i,{depth:.24,bevelEnabled:!1})}function Rg(){const i=[];for(const[s,r,o,a,l]of[[0,2.5,0,5,0],[-1,3,0,3,.7],[1.1,3.8,0,3,-.65],[0,4.1,.8,3,.2]]){const h=new qn(.38,.55,a,6);h.rotateZ(l),h.translate(s,r,o),i.push(h);const c=new In(.42,6,4);c.translate(s-Math.sin(l)*a/2,r+Math.cos(l)*a/2,o),i.push(c)}const t=aa(i);i.forEach(s=>s.dispose());const e=[];for(let s=0;s<3;s++){const r=[];for(let a=0;a<5;a++)r.push(new I(Math.sin(a*.8+s)*.6+s*.35,a*2,Math.cos(a+s)*.3));const o=new Er(new wa(r),10,.15,3,!1);e.push(o);for(let a=1;a<5;a++){const l=new In(1,6,4);l.scale(.38,1.35,.13),l.rotateZ((a%2?1:-1)*.55),l.translate(r[a].x+(a%2?.45:-.45),r[a].y,r[a].z),e.push(l)}}const n=aa(e);return e.forEach(s=>s.dispose()),{coral:t,kelp:n,rock:new bs(2.4,0)}}function Qc(i=12754123,t=15,e=13){const n=new ce,s=jt(n,new Qi(t/2,2.2,6,12,Math.PI),i,0,e-t/2,0);s.scale.y=e/(t/2);for(const r of[-t/2,t/2])Ft(n,r,2,0,3.7,3.5,3.7,i);return n}let Bn=null;function Cg(){if(Bn||typeof document>"u")return Bn;const i=512,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i);for(let s=0;s<i;s++)for(let r=0;r<i;r++){const o=Math.sin(s/i*Math.PI*32+Math.sin(r/i*Math.PI*4)*1.7),a=ve(r,s,43),l=Math.round(220+o*10+(a-.5)*26),h=(s*i+r)*4;n.data.set([l,l,l,255],h)}return e.putImageData(n,0,0),Bn=new bl(t),Bn.colorSpace=Le,Bn.wrapS=Bn.wrapT=ms,Bn.anisotropy=4,Bn}function Pg(i){const t=th("sand"),e=new br({map:i,normalMap:t.normal,normalScale:new pt(.4,.4),shininess:5,specular:1582371});return e.onBeforeCompile=n=>{n.uniforms.seafloorDetail={value:t.color},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 seafloorUV;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
seafloorUV = (modelMatrix * vec4(position, 1.0)).xz / 12.0;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D seafloorDetail;
varying vec2 seafloorUV;`),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb *= mix(vec3(0.82), vec3(1.16), texture2D(seafloorDetail, seafloorUV).rgb);`)},eh(e,!0)}const $e=re("wood",12687971),nn=re("metal",5274749);re("stone",12110001);const ki=re("cloth",13876613);function Ii(i,t,e,n,s=1.7){dt(i,t,e+s/2,n,s,s,s,$e);for(const o of[.2,s-.2])dt(i,t,e+o,n+s/2+.02,s,.15,.12,nn);const r=dt(i,t,e+s/2,n+s/2+.08,.13,s*1.22,.09,$e);r.rotation.z=.7}function Lg(i,t,e){dt(i,t,1.8,e,5,.26,3,$e);for(const n of[-1.8,1.8])dt(i,t+n,.9,e,.2,1.8,2.4,nn),dt(i,t+n,.6,e,.3,.22,4.6,$e);for(const n of[-1.8,1.8])dt(i,t,1.05,e+n,5.2,.22,.8,$e);for(const n of[-.65,.65])Ht(i,t+n,2.07,e,.19,.32,re("metal",13295037))}function Ig(i,t,e,n){Ht(i,t,3.5,e,.09,7,nn);const s=jt(i,new rn(4.6,1.5,12,1,!0),re("cloth",n),t,6.65,e);s.rotation.y=Math.PI/12,Te(i,t,5.9,e,4.6,.08,ki).rotation.x=Math.PI/2;for(const r of[0,Math.PI/2,Math.PI,Math.PI*1.5]){const o=dt(i,t+Math.cos(r)*2.2,6.28,e+Math.sin(r)*2.2,4.4,.045,.055,ki);o.rotation.y=-r,o.rotation.z=.14}}function tl(i,t,e,n=2){const s=new wa([new I(t[0],n,t[1]),new I((t[0]+e[0])/2,n-.45,(t[1]+e[1])/2),new I(e[0],n,e[1])]);jt(i,new Er(s,10,.065,5,!1),ki)}const Dg={market:[16,12,8],patio:[18,13,8],yard:[12,9,6],dock:[13,24,5],workshop:[16,14,7],stop:[13,9,8]};function Ug(i,t=""){const e=new ce;if(e.name=i,i==="market"){for(const s of[-5.5,5.5])for(const r of[-3.5,3.5])Ht(e,s,3.4,r,.16,6.8,$e);const n=jt(e,new qn(1,1,1,14,1,!0,0,Math.PI),re("cloth",12881265),0,6.7,0,6.8,8.4,2.1);n.rotation.z=Math.PI/2,dt(e,0,2.1,0,11.7,.28,3.3,$e),dt(e,0,1,1.4,11.4,2,.15,$e);for(const s of[-4,0,4]){Ii(e,s,0,-3.4,1.5);for(let r=0;r<5;r++)Ft(e,s+(r%3-1)*.55,2.55,.2+r%2*.5,.36,.3,.36,[15448933,13601142,9680796][Math.abs(s)%3])}we(e,t||"REEF MARKET",0,5.8,3.55,10,"#386e73")}else if(i==="patio"){for(const n of[-4.5,4.5])Lg(e,n,0),Ig(e,n,0,n<0?12819879:9350311);for(const n of[-8,8])Ht(e,n,.9,4,.8,1.8,re("stone",13942940)),Ft(e,n,1.8,4,.8,.2,.8,9148809)}else if(i==="yard"){for(const n of[-4,4])Ht(e,n,2.6,-2,.1,5.2,nn);tl(e,[-4,-2],[4,-2],4.6);for(let n=0;n<4;n++){const s=dt(e,-2.7+n*1.8,3.65,-2,1.15,1.55,.04,re("cloth",[11964078,14272661,8302515,13342077][n]));s.rotation.z=(n%2?1:-1)*.06}Ht(e,-3.8,1.35,2,.06,2.7,nn),dt(e,-3.8,2.7,2,1,.75,1.6,nn),dt(e,-3.8,2.7,2.82,.8,.55,.06,re("metal",14336915)),Ii(e,3.7,0,2,1.2),we(e,t||"CONCH POST",0,1.4,3.5,3.4,"#587b73")}else if(i==="dock"){for(let s=0;s<17;s++)dt(e,0,1.1,-10+s*1.25,9,.35,1.15,$e);for(const s of[-4.8,4.8])for(const r of[-10,-4,2,10])Ht(e,s,1.4,r,.33,3.8,$e),Te(e,s,2.7,r,.35,.1,ki).rotation.x=Math.PI/2;for(const s of[-4.8,4.8])for(let r=0;r<3;r++)tl(e,[s,-10+r*6],[s,-4+r*6],3);Ii(e,-2,1.3,-7),Ii(e,2,1.3,-8,1.3);const n=new ce;n.position.set(2.5,1.45,4),e.add(n);for(let s=0;s<5;s++)Te(n,0,s*.1,0,.7+s*.04,.08,ki).rotation.x=Math.PI/2;we(e,t||"COVE LANDING",0,3.9,-10,7,"#527d76")}else if(i==="workshop"){dt(e,0,2.2,-2,10,4.4,5.5,re("wood",9142378)),dt(e,0,4.65,-2,11,.45,6.8,re("metal",7182739)),dt(e,0,1.8,.8,3.5,3.6,.18,re("metal",3428189));for(const n of[-3.7,3.7])dt(e,n,2.6,.85,2.2,1.4,.15,7581360);Ii(e,-6,0,2.5),Ii(e,5,0,2.2,1.3),dt(e,0,1.5,4.2,5.5,.2,1.7,$e);for(const n of[-2,2])dt(e,n,.75,4.2,.16,1.5,1.4,nn);for(const n of[-1.4,0,1.4])Te(e,n,1.8,4.2,.32,.1,nn).rotation.x=Math.PI/2;we(e,t||"BOAT REPAIR",0,4.7,1.6,8,"#816550")}else if(i==="stop"){for(const n of[-4.6,4.6])Ht(e,n,2.5,-2,.14,5,nn);dt(e,0,5.1,-1,10.5,.3,5,re("metal",7642769)),dt(e,0,1.2,-1,7.5,.24,1.3,$e);for(const n of[-2.7,2.7])dt(e,n,.6,-1,.15,1.2,1.2,nn);dt(e,0,2,-1.7,7.5,1.1,.16,$e),Ht(e,5,3,1,.1,6,nn),we(e,t||"TOWN LOOP",3.8,5.4,1.2,4,"#53777a"),Ht(e,-5,.8,2,.65,1.6,nn),Te(e,-5,1.55,2,.67,.07,ki).rotation.x=Math.PI/2}return Yi(e)}const wn=re("wood",10717797),De=re("metal",6065547),ls=re("stone",11848633),el=re("cloth",14076058);function Ng(i){const t=new ce,e=[],n=(s,r,o,a,l,h=0)=>e.push({x:s,z:r,w:o,d:a,height:l,y:h});switch(i.kind){case"tower":for(const s of[-4,4])for(const r of[-4,4]){Ht(t,s,8,r,.35,16,De),n(s,r,.7,.7,16);const o=dt(t,s,8,0,.2,10,.2,De);o.rotation.x=s<0?.8:-.8}Ht(t,0,18,0,6,7,De),n(0,0,12,12,7,14.5),jt(t,new rn(6.6,3,20),wn,0,23,0);for(let s=1;s<16;s+=1)dt(t,5,s,0,.8,.13,.13,De);for(const s of[4.6,5.4])Ht(t,s,8,0,.07,16,De);we(t,i.label,0,18.5,6.05,10,"#476f79");break;case"observatory":dt(t,0,1,0,16,2,12,wn),n(0,0,16,12,2);for(const s of[-6,6])for(const r of[-4,4])Ht(t,s,5,r,.2,8,wn);jt(t,new rn(11,4,4),re("cloth",9999542),0,10,0).rotation.y=Math.PI/4;for(const s of[-4,4]){Ht(t,s,3.6,0,.12,3.2,De);const r=Ht(t,s,5.4,-.8,.5,2.7,De);r.rotation.x=Math.PI/2-.35,Ft(t,s,5.85,-1.8,.53,.53,.12,9559508)}we(t,i.label,0,7,4.3,11,"#66557f");break;case"billboard":for(const s of[-5,5])Ht(t,s,5,0,.28,10,wn),n(s,0,.6,.6,10);dt(t,0,10,0,16,6,.6,wn),n(0,0,16,.6,6,7),we(t,i.label,0,10,.34,15,"#ad6b52");for(const s of[-6,0,6])dt(t,s,13.7,.7,.18,1,1.2,De),Ft(t,s,13.3,1.2,.4,.2,.4,16113581);break;case"boardwalk":for(let s=0;s<25;s++)dt(t,0,.6,-18+s*1.5,10,1.2,1.38,wn);for(const s of[-5.5,5.5])for(let r=-18;r<=18;r+=6)Ht(t,s,1.6,r,.24,3.2,wn),n(s,r,.5,.5,3.2),Te(t,s,2.6,r,.28,.08,el).rotation.x=Math.PI/2;we(t,i.label,0,5,-17,9,"#507f79");break;case"beacon":Ht(t,0,10,0,5,20,ls),n(0,0,10,10,20);for(const s of[5,12,19])Te(t,0,s,0,5.08,.22,De).rotation.x=Math.PI/2;Ht(t,0,21,0,6,.5,De);for(let s=0;s<8;s++){const r=s*Math.PI/4;Ht(t,Math.cos(r)*4.8,23,Math.sin(r)*4.8,.14,4,De)}Ft(t,0,23,0,2,2,2,16771234),jt(t,new rn(6.5,3,16),wn,0,26,0),dt(t,0,2,5,2,4,.2,De),we(t,i.label,0,8,5.1,7,"#547577");break;case"crane":{dt(t,0,1.2,0,10,2.4,10,ls),n(0,0,10,10,2.4);for(const s of[-3,3])dt(t,s,8,0,.45,16,.45,De),n(s,0,.5,.5,16);for(let s=3;s<16;s+=3){dt(t,0,s,0,6,.24,.24,De);const r=dt(t,0,s+1.5,0,6.6,.18,.18,De);r.rotation.z=.46}dt(t,6,16.5,0,21,.6,1.5,De),n(6,0,21,1.5,.6,16.2),Ht(t,14,10,0,.09,13,el),Te(t,14,3.5,0,.65,.16,De);for(const s of[-7,7])dt(t,s,.7,6,3,1.4,3,wn);we(t,i.label,0,6,.5,6,"#8c7057");break}case"fountain":Ht(t,0,.5,0,8,1,ls),n(0,0,16,16,1),Te(t,0,1.2,0,7.2,.6,ls).rotation.x=Math.PI/2,Ht(t,0,1.08,0,6.6,.1,6928571),Ht(t,0,3,0,.7,4,ls),n(0,0,1.4,1.4,5),jt(t,new In(2.8,16,8,0,Math.PI*2,0,Math.PI/2),re("stone",14864048),0,5,0),Ft(t,0,6,0,1.2,1.2,1.2,15523743);for(let s=0;s<12;s++){const r=s*Math.PI/6;Ft(t,Math.cos(r)*7.5,1.4,Math.sin(r)*7.5,.35,.35,.35,14276529)}break}return Yi(t),t.name=i.id,{group:t,solids:e}}const Fg=[{id:"neighborhood",name:"Neighborhood cruise",path:"conch-commons",color:15976552},{id:"coast",name:"Lagoon promenade",path:"lagoon-commons",color:8182733},{id:"mountain",name:"Mountain descent",path:"ridge-commons",color:15313593}],di=Fg.map(i=>{const t=Cn.find(n=>n.id===i.path),e=[.08,.24,.4,.56,.72,.9].map(n=>{const s=t.nodes.findIndex(a=>a.distance>=t.length*n),r=t.nodes[s],o=t.nodes[Math.min(s+1,t.nodes.length-1)];return{x:r.x,z:r.z,y:ee(r.x,r.z),width:t.width,heading:Math.atan2(o.x-r.x,o.z-r.z)}});return{...i,gates:e}});function Og(i,t,e,n){const s=t.x-i.x,r=t.z-i.z,o=s*s+r*r,a=o?Math.max(0,Math.min(1,((e.x-i.x)*s+(e.z-i.z)*r)/o)):0,l=i.y+(t.y-i.y)*a;return Math.hypot(i.x+s*a-e.x,i.z+r*a-e.z)<n&&Math.abs(l-e.y)<5}class zg{constructor(t){this.save=t,t.trails??={},this.previous=null}resetPosition(){this.previous=null}update(t,e){const n=this.previous??t;if(this.previous={x:t.x,y:t.y,z:t.z},!(Math.hypot(t.x-n.x,t.z-n.z)>20))for(const s of di){const r=this.save.trails[s.id]??0;if(!(r>=s.gates.length)&&Og(n,t,s.gates[r],s.gates[r].width/2+2)){this.save.trails[s.id]=r+1;const o=r+1===s.gates.length;o&&!this.save.activities.includes(`trail:${s.id}`)&&this.save.activities.push(`trail:${s.id}`),e(s,r+1,o)}}}}const ae=new Ae,Bg=new yr({color:2311242,transparent:!0,opacity:.1,depthWrite:!1,side:Ve});class kg{constructor(t,e,{software:n=!1,worker:s=!0}={}){if(this.scene=t,this.save=e,this.software=n,this.boundary=gn/2-8,this.ramps=ql.map(r=>({...r,baseY:ee(r.x,r.z)})),this.solids=[],this.colliderHash=new Zc,this.interactionHash=new Zc,this.coins=[],this.breakables=[],this.traffic=[],this.people=[],this.jellies=[],this.decor=[],this.landmarkObjects=[],this.activitySites=[],this.districtObjects=[],this.scenicGates=[],this.platforms=[],this.collected=e.coins.length+(e.legacy?.coins??0),this.collectedIds=new Set(e.coins),this.brokenIds=new Set(e.broken),this.chunks=new Map,this.pending=new Map,this.ready=[],this.queue=[],this.wanted=new Map,this.stamp=0,this.lastCell="",this.flora=Rg(),this.crownGeo=Ag(),this.crownMat=fn(16766570),this.terrainMat=new cf({vertexColors:!0,map:Cg()}),s&&typeof Worker<"u")try{this.worker=new Worker(new URL(""+new URL("TerrainWorker-DkR72Swu.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=({data:r})=>{this.pending.delete(r.key),this.ready.push(r)},this.worker.onerror=()=>{this.worker.terminate(),this.worker=null;for(const r of this.pending.values())this.queue.push(r);this.pending.clear()}}catch{}this.makeGround(),this.makeRoads(),this.makeLandmarks(),this.makeStreetDetails(),this.makeLivingSites(),this.makeSetPieces(),this.makeDistrictDetails(),this.makeScenicGates(),this.makeExploration(),this.makeResidents(),this.makeAtmosphere()}heightAt(t,e){let n=ee(t,e);for(const s of this.platforms??[])if(Math.abs(t-s.x)<=s.w/2&&Math.abs(e-s.z)<=s.d/2+s.approach){const r=ye((s.d/2+s.approach-Math.abs(e-s.z))/s.approach,0,1);n=Math.max(n,n+(s.y-n)*r)}for(const s of this.ramps){const r=La(t,e,s);r!==null&&(n=Math.max(n,r))}return n}nearbySolids(t,e,n=8){return this.colliderHash.query(t,e,n)}addSolid(t,e,n,s,r,o=ee(t,e)){const a={x:t,z:e,w:n,d:s,height:r,y:o};return this.solids.push(a),this.colliderHash.add(a),a}makeGround(){const t=new ji(gn,gn,60,60);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){const r=e.getX(s),o=e.getZ(s);e.setY(s,Ni(r,o)-3),n.set(Kl(r,o),s*3),t.attributes.uv.setXY(s,r/28,o/28)}t.setAttribute("color",new Ue(n,3)),t.computeVertexNormals(),this.floor=jt(this.scene,t,this.terrainMat),this.floor.castShadow=!1,this.floor.renderOrder=-60}makeRoads(){const t=[];for(const n of Cn)if(n.nodes.forEach((s,r)=>{const o=n.nodes[Math.max(0,r-1)],a=n.nodes[Math.min(n.nodes.length-1,r+1)];r%3===0&&t.push({x:s.x,y:ee(s.x,s.z)+.34,z:s.z,a:Math.atan2(a.x-o.x,a.z-o.z)})}),this.software){const s=jt(this.scene,fg(n,24),5277579);s.castShadow=!1,s.renderOrder=-30}const e=new Pi(new pi(.45,.025,4),fn(15128224),t.length);t.forEach((n,s)=>{ae.position.set(n.x,n.y,n.z),ae.rotation.set(0,n.a,0),ae.scale.setScalar(1),ei(e,s,ae)}),e.computeBoundingSphere(),e.renderOrder=-29,this.scene.add(e)}makeLandmarks(){const t={pineapple:[21,21,35],head:[18,16,25],rock:[23,23,8],krusty:[34,26,23],bucket:[24,24,35],goober:[45,32,41],ship:[36,62,40],castle:[66,43,49]};for(const n of ws){const s=new bu,r=yg(n.type),o=new ce,[a,l,h]=t[n.type];if(n.type==="pineapple"){Ft(o,0,12,0,10,14,10,15309364);for(const c of[-3,0,3])jt(o,new rn(3,13,5),6595655,c,29,0)}else if(n.type==="castle"){dt(o,0,12,0,48,24,24,9553852);for(const c of[-27,27])Ht(o,c,18,0,7,36,10540747),jt(o,new rn(8,15,7),8367296,c,43,0)}else n.type==="ship"?(Ft(o,0,8,0,18,10,30,9003336),dt(o,0,24,-7,24,20,24,9335128)):Ft(o,0,h*.43,0,a*.48,h*.48,l*.48,n.type==="head"?7574434:n.type==="rock"?9928319:12037523);s.addLevel(r,0),s.addLevel(o,this.software?190:300,.08),s.position.set(n.x,ee(n.x,n.z),n.z),this.scene.add(s),this.landmarkObjects.push(s),this.addSolid(n.x,n.z,a,l,h),this.makeContactShadow(n.x,n.z,a*.6,l*.6)}let e=0;for(const n of[Ee[0],Ee[1],Ee[3],Ee[4]])for(let s=0;s<9;s++){const r=s*2.4,o=85+s%3*27,a=n.x+Math.cos(r)*o,l=n.z+Math.sin(r)*o,h=li(a,l);if(h.distance<h.width/2+21||ws.some(u=>Math.hypot(a-u.x,l-u.z)<u.radius+18)||this.solids.some(u=>Math.hypot(a-u.x,l-u.z)<Math.max(u.w,u.d)/2+15))continue;const c=Sg(e++);c.position.set(a,ee(a,l),l),c.rotation.y=s*.7,this.scene.add(c),this.decor.push(c),this.addSolid(a,l,10,10,16),this.makeContactShadow(a,l,6.3,6.3)}}makeStreetDetails(){for(const t of Ee.filter(e=>["conch","commons","lagoon","neptune"].includes(e.id))){const e=Cn.find(n=>n.id===(t.id==="conch"?"conch-commons":t.id==="lagoon"?"lagoon-commons":t.id==="neptune"?"palace-commons":"wreck-commons"));for(let n=5;n<e.nodes.length-1;n+=9){const s=e.nodes[n],r=e.nodes[n+1];if(Math.hypot(s.x-t.x,s.z-t.z)>230)continue;const o=Math.atan2(r.x-s.x,r.z-s.z),a=n%2?1:-1,l=s.x+Math.cos(o)*(e.width/2+7)*a,h=s.z-Math.sin(o)*(e.width/2+7)*a,c=li(l,h);if(c.distance<c.width/2+4||this.solids.some(d=>Math.hypot(l-d.x,h-d.z)<Math.max(d.w,d.d)/2+8))continue;const u=new ce;u.position.set(l,ee(l,h),h),u.rotation.y=o,Ht(u,0,3.9,0,.18,7.8,re("metal",4812400)),Te(u,0,7.7,0,.9,.1,7970199).rotation.x=Math.PI/2,Ft(u,0,7.7,0,.65,.8,.65,15128995);for(let d=0;d<4;d++)dt(u,2.8,1.1,-.6+d*.4,3.4,.16,.3,re("wood",10976592));for(const d of[1.6,4])dt(u,d,.55,0,.18,1.1,1.5,5075827);for(const d of[1.7,2.1])dt(u,2.8,d,.8,3.4,.25,.16,10976592);this.scene.add(u),this.decor.push(u),this.addSolid(l,h,.7,.7,8)}}}makeLivingSites(){for(const t of Ia){const e=Ug(t.kind,t.label),[n,s,r]=Dg[t.kind],o=Math.cos(t.heading),a=Math.sin(t.heading),l=Math.abs(o)*n+Math.abs(a)*s,h=Math.abs(o)*s+Math.abs(a)*n;let c=ee(t.x,t.z);for(const d of[-l/2,l/2])for(const f of[-h/2,h/2])c=Math.max(c,ee(t.x+d,t.z+f));const u=dt(e,0,-1,0,n,2,s,re("stone",11581339));u.receiveShadow=!0,e.position.set(t.x,c,t.z),e.rotation.y=t.heading,this.scene.add(e),this.decor.push(e),this.activitySites.push({...t,group:e,base:c,width:l,depth:h}),this.addSolid(t.x,t.z,l,h,r,c).siteId=t.id,this.makeContactShadow(t.x,t.z,l*.6,h*.6)}}makeContactShadow(t,e,n,s){const r=[t,ee(t,e)+.1,e],o=[];for(let h=0;h<=24;h++){const c=h/24*Math.PI*2,u=t+Math.cos(c)*n,d=e+Math.sin(c)*s;r.push(u,ee(u,d)+.1,d),h&&o.push(0,h+1,h)}const a=new Me;a.setAttribute("position",new Qt(r,3)),a.setIndex(o);const l=jt(this.scene,a,Bg);return l.castShadow=!1,l.receiveShadow=!1,l.renderOrder=-20,l}makeDistrictDetails(){for(const t of jl){const{group:e,solids:n}=Ng(t);let s=ee(t.x,t.z);for(const r of t.kind==="boardwalk"?[-5,5]:[-t.radius,t.radius])for(const o of t.kind==="boardwalk"?[-18.75,18.75]:[-t.radius,t.radius])s=Math.max(s,ee(t.x+r,t.z+o));e.position.set(t.x,s,t.z),this.scene.add(e),this.decor.push(e),this.districtObjects.push({...t,group:e,base:s});for(const r of n)this.addSolid(t.x+r.x,t.z+r.z,r.w,r.d,r.height,s+r.y).siteId=t.id;if(t.kind==="boardwalk"){const r={x:t.x,z:t.z,w:10,d:37.5,y:s+1.2,approach:12};this.platforms.push(r);for(const o of[-1,1]){const a=[],l=[],h=[];for(let u=0;u<=4;u++)for(let d=0;d<=2;d++){const f=-5+d*5,g=o*(18.75+u*3);a.push(f,this.heightAt(t.x+f,t.z+g)-s,g),l.push(d,u/2)}for(let u=0;u<4;u++)for(let d=0;d<2;d++){const f=u*3+d;h.push(...o===1?[f,f+3,f+1,f+1,f+3,f+4]:[f,f+1,f+3,f+1,f+4,f+3])}const c=new Me;c.setAttribute("position",new Qt(a,3)),c.setAttribute("uv",new Qt(l,2)),c.setIndex(h),c.computeVertexNormals(),jt(e,c,re("wood",10717797))}}for(const r of[-t.radius*.3,t.radius*.3]){const o=ee(t.x+r,t.z);s>o+.1&&dt(e,r,-(s-o)/2,0,1.2,s-o,1.2,re("stone",11581339))}Yi(e),this.makeContactShadow(t.x,t.z,t.radius*.65,t.radius*.65)}}makeScenicGates(){for(const t of di)t.gates.forEach((e,n)=>{const s=new ce,r=fn(t.color).clone();s.position.set(e.x,e.y,e.z),s.rotation.y=e.heading;const o=e.width/2+3;for(const a of[-o,o]){Ht(s,a,5.5,0,.24,11,re("metal",5406078));for(const c of[1.5,4,9])Te(s,a,c,0,.35,.13,r).rotation.x=Math.PI/2;Ft(s,a,11,0,.7,.7,.7,r);const l=e.x+Math.cos(e.heading)*a,h=e.z-Math.sin(e.heading)*a;this.addSolid(l,h,.6,.6,11,ee(l,h)).siteId=`gate:${t.id}:${n}`}dt(s,0,11,0,o*2,.16,.16,r),we(s,`${t.name.toUpperCase()} ${n+1}/6`,0,10,.1,Math.min(e.width,20),"#40767a"),Yi(s),this.scene.add(s),this.decor.push(s),this.scenicGates.push({routeId:t.id,index:n,group:s,color:r,x:e.x,z:e.z})})}makeSetPieces(){for(const c of this.ramps){const u=new ce;u.position.set(c.x,c.baseY,c.z),u.rotation.y=c.heading;const d=new Me;d.setAttribute("position",new Qt([-c.width/2,0,c.length/2,c.width/2,0,c.length/2,-c.width/2,c.height,-c.length/2,c.width/2,c.height,-c.length/2],3)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals(),d.setAttribute("uv",new Qt([0,0,1,0,0,1,1,1],2)),jt(u,d,re("wood",13144416),0,.08,0);for(const f of[-c.width/2,c.width/2]){dt(u,f,c.height/2,-c.length/2,.5,c.height,.5,14137735);const g=dt(u,f,c.height/2+.8,0,.25,.25,Math.hypot(c.length,c.height),15784352);g.rotation.x=Math.atan2(c.height,c.length)}for(let f=0;f<3;f++){const g=8-f*7,x=c.height*(.5-g/c.length)+.12;dt(u,0,x,g,c.width*.75,.08,1.2,15978345)}this.scene.add(u)}for(const c of Ts){const u=new ce;u.position.set(c.x,ee(c.x,c.z),c.z);const d=Qc(c.id==="coral-grotto"?10782637:8762800,20,14);u.add(d),Ft(u,0,3,-9,2.4,2.4,2.4,14348479);for(const f of[-13,13])this.addSolid(c.x+f,c.z,5,7,12);for(let f=0;f<8;f++){const g=f*Math.PI/4;Ft(u,Math.cos(g)*13,.5,-9+Math.sin(g)*13,2,1.4,2,8958630)}this.scene.add(u),this.decor.push(u)}const t=[],e=[],n=500,s=560;t.push(n,ee(n,s)+.18,s);for(let c=0;c<=48;c++){const u=c/48*Math.PI*2,d=n+Math.cos(u)*77,f=s+Math.sin(u)*51;t.push(d,ee(d,f)+.18,f),c&&e.push(0,c,c+1)}const r=new Me;r.setAttribute("position",new Qt(t,3)),r.setIndex(e),r.computeVertexNormals(),jt(this.scene,r,fn(5154459,!1,.86));const o=Qc(14004622,34,22);o.position.set(212,ee(212,-505),-505),this.scene.add(o);for(const c of[194,230])this.addSolid(c,-505,8,10,22);const a=new bs(1,1),l=new Pi(a,fn(8827051),88);let h=0;for(let c=0;c<22;c++)for(const u of[0,1,2,3]){const d=-880+c*84,f=u<2?u?884:-884:d,g=u<2?d:u===2?884:-884,x=13+ve(c,u,84)*10;ae.position.set(f,ee(f,g)+x*.6,g),ae.rotation.set(0,ve(c,u)*6,0),ae.scale.set(x,x*1.5,x),ei(l,h++,ae),this.addSolid(f,g,x*1.8,x*1.8,x*2.1)}l.computeBoundingSphere(),this.scene.add(l)}makeExploration(){for(const t of Cn){let e=0,n=12;for(const s of t.nodes){if(s.distance<n)continue;n+=22;const r=t.nodes[Math.max(0,t.nodes.indexOf(s)-1)],o=s.x-r.x,a=s.z-r.z,l=Math.hypot(o,a)||1,h=e%2?3.5:-3.5,c=s.x+a/l*h,u=s.z-o/l*h;this.addCrown(`crown:${t.id}:${e++}`,c,u,ee(c,u)+2)}}for(const t of Ee)for(let e=0;e<14;e++){const n=e/14*Math.PI*2;let s=t.x+Math.cos(n)*(44+e%3*7),r=t.z+Math.sin(n)*(44+e%3*7);if(!this.solids.some(o=>!o.siteId&&Math.abs(s-o.x)<o.w/2+3&&Math.abs(r-o.z)<o.d/2+3)){for(const o of this.solids.filter(a=>a.siteId))Math.abs(s-o.x)<o.w/2+4&&Math.abs(r-o.z)<o.d/2+4&&(s=o.x+(s>=o.x?1:-1)*(o.w/2+5));this.addCrown(`crown:${t.id}:${e}`,s,r,ee(s,r)+2)}}for(const t of Ts)for(let e=0;e<8;e++){const n=e*Math.PI/4,s=t.x+Math.cos(n)*8,r=t.z-9+Math.sin(n)*8;this.addCrown(`crown:secret-${t.id}:${e}`,s,r,ee(s,r)+2.2)}for(const t of this.ramps)for(let e=0;e<6;e++){const n=t.length/2-e*t.length/5,s=t.x+Math.sin(t.heading)*n,r=t.z+Math.cos(t.heading)*n;this.addCrown(`crown:${t.id}:${e}`,s,r,this.heightAt(s,r)+2.3)}for(const t of Ee)for(let e=0;e<18;e++){const n=e*2.3,s=t.x+Math.cos(n)*(22+e%4*15),r=t.z+Math.sin(n)*(22+e%4*15);if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+3&&Math.abs(r-a.z)<a.d/2+3))continue;const o={id:`prop:${t.id}:${e}`,x:s,z:r,y:ee(s,r),kind:"barrel"};this.breakables.push(o),this.interactionHash.add(o)}this.objectsByChunk=new Map;for(const t of[...this.coins,...this.breakables]){const e=this.chunkKey(t.x,t.z);this.objectsByChunk.has(e)||this.objectsByChunk.set(e,[]),this.objectsByChunk.get(e).push(t)}}addCrown(t,e,n,s){const r={id:t,x:e,z:n,y:s,kind:"crown",phase:ve(Math.floor(e),Math.floor(n),16)*6};this.coins.push(r),this.interactionHash.add(r)}chunkKey(t,e){return`${Math.floor(t/be)},${Math.floor(e/be)}`}makeResidents(){for(const t of Ee)for(let e=0;e<6;e++){const n=e*2.1,s=t.x+Math.cos(n)*35,r=t.z+Math.sin(n)*35;if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+4&&Math.abs(r-a.z)<a.d/2+4))continue;const o=jc([15117949,9684144,12426184,14661238][e%4]);this.scene.add(o),this.people.push({mesh:o,x:s,z:r,phase:e+t.x*.01})}for(const t of this.activitySites){const e=Math.cos(t.heading),n=Math.sin(t.heading);for(let s=0;s<2;s++){const r=t.depth/2+7,o=t.x+e*(-4+s*8)+n*r,a=t.z-n*(-4+s*8)+e*r;if([...this.nearbySolids(o,a)].some(h=>Math.abs(o-h.x)<h.w/2+3&&Math.abs(a-h.z)<h.d/2+3))continue;const l=jc([13019068,10467493][s]);this.scene.add(l),this.people.push({mesh:l,x:o,z:a,phase:t.x*.01+s,heading:t.heading,path:!0})}}for(let t=0;t<9;t++){const e=Eg([10786240,14790523,8566201][t%3]);this.scene.add(e),this.traffic.push({mesh:e,phase:t/9,speed:8+t%3*2,solid:{x:0,z:0,w:5,d:8,height:3,y:0}})}for(const t of Ee)for(let e=0;e<(t.id==="fields"?14:4);e++){const n=e*2.3,s=t.x+Math.cos(n)*(60+e%4*22),r=t.z+Math.sin(n)*(60+e%4*22),o=ee(s,r)+8+e%3*3,a=bg(e%2?15308734:11705307);this.scene.add(a),this.jellies.push({mesh:a,x:s,y:o,z:r,phase:e})}}makeAtmosphere(){this.vehicleShadow=this.makeContactShadow(0,0,2.8,3.2),this.vehicleShadow.geometry.attributes.position.setUsage(Xa),this.bubbles=[];const t=new Pi(new In(.13,5,3),fn(13236451,!1,.36),42);t.frustumCulled=!1,this.scene.add(t),this.bubbleMesh=t,this.particles=[],this.particleMesh=new Pi(new bs(.16),fn(16767100),80),this.particleMesh.frustumCulled=!1,this.scene.add(this.particleMesh),this.software&&(t.visible=!1,this.particleMesh.visible=!1)}createChunk(t){const e=`${t.cx},${t.cz}`,n=this.chunks.get(e);n&&this.disposeChunk(n);const s=new ce;s.position.set(t.cx*be,0,t.cz*be);const r=new Me;r.setAttribute("position",new Ue(t.positions,3)),r.setAttribute("color",new Ue(t.colors,3)),r.setAttribute("uv",new Ue(t.uv,2)),r.setIndex(new Ue(t.indices,1)),r.computeVertexNormals(),r.computeBoundingSphere();let o=this.terrainMat;if(!this.software){const x=new ya(t.paint,t.paintSize,t.paintSize,Ze);x.colorSpace=Le,x.magFilter=Je,x.minFilter=Je,x.needsUpdate=!0,o=Pg(x);for(let m=0;m<r.attributes.uv.count;m++)r.attributes.uv.setXY(m,r.attributes.position.getX(m)/be,r.attributes.position.getZ(m)/be)}const a=jt(s,r,o);a.castShadow=!1,a.renderOrder=-50;const l=[],h=[];for(const x of["rock","coral","kelp"])for(let m=0;m<3;m++){let p=t.props.filter(_=>_.type===x&&_.color===m&&(x!=="rock"||!this.coins.some(R=>Math.hypot(R.x-_.x,R.z-_.z)<2.4*_.scale+4)));if(this.software&&(p=p.filter(_=>ve(Math.floor(_.x),Math.floor(_.z),62)<.3)),!p.length)continue;const S={rock:[10005921,12170400,10267066],coral:[13536174,14852480,10852297],kelp:[4558712,6924158,8957029]},M=new Pi(this.flora[x],fn(S[x][m]),p.length);M.castShadow=!1,M.receiveShadow=!0,p.forEach((_,R)=>{if(ae.position.set(_.x-s.position.x,_.y,_.z-s.position.z),ae.rotation.set(0,_.rotation,0),ae.scale.setScalar(_.scale),ei(M,R,ae),x==="rock"){const A={x:_.x,z:_.z,w:4.8*_.scale,d:4.8*_.scale,height:4.8*_.scale,y:_.y-2.4*_.scale};this.colliderHash.add(A),h.push(A)}}),M.computeBoundingSphere(),s.add(M),l.push({batch:M,props:p})}const c=this.objectsByChunk.get(e)??[],u=c.filter(x=>x.kind==="crown");let d=null;u.length&&(d=new Pi(this.crownGeo,this.crownMat,u.length),d.instanceMatrix.setUsage(Xa),d.frustumCulled=!1,s.add(d),u.forEach((x,m)=>{x.slot=m,ae.position.set(x.x-s.position.x,x.y,x.z-s.position.z),ae.rotation.set(0,0,0),ae.scale.setScalar(this.collectedIds.has(x.id)?0:1),ei(d,m,ae)}));const f=[];for(const x of c.filter(m=>m.kind==="barrel")){if(this.brokenIds.has(x.id))continue;const m=Tg();m.position.set(x.x-s.position.x,x.y,x.z-s.position.z),s.add(m),f.push({item:x,mesh:m})}const g={key:e,group:s,terrain:a,segments:t.segments,flora:l,rockSolids:h,coins:u,crownBatch:d,barrels:f,used:++this.stamp};this.chunks.set(e,g),this.scene.add(s),this.software&&Xl(s),this.updateChunkCoins(g,0)}ensureAround(t,e,n=0,s=!1){const r=Math.floor(t/be),o=Math.floor(e/be),a=`${r},${o}`;if(a===this.lastCell&&!s)return;this.lastCell=a,this.wanted.clear();const l=this.software?1:2,h=[];for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){const d=r+u,f=o+c;if(d*be>900||f*be>900||(d+1)*be<-900||(f+1)*be<-900)continue;const g=this.software?8:Math.max(Math.abs(u),Math.abs(c))<=1?32:8,x=`${d},${f}`;this.wanted.set(x,g);const m=this.chunks.get(x);if(m&&m.segments===g){m.group.visible=!0,m.used=++this.stamp;continue}this.pending.has(x)||h.push({key:x,cx:d,cz:f,segments:g,priority:u*u+c*c})}h.sort((c,u)=>c.priority-u.priority);for(const c of this.chunks.values())c.group.visible=this.wanted.has(c.key);if(this.queue=h,s){const c=Math.min(3,this.queue.length);for(let u=0;u<c;u++){const d=this.queue.shift();this.createChunk(Jc(d.cx,d.cz,d.segments))}}}stream(){if(this.ready.length){const t=this.ready.shift(),e=`${t.cx},${t.cz}`,n=this.wanted.get(e);n===t.segments?this.createChunk(t):n&&!this.pending.has(e)&&this.queue.push({key:e,cx:t.cx,cz:t.cz,segments:n})}if(this.queue=this.queue.filter(t=>this.wanted.get(t.key)===t.segments&&this.chunks.get(t.key)?.segments!==t.segments&&!this.pending.has(t.key)),this.queue.length&&this.pending.size<3){const t=this.queue.shift();this.worker?(this.pending.set(t.key,t),this.worker.postMessage(t)):this.createChunk(Jc(t.cx,t.cz,t.segments))}for(;this.chunks.size>55;){const e=[...this.chunks.values()].filter(n=>!n.group.visible).sort((n,s)=>n.used-s.used)[0];if(e)this.disposeChunk(e),this.chunks.delete(e.key);else break}}updateChunkCoins(t,e){t.crownBatch&&(t.coins.forEach((n,s)=>{ae.position.set(n.x-t.group.position.x,n.y+Math.sin(e*2+n.phase)*.2,n.z-t.group.position.z),ae.rotation.set(0,e*1.1+n.phase,0),ae.scale.setScalar(this.collectedIds.has(n.id)?0:1),ei(t.crownBatch,s,ae)}),t.crownBatch.instanceMatrix.needsUpdate=!0)}burst(t,e,n){if(!this.software)for(let s=0;s<12;s++)this.particles.length>=80&&this.particles.shift(),this.particles.push({x:t,y:e,z:n,vx:(Math.random()-.5)*7,vy:3+Math.random()*4,vz:(Math.random()-.5)*7,life:1})}update(t,e,n,s,r){gg(t);for(const c of this.scenicGates){const u=this.save.trails?.[c.routeId]??0;c.color.color.setHex(di.find(d=>d.id===c.routeId).color),c.color.color.multiplyScalar(c.index===u?1:c.index<u?.55:.75)}const o=this.vehicleShadow.geometry.attributes.position,a=Math.max(0,n.y-ee(n.x,n.z)),l=1+Math.min(a,18)*.045;for(let c=0;c<o.count;c++){const u=(c-1)/24*Math.PI*2,d=n.x+(c?Math.cos(u)*2.8*l:0),f=n.z+(c?Math.sin(u)*3.2*l:0);o.setXYZ(c,d,ee(d,f)+.12,f)}o.needsUpdate=!0,this.vehicleShadow.geometry.computeBoundingSphere(),this.ensureAround(n.x,n.z,n.heading),this.stream();for(const c of this.interactionHash.query(n.x,n.z,5))Math.hypot(c.x-n.x,c.z-n.z)>3.9||Math.abs(c.y-n.y-1.6)>3.1||(c.kind==="crown"&&!this.collectedIds.has(c.id)&&(this.collectedIds.add(c.id),this.collected++,this.burst(c.x,c.y,c.z),s(c.id)),c.kind==="barrel"&&!this.brokenIds.has(c.id)&&Math.abs(n.speed)>4&&(this.brokenIds.add(c.id),this.burst(c.x,c.y+1,c.z),r(c.id)));for(const c of this.chunks.values())if(c.group.visible){this.updateChunkCoins(c,t);for(const u of c.barrels)u.mesh.visible=!this.brokenIds.has(u.item.id);if(this.software)for(const{batch:u,props:d}of c.flora)u.userData.softwareCopies?.forEach((f,g)=>f.visible=Math.hypot(d[g].x-n.x,d[g].z-n.z)<95)}for(const c of this.landmarkObjects)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?600:1050);for(const c of this.decor)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?230:400);const h=Cn[0];for(const c of this.traffic){const u=(t*c.speed+c.phase*h.length)%h.length;let d=0,f=h.nodes.length-1;for(;d<f;){const b=d+f>>1;h.nodes[b].distance<u?d=b+1:f=b}const g=h.nodes[Math.max(0,d-1)],x=h.nodes[d],m=ye((u-g.distance)/(x.distance-g.distance||1),0,1),p=x.x-g.x,S=x.z-g.z,M=Math.hypot(p,S)||1,_=g.x+p*m+S/M*5,R=g.z+S*m-p/M*5,A=c.solid;this.colliderHash.remove(A);const C=Math.abs(p/M),P=Math.abs(S/M);Object.assign(A,{x:_,z:R,y:ee(_,R),w:5*P+8*C,d:8*P+5*C}),c.mesh.visible=Math.hypot(_-n.x,R-n.z)<(this.software?125:250),c.mesh.visible&&(this.colliderHash.add(A),c.mesh.position.set(_,ee(_,R),R),c.mesh.rotation.y=Math.atan2(-p,-S))}for(const c of this.people){if(c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?90:180),!c.mesh.visible)continue;const u=Math.hypot(c.x-n.x,c.z-n.z)<10;let d=c.x+Math.sin(t*.4+c.phase)*3+(u?Math.sign(c.x-n.x)*4:0),f=c.z+Math.cos(t*.3+c.phase)*3;if(c.path){const x=Math.sin(t*.2+c.phase)*3.5;d=c.x+Math.cos(c.heading)*x,f=c.z-Math.sin(c.heading)*x}[...this.nearbySolids(d,f)].some(x=>Math.abs(d-x.x)<x.w/2+1&&Math.abs(f-x.z)<x.d/2+1)&&(d=c.x,f=c.z),c.mesh.position.set(d,ee(d,f)+Math.abs(Math.sin(t*4+c.phase))*.06,f),c.mesh.rotation.y=c.path?c.heading+(Math.cos(t*.2+c.phase)>0?-Math.PI/2:Math.PI/2):c.phase+Math.sin(t*.2)*.3,c.mesh.rotation.z=Math.sin(t*4+c.phase)*.035;const g=Math.sin(t*3.5+c.phase)*.25;c.mesh.userData.legs?.forEach((x,m)=>x.rotation.x=g*(m?1:-1)),c.mesh.userData.arms?.forEach((x,m)=>x.rotation.x=g*(m?-1:1))}for(const c of this.jellies)c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?140:270),c.mesh.visible&&(c.mesh.position.set(c.x+Math.sin(t*.2+c.phase)*5,c.y+Math.sin(t+c.phase)*1.1,c.z),c.mesh.scale.setScalar(1+Math.sin(t*2+c.phase)*.045));if(!this.software){for(let c=0;c<42;c++){const u=n.x+(ve(c,0,62)-.5)*120,d=n.z+(ve(c,1,62)-.5)*120,f=n.y+(t*.8+ve(c,2,62)*30)%30;ae.position.set(u,f,d),ae.rotation.set(0,0,0),ae.scale.setScalar(.4+ve(c,3,62)*1.1),ei(this.bubbleMesh,c,ae)}this.bubbleMesh.instanceMatrix.needsUpdate=!0,this.particles=this.particles.filter(c=>c.life>0);for(let c=0;c<80;c++){const u=this.particles[c];u?(u.life-=e,u.vy-=9*e,u.x+=u.vx*e,u.y+=u.vy*e,u.z+=u.vz*e,ae.position.set(u.x,u.y,u.z),ae.scale.setScalar(Math.max(0,u.life))):ae.scale.setScalar(0),ae.rotation.set(0,0,0),ei(this.particleMesh,c,ae)}this.particleMesh.instanceMatrix.needsUpdate=!0}}recover(t,e){const n=li(t,e,!0);return{x:n.x,z:n.z,heading:n.heading}}disposeChunk(t){this.scene.remove(t.group);for(const e of t.rockSolids??[])this.colliderHash.remove(e);t.group.traverse(e=>{e.isInstancedMesh&&e.dispose()}),t.terrain.geometry.dispose(),this.software||(t.terrain.material.map.dispose(),t.terrain.material.dispose())}dispose(){this.worker?.terminate(),this.worker=null,this.pending.clear(),this.ready.length=0,this.queue.length=0;for(const t of this.chunks.values())this.disposeChunk(t);this.chunks.clear();for(const t of this.traffic)this.colliderHash.remove(t.solid)}}class Hg{constructor(){this.keys=new Set,this.pointers=new Map;const t=/^(Arrow|Key[WASDR]|Space|Shift|Escape)/;addEventListener("keydown",e=>{t.test(e.code)&&(e.preventDefault(),this.keys.add(e.code))}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.clear());for(const e of document.querySelectorAll("[data-key]")){e.addEventListener("pointerdown",s=>{s.preventDefault(),e.setPointerCapture(s.pointerId),this.pointers.set(s.pointerId,e.dataset.key),this.keys.add(e.dataset.key)});const n=s=>{const r=this.pointers.get(s.pointerId);this.pointers.delete(s.pointerId),[...this.pointers.values()].includes(r)||this.keys.delete(r)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("lostpointercapture",n)}}has(...t){return t.some(e=>this.keys.has(e))}clear(){this.keys.clear(),this.pointers.clear()}}class Vg{constructor(){this.enabled=!1,this.ctx=null}toggle(){return this.enabled=!this.enabled,this.enabled&&(this.ctx??=new AudioContext,this.ctx.resume()),this.enabled}tone(t=650,e=.12){if(!this.enabled||!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.value=t,s.gain.setValueAtTime(.06,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),n.connect(s).connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+e)}}const ih=`patty-wagon-underwater-v${Pa}-${Tr}`,Gg="patty-wagon-free-roam-v1",ni=(i,t)=>Array.isArray(i)?[...new Set(i.filter(t))]:[],nl=i=>t=>typeof t=="string"&&new RegExp(`^${i}:[a-z0-9:-]{1,90}$`).test(t);function il(i=null){return{version:Pa,seed:Tr,coins:[],broken:[],activities:[],trails:{},visited:[],secrets:[],position:null,legacy:i}}function Wg(i){try{i??=globalThis.localStorage;const t=JSON.parse(i.getItem(ih)),e=JSON.parse(i.getItem(Gg)),n=t?.legacy??(e?{coins:ni(e.coins,r=>Number.isInteger(r)&&r>=0&&r<96).length,broken:ni(e.broken,r=>Number.isInteger(r)&&r>=0&&r<42).length}:null),s=il(n);if(t?.version!==Pa||t?.seed!==Tr)return s;s.coins=ni(t.coins,nl("crown")),s.broken=ni(t.broken,nl("prop")),s.activities=ni(t.activities,r=>["jump","smash","explorer",...di.map(o=>`trail:${o.id}`)].includes(r));for(const r of di){const o=t.trails?.[r.id];s.trails[r.id]=s.activities.includes(`trail:${r.id}`)?r.gates.length:Number.isInteger(o)?Math.max(0,Math.min(r.gates.length,o)):0}return s.visited=ni(t.visited,r=>Ee.some(o=>o.id===r)),s.secrets=ni(t.secrets,r=>Ts.some(o=>o.id===r)),t.position&&["x","z","heading"].every(r=>Number.isFinite(t.position[r]))&&Math.max(Math.abs(t.position.x),Math.abs(t.position.z))<875&&(s.position={x:t.position.x,z:t.position.z,heading:t.position.heading}),n&&(s.legacy={coins:Math.max(0,Math.min(96,Number(n.coins)||0)),broken:Math.max(0,Math.min(42,Number(n.broken)||0))}),s}catch{return il()}}function Xg(i,t){try{return t??=globalThis.localStorage,t.setItem(ih,JSON.stringify(i)),!0}catch{return!1}}function qg(i,t,e,n){let s=i.x,r=i.z,o=0;const a=[...n].filter(l=>i.y<(l.y??0)+l.height&&i.y+2.6>(l.y??0));for(let l=0;l<3;l++){let h=null;for(const f of a){const g=f.x-f.w/2-2,x=f.x+f.w/2+2,m=f.z-f.d/2-2.1,p=f.z+f.d/2+2.1;if(s>g&&s<x&&r>m&&r<p){const C=[[s-g,-1,0],[x-s,1,0],[r-m,0,-1],[p-r,0,1]];C.sort((L,F)=>L[0]-F[0]);const[P,b,y]=C[0];s+=b*(P+.002),r+=y*(P+.002)}let S=-1/0,M=1/0,_=0,R=0,A=!1;for(const[C,P,b,y,L]of[[s,t,g,x,0],[r,e,m,p,1]]){if(Math.abs(P)<1e-9){(C<b||C>y)&&(A=!0);continue}const F=(b-C)/P,X=(y-C)/P,q=Math.min(F,X),Z=Math.max(F,X);q>S&&(S=q,_=L===0?-Math.sign(P):0,R=L===1?-Math.sign(P):0),M=Math.min(M,Z)}!A&&S>=0&&S<=1&&S<=M&&(!h||S<h.t)&&(h={t:S,nx:_,nz:R})}if(!h){s+=t,r+=e;break}const c=Math.max(0,h.t-.001/(Math.hypot(t,e)||1));s+=t*c,r+=e*c,t*=1-c,e*=1-c;const u=t*h.nx+e*h.nz;u<0&&(t-=u*h.nx,e-=u*h.nz);const d=i.vx*h.nx+i.vz*h.nz;d<0&&(i.vx-=d*h.nx,i.vz-=d*h.nz),o++}return i.x=s,i.z=r,o&&(i.speed=Math.sign(i.speed)*Math.min(Math.abs(i.speed),Math.hypot(i.vx,i.vz))),o}const Yg=18;function $g(i,t,e=[],n=()=>0){let s=n(i,t);for(const r of e){const o=La(i,t,{baseY:0,...r});o!==null&&(s=Math.max(s,o))}return s}function ii(i,t,e){return i.heightAt?i.heightAt(t,e):$g(t,e,i.ramps??[])}function Jg(i,t,e,n){e=Math.min(Math.max(e,0),.05);const s=ii(n,i.x,i.z),r=i.y<=s+.18&&i.vy<=0,o=t.boost&&t.throttle>0&&i.energy>1,a=n.collected>=80?2:n.collected>=30?1:0;i.energy=ye(i.energy+(o?-26:16)*e,0,100),i.speed+=t.throttle*(o?43:29)*e,i.speed*=Math.exp(-(t.brake?2.6:t.throttle?.25:.8)*e),i.speed=ye(i.speed,-16,(o?58:38)+a*4),i.heading-=t.steer*(t.brake?2.15:1.42)*ye(i.speed/25,-1,1.15)*e*(r?1:.38);const l=1-Math.exp(-(r?t.brake?1.35:5.5+a*.4:.65)*e);i.vx+=(-Math.sin(i.heading)*i.speed-i.vx)*l,i.vz+=(-Math.cos(i.heading)*i.speed-i.vz)*l;const h=i.x,c=i.z,u=n.nearbySolids?n.nearbySolids(i.x+i.vx*e/2,i.z+i.vz*e/2,Math.hypot(i.vx,i.vz)*e/2+4):n.solids??[],d=qg(i,i.vx*e,i.vz*e,u),f=n.boundary??gn/2-8;(Math.abs(i.x)>f||Math.abs(i.z)>f)&&(i.x=ye(i.x,-f,f),i.z=ye(i.z,-f,f),i.speed*=-.2,i.vx*=-.2,i.vz*=-.2);const g=ii(n,i.x,i.z),x=n.ramps?.some(A=>La(h,c,{baseY:0,...A})!==null);let m=!1,p=!1;r&&s-g>.65&&Math.abs(i.speed)>8&&(i.vy=((x?8:2)+Math.abs(i.speed)*(x?.22:.1))*.9,m=!0),r&&!m?(p=!i.grounded,i.y=g,i.vy=0):(i.vy-=Yg*e,i.y+=i.vy*e,i.y<=g&&(i.y=g,i.vy=0,p=!0)),["x","z","y","heading","speed","vx","vz","vy"].every(A=>Number.isFinite(i[A]))||Object.assign(i,ca()),i.grounded=i.y<=ii(n,i.x,i.z)+.001&&i.vy<=0;const S=-Math.sin(i.heading),M=-Math.cos(i.heading),_=Math.cos(i.heading),R=-Math.sin(i.heading);if(i.grounded){const A=ii(n,i.x+S*1.5,i.z+M*1.5),C=ii(n,i.x-S*1.5,i.z-M*1.5),P=ii(n,i.x-_*1.8,i.z-R*1.8),b=ii(n,i.x+_*1.8,i.z+R*1.8);i.pitch+=(Math.atan2(A-C,3)-i.pitch)*(1-Math.exp(-10*e)),i.roll+=(Math.atan2(b-P,3.6)-i.roll)*(1-Math.exp(-10*e))}else i.pitch*=Math.exp(-2*e),i.roll*=Math.exp(-2*e);return{boost:o,landed:p,launched:m,impacts:d}}function ca(i=ur(),t=ee){return{x:i.x,y:t(i.x,i.z),z:i.z,heading:i.heading??0,speed:0,vx:0,vz:0,vy:0,energy:100,pitch:0,roll:0,grounded:!0}}try{let Z=function(D){b.textContent=D,b.classList.add("visible"),S=g+3},Y=function(){a.position={x:f.x,z:f.z,heading:f.heading},Xg(a)||Z("This browser could not save your progress.")},st=function(D,O){a.activities.includes(D)||(a.activities.push(D),Y(),c.tone(950,.3),Z(O))},$=function(){return`${a.coins.length} / ${l.coins.length} crowns · ${a.visited.length} / 7 areas explored · ${a.secrets.length} / 7 secrets · ${a.broken.length} props smashed · ${di.filter(D=>a.trails[D.id]===D.gates.length).length} / 3 scenic routes`},ht=function(D){p=D,h.clear(),D?(i("#progress").textContent=$(),i("#legacy").textContent=a.legacy?`Previous town archived: ${a.legacy.coins} discoveries. Your wagon keeps that upgrade credit.`:"",C.open||C.showModal()):(C.open&&C.close(),P.open&&P.close()),x=performance.now()},gt=function(D,O){f=ca(D,l.heightAt.bind(l)),d.resetPosition(),M=null,r.position.set(f.x+Math.sin(f.heading)*18,f.y+9,f.z+Math.cos(f.heading)*18),l.ensureAround(f.x,f.z,f.heading,!0),Y(),O&&Z(O)},wt=function(D,O,ot=!0){D.clearRect(0,0,O,O),D.fillStyle="#134c59",D.fillRect(0,0,O,O);const Q=(W,ct)=>[(W/gn+.5)*O,(ct/gn+.5)*O];for(const W of Ee){const[ct,T]=Q(W.x,W.z),z=D.createRadialGradient(ct,T,0,ct,T,O*.19);z.addColorStop(0,W.color+"44"),z.addColorStop(1,W.color+"00"),D.fillStyle=z,D.beginPath(),D.arc(ct,T,O*.19,0,Math.PI*2),D.fill()}D.lineCap="round",D.lineJoin="round",D.strokeStyle="#afddd0",D.lineWidth=O>300?3:1.5;for(const W of Cn)D.beginPath(),W.nodes.forEach((ct,T)=>{const[z,H]=Q(ct.x,ct.z);T?D.lineTo(z,H):D.moveTo(z,H)}),D.stroke();for(const W of Ee){const[ct,T]=Q(W.x,W.z);D.fillStyle=a.visited.includes(W.id)?"#ffd56d":"#d9e9d8",D.beginPath(),D.arc(ct,T,O>300?5:2.2,0,Math.PI*2),D.fill(),O>300&&(D.font="600 12px system-ui",D.textAlign="center",D.fillText(W.name,ct,T-12))}if(ot){const[W,ct]=Q(f.x,f.z);D.save(),D.translate(W,ct),D.rotate(-f.heading),D.fillStyle="#fff2bb",D.strokeStyle="#155968",D.lineWidth=2,D.beginPath(),D.moveTo(0,-7),D.lineTo(5,6),D.lineTo(0,3),D.lineTo(-5,6),D.closePath(),D.fill(),D.stroke(),D.restore()}for(const W of di){const ct=W.gates[a.trails[W.id]??0];if(!ct)continue;const[T,z]=Q(ct.x,ct.z);D.strokeStyle="#ffe292",D.lineWidth=O>300?2:1,D.strokeRect(T-3,z-3,6,6),O>300&&(D.fillStyle="#fff1c5",D.font="11px system-ui",D.textAlign="center",D.fillText(`${W.name} ${(a.trails[W.id]??0)+1}/6`,T,z+17))}},Kt=function(){h.clear(),p=!0,C.open&&C.close(),P.open||P.showModal(),wt(i("#town-map").getContext("2d"),600),i("#map-progress").textContent=$()},$t=function(){e.setSize(innerWidth,innerHeight),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix()},nt=function(D){requestAnimationFrame(nt);const O=Math.min((D-x)/1e3,.12);if(x=D,p)return;g+=O,q.frames++,q.totalTime+=O,q.frameMs=q.frameMs*.95+O*1e3*.05,q.totalTime>1&&(q.fps=Math.round(q.frames/q.totalTime),q.frames=0,q.totalTime=0);const ot={throttle:Number(h.has("KeyW","ArrowUp"))-Number(h.has("KeyS","ArrowDown")),steer:Number(h.has("KeyD","ArrowRight"))-Number(h.has("KeyA","ArrowLeft")),brake:h.has("Space"),boost:h.has("ShiftLeft","ShiftRight")},Q=Math.max(1,Math.ceil(O/(1/60)));for(let W=0;W<Q;W++){const ct=Jg(f,ot,O/Q,l);if(ct.launched&&!M&&(M={x:f.x,z:f.z}),ct.landed&&M){const T=Math.hypot(f.x-M.x,f.z-M.z);_=Math.max(_,T),T>35&&st("jump","Long jump · 35 meters cleared"),M=null}}l.update(g,O,f,W=>{a.coins.push(W),c.tone(600+a.coins.length%7*70),(l.collected===30||l.collected===80)&&Z("Wagon upgraded · more speed and sharper handling"),Y()},W=>{a.broken.push(W),c.tone(120,.1),a.broken.length>=20&&st("smash","Smash trail · 20 props broken"),Y()}),d.update(f,(W,ct,T)=>{Y(),c.tone(T?1100:780,.15),Z(T?`${W.name} complete`:`${W.name} · ${ct}/6 gates`)});for(const W of Ee)Math.hypot(f.x-W.x,f.z-W.z)<155&&!a.visited.includes(W.id)&&(a.visited.push(W.id),Y(),a.visited.length===7&&st("explorer","Town explorer · all seven areas discovered"));for(const W of Ts)Math.hypot(f.x-W.x,f.z-W.z)<15&&!a.secrets.includes(W.id)&&(a.secrets.push(W.id),Y(),c.tone(1150,.3),Z(`Secret discovered · ${W.name}`));u.position.set(f.x,f.y,f.z),u.rotation.order="YXZ",u.rotation.set(f.pitch,f.heading,f.roll+ot.steer*Math.min(Math.abs(f.speed)*.0025,.08));for(const W of u.userData.wheels)W.mesh.rotation.x+=f.speed*O/.73,W.mesh.rotation.y=W.front?-ot.steer*.32:0;u.userData.propeller.rotation.z+=f.speed*O*.4,X.set(f.x,f.y+2.2,f.z),F.set(f.x+Math.sin(f.heading)*17,f.y+9,f.z+Math.cos(f.heading)*17),F.y=Math.max(F.y,l.heightAt(F.x,F.z)+3.8);for(let W=1;W<=8;W++){const ct=W/8,T=X.x+(F.x-X.x)*ct,z=X.y+(F.y-X.y)*ct,H=X.z+(F.z-X.z)*ct;if([...l.nearbySolids(T,H)].some(V=>z>V.y&&z<V.y+V.height&&Math.abs(T-V.x)<V.w/2+.5&&Math.abs(H-V.z)<V.d/2+.5)){F.lerp(X,1-ct+.08);break}}if(r.position.lerp(F,1-Math.exp(-6*O)),r.lookAt(f.x-Math.sin(f.heading)*5,f.y+1.8,f.z-Math.cos(f.heading)*5),o.position.set(f.x-90,f.y+150,f.z+90),o.target.position.set(f.x,f.y,f.z),g-A>.14){i("#score").textContent=a.coins.length,i("#speed-value").textContent=Math.round(Math.abs(f.speed)*3.6),i("#boost").value=f.energy,i("#upgrade").textContent=l.collected>=80?"Boost III":l.collected>=30?"Boost II":"Boost",i("#district").textContent=Ee.reduce((ct,T)=>Math.hypot(f.x-ct.x,f.z-ct.z)<Math.hypot(f.x-T.x,f.z-T.z)?ct:T).name,wt(L,168),A=g;const W=e.domElement;W.dataset.renderer=n?"software":"webgl",W.dataset.worldSize=gn,W.dataset.activeChunks=[...l.chunks.values()].filter(ct=>ct.group.visible).length,W.dataset.frameMs=q.frameMs.toFixed(1),W.dataset.crowns=a.coins.length,W.dataset.position=`${f.x.toFixed(1)},${f.y.toFixed(1)},${f.z.toFixed(1)}`,W.dataset.grounded=f.grounded}g-R>10&&(Y(),R=g),g>S&&b.classList.remove("visible"),(!n||D-m>100)&&(e.render(s,r),n&&(e.domElement.style.background="transparent"),m=D)};const i=D=>document.querySelector(D),t=i("#game"),{renderer:e,software:n}=ig(t),s=new Eu;s.fog=new Ma(6670015,n?230:350,n?630:1050);const r=new sn(58,innerWidth/innerHeight,.2,n?650:1250);s.add(new uf(12970472,5401705,n?2:1.45)),n&&s.add(new mf(14282973,.75));const o=new pf(16772545,n?.55:2);o.position.set(-90,150,90),o.castShadow=!n,o.shadow.mapSize.set(1024,1024),o.shadow.camera.left=-60,o.shadow.camera.right=60,o.shadow.camera.top=60,o.shadow.camera.bottom=-60,o.shadow.camera.far=400,o.shadow.bias=-.001,o.shadow.normalBias=.06,s.add(o),s.add(o.target);const a=Wg(),l=new kg(s,a,{software:n}),h=new Hg,c=new Vg,u=Mg(),d=new zg(a);if(s.add(u),n&&u.traverse(D=>{D.isMesh&&(D.renderOrder=5)}),n){const D=[l.particleMesh,l.bubbleMesh];for(const O of D)s.remove(O);Xl(s);for(const O of D)s.add(O),O.visible=!1}let f=ca(a.position??ur(),l.heightAt.bind(l)),g=0,x=performance.now(),m=0,p=!1,S=0,M=null,_=0,R=0,A=0;const C=i("#menu"),P=i("#atlas"),b=i("#toast"),y=i("#minimap"),L=y.getContext("2d"),F=new I,X=new I,q={fps:0,frameMs:0,frames:0,totalTime:0};i("#total").textContent=l.coins.length,C.addEventListener("cancel",D=>{D.preventDefault(),ht(!1)}),C.addEventListener("close",()=>{P.open||(p=!1,x=performance.now())}),P.addEventListener("cancel",D=>{D.preventDefault(),ht(!1)}),P.addEventListener("close",()=>{C.open||(p=!1,x=performance.now())}),i("#pause").onclick=()=>ht(!0),i("#help").onclick=()=>ht(!0),i("#resume").onclick=()=>ht(!1),i("#close-map").onclick=()=>ht(!1),i("#reset").onclick=()=>gt(l.recover(f.x,f.z),"Back on the nearest road."),i("#sound").onclick=D=>{D.target.textContent=c.toggle()?"Sound on":"Sound off"};const Bt=["The three houses & kelp arch","Restaurant landmarks & smash trail","Jellyfish trails & coral grotto","Goofy Goober & pearl garden","Thug Tug & sunken treasure","Dune jumps & mountain lookout","Neptune’s castle & royal garden"],Yt=i("#area-list");Ee.forEach((D,O)=>{const ot=document.createElement("button");ot.className="area",ot.dataset.area=D.id;const Q=document.createElement("strong");Q.textContent=D.name;const W=document.createElement("small");W.textContent=Bt[O],ot.append(Q,W),ot.onclick=()=>{ht(!1),gt(ur(D.id),D.name)},Yt.append(ot)}),i("#map").onclick=Kt,i("#minimap").onclick=Kt,addEventListener("keydown",D=>{D.repeat||(D.code==="Escape"&&(D.preventDefault(),ht(!p)),D.code==="KeyR"&&i("#reset").click(),D.code==="KeyM"&&(D.preventDefault(),P.open?ht(!1):Kt()))}),addEventListener("blur",()=>{p||ht(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(Y(),ht(!0))}),addEventListener("pagehide",Y),n||(t.addEventListener("webglcontextlost",D=>{D.preventDefault(),Y(),ht(!0);const O=i("#error");O.hidden=!1,O.textContent="Graphics paused. Waiting for the browser to restore the game…"}),t.addEventListener("webglcontextrestored",()=>{i("#error").hidden=!0,Z("Graphics restored · choose Resume to continue")})),addEventListener("resize",$t),$t(),gt(a.position??ur()),window.__pattyWagon={get state(){return{...f}},get progress(){return structuredClone(a)},get diagnostics(){return{renderer:n?"software":"webgl",worldSize:gn,roadLength:Math.round(Cn.reduce((D,O)=>D+O.length,0)),loopLength:Math.round(Cn[0].length),crowns:l.coins.length,breakables:l.breakables.length,ramps:l.ramps.length,districts:Ee.length,activeChunks:[...l.chunks.values()].filter(D=>D.group.visible).length,cachedChunks:l.chunks.size,drawCalls:e.info.render.calls??e.info.render.faces,fps:q.fps,bestJump:_,districtDetails:l.districtObjects.length,scenicGates:l.scenicGates.length}}},Z("WASD / arrows · drive   Shift · boost   M · town map"),requestAnimationFrame(nt)}catch(i){const t=document.querySelector("#error");t.hidden=!1,t.textContent=`The underwater town could not start. Refresh the page to try again. ${i.message}`,console.error(i)}
