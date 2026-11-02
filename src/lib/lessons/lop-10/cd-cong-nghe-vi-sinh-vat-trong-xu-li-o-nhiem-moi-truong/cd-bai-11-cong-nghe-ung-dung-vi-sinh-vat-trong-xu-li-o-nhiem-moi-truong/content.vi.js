/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công nghệ vi sinh vật được dùng để xử lí đất ô nhiễm, nước thải bằng cách kết hợp phương pháp vật lí, hoá học với xử lí hiếu khí và kị khí, sản xuất khí sinh học và ủ rác thải hữu cơ thành phân bón.',
  intro:
    'Mỗi ngày, một thành phố thải ra hàng nghìn tấn rác và rất nhiều nước thải. Trong các trạm xử lí và các đống ủ, chính vi sinh vật làm phần lớn công việc. Làm thế nào để tạo điều kiện cho chúng làm việc nhanh nhất, và có thể thu được gì từ chất thải?',
  objectives: [
    'Giải thích được nguyên lí xử lí đất ô nhiễm bằng vi sinh vật.',
    'Trình bày được cách kết hợp phương pháp vật lí, hoá học với xử lí hiếu khí và kị khí trong xử lí nước thải.',
    'Nêu được thành phần, cách tạo và lợi ích của khí sinh học.',
    'Trình bày được nguyên lí ủ phân hữu cơ và các yếu tố cần kiểm soát.',
  ],
  sections: [
    {
      heading: 'Xử lí ô nhiễm môi trường đất',
      blocks: [
        {
          type: 'p',
          text: 'Đất ô nhiễm chứa nhiều hoá chất độc hại, nên không thể chỉ đổi mục đích sử dụng (làm bãi đỗ xe, sân bóng) mà bỏ qua việc xử lí: chất độc vẫn còn đó, có thể ngấm xuống nước ngầm và lan rộng. Người ta dùng vi khuẩn, vi nấm hoặc Archaea có khả năng phân giải các chất này để làm sạch đất.',
        },
        {
          type: 'p',
          text: 'Đất ô nhiễm các chất như dầu mỏ thường có lượng carbon cao hơn nhiều so với nitrogen và phosphorus. Vi sinh vật cần đủ các nguyên tố đó để sinh trưởng, nên phải bổ sung N, P (bón phân đạm, phân lân) và làm đất thông thoáng để có $\\mathrm{O_2}$. Nói chung, tuỳ loại đất ô nhiễm, người ta bổ sung các nguồn N, C, P, $\\mathrm{O_2}$,... để vi sinh vật tăng số lượng tế bào, nhờ đó quá trình phân giải diễn ra nhanh hơn.',
        },
        {
          type: 'table',
          caption: 'Một số vi sinh vật được dùng để xử lí ô nhiễm',
          head: ['Chất ô nhiễm', 'Vi sinh vật'],
          rows: [
            [
              'Dầu tràn',
              'Colwellia, Cycloclasticus, Alcanivorax, nhóm Oceanospirillales, họ Methylococcaceae',
            ],
            [
              'Tàn dư thuốc trừ sâu, thuốc diệt cỏ',
              'Pseudomonas stutzeri, Bacillus subtilis, Streptomyces coelicolor, Candida tropicalis',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Xử lí nước thải',
      blocks: [
        {
          type: 'p',
          text: 'Nước bị ô nhiễm chủ yếu do nước thải công nghiệp, sinh hoạt và y tế xả thẳng ra sông, suối, biển khi chưa qua xử lí. Xử lí bằng vi sinh vật cần kết hợp với phương pháp vật lí (lọc qua lưới chắn rác, lắng) và phương pháp hoá học (trung hoà nước thải chứa acid vô cơ hoặc kiềm). Các nhóm vi sinh vật khác nhau oxi hoá chất hữu cơ thành $\\mathrm{CO_2}$, $\\mathrm{H_2O}$ hoặc chuyển chúng thành khí sinh học.',
        },
        {
          type: 'p',
          text: 'Một trạm xử lí nước thải đậm đặc có thu khí sinh học thường đi theo thứ tự: lọc và lắng đầu để loại cặn; bể kị khí giảm phần lớn chất hữu cơ và cho khí sinh học; bể hiếu khí có sục khí xử lí phần còn lại; bể lắng cuối giữ bùn chứa vi sinh vật lại để nước ra trong.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'BOD',
          text: 'BOD (nhu cầu oxygen sinh hoá) cho biết lượng oxygen vi sinh vật cần để phân giải chất hữu cơ trong nước, thường tính bằng mg/L. BOD càng lớn thì nước càng ô nhiễm chất hữu cơ.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cố định vi sinh vật',
          text: 'Cố định vi sinh vật giúp giữ chúng lại trong bể xử lí và kiểm soát được các yếu tố ảnh hưởng, như tốc độ sục khí và tốc độ dòng chảy, sao cho phù hợp với lượng chất hữu cơ trong nước thải.',
        },
      ],
    },
    {
      heading: 'Công nghệ khí sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khí sinh học (biogas)',
          text: 'Là hỗn hợp khí tạo ra khi vi sinh vật phân huỷ chất hữu cơ trong điều kiện kị khí, gồm khoảng $58$-$75\\%$ methane $\\mathrm{(CH_4)}$, $25$-$42\\%$ $\\mathrm{CO_2}$, một lượng nhỏ các khí khác ($\\mathrm{H_2S}$, $\\mathrm{NH_3}$, $\\mathrm{H_2}$) và hơi nước.',
        },
        {
          type: 'p',
          text: 'Tham gia tạo khí có vi sinh vật lên men acetic và vi sinh vật sinh methane, sống được trong điều kiện kị khí, như các chi Methanobacterium, Methanococcus. Nguyên liệu thường là chất thải chăn nuôi và sinh khối thực vật, được ủ trong hầm hoặc bể kín.',
        },
        {
          type: 'list',
          items: [
            'Khí dùng để đun nấu trực tiếp, nén, hoá lỏng hoặc phát điện.',
            'Phần bã và nước sau xử lí dùng làm phân bón.',
            'Giải quyết ô nhiễm do chất thải rắn và nước thải chăn nuôi, tăng giá trị sản xuất nông nghiệp.',
          ],
        },
      ],
    },
    {
      heading: 'Xử lí chất thải rắn',
      blocks: [
        {
          type: 'p',
          text: 'Trước hết phải phân loại rác sinh hoạt: tách chất hữu cơ dễ phân giải khỏi chất vô cơ khó phân huỷ, kim loại, nhựa, thuỷ tinh. Phần hữu cơ có thể cho khí sinh học, phân bón hữu cơ và thức ăn ủ cho động vật.',
        },
        {
          type: 'p',
          text: 'Khi ủ phân hiếu khí, nhiệt do hô hấp của vi sinh vật tích lại trong đống ủ, nên nhiệt độ có thể lên trên $60\\,^\\circ\\mathrm{C}$. Lúc này vi sinh vật ưa nhiệt, chịu nhiệt vẫn sinh trưởng tốt, còn phần lớn mầm bệnh bị tiêu diệt. Khi chất dễ phân giải đã hết, đống ủ nguội dần và phân chín.',
        },
        { type: 'widget', name: 'u-phan' },
        {
          type: 'table',
          caption: 'Ưu điểm và nhược điểm của công nghệ ủ phân hiếu khí',
          head: ['Ưu điểm', 'Nhược điểm'],
          rows: [
            [
              'Dễ thực hiện; giảm khối lượng rác hữu cơ, hạn chế ô nhiễm; chuyển chất thải thành phân bón hữu ích; tạo các chất trung gian có hoạt tính sinh học',
              'Thời gian xử lí kéo dài; quần thể vi sinh vật biến đổi phức tạp, ảnh hưởng lớn đến chất lượng sản phẩm; phải theo dõi thường xuyên và điều chỉnh nhiệt độ, độ ẩm, pH, thông khí',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Ủ phân từ rác nhà bếp',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tạo một mẻ phân hữu cơ và theo dõi diễn biến nhiệt độ. Làm theo nhóm $3$ đến $4$ bạn, trong khoảng $6$ đến $8$ tuần. Chuẩn bị: thùng có lỗ thông khí, vỏ rau, lá khô, đất vườn, nhiệt kế, găng tay. Không cho thịt, cá, dầu mỡ, vì dễ có mùi và thu hút côn trùng.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xếp xen kẽ các lớp vỏ rau và lá khô, rắc một ít đất vườn để có sẵn vi sinh vật.',
            'Giữ độ ẩm vừa phải: bóp một nắm thấy ẩm tay nhưng không chảy nước.',
            'Mỗi ngày đo nhiệt độ ở giữa thùng, ghi vào bảng. Đảo đều mỗi tuần một lần.',
            'Dừng khi vật liệu sẫm màu, tơi xốp, có mùi đất và nhiệt độ gần bằng nhiệt độ không khí.',
            'Vẽ đồ thị nhiệt độ theo thời gian, chỉ ra các giai đoạn và thử bón cho một chậu cây.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: đồ thị nhiệt độ, ảnh chụp các tuần, nhận xét về màu và mùi. Thùng nhỏ có thể không đạt $60\\,^\\circ\\mathrm{C}$; hãy giải thích vì sao bằng sự toả nhiệt của đống ủ. Đeo găng tay và rửa tay sau mỗi lần đảo.',
        },
      ],
    },
  ],
  explore: {
    title: 'Trạm xử lí nước thải',
    instruction:
      'Bật hoặc tắt từng bể, chỉnh sục khí và tốc độ dòng chảy để đưa BOD đầu ra xuống dưới ngưỡng với ít điện nhất. Sau đó đổi sang nước thải chế biến thực phẩm: vì sao lúc này phải có bể kị khí?',
  },
  examples: [
    {
      problem:
        'Nước thải có BOD $800$ mg/L đi qua bể kị khí (loại được $75\\%$ BOD), rồi qua bể hiếu khí (loại được $80\\%$ BOD còn lại). Tính BOD đầu ra và hiệu suất của cả hệ thống.',
      steps: [
        'Sau bể kị khí còn $25\\%$: $800 \\cdot 0{,}25 = 200$ mg/L.',
        'Sau bể hiếu khí còn $20\\%$: $200 \\cdot 0{,}2 = 40$ mg/L.',
        'Hiệu suất: $\\dfrac{800 - 40}{800} \\cdot 100\\% = 95\\%$.',
      ],
      answer: 'BOD đầu ra là $40$ mg/L; hiệu suất cả hệ thống là $95\\%$.',
    },
    {
      problem:
        'Một hầm biogas tạo ra $20\\ \\mathrm{m^3}$ khí sinh học mỗi ngày, trong đó methane chiếm $60\\%$ thể tích. Tính thể tích methane và cho biết phần còn lại chủ yếu là khí gì.',
      steps: [
        'Thể tích methane: $20 \\cdot 0{,}6 = 12\\ \\mathrm{m^3}$.',
        'Phần còn lại: $20 - 12 = 8\\ \\mathrm{m^3}$, chủ yếu là $\\mathrm{CO_2}$, thêm một lượng nhỏ các khí khác và hơi nước.',
      ],
      answer: 'Có $12\\ \\mathrm{m^3}$ methane mỗi ngày; phần còn lại chủ yếu là $\\mathrm{CO_2}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Vì sao không thể chỉ chuyển vùng đất ô nhiễm thành bãi đỗ xe hay sân bóng mà không xử lí?',
      options: [
        'Hoá chất độc hại vẫn còn trong đất và có thể lan sang nơi khác',
        'Bãi đỗ xe và sân bóng cần đất có nhiều chất dinh dưỡng hơn',
        'Việc đổi mục đích sử dụng làm cho vi sinh vật sinh sản quá nhanh',
        'Hoá chất trong đất sẽ tự chuyển thành khí sinh học gây cháy nổ',
      ],
      answer: 0,
      hints: ['Che phủ mặt đất có làm chất độc biến mất không?'],
      solution:
        'Đổi mục đích sử dụng không loại bỏ được chất độc: chúng vẫn tồn tại và có thể lan vào nước ngầm. Cần xử lí bằng vi khuẩn, vi nấm hoặc Archaea.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao xử lí đất ô nhiễm dầu bằng vi sinh vật thường phải bón thêm N, P và làm thoáng đất?',
      options: [
        'Đất có lượng carbon cao hơn nhiều so với N, P, trong khi vi sinh vật cần đủ cả các nguyên tố này và oxygen',
        'N và P phản ứng trực tiếp với dầu, tạo thành khí $\\mathrm{CO_2}$ mà không cần đến vi sinh vật',
        'Dầu mỏ không chứa carbon, nên vi sinh vật cần được bổ sung nguyên tố này từ phân bón',
        'N và P tiêu diệt những vi sinh vật có hại, giúp những vi sinh vật có lợi không cần oxygen',
      ],
      answer: 0,
      hints: [
        'Dầu mỏ là hydrocarbon. Vi sinh vật còn thiếu nguyên tố gì để tạo protein, nucleic acid?',
      ],
      solution:
        'Dầu cung cấp nhiều carbon nhưng thiếu N, P. Vi sinh vật cần N, P để sinh trưởng và cần $\\mathrm{O_2}$ để hô hấp, nên phải bón thêm và làm thoáng đất.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bể của một trạm xử lí nước thải có thu khí sinh học.',
      items: ['Lọc và lắng đầu', 'Bể kị khí', 'Bể hiếu khí có sục khí', 'Bể lắng cuối'],
      answer: [0, 1, 2, 3],
      hints: ['Bể nào chịu được nước thải đậm đặc nhất? Bùn của bể hiếu khí được giữ lại ở đâu?'],
      solution:
        'Lọc, lắng loại cặn; bể kị khí giảm phần lớn chất hữu cơ và thu khí; bể hiếu khí xử lí phần còn lại; bể lắng cuối giữ bùn lại để nước ra trong.',
    },
    {
      type: 'multi',
      prompt: 'Xử lí nước ô nhiễm bằng vi sinh vật thường kết hợp với những phương pháp nào?',
      options: [
        'Lọc qua lưới chắn rác',
        'Lắng cặn',
        'Trung hoà nước thải chứa acid vô cơ hoặc kiềm',
        'Xả thẳng nước thải ra sông để tự pha loãng',
      ],
      answers: [0, 1, 2],
      hints: ['Hãy nghĩ đến phương pháp vật lí và phương pháp hoá học.'],
      solution:
        'Kết hợp phương pháp vật lí (lọc, lắng) và hoá học (trung hoà acid, kiềm) với xử lí vi sinh vật. Xả thẳng ra sông chính là nguyên nhân gây ô nhiễm nguồn nước.',
    },
    {
      type: 'multi',
      prompt: 'Những thành phần nào có trong khí sinh học?',
      options: [
        'Methane $(\\mathrm{CH_4})$',
        'Carbon dioxide $(\\mathrm{CO_2})$',
        'Một lượng nhỏ $\\mathrm{H_2S}$',
        'Ethanol $(\\mathrm{C_2H_5OH})$ ở thể lỏng',
      ],
      answers: [0, 1, 2],
      hints: ['Ethanol là sản phẩm của con đường nào?'],
      solution:
        'Khí sinh học gồm khoảng $58$-$75\\%$ $\\mathrm{CH_4}$, $25$-$42\\%$ $\\mathrm{CO_2}$, một lượng nhỏ các khí khác như $\\mathrm{H_2S}$ và hơi nước. Ethanol là sản phẩm của lên men.',
    },
    {
      type: 'number',
      prompt:
        'Một hầm biogas tạo ra $50\\ \\mathrm{m^3}$ khí sinh học mỗi ngày, trong đó methane chiếm $70\\%$. Mỗi ngày có bao nhiêu $\\mathrm{m^3}$ methane?',
      answer: 35,
      unit: 'm³',
      hints: ['$70\\% = 0{,}7$.'],
      solution: '$50 \\cdot 0{,}7 = 35\\ \\mathrm{m^3}$.',
    },
    {
      type: 'number',
      prompt:
        'Nước thải có BOD $400$ mg/L, sau xử lí còn $40$ mg/L. Hiệu suất xử lí bằng bao nhiêu phần trăm?',
      answer: 90,
      unit: '%',
      hints: ['Lấy lượng đã giảm chia cho lượng ban đầu.'],
      solution:
        'Đã giảm $400 - 40 = 360$ mg/L. Hiệu suất: $\\dfrac{360}{400} \\cdot 100\\% = 90\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao trong quá trình ủ phân, nhiệt độ đống ủ có thể lên trên $60\\,^\\circ\\mathrm{C}$?',
      options: [
        'Hô hấp của vi sinh vật toả nhiệt, nhiệt tích lại trong đống ủ',
        'Ánh nắng mặt trời chiếu vào đống ủ là nguồn nhiệt chủ yếu',
        'Khí methane cháy liên tục trong đống ủ làm đống ủ nóng lên',
        'Nước trong đống ủ tự nóng lên khi tiếp xúc với chất hữu cơ',
      ],
      answer: 0,
      hints: ['Đống ủ vẫn nóng cả khi ban đêm hay khi được che kín.'],
      solution:
        'Vi sinh vật hô hấp phân giải chất hữu cơ và toả nhiệt. Đống ủ giữ nhiệt tốt nên nhiệt độ tăng cao; khi đó vi sinh vật ưa nhiệt, chịu nhiệt chiếm ưu thế.',
    },
    {
      type: 'choice',
      prompt:
        'Một đống ủ đang nóng thì nguội đi sau vài ngày và bốc mùi hôi, dù còn nhiều rác chưa phân giải. Nên làm gì trước tiên?',
      options: [
        'Đảo đống ủ để đưa không khí vào',
        'Đậy kín đống ủ để giữ lại mùi',
        'Đổ thêm thật nhiều nước vào đống ủ',
        'Rải thuốc diệt khuẩn lên đống ủ',
      ],
      answer: 0,
      hints: ['Ủ phân hiếu khí cần điều kiện gì?'],
      solution:
        'Đống ủ thiếu oxygen nên vi sinh vật hiếu khí yếu đi, các quá trình kị khí tạo mùi hôi. Đảo đống ủ đưa không khí vào, đống ủ sẽ nóng trở lại.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất thải với công nghệ phù hợp.',
      left: ['Phân chăn nuôi', 'Vỏ rau, lá cây đã phân loại', 'Vết dầu tràn ven biển'],
      right: [
        'Hầm khí sinh học',
        'Ủ phân hữu cơ hiếu khí',
        'Vi khuẩn phân giải hydrocarbon, kèm bổ sung N, P',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Dầu mỏ là hydrocarbon.'],
      solution:
        'Phân chăn nuôi cho khí sinh học; vỏ rau, lá cây ủ thành phân bón; dầu tràn được xử lí bằng vi khuẩn phân giải hydrocarbon, kèm bổ sung N, P.',
    },
  ],
  takeaways: [
    'Đất ô nhiễm được xử lí bằng vi sinh vật, thường phải bổ sung N, P và làm thoáng đất.',
    'Xử lí nước thải kết hợp vi sinh vật (hiếu khí, kị khí) với phương pháp vật lí (lọc, lắng) và hoá học (trung hoà); cố định vi sinh vật giúp kiểm soát sục khí và dòng chảy.',
    'Khí sinh học tạo ra trong điều kiện kị khí, gồm khoảng $58$-$75\\%$ $\\mathrm{CH_4}$ và $25$-$42\\%$ $\\mathrm{CO_2}$.',
    'Ủ phân hiếu khí cần phân loại rác, độ ẩm vừa phải, thông khí; nhiệt độ có thể vượt $60\\,^\\circ\\mathrm{C}$ do hô hấp của vi sinh vật.',
  ],
};
