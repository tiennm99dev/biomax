/**
 * Data for the lesson on asexual reproduction: the forms played stage by
 * stage in the main widget, the examples sorted into those forms, and the
 * plant propagation methods (giâm, chiết, ghép, nuôi cấy mô).
 */

/** @typedef {'phan-doi' | 'nay-choi' | 'phan-manh' | 'trinh-san' | 'sinh-duong'} FormId */

/**
 * @typedef {{
 *   id: FormId;
 *   label: string;
 *   organism: string;
 *   stages: string[];
 *   summary: string;
 * }} Form
 */

/** @type {Form[]} */
export const FORMS = [
  {
    id: 'phan-doi',
    label: 'Phân đôi',
    organism: 'Trùng roi',
    stages: [
      'Một cá thể trùng roi trưởng thành, có một nhân.',
      'Nhân phân chia thành hai nhân; cơ thể kéo dài ra.',
      'Chất tế bào thắt lại ở giữa, chia cơ thể làm hai phần, mỗi phần có một nhân.',
      'Hai cá thể con tách rời nhau, giống hệt nhau và giống cơ thể mẹ.',
    ],
    summary:
      'Phân đôi: cơ thể mẹ tự chia thành hai cá thể con giống nhau (trùng roi, trùng biến hình, trùng giày).',
  },
  {
    id: 'nay-choi',
    label: 'Nảy chồi',
    organism: 'Thuỷ tức',
    stages: [
      'Thuỷ tức mẹ bám vào giá thể, có miệng và tua miệng ở phía trên.',
      'Trên thành cơ thể mẹ mọc ra một chồi nhỏ.',
      'Chồi lớn dần, mọc miệng và tua miệng, vẫn dính với cơ thể mẹ và được mẹ nuôi.',
      'Chồi tách khỏi cơ thể mẹ, sống độc lập thành thuỷ tức con.',
    ],
    summary:
      'Nảy chồi: cơ thể mẹ mọc ra chồi, chồi lớn lên rồi tách ra (thuỷ tức) hoặc dính với mẹ tạo thành tập đoàn (san hô).',
  },
  {
    id: 'phan-manh',
    label: 'Phân mảnh',
    organism: 'Giun dẹp',
    stages: [
      'Một con giun dẹp trưởng thành.',
      'Cơ thể đứt thành hai mảnh.',
      'Mỗi mảnh tự tái tạo phần cơ thể còn thiếu.',
      'Từ hai mảnh hình thành hai cá thể mới hoàn chỉnh.',
    ],
    summary:
      'Phân mảnh: cơ thể mẹ đứt thành nhiều mảnh, mỗi mảnh phát triển thành một cá thể mới (giun dẹp, sao biển).',
  },
  {
    id: 'trinh-san',
    label: 'Trinh sản',
    organism: 'Ong',
    stages: [
      'Ong chúa đẻ trứng.',
      'Một số trứng không được thụ tinh (không kết hợp với tinh trùng).',
      'Trứng không thụ tinh vẫn nở thành ấu trùng, rồi thành nhộng.',
      'Nhộng phát triển thành ong đực.',
    ],
    summary:
      'Trinh sản: trứng không qua thụ tinh vẫn phát triển thành cá thể mới (trứng không thụ tinh của ong chúa nở thành ong đực).',
  },
  {
    id: 'sinh-duong',
    label: 'Sinh sản sinh dưỡng',
    organism: 'Cây lá bỏng',
    stages: [
      'Một chiếc lá bỏng rơi xuống đất ẩm.',
      'Ở các chỗ lõm trên mép lá xuất hiện các chồi nhỏ.',
      'Mỗi chồi mọc rễ xuống đất và ra lá non.',
      'Các chồi phát triển thành những cây con mới, lá mẹ héo dần.',
    ],
    summary:
      'Sinh sản sinh dưỡng: cây mới mọc ra từ cơ quan sinh dưỡng (rễ, thân, lá) của cây mẹ: lá bỏng, khoai tây, khoai lang, gừng, cỏ gấu.',
  },
];

/** @param {string} id */
export function formById(id) {
  return FORMS.find((f) => f.id === id) ?? FORMS[0];
}

/**
 * The live line under the animation.
 * @param {Form} form @param {number} stage
 */
export function stageText(form, stage) {
  const i = Math.max(0, Math.min(form.stages.length - 1, stage));
  const head = `${form.organism}, bước ${i + 1}: ${form.stages[i]}`;
  return i === form.stages.length - 1 ? `${head} ${form.summary}` : head;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const FORM_BINS = FORMS.map((f) => ({ id: f.id, label: f.label }));

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const EXAMPLE_CARDS = [
  {
    id: 'trung-roi',
    label: 'Trùng roi tạo ra hai cá thể mới',
    bin: 'phan-doi',
    why: 'Cơ thể trùng roi tự chia làm hai: đó là phân đôi.',
  },
  {
    id: 'trung-bien-hinh',
    label: 'Trùng biến hình chia cơ thể làm hai',
    bin: 'phan-doi',
    why: 'Sinh vật đơn bào chia đôi cơ thể: phân đôi.',
  },
  {
    id: 'thuy-tuc',
    label: 'Thuỷ tức mọc chồi, chồi tách ra thành thuỷ tức con',
    bin: 'nay-choi',
    why: 'Cá thể con hình thành từ một chồi trên cơ thể mẹ: nảy chồi.',
  },
  {
    id: 'san-ho',
    label: 'San hô tạo thành tập đoàn gồm nhiều cá thể dính liền',
    bin: 'nay-choi',
    why: 'Chồi san hô không tách khỏi mẹ, tạo thành tập đoàn: nảy chồi.',
  },
  {
    id: 'sao-bien',
    label: 'Một cánh sao biển bị đứt mọc thành sao biển mới',
    bin: 'phan-manh',
    why: 'Mảnh cơ thể bị đứt tái tạo thành cơ thể mới: phân mảnh.',
  },
  {
    id: 'giun-det',
    label: 'Giun dẹp bị cắt thành hai đoạn, mỗi đoạn thành một con',
    bin: 'phan-manh',
    why: 'Mỗi mảnh cơ thể phát triển thành cá thể mới: phân mảnh.',
  },
  {
    id: 'ong-duc',
    label: 'Trứng không thụ tinh của ong chúa nở thành ong đực',
    bin: 'trinh-san',
    why: 'Trứng phát triển thành con mà không cần thụ tinh: trinh sản.',
  },
  {
    id: 'khoai-tay',
    label: 'Củ khoai tây mọc mầm thành cây mới',
    bin: 'sinh-duong',
    why: 'Củ khoai tây là thân củ, một cơ quan sinh dưỡng: sinh sản sinh dưỡng.',
  },
  {
    id: 'la-bong',
    label: 'Lá bỏng mọc cây con ở mép lá',
    bin: 'sinh-duong',
    why: 'Cây con mọc ra từ lá, một cơ quan sinh dưỡng: sinh sản sinh dưỡng.',
  },
  {
    id: 'gung',
    label: 'Củ gừng (thân rễ) đâm chồi thành cây gừng mới',
    bin: 'sinh-duong',
    why: 'Thân rễ của gừng là cơ quan sinh dưỡng: sinh sản sinh dưỡng.',
  },
];

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const METHOD_BINS = [
  { id: 'giam', label: 'Giâm cành' },
  { id: 'chiet', label: 'Chiết cành' },
  { id: 'ghep', label: 'Ghép cây' },
  { id: 'nuoi-cay', label: 'Nuôi cấy mô' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const METHOD_CARDS = [
  {
    id: 'giam-1',
    label: 'Cắt một đoạn cành có đủ mắt, chồi rồi cắm xuống đất ẩm cho ra rễ',
    bin: 'giam',
    why: 'Cành được cắt rời khỏi cây mẹ rồi mới ra rễ: giâm cành.',
  },
  {
    id: 'giam-2',
    label: 'Cắm các đoạn thân sắn, mía, rau muống xuống đất',
    bin: 'giam',
    why: 'Sắn, mía, rau muống dễ ra rễ từ đoạn thân cắt rời: giâm cành.',
  },
  {
    id: 'chiet-1',
    label: 'Khoanh vỏ một cành, bó đất ẩm cho cành ra rễ ngay trên cây mẹ',
    bin: 'chiet',
    why: 'Cành ra rễ khi còn trên cây mẹ, sau đó mới cắt đem trồng: chiết cành.',
  },
  {
    id: 'chiet-2',
    label: 'Nhân giống bưởi, cam, vải, nhãn: cây con có rễ sẵn khi rời cây mẹ',
    bin: 'chiet',
    why: 'Cành chiết đã có rễ trước khi tách khỏi cây mẹ.',
  },
  {
    id: 'ghep-1',
    label: 'Gắn mắt của cây này lên gốc của cây khác cho liền lại',
    bin: 'ghep',
    why: 'Kết hợp phần của hai cây thành một cây: ghép (ghép mắt).',
  },
  {
    id: 'ghep-2',
    label: 'Gắn cành thanh long lên gốc cây xương rồng ba cạnh',
    bin: 'ghep',
    why: 'Cành của cây này được gắn lên gốc cây khác: ghép cành.',
  },
  {
    id: 'nuoi-cay-1',
    label: 'Nuôi mẩu mô lá trong ống nghiệm vô trùng có chất dinh dưỡng',
    bin: 'nuoi-cay',
    why: 'Mô được nuôi trong môi trường dinh dưỡng, điều kiện vô trùng: nuôi cấy mô.',
  },
  {
    id: 'nuoi-cay-2',
    label: 'Từ một mẩu mô tạo ra hàng nghìn cây lan con sạch bệnh',
    bin: 'nuoi-cay',
    why: 'Nhân nhanh số lượng lớn cây sạch bệnh là ưu điểm của nuôi cấy mô.',
  },
];
