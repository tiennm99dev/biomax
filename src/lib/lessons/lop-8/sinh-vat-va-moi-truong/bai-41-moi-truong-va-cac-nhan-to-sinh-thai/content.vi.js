/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Môi trường sống và bốn loại môi trường chủ yếu; nhân tố sinh thái vô sinh và hữu sinh, vai trò của con người; giới hạn sinh thái với giới hạn dưới, giới hạn trên, khoảng thuận lợi, khoảng chống chịu và điểm cực thuận.',
  intro:
    'Một hồ nước, một khu rừng, thậm chí một thân cây hay cơ thể một con vật đều có thể là nơi sống của sinh vật. Vì sao cá rô phi nuôi ở miền Bắc hay chết rét vào những đợt rét đậm, trong khi ở miền Nam cá lớn nhanh quanh năm?',
  objectives: [
    'Phát biểu được khái niệm môi trường sống; kể được các loại môi trường sống chủ yếu và lấy được ví dụ.',
    'Nêu được khái niệm nhân tố sinh thái; phân biệt được nhân tố vô sinh và nhân tố hữu sinh, giải thích vì sao con người là nhân tố có ảnh hưởng lớn.',
    'Trình bày được khái niệm giới hạn sinh thái và vận dụng để chọn vật nuôi, cây trồng phù hợp.',
  ],
  sections: [
    {
      heading: 'Môi trường sống',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Môi trường sống',
          text: 'Môi trường sống là nơi sống của sinh vật, bao gồm tất cả những gì bao quanh sinh vật, có tác động trực tiếp hoặc gián tiếp lên sự tồn tại, sinh trưởng, phát triển và sinh sản của sinh vật.',
        },
        {
          type: 'p',
          text: 'Có bốn loại môi trường sống chủ yếu của sinh vật:',
        },
        {
          type: 'table',
          head: ['Loại môi trường', 'Đặc điểm', 'Ví dụ sinh vật'],
          rows: [
            [
              'Môi trường trên cạn',
              'Gồm mặt đất và lớp khí quyển gần mặt đất',
              'Hổ, cây lim, chim sẻ, con người',
            ],
            [
              'Môi trường nước',
              'Nước ngọt, nước lợ và nước mặn',
              'Cá chép, rong biển, tôm, cá voi',
            ],
            [
              'Môi trường trong đất',
              'Các lớp đất có độ sâu khác nhau',
              'Giun đất, dế dũi, chuột chũi',
            ],
            [
              'Môi trường sinh vật',
              'Cơ thể sinh vật khác (động vật, thực vật, con người)',
              'Sán lá gan trong gan bò, giun đũa trong ruột người, cây tầm gửi trên cây khác',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Nhân tố sinh thái',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhân tố sinh thái',
          text: 'Nhân tố sinh thái là những nhân tố của môi trường có tác động tới sinh vật.',
        },
        {
          type: 'list',
          items: [
            'Nhân tố vô sinh: các yếu tố không sống của môi trường như ánh sáng, nhiệt độ, độ ẩm, nước, gió, không khí, đất và chất khoáng…',
            'Nhân tố hữu sinh: các sinh vật khác và con người. Ví dụ với một cây xanh: sâu ăn lá, ong thụ phấn, cỏ dại cạnh tranh, vi sinh vật trong đất, con người chăm sóc hay chặt phá.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Con người là nhân tố hữu sinh đặc biệt',
          text: 'Con người cũng là sinh vật nên thuộc nhóm nhân tố hữu sinh. Nhưng khác các sinh vật khác, con người có trí tuệ và lao động có mục đích, nên tác động mạnh mẽ tới môi trường và sinh vật theo cả hai hướng: cải tạo, bảo vệ (trồng rừng, lập khu bảo tồn) hoặc phá hủy (chặt phá rừng, săn bắt, gây ô nhiễm).',
        },
        {
          type: 'p',
          text: 'Các nhân tố sinh thái luôn thay đổi theo thời gian (ngày đêm, mùa trong năm) và theo không gian. Hãy xếp các nhân tố quanh một cây xanh vào đúng nhóm.',
        },
        { type: 'widget', name: 'nhan-to' },
      ],
    },
    {
      heading: 'Giới hạn sinh thái',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Giới hạn sinh thái',
          text: 'Giới hạn sinh thái là giới hạn chịu đựng của sinh vật đối với một nhân tố sinh thái nhất định. Nằm ngoài giới hạn sinh thái, sinh vật yếu dần và chết.',
        },
        {
          type: 'list',
          items: [
            'Giới hạn dưới và giới hạn trên: hai điểm gây chết của sinh vật.',
            'Khoảng thuận lợi: khoảng giá trị của nhân tố sinh thái giúp sinh vật sinh trưởng, phát triển tốt nhất; trong đó có điểm cực thuận.',
            'Khoảng chống chịu: khoảng giá trị nằm giữa khoảng thuận lợi và một giới hạn, ở đó hoạt động sống của sinh vật bị ức chế.',
          ],
        },
        {
          type: 'table',
          caption: 'Giới hạn sinh thái về nhiệt độ của cá rô phi ở Việt Nam',
          head: ['Giới hạn dưới', 'Khoảng thuận lợi', 'Điểm cực thuận', 'Giới hạn trên'],
          rows: [['5 °C', '20 – 35 °C', '30 °C', '42 °C']],
        },
        {
          type: 'p',
          text: 'Mỗi loài có giới hạn sinh thái riêng với từng nhân tố. Loài có giới hạn sinh thái rộng với nhiều nhân tố thường phân bố rộng; loài có giới hạn hẹp thường phân bố hẹp. Ví dụ cá chép ở Việt Nam chịu được từ 2 °C đến 44 °C, rộng hơn cá rô phi.',
        },
        {
          type: 'p',
          text: 'Ứng dụng: chọn giống cây trồng, vật nuôi có giới hạn sinh thái phù hợp với điều kiện địa phương; gieo trồng đúng thời vụ; trồng cây ưa bóng (như cà phê, ca cao, sa nhân) dưới tán cây khác để có ánh sáng phù hợp. Thử chọn loài cá để nuôi ở một địa phương:',
        },
        { type: 'widget', name: 'chon-loai' },
      ],
    },
  ],
  explore: {
    title: 'Đồ thị giới hạn sinh thái của cá rô phi',
    instruction:
      'Kéo nút tròn trên đường cong (hoặc dùng thanh trượt, phím mũi tên) để đổi nhiệt độ nước. Quan sát khi nào cá ở khoảng thuận lợi, khoảng chống chịu và khi nào cá chết.',
  },
  examples: [
    {
      problem:
        'Cá rô phi ở Việt Nam có giới hạn sinh thái về nhiệt độ từ 5 °C đến 42 °C, khoảng thuận lợi 20 – 35 °C. Nhận xét tình trạng của cá khi nhiệt độ nước là 3 °C, 15 °C và 28 °C.',
      steps: [
        '3 °C thấp hơn giới hạn dưới 5 °C: nằm ngoài giới hạn sinh thái, cá chết.',
        '15 °C nằm trong khoảng 5 – 42 °C nhưng ngoài khoảng 20 – 35 °C: thuộc khoảng chống chịu, cá sống nhưng hoạt động bị ức chế, lớn chậm.',
        '28 °C nằm trong khoảng thuận lợi 20 – 35 °C: cá sinh trưởng, phát triển tốt.',
      ],
      answer:
        '3 °C: cá chết; 15 °C: cá sống trong khoảng chống chịu; 28 °C: cá ở khoảng thuận lợi, phát triển tốt.',
    },
    {
      problem:
        'Nước ao ở một địa phương quanh năm có nhiệt độ từ 16 °C đến 31 °C. Có ba loài cá với giới hạn sinh thái về nhiệt độ: loài A 10 – 40 °C (thuận lợi 22 – 32 °C); loài B 2 – 30 °C (thuận lợi 12 – 24 °C); loài C 5 – 38 °C (thuận lợi 15 – 33 °C). Nên chọn loài nào để nuôi?',
      steps: [
        'Loài B: nhiệt độ cao nhất 31 °C vượt giới hạn trên 30 °C, cá chết vào mùa nóng: loại.',
        'Loài A: 16 – 31 °C nằm trong giới hạn 10 – 40 °C nên cá sống được, nhưng 16 °C thấp hơn 22 °C: mùa lạnh cá ở khoảng chống chịu.',
        'Loài C: 16 – 31 °C nằm trọn trong khoảng thuận lợi 15 – 33 °C: cá phát triển tốt quanh năm.',
      ],
      answer: 'Nên chọn loài C.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các loại môi trường sống chủ yếu của sinh vật.',
      options: [
        'Môi trường trên cạn',
        'Môi trường nước',
        'Môi trường trong đất',
        'Môi trường sinh vật',
        'Môi trường chân không',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Có bốn loại môi trường sống chủ yếu; sinh vật không thể sống trong chân không.'],
      solution:
        'Bốn loại môi trường sống chủ yếu: trên cạn, nước, trong đất và sinh vật. Chân không không có không khí, nước nên không phải môi trường sống.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sinh vật với môi trường sống chủ yếu của nó.',
      left: ['Giun đất', 'Cá chép', 'Sán lá gan', 'Hổ'],
      right: [
        'Môi trường trên cạn',
        'Môi trường sinh vật',
        'Môi trường trong đất',
        'Môi trường nước',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 1],
        [3, 0],
      ],
      hints: ['Sán lá gan kí sinh trong gan của trâu, bò.'],
      solution:
        'Giun đất: trong đất; cá chép: nước; sán lá gan: sinh vật (sống trong cơ thể trâu, bò); hổ: trên cạn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nhân tố vô sinh.',
      options: ['Nhiệt độ', 'Cỏ dại', 'Độ ẩm', 'Chim sâu', 'Ánh sáng', 'Vi khuẩn trong đất'],
      answers: [0, 2, 4],
      hints: ['Nhân tố vô sinh là các yếu tố không sống của môi trường.'],
      solution:
        'Nhiệt độ, độ ẩm, ánh sáng là nhân tố vô sinh. Cỏ dại, chim sâu, vi khuẩn là sinh vật nên là nhân tố hữu sinh.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao con người được xem là nhân tố có ảnh hưởng lớn trong nhóm nhân tố hữu sinh?',
      options: [
        'Vì con người có trí tuệ, lao động có mục đích nên tác động mạnh mẽ tới môi trường, có thể cải tạo hoặc phá hủy môi trường',
        'Vì con người không phải là sinh vật',
        'Vì con người chỉ sống ở môi trường trên cạn',
        'Vì con người có số lượng nhiều nhất trong các loài',
      ],
      answer: 0,
      hints: ['Con người là sinh vật, nhưng có điểm gì khác các sinh vật khác?'],
      solution:
        'Con người là sinh vật nên thuộc nhân tố hữu sinh; nhờ có trí tuệ và lao động có mục đích, con người tác động mạnh mẽ tới tự nhiên theo cả hướng tích cực lẫn tiêu cực.',
    },
    {
      type: 'number',
      prompt:
        'Cá rô phi ở Việt Nam có giới hạn dưới về nhiệt độ là 5 °C và giới hạn trên là 42 °C. Giới hạn sinh thái về nhiệt độ của cá rô phi rộng bao nhiêu độ C?',
      answer: 37,
      unit: '°C',
      hints: ['Độ rộng = giới hạn trên − giới hạn dưới.'],
      solution: '$42 - 5 = 37$ °C.',
    },
    {
      type: 'choice',
      prompt: 'Nước ao nóng lên 38 °C. Cá rô phi (giới hạn 5 – 42 °C, thuận lợi 20 – 35 °C) sẽ:',
      options: [
        'Phát triển tốt nhất',
        'Sống trong khoảng thuận lợi',
        'Sống trong khoảng chống chịu, hoạt động bị ức chế',
        'Chết ngay',
      ],
      answer: 2,
      hints: ['So sánh 38 °C với khoảng thuận lợi rồi với giới hạn trên.'],
      solution:
        '$35 < 38 < 42$: 38 °C nằm trong giới hạn sinh thái nhưng ngoài khoảng thuận lợi, tức là khoảng chống chịu.',
    },
    {
      type: 'text',
      prompt:
        'Giá trị nhiệt độ mà tại đó sinh vật sinh trưởng, phát triển tốt nhất (30 °C với cá rô phi) được gọi là gì?',
      accept: ['điểm cực thuận', 'cực thuận'],
      hints: ['Điểm này nằm trong khoảng thuận lợi.'],
      solution: 'Đó là điểm cực thuận.',
    },
    {
      type: 'choice',
      prompt:
        'Nước ao ở một vùng quanh năm từ 13 °C đến 23 °C. Loài nào phù hợp nhất để nuôi? Loài A: 10 – 40 °C (thuận lợi 22 – 32 °C); loài B: 2 – 30 °C (thuận lợi 12 – 24 °C); loài C: 5 – 38 °C (thuận lợi 15 – 33 °C).',
      options: ['Loài A', 'Loài B', 'Loài C', 'Không loài nào sống được'],
      answer: 1,
      hints: ['Cả ba loài đều sống được; hãy tìm loài có khoảng thuận lợi chứa trọn 13 – 23 °C.'],
      solution:
        'Loài A: 13 < 22 nên mùa lạnh cá ở khoảng chống chịu. Loài C: 13 < 15, cũng vậy. Loài B: $12 \\le 13$ và $23 \\le 24$, quanh năm ở khoảng thuận lợi. Chọn loài B.',
    },
    {
      type: 'choice',
      prompt:
        'Cá chép ở Việt Nam chịu được nhiệt độ từ 2 °C đến 44 °C, cá rô phi từ 5 °C đến 42 °C. Nhận định nào đúng?',
      options: [
        'Cá chép có giới hạn sinh thái về nhiệt độ rộng hơn nên có khả năng phân bố rộng hơn',
        'Cá rô phi có giới hạn sinh thái rộng hơn',
        'Hai loài có giới hạn sinh thái như nhau',
        'Không thể so sánh hai loài',
      ],
      answer: 0,
      hints: ['Tính độ rộng giới hạn của mỗi loài.'],
      solution:
        'Cá chép: $44 - 2 = 42$ °C; cá rô phi: $42 - 5 = 37$ °C. Cá chép có giới hạn rộng hơn nên có thể sống ở nhiều vùng hơn.',
    },
  ],
  takeaways: [
    'Môi trường sống là nơi sống của sinh vật, gồm mọi thứ bao quanh và tác động tới sinh vật; có bốn loại: trên cạn, nước, trong đất, sinh vật.',
    'Nhân tố sinh thái là những nhân tố môi trường tác động tới sinh vật, gồm nhân tố vô sinh và nhân tố hữu sinh; con người là nhân tố hữu sinh có ảnh hưởng mạnh nhất.',
    'Giới hạn sinh thái là giới hạn chịu đựng của sinh vật với một nhân tố sinh thái, từ giới hạn dưới đến giới hạn trên; trong đó có khoảng thuận lợi (chứa điểm cực thuận) và khoảng chống chịu.',
    'Chọn cây trồng, vật nuôi có giới hạn sinh thái phù hợp với điều kiện địa phương.',
  ],
};
