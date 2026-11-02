/**
 * An SIR model of an outbreak with vaccination and masks, and the cards sorting
 * prevention measures by disease. The model is qualitative: its assumed numbers
 * show how the measures change the curve, they do not predict a real epidemic.
 * No DOM here, so all of it is tested in Node.
 */

/**
 * @typedef {{ r0: number, vaccinated: number, masked: number }} Measures
 * `r0` is how many people one case infects when nobody is immune; `vaccinated`
 * and `masked` are shares of the population, from 0 to 1.
 * @typedef {{ day: number, infectious: number, total: number }} Day
 * @typedef {{ days: Day[], peak: number, peakDay: number, total: number, re: number }} Outbreak
 */

export const POPULATION = 10000;
export const FIRST_CASES = 10;
export const DAYS = 180;
/** A case stays infectious for 7 days on average. */
const RECOVERY = 1 / 7;
/** Assumed: a vaccine protects 90% of those who take it. */
export const VACCINE_EFFICACY = 0.9;
/** Assumed: if everyone wears a mask, transmission halves. */
export const MASK_EFFECT = 0.5;

/** @type {Array<{ value: number, label: string }>} */
export const STRENGTHS = [
  { value: 2, label: 'Lây vừa (mỗi ca lây cho 2 người)' },
  { value: 4, label: 'Lây nhanh (4 người)' },
  { value: 8, label: 'Lây rất nhanh (8 người)' },
];

/**
 * How many people one case infects at the start, given the measures.
 * @param {Measures} measures
 */
export function effectiveR({ r0, vaccinated, masked }) {
  return r0 * (1 - vaccinated * VACCINE_EFFICACY) * (1 - masked * MASK_EFFECT);
}

/**
 * Runs the outbreak day by day.
 * @param {Measures} measures
 * @returns {Outbreak}
 */
export function simulate(measures) {
  const immune = (POPULATION - FIRST_CASES) * measures.vaccinated * VACCINE_EFFICACY;
  const beta = measures.r0 * (1 - measures.masked * MASK_EFFECT) * RECOVERY;
  let susceptible = POPULATION - FIRST_CASES - immune;
  let infectious = FIRST_CASES;
  let total = FIRST_CASES;
  let peak = infectious;
  let peakDay = 0;
  /** @type {Day[]} */
  const days = [{ day: 0, infectious, total }];
  for (let day = 1; day <= DAYS; day++) {
    const caught = (beta * susceptible * infectious) / POPULATION;
    const recovered = RECOVERY * infectious;
    susceptible -= caught;
    infectious += caught - recovered;
    total += caught;
    if (infectious > peak) {
      peak = infectious;
      peakDay = day;
    }
    days.push({ day, infectious, total });
  }
  return { days, peak, peakDay, total, re: effectiveR(measures) };
}

/**
 * What the measures did, in one sentence.
 * @param {Outbreak} outbreak @param {Outbreak} untouched the same virus with no measures
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function verdict(outbreak, untouched) {
  const saved = Math.floor((1 - outbreak.total / untouched.total) * 100);
  if (Math.abs(outbreak.re - 1) < 1e-9) {
    return {
      tone: 'info',
      text: `Mỗi ca bệnh lây cho đúng 1 người, nên số ca không tăng lên nhưng dịch còn âm ỉ. Số ca giảm ${saved}% so với khi không phòng bệnh. Hãy tăng thêm biện pháp để đưa con số này xuống dưới 1.`,
    };
  }
  if (outbreak.re < 1) {
    return {
      tone: 'ok',
      text: `Mỗi ca bệnh lây cho ít hơn 1 người nên dịch tự lụi dần. Số ca giảm ${saved}% so với khi không phòng bệnh: người chưa tiêm vaccine cũng được bảo vệ nhờ người xung quanh.`,
    };
  }
  if (saved < 5) {
    return {
      tone: 'warn',
      text: 'Gần như không có gì cản virus, dịch lên đỉnh rất cao và rất nhanh. Hãy thử tăng tỉ lệ tiêm vaccine hoặc đeo khẩu trang.',
    };
  }
  return {
    tone: 'info',
    text: `Đường cong đã thấp và kéo dài hơn, số ca giảm ${saved}% so với khi không phòng bệnh, nhưng mỗi ca vẫn lây cho hơn 1 người nên dịch vẫn còn lan. Hãy tăng thêm biện pháp.`,
  };
}

export const PREVENTION_BINS = [
  { id: 'hiv', label: 'HIV/AIDS' },
  { id: 'cum', label: 'Cúm' },
  { id: 'thuc-vat', label: 'Bệnh virus ở cây trồng' },
];

export const PREVENTION_CARDS = [
  {
    id: 'kim-tiem',
    label: 'Không dùng chung bơm kim tiêm',
    bin: 'hiv',
    why: 'HIV lây qua đường máu, nên phải tránh dụng cụ dính máu.',
  },
  {
    id: 'truyen-mau',
    label: 'Sàng lọc máu trước khi truyền',
    bin: 'hiv',
    why: 'Truyền máu an toàn chặn đường lây qua máu của HIV.',
  },
  {
    id: 'tinh-duc',
    label: 'Quan hệ tình dục an toàn, dùng bao cao su',
    bin: 'hiv',
    why: 'Đây là một trong ba đường lây của HIV.',
  },
  {
    id: 'khau-trang',
    label: 'Tránh tiếp xúc gần với người đang ho, hắt hơi',
    bin: 'cum',
    why: 'Virus cúm lây qua các giọt dịch hô hấp khi ho, hắt hơi.',
  },
  {
    id: 'gia-cam',
    label: 'Không ăn gia cầm chết vì dịch, nấu chín thức ăn',
    bin: 'cum',
    why: 'Virus cúm gia cầm có thể lây từ gia cầm bệnh sang người.',
  },
  {
    id: 'hoang-da',
    label: 'Không săn bắt, mua bán động vật hoang dã',
    bin: 'cum',
    why: 'Virus cúm có ở nhiều loài chim và thú, nên có thể lan từ chúng sang người.',
  },
  {
    id: 'dung-cu',
    label: 'Khử trùng dụng cụ làm vườn',
    bin: 'thuc-vat',
    why: 'Dụng cụ có thể làm virus lây theo hàng ngang từ cây này sang cây khác.',
  },
  {
    id: 'tieu-huy',
    label: 'Tiêu huỷ cây bị bệnh, không lấy giống từ cây đó',
    bin: 'thuc-vat',
    why: 'Virus có thể truyền theo hàng dọc từ cây mẹ sang cây con.',
  },
  {
    id: 'con-trung',
    label: 'Diệt côn trùng chích hút trên ruộng',
    bin: 'thuc-vat',
    why: 'Nhiều virus thực vật được côn trùng chích hút mang từ cây này sang cây khác.',
  },
];
