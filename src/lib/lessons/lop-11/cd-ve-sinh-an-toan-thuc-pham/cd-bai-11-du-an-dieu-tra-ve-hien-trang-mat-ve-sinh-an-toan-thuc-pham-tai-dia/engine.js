/**
 * The survey map of the project: food selling points on a small map of a
 * neighbourhood, each with field notes. The learner fills one evaluation
 * form per point (one tick per criterion met); the form is compared with the
 * notes, each point gets a rating that colours its pin, and the results of
 * all the evaluated points show which criterion fails most and what to
 * propose. Made-up points for practising, not real shops. No DOM here, so it
 * is tested in Node.
 */
import { tidy } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, text: string, fix: string }} Criterion
 * @typedef {{
 *   id: string, name: string, kind: string, x: number, y: number,
 *   notes: string, meets: string[],
 * }} Place
 * @typedef {Record<string, string[]>} Forms place id to the criteria ticked
 * @typedef {{ id: 'dat' | 'can-cai-thien' | 'khong-dat', name: string, tone: 'ok' | 'info' | 'warn' }} Rating
 */

/** @type {Criterion[]} */
export const CRITERIA = [
  {
    id: 'nguon-goc',
    text: 'Thực phẩm rõ nguồn gốc, còn hạn dùng, không dùng chất bảo quản lạ',
    fix: 'Người bán chỉ nhập hàng có nguồn gốc, lưu hoá đơn, không dùng hoá chất bảo quản lạ; người mua đọc nhãn, hạn dùng; chính quyền kiểm tra, xử lí hàng không rõ nguồn gốc.',
  },
  {
    id: 'che-day',
    text: 'Thực phẩm được che đậy, bày cao khỏi mặt đất, tránh ruồi, bụi',
    fix: 'Dùng tủ kính, lồng bàn, hộp có nắp; bày hàng trên kệ cao, không bày sát lề đường.',
  },
  {
    id: 'song-chin',
    text: 'Để riêng thực phẩm sống và thực phẩm chín',
    fix: 'Dùng khay, thớt, dao riêng cho đồ sống và đồ chín; tập huấn cho người bán về ô nhiễm chéo.',
  },
  {
    id: 'nguoi-ban',
    text: 'Người bán mặc trang phục sạch, dùng kẹp, găng tay khi lấy thức ăn chín',
    fix: 'Tập huấn kiến thức an toàn thực phẩm, khám sức khoẻ định kì cho người bán; trang bị kẹp, găng tay.',
  },
  {
    id: 'nuoc-sach',
    text: 'Có nước sạch để rửa tay, rửa dụng cụ',
    fix: 'Trang bị thùng nước sạch có vòi, xà phòng; không rửa bát trong xô nước dùng lại nhiều lần.',
  },
  {
    id: 'bao-quan',
    text: 'Bảo quản đúng cách: thực phẩm tươi sống, đồ dễ hỏng được giữ lạnh',
    fix: 'Dùng tủ lạnh, thùng đá cho thịt, cá, sữa; không để đồ tươi sống ngoài trời nhiều giờ.',
  },
  {
    id: 'rac',
    text: 'Nơi bán sạch, khô ráo; rác có thùng đậy nắp',
    fix: 'Đặt thùng rác có nắp, thu gom rác, nước thải hằng ngày; tổ dân phố tổ chức dọn vệ sinh khu bán hàng.',
  },
];

/** Made-up points of a neighbourhood map, with field notes. */
/** @type {Place[]} */
export const PLACES = [
  {
    id: 'cho',
    name: 'Quầy thịt chợ sáng',
    kind: 'Chợ',
    x: 20,
    y: 24,
    notes:
      'Thịt lợn có dấu kiểm dịch, bày trên phản gỗ không che, ruồi bâu. Thịt sống và lòng luộc để chung một mẹt. Người bán dùng tay trần. Không có tủ lạnh; nước rửa là một xô nước đục. Rác, nước thải đổ ngay dưới chân phản.',
    meets: ['nguon-goc'],
  },
  {
    id: 'pho',
    name: 'Quán phở vỉa hè',
    kind: 'Quán ăn',
    x: 72,
    y: 20,
    notes:
      'Bánh phở, thịt nhập từ cơ sở quen, không có hoá đơn. Thịt chín để trong tủ kính, thịt bò tái để riêng một khay. Người bán đeo tạp dề, gắp bằng đũa. Bát rửa trong chậu nước dùng lại nhiều lần. Thịt tươi để trong thùng đá. Có thùng rác đậy nắp.',
    meets: ['che-day', 'song-chin', 'nguoi-ban', 'bao-quan', 'rac'],
  },
  {
    id: 'can-tin',
    name: 'Căng tin trường',
    kind: 'Bếp ăn tập thể',
    x: 50,
    y: 50,
    notes:
      'Có sổ ghi nguồn nhập hàng, lưu mẫu thức ăn. Thức ăn chín trong tủ kính. Bếp có khu sơ chế đồ sống riêng. Nhân viên đội mũ, đeo găng tay, khẩu trang. Có bồn rửa, nước máy, xà phòng. Có tủ lạnh, tủ đông. Sàn khô, rác trong thùng có nắp.',
    meets: ['nguon-goc', 'che-day', 'song-chin', 'nguoi-ban', 'nuoc-sach', 'bao-quan', 'rac'],
  },
  {
    id: 'sieu-thi',
    name: 'Cửa hàng tiện lợi',
    kind: 'Cửa hàng',
    x: 82,
    y: 70,
    notes:
      'Hàng đóng gói có nhãn, còn hạn dùng; sữa, xúc xích trong tủ mát. Đồ ăn chín bán sẵn để trong tủ kính, đồ tươi sống bọc kín ở quầy khác. Nhân viên lấy đồ ăn bằng kẹp, đeo găng. Cửa hàng không có chỗ rửa tay, rửa dụng cụ cho nhân viên. Cửa hàng sạch, rác có thùng đậy.',
    meets: ['nguon-goc', 'che-day', 'song-chin', 'nguoi-ban', 'bao-quan', 'rac'],
  },
  {
    id: 'banh-mi',
    name: 'Xe bánh mì đẩy',
    kind: 'Hàng rong',
    x: 22,
    y: 66,
    notes:
      'Pate, chả không có nhãn, không rõ nơi làm. Bánh mì để trong tủ kính trên xe. Chỉ bán đồ chín. Người bán vừa cầm tiền vừa bốc chả bằng tay. Không có nước rửa tay. Pate để ngoài trời cả buổi. Xe đỗ cạnh đống rác.',
    meets: ['che-day', 'song-chin'],
  },
  {
    id: 'hoa-qua',
    name: 'Sạp hoa quả',
    kind: 'Chợ',
    x: 56,
    y: 92,
    notes:
      'Hoa quả nhập từ chợ đầu mối, có hoá đơn; một số quả ngâm trong thuốc lạ cho lâu hỏng (người bán không cho biết tên). Quả bày trên kệ cao, có lưới che. Chỉ bán quả tươi, không có đồ chín. Người bán gọn gàng. Có thùng nước sạch. Quả chín để nơi thoáng mát, quả dập được loại riêng. Rác vỏ quả cho vào bao buộc kín.',
    meets: ['che-day', 'song-chin', 'nguoi-ban', 'nuoc-sach', 'bao-quan', 'rac'],
  },
];

/** @type {Rating[]} */
export const RATINGS = [
  { id: 'dat', name: 'Đạt', tone: 'ok' },
  { id: 'can-cai-thien', name: 'Cần cải thiện', tone: 'info' },
  { id: 'khong-dat', name: 'Không đạt', tone: 'warn' },
];

/** @param {string} id */
export const placeOf = (id) => PLACES.find((p) => p.id === id) ?? null;
/** @param {string} id */
export const criterionOf = (id) => CRITERIA.find((c) => c.id === id) ?? null;

/** The criterion a point must meet to be rated "Đạt": unsafe goods outweigh a clean stall. */
export const REQUIRED = 'nguon-goc';

/**
 * The share of criteria met, in whole percent, and the rating: at least 80%
 * is "Đạt", at least 50% "Cần cải thiện", below that "Không đạt". A point
 * that fails the required criterion is at best "Cần cải thiện".
 * @param {string[]} ticked
 */
export function rate(ticked) {
  const met = CRITERIA.filter((c) => ticked.includes(c.id)).length;
  const percent = Math.round(tidy((met / CRITERIA.length) * 100, 6));
  const top = ticked.includes(REQUIRED) ? 'dat' : 'can-cai-thien';
  const id = percent >= 80 ? top : percent >= 50 ? 'can-cai-thien' : 'khong-dat';
  return {
    met,
    percent,
    rating: /** @type {Rating} */ (RATINGS.find((r) => r.id === id)),
  };
}

/**
 * Compares a filled form with the field notes of the point.
 * @param {string} placeId @param {string[]} ticked
 * @returns {{ tone: 'ok' | 'warn', text: string, extra: Criterion[], missed: Criterion[] }}
 */
export function compareWithNotes(placeId, ticked) {
  const place = placeOf(placeId);
  if (!place) return { tone: 'warn', text: 'Chọn một điểm trên bản đồ.', extra: [], missed: [] };
  const extra = CRITERIA.filter((c) => ticked.includes(c.id) && !place.meets.includes(c.id));
  const missed = CRITERIA.filter((c) => !ticked.includes(c.id) && place.meets.includes(c.id));
  if (!extra.length && !missed.length) {
    return {
      tone: 'ok',
      text: 'Phiếu khớp với ghi chép quan sát.',
      extra,
      missed,
    };
  }
  const parts = [];
  if (extra.length) {
    parts.push(
      `đánh dấu đạt nhưng ghi chép cho thấy chưa đạt: ${extra.map((c) => c.text.toLowerCase()).join('; ')}`,
    );
  }
  if (missed.length) {
    parts.push(
      `ghi chép cho thấy đạt nhưng chưa đánh dấu: ${missed.map((c) => c.text.toLowerCase()).join('; ')}`,
    );
  }
  return {
    tone: 'warn',
    text: `Đọc lại ghi chép. Phiếu có tiêu chí ${parts.join('. Có tiêu chí ')}.`,
    extra,
    missed,
  };
}

/** The forms filled from the field notes, to check the summary. */
export function sampleForms() {
  return /** @type {Forms} */ (Object.fromEntries(PLACES.map((p) => [p.id, [...p.meets]])));
}

/**
 * The results of all evaluated points: how many meet each criterion, the
 * count of each rating and the criterion met least, with a proposal.
 * @param {Forms} forms
 */
export function summary(forms) {
  const done = PLACES.filter((p) => forms[p.id]);
  const n = done.length;
  const byCriterion = CRITERIA.map((c) => {
    const met = done.filter((p) => forms[p.id].includes(c.id)).length;
    return { ...c, met, percent: n ? Math.round(tidy((met / n) * 100, 6)) : 0 };
  });
  const byRating = RATINGS.map((r) => ({
    ...r,
    count: done.filter((p) => rate(forms[p.id]).rating.id === r.id).length,
  }));
  const least = n ? byCriterion.reduce((a, b) => (b.met < a.met ? b : a)) : null;
  // When every evaluated point meets every criterion there is nothing to fix.
  const weakest = least && least.met < n ? least : null;
  return { evaluated: n, byCriterion, byRating, weakest };
}
