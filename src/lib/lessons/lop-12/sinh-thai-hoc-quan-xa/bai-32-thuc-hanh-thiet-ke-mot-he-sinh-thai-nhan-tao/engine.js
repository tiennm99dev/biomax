/**
 * A day-by-day model of a closed aquarium (bể cá cảnh) without an air pump
 * or filter, for the designer widget. Every level is an index from 0 to 10
 * that only shows a trend:
 * - oxygen: dissolved oxygen, made by plants and algae in the light, used by
 *   every living thing and by the decomposition of leftovers, topped up
 *   slowly through the water surface;
 * - ammonia: the toxic nitrogen waste of fish, snails and rotting food;
 * - nitrate: what nitrifying bacteria in the gravel turn ammonia into,
 *   taken up by plants and algae;
 * - algae: grows on nitrate in the light, grazed by snails.
 * Fish suffer when oxygen falls below 2,5 or ammonia rises above 4, and one
 * fish dies on each day of stress after the first, rotting the next day.
 */

/** Days the model runs. */
export const DAYS = 30;

/** Food per fish per day by feeding level. */
export const FEEDING = /** @type {const} */ ({ it: 0.6, vua: 1, nhieu: 1.6 });

/** @typedef {keyof typeof FEEDING} Feeding */

/**
 * @typedef {{
 *   plants: number,
 *   fish: number,
 *   snails: number,
 *   light: number,
 *   microbes: boolean,
 *   feeding: Feeding,
 * }} Design
 */

/** @typedef {{ day: number, oxygen: number, ammonia: number, nitrate: number, algae: number, fish: number }} Day */

/** A balanced starting design. */
export const BALANCED = /** @type {Design} */ ({
  plants: 4,
  fish: 4,
  snails: 2,
  light: 8,
  microbes: true,
  feeding: 'vua',
});

export const LOW_OXYGEN = 2.5;
export const POOR_OXYGEN = 3.5;
export const HIGH_NITRATE = 6;
export const TOXIC_AMMONIA = 4;
export const ALGAE_BLOOM = 6;

/** @param {number} v */
const level = (v) => Math.min(10, Math.max(0, v));

/**
 * Runs the tank for `days` days.
 * @param {Design} design
 * @param {number} [days]
 * @returns {Day[]} day 0 to `days`
 */
export function simulate(design, days = DAYS) {
  const { plants, snails, light, microbes } = design;
  const lit = light / 10;
  let fish = design.fish;
  let oxygen = 6;
  let ammonia = 0;
  let nitrate = 0;
  let algae = 0.2;
  let stress = 0;
  let bodies = 0;
  /** @type {Day[]} */
  const out = [{ day: 0, oxygen, ammonia, nitrate, algae, fish }];
  for (let day = 1; day <= days; day++) {
    const food = fish * FEEDING[design.feeding];
    const eaten = Math.min(food, fish);
    const leftover = food - eaten;
    const rot = leftover - Math.min(leftover, snails * 0.5) + bodies * 2;
    bodies = 0;

    ammonia += 0.1 * eaten + 0.04 * snails + 0.5 * rot;
    const nitrified = ammonia * (microbes ? 0.5 : 0.05);
    ammonia -= nitrified;
    ammonia -= Math.min(ammonia, plants * 0.02 * lit);
    nitrate += nitrified;
    nitrate -= Math.min(nitrate, plants * 0.15 * lit);

    const growth = 0.5 * Math.max(algae, 0.2) * (nitrate / (nitrate + 2)) * lit;
    algae += growth - 0.05 * algae - algae * snails * 0.04;
    nitrate -= Math.min(nitrate, growth * 0.3);

    const made = (plants * 0.35 + algae * 0.3) * lit;
    const used =
      fish * 0.2 + snails * 0.08 + plants * 0.05 + algae * 0.12 + 0.4 * rot + 0.2 * nitrified;
    oxygen += made - used + 0.25 * (6 - oxygen);

    oxygen = level(oxygen);
    ammonia = level(ammonia);
    nitrate = level(nitrate);
    algae = level(algae);

    if (fish > 0 && (oxygen < LOW_OXYGEN || ammonia > TOXIC_AMMONIA)) {
      stress++;
      if (stress >= 2) {
        fish--;
        bodies = 1;
      }
    } else {
      stress = 0;
    }
    out.push({ day, oxygen, ammonia, nitrate, algae, fish });
  }
  return out;
}

/**
 * What went wrong in the tank and why, from its history.
 * @param {Design} design
 * @param {Day[]} days
 * @returns {{ balanced: boolean, problems: string[] }}
 */
export function diagnose(design, days) {
  const end = days[days.length - 1];
  /** @type {string[]} */
  const problems = [];
  const minOxygen = Math.min(...days.map((d) => d.oxygen));
  const maxAmmonia = Math.max(...days.map((d) => d.ammonia));
  const maxAlgae = Math.max(...days.map((d) => d.algae));
  if (design.fish === 0) {
    problems.push(
      'Bể chưa có cá: chưa có sinh vật tiêu thụ bậc cao, chuỗi thức ăn chưa hoàn chỉnh.',
    );
  }
  if (minOxygen < POOR_OXYGEN) {
    const cause =
      design.plants === 0 || design.light < 4
        ? 'không đủ cây thuỷ sinh hoặc ánh sáng để quang hợp bù cho hô hấp'
        : design.feeding === 'nhieu'
          ? 'thức ăn thừa bị phân giải tiêu tốn nhiều oxygen'
          : 'quá nhiều cá so với lượng oxygen cây tạo ra';
    problems.push(
      `${minOxygen < LOW_OXYGEN ? 'Thiếu oxygen nghiêm trọng' : 'Oxygen thấp, cá dễ bị ngạt'}: ${cause}.`,
    );
  }
  if (maxAmmonia > TOXIC_AMMONIA) {
    problems.push(
      design.microbes
        ? 'Ammonia tích tụ, gây độc: chất thải và thức ăn thừa nhiều hơn khả năng chuyển hoá của vi khuẩn.'
        : 'Ammonia tích tụ, gây độc: thiếu lớp cát sỏi có vi khuẩn nitrate hoá (sinh vật phân giải, chuyển hoá chất thải).',
    );
  }
  if (end.nitrate > HIGH_NITRATE && maxAlgae <= ALGAE_BLOOM) {
    problems.push(
      'Nitrate tích tụ trong nước: thiếu cây thuỷ sinh hấp thụ, dễ dẫn tới tảo phát triển mạnh.',
    );
  }
  if (maxAlgae > ALGAE_BLOOM) {
    problems.push(
      'Tảo phát triển mạnh, nước xanh đục (phú dưỡng): thừa nitrate và ánh sáng, ít cây thuỷ sinh cạnh tranh hoặc ít ốc ăn tảo.',
    );
  }
  if (end.fish < design.fish) {
    problems.push(`Có ${design.fish - end.fish} con cá chết trong ${DAYS} ngày.`);
  }
  return { balanced: problems.length === 0, problems };
}
