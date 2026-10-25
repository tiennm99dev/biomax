/**
 * Logic for the protist lesson: the comparison cards of trùng roi xanh,
 * trùng giày and trùng biến hình with how fast each one travels, the
 * "which one am I?" clues, and the transmission chains of malaria and
 * amoebic dysentery with the measures that break them.
 */

/** @typedef {'trung-roi' | 'trung-giay' | 'trung-bien-hinh'} ProtistId */
/**
 * @typedef {{
 *   id: ProtistId;
 *   name: string;
 *   organ: string;
 *   moves: string;
 *   shape: string;
 *   feeds: string;
 *   lives: string;
 *   speed: number;
 * }} Protist
 */

/**
 * The three protists compared. `speed` is how far the drawing travels per
 * second, in body lengths, so the fast trùng giày and the slow trùng biến
 * hình keep their real order.
 * @type {Protist[]}
 */
export const PROTISTS = [
  {
    id: 'trung-roi',
    name: 'Trùng roi xanh',
    organ: 'Roi bơi',
    moves: 'Roi dài ở đầu xoáy vào nước kéo cơ thể tiến lên, vừa tiến vừa xoay mình.',
    shape: 'Hình thoi, đầu tù, đuôi nhọn; có điểm mắt màu đỏ ở đầu.',
    feeds: 'Có lục lạp nên quang hợp được khi có ánh sáng; ở chỗ tối thì lấy chất hữu cơ có sẵn.',
    lives: 'Ao, hồ, vũng nước; khi nhiều tạo thành váng xanh trên mặt nước.',
    speed: 0.6,
  },
  {
    id: 'trung-giay',
    name: 'Trùng giày',
    organ: 'Lông bơi',
    moves: 'Rất nhiều lông bơi phủ khắp cơ thể rung nhịp nhàng, đẩy cơ thể bơi nhanh và xoay.',
    shape: 'Hình chiếc đế giày, hình dạng cố định; có rãnh miệng ở một bên.',
    feeds: 'Không có lục lạp: ăn vi khuẩn và vụn hữu cơ được lông bơi dồn vào rãnh miệng.',
    lives: 'Nước ao, hồ, nước có nhiều chất hữu cơ (như nước ngâm rơm, cỏ khô).',
    speed: 1.2,
  },
  {
    id: 'trung-bien-hinh',
    name: 'Trùng biến hình',
    organ: 'Chân giả',
    moves:
      'Tế bào chất dồn về một phía tạo thành chân giả, cơ thể "chảy" theo; di chuyển rất chậm.',
    shape: 'Không có hình dạng cố định, luôn thay đổi.',
    feeds: 'Không có lục lạp: dùng chân giả bao lấy mồi (vi khuẩn, tảo nhỏ) rồi tiêu hóa.',
    lives: 'Lớp bùn ở đáy ao, hồ, mương nước.',
    speed: 0.12,
  },
];

/** @param {ProtistId} id */
export const protistById = (id) => PROTISTS.find((p) => p.id === id) ?? PROTISTS[0];

/**
 * Body lengths travelled after `t` seconds, wrapped onto a track `track`
 * body lengths long.
 * @param {ProtistId} id @param {number} t @param {number} track
 */
export function travel(id, t, track) {
  const d = protistById(id).speed * t;
  return ((d % track) + track) % track;
}

/**
 * Clues for the "which one am I?" game, each pointing to one protist.
 * @type {Array<{ text: string, answer: ProtistId, why: string }>}
 */
export const CLUES = [
  {
    text: 'Tôi có lục lạp và một điểm mắt đỏ, khi có ánh sáng tôi tự tổng hợp được chất hữu cơ.',
    answer: 'trung-roi',
    why: 'Trùng roi xanh có lục lạp nên quang hợp được, và có điểm mắt giúp tìm về phía ánh sáng.',
  },
  {
    text: 'Hình dạng của tôi luôn thay đổi, tôi bắt mồi bằng cách bao lấy nó.',
    answer: 'trung-bien-hinh',
    why: 'Trùng biến hình không có hình dạng cố định; chân giả vừa để di chuyển vừa để bắt mồi.',
  },
  {
    text: 'Cơ thể tôi giống chiếc đế giày, phủ đầy lông bơi.',
    answer: 'trung-giay',
    why: 'Trùng giày có hình đế giày và bơi nhờ rất nhiều lông bơi.',
  },
  {
    text: 'Tôi di chuyển chậm nhất trong ba bạn, thường sống ở lớp bùn đáy ao.',
    answer: 'trung-bien-hinh',
    why: 'Di chuyển bằng chân giả rất chậm; trùng biến hình sống ở lớp bùn đáy ao, hồ.',
  },
  {
    text: 'Tôi bơi bằng một roi dài ở đầu, vừa tiến vừa xoay mình.',
    answer: 'trung-roi',
    why: 'Roi bơi là đặc điểm của trùng roi xanh.',
  },
  {
    text: 'Tôi không có lục lạp, lông bơi dồn vi khuẩn vào rãnh miệng của tôi.',
    answer: 'trung-giay',
    why: 'Trùng giày dị dưỡng, thức ăn được lông bơi dồn vào rãnh miệng.',
  },
];

/**
 * Feedback for a guess on one clue.
 * @param {number} clue index into CLUES @param {ProtistId} guess
 * @returns {{ ok: boolean, text: string }}
 */
export function checkClue(clue, guess) {
  const c = CLUES[clue];
  if (c.answer === guess) return { ok: true, text: `Đúng. ${c.why}` };
  const g = protistById(guess);
  return {
    ok: false,
    text: `Chưa đúng: ${g.name.toLowerCase()} di chuyển bằng ${g.organ.toLowerCase()}, ${g.shape.charAt(0).toLowerCase()}${g.shape.slice(1)} Đọc lại gợi ý và thử lại.`,
  };
}

/** @typedef {'sot-ret' | 'kiet-li'} DiseaseId */
/**
 * @typedef {{
 *   id: DiseaseId;
 *   name: string;
 *   links: string[];
 *   measures: Array<{ id: string, text: string, breaks: number | null, why: string }>;
 * }} Disease
 */

/**
 * Transmission chains: `links[i]` passes the parasite to `links[i + 1]`, and
 * a measure with `breaks: i` cuts the step after link i. A measure with
 * `breaks: null` does not help against this disease.
 * @type {Disease[]}
 */
export const DISEASES = [
  {
    id: 'sot-ret',
    name: 'Sốt rét',
    links: [
      'Người bệnh: trùng sốt rét sống trong máu',
      'Muỗi Anopheles hút máu người bệnh, mang trùng sốt rét',
      'Muỗi đốt người lành, truyền trùng sốt rét vào máu',
      'Trùng sốt rét sinh sản trong hồng cầu, phá hủy hồng cầu: rét run, sốt cao, đổ mồ hôi',
    ],
    measures: [
      {
        id: 'man',
        text: 'Ngủ trong màn',
        breaks: 1,
        why: 'Muỗi không đốt được người nên không mang trùng đi được.',
      },
      {
        id: 'diet-muoi',
        text: 'Diệt muỗi, diệt bọ gậy; phát quang bụi rậm, khơi thông cống rãnh',
        breaks: 1,
        why: 'Không còn muỗi Anopheles truyền bệnh, nơi muỗi đẻ trứng và trú ẩn cũng mất.',
      },
      {
        id: 'chua-benh',
        text: 'Đưa người bệnh đi khám và điều trị dứt điểm',
        breaks: 0,
        why: 'Diệt trùng sốt rét trong máu người bệnh, muỗi hút máu không còn mang trùng.',
      },
      {
        id: 'an-chin',
        text: 'Ăn chín, uống sôi',
        breaks: null,
        why: 'Sốt rét lây qua muỗi đốt, không lây qua đường ăn uống.',
      },
    ],
  },
  {
    id: 'kiet-li',
    name: 'Kiết lị',
    links: [
      'Phân người bệnh chứa bào xác trùng kiết lị',
      'Bào xác lẫn vào nước, rau sống, thức ăn (ruồi nhặng mang đi)',
      'Người lành ăn, uống phải bào xác',
      'Trùng kiết lị ở ruột gây viêm loét thành ruột: đau bụng, đi ngoài phân lẫn máu và chất nhầy',
    ],
    measures: [
      {
        id: 'nha-ve-sinh',
        text: 'Dùng nhà vệ sinh hợp vệ sinh, không phóng uế bừa bãi',
        breaks: 0,
        why: 'Bào xác trong phân không lọt ra nguồn nước và đất trồng rau.',
      },
      {
        id: 'day-thuc-an',
        text: 'Đậy kín thức ăn, diệt ruồi nhặng',
        breaks: 1,
        why: 'Ruồi nhặng không mang được bào xác lên thức ăn.',
      },
      {
        id: 'an-chin',
        text: 'Ăn chín, uống sôi; rửa tay bằng xà phòng trước khi ăn và sau khi đi vệ sinh',
        breaks: 2,
        why: 'Đun sôi diệt bào xác; tay sạch không đưa bào xác vào miệng.',
      },
      {
        id: 'man',
        text: 'Ngủ trong màn',
        breaks: null,
        why: 'Kiết lị lây qua đường tiêu hóa, không lây qua muỗi đốt.',
      },
    ],
  },
];

/** @param {DiseaseId} id */
export const diseaseById = (id) => DISEASES.find((d) => d.id === id) ?? DISEASES[0];

/**
 * Steps of the chain cut by the chosen measures (indices of the link
 * before each cut), sorted.
 * @param {DiseaseId} id @param {string[]} chosen measure ids
 */
export function brokenSteps(id, chosen) {
  const d = diseaseById(id);
  const steps = new Set();
  for (const m of d.measures) {
    if (chosen.includes(m.id) && m.breaks !== null) steps.add(m.breaks);
  }
  return [...steps].sort((a, b) => a - b);
}

/**
 * The verdict shown under the chain.
 * @param {DiseaseId} id @param {string[]} chosen
 */
export function chainVerdict(id, chosen) {
  const d = diseaseById(id);
  const cut = brokenSteps(id, chosen);
  const useless = d.measures.filter((m) => chosen.includes(m.id) && m.breaks === null);
  const extra = useless.length
    ? ` Lưu ý: "${useless.map((m) => m.text).join('", "')}" không phòng được bệnh ${d.name.toLowerCase()}. ${useless.map((m) => m.why).join(' ')}`
    : '';
  if (chosen.length === 0)
    return `Chưa chọn biện pháp nào: trùng ${d.id === 'sot-ret' ? 'sốt rét' : 'kiết lị'} đi trọn con đường đến người lành.`;
  if (cut.length === 0) return `Con đường lây bệnh chưa bị cắt.${extra}`;
  const many =
    cut.length > 1 ? ` Con đường bị cắt ở ${cut.length} chỗ, phòng bệnh càng chắc chắn.` : '';
  return `Con đường lây bệnh đã bị cắt: bệnh không truyền được sang người lành.${many}${extra}`;
}
