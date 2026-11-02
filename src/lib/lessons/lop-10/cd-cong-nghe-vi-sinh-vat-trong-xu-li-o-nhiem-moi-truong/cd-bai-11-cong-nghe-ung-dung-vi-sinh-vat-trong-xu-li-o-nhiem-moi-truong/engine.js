/**
 * Two working models of the lesson. A wastewater station carries the organic
 * load through its tanks, and the learner decides which tanks run, how much air
 * the aerobic tank gets and how fast the water flows. A compost pile warms up
 * from the work of its own microbes, runs out of oxygen unless it is turned, and
 * cools down when the easy food is gone. All rates are teaching values, not
 * measurements. No DOM here, so all of it is tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/** The BOD allowed at the outlet in this model, in mg/L. */
export const BOD_LIMIT = 50;
export const AIR_MAX = 3;

/** @typedef {'cham' | 'nhanh'} Flow */
/** @typedef {'loc-lang' | 'ki-khi' | 'hieu-khi' | 'lang-cuoi'} TankId */

/** @type {Array<{ id: string, name: string, bod: number }>} */
export const WASTES = [
  { id: 'sinh-hoat', name: 'Sinh hoạt', bod: 250 },
  { id: 'che-bien', name: 'Chế biến thực phẩm', bod: 1500 },
];

/** @type {Array<{ value: Flow, label: string }>} */
export const FLOWS = [
  { value: 'cham', label: 'Chảy chậm' },
  { value: 'nhanh', label: 'Chảy nhanh' },
];

/**
 * @type {Array<{
 *   id: TankId,
 *   name: string,
 *   air: string,
 *   tint: string,
 *   does: string,
 * }>}
 */
export const TANKS = [
  {
    id: 'loc-lang',
    name: 'Lọc và lắng đầu',
    air: 'Cơ học',
    tint: 'bg-slate-500',
    does: 'Giữ rác và cho cặn lơ lửng lắng xuống, nên các bể sau không bị quá tải.',
  },
  {
    id: 'ki-khi',
    name: 'Bể kị khí',
    air: 'Không có oxygen',
    tint: 'bg-violet-600',
    does: 'Vi khuẩn kị khí và Archaea chuyển chất hữu cơ thành methane, CO₂: chịu được chất thải đậm đặc, lại thu được khí sinh học.',
  },
  {
    id: 'hieu-khi',
    name: 'Bể hiếu khí',
    air: 'Có sục khí',
    tint: 'bg-sky-600',
    does: 'Vi sinh vật hiếu khí oxi hoá chất hữu cơ còn lại thành CO₂, H₂O và tạo thêm sinh khối (bùn).',
  },
  {
    id: 'lang-cuoi',
    name: 'Bể lắng cuối',
    air: 'Cơ học',
    tint: 'bg-teal-600',
    does: 'Bùn chứa vi sinh vật lắng xuống và được giữ lại, nên nước đầu ra trong và không cuốn theo sinh khối.',
  },
];

const SETTLE_LEFT = 0.7;
const ANAEROBIC_LEFT = 0.25;
const AIR_REMOVAL = [0, 0.5, 0.8, 0.92];
/** Above this load the aerobic tank cannot get enough oxygen in. */
const AEROBIC_LOAD_MAX = 600;
const SLUDGE_WASHED_OUT = 40;
const FAST_TIME = 0.6;
const SOLIDS_PENALTY = 0.7;

/**
 * @typedef {{
 *   bod: number,
 *   on: Record<TankId, boolean>,
 *   air: number,
 *   flow: Flow,
 * }} Line
 * @typedef {{ id: TankId, active: boolean, in: number, out: number }} Stage
 * @typedef {{
 *   stages: Stage[],
 *   out: number,
 *   pass: boolean,
 *   biogas: number,
 *   overloaded: boolean,
 *   washedOut: boolean,
 * }} Run
 */

/**
 * Carry the load through the line, tank by tank. Water that stays longer and a
 * clean feed let a biological tank remove more.
 * @param {Line} line
 * @returns {Run}
 */
export function runLine({ bod, on, air, flow }) {
  const time = (flow === 'nhanh' ? FAST_TIME : 1) * (on['loc-lang'] ? 1 : SOLIDS_PENALTY);
  let load = bod;
  let biogas = 0;
  let overloaded = false;

  /** @type {Stage[]} */
  const stages = [];
  /**
   * @param {TankId} id
   * @param {number} out
   */
  const record = (id, out) => {
    stages.push({ id, active: on[id], in: tidy(load, 1), out: tidy(out, 1) });
    load = out;
  };

  record('loc-lang', on['loc-lang'] ? load * SETTLE_LEFT : load);

  if (on['ki-khi']) {
    const out = load * ANAEROBIC_LEFT ** time;
    biogas = tidy(load - out, 1);
    record('ki-khi', out);
  } else {
    record('ki-khi', load);
  }

  if (on['hieu-khi'] && air > 0) {
    overloaded = load > AEROBIC_LOAD_MAX;
    const removal = AIR_REMOVAL[air] * (overloaded ? AEROBIC_LOAD_MAX / load : 1);
    record('hieu-khi', load * (1 - removal) ** time);
  } else {
    record('hieu-khi', load);
  }

  const aerobicRan = on['hieu-khi'] && air > 0;
  const washedOut = aerobicRan && !on['lang-cuoi'];
  record('lang-cuoi', washedOut ? load + SLUDGE_WASHED_OUT : load);

  const out = tidy(load, 1);
  return { stages, out, pass: out <= BOD_LIMIT, biogas, overloaded, washedOut };
}

/**
 * The verdict on a run, naming the first thing to fix.
 * @param {Line} line
 * @param {Run} run
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function lineNote(line, run) {
  const out = formatNumber(run.out, 1);
  if (run.pass) {
    const gas =
      run.biogas > 0
        ? ' Bể kị khí còn cho khí sinh học để dùng lại.'
        : ' Chưa có bể kị khí nên chưa thu được khí sinh học.';
    const air =
      line.air === 1
        ? ' Mức sục khí thấp giúp tiết kiệm điện.'
        : ' Thử giảm sục khí xem còn đạt không: sục khí tốn nhiều điện.';
    return {
      tone: 'ok',
      text: `Đạt: BOD đầu ra ${out} mg/L, không quá ${BOD_LIMIT} mg/L.${gas}${line.on['hieu-khi'] && line.air > 0 ? air : ''}`,
    };
  }
  const head = `Chưa đạt: BOD đầu ra ${out} mg/L, vượt ${BOD_LIMIT} mg/L.`;
  if (run.overloaded) {
    return {
      tone: 'warn',
      text: `${head} Nước vào bể hiếu khí quá đậm đặc, sục khí không cung cấp đủ oxygen. Hãy bật bể kị khí để giảm tải trước.`,
    };
  }
  if (!line.on['hieu-khi'] || line.air === 0) {
    return {
      tone: 'warn',
      text: `${head} Bể hiếu khí không hoạt động, vi sinh vật hiếu khí thiếu oxygen. Hãy bật bể và sục khí.`,
    };
  }
  if (run.washedOut) {
    return {
      tone: 'warn',
      text: `${head} Không có bể lắng cuối, bùn chứa vi sinh vật theo nước ra ngoài. Hãy bật bể lắng cuối.`,
    };
  }
  if (!line.on['loc-lang']) {
    return {
      tone: 'warn',
      text: `${head} Không lọc, lắng trước thì cặn làm các bể sinh học kém hiệu quả.`,
    };
  }
  if (line.flow === 'nhanh') {
    return {
      tone: 'warn',
      text: `${head} Nước chảy nhanh quá, vi sinh vật không đủ thời gian phân giải. Hãy giảm tốc độ dòng chảy hoặc tăng sục khí.`,
    };
  }
  return {
    tone: 'warn',
    text: `${head} Hãy tăng sục khí, hoặc bật thêm bể kị khí để giảm tải cho bể hiếu khí.`,
  };
}

/** @typedef {'kho' | 'vua' | 'uot'} Moisture */

/** @type {Array<{ value: Moisture, label: string }>} */
export const MOISTURES = [
  { value: 'kho', label: 'Quá khô' },
  { value: 'vua', label: 'Ẩm vừa' },
  { value: 'uot', label: 'Quá ướt' },
];

/** @type {Record<Moisture, { speed: number, oxygenUse: number }>} */
const MOISTURE_EFFECT = {
  kho: { speed: 0.3, oxygenUse: 1 },
  vua: { speed: 1, oxygenUse: 1 },
  uot: { speed: 0.6, oxygenUse: 2.5 },
};

export const AMBIENT = 30;
export const HOT = 60;
export const COMPOST_DAY_MAX = 80;
const HEAT_SPAN = 50;
const WARM_UP = 0.4;
const FOOD_BURN = 4;
const OXYGEN_BURN = 13;
const LOW_OXYGEN = 25;
const PILE_READY_FOOD = 12;

/**
 * @typedef {{
 *   day: number,
 *   temp: number,
 *   oxygen: number,
 *   food: number,
 *   moisture: Moisture,
 *   turns: number,
 *   hotDays: number,
 *   ripeDay: number | null,
 *   history: number[],
 * }} Pile
 */

/**
 * A fresh pile, at the temperature of the air.
 * @param {Moisture} moisture
 * @returns {Pile}
 */
export function freshPile(moisture) {
  return {
    day: 0,
    temp: AMBIENT,
    oxygen: 100,
    food: 100,
    moisture,
    turns: 0,
    hotDays: 0,
    ripeDay: null,
    history: [AMBIENT],
  };
}

/**
 * One day of work in the pile: microbes eat, use oxygen and release heat.
 * @param {Pile} pile
 * @returns {Pile}
 */
export function dayInPile(pile) {
  if (pile.day >= COMPOST_DAY_MAX) return pile;
  const effect = MOISTURE_EFFECT[pile.moisture];
  const work = (pile.food / 100) * (pile.oxygen / 100) * effect.speed;
  const target = AMBIENT + HEAT_SPAN * work;
  const temp = tidy(pile.temp + WARM_UP * (target - pile.temp), 1);
  const food = tidy(Math.max(0, pile.food - FOOD_BURN * work * (pile.food > 15 ? 1 : 0.5)), 1);
  const ripe = food <= PILE_READY_FOOD && temp < 40;
  return {
    ...pile,
    day: pile.day + 1,
    temp,
    oxygen: tidy(Math.max(5, pile.oxygen - OXYGEN_BURN * work * effect.oxygenUse), 1),
    food,
    ripeDay: pile.ripeDay ?? (ripe ? pile.day + 1 : null),
    hotDays: pile.hotDays + (temp >= 55 ? 1 : 0),
    history: [...pile.history, temp],
  };
}

/**
 * Turning the pile lets the air back in.
 * @param {Pile} pile
 * @returns {Pile}
 */
export function turnPile(pile) {
  return { ...pile, oxygen: 100, turns: pile.turns + 1 };
}

/**
 * The stage of the pile, from its temperature and what is left to eat.
 * @param {Pile} pile
 * @returns {string}
 */
export function pileStage(pile) {
  if (pile.food <= PILE_READY_FOOD && pile.temp < 40) return 'Ủ chín';
  if (pile.temp >= 45) return 'Ưa nhiệt';
  return pile.food < 60 ? 'Làm nguội' : 'Ưa ấm';
}

/**
 * The verdict on the pile right now.
 * @param {Pile} pile
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function pileNote(pile) {
  const temp = formatNumber(pile.temp, 1);
  if (pile.moisture === 'kho' && pile.day > 0 && pile.food > PILE_READY_FOOD) {
    return {
      tone: 'warn',
      text: `Đống ủ quá khô (${temp} °C): vi sinh vật thiếu nước nên hoạt động yếu, đống ủ khó nóng lên. Hãy làm ẩm đống ủ.`,
    };
  }
  if (pile.food <= PILE_READY_FOOD && pile.temp < 40) {
    return pile.hotDays >= 3
      ? {
          tone: 'ok',
          text: `Phân đã chín từ ngày ${pile.ripeDay}, sau ${pile.turns} lần đảo tính đến nay. Giai đoạn nóng kéo dài ${pile.hotDays} ngày, đủ để diệt phần lớn mầm bệnh.`,
        }
      : {
          tone: 'warn',
          text: `Chất dễ phân giải đã hết, nhưng đống ủ chỉ có ${pile.hotDays} ngày nóng trên 55 °C, nên có thể chưa diệt hết mầm bệnh.`,
        };
  }
  if (pile.oxygen < LOW_OXYGEN) {
    return {
      tone: 'warn',
      text: `Thiếu oxygen trong đống ủ (${temp} °C): vi sinh vật hiếu khí yếu đi, đống ủ nguội dần và dễ có mùi hôi. Hãy đảo đống ủ.`,
    };
  }
  if (pile.moisture === 'uot' && pile.day > 0) {
    return {
      tone: 'warn',
      text: `Đống ủ quá ướt (${temp} °C): nước chiếm chỗ không khí nên oxygen nhanh cạn. Hãy chỉnh về mức ẩm vừa.`,
    };
  }
  if (pile.day === 0) {
    return {
      tone: 'info',
      text: 'Đống ủ vừa được xếp, đang bằng nhiệt độ không khí. Hãy cho thời gian trôi và theo dõi nhiệt độ.',
    };
  }
  if (pile.temp >= 45) {
    return {
      tone: 'info',
      text: `Giai đoạn ưa nhiệt (${temp} °C): nhiệt do hô hấp của vi sinh vật tích lại trong đống ủ. Vi sinh vật ưa nhiệt, chịu nhiệt chiếm ưu thế và phân giải rất nhanh.`,
    };
  }
  return {
    tone: 'info',
    text:
      pile.food < 60
        ? `Đống ủ đang nguội dần (${temp} °C) vì chất dễ phân giải đã vơi đi. Vi sinh vật ưa ấm quay lại, phân giải tiếp phần còn lại.`
        : `Giai đoạn ưa ấm (${temp} °C): vi sinh vật ưa ấm bắt đầu phân giải chất dễ phân huỷ, đống ủ ấm dần lên.`,
  };
}
