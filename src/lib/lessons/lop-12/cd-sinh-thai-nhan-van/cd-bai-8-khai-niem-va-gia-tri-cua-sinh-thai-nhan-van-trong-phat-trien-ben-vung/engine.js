/**
 * The two-way diagram of a human ecosystem: a social system and a natural
 * system that act on each other. For each everyday situation the learner
 * opens the effect of society on nature, then nature's answer back to
 * society, and judges whether the relationship is harmonious and
 * sustainable. No DOM here, so all of it is tested in Node.
 */

/**
 * @typedef {'xa-hoi' | 'tu-nhien'} Side
 * @typedef {{
 *   id: string,
 *   name: string,
 *   toNature: string,
 *   toSociety: string,
 *   harmonious: boolean,
 *   why: string,
 * }} Scenario
 * @typedef {'ben-vung' | 'khong-ben-vung'} Verdict
 */

/** What each system is made of, as the lesson lists them. */
export const SYSTEMS = {
  'xa-hoi': {
    name: 'Hệ thống xã hội',
    parts: [
      'Con người, dân số',
      'Tri thức, khoa học công nghệ',
      'Giá trị văn hoá, kinh tế, giáo dục',
      'Thể chế, chính sách',
    ],
  },
  'tu-nhien': {
    name: 'Hệ thống tự nhiên',
    parts: ['Sinh vật', 'Đất, nước, không khí', 'Ao hồ, đồng ruộng, rừng trồng, nhà máy, đô thị'],
  },
};

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'vac',
    name: 'Xây dựng mô hình VAC (vườn – ao – chuồng)',
    toNature:
      'Chất thải chuồng nuôi làm thức ăn cho cá, bùn ao bón cho vườn: vật chất được quay vòng, ít chất thải ra môi trường.',
    toSociety:
      'Hệ sinh thái cho rau, quả, cá, thịt an toàn quanh năm, tăng thu nhập và tạo việc làm cho gia đình.',
    harmonious: true,
    why: 'Con người khai thác hệ sinh thái nhưng đồng thời duy trì vòng tuần hoàn vật chất của nó, nên cả hai hệ thống cùng có lợi lâu dài.',
  },
  {
    id: 'pha-rung',
    name: 'Phá rừng đầu nguồn làm nương rẫy',
    toNature:
      'Mất rừng, đất bị xói mòn, nhiều loài mất nơi ở; đốt rừng thải thêm CO₂ vào khí quyển.',
    toSociety:
      'Lũ quét, sạt lở, hạn hán gây thiệt hại người và của; đất bạc màu nên năng suất nương rẫy giảm dần.',
    harmonious: false,
    why: 'Lợi ích trước mắt làm suy thoái hệ thống tự nhiên, và tự nhiên "trả lại" thiên tai cho chính con người. Cần giao khoán bảo vệ rừng, trồng rừng và tạo sinh kế khác cho người dân.',
  },
  {
    id: 'rung-ngap-man',
    name: 'Trồng và bảo vệ rừng ngập mặn ven biển',
    toNature: 'Rừng giữ đất, chắn sóng, là nơi sinh sản của tôm, cua, cá và hấp thụ CO₂.',
    toSociety:
      'Đê, nhà cửa được che chắn khỏi bão và triều cường; người dân có thêm nguồn thuỷ sản và du lịch sinh thái.',
    harmonious: true,
    why: 'Bảo vệ tự nhiên cũng chính là bảo vệ sinh kế và an toàn của cộng đồng ven biển.',
  },
  {
    id: 'xa-thai',
    name: 'Nhà máy xả nước thải chưa xử lí ra sông',
    toNature: 'Nước sông ô nhiễm, cá và sinh vật thuỷ sinh chết, đa dạng sinh học giảm.',
    toSociety:
      'Người dân thiếu nước sạch, dễ mắc bệnh; nghề cá và nuôi trồng thuỷ sản bị thiệt hại.',
    harmonious: false,
    why: 'Chi phí xử lí chất thải bị đẩy sang tự nhiên và cộng đồng. Nhà máy cần xử lí nước thải đạt chuẩn trước khi xả, cơ quan quản lí cần giám sát.',
  },
  {
    id: 'nang-luong',
    name: 'Lắp điện mặt trời, điện gió thay cho nhiệt điện than',
    toNature:
      'Giảm khí nhà kính và bụi thải vào không khí; ít phải khai thác than, một tài nguyên không tái sinh.',
    toSociety:
      'Không khí sạch hơn, giảm bệnh hô hấp; có nguồn năng lượng lâu dài và thêm ngành nghề mới.',
    harmonious: true,
    why: 'Dùng năng lượng tái tạo đáp ứng nhu cầu hôm nay mà không làm cạn tài nguyên của các thế hệ sau.',
  },
  {
    id: 'danh-bat',
    name: 'Đánh bắt cá bằng lưới mắt nhỏ, kích điện',
    toNature:
      'Cả cá con, cá bố mẹ bị bắt hoặc chết, nguồn lợi thuỷ sản cạn kiệt, hệ sinh thái mất cân bằng.',
    toSociety: 'Sản lượng đánh bắt những năm sau giảm mạnh, ngư dân mất sinh kế.',
    harmonious: false,
    why: 'Khai thác vượt khả năng phục hồi của quần thể. Cần quy định mùa vụ, kích thước mắt lưới và cấm công cụ huỷ diệt.',
  },
];

/**
 * The situation with this id.
 * @param {string} id
 * @returns {Scenario}
 */
export function scenarioOf(id) {
  const s = SCENARIOS.find((x) => x.id === id);
  if (!s) throw new Error(`no scenario ${id}`);
  return s;
}

/**
 * Whether the learner may judge yet: both arrows must have been opened.
 * @param {{ toNature: boolean, toSociety: boolean }} opened
 */
export function canJudge(opened) {
  return opened.toNature && opened.toSociety;
}

/**
 * The feedback on a verdict.
 * @param {Scenario} s @param {Verdict} verdict
 * @returns {{ right: boolean, tone: 'ok' | 'warn', text: string }}
 */
export function judge(s, verdict) {
  const right = (verdict === 'ben-vung') === s.harmonious;
  const label = s.harmonious ? 'hài hoà, bền vững' : 'không bền vững';
  return {
    right,
    tone: right ? 'ok' : 'warn',
    text: right
      ? `Đúng: quan hệ này ${label}. ${s.why}`
      : `Chưa đúng. Hãy đọc lại chiều tác động ngược từ tự nhiên về xã hội: quan hệ này ${label}. ${s.why}`,
  };
}

/**
 * How many situations were judged right at the first try, in one sentence.
 * @param {Record<string, boolean>} firstTry situation id → right at the first try
 */
export function progressText(firstTry) {
  const done = Object.keys(firstTry).length;
  const right = Object.values(firstTry).filter(Boolean).length;
  if (done === 0) return `Chưa nhận định tình huống nào (0/${SCENARIOS.length}).`;
  const end =
    done === SCENARIOS.length
      ? right === done
        ? ' Em đã phân biệt đúng mọi quan hệ hài hoà và không bền vững.'
        : ' Hãy xem lại các tình huống nhận định sai.'
      : '';
  return `Đã nhận định ${done}/${SCENARIOS.length} tình huống, đúng ngay lần đầu ${right}.${end}`;
}
