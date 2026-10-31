/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Di truyền liên kết: các gene cùng nằm trên một NST có xu hướng di truyền cùng nhau; thí nghiệm của Morgan trên ruồi giấm, so sánh với phân li độc lập và ý nghĩa của di truyền liên kết.',
  intro:
    'Theo Mendel, hai cặp gene quy định hai tính trạng phân li độc lập với nhau. Nhưng ruồi giấm chỉ có $4$ cặp NST mà lại có hàng nghìn gene, nên mỗi NST phải mang rất nhiều gene. Các gene cùng nằm trên một NST có còn phân li độc lập không? Năm 1910, Thomas Hunt Morgan trả lời câu hỏi này bằng thí nghiệm trên ruồi giấm. Trong bài này, em sẽ so sánh song song hai bảng Punnett: khi hai gene nằm trên hai cặp NST và khi chúng nằm trên cùng một NST.',
  objectives: [
    'Mô tả được thí nghiệm của Morgan về di truyền liên kết trên ruồi giấm.',
    'Giải thích được kết quả thí nghiệm bằng sơ đồ lai; nêu được khái niệm di truyền liên kết.',
    'Phân biệt được di truyền liên kết với phân li độc lập.',
    'Nêu được ý nghĩa của di truyền liên kết trong chọn giống.',
  ],
  sections: [
    {
      heading: 'Thí nghiệm của Morgan',
      blocks: [
        {
          type: 'p',
          text: 'Morgan chọn ruồi giấm làm đối tượng nghiên cứu vì chúng dễ nuôi, đẻ nhiều, vòng đời ngắn (khoảng $10$ – $14$ ngày) và có nhiều biến dị dễ quan sát, bộ NST chỉ có $2n = 8$.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'P thuần chủng: ruồi thân xám, cánh dài × ruồi thân đen, cánh cụt.',
            'F1: $100\\%$ ruồi thân xám, cánh dài.',
            'Lai phân tích: ruồi đực F1 thân xám, cánh dài × ruồi cái thân đen, cánh cụt.',
            'Fa: $1$ thân xám, cánh dài : $1$ thân đen, cánh cụt.',
          ],
        },
        {
          type: 'p',
          text: 'Giải thích: F1 đồng loạt thân xám, cánh dài nên thân xám (B) trội so với thân đen (b), cánh dài (V) trội so với cánh cụt (v). Ruồi cái thân đen, cánh cụt đồng hợp lặn chỉ cho một loại giao tử $bv$, nên tỉ lệ kiểu hình ở Fa phản ánh tỉ lệ các loại giao tử của ruồi đực F1.',
        },
        {
          type: 'list',
          items: [
            'Nếu hai cặp gene nằm trên hai cặp NST khác nhau (phân li độc lập), ruồi đực F1 BbVv cho $4$ loại giao tử ngang nhau và Fa có $4$ kiểu hình tỉ lệ $1 : 1 : 1 : 1$.',
            'Thực tế Fa chỉ có $2$ kiểu hình tỉ lệ $1 : 1$: ruồi đực F1 chỉ cho $2$ loại giao tử $BV$ và $bv$. Thân xám luôn đi cùng cánh dài, thân đen luôn đi cùng cánh cụt.',
            'Vậy hai gene B và V cùng nằm trên một NST, hai gene b và v cùng nằm trên NST tương đồng còn lại; chúng phân li cùng nhau trong giảm phân và tổ hợp cùng nhau trong thụ tinh.',
          ],
        },
        {
          type: 'p',
          text: 'Kiểu gene của các gene liên kết được viết theo từng NST: $\\dfrac{BV}{bv}$ nghĩa là một NST mang B và V, NST tương đồng với nó mang b và v. Sơ đồ lai:',
        },
        {
          type: 'table',
          caption: 'Sơ đồ lai giải thích thí nghiệm của Morgan',
          head: ['Thế hệ', 'Kiểu gene', 'Giao tử'],
          rows: [
            [
              'P (thuần chủng)',
              '$\\dfrac{BV}{BV}$ (xám, dài) × $\\dfrac{bv}{bv}$ (đen, cụt)',
              '$BV$ ; $bv$',
            ],
            ['F1', '$\\dfrac{BV}{bv}$ ($100\\%$ xám, dài)', '—'],
            [
              'Lai phân tích',
              '♂ $\\dfrac{BV}{bv}$ × ♀ $\\dfrac{bv}{bv}$',
              '♂: $BV$, $bv$ ; ♀: $bv$',
            ],
            ['Fa', '$1 \\, \\dfrac{BV}{bv}$ (xám, dài) : $1 \\, \\dfrac{bv}{bv}$ (đen, cụt)', '—'],
          ],
        },
      ],
    },
    {
      heading: 'Di truyền liên kết',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Di truyền liên kết',
          text: 'Di truyền liên kết là hiện tượng các gene cùng nằm trên một NST có xu hướng di truyền cùng nhau trong quá trình giảm phân tạo giao tử, làm cho một nhóm tính trạng luôn được di truyền cùng nhau.',
        },
        {
          type: 'p',
          text: 'Mỗi NST mang nhiều gene. Các gene cùng nằm trên một NST tạo thành một nhóm gene liên kết, nên số nhóm gene liên kết của một loài bằng số NST trong bộ đơn bội ($n$) của loài đó. Ví dụ: ruồi giấm có $n = 4$ nên có $4$ nhóm gene liên kết.',
        },
        {
          type: 'table',
          caption: 'So sánh phân li độc lập và di truyền liên kết (hai cặp gene)',
          head: ['Đặc điểm', 'Phân li độc lập', 'Di truyền liên kết'],
          rows: [
            [
              'Vị trí các gene',
              'Trên các cặp NST tương đồng khác nhau',
              'Trên cùng một cặp NST tương đồng',
            ],
            [
              'Sự phân li của các gene',
              'Phân li độc lập, tổ hợp tự do trong giảm phân và thụ tinh',
              'Phân li cùng nhau, tổ hợp cùng nhau',
            ],
            [
              'Số loại giao tử của cơ thể dị hợp hai cặp gene',
              '$4$ loại, tỉ lệ ngang nhau',
              '$2$ loại (khi liên kết hoàn toàn)',
            ],
            [
              'Kết quả lai phân tích',
              '$4$ kiểu hình, tỉ lệ $1 : 1 : 1 : 1$',
              '$2$ kiểu hình, tỉ lệ $1 : 1$',
            ],
            ['Biến dị tổ hợp', 'Tạo nhiều biến dị tổ hợp', 'Hạn chế biến dị tổ hợp'],
          ],
        },
      ],
    },
    {
      heading: 'Ý nghĩa của di truyền liên kết',
      blocks: [
        {
          type: 'list',
          items: [
            'Di truyền liên kết hạn chế sự xuất hiện biến dị tổ hợp, bảo đảm sự di truyền bền vững của từng nhóm tính trạng được quy định bởi các gene trên cùng một NST.',
            'Trong chọn giống, người ta có thể chọn được những nhóm tính trạng tốt luôn đi kèm với nhau, ví dụ đưa các gene có lợi (kháng thuốc diệt cỏ, kháng sâu, năng suất cao, giàu dinh dưỡng) vào cùng một NST để chúng được di truyền cùng nhau.',
            'Một đoạn DNA nằm gần và liên kết với gene có tính trạng mong muốn có thể dùng làm chỉ thị phân tử: phát hiện đoạn DNA đó là biết cây mang gene cần chọn. Ví dụ: chọn sớm cây lúa mang gene kháng bệnh đạo ôn ngay từ giai đoạn cây non.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hai quy luật bổ sung cho nhau',
          text: 'Phân li độc lập tạo ra nhiều biến dị tổ hợp, làm sinh vật đa dạng; di truyền liên kết giữ các nhóm tính trạng ổn định qua các thế hệ. Gene nằm trên các NST khác nhau thì phân li độc lập, gene nằm trên cùng một NST thì di truyền liên kết.',
        },
      ],
    },
  ],
  explore: {
    title: 'Hai bảng Punnett song song',
    instruction:
      'Chọn phép lai, dự đoán tỉ lệ kiểu hình khi hai gene nằm trên cùng một NST, rồi so sánh hai bảng: bảng trái coi hai gene nằm trên hai cặp NST khác nhau, bảng phải là trường hợp thật của ruồi giấm, hai gene cùng nằm trên một NST. Đếm số loại giao tử của ruồi đực F1 và số kiểu hình ở mỗi bảng.',
  },
  examples: [
    {
      problem:
        'Ở ruồi giấm, B: thân xám, b: thân đen; V: cánh dài, v: cánh cụt. Hai gene cùng nằm trên một NST và liên kết hoàn toàn. Lai ruồi đực $\\dfrac{BV}{bv}$ với ruồi cái $\\dfrac{bv}{bv}$. Xác định tỉ lệ kiểu gene, kiểu hình ở đời con.',
      steps: [
        'Ruồi đực $\\dfrac{BV}{bv}$ cho $2$ loại giao tử: $\\dfrac{1}{2} BV$ và $\\dfrac{1}{2} bv$.',
        'Ruồi cái $\\dfrac{bv}{bv}$ cho $1$ loại giao tử $bv$.',
        'Đời con: $\\dfrac{1}{2} \\dfrac{BV}{bv}$ (thân xám, cánh dài) và $\\dfrac{1}{2} \\dfrac{bv}{bv}$ (thân đen, cánh cụt).',
      ],
      answer:
        'Kiểu gene $1 \\, \\dfrac{BV}{bv} : 1 \\, \\dfrac{bv}{bv}$; kiểu hình $1$ thân xám, cánh dài : $1$ thân đen, cánh cụt.',
    },
    {
      problem:
        'Cho ruồi F1 $\\dfrac{BV}{bv}$ giao phối với nhau, giả sử các gene liên kết hoàn toàn ở cả hai giới. Tính tỉ lệ kiểu hình ở F2 và so sánh với trường hợp hai gene phân li độc lập.',
      steps: [
        'Mỗi bên F1 cho $2$ loại giao tử $BV$ và $bv$ ngang nhau, nên có $2 \\cdot 2 = 4$ tổ hợp.',
        'F2: $1 \\, \\dfrac{BV}{BV} : 2 \\, \\dfrac{BV}{bv} : 1 \\, \\dfrac{bv}{bv}$.',
        'Kiểu hình: $3$ thân xám, cánh dài : $1$ thân đen, cánh cụt.',
        'Nếu phân li độc lập, F1 BbVv × BbVv cho $16$ tổ hợp và $4$ kiểu hình tỉ lệ $9 : 3 : 3 : 1$.',
      ],
      answer:
        'Liên kết hoàn toàn: $3$ xám, dài : $1$ đen, cụt (chỉ $2$ kiểu hình), ít biến dị tổ hợp hơn hẳn tỉ lệ $9 : 3 : 3 : 1$ của phân li độc lập.',
    },
    {
      problem:
        'Đậu Hà Lan có $2n = 14$, ngô có $2n = 20$. Mỗi loài có bao nhiêu nhóm gene liên kết?',
      steps: [
        'Các gene trên cùng một NST tạo thành một nhóm liên kết; hai NST trong một cặp tương đồng mang cùng các gene.',
        'Số nhóm gene liên kết bằng số NST trong bộ đơn bội $n$.',
        'Đậu Hà Lan: $n = 14 : 2 = 7$; ngô: $n = 20 : 2 = 10$.',
      ],
      answer: 'Đậu Hà Lan có $7$ nhóm gene liên kết, ngô có $10$ nhóm gene liên kết.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Di truyền liên kết là hiện tượng',
      options: [
        'các gene cùng nằm trên một NST có xu hướng di truyền cùng nhau',
        'các gene nằm trên các NST khác nhau phân li độc lập với nhau',
        'gene nằm trên NST giới tính di truyền theo giới tính',
        'một gene quy định nhiều tính trạng',
      ],
      answer: 0,
      hints: ['"Liên kết" ở đây là liên kết giữa các gene trên cùng một NST.'],
      solution:
        'Di truyền liên kết là hiện tượng các gene cùng nằm trên một NST có xu hướng di truyền cùng nhau trong giảm phân.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm của Morgan, lai phân tích ruồi đực F1 thân xám, cánh dài thu được Fa có tỉ lệ kiểu hình',
      options: [
        '$1$ thân xám, cánh dài : $1$ thân đen, cánh cụt',
        '$1$ thân xám, cánh dài : $1$ thân xám, cánh cụt : $1$ thân đen, cánh dài : $1$ thân đen, cánh cụt',
        '$3$ thân xám, cánh dài : $1$ thân đen, cánh cụt',
        '$100\\%$ thân xám, cánh dài',
      ],
      answer: 0,
      hints: ['Ruồi đực F1 chỉ cho hai loại giao tử.'],
      solution: 'Fa có $2$ kiểu hình tỉ lệ $1 : 1$: thân xám, cánh dài và thân đen, cánh cụt.',
    },
    {
      type: 'number',
      prompt:
        'Cơ thể có kiểu gene $\\dfrac{BV}{bv}$, các gene liên kết hoàn toàn, cho bao nhiêu loại giao tử?',
      answer: 2,
      hints: ['Mỗi giao tử nhận một trong hai NST của cặp tương đồng.'],
      solution: 'Giao tử nhận NST mang $BV$ hoặc NST mang $bv$: có $2$ loại giao tử.',
    },
    {
      type: 'number',
      prompt:
        'Cơ thể có kiểu gene BbVv, hai cặp gene nằm trên hai cặp NST khác nhau, cho bao nhiêu loại giao tử?',
      answer: 4,
      hints: ['Mỗi cặp gene phân li độc lập với cặp kia.'],
      solution: '$2 \\cdot 2 = 4$ loại giao tử: BV, Bv, bV, bv.',
    },
    {
      type: 'number',
      prompt: 'Ruồi giấm có $2n = 8$. Ruồi giấm có bao nhiêu nhóm gene liên kết?',
      answer: 4,
      hints: ['Số nhóm gene liên kết bằng số NST trong bộ đơn bội.'],
      solution: '$n = 8 : 2 = 4$ nhóm gene liên kết.',
    },
    {
      type: 'number',
      prompt: 'Lúa có $2n = 24$. Lúa có bao nhiêu nhóm gene liên kết?',
      answer: 12,
      hints: ['Tính bộ NST đơn bội của lúa.'],
      solution: '$n = 24 : 2 = 12$ nhóm gene liên kết.',
    },
    {
      type: 'choice',
      prompt: 'Morgan dùng ruồi cái thân đen, cánh cụt để lai phân tích ruồi đực F1 vì',
      options: [
        'ruồi cái đồng hợp lặn chỉ cho một loại giao tử $bv$, nên kiểu hình ở Fa phản ánh các loại giao tử của ruồi đực F1',
        'ruồi cái thân đen, cánh cụt có sức sống mạnh nhất',
        'tính trạng thân đen, cánh cụt là tính trạng trội',
        'ruồi cái cho bốn loại giao tử ngang nhau',
      ],
      answer: 0,
      hints: ['Cơ thể đồng hợp lặn cho mấy loại giao tử?'],
      solution:
        'Ruồi cái $\\dfrac{bv}{bv}$ chỉ cho giao tử $bv$, không che lấp allele nào của ruồi đực, nên số kiểu hình và tỉ lệ ở Fa đúng bằng số loại và tỉ lệ giao tử của ruồi đực F1.',
    },
    {
      type: 'choice',
      prompt:
        'Cho ruồi F1 $\\dfrac{BV}{bv}$ giao phối với nhau, các gene liên kết hoàn toàn. Tỉ lệ kiểu hình ở F2 là',
      options: [
        '$3$ thân xám, cánh dài : $1$ thân đen, cánh cụt',
        '$9 : 3 : 3 : 1$',
        '$1$ thân xám, cánh dài : $1$ thân đen, cánh cụt',
        '$1 : 2 : 1$',
      ],
      answer: 0,
      hints: ['Mỗi bên cho $2$ loại giao tử $BV$ và $bv$; lập bảng $2 \\times 2$.'],
      solution:
        'F2: $1 \\, \\dfrac{BV}{BV} : 2 \\, \\dfrac{BV}{bv} : 1 \\, \\dfrac{bv}{bv}$, nên kiểu hình $3$ thân xám, cánh dài : $1$ thân đen, cánh cụt.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        'Gene nằm trên các cặp NST khác nhau thì phân li độc lập.',
        'Di truyền liên kết hạn chế sự xuất hiện biến dị tổ hợp.',
        'Phân li độc lập tạo ra nhiều biến dị tổ hợp hơn di truyền liên kết.',
        'Các gene trên cùng một NST luôn phân li độc lập với nhau.',
        'Mỗi NST chỉ mang một gene.',
      ],
      answers: [0, 1, 2],
      hints: ['Ruồi giấm có $4$ cặp NST nhưng hàng nghìn gene.'],
      solution:
        'Đúng: gene trên các cặp NST khác nhau phân li độc lập và tạo nhiều biến dị tổ hợp; di truyền liên kết hạn chế biến dị tổ hợp. Sai: các gene trên cùng một NST có xu hướng di truyền cùng nhau; mỗi NST mang rất nhiều gene.',
    },
    {
      type: 'choice',
      prompt: 'Trong chọn giống, di truyền liên kết giúp người ta',
      options: [
        'chọn được những nhóm tính trạng tốt luôn được di truyền cùng nhau',
        'tạo ra nhiều biến dị tổ hợp mới ở mỗi thế hệ',
        'làm tăng số lượng NST của giống',
        'làm mọi gene phân li độc lập',
      ],
      answer: 0,
      hints: ['Gene liên kết thì đi cùng nhau qua các thế hệ.'],
      solution:
        'Nhờ di truyền liên kết, các gene có lợi nằm trên cùng một NST được di truyền cùng nhau, nên người ta chọn được những nhóm tính trạng tốt đi kèm với nhau.',
    },
  ],
  takeaways: [
    'Thí nghiệm của Morgan: lai phân tích ruồi đực F1 thân xám, cánh dài cho Fa $1$ thân xám, cánh dài : $1$ thân đen, cánh cụt, không phải $1 : 1 : 1 : 1$.',
    'Di truyền liên kết là hiện tượng các gene cùng nằm trên một NST có xu hướng di truyền cùng nhau; kiểu gene viết theo từng NST, ví dụ $\\dfrac{BV}{bv}$.',
    'Cơ thể $\\dfrac{BV}{bv}$ (liên kết hoàn toàn) cho $2$ loại giao tử; cơ thể BbVv phân li độc lập cho $4$ loại giao tử.',
    'Số nhóm gene liên kết bằng số NST trong bộ đơn bội $n$ (ruồi giấm $4$ nhóm).',
    'Di truyền liên kết hạn chế biến dị tổ hợp, giữ ổn định từng nhóm tính trạng; được ứng dụng để chọn nhóm tính trạng tốt và làm chỉ thị phân tử trong chọn giống.',
  ],
};
