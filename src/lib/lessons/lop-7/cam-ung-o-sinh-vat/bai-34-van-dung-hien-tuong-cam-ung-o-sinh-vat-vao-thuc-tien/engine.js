/**
 * Situation cards for the lesson on using response (cảm ứng) and behaviour
 * (tập tính) in practice: each card states a problem from farming, animal
 * husbandry or study, offers three measures, and names the response the right
 * measure makes use of.
 */

/** @typedef {'trong-trot' | 'chan-nuoi' | 'hoc-tap'} Field */

/**
 * @typedef {object} Situation
 * @property {string} id
 * @property {Field} field
 * @property {string} problem
 * @property {string[]} options
 * @property {number} answer index of the right measure
 * @property {string} basis the response or behaviour the measure uses
 * @property {string} hint a nudge shown after a wrong pick
 */

/** @type {Record<Field, string>} */
export const FIELD_NAME = {
  'trong-trot': 'Trồng trọt',
  'chan-nuoi': 'Chăn nuôi',
  'hoc-tap': 'Học tập và đời sống',
};

/** @type {Situation[]} */
export const SITUATIONS = [
  {
    id: 'gian',
    hint: 'Thân cây mướp, bầu có tua cuốn. Tua cuốn phản ứng thế nào khi chạm vào một vật?',
    field: 'trong-trot',
    problem: 'Cây mướp, cây bầu mới trồng bò lan dưới đất, lá dễ bị dập và quả dễ thối.',
    options: [
      'Tưới thật nhiều nước vào gốc',
      'Cắm cọc, làm giàn cho cây leo lên',
      'Thắp đèn cho cây vào ban đêm',
    ],
    answer: 1,
    basis:
      'Tính hướng tiếp xúc: tua cuốn chạm vào cọc, giàn thì quấn quanh và giúp cây vươn lên cao, đón nhiều ánh sáng.',
  },
  {
    id: 'ranh',
    hint: 'Rễ cây mọc về phía có gì?',
    field: 'trong-trot',
    problem:
      'Người trồng muốn bộ rễ cây ăn quả lan rộng ra xung quanh để cây hút được nhiều nước, chất dinh dưỡng.',
    options: [
      'Tưới nước và bón phân theo rãnh quanh mép tán lá',
      'Chỉ đổ phân thật nhiều sát gốc cây',
      'Làm giàn quanh gốc cây',
    ],
    answer: 0,
    basis:
      'Tính hướng nước và hướng hoá: rễ mọc về phía có nước và chất dinh dưỡng, nên rễ lan ra tới rãnh quanh tán.',
  },
  {
    id: 'bay-den',
    hint: 'Côn trùng bay đêm thường bị thu hút bởi điều gì?',
    field: 'trong-trot',
    problem: 'Ruộng lúa có nhiều bướm, rầy bay đến vào ban đêm, đẻ trứng và phá hại lúa.',
    options: [
      'Làm giàn quanh ruộng',
      'Dựng bù nhìn giữa ruộng',
      'Đặt bẫy đèn ban đêm để bắt côn trùng',
    ],
    answer: 2,
    basis:
      'Nhiều loài côn trùng bị ánh sáng đèn thu hút vào ban đêm, bay đến bẫy đèn và bị tiêu diệt, nhờ đó bảo vệ cây trồng.',
  },
  {
    id: 'bu-nhin',
    hint: 'Chim sợ gì nhất khi xuống ruộng?',
    field: 'trong-trot',
    problem: 'Lúa sắp chín, đàn chim sẻ hay sà xuống ruộng ăn thóc.',
    options: [
      'Dựng bù nhìn giống người giữa ruộng',
      'Tưới thêm nước cho ruộng lúa',
      'Đặt bẫy đèn ban đêm',
    ],
    answer: 0,
    basis: 'Chim sợ con người; thấy bù nhìn giống người, chim không dám sà xuống phá lúa.',
  },
  {
    id: 'thanh-long',
    hint: 'Mùa đông cây thiếu điều gì so với mùa hè?',
    field: 'trong-trot',
    problem:
      'Mùa đông ngày ngắn, cây thanh long ít ra hoa; người trồng muốn thu hoạch quả trái vụ.',
    options: [
      'Bón thật nhiều phân sát gốc',
      'Thắp đèn chiếu sáng cho cây vào ban đêm',
      'Tỉa bỏ hết cành non',
    ],
    answer: 1,
    basis:
      'Cây thanh long phản ứng với thời gian chiếu sáng trong ngày; được chiếu đèn thêm vào ban đêm, cây ra hoa ngay cả trong mùa đông.',
  },
  {
    id: 'keng',
    hint: 'Một tín hiệu được lặp lại nhiều lần cùng lúc cho ăn sẽ thành tập tính học được.',
    field: 'chan-nuoi',
    problem: 'Người nuôi muốn đàn trâu bò thả ngoài đồng tự trở về chuồng vào buổi chiều.',
    options: [
      'Chỉ đóng cửa chuồng thật chặt',
      'Mỗi lần cho về chuồng ăn đều gõ kẻng, lặp lại nhiều ngày',
      'Thắp đèn sáng ngoài đồng',
    ],
    answer: 1,
    basis:
      'Tập tính học được: trâu bò quen dần với tiếng kẻng gắn với việc về chuồng ăn, nên sau đó nghe kẻng là tự về.',
  },
  {
    id: 'muc',
    hint: 'Ban đêm, mực bơi về phía nào?',
    field: 'chan-nuoi',
    problem: 'Ngư dân muốn đánh bắt được nhiều mực vào ban đêm.',
    options: [
      'Thả lưới vào giữa trưa nắng',
      'Gõ kẻng thật to trên thuyền',
      'Thắp đèn sáng trên thuyền để thu hút đàn mực',
    ],
    answer: 2,
    basis: 'Mực bị ánh sáng thu hút, bơi về phía đèn sáng nên ngư dân dễ đánh bắt.',
  },
  {
    id: 'cho',
    hint: 'Chó vốn hay sủa khi có người lạ đến gần chỗ ở của nó.',
    field: 'chan-nuoi',
    problem: 'Một gia đình muốn nuôi chó để trông nhà, báo hiệu khi có người lạ.',
    options: [
      'Huấn luyện chó dựa vào tập tính bảo vệ lãnh thổ của nó',
      'Nhốt chó trong lồng cả ngày',
      'Cho chó ăn thật nhiều',
    ],
    answer: 0,
    basis:
      'Chó có tập tính bảo vệ lãnh thổ (sủa khi người lạ đến gần); con người huấn luyện thêm để chó trông nhà tốt hơn.',
  },
  {
    id: 'on-tap',
    hint: 'Tập tính học được hình thành nhờ lặp lại nhiều lần.',
    field: 'hoc-tap',
    problem: 'Bạn Nam học xong bài thì nhớ, nhưng một tuần sau đã quên gần hết.',
    options: [
      'Chỉ đọc bài một lần thật lâu trước hôm kiểm tra',
      'Ôn tập và làm bài tập lặp lại nhiều lần, đều đặn',
      'Không cần học lại vì đã học rồi',
    ],
    answer: 1,
    basis:
      'Ở người, ghi nhớ kiến thức và thói quen học tập là tập tính học được: lặp lại nhiều lần giúp ghi nhớ bền lâu.',
  },
  {
    id: 'the-duc',
    hint: 'Thói quen được hình thành khi ta kiên trì lặp lại một việc.',
    field: 'hoc-tap',
    problem: 'Bạn Lan muốn tạo được thói quen tập thể dục buổi sáng.',
    options: [
      'Tập thật nhiều vào một ngày rồi nghỉ cả tuần',
      'Chỉ tập khi có hứng',
      'Đặt giờ cố định, kiên trì tập mỗi sáng trong thời gian dài',
    ],
    answer: 2,
    basis:
      'Thói quen là tập tính học được: lặp lại cùng một hoạt động vào cùng một thời điểm trong thời gian dài thì hình thành thói quen.',
  },
  {
    id: 'day-som',
    hint: 'Bỏ thói quen xấu cần quyết tâm và thay bằng một thói quen tốt được lặp lại đều đặn.',
    field: 'hoc-tap',
    problem: 'Bạn Minh hay ngủ dậy muộn nên thường đến lớp trễ.',
    options: [
      'Quyết tâm đi ngủ sớm, đặt báo thức cùng một giờ và duy trì hằng ngày',
      'Thức khuya hơn để mệt mà ngủ say',
      'Chỉ dậy sớm vào hôm có kiểm tra',
    ],
    answer: 0,
    basis:
      'Muốn bỏ một thói quen xấu, cần quyết tâm và lặp lại đều đặn thói quen tốt thay thế (giờ ngủ, giờ dậy cố định).',
  },
];

/**
 * Feedback for picking option `choice` of situation `s`.
 * @param {Situation} s @param {number} choice
 */
export function judge(s, choice) {
  const ok = choice === s.answer;
  return {
    ok,
    text: ok ? `Đúng. ${s.basis}` : `Chưa phù hợp. Gợi ý: ${s.hint}`,
  };
}

/**
 * The situations of one field, or all of them.
 * @param {Field | 'tat-ca'} field
 */
export function situationsOf(field) {
  return field === 'tat-ca' ? SITUATIONS : SITUATIONS.filter((s) => s.field === field);
}
