/**
 * Teaching models for the human reproduction lesson: a menstrual cycle
 * calendar with its phases and relative hormone levels, a labelled diagram
 * of the female reproductive organs, and the cards for sorting contraceptive
 * methods by the principle they rely on.
 *
 * The cycle model follows the book: a cycle lasts 28 to 32 days, menstruation
 * takes the first days of it, and the egg is released about 14 days before
 * the next period, so on day `length − 14`. Hormone levels are relative
 * (0 = lowest, 1 = highest in the cycle), interpolated between key days; they
 * show the shape of the change, not measured values.
 */

export const CYCLE_MIN = 28;
export const CYCLE_MAX = 32;
/** Days of menstruation drawn at the start of every cycle. */
export const MENSES_DAYS = 5;
/** Days between ovulation and the next period. */
export const LUTEAL_DAYS = 14;
/** Days a sperm may stay alive inside the female tract, used for the fertile window. */
export const SPERM_DAYS = 5;

/** @typedef {'kinh-nguyet' | 'nang-trung' | 'rung-trung' | 'the-vang' | 'lam-to'} PhaseId */

/** @type {Record<PhaseId, { name: string, color: string }>} */
export const PHASES = {
  'kinh-nguyet': { name: 'Hành kinh', color: '#f43f5e' },
  'nang-trung': { name: 'Nang trứng phát triển', color: '#f59e0b' },
  'rung-trung': { name: 'Trứng rụng', color: '#7c3aed' },
  'the-vang': { name: 'Thể vàng hoạt động', color: '#38bdf8' },
  'lam-to': { name: 'Phôi làm tổ', color: '#10b981' },
};

/** @param {number} length cycle length in days */
export function ovulationDay(length) {
  return length - LUTEAL_DAYS;
}

/**
 * The phase of a day of the cycle. With `fertilized`, the days from a week
 * after ovulation are the days the embryo settles in the uterine lining.
 * @param {number} day 1 to `length`
 * @param {number} length
 * @param {boolean} [fertilized]
 * @returns {PhaseId}
 */
export function phaseOf(day, length, fertilized = false) {
  const ov = ovulationDay(length);
  if (day <= MENSES_DAYS) return 'kinh-nguyet';
  if (day < ov) return 'nang-trung';
  if (day === ov) return 'rung-trung';
  if (fertilized && day >= ov + 7) return 'lam-to';
  return 'the-vang';
}

/**
 * Whether intercourse on this day could lead to fertilization: sperm live a
 * few days, and the egg can be fertilized for about one day after release.
 * @param {number} day
 * @param {number} length
 */
export function isFertile(day, length) {
  const ov = ovulationDay(length);
  return day >= ov - SPERM_DAYS && day <= ov + 1;
}

/**
 * Linear interpolation through [day, value] key points sorted by day.
 * @param {Array<[number, number]>} points
 * @param {number} day
 */
function through(points, day) {
  if (day <= points[0][0]) return points[0][1];
  for (let i = 1; i < points.length; i++) {
    const [d1, v1] = points[i];
    if (day === d1) return v1;
    if (day < d1) {
      const [d0, v0] = points[i - 1];
      return v0 + ((v1 - v0) * (day - d0)) / (d1 - d0);
    }
  }
  return points[points.length - 1][1];
}

/**
 * Relative levels on a day: estrogen and progesterone in the blood and the
 * thickness of the uterine lining, each from 0 to 1.
 * @param {number} day
 * @param {number} length
 * @param {boolean} [fertilized]
 */
export function levels(day, length, fertilized = false) {
  const ov = ovulationDay(length);
  if (fertilized && day >= ov + 7) return { estrogen: 0.7, progesterone: 1, lining: 1 };
  return {
    estrogen: through(
      [
        [1, 0.15],
        [MENSES_DAYS, 0.2],
        [ov - 1, 1],
        [ov + 1, 0.4],
        [ov + 7, 0.6],
        [length, 0.15],
      ],
      day,
    ),
    progesterone: through(
      [
        [1, 0.08],
        [ov, 0.1],
        [ov + 7, 1],
        [length, 0.1],
      ],
      day,
    ),
    lining: through(
      [
        [1, 0.9],
        [MENSES_DAYS, 0.2],
        [ov, 0.6],
        [ov + 7, 1],
        [length, 0.95],
      ],
      day,
    ),
  };
}

/**
 * What happens in the ovary and the uterus on a day, in one sentence each.
 * @param {number} day
 * @param {number} length
 * @param {boolean} [fertilized]
 */
export function describe(day, length, fertilized = false) {
  const ov = ovulationDay(length);
  const phase = phaseOf(day, length, fertilized);
  switch (phase) {
    case 'kinh-nguyet':
      return {
        ovary: 'Một nang trứng mới bắt đầu phát triển.',
        uterus:
          'Lớp niêm mạc tử cung của chu kì trước bong ra, thoát ra ngoài cùng máu và dịch nhầy.',
        hormone: 'Estrogen và progesterone đều thấp.',
      };
    case 'nang-trung':
      return {
        ovary: 'Nang trứng lớn dần, trứng chín dần trong nang.',
        uterus: 'Niêm mạc tử cung dày lên trở lại.',
        hormone: 'Nang trứng tiết estrogen, estrogen tăng dần.',
      };
    case 'rung-trung':
      return {
        ovary: 'Nang trứng vỡ, trứng chín rụng ra, được phễu ống dẫn trứng hứng lấy.',
        uterus: 'Niêm mạc tử cung đã khá dày.',
        hormone: 'Estrogen vừa đạt mức cao nhất rồi giảm.',
      };
    case 'lam-to':
      return {
        ovary: 'Thể vàng được duy trì, tiếp tục tiết progesterone.',
        uterus: 'Phôi bám và làm tổ trong niêm mạc tử cung: sự thụ thai. Niêm mạc không bong ra.',
        hormone: 'Progesterone giữ ở mức cao.',
      };
    default:
      return {
        ovary: 'Phần còn lại của nang trứng biến thành thể vàng.',
        uterus:
          day >= length - 2
            ? 'Trứng không được thụ tinh: thể vàng teo dần, niêm mạc sắp bong ra.'
            : 'Niêm mạc tử cung dày, xốp, nhiều mạch máu, sẵn sàng đón phôi.',
        hormone:
          day >= ov + 8
            ? 'Thể vàng teo dần nên progesterone giảm.'
            : 'Thể vàng tiết progesterone, progesterone tăng cao.',
      };
  }
}

/**
 * @typedef {{ id: string, prompt: string, length: number, check: (day: number, length: number) => boolean }} CycleTask
 */

/** @type {CycleTask[]} */
export const TASKS = [
  {
    id: 'hanh-kinh',
    prompt: 'Chọn một ngày đang hành kinh.',
    length: 28,
    check: (d, l) => phaseOf(d, l) === 'kinh-nguyet',
  },
  {
    id: 'rung-trung',
    prompt: 'Chọn ngày trứng rụng.',
    length: 30,
    check: (d, l) => d === ovulationDay(l),
  },
  {
    id: 'estrogen-tang',
    prompt: 'Chọn một ngày nang trứng đang phát triển và estrogen đang tăng.',
    length: 32,
    check: (d, l) => phaseOf(d, l) === 'nang-trung',
  },
  {
    id: 'progesterone',
    prompt: 'Chọn một ngày thể vàng tiết nhiều progesterone, niêm mạc tử cung dày nhất.',
    length: 28,
    check: (d, l) => Math.abs(d - (ovulationDay(l) + 7)) <= 1,
  },
  {
    id: 'de-thu-thai',
    prompt: 'Chọn một ngày dễ có thai nếu có tinh trùng gặp trứng.',
    length: 31,
    check: (d, l) => isFertile(d, l),
  },
];

const SKIN = { fill: '#fecdd3', stroke: '#be123c', width: 2 };

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const FEMALE_ORGANS = {
  id: 'co-quan-sinh-duc-nu',
  title: 'Cơ quan sinh dục nữ (nhìn từ phía trước)',
  width: 320,
  height: 290,
  shapes: [
    // oviducts and their funnels
    {
      kind: 'path',
      d: 'M 124 96 Q 84 62 52 96',
      fill: 'none',
      stroke: '#e11d48',
      width: 6,
    },
    {
      kind: 'path',
      d: 'M 196 96 Q 236 62 268 96',
      fill: 'none',
      stroke: '#e11d48',
      width: 6,
    },
    {
      kind: 'path',
      d: 'M 52 96 l -14 -8 M 52 96 l -17 2 M 52 96 l -13 12 M 52 96 l -4 15',
      fill: 'none',
      stroke: '#e11d48',
      width: 3,
    },
    {
      kind: 'path',
      d: 'M 268 96 l 14 -8 M 268 96 l 17 2 M 268 96 l 13 12 M 268 96 l 4 15',
      fill: 'none',
      stroke: '#e11d48',
      width: 3,
    },
    // ovaries with a ripening follicle
    { kind: 'ellipse', cx: 60, cy: 132, rx: 20, ry: 12, fill: '#fde68a', stroke: '#b45309' },
    { kind: 'ellipse', cx: 260, cy: 132, rx: 20, ry: 12, fill: '#fde68a', stroke: '#b45309' },
    { kind: 'circle', cx: 266, cy: 130, r: 4, fill: '#fff7ed', stroke: '#b45309' },
    // uterus wall, lining and cavity
    {
      kind: 'path',
      d: 'M 120 88 Q 160 76 200 88 Q 208 150 174 192 L 146 192 Q 112 150 120 88 Z',
      ...SKIN,
    },
    {
      kind: 'path',
      d: 'M 134 98 Q 160 90 186 98 Q 188 146 166 182 L 154 182 Q 132 146 134 98 Z',
      fill: '#fb7185',
      stroke: '#be123c',
      width: 1,
    },
    {
      kind: 'path',
      d: 'M 144 106 Q 160 101 176 106 Q 175 140 162 172 L 158 172 Q 145 140 144 106 Z',
      fill: '#fff1f2',
      stroke: '#be123c',
      width: 0.8,
    },
    // cervix and vagina
    { kind: 'rect', x: 146, y: 190, w: 28, h: 20, rx: 4, ...SKIN },
    { kind: 'rect', x: 144, y: 210, w: 32, h: 72, rx: 10, ...SKIN },
    { kind: 'rect', x: 154, y: 212, w: 12, h: 70, rx: 5, fill: '#fff1f2', stroke: '#be123c' },
  ],
  parts: [
    {
      id: 'buong-trung',
      name: 'Buồng trứng',
      info: 'Sản sinh trứng; từ tuổi dậy thì, thường mỗi chu kì có một trứng chín và rụng. Tiết hormone sinh dục nữ estrogen và progesterone.',
      x: 260,
      y: 150,
    },
    {
      id: 'pheu',
      name: 'Phễu ống dẫn trứng',
      accept: ['phễu', 'loa vòi trứng'],
      info: 'Phần đầu loe của ống dẫn trứng, có các tua hứng lấy trứng khi trứng rụng ra khỏi buồng trứng.',
      x: 30,
      y: 104,
    },
    {
      id: 'ong-dan-trung',
      name: 'Ống dẫn trứng',
      accept: ['vòi trứng', 'vòi tử cung'],
      info: 'Dẫn trứng về tử cung. Sự thụ tinh thường xảy ra ở đoạn 1/3 phía ngoài của ống dẫn trứng.',
      x: 86,
      y: 66,
    },
    {
      id: 'tu-cung',
      name: 'Tử cung',
      accept: ['dạ con'],
      info: 'Cơ quan rỗng, thành dày nhiều cơ; là nơi phôi làm tổ và phát triển thành thai cho đến khi sinh.',
      x: 210,
      y: 112,
    },
    {
      id: 'niem-mac',
      name: 'Niêm mạc tử cung',
      accept: ['niêm mạc'],
      info: 'Lớp lót trong tử cung, dày lên, xốp và nhiều mạch máu để đón phôi; bong ra gây kinh nguyệt khi trứng không được thụ tinh.',
      x: 160,
      y: 132,
    },
    {
      id: 'co-tu-cung',
      name: 'Cổ tử cung',
      info: 'Phần hẹp nối tử cung với âm đạo.',
      x: 160,
      y: 200,
    },
    {
      id: 'am-dao',
      name: 'Âm đạo',
      info: 'Nơi tiếp nhận tinh trùng; là đường ra của máu kinh và của thai nhi khi sinh.',
      x: 160,
      y: 254,
    },
  ],
};

export const METHOD_BINS = [
  { id: 'ngan-rung', label: 'Ngăn trứng chín và rụng' },
  { id: 'ngan-gap', label: 'Ngăn tinh trùng gặp trứng' },
  { id: 'ngan-lam-to', label: 'Ngăn trứng đã thụ tinh làm tổ' },
];

export const METHOD_CARDS = [
  {
    id: 'thuoc',
    label: 'Uống thuốc tránh thai hằng ngày',
    bin: 'ngan-rung',
    why: 'Hormone trong thuốc tránh thai ức chế trứng chín và rụng.',
  },
  {
    id: 'bao-cao-su',
    label: 'Dùng bao cao su',
    bin: 'ngan-gap',
    why: 'Bao cao su giữ tinh trùng lại, không cho tinh trùng vào âm đạo gặp trứng; còn giúp phòng bệnh lây qua đường sinh dục.',
  },
  {
    id: 'that-ong-tinh',
    label: 'Thắt ống dẫn tinh',
    bin: 'ngan-gap',
    why: 'Ống dẫn tinh bị thắt nên tinh trùng không đi ra ngoài được, không gặp trứng.',
  },
  {
    id: 'that-ong-trung',
    label: 'Thắt ống dẫn trứng',
    bin: 'ngan-gap',
    why: 'Ống dẫn trứng bị thắt nên trứng và tinh trùng không gặp nhau.',
  },
  {
    id: 'tinh-ngay',
    label: 'Tránh quan hệ tình dục vào những ngày gần trứng rụng',
    bin: 'ngan-gap',
    why: 'Không có tinh trùng trong đường sinh dục nữ khi trứng rụng nên trứng không gặp tinh trùng. Cách này kém tin cậy khi chu kì không đều.',
  },
  {
    id: 'vong',
    label: 'Đặt vòng tránh thai (dụng cụ tử cung)',
    bin: 'ngan-lam-to',
    why: 'Vòng tránh thai đặt trong tử cung cản trở trứng đã thụ tinh bám và làm tổ ở niêm mạc tử cung.',
  },
];
