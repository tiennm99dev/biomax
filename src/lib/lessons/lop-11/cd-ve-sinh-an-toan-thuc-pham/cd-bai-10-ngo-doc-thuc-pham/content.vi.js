/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ngộ độc thực phẩm là tình trạng bệnh lí do ăn, uống thực phẩm bị ô nhiễm hoặc có chứa chất độc. Nguyên nhân là vi sinh vật, hoá chất, chất độc tự nhiên có sẵn và thực phẩm hư hỏng, biến chất. Khi bị ngộ độc cần sơ cứu đúng theo tình trạng người bệnh; phòng ngừa bằng cách chọn, chế biến và bảo quản thực phẩm an toàn.',
  intro:
    'Hằng năm, nước ta có hàng trăm vụ ngộ độc thực phẩm, nhiều vụ xảy ra ở bếp ăn tập thể, đám cưới, đám giỗ với hàng chục, hàng trăm người mắc. Vì sao một bữa ăn lại gây ngộ độc? Khi người thân bị đau bụng, nôn sau bữa ăn, em nên làm gì, và làm thế nào để điều đó không xảy ra?',
  objectives: [
    'Nêu được khái niệm ngộ độc thực phẩm và phân loại được các nguyên nhân gây ngộ độc.',
    'Nhận biết được thực phẩm có nguy cơ cao gây ngộ độc và các triệu chứng của người bị ngộ độc.',
    'Trình bày được cách sơ cứu ban đầu phù hợp với tình trạng người bị ngộ độc.',
    'Vận dụng được các biện pháp phòng ngừa ngộ độc khi lựa chọn, chế biến và bảo quản thực phẩm.',
  ],
  sections: [
    {
      heading: 'Ngộ độc thực phẩm và nguyên nhân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ngộ độc thực phẩm',
          text: 'Ngộ độc thực phẩm là tình trạng bệnh lí do hấp thụ thực phẩm bị ô nhiễm hoặc có chứa chất độc.',
        },
        {
          type: 'table',
          caption: 'Các nhóm nguyên nhân gây ngộ độc thực phẩm',
          head: ['Nguyên nhân', 'Ví dụ'],
          rows: [
            [
              'Vi sinh vật và độc tố của chúng',
              'Vi khuẩn Salmonella, E. coli, tụ cầu vàng, Clostridium botulinum (trong đồ hộp, pate hỏng); virus viêm gan A, norovirus; kí sinh trùng như sán dây lợn',
            ],
            [
              'Hoá chất',
              'Tồn dư thuốc bảo vệ thực vật, thuốc thú y; hàn the, phẩm màu công nghiệp; kim loại nặng (chì, asen); methanol trong rượu pha chế',
            ],
            [
              'Chất độc tự nhiên có sẵn trong thực phẩm',
              'Cá nóc (tetrodotoxin), cóc (nhựa và nội tạng cóc), sắn và măng tươi (glycoside sinh ra cyanide), nấm độc, khoai tây mọc mầm (solanin)',
            ],
            [
              'Thực phẩm hư hỏng, biến chất',
              'Cá ươn sinh histamine, dầu mỡ đã ôi khét, thức ăn để lâu bị ôi thiu',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Thực phẩm có nguy cơ cao gây ngộ độc thường có dấu hiệu: bị ruồi, nhặng bâu; có màu lạ, mùi lạ, hôi, mốc, héo úa; củ, quả mọc mầm, ra rễ; vị khác thường; đồ hộp phồng, méo, gỉ nắp; không rõ nguồn gốc, quá hạn sử dụng.',
        },
      ],
    },
    {
      heading: 'Triệu chứng và sơ cứu',
      blocks: [
        {
          type: 'p',
          text: 'Triệu chứng thường gặp xuất hiện sau ăn vài chục phút đến vài ngày: buồn nôn, nôn, đau bụng, tiêu chảy, có thể sốt, đau đầu, chóng mặt. Dấu hiệu nặng gồm khó thở, co giật, yếu cơ, sụp mí, khó nuốt, nôn hoặc đi ngoài ra máu, lơ mơ, hôn mê, mất nước nặng.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ngừng ngay việc ăn thức ăn nghi gây ngộ độc.',
            'Đánh giá tình trạng người bệnh: nếu hôn mê hoặc có dấu hiệu nặng, gọi cấp cứu 115.',
            'Gây nôn chỉ khi người bệnh tỉnh táo, vừa ăn phải và chưa nôn được; không gây nôn khi người bệnh lơ mơ, co giật, nuốt phải chất ăn mòn hoặc xăng dầu, và không tự gây nôn cho trẻ nhỏ.',
            'Bù nước và chất điện giải bằng oresol pha đúng hướng dẫn.',
            'Giữ lại mẫu thức ăn, chất nôn; báo cơ sở y tế khi nhiều người cùng bị.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Không tự ý dùng thuốc',
          text: 'Không tự uống thuốc cầm tiêu chảy hay kháng sinh: tiêu chảy, nôn là phản ứng giúp cơ thể tống chất độc, mầm bệnh ra ngoài. Hãy đến cơ sở y tế khi triệu chứng kéo dài hơn $2$ – $3$ ngày hoặc nặng lên.',
        },
      ],
    },
    {
      heading: 'Phòng ngừa ngộ độc thực phẩm',
      blocks: [
        {
          type: 'table',
          caption: 'Các biện pháp phòng ngừa theo từng khâu',
          head: ['Khâu', 'Cần làm'],
          rows: [
            [
              'Lựa chọn',
              'Chọn thực phẩm tươi, rõ nguồn gốc; thực phẩm bao gói có nhãn đầy đủ, còn hạn dùng; không dùng thực phẩm lạ, có dấu hiệu ôi, thiu, đổi màu, đổi mùi',
            ],
            [
              'Chế biến',
              'Dùng nước sạch, phụ gia đúng quy định; người chế biến giữ vệ sinh, rửa tay đúng cách, không chế biến khi đang mắc bệnh truyền nhiễm; dụng cụ riêng cho đồ sống và chín; sơ chế đúng cách măng, sắn; không ăn cá nóc, cóc, nấm lạ; nấu chín kĩ, ăn ngay sau khi nấu; hạn chế đồ sống, tái, gỏi',
            ],
            [
              'Bảo quản',
              'Dụng cụ chứa có nắp kín; đậy thức ăn tránh ruồi, gián; tránh ô nhiễm chéo sống – chín; không dùng hoá chất bảo quản trái phép; thức ăn còn dư giữ nóng ở gần hoặc trên $60\\,^\\circ\\mathrm{C}$ hoặc giữ lạnh ở gần hoặc dưới $10\\,^\\circ\\mathrm{C}$, dùng trong $4$ – $5$ giờ và đun kĩ lại trước khi ăn; thức ăn cho trẻ nên ăn ngay',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Biện pháp chung: tuyên truyền, phát hiện sớm và xử lí nghiêm các trường hợp vi phạm an toàn thực phẩm. Việc này hạn chế thực phẩm độc hại ra thị trường và nâng cao ý thức của người sản xuất, chế biến, kinh doanh.',
        },
      ],
    },
    {
      heading: 'Nhiệm vụ: tập huấn sơ cứu và lập bảng quy tắc bếp an toàn',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: mỗi nhóm luyện sơ cứu ngộ độc theo tình huống và làm một bảng quy tắc phòng ngộ độc để dán ở bếp gia đình hoặc căng tin trường.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: giấy khổ lớn, bút màu, một gói oresol (để đọc hướng dẫn pha), tài liệu hướng dẫn của Bộ Y tế hoặc trạm y tế.',
            'Mỗi nhóm viết hai tình huống ngộ độc khác nhau (người lớn tỉnh táo, trẻ nhỏ, người hôn mê, nuốt phải hoá chất…), trao đổi cho nhóm bạn xử lí theo cây quyết định.',
            'Đóng vai xử lí tình huống: đánh giá tình trạng, gọi 115 khi cần, đặt tư thế nằm nghiêng, đọc đúng cách pha oresol.',
            'Lập bảng quy tắc gồm ba phần: chọn mua, chế biến, bảo quản; mỗi phần không quá năm quy tắc ngắn gọn.',
            'Báo cáo: trình bày bảng quy tắc, nhận xét phần đóng vai của nhóm bạn và nêu điều cần sửa.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Cây quyết định sơ cứu',
    instruction:
      'Chọn một tình huống, đọc mô tả rồi trả lời từng câu hỏi Có hoặc Không. Câu trả lời phải khớp với tình trạng người bệnh; cuối nhánh là cách xử lí phù hợp. Chọn "Tự khám phá" để đi thử mọi nhánh.',
  },
  examples: [
    {
      problem:
        'Sau bữa cỗ, nhiều người bị đau bụng, nôn, tiêu chảy. Một người nói: "Mọi người uống ngay kháng sinh và thuốc cầm tiêu chảy, đổ hết thức ăn thừa đi cho sạch." Em hãy nhận xét và nêu cách xử lí đúng.',
      steps: [
        'Không tự uống kháng sinh, thuốc cầm tiêu chảy: tiêu chảy giúp tống chất độc ra ngoài, và nguyên nhân có thể không phải vi khuẩn.',
        'Không đổ thức ăn thừa: cần giữ lại mẫu thức ăn, chất nôn để xét nghiệm tìm nguyên nhân.',
        'Nhiều người cùng bị sau một bữa ăn: báo ngay cho trạm y tế.',
        'Với từng người: ai hôn mê, khó thở, co giật thì gọi 115; người tỉnh táo cho uống oresol để bù nước và theo dõi.',
      ],
      answer:
        'Lời khuyên sai. Cần giữ mẫu thức ăn, báo cơ sở y tế, bù nước bằng oresol, cấp cứu người có dấu hiệu nặng; không tự dùng kháng sinh, thuốc cầm tiêu chảy.',
    },
    {
      problem:
        'Nồi canh nấu lúc $11$ giờ trưa, ăn xong còn thừa. Hãy nêu cách bảo quản để có thể ăn lại an toàn vào bữa tối lúc $17$ giờ.',
      steps: [
        'Từ $11$ giờ đến $17$ giờ là $6$ giờ, lâu hơn $4$ – $5$ giờ: không nên để canh ở nhiệt độ phòng.',
        'Để nguội bớt, cho vào hộp có nắp và cất ngăn mát tủ lạnh (dưới $10\\,^\\circ\\mathrm{C}$), tách riêng khỏi thực phẩm sống.',
        'Trước khi ăn, đun sôi kĩ lại toàn bộ phần canh sẽ ăn.',
        'Nếu canh có mùi chua, lạ thì bỏ đi, không nếm thử.',
      ],
      answer:
        'Cất canh trong hộp kín ở ngăn mát tủ lạnh, tách khỏi đồ sống, rồi đun sôi kĩ lại trước bữa tối.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Ghép mỗi trường hợp ngộ độc với nhóm nguyên nhân của nó.',
      left: [
        'Ăn nộm cá nóc',
        'Ăn rau còn tồn dư thuốc trừ sâu',
        'Ăn thịt gà nhiễm Salmonella',
        'Ăn cá ngừ ươn',
      ],
      right: [
        'Chất độc tự nhiên có sẵn',
        'Hoá chất',
        'Vi sinh vật',
        'Thực phẩm hư hỏng, biến chất',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Chất độc có ngay trong cơ thể con cá nóc, không do con người thêm vào.'],
      solution:
        'Cá nóc chứa sẵn tetrodotoxin: chất độc tự nhiên. Thuốc trừ sâu: hoá chất. Salmonella: vi sinh vật. Cá ươn sinh histamine: thực phẩm biến chất.',
    },
    {
      type: 'multi',
      prompt: 'Những dấu hiệu nào cho thấy thực phẩm có nguy cơ cao gây ngộ độc?',
      options: [
        'Hộp pate bị phồng nắp',
        'Củ khoai tây mọc mầm',
        'Thịt có mùi lạ, màu tái xám',
        'Rau có nhãn VietGAP, còn tươi',
        'Lạc bị mốc',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Hãy để ý màu, mùi, hình dạng khác thường và nấm mốc.'],
      solution:
        'Hộp phồng (vi khuẩn sinh khí, có thể có độc tố botulinum), khoai tây mọc mầm (solanin), thịt đổi màu, đổi mùi và lạc mốc (aflatoxin) đều nguy hiểm. Rau VietGAP tươi là thực phẩm an toàn.',
    },
    {
      type: 'choice',
      prompt:
        'Một người ăn nấm rừng, sau đó lơ mơ, gọi không trả lời. Việc đầu tiên cần làm là gì?',
      options: [
        'Gọi cấp cứu 115 và đặt người bệnh nằm nghiêng an toàn',
        'Móc họng để gây nôn ngay',
        'Cho uống thật nhiều nước',
        'Cho uống thuốc cầm tiêu chảy',
      ],
      answer: 0,
      hints: ['Người không tỉnh có tự bảo vệ đường thở được không?'],
      solution:
        'Người hôn mê không được gây nôn hay cho uống vì dễ sặc vào phổi. Gọi 115, đặt nằm nghiêng an toàn để chất nôn chảy ra ngoài và theo dõi nhịp thở.',
    },
    {
      type: 'choice',
      prompt: 'Trẻ uống nhầm nước tẩy rửa nhưng vẫn tỉnh. Cách xử lí nào đúng?',
      options: [
        'Không gây nôn, đưa ngay đến cơ sở y tế cùng chai nước tẩy rửa',
        'Móc họng cho trẻ nôn ra hết',
        'Cho trẻ uống giấm để trung hoà',
        'Để trẻ ngủ, theo dõi đến sáng hôm sau',
      ],
      answer: 0,
      hints: ['Chất ăn mòn đi qua thực quản một lần đã gây bỏng; nôn ra thì sao?'],
      solution:
        'Nước tẩy rửa là chất ăn mòn: gây nôn làm bỏng thực quản lần nữa. Không tự trung hoà, đưa ngay đến cơ sở y tế và mang theo chai để bác sĩ biết hoá chất.',
    },
    {
      type: 'number',
      prompt:
        'Thức ăn còn dư được bảo quản nóng ở nhiệt độ gần hoặc trên bao nhiêu độ C để hạn chế vi khuẩn sinh sôi?',
      answer: 60,
      unit: '°C',
      hints: [
        'Vi khuẩn phát triển mạnh ở khoảng nhiệt độ của cơ thể; ở mức nóng hơn nhiều thì chậm lại.',
      ],
      solution:
        'Bảo quản nóng ở gần hoặc trên $60\\,^\\circ\\mathrm{C}$, hoặc bảo quản lạnh ở gần hoặc dưới $10\\,^\\circ\\mathrm{C}$.',
    },
    {
      type: 'number',
      prompt:
        'Một đám cưới có $120$ khách ăn cùng thực đơn; $54$ người bị nôn, tiêu chảy trong đêm. Tỉ lệ người ăn bị ngộ độc là bao nhiêu phần trăm?',
      answer: 45,
      unit: '%',
      hints: ['Tỉ lệ = số người bị ngộ độc : số người đã ăn $\\cdot 100\\%$.'],
      solution:
        '$\\dfrac{54}{120} \\cdot 100\\% = 45\\%$. Gần một nửa số khách cùng mắc sau một bữa ăn: dấu hiệu của một vụ ngộ độc thực phẩm cần báo ngay cho cơ quan y tế.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào giúp phòng ngộ độc thực phẩm khi chế biến?',
      options: [
        'Dùng thớt, dao riêng cho thực phẩm sống và chín',
        'Luộc măng tươi, bỏ nước luộc rồi mới nấu',
        'Ngâm sắn trong nước, bóc vỏ, luộc mở vung',
        'Dùng hàn the cho giò dai hơn',
        'Người đang bị tiêu chảy vẫn nấu cỗ cho cả nhà',
      ],
      answers: [0, 1, 2],
      hints: ['Măng, sắn chứa chất sinh ra cyanide; chất này tan trong nước và bay hơi khi đun.'],
      solution:
        'Dụng cụ riêng tránh ô nhiễm chéo; luộc bỏ nước, ngâm, bóc vỏ, mở vung giúp loại cyanide ở măng, sắn. Hàn the là chất cấm; người bệnh truyền nhiễm không được chế biến thực phẩm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi nhiều người cùng bị ngộ độc sau một bữa ăn cần giữ lại thức ăn thừa?',
      options: [
        'Để cơ sở y tế xét nghiệm, tìm đúng nguyên nhân và cách điều trị, ngăn ngộ độc tiếp diễn',
        'Để hâm nóng lại ăn tiếp cho đỡ phí',
        'Để cho vật nuôi ăn',
        'Không cần giữ vì không có tác dụng gì',
      ],
      answer: 0,
      hints: ['Bác sĩ cần biết tác nhân là vi khuẩn, hoá chất hay chất độc tự nhiên.'],
      solution:
        'Mẫu thức ăn, chất nôn giúp xác định tác nhân, chọn cách điều trị đúng, truy được nguồn thực phẩm độc và ngăn người khác bị ngộ độc.',
    },
  ],
  takeaways: [
    'Ngộ độc thực phẩm là tình trạng bệnh lí do hấp thụ thực phẩm bị ô nhiễm hoặc có chứa chất độc.',
    'Nguyên nhân: vi sinh vật và độc tố; hoá chất; chất độc tự nhiên có sẵn (cá nóc, cóc, nấm độc, măng, sắn, khoai tây mọc mầm); thực phẩm hư hỏng, biến chất.',
    'Sơ cứu theo tình trạng: hôn mê hoặc dấu hiệu nặng thì gọi 115; chỉ gây nôn khi tỉnh táo, mới ăn và không phải chất ăn mòn; bù nước bằng oresol; giữ mẫu thức ăn.',
    'Phòng ngừa ở mọi khâu: chọn thực phẩm rõ nguồn gốc, chế biến sạch và nấu chín, bảo quản đúng nhiệt độ và thời gian.',
  ],
};
