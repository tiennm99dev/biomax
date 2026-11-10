/**
 * A model of Pavlov's conditioning experiment. `strength` (0 to 1) is how
 * firmly the dog links the conditioned stimulus (a bell or a light) with
 * food. Each pairing in which the stimulus comes just before the food adds a
 * share of what is left to learn; the stimulus alone, never followed by food,
 * wears the link down (extinction); food before the stimulus teaches nothing.
 * With the rate used, about 20 pairings make the reflex firm, in line with
 * the 20 to 30 pairings the book quotes.
 */

/** Share of what is left that one pairing teaches. */
export const RATE = 0.11;
/** Share of the link lost each time the stimulus comes without food. */
export const FADE = 0.05;
/** Strength from which the conditioned reflex counts as firm. */
export const FIRM = 0.9;
/** Below this the bell alone makes no saliva. */
export const SILENT = 0.15;
/** Saliva drops for food in the mouth (the unconditioned reflex). */
export const FULL_DROPS = 10;

/** @typedef {'cap' | 'nguoc' | 'chi-tin-hieu' | 'chi-an'} TrialId */
/** @typedef {'chuong' | 'den'} SignalId */

/** @type {Array<{ id: SignalId, name: string, verb: string, area: string }>} */
export const SIGNALS = [
  { id: 'chuong', name: 'Tiếng chuông', verb: 'rung chuông', area: 'vùng thính giác' },
  { id: 'den', name: 'Ánh đèn', verb: 'bật đèn', area: 'vùng thị giác' },
];

/** @param {SignalId} id */
export const signal = (id) => SIGNALS.find((s) => s.id === id) ?? SIGNALS[0];

/**
 * Saliva drops the conditioned stimulus alone brings out.
 * @param {number} strength
 */
export function drops(strength) {
  return strength < SILENT ? 0 : Math.round(FULL_DROPS * strength);
}

/**
 * @typedef {object} Trial
 * @property {number} before Strength before the trial.
 * @property {number} after Strength after the trial.
 * @property {number} saliva Drops of saliva seen in the trial.
 * @property {boolean} signalOnly The stimulus came without food.
 */

/**
 * One trial.
 * @param {number} strength @param {TrialId} kind
 * @returns {Trial}
 */
export function trial(strength, kind) {
  if (kind === 'cap') {
    return {
      before: strength,
      after: strength + RATE * (1 - strength),
      saliva: FULL_DROPS,
      signalOnly: false,
    };
  }
  if (kind === 'chi-tin-hieu') {
    return {
      before: strength,
      after: strength * (1 - FADE),
      saliva: drops(strength),
      signalOnly: true,
    };
  }
  return { before: strength, after: strength, saliva: FULL_DROPS, signalOnly: false };
}

/** Pairings needed from zero to reach FIRM. */
export function pairingsToFirm() {
  let s = 0;
  let n = 0;
  while (s < FIRM) {
    s = trial(s, 'cap').after;
    n += 1;
  }
  return n;
}

/**
 * A reflex that has once become firm still counts as firm down to this
 * strength, so a single test with the stimulus alone does not undo it.
 */
export const HOLD = 0.8;

/**
 * Stage of the conditioned reflex. `wasFirm` tells whether it has been firm
 * since the dog last lost it: below HOLD such a reflex is fading ('yeu')
 * rather than still forming.
 * @param {number} strength @param {boolean} [wasFirm]
 * @returns {'chua' | 'dang' | 'vung' | 'yeu'}
 */
export function stage(strength, wasFirm = false) {
  if (strength >= FIRM || (wasFirm && strength >= HOLD)) return 'vung';
  if (strength < SILENT) return 'chua';
  return wasFirm ? 'yeu' : 'dang';
}

/**
 * Feedback after the last trial.
 * @param {TrialId | null} kind @param {Trial | null} last @param {number} pairs
 * @param {SignalId} sig
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function explain(kind, last, pairs, sig) {
  const s = signal(sig);
  if (!kind || !last) {
    return {
      tone: 'info',
      text: `Chó chưa học gì: ${s.name.toLowerCase()} lúc này chỉ là kích thích không liên quan đến ăn. Thử "Chỉ ${s.verb}" để kiểm tra, rồi ghép ${s.verb} với cho ăn nhiều lần.`,
    };
  }
  if (kind === 'chi-an') {
    return {
      tone: 'info',
      text: `Thức ăn chạm lưỡi, chó tiết ${FULL_DROPS} giọt nước bọt: phản xạ không điều kiện, có sẵn từ khi sinh ra, không cần học.`,
    };
  }
  if (kind === 'nguoc') {
    return {
      tone: 'warn',
      text: `Cho ăn trước rồi mới ${s.verb}: kích thích có điều kiện đến sau kích thích không điều kiện nên không hình thành liên hệ. Kích thích có điều kiện phải đến trước hoặc cùng lúc với thức ăn.`,
    };
  }
  if (kind === 'cap') {
    const st = stage(last.after);
    return {
      tone: st === 'vung' ? 'ok' : 'info',
      text:
        st === 'vung'
          ? `Đã ghép ${pairs} lần: phản xạ có điều kiện đã vững. Giờ chỉ cần ${s.verb}, chó đã tiết nhiều nước bọt.`
          : `Đã ghép ${pairs} lần: liên hệ thần kinh tạm thời giữa ${s.area} và trung khu ăn uống trên vỏ não đang hình thành. Cần lặp lại nhiều lần nữa.`,
    };
  }
  if (last.saliva === 0) {
    return {
      tone: 'info',
      text: `Chỉ ${s.verb}: chó không tiết nước bọt. Phản xạ có điều kiện chưa có${last.before > 0 ? ' hoặc đã bị dập tắt' : ''}.`,
    };
  }
  return {
    tone: last.saliva >= FULL_DROPS * HOLD ? 'ok' : 'info',
    text: `Chỉ ${s.verb}, không cho ăn: chó vẫn tiết ${last.saliva} giọt nước bọt nhờ phản xạ có điều kiện. Nhưng nếu lặp lại nhiều lần mà không cho ăn (không củng cố), phản xạ sẽ yếu dần rồi mất.`,
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const LEARNING_BINS = [
  { id: 'quen-nhon', label: 'Quen nhờn' },
  { id: 'in-vet', label: 'In vết' },
  { id: 'dk-dap-ung', label: 'Điều kiện hoá đáp ứng' },
  { id: 'dk-hanh-dong', label: 'Điều kiện hoá hành động' },
  { id: 'xa-hoi', label: 'Học xã hội' },
  { id: 'hoc-khon', label: 'Học khôn' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const LEARNING_CARDS = [
  {
    id: 'rua',
    label: 'Rùa thôi rụt đầu khi bị thả đá nhiều lần mà không gặp nguy hiểm',
    bin: 'quen-nhon',
    why: 'Kích thích lặp lại nhiều lần không kèm nguy hiểm nên con vật phớt lờ: quen nhờn.',
  },
  {
    id: 'chim-bu-nhin',
    label: 'Chim sẻ không còn sợ bù nhìn đứng mãi một chỗ ngoài ruộng',
    bin: 'quen-nhon',
    why: 'Bù nhìn xuất hiện nhiều lần mà không gây hại: quen nhờn.',
  },
  {
    id: 'vit-con',
    label: 'Vịt con mới nở đi theo vật chuyển động đầu tiên nó thấy',
    bin: 'in-vet',
    why: 'Con non bám theo vật chuyển động đầu tiên trong giai đoạn then chốt sau khi nở: in vết.',
  },
  {
    id: 'trau-keng',
    label: 'Trâu bò nghe tiếng kẻng thì về chuồng ăn',
    bin: 'dk-dap-ung',
    why: 'Tiếng kẻng được gắn với thức ăn qua nhiều lần lặp lại: điều kiện hoá đáp ứng.',
  },
  {
    id: 'cho-den',
    label: 'Chó tiết nước bọt khi thấy đèn bật, vì đèn luôn bật trước giờ ăn',
    bin: 'dk-dap-ung',
    why: 'Kích thích bất kì (ánh đèn) liên kết với thức ăn: thí nghiệm của Pavlov.',
  },
  {
    id: 'chuot-ban-dap',
    label: 'Chuột đói nhấn bàn đạp để có thức ăn rơi ra',
    bin: 'dk-hanh-dong',
    why: 'Hành động nhấn bàn đạp được thưởng thức ăn nên được lặp lại: thí nghiệm của Skinner.',
  },
  {
    id: 'cho-xiec',
    label: 'Chó làm xiếc lặp lại động tác vì lần nào làm đúng cũng được thưởng thức ăn',
    bin: 'dk-hanh-dong',
    why: 'Một hành động được thưởng nên được lặp lại: điều kiện hoá hành động.',
  },
  {
    id: 'tinh-tinh-da',
    label: 'Tinh tinh non đập quả cọ dầu bằng đá theo cách của con trưởng thành',
    bin: 'xa-hoi',
    why: 'Quan sát và bắt chước đồng loại: học xã hội.',
  },
  {
    id: 'tinh-tinh-hop',
    label: 'Tinh tinh xếp chồng các hộp để lấy chuối treo trên cao',
    bin: 'hoc-khon',
    why: 'Phối hợp kinh nghiệm cũ để giải quyết tình huống mới: học khôn.',
  },
];
