/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nuôi cấy tế bào động vật để sản xuất protein, kháng thể và nghiên cứu; nhân bản vô tính bằng chuyển nhân tế bào sinh dưỡng, như cừu Dolly; cùng các thành tựu như liệu pháp tế bào gốc, liệu pháp gene và những vấn đề đạo đức đi kèm.',
  intro:
    'Năm 1996, ở Scotland, một con cừu ra đời mà không cần tinh trùng: cừu Dolly mang hệ gene trong nhân của một tế bào tuyến vú. Để có được Dolly, các nhà khoa học đã phải làm với 277 trứng chuyển nhân. Quy trình đó diễn ra thế nào, và vì sao lại khó đến vậy?',
  objectives: [
    'Nêu được các điều kiện, triển vọng của nuôi cấy tế bào động vật.',
    'Trình bày được nguyên lí và các bước của nhân bản vô tính động vật.',
    'Giải thích được vì sao cá thể nhân bản giống cá thể cho nhân và vì sao tỉ lệ thành công còn thấp.',
    'Nêu được nguyên tắc và thành tựu của liệu pháp tế bào gốc, liệu pháp gene và các vấn đề đạo đức liên quan.',
  ],
  sections: [
    {
      heading: 'Nuôi cấy tế bào động vật',
      blocks: [
        {
          type: 'p',
          text: 'Tế bào động vật có thể được nuôi trong môi trường nhân tạo khi có đủ điều kiện: vô trùng, đủ chất dinh dưỡng và các nhân tố sinh trưởng, nhiệt độ và pH ổn định gần giống trong cơ thể. Phần lớn tế bào động vật đã chuyên hoá rất khó giải biệt hoá, nên không dễ tái sinh thành cơ thể mới như tế bào thực vật.',
        },
        {
          type: 'list',
          items: [
            'Sản xuất các phân tử phức tạp và kháng thể dùng để phòng bệnh, điều trị, chẩn đoán.',
            'Tạo mô, cơ quan thay thế và mô hình tế bào để nghiên cứu bệnh.',
            'Tạo thịt nhân tạo từ tế bào nuôi cấy.',
          ],
        },
      ],
    },
    {
      heading: 'Nhân bản vô tính động vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhân bản vô tính',
          text: 'Nhân bản vô tính là tạo ra cá thể mới có hệ gene trong nhân giống với cá thể cho nhân, không qua thụ tinh: chuyển nhân của tế bào sinh dưỡng (tế bào soma) vào trứng đã loại nhân, rồi để tế bào này phát triển thành phôi.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lấy tế bào từ một mô của con vật cần nhân bản, nuôi cấy để đưa nhân về trạng thái giải biệt hoá, rồi tách lấy nhân.',
            'Lấy trứng từ con vật cho trứng và loại bỏ nhân.',
            'Dung hợp để đưa nhân vào trứng đã mất nhân.',
            'Nuôi trứng chuyển nhân trong môi trường nhân tạo thành phôi sớm.',
            'Cấy phôi vào tử cung con cái mang thai hộ.',
          ],
        },
        {
          type: 'table',
          caption: 'Thí nghiệm tạo cừu Dolly (công bố năm 1997)',
          head: ['Giai đoạn', 'Số lượng', 'So với số trứng chuyển nhân'],
          rows: [
            ['Trứng chuyển nhân tạo được', '$277$', '$100\\%$'],
            ['Phôi đem cấy vào cừu mang thai hộ', '$29$', 'khoảng $10{,}5\\%$'],
            ['Cừu con sống', '$1$', 'khoảng $0{,}36\\%$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao tỉ lệ thành công thấp?',
          text: 'Trong nhân tế bào đã chuyên hoá, nhiều gene bị khoá nhờ gắn nhóm methyl ($-\\text{CH}_3$) vào cytosine. Muốn phôi phát triển bình thường, hệ gene phải được tái lập trình hoàn toàn. Quá trình này thường chưa trọn vẹn, nên nhiều phôi phát triển bất thường. Dolly chỉ sống khoảng $6{,}5$ năm, ít hơn tuổi thọ thường thấy ở cừu, và chết vì bệnh phổi do virus; chưa có bằng chứng chắc chắn rằng việc nhân bản đã làm Dolly chết sớm.',
        },
        {
          type: 'p',
          text: 'Từ sau Dolly, nhiều loài đã được nhân bản như chuột, bò, lợn. Tại Việt Nam, năm $2021$ Viện Chăn nuôi đã nhân bản được lợn Ỉ. Công nghệ này được kì vọng sẽ giúp nhân nhanh nguồn gene quý, về lâu dài có thể tạo nội tạng từ động vật chuyển gene người để thay thế cho người bệnh.',
        },
      ],
    },
    {
      heading: 'Một số thành tựu khác',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liệu pháp tế bào gốc',
          text: 'Liệu pháp tế bào gốc là nuôi cấy tế bào gốc ngoài cơ thể, rồi truyền vào người bệnh để thay thế tế bào bị hỏng. Nguồn tế bào: tế bào gốc phôi (từ phôi thụ tinh trong ống nghiệm khoảng $6$ ngày tuổi), tế bào gốc từ thai bị sảy, tế bào gốc trưởng thành, tế bào gốc cảm ứng.',
        },
        {
          type: 'table',
          caption: 'Hai nguồn tế bào khi truyền cho người bệnh',
          head: ['Nguồn', 'Lấy từ', 'Đặc điểm'],
          rows: [
            ['Tự thân', 'Chính người bệnh', 'Không gây đào thải'],
            [
              'Đồng loại',
              'Người hiến phù hợp',
              'Có nguy cơ đào thải, cần thuốc ức chế miễn dịch; tế bào ghép còn có thể tấn công tế bào ung thư sót lại',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liệu pháp gene',
          text: 'Liệu pháp gene là chữa bệnh di truyền bằng cách thay gene bệnh bằng gene lành. Ba bước cơ bản: nuôi cấy tế bào gốc của người bệnh hoặc người phù hợp; thay gene bệnh bằng gene lành, rồi nhân nhanh tế bào; đưa tế bào đã sửa gene trở lại cơ thể người bệnh.',
        },
        {
          type: 'list',
          items: [
            'Liệu pháp tế bào soma: sửa gene ở tế bào cơ thể, gene đã sửa không truyền cho đời sau.',
            'Liệu pháp tế bào mầm sinh dục: sửa gene có thể truyền cho đời sau, nên gây tranh cãi lớn về đạo đức.',
            'Một số thử nghiệm ở người: sửa gene hỏng trong tế bào tuỷ xương của người bệnh suy giảm miễn dịch; đưa gene CFTR bình thường vào tế bào phổi bằng vector virus để chữa xơ nang; dùng tế bào CAR-T chữa ung thư máu cấp dòng lympho.',
            'Rủi ro: gene có thể gắn sai vị trí và làm bất hoạt gene khác; tác dụng phụ lâu dài chưa được đánh giá đầy đủ. Các công cụ như CRISPR/Cas9 đang giúp sửa gene chính xác hơn.',
          ],
        },
        { type: 'widget', name: 'thanh-tuu' },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Vấn đề đạo đức',
          text: 'Việc tạo tế bào gốc phôi cần phá huỷ phôi ở giai đoạn sớm, nên gây nhiều tranh cãi, và một số nước coi đó là vi phạm đạo đức. Nhân bản vô tính người bị phản đối rộng rãi và bị nhiều nước cấm.',
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Hồ sơ một con vật nhân bản',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: lập hồ sơ một trường hợp nhân bản vô tính có thật để thấy cả thành công lẫn giới hạn. Làm theo nhóm $2$ đến $3$ bạn trong $1$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn một trường hợp: cừu Dolly, lợn Ỉ ở Việt Nam, bò hoặc một loài quý hiếm.',
            'Tìm trong nguồn đáng tin: năm, nơi thực hiện, nguồn tế bào cho nhân, nguồn trứng, con vật mang thai hộ.',
            'Vẽ sơ đồ quy trình có tên từng con vật góp phần. Nếu tìm được số liệu, hãy tính tỉ lệ thành công.',
            'Nêu mục đích của việc nhân bản đó, một lợi ích và một hạn chế; ghi rõ nguồn thông tin.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: một trang hồ sơ hoặc vài trang trình chiếu, trình bày trước lớp trong $3$ phút và trả lời một câu hỏi phản biện từ nhóm bạn.',
        },
      ],
    },
  ],
  explore: {
    title: 'Làm lại thí nghiệm cừu Dolly',
    instruction:
      'Kéo từng thẻ vào bàn thí nghiệm, hoặc chạm vào thẻ. Bước nào chưa đủ nguyên liệu sẽ bị từ chối. Khi cừu con ra đời, hãy dự đoán màu mặt của nó, rồi đổi màu cừu cho nhân và dự đoán lại.',
  },
  examples: [
    {
      problem:
        'Trong thí nghiệm tạo Dolly, có $277$ trứng chuyển nhân, $29$ phôi được cấy và $1$ cừu con sống. Tính tỉ lệ cừu con sống so với số trứng chuyển nhân và so với số phôi được cấy (làm tròn đến hai chữ số thập phân).',
      steps: [
        'So với số trứng: $\\dfrac{1}{277} \\cdot 100\\% \\approx 0{,}36\\%$.',
        'So với số phôi được cấy: $\\dfrac{1}{29} \\cdot 100\\% \\approx 3{,}45\\%$.',
        'Tỉ lệ rất thấp cho thấy phần lớn phôi không phát triển bình thường.',
      ],
      answer: 'Khoảng $0{,}36\\%$ so với số trứng và $3{,}45\\%$ so với số phôi được cấy.',
    },
    {
      problem:
        'Người ta chuyển nhân tế bào của bò đực giống A (lông đen) vào trứng đã loại nhân của bò B (lông vàng), rồi cấy phôi vào bò C (lông trắng). Bê con sinh ra có giới tính nào, và lông thường có màu gì? Bê con có hoàn toàn giống bò A không?',
      steps: [
        'Nhân chứa nhiễm sắc thể giới tính và phần lớn hệ gene của bò A, nên bê con là con đực và có màu lông như bò A (nếu màu lông do gene trong nhân quy định).',
        'Bò B chỉ góp tế bào chất, trong đó có ti thể với một ít DNA. Bò C chỉ mang thai, không góp gene.',
        'DNA ti thể từ bò B và điều kiện mang thai có thể làm bê con không hoàn toàn giống bò A.',
      ],
      answer:
        'Bê con là con đực, lông đen như bò A, nhưng không hoàn toàn giống A, vì DNA ti thể đến từ bò B và môi trường cũng tác động lên kiểu hình.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nguyên lí của nhân bản vô tính động vật là gì?',
      options: [
        'Chuyển nhân tế bào sinh dưỡng vào trứng đã loại nhân, rồi cho phát triển thành phôi',
        'Cho trứng và tinh trùng thụ tinh trong ống nghiệm',
        'Tách một phôi thành nhiều phần rồi cấy vào nhiều con cái',
        'Dung hợp hai trứng cùng một loài với nhau',
      ],
      answer: 0,
      hints: ['Không có sự thụ tinh trong quy trình này.'],
      solution:
        'Nhân tế bào sinh dưỡng được chuyển vào trứng đã loại nhân. Tế bào chất của trứng tái lập trình nhân để tế bào phát triển thành phôi.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các bước nhân bản vô tính theo thứ tự trong bài (lấy nhân trước, lấy trứng sau).',
      items: [
        'Lấy tế bào, nuôi cấy, tách lấy nhân',
        'Lấy trứng và loại bỏ nhân',
        'Dung hợp để đưa nhân vào trứng',
        'Nuôi cấy thành phôi sớm',
        'Cấy phôi vào tử cung con cái mang thai hộ',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có nhân và trứng đã loại nhân thì mới dung hợp được.'],
      solution:
        'Lấy nhân, lấy trứng và loại nhân, dung hợp, nuôi thành phôi sớm, cấy vào tử cung con cái mang thai hộ.',
    },
    {
      type: 'choice',
      prompt:
        'Nhân lấy từ cừu mặt đen, trứng lấy từ cừu mặt trắng, phôi cấy vào cừu mặt trắng khác. Cừu con có mặt màu gì?',
      options: ['Mặt đen', 'Mặt trắng', 'Mặt loang đen trắng', 'Không dự đoán được'],
      answer: 0,
      hints: ['Hệ gene quyết định tính trạng này nằm ở đâu?'],
      solution:
        'Cừu con có mặt đen như cừu cho nhân, vì nhân mang phần lớn hệ gene. Hai cừu còn lại góp tế bào chất và nơi mang thai.',
    },
    {
      type: 'number',
      prompt:
        'Từ $277$ trứng chuyển nhân, có $29$ phôi được cấy. Tỉ lệ này bằng bao nhiêu phần trăm? (làm tròn đến một chữ số thập phân)',
      answer: 10.5,
      tolerance: 0.05,
      unit: '%',
      hints: ['Lấy $29$ chia cho $277$.', 'Nhân kết quả với $100\\%$.'],
      solution: '$\\dfrac{29}{277} \\cdot 100\\% \\approx 10{,}5\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Một thí nghiệm nhân bản có $200$ phôi được cấy, tạo $5$ con vật con sống. Tỉ lệ thành công tính trên số phôi được cấy bằng bao nhiêu phần trăm?',
      answer: 2.5,
      unit: '%',
      hints: ['Tính $\\dfrac{5}{200}$ rồi đổi ra phần trăm.'],
      solution: '$\\dfrac{5}{200} \\cdot 100\\% = 2{,}5\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên nhân chủ yếu khiến tỉ lệ nhân bản vô tính thành công còn thấp là gì?',
      options: [
        'Tái lập trình hệ gene chưa hoàn chỉnh, nhiều gene vẫn còn gắn nhóm methyl',
        'Tế bào sinh dưỡng thiếu hẳn một nửa số nhiễm sắc thể',
        'Trứng đã loại nhân vẫn tiếp tục tạo ra các nhiễm sắc thể mới',
        'Cá thể mang thai hộ truyền gene sang cho phôi',
      ],
      answer: 0,
      hints: ['Nhân tế bào đã chuyên hoá phải trở về trạng thái như nhân hợp tử.'],
      solution:
        'Nhiều gene trong nhân đã chuyên hoá vẫn gắn nhóm methyl trên cytosine, chưa được tái lập trình, nên phôi phát triển bất thường.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi liệu pháp với đặc điểm đúng.',
      left: ['Liệu pháp tế bào gốc', 'Liệu pháp tế bào soma', 'Liệu pháp tế bào mầm sinh dục'],
      right: [
        'Gene đã sửa có thể truyền cho đời sau',
        'Truyền tế bào gốc nuôi cấy để thay tế bào hỏng',
        'Sửa gene ở tế bào cơ thể, không truyền cho đời sau',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Tế bào mầm sinh dục tạo ra giao tử.'],
      solution:
        'Liệu pháp tế bào gốc truyền tế bào gốc nuôi cấy. Sửa gene ở tế bào soma không truyền cho đời sau, còn ở tế bào mầm thì có thể truyền.',
    },
    {
      type: 'choice',
      prompt:
        'Người bệnh ung thư máu được truyền tế bào gốc của chính mình. So với lấy từ người hiến, cách này có ưu điểm gì?',
      options: [
        'Không gây đào thải, không cần thuốc ức chế miễn dịch',
        'Tế bào gốc chắc chắn không còn tế bào ung thư',
        'Tế bào gốc tự thân tạo được cả nhau thai',
        'Tế bào truyền vào tấn công được tế bào ung thư mạnh hơn',
      ],
      answer: 0,
      hints: ['Hệ miễn dịch nhận ra đâu là tế bào của mình.'],
      solution:
        'Tế bào của chính người bệnh không gây đào thải. Tế bào của người hiến có nguy cơ đào thải, nên cần thuốc ức chế miễn dịch.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước cơ bản của liệu pháp gene.',
      items: [
        'Nuôi cấy tế bào gốc của người bệnh hoặc người phù hợp',
        'Thay gene bệnh bằng gene lành, rồi nhân nhanh tế bào',
        'Đưa tế bào đã sửa gene trở lại cơ thể người bệnh',
      ],
      answer: [0, 1, 2],
      hints: ['Sửa gene làm bên ngoài cơ thể, đưa vào sau cùng.'],
      solution: 'Nuôi cấy tế bào gốc, thay gene và nhân nhanh tế bào, rồi đưa trở lại cơ thể.',
    },
    {
      type: 'text',
      prompt:
        'Động vật có vú đầu tiên được nhân bản từ tế bào của cơ thể trưởng thành, ra đời năm $1996$, là con vật nào?',
      accept: ['cừu Dolly', 'Dolly', 'cừu'],
      hints: ['Một con cừu nổi tiếng ở Scotland.'],
      solution: 'Đó là cừu Dolly.',
    },
  ],
  takeaways: [
    'Tế bào động vật nuôi cấy cần vô trùng, đủ dinh dưỡng, nhân tố sinh trưởng; dùng để sản xuất protein, kháng thể, thịt nhân tạo.',
    'Nhân bản vô tính: chuyển nhân tế bào sinh dưỡng vào trứng đã loại nhân, nuôi thành phôi sớm và cấy vào cá thể mang thai hộ.',
    'Cá thể nhân bản giống cá thể cho nhân; tỉ lệ thành công thấp vì tái lập trình hệ gene chưa hoàn chỉnh.',
    'Thành tựu gồm nhân bản động vật, liệu pháp tế bào gốc, liệu pháp gene; đi kèm các vấn đề đạo đức cần cân nhắc.',
  ],
};
