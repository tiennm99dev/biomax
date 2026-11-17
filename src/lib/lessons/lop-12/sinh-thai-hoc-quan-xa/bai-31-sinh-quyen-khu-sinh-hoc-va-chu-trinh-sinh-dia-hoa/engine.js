/**
 * A one-box model of the carbon cycle (chu trình carbon) for the explore
 * widget. The atmosphere holds carbon in GtC; 2,13 GtC is 1 ppm of CO₂.
 * Each year it gains the carbon burnt from fossil fuels and the carbon set
 * free or taken up by changing forests, and loses to the oceans and land
 * plants a share of its excess over the pre-industrial level. The numbers
 * are rounded from published global budgets; the model only shows the
 * direction and size of the trend, not a forecast.
 */

/** GtC of carbon per ppm of CO₂ in the atmosphere. */
export const GTC_PER_PPM = 2.13;
/** Pre-industrial CO₂ level, ppm. */
export const PRE_INDUSTRIAL = 280;
/** Starting CO₂ level of the model, ppm. */
export const START_PPM = 420;
/** Share of the excess carbon taken up each year by the oceans and land plants. */
export const SINK_RATE = 0.018;
/** Fossil carbon burnt per year today, GtC. */
export const TODAY_FOSSIL = 10;
/** Years the model runs. */
export const YEARS = 80;

/** Natural yearly exchanges of the cycle, GtC per year (balanced before people). */
export const NATURAL = { photosynthesis: 120, respiration: 60, decomposition: 60, ocean: 80 };

/** @typedef {'pha-rung' | 'giu-nguyen' | 'trong-rung'} Forest */

/** Net carbon the forests add to the air each year, GtC (negative: taken up). */
export const FOREST = /** @type {Record<Forest, { label: string, flux: number }>} */ ({
  'pha-rung': { label: 'Phá rừng', flux: 1.5 },
  'giu-nguyen': { label: 'Giữ nguyên', flux: 0 },
  'trong-rung': { label: 'Trồng rừng', flux: -1.5 },
});

/**
 * Carbon taken out of the air in a year by the oceans and land plants,
 * beyond the natural balance, GtC.
 * @param {number} ppm
 */
export function sinkOf(ppm) {
  return SINK_RATE * (ppm - PRE_INDUSTRIAL) * GTC_PER_PPM;
}

/**
 * The CO₂ level year by year, from year 0 to `years`.
 * @param {number} fossil fossil carbon burnt per year, GtC
 * @param {Forest} forest
 * @param {number} [years]
 * @returns {number[]} ppm, `years + 1` values
 */
export function simulate(fossil, forest, years = YEARS) {
  const out = [START_PPM];
  let ppm = START_PPM;
  for (let i = 0; i < years; i++) {
    const change = fossil + FOREST[forest].flux - sinkOf(ppm);
    ppm += change / GTC_PER_PPM;
    out.push(ppm);
  }
  return out;
}

/**
 * The yearly exchanges of the cycle drawn on the diagram, GtC per year.
 * Photosynthesis grows when forests are planted and shrinks when they are
 * cut; the ocean takes up part of the extra carbon.
 * @param {number} fossil
 * @param {Forest} forest
 * @param {number} ppm current level
 */
export function fluxes(fossil, forest, ppm) {
  const sink = sinkOf(ppm);
  const forestFlux = FOREST[forest].flux;
  return {
    photosynthesis: NATURAL.photosynthesis - forestFlux + sink / 2,
    respiration: NATURAL.respiration,
    decomposition: NATURAL.decomposition,
    oceanIn: NATURAL.ocean + sink / 2,
    oceanOut: NATURAL.ocean,
    fossil,
    net: fossil + forestFlux - sink,
  };
}

/**
 * The cycle's processes, each an arrow on the diagram between two stores.
 * @type {Array<{ id: string, name: string, from: string, to: string, text: string }>}
 */
export const PROCESSES = [
  {
    id: 'quang-hop',
    name: 'Quang hợp',
    from: 'air',
    to: 'plant',
    text: 'Thực vật, tảo, vi khuẩn lam dùng năng lượng ánh sáng cố định $\\mathrm{CO_2}$ thành chất hữu cơ: carbon đi từ môi trường vào quần xã.',
  },
  {
    id: 'an',
    name: 'Chuỗi thức ăn',
    from: 'plant',
    to: 'animal',
    text: 'Carbon trong chất hữu cơ của thực vật chuyển sang động vật qua các bậc dinh dưỡng.',
  },
  {
    id: 'xac',
    name: 'Chết, thải',
    from: 'plant',
    to: 'dead',
    text: 'Lá rụng, xác thực vật, xác và chất thải của động vật chứa carbon hữu cơ, trở thành nguồn thức ăn của sinh vật phân giải.',
  },
  {
    id: 'ho-hap',
    name: 'Hô hấp',
    from: 'animal',
    to: 'air',
    text: 'Thực vật, động vật hô hấp, phân giải chất hữu cơ, thải $\\mathrm{CO_2}$ trở lại khí quyển.',
  },
  {
    id: 'phan-giai',
    name: 'Phân giải',
    from: 'dead',
    to: 'air',
    text: 'Vi khuẩn, nấm phân giải xác và chất thải của sinh vật, trả $\\mathrm{CO_2}$ về khí quyển.',
  },
  {
    id: 'lang-dong',
    name: 'Lắng đọng',
    from: 'dead',
    to: 'fossil',
    text: 'Một phần xác sinh vật không được phân giải hết, bị vùi lấp hàng triệu năm thành than đá, dầu mỏ, khí đốt; vỏ đá vôi lắng xuống đáy biển. Carbon tạm ra khỏi chu trình.',
  },
  {
    id: 'dot',
    name: 'Đốt nhiên liệu',
    from: 'fossil',
    to: 'air',
    text: 'Con người đốt than đá, dầu mỏ, khí đốt, trả rất nhanh vào khí quyển lượng carbon đã lắng đọng hàng triệu năm.',
  },
  {
    id: 'dai-duong',
    name: 'Hoà tan',
    from: 'air',
    to: 'ocean',
    text: '$\\mathrm{CO_2}$ hoà tan vào nước đại dương và thoát ra trở lại; đại dương đang hấp thụ một phần lượng $\\mathrm{CO_2}$ do con người thải ra.',
  },
];

/**
 * Feedback on a scenario: where CO₂ ends and whether it still rises.
 * @param {number} fossil
 * @param {Forest} forest
 * @param {number[]} series ppm by year
 */
export function verdict(fossil, forest, series) {
  const end = series[series.length - 1];
  const last = end - series[series.length - 2];
  const net = fossil + FOREST[forest].flux - sinkOf(START_PPM);
  /** @type {'ok' | 'warn' | 'info'} */
  let tone = 'info';
  let trend;
  if (net > 0.05) {
    tone = 'warn';
    trend =
      'Lượng carbon thải vào khí quyển lớn hơn lượng đại dương và thực vật hấp thụ thêm, nên $\\mathrm{CO_2}$ tăng, hiệu ứng nhà kính mạnh lên, Trái Đất ấm lên.';
  } else if (net < -0.05) {
    tone = 'ok';
    trend =
      'Lượng thải nhỏ hơn lượng đại dương và thực vật hấp thụ thêm, nên $\\mathrm{CO_2}$ giảm dần về phía mức tiền công nghiệp.';
  } else {
    trend = 'Lượng thải gần bằng lượng hấp thụ thêm, nên $\\mathrm{CO_2}$ gần như giữ nguyên.';
  }
  const still = last > 0.05 ? ' và vẫn đang tăng' : last < -0.05 ? ' và đang giảm' : '';
  return { tone, end, still, trend };
}
