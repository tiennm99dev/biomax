/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên sinh vật là nhóm sinh vật nhân thực, phần lớn đơn bào, có kích thước hiển vi, rất đa dạng về hình dạng và cách dinh dưỡng; chúng có vai trò quan trọng trong tự nhiên và đời sống, một số gây bệnh như sốt rét, kiết lị.',
  intro:
    'Trên mặt ao, hồ thường có một lớp váng màu xanh, vàng hoặc đỏ. Lấy một giọt nước váng ấy soi dưới kính hiển vi, em sẽ thấy cả một thế giới nhỏ bé đang bơi lội: đó là các nguyên sinh vật. Có loài nuôi sống cả hệ sinh thái dưới nước, nhưng cũng có loài gây ra những căn bệnh nguy hiểm cho con người.',
  objectives: [
    'Nhận biết được một số đại diện nguyên sinh vật qua hình dạng, cách di chuyển và cách dinh dưỡng.',
    'Nêu được vai trò của nguyên sinh vật trong tự nhiên và trong đời sống con người.',
    'Nêu được tác nhân, con đường lây, biểu hiện của bệnh sốt rét, bệnh kiết lị và biện pháp phòng tránh.',
  ],
  sections: [
    {
      heading: 'Đa dạng nguyên sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên sinh vật',
          text: 'Nguyên sinh vật là nhóm sinh vật có cấu tạo tế bào nhân thực, kích thước hiển vi. Đa số nguyên sinh vật là cơ thể đơn bào; một số có cấu tạo đa bào, kích thước lớn, có thể nhìn thấy bằng mắt thường (như tảo bẹ, rau câu).',
        },
        {
          type: 'p',
          text: 'Nguyên sinh vật rất đa dạng về hình dạng: hình cầu, hình thoi, hình đế giày, hoặc không có hình dạng cố định. Chúng cũng đa dạng về cách dinh dưỡng: các loài có lục lạp như tảo, trùng roi xanh quang hợp được (tự dưỡng); các loài không có lục lạp như trùng giày, trùng biến hình phải lấy chất hữu cơ có sẵn (dị dưỡng).',
        },
        {
          type: 'table',
          caption: 'Một số đại diện nguyên sinh vật',
          head: ['Đại diện', 'Cấu tạo', 'Đặc điểm nổi bật', 'Nơi sống'],
          rows: [
            ['Trùng roi xanh', 'Đơn bào', 'Hình thoi, có roi bơi, có lục lạp', 'Ao, hồ, vũng nước'],
            ['Trùng giày', 'Đơn bào', 'Hình đế giày, phủ đầy lông bơi', 'Nước ao, hồ'],
            [
              'Trùng biến hình',
              'Đơn bào',
              'Hình dạng luôn thay đổi, di chuyển bằng chân giả',
              'Bùn đáy ao, hồ',
            ],
            [
              'Tảo silic',
              'Đơn bào',
              'Có vỏ cứng bằng silic, quang hợp được',
              'Nước ngọt, nước mặn',
            ],
            ['Tảo lục đơn bào', 'Đơn bào', 'Hình cầu, có lục lạp', 'Nước ngọt'],
            ['Tảo bẹ, rau câu', 'Đa bào', 'Kích thước lớn, nhìn thấy bằng mắt thường', 'Biển'],
            ['Trùng sốt rét', 'Đơn bào', 'Kí sinh trong máu người', 'Máu người, cơ thể muỗi'],
            ['Trùng kiết lị', 'Đơn bào', 'Kí sinh ở ruột người', 'Ruột người'],
          ],
        },
        {
          type: 'p',
          text: 'Ba đại diện dễ gặp nhất trong nước ao là trùng roi xanh, trùng giày và trùng biến hình. Ở phần khám phá, em hãy xem chúng di chuyển bằng ba cách khác nhau: roi bơi, lông bơi và chân giả.',
        },
      ],
    },
    {
      heading: 'Vai trò và tác hại của nguyên sinh vật',
      blocks: [
        {
          type: 'p',
          text: 'Trong tự nhiên, tảo và các nguyên sinh vật có lục lạp quang hợp, cung cấp khí oxygen cho các sinh vật sống dưới nước; nguyên sinh vật là nguồn thức ăn của nhiều động vật nhỏ như tôm, cá con, ấu trùng. Một số nguyên sinh vật sống cộng sinh, ví dụ trùng roi sống trong ruột mối giúp mối tiêu hóa được gỗ.',
        },
        {
          type: 'list',
          items: [
            'Làm thực phẩm: rau câu dùng làm thạch; tảo bẹ, một số loài tảo biển dùng làm món ăn.',
            'Làm nguyên liệu: một số loài tảo được dùng trong sản xuất thực phẩm chức năng, mĩ phẩm, thuốc; vỏ tảo silic dùng làm bột mài, chất lọc.',
            'Xử lí môi trường: một số nguyên sinh vật ăn vi khuẩn, góp phần làm sạch nước thải.',
          ],
        },
        {
          type: 'p',
          text: 'Tác hại: một số nguyên sinh vật kí sinh gây bệnh cho người và động vật như trùng sốt rét, trùng kiết lị. Khi tảo phát triển quá nhiều (hiện tượng "tảo nở hoa", "thủy triều đỏ"), nước thiếu oxygen và nhiễm độc, làm chết cá và các sinh vật khác.',
        },
      ],
    },
    {
      heading: 'Bệnh do nguyên sinh vật gây nên',
      blocks: [
        {
          type: 'table',
          caption: 'Bệnh sốt rét và bệnh kiết lị',
          head: ['Nội dung', 'Bệnh sốt rét', 'Bệnh kiết lị'],
          rows: [
            ['Tác nhân', 'Trùng sốt rét', 'Trùng kiết lị'],
            [
              'Con đường lây',
              'Qua đường máu: muỗi Anopheles hút máu người bệnh rồi đốt người lành',
              'Qua đường tiêu hóa: ăn, uống phải bào xác trùng kiết lị',
            ],
            [
              'Biểu hiện',
              'Rét run, sốt cao, đổ mồ hôi, thành từng cơn',
              'Đau bụng, đi ngoài nhiều lần, phân có lẫn máu và chất nhầy, cơ thể mệt mỏi',
            ],
            [
              'Phòng bệnh',
              'Ngủ trong màn; diệt muỗi, diệt bọ gậy; phát quang bụi rậm, khơi thông cống rãnh',
              'Ăn chín, uống sôi; rửa tay bằng xà phòng; đậy kín thức ăn, diệt ruồi nhặng; vệ sinh nơi ở',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao sốt rét làm người bệnh thiếu máu?',
          text: 'Trùng sốt rét kí sinh và sinh sản trong hồng cầu. Mỗi lần chúng phá vỡ hồng cầu để chui ra là một cơn sốt. Hồng cầu bị phá hủy nhiều nên người bệnh thiếu máu, da xanh xao.',
        },
        {
          type: 'p',
          text: 'Mỗi bệnh lây theo một con đường riêng. Muốn phòng bệnh, phải cắt đứt con đường lây đó. Em hãy chọn các biện pháp dưới đây và xem chúng cắt con đường lây ở đâu.',
        },
        { type: 'widget', name: 'phong-benh' },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khi có dấu hiệu bệnh',
          text: 'Khi bị sốt từng cơn kèm rét run, hoặc đau bụng, đi ngoài ra máu, cần đến cơ sở y tế để được khám và điều trị kịp thời; không tự ý mua thuốc uống.',
        },
      ],
    },
  ],
  explore: {
    title: 'Ba cách di chuyển của nguyên sinh vật',
    instruction:
      'Chọn trùng roi xanh, trùng giày hoặc trùng biến hình để xem nó di chuyển. Bấm "Tạm dừng" rồi kéo thanh thời gian để xem từng khoảnh khắc. Sau đó chơi "Đoán xem tôi là ai?".',
  },
  examples: [
    {
      problem:
        'Bạn Minh soi một giọt nước ao và thấy hai sinh vật: sinh vật A màu xanh lục, bơi bằng một roi dài ở đầu; sinh vật B không màu, hình đế giày, xung quanh có rất nhiều lông nhỏ rung động. Hãy gọi tên A, B và cho biết sinh vật nào quang hợp được.',
      steps: [
        'Sinh vật A có màu xanh lục (có lục lạp) và di chuyển bằng roi: đó là trùng roi xanh.',
        'Sinh vật B có hình đế giày, di chuyển bằng lông bơi: đó là trùng giày.',
        'Chỉ sinh vật có lục lạp mới quang hợp được, nên A quang hợp được, B thì không (B ăn vi khuẩn, vụn hữu cơ).',
      ],
      answer: 'A là trùng roi xanh (quang hợp được), B là trùng giày (không quang hợp được).',
    },
    {
      problem:
        'Gia đình bạn Hoa sống gần bìa rừng, nhiều muỗi. Em hãy giải thích vì sao các biện pháp: ngủ trong màn, phát quang bụi rậm, khơi thông cống rãnh giúp phòng bệnh sốt rét.',
      steps: [
        'Bệnh sốt rét do trùng sốt rét gây ra, lây qua muỗi Anopheles: muỗi hút máu người bệnh rồi đốt người lành.',
        'Ngủ trong màn: muỗi không đốt được người, nên không lấy được trùng từ người bệnh cũng không truyền sang người lành.',
        'Phát quang bụi rậm, khơi thông cống rãnh: mất nơi muỗi trú ẩn và nơi muỗi đẻ trứng (bọ gậy sống trong nước đọng), số muỗi giảm.',
      ],
      answer:
        'Các biện pháp đó đều làm muỗi không đốt được người hoặc làm giảm số muỗi, tức là cắt đứt con đường lây bệnh sốt rét.',
    },
    {
      problem:
        'Vì sao "ăn chín, uống sôi" phòng được bệnh kiết lị nhưng không phòng được bệnh sốt rét?',
      steps: [
        'Kiết lị lây qua đường tiêu hóa: bào xác trùng kiết lị theo thức ăn, nước uống vào ruột.',
        'Đun chín, đun sôi tiêu diệt bào xác, nên cắt được con đường lây của kiết lị.',
        'Sốt rét lây qua đường máu do muỗi đốt, không đi qua thức ăn, nước uống, nên ăn chín uống sôi không ngăn được.',
      ],
      answer:
        'Vì hai bệnh lây theo hai con đường khác nhau: kiết lị qua ăn uống, sốt rét qua muỗi đốt.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên sinh vật là nhóm sinh vật',
      options: [
        'nhân sơ, đơn bào, kích thước hiển vi',
        'nhân thực, phần lớn đơn bào, kích thước hiển vi',
        'chưa có cấu tạo tế bào, chỉ sống kí sinh',
        'nhân thực, đa bào, luôn nhìn thấy được bằng mắt thường',
      ],
      answer: 1,
      hints: ['Vi khuẩn mới là sinh vật nhân sơ; virus mới chưa có cấu tạo tế bào.'],
      solution:
        'Nguyên sinh vật có tế bào nhân thực, đa số là đơn bào và có kích thước hiển vi; một số ít là đa bào như tảo bẹ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nguyên sinh vật với cơ quan di chuyển của nó.',
      left: ['Trùng roi xanh', 'Trùng giày', 'Trùng biến hình'],
      right: ['Chân giả', 'Roi bơi', 'Lông bơi'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Tên "trùng roi" đã gợi ý cơ quan di chuyển của nó.'],
      solution:
        'Trùng roi xanh di chuyển bằng roi bơi, trùng giày bằng lông bơi, trùng biến hình bằng chân giả.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguyên sinh vật có khả năng quang hợp.',
      options: ['Trùng roi xanh', 'Trùng giày', 'Tảo silic', 'Trùng biến hình', 'Tảo lục'],
      answers: [0, 2, 4],
      hints: ['Sinh vật quang hợp được phải có lục lạp (chứa diệp lục).'],
      solution:
        'Trùng roi xanh, tảo silic và tảo lục có lục lạp nên quang hợp được. Trùng giày và trùng biến hình không có lục lạp, sống dị dưỡng.',
    },
    {
      type: 'choice',
      prompt: 'Bệnh sốt rét lây truyền sang người lành chủ yếu qua',
      options: [
        'thức ăn, nước uống có bào xác trùng',
        'muỗi Anopheles đốt',
        'tiếp xúc trực tiếp với da người bệnh',
        'giọt bắn khi người bệnh ho, hắt hơi',
      ],
      answer: 1,
      hints: ['Trùng sốt rét sống trong máu người bệnh. Con vật nào hút máu?'],
      solution:
        'Muỗi Anopheles hút máu người bệnh có trùng sốt rét, sau đó đốt người lành và truyền trùng vào máu.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp phòng bệnh kiết lị.',
      options: [
        'Ăn chín, uống sôi',
        'Rửa tay bằng xà phòng trước khi ăn và sau khi đi vệ sinh',
        'Ngủ trong màn',
        'Đậy kín thức ăn, diệt ruồi nhặng',
        'Hạn chế ăn rau sống chưa rửa sạch',
      ],
      answers: [0, 1, 3, 4],
      hints: ['Kiết lị lây qua đường tiêu hóa.', 'Biện pháp nào chỉ chống muỗi?'],
      solution:
        'Kiết lị lây qua ăn uống, nên phòng bằng ăn chín uống sôi, rửa tay, đậy kín thức ăn, diệt ruồi nhặng, không ăn rau sống bẩn. Ngủ màn chống muỗi, dùng để phòng sốt rét.',
    },
    {
      type: 'choice',
      prompt: 'Biểu hiện nào là của bệnh kiết lị?',
      options: [
        'Rét run, sốt cao, đổ mồ hôi theo từng cơn',
        'Đau bụng, đi ngoài phân có lẫn máu và chất nhầy',
        'Ngứa da, xuất hiện các vết loang trắng',
        'Ho kéo dài, sốt nhẹ về chiều',
      ],
      answer: 1,
      hints: ['Trùng kiết lị kí sinh ở ruột, gây viêm loét thành ruột.'],
      solution:
        'Trùng kiết lị làm viêm loét thành ruột, nên người bệnh đau bụng, đi ngoài nhiều lần, phân lẫn máu và chất nhầy. Rét run, sốt từng cơn là biểu hiện của sốt rét.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò có ích của nguyên sinh vật.',
      options: [
        'Tảo cung cấp oxygen cho sinh vật dưới nước',
        'Là thức ăn của tôm, cá con và nhiều động vật nhỏ',
        'Gây hiện tượng thủy triều đỏ làm chết cá',
        'Rau câu dùng để làm thạch',
        'Gây bệnh sốt rét',
      ],
      answers: [0, 1, 3],
      hints: ['Hai ý là tác hại.'],
      solution:
        'Có ích: tảo quang hợp cung cấp oxygen, nguyên sinh vật là thức ăn của động vật nhỏ, rau câu làm thạch. Thủy triều đỏ và bệnh sốt rét là tác hại.',
    },
    {
      type: 'text',
      prompt: 'Trùng biến hình di chuyển và bắt mồi nhờ bộ phận nào? (hai từ)',
      accept: ['chân giả', 'bằng chân giả', 'nhờ chân giả'],
      hints: ['Tế bào chất dồn về một phía tạo thành một phần lồi ra.'],
      solution:
        'Trùng biến hình dùng chân giả để di chuyển và để bao lấy mồi; chân giả do tế bào chất dồn về một phía tạo thành.',
    },
    {
      type: 'choice',
      prompt:
        'Ở vùng núi, một người bị sốt từng cơn kèm rét run và đổ mồ hôi. Việc nào nên làm trước tiên?',
      options: [
        'Tự mua thuốc kháng sinh uống',
        'Đến cơ sở y tế để xét nghiệm máu và điều trị',
        'Uống nhiều nước đun sôi để nguội',
        'Ăn chín, uống sôi để khỏi bệnh',
      ],
      answer: 1,
      hints: ['Các biểu hiện giống bệnh nào? Bệnh đó có tự khỏi khi ăn chín uống sôi không?'],
      solution:
        'Đó là biểu hiện nghi sốt rét. Cần đến cơ sở y tế để xét nghiệm máu tìm trùng sốt rét và điều trị dứt điểm; điều trị người bệnh cũng giúp muỗi không còn lấy được trùng từ người đó để lây cho người khác.',
    },
  ],
  takeaways: [
    'Nguyên sinh vật có tế bào nhân thực, đa số đơn bào, kích thước hiển vi; một số đa bào như tảo bẹ, rau câu.',
    'Chúng đa dạng về hình dạng và cách di chuyển (roi bơi, lông bơi, chân giả); loài có lục lạp quang hợp được.',
    'Vai trò: cung cấp oxygen và thức ăn cho sinh vật dưới nước, làm thực phẩm, nguyên liệu; tác hại: gây bệnh, gây tảo nở hoa.',
    'Sốt rét do trùng sốt rét, lây qua muỗi Anopheles: phòng bằng ngủ màn, diệt muỗi. Kiết lị do trùng kiết lị, lây qua ăn uống: phòng bằng ăn chín uống sôi, rửa tay, đậy kín thức ăn.',
  ],
};
