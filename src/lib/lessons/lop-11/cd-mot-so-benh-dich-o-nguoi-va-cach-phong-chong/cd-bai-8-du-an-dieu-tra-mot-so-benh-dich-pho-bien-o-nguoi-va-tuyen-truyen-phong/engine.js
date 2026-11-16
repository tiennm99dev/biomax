/**
 * The two tools of the project. The survey tally counts, for each common
 * epidemic disease, the households in which someone fell ill in the last
 * twelve months, turns the counts into shares of the households asked and
 * draws the observations a report would make. The poster maker checks that a
 * campaign poster recommends the measures that block the chosen disease's
 * route and nothing that does not. No DOM here, so it is tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {{
 *   id: string, name: string, route: string, measures: string[], extra: string[], slogan: string,
 * }} Disease
 * @typedef {{ id: string, text: string }} Measure
 * @typedef {Record<string, number>} Tally
 */

/** Fewer households than this make the shares unreliable. */
export const MIN_HOUSEHOLDS = 20;
export const MAX_HOUSEHOLDS = 200;

/** @type {Measure[]} */
export const MEASURES = [
  { id: 'khau-trang', text: 'Đeo khẩu trang nơi đông người, che miệng khi ho, hắt hơi' },
  { id: 'rua-tay', text: 'Rửa tay thường xuyên bằng xà phòng' },
  { id: 'vac-xin', text: 'Tiêm vắc-xin đầy đủ, đúng lịch' },
  { id: 'an-chin', text: 'Ăn chín, uống sôi, đậy kín thức ăn' },
  { id: 'khu-trung', text: 'Lau rửa đồ chơi, sàn nhà bằng xà phòng hoặc chất khử khuẩn' },
  { id: 'diet-muoi', text: 'Diệt muỗi, bọ gậy; đậy kín dụng cụ chứa nước' },
  { id: 'ngu-man', text: 'Ngủ màn, mặc quần áo dài, tránh muỗi đốt' },
  { id: 'cach-li', text: 'Người bệnh nghỉ ở nhà, hạn chế tiếp xúc với người khác' },
  { id: 'kim-tiem', text: 'Không dùng chung bơm, kim tiêm' },
];

/**
 * The diseases of the survey with the measures a poster about each must
 * carry (`measures`) and those it may also carry (`extra`); any other measure
 * on the poster does not fit the disease's route.
 * @type {Disease[]}
 */
export const DISEASES = [
  {
    id: 'cum',
    name: 'Cúm',
    route: 'đường hô hấp',
    measures: ['khau-trang', 'rua-tay', 'vac-xin', 'cach-li'],
    extra: ['khu-trung'],
    slogan: 'Che miệng khi ho, cúm không lan',
  },
  {
    id: 'sxh',
    name: 'Sốt xuất huyết',
    route: 'đường máu, qua muỗi vằn đốt',
    measures: ['diet-muoi', 'ngu-man'],
    extra: ['cach-li'],
    slogan: 'Không có lăng quăng, không có sốt xuất huyết',
  },
  {
    id: 'tcm',
    name: 'Tay chân miệng',
    route: 'đường tiêu hoá và tiếp xúc trực tiếp',
    measures: ['rua-tay', 'an-chin', 'khu-trung', 'cach-li'],
    extra: ['khau-trang'],
    slogan: 'Rửa tay sạch, bé khoẻ mạnh',
  },
  {
    id: 'tieu-chay',
    name: 'Tiêu chảy cấp',
    route: 'đường tiêu hoá',
    measures: ['rua-tay', 'an-chin', 'cach-li'],
    extra: ['khu-trung', 'vac-xin'],
    slogan: 'Ăn chín, uống sôi, tiêu chảy xa rời',
  },
  {
    id: 'covid',
    name: 'COVID-19',
    route: 'đường hô hấp',
    measures: ['khau-trang', 'rua-tay', 'vac-xin', 'cach-li'],
    extra: ['khu-trung'],
    slogan: 'Khẩu trang, vắc-xin: lá chắn cho cộng đồng',
  },
  {
    id: 'thuy-dau',
    name: 'Thuỷ đậu',
    route: 'đường hô hấp và tiếp xúc với nốt phỏng',
    measures: ['khau-trang', 'rua-tay', 'vac-xin', 'cach-li'],
    extra: ['khu-trung'],
    slogan: 'Tiêm vắc-xin, thuỷ đậu tránh xa',
  },
];

/** @param {string} id */
export const diseaseOf = (id) => DISEASES.find((d) => d.id === id) ?? DISEASES[0];
/** @param {string} id */
export const measureOf = (id) => MEASURES.find((m) => m.id === id) ?? MEASURES[0];

/** @returns {Tally} */
export const emptyTally = () => Object.fromEntries(DISEASES.map((d) => [d.id, 0]));

/** Made-up results of 40 households, for practising the analysis. */
export const SAMPLE = {
  households: 40,
  tally: { cum: 22, sxh: 9, tcm: 4, 'tieu-chay': 6, covid: 5, 'thuy-dau': 3 },
};

/**
 * The share of households, in percent with one decimal, in which someone
 * had each disease. A household may count under several diseases, so the
 * shares need not add up to 100.
 * @param {Tally} tally @param {number} households
 */
export function shares(tally, households) {
  return DISEASES.map((d) => {
    const count = Math.min(tally[d.id] ?? 0, households);
    const share = households > 0 ? tidy(Math.round((count / households) * 1000) / 10, 6) : 0;
    return { id: d.id, name: d.name, count, share };
  });
}

/**
 * The observations for the report.
 * @param {Tally} tally @param {number} households
 * @returns {Array<{ tone: 'ok' | 'warn' | 'info', text: string }>}
 */
export function observations(tally, households) {
  /** @type {Array<{ tone: 'ok' | 'warn' | 'info', text: string }>} */
  const notes = [];
  if (households === 0) {
    return [{ tone: 'info', text: 'Nhập số hộ đã khảo sát và số hộ có người mắc mỗi bệnh.' }];
  }
  if (households < MIN_HOUSEHOLDS) {
    notes.push({
      tone: 'warn',
      text: `Mới khảo sát ${households} hộ: nên khảo sát ít nhất ${MIN_HOUSEHOLDS} hộ để tỉ lệ đáng tin cậy hơn.`,
    });
  }
  const over = DISEASES.filter((d) => (tally[d.id] ?? 0) > households);
  if (over.length) {
    notes.push({
      tone: 'warn',
      text: `Số hộ có người mắc ${over.map((d) => d.name.toLowerCase()).join(', ')} lớn hơn số hộ đã khảo sát: hãy kiểm tra lại phiếu.`,
    });
  }
  const rows = shares(tally, households).filter((r) => r.count > 0);
  if (rows.length === 0) {
    notes.push({ tone: 'info', text: 'Chưa có hộ nào ghi nhận người mắc bệnh dịch.' });
    return notes;
  }
  const top = rows.reduce((a, b) => (b.count > a.count ? b : a));
  const d = diseaseOf(top.id);
  notes.push({
    tone: 'info',
    text: `Phổ biến nhất: ${d.name.toLowerCase()}, ở ${formatNumber(top.share)}% số hộ. Bệnh lây qua ${d.route}; sản phẩm tuyên truyền nên tập trung vào: ${d.measures
      .map((m) => measureOf(m).text.toLowerCase())
      .join('; ')}.`,
  });
  return notes;
}

/**
 * The check of a poster: the measures it is missing and those that do not
 * fit the disease.
 * @param {string} diseaseId @param {string[]} chosen measure ids
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string, missing: Measure[], wrong: Measure[] }}
 */
export function posterCheck(diseaseId, chosen) {
  const d = diseaseOf(diseaseId);
  const missing = d.measures.filter((m) => !chosen.includes(m)).map(measureOf);
  const wrong = chosen
    .filter((m) => !d.measures.includes(m) && !d.extra.includes(m))
    .map(measureOf);
  if (chosen.length === 0) {
    return {
      tone: 'info',
      text: `Chọn các biện pháp em muốn đưa lên áp phích phòng bệnh ${d.name.toLowerCase()}.`,
      missing,
      wrong,
    };
  }
  if (wrong.length) {
    return {
      tone: 'warn',
      text: `Áp phích có biện pháp không phù hợp: ${wrong.map((m) => m.text.toLowerCase()).join('; ')}. Bệnh ${d.name.toLowerCase()} lây qua ${d.route}.`,
      missing,
      wrong,
    };
  }
  if (missing.length) {
    return {
      tone: 'info',
      text: `Các biện pháp đã chọn đều đúng. Còn thiếu ${missing.length} biện pháp quan trọng; hãy nghĩ thêm về con đường lây qua ${d.route}.`,
      missing,
      wrong,
    };
  }
  return {
    tone: 'ok',
    text: `Áp phích đầy đủ và chính xác: mọi biện pháp đều cắt đúng con đường lây của bệnh ${d.name.toLowerCase()}.`,
    missing,
    wrong,
  };
}
