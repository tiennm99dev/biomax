/**
 * The virtual DNA extraction: the book's steps in order, and a qualitative
 * model of how much DNA precipitates and how it looks when a step is skipped
 * or done wrong. The amounts are teaching values from 0 to 1, not measurements.
 */

/**
 * @typedef {object} Step
 * @property {string} id
 * @property {string} text What the learner does.
 * @property {string} why Why the step sits there, shown when it is out of place.
 */

/** @type {Step[]} The book's steps, in order. */
export const STEPS = [
  {
    id: 'nghien',
    text: 'Nghiền nhỏ khoảng 5 g gan gà, thêm khoảng 150 mL nước lạnh, khuấy đều.',
    why: 'Phải nghiền mẫu trước tiên: nghiền phá vỡ mô, tách các tế bào ra cho các hoá chất sau tiếp xúc được.',
  },
  {
    id: 'loc',
    text: 'Lọc dịch nghiền qua giấy lọc, giữ lấy phần dịch trong.',
    why: 'Lọc ngay sau khi nghiền để bỏ phần bã mô, chỉ giữ dịch tế bào.',
  },
  {
    id: 'xa-phong',
    text: 'Trộn dịch lọc với khoảng 30 mL nước rửa bát pha loãng, để 5 đến 10 phút.',
    why: 'Nước rửa bát phải vào trước nước dứa: nó phá màng tế bào và màng nhân để giải phóng DNA ra dịch.',
  },
  {
    id: 'dua',
    text: 'Thêm 5 mL nước dứa tươi, khuấy nhẹ, để khoảng 10 phút.',
    why: 'Nước dứa vào sau khi màng đã bị phá: enzyme trong nước dứa phân giải protein đang bám vào DNA.',
  },
  {
    id: 'con',
    text: 'Rót nhẹ cồn lạnh theo thành ống nghiệm đến gần đầy ống.',
    why: 'Cồn lạnh chỉ rót vào khi DNA đã được giải phóng và tách khỏi protein, để DNA kết tủa.',
  },
  {
    id: 'quan',
    text: 'Xoay nhẹ que tre hoặc đũa thuỷ tinh để quấn các sợi DNA kết tủa.',
    why: 'Chỉ quấn được DNA khi nó đã kết tủa thành sợi trong lớp cồn, nên đây là bước cuối.',
  },
];

/**
 * The first place where the order differs from the book's, or -1 when it is
 * right. `order` holds indices into STEPS.
 * @param {number[]} order
 */
export function firstWrong(order) {
  return order.findIndex((step, place) => step !== place);
}

/** @typedef {'gan' | 'chuoi-it' | 'chuoi'} SampleId */
/** @typedef {'tuoi' | 'dun-soi' | 'khong'} JuiceId */

/**
 * @typedef {object} Setup
 * @property {SampleId} sample Chicken liver (5 g), banana 5 g, or banana 50 g.
 * @property {boolean} detergent Diluted dish soap added.
 * @property {JuiceId} juice Fresh pineapple juice, boiled juice, or none.
 * @property {boolean} cold The ethanol is cold.
 * @property {boolean} gentle The ethanol is poured slowly down the side.
 */

/** @type {Setup} */
export const BOOK_SETUP = {
  sample: 'gan',
  detergent: true,
  juice: 'tuoi',
  cold: true,
  gentle: true,
};

/** @type {Record<SampleId, { label: string, dna: number, lysate: string }>} */
export const SAMPLES = {
  gan: { label: 'Gan gà 5 g', dna: 1, lysate: '#c08a7a' },
  'chuoi-it': { label: 'Chuối 5 g', dna: 0.07, lysate: '#efe2b0' },
  chuoi: { label: 'Chuối 50 g', dna: 0.7, lysate: '#efe2b0' },
};

/** Below this amount the precipitate is too faint to see. */
export const VISIBLE = 0.25;

/**
 * @typedef {object} Result
 * @property {number} amount How much DNA precipitates, 0 to 1.
 * @property {boolean} layer The ethanol stays as its own layer on top.
 * @property {boolean} clean The proteins bound to DNA were digested.
 * @property {'soi' | 'von' | 'lo-lung' | 'khong'} look Fine white threads,
 *   protein-laden clumps, a haze through the whole tube, or nothing to see.
 */

/**
 * What the tube shows once the ethanol has had a few minutes.
 * @param {Setup} s
 * @returns {Result}
 */
export function extract(s) {
  const released = SAMPLES[s.sample].dna * (s.detergent ? 1 : 0.1);
  const amount = released * (s.cold ? 1 : 0.5);
  const clean = s.juice === 'tuoi';
  const layer = s.gentle;
  /** @type {Result['look']} */
  let look;
  if (amount < VISIBLE) look = 'khong';
  else if (!layer) look = 'lo-lung';
  else look = clean ? 'soi' : 'von';
  return { amount, layer, clean, look };
}

/** @typedef {{ tone: 'ok' | 'warn' | 'info', text: string }} Note */

/**
 * The feedback line after the ethanol is poured, naming the first thing that
 * went wrong in the order of the procedure.
 * @param {Setup} s
 * @returns {Note}
 */
export function describe(s) {
  if (!s.detergent) {
    return {
      tone: 'warn',
      text: 'Không có nước rửa bát: màng tế bào và màng nhân không bị phá, DNA vẫn nằm trong nhân nên gần như không thu được kết tủa.',
    };
  }
  if (s.sample === 'chuoi-it') {
    return {
      tone: 'warn',
      text: 'Mô chuối nhiều nước, ít DNA hơn gan: $5$ g chuối chỉ cho một vệt rất mờ. Với mô thực vật cần khoảng $50$ g mẫu.',
    };
  }
  if (s.juice === 'khong') {
    return {
      tone: 'warn',
      text: 'Không có nước dứa: protein (như histone) vẫn bám vào DNA, kết tủa vón thành cục đục, lẫn protein, khó quấn thành sợi.',
    };
  }
  if (s.juice === 'dun-soi') {
    return {
      tone: 'warn',
      text: 'Nước dứa đã đun sôi: enzyme phân giải protein (bromelain) bị biến tính, mất hoạt tính, nên kết quả giống như không cho nước dứa.',
    };
  }
  if (!s.cold) {
    return {
      tone: 'warn',
      text: 'Cồn không lạnh: DNA kết tủa kém, chỉ được ít sợi mảnh. Cồn và mẫu cần được giữ lạnh.',
    };
  }
  if (!s.gentle) {
    return {
      tone: 'warn',
      text: 'Đổ mạnh rồi lắc: cồn trộn lẫn vào dịch, không còn lớp cồn riêng ở trên, DNA kết tủa lơ lửng khắp ống, rất khó vớt.',
    };
  }
  if (s.sample === 'chuoi') {
    return {
      tone: 'ok',
      text: 'Ở ranh giới giữa dịch và lớp cồn xuất hiện các sợi trắng đục: đó là DNA kết tủa. Mẫu chuối cho ít DNA hơn gan dù khối lượng gấp $10$ lần.',
    };
  }
  return {
    tone: 'ok',
    text: 'Ở ranh giới giữa dịch và lớp cồn xuất hiện nhiều sợi trắng đục, nổi dần lên lớp cồn: đó là DNA kết tủa. Hãy quấn DNA bằng đũa.',
  };
}

/**
 * The feedback after winding the precipitate onto the rod.
 * @param {Result} r
 * @param {boolean} gentle Turned the rod slowly instead of stirring hard.
 * @returns {Note}
 */
export function describeWind(r, gentle) {
  if (r.look === 'khong') {
    return { tone: 'warn', text: 'Không có kết tủa nào để quấn lên đũa.' };
  }
  if (r.look === 'lo-lung') {
    return {
      tone: 'warn',
      text: 'DNA lơ lửng khắp ống, không tập trung ở lớp cồn nên đũa chỉ vớt được rất ít.',
    };
  }
  if (!gentle) {
    return {
      tone: 'warn',
      text: 'Khuấy mạnh làm các sợi DNA (rất mảnh và dễ gãy) đứt thành đoạn vụn, không quấn lên đũa được. Hãy xoay đũa thật nhẹ.',
    };
  }
  if (r.look === 'von') {
    return {
      tone: 'warn',
      text: 'Đũa vớt được cục kết tủa đục, nhầy, lẫn nhiều protein: chưa phải DNA sạch.',
    };
  }
  return {
    tone: 'ok',
    text: 'Các sợi DNA trắng, nhầy quấn quanh đầu đũa. Đây là DNA của hàng triệu tế bào gộp lại: một phân tử DNA riêng lẻ quá nhỏ để thấy bằng mắt thường.',
  };
}
