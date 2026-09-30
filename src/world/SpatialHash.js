export class SpatialHash {
  constructor(size = 48) {
    this.size = size;
    this.cells = new Map();
  }
  key(x, z) {
    return `${Math.floor(x / this.size)},${Math.floor(z / this.size)}`;
  }
  add(item) {
    const keys = [];
    const r = Math.max(item.w ?? 0, item.d ?? 0, item.radius ?? 0) / 2;
    for (
      let x = Math.floor((item.x - r) / this.size);
      x <= Math.floor((item.x + r) / this.size);
      x++
    )
      for (
        let z = Math.floor((item.z - r) / this.size);
        z <= Math.floor((item.z + r) / this.size);
        z++
      ) {
        const key = `${x},${z}`;
        if (!this.cells.has(key)) this.cells.set(key, new Set());
        this.cells.get(key).add(item);
        keys.push(key);
      }
    item.hashKeys = keys;
  }
  remove(item) {
    for (const key of item.hashKeys ?? []) {
      const set = this.cells.get(key);
      set?.delete(item);
      if (!set?.size) this.cells.delete(key);
    }
  }
  query(x, z, r = 8) {
    const items = new Set();
    for (
      let a = Math.floor((x - r) / this.size);
      a <= Math.floor((x + r) / this.size);
      a++
    )
      for (
        let b = Math.floor((z - r) / this.size);
        b <= Math.floor((z + r) / this.size);
        b++
      )
        for (const i of this.cells.get(`${a},${b}`) ?? []) items.add(i);
    return items;
  }
}
