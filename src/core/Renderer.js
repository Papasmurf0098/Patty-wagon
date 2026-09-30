import * as T from "three";
import { SVGRenderer } from "three/addons/renderers/SVGRenderer.js";
export function createRenderer(canvas) {
  const preferSoftware =
    new URLSearchParams(location.search).get("renderer") === "software";
  if (!preferSoftware)
    try {
      const renderer = new T.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = T.PCFSoftShadowMap;
      renderer.outputColorSpace = T.SRGBColorSpace;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      renderer.setClearColor(0, 0);
      return { renderer, software: false };
    } catch {}
  const renderer = new SVGRenderer();
  renderer.setQuality("low");
  renderer.domElement.id = "game";
  renderer.domElement.setAttribute("role", "img");
  renderer.domElement.setAttribute("aria-label", "Underwater driving world");
  canvas.replaceWith(renderer.domElement);
  return { renderer, software: true };
}
export function prepareSoftwareScene(root) {
  const instances = [];
  root.traverse((n) => {
    if (n.isInstancedMesh && !n.userData.softwareCopies) instances.push(n);
  });
  const transform = new T.Matrix4();
  for (const batch of instances) {
    batch.visible = false;
    const copies = [];
    const group = new T.Group();
    group.position.copy(batch.position);
    batch.parent.add(group);
    for (let i = 0; i < batch.count; i++) {
      const m = new T.Mesh(batch.geometry, batch.material);
      batch.getMatrixAt(i, transform);
      transform.decompose(m.position, m.quaternion, m.scale);
      group.add(m);
      copies.push(m);
    }
    batch.userData.softwareCopies = copies;
  }
}
export function setInstance(batch, index, object) {
  object.updateMatrix();
  batch.setMatrixAt(index, object.matrix);
  const copy = batch.userData.softwareCopies?.[index];
  if (copy) {
    copy.position.copy(object.position);
    copy.quaternion.copy(object.quaternion);
    copy.scale.copy(object.scale);
    copy.visible = object.scale.x > 0;
  }
}
