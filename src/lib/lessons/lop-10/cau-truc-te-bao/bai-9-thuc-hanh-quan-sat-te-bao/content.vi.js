/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành làm tiêu bản tạm thời, nhuộm và quan sát tế bào vi khuẩn, tế bào biểu bì vảy hành và niêm mạc miệng dưới kính hiển vi quang học, sau đó so sánh tế bào nhân sơ với tế bào nhân thực và viết báo cáo.',
  intro:
    'Hai bài học trước cho em biết tế bào nhân sơ nhỏ hơn tế bào nhân thực rất nhiều. Trong bài này, em tự làm tiêu bản và quan sát bằng kính hiển vi để kiểm chứng điều đó. Kĩ năng lấy mẫu, nhuộm và lấy nét đúng cách quyết định em có nhìn thấy tế bào hay không.',
  objectives: [
    'Làm được tiêu bản tạm thời từ vi khuẩn và từ tế bào nhân thực.',
    'Sử dụng đúng kính hiển vi quang học: đi từ vật kính nhỏ đến vật kính lớn, lấy nét và chọn vùng quan sát.',
    'Quan sát, vẽ và nhận xét được hình dạng, kích thước của tế bào nhân sơ và tế bào nhân thực.',
    'Viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: kính hiển vi quang học (vật kính $10\\times$, $40\\times$, $100\\times$), lam kính, lamen, que cấy, kim mũi mác, dao nhỏ, ống nhỏ giọt, đèn cồn, giấy thấm, bình nước rửa.',
            'Hoá chất: nước cất, xanh methylene (có thể thay bằng thuốc nhuộm khác như fuchsine), dầu soi nếu dùng vật kính $100\\times$.',
            'Mẫu vật: nước dưa muối (chứa vi khuẩn), củ hành tây hoặc lá thài lài tía, tế bào niêm mạc miệng.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Cẩn thận với đèn cồn, kim mũi mác và lam kính dễ vỡ. Không để thuốc nhuộm dính vào mắt, miệng. Mỗi học sinh tự lấy mẫu niêm mạc của mình bằng tăm sạch, dùng xong bỏ đúng nơi quy định. Rửa tay sau khi thực hành.',
        },
      ],
    },
    {
      heading: 'Làm tiêu bản và quan sát tế bào nhân sơ',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Cố định mẫu: nhỏ một giọt nước cất lên lam kính, thêm một giọt nước dưa muối, dàn mỏng bằng que cấy hoặc mép lamen rồi để khô tự nhiên hoặc hơ nhanh qua ngọn lửa đèn cồn $2 - 3$ lần, không hơ quá nóng vì có thể làm biến dạng vi khuẩn.',
            'Nhuộm: nhỏ $1 - 2$ giọt xanh methylene, để khoảng $1 - 2$ phút.',
            'Rửa: nghiêng lam kính, rửa nhẹ bằng nước từ một đầu đến khi nước chảy ra không còn màu thuốc nhuộm, rồi thấm khô.',
            'Quan sát: tìm vùng mỏng ở vật kính $10\\times$, chuyển sang $40\\times$; vẽ và nhận xét kích thước, hình dạng vi khuẩn.',
          ],
        },
      ],
    },
    {
      heading: 'Làm tiêu bản và quan sát tế bào nhân thực',
      blocks: [
        {
          type: 'p',
          text: 'Biểu bì vảy hành hoặc lá thài lài tía:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tách một vảy hành hoặc lá thài lài tía. Dùng kim mũi mác tạo một ô vuông khoảng $1$ cm $\\times$ $1$ cm ở mặt trong, rồi tách lớp biểu bì thật mỏng.',
            'Đặt lớp biểu bì lên giọt nước cất trên lam kính.',
            'Nhỏ một giọt xanh methylene, đậy lamen nghiêng khoảng $45^\\circ$ để hạn chế bọt khí, nhuộm $2 - 3$ phút rồi thấm bớt nước thừa.',
            'Soi ở vật kính $10\\times$ tìm vùng chỉ có một lớp tế bào, sau đó chuyển sang $40\\times$. Nhận biết thành tế bào, màng sinh chất, tế bào chất và nhân; vẽ và chú thích.',
          ],
        },
        {
          type: 'p',
          text: 'Niêm mạc miệng: dùng tăm sạch cạo nhẹ mặt trong má, phết mẫu vào giọt nước trên lam kính, nhuộm xanh methylene, đậy lamen rồi quan sát tương tự.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao phải đi từ vật kính nhỏ?',
          text: 'Vật kính nhỏ có thị trường rộng nên dễ tìm vùng quan sát. Vật kính lớn phóng đại mạnh nhưng thị trường hẹp, và đặt gần tiêu bản hơn, dễ làm vỡ lam kính nếu lấy nét vội. Độ phóng đại tổng cộng bằng độ phóng đại thị kính nhân với độ phóng đại vật kính.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi nhóm viết báo cáo gồm: mục đích, cách tiến hành, kết quả (mô tả, vẽ hình tế bào quan sát được, ghi rõ độ phóng đại), giải thích và kết luận. Sử dụng bảng theo mẫu sau (mỗi dấu … là một ô cần điền).',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng kết quả',
          head: [
            'Mẫu',
            'Độ phóng đại',
            'Hình dạng, kích thước',
            'Thành phần nhìn thấy',
            'Loại tế bào',
          ],
          rows: [
            ['Vi khuẩn', '…', '…', '…', '…'],
            ['Biểu bì vảy hành', '…', '…', '…', '…'],
            ['Niêm mạc miệng', '…', '…', '…', '…'],
          ],
        },
        {
          type: 'p',
          text: 'Trả lời thêm các câu hỏi: Vì sao đôi khi không nhìn rõ tế bào vảy hành? Vi khuẩn em thấy có những hình dạng nào? Tế bào nhân sơ hay tế bào nhân thực dễ quan sát hơn và cho thấy nhiều chi tiết hơn, vì sao?',
        },
      ],
    },
  ],
  explore: {
    title: 'Kính hiển vi ảo',
    instruction:
      'Với mỗi tiêu bản: nhuộm mẫu, di chuyển lam kính tới vùng mỏng, lấy nét ở vật kính $10\\times$, chuyển sang $40\\times$, lấy nét lại rồi chụp ảnh. Các hình được vẽ đúng tỉ lệ theo thước đo, nên vi khuẩn sẽ rất nhỏ so với tế bào hành. Thử cả vật kính $100\\times$ với dầu soi để nhìn vi khuẩn rõ hơn.',
  },
  examples: [
    {
      problem:
        'Kính hiển vi có thị kính $10\\times$ và vật kính $40\\times$. Tế bào hành thật dài $300$ µm. Ảnh của tế bào đó qua kính dài bao nhiêu milimét?',
      steps: [
        'Độ phóng đại tổng cộng: $10 \\times 40 = 400$ lần.',
        'Chiều dài ảnh: $300 \\times 400 = 120\\,000$ µm.',
        'Đổi đơn vị: $120\\,000$ µm $= 120$ mm.',
      ],
      answer: 'Ảnh dài $120$ mm (khoảng $12$ cm) khi quan sát qua kính.',
    },
    {
      problem:
        'Một bạn soi tiêu bản vảy hành nhưng chỉ thấy các đường viền chồng chéo và mờ, không phân biệt được tế bào. Nêu nguyên nhân có thể và cách khắc phục.',
      steps: [
        'Đường viền chồng chéo cho thấy lớp biểu bì quá dày, gồm nhiều lớp tế bào.',
        'Cần di chuyển lam kính tìm vùng chỉ có một lớp tế bào, hoặc tách lại lớp biểu bì mỏng hơn.',
        'Nếu ảnh mờ do lấy nét chưa đúng, vặn ốc điều chỉnh; nếu có bọt khí, đậy lại lamen bằng cách đặt nghiêng $45^\\circ$.',
      ],
      answer:
        'Mẫu quá dày, lẫn bọt khí hoặc chưa lấy nét. Cần chọn vùng một lớp tế bào, đậy lamen đúng cách và lấy nét lại.',
    },
    {
      problem: 'Vì sao quan sát tế bào nhân sơ khó hơn tế bào nhân thực?',
      steps: [
        'Tế bào nhân sơ chỉ khoảng $1 - 5$ µm, tế bào biểu bì vảy hành dài tới vài trăm micromet.',
        'Ở cùng độ phóng đại, ảnh vi khuẩn rất nhỏ và không thấy cấu trúc bên trong.',
        'Tế bào nhân sơ cũng không có nhân hoàn chỉnh để nhuộm thành một vùng đậm rõ ràng.',
      ],
      answer:
        'Vì tế bào nhân sơ rất nhỏ, cần độ phóng đại lớn; ngay cả khi đó, hầu như chỉ thấy được hình dạng của tế bào.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm tiêu bản nhuộm vi khuẩn theo đúng thứ tự.',
      items: [
        'Quan sát dưới kính hiển vi',
        'Dàn mỏng mẫu trên lam kính và cố định',
        'Rửa nhẹ cho hết thuốc nhuộm thừa, thấm khô',
        'Nhỏ xanh methylene, để $1 - 2$ phút',
      ],
      answer: [1, 3, 2, 0],
      hints: ['Mẫu cần được dàn mỏng và cố định trước khi nhuộm.'],
      solution:
        'Dàn mỏng và cố định mẫu → nhuộm xanh methylene → rửa thuốc thừa, thấm khô → quan sát.',
    },
    {
      type: 'number',
      prompt:
        'Kính hiển vi có thị kính $10\\times$, dùng vật kính $40\\times$. Độ phóng đại tổng cộng bằng bao nhiêu lần?',
      answer: 400,
      hints: ['Nhân độ phóng đại của thị kính với độ phóng đại của vật kính.'],
      solution: '$10 \\times 40 = 400$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Với thị kính $10\\times$ và vật kính $10\\times$, đường kính thị trường là $1\\,800$ µm. Khi chuyển sang vật kính $40\\times$, đường kính thị trường còn bao nhiêu micromet?',
      answer: 450,
      unit: 'µm',
      hints: ['Độ phóng đại vật kính tăng $4$ lần thì đường kính thị trường giảm $4$ lần.'],
      solution: '$1\\,800 : 4 = 450$ µm. Vì vậy phải tìm vùng cần quan sát trước ở vật kính nhỏ.',
    },
    {
      type: 'choice',
      prompt:
        'Khi đậy lamen lên giọt nước trên lam kính, nên đặt lamen nghiêng khoảng $45^\\circ$ rồi hạ từ từ để',
      options: [
        'mẫu được nhuộm đậm hơn',
        'tế bào không bị mất nước',
        'làm tăng độ phóng đại của kính',
        'hạn chế bọt khí lọt vào tiêu bản',
      ],
      answer: 3,
      hints: ['Hãy nghĩ tới những vòng tròn đen hay gặp khi đậy lamen quá nhanh.'],
      solution:
        'Đặt nghiêng rồi hạ từ từ giúp đẩy không khí ra khỏi khe, hạn chế bọt khí che khuất mẫu.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao cần nhuộm tiêu bản bằng xanh methylene?',
      options: [
        'Tế bào phần lớn gần như trong suốt; thuốc nhuộm làm nổi rõ tế bào và nhân',
        'Thuốc nhuộm giết vi khuẩn gây bệnh trên lam kính',
        'Thuốc nhuộm làm tế bào lớn lên, dễ nhìn hơn',
        'Thuốc nhuộm làm sạch bọt khí trên tiêu bản',
      ],
      answer: 0,
      hints: ['Hãy so sánh tế bào chưa nhuộm và đã nhuộm trong kính hiển vi ảo.'],
      solution:
        'Tế bào chưa nhuộm có độ tương phản thấp. Xanh methylene bắt màu với tế bào, đặc biệt là nhân, nên dễ phân biệt các thành phần hơn.',
    },
    {
      type: 'choice',
      prompt: 'Vật kính nào nên dùng đầu tiên khi bắt đầu quan sát một tiêu bản?',
      options: [
        'Vật kính $100\\times$, để thấy rõ nhất ngay từ đầu',
        'Vật kính $40\\times$, vì đó là mức dùng để vẽ hình',
        'Vật kính $10\\times$, vì thị trường rộng, dễ tìm vùng quan sát',
        'Dùng vật kính nào cũng như nhau',
      ],
      answer: 2,
      hints: ['Vật kính nào cho thị trường rộng nhất?'],
      solution:
        'Vật kính $10\\times$ có thị trường rộng nhất, giúp tìm vùng mẫu mỏng và lấy nét trước, an toàn cho lam kính.',
    },
    {
      type: 'multi',
      prompt:
        'Có thể thấy những thành phần nào ở tế bào biểu bì vảy hành đã nhuộm, dưới kính hiển vi quang học ở $400\\times$?',
      options: ['Thành tế bào', 'Ribosome', 'Nhân', 'Tế bào chất', 'Bộ máy Golgi'],
      answers: [0, 2, 3],
      hints: ['Ribosome và bộ máy Golgi cần kính hiển vi điện tử mới thấy rõ.'],
      solution:
        'Ở $400\\times$ thấy được thành tế bào, tế bào chất và nhân. Ribosome và bộ máy Golgi quá nhỏ, cần kính hiển vi điện tử.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đặc điểm quan sát được với loại tế bào phù hợp.',
      left: [
        'Rất nhỏ, hình que hoặc hình cầu, không thấy nhân',
        'Thuôn dài, xếp sát nhau, có thành dày',
        'Dẹt, hình dạng không đều, không có thành tế bào',
      ],
      right: ['Tế bào niêm mạc miệng', 'Vi khuẩn', 'Tế bào biểu bì vảy hành'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Tế bào nào có thành cellulose? Tế bào nào nhỏ nhất?'],
      solution:
        'Vi khuẩn rất nhỏ, không thấy nhân. Tế bào vảy hành thuôn dài, có thành. Tế bào niêm mạc miệng dẹt, không có thành.',
    },
    {
      type: 'text',
      prompt: 'Thuốc nhuộm được dùng phổ biến trong bài thực hành này có tên là gì?',
      accept: ['xanh methylene', 'xanh metylen', 'methylene blue', 'xanh methylen'],
      hints: ['Thuốc nhuộm này có màu xanh, tên có chữ "methylene".'],
      solution: 'Bài thực hành dùng xanh methylene.',
    },
    {
      type: 'choice',
      prompt:
        'Một bạn thấy vi khuẩn trên tiêu bản rất nhỏ ở $400\\times$. Muốn nhìn rõ hơn, bạn nên làm gì?',
      options: [
        'Bỏ bước nhuộm để ảnh sáng hơn',
        'Chuyển sang vật kính $100\\times$ có dầu soi',
        'Chuyển về vật kính $10\\times$',
        'Đậy thêm một lamen nữa',
      ],
      answer: 1,
      hints: ['Vật kính nào phóng đại mạnh nhất trong dụng cụ của bài này?'],
      solution:
        'Vật kính $100\\times$ cùng thị kính $10\\times$ cho độ phóng đại $1\\,000$ lần, cần nhỏ dầu soi giữa vật kính và tiêu bản.',
    },
  ],
  takeaways: [
    'Tiêu bản tốt cần mẫu mỏng, được nhuộm vừa đủ và không có bọt khí.',
    'Luôn quan sát từ vật kính nhỏ đến vật kính lớn; độ phóng đại tổng cộng bằng độ phóng đại thị kính nhân với độ phóng đại vật kính.',
    'Vi khuẩn rất nhỏ, có hình que, hình cầu hoặc hình xoắn, không thấy rõ cấu trúc bên trong dưới kính hiển vi quang học.',
    'Tế bào nhân thực lớn hơn nhiều, thấy rõ nhân; tế bào thực vật có thành tế bào, tế bào động vật thì không.',
    'Báo cáo cần có mục đích, cách tiến hành, hình vẽ kèm độ phóng đại, giải thích và kết luận.',
  ],
};
