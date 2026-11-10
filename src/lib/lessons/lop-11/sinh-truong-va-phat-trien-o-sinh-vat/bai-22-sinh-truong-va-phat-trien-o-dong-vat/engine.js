/**
 * Two insect life cycles side by side on one progress scale (0 at the egg,
 * 1 at the adult): the butterfly with complete metamorphosis (egg,
 * caterpillar, pupa, adult) and the grasshopper with incomplete
 * metamorphosis (egg, nymphs that moult five times, adult). Also the
 * moulting switch of insects: ecdysone triggers a moult, and juvenile
 * hormone decides whether the larva stays a larva or becomes a pupa.
 */

/** @typedef {'buom' | 'chau-chau'} InsectId */

/**
 * @typedef {object} Stage
 * @property {string} name
 * @property {number} from Progress at the start, 0 to 1.
 * @property {boolean} likeAdult Whether it looks and lives like the adult.
 * @property {string} what
 */

/** @type {Record<InsectId, { name: string, kind: string, stages: Stage[] }>} */
export const CYCLES = {
  buom: {
    name: 'Bướm',
    kind: 'biến thái hoàn toàn',
    stages: [
      {
        name: 'Trứng',
        from: 0,
        likeAdult: false,
        what: 'Phôi phát triển trong trứng đẻ trên lá.',
      },
      {
        name: 'Sâu (ấu trùng)',
        from: 0.12,
        likeAdult: false,
        what: 'Sâu không có cánh, miệng gặm lá, hình dạng khác hẳn bướm; ăn nhiều, lớn nhanh, lột xác nhiều lần.',
      },
      {
        name: 'Nhộng',
        from: 0.62,
        likeAdult: false,
        what: 'Không ăn, nằm yên; các mô của sâu bị phân giải và tổ chức lại thành cơ thể bướm.',
      },
      {
        name: 'Bướm trưởng thành',
        from: 0.85,
        likeAdult: true,
        what: 'Có cánh, miệng vòi hút mật, sinh sản.',
      },
    ],
  },
  'chau-chau': {
    name: 'Châu chấu',
    kind: 'biến thái không hoàn toàn',
    stages: [
      {
        name: 'Trứng',
        from: 0,
        likeAdult: false,
        what: 'Trứng được đẻ thành ổ trong đất.',
      },
      {
        name: 'Ấu trùng (châu chấu non)',
        from: 0.3,
        likeAdult: true,
        what: 'Hình dạng gần giống con trưởng thành nhưng nhỏ, chưa có cánh hoàn chỉnh; ăn lá như con trưởng thành, lột xác nhiều lần, mầm cánh lớn dần.',
      },
      {
        name: 'Châu chấu trưởng thành',
        from: 0.9,
        likeAdult: true,
        what: 'Sau lần lột xác cuối, cánh hoàn chỉnh; châu chấu bay được và sinh sản.',
      },
    ],
  },
};

/** Moults of the grasshopper nymph before the adult. */
export const NYMPH_MOULTS = 5;

/**
 * Index of the stage at progress `p`.
 * @param {InsectId} id @param {number} p
 */
export function stageIndex(id, p) {
  const st = CYCLES[id].stages;
  let i = 0;
  for (let k = 0; k < st.length; k += 1) if (p >= st[k].from) i = k;
  return i;
}

/**
 * How far a growing stage has got, 0 at its start, 1 at its end.
 * @param {InsectId} id @param {number} p
 */
export function stageProgress(id, p) {
  const st = CYCLES[id].stages;
  const i = stageIndex(id, p);
  const end = i + 1 < st.length ? st[i + 1].from : 1;
  return end === st[i].from ? 1 : Math.min(1, (p - st[i].from) / (end - st[i].from));
}

/**
 * Which nymph instar (1 to 5) the grasshopper is in, or 0 outside the
 * nymph stage.
 * @param {number} p
 */
export function instar(p) {
  if (stageIndex('chau-chau', p) !== 1) return 0;
  return Math.min(NYMPH_MOULTS, 1 + Math.floor(stageProgress('chau-chau', p) * NYMPH_MOULTS));
}

/**
 * The comparison line at progress `p`.
 * @param {number} p
 */
export function compare(p) {
  const b = CYCLES.buom.stages[stageIndex('buom', p)];
  const c = CYCLES['chau-chau'].stages[stageIndex('chau-chau', p)];
  const n = instar(p);
  const cName = n > 0 ? `${c.name.toLowerCase()} tuổi ${n}` : c.name.toLowerCase();
  const pick = (/** @type {Stage} */ s) =>
    s.likeAdult ? 'giống con trưởng thành' : 'khác con trưởng thành';
  let tail = '';
  if (b.name === 'Nhộng') {
    tail = ' Bướm phải qua giai đoạn nhộng trung gian; châu chấu không có giai đoạn nhộng.';
  } else if (b.name.startsWith('Sâu') && n > 0) {
    tail =
      ' Cả hai đều lột xác để lớn lên, nhưng sâu khác hẳn bướm còn châu chấu non đã giống châu chấu trưởng thành.';
  }
  return `Bướm: ${b.name.toLowerCase()} (${pick(b)}). Châu chấu: ${cName} (${pick(c)}).${tail}`;
}

/** @typedef {{ form: 'sau' | 'nhong' | 'buom', instar: number }} Larva */

/** Larval instars before the caterpillar is ready to pupate. */
export const LARVA_INSTARS = 5;

/** @type {Larva} */
export const START = { form: 'sau', instar: 1 };

/**
 * One ecdysone pulse: a moult. With juvenile hormone high the caterpillar
 * moults into a bigger caterpillar; with it low it pupates; a pupa with
 * ecdysone becomes the butterfly.
 * @param {Larva} l @param {boolean} jhHigh
 * @returns {{ next: Larva, text: string }}
 */
export function moult(l, jhHigh) {
  if (l.form === 'buom') {
    return { next: l, text: 'Bướm trưởng thành không lột xác nữa.' };
  }
  if (l.form === 'nhong') {
    return {
      next: { form: 'buom', instar: l.instar },
      text: 'Ở nhộng, juvenile hormone gần như không còn; ecdysone làm nhộng biến đổi thành bướm.',
    };
  }
  if (jhHigh) {
    if (l.instar >= LARVA_INSTARS) {
      return {
        next: l,
        text: 'Sâu đã đạt kích thước tối đa; juvenile hormone vẫn cao nên sâu chưa hoá nhộng. Hãy giảm juvenile hormone.',
      };
    }
    return {
      next: { form: 'sau', instar: l.instar + 1 },
      text: `Ecdysone gây lột xác; juvenile hormone cao giữ nguyên dạng sâu: sâu tuổi ${l.instar + 1}, lớn hơn.`,
    };
  }
  return {
    next: { form: 'nhong', instar: l.instar },
    text:
      l.instar < LARVA_INSTARS
        ? `Juvenile hormone thấp: sâu tuổi ${l.instar} hoá nhộng sớm, nhộng nhỏ và bướm sẽ nhỏ.`
        : 'Juvenile hormone thấp, ecdysone gây lột xác: sâu hoá nhộng.',
  };
}
