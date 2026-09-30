import { generateChunk } from "./ChunkData.js";
self.onmessage = ({ data }) => {
  const result = generateChunk(data.cx, data.cz, data.segments);
  self.postMessage({ ...result, key: data.key }, [
    result.positions.buffer,
    result.colors.buffer,
    result.uv.buffer,
    result.indices.buffer,
    result.paint.buffer,
  ]);
};
