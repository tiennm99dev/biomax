/**
 * Restoring a degraded mangrove (rừng ngập mặn) on abandoned shrimp ponds.
 * The learner picks restoration measures; the model gives the number of
 * species year by year. It is an illustrative model, not field data: the
 * species count moves from its starting value towards a ceiling set by the
 * chosen measures, faster when the forest cover comes back.
 *
 * The ecology it encodes, as in the book:
 * - planted mangroves only thrive where the tide floods them again, so
 *   planting without restoring the water flow does little;
 * - without protection, cutting and destructive fishing keep degrading the
 *   area, so the count falls when nothing is done;
 * - released animals need a habitat to live in;
 * - a fast-growing alien tree crowds out native species.
 */

/**
 * @typedef {'trong-cay' | 'dong-chay' | 'cai-tao' | 'tha-giong' | 'bao-ve' | 'ngoai-lai'} MeasureId
 * @typedef {{ id: MeasureId, name: string, tag: string }} Measure
 */

/** @type {Measure[]} */
export const MEASURES = [
  {
    id: 'trong-cay',
    name: 'Trồng cây ngập mặn bản địa (đước, mắm, bần) đúng vùng triều',
    tag: 'Trồng lại thảm thực vật',
  },
  {
    id: 'dong-chay',
    name: 'Phá bờ đầm tôm bỏ hoang, khơi thông dòng chảy để nước triều ra vào',
    tag: 'Khôi phục môi trường sống',
  },
  {
    id: 'cai-tao',
    name: 'Xử lí nước thải đầm tôm bằng vi sinh vật và thực vật thuỷ sinh',
    tag: 'Cải tạo sinh học',
  },
  {
    id: 'tha-giong',
    name: 'Thả giống cua, sò, cá bản địa',
    tag: 'Gia tăng sinh học',
  },
  {
    id: 'bao-ve',
    name: 'Khoanh vùng bảo vệ, cấm chặt phá và đánh bắt huỷ diệt',
    tag: 'Bảo tồn tại chỗ',
  },
  {
    id: 'ngoai-lai',
    name: 'Trồng thuần một loài cây ngoại lai mọc nhanh',
    tag: 'Cần cân nhắc',
  },
];

/** Species found on the degraded area at year 0. */
export const START = 14;
/** Species of a nearby natural mangrove, the reference the restoration aims at. */
export const NATURAL = 60;
/** Years simulated. */
export const YEARS = 20;

/**
 * The species count the area settles towards, and how fast it gets there.
 * @param {Iterable<MeasureId>} chosen
 * @returns {{ ceiling: number, rate: number }}
 */
export function settings(chosen) {
  const has = new Set(chosen);
  const planted = has.has('trong-cay');
  const flow = has.has('dong-chay');
  let ceiling = START;
  if (planted) ceiling += flow ? 20 : 8;
  if (flow) ceiling += 8;
  if (has.has('cai-tao')) ceiling += 6;
  if (has.has('tha-giong')) ceiling += planted || flow ? 6 : 2;
  ceiling += has.has('bao-ve') ? 4 : -8;
  if (has.has('ngoai-lai')) ceiling -= 5;
  ceiling = Math.max(4, ceiling);
  let rate = 0.1;
  if (planted) rate += flow ? 0.1 : 0.03;
  if (flow) rate += 0.05;
  if (has.has('tha-giong')) rate += 0.03;
  return { ceiling, rate };
}

/**
 * Species count for each year 0..YEARS.
 * @param {Iterable<MeasureId>} chosen
 * @returns {number[]}
 */
export function speciesByYear(chosen) {
  const { ceiling, rate } = settings(chosen);
  const out = [];
  for (let t = 0; t <= YEARS; t++) {
    out.push(Math.round(ceiling + (START - ceiling) * Math.exp(-rate * t)));
  }
  return out;
}

/**
 * Notes on the chosen plan, most important first: each says what goes wrong
 * or what works.
 * @param {Iterable<MeasureId>} chosen
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }[]}
 */
export function planNotes(chosen) {
  const has = new Set(chosen);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }[]} */
  const notes = [];
  if (has.size === 0) {
    return [
      {
        tone: 'warn',
        text: 'Không can thiệp: chặt phá, đánh bắt vẫn tiếp diễn, khu vực tiếp tục suy thoái và số loài giảm dần.',
      },
    ];
  }
  if (has.has('trong-cay') && !has.has('dong-chay')) {
    notes.push({
      tone: 'warn',
      text: 'Nền đầm tôm cao, nước triều không vào được nên cây con chết nhiều. Cần khôi phục chế độ ngập triều thì cây trồng mới sống.',
    });
  }
  if (!has.has('bao-ve')) {
    notes.push({
      tone: 'warn',
      text: 'Chưa có biện pháp bảo vệ: chặt phá, đánh bắt huỷ diệt làm mất dần những gì vừa phục hồi.',
    });
  }
  if (has.has('ngoai-lai')) {
    notes.push({
      tone: 'warn',
      text: 'Loài ngoại lai mọc nhanh có thể lấn át cây bản địa; rừng trồng thuần một loài nghèo loài hơn rừng tự nhiên.',
    });
  }
  if (has.has('tha-giong') && !has.has('trong-cay') && !has.has('dong-chay')) {
    notes.push({
      tone: 'warn',
      text: 'Con giống thả xuống chưa có nơi sống, nơi kiếm ăn phù hợp nên phần lớn không tồn tại được.',
    });
  }
  if (notes.length === 0) {
    notes.push({
      tone: 'ok',
      text: 'Kế hoạch hợp lí: khôi phục môi trường sống, trồng lại cây bản địa và bảo vệ khu vực giúp hệ sinh thái tiến về gần trạng thái tự nhiên.',
    });
  }
  return notes;
}

/**
 * The line read out after the run.
 * @param {Iterable<MeasureId>} chosen
 */
export function summary(chosen) {
  const s = speciesByYear(chosen);
  const none = speciesByYear([]);
  const end = s[YEARS];
  const trend = end > START ? 'tăng' : end < START ? 'giảm' : 'không đổi';
  return `Sau ${YEARS} năm: ${end} loài (lúc đầu ${START} loài, số loài ${trend}). Nếu không can thiệp: ${none[YEARS]} loài. Rừng ngập mặn tự nhiên gần đó có khoảng ${NATURAL} loài.`;
}
