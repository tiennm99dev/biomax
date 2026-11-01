/**
 * The career map of biology: the fields where biology is applied, the jobs in
 * each field, the real situations a learner places on the map, and the daily
 * actions sorted by their effect on sustainable development.
 */

/**
 * @typedef {{ name: string, work: string }} Job
 * @typedef {{
 *   id: string;
 *   name: string;
 *   use: string;
 *   achievement: string;
 *   jobs: Job[];
 * }} Field
 * @typedef {{ id: string, text: string, field: string, why: string }} CareerCase
 */

/** @type {Field[]} */
export const FIELDS = [
  {
    id: 'y-duoc',
    name: 'Y dược',
    use: 'Phòng bệnh, chẩn đoán, chữa bệnh và sản xuất thuốc.',
    achievement:
      'Giải trình tự gene giúp tạo ra thuốc hướng đích, tác động đúng vào tế bào bệnh như một số tế bào ung thư.',
    jobs: [
      {
        name: 'Bác sĩ đa khoa',
        work: 'Khám, chẩn đoán, điều trị bệnh và tư vấn cho người bệnh cách giữ gìn sức khoẻ.',
      },
      {
        name: 'Dược sĩ',
        work: 'Nghiên cứu, sản xuất, kiểm tra chất lượng thuốc và hướng dẫn dùng thuốc an toàn.',
      },
      {
        name: 'Điều dưỡng',
        work: 'Theo dõi, chăm sóc người bệnh và phối hợp với bác sĩ trong quá trình điều trị.',
      },
    ],
  },
  {
    id: 'phap-y',
    name: 'Pháp y',
    use: 'Dùng hiểu biết về cơ thể và DNA để phục vụ điều tra và an ninh xã hội.',
    achievement:
      'Phân tích DNA giúp truy tìm tội phạm, xác định huyết thống và tìm thân nhân của nạn nhân.',
    jobs: [
      {
        name: 'Giám định viên pháp y',
        work: 'Khám nghiệm và kết luận về thương tích hoặc nguyên nhân tử vong để phục vụ điều tra.',
      },
      {
        name: 'Kĩ thuật viên phân tích DNA',
        work: 'Tách DNA từ mẫu sinh học, so sánh các mẫu để xác định danh tính hoặc huyết thống.',
      },
    ],
  },
  {
    id: 'nong-lam-ngu',
    name: 'Nông, lâm, ngư nghiệp',
    use: 'Tạo giống và chăm sóc cây trồng, vật nuôi; quản lí rừng và nguồn lợi thuỷ sản.',
    achievement:
      'Công nghệ chuyển gene tạo giống có năng suất, chất lượng cao; nhân giống vô tính giúp nhân nhanh cây lâu năm.',
    jobs: [
      {
        name: 'Kĩ sư trồng trọt',
        work: 'Chọn giống, xây dựng quy trình canh tác và phòng trừ sâu bệnh cho cây trồng.',
      },
      {
        name: 'Kĩ sư chăn nuôi',
        work: 'Chọn giống vật nuôi, xây dựng khẩu phần và quy trình chăm sóc, phòng bệnh.',
      },
      {
        name: 'Kĩ sư nuôi trồng thuỷ sản',
        work: 'Nhân giống, nuôi tôm, cá và các loài thuỷ sản khác; quản lí môi trường ao nuôi.',
      },
      {
        name: 'Cán bộ quản lí tài nguyên rừng',
        work: 'Theo dõi, bảo vệ, phục hồi rừng và lập kế hoạch khai thác rừng hợp lí.',
      },
    ],
  },
  {
    id: 'thuc-pham',
    name: 'Công nghệ thực phẩm',
    use: 'Chế biến, bảo quản thực phẩm an toàn và giàu dinh dưỡng.',
    achievement:
      'Dùng vi sinh vật có lợi để làm sữa chua và nhiều sản phẩm lên men; phát triển các cách bảo quản thực phẩm lâu dài.',
    jobs: [
      {
        name: 'Kĩ sư công nghệ thực phẩm',
        work: 'Thiết kế sản phẩm và quy trình chế biến, vận hành dây chuyền sản xuất thực phẩm.',
      },
      {
        name: 'Kiểm nghiệm viên thực phẩm',
        work: 'Kiểm tra vi sinh vật và thành phần của thực phẩm để bảo đảm an toàn cho người dùng.',
      },
    ],
  },
  {
    id: 'moi-truong',
    name: 'Bảo vệ môi trường',
    use: 'Đánh giá tác động đến môi trường, xử lí ô nhiễm và bảo tồn đa dạng sinh học.',
    achievement:
      'Dùng vi khuẩn để làm sạch nơi nhiễm phóng xạ (Deinococcus radiodurans) và xử lí nước nhiễm kim loại nặng (Shewanella oneidensis).',
    jobs: [
      {
        name: 'Chuyên viên xử lí ô nhiễm sinh học',
        work: 'Chọn và dùng các sinh vật, nhất là vi sinh vật, để phân giải hoặc loại bỏ chất gây ô nhiễm.',
      },
      {
        name: 'Cán bộ bảo tồn',
        work: 'Khảo sát loài và sinh cảnh, lập kế hoạch bảo vệ các loài quý hiếm.',
      },
    ],
  },
  {
    id: 'che-tao',
    name: 'Chế tạo theo sinh vật',
    use: 'Dựa vào nguyên lí vận hành của cơ thể sinh vật để làm ra máy móc và thiết bị tốt hơn.',
    achievement:
      'Nhiều robot và thiết bị bắt chước cách sinh vật vận động; bộ phận cơ thể nhân tạo giúp người khuyết tật.',
    jobs: [
      {
        name: 'Kĩ sư kĩ thuật y sinh',
        work: 'Chế tạo, bảo trì thiết bị y tế và thiết kế các giải pháp y học như bộ phận cơ thể nhân tạo.',
      },
      {
        name: 'Kĩ sư mô phỏng sinh học',
        work: 'Nghiên cứu cấu tạo và vận động của sinh vật rồi áp dụng vào robot, vật liệu và máy móc.',
      },
    ],
  },
];

/** @type {CareerCase[]} */
export const CASES = [
  {
    id: 'huyet-thong',
    text: 'So sánh DNA của hai người để xác định họ có quan hệ huyết thống không.',
    field: 'phap-y',
    why: 'Xác định huyết thống bằng DNA là một công việc của pháp y.',
  },
  {
    id: 'huong-dich',
    text: 'Dựa vào trình tự gene của tế bào ung thư để tìm thuốc tác động đúng vào tế bào đó.',
    field: 'y-duoc',
    why: 'Thuốc hướng đích là thành tựu của y dược nhờ giải trình tự gene.',
  },
  {
    id: 'lua',
    text: 'Chuyển gene để tạo giống lúa cho năng suất cao hơn.',
    field: 'nong-lam-ngu',
    why: 'Tạo giống cây trồng là ứng dụng của sinh học trong nông nghiệp.',
  },
  {
    id: 'sua-chua',
    text: 'Điều chỉnh giống vi khuẩn và nhiệt độ ủ để sữa chua thơm ngon, an toàn.',
    field: 'thuc-pham',
    why: 'Sữa chua là sản phẩm lên men của công nghệ thực phẩm.',
  },
  {
    id: 'kim-loai',
    text: 'Dùng vi khuẩn để xử lí nguồn nước bị nhiễm kim loại nặng.',
    field: 'moi-truong',
    why: 'Dùng sinh vật để xử lí ô nhiễm là công việc bảo vệ môi trường.',
  },
  {
    id: 'robot',
    text: 'Thiết kế robot bốn chân dựa trên cách di chuyển của động vật.',
    field: 'che-tao',
    why: 'Bắt chước nguyên lí vận hành của sinh vật để làm máy móc là chế tạo theo sinh vật.',
  },
  {
    id: 'than-nhan',
    text: 'Dùng mẫu DNA để tìm thân nhân cho nạn nhân chưa rõ danh tính.',
    field: 'phap-y',
    why: 'Xác định danh tính nạn nhân bằng DNA thuộc về pháp y.',
  },
  {
    id: 'tom',
    text: 'Chọn giống tôm khoẻ và giữ môi trường ao nuôi sạch để tôm ít bệnh.',
    field: 'nong-lam-ngu',
    why: 'Nuôi trồng thuỷ sản thuộc ngành ngư nghiệp.',
  },
];

/**
 * The verdict on placing a situation in a field.
 * @param {CareerCase} item @param {string} fieldId
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeCase(item, fieldId) {
  if (fieldId === item.field) return { ok: true, text: `Đúng. ${item.why}` };
  const chosen = FIELDS.find((f) => f.id === fieldId);
  return {
    ok: false,
    text: `Chưa đúng. ${chosen ? `${chosen.name} là để: ${lowerFirst(chosen.use)}` : ''} Hãy xét xem công việc này nhằm mục đích gì rồi chọn lại.`,
  };
}

/** @param {string} s */
function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export const SUSTAIN_BINS = [
  { id: 'gop-phan', label: 'Góp phần phát triển bền vững' },
  { id: 'can-tro', label: 'Cản trở phát triển bền vững' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const SUSTAIN_CARDS = [
  {
    id: 'phan-loai-rac',
    label: 'Phân loại rác tại nguồn',
    bin: 'gop-phan',
    why: 'Rác được tái chế, xử lí đúng cách nên giảm ô nhiễm và tiết kiệm tài nguyên.',
  },
  {
    id: 'rung-dau-nguon',
    label: 'Bảo vệ rừng đầu nguồn',
    bin: 'gop-phan',
    why: 'Rừng giữ nước, chống xói mòn và là nơi sống của nhiều loài.',
  },
  {
    id: 'nang-luong-sach',
    label: 'Dùng năng lượng gió, năng lượng Mặt Trời',
    bin: 'gop-phan',
    why: 'Đây là các nguồn năng lượng tái tạo, thế hệ sau vẫn dùng được.',
  },
  {
    id: 'dong-vat-quy',
    label: 'Bảo vệ các loài động vật quý hiếm',
    bin: 'gop-phan',
    why: 'Giữ gìn sự đa dạng của sinh giới cho cả các thế hệ sau.',
  },
  {
    id: 'vut-rac',
    label: 'Vứt rác bừa bãi',
    bin: 'can-tro',
    why: 'Rác gây ô nhiễm đất, nước và ảnh hưởng đến sức khoẻ con người.',
  },
  {
    id: 'xa-thai',
    label: 'Xả chất thải chưa qua xử lí vào môi trường',
    bin: 'can-tro',
    why: 'Chất thải làm ô nhiễm nguồn nước, đất và gây hại cho sinh vật.',
  },
  {
    id: 'khai-thac-rung',
    label: 'Khai thác rừng quá mức',
    bin: 'can-tro',
    why: 'Rừng mất nhanh hơn khả năng phục hồi, thế hệ sau không còn tài nguyên để dùng.',
  },
  {
    id: 'san-bat',
    label: 'Săn bắt động vật hoang dã quá mức',
    bin: 'can-tro',
    why: 'Làm suy giảm số lượng loài và phá vỡ cân bằng của hệ sinh thái.',
  },
];
