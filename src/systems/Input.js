export class Input {
  constructor() {
    this.keys = new Set();
    this.pointers = new Map();
    const allowed = /^(Arrow|Key[WASDR]|Space|Shift|Escape)/;
    addEventListener("keydown", (e) => {
      if (allowed.test(e.code)) {
        e.preventDefault();
        this.keys.add(e.code);
      }
    });
    addEventListener("keyup", (e) => this.keys.delete(e.code));
    addEventListener("blur", () => this.clear());
    for (const button of document.querySelectorAll("[data-key]")) {
      button.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        button.setPointerCapture(e.pointerId);
        this.pointers.set(e.pointerId, button.dataset.key);
        this.keys.add(button.dataset.key);
      });
      const release = (e) => {
        const key = this.pointers.get(e.pointerId);
        this.pointers.delete(e.pointerId);
        if (![...this.pointers.values()].includes(key)) this.keys.delete(key);
      };
      button.addEventListener("pointerup", release);
      button.addEventListener("pointercancel", release);
      button.addEventListener("lostpointercapture", release);
    }
  }
  has(...keys) {
    return keys.some((key) => this.keys.has(key));
  }
  clear() {
    this.keys.clear();
    this.pointers.clear();
  }
}
