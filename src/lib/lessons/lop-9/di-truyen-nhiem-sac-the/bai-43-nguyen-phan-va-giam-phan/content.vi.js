/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên phân tạo hai tế bào con có bộ NST 2n giống tế bào mẹ; giảm phân tạo bốn tế bào con có bộ NST n; diễn biến các kì, ý nghĩa và so sánh hai quá trình.',
  intro:
    'Cơ thể em lớn lên từ một hợp tử duy nhất. Mỗi ngày, hàng tỉ tế bào mới được tạo ra để em lớn lên và thay thế các tế bào da, tế bào máu đã già. Vì sao mọi tế bào mới đều có đúng $46$ NST như tế bào ban đầu, trong khi trứng và tinh trùng lại chỉ có $23$ NST? Trong bài này, em sẽ điều khiển từng kì của nguyên phân và giảm phân và đếm số NST ở mỗi kì.',
  objectives: [
    'Nêu được khái niệm nguyên phân; mô tả được diễn biến của NST qua các kì của nguyên phân.',
    'Nêu được khái niệm giảm phân; mô tả được diễn biến của NST qua các kì của giảm phân I và giảm phân II.',
    'Tính được số tế bào con và số NST, trạng thái NST trong mỗi tế bào ở các kì.',
    'So sánh được nguyên phân và giảm phân; nêu được ý nghĩa của hai quá trình và mối quan hệ giữa nguyên phân, giảm phân và thụ tinh.',
  ],
  sections: [
    {
      heading: 'Nguyên phân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên phân',
          text: 'Nguyên phân là hình thức phân bào của tế bào nhân thực, từ một tế bào mẹ tạo ra hai tế bào con có bộ NST giống nhau và giống hệt tế bào mẹ. Nguyên phân xảy ra ở tế bào sinh dưỡng và tế bào sinh dục sơ khai (tế bào mầm sinh dục).',
        },
        {
          type: 'p',
          text: 'Trước khi phân bào, ở kì trung gian, mỗi NST nhân đôi thành một NST kép. Quá trình nguyên phân gồm phân chia nhân (bốn kì) và phân chia tế bào chất (diễn ra ở kì cuối).',
        },
        {
          type: 'table',
          caption: 'Diễn biến của NST trong nguyên phân (tế bào mẹ có bộ NST $2n$)',
          head: ['Kì', 'Hoạt động của NST', 'Số NST trong tế bào'],
          rows: [
            ['Kì đầu', 'NST kép tiếp tục co xoắn', '$2n$ NST kép'],
            [
              'Kì giữa',
              'NST kép co xoắn cực đại, xếp thành một hàng trên mặt phẳng xích đạo',
              '$2n$ NST kép',
            ],
            [
              'Kì sau',
              'Mỗi NST kép tách nhau ở tâm động thành hai NST đơn, đi về hai cực',
              '$4n$ NST đơn',
            ],
            [
              'Kì cuối',
              'NST dãn xoắn; tế bào chất phân chia tạo hai tế bào con',
              '$2n$ NST đơn (mỗi tế bào con)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết quả và ý nghĩa',
          text: 'Từ một tế bào mẹ $2n$ tạo ra hai tế bào con có bộ NST $2n$ giống hệt tế bào mẹ. Nhờ nguyên phân, cơ thể đa bào sinh trưởng, phát triển và thay thế các tế bào già, tổn thương; ở sinh vật sinh sản vô tính, nguyên phân tạo ra thế hệ con mang vật chất di truyền giống cơ thể mẹ. Một tế bào nguyên phân liên tiếp $k$ lần tạo ra $2^k$ tế bào con.',
        },
      ],
    },
    {
      heading: 'Giảm phân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Giảm phân',
          text: 'Giảm phân là hình thức phân bào của tế bào sinh dục ở giai đoạn chín, từ một tế bào mẹ $2n$ tạo ra bốn tế bào con có bộ NST $n$ (giảm đi một nửa), các tế bào con có tổ hợp NST khác nhau.',
        },
        {
          type: 'p',
          text: 'NST chỉ nhân đôi một lần ở kì trung gian trước giảm phân I, nhưng tế bào phân chia hai lần liên tiếp: giảm phân I và giảm phân II. Vì vậy số NST trong mỗi tế bào con giảm đi một nửa.',
        },
        {
          type: 'table',
          caption: 'Diễn biến của NST trong giảm phân (tế bào mẹ có bộ NST $2n$)',
          head: ['Kì', 'Hoạt động của NST', 'Số NST trong mỗi tế bào'],
          rows: [
            [
              'Kì đầu I',
              'NST kép co xoắn; các NST kép tương đồng tiếp hợp và có thể trao đổi chéo',
              '$2n$ NST kép',
            ],
            [
              'Kì giữa I',
              'Các cặp NST kép tương đồng xếp thành hai hàng trên mặt phẳng xích đạo',
              '$2n$ NST kép',
            ],
            ['Kì sau I', 'Mỗi NST kép trong cặp tương đồng phân li về một cực', '$2n$ NST kép'],
            ['Kì cuối I', 'Tạo hai tế bào con', '$n$ NST kép'],
            ['Kì đầu II', 'NST kép co xoắn (không nhân đôi NST)', '$n$ NST kép'],
            ['Kì giữa II', 'NST kép xếp thành một hàng trên mặt phẳng xích đạo', '$n$ NST kép'],
            [
              'Kì sau II',
              'Mỗi NST kép tách ở tâm động thành hai NST đơn đi về hai cực',
              '$2n$ NST đơn',
            ],
            ['Kì cuối II', 'Tạo bốn tế bào con', '$n$ NST đơn'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ý nghĩa của giảm phân',
          text: 'Giảm phân tạo ra giao tử mang bộ NST đơn bội $n$; qua thụ tinh, giao tử đực $n$ kết hợp với giao tử cái $n$ khôi phục bộ NST $2n$ trong hợp tử. Nhờ giảm phân và thụ tinh, bộ NST $2n$ đặc trưng của loài sinh sản hữu tính được duy trì ổn định qua các thế hệ. Trao đổi chéo, sự phân li độc lập và tổ hợp ngẫu nhiên của các NST tạo ra nhiều loại giao tử khác nhau, là nguồn biến dị tổ hợp cho tiến hoá và chọn giống.',
        },
      ],
    },
    {
      heading: 'So sánh nguyên phân và giảm phân',
      blocks: [
        {
          type: 'table',
          head: ['Đặc điểm', 'Nguyên phân', 'Giảm phân'],
          rows: [
            [
              'Loại tế bào',
              'Tế bào sinh dưỡng, tế bào sinh dục sơ khai',
              'Tế bào sinh dục ở giai đoạn chín',
            ],
            ['Số lần nhân đôi NST', '$1$ lần', '$1$ lần'],
            ['Số lần phân bào', '$1$ lần', '$2$ lần liên tiếp'],
            ['Tiếp hợp, trao đổi chéo', 'Không xảy ra', 'Có thể xảy ra ở kì đầu I'],
            [
              'NST kép ở kì giữa',
              'Xếp một hàng',
              'Kì giữa I: xếp hai hàng (theo cặp tương đồng); kì giữa II: xếp một hàng',
            ],
            [
              'Kết quả',
              '$2$ tế bào con $2n$ giống nhau và giống tế bào mẹ',
              '$4$ tế bào con $n$ có tổ hợp NST khác nhau',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ở sinh vật sinh sản hữu tính, ba quá trình phối hợp với nhau: giảm phân tạo giao tử $n$, thụ tinh tạo hợp tử $2n$, nguyên phân giúp hợp tử phát triển thành cơ thể mang bộ NST $2n$ đặc trưng của loài.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Sơ đồ',
          text: 'Cơ thể $2n$ —(giảm phân)→ giao tử $n$ —(thụ tinh)→ hợp tử $2n$ —(nguyên phân)→ cơ thể $2n$.',
        },
      ],
    },
  ],
  explore: {
    title: 'Điều khiển từng kì của phân bào',
    instruction:
      'Chọn nguyên phân hoặc giảm phân và bộ NST của tế bào mẹ, rồi bấm "Kì tiếp theo" để đi qua từng kì; theo dõi số tế bào, số NST và trạng thái đơn hay kép. Bật "Dự đoán" để tự đoán số NST trước khi xem. Trong giảm phân, ở kì giữa I hãy đổi cách xếp các cặp NST tương đồng hoặc bật trao đổi chéo, rồi so sánh các giao tử tạo thành.',
  },
  examples: [
    {
      problem:
        'Một tế bào sinh dưỡng của ruồi giấm ($2n = 8$) nguyên phân bình thường. Xác định số NST và trạng thái của NST trong tế bào ở kì giữa, kì sau và trong mỗi tế bào con ở cuối kì cuối.',
      steps: [
        'Ở kì trung gian, $8$ NST đã nhân đôi thành $8$ NST kép; ở kì giữa vẫn là $8$ NST kép.',
        'Ở kì sau, mỗi NST kép tách ở tâm động thành $2$ NST đơn: $8 \\cdot 2 = 16$ NST đơn.',
        'Ở kì cuối, $16$ NST đơn chia đều cho $2$ tế bào con: mỗi tế bào có $8$ NST đơn.',
      ],
      answer: 'Kì giữa: $8$ NST kép; kì sau: $16$ NST đơn; mỗi tế bào con: $8$ NST đơn.',
    },
    {
      problem:
        'Một tế bào sinh dục ở giai đoạn chín của người ($2n = 46$) giảm phân bình thường. Ở kì giữa I và kì giữa II, mỗi tế bào có bao nhiêu NST, ở trạng thái nào? Kết thúc giảm phân tạo ra mấy tế bào con, mỗi tế bào có bao nhiêu NST?',
      steps: [
        'Kì giữa I: NST đã nhân đôi nhưng tế bào chưa phân chia, có $46$ NST kép xếp thành hai hàng.',
        'Sau giảm phân I, mỗi tế bào con nhận một NST kép của mỗi cặp: kì giữa II mỗi tế bào có $23$ NST kép.',
        'Ở giảm phân II, các NST kép tách ở tâm động; kết thúc tạo $2 \\cdot 2 = 4$ tế bào con, mỗi tế bào có $n = 23$ NST đơn.',
      ],
      answer:
        'Kì giữa I: $46$ NST kép; kì giữa II: $23$ NST kép; tạo $4$ tế bào con, mỗi tế bào $23$ NST đơn.',
    },
    {
      problem:
        'Một tế bào của ruồi giấm ($2n = 8$) nguyên phân liên tiếp $3$ lần. Tính số tế bào con tạo thành và tổng số NST đơn trong các tế bào con.',
      steps: [
        'Mỗi lần nguyên phân, số tế bào tăng gấp đôi: $1 \\to 2 \\to 4 \\to 8$, tức là $2^3 = 8$ tế bào.',
        'Mỗi tế bào con có bộ NST $2n = 8$ giống tế bào mẹ.',
        'Tổng số NST: $8 \\cdot 8 = 64$ NST đơn.',
      ],
      answer: '$8$ tế bào con với tổng cộng $64$ NST đơn.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các kì của nguyên phân theo đúng thứ tự.',
      items: ['Kì sau', 'Kì đầu', 'Kì cuối', 'Kì giữa'],
      answer: [1, 3, 0, 2],
      hints: ['NST xếp thành hàng trên mặt phẳng xích đạo trước khi tách về hai cực.'],
      solution: 'Kì đầu → kì giữa → kì sau → kì cuối.',
    },
    {
      type: 'choice',
      prompt: 'Ở kì giữa của nguyên phân, NST',
      options: [
        'ở trạng thái kép, co xoắn cực đại, xếp thành một hàng trên mặt phẳng xích đạo',
        'ở trạng thái kép, xếp thành hai hàng trên mặt phẳng xích đạo',
        'ở trạng thái đơn, đang đi về hai cực của tế bào',
        'ở trạng thái đơn, dãn xoắn',
      ],
      answer: 0,
      hints: ['Xếp hai hàng là đặc điểm của kì giữa I trong giảm phân.'],
      solution:
        'Ở kì giữa nguyên phân, các NST kép co xoắn cực đại và xếp thành một hàng trên mặt phẳng xích đạo.',
    },
    {
      type: 'number',
      prompt: 'Ngô có $2n = 20$. Ở kì sau của nguyên phân, một tế bào ngô có bao nhiêu NST đơn?',
      answer: 40,
      hints: ['Ở kì sau, mỗi NST kép tách thành hai NST đơn nhưng tế bào chưa phân chia.'],
      solution: 'Có $20$ NST kép tách thành $20 \\cdot 2 = 40$ NST đơn ($4n$).',
    },
    {
      type: 'number',
      prompt:
        'Một tế bào ruồi giấm ($2n = 8$) giảm phân bình thường. Ở kì giữa II, mỗi tế bào có bao nhiêu NST kép?',
      answer: 4,
      hints: [
        'Sau giảm phân I, số NST trong mỗi tế bào đã giảm một nửa nhưng NST vẫn ở trạng thái kép.',
      ],
      solution: 'Sau giảm phân I mỗi tế bào có $n = 4$ NST kép; ở kì giữa II vẫn là $4$ NST kép.',
    },
    {
      type: 'number',
      prompt: 'Một tế bào nguyên phân liên tiếp $4$ lần. Có bao nhiêu tế bào con được tạo thành?',
      answer: 16,
      hints: ['Mỗi lần nguyên phân, số tế bào tăng gấp đôi.'],
      solution: '$2^4 = 16$ tế bào con.',
    },
    {
      type: 'number',
      prompt:
        '$5$ tế bào sinh dục ở giai đoạn chín cùng giảm phân bình thường. Có bao nhiêu tế bào con được tạo thành?',
      answer: 20,
      hints: ['Một tế bào giảm phân tạo ra mấy tế bào con?'],
      solution: 'Mỗi tế bào giảm phân tạo $4$ tế bào con: $5 \\cdot 4 = 20$ tế bào con.',
    },
    {
      type: 'number',
      prompt:
        'Ở người ($2n = 46$), một tế bào đang ở kì giữa I của giảm phân có bao nhiêu chromatid?',
      answer: 92,
      hints: ['Ở kì giữa I có $2n$ NST kép; mỗi NST kép gồm $2$ chromatid.'],
      solution: '$46$ NST kép, mỗi NST kép $2$ chromatid: $46 \\cdot 2 = 92$ chromatid.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm chỉ có ở giảm phân mà không có ở nguyên phân.',
      options: [
        'Các NST kép tương đồng tiếp hợp và có thể trao đổi chéo',
        'Gồm hai lần phân bào liên tiếp',
        'Các cặp NST kép tương đồng xếp thành hai hàng ở kì giữa',
        'NST nhân đôi ở kì trung gian',
        'NST kép tách nhau ở tâm động thành hai NST đơn',
      ],
      answers: [0, 1, 2],
      hints: [
        'Cả hai quá trình đều có NST nhân đôi và có NST kép tách ở tâm động (kì sau, kì sau II).',
      ],
      solution:
        'Chỉ giảm phân có tiếp hợp, trao đổi chéo, hai lần phân bào và cách xếp hai hàng ở kì giữa I. NST nhân đôi và NST kép tách ở tâm động có ở cả hai quá trình.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao tế bào con tạo ra sau giảm phân chỉ có bộ NST $n$?',
      options: [
        'Vì NST nhân đôi một lần nhưng tế bào phân chia hai lần liên tiếp',
        'Vì NST không nhân đôi trước giảm phân',
        'Vì NST nhân đôi hai lần và tế bào phân chia hai lần',
        'Vì một nửa số NST bị tiêu biến ở kì cuối',
      ],
      answer: 0,
      hints: ['Đếm số lần NST nhân đôi và số lần tế bào phân chia.'],
      solution:
        'NST chỉ nhân đôi một lần (trước giảm phân I) nhưng tế bào phân chia hai lần, nên mỗi tế bào con chỉ nhận một nửa số NST của tế bào mẹ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi quá trình với ý nghĩa của nó.',
      left: [
        'Nguyên phân',
        'Giảm phân kết hợp với thụ tinh',
        'Trao đổi chéo và phân li độc lập của NST',
      ],
      right: [
        'Giúp cơ thể đa bào sinh trưởng và thay thế tế bào già, tổn thương',
        'Duy trì bộ NST $2n$ đặc trưng của loài qua các thế hệ',
        'Tạo ra nhiều loại giao tử, là nguồn biến dị tổ hợp',
        'Làm tăng gấp đôi số NST của loài sau mỗi thế hệ',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Giao tử $n$ + giao tử $n$ → hợp tử $2n$.'],
      solution:
        'Nguyên phân: sinh trưởng, thay thế tế bào. Giảm phân và thụ tinh: duy trì bộ NST $2n$ qua các thế hệ. Trao đổi chéo, phân li độc lập: tạo nhiều loại giao tử, nguồn biến dị tổ hợp.',
    },
  ],
  takeaways: [
    'Nguyên phân: $1$ tế bào mẹ $2n$ → $2$ tế bào con $2n$ giống hệt mẹ; xảy ra ở tế bào sinh dưỡng và tế bào sinh dục sơ khai.',
    'Nguyên phân: kì giữa $2n$ NST kép xếp một hàng; kì sau $4n$ NST đơn; mỗi tế bào con $2n$ NST đơn. Nguyên phân $k$ lần tạo $2^k$ tế bào.',
    'Giảm phân: NST nhân đôi $1$ lần, phân bào $2$ lần; $1$ tế bào $2n$ → $4$ tế bào $n$ có tổ hợp NST khác nhau.',
    'Kì đầu I có tiếp hợp và có thể trao đổi chéo; kì giữa I các cặp tương đồng xếp hai hàng; kì sau I mỗi NST kép của cặp đi về một cực.',
    'Giảm phân + thụ tinh duy trì bộ NST $2n$ của loài; nguyên phân giúp hợp tử phát triển thành cơ thể.',
  ],
};
