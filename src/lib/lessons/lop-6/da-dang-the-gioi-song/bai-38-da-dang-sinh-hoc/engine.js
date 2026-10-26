/**
 * Logic for the biodiversity lesson: three environments with their climate,
 * typical organisms and an illustrative species count, the check of a
 * learner's predicted bar heights against those counts, and the cards
 * sorted into actions that harm or protect biodiversity.
 */

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   short: string;
 *   climate: string;
 *   species: number;
 *   organisms: string;
 *   adaptation: string;
 * }} Biome
 */

/**
 * Illustrative numbers of plant species found on a sample plot of the same
 * area (rounded); they show the order of magnitude, not a measurement.
 * @type {Biome[]}
 */
export const BIOMES = [
  {
    id: 'rung-mua',
    name: 'Rừng mưa nhiệt đới',
    short: 'Rừng mưa',
    climate: 'Nóng ẩm quanh năm, mưa rất nhiều.',
    species: 300,
    organisms:
      'Cây gỗ lớn nhiều tầng, dây leo, phong lan, dương xỉ, rêu; khỉ, hổ, rắn, chim, vô số côn trùng.',
    adaptation:
      'Đủ nước, ánh sáng, nhiệt độ quanh năm và có nhiều tầng cây nên có rất nhiều nơi ở, nguồn thức ăn cho nhiều loài.',
  },
  {
    id: 'hoang-mac',
    name: 'Hoang mạc (sa mạc nóng)',
    short: 'Hoang mạc',
    climate: 'Rất khô, mưa rất ít; ngày nóng, đêm lạnh.',
    species: 40,
    organisms: 'Xương rồng, cỏ lạc đà; lạc đà, rắn, thằn lằn, bọ cạp.',
    adaptation:
      'Thiếu nước nên ít loài: xương rồng có lá biến thành gai, thân mọng nước; lạc đà dự trữ mỡ trong bướu, chịu khát giỏi.',
  },
  {
    id: 'doi-lanh',
    name: 'Hoang mạc đới lạnh (vùng cực)',
    short: 'Đới lạnh',
    climate: 'Rất lạnh, mặt đất đóng băng gần như quanh năm, mùa hè ngắn.',
    species: 25,
    organisms: 'Rêu, địa y, cây bụi thấp; gấu trắng, chim cánh cụt, hải cẩu, cáo bắc cực.',
    adaptation:
      'Lạnh giá nên ít loài: gấu trắng có lông dày, lớp mỡ dưới da dày; chim cánh cụt có lớp mỡ và lông rậm giữ nhiệt.',
  },
];

/** @param {string} id */
export function biomeById(id) {
  const b = BIOMES.find((x) => x.id === id);
  if (!b) throw new Error(`unknown biome ${id}`);
  return b;
}

/**
 * Feedback on predicted species counts, given in BIOMES order. The point is
 * the comparison: the rainforest should stand far above both harsh
 * environments (at least twice each of them).
 * @param {number[]} predicted
 * @returns {{ ok: boolean, text: string }}
 */
export function predictionFeedback(predicted) {
  const [rain, desert, cold] = predicted;
  if (rain <= desert || rain <= cold)
    return {
      ok: false,
      text: 'Dự đoán chưa hợp lí: rừng mưa nhiệt đới nóng ẩm quanh năm, nhiều tầng cây, nên có nhiều loài hơn hẳn hoang mạc và đới lạnh. Kéo lại cột rồi kiểm tra.',
    };
  if (rain < 2 * Math.max(desert, cold))
    return {
      ok: false,
      text: 'Đúng hướng: rừng mưa nhiều loài nhất. Nhưng chênh lệch còn lớn hơn nhiều: khí hậu khắc nghiệt (thiếu nước, quá lạnh) khiến chỉ ít loài sống được. Hạ thấp cột hoang mạc và đới lạnh.',
    };
  return {
    ok: true,
    text: 'Dự đoán hợp lí: rừng mưa nhiệt đới có số loài lớn hơn nhiều lần hoang mạc và đới lạnh, nơi khí hậu khắc nghiệt chỉ cho ít loài thích nghi sống được.',
  };
}

/** @typedef {import('#lib/core/card-sorter.js').SortCard} SortCard */
/** @typedef {import('#lib/core/card-sorter.js').SortBin} SortBin */

/** @type {SortBin[]} */
export const ACTION_BINS = [
  { id: 'suy-giam', label: 'Làm suy giảm đa dạng sinh học' },
  { id: 'bao-ve', label: 'Bảo vệ đa dạng sinh học' },
];

/** @type {SortCard[]} */
export const ACTION_CARDS = [
  {
    id: 'pha-rung',
    label: 'Chặt phá rừng, đốt rừng làm nương rẫy',
    bin: 'suy-giam',
    why: 'Mất rừng là mất nơi ở của rất nhiều loài.',
  },
  {
    id: 'san-bat',
    label: 'Săn bắt, buôn bán động vật hoang dã',
    bin: 'suy-giam',
    why: 'Làm giảm số cá thể, nhiều loài có nguy cơ tuyệt chủng.',
  },
  {
    id: 'o-nhiem',
    label: 'Xả rác thải, nước thải chưa xử lí ra sông, biển',
    bin: 'suy-giam',
    why: 'Ô nhiễm môi trường làm chết sinh vật, phá hủy môi trường sống.',
  },
  {
    id: 'khai-thac',
    label: 'Đánh bắt cá bằng mìn, xung điện',
    bin: 'suy-giam',
    why: 'Giết chết cả cá con và nhiều loài khác, khai thác quá mức.',
  },
  {
    id: 'trong-rung',
    label: 'Trồng cây gây rừng, phủ xanh đồi trọc',
    bin: 'bao-ve',
    why: 'Tạo lại môi trường sống cho sinh vật.',
  },
  {
    id: 'bao-ton',
    label: 'Xây dựng khu bảo tồn, vườn quốc gia',
    bin: 'bao-ve',
    why: 'Bảo vệ các loài và nơi sống tự nhiên của chúng.',
  },
  {
    id: 'cam-san',
    label: 'Nghiêm cấm săn bắt, buôn bán động vật quý hiếm',
    bin: 'bao-ve',
    why: 'Giữ lại các loài có nguy cơ tuyệt chủng (ghi trong Sách Đỏ).',
  },
  {
    id: 'tuyen-truyen',
    label: 'Tuyên truyền, giáo dục mọi người bảo vệ thiên nhiên',
    bin: 'bao-ve',
    why: 'Nâng cao ý thức của cộng đồng.',
  },
];
