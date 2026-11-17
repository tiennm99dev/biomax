/**
 * The survey board of the conservation project. On a practice map of a
 * made-up commune, the learner picks the conservation solution that fits
 * each site. Then the group writes survey notes for the real places it
 * visits, and the notes become a draft report. Nothing is stored outside
 * the page. No DOM here, so all of it is tested in Node.
 */

/** @type {Array<{ id: string, name: string }>} */
export const SOLUTIONS = [
  { id: 'khoanh-vung', name: 'Khoanh vùng bảo vệ, tuần tra, cấm săn bắt và khai thác trái phép' },
  { id: 'trong-rung', name: 'Trồng lại cây bản địa, khôi phục môi trường sống' },
  { id: 'cai-tao', name: 'Xử lí ô nhiễm bằng vi sinh vật, thực vật (cải tạo sinh học)' },
  { id: 'ngoai-lai', name: 'Diệt trừ, kiểm soát loài ngoại lai xâm hại' },
  {
    id: 'chuyen-cho',
    name: 'Đưa về trung tâm cứu hộ, vườn thực vật hoặc ngân hàng hạt giống',
  },
  { id: 'sinh-ke', name: 'Tuyên truyền, tạo sinh kế bền vững, du lịch sinh thái cho người dân' },
];

/**
 * A practice site; `left` and `top` are its place on the map in %, and
 * `also` lists solutions that help, though they do not tackle the main cause.
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
    id: 'rung-nui',
    name: 'Rừng núi đá vôi',
    left: 18,
    top: 18,
    problem: 'Còn đàn voọc và nhiều loài lan quý; người ngoài vào đặt bẫy thú, chặt gỗ trộm.',
    best: 'khoanh-vung',
    also: ['sinh-ke'],
    why: 'Nơi sống còn tốt, mối đe doạ là săn bắt và khai thác trái phép: bảo vệ ngay tại chỗ (bảo tồn nguyên vị) là cách chủ yếu.',
  },
  {
    id: 'doi-troc',
    name: 'Đồi trọc',
    left: 72,
    top: 16,
    problem: 'Rừng bị chặt hết từ lâu, đất bị xói mòn, chỉ còn cỏ dại và cây bụi thưa.',
    best: 'trong-rung',
    also: ['khoanh-vung'],
    why: 'Hệ sinh thái đã suy thoái: cần phục hồi, trồng lại cây bản địa để giữ đất và đưa các loài trở lại.',
  },
  {
    id: 'song',
    name: 'Đoạn sông làng nghề',
    left: 46,
    top: 46,
    problem: 'Nhận nước thải của làng nghề nhuộm vải; nước đen, cá chết hàng loạt.',
    best: 'cai-tao',
    also: ['sinh-ke'],
    why: 'Nguyên nhân là ô nhiễm: dùng vi sinh vật, thực vật thuỷ sinh xử lí nước thải và làm sạch sông, đồng thời buộc xử lí nước thải trước khi xả.',
  },
  {
    id: 'dam-sen',
    name: 'Đầm sen',
    left: 16,
    top: 72,
    problem: 'Ốc bươu vàng ăn hết mầm sen, cây mai dương mọc dày lấn át ven đầm.',
    best: 'ngoai-lai',
    also: [],
    why: 'Ốc bươu vàng và mai dương là loài ngoại lai xâm hại: phải diệt trừ, kiểm soát chúng thì loài bản địa mới phục hồi.',
  },
  {
    id: 'kiem-lam',
    name: 'Trạm kiểm lâm',
    left: 80,
    top: 52,
    problem: 'Vừa thu giữ một số cá thể rùa quý bị buôn bán trái phép, nhiều con bị thương.',
    best: 'chuyen-cho',
    also: [],
    why: 'Rùa bị thương chưa thể thả ngay: cần chăm sóc ở trung tâm cứu hộ (bảo tồn chuyển vị) rồi mới tái thả về nơi sống phù hợp.',
  },
  {
    id: 'bai-boi',
    name: 'Bãi bồi ven biển',
    left: 58,
    top: 82,
    problem:
      'Chim di cư dừng chân kiếm ăn; nhiều hộ dân sống nhờ cào ngao, giăng lưới bắt chim trên bãi.',
    best: 'sinh-ke',
    also: ['khoanh-vung'],
    why: 'Người dân sống nhờ bãi bồi nên chỉ cấm thì khó bền vững: tuyên truyền, tạo sinh kế khác (du lịch sinh thái, nuôi trồng hợp lí) để người dân cùng bảo vệ chim.',
  },
];

/**
 * The verdict on a solution for a site.
 * @param {string} siteId
 * @param {string} solutionId
 * @returns {{ grade: 'best' | 'also' | 'no', text: string }}
 */
export function judge(siteId, solutionId) {
  const site = SITES.find((s) => s.id === siteId);
  if (!site) return { grade: 'no', text: 'Chưa chọn địa điểm.' };
  if (site.best === solutionId) return { grade: 'best', text: `Phù hợp. ${site.why}` };
  if (site.also.includes(solutionId)) {
    return {
      grade: 'also',
      text: 'Có ích, nên kết hợp, nhưng chưa giải quyết nguyên nhân chính ở đây. Hãy tìm giải pháp đánh vào nguyên nhân chính.',
    };
  }
  return {
    grade: 'no',
    text: `Chưa phù hợp với vấn đề ở đây: ${site.problem} Hãy xác định nguyên nhân chính trước.`,
  };
}

/** The topics the book lets a group choose. */
export const TOPICS = [
  'Thực trạng bảo tồn đa dạng sinh vật ở một khu vực',
  'Bảo tồn một loài cụ thể',
  'Phục hồi một hệ sinh thái tự nhiên',
];

/** The fields of a survey note. */
export const NOTE_FIELDS = [
  {
    id: 'thuc-trang',
    name: 'Thực trạng',
    hint: 'Loài, hệ sinh thái nào? Diện tích, số lượng, số liệu đo đếm được.',
  },
  {
    id: 'nguyen-nhan',
    name: 'Nguyên nhân, mối đe doạ',
    hint: 'Mất nơi sống, săn bắt, ô nhiễm, loài ngoại lai, biến đổi khí hậu...?',
  },
  {
    id: 'dang-lam',
    name: 'Biện pháp đang thực hiện',
    hint: 'Ai đang làm gì? Hiệu quả ra sao (theo quan sát, phỏng vấn)?',
  },
  {
    id: 'de-xuat',
    name: 'Giải pháp đề xuất',
    hint: 'Giải pháp nào đánh vào nguyên nhân chính? Ai thực hiện?',
  },
];

/** @typedef {{ place: string, topic: string, fields: Record<string, string> }} Note */

/**
 * @param {string} [place]
 * @returns {Note}
 */
export function emptyNote(place = '') {
  return {
    place,
    topic: TOPICS[0],
    fields: Object.fromEntries(NOTE_FIELDS.map((f) => [f.id, ''])),
  };
}

/**
 * Names of the fields still empty in a note, the place first.
 * @param {Note} note
 * @returns {string[]}
 */
export function missingFields(note) {
  const left = [];
  if (!note.place.trim()) left.push('Tên địa điểm');
  for (const f of NOTE_FIELDS) if (!(note.fields[f.id] ?? '').trim()) left.push(f.name);
  return left;
}

/**
 * The draft report, as plain text the group can copy and finish.
 * @param {Note[]} notes
 */
export function reportText(notes) {
  const used = notes.filter(
    (n) => n.place.trim() || NOTE_FIELDS.some((f) => n.fields[f.id]?.trim()),
  );
  const lines = [
    'BÁO CÁO DỰ ÁN: THỰC TRẠNG BẢO TỒN SINH THÁI TẠI ĐỊA PHƯƠNG VÀ ĐỀ XUẤT GIẢI PHÁP',
    '',
    '1. Mục tiêu: đánh giá thực trạng bảo tồn, phục hồi sinh thái ở địa phương và đề xuất giải pháp nâng cao hiệu quả.',
    '2. Phương pháp: thu thập tài liệu; quan sát, đo đếm, đánh giá tại hiện trường; phỏng vấn người tham gia bảo tồn và người dân.',
    '3. Kết quả khảo sát:',
  ];
  if (used.length === 0) {
    lines.push('   (Chưa có điểm khảo sát nào. Hãy ghi chú ở bước 2.)');
  }
  used.forEach((n, i) => {
    lines.push(`   3.${i + 1}. ${n.place.trim() || '(chưa đặt tên)'} – chủ đề: ${n.topic}`);
    for (const f of NOTE_FIELDS) {
      if (f.id === 'de-xuat') continue;
      lines.push(`      - ${f.name}: ${n.fields[f.id]?.trim() || '(chưa ghi)'}`);
    }
  });
  lines.push('4. Giải pháp đề xuất:');
  const ideas = used.filter((n) => n.fields['de-xuat']?.trim());
  if (ideas.length === 0) lines.push('   (Chưa có đề xuất.)');
  for (const n of ideas)
    lines.push(`   - ${n.place.trim() || '(chưa đặt tên)'}: ${n.fields['de-xuat'].trim()}`);
  lines.push('5. Kết luận: (nhóm tự viết)');
  lines.push('Kèm theo: hình ảnh, bảng số liệu, biên bản phỏng vấn.');
  return lines.join('\n');
}
