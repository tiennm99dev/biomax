/**
 * The scientific research process: its six steps in the book's order, three
 * research situations whose every action belongs to one step, and the check
 * that a two-lot experiment differs only in the factor under study.
 */

/** @typedef {{ id: string, name: string, note: string }} Step */
/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   actions: Record<string, string>;
 * }} Scenario
 */

/** @type {Step[]} */
export const STEPS = [
  {
    id: 'quan-sat',
    name: 'Quan sát và thu thập dữ liệu',
    note: 'Kiên trì, cẩn thận, dùng công cụ phù hợp để có số liệu chính xác.',
  },
  {
    id: 'cau-hoi',
    name: 'Đặt câu hỏi',
    note: 'Từ dữ liệu thu được, đặt ra điều cần lí giải.',
  },
  {
    id: 'gia-thuyet',
    name: 'Hình thành giả thuyết',
    note: 'Đưa ra câu trả lời dự kiến, có thể kiểm chứng bằng thực nghiệm.',
  },
  {
    id: 'thi-nghiem',
    name: 'Thiết kế và tiến hành thí nghiệm kiểm chứng',
    note: 'Bố trí lô đối chứng và lô thí nghiệm, chỉ khác nhau ở yếu tố nghiên cứu.',
  },
  {
    id: 'phan-tich',
    name: 'Phân tích kết quả và xử lí dữ liệu',
    note: 'Xử lí số liệu cẩn thận, so sánh các lô.',
  },
  {
    id: 'ket-luan',
    name: 'Rút ra kết luận',
    note: 'Chấp nhận hay bác bỏ giả thuyết; nếu bác bỏ thì quay lại hình thành giả thuyết mới.',
  },
];

/** The step to return to when the results reject the hypothesis. */
export const LOOP_BACK = 'gia-thuyet';

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'muoi',
    name: 'Muối và cây trồng',
    actions: {
      'quan-sat':
        'Ghi nhận rằng cây trồng trên đất nhiễm mặn thấp và còi hơn cây cùng loài trên đất thường.',
      'cau-hoi': 'Muối trong đất có làm cây sinh trưởng chậm đi không?',
      'gia-thuyet':
        'Nếu muối làm cây sinh trưởng chậm thì cây tưới nước muối sẽ thấp hơn cây tưới nước thường.',
      'thi-nghiem':
        'Trồng hai lô cùng giống, cùng tuổi, cùng số cây và cùng điều kiện; một lô tưới nước muối, lô kia tưới nước thường.',
      'phan-tich': 'Đo chiều cao mọi cây, tính chiều cao trung bình của từng lô rồi so sánh.',
      'ket-luan': 'Lô tưới nước muối thấp hơn rõ rệt nên giả thuyết được chấp nhận.',
    },
  },
  {
    id: 'nam-men',
    name: 'Nấm men và cồn',
    actions: {
      'quan-sat':
        'Ghi nhận rằng khi ủ rượu đến một lúc, bọt khí ngừng sinh ra dù dịch ủ vẫn còn đường.',
      'cau-hoi': 'Cồn tích luỹ trong dịch ủ có làm nấm men ngừng hoạt động không?',
      'gia-thuyet':
        'Nếu cồn ức chế nấm men thì dịch ủ có thêm cồn sẽ sinh ít bọt khí hơn dịch ủ không thêm cồn.',
      'thi-nghiem':
        'Chuẩn bị hai bình cùng lượng nấm men, đường và cùng nhiệt độ; chỉ một bình được thêm cồn.',
      'phan-tich': 'Đo lượng khí sinh ra ở mỗi bình theo thời gian rồi lập bảng so sánh.',
      'ket-luan': 'Bình có thêm cồn sinh ít khí hơn hẳn nên giả thuyết được chấp nhận.',
    },
  },
  {
    id: 'trung-giay',
    name: 'Nhân tế bào trùng giày',
    actions: {
      'quan-sat': 'Ghi nhận rằng những tế bào trùng giày bị mất nhân về sau đều chết.',
      'cau-hoi': 'Nhân có cần cho sự sống của tế bào trùng giày không?',
      'gia-thuyet':
        'Nếu nhân cần cho sự sống thì tế bào bị lấy nhân sẽ chết, còn tế bào giữ nhân vẫn sống.',
      'thi-nghiem':
        'Chọn hai lô trùng giày cùng điều kiện nuôi, cùng được vi phẫu; lô thí nghiệm bị lấy nhân, lô đối chứng vẫn giữ nhân.',
      'phan-tich': 'Đếm số tế bào còn sống của mỗi lô sau cùng một thời gian rồi so sánh.',
      'ket-luan': 'Lô bị lấy nhân chết dần, lô giữ nhân vẫn sống nên giả thuyết được chấp nhận.',
    },
  },
];

/**
 * How close an ordering is to the book's order.
 * @param {number[]} order step indices in the learner's order
 * @returns {{ ok: boolean, right: number, firstWrong: number }} `firstWrong` is the first wrong position, -1 when all are right
 */
export function orderResult(order) {
  const right = order.filter((step, pos) => step === pos).length;
  return {
    ok: right === STEPS.length,
    right,
    firstWrong: order.findIndex((step, pos) => step !== pos),
  };
}

/**
 * The step an action of a scenario belongs to.
 * @param {Scenario} scenario @param {string} text
 * @returns {Step | undefined}
 */
export function stepOfAction(scenario, text) {
  return STEPS.find((s) => scenario.actions[s.id] === text);
}

/** The factors of the salt experiment that the learner may make differ. */
export const FACTORS = [
  { id: 'muoi', name: 'Nước tưới có muối' },
  { id: 'giong', name: 'Giống cây' },
  { id: 'tuoi', name: 'Tuổi của cây' },
  { id: 'so-cay', name: 'Số cây mỗi lô' },
  { id: 'anh-sang', name: 'Ánh sáng' },
];

/** The one factor under study. */
export const STUDIED = 'muoi';

/**
 * Judges an experimental design from the factors that differ between the lots.
 * @param {string[]} differing ids of the factors that differ
 * @returns {{ tone: 'ok' | 'warn', fair: boolean, text: string }}
 */
export function judgeDesign(differing) {
  const others = FACTORS.filter((f) => f.id !== STUDIED && differing.includes(f.id));
  const studied = differing.includes(STUDIED);
  const names = others.map((f) => f.name.toLowerCase()).join(', ');
  if (studied && others.length === 0) {
    return {
      tone: 'ok',
      fair: true,
      text: 'Thiết kế đúng: hai lô chỉ khác nhau ở muối. Lô tưới nước thường là lô đối chứng, lô tưới nước muối là lô thí nghiệm, nên mọi khác biệt về sinh trưởng đều do muối.',
    };
  }
  if (studied) {
    return {
      tone: 'warn',
      fair: false,
      text: `Chưa kết luận được: ngoài muối, hai lô còn khác nhau ở ${names}. Nếu cây sinh trưởng khác nhau, em không biết nguyên nhân là yếu tố nào.`,
    };
  }
  if (others.length > 0) {
    return {
      tone: 'warn',
      fair: false,
      text: `Chưa đúng: hai lô khác nhau ở ${names} nhưng lại giống nhau về muối, nên thí nghiệm không kiểm chứng được ảnh hưởng của muối.`,
    };
  }
  return {
    tone: 'warn',
    fair: false,
    text: 'Hai lô đang giống hệt nhau. Yếu tố nghiên cứu là gì? Hãy cho hai lô khác nhau ở đúng yếu tố đó.',
  };
}

/**
 * The share by which the mean falls from the control lot to the treated lot.
 * @param {number[]} control @param {number[]} treated
 * @returns {{ control: number, treated: number, dropPercent: number }}
 */
export function compareLots(control, treated) {
  const mean = (/** @type {number[]} */ xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const c = mean(control);
  const t = mean(treated);
  return { control: c, treated: t, dropPercent: ((c - t) / c) * 100 };
}

/** Sample heights (cm) of the salt experiment, made up for the lesson. */
export const SAMPLE_CONTROL = [20, 21, 19, 22, 18];
export const SAMPLE_TREATED = [14, 15, 13, 16, 12];
