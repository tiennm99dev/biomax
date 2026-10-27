/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Di truyền và biến dị, đối tượng của di truyền học; Mendel và phương pháp phân tích các thế hệ lai trên đậu Hà Lan; các thuật ngữ gene, allele, kiểu gene, kiểu hình, trội, lặn, đồng hợp, dị hợp, thuần chủng và các kí hiệu P, F, G.',
  intro:
    'Vì sao con cái thường giống bố mẹ, nhưng hai anh em ruột lại không giống hệt nhau? Hơn 150 năm trước, một tu sĩ người Áo tên là Gregor Mendel đã kiên nhẫn gieo trồng và lai hàng chục nghìn cây đậu Hà Lan để trả lời câu hỏi ấy. Bài học này giới thiệu ngành khoa học mà ông đặt nền móng, di truyền học, cùng những thuật ngữ và kí hiệu em sẽ dùng suốt chương.',
  objectives: [
    'Nêu được khái niệm di truyền, biến dị và đối tượng nghiên cứu của di truyền học.',
    'Trình bày được phương pháp nghiên cứu di truyền của Mendel (phương pháp phân tích các thế hệ lai) và lí do Mendel chọn đậu Hà Lan.',
    'Nêu được ý tưởng của Mendel: tính trạng do các nhân tố di truyền (gene) quy định, tồn tại thành từng cặp và không hoà trộn.',
    'Nêu được các thuật ngữ: tính trạng, cặp tính trạng tương phản, gene, allele, kiểu gene, kiểu hình, trội, lặn, đồng hợp, dị hợp, thuần chủng; sử dụng được các kí hiệu P, F, G, ×.',
  ],
  sections: [
    {
      heading: 'Di truyền và biến dị',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Di truyền',
          text: 'Di truyền là hiện tượng truyền đạt các tính trạng của bố mẹ, tổ tiên cho các thế hệ con cháu. Ví dụ: bố mẹ cùng nhóm máu O thì các con cũng có nhóm máu O.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Biến dị',
          text: 'Biến dị là hiện tượng con sinh ra khác với bố mẹ và khác nhau ở nhiều chi tiết. Ví dụ: bố mẹ đều thuận tay phải nhưng sinh con thuận tay trái; các con trong một nhà có màu tóc, chiều cao khác nhau.',
        },
        {
          type: 'p',
          text: 'Di truyền và biến dị là hai hiện tượng song song, gắn liền với quá trình sinh sản. Nhờ di truyền, các đặc điểm của loài được duy trì ổn định qua các thế hệ; nhờ biến dị, sinh vật đa dạng và có nguyên liệu cho chọn giống và tiến hoá.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Di truyền học',
          text: 'Di truyền học là ngành khoa học nghiên cứu về tính di truyền và biến dị ở sinh vật. Cả hai hiện tượng đều do các nhân tố di truyền nằm trong tế bào quy định, sau này được gọi là gene; vì vậy gene là trung tâm của di truyền học.',
        },
      ],
    },
    {
      heading: 'Mendel, người đặt nền móng cho di truyền học',
      blocks: [
        {
          type: 'p',
          text: 'Gregor Mendel (1822 – 1884) là người đầu tiên nghiên cứu di truyền bằng phương pháp khoa học có thí nghiệm và thống kê. Ông chọn cây đậu Hà Lan (Pisum sativum) làm đối tượng vì cây có nhiều ưu điểm:',
        },
        {
          type: 'list',
          items: [
            'Hoa lưỡng tính, tự thụ phấn khá nghiêm ngặt, nên dễ tạo được các dòng thuần chủng; khi cần lai, chỉ việc cắt bỏ nhị và thụ phấn nhân tạo.',
            'Có nhiều cặp tính trạng tương phản, dễ quan sát và phân biệt.',
            'Vòng đời ngắn, cho nhiều hạt, dễ trồng, nên thu được số liệu lớn để thống kê.',
          ],
        },
        {
          type: 'table',
          caption:
            'Bảy cặp tính trạng tương phản ở đậu Hà Lan Mendel đã theo dõi (tính trạng trội viết trước)',
          head: ['Tính trạng', 'Trạng thái trội', 'Trạng thái lặn'],
          rows: [
            ['Hình dạng hạt', 'Trơn', 'Nhăn'],
            ['Màu hạt', 'Vàng', 'Xanh'],
            ['Màu hoa', 'Tím', 'Trắng'],
            ['Hình dạng quả', 'Căng (trơn)', 'Có ngấn'],
            ['Màu quả', 'Xanh', 'Vàng'],
            ['Vị trí hoa', 'Mọc ở thân (nách lá)', 'Mọc ở ngọn'],
            ['Chiều cao thân', 'Cao', 'Thấp'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phương pháp phân tích các thế hệ lai',
          text: 'Mendel tiến hành theo bốn bước: (1) tạo các dòng thuần chủng khác nhau về một hoặc vài cặp tính trạng tương phản rồi lai chúng với nhau; (2) theo dõi sự di truyền riêng rẽ của từng cặp tính trạng ở con cháu qua nhiều thế hệ; (3) dùng toán thống kê phân tích số liệu, từ đó đưa ra giả thuyết giải thích; (4) kiểm chứng giả thuyết bằng thí nghiệm (phép lai phân tích).',
        },
        {
          type: 'p',
          text: 'Ví dụ, Mendel lai cây hoa tím thuần chủng với cây hoa trắng thuần chủng. Thế hệ con thứ nhất ($F_1$) đều có hoa tím. Cho $F_1$ tự thụ phấn, thế hệ thứ hai ($F_2$) có $705$ cây hoa tím và $224$ cây hoa trắng, tỉ lệ xấp xỉ $3 : 1$.',
        },
        {
          type: 'table',
          caption: 'Thí nghiệm lai một cặp tính trạng màu hoa của Mendel',
          head: ['Thế hệ', 'Kiểu hình'],
          rows: [
            ['$P$ (thuần chủng)', 'Hoa tím $\\times$ hoa trắng'],
            ['$F_1$', '$100\\%$ hoa tím'],
            ['$F_2$', '$705$ hoa tím $: 224$ hoa trắng $\\approx 3 : 1$'],
          ],
        },
        {
          type: 'p',
          text: 'Tính trạng hoa trắng không mất đi: nó bị ẩn ở $F_1$ rồi xuất hiện lại ở $F_2$. Mendel gọi tính trạng biểu hiện ở $F_1$ (hoa tím) là tính trạng trội, tính trạng bị ẩn (hoa trắng) là tính trạng lặn. Từ đó ông đưa ra giả thuyết: mỗi tính trạng do một cặp nhân tố di truyền quy định; các nhân tố di truyền tồn tại riêng rẽ trong tế bào và không hoà trộn vào nhau.',
        },
      ],
    },
    {
      heading: 'Một số thuật ngữ và kí hiệu',
      blocks: [
        {
          type: 'list',
          items: [
            'Tính trạng: đặc điểm về hình thái, cấu tạo, sinh lí của cơ thể, như màu hạt, chiều cao thân.',
            'Cặp tính trạng tương phản: hai trạng thái biểu hiện trái ngược nhau của cùng một loại tính trạng, như hạt trơn và hạt nhăn.',
            'Nhân tố di truyền (gene): nhân tố quy định các tính trạng của sinh vật; trong tế bào sinh dưỡng, gene tồn tại thành từng cặp.',
            'Allele: các trạng thái khác nhau của cùng một gene. Allele trội viết bằng chữ in hoa ($A$), allele lặn viết bằng chữ thường ($a$).',
            'Kiểu gene: tập hợp tất cả các gene trong tế bào của cơ thể; khi nghiên cứu, thường chỉ xét một vài cặp allele, như $AA$, $Aa$, $aa$.',
            'Kiểu hình: tập hợp tất cả các tính trạng biểu hiện của cơ thể; thường chỉ xét một vài tính trạng, như hạt vàng, hoa trắng.',
            'Tính trạng trội biểu hiện khi kiểu gene đồng hợp trội ($AA$) hoặc dị hợp ($Aa$); tính trạng lặn chỉ biểu hiện khi kiểu gene đồng hợp lặn ($aa$).',
            'Đồng hợp: hai allele của cặp giống nhau ($AA$, $aa$). Dị hợp: hai allele khác nhau ($Aa$).',
            'Thuần chủng (dòng thuần): giống có đặc tính di truyền đồng nhất, đời sau giống đời trước; các cặp allele ở trạng thái đồng hợp.',
          ],
        },
        {
          type: 'table',
          caption: 'Các kí hiệu dùng trong sơ đồ lai',
          head: ['Kí hiệu', 'Ý nghĩa'],
          rows: [
            ['$P$', 'Cặp bố mẹ xuất phát (thế hệ bố mẹ)'],
            ['$\\times$', 'Phép lai'],
            ['$G$', 'Giao tử'],
            ['♀ / ♂', 'Cá thể cái (mẹ) / cá thể đực (bố)'],
            ['$F_1, F_2, \\ldots$', 'Thế hệ con thứ nhất, thứ hai, ...'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đừng nhầm kiểu gene với kiểu hình',
          text: 'Cây $AA$ và cây $Aa$ có cùng kiểu hình (hạt vàng) nhưng khác kiểu gene. Vì vậy, nhìn kiểu hình trội không biết chắc được kiểu gene; Bài 37 sẽ cho em cách xác định bằng phép lai phân tích.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thẻ thuật ngữ đậu Hà Lan',
    instruction:
      'Lật từng thẻ để đọc định nghĩa và ví dụ trên cây đậu Hà Lan. Khi đã nắm chắc, chuyển sang "Tự kiểm tra": mỗi câu đưa ra một ví dụ, em chọn thuật ngữ mà ví dụ đó minh hoạ.',
  },
  examples: [
    {
      problem:
        'Lai cây đậu thân cao thuần chủng với cây thân thấp thuần chủng, $F_1$ đều thân cao. Cho $F_1$ tự thụ phấn, $F_2$ có $787$ cây thân cao và $277$ cây thân thấp. Tính trạng nào trội, tính trạng nào lặn? Tỉ lệ ở $F_2$ xấp xỉ bao nhiêu?',
      steps: [
        'Hai cây $P$ thuần chủng, khác nhau về một cặp tính trạng tương phản (cao – thấp).',
        '$F_1$ chỉ biểu hiện thân cao, nên thân cao là tính trạng trội; thân thấp bị ẩn ở $F_1$, xuất hiện lại ở $F_2$, nên là tính trạng lặn.',
        'Tỉ lệ $F_2$: $787 : 277 \\approx 2{,}84 : 1$, xấp xỉ $3 : 1$.',
      ],
      answer: 'Thân cao trội, thân thấp lặn; $F_2$ xấp xỉ $3$ cao $: 1$ thấp.',
    },
    {
      problem:
        'Ở đậu Hà Lan, allele $A$ quy định hạt vàng trội hoàn toàn so với allele $a$ quy định hạt xanh. Cho ba cây có kiểu gene $AA$, $Aa$, $aa$. Với mỗi cây, hãy cho biết kiểu hình, cây đó đồng hợp hay dị hợp, có thuần chủng không.',
      steps: [
        '$AA$: hai allele giống nhau, đều trội, nên đồng hợp trội; kiểu hình hạt vàng; thuần chủng.',
        '$Aa$: hai allele khác nhau, nên dị hợp; có allele trội $A$ nên kiểu hình hạt vàng; không thuần chủng.',
        '$aa$: hai allele lặn giống nhau, nên đồng hợp lặn; kiểu hình hạt xanh; thuần chủng.',
      ],
      answer:
        '$AA$: vàng, đồng hợp, thuần chủng; $Aa$: vàng, dị hợp, không thuần chủng; $aa$: xanh, đồng hợp, thuần chủng.',
    },
    {
      problem:
        'Hãy chỉ ra đâu là di truyền, đâu là biến dị: (a) mèo mẹ lông đen đẻ một mèo con lông đen và một mèo con lông trắng đen; (b) giống lúa thuần chủng gieo qua nhiều vụ vẫn cho hạt dài như nhau.',
      steps: [
        'Di truyền là con giống bố mẹ; biến dị là con khác bố mẹ và khác nhau.',
        '(a) Mèo con lông đen giống mẹ thể hiện di truyền; mèo con lông trắng đen khác mẹ và khác anh chị em thể hiện biến dị.',
        '(b) Các thế hệ giống nhau về độ dài hạt: di truyền.',
      ],
      answer: '(a) có cả di truyền và biến dị; (b) là di truyền.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hiện tượng con sinh ra khác với bố mẹ và khác nhau ở nhiều chi tiết gọi là',
      options: ['di truyền', 'biến dị', 'tính trạng', 'lai phân tích'],
      answer: 1,
      hints: ['Hiện tượng con giống bố mẹ là di truyền.'],
      solution:
        'Đó là biến dị. Di truyền là hiện tượng truyền đạt tính trạng của bố mẹ cho con cháu.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả lí do Mendel chọn đậu Hà Lan làm đối tượng nghiên cứu.',
      options: [
        'Tự thụ phấn nghiêm ngặt, dễ tạo dòng thuần chủng',
        'Có nhiều cặp tính trạng tương phản dễ quan sát',
        'Vòng đời ngắn, cho nhiều hạt',
        'Là cây thân gỗ sống lâu năm',
        'Có thể sinh sản vô tính bằng củ',
      ],
      answers: [0, 1, 2],
      hints: ['Mendel cần dòng thuần, tính trạng dễ phân biệt và số liệu lớn để thống kê.'],
      solution:
        'Đậu Hà Lan là cây thân thảo, tự thụ phấn nghiêm ngặt, có nhiều cặp tính trạng tương phản, vòng đời ngắn và cho nhiều hạt. Cây không phải thân gỗ và Mendel không dùng sinh sản vô tính.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thuật ngữ với ví dụ phù hợp ở đậu Hà Lan ($A$: hạt vàng, $a$: hạt xanh).',
      left: ['Allele', 'Kiểu gene', 'Kiểu hình', 'Cặp tính trạng tương phản'],
      right: ['$Aa$', 'Hạt vàng', '$A$ và $a$', 'Hạt trơn và hạt nhăn'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
        [3, 3],
      ],
      hints: [
        'Allele là các dạng của một gene; kiểu gene là cặp allele cơ thể mang.',
        'Kiểu hình là cái nhìn thấy được.',
      ],
      solution:
        'Allele: $A$ và $a$. Kiểu gene: $Aa$. Kiểu hình: hạt vàng. Cặp tính trạng tương phản: hạt trơn và hạt nhăn.',
    },
    {
      type: 'choice',
      prompt: 'Kiểu gene nào sau đây là dị hợp?',
      options: ['$AA$', '$aa$', '$Aa$', '$AABB$'],
      answer: 2,
      hints: ['Dị hợp nghĩa là hai allele của cặp khác nhau.'],
      solution: '$Aa$ có hai allele khác nhau nên dị hợp; $AA$, $aa$, $AABB$ đều đồng hợp.',
    },
    {
      type: 'choice',
      prompt:
        'Lai hai dòng đậu thuần chủng hạt trơn và hạt nhăn, $F_1$ đều hạt trơn. Kết luận nào đúng?',
      options: [
        'Hạt nhăn là tính trạng trội',
        'Hạt trơn là tính trạng trội, hạt nhăn là tính trạng lặn',
        'Hai tính trạng hoà trộn vào nhau ở $F_1$',
        'Tính trạng hạt nhăn đã mất hẳn',
      ],
      answer: 1,
      hints: [
        'Tính trạng biểu hiện ở $F_1$ khi lai hai dòng thuần chủng tương phản được gọi là gì?',
      ],
      solution:
        'Tính trạng biểu hiện ở $F_1$ (hạt trơn) là trội, tính trạng bị ẩn (hạt nhăn) là lặn. Tính trạng lặn không mất mà xuất hiện lại ở $F_2$; các nhân tố di truyền không hoà trộn.',
    },
    {
      type: 'number',
      prompt:
        'Ở $F_2$ thí nghiệm màu hạt, Mendel đếm được $6022$ hạt vàng và $2001$ hạt xanh. Tỉ lệ hạt vàng : hạt xanh bằng bao nhiêu (làm tròn đến hai chữ số thập phân, viết dưới dạng một số)?',
      answer: 3.01,
      tolerance: 0.005,
      hints: ['Chia số hạt vàng cho số hạt xanh.'],
      solution: '$6022 : 2001 \\approx 3{,}01$, nên tỉ lệ xấp xỉ $3{,}01 : 1 \\approx 3 : 1$.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các bước của phương pháp phân tích các thế hệ lai của Mendel theo đúng thứ tự.',
      items: [
        'Dùng toán thống kê phân tích số liệu, đưa ra giả thuyết',
        'Tạo dòng thuần chủng và lai các cặp bố mẹ khác nhau về tính trạng tương phản',
        'Kiểm chứng giả thuyết bằng phép lai phân tích',
        'Theo dõi sự di truyền của từng cặp tính trạng qua các thế hệ con cháu',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Phải có dòng thuần trước khi lai; giả thuyết phải có trước khi kiểm chứng.'],
      solution:
        'Tạo dòng thuần và lai → theo dõi con cháu qua các thế hệ → phân tích thống kê, đưa ra giả thuyết → kiểm chứng bằng phép lai phân tích.',
    },
    {
      type: 'text',
      prompt: 'Trong sơ đồ lai, kí hiệu $G$ dùng để chỉ gì? (viết một từ)',
      accept: ['giao tử', 'giao tu', 'các giao tử'],
      hints: ['Đó là tế bào sinh dục mà bố mẹ tạo ra, gồm trứng và tinh trùng.'],
      solution:
        '$G$ là giao tử; $P$ là bố mẹ, $F_1$, $F_2$ là các thế hệ con, $\\times$ là phép lai.',
    },
    {
      type: 'choice',
      prompt: 'Một cây đậu có hạt vàng ($A$ trội hoàn toàn so với $a$). Kiểu gene của cây là',
      options: ['chắc chắn $AA$', 'chắc chắn $Aa$', '$AA$ hoặc $Aa$', 'chắc chắn $aa$'],
      answer: 2,
      hints: ['Tính trạng trội biểu hiện ở cả thể đồng hợp trội lẫn thể dị hợp.'],
      solution:
        'Kiểu hình trội (hạt vàng) có thể ứng với $AA$ hoặc $Aa$; chỉ nhìn kiểu hình thì chưa biết chắc kiểu gene.',
    },
  ],
  takeaways: [
    'Di truyền: con giống bố mẹ, tổ tiên; biến dị: con khác bố mẹ và khác nhau. Di truyền học nghiên cứu cả hai hiện tượng, gene là trung tâm.',
    'Mendel dùng phương pháp phân tích các thế hệ lai trên đậu Hà Lan: tạo dòng thuần, lai, theo dõi từng tính trạng, thống kê, kiểm chứng.',
    'Mỗi tính trạng do một cặp nhân tố di truyền (gene) quy định; các allele tồn tại riêng rẽ, không hoà trộn.',
    'Kiểu gene là tập hợp gene (cặp allele) của cơ thể; kiểu hình là tập hợp tính trạng biểu hiện. Đồng hợp: $AA$, $aa$; dị hợp: $Aa$.',
    'Kí hiệu: $P$ bố mẹ, $\\times$ phép lai, $G$ giao tử, $F_1, F_2$ các thế hệ con.',
  ],
};
