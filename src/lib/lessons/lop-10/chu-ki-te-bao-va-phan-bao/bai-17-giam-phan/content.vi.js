/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Giảm phân gồm hai lần phân bào liên tiếp nhưng DNA chỉ nhân đôi một lần, tạo bốn tế bào con đơn bội; trao đổi chéo cùng phân li và tổ hợp ngẫu nhiên của NST tạo nhiều loại giao tử; ý nghĩa của giảm phân.',
  intro:
    'Hai anh em ruột có cùng bố mẹ nhưng không giống hệt nhau. Mỗi đứa trẻ lại mang một nửa bộ NST từ bố và một nửa từ mẹ, nên bộ NST của người không tăng gấp đôi qua mỗi thế hệ. Một quá trình phân bào đặc biệt giải thích cả hai điều đó.',
  objectives: [
    'Mô tả được diễn biến các kì của giảm phân I và giảm phân II.',
    'Trình bày được hiện tượng tiếp hợp và trao đổi chéo.',
    'Phân biệt được giảm phân với nguyên phân.',
    'Tính được số tổ hợp NST trong giao tử khi biết số cặp NST tương đồng.',
    'Giải thích được ý nghĩa của giảm phân đối với sinh sản hữu tính, tiến hoá và chọn giống.',
  ],
  sections: [
    {
      heading: 'Khái quát về giảm phân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Giảm phân',
          text: 'Giảm phân là hình thức phân bào xảy ra ở tế bào sinh dục chín, gồm hai lần phân bào liên tiếp (giảm phân I và giảm phân II) nhưng DNA chỉ nhân đôi một lần ở kì trung gian trước giảm phân I. Từ một tế bào $2n$ tạo ra bốn tế bào con có bộ NST $n$.',
        },
        {
          type: 'p',
          text: 'Trong mô phỏng ở phần Khám phá, tế bào có $2n = 4$ với một cặp NST dài và một cặp NST ngắn. Trong mỗi cặp tương đồng, một chiếc từ bố tô xanh và một chiếc từ mẹ tô đỏ.',
        },
      ],
    },
    {
      heading: 'Giảm phân I',
      blocks: [
        {
          type: 'table',
          caption: 'Các kì của giảm phân I',
          head: ['Kì', 'Diễn biến', 'NST trong tế bào'],
          rows: [
            [
              'Kì đầu I',
              'NST kép bắt đôi theo từng cặp tương đồng (tiếp hợp) và co xoắn dần; có thể xảy ra trao đổi chéo; thoi phân bào hình thành, màng nhân và hạch nhân tiêu biến.',
              '$2n$ kép',
            ],
            [
              'Kì giữa I',
              'Các cặp NST kép tương đồng xếp thành hai hàng trên mặt phẳng xích đạo; mỗi NST kép gắn với sợi thoi từ một cực.',
              '$2n$ kép',
            ],
            [
              'Kì sau I',
              'Hai NST kép của mỗi cặp tương đồng tách nhau và đi về hai cực.',
              '$2n$ kép',
            ],
            [
              'Kì cuối I',
              'Hai nhân mới hình thành, tế bào chất phân chia.',
              '$n$ kép ở mỗi tế bào con',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Trao đổi chéo',
          text: 'Ở kì đầu I, hai nhiễm sắc tử không chị em của cặp NST tương đồng có thể trao đổi đoạn tương ứng cho nhau. Nhờ đó xuất hiện các NST mang tổ hợp gene mới.',
        },
      ],
    },
    {
      heading: 'Giảm phân II',
      blocks: [
        {
          type: 'p',
          text: 'Sau giảm phân I, tế bào đi vào giảm phân II mà không có nhân đôi DNA. Giảm phân II diễn ra tương tự nguyên phân, chỉ khác là các tế bào đều có bộ NST $n$ kép.',
        },
        {
          type: 'table',
          caption: 'Các kì của giảm phân II (trong mỗi tế bào)',
          head: ['Kì', 'Diễn biến', 'NST trong tế bào'],
          rows: [
            ['Kì đầu II', 'NST kép co xoắn lại, thoi phân bào hình thành.', '$n$ kép'],
            ['Kì giữa II', 'NST kép xếp một hàng trên mặt phẳng xích đạo.', '$n$ kép'],
            [
              'Kì sau II',
              'Hai nhiễm sắc tử của mỗi NST kép tách nhau thành NST đơn, đi về hai cực.',
              '$2n$ đơn',
            ],
            [
              'Kì cuối II',
              'Nhân mới hình thành, tế bào chất phân chia.',
              '$n$ đơn ở mỗi tế bào con',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ở động vật, từ một tế bào sinh tinh tạo ra bốn tinh trùng; từ một tế bào sinh trứng chỉ tạo ra một trứng và ba thể cực. Ở thực vật, các tế bào đơn bội tiếp tục nguyên phân để tạo hạt phấn và túi phôi.',
        },
        { type: 'widget', name: 'so-sanh' },
      ],
    },
    {
      heading: 'Ý nghĩa của giảm phân',
      blocks: [
        {
          type: 'list',
          items: [
            'Giảm phân tạo giao tử $n$. Qua thụ tinh, giao tử kết hợp tạo hợp tử $2n$, rồi nguyên phân giúp hợp tử phát triển thành cơ thể. Ba quá trình này phối hợp duy trì bộ NST đặc trưng của loài qua các thế hệ sinh sản hữu tính.',
            'Trao đổi chéo cùng với sự phân li và tổ hợp ngẫu nhiên của các NST tạo ra nhiều loại giao tử khác nhau. Qua thụ tinh, chúng tạo nên biến dị tổ hợp, nguồn nguyên liệu cho tiến hoá và chọn giống.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Đếm tổ hợp NST trong giao tử',
          text: 'Mỗi cặp NST tương đồng phân li độc lập với các cặp khác. Với $n$ cặp NST khác nhau, không có trao đổi chéo, số tổ hợp NST có thể có trong giao tử là $2^n$. Ở người, $n = 23$ cho $2^{23} = 8\\,388\\,608$ tổ hợp.',
        },
        { type: 'widget', name: 'to-hop' },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khi giảm phân có sai sót',
          text: 'Nếu một cặp NST không phân li trong giảm phân, giao tử sẽ thừa hoặc thiếu NST. Ví dụ, giao tử thừa một NST số $21$ kết hợp với giao tử bình thường tạo hợp tử có ba NST số $21$, gây hội chứng Down.',
        },
      ],
    },
  ],
  explore: {
    title: 'Theo dõi giảm phân',
    instruction:
      'Bấm từng kì hoặc "Tự chạy" để theo dõi giảm phân và đọc số NST ở từng giai đoạn. Tắt bật trao đổi chéo và đổi cách xếp cặp NST ngắn ở kì giữa I: bốn tế bào con ở cuối thay đổi ra sao?',
  },
  examples: [
    {
      problem:
        'Ở ruồi giấm, $2n = 8$. Một tế bào sinh tinh giảm phân bình thường. Tính số NST, trạng thái và số nhiễm sắc tử trong mỗi tế bào ở kì giữa I, kì giữa II và kì sau II.',
      steps: [
        'Kì giữa I: chưa có lần phân chia nào hoàn tất, tế bào có $2n = 8$ NST kép, tức $8 \\cdot 2 = 16$ nhiễm sắc tử.',
        'Giảm phân I đã chia đôi số NST, nên ở kì giữa II mỗi tế bào có $n = 4$ NST kép, tức $4 \\cdot 2 = 8$ nhiễm sắc tử.',
        'Ở kì sau II, mỗi NST kép tách thành hai NST đơn, nên mỗi tế bào có $4 \\cdot 2 = 8$ NST đơn và không còn nhiễm sắc tử.',
      ],
      answer:
        'Kì giữa I: $8$ NST kép, $16$ nhiễm sắc tử. Kì giữa II: $4$ NST kép, $8$ nhiễm sắc tử. Kì sau II: $8$ NST đơn, $0$ nhiễm sắc tử.',
    },
    {
      problem:
        'Một loài có $2n = 6$, ba cặp NST tương đồng khác nhau, không có trao đổi chéo. Cơ thể có thể tạo tối đa bao nhiêu loại giao tử? Một tế bào sinh tinh của cơ thể đó tạo được bao nhiêu loại?',
      steps: [
        'Có $n = 3$ cặp NST, mỗi cặp phân li độc lập, nên cả cơ thể có tối đa $2^3 = 8$ loại giao tử.',
        'Ở kì giữa I, một tế bào chỉ có một cách xếp cụ thể, nên hai NST kép của mỗi cặp đi về hai cực theo đúng một cách.',
        'Hai tế bào sau giảm phân I khác nhau, mỗi tế bào cho hai giao tử giống nhau. Vậy một tế bào sinh tinh chỉ tạo $2$ loại giao tử.',
      ],
      answer: 'Cơ thể: tối đa $8$ loại. Một tế bào sinh tinh (không trao đổi chéo): $2$ loại.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trao đổi chéo xảy ra ở kì nào của giảm phân?',
      options: ['Kì đầu I', 'Kì giữa I', 'Kì sau I', 'Kì đầu II'],
      answer: 0,
      hints: ['Các NST tương đồng phải đang bắt đôi với nhau thì mới trao đổi được đoạn.'],
      solution:
        'Trao đổi chéo xảy ra ở kì đầu I, khi các NST kép của cặp tương đồng đang bắt đôi với nhau.',
    },
    {
      type: 'choice',
      prompt: 'Điểm nào giúp phân biệt kì giữa I với kì giữa của nguyên phân?',
      options: [
        'Kì giữa I có NST ở trạng thái đơn',
        'Kì giữa I các NST kép xếp thành hai hàng',
        'Kì giữa của nguyên phân không có thoi phân bào',
        'Kì giữa I không có tâm động',
      ],
      answer: 1,
      hints: ['So sánh cách NST xếp trên mặt phẳng xích đạo.'],
      solution:
        'Ở kì giữa I, các cặp NST kép tương đồng xếp thành hai hàng; ở kì giữa của nguyên phân, các NST kép xếp thành một hàng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện của giảm phân theo đúng trình tự.',
      items: [
        'Hai nhiễm sắc tử của mỗi NST kép tách nhau về hai cực',
        'Hai NST kép của mỗi cặp tương đồng tách nhau về hai cực',
        'Các cặp NST tương đồng xếp thành hai hàng ở xích đạo',
        'NST kép xếp một hàng ở xích đạo trong tế bào $n$',
        'NST kép bắt đôi và có thể trao đổi chéo',
      ],
      answer: [4, 2, 1, 3, 0],
      hints: ['Giảm phân I tách các NST kép tương đồng, giảm phân II tách các nhiễm sắc tử.'],
      solution:
        'Bắt đôi và trao đổi chéo (kì đầu I), xếp hai hàng (kì giữa I), tách cặp tương đồng (kì sau I), xếp một hàng (kì giữa II), tách nhiễm sắc tử (kì sau II).',
    },
    {
      type: 'number',
      prompt: 'Có $3$ tế bào sinh tinh giảm phân bình thường. Tạo ra tất cả bao nhiêu tinh trùng?',
      answer: 12,
      hints: ['Một tế bào sinh tinh cho $4$ tinh trùng.'],
      solution: '$3 \\cdot 4 = 12$ tinh trùng.',
    },
    {
      type: 'number',
      prompt: 'Có $5$ tế bào sinh trứng giảm phân bình thường. Tạo ra tất cả bao nhiêu trứng?',
      answer: 5,
      hints: ['Từ một tế bào sinh trứng, các tế bào con không đều phát triển thành trứng.'],
      solution: 'Mỗi tế bào sinh trứng chỉ cho $1$ trứng và $3$ thể cực, nên có $5$ trứng.',
    },
    {
      type: 'number',
      prompt:
        'Ở người, $2n = 46$. Mỗi tế bào con tạo ra ngay sau giảm phân I có bao nhiêu NST kép?',
      answer: 23,
      hints: ['Giảm phân I đã chia đôi số NST, nhưng chúng vẫn ở dạng kép.'],
      solution: 'Sau giảm phân I, mỗi tế bào con có $n = 23$ NST kép.',
    },
    {
      type: 'number',
      prompt: 'Ở ruồi giấm, $2n = 8$. Một tế bào ở kì sau II có bao nhiêu NST đơn?',
      answer: 8,
      hints: ['Trước kì sau II, tế bào có $n = 4$ NST kép.'],
      solution: '$4$ NST kép tách thành $4 \\cdot 2 = 8$ NST đơn.',
    },
    {
      type: 'number',
      prompt:
        'Một loài có $2n = 8$, các cặp NST tương đồng khác nhau, không có trao đổi chéo. Cơ thể có thể tạo tối đa bao nhiêu loại giao tử về tổ hợp NST?',
      answer: 16,
      hints: ['Tìm số cặp NST tương đồng $n$ trước.', 'Áp dụng công thức $2^n$.'],
      solution: '$n = 4$ nên số loại giao tử tối đa là $2^4 = 16$.',
    },
    {
      type: 'number',
      prompt:
        'Một tế bào sinh tinh có hai cặp NST khác nhau, không xảy ra trao đổi chéo. Tế bào này tạo ra mấy loại tinh trùng?',
      answer: 2,
      hints: [
        'Với một tế bào, ở kì giữa I chỉ có một cách xếp cụ thể.',
        'Các tế bào sinh ra từ cùng một tế bào sau giảm phân I cho giao tử giống nhau.',
      ],
      solution:
        'Hai tế bào sau giảm phân I mang tổ hợp khác nhau, mỗi tế bào cho hai tinh trùng giống nhau: tất cả là $2$ loại.',
    },
    {
      type: 'multi',
      prompt: 'Những sự kiện nào tạo ra sự đa dạng của giao tử?',
      options: [
        'Trao đổi chéo ở kì đầu I',
        'Phân li và tổ hợp ngẫu nhiên các NST',
        'DNA nhân đôi ở kì trung gian',
        'Màng nhân tiêu biến ở kì đầu',
      ],
      answers: [0, 1],
      hints: ['Hãy chọn những sự kiện làm thay đổi tổ hợp gene hoặc tổ hợp NST.'],
      solution:
        'Trao đổi chéo tạo tổ hợp gene mới trên NST; phân li và tổ hợp ngẫu nhiên tạo tổ hợp NST khác nhau trong giao tử.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao giảm phân, thụ tinh và nguyên phân cùng duy trì được bộ NST của loài sinh sản hữu tính?',
      options: [
        'Vì giảm phân làm tăng gấp đôi số NST',
        'Vì giao tử $n$ kết hợp tạo hợp tử $2n$, nguyên phân giữ nguyên $2n$ cho cơ thể',
        'Vì nguyên phân luôn giảm bộ NST',
        'Vì thụ tinh không làm thay đổi số NST',
      ],
      answer: 1,
      hints: [
        'Theo dõi bộ NST qua: cơ thể $\\rightarrow$ giao tử $\\rightarrow$ hợp tử $\\rightarrow$ cơ thể.',
      ],
      solution:
        'Giảm phân giảm $2n$ xuống $n$, thụ tinh khôi phục $2n$ ở hợp tử, còn nguyên phân giữ nguyên $2n$ cho các tế bào của cơ thể mới.',
    },
  ],
  takeaways: [
    'Giảm phân có hai lần phân bào liên tiếp nhưng DNA chỉ nhân đôi một lần, từ một tế bào $2n$ tạo bốn tế bào con $n$.',
    'Giảm phân I tách các NST kép của cặp tương đồng; giảm phân II tách các nhiễm sắc tử.',
    'Trao đổi chéo ở kì đầu I và phân li, tổ hợp ngẫu nhiên của NST tạo nhiều loại giao tử; với $n$ cặp NST có $2^n$ tổ hợp.',
    'Giảm phân, thụ tinh và nguyên phân cùng duy trì bộ NST đặc trưng của loài.',
  ],
};
