import { intText } from '#lib/core/number-format.js';

/**
 * A model membrane potential at one point of an axon after a single stimulus
 * at 1 ms, and the steps of transmission across a chemical synapse.
 *
 * Resting potential −70 mV, threshold −55 mV, peak +30 mV. A stimulus that
 * lifts the membrane to the threshold or beyond fires a full action potential
 * whatever its size (all or none); a weaker one, or any stimulus while Na⁺
 * channels are blocked by a local anaesthetic, only gives a local change that
 * fades. Values are a teaching model, not measurements.
 */

export const REST = -70;
export const THRESHOLD = -55;
export const PEAK = 30;
/** Time of the stimulus, ms. */
export const T_STIM = 1;
/** Time shown, ms. */
export const SPAN = 5;

const RISE = 0.8;
const FALL = 1.2;

/** @param {number} x */
const smooth = (x) => {
  const t = Math.max(0, Math.min(1, x));
  return t * t * (3 - 2 * t);
};

/**
 * @typedef {'nghi' | 'mat-phan-cuc' | 'dao-cuc' | 'tai-phan-cuc' | 'cuc-bo'} Phase
 */

/** @type {Record<Phase, string>} */
export const PHASE_NAMES = {
  nghi: 'Điện thế nghỉ',
  'mat-phan-cuc': 'Mất phân cực',
  'dao-cuc': 'Đảo cực',
  'tai-phan-cuc': 'Tái phân cực',
  'cuc-bo': 'Thay đổi cục bộ, dưới ngưỡng',
};

/**
 * Whether a stimulus fires an action potential.
 * @param {number} strength Depolarisation by the stimulus, mV.
 * @param {boolean} blocked Na⁺ channels blocked.
 */
export function fires(strength, blocked) {
  return !blocked && REST + strength >= THRESHOLD;
}

/**
 * Membrane potential (inside relative to outside), mV, at time `t` ms.
 * @param {number} t @param {number} strength @param {boolean} blocked
 */
export function potential(t, strength, blocked) {
  if (t < T_STIM || strength <= 0) return REST;
  const start = REST + strength;
  if (!fires(strength, blocked)) return REST + strength * Math.exp(-(t - T_STIM) / 0.6);
  const s = t - T_STIM;
  if (s <= RISE) return start + (PEAK - start) * smooth(s / RISE);
  return PEAK - (PEAK - REST) * smooth((s - RISE) / FALL);
}

/**
 * The phase and the open channels at time `t`.
 * @param {number} t @param {number} strength @param {boolean} blocked
 * @returns {{ phase: Phase, v: number, na: boolean, k: boolean }}
 */
export function stateAt(t, strength, blocked) {
  const v = potential(t, strength, blocked);
  if (t < T_STIM || strength <= 0) return { phase: 'nghi', v, na: false, k: false };
  if (!fires(strength, blocked)) {
    return { phase: Math.abs(v - REST) < 0.5 ? 'nghi' : 'cuc-bo', v, na: false, k: false };
  }
  const s = t - T_STIM;
  if (s <= RISE) return { phase: v < 0 ? 'mat-phan-cuc' : 'dao-cuc', v, na: true, k: false };
  if (s <= RISE + FALL) return { phase: 'tai-phan-cuc', v, na: false, k: true };
  return { phase: 'nghi', v, na: false, k: false };
}

/**
 * What the learner should notice about the whole run.
 * @param {number} strength @param {boolean} blocked
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function verdict(strength, blocked) {
  if (strength <= 0) {
    return {
      tone: 'info',
      text: 'Chưa kích thích: màng ở điện thế nghỉ, trong âm ngoài dương. Tăng cường độ kích thích để xem màng thay đổi.',
    };
  }
  if (blocked) {
    return {
      tone: 'warn',
      text: 'Thuốc tê làm giảm tính thấm của màng với $\\mathrm{Na^+}$: $\\mathrm{Na^+}$ không vào được, màng không mất phân cực, đảo cực nên không có điện thế hoạt động. Xung đau không được truyền về não.',
    };
  }
  if (!fires(strength, blocked)) {
    return {
      tone: 'info',
      text: `Kích thích chỉ đưa màng lên ${intText(REST + strength)} mV, chưa tới ngưỡng ${intText(THRESHOLD)} mV: màng chỉ thay đổi cục bộ rồi trở về điện thế nghỉ, không có điện thế hoạt động.`,
    };
  }
  return {
    tone: 'ok',
    text: `Kích thích đạt ngưỡng: xuất hiện điện thế hoạt động, đỉnh luôn khoảng +${PEAK} mV dù kích thích mạnh hay vừa đủ (quy luật "tất cả hoặc không").`,
  };
}

/* ---------- Chemical synapse ---------- */

/**
 * @typedef {object} SynapseView
 * @property {boolean} spike A nerve impulse is at the bouton.
 * @property {boolean} calcium Ca²⁺ has entered the bouton.
 * @property {number} vesicles Vesicles still full in the bouton (of 4).
 * @property {number} cleft Acetylcholine dots free in the cleft.
 * @property {boolean} bound Acetylcholine sits on the receptors.
 * @property {boolean} post An action potential runs on the postsynaptic membrane.
 * @property {boolean} recycled Choline is going back into the bouton.
 * @property {string} text What happens at this step.
 * @property {'ok' | 'warn' | 'info'} tone
 */

/** Steps of transmission, 0 to 4. */
export const SYNAPSE_STEPS = 4;

/**
 * The synapse at `step`, with Ca²⁺ missing outside the bouton or the
 * acetylcholinesterase blocked.
 * @param {number} step @param {{ noCalcium: boolean, noEnzyme: boolean }} opts
 * @returns {SynapseView}
 */
export function synapseAt(step, { noCalcium, noEnzyme }) {
  /** @type {SynapseView} */
  const v = {
    spike: false,
    calcium: false,
    vesicles: 4,
    cleft: 0,
    bound: false,
    post: false,
    recycled: false,
    tone: 'info',
    text: 'Chưa có xung thần kinh: các bóng synapse chứa acetylcholine nằm trong chuỳ synapse.',
  };
  if (step <= 0) return v;
  v.spike = true;
  if (noCalcium) {
    v.tone = 'warn';
    v.text =
      'Xung thần kinh đến chuỳ synapse nhưng không có $\\mathrm{Ca^{2+}}$ đi vào: bóng synapse không gắn vào màng trước, acetylcholine không được giải phóng. Thông tin không truyền qua synapse.';
    return v;
  }
  v.calcium = true;
  v.text = 'Bước 1. Xung thần kinh đến chuỳ synapse làm $\\mathrm{Ca^{2+}}$ đi vào chuỳ.';
  if (step === 1) return v;
  v.vesicles = 1;
  v.cleft = 9;
  v.text =
    'Bước 2. $\\mathrm{Ca^{2+}}$ làm các bóng chứa acetylcholine gắn vào màng trước, vỡ ra, giải phóng acetylcholine vào khe synapse.';
  if (step === 2) return v;
  v.cleft = 3;
  v.bound = true;
  v.post = true;
  v.text =
    'Bước 3. Acetylcholine gắn vào thụ thể trên màng sau, làm kênh $\\mathrm{Na^+}$ mở: màng sau mất phân cực, xuất hiện điện thế hoạt động lan truyền tiếp.';
  if (step === 3) return v;
  if (noEnzyme) {
    v.tone = 'warn';
    v.text =
      'Bước 4 không xảy ra: acetylcholinesterase bị ức chế, acetylcholine không bị phân giải, còn gắn mãi trên thụ thể. Màng sau bị kích thích liên tục, cơ co cứng, co giật (ngộ độc thuốc trừ sâu loại ức chế enzyme này).';
    return v;
  }
  v.cleft = 0;
  v.bound = false;
  v.post = false;
  v.recycled = true;
  v.vesicles = 2;
  v.tone = 'ok';
  v.text =
    'Bước 4. Acetylcholinesterase ở màng sau phân giải acetylcholine thành acetate và choline; choline quay lại chuỳ synapse để tổng hợp acetylcholine mới. Synapse sẵn sàng cho xung tiếp theo.';
  return v;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const NERVE_BINS = [
  { id: 'luoi', label: 'Thần kinh dạng lưới' },
  { id: 'chuoi', label: 'Thần kinh dạng chuỗi hạch' },
  { id: 'ong', label: 'Thần kinh dạng ống' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const NERVE_CARDS = [
  {
    id: 'thuy-tuc',
    label: 'Thuỷ tức',
    bin: 'luoi',
    why: 'Ruột khoang: tế bào thần kinh rải rác, nối với nhau thành mạng lưới.',
  },
  {
    id: 'sua',
    label: 'Sứa',
    bin: 'luoi',
    why: 'Sứa thuộc ngành Ruột khoang, hệ thần kinh dạng lưới.',
  },
  {
    id: 'giun-dat',
    label: 'Giun đất',
    bin: 'chuoi',
    why: 'Giun đốt: các hạch thần kinh nối với nhau thành chuỗi.',
  },
  {
    id: 'chau-chau',
    label: 'Châu chấu',
    bin: 'chuoi',
    why: 'Chân khớp: chuỗi hạch, hạch não phát triển mạnh.',
  },
  {
    id: 'ca-chep',
    label: 'Cá chép',
    bin: 'ong',
    why: 'Động vật có xương sống: ống thần kinh ở phía lưng.',
  },
  {
    id: 'ech',
    label: 'Ếch đồng',
    bin: 'ong',
    why: 'Lưỡng cư có hệ thần kinh dạng ống.',
  },
  {
    id: 'chim-bo-cau',
    label: 'Chim bồ câu',
    bin: 'ong',
    why: 'Chim có hệ thần kinh dạng ống: não bộ và tuỷ sống.',
  },
];
