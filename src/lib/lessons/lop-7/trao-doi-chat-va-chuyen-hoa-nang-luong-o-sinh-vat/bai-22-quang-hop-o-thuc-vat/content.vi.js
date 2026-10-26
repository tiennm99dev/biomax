/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm quang hợp, phương trình chữ của quang hợp, nguyên liệu và sản phẩm, lá là cơ quan quang hợp, sự chuyển hoá quang năng thành hoá năng và vai trò của quang hợp.',
  intro:
    'Một hạt đậu nhỏ có thể lớn thành cây đậu nặng gấp hàng trăm lần. Phần lớn khối lượng ấy không lấy từ đất mà được lá cây tạo nên từ nước và một chất khí trong không khí, nhờ năng lượng của ánh sáng Mặt Trời. Quá trình kì diệu đó là quang hợp: nhờ nó, cây xanh nuôi sống chính mình và gần như mọi sinh vật trên Trái Đất.',
  objectives: [
    'Mô tả được một cách tổng quát quá trình quang hợp ở tế bào lá cây; nêu được vai trò của lá cây với chức năng quang hợp.',
    'Nêu được khái niệm, nguyên liệu, sản phẩm của quang hợp và viết được phương trình quang hợp dạng chữ.',
    'Vẽ được sơ đồ diễn tả quang hợp diễn ra ở lá cây, qua đó nêu được quan hệ giữa trao đổi chất và chuyển hoá năng lượng.',
  ],
  sections: [
    {
      heading: 'Khái niệm quang hợp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quang hợp',
          text: 'Quang hợp là quá trình lá cây sử dụng nước và khí carbon dioxide nhờ năng lượng ánh sáng đã được diệp lục hấp thụ để tổng hợp chất hữu cơ và giải phóng khí oxygen.',
        },
        {
          type: 'p',
          text: 'Phương trình quang hợp dạng chữ:',
        },
        {
          type: 'table',
          caption: 'Phương trình chữ của quang hợp',
          head: ['Nguyên liệu', 'Điều kiện', 'Sản phẩm'],
          rows: [['Nước + Carbon dioxide', '⟶ (Ánh sáng, Diệp lục) ⟶', 'Glucose + Oxygen']],
        },
        {
          type: 'list',
          items: [
            'Nguyên liệu: nước (rễ hút từ đất, vận chuyển qua thân lên lá) và khí carbon dioxide $(\\mathrm{CO_2})$ (lấy từ không khí qua khí khổng).',
            'Điều kiện: năng lượng ánh sáng (ánh sáng Mặt Trời hoặc ánh sáng nhân tạo) và diệp lục trong lục lạp.',
            'Sản phẩm: chất hữu cơ, chủ yếu là glucose (một loại đường), và khí oxygen $(\\mathrm{O_2})$. Glucose có thể được chuyển thành tinh bột tích luỹ trong lá, hoặc theo mạch dẫn đến các bộ phận khác của cây.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Quan hệ giữa trao đổi chất và chuyển hoá năng lượng trong quang hợp',
          text: 'Trong quang hợp, hai quá trình diễn ra đồng thời và gắn liền với nhau. Trao đổi chất: lá lấy nước, carbon dioxide và tổng hợp thành glucose, thải oxygen. Chuyển hoá năng lượng: quang năng (năng lượng ánh sáng) được chuyển thành hoá năng tích luỹ trong chất hữu cơ.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá bên dưới, em hãy tự đưa nguyên liệu và điều kiện vào lá. Mỗi thứ đúng sẽ hiện vào phương trình chữ; khi đủ, bấm "Quang hợp" để xem lá tạo ra sản phẩm gì.',
        },
      ],
    },
    {
      heading: 'Lá là cơ quan quang hợp',
      blocks: [
        {
          type: 'p',
          text: 'Lá cây có nhiều đặc điểm phù hợp với chức năng quang hợp:',
        },
        {
          type: 'table',
          caption: 'Đặc điểm của lá và vai trò đối với quang hợp',
          head: ['Bộ phận của lá', 'Đặc điểm', 'Vai trò trong quang hợp'],
          rows: [
            ['Phiến lá', 'Dạng bản dẹt, rộng', 'Thu nhận được nhiều ánh sáng'],
            [
              'Gân lá',
              'Có mạch dẫn, toả khắp phiến lá',
              'Dẫn nước đến tế bào lá và dẫn chất hữu cơ đi nuôi cây',
            ],
            [
              'Lục lạp (trong tế bào thịt lá)',
              'Có rất nhiều, chứa diệp lục',
              'Hấp thụ năng lượng ánh sáng; là nơi diễn ra quang hợp',
            ],
            [
              'Khí khổng (ở lớp biểu bì)',
              'Lỗ nhỏ, đóng mở được, thường nhiều ở mặt dưới lá',
              'Cho khí carbon dioxide đi vào, khí oxygen và hơi nước đi ra',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Chạm vào các số trên hình để tìm hiểu từng bộ phận, rồi chuyển sang chế độ "Gọi tên" để tự kiểm tra.',
        },
        { type: 'widget', name: 'la-cay' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Không chỉ lá mới quang hợp',
          text: 'Lá là cơ quan quang hợp chủ yếu. Những bộ phận khác có màu xanh (chứa diệp lục) như thân non, vỏ quả xanh cũng quang hợp được, nhưng ít hơn lá nhiều.',
        },
      ],
    },
    {
      heading: 'Vai trò của quang hợp',
      blocks: [
        {
          type: 'list',
          items: [
            'Tạo ra chất hữu cơ: nguồn thức ăn cho chính cây và cho con người, động vật; nguyên liệu cho nhiều ngành sản xuất (gỗ, giấy, vải sợi, thuốc).',
            'Chuyển quang năng thành hoá năng: cung cấp năng lượng cho hầu hết sinh vật trên Trái Đất (qua chuỗi thức ăn) và tạo nên than đá, dầu mỏ từ xác sinh vật cổ.',
            'Thải khí oxygen cho sinh vật hô hấp và lấy đi khí carbon dioxide, giúp giữ cân bằng lượng khí oxygen và carbon dioxide trong không khí.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bảo vệ cây xanh',
          text: 'Chặt phá rừng làm giảm quang hợp trên Trái Đất: lượng carbon dioxide trong không khí tăng, lượng oxygen giảm, góp phần gây ô nhiễm không khí và biến đổi khí hậu. Vì vậy cần trồng và bảo vệ cây xanh.',
        },
      ],
    },
  ],
  explore: {
    title: 'Lá cây quang hợp',
    instruction:
      'Bấm hoặc kéo từng thứ vào lá. Nước, carbon dioxide và ánh sáng sẽ hiện dần trong phương trình chữ; các thứ khác bị từ chối kèm lí do. Đủ ba thứ, bấm "Quang hợp" để thấy glucose được tạo ra và oxygen thoát ra qua khí khổng.',
  },
  examples: [
    {
      problem:
        'Vẽ sơ đồ (bằng lời) diễn tả quá trình quang hợp ở lá cây, chỉ rõ đường đi của các chất vào và ra khỏi lá.',
      steps: [
        'Nước: được rễ hút từ đất, đi theo mạch dẫn trong thân, qua cuống và gân lá đến tế bào thịt lá.',
        'Khí carbon dioxide: từ không khí đi vào lá qua khí khổng.',
        'Ánh sáng: được diệp lục trong lục lạp hấp thụ; tại lục lạp, nước và carbon dioxide được tổng hợp thành glucose.',
        'Khí oxygen: thoát ra ngoài không khí qua khí khổng. Glucose (hoặc tinh bột) theo mạch dẫn ở gân lá đi đến các bộ phận của cây.',
      ],
      answer:
        'Nước (từ rễ, qua mạch dẫn) và carbon dioxide (qua khí khổng) vào lục lạp; nhờ ánh sáng và diệp lục tạo ra glucose (theo mạch dẫn đi nuôi cây) và oxygen (ra qua khí khổng).',
    },
    {
      problem:
        'Vì sao lá của hầu hết các loài cây có dạng bản dẹt, mỏng và thường xếp so le nhau trên cành?',
      steps: [
        'Quang hợp cần năng lượng ánh sáng, nên lá càng nhận được nhiều ánh sáng thì càng tổng hợp được nhiều chất hữu cơ.',
        'Phiến lá dạng bản dẹt, rộng làm tăng diện tích bề mặt tiếp nhận ánh sáng.',
        'Lá mỏng giúp ánh sáng và khí carbon dioxide dễ đến được các tế bào thịt lá.',
        'Lá xếp so le giúp các lá ít che khuất nhau, lá nào cũng nhận được ánh sáng.',
      ],
      answer:
        'Đó là những đặc điểm giúp lá thu nhận được nhiều ánh sáng nhất, phù hợp với chức năng quang hợp.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguyên liệu của quá trình quang hợp.',
      options: ['Nước', 'Khí oxygen', 'Khí carbon dioxide', 'Glucose', 'Tinh bột'],
      answers: [0, 2],
      hints: [
        'Nguyên liệu là những chất lá lấy vào để tổng hợp chất hữu cơ.',
        'Glucose và oxygen được tạo ra sau quang hợp.',
      ],
      solution:
        'Nguyên liệu của quang hợp là nước và khí carbon dioxide. Glucose (có thể chuyển thành tinh bột) và oxygen là sản phẩm.',
    },
    {
      type: 'choice',
      prompt: 'Phương trình chữ nào viết đúng quá trình quang hợp?',
      options: [
        'Nước + Carbon dioxide ⟶ (Ánh sáng, Diệp lục) ⟶ Glucose + Oxygen',
        'Glucose + Oxygen ⟶ (Ánh sáng, Diệp lục) ⟶ Nước + Carbon dioxide',
        'Nước + Oxygen ⟶ (Ánh sáng, Diệp lục) ⟶ Glucose + Carbon dioxide',
        'Nước + Carbon dioxide ⟶ (Bóng tối) ⟶ Glucose + Oxygen',
      ],
      answer: 0,
      hints: ['Quang hợp lấy vào carbon dioxide và thải ra oxygen, cần ánh sáng.'],
      solution:
        'Quang hợp: Nước + Carbon dioxide ⟶ (Ánh sáng, Diệp lục) ⟶ Glucose + Oxygen. Phương án thứ hai là chiều ngược lại (giống hô hấp tế bào).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận của lá với vai trò của nó trong quang hợp.',
      left: ['Phiến lá rộng, dẹt', 'Gân lá', 'Lục lạp', 'Khí khổng'],
      right: [
        'Cho khí carbon dioxide vào, khí oxygen ra',
        'Thu nhận nhiều ánh sáng',
        'Chứa diệp lục, nơi diễn ra quang hợp',
        'Dẫn nước đến lá và dẫn chất hữu cơ đi nuôi cây',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 2],
        [3, 0],
      ],
      hints: ['Gân lá chứa mạch dẫn; khí khổng là các lỗ nhỏ ở biểu bì lá.'],
      solution:
        'Phiến lá: thu nhận ánh sáng. Gân lá: dẫn nước và chất hữu cơ. Lục lạp: chứa diệp lục, nơi quang hợp. Khí khổng: trao đổi khí carbon dioxide và oxygen.',
    },
    {
      type: 'choice',
      prompt: 'Trong quang hợp, năng lượng được chuyển hoá như thế nào?',
      options: [
        'Hoá năng thành quang năng',
        'Quang năng thành hoá năng tích luỹ trong chất hữu cơ',
        'Nhiệt năng thành quang năng',
        'Hoá năng thành động năng',
      ],
      answer: 1,
      hints: ['Năng lượng đi vào lá ở dạng nào, và được cất giữ trong chất nào?'],
      solution:
        'Diệp lục hấp thụ quang năng (năng lượng ánh sáng) và chuyển thành hoá năng tích luỹ trong glucose và các chất hữu cơ khác.',
    },
    {
      type: 'text',
      prompt: 'Chất màu xanh trong lục lạp có khả năng hấp thụ năng lượng ánh sáng gọi là gì?',
      accept: ['diệp lục', 'chất diệp lục'],
      hints: ['Tên chất này có nghĩa là "lá xanh".'],
      solution: 'Đó là diệp lục, có trong lục lạp của tế bào lá.',
    },
    {
      type: 'choice',
      prompt: 'Khí carbon dioxide đi vào lá qua bộ phận nào?',
      options: ['Gân lá', 'Khí khổng', 'Cuống lá', 'Lục lạp'],
      answer: 1,
      hints: ['Đó là những lỗ nhỏ trên lớp biểu bì, thường nhiều ở mặt dưới lá.'],
      solution:
        'Khí carbon dioxide trong không khí đi vào lá qua khí khổng; oxygen và hơi nước cũng đi ra qua khí khổng.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò của quang hợp.',
      options: [
        'Tạo chất hữu cơ làm thức ăn cho sinh vật',
        'Cung cấp khí oxygen cho hô hấp của sinh vật',
        'Làm tăng lượng carbon dioxide trong không khí',
        'Chuyển quang năng thành hoá năng, nguồn năng lượng cho hầu hết sinh vật',
        'Góp phần giữ cân bằng lượng oxygen và carbon dioxide trong không khí',
      ],
      answers: [0, 1, 3, 4],
      hints: ['Quang hợp lấy carbon dioxide hay thải carbon dioxide?'],
      solution:
        'Quang hợp tạo chất hữu cơ, thải oxygen, chuyển quang năng thành hoá năng và giữ cân bằng khí trong không khí. Quang hợp lấy carbon dioxide nên làm giảm, không làm tăng, lượng khí này.',
    },
    {
      type: 'choice',
      prompt:
        'Một chậu cây được đặt trong phòng kín không có ánh sáng nhiều ngày. Điều gì xảy ra với quang hợp của cây?',
      options: [
        'Cây quang hợp mạnh hơn vì không bị nắng',
        'Cây không quang hợp được vì thiếu năng lượng ánh sáng',
        'Cây vẫn quang hợp bình thường nhờ diệp lục',
        'Cây quang hợp bằng nhiệt của phòng',
      ],
      answer: 1,
      hints: ['Diệp lục cần hấp thụ gì để quang hợp?'],
      solution:
        'Quang hợp cần năng lượng ánh sáng được diệp lục hấp thụ. Không có ánh sáng, cây không quang hợp được, không tạo ra chất hữu cơ và sẽ yếu dần.',
    },
  ],
  takeaways: [
    'Quang hợp là quá trình lá cây sử dụng nước và khí carbon dioxide nhờ năng lượng ánh sáng đã được diệp lục hấp thụ để tổng hợp chất hữu cơ và giải phóng khí oxygen.',
    'Nước + Carbon dioxide ⟶ (Ánh sáng, Diệp lục) ⟶ Glucose + Oxygen.',
    'Lá là cơ quan quang hợp: phiến lá rộng nhận nhiều ánh sáng, gân lá dẫn nước và chất hữu cơ, lục lạp chứa diệp lục, khí khổng trao đổi khí.',
    'Trong quang hợp, trao đổi chất và chuyển hoá năng lượng diễn ra đồng thời: quang năng được chuyển thành hoá năng tích luỹ trong chất hữu cơ.',
    'Quang hợp cung cấp chất hữu cơ, năng lượng và oxygen cho sinh vật, đồng thời giữ cân bằng khí trong không khí.',
  ],
};
