/**
 * A bite of bread with egg on its way through the human digestive tract,
 * following the book: food is broken down mechanically and chemically into
 * simple substances, nutrients are absorbed into the blood in the small
 * intestine, the large intestine takes back most of the remaining water and
 * forms the faeces, which leave through the anus.
 *
 * Amounts are whole "parts" of the bite, a simple model for teaching.
 */

/**
 * @typedef {{ id: string, label: string, amount: number, simple: boolean }} Item
 * @typedef {{
 *   id: string;
 *   name: string;
 *   mech: string;
 *   chem: string;
 *   absorb: string;
 *   tract: Item[];
 *   blood: Item[];
 * }} Stage
 */

/**
 * @param {string} id @param {string} label @param {number} amount
 * @param {boolean} [simple]
 * @returns {Item}
 */
const item = (id, label, amount, simple = false) => ({ id, label, amount, simple });

const STARCH = (/** @type {number} */ n) => item('tinh-bot', 'tinh bột', n);
const SUGAR = (/** @type {number} */ n) => item('duong', 'đường', n);
const PROTEIN = (/** @type {number} */ n) => item('protein', 'protein', n);
const PEPTIDE = (/** @type {number} */ n) => item('protein-ngan', 'chuỗi protein ngắn', n);
const LIPID = (/** @type {number} */ n) => item('lipid', 'lipid', n);
const FIBRE = (/** @type {number} */ n) => item('chat-xo', 'chất xơ', n);
const WATER = (/** @type {number} */ n) => item('nuoc', 'nước', n, true);

/** What the bite holds before it is eaten. */
export const MEAL = [STARCH(6), PROTEIN(4), LIPID(2), FIBRE(2), WATER(6)];

/** Nutrients that reach the blood from the small intestine. */
const ABSORBED = [
  item('glucose', 'glucose', 6, true),
  item('amino-acid', 'amino acid', 4, true),
  item('glycerol', 'glycerol và acid béo', 2, true),
];

/** @type {Stage[]} */
export const STAGES = [
  {
    id: 'mieng',
    name: 'Khoang miệng',
    mech: 'Răng cắn, xé, nghiền nhỏ thức ăn; lưỡi đảo trộn cho thức ăn thấm đều nước bọt, tạo thành viên rồi nuốt.',
    chem: 'Enzyme trong nước bọt biến đổi một phần tinh bột thành đường.',
    absorb: 'Chưa hấp thụ chất dinh dưỡng.',
    tract: [STARCH(5), SUGAR(1), PROTEIN(4), LIPID(2), FIBRE(2), WATER(6)],
    blood: [],
  },
  {
    id: 'thuc-quan',
    name: 'Thực quản',
    mech: 'Thành thực quản co bóp, đẩy viên thức ăn xuống dạ dày.',
    chem: 'Không có biến đổi hoá học.',
    absorb: 'Không hấp thụ.',
    tract: [STARCH(5), SUGAR(1), PROTEIN(4), LIPID(2), FIBRE(2), WATER(6)],
    blood: [],
  },
  {
    id: 'da-day',
    name: 'Dạ dày',
    mech: 'Thành dạ dày co bóp, nhào trộn, làm nhuyễn thức ăn và cho thấm đều dịch vị.',
    chem: 'Enzyme trong dịch vị biến đổi một phần protein thành các chuỗi protein ngắn hơn.',
    absorb: 'Hấp thụ rất ít.',
    tract: [STARCH(5), SUGAR(1), PROTEIN(2), PEPTIDE(2), LIPID(2), FIBRE(2), WATER(6)],
    blood: [],
  },
  {
    id: 'ruot-non',
    name: 'Ruột non',
    mech: 'Ruột non co bóp, trộn thức ăn với dịch tiêu hoá và đẩy dần xuống.',
    chem: 'Nhờ dịch tuỵ, dịch mật (từ gan) và dịch ruột, thức ăn được biến đổi hoàn toàn thành chất đơn giản: tinh bột thành glucose, protein thành amino acid, lipid thành glycerol và acid béo.',
    absorb:
      'Các chất dinh dưỡng đơn giản cùng nhiều nước được hấp thụ qua thành ruột non vào máu; chất xơ không được tiêu hoá, đi xuống ruột già.',
    tract: [FIBRE(2), WATER(2)],
    blood: [...ABSORBED, WATER(4)],
  },
  {
    id: 'ruot-gia',
    name: 'Ruột già',
    mech: 'Ruột già co bóp, dồn chất bã xuống.',
    chem: 'Không có enzyme tiêu hoá; vi khuẩn có ích lên men một phần chất bã.',
    absorb:
      'Hấp thụ phần lớn nước còn lại vào máu; chất không được tiêu hoá và hấp thụ cô đặc lại thành phân.',
    tract: [FIBRE(2), WATER(1)],
    blood: [...ABSORBED, WATER(5)],
  },
  {
    id: 'hau-mon',
    name: 'Hậu môn',
    mech: 'Phân được thải ra ngoài qua hậu môn.',
    chem: 'Không có biến đổi hoá học.',
    absorb: 'Không hấp thụ.',
    tract: [],
    blood: [...ABSORBED, WATER(5)],
  },
];

/** Total parts of a list of items. @param {Item[]} items */
export const total = (items) => items.reduce((s, x) => s + x.amount, 0);

/**
 * Parts of the meal that left as faeces after a stage.
 * @param {number} i stage index
 */
export function egested(i) {
  const k = Math.max(0, Math.min(STAGES.length - 1, i));
  return total(MEAL) - total(STAGES[k].tract) - total(STAGES[k].blood);
}

/** Questions for the "find the organ" mode. */
export const TASKS = [
  { q: 'Tinh bột bắt đầu được biến đổi thành đường ở đâu?', a: 'mieng' },
  { q: 'Cơ quan nào chỉ đẩy viên thức ăn xuống dạ dày, không biến đổi hoá học?', a: 'thuc-quan' },
  { q: 'Protein bắt đầu được biến đổi ở đâu?', a: 'da-day' },
  { q: 'Thức ăn được biến đổi hoàn toàn thành chất đơn giản ở đâu?', a: 'ruot-non' },
  { q: 'Chất dinh dưỡng được hấp thụ vào máu chủ yếu ở đâu?', a: 'ruot-non' },
  { q: 'Phần lớn nước còn lại được hấp thụ và phân được hình thành ở đâu?', a: 'ruot-gia' },
];

/**
 * Checks the organ the learner picked for a task.
 * @param {number} task index into TASKS @param {string} stageId
 */
export function checkTask(task, stageId) {
  const t = TASKS[task];
  const picked = STAGES.find((s) => s.id === stageId);
  const right = STAGES.find((s) => s.id === t.a);
  if (!picked || !right) return { ok: false, text: 'Chọn một cơ quan trên sơ đồ.' };
  if (picked.id === right.id)
    return { ok: true, text: `Đúng: ${right.name.toLowerCase()}. ${detail(right)}` };
  return {
    ok: false,
    text: `Chưa đúng. Ở ${picked.name.toLowerCase()}: ${detail(picked)} Thử chọn cơ quan khác.`,
  };
}

/** @param {Stage} s */
function detail(s) {
  if (s.id === 'ruot-non' || s.id === 'ruot-gia') return s.absorb;
  return s.chem === 'Không có biến đổi hoá học.' ? s.mech : s.chem;
}

/** Daily water need of an adolescent, mL per kg of body mass (Viện Dinh dưỡng, 2012). */
export const ML_PER_KG = 40;

/**
 * Daily water need of an adolescent, in millilitres.
 * @param {number} kg body mass
 */
export const waterNeed = (kg) => Math.round(Math.max(0, kg) * ML_PER_KG);
