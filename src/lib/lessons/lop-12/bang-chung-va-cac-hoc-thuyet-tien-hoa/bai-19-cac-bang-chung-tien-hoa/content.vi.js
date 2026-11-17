/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các bằng chứng tiến hoá: bằng chứng trực tiếp là hoá thạch, tuổi được xác định bằng đồng vị phóng xạ; bằng chứng gián tiếp gồm giải phẫu so sánh (cơ quan tương đồng, cơ quan thoái hoá, cơ quan tương tự), tế bào học và sinh học phân tử.',
  intro:
    'Chi trước của người dùng để cầm nắm, của cá voi để bơi, của dơi để bay. Vì sao ba chi khác hẳn nhau về chức năng lại được xây từ cùng những xương giống nhau, xếp theo cùng một thứ tự? Các nhà khoa học dựa vào những bằng chứng nào để khẳng định mọi sinh vật có chung nguồn gốc?',
  objectives: [
    'Trình bày được khái niệm hoá thạch, cách hình thành và xác định tuổi hoá thạch; nêu được ý nghĩa của hoá thạch là bằng chứng trực tiếp của tiến hoá.',
    'Phân biệt được cơ quan tương đồng, cơ quan thoái hoá và cơ quan tương tự; giải thích được vì sao chúng là bằng chứng tiến hoá.',
    'Trình bày được các bằng chứng tế bào học và sinh học phân tử về nguồn gốc chung của sinh giới.',
  ],
  sections: [
    {
      heading: 'Bằng chứng hoá thạch',
      blocks: [
        {
          type: 'p',
          text: 'Bằng chứng tiến hoá gồm bằng chứng trực tiếp (hoá thạch) và bằng chứng gián tiếp (giải phẫu so sánh, tế bào học và sinh học phân tử).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hoá thạch',
          text: 'Hoá thạch là di tích của sinh vật sống trong các thời đại trước còn lưu giữ trong các lớp đất đá, hổ phách hoặc băng tuyết: xác, xương, vỏ, dấu chân, dấu vết lá, ...',
        },
        {
          type: 'list',
          items: [
            'Hoá đá: xác sinh vật bị vùi lấp, các chất trong cơ thể dần được thay thế bằng khoáng chất, giữ lại hình dạng ban đầu (hoá thạch bọ ba thuỳ, lá dương xỉ).',
            'Sinh vật được giữ nguyên trong hổ phách (côn trùng mắc trong nhựa cây), trong băng tuyết (voi ma mút) hoặc để lại khuôn trong dung nham núi lửa, trầm tích.',
          ],
        },
        {
          type: 'p',
          text: 'Tuổi của hoá thạch được xác định nhờ các đồng vị phóng xạ có trong hoá thạch hoặc trong lớp đất đá chứa nó. Sau mỗi chu kì bán rã, lượng đồng vị phóng xạ còn lại một nửa:',
        },
        { type: 'tex', tex: 'm = m_0 \\cdot \\left(\\dfrac{1}{2}\\right)^{t/T}' },
        {
          type: 'table',
          head: ['Đồng vị', 'Chu kì bán rã $T$', 'Dùng để định tuổi'],
          rows: [
            ['Carbon-14', '$5\\,730$ năm', 'mẫu sinh vật dưới khoảng $50\\,000$ năm tuổi'],
            ['Uranium-235', 'khoảng $704$ triệu năm', 'đá rất cổ'],
            ['Potassium-40', 'khoảng $1{,}3$ tỉ năm', 'đá núi lửa hàng triệu năm tuổi'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ý nghĩa của hoá thạch',
          text: 'Hoá thạch là bằng chứng trực tiếp cho biết lịch sử phát sinh, phát triển và diệt vong của sinh vật: loài nào xuất hiện trước, loài nào sau, những dạng trung gian (như chim cổ Archaeopteryx sống ở kỉ Jura, vừa có lông vũ vừa có răng và đuôi dài như bò sát). Hoá thạch còn giúp nghiên cứu lịch sử vỏ Trái Đất và khí hậu thời cổ.',
        },
      ],
    },
    {
      heading: 'Bằng chứng giải phẫu so sánh',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ quan tương đồng',
          text: 'Cơ quan tương đồng là những cơ quan nằm ở những vị trí tương ứng trên cơ thể, có cùng nguồn gốc trong quá trình phát triển phôi nên có kiểu cấu tạo giống nhau, dù hiện nay có thể thực hiện các chức năng khác nhau.',
        },
        {
          type: 'p',
          text: 'Chi trước của người, mèo, cá voi, dơi, chim và ngựa đều gồm xương cánh tay, xương cẳng tay, xương cổ tay, xương bàn tay và xương ngón tay. Chúng được thừa hưởng từ một tổ tiên chung, rồi biến đổi khác nhau để thích nghi với các chức năng khác nhau: cơ quan tương đồng phản ánh tiến hoá phân li. Hươu cao cổ cũng chỉ có $7$ đốt sống cổ như mọi loài thú khác.',
        },
        { type: 'widget', name: 'organ-sort' },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ quan thoái hoá',
          text: 'Cơ quan thoái hoá là cơ quan tương đồng nhưng nay chỉ còn lại vết tích, không còn chức năng hoặc chức năng bị tiêu giảm: ruột thừa ở người, xương chi sau của cá voi, ... Chúng là dấu vết của những cơ quan từng phát triển ở loài tổ tiên. Đôi khi cơ quan thoái hoá lại phát triển ở một cá thể (người có đuôi, có nhiều lông rậm khắp mặt), gọi là hiện tượng lại tổ.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Cơ quan tương tự',
          text: 'Cơ quan tương tự là những cơ quan khác nguồn gốc nhưng có hình dạng và chức năng giống nhau do sống trong điều kiện môi trường giống nhau: cánh côn trùng và cánh dơi, mang cá và mang tôm, chân chuột chũi và chân dế chũi. Cơ quan tương tự không chứng minh nguồn gốc chung mà phản ánh tiến hoá hội tụ (đồng quy).',
        },
      ],
    },
    {
      heading: 'Bằng chứng tế bào học và sinh học phân tử',
      blocks: [
        {
          type: 'p',
          text: 'Học thuyết tế bào: mọi sinh vật đều được cấu tạo từ tế bào; tế bào chỉ được sinh ra từ tế bào có trước. Tế bào của mọi sinh vật đều có màng sinh chất, tế bào chất và nhân (hoặc vùng nhân), hoạt động trao đổi chất và năng lượng về cơ bản giống nhau. Điều đó cho thấy sinh giới có chung nguồn gốc.',
        },
        {
          type: 'list',
          items: [
            'Vật chất di truyền của mọi sinh vật là DNA (một số virus là RNA); DNA được cấu tạo từ bốn loại nucleotide.',
            'Mã di truyền có tính phổ biến: hầu hết các loài dùng chung một bộ mã di truyền.',
            'Protein của hầu hết các loài được cấu tạo từ khoảng $20$ loại amino acid.',
          ],
        },
        {
          type: 'p',
          text: 'Các loài có quan hệ họ hàng càng gần thì trình tự nucleotide của DNA và trình tự amino acid của protein càng giống nhau. Ví dụ, chuỗi cytochrome c (gồm $104$ amino acid) của người và tinh tinh giống nhau hoàn toàn, của người và khỉ rhesus chỉ khác $1$ amino acid, còn của người và nấm men khác khoảng $44$ amino acid.',
        },
        {
          type: 'table',
          head: ['Loài so với người', 'Số amino acid khác nhau trong cytochrome c'],
          rows: [
            ['Tinh tinh', '$0$'],
            ['Khỉ rhesus', '$1$'],
            ['Ngựa', '$12$'],
            ['Gà', '$13$'],
            ['Cá ngừ', '$21$'],
            ['Nấm men', '$44$'],
          ],
          caption: 'Số liệu làm tròn theo các tài liệu sinh học phổ thông.',
        },
        {
          type: 'list',
          items: [
            'Cá băng ở Nam Cực không có hemoglobin, nhưng hệ gene của chúng vẫn còn gene hemoglobin bị đột biến mất chức năng: chúng tiến hoá từ loài cá có hemoglobin.',
            'So sánh DNA ti thể của các nhóm người hiện đại cho thấy loài người xuất hiện ở châu Phi rồi di cư sang các châu lục khác.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bằng chứng chính xác nhất',
          text: 'Bằng chứng sinh học phân tử định lượng được mức độ khác nhau giữa các loài (số nucleotide, số amino acid khác nhau) nên được coi là chính xác nhất để xác định quan hệ họ hàng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chi trước của sáu loài',
    instruction:
      'Chọn một nhóm xương để tô màu nhóm đó trên cả sáu chi trước, rồi chạm vào một chi để đọc nhóm xương ấy đã biến đổi thế nào cho phù hợp với chức năng. Nhận xét thứ tự các nhóm xương ở các loài.',
  },
  examples: [
    {
      problem:
        'Một mẩu xương động vật tìm thấy trong hang động chỉ còn $12{,}5\\%$ lượng carbon-14 so với xương của động vật đang sống. Biết chu kì bán rã của carbon-14 là $5\\,730$ năm. Mẩu xương này khoảng bao nhiêu năm tuổi?',
      steps: [
        'Sau mỗi chu kì bán rã, lượng carbon-14 còn một nửa: $100\\% \\to 50\\% \\to 25\\% \\to 12{,}5\\%$.',
        'Vậy đã qua $3$ chu kì bán rã, vì $\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8} = 12{,}5\\%$.',
        'Tuổi mẫu xương: $t = 3 \\cdot 5\\,730 = 17\\,190$ năm.',
      ],
      answer: 'Mẩu xương khoảng $17\\,190$ năm tuổi.',
    },
    {
      problem:
        'Dựa vào bảng số amino acid khác nhau trong cytochrome c, hãy sắp xếp tinh tinh, ngựa, cá ngừ, nấm men theo mức độ họ hàng với người, từ gần đến xa, và giải thích.',
      steps: [
        'Số amino acid khác nhau so với người: tinh tinh $0$, ngựa $12$, cá ngừ $21$, nấm men $44$.',
        'Hai loài có họ hàng càng gần thì trình tự amino acid của cùng một protein càng giống nhau, tức số amino acid khác nhau càng ít.',
        'Do đó thứ tự từ gần đến xa: tinh tinh, ngựa, cá ngừ, nấm men; điều này khớp với bằng chứng hoá thạch và giải phẫu so sánh.',
      ],
      answer: 'Tinh tinh → ngựa → cá ngừ → nấm men.',
    },
    {
      problem:
        'Cánh dơi và cánh côn trùng đều dùng để bay; cánh dơi và chi trước của mèo có chức năng khác nhau. Cặp nào là cơ quan tương đồng, cặp nào là cơ quan tương tự? Mỗi cặp phản ánh hướng tiến hoá nào?',
      steps: [
        'Cánh dơi và chi trước mèo đều gồm xương cánh tay, cẳng tay, cổ tay, bàn tay, ngón tay ở cùng vị trí: cùng nguồn gốc, khác chức năng, nên là cơ quan tương đồng, phản ánh tiến hoá phân li.',
        'Cánh côn trùng là nếp da ở lưng, không có xương; cánh dơi là chi trước có xương: khác nguồn gốc nhưng cùng chức năng bay, nên là cơ quan tương tự, phản ánh tiến hoá hội tụ.',
      ],
      answer:
        'Cánh dơi – chi trước mèo: cơ quan tương đồng (tiến hoá phân li); cánh dơi – cánh côn trùng: cơ quan tương tự (tiến hoá hội tụ).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Bằng chứng nào sau đây là bằng chứng tiến hoá trực tiếp?',
      options: [
        'Hoá thạch',
        'Cơ quan tương đồng',
        'Mã di truyền có tính phổ biến',
        'Học thuyết tế bào',
      ],
      answer: 0,
      hints: ['Bằng chứng trực tiếp cho thấy chính sinh vật của thời trước còn lưu lại.'],
      solution:
        'Hoá thạch là di tích của chính sinh vật thời trước nên là bằng chứng trực tiếp; giải phẫu so sánh, tế bào học và sinh học phân tử là bằng chứng gián tiếp.',
    },
    {
      type: 'number',
      prompt:
        'Một mẫu gỗ cổ còn $25\\%$ lượng carbon-14 so với gỗ cây đang sống. Chu kì bán rã của carbon-14 là $5\\,730$ năm. Mẫu gỗ khoảng bao nhiêu năm tuổi?',
      answer: 11460,
      unit: 'năm',
      hints: [
        'Đếm xem phải chia đôi bao nhiêu lần để từ $100\\%$ còn $25\\%$.',
        'Tuổi mẫu bằng số chu kì bán rã nhân với $5\\,730$ năm.',
      ],
      solution:
        '$100\\% \\to 50\\% \\to 25\\%$: qua $2$ chu kì bán rã. Tuổi: $2 \\cdot 5\\,730 = 11\\,460$ năm.',
    },
    {
      type: 'number',
      prompt:
        'Sau $22\\,920$ năm, lượng carbon-14 trong một mẫu xương còn lại bao nhiêu phần trăm so với ban đầu? (chu kì bán rã $5\\,730$ năm)',
      answer: 6.25,
      unit: '%',
      tolerance: 0.001,
      hints: [
        'Tính số chu kì bán rã: $22\\,920 : 5\\,730$.',
        'Mỗi chu kì, lượng còn lại giảm một nửa.',
      ],
      solution:
        '$22\\,920 : 5\\,730 = 4$ chu kì. Lượng còn lại: $\\left(\\dfrac{1}{2}\\right)^4 = \\dfrac{1}{16} = 6{,}25\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Cặp cơ quan nào sau đây là cơ quan tương tự?',
      options: [
        'Mang cá và mang tôm',
        'Tay người và vây ngực cá voi',
        'Cánh dơi và cánh chim (bộ xương cánh)',
        'Tuyến nọc độc của rắn và tuyến nước bọt của thú',
      ],
      answer: 0,
      hints: ['Cơ quan tương tự có cùng chức năng nhưng khác nguồn gốc.'],
      solution:
        'Mang cá và mang tôm cùng chức năng hô hấp trong nước nhưng khác nguồn gốc (cá là động vật có xương sống, tôm là chân khớp), nên là cơ quan tương tự. Các cặp còn lại cùng nguồn gốc, là cơ quan tương đồng.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các ví dụ về cơ quan thoái hoá ở người hoặc động vật.',
      options: [
        'Ruột thừa ở người',
        'Xương chi sau của cá voi',
        'Cánh của côn trùng',
        'Ngón cái của người',
        'Vây ngực của cá voi',
      ],
      answers: [0, 1],
      hints: [
        'Cơ quan thoái hoá chỉ còn vết tích và không còn chức năng hoặc chức năng tiêu giảm.',
      ],
      solution:
        'Ruột thừa ở người và xương chi sau của cá voi là vết tích của cơ quan phát triển ở tổ tiên. Cánh côn trùng, ngón cái của người và vây ngực cá voi vẫn hoạt động bình thường.',
    },
    {
      type: 'choice',
      prompt: 'Cơ quan tương đồng là bằng chứng cho thấy',
      options: [
        'các loài có chung nguồn gốc, tiến hoá theo hướng phân li',
        'các loài sống trong môi trường giống nhau, tiến hoá hội tụ',
        'các loài có cùng chức năng thì có cùng nguồn gốc',
        'mọi cơ quan đều thoái hoá dần theo thời gian',
      ],
      answer: 0,
      hints: ['Cơ quan tương đồng có cùng nguồn gốc nhưng có thể khác chức năng.'],
      solution:
        'Cơ quan tương đồng được thừa hưởng từ tổ tiên chung rồi biến đổi theo những hướng khác nhau, nên phản ánh nguồn gốc chung và tiến hoá phân li.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các loài theo mức độ họ hàng với người, từ gần đến xa, dựa vào số amino acid khác nhau trong cytochrome c: khỉ rhesus $1$, gà $13$, nấm men $44$, cá ngừ $21$.',
      items: ['Nấm men', 'Khỉ rhesus', 'Cá ngừ', 'Gà'],
      answer: [1, 3, 2, 0],
      hints: ['Số amino acid khác nhau càng ít thì họ hàng càng gần.'],
      solution:
        'Xếp theo số amino acid khác nhau tăng dần: khỉ rhesus ($1$), gà ($13$), cá ngừ ($21$), nấm men ($44$).',
    },
    {
      type: 'choice',
      prompt: 'Bằng chứng nào cho thấy mọi sinh vật có chung nguồn gốc ở cấp độ phân tử?',
      options: [
        'Hầu hết các loài dùng chung một bộ mã di truyền',
        'Các loài có kích thước cơ thể khác nhau',
        'Cánh dơi và cánh côn trùng cùng dùng để bay',
        'Mỗi loài sống ở một môi trường riêng',
      ],
      answer: 0,
      hints: ['Tìm đặc điểm chung của vật chất di truyền ở các loài.'],
      solution:
        'Mã di truyền có tính phổ biến, vật chất di truyền đều là DNA và protein đều được cấu tạo từ khoảng $20$ loại amino acid: đó là bằng chứng sinh học phân tử về nguồn gốc chung.',
    },
    {
      type: 'text',
      prompt:
        'Một số người sinh ra có đuôi dài vài centimet hoặc có lông rậm khắp mặt. Cơ quan thoái hoá phát triển trở lại ở một cá thể như vậy gọi là hiện tượng gì?',
      accept: ['lại tổ', 'hiện tượng lại tổ'],
      hints: ['Đặc điểm đó vốn có ở tổ tiên xa xưa của loài người.'],
      solution: 'Đó là hiện tượng lại tổ: cơ quan thoái hoá phát triển mạnh trở lại ở một cá thể.',
    },
  ],
  takeaways: [
    'Hoá thạch là bằng chứng trực tiếp; tuổi hoá thạch được xác định bằng đồng vị phóng xạ, sau mỗi chu kì bán rã lượng đồng vị còn một nửa.',
    'Cơ quan tương đồng (cùng nguồn gốc, có thể khác chức năng) phản ánh tiến hoá phân li; cơ quan thoái hoá là vết tích của cơ quan ở tổ tiên.',
    'Cơ quan tương tự (khác nguồn gốc, cùng chức năng) phản ánh tiến hoá hội tụ, không chứng minh nguồn gốc chung.',
    'Mọi sinh vật cấu tạo từ tế bào, dùng chung mã di truyền và khoảng $20$ loại amino acid; loài càng gần nhau thì DNA và protein càng giống nhau.',
  ],
};
