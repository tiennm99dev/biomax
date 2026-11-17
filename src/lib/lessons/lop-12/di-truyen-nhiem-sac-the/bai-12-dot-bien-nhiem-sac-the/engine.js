/**
 * What each structural chromosome change does, written for the widget's
 * feedback line, and the presets of the numerical-change widget.
 */

import { cenIndex, geneText, isCen } from '../_shared/mutations.js';

/**
 * The feedback after a structural change of segment `seg` of chromosome A.
 * @param {import('../_shared/mutations.js').StructuralOp} op
 * @param {{ a: import('../_shared/mutations.js').Gene[], b: import('../_shared/mutations.js').Gene[] }} before
 * @param {{ a: import('../_shared/mutations.js').Gene[], b: import('../_shared/mutations.js').Gene[] }} after
 * @param {number} lo first index of the segment in `before.a`
 * @param {number} hi last index of the segment in `before.a`
 */
export function explain(op, before, after, lo, hi) {
  const seg = geneText(before.a.slice(lo, hi + 1));
  const nBefore = before.a.filter((g) => !isCen(g)).length;
  const nAfter = after.a.filter((g) => !isCen(g)).length;
  switch (op) {
    case 'mat':
      return `Mất đoạn ${seg}: nhiễm sắc thể còn ${nAfter} gene (trước đó ${nBefore}). Mất gene làm mất cân bằng hệ gene, thường gây chết hoặc giảm sức sống; ví dụ mất một đoạn vai ngắn NST số 5 ở người gây hội chứng mèo kêu.`;
    case 'lap':
      return `Lặp đoạn ${seg}: đoạn này có thêm một bản sao, số gene tăng từ ${nBefore} lên ${nAfter}. Liều gene tăng có thể làm thay đổi mức biểu hiện tính trạng; ví dụ lặp đoạn trên NST X ở ruồi giấm làm mắt lồi thành mắt dẹt.`;
    case 'dao': {
      const c = cenIndex(before.a);
      const withCen = c >= lo && c <= hi;
      return `Đảo đoạn ${seg} quay 180° ${withCen ? '(đoạn đảo có chứa tâm động, nên vị trí tâm động cũng đổi)' : '(đoạn đảo không chứa tâm động)'}: số gene giữ nguyên ${nAfter}, chỉ trật tự gene thay đổi. Gene đổi vị trí có thể thay đổi mức hoạt động; thể dị hợp mang đảo đoạn thường giảm khả năng sinh sản.`;
    }
    case 'chuyen': {
      const gotB = geneText(
        after.a.filter((g) => g.home === 'B' && !before.a.some((x) => x.id === g.id)),
      );
      return `Chuyển đoạn tương hỗ: đoạn ${seg} sang nhiễm sắc thể kia, đổi lại đoạn ${gotB} (màu xanh) sang nhiễm sắc thể này. Các gene đổi nhóm liên kết; ví dụ chuyển đoạn tương hỗ giữa NST số 9 và số 22 ở người gây bệnh ung thư máu (bạch cầu dòng tuỷ mạn tính).`;
    }
  }
}

/**
 * Presets of the numerical-change widget: counts of the four groups of a
 * plant with 2n = 8.
 */
export const COUNT_PRESETS = [
  { id: '2n', label: '2n', counts: [2, 2, 2, 2] },
  { id: '2n+1', label: '2n + 1', counts: [2, 2, 3, 2] },
  { id: '2n-1', label: '2n − 1', counts: [2, 1, 2, 2] },
  { id: '3n', label: '3n', counts: [3, 3, 3, 3] },
  { id: '4n', label: '4n', counts: [4, 4, 4, 4] },
];

/**
 * What a numerical verdict means for the plant, for the feedback line.
 * @param {import('../_shared/mutations.js').CountVerdict} v
 */
export function countMeaning(v) {
  switch (v.kind) {
    case 'binh-thuong':
      return 'Mỗi nhóm có đúng 2 nhiễm sắc thể tương đồng: bộ lưỡng bội bình thường.';
    case 'don-boi':
      return 'Mỗi nhóm chỉ còn 1 chiếc: đây là bộ đơn bội như ở giao tử.';
    case 'da-boi':
      return v.notation === '3n' || v.notation === '5n'
        ? 'Mọi nhóm đều tăng như nhau thành số lẻ bộ đơn bội: đa bội lẻ. Các NST không bắt cặp đều khi giảm phân nên cây thường bất thụ, tạo quả không hạt (chuối, dưa hấu tam bội).'
        : 'Mọi nhóm đều tăng như nhau thành số chẵn bộ đơn bội: đa bội chẵn. Tế bào to, cơ quan sinh dưỡng lớn, sinh trưởng mạnh và có thể vẫn sinh sản hữu tính.';
    case 'lech-boi':
      return 'Chỉ một hoặc vài nhóm thay đổi số lượng: lệch bội. Cân bằng hệ gene bị phá vỡ nên thể lệch bội thường giảm sức sống, giảm khả năng sinh sản hoặc chết.';
  }
}
