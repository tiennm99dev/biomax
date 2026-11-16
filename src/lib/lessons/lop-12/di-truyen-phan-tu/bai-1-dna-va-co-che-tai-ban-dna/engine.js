/**
 * One replication fork driven enzyme by enzyme. The fork opens from the
 * origin (left) to the right in chunks. The upper template strand runs
 * 3' → 5' left to right, so its new strand (mạch dẫn đầu) grows 5' → 3'
 * towards the fork, continuously, from one primer. The lower template runs
 * 5' → 3', so its new strand (mạch ra chậm) is made away from the fork in
 * Okazaki fragments, one per opened chunk, each started from its own RNA
 * primer at the fork end; DNA polymerase then replaces a primer with DNA
 * when the next fragment reaches it, and DNA ligase seals the nicks.
 */

/** Base pairs of the drawn stretch. */
export const LENGTH = 24;
/** Base pairs unwound by one helicase step; one Okazaki fragment each. */
export const CHUNK = 6;
/** Length of an RNA primer, in bases. */
export const PRIMER = 2;
export const FRAGMENTS = LENGTH / CHUNK;

/**
 * @typedef {{ primed: boolean, filled: boolean, primerDone: boolean, joined: boolean }} Fragment
 *   `joined`: sealed to the fragment on its left (always false for the first).
 * @typedef {{
 *   open: number;
 *   leadPrimed: boolean;
 *   leadLen: number;
 *   leadPrimerDone: boolean;
 *   frags: Fragment[];
 * }} ForkState
 * @typedef {'helicase' | 'primase' | 'polymerase' | 'ligase'} Enzyme
 * @typedef {{ state: ForkState, ok: boolean, text: string }} StepResult
 */

/** @returns {ForkState} */
export function start() {
  return {
    open: 0,
    leadPrimed: false,
    leadLen: 0,
    leadPrimerDone: false,
    frags: Array.from({ length: FRAGMENTS }, () => ({
      primed: false,
      filled: false,
      primerDone: false,
      joined: false,
    })),
  };
}

/** @param {ForkState} s @returns {ForkState} */
function copy(s) {
  return { ...s, frags: s.frags.map((f) => ({ ...f })) };
}

/** Index of the fragments whose chunk is unwound. @param {ForkState} s */
function openedFrags(s) {
  return s.frags.map((_, k) => k).filter((k) => k * CHUNK < s.open);
}

/** @param {ForkState} s */
function helicase(s) {
  if (s.open >= LENGTH) {
    return fail(s, 'Đoạn DNA này đã tháo xoắn hết; hãy hoàn thành hai mạch mới.');
  }
  const next = copy(s);
  next.open = Math.min(LENGTH, s.open + CHUNK);
  return {
    state: next,
    ok: true,
    text: `Enzyme tháo xoắn tách hai mạch thêm ${CHUNK} cặp nucleotide (cắt liên kết hydrogen); chạc tái bản tiến sang phải, đã mở ${next.open}/${LENGTH} cặp.`,
  };
}

/** @param {ForkState} s */
function primase(s) {
  if (s.open === 0) return fail(s, 'Chưa có mạch đơn làm khuôn: cần tháo xoắn trước.');
  const next = copy(s);
  /** @type {string[]} */
  const done = [];
  if (!next.leadPrimed) {
    next.leadPrimed = true;
    done.push('một đoạn mồi cho mạch dẫn đầu');
  }
  const lag = openedFrags(next).filter((k) => !next.frags[k].primed);
  for (const k of lag) next.frags[k].primed = true;
  if (lag.length) done.push(`${lag.length} đoạn mồi ở đầu chạc của mạch ra chậm`);
  if (!done.length) {
    return fail(
      s,
      'Lúc này không cần thêm đoạn mồi: mạch dẫn đầu chỉ cần một đoạn mồi; mạch ra chậm cần đoạn mồi mới mỗi khi chạc mở thêm.',
    );
  }
  return {
    state: next,
    ok: true,
    text: `Enzyme tổng hợp đoạn mồi (RNA polymerase) đặt ${done.join(' và ')}: đoạn RNA ngắn tạo đầu $3'$-OH tự do để DNA polymerase gắn tiếp nucleotide.`,
  };
}

/** @param {ForkState} s */
function polymerase(s) {
  if (s.open === 0) return fail(s, 'Chưa tháo xoắn: DNA polymerase chưa có mạch khuôn.');
  const next = copy(s);
  /** @type {string[]} */
  const done = [];
  if (next.leadPrimed && next.leadLen < next.open) {
    next.leadLen = next.open;
    done.push("kéo dài mạch dẫn đầu liên tục theo chiều $5' \\to 3'$, đuổi theo chạc tái bản");
  }
  const made = openedFrags(next).filter((k) => next.frags[k].primed && !next.frags[k].filled);
  for (const k of made) next.frags[k].filled = true;
  if (made.length) {
    done.push(
      `tổng hợp ${made.length === 1 ? `đoạn Okazaki thứ ${made[0] + 1}` : `${made.length} đoạn Okazaki`} theo chiều $5' \\to 3'$, ngược chiều tháo xoắn`,
    );
  }
  let replaced = 0;
  next.frags.forEach((f, k) => {
    const reached = k + 1 < FRAGMENTS ? next.frags[k + 1].filled : next.open === LENGTH && f.filled;
    if (f.filled && !f.primerDone && reached) {
      f.primerDone = true;
      replaced++;
    }
  });
  if (next.leadPrimed && !next.leadPrimerDone && next.leadLen === LENGTH) {
    next.leadPrimerDone = true;
    replaced++;
  }
  if (replaced) done.push(`thay ${replaced} đoạn mồi RNA bằng DNA`);
  if (!done.length) {
    if (!s.leadPrimed || openedFrags(s).some((k) => !s.frags[k].primed)) {
      return fail(
        s,
        "DNA polymerase không tự bắt đầu được: nó chỉ gắn nucleotide vào đầu $3'$-OH có sẵn, nên vùng vừa mở cần đoạn mồi trước.",
      );
    }
    return fail(
      s,
      'Không còn đoạn nào để DNA polymerase kéo dài: hãy tháo xoắn thêm hoặc nối các đoạn.',
    );
  }
  return { state: next, ok: true, text: `DNA polymerase ${done.join('; ')}.` };
}

/** @param {ForkState} s */
function ligase(s) {
  const next = copy(s);
  let sealed = 0;
  for (let k = 1; k < FRAGMENTS; k++) {
    const f = next.frags[k];
    const left = next.frags[k - 1];
    if (f.filled && left.filled && left.primerDone && !f.joined) {
      f.joined = true;
      sealed++;
    }
  }
  if (!sealed) {
    const waiting = s.frags.some((f, k) => k > 0 && f.filled && !s.frags[k - 1].primerDone);
    return fail(
      s,
      waiting
        ? 'Còn đoạn mồi RNA nằm giữa hai đoạn Okazaki: phải thay bằng DNA (DNA polymerase) trước khi ligase nối.'
        : 'Chưa có hai đoạn Okazaki nằm sát nhau để DNA ligase nối.',
    );
  }
  return {
    state: next,
    ok: true,
    text: `DNA ligase nối ${sealed} chỗ hở giữa các đoạn Okazaki bằng liên kết phosphodiester.`,
  };
}

/** @param {ForkState} s @param {string} text @returns {StepResult} */
function fail(s, text) {
  return { state: s, ok: false, text };
}

/** @type {Record<Enzyme, (s: ForkState) => StepResult>} */
const ACTIONS = { helicase, primase, polymerase, ligase };

/**
 * Applies one enzyme to the fork. A step that cannot act returns the same
 * state with `ok: false` and the reason.
 * @param {ForkState} s @param {Enzyme} enzyme
 */
export function act(s, enzyme) {
  return ACTIONS[enzyme](s);
}

/** Whether both new strands are finished, primers replaced and nicks sealed. @param {ForkState} s */
export function isDone(s) {
  return (
    s.open === LENGTH &&
    s.leadLen === LENGTH &&
    s.leadPrimerDone &&
    s.frags.every((f, k) => f.filled && f.primerDone && (k === 0 || f.joined))
  );
}

/**
 * The enzyme that can act next, in the order the cell uses them, or null
 * when replication of the stretch is complete.
 * @param {ForkState} s @returns {Enzyme | null}
 */
export function suggest(s) {
  if (isDone(s)) return null;
  for (const e of /** @type {Enzyme[]} */ (['primase', 'polymerase', 'ligase', 'helicase'])) {
    if (act(s, e).ok) return e;
  }
  return null;
}

/**
 * What each base of the two new strands is: not made yet, RNA primer or DNA.
 * Index runs left to right along the drawn stretch.
 * @param {ForkState} s
 * @returns {{ leading: Array<'none' | 'primer' | 'dna'>, lagging: Array<'none' | 'primer' | 'dna'> }}
 */
export function strands(s) {
  /** @type {Array<'none' | 'primer' | 'dna'>} */
  const leading = Array.from({ length: LENGTH }, (_, i) => {
    if (!s.leadPrimed) return 'none';
    if (i < PRIMER) return s.leadPrimerDone ? 'dna' : 'primer';
    return i < s.leadLen ? 'dna' : 'none';
  });
  /** @type {Array<'none' | 'primer' | 'dna'>} */
  const lagging = Array.from({ length: LENGTH }, (_, i) => {
    const f = s.frags[Math.floor(i / CHUNK)];
    const inPrimer = i % CHUNK >= CHUNK - PRIMER;
    if (inPrimer && f.primed) return f.primerDone ? 'dna' : 'primer';
    return f.filled ? 'dna' : 'none';
  });
  return { leading, lagging };
}

/** Okazaki fragments made and RNA primers laid so far. @param {ForkState} s */
export function tally(s) {
  return {
    okazaki: s.frags.filter((f) => f.filled).length,
    primers: (s.leadPrimed ? 1 : 0) + s.frags.filter((f) => f.primed).length,
    nicks: s.frags.filter((f, k) => k > 0 && f.filled && s.frags[k - 1].filled && !f.joined).length,
  };
}

/**
 * Origins spread evenly along a linear DNA of `length` units: the centre of
 * each of `origins` equal stretches.
 * @param {number} length @param {number} origins
 */
export function originsAt(length, origins) {
  const part = length / origins;
  return Array.from({ length: origins }, (_, k) => Math.floor(part * k + part / 2));
}

/**
 * Which units are copied after `t` steps when every origin opens two forks
 * that each move one unit per step.
 * @param {number} length @param {number} origins @param {number} t
 */
export function copiedAt(length, origins, t) {
  const at = originsAt(length, origins);
  return Array.from({ length }, (_, i) => at.some((o) => Math.abs(i - o) < t));
}

/**
 * Steps until the whole DNA is copied.
 * @param {number} length @param {number} origins
 */
export function stepsToCopy(length, origins) {
  let t = 0;
  while (copiedAt(length, origins, t).some((c) => !c)) t++;
  return t;
}
