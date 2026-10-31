/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đột biến gene là biến đổi trong cấu trúc của gene; đột biến điểm liên quan đến một cặp nucleotide (mất, thêm, thay thế); nguyên nhân, đặc điểm, ý nghĩa và tác hại của đột biến gene.',
  intro:
    'Người mắc bệnh hồng cầu hình liềm có hồng cầu cong như lưỡi liềm, dễ vỡ và dễ làm tắc mạch máu. Nguyên nhân chỉ là một cặp nucleotide bị thay bằng cặp khác trong gene quy định chuỗi β-globin của hemoglobin. Một thay đổi nhỏ như vậy trên DNA dẫn đến thay đổi protein và tính trạng như thế nào? Trong bài này, em sẽ tự tạo đột biến trên một gene và quan sát chuỗi amino acid thay đổi.',
  objectives: [
    'Nêu được khái niệm đột biến gene và đột biến điểm; phân biệt được ba dạng đột biến điểm: mất, thêm, thay thế một cặp nucleotide.',
    'Giải thích được vì sao đột biến gene có thể làm thay đổi mRNA, protein và tính trạng.',
    'Nêu được nguyên nhân phát sinh và đặc điểm của đột biến gene.',
    'Trình bày được ý nghĩa và tác hại của đột biến gene, lấy được ví dụ minh hoạ.',
  ],
  sections: [
    {
      heading: 'Khái niệm và các dạng đột biến gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đột biến gene',
          text: 'Đột biến gene là những biến đổi trong cấu trúc của gene. Đột biến gene liên quan đến một cặp nucleotide gọi là đột biến điểm.',
        },
        {
          type: 'p',
          text: 'Các dạng đột biến điểm gồm: mất một cặp nucleotide, thêm một cặp nucleotide và thay thế một cặp nucleotide này bằng một cặp nucleotide khác. Gene bị đột biến tạo ra một allele mới của gene đó. Mỗi cặp nucleotide dài $3{,}4$ Å $= 0{,}34$ nm, nên mất hoặc thêm một cặp làm gene ngắn đi hoặc dài thêm $3{,}4$ Å.',
        },
        {
          type: 'table',
          caption: 'So sánh ba dạng đột biến điểm',
          head: ['Dạng', 'Số cặp nucleotide', 'Chiều dài gene', 'Số liên kết hydrogen'],
          rows: [
            [
              'Mất một cặp',
              'Giảm $1$',
              'Giảm $0{,}34$ nm',
              'Giảm $2$ (mất cặp A – T) hoặc $3$ (mất cặp G – C)',
            ],
            [
              'Thêm một cặp',
              'Tăng $1$',
              'Tăng $0{,}34$ nm',
              'Tăng $2$ (thêm cặp A – T) hoặc $3$ (thêm cặp G – C)',
            ],
            [
              'Thay thế một cặp',
              'Không đổi',
              'Không đổi',
              'Không đổi (A – T bằng T – A, G – C bằng C – G); tăng $1$ (A – T bằng G – C); giảm $1$ (G – C bằng A – T)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ: bệnh hồng cầu hình liềm',
          text: 'Trong gene quy định chuỗi β-globin, cặp A – T ở bộ ba thứ $6$ (không tính bộ ba mở đầu) bị thay bằng cặp T – A: trên mạch mã hoá, bộ ba GAG thành GTG, nên trên mRNA GAG thành GUG. Amino acid glutamic acid (Glu) bị thay bằng valine (Val), hemoglobin bị biến đổi và hồng cầu có hình lưỡi liềm. Đây là đột biến thay thế một cặp nucleotide.',
        },
      ],
    },
    {
      heading: 'Đột biến gene làm thay đổi protein như thế nào',
      blocks: [
        {
          type: 'p',
          text: 'Gene biểu hiện thành tính trạng qua phiên mã và dịch mã: gene → mRNA → chuỗi polypeptide → protein → tính trạng. Khi trình tự nucleotide của gene thay đổi, trình tự nucleotide trên mRNA thay đổi theo, có thể làm thay đổi trình tự amino acid và chức năng của protein, từ đó làm thay đổi tính trạng.',
        },
        {
          type: 'list',
          items: [
            'Thay thế một cặp nucleotide chỉ làm thay đổi một bộ ba. Bộ ba mới có thể vẫn mã hoá amino acid cũ (chuỗi amino acid không đổi), có thể mã hoá amino acid khác (thay một amino acid), hoặc trở thành bộ ba kết thúc (chuỗi polypeptide ngắn lại).',
            'Mất hoặc thêm một cặp nucleotide làm lệch cách đọc mã bộ ba: mọi bộ ba từ vị trí đột biến trở về sau đều bị đọc khác đi, nên trình tự amino acid từ đó trở đi thường thay đổi hoàn toàn.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mất, thêm thường gây hậu quả lớn hơn thay thế',
          text: 'Vì mã di truyền được đọc liên tục theo từng bộ ba, đột biến mất hoặc thêm một cặp nucleotide ở đầu gene thường làm biến đổi nhiều amino acid hơn đột biến thay thế một cặp nucleotide.',
        },
      ],
    },
    {
      heading: 'Nguyên nhân và đặc điểm của đột biến gene',
      blocks: [
        {
          type: 'p',
          text: 'Đột biến gene có thể phát sinh do sai sót ngẫu nhiên khi DNA tái bản, do rối loạn các quá trình sinh lí, hoá sinh trong tế bào, hoặc do tác động của các tác nhân gây đột biến:',
        },
        {
          type: 'list',
          items: [
            'Tác nhân vật lí: tia tử ngoại (UV), tia X, tia gamma, các tia phóng xạ, sốc nhiệt.',
            'Tác nhân hoá học: 5-bromouracil (5-BU), ethyl methanesulfonate (EMS), một số chất độc như dioxin, thuốc trừ sâu, thuốc diệt cỏ.',
            'Tác nhân sinh học: một số loại virus.',
          ],
        },
        {
          type: 'list',
          items: [
            'Đột biến gene là biến dị di truyền và có tính vô hướng: gene nào cũng có thể bị đột biến, vào bất kì thời điểm nào; một gene có thể đột biến theo nhiều hướng, tạo ra nhiều allele khác nhau.',
            'Tần số đột biến của mỗi gene rất thấp (khoảng $10^{-6}$ đến $10^{-4}$), phụ thuộc vào loại tác nhân, cường độ, liều lượng của tác nhân và cấu trúc của gene.',
            'Đột biến gene có lợi, có hại hay trung tính tuỳ thuộc vào chức năng của gene và điều kiện môi trường trong và ngoài cơ thể.',
          ],
        },
      ],
    },
    {
      heading: 'Ý nghĩa và tác hại của đột biến gene',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ý nghĩa',
          text: 'Đột biến gene tạo ra các allele mới; qua giao phối, các allele tổ hợp lại tạo ra nhiều kiểu gene, kiểu hình, làm tăng đa dạng di truyền. Đột biến gene là nguồn nguyên liệu cho tiến hoá và chọn giống.',
        },
        {
          type: 'list',
          items: [
            'Ở người, gene quy định nhóm máu ABO có ba allele $I^A$, $I^B$, $I^O$, tạo ra $6$ kiểu gene và $4$ nhóm máu A, B, AB, O.',
            'Giống lúa CM5 (Viện Di truyền Nông nghiệp Việt Nam) được tạo ra nhờ gây đột biến gene, cho năng suất cao, chịu rét, chịu mặn tốt và chống chịu sâu bệnh khá.',
            'Dùng tia gamma gây đột biến ở nấm sợi, người ta tạo được chủng nấm sản sinh penicillin với hiệu suất cao hơn nhiều so với dạng tự nhiên.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tác hại',
          text: 'Phần lớn đột biến gene là đột biến lặn và có hại: chúng phá vỡ sự hài hoà trong kiểu gene, làm rối loạn quá trình sinh lí, sinh hoá trong tế bào, có thể gây bệnh, tật di truyền. Ví dụ: bệnh bạch tạng ở người; cây lúa bạch tạng không tổng hợp được diệp lục nên không quang hợp được và chết sớm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Trình soạn gene: tạo đột biến điểm',
    instruction:
      'Chạm vào một nucleotide của mạch mã hoá, rồi chọn thay bằng nucleotide khác, thêm một nucleotide trước nó hoặc làm mất nó. Quan sát mRNA, chuỗi amino acid, số cặp nucleotide và số liên kết hydrogen thay đổi, rồi hoàn thành năm nhiệm vụ; mỗi nhiệm vụ chỉ dùng một đột biến điểm, bấm "Khôi phục trình tự ban đầu" trước khi làm nhiệm vụ tiếp theo.',
  },
  examples: [
    {
      problem:
        'Một gene có $3000$ nucleotide, trong đó có $600$ nucleotide loại A. Gene bị đột biến thay thế một cặp A – T bằng một cặp G – C. Tính số nucleotide mỗi loại, số liên kết hydrogen và chiều dài của gene đột biến.',
      steps: [
        'Gene ban đầu: $A = T = 600$, $G = C = \\dfrac{3000}{2} - 600 = 900$; số liên kết hydrogen $H = 2 \\cdot 600 + 3 \\cdot 900 = 3900$.',
        'Sau đột biến, mất một cặp A – T và có thêm một cặp G – C: $A = T = 599$, $G = C = 901$.',
        'Số liên kết hydrogen: $H = 2 \\cdot 599 + 3 \\cdot 901 = 1198 + 2703 = 3901$ (tăng $1$).',
        'Số cặp nucleotide không đổi nên chiều dài không đổi: $L = 1500 \\cdot 0{,}34 = 510$ nm.',
      ],
      answer: '$A = T = 599$, $G = C = 901$; $3901$ liên kết hydrogen; dài $510$ nm.',
    },
    {
      problem:
        "Mạch mã hoá của một gene là $5'$-ATGCATGAGTGGAAATACTAA-$3'$. Nucleotide thứ $12$ (G) bị thay bằng A. Chuỗi amino acid thay đổi thế nào?",
      steps: [
        'mRNA ban đầu chia bộ ba: AUG – CAU – GAG – UGG – AAA – UAC – UAA, quy định Met – His – Glu – Trp – Lys – Tyr.',
        'Nucleotide thứ $12$ là nucleotide cuối của bộ ba thứ $4$: TGG thành TGA, trên mRNA UGG thành UGA.',
        'UGA là bộ ba kết thúc nên dịch mã dừng sớm sau amino acid thứ $3$.',
      ],
      answer:
        'Chuỗi polypeptide chỉ còn Met – His – Glu: đột biến thay thế tạo ra bộ ba kết thúc sớm làm chuỗi ngắn lại.',
    },
    {
      problem:
        "Cũng gene trên ($5'$-ATGCATGAGTGGAAATACTAA-$3'$), thêm một nucleotide T vào trước nucleotide thứ $4$. Chuỗi amino acid thay đổi thế nào?",
      steps: [
        "Mạch mã hoá mới: $5'$-ATGTCATGAGTGGAAATACTAA-$3'$.",
        'Đọc lại từ AUG theo từng bộ ba: AUG – UCA – UGA – ...',
        'AUG → Met, UCA → Ser, UGA là bộ ba kết thúc.',
      ],
      answer:
        'Chuỗi chỉ còn Met – Ser: thêm một cặp nucleotide làm mọi bộ ba phía sau bị đọc lệch và ở đây tạo ra bộ ba kết thúc sớm.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đột biến điểm là',
      options: [
        'biến đổi trong cấu trúc của gene liên quan đến một cặp nucleotide',
        'biến đổi số lượng nhiễm sắc thể trong tế bào',
        'biến đổi kiểu hình do môi trường, không liên quan đến gene',
        'biến đổi liên quan đến nhiều đoạn nhiễm sắc thể',
      ],
      answer: 0,
      hints: ['Đột biến điểm là một dạng đột biến gene.'],
      solution: 'Đột biến điểm là đột biến gene chỉ liên quan đến một cặp nucleotide.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các dạng đột biến điểm.',
      options: [
        'Mất một cặp nucleotide',
        'Thêm một cặp nucleotide',
        'Thay thế một cặp nucleotide bằng một cặp khác',
        'Mất một đoạn nhiễm sắc thể',
        'Tăng thêm một nhiễm sắc thể',
      ],
      answers: [0, 1, 2],
      hints: ['Đột biến điểm chỉ liên quan đến một cặp nucleotide trong gene.'],
      solution:
        'Ba dạng đột biến điểm là mất, thêm và thay thế một cặp nucleotide. Mất đoạn hay tăng một nhiễm sắc thể là đột biến nhiễm sắc thể.',
    },
    {
      type: 'number',
      prompt:
        'Một gene có $3900$ liên kết hydrogen bị đột biến mất một cặp G – C. Gene đột biến có bao nhiêu liên kết hydrogen?',
      answer: 3897,
      hints: ['Cặp G – C có bao nhiêu liên kết hydrogen?'],
      solution: 'Cặp G – C có $3$ liên kết hydrogen nên gene đột biến có $3900 - 3 = 3897$.',
    },
    {
      type: 'number',
      prompt:
        'Một gene có $2400$ nucleotide, trong đó có $480$ nucleotide loại A. Gene bị đột biến thêm một cặp A – T. Tính số liên kết hydrogen của gene đột biến.',
      answer: 3122,
      hints: [
        'Tính $G$ của gene ban đầu: $G = \\dfrac{2400}{2} - 480$.',
        'Tính $H = 2A + 3G$ rồi cộng thêm số liên kết của cặp A – T.',
      ],
      solution:
        '$G = 1200 - 480 = 720$; $H = 2 \\cdot 480 + 3 \\cdot 720 = 3120$. Thêm cặp A – T ($2$ liên kết): $3120 + 2 = 3122$.',
    },
    {
      type: 'choice',
      prompt: 'Đột biến thay thế một cặp A – T bằng một cặp G – C làm cho gene',
      options: [
        'không đổi chiều dài, số liên kết hydrogen tăng $1$',
        'không đổi chiều dài, số liên kết hydrogen giảm $1$',
        'dài thêm $0{,}34$ nm, số liên kết hydrogen tăng $3$',
        'không đổi chiều dài và số liên kết hydrogen',
      ],
      answer: 0,
      hints: ['Thay thế không làm đổi số cặp nucleotide.', 'So sánh $2$ và $3$ liên kết hydrogen.'],
      solution:
        'Số cặp nucleotide giữ nguyên nên chiều dài không đổi; cặp A – T ($2$ liên kết) thành cặp G – C ($3$ liên kết) nên số liên kết hydrogen tăng $1$.',
    },
    {
      type: 'number',
      prompt:
        'Gene bị đột biến mất một cặp nucleotide thì chiều dài của gene giảm bao nhiêu nanomet?',
      answer: 0.34,
      tolerance: 0.001,
      unit: 'nm',
      hints: ['Mỗi cặp nucleotide dài bao nhiêu nm?'],
      solution: 'Mỗi cặp nucleotide dài $0{,}34$ nm nên gene ngắn đi $0{,}34$ nm.',
    },
    {
      type: 'choice',
      prompt:
        "Đoạn mạch mã hoá ban đầu là $5'$-ATGCATGAG-$3'$, sau đột biến là $5'$-ATGCTGAG-$3'$. Đây là dạng đột biến nào?",
      options: [
        'Mất một cặp nucleotide',
        'Thêm một cặp nucleotide',
        'Thay thế một cặp nucleotide',
        'Không phải đột biến điểm',
      ],
      answer: 0,
      hints: ['Đếm số nucleotide trước và sau đột biến.'],
      solution:
        'Ban đầu có $9$ nucleotide, sau đột biến còn $8$: nucleotide A thứ $5$ trong ATGCATGAG bị mất, đây là đột biến mất một cặp nucleotide (A – T).',
    },
    {
      type: 'choice',
      prompt:
        "Mạch mã hoá $5'$-ATGGAGAAATGGTAA-$3'$ quy định Met – Glu – Lys – Trp. Nucleotide thứ $6$ (G) bị thay bằng A. Chuỗi amino acid sẽ",
      options: [
        'không đổi, vì GAA cũng mã hoá Glu',
        'đổi Glu thành Lys',
        'ngắn lại, chỉ còn Met',
        'đổi toàn bộ các amino acid sau Met',
      ],
      answer: 0,
      hints: ['Bộ ba thứ hai trên mRNA đổi từ GAG thành gì?', 'Tra GAA trong bảng mã di truyền.'],
      solution:
        'Bộ ba GAG thành GAA; cả GAG và GAA đều mã hoá Glu, nên chuỗi amino acid vẫn là Met – Glu – Lys – Trp.',
    },
    {
      type: 'text',
      prompt:
        "Mạch mã hoá $5'$-ATGGAGAAATGGTAA-$3'$ có nucleotide thứ $11$ (G) bị thay bằng A. Viết chuỗi amino acid do gene đột biến quy định (tên viết tắt, nối bằng dấu gạch, ví dụ Met-Gly).",
      accept: ['Met-Glu-Lys', 'Met - Glu - Lys', 'Met–Glu–Lys', 'Met – Glu – Lys', 'Met Glu Lys'],
      hints: [
        'Nucleotide thứ $11$ nằm ở bộ ba thứ mấy?',
        'TGG thành TAG; trên mRNA UAG là bộ ba gì?',
      ],
      solution:
        'Bộ ba thứ $4$ TGG thành TAG, trên mRNA UAG là bộ ba kết thúc. Chuỗi amino acid còn Met – Glu – Lys.',
    },
    {
      type: 'number',
      prompt:
        'Vùng mã hoá của một mRNA, từ bộ ba mở đầu đến hết bộ ba kết thúc, có $450$ nucleotide. Một đột biến thay thế làm bộ ba thứ $61$ (tính cả bộ ba mở đầu) trở thành UAG. Chuỗi polypeptide đột biến có bao nhiêu amino acid (tính cả amino acid mở đầu)?',
      answer: 60,
      hints: [
        'Dịch mã dừng ở bộ ba kết thúc đầu tiên gặp được.',
        'Các bộ ba từ thứ $1$ đến thứ $60$ vẫn mã hoá amino acid.',
      ],
      solution:
        'Bình thường chuỗi có $450 : 3 - 1 = 149$ amino acid. Sau đột biến, dịch mã dừng ở bộ ba thứ $61$, nên chỉ còn $60$ amino acid.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tác nhân gây đột biến với nhóm tác nhân của nó.',
      left: ['Tia tử ngoại (UV)', '5-bromouracil (5-BU)', 'Một số loại virus'],
      right: ['Tác nhân vật lí', 'Tác nhân hoá học', 'Tác nhân sinh học'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Tia là bức xạ; 5-BU là một chất; virus là sinh vật.'],
      solution:
        'Tia UV là tác nhân vật lí, 5-BU là tác nhân hoá học, một số virus là tác nhân sinh học.',
    },
    {
      type: 'number',
      prompt:
        'Gene quy định nhóm máu ABO ở người có ba allele $I^A$, $I^B$, $I^O$ (xuất hiện nhờ đột biến gene). Có bao nhiêu kiểu gene khác nhau về gene này?',
      answer: 6,
      hints: ['Đếm kiểu gene đồng hợp và dị hợp.', 'Có $3$ kiểu gene đồng hợp.'],
      solution:
        'Đồng hợp: $I^AI^A$, $I^BI^B$, $I^OI^O$; dị hợp: $I^AI^B$, $I^AI^O$, $I^BI^O$. Tổng cộng $6$ kiểu gene.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng về đột biến gene.',
      options: [
        'Phần lớn đột biến gene là lặn và có hại.',
        'Đột biến gene tạo ra allele mới, làm tăng đa dạng di truyền.',
        'Đột biến gene là nguồn nguyên liệu cho chọn giống và tiến hoá.',
        'Mọi đột biến gene đều có hại cho sinh vật.',
        'Đột biến gene chỉ xảy ra khi có tác nhân từ môi trường.',
      ],
      answers: [0, 1, 2],
      hints: [
        'Có đột biến tạo ra giống lúa CM5 năng suất cao.',
        'Sai sót ngẫu nhiên khi tái bản DNA cũng gây đột biến.',
      ],
      solution:
        'Đúng: phần lớn đột biến gene lặn, có hại; chúng tạo allele mới và là nguyên liệu cho chọn giống, tiến hoá. Sai: không phải mọi đột biến đều có hại (có đột biến có lợi hoặc trung tính); đột biến còn phát sinh do sai sót ngẫu nhiên khi tái bản DNA.',
    },
  ],
  takeaways: [
    'Đột biến gene là biến đổi trong cấu trúc của gene; đột biến điểm liên quan đến một cặp nucleotide: mất, thêm hoặc thay thế một cặp nucleotide.',
    'Mất, thêm một cặp nucleotide làm gene ngắn đi hoặc dài thêm $0{,}34$ nm và làm lệch mọi bộ ba phía sau; thay thế chỉ đổi một bộ ba, không đổi chiều dài.',
    'Đột biến gene → mRNA biến đổi → protein biến đổi → có thể biến đổi tính trạng (ví dụ bệnh hồng cầu hình liềm: Glu thành Val).',
    'Nguyên nhân: sai sót ngẫu nhiên khi tái bản DNA, rối loạn sinh lí, hoá sinh trong tế bào, tác nhân vật lí, hoá học, sinh học.',
    'Phần lớn đột biến gene lặn và có hại (bạch tạng), nhưng đột biến gene tạo allele mới, là nguyên liệu cho tiến hoá và chọn giống (lúa CM5).',
  ],
};
