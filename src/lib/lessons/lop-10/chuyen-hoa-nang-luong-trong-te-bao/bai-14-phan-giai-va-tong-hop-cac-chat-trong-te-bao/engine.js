/**
 * The stages of cellular respiration, fermentation and photosynthesis, counted
 * for one glucose molecule. Each stage lists what goes in, what comes out and
 * its ATP, so the widget can add them up along the path the learner opens.
 */

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   place: string,
 *   inputs: string[],
 *   outputs: string[],
 *   atp: [number, number],
 *   usesAtp?: number,
 *   note: string,
 * }} Stage
 */

/** Yield of the electron transport chain per carrier, the book-era estimate. */
export const ATP_PER_NADH = 3;
export const ATP_PER_FADH2 = 2;
/** ATP lost when the 2 NADH of glycolysis cross into the mitochondrion: 2 ATP for each instead of 3 in some cells. */
export const SHUTTLE_LOSS = 2;

/** Carriers per glucose, by stage. */
export const CARRIERS = {
  glycolysis: { nadh: 2, fadh2: 0 },
  acetyl: { nadh: 2, fadh2: 0 },
  krebs: { nadh: 6, fadh2: 2 },
};

/** The ATP of the electron transport chain, as [fewest, most]. */
export function chainAtp() {
  const carriers = Object.values(CARRIERS);
  const nadh = carriers.reduce((sum, c) => sum + c.nadh, 0);
  const fadh2 = carriers.reduce((sum, c) => sum + c.fadh2, 0);
  const most = nadh * ATP_PER_NADH + fadh2 * ATP_PER_FADH2;
  return /** @type {[number, number]} */ ([most - SHUTTLE_LOSS, most]);
}

const GLYCOLYSIS = {
  id: 'duong-phan',
  name: 'Đường phân',
  place: 'Tế bào chất',
  inputs: ['1 glucose', '2 ATP (dùng để hoạt hoá glucose)', '2 NAD⁺'],
  outputs: ['2 pyruvate', '4 ATP, tức thu thêm 2 ATP', '2 NADH'],
  atp: /** @type {[number, number]} */ ([2, 2]),
  note: 'Không cần O₂. Glucose (6C) bị tách thành hai pyruvate (3C). Mọi tế bào đều có giai đoạn này.',
};

/** @type {Stage[]} */
export const RESPIRATION = [
  GLYCOLYSIS,
  {
    id: 'acetyl-coa',
    name: 'Tạo acetyl-CoA',
    place: 'Chất nền ti thể',
    inputs: ['2 pyruvate', '2 NAD⁺'],
    outputs: ['2 acetyl-CoA', '2 CO₂', '2 NADH'],
    atp: [0, 0],
    note: 'Có O₂, pyruvate đi vào ti thể. Mỗi pyruvate (3C) mất một CO₂, thành acetyl-CoA (2C). Bước này chuẩn bị cho chu trình Krebs, chưa tạo ATP.',
  },
  {
    id: 'krebs',
    name: 'Chu trình Krebs',
    place: 'Chất nền ti thể',
    inputs: ['2 acetyl-CoA', '6 NAD⁺', '2 FAD'],
    outputs: ['4 CO₂', '6 NADH', '2 FADH₂', '2 ATP'],
    atp: [2, 2],
    note: 'Mỗi acetyl-CoA tạo 2 CO₂, 3 NADH, 1 FADH₂ và 1 ATP. Một glucose cho hai acetyl-CoA nên số lượng gấp đôi.',
  },
  {
    id: 'chuoi-electron',
    name: 'Chuỗi truyền electron',
    place: 'Màng trong ti thể',
    inputs: ['10 NADH', '2 FADH₂', '6 O₂'],
    outputs: ['6 H₂O', '32 đến 34 ATP'],
    atp: chainAtp(),
    note: 'Electron từ NADH và FADH₂ truyền qua chuỗi tới O₂, tạo nước. Năng lượng giải phóng dùng để tổng hợp phần lớn ATP.',
  },
];

/** @type {Record<'ruou' | 'lactic', Stage[]>} */
export const FERMENTATION = {
  ruou: [
    GLYCOLYSIS,
    {
      id: 'len-men-ruou',
      name: 'Lên men rượu',
      place: 'Tế bào chất (nấm men)',
      inputs: ['2 pyruvate', '2 NADH'],
      outputs: ['2 ethanol', '2 CO₂', '2 NAD⁺'],
      atp: [0, 0],
      note: 'Electron từ NADH chuyển cho chất hữu cơ tạo từ pyruvate. Giai đoạn này không tạo thêm ATP, nhưng trả lại NAD⁺ để đường phân chạy tiếp.',
    },
  ],
  lactic: [
    GLYCOLYSIS,
    {
      id: 'len-men-lactic',
      name: 'Lên men lactic',
      place: 'Tế bào chất (vi khuẩn lactic, tế bào cơ khi thiếu O₂)',
      inputs: ['2 pyruvate', '2 NADH'],
      outputs: ['2 lactate', '2 NAD⁺'],
      atp: [0, 0],
      note: 'Electron từ NADH chuyển thẳng cho pyruvate tạo lactate, không sinh CO₂. Giai đoạn này không tạo thêm ATP, nhưng trả lại NAD⁺ để đường phân chạy tiếp.',
    },
  ],
};

/** @type {Stage[]} */
export const PHOTOSYNTHESIS = [
  {
    id: 'pha-sang',
    name: 'Pha sáng',
    place: 'Màng thylakoid của lục lạp',
    inputs: ['Ánh sáng', '12 H₂O', '18 ADP', '12 NADP⁺'],
    outputs: ['6 O₂', '18 ATP', '12 NADPH'],
    atp: [18, 18],
    note: 'Diệp lục hấp thụ ánh sáng, chuyển quang năng thành hoá năng trong ATP và NADPH. Nước bị phân li, giải phóng O₂.',
  },
  {
    id: 'pha-toi',
    name: 'Pha tối (chu trình Calvin)',
    place: 'Chất nền lục lạp',
    inputs: ['6 CO₂', '18 ATP', '12 NADPH'],
    outputs: ['1 glucose (C₆H₁₂O₆)', '18 ADP', '12 NADP⁺'],
    atp: [0, 0],
    usesAtp: 18,
    note: 'Dùng ATP và NADPH của pha sáng để khử CO₂ thành carbohydrate. Không cần trực tiếp ánh sáng nhưng phải có sản phẩm của pha sáng.',
  },
];

/**
 * ATP made from the start of a path through the given stage, as [fewest, most].
 * @param {Stage[]} path
 * @param {number} index
 * @returns {[number, number]}
 */
export function atpUpTo(path, index) {
  return path.slice(0, index + 1).reduce(
    /** @param {[number, number]} sum @param {Stage} s @returns {[number, number]} */
    (sum, s) => [sum[0] + s.atp[0], sum[1] + s.atp[1]],
    [0, 0],
  );
}

/**
 * An ATP range as text: "2" or "36–38".
 * @param {[number, number]} range
 */
export const atpText = ([low, high]) => (low === high ? `${low}` : `${low}–${high}`);

/**
 * The stages of the respiration view for the oxygen state.
 * @param {boolean} oxygen
 * @param {'ruou' | 'lactic'} kind
 */
export const breakdownPath = (oxygen, kind) => (oxygen ? RESPIRATION : FERMENTATION[kind]);

/**
 * The sentence for the current path, at the stage being read.
 * @param {boolean} oxygen
 * @param {number} index
 * @param {Stage[]} path
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeBreakdown(oxygen, index, path) {
  const total = atpText(atpUpTo(path, path.length - 1));
  if (!oxygen) {
    return {
      tone: 'warn',
      text: `Không có O₂, chuỗi truyền electron dừng. Tế bào chỉ thu ${total} ATP từ một glucose, phần lớn năng lượng còn nằm trong sản phẩm lên men.`,
    };
  }
  if (index === path.length - 1) {
    return {
      tone: 'ok',
      text: `Đã đi hết các giai đoạn: glucose bị phân giải hoàn toàn thành CO₂ và H₂O, tổng cộng khoảng ${total} ATP. Hãy thử tắt O₂.`,
    };
  }
  return { tone: 'info', text: 'Bấm giai đoạn tiếp theo để cộng dồn sản phẩm.' };
}

/**
 * The sentence for the photosynthesis view.
 * @param {boolean} light
 * @param {number} index
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describePhotosynthesis(light, index) {
  if (!light) {
    return {
      tone: 'warn',
      text: 'Tắt sáng: pha sáng dừng ngay, không có thêm ATP và NADPH. Pha tối chạy nốt chỗ còn lại rồi cũng dừng, vì thiếu sản phẩm của pha sáng.',
    };
  }
  return index === 0
    ? {
        tone: 'info',
        text: 'Pha sáng làm ra ATP và NADPH. Bấm pha tối để xem chúng được dùng vào đâu.',
      }
    : {
        tone: 'ok',
        text: 'ATP và NADPH của pha sáng được dùng hết cho pha tối để làm ra glucose; ADP và NADP⁺ quay lại pha sáng.',
      };
}

/**
 * What the learner has opened.
 * @typedef {{ chain: boolean, fermented: boolean, dark: boolean, cycle: boolean }} Seen
 */

/** @type {Seen} */
export const NOTHING_SEEN = { chain: false, fermented: false, dark: false, cycle: false };

/** @type {{ id: string, label: string }[]} */
export const AUTOTROPH_BINS = [
  { id: 'quang-hop', label: 'Quang hợp' },
  { id: 'hoa-tong-hop', label: 'Hoá tổng hợp' },
  { id: 'quang-khu', label: 'Quang khử' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const AUTOTROPH_CARDS = [
  {
    id: 'cay-xanh',
    label: 'Cây xanh và tảo dùng ánh sáng, lấy electron từ nước, giải phóng O₂',
    bin: 'quang-hop',
    why: 'Dùng ánh sáng và nước, thải O₂ là đặc trưng của quang hợp.',
  },
  {
    id: 'vi-khuan-lam',
    label: 'Vi khuẩn lam có diệp lục, dùng H₂O và thải O₂ khi được chiếu sáng',
    bin: 'quang-hop',
    why: 'Vi khuẩn lam quang hợp giải phóng O₂ giống cây xanh.',
  },
  {
    id: 'nitrate-hoa',
    label: 'Vi khuẩn nitrate hoá lấy năng lượng từ việc oxy hoá NH₃ để cố định CO₂',
    bin: 'hoa-tong-hop',
    why: 'Năng lượng lấy từ oxy hoá chất vô cơ, không dùng ánh sáng: hoá tổng hợp.',
  },
  {
    id: 'luu-huynh-oxy-hoa',
    label: 'Vi khuẩn oxy hoá H₂S trong bóng tối để lấy năng lượng cố định CO₂',
    bin: 'hoa-tong-hop',
    why: 'Không có ánh sáng, năng lượng từ oxy hoá chất vô cơ: hoá tổng hợp.',
  },
  {
    id: 'luu-huynh-tia',
    label: 'Vi khuẩn lưu huỳnh màu tía dùng ánh sáng, thay H₂O bằng H₂S, không thải O₂',
    bin: 'quang-khu',
    why: 'Có dùng ánh sáng nhưng không dùng nước và không thải O₂: quang khử.',
  },
  {
    id: 'luu-huynh-luc',
    label: 'Vi khuẩn lưu huỳnh màu lục khử CO₂ nhờ ánh sáng, lấy electron từ H₂S',
    bin: 'quang-khu',
    why: 'Ánh sáng và H₂S, không thải O₂: quang khử.',
  },
];
