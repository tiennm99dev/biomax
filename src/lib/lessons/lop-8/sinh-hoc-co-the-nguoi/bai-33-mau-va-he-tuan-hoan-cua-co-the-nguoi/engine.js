/**
 * Blood groups and circulation, as the book teaches them.
 *
 * ABO system: red cells carry antigen A, B, both or neither; plasma carries
 * antibody α (clumps cells with antigen A) and/or β (clumps cells with
 * antigen B). A transfusion is safe when the recipient's antibodies do not
 * clump the donor's red cells.
 *
 * Circulation: blood leaves the right ventricle for the lungs (pulmonary
 * circuit) and comes back to the left atrium, then leaves the left ventricle
 * for the organs (systemic circuit) and comes back to the right atrium.
 */

/** @typedef {'A' | 'B' | 'AB' | 'O'} BloodGroup */

/** @type {BloodGroup[]} */
export const BLOOD_GROUPS = ['A', 'B', 'AB', 'O'];

/** Antigens on the red cells and antibodies in the plasma of each group. */
export const ABO =
  /** @type {Record<BloodGroup, { antigens: Array<'A' | 'B'>, antibodies: Array<'α' | 'β'> }>} */ ({
    A: { antigens: ['A'], antibodies: ['β'] },
    B: { antigens: ['B'], antibodies: ['α'] },
    AB: { antigens: ['A', 'B'], antibodies: [] },
    O: { antigens: [], antibodies: ['α', 'β'] },
  });

/** The antigen each antibody clumps. */
export const TARGET = /** @type {const} */ ({ α: 'A', β: 'B' });

/**
 * The recipient's antibodies that clump the donor's red cells.
 * @param {BloodGroup} donor
 * @param {BloodGroup} recipient
 * @returns {Array<'α' | 'β'>}
 */
export function clumpingAntibodies(donor, recipient) {
  const antigens = ABO[donor].antigens;
  return ABO[recipient].antibodies.filter((ab) => antigens.includes(TARGET[ab]));
}

/**
 * Whether blood of `donor` can be given to `recipient` (ABO only).
 * @param {BloodGroup} donor
 * @param {BloodGroup} recipient
 */
export function canGive(donor, recipient) {
  return clumpingAntibodies(donor, recipient).length === 0;
}

/**
 * Groups that can receive blood from `donor`.
 * @param {BloodGroup} donor
 */
export function recipientsOf(donor) {
  return BLOOD_GROUPS.filter((r) => canGive(donor, r));
}

/**
 * Explains one transfusion.
 * @param {BloodGroup} donor
 * @param {BloodGroup} recipient
 */
export function explainTransfusion(donor, recipient) {
  const bad = clumpingAntibodies(donor, recipient);
  const ag = ABO[donor].antigens;
  const ab = ABO[recipient].antibodies;
  const agText = ag.length ? `có kháng nguyên ${ag.join(' và ')}` : 'không có kháng nguyên A, B';
  const abText = ab.length ? `có kháng thể ${ab.join(' và ')}` : 'không có kháng thể α, β';
  const head = `Hồng cầu nhóm ${donor} ${agText}; huyết tương người nhận nhóm ${recipient} ${abText}.`;
  if (!bad.length)
    return `${head} Không có kháng thể nào gây kết dính hồng cầu được truyền: truyền được.`;
  const why = bad
    .map((x) => `kháng thể ${x} gây kết dính hồng cầu có kháng nguyên ${TARGET[x]}`)
    .join('; ');
  return `${head} ${why[0].toUpperCase()}${why.slice(1)}: hồng cầu bị kết dính, không truyền được.`;
}

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   loop: 'nho' | 'lon' | 'tim';
 *   rich: boolean;
 *   points: Array<[number, number]>;
 *   text: string;
 * }} Step
 */

/** Positions of the four chambers in the 320 × 360 circulation diagram. */
export const CHAMBERS = {
  'nhi-phai': { x: 100, y: 150, name: 'Tâm nhĩ phải' },
  'that-phai': { x: 100, y: 215, name: 'Tâm thất phải' },
  'nhi-trai': { x: 220, y: 150, name: 'Tâm nhĩ trái' },
  'that-trai': { x: 220, y: 215, name: 'Tâm thất trái' },
};

/**
 * The blood's path, starting in the right ventricle. `rich` is whether the
 * blood in that step is rich in oxygen (bright red) at the end of the step.
 * @type {Step[]}
 */
export const STEPS = [
  {
    id: 'dong-mach-phoi',
    name: 'Động mạch phổi',
    loop: 'nho',
    rich: false,
    points: [
      [100, 215],
      [60, 215],
      [60, 45],
      [110, 45],
    ],
    text: 'Tâm thất phải co, đẩy máu đỏ thẫm (nghèo O₂, giàu CO₂) vào động mạch phổi, lên phổi.',
  },
  {
    id: 'mao-mach-phoi',
    name: 'Mao mạch phổi',
    loop: 'nho',
    rich: true,
    points: [
      [110, 45],
      [210, 45],
    ],
    text: 'Ở mao mạch phổi, máu nhận O₂ từ phế nang và thải CO₂ vào phế nang, trở thành máu đỏ tươi.',
  },
  {
    id: 'tinh-mach-phoi',
    name: 'Tĩnh mạch phổi',
    loop: 'nho',
    rich: true,
    points: [
      [210, 45],
      [260, 45],
      [260, 150],
      [220, 150],
    ],
    text: 'Máu đỏ tươi giàu O₂ theo tĩnh mạch phổi về tâm nhĩ trái. Kết thúc vòng tuần hoàn nhỏ.',
  },
  {
    id: 'trai',
    name: 'Tâm nhĩ trái → tâm thất trái',
    loop: 'tim',
    rich: true,
    points: [
      [220, 150],
      [220, 215],
    ],
    text: 'Tâm nhĩ trái co, đẩy máu qua van nhĩ – thất xuống tâm thất trái.',
  },
  {
    id: 'dong-mach-chu',
    name: 'Động mạch chủ',
    loop: 'lon',
    rich: true,
    points: [
      [220, 215],
      [280, 215],
      [280, 320],
      [210, 320],
    ],
    text: 'Tâm thất trái co mạnh, đẩy máu đỏ tươi giàu O₂ và chất dinh dưỡng vào động mạch chủ, đến các cơ quan.',
  },
  {
    id: 'mao-mach-co-quan',
    name: 'Mao mạch ở các cơ quan',
    loop: 'lon',
    rich: false,
    points: [
      [210, 320],
      [110, 320],
    ],
    text: 'Ở mao mạch các cơ quan, máu cung cấp O₂, chất dinh dưỡng cho tế bào và nhận CO₂, chất thải, trở thành máu đỏ thẫm.',
  },
  {
    id: 'tinh-mach-chu',
    name: 'Tĩnh mạch chủ',
    loop: 'lon',
    rich: false,
    points: [
      [110, 320],
      [40, 320],
      [40, 150],
      [100, 150],
    ],
    text: 'Máu đỏ thẫm theo tĩnh mạch chủ về tâm nhĩ phải. Kết thúc vòng tuần hoàn lớn.',
  },
  {
    id: 'phai',
    name: 'Tâm nhĩ phải → tâm thất phải',
    loop: 'tim',
    rich: false,
    points: [
      [100, 150],
      [100, 215],
    ],
    text: 'Tâm nhĩ phải co, đẩy máu qua van nhĩ – thất xuống tâm thất phải, rồi một vòng mới bắt đầu.',
  },
];

/**
 * The point a fraction `t` (0-1) of the way along a polyline.
 * @param {Array<[number, number]>} pts
 * @param {number} t
 * @returns {[number, number]}
 */
export function along(pts, t) {
  const lens = [];
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    lens.push(l);
    total += l;
  }
  let d = Math.min(1, Math.max(0, t)) * total;
  for (let i = 0; i < lens.length; i++) {
    if (d <= lens[i] || i === lens.length - 1) {
      const f = lens[i] ? Math.min(1, d / lens[i]) : 0;
      return [
        pts[i][0] + f * (pts[i + 1][0] - pts[i][0]),
        pts[i][1] + f * (pts[i + 1][1] - pts[i][1]),
      ];
    }
    d -= lens[i];
  }
  return pts[pts.length - 1];
}

/**
 * Whether the blood moving along a step is rich in oxygen at fraction `t`:
 * it changes colour in the middle of a capillary bed.
 * @param {number} i step index
 * @param {number} t
 */
export function richAt(i, t) {
  const s = STEPS[i];
  if (s.id === 'mao-mach-phoi') return t >= 0.5;
  if (s.id === 'mao-mach-co-quan') return t < 0.5;
  return s.rich;
}
