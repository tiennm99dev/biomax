/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: cắm cây cần tây hoặc cành hoa trắng vào nước pha màu để chứng minh thân vận chuyển nước nhờ mạch gỗ; trùm túi nylon trong suốt lên cây có lá và cây đã ngắt lá để chứng minh lá thoát hơi nước.',
  intro:
    'Ở bài trước, em đã biết nước được rễ hút vào, đi theo mạch gỗ của thân lên lá rồi phần lớn thoát ra ngoài qua khí khổng. Nhưng nước trong thân không màu, hơi nước thoát ra từ lá lại vô hình: làm sao nhìn thấy được hai quá trình này? Trong bài thực hành, em sẽ "nhuộm" dòng nước bằng mực màu và "bắt" hơi nước bằng túi nylon trong suốt.',
  objectives: [
    'Tiến hành được thí nghiệm chứng minh thân vận chuyển nước và thí nghiệm chứng minh lá thoát hơi nước.',
    'Sử dụng đúng dụng cụ của bài thực hành: dao, kính lúp, túi nylon, cốc thuỷ tinh.',
    'Ghi kết quả, giải thích kết quả và rút ra kết luận; giải thích được mục đích của từng bước làm.',
  ],
  sections: [
    {
      heading: 'Thí nghiệm 1: Chứng minh thân vận chuyển nước',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: cốc thuỷ tinh, dao (dao mổ), kính lúp.',
            'Mẫu vật: cây cần tây (hoặc cành hoa màu trắng như hoa cúc, hoa hồng, hoa huệ).',
            'Hoá chất: nước, mực hoặc phẩm màu (xanh, đỏ hay tím).',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Cho nước vào cốc thuỷ tinh, nhỏ vài giọt mực (phẩm) màu, khuấy đều.',
            'Cắm cây cần tây (cành hoa trắng) vào cốc nước màu. Đặt cốc ở nơi thoáng, có ánh sáng.',
            'Sau vài giờ (khoảng $5$ đến $7$ giờ), quan sát màu của lá (cánh hoa).',
            'Dùng dao cắt ngang thân (cuống lá cần tây), soi lát cắt bằng kính lúp, quan sát vị trí bị nhuộm màu.',
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả thí nghiệm 1',
          head: ['Bộ phận quan sát', 'Hiện tượng'],
          rows: [
            ['Lá cần tây (cánh hoa)', 'Bị nhuộm màu giống màu nước trong cốc'],
            ['Lát cắt ngang thân', 'Thấy rõ các chấm tròn nhuộm màu đậm (mạch gỗ)'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Nước màu từ cốc đã đi theo mạch gỗ của thân lên lá (hoa). Thân vận chuyển nước (và chất khoáng hoà tan) nhờ mạch gỗ; nước được kéo lên chủ yếu nhờ lực thoát hơi nước ở lá.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao phải dùng nước pha màu?',
          text: 'Nước bình thường không màu nên không nhìn thấy đường nó đi, cũng không phân biệt được nước cây vừa hút lên với nước sẵn có trong cây. Nước pha màu giúp quan sát được rõ con đường vận chuyển nước.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Dao mổ rất sắc: cắt trên thớt, hướng lưỡi dao ra xa tay. Mực, phẩm màu dễ làm bẩn da và quần áo; rửa tay sau thí nghiệm.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 2: Chứng minh lá thoát hơi nước',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: hai túi nylon trong suốt, dây buộc.',
            'Mẫu vật: hai chậu cây cùng loại, kích thước tương đương (cây khoai lang, cần tây...).',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chậu A: ngắt toàn bộ lá của cây. Chậu B: để nguyên lá.',
            'Trùm túi nylon trong suốt kín toàn bộ phần thân, lá của mỗi cây (không trùm chậu đất), buộc chặt miệng túi quanh gốc thân.',
            'Đặt hai chậu ra chỗ có ánh sáng (nắng). Sau một thời gian (khoảng $1$ giờ), quan sát thành túi nylon ở hai chậu.',
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả thí nghiệm 2',
          head: ['Chậu', 'Hiện tượng ở túi nylon'],
          rows: [
            ['A (đã ngắt hết lá)', 'Hầu như không thay đổi, vẫn trong suốt'],
            ['B (để nguyên lá)', 'Mờ đục, đọng nhiều hơi nước (giọt nước) ở mặt trong túi'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Hơi nước đọng trong túi ở chậu B do lá thoát ra. Lá là cơ quan thoát hơi nước chủ yếu của cây; cây không có lá hầu như không thoát hơi nước.',
        },
        {
          type: 'table',
          caption: 'Mục đích của các bước',
          head: ['Bước làm', 'Mục đích'],
          rows: [
            [
              'Ngắt hết lá ở chậu A',
              'Tạo chậu đối chứng không có lá, để so sánh và chứng tỏ hơi nước là do lá thoát ra',
            ],
            [
              'Dùng túi nylon trong suốt',
              'Cho ánh sáng đi qua để khí khổng mở, lá thoát hơi nước bình thường; dễ quan sát hơi nước đọng trên thành túi',
            ],
            ['Trùm kín, buộc chặt', 'Giữ hơi nước trong túi, không cho thất thoát ra ngoài'],
            [
              'Không trùm cả chậu đất',
              'Đất ẩm cũng bốc hơi nước; nếu trùm cả chậu thì túi ở chậu A cũng mờ, làm sai kết quả',
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
            'Ghi lại các bước đã làm của hai thí nghiệm và mục đích của từng bước.',
            'Hoàn thành bảng kết quả: màu của lá (cánh hoa), lát cắt ngang thân ở thí nghiệm 1; hiện tượng ở túi nylon của chậu A và chậu B ở thí nghiệm 2.',
            'Giải thích kết quả và rút ra kết luận về vai trò vận chuyển nước của thân và vai trò thoát hơi nước của lá.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Thí nghiệm ảo: nước màu trong thân và túi nylon trùm lá',
    instruction:
      'Thí nghiệm 1: chọn mẫu vật và màu nước, kéo thời gian (hoặc bấm "Để 6 giờ") để xem màu lan lên thân và lá, rồi bấm "Cắt ngang thân, soi kính lúp". Thử nước không pha màu và nơi tối, ẩm để so sánh. Thí nghiệm 2: kéo thời gian và so sánh túi nylon ở chậu A (ngắt hết lá) với chậu B (nguyên lá); thử đặt chỗ râm và thử trùm cả chậu để thấy vì sao cách làm đó sai.',
  },
  examples: [
    {
      problem:
        'Một nhóm cắm cành hoa cúc trắng vào cốc nước pha mực đỏ. Sau khoảng $6$ giờ, mép cánh hoa có màu đỏ. Giải thích hiện tượng và cho biết nếu cắt ngang cuống hoa thì thấy gì.',
      steps: [
        'Cành hoa hút nước màu từ cốc qua vết cắt ở gốc cành.',
        'Nước màu đi lên theo mạch gỗ của thân (cuống) đến cánh hoa, nhờ lực kéo do thoát hơi nước.',
        'Chất màu theo nước đến cánh hoa và ở lại các tế bào cánh hoa nên cánh hoa có màu đỏ.',
        'Cắt ngang cuống, chỉ các bó mạch gỗ chứa nước màu nên thấy các chấm tròn màu đỏ đậm.',
      ],
      answer:
        'Nước màu được vận chuyển theo mạch gỗ lên cánh hoa; lát cắt ngang cuống có các chấm đỏ đậm là mạch gỗ.',
    },
    {
      problem:
        'Bạn Nam trùm túi nylon kín cả cây lẫn chậu đất ở cả hai chậu A (đã ngắt lá) và B (nguyên lá). Sau $1$ giờ, cả hai túi đều mờ hơi nước. Nam kết luận: "Cây không có lá cũng thoát hơi nước mạnh". Kết luận đó có đúng không? Vì sao?',
      steps: [
        'Đất trong chậu ẩm nên nước trong đất bốc hơi, đọng lên thành túi ở cả hai chậu.',
        'Như vậy hơi nước trong túi chậu A chủ yếu do đất bốc hơi, không phải do cây.',
        'Muốn biết hơi nước có phải do lá thoát ra hay không, chỉ được trùm phần thân và lá, buộc chặt túi quanh gốc thân.',
      ],
      answer:
        'Không đúng. Trùm cả chậu làm hơi nước từ đất lẫn vào kết quả; phải chỉ trùm phần thân, lá thì mới thấy túi chậu A hầu như không đổi còn túi chậu B mờ hơi nước.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm chứng minh thân vận chuyển nước, sau vài giờ lá cây cần tây cắm trong cốc nước pha màu có hiện tượng gì?',
      options: [
        'Lá héo rũ và rụng',
        'Lá bị nhuộm màu giống màu nước trong cốc',
        'Lá chuyển sang màu vàng',
        'Lá không có gì thay đổi',
      ],
      answer: 1,
      hints: ['Nước màu đi từ cốc lên đâu?'],
      solution:
        'Nước màu được vận chuyển qua mạch gỗ của thân lên lá nên lá bị nhuộm màu giống màu nước trong cốc.',
    },
    {
      type: 'choice',
      prompt:
        'Khi cắt ngang thân (cuống lá) cần tây và soi bằng kính lúp, các chấm tròn nhuộm màu đậm là bộ phận nào?',
      options: ['Mạch rây', 'Mạch gỗ', 'Biểu bì', 'Khí khổng'],
      answer: 1,
      hints: ['Bộ phận nào của thân vận chuyển nước và chất khoáng?'],
      solution:
        'Mạch gỗ vận chuyển nước và chất khoáng từ rễ lên, nên nước màu đi trong mạch gỗ và nhuộm màu chúng. Mạch rây vận chuyển chất hữu cơ.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trong thí nghiệm chứng minh thân vận chuyển nước phải dùng nước pha màu?',
      options: [
        'Vì cây chỉ hút nước có màu',
        'Để phân biệt nước cây hút lên với nước sẵn có trong cây và dễ quan sát đường đi của nước',
        'Để cây quang hợp mạnh hơn',
        'Để diệt vi khuẩn trong cốc',
      ],
      answer: 1,
      hints: ['Nếu nước không màu, em có nhìn thấy nước đi lên không?'],
      solution:
        'Nước không màu thì không nhìn thấy đường đi, cũng không phân biệt được với nước sẵn có trong cây. Pha màu giúp quan sát rõ nước được vận chuyển lên lá theo mạch gỗ.',
    },
    {
      type: 'choice',
      prompt: 'Nên chọn hoa màu gì để làm thí nghiệm cắm cành hoa vào nước pha màu?',
      options: ['Hoa màu đỏ', 'Hoa màu trắng', 'Hoa màu tím', 'Màu nào cũng như nhau'],
      answer: 1,
      hints: ['Màu của nước phải hiện rõ trên cánh hoa.'],
      solution:
        'Hoa trắng không có sắc tố nên màu của nước hiện rõ trên cánh hoa; hoa có sẵn màu sẽ che mất màu nước.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm chứng minh lá thoát hơi nước, sau khoảng 1 giờ, túi nylon trùm cây ở chậu B (để nguyên lá) có hiện tượng gì?',
      options: [
        'Túi vẫn trong suốt',
        'Túi mờ đục, đọng hơi nước ở mặt trong',
        'Túi phồng lên vì khí oxygen',
        'Túi bị thủng',
      ],
      answer: 1,
      hints: ['Lá thoát hơi nước ra ngoài; hơi nước gặp túi nylon thì thế nào?'],
      solution:
        'Lá thoát hơi nước, hơi nước đọng lại ở mặt trong túi nylon làm túi mờ đục, có giọt nước.',
    },
    {
      type: 'choice',
      prompt: 'Chậu A (đã ngắt toàn bộ lá) trong thí nghiệm 2 có vai trò gì?',
      options: [
        'Là chậu đối chứng để so sánh, chứng tỏ hơi nước là do lá thoát ra',
        'Để cây ra lá mới nhanh hơn',
        'Để cây hút nhiều nước hơn',
        'Không có vai trò gì',
      ],
      answer: 0,
      hints: ['Hai chậu giống nhau ở mọi điểm, chỉ khác một điều. Điều đó là gì?'],
      solution:
        'Chậu A chỉ khác chậu B ở chỗ không có lá. Túi ở chậu A hầu như không đổi, túi ở chậu B mờ hơi nước, chứng tỏ hơi nước là do lá thoát ra.',
    },
    {
      type: 'multi',
      prompt:
        'Chọn tất cả lí do phải trùm túi nylon trong suốt kín toàn bộ phần lá cây trong thí nghiệm 2.',
      options: [
        'Túi trong suốt cho ánh sáng đi qua, khí khổng mở, lá thoát hơi nước bình thường',
        'Dễ quan sát hơi nước đọng trên thành túi',
        'Trùm kín để hơi nước không thất thoát ra ngoài',
        'Để lá không quang hợp được',
      ],
      answers: [0, 1, 2],
      hints: ['Nếu dùng túi đen thì lá có thoát hơi nước bình thường không?'],
      solution:
        'Túi trong suốt giữ ánh sáng cho lá (khí khổng mở, thoát hơi nước bình thường) và cho thấy hơi nước đọng; trùm kín để giữ hơi nước trong túi. Túi trong suốt không ngăn lá quang hợp.',
    },
    {
      type: 'choice',
      prompt: 'Nếu trùm túi nylon kín cả cây và chậu đất thì kết quả thí nghiệm 2 sẽ thế nào?',
      options: [
        'Chính xác hơn vì giữ được nhiều hơi nước',
        'Không chính xác vì đất ẩm cũng bốc hơi nước, túi ở chậu không có lá cũng bị mờ',
        'Không thay đổi gì',
        'Cây sẽ chết ngay',
      ],
      answer: 1,
      hints: ['Ngoài lá, còn gì trong chậu có thể bốc hơi nước?'],
      solution:
        'Nước trong đất ẩm bốc hơi, đọng lên túi ở cả hai chậu nên không chứng minh được hơi nước là do lá thoát ra. Chỉ được trùm phần thân và lá.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của thí nghiệm chứng minh lá thoát hơi nước theo đúng thứ tự.',
      items: [
        'Trùm túi nylon trong suốt kín phần thân, lá của mỗi cây, buộc chặt quanh gốc thân',
        'Quan sát thành túi nylon ở hai chậu và ghi kết quả',
        'Ngắt toàn bộ lá cây ở chậu A, để nguyên lá ở chậu B',
        'Đặt hai chậu ra chỗ có ánh sáng khoảng 1 giờ',
      ],
      answer: [2, 0, 3, 1],
      hints: ['Phải chuẩn bị hai chậu khác nhau về lá trước khi trùm túi.'],
      solution:
        'Ngắt lá ở chậu A → trùm túi nylon kín phần thân, lá ở cả hai chậu → đặt nơi có ánh sáng khoảng 1 giờ → quan sát, ghi kết quả.',
    },
    {
      type: 'choice',
      prompt:
        'Cùng làm thí nghiệm 1, cốc đặt ở nơi thoáng, có ánh sáng thì lá nhuộm màu nhanh hơn cốc đặt ở nơi tối, ẩm. Vì sao?',
      options: [
        'Vì ở nơi thoáng, có ánh sáng, lá thoát hơi nước mạnh, tạo lực kéo nước lên mạnh hơn',
        'Vì ánh sáng làm mực màu đậm hơn',
        'Vì ở nơi tối, mạch gỗ bị đóng lại hoàn toàn',
        'Vì ở nơi tối, cây hút nước màu bằng lá',
      ],
      answer: 0,
      hints: ['Động lực chủ yếu kéo nước lên trong mạch gỗ là gì?'],
      solution:
        'Ánh sáng làm khí khổng mở, không khí thoáng làm hơi nước thoát ra nhanh: lá thoát hơi nước mạnh nên kéo nước màu lên nhanh. Ở nơi tối, ẩm, thoát hơi nước yếu nên nước đi lên chậm.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi dụng cụ (vật liệu) với công dụng của nó trong bài thực hành.',
      left: ['Mực (phẩm) màu', 'Kính lúp', 'Túi nylon trong suốt', 'Dao mổ'],
      right: [
        'Nhuộm màu nước để thấy đường nước đi',
        'Quan sát các chấm màu trên lát cắt ngang thân',
        'Giữ và cho thấy hơi nước do lá thoát ra',
        'Cắt ngang thân (cuống lá)',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Mỗi dụng cụ dùng ở một bước: pha nước, cắt, soi, trùm.'],
      solution:
        'Mực màu nhuộm nước; dao cắt ngang thân; kính lúp soi lát cắt thấy chấm màu (mạch gỗ); túi nylon trong suốt giữ hơi nước lá thoát ra.',
    },
    {
      type: 'text',
      prompt:
        'Thí nghiệm 1 chứng minh nước được vận chuyển trong thân nhờ loại mạch nào? (Viết tên mạch.)',
      accept: ['mạch gỗ', 'mach go', 'mạch gỗ của thân'],
      hints: ['Các chấm màu trên lát cắt ngang thân là loại mạch này.'],
      solution: 'Nước và chất khoáng được vận chuyển từ rễ qua thân lên lá nhờ mạch gỗ.',
    },
  ],
  takeaways: [
    'Cắm cây cần tây (hoa trắng) vào nước pha màu: lá (cánh hoa) nhuộm màu, lát cắt ngang thân có các chấm màu đậm là mạch gỗ.',
    'Thân vận chuyển nước và chất khoáng nhờ mạch gỗ; nước được kéo lên chủ yếu nhờ lực thoát hơi nước ở lá.',
    'Trùm túi nylon trong suốt lên phần thân, lá: túi ở cây có lá mờ hơi nước, túi ở cây đã ngắt lá hầu như không đổi, chứng tỏ lá thoát hơi nước.',
    'Chậu ngắt lá là đối chứng; chỉ trùm phần thân, lá, không trùm chậu đất vì đất ẩm cũng bốc hơi nước.',
  ],
};
