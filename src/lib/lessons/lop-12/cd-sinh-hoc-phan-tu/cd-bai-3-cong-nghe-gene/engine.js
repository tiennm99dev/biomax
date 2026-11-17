/**
 * PCR as a thermal cycler the learner drives: each temperature does its job
 * only when the DNA is in the right state (separate the strands, then bind
 * the primers, then extend them), and an ordinary DNA polymerase dies at the
 * first denaturation while Taq survives. Also the copies after n cycles and
 * the strands of each molecule, which show why exact-length copies appear
 * only from the third cycle. No DOM here, so all of it is tested in Node.
 */
import { fmt } from '#lib/core/number-format.js';

/**
 * @typedef {'kep' | 'don' | 'moi'} Stage double strands, single strands, primers bound
 * @typedef {'taq' | 'thuong'} Enzyme
 * @typedef {{ stage: Stage, cycle: number, enzymeAlive: boolean }} Cycler
 * @typedef {'ok' | 'warn' | 'info'} Tone
 * @typedef {'goc' | 'dai' | 'ngan'} Strand original, long product, exact-length product
 */

/** The three temperatures of the cycler, in °C, with the step each one runs. */
export const TEMPS = [
  { value: 95, name: 'Biến tính' },
  { value: 55, name: 'Gắn mồi' },
  { value: 72, name: 'Kéo dài' },
];

/** @type {Record<Enzyme, string>} */
export const ENZYME_NAME = {
  taq: 'Taq polymerase (chịu nhiệt)',
  thuong: 'DNA polymerase của người',
};

/** @type {Cycler} */
export const START = { stage: 'kep', cycle: 0, enzymeAlive: true };

/**
 * The cycler after holding one temperature.
 * @param {Cycler} c @param {number} temp @param {Enzyme} enzyme
 * @returns {{ cycler: Cycler, tone: Tone, text: string }}
 */
export function hold(c, temp, enzyme) {
  const next = { ...c };
  /** @param {Tone} tone @param {string} text */
  const say = (tone, text) => ({ cycler: next, tone, text });
  if (temp === 95) {
    const killed = enzyme === 'thuong' && next.enzymeAlive;
    if (enzyme === 'thuong') next.enzymeAlive = false;
    const dies = killed
      ? ' Nhưng DNA polymerase của người không chịu được nhiệt độ này và đã bị biến tính.'
      : '';
    if (c.stage === 'don') return say('info', `Hai mạch đã tách sẵn.${dies}`);
    next.stage = 'don';
    if (c.stage === 'moi') {
      return say('warn', `Mồi vừa gắn lại bị tách ra. Hãy chuyển sang bước kéo dài.${dies}`);
    }
    return say(
      killed ? 'warn' : 'ok',
      `Biến tính: ở $94$–$95$ °C, liên kết hydrogen giữa hai mạch bị phá vỡ, DNA tách thành hai mạch đơn.${dies}`,
    );
  }
  if (temp === 55) {
    if (c.stage === 'kep') {
      return say(
        'warn',
        'Hai mạch còn liên kết với nhau, mồi không có chỗ bám. Cần biến tính trước.',
      );
    }
    if (c.stage === 'moi') return say('info', 'Mồi đã gắn vào mạch khuôn.');
    next.stage = 'moi';
    return say(
      'ok',
      'Gắn mồi: hạ nhiệt độ xuống khoảng $50$–$65$ °C, hai mồi bắt cặp bổ sung với hai đầu đoạn DNA cần nhân, mỗi mồi trên một mạch khuôn.',
    );
  }
  if (temp === 72) {
    if (c.stage === 'kep') {
      return say('info', 'DNA đang ở dạng mạch kép, không có gì xảy ra. Cần biến tính trước.');
    }
    if (c.stage === 'don') {
      return say(
        'warn',
        'Chưa có mồi: DNA polymerase không tự bắt đầu tổng hợp được. Cần gắn mồi trước.',
      );
    }
    if (!c.enzymeAlive) {
      return say(
        'warn',
        'Không có mạch mới: DNA polymerase đã bị biến tính ở $95$ °C. Vì thế PCR phải dùng Taq polymerase của vi khuẩn suối nước nóng Thermus aquaticus.',
      );
    }
    next.stage = 'kep';
    next.cycle = c.cycle + 1;
    return say(
      'ok',
      `Kéo dài: ở $72$ °C, Taq polymerase lắp các nucleotide tự do nối dài mồi theo chiều $5' \\to 3'$. Hết chu kì ${next.cycle}: có ${fmt(copies(next.cycle))} bản sao.`,
    );
  }
  throw new Error(`no step at ${temp} °C`);
}

/**
 * Double-stranded copies after n cycles from one molecule.
 * @param {number} n
 */
export function copies(n) {
  return 2 ** n;
}

/**
 * Copies of exactly the target length (both strands bounded by the primers)
 * after n cycles from one molecule: 2ⁿ − 2n, none before the third cycle.
 * @param {number} n
 */
export function targetCopies(n) {
  return n === 0 ? 0 : 2 ** n - 2 * n;
}

/**
 * @typedef {{ kind: Strand, sense: 'T' | 'B' }} DrawnStrand a strand and which of the
 *   two original strands it reads like: 'T' runs left to right, 'B' the other way
 */

/**
 * The molecules after n cycles, each as its two strands with the 'T' strand
 * first: every strand stays as a template and gets a new partner of the other
 * sense; a new strand copied from an original runs past the target (long),
 * one copied from a primer-bounded strand ends at the primer (exact length).
 * @param {number} n
 * @returns {[DrawnStrand, DrawnStrand][]}
 */
export function strandsAfter(n) {
  /** @type {[DrawnStrand, DrawnStrand][]} */
  let list = [
    [
      { kind: 'goc', sense: 'T' },
      { kind: 'goc', sense: 'B' },
    ],
  ];
  for (let i = 0; i < n; i++) {
    /** @type {[DrawnStrand, DrawnStrand][]} */
    const next = [];
    for (const pair of list) {
      for (const s of pair) {
        /** @type {DrawnStrand} */
        const made = {
          kind: s.kind === 'goc' ? 'dai' : 'ngan',
          sense: s.sense === 'T' ? 'B' : 'T',
        };
        next.push(s.sense === 'T' ? [s, made] : [made, s]);
      }
    }
    list = next;
  }
  return list;
}

/**
 * The molecules after n cycles as the kinds of their two strands.
 * @param {number} n
 * @returns {[Strand, Strand][]}
 */
export function molecules(n) {
  return strandsAfter(n).map(([a, b]) => [a.kind, b.kind]);
}

/** Where the target begins and ends along the original DNA, as shares of its length. */
export const TARGET = { from: 0.3, to: 0.7 };

/**
 * The stretch of the original length a strand covers, as shares [from, to]:
 * a long 'T' strand starts at the forward primer and runs to the end, a long
 * 'B' strand starts at the reverse primer and runs to the start.
 * @param {DrawnStrand} s
 * @returns {[number, number]}
 */
export function spanOf(s) {
  if (s.kind === 'goc') return [0, 1];
  if (s.kind === 'ngan') return [TARGET.from, TARGET.to];
  return s.sense === 'T' ? [TARGET.from, 1] : [0, TARGET.to];
}

/**
 * The sentence on the copies after n cycles.
 * @param {number} n
 */
export function copiesText(n) {
  if (n === 0) return 'Chưa chạy chu kì nào: có $1$ phân tử DNA khuôn.';
  const t = targetCopies(n);
  const share = t === 0 ? '' : `, trong đó ${fmt(t)} bản sao có đúng chiều dài đoạn cần nhân`;
  return `Sau ${n} chu kì: $2^{${n}}$ = ${fmt(copies(n))} bản sao${share}.`;
}
