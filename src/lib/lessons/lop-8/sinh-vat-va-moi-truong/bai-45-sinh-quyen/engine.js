/**
 * A simplified climate diagram of the main land biomes (khu sinh học trên
 * cạn), after Whittaker: the mean yearly temperature and the yearly rainfall
 * of a place decide which biome grows there. The regions are axis-aligned
 * rectangles, so the diagram and `biomeAt` always agree. Boundaries are
 * rounded teaching values, not exact limits.
 */

/** @typedef {'dong-reu' | 'rung-la-kim' | 'rung-on-doi' | 'thao-nguyen' | 'hoang-mac' | 'savan' | 'rung-mua'} BiomeId */

/**
 * @typedef {{
 *   id: BiomeId;
 *   name: string;
 *   color: string;
 *   climate: string;
 *   plants: string;
 *   animals: string;
 *   where: string;
 *   sample: { t: number, p: number };
 * }} Biome
 */

export const T_MIN = -15;
export const T_MAX = 30;
export const P_MIN = 0;
export const P_MAX = 400;

/** @type {Biome[]} */
export const BIOMES = [
  {
    id: 'dong-reu',
    name: 'Đồng rêu hàn đới',
    color: '#cbd5e1',
    climate: 'Rất lạnh, mùa đông dài, lớp đất sâu đóng băng quanh năm, mùa hè ngắn.',
    plants: 'Rêu, địa y, cỏ và cây bụi thấp.',
    animals: 'Tuần lộc, cáo Bắc Cực, chim di cư.',
    where: 'Vùng quanh Bắc Cực (bắc Canada, bắc Nga).',
    sample: { t: -10, p: 25 },
  },
  {
    id: 'rung-la-kim',
    name: 'Rừng lá kim phương Bắc',
    color: '#5eead4',
    climate: 'Mùa đông dài, lạnh, nhiều tuyết; mùa hè ngắn, mát.',
    plants: 'Thông, vân sam, linh sam (cây lá kim).',
    animals: 'Gấu nâu, chó sói, nai sừng tấm, sóc.',
    where: 'Bắc Âu, Siberia (Nga), Canada.',
    sample: { t: 0, p: 60 },
  },
  {
    id: 'rung-on-doi',
    name: 'Rừng lá rộng ôn đới',
    color: '#86efac',
    climate: 'Bốn mùa rõ rệt, mùa đông lạnh, mưa khá đều trong năm.',
    plants: 'Sồi, dẻ, phong; cây rụng lá vào mùa đông.',
    animals: 'Hươu, gấu, sóc, cáo, nhiều loài chim.',
    where: 'Tây Âu, miền đông Bắc Mỹ, Đông Á.',
    sample: { t: 12, p: 120 },
  },
  {
    id: 'thao-nguyen',
    name: 'Thảo nguyên',
    color: '#fde68a',
    climate: 'Mưa ít; mùa hè nóng, mùa đông lạnh.',
    plants: 'Cỏ chiếm ưu thế, rất ít cây gỗ.',
    animals: 'Ngựa hoang, bò rừng bison, sói đồng cỏ, chuột.',
    where: 'Trung Á, Mông Cổ, đồng cỏ Bắc Mỹ.',
    sample: { t: 10, p: 50 },
  },
  {
    id: 'hoang-mac',
    name: 'Hoang mạc (sa mạc)',
    color: '#fdba74',
    climate: 'Rất ít mưa; chênh lệch nhiệt độ ngày và đêm rất lớn.',
    plants: 'Xương rồng, cây bụi gai, lá biến thành gai, rễ dài.',
    animals: 'Lạc đà, thằn lằn, rắn, bọ cạp; nhiều loài hoạt động về đêm.',
    where: 'Sahara (châu Phi), Trung Đông, nội địa Australia.',
    sample: { t: 25, p: 15 },
  },
  {
    id: 'savan',
    name: 'Savan',
    color: '#d9f99d',
    climate: 'Nóng quanh năm, có mùa khô kéo dài và mùa mưa.',
    plants: 'Cỏ cao xen cây gỗ mọc thưa (keo, bao báp).',
    animals: 'Ngựa vằn, linh dương, hươu cao cổ, voi, sư tử.',
    where: 'Châu Phi, Nam Mỹ, bắc Australia.',
    sample: { t: 25, p: 100 },
  },
  {
    id: 'rung-mua',
    name: 'Rừng mưa nhiệt đới',
    color: '#4ade80',
    climate: 'Nóng ẩm quanh năm, mưa nhiều.',
    plants: 'Cây gỗ cao nhiều tầng, dây leo, phong lan; độ đa dạng loài cao nhất.',
    animals: 'Khỉ, vượn, báo, vẹt, ếch cây, rất nhiều côn trùng.',
    where: 'Lưu vực Amazon (Nam Mỹ), Trung Phi, Đông Nam Á (có Việt Nam).',
    sample: { t: 26, p: 250 },
  },
];

/**
 * Rectangles of the diagram: [biome, tFrom, tTo, pFrom, pTo], each closed
 * below and open above (except at the axis ends).
 * @type {Array<[BiomeId, number, number, number, number]>}
 */
export const REGIONS = [
  ['dong-reu', -15, -5, 0, 400],
  ['hoang-mac', -5, 20, 0, 25],
  ['hoang-mac', 20, 30, 0, 50],
  ['rung-la-kim', -5, 5, 25, 400],
  ['thao-nguyen', 5, 20, 25, 75],
  ['rung-on-doi', 5, 20, 75, 400],
  ['savan', 20, 30, 50, 150],
  ['rung-mua', 20, 30, 150, 400],
];

/**
 * The biome of a place with mean yearly temperature `t` (°C) and yearly
 * rainfall `p` (cm).
 * @param {number} t
 * @param {number} p
 * @returns {Biome}
 */
export function biomeAt(t, p) {
  const tc = Math.min(T_MAX, Math.max(T_MIN, t));
  const pc = Math.min(P_MAX, Math.max(P_MIN, p));
  const hit = REGIONS.find(
    ([, t0, t1, p0, p1]) =>
      tc >= t0 &&
      (tc < t1 || (t1 === T_MAX && tc === T_MAX)) &&
      pc >= p0 &&
      (pc < p1 || (p1 === P_MAX && pc === P_MAX)),
  );
  if (!hit) throw new Error(`no biome at ${t}, ${p}`);
  return /** @type {Biome} */ (BIOMES.find((b) => b.id === hit[0]));
}
