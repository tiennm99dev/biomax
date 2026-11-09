/**
 * A gill lamella cut into segments. Water enters on the left carrying O2 at
 * 100 (relative units); blood enters carrying none, either on the left as
 * well (same direction) or on the right (counter-current, as in fish). In
 * every segment a fixed fraction `k` of the local difference crosses from
 * water to blood. Flows of water and blood carry the same amount, so the
 * blood can never get past the water it last touched.
 *
 * Also the insect tracheal system as a few switchable states.
 */

/** @typedef {'nguoc' | 'cung'} FlowId */

export const WATER_IN = 100;
export const K = 0.35;

/**
 * O2 levels per segment, from left to right: water and blood after the
 * exchange in that segment, and how much O2 the blood carries away.
 * @param {FlowId} flow
 * @param {number} n Number of segments.
 * @param {number} [k]
 */
export function exchange(flow, n, k = K) {
  const water = new Array(n).fill(0);
  const blood = new Array(n).fill(0);
  if (flow === 'cung') {
    let w = WATER_IN;
    let b = 0;
    for (let i = 0; i < n; i++) {
      const q = k * (w - b);
      w -= q;
      b += q;
      water[i] = w;
      blood[i] = b;
    }
    return { water, blood, bloodOut: blood[n - 1], waterOut: water[n - 1] };
  }
  // Counter-current: blood enters at segment n − 1 and leaves at segment 0.
  for (let sweep = 0; sweep < 400; sweep++) {
    let w = WATER_IN;
    for (let i = 0; i < n; i++) {
      const bIn = i + 1 < n ? blood[i + 1] : 0;
      const q = k * (w - bIn);
      w -= q;
      water[i] = w;
      blood[i] = bIn + q;
    }
  }
  return { water, blood, bloodOut: blood[0], waterOut: water[n - 1] };
}

/**
 * Share of the water's O2 taken up by the blood, in %, rounded to whole numbers.
 * @param {FlowId} flow @param {number} n
 */
export const uptake = (flow, n) => Math.round((exchange(flow, n).bloodOut / WATER_IN) * 100);

/**
 * @param {FlowId} flow @param {number} n
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeGill(flow, n) {
  const p = uptake(flow, n);
  if (flow === 'cung') {
    return {
      tone: 'warn',
      text: `Cùng chiều: chênh lệch nồng độ giảm nhanh, máu chỉ lấy được ${p}% $\\mathrm{O_2}$ và không bao giờ vượt quá 50% dù phiến mang dài thêm.`,
    };
  }
  return {
    tone: 'ok',
    text: `Ngược chiều: dọc cả phiến mang, máu luôn gặp nước giàu $\\mathrm{O_2}$ hơn nó, nên máu lấy được ${p}% $\\mathrm{O_2}$ của nước. Phiến mang càng dài, máu lấy được càng nhiều.`,
  };
}

/** @typedef {{ open: boolean, pump: boolean }} TracheaState */

/**
 * O2 reaching the insect's cells (relative, air = 100) in each state.
 * @param {TracheaState} s
 */
export function cellOxygen(s) {
  if (!s.open) return 15;
  return s.pump ? 90 : 65;
}

/**
 * @param {TracheaState} s
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeTrachea(s) {
  if (!s.open) {
    return {
      tone: 'warn',
      text: 'Lỗ thở đóng: không khí không vào được hệ thống ống khí, $\\mathrm{O_2}$ ở tế bào giảm dần. Côn trùng chỉ đóng lỗ thở một thời gian ngắn, ví dụ để giữ nước.',
    };
  }
  if (!s.pump) {
    return {
      tone: 'info',
      text: 'Lỗ thở mở, cơ thân không co dãn: khí chỉ khuếch tán theo ống khí, đủ cho lúc nghỉ ngơi.',
    };
  }
  return {
    tone: 'ok',
    text: 'Cơ thân co dãn làm thay đổi thể tích khoang cơ thể, đẩy khí ra vào ống khí: $\\mathrm{O_2}$ theo ống khí nhỏ tới tận từng tế bào, không cần máu vận chuyển.',
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const SURFACE_BINS = [
  { id: 'be-mat', label: 'Bề mặt cơ thể' },
  { id: 'ong-khi', label: 'Hệ thống ống khí' },
  { id: 'mang', label: 'Mang' },
  { id: 'phoi', label: 'Phổi' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const SURFACE_CARDS = [
  { id: 'giun', label: 'Giun đất', bin: 'be-mat', why: 'Giun đất trao đổi khí qua da ẩm.' },
  {
    id: 'thuy-tuc',
    label: 'Thuỷ tức',
    bin: 'be-mat',
    why: 'Ruột khoang trao đổi khí qua bề mặt cơ thể.',
  },
  {
    id: 'chau-chau',
    label: 'Châu chấu',
    bin: 'ong-khi',
    why: 'Côn trùng hô hấp bằng hệ thống ống khí.',
  },
  { id: 'ca-chep', label: 'Cá chép', bin: 'mang', why: 'Cá xương trao đổi khí qua mang.' },
  { id: 'tom', label: 'Tôm', bin: 'mang', why: 'Tôm sống dưới nước, hô hấp bằng mang.' },
  {
    id: 'nong-noc',
    label: 'Nòng nọc',
    bin: 'mang',
    why: 'Nòng nọc sống dưới nước, thở bằng mang.',
  },
  { id: 'than-lan', label: 'Thằn lằn', bin: 'phoi', why: 'Bò sát hô hấp bằng phổi.' },
  { id: 'chim', label: 'Chim bồ câu', bin: 'phoi', why: 'Chim có phổi nối với hệ thống túi khí.' },
  { id: 'nguoi', label: 'Người', bin: 'phoi', why: 'Thú hô hấp bằng phổi có nhiều phế nang.' },
];
