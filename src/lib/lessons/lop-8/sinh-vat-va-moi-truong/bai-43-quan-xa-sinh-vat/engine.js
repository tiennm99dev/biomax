/**
 * Data for the community lesson: pairs of species sorted by the kind of
 * relationship between them, and sample counts from a few communities for
 * reading species richness and the dominant species.
 *
 * Relationships follow the two textbook groups: supporting (hỗ trợ:
 * cộng sinh, hội sinh) and opposing (đối địch: cạnh tranh, kí sinh,
 * sinh vật ăn sinh vật khác).
 */

/** @typedef {'cong-sinh' | 'hoi-sinh' | 'canh-tranh' | 'ki-sinh' | 'an-thit'} Relation */

/** @type {Array<{ id: Relation, label: string, group: 'ho-tro' | 'doi-dich', note: string }>} */
export const RELATIONS = [
  {
    id: 'cong-sinh',
    label: 'Cộng sinh',
    group: 'ho-tro',
    note: 'Hai loài cùng sống với nhau và cả hai cùng có lợi.',
  },
  {
    id: 'hoi-sinh',
    label: 'Hội sinh',
    group: 'ho-tro',
    note: 'Một loài có lợi, loài kia không có lợi cũng không bị hại.',
  },
  {
    id: 'canh-tranh',
    label: 'Cạnh tranh',
    group: 'doi-dich',
    note: 'Các loài tranh giành thức ăn, nơi ở, ánh sáng…; các loài kìm hãm nhau.',
  },
  {
    id: 'ki-sinh',
    label: 'Kí sinh, nửa kí sinh',
    group: 'doi-dich',
    note: 'Loài này sống nhờ trên cơ thể loài khác, lấy chất dinh dưỡng, máu… từ loài đó.',
  },
  {
    id: 'an-thit',
    label: 'Sinh vật ăn sinh vật khác',
    group: 'doi-dich',
    note: 'Động vật ăn thịt con mồi, động vật ăn thực vật, thực vật bắt côn trùng.',
  },
];

/** @type {Array<{ id: string, label: string, bin: Relation, why: string }>} */
export const PAIRS = [
  {
    id: 'not-san',
    label: 'Vi khuẩn trong nốt sần và cây họ Đậu',
    bin: 'cong-sinh',
    why: 'Vi khuẩn cố định đạm cung cấp đạm cho cây, cây cung cấp chất hữu cơ cho vi khuẩn: cả hai cùng có lợi.',
  },
  {
    id: 'dia-y',
    label: 'Tảo và nấm trong địa y',
    bin: 'cong-sinh',
    why: 'Tảo quang hợp tạo chất hữu cơ, nấm hút nước và muối khoáng: cả hai cùng có lợi.',
  },
  {
    id: 'ca-ep',
    label: 'Cá ép bám vào rùa biển',
    bin: 'hoi-sinh',
    why: 'Cá ép được rùa đưa đi xa, kiếm thêm thức ăn; rùa không được lợi cũng không bị hại.',
  },
  {
    id: 'phong-lan',
    label: 'Phong lan bám trên thân cây gỗ',
    bin: 'hoi-sinh',
    why: 'Phong lan có chỗ bám để nhận ánh sáng; cây gỗ không bị hại.',
  },
  {
    id: 'lua-co',
    label: 'Lúa và cỏ dại trong ruộng',
    bin: 'canh-tranh',
    why: 'Lúa và cỏ dại tranh giành nước, muối khoáng, ánh sáng nên cả hai đều bị kìm hãm.',
  },
  {
    id: 'de-bo',
    label: 'Dê và bò cùng ăn cỏ trên đồng',
    bin: 'canh-tranh',
    why: 'Hai loài cùng ăn một nguồn thức ăn là cỏ nên cạnh tranh nhau.',
  },
  {
    id: 'giun-dua',
    label: 'Giun đũa sống trong ruột người',
    bin: 'ki-sinh',
    why: 'Giun đũa lấy chất dinh dưỡng trong ruột người; người bị hại.',
  },
  {
    id: 'tam-gui',
    label: 'Cây tầm gửi trên thân cây khác',
    bin: 'ki-sinh',
    why: 'Tầm gửi hút nước, muối khoáng của cây chủ nhưng vẫn tự quang hợp: đó là nửa kí sinh.',
  },
  {
    id: 'ho-huou',
    label: 'Hổ và hươu',
    bin: 'an-thit',
    why: 'Hổ săn bắt và ăn thịt hươu.',
  },
  {
    id: 'nap-am',
    label: 'Cây nắp ấm và côn trùng',
    bin: 'an-thit',
    why: 'Cây nắp ấm bắt và tiêu hóa côn trùng: thực vật ăn sinh vật khác.',
  },
];

/** Sorting rounds: first the two groups, then the five kinds. */
export const ROUNDS = {
  nhom: {
    label: 'Xếp mỗi cặp loài vào quan hệ hỗ trợ hoặc đối địch',
    bins: [
      { id: 'ho-tro', label: 'Quan hệ hỗ trợ' },
      { id: 'doi-dich', label: 'Quan hệ đối địch' },
    ],
    cards: PAIRS.map((p) => ({
      id: p.id,
      label: p.label,
      bin: groupOf(p.bin),
      why: p.why,
    })),
  },
  kieu: {
    label: 'Xếp mỗi cặp loài vào đúng kiểu quan hệ',
    bins: RELATIONS.map((r) => ({ id: r.id, label: r.label })),
    cards: PAIRS.map((p) => ({ id: p.id, label: p.label, bin: p.bin, why: p.why })),
  },
};

/** @param {Relation} relation */
export function groupOf(relation) {
  const r = RELATIONS.find((x) => x.id === relation);
  if (!r) throw new Error(`unknown relation ${relation}`);
  return r.group;
}

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   name: string;
 *   counts: Array<{ species: string, n: number }>;
 *   characteristic: string;
 * }} Community
 */

/**
 * Counts of individuals found in one sample plot of each community.
 * @type {Community[]}
 */
export const COMMUNITIES = [
  {
    id: 'ruong-lua',
    label: 'Ruộng lúa',
    name: 'ruộng lúa',
    counts: [
      { species: 'Lúa', n: 180 },
      { species: 'Cỏ dại', n: 40 },
      { species: 'Ốc bươu vàng', n: 12 },
      { species: 'Cua đồng', n: 6 },
    ],
    characteristic: 'Lúa',
  },
  {
    id: 'rung-ngap-man',
    label: 'Rừng ngập mặn',
    name: 'rừng ngập mặn',
    counts: [
      { species: 'Cây vẹt', n: 22 },
      { species: 'Cây đước', n: 75 },
      { species: 'Cây sú', n: 18 },
      { species: 'Cây mắm', n: 15 },
      { species: 'Cua biển', n: 30 },
      { species: 'Cá thòi lòi', n: 26 },
    ],
    characteristic: 'Cây đước',
  },
  {
    id: 'rung-lim',
    label: 'Rừng lim',
    name: 'rừng lim Hữu Lũng (Lạng Sơn)',
    counts: [
      { species: 'Dẻ', n: 20 },
      { species: 'Lim xanh', n: 64 },
      { species: 'Trám', n: 14 },
      { species: 'Re', n: 12 },
      { species: 'Sồi', n: 9 },
      { species: 'Ràng ràng', n: 7 },
      { species: 'Lát hoa', n: 5 },
    ],
    characteristic: 'Lim xanh',
  },
];

/**
 * The species with the most individuals in the sample.
 * @param {Community} c
 */
export function dominant(c) {
  return c.counts.reduce((best, x) => (x.n > best.n ? x : best)).species;
}

/** Number of species in the sample. @param {Community} c */
export const richness = (c) => c.counts.length;
