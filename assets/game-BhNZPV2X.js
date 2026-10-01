(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="180",zh=0,rc=1,Fh=2,Rl=1,Cl=2,In=3,jn=0,Ye=1,Ve=2,Jn=0,$i=1,oc=2,ac=3,cc=4,Oh=5,di=100,Bh=101,kh=102,Hh=103,Vh=104,Gh=200,Wh=201,Xh=202,qh=203,zo=204,Fo=205,Yh=206,$h=207,Jh=208,Zh=209,Kh=210,jh=211,Qh=212,tu=213,eu=214,Oo=0,Bo=1,ko=2,ji=3,Ho=4,Vo=5,Go=6,Wo=7,Br=0,nu=1,iu=2,Zn=0,su=1,ru=2,ou=3,Pl=4,au=5,cu=6,lu=7,Ll=300,Qi=301,ts=302,Xo=303,qo=304,kr=306,Ps=1e3,mi=1001,Yo=1002,en=1003,hu=1004,js=1005,Qe=1006,Jr=1007,$n=1008,bn=1009,Il=1010,Dl=1011,Ls=1012,Ra=1013,gi=1014,yn=1015,Ws=1016,Ca=1017,Pa=1018,Is=1020,Ul=35902,Nl=35899,zl=1021,Fl=1022,tn=1023,Ds=1026,Us=1027,La=1028,Ia=1029,Ol=1030,Da=1031,Ua=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,$o=35840,Jo=35841,Zo=35842,Ko=35843,jo=36196,Qo=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,ca=37815,la=37816,ha=37817,ua=37818,fa=37819,da=37820,pa=37821,ma=36492,ga=36494,xa=36495,_a=36283,va=36284,Ma=36285,ya=36286,uu=3200,fu=3201,Na=0,du=1,Dn="",Le="srgb",es="srgb-linear",Ur="linear",fe="srgb",bi=7680,lc=519,pu=512,mu=513,gu=514,Bl=515,xu=516,_u=517,vu=518,Mu=519,hc=35044,uc=35048,fc="300 es",Sn=2e3,Nr=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const ws=Math.PI/180,ns=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function za(i,t){return(i%t+t)%t}function yu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Su(i,t,e){return i!==t?(e-i)/(t-i):0}function Ts(i,t,e){return(1-e)*i+e*t}function bu(i,t,e,n){return Ts(i,t,1-Math.exp(-e*n))}function Eu(i,t=1){return t-Math.abs(za(i,t*2)-t)}function wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Au(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ru(i,t){return i+Math.random()*(t-i)}function Cu(i){return i*(.5-Math.random())}function Pu(i){i!==void 0&&(dc=i);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(i){return i*ws}function Iu(i){return i*ns}function Du(i){return(i&i-1)===0&&i!==0}function Uu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*c,l*u,l*f,a*h);break;case"YZY":i.set(l*f,a*c,l*u,a*h);break;case"ZXZ":i.set(l*u,l*f,a*c,a*h);break;case"XZX":i.set(a*c,l*g,l*d,a*h);break;case"YXY":i.set(l*d,a*c,l*g,a*h);break;case"ZYZ":i.set(l*g,l*d,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vi={DEG2RAD:ws,RAD2DEG:ns,generateUUID:Mi,clamp:Qt,euclideanModulo:za,mapLinear:yu,inverseLerp:Su,lerp:Ts,damp:bu,pingpong:Eu,smoothstep:wu,smootherstep:Tu,randInt:Au,randFloat:Ru,randFloatSpread:Cu,seededRandom:Pu,degToRad:Lu,radToDeg:Iu,isPowerOfTwo:Du,ceilPowerOfTwo:Uu,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:zu,normalize:ke,denormalize:Hi};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||h!==d||c!==g){let m=1-a;const p=l*f+h*d+c*g+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),R=Math.atan2(A,p*y);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const _=a*y;if(l=l*m+f*_,h=h*m+d*_,c=c*m+g*_,u=u*m+x*_,m===1-a){const A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*d-h*f,t[e+1]=l*g+c*f+h*u-a*d,t[e+2]=h*g+c*d+a*f-l*u,t[e+3]=c*g-a*u-l*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*c*u+h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u-f*d*g;break;case"YXZ":this._x=f*c*u+h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u+f*d*g;break;case"ZXY":this._x=f*c*u-h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u-f*d*g;break;case"ZYX":this._x=f*c*u-h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u+f*d*g;break;case"YZX":this._x=f*c*u+h*d*g,this._y=h*d*u+f*c*g,this._z=h*c*g-f*d*u,this._w=h*c*u-f*d*g;break;case"XZY":this._x=f*c*u-h*d*g,this._y=h*d*u-f*c*g,this._z=h*c*g+f*d*u,this._w=h*c*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(r-h)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(c-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+h)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-h)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+h)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,f=Math.sin(e*c)/h;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new I,pc=new Xs;class Yt{constructor(t,e,n,s,r,o,a,l,h){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],M=s[4],_=s[7],A=s[2],R=s[5],C=s[8];return r[0]=o*x+a*y+l*A,r[3]=o*m+a*M+l*R,r[6]=o*p+a*_+l*C,r[1]=h*x+c*y+u*A,r[4]=h*m+c*M+u*R,r[7]=h*p+c*_+u*C,r[2]=f*x+d*y+g*A,r[5]=f*m+d*M+g*R,r[8]=f*p+d*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,f=a*l-c*r,d=h*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*h-c*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new Yt;function kl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fu(){const i=zr("canvas");return i.style.display="block",i}const mc={};function Ns(i){i in mc||(mc[i]=!0,console.warn(i))}function Ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const gc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){const i={enabled:!0,workingColorSpace:es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[es]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:gc,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const oe=Bu();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ei;class ku{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ei===void 0&&(Ei=zr("canvas")),Ei.width=t.width,Ei.height=t.height;const s=Ei.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hu=0;class Fa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jr(s[o].image)):r.push(jr(s[o]))}else r=jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vu=0;const Qr=new I;class Oe extends os{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=mi,s=mi,r=Qe,o=$n,a=tn,l=bn,h=Oe.DEFAULT_ANISOTROPY,c=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Mi(),this.name="",this.source=new Fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qr).x}get height(){return this.source.getSize(Qr).y}get depth(){return this.source.getSize(Qr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Ll;Oe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,_=(d+1)/2,A=(p+1)/2,R=(c+f)/4,C=(u+x)/4,P=(g+m)/4;return M>_&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=C/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=R/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-c)/y,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends os{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Oe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hl extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),tr.subVectors(this.max,ds),wi.subVectors(t.a,ds),Ti.subVectors(t.b,ds),Ai.subVectors(t.c,ds),Bn.subVectors(Ti,wi),kn.subVectors(Ai,Ti),ii.subVectors(wi,Ai);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!to(e,wi,Ti,Ai,tr)||(e=[1,0,0,0,1,0,0,0,1],!to(e,wi,Ti,Ai,tr))?!1:(er.crossVectors(Bn,kn),e=[er.x,er.y,er.z],to(e,wi,Ti,Ai,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,Qs=new On,wi=new I,Ti=new I,Ai=new I,Bn=new I,kn=new I,ii=new I,ds=new I,tr=new I,er=new I,si=new I;function to(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){si.fromArray(i,r);const a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),h=e.dot(si),c=n.dot(si);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Xu=new On,ps=new I,eo=new I;class qs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(eo)),this.expandByPoint(ps.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const An=new I,no=new I,nr=new I,Hn=new I,io=new I,ir=new I,so=new I;class qu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){no.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(no);const r=t.distanceTo(e)*.5,o=-this.direction.dot(nr),a=Hn.dot(this.direction),l=-Hn.dot(nr),h=Hn.lengthSq(),c=Math.abs(1-o*o);let u,f,d,g;if(c>0)if(u=o*l-a,f=o*a-l,g=r*c,u>=0)if(f>=-g)if(f<=g){const x=1/c;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+h}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+h;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+h;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+h):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+h);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(no).addScaledVector(nr,f),d}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),c>=0?(r=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){io.subVectors(e,t),ir.subVectors(n,t),so.crossVectors(io,ir);let o=this.direction.dot(so),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const l=a*this.direction.dot(ir.crossVectors(Hn,ir));if(l<0)return null;const h=a*this.direction.dot(io.cross(Hn));if(h<0||l+h>o)return null;const c=-a*Hn.dot(so);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,l,h,c,u,f,d,g,x,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,h,c,u,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*c,d=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=d+g*h,e[5]=f-x*h,e[9]=-a*l,e[2]=x-f*h,e[6]=g+d*h,e[10]=o*l}else if(t.order==="YXZ"){const f=l*c,d=l*u,g=h*c,x=h*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*c,d=l*u,g=h*c,x=h*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*c,e[9]=x-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*c,d=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=g*h-d,e[8]=f*h+x,e[1]=l*u,e[5]=x*h+f,e[9]=d*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=f*u+x,e[5]=o*c,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*c,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yu,t,$u)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Vn.crossVectors(n,Ze),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Vn.crossVectors(n,Ze)),Vn.normalize(),sr.crossVectors(Ze,Vn),s[0]=Vn.x,s[4]=sr.x,s[8]=Ze.x,s[1]=Vn.y,s[5]=sr.y,s[9]=Ze.y,s[2]=Vn.z,s[6]=sr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],M=n[7],_=n[11],A=n[15],R=s[0],C=s[4],P=s[8],w=s[12],S=s[1],L=s[5],O=s[9],q=s[13],j=s[2],tt=s[6],Y=s[10],rt=s[14],X=s[3],ft=s[7],lt=s[11],Et=s[15];return r[0]=o*R+a*S+l*j+h*X,r[4]=o*C+a*L+l*tt+h*ft,r[8]=o*P+a*O+l*Y+h*lt,r[12]=o*w+a*q+l*rt+h*Et,r[1]=c*R+u*S+f*j+d*X,r[5]=c*C+u*L+f*tt+d*ft,r[9]=c*P+u*O+f*Y+d*lt,r[13]=c*w+u*q+f*rt+d*Et,r[2]=g*R+x*S+m*j+p*X,r[6]=g*C+x*L+m*tt+p*ft,r[10]=g*P+x*O+m*Y+p*lt,r[14]=g*w+x*q+m*rt+p*Et,r[3]=y*R+M*S+_*j+A*X,r[7]=y*C+M*L+_*tt+A*ft,r[11]=y*P+M*O+_*Y+A*lt,r[15]=y*w+M*q+_*rt+A*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*h*u-r*a*f+n*h*f+s*a*d-n*l*d)+x*(+e*l*d-e*h*f+r*o*f-s*o*d+s*h*c-r*l*c)+m*(+e*h*u-e*a*d-r*o*u+n*o*d+r*a*c-n*h*c)+p*(-s*a*c-e*l*u+e*a*f+s*o*u-n*o*f+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*h-x*f*h+x*l*d-a*m*d-u*l*p+a*f*p,M=g*f*h-c*m*h-g*l*d+o*m*d+c*l*p-o*f*p,_=c*x*h-g*u*h+g*a*d-o*x*d-c*a*p+o*u*p,A=g*u*l-c*x*l-g*a*f+o*x*f+c*a*m-o*u*m,R=e*y+n*M+s*_+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-x*l*r+x*s*h-n*m*h-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*s*h+n*f*h+a*s*d-n*l*d)*C,t[4]=M*C,t[5]=(c*m*r-g*f*r+g*s*d-e*m*d-c*s*p+e*f*p)*C,t[6]=(g*l*r-o*m*r-g*s*h+e*m*h+o*s*p-e*l*p)*C,t[7]=(o*f*r-c*l*r+c*s*h-e*f*h-o*s*d+e*l*d)*C,t[8]=_*C,t[9]=(g*u*r-c*x*r-g*n*d+e*x*d+c*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*C,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*d-e*a*d)*C,t[12]=A*C,t[13]=(c*x*s-g*u*s+g*n*f-e*x*f-c*n*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-c*a*s+c*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,f=r*h,d=r*c,g=r*u,x=o*c,m=o*u,p=a*u,y=l*h,M=l*c,_=l*u,A=n.x,R=n.y,C=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+_)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(d-_)*R,s[5]=(1-(f+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+M)*C,s[9]=(m-y)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const h=1/r,c=1/o,u=1/a;return ln.elements[0]*=h,ln.elements[1]*=h,ln.elements[2]*=h,ln.elements[4]*=c,ln.elements[5]*=c,ln.elements[6]*=c,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){const h=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Nr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=u,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){const h=this.elements,c=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Sn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Nr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=u,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new I,ln=new se,Yu=new I(0,0,0),$u=new I(1,1,1),Vn=new I,sr=new I,Ze=new I,_c=new se,vc=new Xs;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ju=0;const Mc=new I,Ci=new Xs,Rn=new se,rr=new I,ms=new I,Zu=new I,Ku=new Xs,yc=new I(1,0,0),Sc=new I(0,1,0),bc=new I(0,0,1),Ec={type:"added"},ju={type:"removed"},Pi={type:"childadded",child:null},ro={type:"childremoved",child:null};class Ee extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new I,e=new mn,n=new Xs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Yt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ms,rr,this.up):Rn.lookAt(rr,ms,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),ro.child=t,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,Cn=new I,oo=new I,Pn=new I,Li=new I,Ii=new I,wc=new I,ao=new I,co=new I,lo=new I,ho=new ce,uo=new ce,fo=new ce;class fn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Cn.subVectors(n,e),oo.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Cn),l=hn.dot(oo),h=Cn.dot(Cn),c=Cn.dot(oo),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(h*l-a*c)*f,g=(o*c-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(t,e),uo.fromBufferAttribute(t,n),fo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ho,r.x),o.addScaledVector(uo,r.y),o.addScaledVector(fo,r.z),o}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Cn.subVectors(t,e),hn.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),hn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Li.subVectors(s,n),Ii.subVectors(r,n),ao.subVectors(t,n);const l=Li.dot(ao),h=Ii.dot(ao);if(l<=0&&h<=0)return e.copy(n);co.subVectors(t,s);const c=Li.dot(co),u=Ii.dot(co);if(c>=0&&u<=c)return e.copy(s);const f=l*u-c*h;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Li,o);lo.subVectors(t,r);const d=Li.dot(lo),g=Ii.dot(lo);if(g>=0&&d<=g)return e.copy(r);const x=d*h-l*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Ii,a);const m=c*g-d*u;if(m<=0&&u-c>=0&&d-g>=0)return wc.subVectors(r,s),a=(u-c)/(u-c+(d-g)),e.copy(s).addScaledVector(wc,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Li,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},or={h:0,s:0,l:0};function po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=za(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=po(o,r,t+1/3),this.g=po(o,r,t),this.b=po(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Gl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return oe.workingToColorSpace(ze.copy(this),t),Math.round(Qt(ze.r*255,0,255))*65536+Math.round(Qt(ze.g*255,0,255))*256+Math.round(Qt(ze.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Le){oe.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(or);const n=Ts(Gn.h,or.h,e),s=Ts(Gn.s,or.s,e),r=Ts(Gn.l,or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Xt;Xt.NAMES=Gl;let Qu=0;class as extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=$i,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Fo,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ys extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new I,ar=new gt;let tf=0;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class Wl extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xl extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ef=0;const rn=new se,mo=new Ee,Di=new I,Ke=new On,gs=new On,Pe=new I;class ye extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kl(t)?Xl:Wl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ke.min,gs.min),Ke.expandByPoint(Pe),Pe.addVectors(Ke.max,gs.max),Ke.expandByPoint(Pe)):(Ke.expandByPoint(gs.min),Ke.expandByPoint(gs.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Pe.fromBufferAttribute(a,h),l&&(Di.fromBufferAttribute(t,h),Pe.add(Di)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const h=new I,c=new I,u=new I,f=new gt,d=new gt,g=new gt,x=new I,m=new I;function p(P,w,S){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),c.sub(h),u.sub(h),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(L),a[P].add(x),a[w].add(x),a[S].add(x),l[P].add(m),l[w].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,w=y.length;P<w;++P){const S=y[P],L=S.start,O=S.count;for(let q=L,j=L+O;q<j;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const M=new I,_=new I,A=new I,R=new I;function C(P){A.fromBufferAttribute(s,P),R.copy(A);const w=a[P];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),_.crossVectors(R,w);const L=_.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,w=y.length;P<w;++P){const S=y[P],L=S.start,O=S.count;for(let q=L,j=L+O;q<j;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,h=new I,c=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,f=new h.constructor(l.length*c);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*c;for(let p=0;p<c;p++)f[g++]=h[d++]}return new Ue(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const f=h[c],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new se,ri=new qu,cr=new qs,Ac=new I,lr=new I,hr=new I,ur=new I,go=new I,fr=new I,Rc=new I,dr=new I;class qe extends Ee{constructor(t=new ye,e=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){fr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(go.fromBufferAttribute(u,t),o?fr.addScaledVector(go,c):fr.addScaledVector(go.sub(e),c))}e.add(fr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(cr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(cr,Ac)===null||ri.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),ri.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,A=M;_<A;_+=3){const R=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=pr(this,p,t,n,h,c,u,R,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=pr(this,o,t,n,h,c,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,A=M;_<A;_+=3){const R=_,C=_+1,P=_+2;s=pr(this,p,t,n,h,c,u,R,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const y=m,M=m+1,_=m+2;s=pr(this,o,t,n,h,c,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function nf(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;dr.copy(a),dr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(dr);return h<e.near||h>e.far?null:{distance:h,point:dr.clone(),object:i}}function pr(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,lr),i.getVertexPosition(l,hr),i.getVertexPosition(h,ur);const c=nf(i,t,e,n,lr,hr,ur,Rc);if(c){const u=new I;fn.getBarycoord(Rc,lr,hr,ur,u),s&&(c.uv=fn.getInterpolatedAttribute(s,a,l,h,u,new gt)),r&&(c.uv1=fn.getInterpolatedAttribute(r,a,l,h,u,new gt)),o&&(c.normal=fn.getInterpolatedAttribute(o,a,l,h,u,new I),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:h,normal:new I,materialIndex:0};fn.getNormal(lr,hr,ur,f.normal),c.face=f,c.barycoord=u}return c}class yi extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(u,2));function g(x,m,p,y,M,_,A,R,C,P,w){const S=_/C,L=A/P,O=_/2,q=A/2,j=R/2,tt=C+1,Y=P+1;let rt=0,X=0;const ft=new I;for(let lt=0;lt<Y;lt++){const Et=lt*L-q;for(let kt=0;kt<tt;kt++){const Ot=kt*S-O;ft[x]=Ot*y,ft[m]=Et*M,ft[p]=j,h.push(ft.x,ft.y,ft.z),ft[x]=0,ft[m]=0,ft[p]=R>0?1:-1,c.push(ft.x,ft.y,ft.z),u.push(kt/C),u.push(1-lt/P),rt+=1}}for(let lt=0;lt<P;lt++)for(let Et=0;Et<C;Et++){const kt=f+Et+tt*lt,Ot=f+Et+tt*(lt+1),te=f+(Et+1)+tt*(lt+1),Zt=f+(Et+1)+tt*lt;l.push(kt,Ot,Zt),l.push(Ot,te,Zt),X+=6}a.addGroup(d,X,w),d+=X,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function sf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ql(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const rf={clone:is,merge:He};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oa extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new I,Cc=new gt,Pc=new gt;class We extends Oa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class cf extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const r=new We(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const o=new We(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const a=new We(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const l=new We(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const h=new We(Ui,Ni,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yl extends Oe{constructor(t=[],e=Qi,n,s,r,o,a,l,h,c){super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lf extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yi(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Jn});r.uniforms.tEquirect.value=e;const o=new qe(s,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=Qe),new cf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ee extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hf={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ba{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new Ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uf extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const mr=new I,Lc=new I;class ff extends Ee{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,s=e.length;n<s;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){mr.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(mr);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){mr.setFromMatrixPosition(t.matrixWorld),Lc.setFromMatrixPosition(this.matrixWorld);const n=mr.distanceTo(Lc)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),n>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class ka extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,h=en,c=en,u,f){super(null,o,a,l,h,c,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ic extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zi=new se,Dc=new se,gr=[],Uc=new On,df=new se,xs=new qe,_s=new qs;class Fi extends qe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,df)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),Uc.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(Uc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),_s.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zi),Dc.multiplyMatrices(n,zi),xs.matrixWorld=Dc,xs.raycast(t,gr);for(let o=0,a=gr.length;o<a;o++){const l=gr[o];l.instanceId=r,l.object=this,e.push(l)}gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ka(new Float32Array(s*this.count),s,this.count,La,yn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _o=new I,pf=new I,mf=new Yt;class ui{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_o.subVectors(n,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mf.getNormalMatrix(t),s=this.coplanarPoint(_o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new qs,gf=new gt(.5,.5),xr=new I;class Hr{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],M=r[13],_=r[14],A=r[15];if(s[0].setComponents(h-o,d-c,p-g,A-y).normalize(),s[1].setComponents(h+o,d+c,p+g,A+y).normalize(),s[2].setComponents(h+a,d+u,p+x,A+M).normalize(),s[3].setComponents(h-a,d-u,p-x,A-M).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(h-l,d-f,p-m,A-_).normalize();else if(s[4].setComponents(h-l,d-f,p-m,A-_).normalize(),e===Sn)s[5].setComponents(h+l,d+f,p+m,A+_).normalize();else if(e===Nr)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){oi.center.set(0,0,0);const e=gf.distanceTo(t.center);return oi.radius=.7071067811865476+e,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $l extends Oe{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jl extends Oe{constructor(t,e,n=gi,s,r,o,a=en,l=en,h,c=Ds,u=1){if(c!==Ds&&c!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zl extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ti extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function y(){const _=new I,A=new I;let R=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const w=[],S=P/r,L=S*(e-t)+t;for(let O=0;O<=s;O++){const q=O/s,j=q*l+a,tt=Math.sin(j),Y=Math.cos(j);A.x=L*tt,A.y=-S*n+m,A.z=L*Y,u.push(A.x,A.y,A.z),_.set(tt,C,Y).normalize(),f.push(_.x,_.y,_.z),d.push(q,1-S),w.push(g++)}x.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const S=x[w][P],L=x[w+1][P],O=x[w+1][P+1],q=x[w][P+1];(t>0||w!==0)&&(c.push(S,L,q),R+=3),(e>0||w!==r-1)&&(c.push(L,O,q),R+=3)}h.addGroup(p,R,0),p+=R}function M(_){const A=g,R=new gt,C=new I;let P=0;const w=_===!0?t:e,S=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let O=0;O<=s;O++){const j=O/s*l+a,tt=Math.cos(j),Y=Math.sin(j);C.x=w*Y,C.y=m*S,C.z=w*tt,u.push(C.x,C.y,C.z),f.push(0,S,0),R.x=tt*.5+.5,R.y=Y*.5*S+.5,d.push(R.x,R.y),g++}for(let O=0;O<s;O++){const q=A+O,j=L+O;_===!0?c.push(j,j+1,q):c.push(j+1,j,q),P+=3}h.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class an extends ti{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new an(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ha extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new I,_=new I,A=new I;for(let R=0;R<e.length;R+=3)d(e[R+0],M),d(e[R+1],_),d(e[R+2],A),l(M,_,A,y)}function l(y,M,_,A){const R=A+1,C=[];for(let P=0;P<=R;P++){C[P]=[];const w=y.clone().lerp(_,P/R),S=M.clone().lerp(_,P/R),L=R-P;for(let O=0;O<=L;O++)O===0&&P===R?C[P][O]=w:C[P][O]=w.clone().lerp(S,O/L)}for(let P=0;P<R;P++)for(let w=0;w<2*(R-P)-1;w++){const S=Math.floor(w/2);w%2===0?(f(C[P][S+1]),f(C[P+1][S]),f(C[P][S])):(f(C[P][S+1]),f(C[P+1][S+1]),f(C[P+1][S]))}}function h(y){const M=new I;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function c(){const y=new I;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const _=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(_,1-A)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],_=o[y+2],A=o[y+4],R=Math.max(M,_,A),C=Math.min(M,_,A);R>.9&&C<.1&&(M<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,M){const _=y*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const y=new I,M=new I,_=new I,A=new I,R=new gt,C=new gt,P=new gt;for(let w=0,S=0;w<r.length;w+=9,S+=6){y.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),R.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),A.copy(y).add(M).add(_).divideScalar(3);const L=m(A);x(R,S+0,y,L),x(C,S+2,M,L),x(P,S+4,_,L)}}function x(y,M,_,A){A<0&&y.x===1&&(o[M]=y.x-1),_.x===0&&_.z===0&&(o[M]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.vertices,t.indices,t.radius,t.details)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],f=n[s+1]-c,d=(o-c)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new gt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new se;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),f<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Va extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=h-this.aY;l=f*c-d*u+this.aX,h=f*u+d*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xf extends Va{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ga(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let f=(o-r)/h-(a-r)/(h+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+u)+(l-a)/u;f*=c,d*=c,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const _r=new I,vo=new Ga,Mo=new Ga,yo=new Ga;class Wa extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(_r.subVectors(s[0],s[1]).add(s[0]),h=_r);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(_r.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(c),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),vo.initNonuniformCatmullRom(h.x,u.x,f.x,c.x,g,x,m),Mo.initNonuniformCatmullRom(h.y,u.y,f.y,c.y,g,x,m),yo.initNonuniformCatmullRom(h.z,u.z,f.z,c.z,g,x,m)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(h.x,u.x,f.x,c.x,this.tension),Mo.initCatmullRom(h.y,u.y,f.y,c.y,this.tension),yo.initCatmullRom(h.z,u.z,f.z,c.z,this.tension));return n.set(vo.calc(l),Mo.calc(l),yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function _f(i,t){const e=1-i;return e*e*t}function vf(i,t){return 2*(1-i)*i*t}function Mf(i,t){return i*i*t}function As(i,t,e,n){return _f(i,t)+vf(i,e)+Mf(i,n)}function yf(i,t){const e=1-i;return e*e*e*t}function Sf(i,t){const e=1-i;return 3*e*e*i*t}function bf(i,t){return 3*(1-i)*i*i*t}function Ef(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return yf(i,t)+Sf(i,e)+bf(i,n)+Ef(i,s)}class Kl extends En{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wf extends En{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y),Rs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jl extends En{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tf extends En{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ql extends En{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class th extends En{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eh extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Nc(a,l.x,h.x,c.x,u.x),Nc(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Fr=Object.freeze({__proto__:null,ArcCurve:xf,CatmullRomCurve3:Wa,CubicBezierCurve:Kl,CubicBezierCurve3:wf,EllipseCurve:Va,LineCurve:jl,LineCurve3:Tf,QuadraticBezierCurve:Ql,QuadraticBezierCurve3:th,SplineCurve:eh});class Af extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Fr[s.type]().fromJSON(s))}return this}}class zc extends Af{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jl(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ql(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Kl(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new eh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new Va(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cs extends zc{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new zc().fromJSON(s))}return this}}function Rf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=nh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=Df(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let c=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>c&&(c=d),g>u&&(u=g)}h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return zs(r,o,e,a,l,h,0),o}function nh(i,t,e,n,s){let r;if(s===Wf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Fc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Fc(o/n|0,i[o],i[o+1],r);return r&&ss(r,r.next)&&(Os(r),r=r.next),r}function _i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ss(e,e.next)||_e(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Of(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,h=i.next;if(r?Pf(i,n,s,r):Cf(i)){t.push(l.i,i.i,h.i),Os(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Lf(_i(i),t),zs(i,t,e,n,s,r,2)):o===2&&If(i,t,e,n,s,r):zs(_i(i),t,e,n,s,r,1);break}}}function Cf(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=Math.min(s,r,o),u=Math.min(a,l,h),f=Math.max(s,r,o),d=Math.max(a,l,h);let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=u&&g.y<=d&&Ss(s,a,r,l,o,h,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,u=r.y,f=o.y,d=Math.min(a,l,h),g=Math.min(c,u,f),x=Math.max(a,l,h),m=Math.max(c,u,f),p=Sa(d,g,t,e,n),y=Sa(x,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ss(a,c,l,u,h,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ss(a,c,l,u,h,f,_.x,_.y)&&_e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ss(a,c,l,u,h,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ss(a,c,l,u,h,f,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Lf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ss(n,s)&&sh(n,e,e.next,s)&&Fs(n,s)&&Fs(s,n)&&(t.push(n.i,e.i,s.i),Os(e),Os(e.next),e=i=s),e=e.next}while(e!==i);return _i(e)}function If(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hf(o,a)){let l=rh(o,a);o=_i(o,o.next),l=_i(l,l.next),zs(o,t,e,n,s,r,0),zs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Df(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=nh(i,a,l,n,!1);h===h.next&&(h.steiner=!0),s.push(kf(h))}s.sort(Uf);for(let r=0;r<s.length;r++)e=Nf(s[r],e);return e}function Uf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Nf(i,t){const e=zf(i,t);if(!e)return t;const n=rh(e,i);return _i(n,n.next),_i(e,e.next)}function zf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ss(i,e))return e;do{if(ss(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let c=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ih(s<h?n:r,s,l,h,s<h?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Fs(e,i)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&Ff(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function Ff(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Of(i,t,e,n){let s=i;do s.z===0&&(s.z=Sa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bf(s)}function Bf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Sa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ih(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ss(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&ih(i,t,e,n,s,r,o,a)}function Hf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vf(i,t)&&(Fs(i,t)&&Fs(t,i)&&Gf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||ss(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ss(i,t){return i.x===t.x&&i.y===t.y}function sh(i,t,e,n){const s=Mr(_e(i,t,e)),r=Mr(_e(i,t,n)),o=Mr(_e(e,n,i)),a=Mr(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&vr(i,e,t)||r===0&&vr(i,n,t)||o===0&&vr(e,i,n)||a===0&&vr(e,t,n))}function vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mr(i){return i>0?1:i<0?-1:0}function Vf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fs(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Gf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rh(i,t){const e=ba(i.i,i.x,i.y),n=ba(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fc(i,t,e,n){const s=ba(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ba(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Xf{static triangulate(t,e,n=2){return Rf(t,e,n)}}class Un{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Un.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Oc(t),Bc(n,t);let o=t.length;e.forEach(Oc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Bc(n,e[l]);const a=Xf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Oc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xa extends ye{constructor(t=new cs([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:qf;let M,_=!1,A,R,C,P;p&&(M=p.getSpacedPoints(c),_=!0,f=!1,A=p.computeFrenetFrames(c,!1),R=new I,C=new I,P=new I),f||(m=0,d=0,g=0,x=0);const w=a.extractPoints(h);let S=w.shape;const L=w.holes;if(!Un.isClockWise(S)){S=S.reverse();for(let B=0,k=L.length;B<k;B++){const z=L[B];Un.isClockWise(z)&&(L[B]=z.reverse())}}function q(B){const z=10000000000000001e-36;let U=B[0];for(let Z=1;Z<=B.length;Z++){const H=Z%B.length,nt=B[H],Tt=nt.x-U.x,ht=nt.y-U.y,b=Tt*Tt+ht*ht,v=Math.max(Math.abs(nt.x),Math.abs(nt.y),Math.abs(U.x),Math.abs(U.y)),N=z*v*v;if(b<=N){B.splice(H,1),Z--;continue}U=nt}}q(S),L.forEach(q);const j=L.length,tt=S;for(let B=0;B<j;B++){const k=L[B];S=S.concat(k)}function Y(B,k,z){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(k,z)}const rt=S.length;function X(B,k,z){let U,Z,H;const nt=B.x-k.x,Tt=B.y-k.y,ht=z.x-B.x,b=z.y-B.y,v=nt*nt+Tt*Tt,N=nt*b-Tt*ht;if(Math.abs(N)>Number.EPSILON){const W=Math.sqrt(v),ot=Math.sqrt(ht*ht+b*b),Q=k.x-Tt/W,Rt=k.y+nt/W,mt=z.x-b/ot,Lt=z.y+ht/ot,At=((mt-Q)*b-(Lt-Rt)*ht)/(nt*b-Tt*ht);U=Q+nt*At-B.x,Z=Rt+Tt*At-B.y;const dt=U*U+Z*Z;if(dt<=2)return new gt(U,Z);H=Math.sqrt(dt/2)}else{let W=!1;nt>Number.EPSILON?ht>Number.EPSILON&&(W=!0):nt<-Number.EPSILON?ht<-Number.EPSILON&&(W=!0):Math.sign(Tt)===Math.sign(b)&&(W=!0),W?(U=-Tt,Z=nt,H=Math.sqrt(v)):(U=nt,Z=Tt,H=Math.sqrt(v/2))}return new gt(U/H,Z/H)}const ft=[];for(let B=0,k=tt.length,z=k-1,U=B+1;B<k;B++,z++,U++)z===k&&(z=0),U===k&&(U=0),ft[B]=X(tt[B],tt[z],tt[U]);const lt=[];let Et,kt=ft.concat();for(let B=0,k=j;B<k;B++){const z=L[B];Et=[];for(let U=0,Z=z.length,H=Z-1,nt=U+1;U<Z;U++,H++,nt++)H===Z&&(H=0),nt===Z&&(nt=0),Et[U]=X(z[U],z[H],z[nt]);lt.push(Et),kt=kt.concat(Et)}let Ot;if(m===0)Ot=Un.triangulateShape(tt,L);else{const B=[],k=[];for(let z=0;z<m;z++){const U=z/m,Z=d*Math.cos(U*Math.PI/2),H=g*Math.sin(U*Math.PI/2)+x;for(let nt=0,Tt=tt.length;nt<Tt;nt++){const ht=Y(tt[nt],ft[nt],H);ut(ht.x,ht.y,-Z),U===0&&B.push(ht)}for(let nt=0,Tt=j;nt<Tt;nt++){const ht=L[nt];Et=lt[nt];const b=[];for(let v=0,N=ht.length;v<N;v++){const W=Y(ht[v],Et[v],H);ut(W.x,W.y,-Z),U===0&&b.push(W)}U===0&&k.push(b)}}Ot=Un.triangulateShape(B,k)}const te=Ot.length,Zt=g+x;for(let B=0;B<rt;B++){const k=f?Y(S[B],kt[B],Zt):S[B];_?(C.copy(A.normals[0]).multiplyScalar(k.x),R.copy(A.binormals[0]).multiplyScalar(k.y),P.copy(M[0]).add(C).add(R),ut(P.x,P.y,P.z)):ut(k.x,k.y,0)}for(let B=1;B<=c;B++)for(let k=0;k<rt;k++){const z=f?Y(S[k],kt[k],Zt):S[k];_?(C.copy(A.normals[B]).multiplyScalar(z.x),R.copy(A.binormals[B]).multiplyScalar(z.y),P.copy(M[B]).add(C).add(R),ut(P.x,P.y,P.z)):ut(z.x,z.y,u/c*B)}for(let B=m-1;B>=0;B--){const k=B/m,z=d*Math.cos(k*Math.PI/2),U=g*Math.sin(k*Math.PI/2)+x;for(let Z=0,H=tt.length;Z<H;Z++){const nt=Y(tt[Z],ft[Z],U);ut(nt.x,nt.y,u+z)}for(let Z=0,H=L.length;Z<H;Z++){const nt=L[Z];Et=lt[Z];for(let Tt=0,ht=nt.length;Tt<ht;Tt++){const b=Y(nt[Tt],Et[Tt],U);_?ut(b.x,b.y+M[c-1].y,M[c-1].x+z):ut(b.x,b.y,u+z)}}}it(),at();function it(){const B=s.length/3;if(f){let k=0,z=rt*k;for(let U=0;U<te;U++){const Z=Ot[U];et(Z[2]+z,Z[1]+z,Z[0]+z)}k=c+m*2,z=rt*k;for(let U=0;U<te;U++){const Z=Ot[U];et(Z[0]+z,Z[1]+z,Z[2]+z)}}else{for(let k=0;k<te;k++){const z=Ot[k];et(z[2],z[1],z[0])}for(let k=0;k<te;k++){const z=Ot[k];et(z[0]+rt*c,z[1]+rt*c,z[2]+rt*c)}}n.addGroup(B,s.length/3-B,0)}function at(){const B=s.length/3;let k=0;$(tt,k),k+=tt.length;for(let z=0,U=L.length;z<U;z++){const Z=L[z];$(Z,k),k+=Z.length}n.addGroup(B,s.length/3-B,1)}function $(B,k){let z=B.length;for(;--z>=0;){const U=z;let Z=z-1;Z<0&&(Z=B.length-1);for(let H=0,nt=c+m*2;H<nt;H++){const Tt=rt*H,ht=rt*(H+1),b=k+U+Tt,v=k+Z+Tt,N=k+Z+ht,W=k+U+ht;pt(b,v,N,W)}}}function ut(B,k,z){l.push(B),l.push(k),l.push(z)}function et(B,k,z){D(B),D(k),D(z);const U=s.length/3,Z=y.generateTopUV(n,s,U-3,U-2,U-1);E(Z[0]),E(Z[1]),E(Z[2])}function pt(B,k,z,U){D(B),D(k),D(U),D(k),D(z),D(U);const Z=s.length/3,H=y.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);E(H[0]),E(H[1]),E(H[3]),E(H[1]),E(H[2]),E(H[3])}function D(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function E(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fr[s.type]().fromJSON(s)),new Xa(n,t.options)}}const qf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],c=t[s*3+1];return[new gt(r,o),new gt(a,l),new gt(h,c)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new gt(o,1-l),new gt(h,1-u),new gt(f,1-g),new gt(x,1-p)]:[new gt(a,1-l),new gt(c,1-u),new gt(d,1-g),new gt(m,1-p)]}};function Yf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Bs extends Ha{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bs(t.radius,t.detail)}}class qa extends ye{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],c=1/e,u=new I,f=new gt,d=new I,g=new I,x=new I;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){const M=n+y*c*s,_=Math.sin(M),A=Math.cos(M);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*_,u.y=t[R].y,u.z=t[R].x*A,o.push(u.x,u.y,u.z),f.x=y/e,f.y=R/(t.length-1),a.push(f.x,f.y);const C=l[3*R+0]*_,P=l[3*R+1],w=l[3*R+0]*A;h.push(C,P,w)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const _=M+y*t.length,A=_,R=_+t.length,C=_+t.length+1,P=_+1;r.push(A,R,P),r.push(C,P,R)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.points,t.segments,t.phiStart,t.phiLength)}}class ls extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<c;p++){const y=p*f-o;for(let M=0;M<h;M++){const _=M*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+h*p,_=y+h*(p+1),A=y+1+h*(p+1),R=y+1+h*p;d.push(M,_,R),d.push(_,A,R)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.widthSegments,t.heightSegments)}}class $s extends ye{constructor(t=new cs([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function h(c){const u=s.length/3,f=c.extractPoints(e);let d=f.shape;const g=f.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Un.isClockWise(y)===!0&&(g[m]=y.reverse())}const x=Un.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){const y=x[m],M=y[0]+u,_=y[1]+u,A=y[2]+u;n.push(M,_,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $f(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new $s(n,t.curveSegments)}}function $f(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class gn extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(R+_,1-M),y.push(h++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=c[p][y+1],_=c[p][y],A=c[p+1][y],R=c[p+1][y+1];(p!==0||o>0)&&d.push(M,_,R),(p!==n-1||l<Math.PI)&&d.push(_,A,R)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hs extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(u,c).normalize(),l.push(f.x,f.y,f.z),h.push(g/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vr extends ye{constructor(t=new th(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,h=new gt;let c=new I;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),p()}function m(M){c=t.getPointAt(M/e,c);const _=o.normals[M],A=o.binormals[M];for(let R=0;R<=s;R++){const C=R/s*Math.PI*2,P=Math.sin(C),w=-Math.cos(C);l.x=w*_.x+P*A.x,l.y=w*_.y+P*A.y,l.z=w*_.z+P*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const A=(s+1)*(M-1)+(_-1),R=(s+1)*M+(_-1),C=(s+1)*M+_,P=(s+1)*(M-1)+_;g.push(A,R,P),g.push(R,C,P)}}function y(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)h.x=M/e,h.y=_/s,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Vr(new Fr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Gr extends as{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jf extends as{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zf extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kf extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Js extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class jf extends Js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const So=new se,kc=new I,Hc=new I;class Ya{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qf extends Ya{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ns*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class td extends Js{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Vc=new se,vs=new I,bo=new I;class ed extends Ya{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),bo.copy(n.position),bo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bo),n.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),Vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc,n.coordinateSystem,n.reversedDepth)}}class Gc extends Js{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ed}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class oh extends Oa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class nd extends Ya{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class id extends Js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new nd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sd extends Js{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rd extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Wc=new gt;class Xc{constructor(t=new gt(1/0,1/0),e=new gt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function qc(i,t,e,n){const s=od(n);switch(e){case zl:return i*t;case La:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Fl:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case $o:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ma:case ga:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _a:case va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ma:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function od(i){switch(i){case bn:case Il:return{byteLength:1,components:1};case Ls:case Dl:case Ws:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case gi:case Ra:case yn:return{byteLength:4,components:1};case Ul:case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ah(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ad(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,h,c),a.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,c);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ld=`#ifdef USE_ALPHAHASH
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
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
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
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gd=`#ifdef USE_BATCHING
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
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Sd=`#ifdef USE_BUMPMAP
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ld=`#define PI 3.141592653589793
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
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
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
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,op=`struct PhysicalMaterial {
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
}`,ap=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Dm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:cd,alphahash_pars_fragment:ld,alphamap_fragment:hd,alphamap_pars_fragment:ud,alphatest_fragment:fd,alphatest_pars_fragment:dd,aomap_fragment:pd,aomap_pars_fragment:md,batching_pars_vertex:gd,batching_vertex:xd,begin_vertex:_d,beginnormal_vertex:vd,bsdfs:Md,iridescence_fragment:yd,bumpmap_pars_fragment:Sd,clipping_planes_fragment:bd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Td,color_fragment:Ad,color_pars_fragment:Rd,color_pars_vertex:Cd,color_vertex:Pd,common:Ld,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Ud,displacementmap_vertex:Nd,emissivemap_fragment:zd,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:kd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:Vd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:tp,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Yd,fog_pars_fragment:$d,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:jd,lights_pars_begin:Qd,lights_toon_fragment:ep,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:op,lights_fragment_begin:ap,lights_fragment_maps:cp,lights_fragment_end:lp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:dp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:xp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:vp,morphinstance_vertex:Mp,morphcolor_vertex:yp,morphnormal_vertex:Sp,morphtarget_pars_vertex:bp,morphtarget_vertex:Ep,normal_fragment_begin:wp,normal_fragment_maps:Tp,normal_pars_fragment:Ap,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Dp,iridescence_pars_fragment:Up,opaque_fragment:Np,packing:zp,premultiplied_alpha_fragment:Fp,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:kp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:Yp,skinning_pars_vertex:$p,skinning_vertex:Jp,skinnormal_vertex:Zp,specularmap_fragment:Kp,specularmap_pars_fragment:jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:tm,transmission_fragment:em,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:om,background_vert:am,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:hm,cube_vert:um,cube_frag:fm,depth_vert:dm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:xm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:Mm,meshbasic_vert:ym,meshbasic_frag:Sm,meshlambert_vert:bm,meshlambert_frag:Em,meshmatcap_vert:wm,meshmatcap_frag:Tm,meshnormal_vert:Am,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Lm,meshphysical_frag:Im,meshtoon_vert:Dm,meshtoon_frag:Um,points_vert:Nm,points_frag:zm,shadow_vert:Fm,shadow_frag:Om,sprite_vert:Bm,sprite_frag:km},yt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Mn={basic:{uniforms:He([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:He([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:He([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:He([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:He([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:He([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:He([yt.points,yt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:He([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:He([yt.common,yt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:He([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:He([yt.sprite,yt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:He([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:He([yt.lights,yt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Mn.physical={uniforms:He([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const yr={r:0,b:0,g:0},ai=new mn,Hm=new se;function Vm(i,t,e,n,s,r,o){const a=new Xt(0);let l=r===!0?0:1,h,c,u=null,f=0,d=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const A=g(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===kr)?(c===void 0&&(c=new qe(new yi(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:is(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ai.copy(_.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(ai)),c.material.toneMapped=oe.getTransfer(A.colorSpace)!==fe,(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new qe(new ls(2,2),new Qn({name:"BackgroundMaterial",uniforms:is(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=oe.getTransfer(A.colorSpace)!==fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,_){M.getRGB(yr,ql(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,_,o)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m,dispose:y}}function Gm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,O,q,j){let tt=!1;const Y=u(q,O,L);r!==Y&&(r=Y,h(r.object)),tt=d(S,q,O,j),tt&&g(S,q,O,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,_(S,L,O,q),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function c(S){return i.deleteVertexArray(S)}function u(S,L,O){const q=O.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let tt=j[L.id];tt===void 0&&(tt={},j[L.id]=tt);let Y=tt[q];return Y===void 0&&(Y=f(l()),tt[q]=Y),Y}function f(S){const L=[],O=[],q=[];for(let j=0;j<e;j++)L[j]=0,O[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:q,object:S,attributes:{},index:null}}function d(S,L,O,q){const j=r.attributes,tt=L.attributes;let Y=0;const rt=O.getAttributes();for(const X in rt)if(rt[X].location>=0){const lt=j[X];let Et=tt[X];if(Et===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),lt===void 0||lt.attribute!==Et||Et&&lt.data!==Et.data)return!0;Y++}return r.attributesNum!==Y||r.index!==q}function g(S,L,O,q){const j={},tt=L.attributes;let Y=0;const rt=O.getAttributes();for(const X in rt)if(rt[X].location>=0){let lt=tt[X];lt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor));const Et={};Et.attribute=lt,lt&&lt.data&&(Et.data=lt.data),j[X]=Et,Y++}r.attributes=j,r.attributesNum=Y,r.index=q}function x(){const S=r.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const O=r.newAttributes,q=r.enabledAttributes,j=r.attributeDivisors;O[S]=1,q[S]===0&&(i.enableVertexAttribArray(S),q[S]=1),j[S]!==L&&(i.vertexAttribDivisor(S,L),j[S]=L)}function y(){const S=r.newAttributes,L=r.enabledAttributes;for(let O=0,q=L.length;O<q;O++)L[O]!==S[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function M(S,L,O,q,j,tt,Y){Y===!0?i.vertexAttribIPointer(S,L,O,j,tt):i.vertexAttribPointer(S,L,O,q,j,tt)}function _(S,L,O,q){x();const j=q.attributes,tt=O.getAttributes(),Y=L.defaultAttributeValues;for(const rt in tt){const X=tt[rt];if(X.location>=0){let ft=j[rt];if(ft===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),ft!==void 0){const lt=ft.normalized,Et=ft.itemSize,kt=t.get(ft);if(kt===void 0)continue;const Ot=kt.buffer,te=kt.type,Zt=kt.bytesPerElement,it=te===i.INT||te===i.UNSIGNED_INT||ft.gpuType===Ra;if(ft.isInterleavedBufferAttribute){const at=ft.data,$=at.stride,ut=ft.offset;if(at.isInstancedInterleavedBuffer){for(let et=0;et<X.locationSize;et++)p(X.location+et,at.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let et=0;et<X.locationSize;et++)m(X.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let et=0;et<X.locationSize;et++)M(X.location+et,Et/X.locationSize,te,lt,$*Zt,(ut+Et/X.locationSize*et)*Zt,it)}else{if(ft.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)p(X.location+at,ft.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let at=0;at<X.locationSize;at++)m(X.location+at);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let at=0;at<X.locationSize;at++)M(X.location+at,Et/X.locationSize,te,lt,Et*Zt,Et/X.locationSize*at*Zt,it)}}else if(Y!==void 0){const lt=Y[rt];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(X.location,lt);break;case 3:i.vertexAttrib3fv(X.location,lt);break;case 4:i.vertexAttrib4fv(X.location,lt);break;default:i.vertexAttrib1fv(X.location,lt)}}}}y()}function A(){P();for(const S in n){const L=n[S];for(const O in L){const q=L[O];for(const j in q)c(q[j].object),delete q[j];delete L[O]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const O in L){const q=L[O];for(const j in q)c(q[j].object),delete q[j];delete L[O]}delete n[S.id]}function C(S){for(const L in n){const O=n[L];if(O[S.id]===void 0)continue;const q=O[S.id];for(const j in q)c(q[j].object),delete q[j];delete O[S.id]}}function P(){w(),o=!0,r!==s&&(r=s,h(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Wm(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let d=0;for(let g=0;g<u;g++)d+=c[g];e.update(d,n,1)}function l(h,c,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)o(h[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,c,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:R}}function qm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ui,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{const y=r?0:n,M=y*4;let _=p.clippingState||null;l.value=_,_=c(g,f,M,d);for(let A=0;A!==M;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Ym(i){let t=new WeakMap;function e(o,a){return a===Xo?o.mapping=Qi:a===qo&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xo||a===qo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new lf(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Gi=4,Yc=[.125,.215,.35,.446,.526,.582],pi=20,Eo=new oh,$c=new Xt;let wo=null,To=0,Ao=0,Ro=!1;const fi=(1+Math.sqrt(5))/2,Oi=1/fi,Jc=[new I(-fi,Oi,0),new I(fi,Oi,0),new I(-Oi,0,fi),new I(Oi,0,fi),new I(0,fi,-Oi),new I(0,fi,Oi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],$m=new I;class Zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=$m}=r;wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,To,Ao),this._renderer.xr.enabled=Ro,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ws,format:tn,colorSpace:es,depthBuffer:!1},s=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Zm(r,t,e)}return s}_compileMaterial(t){const e=new qe(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,s,r){const l=new We(90,1,e,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor($c),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new Ys({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new qe(new yi,x);let p=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,p=!0):(x.color.copy($c),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[M],r.y,r.z)):_===1?(l.up.set(0,0,h[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[M],r.z)):(l.up.set(0,h[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[M]));const A=this._cubeSize;Sr(s,_*A,M>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jc[(s-r-1)%Jc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new qe(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*pi-1),x=r/g,m=isFinite(r)?1+Math.floor(c*x):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let y=0;for(let C=0;C<pi;++C){const P=C/x,w=Math.exp(-P*P/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const _=this._sizeLods[s],A=3*_*(s>M-Gi?s-M+Gi:0),R=4*(this._cubeSize-_);Sr(e,A,R,3*_,2*_),l.setRenderTarget(e),l.render(u,Eo)}}function Jm(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+Yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gi?l=Yc[o-i+Gi-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),M=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,P=R>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(w,x*g*R),M.set(f,m*g*R);const S=[R,R,R,R,R,R];_.set(S,p*g*R)}const A=new ye;A.setAttribute("position",new Ue(y,x)),A.setAttribute("uv",new Ue(M,m)),A.setAttribute("faceIndex",new Ue(_,p)),t.push(A),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zm(i,t,e){const n=new Float32Array(pi),s=new I(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function jc(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Qc(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function Km(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Xo||l===qo,c=l===Qi||l===ts;if(h||c){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Zc(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return h&&d&&d.height>0||c&&d&&s(d)?(e===null&&(e=new Zc(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function h(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let M=0,_=y.length;M<_;M+=3){const A=y[M+0],R=y[M+1],C=y[M+2];f.push(A,R,R,C,C,A)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,_=y.length/3-1;M<_;M+=3){const A=M+0,R=M+1,C=M+2;f.push(A,R,R,C,C,A)}}else return;const m=new(kl(f)?Xl:Wl)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function t0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function h(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function c(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function e0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function n0(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*A*4*u),C=new Hl(R,_,A,u);C.type=yn,C.needsUpdate=!0;const P=M*4;for(let S=0;S<u;S++){const L=m[S],O=p[S],q=y[S],j=_*A*4*S;for(let tt=0;tt<L.count;tt++){const Y=tt*P;d===!0&&(s.fromBufferAttribute(L,tt),R[j+Y+0]=s.x,R[j+Y+1]=s.y,R[j+Y+2]=s.z,R[j+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,tt),R[j+Y+4]=s.x,R[j+Y+5]=s.y,R[j+Y+6]=s.z,R[j+Y+7]=0),x===!0&&(s.fromBufferAttribute(q,tt),R[j+Y+8]=s.x,R[j+Y+9]=s.y,R[j+Y+10]=s.z,R[j+Y+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new gt(_,A)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<h.length;x++)d+=h[x];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function i0(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const ch=new Oe,tl=new Jl(1,1),lh=new Hl,hh=new Wu,uh=new Yl,el=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=el[s];if(r===void 0&&(r=new Float32Array(s),el[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wr(i,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;rl.set(n),i.uniformMatrix2fv(this.addr,!1,rl),Ce(e,n)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),Ce(e,n)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),Ce(e,n)}}function u0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function m0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=Bl,r=tl):r=ch,e.setTexture2D(t||r,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hh,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uh,s)}function S0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lh,s)}function b0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return c0;case 35675:return l0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return f0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return x0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return S0}}function E0(i,t){i.uniform1fv(this.addr,t)}function w0(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function T0(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function A0(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function R0(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C0(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P0(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L0(i,t){i.uniform1iv(this.addr,t)}function I0(i,t){i.uniform2iv(this.addr,t)}function D0(i,t){i.uniform3iv(this.addr,t)}function U0(i,t){i.uniform4iv(this.addr,t)}function N0(i,t){i.uniform1uiv(this.addr,t)}function z0(i,t){i.uniform2uiv(this.addr,t)}function F0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function B0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ch,r[o])}function k0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hh,r[o])}function H0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||uh,r[o])}function V0(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||lh,r[o])}function G0(i){switch(i){case 5126:return E0;case 35664:return w0;case 35665:return T0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return I0;case 35668:case 35672:return D0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return z0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}}class X0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G0(e.type)}}class q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function ol(i,t){i.seq.push(t),i.map[t.id]=t}function Y0(i,t,e){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),o=Co.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){ol(e,h===void 0?new W0(a,i,t):new X0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new q0(a),ol(e,u)),e=u}}}class Pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Y0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function al(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $0=37297;let J0=0;function Z0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const cl=new Yt;function K0(i){oe._getMatrix(cl,oe.workingColorSpace,i);const t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Z0(i.getShaderSource(t),a)}else return r}function j0(i,t){const e=K0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q0(i,t){let e;switch(t){case su:e="Linear";break;case ru:e="Reinhard";break;case ou:e="Cineon";break;case Pl:e="ACESFilmic";break;case cu:e="AgX";break;case lu:e="Neutral";break;case au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new I;function tg(){oe.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function ng(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ig(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(i){return i.replace(sg,og)}const rg=new Map;function og(i,t){let e=Kt[t];if(e===void 0){const n=rg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(ag,cg)}function cg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function hg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ug(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function fg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Br:t="ENVMAP_BLENDING_MULTIPLY";break;case nu:t="ENVMAP_BLENDING_MIX";break;case iu:t="ENVMAP_BLENDING_ADD";break}return t}function dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lg(e),h=hg(e),c=ug(e),u=fg(e),f=dg(e),d=eg(e),g=ng(r),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,j0("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=Ea(o),o=hl(o,e),o=ul(o,e),a=Ea(a),a=hl(a,e),a=ul(a,e),o=fl(o),a=fl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,_=y+p+a,A=al(s,s.VERTEX_SHADER,M),R=al(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(A)||"",j=s.getShaderInfoLog(R)||"",tt=O.trim(),Y=q.trim(),rt=j.trim();let X=!0,ft=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,R);else{const lt=ll(s,A,"vertex"),Et=ll(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+tt+`
`+lt+`
`+Et)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(Y===""||rt==="")&&(ft=!1);ft&&(L.diagnostics={runnable:X,programLog:tt,vertexShader:{log:Y,prefix:m},fragmentShader:{log:rt,prefix:p}})}s.deleteShader(A),s.deleteShader(R),P=new Pr(s,x),w=ig(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,$0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xg(t),e.set(t,n)),n}}class xg{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}}function _g(i,t,e,n,s,r,o){const a=new Vl,l=new gg,h=new Set,c=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return h.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,O,q){const j=O.fog,tt=q.geometry,Y=w.isMeshStandardMaterial?O.environment:null,rt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),X=rt&&rt.mapping===kr?rt.image.height:null,ft=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const lt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Et=lt!==void 0?lt.length:0;let kt=0;tt.morphAttributes.position!==void 0&&(kt=1),tt.morphAttributes.normal!==void 0&&(kt=2),tt.morphAttributes.color!==void 0&&(kt=3);let Ot,te,Zt,it;if(ft){const ae=Mn[ft];Ot=ae.vertexShader,te=ae.fragmentShader}else Ot=w.vertexShader,te=w.fragmentShader,l.update(w),Zt=l.getVertexShaderID(w),it=l.getFragmentShaderID(w);const at=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),ut=q.isInstancedMesh===!0,et=q.isBatchedMesh===!0,pt=!!w.map,D=!!w.matcap,E=!!rt,B=!!w.aoMap,k=!!w.lightMap,z=!!w.bumpMap,U=!!w.normalMap,Z=!!w.displacementMap,H=!!w.emissiveMap,nt=!!w.metalnessMap,Tt=!!w.roughnessMap,ht=w.anisotropy>0,b=w.clearcoat>0,v=w.dispersion>0,N=w.iridescence>0,W=w.sheen>0,ot=w.transmission>0,Q=ht&&!!w.anisotropyMap,Rt=b&&!!w.clearcoatMap,mt=b&&!!w.clearcoatNormalMap,Lt=b&&!!w.clearcoatRoughnessMap,At=N&&!!w.iridescenceMap,dt=N&&!!w.iridescenceThicknessMap,wt=W&&!!w.sheenColorMap,Vt=W&&!!w.sheenRoughnessMap,zt=!!w.specularMap,St=!!w.specularColorMap,Jt=!!w.specularIntensityMap,F=ot&&!!w.transmissionMap,vt=ot&&!!w.thicknessMap,Mt=!!w.gradientMap,Dt=!!w.alphaMap,xt=w.alphaTest>0,ct=!!w.alphaHash,Nt=!!w.extensions;let qt=Zn;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(qt=i.toneMapping);const pe={shaderID:ft,shaderType:w.type,shaderName:w.name,vertexShader:Ot,fragmentShader:te,defines:w.defines,customVertexShaderID:Zt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:et,batchingColor:et&&q._colorsTexture!==null,instancing:ut,instancingColor:ut&&q.instanceColor!==null,instancingMorph:ut&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:es,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:D,envMap:E,envMapMode:E&&rt.mapping,envMapCubeUVHeight:X,aoMap:B,lightMap:k,bumpMap:z,normalMap:U,displacementMap:f&&Z,emissiveMap:H,normalMapObjectSpace:U&&w.normalMapType===du,normalMapTangentSpace:U&&w.normalMapType===Na,metalnessMap:nt,roughnessMap:Tt,anisotropy:ht,anisotropyMap:Q,clearcoat:b,clearcoatMap:Rt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Lt,dispersion:v,iridescence:N,iridescenceMap:At,iridescenceThicknessMap:dt,sheen:W,sheenColorMap:wt,sheenRoughnessMap:Vt,specularMap:zt,specularColorMap:St,specularIntensityMap:Jt,transmission:ot,transmissionMap:F,thicknessMap:vt,gradientMap:Mt,opaque:w.transparent===!1&&w.blending===$i&&w.alphaToCoverage===!1,alphaMap:Dt,alphaTest:xt,alphaHash:ct,combine:w.combine,mapUv:pt&&x(w.map.channel),aoMapUv:B&&x(w.aoMap.channel),lightMapUv:k&&x(w.lightMap.channel),bumpMapUv:z&&x(w.bumpMap.channel),normalMapUv:U&&x(w.normalMap.channel),displacementMapUv:Z&&x(w.displacementMap.channel),emissiveMapUv:H&&x(w.emissiveMap.channel),metalnessMapUv:nt&&x(w.metalnessMap.channel),roughnessMapUv:Tt&&x(w.roughnessMap.channel),anisotropyMapUv:Q&&x(w.anisotropyMap.channel),clearcoatMapUv:Rt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:mt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&x(w.sheenRoughnessMap.channel),specularMapUv:zt&&x(w.specularMap.channel),specularColorMapUv:St&&x(w.specularColorMap.channel),specularIntensityMapUv:Jt&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:vt&&x(w.thicknessMap.channel),alphaMapUv:Dt&&x(w.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(U||ht),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!tt.attributes.uv&&(pt||Dt),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:$,skinning:q.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&oe.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:H&&w.emissiveMap.isVideoTexture===!0&&oe.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ve,flipSided:w.side===Ye,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return pe.vertexUv1s=h.has(1),pe.vertexUv2s=h.has(2),pe.vertexUv3s=h.has(3),h.clear(),pe}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(S,w),M(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const S=g[w.type];let L;if(S){const O=Mn[S];L=rf.clone(O.uniforms)}else L=w.uniforms;return L}function A(w,S){let L;for(let O=0,q=c.length;O<q;O++){const j=c[O];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new pg(i,S,w,r),c.push(L)),L}function R(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:P}}function vg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ml(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||Mg),n.length>1&&n.sort(f||pl),s.length>1&&s.sort(f||pl)}function c(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function yg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ml,i.set(n,[o])):s>=r.length?(o=new ml,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Eg=0;function wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tg(i){const t=new Sg,e=bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,r=new se,o=new se;function a(h){let c=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,M=0,_=0,A=0,R=0,C=0;h.sort(wg);for(let w=0,S=h.length;w<S;w++){const L=h[w],O=L.color,q=L.intensity,j=L.distance,tt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=O.r*q,u+=O.g*q,f+=O.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);C++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const rt=L.shadow,X=e.get(L);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=tt,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=Y,d++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(q),Y.distance=j,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[x]=Y;const rt=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,rt.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=rt.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=tt,_++}x++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(O).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const rt=L.shadow,X=e.get(L);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,X.shadowCameraNear=rt.camera.near,X.shadowCameraFar=rt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=C,n.version=Eg++)}function l(h,c){let u=0,f=0,d=0,g=0,x=0;const m=c.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const M=h[p];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function gl(i){const t=new Tg(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ag(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gl(i),t.set(s,[a])):r>=o.length?(a=new gl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new Hr;const s=new gt,r=new gt,o=new ce,a=new Zf({depthPacking:fu}),l=new Kf,h={},c=e.maxTextureSize,u={[jn]:Ye,[Ye]:jn,[Ve]:Ve},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Rg,fragmentShader:Cg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let p=this.type;this.render=function(R,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Jn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=p!==In&&this.type===In,j=p===In&&this.type!==In;for(let tt=0,Y=R.length;tt<Y;tt++){const rt=R[tt],X=rt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ft=X.getFrameExtents();if(s.multiply(ft),r.copy(X.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ft.x),s.x=r.x*ft.x,X.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ft.y),s.y=r.y*ft.y,X.mapSize.y=r.y)),X.map===null||q===!0||j===!0){const Et=this.type!==In?{minFilter:en,magFilter:en}:{};X.map!==null&&X.map.dispose(),X.map=new xi(s.x,s.y,Et),X.map.texture.name=rt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const lt=X.getViewportCount();for(let Et=0;Et<lt;Et++){const kt=X.getViewport(Et);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),O.viewport(o),X.updateMatrices(rt,Et),n=X.getFrustum(),_(C,P,X.camera,rt,this.type)}X.isPointLightShadow!==!0&&this.type===In&&y(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,L)};function y(R,C){const P=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,P,d,x,null)}function M(R,C,P,w){let S=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=S.uuid,q=C.uuid;let j=h[O];j===void 0&&(j={},h[O]=j);let tt=j[q];tt===void 0&&(tt=S.clone(),j[q]=tt,C.addEventListener("dispose",A)),S=tt}if(S.visible=C.visible,S.wireframe=C.wireframe,w===In?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=P}return S}function _(R,C,P,w,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===In)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const q=t.update(R),j=R.material;if(Array.isArray(j)){const tt=q.groups;for(let Y=0,rt=tt.length;Y<rt;Y++){const X=tt[Y],ft=j[X.materialIndex];if(ft&&ft.visible){const lt=M(R,ft,w,S);R.onBeforeShadow(i,R,C,P,q,lt,X),i.renderBufferDirect(P,null,q,lt,R,X),R.onAfterShadow(i,R,C,P,q,lt,X)}}}else if(j.visible){const tt=M(R,j,w,S);R.onBeforeShadow(i,R,C,P,q,tt,null),i.renderBufferDirect(P,null,q,tt,R,null),R.onAfterShadow(i,R,C,P,q,tt,null)}}const O=R.children;for(let q=0,j=O.length;q<j;q++)_(O[q],C,P,w,S)}function A(R){R.target.removeEventListener("dispose",A);for(const P in h){const w=h[P],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Lg={[Oo]:Bo,[ko]:Go,[Ho]:Wo,[ji]:Vo,[Bo]:Oo,[Go]:ko,[Wo]:Ho,[Vo]:ji};function Ig(i,t){function e(){let F=!1;const vt=new ce;let Mt=null;const Dt=new ce(0,0,0,0);return{setMask:function(xt){Mt!==xt&&!F&&(i.colorMask(xt,xt,xt,xt),Mt=xt)},setLocked:function(xt){F=xt},setClear:function(xt,ct,Nt,qt,pe){pe===!0&&(xt*=qt,ct*=qt,Nt*=qt),vt.set(xt,ct,Nt,qt),Dt.equals(vt)===!1&&(i.clearColor(xt,ct,Nt,qt),Dt.copy(vt))},reset:function(){F=!1,Mt=null,Dt.set(-1,0,0,0)}}}function n(){let F=!1,vt=!1,Mt=null,Dt=null,xt=null;return{setReversed:function(ct){if(vt!==ct){const Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),vt=ct;const qt=xt;xt=null,this.setClear(qt)}},getReversed:function(){return vt},setTest:function(ct){ct?at(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(ct){Mt!==ct&&!F&&(i.depthMask(ct),Mt=ct)},setFunc:function(ct){if(vt&&(ct=Lg[ct]),Dt!==ct){switch(ct){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=ct}},setLocked:function(ct){F=ct},setClear:function(ct){xt!==ct&&(vt&&(ct=1-ct),i.clearDepth(ct),xt=ct)},reset:function(){F=!1,Mt=null,Dt=null,xt=null,vt=!1}}}function s(){let F=!1,vt=null,Mt=null,Dt=null,xt=null,ct=null,Nt=null,qt=null,pe=null;return{setTest:function(ae){F||(ae?at(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ae){vt!==ae&&!F&&(i.stencilMask(ae),vt=ae)},setFunc:function(ae,wn,xn){(Mt!==ae||Dt!==wn||xt!==xn)&&(i.stencilFunc(ae,wn,xn),Mt=ae,Dt=wn,xt=xn)},setOp:function(ae,wn,xn){(ct!==ae||Nt!==wn||qt!==xn)&&(i.stencilOp(ae,wn,xn),ct=ae,Nt=wn,qt=xn)},setLocked:function(ae){F=ae},setClear:function(ae){pe!==ae&&(i.clearStencil(ae),pe=ae)},reset:function(){F=!1,vt=null,Mt=null,Dt=null,xt=null,ct=null,Nt=null,qt=null,pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap;let c={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,M=null,_=null,A=null,R=null,C=new Xt(0,0,0),P=0,w=!1,S=null,L=null,O=null,q=null,j=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,rt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=rt>=2);let ft=null,lt={};const Et=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Ot=new ce().fromArray(Et),te=new ce().fromArray(kt);function Zt(F,vt,Mt,Dt){const xt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(F,ct),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<Mt;Nt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(vt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ct}const it={};it[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ji),z(!1),U(rc),at(i.CULL_FACE),B(Jn);function at(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function $(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function ut(F,vt){return u[F]!==vt?(i.bindFramebuffer(F,vt),u[F]=vt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function et(F,vt){let Mt=d,Dt=!1;if(F){Mt=f.get(vt),Mt===void 0&&(Mt=[],f.set(vt,Mt));const xt=F.textures;if(Mt.length!==xt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Nt=xt.length;ct<Nt;ct++)Mt[ct]=i.COLOR_ATTACHMENT0+ct;Mt.length=xt.length,Dt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(Mt)}function pt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const D={[di]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[kh]:i.FUNC_REVERSE_SUBTRACT};D[Hh]=i.MIN,D[Vh]=i.MAX;const E={[Gh]:i.ZERO,[Wh]:i.ONE,[Xh]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[Kh]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[Yh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[Zh]:i.ONE_MINUS_DST_COLOR,[$h]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[tu]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(F,vt,Mt,Dt,xt,ct,Nt,qt,pe,ae){if(F===Jn){x===!0&&($(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),F!==Oh){if(F!==m||ae!==w){if((p!==di||_!==di)&&(i.blendEquation(i.FUNC_ADD),p=di,_=di),ae)switch(F){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,A=null,R=null,C.set(0,0,0),P=0,m=F,w=ae}return}xt=xt||vt,ct=ct||Mt,Nt=Nt||Dt,(vt!==p||xt!==_)&&(i.blendEquationSeparate(D[vt],D[xt]),p=vt,_=xt),(Mt!==y||Dt!==M||ct!==A||Nt!==R)&&(i.blendFuncSeparate(E[Mt],E[Dt],E[ct],E[Nt]),y=Mt,M=Dt,A=ct,R=Nt),(qt.equals(C)===!1||pe!==P)&&(i.blendColor(qt.r,qt.g,qt.b,pe),C.copy(qt),P=pe),m=F,w=!1}function k(F,vt){F.side===Ve?$(i.CULL_FACE):at(i.CULL_FACE);let Mt=F.side===Ye;vt&&(Mt=!Mt),z(Mt),F.blending===$i&&F.transparent===!1?B(Jn):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Dt=F.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),H(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function z(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function U(F){F!==zh?(at(i.CULL_FACE),F!==L&&(F===rc?i.cullFace(i.BACK):F===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),L=F}function Z(F){F!==O&&(Y&&i.lineWidth(F),O=F)}function H(F,vt,Mt){F?(at(i.POLYGON_OFFSET_FILL),(q!==vt||j!==Mt)&&(i.polygonOffset(vt,Mt),q=vt,j=Mt)):$(i.POLYGON_OFFSET_FILL)}function nt(F){F?at(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function Tt(F){F===void 0&&(F=i.TEXTURE0+tt-1),ft!==F&&(i.activeTexture(F),ft=F)}function ht(F,vt,Mt){Mt===void 0&&(ft===null?Mt=i.TEXTURE0+tt-1:Mt=ft);let Dt=lt[Mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},lt[Mt]=Dt),(Dt.type!==F||Dt.texture!==vt)&&(ft!==Mt&&(i.activeTexture(Mt),ft=Mt),i.bindTexture(F,vt||it[F]),Dt.type=F,Dt.texture=vt)}function b(){const F=lt[ft];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(F){Ot.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ot.copy(F))}function Vt(F){te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function zt(F,vt){let Mt=h.get(vt);Mt===void 0&&(Mt=new WeakMap,h.set(vt,Mt));let Dt=Mt.get(F);Dt===void 0&&(Dt=i.getUniformBlockIndex(vt,F.name),Mt.set(F,Dt))}function St(F,vt){const Dt=h.get(vt).get(F);l.get(vt)!==Dt&&(i.uniformBlockBinding(vt,Dt,F.__bindingPointIndex),l.set(vt,Dt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ft=null,lt={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,M=null,_=null,A=null,R=null,C=new Xt(0,0,0),P=0,w=!1,S=null,L=null,O=null,q=null,j=null,Ot.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:$,bindFramebuffer:ut,drawBuffers:et,useProgram:pt,setBlending:B,setMaterial:k,setFlipSided:z,setCullFace:U,setLineWidth:Z,setPolygonOffset:H,setScissorTest:nt,activeTexture:Tt,bindTexture:ht,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:At,texImage3D:dt,updateUBOMapping:zt,uniformBlockBinding:St,texStorage2D:mt,texStorage3D:Lt,texSubImage2D:W,texSubImage3D:ot,compressedTexSubImage2D:Q,compressedTexSubImage3D:Rt,scissor:wt,viewport:Vt,reset:Jt}}function Dg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new gt,c=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):zr("canvas")}function x(b,v,N){let W=1;const ot=ht(b);if((ot.width>N||ot.height>N)&&(W=N/Math.max(ot.width,ot.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(W*ot.width),Rt=Math.floor(W*ot.height);u===void 0&&(u=g(Q,Rt));const mt=v?g(Q,Rt):u;return mt.width=Q,mt.height=Rt,mt.getContext("2d").drawImage(b,0,0,Q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+Rt+")."),mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,v,N,W,ot=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=v;if(v===i.RED&&(N===i.FLOAT&&(Q=i.R32F),N===i.HALF_FLOAT&&(Q=i.R16F),N===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.R8UI),N===i.UNSIGNED_SHORT&&(Q=i.R16UI),N===i.UNSIGNED_INT&&(Q=i.R32UI),N===i.BYTE&&(Q=i.R8I),N===i.SHORT&&(Q=i.R16I),N===i.INT&&(Q=i.R32I)),v===i.RG&&(N===i.FLOAT&&(Q=i.RG32F),N===i.HALF_FLOAT&&(Q=i.RG16F),N===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RG8UI),N===i.UNSIGNED_SHORT&&(Q=i.RG16UI),N===i.UNSIGNED_INT&&(Q=i.RG32UI),N===i.BYTE&&(Q=i.RG8I),N===i.SHORT&&(Q=i.RG16I),N===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),N===i.UNSIGNED_INT&&(Q=i.RGB32UI),N===i.BYTE&&(Q=i.RGB8I),N===i.SHORT&&(Q=i.RGB16I),N===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),N===i.UNSIGNED_INT&&(Q=i.RGBA32UI),N===i.BYTE&&(Q=i.RGBA8I),N===i.SHORT&&(Q=i.RGBA16I),N===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){const Rt=ot?Ur:oe.getTransfer(W);N===i.FLOAT&&(Q=i.RGBA32F),N===i.HALF_FLOAT&&(Q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Q=Rt===fe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(b,v){let N;return b?v===null||v===gi||v===Is?N=i.DEPTH24_STENCIL8:v===yn?N=i.DEPTH32F_STENCIL8:v===Ls&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gi||v===Is?N=i.DEPTH_COMPONENT24:v===yn?N=i.DEPTH_COMPONENT32F:v===Ls&&(N=i.DEPTH_COMPONENT16),N}function A(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){const v=b.target;v.removeEventListener("dispose",R),P(v),v.isVideoTexture&&c.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),S(v)}function P(b){const v=n.get(b);if(v.__webglInit===void 0)return;const N=b.source,W=f.get(N);if(W){const ot=W[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&w(b),Object.keys(W).length===0&&f.delete(N)}n.remove(b)}function w(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const N=b.source,W=f.get(N);delete W[v.__cacheKey],o.memory.textures--}function S(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let ot=0;ot<v.__webglFramebuffer[W].length;ot++)i.deleteFramebuffer(v.__webglFramebuffer[W][ot]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=b.textures;for(let W=0,ot=N.length;W<ot;W++){const Q=n.get(N[W]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(N[W])}n.remove(b)}let L=0;function O(){L=0}function q(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function j(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function tt(b,v){const N=n.get(b);if(b.isVideoTexture&&nt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(N,b,v);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function Y(b,v){const N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){it(N,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function rt(b,v){const N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){it(N,b,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function X(b,v){const N=n.get(b);if(b.version>0&&N.__version!==b.version){at(N,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const ft={[Ps]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},lt={[en]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},Et={[pu]:i.NEVER,[Mu]:i.ALWAYS,[mu]:i.LESS,[Bl]:i.LEQUAL,[gu]:i.EQUAL,[vu]:i.GEQUAL,[xu]:i.GREATER,[_u]:i.NOTEQUAL};function kt(b,v){if(v.type===yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===Jr||v.magFilter===js||v.magFilter===$n||v.minFilter===Qe||v.minFilter===Jr||v.minFilter===js||v.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ft[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ft[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ft[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,lt[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==js&&v.minFilter!==$n||v.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ot(b,v){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",R));const W=v.source;let ot=f.get(W);ot===void 0&&(ot={},f.set(W,ot));const Q=j(v);if(Q!==b.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ot[Q].usedTimes++;const Rt=ot[b.__cacheKey];Rt!==void 0&&(ot[b.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(v)),b.__cacheKey=Q,b.__webglTexture=ot[Q].texture}return N}function te(b,v,N){return Math.floor(Math.floor(b/N)/v)}function Zt(b,v,N,W){const Q=b.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,N,W,v.data);else{Q.sort((dt,wt)=>dt.start-wt.start);let Rt=0;for(let dt=1;dt<Q.length;dt++){const wt=Q[Rt],Vt=Q[dt],zt=wt.start+wt.count,St=te(Vt.start,v.width,4),Jt=te(wt.start,v.width,4);Vt.start<=zt+1&&St===Jt&&te(Vt.start+Vt.count-1,v.width,4)===St?wt.count=Math.max(wt.count,Vt.start+Vt.count-wt.start):(++Rt,Q[Rt]=Vt)}Q.length=Rt+1;const mt=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let dt=0,wt=Q.length;dt<wt;dt++){const Vt=Q[dt],zt=Math.floor(Vt.start/4),St=Math.ceil(Vt.count/4),Jt=zt%v.width,F=Math.floor(zt/v.width),vt=St,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Jt,F,vt,Mt,N,W,v.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function it(b,v,N){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const ot=Ot(b,v),Q=v.source;e.bindTexture(W,b.__webglTexture,i.TEXTURE0+N);const Rt=n.get(Q);if(Q.version!==Rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+N);const mt=oe.getPrimaries(oe.workingColorSpace),Lt=v.colorSpace===Dn?null:oe.getPrimaries(v.colorSpace),At=v.colorSpace===Dn||mt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let dt=x(v.image,!1,s.maxTextureSize);dt=Tt(v,dt);const wt=r.convert(v.format,v.colorSpace),Vt=r.convert(v.type);let zt=M(v.internalFormat,wt,Vt,v.colorSpace,v.isVideoTexture);kt(W,v);let St;const Jt=v.mipmaps,F=v.isVideoTexture!==!0,vt=Rt.__version===void 0||ot===!0,Mt=Q.dataReady,Dt=A(v,dt);if(v.isDepthTexture)zt=_(v.format===Us,v.type),vt&&(F?e.texStorage2D(i.TEXTURE_2D,1,zt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,zt,dt.width,dt.height,0,wt,Vt,null));else if(v.isDataTexture)if(Jt.length>0){F&&vt&&e.texStorage2D(i.TEXTURE_2D,Dt,zt,Jt[0].width,Jt[0].height);for(let xt=0,ct=Jt.length;xt<ct;xt++)St=Jt[xt],F?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,wt,Vt,St.data):e.texImage2D(i.TEXTURE_2D,xt,zt,St.width,St.height,0,wt,Vt,St.data);v.generateMipmaps=!1}else F?(vt&&e.texStorage2D(i.TEXTURE_2D,Dt,zt,dt.width,dt.height),Mt&&Zt(v,dt,wt,Vt)):e.texImage2D(i.TEXTURE_2D,0,zt,dt.width,dt.height,0,wt,Vt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,zt,Jt[0].width,Jt[0].height,dt.depth);for(let xt=0,ct=Jt.length;xt<ct;xt++)if(St=Jt[xt],v.format!==tn)if(wt!==null)if(F){if(Mt)if(v.layerUpdates.size>0){const Nt=qc(St.width,St.height,v.format,v.type);for(const qt of v.layerUpdates){const pe=St.data.subarray(qt*Nt/St.data.BYTES_PER_ELEMENT,(qt+1)*Nt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,qt,St.width,St.height,1,wt,pe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,dt.depth,wt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,zt,St.width,St.height,dt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,dt.depth,wt,Vt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,zt,St.width,St.height,dt.depth,0,wt,Vt,St.data)}else{F&&vt&&e.texStorage2D(i.TEXTURE_2D,Dt,zt,Jt[0].width,Jt[0].height);for(let xt=0,ct=Jt.length;xt<ct;xt++)St=Jt[xt],v.format!==tn?wt!==null?F?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,wt,Vt,St.data):e.texImage2D(i.TEXTURE_2D,xt,zt,St.width,St.height,0,wt,Vt,St.data)}else if(v.isDataArrayTexture)if(F){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,zt,dt.width,dt.height,dt.depth),Mt)if(v.layerUpdates.size>0){const xt=qc(dt.width,dt.height,v.format,v.type);for(const ct of v.layerUpdates){const Nt=dt.data.subarray(ct*xt/dt.data.BYTES_PER_ELEMENT,(ct+1)*xt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,dt.width,dt.height,1,wt,Vt,Nt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,wt,Vt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,dt.width,dt.height,dt.depth,0,wt,Vt,dt.data);else if(v.isData3DTexture)F?(vt&&e.texStorage3D(i.TEXTURE_3D,Dt,zt,dt.width,dt.height,dt.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,wt,Vt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,zt,dt.width,dt.height,dt.depth,0,wt,Vt,dt.data);else if(v.isFramebufferTexture){if(vt)if(F)e.texStorage2D(i.TEXTURE_2D,Dt,zt,dt.width,dt.height);else{let xt=dt.width,ct=dt.height;for(let Nt=0;Nt<Dt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,zt,xt,ct,0,wt,Vt,null),xt>>=1,ct>>=1}}else if(Jt.length>0){if(F&&vt){const xt=ht(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,zt,xt.width,xt.height)}for(let xt=0,ct=Jt.length;xt<ct;xt++)St=Jt[xt],F?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,wt,Vt,St):e.texImage2D(i.TEXTURE_2D,xt,zt,wt,Vt,St);v.generateMipmaps=!1}else if(F){if(vt){const xt=ht(dt);e.texStorage2D(i.TEXTURE_2D,Dt,zt,xt.width,xt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Vt,dt)}else e.texImage2D(i.TEXTURE_2D,0,zt,wt,Vt,dt);m(v)&&p(W),Rt.__version=Q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function at(b,v,N){if(v.image.length!==6)return;const W=Ot(b,v),ot=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);const Q=n.get(ot);if(ot.version!==Q.__version||W===!0){e.activeTexture(i.TEXTURE0+N);const Rt=oe.getPrimaries(oe.workingColorSpace),mt=v.colorSpace===Dn?null:oe.getPrimaries(v.colorSpace),Lt=v.colorSpace===Dn||Rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let ct=0;ct<6;ct++)!At&&!dt?wt[ct]=x(v.image[ct],!0,s.maxCubemapSize):wt[ct]=dt?v.image[ct].image:v.image[ct],wt[ct]=Tt(v,wt[ct]);const Vt=wt[0],zt=r.convert(v.format,v.colorSpace),St=r.convert(v.type),Jt=M(v.internalFormat,zt,St,v.colorSpace),F=v.isVideoTexture!==!0,vt=Q.__version===void 0||W===!0,Mt=ot.dataReady;let Dt=A(v,Vt);kt(i.TEXTURE_CUBE_MAP,v);let xt;if(At){F&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Jt,Vt.width,Vt.height);for(let ct=0;ct<6;ct++){xt=wt[ct].mipmaps;for(let Nt=0;Nt<xt.length;Nt++){const qt=xt[Nt];v.format!==tn?zt!==null?F?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,0,0,qt.width,qt.height,zt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,Jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,0,0,qt.width,qt.height,zt,St,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,Jt,qt.width,qt.height,0,zt,St,qt.data)}}}else{if(xt=v.mipmaps,F&&vt){xt.length>0&&Dt++;const ct=ht(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(dt){F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,wt[ct].width,wt[ct].height,zt,St,wt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,wt[ct].width,wt[ct].height,0,zt,St,wt[ct].data);for(let Nt=0;Nt<xt.length;Nt++){const pe=xt[Nt].image[ct].image;F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,0,0,pe.width,pe.height,zt,St,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,Jt,pe.width,pe.height,0,zt,St,pe.data)}}else{F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,St,wt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,zt,St,wt[ct]);for(let Nt=0;Nt<xt.length;Nt++){const qt=xt[Nt];F?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,0,0,zt,St,qt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,Jt,zt,St,qt.image[ct])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ot.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function $(b,v,N,W,ot,Q){const Rt=r.convert(N.format,N.colorSpace),mt=r.convert(N.type),Lt=M(N.internalFormat,Rt,mt,N.colorSpace),At=n.get(v),dt=n.get(N);if(dt.__renderTarget=v,!At.__hasExternalTextures){const wt=Math.max(1,v.width>>Q),Vt=Math.max(1,v.height>>Q);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,Lt,wt,Vt,v.depth,0,Rt,mt,null):e.texImage2D(ot,Q,Lt,wt,Vt,0,Rt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),H(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ot,dt.__webglTexture,0,Z(v)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ot,dt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(b,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const W=v.depthTexture,ot=W&&W.isDepthTexture?W.type:null,Q=_(v.stencilBuffer,ot),Rt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Z(v);H(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Q,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,b)}else{const W=v.textures;for(let ot=0;ot<W.length;ot++){const Q=W[ot],Rt=r.convert(Q.format,Q.colorSpace),mt=r.convert(Q.type),Lt=M(Q.internalFormat,Rt,mt,Q.colorSpace),At=Z(v);N&&H(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Lt,v.width,v.height):H(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Lt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),tt(v.depthTexture,0);const ot=W.__webglTexture,Q=Z(v);if(v.depthTexture.format===Ds)H(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(v.depthTexture.format===Us)H(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function pt(b){const v=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const ot=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",ot)};W.addEventListener("dispose",ot),v.__depthDisposeCallback=ot}v.__boundDepthTexture=W}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const W=b.texture.mipmaps;W&&W.length>0?et(v.__webglFramebuffer[0],b):et(v.__webglFramebuffer,b)}else if(N){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),ut(v.__webglDepthbuffer[W],b,!1);else{const ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Q)}}else{const W=b.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ut(v.__webglDepthbuffer,b,!1);else{const ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(b,v,N){const W=n.get(b);v!==void 0&&$(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&pt(b)}function E(b){const v=b.texture,N=n.get(b),W=n.get(v);b.addEventListener("dispose",C);const ot=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Rt=ot.length>1;if(Rt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,o.memory.textures++),Q){N.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[mt]=[];for(let Lt=0;Lt<v.mipmaps.length;Lt++)N.__webglFramebuffer[mt][Lt]=i.createFramebuffer()}else N.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let mt=0;mt<v.mipmaps.length;mt++)N.__webglFramebuffer[mt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let mt=0,Lt=ot.length;mt<Lt;mt++){const At=n.get(ot[mt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&H(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let mt=0;mt<ot.length;mt++){const Lt=ot[mt];N.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[mt]);const At=r.convert(Lt.format,Lt.colorSpace),dt=r.convert(Lt.type),wt=M(Lt.internalFormat,At,dt,Lt.colorSpace,b.isXRRenderTarget===!0),Vt=Z(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,wt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,N.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),kt(i.TEXTURE_CUBE_MAP,v);for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Lt=0;Lt<v.mipmaps.length;Lt++)$(N.__webglFramebuffer[mt][Lt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt);else $(N.__webglFramebuffer[mt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,Lt=ot.length;mt<Lt;mt++){const At=ot[mt],dt=n.get(At);let wt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(wt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,dt.__webglTexture),kt(wt,At),$(N.__webglFramebuffer,b,At,i.COLOR_ATTACHMENT0+mt,wt,0),m(At)&&p(wt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,W.__webglTexture),kt(mt,v),v.mipmaps&&v.mipmaps.length>0)for(let Lt=0;Lt<v.mipmaps.length;Lt++)$(N.__webglFramebuffer[Lt],b,v,i.COLOR_ATTACHMENT0,mt,Lt);else $(N.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,mt,0);m(v)&&p(mt),e.unbindTexture()}b.depthBuffer&&pt(b)}function B(b){const v=b.textures;for(let N=0,W=v.length;N<W;N++){const ot=v[N];if(m(ot)){const Q=y(b),Rt=n.get(ot).__webglTexture;e.bindTexture(Q,Rt),p(Q),e.unbindTexture()}}}const k=[],z=[];function U(b){if(b.samples>0){if(H(b)===!1){const v=b.textures,N=b.width,W=b.height;let ot=i.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(b),mt=v.length>1;if(mt)for(let At=0;At<v.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Lt=b.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);const dt=n.get(v[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,N,W,0,0,N,W,ot,i.NEAREST),l===!0&&(k.length=0,z.length=0,k.push(i.COLOR_ATTACHMENT0+At),b.depthBuffer&&b.resolveDepthBuffer===!1&&(k.push(Q),z.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<v.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);const dt=n.get(v[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Z(b){return Math.min(s.maxSamples,b.samples)}function H(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function nt(b){const v=o.render.frame;c.get(b)!==v&&(c.set(b,v),b.update())}function Tt(b,v){const N=b.colorSpace,W=b.format,ot=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==es&&N!==Dn&&(oe.getTransfer(N)===fe?(W!==tn||ot!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function ht(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.setTexture2D=tt,this.setTexture2DArray=Y,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=D,this.setupRenderTarget=E,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=H}function Ug(i,t){function e(n,s=Dn){let r;const o=oe.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Dl)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ws)return i.HALF_FLOAT;if(n===zl)return i.ALPHA;if(n===Fl)return i.RGB;if(n===tn)return i.RGBA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===La)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Ol)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===Rr||n===Cr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Jo||n===Zo||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Qo)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===fa||n===da||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===ga||n===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_a||n===va||n===Ma||n===ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`;class Fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Zl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:Ng,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qe(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Og extends os{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,f=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Fg,p={},y=e.getContextAttributes();let M=null,_=null;const A=[],R=[],C=new gt;let P=null;const w=new We;w.viewport=new ce;const S=new We;S.viewport=new ce;const L=[w,S],O=new rd;let q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let at=A[it];return at===void 0&&(at=new xo,A[it]=at),at.getTargetRaySpace()},this.getControllerGrip=function(it){let at=A[it];return at===void 0&&(at=new xo,A[it]=at),at.getGripSpace()},this.getHand=function(it){let at=A[it];return at===void 0&&(at=new xo,A[it]=at),at.getHandSpace()};function tt(it){const at=R.indexOf(it.inputSource);if(at===-1)return;const $=A[at];$!==void 0&&($.update(it.inputSource,it.frame,h||o),$.dispatchEvent({type:it.type,data:it.inputSource}))}function Y(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",rt);for(let it=0;it<A.length;it++){const at=R[it];at!==null&&(R[it]=null,A[it].disconnect(at))}q=null,j=null,m.reset();for(const it in p)delete p[it];t.setRenderTarget(M),d=null,f=null,u=null,s=null,_=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(it){h=it},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",rt),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ut=null,et=null;y.depth&&(et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=y.stencil?Us:Ds,ut=y.stencil?Is:gi);const pt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new xi(f.textureWidth,f.textureHeight,{format:tn,type:bn,depthTexture:new Jl(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const $={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new xi(d.framebufferWidth,d.framebufferHeight,{format:tn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(it){for(let at=0;at<it.removed.length;at++){const $=it.removed[at],ut=R.indexOf($);ut>=0&&(R[ut]=null,A[ut].disconnect($))}for(let at=0;at<it.added.length;at++){const $=it.added[at];let ut=R.indexOf($);if(ut===-1){for(let pt=0;pt<A.length;pt++)if(pt>=R.length){R.push($),ut=pt;break}else if(R[pt]===null){R[pt]=$,ut=pt;break}if(ut===-1)break}const et=A[ut];et&&et.connect($)}}const X=new I,ft=new I;function lt(it,at,$){X.setFromMatrixPosition(at.matrixWorld),ft.setFromMatrixPosition($.matrixWorld);const ut=X.distanceTo(ft),et=at.projectionMatrix.elements,pt=$.projectionMatrix.elements,D=et[14]/(et[10]-1),E=et[14]/(et[10]+1),B=(et[9]+1)/et[5],k=(et[9]-1)/et[5],z=(et[8]-1)/et[0],U=(pt[8]+1)/pt[0],Z=D*z,H=D*U,nt=ut/(-z+U),Tt=nt*-z;if(at.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Tt),it.translateZ(nt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),et[10]===-1)it.projectionMatrix.copy(at.projectionMatrix),it.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ht=D+nt,b=E+nt,v=Z-Tt,N=H+(ut-Tt),W=B*E/b*ht,ot=k*E/b*ht;it.projectionMatrix.makePerspective(v,N,W,ot,ht,b),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Et(it,at){at===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(at.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let at=it.near,$=it.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&($=m.depthFar)),O.near=S.near=w.near=at,O.far=S.far=w.far=$,(q!==O.near||j!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,j=O.far),O.layers.mask=it.layers.mask|6,w.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const ut=it.parent,et=O.cameras;Et(O,ut);for(let pt=0;pt<et.length;pt++)Et(et[pt],ut);et.length===2?lt(O,w,S):O.projectionMatrix.copy(w.projectionMatrix),kt(it,O,ut)};function kt(it,at,$){$===null?it.matrix.copy(at.matrixWorld):(it.matrix.copy($.matrixWorld),it.matrix.invert(),it.matrix.multiply(at.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(at.projectionMatrix),it.projectionMatrixInverse.copy(at.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ns*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(it){return p[it]};let Ot=null;function te(it,at){if(c=at.getViewerPose(h||o),g=at,c!==null){const $=c.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ut=!1;$.length!==O.cameras.length&&(O.cameras.length=0,ut=!0);for(let E=0;E<$.length;E++){const B=$[E];let k=null;if(d!==null)k=d.getViewport(B);else{const U=u.getViewSubImage(f,B);k=U.viewport,E===0&&(t.setRenderTargetTextures(_,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(_))}let z=L[E];z===void 0&&(z=new We,z.layers.enable(E),z.viewport=new ce,L[E]=z),z.matrix.fromArray(B.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(B.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(k.x,k.y,k.width,k.height),E===0&&(O.matrix.copy(z.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ut===!0&&O.cameras.push(z)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const E=u.getDepthInformation($[0]);E&&E.isValid&&E.texture&&m.init(E,s.renderState)}if(et&&et.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let E=0;E<$.length;E++){const B=$[E].camera;if(B){let k=p[B];k||(k=new Zl,p[B]=k);const z=u.getCameraImage(B);k.sourceTexture=z}}}}for(let $=0;$<A.length;$++){const ut=R[$],et=A[$];ut!==null&&et!==void 0&&et.update(ut,at,h||o)}Ot&&Ot(it,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const Zt=new ah;Zt.setAnimationLoop(te),this.setAnimationLoop=function(it){Ot=it},this.dispose=function(){}}}const ci=new mn,Bg=new se;function kg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ql(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,ci.copy(_),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const _=M.program;n.uniformBlockBinding(y,_)}function h(y,M){let _=s[y.id];_===void 0&&(g(y),_=c(y),s[y.id]=_,y.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(y,A);const R=t.render.frame;r[y.id]!==R&&(f(y),r[y.id]=R)}function c(y){const M=u();y.__bindingPointIndex=M;const _=i.createBuffer(),A=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],_=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,C=_.length;R<C;R++){const P=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,S=P.length;w<S;w++){const L=P[w];if(d(L,R,w,A)===!0){const O=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let tt=0;tt<q.length;tt++){const Y=q[tt],rt=x(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+j,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,j),j+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,_,A){const R=y.value,C=M+"_"+_;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const P=A[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return A[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(y){const M=y.uniforms;let _=0;const A=16;for(let C=0,P=M.length;C<P;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,L=w.length;S<L;S++){const O=w[S],q=Array.isArray(O.value)?O.value:[O.value];for(let j=0,tt=q.length;j<tt;j++){const Y=q[j],rt=x(Y),X=_%A,ft=X%rt.boundary,lt=X+ft;_+=ft,lt!==0&&A-lt<rt.storage&&(_+=A-lt),O.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=rt.storage}}}const R=_%A;return R>0&&(_+=A-R),y.__size=_,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}class Vg{constructor(t={}){const{canvas:e=Fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Le;let R=0,C=0,P=null,w=-1,S=null;const L=new ce,O=new ce;let q=null;const j=new Xt(0);let tt=0,Y=e.width,rt=e.height,X=1,ft=null,lt=null;const Et=new ce(0,0,Y,rt),kt=new ce(0,0,Y,rt);let Ot=!1;const te=new Hr;let Zt=!1,it=!1;const at=new se,$=new I,ut=new ce,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function D(){return P===null?X:1}let E=n;function B(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),E===null){const V="webgl2";if(E=B(V,T),E===null)throw B(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let k,z,U,Z,H,nt,Tt,ht,b,v,N,W,ot,Q,Rt,mt,Lt,At,dt,wt,Vt,zt,St,Jt;function F(){k=new jm(E),k.init(),zt=new Ug(E,k),z=new Xm(E,k,t,zt),U=new Ig(E,k),z.reversedDepthBuffer&&f&&U.buffers.depth.setReversed(!0),Z=new e0(E),H=new vg,nt=new Dg(E,k,U,H,z,zt,Z),Tt=new Ym(_),ht=new Km(_),b=new ad(E),St=new Gm(E,b),v=new Qm(E,b,Z,St),N=new i0(E,v,b,Z),dt=new n0(E,z,nt),mt=new qm(H),W=new _g(_,Tt,ht,k,z,St,mt),ot=new kg(_,H),Q=new yg,Rt=new Ag(k),At=new Vm(_,Tt,ht,U,N,d,l),Lt=new Pg(_,N,z),Jt=new Hg(E,Z,z,U),wt=new Wm(E,k,Z),Vt=new t0(E,k,Z),Z.programs=W.programs,_.capabilities=z,_.extensions=k,_.properties=H,_.renderLists=Q,_.shadowMap=Lt,_.state=U,_.info=Z}F();const vt=new Og(_,E);this.xr=vt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=k.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=k.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(Y,rt,!1))},this.getSize=function(T){return T.set(Y,rt)},this.setSize=function(T,V,J=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,rt=V,e.width=Math.floor(T*X),e.height=Math.floor(V*X),J===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Y*X,rt*X).floor()},this.setDrawingBufferSize=function(T,V,J){Y=T,rt=V,X=J,e.width=Math.floor(T*J),e.height=Math.floor(V*J),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,V,J,K){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,V,J,K),U.viewport(L.copy(Et).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(kt)},this.setScissor=function(T,V,J,K){T.isVector4?kt.set(T.x,T.y,T.z,T.w):kt.set(T,V,J,K),U.scissor(O.copy(kt).multiplyScalar(X).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(T){U.setScissorTest(Ot=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,J=!0){let K=0;if(T){let G=!1;if(P!==null){const _t=P.texture.format;G=_t===Ua||_t===Da||_t===Ia}if(G){const _t=P.texture.type,bt=_t===bn||_t===gi||_t===Ls||_t===Is||_t===Ca||_t===Pa,Ut=At.getClearColor(),It=At.getClearAlpha(),Ht=Ut.r,Wt=Ut.g,Ft=Ut.b;bt?(g[0]=Ht,g[1]=Wt,g[2]=Ft,g[3]=It,E.clearBufferuiv(E.COLOR,0,g)):(x[0]=Ht,x[1]=Wt,x[2]=Ft,x[3]=It,E.clearBufferiv(E.COLOR,0,x))}else K|=E.COLOR_BUFFER_BIT}V&&(K|=E.DEPTH_BUFFER_BIT),J&&(K|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),At.dispose(),Q.dispose(),Rt.dispose(),H.dispose(),Tt.dispose(),ht.dispose(),N.dispose(),St.dispose(),Jt.dispose(),W.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",xn),vt.removeEventListener("sessionend",Qa),ei.stop()};function Mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Z.autoReset,V=Lt.enabled,J=Lt.autoUpdate,K=Lt.needsUpdate,G=Lt.type;F(),Z.autoReset=T,Lt.enabled=V,Lt.autoUpdate=J,Lt.needsUpdate=K,Lt.type=G}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){const V=T.target;V.removeEventListener("dispose",ct),Nt(V)}function Nt(T){qt(T),H.remove(T)}function qt(T){const V=H.get(T).programs;V!==void 0&&(V.forEach(function(J){W.releaseProgram(J)}),T.isShaderMaterial&&W.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,J,K,G,_t){V===null&&(V=et);const bt=G.isMesh&&G.matrixWorld.determinant()<0,Ut=Ph(T,V,J,K,G);U.setMaterial(K,bt);let It=J.index,Ht=1;if(K.wireframe===!0){if(It=v.getWireframeAttribute(J),It===void 0)return;Ht=2}const Wt=J.drawRange,Ft=J.attributes.position;let ie=Wt.start*Ht,ue=(Wt.start+Wt.count)*Ht;_t!==null&&(ie=Math.max(ie,_t.start*Ht),ue=Math.min(ue,(_t.start+_t.count)*Ht)),It!==null?(ie=Math.max(ie,0),ue=Math.min(ue,It.count)):Ft!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,Ft.count));const ve=ue-ie;if(ve<0||ve===1/0)return;St.setup(G,K,Ut,J,It);let me,de=wt;if(It!==null&&(me=b.get(It),de=Vt,de.setIndex(me)),G.isMesh)K.wireframe===!0?(U.setLineWidth(K.wireframeLinewidth*D()),de.setMode(E.LINES)):de.setMode(E.TRIANGLES);else if(G.isLine){let Bt=K.linewidth;Bt===void 0&&(Bt=1),U.setLineWidth(Bt*D()),G.isLineSegments?de.setMode(E.LINES):G.isLineLoop?de.setMode(E.LINE_LOOP):de.setMode(E.LINE_STRIP)}else G.isPoints?de.setMode(E.POINTS):G.isSprite&&de.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Bt=G._multiDrawStarts,ge=G._multiDrawCounts,re=G._multiDrawCount,$e=It?b.get(It).bytesPerElement:1,Si=H.get(K).currentProgram.getUniforms();for(let Je=0;Je<re;Je++)Si.setValue(E,"_gl_DrawID",Je),de.render(Bt[Je]/$e,ge[Je])}else if(G.isInstancedMesh)de.renderInstances(ie,ve,G.count);else if(J.isInstancedBufferGeometry){const Bt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ge=Math.min(J.instanceCount,Bt);de.renderInstances(ie,ve,ge)}else de.render(ie,ve)};function pe(T,V,J){T.transparent===!0&&T.side===Ve&&T.forceSinglePass===!1?(T.side=Ye,T.needsUpdate=!0,Ks(T,V,J),T.side=jn,T.needsUpdate=!0,Ks(T,V,J),T.side=Ve):Ks(T,V,J)}this.compile=function(T,V,J=null){J===null&&(J=T),p=Rt.get(J),p.init(V),M.push(p),J.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==J&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const K=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _t=G.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){const Ut=_t[bt];pe(Ut,J,G),K.add(Ut)}else pe(_t,J,G),K.add(_t)}),p=M.pop(),K},this.compileAsync=function(T,V,J=null){const K=this.compile(T,V,J);return new Promise(G=>{function _t(){if(K.forEach(function(bt){H.get(bt).currentProgram.isReady()&&K.delete(bt)}),K.size===0){G(T);return}setTimeout(_t,10)}k.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ae=null;function wn(T){ae&&ae(T)}function xn(){ei.stop()}function Qa(){ei.start()}const ei=new ah;ei.setAnimationLoop(wn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(T){ae=T,vt.setAnimationLoop(T),T===null?ei.stop():ei.start()},vt.addEventListener("sessionstart",xn),vt.addEventListener("sessionend",Qa),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(V),V=vt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,V,P),p=Rt.get(T,M.length),p.init(V),M.push(p),at.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(at,Sn,V.reversedDepth),it=this.localClippingEnabled,Zt=mt.init(this.clippingPlanes,it),m=Q.get(T,y.length),m.init(),y.push(m),vt.enabled===!0&&vt.isPresenting===!0){const _t=_.xr.getDepthSensingMesh();_t!==null&&Yr(_t,V,-1/0,_.sortObjects)}Yr(T,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ft,lt),pt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,pt&&At.addToRenderList(m,T),this.info.render.frame++,Zt===!0&&mt.beginShadows();const J=p.state.shadowsArray;Lt.render(J,T,V),Zt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){const _t=V.cameras;if(G.length>0)for(let bt=0,Ut=_t.length;bt<Ut;bt++){const It=_t[bt];ec(K,G,T,It)}pt&&At.render(T);for(let bt=0,Ut=_t.length;bt<Ut;bt++){const It=_t[bt];tc(m,T,It,It.viewport)}}else G.length>0&&ec(K,G,T,V),pt&&At.render(T),tc(m,T,V);P!==null&&C===0&&(nt.updateMultisampleRenderTarget(P),nt.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,V),St.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Zt===!0&&mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Yr(T,V,J,K){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){K&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(at);const bt=N.update(T),Ut=T.material;Ut.visible&&m.push(T,bt,Ut,J,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||te.intersectsObject(T))){const bt=N.update(T),Ut=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),ut.copy(bt.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(at)),Array.isArray(Ut)){const It=bt.groups;for(let Ht=0,Wt=It.length;Ht<Wt;Ht++){const Ft=It[Ht],ie=Ut[Ft.materialIndex];ie&&ie.visible&&m.push(T,bt,ie,J,ut.z,Ft)}}else Ut.visible&&m.push(T,bt,Ut,J,ut.z,null)}}const _t=T.children;for(let bt=0,Ut=_t.length;bt<Ut;bt++)Yr(_t[bt],V,J,K)}function tc(T,V,J,K){const G=T.opaque,_t=T.transmissive,bt=T.transparent;p.setupLightsView(J),Zt===!0&&mt.setGlobalState(_.clippingPlanes,J),K&&U.viewport(L.copy(K)),G.length>0&&Zs(G,V,J),_t.length>0&&Zs(_t,V,J),bt.length>0&&Zs(bt,V,J),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function ec(T,V,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new xi(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Ws:bn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const _t=p.state.transmissionRenderTarget[K.id],bt=K.viewport||L;_t.setSize(bt.z*_.transmissionResolutionScale,bt.w*_.transmissionResolutionScale);const Ut=_.getRenderTarget(),It=_.getActiveCubeFace(),Ht=_.getActiveMipmapLevel();_.setRenderTarget(_t),_.getClearColor(j),tt=_.getClearAlpha(),tt<1&&_.setClearColor(16777215,.5),_.clear(),pt&&At.render(J);const Wt=_.toneMapping;_.toneMapping=Zn;const Ft=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Zt===!0&&mt.setGlobalState(_.clippingPlanes,K),Zs(T,J,K),nt.updateMultisampleRenderTarget(_t),nt.updateRenderTargetMipmap(_t),k.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let ue=0,ve=V.length;ue<ve;ue++){const me=V[ue],de=me.object,Bt=me.geometry,ge=me.material,re=me.group;if(ge.side===Ve&&de.layers.test(K.layers)){const $e=ge.side;ge.side=Ye,ge.needsUpdate=!0,nc(de,J,K,Bt,ge,re),ge.side=$e,ge.needsUpdate=!0,ie=!0}}ie===!0&&(nt.updateMultisampleRenderTarget(_t),nt.updateRenderTargetMipmap(_t))}_.setRenderTarget(Ut,It,Ht),_.setClearColor(j,tt),Ft!==void 0&&(K.viewport=Ft),_.toneMapping=Wt}function Zs(T,V,J){const K=V.isScene===!0?V.overrideMaterial:null;for(let G=0,_t=T.length;G<_t;G++){const bt=T[G],Ut=bt.object,It=bt.geometry,Ht=bt.group;let Wt=bt.material;Wt.allowOverride===!0&&K!==null&&(Wt=K),Ut.layers.test(J.layers)&&nc(Ut,V,J,It,Wt,Ht)}}function nc(T,V,J,K,G,_t){T.onBeforeRender(_,V,J,K,G,_t),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(_,V,J,K,T,_t),G.transparent===!0&&G.side===Ve&&G.forceSinglePass===!1?(G.side=Ye,G.needsUpdate=!0,_.renderBufferDirect(J,V,K,G,T,_t),G.side=jn,G.needsUpdate=!0,_.renderBufferDirect(J,V,K,G,T,_t),G.side=Ve):_.renderBufferDirect(J,V,K,G,T,_t),T.onAfterRender(_,V,J,K,G,_t)}function Ks(T,V,J){V.isScene!==!0&&(V=et);const K=H.get(T),G=p.state.lights,_t=p.state.shadowsArray,bt=G.state.version,Ut=W.getParameters(T,G.state,_t,V,J),It=W.getProgramCacheKey(Ut);let Ht=K.programs;K.environment=T.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(T.isMeshStandardMaterial?ht:Tt).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",ct),Ht=new Map,K.programs=Ht);let Wt=Ht.get(It);if(Wt!==void 0){if(K.currentProgram===Wt&&K.lightsStateVersion===bt)return sc(T,Ut),Wt}else Ut.uniforms=W.getUniforms(T),T.onBeforeCompile(Ut,_),Wt=W.acquireProgram(Ut,It),Ht.set(It,Wt),K.uniforms=Ut.uniforms;const Ft=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=mt.uniform),sc(T,Ut),K.needsLights=Ih(T),K.lightsStateVersion=bt,K.needsLights&&(Ft.ambientLightColor.value=G.state.ambient,Ft.lightProbe.value=G.state.probe,Ft.directionalLights.value=G.state.directional,Ft.directionalLightShadows.value=G.state.directionalShadow,Ft.spotLights.value=G.state.spot,Ft.spotLightShadows.value=G.state.spotShadow,Ft.rectAreaLights.value=G.state.rectArea,Ft.ltc_1.value=G.state.rectAreaLTC1,Ft.ltc_2.value=G.state.rectAreaLTC2,Ft.pointLights.value=G.state.point,Ft.pointLightShadows.value=G.state.pointShadow,Ft.hemisphereLights.value=G.state.hemi,Ft.directionalShadowMap.value=G.state.directionalShadowMap,Ft.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ft.spotShadowMap.value=G.state.spotShadowMap,Ft.spotLightMatrix.value=G.state.spotLightMatrix,Ft.spotLightMap.value=G.state.spotLightMap,Ft.pointShadowMap.value=G.state.pointShadowMap,Ft.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Wt,K.uniformsList=null,Wt}function ic(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Pr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function sc(T,V){const J=H.get(T);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Ph(T,V,J,K,G){V.isScene!==!0&&(V=et),nt.resetTextureUnits();const _t=V.fog,bt=K.isMeshStandardMaterial?V.environment:null,Ut=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:es,It=(K.isMeshStandardMaterial?ht:Tt).get(K.envMap||bt),Ht=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Wt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ft=!!J.morphAttributes.position,ie=!!J.morphAttributes.normal,ue=!!J.morphAttributes.color;let ve=Zn;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=_.toneMapping);const me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,de=me!==void 0?me.length:0,Bt=H.get(K),ge=p.state.lights;if(Zt===!0&&(it===!0||T!==S)){const Be=T===S&&K.id===w;mt.setState(K,T,Be)}let re=!1;K.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ge.state.version||Bt.outputColorSpace!==Ut||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isBatchedMesh&&Bt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Bt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==It||K.fog===!0&&Bt.fog!==_t||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==mt.numPlanes||Bt.numIntersection!==mt.numIntersection)||Bt.vertexAlphas!==Ht||Bt.vertexTangents!==Wt||Bt.morphTargets!==Ft||Bt.morphNormals!==ie||Bt.morphColors!==ue||Bt.toneMapping!==ve||Bt.morphTargetsCount!==de)&&(re=!0):(re=!0,Bt.__version=K.version);let $e=Bt.currentProgram;re===!0&&($e=Ks(K,V,G));let Si=!1,Je=!1,fs=!1;const xe=$e.getUniforms(),nn=Bt.uniforms;if(U.useProgram($e.program)&&(Si=!0,Je=!0,fs=!0),K.id!==w&&(w=K.id,Je=!0),Si||S!==T){U.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xe.setValue(E,"projectionMatrix",T.projectionMatrix),xe.setValue(E,"viewMatrix",T.matrixWorldInverse);const Ge=xe.map.cameraPosition;Ge!==void 0&&Ge.setValue(E,$.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&xe.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xe.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Je=!0,fs=!0)}if(G.isSkinnedMesh){xe.setOptional(E,G,"bindMatrix"),xe.setOptional(E,G,"bindMatrixInverse");const Be=G.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),xe.setValue(E,"boneTexture",Be.boneTexture,nt))}G.isBatchedMesh&&(xe.setOptional(E,G,"batchingTexture"),xe.setValue(E,"batchingTexture",G._matricesTexture,nt),xe.setOptional(E,G,"batchingIdTexture"),xe.setValue(E,"batchingIdTexture",G._indirectTexture,nt),xe.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(E,"batchingColorTexture",G._colorsTexture,nt));const sn=J.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&dt.update(G,J,$e),(Je||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,xe.setValue(E,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(nn.envMap.value=It,nn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(nn.envMapIntensity.value=V.environmentIntensity),Je&&(xe.setValue(E,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&Lh(nn,fs),_t&&K.fog===!0&&ot.refreshFogUniforms(nn,_t),ot.refreshMaterialUniforms(nn,K,X,rt,p.state.transmissionRenderTarget[T.id]),Pr.upload(E,ic(Bt),nn,nt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Pr.upload(E,ic(Bt),nn,nt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xe.setValue(E,"center",G.center),xe.setValue(E,"modelViewMatrix",G.modelViewMatrix),xe.setValue(E,"normalMatrix",G.normalMatrix),xe.setValue(E,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Be=K.uniformsGroups;for(let Ge=0,$r=Be.length;Ge<$r;Ge++){const ni=Be[Ge];Jt.update(ni,$e),Jt.bind(ni,$e)}}return $e}function Lh(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Ih(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,V,J){const K=H.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=V,H.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const J=H.get(T);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0};const Dh=E.createFramebuffer();this.setRenderTarget=function(T,V=0,J=0){P=T,R=V,C=J;let K=!0,G=null,_t=!1,bt=!1;if(T){const It=H.get(T);if(It.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(E.FRAMEBUFFER,null),K=!1;else if(It.__webglFramebuffer===void 0)nt.setupRenderTarget(T);else if(It.__hasExternalTextures)nt.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ft=T.depthTexture;if(It.__boundDepthTexture!==Ft){if(Ft!==null&&H.has(Ft)&&(T.width!==Ft.image.width||T.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(T)}}const Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);const Wt=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[V])?G=Wt[V][J]:G=Wt[V],_t=!0):T.samples>0&&nt.useMultisampledRTT(T)===!1?G=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?G=Wt[J]:G=Wt,L.copy(T.viewport),O.copy(T.scissor),q=T.scissorTest}else L.copy(Et).multiplyScalar(X).floor(),O.copy(kt).multiplyScalar(X).floor(),q=Ot;if(J!==0&&(G=Dh),U.bindFramebuffer(E.FRAMEBUFFER,G)&&K&&U.drawBuffers(T,G),U.viewport(L),U.scissor(O),U.setScissorTest(q),_t){const It=H.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+V,It.__webglTexture,J)}else if(bt){const It=V;for(let Ht=0;Ht<T.textures.length;Ht++){const Wt=H.get(T.textures[Ht]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,J,It)}}else if(T!==null&&J!==0){const It=H.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,It.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(T,V,J,K,G,_t,bt,Ut=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It){U.bindFramebuffer(E.FRAMEBUFFER,It);try{const Ht=T.textures[Ut],Wt=Ht.format,Ft=Ht.type;if(!z.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-K&&J>=0&&J<=T.height-G&&(T.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ut),E.readPixels(V,J,K,G,zt.convert(Wt),zt.convert(Ft),_t))}finally{const Ht=P!==null?H.get(P).__webglFramebuffer:null;U.bindFramebuffer(E.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(T,V,J,K,G,_t,bt,Ut=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It)if(V>=0&&V<=T.width-K&&J>=0&&J<=T.height-G){U.bindFramebuffer(E.FRAMEBUFFER,It);const Ht=T.textures[Ut],Wt=Ht.format,Ft=Ht.type;if(!z.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ie),E.bufferData(E.PIXEL_PACK_BUFFER,_t.byteLength,E.STREAM_READ),T.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ut),E.readPixels(V,J,K,G,zt.convert(Wt),zt.convert(Ft),0);const ue=P!==null?H.get(P).__webglFramebuffer:null;U.bindFramebuffer(E.FRAMEBUFFER,ue);const ve=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ou(E,ve,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ie),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,_t),E.deleteBuffer(ie),E.deleteSync(ve),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,J=0){const K=Math.pow(2,-J),G=Math.floor(T.image.width*K),_t=Math.floor(T.image.height*K),bt=V!==null?V.x:0,Ut=V!==null?V.y:0;nt.setTexture2D(T,0),E.copyTexSubImage2D(E.TEXTURE_2D,J,0,0,bt,Ut,G,_t),U.unbindTexture()};const Uh=E.createFramebuffer(),Nh=E.createFramebuffer();this.copyTextureToTexture=function(T,V,J=null,K=null,G=0,_t=null){_t===null&&(G!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=G,G=0):_t=0);let bt,Ut,It,Ht,Wt,Ft,ie,ue,ve;const me=T.isCompressedTexture?T.mipmaps[_t]:T.image;if(J!==null)bt=J.max.x-J.min.x,Ut=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Ht=J.min.x,Wt=J.min.y,Ft=J.isBox3?J.min.z:0;else{const sn=Math.pow(2,-G);bt=Math.floor(me.width*sn),Ut=Math.floor(me.height*sn),T.isDataArrayTexture?It=me.depth:T.isData3DTexture?It=Math.floor(me.depth*sn):It=1,Ht=0,Wt=0,Ft=0}K!==null?(ie=K.x,ue=K.y,ve=K.z):(ie=0,ue=0,ve=0);const de=zt.convert(V.format),Bt=zt.convert(V.type);let ge;V.isData3DTexture?(nt.setTexture3D(V,0),ge=E.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(nt.setTexture2DArray(V,0),ge=E.TEXTURE_2D_ARRAY):(nt.setTexture2D(V,0),ge=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,V.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,V.unpackAlignment);const re=E.getParameter(E.UNPACK_ROW_LENGTH),$e=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Si=E.getParameter(E.UNPACK_SKIP_PIXELS),Je=E.getParameter(E.UNPACK_SKIP_ROWS),fs=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,me.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,me.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ht),E.pixelStorei(E.UNPACK_SKIP_ROWS,Wt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ft);const xe=T.isDataArrayTexture||T.isData3DTexture,nn=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const sn=H.get(T),Be=H.get(V),Ge=H.get(sn.__renderTarget),$r=H.get(Be.__renderTarget);U.bindFramebuffer(E.READ_FRAMEBUFFER,Ge.__webglFramebuffer),U.bindFramebuffer(E.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let ni=0;ni<It;ni++)xe&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,H.get(T).__webglTexture,G,Ft+ni),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,H.get(V).__webglTexture,_t,ve+ni)),E.blitFramebuffer(Ht,Wt,bt,Ut,ie,ue,bt,Ut,E.DEPTH_BUFFER_BIT,E.NEAREST);U.bindFramebuffer(E.READ_FRAMEBUFFER,null),U.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||H.has(T)){const sn=H.get(T),Be=H.get(V);U.bindFramebuffer(E.READ_FRAMEBUFFER,Uh),U.bindFramebuffer(E.DRAW_FRAMEBUFFER,Nh);for(let Ge=0;Ge<It;Ge++)xe?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,sn.__webglTexture,G,Ft+Ge):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,sn.__webglTexture,G),nn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Be.__webglTexture,_t,ve+Ge):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Be.__webglTexture,_t),G!==0?E.blitFramebuffer(Ht,Wt,bt,Ut,ie,ue,bt,Ut,E.COLOR_BUFFER_BIT,E.NEAREST):nn?E.copyTexSubImage3D(ge,_t,ie,ue,ve+Ge,Ht,Wt,bt,Ut):E.copyTexSubImage2D(ge,_t,ie,ue,Ht,Wt,bt,Ut);U.bindFramebuffer(E.READ_FRAMEBUFFER,null),U.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else nn?T.isDataTexture||T.isData3DTexture?E.texSubImage3D(ge,_t,ie,ue,ve,bt,Ut,It,de,Bt,me.data):V.isCompressedArrayTexture?E.compressedTexSubImage3D(ge,_t,ie,ue,ve,bt,Ut,It,de,me.data):E.texSubImage3D(ge,_t,ie,ue,ve,bt,Ut,It,de,Bt,me):T.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,_t,ie,ue,bt,Ut,de,Bt,me.data):T.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,_t,ie,ue,me.width,me.height,de,me.data):E.texSubImage2D(E.TEXTURE_2D,_t,ie,ue,bt,Ut,de,Bt,me);E.pixelStorei(E.UNPACK_ROW_LENGTH,re),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,$e),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Si),E.pixelStorei(E.UNPACK_SKIP_ROWS,Je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,fs),_t===0&&V.generateMipmaps&&E.generateMipmap(ge),U.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?nt.setTextureCube(T,0):T.isData3DTexture?nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?nt.setTexture2DArray(T,0):nt.setTexture2D(T,0),U.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,U.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Gg{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}}class fh{constructor(){this.id=0,this.v1=new Zi,this.v2=new Zi,this.v3=new Zi,this.normalModel=new I,this.vertexNormalsModel=[new I,new I,new I],this.vertexNormalsLength=0,this.color=new Xt,this.material=null,this.uvs=[new gt,new gt,new gt],this.z=0,this.renderOrder=0}}class Zi{constructor(){this.position=new I,this.positionWorld=new I,this.positionScreen=new ce,this.visible=!0}copy(t){this.positionWorld.copy(t.positionWorld),this.positionScreen.copy(t.positionScreen)}}class dh{constructor(){this.id=0,this.v1=new Zi,this.v2=new Zi,this.vertexColors=[new Xt,new Xt],this.material=null,this.z=0,this.renderOrder=0}}class ph{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new gt,this.material=null,this.renderOrder=0}}class Wg{constructor(){let t,e,n=0,s,r,o=0,a,l,h=0,c,u,f=0,d,g,x=0,m;const p={objects:[],lights:[],elements:[]},y=new I,M=new ce,_=new On(new I(-1,-1,-1),new I(1,1,1)),A=new On,R=new Array(3),C=new se,P=new se,w=new se,S=new Hr,L=[],O=[],q=[],j=[],tt=[];function Y(){const $=[],ut=[],et=[];let pt=null;const D=new Yt;function E(b){pt=b,D.getNormalMatrix(pt.matrixWorld),$.length=0,ut.length=0,et.length=0}function B(b){const v=b.position,N=b.positionWorld,W=b.positionScreen;N.copy(v).applyMatrix4(m),W.copy(N).applyMatrix4(P);const ot=1/W.w;W.x*=ot,W.y*=ot,W.z*=ot,b.visible=W.x>=-1&&W.x<=1&&W.y>=-1&&W.y<=1&&W.z>=-1&&W.z<=1}function k(b,v,N){s=kt(),s.position.set(b,v,N),B(s)}function z(b,v,N){$.push(b,v,N)}function U(b,v,N){ut.push(b,v,N)}function Z(b,v){et.push(b,v)}function H(b,v,N){return b.visible===!0||v.visible===!0||N.visible===!0?!0:(R[0]=b.positionScreen,R[1]=v.positionScreen,R[2]=N.positionScreen,_.intersectsBox(A.setFromPoints(R)))}function nt(b,v,N){return(N.positionScreen.x-b.positionScreen.x)*(v.positionScreen.y-b.positionScreen.y)-(N.positionScreen.y-b.positionScreen.y)*(v.positionScreen.x-b.positionScreen.x)<0}function Tt(b,v){const N=O[b],W=O[v];N.positionScreen.copy(N.position).applyMatrix4(w),W.positionScreen.copy(W.position).applyMatrix4(w),at(N.positionScreen,W.positionScreen)===!0&&(N.positionScreen.multiplyScalar(1/N.positionScreen.w),W.positionScreen.multiplyScalar(1/W.positionScreen.w),c=te(),c.id=pt.id,c.v1.copy(N),c.v2.copy(W),c.z=Math.max(N.positionScreen.z,W.positionScreen.z),c.renderOrder=pt.renderOrder,c.material=pt.material,pt.material.vertexColors&&(c.vertexColors[0].fromArray(ut,b*3),c.vertexColors[1].fromArray(ut,v*3)),p.elements.push(c))}function ht(b,v,N,W){const ot=O[b],Q=O[v],Rt=O[N];if(H(ot,Q,Rt)!==!1&&(W.side===Ve||nt(ot,Q,Rt)===!0)){a=Ot(),a.id=pt.id,a.v1.copy(ot),a.v2.copy(Q),a.v3.copy(Rt),a.z=(ot.positionScreen.z+Q.positionScreen.z+Rt.positionScreen.z)/3,a.renderOrder=pt.renderOrder,y.subVectors(Rt.position,Q.position),M.subVectors(ot.position,Q.position),y.cross(M),a.normalModel.copy(y),a.normalModel.applyMatrix3(D).normalize();for(let mt=0;mt<3;mt++){const Lt=a.vertexNormalsModel[mt];Lt.fromArray($,arguments[mt]*3),Lt.applyMatrix3(D).normalize(),a.uvs[mt].fromArray(et,arguments[mt]*2)}a.vertexNormalsLength=3,a.material=W,W.vertexColors&&a.color.fromArray(ut,b*3),p.elements.push(a)}}return{setObject:E,projectVertex:B,checkTriangleVisibility:H,checkBackfaceCulling:nt,pushVertex:k,pushNormal:z,pushColor:U,pushUv:Z,pushLine:Tt,pushTriangle:ht}}const rt=new Y;function X($){if($.visible===!1)return;if($.isLight)p.lights.push($);else if($.isMesh||$.isLine||$.isPoints){if($.material.visible===!1||$.frustumCulled===!0&&S.intersectsObject($)===!1)return;ft($)}else if($.isSprite){if($.material.visible===!1||$.frustumCulled===!0&&S.intersectsSprite($)===!1)return;ft($)}const ut=$.children;for(let et=0,pt=ut.length;et<pt;et++)X(ut[et])}function ft($){t=Et(),t.id=$.id,t.object=$,y.setFromMatrixPosition($.matrixWorld),y.applyMatrix4(P),t.z=y.z,t.renderOrder=$.renderOrder,p.objects.push(t)}this.projectScene=function($,ut,et,pt){l=0,u=0,g=0,p.elements.length=0,$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ut.parent===null&&ut.matrixWorldAutoUpdate===!0&&ut.updateMatrixWorld(),C.copy(ut.matrixWorldInverse),P.multiplyMatrices(ut.projectionMatrix,C),S.setFromProjectionMatrix(P),e=0,p.objects.length=0,p.lights.length=0,X($),et===!0&&p.objects.sort(it);const D=p.objects;for(let E=0,B=D.length;E<B;E++){const k=D[E].object,z=k.geometry;if(rt.setObject(k),m=k.matrixWorld,r=0,k.isMesh){let U=k.material;const Z=Array.isArray(U),H=z.attributes,nt=z.groups;if(H.position===void 0)continue;const Tt=H.position.array;for(let ht=0,b=Tt.length;ht<b;ht+=3){let v=Tt[ht],N=Tt[ht+1],W=Tt[ht+2];const ot=z.morphAttributes.position;if(ot!==void 0){const Q=z.morphTargetsRelative,Rt=k.morphTargetInfluences;for(let mt=0,Lt=ot.length;mt<Lt;mt++){const At=Rt[mt];if(At===0)continue;const dt=ot[mt];Q?(v+=dt.getX(ht/3)*At,N+=dt.getY(ht/3)*At,W+=dt.getZ(ht/3)*At):(v+=(dt.getX(ht/3)-Tt[ht])*At,N+=(dt.getY(ht/3)-Tt[ht+1])*At,W+=(dt.getZ(ht/3)-Tt[ht+2])*At)}}rt.pushVertex(v,N,W)}if(H.normal!==void 0){const ht=H.normal.array;for(let b=0,v=ht.length;b<v;b+=3)rt.pushNormal(ht[b],ht[b+1],ht[b+2])}if(H.color!==void 0){const ht=H.color.array;for(let b=0,v=ht.length;b<v;b+=3)rt.pushColor(ht[b],ht[b+1],ht[b+2])}if(H.uv!==void 0){const ht=H.uv.array;for(let b=0,v=ht.length;b<v;b+=2)rt.pushUv(ht[b],ht[b+1])}if(z.index!==null){const ht=z.index.array;if(nt.length>0)for(let b=0;b<nt.length;b++){const v=nt[b];if(U=Z===!0?k.material[v.materialIndex]:k.material,U!==void 0)for(let N=v.start,W=v.start+v.count;N<W;N+=3)rt.pushTriangle(ht[N],ht[N+1],ht[N+2],U)}else for(let b=0,v=ht.length;b<v;b+=3)rt.pushTriangle(ht[b],ht[b+1],ht[b+2],U)}else if(nt.length>0)for(let ht=0;ht<nt.length;ht++){const b=nt[ht];if(U=Z===!0?k.material[b.materialIndex]:k.material,U!==void 0)for(let v=b.start,N=b.start+b.count;v<N;v+=3)rt.pushTriangle(v,v+1,v+2,U)}else for(let ht=0,b=Tt.length/3;ht<b;ht+=3)rt.pushTriangle(ht,ht+1,ht+2,U)}else if(k.isLine){w.multiplyMatrices(P,m);const U=z.attributes;if(U.position!==void 0){const Z=U.position.array;for(let H=0,nt=Z.length;H<nt;H+=3)rt.pushVertex(Z[H],Z[H+1],Z[H+2]);if(U.color!==void 0){const H=U.color.array;for(let nt=0,Tt=H.length;nt<Tt;nt+=3)rt.pushColor(H[nt],H[nt+1],H[nt+2])}if(z.index!==null){const H=z.index.array;for(let nt=0,Tt=H.length;nt<Tt;nt+=2)rt.pushLine(H[nt],H[nt+1])}else{const H=k.isLineSegments?2:1;for(let nt=0,Tt=Z.length/3-1;nt<Tt;nt+=H)rt.pushLine(nt,nt+1)}}}else if(k.isPoints){w.multiplyMatrices(P,m);const U=z.attributes;if(U.position!==void 0){const Z=U.position.array;for(let H=0,nt=Z.length;H<nt;H+=3)M.set(Z[H],Z[H+1],Z[H+2],1),M.applyMatrix4(w),lt(M,k,ut)}}else k.isSprite&&(k.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,k.matrixWorld),M.set(m.elements[12],m.elements[13],m.elements[14],1),M.applyMatrix4(P),lt(M,k,ut))}return pt===!0&&p.elements.sort(it),p};function lt($,ut,et){const pt=1/$.w;$.z*=pt,$.z>=-1&&$.z<=1&&(d=Zt(),d.id=ut.id,d.x=$.x*pt,d.y=$.y*pt,d.z=$.z,d.renderOrder=ut.renderOrder,d.object=ut,d.rotation=ut.rotation,d.scale.x=ut.scale.x*Math.abs(d.x-($.x+et.projectionMatrix.elements[0])/($.w+et.projectionMatrix.elements[12])),d.scale.y=ut.scale.y*Math.abs(d.y-($.y+et.projectionMatrix.elements[5])/($.w+et.projectionMatrix.elements[13])),d.material=ut.material,p.elements.push(d))}function Et(){if(e===n){const $=new Gg;return L.push($),n++,e++,$}return L[e++]}function kt(){if(r===o){const $=new Zi;return O.push($),o++,r++,$}return O[r++]}function Ot(){if(l===h){const $=new fh;return q.push($),h++,l++,$}return q[l++]}function te(){if(u===f){const $=new dh;return j.push($),f++,u++,$}return j[u++]}function Zt(){if(g===x){const $=new ph;return tt.push($),x++,g++,$}return tt[g++]}function it($,ut){return $.renderOrder!==ut.renderOrder?$.renderOrder-ut.renderOrder:$.z!==ut.z?ut.z-$.z:$.id!==ut.id?$.id-ut.id:0}function at($,ut){let et=0,pt=1;const D=$.z+$.w,E=ut.z+ut.w,B=-$.z+$.w,k=-ut.z+ut.w;return D>=0&&E>=0&&B>=0&&k>=0?!0:D<0&&E<0||B<0&&k<0?!1:(D<0?et=Math.max(et,D/(D-E)):E<0&&(pt=Math.min(pt,D/(D-E))),B<0?et=Math.max(et,B/(B-k)):k<0&&(pt=Math.min(pt,B/(B-k))),pt<et?!1:($.lerp(ut,et),ut.lerp($,1-pt),!0))}}}class Xg{constructor(){let t,e,n,s,r,o,a,l,h,c,u,f=0,d=null,g=1,x,m;const p=this,y=new Xc,M=new Xc,_=new Xt,A=new Xt,R=new Xt,C=new Xt,P=new Xt,w=new Xt,S=new I,L=new I,O=new I,q=new Yt,j=new se,tt=new se,Y=[],rt=new Wg,X=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=X,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=Le,this.info={render:{vertices:0,faces:0}},this.setQuality=function(et){switch(et){case"high":g=1;break;case"low":g=0;break}},this.setClearColor=function(et){w.set(et)},this.setPixelRatio=function(){},this.setSize=function(et,pt){s=et,r=pt,o=s/2,a=r/2,X.setAttribute("viewBox",-o+" "+-a+" "+s+" "+r),X.setAttribute("width",s),X.setAttribute("height",r),y.min.set(-o,-a),y.max.set(o,a)},this.getSize=function(){return{width:s,height:r}},this.setPrecision=function(et){d=et};function ft(){for(f=0;X.childNodes.length>0;)X.removeChild(X.childNodes[0])}function lt(et){return d!==null?et.toFixed(d):et}this.clear=function(){ft(),X.style.backgroundColor=w.getStyle(p.outputColorSpace)},this.render=function(et,pt){if(!(pt instanceof Oa)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}const D=et.background;D&&D.isColor?(ft(),X.style.backgroundColor=D.getStyle(p.outputColorSpace)):this.autoClear===!0&&this.clear(),p.info.render.vertices=0,p.info.render.faces=0,j.copy(pt.matrixWorldInverse),tt.multiplyMatrices(pt.projectionMatrix,j),t=rt.projectScene(et,pt,this.sortObjects,this.sortElements),e=t.elements,n=t.lights,q.getNormalMatrix(pt.matrixWorldInverse),Et(n),x="",m="";for(let E=0,B=e.length;E<B;E++){const k=e[E],z=k.material;if(!(z===void 0||z.opacity===0)){if(M.makeEmpty(),k instanceof ph)l=k,l.x*=o,l.y*=-a,Ot(l,k,z);else if(k instanceof dh)l=k.v1,h=k.v2,l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,M.setFromPoints([l.positionScreen,h.positionScreen]),y.intersectsBox(M)===!0&&te(l,h,z);else if(k instanceof fh){if(l=k.v1,h=k.v2,c=k.v3,l.positionScreen.z<-1||l.positionScreen.z>1||h.positionScreen.z<-1||h.positionScreen.z>1||c.positionScreen.z<-1||c.positionScreen.z>1)continue;l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,c.positionScreen.x*=o,c.positionScreen.y*=-a,this.overdraw>0&&(it(l.positionScreen,h.positionScreen,this.overdraw),it(h.positionScreen,c.positionScreen,this.overdraw),it(c.positionScreen,l.positionScreen,this.overdraw)),M.setFromPoints([l.positionScreen,h.positionScreen,c.positionScreen]),y.intersectsBox(M)===!0&&Zt(l,h,c,k,z)}}}$(),et.traverseVisible(function(E){if(E.isSVGObject){if(S.setFromMatrixPosition(E.matrixWorld),S.applyMatrix4(tt),S.z<-1||S.z>1)return;const B=S.x*o,k=-S.y*a,z=E.node;z.setAttribute("transform","translate("+B+","+k+")"),X.appendChild(z)}})};function Et(et){R.setRGB(0,0,0),C.setRGB(0,0,0),P.setRGB(0,0,0);for(let pt=0,D=et.length;pt<D;pt++){const E=et[pt],B=E.color;E.isAmbientLight?(R.r+=B.r,R.g+=B.g,R.b+=B.b):E.isDirectionalLight?(C.r+=B.r,C.g+=B.g,C.b+=B.b):E.isPointLight&&(P.r+=B.r,P.g+=B.g,P.b+=B.b)}}function kt(et,pt,D,E){for(let B=0,k=et.length;B<k;B++){const z=et[B],U=z.color;if(z.isDirectionalLight){const Z=S.setFromMatrixPosition(z.matrixWorld).normalize();let H=D.dot(Z);if(H<=0)continue;H*=z.intensity,E.r+=U.r*H,E.g+=U.g*H,E.b+=U.b*H}else if(z.isPointLight){const Z=S.setFromMatrixPosition(z.matrixWorld);let H=D.dot(S.subVectors(Z,pt).normalize());if(H<=0||(H*=z.distance==0?1:1-Math.min(pt.distanceTo(Z)/z.distance,1),H==0))continue;H*=z.intensity,E.r+=U.r*H,E.g+=U.g*H,E.b+=U.b*H}}}function Ot(et,pt,D){let E=pt.scale.x*o,B=pt.scale.y*a;D.isPointsMaterial&&(E*=D.size,B*=D.size);const k="M"+lt(et.x-E*.5)+","+lt(et.y-B*.5)+"h"+lt(E)+"v"+lt(B)+"h"+lt(-E)+"z";let z="";(D.isSpriteMaterial||D.isPointsMaterial)&&(z="fill:"+D.color.getStyle(p.outputColorSpace)+";fill-opacity:"+D.opacity),at(z,k)}function te(et,pt,D){const E="M"+lt(et.positionScreen.x)+","+lt(et.positionScreen.y)+"L"+lt(pt.positionScreen.x)+","+lt(pt.positionScreen.y);if(D.isLineBasicMaterial){let B="fill:none;stroke:"+D.color.getStyle(p.outputColorSpace)+";stroke-opacity:"+D.opacity+";stroke-width:"+D.linewidth+";stroke-linecap:"+D.linecap;D.isLineDashedMaterial&&(B=B+";stroke-dasharray:"+D.dashSize+","+D.gapSize),at(B,E)}}function Zt(et,pt,D,E,B){p.info.render.vertices+=3,p.info.render.faces++;const k="M"+lt(et.positionScreen.x)+","+lt(et.positionScreen.y)+"L"+lt(pt.positionScreen.x)+","+lt(pt.positionScreen.y)+"L"+lt(D.positionScreen.x)+","+lt(D.positionScreen.y)+"z";let z="";B.isMeshBasicMaterial?(_.copy(B.color),B.vertexColors&&_.multiply(E.color)):B.isMeshLambertMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial?(A.copy(B.color),B.vertexColors&&A.multiply(E.color),_.copy(R),L.copy(et.positionWorld).add(pt.positionWorld).add(D.positionWorld).divideScalar(3),kt(n,L,E.normalModel,_),_.multiply(A).add(B.emissive)):B.isMeshNormalMaterial&&(O.copy(E.normalModel).applyMatrix3(q).normalize(),_.setRGB(O.x,O.y,O.z).multiplyScalar(.5).addScalar(.5)),B.wireframe?z="fill:none;stroke:"+_.getStyle(p.outputColorSpace)+";stroke-opacity:"+B.opacity+";stroke-width:"+B.wireframeLinewidth+";stroke-linecap:"+B.wireframeLinecap+";stroke-linejoin:"+B.wireframeLinejoin:z="fill:"+_.getStyle(p.outputColorSpace)+";fill-opacity:"+B.opacity,at(z,k)}function it(et,pt,D){let E=pt.x-et.x,B=pt.y-et.y;const k=E*E+B*B;if(k===0)return;const z=D/Math.sqrt(k);E*=z,B*=z,pt.x+=E,pt.y+=B,et.x-=E,et.y-=B}function at(et,pt){m===et?x+=pt:($(),m=et,x=pt)}function $(){x&&(u=ut(f++),u.setAttribute("d",x),u.setAttribute("style",m),X.appendChild(u)),x="",m=""}function ut(et){return Y[et]==null&&(Y[et]=document.createElementNS("http://www.w3.org/2000/svg","path"),g==0&&Y[et].setAttribute("shape-rendering","crispEdges")),Y[et]}}}function qg(i){if(!(new URLSearchParams(location.search).get("renderer")==="software"))try{const n=new Vg({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});return n.setPixelRatio(Math.min(devicePixelRatio,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=Cl,n.outputColorSpace=Le,n.toneMapping=Pl,n.toneMappingExposure=1.1,n.setClearColor(0,0),{renderer:n,software:!1}}catch{}const e=new Xg;return e.setQuality("low"),e.domElement.id="game",e.domElement.setAttribute("role","img"),e.domElement.setAttribute("aria-label","Underwater driving world"),i.replaceWith(e.domElement),{renderer:e,software:!0}}function mh(i){const t=[];i.traverse(n=>{n.isInstancedMesh&&!n.userData.softwareCopies&&t.push(n)});const e=new se;for(const n of t){n.visible=!1;const s=[],r=new ee;r.position.copy(n.position),n.parent.add(r);for(let o=0;o<n.count;o++){const a=new qe(n.geometry,n.material);a.renderOrder=n.renderOrder,n.getMatrixAt(o,e),e.decompose(a.position,a.quaternion,a.scale),r.add(a),s.push(a)}n.userData.softwareCopies=s}}function li(i,t,e){e.updateMatrix(),i.setMatrixAt(t,e.matrix);const n=i.userData.softwareCopies?.[t];n&&(n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale),n.visible=e.scale.x>0)}const Xr=200411,Ja=2,Fe=2400,Ae=128,Te=[{id:"conch",name:"Conch Street",x:-440,z:420,color:"#eec46f",accent:16032557},{id:"commons",name:"Restaurant Commons",x:-60,z:30,color:"#d6bf78",accent:14387314},{id:"fields",name:"Jellyfish Fields",x:-600,z:-180,color:"#b8c992",accent:15570889},{id:"lagoon",name:"Goo Lagoon",x:400,z:450,color:"#84c9b7",accent:7590342},{id:"wreck",name:"Wreck Cove",x:650,z:-140,color:"#c8b3a0",accent:13667944},{id:"ridge",name:"Sand Mountain",x:140,z:-650,color:"#e9bb8b",accent:15582361},{id:"neptune",name:"Neptune Terrace",x:-360,z:-630,color:"#a9c9cf",accent:8640466}],gh=[{id:"town-loop",width:24,closed:!0,points:[[-440,440],[-60,650],[400,500],[730,310],[700,-140],[450,-460],[140,-720],[-360,-710],[-700,-420],[-720,-100],[-570,210]]},{id:"conch-commons",width:20,points:[[-440,440],[-400,250],[-250,140],[-60,30]]},{id:"fields-commons",width:20,points:[[-720,-100],[-540,-130],[-310,-110],[-60,30]]},{id:"lagoon-commons",width:22,points:[[400,500],[330,300],[140,210],[-60,30]]},{id:"wreck-commons",width:22,points:[[700,-140],[490,-160],[280,-50],[-60,30]]},{id:"ridge-commons",width:20,points:[[140,-720],[210,-450],[80,-200],[-60,30]]},{id:"palace-commons",width:20,points:[[-360,-710],[-300,-460],[-180,-250],[-60,30]]}],pn=[{id:"lantern-harbor",name:"Lantern Harbor",kind:"harbor",x:1040,z:620,radius:58,color:16765842},{id:"abyss-relay",name:"Abyss Relay",kind:"relay",x:1080,z:-500,radius:58,color:8379877},{id:"driftwood-camp",name:"Driftwood Research Camp",kind:"camp",x:-1060,z:-900,radius:58,color:12240895}];gh.push({id:"east-harbor",frontier:!0,width:22,points:[[730,310],[880,390],[1040,470],[1040,620]]},{id:"outer-coast",frontier:!0,width:22,points:[[1040,620],[1040,780],[1130,650],[1140,100],[1080,-330],[1080,-500]]},{id:"relay-link",frontier:!0,width:22,points:[[700,-140],[900,-190],[1080,-350],[1080,-500]]},{id:"western-expedition",frontier:!0,width:22,points:[[-700,-420],[-900,-480],[-1060,-700],[-1060,-900]]});const ks=[{id:"pineapple",type:"pineapple",x:-468,z:295,radius:21},{id:"squidward",type:"head",x:-386,z:350,radius:19},{id:"patrick",type:"rock",x:-335,z:390,radius:18},{id:"krusty",type:"krusty",x:-51,z:-85,radius:30},{id:"chum",type:"bucket",x:110,z:110,radius:25},{id:"goober",type:"goober",x:440,z:350,radius:32},{id:"wreck",type:"ship",x:765,z:-265,radius:35},{id:"castle",type:"castle",x:-400,z:-595,radius:45}],rs=[{id:"conch-hop",x:-480,z:470,width:16,length:25,height:5,heading:.15},{id:"fields-leap",x:-590,z:-255,width:20,length:34,height:9,heading:-.5},{id:"lagoon-jump",x:515,z:440,width:20,length:32,height:7,heading:-Math.PI/2},{id:"wreck-launch",x:660,z:-60,width:18,length:30,height:9,heading:Math.PI},{id:"ridge-flight",x:130,z:-595,width:22,length:38,height:13,heading:0},{id:"ridge-return",x:300,z:-630,width:20,length:36,height:11,heading:Math.PI/2},{id:"palace-rise",x:-470,z:-670,width:18,length:28,height:7,heading:Math.PI/2},{id:"commons-stunt",x:-140,z:55,width:16,length:24,height:6,heading:Math.PI/2},{id:"southern-dune",x:20,z:610,width:22,length:34,height:8,heading:-Math.PI/2}],Hs=[{id:"coral-grotto",name:"The coral grotto",x:-780,z:-340},{id:"pearl-garden",name:"The pearl garden",x:550,z:640},{id:"sunken-treasure",name:"Sunken treasure",x:800,z:-320},{id:"ridge-lookout",name:"The mountain lookout",x:310,z:-780},{id:"royal-garden",name:"The royal garden",x:-560,z:-780},{id:"kelp-arch",name:"The kelp arch",x:-760,z:290},{id:"sand-circle",name:"The sand circle",x:90,z:760}];function xh(i,t){let e=Te[0],n=1/0;for(const s of Te){const r=(i-s.x)**2+(t-s.z)**2;r<n&&(e=s,n=r)}return e}function Yg(i,t,e){const n=i-e.x,s=t-e.z,r=Math.cos(e.heading),o=Math.sin(e.heading),a=r*n-o*s,l=o*n+r*s;return Math.abs(a)<e.width/2+8&&l<e.length/2+30&&l>-e.length/2-230}function Lr(i="conch"){const t=Te.find(o=>o.id===i)??Te[0],e={conch:[-440,435,0],commons:[-60,90,0],fields:[-600,-130,Math.PI/2],lagoon:[400,510,0],wreck:[700,-100,0],ridge:[140,-740,Math.PI],neptune:[-360,-735,Math.PI]},[n,s,r]=e[t.id];return{x:n,z:s,heading:r}}const Kn=(i,t,e)=>i+(t-i)*e,Se=(i,t,e)=>Math.max(t,Math.min(e,i)),Vs=i=>i*i*(3-2*i);function Me(i,t,e=0){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(Xr+e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Ir(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=Vs(i-n),o=Vs(t-s);return Kn(Kn(Me(n,s,e),Me(n+1,s,e),r),Kn(Me(n,s+1,e),Me(n+1,s+1,e),r),o)*2-1}function Or(i,t){const e=43*Math.exp(-((i-140)**2/9e4+(t+650)**2/42e3)),n=22*Math.exp(-((i+360)**2+(t+620)**2)/85e3),s=22*Vs(Se((Math.max(Math.abs(i),Math.abs(t))-780)/120,0,1));return 3+Ir(i/230,t/230)*6+Ir(i/73,t/73,71)*2.5+Ir(i/24,t/24,19)*.55+e+n+s}function $g(i,t,e,n,s){const r=s*s,o=r*s;return[0,1].map(a=>.5*(2*t[a]+(-i[a]+e[a])*s+(2*i[a]-5*t[a]+4*e[a]-n[a])*r+(-i[a]+3*t[a]-3*e[a]+n[a])*o))}const Nn=gh.map(i=>{const t=i.points,e=t.length,n=[],s=l=>i.closed?t[(l+e)%e]:t[Se(l,0,e-1)],r=i.closed?e:e-1;for(let l=0;l<r;l++){const h=Math.ceil(Math.hypot(s(l+1)[0]-s(l)[0],s(l+1)[1]-s(l)[1])/9);for(let c=0;c<h;c++)n.push($g(s(l-1),s(l),s(l+1),s(l+2),c/h))}n.push(i.closed?n[0]:t[e-1]);let o=0;const a=n.map(([l,h],c)=>(c&&(o+=Math.hypot(l-n[c-1][0],h-n[c-1][1])),{x:l,z:h,y:Or(l,h),distance:o}));return{...i,nodes:a,length:o}}),Dr=new Map,Wi=64,_h=[];for(const i of Nn)for(let t=1;t<i.nodes.length;t++){const e=i.nodes[t-1],n=i.nodes[t],s={a:e,b:n,width:i.width,path:i.id};_h.push(s);for(let r=Math.floor((Math.min(e.x,n.x)-42)/Wi);r<=Math.floor((Math.max(e.x,n.x)+42)/Wi);r++)for(let o=Math.floor((Math.min(e.z,n.z)-42)/Wi);o<=Math.floor((Math.max(e.z,n.z)+42)/Wi);o++){const a=`${r},${o}`;Dr.has(a)||Dr.set(a,[]),Dr.get(a).push(s)}}function zn(i,t,e=!1){let n={distance:1/0,x:i,z:t,y:Or(i,t),width:20,heading:0};const s=e?_h:Dr.get(`${Math.floor(i/Wi)},${Math.floor(t/Wi)}`)??[];for(const r of s){const o=r.b.x-r.a.x,a=r.b.z-r.a.z,l=o*o+a*a,h=Se(((i-r.a.x)*o+(t-r.a.z)*a)/(l||1),0,1),c=r.a.x+o*h,u=r.a.z+a*h,f=Math.hypot(c-i,u-t);f<n.distance&&(n={distance:f,x:c,z:u,y:Kn(r.a.y,r.b.y,h),width:r.width,heading:Math.atan2(-o,-a)})}return n}function Xi(i,t){let e=Or(i,t);const n=zn(i,t);n.distance<n.width/2+20&&(e=Kn(n.y,e,Vs(Se((n.distance-n.width/2)/20,0,1))));for(const s of ks){const r=Math.hypot(i-s.x,t-s.z);r<s.radius+18&&(e=Kn(Or(s.x,s.z),e,Vs(Se((r-s.radius)/18,0,1))))}return e}function Gt(i,t){const e=Math.floor(i/4)*4,n=Math.floor(t/4)*4,s=(i-e)/4,r=(t-n)/4,o=Xi(e,n),a=Xi(e+4,n),l=Xi(e,n+4),h=Xi(e+4,n+4);return s+r<=1?o+(a-o)*s+(l-o)*r:h+(l-h)*(1-s)+(a-h)*(1-r)}function Za(i,t,e){const n=i-e.x,s=t-e.z,r=Math.cos(e.heading??0),o=Math.sin(e.heading??0),a=r*n-o*s,l=o*n+r*s;return Math.abs(a)>e.width/2||Math.abs(l)>e.length/2?null:e.baseY+e.height*(.5-l/e.length)}function vh(i,t){const e=xh(i,t),n=Ir(i/38,t/38,128)*.055;return{conch:[.86,.72,.43],commons:[.83,.73,.48],fields:[.64,.73,.5],lagoon:[.75,.79,.55],wreck:[.65,.65,.57],ridge:[.84,.65,.44],neptune:[.69,.76,.69]}[e.id].map(r=>Se(r+n,0,1))}function Jg(i,t,e=0){return Math.abs(i)<=Fe/2-e&&Math.abs(t)<=Fe/2-e}const Ka=[{id:"conch-yard",area:"conch",kind:"yard",x:-462,z:360,heading:0,label:"CONCH POST"},{id:"conch-corner",area:"conch",kind:"stop",x:-516,z:426,heading:.55,label:"CONCH STREET"},{id:"commons-market",area:"commons",kind:"market",x:-122,z:-43,heading:.25,label:"REEF MARKET"},{id:"commons-patio",area:"commons",kind:"patio",x:24,z:-25,heading:-.15},{id:"commons-stop",area:"commons",kind:"stop",x:-105,z:129,heading:.5,label:"RESTAURANT ROW"},{id:"fields-rest",area:"fields",kind:"patio",x:-646,z:-180,heading:.2},{id:"lagoon-patio",area:"lagoon",kind:"patio",x:461,z:408,heading:-.3},{id:"lagoon-stall",area:"lagoon",kind:"market",x:345,z:440,heading:-.1,label:"SHELL SNACKS"},{id:"lagoon-dock",area:"lagoon",kind:"dock",x:535,z:545,heading:.55,label:"LAGOON LANDING"},{id:"wreck-workshop",area:"wreck",kind:"workshop",x:641,z:-191,heading:.55,label:"BOAT REPAIR"},{id:"wreck-dock",area:"wreck",kind:"dock",x:757,z:-201,heading:.2,label:"COVE LANDING"},{id:"ridge-rest",area:"ridge",kind:"stop",x:87,z:-692,heading:-.2,label:"MOUNTAIN TRAIL"},{id:"palace-patio",area:"neptune",kind:"patio",x:-464,z:-585,heading:.2},{id:"palace-stall",area:"neptune",kind:"market",x:-305,z:-600,heading:-.2,label:"PEARL EXCHANGE"}];function Mh(i){return i.kind==="dock"?17:13}const Xe=[{id:"tide-garden",name:"Tidepool Gardens",kind:"pools",x:655,z:665,radius:38,bends:[[590,495],[610,555],[640,605]],color:7917256},{id:"salvage-yard",name:"Anchor Salvage Yard",kind:"yard",x:805,z:100,radius:35,bends:[],color:14131823},{id:"shell-ruins",name:"Old Shell Sanctuary",kind:"ruins",x:-450,z:-410,radius:40,bends:[[-340,-400],[-450,-460]],color:12169180}],Cs=Xe.map(i=>{const t=zn(i.x,i.z,!0),e=[[t.x,t.z],...i.bends,[i.x,i.z]],n=[];for(let r=1;r<e.length;r++){const o=e[r-1],a=e[r],l=Math.ceil(Math.hypot(a[0]-o[0],a[1]-o[1])/4);for(let h=0;h<l;h++){const c=h/l,u=o[0]+(a[0]-o[0])*c,f=o[1]+(a[1]-o[1])*c;n.push({x:u,z:f,y:Gt(u,f)})}}n.push({x:i.x,z:i.z,y:Gt(i.x,i.z)});let s=0;return n.forEach((r,o)=>{o&&(s+=Math.hypot(r.x-n[o-1].x,r.z-n[o-1].z)),r.distance=s}),{id:i.id,name:i.name,width:12,nodes:n,points:e,length:s}});function yh(i,t){let e=1/0;for(const n of Cs)for(let s=1;s<n.points.length;s++){const r=n.points[s-1],o=n.points[s],a=o[0]-r[0],l=o[1]-r[1],h=Math.max(0,Math.min(1,((i-r[0])*a+(t-r[1])*l)/(a*a+l*l||1)));e=Math.min(e,Math.hypot(i-r[0]-a*h,t-r[1]-l*h))}return e}function xl(i,t,e=1){const n=Math.max(0,Math.min(i.length,t));let s=1,r=i.nodes.length-1;for(;s<r;){const d=s+r>>1;i.nodes[d].distance<n?s=d+1:r=d}const o=i.nodes[s-1],a=i.nodes[s],l=(n-o.distance)/(a.distance-o.distance||1),h=a.x-o.x,c=a.z-o.z,u=Math.hypot(h,c)||1,f=(i.width/2+3)*e;return{x:o.x+h*l+c/u*f,z:o.z+c*l-h/u*f,heading:Math.atan2(h,c)}}const Zg=[...ks,...pn,...Xe,...Ka.map(i=>({...i,radius:Mh(i)-2}))].map(i=>({...i,road:zn(i.x,i.z,!0)}));function Kg(i,t){let e=0;for(const n of Zg){const s=n.road.x-n.x,r=n.road.z-n.z,o=Se(((i-n.x)*s+(t-n.z)*r)/(s*s+r*r||1),0,1),a=Math.hypot(i-n.x-s*o,t-n.z-r*o),l=Math.hypot(i-n.x,t-n.z);e=Math.max(e,Se((5-a)/2,0,1),Se((n.radius+7-l)/4,0,1))}return e}const jg=[.0802,.2423,.2582],Po=i=>i<=.0031308?i*12.92:1.055*i**(1/2.4)-.055;function Sh(i,t){const e=vh(i,t),n=zn(i,t),s=Se((n.width/2+1-n.distance)/2,0,1),r=.98+Me(Math.floor(i*2),Math.floor(t*2),51)*.04,o=Math.max(Kg(i,t),Se((7-yh(i,t))/2,0,1)),a=Se(1-Math.abs(n.distance-n.width/2)/3,0,1),l=Number.isFinite(n.distance)?Math.sin(n.distance*1.8)*.018:0;return e.map((h,c)=>{const u=Kn(h,[.63,.57,.4][c],o*.65);return Kn(u,jg[c]+l+a*.1,s)*r})}function Qg(i,t,e=128,n=65){const s=new Uint8Array(n*n*4);for(let r=0;r<n;r++)for(let o=0;o<n;o++){const a=Sh(i+o/(n-1)*e,t+r/(n-1)*e),l=(r*n+o)*4;s[l]=Math.round(Se(Po(a[0]),0,1)*255),s[l+1]=Math.round(Se(Po(a[1]),0,1)*255),s[l+2]=Math.round(Se(Po(a[2]),0,1)*255),s[l+3]=255}return{pixels:s,resolution:n}}const bh=[{id:"conch-water",kind:"tower",x:-550,z:360,radius:13,label:"CONCH WATER"},{id:"fields-observatory",kind:"observatory",x:-615,z:-340,radius:14,label:"JELLY WATCH"},{id:"commons-sign",kind:"billboard",x:30,z:-195,radius:12,label:"FRESH PATTIES"},{id:"lagoon-boardwalk",kind:"boardwalk",x:575,z:620,radius:33,label:"LAGOON WALK"},{id:"wreck-beacon",kind:"beacon",x:550,z:-290,radius:12,label:"COVE BEACON"},{id:"ridge-crane",kind:"crane",x:310,z:-550,radius:16,label:"SAND WORKS"},{id:"royal-fountain",kind:"fountain",x:-520,z:-565,radius:12,label:"PEARL COURT"}];function _l(i,t){return{x:(i+.15+Me(i,t,24)*.7)*18,z:(t+.15+Me(i,t,25)*.7)*18,priority:Me(i,t,26)}}function tx(i,t){const e=_l(i,t);for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(!n&&!s)continue;const r=_l(i+n,t+s);if(r.priority<e.priority&&Math.hypot(e.x-r.x,e.z-r.z)<12)return null}return e}function vl(i,t,e=32){const n=(e+1)**2,s=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n*2),a=new Uint32Array(e*e*6),l=i*Ae,h=t*Ae,c=Ae/e;for(let g=0;g<=e;g++)for(let x=0;x<=e;x++){const m=(g*(e+1)+x)*3,p=l+x*c,y=h+g*c;o.set([p/28,y/28],m/3*2),s.set([x*c,Xi(p,y),g*c],m),r.set(vh(p,y),m)}let u=0;for(let g=0;g<e;g++)for(let x=0;x<e;x++){const m=g*(e+1)+x,p=m+1,y=m+e+1,M=y+1;a.set([m,y,p,p,y,M],u),u+=6}const f=[];for(let g=Math.floor(l/18);g<=Math.floor((l+Ae)/18);g++)for(let x=Math.floor(h/18);x<=Math.floor((h+Ae)/18);x++){const m=tx(g,x);if(!m||m.x<l||m.x>=l+Ae||m.z<h||m.z>=h+Ae||!Jg(m.x,m.z,15))continue;const p=zn(m.x,m.z);if(pn.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+8)||rs.some(A=>Yg(m.x,m.z,A))||Hs.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<23)||Ka.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<Mh(A)+6)||bh.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+8)||Xe.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+7)||yh(m.x,m.z)<14||p.distance<p.width/2+9||ks.some(A=>Math.hypot(m.x-A.x,m.z-A.z)<A.radius+8))continue;const y=xh(m.x,m.z),M=Me(g,x,39),_=y.id==="wreck"?M<.45?"rock":"coral":y.id==="fields"?M<.55?"coral":"kelp":M<.22?"rock":M<.56?"kelp":"coral";_!=="rock"&&Me(g,x,903)>=.35||f.push({id:`flora:${g}:${x}`,x:m.x,y:Gt(m.x,m.z),z:m.z,type:_,rotation:Me(g,x,40)*Math.PI*2,scale:.7+Me(g,x,41)*1.8,color:Math.floor(Me(g,x,42)*3)})}const d=Qg(l,h);return{cx:i,cz:t,segments:e,positions:s,colors:r,uv:o,indices:a,props:f,paint:d.pixels,paintSize:d.resolution}}function Ml(i,t=4){const e=[];for(let a=1;a<i.nodes.length;a++){const l=i.nodes[a-1],h=i.nodes[a],c=Math.ceil(Math.hypot(h.x-l.x,h.z-l.z)/t);for(let u=0;u<c;u++){const f=u/c;e.push({x:l.x+(h.x-l.x)*f,z:l.z+(h.z-l.z)*f})}}e.push(i.nodes.at(-1));const n=Math.ceil(i.width/t),s=[],r=[];e.forEach((a,l)=>{const h=e[Math.max(0,l-1)],c=e[Math.min(e.length-1,l+1)],u=c.x-h.x,f=c.z-h.z,d=Math.hypot(u,f)||1;for(let g=0;g<=n;g++){const x=(g/n-.5)*i.width,m=a.x+f/d*x,p=a.z-u/d*x;s.push(m,Gt(m,p)+.25,p)}if(l)for(let g=0;g<n;g++){const x=(l-1)*(n+1)+g,m=x+n+1;r.push(x,m,x+1,x+1,m,m+1)}});const o=new ye;return o.setAttribute("position",new ne(s,3)),o.setIndex(r),o.computeVertexNormals(),o.computeBoundingSphere(),o}class yl{constructor(t=48){this.size=t,this.cells=new Map}key(t,e){return`${Math.floor(t/this.size)},${Math.floor(e/this.size)}`}add(t){const e=[],n=Math.max(t.w??0,t.d??0,t.radius??0)/2;for(let s=Math.floor((t.x-n)/this.size);s<=Math.floor((t.x+n)/this.size);s++)for(let r=Math.floor((t.z-n)/this.size);r<=Math.floor((t.z+n)/this.size);r++){const o=`${s},${r}`;this.cells.has(o)||this.cells.set(o,new Set),this.cells.get(o).add(t),e.push(o)}t.hashKeys=e}remove(t){for(const e of t.hashKeys??[]){const n=this.cells.get(e);n?.delete(t),n?.size||this.cells.delete(e)}}query(t,e,n=8){const s=new Set;for(let r=Math.floor((t-n)/this.size);r<=Math.floor((t+n)/this.size);r++)for(let o=Math.floor((e-n)/this.size);o<=Math.floor((e+n)/this.size);o++)for(const a of this.cells.get(`${r},${o}`)??[])s.add(a);return s}}function wa(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ye;let h=0;for(let c=0;c<i.length;++c){const u=i[c];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,c),h+=d}}if(e){let c=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(u)}for(const c in r){const u=Sl(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[c].length;++x)d.push(o[c][x][f]);const g=Sl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Sl(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const c=i[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new Ue(o,e,n);let l=0;for(let h=0;h<i.length;++h){const c=i[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=c.count;f<d;f++)for(let g=0;g<e;g++){const x=c.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}const Lo=new Map,Io=new Map,Eh={value:0},Ie=Math.PI*2,ex=i=>Math.min(1,Math.max(0,i)),nx=(i,t,e=0)=>{let n=Math.imul(i+e,374761393)^Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296};function ix(i,t,e){t=(t%1+1)%1,e=(e%1+1)%1;const n=Math.sin(Ie*(t*71+e*53))*.015,s=Math.sin(Ie*t*3)*Math.cos(Ie*e*4);let r,o;if(i==="wood"){const a=t*6,l=Math.min(a%1,1-a%1)<.023,h=Math.sin(Ie*(t*58+Math.sin(e*Ie*2)*.22)),c=Math.sin(Ie*(t*7+Math.sin(e*Ie)*.35));r=l?.15:.56+h*.045+c*.03,o=l?.48:.91+h*.045+c*.04+s*.04}else if(i==="stone"){const a=Math.floor(e*6),l=(t*5+a%2*.5)%1,h=Math.min(l,1-l)<.018||e*6%1<.035;r=h?.27:.6+s*.055+n,o=h?.68:.92+s*.08+n}else if(i==="metal"){const a=Math.sin(Ie*t*115)*Math.sin(Ie*e*3),l=Math.max(0,s-.3);r=.5+a*.012+n*.3,o=.95+a*.025-l*.13}else if(i==="bun"){const a=Math.sin(Ie*t*47)*Math.sin(Ie*e*41);r=.5+a*.038+s*.02,o=.96+s*.055+a*.018}else if(i==="rubber"){const a=Math.sin(Ie*(t*18+Math.sin(e*Ie*8)*.18));r=a>.4?.66:.39,o=a>.4?1:.75}else if(i==="cloth"){const a=Math.sin(Ie*t*90)*Math.sin(Ie*e*90);r=.5+a*.015,o=.96+a*.035+s*.02}else{const a=Math.sin(Ie*e*16+Math.sin(Ie*t*4)*1.7);r=.5+a*.12+n*.2,o=.94+a*.04+s*.02}return{height:r,shade:o}}function wh(i,t=512){const e=`${i}:${t}`;if(Lo.has(e))return Lo.get(e);const n=new Uint8Array(t*t*4),s=new Uint8Array(t*t*4),r=new Float32Array(t*t);for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=h*t+c,f=ix(i,c/t,h/t);r[u]=f.height;const d=Math.round(ex(f.shade+(nx(c,h,57)-.5)*.045)*255);n.set([d,d,d,255],u*4)}const o=(h,c)=>r[(c+t)%t*t+(h+t)%t];for(let h=0;h<t;h++)for(let c=0;c<t;c++){const u=(o(c+1,h)-o(c-1,h))*2,f=(o(c,h+1)-o(c,h-1))*2,d=Math.hypot(u,f,1),g=(h*t+c)*4;s.set([Math.round((-u/d*.5+.5)*255),Math.round((-f/d*.5+.5)*255),Math.round((1/d*.5+.5)*255),255],g)}const a=(h,c)=>{const u=new ka(h,t,t,tn);return u.colorSpace=c,u.wrapS=u.wrapT=Ps,u.magFilter=Qe,u.minFilter=$n,u.generateMipmaps=!0,u.anisotropy=4,u.needsUpdate=!0,u},l={color:a(n,Le),normal:a(s,Dn)};return Lo.set(e,l),l}function Th(i,t=!1){const e=i.onBeforeCompile;return i.onBeforeCompile=(n,s)=>{e.call(i,n,s),n.uniforms.waterTime=Eh,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
       #include <opaque_fragment>`)},i.customProgramCacheKey=()=>`water-surface-v2:${t}`,i}function sx(i){Eh.value=i}function $t(i,t=16777215){const e=`${i}:${t}`;if(Io.has(e))return Io.get(e);const n=wh(i),s={wood:[13,.2],stone:[5,.42],metal:[55,.16],bun:[10,.24],rubber:[4,.38],cloth:[3,.18],sand:[5,.35]}[i]??[10,.2],r=new Gr({color:t,map:n.color,normalMap:n.normal,normalScale:new gt(s[1],s[1]),shininess:s[0],specular:i==="metal"?7642265:2370342,side:Ve});return r.userData.surface=i,Th(r),Io.set(e,r),r}const Do=new Map;function un(i,t=!1,e=1){const n=`${i}:${t}:${e}`;return Do.has(n)||Do.set(n,new(t?Ys:Gr)({color:i,transparent:e<1,opacity:e,side:Ve,...t?{}:{shininess:14,specular:3161142}})),Do.get(n)}const rx=new yi(1,1,1),ox=new gn(1,20,12),ax=new ti(1,1,1,16);function jt(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){const h=new qe(t,typeof e=="number"?un(e):e);return h.position.set(n,s,r),h.scale.set(o,a,l),h.castShadow=!0,h.receiveShadow=!0,i.add(h),h}function qr(i,t=null){const e=new Set([11434323,8873281,14533514,8149318,10647889,13215092,9465685,6442310,8942677,10845528,10976592]),n=new Set([8890542,5270393,12437176,9214885,15259289,9021870,7639700,5468020,4812400,7970199,15262396]),s=new Set([15246664,16039003]);return i.traverse(r=>{if(!r.isMesh||!r.material.color||r.material.map||r.material.transparent)return;const o=r.material.color.getHex(),a=s.has(o)?"bun":e.has(o)?"wood":n.has(o)?"metal":[2503747,3491417,3427154].includes(o)?"rubber":t;a&&(r.material=$t(a,o))}),i}function dn(i){i.updateMatrixWorld(!0);const t=i.matrixWorld.clone().invert(),e=new Map;i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;const s=n.material.uuid;e.has(s)||e.set(s,{material:n.material,geometries:[]});const r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();r.applyMatrix4(new se().multiplyMatrices(t,n.matrixWorld)),e.get(s).geometries.push(r)}),i.clear();for(const{material:n,geometries:s}of e.values()){const r=wa(s);s.forEach(o=>o.dispose()),r&&jt(i,r,n)}return i}const st=(i,t,e,n,s,r,o,a)=>jt(i,rx,a,t,e,n,s,r,o),Pt=(i,t,e,n,s,r,o,a)=>jt(i,ox,a,t,e,n,s,r,o),Ct=(i,t,e,n,s,r,o)=>jt(i,ax,o,t,e,n,s,r,s);function le(i,t,e,n,s,r,o){return jt(i,new hs(s,r,5,20),o,t,e,n)}function Uo(i,t,e,n=1){return jt(i,new qa(t.map(([s,r])=>new gt(s,r)),24),e,0,0,0,1,1,n)}function qi(i,t,e,n,s=.2){Pt(i,t,e,n,s,s*1.14,s*.4,16777200),Pt(i,t,e,n-s*.35,s*.48,s*.56,s*.2,1849414)}function cx(){const i=new ee;i.name="Hamburger wagon",Uo(i,[[0,.58],[1.85,.58],[2.22,.74],[2.26,.95],[2.08,1.09],[0,1.09]],15246664,1.14),Uo(i,[[0,1.08],[2.12,1.08],[2.25,1.16],[2.21,1.39],[2.07,1.46],[0,1.46]],7814183,1.14);const t=new cs;for(let c=0;c<=64;c++){const u=c/64*Math.PI*2,f=2.24+Math.sin(u*11)*.16,d=Math.cos(u)*f,g=Math.sin(u)*f*1.13;c?t.lineTo(d,g):t.moveTo(d,g)}const e=jt(i,new $s(t),7780404,0,1.49,0);e.rotation.x=-Math.PI/2;for(let c=0;c<8;c++){const u=c*Math.PI/4;Pt(i,Math.cos(u)*2.15,1.49,Math.sin(u)*2.42,.38,.11,.33,c%2?6858802:10143043)}const n=st(i,0,1.54,0,3.62,.12,4.04,16765256);n.rotation.y=.21,Uo(i,[[2.23,1.65],[2.24,1.85],[2.12,2.18],[1.89,2.49],[1.47,2.66],[1.22,2.63],[1.18,2.4],[1.37,2.12],[1.65,1.85]],16039003,1.13);for(let c=0;c<42;c++){const u=c*2.39996,f=1.42+c%6*.125,d=2.67-(f-1.43)*.72,g=Pt(i,Math.cos(u)*f,d,Math.sin(u)*f*1.13,.095,.032,.045,16770723);g.rotation.y=u+.8}const s=[];for(const c of[-2.23,2.23])for(const u of[-1.37,1.37]){const f=new ee;f.position.set(c,.73,u),i.add(f);const d=Ct(f,0,0,0,.73,.48,2503747);d.rotation.z=Math.PI/2;const g=Ct(f,Math.sign(c)*.27,0,0,.38,.08,15262396);g.rotation.z=Math.PI/2;const x=Ct(f,Math.sign(c)*.32,0,0,.17,.1,13332795);x.rotation.z=Math.PI/2,s.push({mesh:f,front:u<0})}for(const c of[-.65,.65])st(i,c,1.77,.1,.78,.18,.9,9980728),st(i,c,2.11,.49,.78,.72,.18,11228218);const r=new ee;r.position.set(-.64,2.16,.1),i.add(r),st(r,0,.61,0,.89,.89,.39,16045896),st(r,0,.09,0,.86,.19,.41,16777215),st(r,0,-.09,0,.86,.19,.43,9528370),qi(r,-.21,.72,-.23,.18),qi(r,.21,.72,-.23,.18),Pt(r,0,.51,-.33,.09,.12,.15,16108868),st(r,0,.25,-.24,.13,.17,.04,13978937);for(const c of[-.31,.3])Pt(r,c,.25,-.2,.07,.07,.03,14255415),Pt(r,c,.89,-.2,.055,.045,.02,13216813);st(r,-.1,.38,-.22,.09,.09,.05,16777215),st(r,.1,.38,-.22,.09,.09,.05,16777215);const o=new ee;o.position.set(.61,2.09,.13),i.add(o),Pt(o,0,.31,0,.48,.54,.28,15702173),jt(o,new an(.32,.86,10),15702173,0,.86,0,1,1,.86),qi(o,-.11,.71,-.27,.11),qi(o,.11,.71,-.27,.11),Pt(o,-.45,.3,0,.29,.13,.17,15702173),Pt(o,.45,.3,0,.29,.13,.17,15702173),st(o,0,-.03,0,.72,.27,.47,9549910);const a=le(i,-.64,2.16,-.56,.31,.05,5719348);a.rotation.x=-.62;for(const c of[-1.45,1.45])Pt(i,c,1.24,-2.45,.28,.22,.12,16773303);Ct(i,1.54,3.02,1.68,.045,2.65,10910265);const l=st(i,1.76,4.06,1.68,.85,.34,.11,8239682);l.rotation.z=-.2;const h=new ee;h.position.set(0,1.02,2.73),i.add(h);for(let c=0;c<3;c++){const u=st(h,0,.3,0,.13,.77,.11,15065004);u.rotation.z=c*Math.PI*2/3}return Pt(h,0,0,.1,.17,.17,.14,13335616),i.userData={wheels:s,propeller:h},qr(i)}function be(i,t,e,n,s,r=20,o="#bf4e43"){if(typeof document>"u")return;const a=document.createElement("canvas");a.width=1024,a.height=256;const l=a.getContext("2d");l.fillStyle=o,l.fillRect(0,0,1024,256),l.strokeStyle="#fff1bd",l.lineWidth=12,l.strokeRect(16,16,992,224),l.strokeStyle="#ffffff35",l.lineWidth=2,l.strokeRect(29,29,966,198),l.fillStyle="#fff3cd",l.textAlign="center",l.textBaseline="middle",l.shadowColor="#182d36",l.shadowBlur=3,l.shadowOffsetY=3,l.font="bold 84px sans-serif",l.fillText(t,512,135,932);const h=new $l(a);h.colorSpace=Le,h.anisotropy=4;const c=new Gr({map:h,side:Ve,shininess:10});jt(i,new ls(r,r/4),c,e,n,s)}function Es(i,t,e,n,s=2.2){le(i,t,e,n,s,.3,$t("metal",15259289));const r=Ct(i,t,e,n-.08,s-.25,.13,7127490);r.rotation.x=Math.PI/2;const o=Ct(i,t,e,n+.01,s*.56,.14,2583164);o.rotation.x=Math.PI/2,Pt(i,t-s*.25,e+s*.27,n+.1,s*.14,s*.26,.035,13300187)}function Ah(i,t,e,n,s,r,o){Ct(i,t,e,n,s,r,o),le(i,t,e+r/2,n,s+.08,.17,o).rotation.x=Math.PI/2}function lx(i){const t=new ee;if(t.name=i,i==="pineapple"){Pt(t,0,12,0,10.8,14,10.3,15309364);for(let e=0;e<9;e++)for(let n=0;n<12;n++){const s=3+e*2.45,r=n*Math.PI/6+e%2*Math.PI/12,o=10.5*Math.sqrt(Math.max(.05,1-((s-12)/14)**2)),a=st(t,Math.sin(r)*o,s,Math.cos(r)*o,1.8,.16,.21,16169547);a.rotation.y=r,a.rotation.z=(n%2?1:-1)*.6}for(let e=0;e<11;e++){const n=e*Math.PI*2/11,s=new cs;s.moveTo(-1.2,0),s.quadraticCurveTo(-2.2,5,0,13),s.quadraticCurveTo(2.6,5,1.2,0),s.closePath();const r=jt(t,new $s(s),e%2?4560204:7648843,Math.sin(n)*2,24,Math.cos(n)*2);r.rotation.y=n,r.rotation.x=.3+e%3*.18}Pt(t,0,3,10.1,2.6,3.4,.5,6066846),le(t,0,3,10.7,2.1,.28,13095594),st(t,0,3,10.8,.22,4,.12,11258311),st(t,0,3,10.8,4,.22,.12,11258311),Es(t,-5.5,11,8.8,2),Es(t,5,18,8.1,1.8),Ah(t,9,17,1,.8,6,9021870);for(let e=11;e<25;e+=3)st(t,0,.15,e,7,.3,2.6,14930854)}else if(i==="head"){Pt(t,0,10,0,8.9,13,7.5,6917275),st(t,0,8,5.9,9,15,2.4,6983070);for(const e of[-3.1,3.1])Pt(t,e,15,6.7,2.5,1.65,.9,4550272),st(t,e,17.1,7.1,5.4,1.2,2.5,7708331),Es(t,e,15,7.6,1.5);st(t,0,11.4,8.2,2.3,8.8,4.6,8298925),Pt(t,0,3,7.3,2.2,3.2,.5,3561067),st(t,0,21,0,12.4,1.4,12,9416371)}else if(i==="rock")jt(t,new gn(1,18,8,0,Math.PI*2,0,Math.PI/2),9861753,0,0,0,13,8,12),Ct(t,0,.2,0,14,.4,13614993),st(t,0,.5,14,2.5,.5,7,11112829),Pt(t,-6,.2,14,1.4,.3,1,14993541);else if(i==="krusty"){st(t,0,5,0,32,10,23,11434323);const e=jt(t,new ti(1,1,1,18,1,!1,0,Math.PI),8873281,0,10,0,15,35,15);e.rotation.z=Math.PI/2;for(let n=-15;n<=15;n+=5)st(t,n,5,12,.8,10,.9,14533514),st(t,n,5,-12,.8,10,.9,14533514);for(const n of[-10,10])st(t,n,5.6,12.2,7.9,6.7,.2,9225915),st(t,n,5.6,12.5,.24,6.7,.22,14997158),st(t,n,5.6,12.5,7.9,.24,.22,14997158);st(t,0,3.5,12.3,4.2,7,.4,4955034),be(t,"KRUSTY KRAB",0,12.5,14,22,"#8b523d"),Ct(t,-25,12,10,.6,24,14469771),Pt(t,-25,24,10,6.7,4,1.4,14922673),be(t,"KRAB",-25,24,11.5,9,"#b76c76");for(let n=0;n<5;n++){const s=st(t,-12+n*6,18.5,6,2.6,2.4,.12,[15978586,13661023,6463166,7908492,15324585][n]);s.rotation.z=.15}}else if(i==="bucket"){jt(t,new ti(12,10,20,20),8890542,0,10,0),Ct(t,0,.6,0,10.6,1.2,5270393);for(const n of[1,19.3])le(t,0,n,0,n<2?10.7:12.3,.6,12437176).rotation.x=Math.PI/2;const e=jt(t,new hs(14,.65,6,24,Math.PI),9214885,0,19,0);e.rotation.z=0,st(t,0,4,10.8,5.7,8,.4,3362406),be(t,"CHUM BUCKET",0,14,11.8,19,"#9c463c")}else if(i==="goober"){Pt(t,0,7,0,24,8,18,9856135),st(t,0,6,13,24,12,1,14919080);for(const n of[-8,0,8])Pt(t,n,5,14,3.2,4.7,.5,7258306);be(t,"GOOFY GOOBER",0,13,17,27,"#7e4276");const e=jt(t,new an(5,15,12),13803110,0,22,-2);e.rotation.z=Math.PI,Pt(t,0,31,-2,7,7,6,16105675),Pt(t,-4,29,-2,4,4,4,16049340),Pt(t,4,29,-2,4,4,4,10253400),Pt(t,0,37,-2,1.7,1.8,1.7,13849443)}else if(i==="ship"){const e=new ee;e.rotation.z=-.12,t.add(e),Pt(e,0,6,0,18,10,31,8149318),st(e,0,12,0,29,1.2,51,10647889);for(let n=-26;n<28;n+=4)st(e,0,13,n,29,.25,.4,13215092);st(e,0,21,-9,22,16,23,9465685),st(e,0,30,-9,27,1.7,28,6442310);for(const n of[-8,0,8])Es(e,n,23,3,2.7);Ct(e,0,32,-20,1.2,20,8942677),st(e,0,39,-20,18,1,1,8942677);for(const n of[-17,17])for(const s of[-17,0,17]){const r=le(e,n,8,s,3.2,.9,3427154);r.rotation.y=Math.PI/2}be(e,"THUG TUG",0,18,6,20,"#654437")}else if(i==="castle"){st(t,0,8,0,48,16,24,8502709),st(t,0,18,0,34,6,22,13099211);for(const e of[-26,26])for(const n of[-12,12]){Ct(t,e,16,n,7,32,10014660),Ct(t,e,32,n,8.2,2,14017737),jt(t,new an(8.5,14,8),7708604,e,40,n),Pt(t,e,48,n,1.4,1.4,1.4,16177539);for(let s=0;s<6;s++){const r=s*Math.PI/3;st(t,e+Math.cos(r)*7.2,34,n+Math.sin(r)*7.2,2.4,4,2.4,13099211)}}Pt(t,0,6,13,5,7,.5,4033428),be(t,"NEPTUNE",0,24,13,25,"#407e8f"),Ct(t,0,36,0,.45,19,14927215);for(const e of[-4,0,4])Ct(t,e,44,0,.45,7,15980416),jt(t,new an(.8,3,6),15980416,e,49,0);st(t,0,40,0,9,.8,.8,15980416);for(let e=0;e<4;e++)st(t,0,.6+e*.6,17-e*1.5,19,1.2,3,12438446)}return qr(t,["head","rock","castle"].includes(i)?"stone":null),dn(t)}function hx(i=0){const t=new ee,n=[12289453,8435133,14396035,9745816][i%4];Ct(t,0,5,0,5,10,n),Pt(t,0,10,0,5.3,1.8,5.3,13290152);for(const s of[1,9])le(t,0,s,0,5.1,.2,12174243).rotation.x=Math.PI/2;return Es(t,-2,6,4.6,1.25),Pt(t,1.8,2,4.8,1.3,2.2,.25,4286583),Ah(t,3,13,-1,.5,6,7639700),st(t,1.8,.18,6,3.3,.35,2.2,$t("stone",12765605)),Pt(t,2.35,2,5.1,.1,.1,.08,$t("metal",14469005)),be(t,String(101+i),-2.4,3.5,4.9,1.6,"#526d72"),dn(qr(t,"metal"))}function Er(i=15904375){const t=new ee;Pt(t,0,1.75,0,.6,.95,.42,i),st(t,0,.65,0,.8,.6,.5,7441290),qi(t,-.18,2.05,-.39,.18),qi(t,.18,2.05,-.39,.18),Pt(t,0,1.62,-.47,.2,.11,.13,10775917);const e=[],n=[];for(const o of[-.59,.59]){const a=new ee;a.position.set(o,1.65,0),t.add(a),Pt(a,0,-.3,0,.2,.44,.14,i),Pt(a,0,-.65,-.07,.18,.17,.13,i),e.push(a)}for(const o of[-.24,.24]){const a=new ee;a.position.set(o,.65,0),t.add(a),Ct(a,0,-.3,0,.13,.6,i),Pt(a,0,-.52,-.1,.22,.15,.36,4476517),n.push(a)}const s=new cs;s.moveTo(0,0),s.lineTo(.6,.35),s.lineTo(0,.65),s.closePath();const r=jt(t,new $s(s),i,0,1.25,.35);r.rotation.y=Math.PI/2;for(const o of[-.18,.18])st(t,o,1.12,-.42,.24,.1,.035,15656122);return st(t,0,.88,-.28,.78,.08,.05,5073259),t.userData={arms:e,legs:n},t}function ux(i=10980025){const t=new ee;Pt(t,0,1,0,1.7,.8,2.9,i),st(t,0,1.4,0,2.5,.2,3.5,14410168),st(t,0,2.1,.3,1.7,1.1,1.5,i),st(t,0,2,-1,2.2,1.2,.13,9688274);for(const e of[-1.5,1.5])for(const n of[-1.4,1.4]){const s=Ct(t,e,.55,n,.55,.33,3491417);s.rotation.z=Math.PI/2}return t}function fx(i=15507399){const t=new ee;jt(t,new gn(1,10,5,0,Math.PI*2,0,Math.PI/2),un(i,!1,.8),0,0,0,2,1.7,2),le(t,0,0,0,1.9,.09,i).rotation.x=Math.PI/2;for(let e=0;e<5;e++){const n=e*Math.PI*2/5,s=Ct(t,Math.cos(n)*1.2,-1.4,Math.sin(n)*1.2,.1,2.8,i);s.rotation.z=Math.sin(n)*.18}return t}const dx=new hs(.96,.07,5,20);function px(){const i=new ee;Ct(i,0,1,0,.95,2,10845528);for(const t of[.3,1.65])jt(i,dx,5468020,0,t,0).rotation.x=Math.PI/2;return qr(i)}function mx(){const i=new cs;return i.moveTo(-.85,0),i.lineTo(-1,1.1),i.lineTo(-.48,.72),i.lineTo(0,1.43),i.lineTo(.48,.72),i.lineTo(1,1.1),i.lineTo(.85,0),i.closePath(),new Xa(i,{depth:.24,bevelEnabled:!1})}function gx(){const i=[];for(const[s,r,o,a,l]of[[0,2.5,0,5,0],[-1,3,0,3,.7],[1.1,3.8,0,3,-.65],[0,4.1,.8,3,.2]]){const h=new ti(.38,.55,a,6);h.rotateZ(l),h.translate(s,r,o),i.push(h);const c=new gn(.42,6,4);c.translate(s-Math.sin(l)*a/2,r+Math.cos(l)*a/2,o),i.push(c)}const t=wa(i);i.forEach(s=>s.dispose());const e=[];for(let s=0;s<3;s++){const r=[];for(let a=0;a<5;a++)r.push(new I(Math.sin(a*.8+s)*.6+s*.35,a*2,Math.cos(a+s)*.3));const o=new Vr(new Wa(r),10,.15,3,!1);e.push(o);for(let a=1;a<5;a++){const l=new gn(1,6,4);l.scale(.38,1.35,.13),l.rotateZ((a%2?1:-1)*.55),l.translate(r[a].x+(a%2?.45:-.45),r[a].y,r[a].z),e.push(l)}}const n=wa(e);return e.forEach(s=>s.dispose()),{coral:t,kelp:n,rock:new Bs(2.4,0)}}function bl(i=12754123,t=15,e=13){const n=new ee,s=jt(n,new hs(t/2,2.2,6,12,Math.PI),i,0,e-t/2,0);s.scale.y=e/(t/2);for(const r of[-t/2,t/2])Pt(n,r,2,0,3.7,3.5,3.7,i);return n}let Xn=null;function xx(){if(Xn||typeof document>"u")return Xn;const i=512,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i);for(let s=0;s<i;s++)for(let r=0;r<i;r++){const o=Math.sin(s/i*Math.PI*32+Math.sin(r/i*Math.PI*4)*1.7),a=Me(r,s,43),l=Math.round(220+o*10+(a-.5)*26),h=(s*i+r)*4;n.data.set([l,l,l,255],h)}return e.putImageData(n,0,0),Xn=new $l(t),Xn.colorSpace=Le,Xn.wrapS=Xn.wrapT=Ps,Xn.anisotropy=4,Xn}function _x(i){const t=wh("sand"),e=new Gr({map:i,normalMap:t.normal,normalScale:new gt(.4,.4),shininess:5,specular:1582371});return e.onBeforeCompile=n=>{n.uniforms.seafloorDetail={value:t.color},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 seafloorUV;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
seafloorUV = (modelMatrix * vec4(position, 1.0)).xz / 12.0;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D seafloorDetail;
varying vec2 seafloorUV;`),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb *= mix(vec3(0.82), vec3(1.16), texture2D(seafloorDetail, seafloorUV).rgb);`)},Th(e,!0)}const je=$t("wood",12687971),on=$t("metal",5274749);$t("stone",12110001);const Ki=$t("cloth",13876613);function Bi(i,t,e,n,s=1.7){st(i,t,e+s/2,n,s,s,s,je);for(const o of[.2,s-.2])st(i,t,e+o,n+s/2+.02,s,.15,.12,on);const r=st(i,t,e+s/2,n+s/2+.08,.13,s*1.22,.09,je);r.rotation.z=.7}function vx(i,t,e){st(i,t,1.8,e,5,.26,3,je);for(const n of[-1.8,1.8])st(i,t+n,.9,e,.2,1.8,2.4,on),st(i,t+n,.6,e,.3,.22,4.6,je);for(const n of[-1.8,1.8])st(i,t,1.05,e+n,5.2,.22,.8,je);for(const n of[-.65,.65])Ct(i,t+n,2.07,e,.19,.32,$t("metal",13295037))}function Mx(i,t,e,n){Ct(i,t,3.5,e,.09,7,on);const s=jt(i,new an(4.6,1.5,12,1,!0),$t("cloth",n),t,6.65,e);s.rotation.y=Math.PI/12,le(i,t,5.9,e,4.6,.08,Ki).rotation.x=Math.PI/2;for(const r of[0,Math.PI/2,Math.PI,Math.PI*1.5]){const o=st(i,t+Math.cos(r)*2.2,6.28,e+Math.sin(r)*2.2,4.4,.045,.055,Ki);o.rotation.y=-r,o.rotation.z=.14}}function El(i,t,e,n=2){const s=new Wa([new I(t[0],n,t[1]),new I((t[0]+e[0])/2,n-.45,(t[1]+e[1])/2),new I(e[0],n,e[1])]);jt(i,new Vr(s,10,.065,5,!1),Ki)}const yx={market:[16,12,8],patio:[18,13,8],yard:[12,9,6],dock:[13,24,5],workshop:[16,14,7],stop:[13,9,8]};function Sx(i,t=""){const e=new ee;if(e.name=i,i==="market"){for(const s of[-5.5,5.5])for(const r of[-3.5,3.5])Ct(e,s,3.4,r,.16,6.8,je);const n=jt(e,new ti(1,1,1,14,1,!0,0,Math.PI),$t("cloth",12881265),0,6.7,0,6.8,8.4,2.1);n.rotation.z=Math.PI/2,st(e,0,2.1,0,11.7,.28,3.3,je),st(e,0,1,1.4,11.4,2,.15,je);for(const s of[-4,0,4]){Bi(e,s,0,-3.4,1.5);for(let r=0;r<5;r++)Pt(e,s+(r%3-1)*.55,2.55,.2+r%2*.5,.36,.3,.36,[15448933,13601142,9680796][Math.abs(s)%3])}be(e,t||"REEF MARKET",0,5.8,3.55,10,"#386e73")}else if(i==="patio"){for(const n of[-4.5,4.5])vx(e,n,0),Mx(e,n,0,n<0?12819879:9350311);for(const n of[-8,8])Ct(e,n,.9,4,.8,1.8,$t("stone",13942940)),Pt(e,n,1.8,4,.8,.2,.8,9148809)}else if(i==="yard"){for(const n of[-4,4])Ct(e,n,2.6,-2,.1,5.2,on);El(e,[-4,-2],[4,-2],4.6);for(let n=0;n<4;n++){const s=st(e,-2.7+n*1.8,3.65,-2,1.15,1.55,.04,$t("cloth",[11964078,14272661,8302515,13342077][n]));s.rotation.z=(n%2?1:-1)*.06}Ct(e,-3.8,1.35,2,.06,2.7,on),st(e,-3.8,2.7,2,1,.75,1.6,on),st(e,-3.8,2.7,2.82,.8,.55,.06,$t("metal",14336915)),Bi(e,3.7,0,2,1.2),be(e,t||"CONCH POST",0,1.4,3.5,3.4,"#587b73")}else if(i==="dock"){for(let s=0;s<17;s++)st(e,0,1.1,-10+s*1.25,9,.35,1.15,je);for(const s of[-4.8,4.8])for(const r of[-10,-4,2,10])Ct(e,s,1.4,r,.33,3.8,je),le(e,s,2.7,r,.35,.1,Ki).rotation.x=Math.PI/2;for(const s of[-4.8,4.8])for(let r=0;r<3;r++)El(e,[s,-10+r*6],[s,-4+r*6],3);Bi(e,-2,1.3,-7),Bi(e,2,1.3,-8,1.3);const n=new ee;n.position.set(2.5,1.45,4),e.add(n);for(let s=0;s<5;s++)le(n,0,s*.1,0,.7+s*.04,.08,Ki).rotation.x=Math.PI/2;be(e,t||"COVE LANDING",0,3.9,-10,7,"#527d76")}else if(i==="workshop"){st(e,0,2.2,-2,10,4.4,5.5,$t("wood",9142378)),st(e,0,4.65,-2,11,.45,6.8,$t("metal",7182739)),st(e,0,1.8,.8,3.5,3.6,.18,$t("metal",3428189));for(const n of[-3.7,3.7])st(e,n,2.6,.85,2.2,1.4,.15,7581360);Bi(e,-6,0,2.5),Bi(e,5,0,2.2,1.3),st(e,0,1.5,4.2,5.5,.2,1.7,je);for(const n of[-2,2])st(e,n,.75,4.2,.16,1.5,1.4,on);for(const n of[-1.4,0,1.4])le(e,n,1.8,4.2,.32,.1,on).rotation.x=Math.PI/2;be(e,t||"BOAT REPAIR",0,4.7,1.6,8,"#816550")}else if(i==="stop"){for(const n of[-4.6,4.6])Ct(e,n,2.5,-2,.14,5,on);st(e,0,5.1,-1,10.5,.3,5,$t("metal",7642769)),st(e,0,1.2,-1,7.5,.24,1.3,je);for(const n of[-2.7,2.7])st(e,n,.6,-1,.15,1.2,1.2,on);st(e,0,2,-1.7,7.5,1.1,.16,je),Ct(e,5,3,1,.1,6,on),be(e,t||"TOWN LOOP",3.8,5.4,1.2,4,"#53777a"),Ct(e,-5,.8,2,.65,1.6,on),le(e,-5,1.55,2,.67,.07,Ki).rotation.x=Math.PI/2}return dn(e)}const Ln=$t("wood",10717797),De=$t("metal",6065547),Ms=$t("stone",11848633),wl=$t("cloth",14076058);function bx(i){const t=new ee,e=[],n=(s,r,o,a,l,h=0)=>e.push({x:s,z:r,w:o,d:a,height:l,y:h});switch(i.kind){case"tower":for(const s of[-4,4])for(const r of[-4,4]){Ct(t,s,8,r,.35,16,De),n(s,r,.7,.7,16);const o=st(t,s,8,0,.2,10,.2,De);o.rotation.x=s<0?.8:-.8}Ct(t,0,18,0,6,7,De),n(0,0,12,12,7,14.5),jt(t,new an(6.6,3,20),Ln,0,23,0);for(let s=1;s<16;s+=1)st(t,5,s,0,.8,.13,.13,De);for(const s of[4.6,5.4])Ct(t,s,8,0,.07,16,De);be(t,i.label,0,18.5,6.05,10,"#476f79");break;case"observatory":st(t,0,1,0,16,2,12,Ln),n(0,0,16,12,2);for(const s of[-6,6])for(const r of[-4,4])Ct(t,s,5,r,.2,8,Ln);jt(t,new an(11,4,4),$t("cloth",9999542),0,10,0).rotation.y=Math.PI/4;for(const s of[-4,4]){Ct(t,s,3.6,0,.12,3.2,De);const r=Ct(t,s,5.4,-.8,.5,2.7,De);r.rotation.x=Math.PI/2-.35,Pt(t,s,5.85,-1.8,.53,.53,.12,9559508)}be(t,i.label,0,7,4.3,11,"#66557f");break;case"billboard":for(const s of[-5,5])Ct(t,s,5,0,.28,10,Ln),n(s,0,.6,.6,10);st(t,0,10,0,16,6,.6,Ln),n(0,0,16,.6,6,7),be(t,i.label,0,10,.34,15,"#ad6b52");for(const s of[-6,0,6])st(t,s,13.7,.7,.18,1,1.2,De),Pt(t,s,13.3,1.2,.4,.2,.4,16113581);break;case"boardwalk":for(let s=0;s<25;s++)st(t,0,.6,-18+s*1.5,10,1.2,1.38,Ln);for(const s of[-5.5,5.5])for(let r=-18;r<=18;r+=6)Ct(t,s,1.6,r,.24,3.2,Ln),n(s,r,.5,.5,3.2),le(t,s,2.6,r,.28,.08,wl).rotation.x=Math.PI/2;be(t,i.label,0,5,-17,9,"#507f79");break;case"beacon":Ct(t,0,10,0,5,20,Ms),n(0,0,10,10,20);for(const s of[5,12,19])le(t,0,s,0,5.08,.22,De).rotation.x=Math.PI/2;Ct(t,0,21,0,6,.5,De);for(let s=0;s<8;s++){const r=s*Math.PI/4;Ct(t,Math.cos(r)*4.8,23,Math.sin(r)*4.8,.14,4,De)}Pt(t,0,23,0,2,2,2,16771234),jt(t,new an(6.5,3,16),Ln,0,26,0),st(t,0,2,5,2,4,.2,De),be(t,i.label,0,8,5.1,7,"#547577");break;case"crane":{st(t,0,1.2,0,10,2.4,10,Ms),n(0,0,10,10,2.4);for(const s of[-3,3])st(t,s,8,0,.45,16,.45,De),n(s,0,.5,.5,16);for(let s=3;s<16;s+=3){st(t,0,s,0,6,.24,.24,De);const r=st(t,0,s+1.5,0,6.6,.18,.18,De);r.rotation.z=.46}st(t,6,16.5,0,21,.6,1.5,De),n(6,0,21,1.5,.6,16.2),Ct(t,14,10,0,.09,13,wl),le(t,14,3.5,0,.65,.16,De);for(const s of[-7,7])st(t,s,.7,6,3,1.4,3,Ln);be(t,i.label,0,6,.5,6,"#8c7057");break}case"fountain":Ct(t,0,.5,0,8,1,Ms),n(0,0,16,16,1),le(t,0,1.2,0,7.2,.6,Ms).rotation.x=Math.PI/2,Ct(t,0,1.08,0,6.6,.1,6928571),Ct(t,0,3,0,.7,4,Ms),n(0,0,1.4,1.4,5),jt(t,new gn(2.8,16,8,0,Math.PI*2,0,Math.PI/2),$t("stone",14864048),0,5,0),Pt(t,0,6,0,1.2,1.2,1.2,15523743);for(let s=0;s<12;s++){const r=s*Math.PI/6;Pt(t,Math.cos(r)*7.5,1.4,Math.sin(r)*7.5,.35,.35,.35,14276529)}break}return dn(t),t.name=i.id,{group:t,solids:e}}const Ex=[{id:"neighborhood",name:"Neighborhood cruise",path:"conch-commons",color:15976552},{id:"coast",name:"Lagoon promenade",path:"lagoon-commons",color:8182733},{id:"mountain",name:"Mountain descent",path:"ridge-commons",color:15313593}],vi=Ex.map(i=>{const t=Nn.find(n=>n.id===i.path),e=[.08,.24,.4,.56,.72,.9].map(n=>{const s=t.nodes.findIndex(a=>a.distance>=t.length*n),r=t.nodes[s],o=t.nodes[Math.min(s+1,t.nodes.length-1)];return{x:r.x,z:r.z,y:Gt(r.x,r.z),width:t.width,heading:Math.atan2(o.x-r.x,o.z-r.z)}});return{...i,gates:e}});function wx(i,t,e,n){const s=t.x-i.x,r=t.z-i.z,o=s*s+r*r,a=o?Math.max(0,Math.min(1,((e.x-i.x)*s+(e.z-i.z)*r)/o)):0,l=i.y+(t.y-i.y)*a;return Math.hypot(i.x+s*a-e.x,i.z+r*a-e.z)<n&&Math.abs(l-e.y)<5}class Tx{constructor(t){this.save=t,t.trails??={},this.previous=null}resetPosition(){this.previous=null}update(t,e){const n=this.previous;if(this.previous={x:t.x,y:t.y,z:t.z},!!n&&!(Math.hypot(t.x-n.x,t.z-n.z)<.01)&&!(Math.hypot(t.x-n.x,t.z-n.z)>20))for(const s of vi){const r=this.save.trails[s.id]??0;if(!(r>=s.gates.length)&&wx(n,t,s.gates[r],s.gates[r].width/2+2)){this.save.trails[s.id]=r+1;const o=r+1===s.gates.length;o&&!this.save.activities.includes(`trail:${s.id}`)&&this.save.activities.push(`trail:${s.id}`),e(s,r+1,o)}}}}const qn=$t("stone",12044217),Yn=$t("wood",9925718),ys=$t("metal",9214866),wr=$t("metal",11566172);function Ax(i){const t=new ee,e=[],n=(s,r,o)=>{const a=new ee,l=Gt(i.x+s,i.z+r);a.position.set(s,l,r),t.add(a),o(a,(h,c,u,f,d,g=0)=>e.push({x:i.x+s+h,z:i.z+r+c,w:u,d:f,height:d,y:l+g}))};if(i.kind==="pools"){for(const[s,r,o]of[[-17,-10,9],[18,10,10],[-15,20,7]])n(s,r,(a,l)=>{Ct(a,0,.18,0,o,.36,6732982);for(let h=0;h<10;h++){const c=h*Math.PI/5,u=Math.cos(c)*o,f=Math.sin(c)*o;Pt(a,u,.55,f,1.4,.8,1.4,qn),l(u,f,2.5,2.5,1.4)}for(let h=0;h<3;h++){const c=-2+h*2;Pt(a,c,.65,1,.7,.3,.7,15585185),le(a,c,.8,1,.38,.1,14067125).rotation.x=Math.PI/2}});for(const s of[-29,29])n(s,-23,(r,o)=>{Ct(r,0,3,0,.16,6,ys),o(0,0,.4,.4,6),Pt(r,0,6.2,0,.7,.9,.7,16769445),st(r,0,1.1,2.5,5,.3,1.5,Yn);for(const a of[-1.8,1.8])st(r,a,.55,2.5,.2,1.1,1.3,ys)})}else if(i.kind==="yard"){n(-17,20,(s,r)=>{const o=Yn.clone();o.side=Ve,jt(s,new gn(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),o,0,2,0,6,3,10);const a=le(s,0,2,0,1,.06,Yn);a.rotation.x=Math.PI/2,a.scale.set(6,10,6);for(const l of[-6,-3,0,3,6]){const h=10*Math.sqrt(1-(l/11)**2);st(s,0,1.45,l,h,.18,.45,Yn);for(const c of[-h/2,h/2])st(s,c,.8,l,.17,2.1,.2,Yn).rotation.z=-c*.07}for(const l of[-4,4])st(s,0,2.15,l,9,.2,1.6,$t("wood",11903097));for(const l of[-4,4])Ct(s,l,.5,0,.38,1,ys);r(0,0,12,20,3)});for(const s of[-26,26])n(12,s,(r,o)=>{for(let a=0;a<3;a++){const l=-7+a*7;st(r,l,1.7,0,5,3.4,5,Yn),o(l,0,5,5,3.4);for(const h of[.4,3])st(r,l,h,2.55,5,.16,.1,wr)}});for(const[s,r]of[[-6,-23],[9,0],[23,22]])n(s,r,(o,a)=>{Ct(o,0,2,0,.3,4,wr),st(o,0,1,0,5.5,.35,.45,wr),le(o,0,4.2,0,.75,.18,ys);for(const l of[-2.5,2.5]){const h=st(o,l,.8,0,1.4,1.8,.3,wr);h.rotation.z=l<0?-.6:.6}a(0,0,6,2,5)});n(24,-4,(s,r)=>{for(let a=0;a<4;a++)st(s,0,.5+a*.6,0,4,.45,14,Yn);r(0,0,4,14,2.8);const o=Ct(s,-5,2.2,0,1.4,3,ys);o.rotation.z=Math.PI/2,r(-5,0,3,3,3.6)})}else{for(let s=0;s<16;s++){const r=s*Math.PI/8;n(Math.cos(r)*8,Math.sin(r)*8,o=>{const a=st(o,0,.1,0,2.6,.2,2.6,$t("stone",s%2?12106933:13811605));a.rotation.y=-r})}for(const s of[-22,22])for(const r of[-24,0,24])n(s,r,(o,a)=>{const l=r===0?8:12;Ct(o,0,.5,0,3.2,1,qn),Ct(o,0,l/2,0,1.4,l,qn),a(0,0,4,4,l);for(const h of[1.5,l-.5])le(o,0,h,0,1.5,.18,qn).rotation.x=Math.PI/2;for(let h=0;h<8;h++){const c=h*Math.PI/4;Ct(o,Math.cos(c)*1.38,l/2,Math.sin(c)*1.38,.07,l-2,12900034)}r!==0&&st(o,0,l+.5,0,6,1,6,qn)});n(0,26,(s,r)=>{for(const o of[-11,11])Ct(s,o,7,0,1.5,14,qn),r(o,0,3,3,14);st(s,0,14.5,0,26,1.3,4,qn),r(0,0,26,4,1.3,13.8),Pt(s,0,16,0,2.8,1.5,.7,14731417)});for(const s of[-31,31])n(s,11,(r,o)=>{const a=st(r,0,1.3,0,3,2.6,10,qn);a.rotation.y=s*.03,o(0,0,5,11,3)})}return n(0,-i.radius+5,(s,r)=>{for(const o of[-16,16])Ct(s,o,2.8,0,.2,5.6,Yn),r(o,0,.5,.5,6);be(s,i.name.toUpperCase(),0,5.4,0,29,"#577d7b")}),dn(t),t.position.set(i.x,0,i.z),t.name=i.id,{group:t,solids:e}}const ja=rs.map(i=>{const t=i.length/2+20;return{id:i.id,heading:i.heading,radius:6.5,x:i.x-Math.sin(i.heading)*t,z:i.z-Math.cos(i.heading)*t,y:Gt(i.x,i.z)+i.height+5.2}});function Rx(i,t,e){const n=Math.sin(e.heading),s=Math.cos(e.heading),r=d=>(d.x-e.x)*n+(d.z-e.z)*s,o=r(i),a=r(t);if(o<=0||a>0||o===a)return!1;const l=o/(o-a),h=i.x+(t.x-i.x)*l,c=i.z+(t.z-i.z)*l,u=i.y+(t.y-i.y)*l+1.6,f=(h-e.x)*s-(c-e.z)*n;return Math.hypot(f,u-e.y)<=e.radius-1}class Cx{constructor(t){this.save=t,t.bestStunts??={},this.reset()}reset(){this.flight=null,this.previous=null}step(t,e,n){const s=this.previous??t;if(this.previous={x:t.x,y:t.y,z:t.z},Math.hypot(t.x-s.x,t.z-s.z)>20){this.flight=null;return}if(e.launched){const o=rs.find(a=>{const l=t.x-a.x,h=t.z-a.z,c=Math.cos(a.heading),u=Math.sin(a.heading),f=c*l-u*h,d=u*l+c*h;return Math.abs(f)<a.width/2+2&&d<-a.length/2+3&&d>-a.length/2-9});this.flight=o?{id:o.id,x:t.x,z:t.z,passed:!1}:null}if(!this.flight)return;if(e.impacts){this.flight=null;return}const r=ja.find(o=>o.id===this.flight.id);if(this.flight.passed||=Rx(s,t,r),e.landed){const o=Math.hypot(t.x-this.flight.x,t.z-this.flight.z),a=`stunt:${this.flight.id}`;if(this.flight.passed&&o>=25){const l=!this.save.activities.includes(a);l&&this.save.activities.push(a);const h=this.save.bestStunts[this.flight.id]??0;o>h&&(this.save.bestStunts[this.flight.id]=Math.round(o*10)/10,n(r,o,l))}this.flight=null}}}const Px=[{name:"Tidepool pearls",item:"Pearl",kind:"pearl",color:16044004},{name:"Salvage sweep",item:"Cog",kind:"cog",color:15250542},{name:"Sanctuary echoes",item:"Echo shell",kind:"shell",color:10872030}],Gs=Xe.map((i,t)=>({...Px[t],id:i.id,siteName:i.name,items:[-12,0,12].map((e,n)=>({id:`${i.id}:${n}`,x:i.x,z:i.z+e,y:Gt(i.x,i.z+e)}))}));class Lx{constructor(t){this.save=t,t.keepsakes??=[],this.previous=null}reset(){this.previous=null}step(t,e){const n=this.previous;if(this.previous={x:t.x,y:t.y,z:t.z},!n||!t.grounded)return;const s=t.x-n.x,r=t.z-n.z,o=s*s+r*r;if(!(o<1e-4||o>400))for(const a of Gs)for(const l of a.items){if(this.save.keepsakes.includes(l.id))continue;const h=Math.max(0,Math.min(1,((l.x-n.x)*s+(l.z-n.z)*r)/o)),c=n.y+(t.y-n.y)*h;if(Math.hypot(n.x+s*h-l.x,n.z+r*h-l.z)>3.3||Math.abs(c-l.y)>2)continue;this.save.keepsakes.push(l.id);const u=a.items.filter(d=>this.save.keepsakes.includes(d.id)).length,f=u===a.items.length;f&&!this.save.activities.includes(`collection:${a.id}`)&&this.save.activities.push(`collection:${a.id}`),e(a,u,f)}}}function Ix(i,t){const e=new ee;if(i==="pearl"){for(const n of[-1,1]){const s=Pt(e,n*.8,-.45,0,1.1,.25,1,12881070);s.rotation.z=n*.35}Pt(e,0,.25,0,.85,.85,.85,t)}else if(i==="cog"){le(e,0,0,0,.8,.28,t);for(let n=0;n<8;n++){const s=n*Math.PI/4,r=st(e,Math.sin(s)*1.05,Math.cos(s)*1.05,0,.4,.55,.5,t);r.rotation.z=-s}}else{for(let n=0;n<7;n++){const s=(n-3)*.23,r=Pt(e,Math.sin(s)*.7,Math.cos(s)*.6,0,.23,1.05,.3,t);r.rotation.z=-s}Pt(e,0,-.45,0,.45,.3,.35,14866096)}return dn(e),e}const Yi=pn.map((i,t)=>({id:i.id,name:i.name,source:{x:Xe[t].x,z:Xe[t].z-20,name:Xe[t].name},target:{x:i.x,z:i.z,name:i.name}}));function Rh(i,t){if(!t.grounded||Math.abs(t.speed)>3)return null;for(const e of Yi){if(i.deliveries.includes(e.id)){if(t.energy<95&&Math.hypot(t.x-e.target.x,t.z-e.target.z)<9&&Math.abs(t.y-Gt(e.target.x,e.target.z))<3)return{id:e.id,service:!0,label:`Recharge boost at ${e.name}`};continue}const n=i.cargo===e.id?e.target:i.cargo?null:e.source;if(!(!n||Math.hypot(t.x-n.x,t.z-n.z)>9||Math.abs(t.y-Gt(n.x,n.z))>3))return{id:e.id,delivery:i.cargo===e.id,label:i.cargo===e.id?`Restore ${e.name} beacon`:`Load supplies for ${e.name}`}}return null}function Dx(i,t){const e=Rh(i,t);return e?e.service?(t.energy=100,e):(e.delivery?(i.deliveries.push(e.id),i.cargo=null):i.cargo=e.id,e):null}const ki=$t("wood",9993305),No=$t("stone",10926510),_n=$t("metal",7774110);function Ux(i){const t=new ee,e=[],n=(r,o,a,l,h,c)=>{const u=new ee,f=Gt(i.x+r,i.z+o);u.position.set(r,f,o),t.add(u),a(u),l&&e.push({x:i.x+r,z:i.z+o,y:f,w:l,d:h,height:c})};n(-32,0,r=>{Ct(r,0,1,0,8,2,No);for(const o of[-4,4])for(const a of[-4,4])Ct(r,o,8,a,.45,14,_n);for(const o of[5,10,15])st(r,0,o,0,10,.5,10,_n);Ct(r,0,18,0,4,6,_n),le(r,0,19,0,5,.3,_n).rotation.x=Math.PI/2},16,16,22);const s=new qe(new gn(2.6,12,8),new Ys({color:4612453}));if(s.position.set(i.x-32,Gt(i.x-32,i.z)+22,i.z),i.kind==="harbor")n(33,8,r=>{for(let o=0;o<12;o++)st(r,0,.45,o*2-12,17,.7,1.8,ki);for(const o of[-8,8])for(const a of[-12,10])Ct(r,o,2,a,.5,5,ki),le(r,o,3,a,.65,.13,_n).rotation.x=Math.PI/2;for(const o of[-7,3]){st(r,0,2,o,7,3,5,ki);for(const a of[1,3])st(r,0,a,o+2.6,7,.15,.15,_n)}},19,28,5);else if(i.kind==="relay")n(34,0,r=>{Ct(r,0,1,0,11,2,No),Pt(r,0,6,0,10,8,10,_n);for(const a of[-5,0,5])le(r,-9,5,a,1.3,.25,12839132).rotation.y=Math.PI/2,Pt(r,-9.1,5,a,.2,1,1,3766147);Ct(r,0,17,0,.4,9,_n);const o=Pt(r,0,22,0,6,1.3,6,13160885);o.rotation.z=.35},23,23,25);else for(const r of[-20,20])n(34,r,o=>{st(o,0,.5,0,20,1,15,No),st(o,0,5,0,16,9,12,ki);for(const a of[-5,5])st(o,a,5,-6.1,3,3,.25,6928572);for(const a of[-1,1]){const l=st(o,a*5,11,0,11,.7,17,$t("cloth",6523287));l.rotation.z=-a*.3}st(o,-8.1,4,0,.2,6,4,_n)},22,18,14);for(const r of[-32,32])n(-30,r,o=>{st(o,0,1.5,0,6,3,5,ki),Ct(o,5,2,0,1.8,4,_n)},13,6,4);return n(0,32,r=>{for(const o of[-15,15])Ct(r,o,4,0,.25,8,ki);be(r,i.name.toUpperCase(),0,8,0,28,"#365967")}),n(0,0,r=>{const o=le(r,0,.12,0,7,.2,i.color);o.rotation.x=Math.PI/2}),dn(t),t.position.set(i.x,0,i.z),{group:t,solids:e,lamp:s}}const he=new Ee,Nx=new Ys({color:2311242,transparent:!0,opacity:.1,depthWrite:!1,side:Ve});class zx{constructor(t,e,{software:n=!1,worker:s=!0}={}){if(this.scene=t,this.save=e,this.software=n,this.boundary=Fe/2-8,this.ramps=rs.map(r=>({...r,baseY:Gt(r.x,r.z)})),this.solids=[],this.colliderHash=new yl,this.interactionHash=new yl,this.coins=[],this.breakables=[],this.traffic=[],this.people=[],this.jellies=[],this.decor=[],this.landmarkObjects=[],this.activitySites=[],this.districtObjects=[],this.scenicGates=[],this.platforms=[],this.discoveryObjects=[],this.destinationTokens=[],this.frontierObjects=[],this.supplyPads=[],this.stuntRings=[],this.collected=e.coins.length+(e.legacy?.coins??0),this.collectedIds=new Set(e.coins),this.brokenIds=new Set(e.broken),this.chunks=new Map,this.pending=new Map,this.ready=[],this.queue=[],this.wanted=new Map,this.stamp=0,this.lastCell="",this.flora=gx(),this.crownGeo=mx(),this.crownMat=un(16766570),this.terrainMat=new Jf({vertexColors:!0,map:xx()}),s&&typeof Worker<"u")try{this.worker=new Worker(new URL(""+new URL("TerrainWorker-p30fCLdK.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=({data:r})=>{this.pending.delete(r.key),this.ready.push(r)},this.worker.onerror=()=>{this.worker.terminate(),this.worker=null;for(const r of this.pending.values())this.queue.push(r);this.pending.clear()}}catch{}this.makeGround(),this.makeRoads(),this.makeLandmarks(),this.makeStreetDetails(),this.makeLivingSites(),this.makeSetPieces(),this.makeDistrictDetails(),this.makeScenicGates(),this.makeDiscoveries(),this.makeFrontier(),this.makeStuntRings(),this.makeExploration(),this.makeResidents(),this.makeAtmosphere()}heightAt(t,e){let n=Gt(t,e);for(const s of this.platforms??[])if(Math.abs(t-s.x)<=s.w/2&&Math.abs(e-s.z)<=s.d/2+s.approach){const r=Se((s.d/2+s.approach-Math.abs(e-s.z))/s.approach,0,1);n=Math.max(n,n+(s.y-n)*r)}for(const s of this.ramps){const r=Za(t,e,s);r!==null&&(n=Math.max(n,r))}return n}nearbySolids(t,e,n=8){return this.colliderHash.query(t,e,n)}addSolid(t,e,n,s,r,o=Gt(t,e)){const a={x:t,z:e,w:n,d:s,height:r,y:o};return this.solids.push(a),this.colliderHash.add(a),a}makeGround(){const t=new ls(Fe,Fe,60,60);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){const r=e.getX(s),o=e.getZ(s);e.setY(s,Xi(r,o)-3),n.set(Sh(r,o),s*3),t.attributes.uv.setXY(s,r/28,o/28)}t.setAttribute("color",new Ue(n,3)),t.computeVertexNormals(),this.floor=jt(this.scene,t,this.terrainMat),this.floor.castShadow=!1,this.floor.renderOrder=-60}makeRoads(){const t=[];for(const n of Nn)if(n.nodes.forEach((s,r)=>{const o=n.nodes[Math.max(0,r-1)],a=n.nodes[Math.min(n.nodes.length-1,r+1)];r%3===0&&t.push({x:s.x,y:Gt(s.x,s.z)+.34,z:s.z,a:Math.atan2(a.x-o.x,a.z-o.z)})}),this.software){const s=jt(this.scene,Ml(n,24),5277579);s.castShadow=!1,s.renderOrder=-30}const e=new Fi(new yi(.45,.025,4),un(15128224),t.length);t.forEach((n,s)=>{he.position.set(n.x,n.y,n.z),he.rotation.set(0,n.a,0),he.scale.setScalar(1),li(e,s,he)}),e.computeBoundingSphere(),e.renderOrder=-29,this.scene.add(e)}makeLandmarks(){const t={pineapple:[21,21,35],head:[18,16,25],rock:[23,23,8],krusty:[34,26,23],bucket:[24,24,35],goober:[45,32,41],ship:[36,62,40],castle:[66,43,49]};for(const n of ks){const s=new ff,r=lx(n.type),o=new ee,[a,l,h]=t[n.type];if(n.type==="pineapple"){Pt(o,0,12,0,10,14,10,15309364);for(const c of[-3,0,3])jt(o,new an(3,13,5),6595655,c,29,0)}else if(n.type==="castle"){st(o,0,12,0,48,24,24,9553852);for(const c of[-27,27])Ct(o,c,18,0,7,36,10540747),jt(o,new an(8,15,7),8367296,c,43,0)}else n.type==="ship"?(Pt(o,0,8,0,18,10,30,9003336),st(o,0,24,-7,24,20,24,9335128)):Pt(o,0,h*.43,0,a*.48,h*.48,l*.48,n.type==="head"?7574434:n.type==="rock"?9928319:12037523);s.addLevel(r,0),s.addLevel(o,this.software?190:300,.08),s.position.set(n.x,Gt(n.x,n.z),n.z),this.scene.add(s),this.landmarkObjects.push(s),this.addSolid(n.x,n.z,a,l,h),this.makeContactShadow(n.x,n.z,a*.6,l*.6)}let e=0;for(const n of[Te[0],Te[1],Te[3],Te[4]])for(let s=0;s<9;s++){const r=s*2.4,o=85+s%3*27,a=n.x+Math.cos(r)*o,l=n.z+Math.sin(r)*o,h=zn(a,l);if(h.distance<h.width/2+21||ks.some(u=>Math.hypot(a-u.x,l-u.z)<u.radius+18)||this.solids.some(u=>Math.hypot(a-u.x,l-u.z)<Math.max(u.w,u.d)/2+15))continue;const c=hx(e++);c.position.set(a,Gt(a,l),l),c.rotation.y=s*.7,this.scene.add(c),this.decor.push(c),this.addSolid(a,l,10,10,16),this.makeContactShadow(a,l,6.3,6.3)}}makeStreetDetails(){for(const t of Te.filter(e=>["conch","commons","lagoon","neptune"].includes(e.id))){const e=Nn.find(n=>n.id===(t.id==="conch"?"conch-commons":t.id==="lagoon"?"lagoon-commons":t.id==="neptune"?"palace-commons":"wreck-commons"));for(let n=5;n<e.nodes.length-1;n+=9){const s=e.nodes[n],r=e.nodes[n+1];if(Math.hypot(s.x-t.x,s.z-t.z)>230)continue;const o=Math.atan2(r.x-s.x,r.z-s.z),a=n%2?1:-1,l=s.x+Math.cos(o)*(e.width/2+7)*a,h=s.z-Math.sin(o)*(e.width/2+7)*a,c=zn(l,h);if(c.distance<c.width/2+4||this.solids.some(f=>Math.hypot(l-f.x,h-f.z)<Math.max(f.w,f.d)/2+8))continue;const u=new ee;u.position.set(l,Gt(l,h),h),u.rotation.y=o,Ct(u,0,3.9,0,.18,7.8,$t("metal",4812400)),le(u,0,7.7,0,.9,.1,7970199).rotation.x=Math.PI/2,Pt(u,0,7.7,0,.65,.8,.65,15128995);for(let f=0;f<4;f++)st(u,2.8,1.1,-.6+f*.4,3.4,.16,.3,$t("wood",10976592));for(const f of[1.6,4])st(u,f,.55,0,.18,1.1,1.5,5075827);for(const f of[1.7,2.1])st(u,2.8,f,.8,3.4,.25,.16,10976592);this.scene.add(u),this.decor.push(u),this.addSolid(l,h,.7,.7,8)}}}makeLivingSites(){for(const t of Ka){const e=Sx(t.kind,t.label),[n,s,r]=yx[t.kind],o=Math.cos(t.heading),a=Math.sin(t.heading),l=Math.abs(o)*n+Math.abs(a)*s,h=Math.abs(o)*s+Math.abs(a)*n;let c=Gt(t.x,t.z);for(const f of[-l/2,l/2])for(const d of[-h/2,h/2])c=Math.max(c,Gt(t.x+f,t.z+d));const u=st(e,0,-1,0,n,2,s,$t("stone",11581339));u.receiveShadow=!0,e.position.set(t.x,c,t.z),e.rotation.y=t.heading,this.scene.add(e),this.decor.push(e),this.activitySites.push({...t,group:e,base:c,width:l,depth:h}),this.addSolid(t.x,t.z,l,h,r,c).siteId=t.id,this.makeContactShadow(t.x,t.z,l*.6,h*.6)}}makeContactShadow(t,e,n,s){const r=[t,Gt(t,e)+.1,e],o=[];for(let h=0;h<=24;h++){const c=h/24*Math.PI*2,u=t+Math.cos(c)*n,f=e+Math.sin(c)*s;r.push(u,Gt(u,f)+.1,f),h&&o.push(0,h+1,h)}const a=new ye;a.setAttribute("position",new ne(r,3)),a.setIndex(o);const l=jt(this.scene,a,Nx);return l.castShadow=!1,l.receiveShadow=!1,l.renderOrder=-20,l}makeDistrictDetails(){for(const t of bh){const{group:e,solids:n}=bx(t);let s=Gt(t.x,t.z);for(const r of t.kind==="boardwalk"?[-5,5]:[-t.radius,t.radius])for(const o of t.kind==="boardwalk"?[-18.75,18.75]:[-t.radius,t.radius])s=Math.max(s,Gt(t.x+r,t.z+o));e.position.set(t.x,s,t.z),this.scene.add(e),this.decor.push(e),this.districtObjects.push({...t,group:e,base:s});for(const r of n)this.addSolid(t.x+r.x,t.z+r.z,r.w,r.d,r.height,s+r.y).siteId=t.id;if(t.kind==="boardwalk"){const r={x:t.x,z:t.z,w:10,d:37.5,y:s+1.2,approach:12};this.platforms.push(r);for(const o of[-1,1]){const a=[],l=[],h=[];for(let u=0;u<=4;u++)for(let f=0;f<=2;f++){const d=-5+f*5,g=o*(18.75+u*3);a.push(d,this.heightAt(t.x+d,t.z+g)-s,g),l.push(f,u/2)}for(let u=0;u<4;u++)for(let f=0;f<2;f++){const d=u*3+f;h.push(...o===1?[d,d+3,d+1,d+1,d+3,d+4]:[d,d+1,d+3,d+1,d+4,d+3])}const c=new ye;c.setAttribute("position",new ne(a,3)),c.setAttribute("uv",new ne(l,2)),c.setIndex(h),c.computeVertexNormals(),jt(e,c,$t("wood",10717797))}}for(const r of[-t.radius*.3,t.radius*.3]){const o=Gt(t.x+r,t.z);s>o+.1&&st(e,r,-(s-o)/2,0,1.2,s-o,1.2,$t("stone",11581339))}dn(e),this.makeContactShadow(t.x,t.z,t.radius*.65,t.radius*.65)}}makeScenicGates(){for(const t of vi)t.gates.forEach((e,n)=>{const s=new ee,r=un(t.color).clone();s.position.set(e.x,e.y,e.z),s.rotation.y=e.heading;const o=e.width/2+3;for(const a of[-o,o]){Ct(s,a,5.5,0,.24,11,$t("metal",5406078));for(const c of[1.5,4,9])le(s,a,c,0,.35,.13,r).rotation.x=Math.PI/2;Pt(s,a,11,0,.7,.7,.7,r);const l=e.x+Math.cos(e.heading)*a,h=e.z-Math.sin(e.heading)*a;this.addSolid(l,h,.6,.6,11,Gt(l,h)).siteId=`gate:${t.id}:${n}`}st(s,0,11,0,o*2,.16,.16,r),be(s,`${t.name.toUpperCase()} ${n+1}/6`,0,10,.1,Math.min(e.width,20),"#40767a"),dn(s),this.scene.add(s),this.decor.push(s),this.scenicGates.push({routeId:t.id,index:n,group:s,color:r,x:e.x,z:e.z})})}makeFrontier(){for(const t of Yi){const e=t.source,n=new ee,s=le(n,0,.12,0,7,.2,16765842);s.rotation.x=Math.PI/2,n.position.set(e.x,Gt(e.x,e.z),e.z),this.scene.add(n),this.supplyPads.push({id:t.id,group:n})}for(const t of pn){const{group:e,solids:n,lamp:s}=Ux(t);this.scene.add(e,s),this.decor.push(e),this.frontierObjects.push({...t,group:e,lamp:s});for(const r of n)this.addSolid(r.x,r.z,r.w,r.d,r.height,r.y)}}makeDiscoveries(){for(const t of Gs)for(const e of t.items){const n=Ix(t.kind,t.color);n.position.set(e.x,e.y+2.5,e.z),n.visible=!this.save.keepsakes.includes(e.id),this.scene.add(n),this.destinationTokens.push({...e,group:n})}for(const t of Xe){const{group:e,solids:n}=Ax(t);this.scene.add(e),this.decor.push(e),this.discoveryObjects.push({...t,group:e});for(const s of n)this.addSolid(s.x,s.z,s.w,s.d,s.height,s.y).siteId=t.id}if(this.software)for(const t of Cs){const e=jt(this.scene,Ml(t,4),12434067);e.castShadow=!1,e.renderOrder=-28}for(const t of Cs){const e=new ee;for(let n=5;n<t.nodes.length-1;n+=9){const s=t.nodes[n],r=t.nodes[n+1],o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;for(const h of[-1,1]){const c=s.x+a/l*8*h,u=s.z-o/l*8*h;if([...this.nearbySolids(c,u)].some(d=>Math.abs(c-d.x)<d.w/2+2&&Math.abs(u-d.z)<d.d/2+2))continue;const f=Gt(c,u);Ct(e,c,f+.65,u,.18,1.3,$t("wood",11836022)),Pt(e,c,f+1.4,u,.26,.18,.26,14146740)}}dn(e),e.position.set(0,0,0),this.scene.add(e)}}makeStuntRings(){for(const t of ja){const e=new ee,n=un(16766074).clone();le(e,0,0,0,t.radius,.3,n);for(let s=0;s<8;s++){const r=s*Math.PI/4;Pt(e,Math.cos(r)*t.radius,Math.sin(r)*t.radius,0,.38,.38,.38,n)}dn(e),e.position.set(t.x,t.y,t.z),e.rotation.y=t.heading,this.scene.add(e),this.decor.push(e),this.stuntRings.push({...t,group:e,color:n})}}makeSetPieces(){for(const c of this.ramps){const u=new ee;u.position.set(c.x,c.baseY,c.z),u.rotation.y=c.heading;const f=new ye;f.setAttribute("position",new ne([-c.width/2,0,c.length/2,c.width/2,0,c.length/2,-c.width/2,c.height,-c.length/2,c.width/2,c.height,-c.length/2],3)),f.setIndex([0,2,1,1,2,3]),f.computeVertexNormals(),f.setAttribute("uv",new ne([0,0,1,0,0,1,1,1],2)),jt(u,f,$t("wood",13144416),0,.08,0);for(const d of[-c.width/2,c.width/2]){st(u,d,c.height/2,-c.length/2,.5,c.height,.5,14137735);const g=st(u,d,c.height/2+.8,0,.25,.25,Math.hypot(c.length,c.height),15784352);g.rotation.x=Math.atan2(c.height,c.length)}for(let d=0;d<3;d++){const g=8-d*7,x=c.height*(.5-g/c.length)+.12;st(u,0,x,g,c.width*.75,.08,1.2,15978345)}this.scene.add(u)}for(const c of Hs){const u=new ee;u.position.set(c.x,Gt(c.x,c.z),c.z);const f=bl(c.id==="coral-grotto"?10782637:8762800,20,14);u.add(f),Pt(u,0,3,-9,2.4,2.4,2.4,14348479);for(const d of[-13,13])this.addSolid(c.x+d,c.z,5,7,12);for(let d=0;d<8;d++){const g=d*Math.PI/4;Pt(u,Math.cos(g)*13,.5,-9+Math.sin(g)*13,2,1.4,2,8958630)}this.scene.add(u),this.decor.push(u)}const t=[],e=[],n=500,s=560;t.push(n,Gt(n,s)+.18,s);for(let c=0;c<=48;c++){const u=c/48*Math.PI*2,f=n+Math.cos(u)*77,d=s+Math.sin(u)*51;t.push(f,Gt(f,d)+.18,d),c&&e.push(0,c,c+1)}const r=new ye;r.setAttribute("position",new ne(t,3)),r.setIndex(e),r.computeVertexNormals(),jt(this.scene,r,un(5154459,!1,.86));const o=bl(14004622,34,22);o.position.set(212,Gt(212,-505),-505),this.scene.add(o);for(const c of[194,230])this.addSolid(c,-505,8,10,22);const a=new Bs(1,1),l=new Fi(a,un(8827051),88);let h=0;for(let c=0;c<22;c++)for(const u of[0,1,2,3]){const f=Fe/2-16,d=-f+c*(f*2/21),g=u<2?u?f:-f:d,x=u<2?d:u===2?f:-f,m=13+Me(c,u,84)*10;he.position.set(g,Gt(g,x)+m*.6,x),he.rotation.set(0,Me(c,u)*6,0),he.scale.set(m,m*1.5,m),li(l,h++,he),this.addSolid(g,x,m*1.8,m*1.8,m*2.1)}l.computeBoundingSphere(),this.scene.add(l)}makeExploration(){for(const t of Nn.filter(e=>!e.frontier)){let e=0,n=12;for(const s of t.nodes){if(s.distance<n)continue;n+=22;const r=t.nodes[Math.max(0,t.nodes.indexOf(s)-1)],o=s.x-r.x,a=s.z-r.z,l=Math.hypot(o,a)||1,h=e%2?3.5:-3.5,c=s.x+a/l*h,u=s.z-o/l*h;this.addCrown(`crown:${t.id}:${e++}`,c,u,Gt(c,u)+2)}}for(const t of Te)for(let e=0;e<14;e++){const n=e/14*Math.PI*2;let s=t.x+Math.cos(n)*(44+e%3*7),r=t.z+Math.sin(n)*(44+e%3*7);if(!this.solids.some(o=>!o.siteId&&Math.abs(s-o.x)<o.w/2+3&&Math.abs(r-o.z)<o.d/2+3)){for(const o of this.solids.filter(a=>a.siteId))Math.abs(s-o.x)<o.w/2+4&&Math.abs(r-o.z)<o.d/2+4&&(s=o.x+(s>=o.x?1:-1)*(o.w/2+5));this.addCrown(`crown:${t.id}:${e}`,s,r,Gt(s,r)+2)}}for(const t of Hs)for(let e=0;e<8;e++){const n=e*Math.PI/4,s=t.x+Math.cos(n)*8,r=t.z-9+Math.sin(n)*8;this.addCrown(`crown:secret-${t.id}:${e}`,s,r,Gt(s,r)+2.2)}for(const t of this.ramps)for(let e=0;e<6;e++){const n=t.length/2-e*t.length/5,s=t.x+Math.sin(t.heading)*n,r=t.z+Math.cos(t.heading)*n;this.addCrown(`crown:${t.id}:${e}`,s,r,this.heightAt(s,r)+2.3)}for(const t of Te)for(let e=0;e<18;e++){const n=e*2.3,s=t.x+Math.cos(n)*(22+e%4*15),r=t.z+Math.sin(n)*(22+e%4*15);if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+3&&Math.abs(r-a.z)<a.d/2+3))continue;const o={id:`prop:${t.id}:${e}`,x:s,z:r,y:Gt(s,r),kind:"barrel"};this.breakables.push(o),this.interactionHash.add(o)}this.objectsByChunk=new Map;for(const t of[...this.coins,...this.breakables]){const e=this.chunkKey(t.x,t.z);this.objectsByChunk.has(e)||this.objectsByChunk.set(e,[]),this.objectsByChunk.get(e).push(t)}}addCrown(t,e,n,s){const r={id:t,x:e,z:n,y:s,kind:"crown",phase:Me(Math.floor(e),Math.floor(n),16)*6};this.coins.push(r),this.interactionHash.add(r)}chunkKey(t,e){return`${Math.floor(t/Ae)},${Math.floor(e/Ae)}`}makeResidents(){for(const t of pn)for(const e of[-1,1]){const n=Er(e<0?14266755:10209472);this.scene.add(n),this.people.push({mesh:n,x:t.x-18,z:t.z+e*18,phase:e+t.x,heading:Math.PI/2,path:!0,frontier:!0})}for(const t of Cs)for(let e=0;e<4;e++){const n=Er([13611146,11580374,9748658,13738428][e]);this.scene.add(n);const s=xl(t,t.length*(.3+e*.15),e%2?1:-1);this.people.push({mesh:n,...s,phase:e*1.7,pathRoute:t,side:e%2?1:-1,offset:t.length*(.3+e*.15)})}for(const t of Te)for(let e=0;e<6;e++){const n=e*2.1,s=t.x+Math.cos(n)*35,r=t.z+Math.sin(n)*35;if(this.solids.some(a=>Math.abs(s-a.x)<a.w/2+4&&Math.abs(r-a.z)<a.d/2+4))continue;const o=Er([15117949,9684144,12426184,14661238][e%4]);this.scene.add(o),this.people.push({mesh:o,x:s,z:r,phase:e+t.x*.01})}for(const t of this.activitySites){const e=Math.cos(t.heading),n=Math.sin(t.heading);for(let s=0;s<2;s++){const r=t.depth/2+7,o=t.x+e*(-4+s*8)+n*r,a=t.z-n*(-4+s*8)+e*r;if([...this.nearbySolids(o,a)].some(h=>Math.abs(o-h.x)<h.w/2+3&&Math.abs(a-h.z)<h.d/2+3))continue;const l=Er([13019068,10467493][s]);this.scene.add(l),this.people.push({mesh:l,x:o,z:a,phase:t.x*.01+s,heading:t.heading,path:!0})}}for(let t=0;t<9;t++){const e=ux([10786240,14790523,8566201][t%3]);this.scene.add(e),this.traffic.push({mesh:e,phase:t/9,speed:8+t%3*2,solid:{x:0,z:0,w:5,d:8,height:3,y:0}})}for(const t of Te)for(let e=0;e<(t.id==="fields"?14:4);e++){const n=e*2.3,s=t.x+Math.cos(n)*(60+e%4*22),r=t.z+Math.sin(n)*(60+e%4*22),o=Gt(s,r)+8+e%3*3,a=fx(e%2?15308734:11705307);this.scene.add(a),this.jellies.push({mesh:a,x:s,y:o,z:r,phase:e})}}makeAtmosphere(){this.vehicleShadow=this.makeContactShadow(0,0,2.8,3.2),this.vehicleShadow.geometry.attributes.position.setUsage(uc),this.bubbles=[];const t=new Fi(new gn(.13,5,3),un(13236451,!1,.36),42);t.frustumCulled=!1,this.scene.add(t),this.bubbleMesh=t,this.particles=[],this.particleMesh=new Fi(new Bs(.16),un(16767100),80),this.particleMesh.frustumCulled=!1,this.scene.add(this.particleMesh),this.software&&(t.visible=!1,this.particleMesh.visible=!1)}createChunk(t){const e=`${t.cx},${t.cz}`,n=this.chunks.get(e);n&&this.disposeChunk(n);const s=new ee;s.position.set(t.cx*Ae,0,t.cz*Ae);const r=new ye;r.setAttribute("position",new Ue(t.positions,3)),r.setAttribute("color",new Ue(t.colors,3)),r.setAttribute("uv",new Ue(t.uv,2)),r.setIndex(new Ue(t.indices,1)),r.computeVertexNormals(),r.computeBoundingSphere();let o=this.terrainMat;if(!this.software){const x=new ka(t.paint,t.paintSize,t.paintSize,tn);x.colorSpace=Le,x.magFilter=Qe,x.minFilter=Qe,x.needsUpdate=!0,o=_x(x);for(let m=0;m<r.attributes.uv.count;m++)r.attributes.uv.setXY(m,r.attributes.position.getX(m)/Ae,r.attributes.position.getZ(m)/Ae)}const a=jt(s,r,o);a.castShadow=!1,a.renderOrder=-50;const l=[],h=[];for(const x of["rock","coral","kelp"])for(let m=0;m<3;m++){let p=t.props.filter(_=>_.type===x&&_.color===m&&(x!=="rock"||!this.coins.some(A=>Math.hypot(A.x-_.x,A.z-_.z)<2.4*_.scale+4)));if(this.software&&(p=p.filter(_=>Me(Math.floor(_.x),Math.floor(_.z),62)<.3)),!p.length)continue;const y={rock:[10005921,12170400,10267066],coral:[13536174,14852480,10852297],kelp:[4558712,6924158,8957029]},M=new Fi(this.flora[x],un(y[x][m]),p.length);M.castShadow=!1,M.receiveShadow=!0,p.forEach((_,A)=>{if(he.position.set(_.x-s.position.x,_.y,_.z-s.position.z),he.rotation.set(0,_.rotation,0),he.scale.setScalar(_.scale),li(M,A,he),x==="rock"){const R={x:_.x,z:_.z,w:4.8*_.scale,d:4.8*_.scale,height:4.8*_.scale,y:_.y-2.4*_.scale};this.colliderHash.add(R),h.push(R)}}),M.computeBoundingSphere(),s.add(M),l.push({batch:M,props:p})}const c=this.objectsByChunk.get(e)??[],u=c.filter(x=>x.kind==="crown");let f=null;u.length&&(f=new Fi(this.crownGeo,this.crownMat,u.length),f.instanceMatrix.setUsage(uc),f.frustumCulled=!1,s.add(f),u.forEach((x,m)=>{x.slot=m,he.position.set(x.x-s.position.x,x.y,x.z-s.position.z),he.rotation.set(0,0,0),he.scale.setScalar(this.collectedIds.has(x.id)?0:1),li(f,m,he)}));const d=[];for(const x of c.filter(m=>m.kind==="barrel")){if(this.brokenIds.has(x.id))continue;const m=px();m.position.set(x.x-s.position.x,x.y,x.z-s.position.z),s.add(m),d.push({item:x,mesh:m})}const g={key:e,group:s,terrain:a,segments:t.segments,flora:l,rockSolids:h,coins:u,crownBatch:f,barrels:d,used:++this.stamp};this.chunks.set(e,g),this.scene.add(s),this.software&&mh(s),this.updateChunkCoins(g,0)}ensureAround(t,e,n=0,s=!1){const r=Math.floor(t/Ae),o=Math.floor(e/Ae),a=`${r},${o}`;if(a===this.lastCell&&!s)return;this.lastCell=a,this.wanted.clear();const l=this.software?1:2,h=[];for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++){const f=r+u,d=o+c;if(f*Ae>Fe/2||d*Ae>Fe/2||(f+1)*Ae<-Fe/2||(d+1)*Ae<-Fe/2)continue;const g=this.software?8:Math.max(Math.abs(u),Math.abs(c))<=1?32:8,x=`${f},${d}`;this.wanted.set(x,g);const m=this.chunks.get(x);if(m&&m.segments===g){m.group.visible=!0,m.used=++this.stamp;continue}this.pending.has(x)||h.push({key:x,cx:f,cz:d,segments:g,priority:u*u+c*c})}h.sort((c,u)=>c.priority-u.priority);for(const c of this.chunks.values())c.group.visible=this.wanted.has(c.key);if(this.queue=h,s){const c=Math.min(3,this.queue.length);for(let u=0;u<c;u++){const f=this.queue.shift();this.createChunk(vl(f.cx,f.cz,f.segments))}}}stream(){if(this.ready.length){const t=this.ready.shift(),e=`${t.cx},${t.cz}`,n=this.wanted.get(e);n===t.segments?this.createChunk(t):n&&!this.pending.has(e)&&this.queue.push({key:e,cx:t.cx,cz:t.cz,segments:n})}if(this.queue=this.queue.filter(t=>this.wanted.get(t.key)===t.segments&&this.chunks.get(t.key)?.segments!==t.segments&&!this.pending.has(t.key)),this.queue.length&&this.pending.size<3){const t=this.queue.shift();this.worker?(this.pending.set(t.key,t),this.worker.postMessage(t)):this.createChunk(vl(t.cx,t.cz,t.segments))}for(;this.chunks.size>55;){const e=[...this.chunks.values()].filter(n=>!n.group.visible).sort((n,s)=>n.used-s.used)[0];if(e)this.disposeChunk(e),this.chunks.delete(e.key);else break}}updateChunkCoins(t,e){t.crownBatch&&(t.coins.forEach((n,s)=>{he.position.set(n.x-t.group.position.x,n.y+Math.sin(e*2+n.phase)*.2,n.z-t.group.position.z),he.rotation.set(0,e*1.1+n.phase,0),he.scale.setScalar(this.collectedIds.has(n.id)?0:1),li(t.crownBatch,s,he)}),t.crownBatch.instanceMatrix.needsUpdate=!0)}burst(t,e,n){if(!this.software)for(let s=0;s<12;s++)this.particles.length>=80&&this.particles.shift(),this.particles.push({x:t,y:e,z:n,vx:(Math.random()-.5)*7,vy:3+Math.random()*4,vz:(Math.random()-.5)*7,life:1})}update(t,e,n,s,r){sx(t);for(const c of this.supplyPads)c.group.visible=!this.save.deliveries.includes(c.id)&&this.save.cargo!==c.id&&Math.hypot(c.group.position.x-n.x,c.group.position.z-n.z)<180;for(const c of this.frontierObjects)c.lamp.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?230:400),c.lamp.material.color.setHex(this.save.deliveries.includes(c.id)?c.color:4612453);for(const c of this.destinationTokens)c.group.visible=!this.save.keepsakes.includes(c.id)&&Math.hypot(c.x-n.x,c.z-n.z)<300,c.group.visible&&(c.group.rotation.y=t*.8,c.group.position.y=c.y+2.5+Math.sin(t*2+c.z)*.25);for(const c of this.stuntRings){const u=this.save.activities.includes(`stunt:${c.id}`);c.color.color.setHex(u?9032371:16766074)}for(const c of this.scenicGates){const u=this.save.trails?.[c.routeId]??0;c.color.color.setHex(vi.find(f=>f.id===c.routeId).color),c.color.color.multiplyScalar(c.index===u?1:c.index<u?.55:.75)}const o=this.vehicleShadow.geometry.attributes.position,a=Math.max(0,n.y-Gt(n.x,n.z)),l=1+Math.min(a,18)*.045;for(let c=0;c<o.count;c++){const u=(c-1)/24*Math.PI*2,f=n.x+(c?Math.cos(u)*2.8*l:0),d=n.z+(c?Math.sin(u)*3.2*l:0);o.setXYZ(c,f,Gt(f,d)+.12,d)}o.needsUpdate=!0,this.vehicleShadow.geometry.computeBoundingSphere(),this.ensureAround(n.x,n.z,n.heading),this.stream();for(const c of this.interactionHash.query(n.x,n.z,5))Math.hypot(c.x-n.x,c.z-n.z)>3.9||Math.abs(c.y-n.y-1.6)>3.1||(c.kind==="crown"&&!this.collectedIds.has(c.id)&&(this.collectedIds.add(c.id),this.collected++,this.burst(c.x,c.y,c.z),s(c.id)),c.kind==="barrel"&&!this.brokenIds.has(c.id)&&Math.abs(n.speed)>4&&(this.brokenIds.add(c.id),this.burst(c.x,c.y+1,c.z),r(c.id)));for(const c of this.chunks.values())if(c.group.visible){this.updateChunkCoins(c,t);for(const u of c.barrels)u.mesh.visible=!this.brokenIds.has(u.item.id);if(this.software)for(const{batch:u,props:f}of c.flora)u.userData.softwareCopies?.forEach((d,g)=>d.visible=Math.hypot(f[g].x-n.x,f[g].z-n.z)<95)}for(const c of this.landmarkObjects)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?600:1050);for(const c of this.decor)c.visible=Math.hypot(c.position.x-n.x,c.position.z-n.z)<(this.software?230:400);const h=Nn[0];for(const c of this.traffic){const u=(t*c.speed+c.phase*h.length)%h.length;let f=0,d=h.nodes.length-1;for(;f<d;){const w=f+d>>1;h.nodes[w].distance<u?f=w+1:d=w}const g=h.nodes[Math.max(0,f-1)],x=h.nodes[f],m=Se((u-g.distance)/(x.distance-g.distance||1),0,1),p=x.x-g.x,y=x.z-g.z,M=Math.hypot(p,y)||1,_=g.x+p*m+y/M*5,A=g.z+y*m-p/M*5,R=c.solid;this.colliderHash.remove(R);const C=Math.abs(p/M),P=Math.abs(y/M);Object.assign(R,{x:_,z:A,y:Gt(_,A),w:5*P+8*C,d:8*P+5*C}),c.mesh.visible=Math.hypot(_-n.x,A-n.z)<(this.software?125:250),c.mesh.visible&&(this.colliderHash.add(R),c.mesh.position.set(_,Gt(_,A),A),c.mesh.rotation.y=Math.atan2(-p,-y))}for(const c of this.people){if(c.pathRoute){const x=c.pathRoute,m=(t*1.35+c.offset)%(x.length*2),p=m>x.length,y=xl(x,p?x.length*2-m:m,c.side),M=zn(y.x,y.z);if(M.distance<M.width/2+3){c.mesh.visible=!1;continue}[...this.nearbySolids(y.x,y.z)].some(A=>Math.abs(y.x-A.x)<A.w/2+1.2&&Math.abs(y.z-A.z)<A.d/2+1.2&&Gt(y.x,y.z)<A.y+A.height)||(c.x=y.x,c.z=y.z),c.heading=y.heading+(p?0:Math.PI)}if(c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?90:180),!c.mesh.visible)continue;const u=Math.hypot(c.x-n.x,c.z-n.z)<10;let f=c.x+Math.sin(t*.4+c.phase)*3+(u?Math.sign(c.x-n.x)*4:0),d=c.z+Math.cos(t*.3+c.phase)*3;if(c.path){const x=Math.sin(t*.2+c.phase)*3.5;f=c.x+Math.cos(c.heading)*x,d=c.z-Math.sin(c.heading)*x}c.pathRoute&&(f=c.x,d=c.z),[...this.nearbySolids(f,d)].some(x=>Math.abs(f-x.x)<x.w/2+1&&Math.abs(d-x.z)<x.d/2+1)&&(f=c.x,d=c.z),c.mesh.position.set(f,Gt(f,d)+Math.abs(Math.sin(t*4+c.phase))*.06,d),c.mesh.rotation.y=c.pathRoute?c.heading:c.path?c.heading+(Math.cos(t*.2+c.phase)>0?-Math.PI/2:Math.PI/2):c.phase+Math.sin(t*.2)*.3,c.mesh.rotation.z=Math.sin(t*4+c.phase)*.035;const g=Math.sin(t*3.5+c.phase)*.25;c.mesh.userData.legs?.forEach((x,m)=>x.rotation.x=g*(m?1:-1)),c.mesh.userData.arms?.forEach((x,m)=>x.rotation.x=g*(m?-1:1))}for(const c of this.jellies)c.mesh.visible=Math.hypot(c.x-n.x,c.z-n.z)<(this.software?140:270),c.mesh.visible&&(c.mesh.position.set(c.x+Math.sin(t*.2+c.phase)*5,c.y+Math.sin(t+c.phase)*1.1,c.z),c.mesh.scale.setScalar(1+Math.sin(t*2+c.phase)*.045));if(!this.software){for(let c=0;c<42;c++){const u=n.x+(Me(c,0,62)-.5)*120,f=n.z+(Me(c,1,62)-.5)*120,d=n.y+(t*.8+Me(c,2,62)*30)%30;he.position.set(u,d,f),he.rotation.set(0,0,0),he.scale.setScalar(.4+Me(c,3,62)*1.1),li(this.bubbleMesh,c,he)}this.bubbleMesh.instanceMatrix.needsUpdate=!0,this.particles=this.particles.filter(c=>c.life>0);for(let c=0;c<80;c++){const u=this.particles[c];u?(u.life-=e,u.vy-=9*e,u.x+=u.vx*e,u.y+=u.vy*e,u.z+=u.vz*e,he.position.set(u.x,u.y,u.z),he.scale.setScalar(Math.max(0,u.life))):he.scale.setScalar(0),he.rotation.set(0,0,0),li(this.particleMesh,c,he)}this.particleMesh.instanceMatrix.needsUpdate=!0}}recover(t,e){const n=zn(t,e,!0);return{x:n.x,z:n.z,heading:n.heading}}disposeChunk(t){this.scene.remove(t.group);for(const e of t.rockSolids??[])this.colliderHash.remove(e);t.group.traverse(e=>{e.isInstancedMesh&&e.dispose()}),t.terrain.geometry.dispose(),this.software||(t.terrain.material.map.dispose(),t.terrain.material.dispose())}dispose(){this.worker?.terminate(),this.worker=null,this.pending.clear(),this.ready.length=0,this.queue.length=0;for(const t of this.chunks.values())this.disposeChunk(t);this.chunks.clear();for(const t of this.traffic)this.colliderHash.remove(t.solid)}}class Fx{constructor(){this.keys=new Set,this.pointers=new Map;const t=/^(Arrow|Key[WASDR]|Space|Shift|Escape)/;addEventListener("keydown",e=>{t.test(e.code)&&(e.preventDefault(),this.keys.add(e.code))}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.clear());for(const e of document.querySelectorAll("[data-key]")){e.addEventListener("pointerdown",s=>{s.preventDefault(),e.setPointerCapture(s.pointerId),this.pointers.set(s.pointerId,e.dataset.key),this.keys.add(e.dataset.key)});const n=s=>{const r=this.pointers.get(s.pointerId);this.pointers.delete(s.pointerId),[...this.pointers.values()].includes(r)||this.keys.delete(r)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("lostpointercapture",n)}}has(...t){return t.some(e=>this.keys.has(e))}clear(){this.keys.clear(),this.pointers.clear()}}class Ox{constructor(){this.enabled=!1,this.ctx=null}toggle(){return this.enabled=!this.enabled,this.enabled&&(this.ctx??=new AudioContext,this.ctx.resume()),this.enabled}tone(t=650,e=.12){if(!this.enabled||!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.value=t,s.gain.setValueAtTime(.06,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),n.connect(s).connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+e)}}const Ch=`patty-wagon-underwater-v${Ja}-${Xr}`,Bx="patty-wagon-free-roam-v1",vn=(i,t)=>Array.isArray(i)?[...new Set(i.filter(t))]:[],Tl=i=>t=>typeof t=="string"&&new RegExp(`^${i}:[a-z0-9:-]{1,90}$`).test(t);function Al(i=null){return{version:Ja,seed:Xr,coins:[],broken:[],activities:[],trails:{},bestStunts:{},discoveries:[],keepsakes:[],deliveries:[],cargo:null,visited:[],secrets:[],position:null,legacy:i}}function kx(i){try{i??=globalThis.localStorage;const t=JSON.parse(i.getItem(Ch)),e=JSON.parse(i.getItem(Bx)),n=t?.legacy??(e?{coins:vn(e.coins,r=>Number.isInteger(r)&&r>=0&&r<96).length,broken:vn(e.broken,r=>Number.isInteger(r)&&r>=0&&r<42).length}:null),s=Al(n);if(t?.version!==Ja||t?.seed!==Xr)return s;s.deliveries=vn(t.deliveries,r=>pn.some(o=>o.id===r)),s.cargo=pn.some(r=>r.id===t.cargo)&&!s.deliveries.includes(t.cargo)?t.cargo:null,s.coins=vn(t.coins,Tl("crown")),s.broken=vn(t.broken,Tl("prop")),s.activities=vn(t.activities,r=>["jump","smash","explorer",...vi.map(o=>`trail:${o.id}`),...rs.map(o=>`stunt:${o.id}`)].includes(r));for(const r of vi){const o=t.trails?.[r.id];s.trails[r.id]=s.activities.includes(`trail:${r.id}`)?r.gates.length:Number.isInteger(o)?Math.max(0,Math.min(r.gates.length,o)):0}s.keepsakes=vn(t.keepsakes,r=>Gs.some(o=>o.items.some(a=>a.id===r)));for(const r of Gs)r.items.every(o=>s.keepsakes.includes(o.id))&&s.activities.push(`collection:${r.id}`);s.discoveries=vn(t.discoveries,r=>Xe.some(o=>o.id===r));for(const r of rs){const o=t.bestStunts?.[r.id];Number.isFinite(o)&&o>=25&&o<2e3&&(s.bestStunts[r.id]=Math.round(o*10)/10)}return s.visited=vn(t.visited,r=>Te.some(o=>o.id===r)),s.secrets=vn(t.secrets,r=>Hs.some(o=>o.id===r)),t.position&&["x","z","heading"].every(r=>Number.isFinite(t.position[r]))&&Math.max(Math.abs(t.position.x),Math.abs(t.position.z))<Fe/2-25&&(s.position={x:t.position.x,z:t.position.z,heading:t.position.heading}),n&&(s.legacy={coins:Math.max(0,Math.min(96,Number(n.coins)||0)),broken:Math.max(0,Math.min(42,Number(n.broken)||0))}),s}catch{return Al()}}function Hx(i,t){try{return t??=globalThis.localStorage,t.setItem(Ch,JSON.stringify(i)),!0}catch{return!1}}function Vx(i,t,e,n){let s=i.x,r=i.z,o=0;const a=[...n].filter(l=>i.y<(l.y??0)+l.height&&i.y+2.6>(l.y??0));for(let l=0;l<3;l++){let h=null;for(const d of a){const g=d.x-d.w/2-2,x=d.x+d.w/2+2,m=d.z-d.d/2-2.1,p=d.z+d.d/2+2.1;if(s>g&&s<x&&r>m&&r<p){const C=[[s-g,-1,0],[x-s,1,0],[r-m,0,-1],[p-r,0,1]];C.sort((L,O)=>L[0]-O[0]);const[P,w,S]=C[0];s+=w*(P+.002),r+=S*(P+.002)}let y=-1/0,M=1/0,_=0,A=0,R=!1;for(const[C,P,w,S,L]of[[s,t,g,x,0],[r,e,m,p,1]]){if(Math.abs(P)<1e-9){(C<w||C>S)&&(R=!0);continue}const O=(w-C)/P,q=(S-C)/P,j=Math.min(O,q),tt=Math.max(O,q);j>y&&(y=j,_=L===0?-Math.sign(P):0,A=L===1?-Math.sign(P):0),M=Math.min(M,tt)}!R&&y>=0&&y<=1&&y<=M&&(!h||y<h.t)&&(h={t:y,nx:_,nz:A})}if(!h){s+=t,r+=e;break}const c=Math.max(0,h.t-.001/(Math.hypot(t,e)||1));s+=t*c,r+=e*c,t*=1-c,e*=1-c;const u=t*h.nx+e*h.nz;u<0&&(t-=u*h.nx,e-=u*h.nz);const f=i.vx*h.nx+i.vz*h.nz;f<0&&(i.vx-=f*h.nx,i.vz-=f*h.nz),o++}return i.x=s,i.z=r,o&&(i.speed=Math.sign(i.speed)*Math.min(Math.abs(i.speed),Math.hypot(i.vx,i.vz))),o}const Gx=18;function Wx(i,t,e=[],n=()=>0){let s=n(i,t);for(const r of e){const o=Za(i,t,{baseY:0,...r});o!==null&&(s=Math.max(s,o))}return s}function hi(i,t,e){return i.heightAt?i.heightAt(t,e):Wx(t,e,i.ramps??[])}function Xx(i,t,e,n){e=Math.min(Math.max(e,0),.05);const s=hi(n,i.x,i.z),r=i.y<=s+.18&&i.vy<=0,o=t.boost&&t.throttle>0&&i.energy>1,a=n.collected>=80?2:n.collected>=30?1:0;i.energy=Se(i.energy+(o?-26:16)*e,0,100),i.speed+=t.throttle*(o?43:29)*e,i.speed*=Math.exp(-(t.brake?2.6:t.throttle?.25:.8)*e),i.speed=Se(i.speed,-16,(o?58:38)+a*4),i.heading-=t.steer*(t.brake?2.15:1.42)*Se(i.speed/25,-1,1.15)*e*(r?1:.38);const l=1-Math.exp(-(r?t.brake?1.35:5.5+a*.4:.65)*e);i.vx+=(-Math.sin(i.heading)*i.speed-i.vx)*l,i.vz+=(-Math.cos(i.heading)*i.speed-i.vz)*l;const h=i.x,c=i.z,u=n.nearbySolids?n.nearbySolids(i.x+i.vx*e/2,i.z+i.vz*e/2,Math.hypot(i.vx,i.vz)*e/2+4):n.solids??[],f=Vx(i,i.vx*e,i.vz*e,u),d=n.boundary??Fe/2-8;(Math.abs(i.x)>d||Math.abs(i.z)>d)&&(i.x=Se(i.x,-d,d),i.z=Se(i.z,-d,d),i.speed*=-.2,i.vx*=-.2,i.vz*=-.2);const g=hi(n,i.x,i.z),x=n.ramps?.some(R=>Za(h,c,{baseY:0,...R})!==null);let m=!1,p=!1;r&&s-g>.65&&Math.abs(i.speed)>8&&(i.vy=((x?8:2)+Math.abs(i.speed)*(x?.22:.1))*.9,m=!0),r&&!m?(p=!i.grounded,i.y=g,i.vy=0):(i.vy-=Gx*e,i.y+=i.vy*e,i.y<=g&&(i.y=g,i.vy=0,p=!0)),["x","z","y","heading","speed","vx","vz","vy"].every(R=>Number.isFinite(i[R]))||Object.assign(i,Ta()),i.grounded=i.y<=hi(n,i.x,i.z)+.001&&i.vy<=0;const y=-Math.sin(i.heading),M=-Math.cos(i.heading),_=Math.cos(i.heading),A=-Math.sin(i.heading);if(i.grounded){const R=hi(n,i.x+y*1.5,i.z+M*1.5),C=hi(n,i.x-y*1.5,i.z-M*1.5),P=hi(n,i.x-_*1.8,i.z-A*1.8),w=hi(n,i.x+_*1.8,i.z+A*1.8);i.pitch+=(Math.atan2(R-C,3)-i.pitch)*(1-Math.exp(-10*e)),i.roll+=(Math.atan2(w-P,3.6)-i.roll)*(1-Math.exp(-10*e))}else i.pitch*=Math.exp(-2*e),i.roll*=Math.exp(-2*e);return{boost:o,landed:p,launched:m,impacts:f}}function Ta(i=Lr(),t=Gt){return{x:i.x,y:t(i.x,i.z),z:i.z,heading:i.heading??0,speed:0,vx:0,vz:0,vy:0,energy:100,pitch:0,roll:0,grounded:!0}}function qx(i,t){const e=Vi.smoothstep(Math.max(Math.abs(i),Math.abs(t)),700,1120);return{depth:e,sky:new Xt(6670015).lerp(new Xt(1657704),e),sun:2-e*.95,ambient:1.45-e*.5,fogNear:350-e*110,fogFar:1050-e*290,headlight:30+e*160}}class Yx{constructor(t,e,n,s=!1){this.scene=t,this.sun=e,this.hemisphere=n,this.software=s,this.started=!1,this.headlamp=new td(14153445,0,95,Math.PI/6,.65,1.4),this.headlamp.castShadow=!1,this.locals=s?[]:[new Gc(16777215,0,90,1.5),new Gc(16777215,0,90,1.5)],s||t.add(this.headlamp,this.headlamp.target,...this.locals)}update(t,e,n){const s=qx(t.x,t.z),r=this.started?1-Math.exp(-e*2):1;if(this.started=!0,this.scene.background??=s.sky.clone(),this.scene.background.lerp(s.sky,r),this.scene.fog.color.lerp(s.sky,r),this.scene.fog.near=Vi.lerp(this.scene.fog.near,this.software?230:s.fogNear,r),this.scene.fog.far=Vi.lerp(this.scene.fog.far,this.software?630:s.fogFar,r),this.sun.intensity=Vi.lerp(this.sun.intensity,this.software?.55:s.sun,r),this.hemisphere.intensity=Vi.lerp(this.hemisphere.intensity,this.software?2:s.ambient,r),this.sun.position.set(t.x-90,t.y+150,t.z+90),this.sun.target.position.set(t.x,t.y,t.z),this.software)return;const o=-Math.sin(t.heading),a=-Math.cos(t.heading);this.headlamp.position.set(t.x+o*4,t.y+2.3,t.z+a*4);const l=t.x+o*35,h=t.z+a*35;this.headlamp.target.position.set(l,Gt(l,h)+.4,h),this.headlamp.intensity=Vi.lerp(this.headlamp.intensity,s.headlight,r);const c=pn.filter(u=>n.deliveries.includes(u.id)).sort((u,f)=>Math.hypot(u.x-t.x,u.z-t.z)-Math.hypot(f.x-t.x,f.z-t.z));this.locals.forEach((u,f)=>{const d=c[f];u.visible=!!d&&Math.hypot(d.x-t.x,d.z-t.z)<220,u.visible&&(u.color.setHex(d.color),u.intensity=220,u.position.set(d.x-32,Gt(d.x-32,d.z)+19,d.z))})}}try{let ft=function(D){q.textContent=D,q.classList.add("visible"),R=y+3},lt=function(){h.position={x:p.x,z:p.z,heading:p.heading},Hx(h)||ft("This browser could not save your progress.")},Et=function(D,E){h.activities.includes(D)||(h.activities.push(D),lt(),f.tone(950,.3),ft(E))},kt=function(){return`${h.coins.length} / ${c.coins.length} crowns · ${h.visited.length} / 7 areas explored · ${h.secrets.length} / 7 secrets · ${h.broken.length} props smashed · ${vi.filter(D=>h.trails[D.id]===D.gates.length).length} / 3 scenic routes · ${h.activities.filter(D=>D.startsWith("stunt:")).length} / 9 stunt rings · ${h.discoveries.length} / 3 destinations · ${h.keepsakes.length} / 9 keepsakes · ${h.deliveries.length} / 3 beacons restored`},Ot=function(D){A=D,u.clear(),D?(i("#progress").textContent=kt(),i("#legacy").textContent=h.legacy?`Previous town archived: ${h.legacy.coins} discoveries. Your wagon keeps that upgrade credit.`:"",L.open||L.showModal()):(L.open&&L.close(),O.open&&O.close()),M=performance.now()},te=function(D,E,B=!1){h.cargo&&!B&&(h.cargo=null,E+=" · Supplies returned to depot"),p=Ta(D,c.heightAt.bind(c)),g.resetPosition(),x.reset(),m.reset(),C=null,r.position.set(p.x+Math.sin(p.heading)*18,p.y+9,p.z+Math.cos(p.heading)*18),c.ensureAround(p.x,p.z,p.heading,!0),lt(),E&&ft(E)},Zt=function(D,E,B=!0){D.clearRect(0,0,E,E),D.fillStyle="#134c59",D.fillRect(0,0,E,E);const k=(z,U)=>[(z/Fe+.5)*E,(U/Fe+.5)*E];for(const z of Te){const[U,Z]=k(z.x,z.z),H=D.createRadialGradient(U,Z,0,U,Z,E*.19);H.addColorStop(0,z.color+"44"),H.addColorStop(1,z.color+"00"),D.fillStyle=H,D.beginPath(),D.arc(U,Z,E*.19,0,Math.PI*2),D.fill()}D.lineCap="round",D.lineJoin="round",D.strokeStyle="#afddd0",D.lineWidth=E>300?3:1.5;for(const z of Nn)D.beginPath(),z.nodes.forEach((U,Z)=>{const[H,nt]=k(U.x,U.z);Z?D.lineTo(H,nt):D.moveTo(H,nt)}),D.stroke();D.strokeStyle="#c4c393",D.lineWidth=E>300?2:1;for(const z of Cs)D.beginPath(),z.nodes.forEach((U,Z)=>{const[H,nt]=k(U.x,U.z);Z?D.lineTo(H,nt):D.moveTo(H,nt)}),D.stroke();for(const z of[...Xe,...pn]){const[U,Z]=k(z.x,z.z);D.fillStyle=h.deliveries.includes(z.id)||h.discoveries.includes(z.id)?"#83d8c7":"#c9bccf",D.fillRect(U-3,Z-3,6,6),E>300&&(D.font="11px system-ui",D.textAlign="center",D.fillText(z.name,U,Z-9))}for(const z of ja){const[U,Z]=k(z.x,z.z);D.strokeStyle=h.activities.includes(`stunt:${z.id}`)?"#89d2b3":"#f4c477",D.beginPath(),D.arc(U,Z,E>300?3:1.6,0,Math.PI*2),D.stroke()}for(const z of Te){const[U,Z]=k(z.x,z.z);D.fillStyle=h.visited.includes(z.id)?"#ffd56d":"#d9e9d8",D.beginPath(),D.arc(U,Z,E>300?5:2.2,0,Math.PI*2),D.fill(),E>300&&(D.font="600 12px system-ui",D.textAlign="center",D.fillText(z.name,U,Z-12))}for(const z of Yi){if(h.deliveries.includes(z.id))continue;const U=h.cargo===z.id?z.target:h.cargo?null:z.source;if(!U)continue;const[Z,H]=k(U.x,U.z);D.strokeStyle=h.cargo?"#ffdf89":"#d7bbf0",D.lineWidth=2,D.beginPath(),D.arc(Z,H,E>300?7:4,0,Math.PI*2),D.stroke()}if(B){const[z,U]=k(p.x,p.z);D.save(),D.translate(z,U),D.rotate(-p.heading),D.fillStyle="#fff2bb",D.strokeStyle="#155968",D.lineWidth=2,D.beginPath(),D.moveTo(0,-7),D.lineTo(5,6),D.lineTo(0,3),D.lineTo(-5,6),D.closePath(),D.fill(),D.stroke(),D.restore()}for(const z of vi){const U=z.gates[h.trails[z.id]??0];if(!U)continue;const[Z,H]=k(U.x,U.z);D.strokeStyle="#ffe292",D.lineWidth=E>300?2:1,D.strokeRect(Z-3,H-3,6,6),E>300&&(D.fillStyle="#fff1c5",D.font="11px system-ui",D.textAlign="center",D.fillText(`${z.name} ${(h.trails[z.id]??0)+1}/6`,Z,H+17))}},$=function(){u.clear(),A=!0,L.open&&L.close(),O.open||O.showModal(),Zt(i("#town-map").getContext("2d"),600),i("#map-progress").textContent=kt()+(h.cargo?` · Supplies aboard for ${Yi.find(D=>D.id===h.cargo).name}`:"");for(const D of Yi)document.querySelector(`[data-frontier="${D.id}"]`).textContent=h.deliveries.includes(D.id)?"Beacon restored":h.cargo===D.id?"Supplies aboard · drive here to deliver":`Supplies at ${D.source.name}`;for(const D of Gs){const E=D.items.filter(B=>h.keepsakes.includes(B.id)).length;document.querySelector(`[data-collection="${D.id}"]`).textContent=`${D.name} · ${E}/3${E===3?" · Complete":" · Drive through keepsakes"}`}},ut=function(){if(A)return;const D=Dx(h,p);D&&(lt(),f.tone(D.delivery?1200:700,.25),ft(D.service?"Boost recharged · ready to explore":D.delivery?`${D.label} · Complete`:`Supplies loaded · drive to ${Yi.find(E=>E.id===D.id).name}`))},et=function(){e.setSize(innerWidth,innerHeight),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix()},pt=function(D){requestAnimationFrame(pt);const E=Math.min((D-M)/1e3,.12);if(M=D,A)return;y+=E,X.frames++,X.totalTime+=E,X.frameMs=X.frameMs*.95+E*1e3*.05,X.totalTime>1&&(X.fps=Math.round(X.frames/X.totalTime),X.frames=0,X.totalTime=0);const B={throttle:Number(u.has("KeyW","ArrowUp"))-Number(u.has("KeyS","ArrowDown")),steer:Number(u.has("KeyD","ArrowRight"))-Number(u.has("KeyA","ArrowLeft")),brake:u.has("Space"),boost:u.has("ShiftLeft","ShiftRight")},k=Math.max(1,Math.ceil(E/(1/60)));for(let U=0;U<k;U++){const Z=Xx(p,B,E/k,c);if(m.step(p,(H,nt,Tt)=>{lt(),f.tone(Tt?1250:850,.18),ft(Tt?`${H.name} · collection complete`:`${H.item} found · ${nt}/3`)}),x.step(p,Z,(H,nt,Tt)=>{lt(),f.tone(Tt?1200:900,.22),ft(`${Tt?"Stunt badge":"New stunt best"} · ${H.id.replaceAll("-"," ")} · ${Math.round(nt)} m`)}),Z.launched&&!C&&(C={x:p.x,z:p.z}),Z.landed&&C){const H=Math.hypot(p.x-C.x,p.z-C.z);P=Math.max(P,H),H>35&&Et("jump","Long jump · 35 meters cleared"),C=null}}c.update(y,E,p,U=>{h.coins.push(U),f.tone(600+h.coins.length%7*70),(c.collected===30||c.collected===80)&&ft("Wagon upgraded · more speed and sharper handling"),lt()},U=>{h.broken.push(U),f.tone(120,.1),h.broken.length>=20&&Et("smash","Smash trail · 20 props broken"),lt()}),g.update(p,(U,Z,H)=>{lt(),f.tone(H?1100:780,.15),ft(H?`${U.name} complete`:`${U.name} · ${Z}/6 gates`)});for(const U of Xe)Math.hypot(p.x-U.x,p.z-U.z)<25&&!h.discoveries.includes(U.id)&&(h.discoveries.push(U.id),lt(),f.tone(1050,.2),ft(`Discovered · ${U.name}`));for(const U of Te)Math.hypot(p.x-U.x,p.z-U.z)<155&&!h.visited.includes(U.id)&&(h.visited.push(U.id),lt(),h.visited.length===7&&Et("explorer","Town explorer · all seven areas discovered"));for(const U of Hs)Math.hypot(p.x-U.x,p.z-U.z)<15&&!h.secrets.includes(U.id)&&(h.secrets.push(U.id),lt(),f.tone(1150,.3),ft(`Secret discovered · ${U.name}`));d.position.set(p.x,p.y,p.z),d.rotation.order="YXZ",d.rotation.set(p.pitch,p.heading,p.roll+B.steer*Math.min(Math.abs(p.speed)*.0025,.08));for(const U of d.userData.wheels)U.mesh.rotation.x+=p.speed*E/.73,U.mesh.rotation.y=U.front?-B.steer*.32:0;d.userData.propeller.rotation.z+=p.speed*E*.4,rt.set(p.x,p.y+2.2,p.z),Y.set(p.x+Math.sin(p.heading)*17,p.y+9,p.z+Math.cos(p.heading)*17),Y.y=Math.max(Y.y,c.heightAt(Y.x,Y.z)+3.8);for(let U=1;U<=8;U++){const Z=U/8,H=rt.x+(Y.x-rt.x)*Z,nt=rt.y+(Y.y-rt.y)*Z,Tt=rt.z+(Y.z-rt.z)*Z;if([...c.nearbySolids(H,Tt)].some(ht=>nt>ht.y&&nt<ht.y+ht.height&&Math.abs(H-ht.x)<ht.w/2+.5&&Math.abs(Tt-ht.z)<ht.d/2+.5)){Y.lerp(rt,1-Z+.08);break}}r.position.lerp(Y,1-Math.exp(-6*E)),r.lookAt(p.x-Math.sin(p.heading)*5,p.y+1.8,p.z-Math.cos(p.heading)*5),l.update(p,E,h);const z=Rh(h,p);if(i("#interact").hidden=!z,z&&(i("#interact").textContent=`${z.label} · E / Tap`),y-S>.14){i("#score").textContent=h.coins.length,i("#speed-value").textContent=Math.round(Math.abs(p.speed)*3.6),i("#boost").value=p.energy,i("#upgrade").textContent=c.collected>=80?"Boost III":c.collected>=30?"Boost II":"Boost",i("#district").textContent=[...Te,...pn].reduce((Z,H)=>Math.hypot(p.x-Z.x,p.z-Z.z)<Math.hypot(p.x-H.x,p.z-H.z)?Z:H).name,Zt(tt,168),S=y;const U=e.domElement;U.dataset.renderer=n?"software":"webgl",U.dataset.worldSize=Fe,U.dataset.activeChunks=[...c.chunks.values()].filter(Z=>Z.group.visible).length,U.dataset.frameMs=X.frameMs.toFixed(1),U.dataset.crowns=h.coins.length,U.dataset.position=`${p.x.toFixed(1)},${p.y.toFixed(1)},${p.z.toFixed(1)}`,U.dataset.grounded=p.grounded}y-w>10&&(lt(),w=y),y>R&&q.classList.remove("visible"),(!n||D-_>100)&&(e.render(s,r),n&&(e.domElement.style.background="transparent"),_=D)};const i=D=>document.querySelector(D),t=i("#game"),{renderer:e,software:n}=qg(t),s=new uf;s.fog=new Ba(6670015,n?230:350,n?630:1050);const r=new We(58,innerWidth/innerHeight,.2,n?650:1250),o=new jf(12970472,5401705,n?2:1.45);s.add(o),n&&s.add(new sd(14282973,.75));const a=new id(16772545,n?.55:2);a.position.set(-90,150,90),a.castShadow=!n,a.shadow.mapSize.set(1024,1024),a.shadow.camera.left=-60,a.shadow.camera.right=60,a.shadow.camera.top=60,a.shadow.camera.bottom=-60,a.shadow.camera.far=400,a.shadow.bias=-.001,a.shadow.normalBias=.06,s.add(a),s.add(a.target);const l=new Yx(s,a,o,n),h=kx(),c=new zx(s,h,{software:n}),u=new Fx,f=new Ox,d=cx(),g=new Tx(h),x=new Cx(h),m=new Lx(h);if(s.add(d),n&&d.traverse(D=>{D.isMesh&&(D.renderOrder=5)}),n){const D=[c.particleMesh,c.bubbleMesh];for(const E of D)s.remove(E);mh(s);for(const E of D)s.add(E),E.visible=!1}let p=Ta(h.position??Lr(),c.heightAt.bind(c)),y=0,M=performance.now(),_=0,A=!1,R=0,C=null,P=0,w=0,S=0;const L=i("#menu"),O=i("#atlas"),q=i("#toast"),j=i("#minimap"),tt=j.getContext("2d"),Y=new I,rt=new I,X={fps:0,frameMs:0,frames:0,totalTime:0};i("#total").textContent=c.coins.length,L.addEventListener("cancel",D=>{D.preventDefault(),Ot(!1)}),L.addEventListener("close",()=>{O.open||(A=!1,M=performance.now())}),O.addEventListener("cancel",D=>{D.preventDefault(),Ot(!1)}),O.addEventListener("close",()=>{L.open||(A=!1,M=performance.now())}),i("#pause").onclick=()=>Ot(!0),i("#help").onclick=()=>Ot(!0),i("#resume").onclick=()=>Ot(!1),i("#close-map").onclick=()=>Ot(!1),i("#reset").onclick=()=>te(c.recover(p.x,p.z),"Back on the nearest road.",!0),i("#sound").onclick=D=>{D.target.textContent=f.toggle()?"Sound on":"Sound off"};const it=["The three houses & kelp arch","Restaurant landmarks & smash trail","Jellyfish trails & coral grotto","Goofy Goober & pearl garden","Thug Tug & sunken treasure","Dune jumps & mountain lookout","Neptune’s castle & royal garden"],at=i("#area-list");Te.forEach((D,E)=>{const B=document.createElement("button");B.className="area",B.dataset.area=D.id;const k=document.createElement("strong");k.textContent=D.name;const z=document.createElement("small");z.textContent=it[E],B.append(k,z),B.onclick=()=>{Ot(!1),te(Lr(D.id),D.name)},at.append(B)});for(const D of[...Xe,...pn]){const E=document.createElement("button");E.className="area";const B=document.createElement("strong"),k=document.createElement("small");B.textContent=D.name,Xe.includes(D)?k.dataset.collection=D.id:k.dataset.frontier=D.id,k.textContent=Xe.includes(D)?"Drive through the floating keepsakes":"Outer waters · supply beacon",E.append(B,k),E.onclick=()=>{Ot(!1),te({x:D.x,z:D.z-20,heading:Math.PI},D.name)},at.append(E)}i("#interact").onclick=ut,i("#map").onclick=$,i("#minimap").onclick=$,addEventListener("keydown",D=>{D.repeat||(D.code==="Escape"&&(D.preventDefault(),Ot(!A)),D.code==="KeyE"&&(D.preventDefault(),ut()),D.code==="KeyR"&&i("#reset").click(),D.code==="KeyM"&&(D.preventDefault(),O.open?Ot(!1):$()))}),addEventListener("blur",()=>{A||Ot(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(lt(),Ot(!0))}),addEventListener("pagehide",lt),n||(t.addEventListener("webglcontextlost",D=>{D.preventDefault(),lt(),Ot(!0);const E=i("#error");E.hidden=!1,E.textContent="Graphics paused. Waiting for the browser to restore the game…"}),t.addEventListener("webglcontextrestored",()=>{i("#error").hidden=!0,ft("Graphics restored · choose Resume to continue")})),addEventListener("resize",et),et(),te(h.position??Lr()),window.__pattyWagon={get state(){return{...p}},get progress(){return structuredClone(h)},get diagnostics(){return{renderer:n?"software":"webgl",worldSize:Fe,roadLength:Math.round(Nn.reduce((D,E)=>D+E.length,0)),loopLength:Math.round(Nn[0].length),crowns:c.coins.length,breakables:c.breakables.length,ramps:c.ramps.length,districts:Te.length,activeChunks:[...c.chunks.values()].filter(D=>D.group.visible).length,cachedChunks:c.chunks.size,drawCalls:e.info.render.calls??e.info.render.faces,fps:X.fps,bestJump:P,districtDetails:c.districtObjects.length,scenicGates:c.scenicGates.length,destinations:c.discoveryObjects.length,stuntRings:c.stuntRings.length}}},ft("WASD / arrows · drive   Shift · boost   M · town map"),requestAnimationFrame(pt)}catch(i){const t=document.querySelector("#error");t.hidden=!1,t.textContent=`The underwater town could not start. Refresh the page to try again. ${i.message}`,console.error(i)}
