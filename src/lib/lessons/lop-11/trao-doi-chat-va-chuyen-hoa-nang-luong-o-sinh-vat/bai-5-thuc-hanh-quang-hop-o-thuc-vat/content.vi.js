/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành quan sát lục lạp, tách chiết và phân tích sắc tố bằng sắc kí giấy, chứng minh quang hợp tạo tinh bột và thải oxygen, kèm mẫu báo cáo.',
  intro:
    'Lá xanh có thật chỉ chứa một màu xanh? Bài này em sẽ tách sắc tố của lá thành nhiều dải màu trên một băng giấy, rồi tự chứng minh rằng cây tạo ra tinh bột và oxygen khi có ánh sáng, đúng như những gì bài trước đã học.',
  objectives: [
    'Quan sát được lục lạp trong tế bào thực vật dưới kính hiển vi.',
    'Tách chiết được sắc tố lá và phân tích được chúng bằng sắc kí giấy.',
    'Chứng minh được quang hợp tạo tinh bột và thải oxygen; giải thích được vai trò của mỗi bước.',
    'Tính được tỉ số quãng đường của sắc tố và dung môi; viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: rong mái chèo (hoặc lá thài lài tía); lá rau theo mùa như rau muống, rau ngót, rau cải, rau dền đỏ; chậu cây khoai tây; hai cành rong đuôi chó.',
            'Dụng cụ: kính hiển vi, lam kính, lamen, kim mũi mác; bình tam giác, ống eppendorf, ống mao dẫn, giấy sắc kí, bình sắc kí có nắp, bút chì, thước; đèn cồn, cốc thuỷ tinh, đĩa Petri, băng giấy đen; hai phễu thuỷ tinh, hai ống nghiệm, que đóm.',
            'Hoá chất: acetone $80\\%$, hỗn hợp petroleum ether : ethanol theo tỉ lệ $14 : 1$, cồn $90^\\circ$, dung dịch iodine.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Acetone, petroleum ether và cồn dễ cháy, dễ bay hơi: làm nơi thoáng, xa ngọn lửa, đậy nắp bình; đun cồn phải đun cách thuỷ. Không nếm, không ngửi trực tiếp hoá chất; rửa tay sau khi làm.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 1: quan sát lục lạp',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Cuộn lá rong quanh ngón tay trỏ, dùng kim mũi mác bóc lớp biểu bì.',
            'Đặt mẫu lên lam kính, nhỏ một giọt nước cất, đậy lamen.',
            'Quan sát ở vật kính $10\\times$ rồi $40\\times$. Vẽ hình vào vở.',
          ],
        },
        {
          type: 'p',
          text: 'Kết quả: tế bào biểu bì rong mái chèo có nhiều lục lạp hình bầu dục, màu xanh lục.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 2: tách chiết và phân tích sắc tố',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: dung môi hữu cơ phá vỡ liên kết giữa diệp lục với lipid và protein, đưa sắc tố vào dung dịch. Khi dung môi chạy lên giấy sắc kí, các sắc tố đi với tốc độ khác nhau nên tách thành các dải.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Cân khoảng $2$ g lá tươi, bỏ cuống và gân chính, cắt nhỏ. Cho vào bình tam giác với khoảng $20$ mL acetone $80\\%$ cho ngập mẫu. Sau khoảng $1$ giờ thu được dịch sắc tố.',
            'Lấy $0{,}3$ mL dịch đậm đặc cho vào ống eppendorf, đậy kín.',
            'Dùng bút chì kẻ một đường mờ gần đầu băng giấy sắc kí. Dùng ống mao dẫn chấm dịch lên vạch khoảng $10$ lần, đợi khô rồi mới chấm tiếp.',
            'Treo băng giấy thẳng đứng trong bình đã có dung môi, sao cho vạch chấm không chạm dung môi. Đậy nắp.',
            'Sau khoảng $10$ phút, lấy giấy ra, đánh dấu ngay vạch dung môi, đo và ghi kết quả.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đọc kết quả',
          text: 'Từ vạch xuất phát lên có bốn dải: diệp lục b (xanh vàng), diệp lục a (xanh lam), xanthophyll (vàng), carotene (da cam). Giấy cellulose phân cực giữ các sắc tố phân cực hơn lại nên chúng đi gần; carotene ít phân cực nhất nên đi xa nhất.',
        },
        {
          type: 'tex',
          tex: 'R_f = \\frac{\\text{quãng đường sắc tố đi được}}{\\text{quãng đường dung môi đi được}}',
        },
        {
          type: 'p',
          text: 'Tỉ số $R_f$ cho biết sắc tố đi xa cỡ nào so với dung môi, luôn nhỏ hơn hoặc bằng $1$; hai quãng đường đều đo từ vạch xuất phát. Đây là cách phòng thí nghiệm dùng để so sánh dải sắc tố giữa các lần chạy.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 3: tạo thành tinh bột trong quang hợp',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: iodine cho màu xanh tím với tinh bột.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Để chậu khoai tây trong bóng tối $2$ ngày cho lá tiêu hết tinh bột dự trữ.',
            'Dùng băng giấy đen che kín một phần lá ở cả hai mặt, rồi đưa cây ra nắng khoảng $4$ đến $6$ giờ.',
            'Hái lá, bỏ băng giấy đen.',
            'Đun cách thuỷ lá trong cồn $90^\\circ$ để tẩy diệp lục, rửa lại bằng nước ấm.',
            'Nhúng lá vào dung dịch iodine trong đĩa Petri và quan sát màu.',
          ],
        },
        { type: 'widget', name: 'thu-iodine' },
      ],
    },
    {
      heading: 'Thí nghiệm 4: thải oxygen trong quang hợp',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Cho hai cành rong đuôi chó vào hai phễu thuỷ tinh, phần ngọn hướng về miệng phễu.',
            'Úp ngược mỗi phễu vào một cốc nước.',
            'Đổ đầy nước vào hai ống nghiệm, bịt miệng, rồi úp nhanh vào cuống phễu.',
            'Đặt một cốc trong tối (hoặc bọc giấy đen), cốc kia ngoài nắng hoặc dưới đèn.',
            'Sau khoảng $30$ phút, quan sát. Nhấc ống có khí ra, đưa que đóm còn tàn đỏ vào miệng ống.',
          ],
        },
        {
          type: 'table',
          head: ['Cốc', 'Hiện tượng', 'Giải thích'],
          rows: [
            [
              'Có ánh sáng',
              'Có bọt khí, khí đẩy nước trong ống xuống; que đóm sáng lên hoặc cháy lại',
              'Rong quang hợp thải $\\mathrm{O_2}$; $\\mathrm{O_2}$ duy trì sự cháy',
            ],
            [
              'Trong tối',
              'Gần như không có bọt khí; que đóm không sáng lên',
              'Không có ánh sáng thì không quang hợp',
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
          text: 'Báo cáo gồm: mục đích, chuẩn bị, cách tiến hành, kết quả, giải thích và kết luận. Ghi số đo thật của nhóm; khi kết quả không như dự kiến, nêu nguyên nhân có thể có. Mỗi dấu … là một ô cần điền.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng kết quả sắc kí',
          head: ['Dải', 'Màu', 'Tên sắc tố', 'Quãng đường (mm)', '$R_f$'],
          rows: [
            ['$1$ (gần vạch nhất)', '…', '…', '…', '…'],
            ['$2$', '…', '…', '…', '…'],
            ['$3$', '…', '…', '…', '…'],
            ['$4$ (xa vạch nhất)', '…', '…', '…', '…'],
          ],
        },
        {
          type: 'p',
          text: 'Trả lời thêm: lục lạp có hình dạng và số lượng thế nào ở tế bào biểu bì rong mái chèo? Vì sao phải để cây trong tối $2$ ngày? Trồng rong trong bể cá cảnh có ích gì?',
        },
      ],
    },
  ],
  explore: {
    title: 'Sắc kí giấy ảo',
    instruction:
      'Chạy sắc kí đúng cách, rồi gọi tên từng dải. Sau đó thử làm sai có chủ đích: đổi sang nước, hạ vạch xuất phát vào dung môi, chấm ít lần, đổi sang lá vàng. Số đo là mô hình để so sánh, không thay cho số đo của nhóm.',
  },
  examples: [
    {
      problem:
        'Trên giấy sắc kí, dung môi đi được $90$ mm kể từ vạch xuất phát. Dải diệp lục a đi được $41{,}4$ mm. Tính $R_f$ của diệp lục a.',
      steps: [
        'Viết công thức: $R_f$ bằng quãng đường sắc tố chia quãng đường dung môi.',
        'Thay số: $R_f = 41{,}4 : 90 = 0{,}46$.',
      ],
      answer: '$R_f = 0{,}46$.',
    },
    {
      problem:
        'Một nhóm không để cây trong tối trước khi làm thí nghiệm tinh bột. Kết quả trên lá sẽ ra sao, và vì sao không kết luận được?',
      steps: [
        'Lá trước đó đã có tinh bột dự trữ từ các lần quang hợp cũ.',
        'Nhúng iodine, cả phần được chiếu và phần bị che đều xanh tím.',
        'Không tách được tinh bột mới với tinh bột cũ, nên không biết phần nào quang hợp trong lúc thí nghiệm.',
      ],
      answer: 'Cả lá đều xanh tím, nên không chứng minh được tinh bột chỉ tạo ra khi có ánh sáng.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các dải sắc tố từ gần vạch xuất phát đến xa vạch xuất phát.',
      items: ['Carotene', 'Diệp lục a', 'Xanthophyll', 'Diệp lục b'],
      answer: [3, 1, 2, 0],
      hints: ['Hai dải diệp lục ở gần vạch; sắc tố ít phân cực nhất đi xa nhất.'],
      solution: 'Từ dưới lên: diệp lục b, diệp lục a, xanthophyll, carotene.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải dùng bút chì, không dùng bút mực, để kẻ vạch trên giấy sắc kí?',
      options: [
        'Vì mực sẽ tan trong dung môi và chạy theo, làm sai kết quả',
        'Vì bút chì làm sắc tố đi nhanh hơn',
        'Vì giấy sắc kí không viết được bằng mực',
        'Vì than chì hút dung môi',
      ],
      answer: 0,
      hints: ['Mực bút là chất màu hoà tan.'],
      solution: 'Mực tan trong dung môi và tạo thêm vệt màu; than chì không tan.',
    },
    {
      type: 'choice',
      prompt: 'Treo giấy sắc kí vào bình, vạch chấm phải ở vị trí nào so với mặt dung môi?',
      options: [
        'Ngập trong dung môi',
        'Vừa chạm mặt dung môi',
        'Ở trên mặt dung môi',
        'Vị trí nào cũng được',
      ],
      answer: 2,
      hints: ['Nếu sắc tố gặp trực tiếp dung môi trong bình, nó sẽ đi đâu?'],
      solution: 'Vạch phải ở trên mặt dung môi; nếu ngập, sắc tố tan hết vào bình.',
    },
    {
      type: 'number',
      prompt:
        'Dung môi đi được $80$ mm, dải carotene đi được $72$ mm. Tính $R_f$ của carotene (viết dạng số thập phân).',
      answer: 0.9,
      tolerance: 0.001,
      hints: ['Chia quãng đường sắc tố cho quãng đường dung môi.'],
      solution: '$R_f = 72 : 80 = 0{,}9$.',
    },
    {
      type: 'number',
      prompt:
        'Diệp lục b có $R_f = 0{,}3$. Nếu dung môi đi được $90$ mm thì dải diệp lục b cách vạch xuất phát bao nhiêu milimét?',
      answer: 27,
      unit: 'mm',
      tolerance: 0.01,
      hints: ['Quãng đường sắc tố bằng $R_f$ nhân quãng đường dung môi.'],
      solution: '$0{,}3 \\cdot 90 = 27$ mm.',
    },
    {
      type: 'number',
      prompt:
        'Dịch sắc tố được chiết từ $2$ g lá với $20$ mL acetone. Cần bao nhiêu mililít acetone để chiết $5$ g lá với cùng tỉ lệ?',
      answer: 50,
      unit: 'mL',
      hints: ['$5$ g gấp mấy lần $2$ g?'],
      solution: '$5 : 2 = 2{,}5$ lần, nên cần $20 \\cdot 2{,}5 = 50$ mL.',
    },
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm tinh bột, vì sao phải đun lá trong cồn trước khi nhúng iodine?',
      options: [
        'Để tạo thêm tinh bột',
        'Để tẩy diệp lục, màu xanh không che màu của iodine',
        'Để giết vi khuẩn trên lá',
        'Để iodine thành màu đỏ',
      ],
      answer: 1,
      hints: ['Muốn thấy màu xanh tím thì nền lá nên có màu gì?'],
      solution: 'Diệp lục tan trong cồn; lá mất màu xanh nên dễ đọc màu của iodine.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải đun cách thuỷ lá trong cồn, không đun trực tiếp?',
      options: [
        'Vì cồn dễ cháy, đun trực tiếp không an toàn',
        'Vì nước làm cồn mạnh hơn',
        'Vì lá cần nhiều nước để tạo tinh bột',
        'Vì đun cách thuỷ làm lá xanh hơn',
      ],
      answer: 0,
      hints: ['Hãy nhớ phần "An toàn".'],
      solution: 'Cồn dễ bay hơi và dễ bắt lửa, nên phải đun cách thuỷ, tránh ngọn lửa trực tiếp.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bước với mục đích của nó trong thí nghiệm tinh bột.',
      left: [
        'Để cây trong tối $2$ ngày',
        'Che giấy đen một phần lá',
        'Đun lá trong cồn',
        'Nhúng iodine',
      ],
      right: [
        'Tẩy diệp lục',
        'Tiêu hết tinh bột dự trữ',
        'Phát hiện tinh bột',
        'Tạo phần đối chứng không có ánh sáng',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: [
        'Mỗi bước trả lời một câu hỏi: lá đã sạch tinh bột cũ chưa, phần nào được so sánh, màu có đọc được không?',
      ],
      solution:
        'Để tối: tiêu tinh bột dự trữ. Che giấy: tạo đối chứng. Đun cồn: tẩy diệp lục. Iodine: phát hiện tinh bột.',
    },
    {
      type: 'choice',
      prompt: 'Sau khi thử iodine, phần lá bị che có màu vàng nâu nghĩa là gì?',
      options: [
        'Phần đó nhiều tinh bột nhất',
        'Phần đó không có tinh bột, vì không được chiếu sáng nên không quang hợp',
        'Phần đó đã hết diệp lục từ trước',
        'Iodine không ngấm được vào đó',
      ],
      answer: 1,
      hints: ['Vàng nâu là màu của chính iodine.'],
      solution:
        'Không có tinh bột để tạo màu xanh tím. Phần đó bị che nên không có quang hợp để tạo tinh bột.',
    },
    {
      type: 'multi',
      prompt: 'Ở thí nghiệm thải oxygen, những kết quả nào đúng?',
      options: [
        'Cốc có ánh sáng tạo nhiều bọt khí hơn',
        'Khí thu được làm que đóm còn tàn đỏ sáng lên',
        'Cốc trong tối gần như không có khí',
        'Khí thu được làm que đóm tắt ngay',
      ],
      answers: [0, 1, 2],
      hints: ['Chất khí nào duy trì sự cháy?'],
      solution:
        'Rong có ánh sáng thải $\\mathrm{O_2}$, khí này làm que đóm sáng lên. Trong tối không có quang hợp nên gần như không có khí.',
    },
    {
      type: 'choice',
      prompt: 'Trồng rong trong bể cá cảnh có lợi ích gì liên quan đến bài này?',
      options: [
        'Rong quang hợp thải $\\mathrm{O_2}$ vào nước cho cá hô hấp',
        'Rong hút hết $\\mathrm{O_2}$ để cá thở tốt hơn',
        'Rong làm nước nóng lên',
        'Rong không có ảnh hưởng gì đến cá',
      ],
      answer: 0,
      hints: ['Nhớ lại kết quả của cốc có ánh sáng.'],
      solution:
        'Khi có ánh sáng, rong thải $\\mathrm{O_2}$ làm tăng oxygen hoà tan; rong còn là nơi trú ẩn và thức ăn cho cá.',
    },
  ],
  takeaways: [
    'Lục lạp hình bầu dục, nhìn thấy được ở tế bào biểu bì rong mái chèo.',
    'Sắc tố tan trong dung môi hữu cơ, không tan trong nước; sắc kí giấy tách chúng thành bốn dải: diệp lục b, diệp lục a, xanthophyll, carotene.',
    'Vạch xuất phát phải ở trên mặt dung môi; $R_f$ là tỉ số quãng đường sắc tố và dung môi.',
    'Thử iodine: phần lá được chiếu sáng xanh tím, phần bị che vàng nâu, nên quang hợp tạo tinh bột khi có ánh sáng.',
    'Cành rong dưới ánh sáng thải $\\mathrm{O_2}$, làm que đóm còn tàn đỏ sáng lên.',
  ],
};
