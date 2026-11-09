/**
 * Data for comparing the digestive tract of a carnivore (dog) with two kinds
 * of herbivore: a ruminant (cow, four-chambered stomach) and a non-ruminant
 * with a single stomach and a large caecum (rabbit, horse). Also the book's
 * energy values for working out the energy of a meal.
 */

/** @typedef {'rang' | 'da-day' | 'ruot-non' | 'manh-trang'} PartId */
/** @typedef {'nhai-lai' | 'tho'} HerbId */

/**
 * @typedef {object} TractPart
 * @property {PartId} id
 * @property {string} name
 * @property {string} meat What it is like in a carnivore.
 * @property {Record<HerbId, string>} plant What it is like in each herbivore.
 * @property {string} why How the difference suits the food.
 */

/** @type {Record<HerbId, string>} */
export const HERB_NAMES = {
  'nhai-lai': 'Trâu, bò (nhai lại)',
  tho: 'Thỏ, ngựa',
};

/** @type {TractPart[]} */
export const PARTS = [
  {
    id: 'rang',
    name: 'Răng',
    meat: 'Răng cửa sắc, răng nanh dài nhọn để cắm giữ và xé con mồi; răng trước hàm và răng ăn thịt lớn, sắc để cắt thịt; răng hàm nhỏ, ít dùng.',
    plant: {
      'nhai-lai':
        'Hàm trên không có răng cửa và răng nanh mà có tấm sừng; răng hàm và răng trước hàm to, có nhiều gờ cứng để nghiền cỏ.',
      tho: 'Răng cửa lớn để gặm, cắt cỏ; răng nanh không có hoặc kém phát triển, để lại khoảng trống trước răng hàm; răng hàm và răng trước hàm có nhiều gờ để nghiền.',
    },
    why: 'Thịt mềm, cần cắt xé; cỏ dai, nhiều cellulose, cần nghiền kĩ.',
  },
  {
    id: 'da-day',
    name: 'Dạ dày',
    meat: 'Dạ dày đơn, to, chứa được nhiều thức ăn; thịt được nhào trộn và tiêu hoá hoá học nhờ pepsin, HCl.',
    plant: {
      'nhai-lai':
        'Dạ dày bốn ngăn: dạ cỏ (có vi sinh vật cộng sinh tiêu hoá cellulose), dạ tổ ong, dạ lá sách và dạ múi khế (tiết pepsin, HCl như dạ dày đơn). Thức ăn được ợ lên miệng nhai lại.',
      tho: 'Dạ dày đơn, chứa thức ăn và tiêu hoá một phần protein; cellulose chủ yếu được tiêu hoá ở manh tràng.',
    },
    why: 'Thú ăn thịt có thể ăn một bữa lớn rồi nhịn lâu; thú nhai lại cần thời gian và vi sinh vật để phân giải cellulose.',
  },
  {
    id: 'ruot-non',
    name: 'Ruột non',
    meat: 'Ngắn, vì thịt dễ tiêu hoá và giàu chất dinh dưỡng.',
    plant: {
      'nhai-lai': 'Rất dài, thức ăn đi chậm nên có đủ thời gian tiêu hoá và hấp thụ.',
      tho: 'Dài, thức ăn đi chậm nên có đủ thời gian tiêu hoá và hấp thụ.',
    },
    why: 'Thức ăn thực vật khó tiêu, nghèo dinh dưỡng nên cần ống tiêu hoá dài.',
  },
  {
    id: 'manh-trang',
    name: 'Manh tràng',
    meat: 'Nhỏ, gần như không có chức năng tiêu hoá.',
    plant: {
      'nhai-lai': 'Phát triển, có vi sinh vật cộng sinh tiếp tục tiêu hoá cellulose.',
      tho: 'Rất lớn, là nơi vi sinh vật cộng sinh tiêu hoá cellulose chủ yếu.',
    },
    why: 'Thú ăn thịt không cần tiêu hoá cellulose; thú ăn thực vật dạ dày đơn dựa vào manh tràng để làm việc đó.',
  },
];

/**
 * @param {PartId} id
 * @returns {TractPart}
 */
export function partById(id) {
  const p = PARTS.find((x) => x.id === id);
  if (!p) throw new Error(`unknown part ${id}`);
  return p;
}

/**
 * Feedback once the learner has looked at `seen` parts.
 * @param {PartId[]} seen
 * @returns {{ tone: 'ok' | 'info', text: string }}
 */
export function progressNote(seen) {
  const left = PARTS.filter((p) => !seen.includes(p.id)).map((p) => p.name.toLowerCase());
  if (left.length === 0) {
    return {
      tone: 'ok',
      text: 'Đủ bốn bộ phận. Thú ăn thịt: răng nanh sắc, ruột ngắn, manh tràng nhỏ. Thú ăn thực vật: răng nghiền, ruột dài, manh tràng phát triển, có vi sinh vật cộng sinh tiêu hoá cellulose.',
    };
  }
  return { tone: 'info', text: `Còn cần xem: ${left.join(', ')}.` };
}

/** kcal per gram, as the book gives them. */
export const ENERGY = { carbohydrate: 4.1, protein: 4.1, lipid: 9.3 };

/**
 * Energy of a meal in kcal.
 * @param {{ carbohydrate?: number, protein?: number, lipid?: number }} grams
 */
export function mealEnergy(grams) {
  const e =
    (grams.carbohydrate ?? 0) * ENERGY.carbohydrate +
    (grams.protein ?? 0) * ENERGY.protein +
    (grams.lipid ?? 0) * ENERGY.lipid;
  return Math.round(e * 10) / 10;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const FORM_BINS = [
  { id: 'noi-bao', label: 'Tiêu hoá nội bào' },
  { id: 'tui', label: 'Túi tiêu hoá' },
  { id: 'ong', label: 'Ống tiêu hoá' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const FORM_CARDS = [
  {
    id: 'bot-bien',
    label: 'Bọt biển',
    bin: 'noi-bao',
    why: 'Bọt biển chưa có cơ quan tiêu hoá; thức ăn được tiêu hoá trong tế bào nhờ enzyme của lysosome.',
  },
  {
    id: 'thuy-tuc',
    label: 'Thuỷ tức (ruột khoang)',
    bin: 'tui',
    why: 'Thuỷ tức có túi tiêu hoá, một lỗ vừa là miệng vừa là hậu môn.',
  },
  {
    id: 'san',
    label: 'Sán lông (giun dẹp)',
    bin: 'tui',
    why: 'Giun dẹp có túi tiêu hoá, chỉ có một lỗ thông ra ngoài.',
  },
  {
    id: 'giun-dat',
    label: 'Giun đất',
    bin: 'ong',
    why: 'Giun đất có ống tiêu hoá với miệng và hậu môn riêng.',
  },
  {
    id: 'ca',
    label: 'Cá chép',
    bin: 'ong',
    why: 'Mọi động vật có xương sống đều có ống tiêu hoá.',
  },
  {
    id: 'nguoi',
    label: 'Người',
    bin: 'ong',
    why: 'Thức ăn đi một chiều trong ống, tiêu hoá ngoại bào.',
  },
  {
    id: 'mot-lo',
    label: 'Có một lỗ vừa là miệng vừa là hậu môn',
    bin: 'tui',
    why: 'Đây là đặc điểm của túi tiêu hoá.',
  },
  {
    id: 'lysosome',
    label: 'Chỉ tiêu hoá được mẩu thức ăn rất nhỏ, nhờ lysosome',
    bin: 'noi-bao',
    why: 'Tiêu hoá nội bào xảy ra bên trong tế bào.',
  },
  {
    id: 'mot-chieu',
    label: 'Thức ăn đi theo một chiều',
    bin: 'ong',
    why: 'Ống tiêu hoá có miệng và hậu môn riêng.',
  },
];
