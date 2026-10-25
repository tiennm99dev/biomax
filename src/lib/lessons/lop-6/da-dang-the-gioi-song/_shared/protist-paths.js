/**
 * SVG paths for drawing the pond protists of this chapter, centred at the
 * origin with the front end towards +x and sized by the body length `L` in
 * pixels. `t` (seconds) animates the flagellum, the cilia and the
 * pseudopodium; t = 0 gives a still picture.
 */

/** @param {number} v */
const r1 = (v) => Math.round(v * 10) / 10;

/**
 * Trùng roi xanh: blunt front end at +x, pointed tail at -x.
 * @param {number} L
 */
export function euglenaBody(L) {
  const h = L / 2;
  return `M ${r1(h)} 0 C ${r1(h)} ${r1(-L * 0.2)} ${r1(-h * 0.2)} ${r1(-L * 0.17)} ${r1(-h)} 0 C ${r1(-h * 0.2)} ${r1(L * 0.17)} ${r1(h)} ${r1(L * 0.2)} ${r1(h)} 0 Z`;
}

/**
 * The beating flagellum of trùng roi xanh, leaving the front end, about
 * 0.8 L long: a wave travelling away from the body.
 * @param {number} L @param {number} t
 */
export function flagellumPath(L, t) {
  const x0 = L / 2;
  const len = L * 0.8;
  let d = `M ${r1(x0)} 0`;
  for (let i = 1; i <= 16; i++) {
    const s = i / 16;
    const y = len * 0.18 * s * Math.sin(2 * Math.PI * (1.5 * s - 2 * t));
    d += ` L ${r1(x0 + len * s)} ${r1(y)}`;
  }
  return d;
}

/**
 * Trùng giày: a slipper sole with the oral groove notch on one side.
 * @param {number} L
 */
export function slipperBody(L) {
  const h = L / 2;
  return `M ${r1(-h)} 0 C ${r1(-h)} ${r1(-L * 0.27)} ${r1(h)} ${r1(-L * 0.3)} ${r1(h)} 0 C ${r1(h)} ${r1(L * 0.22)} ${r1(h * 0.27)} ${r1(L * 0.15)} 0 ${r1(L * 0.1)} C ${r1(-h * 0.33)} ${r1(L * 0.23)} ${r1(-h)} ${r1(L * 0.23)} ${r1(-h)} 0 Z`;
}

/**
 * The cilia of trùng giày: 36 short strokes round the body that bend in a
 * wave running round it.
 * @param {number} L @param {number} t
 */
export function ciliaPath(L, t) {
  const rx = L / 2;
  const ry = L * 0.22;
  const k = Math.max(3, L * 0.1);
  const parts = [];
  for (let i = 0; i < 36; i++) {
    const a = (2 * Math.PI * i) / 36;
    const out = a + 0.6 * Math.sin(a * 6 - 8 * t);
    parts.push(
      `M ${r1(rx * Math.cos(a))} ${r1(ry * Math.sin(a))} l ${r1(k * Math.cos(out))} ${r1(k * Math.sin(out))}`,
    );
  }
  return parts.join(' ');
}

/**
 * Trùng biến hình: a lobed blob whose chân giả grows towards +x and pulls
 * the body after it, in a cycle of 4 s. L is the resting width.
 * @param {number} L @param {number} t
 */
export function amoebaPath(L, t) {
  const r = L / 2;
  const phase = (((t % 4) + 4) % 4) / 4;
  const reach = Math.sin(Math.PI * phase);
  const n = 12;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (2 * Math.PI * i) / n;
    const front = Math.max(0, Math.cos(a)) ** 3;
    const side = 0.12 * Math.sin(3 * a + 2 * Math.PI * phase);
    const k = 1 + 0.8 * reach * front + side;
    return [r * k * Math.cos(a), r * 0.8 * k * Math.sin(a)];
  });
  /** @param {number} i */
  const mid = (i) => {
    const p = pts[i % n];
    const q = pts[(i + 1) % n];
    return `${r1((p[0] + q[0]) / 2)} ${r1((p[1] + q[1]) / 2)}`;
  };
  return `M ${mid(n - 1)} ${pts.map((p, i) => `Q ${r1(p[0])} ${r1(p[1])} ${mid(i)}`).join(' ')} Z`;
}

/**
 * Tảo silic: a boat-shaped glass shell with fine cross lines.
 * @param {number} L
 */
export function diatomPath(L) {
  const h = L / 2;
  const w = L * 0.18;
  let d = `M ${r1(-h)} 0 Q 0 ${r1(-2 * w)} ${r1(h)} 0 Q 0 ${r1(2 * w)} ${r1(-h)} 0 Z`;
  for (let i = 1; i < 8; i++) {
    const x = -h + (L * i) / 8;
    const y = w * Math.sqrt(Math.max(0, 1 - (x / h) ** 2));
    d += ` M ${r1(x)} ${r1(-y)} L ${r1(x)} ${r1(y)}`;
  }
  return d;
}

/**
 * Mảnh vụn: an irregular dark fragment.
 * @param {number} L
 */
export function debrisPath(L) {
  const h = L / 2;
  return `M ${r1(-h)} ${r1(-L * 0.1)} L ${r1(-h * 0.3)} ${r1(-L * 0.3)} L ${r1(h * 0.5)} ${r1(-L * 0.2)} L ${r1(h)} ${r1(L * 0.1)} L ${r1(h * 0.2)} ${r1(L * 0.3)} L ${r1(-h * 0.6)} ${r1(L * 0.2)} Z`;
}
