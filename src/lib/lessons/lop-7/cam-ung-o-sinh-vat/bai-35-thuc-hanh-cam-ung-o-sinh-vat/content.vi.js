/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: làm thí nghiệm chứng minh tính hướng nước của rễ và tính hướng sáng của thân cây đỗ, quan sát tính hướng tiếp xúc của cây leo và tập tính của động vật, ghi kết quả vào bảng và rút ra kết luận.',
  intro:
    'Ở bài trước, em đã biết rễ cây mọc về phía nguồn nước, ngọn cây mọc về phía ánh sáng và tua cuốn quấn quanh giàn. Trong bài thực hành này, em sẽ tự gieo hạt đỗ, bố trí thí nghiệm có chậu đối chứng, theo dõi cây trong 3 đến 5 ngày để tận mắt thấy các hiện tượng cảm ứng đó, đồng thời quan sát và ghi chép tập tính của động vật.',
  objectives: [
    'Tiến hành được thí nghiệm chứng minh tính hướng nước và tính hướng sáng ở thực vật, chỉ ra được mẫu đối chứng.',
    'Quan sát và mô tả được tính hướng tiếp xúc ở cây leo.',
    'Quan sát, ghi chép được một số tập tính của động vật; ghi kết quả vào bảng và rút ra kết luận.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: chậu trồng cây hoặc khay nhựa, đất hoặc cát ẩm, que tre (hoặc que gỗ nhỏ), chai nhựa đã qua sử dụng có đục lỗ nhỏ, nước, hộp carton không có đáy.',
            'Mẫu vật: hạt hoặc cây non của đỗ (đậu), bầu, bí.',
            'Tranh ảnh, video về cảm ứng ở thực vật và tập tính của động vật.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mẫu đối chứng',
          text: 'Mỗi thí nghiệm có hai mẫu giống hệt nhau, chỉ khác một điều kiện cần kiểm tra (vị trí nguồn nước, hướng chiếu của ánh sáng). Mẫu không bị thay đổi điều kiện là mẫu đối chứng; so sánh hai mẫu mới biết phản ứng của cây là do điều kiện đó gây ra.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 1: Chứng minh tính hướng nước',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Gieo hạt đỗ vào hai chậu đất giống nhau (chậu thí nghiệm và chậu đối chứng), tưới nước đủ ẩm.',
            'Chờ đến khi cây non mọc được $3$ đến $5$ lá.',
            'Ở chậu thí nghiệm, đặt sát một bên chậu một chai nhựa đựng nước có đục lỗ nhỏ để nước thấm từ từ vào đất ở phía đó. Chậu đối chứng vẫn tưới như bình thường.',
            'Sau $3$ đến $5$ ngày, nhẹ nhàng nhấc cây ra khỏi chậu, rửa sạch đất và quan sát hướng mọc của rễ.',
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả thí nghiệm chứng minh tính hướng nước',
          head: ['Chậu', 'Cách bố trí', 'Hướng mọc của rễ'],
          rows: [
            ['Thí nghiệm', 'Chai nước đục lỗ đặt ở một bên chậu', 'Rễ mọc lệch về phía chai nước'],
            ['Đối chứng', 'Tưới đều, không đặt chai nước', 'Rễ mọc thẳng'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Rễ cây có tính hướng nước: rễ mọc hướng về phía nguồn nước.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 2: Chứng minh tính hướng sáng',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị hai chậu đất giống nhau và hai hộp carton không có đáy: hộp A khoét một lỗ trên nắp, hộp B khoét một lỗ ở thành bên.',
            'Gieo hạt đỗ vào hai chậu, tưới nước và chờ hạt nảy mầm.',
            'Úp mỗi hộp lên một chậu rồi đặt ở nơi có ánh sáng tự nhiên.',
            'Sau khoảng $3$ đến $5$ ngày, mở hộp và quan sát hướng mọc của thân cây.',
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả thí nghiệm chứng minh tính hướng sáng',
          head: ['Chậu', 'Ánh sáng chiếu vào cây', 'Hướng mọc của thân'],
          rows: [
            ['Úp hộp A (lỗ trên nắp)', 'Từ phía trên xuống', 'Thân mọc thẳng lên'],
            [
              'Úp hộp B (lỗ ở thành bên)',
              'Chỉ từ một bên, qua lỗ thủng',
              'Thân uốn cong về phía lỗ thủng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Thân (ngọn) cây có tính hướng sáng: thân cây mọc uốn cong về phía có ánh sáng.',
        },
      ],
    },
    {
      heading: 'Quan sát tính hướng tiếp xúc và tập tính của động vật',
      blocks: [
        {
          type: 'p',
          text: 'Quan sát cây bầu, bí, mướp, dưa chuột ở vườn trường hoặc qua tranh ảnh, video. Cắm một que tre cạnh một cây non có tua cuốn, để một cây khác không có que, rồi theo dõi sau vài ngày.',
        },
        {
          type: 'table',
          caption: 'Kết quả quan sát tính hướng tiếp xúc',
          head: ['Cây', 'Hiện tượng quan sát được'],
          rows: [
            ['Có que tre (giàn) bên cạnh', 'Tua cuốn quấn quanh que, thân cây leo lên cao'],
            ['Không có vật để bám', 'Thân cây mềm yếu, ngả xuống và bò lan trên mặt đất'],
          ],
        },
        {
          type: 'p',
          text: 'Xem tranh ảnh, video về tập tính của động vật (kiếm ăn, đánh dấu lãnh thổ, chăm sóc con non, di cư, sống thành bầy đàn, ...) và ghi chép theo mẫu bảng dưới đây.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng ghi chép tập tính của động vật',
          head: ['Tên động vật', 'Tập tính quan sát được', 'Tên tập tính'],
          rows: [
            ['Mèo', 'Rình, vồ bắt chuột', 'Tập tính kiếm ăn'],
            ['Chó', 'Tè lên gốc cây, cột đá quanh nơi ở', 'Tập tính đánh dấu lãnh thổ'],
            ['Gà mẹ', 'Xoè cánh che chở đàn gà con', 'Tập tính chăm sóc con non'],
            ['Chim én', 'Bay về phương nam khi trời trở rét', 'Tập tính di cư'],
            [
              'Trâu rừng',
              'Sống thành đàn, cùng nhau chống kẻ thù',
              'Tập tính sống bầy đàn (xã hội)',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'list',
          items: [
            'Ghi lại cách bố trí và kết quả của từng thí nghiệm vào bảng, chỉ rõ chậu thí nghiệm và chậu đối chứng.',
            'Trả lời: vì sao chai nước phải đục lỗ nhỏ để nước thấm từ từ ở một bên chậu; nếu xoay chậu thường xuyên theo các hướng khác nhau thì thân cây mọc thế nào.',
            'Rút ra kết luận về tính hướng nước, hướng sáng, hướng tiếp xúc ở thực vật và nêu các tập tính đã quan sát được ở động vật.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Vườn thí nghiệm ảo',
    instruction:
      'Chọn thí nghiệm, bố trí (vị trí lỗ trên hộp carton, có cọc hay không), rồi bấm "Thêm 1 ngày" để tua thời gian. Ở thí nghiệm hướng nước, bấm "Nhấc cây ra xem rễ" để so sánh rễ của chậu thí nghiệm và chậu đối chứng.',
  },
  examples: [
    {
      problem:
        'Trong thí nghiệm chứng minh tính hướng nước, vì sao phải dùng chai nhựa đục lỗ nhỏ đặt ở một bên chậu để nước thấm từ từ, mà không đổ nước tưới đều khắp chậu?',
      steps: [
        'Muốn biết rễ có mọc về phía nước hay không, nước chỉ được có ở một phía của cây; phía còn lại khô hơn.',
        'Nếu đổ nước khắp chậu, đất ẩm đều ở mọi phía, rễ không có lí do để mọc lệch về phía nào, nên không chứng minh được gì.',
        'Lỗ nhỏ giúp nước thấm chậm, chỉ làm ẩm đất ở một bên và không làm chậu bị ngập úng, tránh thối rễ.',
      ],
      answer:
        'Để tạo sự chênh lệch độ ẩm giữa hai phía của cây (nguồn nước chỉ ở một bên) và tránh ngập úng làm thối rễ.',
    },
    {
      problem:
        'Trong thí nghiệm chứng minh tính hướng sáng, nếu ngày nào cũng xoay chậu cây (úp hộp có lỗ ở thành bên) theo các hướng khác nhau thì thân cây mọc như thế nào? Giải thích.',
      steps: [
        'Thân cây mọc cong về phía có ánh sáng.',
        'Khi chậu được xoay liên tục, ánh sáng lần lượt chiếu vào các phía khác nhau của cây, mỗi phía nhận ánh sáng gần như bằng nhau.',
        'Thân không bị kéo lệch về một phía cố định nào.',
      ],
      answer: 'Thân cây mọc gần như thẳng, vì các phía của cây nhận ánh sáng gần như đều nhau.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của thí nghiệm chứng minh tính hướng nước theo đúng thứ tự.',
      items: [
        'Đặt chai nước đục lỗ nhỏ sát một bên chậu thí nghiệm',
        'Gieo hạt đỗ vào hai chậu đất giống nhau, tưới đủ ẩm',
        'Nhấc cây ra khỏi chậu, quan sát hướng mọc của rễ',
        'Chờ cây non mọc được 3 đến 5 lá',
        'Chờ thêm 3 đến 5 ngày',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Phải có cây non trước khi đặt nguồn nước.', 'Bước cuối cùng là quan sát rễ.'],
      solution:
        'Gieo hạt vào hai chậu → chờ cây có 3 đến 5 lá → đặt chai nước đục lỗ ở một bên chậu thí nghiệm → chờ 3 đến 5 ngày → nhấc cây ra quan sát rễ.',
    },
    {
      type: 'choice',
      prompt: 'Kết quả của thí nghiệm chứng minh tính hướng nước là',
      options: [
        'rễ cây ở cả hai chậu đều mọc thẳng',
        'rễ cây ở chậu thí nghiệm mọc lệch về phía chai nước, rễ ở chậu đối chứng mọc thẳng',
        'rễ cây ở chậu thí nghiệm mọc tránh xa chai nước',
        'rễ cây ở chậu đối chứng mọc lệch về một phía',
      ],
      answer: 1,
      hints: ['Rễ cây mọc về phía có điều kiện gì?'],
      solution:
        'Rễ có tính hướng nước nên ở chậu thí nghiệm rễ mọc lệch về phía chai nước; ở chậu đối chứng đất ẩm đều nên rễ mọc thẳng.',
    },
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm chứng minh tính hướng nước, chậu đối chứng là',
      options: [
        'chậu có đặt chai nước đục lỗ ở một bên',
        'chậu được tưới bình thường, không đặt chai nước',
        'chậu không được tưới nước',
        'chậu không trồng cây',
      ],
      answer: 1,
      hints: ['Chậu đối chứng giống chậu thí nghiệm, chỉ thiếu điều kiện đang kiểm tra.'],
      solution:
        'Chậu đối chứng được tưới bình thường, không có nguồn nước lệch một bên, để so sánh với chậu thí nghiệm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi cách bố trí hộp carton với hướng mọc của thân cây sau 3 đến 5 ngày.',
      left: [
        'Hộp có lỗ trên nắp',
        'Hộp có lỗ ở thành bên',
        'Hộp có lỗ ở thành bên, xoay chậu mỗi ngày',
      ],
      right: [
        'Thân mọc thẳng lên',
        'Thân uốn cong về phía lỗ thủng',
        'Thân gần như mọc thẳng',
        'Thân uốn cong tránh xa lỗ thủng',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Thân cây luôn mọc về phía có ánh sáng; xét ánh sáng vào hộp từ đâu.'],
      solution:
        'Lỗ trên nắp: ánh sáng từ trên xuống, thân mọc thẳng. Lỗ ở thành bên: thân cong về phía lỗ. Xoay chậu mỗi ngày: các phía nhận sáng đều, thân gần như thẳng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao hộp carton dùng trong thí nghiệm hướng sáng phải kín, chỉ có một lỗ thủng?',
      options: [
        'Để giữ ấm cho cây',
        'Để ánh sáng chỉ chiếu vào cây từ một hướng xác định',
        'Để cây không bị côn trùng ăn',
        'Để giữ nước trong đất',
      ],
      answer: 1,
      hints: ['Muốn biết cây có mọc về phía ánh sáng không, ánh sáng phải đến từ đâu?'],
      solution:
        'Hộp kín chỉ để ánh sáng lọt vào qua một lỗ, nên ánh sáng đến từ một hướng xác định; nhờ đó thấy rõ thân mọc về phía ánh sáng.',
    },
    {
      type: 'number',
      prompt:
        'Theo cách làm trong bài, sau khi bố trí thí nghiệm cần chờ ít nhất khoảng bao nhiêu ngày mới quan sát kết quả?',
      answer: 3,
      unit: 'ngày',
      hints: ['Bài ghi khoảng thời gian "từ ... đến 5 ngày".'],
      solution: 'Cần chờ khoảng $3$ đến $5$ ngày, nên ít nhất khoảng $3$ ngày.',
    },
    {
      type: 'choice',
      prompt: 'Cắm que tre cạnh cây bầu non có tua cuốn. Sau vài ngày, hiện tượng quan sát được là',
      options: [
        'tua cuốn mọc tránh xa que tre',
        'tua cuốn quấn quanh que tre, thân cây leo lên cao',
        'cây bầu cụp lá lại',
        'rễ cây mọc về phía que tre',
      ],
      answer: 1,
      hints: ['Tua cuốn phản ứng khi tiếp xúc với một vật.'],
      solution:
        'Tua cuốn có tính hướng tiếp xúc: khi chạm vào que tre, tua cuốn quấn quanh que, giúp thân cây leo lên cao.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tập tính quan sát được với tên của tập tính đó.',
      left: [
        'Gà mẹ xoè cánh che chở đàn con',
        'Chim én bay về phương nam khi trời rét',
        'Mèo rình bắt chuột',
        'Trâu rừng sống thành đàn',
      ],
      right: [
        'Tập tính kiếm ăn',
        'Tập tính chăm sóc con non',
        'Tập tính sống bầy đàn',
        'Tập tính di cư',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Xét mục đích của mỗi hành động.'],
      solution:
        'Gà mẹ che con: chăm sóc con non. Chim én bay về phương nam: di cư. Mèo rình chuột: kiếm ăn. Trâu rừng sống thành đàn: sống bầy đàn.',
    },
    {
      type: 'multi',
      prompt: 'Từ các thí nghiệm và quan sát, em rút ra được những kết luận nào?',
      options: [
        'Rễ cây có tính hướng nước',
        'Thân cây có tính hướng sáng',
        'Tua cuốn của cây leo có tính hướng tiếp xúc',
        'Rễ cây mọc tránh xa nguồn nước',
        'Thân cây mọc tránh xa ánh sáng',
      ],
      answers: [0, 1, 2],
      hints: ['Nhớ lại kết quả của từng thí nghiệm: rễ, thân, tua cuốn mọc về phía nào?'],
      solution:
        'Rễ mọc về phía nguồn nước (hướng nước), thân mọc về phía ánh sáng (hướng sáng), tua cuốn quấn quanh vật tiếp xúc (hướng tiếp xúc).',
    },
    {
      type: 'text',
      prompt:
        'Trong mỗi thí nghiệm, mẫu giống hệt mẫu thí nghiệm nhưng không bị thay đổi điều kiện cần kiểm tra, dùng để so sánh, được gọi là mẫu gì?',
      accept: ['đối chứng', 'mẫu đối chứng', 'chậu đối chứng'],
      hints: ['Ở thí nghiệm hướng nước, đó là chậu được tưới bình thường.'],
      solution: 'Đó là mẫu đối chứng (chậu đối chứng).',
    },
  ],
  takeaways: [
    'Thí nghiệm hướng nước: chai nước đục lỗ đặt ở một bên chậu; sau 3 đến 5 ngày rễ mọc lệch về phía nguồn nước, rễ ở chậu đối chứng mọc thẳng.',
    'Thí nghiệm hướng sáng: hộp carton có lỗ ở thành bên làm thân cây cong về phía lỗ; lỗ trên nắp thì thân mọc thẳng; xoay chậu thường xuyên thì thân gần như thẳng.',
    'Tua cuốn của cây leo quấn quanh que, giàn: tính hướng tiếp xúc.',
    'Mẫu đối chứng giúp khẳng định phản ứng của cây là do điều kiện được kiểm tra gây ra.',
    'Quan sát tập tính của động vật: kiếm ăn, đánh dấu lãnh thổ, chăm sóc con non, di cư, sống bầy đàn.',
  ],
};
