/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm, phương trình và vai trò của hô hấp ở thực vật; hai con đường hô hấp hiếu khí và lên men, số ATP mỗi con đường tạo ra; hô hấp sáng; mối quan hệ giữa hô hấp và quang hợp; các nhân tố ảnh hưởng và ứng dụng trong bảo quản nông sản, trồng trọt.',
  intro:
    'Một đống thóc vừa gặt chưa phơi khô sẽ nóng dần lên và có thể mọc mầm, thối hỏng. Hơi nóng ấy từ đâu ra? Lúa ngập úng lâu ngày lại vàng úa rồi chết dù đứng ngập trong nước. Cả hai chuyện đều xoay quanh một quá trình diễn ra ở mọi tế bào sống của cây: hô hấp.',
  objectives: [
    'Nêu được khái niệm, phương trình tổng quát và vai trò của hô hấp ở thực vật.',
    'Trình bày được các giai đoạn của hô hấp hiếu khí và lên men; so sánh được số ATP tạo ra.',
    'Nêu được hô hấp sáng xảy ra khi nào, ở đâu và ảnh hưởng của nó.',
    'Phân tích được mối quan hệ giữa hô hấp và quang hợp.',
    'Giải thích được ảnh hưởng của nước, nhiệt độ, $\\mathrm{O_2}$, $\\mathrm{CO_2}$ đến hô hấp và vận dụng vào bảo quản nông sản, trồng trọt.',
  ],
  sections: [
    {
      heading: 'Khái quát về hô hấp ở thực vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hô hấp ở thực vật',
          text: 'Là quá trình phân giải các hợp chất hữu cơ phức tạp (chủ yếu là carbohydrate) thành các chất đơn giản hơn, đồng thời giải phóng năng lượng dưới dạng ATP và nhiệt. Hô hấp có thể là hô hấp hiếu khí (cần $\\mathrm{O_2}$) hoặc lên men (không cần $\\mathrm{O_2}$); ở thực vật, hô hấp hiếu khí là chủ yếu.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{C_6H_{12}O_6 + 6\\,O_2 \\longrightarrow 6\\,CO_2 + 6\\,H_2O} + \\text{năng lượng (ATP + nhiệt)}',
        },
        {
          type: 'list',
          items: [
            'Cung cấp ATP cho hầu hết hoạt động sống: vận chuyển và tổng hợp các chất, sinh trưởng, phát triển, cảm ứng.',
            'Nhiệt toả ra giúp duy trì nhiệt độ thuận lợi cho các hoạt động sống của cây.',
            'Tạo các sản phẩm trung gian (đường 3 carbon, pyruvate…) làm nguyên liệu tổng hợp protein, acid béo và nhiều chất khác.',
          ],
        },
      ],
    },
    {
      heading: 'Các con đường hô hấp',
      blocks: [
        {
          type: 'p',
          text: 'Cả hai con đường đều bắt đầu bằng đường phân trong tế bào chất: một phân tử glucose bị tách thành $2$ pyruvate, tạo $4$ ATP nhưng dùng mất $2$ ATP để hoạt hoá glucose, nên thu $2$ ATP và $2$ NADH. Đường phân không cần $\\mathrm{O_2}$. Sau đó, tuỳ có hay không có $\\mathrm{O_2}$, pyruvate đi theo một trong hai con đường.',
        },
        {
          type: 'table',
          caption: 'Hô hấp hiếu khí, tính cho một phân tử glucose',
          head: ['Giai đoạn', 'Nơi diễn ra', 'Sản phẩm chính'],
          rows: [
            ['Đường phân', 'Tế bào chất', '$2$ pyruvate, $2$ ATP, $2$ NADH'],
            [
              'Oxy hoá pyruvate và chu trình Krebs',
              'Chất nền ti thể',
              '$6\\,\\mathrm{CO_2}$, $2$ ATP, $8$ NADH, $2\\,\\mathrm{FADH_2}$',
            ],
            ['Chuỗi truyền electron', 'Màng trong ti thể', '$\\mathrm{H_2O}$ và khoảng $28$ ATP'],
          ],
        },
        {
          type: 'p',
          text: 'Ở chuỗi truyền electron, electron từ NADH và $\\mathrm{FADH_2}$ được chuyển dần tới $\\mathrm{O_2}$ tạo thành nước; mỗi NADH cho khoảng $2{,}5$ ATP, mỗi $\\mathrm{FADH_2}$ khoảng $1{,}5$ ATP. Tổng cộng, một phân tử glucose cho khoảng $30$ đến $32$ ATP. Hô hấp hiếu khí diễn ra mạnh ở mô đang hoạt động mạnh như hạt đang nảy mầm, cây đang ra hoa, kết quả.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Lên men',
          text: 'Khi thiếu $\\mathrm{O_2}$ (rễ cây bị ngập úng, hạt bị ngâm nước), tế bào chuyển sang lên men trong tế bào chất: sau đường phân, pyruvate bị khử thành ethanol và $\\mathrm{CO_2}$ (lên men rượu) hoặc lactate (lên men lactic). Lên men chỉ thu $2$ ATP từ một glucose; đây là cách thích nghi tạm thời của cây.',
        },
        { type: 'widget', name: 'ba-con-duong' },
      ],
    },
    {
      heading: 'Hô hấp sáng',
      blocks: [
        {
          type: 'p',
          text: 'Ở thực vật C3, khi cường độ ánh sáng cao, trời nóng và khô, khí khổng đóng lại: $\\mathrm{CO_2}$ trong lá cạn dần còn $\\mathrm{O_2}$ do quang hợp thải ra tích luỹ nhiều. Lúc đó enzyme Rubisco gắn $\\mathrm{O_2}$ (thay vì $\\mathrm{CO_2}$) vào RuBP. Sản phẩm được chuyển lần lượt qua lục lạp, peroxisome và ti thể, cuối cùng thải ra $\\mathrm{CO_2}$.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Hô hấp sáng gây lãng phí',
          text: 'Hô hấp sáng xảy ra ngoài sáng, hấp thụ $\\mathrm{O_2}$, thải $\\mathrm{CO_2}$ nhưng không tạo ATP, nên làm hao hụt sản phẩm quang hợp và giảm năng suất cây C3. Thực vật C4 và CAM giữ nồng độ $\\mathrm{CO_2}$ quanh Rubisco cao nên hầu như không có hô hấp sáng.',
        },
      ],
    },
    {
      heading: 'Mối quan hệ giữa hô hấp và quang hợp',
      blocks: [
        {
          type: 'table',
          head: ['Tiêu chí', 'Quang hợp', 'Hô hấp'],
          rows: [
            ['Nơi diễn ra', 'Lục lạp', 'Tế bào chất và ti thể'],
            [
              'Nguyên liệu',
              '$\\mathrm{CO_2}$, $\\mathrm{H_2O}$, năng lượng ánh sáng',
              'Chất hữu cơ, $\\mathrm{O_2}$',
            ],
            [
              'Sản phẩm',
              'Chất hữu cơ, $\\mathrm{O_2}$',
              '$\\mathrm{CO_2}$, $\\mathrm{H_2O}$, ATP và nhiệt',
            ],
            ['Năng lượng', 'Tích luỹ vào chất hữu cơ', 'Giải phóng từ chất hữu cơ'],
          ],
        },
        {
          type: 'p',
          text: 'Sản phẩm của quang hợp (chất hữu cơ, $\\mathrm{O_2}$) là nguyên liệu của hô hấp; sản phẩm của hô hấp ($\\mathrm{CO_2}$, $\\mathrm{H_2O}$) lại là nguyên liệu của quang hợp. Hô hấp còn tạo ATP và các sản phẩm trung gian cho tế bào, làm tăng áp suất thẩm thấu ở tế bào lông hút giúp rễ hút nước. Cân bằng giữa hai quá trình quyết định lượng chất hữu cơ tích luỹ trong cây, tức là năng suất cây trồng.',
        },
      ],
    },
    {
      heading: 'Nhân tố ảnh hưởng và ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Nước hoạt hoá các enzyme hô hấp. Hạt khô (khoảng $11$ đến $12\\%$ nước) hô hấp rất yếu; độ ẩm tăng lên $14$ đến $15\\%$ thì cường độ hô hấp tăng $4$ đến $5$ lần.',
            'Nhiệt độ ảnh hưởng đến hoạt tính enzyme: trong giới hạn, nhiệt độ tăng thì hô hấp tăng.',
            '$\\mathrm{O_2}$ là nguyên liệu của hô hấp hiếu khí. $\\mathrm{O_2}$ trong không khí giảm dưới $10\\%$ thì hô hấp bị ảnh hưởng, dưới $5\\%$ thì cây chuyển sang lên men; thiếu kéo dài sẽ làm cây chết.',
            '$\\mathrm{CO_2}$ là sản phẩm của hô hấp; nồng độ cao ức chế hô hấp hiếu khí.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ứng dụng',
          text: 'Bảo quản nông sản là giảm hô hấp đến mức tối thiểu: phơi sấy khô hạt (độ ẩm khoảng $10$ đến $13\\%$), bảo quản lạnh ở nhiệt độ hợp với từng loại, bảo quản trong khí quyển điều chỉnh tăng $\\mathrm{CO_2}$, giảm $\\mathrm{O_2}$. Trong trồng trọt thì ngược lại, cần cho rễ hô hấp tốt: làm đất tơi xốp, xới xáo, làm cỏ sục bùn, tưới tiêu hợp lí, chống ngập úng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Chạy một phân tử glucose qua hai con đường',
    instruction:
      'Đặt nồng độ $\\mathrm{O_2}$, rồi bấm "Chạy giai đoạn tiếp" để đi từng giai đoạn và xem ATP cộng dồn. Sau đó kéo $\\mathrm{O_2}$ xuống dưới $5\\%$ (như rễ ngập úng) và chạy lại để so sánh số ATP.',
  },
  examples: [
    {
      problem:
        'Một phân tử glucose phân giải hiếu khí tạo $10$ NADH và $2\\,\\mathrm{FADH_2}$ (tính cả đường phân), cùng $4$ ATP tạo trực tiếp. Biết mỗi NADH cho $2{,}5$ ATP, mỗi $\\mathrm{FADH_2}$ cho $1{,}5$ ATP. Tính tổng số ATP.',
      steps: [
        'ATP từ NADH: $10 \\cdot 2{,}5 = 25$.',
        'ATP từ $\\mathrm{FADH_2}$: $2 \\cdot 1{,}5 = 3$.',
        'Chuỗi truyền electron tạo $25 + 3 = 28$ ATP.',
        'Cộng ATP tạo trực tiếp: $28 + 4 = 32$ ATP.',
      ],
      answer: 'Tối đa $32$ ATP (sách ghi khoảng $30$ đến $32$ ATP).',
    },
    {
      problem:
        'Tế bào rễ cần $96$ ATP. Nếu lấy từ lên men thì cần bao nhiêu phân tử glucose? Nếu hô hấp hiếu khí (lấy $32$ ATP mỗi glucose) thì cần bao nhiêu? Từ đó giải thích vì sao cây ngập úng lâu sẽ chết.',
      steps: [
        'Lên men: mỗi glucose cho $2$ ATP, cần $96 : 2 = 48$ glucose.',
        'Hiếu khí: $96 : 32 = 3$ glucose.',
        'Lên men tốn glucose gấp $16$ lần, chất dự trữ cạn nhanh; ethanol tích luỹ còn gây độc cho tế bào rễ.',
      ],
      answer:
        '$48$ và $3$ phân tử glucose. Ngập úng kéo dài làm rễ thiếu năng lượng và bị đầu độc nên cây chết.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Giai đoạn nào chung cho cả hô hấp hiếu khí và lên men?',
      options: ['Đường phân', 'Chu trình Krebs', 'Chuỗi truyền electron', 'Oxy hoá pyruvate'],
      answer: 0,
      hints: ['Giai đoạn nào xảy ra trong tế bào chất và không cần $\\mathrm{O_2}$?'],
      solution:
        'Đường phân diễn ra trong tế bào chất, không cần $\\mathrm{O_2}$, là giai đoạn đầu của cả hai con đường.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi giai đoạn của hô hấp hiếu khí với nơi diễn ra.',
      left: ['Đường phân', 'Chu trình Krebs', 'Chuỗi truyền electron'],
      right: ['Màng trong ti thể', 'Tế bào chất', 'Chất nền ti thể', 'Lục lạp'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Hô hấp không diễn ra trong lục lạp. Chuỗi truyền electron cần một lớp màng.'],
      solution:
        'Đường phân: tế bào chất. Chu trình Krebs: chất nền ti thể. Chuỗi truyền electron: màng trong ti thể.',
    },
    {
      type: 'number',
      prompt: 'Lên men một phân tử glucose tạo ra bao nhiêu ATP?',
      answer: 2,
      unit: 'ATP',
      hints: ['ATP của lên men chỉ đến từ một giai đoạn.'],
      solution: 'Chỉ có $2$ ATP từ đường phân; bước lên men không tạo thêm ATP.',
    },
    {
      type: 'number',
      prompt:
        'Theo số liệu trong bài, chuỗi truyền electron nhận $10$ NADH và $2\\,\\mathrm{FADH_2}$ từ một glucose. Nó tạo ra khoảng bao nhiêu ATP?',
      answer: 28,
      unit: 'ATP',
      hints: ['Mỗi NADH cho $2{,}5$ ATP, mỗi $\\mathrm{FADH_2}$ cho $1{,}5$ ATP.'],
      solution: '$10 \\cdot 2{,}5 + 2 \\cdot 1{,}5 = 25 + 3 = 28$ ATP.',
    },
    {
      type: 'number',
      prompt:
        'Một tế bào cần $160$ ATP. Nếu chỉ lên men thì phải phân giải bao nhiêu phân tử glucose?',
      answer: 80,
      hints: ['Mỗi glucose lên men cho bao nhiêu ATP?'],
      solution: 'Mỗi glucose cho $2$ ATP nên cần $160 : 2 = 80$ phân tử glucose.',
    },
    {
      type: 'multi',
      prompt: 'Những phát biểu nào đúng về hô hấp sáng?',
      options: [
        'Xảy ra chủ yếu ở thực vật C3 khi ánh sáng mạnh, $\\mathrm{CO_2}$ trong lá cạn',
        'Liên quan đến ba bào quan: lục lạp, peroxisome và ti thể',
        'Tạo ra nhiều ATP cho cây',
        'Làm hao hụt sản phẩm quang hợp',
        'Xảy ra mạnh ở thực vật C4',
      ],
      answers: [0, 1, 3],
      hints: [
        'Hô hấp sáng có tạo ATP không? Thực vật C4 giữ $\\mathrm{CO_2}$ quanh Rubisco thế nào?',
      ],
      solution:
        'Hô hấp sáng xảy ra ở cây C3 khi nắng gắt, đi qua lục lạp, peroxisome, ti thể, không tạo ATP và gây lãng phí sản phẩm quang hợp. Cây C4 hầu như không có hô hấp sáng.',
    },
    {
      type: 'choice',
      prompt: 'Câu nào nêu đúng mối quan hệ giữa quang hợp và hô hấp?',
      options: [
        'Sản phẩm của quá trình này là nguyên liệu của quá trình kia',
        'Hai quá trình diễn ra trong cùng một bào quan',
        'Cả hai đều tích luỹ năng lượng vào chất hữu cơ',
        'Hô hấp chỉ xảy ra vào ban đêm, khi không có quang hợp',
      ],
      answer: 0,
      hints: ['So sánh nguyên liệu và sản phẩm của hai phương trình tổng quát.'],
      solution:
        'Quang hợp tạo chất hữu cơ và $\\mathrm{O_2}$ cho hô hấp; hô hấp trả lại $\\mathrm{CO_2}$ và $\\mathrm{H_2O}$ cho quang hợp. Hô hấp diễn ra cả ngày lẫn đêm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao thóc phải phơi khô (độ ẩm khoảng $13\\%$) trước khi cho vào kho?',
      options: [
        'Hạt khô hô hấp rất yếu, ít tiêu hao chất hữu cơ và ít toả nhiệt',
        'Hạt khô quang hợp mạnh hơn',
        'Phơi khô làm tăng lượng tinh bột trong hạt',
        'Phơi khô làm hạt hô hấp mạnh để nhanh nảy mầm',
      ],
      answer: 0,
      hints: ['Nước có vai trò gì với enzyme hô hấp?'],
      solution:
        'Nước hoạt hoá enzyme hô hấp; hạt khô hô hấp yếu nên ít hao chất khô, không nóng lên, không nảy mầm, bảo quản được lâu.',
    },
    {
      type: 'choice',
      prompt: 'Biện pháp nào giúp rễ cây hô hấp hiếu khí tốt?',
      options: [
        'Làm đất tơi xốp, xới xáo, chống ngập úng',
        'Tưới thật nhiều nước cho đất luôn ngập',
        'Nén chặt đất quanh gốc',
        'Phủ kín mặt đất bằng ni lông',
      ],
      answer: 0,
      hints: ['Rễ cần chất khí nào để hô hấp hiếu khí?'],
      solution:
        'Đất tơi xốp, thoáng khí cung cấp đủ $\\mathrm{O_2}$ cho rễ; ngập úng hay nén chặt làm thiếu $\\mathrm{O_2}$, rễ phải lên men.',
    },
  ],
  takeaways: [
    'Hô hấp phân giải chất hữu cơ, giải phóng năng lượng dạng ATP và nhiệt: $\\mathrm{C_6H_{12}O_6 + 6\\,O_2 \\to 6\\,CO_2 + 6\\,H_2O}$ + năng lượng.',
    'Hô hấp hiếu khí: đường phân (tế bào chất), chu trình Krebs (chất nền ti thể), chuỗi truyền electron (màng trong ti thể); khoảng $30$ đến $32$ ATP mỗi glucose.',
    'Lên men khi thiếu $\\mathrm{O_2}$: đường phân rồi tạo ethanol và $\\mathrm{CO_2}$ hoặc lactate; chỉ $2$ ATP.',
    'Hô hấp sáng ở cây C3 khi nắng gắt: Rubisco gắn $\\mathrm{O_2}$, qua lục lạp, peroxisome, ti thể; không tạo ATP, gây lãng phí sản phẩm quang hợp.',
    'Quang hợp và hô hấp có sản phẩm của quá trình này là nguyên liệu của quá trình kia.',
    'Bảo quản nông sản: giảm hô hấp bằng làm khô, làm lạnh, tăng $\\mathrm{CO_2}$; trồng trọt: cho rễ đủ $\\mathrm{O_2}$.',
  ],
};
