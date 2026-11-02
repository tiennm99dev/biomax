/**
 * Growth of a bacterial population in batch and continuous culture, and which
 * temperature group each temperature suits. No DOM here, so all of it is tested
 * in Node. The curve is a schematic of the four phases, in whole-number cells
 * per millilitre.
 */
import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';

/** Starting cells per millilitre. */
export const N0 = 1000;
/** Cells per millilitre when growth stops. */
export const N_MAX = 1e9;
/** Hours the stationary phase lasts in batch culture. */
export const STATIONARY_HOURS = 8;
/** Hours for the population to fall tenfold in the death phase. */
export const TENFOLD_DEATH_HOURS = 8;
/** The hours the chart covers. */
export const SPAN_HOURS = 48;

/**
 * @typedef {'tiem-phat' | 'luy-thua' | 'can-bang' | 'suy-vong'} PhaseId
 * @typedef {'khong-lien-tuc' | 'lien-tuc'} CultureMode
 * @typedef {{ g: number, lag: number, mode?: CultureMode }} Culture g in minutes, lag in hours
 */

/** @type {Record<PhaseId, { name: string, color: string, text: string }>} */
export const PHASES = {
  'tiem-phat': {
    name: 'Pha tiềm phát',
    color: '#e0e7ff',
    text: 'Vi khuẩn thích ứng với môi trường, tổng hợp vật chất chuẩn bị phân chia. Số tế bào gần như không đổi.',
  },
  'luy-thua': {
    name: 'Pha luỹ thừa',
    color: '#d1fae5',
    text: 'Vi khuẩn phân chia mạnh mẽ theo tiềm năng, số tế bào tăng theo luỹ thừa và đạt cực đại ở cuối pha.',
  },
  'can-bang': {
    name: 'Pha cân bằng',
    color: '#fef3c7',
    text: 'Số tế bào sinh ra cân bằng với số tế bào chết đi, nên số tế bào gần như không đổi.',
  },
  'suy-vong': {
    name: 'Pha suy vong',
    color: '#fee2e2',
    text: 'Dinh dưỡng cạn kiệt, chất độc hại tích luỹ: số tế bào chết tăng dần, quần thể giảm.',
  },
};

/**
 * Cells after n divisions: N = N0 · 2^n.
 * @param {number} n0 @param {number} n
 */
export const cellsAfter = (n0, n) => n0 * 2 ** n;

/**
 * The hour the exponential phase ends for a culture.
 * @param {Culture} culture
 */
export const exponentialEnd = ({ g, lag }) => lag + (Math.log2(N_MAX / N0) * g) / 60;

/**
 * The phase at hour t.
 * @param {Culture} culture @param {number} t
 * @returns {PhaseId}
 */
export function phaseAt(culture, t) {
  if (t < culture.lag) return 'tiem-phat';
  const end = exponentialEnd(culture);
  if (t < end) return 'luy-thua';
  if (culture.mode === 'lien-tuc' || t < end + STATIONARY_HOURS) return 'can-bang';
  return 'suy-vong';
}

/**
 * Cells per millilitre at hour t.
 * @param {Culture} culture @param {number} t
 */
export function cellsAt(culture, t) {
  const { g, lag } = culture;
  const phase = phaseAt(culture, t);
  if (phase === 'tiem-phat') return N0;
  if (phase === 'luy-thua') return cellsAfter(N0, ((t - lag) * 60) / g);
  if (phase === 'can-bang') return N_MAX;
  const deathStart = exponentialEnd(culture) + STATIONARY_HOURS;
  return N_MAX * 10 ** (-(t - deathStart) / TENFOLD_DEATH_HOURS);
}

/**
 * The divisions counted so far in the exponential phase: n = t / g.
 * @param {Culture} culture @param {number} t
 */
export function divisionsAt(culture, t) {
  const hours = Math.min(t, exponentialEnd(culture)) - culture.lag;
  return Math.max(0, (hours * 60) / culture.g);
}

/**
 * The phase spans inside the chart window, in order.
 * @param {Culture} culture
 * @returns {{ id: PhaseId, from: number, to: number }[]}
 */
export function phaseSpans(culture) {
  const end = exponentialEnd(culture);
  const steady = culture.mode === 'lien-tuc' ? SPAN_HOURS : end + STATIONARY_HOURS;
  /** @type {{ id: PhaseId, from: number, to: number }[]} */
  const spans = [
    { id: 'tiem-phat', from: 0, to: culture.lag },
    { id: 'luy-thua', from: culture.lag, to: end },
    { id: 'can-bang', from: end, to: steady },
    { id: 'suy-vong', from: steady, to: SPAN_HOURS },
  ];
  return spans
    .map((s) => ({ ...s, from: Math.min(s.from, SPAN_HOURS), to: Math.min(s.to, SPAN_HOURS) }))
    .filter((s) => s.to > s.from);
}

/**
 * A count split into a mantissa rounded to one decimal and a power of ten, so a
 * value such as 9,99 · 10^5 is written 1 · 10^6 and never 10 · 10^5.
 * @param {number} n
 */
function scientific(n) {
  const exp = Math.floor(Math.log10(n) + 1e-9);
  const mantissa = tidy(n / 10 ** exp, 1);
  return mantissa >= 10 ? { mantissa: 1, exp: exp + 1 } : { mantissa, exp };
}

/**
 * A count in scientific form for TeX, such as 1,5 · 10^6.
 * @param {number} n
 */
export function sciTex(n) {
  const { mantissa, exp } = scientific(n);
  return `${numTex(mantissa, 1)} \\cdot 10^{${exp}}`;
}

/**
 * A count in words for screen readers.
 * @param {number} n
 */
export function sciText(n) {
  const { mantissa, exp } = scientific(n);
  return `${formatNumber(mantissa, 1)} nhân 10 mũ ${exp}`;
}
/**
 * The temperature groups of the book, in degrees Celsius.
 * @type {{ id: string, name: string, lo: number, hi: number, color: string, where: string }[]}
 */
export const GROUPS = [
  {
    id: 'ua-lanh',
    name: 'Ưa lạnh',
    lo: 0,
    hi: 15,
    color: '#60a5fa',
    where: 'vùng biển sâu, vùng băng giá',
  },
  {
    id: 'ua-am',
    name: 'Ưa ấm',
    lo: 20,
    hi: 40,
    color: '#34d399',
    where: 'đất, nước, cơ thể người và động vật',
  },
  {
    id: 'ua-nhiet',
    name: 'Ưa nhiệt',
    lo: 55,
    hi: 65,
    color: '#fbbf24',
    where: 'đống ủ phân, suối nước nóng',
  },
  {
    id: 'ua-sieu-nhiet',
    name: 'Ưa siêu nhiệt',
    lo: 75,
    hi: 100,
    color: '#f87171',
    where: 'miệng phun thuỷ nhiệt, suối nước rất nóng',
  },
];

/**
 * Which group has a given temperature in its range. Ưa lạnh is below 15 °C in the
 * book, so 15 °C itself belongs to no group.
 * @param {number} t
 */
export function groupAt(t) {
  return GROUPS.find((g) => (g.id === 'ua-lanh' ? t < g.hi : t >= g.lo && t <= g.hi)) ?? null;
}

/** Everyday temperatures to try. */
export const PLACES = [
  { name: 'Tủ lạnh', t: 4, use: 'Thực phẩm để lâu hơn: nhiệt độ thấp kìm hãm vi sinh vật ưa ấm.' },
  {
    name: 'Cơ thể người',
    t: 37,
    use: 'Vi sinh vật ưa ấm, kể cả nhiều loài gây bệnh, sinh trưởng tốt.',
  },
  { name: 'Ủ sữa chua', t: 40, use: 'Vi khuẩn lactic sinh trưởng tốt ở nhiệt độ ấm này.' },
  { name: 'Đống ủ phân', t: 60, use: 'Vi sinh vật ưa nhiệt phân giải chất hữu cơ, toả nhiệt.' },
  {
    name: 'Nước sôi',
    t: 100,
    use: 'Đun sôi diệt phần lớn vi sinh vật, nhờ đó thanh trùng thực phẩm và dụng cụ.',
  },
];
