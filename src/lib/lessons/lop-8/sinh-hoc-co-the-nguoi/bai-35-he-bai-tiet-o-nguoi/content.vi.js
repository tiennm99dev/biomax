/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm bài tiết và các cơ quan bài tiết; cấu tạo hệ bài tiết nước tiểu, cấu tạo thận và đơn vị chức năng của thận; quá trình tạo thành nước tiểu gồm lọc máu, hấp thụ lại và bài tiết tiếp; một số bệnh về hệ bài tiết, cách phòng tránh và thành tựu chạy thận nhân tạo, ghép thận.',
  intro:
    'Mỗi ngày, các tế bào trong cơ thể em liên tục tạo ra chất thải như urea, creatinine, carbon dioxide. Nếu các chất này không được thải ra ngoài, chúng sẽ tích tụ và gây độc cho cơ thể. Mỗi ngày, hai quả thận nhỏ cỡ nắm tay tạo ra khoảng 170 đến 180 lít nước tiểu đầu, vậy mà cơ thể chỉ thải ra khoảng 1,5 lít nước tiểu. Thận làm điều đó bằng cách nào?',
  objectives: [
    'Nêu được khái niệm và vai trò của bài tiết; kể tên các cơ quan bài tiết chủ yếu.',
    'Nêu được các bộ phận của hệ bài tiết nước tiểu, cấu tạo thận và đơn vị chức năng của thận.',
    'Mô tả được quá trình tạo thành nước tiểu gồm lọc máu, hấp thụ lại và bài tiết tiếp.',
    'Trình bày được một số bệnh về hệ bài tiết, cách phòng tránh; nêu được thành tựu ghép thận, chạy thận nhân tạo.',
  ],
  sections: [
    {
      heading: 'Bài tiết và các cơ quan bài tiết',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bài tiết',
          text: 'Bài tiết là quá trình lọc và thải ra môi trường các chất cặn bã do hoạt động trao đổi chất của tế bào tạo ra, cùng một số chất được đưa vào cơ thể quá liều lượng (chất thuốc, ion thừa…).',
        },
        {
          type: 'p',
          text: 'Nhờ bài tiết, các chất thải không tích tụ trong cơ thể, các tính chất của môi trường trong (nồng độ các chất, độ pH…) luôn được giữ ổn định, giúp tế bào và cơ thể hoạt động bình thường.',
        },
        {
          type: 'table',
          caption: 'Các cơ quan bài tiết chủ yếu',
          head: ['Cơ quan', 'Sản phẩm bài tiết chủ yếu'],
          rows: [
            ['Phổi', 'Khí carbon dioxide (CO₂), hơi nước'],
            ['Da', 'Mồ hôi (nước, muối khoáng, một ít urea)'],
            ['Thận', 'Nước tiểu (nước, urea, creatinine, muối khoáng thừa…)'],
          ],
        },
      ],
    },
    {
      heading: 'Cấu tạo hệ bài tiết nước tiểu',
      blocks: [
        {
          type: 'p',
          text: 'Hệ bài tiết nước tiểu gồm hai quả thận, hai ống dẫn nước tiểu, bóng đái (bàng quang) và ống đái. Thận là cơ quan quan trọng nhất: thận lọc máu và tạo thành nước tiểu.',
        },
        {
          type: 'list',
          items: [
            'Thận có hình hạt đậu, gồm ba phần: phần vỏ, phần tủy và bể thận.',
            'Mỗi quả thận có khoảng một triệu đơn vị chức năng (nephron) để lọc máu và tạo nước tiểu.',
            'Mỗi đơn vị chức năng gồm cầu thận (một búi mao mạch), nang cầu thận (bọc quanh cầu thận) và ống thận.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Đường đi của nước tiểu',
          text: 'Nước tiểu chính thức từ các ống thận đổ vào bể thận → ống dẫn nước tiểu → tích trữ ở bóng đái → thải ra ngoài qua ống đái.',
        },
      ],
    },
    {
      heading: 'Quá trình tạo thành nước tiểu',
      blocks: [
        {
          type: 'p',
          text: 'Nước tiểu được tạo thành ở các đơn vị chức năng của thận qua ba quá trình nối tiếp nhau.',
        },
        {
          type: 'table',
          caption: 'Ba quá trình tạo thành nước tiểu',
          head: ['Quá trình', 'Nơi diễn ra', 'Diễn biến', 'Kết quả'],
          rows: [
            [
              'Lọc máu',
              'Cầu thận',
              'Nước và các chất hòa tan có kích thước nhỏ lọt qua lỗ lọc của thành mao mạch vào nang cầu thận; tế bào máu và protein không lọt qua được',
              'Nước tiểu đầu',
            ],
            [
              'Hấp thụ lại',
              'Ống thận',
              'Các chất cần thiết (toàn bộ glucose, phần lớn nước và các ion Na⁺, Cl⁻…) được hấp thụ lại vào máu',
              'Nước tiểu đầu bớt dần chất cần thiết',
            ],
            [
              'Bài tiết tiếp',
              'Ống thận',
              'Các chất cặn bã, chất độc, chất thừa (creatinine, chất thuốc, ion H⁺, K⁺ thừa…) được bài tiết tiếp từ máu vào ống thận',
              'Nước tiểu chính thức',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'So sánh hai loại nước tiểu',
          text: 'Nước tiểu đầu có nồng độ các chất hòa tan loãng, còn chứa nhiều chất dinh dưỡng (glucose…). Nước tiểu chính thức đậm đặc các chất cặn bã, chất độc, gần như không còn chất dinh dưỡng. Ở người khỏe mạnh, nước tiểu chính thức không có tế bào máu, protein và glucose.',
        },
      ],
    },
    {
      heading: 'Bệnh về hệ bài tiết và cách bảo vệ',
      blocks: [
        {
          type: 'table',
          caption: 'Một số bệnh thường gặp',
          head: ['Bệnh', 'Nguyên nhân', 'Hậu quả'],
          rows: [
            [
              'Sỏi thận',
              'Các chất như calcium, oxalate, uric acid… kết tinh lại do uống ít nước, ăn quá mặn, nhịn tiểu lâu',
              'Sỏi gây đau, cản trở dòng nước tiểu, có thể gây viêm, tổn thương thận',
            ],
            [
              'Viêm cầu thận',
              'Thường do vi khuẩn (liên cầu khuẩn) gây viêm họng, viêm da… dẫn đến cầu thận bị tổn thương',
              'Quá trình lọc máu bị trì trệ, nước tiểu có thể có máu, protein',
            ],
            [
              'Suy thận',
              'Hậu quả của các bệnh thận kéo dài, tiểu đường, tăng huyết áp, lạm dụng thuốc…',
              'Thận giảm hoặc mất khả năng lọc máu, chất thải tích tụ gây ngộ độc cơ thể',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Uống đủ nước mỗi ngày, không nhịn tiểu lâu.',
            'Ăn uống hợp lí: không ăn quá mặn, quá chua, không ăn quá nhiều thức ăn chứa chất tạo sỏi; không ăn thức ăn ôi thiu, nhiễm chất độc.',
            'Giữ vệ sinh cơ thể và vệ sinh hệ bài tiết; điều trị dứt điểm các bệnh viêm họng, viêm da.',
            'Không tự ý dùng thuốc, nhất là dùng thuốc kéo dài.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thành tựu chạy thận nhân tạo và ghép thận',
          text: 'Người suy thận nặng có thể được chạy thận nhân tạo: máu được dẫn qua một màng lọc ở máy để loại bỏ chất thải rồi đưa trở lại cơ thể. Ghép thận là thay thận hỏng bằng một quả thận khỏe của người hiến tặng; ở Việt Nam, ca ghép thận đầu tiên được thực hiện năm 1992. Một người khỏe mạnh vẫn sống bình thường với một quả thận.',
        },
      ],
    },
  ],
  explore: {
    title: 'Theo dõi từng chất qua đơn vị chức năng của thận',
    instruction:
      'Chọn một chất, dự đoán chất đó có trong nước tiểu chính thức hay không, rồi bấm "Bước tiếp" để đi qua ba quá trình: lọc máu, hấp thụ lại và bài tiết tiếp. Theo dõi đủ tám chất để hoàn thành bảng so sánh.',
  },
  examples: [
    {
      problem:
        'Kết quả xét nghiệm nước tiểu của một người có protein và hồng cầu. Hãy cho biết bộ phận nào của thận có thể bị tổn thương. Giải thích.',
      steps: [
        'Ở người khỏe mạnh, protein và tế bào máu có kích thước lớn, không lọt qua lỗ lọc của thành mao mạch cầu thận nên không có trong nước tiểu đầu.',
        'Các chất không có trong nước tiểu đầu thì cũng không thể có trong nước tiểu chính thức.',
        'Nước tiểu có protein và hồng cầu chứng tỏ lỗ lọc ở cầu thận đã bị tổn thương, để lọt các thành phần lớn.',
      ],
      answer:
        'Cầu thận có thể bị tổn thương (ví dụ viêm cầu thận) làm các lỗ lọc bị hỏng, protein và hồng cầu lọt vào nước tiểu.',
    },
    {
      problem:
        'Mỗi ngày thận tạo ra khoảng $180$ lít nước tiểu đầu nhưng chỉ thải ra khoảng $1{,}5$ lít nước tiểu chính thức. Tính lượng nước tiểu đầu đã được hấp thụ lại mỗi ngày và cho biết điều đó có ý nghĩa gì.',
      steps: [
        'Lượng được hấp thụ lại: $180 - 1{,}5 = 178{,}5$ lít.',
        'Tỉ lệ được hấp thụ lại: $\\dfrac{178{,}5}{180} \\cdot 100\\% \\approx 99{,}2\\%$.',
        'Phần lớn nước và các chất cần thiết được thu hồi về máu, chỉ một lượng nhỏ cùng các chất thải được thải ra ngoài.',
      ],
      answer:
        'Khoảng $178{,}5$ lít (hơn $99\\%$) được hấp thụ lại, giúp cơ thể không bị mất nước và chất cần thiết.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp đường đi của nước tiểu chính thức từ nơi tạo thành ra ngoài cơ thể.',
      items: ['Bóng đái', 'Ống thận', 'Ống đái', 'Bể thận', 'Ống dẫn nước tiểu'],
      answer: [1, 3, 4, 0, 2],
      hints: ['Nước tiểu chính thức tạo thành ở ống thận rồi đổ vào bể thận.'],
      solution: 'Ống thận → bể thận → ống dẫn nước tiểu → bóng đái → ống đái → ra ngoài.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi quá trình tạo thành nước tiểu với nơi diễn ra và kết quả của nó.',
      left: ['Lọc máu', 'Hấp thụ lại', 'Bài tiết tiếp'],
      right: [
        'Ở ống thận; tạo thành nước tiểu chính thức',
        'Ở cầu thận; tạo thành nước tiểu đầu',
        'Ở ống thận; đưa chất cần thiết trở về máu',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Nước tiểu đầu hình thành ngay sau khi máu được lọc.'],
      solution:
        'Lọc máu ở cầu thận tạo nước tiểu đầu; hấp thụ lại ở ống thận đưa chất cần thiết về máu; bài tiết tiếp ở ống thận tạo nước tiểu chính thức.',
    },
    {
      type: 'choice',
      prompt:
        'Ở người khỏe mạnh, chất nào có trong nước tiểu đầu nhưng không có trong nước tiểu chính thức?',
      options: ['Protein', 'Glucose', 'Urea', 'Hồng cầu'],
      answer: 1,
      hints: [
        'Protein và hồng cầu có lọt qua được lỗ lọc của cầu thận không?',
        'Chất cần tìm là chất dinh dưỡng được hấp thụ lại toàn bộ.',
      ],
      solution:
        'Glucose lọt qua cầu thận nên có trong nước tiểu đầu, nhưng được hấp thụ lại toàn bộ ở ống thận nên không có trong nước tiểu chính thức. Protein và hồng cầu không có trong cả hai; urea có trong cả hai.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các cơ quan tham gia bài tiết ở người.',
      options: ['Phổi', 'Da', 'Thận', 'Dạ dày', 'Tim'],
      answers: [0, 1, 2],
      hints: ['Cơ quan nào thải CO₂? Cơ quan nào thải mồ hôi?'],
      solution: 'Phổi thải CO₂ và hơi nước, da thải mồ hôi, thận thải nước tiểu.',
    },
    {
      type: 'number',
      prompt:
        'Hai quả thận của một người có tổng cộng khoảng bao nhiêu triệu đơn vị chức năng, biết mỗi quả thận có khoảng $1$ triệu đơn vị chức năng?',
      answer: 2,
      unit: 'triệu',
      hints: ['Mỗi người có hai quả thận.'],
      solution: '$2 \\cdot 1 = 2$ triệu đơn vị chức năng.',
    },
    {
      type: 'number',
      prompt:
        'Trong một ngày, thận của một người tạo ra $170$ lít nước tiểu đầu và thải ra $1{,}7$ lít nước tiểu chính thức. Lượng nước tiểu chính thức bằng bao nhiêu phần trăm lượng nước tiểu đầu?',
      answer: 1,
      unit: '%',
      hints: ['Lấy lượng nước tiểu chính thức chia cho lượng nước tiểu đầu rồi nhân $100\\%$.'],
      solution: '$\\dfrac{1{,}7}{170} \\cdot 100\\% = 1\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Thói quen nào làm tăng nguy cơ mắc bệnh sỏi thận?',
      options: [
        'Uống đủ nước mỗi ngày',
        'Ăn quá mặn và thường xuyên nhịn tiểu',
        'Ăn nhiều rau xanh, hoa quả',
        'Tập thể dục đều đặn',
      ],
      answer: 1,
      hints: ['Sỏi hình thành khi các chất trong nước tiểu kết tinh lại.'],
      solution:
        'Ăn quá mặn và nhịn tiểu lâu làm các chất trong nước tiểu đậm đặc, dễ kết tinh thành sỏi.',
    },
    {
      type: 'choice',
      prompt: 'Người bị suy thận nặng có thể được điều trị bằng biện pháp nào?',
      options: [
        'Uống thật nhiều nước',
        'Chạy thận nhân tạo hoặc ghép thận',
        'Ăn thật nhiều muối',
        'Dùng thuốc kháng sinh lâu dài',
      ],
      answer: 1,
      hints: ['Khi thận không lọc được máu, cần thay thế chức năng lọc của thận.'],
      solution:
        'Chạy thận nhân tạo lọc máu thay thận; ghép thận thay thận hỏng bằng thận khỏe của người hiến tặng.',
    },
    {
      type: 'text',
      prompt:
        'Quá trình tạo thành nước tiểu gồm lọc máu, hấp thụ lại và ... (điền tên quá trình thứ ba).',
      accept: ['bài tiết tiếp', 'bai tiet tiep'],
      hints: ['Ở quá trình này, ống thận đưa thêm chất thải, chất thuốc từ máu vào nước tiểu.'],
      solution: 'Quá trình thứ ba là bài tiết tiếp, tạo thành nước tiểu chính thức.',
    },
  ],
  takeaways: [
    'Bài tiết là lọc và thải ra ngoài các chất cặn bã, chất thừa; các cơ quan bài tiết chủ yếu là phổi, da, thận.',
    'Hệ bài tiết nước tiểu gồm thận, ống dẫn nước tiểu, bóng đái, ống đái; mỗi quả thận có khoảng một triệu đơn vị chức năng gồm cầu thận, nang cầu thận và ống thận.',
    'Nước tiểu được tạo thành qua ba quá trình: lọc máu ở cầu thận (nước tiểu đầu), hấp thụ lại và bài tiết tiếp ở ống thận (nước tiểu chính thức).',
    'Sỏi thận, viêm cầu thận, suy thận là các bệnh thường gặp; cần uống đủ nước, ăn uống hợp lí, không nhịn tiểu, không lạm dụng thuốc.',
  ],
};
