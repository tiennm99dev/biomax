/**
 * Time-lapse frames of a frog's life cycle and the labelling task: each
 * frame shows one stage; the learner names it and gets told which visible
 * feature gives it away.
 */

import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {object} FrogStage
 * @property {string} id
 * @property {string} name
 * @property {string} cue What can be seen in the frame.
 * @property {number} tail Tail length, 0 to 1.
 * @property {boolean} gills External gills.
 * @property {boolean} hind Hind legs.
 * @property {boolean} fore Front legs.
 * @property {boolean} frog Frog-shaped body.
 * @property {number} size Drawing scale.
 */

/** @type {FrogStage[]} */
export const FROG_STAGES = [
  {
    id: 'trung',
    name: 'Trứng',
    cue: 'ổ trứng tròn, mỗi trứng có phôi màu đen nằm trong lớp màng nhầy trong suốt',
    tail: 0,
    gills: false,
    hind: false,
    fore: false,
    frog: false,
    size: 1,
  },
  {
    id: 'moi-no',
    name: 'Nòng nọc mới nở',
    cue: 'nòng nọc rất nhỏ bám vào rong, hai bên đầu có mang ngoài dạng tua',
    tail: 0.6,
    gills: true,
    hind: false,
    fore: false,
    frog: false,
    size: 0.6,
  },
  {
    id: 'nong-noc',
    name: 'Nòng nọc',
    cue: 'đầu tròn to, đuôi dài để bơi, chưa có chân, mang ngoài đã được che kín (mang trong)',
    tail: 1,
    gills: false,
    hind: false,
    fore: false,
    frog: false,
    size: 0.85,
  },
  {
    id: 'chan-sau',
    name: 'Nòng nọc mọc chân sau',
    cue: 'hai chân sau mọc ra ở gốc đuôi, chưa có chân trước',
    tail: 1,
    gills: false,
    hind: true,
    fore: false,
    frog: false,
    size: 1,
  },
  {
    id: 'bon-chan',
    name: 'Nòng nọc có bốn chân',
    cue: 'đã có cả chân trước và chân sau, đuôi vẫn dài; bắt đầu ngoi lên mặt nước thở bằng phổi',
    tail: 0.9,
    gills: false,
    hind: true,
    fore: true,
    frog: false,
    size: 1.05,
  },
  {
    id: 'ech-con',
    name: 'Ếch con',
    cue: 'hình dạng đã giống ếch nhưng còn mẩu đuôi ngắn đang tiêu biến; lên bờ',
    tail: 0.3,
    gills: false,
    hind: true,
    fore: true,
    frog: true,
    size: 0.8,
  },
  {
    id: 'ech',
    name: 'Ếch trưởng thành',
    cue: 'không còn đuôi, chân sau dài khoẻ để nhảy, sống trên cạn và dưới nước, sinh sản',
    tail: 0,
    gills: false,
    hind: true,
    fore: true,
    frog: true,
    size: 1.15,
  },
];

/**
 * Feedback for naming frame `frame` as stage `chosen`.
 * @param {number} frame @param {string} chosen
 * @returns {{ ok: boolean, text: string }}
 */
export function labelFeedback(frame, chosen) {
  const st = FROG_STAGES[frame];
  if (st.id === chosen) {
    return { ok: true, text: `Đúng, khung ${frame + 1} là ${st.name.toLowerCase()}: ${st.cue}.` };
  }
  const pick = FROG_STAGES.find((s) => s.id === chosen);
  const theirs = pick ? ` Đặc điểm của ${pick.name.toLowerCase()}: ${pick.cue}.` : '';
  return {
    ok: false,
    text: `Chưa đúng. Quan sát kĩ khung ${frame + 1}.${theirs}`,
  };
}

/**
 * How many frames are labelled right.
 * @param {Record<number, string>} labels frame index → chosen stage id
 */
export function score(labels) {
  return FROG_STAGES.filter((s, i) => labels[i] === s.id).length;
}

/**
 * A fixed, mixed order for the label chips, the same for every visitor.
 * @param {number} seed
 */
export function chipOrder(seed) {
  return shuffle(
    rng(seed),
    FROG_STAGES.map((s) => s.id),
  );
}
