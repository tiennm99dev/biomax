/**
 * A day-by-day model of a lettuce bed in a recirculating hydroponic system.
 * Each day the tank loses water, so the nutrient concentration (ppm) creeps
 * up; the pH rises slowly while the air pump runs and drops when the roots
 * lack oxygen. The plant grows fastest when pH, concentration, oxygen and
 * water level are all in range, and the worst factor is named in the daily
 * report. The ranges are reference values for leafy greens and the rates are
 * teaching values, not a grower's table.
 */
import { formatFixed, formatNumber, tidy } from '#lib/core/number-format.js';

export const TANK = 20;
export const PH_LOW = 5.5;
export const PH_HIGH = 6.5;
export const PPM_LOW = 600;
export const PPM_HIGH = 1000;
export const LOW_LEVEL = 5;
export const HARVEST = 25;
export const DAILY_GROWTH = 1;

const WATER_USE = 1;
const UPTAKE = 0.03;
const PH_DRIFT_AIR = 0.1;
const PH_DRIFT_STILL = -0.2;
const STOCK = 3000;
const ADD_WATER = 2;
const PH_STEP = 0.3;

/**
 * @typedef {{ day: number, level: number, ppm: number, ph: number, air: boolean, height: number, heights: number[] }} Bed
 * @typedef {'nuoc' | 'dinh-duong' | 'ha-ph' | 'tang-ph' | 'suc-khi'} Action
 */

/** @returns {Bed} */
export function freshBed() {
  return { day: 0, level: TANK, ppm: 500, ph: 7, air: true, height: 3, heights: [3] };
}

/** @param {number} ppm */
export function ppmFactor(ppm) {
  if (ppm < 400) return 0.3;
  if (ppm < PPM_LOW) return 0.7;
  if (ppm <= PPM_HIGH) return 1;
  if (ppm <= 1400) return 0.6;
  return 0.1;
}

/** @param {number} ph */
export function phFactor(ph) {
  if (ph >= PH_LOW && ph <= PH_HIGH) return 1;
  if (ph >= 5 && ph <= 7) return 0.6;
  return 0.2;
}

/** @param {Bed} bed */
export function growthFactor(bed) {
  const air = bed.air ? 1 : 0.5;
  const water = bed.level >= LOW_LEVEL ? 1 : 0.3;
  return tidy(ppmFactor(bed.ppm) * phFactor(bed.ph) * air * water, 4);
}

/**
 * One action of the grower; the day does not pass.
 * @param {Bed} bed @param {Action} action @returns {Bed}
 */
export function act(bed, action) {
  switch (action) {
    case 'nuoc': {
      const level = Math.min(TANK, bed.level + ADD_WATER);
      return { ...bed, level, ppm: tidy((bed.ppm * bed.level) / level, 1) };
    }
    case 'dinh-duong':
      return { ...bed, ppm: tidy(bed.ppm + STOCK / bed.level, 1) };
    case 'ha-ph':
      return { ...bed, ph: tidy(bed.ph - PH_STEP, 2) };
    case 'tang-ph':
      return { ...bed, ph: tidy(bed.ph + PH_STEP, 2) };
    case 'suc-khi':
      return { ...bed, air: !bed.air };
  }
}

/**
 * One day passes: the plant grows by today's conditions, then the tank loses
 * water and the pH drifts.
 * @param {Bed} bed @returns {Bed}
 */
export function nextDay(bed) {
  const height = tidy(bed.height + DAILY_GROWTH * growthFactor(bed), 2);
  const level = Math.max(1, bed.level - WATER_USE);
  const ppm = tidy(((bed.ppm * bed.level) / level) * (1 - UPTAKE), 1);
  const ph = tidy(bed.ph + (bed.air ? PH_DRIFT_AIR : PH_DRIFT_STILL), 2);
  return { ...bed, day: bed.day + 1, level, ppm, ph, height, heights: [...bed.heights, height] };
}

/**
 * The grower's report on the bed: the worst problem first.
 * @param {Bed} bed @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function diagnose(bed) {
  if (bed.height >= HARVEST) {
    return {
      tone: 'ok',
      text: `Ngày ${bed.day}: cây cao ${formatNumber(bed.height, 1)} cm, đã đến lúc thu hoạch. Sau mỗi lứa rau nên thay dung dịch mới.`,
    };
  }
  if (bed.ppm > 1400) {
    return {
      tone: 'warn',
      text: `Dung dịch quá đặc (${formatNumber(Math.round(bed.ppm))} ppm): rễ khó hút nước, cây héo, cháy lá. Thêm nước để pha loãng.`,
    };
  }
  if (bed.level < LOW_LEVEL) {
    return { tone: 'warn', text: 'Bể sắp cạn: rễ không chạm dung dịch. Thêm nước.' };
  }
  if (!bed.air) {
    return {
      tone: 'warn',
      text: 'Máy sục khí đang tắt: rễ thiếu oxygen để hô hấp, dễ thối, rễ nhớt; dung dịch đứng yên còn bị acid hoá.',
    };
  }
  if (phFactor(bed.ph) < 1) {
    const high = bed.ph > PH_HIGH;
    return {
      tone: 'warn',
      text: `pH bằng ${formatFixed(bed.ph, 1)}, ${high ? 'quá cao' : 'quá thấp'}: cây khó hấp thụ một số chất khoáng, lá vàng. ${high ? 'Thêm dung dịch hạ pH.' : 'Thêm dung dịch tăng pH.'}`,
    };
  }
  if (bed.ppm < PPM_LOW) {
    return {
      tone: 'warn',
      text: `Dung dịch quá loãng (${formatNumber(Math.round(bed.ppm))} ppm): cây thiếu khoáng, chậm lớn. Thêm dung dịch dinh dưỡng.`,
    };
  }
  if (bed.ppm > PPM_HIGH) {
    return {
      tone: 'warn',
      text: `Dung dịch hơi đặc (${formatNumber(Math.round(bed.ppm))} ppm). Thêm nước để đưa về ${formatNumber(PPM_LOW)}–${formatNumber(PPM_HIGH)} ppm.`,
    };
  }
  return {
    tone: 'ok',
    text: `Ngày ${bed.day}: mọi chỉ số đều phù hợp, cây lớn tốt (cao ${formatNumber(bed.height, 1)} cm).`,
  };
}
