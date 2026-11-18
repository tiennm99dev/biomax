/**
 * The debate board of the project: for each genetically modified product the
 * learner sorts arguments into benefits and risks, casts a vote, enters the
 * class's tally and copies out a plain-text summary. Nothing is stored, so the
 * summary is how the work is kept. No DOM here, so all of it is tested in Node.
 */
import { shuffled } from '#lib/core/card-sorter.js';
import { roundToTotal } from '#lib/core/number-format.js';
import { lowerFirst } from '#lib/core/sentence-case.js';

/**
 * @typedef {'loi-ich' | 'rui-ro'} Side
 * @typedef {'ung-ho' | 'co-dieu-kien' | 'phan-doi'} Vote
 * @typedef {{ id: string, text: string, side: Side, why: string }} Argument
 * @typedef {{ id: string, name: string, gene: string, use: string, args: Argument[], conditions: string[] }} Product
 */

/** @type {{ id: Vote, label: string }[]} */
export const VOTES = [
  { id: 'ung-ho', label: 'Ủng hộ' },
  { id: 'co-dieu-kien', label: 'Ủng hộ có điều kiện' },
  { id: 'phan-doi', label: 'Phản đối' },
];

/** The bins of the argument sort. */
export const SIDES = [
  { id: 'loi-ich', label: 'Lợi ích' },
  { id: 'rui-ro', label: 'Rủi ro' },
];

/** @type {Product[]} */
export const PRODUCTS = [
  {
    id: 'bong-bt',
    name: 'Bông Bt kháng sâu',
    gene: 'Gene cry của vi khuẩn Bacillus thuringiensis, mã hoá độc tố diệt sâu',
    use: 'Cây tự sinh độc tố diệt sâu đục quả, trồng thương mại từ năm 1996.',
    args: [
      {
        id: 'bt-thuoc',
        text: 'Giảm lượng thuốc trừ sâu phải phun',
        side: 'loi-ich',
        why: 'Cây tự sinh độc tố nên nông dân phun ít thuốc hơn, đỡ độc hại cho người phun và môi trường.',
      },
      {
        id: 'bt-nang-suat',
        text: 'Ít bị sâu phá, năng suất ổn định hơn',
        side: 'loi-ich',
        why: 'Sâu đục quả bị diệt ngay khi ăn lá, quả nên thiệt hại giảm.',
      },
      {
        id: 'bt-chon-loc',
        text: 'Quần thể sâu có thể xuất hiện cá thể kháng độc tố',
        side: 'rui-ro',
        why: 'Độc tố là một nhân tố chọn lọc: những con sâu mang gene kháng sống sót và sinh sản, dần thành quần thể kháng.',
      },
      {
        id: 'bt-con-trung',
        text: 'Có thể ảnh hưởng đến côn trùng không phải sâu hại',
        side: 'rui-ro',
        why: 'Cần đánh giá tác động lên côn trùng có ích sống trên ruộng bông.',
      },
    ],
    conditions: [
      'Trồng xen vùng "trú ẩn" không chuyển gene để làm chậm sự xuất hiện sâu kháng',
      'Theo dõi định kì quần thể sâu và côn trùng có ích',
    ],
  },
  {
    id: 'gao-vang',
    name: 'Lúa gạo vàng',
    gene: 'Gene psy (từ ngô) và gene crtI (từ vi khuẩn), giúp hạt gạo tổng hợp β-carotene',
    use: 'Hạt gạo chứa tiền vitamin A, nhằm giảm bệnh thiếu vitamin A ở nơi ăn gạo là chính.',
    args: [
      {
        id: 'gv-vitamin',
        text: 'Bổ sung tiền vitamin A cho người ăn gạo hằng ngày',
        side: 'loi-ich',
        why: 'Thiếu vitamin A gây khô mắt, mù loà và giảm miễn dịch, nhất là ở trẻ em.',
      },
      {
        id: 'gv-re',
        text: 'Người nghèo không phải mua thêm thực phẩm bổ sung',
        side: 'loi-ich',
        why: 'Dinh dưỡng có sẵn trong lương thực chính nên dễ tiếp cận.',
      },
      {
        id: 'gv-phat-tan',
        text: 'Gene có thể phát tán sang các giống lúa địa phương qua phấn hoa',
        side: 'rui-ro',
        why: 'Lúa lai được với lúa trồng gần đó, làm khó giữ nguồn gene của giống địa phương.',
      },
      {
        id: 'gv-don-dieu',
        text: 'Có thể làm người ta coi nhẹ việc ăn uống đa dạng',
        side: 'rui-ro',
        why: 'Một loại gạo không thay được chế độ ăn đủ rau, quả, thịt, cá.',
      },
    ],
    conditions: [
      'Có khoảng cách cách li với ruộng giống địa phương',
      'Đi kèm giáo dục dinh dưỡng, không thay thế bữa ăn đa dạng',
    ],
  },
  {
    id: 'ca-hoi',
    name: 'Cá hồi chuyển gene lớn nhanh',
    gene: 'Gene hormone sinh trưởng của cá hồi Chinook, điều khiển bởi đoạn điều hoà của một loài cá khác',
    use: 'Cá tiết hormone sinh trưởng quanh năm nên đạt kích thước thương phẩm nhanh hơn nhiều.',
    args: [
      {
        id: 'ch-nhanh',
        text: 'Rút ngắn thời gian nuôi, tốn ít thức ăn hơn cho mỗi kilogram cá',
        side: 'loi-ich',
        why: 'Cá lớn nhanh nên quay vòng nuôi nhanh, tăng nguồn thực phẩm.',
      },
      {
        id: 'ch-tu-nhien',
        text: 'Giảm áp lực đánh bắt cá hồi tự nhiên',
        side: 'loi-ich',
        why: 'Có thêm nguồn cá nuôi thì đỡ khai thác quần thể hoang dã.',
      },
      {
        id: 'ch-thoat',
        text: 'Nếu thoát ra tự nhiên, cá có thể cạnh tranh với cá hoang dã',
        side: 'rui-ro',
        why: 'Cá lớn nhanh có thể tranh thức ăn, nơi ở và giao phối với quần thể tự nhiên.',
      },
      {
        id: 'ch-tam-li',
        text: 'Nhiều người tiêu dùng còn e ngại khi ăn',
        side: 'rui-ro',
        why: 'Sản phẩm cần ghi nhãn rõ để người mua tự lựa chọn.',
      },
    ],
    conditions: [
      'Chỉ nuôi cá cái bất thụ trong bể kín trên cạn',
      'Ghi nhãn sản phẩm biến đổi gene',
    ],
  },
  {
    id: 'ngo-gm',
    name: 'Ngô kháng sâu, chịu thuốc diệt cỏ',
    gene: 'Gene độc tố Bt và gene giúp cây chịu một loại thuốc diệt cỏ',
    use: 'Được phép trồng thương mại ở Việt Nam từ năm 2015, chủ yếu làm thức ăn chăn nuôi.',
    args: [
      {
        id: 'ngo-sau',
        text: 'Kháng sâu đục thân, giảm công phun thuốc',
        side: 'loi-ich',
        why: 'Sâu đục thân bị diệt bởi độc tố Bt do cây tự tạo ra.',
      },
      {
        id: 'ngo-co',
        text: 'Diệt cỏ dễ dàng mà cây ngô không bị hại',
        side: 'loi-ich',
        why: 'Phun thuốc diệt cỏ cả ruộng, chỉ cỏ chết, đỡ công làm cỏ.',
      },
      {
        id: 'ngo-co-khang',
        text: 'Dùng một loại thuốc diệt cỏ lâu dài có thể tạo cỏ dại kháng thuốc',
        side: 'rui-ro',
        why: 'Thuốc chọn lọc những cây cỏ mang gene kháng, chúng ngày càng nhiều.',
      },
      {
        id: 'ngo-phu-thuoc',
        text: 'Nông dân phải mua hạt giống mới mỗi vụ',
        side: 'rui-ro',
        why: 'Hạt lai thương mại không giữ được đặc tính ở đời sau, chi phí giống cao.',
      },
    ],
    conditions: [
      'Luân phiên các loại thuốc diệt cỏ và biện pháp làm cỏ',
      'Theo dõi sâu kháng và cỏ kháng thuốc ở từng vùng trồng',
    ],
  },
  {
    id: 'insulin',
    name: 'Insulin tái tổ hợp',
    gene: 'Gene insulin người chuyển vào vi khuẩn E. coli hoặc nấm men',
    use: 'Thuốc điều trị bệnh đái tháo đường, được dùng từ năm 1982.',
    args: [
      {
        id: 'in-giong',
        text: 'Giống hệt insulin người, ít gây dị ứng hơn insulin của lợn, bò',
        side: 'loi-ich',
        why: 'Protein do chính gene người mã hoá nên cơ thể không coi là vật lạ.',
      },
      {
        id: 'in-nhieu',
        text: 'Sản xuất được lượng lớn, ổn định, giá thành hạ',
        side: 'loi-ich',
        why: 'Vi sinh vật sinh sản rất nhanh trong nồi lên men.',
      },
      {
        id: 'in-thoat',
        text: 'Chủng vi sinh vật biến đổi gene phải được ngăn phát tán ra ngoài',
        side: 'rui-ro',
        why: 'Phòng thí nghiệm, nhà máy phải tuân thủ an toàn sinh học.',
      },
      {
        id: 'in-tinh-sach',
        text: 'Sản phẩm phải được tinh sạch, kiểm tra nghiêm ngặt trước khi dùng',
        side: 'rui-ro',
        why: 'Tạp chất từ tế bào vi khuẩn có thể gây phản ứng ở người bệnh.',
      },
    ],
    conditions: [
      'Sản xuất trong nhà máy đạt chuẩn an toàn sinh học',
      'Kiểm định chất lượng từng lô thuốc',
    ],
  },
];

/**
 * The product with this id.
 * @param {string} id
 * @returns {Product}
 */
export function product(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) throw new Error(`no product ${id}`);
  return p;
}

/**
 * A product's arguments as cards to sort, mixed the same way for everyone.
 * @param {Product} p
 * @returns {import('#lib/core/card-sorter.js').SortCard[]}
 */
export function cardsOf(p) {
  const seed = p.id.split('').reduce((s, c) => s * 31 + c.charCodeAt(0), 11);
  return shuffled(
    p.args.map((a) => ({ id: a.id, label: a.text, bin: a.side, why: a.why })),
    seed,
  );
}

/**
 * What the learner should weigh after voting.
 * @param {Product} p @param {Vote} vote
 */
export function voteNote(p, vote) {
  const risks = p.args.filter((a) => a.side === 'rui-ro').map((a) => lowerFirst(a.text));
  const gains = p.args.filter((a) => a.side === 'loi-ich').map((a) => lowerFirst(a.text));
  if (vote === 'ung-ho') {
    return `Em ủng hộ ${lowerFirst(p.name)}. Hãy chuẩn bị trả lời phản biện về rủi ro: ${risks.join('; ')}.`;
  }
  if (vote === 'phan-doi') {
    return `Em phản đối ${lowerFirst(p.name)}. Hãy nêu cách khác đạt được lợi ích: ${gains.join('; ')}.`;
  }
  return `Em ủng hộ có điều kiện. Điều kiện gợi ý: ${p.conditions.join('; ')}. Em có thể thêm điều kiện của mình.`;
}

/**
 * Whole-number percentages of a class tally that add up to 100, or null
 * when no vote was entered.
 * @param {number[]} counts
 * @returns {number[] | null}
 */
export function percents(counts) {
  const total = counts.reduce((s, c) => s + c, 0);
  if (total === 0) return null;
  return roundToTotal(
    counts.map((c) => (c * 100) / total),
    100,
  );
}

/**
 * The sentence on a class tally.
 * @param {number[]} counts in the order of VOTES
 */
export function tallyText(counts) {
  const p = percents(counts);
  if (!p) return 'Chưa nhập kết quả bình chọn của lớp.';
  const total = counts.reduce((s, c) => s + c, 0);
  const parts = VOTES.map((v, i) => `${v.label} ${counts[i]} (${p[i]}%)`);
  const top = Math.max(...counts);
  const leaders = VOTES.filter((_, i) => counts[i] === top).map((v) => v.label.toLowerCase());
  const lead =
    leaders.length > 1
      ? `${leaders.length === 2 ? 'Hai' : 'Ba'} ý kiến ngang nhau: ${leaders.slice(0, -1).join(', ')} và ${leaders.at(-1)}.`
      : `Nhiều nhất: ${leaders[0]}.`;
  return `${total} bạn bình chọn: ${parts.join(', ')}. ${lead}`;
}

/**
 * The debate as plain text to copy into a report.
 * @param {Record<string, Vote>} votes @param {Record<string, number[]>} tallies
 */
export function reportText(votes, tallies) {
  const lines = ['Bảng tranh luận: sản phẩm chuyển gene', ''];
  const done = PRODUCTS.filter((p) => votes[p.id] || tallies[p.id]?.some((c) => c > 0));
  if (done.length === 0) lines.push('(Chưa có sản phẩm nào được bình chọn.)');
  for (const p of done) {
    lines.push(`${p.name}: ${p.gene}.`);
    lines.push(
      `- Lợi ích: ${p.args
        .filter((a) => a.side === 'loi-ich')
        .map((a) => a.text)
        .join('; ')}.`,
    );
    lines.push(
      `- Rủi ro: ${p.args
        .filter((a) => a.side === 'rui-ro')
        .map((a) => a.text)
        .join('; ')}.`,
    );
    const v = VOTES.find((x) => x.id === votes[p.id]);
    lines.push(`- Ý kiến của em: ${v ? v.label : '(chưa chọn)'}.`);
    if (tallies[p.id]) lines.push(`- Lớp: ${tallyText(tallies[p.id])}`);
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}
