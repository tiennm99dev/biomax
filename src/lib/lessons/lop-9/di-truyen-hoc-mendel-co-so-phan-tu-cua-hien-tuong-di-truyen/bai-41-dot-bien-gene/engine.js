/**
 * Point mutations in a gene: find which single base pair was lost, added or
 * replaced between the starting coding strand and the edited one, count base
 * pairs and hydrogen bonds before and after, and check the mutation missions
 * of the lesson widget. The genetic code and the effect on the protein come
 * from the domain codon module.
 */
import { clean, compareProteins, hydrogenBonds } from '#lib/domain/codons.js';

/** Genes offered in the widget: coding strand, 5' → 3'. */
export const GENES = [
  {
    id: 'mau',
    label: 'Gene mẫu',
    seq: 'ATGCATGAGTGGAAATACTAA',
    note: 'Một gene ngắn mã hoá chuỗi Met – His – Glu – Trp – Lys – Tyr.',
  },
  {
    id: 'globin',
    label: 'Đầu gene β-globin',
    seq: 'ATGGTGCACCTGACTCCTGAGGAGAAGTAA',
    note: 'Đoạn đầu gene β-globin của hemoglobin (thêm mã kết thúc cho gọn). Thử thay A ở nucleotide thứ $20$ bằng T: GAG thành GTG, Glu thành Val, như ở bệnh hồng cầu hình liềm.',
  },
];

/** @typedef {'substitution' | 'insertion' | 'deletion'} PointKind */

export const KIND_LABELS = /** @type {Record<PointKind, string>} */ ({
  substitution: 'Thay thế một cặp nucleotide',
  insertion: 'Thêm một cặp nucleotide',
  deletion: 'Mất một cặp nucleotide',
});

/**
 * @typedef {{ kind: 'none' }
 *   | { kind: 'many' }
 *   | { kind: 'substitution', at: number, from: string, to: string }
 *   | { kind: 'insertion', at: number, base: string }
 *   | { kind: 'deletion', at: number, base: string }} PointChange
 */

/**
 * The single point mutation that turns `before` into `after`, if there is
 * one. `at` is a 0-based index into `before` (for an insertion: the base the
 * new one was put in front of). When an insertion or deletion could sit at
 * several places in a run of equal bases, the last base of the run is given.
 * @param {string} before
 * @param {string} after
 * @returns {PointChange}
 */
export function pointChange(before, after) {
  const a = clean(before);
  const b = clean(after);
  if (a === b) return { kind: 'none' };
  if (a.length === b.length) {
    const diffs = [...a].map((x, i) => (x === b[i] ? -1 : i)).filter((i) => i >= 0);
    if (diffs.length !== 1) return { kind: 'many' };
    const at = diffs[0];
    return { kind: 'substitution', at, from: a[at], to: b[at] };
  }
  const [long, short] = a.length > b.length ? [a, b] : [b, a];
  if (long.length - short.length !== 1) return { kind: 'many' };
  let i = 0;
  while (i < short.length && long[i] === short[i]) i++;
  if (long.slice(i + 1) !== short.slice(i)) return { kind: 'many' };
  return a.length > b.length
    ? { kind: 'deletion', at: i, base: a[i] }
    : { kind: 'insertion', at: i, base: b[i] };
}

/**
 * Base pairs and hydrogen bonds of a gene given by its coding strand.
 * @param {string} seq
 */
export function geneStats(seq) {
  const s = clean(seq);
  return { pairs: s.length, bonds: hydrogenBonds(s) };
}

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   kind: PointKind;
 *   effects: import('#lib/domain/codons.js').MutationEffect[];
 *   hint: string;
 * }} Mission
 */

/** @type {Mission[]} */
export const MISSIONS = [
  {
    id: 'silent',
    label: 'Thay thế một cặp nucleotide mà chuỗi amino acid không đổi',
    kind: 'substitution',
    effects: ['silent'],
    hint: 'Nhiều bộ ba cùng mã hoá một amino acid; thử đổi nucleotide thứ ba của một bộ ba.',
  },
  {
    id: 'missense',
    label: 'Thay thế một cặp nucleotide làm đổi đúng một amino acid',
    kind: 'substitution',
    effects: ['missense'],
    hint: 'Đổi nucleotide thứ nhất hoặc thứ hai của một bộ ba giữa gene.',
  },
  {
    id: 'nonsense',
    label: 'Thay thế một cặp nucleotide làm chuỗi polypeptide ngắn lại',
    kind: 'substitution',
    effects: ['nonsense'],
    hint: 'Tạo ra UAA, UAG hoặc UGA giữa gene; ví dụ TGG có thể thành TGA hoặc TAG.',
  },
  {
    id: 'deletion',
    label: 'Mất một cặp nucleotide làm đổi mọi bộ ba phía sau',
    kind: 'deletion',
    effects: ['frameshift'],
    hint: 'Xoá một nucleotide ở bộ ba thứ hai hoặc thứ ba.',
  },
  {
    id: 'insertion',
    label: 'Thêm một cặp nucleotide làm đổi mọi bộ ba phía sau',
    kind: 'insertion',
    effects: ['frameshift'],
    hint: 'Thêm một nucleotide vào trong vùng mã hoá, sau bộ ba mở đầu.',
  },
];

/**
 * Whether the edited gene fulfils a mission: exactly one point mutation of
 * the asked kind, with the asked effect on the protein.
 * @param {Mission} mission
 * @param {string} original
 * @param {string} current
 */
export function missionMet(mission, original, current) {
  const change = pointChange(original, current);
  if (change.kind !== mission.kind) return false;
  return mission.effects.includes(compareProteins(original, current).effect);
}

/**
 * Explains, base pair by base pair, what the current edit did to the gene.
 * @param {string} original
 * @param {string} current
 */
export function changeText(original, current) {
  const c = pointChange(original, current);
  const before = geneStats(original);
  const after = geneStats(current);
  const dh = after.bonds - before.bonds;
  const bondsText =
    dh === 0
      ? 'số liên kết hydrogen không đổi'
      : `số liên kết hydrogen ${dh > 0 ? 'tăng' : 'giảm'} ${Math.abs(dh)}`;
  /** @type {Record<string, string>} */
  const pair = { A: 'A – T', T: 'T – A', G: 'G – C', C: 'C – G' };
  if (c.kind === 'none') return 'Gene chưa bị biến đổi.';
  if (c.kind === 'many') {
    return 'Gene đã có nhiều hơn một đột biến điểm. Bấm "Khôi phục" rồi tạo từng đột biến một.';
  }
  if (c.kind === 'substitution') {
    return `Thay thế cặp ${pair[c.from]} ở vị trí ${c.at + 1} bằng cặp ${pair[c.to]}: số cặp nucleotide không đổi, ${bondsText}.`;
  }
  if (c.kind === 'deletion') {
    return `Mất cặp ${pair[c.base]} ở vị trí ${c.at + 1}: gene còn ${after.pairs} cặp nucleotide, ${bondsText}.`;
  }
  return `Thêm cặp ${pair[c.base]} vào trước vị trí ${c.at + 1}: gene có ${after.pairs} cặp nucleotide, ${bondsText}.`;
}
