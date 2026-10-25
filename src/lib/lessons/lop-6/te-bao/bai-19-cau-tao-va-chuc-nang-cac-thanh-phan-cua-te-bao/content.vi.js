/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Mọi tế bào đều có màng tế bào, tế bào chất và nhân hoặc vùng nhân; tế bào nhân sơ chưa có màng nhân, tế bào nhân thực có màng nhân; tế bào thực vật khác tế bào động vật ở thành tế bào, lục lạp và không bào lớn.',
  intro:
    'Tuy rất nhỏ, mỗi tế bào vẫn tự lấy chất dinh dưỡng, tạo ra năng lượng, lớn lên và sinh sản như một "nhà máy" thu nhỏ. Nhà máy ấy có những bộ phận nào, mỗi bộ phận làm nhiệm vụ gì? Vì sao tế bào vi khuẩn lại được gọi là tế bào nhân sơ, và tế bào lá cây khác tế bào da người ở điểm nào? Bài học này sẽ giúp em trả lời.',
  objectives: [
    'Nêu được ba thành phần chính của tế bào (màng tế bào, tế bào chất, nhân) và chức năng của mỗi thành phần.',
    'Phân biệt được tế bào nhân sơ và tế bào nhân thực.',
    'So sánh được tế bào động vật và tế bào thực vật; nêu được vai trò của thành tế bào, lục lạp và không bào.',
    'Giải thích được vì sao thực vật tự tổng hợp được chất hữu cơ còn động vật thì không.',
  ],
  sections: [
    {
      heading: 'Các thành phần chính của tế bào',
      blocks: [
        {
          type: 'p',
          text: 'Mặc dù có hình dạng và kích thước khác nhau, mọi tế bào đều có ba thành phần chính: màng tế bào, tế bào chất (còn gọi là chất tế bào) và nhân hoặc vùng nhân.',
        },
        {
          type: 'table',
          caption: 'Ba thành phần chính của tế bào',
          head: ['Thành phần', 'Cấu tạo', 'Chức năng'],
          rows: [
            [
              'Màng tế bào',
              'Lớp màng mỏng bao quanh tế bào, có nhiều lỗ rất nhỏ',
              'Bao bọc tế bào chất, bảo vệ tế bào; điều khiển sự trao đổi chất giữa tế bào và môi trường',
            ],
            [
              'Tế bào chất',
              'Chất keo lỏng nằm giữa màng tế bào và nhân, chứa các bào quan',
              'Nơi diễn ra hầu hết các hoạt động sống của tế bào',
            ],
            [
              'Nhân (hoặc vùng nhân)',
              'Chứa vật chất di truyền',
              'Điều khiển mọi hoạt động sống của tế bào',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Những lỗ nhỏ trên màng tế bào',
          text: 'Nhờ có các lỗ rất nhỏ, màng tế bào cho nước, khí oxygen và chất dinh dưỡng đi vào tế bào, đồng thời cho các chất thải như khí carbon dioxide đi ra ngoài. Đó là quá trình trao đổi chất giữa tế bào và môi trường.',
        },
        {
          type: 'p',
          text: 'Trong tế bào chất có các bào quan, mỗi bào quan làm một việc riêng. Ví dụ, ti thể là nơi tạo ra năng lượng cho tế bào; lục lạp (chỉ có ở tế bào thực vật) là nơi diễn ra quang hợp.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá bên dưới, em chọn loại tế bào rồi chạm vào từng số trên sơ đồ để xem tên và chức năng của mỗi thành phần. Sau đó chuyển sang chế độ "Gọi tên" hoặc "Tìm vị trí" để tự kiểm tra.',
        },
      ],
    },
    {
      heading: 'Tế bào nhân sơ và tế bào nhân thực',
      blocks: [
        {
          type: 'p',
          text: 'Dựa vào cấu tạo của nhân, người ta chia tế bào thành hai loại.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tế bào nhân sơ',
          text: 'Tế bào nhân sơ chưa có nhân hoàn chỉnh: vật chất di truyền nằm ở vùng nhân, không có màng bao bọc. Tế bào chất không có các bào quan có màng. Ví dụ: tế bào vi khuẩn.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tế bào nhân thực',
          text: 'Tế bào nhân thực có nhân hoàn chỉnh: vật chất di truyền được màng nhân bao bọc. Tế bào chất có nhiều bào quan có màng như ti thể, lục lạp. Ví dụ: tế bào nấm men, tế bào thực vật, tế bào động vật.',
        },
        {
          type: 'table',
          caption: 'So sánh tế bào nhân sơ và tế bào nhân thực',
          head: ['Đặc điểm', 'Tế bào nhân sơ', 'Tế bào nhân thực'],
          rows: [
            [
              'Thành phần chính',
              'Màng tế bào, tế bào chất, vùng nhân',
              'Màng tế bào, tế bào chất, nhân',
            ],
            ['Màng nhân', 'Không có', 'Có'],
            ['Bào quan có màng', 'Không có', 'Có (ti thể, lục lạp...)'],
            ['Kích thước', 'Thường rất nhỏ (vài micromet)', 'Thường lớn hơn nhiều'],
            ['Ví dụ', 'Vi khuẩn', 'Nấm men, tế bào thực vật, tế bào động vật'],
          ],
        },
      ],
    },
    {
      heading: 'Tế bào động vật và tế bào thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Tế bào động vật và tế bào thực vật đều là tế bào nhân thực, đều có màng tế bào, tế bào chất và nhân. Tuy vậy, tế bào thực vật có thêm một số thành phần mà tế bào động vật không có.',
        },
        {
          type: 'table',
          caption: 'So sánh tế bào động vật và tế bào thực vật',
          head: ['Thành phần', 'Tế bào động vật', 'Tế bào thực vật'],
          rows: [
            ['Màng tế bào, tế bào chất, nhân', 'Có', 'Có'],
            ['Thành tế bào (bằng cellulose)', 'Không có', 'Có'],
            ['Lục lạp', 'Không có', 'Có'],
            ['Không bào', 'Nhỏ hoặc không có', 'Thường có không bào lớn'],
          ],
        },
        {
          type: 'list',
          items: [
            'Thành tế bào bằng cellulose bao ngoài màng tế bào, giúp tế bào thực vật có hình dạng nhất định và bảo vệ tế bào; nhờ đó cây đứng vững.',
            'Lục lạp chứa diệp lục, là nơi quang hợp: tế bào thực vật dùng năng lượng ánh sáng để tự tổng hợp chất hữu cơ, nên thực vật tự dưỡng.',
            'Tế bào động vật không có lục lạp, không tự tổng hợp được chất hữu cơ từ chất vô cơ, nên động vật phải lấy thức ăn từ sinh vật khác (dị dưỡng).',
            'Không bào lớn chứa dịch tế bào, dự trữ nước và các chất, giữ cho tế bào luôn căng.',
          ],
        },
        {
          type: 'p',
          text: 'Hãy tự lập bảng so sánh: đánh dấu những thành phần có ở mỗi loại tế bào rồi kiểm tra.',
        },
        { type: 'widget', name: 'so-sanh' },
      ],
    },
  ],
  explore: {
    title: 'Sơ đồ các loại tế bào',
    instruction:
      'Chọn tế bào nhân sơ, tế bào động vật hoặc tế bào thực vật. Ở chế độ "Tìm hiểu", chạm vào từng số để đọc tên và chức năng; ở chế độ "Gọi tên", chạm vào một số rồi chọn đúng tên của nó; ở chế độ "Tìm vị trí", tìm thành phần được nêu tên.',
  },
  examples: [
    {
      problem:
        'Quan sát tế bào vi khuẩn, em thấy vật chất di truyền không có màng bao bọc. Tế bào vi khuẩn thuộc loại tế bào nào? Vì sao?',
      steps: [
        'Tế bào được chia thành nhân sơ và nhân thực dựa vào cấu tạo của nhân.',
        'Vật chất di truyền không có màng bao bọc, tức là tế bào chỉ có vùng nhân, chưa có nhân hoàn chỉnh.',
        'Đó là đặc điểm của tế bào nhân sơ.',
      ],
      answer: 'Tế bào vi khuẩn là tế bào nhân sơ, vì nó chưa có màng nhân, chỉ có vùng nhân.',
    },
    {
      problem:
        'Một tế bào có màng tế bào, tế bào chất, nhân có màng bao bọc, thành tế bào bằng cellulose và lục lạp. Đó là tế bào gì?',
      steps: [
        'Có nhân với màng nhân bao bọc, nên đây là tế bào nhân thực, không phải vi khuẩn.',
        'Có thành tế bào bằng cellulose và có lục lạp: đây là những thành phần tế bào động vật không có.',
        'Vậy đây là tế bào nhân thực có đặc điểm của thực vật.',
      ],
      answer: 'Đó là tế bào thực vật (ví dụ tế bào thịt lá).',
    },
    {
      problem:
        'Những điểm khác nhau giữa tế bào động vật và tế bào thực vật liên quan gì đến cách dinh dưỡng của động vật và thực vật?',
      steps: [
        'Tế bào thực vật có lục lạp chứa diệp lục. Lục lạp hấp thụ năng lượng ánh sáng để tổng hợp chất hữu cơ từ nước và khí carbon dioxide (quang hợp).',
        'Vì vậy thực vật tự tạo được chất dinh dưỡng: thực vật là sinh vật tự dưỡng.',
        'Tế bào động vật không có lục lạp nên không quang hợp được; động vật phải ăn thực vật hoặc động vật khác: động vật là sinh vật dị dưỡng.',
      ],
      answer:
        'Có lục lạp nên thực vật tự dưỡng; không có lục lạp nên động vật dị dưỡng, phải lấy chất hữu cơ từ sinh vật khác.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Ba thành phần chính của mọi tế bào là',
      options: [
        'thành tế bào, tế bào chất, lục lạp',
        'màng tế bào, tế bào chất, nhân hoặc vùng nhân',
        'màng tế bào, không bào, lục lạp',
        'thành tế bào, màng tế bào, không bào',
      ],
      answer: 1,
      hints: ['Thành phần cần tìm phải có ở cả vi khuẩn, tế bào động vật và tế bào thực vật.'],
      solution:
        'Mọi tế bào đều có màng tế bào, tế bào chất và nhân (ở tế bào nhân thực) hoặc vùng nhân (ở tế bào nhân sơ). Thành tế bào, lục lạp, không bào lớn không có ở tế bào động vật.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần của tế bào với chức năng của nó.',
      left: ['Màng tế bào', 'Tế bào chất', 'Nhân', 'Lục lạp'],
      right: [
        'Nơi diễn ra hầu hết các hoạt động sống của tế bào',
        'Nơi diễn ra quá trình quang hợp',
        'Bao bọc và điều khiển sự trao đổi chất giữa tế bào và môi trường',
        'Chứa vật chất di truyền, điều khiển mọi hoạt động sống của tế bào',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Lục lạp chứa diệp lục; nhân chứa vật chất di truyền.'],
      solution:
        'Màng tế bào: bao bọc, điều khiển trao đổi chất. Tế bào chất: nơi diễn ra hầu hết các hoạt động sống. Nhân: chứa vật chất di truyền, điều khiển hoạt động sống. Lục lạp: nơi quang hợp.',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau cơ bản giữa tế bào nhân sơ và tế bào nhân thực là',
      options: [
        'tế bào nhân thực có màng tế bào, tế bào nhân sơ thì không',
        'tế bào nhân sơ chưa có màng nhân, tế bào nhân thực có màng nhân bao bọc vật chất di truyền',
        'tế bào nhân sơ có lục lạp, tế bào nhân thực thì không',
        'tế bào nhân thực không có tế bào chất',
      ],
      answer: 1,
      hints: ['Tên gọi "nhân sơ" và "nhân thực" gợi ý điểm khác nhau nằm ở đâu?'],
      solution:
        'Cả hai loại đều có màng tế bào và tế bào chất. Khác biệt cơ bản: vật chất di truyền của tế bào nhân sơ nằm ở vùng nhân, không có màng bao bọc; tế bào nhân thực có nhân hoàn chỉnh với màng nhân.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các tế bào nhân sơ.',
      options: [
        'Vi khuẩn E. coli',
        'Tế bào nấm men',
        'Vi khuẩn lactic (trong sữa chua)',
        'Tế bào biểu bì vảy hành',
        'Tế bào niêm mạc miệng',
      ],
      answers: [0, 2],
      hints: ['Chỉ vi khuẩn có tế bào nhân sơ.', 'Nấm men là nấm đơn bào, có nhân hoàn chỉnh.'],
      solution:
        'Vi khuẩn E. coli và vi khuẩn lactic là tế bào nhân sơ. Nấm men, tế bào vảy hành và tế bào niêm mạc miệng đều có nhân có màng bao bọc, là tế bào nhân thực.',
    },
    {
      type: 'choice',
      prompt: 'Thành phần nào có ở tế bào thực vật nhưng không có ở tế bào động vật?',
      options: ['Màng tế bào', 'Nhân', 'Lục lạp', 'Tế bào chất'],
      answer: 2,
      hints: ['Ba thành phần chính thì cả hai loại tế bào đều có.'],
      solution:
        'Lục lạp (cùng với thành tế bào bằng cellulose và không bào lớn) chỉ có ở tế bào thực vật. Màng tế bào, tế bào chất và nhân có ở cả hai loại.',
    },
    {
      type: 'text',
      prompt: 'Bào quan nào là nơi diễn ra quá trình quang hợp ở tế bào thực vật?',
      accept: ['lục lạp', 'luc lap', 'lục lạp (chứa diệp lục)'],
      hints: ['Bào quan này chứa diệp lục, có màu xanh lục.'],
      solution: 'Lục lạp chứa diệp lục, hấp thụ năng lượng ánh sáng để tổng hợp chất hữu cơ.',
    },
    {
      type: 'choice',
      prompt:
        'Một tế bào có thành tế bào, màng tế bào, tế bào chất và vùng nhân (không có màng nhân), không có lục lạp. Đó là',
      options: ['tế bào thực vật', 'tế bào động vật', 'tế bào vi khuẩn', 'tế bào nấm men'],
      answer: 2,
      hints: [
        'Không có màng nhân là đặc điểm của loại tế bào nào?',
        'Có thành tế bào không có nghĩa chắc chắn là tế bào thực vật.',
      ],
      solution:
        'Vùng nhân không có màng bao bọc là đặc điểm của tế bào nhân sơ, tức là tế bào vi khuẩn. Vi khuẩn cũng có thành tế bào, nên đừng nhầm với tế bào thực vật (có nhân hoàn chỉnh và lục lạp).',
    },
    {
      type: 'choice',
      prompt: 'Màng tế bào có nhiều lỗ rất nhỏ. Các lỗ này giúp tế bào',
      options: [
        'quang hợp',
        'trao đổi chất với môi trường: cho chất cần thiết đi vào và chất thải đi ra',
        'chứa vật chất di truyền',
        'giữ hình dạng cố định',
      ],
      answer: 1,
      hints: ['Tế bào cần lấy nước, oxygen, chất dinh dưỡng và thải các chất không cần.'],
      solution:
        'Qua các lỗ nhỏ trên màng, nước, oxygen, chất dinh dưỡng đi vào tế bào và chất thải đi ra, nên màng điều khiển sự trao đổi chất giữa tế bào và môi trường.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao thực vật tự tổng hợp được chất hữu cơ còn động vật thì không?',
      options: [
        'Vì tế bào thực vật có thành tế bào',
        'Vì tế bào thực vật có lục lạp chứa diệp lục để quang hợp',
        'Vì tế bào thực vật có không bào lớn',
        'Vì tế bào động vật không có nhân',
      ],
      answer: 1,
      hints: ['Chất hữu cơ được thực vật tạo ra nhờ quá trình nào?'],
      solution:
        'Thực vật tạo chất hữu cơ nhờ quang hợp, diễn ra ở lục lạp. Tế bào động vật không có lục lạp nên động vật phải lấy thức ăn từ sinh vật khác. Tế bào động vật vẫn có nhân.',
    },
    {
      type: 'multi',
      prompt: 'Tế bào động vật và tế bào thực vật giống nhau ở những điểm nào?',
      options: [
        'Đều có màng tế bào',
        'Đều có thành tế bào bằng cellulose',
        'Đều có tế bào chất',
        'Đều có nhân có màng bao bọc',
        'Đều có lục lạp',
      ],
      answers: [0, 2, 3],
      hints: ['Cả hai đều là tế bào nhân thực.'],
      solution:
        'Cả hai loại đều là tế bào nhân thực, có màng tế bào, tế bào chất và nhân có màng bao bọc. Thành tế bào bằng cellulose và lục lạp chỉ có ở tế bào thực vật.',
    },
  ],
  takeaways: [
    'Mọi tế bào đều có màng tế bào (bao bọc, trao đổi chất), tế bào chất (nơi diễn ra các hoạt động sống) và nhân hoặc vùng nhân (chứa vật chất di truyền, điều khiển hoạt động sống).',
    'Tế bào nhân sơ (vi khuẩn) chưa có màng nhân, chỉ có vùng nhân; tế bào nhân thực có nhân hoàn chỉnh với màng nhân và các bào quan có màng.',
    'Tế bào động vật và thực vật đều là tế bào nhân thực; tế bào thực vật có thêm thành tế bào bằng cellulose, lục lạp và không bào lớn.',
    'Nhờ lục lạp, thực vật tự tổng hợp chất hữu cơ (tự dưỡng); động vật không có lục lạp nên dị dưỡng.',
  ],
};
