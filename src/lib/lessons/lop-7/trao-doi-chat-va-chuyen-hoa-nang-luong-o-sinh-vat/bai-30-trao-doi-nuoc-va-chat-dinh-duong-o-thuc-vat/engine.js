/**
 * A simplified plant water budget, following the book:
 *
 * - roots take up water and dissolved minerals mainly through root hairs;
 *   moist, loose, well-aired soil helps, dry soil or waterlogged soil (roots
 *   short of oxygen) hinders uptake;
 * - xylem carries water and minerals up from the roots; phloem carries
 *   organic matter (sugar) from the leaves to the other organs;
 * - leaves lose water as vapour mainly through stomata; light opens the
 *   stomata, a lack of water closes them; the drier the air, the faster
 *   transpiration. Transpiration pulls water up the xylem.
 *
 * Rates are fractions of the highest rate, for teaching only.
 */

/** @typedef {'am' | 'kho' | 'ngap'} Soil */
/** @typedef {{ humidity: number, light: boolean, soil: Soil }} Weather */

/** Highest uptake the roots manage in each soil, as a fraction. */
export const UPTAKE = { am: 1, kho: 0.15, ngap: 0.3 };

/** Names of the soil states. */
export const SOIL_NAME = {
  am: 'đất ẩm, tơi xốp',
  kho: 'đất khô hạn',
  ngap: 'đất ngập úng',
};

/**
 * How wide the stomata open (0-1) before any shortage of water.
 * @param {boolean} light
 */
export const openByLight = (light) => (light ? 1 : 0.15);

/**
 * The water budget of the plant.
 * @param {Weather} w
 */
export function budget({ humidity, light, soil }) {
  const h = Math.min(100, Math.max(0, humidity)) / 100;
  const demand = openByLight(light) * (1.1 - h);
  const supply = UPTAKE[soil];
  const short = demand > supply + 1e-9;
  // a thirsty plant closes its stomata so transpiration falls to what the
  // roots can supply
  const transpiration = Math.min(demand, supply);
  const aperture = short
    ? Math.max(0.05, openByLight(light) * (supply / demand))
    : openByLight(light);
  const sugar = light ? Math.min(1, aperture) * 0.9 : 0;
  return {
    demand: round(demand),
    transpiration: round(transpiration),
    uptake: round(transpiration),
    aperture: round(aperture),
    sugar: round(sugar),
    wilting: short && demand - supply > 0.1,
  };
}

/** @param {number} x */
const round = (x) => Math.round(x * 100) / 100;

/**
 * A sentence explaining the plant's state.
 * @param {Weather} w
 */
export function explain(w) {
  const b = budget(w);
  if (w.soil === 'ngap')
    return 'Đất ngập úng thiếu khí oxygen: rễ không hô hấp được bình thường nên hút nước và chất khoáng kém. Cần tháo nước, làm đất thoáng khí.';
  if (b.wilting)
    return 'Đất khô hạn: rễ hút không kịp lượng nước thoát ra ở lá. Cây thiếu nước, khí khổng khép lại, lá héo. Cần tưới nước cho cây.';
  if (!w.light)
    return 'Trong tối, khí khổng gần như khép: thoát hơi nước rất yếu nên dòng nước trong mạch gỗ chảy chậm; lá không quang hợp nên mạch rây ít chất hữu cơ mới.';
  if (w.humidity >= 85)
    return 'Không khí rất ẩm nên hơi nước khó thoát ra khỏi lá: thoát hơi nước yếu, lực kéo nước lên yếu, dòng nước trong mạch gỗ chậm lại.';
  if (w.humidity <= 40)
    return 'Không khí khô: hơi nước thoát ra khỏi lá rất mạnh, kéo dòng nước và chất khoáng từ rễ lên nhanh theo mạch gỗ. Đất đủ ẩm nên rễ hút kịp, cây không héo.';
  return 'Có ánh sáng, đủ nước: khí khổng mở, lá thoát hơi nước tạo lực kéo nước và chất khoáng từ rễ lên lá qua mạch gỗ; chất hữu cơ do lá tạo ra theo mạch rây đi đến các cơ quan khác.';
}

/**
 * Lengths of a polyline's segments and its total length.
 * @param {Array<{ x: number, y: number }>} path
 */
function lengths(path) {
  const seg = path.slice(1).map((p, i) => Math.hypot(p.x - path[i].x, p.y - path[i].y));
  return { seg, total: seg.reduce((a, b) => a + b, 0) };
}

/**
 * The point at fraction `s` (0-1) of the way along a polyline.
 * @param {Array<{ x: number, y: number }>} path
 * @param {number} s
 */
export function pointAt(path, s) {
  const { seg, total } = lengths(path);
  let d = (((s % 1) + 1) % 1) * total;
  for (let i = 0; i < seg.length; i += 1) {
    if (d <= seg[i] || i === seg.length - 1) {
      const t = seg[i] === 0 ? 0 : Math.min(1, d / seg[i]);
      return {
        x: path[i].x + (path[i + 1].x - path[i].x) * t,
        y: path[i].y + (path[i + 1].y - path[i].y) * t,
      };
    }
    d -= seg[i];
  }
  return { ...path[path.length - 1] };
}
