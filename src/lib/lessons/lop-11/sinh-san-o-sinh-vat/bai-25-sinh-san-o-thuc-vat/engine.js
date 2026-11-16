/**
 * Double fertilisation in a flowering plant, step by step: pollination, the
 * pollen tube growing down the style, the two sperm cells entering the
 * embryo sac through the micropyle, the learner sending each sperm to a
 * cell of the embryo sac, and what each fused cell becomes in the seed.
 * Also the cards of vegetative reproduction, sorted by the organ that
 * gives the new plant.
 */

/** @typedef {'trung' | 'trung-tam' | 'kem' | 'doi-cuc'} Target */

/**
 * Cells of the mature embryo sac a sperm may fuse with, with their number
 * of chromosome sets.
 * @type {Record<Target, { name: string, sets: number, count: number }>}
 */
export const CELLS = {
  trung: { name: 'tế bào trứng', sets: 1, count: 1 },
  'trung-tam': { name: 'tế bào trung tâm (2 nhân cực)', sets: 2, count: 1 },
  kem: { name: 'tế bào kèm', sets: 1, count: 2 },
  'doi-cuc': { name: 'tế bào đối cực', sets: 1, count: 3 },
};

/** Nuclei in a mature embryo sac: the survivor megaspore divides three times. */
export const SAC_NUCLEI = 2 ** 3;

/** @type {{ title: string, text: string }[]} */
export const STEPS = [
  {
    title: 'Thụ phấn',
    text: 'Hạt phấn (gồm tế bào ống phấn và tế bào sinh sản) rơi trên núm nhuỵ cùng loài.',
  },
  {
    title: 'Ống phấn mọc',
    text: 'Hạt phấn nảy mầm thành ống phấn, mọc dài theo vòi nhuỵ về phía bầu nhuỵ. Tế bào sinh sản nguyên phân tạo hai giao tử đực (tinh tử, $n$).',
  },
  {
    title: 'Vào túi phôi',
    text: 'Ống phấn xuyên qua lỗ noãn vào túi phôi và giải phóng hai giao tử đực.',
  },
  {
    title: 'Thụ tinh kép',
    text: 'Chọn tế bào mà mỗi giao tử đực kết hợp.',
  },
  {
    title: 'Hình thành hạt và quả',
    text: 'Hợp tử ($2n$) phát triển thành phôi; nhân tam bội ($3n$) phát triển thành nội nhũ; noãn đã thụ tinh thành hạt, bầu nhuỵ thành quả.',
  },
];

/** The fertilisation step, where the learner sends the sperm. */
export const FUSE_STEP = 3;

/**
 * The chromosome sets of the cell made when a sperm (n) fuses with a target.
 * @param {Target} target
 */
export function fuse(target) {
  return CELLS[target].sets + 1;
}

/**
 * Feedback once both sperm have a target.
 * @param {Target | null} first @param {Target | null} second
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(first, second) {
  if (!first || !second) {
    return { ok: false, text: 'Chọn nơi đến cho cả hai giao tử đực.' };
  }
  const pair = [first, second].sort().join('+');
  if (pair === 'trung+trung-tam') {
    return {
      ok: true,
      text: 'Đúng: một giao tử đực ($n$) + trứng ($n$) → hợp tử ($2n$); giao tử đực còn lại ($n$) + tế bào trung tâm có 2 nhân cực ($2n$) → nhân tam bội ($3n$). Cả hai giao tử đực đều tham gia thụ tinh nên gọi là thụ tinh kép.',
    };
  }
  if (first === second) {
    return {
      ok: false,
      text: `Hai giao tử đực không cùng kết hợp với ${CELLS[first].name}. Mỗi giao tử đực thụ tinh với một tế bào khác nhau.`,
    };
  }
  const wrong = [first, second].find((t) => t === 'kem' || t === 'doi-cuc');
  if (wrong) {
    return {
      ok: false,
      text: `${CELLS[wrong].name[0].toUpperCase()}${CELLS[wrong].name.slice(1)} không tham gia thụ tinh; nó sẽ tiêu biến. Hãy tìm hai tế bào tạo ra phôi và nội nhũ.`,
    };
  }
  return { ok: false, text: 'Chưa đúng, hãy thử lại.' };
}

/** @type {{ id: string, label: string }[]} */
export const ORGAN_BINS = [
  { id: 're', label: 'Rễ' },
  { id: 'than', label: 'Thân' },
  { id: 'la', label: 'Lá' },
  { id: 'bao-tu', label: 'Bào tử' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const ORGAN_CARDS = [
  {
    id: 'khoai-lang',
    label: 'Khoai lang mọc cây từ củ',
    bin: 're',
    why: 'Củ khoai lang là rễ củ phình to chứa chất dự trữ.',
  },
  {
    id: 'khoai-tay',
    label: 'Khoai tây mọc cây từ củ',
    bin: 'than',
    why: 'Củ khoai tây là thân củ: trên củ có mắt (chồi).',
  },
  {
    id: 'gung',
    label: 'Gừng mọc cây từ củ',
    bin: 'than',
    why: 'Củ gừng là thân rễ, có đốt, chồi mọc dưới đất.',
  },
  {
    id: 'rau-ma',
    label: 'Rau má mọc cây mới từ các đốt',
    bin: 'than',
    why: 'Rau má có thân bò; mỗi đốt chạm đất ra rễ thành cây mới.',
  },
  {
    id: 'hanh',
    label: 'Hành mọc cây từ củ hành',
    bin: 'than',
    why: 'Củ hành là thân hành.',
  },
  {
    id: 'thuoc-bong',
    label: 'Thuốc bỏng mọc cây con ở mép lá',
    bin: 'la',
    why: 'Các chồi con mọc ra từ mép lá thuốc bỏng.',
  },
  {
    id: 'duong-xi',
    label: 'Dương xỉ mọc cây mới',
    bin: 'bao-tu',
    why: 'Dương xỉ tạo bào tử đơn bội trong túi bào tử ở mặt dưới lá.',
  },
  {
    id: 'reu',
    label: 'Rêu mọc cây mới',
    bin: 'bao-tu',
    why: 'Bào tử rêu ($n$) nảy mầm, nguyên phân nhiều lần thành cây rêu.',
  },
];
