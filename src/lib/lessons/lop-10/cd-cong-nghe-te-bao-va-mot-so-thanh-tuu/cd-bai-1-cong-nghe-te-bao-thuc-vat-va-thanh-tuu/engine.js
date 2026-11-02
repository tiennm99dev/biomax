/**
 * Micropropagation as a run of decisions: each stage either asks the learner to
 * pick how to handle the culture or to set the auxin and cytokinin levels, and
 * the culture answers. Also the chain of shoots a multiplication cycle gives.
 * No DOM here, so all of it is tested in Node.
 */
import { fmt } from '#lib/core/number-format.js';

/**
 * @typedef {'trong' | 'mau' | 'nhiem' | 'chet' | 'nguyen' | 'mo-seo' | 'choi' | 're' | 'cay' | 'heo'} Picture
 * @typedef {'khong' | 'mo-seo' | 'choi' | 're'} Growth
 * @typedef {{ id: string, text: string, ok: boolean, why: string, picture: Picture }} StageOption
 * @typedef {{ id: string, name: string, task: string, picture: Picture, options: StageOption[] }} ChoiceStage
 * @typedef {{ id: string, name: string, task: string, picture: Picture, target: Growth, done: string }} HormoneStage
 * @typedef {ChoiceStage | HormoneStage} Stage
 */

/** The highest relative level of each hormone on the stepper. */
export const MAX_LEVEL = 4;

/** @type {Record<Picture, string>} */
export const PICTURE_TEXT = {
  trong: 'Bình nuôi cấy mới có môi trường dinh dưỡng, chưa có mẫu.',
  mau: 'Mẩu mô nhỏ màu xanh nằm trên môi trường.',
  nhiem: 'Môi trường nổi các đốm nấm mốc, mẩu mô bị lấn át.',
  chet: 'Mẩu mô chuyển màu nâu vì đã chết.',
  nguyen: 'Mẩu mô gần như không thay đổi.',
  'mo-seo': 'Mẩu mô phát triển thành khối mô sẹo chưa chuyên hoá.',
  choi: 'Từ khối mô mọc lên nhiều chồi xanh.',
  re: 'Rễ đâm xuống môi trường nuôi cấy.',
  cay: 'Cây con xanh tốt trong chậu giá thể ở vườn ươm.',
  heo: 'Cây con héo rũ.',
};

/** @type {Stage[]} */
export const STAGES = [
  {
    id: 'chon-mau',
    name: 'Chọn mẫu',
    task: 'Cần nhân nhanh một giống lan quý. Lấy mẫu nào để nuôi cấy?',
    picture: 'trong',
    options: [
      {
        id: 'la-benh',
        text: 'Một mảnh lá già có đốm bệnh của cây mẹ',
        ok: false,
        why: 'Mẫu đã nhiễm bệnh sẽ truyền mầm bệnh cho mọi cây con. Mô già cũng khó tái sinh hơn.',
        picture: 'nhiem',
      },
      {
        id: 'hat-lai',
        text: 'Hạt của quả do cây mẹ thụ phấn với một cây khác',
        ok: false,
        why: 'Hạt tạo thành qua sinh sản hữu tính, nên kiểu gene có thể khác cây mẹ. Như vậy không còn giữ nguyên giống.',
        picture: 'trong',
      },
      {
        id: 'choi-dinh',
        text: 'Đỉnh chồi non của cây mẹ khoẻ mạnh, mang đặc tính tốt',
        ok: true,
        why: 'Đúng: mô non có khả năng tái sinh tốt, mô phân sinh đỉnh thường ít mầm bệnh, và cây con sẽ giữ kiểu gene của cây mẹ.',
        picture: 'mau',
      },
    ],
  },
  {
    id: 'khu-trung',
    name: 'Khử trùng',
    task: 'Đã có mẫu. Chuẩn bị thế nào trước khi cấy vào môi trường?',
    picture: 'mau',
    options: [
      {
        id: 'nuoc-may',
        text: 'Chỉ rửa mẫu bằng nước máy, rồi cấy ở bàn thường',
        ok: false,
        why: 'Môi trường giàu dinh dưỡng cũng nuôi được vi sinh vật. Nấm mốc, vi khuẩn phát triển rất nhanh, cạnh tranh dinh dưỡng và tiết độc tố làm hỏng mẫu.',
        picture: 'nhiem',
      },
      {
        id: 'luoc-mau',
        text: 'Đun sôi mẫu thật lâu để diệt hết vi sinh vật',
        ok: false,
        why: 'Nhiệt độ sôi giết cả tế bào thực vật, mẩu mô không còn khả năng phân chia.',
        picture: 'chet',
      },
      {
        id: 'vo-trung',
        text: 'Khử trùng bề mặt mẫu, tiệt trùng môi trường và dụng cụ, thao tác trong tủ cấy vô trùng',
        ok: true,
        why: 'Đúng: phải vô trùng cả mẫu, môi trường và dụng cụ, đồng thời giữ mẫu còn sống.',
        picture: 'mau',
      },
    ],
  },
  {
    id: 'mo-seo',
    name: 'Tạo mô sẹo',
    task: 'Chỉnh auxin và cytokinin để tế bào giải biệt hoá, phân chia thành khối mô sẹo.',
    picture: 'mau',
    target: 'mo-seo',
    done: 'Đạt: hai hormone ở mức cân đối, tế bào đã biệt hoá quay về trạng thái chưa chuyên hoá và phân chia mạnh, tạo mô sẹo.',
  },
  {
    id: 'nhan-choi',
    name: 'Nhân chồi',
    task: 'Chuyển sang môi trường mới và chỉnh hormone để khối mô tái biệt hoá thành nhiều chồi.',
    picture: 'mo-seo',
    target: 'choi',
    done: 'Đạt: cytokinin trội hơn auxin kích thích tạo chồi. Tách các chồi, cấy tiếp nhiều lần để nhân số lượng lên rất nhanh.',
  },
  {
    id: 'tao-re',
    name: 'Tạo rễ',
    task: 'Chuyển chồi sang môi trường tạo rễ. Cần chỉnh hormone thế nào?',
    picture: 'choi',
    target: 're',
    done: 'Đạt: auxin trội hơn cytokinin kích thích tạo rễ, chồi trở thành cây con hoàn chỉnh trong bình.',
  },
  {
    id: 'ra-cay',
    name: 'Ra cây',
    task: 'Cây con trong bình quen với độ ẩm cao và môi trường đủ chất. Đưa cây ra ngoài thế nào?',
    picture: 're',
    options: [
      {
        id: 'giu-binh',
        text: 'Giữ cây mãi trong bình nuôi cấy để khỏi rủi ro',
        ok: false,
        why: 'Trong bình, cây sớm thiếu chỗ và dinh dưỡng. Muốn thành cây giống thì cây phải thích nghi được với điều kiện bên ngoài.',
        picture: 're',
      },
      {
        id: 'ra-ruong',
        text: 'Trồng thẳng ra ruộng, nơi nắng gắt',
        ok: false,
        why: 'Lá cây con còn mất nước nhanh và rễ còn yếu, nên cây gặp nắng gắt, không khí khô sẽ héo.',
        picture: 'heo',
      },
      {
        id: 'huan-luyen',
        text: 'Huấn luyện cây thích nghi dần, rồi trồng vào giá thể sạch ở vườn ươm',
        ok: true,
        why: 'Đúng: giảm dần độ ẩm, tăng dần ánh sáng để cây thích nghi, rồi trồng ở vườn ươm trước khi đưa ra sản xuất.',
        picture: 'cay',
      },
    ],
  },
];

/**
 * Whether a stage asks for hormone levels rather than a choice.
 * @param {Stage} stage
 * @returns {stage is HormoneStage}
 */
export function isHormoneStage(stage) {
  return 'target' in stage;
}

/**
 * What the tissue does at given relative hormone levels: without any hormone
 * it stays as it is, with balanced levels it forms callus, and when one hormone
 * is at least twice the other it forms shoots (cytokinin) or roots (auxin).
 * @param {number} auxin @param {number} cytokinin
 * @returns {Growth}
 */
export function growthOf(auxin, cytokinin) {
  if (auxin === 0 && cytokinin === 0) return 'khong';
  if (auxin >= 2 * cytokinin) return 're';
  if (cytokinin >= 2 * auxin) return 'choi';
  return 'mo-seo';
}

/** @type {Record<Growth, { name: string, picture: Picture }>} */
const GROWTH = {
  khong: { name: 'tế bào gần như không phân chia', picture: 'nguyen' },
  'mo-seo': { name: 'mô sẹo', picture: 'mo-seo' },
  choi: { name: 'chồi', picture: 'choi' },
  re: { name: 'rễ', picture: 're' },
};

/**
 * The culture's answer to the levels at a hormone stage.
 * @param {HormoneStage} stage @param {number} auxin @param {number} cytokinin
 * @returns {{ ok: boolean, text: string, picture: Picture }}
 */
export function readHormones(stage, auxin, cytokinin) {
  const growth = growthOf(auxin, cytokinin);
  const { name, picture } = GROWTH[growth];
  if (growth === stage.target) return { ok: true, text: stage.done, picture };
  if (growth === 'khong') {
    return {
      ok: false,
      text: 'Chưa có hormone: tế bào gần như không phân chia. Hãy tăng auxin, cytokinin.',
      picture,
    };
  }
  return {
    ok: false,
    text: `Với auxin ${auxin}, cytokinin ${cytokinin}, mô đang tạo ${name}, chưa phải ${GROWTH[stage.target].name}. Thử đổi tỉ lệ hai hormone.`,
    picture,
  };
}

/**
 * The number of shoots after each cycle, starting from one shoot, when every
 * shoot is split into `factor` shoots per cycle.
 * @param {number} factor @param {number} cycles
 * @returns {number[]}
 */
export function shootChain(factor, cycles) {
  const chain = [1];
  for (let i = 1; i <= cycles; i++) chain.push(chain[i - 1] * factor);
  return chain;
}

/** Weeks in one multiplication cycle, as assumed by the tool. */
export const WEEKS_PER_CYCLE = 4;
/** Cuttings one mother plant gives in a year, as assumed by the tool. */
export const CUTTINGS_PER_YEAR = 20;

/**
 * Cuttings one mother plant gives over the same weeks, in whole cuttings.
 * @param {number} weeks
 */
export function cuttingsIn(weeks) {
  return Math.floor((CUTTINGS_PER_YEAR * weeks) / 52);
}

/**
 * The sentence comparing tissue culture with cuttings over `cycles` cycles.
 * @param {number} factor @param {number} cycles
 */
export function compareText(factor, cycles) {
  const shoots = shootChain(factor, cycles)[cycles];
  const weeks = cycles * WEEKS_PER_CYCLE;
  const cuttings = cuttingsIn(weeks);
  return `Sau ${cycles} chu kì (${weeks} tuần), một chồi cho ${fmt(shoots)} chồi, còn giâm cành từ một cây mẹ chỉ được khoảng ${fmt(cuttings)} cành. Số chồi nhân lên theo cấp số nhân, vì mọi chồi mới lại được cấy tiếp.`;
}
