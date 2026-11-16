/**
 * A virtual pot experiment with young maize plants. Each pot gets a kind of
 * fertilizer, a dose in grams and a way of applying it; the plants then grow
 * day by day. A single nutrient helps less than a balanced NPK mix, the dose
 * helps up to an optimum and burns the roots well above it, and fertilizer
 * dissolved in the watering acts at once while fertilizer mixed into the soil
 * releases slowly. The design check asks for a fair test: only the factor
 * under study may differ between pots, with a control pot. The rates are
 * teaching values, not measured data.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {'none' | 'N' | 'P' | 'K' | 'NPK'} Kind
 * @typedef {'hoa-tan' | 'tron-dat'} Method
 * @typedef {'loai' | 'cach-bon' | 'ham-luong'} Experiment
 * @typedef {{ kind: Kind, dose: number, method: Method }} Pot
 */

export const DAYS = 21;
export const START_HEIGHT = 10;
export const BASE_GROWTH = 0.6;
export const POTS = 4;
export const MAX_DOSE = 8;
export const OPTIMUM_LOW = 3;
export const OPTIMUM_HIGH = 4;
const BOOST = 1.5;
const BURN_SLOPE = 0.35;
const LEACH_DAY = 14;
const LEACHED = 0.8;
const RELEASE_DAYS = 8;

/** @type {Array<{ value: Kind, label: string }>} */
export const KINDS = [
  { value: 'none', label: 'Không bón' },
  { value: 'N', label: 'Đạm (N)' },
  { value: 'P', label: 'Lân (P)' },
  { value: 'K', label: 'Kali (K)' },
  { value: 'NPK', label: 'NPK' },
];

/** @type {Array<{ value: Method, label: string }>} */
export const METHODS = [
  { value: 'hoa-tan', label: 'Hoà tan vào nước tưới' },
  { value: 'tron-dat', label: 'Trộn vào đất' },
];

/** @type {Array<{ value: Experiment, label: string, factor: keyof Pot, name: string }>} */
export const EXPERIMENTS = [
  { value: 'loai', label: 'Loại phân', factor: 'kind', name: 'loại phân' },
  { value: 'cach-bon', label: 'Cách bón', factor: 'method', name: 'cách bón' },
  { value: 'ham-luong', label: 'Hàm lượng', factor: 'dose', name: 'hàm lượng phân' },
];

/** How much each kind alone helps, against the full NPK mix. @type {Record<Kind, number>} */
export const KIND_SCORE = { none: 0, N: 0.45, P: 0.25, K: 0.2, NPK: 1 };

/** @returns {Pot} */
export const plainPot = () => ({ kind: 'none', dose: 2, method: 'hoa-tan' });

/**
 * The effect of the dose: rising to 1 at the optimum, falling past it and
 * negative (root burn) at a heavy dose.
 * @param {number} dose in grams per pot
 */
export function doseEffect(dose) {
  if (dose <= OPTIMUM_LOW) return tidy(dose / OPTIMUM_LOW, 4);
  if (dose <= OPTIMUM_HIGH) return 1;
  return tidy(1 - (dose - OPTIMUM_HIGH) * BURN_SLOPE, 4);
}

/** @param {Pot} pot */
export function response(pot) {
  if (pot.kind === 'none' || pot.dose === 0) return 0;
  return tidy(KIND_SCORE[pot.kind] * doseEffect(pot.dose), 4);
}

/**
 * The share of the fertilizer the roots can reach on a given day.
 * @param {Method} method @param {number} day from 1
 */
export function availability(method, day) {
  if (method === 'hoa-tan') return day <= LEACH_DAY ? 1 : LEACHED;
  return Math.min(1, day / RELEASE_DAYS);
}

/**
 * The plant's height on every day from 0 to DAYS.
 * @param {Pot} pot @returns {number[]}
 */
export function heights(pot) {
  const r = response(pot);
  const out = [START_HEIGHT];
  let h = START_HEIGHT;
  for (let day = 1; day <= DAYS; day += 1) {
    const grow = BASE_GROWTH * Math.max(0.05, 1 + BOOST * r * availability(pot.method, day));
    h = tidy(h + grow, 3);
    out.push(h);
  }
  return out;
}

/** @param {Pot} pot */
export const burnt = (pot) => pot.kind !== 'none' && response(pot) < 0;

/** @param {Pot} pot */
export const isControl = (pot) => pot.kind === 'none' || pot.dose === 0;

/**
 * A pot's value of a factor as the experiment sees it: a control pot counts
 * as kind "none" and dose 0 whatever its settings say.
 * @param {Pot} pot @param {keyof Pot} factor
 */
function valueOf(pot, factor) {
  if (!isControl(pot)) return pot[factor];
  return factor === 'kind' ? 'none' : factor === 'dose' ? 0 : pot.method;
}

/**
 * Whether the pots make a fair test of the chosen factor: the other factors
 * stay the same in every fertilized pot, the studied one differs, and there
 * is a control pot when the kind or the dose is studied.
 * @param {Experiment} exp @param {Pot[]} pots
 * @returns {{ ok: boolean, text: string }}
 */
export function checkDesign(exp, pots) {
  const study = EXPERIMENTS.find((e) => e.value === exp) ?? EXPERIMENTS[0];
  const fertilized = pots.filter((p) => !isControl(p));
  const varies = (/** @type {keyof Pot} */ f, /** @type {Pot[]} */ list) =>
    new Set(list.map((p) => valueOf(p, f))).size > 1;
  for (const o of EXPERIMENTS.filter((e) => e.value !== exp)) {
    if (varies(o.factor, fertilized)) {
      return {
        ok: false,
        text: `Các chậu đang khác nhau cả về ${o.name}. Chỉ được thay đổi ${study.name}; nếu không, ta không biết cây khác nhau là do yếu tố nào.`,
      };
    }
  }
  if (exp === 'cach-bon') {
    if (!varies('method', fertilized)) {
      return {
        ok: false,
        text: 'Cần ít nhất hai chậu có bón cùng loại, cùng lượng phân nhưng theo hai cách bón khác nhau.',
      };
    }
    return { ok: true, text: 'Bố trí hợp lí: các chậu bón phân chỉ khác nhau về cách bón.' };
  }
  if (!pots.some(isControl)) {
    return { ok: false, text: 'Cần ít nhất một chậu đối chứng không bón phân để so sánh.' };
  }
  if (!varies(study.factor, pots)) {
    return {
      ok: false,
      text: `Các chậu chưa khác nhau về ${study.name}, nên chưa so sánh được gì.`,
    };
  }
  return { ok: true, text: `Bố trí hợp lí: các chậu chỉ khác nhau về ${study.name}.` };
}

/** @param {Pot} pot */
export function potName(pot) {
  if (isControl(pot)) return 'đối chứng (không bón)';
  const kind = KINDS.find((k) => k.value === pot.kind)?.label ?? '';
  const method = pot.method === 'hoa-tan' ? 'hoà tan' : 'trộn đất';
  return `${kind}, ${formatNumber(pot.dose)} g, ${method}`;
}

/**
 * The conclusion after the experiment ran.
 * @param {Experiment} exp @param {Pot[]} pots
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function conclusion(exp, pots) {
  const finals = pots.map((p) => heights(p)[DAYS]);
  const best = finals.indexOf(Math.max(...finals));
  const control = pots.findIndex(isControl);
  const cm = (/** @type {number} */ v) => `${formatNumber(v, 1)} cm`;
  const parts = [
    `Sau ${DAYS} ngày, chậu ${best + 1} (${potName(pots[best])}) cao nhất: ${cm(finals[best])}.`,
  ];
  if (control >= 0) {
    parts.push(`Chậu đối chứng cao ${cm(finals[control])}.`);
  }
  const hurt = pots.map((p, i) => (burnt(p) ? i + 1 : 0)).filter(Boolean);
  if (hurt.length > 0) {
    parts.push(
      `Chậu ${hurt.join(', ')} bị cháy phân: bón quá nhiều, rễ khó hút nước nên cây còi, lá cháy.`,
    );
  }
  if (exp === 'loai') parts.push('Bón đủ và cân đối N, P, K cho kết quả tốt hơn bón một loại.');
  if (exp === 'cach-bon') {
    parts.push(
      'Phân hoà tan tác dụng nhanh; phân trộn vào đất tan chậm nên những ngày đầu cây lớn chậm hơn.',
    );
  }
  if (exp === 'ham-luong')
    parts.push('Bón quá ít cây chậm lớn, bón quá nhiều gây hại: cần bón đúng liều lượng.');
  return { tone: hurt.length > 0 ? 'warn' : 'ok', text: parts.join(' ') };
}
