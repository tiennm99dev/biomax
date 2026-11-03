/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vai trò của nước và nguyên tố khoáng, sự hấp thụ ở rễ, vận chuyển trong mạch gỗ và mạch rây, thoát hơi nước ở lá, dinh dưỡng nitrogen, các nhân tố ảnh hưởng và ứng dụng tưới nước, bón phân hợp lí.',
  intro:
    'Một cây cao hàng chục mét không có quả tim nào bơm nước, vậy mà nước vẫn đi từ rễ lên tận lá ngọn. Điều gì kéo nước lên? Vì sao cây trong chậu ngập nước vẫn héo? Bài này theo chân phân tử nước và ion khoáng đi qua cơ thể cây.',
  objectives: [
    'Nêu được vai trò của nước và nguyên tố khoáng đối với thực vật.',
    'Trình bày được quá trình hấp thụ ở rễ, vận chuyển trong thân và thoát hơi nước ở lá.',
    'Phân biệt được dòng mạch gỗ và dòng mạch rây, nêu được động lực của từng dòng.',
    'Trình bày được nguồn cung cấp và sự chuyển hoá nitrogen trong cây.',
    'Phân tích được các nhân tố ảnh hưởng và vận dụng vào tưới nước, bón phân hợp lí.',
  ],
  sections: [
    {
      heading: 'Vai trò của nước và nguyên tố khoáng',
      blocks: [
        {
          type: 'p',
          text: 'Nước chiếm khoảng $70$ đến $90\\%$ khối lượng tươi của cây. Nước là thành phần cấu tạo tế bào; là dung môi hoà tan và vận chuyển các chất; là môi trường và nguyên liệu của nhiều phản ứng sinh hoá; đồng thời giúp điều hoà nhiệt độ của cây.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tố khoáng thiết yếu',
          text: 'Là nguyên tố mà nếu thiếu thì cây không hoàn thành được chu trình sống, và không thể thay thế bằng nguyên tố khác. Cây trồng có khoảng $17$ nguyên tố như vậy, gồm nhóm đa lượng và nhóm vi lượng.',
        },
        {
          type: 'p',
          text: 'Nguyên tố khoáng có hai vai trò chính: cấu tạo nên các thành phần của tế bào (N trong protein, Mg trong diệp lục, P trong nucleic acid và ATP) và điều tiết các quá trình sinh lí (K điều tiết đóng mở khí khổng, nhiều nguyên tố hoạt hoá enzyme). Xếp $17$ nguyên tố vào hai nhóm dưới đây.',
        },
        { type: 'widget', name: 'nguyen-to' },
        {
          type: 'table',
          caption: 'Một số biểu hiện khi cây thiếu khoáng',
          head: ['Thiếu', 'Biểu hiện'],
          rows: [
            ['N', 'Cây chậm lớn, lá già vàng trước'],
            ['S', 'Lá non vàng trước'],
            ['K', 'Lá ngắn, hẹp, xuất hiện chấm đỏ'],
            ['Mg', 'Phiến lá vàng, gân vẫn xanh'],
          ],
        },
      ],
    },
    {
      heading: 'Hấp thụ nước và khoáng ở rễ',
      blocks: [
        {
          type: 'p',
          text: 'Thực vật trên cạn hấp thụ nước và khoáng chủ yếu qua miền lông hút của rễ. Khoáng tan trong nước nên trao đổi khoáng đi cùng trao đổi nước.',
        },
        {
          type: 'list',
          items: [
            'Nước đi từ đất vào tế bào lông hút theo cơ chế thẩm thấu, do dịch tế bào lông hút có nồng độ chất tan cao hơn dung dịch đất.',
            'Ion khoáng vào theo cơ chế thụ động (khuếch tán theo chênh lệch nồng độ, không tốn năng lượng) hoặc chủ động (nhờ chất mang, ngược chiều chênh lệch nồng độ, tốn năng lượng ATP).',
          ],
        },
        {
          type: 'p',
          text: 'Từ lông hút vào mạch gỗ, nước và ion khoáng đi theo hai con đường: gian bào và tế bào chất.',
        },
        { type: 'widget', name: 'duong-di' },
        {
          type: 'table',
          head: ['Tiêu chí', 'Con đường gian bào', 'Con đường tế bào chất'],
          rows: [
            [
              'Đi qua',
              'Thành tế bào, khoảng trống giữa các tế bào',
              'Tế bào chất, từ tế bào này sang tế bào khác qua cầu sinh chất',
            ],
            ['Tốc độ', 'Nhanh', 'Chậm hơn'],
            ['Kiểm soát', 'Bị chặn tại đai Caspary ở nội bì', 'Được kiểm soát chặt'],
          ],
        },
      ],
    },
    {
      heading: 'Vận chuyển trong thân',
      blocks: [
        {
          type: 'table',
          head: ['Tiêu chí', 'Dòng mạch gỗ', 'Dòng mạch rây'],
          rows: [
            [
              'Cấu tạo',
              'Quản bào và mạch ống (tế bào chết)',
              'Ống rây và tế bào kèm (tế bào sống)',
            ],
            [
              'Thành phần chủ yếu',
              'Nước, ion khoáng',
              'Chất hữu cơ, chủ yếu là sucrose; amino acid, hormone',
            ],
            [
              'Chiều',
              'Một chiều, từ rễ lên thân, lá',
              'Hai chiều, từ cơ quan nguồn đến cơ quan đích',
            ],
            [
              'Động lực',
              'Áp suất rễ; lực liên kết giữa các phân tử nước và lực bám với thành mạch; lực kéo do thoát hơi nước ở lá',
              'Chênh lệch nồng độ chất tan (áp suất thẩm thấu) giữa cơ quan nguồn và cơ quan đích',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Cơ quan nguồn là nơi tạo hoặc giải phóng đường, như lá trưởng thành hay củ khi nảy mầm. Cơ quan đích là nơi dùng hoặc tích trữ đường, như rễ, quả, lá non. Một củ có thể là đích khi đang tích bột, rồi thành nguồn khi nảy mầm: vì vậy dòng mạch rây đi hai chiều.',
        },
      ],
    },
    {
      heading: 'Thoát hơi nước ở lá',
      blocks: [
        {
          type: 'p',
          text: 'Khoảng $98\\%$ lượng nước cây hấp thụ bị thoát ra ngoài dưới dạng hơi. Hơi nước thoát theo hai con đường: chủ yếu qua khí khổng, một phần nhỏ qua lớp cutin trên bề mặt lá (cutin càng dày thoát càng ít, nên lá trưởng thành thoát qua cutin ít hơn lá non).',
        },
        {
          type: 'list',
          items: [
            'Khí khổng mở khi tế bào khí khổng no nước: thành mỏng căng ra làm hai tế bào cong lại, khe khí khổng mở. Khí khổng đóng khi tế bào mất nước.',
            'Ánh sáng làm khí khổng mở. Khi hạn, cây tăng tổng hợp abscisic acid: ion $\\mathrm{K^+}$ bị bơm ra khỏi tế bào khí khổng, tế bào mất nước và khí khổng đóng lại.',
            'Lượng hơi nước thoát qua khí khổng phụ thuộc số lượng, sự phân bố và mức độ đóng mở của khí khổng.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vai trò của thoát hơi nước',
          text: 'Tạo lực kéo nước và chất tan từ rễ lên lá; mở đường cho $\\mathrm{CO_2}$ khuếch tán vào lá phục vụ quang hợp; làm mát lá, tránh lá bị đốt nóng dưới nắng.',
        },
      ],
    },
    {
      heading: 'Dinh dưỡng nitrogen ở thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Nitrogen cấu tạo protein, nucleic acid, diệp lục và tham gia tạo enzyme, hormone. Thiếu nitrogen, lá vàng và cây chậm lớn. Thừa nitrogen, cây yếu, dễ đổ và dễ bị sâu bệnh.',
        },
        {
          type: 'p',
          text: 'Cây chỉ hấp thụ được nitrogen vô cơ ở dạng $\\mathrm{NH_4^+}$ và $\\mathrm{NO_3^-}$. Nguồn tự nhiên là sấm sét, vi khuẩn cố định đạm và sự phân giải xác sinh vật; nguồn nhân tạo là phân đạm vô cơ và phân hữu cơ.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{NO_3^-} \\longrightarrow \\mathrm{NO_2^-} \\longrightarrow \\mathrm{NH_4^+} \\longrightarrow \\text{amino acid, amide}',
        },
        {
          type: 'list',
          items: [
            'Khử nitrate: enzyme chuyển $\\mathrm{NO_3^-}$ thành $\\mathrm{NO_2^-}$ rồi thành $\\mathrm{NH_4^+}$.',
            'Đồng hoá ammonium: $\\mathrm{NH_4^+}$ kết hợp với keto acid tạo amino acid, hoặc với amino acid dicarboxylic tạo amide. Tạo amide giúp cây giải độc $\\mathrm{NH_4^+}$ và dự trữ nitrogen.',
          ],
        },
      ],
    },
    {
      heading: 'Các nhân tố ảnh hưởng và ứng dụng',
      blocks: [
        {
          type: 'table',
          head: ['Nhân tố', 'Ảnh hưởng'],
          rows: [
            [
              'Ánh sáng',
              'Làm khí khổng mở, tăng thoát hơi nước, tạo động lực cho hấp thụ và vận chuyển; cung cấp năng lượng cho quang hợp, tạo nguyên liệu cho hô hấp rễ',
            ],
            [
              'Nhiệt độ',
              'Trong giới hạn sinh thái, nhiệt độ tăng thì hấp thụ tăng. Nhiệt độ thấp làm giảm hô hấp rễ và khuếch tán; quá cao (trên khoảng $45\\,^\\circ\\mathrm{C}$) làm tổn thương lông hút, biến đổi enzyme',
            ],
            [
              'Độ ẩm đất',
              'Đất đủ ẩm giúp rễ phát triển và hút tốt. Đất quá khô hoặc úng đều ức chế hấp thụ',
            ],
            [
              'Độ ẩm không khí',
              'Không khí khô làm tăng thoát hơi nước; không khí ẩm làm giảm thoát hơi nước',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Tưới nước hợp lí giữ cân bằng nước, tức là lượng nước hút vào đủ bù lượng nước thoát ra. Cần tưới đúng nhu cầu của cây, đúng thời điểm và đúng cách.',
        },
        {
          type: 'p',
          text: 'Bón phân hợp lí: trong giới hạn nhất định, bón nhiều phân thì năng suất tăng. Bón quá ít gây thiếu khoáng; bón quá nhiều gây độc cho cây, ô nhiễm đất, nước và tồn dư trong nông sản. Cần bón đúng loại, đúng liều lượng, đúng thời điểm và đúng cách. Phân hữu cơ thường được dùng bón lót vì phân giải chậm và cải tạo đất.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cây và thời tiết',
    instruction:
      'Kéo ba thanh trượt và quan sát: khí khổng mở rộng hay hẹp, dòng mạch gỗ (xanh, đi lên) nhanh hay chậm, dòng mạch rây (cam) mạnh hay yếu, lá có héo không. Số liệu là mức tương đối của mô hình, dùng để so sánh xu hướng.',
  },
  examples: [
    {
      problem:
        'Một cây ở ruộng hút $500$ g nước trong một ngày, trong đó $98\\%$ thoát ra ngoài dưới dạng hơi. Cây giữ lại bao nhiêu gam nước để tạo chất và cấu tạo cơ thể?',
      steps: [
        'Phần nước không thoát ra chiếm $100\\% - 98\\% = 2\\%$.',
        'Khối lượng nước giữ lại là $500 \\cdot 2 : 100 = 10$ g.',
      ],
      answer: 'Cây giữ lại $10$ g nước.',
    },
    {
      problem: 'Vì sao cây trồng trong chậu bị ngập nước lâu ngày lại héo, dù rễ ngâm trong nước?',
      steps: [
        'Đất ngập nước thiếu $\\mathrm{O_2}$, rễ hô hấp kém.',
        'Hô hấp kém làm rễ thiếu ATP cho hấp thụ khoáng chủ động; rễ tổn thương, lông hút giảm, nên hút nước kém.',
        'Lá vẫn thoát hơi nước, lượng nước thoát vượt lượng nước hút.',
      ],
      answer: 'Cây mất cân bằng nước do rễ thiếu oxygen nên hút nước kém, dù đất đầy nước.',
    },
    {
      problem:
        'Giải thích vì sao bứng cây đi trồng chỗ khác, người ta thường cắt bớt lá và tưới vào lúc chiều mát.',
      steps: [
        'Khi bứng cây, nhiều lông hút bị đứt, rễ hút nước kém đi.',
        'Lá là nơi thoát hơi nước chủ yếu. Cắt bớt lá làm giảm lượng nước mất đi.',
        'Chiều mát ánh sáng yếu, nhiệt độ thấp nên thoát hơi nước ít, cây kịp phục hồi.',
      ],
      answer: 'Để lượng nước thoát ra giảm xuống, cân bằng với khả năng hút nước còn yếu của rễ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thực vật trên cạn hấp thụ nước và ion khoáng chủ yếu qua bộ phận nào?',
      options: ['Miền lông hút của rễ', 'Chóp rễ', 'Thân non', 'Khí khổng'],
      answer: 0,
      hints: ['Bộ phận này có diện tích tiếp xúc với đất rất lớn.'],
      solution: 'Miền lông hút có số lượng lớn tế bào lông hút, là nơi hấp thụ chủ yếu.',
    },
    {
      type: 'multi',
      prompt: 'Trong các nguyên tố sau, những nguyên tố nào là vi lượng?',
      options: ['Fe', 'Mn', 'Mg', 'Mo', 'N', 'B'],
      answers: [0, 1, 3, 5],
      hints: ['Mg nằm trong diệp lục, N nằm trong protein: cây cần nhiều hai nguyên tố này.'],
      solution: 'Fe, Mn, Mo, B là vi lượng; Mg và N là đa lượng.',
    },
    {
      type: 'number',
      prompt:
        'Cây trồng cần khoảng $17$ nguyên tố khoáng thiết yếu, trong đó có $9$ nguyên tố đa lượng. Có bao nhiêu nguyên tố vi lượng?',
      answer: 8,
      hints: ['Lấy tổng số trừ đi nhóm đa lượng.'],
      solution: '$17 - 9 = 8$ nguyên tố vi lượng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi cụm từ với điều nó mô tả.',
      left: [
        'Quản bào và mạch ống',
        'Ống rây và tế bào kèm',
        'Nước và ion khoáng',
        'Chủ yếu là sucrose',
      ],
      right: [
        'Cấu tạo của mạch gỗ',
        'Cấu tạo của mạch rây',
        'Thành phần chính của dòng mạch gỗ',
        'Thành phần chính của dòng mạch rây',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Mạch gỗ đưa nguyên liệu từ đất lên; mạch rây đưa sản phẩm quang hợp đi.'],
      solution:
        'Mạch gỗ gồm quản bào và mạch ống, dẫn nước và ion khoáng. Mạch rây gồm ống rây và tế bào kèm, dẫn chủ yếu sucrose.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sai về dòng mạch rây?',
      options: [
        'Mạch rây gồm ống rây và tế bào kèm',
        'Dịch mạch rây chủ yếu là sucrose',
        'Các chất được vận chuyển theo một chiều từ rễ lên lá',
        'Động lực là chênh lệch áp suất thẩm thấu giữa cơ quan nguồn và cơ quan đích',
      ],
      answer: 2,
      hints: ['Một chiều từ rễ lên là đặc điểm của dòng nào?'],
      solution:
        'Dòng mạch rây đi hai chiều, từ cơ quan nguồn đến cơ quan đích. Một chiều từ rễ lên là dòng mạch gỗ.',
    },
    {
      type: 'multi',
      prompt: 'Động lực của dòng mạch gỗ gồm những lực nào?',
      options: [
        'Áp suất rễ',
        'Lực liên kết giữa các phân tử nước và lực bám với thành mạch',
        'Lực kéo do thoát hơi nước ở lá',
        'Sự co bóp của thành mạch gỗ',
      ],
      answers: [0, 1, 2],
      hints: ['Tế bào mạch gỗ là tế bào chết, không thể co bóp.'],
      solution:
        'Ba lực: đẩy từ rễ, kéo từ lá và liên kết của cột nước. Mạch gỗ không co bóp vì là tế bào chết.',
    },
    {
      type: 'choice',
      prompt: 'Khi cây gặp hạn, cơ chế nào giúp giảm mất nước qua lá?',
      options: [
        'Abscisic acid tăng, ion $\\mathrm{K^+}$ ra khỏi tế bào khí khổng, khí khổng đóng',
        'Ion $\\mathrm{K^+}$ đi vào tế bào khí khổng, tế bào no nước, khí khổng đóng',
        'Lớp cutin tan đi để nước ở lại trong lá',
        'Lông hút ngừng hoạt động để giữ nước ở rễ',
      ],
      answer: 0,
      hints: [
        'Khí khổng đóng khi tế bào khí khổng mất nước. $\\mathrm{K^+}$ đi đâu thì nước đi theo?',
      ],
      solution:
        'Abscisic acid làm $\\mathrm{K^+}$ bị bơm ra ngoài, áp suất thẩm thấu giảm, tế bào mất nước, khí khổng đóng lại.',
    },
    {
      type: 'multi',
      prompt: 'Thoát hơi nước có những vai trò nào đối với cây?',
      options: [
        'Tạo lực kéo nước và chất tan từ rễ lên lá',
        'Cho phép $\\mathrm{CO_2}$ khuếch tán vào lá',
        'Làm giảm nhiệt độ của lá',
        'Tạo ATP cho tế bào lá',
      ],
      answers: [0, 1, 2],
      hints: ['ATP được tạo trong hô hấp và pha sáng của quang hợp, không phải do nước bay hơi.'],
      solution: 'Ba vai trò đúng là tạo lực kéo, mở đường cho $\\mathrm{CO_2}$ và làm mát lá.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp quá trình chuyển hoá nitrogen trong cây, bắt đầu từ dạng cây hấp thụ.',
      items: ['$\\mathrm{NH_4^+}$', '$\\mathrm{NO_3^-}$', 'Amino acid', '$\\mathrm{NO_2^-}$'],
      answer: [1, 3, 0, 2],
      hints: ['Khử nitrate đi qua nitrite trước khi đến ammonium.'],
      solution: '$\\mathrm{NO_3^-} \\to \\mathrm{NO_2^-} \\to \\mathrm{NH_4^+} \\to$ amino acid.',
    },
    {
      type: 'number',
      prompt:
        'Một cây thoát ra $4{,}9$ kg nước trong số $5$ kg nước đã hút. Tỉ lệ nước thoát ra là bao nhiêu phần trăm?',
      answer: 98,
      unit: '%',
      tolerance: 0.01,
      hints: ['Lấy lượng nước thoát chia cho lượng nước hút, rồi nhân $100$.'],
      solution: '$4{,}9 : 5 \\cdot 100 = 98\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nên bón lót bằng phân hữu cơ?',
      options: [
        'Vì phân hữu cơ tan ngay và cây hấp thụ tức thì',
        'Vì phân hữu cơ phân giải chậm, cung cấp dinh dưỡng lâu dài và cải tạo đất',
        'Vì phân hữu cơ không chứa nguyên tố khoáng',
        'Vì cây chỉ hấp thụ được nitrogen hữu cơ',
      ],
      answer: 1,
      hints: ['Phân hữu cơ phải được vi sinh vật phân giải trước khi cây dùng được.'],
      solution:
        'Vi sinh vật phân giải dần phân hữu cơ thành chất khoáng, nên dinh dưỡng được cung cấp từ từ và đất tốt lên.',
    },
  ],
  takeaways: [
    'Nước vào rễ theo thẩm thấu; ion khoáng vào theo cơ chế thụ động hoặc chủ động.',
    'Con đường gian bào nhanh, con đường tế bào chất được kiểm soát chặt; đai Caspary buộc các chất đi qua tế bào chất.',
    'Dòng mạch gỗ đi một chiều nhờ áp suất rễ, lực liên kết và lực kéo do thoát hơi nước; dòng mạch rây đi từ nguồn đến đích.',
    'Thoát hơi nước chủ yếu qua khí khổng; tạo lực kéo, đưa $\\mathrm{CO_2}$ vào lá và làm mát lá.',
    'Cây hấp thụ nitrogen ở dạng $\\mathrm{NH_4^+}$, $\\mathrm{NO_3^-}$; nitrate được khử thành ammonium rồi đồng hoá thành amino acid.',
    'Tưới nước, bón phân phải đúng nhu cầu, đúng lúc, đúng cách để giữ cân bằng nước và tránh thừa, thiếu khoáng.',
  ],
};
