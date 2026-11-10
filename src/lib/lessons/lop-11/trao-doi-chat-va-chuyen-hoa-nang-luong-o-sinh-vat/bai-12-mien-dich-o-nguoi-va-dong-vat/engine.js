/**
 * The body's defence game and the antibody response model.
 *
 * Game: each invader meets the defenders of the non-specific line (barriers
 * and non-specific responses) and of the specific line (humoral and cellular
 * immunity); the learner picks a defender that really stops it.
 *
 * Antibodies: a first contact with an antigen gives a slow, small primary
 * response; a later contact with the same antigen, thanks to memory cells,
 * gives a fast, large secondary response. Each response is the curve
 * A·u²·e^{2(1−u)} with u = (t − lag) / (peak − lag), which peaks at A on the
 * day `peak`.
 */

import { tidy } from '#lib/core/number-format.js';

/** @typedef {'khong-dac-hieu' | 'dac-hieu'} Line */

/**
 * @typedef {object} Defender
 * @property {string} id
 * @property {string} name
 * @property {Line} line
 * @property {string} does What it does, shown after a wrong pick.
 */

/** @type {Defender[]} */
export const DEFENDERS = [
  {
    id: 'hang-rao',
    name: 'Da, niêm mạc và dịch tiết',
    line: 'khong-dac-hieu',
    does: 'Da, niêm mạc và dịch tiết (nước mắt, dịch nhầy, acid dạ dày) chặn mầm bệnh ở bên ngoài, trước khi chúng vào được mô.',
  },
  {
    id: 'thuc-bao',
    name: 'Thực bào',
    line: 'khong-dac-hieu',
    does: 'Đại thực bào và bạch cầu trung tính nuốt và tiêu hoá mầm bệnh đã lọt vào mô, máu.',
  },
  {
    id: 'nk',
    name: 'Tế bào giết tự nhiên',
    line: 'khong-dac-hieu',
    does: 'Tế bào giết tự nhiên phá huỷ tế bào bị nhiễm virus và tế bào khối u.',
  },
  {
    id: 'ua-acid',
    name: 'Bạch cầu ưa acid',
    line: 'khong-dac-hieu',
    does: 'Bạch cầu ưa acid tiết độc tố tiêu diệt giun sán, những ký sinh trùng quá lớn để thực bào.',
  },
  {
    id: 'khang-the',
    name: 'Kháng thể (dịch thể)',
    line: 'dac-hieu',
    does: 'Kháng thể do tương bào tiết vào máu gắn đặc hiệu với kháng nguyên tự do trong máu, dịch mô: vi khuẩn, virus ngoài tế bào, độc tố.',
  },
  {
    id: 't-doc',
    name: 'Tế bào T độc (tế bào)',
    line: 'dac-hieu',
    does: 'Tế bào T độc nhận diện đặc hiệu và tiết chất độc tiêu diệt tế bào cơ thể đã bị nhiễm mầm bệnh hoặc tế bào lạ.',
  },
];

/**
 * @typedef {object} Invader
 * @property {string} id
 * @property {string} name
 * @property {string} where Where the invader is now.
 * @property {string[]} accept Defenders that stop it.
 * @property {string} why Why the right defenders work.
 */

/** @type {Invader[]} */
export const INVADERS = [
  {
    id: 'bui-vi-khuan',
    name: 'Vi khuẩn bám trên da lành',
    where: 'Trên bề mặt da, chưa có vết thương.',
    accept: ['hang-rao'],
    why: 'Lớp biểu bì sừng của da là hàng rào vật lí; mồ hôi, chất nhờn có tính acid diệt bớt vi khuẩn.',
  },
  {
    id: 'vi-khuan-da-day',
    name: 'Vi khuẩn lẫn trong thức ăn',
    where: 'Vừa xuống đến dạ dày.',
    accept: ['hang-rao'],
    why: 'Dịch vị có acid mạnh là hàng rào hoá học, tiêu diệt phần lớn vi khuẩn theo thức ăn.',
  },
  {
    id: 'vet-xuoc',
    name: 'Vi khuẩn lọt qua vết xước',
    where: 'Đã vào mô dưới da, lần đầu gặp.',
    accept: ['thuc-bao'],
    why: 'Đáp ứng không đặc hiệu tức thời: phản ứng viêm đưa bạch cầu tới, đại thực bào và bạch cầu trung tính thực bào vi khuẩn.',
  },
  {
    id: 'giun',
    name: 'Ấu trùng giun sán',
    where: 'Ký sinh trong mô.',
    accept: ['ua-acid'],
    why: 'Giun sán quá lớn để thực bào; bạch cầu ưa acid tiết độc tố tiêu diệt chúng.',
  },
  {
    id: 'te-bao-nhiem',
    name: 'Tế bào niêm mạc nhiễm virus cúm',
    where: 'Virus đã vào trong tế bào đường hô hấp.',
    accept: ['nk', 't-doc'],
    why: 'Virus trong tế bào không bị kháng thể chạm tới; tế bào giết tự nhiên (không đặc hiệu) và tế bào T độc (miễn dịch tế bào) phá huỷ tế bào bị nhiễm.',
  },
  {
    id: 'doc-to',
    name: 'Độc tố uốn ván',
    where: 'Lưu hành tự do trong máu.',
    accept: ['khang-the'],
    why: 'Độc tố là kháng nguyên tự do trong máu; kháng thể đặc hiệu gắn vào và vô hiệu hoá nó (miễn dịch dịch thể).',
  },
  {
    id: 'soi',
    name: 'Virus sởi, lần thứ hai',
    where: 'Trong máu; cơ thể đã tiêm vaccine sởi.',
    accept: ['khang-the'],
    why: 'Tế bào B nhớ do vaccine tạo ra nhanh chóng biệt hoá thành tương bào, tiết nhiều kháng thể gắn vào virus trong máu, trước khi virus kịp gây bệnh.',
  },
  {
    id: 'khoi-u',
    name: 'Tế bào khối u',
    where: 'Một tế bào của cơ thể phân chia bất thường.',
    accept: ['nk', 't-doc'],
    why: 'Tế bào giết tự nhiên và tế bào T độc nhận ra tế bào khối u và tiêu diệt nó.',
  },
];

/**
 * Result of sending one defender against one invader.
 * @param {Invader} invader @param {string} defenderId
 * @returns {{ ok: boolean, text: string }}
 */
export function defend(invader, defenderId) {
  const d = DEFENDERS.find((x) => x.id === defenderId);
  if (!d) return { ok: false, text: 'Chọn một lực lượng phòng thủ.' };
  if (invader.accept.includes(defenderId)) {
    const line = d.line === 'dac-hieu' ? 'miễn dịch đặc hiệu' : 'miễn dịch không đặc hiệu';
    return { ok: true, text: `Chặn được! ${d.name} thuộc ${line}. ${invader.why}` };
  }
  return { ok: false, text: `Chưa chặn được. ${d.does} Hãy xem mầm bệnh đang ở đâu.` };
}

/**
 * Counts which line stopped the invaders, from the defender that won each round.
 * @param {Array<string | null>} winners Defender id per invader, null if not yet won.
 */
export function tally(winners) {
  let khong = 0;
  let dac = 0;
  for (const w of winners) {
    const d = DEFENDERS.find((x) => x.id === w);
    if (!d) continue;
    if (d.line === 'dac-hieu') dac++;
    else khong++;
  }
  return { khong, dac };
}

/** Antibody level that is enough to protect, in model units. */
export const PROTECT = 5;

/** @type {{ lag: number, peak: number, height: number }} */
export const PRIMARY = { lag: 5, peak: 14, height: 10 };
/** @type {{ lag: number, peak: number, height: number }} */
export const SECONDARY = { lag: 2, peak: 7, height: 100 };

/**
 * One response curve at `x` days after the contact.
 * @param {number} x @param {{ lag: number, peak: number, height: number }} r
 */
export function response(x, r) {
  if (x <= r.lag) return 0;
  const u = (x - r.lag) / (r.peak - r.lag);
  return r.height * u * u * Math.exp(2 * (1 - u));
}

/**
 * Antibody level on day `t` after contacts on the given days with the same
 * antigen: the first is primary, every later one secondary.
 * @param {number} t @param {number[]} contacts
 */
export function antibody(t, contacts) {
  let sum = 0;
  contacts.forEach((c, i) => {
    sum += response(t - c, i === 0 ? PRIMARY : SECONDARY);
  });
  return sum;
}

/**
 * Days from a contact until the antibody level of its response reaches
 * PROTECT, to 0,1 day.
 * @param {{ lag: number, peak: number, height: number }} r
 */
export function daysToProtect(r) {
  for (let x = 0; x <= r.peak; x += 0.1) {
    if (response(x, r) >= PROTECT) return tidy(x, 1);
  }
  return Infinity;
}
