/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các dạng năng lượng trong tế bào, ATP là đồng tiền năng lượng, chuyển hoá vật chất luôn đi kèm chuyển hoá năng lượng; enzyme là chất xúc tác sinh học, làm giảm năng lượng hoạt hoá và chịu ảnh hưởng của nhiệt độ, pH, nồng độ.',
  intro:
    'Chạy một quãng đường dài, cơ thể em cần rất nhiều năng lượng lấy từ thức ăn. Nhưng tế bào cơ không dùng thẳng được năng lượng trong tinh bột hay chất béo. Năng lượng đó phải được chuyển thành dạng nào để dùng ngay, và điều gì giúp các phản ứng ấy xảy ra đủ nhanh ở nhiệt độ cơ thể?',
  objectives: [
    'Phân biệt được động năng và thế năng; kể được các dạng năng lượng trong tế bào.',
    'Mô tả được cấu tạo và chức năng của ATP.',
    'Nêu được khái niệm chuyển hoá vật chất, chuyển hoá năng lượng, đồng hoá và dị hoá.',
    'Trình bày được cấu trúc, cơ chế tác động và vai trò của enzyme.',
    'Giải thích được ảnh hưởng của nhiệt độ, pH, nồng độ cơ chất, nồng độ enzyme và chất điều hoà đến hoạt tính của enzyme.',
  ],
  sections: [
    {
      heading: 'Các dạng năng lượng trong tế bào',
      blocks: [
        {
          type: 'p',
          text: 'Năng lượng là khả năng sinh công, tức là khả năng làm cho vật chất chuyển động. Năng lượng được chia thành hai nhóm: động năng là năng lượng đang sinh công, thế năng là năng lượng dự trữ, sẵn sàng sinh công.',
        },
        {
          type: 'table',
          head: ['Nhóm', 'Trong tế bào'],
          rows: [
            ['Động năng', 'Nhiệt năng, cơ năng (co cơ, vận động của tiêm mao), điện năng'],
            [
              'Thế năng',
              'Hoá năng trong các liên kết hoá học; chênh lệch nồng độ chất và chênh lệch điện thế giữa hai phía màng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Dạng năng lượng chủ yếu',
          text: 'Hoá năng là dạng năng lượng chính được tế bào tích luỹ và sử dụng cho các hoạt động sống. Nhiệt năng phần lớn toả ra môi trường, tế bào không dùng lại được để sinh công.',
        },
      ],
    },
    {
      heading: 'ATP: đồng tiền năng lượng của tế bào',
      blocks: [
        {
          type: 'p',
          text: 'ATP (adenosine triphosphate) gồm ba thành phần: base adenine, đường ribose và ba gốc phosphate. Bấm vào từng số trên hình để xem tên và vai trò.',
        },
        { type: 'widget', name: 'atp' },
        {
          type: 'p',
          text: 'Các gốc phosphate cùng mang điện tích âm, nằm cạnh nhau nên đẩy nhau. Vì thế hai liên kết giữa chúng là liên kết cao năng, rất dễ bị phá vỡ để giải phóng năng lượng. Khi gốc phosphate ngoài cùng tách ra, ATP chuyển thành ADP:',
        },
        {
          type: 'tex',
          tex: '\\mathrm{ATP + H_2O \\longrightarrow ADP + P_i} + \\text{năng lượng}',
        },
        {
          type: 'p',
          text: 'ATP được tái tạo liên tục từ ADP và $\\mathrm{P_i}$ nhờ năng lượng của quá trình phân giải các chất. ATP được tạo ra rồi dùng gần như ngay, nên nó được ví như đồng tiền năng lượng chứ không phải kho dự trữ lâu dài.',
        },
        {
          type: 'list',
          items: [
            'Tổng hợp các chất cần thiết cho tế bào.',
            'Vận chuyển chủ động các chất qua màng.',
            'Sinh công cơ học, như co cơ và vận động của tế bào.',
          ],
        },
      ],
    },
    {
      heading: 'Chuyển hoá vật chất và chuyển hoá năng lượng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khái niệm',
          text: 'Chuyển hoá vật chất là tập hợp các phản ứng hoá học biến đổi chất này thành chất khác trong tế bào. Chuyển hoá năng lượng là sự biến đổi năng lượng từ dạng này sang dạng khác, ví dụ từ hoá năng trong glucose thành hoá năng trong ATP và nhiệt.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Đồng hoá', 'Dị hoá'],
          rows: [
            [
              'Bản chất',
              'Tổng hợp chất phức tạp từ chất đơn giản',
              'Phân giải chất phức tạp thành chất đơn giản',
            ],
            ['Năng lượng', 'Tiêu thụ (lấy từ ATP)', 'Giải phóng (một phần tích vào ATP)'],
            ['Ví dụ', 'Tổng hợp protein từ amino acid', 'Phân giải glucose trong hô hấp tế bào'],
          ],
        },
        {
          type: 'p',
          text: 'Hai quá trình này luôn đi cùng nhau: phá vỡ hay tạo mới một liên kết hoá học đều kèm theo giải phóng hay tích luỹ năng lượng. Vì vậy chuyển hoá vật chất luôn đi kèm chuyển hoá năng lượng. Mỗi lần chuyển đổi đều có một phần năng lượng mất đi dưới dạng nhiệt.',
        },
      ],
    },
    {
      heading: 'Enzyme: cấu trúc và cơ chế tác động',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Enzyme',
          text: 'Enzyme là chất xúc tác sinh học được tổng hợp trong tế bào sống. Enzyme làm tăng tốc độ phản ứng ở điều kiện bình thường của cơ thể và không bị biến đổi sau phản ứng.',
        },
        {
          type: 'p',
          text: 'Đa số enzyme là protein. Một số enzyme chỉ gồm protein; số khác có thêm cofactor là ion kim loại hoặc phân tử hữu cơ (như dẫn xuất của vitamin). Mỗi enzyme có một trung tâm hoạt động với cấu hình không gian phù hợp với cơ chất của nó. Chất chịu tác động của enzyme là cơ chất, nên enzyme có tính đặc hiệu: amylase thuỷ phân tinh bột nhưng không thuỷ phân protein.',
        },
        { type: 'widget', name: 'co-che' },
        {
          type: 'p',
          text: 'Enzyme tác động qua ba giai đoạn: tạo phức hợp enzyme – cơ chất; biến đổi cơ chất thành sản phẩm; giải phóng sản phẩm và enzyme trở lại trạng thái ban đầu.',
        },
      ],
    },
    {
      heading: 'Vai trò của enzyme',
      blocks: [
        {
          type: 'p',
          text: 'Muốn phản ứng xảy ra, cơ chất phải nhận được một lượng năng lượng ban đầu để bước vào trạng thái phản ứng. Lượng đó là năng lượng hoạt hoá. Enzyme làm giảm năng lượng hoạt hoá, nhờ đó phản ứng xảy ra nhanh ở nhiệt độ của cơ thể. Thiếu enzyme, các phản ứng trong tế bào diễn ra quá chậm, không duy trì được sự sống.',
        },
        { type: 'widget', name: 'nang-luong-hoat-hoa' },
      ],
    },
    {
      heading: 'Các yếu tố ảnh hưởng đến hoạt tính enzyme',
      blocks: [
        {
          type: 'table',
          head: ['Yếu tố', 'Ảnh hưởng'],
          rows: [
            [
              'Nhiệt độ',
              'Mỗi enzyme có một nhiệt độ thích hợp, ở đó hoạt tính cao nhất. Nhiệt độ thấp làm enzyme hoạt động yếu; quá cao làm enzyme biến tính, mất hoạt tính.',
            ],
            [
              'Độ pH',
              'Mỗi enzyme có khoảng pH thích hợp: pepsin ở dạ dày hoạt động trong môi trường acid, amylase nước bọt trong môi trường gần trung tính.',
            ],
            [
              'Nồng độ cơ chất',
              'Với lượng enzyme xác định, tăng cơ chất làm tăng hoạt tính đến một mức thì không tăng nữa, vì mọi trung tâm hoạt động đã được dùng hết.',
            ],
            [
              'Nồng độ enzyme',
              'Với lượng cơ chất xác định, tăng enzyme làm tăng tốc độ phản ứng đến một mức thì không tăng nữa, vì cơ chất không đủ.',
            ],
            [
              'Chất hoạt hoá, chất ức chế',
              'Chất hoạt hoá làm tăng hoạt tính; chất ức chế làm giảm hoặc làm mất hoạt tính của enzyme.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tế bào điều hoà chuyển hoá bằng enzyme',
          text: 'Tế bào điều chỉnh tốc độ chuyển hoá bằng cách tổng hợp enzyme, dùng chất hoạt hoá và chất ức chế. Ức chế ngược là kiểu điều hoà mà sản phẩm cuối cùng của một chuỗi phản ứng, khi đã đủ, quay lại ức chế enzyme ở đầu chuỗi. Enzyme còn được xếp vào đúng những vị trí có điều kiện thích hợp, như trong bào quan hay trên màng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Hoạt tính enzyme theo điều kiện',
    instruction:
      'Chọn yếu tố muốn đổi, rồi kéo thanh trượt và xem điểm chạy trên đồ thị. Số liệu là mô hình để so sánh, không phải kết quả đo. Làm lần lượt các việc trong danh sách bên dưới.',
  },
  examples: [
    {
      problem:
        'Một phản ứng cần năng lượng hoạt hoá $75$ kJ/mol khi không có enzyme và $30$ kJ/mol khi có enzyme. Năng lượng hoạt hoá giảm bao nhiêu và tỉ lệ giảm là bao nhiêu phần trăm?',
      steps: [
        'Phần giảm: $75 - 30 = 45$ kJ/mol.',
        'Tỉ lệ giảm: $\\dfrac{45}{75} \\cdot 100\\% = 60\\%$.',
        'Enzyme chỉ làm giảm năng lượng hoạt hoá, không thay đổi hiệu năng lượng giữa cơ chất và sản phẩm.',
      ],
      answer: 'Giảm $45$ kJ/mol, tức giảm $60\\%$.',
    },
    {
      problem:
        'Hai ống có amylase và tinh bột: ống A đặt trong nước đá, ống B đun sôi rồi để nguội. Sau đó đưa cả hai về $37\\,^\\circ\\mathrm{C}$. Ống nào tinh bột bị phân giải? Vì sao?',
      steps: [
        'Ở nhiệt độ thấp, enzyme hoạt động rất yếu nhưng cấu trúc vẫn giữ nguyên.',
        'Đun sôi làm enzyme biến tính: cấu hình không gian bị phá huỷ, trung tâm hoạt động không còn khớp với cơ chất.',
        'Đưa về $37\\,^\\circ\\mathrm{C}$, enzyme ở ống A hoạt động trở lại; enzyme ở ống B không phục hồi được.',
      ],
      answer: 'Tinh bột bị phân giải ở ống A; ống B thì không.',
    },
    {
      problem:
        'Chuỗi phản ứng $A \\to B \\to C \\to D$, mỗi bước có một enzyme riêng. Nếu chất $D$ tích luỹ quá nhiều thì tế bào điều hoà thế nào theo kiểu ức chế ngược?',
      steps: [
        'Sản phẩm cuối cùng của chuỗi là $D$.',
        '$D$ liên kết với enzyme xúc tác bước đầu tiên $A \\to B$ và ức chế enzyme này.',
        'Chuỗi phản ứng chậm lại nên $D$ không tạo ra thêm, $A$ không bị dùng phí.',
        'Khi $D$ được dùng bớt, enzyme hoạt động trở lại.',
      ],
      answer: '$D$ ức chế enzyme ở bước đầu tiên của chuỗi.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Dạng năng lượng nào được tế bào tích luỹ và dùng chủ yếu cho các hoạt động sống?',
      options: ['Cơ năng', 'Nhiệt năng', 'Hoá năng', 'Quang năng'],
      answer: 2,
      hints: ['Năng lượng nằm trong các liên kết hoá học của ATP, glucose.'],
      solution: 'Đó là hoá năng, nằm trong các liên kết hoá học.',
    },
    {
      type: 'multi',
      prompt: 'Những thành phần nào có trong một phân tử ATP?',
      options: [
        'Adenine',
        'Đường deoxyribose',
        'Đường ribose',
        'Ba gốc phosphate',
        'Hai gốc phosphate',
      ],
      answers: [0, 2, 3],
      hints: ['ATP là adenosine triphosphate; "tri" nghĩa là ba.'],
      solution: 'ATP gồm adenine, đường ribose và ba gốc phosphate.',
    },
    {
      type: 'number',
      prompt: 'Một phân tử ATP có bao nhiêu liên kết cao năng?',
      answer: 2,
      hints: ['Liên kết cao năng nằm giữa hai gốc phosphate liên tiếp. Có ba gốc phosphate.'],
      solution: 'Ba gốc phosphate nối tiếp nhau tạo nên $2$ liên kết cao năng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao ATP được gọi là "đồng tiền" năng lượng của tế bào?',
      options: [
        'Vì ATP là chất dự trữ năng lượng lâu dài của tế bào',
        'Vì ATP được tạo ra liên tục và dùng ngay cho hầu hết các hoạt động sống',
        'Vì ATP chỉ dùng cho vận chuyển chủ động qua màng',
        'Vì ATP có màu giống kim loại',
      ],
      answer: 1,
      hints: ['Hãy nghĩ tiền dùng để trao đổi hằng ngày khác với của để dành thế nào.'],
      solution:
        'ATP sinh ra liên tục, dùng ngay gần như mọi nơi trong tế bào, giống đồng tiền lưu thông. Dự trữ lâu dài là việc của tinh bột, glycogen, lipid.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi quá trình với mô tả đúng của nó.',
      left: [
        'Tổng hợp protein từ amino acid',
        'Phân giải glucose thành $\\mathrm{CO_2}$ và nước',
        'Quang hợp tạo glucose',
      ],
      right: [
        'Dị hoá, giải phóng năng lượng và một phần tích vào ATP',
        'Đồng hoá, dùng ATP để tạo liên kết peptide',
        'Đồng hoá, dùng năng lượng ánh sáng để tạo carbohydrate',
      ],
      pairs: [
        [0, 1],
        [1, 0],
        [2, 2],
      ],
      hints: ['Đồng hoá xây chất phức tạp, dị hoá phá chất phức tạp.'],
      solution: 'Tổng hợp protein và quang hợp là đồng hoá; phân giải glucose là dị hoá.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn tác động của enzyme theo đúng thứ tự.',
      items: [
        'Sản phẩm tách khỏi enzyme, enzyme trở lại ban đầu',
        'Cơ chất liên kết vào trung tâm hoạt động',
        'Cơ chất biến đổi thành sản phẩm',
      ],
      answer: [1, 2, 0],
      hints: ['Enzyme phải gặp cơ chất trước khi xúc tác.'],
      solution:
        'Tạo phức hợp enzyme – cơ chất, biến đổi cơ chất thành sản phẩm, rồi giải phóng sản phẩm.',
    },
    {
      type: 'choice',
      prompt: 'Enzyme làm tăng tốc độ phản ứng bằng cách nào?',
      options: [
        'Cung cấp thêm nhiệt cho phản ứng',
        'Giảm năng lượng hoạt hoá của phản ứng',
        'Tăng hiệu năng lượng giữa cơ chất và sản phẩm',
        'Bị tiêu hao dần để sinh ra sản phẩm',
      ],
      answer: 1,
      hints: ['Trong đồ thị năng lượng, enzyme làm thay đổi phần nào?'],
      solution:
        'Enzyme hạ đỉnh năng lượng, tức giảm năng lượng hoạt hoá. Hiệu năng lượng giữa cơ chất và sản phẩm không đổi và enzyme không bị tiêu hao.',
    },
    {
      type: 'number',
      prompt:
        'Một phản ứng có năng lượng hoạt hoá $80$ kJ/mol khi không có enzyme. Có enzyme, năng lượng hoạt hoá chỉ bằng $25\\%$ giá trị đó. Enzyme làm năng lượng hoạt hoá giảm bao nhiêu kJ/mol?',
      answer: 60,
      unit: 'kJ/mol',
      hints: ['Tính $25\\%$ của $80$ rồi lấy $80$ trừ đi.'],
      solution: 'Có enzyme: $80 \\cdot 25\\% = 20$ kJ/mol. Phần giảm: $80 - 20 = 60$ kJ/mol.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi sốt rất cao và kéo dài, cơ thể có thể nguy hiểm đến tính mạng?',
      options: [
        'Enzyme bị biến tính nên nhiều phản ứng trong tế bào bị rối loạn',
        'Nhiệt độ cao làm enzyme hoạt động mạnh vô hạn',
        'Nhiệt độ cao làm tăng số trung tâm hoạt động của enzyme',
        'Nhiệt độ cao làm tế bào ngừng tạo nhiệt',
      ],
      answer: 0,
      hints: ['Đa số enzyme là protein. Protein gặp nhiệt độ quá cao thì sao?'],
      solution:
        'Nhiệt độ quá cao phá vỡ cấu hình không gian của enzyme, làm mất hoạt tính, nên nhiều phản ứng thiết yếu bị rối loạn.',
    },
    {
      type: 'text',
      prompt:
        'Sản phẩm cuối của một chuỗi phản ứng quay lại ức chế enzyme ở đầu chuỗi. Kiểu điều hoà này gọi là gì?',
      accept: ['ức chế ngược', 'điều hoà ngược', 'ức chế phản hồi', 'điều hòa ngược âm'],
      hints: ['Sản phẩm "quay ngược" lại đầu chuỗi và làm enzyme giảm hoạt động.'],
      solution: 'Đó là ức chế ngược.',
    },
    {
      type: 'choice',
      prompt:
        'Với lượng enzyme xác định, tăng dần nồng độ cơ chất thì đồ thị tốc độ phản ứng thay đổi thế nào?',
      options: [
        'Tăng mãi không dừng',
        'Giảm dần ngay từ đầu',
        'Không đổi từ đầu đến cuối',
        'Tăng rồi chững lại ở một mức',
      ],
      answer: 3,
      hints: ['Khi mọi trung tâm hoạt động đều bận, thêm cơ chất có giúp gì không?'],
      solution:
        'Tốc độ tăng đến khi mọi trung tâm hoạt động được dùng hết, sau đó chững lại vì lượng enzyme giới hạn.',
    },
  ],
  takeaways: [
    'Năng lượng trong tế bào có động năng và thế năng; hoá năng là dạng được tích luỹ và dùng chủ yếu.',
    'ATP gồm adenine, ribose và ba gốc phosphate, có hai liên kết cao năng, là đồng tiền năng lượng.',
    'Chuyển hoá vật chất gồm đồng hoá và dị hoá, luôn đi kèm chuyển hoá năng lượng.',
    'Enzyme là chất xúc tác sinh học, có tính đặc hiệu, tác động qua ba giai đoạn và làm giảm năng lượng hoạt hoá.',
    'Hoạt tính enzyme phụ thuộc vào nhiệt độ, pH, nồng độ cơ chất, nồng độ enzyme, chất hoạt hoá và chất ức chế.',
    'Tế bào điều hoà chuyển hoá qua enzyme, trong đó có ức chế ngược.',
  ],
};
