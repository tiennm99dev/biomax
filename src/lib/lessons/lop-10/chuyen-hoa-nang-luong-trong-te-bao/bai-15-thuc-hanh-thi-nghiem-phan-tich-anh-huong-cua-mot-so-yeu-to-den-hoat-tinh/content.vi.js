/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành dùng enzyme trong nước ép lõi dứa phân giải lòng trắng trứng và amylase của mầm thóc, mầm ngô thuỷ phân tinh bột để phân tích ảnh hưởng của nhiệt độ, pH và nồng độ đến hoạt tính enzyme, kèm cách thử tinh bột bằng iodine.',
  intro:
    'Vì sao người ta ướp thịt bò với dứa hay đu đủ cho thịt mềm, và vì sao cơm nhai kĩ thấy ngọt? Trong dứa, đu đủ có enzyme phân giải protein; trong nước bọt và hạt nảy mầm có amylase phân giải tinh bột. Bài này em sẽ tự kiểm chứng và tìm hiểu điều kiện làm các enzyme đó mạnh lên, yếu đi hay hỏng hẳn.',
  objectives: [
    'Thực hiện đúng quy trình thí nghiệm về enzyme phân giải protein và enzyme amylase.',
    'Nhận xét được ảnh hưởng của nhiệt độ, pH và nồng độ đến hoạt tính enzyme.',
    'Dùng được iodine để phát hiện tinh bột và đọc đúng kết quả.',
    'Giải thích được kết quả và viết được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Cơ sở của thí nghiệm',
      blocks: [
        {
          type: 'p',
          text: 'Enzyme có tính đặc hiệu và hoạt tính thay đổi theo điều kiện. Quả dứa (đặc biệt là lõi) chứa enzyme phân giải protein bromelain; đu đủ xanh chứa papain. Hạt nảy mầm có nhiều amylase để phân giải tinh bột dự trữ thành đường cho mầm phát triển.',
        },
        {
          type: 'list',
          items: [
            'Lòng trắng trứng pha nước tạo dung dịch đục do protein. Khi protein bị phân giải thành các phân tử nhỏ hơn, dung dịch trong dần: thời gian chuyển trong cho biết enzyme mạnh hay yếu.',
            'Tinh bột bị thuỷ phân thành đường tan trong nước nên trên đĩa tinh bột xuất hiện vết lõm: vết càng rộng, enzyme càng mạnh.',
            'Iodine cho màu xanh đen với tinh bột. Khi tinh bột đã bị thuỷ phân hết, dung dịch giữ màu vàng nâu của iodine.',
          ],
        },
      ],
    },
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: quả dứa hoặc đu đủ xanh, trứng gà sống, khoảng $100$ g hạt thóc hoặc ngô đã nảy mầm (mầm dài khoảng $2$ cm).',
            'Dụng cụ: cối chày sứ, cốc, đĩa Petri, ống nghiệm, đồng hồ, pipet $3$ mL hoặc bơm tiêm không kim, bút viết kính, cốc nước sôi, hộp đựng đá, thước, giấy lọc, phễu.',
            'Hoá chất: nước vôi trong, nước cất, nước đá, $2$ g bột sắn hoặc bột đao, giấm trắng; thêm dung dịch iodine loãng nếu muốn thử tinh bột.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Cẩn thận với nước sôi, ống nghiệm thuỷ tinh và nước vôi trong (có tính kiềm, tránh dính vào mắt). Iodine làm bẩn da và quần áo. Không nếm hoá chất; rửa tay sau khi thực hành.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 1: enzyme phân giải protein',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Ép lõi dứa lấy nước. Cho $0{,}5$ mL dịch vào mỗi ống nghiệm, đánh số từ $1$ đến $4$. Nếu dùng đu đủ, nghiền khoảng $5$ g vỏ hoặc lá tươi với $4$ mL nước rồi lọc lấy dịch trong.',
            'Xử lí từng ống như bảng dưới.',
            'Trộn $2$ mL lòng trắng trứng với $2$ mL nước cất. Cho $1$ mL hỗn hợp vào mỗi ống, lắc đều.',
            'Quan sát, ghi lại sự thay đổi và thời gian dung dịch chuyển trong ở từng ống.',
          ],
        },
        {
          type: 'table',
          caption: 'Cách xử lí và kết quả nên thấy ở cả hai thí nghiệm',
          head: ['Ống', 'Xử lí', 'Điều kiện được thử', 'Kết quả và giải thích'],
          rows: [
            [
              '$1$',
              'Thêm $0{,}1$ mL nước cất, để nhiệt độ phòng',
              'Đối chứng',
              'Enzyme hoạt động tốt: dung dịch trong nhanh, vết lõm rộng.',
            ],
            [
              '$2$',
              'Thêm $0{,}1$ mL nước vôi trong, để nhiệt độ phòng',
              'Môi trường kiềm',
              'pH lệch làm enzyme yếu đi: trong chậm hơn, vết lõm nhỏ.',
            ],
            [
              '$3$',
              'Thêm $0{,}1$ mL nước cất, đặt trong nước sôi $10$ phút, để nguội',
              'Nhiệt độ cao',
              'Enzyme biến tính: dung dịch không trong, không có vết lõm.',
            ],
            [
              '$4$',
              'Thêm $0{,}1$ mL nước cất, đặt trong nước đá',
              'Nhiệt độ thấp',
              'Enzyme hoạt động chậm khi còn lạnh; ấm lên thì phục hồi.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Thí nghiệm 2: kiểm tra hoạt tính amylase trên đĩa tinh bột',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Khuấy $2$ g bột sắn trong $100$ mL nước, đun sôi, đổ ra đĩa Petri và để nguội. Có thể chỉnh lượng bột để mặt đĩa đủ đặc, nghiêng không chảy mà không quá cứng.',
            'Nghiền mầm thóc hoặc ngô với $2$ mL nước, gạn lấy dịch. Cho $0{,}5$ mL dịch vào mỗi ống nghiệm đánh số từ $1$ đến $4$.',
            'Xử lí các ống như thí nghiệm 1; ống $3$ đun sôi xong để nguội ở nhiệt độ phòng.',
            'Đánh dấu bốn vị trí dưới đáy đĩa. Nhỏ $2$ giọt dịch của mỗi ống vào vị trí tương ứng.',
            'Sau $15$ phút, đo đường kính vết lõm ở từng vị trí bằng thước.',
          ],
        },
        { type: 'widget', name: 'dia-tinh-bot' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao lạnh và nóng khác nhau?',
          text: 'Ở ống $4$, giọt dịch ấm dần trên đĩa nên enzyme hoạt động trở lại: nhiệt độ thấp chỉ làm enzyme chậm đi. Ở ống $3$, đun sôi đã phá huỷ cấu hình không gian của enzyme nên để nguội cũng không phục hồi.',
        },
      ],
    },
    {
      heading: 'Thử iodine và ảnh hưởng của nồng độ',
      blocks: [
        {
          type: 'p',
          text: 'Thử iodine giúp thấy rõ tinh bột đã hết hay chưa. Trộn dịch enzyme với dung dịch tinh bột loãng trong ống nghiệm, để ở điều kiện cần thử. Sau mỗi khoảng thời gian, lấy một ít nhỏ vào iodine loãng, rồi đọc màu theo bảng. Cũng có thể phủ iodine lên đĩa tinh bột: nơi còn tinh bột có màu xanh đen, vết lõm không lên màu.',
        },
        {
          type: 'table',
          head: ['Màu với iodine', 'Ý nghĩa'],
          rows: [
            ['Xanh đen', 'Còn nhiều tinh bột'],
            ['Xanh tím', 'Tinh bột đã giảm'],
            ['Nâu đỏ', 'Còn ít tinh bột, chủ yếu là chuỗi đường ngắn'],
            ['Vàng nâu', 'Đã hết tinh bột; đây là màu của iodine'],
          ],
        },
        {
          type: 'p',
          text: 'Để kiểm tra ảnh hưởng của nồng độ, pha loãng dịch enzyme theo các mức (ví dụ $100\\%$, $50\\%$, $25\\%$) và giữ các điều kiện khác giống nhau: dịch càng loãng thì tinh bột mất càng chậm. Mỗi lần chỉ đổi một yếu tố, để biết chắc nguyên nhân của sự khác nhau.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'p',
          text: 'Báo cáo gồm: mục đích, chuẩn bị, cách tiến hành, kết quả, giải thích và kết luận. Ghi đúng số đo của nhóm; khi kết quả không như dự kiến, nêu nguyên nhân có thể có (dịch enzyme quá loãng, dùng nhầm ống, chưa để đủ thời gian). Mỗi dấu … là một ô cần điền.',
        },
        {
          type: 'table',
          caption: 'Mẫu bảng kết quả',
          head: [
            'Ống',
            'Điều kiện',
            'Thời gian chuyển trong (phút)',
            'Đường kính vết lõm (mm)',
            'Giải thích',
          ],
          rows: [
            ['$1$', 'Nước cất, nhiệt độ phòng', '…', '…', '…'],
            ['$2$', 'Nước vôi trong', '…', '…', '…'],
            ['$3$', 'Đun sôi $10$ phút', '…', '…', '…'],
            ['$4$', 'Nước đá', '…', '…', '…'],
          ],
        },
        {
          type: 'p',
          text: 'Trả lời thêm: vì sao dung dịch lòng trắng trứng từ đục chuyển sang trong và thời gian chuyển trong ở các ống khác nhau? Vì sao đường kính vết lõm ở các vị trí khác nhau? Vì sao ăn nhiều lõi dứa thấy rát lưỡi? Vì sao bát cháo ăn dở để lâu bị loãng, còn nhai cơm lâu thấy ngọt? Vì sao ướp thịt bò với đu đủ thì thịt mềm hơn, và vì sao không nên đun sôi nước dứa trước khi ướp thịt?',
        },
      ],
    },
  ],
  explore: {
    title: 'Giá ống nghiệm ảo',
    instruction:
      'Bốn ống đều chứa tinh bột và amylase mầm thóc. Chọn một ống để chỉnh nhiệt độ, pH và nồng độ enzyme, ủ rồi nhỏ iodine và đọc màu. Số liệu là mô hình để so sánh xu hướng, không thay cho kết quả đo của nhóm.',
  },
  examples: [
    {
      problem:
        'Sau $15$ phút, đường kính vết lõm ở ống $1$ (nước cất, nhiệt độ phòng) đo được ba lần là $19$ mm, $21$ mm và $20$ mm. Tính đường kính trung bình.',
      steps: [
        'Cộng ba lần đo: $19 + 21 + 20 = 60$ mm.',
        'Chia cho số lần đo: $60 : 3 = 20$ mm.',
        'Đo nhiều lần rồi lấy trung bình để giảm sai số.',
      ],
      answer: 'Đường kính trung bình là $20$ mm.',
    },
    {
      problem:
        'Một nhóm đun sôi dịch dứa rồi trộn với lòng trắng trứng, thấy dung dịch vẫn đục dù để rất lâu. Nhóm khác để dịch dứa trong nước đá rồi đưa ra nhiệt độ phòng, dung dịch trong dần. Giải thích.',
      steps: [
        'Thành phần phân giải protein trong dứa là enzyme, bản chất là protein.',
        'Nước sôi phá huỷ cấu hình không gian, enzyme mất hoạt tính nên không phân giải được lòng trắng trứng.',
        'Nước đá chỉ làm enzyme hoạt động chậm. Khi ấm lại, enzyme vẫn còn nguyên hoạt tính.',
      ],
      answer: 'Nhiệt độ cao làm enzyme biến tính, còn nhiệt độ thấp chỉ làm enzyme chậm lại.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm 1, enzyme phân giải protein được lấy từ đâu?',
      options: ['Lòng trắng trứng', 'Hạt thóc nảy mầm', 'Nước vôi trong', 'Nước ép lõi dứa'],
      answer: 3,
      hints: ['Lòng trắng trứng là cơ chất của enzyme này.'],
      solution: 'Enzyme bromelain nằm trong nước ép lõi dứa; lòng trắng trứng là cơ chất.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao dùng hạt thóc hoặc ngô đã nảy mầm để lấy amylase?',
      options: [
        'Vì hạt nảy mầm cần phân giải tinh bột dự trữ nên có nhiều amylase',
        'Vì hạt nảy mầm không còn tinh bột',
        'Vì amylase chỉ có ở rễ cây trưởng thành',
        'Vì hạt nảy mầm có nhiều protein hơn hạt khô',
      ],
      answer: 0,
      hints: ['Mầm cần đường để lớn, nhưng hạt tích trữ chủ yếu chất gì?'],
      solution:
        'Hạt dự trữ tinh bột. Khi nảy mầm, amylase được tạo nhiều để đổi tinh bột thành đường nuôi mầm.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước kiểm tra amylase trên đĩa tinh bột theo đúng thứ tự.',
      items: [
        'Sau $15$ phút, đo đường kính vết lõm',
        'Nghiền mầm, gạn lấy dịch, chia vào bốn ống',
        'Đun bột với nước, đổ đĩa Petri và để nguội',
        'Xử lí mỗi ống ở một điều kiện',
        'Nhỏ dịch mỗi ống lên vị trí đã đánh dấu',
      ],
      answer: [2, 1, 3, 4, 0],
      hints: [
        'Đĩa tinh bột phải nguội và sẵn sàng trước khi có dịch enzyme để nhỏ. Đo là việc cuối cùng.',
      ],
      solution:
        'Chuẩn bị đĩa tinh bột, lấy dịch enzyme, xử lí từng ống, nhỏ lên đĩa, rồi đo sau $15$ phút.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi màu khi thử iodine với điều nó cho biết.',
      left: ['Xanh đen', 'Nâu đỏ', 'Vàng nâu'],
      right: ['Đã hết tinh bột', 'Còn nhiều tinh bột', 'Còn ít tinh bột'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Iodine có màu vàng nâu khi không có gì để bắt màu.'],
      solution:
        'Xanh đen: còn nhiều tinh bột. Nâu đỏ: còn ít. Vàng nâu: màu của iodine, đã hết tinh bột.',
    },
    {
      type: 'choice',
      prompt:
        'Sau $15$ phút, một ống tinh bột và amylase cho màu vàng nâu khi thử iodine. Kết luận nào đúng?',
      options: [
        'Enzyme đã bị phá huỷ',
        'Tinh bột đã bị amylase thuỷ phân hết',
        'Tinh bột còn nguyên vẹn',
        'Iodine đã bị enzyme phân giải',
      ],
      answer: 1,
      hints: ['Màu vàng nâu cho thấy iodine không còn gì để bắt màu xanh đen.'],
      solution:
        'Không còn tinh bột để tạo màu xanh đen, tức amylase đã hoạt động và thuỷ phân hết tinh bột.',
    },
    {
      type: 'multi',
      prompt: 'Những ống nào giữ màu xanh đen rất lâu khi thử iodine?',
      options: [
        'Ống có amylase đun sôi $10$ phút',
        'Ống không có amylase',
        'Ống có amylase ở nhiệt độ phòng, pH thích hợp',
        'Ống có amylase ở $60\\,^\\circ\\mathrm{C}$',
      ],
      answers: [0, 1],
      hints: ['Tinh bột chỉ bị thuỷ phân khi có enzyme còn hoạt động.'],
      solution:
        'Ống đun sôi có enzyme đã biến tính, ống không enzyme thì không có chất xúc tác, nên tinh bột còn nguyên. Hai ống còn lại đều làm tinh bột mất dần.',
    },
    {
      type: 'choice',
      prompt: 'Ống $1$ trong cả hai thí nghiệm dùng để làm gì?',
      options: [
        'Làm mẫu đối chứng để so sánh với các ống còn lại',
        'Thử môi trường kiềm',
        'Cung cấp thêm enzyme cho ống khác',
        'Kiểm tra độ sạch của nước đá',
      ],
      answer: 0,
      hints: ['Ống này không có tác động đặc biệt nào về nhiệt độ hay pH.'],
      solution: 'Ống $1$ ở điều kiện bình thường, làm mốc để so sánh tác động của từng điều kiện.',
    },
    {
      type: 'number',
      prompt:
        'Đĩa tinh bột dùng $2$ g bột trong $100$ mL nước. Cần bao nhiêu gam bột để pha $250$ mL với cùng tỉ lệ?',
      answer: 5,
      unit: 'g',
      hints: ['$250$ mL gấp mấy lần $100$ mL?'],
      solution: '$250 : 100 = 2{,}5$ lần, nên cần $2 \\cdot 2{,}5 = 5$ g bột.',
    },
    {
      type: 'number',
      prompt:
        'Ở thí nghiệm 1, mỗi ống có $0{,}5$ mL dịch dứa, $0{,}1$ mL chất thử và $1$ mL dung dịch lòng trắng. Tổng thể tích mỗi ống là bao nhiêu mililít?',
      answer: 1.6,
      unit: 'mL',
      tolerance: 0.001,
      hints: ['Cộng cả ba thể tích.'],
      solution: '$0{,}5 + 0{,}1 + 1 = 1{,}6$ mL.',
    },
    {
      type: 'number',
      prompt:
        'Vết lõm ống $1$ rộng $21$ mm, ống $2$ (nước vôi trong) rộng $3$ mm. Đường kính vết lõm ống $1$ gấp bao nhiêu lần ống $2$?',
      answer: 7,
      hints: ['Lấy đường kính lớn chia cho đường kính nhỏ.'],
      solution: '$21 : 3 = 7$ lần.',
    },
    {
      type: 'choice',
      prompt: 'Muốn kiểm tra ảnh hưởng của nồng độ enzyme, cách làm nào đúng?',
      options: [
        'Pha loãng dịch enzyme ở nhiều mức, đồng thời đổi cả nhiệt độ từng ống',
        'Dùng một mức dịch enzyme, chỉ đổi lượng iodine',
        'Pha loãng dịch enzyme ở nhiều mức, giữ nhiệt độ và pH giống nhau',
        'Đun sôi dịch enzyme rồi pha loãng ở nhiều mức',
      ],
      answer: 2,
      hints: ['Để biết yếu tố nào gây ra kết quả, mỗi lần chỉ đổi một yếu tố.'],
      solution:
        'Chỉ đổi nồng độ enzyme, giữ nguyên các điều kiện khác. Đun sôi làm mọi mức đều mất hoạt tính nên không so sánh được.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao ướp thịt bò với dứa tươi làm thịt mềm hơn, còn dứa đóng hộp đã đun nóng thì kém hơn?',
      options: [
        'Dứa tươi có nhiều đường hơn dứa đóng hộp',
        'Thịt bò chỉ mềm trong môi trường có đường',
        'Dứa đóng hộp có enzyme hoạt động mạnh hơn',
        'Enzyme phân giải protein trong dứa tươi còn hoạt tính, còn đun nóng làm enzyme biến tính',
      ],
      answer: 3,
      hints: ['Thành phần chính của thịt là gì, và thành phần nào trong dứa tác động lên nó?'],
      solution:
        'Bromelain trong dứa tươi phân giải protein của thịt, làm thịt mềm. Đun nóng làm enzyme biến tính nên tác dụng này giảm hoặc mất.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao bát cháo ăn dở, để lâu thì bị loãng?',
      options: [
        'Vì cháo hút thêm nước từ không khí',
        'Vì amylase trong nước bọt dính vào cháo thuỷ phân tinh bột',
        'Vì tinh bột trong cháo tự bay hơi',
        'Vì nhiệt độ phòng làm enzyme trong cháo biến tính',
      ],
      answer: 1,
      hints: ['Thìa đã qua miệng đem theo enzyme nào, và cháo chứa chủ yếu chất gì?'],
      solution:
        'Nước bọt có amylase. Enzyme này thuỷ phân tinh bột của cháo thành đường tan trong nước, nên cháo loãng dần.',
    },
  ],
  takeaways: [
    'Enzyme trong lõi dứa làm dung dịch lòng trắng trứng trong dần; amylase của hạt nảy mầm tạo vết lõm trên đĩa tinh bột.',
    'Đun sôi làm enzyme biến tính, không phục hồi; nhiệt độ thấp chỉ làm enzyme chậm lại; pH lệch làm hoạt tính giảm.',
    'Nồng độ enzyme giảm thì phản ứng chậm đi; mỗi lần thí nghiệm chỉ đổi một yếu tố.',
    'Iodine cho màu xanh đen với tinh bột; màu vàng nâu nghĩa là tinh bột đã bị thuỷ phân hết.',
    'Báo cáo gồm mục đích, cách làm, số đo thật của nhóm, giải thích và kết luận.',
  ],
};
