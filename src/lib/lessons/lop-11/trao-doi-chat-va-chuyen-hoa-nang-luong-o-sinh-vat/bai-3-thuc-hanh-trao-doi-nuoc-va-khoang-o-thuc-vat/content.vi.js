/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành các thí nghiệm hút nước ở rễ, vận chuyển nước ở thân, thoát hơi nước ở lá, quan sát khí khổng, tưới nước và bón phân hợp lí, tìm hiểu trồng cây thuỷ canh và khí canh.',
  intro:
    'Lí thuyết nói rằng lá thoát hơi nước kéo nước đi lên, mặt dưới lá có nhiều khí khổng hơn, tưới quá nhiều cũng làm cây héo. Bài này em tự kiểm chứng từng điều đó bằng những dụng cụ đơn giản: ống nghiệm, cân, giấy cobalt chloride và vài chậu cây.',
  objectives: [
    'Thực hiện được thí nghiệm chứng minh sự hút nước ở rễ, vận chuyển nước ở thân và thoát hơi nước ở lá.',
    'Quan sát được cấu tạo khí khổng và giải thích trạng thái đóng mở.',
    'Thấy được ảnh hưởng của chế độ tưới nước và bón phân đến sinh trưởng của cây.',
    'Vẽ được đồ thị, tính được tốc độ thoát nước từ số đo và viết được báo cáo.',
    'So sánh được thuỷ canh, khí canh với trồng trên đất.',
  ],
  sections: [
    {
      heading: 'Thí nghiệm 1: hút nước ở rễ',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: so sánh lượng nước cung cấp cho cây trước và sau một khoảng thời gian. Nước giảm chứng tỏ rễ đã hút.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn hai cây non cùng loại, cùng cỡ, bộ rễ nguyên vẹn; rửa sạch rễ. Ngắt hết lá một cây.',
            'Chuẩn bị ba ống nghiệm cùng lượng nước: ống $1$ cắm cây còn nguyên lá, ống $2$ cắm cây đã ngắt lá, ống $3$ không có cây (đối chứng).',
            'Nhỏ một lớp dầu lên mặt nước ở cả ba ống để nước không bay hơi trực tiếp. Đánh dấu mực nước.',
            'Để ở nơi có ánh sáng. Sau một khoảng thời gian, đo mức giảm của mực nước; có thể cân ống để có số liệu chính xác hơn.',
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả nên thấy',
          head: ['Ống', 'Mực nước', 'Giải thích'],
          rows: [
            [
              '$1$: nguyên lá',
              'Giảm nhiều nhất',
              'Lá thoát hơi nước tạo lực kéo, cây hút nhiều nước',
            ],
            [
              '$2$: đã ngắt lá',
              'Giảm ít hơn',
              'Mất lực kéo từ lá, nước được hút chủ yếu nhờ áp suất rễ',
            ],
            [
              '$3$: đối chứng',
              'Gần như không đổi',
              'Lớp dầu ngăn bay hơi, không có cây để hút nước',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Thí nghiệm 2: vận chuyển nước ở thân',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị dung dịch màu (màu thực phẩm hoặc xanh methylene) và cành hoa màu trắng như hoa hồng, cúc, đồng tiền. Dùng hoa trắng vì dễ thấy màu.',
            'Cắt vát gốc cành trong nước. Cắm một cành vào dung dịch màu, một cành vào nước thường để đối chứng.',
            'Sau vài giờ hoặc qua đêm, quan sát màu cánh hoa. Cắt ngang thân và quan sát mặt cắt.',
          ],
        },
        {
          type: 'p',
          text: 'Kết quả: cánh hoa ở cành cắm dung dịch màu chuyển theo màu dung dịch, mặt cắt ngang thân có các chấm màu đậm, đó là mạch gỗ. Cành đối chứng không đổi màu. Điều này chứng tỏ nước đi từ thân lên hoa qua mạch gỗ.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 3: thoát hơi nước ở lá',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: giấy tẩm cobalt chloride khô có màu xanh, gặp hơi nước chuyển sang màu hồng. Áp hai mảnh giấy giống nhau vào hai mặt của một lá còn trên cây, kẹp lam kính ở ngoài để ngăn hơi ẩm trong không khí. Theo dõi thời gian đổi màu trong khoảng $30$ phút.',
        },
        { type: 'widget', name: 'giay-cobalt' },
      ],
    },
    {
      heading: 'Thí nghiệm 4: quan sát khí khổng',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng kim mũi mác tách một lớp biểu bì thật mỏng ở mặt dưới lá.',
            'Đặt lên lam kính có giọt nước, đậy lamen.',
            'Quan sát ở vật kính $10\\times$ rồi $40\\times$. Vẽ hình và ghi chú.',
          ],
        },
        {
          type: 'p',
          text: 'Kết quả: mỗi khí khổng gồm hai tế bào hình hạt đậu úp vào nhau, tạo khe khí khổng ở giữa. Mẫu ngâm trong nước có tế bào no nước, thành mỏng căng ra nên khe khí khổng mở.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 5: tưới nước và bón phân hợp lí',
      blocks: [
        {
          type: 'p',
          text: 'Trồng các cây cùng loại, cùng cỡ vào các chậu giống nhau. Chậu $1$ không tưới, chậu $2$ tưới vừa phải, chậu $3$ tưới quá nhiều (hai lần mỗi ngày). So sánh sau một tuần. Muốn thấy vai trò của phân bón, giữ chế độ tưới vừa phải và thay đổi lượng phân: không bón, bón đúng liều, bón quá liều.',
        },
        { type: 'widget', name: 'cham-soc' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mỗi lần chỉ đổi một yếu tố',
          text: 'Khi so sánh các chậu, giống cây, cỡ cây, loại đất và ánh sáng phải như nhau. Chỉ như vậy mới biết chắc sự khác biệt là do lượng nước hay lượng phân.',
        },
      ],
    },
    {
      heading: 'Tìm hiểu thuỷ canh và khí canh',
      blocks: [
        {
          type: 'p',
          text: 'Thuỷ canh và khí canh trồng cây không cần đất, cung cấp nước và chất khoáng hoà tan trong dung dịch dinh dưỡng. Ở thuỷ canh, rễ ngập trong dung dịch; ở khí canh, dung dịch được phun sương vào rễ.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Thuỷ canh', 'Khí canh'],
          rows: [
            [
              'Dụng cụ',
              'Dung dịch dinh dưỡng, bình trồng, rọ, xơ dừa',
              'Như thuỷ canh, thêm thiết bị phun sương',
            ],
            [
              'Ưu điểm so với trồng trên đất',
              'Năng suất, chất lượng cao; tiết kiệm đất và nước; ít cỏ dại',
              'Như thuỷ canh; rễ nhận được nhiều oxygen hơn',
            ],
            [
              'Hạn chế',
              'Chi phí, kĩ thuật cao; sâu bệnh dễ lan qua dung dịch',
              'Chi phí, kĩ thuật cao; tốn điện, cần bảo trì thường xuyên',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Báo cáo gồm: mục đích, chuẩn bị, cách tiến hành, kết quả, giải thích và kết luận cho từng thí nghiệm. Ghi đúng số đo của nhóm. Mỗi dấu … là một ô cần điền.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng kết quả',
          head: ['Thí nghiệm', 'Kết quả quan sát', 'Giải thích'],
          rows: [
            ['Hút nước ở rễ', '…', '…'],
            ['Vận chuyển nước ở thân', '…', '…'],
            ['Thoát hơi nước ở lá', '…', '…'],
            ['Cấu tạo khí khổng', '…', '…'],
            ['Tưới nước, bón phân', '…', '…'],
          ],
        },
        {
          type: 'p',
          text: 'Trả lời thêm: đề xuất một cách khác chứng minh lá là cơ quan thoát hơi nước. Làm thế nào để một bông hoa trắng có nhiều màu cánh?',
        },
      ],
    },
  ],
  explore: {
    title: 'Cân ống thí nghiệm',
    instruction:
      'Chọn nơi đặt ba ống, rồi bấm cân từng $10$ phút. Bảng ghi khối lượng, đồ thị vẽ lượng nước đã mất. Số liệu là mô phỏng để thấy xu hướng, không thay cho số đo của nhóm.',
  },
  examples: [
    {
      problem:
        'Một ống có cành nguyên lá cân được $120{,}00$ g lúc bắt đầu và $113{,}10$ g sau $60$ phút. Tính lượng nước mất và tốc độ mất nước theo g/giờ.',
      steps: [
        'Lượng nước mất: $120{,}00 - 113{,}10 = 6{,}90$ g.',
        'Thời gian $60$ phút bằng $1$ giờ.',
        'Tốc độ: $6{,}90 : 1 = 6{,}90$ g/giờ.',
      ],
      answer: 'Mất $6{,}90$ g nước, tốc độ $6{,}90$ g/giờ.',
    },
    {
      problem:
        'Trong thí nghiệm giấy cobalt chloride, mảnh ở mặt dưới lá hồng sau $10$ phút, mảnh ở mặt trên hồng sau $25$ phút. Rút ra kết luận gì?',
      steps: [
        'Cả hai mảnh đều hồng nên hai mặt lá đều thoát hơi nước.',
        'Mặt dưới làm giấy đổi màu nhanh hơn: $25 : 10 = 2{,}5$ lần.',
        'Thoát hơi nước chủ yếu qua khí khổng, nên mặt dưới có nhiều khí khổng hơn mặt trên.',
      ],
      answer: 'Lá thoát hơi nước ở cả hai mặt, mặt dưới mạnh hơn vì có nhiều khí khổng hơn.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Vì sao phải nhỏ một lớp dầu lên mặt nước trong các ống nghiệm ở thí nghiệm 1?',
      options: [
        'Để cung cấp chất béo cho rễ',
        'Để nước không bay hơi trực tiếp từ mặt ống',
        'Để nước dễ thấm vào rễ hơn',
        'Để giết vi khuẩn trong nước',
      ],
      answer: 1,
      hints: ['Ngoài rễ hút, nước còn có thể giảm đi theo cách nào?'],
      solution: 'Lớp dầu ngăn nước bay hơi, nên mực nước giảm chỉ là do cây hút.',
    },
    {
      type: 'choice',
      prompt: 'Ở thí nghiệm 1, ống nào có mực nước giảm nhiều nhất?',
      options: [
        'Ống có cây còn nguyên lá',
        'Ống có cây đã ngắt hết lá',
        'Ống đối chứng',
        'Cả ba bằng nhau',
      ],
      answer: 0,
      hints: ['Lực nào kéo nước lên mạnh nhất?'],
      solution: 'Lá thoát hơi nước tạo lực kéo, cây hút nhiều nước hơn hẳn.',
    },
    {
      type: 'number',
      prompt:
        'Một ống nặng $120{,}00$ g lúc đầu, $117{,}30$ g sau $30$ phút. Tốc độ mất nước là bao nhiêu gam mỗi giờ?',
      answer: 5.4,
      unit: 'g/giờ',
      tolerance: 0.01,
      hints: ['Tính lượng nước mất, rồi đổi $30$ phút thành giờ.'],
      solution:
        'Mất $120 - 117{,}3 = 2{,}7$ g trong $0{,}5$ giờ, nên tốc độ là $2{,}7 : 0{,}5 = 5{,}4$ g/giờ.',
    },
    {
      type: 'number',
      prompt:
        'Cành còn nguyên lá mất $7{,}2$ g nước trong khi cành đã ngắt lá cùng cỡ mất $0{,}9$ g. Cành có lá mất gấp bao nhiêu lần?',
      answer: 8,
      tolerance: 0.01,
      hints: ['Chia lượng lớn cho lượng nhỏ.'],
      solution: '$7{,}2 : 0{,}9 = 8$ lần.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao thí nghiệm vận chuyển nước ở thân thường dùng hoa màu trắng?',
      options: [
        'Vì hoa trắng hút nước mạnh nhất',
        'Vì hoa trắng không có mạch gỗ',
        'Vì dễ quan sát màu dung dịch đi lên cánh hoa',
        'Vì hoa trắng có nhiều khí khổng',
      ],
      answer: 2,
      hints: ['Muốn thấy rõ chất màu thì nền phải thế nào?'],
      solution: 'Cánh trắng cho thấy rõ màu của dung dịch được vận chuyển lên.',
    },
    {
      type: 'choice',
      prompt: 'Cắt ngang thân cành hoa đã cắm dung dịch màu, các chấm màu đậm là bộ phận nào?',
      options: ['Mạch gỗ', 'Mạch rây', 'Lớp biểu bì', 'Lõi xốp'],
      answer: 0,
      hints: ['Mạch nào dẫn nước đi lên?'],
      solution: 'Nước mang chất màu đi lên qua mạch gỗ, nên mạch gỗ bị nhuộm màu.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hiện tượng với nguyên nhân.',
      left: [
        'Giấy cobalt chloride chuyển từ xanh sang hồng',
        'Mảnh giấy mặt dưới lá đổi màu nhanh hơn',
        'Kẹp lam kính ngoài mảnh giấy',
      ],
      right: [
        'Mặt dưới lá có nhiều khí khổng hơn',
        'Tránh ảnh hưởng của độ ẩm không khí',
        'Giấy gặp hơi nước do lá thoát ra',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: ['Giấy khô màu xanh, ẩm màu hồng.'],
      solution:
        'Hơi nước làm giấy hồng; mặt dưới có nhiều khí khổng nên đổi màu nhanh hơn; lam kính ngăn hơi ẩm ngoài không khí.',
    },
    {
      type: 'choice',
      prompt: 'Khí khổng có hình dạng như thế nào khi quan sát dưới kính hiển vi?',
      options: [
        'Một tế bào hình sao',
        'Hai tế bào hình hạt đậu úp vào nhau, tạo khe ở giữa',
        'Một lỗ tròn không có tế bào bao quanh',
        'Bốn tế bào xếp thành vòng',
      ],
      answer: 1,
      hints: ['Khe khí khổng mở ra khi các tế bào này cong lại.'],
      solution: 'Hai tế bào khí khổng hình hạt đậu; khi no nước chúng cong lại làm khe mở.',
    },
    {
      type: 'choice',
      prompt:
        'Chậu cây được tưới hai lần mỗi ngày, sau một tuần lá vàng, rụng sớm. Nguyên nhân chính là gì?',
      options: [
        'Cây có quá nhiều chất khoáng do nước tưới',
        'Đất úng làm rễ thiếu $\\mathrm{O_2}$ nên hút nước kém',
        'Lá thoát hơi nước quá ít',
        'Nước làm giảm ánh sáng cây nhận được',
      ],
      answer: 1,
      hints: ['Rễ cũng cần hô hấp.'],
      solution:
        'Đất úng thiếu oxygen, rễ hô hấp kém nên hút nước, khoáng kém, trong khi lá vẫn thoát hơi nước.',
    },
    {
      type: 'multi',
      prompt: 'Những biểu hiện nào có thể gặp khi bón quá nhiều phân?',
      options: [
        'Cây có thể bị ngộ độc, lá bị cháy',
        'Rễ khó hút nước do nồng độ chất tan trong đất cao',
        'Gây ô nhiễm đất, nước',
        'Cây luôn cho năng suất cao hơn',
      ],
      answers: [0, 1, 2],
      hints: ['Năng suất chỉ tăng theo lượng phân trong một giới hạn.'],
      solution:
        'Bón quá liều gây độc, cản trở hút nước và ô nhiễm môi trường. Năng suất chỉ tăng theo lượng phân trong giới hạn nhất định.',
    },
    {
      type: 'choice',
      prompt: 'Thuỷ canh và khí canh khác nhau chủ yếu ở điểm nào?',
      options: [
        'Thuỷ canh trồng trên đất, khí canh không cần đất',
        'Thuỷ canh rễ ngập trong dung dịch, khí canh dung dịch được phun sương vào rễ',
        'Thuỷ canh không cần chất khoáng',
        'Khí canh không cần nước',
      ],
      answer: 1,
      hints: ['Cả hai đều không cần đất. Rễ gặp dung dịch dưới dạng nào?'],
      solution: 'Rễ cây thuỷ canh ngâm trong dung dịch; rễ cây khí canh nhận dung dịch dạng sương.',
    },
    {
      type: 'choice',
      prompt: 'Muốn chứng minh lá là cơ quan thoát hơi nước bằng túi nylon, cách làm nào đúng?',
      options: [
        'Trùm túi cho hai chậu cây cùng loại: một chậu còn lá, một chậu đã cắt lá; đặt nơi sáng, so sánh hơi nước đọng',
        'Trùm túi cho một chậu rồi cắt lá sau khi có hơi nước',
        'Trùm túi cho hai chậu khác loại, đặt nơi tối',
        'Trùm túi kín rồi tưới thật nhiều nước vào lá',
      ],
      answer: 0,
      hints: ['Cần một chậu đối chứng, và chỉ khác nhau ở một yếu tố.'],
      solution:
        'Hai chậu giống nhau, chỉ khác có lá hay không. Túi của chậu có lá đọng nhiều hơi nước hơn.',
    },
  ],
  takeaways: [
    'Cây có lá hút nhiều nước hơn hẳn: thoát hơi nước ở lá là động lực chính của dòng mạch gỗ.',
    'Nước đi lên qua mạch gỗ; có thể theo dõi bằng dung dịch màu với hoa trắng.',
    'Giấy cobalt chloride đổi từ xanh sang hồng khi gặp hơi nước; mặt dưới lá đổi nhanh hơn vì có nhiều khí khổng.',
    'Khí khổng gồm hai tế bào hình hạt đậu, mở khi no nước.',
    'Thiếu nước hay úng nước đều làm cây héo; thiếu hay thừa phân đều làm cây kém: phải tưới, bón hợp lí.',
    'Thuỷ canh, khí canh cho năng suất cao, tiết kiệm đất nước, nhưng chi phí và kĩ thuật cao.',
  ],
};
