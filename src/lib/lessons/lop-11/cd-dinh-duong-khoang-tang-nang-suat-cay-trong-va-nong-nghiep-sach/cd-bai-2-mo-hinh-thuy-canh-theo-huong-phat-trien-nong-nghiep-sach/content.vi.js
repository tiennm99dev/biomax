/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thuỷ canh là trồng cây không dùng đất, rễ nhận nước và khoáng từ dung dịch dinh dưỡng. Hệ thống gồm bể chứa, máng trồng, máy bơm, ống dẫn, máy sục khí; người trồng phải giữ pH, nồng độ dung dịch, oxygen và ánh sáng phù hợp.',
  intro:
    'Trên sân thượng nhiều gia đình ở thành phố có những giàn rau xanh tốt mà không có một nắm đất nào. Rễ cây ngâm trong dung dịch, vậy cây lấy chất dinh dưỡng từ đâu và người trồng cần theo dõi những gì để rau lớn nhanh, an toàn?',
  objectives: [
    'Trình bày được khái niệm và nguyên lí của phương pháp thuỷ canh.',
    'Nêu được các thành phần cơ bản của một hệ thống thuỷ canh và chức năng của từng thành phần.',
    'Phân biệt được một số mô hình thuỷ canh: tĩnh, hồi lưu, nhỏ giọt và khí canh.',
    'Phân tích được ưu điểm, hạn chế của thuỷ canh và cách xử lí một số sự cố khi trồng rau thuỷ canh.',
  ],
  sections: [
    {
      heading: 'Khái quát về thuỷ canh',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thuỷ canh',
          text: 'Thuỷ canh là phương pháp trồng cây không dùng đất: rễ cây tiếp xúc trực tiếp với dung dịch dinh dưỡng chứa nước và các nguyên tố khoáng cần thiết. Cây được giữ bằng rọ (cốc nhựa có lỗ) chứa giá thể như xơ dừa, trấu hun, than bùn, viên đất nung.',
        },
        {
          type: 'p',
          text: 'Nguyên lí của thuỷ canh dựa trên hiểu biết về dinh dưỡng khoáng: cây chỉ hấp thụ được khoáng ở dạng ion hoà tan trong nước, đất chủ yếu đóng vai trò giá đỡ và nơi chứa nước, khoáng. Khi cung cấp đủ các nguyên tố khoáng thiết yếu với tỉ lệ phù hợp, cùng với oxygen cho rễ, ánh sáng, nhiệt độ, độ ẩm thích hợp, cây vẫn sinh trưởng tốt mà không cần đất.',
        },
        {
          type: 'p',
          text: 'Một số cây thường được trồng thuỷ canh: xà lách, cải xanh, cải ngọt, rau muống, rau dền, cải xoăn, húng quế, dưa chuột, cà chua, dâu tây, dưa lưới.',
        },
      ],
    },
    {
      heading: 'Cấu trúc chung của hệ thống thuỷ canh',
      blocks: [
        {
          type: 'table',
          caption: 'Các thành phần cơ bản',
          head: ['Thành phần', 'Chức năng'],
          rows: [
            [
              'Bể chứa dung dịch',
              'Chứa dung dịch dinh dưỡng được pha theo tỉ lệ phù hợp với loại cây',
            ],
            [
              'Máng trồng (giàn, khay)',
              'Giữ các rọ chứa giá thể; nơi rễ cây tiếp xúc và hấp thụ dung dịch',
            ],
            ['Máy bơm', 'Đặt trong bể, bơm dung dịch lên máng trồng'],
            ['Ống dẫn', 'Đưa dung dịch từ bể lên máng và thu dung dịch chảy về bể'],
            ['Máy sục khí', 'Cung cấp oxygen hoà tan cho rễ hô hấp'],
          ],
        },
        {
          type: 'list',
          items: [
            'pH dung dịch: rau ăn lá thường hợp với pH khoảng $5{,}5$ đến $6{,}5$. Ngoài khoảng này cây khó hấp thụ một số nguyên tố, lá vàng. Đo bằng bút đo pH hoặc giấy chỉ thị, chỉnh bằng dung dịch hạ hoặc tăng pH.',
            'Nồng độ dung dịch: đo bằng bút đo EC hoặc chỉ số ppm (TDS). Quá loãng, cây thiếu khoáng, chậm lớn; quá đặc, rễ khó hút nước, cây héo, cháy lá, thối rễ. Rau ăn lá thường trồng ở khoảng $600$ đến $1\\,000$ ppm, tuỳ giống và giai đoạn.',
            'Nước bay hơi và bị cây hút làm dung dịch đặc dần: cần đo lại và thêm nước để pha loãng. Sau mỗi lứa rau nên thay dung dịch mới vì tỉ lệ các chất khoáng đã thay đổi.',
            'Ánh sáng: rau ăn lá cần khoảng $6$ đến $7$ giờ chiếu sáng mỗi ngày, tối thiểu $4$ giờ.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Trồng cây mới',
          text: 'Khi chưa biết nhu cầu khoáng của một loại cây, cần tìm hiểu nhu cầu dinh dưỡng theo từng giai đoạn, rồi trồng thử với số lượng ít, điều chỉnh nồng độ dung dịch trước khi trồng đại trà.',
        },
      ],
    },
    {
      heading: 'Một số mô hình thuỷ canh',
      blocks: [
        {
          type: 'table',
          caption: 'So sánh các mô hình',
          head: ['Mô hình', 'Cách cung cấp dung dịch', 'Đặc điểm'],
          rows: [
            [
              'Thuỷ canh tĩnh (không hồi lưu)',
              'Rễ ngâm một phần trong dung dịch đứng yên trong thùng xốp, thùng nhựa; phía trên có khoảng không khí cho rễ',
              'Đơn giản, rẻ, hợp quy mô gia đình; dung dịch không lưu chuyển nên dễ thiếu oxygen, pH dễ bị acid hoá',
            ],
            [
              'Thuỷ canh hồi lưu (tuần hoàn), như kĩ thuật màng mỏng dinh dưỡng',
              'Máy bơm đưa dung dịch chảy thành lớp mỏng qua máng trồng rồi về bể, tuần hoàn liên tục',
              'Rễ được tiếp xúc với không khí, đủ oxygen; hợp quy mô lớn; cần điện và thiết bị',
            ],
            [
              'Thuỷ canh nhỏ giọt trên giá thể',
              'Dung dịch nhỏ giọt vào gốc cây trồng trong giá thể (xơ dừa, trấu hun)',
              'Tiết kiệm dung dịch; hợp cây ăn quả như dưa lưới, cà chua trong nhà màng',
            ],
            [
              'Khí canh',
              'Rễ treo trong buồng kín, dung dịch được máy bơm phun dạng sương vào rễ',
              'Rễ rất đủ oxygen, cây lớn nhanh; chi phí cao, mất điện là rễ khô ngay',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Ưu điểm và hạn chế của thuỷ canh',
          head: ['Ưu điểm', 'Hạn chế'],
          rows: [
            ['Không cần đất, trồng được trên sân thượng, ban công', 'Chi phí đầu tư ban đầu cao'],
            [
              'Năng suất cao, chất lượng rau ổn định',
              'Đòi hỏi kiến thức chuyên môn, theo dõi thường xuyên',
            ],
            [
              'Dễ kiểm soát dinh dưỡng, ít tồn dư, ít gây ô nhiễm',
              'Chủng loại cây trồng còn hạn chế',
            ],
            [
              'Ít cỏ dại, ít sâu bệnh, giảm thuốc bảo vệ thực vật',
              'Mầm bệnh lây lan nhanh qua dung dịch chung',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Trồng rau thuỷ canh tĩnh bằng thùng xốp',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tự làm một hệ thuỷ canh tĩnh và trồng một lứa rau ăn lá (xà lách hoặc cải). Chuẩn bị: thùng xốp có nắp, rọ nhựa, giá thể xơ dừa, hạt giống, dung dịch dinh dưỡng thuỷ canh bán sẵn, bút đo pH và ppm (hoặc giấy chỉ thị pH), cốc đong.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ươm hạt trong giá thể ẩm đến khi cây có $3$ đến $4$ lá thật (khoảng $5$ đến $7$ ngày).',
            'Khoét lỗ trên nắp thùng vừa với rọ; pha dung dịch theo hướng dẫn, đo và chỉnh pH, ppm; đổ dung dịch sao cho đáy rọ ngập khoảng $1$ đến $2$ cm.',
            'Chuyển cây con vào rọ, đặt nơi đủ ánh sáng, tránh mưa.',
            'Mỗi $2$ đến $3$ ngày đo pH, ppm, mực dung dịch; ghi vào bảng theo dõi, thêm nước hoặc dung dịch khi cần.',
            'Thu hoạch sau khoảng $4$ đến $5$ tuần, tuỳ giống.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng theo dõi pH, ppm, chiều cao cây theo ngày; ảnh chụp các giai đoạn; các sự cố gặp phải (vàng lá, rễ nhớt...) và cách đã khắc phục.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chăm sóc giàn rau thuỷ canh',
    instruction:
      'Giàn rau mới pha dung dịch: pH còn cao và dung dịch còn loãng. Hãy chỉnh pH, nồng độ, mực nước và máy sục khí, rồi bấm sang ngày tiếp theo. Theo dõi đồ thị chiều cao: cây lớn nhanh nhất khi mọi chỉ số đều trong khoảng phù hợp.',
  },
  examples: [
    {
      problem:
        'Bể thuỷ canh chứa $30$ lít dung dịch có nồng độ $1\\,200$ ppm. Rau xà lách hợp với khoảng $800$ ppm. Cần thêm bao nhiêu lít nước?',
      steps: [
        'Khi thêm nước, lượng chất khoáng trong bể không đổi, nên nồng độ nhân thể tích không đổi: $1\\,200 \\cdot 30 = 800 \\cdot V$.',
        'Thể tích sau khi pha: $V = \\dfrac{1\\,200 \\cdot 30}{800} = 45$ lít.',
        'Lượng nước cần thêm: $45 - 30 = 15$ lít.',
      ],
      answer: 'Cần thêm $15$ lít nước.',
    },
    {
      problem:
        'Rau trong thùng xốp thuỷ canh tĩnh của một gia đình bị vàng lá, cây yếu, rễ nhớt và có màu nâu. Hãy nêu nguyên nhân có thể và cách khắc phục.',
      steps: [
        'Dung dịch đứng yên lâu ngày, rễ ngập sâu nên thiếu oxygen, rễ hô hấp kém và bị thối, nhớt; dung dịch bị acid hoá.',
        'Dung dịch có thể quá đặc (do nước bay hơi) hoặc đã thiếu khoáng sau thời gian dài; cây có thể thiếu ánh sáng.',
        'Khắc phục: hạ mực dung dịch để có khoảng không khí cho rễ hoặc dùng máy sục khí; đo và chỉnh pH, ppm; thay dung dịch mới; đặt giàn nơi đủ ánh sáng; bỏ cây bị thối rễ để bệnh không lây.',
      ],
      answer:
        'Nguyên nhân chính là rễ thiếu oxygen, pH và nồng độ không phù hợp; cần sục khí, chỉnh pH, nồng độ và thay dung dịch.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thuỷ canh là gì?',
      options: [
        'Phương pháp trồng cây không dùng đất, rễ cây nhận nước và khoáng từ dung dịch dinh dưỡng',
        'Phương pháp trồng cây dưới nước như cây lúa ở ruộng ngập',
        'Phương pháp tưới nước nhỏ giọt cho cây trồng trên đất',
        'Phương pháp nuôi cá trong bể kết hợp trồng cây trên cạn',
      ],
      answer: 0,
      hints: ['"Thuỷ" là nước, "canh" là trồng trọt; yếu tố nào không có trong thuỷ canh?'],
      solution:
        'Thuỷ canh là trồng cây không dùng đất; rễ tiếp xúc trực tiếp với dung dịch dinh dưỡng chứa nước và các nguyên tố khoáng.',
    },
    {
      type: 'multi',
      prompt: 'Những thành phần nào là thành phần cơ bản của một hệ thống thuỷ canh hồi lưu?',
      options: [
        'Bể chứa dung dịch',
        'Máng trồng cây',
        'Máy bơm và ống dẫn',
        'Máy sục khí',
        'Luống đất phù sa',
        'Hố ủ phân chuồng',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Hệ thống cần chứa dung dịch, đưa dung dịch tới rễ và cung cấp oxygen.'],
      solution:
        'Hệ thống gồm bể chứa dung dịch, máng trồng, máy bơm, ống dẫn và máy sục khí. Thuỷ canh không dùng đất.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi mô hình thuỷ canh với cách cung cấp dung dịch cho rễ.',
      left: ['Thuỷ canh tĩnh', 'Kĩ thuật màng mỏng dinh dưỡng', 'Khí canh'],
      right: [
        'Rễ ngâm một phần trong dung dịch đứng yên trong thùng',
        'Dung dịch chảy thành lớp mỏng qua máng rồi về bể',
        'Dung dịch được phun dạng sương vào rễ treo trong không khí',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['"Tĩnh" là đứng yên; "khí canh" là trồng trong không khí.'],
      solution:
        'Thuỷ canh tĩnh: dung dịch đứng yên; màng mỏng dinh dưỡng: dung dịch tuần hoàn thành lớp mỏng; khí canh: phun sương vào rễ.',
    },
    {
      type: 'number',
      prompt:
        'Bể chứa $40$ lít dung dịch nồng độ $1\\,200$ ppm. Muốn đưa nồng độ về $800$ ppm thì phải thêm bao nhiêu lít nước?',
      answer: 20,
      unit: 'lít',
      hints: [
        'Lượng chất khoáng không đổi khi thêm nước: nồng độ nhân thể tích không đổi.',
        'Tính thể tích sau khi pha rồi trừ đi $40$ lít.',
      ],
      solution:
        'Thể tích sau khi pha: $\\dfrac{1\\,200 \\cdot 40}{800} = 60$ lít. Lượng nước thêm: $60 - 40 = 20$ lít.',
    },
    {
      type: 'number',
      prompt:
        'Bể có $20$ lít dung dịch $600$ ppm. Sau vài ngày nắng, nước bay hơi còn $15$ lít. Coi lượng chất khoáng không đổi, nồng độ dung dịch lúc này là bao nhiêu ppm?',
      answer: 800,
      unit: 'ppm',
      hints: ['Lượng chất khoáng không đổi, thể tích giảm nên nồng độ tăng.'],
      solution: 'Nồng độ mới: $\\dfrac{600 \\cdot 20}{15} = 800$ ppm.',
    },
    {
      type: 'choice',
      prompt:
        'Rau thuỷ canh bị vàng lá; kiểm tra thấy pH dung dịch bằng $7{,}5$, nồng độ vẫn phù hợp. Nên làm gì trước tiên?',
      options: [
        'Thêm dung dịch hạ pH để đưa pH về khoảng $5{,}5$ đến $6{,}5$',
        'Thêm thật nhiều dung dịch dinh dưỡng đậm đặc',
        'Tắt máy sục khí để dung dịch yên tĩnh',
        'Đổ thêm đất vào máng trồng',
      ],
      answer: 0,
      hints: ['Nồng độ đã đủ; chỉ số nào đang lệch khỏi khoảng phù hợp?'],
      solution:
        'pH $7{,}5$ quá cao, cây khó hấp thụ một số nguyên tố khoáng (như sắt) nên lá vàng dù dung dịch đủ chất. Cần hạ pH về $5{,}5$ đến $6{,}5$.',
    },
    {
      type: 'choice',
      prompt: 'Cùng một giàn máng thuỷ canh có trồng được nhiều loại cây cùng lúc không?',
      options: [
        'Được, nếu các cây có nhu cầu dinh dưỡng, pH và điều kiện sống gần giống nhau, như các loại rau ăn lá',
        'Được với mọi loại cây, vì cây nào cũng hấp thụ khoáng như nhau',
        'Không bao giờ được, mỗi giàn chỉ trồng được một cây',
        'Được, nhưng chỉ khi trồng cây ăn quả với rau ăn lá',
      ],
      answer: 0,
      hints: ['Tất cả cây trên giàn dùng chung một dung dịch.'],
      solution:
        'Vì dùng chung một dung dịch, chỉ nên trồng chung các cây có nhu cầu khoáng, pH, ánh sáng gần giống nhau (ví dụ xà lách, cải, rau muống). Cây có nhu cầu khác xa nên trồng ở giàn riêng.',
    },
    {
      type: 'multi',
      prompt: 'Vì sao thuỷ canh phù hợp với hướng sản xuất nông nghiệp sạch?',
      options: [
        'Chủ động điều chỉnh thành phần, nồng độ khoáng theo nhu cầu của cây',
        'Ít tồn dư phân bón, ít gây ô nhiễm đất và nước',
        'Trồng trong nhà lưới nên ít sâu bệnh, giảm thuốc bảo vệ thực vật',
        'Không cần bất kì kiến thức hay theo dõi nào',
        'Mầm bệnh không bao giờ lây lan',
      ],
      answers: [0, 1, 2],
      hints: ['Hai lựa chọn còn lại là hạn chế thật của thuỷ canh, được nói ngược lại.'],
      solution:
        'Thuỷ canh giúp chủ động dinh dưỡng, ít tồn dư, ít ô nhiễm, ít sâu bệnh. Nhưng nó đòi hỏi kiến thức, theo dõi thường xuyên, và mầm bệnh lây nhanh qua dung dịch chung.',
    },
  ],
  takeaways: [
    'Thuỷ canh: trồng cây không dùng đất, rễ nhận nước và khoáng từ dung dịch dinh dưỡng.',
    'Hệ thống gồm bể chứa, máng trồng, máy bơm, ống dẫn, máy sục khí; cây được giữ bằng rọ và giá thể.',
    'Mô hình: thuỷ canh tĩnh, hồi lưu (màng mỏng dinh dưỡng), nhỏ giọt trên giá thể, khí canh.',
    'Cần theo dõi pH (rau ăn lá khoảng $5{,}5$ đến $6{,}5$), nồng độ (ppm, EC), oxygen, ánh sáng và thay dung dịch sau mỗi lứa.',
  ],
};
