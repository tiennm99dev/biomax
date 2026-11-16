/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm đột biến gene, đột biến điểm, thể đột biến; các dạng đột biến điểm và hậu quả đối với protein; nguyên nhân, cơ chế phát sinh; vai trò của đột biến gene trong nghiên cứu, chọn giống và tiến hoá.',
  intro:
    'Chỉ một cặp nucleotide bị thay trong gene β-globin cũng đủ làm hồng cầu cong thành hình lưỡi liềm, gây thiếu máu nặng. Thế nhưng cũng chính những thay đổi nhỏ như vậy đã tạo ra súp lơ, lúa chịu mặn và cả sự đa dạng của sinh giới. Đột biến gene là gì, phát sinh ra sao và có vai trò gì?',
  objectives: [
    'Nêu được khái niệm đột biến gene, đột biến điểm và thể đột biến.',
    'Phân biệt được các dạng đột biến điểm (thay thế, mất, thêm một cặp nucleotide) và hậu quả của chúng đối với chuỗi polypeptide.',
    'Trình bày được nguyên nhân và cơ chế phát sinh đột biến gene.',
    'Nêu được vai trò của đột biến gene trong nghiên cứu di truyền, chọn giống và tiến hoá.',
  ],
  sections: [
    {
      heading: 'Khái niệm và các dạng đột biến gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đột biến gene',
          text: 'Đột biến gene là những biến đổi trong cấu trúc của gene, liên quan đến một hoặc một số cặp nucleotide. Đột biến chỉ liên quan đến một cặp nucleotide gọi là đột biến điểm. Cá thể mang gene đột biến đã biểu hiện thành kiểu hình gọi là thể đột biến.',
        },
        {
          type: 'list',
          items: [
            'Đột biến gene xảy ra ngẫu nhiên, vô hướng, với tần số thấp (khoảng $10^{-6}$ đến $10^{-4}$ ở mỗi gene); có thể xảy ra ở tế bào sinh dưỡng hoặc tế bào sinh dục.',
            'Đột biến có tính thuận nghịch: allele trội có thể đột biến thành allele lặn và ngược lại; phần lớn đột biến gene là đột biến lặn.',
          ],
        },
        {
          type: 'table',
          caption: 'Các dạng đột biến điểm',
          head: ['Đặc điểm', 'Thay thế một cặp', 'Mất một cặp', 'Thêm một cặp'],
          rows: [
            ['Số nucleotide của gene', 'Không đổi', 'Giảm $2$', 'Tăng $2$'],
            [
              'Số liên kết hydrogen',
              'A – T → G – C: tăng $1$; G – C → A – T: giảm $1$; A – T → T – A hoặc G – C → C – G: không đổi',
              'Giảm $2$ (mất A – T) hoặc giảm $3$ (mất G – C)',
              'Tăng $2$ (thêm A – T) hoặc tăng $3$ (thêm G – C)',
            ],
            [
              'Ảnh hưởng đến chuỗi polypeptide',
              'Thay đổi tối đa một bộ ba, nên tối đa một amino acid',
              'Dịch khung đọc: các bộ ba từ vị trí đột biến trở về sau đều thay đổi',
              'Dịch khung đọc: các bộ ba từ vị trí đột biến trở về sau đều thay đổi',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Đột biến đồng nghĩa (im lặng): bộ ba bị thay đổi nhưng vẫn mã hoá amino acid cũ (nhờ tính thoái hoá của mã di truyền).',
            'Đột biến sai nghĩa: bộ ba mới mã hoá một amino acid khác.',
            'Đột biến vô nghĩa: bộ ba mới là bộ ba kết thúc, chuỗi polypeptide ngắn lại.',
          ],
        },
      ],
    },
    {
      heading: 'Nguyên nhân và cơ chế phát sinh',
      blocks: [
        {
          type: 'list',
          items: [
            'Nguyên nhân bên trong: rối loạn sinh lí, hoá sinh của tế bào gây sai sót trong tái bản DNA hoặc làm biến đổi cấu trúc hoá học của nucleotide (đột biến tự phát).',
            'Tác nhân vật lí: tia phóng xạ, tia tử ngoại (UV), sốc nhiệt.',
            'Tác nhân hoá học: 5-bromouracil (5-BU), EMS, NMU…',
            'Tác nhân sinh học: một số virus như virus viêm gan B, HPV.',
          ],
        },
        {
          type: 'p',
          text: 'Đột biến thay thế: base có thể tồn tại ở dạng hiếm (vị trí liên kết hydrogen thay đổi), nên khi tái bản bắt cặp nhầm. Thymine dạng hiếm (T*) bắt cặp với G, làm cặp A – T thành G – C; guanine dạng hiếm (G*) bắt cặp với T, làm cặp G – C thành A – T. Chất đồng đẳng của base như 5-BU được lắp vào mạch mới đối diện A, sau đó bắt cặp với G, làm cặp A – T thành G – C.',
        },
        { type: 'widget', name: 'co-che-thay-the' },
        {
          type: 'p',
          text: 'Đột biến thêm, mất: nếu một nucleotide trên mạch khuôn được dùng làm khuôn hai lần, mạch mới có thêm một nucleotide; nếu một nucleotide bị bỏ qua, mạch mới mất một nucleotide. Tia UV làm hai thymine đứng cạnh nhau trên một mạch liên kết với nhau; sự sửa chữa sai vùng này có thể gây thêm hoặc mất cặp nucleotide. Acridine chèn vào mạch khuôn gây thêm cặp, chèn vào mạch đang tổng hợp gây mất cặp.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ: bệnh hồng cầu hình liềm',
          text: 'Gene β-globin bình thường (HbA) có bộ ba GAG mã hoá Glu ở vị trí thứ $6$ của chuỗi β. Ở allele HbS, cặp A – T bị thay bằng cặp T – A, bộ ba thành GTG mã hoá Val. Hemoglobin biến đổi làm hồng cầu cong hình lưỡi liềm, dễ vỡ, gây thiếu máu.',
        },
      ],
    },
    {
      heading: 'Vai trò của đột biến gene',
      blocks: [
        {
          type: 'p',
          text: 'Phần lớn đột biến gene có hại cho thể đột biến (giảm sức sống, gây bệnh, tật di truyền, có thể gây chết), nhưng cũng có đột biến có lợi hoặc trung tính; mức độ có lợi hay có hại còn tuỳ tổ hợp gene và điều kiện môi trường.',
        },
        {
          type: 'table',
          caption: 'Vai trò của đột biến gene',
          head: ['Lĩnh vực', 'Vai trò và ví dụ'],
          rows: [
            [
              'Nghiên cứu di truyền',
              'Dùng các thể đột biến để tìm hiểu chức năng gene, quy luật di truyền, cơ chế điều hoà; nhờ đột biến thay thế ở E. coli, người ta xác định được nhiều bộ ba và ba bộ ba kết thúc',
            ],
            [
              'Chọn giống',
              'Cung cấp nguyên liệu tạo giống mới: lúa CM5 năng suất cao, chịu mặn; súp lơ chọn từ cải dại có đột biến làm chồi phân nhánh mạnh; cà chua giàu GABA',
            ],
            [
              'Tiến hoá',
              'Tạo ra các allele mới, là nguồn nguyên liệu sơ cấp cho chọn lọc tự nhiên, làm sinh giới đa dạng; ví dụ đột biến làm vi khuẩn kháng penicillin',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Trình soạn gene: sửa một nucleotide, xem protein đổi thế nào',
    instruction:
      'Chạm vào một nucleotide trên mạch mã hoá để thay thế, thêm hoặc mất nó; quan sát mRNA, chuỗi amino acid, số cặp nucleotide và số liên kết hydrogen. Thử tạo đủ các loại đột biến trong danh sách, khôi phục gene sau mỗi lần. Với "Đầu gene β-globin", hãy tái hiện đột biến HbS.',
  },
  examples: [
    {
      problem:
        'Một gene có $3000$ nucleotide và $3900$ liên kết hydrogen bị đột biến thay thế một cặp A – T bằng một cặp G – C. Tính số nucleotide mỗi loại của gene đột biến.',
      steps: [
        'Gene ban đầu: $2A + 2G = 3000$ và $2A + 3G = 3900$, suy ra $G = 900$, $A = 600$.',
        'Thay một cặp A – T bằng một cặp G – C: A và T giảm $1$, G và C tăng $1$.',
        'Gene đột biến: $A = T = 599$, $G = C = 901$ (số liên kết hydrogen $3901$).',
      ],
      answer: '$A = T = 599$, $G = C = 901$.',
    },
    {
      problem:
        "Mạch mã hoá của một đoạn gene là $5'$-ATG TGG AAA TAG-$3'$ (Met – Trp – Lys). Cặp G – C ở vị trí thứ $6$ (tính từ A đầu tiên) bị thay bằng cặp A – T. Hậu quả đối với chuỗi polypeptide là gì?",
      steps: [
        'Vị trí thứ $6$ là nucleotide cuối của bộ ba thứ hai TGG.',
        'TGG thành TGA; trên mRNA, UGG (Trp) thành UGA, là bộ ba kết thúc.',
        'Dịch mã dừng ngay sau Met.',
      ],
      answer:
        'Đột biến vô nghĩa: chuỗi polypeptide chỉ còn Met (trước khi cắt amino acid mở đầu), ngắn hơn nhiều.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Một gene có $600$ nucleotide loại A và $900$ nucleotide loại G. Gene bị đột biến mất một cặp G – C. Gene đột biến có bao nhiêu liên kết hydrogen?',
      answer: 3897,
      hints: [
        'Tính số liên kết hydrogen của gene ban đầu: $H = 2A + 3G$.',
        'Mất một cặp G – C làm mất $3$ liên kết hydrogen.',
      ],
      solution: '$H = 2 \\cdot 600 + 3 \\cdot 900 = 3900$; sau đột biến: $3900 - 3 = 3897$.',
    },
    {
      type: 'choice',
      prompt: 'Đột biến điểm nào thường gây hậu quả nặng nhất đối với chuỗi polypeptide?',
      options: [
        'Mất một cặp nucleotide ngay sau bộ ba mở đầu',
        'Thay thế một cặp nucleotide ở vị trí thứ ba của một bộ ba',
        'Mất một cặp nucleotide ở bộ ba ngay trước bộ ba kết thúc',
        'Thay một cặp A – T bằng một cặp T – A ở intron',
      ],
      answer: 0,
      hints: ['Mất một cặp làm dịch khung đọc từ vị trí đột biến về sau.'],
      solution:
        'Mất một cặp ngay đầu vùng mã hoá làm dịch khung gần như toàn bộ các bộ ba, nên hầu hết amino acid bị thay đổi. Thay thế ở vị trí thứ ba thường là đồng nghĩa; đột biến ở intron không ảnh hưởng chuỗi polypeptide.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi biến đổi bộ ba trên mRNA với loại đột biến tương ứng.',
      left: ['GAA (Glu) → GAG (Glu)', 'GAG (Glu) → GUG (Val)', 'UGG (Trp) → UAG'],
      right: ['Đột biến đồng nghĩa', 'Đột biến sai nghĩa', 'Đột biến vô nghĩa'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['UAG là một bộ ba kết thúc.'],
      solution:
        'GAA và GAG cùng mã hoá Glu: đồng nghĩa. Glu → Val: sai nghĩa. UGG → UAG (kết thúc): vô nghĩa.',
    },
    {
      type: 'number',
      prompt:
        'Chất 5-BU gây đột biến thay cặp A – T bằng cặp G – C. Cần ít nhất bao nhiêu lần tái bản để xuất hiện cặp G – C?',
      answer: 3,
      hints: ['5-BU được lắp vào mạch mới trước, sau đó mới bắt cặp với G.'],
      solution: 'A – T → A – 5BU (lần 1) → G – 5BU (lần 2) → G – C (lần 3). Cần $3$ lần tái bản.',
    },
    {
      type: 'choice',
      prompt: 'Base guanine dạng hiếm (G*) khi tái bản bắt cặp với T. Đột biến này làm',
      options: [
        'cặp G – C thành cặp A – T',
        'cặp A – T thành cặp G – C',
        'mất một cặp G – C',
        'thêm một cặp G – C',
      ],
      answer: 0,
      hints: ['Sau khi G* bắt cặp với T, lần tái bản tiếp theo T bắt cặp với gì?'],
      solution: 'G* – C → G* – T (lần 1) → A – T (lần 2): cặp G – C bị thay bằng cặp A – T.',
    },
    {
      type: 'text',
      prompt: 'Cá thể mang gene đột biến đã biểu hiện ra kiểu hình được gọi là gì?',
      accept: ['thể đột biến'],
      hints: ['Thuật ngữ gồm hai từ: "thể" và tên của hiện tượng.'],
      solution: 'Đó là thể đột biến.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về đột biến gene.',
      options: [
        'Đột biến gene là nguồn nguyên liệu sơ cấp cho tiến hoá',
        'Đột biến gene có thể có hại, có lợi hoặc trung tính',
        'Đột biến gene chỉ xảy ra khi có tác nhân gây đột biến từ môi trường',
        'Mọi đột biến gene đều làm thay đổi chuỗi polypeptide',
      ],
      answers: [0, 1],
      hints: ['Hãy nhớ đột biến tự phát và đột biến đồng nghĩa.'],
      solution:
        'Đột biến gene tạo allele mới cho tiến hoá và có thể có hại, có lợi hoặc trung tính. Đột biến có thể tự phát do sai sót tái bản; đột biến đồng nghĩa không làm thay đổi chuỗi polypeptide.',
    },
    {
      type: 'choice',
      prompt: 'Allele HbS gây bệnh hồng cầu hình liềm phát sinh do dạng đột biến nào?',
      options: [
        'Thay thế một cặp nucleotide làm Glu thành Val',
        'Mất một cặp nucleotide gây dịch khung',
        'Thêm một cặp nucleotide tạo bộ ba kết thúc',
        'Thay thế một cặp nucleotide tạo bộ ba kết thúc sớm',
      ],
      answer: 0,
      hints: ['Chuỗi β của HbS có cùng số amino acid với HbA.'],
      solution:
        'Cặp A – T bị thay bằng cặp T – A, bộ ba GAG thành GTG, amino acid thứ $6$ của chuỗi β là Val thay cho Glu: đột biến thay thế, sai nghĩa.',
    },
  ],
  takeaways: [
    'Đột biến gene là biến đổi cấu trúc gene liên quan một hoặc một số cặp nucleotide; đột biến điểm liên quan một cặp.',
    'Ba dạng đột biến điểm: thay thế (đồng nghĩa, sai nghĩa hoặc vô nghĩa), mất và thêm một cặp (dịch khung đọc).',
    'Đột biến phát sinh do sai sót tái bản, base dạng hiếm, tác nhân vật lí (UV, phóng xạ), hoá học (5-BU, EMS) và sinh học (virus).',
    '5-BU và T* làm A – T thành G – C; G* làm G – C thành A – T.',
    'Đột biến gene là nguyên liệu cho nghiên cứu di truyền, chọn giống và tiến hoá.',
  ],
};
