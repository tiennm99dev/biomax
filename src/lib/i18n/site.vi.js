export const site = {
  title: 'BioMax',
  repo: 'https://github.com/tiennm99dev/biomax',
  tagline: 'Sinh học tương tác cho học sinh lớp 6-12',
  description:
    'BioMax giúp học sinh lớp 6-12 học Sinh học theo sách Kết nối tri thức với cuộc sống qua mô hình tương tác: sơ đồ tế bào và cơ quan, bảng Punnett, phả hệ, lưới thức ăn, dịch mã DNA và đồ thị quần thể.',
};

export const home = {
  gradesTitle: 'Chọn lớp',
  strandsTitle: 'Học theo mạch kiến thức',
  /** @param {number} chapters @param {number} lessons */
  gradeSummary: (chapters, lessons) => `${chapters} chương · ${lessons} bài`,
};

/**
 * School levels on the home page, each with its grade range. Grades 6-9 follow
 * the biology strand of the Khoa học tự nhiên book.
 */
export const levels = [
  { title: 'Trung học cơ sở (Khoa học tự nhiên)', from: 6, to: 9 },
  { title: 'Trung học phổ thông', from: 10, to: 12 },
];

/** @type {Record<string, string>} */
export const grades = Object.fromEntries(
  Array.from({ length: 12 }, (_, i) => [`lop-${i + 1}`, `Lớp ${i + 1}`]),
);

/** @type {Record<import('#lib/curriculum/index.js').LessonKind, string>} */
export const kinds = {
  theory: 'Lý thuyết',
  practice: 'Luyện tập',
  review: 'Ôn tập',
  activity: 'Hoạt động',
  'chuyen-de': 'Chuyên đề',
};

/**
 * Strand hubs across grades, keyed by the curriculum `strand` slug.
 * @type {Record<string, { title: string, blurb: string }>}
 */
export const strands = {
  'te-bao': {
    title: 'Tế bào',
    blurb:
      'Tế bào là đơn vị của sự sống: thành phần hoá học, cấu trúc, trao đổi chất qua màng, chuyển hoá năng lượng và phân bào.',
  },
  'da-dang-the-gioi-song': {
    title: 'Đa dạng thế giới sống',
    blurb:
      'Phân loại sinh vật, khoá lưỡng phân, virus, vi khuẩn, nguyên sinh vật, nấm, thực vật và động vật.',
  },
  'trao-doi-chat': {
    title: 'Trao đổi chất và chuyển hoá năng lượng',
    blurb:
      'Quang hợp, hô hấp tế bào, trao đổi khí, trao đổi nước và chất dinh dưỡng ở thực vật và động vật.',
  },
  'cam-ung': {
    title: 'Cảm ứng ở sinh vật',
    blurb: 'Hướng động, ứng động, phản xạ, hệ thần kinh và tập tính của động vật.',
  },
  'sinh-truong-phat-trien': {
    title: 'Sinh trưởng và phát triển',
    blurb: 'Mô phân sinh, hormone thực vật và động vật, vòng đời và các yếu tố ảnh hưởng.',
  },
  'sinh-san': {
    title: 'Sinh sản ở sinh vật',
    blurb: 'Sinh sản vô tính, hữu tính ở thực vật và động vật, điều hoà sinh sản và ứng dụng.',
  },
  'co-the-nguoi': {
    title: 'Sinh học cơ thể người',
    blurb:
      'Các hệ cơ quan: vận động, tiêu hoá, tuần hoàn, hô hấp, bài tiết, thần kinh, nội tiết và sinh sản.',
  },
  'sinh-thai': {
    title: 'Sinh thái học',
    blurb:
      'Môi trường, quần thể, quần xã, hệ sinh thái, chuỗi và lưới thức ăn, bảo tồn và phát triển bền vững.',
  },
  'di-truyen': {
    title: 'Di truyền học',
    blurb:
      'Gene, DNA, mã di truyền, quy luật Mendel, nhiễm sắc thể, đột biến, phả hệ và di truyền quần thể.',
  },
  'tien-hoa': {
    title: 'Tiến hoá',
    blurb:
      'Bằng chứng tiến hoá, chọn lọc tự nhiên, các học thuyết tiến hoá và sự phát sinh sự sống.',
  },
  'mo-dau': {
    title: 'Mở đầu',
    blurb: 'Môn Sinh học, phương pháp nghiên cứu và các cấp độ tổ chức của thế giới sống.',
  },
  'vi-sinh-vat-virus': {
    title: 'Vi sinh vật và virus',
    blurb:
      'Dinh dưỡng, sinh trưởng và ứng dụng của vi sinh vật; cấu tạo, nhân lên và bệnh do virus.',
  },
  'chuyen-de': {
    title: 'Chuyên đề học tập',
    blurb: 'Các chuyên đề Sinh học 10, 11, 12 mở rộng theo hướng thực hành và ứng dụng.',
  },
  'sinh-hoc-co-the': {
    title: 'Sinh học cơ thể',
    blurb:
      'Trao đổi chất ở thực vật và động vật, mối quan hệ giữa các quá trình sinh lí và ngành nghề liên quan.',
  },
};
