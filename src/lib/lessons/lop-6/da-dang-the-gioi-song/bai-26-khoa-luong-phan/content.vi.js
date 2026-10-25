/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khóa lưỡng phân là cách phân loại sinh vật dựa trên các đôi đặc điểm đối lập, mỗi lần chia một nhóm thành hai nhóm nhỏ hơn cho tới khi xác định được từng sinh vật.',
  intro:
    'Trong trò chơi "Đoán con vật", người chơi chỉ được hỏi những câu trả lời "có" hoặc "không": Nó có xương sống không? Nó có cánh không? Sau vài câu hỏi khéo léo, ta đoán trúng con vật. Các nhà sinh học cũng làm như vậy để nhận ra một sinh vật: họ dùng khóa lưỡng phân.',
  objectives: [
    'Nêu được khái niệm khóa lưỡng phân.',
    'Nêu được các bước xây dựng khóa lưỡng phân.',
    'Xây dựng được khóa lưỡng phân cho một nhóm sinh vật và dùng khóa để xác định tên một sinh vật.',
  ],
  sections: [
    {
      heading: 'Khóa lưỡng phân là gì?',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khóa lưỡng phân',
          text: 'Khóa lưỡng phân là cách phân loại sinh vật dựa trên các đôi đặc điểm đối lập để chia chúng thành hai nhóm. "Lưỡng phân" nghĩa là chia đôi.',
        },
        {
          type: 'p',
          text: 'Mỗi bước của khóa là một cặp đặc điểm đối lập, đánh số như 1a và 1b: một sinh vật chỉ có thể đúng với một trong hai ý. Mỗi ý dẫn tới một cặp tiếp theo hoặc tới tên một sinh vật.',
        },
        {
          type: 'table',
          caption: 'Ví dụ khóa lưỡng phân cho năm loài động vật',
          head: ['Cặp', 'Đặc điểm', 'Dẫn tới'],
          rows: [
            ['1a', 'Có xương sống', 'Cặp 2'],
            ['1b', 'Không có xương sống', 'Cặp 3'],
            ['2a', 'Có vây, sống dưới nước', 'Cá chép'],
            ['2b', 'Không có vây', 'Cặp 4'],
            ['3a', 'Có chân', 'Châu chấu'],
            ['3b', 'Không có chân', 'Giun đất'],
            ['4a', 'Cơ thể phủ lông vũ', 'Chim bồ câu'],
            ['4b', 'Cơ thể không phủ lông vũ (phủ lông mao)', 'Con mèo'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chọn đặc điểm thế nào?',
          text: 'Cặp đặc điểm phải đối lập rõ ràng (có/không), dễ quan sát và không phụ thuộc cảm nhận của từng người. Những cặp như "lông đẹp / lông xấu" hay "to / nhỏ" không dùng được vì mỗi người đánh giá một khác.',
        },
      ],
    },
    {
      heading: 'Các bước xây dựng khóa lưỡng phân',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Quan sát và liệt kê các đặc điểm đặc trưng của từng sinh vật.',
            'Chọn một cặp đặc điểm đối lập để chia các sinh vật thành hai nhóm.',
            'Tiếp tục chọn cặp đặc điểm đối lập để chia mỗi nhóm thành hai nhóm nhỏ hơn, cho tới khi mỗi nhóm chỉ còn một sinh vật.',
          ],
        },
        {
          type: 'p',
          text: 'Mỗi lần chia, số nhóm tăng thêm một. Bắt đầu từ một nhóm và kết thúc khi có $n$ nhóm (mỗi nhóm một sinh vật), nên khóa lưỡng phân của $n$ sinh vật luôn có $n - 1$ cặp đặc điểm.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dễ nhầm',
          text: 'Một cặp đặc điểm chỉ chia được nhóm khi trong nhóm có sinh vật mang đặc điểm này và có sinh vật mang đặc điểm kia. Mèo và chim bồ câu đều có xương sống, nên cặp "có xương sống / không có xương sống" không tách được chúng; cần cặp khác như "phủ lông vũ / không phủ lông vũ".',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy dùng khóa có sẵn để tìm ra sinh vật bí ẩn, rồi tự dựng khóa cho một nhóm sinh vật.',
        },
      ],
    },
  ],
  explore: {
    title: 'Trình tạo khóa lưỡng phân',
    instruction:
      'Chế độ "Dùng khóa": đọc đặc điểm của sinh vật bí ẩn và chọn ý đúng ở mỗi cặp cho tới khi tìm ra tên nó. Chế độ "Tự dựng khóa": chọn các cặp đặc điểm đối lập để chia nhóm, cho tới khi mỗi nhóm chỉ còn một sinh vật.',
  },
  examples: [
    {
      problem: 'Xây dựng khóa lưỡng phân cho bốn loài: con chó, con gà, cá rô, giun đất.',
      steps: [
        'Liệt kê đặc điểm: chó có xương sống, có chân, phủ lông mao; gà có xương sống, có chân, phủ lông vũ; cá rô có xương sống, không có chân, có vây; giun đất không có xương sống, không có chân.',
        'Cặp 1 tách giun đất khỏi ba loài kia: 1a. Có xương sống → 2; 1b. Không có xương sống → giun đất.',
        'Cặp 2 tách cá rô: 2a. Có chân → 3; 2b. Không có chân, có vây → cá rô.',
        'Cặp 3 tách gà và chó: 3a. Cơ thể phủ lông vũ → con gà; 3b. Cơ thể phủ lông mao → con chó.',
        'Kiểm tra: mỗi nhóm cuối chỉ còn một loài; 4 loài cần $4 - 1 = 3$ cặp đặc điểm.',
      ],
      answer:
        '1a. Có xương sống → 2; 1b. Không có xương sống → giun đất. 2a. Có chân → 3; 2b. Không có chân → cá rô. 3a. Phủ lông vũ → con gà; 3b. Phủ lông mao → con chó.',
    },
    {
      problem:
        'Cho khóa: 1a. Có hoa → 2; 1b. Không có hoa → 3. 2a. Thân gỗ → cây bưởi; 2b. Không phải thân gỗ → cây lúa. 3a. Có hạt → cây thông; 3b. Không có hạt → 4. 4a. Có rễ thật → cây dương xỉ; 4b. Chưa có rễ thật → cây rêu. Một cây không có hoa, không có hạt nhưng có rễ thật là cây gì?',
      steps: [
        'Cặp 1: cây không có hoa, chọn 1b → đi đến cặp 3.',
        'Cặp 3: cây không có hạt, chọn 3b → đi đến cặp 4.',
        'Cặp 4: cây có rễ thật, chọn 4a → cây dương xỉ.',
      ],
      answer: 'Đó là cây dương xỉ.',
    },
    {
      problem:
        'Bạn Minh muốn xây dựng khóa lưỡng phân cho 6 loài cây trong vườn trường. Khóa của Minh có bao nhiêu cặp đặc điểm đối lập?',
      steps: [
        'Mỗi cặp đặc điểm chia một nhóm thành hai, nên số nhóm tăng thêm 1.',
        'Từ 1 nhóm (cả 6 loài) đến 6 nhóm (mỗi nhóm một loài) cần tăng thêm $6 - 1 = 5$ nhóm.',
      ],
      answer: 'Khóa có 5 cặp đặc điểm đối lập.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Khóa lưỡng phân phân loại sinh vật dựa trên',
      options: [
        'kích thước to hay nhỏ của sinh vật',
        'các đôi đặc điểm đối lập',
        'màu sắc đẹp hay xấu của sinh vật',
        'nơi tìm thấy sinh vật',
      ],
      answer: 1,
      hints: ['"Lưỡng phân" nghĩa là chia đôi.'],
      solution:
        'Khóa lưỡng phân dựa trên các đôi đặc điểm đối lập để chia sinh vật thành hai nhóm ở mỗi bước.',
    },
    {
      type: 'choice',
      prompt: 'Cặp nào sau đây là một cặp đặc điểm đối lập dùng được trong khóa lưỡng phân?',
      options: [
        'Có cánh / có chân',
        'Lông màu đẹp / lông màu xấu',
        'Có xương sống / không có xương sống',
        'Sống trên cạn / ăn cỏ',
      ],
      answer: 2,
      hints: [
        'Hai ý phải nói về cùng một đặc điểm, một ý "có" và một ý "không".',
        '"Đẹp" hay "xấu" tùy mỗi người cảm nhận.',
      ],
      solution:
        '"Có xương sống / không có xương sống" là cặp đối lập rõ ràng, quan sát được. "Có cánh / có chân" và "sống trên cạn / ăn cỏ" nói về hai đặc điểm khác nhau; "đẹp / xấu" là cảm nhận chủ quan.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước xây dựng khóa lưỡng phân theo đúng thứ tự.',
      items: [
        'Tiếp tục chia mỗi nhóm cho tới khi mỗi nhóm chỉ còn một sinh vật',
        'Liệt kê các đặc điểm đặc trưng của từng sinh vật',
        'Chọn một cặp đặc điểm đối lập để chia các sinh vật thành hai nhóm',
      ],
      answer: [1, 2, 0],
      hints: ['Muốn chọn đặc điểm để chia, trước hết phải biết mỗi sinh vật có những đặc điểm gì.'],
      solution:
        'Bước 1: liệt kê đặc điểm của từng sinh vật. Bước 2: chọn cặp đặc điểm đối lập để chia thành hai nhóm. Bước 3: tiếp tục chia cho tới khi mỗi nhóm còn một sinh vật.',
    },
    {
      type: 'number',
      prompt:
        'Một khóa lưỡng phân hoàn chỉnh dùng để xác định 8 loài động vật có bao nhiêu cặp đặc điểm đối lập?',
      answer: 7,
      hints: [
        'Mỗi cặp đặc điểm chia một nhóm thành hai, làm số nhóm tăng thêm 1.',
        'Bắt đầu với 1 nhóm, kết thúc với 8 nhóm.',
      ],
      solution: 'Số cặp đặc điểm bằng số loài trừ 1: $8 - 1 = 7$ cặp.',
    },
    {
      type: 'choice',
      prompt:
        'Cho khóa: 1a. Có xương sống → 2; 1b. Không có xương sống → giun đất. 2a. Có vây → cá chép; 2b. Không có vây → 3. 3a. Cơ thể phủ lông vũ → chim bồ câu; 3b. Cơ thể phủ lông mao → con mèo. Một con vật có xương sống, không có vây, cơ thể phủ lông mao là',
      options: ['giun đất', 'cá chép', 'chim bồ câu', 'con mèo'],
      answer: 3,
      hints: ['Bắt đầu từ cặp 1: con vật có xương sống, vậy đi đến cặp nào?'],
      solution: 'Có xương sống: 1a → cặp 2. Không có vây: 2b → cặp 3. Phủ lông mao: 3b → con mèo.',
    },
    {
      type: 'number',
      prompt:
        'Dùng khóa ở câu trên, để xác định được chim bồ câu, em phải đọc qua bao nhiêu cặp đặc điểm?',
      answer: 3,
      hints: ['Đi lần lượt: cặp 1, rồi cặp 2, rồi...'],
      solution:
        'Chim bồ câu: cặp 1 (có xương sống) → cặp 2 (không có vây) → cặp 3 (phủ lông vũ). Em đọc qua 3 cặp.',
    },
    {
      type: 'match',
      prompt:
        'Theo khóa lưỡng phân các loài cây ở ví dụ 2, nối mỗi cây với đặc điểm giúp nhận ra nó.',
      left: ['Cây rêu', 'Cây dương xỉ', 'Cây thông', 'Cây bưởi'],
      right: [
        'Có hoa, thân gỗ',
        'Có hạt nhưng không có hoa',
        'Có rễ thật nhưng không có hạt',
        'Chưa có rễ thật',
        'Có hoa, không phải thân gỗ',
      ],
      pairs: [
        [0, 3],
        [1, 2],
        [2, 1],
        [3, 0],
      ],
      hints: [
        'Có một đặc điểm thừa: đó là đặc điểm của cây lúa.',
        'Đi theo khóa: cây nào dừng ở cặp 4 vì chưa có rễ thật?',
      ],
      solution:
        'Rêu: chưa có rễ thật. Dương xỉ: có rễ thật nhưng không có hạt. Thông: có hạt nhưng không có hoa. Bưởi: có hoa, thân gỗ. "Có hoa, không phải thân gỗ" là của cây lúa.',
    },
    {
      type: 'multi',
      prompt:
        'Cần tách con mèo và chim bồ câu (đều có xương sống, đều có chân). Chọn tất cả các cặp đặc điểm dùng được.',
      options: [
        'Có xương sống / không có xương sống',
        'Có cánh / không có cánh',
        'Cơ thể phủ lông vũ / cơ thể không phủ lông vũ',
        'Có chân / không có chân',
      ],
      answers: [1, 2],
      hints: ['Một cặp dùng được khi một con có đặc điểm này, con kia có đặc điểm kia.'],
      solution:
        'Chim bồ câu có cánh và phủ lông vũ, mèo thì không: hai cặp đó tách được chúng. Cả hai đều có xương sống và đều có chân, nên hai cặp còn lại không chia được.',
    },
    {
      type: 'text',
      prompt: 'Từ "lưỡng phân" trong "khóa lưỡng phân" có nghĩa là gì?',
      accept: [
        'chia đôi',
        'chia làm đôi',
        'chia làm hai',
        'chia thành hai',
        'chia hai',
        'phân đôi',
      ],
      hints: ['"Lưỡng" nghĩa là hai.'],
      solution: '"Lưỡng phân" nghĩa là chia đôi: mỗi bước chia một nhóm thành hai nhóm.',
    },
  ],
  takeaways: [
    'Khóa lưỡng phân phân loại sinh vật dựa trên các đôi đặc điểm đối lập, mỗi bước chia một nhóm thành hai.',
    'Ba bước: liệt kê đặc điểm; chọn cặp đặc điểm đối lập chia thành hai nhóm; tiếp tục chia tới khi mỗi nhóm còn một sinh vật.',
    'Cặp đặc điểm phải đối lập rõ ràng, dễ quan sát, không dựa vào cảm nhận chủ quan.',
    'Khóa lưỡng phân của $n$ sinh vật có $n - 1$ cặp đặc điểm.',
  ],
};
