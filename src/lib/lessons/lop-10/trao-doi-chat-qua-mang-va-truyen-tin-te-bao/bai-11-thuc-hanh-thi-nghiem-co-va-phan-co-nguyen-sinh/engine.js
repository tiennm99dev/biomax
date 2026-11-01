/**
 * A plant cell in a salt solution: water follows the difference between the
 * cell sap and the medium, so the protoplast shrinks from the cell wall in a
 * hypertonic medium and refills in a hypotonic one. The wall stops it at full
 * size. Concentrations are in % NaCl, volume is a share of the full size.
 */

/** The cell sap of a full cell, as the NaCl solution of equal strength. */
export const SAP = 1;
export const MAX_SALT = 5;
const WATER_SPEED = 0.08;
/** Closer than this, the volume counts as settled. */
const SETTLED = 0.002;
const SAME_STRENGTH = 0.05;
/** At or below this volume, the protoplast is clearly away from the wall. */
export const SHRUNK_AT = 0.75;
/** At or above this volume after shrinking, the cell counts as refilled. */
export const REFILLED_AT = 0.97;
const STOMA_SHUT_AT = 0.7;

/**
 * Strength of the cell sap at a volume: the same solute in less water.
 * @param {number} volume
 */
export const sapStrength = (volume) => SAP / volume;

/**
 * The volume this medium drives a living cell to.
 * @param {number} salt
 */
export const settledVolume = (salt) => (salt <= SAP ? 1 : SAP / salt);

/**
 * The medium, compared with the sap of a full cell.
 * @param {number} salt
 * @returns {'uu-truong' | 'nhuoc-truong' | 'dang-truong'}
 */
export function tonicity(salt) {
  if (Math.abs(salt - SAP) < SAME_STRENGTH) return 'dang-truong';
  return salt > SAP ? 'uu-truong' : 'nhuoc-truong';
}

/**
 * One time step of the volume. A dead cell has lost its selective membrane,
 * so there is no osmosis and its volume stays as it is.
 * @param {number} volume
 * @param {number} salt
 * @param {number} dt Seconds.
 * @param {boolean} alive
 */
export function stepVolume(volume, salt, dt, alive) {
  if (!alive) return volume;
  const next = volume + WATER_SPEED * (sapStrength(volume) - salt) * dt;
  const target = settledVolume(salt);
  const passed = volume > target ? next < target : next > target;
  return passed ? target : next;
}

/**
 * @param {number} volume
 * @param {number} salt
 * @param {boolean} alive
 */
export function isSettled(volume, salt, alive) {
  return !alive || Math.abs(volume - settledVolume(salt)) < SETTLED;
}

/**
 * How far the stoma stands open, from 0 (shut) to 1: its guard cells lose
 * water with the rest of the leaf.
 * @param {number} volume
 */
export function stomaOpening(volume) {
  return Math.max(0, Math.min(1, (volume - STOMA_SHUT_AT) / (1 - STOMA_SHUT_AT)));
}

/**
 * What the learner has seen so far.
 * @typedef {{ shrunk: boolean, shut: boolean, refilled: boolean }} Seen
 */

/** @type {Seen} */
export const NOTHING_SEEN = { shrunk: false, shut: false, refilled: false };

/**
 * @param {Seen} seen
 * @param {number} volume
 * @returns {Seen}
 */
export function updateSeen(seen, volume) {
  return {
    shrunk: seen.shrunk || volume <= SHRUNK_AT,
    shut: seen.shut || stomaOpening(volume) === 0,
    refilled: seen.refilled || (seen.shrunk && volume >= REFILLED_AT),
  };
}

/**
 * The live sentence under the cell. It holds no numbers, so it changes only
 * when the situation does.
 * @param {number} volume
 * @param {number} salt
 * @param {boolean} alive
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeCell(volume, salt, alive) {
  if (!alive) {
    return {
      tone: 'warn',
      text: 'Tế bào đã chết nên màng mất tính thấm chọn lọc: dung dịch đi qua màng tự do, không có co nguyên sinh hay phản co nguyên sinh.',
    };
  }
  const settled = isSettled(volume, salt, alive);
  const kind = tonicity(salt);
  if (kind === 'dang-truong' && settled) {
    return {
      tone: 'info',
      text: 'Môi trường đẳng trương: nước vào và ra tế bào bằng nhau, nguyên sinh chất không đổi.',
    };
  }
  if (volume > settledVolume(salt)) {
    return {
      tone: 'info',
      text: 'Môi trường ưu trương: nước đi từ không bào ra ngoài, không bào nhỏ lại và nguyên sinh chất tách dần khỏi thành tế bào.',
    };
  }
  if (volume < settledVolume(salt)) {
    return {
      tone: 'ok',
      text: 'Phản co nguyên sinh: môi trường có ít chất tan hơn dịch bào nên nước đi vào, không bào lớn dần.',
    };
  }
  if (kind === 'uu-truong') {
    return {
      tone: 'ok',
      text: 'Co nguyên sinh đã ổn định: dịch bào đã đặc bằng dung dịch bên ngoài. Muốn thấy phản co, hãy nhỏ nước cất.',
    };
  }
  return {
    tone: 'ok',
    text: 'Môi trường nhược trương: tế bào trương nước, nguyên sinh chất áp sát thành tế bào. Thành tế bào giữ cho tế bào không vỡ.',
  };
}
