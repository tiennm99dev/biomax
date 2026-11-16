/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành tách chiết DNA từ gan gà (hoặc mô thực vật) bằng nước rửa bát, nước dứa và cồn lạnh: nguyên lí, chuẩn bị, các bước tiến hành, quan sát DNA kết tủa và mẫu báo cáo.',
  intro:
    'DNA nằm trong nhân của từng tế bào và nhỏ đến mức kính hiển vi quang học cũng không thấy được một phân tử. Vậy mà chỉ với gan gà, nước rửa bát, nước dứa và cồn, em có thể tận mắt thấy những sợi DNA trắng đục nổi lên trong ống nghiệm. Bài này cho em biết làm thế nào và vì sao mỗi bước lại cần thiết.',
  objectives: [
    'Giải thích được nguyên lí của từng bước tách chiết DNA: phá màng, phân giải protein, kết tủa DNA.',
    'Thực hiện được các bước tách chiết DNA từ mẫu vật sống theo đúng trình tự.',
    'Quan sát và mô tả được DNA kết tủa; giải thích được nguyên nhân khi kết quả không như mong đợi.',
    'Viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Nguyên lí',
      blocks: [
        {
          type: 'p',
          text: 'Trong tế bào nhân thực, DNA nằm trong nhân, được bao bởi màng nhân và màng tế bào (ở thực vật còn có thành tế bào), đồng thời liên kết chặt với protein histone. Muốn thu được DNA, phải lần lượt gỡ bỏ các "lớp bọc" đó rồi làm cho DNA kết tủa.',
        },
        {
          type: 'table',
          caption: 'Vai trò của từng tác nhân',
          head: ['Tác nhân', 'Tác dụng'],
          rows: [
            ['Nghiền mẫu', 'Phá vỡ mô và thành tế bào, tách rời các tế bào'],
            [
              'Nước rửa bát (chất tẩy rửa)',
              'Hoà tan lipid của màng tế bào và màng nhân, giải phóng DNA ra dịch',
            ],
            [
              'Nước dứa tươi',
              'Chứa enzyme bromelain phân giải protein, tách protein (histone) khỏi DNA',
            ],
            ['Cồn lạnh', 'DNA không tan trong cồn nên kết tủa, tách khỏi các chất tan khác'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nhận biết DNA',
          text: 'DNA kết tủa là những sợi hoặc đám trắng đục, nhầy, nổi lên ở lớp cồn. Có thể khẳng định đó là DNA bằng phản ứng với thuốc thử diphenylamine (cho màu xanh lam); bài thực hành này không làm phản ứng đó.',
        },
      ],
    },
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: gan gà (hoặc gan lợn, mô động vật hay thực vật tươi khác). Gan dễ nghiền và giàu DNA nên được ưu tiên. Mô thực vật (như chuối) nhiều nước, ít DNA và có sắc tố cần loại bỏ, nên cần lượng mẫu lớn hơn: khoảng $5$ g mô động vật hoặc khoảng $50$ g mô thực vật.',
            'Dụng cụ: chày cối sứ hoặc máy xay, ống nghiệm, giá ống nghiệm, giấy lọc, phễu, que tre dài hoặc đũa thuỷ tinh.',
            'Hoá chất: $\\tfrac14$ quả dứa tươi, nước rửa bát (hoặc chất tẩy rửa), cồn ethanol $70$–$95\\%$ để lạnh.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Cồn dễ cháy: để xa ngọn lửa. Không nếm hoá chất và mẫu vật; rửa tay sau khi làm. Giữ lạnh mẫu và các dung dịch để DNA ít bị phân huỷ.',
        },
      ],
    },
    {
      heading: 'Cách tiến hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Nghiền nhỏ khoảng $5$ g gan gà bằng cối chày (hoặc xay máy $30$–$60$ giây), thêm khoảng $150$ mL nước lạnh, khuấy đều. Gọt vỏ $\\tfrac14$ quả dứa, nghiền và vắt lấy nước cho vào ống nghiệm.',
            'Lọc dịch nghiền gan qua giấy lọc, giữ lấy phần dịch trong.',
            'Trộn dịch lọc với khoảng $30$ mL nước rửa bát pha loãng trong ống nghiệm sạch, khuấy đều, để trên giá $5$–$10$ phút.',
            'Chuyển hỗn hợp sang ống nghiệm mới đến khoảng $\\tfrac13$ đến $\\tfrac12$ ống. Thêm $5$ mL nước dứa tươi, khuấy nhẹ, để khoảng $10$ phút.',
            'Nghiêng ống, rót thật nhẹ cồn lạnh theo thành ống đến gần đầy ống. Sau vài phút, DNA kết tủa thành các sợi trắng đục ở lớp cồn.',
            'Xoay nhẹ que tre hoặc đũa thuỷ tinh trong lớp cồn để quấn DNA ra ngoài. Tránh khuấy mạnh làm đứt gãy DNA.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao rót cồn nhẹ theo thành ống?',
          text: 'Cồn nhẹ hơn nước nên khi rót nhẹ, cồn tạo thành một lớp riêng nằm trên dịch tế bào. DNA kết tủa ở ranh giới hai lớp rồi nổi lên lớp cồn, nên dễ thấy và dễ vớt. Nếu đổ mạnh và lắc, cồn trộn lẫn vào dịch, DNA lơ lửng khắp ống.',
        },
      ],
    },
    {
      heading: 'Kết quả và báo cáo',
      blocks: [
        {
          type: 'p',
          text: 'Kết quả mong đợi: sau vài phút, ở ranh giới giữa dịch tế bào và lớp cồn xuất hiện các sợi trắng đục, nhầy, nổi dần lên lớp cồn; quấn được các sợi đó quanh que tre. Mỗi sợi nhìn thấy được là DNA của rất nhiều tế bào gộp lại.',
        },
        {
          type: 'p',
          text: 'Báo cáo thực hành gồm: mục đích, kết quả và giải thích, trả lời câu hỏi. Mỗi dấu … là một ô cần điền.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng kết quả',
          head: ['Mẫu vật', 'Khối lượng mẫu', 'Hiện tượng sau khi rót cồn', 'Giải thích'],
          rows: [
            ['Gan gà', '…', '…', '…'],
            ['Mẫu khác (nếu có)', '…', '…', '…'],
          ],
        },
        {
          type: 'list',
          items: [
            'Vì sao phải dùng nước rửa bát hoặc chất tẩy rửa?',
            'Vì sao phải dùng nước dứa? Có thể thay nước dứa bằng gì?',
            'Vì sao phải dùng cồn?',
            'Cần cải tiến điều gì để thu được kết quả tốt hơn?',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Tách chiết DNA ảo',
    instruction:
      'Sắp xếp các bước tách chiết cho đúng trình tự. Sau đó làm thí nghiệm ảo: đổi mẫu vật, bỏ qua một hoá chất hay rót cồn sai cách, rồi rót cồn và quấn DNA để xem kết quả thay đổi thế nào.',
  },
  examples: [
    {
      problem:
        'Một nhóm làm đúng mọi bước nhưng quên cho nước rửa bát. Sau khi rót cồn lạnh, gần như không thấy kết tủa. Giải thích.',
      steps: [
        'DNA nằm trong nhân, được bao bởi màng nhân và màng tế bào; các màng này cấu tạo chủ yếu từ lipid và protein.',
        'Nước rửa bát hoà tan lipid của màng, phá vỡ màng để DNA ra ngoài dịch.',
        'Thiếu nước rửa bát, các màng còn nguyên, DNA vẫn nằm trong nhân và bị lọc hoặc lắng cùng tế bào, nên trong dịch có rất ít DNA để cồn làm kết tủa.',
      ],
      answer: 'Không phá được màng tế bào và màng nhân nên DNA không được giải phóng ra dịch.',
    },
    {
      problem:
        'Một bạn dùng nước dứa đã đun sôi thay cho nước dứa tươi. Dự đoán kết quả và giải thích.',
      steps: [
        'Nước dứa có tác dụng nhờ enzyme bromelain phân giải protein.',
        'Enzyme là protein; đun sôi làm enzyme bị biến tính, mất hoạt tính.',
        'Protein (như histone) không bị phân giải, vẫn bám vào DNA, nên kết tủa thu được vón cục, đục, lẫn nhiều protein, khó quấn thành sợi.',
      ],
      answer:
        'Kết quả giống như không cho nước dứa: DNA vẫn kết tủa nhưng lẫn protein, vón cục, kém tinh sạch.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tách chiết DNA từ gan gà theo đúng trình tự.',
      items: [
        'Nghiền gan với nước lạnh',
        'Lọc lấy dịch trong',
        'Trộn dịch lọc với nước rửa bát pha loãng',
        'Thêm nước dứa tươi, để khoảng $10$ phút',
        'Rót nhẹ cồn lạnh theo thành ống',
        'Quấn sợi DNA bằng que tre',
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hints: [
        'Bước đầu tiên làm tan rã mô, bước cuối cùng thu lấy DNA.',
        'Phải phá màng trước, rồi mới gỡ protein khỏi DNA, sau đó mới làm DNA kết tủa.',
      ],
      solution:
        'Nghiền gan với nước lạnh → lọc lấy dịch trong → trộn với nước rửa bát (phá màng) → thêm nước dứa (phân giải protein) → rót nhẹ cồn lạnh (kết tủa DNA) → quấn sợi DNA.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tác nhân với tác dụng của nó trong thí nghiệm tách chiết DNA.',
      left: ['Nghiền mẫu', 'Nước rửa bát', 'Nước dứa tươi', 'Cồn lạnh'],
      right: [
        'Phá vỡ mô và thành tế bào',
        'Hoà tan lipid, phá màng tế bào và màng nhân',
        'Phân giải protein bám vào DNA',
        'Làm DNA kết tủa',
        'Nhuộm màu DNA cho dễ thấy',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Không có tác nhân nào trong bài dùng để nhuộm màu DNA.',
        'Màng sinh học cấu tạo chủ yếu từ lipid; enzyme trong dứa là enzyme phân giải protein.',
      ],
      solution:
        'Nghiền mẫu: phá vỡ mô, thành tế bào. Nước rửa bát: hoà tan lipid, phá màng. Nước dứa: enzyme bromelain phân giải protein. Cồn lạnh: làm DNA kết tủa. Không có bước nào nhuộm màu DNA.',
    },
    {
      type: 'choice',
      prompt: 'Nước dứa tươi được dùng trong thí nghiệm vì nó chứa',
      options: [
        'enzyme bromelain phân giải protein',
        'acid hoà tan màng tế bào',
        'enzyme cắt DNA thành đoạn ngắn',
        'đường giúp DNA kết tủa',
      ],
      answer: 0,
      hints: ['DNA trong nhân liên kết chặt với protein histone. Cần tách chúng ra.'],
      solution:
        'Nước dứa tươi chứa bromelain, một enzyme phân giải protein, giúp tách protein (histone) khỏi DNA.',
    },
    {
      type: 'multi',
      prompt: 'Có thể thay nước dứa tươi bằng những gì?',
      options: ['Nước đu đủ tươi', 'Dung dịch làm mềm thịt', 'Nước dứa đã đun sôi', 'Nước muối'],
      answers: [0, 1],
      hints: [
        'Thứ thay thế cũng phải chứa enzyme phân giải protein còn hoạt tính.',
        'Đun sôi làm enzyme biến tính.',
      ],
      solution:
        'Đu đủ chứa papain, dung dịch làm mềm thịt chứa enzyme phân giải protein nên thay được. Nước dứa đun sôi có enzyme đã bị biến tính; nước muối không phân giải protein.',
    },
    {
      type: 'choice',
      prompt: 'Sau khi rót cồn lạnh, DNA kết tủa xuất hiện ở đâu và trông như thế nào?',
      options: [
        'Sợi trắng đục, nhầy ở ranh giới dịch và lớp cồn, nổi dần lên lớp cồn',
        'Bột màu xanh lam lắng ở đáy ống',
        'Các hạt màu đỏ lơ lửng trong dịch',
        'Lớp dầu trong suốt nổi trên mặt cồn',
      ],
      answer: 0,
      hints: ['DNA không tan trong cồn và nhẹ, nên nó đi về phía lớp cồn phía trên.'],
      solution:
        'DNA kết tủa thành các sợi trắng đục, nhầy ở ranh giới giữa dịch tế bào và lớp cồn rồi nổi lên lớp cồn. Màu xanh lam chỉ có khi thử bằng diphenylamine.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải rót cồn thật nhẹ theo thành ống nghiệm?',
      options: [
        'Để cồn tạo thành lớp riêng trên dịch tế bào, DNA kết tủa tập trung ở lớp cồn',
        'Để cồn nóng lên và hoà tan DNA',
        'Để enzyme trong nước dứa hoạt động mạnh hơn',
        'Để phá vỡ màng nhân',
      ],
      answer: 0,
      hints: ['Cồn nhẹ hơn nước. Điều gì xảy ra nếu đổ mạnh và lắc?'],
      solution:
        'Rót nhẹ giúp cồn (nhẹ hơn nước) nằm thành lớp trên dịch tế bào; DNA kết tủa ở ranh giới hai lớp và nổi vào lớp cồn nên dễ thấy, dễ vớt.',
    },
    {
      type: 'choice',
      prompt: 'Khi quấn DNA, một bạn khuấy đũa thật mạnh. Hiện tượng nào xảy ra?',
      options: [
        'Sợi DNA bị đứt gãy thành đoạn vụn, khó quấn lên đũa',
        'DNA quấn nhanh và nhiều hơn',
        'DNA tan trở lại vào nước rửa bát',
        'DNA chuyển thành màu xanh lam',
      ],
      answer: 0,
      hints: ['Phân tử DNA rất dài và mảnh; DNA kết tủa dễ gãy.'],
      solution:
        'DNA kết tủa rất dễ gãy; khuấy mạnh làm sợi đứt thành đoạn vụn. Phải xoay đũa nhẹ nhàng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao gan gà thường được chọn làm mẫu vật hơn là lá cây?',
      options: [
        'Gan dễ nghiền, giàu DNA; mô thực vật nhiều nước, ít DNA, có thành tế bào và sắc tố',
        'Tế bào gan không có nhân nên DNA dễ lấy',
        'Lá cây không có DNA',
        'Gan có sẵn cồn nên DNA tự kết tủa',
      ],
      answer: 0,
      hints: ['So sánh cấu tạo tế bào thực vật với tế bào động vật và lượng DNA trên một gam mẫu.'],
      solution:
        'Gan mềm, dễ nghiền và có nhiều tế bào giàu DNA. Mô thực vật có thành cellulose khó phá, nhiều nước, ít DNA và có sắc tố cần loại bỏ, nên cần lượng mẫu lớn hơn.',
    },
    {
      type: 'number',
      prompt:
        'Sách hướng dẫn dùng khoảng $5$ g mô động vật hoặc khoảng $50$ g mô thực vật. Lượng mô thực vật cần dùng gấp bao nhiêu lần mô động vật?',
      answer: 10,
      unit: 'lần',
      hints: ['Chia khối lượng mô thực vật cho khối lượng mô động vật.'],
      solution: '$50 : 5 = 10$, nên cần lượng mô thực vật gấp $10$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Một ống nghiệm có dung tích $15$ mL. Theo hướng dẫn, hỗn hợp dịch lọc và nước rửa bát được chuyển sang đến khoảng $\\tfrac13$ ống. Thể tích hỗn hợp trong ống là bao nhiêu mililít?',
      answer: 5,
      unit: 'mL',
      hints: ['Tính $\\tfrac13$ của $15$ mL.'],
      solution: '$15 \\cdot \\tfrac13 = 5$ mL.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào giúp thu được nhiều DNA, sạch hơn?',
      options: [
        'Giữ lạnh mẫu và cồn',
        'Dùng nước dứa tươi, không đun sôi',
        'Rót nhẹ cồn theo thành ống',
        'Khuấy thật mạnh khi quấn DNA',
        'Dùng cồn ấm, không làm lạnh',
      ],
      answers: [0, 1, 2],
      hints: ['Nhiệt độ thấp giúp DNA kết tủa tốt và ít bị phân huỷ.', 'DNA kết tủa rất dễ gãy.'],
      solution:
        'Giữ lạnh, dùng nước dứa tươi (enzyme còn hoạt tính) và rót cồn nhẹ đều giúp kết quả tốt hơn. Khuấy mạnh làm đứt DNA; cồn ấm làm DNA kết tủa kém.',
    },
    {
      type: 'text',
      prompt:
        'DNA thu được có thể được khẳng định bằng phản ứng với thuốc thử nào (cho màu xanh lam)?',
      accept: ['diphenylamine', 'diphenylamin', 'thuốc thử diphenylamine'],
      hints: ['Tên thuốc thử bắt đầu bằng "di…".'],
      solution: 'Thuốc thử diphenylamine phản ứng với DNA cho màu xanh lam.',
    },
  ],
  takeaways: [
    'Tách chiết DNA gồm: nghiền mẫu → lọc → phá màng bằng chất tẩy rửa → phân giải protein bằng enzyme (nước dứa) → kết tủa DNA bằng cồn lạnh → quấn thu DNA.',
    'Nước rửa bát hoà tan lipid của màng; bromelain trong nước dứa phân giải protein bám DNA; DNA không tan trong cồn nên kết tủa.',
    'DNA kết tủa là các sợi trắng đục, nhầy ở lớp cồn; cần giữ lạnh, rót cồn nhẹ và quấn nhẹ tay để DNA không gãy.',
  ],
};
