/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm và vai trò của quang hợp, hệ sắc tố, pha sáng và pha tối ở thực vật C3, C4, CAM, ảnh hưởng của ánh sáng, nồng độ CO2, nhiệt độ (điểm bù, điểm bão hoà) và mối liên hệ giữa quang hợp với năng suất cây trồng.',
  intro:
    'Gần như mọi thứ em ăn đều bắt nguồn từ một phản ứng xảy ra trong lá cây. Vì sao lúa cần nhiều nắng mà cây trầu bà trong nhà vẫn sống? Vì sao xương rồng đóng khí khổng ban ngày mà vẫn quang hợp được? Bài này tìm hiểu chiếc "nhà máy" lục lạp và điều kiện giúp nó chạy tốt nhất.',
  objectives: [
    'Nêu được khái niệm, phương trình tổng quát và vai trò của quang hợp.',
    'Nêu được thành phần và vai trò của hệ sắc tố quang hợp.',
    'Phân biệt được pha sáng và pha tối, nêu được mối liên hệ giữa hai pha.',
    'Phân biệt được con đường cố định $\\mathrm{CO_2}$ ở thực vật C3, C4 và CAM.',
    'Phân tích được ảnh hưởng của ánh sáng, $\\mathrm{CO_2}$, nhiệt độ đến quang hợp; giải thích được điểm bù và điểm bão hoà.',
    'Nêu được các biện pháp nâng cao năng suất cây trồng thông qua quang hợp.',
  ],
  sections: [
    {
      heading: 'Khái quát về quang hợp',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quang hợp ở thực vật',
          text: 'Là quá trình lục lạp hấp thụ và sử dụng năng lượng ánh sáng để tổng hợp chất hữu cơ từ $\\mathrm{CO_2}$ và nước, đồng thời giải phóng $\\mathrm{O_2}$.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{6\\,CO_2 + 6\\,H_2O} \\xrightarrow[\\text{diệp lục}]{\\text{ánh sáng}} \\mathrm{C_6H_{12}O_6 + 6\\,O_2}',
        },
        {
          type: 'list',
          items: [
            'Cung cấp thức ăn và năng lượng cho hầu hết sinh vật trên Trái Đất.',
            'Cung cấp nguyên liệu cho công nghiệp, xây dựng, dược phẩm.',
            'Hấp thụ $\\mathrm{CO_2}$, thải $\\mathrm{O_2}$, giữ cân bằng khí trong khí quyển.',
          ],
        },
        {
          type: 'p',
          text: 'Lá là cơ quan quang hợp chủ yếu. Lục lạp có màng thylakoid chứa hệ sắc tố, và chất nền chứa các enzyme cố định $\\mathrm{CO_2}$.',
        },
      ],
    },
    {
      heading: 'Hệ sắc tố quang hợp',
      blocks: [
        {
          type: 'table',
          head: ['Nhóm sắc tố', 'Thành phần', 'Màu và vai trò'],
          rows: [
            [
              'Diệp lục',
              'Diệp lục a, diệp lục b',
              'Màu xanh lục; hấp thụ mạnh ánh sáng đỏ và xanh tím. Diệp lục a ở trung tâm phản ứng trực tiếp chuyển quang năng thành hoá năng',
            ],
            [
              'Carotenoid',
              'Carotene, xanthophyll',
              'Màu vàng, cam, đỏ; sắc tố phụ, hấp thụ ánh sáng rồi truyền năng lượng cho diệp lục',
            ],
          ],
        },
        {
          type: 'tex',
          tex: '\\text{carotenoid} \\longrightarrow \\text{diệp lục b} \\longrightarrow \\text{diệp lục a} \\longrightarrow \\text{diệp lục a ở trung tâm phản ứng}',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Lá màu đỏ vẫn quang hợp được vì vẫn có diệp lục, chỉ là diệp lục bị sắc tố đỏ che lấp màu xanh.',
        },
      ],
    },
    {
      heading: 'Hai pha của quang hợp',
      blocks: [
        {
          type: 'table',
          head: ['Tiêu chí', 'Pha sáng', 'Pha tối'],
          rows: [
            ['Nơi diễn ra', 'Màng thylakoid', 'Chất nền lục lạp'],
            [
              'Nguyên liệu',
              'Ánh sáng, $\\mathrm{H_2O}$, $\\mathrm{ADP}$, $\\mathrm{NADP^+}$',
              '$\\mathrm{CO_2}$, ATP, NADPH',
            ],
            [
              'Sản phẩm',
              'ATP, NADPH, $\\mathrm{O_2}$',
              'Chất hữu cơ, $\\mathrm{ADP}$, $\\mathrm{NADP^+}$',
            ],
            [
              'Diễn biến chính',
              'Sắc tố hấp thụ ánh sáng; nước bị phân li, giải phóng $\\mathrm{O_2}$; tạo ATP và NADPH',
              'Cố định $\\mathrm{CO_2}$ thành chất hữu cơ nhờ ATP, NADPH',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Pha sáng giống nhau ở mọi nhóm thực vật. Pha tối luôn có chu trình Calvin gồm ba giai đoạn: cố định $\\mathrm{CO_2}$ (ribulose-1,5-bisphosphate, viết tắt RuBP, nhận $\\mathrm{CO_2}$ tạo 3-phosphoglyceric acid, viết tắt 3-PGA), khử (3-PGA thành aldehyde phosphoglyceric, viết tắt AlPG, dùng ATP và NADPH), tái sinh RuBP (dùng ATP). Một phần AlPG đi tổng hợp glucose và các chất hữu cơ khác.',
        },
        {
          type: 'tex',
          tex: '\\mathrm{6\\,CO_2 + 18\\,ATP + 12\\,NADPH} \\longrightarrow \\mathrm{C_6H_{12}O_6} + \\dots',
        },
        { type: 'widget', name: 'hai-pha' },
        {
          type: 'callout',
          tone: 'warning',
          title: '"Pha tối" không có nghĩa là ban đêm',
          text: 'Pha tối không cần ánh sáng trực tiếp, nhưng cần ATP và NADPH do pha sáng tạo ra. Vì vậy khi không có ánh sáng đủ lâu, chu trình Calvin cũng dừng lại.',
        },
      ],
    },
    {
      heading: 'Thực vật C3, C4 và CAM',
      blocks: [
        {
          type: 'p',
          text: 'Tên C3, C4 đặt theo số carbon của sản phẩm đầu tiên khi cố định $\\mathrm{CO_2}$. CAM viết tắt từ Crassulacean Acid Metabolism, theo tên họ Thuốc bỏng (Crassulaceae), nơi cơ chế này được phát hiện đầu tiên.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'C3', 'C4', 'CAM'],
          rows: [
            [
              'Đại diện',
              'Lúa, khoai, sắn, rau, đậu',
              'Mía, ngô, rau dền',
              'Dứa, xương rồng, thuốc bỏng',
            ],
            ['Chất nhận $\\mathrm{CO_2}$ đầu tiên', 'RuBP', 'PEP', 'PEP'],
            ['Sản phẩm đầu tiên', '3-PGA ($3$ C)', 'OAA ($4$ C)', 'OAA ($4$ C)'],
            [
              'Nơi, lúc diễn ra',
              'Chu trình Calvin ở tế bào mô giậu',
              'Cố định sơ bộ ở tế bào mô giậu, chu trình Calvin ở tế bào bao bó mạch (khác không gian)',
              'Cố định sơ bộ ban đêm, chu trình Calvin ban ngày, trong cùng một tế bào (khác thời gian)',
            ],
            [
              'Khí khổng',
              'Mở ban ngày',
              'Mở ban ngày, đóng bớt khi nắng nóng',
              'Đóng ban ngày, mở ban đêm',
            ],
            [
              'Môi trường',
              'Khí hậu ôn hoà',
              'Nhiệt đới, cận nhiệt đới; nóng, sáng mạnh',
              'Khô hạn, sa mạc',
            ],
          ],
        },
        {
          type: 'p',
          text: 'PEP là phosphoenolpyruvic acid, OAA là oxaloacetic acid. Enzyme PEP-carboxylase có ái lực cao với $\\mathrm{CO_2}$, nên C4 và CAM vẫn lấy được $\\mathrm{CO_2}$ khi nồng độ trong lá thấp lúc khí khổng khép bớt. Nhờ đó chúng thích nghi tốt với nơi nóng, khô. Cả ba nhóm đều có chu trình Calvin.',
        },
        { type: 'widget', name: 'nhom-thuc-vat' },
      ],
    },
    {
      heading: 'Các yếu tố ảnh hưởng đến quang hợp',
      blocks: [
        {
          type: 'list',
          items: [
            'Điểm bù ánh sáng: cường độ ánh sáng mà tại đó cường độ quang hợp bằng cường độ hô hấp.',
            'Điểm bão hoà ánh sáng: cường độ ánh sáng mà từ đó quang hợp đạt cực đại, tăng ánh sáng nữa quang hợp không tăng thêm, thậm chí có thể giảm.',
            'Cây ưa sáng có điểm bù, điểm bão hoà cao hơn cây ưa bóng. Thành phần ánh sáng cũng có ảnh hưởng: quang hợp mạnh nhất ở vùng ánh sáng đỏ, sau đó là xanh tím.',
          ],
        },
        {
          type: 'table',
          head: ['Yếu tố', 'Ảnh hưởng'],
          rows: [
            [
              'Nồng độ $\\mathrm{CO_2}$',
              'Trong không khí khoảng $0{,}04\\%$. Nồng độ tăng thì quang hợp tăng đến một giới hạn; điểm bão hoà của cây trồng khoảng $0{,}06$ đến $0{,}1\\%$. Nồng độ quá thấp thì quang hợp không xảy ra; quá cao (khoảng $0{,}2\\%$) có thể làm cây chết vì ngộ độc',
            ],
            [
              'Nhiệt độ',
              'Nhiệt độ tăng thì quang hợp tăng đến mức tối ưu rồi giảm: khoảng $25$ đến $30\\,^\\circ\\mathrm{C}$ ở cây nhiệt đới, $8$ đến $15\\,^\\circ\\mathrm{C}$ ở cây ôn đới. Quá nóng làm enzyme biến tính và hô hấp vượt quang hợp',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Quang hợp và năng suất cây trồng',
      blocks: [
        {
          type: 'p',
          text: 'Quang hợp quyết định khoảng $90$ đến $95\\%$ năng suất cây trồng, vì phần lớn chất khô của cây là chất hữu cơ tạo ra từ quang hợp. Muốn năng suất cao cần tăng diện tích và cường độ quang hợp, kéo dài thời gian quang hợp và tăng phần chất khô tích luỹ vào cơ quan thu hoạch.',
        },
        {
          type: 'list',
          items: [
            'Bón phân, tưới nước hợp lí, phòng trừ sâu bệnh.',
            'Gieo trồng đúng thời vụ, mật độ phù hợp, chọn giống có khả năng quang hợp cao.',
            'Trồng rau trong nhà kính, phòng kín với đèn LED cung cấp ánh sáng đỏ và xanh tím.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Đồ thị ánh sáng và quang hợp',
    instruction:
      'Kéo thanh ánh sáng, chấm xanh chạy trên đường cong. Tìm điểm bù, vùng bão hoà, rồi đổi loại cây, nồng độ $\\mathrm{CO_2}$ và nhiệt độ để xem đường cong đổi ra sao. Số liệu là mức tương đối của mô hình.',
  },
  examples: [
    {
      problem:
        'Để tổng hợp một phân tử glucose, chu trình Calvin cần bao nhiêu ATP, NADPH và $\\mathrm{CO_2}$?',
      steps: [
        'Glucose có $6$ carbon nên cần $6\\ \\mathrm{CO_2}$.',
        'Mỗi $\\mathrm{CO_2}$ được cố định cần $3$ ATP và $2$ NADPH.',
        'Vậy cần $6 \\cdot 3 = 18$ ATP và $6 \\cdot 2 = 12$ NADPH.',
      ],
      answer: 'Cần $6\\ \\mathrm{CO_2}$, $18$ ATP và $12$ NADPH.',
    },
    {
      problem:
        'Một cây C3 đang quang hợp ổn định thì bị tắt đèn. Nồng độ RuBP và 3-PGA trong lục lạp thay đổi thế nào? Giải thích.',
      steps: [
        'Tắt đèn, pha sáng dừng, ATP và NADPH cạn dần.',
        'Không có ATP, NADPH thì 3-PGA không được khử, nên 3-PGA tích lại.',
        'RuBP vẫn nhận $\\mathrm{CO_2}$ nhưng không được tái sinh, nên RuBP giảm.',
      ],
      answer: '3-PGA tăng, RuBP giảm.',
    },
    {
      problem:
        'Ở một mức ánh sáng, cường độ quang hợp của cây đo được là $2$ đơn vị và cường độ hô hấp là $3$ đơn vị. Cây đang ở trên hay dưới điểm bù ánh sáng? Về lâu dài, cây có tăng khối lượng khô không?',
      steps: [
        'Tại điểm bù, quang hợp bằng hô hấp. Ở đây $2 < 3$ nên quang hợp nhỏ hơn hô hấp.',
        'Vậy ánh sáng này thấp hơn điểm bù.',
        'Chất hữu cơ dùng nhiều hơn tạo ra: mỗi đơn vị thời gian mất $3 - 2 = 1$ đơn vị.',
      ],
      answer: 'Dưới điểm bù; cây tiêu hao chất hữu cơ, không tăng khối lượng khô.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Pha sáng của quang hợp diễn ra ở đâu?',
      options: ['Màng thylakoid', 'Chất nền lục lạp', 'Tế bào chất', 'Màng ngoài ti thể'],
      answer: 0,
      hints: ['Hệ sắc tố nằm trên cấu trúc nào của lục lạp?'],
      solution: 'Sắc tố nằm trên màng thylakoid nên pha sáng diễn ra tại đó.',
    },
    {
      type: 'multi',
      prompt: 'Sản phẩm của pha sáng gồm những chất nào?',
      options: ['ATP', 'NADPH', '$\\mathrm{O_2}$', 'Glucose', '$\\mathrm{CO_2}$'],
      answers: [0, 1, 2],
      hints: ['Glucose được tạo ở pha sau, còn $\\mathrm{CO_2}$ là nguyên liệu của pha đó.'],
      solution: 'Pha sáng tạo ATP, NADPH và thải $\\mathrm{O_2}$ từ quang phân li nước.',
    },
    {
      type: 'choice',
      prompt: '$\\mathrm{O_2}$ giải phóng trong quang hợp có nguồn gốc từ chất nào?',
      options: ['$\\mathrm{CO_2}$', '$\\mathrm{H_2O}$', 'Glucose', 'ATP'],
      answer: 1,
      hints: ['Chất nào bị phân li trong pha sáng?'],
      solution: 'Nước bị phân li trong pha sáng và giải phóng $\\mathrm{O_2}$.',
    },
    {
      type: 'number',
      prompt: 'Để tổng hợp $2$ phân tử glucose, chu trình Calvin cần bao nhiêu phân tử ATP?',
      answer: 36,
      hints: ['Mỗi glucose cần $6\\ \\mathrm{CO_2}$; mỗi $\\mathrm{CO_2}$ cần $3$ ATP.'],
      solution: 'Mỗi glucose cần $18$ ATP, nên $2$ glucose cần $2 \\cdot 18 = 36$ ATP.',
    },
    {
      type: 'number',
      prompt:
        'Chu trình Calvin cố định $12$ phân tử $\\mathrm{CO_2}$ thì dùng bao nhiêu phân tử NADPH?',
      answer: 24,
      hints: ['Mỗi $\\mathrm{CO_2}$ dùng $2$ NADPH.'],
      solution: '$12 \\cdot 2 = 24$ NADPH.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nhóm thực vật với đặc điểm của nó.',
      left: ['C3', 'C4', 'CAM'],
      right: [
        'Cố định sơ bộ ban đêm, chu trình Calvin ban ngày trong cùng một tế bào',
        'Sản phẩm đầu tiên là 3-PGA, chỉ có chu trình Calvin',
        'Cố định sơ bộ ở tế bào mô giậu, chu trình Calvin ở tế bào bao bó mạch',
      ],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['C4 tách hai bước theo không gian, CAM tách theo thời gian.'],
      solution:
        'C3: chỉ có chu trình Calvin. C4: tách theo không gian (hai loại tế bào). CAM: tách theo thời gian (đêm và ngày).',
    },
    {
      type: 'choice',
      prompt: 'Vì sao thực vật CAM mở khí khổng vào ban đêm?',
      options: [
        'Để hấp thụ ánh sáng trăng',
        'Để hạn chế mất nước trong điều kiện khô hạn',
        'Để thải bớt $\\mathrm{CO_2}$',
        'Vì ban ngày chúng không có diệp lục',
      ],
      answer: 1,
      hints: ['Ban đêm mát hơn, không khí ẩm hơn.'],
      solution:
        'Mở khí khổng ban đêm giúp lấy $\\mathrm{CO_2}$ mà mất ít nước, thích nghi với vùng khô hạn.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sai?',
      options: [
        'Tại điểm bù ánh sáng, cường độ quang hợp bằng cường độ hô hấp',
        'Tại điểm bão hoà ánh sáng, cường độ quang hợp đạt cực đại',
        'Hiệu quả quang hợp đạt cực đại tại điểm bù ánh sáng',
        'Cây ưa bóng có điểm bù ánh sáng thấp hơn cây ưa sáng',
      ],
      answer: 2,
      hints: ['Tại điểm bù, cây chưa tích luỹ được chất hữu cơ.'],
      solution: 'Cực đại ở điểm bão hoà, không phải điểm bù. Các phát biểu khác đều đúng.',
    },
    {
      type: 'choice',
      prompt:
        'Trong không khí, nồng độ $\\mathrm{CO_2}$ khoảng $0{,}04\\%$. Tăng lên $0{,}08\\%$ trong nhà kính thì quang hợp của cây trồng thường thế nào?',
      options: [
        'Tăng, vì $\\mathrm{CO_2}$ chưa vượt quá điểm bão hoà',
        'Giảm vì $\\mathrm{CO_2}$ gây độc ngay',
        'Không đổi vì $\\mathrm{CO_2}$ không ảnh hưởng',
        'Dừng hẳn',
      ],
      answer: 0,
      hints: ['Điểm bão hoà $\\mathrm{CO_2}$ của cây trồng khoảng $0{,}06$ đến $0{,}1\\%$.'],
      solution:
        'Mức $0{,}08\\%$ vẫn nằm trong vùng quang hợp còn tăng hoặc gần bão hoà, chưa tới mức gây ngộ độc khoảng $0{,}2\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Những cây nào là thực vật C4?',
      options: ['Ngô', 'Mía', 'Lúa', 'Xương rồng', 'Rau dền'],
      answers: [0, 1, 4],
      hints: ['Lúa là C3, xương rồng là CAM.'],
      solution: 'Ngô, mía, rau dền là C4; lúa là C3; xương rồng là CAM.',
    },
  ],
  takeaways: [
    'Quang hợp đổi quang năng thành hoá năng trong chất hữu cơ, thải $\\mathrm{O_2}$ có nguồn gốc từ nước.',
    'Pha sáng ở màng thylakoid tạo ATP, NADPH, $\\mathrm{O_2}$; pha tối ở chất nền dùng chúng để cố định $\\mathrm{CO_2}$.',
    'Mọi thực vật đều có chu trình Calvin; C4 thêm bước sơ bộ ở tế bào khác, CAM thêm bước sơ bộ vào ban đêm.',
    'Điểm bù: quang hợp bằng hô hấp. Điểm bão hoà: tăng ánh sáng không làm quang hợp tăng thêm.',
    'Quang hợp quyết định khoảng $90$ đến $95\\%$ năng suất cây trồng.',
  ],
};
