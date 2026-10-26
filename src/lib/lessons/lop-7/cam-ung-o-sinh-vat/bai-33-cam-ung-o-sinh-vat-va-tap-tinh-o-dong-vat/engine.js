/**
 * Logic for the lesson on response (cảm ứng) and animal behaviour (tập tính):
 * the shoot bending towards light, the sensitive plant (cây trinh nữ) folding
 * its leaflets when touched, and the deck of behaviours sorted into innate
 * and learned.
 */

import { FULL_DAYS } from '../_shared/tropism.js';

/* ------------------------------------------------------------------ */
/* Shoot bending towards light                                          */
/* ------------------------------------------------------------------ */

/**
 * The live line under the phototropism simulation.
 * @param {import('../_shared/tropism.js').LightFrom} light @param {number} days
 */
export function lightText(light, days) {
  if (days === 0) return 'Ngày 0: cây non mọc thẳng. Bấm "Thêm 1 ngày" để theo dõi ngọn cây.';
  if (light === 'tren')
    return `Ngày ${days}: ánh sáng chiếu từ trên xuống, đều mọi phía, nên ngọn cây vẫn mọc thẳng lên phía ánh sáng.`;
  const side = light === 'trai' ? 'bên trái' : 'bên phải';
  if (days < FULL_DAYS)
    return `Ngày ${days}: ánh sáng chỉ chiếu từ ${side}, ngọn cây bắt đầu uốn cong về ${side}.`;
  return `Ngày ${days}: ngọn cây đã uốn cong hẳn về phía nguồn sáng ở ${side}. Tác nhân kích thích là ánh sáng, phản ứng là ngọn cây mọc hướng về phía ánh sáng: đó là tính hướng sáng.`;
}

/* ------------------------------------------------------------------ */
/* The sensitive plant                                                   */
/* ------------------------------------------------------------------ */

/**
 * Seconds of the shortened model: the real leaflets fold within a few
 * seconds and open again after several minutes.
 */
export const MIMOSA = { close: 0.8, hold: 4, reopen: 8 };

/** @typedef {'mo' | 'dang-cup' | 'cup' | 'dang-mo'} MimosaStage */

/**
 * How open the leaflets are (1 open, 0 folded) `t` seconds after a touch;
 * `t` null means the leaf has not been touched.
 * @param {number | null} t
 */
export function openness(t) {
  if (t === null || t < 0 || t >= MIMOSA.reopen) return 1;
  if (t < MIMOSA.close) return 1 - t / MIMOSA.close;
  if (t < MIMOSA.hold) return 0;
  return (t - MIMOSA.hold) / (MIMOSA.reopen - MIMOSA.hold);
}

/**
 * @param {number | null} t
 * @returns {MimosaStage}
 */
export function mimosaStage(t) {
  if (t === null || t < 0 || t >= MIMOSA.reopen) return 'mo';
  if (t < MIMOSA.close) return 'dang-cup';
  if (t < MIMOSA.hold) return 'cup';
  return 'dang-mo';
}

/** @type {Record<MimosaStage, string>} */
export const MIMOSA_TEXT = {
  mo: 'Lá trinh nữ đang xoè. Chạm vào lá để tạo kích thích.',
  'dang-cup': 'Lá vừa bị chạm: các lá chét đang cụp lại và cuống lá rủ xuống.',
  cup: 'Các lá chét đã cụp hết. Tác nhân kích thích là sự va chạm, phản ứng là lá cụp lại.',
  'dang-mo': 'Sau một thời gian không bị chạm, lá chét từ từ xoè ra trở lại.',
};

/**
 * Angle of each leaflet from its midrib in degrees: about 70° when open and
 * folded flat against the midrib when closed.
 * @param {number} open 0-1
 */
export function leafletAngle(open) {
  return 8 + 62 * open;
}

/* ------------------------------------------------------------------ */
/* Innate or learned behaviour                                           */
/* ------------------------------------------------------------------ */

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const BEHAVIOUR_BINS = [
  { id: 'bam-sinh', label: 'Tập tính bẩm sinh' },
  { id: 'hoc-duoc', label: 'Tập tính học được' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const BEHAVIOUR_CARDS = [
  {
    id: 'nhen',
    label: 'Nhện chăng tơ để bắt mồi',
    bin: 'bam-sinh',
    why: 'Nhện con mới nở đã biết chăng tơ, không cần ai dạy.',
  },
  {
    id: 've',
    label: 'Ve sầu kêu vào mùa hè',
    bin: 'bam-sinh',
    why: 'Tiếng kêu là đặc trưng của loài ve, sinh ra đã có.',
  },
  {
    id: 'bu-me',
    label: 'Thú con mới sinh tìm vú mẹ để bú',
    bin: 'bam-sinh',
    why: 'Con non vừa sinh ra đã biết bú, chưa hề được học.',
  },
  {
    id: 'ap-trung',
    label: 'Gà mái ấp trứng',
    bin: 'bam-sinh',
    why: 'Mọi con gà mái đều ấp trứng theo cùng một cách: tập tính đặc trưng cho loài.',
  },
  {
    id: 'to-ong',
    label: 'Ong thợ xây tổ bằng sáp',
    bin: 'bam-sinh',
    why: 'Ong làm tổ theo cùng một kiểu từ đời này qua đời khác, không phải học.',
  },
  {
    id: 'keng',
    label: 'Trâu bò trở về chuồng khi nghe tiếng kẻng',
    bin: 'hoc-duoc',
    why: 'Trâu bò được tập nhiều lần nên mới hiểu tiếng kẻng là lúc về chuồng.',
  },
  {
    id: 'xiec',
    label: 'Khỉ đi xe đạp trong rạp xiếc',
    bin: 'hoc-duoc',
    why: 'Khỉ phải được người huấn luyện mới làm được.',
  },
  {
    id: 'vet',
    label: 'Con vẹt nói được tiếng người',
    bin: 'hoc-duoc',
    why: 'Vẹt bắt chước sau nhiều lần nghe người nói.',
  },
  {
    id: 'den-do',
    label: 'Người đi đường dừng lại khi gặp đèn đỏ',
    bin: 'hoc-duoc',
    why: 'Luật giao thông là điều con người học trong quá trình sống.',
  },
  {
    id: 'cho-goi',
    label: 'Chó chạy đến khi nghe chủ gọi tên',
    bin: 'hoc-duoc',
    why: 'Chó quen dần với tên gọi nhờ được gọi nhiều lần, không phải sinh ra đã biết.',
  },
];
