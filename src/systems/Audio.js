export class Audio {
  constructor() {
    this.enabled = false;
    this.ctx = null;
  }
  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.ctx ??= new AudioContext();
      this.ctx.resume();
    }
    return this.enabled;
  }
  horn() {
    this.tone(220, 0.25);
    this.tone(330, 0.25);
  }
  tone(frequency = 650, duration = 0.12) {
    if (!this.enabled || !this.ctx) return;
    const o = this.ctx.createOscillator(),
      g = this.ctx.createGain();
    o.type = "sine";
    o.frequency.value = frequency;
    g.gain.setValueAtTime(0.06, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    o.connect(g).connect(this.ctx.destination);
    o.start();
    o.stop(this.ctx.currentTime + duration);
  }
}
