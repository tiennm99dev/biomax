/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Trao đổi chất qua màng tế bào: cấu trúc khảm động của màng, vận chuyển thụ động (khuếch tán, thẩm thấu), vận chuyển chủ động nhờ bơm tiêu tốn ATP, nhập bào và xuất bào.',
  intro:
    'Tế bào luôn cần lấy vào chất dinh dưỡng và thải ra chất cặn bã, nhưng màng sinh chất không cho mọi chất đi qua như nhau. Vì sao O₂ đi qua màng dễ dàng còn ion thì cần protein? Vì sao tế bào có thể tích luỹ một chất đến nồng độ cao hơn bên ngoài? Một bạch cầu làm thế nào để nuốt được cả vi khuẩn?',
  objectives: [
    'Nêu được khái niệm trao đổi chất ở tế bào và mô tả được cấu trúc khảm động của màng sinh chất.',
    'Phân biệt được vận chuyển thụ động và vận chuyển chủ động; lấy được ví dụ.',
    'Phân biệt được khuếch tán đơn giản, khuếch tán tăng cường và thẩm thấu.',
    'Giải thích được sự thay đổi của tế bào trong các môi trường đẳng trương, nhược trương, ưu trương.',
    'Mô tả được các quá trình nhập bào và xuất bào.',
  ],
  sections: [
    {
      heading: 'Màng sinh chất và trao đổi chất ở tế bào',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Trao đổi chất qua màng',
          text: 'Trao đổi chất qua màng là quá trình đưa các chất vào và đưa các chất ra khỏi tế bào qua màng sinh chất. Nhờ đó tế bào lấy được những chất cần thiết và thải bỏ chất cặn bã.',
        },
        {
          type: 'p',
          text: 'Màng sinh chất có cấu trúc khảm động: lớp kép phospholipid là nền, các phân tử protein khảm vào đó như những mảnh ghép, và các phân tử trong màng có thể di chuyển nên màng linh hoạt. Hai lớp phospholipid quay đuôi kị nước vào nhau, tạo một vùng kị nước ở giữa màng. Vì vậy, màng có tính thấm chọn lọc: chỉ cho một số chất nhất định đi qua.',
        },
        { type: 'widget', name: 'mang-te-bao' },
      ],
    },
    {
      heading: 'Vận chuyển thụ động',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vận chuyển thụ động',
          text: 'Vận chuyển thụ động là phương thức vận chuyển các chất qua màng theo chiều gradient nồng độ, từ nơi có nồng độ cao đến nơi có nồng độ thấp, không tiêu tốn năng lượng.',
        },
        {
          type: 'table',
          caption: 'Các con đường khuếch tán qua màng',
          head: ['Con đường', 'Đi qua đâu', 'Chất được vận chuyển'],
          rows: [
            [
              'Khuếch tán đơn giản',
              'Trực tiếp qua lớp kép phospholipid',
              'Chất nhỏ, không phân cực: O₂, CO₂, hormone steroid, vitamin tan trong lipid',
            ],
            [
              'Khuếch tán tăng cường (có trợ giúp)',
              'Qua protein kênh hoặc protein mang',
              'Chất phân cực, ion: glucose, amino acid, Na⁺, K⁺',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Tốc độ khuếch tán tăng cường phụ thuộc vào chênh lệch nồng độ và số protein vận chuyển trên màng. Với ion, tốc độ còn phụ thuộc vào chênh lệch điện thế giữa hai phía màng.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thẩm thấu',
          text: 'Thẩm thấu là sự khuếch tán của nước qua màng, từ nơi có thế nước cao (ít chất tan) đến nơi có thế nước thấp (nhiều chất tan). Phần lớn phân tử nước đi qua kênh protein aquaporin.',
        },
        {
          type: 'table',
          caption: 'Tế bào trong ba loại môi trường, so với nồng độ chất tan trong tế bào',
          head: [
            'Môi trường',
            'Nồng độ chất tan',
            'Chiều đi của nước',
            'Tế bào động vật',
            'Tế bào thực vật',
          ],
          rows: [
            [
              'Đẳng trương',
              'Bằng trong tế bào',
              'Vào và ra bằng nhau',
              'Không đổi',
              'Không đổi rõ rệt',
            ],
            [
              'Nhược trương',
              'Thấp hơn',
              'Vào tế bào',
              'Trương lên, có thể vỡ',
              'Trương lên, không vỡ nhờ thành tế bào',
            ],
            [
              'Ưu trương',
              'Cao hơn',
              'Ra khỏi tế bào',
              'Co lại',
              'Co nguyên sinh: nguyên sinh chất tách khỏi thành tế bào',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Vận chuyển chủ động',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vận chuyển chủ động',
          text: 'Vận chuyển chủ động là phương thức vận chuyển các chất qua màng ngược chiều gradient nồng độ, từ nơi có nồng độ thấp đến nơi có nồng độ cao, nhờ protein vận chuyển (thường gọi là bơm) và tiêu tốn năng lượng ATP.',
        },
        {
          type: 'list',
          items: [
            'Bơm Na⁺/K⁺ ở màng tế bào động vật: mỗi ATP được dùng đưa $3$ Na⁺ ra ngoài và $2$ K⁺ vào trong tế bào, giữ K⁺ trong tế bào cao còn Na⁺ thấp.',
            'Tế bào ống thận hấp thu lại glucose và amino acid từ dịch lọc, kể cả khi nồng độ trong tế bào đã cao hơn.',
            'Tế bào niêm mạc dạ dày bơm H⁺ vào dịch vị, tạo môi trường acid.',
          ],
        },
        {
          type: 'p',
          text: 'Nhờ vận chuyển chủ động, tế bào lấy được chất cần thiết ngay cả khi chất đó ở môi trường có nồng độ thấp, đồng thời chủ động điều hoà nồng độ các chất bên trong.',
        },
      ],
    },
    {
      heading: 'Nhập bào và xuất bào',
      blocks: [
        {
          type: 'p',
          text: 'Các phân tử lớn và cả tế bào khác không đi qua được protein vận chuyển. Tế bào đưa chúng qua màng bằng cách biến dạng màng sinh chất, và quá trình này tiêu tốn ATP.',
        },
        {
          type: 'list',
          items: [
            'Nhập bào là quá trình đưa chất vào tế bào: màng bao lấy chất cần lấy rồi tạo túi đưa vào tế bào chất. Thực bào lấy các phân tử lớn hoặc cả tế bào khác, ví dụ bạch cầu nuốt vi khuẩn. Ẩm bào lấy dịch và các chất tan từ môi trường. Tế bào có thể chọn lọc chất cần lấy nhờ protein thụ thể trên màng.',
            'Xuất bào là quá trình đưa chất ra khỏi tế bào: túi chứa chất cần tiết di chuyển đến dung hợp với màng sinh chất rồi giải phóng chất ra ngoài, ví dụ tế bào tiết protein.',
          ],
        },
        { type: 'widget', name: 'nhap-xuat-bao' },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng màng tế bào',
    instruction:
      'Chọn một chất, kéo hai thanh để đặt số phân tử mỗi bên rồi bấm chạy. Với glucose và ion K⁺, thử bỏ hết protein vận chuyển rồi tăng dần để so sánh tốc độ. Với K⁺, bật bơm ATP và xem nồng độ trong tế bào có vượt nồng độ bên ngoài không; khi hết ATP, chuyện gì xảy ra?',
  },
  examples: [
    {
      problem:
        'Cho hồng cầu người vào ba ống: nước cất, dung dịch NaCl $0{,}9\\%$ (đẳng trương với hồng cầu) và dung dịch NaCl $5\\%$. Dự đoán hiện tượng ở mỗi ống và giải thích.',
      steps: [
        'So sánh nồng độ chất tan của mỗi dung dịch với trong tế bào: nước cất thấp hơn (nhược trương), NaCl $0{,}9\\%$ bằng (đẳng trương), NaCl $5\\%$ cao hơn (ưu trương).',
        'Nước đi từ nơi có thế nước cao (ít chất tan) đến nơi có thế nước thấp (nhiều chất tan).',
        'Trong nước cất, nước đi vào tế bào. Hồng cầu không có thành tế bào nên trương lên và có thể vỡ.',
        'Trong NaCl $0{,}9\\%$, nước vào và ra bằng nhau, hình dạng không đổi. Trong NaCl $5\\%$, nước đi ra, hồng cầu co lại.',
      ],
      answer:
        'Nước cất: hồng cầu trương và có thể vỡ; NaCl $0{,}9\\%$: không đổi; NaCl $5\\%$: co lại.',
    },
    {
      problem:
        'Một chất X đi từ dịch lọc ở ống thận vào tế bào ống thận, trong khi nồng độ X trong tế bào cao hơn trong dịch lọc. Khi đầu độc để tế bào không tạo được ATP, X không được hấp thu nữa. X được vận chuyển theo phương thức nào?',
      steps: [
        'X đi từ nơi nồng độ thấp (dịch lọc) đến nơi nồng độ cao (tế bào): ngược chiều gradient nồng độ.',
        'Không có ATP thì quá trình dừng: quá trình cần năng lượng.',
        'Hai dấu hiệu này đều là đặc trưng của vận chuyển chủ động, không phải khuếch tán.',
      ],
      answer: 'Vận chuyển chủ động.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Những chất nào đi qua màng bằng khuếch tán đơn giản qua lớp kép phospholipid?',
      options: ['O₂', 'Glucose', 'CO₂', 'Ion K⁺', 'Hormone steroid'],
      answers: [0, 2, 4],
      hints: ['Vùng giữa màng kị nước. Chất nào không phân cực hoặc tan trong lipid?'],
      solution:
        'O₂, CO₂ và hormone steroid không phân cực hoặc tan trong lipid nên đi trực tiếp qua lớp kép. Glucose và ion cần protein vận chuyển.',
    },
    {
      type: 'choice',
      prompt: 'Đặc điểm nào phân biệt vận chuyển chủ động với vận chuyển thụ động?',
      options: [
        'Chỉ xảy ra với các chất có kích thước lớn',
        'Không cần protein trên màng',
        'Ngược chiều gradient nồng độ và tiêu tốn ATP',
        'Luôn đưa chất từ trong ra ngoài tế bào',
      ],
      answer: 2,
      hints: ['Nghĩ đến chiều đi của chất và năng lượng cần dùng.'],
      solution:
        'Vận chuyển chủ động đưa chất từ nơi nồng độ thấp đến nơi nồng độ cao và tiêu tốn ATP; vận chuyển thụ động theo chiều ngược lại và không tốn năng lượng.',
    },
    {
      type: 'text',
      prompt: 'Sự khuếch tán của nước qua màng được gọi là gì?',
      accept: ['thẩm thấu', 'sự thẩm thấu'],
      hints: ['Đây là một từ ghép có chữ "thấu".'],
      solution: 'Sự khuếch tán của nước qua màng gọi là thẩm thấu.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi môi trường (so với tế bào động vật) với kết quả xảy ra.',
      left: ['Đẳng trương', 'Nhược trương', 'Ưu trương'],
      right: [
        'Nước vào nhiều, tế bào trương lên',
        'Nước ra nhiều, tế bào co lại',
        'Tế bào giữ nguyên hình dạng',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: ['Nước đi về phía có nhiều chất tan hơn.'],
      solution:
        'Đẳng trương: nước vào và ra bằng nhau. Nhược trương: nước vào, tế bào trương lên. Ưu trương: nước ra, tế bào co lại.',
    },
    {
      type: 'number',
      prompt:
        'Bơm Na⁺/K⁺ đưa $2$ K⁺ vào tế bào với mỗi ATP sử dụng. Muốn đưa $50$ K⁺ vào tế bào, bơm cần dùng bao nhiêu ATP?',
      answer: 25,
      unit: 'ATP',
      hints: ['Mỗi ATP chuyển được bao nhiêu K⁺?'],
      solution: 'Số ATP cần dùng là $50 : 2 = 25$.',
    },
    {
      type: 'choice',
      prompt:
        'Cắm một cành rau muống vào nước sạch, các tế bào của cây hút nước nhưng không bị vỡ. Vì sao?',
      options: [
        'Tế bào thực vật có thành tế bào cứng chống lại sự trương quá mức',
        'Môi trường nước sạch là đẳng trương với tế bào',
        'Màng tế bào thực vật không cho nước đi qua',
        'Tế bào đã dùng ATP để bơm nước ra ngoài',
      ],
      answer: 0,
      hints: ['Tế bào thực vật có cấu trúc nào bên ngoài màng mà tế bào động vật không có?'],
      solution:
        'Nước sạch là môi trường nhược trương, nước đi vào tế bào. Thành tế bào cứng giữ cho tế bào chỉ trương lên chứ không vỡ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của quá trình thực bào theo đúng thứ tự.',
      items: [
        'Màng bao lấy vi khuẩn',
        'Thụ thể trên màng nhận ra vi khuẩn',
        'Túi dung hợp với lysosome, vi khuẩn bị phân giải',
        'Màng khép lại, tạo túi trong tế bào chất',
      ],
      answer: [1, 0, 3, 2],
      hints: ['Vi khuẩn phải được nhận biết trước, bị phân giải sau cùng.'],
      solution:
        'Thụ thể nhận ra vi khuẩn, màng bao lấy vi khuẩn, màng khép lại tạo túi, rồi túi dung hợp với lysosome để phân giải vi khuẩn.',
    },
    {
      type: 'choice',
      prompt:
        'Tế bào tuyến tuỵ tiết enzyme tiêu hoá (protein có kích thước lớn) ra ngoài bằng cách nào?',
      options: ['Khuếch tán đơn giản', 'Thẩm thấu', 'Ẩm bào', 'Xuất bào'],
      answer: 3,
      hints: ['Phân tử lớn không qua được protein vận chuyển; chất đang đi ra khỏi tế bào.'],
      solution:
        'Enzyme được đóng gói trong túi, túi dung hợp với màng sinh chất và giải phóng enzyme ra ngoài: đó là xuất bào.',
    },
    {
      type: 'choice',
      prompt:
        'Trong mô phỏng, ion K⁺ không đi qua màng khi số protein vận chuyển bằng $0$. Điều này cho thấy tính chất nào của màng?',
      options: [
        'Màng có tính thấm chọn lọc',
        'Màng không có tính linh hoạt',
        'Màng không có phospholipid',
        'Ion K⁺ không tan được trong nước',
      ],
      answer: 0,
      hints: ['Cùng một màng nhưng O₂ đi qua được, còn K⁺ thì không.'],
      solution:
        'Ion tích điện không đi qua được vùng kị nước của lớp kép, chỉ qua được protein phù hợp. Màng cho chất này qua nhưng giữ chất kia: đó là tính thấm chọn lọc.',
    },
  ],
  takeaways: [
    'Màng sinh chất có cấu trúc khảm động và tính thấm chọn lọc.',
    'Vận chuyển thụ động đi xuôi chiều nồng độ, không tốn ATP: khuếch tán đơn giản, khuếch tán tăng cường qua protein và thẩm thấu của nước.',
    'Môi trường nhược trương làm nước vào tế bào, ưu trương làm nước ra khỏi tế bào, đẳng trương giữ tế bào không đổi.',
    'Vận chuyển chủ động đi ngược chiều nồng độ, nhờ bơm protein và tiêu tốn ATP.',
    'Nhập bào (thực bào, ẩm bào) và xuất bào vận chuyển chất có kích thước lớn nhờ biến dạng màng, tiêu tốn ATP.',
  ],
};
