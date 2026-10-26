/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu tạo và chức năng của hệ hô hấp; cơ chế thông khí (hít vào, thở ra) nhờ cơ liên sườn và cơ hoành; trao đổi khí ở phổi và ở tế bào theo cơ chế khuếch tán; một số bệnh về hô hấp, tác hại của thuốc lá, cách phòng tránh và hô hấp nhân tạo.',
  intro:
    'Em có thể nhịn ăn vài ngày, nhịn uống một ngày, nhưng chỉ cần ngừng thở vài phút là đã nguy hiểm đến tính mạng. Mỗi ngày, chúng ta hít thở hơn hai mươi nghìn lần mà hầu như không để ý. Không khí đi vào phổi bằng cách nào khi phổi không có cơ? Oxygen từ phổi đến từng tế bào ra sao? Vì sao khói thuốc lá lại có hại đến vậy?',
  objectives: [
    'Nêu được chức năng của hệ hô hấp; kể tên và nêu chức năng của các cơ quan trong hệ hô hấp.',
    'Mô tả được cơ chế hít vào, thở ra; mô tả được quá trình trao đổi khí ở phổi và ở tế bào.',
    'Trình bày được một số bệnh về phổi, đường hô hấp và cách phòng tránh; nêu được tác hại của thuốc lá; biết cách hô hấp nhân tạo khi cấp cứu người đuối nước.',
  ],
  sections: [
    {
      heading: 'Cấu tạo và chức năng của hệ hô hấp',
      blocks: [
        {
          type: 'p',
          text: 'Hệ hô hấp gồm đường dẫn khí (mũi, họng, thanh quản, khí quản, phế quản) và hai lá phổi. Mỗi lá phổi gồm rất nhiều phế nang, bao quanh mỗi phế nang là mạng mao mạch dày đặc. Đường dẫn khí dẫn không khí vào và ra khỏi phổi; phổi là nơi trao đổi khí giữa cơ thể và môi trường.',
        },
        {
          type: 'table',
          caption: 'Các cơ quan của hệ hô hấp',
          head: ['Cơ quan', 'Đặc điểm', 'Chức năng'],
          rows: [
            [
              'Mũi',
              'Có lông mũi, lớp niêm mạc tiết chất nhầy, nhiều mao mạch',
              'Ngăn bụi, làm ẩm và làm ấm không khí',
            ],
            [
              'Họng',
              'Có tuyến amidan và tuyến V.A chứa nhiều tế bào lympho',
              'Tiêu diệt bớt vi khuẩn trong không khí',
            ],
            [
              'Thanh quản',
              'Có nắp thanh quản (sụn thanh thiệt) đậy kín đường hô hấp khi nuốt',
              'Dẫn khí, không cho thức ăn lọt vào đường hô hấp, phát âm',
            ],
            [
              'Khí quản',
              'Lớp niêm mạc tiết chất nhầy, có nhiều lông rung chuyển động liên tục',
              'Dẫn khí, cản bụi và vật lạ',
            ],
            ['Phế quản', 'Phân nhánh nhiều lần, nhỏ dần đến tận phế nang', 'Dẫn khí vào phổi'],
            [
              'Phổi',
              'Gồm rất nhiều phế nang, bao quanh là mạng mao mạch dày đặc',
              'Trao đổi khí giữa phế nang và máu',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Thông khí và trao đổi khí',
      blocks: [
        {
          type: 'p',
          text: 'Phổi không tự co giãn được. Không khí vào, ra khỏi phổi là nhờ thể tích lồng ngực thay đổi do hoạt động của các cơ hô hấp (cơ liên sườn ngoài, cơ hoành) và sự chuyển động của xương sườn, xương ức.',
        },
        {
          type: 'table',
          caption: 'Cơ chế thông khí',
          head: ['Bộ phận', 'Hít vào', 'Thở ra'],
          rows: [
            ['Cơ liên sườn ngoài', 'Co', 'Dãn'],
            ['Xương sườn, xương ức', 'Nâng lên', 'Hạ xuống'],
            ['Cơ hoành', 'Co, hạ xuống', 'Dãn, nâng lên'],
            ['Thể tích lồng ngực', 'Tăng', 'Giảm'],
            ['Không khí', 'Đi vào phổi', 'Bị đẩy ra ngoài'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Trao đổi khí',
          text: 'Các khí trao đổi theo cơ chế khuếch tán, từ nơi có nồng độ cao đến nơi có nồng độ thấp. Ở phổi: O₂ khuếch tán từ phế nang vào máu, CO₂ khuếch tán từ máu vào phế nang. Ở tế bào: O₂ khuếch tán từ máu vào tế bào, CO₂ khuếch tán từ tế bào vào máu.',
        },
        {
          type: 'p',
          text: 'Chọn nơi trao đổi khí và kéo thanh trượt để theo dõi máu đi dọc mao mạch. Chú ý: khí khuếch tán mạnh khi chênh lệch nồng độ lớn và gần như ngừng khi nồng độ hai bên bằng nhau.',
        },
        { type: 'widget', name: 'trao-doi-khi' },
      ],
    },
    {
      heading: 'Bệnh về hô hấp và bảo vệ hệ hô hấp',
      blocks: [
        {
          type: 'table',
          caption: 'Một số bệnh về hô hấp',
          head: ['Bệnh', 'Nguyên nhân', 'Biểu hiện'],
          rows: [
            [
              'Viêm đường hô hấp (viêm mũi, viêm họng, viêm phế quản)',
              'Không khí ô nhiễm chứa vi sinh vật, chất độc hại',
              'Đau, rát, sưng họng; ho có đờm; sốt; mệt mỏi',
            ],
            [
              'Viêm phổi',
              'Virus, vi khuẩn, nấm hoặc hóa chất; phế nang viêm tiết dịch làm giảm trao đổi khí',
              'Đau ngực, ho, sốt, khó thở, mệt mỏi',
            ],
            [
              'Lao phổi',
              'Vi khuẩn lao (Mycobacterium tuberculosis); lây qua đường hô hấp',
              'Ho kéo dài (có thể ho ra máu), sốt nhẹ về chiều, sút cân, mệt mỏi',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Carbon monoxide (CO) trong khói thuốc chiếm chỗ của O₂ trong hồng cầu, làm cơ thể thiếu oxygen.',
            'Nitrogen oxide (NOₓ) gây viêm, sưng lớp niêm mạc đường hô hấp, cản trở trao đổi khí.',
            'Nicotine làm tê liệt lớp lông rung trong phế quản, giảm khả năng lọc sạch không khí; khói thuốc làm tăng nguy cơ ung thư phổi.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bảo vệ hệ hô hấp',
          text: 'Đeo khẩu trang nơi ô nhiễm, đông người; không hút thuốc lá và tránh khói thuốc; trồng nhiều cây xanh, giữ nhà cửa thông thoáng; giữ ấm cơ thể; tiêm vaccine phòng bệnh; vệ sinh mũi họng; tập thể dục, ăn uống đủ chất.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Hô hấp nhân tạo khi cấp cứu người đuối nước: đưa nạn nhân lên bờ, đến chỗ khô ráo, thoáng khí; loại bỏ nước, dị vật trong miệng.',
            'Hà hơi thổi ngạt: đặt nạn nhân nằm ngửa, đầu hơi ngửa ra sau; bịt mũi nạn nhân; hít sâu rồi áp miệng vào miệng nạn nhân và thổi hết sức; lặp lại khoảng 12–20 lần mỗi phút đến khi nạn nhân tự thở được.',
            'Ấn lồng ngực: đặt nạn nhân nằm ngửa, kê gối mềm dưới lưng để đầu hơi ngửa ra sau; cầm hai cẳng tay (hoặc cổ tay) nạn nhân, dùng sức nặng cơ thể ép vào ngực nạn nhân để đẩy không khí trong phổi ra ngoài; rồi dang tay nạn nhân đưa về phía đầu để lồng ngực giãn ra, không khí vào phổi; lặp lại khoảng 12–20 lần mỗi phút.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khi tim ngừng đập',
          text: 'Nếu tim nạn nhân cũng ngừng đập thì phải vừa thổi ngạt vừa ép tim ngoài lồng ngực (xoa bóp tim): đặt hai bàn tay chồng lên nhau ở giữa ngực, ép nhanh và mạnh khoảng 100–120 lần mỗi phút, cứ 30 lần ép tim thì thổi ngạt 2 lần. Đồng thời gọi ngay cấp cứu 115 và nhờ người lớn giúp đỡ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô hình phổi phồng, xẹp theo cơ hoành',
    instruction:
      'Bấm "Hít vào", "Thở ra" hoặc "Thở đều", hay kéo thanh trượt. Quan sát xương sườn nâng lên, hạ xuống, cơ hoành phẳng ra hay vồng lên, phổi phồng hay xẹp và chiều của dòng không khí.',
  },
  examples: [
    {
      problem: 'Vì sao khi hít vào, không khí từ ngoài tự đi vào phổi?',
      steps: [
        'Khi hít vào, cơ liên sườn ngoài co làm xương sườn và xương ức nâng lên, lồng ngực rộng ra hai bên và ra phía trước.',
        'Cơ hoành co, hạ xuống làm lồng ngực mở rộng thêm về phía dưới.',
        'Thể tích lồng ngực tăng, phổi giãn theo, áp suất khí trong phổi giảm xuống thấp hơn áp suất không khí bên ngoài.',
        'Không khí di chuyển từ nơi áp suất cao (bên ngoài) vào phổi.',
      ],
      answer:
        'Vì cơ liên sườn ngoài và cơ hoành co làm thể tích lồng ngực và phổi tăng, áp suất trong phổi giảm nên không khí từ ngoài đi vào.',
    },
    {
      problem:
        'Trong phòng kín có nhiều người hút thuốc, vì sao người ngồi cạnh (hút thuốc thụ động) cũng bị hại?',
      steps: [
        'Khói thuốc chứa CO, NOₓ, nicotine lan ra không khí trong phòng.',
        'Người ngồi cạnh hít phải khói: CO chiếm chỗ O₂ trong hồng cầu làm cơ thể thiếu oxygen; NOₓ gây viêm niêm mạc đường hô hấp.',
        'Nicotine làm tê liệt lông rung ở phế quản, đường hô hấp kém tự làm sạch, dễ mắc bệnh và tăng nguy cơ ung thư phổi.',
      ],
      answer:
        'Vì người đó hít phải các chất độc trong khói thuốc (CO, NOₓ, nicotine) nên cũng bị thiếu oxygen, viêm đường hô hấp và tăng nguy cơ ung thư như người hút thuốc.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các cơ quan theo đường đi của không khí khi hít vào.',
      items: ['Thanh quản', 'Phế quản', 'Mũi', 'Phổi (phế nang)', 'Khí quản', 'Họng'],
      answer: [2, 5, 0, 4, 1, 3],
      hints: ['Không khí vào mũi trước tiên và kết thúc ở phế nang.'],
      solution: 'Mũi → họng → thanh quản → khí quản → phế quản → phổi (phế nang).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi cơ quan hô hấp với chức năng của nó.',
      left: ['Mũi', 'Thanh quản', 'Khí quản', 'Phổi'],
      right: [
        'Trao đổi khí giữa phế nang và máu',
        'Ngăn bụi, làm ẩm, làm ấm không khí',
        'Có lông rung và chất nhầy cản bụi, dẫn khí',
        'Có nắp đậy khi nuốt, giúp phát âm',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 2],
        [3, 0],
      ],
      hints: ['Cơ quan nào chứa dây thanh âm?'],
      solution:
        'Mũi: làm sạch, ẩm, ấm không khí. Thanh quản: nắp thanh quản đậy khi nuốt, phát âm. Khí quản: lông rung, chất nhầy cản bụi. Phổi: trao đổi khí.',
    },
    {
      type: 'choice',
      prompt: 'Khi hít vào, các cơ hô hấp hoạt động như thế nào?',
      options: [
        'Cơ liên sườn ngoài co, cơ hoành co',
        'Cơ liên sườn ngoài dãn, cơ hoành dãn',
        'Cơ liên sườn ngoài co, cơ hoành dãn',
        'Phổi tự co lại',
      ],
      answer: 0,
      hints: ['Khi hít vào, thể tích lồng ngực tăng.'],
      solution:
        'Hít vào: cơ liên sườn ngoài co (nâng xương sườn), cơ hoành co (hạ xuống) làm thể tích lồng ngực tăng.',
    },
    {
      type: 'choice',
      prompt: 'Khi thở ra, cơ hoành và thể tích lồng ngực thay đổi thế nào?',
      options: [
        'Cơ hoành co, hạ xuống; thể tích lồng ngực tăng',
        'Cơ hoành dãn, nâng lên; thể tích lồng ngực giảm',
        'Cơ hoành dãn, hạ xuống; thể tích lồng ngực tăng',
        'Cơ hoành không đổi; thể tích lồng ngực không đổi',
      ],
      answer: 1,
      hints: ['Thở ra là quá trình ngược lại với hít vào.'],
      solution: 'Khi thở ra, cơ hoành dãn, vồng lên (nâng lên) nên thể tích lồng ngực giảm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nơi trao đổi khí với chiều khuếch tán của O₂.',
      left: ['Ở phổi', 'Ở tế bào'],
      right: ['Từ máu vào tế bào', 'Từ phế nang vào máu', 'Từ máu vào phế nang'],
      pairs: [
        [0, 1],
        [1, 0],
      ],
      hints: ['O₂ luôn khuếch tán từ nơi có nồng độ cao đến nơi có nồng độ thấp.'],
      solution:
        'Ở phổi, phế nang giàu O₂ hơn máu nên O₂ từ phế nang vào máu. Ở tế bào, máu giàu O₂ hơn tế bào nên O₂ từ máu vào tế bào.',
    },
    {
      type: 'number',
      prompt:
        'Một bạn học sinh lúc nghỉ thở $16$ lần mỗi phút, mỗi lần hít vào khoảng $500$ ml không khí. Trong một phút, bạn hít vào khoảng bao nhiêu lít không khí?',
      answer: 8,
      unit: 'lít',
      hints: ['Tính tổng số mililít rồi đổi sang lít ($1$ lít $= 1\\,000$ ml).'],
      solution: '$16 \\cdot 500 = 8\\,000$ ml $= 8$ lít.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất trong khói thuốc lá với tác hại của nó.',
      left: ['Carbon monoxide (CO)', 'Nitrogen oxide (NOₓ)', 'Nicotine'],
      right: [
        'Làm tê liệt lông rung trong phế quản',
        'Chiếm chỗ của O₂ trong hồng cầu',
        'Gây viêm, sưng lớp niêm mạc đường hô hấp',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Chất nào gắn vào hồng cầu thay cho oxygen?'],
      solution:
        'CO chiếm chỗ O₂ trong hồng cầu; NOₓ gây viêm, sưng niêm mạc; nicotine làm tê liệt lông rung.',
    },
    {
      type: 'choice',
      prompt: 'Bệnh lao phổi do tác nhân nào gây ra?',
      options: ['Virus cúm', 'Vi khuẩn lao', 'Bụi mịn', 'Thiếu vitamin'],
      answer: 1,
      hints: ['Tên khoa học của tác nhân này là Mycobacterium tuberculosis.'],
      solution:
        'Lao phổi do vi khuẩn lao (Mycobacterium tuberculosis) gây ra, lây qua đường hô hấp; tiêm vaccine BCG giúp phòng bệnh.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp giúp bảo vệ hệ hô hấp.',
      options: [
        'Đeo khẩu trang khi ra đường nhiều bụi',
        'Trồng nhiều cây xanh',
        'Hút thuốc lá trong phòng kín',
        'Giữ ấm cơ thể khi trời lạnh',
        'Đóng kín cửa, không bao giờ thông gió',
      ],
      answers: [0, 1, 3],
      hints: ['Biện pháp nào giúp không khí hít vào sạch hơn?'],
      solution:
        'Đeo khẩu trang, trồng cây xanh và giữ ấm cơ thể giúp bảo vệ hệ hô hấp. Hút thuốc trong phòng kín và không thông gió làm không khí ô nhiễm.',
    },
  ],
  takeaways: [
    'Hệ hô hấp gồm đường dẫn khí (mũi, họng, thanh quản, khí quản, phế quản) và hai lá phổi với rất nhiều phế nang được bao bởi mao mạch.',
    'Hít vào: cơ liên sườn ngoài và cơ hoành co, lồng ngực tăng thể tích, không khí vào phổi. Thở ra: hai cơ dãn, lồng ngực giảm thể tích, không khí ra ngoài.',
    'Trao đổi khí theo cơ chế khuếch tán: ở phổi O₂ vào máu, CO₂ ra phế nang; ở tế bào O₂ vào tế bào, CO₂ vào máu.',
    'Viêm đường hô hấp, viêm phổi, lao phổi là các bệnh thường gặp; khói thuốc lá (CO, NOₓ, nicotine) rất có hại. Cần đeo khẩu trang, không hút thuốc, tiêm vaccine, giữ môi trường trong lành.',
  ],
};
