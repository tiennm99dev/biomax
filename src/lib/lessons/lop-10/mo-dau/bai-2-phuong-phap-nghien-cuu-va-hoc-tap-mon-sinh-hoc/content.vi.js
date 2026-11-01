/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ba phương pháp nghiên cứu sinh học (quan sát, làm việc trong phòng thí nghiệm, thực nghiệm khoa học), các bước của tiến trình nghiên cứu khoa học và vai trò của tin sinh học.',
  intro:
    'Làm sao các nhà khoa học biết một thứ thuốc có tác dụng, hay muối có làm cây chậm lớn? Họ không đoán: họ quan sát, đặt câu hỏi, đưa ra giả thuyết và làm thí nghiệm để kiểm chứng. Trong bài này, em sẽ tìm hiểu các phương pháp nghiên cứu sinh học, tự đi qua một tiến trình nghiên cứu và làm quen với tin sinh học, công cụ giúp xử lí khối dữ liệu sinh học khổng lồ.',
  objectives: [
    'Trình bày và vận dụng được các phương pháp quan sát, làm việc trong phòng thí nghiệm và thực nghiệm khoa học.',
    'Nêu được một số thiết bị nghiên cứu và học tập môn Sinh học, phân biệt được kính hiển vi quang học và kính hiển vi điện tử.',
    'Nêu được trình tự các bước của tiến trình nghiên cứu khoa học và vận dụng vào một tình huống.',
    'Phân biệt được lô đối chứng và lô thí nghiệm.',
    'Nêu được khái niệm và vai trò của tin sinh học.',
  ],
  sections: [
    {
      heading: 'Các phương pháp nghiên cứu sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phương pháp quan sát',
          text: 'Là phương pháp sử dụng các giác quan và phương tiện hỗ trợ để thu thập thông tin về đối tượng hoặc hiện tượng. Các bước: xác định đối tượng và phạm vi quan sát; chọn công cụ quan sát; ghi chép số liệu.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phương pháp làm việc trong phòng thí nghiệm',
          text: 'Là phương pháp thu nhận thông tin trong phòng thí nghiệm, gồm ba bước: chuẩn bị, tiến hành và báo cáo kết quả. Hai nhóm kĩ thuật hay gặp là tách chiết (lấy enzyme, gene, các chất có hoạt tính sinh học) và nuôi cấy (vi khuẩn, mô, tế bào).',
        },
        {
          type: 'p',
          text: 'Khi làm việc trong phòng thí nghiệm, phải tuân thủ các quy định an toàn: làm việc với hoá chất độc hoặc dễ bay hơi trong tủ hút hoặc nơi thoáng khí; nắm vững quy tắc vận hành trước khi dùng thiết bị; mặc áo choàng, đeo găng tay, kính bảo hộ hoặc mặt nạ tuỳ theo yêu cầu của thí nghiệm.',
        },
        {
          type: 'table',
          caption: 'Một số thiết bị nghiên cứu và học tập môn Sinh học',
          head: ['Thiết bị', 'Công dụng'],
          rows: [
            ['Kính lúp', 'Phóng đại ở mức thấp, quan sát cơ quan của thực vật, côn trùng nhỏ'],
            ['Kính hiển vi', 'Phóng đại để quan sát cấu trúc hiển vi và siêu hiển vi của tế bào'],
            ['Máy li tâm', 'Tách các bào quan của tế bào đã phá vỡ dựa vào khối lượng'],
            ['Ống hút, pipet', 'Lấy một lượng dung dịch chính xác'],
          ],
        },
        {
          type: 'table',
          caption: 'So sánh kính hiển vi quang học và kính hiển vi điện tử',
          head: ['Tiêu chí', 'Kính hiển vi quang học', 'Kính hiển vi điện tử'],
          rows: [
            ['Nguồn chiếu', 'Ánh sáng (đèn hoặc Mặt Trời)', 'Chùm electron'],
            ['Thấu kính', 'Thuỷ tinh', 'Thấu kính điện tử'],
            ['Mẫu quan sát', 'Mẫu sống hoặc mẫu chết', 'Chỉ mẫu chết hoặc mẫu đã làm khô'],
            ['Độ phóng đại tối đa', 'Khoảng $1500$ lần', 'Tới hàng chục triệu lần'],
            [
              'Dùng để quan sát',
              'Cấu trúc hiển vi (tế bào, nhân)',
              'Cấu trúc siêu hiển vi (bên trong bào quan, virus)',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phương pháp thực nghiệm khoa học',
          text: 'Là phương pháp chủ động tạo ra hoặc thay đổi các điều kiện để kiểm chứng một giả thuyết, gồm các hoạt động như quan sát, đặt câu hỏi, thí nghiệm, xử lí số liệu và rút ra kết luận.',
        },
      ],
    },
    {
      heading: 'Tiến trình nghiên cứu khoa học',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Quan sát và thu thập dữ liệu.',
            'Đặt câu hỏi.',
            'Hình thành giả thuyết: giả thuyết chỉ được coi là khoa học khi có thể kiểm chứng bằng thực nghiệm.',
            'Thiết kế và tiến hành thí nghiệm kiểm chứng.',
            'Phân tích kết quả và xử lí dữ liệu.',
            'Rút ra kết luận: nếu giả thuyết bị bác bỏ thì quay lại bước $3$; nếu được chấp nhận thì công bố để các nhà khoa học khác thẩm định.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Từ giả thuyết đến học thuyết',
          text: 'Giả thuyết được kiểm nghiệm rộng rãi và được cộng đồng khoa học thừa nhận thì trở thành học thuyết khoa học. Để hình thành và kiểm chứng giả thuyết, nhà khoa học dùng suy luận diễn giải: đi từ cái chung đến cái riêng, suy ra điều tất yếu xảy ra nếu giả thuyết đúng.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Lô đối chứng và lô thí nghiệm',
          text: 'Hai lô giống nhau về mọi điều kiện, chỉ khác nhau ở yếu tố nghiên cứu. Lô đối chứng không chịu tác động của yếu tố đó; lô thí nghiệm được xử lí bằng yếu tố đó. Nhờ vậy, khác biệt về kết quả giữa hai lô là do yếu tố nghiên cứu.',
        },
        {
          type: 'p',
          text: 'Thử tự thiết kế một thí nghiệm dưới đây: hai lô cây chỉ được phép khác nhau ở đúng một yếu tố.',
        },
        { type: 'widget', name: 'doi-chung' },
      ],
    },
    {
      heading: 'Tin sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tin sinh học',
          text: 'Tin sinh học là ngành khoa học sử dụng các phần mềm chuyên dụng, thuật toán và mô hình để lưu trữ, phân loại và phân tích dữ liệu sinh học quy mô lớn, nhằm ứng dụng hiệu quả trong nghiên cứu và đời sống.',
        },
        {
          type: 'list',
          items: [
            'So sánh hệ gene giữa các loài để nghiên cứu quan hệ tiến hoá; tìm gene trong các hệ gene đã giải trình tự.',
            'Ứng dụng trí tuệ nhân tạo xử lí thông tin của người bệnh để chọn phương pháp điều trị phù hợp.',
            'Góp phần hình thành sinh học hệ thống: nghiên cứu cả hệ thống các thành phần và tương tác của chúng.',
          ],
        },
        {
          type: 'p',
          text: 'Trong học tập, em có thể dùng công cụ tin học để tìm kiếm và khai thác thông tin, ghi chép và xử lí số liệu, dùng phần mềm mô phỏng các quá trình như tái bản, phiên mã, dịch mã, và vẽ sơ đồ tư duy để hệ thống kiến thức.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đi qua tiến trình nghiên cứu khoa học',
    instruction:
      'Đầu tiên, sắp xếp sáu bước của tiến trình theo đúng trình tự. Sau đó chọn một tình huống và chỉ ra việc nhà nghiên cứu làm ở mỗi bước.',
  },
  examples: [
    {
      problem:
        'Em thấy cây trồng trên đất nhiễm mặn thường thấp và còi hơn. Hãy đề xuất giả thuyết và cách bố trí thí nghiệm kiểm chứng ảnh hưởng của muối đến sinh trưởng của cây.',
      steps: [
        'Câu hỏi: muối trong đất có làm cây sinh trưởng chậm đi không?',
        'Giả thuyết: nếu muối làm cây sinh trưởng chậm đi thì cây tưới nước muối sẽ thấp hơn cây tưới nước thường.',
        'Yếu tố nghiên cứu là muối, nên chỉ muối được phép khác nhau giữa hai lô.',
        'Lô đối chứng: tưới nước thường. Lô thí nghiệm: tưới nước muối. Hai lô cùng giống, cùng tuổi, cùng số cây và cùng các điều kiện khác.',
      ],
      answer:
        'Lô thí nghiệm tưới nước muối, lô đối chứng tưới nước thường, mọi điều kiện còn lại như nhau; so sánh sinh trưởng của hai lô để kết luận.',
    },
    {
      problem:
        'Trong thí nghiệm trên (số liệu giả định), năm cây của lô đối chứng cao lần lượt $20$, $21$, $19$, $22$, $18$ cm; năm cây của lô thí nghiệm cao $14$, $15$, $13$, $16$, $12$ cm. Hãy xử lí số liệu và rút ra kết luận.',
      steps: [
        'Chiều cao trung bình lô đối chứng: $(20 + 21 + 19 + 22 + 18) : 5 = 100 : 5 = 20$ cm.',
        'Chiều cao trung bình lô thí nghiệm: $(14 + 15 + 13 + 16 + 12) : 5 = 70 : 5 = 14$ cm.',
        'Lô thí nghiệm thấp hơn: $\\dfrac{20 - 14}{20} \\cdot 100\\% = 30\\%$.',
        'Hai lô chỉ khác nhau ở muối, nên sự khác biệt này là do muối.',
      ],
      answer:
        'Cây tưới nước muối thấp hơn lô đối chứng $30\\%$; kết quả ủng hộ giả thuyết muối làm cây sinh trưởng chậm đi.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của tiến trình nghiên cứu khoa học theo đúng trình tự.',
      items: [
        'Rút ra kết luận',
        'Hình thành giả thuyết',
        'Quan sát và thu thập dữ liệu',
        'Phân tích kết quả và xử lí dữ liệu',
        'Đặt câu hỏi',
        'Thiết kế và tiến hành thí nghiệm kiểm chứng',
      ],
      answer: [2, 4, 1, 5, 3, 0],
      hints: [
        'Bắt đầu từ những gì nhìn thấy trong thực tế.',
        'Giả thuyết đứng trước thí nghiệm; kết luận luôn đứng cuối.',
      ],
      solution:
        'Quan sát và thu thập dữ liệu, đặt câu hỏi, hình thành giả thuyết, thiết kế và tiến hành thí nghiệm kiểm chứng, phân tích kết quả và xử lí dữ liệu, rút ra kết luận.',
    },
    {
      type: 'choice',
      prompt:
        'Một phương pháp thu nhận thông tin gồm ba bước: chuẩn bị, tiến hành, báo cáo kết quả. Đó là',
      options: [
        'phương pháp điều tra xã hội',
        'phương pháp tin sinh học',
        'phương pháp làm việc trong phòng thí nghiệm',
        'phương pháp quan sát',
      ],
      answer: 2,
      hints: [
        'Phương pháp quan sát có các bước khác: chọn đối tượng, chọn công cụ, ghi chép.',
        'Từ "báo cáo kết quả" gợi đến một buổi làm thí nghiệm.',
      ],
      solution:
        'Làm việc trong phòng thí nghiệm gồm ba bước: chuẩn bị, tiến hành và báo cáo kết quả.',
    },
    {
      type: 'choice',
      prompt: 'Để quan sát cấu trúc bên trong ti thể, nên dùng thiết bị nào?',
      options: ['Kính hiển vi quang học', 'Kính lúp', 'Máy li tâm', 'Kính hiển vi điện tử'],
      answer: 3,
      hints: [
        'Bên trong bào quan là cấu trúc siêu hiển vi.',
        'Hãy so sánh độ phóng đại của các loại kính trong bảng.',
      ],
      solution:
        'Cấu trúc bên trong ti thể là siêu hiển vi, chỉ thấy được dưới kính hiển vi điện tử. Kính hiển vi quang học phóng đại tối đa khoảng $1500$ lần nên không đủ.',
    },
    {
      type: 'choice',
      prompt:
        'Một học sinh muốn quan sát trùng giày đang bơi trong giọt nước ao. Em chọn kính nào?',
      options: [
        'Không cần dụng cụ',
        'Kính hiển vi quang học',
        'Kính hiển vi điện tử',
        'Máy li tâm',
      ],
      answer: 1,
      hints: [
        'Mẫu đang còn sống.',
        'Với kính hiển vi điện tử, mẫu phải được xử lí và không còn sống.',
      ],
      solution:
        'Kính hiển vi quang học quan sát được mẫu sống và phóng đại đủ để thấy trùng giày; kính hiển vi điện tử chỉ dùng cho mẫu chết hoặc mẫu đã làm khô.',
    },
    {
      type: 'match',
      prompt:
        'Thí nghiệm tìm hiểu ánh sáng có cần cho cây quang hợp không. Ghép mỗi việc với bước tương ứng của tiến trình.',
      left: [
        'Thấy cây để trong tối lâu ngày thì lá vàng, cây yếu',
        'Nếu ánh sáng cần cho quang hợp thì lá che tối không tạo được tinh bột',
        'Che một phần lá bằng giấy đen, phần còn lại để ngoài sáng',
        'Thử tinh bột bằng dung dịch iodine, so sánh hai phần lá',
      ],
      right: [
        'Quan sát',
        'Hình thành giả thuyết',
        'Thiết kế và tiến hành thí nghiệm',
        'Phân tích kết quả',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Giả thuyết thường có dạng "Nếu ..., thì ...".',
        'Việc phân tích chỉ làm được sau khi đã có kết quả thí nghiệm.',
      ],
      solution:
        'Lá vàng khi để trong tối là dữ liệu quan sát; câu "Nếu ..., thì ..." là giả thuyết; che giấy đen là thí nghiệm; thử iodine và so sánh là phân tích kết quả.',
    },
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm về ảnh hưởng của phân đạm đến cây ngô, lô đối chứng là lô',
      options: [
        'được bón phân đạm và trồng trong bóng râm',
        'gồm một giống ngô khác và không bón phân đạm',
        'được trồng như lô kia nhưng không bón phân đạm',
        'được bón nhiều phân đạm hơn và tưới nhiều nước hơn',
      ],
      answer: 2,
      hints: [
        'Yếu tố nghiên cứu ở đây là phân đạm.',
        'Hai lô chỉ được phép khác nhau ở đúng một yếu tố.',
      ],
      solution:
        'Lô đối chứng không chịu tác động của yếu tố nghiên cứu (không bón phân đạm), còn mọi điều kiện khác giống lô thí nghiệm.',
    },
    {
      type: 'number',
      prompt:
        'Lô đối chứng có chiều cao trung bình $30$ cm; lô thí nghiệm cao trung bình $24$ cm. Lô thí nghiệm thấp hơn lô đối chứng bao nhiêu phần trăm?',
      answer: 20,
      unit: '%',
      hints: [
        'Lấy lô đối chứng làm mốc so sánh.',
        'Tính độ chênh lệch rồi chia cho chiều cao của lô đối chứng.',
      ],
      solution: '$\\dfrac{30 - 24}{30} \\cdot 100\\% = \\dfrac{6}{30} \\cdot 100\\% = 20\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc thuộc về tin sinh học.',
      options: [
        'Dùng phần mềm so sánh hệ gene giữa các loài',
        'Dùng thuật toán tìm gene trong trình tự DNA',
        'Dùng kính lúp đếm số chân của một con côn trùng',
        'Dùng trí tuệ nhân tạo phân tích dữ liệu người bệnh để chọn cách điều trị',
      ],
      answers: [0, 1, 3],
      hints: [
        'Tin sinh học xử lí dữ liệu bằng phần mềm, thuật toán và mô hình.',
        'Một lựa chọn chỉ dùng dụng cụ quang học, không cần xử lí dữ liệu lớn.',
      ],
      solution:
        'So sánh hệ gene, tìm gene và phân tích dữ liệu người bệnh đều dùng phần mềm, thuật toán. Quan sát bằng kính lúp là phương pháp quan sát.',
    },
    {
      type: 'choice',
      prompt: 'Giả thuyết bị kết quả thí nghiệm bác bỏ thì nhà khoa học cần làm gì?',
      options: [
        'Dừng nghiên cứu và không ghi lại kết quả',
        'Hình thành giả thuyết mới hoặc điều chỉnh giả thuyết, rồi kiểm chứng lại',
        'Sửa số liệu để khớp với giả thuyết',
        'Công bố giả thuyết thành học thuyết khoa học',
      ],
      answer: 1,
      hints: [
        'Một kết quả bác bỏ giả thuyết vẫn là một kết quả có giá trị.',
        'Tiến trình nghiên cứu có một vòng lặp quay lại.',
      ],
      solution:
        'Khi giả thuyết bị bác bỏ, nhà khoa học quay lại bước hình thành giả thuyết, điều chỉnh hoặc đưa ra giả thuyết mới rồi tiếp tục kiểm chứng. Sửa số liệu là gian lận khoa học.',
    },
  ],
  takeaways: [
    'Ba phương pháp nghiên cứu sinh học: quan sát, làm việc trong phòng thí nghiệm, thực nghiệm khoa học.',
    'Tiến trình: quan sát và thu thập dữ liệu, đặt câu hỏi, hình thành giả thuyết, thí nghiệm kiểm chứng, phân tích kết quả, rút ra kết luận.',
    'Giả thuyết khoa học phải kiểm chứng được; giả thuyết bị bác bỏ thì quay lại xây dựng giả thuyết mới.',
    'Lô đối chứng và lô thí nghiệm chỉ khác nhau ở yếu tố nghiên cứu.',
    'Tin sinh học dùng phần mềm, thuật toán, mô hình để lưu trữ, phân loại và phân tích dữ liệu sinh học lớn.',
  ],
};
