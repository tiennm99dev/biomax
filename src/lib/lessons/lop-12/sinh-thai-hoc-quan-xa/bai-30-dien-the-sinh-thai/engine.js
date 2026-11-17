/**
 * Ecological succession (diễn thế sinh thái) stage by stage. Each stage
 * lists the plant forms present (drawn by the widget), the soil depth and
 * three community measures on a 0..10 scale: number of species, biomass
 * and the complexity of the food web. The values are illustrative: they
 * show the direction of change, not field data.
 *
 * - Primary succession (nguyên sinh) starts on bare ground with no life
 *   (rock after a lava flow) and builds soil from the pioneer lichens on.
 * - Secondary succession (thứ sinh) starts where a community has been
 *   destroyed but soil and seeds remain; it may recover to a stable forest
 *   or, under continued disturbance, degrade (the lim forest of Hữu Lũng).
 */

/** @typedef {'lichen' | 'moss' | 'grass' | 'shrub' | 'smallTree' | 'bigTree'} Form */
/**
 * @typedef {{
 *   name: string,
 *   forms: Form[],
 *   soil: number,
 *   species: number,
 *   biomass: number,
 *   web: number,
 *   text: string,
 * }} Stage
 */
/** @typedef {'nguyen-sinh' | 'thu-sinh' | 'suy-thoai'} Kind */

/** @type {Record<Kind, { title: string, stages: Stage[] }>} */
export const SUCCESSIONS = {
  'nguyen-sinh': {
    title: 'Diễn thế nguyên sinh',
    stages: [
      {
        name: 'Môi trường trống trơn',
        forms: [],
        soil: 0,
        species: 0,
        biomass: 0,
        web: 0,
        text: 'Khởi đầu từ môi trường chưa có sinh vật: đá trần sau khi dung nham núi lửa nguội, chưa có đất.',
      },
      {
        name: 'Quần xã tiên phong: địa y',
        forms: ['lichen'],
        soil: 1,
        species: 1,
        biomass: 1,
        web: 1,
        text: 'Địa y phát tán tới, bám trên đá, tiết acid làm đá phong hoá; xác địa y cùng mảnh đá vụn tạo lớp đất mỏng đầu tiên.',
      },
      {
        name: 'Rêu',
        forms: ['lichen', 'moss'],
        soil: 2,
        species: 2,
        biomass: 2,
        web: 2,
        text: 'Trên lớp đất mỏng, rêu phát triển, giữ ẩm và bổ sung thêm mùn; lớp đất dày dần.',
      },
      {
        name: 'Cỏ, dương xỉ',
        forms: ['moss', 'grass'],
        soil: 4,
        species: 4,
        biomass: 3,
        web: 3,
        text: 'Đất đủ dày cho cỏ và dương xỉ; côn trùng, động vật nhỏ xuất hiện, lưới thức ăn bắt đầu hình thành.',
      },
      {
        name: 'Cây bụi',
        forms: ['grass', 'shrub'],
        soil: 6,
        species: 6,
        biomass: 5,
        web: 5,
        text: 'Cây bụi lấn át cỏ nhờ cao hơn, che bóng; nhiều loài chim, thú nhỏ tới sinh sống.',
      },
      {
        name: 'Cây gỗ nhỏ ưa sáng',
        forms: ['grass', 'shrub', 'smallTree'],
        soil: 8,
        species: 8,
        biomass: 7,
        web: 7,
        text: 'Cây gỗ nhỏ ưa sáng mọc lên, quần xã bắt đầu phân tầng; vi khí hậu dưới tán ẩm và mát hơn.',
      },
      {
        name: 'Quần xã đỉnh cực: rừng cây gỗ lớn',
        forms: ['grass', 'shrub', 'smallTree', 'bigTree'],
        soil: 10,
        species: 10,
        biomass: 10,
        web: 10,
        text: 'Rừng cây gỗ lớn nhiều tầng, nhiều loài, lưới thức ăn phức tạp: quần xã tương đối ổn định (đỉnh cực), tương ứng với điều kiện khí hậu, đất của vùng.',
      },
    ],
  },
  'thu-sinh': {
    title: 'Diễn thế thứ sinh (phục hồi)',
    stages: [
      {
        name: 'Nương rẫy bỏ hoang',
        forms: [],
        soil: 7,
        species: 1,
        biomass: 0,
        web: 1,
        text: 'Khởi đầu từ nơi quần xã cũ đã bị huỷ diệt (rừng bị chặt, đốt làm nương rẫy) nhưng vẫn còn lớp đất, hạt, mầm và rễ cây.',
      },
      {
        name: 'Cỏ',
        forms: ['grass'],
        soil: 7,
        species: 3,
        biomass: 2,
        web: 2,
        text: 'Cỏ mọc nhanh từ hạt có sẵn trong đất: diễn thế diễn ra nhanh hơn nhiều so với diễn thế nguyên sinh.',
      },
      {
        name: 'Cây bụi',
        forms: ['grass', 'shrub'],
        soil: 8,
        species: 5,
        biomass: 4,
        web: 4,
        text: 'Cây bụi phát triển, lấn át cỏ; động vật quay trở lại.',
      },
      {
        name: 'Rừng thưa cây gỗ nhỏ',
        forms: ['grass', 'shrub', 'smallTree'],
        soil: 9,
        species: 7,
        biomass: 7,
        web: 7,
        text: 'Cây gỗ nhỏ ưa sáng mọc thành rừng thưa, quần xã phân tầng.',
      },
      {
        name: 'Rừng thứ sinh ổn định',
        forms: ['grass', 'shrub', 'smallTree', 'bigTree'],
        soil: 10,
        species: 9,
        biomass: 9,
        web: 9,
        text: 'Nếu không bị tác động tiếp, quần xã dần phục hồi thành rừng thứ sinh tương đối ổn định.',
      },
    ],
  },
  'suy-thoai': {
    title: 'Diễn thế thứ sinh (suy thoái)',
    stages: [
      {
        name: 'Rừng lim nguyên sinh',
        forms: ['grass', 'shrub', 'smallTree', 'bigTree'],
        soil: 10,
        species: 10,
        biomass: 10,
        web: 10,
        text: 'Rừng lim ở Hữu Lũng (Lạng Sơn) vốn là rừng nguyên sinh nhiều tầng, nhiều loài.',
      },
      {
        name: 'Rừng thưa cây gỗ nhỏ',
        forms: ['grass', 'shrub', 'smallTree'],
        soil: 9,
        species: 7,
        biomass: 6,
        web: 7,
        text: 'Cây lim bị chặt phá hết, còn lại rừng thưa các cây gỗ nhỏ.',
      },
      {
        name: 'Cây gỗ nhỏ và cây bụi',
        forms: ['grass', 'shrub', 'smallTree'],
        soil: 7,
        species: 5,
        biomass: 4,
        web: 5,
        text: 'Khai thác tiếp diễn, đất bị xói mòn; chỉ còn cây gỗ nhỏ và cây bụi.',
      },
      {
        name: 'Cây bụi và cỏ chiếm ưu thế',
        forms: ['grass', 'shrub'],
        soil: 5,
        species: 3,
        biomass: 2,
        web: 3,
        text: 'Cây bụi và cỏ chiếm ưu thế, đất nghèo dinh dưỡng và khô hơn.',
      },
      {
        name: 'Trảng cỏ',
        forms: ['grass'],
        soil: 3,
        species: 2,
        biomass: 1,
        web: 2,
        text: 'Cuối cùng chỉ còn trảng cỏ: quần xã suy thoái, kém đa dạng, đất bạc màu.',
      },
    ],
  },
};

/** Measures shown as bars, with their labels. */
export const MEASURES = /** @type {const} */ ([
  ['soil', 'Độ dày lớp đất'],
  ['species', 'Số loài'],
  ['biomass', 'Sinh khối'],
  ['web', 'Độ phức tạp lưới thức ăn'],
]);

/**
 * How a measure changes over a whole succession: up, down or level.
 * @param {Kind} kind
 * @param {'soil' | 'species' | 'biomass' | 'web'} key
 */
export function overallTrend(kind, key) {
  const s = SUCCESSIONS[kind].stages;
  const d = s[s.length - 1][key] - s[0][key];
  if (d === 0) return 'giữ nguyên';
  return d > 0 ? 'tăng' : 'giảm';
}

/**
 * The line read out at stage `i`.
 * @param {Kind} kind
 * @param {number} i
 */
export function stageText(kind, i) {
  const s = SUCCESSIONS[kind].stages;
  const last = i === s.length - 1;
  const where = `Giai đoạn ${i + 1}/${s.length}: ${s[i].name}. ${s[i].text}`;
  if (!last) return where;
  if (kind === 'suy-thoai')
    return `${where} So với lúc đầu, số loài, sinh khối và độ phức tạp của lưới thức ăn đều giảm.`;
  return `${where} So với lúc đầu, số loài, sinh khối và độ phức tạp của lưới thức ăn đều tăng.`;
}
