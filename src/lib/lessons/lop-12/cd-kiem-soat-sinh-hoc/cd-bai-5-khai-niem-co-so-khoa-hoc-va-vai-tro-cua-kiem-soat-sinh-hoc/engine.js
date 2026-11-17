/**
 * A simple field model of a pest and its natural enemy, day by day. The pest
 * grows logistically up to the carrying capacity of the field; the enemy eats
 * pests in proportion to how often the two meet, turns part of what it eats
 * into offspring, and dies at a fixed rate plus a crowding term. Released
 * enemies keep the pest near a low balance (khống chế sinh học); a chemical
 * spray kills pests and enemies alike, so the pest bounces back.
 * No DOM here, so all of it is tested in Node.
 */
import { formatNumber } from '#lib/core/number-format.js';

/** The model's rates, per day. */
export const RATES = {
  /** intrinsic growth rate of the pest */
  r: 0.2,
  /** carrying capacity of the field for the pest, con/m² */
  K: 100,
  /** attack rate: share of meetings that end with a pest eaten */
  a: 0.02,
  /** pests eaten turned into new enemies */
  b: 0.5,
  /** death rate of the enemy */
  m: 0.05,
  /** crowding among enemies */
  q: 0.01,
};

/** Pest density at day 0, con/m². */
export const START_PEST = 5;
/** Pest density above which the crop loses yield worth more than control costs. */
export const THRESHOLD = 30;
/** Days simulated. */
export const DAYS = 120;
/** Share of pests and of enemies a chemical spray kills. */
export const SPRAY_KILL = 0.9;

/**
 * @typedef {{ release: number, releaseDay: number, spray: boolean, sprayDay: number }} Plan
 * @typedef {{ pest: number[], enemy: number[] }} Run
 */

/**
 * One day of the model.
 * @param {number} pest @param {number} enemy
 * @returns {[number, number]}
 */
export function step(pest, enemy) {
  const { r, K, a, b, m, q } = RATES;
  const eaten = a * pest * enemy;
  const nextPest = pest + r * pest * (1 - pest / K) - eaten;
  const nextEnemy = enemy + b * eaten - m * enemy - q * enemy * enemy;
  return [Math.max(0, nextPest), Math.max(0, nextEnemy)];
}

/**
 * The pest and enemy densities on every day from 0 to DAYS. Enemies are
 * released at the start of `releaseDay`, a spray falls at the start of
 * `sprayDay`.
 * @param {Plan} plan
 * @returns {Run}
 */
export function simulate(plan) {
  let pest = START_PEST;
  let enemy = 0;
  /** @type {Run} */
  const run = { pest: [], enemy: [] };
  for (let day = 0; day <= DAYS; day++) {
    if (plan.release > 0 && day === plan.releaseDay) enemy += plan.release;
    if (plan.spray && day === plan.sprayDay) {
      pest *= 1 - SPRAY_KILL;
      enemy *= 1 - SPRAY_KILL;
    }
    run.pest.push(pest);
    run.enemy.push(enemy);
    [pest, enemy] = step(pest, enemy);
  }
  return run;
}

/**
 * The balance the two species settle at when both are present:
 * where neither density changes from one day to the next.
 * Solved by iterating the model itself far enough.
 * @returns {{ pest: number, enemy: number }}
 */
export function balance() {
  let pest = START_PEST;
  let enemy = 5;
  for (let i = 0; i < 5000; i++) [pest, enemy] = step(pest, enemy);
  return { pest, enemy };
}

/**
 * Days on which the pest is above the threshold.
 * @param {number[]} pest
 */
export function daysAbove(pest) {
  return pest.filter((p) => p > THRESHOLD).length;
}

/**
 * The highest pest density from `from` on.
 * @param {number[]} pest @param {number} from
 */
export function peakFrom(pest, from) {
  return Math.max(...pest.slice(from));
}

/**
 * A density written the book's way, to whole numbers when large.
 * @param {number} v
 */
export function densityText(v) {
  return `${formatNumber(v, v < 10 ? 1 : 0)} con/m²`;
}

/**
 * What the run shows, in one or two sentences.
 * @param {Plan} plan @param {Run} run
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function verdict(plan, run) {
  const end = run.pest[DAYS];
  const released = plan.release > 0;
  const enemiesLeft = run.enemy[DAYS] > 1;
  if (plan.spray && !released) {
    return {
      tone: 'warn',
      text: `Thuốc diệt $90\\%$ số sâu nhưng số còn lại sinh sản nhanh: sâu tăng trở lại tới ${densityText(peakFrom(run.pest, plan.sprayDay + 1))}. Không có thiên địch nên lại phải phun thuốc.`,
    };
  }
  if (plan.spray && plan.sprayDay >= plan.releaseDay) {
    const after = peakFrom(run.pest, plan.sprayDay + 1);
    if (after > THRESHOLD) {
      return {
        tone: 'warn',
        text: `Thuốc giết cả thiên địch. Sâu hồi phục nhanh hơn thiên địch nên bùng phát trở lại tới ${densityText(after)}, vượt ngưỡng gây hại, rồi mới bị kìm lại.`,
      };
    }
  }
  if (!released) {
    return {
      tone: 'warn',
      text: `Không có thiên địch, sâu hại tăng gần tới sức chứa của ruộng (${densityText(end)}) và ${daysAbove(run.pest)} ngày vượt ngưỡng gây hại.`,
    };
  }
  if (!enemiesLeft) {
    return {
      tone: 'warn',
      text: `Thiên địch không duy trì được, sâu hại tăng lại tới ${densityText(end)}.`,
    };
  }
  const late = run.pest.slice(plan.releaseDay).some((p) => p > THRESHOLD);
  return {
    tone: 'ok',
    text: late
      ? `Thả thiên địch khi sâu đã đông nên vẫn có ngày vượt ngưỡng, nhưng sau đó sâu bị kìm quanh ${densityText(end)}: đó là khống chế sinh học.`
      : `Sâu hại bị thiên địch kìm quanh ${densityText(end)}, dưới ngưỡng gây hại: đó là khống chế sinh học. Sâu không bị diệt hết, cả hai loài cùng tồn tại.`,
  };
}
