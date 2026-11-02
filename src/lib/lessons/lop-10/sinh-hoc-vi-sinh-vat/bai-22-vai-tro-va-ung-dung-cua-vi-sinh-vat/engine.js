/**
 * The map of what microbes make, field by field, and the quiz on it. No DOM
 * here, so all of it is tested in Node.
 */
import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {{ id: string, name: string, microbe: string, how: string, kin?: string }} Product
 * `kin` marks products whose microbes overlap, so one never stands as a wrong
 * option for the other.
 * @typedef {{ id: string, name: string, products: Product[] }} Field
 */

/** @type {Field[]} */
export const FIELDS = [
  {
    id: 'thuc-pham',
    name: 'Thực phẩm',
    products: [
      {
        id: 'ruou-bia-banh-mi',
        name: 'Rượu, bia, bánh mì',
        microbe: 'Nấm men Saccharomyces cerevisiae',
        how: 'Lên men đường tạo ethanol và $\\mathrm{CO_2}$; khí $\\mathrm{CO_2}$ làm bột bánh nở.',
      },
      {
        id: 'sua-chua',
        name: 'Sữa chua, pho mát',
        microbe: 'Vi khuẩn lactic',
        kin: 'lactic',
        how: 'Lên men đường trong sữa thành lactic acid làm sữa đông tụ.',
      },
      {
        id: 'nuoc-mam',
        name: 'Nước mắm, nước tương',
        microbe: 'Vi sinh vật phân giải protein',
        how: 'Tiết enzyme phân giải protein trong cá, đậu thành amino acid.',
      },
    ],
  },
  {
    id: 'nong-nghiep',
    name: 'Nông nghiệp',
    products: [
      {
        id: 'phan-vi-sinh',
        name: 'Phân bón vi sinh',
        microbe: 'Vi khuẩn cố định đạm, vi sinh vật phân giải lân',
        how: 'Cố định $\\mathrm{N_2}$ trong không khí, biến lân khó tiêu thành lân dễ tiêu cho cây.',
      },
      {
        id: 'thuoc-tru-sau',
        name: 'Thuốc trừ sâu sinh học',
        microbe: 'Vi khuẩn Bacillus thuringiensis (Bt)',
        how: 'Tạo protein độc với sâu hại, ít tồn dư hơn thuốc hoá học.',
      },
    ],
  },
  {
    id: 'y-duoc',
    name: 'Y dược',
    products: [
      {
        id: 'khang-sinh',
        name: 'Thuốc kháng sinh penicillin',
        microbe: 'Nấm Penicillium',
        how: 'Tiết chất ức chế tổng hợp thành tế bào vi khuẩn.',
      },
      {
        id: 'insulin',
        name: 'Hormone insulin',
        microbe: 'Vi khuẩn E. coli đã chuyển gene',
        how: 'Mang gene insulin của người nên tổng hợp được lượng lớn hormone này.',
      },
      {
        id: 'probiotics',
        name: 'Men vi sinh (probiotics)',
        microbe: 'Lợi khuẩn đường ruột như vi khuẩn lactic',
        kin: 'lactic',
        how: 'Bổ sung vi khuẩn có lợi giúp cân bằng hệ vi sinh, hỗ trợ tiêu hoá.',
      },
    ],
  },
  {
    id: 'moi-truong',
    name: 'Môi trường',
    products: [
      {
        id: 'nuoc-thai',
        name: 'Xử lí nước thải',
        microbe: 'Hệ vi sinh hiếu khí và kị khí',
        kin: 'phan-giai-ki-khi',
        how: 'Phân giải chất hữu cơ trong các bể xử lí sinh học.',
      },
      {
        id: 'tran-dau',
        name: 'Xử lí sự cố tràn dầu',
        microbe: 'Vi khuẩn "ăn" dầu Alcanivorax borkumensis',
        how: 'Sử dụng dầu làm nguồn carbon và năng lượng, làm sạch mặt biển.',
      },
      {
        id: 'biogas',
        name: 'Khí biogas từ chất thải chăn nuôi',
        microbe: 'Archaea sinh methane',
        kin: 'phan-giai-ki-khi',
        how: 'Phân giải kị khí chất thải, tạo khí methane làm chất đốt và phân bón hữu cơ.',
      },
    ],
  },
];

/** Every product, tagged with its field. */
export const PRODUCTS = FIELDS.flatMap((f) => f.products.map((p) => ({ ...p, field: f.name })));

/**
 * @typedef {{ product: Product & { field: string }, options: string[], answer: number }} QuizQuestion
 */

/**
 * One question for each product: which microbe makes it. Every other option is
 * the microbe of a different product.
 * @param {number} seed
 * @returns {QuizQuestion[]}
 */
export function buildQuiz(seed) {
  const rand = rng(seed);
  return shuffle(rand, PRODUCTS).map((product) => {
    const others = shuffle(
      rand,
      PRODUCTS.filter(
        (p) => p.microbe !== product.microbe && (!p.kin || p.kin !== product.kin),
      ).map((p) => p.microbe),
    ).slice(0, 3);
    const options = shuffle(rand, [product.microbe, ...others]);
    return { product, options, answer: options.indexOf(product.microbe) };
  });
}

/** Roles of microbes to sort in the second activity. */
export const ROLE_BINS = [
  { id: 'tu-nhien', label: 'Vai trò với tự nhiên' },
  { id: 'con-nguoi', label: 'Vai trò với con người' },
  { id: 'tac-hai', label: 'Tác hại' },
];

export const ROLE_CARDS = [
  {
    id: 'phan-giai-xac',
    label: 'Phân giải xác sinh vật thành chất khoáng',
    bin: 'tu-nhien',
    why: 'Khép kín vòng tuần hoàn vật chất và làm giàu đất.',
  },
  {
    id: 'tao-o2',
    label: 'Vi khuẩn lam quang hợp tạo O₂',
    bin: 'tu-nhien',
    why: 'Sinh vật tự dưỡng cung cấp O₂ và chất dinh dưỡng cho sinh vật dị dưỡng.',
  },
  {
    id: 'trung-roi-moi',
    label: 'Trùng roi cộng sinh trong ruột mối',
    bin: 'tu-nhien',
    why: 'Trùng roi tiết enzyme giúp mối tiêu hoá cellulose.',
  },
  {
    id: 'vitamin-ruot',
    label: 'Vi khuẩn đường ruột tổng hợp vitamin cho người',
    bin: 'con-nguoi',
    why: 'Vi sinh vật cộng sinh giúp tăng cường miễn dịch, tiêu hoá, tổng hợp vitamin.',
  },
  {
    id: 'lam-sach',
    label: 'Phân giải nhựa, hoá chất độc hại, giảm ô nhiễm',
    bin: 'con-nguoi',
    why: 'Con người tận dụng khả năng này để giảm ô nhiễm môi trường.',
  },
  {
    id: 'gay-benh',
    label: 'Gây bệnh ở người, vật nuôi, cây trồng',
    bin: 'tac-hai',
    why: 'Nhiều vi sinh vật là tác nhân gây bệnh nguy hiểm.',
  },
  {
    id: 'hong-thuc-pham',
    label: 'Làm hư hỏng thực phẩm, đồ dùng',
    bin: 'tac-hai',
    why: 'Thiệt hại lớn về kinh tế.',
  },
  {
    id: 'mang-sinh-hoc',
    label: 'Tạo màng sinh học làm tắc đường ống',
    bin: 'tac-hai',
    why: 'Màng sinh học bám trên thiết bị cản trở sản xuất.',
  },
];
