/**
 * The lac operon of E. coli, step by step. The regulator gene lacI always
 * makes the repressor. With no lactose the repressor sits on the operator O
 * and RNA polymerase cannot get past it; lactose (as allolactose) binds the
 * repressor and changes its shape so it lets go of O, and lacZ, lacY, lacA
 * are transcribed. The enzymes then use up the lactose and the repressor
 * binds O again. A mutation in lacI, O or P changes that logic.
 */

/** @typedef {'none' | 'lacI' | 'O' | 'P'} Mutant */
/**
 * @typedef {{ lactose: number, enzymes: number, mutant: Mutant }} OperonState
 *   `lactose`: lactose molecules in the cell; `enzymes`: level of the three
 *   enzymes, 0 to MAX_ENZYMES.
 */

export const MAX_LACTOSE = 8;
export const MAX_ENZYMES = 3;
export const LACTOSE_DOSE = 4;

/** @type {Record<Mutant, string>} */
export const MUTANT_LABELS = {
  none: 'Bình thường',
  lacI: 'Đột biến gene lacI',
  O: 'Đột biến vùng O',
  P: 'Đột biến vùng P',
};

/** @returns {OperonState} */
export function start(mutant = /** @type {Mutant} */ ('none')) {
  return { lactose: 0, enzymes: 0, mutant };
}

/**
 * What is bound where and whether the structural genes are transcribed.
 * @param {OperonState} s
 */
export function status(s) {
  const repressorWorks = s.mutant !== 'lacI';
  const inducer = s.lactose > 0;
  const onOperator = repressorWorks && !inducer && s.mutant !== 'O';
  const polymeraseBinds = s.mutant !== 'P';
  return {
    repressorWorks,
    inducer,
    onOperator,
    polymeraseBinds,
    transcribing: polymeraseBinds && !onOperator,
  };
}

/**
 * One time step: transcription and translation raise the enzymes; with no
 * transcription they are slowly broken down. Every enzyme unit breaks down
 * one lactose molecule.
 * @param {OperonState} s @returns {OperonState}
 */
export function tick(s) {
  const st = status(s);
  const enzymes = st.transcribing
    ? Math.min(MAX_ENZYMES, s.enzymes + 1)
    : Math.max(0, s.enzymes - 1);
  return { ...s, enzymes, lactose: Math.max(0, s.lactose - enzymes) };
}

/** Adds a dose of lactose to the medium. @param {OperonState} s @returns {OperonState} */
export function addLactose(s) {
  return { ...s, lactose: Math.min(MAX_LACTOSE, s.lactose + LACTOSE_DOSE) };
}

/**
 * Sentences explaining the current state, in the order of the mechanism.
 * @param {OperonState} s
 */
export function explain(s) {
  const st = status(s);
  /** @type {string[]} */
  const out = [];
  out.push(
    st.repressorWorks
      ? 'Gene điều hoà lacI luôn phiên mã, dịch mã tạo protein ức chế.'
      : 'Gene lacI bị đột biến: protein ức chế bị biến đổi, không gắn được vào vùng O.',
  );
  if (s.mutant === 'O') {
    out.push('Vùng O bị đột biến: protein ức chế không nhận ra và không gắn được vào vùng O.');
  } else if (st.repressorWorks) {
    out.push(
      st.inducer
        ? 'Có lactose: allolactose gắn vào protein ức chế, làm biến đổi cấu hình nên nó không gắn được vào vùng O.'
        : 'Không có lactose: protein ức chế gắn vào vùng vận hành O.',
    );
  }
  if (!st.polymeraseBinds) {
    out.push(
      'Vùng P bị đột biến: RNA polymerase không bám được, các gene Z, Y, A không phiên mã dù có lactose.',
    );
  } else if (st.onOperator) {
    out.push(
      'RNA polymerase bám vào P nhưng bị protein ức chế chặn, không trượt qua O: Z, Y, A không phiên mã.',
    );
  } else {
    out.push(
      'RNA polymerase trượt qua O, phiên mã Z, Y, A thành một mRNA; dịch mã tạo β-galactosidase, permease, transacetylase.',
    );
    if (!st.inducer)
      out.push(
        'Môi trường không có lactose mà enzyme vẫn được tạo ra: tế bào lãng phí vật chất và năng lượng.',
      );
  }
  return out;
}
