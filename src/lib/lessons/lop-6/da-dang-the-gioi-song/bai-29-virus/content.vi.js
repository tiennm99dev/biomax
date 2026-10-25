/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Virus rất nhỏ, chưa có cấu tạo tế bào, gồm vỏ protein và lõi vật chất di truyền, có dạng xoắn, dạng khối hoặc dạng hỗn hợp; virus chỉ nhân lên được trong tế bào vật chủ, gây nhiều bệnh cho người, động vật, thực vật và được phòng chủ yếu bằng vaccine và vệ sinh.',
  intro:
    'Cảm cúm, thủy đậu, quai bị, COVID-19 đều là những bệnh lây rất nhanh. Tác nhân gây ra chúng còn nhỏ hơn vi khuẩn hàng chục lần, nhỏ đến mức kính hiển vi quang học trong phòng thí nghiệm của trường cũng không nhìn thấy được. Đó là virus. Virus có cấu tạo thế nào và vì sao chúng chỉ "sống" được khi ở trong tế bào khác?',
  objectives: [
    'Mô tả được hình dạng và cấu tạo đơn giản của virus; phân biệt được virus với vi khuẩn.',
    'Giải thích được vì sao virus chỉ sống kí sinh trong tế bào vật chủ.',
    'Nêu được một số bệnh do virus gây ra và các biện pháp phòng tránh; nêu được một số vai trò của virus.',
  ],
  sections: [
    {
      heading: 'Hình dạng và cấu tạo của virus',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Virus',
          text: 'Virus là dạng sống có kích thước rất nhỏ (chỉ vài chục đến vài trăm nanomet), chỉ quan sát được bằng kính hiển vi điện tử. Virus chưa có cấu tạo tế bào: chúng chỉ gồm vỏ protein bao bọc phần lõi là vật chất di truyền. Một số virus có thêm lớp vỏ ngoài.',
        },
        {
          type: 'table',
          caption: 'Ba dạng hình thái của virus',
          head: ['Dạng', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Dạng xoắn',
              'Vỏ protein gồm nhiều đơn vị xếp xoắn quanh lõi, tạo thành hình que hoặc hình sợi',
              'Virus khảm thuốc lá, virus dại',
            ],
            [
              'Dạng khối',
              'Vỏ protein ghép thành khối nhiều mặt bao lấy lõi',
              'Virus bại liệt, virus adeno',
            ],
            [
              'Dạng hỗn hợp',
              'Đầu dạng khối chứa vật chất di truyền, đuôi dạng xoắn',
              'Thực khuẩn thể (virus kí sinh ở vi khuẩn)',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'So sánh virus và vi khuẩn',
          head: ['Đặc điểm', 'Virus', 'Vi khuẩn'],
          rows: [
            ['Cấu tạo tế bào', 'Chưa có cấu tạo tế bào', 'Có cấu tạo tế bào (nhân sơ)'],
            [
              'Kích thước',
              'Rất nhỏ, vài chục đến vài trăm nm',
              'Lớn hơn, khoảng vài $\\mu\\text{m}$',
            ],
            ['Quan sát bằng', 'Kính hiển vi điện tử', 'Kính hiển vi quang học'],
            [
              'Sinh sản',
              'Chỉ nhân lên trong tế bào vật chủ',
              'Tự phân đôi khi có đủ chất dinh dưỡng',
            ],
            ['Thuốc kháng sinh', 'Không có tác dụng', 'Diệt được nhiều loại'],
          ],
        },
      ],
    },
    {
      heading: 'Virus chỉ sống kí sinh trong tế bào',
      blocks: [
        {
          type: 'p',
          text: 'Vì chưa có cấu tạo tế bào, virus không tự lấy chất dinh dưỡng, không tự tạo ra năng lượng và không tự sinh sản. Ở ngoài tế bào (trong nước, trên mặt bàn, trong không khí), virus chỉ như một hạt vật chất, không biểu hiện sự sống. Chỉ khi xâm nhập vào tế bào sống phù hợp (tế bào vật chủ), virus mới dùng nguyên liệu và năng lượng của tế bào đó để nhân lên.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ghi nhớ',
          text: 'Virus sống kí sinh bắt buộc trong tế bào của người, động vật, thực vật hoặc vi khuẩn. Mỗi loại virus thường chỉ kí sinh ở một số loại tế bào vật chủ nhất định.',
        },
        {
          type: 'p',
          text: 'Em có biết: trong tế bào vật chủ, virus nhân lên qua các bước bám, xâm nhập, tổng hợp, lắp ráp và giải phóng. Hãy chọn nơi virus rơi vào và bấm "Bước tiếp" để xem.',
        },
        { type: 'widget', name: 'nhan-len' },
      ],
    },
    {
      heading: 'Vai trò và tác hại của virus',
      blocks: [
        {
          type: 'list',
          items: [
            'Có ích: virus được dùng để sản xuất vaccine phòng bệnh, sản xuất thuốc trừ sâu sinh học (virus gây bệnh cho sâu hại), làm công cụ trong nghiên cứu và chuyển gene.',
            'Gây bệnh cho người: cúm, sởi, quai bị, thủy đậu, viêm gan B, HIV/AIDS, COVID-19, dại, sốt xuất huyết.',
            'Gây bệnh cho động vật: cúm gia cầm, lở mồm long móng ở trâu bò, dịch tả lợn châu Phi.',
            'Gây bệnh cho thực vật: khảm thuốc lá, xoăn lá cà chua, vàng lùn và lùn xoắn lá ở lúa.',
          ],
        },
        {
          type: 'p',
          text: 'Virus lây truyền qua nhiều con đường: đường hô hấp (giọt bắn khi ho, hắt hơi), đường tiêu hóa, đường máu, qua vết cắn của động vật (bệnh dại) hoặc qua côn trùng trung gian như muỗi (sốt xuất huyết), rầy (bệnh vàng lùn ở lúa).',
        },
      ],
    },
    {
      heading: 'Phòng bệnh do virus',
      blocks: [
        {
          type: 'list',
          items: [
            'Tiêm vaccine phòng bệnh đầy đủ, đúng lịch (sởi, viêm gan B, cúm, COVID-19, dại...).',
            'Đeo khẩu trang nơi đông người, rửa tay thường xuyên bằng xà phòng, che miệng khi ho, hắt hơi.',
            'Giữ vệ sinh nơi ở, ăn chín uống sôi; diệt muỗi, bọ gậy để phòng sốt xuất huyết.',
            'Hạn chế tiếp xúc với người bệnh, động vật bệnh; tiêm phòng cho vật nuôi.',
            'Với cây trồng: dùng giống sạch bệnh, diệt côn trùng truyền bệnh, tiêu hủy cây bệnh.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Kháng sinh không chữa được bệnh do virus',
          text: 'Thuốc kháng sinh tác động lên các cấu trúc của tế bào vi khuẩn. Virus chưa có cấu tạo tế bào nên kháng sinh không có tác dụng với virus. Vaccine là cách phòng bệnh do virus hiệu quả nhất.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô hình virus',
    instruction:
      'Chọn một trong ba dạng virus. Kéo ngang trên hình hoặc dùng thanh "Xoay mô hình" để xoay virus và quan sát vỏ protein, lõi vật chất di truyền.',
  },
  examples: [
    {
      problem:
        'Bạn Nam nói: "Virus cũng là một loại vi khuẩn rất nhỏ." Em hãy chỉ ra hai điểm khác nhau giữa virus và vi khuẩn để giúp Nam hiểu đúng.',
      steps: [
        'Cấu tạo: vi khuẩn có cấu tạo tế bào (thành tế bào, màng tế bào, tế bào chất, vùng nhân); virus chưa có cấu tạo tế bào, chỉ gồm vỏ protein và lõi vật chất di truyền.',
        'Cách sống: vi khuẩn tự lấy chất dinh dưỡng và tự phân đôi; virus chỉ nhân lên được khi ở trong tế bào vật chủ.',
        'Ngoài ra, virus nhỏ hơn vi khuẩn nhiều lần và kháng sinh không diệt được virus.',
      ],
      answer:
        'Nam nói chưa đúng: virus chưa có cấu tạo tế bào và chỉ sống kí sinh trong tế bào vật chủ, còn vi khuẩn là sinh vật đơn bào nhân sơ.',
    },
    {
      problem:
        'Một virus có kích thước khoảng $100$ nm, một vi khuẩn hình que dài khoảng $2\\ \\mu\\text{m}$. Biết $1\\ \\mu\\text{m} = 1\\,000$ nm. Vi khuẩn dài gấp bao nhiêu lần virus?',
      steps: [
        'Đổi về cùng đơn vị: $2\\ \\mu\\text{m} = 2 \\cdot 1\\,000 = 2\\,000$ nm.',
        'Tỉ số: $2\\,000 : 100 = 20$.',
      ],
      answer: 'Vi khuẩn dài gấp khoảng 20 lần virus.',
    },
    {
      problem:
        'Muỗi vằn có thể mang virus gây bệnh sốt xuất huyết. Vì sao diệt muỗi và bọ gậy (ấu trùng muỗi) lại giúp phòng bệnh này?',
      steps: [
        'Virus sốt xuất huyết không tự đi từ người này sang người khác qua không khí; nó được muỗi truyền khi muỗi đốt người bệnh rồi đốt người lành.',
        'Diệt muỗi và bọ gậy làm mất vật trung gian truyền bệnh, cắt đứt đường lây của virus.',
      ],
      answer: 'Vì muỗi là vật trung gian truyền virus; diệt muỗi, bọ gậy là cắt đường lây bệnh.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thành phần cấu tạo nên mọi virus.',
      options: ['Vỏ protein', 'Màng tế bào', 'Vật chất di truyền', 'Tế bào chất', 'Nhân tế bào'],
      answers: [0, 2],
      hints: ['Virus chưa có cấu tạo tế bào.'],
      solution:
        'Mọi virus đều gồm vỏ protein và lõi vật chất di truyền; một số có thêm vỏ ngoài. Virus không có màng tế bào, tế bào chất hay nhân.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi virus với dạng hình thái của nó.',
      left: ['Virus khảm thuốc lá', 'Virus bại liệt', 'Thực khuẩn thể'],
      right: ['Dạng khối', 'Dạng hỗn hợp', 'Dạng xoắn'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: ['Thực khuẩn thể có đầu và đuôi.'],
      solution:
        'Virus khảm thuốc lá: dạng xoắn; virus bại liệt: dạng khối; thực khuẩn thể (đầu khối, đuôi xoắn): dạng hỗn hợp.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao virus chỉ nhân lên được khi ở trong tế bào vật chủ?',
      options: [
        'Vì virus rất nhỏ',
        'Vì virus chưa có cấu tạo tế bào, không tự lấy chất dinh dưỡng và tạo năng lượng',
        'Vì virus sợ ánh sáng',
        'Vì virus có vỏ protein cứng',
      ],
      answer: 1,
      hints: ['Muốn nhân lên cần nguyên liệu và năng lượng. Virus lấy chúng từ đâu?'],
      solution:
        'Virus chưa có cấu tạo tế bào nên không tự lấy chất dinh dưỡng, không tự tạo năng lượng; chúng phải dùng nguyên liệu và năng lượng của tế bào vật chủ để nhân lên.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các bệnh do virus gây ra ở người.',
      options: ['Thủy đậu', 'Lao phổi', 'Sởi', 'Uốn ván', 'Viêm gan B', 'Tả'],
      answers: [0, 2, 4],
      hints: ['Lao, uốn ván, tả là bệnh do vi khuẩn.'],
      solution:
        'Thủy đậu, sởi, viêm gan B do virus gây ra. Lao phổi, uốn ván, tả do vi khuẩn gây ra.',
    },
    {
      type: 'choice',
      prompt: 'Muốn quan sát virus, người ta phải dùng',
      options: ['mắt thường', 'kính lúp', 'kính hiển vi quang học', 'kính hiển vi điện tử'],
      answer: 3,
      hints: ['Virus nhỏ hơn vi khuẩn nhiều lần.'],
      solution:
        'Virus chỉ vài chục đến vài trăm nanomet, quá nhỏ đối với kính hiển vi quang học; phải dùng kính hiển vi điện tử.',
    },
    {
      type: 'choice',
      prompt: 'Bạn Mai bị cúm. Việc làm nào sau đây là đúng?',
      options: [
        'Tự mua thuốc kháng sinh uống cho nhanh khỏi',
        'Đi khám, nghỉ ngơi, đeo khẩu trang để không lây cho người khác',
        'Vẫn đến lớp và dùng chung cốc với bạn',
        'Không cần làm gì vì cúm không lây',
      ],
      answer: 1,
      hints: ['Cúm do virus gây ra; kháng sinh có tác dụng với virus không?'],
      solution:
        'Cúm do virus gây ra nên kháng sinh không có tác dụng. Mai cần đi khám, nghỉ ngơi, đeo khẩu trang và không dùng chung đồ để tránh lây bệnh.',
    },
    {
      type: 'number',
      prompt:
        'Một virus có kích thước khoảng $50$ nm. Một tế bào vi khuẩn dài khoảng $1\\ \\mu\\text{m}$ ($1\\ \\mu\\text{m} = 1\\,000$ nm). Vi khuẩn dài gấp bao nhiêu lần virus?',
      answer: 20,
      unit: 'lần',
      hints: ['Đổi $1\\ \\mu\\text{m}$ ra nanomet rồi chia.'],
      solution: '$1\\ \\mu\\text{m} = 1\\,000$ nm; $1\\,000 : 50 = 20$ lần.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò có ích của virus.',
      options: [
        'Sản xuất vaccine',
        'Sản xuất thuốc trừ sâu sinh học',
        'Làm sữa chua',
        'Làm công cụ chuyển gene trong nghiên cứu',
        'Phân giải xác sinh vật thành mùn',
      ],
      answers: [0, 1, 3],
      hints: ['Làm sữa chua và phân giải xác sinh vật là vai trò của vi khuẩn.'],
      solution:
        'Virus được dùng để sản xuất vaccine, thuốc trừ sâu sinh học và làm công cụ chuyển gene. Làm sữa chua và phân giải xác sinh vật là việc của vi khuẩn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp phòng bệnh do virus.',
      options: [
        'Tiêm vaccine đầy đủ, đúng lịch',
        'Rửa tay bằng xà phòng, đeo khẩu trang nơi đông người',
        'Uống kháng sinh hằng ngày để phòng cúm',
        'Diệt muỗi, bọ gậy để phòng sốt xuất huyết',
      ],
      answers: [0, 1, 3],
      hints: ['Một biện pháp vừa không có tác dụng với virus vừa gây hại.'],
      solution:
        'Tiêm vaccine, rửa tay, đeo khẩu trang và diệt muỗi đều giúp phòng bệnh do virus. Uống kháng sinh không phòng được bệnh do virus và làm vi khuẩn kháng thuốc.',
    },
    {
      type: 'text',
      prompt: 'Virus sống kí sinh bắt buộc bên trong loại cấu trúc nào của sinh vật khác?',
      accept: ['tế bào', 'tế bào vật chủ', 'tế bào sống', 'trong tế bào'],
      hints: ['Đó là đơn vị cấu tạo nên mọi cơ thể sống.'],
      solution: 'Virus kí sinh bắt buộc trong tế bào sống (tế bào vật chủ).',
    },
  ],
  takeaways: [
    'Virus rất nhỏ, chỉ thấy bằng kính hiển vi điện tử; chưa có cấu tạo tế bào, gồm vỏ protein và lõi vật chất di truyền.',
    'Virus có ba dạng: dạng xoắn, dạng khối, dạng hỗn hợp.',
    'Virus chỉ nhân lên được trong tế bào vật chủ: chúng sống kí sinh bắt buộc.',
    'Virus gây nhiều bệnh (cúm, sởi, thủy đậu, viêm gan B, HIV/AIDS...); phòng bệnh bằng vaccine, vệ sinh, đeo khẩu trang, diệt vật trung gian; kháng sinh không diệt được virus.',
  ],
};
