/**
 * Two teaching models for the respiratory system.
 *
 * Breathing (thông khí): `p` runs from 0 (end of breathing out) to 1 (end of
 * breathing in). Breathing in, the external intercostal muscles and the
 * diaphragm contract: the ribs and breastbone lift, the diaphragm flattens and
 * moves down, the chest grows and air flows in. Breathing out, both muscles
 * relax, the chest shrinks and air flows out.
 *
 * Gas exchange: gases diffuse from the side where their concentration is
 * higher to the side where it is lower. Blood entering a capillary bed
 * gradually takes the concentrations of its surroundings as it flows along.
 * Concentrations are relative units for teaching only.
 */

/**
 * Shapes of the chest for one breathing state, in a 260 × 300 view box.
 * @param {number} p 0 (breathed out) to 1 (breathed in)
 */
export function chest(p) {
  const q = Math.min(1, Math.max(0, p));
  return {
    lungRx: 30 + 6 * q,
    lungRy: 50 + 14 * q,
    // Height of the diaphragm dome above its rim: flatter when contracted.
    dome: 46 - 22 * q,
    rim: 244 + 4 * q,
    // How far the ribs lift at their outer ends.
    ribLift: 14 * q,
    volume: Math.round(100 * (1 + 0.25 * q)) / 100,
  };
}

/**
 * Which way air moves when the state goes from `from` to `to`.
 * @param {number} from
 * @param {number} to
 * @returns {'vao' | 'ra' | 'dung'}
 */
export function airflow(from, to) {
  if (Math.abs(to - from) < 1e-6) return 'dung';
  return to > from ? 'vao' : 'ra';
}

/**
 * What the muscles, chest and air do during one movement.
 * @param {'vao' | 'ra' | 'dung'} dir
 */
export function describeBreath(dir) {
  if (dir === 'vao')
    return {
      muscles: 'Cơ liên sườn ngoài co, cơ hoành co',
      chest: 'Xương sườn, xương ức nâng lên; cơ hoành hạ xuống; thể tích lồng ngực tăng',
      text: 'Hít vào: cơ liên sườn ngoài và cơ hoành co làm lồng ngực mở rộng, phổi giãn ra, không khí từ ngoài đi vào phổi.',
    };
  if (dir === 'ra')
    return {
      muscles: 'Cơ liên sườn ngoài dãn, cơ hoành dãn',
      chest: 'Xương sườn, xương ức hạ xuống; cơ hoành nâng lên; thể tích lồng ngực giảm',
      text: 'Thở ra: cơ liên sườn ngoài và cơ hoành dãn, lồng ngực thu nhỏ, phổi co lại, không khí trong phổi bị đẩy ra ngoài.',
    };
  return {
    muscles: '—',
    chest: '—',
    text: 'Bấm "Hít vào" hoặc "Thở ra", hoặc kéo thanh trượt, để thấy lồng ngực và phổi thay đổi.',
  };
}

/** @typedef {{ o2: number, co2: number }} Gases */
/** @typedef {'phoi' | 'te-bao'} Site */

/** Where gases are exchanged: the tissue around the capillary and the blood entering it. */
export const SITES =
  /** @type {Record<Site, { place: string, around: Gases, bloodIn: Gases }>} */ ({
    phoi: { place: 'Phế nang', around: { o2: 100, co2: 40 }, bloodIn: { o2: 40, co2: 46 } },
    'te-bao': { place: 'Tế bào', around: { o2: 40, co2: 46 }, bloodIn: { o2: 100, co2: 40 } },
  });

/**
 * Gas concentrations in the blood a fraction `x` (0-1) of the way along the
 * capillary: they move towards the surroundings as the gases diffuse.
 * @param {Site} site
 * @param {number} x
 * @returns {Gases}
 */
export function bloodAt(site, x) {
  const { around, bloodIn } = SITES[site];
  const k = Math.exp(-5 * Math.min(1, Math.max(0, x)));
  return {
    o2: Math.round(around.o2 + (bloodIn.o2 - around.o2) * k),
    co2: Math.round(around.co2 + (bloodIn.co2 - around.co2) * k),
  };
}

/**
 * The net diffusion of each gas between the surroundings and the blood.
 * `into` is where the gas goes; `amount` is the concentration difference.
 * @param {Site} site
 * @param {number} x
 * @returns {Array<{ gas: 'O₂' | 'CO₂', into: 'mau' | 'ngoai' | null, amount: number }>}
 */
export function diffusion(site, x) {
  const b = bloodAt(site, x);
  const a = SITES[site].around;
  /** @param {number} out @param {number} blood */
  const dirOf = (out, blood) => (out > blood ? 'mau' : out < blood ? 'ngoai' : null);
  return [
    { gas: 'O₂', into: dirOf(a.o2, b.o2), amount: Math.abs(a.o2 - b.o2) },
    { gas: 'CO₂', into: dirOf(a.co2, b.co2), amount: Math.abs(a.co2 - b.co2) },
  ];
}

/**
 * A sentence about the exchange at one place along the capillary.
 * @param {Site} site
 * @param {number} x
 */
export function describeExchange(site, x) {
  const f = diffusion(site, x);
  const place = SITES[site].place.toLowerCase();
  if (f.every((g) => g.amount <= 2))
    return `Cuối mao mạch: nồng độ khí trong máu đã gần bằng trong ${place}, khí hầu như không khuếch tán thêm.`;
  if (site === 'phoi')
    return 'O₂ trong phế nang nhiều hơn trong máu nên khuếch tán từ phế nang vào máu; CO₂ trong máu nhiều hơn nên khuếch tán từ máu vào phế nang rồi được thở ra.';
  return 'O₂ trong máu nhiều hơn trong tế bào nên khuếch tán từ máu vào tế bào; CO₂ do tế bào hô hấp tạo ra nhiều hơn nên khuếch tán từ tế bào vào máu.';
}
