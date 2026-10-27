/**
 * The basic genetics terms of the lesson as flip cards, each with a garden-pea
 * example, and a self-check that shows an example and asks which term it
 * illustrates. Pure data and checks; the widget draws them.
 */

/**
 * @typedef {{ kind: 'seed' | 'flower' | 'plant', color?: 'vang' | 'xanh' | 'tim' | 'trang',
 *   shape?: 'tron' | 'nhan', tall?: boolean }} PeaPicture
 * @typedef {{ id: string, term: string, definition: string, example: string,
 *   pictures: PeaPicture[] }} Term
 * @typedef {{ id: string, example: string, pictures: PeaPicture[], answer: string,
 *   options: string[], why: string }} Question
 */

const YELLOW = /** @type {PeaPicture} */ ({ kind: 'seed', color: 'vang', shape: 'tron' });
const GREEN = /** @type {PeaPicture} */ ({ kind: 'seed', color: 'xanh', shape: 'tron' });
const WRINKLED = /** @type {PeaPicture} */ ({ kind: 'seed', color: 'vang', shape: 'nhan' });
const PURPLE = /** @type {PeaPicture} */ ({ kind: 'flower', color: 'tim' });
const WHITE = /** @type {PeaPicture} */ ({ kind: 'flower', color: 'trang' });

/** @type {Term[]} */
export const TERMS = [
  {
    id: 'di-truyen',
    term: 'Di truyền',
    definition: 'Hiện tượng truyền đạt các tính trạng của bố mẹ, tổ tiên cho các thế hệ con cháu.',
    example: 'Cây đậu hoa tím thuần chủng tự thụ phấn, đời con đều có hoa tím giống bố mẹ.',
    pictures: [PURPLE, PURPLE],
  },
  {
    id: 'bien-di',
    term: 'Biến dị',
    definition: 'Hiện tượng con sinh ra khác với bố mẹ và khác nhau ở nhiều chi tiết.',
    example: 'Cây $F_1$ đều hoa tím, nhưng trong các cây con của chúng có cây hoa trắng.',
    pictures: [PURPLE, WHITE],
  },
  {
    id: 'tinh-trang',
    term: 'Tính trạng',
    definition:
      'Những đặc điểm về hình thái, cấu tạo, sinh lí của cơ thể, dùng để phân biệt cá thể này với cá thể khác.',
    example: 'Màu hạt, hình dạng hạt, màu hoa, chiều cao thân của cây đậu Hà Lan.',
    pictures: [YELLOW, PURPLE, { kind: 'plant', tall: true }],
  },
  {
    id: 'tuong-phan',
    term: 'Cặp tính trạng tương phản',
    definition: 'Hai trạng thái biểu hiện trái ngược nhau của cùng một loại tính trạng.',
    example: 'Hạt trơn và hạt nhăn; thân cao và thân thấp.',
    pictures: [YELLOW, WRINKLED],
  },
  {
    id: 'gene',
    term: 'Gene (nhân tố di truyền)',
    definition:
      'Nhân tố nằm trong tế bào quy định tính trạng; Mendel gọi là nhân tố di truyền, ngày nay gọi là gene.',
    example: 'Gene quy định màu hạt đậu Hà Lan, kí hiệu bằng chữ $A$.',
    pictures: [YELLOW, GREEN],
  },
  {
    id: 'allele',
    term: 'Allele',
    definition:
      'Các trạng thái (phiên bản) khác nhau của cùng một gene. Mỗi gene có thể có hai hay nhiều allele.',
    example: 'Gene màu hạt có allele $A$ (hạt vàng) và allele $a$ (hạt xanh).',
    pictures: [YELLOW, GREEN],
  },
  {
    id: 'kieu-gene',
    term: 'Kiểu gene',
    definition:
      'Tập hợp tất cả các gene trong tế bào của cơ thể; thường chỉ xét một vài cặp allele liên quan đến tính trạng đang nghiên cứu.',
    example: 'Về màu hạt, cây đậu có thể có kiểu gene $AA$, $Aa$ hoặc $aa$.',
    pictures: [YELLOW, YELLOW, GREEN],
  },
  {
    id: 'kieu-hinh',
    term: 'Kiểu hình',
    definition: 'Tập hợp tất cả các tính trạng được biểu hiện ra bên ngoài của cơ thể.',
    example: 'Cây có hạt vàng, trơn; cây có hoa trắng.',
    pictures: [YELLOW, WHITE],
  },
  {
    id: 'troi',
    term: 'Tính trạng trội',
    definition:
      'Tính trạng biểu hiện khi kiểu gene ở dạng đồng hợp trội hoặc dị hợp; là tính trạng biểu hiện ở $F_1$ khi lai hai dòng thuần chủng tương phản.',
    example: 'Hạt vàng ($AA$ hoặc $Aa$) là tính trạng trội so với hạt xanh.',
    pictures: [YELLOW],
  },
  {
    id: 'lan',
    term: 'Tính trạng lặn',
    definition:
      'Tính trạng chỉ biểu hiện khi kiểu gene ở dạng đồng hợp lặn; bị ẩn ở $F_1$ và xuất hiện lại ở $F_2$.',
    example: 'Hạt xanh chỉ có ở cây mang kiểu gene $aa$.',
    pictures: [GREEN],
  },
  {
    id: 'dong-di-hop',
    term: 'Đồng hợp và dị hợp',
    definition:
      'Cơ thể đồng hợp mang hai allele giống nhau của một gene; cơ thể dị hợp mang hai allele khác nhau.',
    example: '$AA$, $aa$ là đồng hợp; $Aa$ là dị hợp.',
    pictures: [YELLOW, GREEN],
  },
  {
    id: 'thuan-chung',
    term: 'Thuần chủng (dòng thuần)',
    definition:
      'Giống có đặc tính di truyền đồng nhất, các thế hệ sau giống thế hệ trước; mang các cặp allele đồng hợp về tính trạng đang xét.',
    example: 'Dòng đậu hạt xanh $aa$ tự thụ phấn qua nhiều đời vẫn chỉ cho hạt xanh.',
    pictures: [GREEN, GREEN, GREEN],
  },
];

/** @param {string} id */
export function termName(id) {
  const t = TERMS.find((x) => x.id === id);
  if (!t) throw new Error(`unknown term ${id}`);
  return t.term;
}

/**
 * The self-check: each example names one term; the options are that term
 * and three terms learners often confuse it with.
 * @type {Question[]}
 */
export const QUESTIONS = [
  {
    id: 'q-allele',
    example: '$A$ và $a$: hai dạng của gene quy định màu hạt.',
    pictures: [YELLOW, GREEN],
    answer: 'allele',
    options: ['allele', 'kieu-gene', 'kieu-hinh', 'tuong-phan'],
    why: '$A$ và $a$ là hai trạng thái khác nhau của cùng một gene, tức là hai allele.',
  },
  {
    id: 'q-kieu-gene',
    example: 'Cây đậu hạt vàng có cặp allele $Aa$.',
    pictures: [YELLOW],
    answer: 'kieu-gene',
    options: ['kieu-hinh', 'kieu-gene', 'allele', 'troi'],
    why: '$Aa$ là cặp allele cây mang trong tế bào, tức là kiểu gene; còn "hạt vàng" mới là kiểu hình.',
  },
  {
    id: 'q-kieu-hinh',
    example: 'Hạt có màu xanh, vỏ nhăn, nhìn thấy được.',
    pictures: [{ kind: 'seed', color: 'xanh', shape: 'nhan' }],
    answer: 'kieu-hinh',
    options: ['kieu-gene', 'gene', 'kieu-hinh', 'allele'],
    why: 'Các tính trạng biểu hiện ra bên ngoài (màu xanh, vỏ nhăn) tạo nên kiểu hình.',
  },
  {
    id: 'q-tuong-phan',
    example: 'Hoa tím và hoa trắng của cây đậu Hà Lan.',
    pictures: [PURPLE, WHITE],
    answer: 'tuong-phan',
    options: ['tuong-phan', 'allele', 'bien-di', 'tinh-trang'],
    why: 'Tím và trắng là hai trạng thái trái ngược của cùng tính trạng màu hoa: một cặp tính trạng tương phản.',
  },
  {
    id: 'q-lan',
    example: 'Ở $F_1$ không có cây hoa trắng, đến $F_2$ hoa trắng xuất hiện lại.',
    pictures: [WHITE],
    answer: 'lan',
    options: ['troi', 'lan', 'bien-di', 'thuan-chung'],
    why: 'Tính trạng bị ẩn ở $F_1$ và xuất hiện lại ở $F_2$ là tính trạng lặn.',
  },
  {
    id: 'q-troi',
    example: 'Lai hạt vàng thuần chủng với hạt xanh thuần chủng, $F_1$ đều hạt vàng.',
    pictures: [YELLOW],
    answer: 'troi',
    options: ['lan', 'di-truyen', 'troi', 'kieu-gene'],
    why: 'Tính trạng biểu hiện ở $F_1$ khi lai hai dòng thuần chủng tương phản là tính trạng trội.',
  },
  {
    id: 'q-di-hop',
    example: 'Cơ thể mang hai allele khác nhau: $Aa$.',
    pictures: [YELLOW],
    answer: 'dong-di-hop',
    options: ['thuan-chung', 'dong-di-hop', 'allele', 'kieu-hinh'],
    why: '$Aa$ có hai allele khác nhau nên là dị hợp; cơ thể dị hợp không thuần chủng.',
  },
  {
    id: 'q-bien-di',
    example: 'Hai cây con cùng bố mẹ, một cây hạt vàng, một cây hạt xanh.',
    pictures: [YELLOW, GREEN],
    answer: 'bien-di',
    options: ['di-truyen', 'bien-di', 'tuong-phan', 'lan'],
    why: 'Con sinh ra khác bố mẹ và khác nhau ở nhiều chi tiết là biến dị.',
  },
  {
    id: 'q-thuan-chung',
    example: 'Dòng đậu thân thấp tự thụ phấn qua nhiều đời đều cho cây thân thấp.',
    pictures: [{ kind: 'plant', tall: false }],
    answer: 'thuan-chung',
    options: ['thuan-chung', 'di-truyen', 'dong-di-hop', 'lan'],
    why: 'Các thế hệ sau giống hệt thế hệ trước về tính trạng đang xét: đó là dòng thuần chủng.',
  },
];

/**
 * Whether `picked` is the right term for question `q`.
 * @param {Question} q @param {string} picked
 */
export function isRight(q, picked) {
  return q.answer === picked;
}

/**
 * Score of a finished or partial quiz: answers maps question id → term id
 * (first attempt only).
 * @param {Record<string, string>} answers
 */
export function score(answers) {
  return QUESTIONS.filter((q) => answers[q.id] === q.answer).length;
}
