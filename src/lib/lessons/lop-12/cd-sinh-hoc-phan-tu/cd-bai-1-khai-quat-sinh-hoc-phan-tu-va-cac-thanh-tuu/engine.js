/**
 * The timeline of molecular biology: milestones from the double helix to
 * mRNA vaccines, each marked as a theory or an application and linked to the
 * earlier milestones it builds on. The challenge asks for a set of milestones
 * in time order and explains a wrong pick by the link it breaks.
 * No DOM here, so all of it is tested in Node.
 */
import { shuffled } from '#lib/core/card-sorter.js';
import { lowerFirst } from '#lib/core/sentence-case.js';

/**
 * @typedef {'li-thuyet' | 'ung-dung'} Field
 * @typedef {{ id: string, year: number, field: Field, short: string, who: string, what: string, needs: string[] }} Milestone
 * @typedef {{ id: string, name: string, ids: string[] }} Round
 */

/** @type {Record<Field, string>} */
export const FIELD_NAME = {
  'li-thuyet': 'Lí thuyết',
  'ung-dung': 'Ứng dụng',
};

/** @type {Milestone[]} */
export const MILESTONES = [
  {
    id: 'xoan-kep',
    year: 1953,
    field: 'li-thuyet',
    short: 'Mô hình chuỗi xoắn kép của DNA',
    who: 'J. Watson và F. Crick, dựa trên ảnh nhiễu xạ tia X của R. Franklin và M. Wilkins',
    what: 'DNA gồm hai mạch polynucleotide xoắn song song ngược chiều, các base liên kết theo nguyên tắc bổ sung A – T, G – C. Mô hình giải thích được cách DNA lưu giữ và sao chép thông tin di truyền, mở đầu cho sinh học phân tử hiện đại.',
    needs: [],
  },
  {
    id: 'ban-bao-toan',
    year: 1958,
    field: 'li-thuyet',
    short: 'DNA tái bản theo nguyên tắc bán bảo toàn',
    who: 'M. Meselson và F. Stahl',
    what: 'Thí nghiệm nuôi vi khuẩn E. coli trong môi trường chứa ¹⁵N rồi chuyển sang ¹⁴N cho thấy mỗi DNA con gồm một mạch cũ và một mạch mới.',
    needs: ['xoan-kep'],
  },
  {
    id: 'operon',
    year: 1961,
    field: 'li-thuyet',
    short: 'Mô hình operon Lac điều hoà biểu hiện gene',
    who: 'F. Jacob và J. Monod',
    what: 'Ở vi khuẩn E. coli, các gene phân giải lactose chỉ được phiên mã khi có lactose. Đây là mô hình đầu tiên giải thích cách tế bào bật, tắt gene.',
    needs: ['xoan-kep'],
  },
  {
    id: 'ma-di-truyen',
    year: 1966,
    field: 'li-thuyet',
    short: 'Giải mã xong toàn bộ mã di truyền',
    who: 'M. Nirenberg, H. G. Khorana và cộng sự',
    what: 'Xác định được amino acid ứng với từng bộ ba trong số 64 bộ ba, gồm cả các bộ ba kết thúc. Mã di truyền gần như chung cho mọi sinh vật.',
    needs: ['xoan-kep'],
  },
  {
    id: 'enzyme-cat',
    year: 1970,
    field: 'li-thuyet',
    short: 'Phát hiện enzyme cắt giới hạn và enzyme phiên mã ngược',
    who: 'H. Smith (enzyme cắt giới hạn); H. Temin và D. Baltimore (enzyme phiên mã ngược)',
    what: 'Enzyme cắt giới hạn cắt DNA tại những trình tự nhận biết xác định; enzyme phiên mã ngược tổng hợp DNA từ khuôn RNA. Hai loại enzyme này trở thành công cụ chính của công nghệ gene.',
    needs: ['xoan-kep'],
  },
  {
    id: 'berg',
    year: 1972,
    field: 'ung-dung',
    short: 'Tạo phân tử DNA tái tổ hợp đầu tiên',
    who: 'P. Berg',
    what: 'Dùng enzyme cắt giới hạn và enzyme nối ghép DNA của virus SV40 với một đoạn DNA mang gene của vi khuẩn E. coli thành một phân tử DNA mới.',
    needs: ['enzyme-cat'],
  },
  {
    id: 'cohen-boyer',
    year: 1973,
    field: 'ung-dung',
    short: 'Đưa DNA tái tổ hợp vào vi khuẩn bằng plasmid',
    who: 'S. Cohen và H. Boyer',
    what: 'Gắn gene lạ vào plasmid rồi đưa vào E. coli; gene lạ được nhân lên cùng vi khuẩn. Năm sau, nhóm chuyển được cả gene của ếch vào E. coli, lần đầu chuyển gene giữa hai loài rất xa nhau.',
    needs: ['berg'],
  },
  {
    id: 'sanger',
    year: 1977,
    field: 'ung-dung',
    short: 'Phương pháp giải trình tự DNA',
    who: 'F. Sanger',
    what: 'Xác định được thứ tự các nucleotide của một đoạn DNA. Về sau phương pháp được tự động hoá, làm nền cho việc giải trình tự hệ gene.',
    needs: ['xoan-kep'],
  },
  {
    id: 'insulin',
    year: 1982,
    field: 'ung-dung',
    short: 'Insulin người do vi khuẩn chuyển gene sản xuất được dùng làm thuốc',
    who: 'Công ty Genentech và Eli Lilly',
    what: 'Gene insulin người được chuyển vào E. coli; insulin thu được dùng điều trị bệnh đái tháo đường, rẻ và an toàn hơn insulin tách từ tuỵ động vật.',
    needs: ['cohen-boyer'],
  },
  {
    id: 'pcr',
    year: 1983,
    field: 'ung-dung',
    short: 'Phát minh kĩ thuật PCR',
    who: 'K. Mullis',
    what: 'Nhân bản một đoạn DNA trong ống nghiệm thành hàng triệu bản sao chỉ trong vài giờ. PCR được dùng trong nghiên cứu, chẩn đoán bệnh, pháp y.',
    needs: ['xoan-kep'],
  },
  {
    id: 'van-tay',
    year: 1985,
    field: 'ung-dung',
    short: 'Dấu vân tay DNA',
    who: 'A. Jeffreys',
    what: 'Mỗi người có một kiểu các đoạn DNA lặp lại riêng. So sánh các đoạn này giúp xác định danh tính, quan hệ huyết thống và truy tìm tội phạm.',
    needs: ['enzyme-cat'],
  },
  {
    id: 'flavr-savr',
    year: 1994,
    field: 'ung-dung',
    short: 'Cà chua chín chậm, thực phẩm biến đổi gene đầu tiên được bày bán',
    who: 'Công ty Calgene (Mỹ)',
    what: 'Gene làm mềm quả bị làm giảm biểu hiện, quả chín chậm, giữ được lâu sau thu hoạch.',
    needs: ['cohen-boyer'],
  },
  {
    id: 'rnai',
    year: 1998,
    field: 'li-thuyet',
    short: 'Phát hiện cơ chế can thiệp RNA (RNAi)',
    who: 'A. Fire và C. Mello (giải Nobel năm 2006)',
    what: 'Các RNA mạch kép ngắn có thể "tắt" một gene đặc hiệu. Cơ chế này mở ra hướng điều trị bệnh bằng cách phong toả các gene gây bệnh.',
    needs: ['operon'],
  },
  {
    id: 'he-gene-nguoi',
    year: 2003,
    field: 'li-thuyet',
    short: 'Hoàn thành giải trình tự hệ gene người',
    who: 'Dự án hệ gene người, khởi động năm 1990, với các nhà khoa học của nhiều nước',
    what: 'Xác định trình tự khoảng 3 tỉ cặp nucleotide của hệ gene người. Kết quả được dùng trong xét nghiệm di truyền, tìm gene gây bệnh, phát hiện đột biến của tế bào ung thư.',
    needs: ['sanger'],
  },
  {
    id: 'crispr',
    year: 2012,
    field: 'ung-dung',
    short: 'Công cụ chỉnh sửa gene CRISPR-Cas9',
    who: 'E. Charpentier và J. Doudna (giải Nobel Hoá học năm 2020)',
    what: 'Một RNA dẫn đường đưa enzyme Cas9 tới đúng trình tự cần cắt trên DNA, nhờ đó sửa, thêm hoặc làm bất hoạt gene một cách chính xác.',
    needs: ['enzyme-cat', 'he-gene-nguoi'],
  },
  {
    id: 'vaccine-mrna',
    year: 2020,
    field: 'ung-dung',
    short: 'Vaccine mRNA phòng COVID-19',
    who: 'Dựa trên phát hiện của K. Karikó và D. Weissman về cách sửa đổi nucleoside (giải Nobel năm 2023)',
    what: 'mRNA mã hoá protein của virus được đưa vào cơ thể; tế bào dịch mã tạo protein đó và hệ miễn dịch học cách nhận biết virus.',
    needs: ['ma-di-truyen'],
  },
];

/**
 * The milestone with this id.
 * @param {string} id
 * @returns {Milestone}
 */
export function milestone(id) {
  const m = MILESTONES.find((x) => x.id === id);
  if (!m) throw new Error(`no milestone ${id}`);
  return m;
}

/**
 * The milestones of one field ('all' for both), oldest first.
 * @param {Field | 'all'} field
 * @returns {Milestone[]}
 */
export function timeline(field) {
  return MILESTONES.filter((m) => field === 'all' || m.field === field).sort(
    (a, b) => a.year - b.year,
  );
}

/**
 * Every earlier milestone a milestone builds on, directly or through others.
 * @param {string} id
 * @returns {string[]}
 */
export function rootsOf(id) {
  /** @type {Set<string>} */
  const seen = new Set();
  /** @param {string} x */
  const walk = (x) => {
    for (const n of milestone(x).needs) {
      if (!seen.has(n)) {
        seen.add(n);
        walk(n);
      }
    }
  };
  walk(id);
  return [...seen];
}

/**
 * The sentence naming what a milestone builds on.
 * @param {string} id
 */
export function rootsText(id) {
  const m = milestone(id);
  if (m.needs.length === 0)
    return `${m.short} (${m.year}) là điểm khởi đầu của dòng thời gian này.`;
  const names = m.needs.map((n) => `${lowerFirst(milestone(n).short)} (${milestone(n).year})`);
  return `Thành tựu này dựa trên: ${names.join('; ')}.`;
}

/** The milestones of the sort: clear cases of each kind, five each. */
export const SORT_IDS = [
  'xoan-kep',
  'ban-bao-toan',
  'operon',
  'ma-di-truyen',
  'rnai',
  'cohen-boyer',
  'insulin',
  'pcr',
  'van-tay',
  'crispr',
];

/** The two bins of the theory-or-application sort. */
export const SORT_BINS = [
  { id: 'li-thuyet', label: 'Thành tựu lí thuyết' },
  { id: 'ung-dung', label: 'Thành tựu ứng dụng' },
];

/**
 * The milestones of the sort as cards, mixed the same way for every visitor;
 * the reason says what the milestone explains or produces.
 * @returns {import('#lib/core/card-sorter.js').SortCard[]}
 */
export function sortCards() {
  const cards = SORT_IDS.map(milestone).map((m) => ({
    id: m.id,
    label: `${m.short} (${m.year})`,
    bin: m.field,
    why:
      m.field === 'li-thuyet'
        ? `Lí thuyết: thành tựu này làm rõ một cơ chế của sự sống. ${m.what}`
        : `Ứng dụng: thành tựu này tạo ra một kĩ thuật hoặc sản phẩm. ${m.what}`,
  }));
  return shuffled(cards, 1953);
}

/** @type {Round[]} */
export const ROUNDS = [
  {
    id: 'nen-mong',
    name: 'Nền móng',
    ids: ['xoan-kep', 'ban-bao-toan', 'operon', 'ma-di-truyen', 'enzyme-cat'],
  },
  {
    id: 'cong-cu',
    name: 'Công cụ',
    ids: ['berg', 'cohen-boyer', 'sanger', 'insulin', 'pcr'],
  },
  {
    id: 'hien-dai',
    name: 'Hiện đại',
    ids: ['van-tay', 'flavr-savr', 'rnai', 'he-gene-nguoi', 'crispr', 'vaccine-mrna'],
  },
];

/**
 * The round's cards in a fixed mixed order, the same for every visitor.
 * @param {Round} round
 * @returns {Milestone[]}
 */
export function deck(round) {
  const seed = round.id.split('').reduce((s, c) => s * 31 + c.charCodeAt(0), 7);
  const cards = round.ids.map(milestone);
  const mixed = shuffled(cards, seed);
  // A deck already in time order teaches nothing; turn it round.
  const sorted = mixed.every((m, i) => i === 0 || mixed[i - 1].year <= m.year);
  return sorted ? mixed.reverse() : mixed;
}

/**
 * Checks a pick: right when it is the earliest milestone still on the table.
 * A wrong pick is explained by a remaining milestone it builds on, if any.
 * @param {Round} round @param {string[]} placed ids already put in order
 * @param {string} id the picked id
 * @returns {{ ok: boolean, text: string }}
 */
export function pick(round, placed, id) {
  const left = round.ids.filter((x) => !placed.includes(x)).map(milestone);
  const earliest = left.reduce((a, b) => (b.year < a.year ? b : a));
  const m = milestone(id);
  if (m.year === earliest.year) {
    return { ok: true, text: `Đúng: ${m.year}, ${lowerFirst(m.short)}. ${m.who}.` };
  }
  // The nearest link first: rootsOf lists direct needs before their own roots.
  const rootId = rootsOf(id).find((r) => left.some((x) => x.id === r));
  const before = rootId ? milestone(rootId) : null;
  if (before) {
    return {
      ok: false,
      text: `Chưa đúng: "${m.short}" dựa trên "${before.short}", nên mốc đó phải có trước.`,
    };
  }
  return {
    ok: false,
    text: `Chưa đúng: "${m.short}" chưa phải mốc sớm nhất còn lại. Hãy nghĩ xem thành tựu nào cần có trước.`,
  };
}
