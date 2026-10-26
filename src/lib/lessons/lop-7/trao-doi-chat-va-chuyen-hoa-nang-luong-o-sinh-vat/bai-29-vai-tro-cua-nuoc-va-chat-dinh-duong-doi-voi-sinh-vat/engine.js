/**
 * A drag-and-turn model of polar water molecules. A water molecule is one
 * oxygen atom bonded to two hydrogen atoms (bond angle about 104,5°); the
 * oxygen end carries a partial negative charge (δ−), each hydrogen a partial
 * positive charge (δ+). Opposite charges that come close attract: between two
 * water molecules this is a hydrogen bond; around a sodium ion (Na⁺) the
 * oxygen ends turn inward, around a chloride ion (Cl⁻) the hydrogen ends do,
 * which is how water dissolves table salt. Oil carries no charge, so water
 * does not attract it and it does not dissolve.
 */

/** @typedef {'water' | 'na' | 'cl' | 'oil'} Kind */
/** @typedef {{ id: string, kind: Kind, x: number, y: number, angle: number }} Molecule */
/** @typedef {{ el: string, charge: -1 | 0 | 1, x: number, y: number, r: number }} Atom */
/** @typedef {{ a: string, b: string, x1: number, y1: number, x2: number, y2: number, kind: 'hydrogen' | 'ion' }} Pull */

/** O-H bond length and half the H-O-H angle, in drawing units and degrees. */
export const BOND = 22;
export const HALF_ANGLE = 52.25;

/** Radii of the drawn atoms. */
export const RADIUS = { O: 14, H: 9, Na: 13, Cl: 17, C: 10 };

/** Extra gap within which opposite charges count as attracting. */
export const REACH = 9;

const rad = (/** @type {number} */ d) => (d * Math.PI) / 180;

/**
 * The atoms of a molecule, placed from its position and angle. For water the
 * angle is the direction the hydrogen end points to (0° = right).
 * @param {Molecule} m
 * @returns {Atom[]}
 */
export function atomsOf(m) {
  if (m.kind === 'na') return [{ el: 'Na', charge: 1, x: m.x, y: m.y, r: RADIUS.Na }];
  if (m.kind === 'cl') return [{ el: 'Cl', charge: -1, x: m.x, y: m.y, r: RADIUS.Cl }];
  if (m.kind === 'oil')
    return [-1.5, -0.5, 0.5, 1.5].map((k, i) => ({
      el: 'C',
      charge: /** @type {0} */ (0),
      x: m.x + k * 18 * Math.cos(rad(m.angle)),
      y: m.y + k * 18 * Math.sin(rad(m.angle)) + (i % 2 ? 5 : -5),
      r: RADIUS.C,
    }));
  /** @type {Atom[]} */
  const atoms = [{ el: 'O', charge: -1, x: m.x, y: m.y, r: RADIUS.O }];
  for (const s of [-1, 1]) {
    const a = rad(m.angle + s * HALF_ANGLE);
    atoms.push({
      el: 'H',
      charge: 1,
      x: m.x + BOND * Math.cos(a),
      y: m.y + BOND * Math.sin(a),
      r: RADIUS.H,
    });
  }
  return atoms;
}

/**
 * Attractions between molecules: for each pair, the two closest atoms
 * attract when they carry opposite charges and are close enough. Like
 * charges or an uncharged atom in front (oil) give no pull.
 * @param {Molecule[]} molecules
 * @returns {Pull[]}
 */
export function pulls(molecules) {
  /** @type {Pull[]} */
  const out = [];
  for (let i = 0; i < molecules.length; i += 1) {
    for (let j = i + 1; j < molecules.length; j += 1) {
      const m = molecules[i];
      const n = molecules[j];
      if (m.kind !== 'water' && n.kind !== 'water') continue;
      let best = null;
      let bestGap = Infinity;
      for (const p of atomsOf(m)) {
        for (const q of atomsOf(n)) {
          const gap = Math.hypot(p.x - q.x, p.y - q.y) - p.r - q.r;
          if (gap < bestGap) {
            bestGap = gap;
            best = { p, q };
          }
        }
      }
      if (best && bestGap <= REACH && best.p.charge * best.q.charge < 0)
        out.push({
          a: m.id,
          b: n.id,
          x1: best.p.x,
          y1: best.p.y,
          x2: best.q.x,
          y2: best.q.y,
          kind: m.kind === 'water' && n.kind === 'water' ? 'hydrogen' : 'ion',
        });
    }
  }
  return out;
}

/**
 * What the arrangement shows, for the live feedback line.
 * @param {Molecule[]} molecules
 * @param {'none' | 'salt' | 'oil'} solute
 */
export function explain(molecules, solute) {
  const ps = pulls(molecules);
  const h = ps.filter((p) => p.kind === 'hydrogen').length;
  if (solute === 'oil')
    return `Dầu ăn không tích điện nên các phân tử nước không hút dầu; nước chỉ hút nhau (${h} liên kết hydrogen). Vì vậy dầu không tan trong nước mà nổi thành lớp riêng.`;
  if (solute === 'salt') {
    const ions = molecules.filter((m) => m.kind === 'na' || m.kind === 'cl').map((m) => m.id);
    const around = ps.filter((p) => ions.includes(p.a) || ions.includes(p.b)).length;
    if (around === 0)
      return 'Kéo các phân tử nước lại gần ion: đầu O (δ−) hướng vào ion Na⁺, đầu H (δ+) hướng vào ion Cl⁻. Dùng nút xoay để quay phân tử nước.';
    return `Có ${around} lực hút giữa phân tử nước và ion (cùng ${h} liên kết hydrogen giữa các phân tử nước). Nước hút và bao quanh từng ion Na⁺, Cl⁻, kéo chúng tách khỏi nhau: đó là lí do muối ăn tan trong nước.`;
  }
  if (h === 0)
    return 'Kéo đầu H (δ+) của một phân tử nước lại gần đầu O (δ−) của phân tử khác để thấy chúng hút nhau.';
  return `Có ${h} liên kết hydrogen: đầu H mang điện dương một phần của phân tử này hút đầu O mang điện âm một phần của phân tử bên cạnh.`;
}

/**
 * Starting molecules for a solute choice.
 * @param {'none' | 'salt' | 'oil'} solute
 * @returns {Molecule[]}
 */
export function start(solute) {
  /** @type {Molecule[]} */
  const water = [
    { id: 'w1', kind: 'water', x: 50, y: 50, angle: 90 },
    { id: 'w2', kind: 'water', x: 300, y: 50, angle: 180 },
    { id: 'w3', kind: 'water', x: 60, y: 210, angle: 0 },
    { id: 'w4', kind: 'water', x: 300, y: 210, angle: 270 },
    { id: 'w5', kind: 'water', x: 180, y: 40, angle: 45 },
  ];
  if (solute === 'salt')
    return [
      ...water,
      { id: 'na', kind: 'na', x: 150, y: 140, angle: 0 },
      { id: 'cl', kind: 'cl', x: 220, y: 140, angle: 0 },
    ];
  if (solute === 'oil') return [...water, { id: 'oil', kind: 'oil', x: 180, y: 140, angle: 0 }];
  return water;
}
