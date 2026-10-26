/**
 * Logic for the field-trip activity: four stations around a school garden,
 * the unnamed organisms found at each (with what the learner observes and
 * the tool used), and one dichotomous key for all of them, read with the
 * key helpers of the dichotomous-key lesson.
 */
import { hasTrait, identify, keyTable, nameOf } from '../bai-26-khoa-luong-phan/engine.js';

export { hasTrait, identify, keyTable, nameOf };

/** @type {import('../bai-26-khoa-luong-phan/engine.js').OrganismSet} */
export const FIELD_SET = {
  id: 'da-ngoai',
  label: 'Sinh vật ở vườn trường',
  organisms: [
    { id: 'chim-se', name: 'Chim sẻ' },
    { id: 'ech', name: 'Ếch đồng' },
    { id: 'buom', name: 'Con bướm' },
    { id: 'nhen', name: 'Con nhện' },
    { id: 'oc-sen', name: 'Ốc sên' },
    { id: 'giun-dat', name: 'Giun đất' },
    { id: 'hoa-hong', name: 'Cây hoa hồng' },
    { id: 'duong-xi', name: 'Cây dương xỉ' },
    { id: 'reu', name: 'Cây rêu' },
  ],
  traits: [
    {
      id: 'dong-vat',
      yes: 'Di chuyển được, không có màu xanh của diệp lục',
      no: 'Sống cố định, có lá màu xanh',
    },
    { id: 'xuong-song', yes: 'Có xương sống', no: 'Không có xương sống' },
    { id: 'long-vu', yes: 'Cơ thể phủ lông vũ, có mỏ sừng', no: 'Da trần, ẩm ướt' },
    { id: 'chan-khop', yes: 'Có các đôi chân phân đốt', no: 'Không có chân phân đốt' },
    { id: 'canh', yes: 'Có cánh, ba đôi chân', no: 'Không có cánh, bốn đôi chân' },
    { id: 'vo', yes: 'Có vỏ đá vôi', no: 'Không có vỏ, cơ thể dài, phân đốt' },
    { id: 'hoa', yes: 'Có hoa', no: 'Không có hoa' },
    { id: 're-that', yes: 'Có rễ thật, lá non cuộn tròn', no: 'Chỉ có rễ giả, cây rất nhỏ' },
  ],
  has: {
    'chim-se': ['dong-vat', 'xuong-song', 'long-vu'],
    ech: ['dong-vat', 'xuong-song'],
    buom: ['dong-vat', 'chan-khop', 'canh'],
    nhen: ['dong-vat', 'chan-khop'],
    'oc-sen': ['dong-vat', 'vo'],
    'giun-dat': ['dong-vat'],
    'hoa-hong': ['hoa', 're-that'],
    'duong-xi': ['re-that'],
    reu: [],
  },
  key: {
    trait: 'dong-vat',
    yes: {
      trait: 'xuong-song',
      yes: { trait: 'long-vu', yes: 'chim-se', no: 'ech' },
      no: {
        trait: 'chan-khop',
        yes: { trait: 'canh', yes: 'buom', no: 'nhen' },
        no: { trait: 'vo', yes: 'oc-sen', no: 'giun-dat' },
      },
    },
    no: { trait: 'hoa', yes: 'hoa-hong', no: { trait: 're-that', yes: 'duong-xi', no: 'reu' } },
  },
};

/** @type {Array<{ id: string, name: string, x: number, y: number }>} map positions in % */
export const STATIONS = [
  { id: 'bon-hoa', name: 'Bồn hoa', x: 18, y: 28 },
  { id: 'bo-ao', name: 'Bờ ao', x: 74, y: 22 },
  { id: 'goc-cay', name: 'Gốc cây cổ thụ', x: 68, y: 74 },
  { id: 'bai-co', name: 'Bãi cỏ', x: 24, y: 76 },
];

/**
 * @typedef {{
 *   organism: string;
 *   station: string;
 *   tool: string;
 *   note: string;
 *   role: string;
 * }} Find
 */

/** @type {Find[]} */
export const FINDS = [
  {
    organism: 'hoa-hong',
    station: 'bon-hoa',
    tool: 'mắt thường',
    note: 'Mọc cố định trong đất, lá xanh có răng cưa, thân có gai, đang nở hoa màu đỏ.',
    role: 'Làm cảnh, cho mật hoa nuôi ong, bướm.',
  },
  {
    organism: 'buom',
    station: 'bon-hoa',
    tool: 'mắt thường',
    note: 'Bay từ hoa này sang hoa khác; có hai đôi cánh phủ vảy màu, ba đôi chân phân đốt.',
    role: 'Hút mật và giúp hoa thụ phấn; sâu non của nhiều loài lại ăn lá cây.',
  },
  {
    organism: 'oc-sen',
    station: 'bon-hoa',
    tool: 'kính lúp',
    note: 'Bò chậm trên lá, để lại vệt nhớt; cơ thể mềm, không phân đốt, mang vỏ đá vôi xoắn.',
    role: 'Làm thức ăn cho chim, ếch; ăn lá non nên có thể hại cây trồng.',
  },
  {
    organism: 'ech',
    station: 'bo-ao',
    tool: 'mắt thường',
    note: 'Nhảy từ bờ xuống nước; có xương sống, da trần, ẩm ướt, chân sau có màng bơi.',
    role: 'Ăn sâu bọ, giúp bảo vệ mùa màng; làm thức ăn cho rắn, cò.',
  },
  {
    organism: 'duong-xi',
    station: 'bo-ao',
    tool: 'kính lúp',
    note: 'Mọc cố định ở chỗ râm, lá xanh xẻ thùy; lá non cuộn tròn, mặt dưới lá già có đốm nâu.',
    role: 'Che phủ, giữ ẩm cho đất ven ao; làm cảnh.',
  },
  {
    organism: 'reu',
    station: 'goc-cay',
    tool: 'kính lúp',
    note: 'Mọc thành lớp xanh mướt trên gốc cây ẩm; cây rất nhỏ, chỉ có rễ giả, không có hoa.',
    role: 'Giữ ẩm, góp phần tạo lớp đất mỏng; là nơi ở của nhiều sinh vật nhỏ.',
  },
  {
    organism: 'nhen',
    station: 'goc-cay',
    tool: 'kính lúp',
    note: 'Nằm giữa mạng tơ giữa hai rễ cây; không có xương sống, bốn đôi chân phân đốt, không có cánh.',
    role: 'Bắt ruồi, muỗi, sâu bọ: góp phần tiêu diệt côn trùng có hại.',
  },
  {
    organism: 'giun-dat',
    station: 'bai-co',
    tool: 'kính lúp',
    note: 'Chui lên khỏi đất ẩm sau mưa; không có xương sống, không có chân, cơ thể dài, mềm, phân nhiều đốt.',
    role: 'Đào hang làm đất tơi xốp, thoáng khí; phân giun làm đất màu mỡ.',
  },
  {
    organism: 'chim-se',
    station: 'bai-co',
    tool: 'ống nhòm',
    note: 'Nhảy trên cỏ nhặt hạt rồi bay lên cành; có xương sống, cơ thể phủ lông vũ, mỏ sừng ngắn.',
    role: 'Ăn sâu bọ và hạt cỏ; giúp phát tán hạt.',
  },
];

/** @param {string} station */
export const findsAt = (station) => FINDS.filter((f) => f.station === station);

/**
 * Feedback on one choice while reading the key for a find.
 * @param {string} organism the organism being identified
 * @param {number} row the pair number being read (1-based)
 * @param {boolean} answer true for the "a" line of the pair, false for "b"
 * @returns {{ ok: boolean, next: number | null, found: string | null, text: string }}
 */
export function readKey(organism, row, answer) {
  const table = keyTable(FIELD_SET);
  const r = table[row - 1];
  const picked = answer ? r.trait.yes : r.trait.no;
  if (hasTrait(FIELD_SET, organism, r.trait.id) !== answer)
    return {
      ok: false,
      next: row,
      found: null,
      text: `Chưa đúng: ý "${picked}" không khớp với ghi chép. Đọc lại ghi chép rồi chọn ý còn lại của cặp ${row}.`,
    };
  const to = answer ? r.yes : r.no;
  if (to.organism)
    return {
      ok: true,
      next: null,
      found: to.organism,
      text: `${row}${answer ? 'a' : 'b'}: ${picked} → ${nameOf(FIELD_SET, to.organism)}.`,
    };
  return {
    ok: true,
    next: to.step,
    found: null,
    text: `${row}${answer ? 'a' : 'b'}: ${picked} → đi đến cặp ${to.step}.`,
  };
}
