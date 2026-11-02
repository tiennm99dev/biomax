/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công nghệ enzyme gồm các kĩ thuật tách chiết, tinh sạch enzyme để dùng trong nghiên cứu và đời sống; enzyme lấy từ thực vật, động vật, vi sinh vật và được ứng dụng nhờ tính đặc hiệu, hiệu quả xúc tác cao, khả năng điều hoà và độ an toàn.',
  intro:
    'Hầm xương với dứa cho thịt nhanh mềm, bột giặt tẩy được vết máu ở nhiệt độ thường, que thử đường huyết cho kết quả sau vài giây. Những việc tưởng không liên quan ấy đều dựa vào enzyme. Con người đã biết tách enzyme khỏi cơ thể sống và dùng chúng như thế nào?',
  objectives: [
    'Nêu được khái niệm công nghệ enzyme và các nguồn nguyên liệu thu enzyme.',
    'Tóm tắt được các thành tựu của công nghệ enzyme qua các giai đoạn.',
    'Phân tích được cấu trúc, cơ chế hoạt động và đặc tính của enzyme làm cơ sở cho ứng dụng.',
    'Giải thích được vì sao phải giữ nhiệt độ, pH phù hợp khi sử dụng enzyme.',
  ],
  sections: [
    {
      heading: 'Công nghệ enzyme và nguồn nguyên liệu',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công nghệ enzyme',
          text: 'Công nghệ enzyme là tập hợp các kĩ thuật tách chiết, tinh sạch enzyme để sử dụng trong nghiên cứu và thực tiễn, như trong y dược, chế biến thực phẩm, thức ăn chăn nuôi, xử lí ô nhiễm và sản xuất chất tẩy rửa.',
        },
        {
          type: 'p',
          text: 'Enzyme do tế bào sống tạo ra, nên nguồn nguyên liệu là các sinh vật. Nhiều nguồn dồi dào, rẻ tiền và không độc hại với con người, sinh vật khác và môi trường.',
        },
        {
          type: 'table',
          caption: 'Ba nguồn nguyên liệu thu enzyme',
          head: ['Nguồn', 'Ví dụ', 'Đặc điểm'],
          rows: [
            [
              'Thực vật',
              'Bromelain từ dứa, papain từ đu đủ xanh, amylase từ hạt nảy mầm',
              'Dễ tìm, nhưng phụ thuộc mùa vụ và diện tích trồng',
            ],
            [
              'Động vật',
              'Pepsin, renin từ dạ dày; trypsin từ tuyến tuỵ',
              'Tận dụng phụ phẩm giết mổ, nhưng nguồn hạn chế',
            ],
            [
              'Vi sinh vật',
              'Amylase từ nấm mốc Aspergillus, protease từ vi khuẩn Bacillus',
              'Sinh trưởng nhanh, nuôi được trong điều kiện nhân tạo với chi phí thấp, enzyme đa dạng; là nguồn chính hiện nay',
            ],
          ],
        },
        { type: 'widget', name: 'nguon-enzyme' },
      ],
    },
    {
      heading: 'Thành tựu của công nghệ enzyme',
      blocks: [
        {
          type: 'table',
          caption: 'Các giai đoạn phát triển',
          head: ['Giai đoạn', 'Thành tựu nổi bật'],
          rows: [
            [
              'Thời kì sơ khai',
              'Con người biết đến quá trình lên men rượu và so sánh với sự tiêu hoá trong cơ thể; dùng đu đủ để làm mềm thịt và chữa nhiễm trùng da.',
            ],
            [
              'Thế kỉ XIX đến những năm $1930$',
              'Tách được các enzyme gây lên men, phân giải tinh bột và protein. Phát hiện dịch chiết mạch nha đại mạch biến đổi tinh bột thành đường ở nhiệt độ phòng. Sản xuất được amylase dạng lỏng và dạng bột, tách chiết và tinh sạch nhiều enzyme.',
            ],
            [
              'Những năm $1930$ đến nay',
              'Dùng cellulase sản xuất nhiên liệu sinh học thế hệ thứ hai từ bã mía, rơm, cỏ. Dùng enzyme làm chín quả, tạo hương thay cho hoá chất độc hại. Tìm enzyme phân giải rác thải nhựa. Enzyme cắt giới hạn mở đường cho công nghệ DNA tái tổ hợp; hệ CRISPR/Cas với enzyme Cas9 dùng để chỉnh sửa gene.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Cơ sở khoa học của ứng dụng enzyme',
      blocks: [
        {
          type: 'p',
          text: 'Hầu hết enzyme là protein. Mỗi enzyme có trung tâm hoạt động với cấu hình không gian phù hợp với cơ chất. Một số enzyme còn có trung tâm điều hoà (enzyme dị lập thể): khi chất điều hoà gắn vào đây, hình dạng trung tâm hoạt động thay đổi, làm enzyme được hoạt hoá hoặc bị ức chế.',
        },
        {
          type: 'table',
          caption: 'Hai mô hình về sự kết hợp giữa enzyme và cơ chất',
          head: ['Mô hình', 'Nội dung'],
          rows: [
            [
              'Chìa khoá và ổ khoá (Fischer, $1894$)',
              'Trung tâm hoạt động có hình dạng cố định, khớp sẵn với cơ chất',
            ],
            [
              'Khớp cảm ứng (Koshland, $1958$)',
              'Trung tâm hoạt động thay đổi hình dạng khi kết hợp với cơ chất, để hai bên khớp với nhau',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Tính đặc hiệu cao: mỗi enzyme chỉ xúc tác cho một hoặc một vài cơ chất có cấu hình phù hợp, nên ít tạo sản phẩm phụ.',
            'Hiệu quả xúc tác cao: enzyme làm giảm năng lượng hoạt hoá; một lượng rất nhỏ có thể biến đổi lượng cơ chất lớn.',
            'Điều kiện êm dịu: hoạt động ở nhiệt độ, áp suất, pH vừa phải, nên tiết kiệm năng lượng và giảm giá thành.',
            'Điều hoà được: chất hoạt hoá, chất ức chế tác động lên trung tâm điều hoà, ứng dụng trong chữa bệnh và kiểm soát sản xuất.',
            'An toàn: enzyme dễ thu từ nguồn rẻ tiền, không độc hại với con người, sinh vật và môi trường.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Enzyme dễ bị biến tính',
          text: 'Hoạt tính enzyme gắn liền với cấu trúc không gian. Nhiệt độ quá cao hoặc pH quá lệch làm enzyme biến tính và mất hoạt tính, thường không phục hồi được. Nhiệt độ thấp chỉ làm enzyme hoạt động chậm lại, nên enzyme thường được bảo quản lạnh.',
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Săn enzyme quanh nhà',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: nhận ra những sản phẩm trong đời sống có dùng enzyme. Làm cá nhân hoặc theo nhóm $2$ đến $3$ bạn trong $1$ tuần. Chuẩn bị: điện thoại để chụp nhãn, sổ ghi chép.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tìm ít nhất $5$ sản phẩm có ghi enzyme trên nhãn hoặc được làm nhờ enzyme: bột giặt, men tiêu hoá, nước mắm, sữa không lactose, phô mai.',
            'Lập bảng gồm tên sản phẩm, enzyme, cơ chất enzyme tác động và nguồn thông tin.',
            'Với mỗi sản phẩm, ghi điều kiện bảo quản hoặc sử dụng trên nhãn, rồi giải thích bằng đặc tính của enzyme.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: bảng kết quả trên một trang giấy và một nhận xét về đặc tính enzyme mà phần lớn các sản phẩm ấy tận dụng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đồ thị hoạt tính enzyme',
    instruction:
      'Chọn enzyme và kéo hai thanh trượt, rồi quan sát điểm trên đồ thị. Tìm điều kiện tối ưu của từng enzyme. Thử đưa nhiệt độ lên thật cao rồi hạ xuống: hoạt tính có quay lại không? Hạ xuống gần $0\\,^\\circ\\mathrm{C}$ rồi làm ấm lên thì sao?',
  },
  examples: [
    {
      problem:
        'Giả sử một phân tử enzyme biến đổi được $1\\,000$ phân tử cơ chất trong mỗi giây và không bị mất hoạt tính. Trong $1$ phút, $5$ phân tử enzyme này biến đổi được bao nhiêu phân tử cơ chất? Kết quả cho thấy đặc tính nào của enzyme?',
      steps: [
        'Một phân tử trong $1$ phút ($60$ giây): $1\\,000 \\cdot 60 = 60\\,000$ phân tử cơ chất.',
        'Năm phân tử: $60\\,000 \\cdot 5 = 300\\,000$ phân tử cơ chất.',
        'Enzyme không bị tiêu hao sau phản ứng, nên một lượng nhỏ biến đổi được lượng cơ chất lớn.',
      ],
      answer: '$300\\,000$ phân tử cơ chất; đây là hiệu quả xúc tác cao của enzyme.',
    },
    {
      problem:
        'Phosphofructokinase-1 (PFK-1) là enzyme dị lập thể điều khiển đường phân. ATP và citrate ức chế PFK-1, còn AMP hoạt hoá enzyme này. Khi tế bào thừa ATP, đường phân thay đổi thế nào? Đây là hình thức điều hoà gì?',
      steps: [
        'ATP dư gắn vào trung tâm điều hoà của PFK-1, làm thay đổi hình dạng trung tâm hoạt động.',
        'Enzyme khó kết hợp với cơ chất hơn, nên đường phân chậm lại và ATP được tạo ra ít đi.',
        'Sản phẩm của con đường quay lại ức chế enzyme của chính con đường đó, tránh tạo thừa.',
      ],
      answer: 'Đường phân chậm lại; đây là điều hoà dị lập thể theo kiểu ức chế ngược.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công nghệ enzyme là gì?',
      options: [
        'Các kĩ thuật tách chiết, tinh sạch enzyme để dùng trong nghiên cứu và thực tiễn',
        'Việc tổng hợp enzyme hoàn toàn bằng phản ứng hoá học vô cơ',
        'Việc nuôi cấy tế bào động vật để tạo cơ quan thay thế',
        'Việc dùng kháng sinh để diệt vi sinh vật có hại',
      ],
      answer: 0,
      hints: ['Enzyme được thu từ sinh vật, rồi mới đem sử dụng.'],
      solution:
        'Công nghệ enzyme gồm các kĩ thuật tách chiết, tinh sạch enzyme để dùng trong nghiên cứu và thực tiễn.',
    },
    {
      type: 'choice',
      prompt: 'Vi sinh vật là nguồn thu enzyme chủ yếu hiện nay vì',
      options: [
        'sinh trưởng nhanh, nuôi được với chi phí thấp, tạo ra nhiều loại enzyme',
        'chỉ tạo ra một loại enzyme duy nhất nên dễ tách',
        'enzyme của chúng không bao giờ bị biến tính',
        'không cần môi trường dinh dưỡng',
      ],
      answer: 0,
      hints: ['Nghĩ tới tốc độ sinh sản của vi khuẩn và giá thành sản xuất.'],
      solution:
        'Vi sinh vật sinh trưởng, sinh sản nhanh, nuôi được quy mô lớn với chi phí thấp, và tạo ra nhiều loại enzyme.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi enzyme với nguồn thu phù hợp.',
      left: ['Bromelain', 'Trypsin', 'Taq polymerase'],
      right: ['Quả và thân dứa', 'Tuyến tuỵ động vật', 'Vi khuẩn suối nước nóng'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Enzyme nào làm được ở nhiệt độ cao thì thường từ sinh vật ưa nhiệt.'],
      solution:
        'Bromelain từ dứa, trypsin từ tuyến tuỵ động vật, Taq polymerase từ vi khuẩn Thermus aquaticus sống ở suối nước nóng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các thành tựu sau theo thứ tự thời gian, từ sớm đến muộn.',
      items: [
        'Dùng đu đủ để làm mềm thịt',
        'Sản xuất amylase dạng lỏng và dạng bột',
        'Dùng Cas9 trong hệ CRISPR/Cas để chỉnh sửa gene',
      ],
      answer: [0, 1, 2],
      hints: ['Chỉnh sửa gene chỉ có thể xuất hiện sau khi đã hiểu về DNA.'],
      solution:
        'Dùng đu đủ làm mềm thịt (thời kì sơ khai), sản xuất amylase (trước những năm $1930$), rồi hệ CRISPR/Cas (gần đây).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi mô hình với nội dung của nó.',
      left: ['Fischer, năm $1894$', 'Koshland, năm $1958$'],
      right: [
        'Trung tâm hoạt động có hình dạng cố định, như ổ khoá với chìa khoá',
        'Trung tâm hoạt động đổi hình dạng khi kết hợp với cơ chất',
      ],
      pairs: [
        [0, 0],
        [1, 1],
      ],
      hints: ['"Khớp cảm ứng" là mô hình ra đời sau.'],
      solution:
        'Fischer: mô hình chìa khoá và ổ khoá, trung tâm hoạt động cố định. Koshland: mô hình khớp cảm ứng, trung tâm hoạt động đổi hình dạng.',
    },
    {
      type: 'multi',
      prompt: 'Những đặc tính nào của enzyme là cơ sở cho việc ứng dụng công nghệ enzyme?',
      options: [
        'Tính đặc hiệu cao',
        'Xúc tác hiệu quả với lượng rất nhỏ',
        'Hoạt động ở điều kiện êm dịu',
        'Bền vững ở mọi nhiệt độ và pH',
        'Có thể được điều hoà bởi chất hoạt hoá, chất ức chế',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Enzyme là protein: protein có chịu được đun sôi không?'],
      solution:
        'Enzyme đặc hiệu, hiệu quả cao, hoạt động ở điều kiện êm dịu và điều hoà được. Enzyme không bền ở mọi điều kiện: nhiệt độ cao, pH quá lệch làm nó biến tính.',
    },
    {
      type: 'choice',
      prompt:
        'Khi chất hoạt hoá gắn vào trung tâm điều hoà của một enzyme dị lập thể đang chưa hoạt động, điều gì xảy ra?',
      options: [
        'Trung tâm hoạt động đổi hình dạng, khớp với cơ chất và phản ứng diễn ra',
        'Chất hoạt hoá bị enzyme biến đổi thành sản phẩm',
        'Enzyme bị biến tính và mất hoạt tính vĩnh viễn',
        'Cơ chất chuyển sang gắn vào trung tâm điều hoà',
      ],
      answer: 0,
      hints: ['Chất điều hoà không phải là cơ chất của enzyme.'],
      solution:
        'Chất hoạt hoá làm enzyme đổi hình dạng, trung tâm hoạt động trở nên khớp với cơ chất, nên enzyme xúc tác được phản ứng.',
    },
    {
      type: 'choice',
      prompt:
        'Một bạn cho amylase nước bọt vào ống nghiệm, đun sôi $5$ phút rồi để nguội về $37\\,^\\circ\\mathrm{C}$. Ống khác giữ trong nước đá rồi làm ấm về $37\\,^\\circ\\mathrm{C}$. Kết quả nào đúng?',
      options: [
        'Ống đun sôi mất hoạt tính, ống ướp lạnh vẫn phân giải được tinh bột',
        'Cả hai ống đều mất hoạt tính',
        'Cả hai ống đều phân giải tinh bột như nhau',
        'Ống đun sôi phân giải tinh bột mạnh hơn ống ướp lạnh',
      ],
      answer: 0,
      hints: ['Thử trong phần khám phá: hạ nhiệt độ và tăng nhiệt độ có giống nhau không?'],
      solution:
        'Đun sôi làm enzyme biến tính, không phục hồi khi để nguội. Nhiệt độ thấp chỉ làm enzyme chậm lại, nên làm ấm thì enzyme hoạt động trở lại.',
    },
    {
      type: 'number',
      prompt:
        'Một phân tử enzyme biến đổi được $600$ phân tử cơ chất mỗi giây. Trong $2$ phút, một phân tử enzyme này biến đổi được bao nhiêu phân tử cơ chất?',
      answer: 72000,
      hints: ['Đổi $2$ phút ra giây.', 'Nhân số phân tử trong một giây với số giây.'],
      solution: '$2$ phút $= 120$ giây; $600 \\cdot 120 = 72\\,000$ phân tử cơ chất.',
    },
  ],
  takeaways: [
    'Công nghệ enzyme gồm các kĩ thuật tách chiết, tinh sạch enzyme để dùng trong nghiên cứu và thực tiễn.',
    'Enzyme thu từ thực vật, động vật và vi sinh vật; vi sinh vật là nguồn chính vì sinh trưởng nhanh, chi phí thấp.',
    'Ứng dụng enzyme dựa vào tính đặc hiệu, hiệu quả xúc tác cao, điều kiện êm dịu, khả năng điều hoà và độ an toàn.',
    'Nhiệt độ quá cao hoặc pH quá lệch làm enzyme biến tính, thường không hồi phục; nhiệt độ thấp chỉ làm enzyme chậm lại.',
  ],
};
