/**
 * The pathogen cards: each infectious disease goes into the group of the
 * agent that causes it (virus, vi khuẩn, nấm or kí sinh trùng), with the
 * reason shown once it is placed.
 */

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const AGENT_BINS = [
  { id: 'virus', label: 'Virus' },
  { id: 'vi-khuan', label: 'Vi khuẩn' },
  { id: 'nam', label: 'Nấm' },
  { id: 'ki-sinh-trung', label: 'Kí sinh trùng' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const DISEASE_CARDS = [
  {
    id: 'cum',
    label: 'Cúm',
    bin: 'virus',
    why: 'Bệnh cúm do virus cúm (các chủng A, B, C, D) gây ra, lây qua đường hô hấp.',
  },
  {
    id: 'covid',
    label: 'COVID-19',
    bin: 'virus',
    why: 'COVID-19 do virus corona SARS-CoV-2 gây ra; WHO tuyên bố là đại dịch năm 2020.',
  },
  {
    id: 'sot-xuat-huyet',
    label: 'Sốt xuất huyết',
    bin: 'virus',
    why: 'Sốt xuất huyết do virus Dengue gây ra, được muỗi vằn (Aedes aegypti) truyền từ người bệnh sang người lành.',
  },
  {
    id: 'soi',
    label: 'Sởi',
    bin: 'virus',
    why: 'Bệnh sởi do virus sởi gây ra, lây rất mạnh qua đường hô hấp.',
  },
  {
    id: 'tay-chan-mieng',
    label: 'Tay chân miệng',
    bin: 'virus',
    why: 'Bệnh tay chân miệng do các virus đường ruột (enterovirus, như EV71) gây ra, hay gặp ở trẻ nhỏ.',
  },
  {
    id: 'ta',
    label: 'Tả',
    bin: 'vi-khuan',
    why: 'Bệnh tả do phẩy khuẩn tả (Vibrio cholerae) gây ra, lây qua thức ăn, nước uống nhiễm khuẩn.',
  },
  {
    id: 'lao',
    label: 'Lao phổi',
    bin: 'vi-khuan',
    why: 'Bệnh lao do trực khuẩn lao (Mycobacterium tuberculosis) gây ra, lây qua đường hô hấp.',
  },
  {
    id: 'dich-hach',
    label: 'Dịch hạch',
    bin: 'vi-khuan',
    why: 'Dịch hạch do vi khuẩn Yersinia pestis gây ra; bọ chét trên chuột truyền bệnh sang người.',
  },
  {
    id: 'li-truc-khuan',
    label: 'Lị trực khuẩn',
    bin: 'vi-khuan',
    why: 'Lị trực khuẩn do vi khuẩn Shigella gây ra, lây qua đường tiêu hoá.',
  },
  {
    id: 'hac-lao',
    label: 'Hắc lào',
    bin: 'nam',
    why: 'Hắc lào là bệnh nấm da, lây khi dùng chung quần áo, khăn mặt hoặc tiếp xúc với da người bệnh.',
  },
  {
    id: 'tua-mieng',
    label: 'Tưa miệng',
    bin: 'nam',
    why: 'Tưa miệng do nấm men Candida gây ra, hay gặp ở trẻ nhỏ và người có sức đề kháng yếu.',
  },
  {
    id: 'sot-ret',
    label: 'Sốt rét',
    bin: 'ki-sinh-trung',
    why: 'Sốt rét do kí sinh trùng Plasmodium (một loại động vật nguyên sinh) gây ra, được muỗi Anopheles cái truyền.',
  },
  {
    id: 'li-amip',
    label: 'Lị amip',
    bin: 'ki-sinh-trung',
    why: 'Lị amip do trùng kiết lị (Entamoeba histolytica) gây ra, lây qua thức ăn, nước uống có bào xác của trùng.',
  },
  {
    id: 'ghe',
    label: 'Ghẻ',
    bin: 'ki-sinh-trung',
    why: 'Bệnh ghẻ do cái ghẻ (Sarcoptes scabiei) kí sinh dưới da gây ra, lây khi tiếp xúc gần, nằm chung, dùng chung chăn chiếu.',
  },
];

/** The three levels of spread of an infectious disease. */
export const LEVELS = [
  { value: 'le-te', label: 'Lẻ tẻ' },
  { value: 'dich', label: 'Dịch' },
  { value: 'dai-dich', label: 'Đại dịch' },
];

/**
 * Situations to place on a level, each with the reason.
 * @type {Array<{ id: string, text: string, level: string, why: string }>}
 */
export const SITUATIONS = [
  {
    id: 'thuy-dau',
    text: 'Cả năm, trạm y tế một xã ghi nhận 4 ca thuỷ đậu ở bốn thôn khác nhau, không liên quan đến nhau.',
    level: 'le-te',
    why: 'Bệnh truyền nhiễm nhưng chỉ có vài ca rải rác trong thời gian dài: bệnh xuất hiện lẻ tẻ, chưa thành dịch.',
  },
  {
    id: 'sot-xuat-huyet',
    text: 'Trong 2 tuần mùa mưa, một quận có hơn 300 ca sốt xuất huyết, số ca mới mỗi ngày vẫn tăng.',
    level: 'dich',
    why: 'Nhiều người trong một cộng đồng mắc bệnh trong thời gian ngắn và số ca đang tăng nhanh: đó là dịch.',
  },
  {
    id: 'covid',
    text: 'Một bệnh hô hấp mới xuất hiện, sau vài tháng có ca bệnh ở hơn 100 nước trên mọi châu lục; WHO tuyên bố tình trạng toàn cầu.',
    level: 'dai-dich',
    why: 'Bệnh lan ra nhiều châu lục và được WHO tuyên bố: đó là đại dịch, như COVID-19 năm 2020.',
  },
  {
    id: 'ta',
    text: 'Sau đợt lũ, một huyện có 45 ca tiêu chảy cấp do vi khuẩn tả trong 10 ngày, đều dùng chung nguồn nước giếng.',
    level: 'dich',
    why: 'Nhiều ca trong thời gian ngắn ở cùng một vùng, cùng một nguồn lây: đó là dịch tả ở huyện đó.',
  },
  {
    id: 'cum-1918',
    text: 'Năm 1918, một chủng virus cúm lan khắp thế giới, khoảng một phần ba dân số thế giới bị nhiễm.',
    level: 'dai-dich',
    why: 'Bệnh lan khắp các châu lục: đó là đại dịch cúm năm 1918.',
  },
  {
    id: 'lao',
    text: 'Trong một năm, hai xã cách xa nhau mỗi xã phát hiện 1 ca lao phổi mới; hai người bệnh không tiếp xúc với nhau.',
    level: 'le-te',
    why: 'Hai ca rải rác trong thời gian dài, không lây cho nhau: bệnh xuất hiện lẻ tẻ.',
  },
];

/**
 * The verdict on the level chosen for a situation.
 * @param {string} situationId @param {string} level
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function levelVerdict(situationId, level) {
  const s = SITUATIONS.find((x) => x.id === situationId) ?? SITUATIONS[0];
  if (level === s.level) return { tone: 'ok', text: `Đúng. ${s.why}` };
  const name = LEVELS.find((l) => l.value === s.level)?.label ?? '';
  return {
    tone: 'warn',
    text: `Chưa đúng. Hãy xem số ca, thời gian và phạm vi lan của bệnh. Đáp án: ${name.toLowerCase()}. ${s.why}`,
  };
}
