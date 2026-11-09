/**
 * The two respiration pathways of one glucose molecule, stage by stage, with
 * the book's counts: glycolysis gives 2 ATP and 2 NADH; pyruvate oxidation
 * and the Krebs cycle give 2 ATP, 8 NADH and 2 FADH2; the electron transport
 * chain turns each NADH into about 2,5 ATP and each FADH2 into about 1,5 ATP.
 * Fermentation only reuses the NADH of glycolysis to rebuild NAD+.
 */

/** @typedef {'aerobic' | 'ethanol' | 'lactate'} PathId */

/**
 * @typedef {object} Stage
 * @property {string} id
 * @property {string} name
 * @property {string} place
 * @property {number} atp ATP made directly in this stage.
 * @property {number} nadh NADH made (negative when used up).
 * @property {number} fadh2 FADH2 made (negative when used up).
 * @property {number} co2
 * @property {string} product What the carbon ends up as after this stage.
 */

export const ATP_PER_NADH = 2.5;
export const ATP_PER_FADH2 = 1.5;

/** @type {Stage} */
const GLYCOLYSIS = {
  id: 'duong-phan',
  name: 'Đường phân',
  place: 'tế bào chất',
  atp: 2,
  nadh: 2,
  fadh2: 0,
  co2: 0,
  product: '$2$ pyruvate',
};

/** @type {Record<PathId, Stage[]>} */
export const PATHS = {
  aerobic: [
    GLYCOLYSIS,
    {
      id: 'krebs',
      name: 'Oxy hoá pyruvate và chu trình Krebs',
      place: 'chất nền ti thể',
      atp: 2,
      nadh: 8,
      fadh2: 2,
      co2: 6,
      product: '$6\\,\\mathrm{CO_2}$',
    },
    {
      id: 'chuoi',
      name: 'Chuỗi truyền electron',
      place: 'màng trong ti thể',
      atp: 10 * ATP_PER_NADH + 2 * ATP_PER_FADH2,
      nadh: -10,
      fadh2: -2,
      co2: 0,
      product: '$6\\,\\mathrm{CO_2}$ và $6\\,\\mathrm{H_2O}$',
    },
  ],
  ethanol: [
    GLYCOLYSIS,
    {
      id: 'len-men-ruou',
      name: 'Lên men rượu',
      place: 'tế bào chất',
      atp: 0,
      nadh: -2,
      fadh2: 0,
      co2: 2,
      product: '$2$ ethanol và $2\\,\\mathrm{CO_2}$',
    },
  ],
  lactate: [
    GLYCOLYSIS,
    {
      id: 'len-men-lactic',
      name: 'Lên men lactic',
      place: 'tế bào chất',
      atp: 0,
      nadh: -2,
      fadh2: 0,
      co2: 0,
      product: '$2$ lactate',
    },
  ],
};

/**
 * Running totals after the first `done` stages of a path.
 * @param {PathId} path
 * @param {number} done
 */
export function totals(path, done) {
  const t = { atp: 0, nadh: 0, fadh2: 0, co2: 0 };
  for (const s of PATHS[path].slice(0, done)) {
    t.atp += s.atp;
    t.nadh += s.nadh;
    t.fadh2 += s.fadh2;
    t.co2 += s.co2;
  }
  return t;
}

/** ATP from one glucose when the whole path has run. @param {PathId} path */
export const atpPerGlucose = (path) => totals(path, PATHS[path].length).atp;

/**
 * How many glucose molecules a path needs to make `atp` ATP.
 * @param {PathId} path @param {number} atp
 */
export const glucoseFor = (path, atp) => Math.ceil(atp / atpPerGlucose(path));

/**
 * Which pathway a cell takes at a given oxygen level (in % of air), as the
 * book puts it: below about 5 % O2 the plant switches to fermentation.
 * @param {number} o2
 */
export const pathAtOxygen = (o2) => (o2 < 5 ? 'len-men' : 'hieu-khi');

/**
 * Feedback after the learner has run `done` stages.
 * @param {PathId} path @param {number} done
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function stageNote(path, done) {
  const stages = PATHS[path];
  if (done === 0) {
    return {
      tone: 'info',
      text: 'Một phân tử glucose đang chờ trong tế bào chất. Bấm "Chạy giai đoạn tiếp" để bắt đầu.',
    };
  }
  const s = stages[done - 1];
  if (done < stages.length) {
    return {
      tone: 'info',
      text: `${s.name} (${s.place}) xong: thu được ${s.product}, cộng dồn ${totals(path, done).atp} ATP.`,
    };
  }
  if (path === 'aerobic') {
    return {
      tone: 'ok',
      text: 'Phân giải hoàn toàn: glucose thành $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$, được khoảng $30$ đến $32$ ATP. Chuỗi truyền electron tạo nhiều ATP nhất, và $\\mathrm{O_2}$ là chất nhận electron cuối cùng.',
    };
  }
  return {
    tone: 'warn',
    text: `Không có $\\mathrm{O_2}$: chỉ có $2$ ATP từ đường phân. Lên men chỉ dùng NADH để tái tạo $\\mathrm{NAD^+}$ cho đường phân chạy tiếp, sản phẩm ${s.product} vẫn còn nhiều năng lượng.`,
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const ROUTE_BINS = [
  { id: 'hieu-khi', label: 'Hô hấp hiếu khí' },
  { id: 'len-men', label: 'Lên men' },
  { id: 'sang', label: 'Hô hấp sáng' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const ROUTE_CARDS = [
  {
    id: 'krebs',
    label: 'Có chu trình Krebs trong chất nền ti thể',
    bin: 'hieu-khi',
    why: 'Chu trình Krebs chỉ chạy khi có $\\mathrm{O_2}$, trong hô hấp hiếu khí.',
  },
  {
    id: 'atp32',
    label: 'Được khoảng $30$ đến $32$ ATP từ một glucose',
    bin: 'hieu-khi',
    why: 'Phân giải hoàn toàn glucose nên thu nhiều ATP nhất.',
  },
  {
    id: 'o2-cuoi',
    label: '$\\mathrm{O_2}$ nhận electron cuối cùng, tạo nước',
    bin: 'hieu-khi',
    why: 'Đây là bước cuối của chuỗi truyền electron.',
  },
  {
    id: 'ngap',
    label: 'Xảy ra ở rễ cây bị ngập úng',
    bin: 'len-men',
    why: 'Đất ngập nước thiếu $\\mathrm{O_2}$ nên rễ chuyển sang lên men.',
  },
  {
    id: 'ethanol',
    label: 'Tạo ethanol hoặc lactate',
    bin: 'len-men',
    why: 'Pyruvate bị khử thành ethanol (kèm $\\mathrm{CO_2}$) hoặc lactate.',
  },
  {
    id: 'atp2',
    label: 'Chỉ được $2$ ATP từ một glucose',
    bin: 'len-men',
    why: 'Chỉ có ATP của đường phân.',
  },
  {
    id: 'c3',
    label: 'Ở thực vật C3, khi trời nắng gắt, khí khổng đóng',
    bin: 'sang',
    why: 'Khi $\\mathrm{CO_2}$ trong lá cạn và $\\mathrm{O_2}$ tích luỹ nhiều, Rubisco gắn $\\mathrm{O_2}$ vào RuBP.',
  },
  {
    id: 'ba-bao-quan',
    label: 'Đi qua lục lạp, peroxisome và ti thể',
    bin: 'sang',
    why: 'Sản phẩm của Rubisco được chuyển qua ba bào quan này.',
  },
  {
    id: 'khong-atp',
    label: 'Thải $\\mathrm{CO_2}$ mà không tạo ATP',
    bin: 'sang',
    why: 'Hô hấp sáng gây lãng phí sản phẩm quang hợp.',
  },
];
