/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sinh vật được phân loại theo các bậc từ thấp đến cao: loài, chi (giống), họ, bộ, lớp, ngành, giới; sinh giới gồm năm giới Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật; mỗi loài có một tên khoa học gồm tên chi và tên loài.',
  intro:
    'Vào một hiệu sách lớn, em tìm được ngay cuốn sách cần mua vì sách được xếp theo từng khu, từng giá, từng ngăn. Thế giới sống có hàng triệu loài sinh vật. Các nhà khoa học cũng "xếp giá" cho chúng: chia sinh vật thành các nhóm lớn, rồi chia mỗi nhóm thành các nhóm nhỏ hơn. Bài này cho em biết các nhóm đó được sắp xếp như thế nào.',
  objectives: [
    'Nêu được sự cần thiết của việc phân loại thế giới sống.',
    'Kể được các bậc phân loại sinh vật từ thấp đến cao: loài, chi (giống), họ, bộ, lớp, ngành, giới.',
    'Nhận biết được năm giới sinh vật và lấy được ví dụ cho mỗi giới.',
    'Phân biệt được tên địa phương, tên phổ thông và tên khoa học; viết đúng tên khoa học của một loài.',
  ],
  sections: [
    {
      heading: 'Sự cần thiết của việc phân loại thế giới sống',
      blocks: [
        {
          type: 'p',
          text: 'Phân loại sinh vật là sắp xếp sinh vật vào các nhóm dựa trên những đặc điểm giống nhau. Những sinh vật có nhiều đặc điểm chung được xếp vào cùng một nhóm.',
        },
        {
          type: 'list',
          items: [
            'Giúp gọi đúng tên sinh vật và xác định được vị trí của sinh vật trong thế giới sống.',
            'Giúp thấy được sự giống nhau, khác nhau và mối quan hệ họ hàng giữa các nhóm sinh vật.',
            'Giúp việc tìm hiểu, nghiên cứu, sử dụng và bảo vệ sinh vật thuận lợi hơn.',
          ],
        },
        {
          type: 'p',
          text: 'Để phân loại, người ta dựa vào các đặc điểm như: loại tế bào (nhân sơ hay nhân thực), mức độ tổ chức cơ thể (đơn bào hay đa bào), kiểu dinh dưỡng (tự dưỡng hay dị dưỡng), môi trường sống...',
        },
      ],
    },
    {
      heading: 'Các bậc phân loại sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Bậc phân loại',
          text: 'Sinh vật được phân loại theo các bậc từ thấp đến cao: loài, chi (giống), họ, bộ, lớp, ngành, giới. Loài là bậc phân loại thấp nhất (bậc cơ bản); giới là bậc phân loại cao nhất.',
        },
        {
          type: 'p',
          text: 'Mỗi bậc gồm nhiều nhóm của bậc ngay dưới nó: một chi gồm một hoặc nhiều loài, một họ gồm một hoặc nhiều chi... Bậc càng thấp, các sinh vật trong cùng nhóm càng có nhiều đặc điểm giống nhau và quan hệ họ hàng càng gần.',
        },
        {
          type: 'table',
          caption: 'Các bậc phân loại của loài hổ',
          head: ['Bậc phân loại', 'Tên nhóm'],
          rows: [
            ['Giới', 'Động vật (Animalia)'],
            ['Ngành', 'Dây sống (Chordata)'],
            ['Lớp', 'Thú (Mammalia)'],
            ['Bộ', 'Ăn thịt (Carnivora)'],
            ['Họ', 'Mèo (Felidae)'],
            ['Chi', 'Báo (Panthera)'],
            ['Loài', 'Hổ (Panthera tigris)'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ghi nhớ thứ tự',
          text: 'Từ thấp lên cao: Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới. Đi theo chiều ngược lại (từ giới xuống loài), nhóm sinh vật hẹp dần cho tới khi chỉ còn một loài.',
        },
      ],
    },
    {
      heading: 'Cách gọi tên sinh vật',
      blocks: [
        {
          type: 'p',
          text: 'Một sinh vật có thể có nhiều tên gọi. Tên địa phương là tên gọi theo vùng miền, ví dụ cùng một loại quả nhưng miền Bắc gọi là quả dứa, miền Nam gọi là quả thơm hay quả khóm. Tên phổ thông là tên được dùng phổ biến trong cả nước (quả dứa). Để các nhà khoa học trên toàn thế giới hiểu nhau, mỗi loài còn có một tên khoa học duy nhất.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tên khoa học',
          text: 'Tên khoa học của một loài gồm hai phần, viết bằng tiếng Latin: tên chi (viết hoa chữ cái đầu) đứng trước, tên loài (viết thường) đứng sau. Khi in, tên khoa học được viết nghiêng; khi viết tay, gạch chân. Ví dụ: Homo sapiens (người), Oryza sativa (lúa), Panthera tigris (hổ), Ananas comosus (dứa).',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dễ nhầm',
          text: 'Không viết hoa tên loài (sai: Homo Sapiens) và không đảo thứ tự hai phần (sai: sapiens Homo). Hai loài cùng chi có chung phần đầu: Panthera tigris (hổ) và Panthera leo (sư tử).',
        },
      ],
    },
    {
      heading: 'Các giới sinh vật',
      blocks: [
        {
          type: 'p',
          text: 'Năm 1969, nhà sinh học Whittaker đề xuất chia sinh giới thành năm giới: Khởi sinh, Nguyên sinh, Nấm, Thực vật và Động vật. Cơ sở để chia là loại tế bào, mức độ tổ chức cơ thể và kiểu dinh dưỡng.',
        },
        {
          type: 'table',
          caption: 'Đặc điểm của năm giới sinh vật',
          head: ['Giới', 'Loại tế bào', 'Tổ chức cơ thể', 'Kiểu dinh dưỡng', 'Ví dụ'],
          rows: [
            [
              'Khởi sinh',
              'Nhân sơ',
              'Đơn bào',
              'Tự dưỡng hoặc dị dưỡng',
              'Vi khuẩn E. coli, vi khuẩn lam',
            ],
            [
              'Nguyên sinh',
              'Nhân thực',
              'Đa số đơn bào, một số đa bào',
              'Tự dưỡng hoặc dị dưỡng',
              'Trùng roi, trùng giày, tảo',
            ],
            ['Nấm', 'Nhân thực', 'Đơn bào hoặc đa bào', 'Dị dưỡng', 'Nấm men, nấm rơm, nấm mốc'],
            [
              'Thực vật',
              'Nhân thực',
              'Đa bào',
              'Tự dưỡng (quang hợp)',
              'Rêu, dương xỉ, cây lúa, cây bưởi',
            ],
            [
              'Động vật',
              'Nhân thực',
              'Đa bào',
              'Dị dưỡng, có khả năng di chuyển',
              'Giun đất, cá chép, hổ, người',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy chọn một sinh vật và đi từ giới xuống loài để xem nhóm sinh vật hẹp dần, hoặc so sánh hai loài để xem chúng chung đến bậc nào.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cây phân loại',
    instruction:
      'Chế độ "Đi từ giới xuống loài": chọn một sinh vật rồi bấm "Xuống một bậc" và quan sát những sinh vật còn cùng nhóm. Chế độ "So sánh hai loài": chọn hai sinh vật để xem chúng chung những bậc phân loại nào.',
  },
  examples: [
    {
      problem:
        'Sắp xếp các nhóm sau của loài hổ theo thứ tự từ bậc cao nhất đến bậc thấp nhất: họ Mèo, giới Động vật, lớp Thú, chi Báo, ngành Dây sống, bộ Ăn thịt.',
      steps: [
        'Nhớ thứ tự các bậc từ cao xuống thấp: giới, ngành, lớp, bộ, họ, chi, loài.',
        'Gắn mỗi nhóm với bậc của nó: giới Động vật, ngành Dây sống, lớp Thú, bộ Ăn thịt, họ Mèo, chi Báo.',
        'Bậc thấp nhất là loài: Panthera tigris.',
      ],
      answer:
        'Giới Động vật → ngành Dây sống → lớp Thú → bộ Ăn thịt → họ Mèo → chi Báo (→ loài Panthera tigris).',
    },
    {
      problem:
        'Hổ (Panthera tigris), mèo nhà (Felis catus) và người (Homo sapiens) đều thuộc lớp Thú. Hổ và mèo nhà cùng họ Mèo; người thuộc bộ Linh trưởng. Trong ba loài này, hai loài nào có quan hệ họ hàng gần nhau hơn?',
      steps: [
        'Hổ và mèo nhà chung các bậc: giới, ngành, lớp, bộ, họ (họ Mèo), tức là chung 5 bậc.',
        'Hổ và người chỉ chung giới, ngành, lớp (lớp Thú), tức là chung 3 bậc; mèo nhà và người cũng vậy.',
        'Hai sinh vật chung càng nhiều bậc phân loại thì quan hệ họ hàng càng gần.',
      ],
      answer: 'Hổ và mèo nhà có quan hệ họ hàng gần nhau hơn.',
    },
    {
      problem:
        'Xếp các sinh vật sau vào giới phù hợp: nấm men, trùng roi, cây rêu, con châu chấu, vi khuẩn lam.',
      steps: [
        'Vi khuẩn lam có tế bào nhân sơ: giới Khởi sinh.',
        'Trùng roi là sinh vật nhân thực, đơn bào: giới Nguyên sinh.',
        'Nấm men là nấm đơn bào, dị dưỡng: giới Nấm.',
        'Cây rêu đa bào, quang hợp được: giới Thực vật. Châu chấu đa bào, dị dưỡng, di chuyển được: giới Động vật.',
      ],
      answer:
        'Khởi sinh: vi khuẩn lam; Nguyên sinh: trùng roi; Nấm: nấm men; Thực vật: cây rêu; Động vật: con châu chấu.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bậc phân loại theo thứ tự từ thấp đến cao.',
      items: ['Họ', 'Giới', 'Loài', 'Lớp', 'Chi (giống)', 'Ngành', 'Bộ'],
      answer: [2, 4, 0, 6, 3, 5, 1],
      hints: ['Bậc thấp nhất là loài, bậc cao nhất là giới.', 'Sau chi là họ, rồi đến bộ.'],
      solution: 'Từ thấp đến cao: loài → chi (giống) → họ → bộ → lớp → ngành → giới.',
    },
    {
      type: 'choice',
      prompt: 'Bậc phân loại thấp nhất (bậc cơ bản) là',
      options: ['giới', 'chi', 'loài', 'họ'],
      answer: 2,
      hints: ['Tên khoa học được đặt cho bậc này.'],
      solution: 'Loài là bậc phân loại thấp nhất, giới là bậc cao nhất.',
    },
    {
      type: 'choice',
      prompt: 'Cách viết nào là đúng tên khoa học của loài người?',
      options: ['homo sapiens', 'Homo Sapiens', 'Homo sapiens', 'Sapiens homo'],
      answer: 2,
      hints: ['Tên chi đứng trước và viết hoa chữ cái đầu.', 'Tên loài đứng sau và viết thường.'],
      solution:
        'Tên khoa học gồm tên chi Homo (viết hoa chữ đầu) và tên loài sapiens (viết thường): Homo sapiens, in nghiêng khi in.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi giới với một sinh vật thuộc giới đó.',
      left: ['Khởi sinh', 'Nguyên sinh', 'Nấm', 'Thực vật', 'Động vật'],
      right: ['Cây lúa', 'Vi khuẩn E. coli', 'Con hổ', 'Trùng giày', 'Nấm rơm'],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 4],
        [3, 0],
        [4, 2],
      ],
      hints: [
        'Giới Khởi sinh gồm các sinh vật nhân sơ.',
        'Trùng giày là sinh vật nhân thực đơn bào, không phải động vật hay vi khuẩn.',
      ],
      solution:
        'Khởi sinh: vi khuẩn E. coli; Nguyên sinh: trùng giày; Nấm: nấm rơm; Thực vật: cây lúa; Động vật: con hổ.',
    },
    {
      type: 'choice',
      prompt:
        'Một nhóm sinh vật có tế bào nhân thực, cơ thể đa bào, dị dưỡng và có khả năng di chuyển. Nhóm này thuộc giới',
      options: ['Thực vật', 'Nấm', 'Nguyên sinh', 'Động vật'],
      answer: 3,
      hints: ['Thực vật tự dưỡng; nấm không di chuyển.'],
      solution:
        'Đa bào, dị dưỡng, di chuyển được là đặc điểm của giới Động vật. Thực vật tự dưỡng, nấm không di chuyển, nguyên sinh vật đa số đơn bào.',
    },
    {
      type: 'choice',
      prompt: 'Giới nào gồm các sinh vật có tế bào nhân sơ?',
      options: ['Khởi sinh', 'Nguyên sinh', 'Nấm', 'Thực vật'],
      answer: 0,
      hints: ['Vi khuẩn thuộc giới này.'],
      solution:
        'Giới Khởi sinh (vi khuẩn) gồm các sinh vật nhân sơ; bốn giới còn lại đều có tế bào nhân thực.',
    },
    {
      type: 'number',
      prompt:
        'Hổ (Panthera tigris) và sư tử (Panthera leo) cùng thuộc chi Báo. Hai loài này chung bao nhiêu bậc phân loại (kể từ bậc giới)?',
      answer: 6,
      hints: [
        'Nếu cùng chi thì chúng cũng cùng họ, bộ, lớp, ngành, giới.',
        'Đếm các bậc: giới, ngành, lớp, bộ, họ, chi.',
      ],
      solution:
        'Hai loài cùng chi nên chung các bậc giới, ngành, lớp, bộ, họ, chi: 6 bậc. Chúng chỉ khác nhau ở bậc loài.',
    },
    {
      type: 'text',
      prompt: 'Tên khoa học của cây lúa là Oryza sativa. Cây lúa thuộc chi nào? (Viết tên chi)',
      accept: ['Oryza', 'chi Oryza'],
      hints: ['Phần nào của tên khoa học là tên chi: phần đầu hay phần sau?'],
      solution:
        'Phần đầu của tên khoa học là tên chi: cây lúa thuộc chi Oryza; sativa là tên loài.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các ý nêu đúng lợi ích của việc phân loại thế giới sống.',
      options: [
        'Gọi đúng tên sinh vật',
        'Thấy được mối quan hệ họ hàng giữa các sinh vật',
        'Làm cho sinh vật lớn nhanh hơn',
        'Thuận lợi cho việc nghiên cứu và bảo vệ sinh vật',
        'Làm tăng số loài sinh vật trên Trái Đất',
      ],
      answers: [0, 1, 3],
      hints: [
        'Phân loại là công việc sắp xếp của con người; nó có thay đổi bản thân sinh vật không?',
      ],
      solution:
        'Phân loại giúp gọi đúng tên, xác định vị trí và mối quan hệ họ hàng giữa các sinh vật, thuận lợi cho nghiên cứu và bảo vệ. Phân loại không làm sinh vật lớn nhanh hơn hay làm tăng số loài.',
    },
    {
      type: 'choice',
      prompt: 'Miền Bắc gọi là "quả dứa", miền Nam gọi là "quả thơm". "Quả thơm" là',
      options: ['tên khoa học', 'tên địa phương', 'tên chi', 'tên giới'],
      answer: 1,
      hints: ['Tên này chỉ dùng ở một vùng miền.'],
      solution:
        '"Quả thơm" là tên địa phương. Tên khoa học của dứa là Ananas comosus, giống nhau trên toàn thế giới.',
    },
  ],
  takeaways: [
    'Phân loại giúp gọi đúng tên sinh vật, xác định vị trí và mối quan hệ họ hàng giữa các sinh vật.',
    'Các bậc phân loại từ thấp đến cao: loài, chi (giống), họ, bộ, lớp, ngành, giới; loài là bậc cơ bản.',
    'Năm giới sinh vật: Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật.',
    'Tên khoa học = tên chi (viết hoa chữ đầu) + tên loài (viết thường), in nghiêng, ví dụ Homo sapiens.',
  ],
};
