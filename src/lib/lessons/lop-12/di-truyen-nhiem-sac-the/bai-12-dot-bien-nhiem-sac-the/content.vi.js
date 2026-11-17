/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đột biến nhiễm sắc thể gồm đột biến cấu trúc (mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn) và đột biến số lượng (lệch bội, đa bội): nguyên nhân, cơ chế phát sinh, hậu quả và vai trò.',
  intro:
    'Một em bé có tiếng khóc giống tiếng mèo kêu, một em bé khác có ba chiếc NST số 21, còn quả chuối nhà trồng thì không có hạt. Cả ba hiện tượng đều bắt nguồn từ những biến đổi của nhiễm sắc thể. Đó là những biến đổi nào?',
  objectives: [
    'Nêu được khái niệm đột biến nhiễm sắc thể và phân biệt đột biến cấu trúc với đột biến số lượng.',
    'Trình bày được nguyên nhân, cơ chế phát sinh và hậu quả của bốn dạng đột biến cấu trúc: mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn.',
    'Phân biệt được lệch bội và đa bội, tự đa bội và dị đa bội; viết được kí hiệu bộ NST của các thể đột biến.',
    'Giải thích được cơ chế hình thành thể lệch bội, thể đa bội và nêu được vai trò của đột biến NST trong tiến hoá, nghiên cứu di truyền và chọn giống.',
  ],
  sections: [
    {
      heading: 'Khái niệm đột biến nhiễm sắc thể',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đột biến nhiễm sắc thể',
          text: 'Đột biến nhiễm sắc thể là những biến đổi liên quan đến cấu trúc hoặc số lượng nhiễm sắc thể (NST) của một loài.',
        },
        {
          type: 'list',
          items: [
            'Đột biến cấu trúc NST: thay đổi cấu trúc của từng NST, gồm mất đoạn, lặp đoạn, đảo đoạn và chuyển đoạn.',
            'Đột biến số lượng NST: thay đổi số lượng NST, gồm lệch bội (thêm hoặc bớt một hay một vài NST) và đa bội (bộ NST tăng lên thành bội số của bộ đơn bội, lớn hơn $2n$).',
          ],
        },
      ],
    },
    {
      heading: 'Đột biến cấu trúc nhiễm sắc thể',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên nhân và cơ chế. Các tác nhân vật lí (tia X, tia gamma…), hoá học hoặc virus có thể làm đứt gãy cả hai mạch của phân tử DNA trong NST; các đoạn đứt nối lại theo cách khác thường hoặc không nối lại. Ngoài ra, trong giảm phân, sự trao đổi chéo không cân giữa các chromatid của cặp NST tương đồng cũng tạo ra mất đoạn và lặp đoạn.',
        },
        {
          type: 'table',
          caption: 'Bốn dạng đột biến cấu trúc NST (NST bình thường: ABC•DEFGH, • là tâm động)',
          head: ['Dạng', 'Cơ chế', 'Ví dụ kết quả', 'Ví dụ thực tế'],
          rows: [
            [
              'Mất đoạn',
              'Một đoạn NST (ở đầu mút hoặc giữa NST) bị đứt và tiêu biến',
              'ABC•DFGH (mất E)',
              'Mất một đoạn vai ngắn NST số 5 ở người gây hội chứng mèo kêu',
            ],
            [
              'Lặp đoạn',
              'Một đoạn NST được lặp lại một hay nhiều lần, thường do trao đổi chéo không cân',
              'ABC•DEFEFGH (lặp EF)',
              'Lặp đoạn trên NST X ở ruồi giấm làm mắt lồi thành mắt dẹt',
            ],
            [
              'Đảo đoạn',
              'Một đoạn NST bị đứt rồi quay $180^\\circ$ và nối lại; đoạn đảo có thể chứa hoặc không chứa tâm động',
              'ABC•DGFEH (đảo EFG)',
              'Đảo đoạn quanh tâm động NST số 9 ở người làm tăng nguy cơ sảy thai',
            ],
            [
              'Chuyển đoạn',
              'Một đoạn NST chuyển sang vị trí khác trên cùng NST hoặc sang NST khác không tương đồng; có chuyển đoạn tương hỗ và không tương hỗ',
              'ABC•DEFQR và MN•OPGH (trao đổi GH với QR)',
              'Chuyển đoạn tương hỗ giữa NST số 9 và số 22 gây ung thư máu; chuyển một phần NST 21 sang NST 14 gây hội chứng Down',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Mất đoạn làm mất gene, mất cân bằng hệ gene nên thường gây chết, giảm sức sống hoặc bất thụ.',
            'Lặp đoạn làm tăng số bản sao gene (tăng liều gene), có thể tăng hoặc giảm mức biểu hiện tính trạng.',
            'Đảo đoạn và chuyển đoạn không làm mất vật chất di truyền nhưng thay đổi vị trí và trật tự gene, có thể làm thay đổi mức hoạt động của gene. Chuyển đoạn nhỏ thường ít ảnh hưởng, chuyển đoạn lớn thường gây chết hoặc mất khả năng sinh sản; thể dị hợp mang đảo đoạn hay chuyển đoạn giảm khả năng sinh sản.',
          ],
        },
      ],
    },
    {
      heading: 'Đột biến số lượng nhiễm sắc thể: lệch bội',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lệch bội',
          text: 'Đột biến lệch bội là đột biến làm thay đổi số lượng NST ở một hoặc một số cặp NST tương đồng.',
        },
        {
          type: 'table',
          caption: 'Các thể lệch bội thường gặp ($2n$ là bộ NST lưỡng bội)',
          head: ['Thể lệch bội', 'Kí hiệu', 'Đặc điểm'],
          rows: [
            ['Thể không', '$2n - 2$', 'Mất cả hai NST của một cặp'],
            ['Thể một', '$2n - 1$', 'Một cặp chỉ còn một NST'],
            ['Thể một kép', '$2n - 1 - 1$', 'Hai cặp, mỗi cặp chỉ còn một NST'],
            ['Thể ba', '$2n + 1$', 'Một cặp có ba NST'],
            ['Thể bốn', '$2n + 2$', 'Một cặp có bốn NST'],
          ],
        },
        {
          type: 'p',
          text: 'Cơ chế. Trong giảm phân, một hay vài cặp NST không phân li tạo giao tử thừa NST ($n + 1$) và giao tử thiếu NST ($n - 1$). Giao tử $n + 1$ thụ tinh với giao tử bình thường $n$ tạo hợp tử $2n + 1$ (thể ba); giao tử $n - 1$ thụ tinh với giao tử $n$ tạo hợp tử $2n - 1$ (thể một). Sự không phân li của một cặp NST trong nguyên phân ở tế bào sinh dưỡng tạo thể khảm: một phần cơ thể mang tế bào lệch bội.',
        },
        {
          type: 'p',
          text: 'Hậu quả. Lệch bội làm mất cân bằng toàn bộ hệ gene nên thường giảm sức sống, giảm khả năng sinh sản hoặc gây chết. Ở người, hầu hết lệch bội NST thường gây chết từ giai đoạn thai; trường hợp sống sót hay gặp là ba NST số 21 (hội chứng Down), nguy cơ tăng theo tuổi mẹ. Lệch bội NST giới tính gây hội chứng Turner (XO, $2n = 45$), hội chứng Klinefelter (XXY, $2n = 47$); người có ba NST X (XXX) thường biểu hiện bình thường và có thể sinh sản.',
        },
      ],
    },
    {
      heading: 'Đột biến số lượng nhiễm sắc thể: đa bội',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đa bội',
          text: 'Đột biến đa bội là dạng đột biến làm tăng số bộ NST đơn bội của loài lên thành bội số lớn hơn $2n$, như $3n$, $4n$, $5n$…',
        },
        {
          type: 'list',
          items: [
            'Tự đa bội (đa bội cùng nguồn): các bộ NST đều của cùng một loài. Khi giảm phân, toàn bộ NST không phân li tạo giao tử $2n$; giao tử $2n$ kết hợp với giao tử $n$ tạo thể tam bội $3n$, hai giao tử $2n$ kết hợp tạo thể tứ bội $4n$. Thể tứ bội cũng có thể xuất hiện khi lần nguyên phân đầu tiên của hợp tử $2n$ không phân li toàn bộ NST.',
            'Dị đa bội (đa bội khác nguồn): lai xa hai loài rồi đa bội hoá con lai, tạo cơ thể mang bộ NST lưỡng bội của cả hai loài (thể song nhị bội). Ví dụ: cải bắp ($2n = 18$) lai cải củ ($2n = 18$) cho con lai có $18$ NST ($9$ của mỗi loài) bất thụ; đa bội hoá con lai tạo thể song nhị bội $36$ NST, hữu thụ.',
          ],
        },
        {
          type: 'p',
          text: 'Hậu quả. Thể đa bội có hàm lượng DNA tăng, tế bào to, cơ quan sinh dưỡng lớn, sinh trưởng mạnh, chống chịu tốt. Thể đa bội lẻ ($3n$, $5n$…) hầu như không tạo được giao tử bình thường nên thường bất thụ, được dùng tạo giống quả không hạt (chuối, dưa hấu, nho). Ở động vật, đa bội thường gây chết vì làm rối loạn cơ chế xác định giới tính.',
        },
        {
          type: 'table',
          caption: 'So sánh lệch bội và đa bội',
          head: ['Tiêu chí', 'Lệch bội', 'Đa bội'],
          rows: [
            ['Số NST thay đổi', 'Ở một hoặc một số cặp', 'Ở tất cả các cặp (cả bộ NST)'],
            [
              'Cơ chế',
              'Một hay vài cặp NST không phân li',
              'Toàn bộ NST không phân li, hoặc lai xa kèm đa bội hoá',
            ],
            [
              'Hậu quả thường gặp',
              'Mất cân bằng hệ gene, thường có hại',
              'Cơ quan sinh dưỡng to; đa bội lẻ bất thụ',
            ],
          ],
        },
        { type: 'widget', name: 'so-luong' },
      ],
    },
    {
      heading: 'Vai trò của đột biến nhiễm sắc thể',
      blocks: [
        {
          type: 'list',
          items: [
            'Tiến hoá: đột biến cấu trúc góp phần sắp xếp lại hệ gene; lặp đoạn tạo ra các gene mới (ví dụ họ gene hemoglobin ở người). NST số 2 của người hình thành do hai NST của tổ tiên dung hợp, vì vậy người có $46$ NST còn tinh tinh có $48$. Đa bội hoá đóng vai trò quan trọng trong hình thành loài mới ở thực vật.',
            'Nghiên cứu di truyền: dùng mất đoạn, chuyển đoạn, đảo đoạn để xác định vị trí của gene trên NST; chẩn đoán các bệnh, hội chứng do đột biến NST.',
            'Chọn giống: gây mất đoạn nhỏ để loại bỏ gene không mong muốn; chuyển đoạn để chuyển gene có lợi vào cùng một NST; dùng các con đực mang chuyển đoạn hay đảo đoạn giảm khả năng sinh sản để phòng trừ sâu hại; tạo giống cây đa bội cho năng suất cao, quả không hạt.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Phần lớn đột biến NST có hại vì chúng làm thay đổi số lượng, vị trí hoặc trật tự của nhiều gene cùng lúc, phá vỡ sự cân bằng của cả hệ gene.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tạo các dạng đột biến cấu trúc',
    instruction:
      'Chạm gene đầu và gene cuối để chọn một đoạn trên nhiễm sắc thể vàng, rồi chọn Mất đoạn, Lặp đoạn, Đảo đoạn hoặc Chuyển đoạn. So sánh với nhiễm sắc thể ban đầu: số gene và trật tự gene thay đổi thế nào?',
  },
  examples: [
    {
      problem:
        'Một NST bình thường có trình tự gene ABC•DEFGH (• là tâm động). Xác định dạng đột biến của mỗi NST sau: (1) ABC•DEFGFGH; (2) AB•CDEFGH; (3) ABC•DEH.',
      steps: [
        '(1) So với ABC•DEFGH, đoạn FG xuất hiện hai lần, số gene tăng: lặp đoạn FG.',
        '(2) Các gene vẫn đủ, nhưng C chuyển sang phía sau tâm động: đoạn gồm gene C và tâm động bị đứt ra, quay $180^\\circ$ rồi nối lại ("C•" thành "•C"). Đoạn đảo chứa tâm động: đảo đoạn.',
        '(3) Thiếu các gene F, G, số gene giảm từ $8$ còn $6$: mất đoạn FG.',
      ],
      answer: '(1) lặp đoạn; (2) đảo đoạn chứa tâm động; (3) mất đoạn.',
    },
    {
      problem:
        'Ruồi giấm có $2n = 8$. Tính số NST trong tế bào sinh dưỡng của thể một, thể ba, thể bốn, thể không, thể tam bội và thể tứ bội.',
      steps: [
        'Thể một: $2n - 1 = 8 - 1 = 7$. Thể ba: $2n + 1 = 9$.',
        'Thể bốn: $2n + 2 = 10$. Thể không: $2n - 2 = 6$.',
        'Bộ đơn bội $n = 4$. Thể tam bội: $3n = 12$; thể tứ bội: $4n = 16$.',
      ],
      answer: 'Lần lượt $7$, $9$, $10$, $6$, $12$ và $16$ NST.',
    },
    {
      problem:
        'Giải thích cơ chế hình thành người mắc hội chứng Down do lệch bội và cây dưa hấu tam bội.',
      steps: [
        'Down: ở người mẹ (hoặc bố), cặp NST số 21 không phân li trong giảm phân tạo giao tử mang hai NST 21 ($n + 1$). Giao tử này thụ tinh với giao tử bình thường ($n$) tạo hợp tử $2n + 1$ có ba NST 21.',
        'Dưa hấu tam bội: gây đột biến tạo cây tứ bội $4n$ cho giao tử $2n$; lai với cây lưỡng bội $2n$ cho giao tử $n$.',
        'Giao tử $2n$ kết hợp giao tử $n$ tạo hợp tử $3n$; cây $3n$ bất thụ nên quả không hạt.',
      ],
      answer:
        'Down: giao tử $n + 1$ × giao tử $n$ → $2n + 1$. Tam bội: giao tử $2n$ × giao tử $n$ → $3n$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'NST ban đầu có trình tự ABC•DEFGH bị đột biến thành ABC•DEFEFGH. Đây là dạng đột biến nào?',
      options: ['Lặp đoạn', 'Mất đoạn', 'Đảo đoạn', 'Chuyển đoạn'],
      answer: 0,
      hints: ['Đếm số gene trước và sau đột biến.', 'Đoạn EF xuất hiện mấy lần?'],
      solution: 'Đoạn EF xuất hiện hai lần, số gene tăng từ $8$ lên $10$: đây là lặp đoạn.',
    },
    {
      type: 'choice',
      prompt:
        'NST ban đầu có trình tự ABC•DEFGH bị đột biến thành ABC•DGFEH. Đây là dạng đột biến nào?',
      options: ['Đảo đoạn không chứa tâm động', 'Đảo đoạn chứa tâm động', 'Lặp đoạn', 'Mất đoạn'],
      answer: 0,
      hints: [
        'Số gene có thay đổi không?',
        'Đoạn EFG đã thành GFE; tâm động có nằm trong đoạn đó không?',
      ],
      solution:
        'Vẫn đủ $8$ gene, chỉ đoạn EFG quay ngược thành GFE ở cùng một cánh, không chứa tâm động: đảo đoạn không chứa tâm động.',
    },
    {
      type: 'number',
      prompt: 'Lúa có $2n = 24$. Tế bào sinh dưỡng của thể ba ở lúa có bao nhiêu NST?',
      answer: 25,
      unit: 'NST',
      hints: ['Thể ba có kí hiệu $2n + 1$.'],
      solution: 'Thể ba: $2n + 1 = 24 + 1 = 25$ NST.',
    },
    {
      type: 'number',
      prompt: 'Cà chua có $2n = 24$. Tế bào sinh dưỡng của cây cà chua tam bội có bao nhiêu NST?',
      answer: 36,
      unit: 'NST',
      hints: ['Tìm bộ đơn bội $n$ trước.', 'Tam bội là $3n$.'],
      solution: '$n = 12$, nên thể tam bội có $3n = 3 \\cdot 12 = 36$ NST.',
    },
    {
      type: 'number',
      prompt:
        'Đậu Hà Lan có $2n = 14$. Có tối đa bao nhiêu loại thể một (mỗi loại thiếu một NST ở một cặp khác nhau)?',
      answer: 7,
      hints: ['Thể một có thể xảy ra ở bất kì cặp NST nào.', 'Loài có bao nhiêu cặp NST?'],
      solution:
        'Loài có $n = 7$ cặp NST; mỗi cặp có thể bị thiếu một chiếc, nên có tối đa $7$ loại thể một.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hội chứng ở người với nguyên nhân của nó.',
      left: ['Hội chứng Down', 'Hội chứng Turner', 'Hội chứng Klinefelter', 'Hội chứng mèo kêu'],
      right: [
        'Ba NST số 21',
        'Chỉ có một NST giới tính X (XO)',
        'Cặp NST giới tính XXY',
        'Mất đoạn vai ngắn NST số 5',
        'Ba NST số 13',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Down, Turner, Klinefelter đều là lệch bội; hội chứng mèo kêu là đột biến cấu trúc.'],
      solution:
        'Down: ba NST 21 ($2n + 1$). Turner: XO ($2n - 1$). Klinefelter: XXY ($2n + 1$). Mèo kêu: mất đoạn vai ngắn NST số 5.',
    },
    {
      type: 'multi',
      prompt: 'Những dạng đột biến nào không làm thay đổi số lượng gene trên NST bị đột biến?',
      options: ['Đảo đoạn', 'Chuyển đoạn trong cùng một NST', 'Mất đoạn', 'Lặp đoạn'],
      answers: [0, 1],
      hints: ['Dạng nào chỉ đổi chỗ các gene có sẵn?'],
      solution:
        'Đảo đoạn và chuyển đoạn trong cùng một NST chỉ thay đổi vị trí, trật tự gene; mất đoạn làm giảm, lặp đoạn làm tăng số gene.',
    },
    {
      type: 'choice',
      prompt:
        'Cải bắp ($2n = 18$) lai với cải củ ($2n = 18$), con lai được đa bội hoá thành thể song nhị bội. Thể song nhị bội có bao nhiêu NST và thuộc dạng nào?',
      options: [
        '$36$ NST, dị đa bội',
        '$18$ NST, tự đa bội',
        '$36$ NST, tự đa bội',
        '$27$ NST, dị đa bội',
      ],
      answer: 0,
      hints: [
        'Con lai nhận một bộ đơn bội ($9$ NST) của mỗi loài.',
        'Đa bội hoá làm gấp đôi bộ NST của con lai; các bộ NST đến từ hai loài khác nhau.',
      ],
      solution:
        'Con lai có $9 + 9 = 18$ NST; đa bội hoá cho $36$ NST gồm bộ lưỡng bội của cả hai loài: thể dị đa bội (song nhị bội).',
    },
    {
      type: 'choice',
      prompt:
        'Ở một loài, một tế bào sinh dục có cặp NST số 1 không phân li trong giảm phân I, các cặp khác phân li bình thường. Giao tử tạo ra có thể là',
      options: ['$n + 1$ và $n - 1$', '$2n$ và $n$', '$n$ và $n$', '$3n$ và $n$'],
      answer: 0,
      hints: ['Cả hai NST của cặp số 1 đi về cùng một cực.'],
      solution:
        'Một cực nhận cả hai NST số 1, cực kia không nhận chiếc nào: giao tử thừa một NST ($n + 1$) và giao tử thiếu một NST ($n - 1$).',
    },
    {
      type: 'choice',
      prompt: 'Vì sao thể tam bội như chuối, dưa hấu $3n$ thường không có hạt?',
      options: [
        'Mỗi nhóm có ba NST tương đồng nên giảm phân không tạo được giao tử bình thường',
        'Thể tam bội không ra hoa',
        'Thể tam bội mất gene quy định hình thành hạt',
        'Thể tam bội chỉ sinh sản bằng bào tử',
      ],
      answer: 0,
      hints: ['Nghĩ đến sự bắt cặp và phân li của ba NST tương đồng trong giảm phân.'],
      solution:
        'Ba NST tương đồng không chia đều về hai cực, giao tử mất cân bằng và hầu như không có sức sống, nên cây bất thụ, quả không hạt.',
    },
  ],
  takeaways: [
    'Đột biến NST là biến đổi về cấu trúc hoặc số lượng NST.',
    'Đột biến cấu trúc: mất đoạn, lặp đoạn (đổi số gene), đảo đoạn, chuyển đoạn (đổi vị trí, trật tự gene).',
    'Lệch bội thay đổi số NST ở một hay vài cặp ($2n \\pm 1$, $2n \\pm 2$…), do một hay vài cặp NST không phân li.',
    'Đa bội: tự đa bội ($3n$, $4n$) do cả bộ NST không phân li; dị đa bội do lai xa kèm đa bội hoá.',
    'Phần lớn đột biến NST có hại, nhưng chúng là nguồn nguyên liệu cho tiến hoá, nghiên cứu di truyền và chọn giống.',
  ],
};
