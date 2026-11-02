/**
 * The enzyme application cards, sorted either by the enzyme behind a product or
 * by the field that uses it, and the two small calculations of the lesson. No
 * DOM here, so all of it is tested in Node.
 */

/**
 * `enzyme` is null for a card that only belongs in the sort by field, because
 * its enzyme has no bin of its own.
 * @typedef {{
 *   id: string,
 *   product: string,
 *   enzymeName: string,
 *   enzyme: string | null,
 *   field: string,
 *   why: string,
 * }} Application
 */

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const ENZYME_BINS = [
  { id: 'amylase', label: 'Amylase' },
  { id: 'protease', label: 'Protease' },
  { id: 'lipase', label: 'Lipase' },
  { id: 'pectinase', label: 'Pectinase' },
  { id: 'cellulase', label: 'Cellulase' },
  { id: 'taq', label: 'Taq polymerase' },
  { id: 'cat', label: 'Enzyme cắt giới hạn' },
];

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const FIELD_BINS = [
  { id: 'thuc-pham', label: 'Thực phẩm' },
  { id: 'y-duoc', label: 'Y dược' },
  { id: 'gene', label: 'Công nghệ gene' },
  { id: 'cong-nghiep', label: 'Công nghiệp' },
  { id: 'moi-truong', label: 'Môi trường' },
];

/** @type {Application[]} */
export const APPLICATIONS = [
  {
    id: 'mach-nha',
    product: 'Mạch nha, kẹo từ tinh bột',
    enzymeName: 'Amylase',
    enzyme: 'amylase',
    field: 'thuc-pham',
    why: 'Amylase phân giải tinh bột thành đường, tạo vị ngọt của mạch nha.',
  },
  {
    id: 'bia',
    product: 'Bia: đường hoá tinh bột trước khi lên men',
    enzymeName: 'Amylase',
    enzyme: 'amylase',
    field: 'thuc-pham',
    why: 'Amylase biến tinh bột thành đường để nấm men lên men.',
  },
  {
    id: 'lam-mem-thit',
    product: 'Làm mềm thịt, hầm xương nhanh nhừ',
    enzymeName: 'Protease',
    enzyme: 'protease',
    field: 'thuc-pham',
    why: 'Protease như bromelain, papain phân giải protein trong thịt.',
  },
  {
    id: 'nuoc-mam',
    product: 'Nước mắm: phân giải đạm cá',
    enzymeName: 'Protease',
    enzyme: 'protease',
    field: 'thuc-pham',
    why: 'Protease phân giải protein cá thành các chất có vị đậm.',
  },
  {
    id: 'nuoc-qua',
    product: 'Nước ép quả trong và nhiều dịch hơn',
    enzymeName: 'Pectinase',
    enzyme: 'pectinase',
    field: 'thuc-pham',
    why: 'Pectinase phân giải pectin, giúp ép, lọc dễ hơn và nước quả trong hơn.',
  },
  {
    id: 'rau-mem',
    product: 'Thức ăn từ rau củ mềm hơn cho trẻ nhỏ',
    enzymeName: 'Cellulase',
    enzyme: 'cellulase',
    field: 'thuc-pham',
    why: 'Cellulase phân giải thành tế bào thực vật, làm thực phẩm mềm hơn.',
  },
  {
    id: 'bot-giat-mau',
    product: 'Bột giặt tẩy vết máu, vết sữa',
    enzymeName: 'Protease',
    enzyme: 'protease',
    field: 'cong-nghiep',
    why: 'Protease phân giải vết bẩn protein, tẩy được ở nhiệt độ thấp.',
  },
  {
    id: 'bot-giat-dau',
    product: 'Bột giặt tẩy vết dầu mỡ',
    enzymeName: 'Lipase',
    enzyme: 'lipase',
    field: 'cong-nghiep',
    why: 'Lipase phân giải lipid trong vết dầu mỡ.',
  },
  {
    id: 'nhien-lieu',
    product: 'Nhiên liệu sinh học từ bã mía, rơm',
    enzymeName: 'Cellulase',
    enzyme: 'cellulase',
    field: 'cong-nghiep',
    why: 'Cellulase phân giải cellulose thành đường để lên men thành nhiên liệu.',
  },
  {
    id: 'nuoc-thai',
    product: 'Xử lí dầu mỡ trong nước thải nhà bếp',
    enzymeName: 'Lipase',
    enzyme: 'lipase',
    field: 'moi-truong',
    why: 'Lipase phân giải lipid gây tắc cống và ô nhiễm nước.',
  },
  {
    id: 'pcr',
    product: 'Nhân bản DNA bằng PCR để phát hiện virus',
    enzymeName: 'Taq polymerase',
    enzyme: 'taq',
    field: 'gene',
    why: 'Taq polymerase chịu được nhiệt độ cao của các chu kì PCR.',
  },
  {
    id: 'cat-dna',
    product: 'Cắt DNA tại vị trí xác định để tạo DNA tái tổ hợp',
    enzymeName: 'Enzyme cắt giới hạn',
    enzyme: 'cat',
    field: 'gene',
    why: 'Enzyme cắt giới hạn nhận ra trình tự riêng và cắt DNA tại đó.',
  },
  {
    id: 'noi-dna',
    product: 'Nối các đoạn DNA thành DNA tái tổ hợp',
    enzymeName: 'Ligase',
    enzyme: null,
    field: 'gene',
    why: 'Ligase nối các đoạn DNA đã được cắt.',
  },
  {
    id: 'sau-mo',
    product: 'Giảm đau, giảm viêm sau phẫu thuật',
    enzymeName: 'Bromelain',
    enzyme: null,
    field: 'y-duoc',
    why: 'Bromelain được dùng làm thuốc giảm đau, giảm viêm.',
  },
  {
    id: 'kem-phu-ne',
    product: 'Thuốc giảm viêm, phù nề khi chấn thương',
    enzymeName: 'Trypsin, chymotrypsin',
    enzyme: null,
    field: 'y-duoc',
    why: 'Trypsin, chymotrypsin được dùng để chống viêm và làm lành vết thương.',
  },
  {
    id: 'di-ung',
    product: 'Phân giải kháng sinh penicillin trong trường hợp dị ứng',
    enzymeName: 'Penicillinase',
    enzyme: null,
    field: 'y-duoc',
    why: 'Penicillinase phân giải penicillin, làm giảm lượng thuốc trong cơ thể.',
  },
  {
    id: 'nhua',
    product: 'Phân giải rác thải nhựa',
    enzymeName: 'Enzyme từ vi khuẩn phân giải nhựa',
    enzyme: null,
    field: 'moi-truong',
    why: 'Một số vi khuẩn tạo enzyme cắt mạch nhựa, đang được nghiên cứu để xử lí rác thải.',
  },
  {
    id: 'nuoc-ngam',
    product: 'Phân giải chất ô nhiễm trong nước ngầm',
    enzymeName: 'Enzyme oxy hoá của vi khuẩn',
    enzyme: null,
    field: 'moi-truong',
    why: 'Vi khuẩn dùng enzyme oxy hoá để biến chất ô nhiễm thành chất không độc.',
  },
];

/**
 * The deck to sort: by enzyme the card shows only the product; by field it also
 * names the enzyme, and every card takes part.
 * @param {'enzyme' | 'field'} mode
 * @returns {import('#lib/core/card-sorter.js').SortCard[]}
 */
export function deck(mode) {
  if (mode === 'enzyme') {
    return APPLICATIONS.flatMap((a) =>
      a.enzyme === null ? [] : [{ id: a.id, label: a.product, bin: a.enzyme, why: a.why }],
    );
  }
  return APPLICATIONS.map((a) => ({
    id: a.id,
    label: `${a.enzymeName}: ${a.product}`,
    bin: a.field,
    why: a.why,
  }));
}
