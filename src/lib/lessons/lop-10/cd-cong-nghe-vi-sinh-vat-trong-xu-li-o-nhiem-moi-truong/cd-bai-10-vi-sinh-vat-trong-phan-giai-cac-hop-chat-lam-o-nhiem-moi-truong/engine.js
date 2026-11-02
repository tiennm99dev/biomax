/**
 * The breakdown map of the lesson: which microbes act on which substance, under
 * which condition, and what comes out; a set of real situations to place on
 * that map; and the search for a strain that can live on a foreign compound.
 * The strains are made up for the exercise. No DOM here, so all of it is tested
 * in Node.
 */

/**
 * @typedef {'hieu-khi' | 'ki-khi' | 'len-men'} Route
 * @typedef {{
 *   id: string,
 *   name: string,
 *   route: Route | 'chung',
 *   condition: string,
 *   does: string,
 *   products: string,
 *   uses: string,
 * }} Group
 */

/** @type {Array<{ id: Route, name: string, condition: string, products: string }>} */
export const ROUTES = [
  {
    id: 'hieu-khi',
    name: 'Phân giải hiếu khí',
    condition: 'Có oxygen',
    products: 'CO₂, H₂O',
  },
  {
    id: 'ki-khi',
    name: 'Phân giải kị khí',
    condition: 'Không có oxygen',
    products: 'CH₄, CO₂, H₂O',
  },
  {
    id: 'len-men',
    name: 'Lên men',
    condition: 'Từ đường đơn, không cần oxygen',
    products: 'Ethanol, CO₂',
  },
];

/** @type {Group[]} */
export const GROUPS = [
  {
    id: 'tiet-enzyme',
    name: 'Vi sinh vật tiết enzyme',
    route: 'chung',
    condition: 'Bước đầu của mọi con đường',
    does: 'Tiết enzyme ra môi trường để thuỷ phân chất có phân tử lớn: cellulase cắt polysaccharide, protease cắt protein, lipase cắt lipid.',
    products: 'Các đơn phân: đường đơn, amino acid, acid béo và glycerol',
    uses: 'Tế bào chỉ hấp thụ được các đơn phân này.',
  },
  {
    id: 'hieu-khi',
    name: 'Vi sinh vật hiếu khí',
    route: 'hieu-khi',
    condition: 'Cần oxygen, thường phải sục khí liên tục',
    does: 'Hô hấp hiếu khí, oxi hoá hoàn toàn chất hữu cơ.',
    products: 'CO₂, H₂O và sinh khối',
    uses: 'Xử lí nước thải chế biến sữa, sản xuất giấy, dệt vải; làm sạch ao hồ nuôi cá có thông khí.',
  },
  {
    id: 'ki-khi',
    name: 'Vi khuẩn kị khí',
    route: 'ki-khi',
    condition: 'Môi trường không có oxygen',
    does: 'Phân giải lipid, protein và polysaccharide trong chất thải thành các đơn phân, rồi chuyển hoá tiếp thành các chất đơn giản hơn.',
    products: 'Nguyên liệu cho nhóm Archaea sinh methane',
    uses: 'Bể kị khí xử lí nước thải, hầm khí sinh học.',
  },
  {
    id: 'archaea',
    name: 'Archaea sinh methane',
    route: 'ki-khi',
    condition: 'Không có oxygen, sống cùng vi khuẩn kị khí',
    does: 'Chuyển hoá sản phẩm của vi khuẩn kị khí thành khí methane.',
    products: 'CH₄, CO₂ và H₂O',
    uses: 'Tạo khí sinh học dùng đun nấu, phát điện.',
  },
  {
    id: 'len-men',
    name: 'Vi sinh vật lên men',
    route: 'len-men',
    condition: 'Có đường đơn do thuỷ phân tạo ra',
    does: 'Lên men đường đơn $\\mathrm{C_5}$, $\\mathrm{C_6}$ từ cellulose thành ethanol.',
    products: 'Ethanol và CO₂',
    uses: 'Sản xuất ethanol sinh học từ chất thải hữu cơ như rơm rạ.',
  },
];

/** @type {Array<{ text: string, route: Route, why: string }>} */
export const CASES = [
  {
    text: 'Bể nước thải của nhà máy chế biến sữa, sục khí liên tục.',
    route: 'hieu-khi',
    why: 'Sục khí cung cấp oxygen, nên vi sinh vật hiếu khí oxi hoá chất hữu cơ thành CO₂ và H₂O.',
  },
  {
    text: 'Hầm kín chứa phân chăn nuôi, thu khí để đun nấu.',
    route: 'ki-khi',
    why: 'Hầm kín không có oxygen: vi khuẩn kị khí và Archaea tạo ra methane, thành phần chính của khí sinh học.',
  },
  {
    text: 'Rơm rạ được thuỷ phân thành đường đơn, rồi tạo nhiên liệu ethanol.',
    route: 'len-men',
    why: 'Ethanol là sản phẩm của quá trình lên men đường đơn.',
  },
  {
    text: 'Ao cá có máy phun nước, thức ăn thừa được phân giải nhanh.',
    route: 'hieu-khi',
    why: 'Phun nước đưa thêm oxygen vào ao, giúp vi sinh vật hiếu khí phân giải chất thải.',
  },
  {
    text: 'Bể kín xử lí nước thải giàu lipid, protein; khí thoát ra cháy được.',
    route: 'ki-khi',
    why: 'Khí cháy được là methane, do Archaea tạo ra trong điều kiện không có oxygen.',
  },
  {
    text: 'Nước thải nhà máy giấy chảy qua bể có hệ thống thông khí.',
    route: 'hieu-khi',
    why: 'Bể được thông khí nên vi sinh vật hiếu khí hoạt động, oxi hoá chất hữu cơ trong nước thải.',
  },
];

/**
 * The verdict on placing a case on a route.
 * @param {number} index
 * @param {Route} route
 * @returns {{ ok: boolean, text: string }}
 */
export function checkCase(index, route) {
  const item = CASES[index];
  if (item.route === route) return { ok: true, text: `Đúng. ${item.why}` };
  const clue = {
    'hieu-khi': 'Con đường hiếu khí cần oxygen, sản phẩm là CO₂ và H₂O.',
    'ki-khi': 'Con đường kị khí cần môi trường không có oxygen và tạo ra methane.',
    'len-men': 'Con đường lên men tạo ra ethanol từ đường đơn.',
  }[route];
  return { ok: false, text: `Chưa đúng. ${clue} Tình huống này có khớp không? Hãy thử lại.` };
}

/**
 * The groups that take part in a route, the hydrolysers first.
 * @param {Route} route
 * @returns {Group[]}
 */
export function groupsOf(route) {
  return GROUPS.filter((g) => g.route === 'chung' || g.route === route);
}

/** @type {Array<{ id: string, name: string, short: string, harm: string }>} */
export const FOREIGN = [
  {
    id: 'thuoc-tru-sau',
    name: 'Thuốc trừ sâu',
    short: 'thuốc trừ sâu',
    harm: 'tồn dư trong đất, nước và đi vào chuỗi thức ăn',
  },
  {
    id: 'pah',
    name: 'Hydrocarbon thơm dạng vòng',
    short: 'hydrocarbon thơm dạng vòng (PAH)',
    harm: 'bền, độc và có thể tích luỹ trong sinh vật',
  },
  {
    id: 'nhua',
    name: 'Nhựa phenolic',
    short: 'nhựa phenolic',
    harm: 'rất khó phân huỷ và tồn tại lâu trong môi trường',
  },
];

/** The strains on the bench, named by letter. @type {string[]} */
export const STRAINS = ['A', 'B', 'C', 'D'];

/** @type {Record<string, string>} */
const SURVIVOR = { 'thuoc-tru-sau': 'C', pah: 'A', nhua: 'D' };

/**
 * Whether a strain grows with this compound as its only carbon source.
 * @param {string} foreignId
 * @param {string} strain
 */
export function grows(foreignId, strain) {
  return SURVIVOR[foreignId] === strain;
}

/** The steps that follow picking a surviving strain, in the book's order. */
export const STUDY_STEPS = [
  {
    name: 'Giải trình tự hệ gene',
    text: 'Đọc toàn bộ hệ gene của chủng sống sót để biết nó có những gene nào.',
  },
  {
    name: 'Xác định gene được biểu hiện',
    text: 'So sánh tế bào khi có và không có chất lạ, tìm các gene được biểu hiện và các protein được tổng hợp nhiều hơn.',
  },
  {
    name: 'Xác định vai trò của protein',
    text: 'Tìm xem mỗi protein tham gia vào bước chuyển hoá nào. Đó là cơ sở để nuôi và cải tiến chủng này khi xử lí chất lạ.',
  },
];

/**
 * The verdict on picking a strain from the bench.
 * @param {string} foreignId
 * @param {string} strain
 * @returns {{ ok: boolean, text: string }}
 */
export function checkStrain(foreignId, strain) {
  if (grows(foreignId, strain)) {
    return {
      ok: true,
      text: `Đúng. Chủng ${strain} mọc được khi chất lạ là nguồn carbon duy nhất, nên có thể nó có enzyme chuyển hoá được chất này.`,
    };
  }
  return {
    ok: false,
    text: `Chủng ${strain} không mọc trong bình: nó không dùng được chất lạ này làm nguồn carbon, nên không có gì để nghiên cứu tiếp. Hãy chọn bình bị đục.`,
  };
}
