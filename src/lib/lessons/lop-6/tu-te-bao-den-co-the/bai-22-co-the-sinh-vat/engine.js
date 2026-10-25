/**
 * Data for the "Cơ thể sinh vật" lesson: the two sorting rounds (living or
 * non-living, unicellular or multicellular) and the life-process checker,
 * which shows that a thing is living only when it carries out all the basic
 * life processes, not just one that looks like them.
 */

/** @typedef {import('#lib/core/card-sorter.js').SortCard} SortCard */
/** @typedef {import('#lib/core/card-sorter.js').SortBin} SortBin */

/** @typedef {'song' | 'don-bao'} RoundId */

/**
 * The basic life processes named by the book.
 * @type {Array<{ id: ProcessId, name: string, meaning: string }>}
 */
export const PROCESSES = [
  {
    id: 'cam-ung',
    name: 'Cảm ứng và vận động',
    meaning: 'tiếp nhận và phản ứng lại các kích thích của môi trường',
  },
  { id: 'sinh-truong', name: 'Sinh trưởng', meaning: 'lớn lên về kích thước và khối lượng' },
  { id: 'sinh-san', name: 'Sinh sản', meaning: 'tạo ra cơ thể mới' },
  {
    id: 'ho-hap',
    name: 'Hô hấp',
    meaning: 'lấy khí oxygen để phân giải chất dinh dưỡng, tạo năng lượng',
  },
  { id: 'bai-tiet', name: 'Bài tiết', meaning: 'loại bỏ các chất thải ra khỏi cơ thể' },
  { id: 'dinh-duong', name: 'Dinh dưỡng', meaning: 'lấy thức ăn, chất dinh dưỡng để sống' },
];

/** @typedef {'cam-ung' | 'sinh-truong' | 'sinh-san' | 'ho-hap' | 'bai-tiet' | 'dinh-duong'} ProcessId */

/** @type {Record<RoundId, { label: string, bins: SortBin[], cards: SortCard[] }>} */
export const ROUNDS = {
  song: {
    label: 'Vật sống hay vật không sống',
    bins: [
      { id: 'song', label: 'Vật sống' },
      { id: 'khong-song', label: 'Vật không sống' },
    ],
    cards: [
      { id: 'meo', label: 'Con mèo', bin: 'song', why: 'Mèo ăn, thở, lớn lên và đẻ con.' },
      {
        id: 'cay-bang',
        label: 'Cây bàng',
        bin: 'song',
        why: 'Cây bàng lấy nước, muối khoáng, lớn lên, ra hoa, tạo quả và hạt.',
      },
      {
        id: 'vi-khuan',
        label: 'Vi khuẩn E. coli',
        bin: 'song',
        why: 'Dù chỉ là một tế bào, vi khuẩn vẫn lấy chất dinh dưỡng, lớn lên và sinh sản.',
      },
      {
        id: 'giun',
        label: 'Con giun đất',
        bin: 'song',
        why: 'Giun đất ăn mùn, hô hấp qua da, lớn lên và sinh sản.',
      },
      {
        id: 'nam-rom',
        label: 'Cây nấm rơm',
        bin: 'song',
        why: 'Nấm hút chất dinh dưỡng từ rơm mục, lớn lên và sinh sản bằng bào tử.',
      },
      {
        id: 'hon-da',
        label: 'Hòn đá',
        bin: 'khong-song',
        why: 'Hòn đá không ăn, không thở, không lớn lên, không sinh sản.',
      },
      {
        id: 'xe-dap',
        label: 'Chiếc xe đạp',
        bin: 'khong-song',
        why: 'Xe đạp chỉ chuyển động khi có người đạp; nó không lớn lên, không sinh sản.',
      },
      {
        id: 'ban-go',
        label: 'Cái bàn gỗ',
        bin: 'khong-song',
        why: 'Gỗ lấy từ cây, nhưng cái bàn không còn thực hiện quá trình sống nào.',
      },
      {
        id: 'robot',
        label: 'Robot hút bụi',
        bin: 'khong-song',
        why: 'Robot tự di chuyển nhờ pin và cảm biến, nhưng không dinh dưỡng, không lớn lên, không sinh sản.',
      },
      {
        id: 'may',
        label: 'Đám mây',
        bin: 'khong-song',
        why: 'Đám mây to ra vì hơi nước tụ lại, không phải sinh trưởng; mây không có tế bào.',
      },
    ],
  },
  'don-bao': {
    label: 'Cơ thể đơn bào hay đa bào',
    bins: [
      { id: 'don-bao', label: 'Cơ thể đơn bào' },
      { id: 'da-bao', label: 'Cơ thể đa bào' },
    ],
    cards: [
      {
        id: 'vi-khuan',
        label: 'Vi khuẩn E. coli',
        bin: 'don-bao',
        why: 'Mỗi vi khuẩn chỉ gồm một tế bào nhân sơ.',
      },
      {
        id: 'trung-roi',
        label: 'Trùng roi',
        bin: 'don-bao',
        why: 'Trùng roi là một tế bào nhân thực, di chuyển bằng roi.',
      },
      {
        id: 'trung-giay',
        label: 'Trùng giày',
        bin: 'don-bao',
        why: 'Trùng giày là một tế bào có lông bơi phủ khắp cơ thể.',
      },
      {
        id: 'trung-bien-hinh',
        label: 'Trùng biến hình',
        bin: 'don-bao',
        why: 'Trùng biến hình chỉ có một tế bào, hình dạng thay đổi nhờ chân giả.',
      },
      {
        id: 'nam-men',
        label: 'Nấm men',
        bin: 'don-bao',
        why: 'Nấm men là nấm đơn bào; mỗi tế bào nấm men là một cơ thể.',
      },
      {
        id: 'tao-luc',
        label: 'Tảo lục đơn bào',
        bin: 'don-bao',
        why: 'Như tên gọi, cơ thể tảo chỉ gồm một tế bào có lục lạp.',
      },
      {
        id: 'cay-oi',
        label: 'Cây ổi',
        bin: 'da-bao',
        why: 'Cây ổi gồm rất nhiều tế bào: tế bào biểu bì, tế bào mạch dẫn, tế bào thịt lá...',
      },
      {
        id: 'ech',
        label: 'Con ếch',
        bin: 'da-bao',
        why: 'Ếch có nhiều loại tế bào: tế bào cơ, tế bào thần kinh, hồng cầu...',
      },
      {
        id: 'reu',
        label: 'Cây rêu',
        bin: 'da-bao',
        why: 'Rêu nhỏ nhưng vẫn gồm nhiều tế bào.',
      },
      {
        id: 'giun',
        label: 'Con giun đất',
        bin: 'da-bao',
        why: 'Giun đất gồm nhiều tế bào tạo thành các mô và cơ quan.',
      },
      {
        id: 'nam-rom',
        label: 'Cây nấm rơm',
        bin: 'da-bao',
        why: 'Nấm rơm là nấm đa bào, khác với nấm men đơn bào.',
      },
      {
        id: 'nguoi',
        label: 'Con người',
        bin: 'da-bao',
        why: 'Cơ thể người được cấu tạo từ hàng chục nghìn tỉ tế bào.',
      },
    ],
  },
};

/**
 * Things to test against the life processes. `shows` lists the processes the
 * thing really carries out; `looksLike` explains an activity that only
 * resembles a life process.
 * @type {Array<{ id: string, name: string, shows: ProcessId[], looksLike?: string }>}
 */
export const THINGS = [
  {
    id: 'cay-dau',
    name: 'Cây đậu',
    shows: ['cam-ung', 'sinh-truong', 'sinh-san', 'ho-hap', 'bai-tiet', 'dinh-duong'],
  },
  {
    id: 'con-ga',
    name: 'Con gà',
    shows: ['cam-ung', 'sinh-truong', 'sinh-san', 'ho-hap', 'bai-tiet', 'dinh-duong'],
  },
  {
    id: 'trung-roi',
    name: 'Trùng roi',
    shows: ['cam-ung', 'sinh-truong', 'sinh-san', 'ho-hap', 'bai-tiet', 'dinh-duong'],
  },
  {
    id: 'o-to',
    name: 'Xe ô tô',
    shows: [],
    looksLike:
      'Ô tô chạy được và thải khí, nhưng đó là do động cơ đốt xăng, không phải cảm ứng hay hô hấp của một cơ thể. Ô tô không lớn lên, không sinh sản.',
  },
  {
    id: 'robot',
    name: 'Robot hút bụi',
    shows: [],
    looksLike:
      'Robot tránh được vật cản nhờ cảm biến do con người chế tạo và chạy bằng pin. Nó không dinh dưỡng, không lớn lên, không tự tạo ra robot mới.',
  },
  {
    id: 'tinh-the-muoi',
    name: 'Tinh thể muối',
    shows: [],
    looksLike:
      'Tinh thể muối to dần trong nước muối đặc vì muối bám thêm vào bên ngoài, không phải sinh trưởng từ bên trong. Muối không có tế bào.',
  },
  {
    id: 'hon-da',
    name: 'Hòn đá',
    shows: [],
  },
];

/** @param {string} id */
export const thingById = (id) => THINGS.find((t) => t.id === id) ?? THINGS[0];

/**
 * A thing is a living thing when it carries out every basic life process.
 * @param {{ shows: ProcessId[] }} thing
 */
export function isLiving(thing) {
  return PROCESSES.every((p) => thing.shows.includes(p.id));
}

/**
 * Checks the data: every card has a bin of its round and unique ids.
 * @returns {string[]} problems found, empty when the data is consistent
 */
export function validateRounds() {
  /** @type {string[]} */
  const problems = [];
  for (const [id, round] of Object.entries(ROUNDS)) {
    const bins = new Set(round.bins.map((b) => b.id));
    const ids = new Set();
    for (const c of round.cards) {
      if (!bins.has(c.bin)) problems.push(`${id}/${c.id}: unknown bin ${c.bin}`);
      if (ids.has(c.id)) problems.push(`${id}/${c.id}: duplicate id`);
      ids.add(c.id);
    }
  }
  return problems;
}
