/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm, vai trò và các cơ quan bài tiết, cấu tạo thận và quá trình tạo nước tiểu, khái niệm và cơ chế cân bằng nội môi, vai trò của thận, gan, phổi trong cân bằng nội môi, bảo vệ thận và xét nghiệm định kì.',
  intro:
    'Ăn một bữa nhiều cơm, bánh, lượng glucose đổ vào máu rất lớn, vậy mà vài giờ sau đường huyết của em đã trở lại như cũ. Ăn mặn thì em thấy khát và đi tiểu ít hơn. Cơ thể đã "cảm nhận" và "sửa chữa" những thay đổi ấy như thế nào?',
  objectives: [
    'Nêu được khái niệm, vai trò của bài tiết, các sản phẩm bài tiết và cơ quan bài tiết.',
    'Mô tả được cấu tạo của thận và quá trình tạo nước tiểu: lọc, tái hấp thụ, tiết.',
    'Nêu được khái niệm nội môi, cân bằng nội môi; trình bày được cơ chế cân bằng nội môi theo sơ đồ có liên hệ ngược.',
    'Giải thích được vai trò của thận, gan, phổi trong điều hoà áp suất thẩm thấu, pH và glucose máu.',
    'Nêu được cách bảo vệ thận, một số bệnh về thận và ý nghĩa của xét nghiệm định kì.',
  ],
  sections: [
    {
      heading: 'Khái niệm và vai trò của bài tiết',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bài tiết',
          text: 'Bài tiết là quá trình loại bỏ ra khỏi cơ thể các chất sinh ra từ quá trình chuyển hoá mà cơ thể không sử dụng, các chất độc hại và các chất dư thừa. Bài tiết giúp duy trì cân bằng nội môi, tránh gây hại cho tế bào và cơ quan.',
        },
        {
          type: 'table',
          head: ['Cơ quan bài tiết', 'Sản phẩm bài tiết chủ yếu'],
          rows: [
            ['Phổi', '$\\mathrm{CO_2}$, hơi nước'],
            ['Thận', 'Nước tiểu: nước, urea, uric acid, creatinin, các ion dư thừa'],
            ['Da (tuyến mồ hôi)', 'Mồ hôi: nước, muối, một ít urea'],
            ['Gan', 'Bilirubin (sắc tố mật), theo mật xuống ruột rồi ra ngoài'],
          ],
        },
      ],
    },
    {
      heading: 'Thận và quá trình tạo nước tiểu',
      blocks: [
        {
          type: 'p',
          text: 'Thận có chức năng lọc máu, tạo nước tiểu. Mỗi quả thận gồm phần vỏ, phần tuỷ và bể thận, có khoảng một triệu nephron là đơn vị chức năng. Mỗi nephron gồm cầu thận (búi mao mạch nằm trong nang Bowman) và ống thận; nhiều nephron đổ chung vào một ống góp.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lọc: huyết áp đẩy nước và các chất hoà tan qua lỗ lọc của cầu thận vào nang Bowman, tạo dịch lọc cầu thận (nước tiểu đầu). Dịch lọc giống máu nhưng không có tế bào máu và protein huyết tương. Mỗi ngày khoảng $1\\,700$ đến $1\\,800$ L máu chảy qua thận, tạo khoảng $180$ L dịch lọc.',
            'Tái hấp thụ: tế bào ống thận đưa nước, các chất dinh dưỡng và ion cần thiết (như $\\mathrm{Na^+}$) từ dịch lọc trở lại máu.',
            'Tiết: tế bào thành ống thận đưa chất độc, ion dư thừa (như $\\mathrm{H^+}$, $\\mathrm{K^+}$) từ máu vào dịch lọc.',
            'Ống góp tái hấp thụ bớt nước, nước tiểu chính thức (khoảng $1{,}5$ đến $2$ L mỗi ngày) đổ vào bể thận, theo niệu quản xuống bàng quang rồi được thải ra ngoài.',
          ],
        },
      ],
    },
    {
      heading: 'Cân bằng nội môi',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nội môi và cân bằng nội môi',
          text: 'Nội môi là môi trường bên trong cơ thể, gồm máu, bạch huyết và dịch mô. Cân bằng nội môi là trạng thái các điều kiện lí hoá của môi trường trong được duy trì ổn định, đảm bảo cho tế bào và cơ quan hoạt động bình thường. Đó là cân bằng động: các chỉ số luôn dao động trong một giới hạn, ví dụ glucose máu người khoảng $3{,}9$ đến $6{,}4$ mmol/L (khoảng $70$ đến $110$ mg/$100$ mL).',
        },
        {
          type: 'list',
          items: [
            'Bộ phận tiếp nhận kích thích: thụ thể hoặc cơ quan thụ cảm, nhận biết sự thay đổi của nội môi.',
            'Bộ phận điều khiển: trung ương thần kinh hoặc tuyến nội tiết, gửi tín hiệu thần kinh hoặc hormone.',
            'Bộ phận thực hiện: thận, gan, phổi, tim, mạch máu…, tăng hoặc giảm hoạt động để đưa nội môi về trạng thái cân bằng.',
            'Liên hệ ngược: kết quả đáp ứng tác động trở lại bộ phận tiếp nhận kích thích, làm giảm tín hiệu khi nội môi đã ổn định.',
          ],
        },
        {
          type: 'p',
          text: 'Khi một bộ phận hoạt động không bình thường hoặc bị bệnh, cân bằng nội môi bị phá vỡ, gây rối loạn hoạt động của tế bào, cơ quan.',
        },
      ],
    },
    {
      heading: 'Vai trò của thận, gan và phổi',
      blocks: [
        {
          type: 'p',
          text: 'Thận điều hoà áp suất thẩm thấu của máu. Khi áp suất thẩm thấu máu tăng (ăn mặn, glucose máu tăng, mất nước), vùng dưới đồi tiết ADH; ADH làm ống lượn xa và ống góp tăng tái hấp thụ nước, nước tiểu ít đi, nước trong máu tăng; đồng thời gây cảm giác khát để uống bù nước. Áp suất thẩm thấu máu trở về bình thường. Thận còn điều hoà pH máu bằng cách tiết $\\mathrm{H^+}$ vào dịch lọc và tái hấp thụ $\\mathrm{HCO_3^-}$ về máu.',
        },
        { type: 'widget', name: 'adh' },
        {
          type: 'p',
          text: 'Gan điều hoà nồng độ nhiều chất trong huyết tương như protein, glucose. Sau bữa ăn, glucose máu tăng, tế bào $\\beta$ tuyến tuỵ tiết insulin: insulin làm tế bào nhận glucose và kích thích gan chuyển glucose thành glycogen dự trữ, glucose máu giảm. Xa bữa ăn, glucose máu giảm, tế bào $\\alpha$ tuyến tuỵ tiết glucagon: glucagon kích thích gan phân giải glycogen thành glucose đưa vào máu, glucose máu tăng.',
        },
        {
          type: 'tex',
          tex: '\\text{glucose} \\;\\xrightleftharpoons[\\text{glucagon}]{\\text{insulin}}\\; \\text{glycogen (gan)}',
        },
        {
          type: 'p',
          text: 'Phổi thải $\\mathrm{CO_2}$ ra môi trường, nhờ đó góp phần duy trì pH máu.',
        },
      ],
    },
    {
      heading: 'Bảo vệ thận và xét nghiệm định kì',
      blocks: [
        {
          type: 'list',
          items: [
            'Ăn uống hợp lí: ăn nhiều muối, dầu mỡ gây tăng huyết áp, lâu ngày tổn thương thận; ăn nhiều protein động vật làm tăng uric acid và calcium trong nước tiểu, dễ tạo sỏi.',
            'Uống đủ nước: uống quá ít làm chất thải cô đặc, dễ tạo sỏi; uống quá nhiều làm tăng gánh nặng cho thận. Lượng nước tuỳ cơ thể, tuổi, thời tiết, mức vận động.',
            'Hạn chế rượu, bia; không lạm dụng thuốc (một số kháng sinh, thuốc giảm đau, thuốc lợi tiểu dùng lâu làm suy giảm chức năng thận); không nhịn tiểu.',
          ],
        },
        {
          type: 'table',
          head: ['Bệnh', 'Nguyên nhân', 'Phòng và chữa'],
          rows: [
            [
              'Suy thận',
              'Đái tháo đường, tăng huyết áp, mất máu, bệnh thận khác, dùng thuốc sai cách',
              'Kiểm soát huyết áp, cân nặng, chế độ ăn; suy thận nặng phải chạy thận nhân tạo hoặc ghép thận',
            ],
            [
              'Sỏi thận',
              'Calcium oxalate, muối phosphate, muối urate nồng độ cao lắng đọng thành sỏi',
              'Uống đủ nước, không nhịn tiểu, ăn uống hợp lí, vận động phù hợp',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Xét nghiệm định kì',
          text: 'Các chỉ số sinh hoá máu như glucose, protein toàn phần, albumin, urea, uric acid, creatinin, bilirubin cho biết tình trạng cân bằng nội môi và chức năng thận, gan. Xét nghiệm định kì giúp phát hiện sớm bệnh để điều chỉnh lối sống và điều trị kịp thời.',
        },
      ],
    },
  ],
  explore: {
    title: 'Vòng điều hoà đường huyết',
    instruction:
      'Chọn đường huyết lúc đầu và việc xảy ra sau $15$ phút (ăn bữa nhiều tinh bột hoặc chạy bộ). Kéo "Xem thời điểm" để thấy insulin hay glucagon đang được tiết và vòng liên hệ ngược ở thời điểm đó. Rồi tắt insulin hoặc glucagon để xem cân bằng nội môi bị phá vỡ. Số liệu là mô hình.',
  },
  examples: [
    {
      problem:
        'Mỗi ngày thận tạo khoảng $180$ L dịch lọc và thải $1{,}5$ L nước tiểu chính thức. Tính lượng dịch được tái hấp thụ và tỉ lệ phần trăm so với dịch lọc.',
      steps: [
        'Lượng dịch tái hấp thụ: $180 - 1{,}5 = 178{,}5$ L.',
        'Tỉ lệ: $178{,}5 : 180 \\cdot 100\\% \\approx 99{,}2\\%$.',
        'Hầu hết nước và chất cần thiết trong dịch lọc được đưa trở lại máu; chỉ chất thải và phần nước dư bị thải ra.',
      ],
      answer: 'Khoảng $178{,}5$ L, tức khoảng $99{,}2\\%$ dịch lọc được tái hấp thụ.',
    },
    {
      problem:
        'Kết quả xét nghiệm glucose máu lúc đói của một người là $126$ mg/$100$ mL. Biết $1$ mmol/L glucose ứng với khoảng $18$ mg/$100$ mL. Đổi ra mmol/L và nhận xét.',
      steps: [
        'Đổi đơn vị: $126 : 18 = 7$ mmol/L.',
        'So sánh với khoảng bình thường $3{,}9$ đến $6{,}4$ mmol/L: $7 > 6{,}4$.',
        'Glucose máu lúc đói cao hơn bình thường, có thể do tuyến tuỵ tiết thiếu insulin hoặc tế bào kém đáp ứng với insulin; cần khám và xét nghiệm lại.',
      ],
      answer: '$7$ mmol/L, cao hơn bình thường.',
    },
    {
      problem: 'Giải thích vì sao sau khi ăn mặn, người ta thấy khát và đi tiểu ít.',
      steps: [
        'Ăn mặn làm nồng độ $\\mathrm{Na^+}$ trong máu tăng, áp suất thẩm thấu máu tăng (thay đổi nội môi).',
        'Bộ phận tiếp nhận ở vùng dưới đồi nhận biết sự thay đổi; vùng dưới đồi tiết ADH và tạo cảm giác khát.',
        'ADH làm ống lượn xa và ống góp tăng tái hấp thụ nước, nước tiểu ít; người uống thêm nước.',
        'Nước trong máu tăng, áp suất thẩm thấu giảm về bình thường; liên hệ ngược làm giảm tiết ADH.',
      ],
      answer: 'Do cơ chế điều hoà áp suất thẩm thấu máu nhờ ADH và cảm giác khát.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi sản phẩm bài tiết với cơ quan bài tiết chủ yếu của nó.',
      left: ['$\\mathrm{CO_2}$', 'Mồ hôi', 'Urea trong nước tiểu', 'Bilirubin'],
      right: ['Thận', 'Phổi', 'Gan', 'Da', 'Tim'],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Bilirubin là sắc tố mật.'],
      solution: '$\\mathrm{CO_2}$: phổi; mồ hôi: da; urea trong nước tiểu: thận; bilirubin: gan.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp đường đi của dịch từ máu đến khi thành nước tiểu được thải ra.',
      items: [
        'Ống góp',
        'Cầu thận và nang Bowman',
        'Bàng quang',
        'Ống thận',
        'Bể thận',
        'Niệu quản',
      ],
      answer: [1, 3, 0, 4, 5, 2],
      hints: ['Dịch lọc được tạo ra ở đâu đầu tiên?'],
      solution: 'Cầu thận và nang Bowman, ống thận, ống góp, bể thận, niệu quản, bàng quang.',
    },
    {
      type: 'choice',
      prompt: 'Dịch lọc cầu thận khác máu ở điểm nào?',
      options: [
        'Không có tế bào máu và protein huyết tương',
        'Không có nước',
        'Không có ion $\\mathrm{Na^+}$',
        'Không có glucose',
      ],
      answer: 0,
      hints: ['Những thành phần nào quá lớn để đi qua lỗ lọc?'],
      solution:
        'Lỗ lọc cầu thận chỉ cho nước và các chất hoà tan nhỏ đi qua; tế bào máu và protein huyết tương ở lại trong máu.',
    },
    {
      type: 'number',
      prompt:
        'Thận của một người tạo $170$ L dịch lọc mỗi ngày và thải $1{,}7$ L nước tiểu. Bao nhiêu phần trăm dịch lọc được tái hấp thụ?',
      answer: 99,
      tolerance: 0.05,
      unit: '%',
      hints: ['Tính lượng tái hấp thụ trước, rồi chia cho lượng dịch lọc.'],
      solution: '$170 - 1{,}7 = 168{,}3$ L; $168{,}3 : 170 = 0{,}99 = 99\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Glucose máu của một người là $90$ mg/$100$ mL. Biết $1$ mmol/L ứng với $18$ mg/$100$ mL, glucose máu là bao nhiêu mmol/L?',
      answer: 5,
      tolerance: 0.01,
      unit: 'mmol/L',
      hints: ['Chia cho $18$.'],
      solution: '$90 : 18 = 5$ mmol/L, trong khoảng bình thường.',
    },
    {
      type: 'choice',
      prompt: 'Sau bữa ăn nhiều tinh bột, glucose máu trở về bình thường chủ yếu nhờ',
      options: [
        'tuyến tuỵ tiết insulin, gan chuyển glucose thành glycogen',
        'tuyến tuỵ tiết glucagon, gan phân giải glycogen',
        'thận thải hết glucose ra nước tiểu',
        'phổi thải glucose ra ngoài',
      ],
      answer: 0,
      hints: ['Hormone nào làm giảm glucose máu?'],
      solution:
        'Glucose máu tăng, tế bào $\\beta$ tuyến tuỵ tiết insulin; tế bào nhận glucose, gan chuyển glucose thành glycogen, glucose máu giảm.',
    },
    {
      type: 'choice',
      prompt: 'Một người ra nhiều mồ hôi khi lao động dưới nắng. Cơ thể phản ứng thế nào?',
      options: [
        'Tăng tiết ADH, tăng tái hấp thụ nước ở ống thận, nước tiểu ít, thấy khát',
        'Giảm tiết ADH, nước tiểu nhiều',
        'Tăng tiết insulin',
        'Thận ngừng lọc máu',
      ],
      answer: 0,
      hints: ['Mất nước làm áp suất thẩm thấu máu tăng hay giảm?'],
      solution:
        'Mất nước làm áp suất thẩm thấu máu tăng; vùng dưới đồi tiết nhiều ADH, ống lượn xa và ống góp tăng tái hấp thụ nước, nước tiểu ít; người thấy khát và uống bù nước.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận của hệ thống điều hoà glucose máu với cơ quan đảm nhận.',
      left: ['Bộ phận tiếp nhận và điều khiển', 'Bộ phận thực hiện', 'Tín hiệu'],
      right: ['Gan và các tế bào', 'Tuyến tuỵ', 'Insulin, glucagon', 'Thận'],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 2],
      ],
      hints: ['Cơ quan nào vừa nhận biết glucose máu vừa tiết hormone?'],
      solution:
        'Tuyến tuỵ nhận biết glucose máu và tiết hormone (tiếp nhận, điều khiển); insulin, glucagon là tín hiệu; gan và tế bào là bộ phận thực hiện.',
    },
    {
      type: 'choice',
      prompt: 'Thận tham gia điều hoà pH máu bằng cách nào?',
      options: [
        'Tiết $\\mathrm{H^+}$ vào dịch lọc và tái hấp thụ $\\mathrm{HCO_3^-}$ về máu',
        'Tiết insulin',
        'Thải $\\mathrm{CO_2}$ ra ngoài',
        'Giữ lại toàn bộ $\\mathrm{H^+}$ trong máu',
      ],
      answer: 0,
      hints: ['Ion nào làm máu có tính acid?'],
      solution:
        'Thận tiết $\\mathrm{H^+}$ vào dịch lọc và tái hấp thụ $\\mathrm{HCO_3^-}$, giữ pH máu ổn định; phổi thì thải $\\mathrm{CO_2}$.',
    },
    {
      type: 'multi',
      prompt: 'Những thói quen nào giúp phòng sỏi thận?',
      options: [
        'Uống đủ nước',
        'Không nhịn tiểu',
        'Hạn chế đồ ăn chế biến sẵn nhiều muối',
        'Ăn thật nhiều protein động vật',
        'Uống ít nước để thận được nghỉ',
      ],
      answers: [0, 1, 2],
      hints: ['Sỏi hình thành khi chất thải trong nước tiểu bị cô đặc.'],
      solution:
        'Uống đủ nước, không nhịn tiểu, ăn uống hợp lí giúp chất thải không bị cô đặc và lắng đọng; nhiều protein động vật làm tăng uric acid, calcium trong nước tiểu.',
    },
  ],
  takeaways: [
    'Bài tiết loại bỏ chất thải của chuyển hoá, chất độc, chất dư thừa; cơ quan bài tiết chính: phổi, thận, da, gan.',
    'Mỗi thận có khoảng một triệu nephron; nước tiểu được tạo qua lọc ($180$ L dịch lọc mỗi ngày), tái hấp thụ, tiết, còn khoảng $1{,}5$ L.',
    'Cân bằng nội môi là cân bằng động, nhờ bộ phận tiếp nhận, điều khiển, thực hiện và liên hệ ngược.',
    'Thận điều hoà áp suất thẩm thấu (ADH) và pH; gan cùng insulin, glucagon giữ glucose máu khoảng $3{,}9$ đến $6{,}4$ mmol/L; phổi thải $\\mathrm{CO_2}$.',
    'Bảo vệ thận bằng ăn uống hợp lí, uống đủ nước, không lạm dụng thuốc; xét nghiệm định kì giúp phát hiện sớm bệnh.',
  ],
};
