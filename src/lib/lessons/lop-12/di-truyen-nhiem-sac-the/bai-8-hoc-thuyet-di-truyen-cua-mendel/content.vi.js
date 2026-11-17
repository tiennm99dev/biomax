/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Phương pháp nghiên cứu di truyền của Mendel, thí nghiệm lai một và hai cặp tính trạng ở đậu Hà Lan, quy luật phân li, quy luật phân li độc lập, cơ sở tế bào học và ý nghĩa của các quy luật.',
  intro:
    'Hơn $150$ năm trước, khi chưa ai biết đến DNA hay nhiễm sắc thể, Gregor Mendel chỉ với những cây đậu trong vườn tu viện đã phát hiện ra cách các tính trạng được truyền từ bố mẹ sang con. Ông đã làm thế nào, và vì sao tỉ lệ $9 : 3 : 3 : 1$ lại nổi tiếng đến vậy?',
  objectives: [
    'Trình bày được phương pháp nghiên cứu di truyền của Mendel (phương pháp lai và phân tích con lai).',
    'Phát biểu và giải thích được quy luật phân li và quy luật phân li độc lập.',
    'Nêu được cơ sở tế bào học của các quy luật di truyền Mendel.',
    'Vận dụng bảng Punnett và quy tắc nhân xác suất để dự đoán kết quả phép lai.',
  ],
  sections: [
    {
      heading: 'Phương pháp nghiên cứu của Mendel',
      blocks: [
        {
          type: 'p',
          text: 'Mendel chọn đậu Hà Lan vì cây tự thụ phấn nghiêm ngặt nên dễ tạo dòng thuần, có nhiều tính trạng tương phản dễ quan sát (hạt vàng – hạt xanh, hạt trơn – hạt nhăn, hoa tím – hoa trắng…), vòng đời ngắn và cho nhiều hạt.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tạo các dòng thuần chủng về từng tính trạng bằng cách cho cây tự thụ phấn qua nhiều thế hệ.',
            'Lai các dòng thuần chủng khác nhau về một hoặc nhiều cặp tính trạng tương phản, theo dõi sự di truyền ở đời con $F_1$, $F_2$, $F_3$.',
            'Dùng thống kê và xác suất để phân tích kết quả lai, từ đó đưa ra giả thuyết giải thích.',
            'Tiến hành thí nghiệm chứng minh giả thuyết (cho $F_2$ tự thụ phấn, lai phân tích).',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lai phân tích',
          text: 'Lai phân tích là phép lai giữa cá thể mang tính trạng trội cần xác định kiểu gene với cá thể mang tính trạng lặn. Nếu đời con đồng tính thì cá thể trội đồng hợp ($AA$); nếu đời con phân tính $1 : 1$ thì cá thể trội dị hợp ($Aa$).',
        },
      ],
    },
    {
      heading: 'Quy luật phân li',
      blocks: [
        {
          type: 'p',
          text: 'Mendel lai cây hoa tím thuần chủng với cây hoa trắng thuần chủng: $F_1$ toàn hoa tím; cho $F_1$ tự thụ phấn, $F_2$ có $705$ cây hoa tím và $224$ cây hoa trắng, xấp xỉ $3 : 1$. Cho các cây $F_2$ tự thụ phấn: cây hoa trắng cho đời con toàn hoa trắng; trong số cây hoa tím, $\\frac{1}{3}$ cho đời con toàn hoa tím, $\\frac{2}{3}$ cho đời con phân li $3$ tím $: 1$ trắng.',
        },
        {
          type: 'p',
          text: 'Giải thích của Mendel: mỗi tính trạng do một cặp nhân tố di truyền (ngày nay gọi là cặp allele) quy định; trong tế bào, các nhân tố tồn tại riêng rẽ, không hoà trộn; khi tạo giao tử, mỗi giao tử chỉ nhận một nhân tố của cặp; khi thụ tinh, các giao tử kết hợp ngẫu nhiên.',
        },
        {
          type: 'tex',
          tex: 'P_{t/c}: AA \\times aa \\;\\Rightarrow\\; F_1: Aa \\;\\Rightarrow\\; F_2: 1\\,AA : 2\\,Aa : 1\\,aa \\;(3 \\text{ tím} : 1 \\text{ trắng})',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy luật phân li',
          text: 'Mỗi tính trạng do một cặp allele quy định, một allele có nguồn gốc từ bố, một từ mẹ. Khi giảm phân tạo giao tử, hai allele của cặp phân li đồng đều về các giao tử, nên $50\\%$ số giao tử chứa allele này và $50\\%$ chứa allele kia.',
        },
        {
          type: 'p',
          text: 'Cơ sở tế bào học: trong tế bào lưỡng bội, NST tồn tại thành từng cặp tương đồng và gene nằm trên NST thành từng cặp allele. Khi giảm phân, hai NST của cặp tương đồng phân li về hai giao tử, kéo theo sự phân li của cặp allele trên đó.',
        },
      ],
    },
    {
      heading: 'Quy luật phân li độc lập',
      blocks: [
        {
          type: 'p',
          text: 'Mendel lai cây hạt vàng, trơn thuần chủng với cây hạt xanh, nhăn thuần chủng: $F_1$ toàn hạt vàng, trơn. Cho $F_1$ tự thụ phấn, $F_2$ thu được:',
        },
        {
          type: 'table',
          caption: 'Kết quả $F_2$ của Mendel',
          head: ['Kiểu hình', 'Số hạt', 'Tỉ lệ gần đúng'],
          rows: [
            ['Vàng, trơn', '$315$', '$9$'],
            ['Vàng, nhăn', '$101$', '$3$'],
            ['Xanh, trơn', '$108$', '$3$'],
            ['Xanh, nhăn', '$32$', '$1$'],
          ],
        },
        {
          type: 'p',
          text: 'Xét riêng từng cặp tính trạng: vàng $:$ xanh $= 416 : 140 \\approx 3 : 1$; trơn $:$ nhăn $= 423 : 133 \\approx 3 : 1$. Tỉ lệ $F_2$ bằng tích tỉ lệ của từng cặp: $(3 : 1)(3 : 1) = 9 : 3 : 3 : 1$, chứng tỏ hai cặp tính trạng di truyền độc lập với nhau.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy luật phân li độc lập',
          text: 'Các cặp allele quy định các tính trạng khác nhau nằm trên các cặp NST tương đồng khác nhau thì phân li độc lập với nhau trong quá trình hình thành giao tử.',
        },
        {
          type: 'p',
          text: 'Cơ sở tế bào học: ở kì giữa I của giảm phân, các cặp NST tương đồng xếp trên mặt phẳng xích đạo theo những cách khác nhau một cách ngẫu nhiên, nên các cặp allele trên chúng phân li độc lập và tổ hợp tự do. $F_1$ $AaBb$ cho $4$ loại giao tử $AB$, $Ab$, $aB$, $ab$ với tỉ lệ bằng nhau; $4 \\times 4 = 16$ tổ hợp giao tử tạo $9$ kiểu gene và $4$ kiểu hình.',
        },
        {
          type: 'table',
          caption: 'Cơ thể dị hợp $n$ cặp gene phân li độc lập (trội hoàn toàn) tự thụ phấn',
          head: ['Số loại giao tử', 'Số kiểu gene ở đời con', 'Số kiểu hình', 'Tỉ lệ kiểu hình'],
          rows: [['$2^n$', '$3^n$', '$2^n$', '$(3 : 1)^n$']],
        },
        { type: 'widget', name: 'xac-suat' },
      ],
    },
    {
      heading: 'Ý nghĩa của học thuyết Mendel',
      blocks: [
        {
          type: 'list',
          items: [
            'Chứng minh tính trạng được di truyền nhờ các nhân tố di truyền riêng rẽ (gene), đặt nền móng cho di truyền học.',
            'Quy luật phân li độc lập giải thích sự xuất hiện biến dị tổ hợp phong phú ở các loài sinh sản hữu tính, là nguồn nguyên liệu cho tiến hoá và chọn giống.',
            'Biết các gene phân li độc lập, có thể dự đoán kết quả lai, chủ động tổ hợp các tính trạng tốt của bố mẹ vào một giống.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Tô bảng Punnett hai cặp tính trạng',
    instruction:
      'Chọn một loại hạt ở bảng màu rồi chạm vào các ô có kiểu gene cho kiểu hình đó. Tô đủ $16$ ô của phép lai $F_1 \\times F_1$ để tự đếm ra tỉ lệ $9 : 3 : 3 : 1$, rồi thử lai phân tích và phép lai $AaBb \\times Aabb$.',
  },
  examples: [
    {
      problem:
        'Ở đậu Hà Lan, allele $A$ (hoa tím) trội hoàn toàn so với $a$ (hoa trắng). Cho hai cây $Aa$ giao phấn. Xác định tỉ lệ kiểu gene, kiểu hình ở đời con và tỉ lệ cây thuần chủng trong số cây hoa tím.',
      steps: [
        'Mỗi cây $Aa$ cho hai loại giao tử $\\frac{1}{2} A$ và $\\frac{1}{2} a$.',
        'Đời con: $\\frac{1}{4} AA : \\frac{2}{4} Aa : \\frac{1}{4} aa$, tức $1 : 2 : 1$.',
        'Kiểu hình: $3$ hoa tím ($AA$, $Aa$) $: 1$ hoa trắng ($aa$).',
        'Trong số cây hoa tím, cây thuần chủng $AA$ chiếm $\\frac{1}{3}$.',
      ],
      answer:
        'Kiểu gene $1 AA : 2 Aa : 1 aa$; kiểu hình $3$ tím $: 1$ trắng; $\\frac{1}{3}$ số cây hoa tím thuần chủng.',
    },
    {
      problem:
        'Cho cây có kiểu gene $AaBbDd$ tự thụ phấn; ba cặp gene phân li độc lập, mỗi gene quy định một tính trạng, trội hoàn toàn. Tính số loại giao tử của cây và tỉ lệ đời con có kiểu hình trội về hai tính trạng $A$, $B$ và lặn về tính trạng $D$ ($A\\text{-}B\\text{-}dd$).',
      steps: [
        'Số loại giao tử: $2^3 = 8$.',
        'Xét riêng từng cặp: $Aa \\times Aa$ cho $\\frac{3}{4} A\\text{-}$; $Bb \\times Bb$ cho $\\frac{3}{4} B\\text{-}$; $Dd \\times Dd$ cho $\\frac{1}{4} dd$.',
        'Các cặp độc lập nên nhân xác suất: $\\frac{3}{4} \\cdot \\frac{3}{4} \\cdot \\frac{1}{4} = \\frac{9}{64}$.',
      ],
      answer: '$8$ loại giao tử; tỉ lệ $A\\text{-}B\\text{-}dd$ là $\\frac{9}{64}$.',
    },
  ],
  practice: [
    {
      type: 'fraction',
      prompt:
        'Phép lai $AaBb \\times AaBb$ (hai gene phân li độc lập). Tỉ lệ đời con có kiểu gene $AAbb$ là bao nhiêu?',
      answer: [1, 16],
      hints: ['Tính riêng tỉ lệ $AA$ và tỉ lệ $bb$ rồi nhân lại.'],
      solution:
        '$AA = \\frac{1}{4}$, $bb = \\frac{1}{4}$, nên $AAbb = \\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{1}{16}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Ở $F_2$ của phép lai hạt vàng, trơn × hạt xanh, nhăn (P thuần chủng), trong số hạt vàng, trơn thì hạt thuần chủng ($AABB$) chiếm tỉ lệ bao nhiêu?',
      answer: [1, 9],
      hints: [
        'Có $9$ tổ hợp vàng, trơn trong $16$ tổ hợp.',
        'Đếm xem trong $9$ tổ hợp đó có mấy tổ hợp $AABB$.',
      ],
      solution:
        'Vàng, trơn chiếm $\\frac{9}{16}$, trong đó $AABB$ chiếm $\\frac{1}{16}$. Tỉ lệ cần tìm: $\\frac{1}{16} : \\frac{9}{16} = \\frac{1}{9}$.',
    },
    {
      type: 'number',
      prompt:
        'Cơ thể có kiểu gene $AaBbDd$ (ba cặp gene phân li độc lập) cho tối đa bao nhiêu loại giao tử?',
      answer: 8,
      hints: ['Mỗi cặp gene dị hợp cho $2$ loại giao tử.'],
      solution: 'Số loại giao tử $= 2^3 = 8$.',
    },
    {
      type: 'number',
      prompt:
        'Phép lai $AaBbDd \\times AaBbDd$ (ba cặp gene phân li độc lập) cho đời con có bao nhiêu kiểu gene?',
      answer: 27,
      hints: ['Mỗi phép lai $Aa \\times Aa$ cho $3$ kiểu gene.'],
      solution: 'Số kiểu gene $= 3 \\cdot 3 \\cdot 3 = 3^3 = 27$.',
    },
    {
      type: 'fraction',
      prompt:
        'Phép lai phân tích $AaBb \\times aabb$ (hai gene phân li độc lập). Tỉ lệ đời con có hạt xanh, nhăn ($aabb$) là bao nhiêu?',
      answer: [1, 4],
      hints: ['Cây $aabb$ chỉ cho một loại giao tử $ab$.'],
      solution:
        'Cây $AaBb$ cho $4$ loại giao tử bằng nhau, trong đó giao tử $ab$ chiếm $\\frac{1}{4}$; gặp giao tử $ab$ tạo $aabb$. Tỉ lệ $\\frac{1}{4}$.',
    },
    {
      type: 'choice',
      prompt:
        'Cây đậu hoa tím (tính trạng trội) lai với cây hoa trắng, đời con có $48$ cây hoa tím và $51$ cây hoa trắng. Kiểu gene của cây hoa tím là',
      options: ['$Aa$', '$AA$', '$aa$', 'Không xác định được'],
      answer: 0,
      hints: ['Đây là phép lai phân tích; đời con phân tính xấp xỉ $1 : 1$.'],
      solution:
        'Đời con có cả hoa trắng $aa$ nên cây hoa tím phải cho giao tử $a$, tỉ lệ $\\approx 1 : 1$ chứng tỏ cây hoa tím dị hợp $Aa$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước trong phương pháp nghiên cứu của Mendel.',
      items: [
        'Dùng thống kê, xác suất phân tích kết quả, đưa ra giả thuyết',
        'Tạo các dòng thuần chủng',
        'Làm thí nghiệm chứng minh giả thuyết',
        'Lai các dòng thuần chủng khác nhau về tính trạng, theo dõi $F_1$, $F_2$, $F_3$',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Phải có dòng thuần trước khi lai.'],
      solution:
        'Tạo dòng thuần → lai và theo dõi các thế hệ → phân tích bằng thống kê, đưa ra giả thuyết → thí nghiệm chứng minh.',
    },
    {
      type: 'choice',
      prompt: 'Cơ sở tế bào học của quy luật phân li độc lập là',
      options: [
        'sự phân li độc lập và tổ hợp tự do của các cặp NST tương đồng trong giảm phân',
        'sự nhân đôi của NST ở kì trung gian',
        'sự trao đổi chéo giữa hai chromatid của cặp NST tương đồng',
        'sự phân li của hai chromatid chị em trong nguyên phân',
      ],
      answer: 0,
      hints: ['Các gene phải nằm trên các cặp NST khác nhau.'],
      solution:
        'Các cặp allele nằm trên các cặp NST tương đồng khác nhau; trong giảm phân các cặp NST này phân li độc lập và tổ hợp tự do, kéo theo các cặp allele.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các đặc điểm giúp đậu Hà Lan là đối tượng thuận lợi cho thí nghiệm của Mendel.',
      options: [
        'Tự thụ phấn nghiêm ngặt, dễ tạo dòng thuần',
        'Có nhiều cặp tính trạng tương phản dễ quan sát',
        'Vòng đời ngắn, cho nhiều hạt',
        'Bộ NST có rất nhiều NST',
      ],
      answers: [0, 1, 2],
      hints: ['Số NST không giúp gì cho việc theo dõi tính trạng.'],
      solution:
        'Đậu Hà Lan tự thụ phấn nghiêm ngặt, có nhiều tính trạng tương phản, vòng đời ngắn và nhiều hạt. Bộ NST của đậu Hà Lan chỉ có $2n = 14$.',
    },
  ],
  takeaways: [
    'Phương pháp lai và phân tích con lai: tạo dòng thuần → lai → phân tích bằng thống kê → giả thuyết → kiểm chứng.',
    'Quy luật phân li: hai allele của một cặp phân li đồng đều về các giao tử; $F_2$ có $1 AA : 2 Aa : 1 aa$, $3$ trội $: 1$ lặn.',
    'Quy luật phân li độc lập: các cặp allele trên các cặp NST tương đồng khác nhau phân li độc lập khi tạo giao tử; $F_2$ có $9 : 3 : 3 : 1 = (3 : 1)^2$.',
    'Dị hợp $n$ cặp gene độc lập tự thụ: $2^n$ loại giao tử, $3^n$ kiểu gene, $2^n$ kiểu hình.',
    'Lai phân tích (với cá thể lặn) cho biết cá thể trội đồng hợp hay dị hợp.',
  ],
};
