/**
 * The survey board of the project. On a practice map, the learner places the
 * right technology on each polluting site. Then each group writes survey notes
 * for the real places it visits, and the notes become a draft report. Nothing is
 * stored outside the page. No DOM here, so all of it is tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/** @type {Array<{ id: string, name: string }>} */
export const TECHS = [
  { id: 'biogas', name: 'Hầm khí sinh học' },
  { id: 'u-phan', name: 'Ủ phân hữu cơ' },
  { id: 'tram', name: 'Trạm xử lí nước thải nhiều bể' },
  { id: 'dat', name: 'Xử lí đất tại chỗ, bổ sung N, P, thông khí' },
  { id: 'ao', name: 'Sục khí và chế phẩm vi sinh trong ao' },
];

/**
 * A practice site; `left` and `top` are its place on the map in %, and `also`
 * lists technologies that also work, though less well.
 * @typedef {{
 *   id: string,
 *   name: string,
 *   left: number,
 *   top: number,
 *   problem: string,
 *   best: string,
 *   also: string[],
 *   why: string,
 * }} Site
 */

/** @type {Site[]} */
export const SITES = [
  {
    id: 'trang-trai',
    name: 'Trang trại lợn',
    left: 16,
    top: 20,
    problem: 'Phân và nước rửa chuồng giàu chất hữu cơ, gây mùi hôi.',
    best: 'biogas',
    also: ['u-phan'],
    why: 'Trong hầm kín, vi sinh vật kị khí tạo khí đốt để dùng lại, còn bã thải làm phân bón.',
  },
  {
    id: 'khu-dan-cu',
    name: 'Khu dân cư',
    left: 72,
    top: 16,
    problem: 'Rác sinh hoạt, trong đó nhiều vỏ rau và thức ăn thừa.',
    best: 'u-phan',
    also: ['biogas'],
    why: 'Sau khi phân loại, phần rác hữu cơ được ủ hiếu khí thành phân bón.',
  },
  {
    id: 'nha-may',
    name: 'Nhà máy sữa',
    left: 40,
    top: 44,
    problem: 'Nước thải chế biến sữa rất giàu chất hữu cơ.',
    best: 'tram',
    also: [],
    why: 'Kết hợp lọc, lắng, kị khí và hiếu khí mới đưa được nước thải đậm đặc về mức cho phép.',
  },
  {
    id: 'benh-vien',
    name: 'Bệnh viện',
    left: 80,
    top: 50,
    problem: 'Nước thải y tế chứa chất hữu cơ và nhiều vi sinh vật có thể gây bệnh.',
    best: 'tram',
    also: [],
    why: 'Nước thải y tế cần trạm xử lí riêng trước khi xả ra môi trường.',
  },
  {
    id: 'kho-xang',
    name: 'Kho xăng cũ',
    left: 16,
    top: 76,
    problem: 'Đất ngấm xăng dầu, giàu carbon nhưng thiếu N, P.',
    best: 'dat',
    also: [],
    why: 'Bổ sung N, P và làm thoáng đất để vi sinh vật phân giải hydrocarbon sinh trưởng tốt.',
  },
  {
    id: 'ao-ca',
    name: 'Ao cá',
    left: 58,
    top: 80,
    problem: 'Thức ăn thừa tích tụ, nước đục, thiếu oxygen.',
    best: 'ao',
    also: [],
    why: 'Thêm oxygen giúp vi sinh vật hiếu khí phân giải nhanh thức ăn thừa và chất thải.',
  },
];

/**
 * The verdict on placing a technology on a site.
 * @param {string} siteId
 * @param {string} techId
 * @returns {{ grade: 'best' | 'also' | 'no', text: string }}
 */
export function placeTech(siteId, techId) {
  const site = SITES.find((s) => s.id === siteId);
  if (!site) return { grade: 'no', text: 'Chưa chọn địa điểm.' };
  if (site.best === techId) return { grade: 'best', text: `Phù hợp. ${site.why}` };
  if (site.also.includes(techId)) {
    return {
      grade: 'also',
      text: 'Làm được, nhưng chưa phải cách tốt nhất với chất thải ở đây. Hãy xem còn cách nào tận dụng tốt hơn không.',
    };
  }
  return {
    grade: 'no',
    text: `Chưa phù hợp với vấn đề ở đây: ${site.problem.toLowerCase()} Hãy nghĩ về điều kiện vi sinh vật cần.`,
  };
}

/** The fields of a survey note. */
export const NOTE_FIELDS = [
  {
    id: 'nguon',
    name: 'Nguồn ô nhiễm',
    hint: 'Chất thải gì, từ đâu, khối lượng khoảng bao nhiêu?',
  },
  {
    id: 'cong-nghe',
    name: 'Công nghệ, vi sinh vật',
    hint: 'Hiếu khí hay kị khí? Có dùng chế phẩm vi sinh không?',
  },
  {
    id: 'hieu-qua',
    name: 'Hiệu quả',
    hint: 'Số liệu trước và sau xử lí, sản phẩm thu được.',
  },
  {
    id: 'kho-khan',
    name: 'Khó khăn, đề xuất',
    hint: 'Chi phí, mùi, vận hành; em đề xuất điều gì?',
  },
];

/** @typedef {{ place: string, fields: Record<string, string> }} Note */

/**
 * @param {string} [place]
 * @returns {Note}
 */
export function emptyNote(place = '') {
  return { place, fields: Object.fromEntries(NOTE_FIELDS.map((f) => [f.id, ''])) };
}

/**
 * The fields of a note still left empty.
 * @param {Note} note
 * @returns {string[]}
 */
export function missingFields(note) {
  const blank = NOTE_FIELDS.filter((f) => note.fields[f.id].trim() === '').map((f) => f.name);
  return note.place.trim() === '' ? ['Tên địa điểm', ...blank] : blank;
}

/**
 * Removal efficiency from values before and after, in %, or null when they make
 * no sense (nothing before, or more after than before).
 * @param {number} before
 * @param {number} after
 * @returns {number | null}
 */
export function efficiency(before, after) {
  if (!(before > 0) || after < 0 || after > before) return null;
  return tidy(((before - after) / before) * 100, 1);
}

/**
 * Read a measured value typed with a decimal comma or point.
 * @param {string} text
 * @returns {number | null}
 */
export function readValue(text) {
  const clean = text.trim().replace(',', '.');
  if (!/^\d+(\.\d+)?$/.test(clean)) return null;
  return Number(clean);
}

/**
 * The plain sentence for the calculator.
 * @param {string} beforeText
 * @param {string} afterText
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function efficiencyNote(beforeText, afterText) {
  if (beforeText.trim() === '' || afterText.trim() === '') {
    return { tone: 'info', text: 'Nhập số liệu trước và sau xử lí để tính hiệu suất.' };
  }
  const before = readValue(beforeText);
  const after = readValue(afterText);
  if (before === null || after === null) {
    return { tone: 'warn', text: 'Hãy nhập số, ví dụ 320 hoặc 12,5.' };
  }
  const value = efficiency(before, after);
  if (value === null) {
    return {
      tone: 'warn',
      text: 'Số liệu chưa hợp lí: giá trị trước xử lí phải lớn hơn 0 và không nhỏ hơn giá trị sau xử lí.',
    };
  }
  return { tone: 'ok', text: `Hiệu suất xử lí: ${formatNumber(value, 1)}%.` };
}

/**
 * The draft report built from the notes, ready to copy.
 * @param {Note[]} notes
 * @returns {string}
 */
export function reportText(notes) {
  const used = notes.filter((n) => missingFields(n).length < NOTE_FIELDS.length + 1);
  if (used.length === 0) return 'Chưa có ghi chú khảo sát nào.';
  const parts = used.map((note, i) => {
    const lines = NOTE_FIELDS.map(
      (f) => `- ${f.name}: ${note.fields[f.id].trim() || '(chưa ghi)'}`,
    );
    return [`Điểm ${i + 1}: ${note.place.trim() || '(chưa ghi tên)'}`, ...lines].join('\n');
  });
  return ['BÁO CÁO KHẢO SÁT CÔNG NGHỆ VI SINH VẬT TẠI ĐỊA PHƯƠNG', ...parts].join('\n\n');
}
