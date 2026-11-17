/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Liên kết gene và hoán vị gene: thí nghiệm của Morgan trên ruồi giấm, cơ sở tế bào học, tần số hoán vị gene, bản đồ di truyền và ý nghĩa của liên kết gene, hoán vị gene.',
  intro:
    'Năm $1905$, Bateson và Punnett lai hai giống đậu thơm khác nhau về màu hoa và hình dạng hạt phấn. Đời $F_2$ không cho tỉ lệ $9 : 3 : 3 : 1$ như Mendel dự đoán: các tổ hợp giống bố mẹ xuất hiện nhiều hơn hẳn. Vì sao một số cặp gene lại "không chịu" phân li độc lập?',
  objectives: [
    'Trình bày được thí nghiệm của Morgan về liên kết gene và hoán vị gene ở ruồi giấm.',
    'Giải thích được cơ sở tế bào học của liên kết gene (các gene cùng nằm trên một NST) và hoán vị gene (trao đổi chéo).',
    'Tính được tần số hoán vị gene và tỉ lệ các loại giao tử.',
    'Nêu được khái niệm bản đồ di truyền; lập được bản đồ từ tần số hoán vị.',
  ],
  sections: [
    {
      heading: 'Liên kết gene',
      blocks: [
        {
          type: 'p',
          text: 'Ở ruồi giấm, $B$ (thân xám) trội hoàn toàn so với $b$ (thân đen), $V$ (cánh dài) trội hoàn toàn so với $v$ (cánh cụt). Morgan lai ruồi thân xám, cánh dài thuần chủng với ruồi thân đen, cánh cụt, được $F_1$ toàn thân xám, cánh dài. Sau đó ông lai phân tích ruồi đực $F_1$ với ruồi cái thân đen, cánh cụt: đời con chỉ có $50\\%$ thân xám, cánh dài và $50\\%$ thân đen, cánh cụt.',
        },
        {
          type: 'p',
          text: 'Nếu hai gene phân li độc lập, ruồi đực $F_1$ ($BbVv$) phải cho $4$ loại giao tử và đời con có $4$ kiểu hình $1 : 1 : 1 : 1$. Thực tế ruồi đực $F_1$ chỉ cho hai loại giao tử $BV$ và $bv$: hai gene nằm trên cùng một NST và luôn đi cùng nhau khi giảm phân. Kiểu gene của $F_1$ được viết $\\frac{BV}{bv}$.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết gene',
          text: 'Liên kết gene là hiện tượng các gene nằm trên cùng một NST có xu hướng di truyền cùng nhau. Các gene trên một NST tạo thành một nhóm gene liên kết; số nhóm gene liên kết của một loài bằng số NST trong bộ đơn bội ($n$).',
        },
        {
          type: 'list',
          items: [
            'Liên kết gene hạn chế xuất hiện biến dị tổ hợp, giúp duy trì sự ổn định của những nhóm gene quý, có lợi cho sinh vật.',
            'Trong chọn giống, người ta dùng chỉ thị phân tử (đoạn DNA liên kết chặt với gene mong muốn) để chọn lọc cá thể mang gene đó; có thể dùng đột biến chuyển đoạn đưa các gene có lợi về cùng một NST.',
          ],
        },
      ],
    },
    {
      heading: 'Hoán vị gene',
      blocks: [
        {
          type: 'p',
          text: 'Morgan lai phân tích ruồi cái $F_1$ $\\frac{BV}{bv}$ với ruồi đực thân đen, cánh cụt $\\frac{bv}{bv}$, thu được:',
        },
        {
          type: 'table',
          caption: 'Lai phân tích ruồi cái $F_1$',
          head: ['Kiểu hình', 'Tỉ lệ', 'Loại'],
          rows: [
            ['Thân xám, cánh dài', '$41{,}5\\%$', 'Giống bố mẹ (liên kết)'],
            ['Thân đen, cánh cụt', '$41{,}5\\%$', 'Giống bố mẹ (liên kết)'],
            ['Thân xám, cánh cụt', '$8{,}5\\%$', 'Tổ hợp mới (hoán vị)'],
            ['Thân đen, cánh dài', '$8{,}5\\%$', 'Tổ hợp mới (hoán vị)'],
          ],
        },
        {
          type: 'p',
          text: 'Ruồi cái $F_1$ cho bốn loại giao tử: hai loại liên kết $BV$, $bv$ chiếm tỉ lệ lớn và hai loại hoán vị $Bv$, $bV$ chiếm tỉ lệ nhỏ. Ở kì đầu của giảm phân I, trong một số tế bào, hai chromatid không chị em của cặp NST tương đồng trao đổi đoạn tương ứng cho nhau (trao đổi chéo), làm các allele đổi chỗ, tạo các tổ hợp gene mới.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tần số hoán vị gene',
          text: 'Tần số hoán vị gene ($f$) bằng tổng tỉ lệ các loại giao tử mang gene hoán vị, cũng bằng tỉ lệ cá thể có kiểu hình tái tổ hợp trong phép lai phân tích. Ở thí nghiệm trên, $f = 8{,}5\\% + 8{,}5\\% = 17\\%$. Tần số hoán vị không vượt quá $50\\%$.',
        },
        {
          type: 'tex',
          tex: '\\frac{AB}{ab}: \\; AB = ab = \\frac{100\\% - f}{2}, \\quad Ab = aB = \\frac{f}{2}',
        },
        { type: 'widget', name: 'giao-tu' },
        {
          type: 'list',
          items: [
            'Các gene càng xa nhau trên NST, khả năng xảy ra trao đổi chéo giữa chúng càng lớn, tần số hoán vị càng cao.',
            'Ở ruồi giấm, hoán vị gene chỉ xảy ra ở con cái; ở nhiều loài khác hoán vị xảy ra ở cả hai giới.',
            'Hoán vị gene tạo ra nhiều biến dị tổ hợp, cung cấp nguyên liệu cho tiến hoá và chọn giống.',
          ],
        },
      ],
    },
    {
      heading: 'Bản đồ di truyền',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bản đồ di truyền',
          text: 'Bản đồ di truyền (bản đồ gene) là sơ đồ thể hiện trình tự sắp xếp và khoảng cách tương đối giữa các gene trên NST. Khoảng cách được tính bằng tần số hoán vị: $1\\%$ hoán vị gene ứng với $1$ centiMorgan ($1$ cM).',
        },
        {
          type: 'p',
          text: 'Để lập bản đồ, người ta xác định tần số hoán vị giữa từng cặp gene. Hai gene có tần số hoán vị lớn nhất nằm ở hai đầu; gene còn lại nằm giữa sao cho khoảng cách lớn bằng tổng hai khoảng cách nhỏ. Ví dụ: $A$–$B$ $12\\%$, $B$–$C$ $8\\%$, $A$–$C$ $20\\%$ cho thứ tự $A$ – $B$ – $C$.',
        },
        {
          type: 'list',
          items: [
            'Biết khoảng cách giữa các gene, có thể dự đoán tần số các tổ hợp gene mới trong phép lai, giúp chọn cặp lai phù hợp, rút ngắn thời gian tạo giống.',
            'Trong y học, bản đồ gene giúp xác định vị trí gene gây bệnh, phục vụ chẩn đoán và tư vấn di truyền.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Lập bản đồ gene từ tần số hoán vị',
    instruction:
      'Kéo các gene (hoặc chọn một gene rồi dùng phím mũi tên, giữ Shift để bước $5$ cM) dọc theo NST sao cho khoảng cách giữa mọi cặp gene bằng tần số hoán vị đã cho. Bắt đầu bằng cặp có tần số lớn nhất.',
  },
  examples: [
    {
      problem:
        'Lai phân tích cây dị hợp hai cặp gene $\\frac{AB}{ab}$ với cây $\\frac{ab}{ab}$, đời con có $410$ cây $A\\text{-}B\\text{-}$, $410$ cây $aabb$, $90$ cây $A\\text{-}bb$ và $90$ cây $aaB\\text{-}$. Tính tần số hoán vị gene và khoảng cách giữa hai gene.',
      steps: [
        'Kiểu hình giống bố mẹ ($A\\text{-}B\\text{-}$, $aabb$) chiếm số đông, nên đó là các kiểu liên kết; $A\\text{-}bb$ và $aaB\\text{-}$ là kiểu hoán vị.',
        'Tổng số cây: $410 + 410 + 90 + 90 = 1000$.',
        '$f = \\frac{90 + 90}{1000} = 18\\%$.',
        'Khoảng cách: $18$ cM.',
      ],
      answer: 'Tần số hoán vị $18\\%$; hai gene cách nhau $18$ cM.',
    },
    {
      problem:
        'Cơ thể có kiểu gene $\\frac{Ab}{aB}$, tần số hoán vị giữa hai gene là $20\\%$. Tính tỉ lệ các loại giao tử.',
      steps: [
        'Giao tử liên kết là $Ab$ và $aB$, giao tử hoán vị là $AB$ và $ab$.',
        'Mỗi loại giao tử hoán vị: $\\frac{20\\%}{2} = 10\\%$.',
        'Mỗi loại giao tử liên kết: $\\frac{100\\% - 20\\%}{2} = 40\\%$.',
      ],
      answer: '$Ab = aB = 40\\%$; $AB = ab = 10\\%$.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Ruồi giấm có bộ NST $2n = 8$. Ruồi giấm có bao nhiêu nhóm gene liên kết?',
      answer: 4,
      hints: ['Số nhóm gene liên kết bằng số NST trong bộ đơn bội.'],
      solution: '$n = 8 : 2 = 4$ nhóm gene liên kết.',
    },
    {
      type: 'number',
      prompt:
        'Lai phân tích một cơ thể dị hợp hai cặp gene liên kết được $1000$ cá thể, trong đó có $75$ cá thể $A\\text{-}bb$ và $75$ cá thể $aaB\\text{-}$ là các kiểu hình tái tổ hợp. Tần số hoán vị là bao nhiêu phần trăm?',
      answer: 15,
      unit: '%',
      hints: ['Tần số hoán vị bằng tỉ lệ cá thể có kiểu hình tái tổ hợp.'],
      solution: '$f = \\frac{75 + 75}{1000} = 15\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Cơ thể $\\frac{AB}{ab}$ có tần số hoán vị $20\\%$. Giao tử $Ab$ chiếm bao nhiêu phần trăm?',
      answer: 10,
      unit: '%',
      hints: ['Với $\\frac{AB}{ab}$, giao tử $Ab$ là giao tử hoán vị.'],
      solution: 'Giao tử hoán vị $Ab = \\frac{f}{2} = \\frac{20\\%}{2} = 10\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Cơ thể $\\frac{Ab}{aB}$ có tần số hoán vị $30\\%$. Giao tử $ab$ chiếm bao nhiêu phần trăm?',
      answer: 15,
      unit: '%',
      hints: ['Với $\\frac{Ab}{aB}$, giao tử liên kết là $Ab$ và $aB$.'],
      solution: '$ab$ là giao tử hoán vị: $\\frac{30\\%}{2} = 15\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Cơ sở tế bào học của hoán vị gene là',
      options: [
        'trao đổi chéo giữa hai chromatid không chị em của cặp NST tương đồng ở kì đầu giảm phân I',
        'sự phân li độc lập của các cặp NST tương đồng ở giảm phân I',
        'trao đổi chéo giữa hai chromatid chị em ở kì giữa nguyên phân',
        'sự nhân đôi của NST ở kì trung gian',
      ],
      answer: 0,
      hints: ['Trao đổi giữa hai chromatid chị em không tạo tổ hợp mới vì chúng giống nhau.'],
      solution:
        'Hoán vị gene do trao đổi đoạn tương ứng giữa hai chromatid không chị em của cặp NST tương đồng ở kì đầu giảm phân I.',
    },
    {
      type: 'choice',
      prompt:
        'Tần số hoán vị giữa các gene: $D$–$E$ $5\\%$, $D$–$F$ $15\\%$, $E$–$F$ $20\\%$. Gene nào nằm giữa hai gene còn lại?',
      options: ['$D$', '$E$', '$F$', 'Không xác định được'],
      answer: 0,
      hints: ['Hai gene có tần số hoán vị lớn nhất nằm ở hai đầu.'],
      solution:
        '$E$–$F$ $= 20\\%$ lớn nhất nên $E$, $F$ ở hai đầu; $D$ nằm giữa: $5 + 15 = 20$ cM.',
    },
    {
      type: 'number',
      prompt:
        'Hai gene có tần số hoán vị $17\\%$ (như ở thí nghiệm của Morgan). Khoảng cách giữa chúng trên bản đồ di truyền là bao nhiêu cM?',
      answer: 17,
      unit: 'cM',
      hints: ['$1\\%$ hoán vị ứng với $1$ cM.'],
      solution: 'Khoảng cách $= 17$ cM.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các phát biểu đúng về hoán vị gene.',
      options: [
        'Tần số hoán vị không vượt quá $50\\%$',
        'Gene càng xa nhau, tần số hoán vị càng lớn',
        'Hoán vị gene làm tăng biến dị tổ hợp',
        'Giao tử hoán vị luôn chiếm tỉ lệ lớn hơn giao tử liên kết',
      ],
      answers: [0, 1, 2],
      hints: ['Trao đổi chéo chỉ xảy ra ở một số tế bào khi giảm phân.'],
      solution:
        'Tần số hoán vị $\\le 50\\%$, tỉ lệ thuận với khoảng cách và làm tăng biến dị tổ hợp. Giao tử hoán vị luôn chiếm tỉ lệ không lớn hơn giao tử liên kết.',
    },
    {
      type: 'choice',
      prompt:
        'Lai phân tích ruồi đực $F_1$ $\\frac{BV}{bv}$ với ruồi cái $\\frac{bv}{bv}$, đời con có tỉ lệ',
      options: [
        '$1$ thân xám, cánh dài $: 1$ thân đen, cánh cụt',
        '$1 : 1 : 1 : 1$',
        '$41{,}5\\% : 41{,}5\\% : 8{,}5\\% : 8{,}5\\%$',
        '$9 : 3 : 3 : 1$',
      ],
      answer: 0,
      hints: ['Ở ruồi giấm, con đực không xảy ra hoán vị gene.'],
      solution:
        'Ruồi đực liên kết hoàn toàn, chỉ cho giao tử $BV$ và $bv$, nên đời con $1$ thân xám, cánh dài $: 1$ thân đen, cánh cụt.',
    },
  ],
  takeaways: [
    'Các gene cùng nằm trên một NST tạo thành nhóm gene liên kết, có xu hướng di truyền cùng nhau; số nhóm liên kết bằng $n$.',
    'Hoán vị gene do trao đổi chéo giữa hai chromatid không chị em của cặp NST tương đồng ở kì đầu giảm phân I.',
    'Tần số hoán vị = tổng tỉ lệ giao tử hoán vị, $f \\le 50\\%$; với $\\frac{AB}{ab}$: $AB = ab = \\frac{100\\% - f}{2}$, $Ab = aB = \\frac{f}{2}$.',
    'Bản đồ di truyền: $1\\%$ hoán vị $= 1$ cM; hai gene có tần số hoán vị lớn nhất nằm ở hai đầu.',
    'Liên kết gene giữ ổn định các nhóm gene quý; hoán vị gene tăng biến dị tổ hợp.',
  ],
};
