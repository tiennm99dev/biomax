/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tế bào nhân sơ có kích thước rất nhỏ, chưa có màng nhân và bào quan có màng; tỉ lệ S/V lớn giúp chúng trao đổi chất và sinh sản nhanh. Bài học trình bày cấu tạo tế bào vi khuẩn và cách phân biệt vi khuẩn Gram dương, Gram âm.',
  intro:
    'Sinh vật nhân sơ có mặt gần như ở khắp nơi trên Trái Đất, từ suối nước nóng đến ruột người, và số lượng vi sinh vật sống trên cơ thể người rất lớn. Vì sao những tế bào có cấu tạo đơn giản như vậy lại thành công đến thế? Câu trả lời nằm ở kích thước nhỏ bé và cấu tạo của chúng.',
  objectives: [
    'Nêu được đặc điểm chung của tế bào nhân sơ.',
    'Giải thích được ưu thế của kích thước nhỏ qua tỉ lệ $S/V$.',
    'Trình bày được cấu trúc và chức năng các thành phần của tế bào vi khuẩn.',
    'Phân biệt được vi khuẩn Gram dương và vi khuẩn Gram âm, vận dụng vào việc sử dụng kháng sinh.',
  ],
  sections: [
    {
      heading: 'Đặc điểm chung của tế bào nhân sơ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tế bào nhân sơ',
          text: 'Là tế bào chưa có màng nhân bao bọc vật chất di truyền, chưa có hệ thống nội màng, bào quan có màng và khung xương tế bào. Vi khuẩn là đại diện quen thuộc của nhóm này.',
        },
        {
          type: 'list',
          items: [
            'Kích thước nhỏ, khoảng $1 - 5$ µm, thường chỉ quan sát được bằng kính hiển vi.',
            'Hình dạng đa dạng, phổ biến nhất là hình cầu, hình que và hình xoắn.',
            'Trao đổi chất với môi trường nhanh, sinh trưởng và sinh sản nhanh.',
          ],
        },
      ],
    },
    {
      heading: 'Ưu thế của kích thước nhỏ',
      blocks: [
        {
          type: 'p',
          text: 'Mọi chất đi vào hay đi ra khỏi tế bào đều phải qua bề mặt của nó. Diện tích bề mặt $S$ quyết định tốc độ trao đổi, còn thể tích $V$ quyết định nhu cầu của tế bào. Khi tế bào lớn lên, $V$ tăng nhanh hơn $S$, nên mỗi đơn vị thể tích có ít bề mặt phục vụ hơn.',
        },
        {
          type: 'p',
          text: 'Với tế bào hình cầu đường kính $d$:',
        },
        {
          type: 'tex',
          tex: 'S = \\pi d^2, \\quad V = \\dfrac{\\pi d^3}{6} \\quad \\Rightarrow \\quad \\dfrac{S}{V} = \\dfrac{6}{d}',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ưu thế của tế bào nhỏ',
          text: 'Tế bào càng nhỏ thì tỉ lệ $S/V$ càng lớn. Nhờ đó, tế bào nhân sơ trao đổi chất với môi trường và vận chuyển các chất trong tế bào nhanh, nên sinh trưởng và sinh sản nhanh.',
        },
        {
          type: 'table',
          caption: 'Tỉ lệ S/V của tế bào hình cầu',
          head: ['Đường kính $d$ (µm)', '$1$', '$2$', '$5$', '$10$', '$20$'],
          rows: [['$S/V$ (µm⁻¹)', '$6$', '$3$', '$1{,}2$', '$0{,}6$', '$0{,}3$']],
        },
      ],
    },
    {
      heading: 'Cấu tạo tế bào vi khuẩn',
      blocks: [
        {
          type: 'p',
          text: 'Từ ngoài vào trong, tế bào vi khuẩn có thể gồm lông, roi, màng ngoài, thành tế bào, màng tế bào, tế bào chất và vùng nhân. Lông, roi và màng ngoài không có ở mọi vi khuẩn. Chạm vào từng số trên mô hình để tìm hiểu, rồi đổi chế độ để tự kiểm tra.',
        },
        { type: 'widget', name: 'te-bao-vi-khuan' },
        {
          type: 'table',
          caption: 'Cấu trúc và chức năng các thành phần của tế bào vi khuẩn',
          head: ['Thành phần', 'Cấu trúc', 'Chức năng'],
          rows: [
            ['Lông', 'Ngắn, số lượng nhiều', 'Bám dính, tiếp hợp, bám vào tế bào khác'],
            ['Roi', 'Sợi protein dài, một hoặc vài roi', 'Di chuyển'],
            ['Màng ngoài', 'Có ở vi khuẩn Gram âm, chứa lipopolysaccharide', 'Bảo vệ tế bào'],
            [
              'Thành tế bào',
              'Peptidoglycan, dày khoảng $10 - 20$ nm',
              'Giữ hình dạng, bảo vệ tế bào',
            ],
            [
              'Màng tế bào',
              'Lớp kép phospholipid và protein',
              'Trao đổi chất có chọn lọc; nơi diễn ra nhiều quá trình chuyển hoá',
            ],
            [
              'Tế bào chất',
              'Bào tương dạng keo, ribosome, hạt dự trữ; không có bào quan có màng',
              'Nơi diễn ra các phản ứng hoá sinh, tổng hợp protein',
            ],
            [
              'Vùng nhân',
              'Không có màng bao bọc, thường có một phân tử DNA vòng, mạch kép',
              'Mang thông tin di truyền, điều khiển hoạt động của tế bào',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ngoài DNA ở vùng nhân, nhiều vi khuẩn còn có plasmid: các phân tử DNA vòng, mạch kép, kích thước nhỏ, nằm trong tế bào chất. Plasmid không bắt buộc đối với sự sống của tế bào nhưng thường mang gene có lợi như gene kháng kháng sinh. Vì có thể truyền giữa các vi khuẩn qua tiếp hợp, plasmid được dùng làm vector trong kĩ thuật di truyền.',
        },
      ],
    },
    {
      heading: 'Vi khuẩn Gram dương và Gram âm',
      blocks: [
        {
          type: 'p',
          text: 'Dựa vào cấu trúc thành tế bào và kết quả nhuộm Gram, vi khuẩn được chia thành hai nhóm.',
        },
        {
          type: 'table',
          head: ['Đặc điểm', 'Vi khuẩn Gram dương', 'Vi khuẩn Gram âm'],
          rows: [
            ['Lớp peptidoglycan', 'Dày', 'Mỏng'],
            ['Màng ngoài', 'Không có', 'Có'],
            ['Màu khi nhuộm Gram', 'Tím', 'Đỏ'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ý nghĩa với việc dùng kháng sinh',
          text: 'Cấu trúc thành tế bào ảnh hưởng đến mức độ nhạy cảm của vi khuẩn với kháng sinh. Nhuộm Gram giúp thầy thuốc biết nhóm vi khuẩn gây bệnh để chọn kháng sinh phù hợp. Không nên tự ý dùng kháng sinh: dùng sai có thể tạo điều kiện cho vi khuẩn kháng thuốc phát triển.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tế bào càng nhỏ, bề mặt càng rộng so với thể tích',
    instruction:
      'Kéo thanh trượt để đổi đường kính tế bào và quan sát phần tế bào chất nằm sát màng. Đưa về $1$ µm và ghim lại, kéo tới $5$ µm rồi đọc xem tế bào nào có $S/V$ lớn hơn, lớn hơn mấy lần.',
  },
  examples: [
    {
      problem:
        'Hai loài vi khuẩn hình cầu: loài A có đường kính $1$ µm, loài B có đường kính $5$ µm. Tính tỉ lệ $S/V$ của mỗi loài. Theo lí thuyết, loài nào sinh sản nhanh hơn?',
      steps: [
        'Với tế bào hình cầu, $S/V = 6/d$.',
        'Loài A: $S/V = 6/1 = 6$ µm⁻¹.',
        'Loài B: $S/V = 6/5 = 1{,}2$ µm⁻¹.',
        'Tỉ lệ $S/V$ của loài A gấp $6 : 1{,}2 = 5$ lần loài B, nên loài A trao đổi chất với môi trường hiệu quả hơn.',
      ],
      answer: 'Loài A có $S/V$ lớn hơn và theo lí thuyết sinh sản nhanh hơn loài B.',
    },
    {
      problem:
        'Nhuộm Gram một mẫu vi khuẩn, tế bào bắt màu đỏ. Hãy cho biết đặc điểm thành tế bào của vi khuẩn này.',
      steps: [
        'Vi khuẩn bắt màu đỏ khi nhuộm Gram thuộc nhóm Gram âm.',
        'Vi khuẩn Gram âm có lớp peptidoglycan mỏng.',
        'Bên ngoài thành tế bào của chúng còn có màng ngoài chứa lipopolysaccharide.',
      ],
      answer: 'Đây là vi khuẩn Gram âm: lớp peptidoglycan mỏng và có màng ngoài.',
    },
    {
      problem:
        'Vì sao DNA ở vùng nhân là thành phần bắt buộc của tế bào vi khuẩn, còn plasmid thì không?',
      steps: [
        'DNA vùng nhân mang thông tin di truyền cần cho các hoạt động sống cơ bản của tế bào.',
        'Plasmid chỉ mang một số gene bổ sung, chẳng hạn gene kháng kháng sinh.',
        'Không có plasmid, vi khuẩn vẫn sống và sinh sản bình thường, chỉ thiếu những đặc tính do plasmid quy định.',
      ],
      answer:
        'DNA vùng nhân không thể thiếu vì mang thông tin thiết yếu; plasmid chỉ mang gene bổ sung nên có thể có hoặc không.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tế bào nhân sơ thường có kích thước khoảng',
      options: ['$0{,}01 - 0{,}1$ µm', '$1 - 5$ µm', '$10 - 100$ µm', '$1 - 5$ mm'],
      answer: 1,
      hints: ['Tế bào nhân thực khoảng $10 - 100$ µm, tế bào nhân sơ nhỏ hơn.'],
      solution: 'Tế bào nhân sơ khoảng $1 - 5$ µm. Cỡ $10 - 100$ µm là của tế bào nhân thực.',
    },
    {
      type: 'choice',
      prompt: 'Tế bào vi khuẩn được gọi là tế bào nhân sơ chủ yếu vì',
      options: [
        'có thành tế bào bằng peptidoglycan',
        'có kích thước rất nhỏ',
        'có khả năng sinh sản rất nhanh',
        'chưa có màng nhân bao bọc vật chất di truyền',
      ],
      answer: 3,
      hints: ['Tên gọi nói về cấu tạo của nhân, không phải kích thước của tế bào.'],
      solution:
        'Vật chất di truyền của vi khuẩn nằm ở vùng nhân, không có màng nhân bao bọc, nên được gọi là nhân sơ.',
    },
    {
      type: 'number',
      prompt:
        'Một vi khuẩn hình cầu có đường kính $2$ µm. Tính tỉ lệ $S/V$ của nó theo đơn vị µm⁻¹.',
      answer: 3,
      hints: ['Với hình cầu, $S/V = 6/d$.'],
      solution: '$S/V = 6/d = 6/2 = 3$ µm⁻¹.',
    },
    {
      type: 'number',
      prompt:
        'Một vi khuẩn hình cầu đường kính $1$ µm có tỉ lệ $S/V$ gấp bao nhiêu lần tế bào hình cầu đường kính $20$ µm?',
      answer: 20,
      hints: ['Tính $S/V = 6/d$ cho từng tế bào rồi lấy thương.'],
      solution:
        'Tế bào nhỏ: $6/1 = 6$ µm⁻¹; tế bào lớn: $6/20 = 0{,}3$ µm⁻¹. Thương $6 : 0{,}3 = 20$ lần.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần của tế bào vi khuẩn với chức năng của nó.',
      left: ['Roi', 'Lông', 'Thành tế bào', 'Ribosome', 'Plasmid'],
      right: [
        'Tổng hợp protein',
        'Giúp tế bào di chuyển',
        'Mang gene như gene kháng kháng sinh',
        'Giúp bám dính, tiếp hợp',
        'Giữ hình dạng và bảo vệ tế bào',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 4],
        [3, 0],
        [4, 2],
      ],
      hints: ['Roi dài để di chuyển, lông ngắn để bám.'],
      solution:
        'Roi: di chuyển. Lông: bám dính, tiếp hợp. Thành tế bào: giữ hình dạng, bảo vệ. Ribosome: tổng hợp protein. Plasmid: mang gene bổ sung như gene kháng kháng sinh.',
    },
    {
      type: 'multi',
      prompt: 'Những thành phần nào có trong tế bào vi khuẩn?',
      options: ['Ribosome', 'Ti thể', 'Màng tế bào', 'Lưới nội chất', 'DNA dạng vòng'],
      answers: [0, 2, 4],
      hints: ['Tế bào nhân sơ không có bào quan có màng.'],
      solution:
        'Vi khuẩn có ribosome, màng tế bào và DNA vòng. Ti thể và lưới nội chất là bào quan có màng nên không có ở vi khuẩn.',
    },
    {
      type: 'text',
      prompt: 'Thành tế bào vi khuẩn được cấu tạo chủ yếu từ chất nào?',
      accept: ['peptidoglycan', 'peptidoglican'],
      hints: ['Tên chất này bắt đầu bằng "pepti...".'],
      solution: 'Thành tế bào vi khuẩn được cấu tạo từ peptidoglycan.',
    },
    {
      type: 'choice',
      prompt: 'Đặc điểm nào đúng với vi khuẩn Gram dương?',
      options: [
        'Lớp peptidoglycan mỏng, có màng ngoài, bắt màu đỏ',
        'Lớp peptidoglycan mỏng, không có màng ngoài, bắt màu tím',
        'Lớp peptidoglycan dày, không có màng ngoài, bắt màu tím',
        'Lớp peptidoglycan dày, có màng ngoài, bắt màu đỏ',
      ],
      answer: 2,
      hints: ['Màng ngoài là đặc trưng của nhóm vi khuẩn bắt màu đỏ.'],
      solution:
        'Vi khuẩn Gram dương có lớp peptidoglycan dày, không có màng ngoài và bắt màu tím khi nhuộm Gram.',
    },
    {
      type: 'choice',
      prompt:
        'Một bệnh nhân bị nhiễm vi khuẩn. Một kháng sinh trước đây có hiệu quả nay không còn tác dụng với chủng vi khuẩn đó. Giải thích nào hợp lí nhất?',
      options: [
        'Vi khuẩn mất thành tế bào nên kháng sinh không bám được',
        'Vi khuẩn có thể đã nhận gene kháng kháng sinh, chẳng hạn qua plasmid',
        'Vi khuẩn đã hình thành màng nhân để bảo vệ DNA',
        'Kích thước vi khuẩn đã tăng lên tới cỡ tế bào nhân thực',
      ],
      answer: 1,
      hints: ['Thành phần nào của vi khuẩn thường mang gene kháng thuốc và truyền được cho nhau?'],
      solution:
        'Plasmid thường mang gene kháng kháng sinh và có thể truyền giữa các vi khuẩn qua tiếp hợp, nên một chủng trước đây nhạy cảm có thể trở nên kháng thuốc.',
    },
  ],
  takeaways: [
    'Tế bào nhân sơ nhỏ ($1 - 5$ µm), chưa có màng nhân, hệ thống nội màng, bào quan có màng và khung xương tế bào.',
    'Tế bào càng nhỏ, $S/V$ càng lớn ($S/V = 6/d$ với hình cầu), nên trao đổi chất và sinh sản càng nhanh.',
    'Tế bào vi khuẩn gồm các thành phần chính: thành tế bào, màng tế bào, tế bào chất, vùng nhân; có thể có thêm lông, roi, màng ngoài và plasmid.',
    'Gram dương: peptidoglycan dày, không có màng ngoài, bắt màu tím. Gram âm: peptidoglycan mỏng, có màng ngoài, bắt màu đỏ.',
    'Plasmid là DNA vòng nhỏ, thường mang gene kháng kháng sinh và được dùng làm vector trong kĩ thuật di truyền.',
  ],
};
