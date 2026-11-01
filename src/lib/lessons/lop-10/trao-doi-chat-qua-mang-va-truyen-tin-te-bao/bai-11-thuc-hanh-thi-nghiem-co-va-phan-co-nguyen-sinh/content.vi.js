/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành làm tiêu bản biểu bì lá thài lài tía, quan sát hiện tượng co nguyên sinh trong dung dịch NaCl và phản co nguyên sinh khi nhỏ nước cất, sau đó giải thích kết quả và viết báo cáo.',
  intro:
    'Rau muống héo nhanh khi xào với muối, nhưng rau héo ngâm vào nước lại tươi lên. Dưới kính hiển vi, em có thể thấy chính điều đó xảy ra trong từng tế bào: nguyên sinh chất co lại khỏi thành tế bào rồi lại trở về như cũ khi có nước.',
  objectives: [
    'Làm được tiêu bản biểu bì lá và quan sát được tế bào dưới kính hiển vi.',
    'Thực hiện được thí nghiệm co nguyên sinh và phản co nguyên sinh.',
    'Giải thích được kết quả bằng chiều đi của nước trong môi trường ưu trương và nhược trương.',
    'Viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Cơ sở của thí nghiệm',
      blocks: [
        {
          type: 'p',
          text: 'Nước đi qua màng bằng thẩm thấu, từ nơi có ít chất tan đến nơi có nhiều chất tan. So với dịch bào, dung dịch có nồng độ chất tan cao hơn là môi trường ưu trương, thấp hơn là môi trường nhược trương.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Co nguyên sinh và phản co nguyên sinh',
          text: 'Co nguyên sinh là hiện tượng nguyên sinh chất co lại và tách khỏi thành tế bào khi tế bào thực vật mất nước trong môi trường ưu trương. Phản co nguyên sinh là hiện tượng tế bào đã co nguyên sinh hút nước trở lại trong môi trường nhược trương, nguyên sinh chất trở về áp sát thành tế bào.',
        },
        {
          type: 'p',
          text: 'Lá thài lài tía có dịch bào màu tím nên dễ thấy ranh giới của không bào và lớp nguyên sinh chất. Mặt dưới lá còn có các khí khổng, được đóng mở bởi hai tế bào bảo vệ; các tế bào này cũng thay đổi theo lượng nước.',
        },
      ],
    },
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: lá cây thài lài tía còn tươi.',
            'Dụng cụ: kính hiển vi quang học, lam kính, lamen, lưỡi dao lam, ống nhỏ giọt, giấy thấm.',
            'Hoá chất: dung dịch NaCl (có thể chuẩn bị vài nồng độ khác nhau), nước cất.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Cẩn thận với lưỡi dao lam, lam kính và lamen dễ vỡ. Rửa tay và thu dọn dụng cụ sau khi thực hành.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm co nguyên sinh',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng lưỡi dao lam nhẹ nhàng tách lớp biểu bì dưới của lá, đặt lên lam kính đã nhỏ sẵn một giọt dung dịch NaCl. Đặt lamen lên mẫu và dùng giấy thấm hút bớt dung dịch thừa.',
            'Đặt tiêu bản lên kính hiển vi, quan sát ở vật kính $10\\times$.',
            'Chọn vùng biểu bì chỉ có một lớp tế bào, chuyển sang vật kính $40\\times$ để quan sát rõ hơn.',
            'Quan sát và vẽ vào vở các tế bào biểu bì và tế bào khí khổng.',
          ],
        },
      ],
    },
    {
      heading: 'Thí nghiệm phản co nguyên sinh',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Lấy tiêu bản đã co nguyên sinh ra khỏi kính. Nhỏ một giọt nước cất vào mép lamen, đặt giấy thấm ở mép đối diện để hút, kéo nước cất đi qua mẫu.',
            'Quan sát ở vật kính $10\\times$.',
            'Chuyển sang vật kính $40\\times$ ở vùng chỉ có một lớp tế bào.',
            'Quan sát và vẽ vào vở các tế bào đã phản co và tế bào khí khổng.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Co quá chậm hoặc quá nhanh thì làm thế nào?',
          text: 'Nếu chất nguyên sinh co quá chậm, tăng nồng độ NaCl để chênh lệch với dịch bào lớn hơn và nước thoát ra nhanh hơn. Nếu co quá nhanh, khó quan sát, giảm nồng độ NaCl.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi nhóm viết báo cáo gồm: mục đích, cách tiến hành, kết quả (hình vẽ các tế bào, ghi rõ độ phóng đại), giải thích và kết luận. Có thể dùng bảng sau, mỗi dấu … là một ô cần điền.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng kết quả',
          head: [
            'Dung dịch nhỏ vào',
            'Loại môi trường',
            'Nguyên sinh chất',
            'Khí khổng',
            'Giải thích',
          ],
          rows: [
            ['NaCl', '…', '…', '…', '…'],
            ['Nước cất (sau khi đã co)', '…', '…', '…', '…'],
          ],
        },
        {
          type: 'p',
          text: 'Trả lời thêm: khi tế bào co nguyên sinh, khí khổng đóng hay mở, vì sao? Vì sao thí nghiệm chỉ thành công với tế bào còn sống?',
        },
      ],
    },
  ],
  explore: {
    title: 'Tế bào thài lài tía ảo',
    instruction:
      'Kéo thanh nồng độ NaCl và xem kích thước không bào, khoảng trống giữa nguyên sinh chất với thành tế bào và khí khổng. So sánh tốc độ co ở dung dịch loãng và đặc, rồi nhỏ nước cất. Số liệu chỉ là mô hình: dịch bào được chọn tương đương NaCl $1\\%$, còn ở tế bào thật, ngưỡng này khác nhau tuỳ mẫu.',
  },
  examples: [
    {
      problem:
        'Nhỏ dung dịch NaCl lên tiêu bản biểu bì lá thài lài tía, một lúc sau nguyên sinh chất tách khỏi thành tế bào. Sau đó nhỏ nước cất, nguyên sinh chất lại áp sát thành. Giải thích hai hiện tượng.',
      steps: [
        'Dung dịch NaCl có nồng độ chất tan cao hơn dịch bào nên là môi trường ưu trương.',
        'Nước từ tế bào đi ra ngoài, không bào nhỏ lại, nguyên sinh chất co và tách khỏi thành: co nguyên sinh.',
        'Nước cất không có chất tan nên là môi trường nhược trương so với dịch bào.',
        'Nước đi vào tế bào, không bào lớn lên, nguyên sinh chất áp sát thành trở lại: phản co nguyên sinh.',
      ],
      answer:
        'Hai hiện tượng đều do thẩm thấu của nước, với chiều đi ngược nhau trong hai môi trường.',
    },
    {
      problem:
        'Quan sát ở thị kính $10\\times$ và vật kính $40\\times$ thấy nguyên sinh chất co rất chậm. Độ phóng đại tổng cộng là bao nhiêu và nên làm gì để quan sát được nhanh hơn?',
      steps: [
        'Độ phóng đại tổng cộng bằng độ phóng đại thị kính nhân với độ phóng đại vật kính: $10 \\times 40 = 400$ lần.',
        'Tốc độ nước thoát ra phụ thuộc vào chênh lệch nồng độ giữa dung dịch và dịch bào.',
        'Muốn co nhanh hơn, cần tăng chênh lệch này bằng cách dùng dung dịch NaCl có nồng độ cao hơn.',
      ],
      answer: 'Độ phóng đại $400$ lần; nên tăng nồng độ dung dịch NaCl.',
    },
  ],
  practice: [
    {
      type: 'text',
      prompt:
        'Hiện tượng nguyên sinh chất co lại, tách khỏi thành tế bào khi tế bào mất nước được gọi là gì?',
      accept: ['co nguyên sinh', 'hiện tượng co nguyên sinh', 'sự co nguyên sinh'],
      hints: ['Tên hiện tượng có chữ "nguyên sinh".'],
      solution: 'Đó là hiện tượng co nguyên sinh.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm này, dung dịch NaCl nhỏ lên tiêu bản đóng vai trò gì đối với tế bào biểu bì?',
      options: [
        'Môi trường nhược trương, làm nước đi vào tế bào',
        'Môi trường đẳng trương, giữ tế bào không đổi',
        'Thuốc nhuộm giúp nhân bắt màu rõ',
        'Môi trường ưu trương, làm nước đi ra khỏi tế bào',
      ],
      answer: 3,
      hints: [
        'Dung dịch này làm tế bào mất nước. Khi đó nồng độ chất tan bên ngoài cao hay thấp hơn dịch bào?',
      ],
      solution:
        'Dung dịch NaCl có nồng độ chất tan cao hơn dịch bào, là môi trường ưu trương nên nước đi ra khỏi tế bào.',
    },
    {
      type: 'choice',
      prompt: 'Khi tế bào biểu bì bị co nguyên sinh, khí khổng ở trạng thái nào?',
      options: ['Đóng lại', 'Mở rộng hơn', 'Không thay đổi', 'Bị phá huỷ hoàn toàn'],
      answer: 0,
      hints: ['Các tế bào bảo vệ cũng mất nước như các tế bào khác.'],
      solution: 'Tế bào bảo vệ mất nước nên co lại, làm khe khí khổng đóng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm thí nghiệm phản co nguyên sinh theo đúng thứ tự.',
      items: [
        'Chuyển sang vật kính $40\\times$ ở vùng chỉ có một lớp tế bào',
        'Nhỏ nước cất vào một mép lamen, dùng giấy thấm hút ở mép đối diện',
        'Vẽ các tế bào quan sát được vào vở',
        'Quan sát tiêu bản ở vật kính $10\\times$',
      ],
      answer: [1, 3, 0, 2],
      hints: [
        'Phải thay dung dịch trước khi soi. Quan sát luôn đi từ vật kính nhỏ đến vật kính lớn.',
      ],
      solution:
        'Nhỏ nước cất và hút bằng giấy thấm, quan sát ở vật kính $10\\times$, chuyển sang $40\\times$ rồi vẽ.',
    },
    {
      type: 'choice',
      prompt:
        'Một nhóm nhỏ dung dịch NaCl nhưng nguyên sinh chất co rất chậm. Nhóm nên điều chỉnh thế nào?',
      options: [
        'Pha loãng dung dịch NaCl',
        'Chuyển ngay sang vật kính $100\\times$',
        'Tăng nồng độ dung dịch NaCl',
        'Thay NaCl bằng nước cất',
      ],
      answer: 2,
      hints: ['Chênh lệch nồng độ càng lớn thì nước thoát ra càng nhanh.'],
      solution:
        'Tăng nồng độ NaCl làm chênh lệch với dịch bào lớn hơn nên nước thoát ra nhanh hơn. Ngược lại, co quá nhanh thì giảm nồng độ.',
    },
    {
      type: 'number',
      prompt:
        'Cần pha $200$ mL dung dịch NaCl $3\\%$ ($3$ g NaCl trong mỗi $100$ mL dung dịch). Cần bao nhiêu gam NaCl?',
      answer: 6,
      unit: 'g',
      hints: ['$200$ mL gấp mấy lần $100$ mL?'],
      solution: '$200$ mL gấp $2$ lần $100$ mL, nên cần $3 \\times 2 = 6$ g NaCl.',
    },
    {
      type: 'number',
      prompt:
        'Trong mô hình, lượng chất tan của dịch bào không đổi nên tích (nồng độ × kích thước) không đổi. Dịch bào ban đầu tương đương NaCl $1\\%$ ở kích thước $100\\%$. Sau khi cân bằng trong dung dịch NaCl $2\\%$, nguyên sinh chất còn bao nhiêu phần trăm kích thước ban đầu?',
      answer: 50,
      unit: '%',
      hints: ['Khi cân bằng, dịch bào đặc bằng dung dịch bên ngoài, tức tương đương NaCl $2\\%$.'],
      solution: 'Khi cân bằng, $1 \\times 100 = 2 \\times V$, nên $V = 50\\%$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi việc làm với hiện tượng quan sát được ở tế bào sống.',
      left: [
        'Nhỏ dung dịch NaCl đủ đặc',
        'Nhỏ nước cất lên tế bào đã co nguyên sinh',
        'Nhỏ nước cất lên tế bào bình thường',
      ],
      right: ['Phản co nguyên sinh', 'Co nguyên sinh', 'Tế bào trương nước, không vỡ'],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 2],
      ],
      hints: ['Tế bào thực vật có thành tế bào; ở đây xét chiều đi của nước.'],
      solution:
        'NaCl đặc làm tế bào co nguyên sinh. Nước cất làm tế bào đã co phản co. Với tế bào bình thường, nước cất làm tế bào trương nước, thành tế bào giữ cho nó không vỡ.',
    },
    {
      type: 'multi',
      prompt: 'Những điều kiện nào cần có để quan sát được hiện tượng phản co nguyên sinh?',
      options: [
        'Tế bào còn sống',
        'Tế bào đã bị co nguyên sinh trước đó',
        'Thành tế bào đã bị loại bỏ',
        'Môi trường mới nhược trương so với dịch bào',
        'Tiêu bản được nhuộm bằng xanh methylene',
      ],
      answers: [0, 1, 3],
      hints: ['Phản co là trở về trạng thái ban đầu nhờ nước đi vào tế bào.'],
      solution:
        'Cần tế bào sống (màng còn tính thấm chọn lọc), đã co trước đó và được chuyển sang môi trường nhược trương. Thành tế bào phải còn nguyên và không cần nhuộm, vì không bào của thài lài tía đã có màu.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao tế bào đã chết (ví dụ lá đã đun sôi) không có hiện tượng co nguyên sinh?',
      options: [
        'Tế bào chết không có thành tế bào',
        'Màng sinh chất đã mất tính thấm chọn lọc',
        'Dịch bào của tế bào chết đẳng trương với mọi dung dịch',
        'Tế bào chết không còn nước',
      ],
      answer: 1,
      hints: ['Thẩm thấu cần một lớp màng cho nước đi qua nhưng giữ chất tan lại.'],
      solution:
        'Đun sôi phá huỷ màng, màng không còn tính thấm chọn lọc. Dung dịch đi qua màng tự do nên không có chênh lệch thẩm thấu để nước rút ra.',
    },
  ],
  takeaways: [
    'Trong môi trường ưu trương, nước ra khỏi tế bào, nguyên sinh chất tách khỏi thành tế bào: co nguyên sinh.',
    'Khi chuyển sang môi trường nhược trương, tế bào đã co hút nước trở lại: phản co nguyên sinh.',
    'Khí khổng đóng khi tế bào mất nước và mở khi tế bào trương nước.',
    'Nồng độ NaCl càng cao thì co nguyên sinh càng nhanh; chỉ tế bào sống mới có hai hiện tượng này.',
    'Báo cáo cần có mục đích, cách tiến hành, hình vẽ kèm độ phóng đại, giải thích và kết luận.',
  ],
};
