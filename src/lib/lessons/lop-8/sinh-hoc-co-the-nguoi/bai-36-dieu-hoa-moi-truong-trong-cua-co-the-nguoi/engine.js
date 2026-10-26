/**
 * A teaching model of homeostasis: the body keeps an index of the internal
 * environment inside its normal range by negative feedback.
 *
 * Each index has a normal range and a set point. When an event pushes the
 * value out of range, the body responds and each step brings the value a
 * fixed fraction of the way back to the set point. When the regulating
 * organ is impaired, the value is not brought back and the imbalance lasts,
 * which is how disease appears.
 *
 * Ranges are the usual reference values for adults: fasting blood glucose
 * 3,9-6,4 mmol/L and body temperature about 36,5-37,5 °C.
 */

/** @typedef {'duong-huyet' | 'than-nhiet'} IndexId */
/** @typedef {'thap' | 'binh-thuong' | 'cao'} Level */

/**
 * @typedef {{
 *   id: IndexId;
 *   name: string;
 *   unit: string;
 *   low: number;
 *   high: number;
 *   setPoint: number;
 *   min: number;
 *   max: number;
 *   step: number;
 *   digits: number;
 *   events: Array<{ id: string, label: string, value: number }>;
 *   impaired: string;
 * }} PhysIndex
 */

/** @type {Record<IndexId, PhysIndex>} */
export const INDICES = {
  'duong-huyet': {
    id: 'duong-huyet',
    name: 'Đường huyết (glucose trong máu)',
    unit: 'mmol/L',
    low: 3.9,
    high: 6.4,
    setPoint: 5.2,
    min: 2,
    max: 12,
    step: 0.1,
    digits: 1,
    events: [
      { id: 'an', label: 'Ăn bữa nhiều tinh bột, đồ ngọt', value: 9.5 },
      { id: 'doi', label: 'Nhịn đói lâu, vận động mạnh', value: 3.1 },
    ],
    impaired: 'Tuyến tụy tiết không đủ insulin',
  },
  'than-nhiet': {
    id: 'than-nhiet',
    name: 'Thân nhiệt',
    unit: '°C',
    low: 36.5,
    high: 37.5,
    setPoint: 37,
    min: 34,
    max: 40,
    step: 0.1,
    digits: 1,
    events: [
      { id: 'nong', label: 'Chạy bộ dưới trời nắng nóng', value: 38.4 },
      { id: 'lanh', label: 'Đứng lâu ngoài trời rét', value: 35.6 },
    ],
    impaired: 'Cơ thể mất nhiều nước, không tiết được mồ hôi',
  },
};

/** How much of the gap to the set point one step of regulation closes. */
export const RATE = 0.4;

/**
 * @param {IndexId} id
 * @param {number} value
 * @returns {Level}
 */
export function levelOf(id, value) {
  const x = INDICES[id];
  const v = Math.round(value * 10) / 10;
  if (v < x.low) return 'thap';
  if (v > x.high) return 'cao';
  return 'binh-thuong';
}

/**
 * The value after one step of regulation. An impaired body cannot lower a
 * value that is too high (glucose without insulin, heat without sweating).
 * @param {IndexId} id
 * @param {number} value
 * @param {boolean} [impaired]
 */
export function regulate(id, value, impaired = false) {
  const x = INDICES[id];
  if (impaired && value > x.setPoint) return value;
  const next = value + (x.setPoint - value) * RATE;
  return Math.round(next * 100) / 100;
}

/**
 * The values over `steps` steps of regulation, starting from `value`.
 * @param {IndexId} id
 * @param {number} value
 * @param {number} steps
 * @param {boolean} [impaired]
 */
export function trace(id, value, steps, impaired = false) {
  const out = [value];
  for (let k = 0; k < steps; k++) out.push(regulate(id, out[out.length - 1], impaired));
  return out;
}

/**
 * What the body does at this value.
 * @param {IndexId} id
 * @param {number} value
 * @param {boolean} [impaired]
 */
export function response(id, value, impaired = false) {
  const level = levelOf(id, value);
  if (id === 'duong-huyet') {
    if (level === 'cao')
      return impaired
        ? 'Đường huyết cao nhưng tuyến tụy không tiết đủ insulin: glucose không được chuyển vào tế bào và dự trữ, đường huyết vẫn cao kéo dài. Đây là biểu hiện của bệnh tiểu đường.'
        : 'Đường huyết cao: tuyến tụy tiết insulin, giúp tế bào nhận glucose và gan, cơ chuyển glucose thành glycogen dự trữ. Đường huyết giảm dần.';
    if (level === 'thap')
      return 'Đường huyết thấp: tuyến tụy tiết glucagon, giúp gan phân giải glycogen thành glucose đưa vào máu. Đường huyết tăng dần. Cơ thể có cảm giác đói, mệt.';
    return 'Đường huyết trong ngưỡng bình thường: môi trường trong cân bằng.';
  }
  if (level === 'cao')
    return impaired
      ? 'Thân nhiệt cao nhưng cơ thể không tiết được mồ hôi để tỏa nhiệt: nhiệt tích tụ, thân nhiệt vẫn cao, có nguy cơ bị say nắng, say nóng.'
      : 'Thân nhiệt cao: mạch máu dưới da dãn ra, tuyến mồ hôi tăng tiết mồ hôi để tỏa nhiệt. Thân nhiệt giảm dần.';
  if (level === 'thap')
    return 'Thân nhiệt thấp: mạch máu dưới da co lại, cơ co chân lông co (sởn gai ốc), cơ run để sinh nhiệt. Thân nhiệt tăng dần.';
  return 'Thân nhiệt trong ngưỡng bình thường: môi trường trong cân bằng.';
}
