/**
 * A teaching model of the water budget of a plant, in relative units. Light
 * opens the stomata, dry air pulls more vapour out, moist soil lets the roots
 * supply water, and waterlogged soil starves the roots of oxygen. When the
 * leaves ask for more than the roots can give, the stomata close partly.
 */

/** @typedef {{ light: number, air: number, soil: number }} Weather All in percent. */

const DEMAND_SCALE = 1.4;
const LEAST_OPENING = 0.1;
const LEAST_CLOSURE = 0.15;
const WILT_STRESS = 0.45;
const WATERLOG_FROM = 85;
const FIELD_MOIST = 60;

/**
 * How wide light alone would open the stomata, from 0 to 1.
 * @param {number} light
 */
export const lightOpening = (light) => LEAST_OPENING + (1 - LEAST_OPENING) * (light / 100);

/**
 * The water the roots can take up, from 0 to 1.
 * @param {number} soil
 */
export function rootSupply(soil) {
  if (soil >= WATERLOG_FROM) return 1 - 0.75 * ((soil - WATERLOG_FROM) / (100 - WATERLOG_FROM));
  return Math.min(1, soil / FIELD_MOIST);
}

/**
 * The state of the plant in this weather.
 * @param {Weather} w
 */
export function waterBudget(w) {
  const dryness = 1 - w.air / 100;
  const wanted = lightOpening(w.light) * dryness * DEMAND_SCALE;
  const supply = rootSupply(w.soil);
  const short = wanted > supply;
  const closure = short ? Math.max(LEAST_CLOSURE, supply / wanted) : 1;
  const opening = lightOpening(w.light) * closure;
  const transpired = opening * dryness * DEMAND_SCALE;
  const stress = short ? 1 - supply / wanted : 0;
  return {
    /** Stomatal opening, 0 to 1. */
    opening,
    /** Water leaving the leaves. */
    transpired,
    /** Water going up the xylem; roots push a little even with nothing leaving. */
    xylem: Math.min(supply, transpired + 0.05),
    /** Sugar leaving the leaves through the phloem; needs light and open stomata. */
    phloem: (w.light / 100) * opening,
    stress,
    wilted: stress >= WILT_STRESS || (w.soil >= WATERLOG_FROM && stress > 0),
    waterlogged: w.soil >= WATERLOG_FROM,
  };
}

/**
 * The feedback sentence for this weather.
 * @param {Weather} w
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeBudget(w) {
  const b = waterBudget(w);
  if (b.waterlogged && b.stress > 0) {
    return {
      tone: 'warn',
      text: 'Đất úng: rễ thiếu $\\mathrm{O_2}$ để hô hấp nên hút nước kém. Lá vẫn thoát hơi nước, cây héo dù đất đầy nước.',
    };
  }
  if (b.waterlogged) {
    return {
      tone: 'warn',
      text: 'Đất bắt đầu úng: rễ thiếu dần $\\mathrm{O_2}$ nên hút nước kém đi. Lượng nước hút còn đủ bù lượng nước thoát, nhưng úng nặng hơn thì cây sẽ héo.',
    };
  }
  if (b.wilted) {
    return {
      tone: 'warn',
      text: 'Thoát hơi nước vượt xa lượng nước rễ hút được: cây mất cân bằng nước và héo. Abscisic acid tăng làm khí khổng đóng bớt để giảm mất nước.',
    };
  }
  if (b.stress > 0) {
    return {
      tone: 'warn',
      text: 'Rễ cung cấp không đủ cho nhu cầu thoát hơi nước: khí khổng khép bớt, nhưng cũng vì thế lượng $\\mathrm{CO_2}$ vào lá giảm.',
    };
  }
  if (w.light < 15) {
    return {
      tone: 'info',
      text: 'Thiếu ánh sáng: khí khổng gần như đóng, thoát hơi nước rất yếu. Mạch rây gần như không nhận thêm đường mới từ lá.',
    };
  }
  if (w.air >= 90) {
    return {
      tone: 'info',
      text: 'Không khí gần bão hoà hơi nước: khí khổng vẫn mở nhưng hơi nước khó thoát ra, dòng mạch gỗ chậm lại.',
    };
  }
  return {
    tone: 'ok',
    text: 'Cây cân bằng nước: lượng nước rễ hút được đủ bù lượng nước thoát qua lá. Thoát hơi nước tạo lực kéo dòng mạch gỗ đi lên.',
  };
}

/** @type {Weather} */
export const START_WEATHER = { light: 60, air: 60, soil: 60 };

/** @typedef {{ dry: boolean, humid: boolean, flooded: boolean }} Seen */

/** @type {Seen} */
export const NOTHING_SEEN = { dry: false, humid: false, flooded: false };

/**
 * @param {Seen} seen
 * @param {Weather} w
 * @returns {Seen}
 */
export function updateSeen(seen, w) {
  const b = waterBudget(w);
  return {
    dry: seen.dry || (b.wilted && !b.waterlogged),
    humid: seen.humid || (w.air >= 90 && w.light >= 50 && b.stress === 0),
    flooded: seen.flooded || (b.waterlogged && b.stress > 0),
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const ELEMENT_BINS = [
  { id: 'da', label: 'Đa lượng' },
  { id: 'vi', label: 'Vi lượng' },
];

/** @type {Array<[string, 'da' | 'vi', string]>} */
const ELEMENTS = [
  ['C', 'da', 'Carbon lấy từ CO₂, là khung của mọi chất hữu cơ.'],
  ['H', 'da', 'Hydrogen lấy từ nước, có trong mọi chất hữu cơ.'],
  ['O', 'da', 'Oxygen có trong nước, CO₂ và chất hữu cơ.'],
  ['N', 'da', 'Nitrogen cấu tạo protein, nucleic acid, diệp lục.'],
  ['P', 'da', 'Phosphorus cấu tạo nucleic acid, ATP, phospholipid.'],
  ['K', 'da', 'Potassium điều tiết đóng mở khí khổng, cân bằng nước.'],
  ['S', 'da', 'Sulfur cấu tạo một số amino acid.'],
  ['Ca', 'da', 'Calcium cấu tạo thành tế bào.'],
  ['Mg', 'da', 'Magnesium là thành phần của diệp lục.'],
  ['Fe', 'vi', 'Sắt cần với lượng rất nhỏ cho tổng hợp diệp lục và enzyme.'],
  ['Cu', 'vi', 'Đồng cần với lượng rất nhỏ, hoạt hoá enzyme.'],
  ['Zn', 'vi', 'Kẽm cần với lượng rất nhỏ, hoạt hoá enzyme.'],
  ['Mn', 'vi', 'Manganese cần với lượng rất nhỏ cho phân li nước trong quang hợp.'],
  ['B', 'vi', 'Boron cần với lượng rất nhỏ, liên quan đến thụ phấn và vận chuyển đường.'],
  ['Mo', 'vi', 'Molybdenum cần với lượng rất nhỏ cho enzyme khử nitrate.'],
  ['Cl', 'vi', 'Chlorine cần với lượng rất nhỏ cho cân bằng ion.'],
  ['Ni', 'vi', 'Nickel cần với lượng rất nhỏ cho enzyme chuyển hoá urea.'],
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const ELEMENT_CARDS = ELEMENTS.map(([id, bin, why]) => ({ id, label: id, bin, why }));

const SOIL = '#a16207';
const CELL = '#fef9c3';
const WALL = '#a3a3a3';

/**
 * Rows of cells between the root hair and the xylem, so the two routes show:
 * through the walls (blue) and through the cytoplasm (green).
 * @returns {import('#lib/domain/diagrams.js').Shape[]}
 */
function rootShapes() {
  /** @type {import('#lib/domain/diagrams.js').Shape[]} */
  const shapes = [{ kind: 'rect', x: 0, y: 0, w: 360, h: 220, fill: SOIL, opacity: 0.25 }];
  for (let col = 0; col < 3; col++) {
    for (let row = 0; row < 3; row++) {
      shapes.push({
        kind: 'rect',
        x: 110 + col * 46,
        y: 30 + row * 56,
        w: 42,
        h: 52,
        rx: 6,
        fill: CELL,
        stroke: WALL,
      });
    }
  }
  for (let row = 0; row < 3; row++) {
    shapes.push({
      kind: 'rect',
      x: 60,
      y: 30 + row * 56,
      w: 44,
      h: 52,
      rx: 6,
      fill: '#dcfce7',
      stroke: WALL,
    });
    shapes.push({
      kind: 'rect',
      x: 248,
      y: 30 + row * 56,
      w: 22,
      h: 52,
      rx: 4,
      fill: '#e9d5ff',
      stroke: '#7e22ce',
    });
  }
  shapes.push(
    { kind: 'path', d: 'M 62 82 C 40 84 26 86 10 80', fill: 'none', stroke: '#16a34a', width: 8 },
    { kind: 'rect', x: 248, y: 83, w: 22, h: 4, fill: '#dc2626' },
    { kind: 'rect', x: 248, y: 139, w: 22, h: 4, fill: '#dc2626' },
    { kind: 'rect', x: 284, y: 20, w: 40, h: 180, rx: 8, fill: '#bfdbfe', stroke: '#1d4ed8' },
    {
      kind: 'path',
      d: 'M 14 80 L 58 85 L 246 85',
      fill: 'none',
      stroke: '#2563eb',
      width: 2.5,
      dash: '6 4',
    },
    {
      kind: 'path',
      d: 'M 80 112 L 300 112 M 246 86 L 258 112',
      fill: 'none',
      stroke: '#15803d',
      width: 2.5,
    },
    { kind: 'text', x: 180, y: 16, text: 'gian bào (nét đứt), tế bào chất (nét liền)', size: 11 },
  );
  return shapes;
}

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const ROOT_DIAGRAM = {
  id: 'duong-di-trong-re',
  title: 'Đường đi của nước và khoáng từ lông hút vào mạch gỗ',
  width: 360,
  height: 220,
  shapes: rootShapes(),
  parts: [
    {
      id: 'long-hut',
      name: 'Tế bào lông hút',
      accept: ['lông hút'],
      info: 'Nơi nước vào rễ theo thẩm thấu, ion khoáng vào theo cơ chế thụ động hoặc chủ động.',
      x: 30,
      y: 62,
    },
    {
      id: 'gian-bao',
      name: 'Con đường gian bào',
      info: 'Nước đi trong thành tế bào và khoảng trống giữa các tế bào: nhanh, nhưng không được chọn lọc cho đến đai Caspary.',
      x: 133,
      y: 86,
    },
    {
      id: 'te-bao-chat',
      name: 'Con đường tế bào chất',
      info: 'Nước đi từ tế bào này sang tế bào khác qua cầu sinh chất: chậm hơn nhưng được kiểm soát chặt.',
      x: 200,
      y: 112,
    },
    {
      id: 'caspary',
      name: 'Đai Caspary',
      accept: ['vành đai Caspary'],
      info: 'Vòng chất không thấm nước ở thành tế bào nội bì: chặn con đường gian bào, buộc nước và khoáng phải đi qua tế bào chất, nên cây chọn lọc được chất đi vào.',
      x: 259,
      y: 141,
    },
    {
      id: 'noi-bi',
      name: 'Tế bào nội bì',
      accept: ['nội bì'],
      info: 'Lớp tế bào trong cùng của vỏ rễ, ngay trước mạch gỗ; thành của chúng mang đai Caspary.',
      x: 259,
      y: 56,
    },
    {
      id: 'mach-go',
      name: 'Mạch gỗ',
      info: 'Dẫn nước và ion khoáng từ rễ lên thân, lá theo một chiều.',
      x: 304,
      y: 150,
    },
  ],
};
