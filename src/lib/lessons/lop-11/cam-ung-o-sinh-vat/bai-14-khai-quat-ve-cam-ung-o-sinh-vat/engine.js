/**
 * The four stages of a response to a stimulus (tiếp nhận, dẫn truyền,
 * xử lí, trả lời), for two animal reflexes and two plant responses, and what
 * happens to the signal when one part is damaged.
 */

/** @typedef {'tiep-nhan' | 'dan-truyen' | 'xu-li' | 'tra-loi'} StageId */
/** @typedef {'rut-tay' | 'dong-tu' | 'trinh-nu' | 'huong-sang'} ScenarioId */

/** @type {Array<{ id: StageId, name: string, short: string }>} */
export const STAGES = [
  { id: 'tiep-nhan', name: 'Tiếp nhận kích thích', short: 'Tiếp nhận' },
  { id: 'dan-truyen', name: 'Dẫn truyền thông tin', short: 'Dẫn truyền' },
  { id: 'xu-li', name: 'Xử lí thông tin', short: 'Xử lí' },
  { id: 'tra-loi', name: 'Trả lời kích thích', short: 'Trả lời' },
];

/**
 * @typedef {object} Scenario
 * @property {ScenarioId} id
 * @property {string} name Short name for the switch.
 * @property {'động vật' | 'thực vật'} group
 * @property {string} stimulus
 * @property {string[]} parts The part doing each stage, in STAGES order.
 * @property {string} response What the organism does in the end.
 * @property {string} benefit Why the response helps it.
 */

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'rut-tay',
    name: 'Rụt tay',
    group: 'động vật',
    stimulus: 'Tay chạm vào gai xương rồng.',
    parts: [
      'Thụ thể đau ở da tay tiếp nhận kích thích, tạo xung thần kinh.',
      'Dây thần kinh cảm giác dẫn xung thần kinh về tuỷ sống.',
      'Tuỷ sống (trung ương thần kinh) xử lí thông tin và phát lệnh; thông tin còn được chuyển lên não, tạo cảm giác đau.',
      'Xung thần kinh theo dây thần kinh vận động đến cơ tay, cơ co, tay rụt lại.',
    ],
    response: 'Tay rụt lại.',
    benefit: 'Tránh bị gai đâm sâu, bảo vệ cơ thể.',
  },
  {
    id: 'dong-tu',
    name: 'Co đồng tử',
    group: 'động vật',
    stimulus: 'Ánh sáng mạnh chiếu vào mắt.',
    parts: [
      'Tế bào thụ cảm ánh sáng ở màng lưới tiếp nhận kích thích, tạo xung thần kinh.',
      'Dây thần kinh thị giác dẫn xung thần kinh về não.',
      'Trung ương thần kinh ở não xử lí thông tin và phát lệnh.',
      'Xung thần kinh theo dây thần kinh đến cơ vòng của mống mắt, cơ co, đồng tử co nhỏ lại.',
    ],
    response: 'Đồng tử co nhỏ.',
    benefit: 'Giảm lượng ánh sáng vào mắt, bảo vệ màng lưới.',
  },
  {
    id: 'trinh-nu',
    name: 'Trinh nữ cụp lá',
    group: 'thực vật',
    stimulus: 'Tay chạm vào lá cây trinh nữ.',
    parts: [
      'Tế bào ở lá chét tiếp nhận kích thích cơ học.',
      'Thông tin truyền qua tế bào chất của các tế bào dưới dạng tín hiệu điện và hoá học.',
      'Tế bào ở thể gối (chỗ phình gốc lá chét và cuống lá) xử lí thông tin.',
      'Tế bào thể gối mất nước, giảm sức trương: lá chét cụp lại, cuống lá rủ xuống.',
    ],
    response: 'Lá cụp lại.',
    benefit: 'Có thể giúp cây tránh bị côn trùng, động vật ăn lá làm hại.',
  },
  {
    id: 'huong-sang',
    name: 'Ngọn hướng sáng',
    group: 'thực vật',
    stimulus: 'Ánh sáng chiếu vào ngọn cây từ một phía.',
    parts: [
      'Thụ thể ánh sáng ở tế bào đỉnh ngọn tiếp nhận kích thích.',
      'Thông tin truyền trong tế bào chất dưới dạng tín hiệu hoá học.',
      'Tế bào ngọn xử lí thông tin: auxin được phân bố lại, tập trung nhiều ở phía khuất sáng.',
      'Tế bào phía khuất sáng dãn dài nhanh hơn, ngọn cong về phía có ánh sáng.',
    ],
    response: 'Ngọn cây cong về phía ánh sáng.',
    benefit: 'Lá nhận được nhiều ánh sáng hơn cho quang hợp.',
  },
];

/** @param {ScenarioId} id */
export const scenario = (id) => SCENARIOS.find((s) => s.id === id) ?? SCENARIOS[0];

/**
 * How far the signal gets. `broken` is the damaged stage, or null.
 * `reached` is the number of stages that worked (0 to 4).
 * @param {StageId | null} broken
 */
export function signalReach(broken) {
  const at = broken === null ? -1 : STAGES.findIndex((s) => s.id === broken);
  const reached = at < 0 ? STAGES.length : at;
  return { reached, responds: reached === STAGES.length };
}

/**
 * Feedback once the signal has gone as far as it can.
 * @param {ScenarioId} id @param {StageId | null} broken
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function outcome(id, broken) {
  const s = scenario(id);
  const { reached, responds } = signalReach(broken);
  if (responds) {
    return {
      tone: 'ok',
      text: `Đủ bốn khâu, sinh vật trả lời kích thích: ${s.response.toLowerCase()} ${s.benefit}`,
    };
  }
  const name = STAGES[reached].name.toLowerCase();
  const passed =
    reached === 0
      ? 'Kích thích không được tiếp nhận nên không có thông tin nào được tạo ra.'
      : `Thông tin dừng lại ở khâu ${name}.`;
  return {
    tone: 'warn',
    text: `Khâu ${name} bị hỏng. ${passed} Sinh vật không trả lời được kích thích: cảm ứng chỉ xảy ra khi mọi bộ phận đều hoạt động.`,
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const KIND_BINS = [
  { id: 'tv', label: 'Cảm ứng ở thực vật' },
  { id: 'dv', label: 'Cảm ứng ở động vật' },
  { id: 'khong', label: 'Không phải cảm ứng' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const KIND_CARDS = [
  {
    id: 'trinh-nu',
    label: 'Lá trinh nữ cụp lại khi bị chạm',
    bin: 'tv',
    why: 'Cây trinh nữ tiếp nhận kích thích cơ học và phản ứng bằng cách cụp lá.',
  },
  {
    id: 're-nuoc',
    label: 'Rễ cây mọc về phía có nước',
    bin: 'tv',
    why: 'Rễ phản ứng với kích thích là nước (hướng nước).',
  },
  {
    id: 'hoa-no',
    label: 'Hoa bồ công anh nở khi có ánh sáng, cụp lại lúc chạng vạng',
    bin: 'tv',
    why: 'Hoa phản ứng với sự thay đổi của ánh sáng.',
  },
  {
    id: 'meo',
    label: 'Mèo dựng lông khi gặp chó',
    bin: 'dv',
    why: 'Mèo tiếp nhận kích thích từ chó và phản ứng tự vệ.',
  },
  {
    id: 'dong-tu',
    label: 'Đồng tử co lại khi gặp ánh sáng mạnh',
    bin: 'dv',
    why: 'Mắt tiếp nhận ánh sáng mạnh, cơ mống mắt co làm đồng tử nhỏ lại.',
  },
  {
    id: 'mo-hoi',
    label: 'Người toát mồ hôi khi trời nóng',
    bin: 'dv',
    why: 'Cơ thể tiếp nhận nhiệt độ cao và tuyến mồ hôi trả lời bằng cách tiết mồ hôi.',
  },
  {
    id: 'sat-gi',
    label: 'Đinh sắt bị gỉ khi để ngoài mưa',
    bin: 'khong',
    why: 'Đinh sắt không phải sinh vật; gỉ sắt là phản ứng hoá học.',
  },
  {
    id: 'la-roi',
    label: 'Lá khô bị gió thổi bay',
    bin: 'khong',
    why: 'Lá khô bay do lực của gió, không có sự tiếp nhận và trả lời kích thích.',
  },
];
