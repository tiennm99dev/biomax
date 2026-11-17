/**
 * A virtual DNA extraction: the learner adds reagents or runs steps in any
 * order, and the tube answers. The tube tracks whether the cells are broken,
 * whether DNase is held back by EDTA, which contaminants are left (protein,
 * RNA, cell debris) and what has become of the DNA. The final pellet is judged
 * for yield and purity. No DOM here, so all of it is tested in Node.
 */

/**
 * @typedef {'nguyen' | 'dut' | 'mat'} DnaState
 * @typedef {{ edta: boolean, lysed: boolean, protein: boolean, rna: boolean, debris: boolean, dna: DnaState, precipitated: boolean, done: boolean }} Tube
 * @typedef {'ok' | 'warn' | 'info'} Tone
 * @typedef {{ tube: Tube, tone: Tone, text: string }} Step
 * @typedef {{ id: string, text: string, role: string }} Action
 */

/** The reagents and steps on the bench, the right ones and the traps. */
/** @type {Action[]} */
export const ACTIONS = [
  {
    id: 'dem-edta',
    text: 'Cho mẫu vào dung dịch đệm có EDTA',
    role: 'EDTA liên kết với ion Mg²⁺, ion mà enzyme DNase cần để hoạt động, nhờ đó bảo vệ DNA khỏi bị cắt.',
  },
  {
    id: 'pha-vo',
    text: 'Nghiền mẫu, thêm chất tẩy rửa (SDS)',
    role: 'Nghiền phá mô và thành tế bào; chất tẩy rửa hoà tan lipid của màng tế bào, màng nhân, giải phóng DNA.',
  },
  {
    id: 'ly-tam-can',
    text: 'Ly tâm, giữ dịch trong, bỏ cặn',
    role: 'Mảnh vụn tế bào nặng lắng xuống cặn; DNA đã giải phóng nằm trong dịch trong phía trên.',
  },
  {
    id: 'protease',
    text: 'Thêm protease K, ủ ấm',
    role: 'Protease phân giải protein, kể cả histone liên kết với DNA, mà không tác động đến DNA.',
  },
  {
    id: 'rnase',
    text: 'Thêm RNase A',
    role: 'RNase phân giải RNA thành các nucleotide tự do, không tác động đến DNA.',
  },
  {
    id: 'ethanol',
    text: 'Thêm muối và ethanol lạnh',
    role: 'Ion Na⁺ của muối trung hoà điện tích âm của các nhóm phosphate; DNA không tan trong ethanol lạnh nên kết tủa thành sợi trắng.',
  },
  {
    id: 'thu-tua',
    text: 'Ly tâm thu tủa, rửa bằng ethanol 70%, hoà tan trong nước cất',
    role: 'Thu tủa DNA, rửa sạch muối còn bám rồi hoà tan DNA để bảo quản và sử dụng.',
  },
  {
    id: 'dnase',
    text: 'Thêm DNase',
    role: 'DNase là enzyme phân giải DNA.',
  },
  {
    id: 'dun-soi',
    text: 'Đun sôi mẫu cho tế bào vỡ nhanh',
    role: 'Nhiệt độ sôi làm DNA biến tính, đứt gãy.',
  },
  {
    id: 'lac-manh',
    text: 'Lắc thật mạnh hỗn hợp cho nhanh tan',
    role: 'Lực cơ học mạnh làm đứt gãy các phân tử DNA rất dài.',
  },
];

/** A fresh tube: whole cells with their protein, RNA and DNA. */
/** @type {Tube} */
export const START = {
  edta: false,
  lysed: false,
  protein: true,
  rna: true,
  debris: false,
  dna: 'nguyen',
  precipitated: false,
  done: false,
};

/** One sensible order of the steps; the enzymes may swap with the spin. */
export const PROTOCOL = [
  'dem-edta',
  'pha-vo',
  'ly-tam-can',
  'protease',
  'rnase',
  'ethanol',
  'thu-tua',
];

/**
 * The action with this id.
 * @param {string} id
 * @returns {Action}
 */
export function action(id) {
  const a = ACTIONS.find((x) => x.id === id);
  if (!a) throw new Error(`no action ${id}`);
  return a;
}

/**
 * The tube after one action, with what the learner sees.
 * @param {Tube} tube @param {string} id
 * @returns {Step}
 */
export function apply(tube, id) {
  const t = { ...tube };
  /** @param {Tone} tone @param {string} text */
  const say = (tone, text) => ({ tube: t, tone, text });
  if (t.done) return say('info', 'Đã thu được sản phẩm. Bấm "Làm lại" để tách chiết mẫu mới.');
  if (t.dna === 'mat') {
    return say('warn', 'Mẫu không còn DNA nên làm tiếp cũng không thu được gì. Bấm "Làm lại".');
  }
  if (t.precipitated && id !== 'thu-tua') {
    return say(
      'warn',
      'DNA đã kết tủa trong ethanol; enzyme không hoạt động trong cồn và các bước xử lí dịch đã qua. Hãy ly tâm thu tủa, hoặc làm lại.',
    );
  }
  switch (id) {
    case 'dem-edta':
      if (t.edta) return say('info', 'Dung dịch đã có EDTA.');
      t.edta = true;
      if (t.lysed) {
        return say(
          'warn',
          'Thêm EDTA lúc này đã muộn: khi tế bào vỡ, DNase được giải phóng và đã cắt DNA thành đoạn ngắn.',
        );
      }
      return say('ok', `Đúng. ${action(id).role}`);
    case 'pha-vo':
      if (t.lysed) return say('info', 'Tế bào đã bị phá vỡ rồi.');
      t.lysed = true;
      t.debris = true;
      if (!t.edta && t.dna === 'nguyen') {
        t.dna = 'dut';
        return say(
          'warn',
          'Tế bào vỡ, DNA được giải phóng, nhưng chưa có EDTA nên DNase trong tế bào cắt DNA thành nhiều đoạn ngắn.',
        );
      }
      return say('ok', `Đúng. ${action(id).role}`);
    case 'ly-tam-can':
      if (!t.lysed) {
        t.dna = 'mat';
        return say(
          'warn',
          'Tế bào còn nguyên nên DNA vẫn nằm trong tế bào và lắng xuống cặn. Bỏ cặn là bỏ luôn DNA!',
        );
      }
      if (!t.debris) return say('info', 'Cặn đã được loại bỏ.');
      t.debris = false;
      return say('ok', `Đúng. ${action(id).role}`);
    case 'protease':
    case 'rnase': {
      const what = id === 'protease' ? 'protein' : 'RNA';
      if (!t.lysed) {
        return say(
          'warn',
          `Tế bào chưa bị phá vỡ: ${what} nằm trong tế bào nên enzyme chưa tiếp cận được. Cần phá vỡ tế bào trước.`,
        );
      }
      if (id === 'protease') {
        if (!t.protein) return say('info', 'Protein đã được loại bỏ.');
        t.protein = false;
      } else {
        if (!t.rna) return say('info', 'RNA đã được loại bỏ.');
        t.rna = false;
      }
      return say('ok', `Đúng. ${action(id).role}`);
    }
    case 'ethanol': {
      if (!t.lysed) {
        return say(
          'warn',
          'DNA còn nằm trong tế bào nên chưa kết tủa ra được. Cần phá vỡ tế bào trước.',
        );
      }
      t.precipitated = true;
      const mixed = impurities(t);
      if (mixed.length > 0) {
        return say(
          'warn',
          `DNA kết tủa, nhưng tủa lẫn ${mixed.join(', ')}, vì các chất này chưa được loại bỏ trước khi thêm cồn.`,
        );
      }
      return say('ok', `Đúng. ${action(id).role}`);
    }
    case 'thu-tua':
      if (!t.precipitated) {
        return say('warn', 'Chưa có tủa DNA để thu. Cần thêm muối và ethanol lạnh trước.');
      }
      t.done = true;
      return say(verdict(t).ok ? 'ok' : 'warn', verdict(t).text);
    case 'dnase':
      if (!t.lysed) {
        return say('warn', 'DNase là enzyme phân giải DNA, không bao giờ dùng khi tách chiết DNA.');
      }
      t.dna = 'mat';
      return say('warn', 'DNase phân giải hết DNA thành nucleotide: mẫu không còn DNA để thu!');
    case 'dun-soi':
      if (t.dna === 'nguyen') t.dna = 'dut';
      return say('warn', `Sai: ${action(id).role} Hãy phá vỡ tế bào bằng nghiền và chất tẩy rửa.`);
    case 'lac-manh':
      if (!t.lysed)
        return say('info', 'Tế bào còn nguyên; lắc không thay được bước phá vỡ tế bào.');
      if (t.dna === 'nguyen') t.dna = 'dut';
      return say('warn', `Sai: ${action(id).role} Chỉ đảo nhẹ ống.`);
    default:
      throw new Error(`unknown action ${id}`);
  }
}

/**
 * The contaminants still in the tube, as words.
 * @param {Tube} t
 * @returns {string[]}
 */
export function impurities(t) {
  const out = [];
  if (t.protein) out.push('protein');
  if (t.rna) out.push('RNA');
  if (t.debris) out.push('mảnh vụn tế bào');
  return out;
}

/**
 * Judges the DNA obtained.
 * @param {Tube} t
 * @returns {{ ok: boolean, text: string }}
 */
export function verdict(t) {
  if (t.dna === 'mat') {
    return {
      ok: false,
      text: 'Không thu được DNA. Xem lại bước nào đã làm mất hoặc phân giải DNA.',
    };
  }
  const issues = impurities(t).map((x) => `lẫn ${x}`);
  if (t.dna === 'dut') issues.unshift('DNA bị đứt gãy thành đoạn ngắn');
  if (issues.length === 0) {
    return {
      ok: true,
      text: 'Thành công: thu được DNA tinh sạch, sợi dài nguyên vẹn, sẵn sàng cho PCR, giải trình tự hoặc tạo DNA tái tổ hợp.',
    };
  }
  return { ok: false, text: `Có thu được DNA nhưng chưa đạt: ${issues.join('; ')}.` };
}

/**
 * What the tube holds, as one sentence for screen readers and the caption.
 * @param {Tube} t
 */
export function tubeText(t) {
  if (t.dna === 'mat' && !t.lysed)
    return 'Ống chỉ còn dịch: các tế bào chứa DNA đã bị bỏ đi cùng cặn.';
  if (!t.lysed) return 'Trong ống: các tế bào còn nguyên, DNA nằm trong nhân.';
  const parts = [];
  if (t.dna === 'nguyen') parts.push('DNA sợi dài');
  if (t.dna === 'dut') parts.push('DNA đứt thành đoạn ngắn');
  if (t.dna === 'mat') parts.push('không còn DNA');
  parts.push(...impurities(t));
  const where = t.done
    ? 'Sản phẩm thu được'
    : t.precipitated
      ? 'Sau khi thêm ethanol, tủa gồm'
      : 'Trong dịch tế bào';
  return `${where}: ${parts.join(', ')}.`;
}
