/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: làm tiêu bản giọt nước ao, hồ để quan sát trùng roi, trùng giày và các cơ thể đơn bào khác dưới kính hiển vi; quan sát mô hình hệ cơ quan người và các cơ quan của cây để mô tả cơ thể đa bào.',
  intro:
    'Một giọt nước ao trông trong veo, nhưng dưới kính hiển vi nó là cả một thế giới: những sinh vật chỉ có một tế bào đang bơi, bò, xoay tròn. Trong bài thực hành này, em sẽ tự làm tiêu bản giọt nước ao để tìm các cơ thể đơn bào, rồi quan sát cây xanh và mô hình cơ thể người để mô tả cơ thể đa bào.',
  objectives: [
    'Làm được tiêu bản giọt nước ao, hồ và quan sát được các cơ thể đơn bào bằng kính hiển vi.',
    'Nhận biết và mô tả được trùng roi, trùng giày qua hình dạng và cách di chuyển; nhận ra cơ thể đơn bào quang hợp được nhờ có lục lạp.',
    'Quan sát và mô tả được các cơ quan của cây và một số hệ cơ quan ở người.',
    'Hoàn thành được bảng thu hoạch và báo cáo kết quả quan sát.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: kính hiển vi quang học, kính lúp, lam kính, lamen, ống nhỏ giọt, giấy thấm, một ít bông.',
            'Mẫu vật: nước ao, hồ (lấy ở chỗ có váng xanh hoặc quanh rễ bèo, rong); một cây nhỏ có đủ rễ, thân, lá, hoa (cây cải, cây cà chua, cây hoa mười giờ...).',
            'Mô hình hoặc tranh, ảnh các hệ cơ quan ở người.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Nước ao có thể chứa mầm bệnh: không đưa tay lên miệng, mắt; rửa tay bằng xà phòng sau khi làm. Lam kính, lamen dễ vỡ, cầm nhẹ tay. Cầm kính hiển vi bằng hai tay: một tay nắm thân kính, một tay đỡ chân kính.',
        },
      ],
    },
    {
      heading: 'Quan sát cơ thể đơn bào trong nước ao',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng ống nhỏ giọt hút một giọt nước ao ở chỗ có váng, nhỏ lên giữa lam kính.',
            'Đặt vài sợi bông mảnh vào giọt nước để cản bớt sự di chuyển của sinh vật.',
            'Đặt nghiêng lamen chạm vào mép giọt nước rồi hạ từ từ xuống để không tạo bọt khí; dùng giấy thấm hút bớt nước tràn ra ngoài.',
            'Đặt tiêu bản lên bàn kính, quan sát ở vật kính $10\\times$ để tìm mẫu.',
            'Chuyển sang vật kính $40\\times$, chỉnh ốc nhỏ để ảnh rõ nét; quan sát hình dạng, cách di chuyển, màu sắc của từng sinh vật.',
          ],
        },
        {
          type: 'p',
          text: 'Độ phóng đại của kính hiển vi bằng độ phóng đại của thị kính nhân với độ phóng đại của vật kính. Với thị kính $10\\times$: vật kính $10\\times$ cho $100$ lần, vật kính $40\\times$ cho $400$ lần. Ở vật kính $10\\times$, trường nhìn rộng nên dễ tìm mẫu, nhưng các sinh vật nhỏ như trùng roi chỉ là một chấm; ở vật kính $40\\times$ mới thấy rõ hình dạng của chúng.',
        },
        {
          type: 'table',
          caption: 'Một số cơ thể đơn bào thường gặp trong nước ao, hồ',
          head: ['Sinh vật', 'Kích thước', 'Hình dạng', 'Di chuyển', 'Lục lạp'],
          rows: [
            [
              'Trùng roi xanh',
              'khoảng $50\\ \\mu\\text{m}$',
              'Hình thoi, đuôi nhọn, có điểm mắt đỏ',
              'Bằng roi',
              'Có, quang hợp được',
            ],
            [
              'Trùng giày',
              'khoảng $200$ đến $300\\ \\mu\\text{m}$',
              'Giống chiếc đế giày',
              'Bằng lông bơi phủ khắp cơ thể',
              'Không',
            ],
            [
              'Trùng biến hình',
              'khoảng $300\\ \\mu\\text{m}$, thay đổi',
              'Không cố định',
              'Bằng chân giả',
              'Không',
            ],
            [
              'Tảo lục đơn bào',
              'khoảng $10$ đến $30\\ \\mu\\text{m}$',
              'Hình cầu, bầu dục',
              'Trôi nổi hoặc bơi chậm',
              'Có, quang hợp được',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nhận biết cơ thể đơn bào quang hợp được',
          text: 'Những cơ thể đơn bào có màu xanh lục là do có lục lạp (hoặc chất diệp lục), nên quang hợp được, như trùng roi xanh, tảo lục đơn bào và vi khuẩn lam. Trùng giày, trùng biến hình không có lục lạp, phải lấy thức ăn có sẵn trong nước.',
        },
      ],
    },
    {
      heading: 'Quan sát và mô tả cơ thể đa bào',
      blocks: [
        {
          type: 'p',
          text: 'Cơ thể thực vật: quan sát cây mẫu bằng mắt thường và kính lúp. Xác định hệ rễ (rễ chính, rễ con) và hệ chồi (thân, lá, hoa, quả nếu có). Ghi vào bảng tên, đặc điểm và chức năng của mỗi cơ quan.',
        },
        {
          type: 'table',
          caption: 'Bảng thu hoạch mẫu: các cơ quan của cây cà chua',
          head: ['Cơ quan', 'Đặc điểm quan sát được', 'Chức năng'],
          rows: [
            [
              'Rễ',
              'Rễ chính to, nhiều rễ con nhỏ đâm ra xung quanh',
              'Giữ cây, hút nước và muối khoáng',
            ],
            ['Thân', 'Thân mềm, có lông, có nhiều cành', 'Nâng đỡ cây, vận chuyển các chất'],
            ['Lá', 'Lá kép, màu xanh lục, mép có răng cưa', 'Quang hợp, thoát hơi nước'],
            ['Hoa', 'Màu vàng, mọc thành chùm', 'Sinh sản, tạo thành quả'],
            ['Quả', 'Mọng nước, khi chín màu đỏ, chứa nhiều hạt', 'Bảo vệ và phát tán hạt'],
          ],
        },
        {
          type: 'p',
          text: 'Cơ thể người: quan sát mô hình hoặc tranh, chỉ ra các cơ quan chính của một số hệ cơ quan và nêu chức năng của từng hệ.',
        },
        {
          type: 'table',
          caption: 'Bảng thu hoạch mẫu: một số hệ cơ quan ở người',
          head: ['Hệ cơ quan', 'Các cơ quan', 'Chức năng'],
          rows: [
            [
              'Hệ tiêu hoá',
              'Miệng, thực quản, dạ dày, ruột non, ruột già, gan, tuỵ',
              'Biến đổi thức ăn thành chất dinh dưỡng',
            ],
            ['Hệ tuần hoàn', 'Tim, mạch máu', 'Vận chuyển các chất trong cơ thể'],
            ['Hệ hô hấp', 'Mũi, khí quản, phế quản, phổi', 'Trao đổi khí với môi trường'],
            ['Hệ thần kinh', 'Não, tuỷ sống, dây thần kinh', 'Điều khiển hoạt động của cơ thể'],
          ],
        },
      ],
    },
    {
      heading: 'Báo cáo kết quả',
      blocks: [
        {
          type: 'list',
          items: [
            'Vẽ hình một cơ thể đơn bào em quan sát được, ghi rõ độ phóng đại đã dùng.',
            'Hoàn thành bảng thu hoạch cơ thể đơn bào: tên sinh vật, hình dạng, cách di chuyển, có lục lạp hay không.',
            'Kể tên các cơ thể đơn bào có khả năng quang hợp em quan sát thấy và dấu hiệu nhận biết chúng.',
            'Hoàn thành bảng các cơ quan của cây và bảng các hệ cơ quan ở người.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Kính hiển vi ảo: giọt nước ao',
    instruction:
      'Ở vật kính $10\\times$, bấm vào một đối tượng để đánh dấu. Chuyển sang vật kính $40\\times$: đối tượng nằm giữa trường nhìn và em thấy rõ roi, lông bơi, chân giả hay lục lạp. Chọn tên đúng để ghi vào bảng thu hoạch; cẩn thận, trong giọt nước có cả mảnh vụn không phải sinh vật.',
  },
  examples: [
    {
      problem:
        'Dùng kính hiển vi có thị kính $10\\times$ và vật kính $40\\times$ quan sát trùng roi dài $50\\ \\mu\\text{m}$. Ảnh của trùng roi dài bao nhiêu milimet?',
      steps: [
        'Độ phóng đại của kính: $10 \\cdot 40 = 400$ lần.',
        'Chiều dài ảnh: $50 \\cdot 400 = 20\\,000\\ \\mu\\text{m}$.',
        'Đổi đơn vị: $20\\,000\\ \\mu\\text{m} = 20$ mm.',
      ],
      answer: 'Ảnh của trùng roi dài khoảng $20$ mm.',
    },
    {
      problem:
        'Trong giọt nước ao, em thấy một sinh vật hình đế giày bơi rất nhanh, xung quanh cơ thể có rất nhiều sợi nhỏ rung động, không có màu xanh. Đó là sinh vật gì? Nó có quang hợp được không?',
      steps: [
        'Hình đế giày, di chuyển nhờ nhiều lông bơi phủ khắp cơ thể: đó là đặc điểm của trùng giày.',
        'Cơ thể không có màu xanh, tức là không có lục lạp, nên không quang hợp được.',
      ],
      answer: 'Đó là trùng giày; nó không quang hợp được vì không có lục lạp.',
    },
    {
      problem:
        'Vì sao khi làm tiêu bản giọt nước ao, ta nên đặt vài sợi bông vào giọt nước và đặt lamen từ từ, nghiêng một bên?',
      steps: [
        'Trùng giày, trùng roi bơi rất nhanh; các sợi bông tạo vật cản, giữ chúng lại trong trường nhìn để dễ quan sát.',
        'Đặt nghiêng lamen chạm vào mép giọt nước rồi hạ từ từ giúp đẩy không khí ra ngoài, tránh bọt khí che khuất mẫu.',
      ],
      answer: 'Sợi bông làm sinh vật bơi chậm lại; đặt lamen từ từ để không có bọt khí.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Kính hiển vi có thị kính $10\\times$ và vật kính $40\\times$. Độ phóng đại của kính là bao nhiêu lần?',
      answer: 400,
      hints: ['Độ phóng đại của kính = độ phóng đại thị kính × độ phóng đại vật kính.'],
      solution: '$10 \\cdot 40 = 400$ lần.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm và quan sát tiêu bản giọt nước ao theo đúng thứ tự.',
      items: [
        'Đậy lamen từ từ, thấm bớt nước thừa',
        'Nhỏ một giọt nước ao lên lam kính',
        'Quan sát ở vật kính 40×',
        'Đặt vài sợi bông vào giọt nước',
        'Quan sát ở vật kính 10× để tìm mẫu',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: [
        'Phải có giọt nước trước khi đặt bông và đậy lamen.',
        'Luôn tìm mẫu ở vật kính nhỏ trước.',
      ],
      solution:
        'Nhỏ giọt nước ao → đặt sợi bông → đậy lamen, thấm nước thừa → quan sát ở vật kính 10× → chuyển sang vật kính 40×.',
    },
    {
      type: 'choice',
      prompt: 'Trùng roi xanh di chuyển nhờ',
      options: ['lông bơi', 'roi', 'chân giả', 'vây'],
      answer: 1,
      hints: ['Tên gọi của nó đã cho biết cách di chuyển.'],
      solution:
        'Trùng roi di chuyển nhờ một roi dài ở đầu. Lông bơi là của trùng giày, chân giả là của trùng biến hình.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sinh vật đơn bào với đặc điểm giúp nhận biết nó.',
      left: ['Trùng roi xanh', 'Trùng giày', 'Trùng biến hình', 'Tảo lục đơn bào'],
      right: [
        'Hình dạng luôn thay đổi, có chân giả',
        'Hình thoi, có roi, màu xanh, có điểm mắt đỏ',
        'Hình cầu nhỏ, có lục lạp lớn, không có roi dài như trùng roi',
        'Hình đế giày, lông bơi phủ khắp cơ thể',
        'Có nhiều tế bào xếp thành sợi dài',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Có một đặc điểm thừa: nhiều tế bào thì không còn là cơ thể đơn bào.'],
      solution:
        'Trùng roi: hình thoi, có roi, màu xanh, điểm mắt đỏ. Trùng giày: hình đế giày, có lông bơi. Trùng biến hình: hình dạng thay đổi, có chân giả. Tảo lục đơn bào: hình cầu nhỏ, có lục lạp lớn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các cơ thể đơn bào có khả năng quang hợp.',
      options: [
        'Trùng roi xanh',
        'Trùng giày',
        'Tảo lục đơn bào',
        'Trùng biến hình',
        'Vi khuẩn lam',
      ],
      answers: [0, 2, 4],
      hints: ['Dấu hiệu nhận biết là màu xanh của lục lạp hoặc chất diệp lục.'],
      solution:
        'Trùng roi xanh và tảo lục đơn bào có lục lạp, vi khuẩn lam không có lục lạp nhưng có chất diệp lục, nên cả ba quang hợp được. Trùng giày và trùng biến hình không có.',
    },
    {
      type: 'text',
      prompt:
        'Dấu hiệu nào giúp em nhận ra một cơ thể đơn bào trong nước ao có khả năng quang hợp? (Trả lời bằng tên bào quan)',
      accept: ['lục lạp', 'có lục lạp', 'luc lap', 'diệp lục', 'chất diệp lục'],
      hints: ['Bào quan này làm cho tế bào có màu xanh lục.'],
      solution: 'Cơ thể có lục lạp (màu xanh lục, chứa chất diệp lục) thì quang hợp được.',
    },
    {
      type: 'number',
      prompt:
        'Trùng giày dài khoảng $250\\ \\mu\\text{m}$. Khi quan sát ở độ phóng đại $100$ lần, ảnh của nó dài bao nhiêu milimet?',
      answer: 25,
      tolerance: 0.01,
      unit: 'mm',
      hints: [
        'Kích thước ảnh = kích thước thật × độ phóng đại.',
        '$1\\ \\text{mm} = 1000\\ \\mu\\text{m}$.',
      ],
      solution: '$250 \\cdot 100 = 25\\,000\\ \\mu\\text{m} = 25$ mm.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao khi quan sát, ta luôn tìm mẫu ở vật kính $10\\times$ trước rồi mới chuyển sang $40\\times$?',
      options: [
        'Vì vật kính $40\\times$ không cho ảnh rõ nét',
        'Vì ở vật kính $10\\times$ trường nhìn rộng hơn, dễ tìm thấy mẫu',
        'Vì vật kính $10\\times$ phóng to hơn',
        'Vì sinh vật chỉ di chuyển khi ở vật kính $10\\times$',
      ],
      answer: 1,
      hints: ['Phóng to càng nhiều thì nhìn thấy một vùng càng rộng hay càng hẹp?'],
      solution:
        'Vật kính nhỏ phóng to ít nhưng trường nhìn rộng, dễ tìm mẫu; sau đó đưa mẫu vào giữa và chuyển vật kính $40\\times$ để thấy rõ chi tiết.',
    },
    {
      type: 'multi',
      prompt: 'Khi quan sát cây cà chua, những cơ quan nào thuộc hệ chồi?',
      options: ['Rễ', 'Thân', 'Lá', 'Hoa', 'Quả'],
      answers: [1, 2, 3, 4],
      hints: ['Hệ chồi là phần trên mặt đất.'],
      solution: 'Thân, lá, hoa, quả thuộc hệ chồi; rễ thuộc hệ rễ.',
    },
    {
      type: 'match',
      prompt: 'Quan sát mô hình cơ thể người: nối mỗi cơ quan với hệ cơ quan của nó.',
      left: ['Phổi', 'Tim', 'Dạ dày', 'Não', 'Thận'],
      right: ['Hệ tuần hoàn', 'Hệ hô hấp', 'Hệ thần kinh', 'Hệ tiêu hoá', 'Hệ bài tiết'],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 3],
        [3, 2],
        [4, 4],
      ],
      hints: [
        'Nghĩ tới chức năng của từng cơ quan: trao đổi khí, bơm máu, tiêu hoá, điều khiển, lọc máu.',
      ],
      solution:
        'Phổi: hệ hô hấp. Tim: hệ tuần hoàn. Dạ dày: hệ tiêu hoá. Não: hệ thần kinh. Thận: hệ bài tiết.',
    },
    {
      type: 'choice',
      prompt:
        'Trong giọt nước ao, em thấy một vật màu nâu sẫm, méo mó, không có màng, không có nhân và không tự di chuyển. Kết luận nào đúng?',
      options: [
        'Đó là trùng biến hình đang thay đổi hình dạng',
        'Đó là một cơ thể đa bào',
        'Đó là mảnh vụn, không phải sinh vật',
        'Đó là trùng giày đang ngủ',
      ],
      answer: 2,
      hints: [
        'Mọi cơ thể sống đều được cấu tạo từ tế bào có màng, tế bào chất và nhân hoặc vùng nhân.',
      ],
      solution:
        'Vật không có cấu tạo tế bào và không thực hiện quá trình sống nào (không tự di chuyển) là mảnh vụn, không phải sinh vật. Trùng biến hình có màng, tế bào chất, nhân và bò bằng chân giả.',
    },
  ],
  takeaways: [
    'Làm tiêu bản giọt nước ao: nhỏ nước lên lam kính, thêm sợi bông, đậy lamen từ từ, thấm nước thừa; tìm mẫu ở vật kính $10\\times$ rồi quan sát ở $40\\times$.',
    'Trùng roi xanh hình thoi, bơi bằng roi, có lục lạp; trùng giày hình đế giày, bơi bằng lông bơi, không có lục lạp.',
    'Cơ thể đơn bào có lục lạp (trùng roi xanh, tảo lục đơn bào) hoặc có chất diệp lục (vi khuẩn lam) thì quang hợp được.',
    'Cơ thể đa bào gồm các cơ quan và hệ cơ quan: ở cây có hệ rễ và hệ chồi; ở người có hệ tiêu hoá, tuần hoàn, hô hấp, thần kinh, bài tiết...',
  ],
};
