/**
 * Two models for the nutrition and digestion lesson.
 *
 * 1. A one-day meal planner (khẩu phần): each food has a serving size and its
 *    protein, lipid and carbohydrate per 100 g (rounded from the Vietnamese
 *    food composition table). Energy uses the usual factors: about 4 kcal per
 *    gram of protein or carbohydrate and 9 kcal per gram of lipid.
 * 2. The path of food through the digestive tract, organ by organ, with the
 *    mechanical and chemical changes and the absorption at each stage.
 */

export const KCAL = { protein: 4, lipid: 9, glucid: 4 };

/**
 * @typedef {'bot' | 'dam' | 'beo' | 'rau-qua'} FoodGroup
 * @typedef {{
 *   id: string;
 *   name: string;
 *   unit: string;
 *   grams: number;
 *   group: FoodGroup;
 *   protein: number;
 *   lipid: number;
 *   glucid: number;
 * }} Food
 */

/** Groups of foods, by the nutrient they mainly provide. */
export const GROUPS = /** @type {Record<FoodGroup, string>} */ ({
  bot: 'Nhóm bột đường (carbohydrate)',
  dam: 'Nhóm đạm (protein)',
  beo: 'Nhóm chất béo (lipid)',
  'rau-qua': 'Nhóm rau, quả (vitamin, chất khoáng, chất xơ)',
});

/** Foods per 100 g edible part; `grams` is one serving. */
/** @type {Food[]} */
export const FOODS = [
  {
    id: 'com',
    name: 'Cơm',
    unit: 'bát',
    grams: 150,
    group: 'bot',
    protein: 2.7,
    lipid: 0.3,
    glucid: 28,
  },
  {
    id: 'banh-mi',
    name: 'Bánh mì',
    unit: 'ổ',
    grams: 80,
    group: 'bot',
    protein: 7.9,
    lipid: 0.8,
    glucid: 52.6,
  },
  {
    id: 'khoai-lang',
    name: 'Khoai lang',
    unit: 'củ',
    grams: 150,
    group: 'bot',
    protein: 0.8,
    lipid: 0.2,
    glucid: 28.5,
  },
  {
    id: 'thit-lon',
    name: 'Thịt lợn nạc',
    unit: 'phần',
    grams: 100,
    group: 'dam',
    protein: 19,
    lipid: 7,
    glucid: 0,
  },
  {
    id: 'ca',
    name: 'Cá rô phi',
    unit: 'phần',
    grams: 100,
    group: 'dam',
    protein: 19.7,
    lipid: 2.3,
    glucid: 0,
  },
  {
    id: 'trung',
    name: 'Trứng gà',
    unit: 'quả',
    grams: 50,
    group: 'dam',
    protein: 14.8,
    lipid: 11.6,
    glucid: 0.5,
  },
  {
    id: 'dau-phu',
    name: 'Đậu phụ',
    unit: 'bìa',
    grams: 100,
    group: 'dam',
    protein: 10.9,
    lipid: 5.4,
    glucid: 1.1,
  },
  {
    id: 'sua',
    name: 'Sữa bò tươi',
    unit: 'hộp',
    grams: 180,
    group: 'dam',
    protein: 3.9,
    lipid: 4.4,
    glucid: 4.8,
  },
  {
    id: 'dau-an',
    name: 'Dầu ăn',
    unit: 'thìa',
    grams: 10,
    group: 'beo',
    protein: 0,
    lipid: 99.7,
    glucid: 0,
  },
  {
    id: 'rau',
    name: 'Rau muống',
    unit: 'đĩa',
    grams: 150,
    group: 'rau-qua',
    protein: 3.2,
    lipid: 0,
    glucid: 2.5,
  },
  {
    id: 'chuoi',
    name: 'Chuối tiêu',
    unit: 'quả',
    grams: 100,
    group: 'rau-qua',
    protein: 1.5,
    lipid: 0.2,
    glucid: 22.2,
  },
];

/**
 * Energy in kcal of the given grams of each nutrient.
 * @param {{ protein: number, lipid: number, glucid: number }} n
 */
export function energy(n) {
  return n.protein * KCAL.protein + n.lipid * KCAL.lipid + n.glucid * KCAL.glucid;
}

/** @typedef {Record<string, number>} Plan food id → number of servings */

/**
 * Grams of each nutrient and the energy of a plan.
 * @param {Plan} plan
 */
export function totals(plan) {
  let protein = 0;
  let lipid = 0;
  let glucid = 0;
  for (const f of FOODS) {
    const g = (plan[f.id] ?? 0) * f.grams;
    protein += (g * f.protein) / 100;
    lipid += (g * f.lipid) / 100;
    glucid += (g * f.glucid) / 100;
  }
  const kcal = energy({ protein, lipid, glucid });
  return { protein, lipid, glucid, kcal };
}

/**
 * Share of energy from each nutrient, in percent (0 when the plan is empty).
 * @param {Plan} plan
 */
export function shares(plan) {
  const t = totals(plan);
  if (t.kcal === 0) return { protein: 0, lipid: 0, glucid: 0 };
  return {
    protein: (100 * t.protein * KCAL.protein) / t.kcal,
    lipid: (100 * t.lipid * KCAL.lipid) / t.kcal,
    glucid: (100 * t.glucid * KCAL.glucid) / t.kcal,
  };
}

/** Recommended shares of energy, in percent, used as a reference for teenagers. */
export const BANDS = {
  protein: [13, 20],
  lipid: [20, 30],
  glucid: [55, 65],
};

/**
 * Food groups missing from a plan.
 * @param {Plan} plan
 * @returns {FoodGroup[]}
 */
export function missingGroups(plan) {
  const present = new Set(FOODS.filter((f) => (plan[f.id] ?? 0) > 0).map((f) => f.group));
  return /** @type {FoodGroup[]} */ (Object.keys(GROUPS)).filter((g) => !present.has(g));
}

/**
 * Checks a plan against the three principles of a khẩu phần: enough energy,
 * balanced nutrients, and every food group.
 * @param {Plan} plan
 * @param {number} need kcal per day
 * @returns {{ energy: 'thieu' | 'du' | 'thua', unbalanced: Array<'protein' | 'lipid' | 'glucid'>, missing: FoodGroup[], ok: boolean }}
 */
export function assess(plan, need) {
  const t = totals(plan);
  const ratio = t.kcal / need;
  const e = ratio < 0.9 ? 'thieu' : ratio > 1.1 ? 'thua' : 'du';
  const s = shares(plan);
  /** @type {Array<'protein' | 'lipid' | 'glucid'>} */
  const unbalanced = [];
  for (const k of /** @type {const} */ (['protein', 'lipid', 'glucid'])) {
    const [lo, hi] = BANDS[k];
    if (t.kcal > 0 && (s[k] < lo || s[k] > hi)) unbalanced.push(k);
  }
  const missing = missingGroups(plan);
  return {
    energy: e,
    unbalanced,
    missing,
    ok: e === 'du' && !unbalanced.length && !missing.length,
  };
}

const NUTRIENT_NAMES = { protein: 'protein', lipid: 'lipid (chất béo)', glucid: 'carbohydrate' };

/**
 * Feedback sentences for a plan.
 * @param {Plan} plan
 * @param {number} need
 * @returns {string[]}
 */
export function advice(plan, need) {
  const a = assess(plan, need);
  const s = shares(plan);
  if (totals(plan).kcal === 0) return ['Hãy thêm thức ăn vào khẩu phần bằng các nút +.'];
  /** @type {string[]} */
  const out = [];
  if (a.energy === 'thieu')
    out.push('Khẩu phần còn thiếu năng lượng so với nhu cầu: hãy thêm thức ăn.');
  if (a.energy === 'thua')
    out.push('Khẩu phần thừa năng lượng: ăn thừa lâu ngày dễ gây béo phì, hãy bớt thức ăn.');
  for (const k of a.unbalanced) {
    const [lo, hi] = BANDS[k];
    out.push(
      s[k] < lo
        ? `Năng lượng từ ${NUTRIENT_NAMES[k]} còn ít (nên khoảng ${lo}–${hi}%).`
        : `Năng lượng từ ${NUTRIENT_NAMES[k]} quá nhiều (nên khoảng ${lo}–${hi}%).`,
    );
  }
  for (const g of a.missing) out.push(`Còn thiếu ${GROUPS[g].toLowerCase()}.`);
  if (a.ok)
    out.push(
      'Khẩu phần hợp lí: đủ năng lượng, cân đối các chất và có đủ các nhóm thức ăn. Nhớ chia thành các bữa trong ngày và uống đủ nước.',
    );
  return out;
}

/** A starting plan with too little energy and no fruit or vegetables. */
export const START_PLAN = /** @type {Plan} */ ({ com: 3, 'thit-lon': 1, 'dau-an': 1 });

/**
 * @typedef {{
 *   id: string;
 *   organ: string;
 *   mechanical: string;
 *   chemical: string;
 *   absorption: string;
 *   x: number;
 *   y: number;
 * }} Stage
 */

/** The food's path, in order, with where the bite is drawn (240 × 400 view box). */
/** @type {Stage[]} */
export const STAGES = [
  {
    id: 'mieng',
    organ: 'Khoang miệng',
    mechanical:
      'Răng cắn, xé, nghiền nhỏ thức ăn; lưỡi đảo trộn thức ăn với nước bọt, tạo viên thức ăn.',
    chemical:
      'Enzyme amylase trong nước bọt biến đổi một phần tinh bột (chín) thành đường maltose.',
    absorption: 'Hầu như chưa hấp thụ.',
    x: 120,
    y: 40,
  },
  {
    id: 'thuc-quan',
    organ: 'Hầu và thực quản',
    mechanical: 'Nuốt; thực quản co bóp đẩy viên thức ăn xuống dạ dày.',
    chemical: 'Không biến đổi hóa học đáng kể.',
    absorption: 'Không hấp thụ.',
    x: 120,
    y: 100,
  },
  {
    id: 'da-day',
    organ: 'Dạ dày',
    mechanical: 'Dạ dày co bóp, làm thức ăn nhuyễn và thấm đều dịch vị.',
    chemical: 'Enzyme pepsin trong dịch vị biến đổi một phần protein thành các chuỗi ngắn hơn.',
    absorption: 'Hấp thụ rất ít (một ít nước, rượu).',
    x: 150,
    y: 170,
  },
  {
    id: 'ruot-non',
    organ: 'Ruột non',
    mechanical: 'Ruột non co bóp, đảo trộn thức ăn với dịch tiêu hóa và đẩy dần xuống.',
    chemical:
      'Nhờ dịch tụy, dịch mật (từ gan) và dịch ruột, tinh bột và đường đôi thành đường đơn, protein thành amino acid, lipid thành acid béo và glycerol.',
    absorption: 'Hấp thụ hầu hết chất dinh dưỡng qua lông ruột vào mạch máu và mạch bạch huyết.',
    x: 120,
    y: 250,
  },
  {
    id: 'ruot-gia',
    organ: 'Ruột già',
    mechanical: 'Co bóp đẩy chất bã xuống trực tràng.',
    chemical: 'Vi khuẩn có ích phân hủy phần protein, carbohydrate còn sót lại.',
    absorption: 'Hấp thụ lại nước và một số muối khoáng, cô đặc chất bã thành phân.',
    x: 70,
    y: 300,
  },
  {
    id: 'hau-mon',
    organ: 'Trực tràng và hậu môn',
    mechanical: 'Phân được thải ra ngoài nhờ nhu động ruột và phản xạ đại tiện.',
    chemical: 'Không biến đổi hóa học.',
    absorption: 'Không hấp thụ.',
    x: 120,
    y: 370,
  },
];

/**
 * What each nutrient of the meal has become after leaving a stage.
 * @param {number} i stage index
 */
export function nutrientsAfter(i) {
  return {
    'Tinh bột':
      i < 0 ? 'tinh bột' : i < 3 ? 'tinh bột, một phần thành maltose' : 'đường đơn (glucose)',
    Protein: i < 2 ? 'protein' : i < 3 ? 'protein, một phần thành chuỗi ngắn' : 'amino acid',
    Lipid: i < 3 ? 'lipid (chưa biến đổi)' : 'acid béo và glycerol',
  };
}
