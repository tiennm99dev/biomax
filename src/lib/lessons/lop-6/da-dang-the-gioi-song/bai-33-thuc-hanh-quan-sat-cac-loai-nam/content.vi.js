/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: quan sát nấm mũ (nấm rơm, nấm sò, nấm hương) bằng mắt thường và kính lúp để nhận biết mũ nấm, phiến nấm, cuống nấm, sợi nấm; quan sát nấm mốc trên bánh mì dưới kính lúp, kính hiển vi để thấy sợi nấm và túi bào tử.',
  intro:
    'Nấm rơm ngoài chợ và lớp mốc trên mẩu bánh mì để quên trông chẳng giống nhau chút nào, vậy mà chúng đều là nấm. Trong bài thực hành này, em sẽ tách từng phần của một cây nấm mũ, soi lớp mốc dưới kính, rồi so sánh để thấy điểm chung của chúng: cơ thể là những sợi nấm và sinh sản bằng bào tử.',
  objectives: [
    'Quan sát và nhận biết được các phần của nấm mũ: mũ nấm, phiến nấm, cuống nấm, sợi nấm.',
    'Quan sát được nấm mốc bằng kính lúp và kính hiển vi; nhận biết sợi nấm, túi bào tử.',
    'Vẽ được hình nấm quan sát được và chú thích; biết điều kiện để nấm mốc phát triển.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: kính lúp, kính hiển vi, lam kính, lamen, kim mũi mác, panh (kẹp), dao nhỏ, đĩa nhựa, ống nhỏ giọt, giấy thấm, găng tay, khẩu trang.',
            'Mẫu nấm mũ: nấm rơm, nấm sò, nấm hương, nấm kim châm (mua ở chợ, siêu thị).',
            'Mẫu nấm mốc: một lát bánh mì nhỏ vài giọt nước cho ẩm, để trong túi kín ở nhiệt độ phòng 3 đến 5 ngày (hoặc cam, quýt, cơm nguội bị mốc).',
          ],
        },
        {
          type: 'p',
          text: 'Thử chuẩn bị mẫu mốc trên mô hình dưới đây: chọn nơi để, độ ẩm của bánh mì và số ngày, xem khi nào mốc xuất hiện.',
        },
        { type: 'widget', name: 'nuoi-moc' },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Đeo khẩu trang và găng tay khi làm với mẫu mốc: bào tử nấm mốc bay vào đường hô hấp có thể gây dị ứng. Không ngửi trực tiếp, không ăn các mẫu nấm, mẫu mốc. Làm xong, cho mẫu mốc vào túi kín bỏ vào thùng rác và rửa tay bằng xà phòng.',
        },
      ],
    },
    {
      heading: 'Quan sát nấm mũ',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Đặt mẫu nấm lên đĩa, quan sát bằng mắt thường hình dạng, màu sắc của mũ nấm, cuống nấm.',
            'Lật ngửa mũ nấm, dùng kính lúp quan sát phiến nấm ở mặt dưới mũ: những lá mỏng xếp tỏa tròn từ cuống ra mép mũ.',
            'Quan sát phần gốc nấm: tìm các sợi nấm trắng còn dính ở chân.',
            'Có thể đặt mũ nấm úp lên một tờ giấy, để vài giờ rồi nhấc lên: bào tử rơi xuống thành hình các phiến nấm.',
            'Vẽ hình nấm quan sát được và chú thích các phần.',
          ],
        },
      ],
    },
    {
      heading: 'Quan sát nấm mốc',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng kính lúp quan sát lớp mốc trên bánh mì: lớp sợi trắng như bông và các chấm đen li ti trên đầu sợi.',
            'Nhỏ một giọt nước lên giữa lam kính. Dùng kim mũi mác lấy một ít mốc đặt vào giọt nước, đậy lamen, thấm nước thừa.',
            'Quan sát ở vật kính $10\\times$, sau đó vật kính $40\\times$.',
            'Vẽ hình nấm mốc quan sát được và chú thích sợi nấm, cuống túi bào tử, túi bào tử.',
          ],
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, chọn từng mẫu và bấm vào các số để học tên các phần, rồi chuyển sang "Gọi tên" và "Tìm vị trí" để tự kiểm tra.',
        },
      ],
    },
    {
      heading: 'Báo cáo kết quả',
      blocks: [
        {
          type: 'table',
          caption: 'Mẫu bảng thu hoạch',
          head: ['Mẫu nấm', 'Đơn bào hay đa bào', 'Các phần quan sát được', 'Nơi sống'],
          rows: [
            ['Nấm rơm', 'Đa bào', 'Mũ nấm, phiến nấm, cuống nấm, sợi nấm', 'Rơm rạ ẩm'],
            ['Nấm sò', 'Đa bào', 'Mũ nấm hình vỏ sò, phiến nấm, cuống ngắn', 'Mùn cưa, gỗ mục'],
            [
              'Mốc đen bánh mì',
              'Đa bào',
              'Sợi nấm, cuống túi bào tử, túi bào tử màu đen',
              'Bánh mì ẩm',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Hình vẽ nấm mũ và nấm mốc có chú thích.',
            'Nhận xét: điểm giống nhau và khác nhau giữa nấm mũ và nấm mốc.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Các phần của nấm mũ và nấm mốc',
    instruction:
      'Chọn mẫu nấm mũ hoặc mốc đen bánh mì. Ở chế độ "Tìm hiểu", bấm vào từng số để đọc tên và chức năng; chế độ "Gọi tên" và "Tìm vị trí" giúp em tự kiểm tra.',
  },
  examples: [
    {
      problem: 'So sánh nấm rơm và mốc đen bánh mì: chúng giống nhau và khác nhau ở điểm nào?',
      steps: [
        'Giống nhau: đều là nấm đa bào, cơ thể gồm các sợi nấm; không có lục lạp, sống hoại sinh trên chất hữu cơ (rơm rạ, bánh mì); sinh sản bằng bào tử.',
        'Khác nhau: nấm rơm có quả thể lớn gồm mũ, phiến, cuống; bào tử tạo ra ở phiến nấm (nấm đảm).',
        'Mốc đen không có mũ nấm; bào tử nằm trong túi bào tử ở đầu cuống, nhìn thấy như những chấm đen (nấm tiếp hợp).',
      ],
      answer:
        'Giống: cơ thể là sợi nấm, sống hoại sinh, sinh sản bằng bào tử. Khác: nấm rơm có mũ, phiến, cuống; mốc đen có túi bào tử ở đầu cuống.',
    },
    {
      problem:
        'Bạn An để một lát bánh mì khô trong tủ lạnh 5 ngày mà không thấy mốc, nên không có mẫu để quan sát. Em hãy giải thích và chỉ cho An cách chuẩn bị mẫu.',
      steps: [
        'Bào tử nấm mốc luôn có trong không khí, nhưng chỉ nảy mầm và mọc thành sợi khi đủ ẩm và ấm.',
        'Bánh mì khô và nhiệt độ thấp trong tủ lạnh làm nấm mốc gần như không phát triển.',
        'An cần nhỏ vài giọt nước cho bánh mì ẩm, cho vào túi kín và để ở nhiệt độ phòng từ 3 đến 5 ngày.',
      ],
      answer:
        'Vì thiếu ẩm và lạnh; muốn có mẫu, làm ẩm bánh mì và để ở nhiệt độ phòng 3 đến 5 ngày.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm tiêu bản nấm mốc theo đúng thứ tự.',
      items: [
        'Đậy lamen, dùng giấy thấm hút nước thừa',
        'Nhỏ một giọt nước lên giữa lam kính',
        'Quan sát ở vật kính 10×, rồi 40×',
        'Dùng kim mũi mác lấy một ít mốc cho vào giọt nước',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Cần có giọt nước trên lam kính trước khi cho mẫu vào.'],
      solution:
        'Nhỏ giọt nước lên lam kính, cho một ít mốc vào giọt nước, đậy lamen và thấm nước thừa, rồi quan sát ở vật kính 10× và 40×.',
    },
    {
      type: 'choice',
      prompt: 'Lật ngửa mũ nấm rơm, em thấy những lá mỏng xếp tỏa tròn. Đó là',
      options: ['sợi nấm', 'phiến nấm', 'túi bào tử', 'vòng cuống nấm'],
      answer: 1,
      hints: ['Đây là nơi tạo ra bào tử của nấm mũ.'],
      solution: 'Những lá mỏng xếp tỏa tròn ở mặt dưới mũ là phiến nấm, nơi tạo ra bào tử.',
    },
    {
      type: 'choice',
      prompt: 'Những chấm đen li ti trên lớp mốc bánh mì là',
      options: ['bụi bẩn', 'túi bào tử chứa nhiều bào tử', 'rễ giả', 'sợi nấm đã chết'],
      answer: 1,
      hints: ['Soi dưới kính, mỗi chấm nằm ở đầu một sợi mọc thẳng đứng.'],
      solution:
        'Mỗi chấm đen là một túi bào tử ở đầu cuống, bên trong chứa rất nhiều bào tử; khi chín túi có màu đen.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các điểm giống nhau giữa nấm rơm và mốc đen bánh mì.',
      options: [
        'Cơ thể gồm các sợi nấm',
        'Có mũ nấm và phiến nấm',
        'Sinh sản bằng bào tử',
        'Không có lục lạp, sống hoại sinh',
        'Bào tử nằm trong túi bào tử ở đầu cuống',
      ],
      answers: [0, 2, 3],
      hints: ['Mốc đen có mũ nấm không? Nấm rơm có túi bào tử không?'],
      solution:
        'Cả hai có cơ thể là sợi nấm, sinh sản bằng bào tử, không có lục lạp và sống hoại sinh. Mũ và phiến chỉ có ở nấm rơm; túi bào tử ở đầu cuống chỉ có ở mốc đen.',
    },
    {
      type: 'choice',
      prompt: 'Muốn nhanh có mẫu nấm mốc để quan sát, nên để lát bánh mì',
      options: [
        'khô, trong tủ lạnh',
        'ẩm, trong túi kín ở nhiệt độ phòng',
        'khô, phơi ngoài nắng',
        'ẩm, trong ngăn đá tủ lạnh',
      ],
      answer: 1,
      hints: ['Nấm mốc cần những điều kiện nào để phát triển?'],
      solution:
        'Nấm mốc phát triển tốt khi ẩm và ấm; bánh mì ẩm trong túi kín ở nhiệt độ phòng sẽ mốc sau khoảng 3 đến 5 ngày.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải đeo khẩu trang khi quan sát mẫu nấm mốc?',
      options: [
        'Để mẫu không bị bẩn',
        'Để tránh hít phải bào tử nấm mốc gây dị ứng',
        'Để kính hiển vi không bị mờ',
        'Vì nấm mốc có mùi thơm',
      ],
      answer: 1,
      hints: ['Bào tử nấm mốc rất nhẹ, dễ bay trong không khí.'],
      solution:
        'Bào tử nấm mốc nhẹ, bay vào không khí; hít phải có thể gây dị ứng, bệnh đường hô hấp, nên phải đeo khẩu trang.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận với chức năng của nó.',
      left: ['Phiến nấm', 'Cuống nấm', 'Sợi nấm', 'Túi bào tử'],
      right: [
        'Chứa nhiều bào tử ở đầu cuống của nấm mốc',
        'Hút chất dinh dưỡng từ giá thể',
        'Nơi tạo bào tử ở nấm mũ',
        'Nâng mũ nấm lên cao',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 1],
        [3, 0],
      ],
      hints: ['Phiến nấm ở mặt dưới mũ; túi bào tử thấy ở mốc đen.'],
      solution:
        'Phiến nấm tạo bào tử ở nấm mũ; cuống nấm nâng mũ lên cao; sợi nấm hút chất dinh dưỡng; túi bào tử chứa bào tử ở đầu cuống của nấm mốc.',
    },
    {
      type: 'number',
      prompt:
        'Quan sát sợi nấm mốc ở thị kính $10\\times$ và vật kính $40\\times$. Ảnh được phóng đại bao nhiêu lần?',
      answer: 400,
      unit: 'lần',
      hints: ['Nhân độ phóng đại của thị kính với vật kính.'],
      solution: '$10 \\cdot 40 = 400$ lần.',
    },
    {
      type: 'text',
      prompt:
        'Úp mũ nấm lên tờ giấy vài giờ, trên giấy hiện ra hình các phiến nấm do một thứ rất nhỏ rơi xuống. Đó là gì?',
      accept: ['bào tử', 'bào tử nấm', 'các bào tử'],
      hints: ['Nấm sinh sản bằng thứ này.'],
      solution: 'Đó là bào tử nấm rơi ra từ phiến nấm; nấm sinh sản bằng bào tử.',
    },
    {
      type: 'choice',
      prompt: 'Từ kết quả quan sát, vì sao nên bảo quản bánh mì nơi khô ráo hoặc trong tủ lạnh?',
      options: [
        'Vì bào tử nấm mốc không có trong không khí',
        'Vì khô và lạnh làm nấm mốc khó phát triển',
        'Vì tủ lạnh tiêu diệt hết bào tử',
        'Vì bánh mì sẽ mềm hơn',
      ],
      answer: 1,
      hints: ['Bào tử luôn có trong không khí; điều gì giúp chúng nảy mầm?'],
      solution:
        'Bào tử nấm mốc có ở khắp nơi; ẩm và ấm giúp chúng nảy mầm. Giữ bánh mì khô hoặc lạnh làm nấm mốc khó phát triển (lạnh không tiêu diệt hết bào tử).',
    },
  ],
  takeaways: [
    'Nấm mũ gồm mũ nấm, phiến nấm ở mặt dưới mũ (nơi tạo bào tử), cuống nấm và sợi nấm ở gốc.',
    'Nấm mốc đen gồm các sợi nấm trắng như bông, rễ giả, cuống túi bào tử và túi bào tử màu đen chứa bào tử.',
    'Cơ thể nấm đa bào là hệ sợi nấm; nấm sinh sản bằng bào tử.',
    'Nấm mốc phát triển nhanh nơi ẩm và ấm; khi làm với mốc phải đeo khẩu trang, găng tay và rửa tay sau khi làm.',
  ],
};
