import * as T from "three";
import { SVGRenderer } from "three/addons/renderers/SVGRenderer.js";

export function createRenderer(canvas) {
  try {
    const renderer = new T.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "default",
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    return { renderer, software: false };
  } catch {
    const renderer = new SVGRenderer();
    renderer.setQuality("low");
    renderer.domElement.id = "game";
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.setAttribute("aria-label", "3D driving world");
    canvas.replaceWith(renderer.domElement);
    return { renderer, software: true };
  }
}

// SVG needs individual transforms; GPU rendering keeps efficient instancing.
export function prepareSoftwareScene(scene, particleMesh) {
  const instances = [];
  scene.traverse((node) => {
    if (node.isInstancedMesh) instances.push(node);
  });
  const transform = new T.Matrix4();
  for (const mesh of instances) {
    mesh.visible = false;
    if (mesh === particleMesh) continue;
    const group = new T.Group();
    group.position.copy(mesh.position);
    group.quaternion.copy(mesh.quaternion);
    group.scale.copy(mesh.scale);
    for (let i = 0; i < mesh.count; i++) {
      mesh.getMatrixAt(i, transform);
      const copy = new T.Mesh(mesh.geometry, mesh.material);
      transform.decompose(copy.position, copy.quaternion, copy.scale);
      group.add(copy);
    }
    scene.add(group);
  }
  // Reduced tessellation keeps the compatibility renderer responsive.
  scene.traverse((node) => {
    if (!node.isMesh) return;
    if (node.geometry.type === "SphereGeometry") {
      node.geometry = new T.SphereGeometry(
        node.geometry.parameters.radius,
        8,
        6,
      );
    }
  });
}
