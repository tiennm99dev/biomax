/**
 * A simple SIR model of an outbreak in one community. Everyone is S (còn dễ
 * nhiễm), I (đang mắc và lây bệnh) or R (đã khỏi hoặc không còn lây); people
 * protected by a vaccine before the outbreak are counted apart (V). Each day
 * a sick person passes the disease on to `beta` people times the share of
 * the community still susceptible, and stays infectious for `days` days on
 * average, so one sick person in a fully susceptible community infects
 * R0 = beta · days others. The numbers are teaching values, not the figures
 * of a real disease. No DOM here, so it is tested in Node.
 */
import { tidy } from '#lib/core/number-format.js';

/** People in the simulated community. */
export const POPULATION = 10000;
/** Sick people on day 0. */
export const START_SICK = 10;
/** Days simulated. */
export const HORIZON = 180;
/** Sub-steps per day, so the curve stays smooth and never goes negative. */
const STEPS = 8;

/**
 * @typedef {{ beta: number, days: number, vaccinated?: number, horizon?: number }} Outbreak
 * @typedef {{
 *   s: number[], i: number[], r: number[], vaccinated: number,
 *   peak: number, peakDay: number, total: number, r0: number,
 * }} Run
 */

/**
 * The basic reproduction number R0 = beta · days.
 * @param {number} beta contacts that infect, per sick person per day
 * @param {number} days infectious period
 */
export const reproduction = (beta, days) => tidy(beta * days, 6);

/**
 * The share of the community that must be immune for an outbreak to die out:
 * 1 − 1/R0, or 0 when R0 is at most 1.
 * @param {number} r0
 */
export const herdShare = (r0) => (r0 <= 1 ? 0 : tidy(1 - 1 / r0, 6));

/**
 * Day-by-day S, I and R of one outbreak, with its peak, the day of the peak
 * and how many people fell ill in all (the first sick people included).
 * @param {Outbreak} outbreak
 * @returns {Run}
 */
export function simulate({ beta, days, vaccinated = 0, horizon = HORIZON }) {
  const n = POPULATION;
  const v = Math.round((n - START_SICK) * Math.min(1, Math.max(0, vaccinated)));
  let s = n - START_SICK - v;
  let i = START_SICK;
  let r = 0;
  const gamma = 1 / days;
  const out = { s: [s], i: [i], r: [r] };
  let peak = i;
  let peakDay = 0;
  for (let day = 1; day <= horizon; day++) {
    for (let k = 0; k < STEPS; k++) {
      const caught = Math.min(s, (beta * s * i) / n / STEPS);
      const healed = Math.min(i, (gamma * i) / STEPS);
      s -= caught;
      i += caught - healed;
      r += healed;
    }
    out.s.push(s);
    out.i.push(i);
    out.r.push(r);
    if (i > peak) {
      peak = i;
      peakDay = day;
    }
  }
  return {
    ...out,
    vaccinated: v,
    peak: Math.round(peak),
    peakDay,
    total: Math.round(n - v - s),
    r0: reproduction(beta, days),
  };
}

/**
 * Whether an outbreak grows at first: each sick person infects more than one
 * other while almost everyone not vaccinated can still catch it.
 * @param {number} r0 @param {number} [vaccinated] share vaccinated, 0 to 1
 */
export const spreads = (r0, vaccinated = 0) => tidy(r0 * (1 - vaccinated), 6) > 1;
