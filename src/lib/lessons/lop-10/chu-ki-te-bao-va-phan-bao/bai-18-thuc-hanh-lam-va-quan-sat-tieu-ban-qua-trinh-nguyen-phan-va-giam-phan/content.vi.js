/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành làm tiêu bản nhiễm sắc thể từ đầu rễ hành để quan sát nguyên phân và từ ống sinh tinh của châu chấu đực để quan sát giảm phân, rồi nhận biết và vẽ các kì phân bào.',
  intro:
    'Mọi điều em vừa học về nguyên phân và giảm phân đều có thể tự kiểm chứng: chỉ cần một củ hành, thuốc nhuộm và kính hiển vi là em đã thấy được NST của tế bào đang phân chia. Bài này giúp em làm tiêu bản và nhận ra từng kì dưới kính.',
  objectives: [
    'Thực hiện được các bước làm tiêu bản NST để quan sát nguyên phân và giảm phân.',
    'Quan sát, nhận biết và vẽ được tế bào ở các kì của nguyên phân và giảm phân.',
    'Giải thích được mục đích của các bước cố định, nhuộm và dàn mỏng tế bào.',
    'Rèn được kĩ năng sử dụng kính hiển vi và viết báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'p',
          text: 'Đầu rễ hành có nhiều tế bào đang nguyên phân. Ống sinh tinh của châu chấu đực có nhiều tế bào đang giảm phân. Vì NST không màu, ta phải nhuộm chúng để nhìn thấy dưới kính hiển vi.',
        },
        {
          type: 'table',
          caption: 'Mẫu vật, hoá chất và dụng cụ',
          head: ['Nội dung', 'Nguyên phân', 'Giảm phân'],
          rows: [
            ['Mẫu vật', 'Đầu rễ hành', 'Ống sinh tinh của châu chấu đực'],
            [
              'Hoá chất',
              'Dung dịch cố định Carnoy, thuốc nhuộm acetocarmine $2\\%$, nước cất',
              'Dung dịch KCl nhược trương, Carnoy, acetocarmine $2\\%$, acetic acid đặc',
            ],
            [
              'Dụng cụ',
              'Kính hiển vi, panh, ống nghiệm, dao lam, lam kính, lamen, giấy thấm, đèn cồn, bút chì hoặc chuôi kim mổ',
              'Kính hiển vi, kim mổ, panh, đĩa Petri, lam kính, lamen, giấy thấm',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Carnoy và acetic acid đặc gây kích ứng và có mùi mạnh: dùng ở nơi thoáng, đeo găng tay, tránh dính vào da và mắt. Cẩn thận với dao lam, kim mổ, lam kính và ngọn lửa đèn cồn.',
        },
      ],
    },
    {
      heading: 'Làm tiêu bản nguyên phân ở rễ hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Cố định: cắt các đầu rễ hành dài khoảng $5$ mm, ngâm trong dung dịch Carnoy ít nhất $24$ giờ.',
            'Nhuộm: chuyển đầu rễ vào ống nghiệm có acetocarmine $2\\%$, đun nóng nhẹ khoảng $5$ đến $8$ phút, không đun sôi.',
            'Làm tiêu bản: đặt rễ lên lam kính, cắt lấy đoạn khoảng $3$ mm tính từ chóp rễ, nhỏ một giọt nước cất rồi đậy lamen. Đặt giấy thấm lên trên, gõ nhẹ và ép nhẹ để dàn mỏng tế bào.',
            'Quan sát: ở vật kính $10\\times$ tìm vùng có nhiều tế bào đang phân chia, rồi chuyển sang vật kính $40\\times$ để nhận dạng các kì.',
          ],
        },
      ],
    },
    {
      heading: 'Làm tiêu bản giảm phân ở châu chấu',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Mổ: cắt cánh châu chấu đực, mổ bụng từ phía lưng, lấy ống sinh tinh cho vào dung dịch KCl nhược trương và gạt bỏ mỡ bám quanh ống.',
            'Cố định: ngâm ống sinh tinh trong dung dịch Carnoy khoảng $24$ giờ.',
            'Làm tiêu bản: đặt một đoạn ống lên lam kính, nhỏ acetocarmine $2\\%$ và acetic acid đặc, đậy lamen rồi dàn mỏng tế bào.',
            'Quan sát: làm tương tự như với rễ hành, nhận biết và vẽ các kì của giảm phân.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao làm như vậy?',
          text: 'Cố định giữ tế bào ở đúng trạng thái đang có. Nhuộm làm NST bắt màu. Đun nhẹ giúp thuốc thấm qua thành tế bào cứng của hành; đun sôi sẽ làm tế bào biến dạng. Dung dịch KCl nhược trương làm tế bào trương lên để NST tách rời nhau; loại bỏ mỡ giúp tiêu bản không bị che khuất.',
        },
      ],
    },
    {
      heading: 'Nhận biết các kì dưới kính hiển vi',
      blocks: [
        {
          type: 'table',
          caption: 'Dấu hiệu của các kì nguyên phân',
          head: ['Kì', 'Dấu hiệu dưới kính'],
          rows: [
            ['Kì trung gian', 'Nhân nguyên vẹn, bắt màu đều, có hạch nhân, chưa thấy NST rõ'],
            ['Kì đầu', 'NST là các sợi mảnh rối vào nhau ở vùng nhân'],
            ['Kì giữa', 'NST đậm, xếp thành một băng ở giữa tế bào'],
            ['Kì sau', 'Hai nhóm NST hình chữ V đi về hai đầu tế bào'],
            ['Kì cuối', 'Hai khối NST ở hai đầu tế bào, giữa có vách ngăn'],
          ],
        },
        {
          type: 'table',
          caption: 'Dấu hiệu của các kì giảm phân',
          head: ['Kì', 'Dấu hiệu dưới kính'],
          rows: [
            ['Kì đầu I', 'Tế bào lớn, các NST kép bắt đôi thành cặp'],
            ['Kì giữa I', 'Tế bào lớn, NST xếp thành hai hàng'],
            ['Kì sau I', 'Hai nhóm NST kép to, dày đi về hai cực'],
            ['Kì cuối I', 'Tế bào lớn thắt eo, hai khối NST ở hai đầu'],
            ['Kì giữa II', 'Tế bào nhỏ hơn hẳn, NST xếp thành một hàng'],
            ['Kì sau II', 'Tế bào nhỏ, hai nhóm NST mảnh đi về hai cực'],
            ['Kì cuối II', 'Tế bào nhỏ thắt eo, hai khối NST ở hai đầu'],
          ],
        },
        {
          type: 'p',
          text: 'Kì đầu II diễn ra nhanh nên khó gặp trên tiêu bản; trò chơi dưới đây không có kì này, nhưng em vẫn có thể gặp nó trên tiêu bản thật.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Nhóm viết báo cáo gồm: mục đích, mẫu vật và cách làm, hình vẽ tế bào ở các kì quan sát được (ghi rõ độ phóng đại và tên kì), số tế bào đếm được ở mỗi kì và nhận xét.',
        },
        {
          type: 'list',
          items: [
            'Vẽ đủ bốn kì của nguyên phân và các kì của giảm phân quan sát được.',
            'Trả lời: mục đích của bước nhuộm là gì? Vì sao đun nóng nhẹ mà không đun sôi? Vì sao phải ngâm ống sinh tinh trong KCl nhược trương và loại bỏ mỡ?',
            'Đếm khoảng $100$ tế bào ở một vùng rễ và tính tỉ lệ phần trăm tế bào ở mỗi kì. Kì nào gặp nhiều nhất? Vì sao?',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Nhận diện kì phân bào trong vi trường',
    instruction:
      'Chạm vào một tế bào, rồi chọn tên kì. Tiêu bản rễ hành và tiêu bản châu chấu ở đây được vẽ mô phỏng theo màu thuốc nhuộm. Nhận diện hết vi trường để xem thống kê, rồi đổi sang vi trường khác.',
  },
  examples: [
    {
      problem:
        'Dưới kính, một tế bào rễ hành có NST đậm xếp thành một băng ở giữa tế bào. Một tế bào khác có hai nhóm NST hình chữ V đi về hai đầu. Hai tế bào đó ở kì nào, và kì nào diễn ra trước?',
      steps: [
        'NST co xoắn cực đại, xếp một hàng trên mặt phẳng xích đạo là dấu hiệu của kì giữa.',
        'Hai nhóm NST đơn đi về hai cực là dấu hiệu của kì sau.',
        'Các nhiễm sắc tử chị em chỉ tách nhau sau khi mọi NST đã xếp hàng, nên kì giữa diễn ra trước.',
      ],
      answer: 'Tế bào thứ nhất ở kì giữa, tế bào thứ hai ở kì sau; kì giữa diễn ra trước.',
    },
    {
      problem:
        'Một nhóm đếm $120$ tế bào ở đầu rễ hành được: $102$ tế bào kì trung gian, $9$ kì đầu, $4$ kì giữa, $2$ kì sau, $3$ kì cuối. Tính tỉ lệ tế bào ở kì trung gian và cho biết kì nào có vẻ ngắn nhất.',
      steps: [
        'Kiểm tra tổng: $102 + 9 + 4 + 2 + 3 = 120$.',
        'Tỉ lệ kì trung gian: $\\dfrac{102}{120} \\cdot 100\\% = 85\\%$.',
        'Kì ngắn thì khi cố định mẫu ít bắt gặp tế bào ở kì đó. Kì sau có ít tế bào nhất ($2$ tế bào).',
      ],
      answer: 'Kì trung gian chiếm $85\\%$; kì sau có vẻ ngắn nhất, đúng với điều đã học.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm tiêu bản nguyên phân ở rễ hành theo đúng thứ tự.',
      items: [
        'Nhuộm đầu rễ bằng acetocarmine, đun nóng nhẹ',
        'Cắt đầu rễ, ngâm trong Carnoy ít nhất $24$ giờ',
        'Quan sát ở vật kính $10\\times$ rồi $40\\times$',
        'Đặt đoạn chóp rễ lên lam kính, đậy lamen, ép nhẹ dàn mỏng',
      ],
      answer: [1, 0, 3, 2],
      hints: ['Mẫu phải được giữ nguyên trạng thái trước khi nhuộm.'],
      solution: 'Cố định, nhuộm, làm tiêu bản rồi mới quan sát.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao lại lấy đầu rễ hành để quan sát nguyên phân?',
      options: [
        'Vì đầu rễ có sẵn màu đỏ dễ nhìn',
        'Vì đầu rễ có nhiều tế bào đang phân chia',
        'Vì tế bào đầu rễ không có thành tế bào',
        'Vì đầu rễ chỉ có tế bào đang giảm phân',
      ],
      answer: 1,
      hints: ['Rễ dài ra nhờ vùng nào?'],
      solution:
        'Đầu rễ chứa mô phân sinh, nơi tế bào nguyên phân mạnh, nên dễ gặp đủ các kì của nguyên phân.',
    },
    {
      type: 'choice',
      prompt: 'Mục đích của bước nhuộm mẫu vật là gì?',
      options: [
        'Làm tế bào phân chia nhanh hơn',
        'Làm NST bắt màu để quan sát được dưới kính',
        'Làm tế bào to lên',
        'Giết các vi khuẩn trên mẫu',
      ],
      answer: 1,
      hints: ['NST vốn không màu.'],
      solution: 'Thuốc nhuộm làm NST bắt màu, nổi bật dưới kính hiển vi.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi nhuộm rễ hành chỉ đun nóng nhẹ, không đun sôi?',
      options: [
        'Vì đun sôi làm tế bào biến dạng và hỏng mẫu',
        'Vì acetocarmine chỉ có màu khi còn lạnh',
        'Vì đun sôi làm NST nhân đôi',
        'Vì đun nóng nhẹ làm tế bào tiếp tục phân chia',
      ],
      answer: 0,
      hints: ['Hãy nghĩ đến hình dạng tế bào khi gặp nhiệt độ cao.'],
      solution:
        'Đun nhẹ giúp thuốc thấm qua thành tế bào cứng; đun sôi sẽ làm tế bào chết và biến dạng, khó quan sát.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải ngâm ống sinh tinh trong dung dịch KCl nhược trương?',
      options: [
        'Để giết chết hết tế bào',
        'Để tế bào trương lên, NST phân tán dễ quan sát',
        'Để nhuộm màu NST',
        'Để DNA nhân đôi',
      ],
      answer: 1,
      hints: ['Trong dung dịch nhược trương, nước đi vào tế bào.'],
      solution:
        'Nước thẩm thấu vào làm tế bào trương lên, các NST tách rời nhau, nhờ đó dễ quan sát hơn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi dấu hiệu dưới kính với kì của nguyên phân.',
      left: [
        'NST xếp thành một băng ở giữa tế bào',
        'Hai nhóm NST hình chữ V đi về hai đầu tế bào',
        'Sợi NST mảnh rối vào nhau ở vùng nhân',
        'Hai khối NST ở hai đầu, giữa có vách ngăn',
      ],
      right: ['Kì giữa', 'Kì sau', 'Kì đầu', 'Kì cuối'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Vách ngăn của tế bào thực vật hình thành ở cuối quá trình phân bào.'],
      solution:
        'Băng giữa tế bào: kì giữa. Hai nhóm hình chữ V: kì sau. Sợi mảnh: kì đầu. Hai khối và vách ngăn: kì cuối.',
    },
    {
      type: 'choice',
      prompt:
        'Trên tiêu bản châu chấu, một tế bào lớn có NST xếp thành hai hàng song song ở giữa. Tế bào đang ở kì nào?',
      options: ['Kì giữa của nguyên phân', 'Kì giữa I', 'Kì giữa II', 'Kì sau II'],
      answer: 1,
      hints: ['Chỉ có một kì NST xếp thành hai hàng.'],
      solution: 'NST xếp hai hàng là đặc trưng của kì giữa I, khi các cặp tương đồng xếp đôi.',
    },
    {
      type: 'choice',
      prompt: 'Làm thế nào để phân biệt kì sau I với kì sau II trên tiêu bản?',
      options: [
        'Kì sau I tế bào lớn, NST kép dày; kì sau II tế bào nhỏ, NST mảnh',
        'Kì sau I không có NST nhìn thấy được',
        'Kì sau II có NST xếp thành hai hàng',
        'Kì sau II có màng nhân rõ',
      ],
      answer: 0,
      hints: ['So sánh kích thước tế bào và độ dày NST.'],
      solution:
        'Ở kì sau I, tế bào còn lớn và NST còn ở dạng kép nên dày; ở kì sau II, tế bào đã nhỏ đi và NST đơn nên mảnh hơn.',
    },
    {
      type: 'number',
      prompt:
        'Quan sát ở thị kính $10\\times$ và vật kính $40\\times$ thì độ phóng đại của ảnh là bao nhiêu lần?',
      answer: 400,
      unit: 'lần',
      hints: ['Độ phóng đại bằng tích độ phóng đại của thị kính và vật kính.'],
      solution: '$10 \\cdot 40 = 400$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Một nhóm đếm $200$ tế bào rễ hành, thấy $170$ tế bào ở kì trung gian. Tỉ lệ tế bào ở kì trung gian là bao nhiêu phần trăm?',
      answer: 85,
      unit: '%',
      hints: ['Lấy số tế bào ở kì đó chia cho tổng số tế bào, rồi nhân $100\\%$.'],
      solution: '$\\dfrac{170}{200} \\cdot 100\\% = 85\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Khi đếm tế bào như trên, phần lớn tế bào ở kì trung gian và rất ít ở kì sau. Kết luận nào hợp lí nhất?',
      options: [
        'Kì trung gian kéo dài nhất, kì sau rất ngắn',
        'Tế bào không qua kì sau',
        'Thuốc nhuộm không nhuộm được kì sau',
        'Kì sau chỉ có ở giảm phân',
      ],
      answer: 0,
      hints: ['Một kì kéo dài lâu hơn thì khi cố định mẫu sẽ bắt gặp nhiều tế bào ở kì đó hơn.'],
      solution:
        'Số tế bào ở một kì tỉ lệ với thời gian của kì đó. Kì trung gian kéo dài nhất, kì sau ngắn nhất.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm tiêu bản giảm phân ở châu chấu theo đúng thứ tự.',
      items: [
        'Đặt đoạn ống lên lam kính, nhuộm acetocarmine, đậy lamen và dàn mỏng',
        'Mổ châu chấu đực, lấy ống sinh tinh cho vào KCl nhược trương',
        'Quan sát và vẽ các kì của giảm phân',
        'Ngâm ống sinh tinh trong Carnoy khoảng $24$ giờ',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Mẫu được lấy ra trước, rồi cố định, sau đó mới nhuộm.'],
      solution: 'Mổ lấy ống sinh tinh, cố định bằng Carnoy, nhuộm và dàn mỏng, cuối cùng quan sát.',
    },
  ],
  takeaways: [
    'Làm tiêu bản NST gồm các bước cố định, nhuộm, dàn mỏng tế bào và quan sát từ vật kính nhỏ đến vật kính lớn.',
    'Đầu rễ hành dùng để quan sát nguyên phân, ống sinh tinh của châu chấu đực dùng để quan sát giảm phân.',
    'Kì giữa I xếp hai hàng, kì giữa II xếp một hàng; tế bào ở giảm phân II nhỏ hơn giảm phân I.',
    'Kì kéo dài lâu hơn thì gặp nhiều tế bào hơn: kì trung gian nhiều nhất, kì sau ít nhất.',
  ],
};
