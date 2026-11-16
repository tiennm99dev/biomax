/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành ba thí nghiệm trồng cây trong chậu để chứng minh tác dụng của loại phân bón, cách bón và hàm lượng phân bón: bố trí có chậu đối chứng, chỉ thay đổi một yếu tố, đo chiều cao cây, tính trung bình và giải thích kết quả.',
  intro:
    'Cùng một túi phân NPK, có người hoà vào nước tưới, có người rắc vào đất; có người bón một thìa, có người bón cả nắm. Làm sao chứng minh bằng thí nghiệm rằng loại phân, cách bón và lượng phân đều ảnh hưởng đến cây trồng?',
  objectives: [
    'Bố trí được thí nghiệm có đối chứng, chỉ thay đổi một yếu tố cần nghiên cứu.',
    'Thực hiện được thí nghiệm chứng minh tác dụng của loại phân bón, cách bón và hàm lượng phân bón đối với cây trồng.',
    'Xử lí được số liệu (giá trị trung bình, mức tăng so với đối chứng) và giải thích được kết quả.',
    'Viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị và nguyên tắc bố trí thí nghiệm',
      blocks: [
        {
          type: 'list',
          items: [
            'Cây: cây ngô (hoặc đậu, cải) non, cùng tuổi, cùng kích thước, khoẻ mạnh.',
            'Dụng cụ: chậu nhựa cùng cỡ, có nhãn; cát sạch hoặc đất nghèo dinh dưỡng; cân, cốc đong, chai nhựa $1$ lít, thước đo.',
            'Phân bón: urea (đạm), super lân (lân), kali clorua (kali), phân NPK.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thí nghiệm có đối chứng',
          text: 'Mỗi thí nghiệm chỉ thay đổi một yếu tố cần nghiên cứu (loại phân, cách bón hoặc hàm lượng); mọi yếu tố khác (giống cây, lượng đất, nước tưới, ánh sáng, nhiệt độ) phải như nhau. Chậu đối chứng không bón phân để so sánh. Mỗi công thức nên làm từ $3$ chậu trở lên (lặp lại) và lấy giá trị trung bình.',
        },
        {
          type: 'p',
          text: 'Chỉ tiêu theo dõi: chiều cao cây, số lá, màu sắc lá, khối lượng cây; đo định kì (ví dụ mỗi $3$ ngày) trong khoảng $2$ đến $3$ tuần, ghi vào bảng.',
        },
      ],
    },
    {
      heading: 'Ba thí nghiệm',
      blocks: [
        {
          type: 'table',
          caption: 'Gợi ý bố trí các thí nghiệm',
          head: ['Thí nghiệm', 'Các công thức', 'Kết quả thường gặp'],
          rows: [
            [
              'Loại phân bón',
              'Đối chứng (không bón); chỉ bón đạm; chỉ bón lân; bón NPK. Cùng lượng phân, cùng cách bón',
              'Cây bón NPK sinh trưởng tốt nhất; thiếu bất kì nguyên tố nào cây cũng kém hơn',
            ],
            [
              'Cách bón',
              'Cùng lượng NPK: hoà tan vào nước rồi tưới; hoặc trộn vào đất rồi tưới nước hằng ngày',
              'Phân hoà tan, cây lấy khoáng nhanh và dễ; phân trộn đất tan chậm, cây hấp thụ từ từ',
            ],
            [
              'Hàm lượng phân bón',
              'Cùng loại, cùng cách bón NPK: không bón; bón ít; bón vừa (theo hướng dẫn); bón quá nhiều',
              'Bón ít cây chậm lớn; bón vừa cây tốt nhất; bón quá nhiều cây bị cháy phân, có thể chết',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Vì sao bón quá nhiều lại gây hại?',
          text: 'Khi nồng độ chất tan trong đất cao hơn trong tế bào lông hút, rễ không hút được nước, thậm chí bị mất nước; cây héo, lá cháy, có thể chết. Đó là hiện tượng "cháy phân".',
        },
        {
          type: 'p',
          text: 'Xử lí số liệu: tính chiều cao trung bình của mỗi công thức, rồi so sánh với đối chứng:',
        },
        {
          type: 'tex',
          tex: '\\text{Mức tăng} = \\dfrac{\\text{TB công thức} - \\text{TB đối chứng}}{\\text{TB đối chứng}} \\cdot 100\\%',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Làm theo nhóm, chọn một trong ba thí nghiệm (hoặc cả ba), theo dõi $2$ đến $3$ tuần. Giữ an toàn: đeo găng tay khi cân phân, rửa tay sau khi làm, không để phân rơi vào mắt, miệng.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Dán nhãn các chậu, cho cùng lượng cát hoặc đất, trồng mỗi chậu một cây non cùng cỡ, đặt nơi có nắng.',
            'Pha dung dịch phân hoặc trộn phân theo từng công thức; tưới cùng lượng nước cho mọi chậu.',
            'Đo chiều cao, đếm số lá, ghi màu lá định kì; chụp ảnh các chậu.',
            'Lập bảng, tính trung bình, mức tăng so với đối chứng, vẽ biểu đồ cột.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo gồm: mục đích, chuẩn bị, cách tiến hành, bảng kết quả và biểu đồ, giải thích kết quả, kết luận về tác dụng của loại phân, cách bón và hàm lượng phân; liên hệ với nguyên tắc bón phân hợp lí.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thí nghiệm ảo với bốn chậu ngô',
    instruction:
      'Chọn yếu tố cần chứng minh, rồi đặt loại phân, lượng phân và cách bón cho bốn chậu. Thí nghiệm chỉ chạy khi bố trí hợp lí. Sau đó kéo thanh "Ngày theo dõi" để xem cây ở mỗi chậu lớn lên thế nào.',
  },
  examples: [
    {
      problem:
        'Kết quả chiều cao cây ngô (cm) sau $21$ ngày, mỗi công thức $3$ chậu: đối chứng $22$; $23$; $24$. Bón NPK $39$; $40$; $41$. Tính chiều cao trung bình mỗi công thức và mức tăng của công thức bón NPK so với đối chứng.',
      steps: [
        'Trung bình đối chứng: $\\dfrac{22 + 23 + 24}{3} = 23$ cm.',
        'Trung bình bón NPK: $\\dfrac{39 + 40 + 41}{3} = 40$ cm.',
        'Mức tăng: $\\dfrac{40 - 23}{23} \\cdot 100\\% \\approx 73{,}9\\%$.',
        'Giải thích: phân NPK cung cấp đủ và cân đối N, P, K, nên cây tổng hợp được nhiều chất hữu cơ, sinh trưởng mạnh hơn.',
      ],
      answer: 'Đối chứng $23$ cm, bón NPK $40$ cm; cây bón NPK cao hơn khoảng $73{,}9\\%$.',
    },
    {
      problem:
        'Một nhóm bố trí thí nghiệm về hàm lượng phân: chậu $1$ không bón, chậu $2$ bón $1$ g NPK hoà tan, chậu $3$ bón $3$ g NPK trộn đất, chậu $4$ bón $8$ g urea hoà tan. Bố trí này có hợp lí không? Sửa lại.',
      steps: [
        'Thí nghiệm về hàm lượng chỉ được thay đổi lượng phân.',
        'Nhóm đã thay đổi cả cách bón (hoà tan, trộn đất) và loại phân (NPK, urea), nên không biết cây khác nhau do yếu tố nào.',
        'Sửa: cả bốn chậu dùng NPK hoà tan vào nước tưới, lần lượt $0$ g; $1$ g; $3$ g; $8$ g; các điều kiện khác như nhau.',
      ],
      answer:
        'Chưa hợp lí vì thay đổi ba yếu tố; cần giữ cùng loại phân, cùng cách bón, chỉ khác lượng phân, có chậu không bón làm đối chứng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm về loại phân bón, chậu đối chứng có vai trò gì?',
      options: [
        'Làm mốc so sánh để thấy tác dụng của phân bón',
        'Để có cây dự phòng khi các chậu khác chết',
        'Để thử lượng phân nhiều nhất',
        'Không có vai trò gì, có thể bỏ',
      ],
      answer: 0,
      hints: ['Không có chậu không bón, ta so sánh cây bón phân với cái gì?'],
      solution:
        'Chậu đối chứng không bón phân, mọi điều kiện khác như các chậu thí nghiệm; so với nó mới thấy được tác dụng của phân bón.',
    },
    {
      type: 'multi',
      prompt: 'Trong thí nghiệm về cách bón phân, những yếu tố nào phải giữ như nhau ở mọi chậu?',
      options: [
        'Giống cây, tuổi và kích thước cây',
        'Loại phân và lượng phân',
        'Lượng đất và lượng nước tưới',
        'Ánh sáng, nhiệt độ',
        'Cách bón phân',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Yếu tố nào là yếu tố cần nghiên cứu trong thí nghiệm này?'],
      solution:
        'Chỉ cách bón được thay đổi; giống cây, loại và lượng phân, đất, nước, ánh sáng, nhiệt độ đều phải như nhau.',
    },
    {
      type: 'number',
      prompt:
        'Ba chậu bón phân đạm có chiều cao cây $30$ cm, $31$ cm và $32$ cm. Chiều cao trung bình là bao nhiêu cm?',
      answer: 31,
      unit: 'cm',
      hints: ['Cộng ba giá trị rồi chia cho số chậu.'],
      solution: 'Trung bình: $\\dfrac{30 + 31 + 32}{3} = 31$ cm.',
    },
    {
      type: 'number',
      prompt:
        'Cây đối chứng cao trung bình $22$ cm, cây bón NPK cao trung bình $38$ cm. Cây bón NPK cao hơn đối chứng bao nhiêu phần trăm? (làm tròn đến hàng phần mười)',
      answer: 72.7,
      tolerance: 0.05,
      unit: '%',
      hints: ['Lấy hiệu hai giá trị trung bình chia cho giá trị của đối chứng.'],
      solution:
        'Mức tăng: $\\dfrac{38 - 22}{22} \\cdot 100\\% = \\dfrac{16}{22} \\cdot 100\\% \\approx 72{,}7\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Chậu bón quá nhiều phân bị héo, lá cháy dù được tưới đủ nước. Giải thích nào đúng?',
      options: [
        'Nồng độ chất tan trong đất cao hơn trong tế bào lông hút, rễ không hút được nước, thậm chí bị mất nước',
        'Phân bón làm đất lạnh đi nên rễ ngừng hoạt động',
        'Cây hấp thụ quá nhiều nước nên tế bào bị vỡ',
        'Phân bón ngăn cản quang hợp vì che mất ánh sáng',
      ],
      answer: 0,
      hints: ['Nước đi từ nơi có nồng độ chất tan thấp đến nơi có nồng độ chất tan cao.'],
      solution:
        'Khi bón quá nhiều, dung dịch đất đặc hơn dịch tế bào lông hút; rễ không hút được nước, có khi nước còn đi ra khỏi rễ. Cây héo, cháy lá: hiện tượng cháy phân.',
    },
    {
      type: 'choice',
      prompt:
        'Cùng lượng NPK, vì sao cây được tưới phân hoà tan lớn nhanh hơn cây có phân trộn vào đất trong những ngày đầu?',
      options: [
        'Phân hoà tan ở sẵn dạng ion, rễ hấp thụ được ngay; phân trộn đất phải tan dần mới được hấp thụ',
        'Phân trộn vào đất bị mất hết tác dụng',
        'Phân hoà tan có nhiều nguyên tố hơn phân trộn đất',
        'Cây chỉ hấp thụ được khoáng qua lá',
      ],
      answer: 0,
      hints: ['Rễ hấp thụ chất khoáng ở dạng nào?'],
      solution:
        'Rễ hấp thụ khoáng ở dạng ion hoà tan. Phân hoà tan trong nước tưới có sẵn ion; phân trộn vào đất tan chậm nên cây hấp thụ từ từ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tiến hành thí nghiệm.',
      items: [
        'Dán nhãn chậu, cho cùng lượng đất, trồng cây non cùng cỡ',
        'Bón phân theo từng công thức, tưới cùng lượng nước',
        'Đo chiều cao, đếm số lá định kì và ghi bảng',
        'Tính trung bình, so sánh với đối chứng, vẽ biểu đồ',
        'Giải thích kết quả và viết báo cáo',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có số liệu đo được rồi mới tính trung bình.'],
      solution:
        'Chuẩn bị chậu và cây, bón phân theo công thức, theo dõi và ghi số liệu, xử lí số liệu, rồi giải thích và viết báo cáo.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm về loại phân, chậu chỉ được bón lân và kali (không có đạm) thường có biểu hiện nào?',
      options: [
        'Cây còi cọc, chậm lớn, lá già vàng sớm',
        'Cây cao nhất trong các chậu',
        'Lá xanh đậm, mọc rất nhiều lá non',
        'Cây không khác gì chậu bón NPK',
      ],
      answer: 0,
      hints: ['Nitrogen cần cho tổng hợp protein và diệp lục.'],
      solution:
        'Thiếu nitrogen, cây không đủ nguyên liệu tổng hợp protein, diệp lục nên còi cọc, chậm lớn, lá già vàng sớm.',
    },
  ],
  takeaways: [
    'Thí nghiệm phải có đối chứng, chỉ thay đổi một yếu tố, lặp lại nhiều chậu và lấy giá trị trung bình.',
    'Loại phân: bón đủ và cân đối N, P, K cho cây sinh trưởng tốt nhất.',
    'Cách bón: phân hoà tan tác dụng nhanh; phân trộn đất tan chậm, cây hấp thụ từ từ.',
    'Hàm lượng: bón quá ít cây chậm lớn, bón quá nhiều gây cháy phân; phải bón đúng liều lượng.',
  ],
};
