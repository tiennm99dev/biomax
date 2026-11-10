/**
 * Life cycles laid out on a time line: the stages of one organism from its
 * start (a fertilised egg or a seed) to its first offspring, what grows or
 * changes in each stage, and a log scale that puts very different lifespans
 * (a mosquito, a person, a bristlecone pine) on one ruler. Durations are in
 * days and are typical, rounded values.
 */

import { formatNumber } from '#lib/core/number-format.js';

/** @typedef {'muoi' | 'buom' | 'lua' | 'ga' | 'nguoi'} SpeciesId */

/**
 * @typedef {object} Stage
 * @property {string} name
 * @property {number} from Start, in days from the egg or seed.
 * @property {number} to End, in days.
 * @property {string} what What growth and development happen in it.
 */

/**
 * @typedef {object} Species
 * @property {SpeciesId} id
 * @property {string} name
 * @property {string} start What the cycle starts from.
 * @property {Stage[]} stages From the start to the first reproduction; the
 *   last stage is the reproducing adult.
 * @property {number} lifespan Typical lifespan, in days.
 * @property {string} lifespanText The lifespan as the lesson words it.
 */

const YEAR = 365;

/** @type {Species[]} */
export const SPECIES = [
  {
    id: 'muoi',
    name: 'Muỗi',
    start: 'trứng',
    stages: [
      {
        name: 'Trứng',
        from: 0,
        to: 2,
        what: 'Hợp tử phân chia và phân hoá thành phôi ngay trong trứng đẻ trên mặt nước.',
      },
      {
        name: 'Bọ gậy (ấu trùng)',
        from: 2,
        to: 8,
        what: 'Bọ gậy ăn, lớn nhanh và lột xác nhiều lần: giai đoạn sinh trưởng mạnh, sống trong nước.',
      },
      {
        name: 'Cung quăng (nhộng)',
        from: 8,
        to: 10,
        what: 'Không ăn; cơ thể được tổ chức lại hoàn toàn: phát sinh cánh, chân, vòi của muỗi.',
      },
      {
        name: 'Muỗi trưởng thành',
        from: 10,
        to: 35,
        what: 'Muỗi bay lên khỏi mặt nước, giao phối; muỗi cái hút máu rồi đẻ trứng, bắt đầu vòng đời mới.',
      },
    ],
    lifespan: 35,
    lifespanText: 'khoảng 1 tháng',
  },
  {
    id: 'buom',
    name: 'Bướm cải',
    start: 'trứng',
    stages: [
      {
        name: 'Trứng',
        from: 0,
        to: 5,
        what: 'Phôi phát triển trong trứng đẻ ở mặt dưới lá cải.',
      },
      {
        name: 'Sâu (ấu trùng)',
        from: 5,
        to: 23,
        what: 'Sâu ăn lá rất nhiều, lớn nhanh và lột xác nhiều lần: giai đoạn sinh trưởng chủ yếu, gây hại rau.',
      },
      {
        name: 'Nhộng',
        from: 23,
        to: 32,
        what: 'Nằm yên trong vỏ nhộng; mô của sâu bị phân giải và tổ chức lại thành cơ thể bướm.',
      },
      {
        name: 'Bướm',
        from: 32,
        to: 50,
        what: 'Bướm hút mật, giao phối và đẻ trứng; không còn lớn thêm.',
      },
    ],
    lifespan: 50,
    lifespanText: 'khoảng 50 ngày',
  },
  {
    id: 'lua',
    name: 'Cây lúa',
    start: 'hạt',
    stages: [
      {
        name: 'Nảy mầm, mạ',
        from: 0,
        to: 20,
        what: 'Phôi trong hạt nảy mầm; rễ, thân, lá đầu tiên được hình thành và lớn dần.',
      },
      {
        name: 'Đẻ nhánh',
        from: 20,
        to: 60,
        what: 'Cây tăng chiều cao, ra thêm lá và nhánh: sinh trưởng sinh dưỡng mạnh.',
      },
      {
        name: 'Làm đòng',
        from: 60,
        to: 90,
        what: 'Đỉnh sinh trưởng phân hoá thành bông lúa non (đòng): cây chuyển sang giai đoạn sinh sản.',
      },
      {
        name: 'Trổ bông, chín',
        from: 90,
        to: 120,
        what: 'Lúa trổ bông, nở hoa, thụ phấn; hạt tích luỹ tinh bột và chín. Sau khi chín, cây già và chết.',
      },
    ],
    lifespan: 120,
    lifespanText: 'khoảng 4 tháng',
  },
  {
    id: 'ga',
    name: 'Gà',
    start: 'trứng',
    stages: [
      {
        name: 'Phôi trong trứng',
        from: 0,
        to: 21,
        what: 'Trứng được ấp khoảng 21 ngày; hợp tử phân chia, phân hoá thành các cơ quan của gà con.',
      },
      {
        name: 'Gà con',
        from: 21,
        to: 70,
        what: 'Gà con nở ra đã có hình dạng giống gà trưởng thành; lớn nhanh, thay lông tơ bằng lông vũ.',
      },
      {
        name: 'Gà dò',
        from: 70,
        to: 160,
        what: 'Gà tiếp tục tăng khối lượng; cơ quan sinh dục hoàn thiện dần.',
      },
      {
        name: 'Gà trưởng thành',
        from: 160,
        to: 8 * YEAR,
        what: 'Gà mái bắt đầu đẻ trứng; tốc độ sinh trưởng chậm lại.',
      },
    ],
    lifespan: 8 * YEAR,
    lifespanText: 'khoảng 5 đến 10 năm',
  },
  {
    id: 'nguoi',
    name: 'Người',
    start: 'hợp tử',
    stages: [
      {
        name: 'Phôi thai',
        from: 0,
        to: 266,
        what: 'Khoảng 9 tháng trong tử cung: hợp tử phân chia, phân hoá và hình thành mọi cơ quan.',
      },
      {
        name: 'Trẻ em',
        from: 266,
        to: 266 + 10 * YEAR,
        what: 'Cơ thể lớn nhanh về chiều cao, khối lượng; các cơ quan hoàn thiện dần chức năng.',
      },
      {
        name: 'Dậy thì',
        from: 266 + 10 * YEAR,
        to: 266 + 18 * YEAR,
        what: 'Chiều cao tăng vọt; cơ quan sinh dục trưởng thành, xuất hiện đặc điểm sinh dục phụ.',
      },
      {
        name: 'Trưởng thành, già',
        from: 266 + 18 * YEAR,
        to: 266 + 74 * YEAR,
        what: 'Cơ thể ngừng tăng chiều cao, có khả năng sinh sản; về già các cơ quan suy giảm dần.',
      },
    ],
    lifespan: 266 + 74 * YEAR,
    lifespanText: 'tuổi thọ trung bình ở Việt Nam khoảng 74 năm',
  },
];

/** Organisms shown on the lifespan ruler only. */
export const EXTRA_LIFESPANS = [
  { name: 'Rùa khổng lồ', lifespan: 100 * YEAR, lifespanText: 'trên 100 năm' },
  { name: 'Cây thông đuôi chồn', lifespan: 4800 * YEAR, lifespanText: 'gần 5 000 năm' },
];

/** @param {SpeciesId} id */
export const species = (id) => SPECIES.find((s) => s.id === id) ?? SPECIES[0];

/**
 * The stage at day `t` (clamped to the cycle).
 * @param {Species} s @param {number} t
 */
export function stageAt(s, t) {
  const i = s.stages.findIndex((st) => t < st.to);
  return i < 0 ? s.stages.length - 1 : i;
}

/** End of the cycle drawn on the line, in days. @param {Species} s */
export const cycleEnd = (s) => s.stages[s.stages.length - 1].to;

/**
 * A duration in days written in the unit a reader expects: days up to two
 * months, months up to two years, then years.
 * @param {number} days
 */
export function durationText(days) {
  if (days < 60) return `${formatNumber(Math.round(days))} ngày`;
  if (days < 2 * YEAR) return `${formatNumber(Math.round(days / 30))} tháng`;
  return `${formatNumber(Math.round(days / YEAR))} năm`;
}

/** Ruler from 1 day to 10 000 years, as powers of ten. */
export const LOG_MIN = 0;
export const LOG_MAX = Math.log10(10000 * YEAR);

/**
 * Where a lifespan sits on the log ruler, from 0 to 1.
 * @param {number} days
 */
export function logPosition(days) {
  const v = Math.log10(Math.max(1, days));
  return (v - LOG_MIN) / (LOG_MAX - LOG_MIN);
}

/** Ruler marks: a label at each power-of-ten-ish milestone. */
export const RULER_MARKS = [
  { days: 1, label: '1 ngày' },
  { days: 30, label: '1 tháng' },
  { days: YEAR, label: '1 năm' },
  { days: 10 * YEAR, label: '10 năm' },
  { days: 100 * YEAR, label: '100 năm' },
  { days: 1000 * YEAR, label: `${formatNumber(1000)} năm` },
];

/**
 * How many times longer `a` lives than `b`, rounded to a whole number.
 * @param {number} a @param {number} b
 */
export const timesLonger = (a, b) => Math.round(a / b);

/**
 * The note under the time line at day `t`.
 * @param {Species} s @param {number} t
 */
export function lineNote(s, t) {
  const i = stageAt(s, t);
  const st = s.stages[i];
  const last = i === s.stages.length - 1;
  const firstOffspring = s.stages[s.stages.length - 1].from;
  const tail = last
    ? ` Từ ${s.start} đến khi có thể sinh sản mất khoảng ${durationText(firstOffspring)}: con non của nó lại bắt đầu một vòng đời mới.`
    : '';
  return `${s.name}, ${durationText(t)} tuổi tính từ ${s.start}: giai đoạn ${st.name.toLowerCase()}. ${st.what}${tail}`;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const PROCESS_BINS = [
  { id: 'sinh-truong', label: 'Sinh trưởng' },
  { id: 'phan-hoa', label: 'Phân hoá tế bào' },
  { id: 'hinh-thai', label: 'Phát sinh hình thái' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const PROCESS_CARDS = [
  {
    id: 'ngo-cao',
    label: 'Cây ngô cao thêm $5$ cm sau một tuần',
    bin: 'sinh-truong',
    why: 'Chiều cao tăng do tế bào tăng số lượng và kích thước: đó là sinh trưởng.',
  },
  {
    id: 'lon-nang',
    label: 'Lợn con tăng từ $10$ kg lên $25$ kg',
    bin: 'sinh-truong',
    why: 'Khối lượng cơ thể tăng: dấu hiệu của sinh trưởng.',
  },
  {
    id: 'te-bao-to',
    label: 'Tế bào ở miền dãn dài của rễ dài ra gấp nhiều lần',
    bin: 'sinh-truong',
    why: 'Tế bào tăng kích thước làm rễ dài ra: đó là sinh trưởng.',
  },
  {
    id: 'hong-cau',
    label: 'Tế bào gốc trong tuỷ xương biến đổi thành hồng cầu không nhân',
    bin: 'phan-hoa',
    why: 'Tế bào thay đổi cấu trúc để chuyên hoá chức năng vận chuyển khí: phân hoá tế bào.',
  },
  {
    id: 'mach-go',
    label: 'Tế bào mô phân sinh biến đổi thành tế bào mạch gỗ',
    bin: 'phan-hoa',
    why: 'Tế bào chưa chuyên hoá trở thành tế bào chuyên dẫn nước: phân hoá tế bào.',
  },
  {
    id: 'hoa',
    label: 'Đỉnh chồi của cây cải tạo thành nụ hoa',
    bin: 'hinh-thai',
    why: 'Một cơ quan mới (hoa) được hình thành: phát sinh hình thái.',
  },
  {
    id: 'nong-noc',
    label: 'Nòng nọc mọc chân, tiêu biến đuôi thành ếch con',
    bin: 'hinh-thai',
    why: 'Hình dạng cơ thể và các cơ quan thay đổi: phát sinh hình thái.',
  },
];
