/**
 * The three virtual practicals of the lesson: bean seedlings under a
 * cardboard box with a hole (phototropism), a pot watered from one side by a
 * pierced bottle beside a control pot (hydrotropism), and a climbing plant
 * with or without a stake (thigmotropism). The bends come from the chapter's
 * shared tropism model; the book observes the results after 3 to 5 days.
 */

import { FULL_DAYS, rootBend, shootBend, tendrilTurns } from '../_shared/tropism.js';

/** Days the practical runs for. */
export const MAX_DAYS = 5;

/**
 * Where the opening of the cardboard box is: on its top, on one side, or on
 * one side with the pot turned every day.
 * @typedef {'nap' | 'ben' | 'xoay'} BoxHole
 */

/** @type {Record<BoxHole, import('../_shared/tropism.js').LightFrom>} */
const LIGHT_OF = { nap: 'tren', ben: 'phai', xoay: 'xoay' };

/**
 * @param {BoxHole} hole @param {number} days
 */
export function lightOutcome(hole, days) {
  const bend = shootBend(LIGHT_OF[hole], days);
  /** @type {string} */
  let text;
  if (days === 0) text = 'Ngày 0: hạt vừa nảy mầm, cây non mọc thẳng.';
  else if (hole === 'nap')
    text = `Ngày ${days}: ánh sáng lọt vào qua lỗ trên nắp hộp, chiếu từ trên xuống nên thân cây mọc thẳng lên.`;
  else if (hole === 'xoay')
    text = `Ngày ${days}: chậu được xoay mỗi ngày nên ánh sáng lần lượt chiếu đều các phía; thân cây không cong hẳn về phía nào mà mọc gần như thẳng.`;
  else if (days < FULL_DAYS)
    text = `Ngày ${days}: ánh sáng chỉ lọt vào qua lỗ ở thành bên, ngọn cây bắt đầu cong về phía lỗ.`;
  else
    text = `Ngày ${days}: thân cây đã uốn cong hẳn về phía lỗ thủng có ánh sáng. Kết luận: thân (ngọn) cây có tính hướng sáng.`;
  return { bend, text };
}

/** @param {number} days */
export function waterOutcome(days) {
  const test = rootBend('phai', days);
  const control = rootBend('khong', days);
  /** @type {string} */
  let text;
  if (days === 0) text = 'Ngày 0: vừa đặt chai nước đục lỗ cạnh chậu thí nghiệm.';
  else if (days < 3)
    text = `Ngày ${days}: nên chờ ít nhất 3 ngày rồi mới nhấc cây ra quan sát; lúc này rễ mới lệch rất ít.`;
  else
    text = `Ngày ${days}: rễ cây trong chậu thí nghiệm mọc lệch về phía chai nước, rễ cây trong chậu đối chứng mọc thẳng. Kết luận: rễ cây có tính hướng nước.`;
  return { test, control, text };
}

/**
 * @param {boolean} support @param {number} days
 */
export function contactOutcome(support, days) {
  const turns = tendrilTurns(support, days);
  // Without a support, the long weak stem falls over and creeps on the ground.
  const sprawl = support ? 0 : Math.min(80, Math.max(0, days - 1) * 27);
  /** @type {string} */
  let text;
  if (days === 0) text = 'Ngày 0: cây non vừa có tua cuốn đầu tiên.';
  else if (support)
    text =
      days < FULL_DAYS
        ? `Ngày ${days}: tua cuốn chạm vào cọc và bắt đầu quấn quanh cọc.`
        : `Ngày ${days}: tua cuốn đã quấn chặt quanh cọc, thân cây leo lên cao. Kết luận: tua cuốn có tính hướng tiếp xúc.`;
  else
    text = `Ngày ${days}: không có vật để bám, thân cây mềm yếu ngả xuống và bò lan trên mặt đất.`;
  return { turns, sprawl, text };
}

/**
 * Points of a tendril winding `turns` times round a stake at x = `x` between
 * heights `top` and `bottom` (SVG y), as a polyline string.
 * @param {number} x @param {number} top @param {number} bottom @param {number} turns
 */
export function coilPoints(x, top, bottom, turns) {
  if (turns <= 0) return '';
  const steps = Math.max(2, Math.round(turns * 12));
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const f = i / steps;
    const px = x + 5 * Math.sin(f * turns * 2 * Math.PI);
    const py = bottom - f * (bottom - top);
    pts.push(`${Math.round(px * 10) / 10},${Math.round(py * 10) / 10}`);
  }
  return pts.join(' ');
}
