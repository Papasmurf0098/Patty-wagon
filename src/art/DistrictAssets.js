import * as T from "three";
import { box,ball,cylinder,ring,mesh,sign,mergeStaticAsset } from "./Models.js";
import { surfaceMaterial as surface } from "./Materials.js";
const wood=surface("wood",0xa38a65), metal=surface("metal",0x5c8d8b),
  stone=surface("stone",0xb4cbb9), rope=surface("cloth",0xd6c89a);
export function makeDistrictDetail(detail) {
  const g=new T.Group(), solids=[];
  const solid=(x,z,w,d,height,y=0)=>solids.push({x,z,w,d,height,y});
  switch(detail.kind) {
    case "tower":
      for(const x of [-4,4]) for(const z of [-4,4]) {
        cylinder(g,x,8,z,0.35,16,metal); solid(x,z,0.7,0.7,16);
        const brace=box(g,x,8,0,0.2,10,0.2,metal); brace.rotation.x=x<0?0.8:-0.8;
      }
      cylinder(g,0,18,0,6,7,metal); solid(0,0,12,12,7,14.5);
      mesh(g,new T.ConeGeometry(6.6,3,20),wood,0,23,0);
      for(let y=1;y<16;y+=1) box(g,5,y,0,0.8,0.13,0.13,metal);
      for(const x of [4.6,5.4]) cylinder(g,x,8,0,0.07,16,metal);
      sign(g,detail.label,0,18.5,6.05,10,"#476f79");
      break;
    case "observatory":
      box(g,0,1,0,16,2,12,wood); solid(0,0,16,12,2);
      for(const x of [-6,6]) for(const z of [-4,4]) cylinder(g,x,5,z,0.2,8,wood);
      mesh(g,new T.ConeGeometry(11,4,4),surface("cloth",0x9894b6),0,10,0).rotation.y=Math.PI/4;
      for(const x of [-4,4]) {
        cylinder(g,x,3.6,0,0.12,3.2,metal);
        const scope=cylinder(g,x,5.4,-0.8,0.5,2.7,metal); scope.rotation.x=Math.PI/2-0.35;
        ball(g,x,5.85,-1.8,0.53,0.53,0.12,0x91ddd4);
      }
      sign(g,detail.label,0,7,4.3,11,"#66557f"); break;
    case "billboard":
      for(const x of [-5,5]) { cylinder(g,x,5,0,0.28,10,wood); solid(x,0,0.6,0.6,10); }
      box(g,0,10,0,16,6,0.6,wood); solid(0,0,16,0.6,6,7);
      sign(g,detail.label,0,10,0.34,15,"#ad6b52");
      for(const x of [-6,0,6]) { box(g,x,13.7,0.7,0.18,1,1.2,metal); ball(g,x,13.3,1.2,0.4,0.2,0.4,0xf5dfad); }
      break;
    case "boardwalk":
      for(let i=0;i<25;i++) box(g,0,0.6,-18+i*1.5,10,1.2,1.38,wood);
      // A low boardwalk has a real drivable surface supplied by World.heightAt.
      for(const x of [-5.5,5.5]) for(let z=-18;z<=18;z+=6) {
        cylinder(g,x,1.6,z,0.24,3.2,wood); solid(x,z,0.5,0.5,3.2);
        ring(g,x,2.6,z,0.28,0.08,rope).rotation.x=Math.PI/2;
      }
      sign(g,detail.label,0,5,-17,9,"#507f79"); break;
    case "beacon":
      cylinder(g,0,10,0,5,20,stone); solid(0,0,10,10,20);
      for(const y of [5,12,19]) ring(g,0,y,0,5.08,0.22,metal).rotation.x=Math.PI/2;
      cylinder(g,0,21,0,6,0.5,metal);
      for(let i=0;i<8;i++) { const a=i*Math.PI/4; cylinder(g,Math.cos(a)*4.8,23,Math.sin(a)*4.8,0.14,4,metal); }
      ball(g,0,23,0,2,2,2,0xffe8a2);
      mesh(g,new T.ConeGeometry(6.5,3,16),wood,0,26,0);
      box(g,0,2,5,2,4,0.2,metal); sign(g,detail.label,0,8,5.1,7,"#547577"); break;
    case "crane": {
      box(g,0,1.2,0,10,2.4,10,stone); solid(0,0,10,10,2.4);
      for(const x of [-3,3]) { box(g,x,8,0,0.45,16,0.45,metal); solid(x,0,0.5,0.5,16); }
      for(let y=3;y<16;y+=3) {
        box(g,0,y,0,6,0.24,0.24,metal);
        const brace=box(g,0,y+1.5,0,6.6,0.18,0.18,metal); brace.rotation.z=0.46;
      }
      box(g,6,16.5,0,21,0.6,1.5,metal); solid(6,0,21,1.5,0.6,16.2);
      cylinder(g,14,10,0,0.09,13,rope);
      ring(g,14,3.5,0,0.65,0.16,metal);
      for(const x of [-7,7]) box(g,x,0.7,6,3,1.4,3,wood);
      sign(g,detail.label,0,6,0.5,6,"#8c7057"); break;
    }
    case "fountain":
      cylinder(g,0,0.5,0,8,1,stone); solid(0,0,16,16,1);
      ring(g,0,1.2,0,7.2,0.6,stone).rotation.x=Math.PI/2;
      cylinder(g,0,1.08,0,6.6,0.1,0x69b8bb);
      cylinder(g,0,3,0,0.7,4,stone); solid(0,0,1.4,1.4,5);
      mesh(g,new T.SphereGeometry(2.8,16,8,0,Math.PI*2,0,Math.PI/2),surface("stone",0xe2ceb0),0,5,0);
      ball(g,0,6,0,1.2,1.2,1.2,0xecdf9f);
      for(let i=0;i<12;i++) { const a=i*Math.PI/6; ball(g,Math.cos(a)*7.5,1.4,Math.sin(a)*7.5,0.35,0.35,0.35,0xd9d7b1); }
      break;
  }
  mergeStaticAsset(g); g.name=detail.id;
  return {group:g,solids};
}
