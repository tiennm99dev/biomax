/**
 * The three stages of energy conversion in the living world, followed through
 * one organism at a time, in a world where light and green plants can be taken
 * away. A stage either runs on fresh supply ('on'), burns what was stored
 * earlier and so cannot last ('store'), or does not run at all ('off').
 */

/** @typedef {'on' | 'store' | 'off'} StageStatus */
/** @typedef {'tong-hop' | 'phan-giai' | 'huy-dong'} StageId */
/** @typedef {'cay-xanh' | 'vi-khuan' | 'tho'} OrganismId */
/** @typedef {{ light: boolean, plants: boolean }} World */

/** @type {Array<{ id: StageId, name: string, form: string }>} */
export const STAGES = [
  { id: 'tong-hop', name: 'Tổng hợp', form: 'năng lượng hoá học trong chất hữu cơ' },
  { id: 'phan-giai', name: 'Phân giải', form: 'năng lượng dễ sử dụng trong ATP' },
  { id: 'huy-dong', name: 'Huy động năng lượng', form: 'công cho hoạt động sống, rồi nhiệt' },
];

/**
 * @typedef {object} Organism
 * @property {OrganismId} id
 * @property {string} name
 * @property {string} mode
 * @property {string} source Where the energy enters.
 * @property {Record<StageId, string>} detail What this stage means for it.
 */

/** @type {Organism[]} */
export const ORGANISMS = [
  {
    id: 'cay-xanh',
    name: 'Cây xanh',
    mode: 'Quang tự dưỡng',
    source: 'ánh sáng Mặt Trời',
    detail: {
      'tong-hop':
        'Diệp lục hấp thụ ánh sáng. Quang năng được đổi thành hoá năng, tích luỹ trong chất hữu cơ tạo từ $\\mathrm{CO_2}$ và nước.',
      'phan-giai':
        'Hô hấp tế bào phân giải chất hữu cơ vừa tạo ra. Một phần năng lượng được chuyển vào ATP.',
      'huy-dong':
        'ATP cung cấp năng lượng cho hút khoáng, vận chuyển chất, sinh trưởng. Cuối cùng năng lượng toả ra môi trường dưới dạng nhiệt.',
    },
  },
  {
    id: 'vi-khuan',
    name: 'Vi khuẩn nitrate hoá',
    mode: 'Hoá tự dưỡng',
    source: 'phản ứng oxy hoá chất vô cơ',
    detail: {
      'tong-hop':
        'Vi khuẩn oxy hoá chất vô cơ chứa nitrogen và dùng năng lượng thu được để tổng hợp chất hữu cơ từ $\\mathrm{CO_2}$. Không cần ánh sáng.',
      'phan-giai':
        'Chất hữu cơ tự tổng hợp được phân giải trong hô hấp, năng lượng chuyển vào ATP.',
      'huy-dong':
        'ATP cung cấp năng lượng cho sinh trưởng và sinh sản của tế bào vi khuẩn. Cuối cùng năng lượng toả ra dưới dạng nhiệt.',
    },
  },
  {
    id: 'tho',
    name: 'Con thỏ',
    mode: 'Dị dưỡng',
    source: 'chất hữu cơ trong cỏ, lá cây',
    detail: {
      'tong-hop':
        'Thỏ không tự tạo chất hữu cơ từ chất vô cơ. Nó lấy hoá năng có sẵn trong thức ăn, tiêu hoá rồi dùng để tổng hợp chất hữu cơ của cơ thể.',
      'phan-giai': 'Hô hấp tế bào phân giải chất hữu cơ từ thức ăn, năng lượng chuyển vào ATP.',
      'huy-dong':
        'ATP cung cấp năng lượng cho co cơ, dẫn truyền thần kinh, giữ thân nhiệt. Cuối cùng năng lượng toả ra môi trường dưới dạng nhiệt.',
    },
  },
];

/** @type {World} */
export const FULL_WORLD = { light: true, plants: true };

/**
 * The status of the three stages of one organism in this world.
 * @param {OrganismId} id
 * @param {World} world
 * @returns {Record<StageId, StageStatus>}
 */
export function stageStatus(id, world) {
  if (id === 'vi-khuan') return { 'tong-hop': 'on', 'phan-giai': 'on', 'huy-dong': 'on' };
  if (id === 'cay-xanh') {
    if (!world.plants) return { 'tong-hop': 'off', 'phan-giai': 'off', 'huy-dong': 'off' };
    if (!world.light) return { 'tong-hop': 'off', 'phan-giai': 'store', 'huy-dong': 'store' };
    return { 'tong-hop': 'on', 'phan-giai': 'on', 'huy-dong': 'on' };
  }
  if (!world.plants) return { 'tong-hop': 'off', 'phan-giai': 'store', 'huy-dong': 'store' };
  if (!world.light) return { 'tong-hop': 'store', 'phan-giai': 'store', 'huy-dong': 'store' };
  return { 'tong-hop': 'on', 'phan-giai': 'on', 'huy-dong': 'on' };
}

export const STATUS_TEXT = /** @type {Record<StageStatus, string>} */ ({
  on: 'đang diễn ra',
  store: 'chỉ còn dùng chất dự trữ',
  off: 'dừng lại',
});

/**
 * The feedback sentence for the chosen organism in this world.
 * @param {OrganismId} id
 * @param {World} world
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeWorld(id, world) {
  if (world.light && world.plants) {
    return {
      tone: 'info',
      text: 'Năng lượng đi một chiều qua ba giai đoạn và cuối cùng toả ra môi trường dưới dạng nhiệt. Thử tắt ánh sáng hoặc bỏ cây xanh để xem giai đoạn nào dừng.',
    };
  }
  if (id === 'vi-khuan') {
    return {
      tone: 'ok',
      text: 'Vi khuẩn hoá tự dưỡng vẫn hoạt động bình thường: nguồn năng lượng của chúng là chất vô cơ, không phải ánh sáng hay thức ăn từ cây xanh.',
    };
  }
  if (id === 'cay-xanh') {
    return world.plants
      ? {
          tone: 'warn',
          text: 'Không có ánh sáng, cây ngừng tổng hợp chất hữu cơ nhưng vẫn hô hấp bằng chất dự trữ. Dự trữ hết thì cây chết.',
        }
      : { tone: 'warn', text: 'Không còn cây xanh: toàn bộ dòng năng lượng qua cây bị mất.' };
  }
  return world.plants
    ? {
        tone: 'warn',
        text: 'Không có ánh sáng, cây không tạo thêm chất hữu cơ. Thỏ chỉ còn ăn phần chất hữu cơ tích luỹ từ trước, nên nguồn thức ăn cạn dần.',
      }
    : {
        tone: 'warn',
        text: 'Không còn cây xanh, thỏ mất nguồn thức ăn: nó chỉ dùng được chất dự trữ trong cơ thể rồi chết đói. Sinh vật dị dưỡng phụ thuộc vào sinh vật tự dưỡng.',
      };
}

/** @typedef {{ allStages: boolean, dark: boolean, noPlants: boolean, chemo: boolean }} Seen */

/** @type {Seen} */
export const NOTHING_SEEN = { allStages: false, dark: false, noPlants: false, chemo: false };

/**
 * @param {Seen} seen
 * @param {OrganismId} id
 * @param {World} world
 * @param {number} visited How many different stages were opened for this organism.
 * @returns {Seen}
 */
export function updateSeen(seen, id, world, visited) {
  return {
    allStages: seen.allStages || visited >= STAGES.length,
    dark: seen.dark || (id === 'cay-xanh' && world.plants && !world.light),
    noPlants: seen.noPlants || (id === 'tho' && !world.plants),
    chemo: seen.chemo || (id === 'vi-khuan' && !(world.light && world.plants)),
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const MODE_BINS = [
  { id: 'quang', label: 'Quang tự dưỡng' },
  { id: 'hoa', label: 'Hoá tự dưỡng' },
  { id: 'di', label: 'Dị dưỡng' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const MODE_CARDS = [
  { id: 'lua', label: 'Cây lúa', bin: 'quang', why: 'Lúa dùng ánh sáng để tổng hợp chất hữu cơ.' },
  {
    id: 'vk-lam',
    label: 'Vi khuẩn lam',
    bin: 'quang',
    why: 'Vi khuẩn lam có sắc tố quang hợp, dùng ánh sáng để tạo chất hữu cơ.',
  },
  {
    id: 'tao',
    label: 'Tảo lục',
    bin: 'quang',
    why: 'Tảo lục có diệp lục và quang hợp như cây xanh.',
  },
  {
    id: 'nitrat',
    label: 'Vi khuẩn nitrate hoá',
    bin: 'hoa',
    why: 'Chúng lấy năng lượng từ phản ứng oxy hoá chất vô cơ chứa nitrogen.',
  },
  {
    id: 'luu-huynh',
    label: 'Vi khuẩn oxy hoá lưu huỳnh',
    bin: 'hoa',
    why: 'Chúng lấy năng lượng từ phản ứng oxy hoá hợp chất của lưu huỳnh.',
  },
  { id: 'bo', label: 'Con bò', bin: 'di', why: 'Bò lấy chất hữu cơ có sẵn trong cỏ.' },
  { id: 'nguoi', label: 'Con người', bin: 'di', why: 'Người lấy chất hữu cơ từ thức ăn.' },
  {
    id: 'nam',
    label: 'Nấm mốc trên bánh mì',
    bin: 'di',
    why: 'Nấm không có diệp lục, phân giải chất hữu cơ có sẵn trong bánh mì.',
  },
];
