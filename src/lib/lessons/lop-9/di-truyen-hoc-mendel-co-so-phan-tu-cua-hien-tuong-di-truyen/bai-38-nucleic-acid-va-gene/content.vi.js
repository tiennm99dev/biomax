/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nucleic acid gồm DNA và RNA: cấu trúc xoắn kép của DNA, nguyên tắc bổ sung A – T, G – C, chức năng và tính đa dạng, đặc thù của DNA, ứng dụng phân tích DNA; cấu trúc và ba loại RNA; gene là một đoạn DNA mang thông tin quy định một sản phẩm.',
  intro:
    'Mendel gọi chúng là "nhân tố di truyền" mà không biết chúng làm bằng gì. Gần một thế kỉ sau, năm 1953, James Watson và Francis Crick công bố mô hình chuỗi xoắn kép DNA, và nhân tố di truyền của Mendel có hình hài cụ thể: gene, một đoạn của phân tử DNA. Trong bài này, em sẽ tự dựng một đoạn DNA và khám phá quy tắc ghép cặp giúp phân tử này lưu giữ thông tin di truyền.',
  objectives: [
    'Nêu được nucleic acid là đại phân tử, cấu tạo đa phân với đơn phân là nucleotide; kể được hai loại nucleic acid.',
    'Mô tả được cấu trúc không gian của DNA và nguyên tắc bổ sung; viết được mạch bổ sung của một mạch DNA cho trước.',
    'Nêu được chức năng của DNA, giải thích được tính đa dạng và đặc thù của DNA, kể được một số ứng dụng của phân tích DNA.',
    'Nêu được cấu trúc của RNA, phân biệt được mRNA, tRNA, rRNA và so sánh được DNA với RNA.',
    'Nêu được khái niệm gene.',
  ],
  sections: [
    {
      heading: 'Nucleic acid và cấu trúc của DNA',
      blocks: [
        {
          type: 'p',
          text: 'Nucleic acid là những đại phân tử sinh học có trong tế bào và virus, cấu tạo từ các nguyên tố C, H, O, N, P. Nucleic acid cấu tạo theo nguyên tắc đa phân, đơn phân là nucleotide. Mỗi nucleotide gồm ba thành phần: một nhóm phosphate, một phân tử đường năm carbon (pentose) và một nitrogenous base. Có hai loại nucleic acid: DNA (deoxyribonucleic acid) và RNA (ribonucleic acid).',
        },
        {
          type: 'p',
          text: 'DNA là phân tử rất lớn: dài tới hàng trăm micromet, khối lượng hàng triệu, hàng chục triệu amu. DNA có bốn loại nucleotide, khác nhau ở nitrogenous base: adenine (A), thymine (T), guanine (G) và cytosine (C).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mô hình chuỗi xoắn kép (Watson và Crick, 1953)',
          text: "DNA gồm hai mạch polynucleotide song song, ngược chiều nhau, xoắn quanh một trục theo chiều từ trái sang phải. Trên mỗi mạch, các nucleotide liên kết với nhau bằng liên kết cộng hoá trị theo chiều $5' \\to 3'$. Giữa hai mạch, các nitrogenous base liên kết với nhau bằng liên kết hydrogen theo nguyên tắc bổ sung. Mỗi chu kì xoắn dài $3{,}4$ nm ($34$ Å) gồm $10$ cặp nucleotide; đường kính vòng xoắn là $2$ nm ($20$ Å).",
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc bổ sung',
          text: 'A của mạch này liên kết với T của mạch kia bằng $2$ liên kết hydrogen; G liên kết với C bằng $3$ liên kết hydrogen (và ngược lại). Vì vậy, biết trình tự nucleotide của một mạch thì suy ra được trình tự của mạch còn lại.',
        },
        {
          type: 'p',
          text: 'Hệ quả của nguyên tắc bổ sung: trong một phân tử DNA, số nucleotide loại A bằng số nucleotide loại T, số G bằng số C. Gọi $N$ là tổng số nucleotide, ta có:',
        },
        {
          type: 'tex',
          tex: 'A = T,\\quad G = C,\\quad A + G = T + C = \\frac{N}{2}',
        },
        {
          type: 'p',
          text: 'Từ đó tính được số liên kết hydrogen $H = 2A + 3G$ và chiều dài của đoạn DNA $L = \\dfrac{N}{2} \\cdot 0{,}34$ nm (mỗi cặp nucleotide dài $0{,}34$ nm).',
        },
      ],
    },
    {
      heading: 'Chức năng, tính đa dạng và đặc thù của DNA',
      blocks: [
        {
          type: 'list',
          items: [
            'Lưu giữ thông tin di truyền: trình tự các nucleotide trên DNA quy định trình tự các amino acid của protein. Phân tử DNA rất lớn nên chứa được lượng thông tin khổng lồ.',
            'Bảo quản thông tin di truyền: các liên kết cộng hoá trị trên mỗi mạch rất bền; số lượng rất lớn liên kết hydrogen giữa hai mạch giữ cho cấu trúc ổn định, nhưng vẫn có thể tách hai mạch khi cần sao chép.',
            'Truyền đạt thông tin di truyền: DNA có khả năng tự nhân đôi (tái bản), nhờ đó thông tin di truyền được truyền qua các thế hệ tế bào và cơ thể.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đa dạng và đặc thù',
          text: 'Chỉ với bốn loại nucleotide, nhưng do khác nhau về số lượng, thành phần và trình tự sắp xếp các nucleotide, DNA vô cùng đa dạng. Mỗi loài, thậm chí mỗi cá thể, có DNA với trình tự đặc thù.',
        },
        {
          type: 'p',
          text: 'Nhờ tính đặc thù, người ta có thể phân tích và so sánh DNA. Ứng dụng: xác định quan hệ huyết thống (cha – con), nhận dạng nạn nhân, truy tìm tội phạm từ các mẫu máu, tóc để lại; chẩn đoán, dự báo nguy cơ mắc bệnh di truyền; so sánh mức độ giống nhau về DNA giữa các loài để tìm hiểu quan hệ họ hàng.',
        },
      ],
    },
    {
      heading: 'RNA',
      blocks: [
        {
          type: 'p',
          text: 'RNA thường có cấu trúc một mạch polynucleotide, kích thước nhỏ hơn DNA nhiều (hàng trăm đến hàng nghìn nucleotide). Đơn phân của RNA là bốn loại ribonucleotide với các base A, U (uracil), G, C: RNA có U thay cho T. RNA được tổng hợp trong nhân tế bào (hoặc vùng nhân) và phần lớn hoạt động ở tế bào chất.',
        },
        {
          type: 'table',
          caption: 'Ba loại RNA',
          head: ['Loại RNA', 'Cấu trúc', 'Chức năng'],
          rows: [
            [
              'mRNA (RNA thông tin)',
              'Một mạch thẳng, không có đoạn liên kết bổ sung',
              'Làm khuôn cho tổng hợp chuỗi polypeptide',
            ],
            [
              'tRNA (RNA vận chuyển)',
              'Có những đoạn tự liên kết bổ sung, tạo cấu trúc ba thuỳ',
              'Vận chuyển amino acid đến ribosome',
            ],
            [
              'rRNA (RNA ribosome)',
              'Có nhiều đoạn tự liên kết bổ sung',
              'Cùng protein cấu tạo nên ribosome, nơi tổng hợp chuỗi polypeptide',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'So sánh DNA và RNA',
          head: ['Đặc điểm', 'DNA', 'RNA'],
          rows: [
            ['Số mạch', 'Thường hai mạch', 'Thường một mạch'],
            [
              'Đường pentose',
              'Deoxyribose $\\mathrm{C_5H_{10}O_4}$',
              'Ribose $\\mathrm{C_5H_{10}O_5}$',
            ],
            ['Các loại base', 'A, T, G, C', 'A, U, G, C'],
            ['Kích thước', 'Rất lớn', 'Nhỏ hơn nhiều'],
            [
              'Chức năng',
              'Lưu giữ, bảo quản, truyền đạt thông tin di truyền',
              'Truyền đạt thông tin, vận chuyển amino acid, cấu tạo ribosome',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Gene',
          text: 'Gene là một đoạn của phân tử DNA mang thông tin quy định một sản phẩm nhất định: một phân tử RNA hoặc một chuỗi polypeptide.',
        },
        {
          type: 'p',
          text: 'Mỗi tế bào chứa rất nhiều gene; mỗi phân tử DNA chứa từ vài trăm đến vài nghìn gene. Một gene điển hình dài khoảng $600$ đến $1\\,500$ cặp nucleotide với trình tự xác định. Nhân tố di truyền mà Mendel nói tới chính là gene; hiểu biết về gene là cơ sở cho chọn giống, y học và công nghệ di truyền.',
        },
      ],
    },
  ],
  explore: {
    title: 'Dựng chuỗi xoắn kép DNA',
    instruction:
      'Gõ hoặc bấm các nucleotide để tạo mạch 1; mạch 2 tự hiện ra theo nguyên tắc bổ sung, kèm số nucleotide mỗi loại, số liên kết hydrogen và chiều dài. Ở chế độ "Tự ghép cặp", em tự chọn nucleotide cho mạch 2.',
  },
  examples: [
    {
      problem: "Một mạch của đoạn DNA có trình tự $5'$-AGCTTAGC-$3'$. Viết trình tự mạch bổ sung.",
      steps: [
        'Áp dụng nguyên tắc bổ sung với từng nucleotide: A – T, G – C, C – G, T – A.',
        'A → T, G → C, C → G, T → A, T → A, A → T, G → C, C → G.',
        "Hai mạch ngược chiều, nên mạch bổ sung viết dưới mạch đã cho có chiều $3' \\to 5'$.",
      ],
      answer: "Mạch bổ sung: $3'$-TCGAATCG-$5'$.",
    },
    {
      problem:
        'Một gene có tổng số $2400$ nucleotide, trong đó có $480$ nucleotide loại A. Tính số nucleotide mỗi loại, số liên kết hydrogen và chiều dài của gene.',
      steps: [
        'Theo nguyên tắc bổ sung: $T = A = 480$.',
        '$A + G = \\dfrac{N}{2} = 1200$, nên $G = C = 1200 - 480 = 720$.',
        'Số liên kết hydrogen: $H = 2A + 3G = 2 \\cdot 480 + 3 \\cdot 720 = 960 + 2160 = 3120$.',
        'Chiều dài: $L = \\dfrac{2400}{2} \\cdot 0{,}34 = 1200 \\cdot 0{,}34 = 408$ nm.',
      ],
      answer: '$A = T = 480$, $G = C = 720$; $3120$ liên kết hydrogen; dài $408$ nm.',
    },
    {
      problem:
        'Vì sao chỉ với bốn loại nucleotide mà DNA lại vô cùng đa dạng? Một đoạn mạch dài $10$ nucleotide có thể có bao nhiêu trình tự khác nhau?',
      steps: [
        'Mỗi vị trí trên mạch có thể là một trong bốn loại nucleotide A, T, G, C.',
        'Đoạn dài $10$ nucleotide có $4 \\cdot 4 \\cdot \\ldots \\cdot 4 = 4^{10} = 1\\,048\\,576$ trình tự.',
        'DNA thật dài hàng triệu nucleotide, lại khác nhau về số lượng và thành phần, nên số khả năng là khổng lồ.',
      ],
      answer:
        'DNA đa dạng nhờ khác nhau về số lượng, thành phần và trình tự nucleotide; chỉ $10$ nucleotide đã cho $4^{10} = 1\\,048\\,576$ trình tự.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đơn phân cấu tạo nên phân tử DNA là',
      options: ['amino acid', 'nucleotide', 'glucose', 'acid béo'],
      answer: 1,
      hints: ['Nucleic acid được cấu tạo từ những đơn phân mang cùng "gốc" tên.'],
      solution:
        'DNA cấu tạo theo nguyên tắc đa phân, đơn phân là nucleotide (A, T, G, C). Amino acid là đơn phân của protein.',
    },
    {
      type: 'text',
      prompt:
        "Một mạch DNA có trình tự $5'$-ATGCTAC-$3'$. Viết trình tự mạch bổ sung theo chiều $3' \\to 5'$ (chỉ ghi các chữ cái, ví dụ TACG).",
      accept: ['TACGATG'],
      hints: [
        'A ghép với T, G ghép với C.',
        'Viết lần lượt nucleotide bổ sung với từng chữ của mạch đã cho.',
      ],
      solution: "A → T, T → A, G → C, C → G, T → A, A → T, C → G: mạch bổ sung $3'$-TACGATG-$5'$.",
    },
    {
      type: 'number',
      prompt:
        'Một phân tử DNA có $20\\%$ nucleotide loại A. Nucleotide loại G chiếm bao nhiêu phần trăm?',
      answer: 30,
      unit: '%',
      hints: ['$A = T$ nên A và T cùng chiếm $40\\%$.', 'G và C chia đều phần còn lại.'],
      solution:
        '$\\%A = \\%T = 20\\%$; $\\%G = \\%C = \\dfrac{100\\% - 40\\%}{2} = 30\\%$ (hay $\\%A + \\%G = 50\\%$).',
    },
    {
      type: 'number',
      prompt:
        'Một gene có $3000$ nucleotide, trong đó có $600$ nucleotide loại A. Gene này có bao nhiêu liên kết hydrogen?',
      answer: 3900,
      hints: ['Tính $G = \\dfrac{N}{2} - A$.', 'Dùng $H = 2A + 3G$.'],
      solution:
        '$G = 1500 - 600 = 900$; $H = 2 \\cdot 600 + 3 \\cdot 900 = 1200 + 2700 = 3900$ liên kết hydrogen.',
    },
    {
      type: 'number',
      prompt: 'Một gene có $3000$ nucleotide. Chiều dài của gene là bao nhiêu nanomet?',
      answer: 510,
      unit: 'nm',
      hints: ['Gene gồm $\\dfrac{3000}{2}$ cặp nucleotide.', 'Mỗi cặp dài $0{,}34$ nm.'],
      solution: '$L = \\dfrac{3000}{2} \\cdot 0{,}34 = 1500 \\cdot 0{,}34 = 510$ nm.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm của RNA mà DNA không có.',
      options: [
        'Có base uracil (U)',
        'Thường có cấu trúc một mạch',
        'Có base thymine (T)',
        'Đường pentose là ribose',
        'Gồm hai mạch xoắn kép',
      ],
      answers: [0, 1, 3],
      hints: ['So sánh số mạch, loại đường và các loại base của hai nucleic acid.'],
      solution:
        'RNA có U thay cho T, thường một mạch và có đường ribose. Thymine và cấu trúc hai mạch xoắn kép là đặc điểm của DNA.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loại RNA với chức năng của nó.',
      left: ['mRNA', 'tRNA', 'rRNA'],
      right: [
        'Vận chuyển amino acid đến ribosome',
        'Cùng protein cấu tạo nên ribosome',
        'Làm khuôn cho tổng hợp chuỗi polypeptide',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: [
        'Chữ cái đầu gợi ý: m – thông tin (messenger), t – vận chuyển (transfer), r – ribosome.',
      ],
      solution:
        'mRNA làm khuôn tổng hợp chuỗi polypeptide; tRNA vận chuyển amino acid; rRNA cùng protein tạo nên ribosome.',
    },
    {
      type: 'choice',
      prompt: 'Gene là',
      options: [
        'một đoạn của phân tử DNA mang thông tin quy định một sản phẩm (RNA hoặc chuỗi polypeptide)',
        'một phân tử protein quy định tính trạng',
        'toàn bộ phân tử DNA trong nhân tế bào',
        'một nucleotide trên mạch DNA',
      ],
      answer: 0,
      hints: ['Một phân tử DNA chứa từ vài trăm đến vài nghìn gene.'],
      solution:
        'Gene là một đoạn DNA mang thông tin quy định một sản phẩm nhất định là RNA hoặc chuỗi polypeptide.',
    },
    {
      type: 'choice',
      prompt: 'Có thể dùng phân tích DNA để xác định quan hệ huyết thống là nhờ',
      options: [
        'DNA của mọi người hoàn toàn giống nhau',
        'trình tự nucleotide của DNA đặc thù cho từng cá thể và được di truyền từ bố mẹ',
        'DNA chỉ có ở tế bào máu',
        'DNA có cấu trúc một mạch',
      ],
      answer: 1,
      hints: ['Hãy nghĩ tới tính đặc thù của DNA và việc con nhận DNA từ bố mẹ.'],
      solution:
        'Mỗi cá thể có trình tự DNA đặc thù, con nhận một nửa vật chất di truyền từ bố và một nửa từ mẹ; so sánh DNA cho biết mức độ giống nhau để xác định huyết thống.',
    },
  ],
  takeaways: [
    'Nucleic acid (DNA, RNA) là đại phân tử cấu tạo đa phân, đơn phân là nucleotide gồm nhóm phosphate, đường pentose và nitrogenous base.',
    'DNA là chuỗi xoắn kép gồm hai mạch ngược chiều; mỗi chu kì xoắn $3{,}4$ nm gồm $10$ cặp nucleotide, đường kính $2$ nm.',
    'Nguyên tắc bổ sung: A – T ($2$ liên kết hydrogen), G – C ($3$ liên kết hydrogen); do đó $A = T$, $G = C$, $A + G = \\dfrac{N}{2}$.',
    'DNA lưu giữ, bảo quản và truyền đạt thông tin di truyền; DNA đa dạng và đặc thù nên được dùng để xác định huyết thống, truy tìm tội phạm, chẩn đoán bệnh.',
    'RNA thường một mạch, có U thay T, đường ribose; gồm mRNA, tRNA, rRNA.',
    'Gene là một đoạn DNA mang thông tin quy định một sản phẩm (RNA hoặc chuỗi polypeptide).',
  ],
};
