/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vi sinh vật là những sinh vật rất nhỏ, đa dạng về cấu tạo, có bốn kiểu dinh dưỡng theo nguồn năng lượng và nguồn carbon; người ta nghiên cứu chúng bằng phương pháp quan sát, phân lập và nuôi cấy.',
  intro:
    'Có vi khuẩn sống trong suối nước nóng hay hang sâu không ánh sáng, nơi không loài cây nào tồn tại được. Chúng lấy năng lượng và carbon từ đâu, và làm sao người ta nhìn thấy, tách riêng được những sinh vật nhỏ đến vậy?',
  objectives: [
    'Nêu được khái niệm và đặc điểm chung của vi sinh vật, kể tên được các nhóm vi sinh vật.',
    'Phân biệt được bốn kiểu dinh dưỡng theo nguồn năng lượng và nguồn carbon.',
    'Trình bày được phương pháp quan sát và mục đích của soi tươi, nhuộm đơn, nhuộm Gram.',
    'Trình bày được phương pháp phân lập, nuôi cấy vi sinh vật và khái niệm khuẩn lạc.',
  ],
  sections: [
    {
      heading: 'Vi sinh vật và sự đa dạng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vi sinh vật',
          text: 'Vi sinh vật là những sinh vật có kích thước rất nhỏ, thường chỉ quan sát được bằng kính hiển vi.',
        },
        {
          type: 'table',
          caption: 'Các nhóm vi sinh vật theo cấu tạo tế bào',
          head: ['Nhóm', 'Đại diện'],
          rows: [
            ['Nhân sơ', 'Vi khuẩn, Archaea (vi khuẩn cổ)'],
            ['Nhân thực', 'Vi nấm (nấm men, nấm mốc), vi tảo, động vật nguyên sinh'],
          ],
        },
        {
          type: 'list',
          items: [
            'Kích thước nhỏ, đa số có cấu tạo đơn bào nhân sơ hoặc nhân thực.',
            'Tốc độ chuyển hoá vật chất và năng lượng nhanh, sinh trưởng và sinh sản nhanh.',
            'Số lượng nhiều: riêng vi khuẩn đã chiếm một phần rất lớn sinh khối trên Trái Đất.',
            'Phân bố rộng: gần như ở khắp nơi trên Trái Đất và trên cơ thể các sinh vật khác, kể cả nơi có điều kiện khắc nghiệt.',
          ],
        },
      ],
    },
    {
      heading: 'Các kiểu dinh dưỡng',
      blocks: [
        {
          type: 'p',
          text: 'Mọi sinh vật đều cần năng lượng và carbon. Dựa vào nguồn năng lượng và nguồn carbon sử dụng, vi sinh vật có bốn kiểu dinh dưỡng.',
        },
        {
          type: 'table',
          caption: 'Bốn kiểu dinh dưỡng của vi sinh vật',
          head: ['Kiểu dinh dưỡng', 'Nguồn năng lượng', 'Nguồn carbon', 'Đại diện'],
          rows: [
            ['Quang tự dưỡng', 'Ánh sáng', 'Chất vô cơ', 'Vi khuẩn lam, trùng roi, tảo'],
            [
              'Hoá tự dưỡng',
              'Chất vô cơ',
              'Chất vô cơ',
              'Một số vi khuẩn và Archaea: vi khuẩn nitrate hoá, vi khuẩn oxy hoá hydrogen',
            ],
            [
              'Quang dị dưỡng',
              'Ánh sáng',
              'Chất hữu cơ',
              'Một số vi khuẩn và Archaea: vi khuẩn không lưu huỳnh màu lục và màu tía',
            ],
            [
              'Hoá dị dưỡng',
              'Chất hữu cơ',
              'Chất hữu cơ',
              'Nhiều vi khuẩn, nấm, động vật nguyên sinh',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cách nhớ tên',
          text: '"Quang" là năng lượng từ ánh sáng, "hoá" là năng lượng từ chất hoá học. "Tự" là tự tổng hợp chất hữu cơ từ carbon vô cơ như $\\mathrm{CO_2}$, "dị" là lấy carbon từ chất hữu cơ có sẵn.',
        },
      ],
    },
    {
      heading: 'Phương pháp quan sát',
      blocks: [
        {
          type: 'p',
          text: 'Phương pháp quan sát dùng để nghiên cứu hình thái, kích thước và cấu tạo tế bào vi sinh vật: làm tiêu bản rồi soi dưới kính hiển vi quang học hoặc kính hiển vi điện tử.',
        },
        {
          type: 'table',
          caption: 'Một số phương pháp làm tiêu bản vi sinh vật',
          head: ['Phương pháp', 'Cách tiến hành', 'Dùng để'],
          rows: [
            [
              'Soi tươi',
              'Làm tiêu bản trên lam kính, đậy lamen, không nhuộm. Nhanh và đơn giản',
              'Quan sát trạng thái sống, khả năng di động của vi khuẩn',
            ],
            [
              'Nhuộm đơn',
              'Nhuộm một lần bằng một thuốc nhuộm như xanh methylene, tím kết tinh hoặc đỏ fuchsin để tăng độ tương phản',
              'Kiểm tra sự hiện diện, đánh giá sơ bộ hình dạng, cách sắp xếp và tính chất bắt màu',
            ],
            [
              'Nhuộm Gram',
              'Nhuộm lần lượt với tím kết tinh, iodine, ethyl alcohol $95\\%$ và fuchsin',
              'Phân biệt vi khuẩn Gram dương (Gr+) và Gram âm (Gr−)',
            ],
          ],
        },
        { type: 'widget', name: 'nhuom-gram' },
      ],
    },
    {
      heading: 'Phương pháp phân lập và nuôi cấy',
      blocks: [
        {
          type: 'p',
          text: 'Phân lập và nuôi cấy trên môi trường thạch giúp thu nhận vi sinh vật ở dạng thuần khiết, không lẫn với các vi sinh vật khác.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Pha loãng mẫu vật chứa vi khuẩn hoặc vi nấm trong nước đã tiệt trùng.',
            'Phết dung dịch này lên bề mặt thạch đặc trong đĩa petri.',
            'Nuôi cấy để mỗi tế bào phát triển thành một khuẩn lạc riêng rẽ.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khuẩn lạc',
          text: 'Khuẩn lạc là tập hợp các tế bào được sinh ra từ một tế bào ban đầu trên môi trường thạch, có thể nhìn thấy bằng mắt thường. Hình thái đặc trưng của khuẩn lạc giúp phân biệt và tách riêng từng loại vi sinh vật.',
        },
        {
          type: 'table',
          caption: 'Hình thái khuẩn lạc',
          head: ['Nhóm', 'Đặc điểm khuẩn lạc'],
          rows: [
            ['Vi khuẩn', 'Thường nhầy ướt, bề mặt dẹt, nhiều màu (trắng sữa, vàng, đỏ, hồng, cam)'],
            ['Nấm men', 'Thường khô, tròn đều, lồi ở tâm, màu trắng sữa'],
            ['Nấm mốc', 'Lan rộng, dạng sợi dài và xốp, nhiều màu (trắng, vàng, đen, xanh)'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Ma trận kiểu dinh dưỡng',
    instruction:
      'Kéo mỗi vi sinh vật vào ô phù hợp, hoặc chạm thẻ rồi chạm ô. Hàng là nguồn năng lượng, cột là nguồn carbon. Xếp đúng, ô sẽ hiện tên kiểu dinh dưỡng.',
  },
  examples: [
    {
      problem:
        'Một loại vi khuẩn sống trong hang động không có ánh sáng, chỉ cần amino acid methionine làm chất dinh dưỡng. Vi khuẩn này thuộc kiểu dinh dưỡng nào?',
      steps: [
        'Hang không có ánh sáng nên vi khuẩn không dùng được năng lượng ánh sáng: năng lượng lấy từ chất hoá học ("hoá").',
        'Methionine là chất hữu cơ, vi khuẩn lấy carbon từ đó ("dị").',
      ],
      answer: 'Hoá dị dưỡng.',
    },
    {
      problem:
        'Nhuộm Gram hai mẫu vi khuẩn, cuối cùng mẫu X có màu tím, mẫu Y có màu đỏ. Hãy kết luận về hai mẫu và giải thích.',
      steps: [
        'Sau tím kết tinh và iodine, cả hai mẫu đều tím.',
        'Cồn tẩy màu: thành peptidoglycan dày giữ lại màu tím; thành mỏng thì mất màu.',
        'Fuchsin chỉ làm đỏ những tế bào đã mất màu.',
      ],
      answer: 'X là vi khuẩn Gram dương, Y là vi khuẩn Gram âm.',
    },
    {
      problem:
        'Vì sao trước khi phết lên thạch đặc, người ta phải pha loãng mẫu vật trong nước đã tiệt trùng?',
      steps: [
        'Mẫu đậm đặc khi phết lên thạch sẽ làm các tế bào nằm chồng lên nhau, khuẩn lạc mọc liền thành mảng.',
        'Pha loãng làm tế bào nằm cách xa nhau, mỗi tế bào phát triển thành một khuẩn lạc riêng.',
        'Dùng nước tiệt trùng để không đưa thêm vi sinh vật lạ vào mẫu.',
      ],
      answer: 'Để thu được khuẩn lạc riêng rẽ từ từng tế bào và không làm nhiễm mẫu.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhóm nào sau đây đều là vi sinh vật nhân sơ?',
      options: [
        'Vi khuẩn và Archaea',
        'Vi khuẩn và nấm men',
        'Vi tảo và động vật nguyên sinh',
        'Nấm mốc và Archaea',
      ],
      answer: 0,
      hints: ['Tế bào nhân sơ chưa có màng nhân. Nấm, tảo và động vật nguyên sinh đều có.'],
      solution:
        'Vi khuẩn và Archaea là nhân sơ; vi nấm, vi tảo và động vật nguyên sinh là nhân thực.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi kiểu dinh dưỡng với nguồn năng lượng và nguồn carbon của nó.',
      left: ['Quang tự dưỡng', 'Hoá tự dưỡng', 'Quang dị dưỡng', 'Hoá dị dưỡng'],
      right: [
        'Ánh sáng và chất vô cơ',
        'Chất vô cơ và chất vô cơ',
        'Ánh sáng và chất hữu cơ',
        'Chất hữu cơ và chất hữu cơ',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['"Quang" nói về năng lượng ánh sáng; "tự" nói về carbon từ chất vô cơ.'],
      solution:
        'Quang tự dưỡng: ánh sáng, chất vô cơ. Hoá tự dưỡng: chất vô cơ, chất vô cơ. Quang dị dưỡng: ánh sáng, chất hữu cơ. Hoá dị dưỡng: chất hữu cơ, chất hữu cơ.',
    },
    {
      type: 'choice',
      prompt: 'Vi khuẩn nitrate hoá thuộc kiểu dinh dưỡng nào?',
      options: ['Hoá tự dưỡng', 'Quang tự dưỡng', 'Quang dị dưỡng', 'Hoá dị dưỡng'],
      answer: 0,
      hints: ['Vi khuẩn này lấy năng lượng khi oxy hoá hợp chất nitrogen vô cơ.'],
      solution:
        'Năng lượng lấy từ chất vô cơ và carbon lấy từ $\\mathrm{CO_2}$, nên vi khuẩn nitrate hoá là hoá tự dưỡng.',
    },
    {
      type: 'multi',
      prompt: 'Những vi sinh vật nào sau đây thuộc kiểu hoá dị dưỡng?',
      options: ['Nấm men', 'Vi khuẩn lam', 'Trùng giày', 'Vi khuẩn oxy hoá hydrogen', 'Nấm mốc'],
      answers: [0, 2, 4],
      hints: ['Tìm những sinh vật lấy cả năng lượng và carbon từ chất hữu cơ.'],
      solution:
        'Nấm men, nấm mốc và trùng giày là hoá dị dưỡng. Vi khuẩn lam quang tự dưỡng, vi khuẩn oxy hoá hydrogen hoá tự dưỡng.',
    },
    {
      type: 'choice',
      prompt:
        'Một vi sinh vật sống nơi có ánh sáng, tự tổng hợp được chất hữu cơ từ $\\mathrm{CO_2}$. Nó thuộc kiểu dinh dưỡng nào?',
      options: ['Quang tự dưỡng', 'Quang dị dưỡng', 'Hoá tự dưỡng', 'Hoá dị dưỡng'],
      answer: 0,
      hints: ['$\\mathrm{CO_2}$ là chất vô cơ.'],
      solution:
        'Năng lượng ánh sáng là "quang", carbon từ $\\mathrm{CO_2}$ vô cơ là "tự": quang tự dưỡng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các thuốc dùng trong nhuộm Gram theo đúng thứ tự.',
      items: ['Ethyl alcohol $95\\%$', 'Fuchsin', 'Tím kết tinh', 'Iodine'],
      answer: [2, 3, 0, 1],
      hints: ['Tế bào phải bắt màu trước khi được tẩy màu.'],
      solution: 'Tím kết tinh, iodine, ethyl alcohol $95\\%$, rồi fuchsin.',
    },
    {
      type: 'choice',
      prompt: 'Muốn quan sát khả năng di động của vi khuẩn còn sống, nên dùng cách nào?',
      options: ['Soi tươi', 'Nhuộm đơn', 'Nhuộm Gram', 'Nuôi cấy trên thạch'],
      answer: 0,
      hints: ['Cần tế bào vẫn sống và chưa bị cố định, nhuộm màu.'],
      solution: 'Soi tươi giữ tế bào ở trạng thái sống nên thấy được khả năng di động.',
    },
    {
      type: 'choice',
      prompt: 'Sau nhuộm Gram, vi khuẩn Gram âm có màu gì?',
      options: ['Đỏ', 'Tím', 'Xanh', 'Không màu'],
      answer: 0,
      hints: ['Cồn làm chúng mất màu tím, sau đó còn một thuốc nhuộm nữa.'],
      solution: 'Vi khuẩn Gram âm mất màu tím khi gặp cồn rồi bắt màu đỏ của fuchsin.',
    },
    {
      type: 'text',
      prompt:
        'Tập hợp các tế bào sinh ra từ một tế bào ban đầu trên môi trường thạch, nhìn thấy được bằng mắt thường, được gọi là gì?',
      accept: ['khuẩn lạc'],
      hints: ['Mỗi đốm nhìn thấy trên đĩa thạch sau khi nuôi cấy chính là một tập hợp như vậy.'],
      solution: 'Đó là khuẩn lạc.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nhóm vi sinh vật với hình thái khuẩn lạc thường gặp.',
      left: ['Vi khuẩn', 'Nấm men', 'Nấm mốc'],
      right: [
        'Nhầy ướt, dẹt, nhiều màu',
        'Khô, tròn đều, lồi ở tâm, màu trắng sữa',
        'Lan rộng, dạng sợi dài, xốp',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Nấm mốc có các sợi nấm phát triển lan ra.'],
      solution:
        'Vi khuẩn: nhầy ướt, dẹt. Nấm men: khô, tròn đều, lồi ở tâm. Nấm mốc: lan rộng, dạng sợi xốp.',
    },
  ],
  takeaways: [
    'Vi sinh vật có kích thước rất nhỏ, gồm nhóm nhân sơ (vi khuẩn, Archaea) và nhóm nhân thực (vi nấm, vi tảo, động vật nguyên sinh).',
    'Bốn kiểu dinh dưỡng: quang tự dưỡng, hoá tự dưỡng, quang dị dưỡng, hoá dị dưỡng, phân biệt theo nguồn năng lượng và nguồn carbon.',
    'Phương pháp quan sát gồm soi tươi, nhuộm đơn, nhuộm Gram; nhuộm Gram phân biệt Gram dương (tím) và Gram âm (đỏ).',
    'Phân lập trên thạch đặc tạo khuẩn lạc riêng rẽ, nhờ đó thu được vi sinh vật thuần khiết.',
  ],
};
