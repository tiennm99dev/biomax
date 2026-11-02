/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tế bào gốc có thể phân chia và biệt hoá thành nhiều loại tế bào khác nhau. Bài phân loại tế bào gốc theo khả năng biệt hoá, vị trí phát sinh, nguồn gốc, và nêu các thành tựu ứng dụng trong y học.',
  intro:
    'Mỗi ngày cơ thể em mất đi rất nhiều tế bào da, tế bào máu, nhưng da vẫn liền, máu vẫn đủ. Những tế bào mới thay thế đó từ đâu mà có? Câu trả lời là một lượng nhỏ tế bào đặc biệt nằm rải rác trong các mô: tế bào gốc.',
  objectives: [
    'Nêu được khái niệm tế bào gốc.',
    'Phân loại được tế bào gốc theo khả năng biệt hoá, theo vị trí phát sinh và theo nguồn gốc.',
    'Nêu được một số thành tựu và triển vọng của tế bào gốc trong y học.',
    'Biết nhận xét về những quảng cáo chữa bệnh bằng tế bào gốc dựa trên bằng chứng.',
  ],
  sections: [
    {
      heading: 'Khái niệm tế bào gốc',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tế bào gốc',
          text: 'Tế bào gốc là những tế bào có khả năng phân chia và biệt hoá thành nhiều loại tế bào có cấu trúc và chức năng khác nhau.',
        },
        {
          type: 'p',
          text: 'Trong cơ thể trưởng thành, tế bào gốc giúp thay thế các tế bào chết hoặc bị tổn thương. Trong quá trình phát triển của phôi, tín hiệu từ các tế bào lân cận góp phần quyết định tế bào sẽ biệt hoá thành loại nào. Nếu chuyển một nhóm tế bào phôi sang vị trí khác, phôi có thể phát triển dị dạng.',
        },
      ],
    },
    {
      heading: 'Phân loại tế bào gốc',
      blocks: [
        {
          type: 'table',
          caption: 'Phân loại theo khả năng biệt hoá',
          head: ['Loại', 'Khả năng biệt hoá', 'Ví dụ'],
          rows: [
            [
              'Toàn năng',
              'Mọi loại tế bào của cơ thể và cả nhau thai; tạo được cơ thể hoàn chỉnh',
              'Hợp tử, tế bào phôi rất sớm',
            ],
            [
              'Vạn năng',
              'Mọi loại tế bào của cơ thể, trừ nhau thai',
              'Khối tế bào bên trong phôi nang',
            ],
            [
              'Đa tiềm năng',
              'Một số loại tế bào, thường cùng một nhóm',
              'Tế bào gốc tạo máu trong tuỷ xương',
            ],
            ['Đơn năng', 'Một hoặc rất ít loại tế bào', 'Tế bào gốc cơ, tế bào gốc biểu bì'],
          ],
        },
        {
          type: 'table',
          caption: 'Phân loại theo vị trí phát sinh và theo nguồn gốc',
          head: ['Tiêu chí', 'Loại', 'Đặc điểm'],
          rows: [
            ['Vị trí phát sinh', 'Tế bào gốc phôi', 'Có ở phôi'],
            [
              'Vị trí phát sinh',
              'Tế bào gốc trưởng thành',
              'Có trong mô, cơ quan của cơ thể trưởng thành, ví dụ tuỷ xương',
            ],
            ['Nguồn gốc', 'Tế bào gốc tự nhiên', 'Gồm tế bào gốc phôi và tế bào gốc trưởng thành'],
            [
              'Nguồn gốc',
              'Tế bào gốc cảm ứng',
              'Tạo được nhờ giải biệt hoá tế bào chuyên hoá thành tế bào gốc trong phòng thí nghiệm',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tế bào gốc cảm ứng',
          text: 'Năm $2006$, nhóm của Shinya Yamanaka (Nhật Bản) lần đầu tạo được tế bào gốc cảm ứng từ tế bào của chuột trưởng thành, và ông nhận giải Nobel năm $2012$. Cách này không phải phá huỷ phôi, lại có thể lấy tế bào của chính người bệnh.',
        },
      ],
    },
    {
      heading: 'Thành tựu và triển vọng',
      blocks: [
        {
          type: 'table',
          head: ['Hướng ứng dụng', 'Một số kết quả'],
          rows: [
            [
              'Nghiên cứu sự biệt hoá',
              'Biết được cách các tín hiệu làm tế bào gốc biệt hoá thành từng loại tế bào; nghiên cứu cơ chế bệnh trên tế bào nuôi cấy',
            ],
            [
              'Hỗ trợ điều trị bệnh',
              'Ghép tế bào gốc tạo máu giúp phục hồi tế bào máu của người bệnh ung thư sau hoá trị, xạ trị; đang thử nghiệm với tiểu đường type $1$',
            ],
            [
              'Tạo mô, cơ quan thay thế',
              'Bước đầu tạo được một số mô, cơ quan người trong phòng thí nghiệm; hướng tới giảm đào thải sau ghép',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đừng tin mọi lời quảng cáo',
          text: 'Phần lớn các hướng điều trị bằng tế bào gốc vẫn đang được thử nghiệm. Những lời quảng cáo chữa được mọi bệnh, hay mĩ phẩm "tế bào gốc" làm trẻ lại, thường không có bằng chứng đầy đủ. Ngoài ra, việc lấy tế bào từ phôi còn đặt ra vấn đề đạo đức.',
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Tế bào gốc, thật hay chưa chắc?',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: làm một tờ poster giúp các bạn phân biệt ứng dụng tế bào gốc đã được công nhận với điều chỉ là lời quảng cáo. Làm theo nhóm $3$ đến $4$ bạn, trong $1$ đến $2$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Thu thập $5$ phát biểu về tế bào gốc trên báo, quảng cáo, mạng xã hội (ví dụ về máu cuống rốn, ghép tuỷ, mĩ phẩm).',
            'Với mỗi phát biểu, tìm ít nhất một nguồn tin cậy (bệnh viện lớn, Bộ Y tế, Tổ chức Y tế Thế giới, sách giáo khoa) để kiểm tra.',
            'Xếp mỗi phát biểu vào một trong ba nhóm: đã dùng trong điều trị; đang thử nghiệm; chưa có bằng chứng.',
            'Làm poster: nêu khái niệm và bốn loại tế bào gốc theo khả năng biệt hoá, bảng $5$ phát biểu đã kiểm tra và lời khuyên cho người đọc.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: trưng bày poster trước lớp, ghi nguồn cho từng phát biểu và nêu điều bất ngờ nhất nhóm tìm ra.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cây biệt hoá của tế bào gốc',
    instruction:
      'Chạm vào một tế bào trên cây để thấy các tế bào nó có thể tạo ra. Thử giải biệt hoá tế bào da và so sánh. Sau đó chuyển sang "Thử sức" để dự đoán rồi kiểm tra trên cây.',
  },
  examples: [
    {
      problem:
        'Tuỷ xương của một người hiến chứa tế bào gốc có thể biệt hoá thành hồng cầu, bạch cầu và tiểu cầu, nhưng không tạo được neuron. Đây là loại tế bào gốc nào theo khả năng biệt hoá và theo vị trí phát sinh?',
      steps: [
        'Tế bào tạo được một số loại tế bào cùng nhóm tế bào máu, chứ không phải mọi loại, nên không phải vạn năng.',
        'Nó tạo được nhiều hơn một loại tế bào chuyên hoá, nên không phải đơn năng.',
        'Tế bào lấy từ tuỷ xương của cơ thể trưởng thành, nên là tế bào gốc trưởng thành.',
      ],
      answer: 'Đó là tế bào gốc đa tiềm năng, thuộc nhóm tế bào gốc trưởng thành.',
    },
    {
      problem:
        'Vì sao không thể dùng hồng cầu trưởng thành của người để tạo tế bào gốc cảm ứng? Việc hồng cầu không có nhân đem lại lợi ích gì?',
      steps: [
        'Giải biệt hoá cần đổi hoạt động của các gene trong nhân để tế bào trở lại trạng thái chưa chuyên hoá.',
        'Hồng cầu trưởng thành không có nhân, nên không còn hệ gene ở nhân để tái lập trình.',
        'Không có nhân, tế bào có thêm chỗ chứa hemoglobin và tiêu tốn ít năng lượng hơn.',
      ],
      answer:
        'Hồng cầu không có nhân nên không thể giải biệt hoá. Bù lại, tế bào chứa được nhiều hemoglobin, vận chuyển oxygen tốt hơn.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tế bào gốc là gì?',
      options: [
        'Tế bào có khả năng phân chia và biệt hoá thành nhiều loại tế bào khác nhau',
        'Tế bào đã chuyên hoá hoàn toàn và không còn phân chia',
        'Tế bào chỉ có ở phôi, không có ở người trưởng thành',
        'Tế bào sinh dục của cơ thể trưởng thành',
      ],
      answer: 0,
      hints: ['Hai khả năng quan trọng: tự tạo thêm tế bào và tạo ra loại tế bào khác.'],
      solution:
        'Tế bào gốc có khả năng phân chia và biệt hoá thành nhiều loại tế bào. Chúng có cả ở phôi lẫn trong mô của cơ thể trưởng thành.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các loại tế bào gốc theo khả năng biệt hoá giảm dần.',
      items: ['Toàn năng', 'Vạn năng', 'Đa tiềm năng', 'Đơn năng'],
      answer: [0, 1, 2, 3],
      hints: ['Hợp tử có khả năng lớn nhất.', 'Tế bào đơn năng chỉ tạo được rất ít loại.'],
      solution: 'Toàn năng, vạn năng, đa tiềm năng, đơn năng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tế bào với loại tế bào gốc tương ứng theo khả năng biệt hoá.',
      left: [
        'Hợp tử',
        'Khối tế bào bên trong phôi nang',
        'Tế bào gốc tạo máu trong tuỷ xương',
        'Tế bào gốc cơ',
      ],
      right: ['Đa tiềm năng', 'Đơn năng', 'Toàn năng', 'Vạn năng'],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Tế bào nào tạo được cả nhau thai?', 'Tế bào nào tạo được cả ba dòng tế bào máu?'],
      solution:
        'Hợp tử là toàn năng; khối tế bào bên trong phôi nang là vạn năng; tế bào gốc tạo máu là đa tiềm năng; tế bào gốc cơ là đơn năng.',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau chính giữa tế bào gốc toàn năng và tế bào gốc vạn năng là gì?',
      options: [
        'Tế bào gốc toàn năng tạo được cả nhau thai, nên một mình có thể thành cơ thể hoàn chỉnh',
        'Tế bào gốc vạn năng có nhiều gene hơn tế bào gốc toàn năng',
        'Tế bào gốc toàn năng chỉ có ở cơ thể trưởng thành',
        'Tế bào gốc vạn năng không phân chia được',
      ],
      answer: 0,
      hints: ['Hãy nghĩ về phần nuôi phôi trong tử cung.'],
      solution:
        'Tế bào vạn năng tạo được mọi tế bào của cơ thể trừ nhau thai. Tế bào toàn năng tạo được cả nhau thai nên phát triển được thành cơ thể hoàn chỉnh.',
    },
    {
      type: 'choice',
      prompt: 'Tế bào gốc cảm ứng được tạo ra như thế nào?',
      options: [
        'Giải biệt hoá tế bào đã chuyên hoá của cơ thể trưởng thành',
        'Tách từ khối tế bào bên trong phôi nang',
        'Thu từ máu cuống rốn trẻ sơ sinh, không qua xử lí',
        'Cho hai tế bào sinh dục kết hợp với nhau',
      ],
      answer: 0,
      hints: ['"Cảm ứng" nghĩa là tế bào được người tác động để đổi trạng thái.'],
      solution:
        'Tế bào gốc cảm ứng tạo được nhờ giải biệt hoá tế bào chuyên hoá. Nhờ vậy, không phải phá huỷ phôi.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các ứng dụng của tế bào gốc nêu trong bài.',
      options: [
        'Nghiên cứu quá trình biệt hoá tế bào',
        'Phục hồi tế bào máu cho người bệnh ung thư sau hoá trị, xạ trị',
        'Hướng tới tạo mô, cơ quan thay thế',
        'Chữa khỏi mọi bệnh chỉ bằng một mũi tiêm',
        'Thay thế hoàn toàn cho việc tiêm vaccine',
      ],
      answers: [0, 1, 2],
      hints: ['Hãy cảnh giác với các câu "mọi bệnh", "hoàn toàn".'],
      solution:
        'Tế bào gốc giúp nghiên cứu sự biệt hoá, hỗ trợ điều trị một số bệnh và mở hướng tạo mô, cơ quan thay thế. Nó không chữa được mọi bệnh và không thay thế vaccine.',
    },
    {
      type: 'choice',
      prompt:
        'Nhóm nghiên cứu chuyển một nhóm tế bào phôi sang vị trí khác của phôi, và phôi phát triển dị dạng. Kết quả này cho thấy điều gì?',
      options: [
        'Tín hiệu từ các tế bào lân cận ảnh hưởng đến sự biệt hoá của tế bào',
        'Các tế bào phôi đã mất gene khi chuyển vị trí',
        'Tế bào phôi không còn khả năng phân chia',
        'Hình dạng phôi không phụ thuộc vào tế bào',
      ],
      answer: 0,
      hints: ['Chỉ vị trí tế bào đổi, các gene không đổi.'],
      solution:
        'Vị trí mới cho tế bào tín hiệu khác từ các tế bào xung quanh, nên chúng biệt hoá khác đi và phôi phát triển dị dạng.',
    },
    {
      type: 'text',
      prompt:
        'Theo vị trí phát sinh, tế bào gốc trong tuỷ xương của người lớn thuộc nhóm tế bào gốc nào?',
      accept: ['tế bào gốc trưởng thành', 'trưởng thành'],
      hints: ['Hai nhóm là tế bào gốc phôi và tế bào gốc ...'],
      solution: 'Đó là tế bào gốc trưởng thành.',
    },
  ],
  takeaways: [
    'Tế bào gốc có khả năng phân chia và biệt hoá thành nhiều loại tế bào.',
    'Theo khả năng biệt hoá: toàn năng, vạn năng, đa tiềm năng, đơn năng.',
    'Theo vị trí phát sinh: tế bào gốc phôi, tế bào gốc trưởng thành. Theo nguồn gốc: tế bào gốc tự nhiên, tế bào gốc cảm ứng.',
    'Thành tựu: nghiên cứu sự biệt hoá, hỗ trợ điều trị một số bệnh, bước đầu tạo mô và cơ quan thay thế.',
  ],
};
