/**
 * A cell going round the cell cycle, stopped at a checkpoint whose condition is
 * not met, as long as the control system works. Without control the cell passes
 * every checkpoint and keeps dividing. No DOM here, so all of it is tested in Node.
 */

/** @typedef {'g1s' | 'g2m' | 'thoi'} CheckpointId */
/** @typedef {Record<CheckpointId, boolean>} Conditions */

/** The arcs of the ring, as fractions of a turn. They are not to scale in time. */
export const PHASES = [
  {
    id: 'G1',
    from: 0,
    to: 0.42,
    color: '#0ea5e9',
    text: 'Pha $G_1$: tế bào lớn lên, tổng hợp các chất và bào quan.',
  },
  {
    id: 'S',
    from: 0.42,
    to: 0.7,
    color: '#8b5cf6',
    text: 'Pha S: DNA nhân đôi, mỗi NST trở thành NST kép gồm hai nhiễm sắc tử chị em.',
  },
  {
    id: 'G2',
    from: 0.7,
    to: 0.86,
    color: '#14b8a6',
    text: 'Pha $G_2$: tế bào tiếp tục lớn lên và tổng hợp protein cần cho thoi phân bào.',
  },
  {
    id: 'M',
    from: 0.86,
    to: 1,
    color: '#f59e0b',
    text: 'Pha M: nguyên phân, nhân rồi tế bào chất phân chia.',
  },
];

/** @type {{ id: CheckpointId, at: number, no: number, name: string, ask: string, stop: string }[]} */
export const CHECKPOINTS = [
  {
    id: 'g1s',
    at: 0.42,
    no: 1,
    name: 'Điểm $G_1$/S',
    ask: 'Tế bào đủ lớn, đủ chất, DNA không hỏng',
    stop: 'Tế bào dừng ở điểm $G_1$/S: chưa đủ điều kiện nên chưa nhân đôi DNA.',
  },
  {
    id: 'g2m',
    at: 0.86,
    no: 2,
    name: 'Điểm $G_2$/M',
    ask: 'DNA đã nhân đôi xong, sai sót đã được sửa',
    stop: 'Tế bào dừng ở điểm $G_2$/M: DNA chưa nhân đôi xong hoặc còn sai sót nên chưa vào nguyên phân.',
  },
  {
    id: 'thoi',
    at: 0.94,
    no: 3,
    name: 'Điểm thoi phân bào',
    ask: 'Mọi NST đã gắn với thoi phân bào',
    stop: 'Tế bào dừng ở kì giữa: còn NST chưa gắn với thoi phân bào, nếu đi tiếp tế bào con sẽ thiếu hoặc thừa NST.',
  },
];

/** Dividing stops after this many rounds, when the cluster fills the picture. */
export const MAX_CYCLES = 6;

/** @type {Conditions} */
export const ALL_MET = { g1s: true, g2m: true, thoi: true };

/**
 * @typedef {{
 *   p: number;
 *   cells: number;
 *   cycles: number;
 *   errors: number;
 *   stopped: CheckpointId | null;
 *   done: boolean;
 * }} CycleState
 */

/** @returns {CycleState} */
export const startState = () => ({
  p: 0,
  cells: 1,
  cycles: 0,
  errors: 0,
  stopped: null,
  done: false,
});

/**
 * Moves the cell `distance` of a turn along the ring. A working control system
 * holds it at the first checkpoint whose condition is not met, and one finished
 * cycle ends the run, since the body only asks for new cells when it needs them.
 * Without control the cell passes everything, counts each unmet condition as an
 * error it carries on, and divides again and again.
 * @param {CycleState} state
 * @param {number} distance
 * @param {Conditions} conditions
 * @param {boolean} control
 * @returns {CycleState}
 */
export function advance(state, distance, conditions, control) {
  if (state.done) return state;
  const next = state.p + distance;
  let errors = state.errors;
  for (const c of CHECKPOINTS) {
    const ahead = state.p < c.at || (state.p === c.at && state.stopped === c.id);
    if (!ahead || next < c.at || conditions[c.id]) continue;
    if (control) return { ...state, p: c.at, stopped: c.id };
    errors += 1;
  }
  if (next < 1) return { ...state, p: next, errors, stopped: null };
  const cycles = state.cycles + 1;
  return {
    p: control ? 0 : next - 1,
    cells: state.cells * 2,
    cycles,
    errors,
    stopped: null,
    done: control || cycles >= MAX_CYCLES,
  };
}

/**
 * The arc the cell is on.
 * @param {number} p
 */
export const phaseAt = (p) => PHASES.find((ph) => p < ph.to) ?? PHASES[PHASES.length - 1];

/**
 * What the learner reads about the run so far.
 * @param {CycleState} state
 * @param {boolean} control
 * @param {boolean} running
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function statusOf(state, control, running) {
  if (state.stopped) {
    const c = CHECKPOINTS.find((k) => k.id === state.stopped);
    return { tone: 'warn', text: `${c?.stop} Hãy bật lại điều kiện để tế bào đi tiếp.` };
  }
  if (state.done && control) {
    return {
      tone: 'ok',
      text: 'Tế bào qua đủ ba điểm kiểm soát và tạo hai tế bào con lành. Chúng chỉ phân chia tiếp khi cơ thể cần tế bào mới.',
    };
  }
  if (state.done) {
    const carried =
      state.errors > 0 ? ` Tế bào đã đi qua ${state.errors} lần với sai hỏng chưa được sửa.` : '';
    return {
      tone: 'warn',
      text: `Mất kiểm soát: tế bào phân chia liên tục, sau ${state.cycles} lần đã có ${state.cells} tế bào và tạo thành khối u.${carried} Đây là cơ chế của bệnh ung thư.`,
    };
  }
  if (running) return { tone: 'info', text: phaseAt(state.p).text };
  return {
    tone: 'info',
    text: 'Chọn điều kiện rồi bấm "Chạy chu kì" để xem tế bào đi qua các điểm kiểm soát.',
  };
}

/**
 * Centres of the cells in the cluster, in rows from the middle of the picture.
 * @param {number} count @param {number} cx @param {number} cy
 */
export function clusterSpots(count, cx, cy) {
  const COLUMNS = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / COLUMNS);
  const GAP = 20;
  return Array.from({ length: count }, (_, i) => ({
    x: cx + ((i % COLUMNS) - (COLUMNS - 1) / 2) * GAP,
    y: cy + (Math.floor(i / COLUMNS) - (rows - 1) / 2) * GAP,
  }));
}
