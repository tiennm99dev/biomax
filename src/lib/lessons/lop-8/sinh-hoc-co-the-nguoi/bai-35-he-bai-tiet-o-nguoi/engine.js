/**
 * A teaching model of urine formation in one nephron of a healthy person.
 *
 * Urine forms in three stages:
 * 1. Lọc máu at the glomerulus (cầu thận): water and small dissolved
 *    substances pass into the glomerular capsule (nang cầu thận) and make the
 *    primary urine (nước tiểu đầu); blood cells and proteins are too large and
 *    stay in the blood.
 * 2. Hấp thụ lại in the renal tubule (ống thận): needed substances (all the
 *    glucose, most of the water and salts) return to the blood of the
 *    capillaries around the tubule.
 * 3. Bài tiết tiếp: the tubule secretes more waste and excess substances
 *    (creatinine, drugs, excess H⁺ and K⁺) from the blood into the tubule.
 *    What is left is the final urine (nước tiểu chính thức).
 *
 * Places a substance can be: 'mau' (blood in the glomerulus), 'nang'
 * (capsule, primary urine), 'ong-than' (tubule), 'mao-mach' (capillary
 * around the tubule, back in the blood) and 'be-than' (renal pelvis, final
 * urine).
 */

/** @typedef {'mau' | 'nang' | 'ong-than' | 'mao-mach' | 'be-than'} Place */
/** @typedef {'all' | 'most' | 'part' | 'none'} Share */

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   filtered: boolean;
 *   reabsorbed: Share;
 *   secreted: boolean;
 *   why: string;
 * }} Substance
 */

/** @type {Substance[]} */
export const SUBSTANCES = [
  {
    id: 'te-bao-mau',
    name: 'Tế bào máu',
    filtered: false,
    reabsorbed: 'none',
    secreted: false,
    why: 'Tế bào máu có kích thước lớn, không lọt qua được lỗ lọc của thành mao mạch cầu thận.',
  },
  {
    id: 'protein',
    name: 'Protein',
    filtered: false,
    reabsorbed: 'none',
    secreted: false,
    why: 'Phân tử protein lớn, không lọt qua được lỗ lọc nên ở lại trong máu.',
  },
  {
    id: 'glucose',
    name: 'Glucose',
    filtered: true,
    reabsorbed: 'all',
    secreted: false,
    why: 'Glucose là chất dinh dưỡng cần thiết nên được hấp thụ lại toàn bộ ở ống thận.',
  },
  {
    id: 'nuoc',
    name: 'Nước',
    filtered: true,
    reabsorbed: 'most',
    secreted: false,
    why: 'Phần lớn nước được hấp thụ lại, phần còn lại hòa tan các chất thải thành nước tiểu.',
  },
  {
    id: 'muoi',
    name: 'Muối khoáng (Na⁺, Cl⁻)',
    filtered: true,
    reabsorbed: 'most',
    secreted: false,
    why: 'Các ion cần thiết được hấp thụ lại phần lớn; phần thừa thải theo nước tiểu.',
  },
  {
    id: 'urea',
    name: 'Urea',
    filtered: true,
    reabsorbed: 'part',
    secreted: false,
    why: 'Urea là chất thải của quá trình phân giải protein; chỉ một phần trở lại máu, phần còn lại thải theo nước tiểu.',
  },
  {
    id: 'creatinine',
    name: 'Creatinine',
    filtered: true,
    reabsorbed: 'none',
    secreted: true,
    why: 'Creatinine là chất thải: không được hấp thụ lại mà còn được ống thận bài tiết tiếp.',
  },
  {
    id: 'thuoc',
    name: 'Chất thuốc, ion H⁺ dư',
    filtered: true,
    reabsorbed: 'none',
    secreted: true,
    why: 'Chất thuốc và ion H⁺ dư được ống thận bài tiết tiếp từ máu vào nước tiểu.',
  },
];

/** The three stages of urine formation, in order. */
export const STAGES = [
  { id: 'loc', name: 'Lọc máu', where: 'cầu thận' },
  { id: 'hap-thu', name: 'Hấp thụ lại', where: 'ống thận' },
  { id: 'bai-tiet', name: 'Bài tiết tiếp', where: 'ống thận' },
];

/** @param {string} id */
export function substance(id) {
  const s = SUBSTANCES.find((x) => x.id === id);
  if (!s) throw new Error(`unknown substance ${id}`);
  return s;
}

/**
 * Where the substance is after `stage` stages (0: in the blood entering the
 * glomerulus, 3: when the final urine has formed). A substance can be in two
 * places at once when only part of it moves.
 * @param {string} id
 * @param {number} stage 0 to 3
 * @returns {Place[]}
 */
export function placesAfter(id, stage) {
  const s = substance(id);
  if (stage <= 0) return ['mau'];
  if (!s.filtered) return ['mao-mach'];
  if (stage === 1) return ['nang'];
  /** @type {Place[]} */
  const afterReabsorb =
    s.reabsorbed === 'all'
      ? ['mao-mach']
      : s.reabsorbed === 'none'
        ? ['ong-than']
        : ['mao-mach', 'ong-than'];
  if (stage === 2) return afterReabsorb;
  /** @type {Place[]} */
  const out = afterReabsorb.map((p) => (p === 'ong-than' ? 'be-than' : p));
  if (s.secreted && !out.includes('be-than')) out.push('be-than');
  return out;
}

/**
 * Is the substance found in the primary urine and in the final urine of a
 * healthy person?
 * @param {string} id
 */
export function inUrine(id) {
  const s = substance(id);
  return {
    primary: s.filtered,
    final: placesAfter(id, 3).includes('be-than'),
  };
}

/**
 * The sentence for one stage of the journey of a substance.
 * @param {string} id
 * @param {number} stage 0 to 3
 */
export function describeStage(id, stage) {
  const s = substance(id);
  const name = s.name.charAt(0).toLowerCase() + s.name.slice(1);
  const n = s.id === 'te-bao-mau' ? 'Tế bào máu' : s.name;
  if (stage <= 0) return `${n} theo máu đi vào cầu thận.`;
  if (stage === 1)
    return s.filtered
      ? `Lọc máu: ${name} lọt qua thành mao mạch cầu thận vào nang cầu thận, có trong nước tiểu đầu.`
      : `Lọc máu: ${name} không lọt qua lỗ lọc, ở lại trong máu và theo máu đi ra khỏi cầu thận. Nước tiểu đầu không có ${name}.`;
  if (!s.filtered)
    return `${n} vẫn ở trong máu, không có trong nước tiểu đầu nên cũng không có trong nước tiểu chính thức.`;
  if (stage === 2) {
    if (s.reabsorbed === 'all')
      return `Hấp thụ lại: toàn bộ ${name} được ống thận hấp thụ lại, trở về máu.`;
    if (s.reabsorbed === 'most')
      return `Hấp thụ lại: phần lớn ${name} trở về máu, một phần nhỏ còn lại trong ống thận.`;
    if (s.reabsorbed === 'part')
      return `Hấp thụ lại: chỉ một phần ${name} trở về máu, phần còn lại ở trong ống thận.`;
    return `Hấp thụ lại: ${name} không được hấp thụ lại, vẫn ở trong ống thận.`;
  }
  if (s.secreted)
    return `Bài tiết tiếp: ống thận lấy thêm ${name} từ máu đưa vào ống thận. ${n} có trong nước tiểu chính thức.`;
  if (inUrine(id).final)
    return `Bài tiết tiếp: phần ${name} còn lại trong ống thận đi vào nước tiểu chính thức, đổ vào bể thận.`;
  return `Nước tiểu chính thức không có ${name} vì đã được hấp thụ lại hết.`;
}
