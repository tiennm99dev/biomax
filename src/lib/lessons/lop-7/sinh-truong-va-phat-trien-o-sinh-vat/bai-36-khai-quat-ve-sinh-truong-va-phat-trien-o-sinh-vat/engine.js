/**
 * Data and pure logic for the lesson on growth (sinh trưởng) and development
 * (phát triển): the life cycles of a frog, a cabbage butterfly and a mung
 * bean plant as size-over-age curves split into stages, the growth or
 * development cards the learner sorts, and a stem model that shows what the
 * apical and lateral meristems (mô phân sinh đỉnh, mô phân sinh bên) add.
 *
 * Ages and sizes are typical round values for illustration; real ones change
 * with the species and the temperature.
 */

/** @typedef {'ech' | 'buom' | 'dau'} OrganismId */

/**
 * @typedef {object} Stage
 * @property {string} key drawing key
 * @property {number} from first age of the stage
 * @property {string} name
 * @property {string} change what develops: new organs, new form, new way of life
 */

/**
 * @typedef {object} Organism
 * @property {OrganismId} id
 * @property {string} name
 * @property {number} maxAge in days
 * @property {string} measure what the size axis measures
 * @property {string} sizeUnit
 * @property {Array<[number, number]>} points (age, size) corners of the size curve
 * @property {Stage[]} stages in order of `from`, the first from 0
 */

/** @type {Record<OrganismId, Organism>} */
export const ORGANISMS = {
  ech: {
    id: 'ech',
    name: 'Ếch đồng',
    maxAge: 150,
    measure: 'Chiều dài thân (không tính đuôi)',
    sizeUnit: 'mm',
    points: [
      [0, 1.5],
      [2, 3],
      [15, 10],
      [25, 15],
      [32, 16],
      [60, 30],
      [120, 65],
      [150, 75],
    ],
    stages: [
      {
        key: 'ech-trung',
        from: 0,
        name: 'Trứng đã thụ tinh',
        change:
          'Trứng nằm trong khối chất nhầy dưới nước. Tế bào trong trứng phân chia và phân hoá dần thành phôi.',
      },
      {
        key: 'ech-nong-noc',
        from: 2,
        name: 'Nòng nọc (ấu trùng)',
        change: 'Nòng nọc nở ra, sống trong nước, thở bằng mang, bơi bằng đuôi.',
      },
      {
        key: 'ech-chan-sau',
        from: 15,
        name: 'Nòng nọc mọc chân sau',
        change: 'Hai chân sau mọc ra: một cơ quan mới được hình thành.',
      },
      {
        key: 'ech-chan-truoc',
        from: 25,
        name: 'Nòng nọc mọc chân trước',
        change: 'Hai chân trước mọc ra, đuôi bắt đầu tiêu giảm, phổi được hình thành.',
      },
      {
        key: 'ech-con',
        from: 32,
        name: 'Ếch con',
        change: 'Đuôi tiêu biến hết; ếch con lên cạn, thở bằng phổi và da, ăn sâu bọ.',
      },
      {
        key: 'ech-truong-thanh',
        from: 120,
        name: 'Ếch trưởng thành',
        change: 'Cơ thể đạt kích thước lớn, cơ quan sinh sản hoàn thiện, ếch có thể sinh sản.',
      },
    ],
  },
  buom: {
    id: 'buom',
    name: 'Bướm cải',
    maxAge: 40,
    measure: 'Chiều dài cơ thể',
    sizeUnit: 'mm',
    points: [
      [0, 1],
      [4, 1],
      [5, 2],
      [19, 30],
      [20, 22],
      [30, 22],
      [31, 20],
      [40, 20],
    ],
    stages: [
      {
        key: 'buom-trung',
        from: 0,
        name: 'Trứng',
        change: 'Trứng nhỏ bám ở mặt dưới lá cải; bên trong trứng, phôi đang hình thành.',
      },
      {
        key: 'buom-sau',
        from: 5,
        name: 'Sâu (ấu trùng)',
        change: 'Sâu non nở ra, ăn lá rất nhiều, lột xác nhiều lần và lớn lên nhanh.',
      },
      {
        key: 'buom-nhong',
        from: 20,
        name: 'Nhộng',
        change:
          'Sâu hoá nhộng. Nhộng không ăn, không lớn thêm, nhưng bên trong cơ thể biến đổi rất mạnh để hình thành cánh, râu, chân của bướm.',
      },
      {
        key: 'buom-truong-thanh',
        from: 31,
        name: 'Bướm trưởng thành',
        change:
          'Bướm chui ra khỏi vỏ nhộng, có cánh, bay đi hút mật hoa, giao phối và đẻ trứng. Bướm không lớn thêm.',
      },
    ],
  },
  dau: {
    id: 'dau',
    name: 'Cây đậu xanh',
    maxAge: 70,
    measure: 'Chiều cao cây',
    sizeUnit: 'cm',
    points: [
      [0, 0.5],
      [2, 0.5],
      [5, 4],
      [12, 12],
      [30, 35],
      [40, 45],
      [55, 55],
      [70, 55],
    ],
    stages: [
      {
        key: 'dau-hat',
        from: 0,
        name: 'Hạt',
        change: 'Hạt hút nước, trương lên; phôi bên trong hạt bắt đầu hoạt động.',
      },
      {
        key: 'dau-nay-mam',
        from: 2,
        name: 'Hạt nảy mầm',
        change: 'Rễ mầm nhú ra và đâm xuống đất, thân mầm vươn lên.',
      },
      {
        key: 'dau-cay-mam',
        from: 5,
        name: 'Cây mầm',
        change: 'Thân mầm đưa hai lá mầm lên khỏi mặt đất; lá thật đầu tiên xuất hiện.',
      },
      {
        key: 'dau-cay-con',
        from: 12,
        name: 'Cây con',
        change: 'Cây mọc thêm nhiều lá thật, thân cao và to dần, rễ phân nhánh.',
      },
      {
        key: 'dau-ra-hoa',
        from: 38,
        name: 'Ra hoa',
        change: 'Cây trưởng thành, hình thành nụ và nở hoa: cơ quan sinh sản xuất hiện.',
      },
      {
        key: 'dau-qua',
        from: 48,
        name: 'Tạo quả và hạt',
        change: 'Hoa tạo thành quả đậu chứa hạt; cây gần như ngừng cao thêm.',
      },
    ],
  },
};

export const ORGANISM_IDS = /** @type {OrganismId[]} */ (Object.keys(ORGANISMS));

/**
 * Size at an age, read off the curve by linear interpolation.
 * @param {Organism} org @param {number} age
 */
export function sizeAt(org, age) {
  const p = org.points;
  if (age <= p[0][0]) return p[0][1];
  for (let i = 1; i < p.length; i++) {
    const [x1, y1] = p[i];
    if (age <= x1) {
      const [x0, y0] = p[i - 1];
      return y0 + ((y1 - y0) * (age - x0)) / (x1 - x0);
    }
  }
  return p[p.length - 1][1];
}

/**
 * Index of the stage an age falls in.
 * @param {Organism} org @param {number} age
 */
export function stageIndexAt(org, age) {
  let index = 0;
  org.stages.forEach((s, i) => {
    if (age >= s.from) index = i;
  });
  return index;
}

/**
 * Whether the body is getting bigger around an age: the size change over the
 * next day (the day before, at the end of the cycle).
 * @param {Organism} org @param {number} age
 * @returns {'tang' | 'dung' | 'giam'}
 */
export function trendAt(org, age) {
  const a = Math.min(age, org.maxAge - 1);
  const d = sizeAt(org, a + 1) - sizeAt(org, a);
  if (d > 0.05) return 'tang';
  if (d < -0.05) return 'giam';
  return 'dung';
}

/** @type {Record<'tang' | 'dung' | 'giam', string>} */
const TREND_TEXT = {
  tang: 'Đang sinh trưởng: cơ thể lớn lên (kích thước, khối lượng tăng).',
  dung: 'Không lớn thêm: kích thước gần như giữ nguyên.',
  giam: 'Không sinh trưởng: kích thước cơ thể đang giảm vì cơ thể đang biến đổi hình dạng.',
};

/**
 * Everything the widget shows for one age.
 * @param {Organism} org @param {number} age
 */
export function describe(org, age) {
  const i = stageIndexAt(org, age);
  const trend = trendAt(org, age);
  return {
    index: i,
    stage: org.stages[i],
    size: sizeAt(org, age),
    trend,
    growth: TREND_TEXT[trend],
    development: org.stages[i].change,
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const CHANGE_BINS = [
  { id: 'sinh-truong', label: 'Sinh trưởng (tăng kích thước, khối lượng)' },
  { id: 'phat-trien', label: 'Phát triển (phân hoá tế bào, phát sinh hình thái)' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const CHANGE_CARDS = [
  {
    id: 'dau-cao',
    label: 'Cây đậu cao thêm từ 10 cm lên 15 cm',
    bin: 'sinh-truong',
    why: 'Chiều cao tăng là cơ thể lớn lên về kích thước: sinh trưởng.',
  },
  {
    id: 'chan-sau',
    label: 'Nòng nọc mọc thêm hai chân sau',
    bin: 'phat-trien',
    why: 'Một cơ quan mới xuất hiện (phát sinh hình thái): phát triển.',
  },
  {
    id: 'sau-nang',
    label: 'Sâu non nặng gấp nhiều lần sau hai tuần ăn lá',
    bin: 'sinh-truong',
    why: 'Khối lượng cơ thể tăng: sinh trưởng.',
  },
  {
    id: 'nhong-buom',
    label: 'Nhộng biến thành bướm có cánh',
    bin: 'phat-trien',
    why: 'Hình thái cơ thể thay đổi hẳn, có cánh mới: phát triển.',
  },
  {
    id: 'ra-hoa',
    label: 'Cây đậu ra hoa',
    bin: 'phat-trien',
    why: 'Hoa là cơ quan sinh sản mới được hình thành: phát triển.',
  },
  {
    id: 'cam-to',
    label: 'Thân cây cam to thêm sau mỗi năm',
    bin: 'sinh-truong',
    why: 'Đường kính thân tăng là cơ thể lớn lên về kích thước: sinh trưởng.',
  },
  {
    id: 'duoi',
    label: 'Đuôi nòng nọc tiêu biến, ếch con lên cạn',
    bin: 'phat-trien',
    why: 'Hình thái và lối sống thay đổi: phát triển.',
  },
  {
    id: 'em-be',
    label: 'Em bé tăng từ 3 kg lên 9 kg trong năm đầu',
    bin: 'sinh-truong',
    why: 'Khối lượng cơ thể tăng: sinh trưởng.',
  },
  {
    id: 'phan-hoa',
    label: 'Tế bào phôi biến đổi thành tế bào cơ, tế bào thần kinh',
    bin: 'phat-trien',
    why: 'Tế bào chuyên hoá thành các loại khác nhau (phân hoá tế bào): phát triển.',
  },
  {
    id: 'la-to',
    label: 'Lá cây cam non to dần ra',
    bin: 'sinh-truong',
    why: 'Kích thước lá tăng: sinh trưởng.',
  },
];

/** @typedef {'hai' | 'mot'} PlantGroup Hai lá mầm or Một lá mầm */

/**
 * The stem of a woody plant after some years: its height, its diameter and
 * the yearly rings the lateral meristem adds. A Hai lá mầm tree (cây cam)
 * has both meristems; a Một lá mầm plant (cây cau) has no lateral meristem,
 * so its stem barely thickens.
 * @param {PlantGroup} group @param {number} years
 * @param {boolean} apical whether the apical meristems divide
 * @param {boolean} lateral whether the lateral meristem divides (Hai lá mầm only)
 */
export function stemAt(group, years, apical, lateral) {
  const grows = group === 'hai' && lateral;
  return {
    height: 0.5 + (apical ? 0.6 * years : 0),
    diameter: group === 'hai' ? 2 + (grows ? 3 * years : 0) : 15,
    rings: grows ? years : 0,
  };
}

/**
 * Feedback for the stem model.
 * @param {PlantGroup} group @param {number} years
 * @param {boolean} apical @param {boolean} lateral
 */
export function stemText(group, years, apical, lateral) {
  if (years === 0) return 'Năm 0: cây non vừa trồng. Kéo thanh "Số năm" để cây lớn lên.';
  const parts = [];
  parts.push(
    apical
      ? 'Mô phân sinh đỉnh ở chồi ngọn, chồi nách và đầu rễ phân chia liên tục nên thân, cành, rễ dài ra.'
      : 'Mô phân sinh đỉnh ngừng phân chia nên thân không dài thêm.',
  );
  if (group === 'mot') {
    parts.push(
      'Cây Một lá mầm như cây cau không có mô phân sinh bên nên thân hầu như không to ra theo năm.',
    );
  } else {
    parts.push(
      lateral
        ? `Mô phân sinh bên (giữa mạch gỗ và mạch rây) phân chia, thêm một lớp mỗi năm: sau ${years} năm có ${years} vòng, thân to ra.`
        : 'Mô phân sinh bên ngừng phân chia nên thân không to thêm.',
    );
  }
  return parts.join(' ');
}
