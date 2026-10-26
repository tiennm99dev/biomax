/**
 * A growth simulator for the lesson on the factors that affect growth
 * (nhiệt độ, ánh sáng, nước, chất dinh dưỡng): raise tilapia (cá rô phi) or a
 * vegetable plant, set the conditions, and compare the growth curve with the
 * one under the best conditions.
 *
 * Each factor gets a score from 0 to 1. Their product slows the growth rate
 * and lowers the final size of a logistic curve. The tilapia temperature
 * limits are the textbook ones (dies below 5,6 °C or above 42 °C, grows best
 * from 23 °C to 37 °C); the other scores are illustrative.
 */

/** @typedef {'ca' | 'cay'} ModelId */

/**
 * @typedef {object} Level
 * @property {string} value
 * @property {string} label
 * @property {number} score 0 to 1
 * @property {string} text what this level does to the organism
 */

/**
 * @typedef {object} Factor
 * @property {string} id
 * @property {string} name
 * @property {Level[]} levels the best level is the one with score 1
 */

/**
 * @typedef {object} Model
 * @property {ModelId} id
 * @property {string} name
 * @property {string} measure
 * @property {string} unit
 * @property {number} start size at day 0
 * @property {number} full final size under the best conditions
 * @property {number} rate growth rate per day under the best conditions
 * @property {number} days length of the run
 * @property {Factor[]} factors chosen from levels (the tilapia temperature is a slider)
 */

export const TILAPIA = { dieBelow: 5.6, dieAbove: 42, bestFrom: 23, bestTo: 37 };

/** @type {Record<ModelId, Model>} */
export const MODELS = {
  ca: {
    id: 'ca',
    name: 'Cá rô phi',
    measure: 'Khối lượng một con cá',
    unit: 'g',
    start: 5,
    full: 500,
    rate: 0.0434,
    days: 180,
    factors: [
      {
        id: 'thuc-an',
        name: 'Thức ăn',
        levels: [
          {
            value: 'thieu',
            label: 'Thiếu',
            score: 0.4,
            text: 'Thiếu thức ăn: cá thiếu chất dinh dưỡng để tạo tế bào mới nên chậm lớn, gầy yếu.',
          },
          { value: 'du', label: 'Đủ', score: 1, text: '' },
          {
            value: 'thua',
            label: 'Thừa',
            score: 0.7,
            text: 'Thức ăn thừa phân huỷ làm bẩn nước, cá dễ bệnh và lớn chậm hơn; lại tốn thức ăn.',
          },
        ],
      },
    ],
  },
  cay: {
    id: 'cay',
    name: 'Cây rau cải',
    measure: 'Chiều cao cây',
    unit: 'cm',
    start: 1,
    full: 60,
    rate: 0.118,
    days: 60,
    factors: [
      {
        id: 'nhiet-do',
        name: 'Nhiệt độ',
        levels: [
          {
            value: 'ret',
            label: 'Rét',
            score: 0.3,
            text: 'Trời rét: các quá trình sống trong cây diễn ra chậm, cây chậm lớn.',
          },
          { value: 'vua', label: 'Thích hợp', score: 1, text: '' },
          {
            value: 'nong',
            label: 'Nóng gắt',
            score: 0.4,
            text: 'Nắng nóng gắt: cây mất nhiều nước, héo, chậm lớn.',
          },
        ],
      },
      {
        id: 'anh-sang',
        name: 'Ánh sáng',
        levels: [
          {
            value: 'thieu',
            label: 'Thiếu',
            score: 0.3,
            text: 'Thiếu ánh sáng: cây quang hợp kém, thân vươn dài yếu ớt, lá vàng.',
          },
          { value: 'du', label: 'Đủ', score: 1, text: '' },
        ],
      },
      {
        id: 'nuoc',
        name: 'Nước',
        levels: [
          {
            value: 'thieu',
            label: 'Thiếu',
            score: 0.25,
            text: 'Thiếu nước: cây héo, các hoạt động sống bị đình trệ, cây ngừng lớn.',
          },
          { value: 'du', label: 'Vừa đủ', score: 1, text: '' },
          {
            value: 'ung',
            label: 'Ngập úng',
            score: 0.3,
            text: 'Ngập úng: rễ thiếu oxygen để hô hấp, rễ thối, cây chậm lớn.',
          },
        ],
      },
      {
        id: 'phan',
        name: 'Phân bón',
        levels: [
          {
            value: 'thieu',
            label: 'Thiếu',
            score: 0.5,
            text: 'Thiếu chất dinh dưỡng (ví dụ thiếu nitrogen): cây sinh trưởng chậm, lá vàng.',
          },
          { value: 'du', label: 'Vừa đủ', score: 1, text: '' },
          {
            value: 'thua',
            label: 'Quá nhiều',
            score: 0.6,
            text: 'Bón quá nhiều phân: rễ cây bị tổn thương, cây sinh trưởng kém, lại gây lãng phí và ô nhiễm.',
          },
        ],
      },
    ],
  },
};

/**
 * How water temperature affects tilapia.
 * @param {number} t in °C
 * @returns {{ score: number, zone: 'chet' | 'kem' | 'tot', text: string }}
 */
export function tilapiaTemperature(t) {
  const { dieBelow, dieAbove, bestFrom, bestTo } = TILAPIA;
  if (t < dieBelow || t > dieAbove) {
    return {
      score: 0,
      zone: 'chet',
      text: `Nhiệt độ nằm ngoài giới hạn chịu đựng của cá rô phi (từ 5,6 °C đến 42 °C): cá chết.`,
    };
  }
  if (t >= bestFrom && t <= bestTo) {
    return { score: 1, zone: 'tot', text: '' };
  }
  const score =
    t < bestFrom
      ? 0.15 + (0.85 * (t - dieBelow)) / (bestFrom - dieBelow)
      : 1 - (0.85 * (t - bestTo)) / (dieAbove - bestTo);
  return {
    score,
    zone: 'kem',
    text:
      t < bestFrom
        ? 'Nước lạnh hơn khoảng thuận lợi (23 °C đến 37 °C): cá ăn ít, các hoạt động sống chậm lại, cá sinh trưởng kém.'
        : 'Nước nóng hơn khoảng thuận lợi (23 °C đến 37 °C): cá bị sốc nhiệt, sinh trưởng kém.',
  };
}

/**
 * @typedef {object} Settings
 * @property {number} temperature tilapia water temperature in °C
 * @property {Record<string, string>} levels chosen level value per factor id
 */

/** Settings that give the best growth for a model. @param {ModelId} id @returns {Settings} */
export function bestSettings(id) {
  /** @type {Record<string, string>} */
  const levels = {};
  for (const f of MODELS[id].factors) {
    levels[f.id] = /** @type {Level} */ (f.levels.find((l) => l.score === 1)).value;
  }
  return { temperature: 30, levels };
}

/**
 * Score every factor and name the ones holding growth back.
 * @param {ModelId} id @param {Settings} s
 */
export function evaluate(id, s) {
  const model = MODELS[id];
  /** @type {Array<{ name: string, score: number, text: string }>} */
  const factors = [];
  if (id === 'ca') {
    const t = tilapiaTemperature(s.temperature);
    factors.push({ name: 'Nhiệt độ', score: t.score, text: t.text });
  }
  for (const f of model.factors) {
    const level = f.levels.find((l) => l.value === s.levels[f.id]) ?? f.levels[0];
    factors.push({ name: f.name, score: level.score, text: level.text });
  }
  const score = factors.reduce((p, f) => p * f.score, 1);
  const limiting = factors.filter((f) => f.score < 1).sort((a, b) => a.score - b.score);
  return { score, dead: score === 0, limiting };
}

/**
 * Size on a logistic curve whose rate and final size shrink with `score`.
 * @param {Model} model @param {number} score 0 to 1 @param {number} day
 */
export function sizeOn(model, score, day) {
  if (score <= 0) return model.start;
  const k = model.full * (0.25 + 0.75 * score);
  const r = model.rate * score;
  return k / (1 + ((k - model.start) / model.start) * Math.exp(-r * day));
}

/**
 * Points of the growth curve, one per `step` days.
 * @param {Model} model @param {number} score @param {number} [step]
 * @returns {Array<[number, number]>}
 */
export function growthCurve(model, score, step = 2) {
  /** @type {Array<[number, number]>} */
  const out = [];
  for (let d = 0; d <= model.days; d += step) out.push([d, sizeOn(model, score, d)]);
  return out;
}

/**
 * The readout under the chart.
 * @param {ModelId} id @param {Settings} s
 */
export function verdict(id, s) {
  const model = MODELS[id];
  const e = evaluate(id, s);
  const end = sizeOn(model, e.score, model.days);
  const best = sizeOn(model, 1, model.days);
  const percent = Math.round((100 * end) / best);
  if (e.dead) return { ok: false, end, percent: 0, text: e.limiting[0].text };
  if (e.limiting.length === 0) {
    return {
      ok: true,
      end,
      percent,
      text: 'Mọi nhân tố đều thích hợp: sinh vật sinh trưởng và phát triển nhanh nhất, cho năng suất cao nhất.',
    };
  }
  return {
    ok: false,
    end,
    percent,
    text: `Sau ${model.days} ngày chỉ đạt khoảng ${percent}% so với điều kiện tốt nhất. Nhân tố hạn chế nhiều nhất: ${e.limiting[0].name.toLowerCase()}. ${e.limiting
      .map((f) => f.text)
      .join(' ')}`,
  };
}
