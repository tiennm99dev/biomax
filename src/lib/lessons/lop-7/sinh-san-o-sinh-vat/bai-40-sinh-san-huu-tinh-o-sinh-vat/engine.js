/**
 * Data for the lesson on sexual reproduction: the labelled flower used by
 * the hotspot diagram, the stages from pollination to fruit and seed, and the
 * stages of sexual reproduction in three animals.
 */

/** @typedef {'con-trung' | 'gio'} Pollinator */

/** Stages of sexual reproduction in a flowering plant. */
export const PLANT_STAGES = [
  'Hoa nở: bao phấn của nhị chứa các hạt phấn (mang giao tử đực), bầu nhụy chứa noãn (mang giao tử cái).',
  'Thụ phấn: hạt phấn được chuyển tới đầu nhụy.',
  'Hạt phấn nảy mầm thành ống phấn; ống phấn xuyên qua vòi nhụy, đi vào bầu nhụy tới noãn.',
  'Thụ tinh: giao tử đực trong ống phấn kết hợp với giao tử cái trong noãn, tạo thành hợp tử.',
  'Cánh hoa, nhị héo và rụng; hợp tử phát triển thành phôi, noãn phát triển thành hạt, bầu nhụy phát triển thành quả chứa hạt.',
];

/** @type {Record<Pollinator, string>} */
export const POLLINATOR_TEXT = {
  'con-trung':
    'Ong hút mật, hạt phấn dính vào lông ong rồi rơi lên đầu nhụy: thụ phấn nhờ côn trùng.',
  gio: 'Gió thổi hạt phấn nhỏ, nhẹ bay tới đầu nhụy: thụ phấn nhờ gió.',
};

/**
 * @param {string} v
 * @returns {Pollinator}
 */
export function asPollinator(v) {
  return v === 'gio' ? 'gio' : 'con-trung';
}

/**
 * The live line under the flower.
 * @param {number} stage @param {Pollinator} pollinator
 */
export function plantText(stage, pollinator) {
  const i = Math.max(0, Math.min(PLANT_STAGES.length - 1, stage));
  const head = `Bước ${i + 1}: ${PLANT_STAGES[i]}`;
  return i === 1 ? `${head} ${POLLINATOR_TEXT[pollinator]}` : head;
}

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   fertilization: 'ngoai' | 'trong';
 *   birth: 'de-trung' | 'de-con';
 *   young: string;
 * }} Animal
 */

/** @type {Animal[]} */
export const ANIMALS = [
  { id: 'ca-chep', label: 'Cá chép', fertilization: 'ngoai', birth: 'de-trung', young: 'cá con' },
  { id: 'ga', label: 'Gà', fertilization: 'trong', birth: 'de-trung', young: 'gà con' },
  { id: 'tho', label: 'Thỏ', fertilization: 'trong', birth: 'de-con', young: 'thỏ con' },
];

/** @param {string} id */
export function animalById(id) {
  return ANIMALS.find((a) => a.id === id) ?? ANIMALS[0];
}

export const ANIMAL_STAGE_COUNT = 4;

/**
 * Where fertilization happens, in words.
 * @param {Animal} a
 */
export function fertilizationPlace(a) {
  return a.fertilization === 'ngoai'
    ? 'thụ tinh ngoài (trứng và tinh trùng gặp nhau trong nước, bên ngoài cơ thể con cái)'
    : 'thụ tinh trong (trứng và tinh trùng gặp nhau trong cơ quan sinh dục của con cái)';
}

/**
 * The live line under the animal panel.
 * @param {Animal} a @param {number} stage
 */
export function animalText(a, stage) {
  const i = Math.max(0, Math.min(ANIMAL_STAGE_COUNT - 1, stage));
  const name = a.label.toLowerCase();
  if (i === 0)
    return `Bước 1: hình thành giao tử. ${a.label} đực tạo tinh trùng (giao tử đực), ${name} cái tạo trứng (giao tử cái).`;
  if (i === 1) return `Bước 2: ${a.label} ${fertilizationPlace(a)}. Kết quả là một hợp tử.`;
  if (i === 2) return 'Bước 3: hợp tử phân chia nhiều lần, phát triển thành phôi.';
  return a.birth === 'de-trung'
    ? `Bước 4: ${a.label} đẻ trứng; phôi phát triển trong trứng, bên ngoài cơ thể mẹ, rồi nở thành ${a.young}.`
    : `Bước 4: ${a.label} đẻ con; phôi phát triển trong tử cung của cơ thể mẹ, rồi mẹ đẻ ra ${a.young}.`;
}

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const FLOWER = {
  id: 'cau-tao-hoa',
  title: 'Cấu tạo hoa lưỡng tính (cắt dọc)',
  width: 360,
  height: 320,
  shapes: [
    {
      kind: 'path',
      d: 'M 158 238 C 90 230 50 150 76 112 C 110 130 150 190 166 232 Z',
      fill: '#f9a8d4',
      stroke: '#be185d',
      width: 2,
    },
    {
      kind: 'path',
      d: 'M 202 238 C 270 230 310 150 284 112 C 250 130 210 190 194 232 Z',
      fill: '#f9a8d4',
      stroke: '#be185d',
      width: 2,
    },
    {
      kind: 'path',
      d: 'M 150 246 C 126 246 106 232 100 214 C 122 220 140 230 156 240 Z',
      fill: '#4ade80',
      stroke: '#15803d',
      width: 2,
    },
    {
      kind: 'path',
      d: 'M 210 246 C 234 246 254 232 260 214 C 238 220 220 230 204 240 Z',
      fill: '#4ade80',
      stroke: '#15803d',
      width: 2,
    },
    { kind: 'line', x1: 180, y1: 252, x2: 180, y2: 312, stroke: '#15803d', width: 7 },
    {
      kind: 'ellipse',
      cx: 180,
      cy: 246,
      rx: 42,
      ry: 10,
      fill: '#86efac',
      stroke: '#15803d',
      width: 2,
    },
    { kind: 'line', x1: 162, y1: 238, x2: 134, y2: 146, stroke: '#ca8a04', width: 3 },
    { kind: 'line', x1: 198, y1: 238, x2: 226, y2: 146, stroke: '#ca8a04', width: 3 },
    {
      kind: 'ellipse',
      cx: 132,
      cy: 134,
      rx: 9,
      ry: 15,
      fill: '#facc15',
      stroke: '#a16207',
      width: 2,
    },
    {
      kind: 'ellipse',
      cx: 228,
      cy: 134,
      rx: 9,
      ry: 15,
      fill: '#facc15',
      stroke: '#a16207',
      width: 2,
    },
    { kind: 'circle', cx: 120, cy: 122, r: 2.5, fill: '#eab308' },
    { kind: 'circle', cx: 116, cy: 130, r: 2.5, fill: '#eab308' },
    { kind: 'circle', cx: 242, cy: 122, r: 2.5, fill: '#eab308' },
    {
      kind: 'ellipse',
      cx: 180,
      cy: 214,
      rx: 26,
      ry: 24,
      fill: '#bbf7d0',
      stroke: '#166534',
      width: 2,
    },
    { kind: 'circle', cx: 172, cy: 216, r: 5, fill: '#fef9c3', stroke: '#a16207', width: 1.5 },
    { kind: 'circle', cx: 189, cy: 216, r: 5, fill: '#fef9c3', stroke: '#a16207', width: 1.5 },
    { kind: 'rect', x: 176, y: 120, w: 8, h: 72, fill: '#bbf7d0', stroke: '#166534', width: 2 },
    {
      kind: 'ellipse',
      cx: 180,
      cy: 116,
      rx: 14,
      ry: 7,
      fill: '#86efac',
      stroke: '#166534',
      width: 2,
    },
  ],
  parts: [
    {
      id: 'cuong-hoa',
      name: 'Cuống hoa',
      info: 'Nối hoa với cành, nâng đỡ hoa.',
      x: 180,
      y: 292,
    },
    {
      id: 'de-hoa',
      name: 'Đế hoa',
      info: 'Phần đầu cuống phình ra, nơi gắn các bộ phận khác của hoa.',
      x: 224,
      y: 252,
    },
    {
      id: 'dai-hoa',
      name: 'Đài hoa',
      accept: ['lá đài', 'đài'],
      info: 'Gồm các lá đài màu xanh, bảo vệ hoa khi còn là nụ.',
      x: 116,
      y: 232,
    },
    {
      id: 'tranh-hoa',
      name: 'Tràng hoa',
      accept: ['cánh hoa', 'tràng'],
      info: 'Gồm các cánh hoa, thường có màu sắc, hương thơm thu hút côn trùng; bảo vệ nhị và nhụy.',
      x: 92,
      y: 162,
    },
    {
      id: 'bao-phan',
      name: 'Bao phấn',
      info: 'Đầu của nhị, chứa các hạt phấn; hạt phấn mang giao tử đực.',
      x: 132,
      y: 134,
    },
    {
      id: 'chi-nhi',
      name: 'Chỉ nhị',
      info: 'Cuống mảnh nâng đỡ bao phấn. Chỉ nhị và bao phấn hợp thành nhị (bộ phận sinh sản đực).',
      x: 214,
      y: 190,
    },
    {
      id: 'dau-nhuy',
      name: 'Đầu nhụy',
      info: 'Phần trên cùng của nhụy, nơi tiếp nhận hạt phấn khi thụ phấn.',
      x: 180,
      y: 108,
    },
    {
      id: 'voi-nhuy',
      name: 'Vòi nhụy',
      info: 'Nối đầu nhụy với bầu nhụy; ống phấn đi qua vòi nhụy để tới noãn.',
      x: 180,
      y: 160,
    },
    {
      id: 'bau-nhuy',
      name: 'Bầu nhụy',
      info: 'Phần phình to ở gốc nhụy, chứa noãn; sau thụ tinh phát triển thành quả.',
      x: 150,
      y: 212,
    },
    {
      id: 'noan',
      name: 'Noãn',
      info: 'Nằm trong bầu nhụy, mang giao tử cái; sau thụ tinh phát triển thành hạt.',
      x: 190,
      y: 218,
    },
  ],
};
