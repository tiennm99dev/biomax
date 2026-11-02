/**
 * The two-by-two matrix of nutrition types (energy source against carbon
 * source) and the four reagents of the Gram stain. No DOM here, so all of it is
 * tested in Node.
 */

/**
 * @typedef {'anh-sang' | 'hoa-hoc'} EnergyId
 * @typedef {'vo-co' | 'huu-co'} CarbonId
 * @typedef {{ id: string, name: string, energy: EnergyId, carbon: CarbonId }} NutritionType
 */

/** @type {{ id: EnergyId, label: string }[]} */
export const ENERGY = [
  { id: 'anh-sang', label: 'Ánh sáng' },
  { id: 'hoa-hoc', label: 'Chất hoá học' },
];

/** @type {{ id: CarbonId, label: string }[]} */
export const CARBON = [
  { id: 'vo-co', label: 'Chất vô cơ' },
  { id: 'huu-co', label: 'Chất hữu cơ' },
];

/** @type {NutritionType[]} */
export const TYPES = [
  {
    id: 'quang-tu-duong',
    name: 'Quang tự dưỡng',
    energy: 'anh-sang',
    carbon: 'vo-co',
  },
  {
    id: 'quang-di-duong',
    name: 'Quang dị dưỡng',
    energy: 'anh-sang',
    carbon: 'huu-co',
  },
  {
    id: 'hoa-tu-duong',
    name: 'Hoá tự dưỡng',
    energy: 'hoa-hoc',
    carbon: 'vo-co',
  },
  {
    id: 'hoa-di-duong',
    name: 'Hoá dị dưỡng',
    energy: 'hoa-hoc',
    carbon: 'huu-co',
  },
];

/**
 * The type in one cell of the matrix.
 * @param {EnergyId} energy @param {CarbonId} carbon
 * @returns {NutritionType}
 */
export function typeAt(energy, carbon) {
  const found = TYPES.find((t) => t.energy === energy && t.carbon === carbon);
  if (!found) throw new RangeError(`no nutrition type for ${energy} and ${carbon}`);
  return found;
}

/** The microbes to place, with the clue that decides each one's cell. */
export const MICROBES = [
  {
    id: 'vi-khuan-lam',
    label: 'Vi khuẩn lam',
    bin: 'quang-tu-duong',
    why: 'Quang hợp nhờ ánh sáng và lấy carbon từ $\\mathrm{CO_2}$.',
  },
  {
    id: 'tao-don-bao',
    label: 'Tảo đơn bào',
    bin: 'quang-tu-duong',
    why: 'Có lục lạp, dùng năng lượng ánh sáng để tổng hợp chất hữu cơ từ $\\mathrm{CO_2}$.',
  },
  {
    id: 'trung-roi',
    label: 'Trùng roi có lục lạp',
    bin: 'quang-tu-duong',
    why: 'Khi có ánh sáng, chúng quang hợp như tảo.',
  },
  {
    id: 'nitrate-hoa',
    label: 'Vi khuẩn nitrate hoá',
    bin: 'hoa-tu-duong',
    why: 'Lấy năng lượng từ việc oxy hoá hợp chất nitrogen vô cơ, lấy carbon từ $\\mathrm{CO_2}$.',
  },
  {
    id: 'oxy-hoa-hydrogen',
    label: 'Vi khuẩn oxy hoá hydrogen',
    bin: 'hoa-tu-duong',
    why: 'Lấy năng lượng từ việc oxy hoá $\\mathrm{H_2}$ và lấy carbon từ $\\mathrm{CO_2}$.',
  },
  {
    id: 'khong-luu-huynh-tia',
    label: 'Vi khuẩn không lưu huỳnh màu tía',
    bin: 'quang-di-duong',
    why: 'Dùng ánh sáng làm nguồn năng lượng nhưng lấy carbon từ chất hữu cơ.',
  },
  {
    id: 'khong-luu-huynh-luc',
    label: 'Vi khuẩn không lưu huỳnh màu lục',
    bin: 'quang-di-duong',
    why: 'Dùng ánh sáng làm nguồn năng lượng nhưng lấy carbon từ chất hữu cơ.',
  },
  {
    id: 'nam-men',
    label: 'Nấm men',
    bin: 'hoa-di-duong',
    why: 'Phân giải đường để lấy cả năng lượng lẫn carbon.',
  },
  {
    id: 'nam-moc',
    label: 'Nấm mốc',
    bin: 'hoa-di-duong',
    why: 'Sống nhờ chất hữu cơ, lấy cả năng lượng và carbon từ đó.',
  },
  {
    id: 'trung-giay',
    label: 'Trùng giày',
    bin: 'hoa-di-duong',
    why: 'Là động vật nguyên sinh, ăn vi khuẩn và vụn hữu cơ.',
  },
];

/**
 * @typedef {{ id: string, name: string, does: string }} Reagent
 * @typedef {'positive' | 'negative'} WallKind
 */

/** The reagents of the Gram stain in the order they are used. @type {Reagent[]} */
export const REAGENTS = [
  {
    id: 'tim-ket-tinh',
    name: 'Tím kết tinh',
    does: 'Thuốc nhuộm đầu tiên: mọi tế bào đều bắt màu tím.',
  },
  {
    id: 'iodine',
    name: 'Iodine',
    does: 'Iodine kết hợp với tím kết tinh thành phức chất lớn, bám trong tế bào. Cả hai mẫu vẫn tím.',
  },
  {
    id: 'con',
    name: 'Ethyl alcohol $95\\%$',
    does: 'Cồn tẩy màu. Thành peptidoglycan dày của vi khuẩn Gram dương giữ lại màu tím, còn vi khuẩn Gram âm có thành mỏng thì mất màu.',
  },
  {
    id: 'fuchsin',
    name: 'Fuchsin',
    does: 'Thuốc nhuộm bổ sung màu đỏ: tế bào đã mất màu nhận màu đỏ, tế bào còn màu tím vẫn giữ màu tím.',
  },
];

/**
 * The next reagent to add, or null when the stain is finished.
 * @param {number} done how many reagents were added in order
 */
export const nextReagent = (done) => REAGENTS[done] ?? null;

/**
 * Whether `id` is the reagent that comes after `done` reagents.
 * @param {number} done @param {string} id
 */
export const isNextReagent = (done, id) => nextReagent(done)?.id === id;

/**
 * The colour of a sample after the first `done` reagents.
 * @param {WallKind} wall @param {number} done
 * @returns {'khong-mau' | 'tim' | 'do'}
 */
export function colourAfter(wall, done) {
  if (done < 1) return 'khong-mau';
  if (done < 3 || wall === 'positive') return 'tim';
  return done === 3 ? 'khong-mau' : 'do';
}

/** Vietnamese names and drawing colours of the sample colours. */
export const COLOURS = {
  'khong-mau': { name: 'không màu', fill: '#f1f5f9', stroke: '#94a3b8' },
  tim: { name: 'tím', fill: '#7e22ce', stroke: '#581c87' },
  do: { name: 'đỏ', fill: '#e11d48', stroke: '#9f1239' },
};
