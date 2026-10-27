/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thí nghiệm lai một cặp và hai cặp tính trạng của Mendel trên đậu Hà Lan, quy luật phân li, quy luật phân li độc lập, sơ đồ lai, bảng Punnett và phép lai phân tích.',
  intro:
    'Lai hai giống đậu hạt vàng và hạt xanh thuần chủng, Mendel thu được toàn hạt vàng; nhưng gieo tiếp các hạt ấy, hạt xanh lại xuất hiện, đúng khoảng một phần tư. Vì sao tính trạng đã "biến mất" lại quay về, và vì sao lại là một phần tư? Câu trả lời là hai quy luật di truyền nổi tiếng nhất mà Mendel công bố năm 1866.',
  objectives: [
    'Trình bày được thí nghiệm lai một cặp tính trạng của Mendel và giải thích kết quả bằng sự phân li của cặp allele.',
    'Phát biểu được nội dung quy luật phân li; viết được sơ đồ lai và lập được bảng Punnett.',
    'Nêu được khái niệm, mục đích và cách đọc kết quả của phép lai phân tích.',
    'Trình bày được thí nghiệm lai hai cặp tính trạng, phát biểu được quy luật phân li độc lập và giải thích tỉ lệ $9 : 3 : 3 : 1$.',
  ],
  sections: [
    {
      heading: 'Thí nghiệm lai một cặp tính trạng và quy luật phân li',
      blocks: [
        {
          type: 'p',
          text: 'Mendel lai các cây đậu Hà Lan thuần chủng khác nhau về một cặp tính trạng tương phản, rồi cho $F_1$ tự thụ phấn. Với mọi cặp tính trạng, kết quả giống nhau: $F_1$ đồng tính, chỉ mang tính trạng của một bên bố hoặc mẹ; $F_2$ phân tính theo tỉ lệ xấp xỉ $3$ trội $: 1$ lặn.',
        },
        {
          type: 'table',
          caption: 'Một số kết quả lai một cặp tính trạng của Mendel',
          head: ['$P$ thuần chủng', '$F_1$', '$F_2$', 'Tỉ lệ $F_2$'],
          rows: [
            [
              'Hạt vàng × hạt xanh',
              'Hạt vàng',
              '$6022$ vàng, $2001$ xanh',
              '$\\approx 3{,}01 : 1$',
            ],
            [
              'Hạt trơn × hạt nhăn',
              'Hạt trơn',
              '$5474$ trơn, $1850$ nhăn',
              '$\\approx 2{,}96 : 1$',
            ],
            ['Hoa tím × hoa trắng', 'Hoa tím', '$705$ tím, $224$ trắng', '$\\approx 3{,}15 : 1$'],
            ['Thân cao × thân thấp', 'Thân cao', '$787$ cao, $277$ thấp', '$\\approx 2{,}84 : 1$'],
          ],
        },
        {
          type: 'p',
          text: 'Giải thích: quy ước allele $A$ quy định hạt vàng, trội hoàn toàn so với allele $a$ quy định hạt xanh. Mỗi tính trạng do một cặp allele quy định, một allele nhận từ bố, một từ mẹ; hai allele tồn tại riêng rẽ, không hoà trộn. Khi giảm phân tạo giao tử, hai allele của cặp phân li, mỗi giao tử chỉ nhận một allele. Thụ tinh kết hợp ngẫu nhiên các giao tử.',
        },
        {
          type: 'tex',
          tex: '\\begin{aligned} P_{t/c}&:\\ AA \\times aa \\\\ G_P&:\\ A \\qquad\\ \\ a \\\\ F_1&:\\ Aa \\\\ F_1 \\times F_1&:\\ Aa \\times Aa \\\\ G_{F_1}&:\\ \\tfrac{1}{2}A, \\tfrac{1}{2}a \\qquad \\tfrac{1}{2}A, \\tfrac{1}{2}a \\\\ F_2&:\\ 1\\,AA : 2\\,Aa : 1\\,aa \\end{aligned}',
        },
        {
          type: 'p',
          text: 'Ở $F_2$, tỉ lệ kiểu gene là $1\\,AA : 2\\,Aa : 1\\,aa$. Vì $AA$ và $Aa$ đều cho hạt vàng, tỉ lệ kiểu hình là $3$ hạt vàng $: 1$ hạt xanh. Bảng Punnett trình bày cùng kết quả đó: giao tử của mẹ ghi theo hàng, giao tử của bố ghi theo cột, mỗi ô là một tổ hợp ở đời con.',
        },
        {
          type: 'table',
          caption: 'Bảng Punnett của phép lai $F_1 \\times F_1$: $Aa \\times Aa$',
          head: ['♀ \\ ♂', '$A$', '$a$'],
          rows: [
            ['$A$', '$AA$ (vàng)', '$Aa$ (vàng)'],
            ['$a$', '$Aa$ (vàng)', '$aa$ (xanh)'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy luật phân li',
          text: 'Mỗi tính trạng do một cặp nhân tố di truyền (cặp allele) quy định. Trong quá trình phát sinh giao tử, các allele trong cặp phân li đồng đều về các giao tử, nên mỗi giao tử chỉ chứa một allele của cặp.',
        },
      ],
    },
    {
      heading: 'Phép lai phân tích',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lai phân tích',
          text: 'Lai phân tích là phép lai giữa cá thể mang tính trạng trội cần xác định kiểu gene với cá thể mang tính trạng lặn. Mục đích: xác định kiểu gene của cá thể mang tính trạng trội.',
        },
        {
          type: 'p',
          text: 'Cá thể lặn $aa$ chỉ cho một loại giao tử $a$, nên kiểu hình đời con phản ánh đúng các loại giao tử của cá thể cần kiểm tra:',
        },
        {
          type: 'list',
          items: [
            'Nếu đời con đồng tính (toàn trội): cá thể cần kiểm tra chỉ cho giao tử $A$, có kiểu gene đồng hợp $AA$. Sơ đồ: $AA \\times aa \\to 100\\%\\ Aa$.',
            'Nếu đời con phân tính $1$ trội $: 1$ lặn: cá thể cần kiểm tra cho hai loại giao tử $A$, $a$ với tỉ lệ bằng nhau, có kiểu gene dị hợp $Aa$. Sơ đồ: $Aa \\times aa \\to 1\\,Aa : 1\\,aa$.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Trong chọn giống, người ta dùng lai phân tích để kiểm tra độ thuần chủng của giống: giống thuần chủng về tính trạng trội cho đời con lai phân tích đồng tính.',
        },
      ],
    },
    {
      heading: 'Lai hai cặp tính trạng và quy luật phân li độc lập',
      blocks: [
        {
          type: 'p',
          text: 'Mendel lai hai giống đậu thuần chủng khác nhau về hai cặp tính trạng: hạt vàng, trơn × hạt xanh, nhăn. $F_1$ đều hạt vàng, trơn. Cho $F_1$ tự thụ phấn, $F_2$ có $315$ hạt vàng, trơn; $101$ hạt vàng, nhăn; $108$ hạt xanh, trơn; $32$ hạt xanh, nhăn, xấp xỉ $9 : 3 : 3 : 1$.',
        },
        {
          type: 'p',
          text: 'Xét riêng từng tính trạng ở $F_2$: vàng $:$ xanh $= (315 + 101) : (108 + 32) = 416 : 140 \\approx 3 : 1$; trơn $:$ nhăn $= (315 + 108) : (101 + 32) = 423 : 133 \\approx 3 : 1$. Mỗi cặp vẫn tuân theo quy luật phân li, và tỉ lệ chung bằng tích các tỉ lệ riêng:',
        },
        {
          type: 'tex',
          tex: '(3 : 1)(3 : 1) = 9 : 3 : 3 : 1',
        },
        {
          type: 'p',
          text: 'Giải thích: quy ước $A$ hạt vàng, $a$ hạt xanh; $B$ hạt trơn, $b$ hạt nhăn. $P$: $AABB \\times aabb$, $F_1$: $AaBb$. Khi $F_1$ giảm phân, cặp $Aa$ phân li độc lập với cặp $Bb$, tạo bốn loại giao tử với tỉ lệ bằng nhau: $AB$, $Ab$, $aB$, $ab$, mỗi loại $\\dfrac{1}{4}$. Bốn loại giao tử đực kết hợp ngẫu nhiên với bốn loại giao tử cái cho $4 \\cdot 4 = 16$ tổ hợp, gồm $9$ kiểu gene và $4$ kiểu hình theo tỉ lệ $9 : 3 : 3 : 1$.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy luật phân li độc lập',
          text: 'Các cặp nhân tố di truyền (cặp allele) quy định các tính trạng khác nhau phân li độc lập trong quá trình phát sinh giao tử.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ý nghĩa: biến dị tổ hợp',
          text: 'Nhờ các cặp allele phân li độc lập và tổ hợp tự do, đời con xuất hiện những kiểu hình khác bố mẹ, như hạt vàng, nhăn và hạt xanh, trơn ở $F_2$. Đó là biến dị tổ hợp, nguồn nguyên liệu phong phú cho chọn giống và tiến hoá; nó giải thích vì sao các loài sinh sản hữu tính rất đa dạng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bảng Punnett và phép lai phân tích',
    instruction:
      'Chọn kiểu gene của cây mẹ và cây bố (hoặc một phép lai mẫu) để xem bảng Punnett với tỉ lệ kiểu gene, kiểu hình; chạm vào một ô để thấy mọi ô cùng kiểu gene. Bấm "Gieo 400 hạt" để so số liệu thực tế với lí thuyết. Ở chế độ "Lai phân tích", hãy tìm kiểu gene của một cây hạt vàng bí ẩn.',
  },
  examples: [
    {
      problem:
        'Ở đậu Hà Lan, allele $A$ quy định hoa tím trội hoàn toàn so với allele $a$ quy định hoa trắng. Viết sơ đồ lai từ $P$ đến $F_2$ khi lai cây hoa tím thuần chủng với cây hoa trắng.',
      steps: [
        'Cây hoa tím thuần chủng: $AA$; cây hoa trắng: $aa$. $P$: $AA \\times aa$.',
        'Giao tử: $AA$ cho $A$; $aa$ cho $a$. $F_1$: $Aa$, $100\\%$ hoa tím.',
        '$F_1 \\times F_1$: $Aa \\times Aa$; mỗi bên cho giao tử $\\dfrac{1}{2}A$ và $\\dfrac{1}{2}a$.',
        '$F_2$: $\\dfrac{1}{4}AA : \\dfrac{2}{4}Aa : \\dfrac{1}{4}aa$, tức $1\\,AA : 2\\,Aa : 1\\,aa$.',
        'Kiểu hình: $AA$ và $Aa$ hoa tím, $aa$ hoa trắng, nên $3$ hoa tím $: 1$ hoa trắng.',
      ],
      answer:
        '$F_1$: $100\\%\\ Aa$ (hoa tím); $F_2$: kiểu gene $1\\,AA : 2\\,Aa : 1\\,aa$, kiểu hình $3$ tím $: 1$ trắng.',
    },
    {
      problem:
        'Một cây đậu hoa tím chưa biết kiểu gene được lai với cây hoa trắng. Đời con có $51$ cây hoa tím và $49$ cây hoa trắng. Xác định kiểu gene của cây hoa tím.',
      steps: [
        'Đây là phép lai phân tích: cây hoa trắng $aa$ chỉ cho một loại giao tử $a$.',
        'Đời con có cả hoa trắng $aa$, nên cây hoa tím đã cho giao tử $a$; nó cũng cho giao tử $A$ (vì có con hoa tím).',
        'Tỉ lệ $51 : 49 \\approx 1 : 1$, khớp với $Aa \\times aa \\to 1\\,Aa : 1\\,aa$.',
      ],
      answer: 'Cây hoa tím có kiểu gene dị hợp $Aa$.',
    },
    {
      problem:
        'Cho $F_1$ có kiểu gene $AaBb$ ($A$ hạt vàng, $a$ hạt xanh, $B$ hạt trơn, $b$ hạt nhăn) tự thụ phấn. Tính tỉ lệ cây hạt vàng, nhăn ở $F_2$. Nếu $F_2$ có $1600$ hạt thì khoảng bao nhiêu hạt vàng, nhăn?',
      steps: [
        'Hai cặp allele phân li độc lập, nên xét riêng từng cặp rồi nhân xác suất.',
        '$Aa \\times Aa$: hạt vàng chiếm $\\dfrac{3}{4}$. $Bb \\times Bb$: hạt nhăn ($bb$) chiếm $\\dfrac{1}{4}$.',
        'Hạt vàng, nhăn: $\\dfrac{3}{4} \\cdot \\dfrac{1}{4} = \\dfrac{3}{16}$.',
        'Số hạt: $1600 \\cdot \\dfrac{3}{16} = 300$ hạt.',
      ],
      answer: 'Hạt vàng, nhăn chiếm $\\dfrac{3}{16}$, khoảng $300$ trên $1600$ hạt.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Theo quy luật phân li, trong quá trình phát sinh giao tử',
      options: [
        'hai allele của cặp hoà trộn vào nhau rồi đi vào giao tử',
        'các allele trong cặp phân li đồng đều về các giao tử, mỗi giao tử chỉ chứa một allele',
        'mỗi giao tử nhận cả hai allele của cặp',
        'chỉ allele trội đi vào giao tử',
      ],
      answer: 1,
      hints: ['Giao tử thuần khiết: chỉ mang một allele của cặp.'],
      solution:
        'Các allele trong cặp phân li đồng đều về các giao tử, nên mỗi giao tử chỉ chứa một allele của cặp ($Aa$ cho $\\dfrac{1}{2}A$, $\\dfrac{1}{2}a$).',
    },
    {
      type: 'number',
      prompt:
        'Cho cây đậu $Aa$ (hạt vàng) tự thụ phấn, thu được $1200$ hạt. Theo lí thuyết, có bao nhiêu hạt xanh ($aa$)?',
      answer: 300,
      unit: 'hạt',
      hints: ['$Aa \\times Aa$ cho tỉ lệ $aa$ là bao nhiêu?', 'Hạt xanh chiếm $\\dfrac{1}{4}$.'],
      solution:
        '$Aa \\times Aa \\to \\dfrac{1}{4}aa$, nên số hạt xanh là $1200 \\cdot \\dfrac{1}{4} = 300$ hạt.',
    },
    {
      type: 'fraction',
      prompt:
        'Ở $F_2$ của phép lai $Aa \\times Aa$, chọn ngẫu nhiên một cây hạt vàng. Xác suất để cây đó có kiểu gene dị hợp $Aa$ là bao nhiêu?',
      answer: [2, 3],
      simplest: true,
      hints: [
        'Chỉ xét các cây hạt vàng: $1\\,AA$ và $2\\,Aa$.',
        'Có $3$ phần hạt vàng, trong đó $2$ phần là $Aa$.',
      ],
      solution:
        'Trong $F_2$, hạt vàng gồm $1\\,AA : 2\\,Aa$, tức $3$ phần. Xác suất cây hạt vàng là $Aa$ bằng $\\dfrac{2}{3}$.',
    },
    {
      type: 'choice',
      prompt:
        'Lai phân tích một cây thân cao, đời con có $50\\%$ thân cao và $50\\%$ thân thấp. Cây thân cao đem lai có kiểu gene',
      options: ['$AA$', '$Aa$', '$aa$', 'không xác định được'],
      answer: 1,
      hints: ['Đời con có thân thấp $aa$: cây thân cao phải cho được giao tử $a$.'],
      solution:
        'Đời con phân tính $1 : 1$ nên cây thân cao cho hai loại giao tử $A$ và $a$ bằng nhau: kiểu gene dị hợp $Aa$ ($Aa \\times aa \\to 1\\,Aa : 1\\,aa$).',
    },
    {
      type: 'multi',
      prompt:
        'Chọn tất cả các phép lai cho đời con đồng tính (chỉ một kiểu hình), biết $A$ trội hoàn toàn so với $a$.',
      options: [
        '$AA \\times aa$',
        '$Aa \\times Aa$',
        '$AA \\times Aa$',
        '$Aa \\times aa$',
        '$aa \\times aa$',
      ],
      answers: [0, 2, 4],
      hints: ['Đời con có kiểu hình lặn khi cả bố và mẹ cùng cho được giao tử $a$.'],
      solution:
        '$AA \\times aa \\to 100\\%\\ Aa$; $AA \\times Aa \\to AA, Aa$ đều trội; $aa \\times aa \\to 100\\%\\ aa$. Còn $Aa \\times Aa$ cho $3 : 1$ và $Aa \\times aa$ cho $1 : 1$.',
    },
    {
      type: 'number',
      prompt:
        'Cơ thể có kiểu gene $AaBb$ (hai cặp allele phân li độc lập) cho bao nhiêu loại giao tử?',
      answer: 4,
      hints: ['Mỗi cặp dị hợp cho $2$ loại giao tử; các cặp phân li độc lập nên nhân lại.'],
      solution: '$2 \\cdot 2 = 4$ loại giao tử: $AB$, $Ab$, $aB$, $ab$, mỗi loại $\\dfrac{1}{4}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Ở $F_2$ của phép lai $AaBb \\times AaBb$, cây hạt xanh, trơn ($aaB\\text{-}$) chiếm tỉ lệ bao nhiêu?',
      answer: [3, 16],
      simplest: true,
      hints: [
        'Tính riêng: hạt xanh ($aa$) chiếm bao nhiêu? Hạt trơn ($B\\text{-}$) chiếm bao nhiêu?',
      ],
      solution:
        'Hạt xanh $\\dfrac{1}{4}$, hạt trơn $\\dfrac{3}{4}$, nên hạt xanh, trơn chiếm $\\dfrac{1}{4} \\cdot \\dfrac{3}{4} = \\dfrac{3}{16}$.',
    },
    {
      type: 'number',
      prompt:
        '$F_2$ của phép lai $AaBb \\times AaBb$ có $1600$ hạt. Theo lí thuyết, có bao nhiêu hạt xanh, nhăn ($aabb$)?',
      answer: 100,
      unit: 'hạt',
      hints: ['$aabb$ chiếm $\\dfrac{1}{4} \\cdot \\dfrac{1}{4}$.'],
      solution:
        '$aabb$ chiếm $\\dfrac{1}{16}$, nên có $1600 \\cdot \\dfrac{1}{16} = 100$ hạt xanh, nhăn.',
    },
    {
      type: 'choice',
      prompt:
        'Phép lai $AaBb \\times aabb$ (hai cặp allele phân li độc lập, trội hoàn toàn) cho tỉ lệ kiểu hình',
      options: ['$9 : 3 : 3 : 1$', '$3 : 1$', '$1 : 1 : 1 : 1$', '$1 : 2 : 1$'],
      answer: 2,
      hints: ['$aabb$ chỉ cho giao tử $ab$, nên mỗi giao tử của $AaBb$ cho một kiểu hình riêng.'],
      solution:
        '$AaBb$ cho $4$ loại giao tử bằng nhau, $aabb$ cho $1$ loại $ab$, nên đời con $1\\,AaBb : 1\\,Aabb : 1\\,aaBb : 1\\,aabb$, tức $1 : 1 : 1 : 1$ về kiểu hình.',
    },
    {
      type: 'text',
      prompt:
        'Phép lai giữa cá thể mang tính trạng trội cần xác định kiểu gene với cá thể mang tính trạng lặn gọi là phép lai gì?',
      accept: ['lai phân tích', 'phép lai phân tích', 'phan tich'],
      hints: ['Mục đích của phép lai là "phân tích" kiểu gene của cá thể trội.'],
      solution: 'Đó là phép lai phân tích.',
    },
  ],
  takeaways: [
    'Lai hai dòng thuần chủng khác nhau một cặp tính trạng: $F_1$ đồng tính (tính trạng trội), $F_2$ phân tính $3$ trội $: 1$ lặn, kiểu gene $1\\,AA : 2\\,Aa : 1\\,aa$.',
    'Quy luật phân li: mỗi tính trạng do một cặp allele quy định; khi phát sinh giao tử, các allele trong cặp phân li đồng đều, mỗi giao tử chỉ chứa một allele.',
    'Lai phân tích: lai cá thể trội với cá thể lặn; đời con đồng tính thì cá thể trội là $AA$, phân tính $1 : 1$ thì là $Aa$.',
    'Quy luật phân li độc lập: các cặp allele quy định các tính trạng khác nhau phân li độc lập khi phát sinh giao tử; $AaBb \\times AaBb$ cho $9 : 3 : 3 : 1 = (3 : 1)(3 : 1)$.',
    'Phân li độc lập và tổ hợp tự do tạo ra biến dị tổ hợp, làm sinh vật đa dạng.',
  ],
};
